import assert from "node:assert/strict";
import { ModuleQueue } from "../concepts/gallery/module-queue.js";
import { createModuleLoader } from "../concepts/gallery/module-loader.js";

const canonical = "./concepts/example-concept.js";
const requests = [];
const browserCache = new Map();
let rejectFirst = true;
const loader = createModuleLoader((url) => {
  requests.push(url);
  // Reproduce engines that cache rejected module promises by exact URL.
  if (!browserCache.has(url)) {
    browserCache.set(url, rejectFirst
      ? Promise.reject(new Error("Temporary fetch failure"))
      : Promise.resolve({ registered: true }));
  }
  return browserCache.get(url);
}, "https://example.test/gallery/index.js");
const queue = new ModuleQueue(loader);
const failed = await Promise.allSettled([
  queue.request(canonical, () => true),
  queue.request(canonical, () => true),
]);
assert.ok(failed.every((result) => result.status === "rejected"));
assert.deepEqual(requests, [canonical], "Concurrent waiters share the first attempt");
rejectFirst = false;
assert.deepEqual(await Promise.all([
  queue.request(canonical, () => true),
  queue.request(canonical, () => true),
]), [true, true]);
assert.equal(requests.length, 2, "Concurrent revisits share a single retry");
const retry = new URL(requests[1]);
assert.equal(retry.pathname, "/gallery/concepts/example-concept.js");
assert.match(retry.searchParams.get("ag-retry"), /-1$/);
assert.equal(await queue.request(canonical, () => true), true);
assert.equal(requests.length, 2, "Successful retry stays cached under the canonical key");
assert.equal(await queue.request("./unwanted.js", () => false), false);
assert.equal(requests.length, 2, "Stale requests never import");
console.log("SUCCESS: cached browser import failures recover through one shared fresh-URL retry.");
