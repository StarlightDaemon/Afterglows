// Supplemental pass for page/width combos whose full scroll height exceeded
// the single-canvas cap in responsive-capture.mjs. Captures the SAME live
// pages but stitches into sequential segment PNGs (-p1, -p2, ...) so the
// entire scrollable height is covered. Same server / settle / freeze logic.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const REPO_ROOT = "E:/Citadel/Afterglows";
const OUT = path.join(REPO_ROOT, ".audits/tooling/captures/responsive-2026-08-20");
const PORT = 3198;
const CHROME = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const COMBOS = [
  { key: "concepts", url: "/concepts/header-animation-concepts.html", w: 320, h: 568 },
  { key: "concepts", url: "/concepts/header-animation-concepts.html", w: 375, h: 667 },
  { key: "concepts", url: "/concepts/header-animation-concepts.html", w: 414, h: 896 },
  { key: "concepts", url: "/concepts/header-animation-concepts.html", w: 600, h: 960 },
  { key: "physics", url: "/physics/", w: 320, h: 568 },
];
const SEG = 28000;

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2",
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
  executablePath: CHROME, headless: true, args: ["--force-device-scale-factor=1"],
});
const stitch = await browser.newPage();
await stitch.goto("about:blank");

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

for (const c of COMBOS) {
  const p = await browser.newPage();
  await p.setViewport({ width: c.w, height: c.h, deviceScaleFactor: 1 });
  await p.goto(`http://127.0.0.1:${PORT}${c.url}`, { waitUntil: "networkidle2", timeout: 90000 });
  await sleep(2200);
  await p.evaluate(async () => {
    const s = (ms) => new Promise((r) => setTimeout(r, ms));
    const H = () => Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    for (let y = 0; y <= H(); y += window.innerHeight) {
      window.scrollTo({ top: y, behavior: "instant" });
      await s(60);
    }
    await s(250);
  });
  await sleep(1000);
  await p.evaluate(freezeAll);
  const H = await p.evaluate(() =>
    Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
  const nSeg = Math.ceil(H / SEG);
  for (let seg = 0; seg < nSeg; seg++) {
    const segTop = seg * SEG;
    const segH = Math.min(SEG, H - segTop);
    await stitch.evaluate((w, h) => {
      window.__c = document.createElement("canvas");
      window.__c.width = w; window.__c.height = h;
      window.__x = window.__c.getContext("2d");
      window.__x.fillStyle = "#000"; window.__x.fillRect(0, 0, w, h);
    }, c.w, segH);
    let y = segTop;
    let guard = 0;
    while (y < segTop + segH && guard < 300) {
      guard++;
      await p.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
      await sleep(70);
      const actualY = await p.evaluate(() => window.scrollY);
      const buf = await p.screenshot({ optimizeForSpeed: true });
      const dataUrl = "data:image/png;base64," + Buffer.from(buf).toString("base64");
      await stitch.evaluate(async (src, yy) => {
        const img = await new Promise((res, rej) => {
          const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src;
        });
        window.__x.drawImage(img, 0, yy);
      }, dataUrl, actualY - segTop);
      if (actualY + c.h >= H - 1) break;
      y = actualY + c.h;
    }
    const dataUrl = await stitch.evaluate(() => window.__c.toDataURL("image/png"));
    const f = path.join(OUT, `${c.key}-${c.w}-p${seg + 1}.png`);
    fs.writeFileSync(f, Buffer.from(dataUrl.split(",")[1], "base64"));
    console.log("wrote", f, `(${c.w}x${segH})`);
  }
  await p.close();
}
await browser.close();
server.close();
console.log("tall done");
