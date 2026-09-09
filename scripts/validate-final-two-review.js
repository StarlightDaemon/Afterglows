import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {finalDelivery} from './validate-final-gallery-state.js';
const root=new URL('../.raiden/state/SNAPSHOTS/gallery-final-thousand/',import.meta.url);
const review=JSON.parse(fs.readFileSync(new URL('review.json',root),'utf8'));
assert.equal(finalDelivery.status,'reviewed');
assert.equal(review.status,'reviewed');
assert.deepEqual(review.phases,[25,50,75,85]);
assert.equal(review.galleryCount,'Showing 1000 of 1000');
assert.deepEqual(review.retiredLinks,[]);assert.deepEqual(review.pageErrors,[]);
assert.equal(review.entries.length,2);
for(const row of finalDelivery.additions){
  const evidence=review.entries.find(e=>e.tag===row.concept.tag);assert.ok(evidence);
  assert.equal(evidence.sha256,row.sha256);
  assert.deepEqual(evidence.nativeDimensions,[140,140]);
  assert.equal(evidence.reducedAnimatedElements,0);assert.equal(evidence.remounted,true);
}
assert.equal(review.screenshots.length,7);
for(const entry of review.screenshots){
  assert.ok(/^[a-z0-9-]+\.(jpg|png)$/.test(entry.path));
  const bytes=fs.readFileSync(new URL(entry.path,root));assert.ok(bytes.length>1000);
  if(entry.path.endsWith('.jpg'))assert.equal(bytes.subarray(0,3).toString('hex'),'ffd8ff');
  else assert.equal(bytes.subarray(1,4).toString(),'PNG');
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),entry.sha256);
}
console.log('PASS: final two sources match four reviewed phases, reduced-motion/remount, mobile and gallery evidence.');
