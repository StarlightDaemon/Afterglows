// 1:1 crop comparison: same region cropped from several archetype captures,
// tiled in a labeled column (full pixel scale, no resampling).
// Usage: node crt-crop-sheet.mjs <outfile> <x,y,w,h> key1 key2 ...
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CAP = path.join(__dirname, "captures");
const [outFile, rectArg, ...keys] = process.argv.slice(2);
const [CX, CY, CW, CH] = rectArg.split(",").map(Number);

const PAD = 6;
const LABEL_W = 110;
const W = LABEL_W + CW + PAD * 2;
const H = keys.length * (CH + PAD) + PAD;

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
  async (tiles, CX, CY, CW, CH, PAD, LABEL_W, W, H) => {
    const c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = "#1a1a1a";
    x.fillRect(0, 0, W, H);
    x.imageSmoothingEnabled = false;
    const load = (src) =>
      new Promise((res) => {
        const i = new Image();
        i.onload = () => res(i);
        i.src = src;
      });
    for (let k = 0; k < tiles.length; k++) {
      const py = PAD + k * (CH + PAD);
      x.fillStyle = "#fff";
      x.font = "bold 14px monospace";
      x.fillText(tiles[k].key, 4, py + CH / 2);
      const img = await load(tiles[k].img);
      x.drawImage(img, CX, CY, CW, CH, LABEL_W, py, CW, CH);
    }
    return c.toDataURL("image/png");
  },
  tiles, CX, CY, CW, CH, PAD, LABEL_W, W, H
);

fs.writeFileSync(outFile, Buffer.from(dataUrl.split(",")[1], "base64"));
await browser.close();
console.log("wrote", outFile, `${W}x${H}`);
