import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {CONCEPTS,ACTIVE_CONCEPTS,RETIRED_CONCEPTS,CATEGORIES,SECTIONS} from '../concepts/gallery/manifest.js';
const root=new URL('../.raiden/state/SNAPSHOTS/gallery-final-thousand/',import.meta.url);
export const finalDelivery=JSON.parse(fs.readFileSync(new URL('delivery.json',root),'utf8'));
const baseline=JSON.parse(fs.readFileSync(new URL('baseline.json',root),'utf8'));
const selection=JSON.parse(fs.readFileSync(new URL('selection.json',root),'utf8'));
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
assert.equal(finalDelivery.decision,'D-013');
assert.equal(ACTIVE_CONCEPTS.length,1000);assert.equal(finalDelivery.activeCount,1000);
assert.equal(CONCEPTS.length,1005);assert.equal(finalDelivery.preservedCount,1005);
assert.equal(SECTIONS.length,13);assert.equal(CATEGORIES.length,66);
assert.deepEqual(new Set(RETIRED_CONCEPTS.map(c=>c.tag)),new Set(finalDelivery.retiredTags));
assert.equal(baseline.entries.length,1003);
for(const row of baseline.entries){
  assert.deepEqual(CONCEPTS.find(c=>c.tag===row.concept.tag),row.concept,'Existing metadata changed: '+row.concept.tag);
  assert.equal(sha(fs.readFileSync(new URL('../concepts/gallery/'+row.concept.module,import.meta.url))),row.sha256,'Existing source changed: '+row.concept.tag);
}
assert.deepEqual(finalDelivery.additions.map(r=>r.concept.label),selection.selected);
assert.deepEqual(finalDelivery.additions.map(r=>r.concept.tag),['concept-archimedes-trammel','concept-linear-chirp']);
for(const row of finalDelivery.additions){
  assert.deepEqual(ACTIVE_CONCEPTS.find(c=>c.tag===row.concept.tag),row.concept);
  assert.equal(sha(fs.readFileSync(new URL('../concepts/gallery/'+row.concept.module,import.meta.url))),row.sha256);
}
