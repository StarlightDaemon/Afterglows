import assert from "node:assert/strict";
import { once } from "node:events";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { CATEGORIES } from "../../concepts/gallery/manifest.js";
import { createSiteServer, HOST } from "../../scripts/serve-site.js";

const server = createSiteServer(fileURLToPath(new URL("../../dist/", import.meta.url)));
server.listen(0, HOST);
await once(server, "listening");
const url = `http://${HOST}:${server.address().port}/concepts/`;
let browser;
try {
  browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  const section = 'select[aria-label="Discipline"]';
  const category = 'select[aria-label="Category"]';
  await page.goto(url + "?q=wave&section=physics&sort=updated");
  await page.waitForSelector(".concept-card");
  const requests = await page.evaluate(() => performance.getEntriesByType("resource").map(r => new URL(r.name).pathname));
  assert.equal(requests.filter(path => path.endsWith("/card-catalog.js")).length, 1);
  assert.ok(!requests.some(path => path.includes("/gallery/manifests/") || path.endsWith("/gallery/manifest.js")));

  await page.click(".filter-button");
  assert.equal(await page.$eval(section, el => el.value), "physics");
  assert.deepEqual(await page.$$eval(category + " option", options => options.map(o => o.value)),
    ["", ...CATEGORIES.filter(c => c.section === "physics").map(c => c.id)]);
  await page.select(category, "mechanics");
  assert.equal(new URL(page.url()).searchParams.get("category"), "mechanics");
  await page.select(section, "mathematics");
  assert.equal(await page.$eval(category, el => el.value), "");
  assert.deepEqual(await page.$$eval(category + " option", options => options.map(o => o.value)),
    ["", ...CATEGORIES.filter(c => c.section === "mathematics").map(c => c.id)]);
  await page.click(".filter-clear");
  assert.equal(await page.$$eval(category + " option", options => options.length), CATEGORIES.length + 1);
  await page.keyboard.press("Escape");
  assert.equal(await page.$eval(".filter-button", el => el === document.activeElement), true);

  // Send rapid replacements in one burst. Only the last value should render.
  await page.$eval(".concept-search", input => {
    input.focus();
    window.searchUpdates = [];
    new MutationObserver(() => {
      window.searchUpdates.push(new URLSearchParams(location.search).get("q"));
    }).observe(document.querySelector(".filter-count"), { childList: true });
    for (const value of ["impossible-query-zzz", "archimedes", "archimedes trammel"]) {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
  await page.waitForFunction(() => document.querySelector(".filter-count").textContent === "1 result");
  assert.deepEqual(await page.evaluate(() => window.searchUpdates), ["archimedes trammel"]);
  assert.equal(await page.$eval(".concept-card", el => el.dataset.concept), "concept-archimedes-trammel");
  assert.equal(await page.$eval(".concept-search", el => el === document.activeElement), true);
  assert.deepEqual(errors, []);
  console.log("PASS: single built catalog request, filtered deep link, scoped category choices, focus, and latest-input search.");
} finally {
  await browser?.close();
  server.close();
}
