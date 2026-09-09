import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import { CONCEPTS, ACTIVE_CONCEPTS, RETIRED_CONCEPTS } from "../concepts/gallery/manifest.js";
import { candidateTags as wave2Tags } from './gallery-standard-wave-02.js';
import {historicalConcept, historicalSourceURL, currentCuration as transition} from './gallery-curation-state.js';

const baseline = JSON.parse(fs.readFileSync(new URL("./fixtures/gallery-baseline.json", import.meta.url), "utf8"));
const current = new Map(CONCEPTS.map((concept) => [concept.tag, historicalConcept(concept)]));
assert.deepEqual(new Set(RETIRED_CONCEPTS.map(c => c.tag)), new Set(transition.retiredTags));
assert.equal(ACTIVE_CONCEPTS.length, CONCEPTS.length - RETIRED_CONCEPTS.length);
assert.ok(ACTIVE_CONCEPTS.some(c => c.tag === "concept-wind-rose"));
assert.equal(new Set([...ACTIVE_CONCEPTS, ...RETIRED_CONCEPTS].map(c => c.tag)).size, CONCEPTS.length, "Retirement must preserve the complete inventory");
const sha = (value) => crypto.createHash("sha256").update(value).digest("hex");
// The expansion baseline remains immutable. Version additions must reconstruct
// its exact metadata and source, rather than replacing the historical hashes.
const wave = JSON.parse(fs.readFileSync(new URL("../.raiden/state/SNAPSHOTS/gallery-visual-standard/wave-01.json", import.meta.url), "utf8"));
const permitted = new Set(["concept-solenoid-engine", "concept-treadwheel-crane", "concept-forge-bellows", "concept-butter-churn", "concept-treadle-grindstone"]);
const refinements = new Map(wave.concepts.filter(c => c.classification === "refine").map(c => [c.tag, c]));
assert.deepEqual(new Set(refinements.keys()), permitted, "Wave 01 must remain bounded to its five reviewed version additions");
const wave2URL = new URL("../.raiden/state/SNAPSHOTS/gallery-visual-standard/wave-02.json", import.meta.url);
if (fs.existsSync(wave2URL)) {
  const next = JSON.parse(fs.readFileSync(wave2URL, "utf8"));
  const additions = next.concepts.filter(c => c.classification === "refine");
  assert.ok(additions.length <= 20 && next.concepts.length <= 30);
  for (const row of additions) {
    assert.ok(wave2Tags.includes(row.tag), 'Only assessed Wave 02 candidates may extend the baseline');
    assert.ok(["telecommunications", "navigation-cartography"].includes(row.category));
    assert.ok(!refinements.has(row.tag), "Historical versions cannot be silently rebased");
    refinements.set(row.tag, row);
  }
}
for (const entry of baseline.entries) {
  const concept = current.get(entry.tag);
  assert.ok(concept, `Historical concept removed: ${entry.tag}`);
  const metadata = structuredClone(concept);
  const refinement = refinements.get(entry.tag);
  if (refinement) {
    assert.equal(concept.versioned, true);
    assert.ok(["v1", "v2"].includes(concept.default));
    assert.deepEqual(concept.versions.map(v => v.v), ["v1", "v2"]);
    assert.deepEqual(concept.versions[1].origin.contributions, [{ agent: "codex", model: "astra", version: "6" }]);
    assert.deepEqual(concept.origin.contributions, [...refinement.previousMetadata.origin.contributions, { agent: "codex", model: "astra", version: "6" }]);
    Object.assign(metadata, refinement.previousMetadata);
  }
  if (entry.tag === "concept-nixie-tube") {
    // Sole compatibility edit: JS motion preference and cleanup. Original
    // contribution, placement, URL, added date, and version history stay intact.
    assert.equal(metadata.origin.contributions.length, 2);
    assert.deepEqual(metadata.origin.contributions[1], { agent: "codex", model: "astra", version: "6" });
    metadata.origin.contributions = metadata.origin.contributions.slice(0, 1);
    metadata.updated = "2026-08-15T01:52:00Z";
  }
  assert.equal(sha(JSON.stringify(metadata)), entry.metadataSha256, `Historical metadata changed: ${entry.tag}`);
  if (entry.tag !== "concept-nixie-tube") {
    let body = fs.readFileSync(historicalSourceURL(concept), "utf8").replaceAll("\r\n", "\n");
    if (refinement) {
      const additions = body.match(/\/\/ BEGIN VISUAL STANDARD v2\n[\s\S]*?\/\/ END VISUAL STANDARD v2\n/g) || [];
      assert.equal(additions.length, 3, `Expected explicit additive version blocks: ${entry.tag}`);
      assert.equal(refinement.previousSourceSha256, entry.sourceSha256);
      body = body.replace(/\/\/ BEGIN VISUAL STANDARD v2\n[\s\S]*?\/\/ END VISUAL STANDARD v2\n/g, "");
    }
    assert.equal(sha(body), entry.sourceSha256, `Historical implementation changed: ${entry.tag}`);
  }
}
console.log(`SUCCESS: ${baseline.entries.length} historical entries preserved; one declared motion-compatibility edit; ${refinements.size} additive version refinements.`);
