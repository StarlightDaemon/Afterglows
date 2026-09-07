// Probe: at 320x568, can every matrix control (incl. the ones below the
// panel fold) be scrolled into view inside the .controls panel, clear of
// the header and viewport, with nothing intercepting its hit point?
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";
const ROOT = "E:/Citadel/Afterglows";
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml" };
const srv = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  if (u.endsWith("/")) u += "index.html";
  fs.readFile(path.join(ROOT, u.replace(/^\//, "")), (e, d) => {
    if (e) { res.writeHead(404).end(); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(u)] || "application/octet-stream" });
    res.end(d);
  });
});
await new Promise((r) => srv.listen(3194, "127.0.0.1", r));
const b = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const p = await b.newPage();
await p.setViewport({ width: 320, height: 568 });
await p.goto("http://127.0.0.1:3194/matrix_code/", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 1800));
const out = await p.evaluate(() => {
  const panel = document.querySelector(".controls");
  const names = ["Neon Blue", "Resurrections", "Virus", "Neon Gold", "\u21d0 Match Global"];
  const results = {};
  const cs = getComputedStyle(panel);
  results.panelOverflowY = cs.overflowY;
  results.panelScrollable = panel.scrollHeight > panel.clientHeight;
  results.panelScrollHeight = panel.scrollHeight;
  results.panelClientHeight = panel.clientHeight;
  for (const name of names) {
    const btn = [...panel.querySelectorAll("button")].find((x) => x.textContent.trim() === name);
    if (!btn) { results[name] = "MISSING"; continue; }
    btn.scrollIntoView({ block: "nearest", behavior: "instant" });
    const r = btn.getBoundingClientRect();
    const pr = panel.getBoundingClientRect();
    const visible = r.top >= pr.top - 1 && r.bottom <= pr.bottom + 1 && r.top >= 56 && r.bottom <= window.innerHeight;
    const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    results[name] = { top: Math.round(r.top), bottom: Math.round(r.bottom), visibleInPanel: visible, hitIsButton: hit === btn || btn.contains(hit) };
  }
  return results;
});
console.log(JSON.stringify(out, null, 1));
await b.close();
srv.close();
