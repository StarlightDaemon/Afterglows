// Reproducible broad label/metadata scan, followed by documented source judgments.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {CONCEPTS, ACTIVE_CONCEPTS, CATEGORIES, SECTIONS} from '../concepts/gallery/manifest.js';
import {candidates} from './retirement-candidates.js';
const root = new URL('../.raiden/state/SNAPSHOTS/gallery-restoration/',import.meta.url);
const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const tokens = value => new Set(normalize(value).split(' ').filter(s => s.length>1 && !['the','of','and','with','in'].includes(s)));
const jaccard = (a,b) => [...a].filter(x => b.has(x)).length / new Set([...a,...b]).size || 0;
const grams = value => {const s=normalize(value).replaceAll(' ','');return new Set(Array.from({length:Math.max(0,s.length-2)},(_,i)=>s.slice(i,i+3)));};
const inventory = CONCEPTS.map(c => ({tag:c.tag,label:c.label,section:c.section,category:c.category,module:c.module,default:c.default || null,definition:c.definition || '',motionThesis:c.motionThesis || '',distinction:c.distinction || '',aliases:c.aliases || [],sha256:crypto.createHash('sha256').update(fs.readFileSync(new URL('../concepts/gallery/'+c.module,import.meta.url))).digest('hex')}));
const indexed = inventory.map(c => ({c,t:tokens(c.label+' '+c.aliases.join(' ')),g:grams(c.label)}));
const neighbors=[];
for(let i=0;i<indexed.length;i++)for(let j=i+1;j<indexed.length;j++){
  const a=indexed[i],b=indexed[j];
  const score=Math.max(jaccard(a.t,b.t),jaccard(a.g,b.g));
  if(score>=0.35)neighbors.push({a:a.c.tag,b:b.c.tag,labels:[a.c.label,b.c.label],score:Number(score.toFixed(3)),sameCategory:a.c.category===b.c.category});
}
neighbors.sort((a,b)=>b.score-a.score);
const report={status:'awaiting-operator-retirement-choice',counts:{active:ACTIVE_CONCEPTS.length,preserved:CONCEPTS.length,sections:SECTIONS.length,categories:CATEGORIES.length,target:1000},coverage:'All catalog labels, aliases, definitions, motion theses and distinctions exported for review. Lexical comparison covers every unordered pair across all sections. Targeted source inspection adjudicates semantic overlap; this is not a claim of fresh visual review of all 1,001 studies.',comparedPairs:CONCEPTS.length*(CONCEPTS.length-1)/2,inventory,lexicalNeighbors:neighbors,candidates:candidates.map(c=>({...c,retire:inventory.find(x=>x.tag===c.retire),keep:inventory.find(x=>x.tag===c.keep)})),retainedDistinctions:['Stirling mechanism vs pressure-volume cycle: mechanism vs thermodynamic representation.','Bragg spectrometer vs diffraction: apparatus vs phenomenon.','Chladni figures vs membrane modes: different boundary conditions and media.','Anemometer vs Robinson instrument: general measurement vs specific hardware.','Harmonograph vs Lissajous: a physical damped drawing process can be distinct; redesign would be preferable to retirement.'],decision:null};
fs.writeFileSync(new URL('overlap-assessment.json',root),JSON.stringify(report,null,2)+'\n');
console.log(`Scanned ${inventory.length} records across ${SECTIONS.length} sections and ${CATEGORIES.length} categories; compared ${report.comparedPairs} label/alias pairs; ${neighbors.length} lexical neighbors; three source-reviewed proposals, none retired.`);
