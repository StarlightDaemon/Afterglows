// Probe: does the injected fixed site header cover the matrix control bar's
// first row? Reports rects at several widths. Read-only investigation.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const ROOT = "E:/Citadel/Afterglows";
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml" };
const srv = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  if (u.endsWith("/")) u += "index.html";
  const f = path.join(ROOT, u.replace(/^\//, ""));
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404).end(); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
    res.end(d);
  });
});
await new Promise((r) => srv.listen(3195, "127.0.0.1", r));
const b = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
for (const [w, h] of [[320, 568], [414, 896], [900, 1200], [1280, 900]]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: h });
  await p.goto("http://127.0.0.1:3195/retro/crt_demo.html", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1800));
  const info = await p.evaluate(() => {
    const rect = (el) => { if (!el) return null; const r = el.getBoundingClientRect();
      return { top:+r.top.toFixed(1), bottom:+r.bottom.toFixed(1), left:+r.left.toFixed(1), right:+r.right.toFixed(1) }; };
    const header = document.querySelector('.ag-header');
    const h1 = document.querySelector('h1');
    const main = document.querySelector('main');
    const chips = document.querySelector('.crt-controls, .controls, .chip-bar');
    return { header: rect(header), h1: rect(h1), main: rect(main),
      h1Covered: h1 && header ? h1.getBoundingClientRect().top < header.getBoundingClientRect().bottom : null,
      bodyPadTop: getComputedStyle(document.body).paddingTop,
      htmlPadTop: getComputedStyle(document.documentElement).paddingTop,
      agHasHeader: document.documentElement.className };
  });
  console.log(w + "x" + h, JSON.stringify(info, null, 1));
  await p.close();
}
await b.close();
srv.close();
