// Capture the operator's revised gallery before resumed expansion. Never recapture.
import fs from 'node:fs';
import crypto from 'node:crypto';
import { CONCEPTS, ACTIVE_CONCEPTS, RETIRED_CONCEPTS } from '../../concepts/gallery/manifest.js';
const directory = '.raiden/state/SNAPSHOTS/gallery-expansion-resumed';
fs.mkdirSync(directory, { recursive: true });
const target = `${directory}/baseline.json`;
if (fs.existsSync(target)) throw new Error('Resumption baseline already exists');
const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const baseline = {
  capturedAt: new Date().toISOString(),
  head: process.env.AFTERGLOWS_BASELINE_HEAD,
  branch: process.env.AFTERGLOWS_BASELINE_BRANCH,
  status: process.env.AFTERGLOWS_BASELINE_STATUS,
  activeCount: ACTIVE_CONCEPTS.length, preservedCount: CONCEPTS.length,
  retiredTags: RETIRED_CONCEPTS.map(c => c.tag),
  entries: CONCEPTS.map(concept => ({concept, sha256: hash(fs.readFileSync(new URL(`../../concepts/gallery/${concept.module}`, import.meta.url)))})),
};
fs.writeFileSync(target, JSON.stringify(baseline,null,2)+'\n');
console.log(`Captured ${baseline.preservedCount} complete entries and source hashes; ${baseline.activeCount} active.`);
