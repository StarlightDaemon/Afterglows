import { CATEGORIES, CONCEPTS, SECTIONS } from "../concepts/gallery/manifest.js";

console.log("=== UNIFIED ANIMATION CONCEPTS INVENTORY ===");
console.log(`${CONCEPTS.length} concepts / ${SECTIONS.length} sections / ${CATEGORIES.length} categories`);

for (const section of SECTIONS) {
  const categories = CATEGORIES.filter((category) => category.section === section.id);
  const sectionCount = CONCEPTS.filter((concept) => concept.section === section.id).length;
  console.log(`\n## ${section.title.toUpperCase()} (${sectionCount})`);

  for (const category of categories) {
    const items = CONCEPTS.filter((concept) => concept.category === category.id);
    console.log(`\n### ${category.title.toUpperCase()} (${items.length})`);
    for (const concept of items) {
      console.log(`  - ${concept.label} [${concept.tag}]`);
    }
  }
}
