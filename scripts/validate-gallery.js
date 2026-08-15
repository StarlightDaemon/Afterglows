import fs from 'fs';
import path from 'path';
import vm from 'vm';

async function validate() {
  const cMod = await import('../concepts/gallery/manifest.js');
  const pMod = await import('../physics/gallery/manifest.js');

  const cConcepts = cMod.CONCEPTS;
  const cCats = cMod.CATEGORIES.map(c => c.id);
  const pConcepts = pMod.CONCEPTS;
  const pCats = pMod.CATEGORIES.map(c => c.id);

  console.log('=== Concept Gallery Validator ===');
  console.log(`Concepts count: ${cConcepts.length} in ${cCats.length} categories`);
  console.log(`Physics count: ${pConcepts.length} in ${pCats.length} categories`);

  const errors = [];
  const warnings = [];
  const allTags = new Set();
  const allLabels = new Map();

  // Check Physics tags
  for (const p of pConcepts) {
    if (allTags.has(p.tag)) errors.push(`Duplicate tag in physics: ${p.tag}`);
    allTags.add(p.tag);
    allLabels.set(p.label.toLowerCase(), `physics: ${p.tag}`);
    if (!pCats.includes(p.category)) errors.push(`Unknown category in physics: ${p.category} for ${p.tag}`);
  }

  // Check Concepts
  for (const c of cConcepts) {
    if (allTags.has(c.tag)) errors.push(`Duplicate tag: ${c.tag}`);
    allTags.add(c.tag);

    const normLabel = c.label.toLowerCase();
    if (allLabels.has(normLabel)) {
      errors.push(`Duplicate label "${c.label}" on ${c.tag} (already used by ${allLabels.get(normLabel)})`);
    }
    allLabels.set(normLabel, `concepts: ${c.tag}`);

    if (!cCats.includes(c.category)) {
      errors.push(`Unknown category: "${c.category}" for ${c.tag}`);
    }

    if (!c.origin || !c.origin.contributions || !Array.isArray(c.origin.contributions) || c.origin.contributions.length === 0) {
      errors.push(`Invalid/missing origin.contributions for: ${c.tag}`);
    }

    if (!c.added || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(c.added)) {
      errors.push(`Invalid added ISO timestamp "${c.added}" on ${c.tag}`);
    }

    if (!c.updated || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(c.updated)) {
      errors.push(`Invalid updated ISO timestamp "${c.updated}" on ${c.tag}`);
    }

    const filename = `${c.tag.replace(/^concept-/, '')}-concept.js`;
    const expectedFile = path.resolve('concepts', 'gallery', 'concepts', filename);

    if (!fs.existsSync(expectedFile)) {
      errors.push(`Missing file: ${expectedFile} for tag ${c.tag}`);
    } else {
      const code = fs.readFileSync(expectedFile, 'utf8');
      
      // Syntax check by running in vm or checking parsing
      try {
        new vm.Script(code, { filename: expectedFile });
      } catch (err) {
        errors.push(`Syntax error in ${filename}: ${err.message}`);
      }

      // Check customElements.define
      const defMatch = code.match(/customElements\.define\s*\(\s*['"]([^'"]+)['"]/);
      if (!defMatch) {
        errors.push(`Missing customElements.define in ${filename}`);
      } else if (defMatch[1] !== c.tag) {
        errors.push(`Custom element tag mismatch in ${filename}: defined as "${defMatch[1]}", manifest has "${c.tag}"`);
      }

      // Ensure shadowRoot is attached
      if (!code.includes('attachShadow')) {
        warnings.push(`No attachShadow found in ${filename}`);
      }
    }
  }

  // Check for orphan files
  const conceptsDir = path.resolve('concepts', 'gallery', 'concepts');
  const files = fs.readdirSync(conceptsDir);
  for (const f of files) {
    if (f.endsWith('-concept.js')) {
      const tag = 'concept-' + f.replace(/-concept\.js$/, '');
      if (!cConcepts.some(c => c.tag === tag)) {
        errors.push(`Orphan concept file not in manifest: ${f}`);
      }
    }
  }

  console.log(`\nValidation complete.`);
  if (warnings.length > 0) {
    console.log(`Warnings (${warnings.length}):`);
    warnings.forEach(w => console.log(`  - ${w}`));
  }
  if (errors.length > 0) {
    console.error(`ERRORS FOUND (${errors.length}):`);
    errors.forEach(e => console.error(`  [!] ${e}`));
    process.exit(1);
  } else {
    console.log(`SUCCESS: 0 errors found! All ${cConcepts.length} concepts are structurally valid and cleanly mapped.`);
  }
}

validate().catch(err => {
  console.error('Fatal validation error:', err);
  process.exit(1);
});
