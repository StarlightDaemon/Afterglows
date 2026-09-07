// Contact sheet: rows = tiles, cols = f0 | f1 | diff mask. Args: outfile tag...
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CAP = "E:/Citadel/Afterglows/.audits/tooling/captures";
// Optional leading "--n <frames>" selects how many f<i>.png frames per row
// (default 2 frames + the f0/f1 diff mask).
let argv = process.argv.slice(2);
let NFRAMES = 2;
if (argv[0] === "--n") {
  NFRAMES = parseInt(argv[1], 10);
  argv = argv.slice(2);
}
const [outFile, ...tags] = argv;
const S = 1.5, T = 140, PAD = 4, LABEL = 120;
const COLS = NFRAMES + 1;
const W = LABEL + COLS * (T * S + PAD);
const H = tags.length * (T * S + PAD);

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: Math.ceil(W), height: Math.ceil(H), deviceScaleFactor: 1 });

const rows = tags.map((tag) => ({
  tag,
  imgs: [
    ...Array.from({ length: NFRAMES }, (_, i) => `${tag}-f${i}.png`),
    `${tag}-diff01.png`,
  ].map((f) =>
    "data:image/png;base64," + fs.readFileSync(path.join(CAP, f)).toString("base64")
  ),
}));

const dataUrl = await page.evaluate(async (rows, S, T, PAD, LABEL, W, H) => {
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const x = c.getContext("2d");
  x.fillStyle = "#222"; x.fillRect(0, 0, W, H);
  x.imageSmoothingEnabled = false;
  const load = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.src = src; });
  for (let r = 0; r < rows.length; r++) {
    const y = r * (T * S + PAD);
    x.fillStyle = "#fff"; x.font = "11px monospace";
    x.fillText(rows[r].tag.replace("concept-", ""), 4, y + T * S / 2);
    for (let k = 0; k < rows[r].imgs.length; k++) {
      const img = await load(rows[r].imgs[k]);
      x.drawImage(img, LABEL + k * (T * S + PAD), y, T * S, T * S);
    }
  }
  return c.toDataURL("image/png");
}, rows, S, T, PAD, LABEL, W, H);

fs.writeFileSync(outFile, Buffer.from(dataUrl.split(",")[1], "base64"));
await browser.close();
console.log("wrote", outFile);
