// Single-viewport screenshot at a given scroll position (default 0; "end"
// scrolls to the bottom). Companion to verify-capture.mjs for eyeballing a
// specific region without a 30k-px stitched image.
// Usage: node snap-viewport.mjs <pageKey|urlPath> <WxH> [scrollY|end] [--tag=name]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const REPO_ROOT = "E:/Citadel/Afterglows";
const OUT = path.join(REPO_ROOT, ".audits/tooling/captures/verify");
const PORT = 3192;
const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
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
const pageKey = PAGE_KEYS[pos[0]] ? pos[0] : "custom";
const url = PAGE_KEYS[pos[0]] || pos[0];
const [w, h] = pos[1].split("x").map(Number);
const scrollArg = pos[2] || "0";

const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };
const server = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  if (u.endsWith("/")) u += "index.html";
  const file = path.join(REPO_ROOT, u.replace(/^\//, ""));
  if (!file.startsWith(path.resolve(REPO_ROOT))) { res.writeHead(403).end(); return; }
  fs.readFile(file, (e, d) => {
    if (e) { res.writeHead(404).end(); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(d);
  });
});
await new Promise((r) => server.listen(PORT, "127.0.0.1", r));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--force-device-scale-factor=1"] });
const p = await browser.newPage();
await p.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
await p.goto(`http://127.0.0.1:${PORT}${url}`, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 2200));
await p.evaluate((s) => {
  const H = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  window.scrollTo({ top: s === "end" ? H : Number(s), behavior: "instant" });
}, scrollArg);
await new Promise((r) => setTimeout(r, 600));
await p.evaluate(() => {
  const freeze = (a) => { try { a.pause(); a.playbackRate = 0; } catch (e) {} };
  const pauseIn = (root) => root.querySelectorAll("*").forEach((el) => {
    el.getAnimations().forEach(freeze);
    if (el.shadowRoot) pauseIn(el.shadowRoot);
  });
  document.getAnimations().forEach(freeze);
  pauseIn(document);
});
const file = path.join(OUT, `${tag}${pageKey}-${w}-snap-${scrollArg}.png`);
await p.screenshot({ path: file });
console.log(file);
await browser.close();
server.close();
