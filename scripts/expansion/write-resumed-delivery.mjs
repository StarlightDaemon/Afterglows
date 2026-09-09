import fs from 'node:fs';
import {CONCEPTS,ACTIVE_CONCEPTS,RETIRED_CONCEPTS,CATEGORIES,SECTIONS} from '../../concepts/gallery/manifest.js';
const directory='.raiden/state/SNAPSHOTS/gallery-expansion-resumed';
if (fs.existsSync(`${directory}/delivery.json`) && JSON.parse(fs.readFileSync(`${directory}/delivery.json`, 'utf8')).status === 'reviewed') {
  throw new Error('Reviewed delivery is closed; do not overwrite its acceptance record with an authoring draft.');
}
const baseline=JSON.parse(fs.readFileSync(`${directory}/baseline.json`,'utf8'));
const old=new Set(baseline.entries.map(e=>e.concept.tag));
const additions=CONCEPTS.filter(c=>!old.has(c.tag));
const identities=additions.map(({key,label,tag,module,section,category})=>({key,label,tag,module,section,category}));
fs.writeFileSync(`${directory}/selection.json`,JSON.stringify({
  note:'Identity and selection outcomes only; canonical definitions, design assumptions and references live in manifest shards.',
  reconsidered:'All 55 previously deferred selections S061–S115 were researched again against the revised catalog and retained.',
  extra:'S116, Frost Heave by Ice-Lens Growth, fills a distinct ground-ice mechanism gap and offsets the preserved Wind Rose retirement.',
  selected:identities,
},null,2)+'\n');
fs.writeFileSync(`${directory}/delivery.json`,JSON.stringify({
  decision:'operator-resumed-expansion',status:'reviewing',
  instruction:'Assess the revised/retired gallery and continue to the thousand-animation marker with the established context, render and detail standard.',
  interpretation:'1,000 active studies; retain the retired record separately.',
  baseline:{head:baseline.head,active:baseline.activeCount,preserved:baseline.preservedCount},
  delivered:{active:ACTIVE_CONCEPTS.length,preserved:CONCEPTS.length,additions:additions.length,sections:SECTIONS.length,categories:CATEGORIES.length},
  retiredTags:RETIRED_CONCEPTS.map(c=>c.tag),selectedKeys:identities.map(c=>c.key),
},null,2)+'\n');
console.log(`Recorded ${additions.length} selected additions; ${ACTIVE_CONCEPTS.length} active / ${CONCEPTS.length} preserved.`);
