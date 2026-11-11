import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { HOST, createSiteServer } from "./serve-site.js";

// Fixture: a site root with a sibling file outside it that must never be served.
const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), "afterglows-serve-"));
const root = path.join(sandbox, "site");
fs.mkdirSync(path.join(root, "sub"), { recursive: true });
fs.mkdirSync(path.join(root, "empty"));
fs.writeFileSync(path.join(root, "index.html"), "<p>home</p>");
fs.writeFileSync(path.join(root, "404.html"), "<p>custom 404</p>");
fs.writeFileSync(path.join(root, "style.css"), "body{}");
fs.writeFileSync(path.join(root, "module.js"), "export {};");
fs.writeFileSync(path.join(root, "sub", "index.html"), "<p>sub</p>");
fs.writeFileSync(path.join(root, ".secret"), "hidden");
fs.writeFileSync(path.join(sandbox, "outside.txt"), "outside");

const server = createSiteServer(root);
await new Promise((resolve) => server.listen(0, HOST, resolve));
const { address, port } = server.address();
assert.equal(address, "127.0.0.1", "Preview server binds loopback only");

// Raw requests keep paths exactly as written (fetch would normalize `..`).
function request(rawPath, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = http.request({ host: HOST, port, path: rawPath, method }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on("error", reject);
    req.end();
  });
}

try {
  const home = await request("/");
  assert.equal(home.status, 200);
  assert.match(home.headers["content-type"], /^text\/html/);
  assert.equal(home.body, "<p>home</p>");
  assert.equal(home.headers["cache-control"], "no-store");
  assert.equal(home.headers["x-content-type-options"], "nosniff");

  const head = await request("/", "HEAD");
  assert.equal(head.status, 200);
  assert.equal(head.body, "", "HEAD sends headers only");
  assert.equal(head.headers["content-length"], String("<p>home</p>".length));

  assert.match((await request("/style.css")).headers["content-type"], /^text\/css/);
  assert.match((await request("/module.js")).headers["content-type"], /^text\/javascript/);

  const redirect = await request("/sub?x=1");
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.location, "/sub/?x=1", "Directories redirect to a trailing slash");
  assert.equal((await request("/sub/")).body, "<p>sub</p>");

  for (const probe of [
    "/missing",
    "/empty/",
    "/.secret",
    "/sub/.git/config",
    "/../outside.txt",
    "/%2e%2e/outside.txt",
    "/..%2foutside.txt",
    "/sub/..%2f..%2foutside.txt",
    "/%5c..%5coutside.txt",
    "//example.com",
    "/index.html%00.js",
  ]) {
    const response = await request(probe);
    assert.equal(response.status, 404, `${probe} must not be served`);
    assert.equal(response.body, "<p>custom 404</p>", `${probe} answers with the custom 404 page`);
    assert.equal(response.headers.location, undefined, `${probe} must not redirect`);
  }

  const post = await request("/", "POST");
  assert.equal(post.status, 405);
  assert.equal(post.headers.allow, "GET, HEAD");

  assert.equal((await request("/%E0%A4%A")).status, 400, "Malformed encoding is rejected");

  for (const probe of ["/", "/missing", "/sub"]) {
    assert.equal((await request(probe)).headers["access-control-allow-origin"], undefined, "No CORS headers");
  }
} finally {
  server.close();
  fs.rmSync(sandbox, { recursive: true, force: true });
}

console.log("SUCCESS: preview server stays on loopback, serves only the artifact, and refuses dotfiles, traversal, listings and CORS.");
