// Build one contact sheet per page: columns = tested widths, each column the
// full stitched capture scaled to fit. Labels on top. Reads the PNGs written
// by responsive-capture.mjs.
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CAP = "E:/Citadel/Afterglows/.audits/tooling/captures/responsive-2026-08-20";
const PAGES = ["hub", "concepts", "physics", "matrix", "retro"];
const WIDTHS = [320, 375, 414, 600, 768, 900];
const COL_W = 260;       // displayed column width
const MAX_H = 12000;     // max displayed column height
const PAD = 10;
const LABEL_H = 28;

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: 900, height: 700 });
await page.goto("about:blank");

for (const pg of PAGES) {
  const cols = [];
  for (const w of WIDTHS) {
    // Prefer full-height segment captures (-p1..-pN) when they exist; they
    // supersede the truncated single-canvas capture for very tall combos.
    const segs = [];
    for (let i = 1; ; i++) {
      const sf = path.join(CAP, `${pg}-${w}-p${i}.png`);
      if (!fs.existsSync(sf)) break;
      segs.push(sf);
    }
    const files = segs.length ? segs : [path.join(CAP, `${pg}-${w}.png`)];
    if (!fs.existsSync(files[0])) continue;
    cols.push({
      w,
      parts: files.map((f) => "data:image/png;base64," + fs.readFileSync(f).toString("base64")),
    });
  }
  if (!cols.length) continue;
  const dataUrl = await page.evaluate(async (cols, COL_W, MAX_H, PAD, LABEL_H) => {
    const load = (src) => new Promise((res, rej) => {
      const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src;
    });
    const scaled = [];
    for (const c of cols) {
      const parts = [];
      for (const src of c.parts) parts.push(await load(src));
      const totalH = parts.reduce((a, p) => a + p.height, 0);
      const s = Math.min(COL_W / parts[0].width, MAX_H / totalH);
      scaled.push({ parts, dw: Math.round(parts[0].width * s), dh: Math.round(totalH * s), s });
    }
    const W = cols.length * (COL_W + PAD) + PAD;
    const H = LABEL_H + Math.max(...scaled.map((s) => s.dh)) + 2 * PAD;
    const c = document.createElement("canvas");
    c.width = W; c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = "#181818"; x.fillRect(0, 0, W, H);
    x.imageSmoothingEnabled = true;
    x.imageSmoothingQuality = "high";
    for (let k = 0; k < scaled.length; k++) {
      const cx = PAD + k * (COL_W + PAD);
      x.fillStyle = "#fff"; x.font = "bold 14px monospace";
      x.fillText(cols[k].w + "px", cx, LABEL_H - 10);
      x.strokeStyle = "#555";
      x.strokeRect(cx - 0.5, LABEL_H - 0.5, scaled[k].dw + 1, scaled[k].dh + 1);
      let dy = LABEL_H;
      for (const part of scaled[k].parts) {
        const ph = Math.round(part.height * scaled[k].s);
        x.drawImage(part, cx, dy, scaled[k].dw, ph);
        dy += ph;
      }
    }
    return c.toDataURL("image/png");
  }, cols, COL_W, MAX_H, PAD, LABEL_H);
  const out = path.join(CAP, `sheet-${pg}.png`);
  fs.writeFileSync(out, Buffer.from(dataUrl.split(",")[1], "base64"));
  console.log("wrote", out);
}
await browser.close();
