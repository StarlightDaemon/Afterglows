import assert from "node:assert/strict";
import { once } from "node:events";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { ACTIVE_CONCEPTS, CATEGORIES, SECTIONS } from "../../concepts/gallery/manifest.js";
import { compareDate } from "../../concepts/gallery/gallery-query.js";
import { createSiteServer, HOST } from "../../scripts/serve-site.js";

const server = createSiteServer(fileURLToPath(new URL("../../dist/", import.meta.url)));
server.listen(0, HOST);
await once(server, "listening");
const gallery = `http://${HOST}:${server.address().port}/concepts/`;
const chrome = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const tags = cards => cards.map(card => card.dataset.concept);
const categories = SECTIONS.flatMap(section => CATEGORIES.filter(category => category.section === section.id));
function curatedOrder(page) {
  return categories.flatMap(category => page.filter(card => card.category === category.id)).map(card => card.tag);
}

let browser;
try {
  browser = await puppeteer.launch({ executablePath: chrome, headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.setViewport(process.argv.includes("--mobile")
    ? { width: 390, height: 844, isMobile: true, hasTouch: true }
    : { width: 1280, height: 900 });
  await page.goto(gallery + "?view=browse");
  await page.waitForSelector(".load-more");
  assert.deepEqual(await page.$$eval(".concept-card", tags), curatedOrder(ACTIVE_CONCEPTS.slice(0, 60)));

  // Select a version and focus its control. Trigger pagination without moving
  // focus, and track actual host and animation objects across browser frames.
  const first = await page.$(".terminal-box.is-versioned");
  await first.evaluate(box => {
    box.scrollIntoView({ block: "center" });
    box.click();
    box.focus();
  });
  await page.waitForFunction(box => box.querySelector("[data-mounted-concept]")?.shadowRoot
    .getAnimations().some(animation => animation.playState === "running"), {}, first);
  const preview = await first.evaluateHandle(box => {
    const host = box.querySelector("[data-mounted-concept]");
    const animation = host.shadowRoot.getAnimations().find(item => item.playState === "running");
    return { host, animation, time: animation.currentTime, version: host.getAttribute("version"),
      top: box.getBoundingClientRect().top, cards: [...document.querySelectorAll(".concept-card")] };
  });
  await page.$eval(".load-more", button => button.click());
  await page.waitForFunction((box, old) =>
    old.animation.currentTime > old.time && box.querySelector("[data-mounted-concept]") === old.host, { timeout: 5000 }, first, preview);
  assert.equal(await first.evaluate((box, old) =>
    document.activeElement === box && old.host.getAttribute("version") === old.version &&
    old.host.shadowRoot.getAnimations().includes(old.animation) && old.cards.every(card => card.isConnected) &&
    Math.abs(box.getBoundingClientRect().top - old.top) <= 1, preview), true);
  assert.deepEqual(await page.$$eval(".concept-card", tags), curatedOrder(ACTIVE_CONCEPTS.slice(0, 120)));

  // New cards receive the same observer and exactly one version handler.
  const added = ACTIVE_CONCEPTS.slice(60, 120).find(card => card.versioned);
  const newBox = await page.$(`[data-concept="${added.tag}"] .terminal-box`);
  await newBox.evaluate(box => box.scrollIntoView({ block: "center" }));
  await page.waitForFunction(box => box.querySelector("[data-mounted-concept]"), {}, newBox);
  await newBox.focus();
  await page.keyboard.press("Space");
  const next = (added.versions.findIndex(version => version.v === added.default) + 1) % added.versions.length;
  assert.equal(await newBox.evaluate(box => box.querySelector("[data-mounted-concept]").getAttribute("version")), added.versions[next].v);

  // Actual keyboard activation at the footer must retain the same focusable
  // button and the reader's location as grouped sections grow above it.
  await page.focus(".load-more");
  await page.waitForFunction(() => [...document.querySelectorAll("[data-mounted-concept]")].some(host => {
    const r = host.closest(".terminal-box").getBoundingClientRect();
    return r.top >= 0 && r.bottom <= innerHeight;
  }));
  const button = await page.$(".load-more");
  const footerHosts = await page.evaluateHandle(() => [...document.querySelectorAll("[data-mounted-concept]")].filter(host => {
    const r = host.getBoundingClientRect();
    return r.top >= 0 && r.bottom <= innerHeight;
  }).map(host => ({ host, top: host.getBoundingClientRect().top })));
  await page.keyboard.press("Enter");
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  assert.equal(await button.evaluate(el => el === document.activeElement && el.textContent === "Load more (820 remaining)"), true);
  assert.ok(await footerHosts.evaluate(items => items.some(({ host, top }) =>
    host.isConnected && Math.abs(host.getBoundingClientRect().top - top) <= 1)));

  // Exercise repeated and final partial pages. Compare every prefix to the
  // canonical grouped layout, including categories introduced out of order.
  for (let count = 180; ; count = Math.min(count + 60, ACTIVE_CONCEPTS.length)) {
    assert.deepEqual(await page.$$eval(".concept-card", tags), curatedOrder(ACTIVE_CONCEPTS.slice(0, count)));
    if (count === ACTIVE_CONCEPTS.length) break;
    await button.evaluate(el => el.click());
  }
  assert.equal(await page.$(".load-more"), null);
  assert.equal(await page.$eval(".filter-count", el => el === document.activeElement && el.textContent === "1000 results"), true);

  for (const field of ["added", "updated"]) {
    await page.goto(gallery + "?view=browse&section=physics&sort=" + field);
    const ordered = ACTIVE_CONCEPTS.filter(card => card.section === "physics").sort(compareDate(field));
    const firstGrid = await page.waitForSelector(".gallery-grid");
    const url = page.url();
    await page.$eval(".load-more", el => el.click());
    assert.deepEqual(await page.$$eval(".concept-card", tags), ordered.slice(0, 120).map(card => card.tag));
    assert.equal(await firstGrid.evaluate(grid => grid === document.querySelector(".gallery-grid")), true);
    assert.equal(await page.$$eval(".gallery-grid", grids => grids.length), 1);
    assert.equal(page.url(), url);
    await page.type(".concept-search", "no-matching-study-zzzz");
    await page.waitForSelector(".gallery-empty");
    assert.equal(await page.$(".load-more"), null);
    await page.click(".view-tab");
    await page.waitForFunction(() => document.querySelectorAll(".concept-card").length === 36);
    assert.equal(await page.$(".load-more"), null);
  }
  assert.deepEqual(errors, []);
  console.log("PASS: append-only pagination, animation continuity, versions, focus, taxonomy order, flat sorts, final page and filter resets.");
} finally {
  await browser?.close();
  server.close();
}
