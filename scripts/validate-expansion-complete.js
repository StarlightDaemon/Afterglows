// Final expansion gate; deliberately stricter than the intermediate-wave tests.
import assert from "node:assert/strict";
import fs from "node:fs";
import { CATEGORIES as CURRENT_CATEGORIES, CONCEPTS as CURRENT_CONCEPTS, SECTIONS, ACTIVE_CONCEPTS, RETIRED_CONCEPTS } from "../concepts/gallery/manifest.js";
import {historicalConcept, currentCuration as transition} from './gallery-curation-state.js';

// Validate the original delivery against its preserved subset, then the resumed
// delivery against today's complete catalog. Historical decisions stay intact.
const resumedRoot = new URL("../.raiden/state/SNAPSHOTS/gallery-expansion-resumed/", import.meta.url);
const baseline = JSON.parse(fs.readFileSync(new URL("baseline.json", resumedRoot), "utf8"));
const baselineTags = new Set(baseline.entries.map(({ concept }) => concept.tag));
const CONCEPTS = CURRENT_CONCEPTS.filter((concept) => baselineTags.has(concept.tag)).map(historicalConcept);
const CATEGORIES = CURRENT_CATEGORIES.filter((category) => CONCEPTS.some((concept) => concept.category === category.id));

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
const resumed = JSON.parse(fs.readFileSync(new URL("delivery.json", resumedRoot), "utf8"));
const resumedSelection = JSON.parse(fs.readFileSync(new URL("selection.json", resumedRoot), "utf8"));
const newConcepts = CURRENT_CONCEPTS.filter((concept) => !baselineTags.has(concept.tag) && !['curation','finale'].includes(concept.source));
assert.equal(resumed.decision, "operator-resumed-expansion");
assert.equal(resumed.status, "reviewed", "Resumed delivery must complete review");
assert.equal(resumed.baseline.head, baseline.head);
assert.equal(resumed.baseline.active, baseline.activeCount);
assert.equal(resumed.baseline.preserved, baseline.preservedCount);
assert.equal(ACTIVE_CONCEPTS.length, transition.activeCount, "Operator-authorized consolidated inventory");
assert.equal(CURRENT_CONCEPTS.length, transition.preservedCount, "Retired records stay preserved separately");
assert.deepEqual(resumed.delivered, {
  active: 1000, preserved: 1001,
  additions: newConcepts.length, sections: SECTIONS.length, categories: CURRENT_CATEGORIES.length,
});
assert.equal(newConcepts.length, 56);
assert.equal(baseline.entries.length + newConcepts.length + transition.additions.length, CURRENT_CONCEPTS.length);
assert.deepEqual(resumed.retiredTags, baseline.retiredTags, 'Historical delivery retirement is preserved');
assert.deepEqual(new Set(RETIRED_CONCEPTS.map(c => c.tag)), new Set(transition.retiredTags));
assert.equal(new Set(CURRENT_CONCEPTS.map((concept) => concept.module)).size, CURRENT_CONCEPTS.length);
const resumedKeys = new Set(resumed.selectedKeys);
assert.equal(resumedKeys.size, 56);
assert.deepEqual(resumedKeys, new Set([...deferred, "S116"]), "Reassessed deferred subjects plus one distinct replacement");
assert.deepEqual(resumedSelection.selected, newConcepts.map(({ key, label, tag, module, section, category }) => ({ key, label, tag, module, section, category })));
assert.deepEqual(new Set(newConcepts.map((concept) => concept.key)), resumedKeys);
for (const concept of newConcepts) {
  assert.equal(concept.source, "expansion");
  assert.ok(ACTIVE_CONCEPTS.includes(concept), "Every resumed addition must be active");
  if (deferred.has(concept.key)) {
    const original = selection.selected.find((candidate) => candidate.key === concept.key);
    assert.equal(identity(concept.label), identity(original.name), "Retained deferred subject changed: " + concept.key);
    assert.equal(concept.section, original.section, "Deferred section changed: " + concept.key);
    assert.equal(concept.category, original.category, "Deferred category changed: " + concept.key);
  }
}
await import("./test-resumption-preservation.js");
await import("./validate-visual-qa.js");
await import('./test-curation-models.mjs');
await import('./validate-curation-review.js');
await import('./test-final-two.mjs');
await import('./validate-final-two-review.js');
if (!process.exitCode) console.log(`Final target verified: ${ACTIVE_CONCEPTS.length} active / ${CURRENT_CONCEPTS.length} preserved; five retirements unchanged. Historical deliveries and both consolidation and final-pair models preserved.`);
