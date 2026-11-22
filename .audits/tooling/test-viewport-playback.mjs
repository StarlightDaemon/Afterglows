import assert from "node:assert/strict";
import { runBrowserChecks } from "./gallery-browser.mjs";

// Use actual browser geometry as an independent oracle for the gallery's observers.
function visibleBoxesMounted() {
  const boxes = [...document.querySelectorAll("#gallery-root .terminal-box")];
  return boxes.length > 0 && boxes.every(box => {
    const rect = box.getBoundingClientRect();
    const visible = rect.bottom > 0 && rect.top < innerHeight && rect.left < innerWidth && rect.right > 0;
    return box.querySelectorAll("[data-mounted-concept]").length === Number(visible);
  });
}

async function alignBox(page, tag, top) {
  await page.$eval(`[data-concept="${tag}"] .terminal-box`, (box, y) => {
    window.scrollBy({ top: box.getBoundingClientRect().top - y, behavior: "instant" });
  }, top);
}

export async function testViewportPlayback(context, gallery) {
  const page = await context.newPage();
  await page.setViewport({ width: 1000, height: 700 });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(gallery);
  await page.bringToFront();
  await page.waitForFunction(visibleBoxesMounted);
  const [warm, delayed] = await page.$$eval(".concept-card", cards =>
    [cards[15], cards[27]].map(card => ({
      tag: card.dataset.concept,
      url: card.querySelector(".concept-source").href,
    }))
  );
  assert.equal(await page.evaluate(tag => Boolean(customElements.get(tag)), warm.tag), false);

  // Bring a fresh card within the 200px loading margin, then expose one pixel.
  await alignBox(page, warm.tag, 800);
  await page.waitForFunction(tag => Boolean(customElements.get(tag)), {}, warm.tag);
  await page.waitForFunction(visibleBoxesMounted);
  // Scrolling snaps to device pixels. Correct the remaining subpixel offset on
  // this box so the observer sees an exact shared edge before the single pixel.
  await alignBox(page, warm.tag, 700);
  const warmBox = await page.$(`[data-concept="${warm.tag}"] .terminal-box`);
  const topAtEdge = await warmBox.evaluate(box => {
    box.style.translate = `0 ${innerHeight - box.getBoundingClientRect().top}px`;
    return box.getBoundingClientRect().top;
  });
  assert.equal(topAtEdge, 700);
  const settleObservers = () => page.evaluate(() => new Promise(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  }));
  await settleObservers();
  assert.equal(await page.$(`${warm.tag}[data-mounted-concept]`), null);
  await page.evaluate(() => scrollBy({ top: 1, behavior: "instant" }));
  assert.equal(await warmBox.evaluate(box => box.getBoundingClientRect().top), 699);
  await page.waitForFunction(visibleBoxesMounted);
  await page.waitForSelector(`${warm.tag}[data-mounted-concept]`);
  await page.evaluate(() => scrollBy({ top: -1, behavior: "instant" }));
  await page.waitForFunction(visibleBoxesMounted);
  assert.equal(await page.$(`${warm.tag}[data-mounted-concept]`), null);
  await warmBox.evaluate(box => box.style.removeProperty("translate"));
  await alignBox(page, warm.tag, 710);
  await page.waitForFunction(visibleBoxesMounted);
  assert.equal(await page.$(`${warm.tag}[data-mounted-concept]`), null);
  await alignBox(page, warm.tag, 690);
  await page.waitForFunction(visibleBoxesMounted);
  assert.equal(await page.evaluate(url => performance.getEntriesByName(url).length, warm.url), 1);

  const background = await context.newPage();
  await background.bringToFront();
  // Timer polling also runs when Chromium suspends background animation frames.
  await page.waitForFunction(() => document.hidden && !document.querySelector("[data-mounted-concept]"), { polling: 100 });
  await page.bringToFront();
  await page.waitForFunction(visibleBoxesMounted);
  await background.close();

  // Hold an actual module response while scrolling past its card and changing results.
  await page.setRequestInterception(true);
  let heldRequest;
  let failURL;
  const requested = [];
  page.on("request", request => {
    if (request.url() === delayed.url && !heldRequest) {
      heldRequest = request;
    } else if (request.url() === failURL) {
      requested.push(request.url());
      failURL = undefined;
      void request.respond({ status: 503, body: "Test interruption" });
    } else {
      if (new URL(request.url()).searchParams.has("ag-retry")) requested.push(request.url());
      void request.continue();
    }
  });
  const delayedStart = page.waitForRequest(request => request.url() === delayed.url);
  await alignBox(page, delayed.tag, 200);
  await delayedStart;
  const oldCard = await page.$(`[data-concept="${delayed.tag}"]`);
  await oldCard.evaluate(card => {
    card.testMounts = [];
    new MutationObserver(records => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE && node.matches("[data-mounted-concept]")) {
            card.testMounts.push(node.localName);
          }
        }
      }
    }).observe(card, { childList: true, subtree: true });
  });
  await alignBox(page, warm.tag, 200);
  await page.type(".concept-search", "no matching viewport study");
  await page.waitForSelector(".gallery-empty");
  await heldRequest.continue();
  await page.waitForFunction(tag => Boolean(customElements.get(tag)), {}, delayed.tag);
  assert.deepEqual(await oldCard.evaluate(card => [card.isConnected, card.testMounts]), [false, []]);

  await page.goto(gallery + "?view=browse");
  await page.waitForFunction(visibleBoxesMounted);
  const versionedTag = await page.$$eval(".terminal-box.is-versioned", boxes =>
    boxes.find(box => box.getBoundingClientRect().top > innerHeight + 500)?.closest(".concept-card").dataset.concept);
  assert.ok(versionedTag, "Browse must have a distant versioned preview");
  await alignBox(page, versionedTag, 800);
  await page.waitForFunction(tag => Boolean(customElements.get(tag)), {}, versionedTag);
  await settleObservers();
  const versionedCard = `[data-concept="${versionedTag}"]`;
  const [initialVersion, selectedVersion] = await page.$eval(versionedCard, card => {
    const activeVersion = () => card.querySelector(".concept-frame.is-active template").content.firstElementChild.getAttribute("version");
    const before = activeVersion();
    // Dispatch without focusing or scrolling the offscreen button into view.
    card.querySelector(".version-dot:not(.is-active)").click();
    return [before, activeVersion()];
  });
  assert.ok(selectedVersion);
  assert.notEqual(selectedVersion, initialVersion);
  assert.equal(await page.$(versionedCard + " [data-mounted-concept]"), null);
  await alignBox(page, versionedTag, 650);
  await page.waitForFunction(visibleBoxesMounted);
  assert.deepEqual(await page.$$eval(versionedCard + " [data-mounted-concept]", hosts =>
    hosts.map(host => [host.getAttribute("version"), host.parentElement.matches(".concept-frame.is-active")])),
    [[selectedVersion, true]], "only the newly selected version can mount on viewport entry");

  const versionedURL = gallery + "?q=Fractal%20Tree";
  await page.goto(versionedURL);
  const card = '[data-concept="concept-fractal-tree"]';
  const mounted = card + " [data-mounted-concept]";
  await page.waitForSelector(mounted);
  const before = await page.$eval(mounted, el => el.getAttribute("version"));
  await page.click(card + " .terminal-box");
  await page.waitForFunction((selector, version) =>
    document.querySelector(selector)?.getAttribute("version") !== version, {}, mounted, before);
  assert.equal((await page.$$(mounted)).length, 1);
  assert.ok(await page.$(card + " .concept-frame.is-active [data-mounted-concept]"));
  const hasMotion = selector => document.querySelector(selector).shadowRoot.getAnimations()
    .some(animation => animation.playState === "running");
  await page.waitForFunction(hasMotion, {}, mounted);
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.waitForFunction(selector =>
    document.querySelector(selector).shadowRoot.getAnimations().every(a => a.playState !== "running"), {}, mounted);
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  await page.waitForFunction(hasMotion, {}, mounted);

  // Fail a fresh document's first import. Revisit through search, preserving the
  // browser's failed module map so recovery exercises the cache-busting retry URL.
  const sourceURL = await page.$eval(card + " .concept-source", el => el.href);
  failURL = sourceURL;
  await page.reload();
  await page.waitForSelector(card + " .concept-load-error");
  await page.$eval(".concept-search", el => {
    el.value = "no matching viewport study";
    el.dispatchEvent(new Event("input"));
  });
  await page.waitForSelector(".gallery-empty");
  await page.$eval(".concept-search", el => {
    el.value = "Fractal Tree";
    el.dispatchEvent(new Event("input"));
  });
  await page.waitForSelector(mounted);
  assert.equal(requested.length, 2);
  assert.equal(new URL(requested[1]).pathname, new URL(sourceURL).pathname);
  assert.ok(new URL(requested[1]).searchParams.has("ag-retry"));

  // A speculative failure is silent. Entering the viewport retries it once,
  // including when the card never left the loading margin between attempts.
  await page.goto(gallery);
  await page.waitForFunction(visibleBoxesMounted);
  requested.length = 0;
  failURL = warm.url;
  const failedPreload = page.waitForResponse(response => response.url() === warm.url && response.status() === 503);
  await alignBox(page, warm.tag, 800);
  await failedPreload;
  await page.waitForNetworkIdle();
  assert.deepEqual(requested, [warm.url]);
  const warmCard = `[data-concept="${warm.tag}"]`;
  assert.equal(await page.$(warmCard + " .concept-load-error"), null);
  assert.equal(await page.$(warmCard + " [data-mounted-concept]"), null);
  await alignBox(page, warm.tag, 650);
  await page.waitForFunction(visibleBoxesMounted);
  await page.waitForSelector(warmCard + " [data-mounted-concept]");
  assert.equal(requested.length, 2);
  assert.equal(new URL(requested[1]).pathname, new URL(warm.url).pathname);
  assert.ok(new URL(requested[1]).searchParams.has("ag-retry"));
  assert.deepEqual(errors, []);
  console.log("PASS: near-only preload, partial visibility, cached remount, hidden tab, stale import, versions, reduced motion, and failed import recovery.");
}

if (import.meta.main) await runBrowserChecks([testViewportPlayback]);
