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
await new Promise((r) => srv.listen(3197, "127.0.0.1", r));
const b = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const p = await b.newPage();
await p.setViewport({ width: 320, height: 568 });
await p.goto("http://127.0.0.1:3197/", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 2500));
const out = await p.evaluate(() => {
  const res = [];
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > 321 && r.width > 0) {
      const cs = getComputedStyle(el);
      res.push({
        tag: el.tagName.toLowerCase(), cls: (el.className + "").slice(0, 60),
        right: +r.right.toFixed(1), w: +r.width.toFixed(1),
        minW: cs.minWidth, ws: cs.whiteSpace,
        kids: el.children.length,
        text: (el.children.length ? "" : (el.textContent || "").trim().slice(0, 50)),
      });
    }
  });
  return res;
});
console.log(JSON.stringify(out, null, 1));
await b.close();
srv.close();
