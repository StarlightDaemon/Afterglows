import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { withGalleryBrowser } from "./gallery-browser.mjs";

const { values } = parseArgs({ options: {
  build: { type: "string", default: "dist" },
  out: { type: "string" },
  baseline: { type: "string" },
} });
if (!values.out) throw new Error("Usage: npm run profile:gallery -- --build <site-directory> --out <results-directory> [--baseline <report.json>]");
const buildDir = path.resolve(values.build);
const outputDir = path.resolve(values.out);
const out = name => path.join(outputDir, name);
const hash = bytes => createHash("sha256").update(bytes).digest("hex");
const baseline = values.baseline ? JSON.parse(await fs.readFile(values.baseline, "utf8")) : null;
const report = { renderer: hash(await fs.readFile(path.join(buildDir, "concepts/gallery/index.js"))), profiles: {} };
await fs.mkdir(outputDir, { recursive: true });

function installProbe() {
  window.shellTime = null;
  window.previewTime = null;
  const startup = new MutationObserver(() => {
    if (window.shellTime === null && document.querySelector(".concept-card")) window.shellTime = performance.now();
    if (document.querySelector("[data-mounted-concept]")) {
      window.previewTime = performance.now();
      startup.disconnect();
    }
  });
  startup.observe(document, { childList: true, subtree: true });
}

function search(value) {
  const input = document.querySelector(".concept-search");
  const count = document.querySelector(".filter-count");
  const root = document.querySelector("#gallery-root");
  input.focus({ preventScroll: true });
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const deadline = setTimeout(() => { observer.disconnect(); reject(new Error("Search timed out: " + value)); }, 10000);
    const observer = new MutationObserver(() => {
      if ((new URLSearchParams(location.search).get("q") || "") !== value) return;
      observer.disconnect();
      const commitMs = performance.now() - start;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        clearTimeout(deadline);
        resolve({commitMs, frameMs: performance.now() - start, state: {
          count: count.textContent, url: location.search, focus: input === document.activeElement,
          tags: [...root.querySelectorAll(".concept-card")].map(c => c.dataset.concept)
        }});
      }));
    });
    observer.observe(root, { childList: true, subtree: true });
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

async function settled(page) {
  await page.waitForFunction(() => [...document.querySelectorAll(".terminal-box")].every(box => {
    const r = box.getBoundingClientRect();
    return r.top >= innerHeight || r.bottom <= 0 || !!box.querySelector("[data-mounted-concept]");
  }));
}

async function screenshot(page, name) {
  await settled(page);
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.activeElement?.blur();
    for (const animation of document.getAnimations()) { animation.pause(); animation.currentTime = 500; }
  });
  return hash(await page.screenshot({ path: out(`${name}.png`) }));
}

async function measureStartup(page) {
  await page.waitForFunction(() => window.previewTime !== null);
  return page.evaluate(() => {
    const modules = performance.getEntriesByType("resource").filter(resource => {
      const pathname = new URL(resource.name).pathname;
      return pathname.startsWith("/concepts/gallery/") && !pathname.startsWith("/concepts/gallery/concepts/");
    });
    return {
      shellMs: window.shellTime,
      previewMs: window.previewTime,
      startupModules: modules.length,
      moduleBytes: modules.reduce((total, resource) => total + resource.encodedBodySize, 0),
      moduleEndMs: Math.max(...modules.map(resource => resource.responseEnd)),
      recent: [...document.querySelectorAll(".concept-card")].map(card => card.dataset.concept),
    };
  });
}

async function captureScreens(page, url, profile) {
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.goto(url);
  await page.waitForFunction(() => window.previewTime !== null);
  const recent = await screenshot(page, profile + "-recent");
  await page.goto(url + "?view=browse&q=wave&section=physics&sort=updated");
  await page.waitForFunction(() => window.previewTime !== null);
  const search = await screenshot(page, profile + "-search");
  await page.click(".filter-button");
  const filters = await screenshot(page, profile + "-filters");
  return { recent, search, filters };
}

const profiles = {
  desktop: { width: 1280, height: 900, cpu: 1, latency: 20 },
  mobile: { width: 390, height: 844, cpu: 4, latency: 60 },
};
const queries = { broad: "wave", alias: "archimedes trammel", empty: "none-matching-zzzz", clear: "" };
const runs = 5;
const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];

await withGalleryBrowser(async (browser, url) => {
  report.browser = await browser.version();
  for (const [profile, settings] of Object.entries(profiles)) {
    const { width, height, cpu, latency } = settings;
    const result = report.profiles[profile] = { ...settings, samples: [] };
    for (let i = 0; i < runs; i++) {
      const context = await browser.createBrowserContext();
      try {
        const page = await context.newPage();
        const errors = [];
        page.on("pageerror", error => errors.push(error.message));
        await page.setViewport({ width, height, isMobile: profile === "mobile", hasTouch: profile === "mobile" });
        const cdp = await page.createCDPSession();
        await cdp.send("Emulation.setCPUThrottlingRate", { rate: cpu });
        await cdp.send("Network.enable");
        await cdp.send("Network.emulateNetworkConditions", { offline: false, latency, downloadThroughput: -1, uploadThroughput: -1 });
        await page.evaluateOnNewDocument(installProbe);
        await page.goto(url, { waitUntil: "domcontentloaded" });
        const sample = await measureStartup(page);
        const reference = baseline?.profiles[profile].samples[i];
        assert.equal(sample.recent.length, 36);
        sample.recent = hash(JSON.stringify(sample.recent));
        if (reference) assert.equal(sample.recent, reference.recent);
        await settled(page);
        sample.search = {};
        for (const [key, value] of Object.entries(queries)) {
          const { commitMs, frameMs, state } = await page.evaluate(search, value);
          assert.ok(state.focus);
          if (key === "alias") assert.ok(state.tags.includes("concept-archimedes-trammel"));
          if (key === "empty") assert.equal(state.count, "0 results");
          if (key === "clear") assert.equal(state.tags.length, 60);
          const signature = hash(JSON.stringify(state));
          if (reference) assert.equal(signature, reference.search[key].signature);
          sample.search[key] = { commitMs, frameMs, count: state.count, signature };
          await settled(page);
        }
        if (i === runs - 1) {
          result.pictures = await captureScreens(page, url, profile);
          if (baseline) {
            // Rasterization can differ by a few channel levels between
            // identical runs. Keep the captures for comparison in the report.
            result.screenshotMatches = {};
            for (const [screen, digest] of Object.entries(result.pictures)) {
              result.screenshotMatches[screen] = digest === baseline.profiles[profile].pictures[screen];
              if (!result.screenshotMatches[screen]) console.warn(`Screenshot differs: ${profile}/${screen}`);
            }
          }
        }
        assert.deepEqual(errors, []);
        result.samples.push(sample);
      } finally {
        await context.close();
      }
    }
    result.medians = {
      shellMs: median(result.samples.map(sample => sample.shellMs)),
      previewMs: median(result.samples.map(sample => sample.previewMs)),
      searchCommitMs: Object.fromEntries(Object.keys(queries).map(key =>
        [key, median(result.samples.map(sample => sample.search[key].commitMs))])),
    };
    console.log(profile, result.medians);
  }
}, buildDir);
await fs.writeFile(out("report.json"), JSON.stringify(report, null, 2) + "\n");
console.log("Wrote " + out("report.json"));
