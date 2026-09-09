import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {CONCEPTS,ACTIVE_CONCEPTS,RETIRED_CONCEPTS} from '../concepts/gallery/manifest.js';
const root=new URL('../.raiden/state/SNAPSHOTS/gallery-consolidation/',import.meta.url);
export const curation=JSON.parse(fs.readFileSync(new URL('decision.json',root),'utf8'));
const baseline=JSON.parse(fs.readFileSync(new URL('baseline.json',root),'utf8'));
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
assert.equal(curation.decision,'D-012');
assert.deepEqual(new Set(curation.retiredTags),new Set(['concept-will-o-wisp','concept-rotary-dial','concept-rotary-phone','concept-planchette','concept-ouija']));
assert.deepEqual(new Set(RETIRED_CONCEPTS.map(c=>c.tag)),new Set(curation.retiredTags));
assert.equal(curation.activeCount,998);assert.equal(curation.preservedCount,1003);
assert.equal(ACTIVE_CONCEPTS.filter(c=>c.source!=='finale').length,998);
assert.equal(CONCEPTS.filter(c=>c.source!=='finale').length,1003);
assert.ok(ACTIVE_CONCEPTS.some(c=>c.tag==='concept-wisp'));
assert.equal(baseline.entries.length,1001);
for(const row of baseline.entries){
  assert.deepEqual(CONCEPTS.find(c=>c.tag===row.concept.tag),row.concept,'Pre-consolidation metadata changed: '+row.concept.tag);
  assert.equal(sha(fs.readFileSync(new URL('../concepts/gallery/'+row.concept.module,import.meta.url))),row.sha256,'Pre-consolidation source changed: '+row.concept.tag);
}
assert.deepEqual(new Set(curation.additions.map(r=>r.concept.tag)),new Set(['concept-rotary-pulse-dial','concept-spirit-board']));
for(const row of curation.additions){
  assert.deepEqual(CONCEPTS.find(c=>c.tag===row.concept.tag),row.concept);
  assert.ok(ACTIVE_CONCEPTS.some(c=>c.tag===row.concept.tag));
  assert.equal(sha(fs.readFileSync(new URL('../concepts/gallery/'+row.concept.module,import.meta.url))),row.sha256);
}
