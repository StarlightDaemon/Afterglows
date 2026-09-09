import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {curation} from './validate-curation-state.js';
const root=new URL('../.raiden/state/SNAPSHOTS/gallery-consolidation/',import.meta.url);
const review=JSON.parse(fs.readFileSync(new URL('review.json',root),'utf8'));
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
assert.equal(review.status,'reviewed-ready-for-operator');
assert.equal(curation.status,'verified-ready-for-operator');
assert.deepEqual(review.phases,[25,50,75,85]);
assert.equal(review.galleryCount,'Showing 998 of 998');
assert.deepEqual(review.retiredLinks,[]);
assert.deepEqual(review.pageErrors,[]);
for(const row of curation.additions){
  const entry=review.entries.find(e=>e.tag===row.concept.tag);
  assert.ok(entry);
  assert.equal(entry.sha256,row.sha256);
  assert.deepEqual(entry.nativeDimensions,[140,140]);
  assert.equal(entry.reducedAnimatedElements,0);
  assert.equal(entry.remounted,true);
}
assert.equal(review.screenshots.length,7);
for(const entry of review.screenshots){
  assert.ok(/^[a-z0-9-]+\.(?:png|jpg)$/.test(entry.path));
  const bytes=fs.readFileSync(new URL(entry.path,root));
  assert.ok(bytes.length>1000);
  if(entry.path.endsWith('.png'))assert.equal(bytes.subarray(1,4).toString(),'PNG');
  else assert.equal(bytes.subarray(0,3).toString('hex'),'ffd8ff');
  assert.equal(sha(bytes),entry.sha256);
}
console.log('PASS: both fresh consolidations are bound to current sources, four reviewed phases, reduced-motion/remount and gallery evidence.');
