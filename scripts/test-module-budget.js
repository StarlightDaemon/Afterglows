import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

// Transfer budget for concept modules, measured as gzip (what GitHub Pages
// serves). Modules load lazily one card at a time, so the budget bounds the
// cost of any single card rather than the gallery as a whole.
const GZIP_BUDGET_BYTES = 150 * 1024;

// Pre-budget modules that exceed it. Their sources are byte-preserved by the
// baseline tests, so they are pinned by hash: any edit makes the budget apply.
// Accepted in the 2026-11-10 F-06 triage (see .raiden/state/DECISIONS.md D-017).
const EXEMPT = new Map([
  [
    "engineering-technology/instrumentation-signals/lvdt-displacement-sensor-concept.js",
    "d99916ba6805b59715d93ae5f06ecffee52bd77130ccd1060cbe58d194447999",
  ],
  [
    "engineering-technology/instrumentation-signals/phased-array-beam-steering-concept.js",
    "d200dd07bf2adcbe62f5ac7752ccfb7238134ad2d287ae8bf7e4a8de573d4286",
  ],
]);

const root = fileURLToPath(new URL("../concepts/gallery/concepts/", import.meta.url));

function* modules(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* modules(full);
    else if (entry.name.endsWith(".js")) yield full;
  }
}

const over = [];
let checked = 0;
for (const file of modules(root)) {
  checked += 1;
  const relative = path.relative(root, file).split(path.sep).join("/");
  const bytes = fs.readFileSync(file);
  const gzipped = zlib.gzipSync(bytes).length;
  if (gzipped <= GZIP_BUDGET_BYTES) continue;
  const hash = crypto.createHash("sha256").update(bytes).digest("hex");
  if (EXEMPT.get(relative) === hash) continue;
  over.push(`${relative}: ${(gzipped / 1024).toFixed(1)} KB gzipped`);
}

assert.ok(checked >= 1000, `Expected the full concept catalog, found ${checked} modules`);
assert.deepEqual(
  over,
  [],
  `Concept modules over the ${GZIP_BUDGET_BYTES / 1024} KB gzip budget:\n  ${over.join("\n  ")}\n` +
    "Generate repeated geometry at runtime instead of inlining it, or record an operator decision."
);
for (const [relative, hash] of EXEMPT) {
  const file = path.join(root, relative);
  assert.ok(fs.existsSync(file), `Exempt module missing; remove its exemption: ${relative}`);
}

console.log(`SUCCESS: ${checked} concept modules within the ${GZIP_BUDGET_BYTES / 1024} KB gzip budget (${EXEMPT.size} hash-pinned exemptions).`);
