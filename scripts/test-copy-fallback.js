// Exercise the actual gallery fallback, including exceptional browser behavior.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../concepts/gallery/index.js", import.meta.url), "utf8");
const start = source.indexOf("async function copyText(text)");
const end = source.indexOf("// Build the two-line embed snippet", start);
assert.ok(start >= 0 && end > start, "Clipboard function must be found");

for (const outcome of [true, false, "throw"]) {
  const events = [];
  let attached = false;
  const textarea = {
    style: {}, setAttribute() {},
    select() { events.push("select"); },
    remove() { attached = false; events.push("remove"); },
  };
  const previousFocus = { isConnected: true, focus(options) {
    assert.equal(options.preventScroll, true);
    events.push("focus");
  } };
  const context = vm.createContext({
    navigator: { clipboard: { async writeText() { throw new Error("Permission denied"); } } },
    window: { isSecureContext: true },
    document: {
      activeElement: previousFocus,
      createElement(tag) { assert.equal(tag, "textarea"); return textarea; },
      body: { appendChild(node) { assert.equal(node, textarea); attached = true; } },
      execCommand(command) {
        assert.equal(command, "copy");
        assert.equal(textarea.value, "<concept-grid></concept-grid>");
        if (outcome === "throw") throw new Error("Unsupported command");
        return outcome;
      },
    },
  });
  vm.runInContext(source.slice(start, end), context);
  const result = await context.copyText("<concept-grid></concept-grid>");
  assert.equal(result, outcome === true);
  assert.equal(attached, false, "Temporary node must never remain attached");
  assert.deepEqual(events, ["select", "remove", "focus"]);
}
console.log("SUCCESS: clipboard fallback cleans up and restores focus on success, refusal, and exceptions.");
