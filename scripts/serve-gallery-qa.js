// Loopback-only visual review surface; never copied into the Pages artifact.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

// Optional local acceptance mode exercises UI actions while imports are pending.
const port = Number(process.env.AFTERGLOWS_QA_PORT || 3018);
const standardWave = Number(process.env.AFTERGLOWS_QA_WAVE || 1);
if (!Number.isInteger(standardWave) || standardWave < 1 || standardWave > 999) throw new Error("Invalid visual standard wave");
const moduleDelay = Number(process.env.AFTERGLOWS_QA_MODULE_DELAY_MS || 0);
const failOnceModule = process.env.AFTERGLOWS_QA_FAIL_ONCE_MODULE || "";
const failedModules = new Set();
if (failOnceModule && !/^[a-z0-9-]+-concept\.js$/.test(failOnceModule)) {
  throw new Error("QA failure target must be a canonical component basename");
}
if (!Number.isInteger(port) || port < 1024 || port > 65535 ||
    !Number.isInteger(moduleDelay) || moduleDelay < 0 || moduleDelay > 5000) {
  throw new Error("Invalid local QA port or module delay (0–5000 ms)");
}

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const files = new Map([
  ["/__qa/retirement/", new URL("./retirement-review.html", import.meta.url)],
  ["/__qa/retirement/review.js", new URL("./retirement-review.js", import.meta.url)],
  ["/__qa/retirement/candidates.js", new URL("./retirement-candidates.js", import.meta.url)],
  ["/__qa/wind-rose/", new URL("./wind-rose-review.html", import.meta.url)],
  ["/__qa/wind-rose/review.js", new URL("./wind-rose-review.js", import.meta.url)],
  ["/__qa/wind-rose/candidate.js", new URL("../.raiden/state/SNAPSHOTS/gallery-visual-standard/wind-rose-restart/wind-rose-candidate.js", import.meta.url)],
  ["/__qa/standard/", new URL("./gallery-standard.html", import.meta.url)],
  ["/__qa/standard/review.js", new URL("./gallery-standard.js", import.meta.url)],
  ["/__qa/standard/wave.json", new URL(`../.raiden/state/SNAPSHOTS/gallery-visual-standard/wave-${String(standardWave).padStart(2, "0")}.json`, import.meta.url)],
  ["/__qa/", new URL("./gallery-qa.html", import.meta.url)],
  ["/__qa/review.js", new URL("./gallery-qa.js", import.meta.url)],
]);
const types = { ".json": "application/json", ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };
http.createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) { response.writeHead(405).end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
    let file = files.get(pathname);
    if (!file) {
      if (pathname.split("/").some((part) => part.startsWith("."))) throw new Error("hidden path");
      file = path.resolve(dist, `.${pathname}`, pathname.endsWith("/") ? "index.html" : "");
      const relative = path.relative(dist, file);
      if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error("outside artifact");
    }
    if (moduleDelay && request.method === "GET" &&
        pathname.startsWith("/concepts/gallery/concepts/") && pathname.endsWith(".js")) {
      await delay(moduleDelay);
      if (response.destroyed) return;
    }
    if (failOnceModule && request.method === "GET" &&
        pathname.startsWith("/concepts/gallery/concepts/") &&
        path.basename(pathname) === failOnceModule && !failedModules.has(pathname)) {
      failedModules.add(pathname);
      response.writeHead(503, { "Content-Type": "text/plain", "Cache-Control": "no-store" }).end("Intentional one-time QA failure");
      return;
    }
    const bytes = fs.readFileSync(file);
    const extension = path.extname(file instanceof URL ? file.pathname : file);
    response.writeHead(200, {
      "Content-Type": `${types[extension] || "application/octet-stream"}; charset=utf-8`,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
    });
    response.end(request.method === "HEAD" ? undefined : bytes);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`Gallery review: http://127.0.0.1:${port}/__qa/ (module delay ${moduleDelay} ms)`));
