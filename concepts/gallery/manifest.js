// Unified Animation Concepts catalog.
//
// Source metadata remains split into maintainable provenance shards, while
// this module exposes one definitive taxonomy and one collection to the UI.

import {
  CATEGORIES,
  SECTIONS,
  placementFor,
} from "./taxonomy.js";
import { CONCEPTS as legacyConcepts } from "./manifests/concepts.js";
import { CONCEPTS as legacyPhysics } from "./manifests/physics.js";

function canonicalEntry(source, concept) {
  const placement = placementFor(source, concept);
  const stem = concept.tag.replace(/^(?:concept|physics)-/, "");
  return {
    ...concept,
    source,
    section: placement.section,
    category: placement.category,
    module: `./concepts/${placement.section}/${placement.category}/${stem}-concept.js`,
  };
}

const unifiedConcepts = [
  ...legacyConcepts.map((concept) => canonicalEntry("concepts", concept)),
  ...legacyPhysics.map((concept) => canonicalEntry("physics", concept)),
];

export { CATEGORIES, SECTIONS };
export const CONCEPTS = unifiedConcepts;
