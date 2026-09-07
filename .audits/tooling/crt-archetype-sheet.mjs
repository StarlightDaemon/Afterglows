// Contact sheet for the CRT archetype captures: labeled rows, 2 columns.
// Usage: node .audits/tooling/crt-archetype-sheet.mjs <outfile> key1 key2 ...
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CAP = path.join(__dirname, "captures");
const [outFile, ...keys] = process.argv.slice(2);

const SW = 590; // scaled tile width (source 1200x778)
const SH = Math.round((SW * 778) / 1200);
const PAD = 8;
const LABEL_H = 22;
const COLS = 2;
const ROWS = Math.ceil(keys.length / COLS);
const W = COLS * (SW + PAD) + PAD;
const H = ROWS * (SH + LABEL_H + PAD) + PAD;

const browser = await puppeteer.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: Math.min(H, 4000), deviceScaleFactor: 1 });

const tiles = keys.map((key) => ({
  key,
  img:
    "data:image/png;base64," +
    fs.readFileSync(path.join(CAP, `crt-arch-${key}.png`)).toString("base64"),
}));

const dataUrl = await page.evaluate(
  async (tiles, SW, SH, PAD, LABEL_H, COLS, W, H) => {
    const c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = "#1a1a1a";
    x.fillRect(0, 0, W, H);
    const load = (src) =>
      new Promise((res) => {
        const i = new Image();
        i.onload = () => res(i);
        i.src = src;
      });
    for (let k = 0; k < tiles.length; k++) {
      const col = k % COLS;
      const row = (k / COLS) | 0;
      const px = PAD + col * (SW + PAD);
      const py = PAD + row * (SH + LABEL_H + PAD);
      x.fillStyle = "#fff";
      x.font = "bold 15px monospace";
      x.fillText(tiles[k].key.toUpperCase(), px + 2, py + 15);
      const img = await load(tiles[k].img);
      x.drawImage(img, px, py + LABEL_H, SW, SH);
    }
    return c.toDataURL("image/png");
  },
  tiles, SW, SH, PAD, LABEL_H, COLS, W, H
);

fs.writeFileSync(outFile, Buffer.from(dataUrl.split(",")[1], "base64"));
await browser.close();
console.log("wrote", outFile, `${W}x${H}`);
