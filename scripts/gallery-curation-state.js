// Explicit operator-authorized restoration; historical delivery snapshots stay immutable.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {CONCEPTS, ACTIVE_CONCEPTS, RETIRED_CONCEPTS, COMPATIBILITY_MODULES} from '../concepts/gallery/manifest.js';
import {curation} from './validate-curation-state.js';
import {finalDelivery} from './validate-final-gallery-state.js';
export const currentCuration={...curation,activeCount:finalDelivery.activeCount,preservedCount:finalDelivery.preservedCount,additions:[...curation.additions,...finalDelivery.additions]};

const root = new URL('../.raiden/state/SNAPSHOTS/gallery-restoration/', import.meta.url);
export const transition = JSON.parse(fs.readFileSync(new URL('transition.json', root), 'utf8'));
const windTag = 'concept-wind-rose';
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const normalize = value => value.toString().replaceAll('\r\n', '\n');
export const historicalConcept = concept => concept?.tag === windTag ? transition.before : concept;
export const historicalSourceURL = concept => concept.tag === windTag
  ? new URL('previous-wind-rose.js', root)
  : new URL('../concepts/gallery/' + concept.module, import.meta.url);

assert.equal(transition.status, 'restored-awaiting-retirement-choice');
assert.equal(transition.operatorRetirementChoice, null);
assert.equal(transition.before.tag, windTag);
assert.equal(transition.after.tag, windTag);
assert.equal(transition.after.default, 'v3');
assert.deepEqual(transition.after.versions.slice(0, 2), transition.before.versions);
assert.deepEqual(CONCEPTS.find(c => c.tag === windTag), transition.after);
assert.deepEqual(new Set(RETIRED_CONCEPTS.map(c => c.tag)), new Set(curation.retiredTags));
assert.deepEqual(transition.retiredTags, []);
assert.equal(ACTIVE_CONCEPTS.length, finalDelivery.activeCount);
assert.equal(transition.activeCount, 1001);
assert.equal(transition.targetAfterChoice, 1000);
assert.deepEqual(COMPATIBILITY_MODULES, [{module:transition.before.module, target:transition.after.module}]);
const previous = fs.readFileSync(historicalSourceURL(transition.before));
const integrated = fs.readFileSync(new URL('../concepts/gallery/' + transition.after.module, import.meta.url));
const compatibility = fs.readFileSync(new URL('../concepts/gallery/' + transition.before.module, import.meta.url));
const candidate = fs.readFileSync(new URL('../gallery-visual-standard/wind-rose-restart/wind-rose-candidate.js', root));
assert.equal(sha(previous), transition.previousSha256);
assert.equal(sha(integrated), transition.integratedSha256);
assert.equal(sha(compatibility), transition.compatibilitySha256);
assert.equal(sha(candidate), transition.candidateSha256);
const blocks = /\/\/ BEGIN WIND ROSE RESTORATION v3\n[\s\S]*?\/\/ END WIND ROSE RESTORATION v3\n/g;
assert.equal([...normalize(integrated).matchAll(blocks)].length, 3);
assert.equal(normalize(integrated).replace(blocks, ''), normalize(previous), 'Restore must preserve the earlier implementations exactly');
for (const [oldName, newName] of [['styles','windRoseV3Styles'], ['markup','windRoseV3Markup']]) {
  const extract = (text, name) => {
    const literal = text.match(new RegExp('const ' + name + '\\s*=\\s*("[^\\n]*");'))?.[1];
    return literal && JSON.parse(literal);
  };
  const expected = extract(normalize(candidate), oldName);
  assert.ok(expected?.length > 100);
  assert.equal(extract(normalize(integrated), newName), expected, 'Integrated v3 matches reviewed candidate ' + oldName);
}
const baseline = JSON.parse(fs.readFileSync(new URL('../gallery-expansion-resumed/baseline.json', root), 'utf8'));
const before = baseline.entries.find(row => row.concept.tag === windTag);
assert.deepEqual(transition.before, before.concept);
assert.equal(transition.previousSha256, before.sha256);
