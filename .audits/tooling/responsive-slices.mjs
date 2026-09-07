// Inspection slicer: cuts a tall capture into vertical slices and lays them
// side-by-side at FULL resolution so a tall page can be eyeballed in a few
// wide sheets. Usage: node responsive-slices.mjs <name> [sliceH] [perSheet]
//   <name>  capture basename without .png (e.g. physics-375, concepts-320-p1)
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CAP = "E:/Citadel/Afterglows/.audits/tooling/captures/responsive-2026-08-20";
const name = process.argv[2];
const SLICE_H = parseInt(process.argv[3] || "2200", 10);
const PER_SHEET = parseInt(process.argv[4] || "6", 10);
const PAD = 6;

const src = path.join(CAP, `${name}.png`);
const data = "data:image/png;base64," + fs.readFileSync(src).toString("base64");

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const page = await browser.newPage();
await page.goto("about:blank");
const sheets = await page.evaluate(async (data, SLICE_H, PER_SHEET, PAD) => {
  const img = await new Promise((res, rej) => {
    const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = data;
  });
  const nSlices = Math.ceil(img.height / SLICE_H);
  const out = [];
  for (let s0 = 0; s0 < nSlices; s0 += PER_SHEET) {
    const n = Math.min(PER_SHEET, nSlices - s0);
    const c = document.createElement("canvas");
    c.width = n * (img.width + PAD) + PAD;
    c.height = SLICE_H + 30;
    const x = c.getContext("2d");
    x.fillStyle = "#333"; x.fillRect(0, 0, c.width, c.height);
    for (let k = 0; k < n; k++) {
      const sy = (s0 + k) * SLICE_H;
      const h = Math.min(SLICE_H, img.height - sy);
      const dx = PAD + k * (img.width + PAD);
      x.fillStyle = "#fff"; x.font = "bold 13px monospace";
      x.fillText(`y=${sy}`, dx, 20);
      x.drawImage(img, 0, sy, img.width, h, dx, 30, img.width, h);
    }
    out.push(c.toDataURL("image/png"));
  }
  return out;
}, data, SLICE_H, PER_SHEET, PAD);

sheets.forEach((d, i) => {
  const f = path.join(CAP, `slices-${name}-s${i + 1}.png`);
  fs.writeFileSync(f, Buffer.from(d.split(",")[1], "base64"));
  console.log("wrote", f);
});
await browser.close();
