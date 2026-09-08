// Local-only campaign evidence gate. Does not change expansion evidence.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { CONCEPTS } from '../concepts/gallery/manifest.js';
import './gallery-standard-wave-01.js';

const base = new URL('../.raiden/state/SNAPSHOTS/gallery-visual-standard/', import.meta.url);
const wave = JSON.parse(fs.readFileSync(new URL('wave-01.json', base), 'utf8'));
const changes = wave.concepts.filter(c => c.classification === 'refine');
assert.ok(wave.concepts.length + wave.qualityReferences.length <= 30);
assert.ok(changes.length > 0 && changes.length <= 20);
assert.equal(new Set(wave.concepts.map(c => c.tag)).size, wave.concepts.length);
for (const row of [...wave.concepts, ...wave.qualityReferences]) {
  const concept = CONCEPTS.find(c => c.tag === row.tag);
  assert.ok(concept, row.tag);
  assert.equal(concept.category, row.category);
  assert.ok(['passes', 'refine', 'defer'].includes(row.classification));
  assert.ok(row.decisionReason && row.verificationResult && !row.verificationResult.includes('pending'));
  const source = fs.readFileSync(new URL(concept.module, new URL('../concepts/gallery/', import.meta.url)), 'utf8').replaceAll('\r\n','\n');
  assert.equal(crypto.createHash('sha256').update(source).digest('hex'), row.sourceHashAfterCompletion, `Evidence stale: ${row.tag}`);
  for (const evidence of row.visualEvidencePaths) {
    const bytes = fs.readFileSync(new URL(evidence, base));
    assert.ok(bytes.length > 500, `Empty evidence: ${evidence}`);
    if(/\.(?:png|jpg)$/.test(evidence)) assert.ok(bytes.subarray(1,4).toString()==='PNG' || bytes.subarray(0,3).toString('hex')==='ffd8ff', `Invalid image: ${evidence}`);
  }
  if(row.classification === 'refine') {
    assert.ok(concept.versions.some(v=>v.v===row.previousDefaultVersion));
    assert.ok(concept.versions.some(v=>v.v===row.candidateVersion));
    assert.deepEqual(row.candidateProvenance, {agent:'codex',model:'astra',version:'6'});
    assert.ok(row.verification.phases.join(',') === '0,0.25,0.5,0.75,0.9');
    for(const field of ['liveCycle','reducedMotionStyle','disconnectReconnect','narrowGallery','versionControls','copy','sourceLink','provenanceFilters']) assert.equal(row.verification[field],true, `${row.tag}: ${field}`);
    assert.ok(row.visualEvidencePaths.some(p=>p.includes('mobile')));
    assert.ok(row.visualEvidencePaths.some(p=>p.includes('reduced')));
  }
}
console.log(`Visual Standard Wave ${wave.wave}: ${wave.concepts.length} historical decisions, ${wave.qualityReferences.length} unchanged quality references, ${changes.length} verified candidates with current source hashes.`);
