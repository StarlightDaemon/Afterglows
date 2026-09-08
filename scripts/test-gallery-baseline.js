import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import { CONCEPTS } from "../concepts/gallery/manifest.js";

const baseline = JSON.parse(fs.readFileSync(new URL("./fixtures/gallery-baseline.json", import.meta.url), "utf8"));
const current = new Map(CONCEPTS.map((concept) => [concept.tag, concept]));
const sha = (value) => crypto.createHash("sha256").update(value).digest("hex");
for (const entry of baseline.entries) {
  const concept = current.get(entry.tag);
  assert.ok(concept, `Historical concept removed: ${entry.tag}`);
  const metadata = structuredClone(concept);
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
    const body = fs.readFileSync(new URL(`../concepts/gallery/${entry.module}`, import.meta.url), "utf8");
    assert.equal(sha(body.replaceAll("\r\n", "\n")), entry.sourceSha256, `Historical implementation changed: ${entry.tag}`);
  }
}
console.log(`SUCCESS: ${baseline.entries.length} historical entries preserved; one declared motion-compatibility edit.`);
