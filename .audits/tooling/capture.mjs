// Reusable motion-verification capture harness for the Afterglows concepts gallery.
//
// Loads the REAL gallery page (concepts/header-animation-concepts.html) over a
// built-in static HTTP server rooted at the repo root, scrolls a concept tile
// into view (so the gallery's IntersectionObserver resumes its animations),
// waits a settle period, then takes N real unmanipulated screenshots at a fixed
// interval and pixel-diffs consecutive pairs.
//
// COORDINATE-SPACE FIX (learned in slice 1): page.screenshot clip rects are
// page-relative when captureBeyondViewport is true, so the clip must be
// getBoundingClientRect() + window.scrollX / window.scrollY, never the
// viewport-relative rect alone.
//
// Diffing happens inside the browser (canvas getImageData on data: URLs), so
// no Node-side PNG decoder is needed. Headless rendering is deterministic:
// a static region diffs to EXACTLY zero (see --control).
//
// Usage:
//   node .audits/tooling/capture.mjs --tags concept-candle,concept-coffee
//   node .audits/tooling/capture.mjs --tags concept-ekg --frames 4 --interval 300
//   node .audits/tooling/capture.mjs --control
// Options:
//   --tags a,b,c     comma-separated concept custom-element tags
//   --frames N       screenshots per tile (default 2)
//   --interval MS    ms between screenshots (default 850)
//   --settle MS      ms to wait after scrolling tile into view (default 900)
//   --out DIR        directory for saved frames + diff masks (default ./captures
//                    next to this script)
//   --port N         http port (default 3177)
//   --control        run the negative control instead: freeze all animations
//                    via the Web Animations API, screenshot a mid-page tile
//                    twice 850ms apart, expect pct == 0 exactly (and verify the
//                    frame has real content, so a blank capture can't pass).
//
// Output: one JSON line per tile on stdout with pct-changed (channel delta >=
// 30), changed-pixel count, changed-region bbox, and saved file paths.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const CHROME =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

// --- args ------------------------------------------------------------------
const args = process.argv.slice(2);
function opt(name, dflt) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : dflt;
}
const TAGS = (opt("tags", "") || "").split(",").filter(Boolean);
const PAGE = opt("page", "concepts/header-animation-concepts.html");
const FRAMES = parseInt(opt("frames", "2"), 10);
const INTERVAL = parseInt(opt("interval", "850"), 10);
const SETTLE = parseInt(opt("settle", "900"), 10);
const PORT = parseInt(opt("port", "3177"), 10);
const OUT = path.resolve(opt("out", path.join(__dirname, "captures")));
const CONTROL = args.includes("--control");
const THRESHOLD = 30; // per-channel delta considered "changed"

fs.mkdirSync(OUT, { recursive: true });

// --- static server ---------------------------------------------------------
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const file = path.join(REPO_ROOT, urlPath.replace(/^\//, ""));
  if (!file.startsWith(REPO_ROOT)) {
    res.writeHead(403).end();
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404).end("not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
    });
    res.end(data);
  });
});
await new Promise((r) => server.listen(PORT, "127.0.0.1", r));

// --- browser ---------------------------------------------------------------
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--force-device-scale-factor=1"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await page.goto(
  `http://127.0.0.1:${PORT}/${PAGE.replace(/^\//, "")}`,
  { waitUntil: "networkidle2", timeout: 60000 }
);

// The concepts-gallery landing view only shows the newest batch; switch to the
// curated sort so every concept renders. Other galleries (physics) render
// everything up front and have no sort control, so this is conditional. Either
// way, give the dynamic module imports a beat.
await page.evaluate(() => {
  const sel = document.querySelector(".concept-sort");
  if (!sel) return;
  sel.value = "curated";
  sel.dispatchEvent(new Event("change", { bubbles: true }));
});
await new Promise((r) => setTimeout(r, 2500));

// Blank page used purely as a canvas diff engine.
const diffPage = await browser.newPage();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function toDataUrl(buf) {
  return "data:image/png;base64," + Buffer.from(buf).toString("base64");
}

// Diff two PNG data URLs in-browser. Returns pct / changed / total / bbox and
// a white-on-black diff-mask data URL, plus basic content stats of frame A so
// a blank capture is detectable.
async function diffFrames(a, b) {
  return diffPage.evaluate(
    async (d1, d2, thr) => {
      const load = (src) =>
        new Promise((res, rej) => {
          const img = new Image();
          img.onload = () => res(img);
          img.onerror = rej;
          img.src = src;
        });
      const [ia, ib] = await Promise.all([load(d1), load(d2)]);
      const w = Math.min(ia.width, ib.width);
      const h = Math.min(ia.height, ib.height);
      const cv = (img) => {
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        const x = c.getContext("2d", { willReadFrequently: true });
        x.drawImage(img, 0, 0);
        return x.getImageData(0, 0, w, h).data;
      };
      const pa = cv(ia);
      const pb = cv(ib);
      const mask = document.createElement("canvas");
      mask.width = w;
      mask.height = h;
      const mx = mask.getContext("2d");
      const mi = mx.createImageData(w, h);
      let changed = 0;
      let minX = w, minY = h, maxX = -1, maxY = -1;
      let lumSum = 0;
      const colors = new Set();
      for (let i = 0, p = 0; i < pa.length; i += 4, p++) {
        const dr = Math.abs(pa[i] - pb[i]);
        const dg = Math.abs(pa[i + 1] - pb[i + 1]);
        const db = Math.abs(pa[i + 2] - pb[i + 2]);
        lumSum += 0.299 * pa[i] + 0.587 * pa[i + 1] + 0.114 * pa[i + 2];
        if (colors.size < 64) {
          colors.add((pa[i] << 16) | (pa[i + 1] << 8) | pa[i + 2]);
        }
        if (dr >= thr || dg >= thr || db >= thr) {
          changed++;
          const x = p % w;
          const y = (p / w) | 0;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
          mi.data[i] = 255;
          mi.data[i + 1] = 255;
          mi.data[i + 2] = 255;
        }
        mi.data[i + 3] = 255;
      }
      mx.putImageData(mi, 0, 0);
      return {
        width: w,
        height: h,
        total: w * h,
        changed,
        pct: (100 * changed) / (w * h),
        bbox: maxX < 0 ? null : { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 },
        meanLum: lumSum / (w * h),
        uniqueColorsSampled: colors.size,
        maskDataUrl: mask.toDataURL("image/png"),
      };
    },
    a,
    b,
    THRESHOLD
  );
}

// Scroll a tile into view and return its page-relative rect (scroll included).
async function tileRect(tag) {
  const ok = await page.evaluate((t) => {
    const el = document.querySelector(t);
    if (!el) return false;
    el.scrollIntoView({ block: "center", behavior: "instant" });
    return true;
  }, tag);
  if (!ok) return null;
  await sleep(SETTLE);
  return page.evaluate((t) => {
    const el = document.querySelector(t);
    const r = el.getBoundingClientRect();
    // Page-relative clip: viewport rect + scroll offsets (the coordinate fix).
    return {
      x: r.x + window.scrollX,
      y: r.y + window.scrollY,
      width: r.width,
      height: r.height,
    };
  }, tag);
}

async function shoot(clip) {
  return page.screenshot({
    clip,
    captureBeyondViewport: true,
    optimizeForSpeed: false,
  });
}

function saveDataUrl(dataUrl, file) {
  fs.writeFileSync(file, Buffer.from(dataUrl.split(",")[1], "base64"));
}

async function captureTile(tag, { freezeFirst = false } = {}) {
  const rect = await tileRect(tag);
  if (!rect) return { tag, error: "element not found" };
  if (freezeFirst) {
    await page.evaluate(() => {
      // WAAPI freeze. document.getAnimations() does NOT reliably include
      // shadow-tree animations, so walk every shadow root and pause each
      // element's animations individually. rAF-driven concepts would not
      // freeze this way, so the control tile must be CSS-animated.
      // playbackRate = 0 rather than pause(): the gallery's lazy-load
      // IntersectionObserver calls play() on tile animations when viewport
      // geometry changes (which captureBeyondViewport screenshots can
      // trigger), un-pausing them mid-capture. Rate 0 survives play().
      const freeze = (a) => {
        a.pause();
        a.playbackRate = 0;
      };
      const pauseIn = (root) => {
        root.querySelectorAll("*").forEach((el) => {
          el.getAnimations().forEach(freeze);
          if (el.shadowRoot) pauseIn(el.shadowRoot);
        });
      };
      document.getAnimations().forEach(freeze);
      pauseIn(document);
    });
    await sleep(100);
  }
  const frames = [];
  for (let i = 0; i < FRAMES; i++) {
    if (i > 0) await sleep(INTERVAL);
    frames.push(await shoot(rect));
  }
  const framePaths = frames.map((buf, i) => {
    const f = path.join(OUT, `${tag}-f${i}.png`);
    fs.writeFileSync(f, buf);
    return f;
  });
  const pairs = [];
  for (let i = 1; i < frames.length; i++) {
    const d = await diffFrames(toDataUrl(frames[i - 1]), toDataUrl(frames[i]));
    const maskFile = path.join(OUT, `${tag}-diff${i - 1}${i}.png`);
    saveDataUrl(d.maskDataUrl, maskFile);
    delete d.maskDataUrl;
    pairs.push({ a: i - 1, b: i, ...d, mask: maskFile });
  }
  return { tag, rect, frames: framePaths, pairs };
}

// --- run -------------------------------------------------------------------
if (CONTROL) {
  // Negative control: freeze everything, then two shots 850ms apart of a real
  // tile must diff to EXACTLY zero while still containing content.
  const tag = TAGS[0] || "concept-candle";
  const res = await captureTile(tag, { freezeFirst: true });
  const p = res.pairs?.[0];
  const pass =
    p && p.changed === 0 && p.uniqueColorsSampled > 4 && p.meanLum > 0;
  console.log(
    JSON.stringify({ control: true, tag, pass, ...res }, null, 2)
  );
} else {
  for (const tag of TAGS) {
    const res = await captureTile(tag);
    console.log(JSON.stringify(res));
  }
}

await browser.close();
server.close();
