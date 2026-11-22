import { once } from "node:events";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { createSiteServer, HOST } from "../../scripts/serve-site.js";

const dist = fileURLToPath(new URL("../../dist/", import.meta.url));

export async function withGalleryBrowser(run, buildDir = dist) {
  await access(path.join(buildDir, "concepts/index.html"));
  const server = createSiteServer(buildDir);
  server.listen(0, HOST);
  await once(server, "listening");
  try {
    const executable = process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" };
    const browser = await puppeteer.launch({ ...executable, headless: true });
    try {
      return await run(browser, `http://${HOST}:${server.address().port}/concepts/`);
    } finally {
      await browser.close();
    }
  } finally {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
}

export function runBrowserChecks(checks) {
  return withGalleryBrowser(async (browser, gallery) => {
    for (const check of checks) {
      const context = await browser.createBrowserContext();
      try {
        await check(context, gallery);
      } finally {
        await context.close();
      }
    }
  });
}
