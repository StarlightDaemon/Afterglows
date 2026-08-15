import { CATEGORIES, CONCEPTS } from '../concepts/gallery/manifest.js';
import { CATEGORIES as P_CATEGORIES, CONCEPTS as P_CONCEPTS } from '../physics/gallery/manifest.js';

console.log('=== CONCEPTS INVENTORY ===');
const byCat = {};
for (const cat of CATEGORIES) byCat[cat.id] = [];
for (const item of CONCEPTS) {
  if (!byCat[item.category]) byCat[item.category] = [];
  byCat[item.category].push(`${item.label} [${item.tag}]`);
}

for (const [cat, items] of Object.entries(byCat)) {
  console.log(`\n### ${cat.toUpperCase()} (${items.length})`);
  for (const item of items) {
    console.log(`  - ${item}`);
  }
}

console.log('\n=== PHYSICS INVENTORY ===');
const pByCat = {};
for (const cat of P_CATEGORIES) pByCat[cat.id] = [];
for (const item of P_CONCEPTS) {
  if (!pByCat[item.category]) pByCat[item.category] = [];
  pByCat[item.category].push(`${item.label} [${item.tag}]`);
}

for (const [cat, items] of Object.entries(pByCat)) {
  console.log(`\n### PHYSICS / ${cat.toUpperCase()} (${items.length})`);
  for (const item of items) {
    console.log(`  - ${item}`);
  }
}
