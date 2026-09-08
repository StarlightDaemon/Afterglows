// Final expansion gate; deliberately stricter than the intermediate-wave tests.
import assert from "node:assert/strict";
import fs from "node:fs";
import { CATEGORIES, CONCEPTS, SECTIONS } from "../concepts/gallery/manifest.js";

const selection = JSON.parse(fs.readFileSync(new URL("../.raiden/state/SNAPSHOTS/gallery-expansion/selection.json", import.meta.url), "utf8"));
const delivery = JSON.parse(fs.readFileSync(new URL("../.raiden/state/SNAPSHOTS/gallery-expansion/delivery.json", import.meta.url), "utf8"));
const additions = CONCEPTS.filter((concept) => concept.source === "expansion");
const identity = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
assert.equal(delivery.decision, "operator-reduced-scope", "Acceptance requires the recorded operator scope decision");
assert.equal(CONCEPTS.length, delivery.delivered.concepts, "Catalog must match the delivered scope");
assert.equal(additions.length, delivery.delivered.additions, "Additions must match the delivered scope");
assert.equal(SECTIONS.length, delivery.delivered.sections, "Sections must match the delivered scope");
assert.equal(CATEGORIES.length, delivery.delivered.categories, "Categories must match the delivered scope");
assert.equal(CONCEPTS.length, delivery.baseline.concepts + additions.length, "Baseline and additions must account for the catalog");
assert.equal(new Set(CONCEPTS.map((concept) => concept.module)).size, CONCEPTS.length, "Every concept must have its own canonical module");
assert.equal(selection.selected.length, delivery.originalTarget - delivery.baseline.concepts, "Preserve the original research selection");
assert.equal(selection.poolSize, selection.selected.length + selection.rejected.length, "Every candidate must have a selection outcome");
const selected = new Map(selection.selected.map((candidate) => [identity(candidate.name), candidate]));
assert.equal(selected.size, selection.selected.length, "Selected subject identities must be unique");
assert.equal(new Set(selection.selected.map((candidate) => candidate.key)).size, selected.size, "Selected keys must be unique");
const delivered = new Set(delivery.delivered.selectedKeys);
const deferred = new Set(delivery.deferred.selectedKeys);
assert.equal(delivered.size, delivery.delivered.selectedKeys.length, "No repeated delivered keys");
assert.equal(deferred.size, delivery.deferred.selectedKeys.length, "No repeated deferred keys");
assert.equal(delivered.size, additions.length, "Every delivered selection must have an implementation");
assert.equal(delivered.size + deferred.size, selected.size, "All selected subjects must be delivered or deferred");
for (const candidate of selection.selected) {
  assert.notEqual(delivered.has(candidate.key), deferred.has(candidate.key), "Exactly one delivery outcome: " + candidate.key);
}
const seen = new Set();
for (const concept of additions) {
  const id = identity(concept.label);
  const candidate = selected.get(id);
  assert.ok(candidate, "Unselected addition: " + concept.label);
  assert.ok(delivered.has(candidate.key), "Implemented subject is not in delivered scope: " + concept.label);
  assert.ok(!seen.has(id), "Duplicate subject: " + concept.label);
  seen.add(id);
  assert.equal(concept.section, candidate.section, "Selected section changed: " + concept.label);
  assert.equal(concept.category, candidate.category, "Selected category changed: " + concept.label);
}
assert.equal(seen.size, delivered.size, "Every delivered subject must be implemented");
await import("./validate-visual-qa.js");
if (!process.exitCode) console.log(`Delivered expansion accepted: ${CONCEPTS.length} canonical concepts, ${additions.length} reviewed additions, ${deferred.size} explicitly deferred subjects.`);
