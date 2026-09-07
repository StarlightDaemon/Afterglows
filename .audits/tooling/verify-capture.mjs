// Targeted verification capture — parameterized derivative of
// responsive-capture.mjs (same server, freeze, metrics, and
// scroll-and-stitch logic) for re-capturing specific page/width combos
// after a fix instead of the full 30-combo audit matrix.
//
// Usage: node verify-capture.mjs <pageKey|urlPath> <WxH> [WxH ...] [--tag=name]
//   e.g. node verify-capture.mjs matrix 320x568 1280x900 --tag=fix1
// Page keys: hub concepts physics matrix retro (same as the audit harness).
// Output: .audits/tooling/captures/verify/<tag-><page>-<w>.png + metrics JSON.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const REPO_ROOT = "E:/Citadel/Afterglows";
const OUT = path.join(REPO_ROOT, ".audits/tooling/captures/verify");
const PORT = 3197;
const CHROME = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
fs.mkdirSync(OUT, { recursive: true });

const PAGE_KEYS = {
  hub: "/",
  concepts: "/concepts/header-animation-concepts.html",
  physics: "/physics/",
  matrix: "/matrix_code/",
  retro: "/retro/crt_demo.html",
};

const argv = process.argv.slice(2);
const tagArg = argv.find((a) => a.startsWith("--tag="));
const tag = tagArg ? tagArg.split("=")[1] + "-" : "";
const pos = argv.filter((a) => !a.startsWith("--"));
const pageArg = pos[0];
const pageKey = PAGE_KEYS[pageArg] ? pageArg : "custom";
const url = PAGE_KEYS[pageArg] || pageArg;
const widths = pos.slice(1).map((s) => {
  const [w, h] = s.split("x").map(Number);
  return { w, h: h || Math.round(w * 1.9) };
});
if (!url || !widths.length) {
  console.error("usage: node verify-capture.mjs <pageKey|urlPath> <WxH> [WxH ...] [--tag=name]");
  process.exit(1);
}
const MAX_STITCH = 30000;

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".ico": "image/x-icon", ".woff2": "font/woff2",
};
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const file = path.join(REPO_ROOT, urlPath.replace(/^\//, ""));
  if (!file.startsWith(path.resolve(REPO_ROOT))) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404).end("not found"); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
});
await new Promise((r) => server.listen(PORT, "127.0.0.1", r));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: true,
  args: ["--force-device-scale-factor=1"],
});
const stitchPage = await browser.newPage();
await stitchPage.setViewport({ width: 800, height: 600 });
await stitchPage.goto("about:blank");

function freezeAll() {
  const freeze = (a) => { try { a.pause(); a.playbackRate = 0; } catch (e) {} };
  const pauseIn = (root) => {
    root.querySelectorAll("*").forEach((el) => {
      el.getAnimations().forEach(freeze);
      if (el.shadowRoot) pauseIn(el.shadowRoot);
    });
  };
  document.getAnimations().forEach(freeze);
  pauseIn(document);
}

function collectMetrics() {
  const vw = window.innerWidth;
  const de = document.documentElement;
  const all = [];
  const walk = (root) => {
    root.querySelectorAll("*").forEach((el) => {
      all.push(el);
      if (el.shadowRoot) walk(el.shadowRoot);
    });
  };
  walk(document);
  const vis = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== "hidden" && cs.display !== "none" && cs.opacity !== "0";
  };
  const desc = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    const c = typeof el.className === "string" ? el.className.trim() : "";
    if (c) s += "." + c.split(/\s+/).slice(0, 3).join(".");
    const host = el.getRootNode().host;
    if (host) s = host.tagName.toLowerCase() + "::" + s;
    return s;
  };

  const overPairs = [];
  const overSet = new Set();
  for (const el of all) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) {
      overPairs.push([el, {
        d: desc(el), left: +r.left.toFixed(1), right: +r.right.toFixed(1),
        top: Math.round(r.top + window.scrollY), w: +r.width.toFixed(1),
      }]);
      overSet.add(el);
    }
  }
  const overflowRoots = overPairs
    .filter(([el]) => {
      const p = el.parentElement || el.getRootNode().host;
      return !p || !overSet.has(p);
    })
    .map(([, info]) => info);

  const isInteractive = (el) => {
    try {
      return el.matches('a[href],button,select,input,textarea,summary,[role="button"],[tabindex]:not([tabindex="-1"])');
    } catch (e) { return false; }
  };
  const targets = [];
  for (const el of all) {
    if (!isInteractive(el) || !vis(el)) continue;
    const r = el.getBoundingClientRect();
    targets.push({ el, r, d: desc(el) });
  }
  // Overlap pairs: interactive elements whose rects actually intersect
  // (stricter than the audit's 4px-expanded close-pair metric — this is
  // the "chrome sits on top of content" check).
  const overlapPairs = [];
  for (let i = 0; i < targets.length && overlapPairs.length < 40; i++) {
    for (let j = i + 1; j < targets.length && overlapPairs.length < 40; j++) {
      const a = targets[i].r, b = targets[j].r;
      if (a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom) {
        if (targets[j].el.contains(targets[i].el) || targets[i].el.contains(targets[j].el)) continue;
        overlapPairs.push({ a: targets[i].d, b: targets[j].d, top: Math.round(a.top + window.scrollY) });
      }
    }
  }
  const closePairs = [];
  for (let i = 0; i < targets.length && closePairs.length < 40; i++) {
    for (let j = i + 1; j < targets.length && closePairs.length < 40; j++) {
      const a = targets[i].r, b = targets[j].r;
      if (Math.min(a.width, a.height) >= 48 && Math.min(b.width, b.height) >= 48) continue;
      const pad = 4;
      if (a.left - pad < b.right && b.left - pad < a.right && a.top - pad < b.bottom && b.top - pad < a.bottom) {
        if (targets[j].el.contains(targets[i].el) || targets[i].el.contains(targets[j].el)) continue;
        closePairs.push({ a: targets[i].d, b: targets[j].d, top: Math.round(a.top + window.scrollY) });
      }
    }
  }

  return {
    vw, vh: window.innerHeight,
    scrollWidth: Math.max(de.scrollWidth, document.body ? document.body.scrollWidth : 0),
    clientWidth: de.clientWidth,
    scrollHeight: Math.max(de.scrollHeight, document.body ? document.body.scrollHeight : 0),
    hasHScroll: Math.max(de.scrollWidth, document.body ? document.body.scrollWidth : 0) > de.clientWidth + 1,
    overflowCount: overPairs.length,
    overflowRoots: overflowRoots.slice(0, 40),
    interactiveCount: targets.length,
    overlapPairs,
    closePairs,
    title: document.title,
  };
}

const allMetrics = [];
for (const vp of widths) {
  const label = `${tag}${pageKey}-${vp.w}`;
  const p = await browser.newPage();
  await p.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 1 });
  await p.goto(`http://127.0.0.1:${PORT}${url}`, { waitUntil: "networkidle2", timeout: 90000 });
  await sleep(2200);
  await p.evaluate(async () => {
    const s = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = window.innerHeight;
    const H = () => Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    for (let y = 0; y <= H(); y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await s(70);
    }
    window.scrollTo({ top: H(), behavior: "instant" });
    await s(250);
  });
  await sleep(1200);
  await p.evaluate(freezeAll);
  await p.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await sleep(400);
  const metrics = await p.evaluate(collectMetrics);

  const H = Math.min(metrics.scrollHeight, MAX_STITCH);
  await stitchPage.evaluate((w, h) => {
    window.__c = document.createElement("canvas");
    window.__c.width = w; window.__c.height = h;
    window.__x = window.__c.getContext("2d");
    window.__x.fillStyle = "#000";
    window.__x.fillRect(0, 0, w, h);
  }, vp.w, H);
  let y = 0;
  let guard = 0;
  while (y < H && guard < 200) {
    guard++;
    await p.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
    await sleep(90);
    const actualY = await p.evaluate(() => window.scrollY);
    const buf = await p.screenshot({ optimizeForSpeed: true });
    const dataUrl = "data:image/png;base64," + Buffer.from(buf).toString("base64");
    await stitchPage.evaluate(async (src, yy) => {
      const img = await new Promise((res, rej) => {
        const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src;
      });
      window.__x.drawImage(img, 0, yy);
    }, dataUrl, actualY);
    if (actualY + vp.h >= H - 1) break;
    y = actualY + vp.h;
  }
  const stitched = await stitchPage.evaluate(() => window.__c.toDataURL("image/png"));
  const outFile = path.join(OUT, `${label}.png`);
  fs.writeFileSync(outFile, Buffer.from(stitched.split(",")[1], "base64"));

  allMetrics.push({ page: pageKey, width: vp.w, height: vp.h, file: outFile, ...metrics });
  console.log(JSON.stringify({
    label, scrollHeight: metrics.scrollHeight, hasHScroll: metrics.hasHScroll,
    scrollWidth: metrics.scrollWidth,
    overflowCount: metrics.overflowCount,
    overlapPairs: metrics.overlapPairs,
    closePairs: metrics.closePairs.length,
  }, null, 1));
  await p.close();
}

fs.writeFileSync(path.join(OUT, `${tag}${pageKey}-metrics.json`), JSON.stringify(allMetrics, null, 2));
await browser.close();
server.close();
console.log("done -> " + OUT);
