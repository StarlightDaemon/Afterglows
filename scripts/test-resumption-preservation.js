// The user's later revisions and retirement are the new preservation boundary.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {CONCEPTS, ACTIVE_CONCEPTS, RETIRED_CONCEPTS} from '../concepts/gallery/manifest.js';
import {historicalConcept, historicalSourceURL, currentCuration as transition} from './gallery-curation-state.js';
const baseline=JSON.parse(fs.readFileSync(new URL('../.raiden/state/SNAPSHOTS/gallery-expansion-resumed/baseline.json',import.meta.url),'utf8'));
for(const {concept,sha256} of baseline.entries){
  assert.deepEqual(historicalConcept(CONCEPTS.find(c=>c.tag===concept.tag)),concept,'Revised baseline metadata changed: '+concept.tag);
  const bytes=fs.readFileSync(historicalSourceURL(concept));
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),sha256,'Revised baseline source changed: '+concept.tag);
}
assert.deepEqual(new Set(RETIRED_CONCEPTS.map(c=>c.tag)),new Set(transition.retiredTags),'Consolidation decision changed');
assert.equal(CONCEPTS.length,ACTIVE_CONCEPTS.length+RETIRED_CONCEPTS.length,'Active/retired partition');
assert.equal(new Set([...ACTIVE_CONCEPTS,...RETIRED_CONCEPTS].map(c=>c.tag)).size,CONCEPTS.length,'Disjoint active/retired partition');
console.log(`SUCCESS: all ${baseline.entries.length} revised baseline sources and complete metadata preserved; Wind Rose v3 restoration verified separately.`);
