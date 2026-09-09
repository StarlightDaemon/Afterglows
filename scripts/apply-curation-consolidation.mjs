// One-time capture and operator-authorized retirement. Never rewrites prior evidence.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {CONCEPTS,ACTIVE_CONCEPTS} from '../concepts/gallery/manifest.js';
const root='.raiden/state/SNAPSHOTS/gallery-consolidation/';
assert.ok(!fs.existsSync(root+'decision.json'),'Consolidation is already recorded');
assert.equal(ACTIVE_CONCEPTS.length,1001);
fs.mkdirSync(root,{recursive:true});
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
const before=CONCEPTS.map(concept=>({concept,sha256:sha(fs.readFileSync('concepts/gallery/'+concept.module))}));
fs.writeFileSync(root+'baseline.json',JSON.stringify({activeCount:1001,preservedCount:1001,entries:before},null,2)+'\n');
const retire=['concept-will-o-wisp','concept-rotary-dial','concept-rotary-phone','concept-planchette','concept-ouija'];
const common={source:'curation',badge:'Refined v1',badgeCls:'meta-status-refined',versioned:false,origin:{contributions:[{agent:'codex',model:'astra',version:'6'}]},added:'2026-09-09T09:00:00Z',updated:'2026-09-09T09:00:00Z',medium:'SVG/CSS'};
const additions=[
  {...common,tag:'concept-rotary-pulse-dial',label:'Rotary Pulse Dial',section:'engineering-technology',category:'telecommunications',module:'./concepts/engineering-technology/telecommunications/rotary-pulse-dial-concept.js',definition:'A rotary telephone dial converts a selected digit into a train of loop interruptions during its spring-driven, governed return.',motionThesis:'A highlighted finger selects 5 and winds the perforated plate clockwise to a fixed stop. On release, the plate returns while a contact indicator, five marks and a trace count five interruptions.',distinction:'Fresh consolidated dial replaces both old dial and phone scenes. Numerals and finger stop stay fixed; pulse emission occurs only during return. The nominal 10-pulse-per-second return is shown eight times slower; this is a mechanism study, not real-time signaling.',aliases:['rotary telephone','pulse dialing','rotary dial'],facets:['telecommunications','governor','pulse-train'],cycleSeconds:10,references:['https://www.britishtelephones.com/dials/pdf/b1003.pdf','https://www.britishtelephones.com/howdial.htm'],replaces:['concept-rotary-dial','concept-rotary-phone']},
  {...common,tag:'concept-spirit-board',label:'Spirit Board & Planchette',section:'imagination-belief',category:'supernatural-folklore',module:'./concepts/imagination-belief/supernatural-folklore/spirit-board-concept.js',definition:'A talking-board game pairs a lettered surface with a movable planchette whose clear window selects letters and responses.',motionThesis:'One planchette moves from YES through H, E, L, a second L, and O, pausing with its clear window centered on each letter before closing at GOODBYE.',distinction:'Fresh consolidated scene replaces the two older board/pointer studies. Geometry aligns the actual aperture with fixed glyph centers; a small excursion makes the repeated L explicit. This is a staged illustration of game equipment, not a claim of supernatural agency.',aliases:['ouija','planchette','talking board','spirit board'],facets:['folklore','board-game','letter-selection'],cycleSeconds:16,references:['https://www.hasbro.com/common/instruct/Ouija.PDF'],replaces:['concept-planchette','concept-ouija']},
];
fs.writeFileSync('concepts/gallery/manifests/curation.js','// Operator-directed fresh consolidations; older catalog records remain preserved.\nexport const CONCEPTS = '+JSON.stringify(additions,null,2)+';\n');
let manifest=fs.readFileSync('concepts/gallery/manifest.js','utf8');
manifest=manifest.replace('function canonicalEntry','import { CONCEPTS as curation } from "./manifests/curation.js";\n\nfunction canonicalEntry');
manifest=manifest.replace('  ...resumedEconomics,','  ...resumedEconomics,\n  ...curation,');
manifest=manifest.replace('const retiredTags = new Set([]);','const retiredTags = new Set('+JSON.stringify(retire)+');');
fs.writeFileSync('concepts/gallery/manifest.js',manifest);
let taxonomy=fs.readFileSync('concepts/gallery/taxonomy.js','utf8');
taxonomy=taxonomy.replace(/(id: "telecommunications"[^\n]*expectedCount: )15/,'$116').replace(/(id: "supernatural-folklore"[^\n]*expectedCount: )16/,'$117');
fs.writeFileSync('concepts/gallery/taxonomy.js',taxonomy);
fs.writeFileSync(root+'decision.json',JSON.stringify({decision:'D-012',status:'implemented-pending-verification',operatorInstruction:'Retire the recommended marsh-light entry and keep the suggested keeper; retire both old rotary studies and build a fresh singular dial; retire both old spirit-board studies and build one fresh scene. Keep Wind Rose at a consistent tile size; the two review sizes were confusing.',retiredTags:retire,keptTag:'concept-wisp',additions:additions.map(concept=>({concept,sha256:sha(fs.readFileSync('concepts/gallery/'+concept.module))})),activeCount:998,preservedCount:1003,previousActiveCount:1001,formerTarget:1000,remainingToFormerTarget:2,automaticAdditions:false,windRose:'Unchanged source and standard gallery dimensions; single equal-size review panel.'},null,2)+'\n');
console.log('Five older catalog studies retired, two fresh consolidations added: 998 active / 1003 preserved.');
