// Responsive layout audit capture harness (investigation only, writes nothing
// into page files). Serves the real repo over a static server, loads each of
// the five live pages at a set of portrait viewport widths, lets lazy content
// settle, freezes animations (WAAPI walk incl. shadow roots, playbackRate=0),
// collects programmatic layout metrics, then scroll-and-stitches viewport
// screenshots into one full-height PNG per page/width. Scroll-and-stitch (not
// captureBeyondViewport clips) so 100vh / fixed chrome render exactly as on a
// real device.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const REPO_ROOT = "E:/Citadel/Afterglows";
const OUT = path.join(REPO_ROOT, ".audits/tooling/captures/responsive-2026-08-20");
const PORT = 3199;
const CHROME = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
fs.mkdirSync(OUT, { recursive: true });

const PAGES = [
  { key: "hub", url: "/" },
  { key: "concepts", url: "/concepts/header-animation-concepts.html" },
  { key: "physics", url: "/physics/" },
  { key: "matrix", url: "/matrix_code/" },
  { key: "retro", url: "/retro/crt_demo.html" },
];
const WIDTHS = [
  { w: 320, h: 568 },
  { w: 375, h: 667 },
  { w: 414, h: 896 },
  { w: 600, h: 960 },
  { w: 768, h: 1024 },
  { w: 900, h: 1200 },
];
const MAX_STITCH = 30000; // canvas safety cap

// --- static server (same shape as .audits/tooling/capture.mjs) --------------
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

  // Horizontal overflow offenders (viewport is at scroll 0,0)
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

  // Interactive targets
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
  const smallTargets = targets
    .filter((t) => t.r.width < 40 || t.r.height < 40)
    .map((t) => ({ d: t.d, w: Math.round(t.r.width), h: Math.round(t.r.height), top: Math.round(t.r.top + window.scrollY) }));

  // Close pairs: two interactive targets whose rects (expanded 4px) intersect,
  // where at least one is small in some dimension.
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

  // Text clipping: elements whose content is wider than their box
  const clipSel = ".concept-label,.meta-badge,.section-title,.cat-chip,h1,h2,h3,.header-title,.subtitle,.tagline,p,button,a";
  const clipped = [];
  for (const el of all) {
    let m = false;
    try { m = el.matches(clipSel); } catch (e) {}
    if (!m || !vis(el)) continue;
    if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      const cs = getComputedStyle(el);
      clipped.push({
        d: desc(el), sw: el.scrollWidth, cw: el.clientWidth,
        overflow: cs.overflowX, top: Math.round(el.getBoundingClientRect().top + window.scrollY),
      });
    }
  }

  // Grid stats
  const grids = [];
  for (const g of document.querySelectorAll(".gallery-grid,.projects-grid,.skills-grid,.demo-grid,.tools-grid")) {
    const cs = getComputedStyle(g);
    const cols = cs.gridTemplateColumns === "none" ? 0 : cs.gridTemplateColumns.split(" ").length;
    const first = g.firstElementChild;
    const fr = first ? first.getBoundingClientRect() : null;
    grids.push({
      d: desc(g), cols, items: g.children.length,
      itemW: fr ? Math.round(fr.width) : null, itemH: fr ? Math.round(fr.height) : null,
    });
  }

  return {
    vw, vh: window.innerHeight,
    scrollWidth: Math.max(de.scrollWidth, document.body ? document.body.scrollWidth : 0),
    clientWidth: de.clientWidth,
    scrollHeight: Math.max(de.scrollHeight, document.body ? document.body.scrollHeight : 0),
    hasHScroll: Math.max(de.scrollWidth, document.body ? document.body.scrollWidth : 0) > de.clientWidth + 1,
    overflowCount: overPairs.length,
    overflowRoots: overflowRoots.slice(0, 60),
    interactiveCount: targets.length,
    smallTargetCount: smallTargets.length,
    smallTargets: smallTargets.slice(0, 60),
    closePairs,
    clippedText: clipped.slice(0, 60),
    grids,
    title: document.title,
  };
}

const allMetrics = [];
for (const pg of PAGES) {
  for (const vp of WIDTHS) {
    const label = `${pg.key}-${vp.w}`;
    const p = await browser.newPage();
    await p.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 1 });
    try {
      await p.goto(`http://127.0.0.1:${PORT}${pg.url}`, { waitUntil: "networkidle2", timeout: 90000 });
    } catch (e) {
      allMetrics.push({ page: pg.key, width: vp.w, error: "goto: " + e.message });
      console.log(JSON.stringify({ label, error: e.message }));
      await p.close();
      continue;
    }
    await sleep(2200);
    // Pre-scroll to trigger IntersectionObserver lazy loads / dynamic imports
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

    // Scroll-and-stitch full-page capture
    const H = Math.min(metrics.scrollHeight, MAX_STITCH);
    const truncated = metrics.scrollHeight > MAX_STITCH;
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

    const rec = { page: pg.key, width: vp.w, height: vp.h, file: outFile, truncated, ...metrics };
    allMetrics.push(rec);
    console.log(JSON.stringify({
      label, scrollHeight: metrics.scrollHeight, hasHScroll: metrics.hasHScroll,
      overflowCount: metrics.overflowCount, smallTargets: metrics.smallTargetCount,
      closePairs: metrics.closePairs.length, clipped: metrics.clippedText.length,
      grids: metrics.grids, truncated,
    }));
    await p.close();
  }
}

fs.writeFileSync(path.join(OUT, "metrics.json"), JSON.stringify(allMetrics, null, 2));
await browser.close();
server.close();
console.log("done -> " + OUT);
