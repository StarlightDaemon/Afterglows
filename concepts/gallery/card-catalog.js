// The renderer uses the same card data in a source checkout and a Pages
// build. The build serializes these exports into one standalone module.
import { ACTIVE_CONCEPTS, CATEGORIES, SECTIONS } from "./manifest.js";

export { CATEGORIES, SECTIONS };
const cardFields = [
  "tag", "label", "module", "section", "category", "added", "updated",
  "origin", "versioned", "versions", "default", "badge", "badgeCls",
  "definition", "motionThesis", "aliases", "facets",
];
export const CARDS = ACTIVE_CONCEPTS.map(concept => Object.fromEntries(
  cardFields.filter(field => Object.hasOwn(concept, field)).map(field => [field, concept[field]])
));
