import assert from "node:assert/strict";
import { ACTIVE_CONCEPTS as CONCEPTS, CATEGORIES, SECTIONS } from "../concepts/gallery/manifest.js";
import { newestConcepts, queryConcepts, statusOf } from "../concepts/gallery/gallery-query.js";

const searchText = new Map(CONCEPTS.map((concept) => [concept.tag, [
  concept.label, concept.definition, concept.motionThesis,
  ...(concept.aliases || []), ...(concept.facets || []),
  SECTIONS.find((section) => section.id === concept.section)?.title,
  CATEGORIES.find((category) => category.id === concept.category)?.title,
].filter(Boolean).join(" ").toLowerCase()]));

const values = (field) => [...new Set(CONCEPTS.flatMap((concept) =>
  (concept.origin?.contributions || []).map((contribution) => contribution[field] ?? "unspecified")
))];
const available = { origins: values("agent"), models: values("model"), versions: values("version") };
const base = () => ({
  view: "browse", order: "added", query: "", section: "", category: "",
  statuses: new Set(), origins: new Set(), models: new Set(), versions: new Set(),
});

const latest = queryConcepts(CONCEPTS, { ...base(), view: "recent" }, searchText, available);
assert.equal(latest.length, 36, "Recent is a bounded 36-item preset");
assert.deepEqual(latest.map((concept) => concept.tag), newestConcepts(CONCEPTS).map((concept) => concept.tag));

const exact = queryConcepts(CONCEPTS, { ...base(), query: "archimedes trammel" }, searchText, available);
assert.equal(exact[0]?.tag, "concept-archimedes-trammel", "Search covers labels and aliases across the catalog");

const physics = queryConcepts(CONCEPTS, { ...base(), section: "physics" }, searchText, available);
assert.ok(physics.length > 0 && physics.every((concept) => concept.section === "physics"));

const mechanics = queryConcepts(CONCEPTS, { ...base(), category: "mechanics" }, searchText, available);
assert.ok(mechanics.length > 0 && mechanics.every((concept) => concept.category === "mechanics"));

const impossible = queryConcepts(CONCEPTS, { ...base(), section: "physics", category: "birds" }, searchText, available);
assert.equal(impossible.length, 0, "Contradictory deep-link state fails closed");

const noMatch = queryConcepts(CONCEPTS, { ...base(), query: "definitely-not-a-real-concept-zzzz" }, searchText, available);
assert.equal(noMatch.length, 0);

const newOnly = queryConcepts(CONCEPTS, { ...base(), statuses: new Set(["new"]) }, searchText, available);
assert.ok(newOnly.length > 0 && newOnly.every((concept) => statusOf(concept) === "new"));

const mixed = CONCEPTS.find((concept) => concept.tag === "concept-nixie-tube");
assert.ok(mixed, "Mixed-provenance fixture exists");
const invalidTuple = queryConcepts([mixed], {
  ...base(), origins: new Set(["gemini"]), models: new Set(["astra"]), versions: new Set(["6"]),
}, searchText, available);
assert.equal(invalidTuple.length, 0, "Advanced dimensions must match one real contribution tuple");

const tied = [
  { tag: "z", label: "Zulu", added: "2026-01-01T00:00:00Z", origin: { contributions: [] }, badgeCls: "meta-status-new" },
  { tag: "a", label: "Alpha", added: "2026-01-01T00:00:00Z", origin: { contributions: [] }, badgeCls: "meta-status-new" },
];
const tiedText = new Map(tied.map((concept) => [concept.tag, concept.label.toLowerCase()]));
assert.deepEqual(
  queryConcepts(tied, base(), tiedText, { origins: [], models: [], versions: [] }).map((concept) => concept.tag),
  ["a", "z"],
  "Date ties have a deterministic label fallback"
);

console.log("SUCCESS: gallery query handles recent, browse, search, topics, empty results, provenance, and stable sorting.");
