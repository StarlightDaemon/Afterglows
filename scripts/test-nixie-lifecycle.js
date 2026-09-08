import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

// Exercise the legacy timer against preference changes and detach/reattach.
// Fake time makes leaking intervals and listeners observable without sleeping.
let Component;
let nextTimer = 0;
const timers = new Map();
const listeners = new Set();
const preference = {
  matches: true,
  addEventListener: (_, fn) => listeners.add(fn),
  removeEventListener: (_, fn) => listeners.delete(fn),
};
vm.runInNewContext(fs.readFileSync(new URL("../concepts/gallery/concepts/mathematics/computing-systems/nixie-tube-concept.js", import.meta.url), "utf8"), {
  HTMLElement: class {
    isConnected = true;
    attachShadow() {
      const number = { textContent: "7" };
      this.shadowRoot = { innerHTML: "", getElementById: () => number };
    }
  },
  customElements: { get: () => undefined, define: (_, value) => { Component = value; } },
  matchMedia: () => preference,
  setInterval: (fn) => { timers.set(++nextTimer, fn); return nextTimer; },
  clearInterval: (id) => timers.delete(id),
});
const tile = new Component();
tile.connectedCallback();
assert.equal(timers.size, 0, "initial reduced motion must not schedule digit changes");
assert.equal(listeners.size, 1);
preference.matches = false;
listeners.forEach((fn) => fn());
assert.equal(timers.size, 1);
preference.matches = true;
listeners.forEach((fn) => fn());
assert.equal(timers.size, 0, "changing preference must stop existing timers");
preference.matches = false;
listeners.forEach((fn) => fn());
tile.isConnected = false;
tile.disconnectedCallback();
assert.equal(timers.size, 0, "viewport removal must stop timers");
assert.equal(listeners.size, 0, "viewport removal must release preference listeners");
tile.isConnected = true;
tile.connectedCallback();
assert.equal(timers.size, 1, "remount must create exactly one timer");
tile.disconnectedCallback();
assert.equal(timers.size, 0);
assert.equal(listeners.size, 0);
console.log("SUCCESS: legacy JS reduced-motion changes and remount cleanup.");
