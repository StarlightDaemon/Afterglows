import assert from "node:assert/strict";
import { ModuleQueue } from "../concepts/gallery/module-queue.js";

const started = [];
const releases = new Map();
const queue = new ModuleQueue((path) => {
  started.push(path);
  return new Promise((resolve, reject) => releases.set(path, { resolve, reject }));
}, 2);
const tick = () => new Promise((resolve) => setImmediate(resolve));
const first = queue.request("first", () => true);
const second = queue.request("second", () => true);
let visible = true;
const stale = queue.request("stale", () => visible);
const last = queue.request("last", () => true);
await tick();
assert.deepEqual(started, ["first", "second"], "imports must respect the concurrency limit");
visible = false;
releases.get("first").resolve();
await first;
await tick();
assert.equal(await stale, false, "scrolling away must cancel queued work");
assert.deepEqual(started, ["first", "second", "last"]);
releases.get("second").resolve();
releases.get("last").resolve();
await Promise.all([second, last]);
await queue.request("first", () => true);
assert.equal(started.filter((path) => path === "first").length, 1, "successful imports are cached");
const failure = queue.request("retry", () => true);
const failed = assert.rejects(failure, /offline/);
await tick();
releases.get("retry").reject(new Error("offline"));
await failed;
const retry = queue.request("retry", () => true);
await tick();
releases.get("retry").resolve();
assert.equal(await retry, true);
assert.equal(started.filter((path) => path === "retry").length, 2, "failed imports can be retried");
// Duplicate visibility requests share a unique import slot, including requests
// arriving while every slot is occupied.
const sharedStarts = [];
const sharedReleases = new Map();
const shared = new ModuleQueue((path) => {
  sharedStarts.push(path);
  return new Promise((resolve, reject) => sharedReleases.set(path, { resolve, reject }));
}, 2);
const sharedFirst = shared.request("same", () => true);
const sharedAgain = shared.request("same", () => true);
const unrelated = shared.request("other", () => true);
const fullAgain = shared.request("same", () => true);
await tick();
assert.deepEqual(sharedStarts, ["same", "other"], "duplicate waiters must not consume import slots");
assert.equal(shared.active, 2);
sharedReleases.get("other").resolve();
await unrelated;
const cachedWhileBusy = shared.request("other", () => true);
assert.equal(await cachedWhileBusy, true, "cached work must not wait for a different import");
sharedReleases.get("same").resolve();
assert.deepEqual(await Promise.all([sharedFirst, sharedAgain, fullAgain]), [true, true, true]);
assert.equal(shared.active, 0, "one completion must release exactly one unique-import slot");

// A card entering the viewport can overtake older preloads. Its queued
// preload and visible request must then share one import.
const priorityStarts = [];
const priorityReleases = new Map();
const priority = new ModuleQueue((path) => {
  priorityStarts.push(path);
  return new Promise((resolve) => priorityReleases.set(path, resolve));
}, 1);
const preload = { preload: true };
const loading = priority.request("loading", () => true, preload);
const waiting = priority.request("nearby", () => true, preload);
const approaching = priority.request("approaching", () => true, preload);
let stillNearby = true;
const abandoned = priority.request("abandoned", () => stillNearby, preload);
const entering = priority.request("approaching", () => true);
const nextVisible = priority.request("visible", () => true);
await tick();
assert.deepEqual(priorityStarts, ["loading"]);
stillNearby = false;
priorityReleases.get("loading")();
await loading;
assert.equal(await abandoned, false, "a stale preload should never start");
assert.deepEqual(priorityStarts, ["loading", "approaching"]);
priorityReleases.get("approaching")();
assert.deepEqual(await Promise.all([approaching, entering]), [true, true]);
assert.deepEqual(priorityStarts, ["loading", "approaching", "visible"]);
priorityReleases.get("visible")();
await nextVisible;
assert.deepEqual(priorityStarts, ["loading", "approaching", "visible", "nearby"]);
priorityReleases.get("nearby")();
assert.equal(await waiting, true);
assert.equal(priority.active, 0);

console.log("SUCCESS: bounded unique imports, visible request priority, shared waiters, stale cancellation, caching, and failure recovery.");
