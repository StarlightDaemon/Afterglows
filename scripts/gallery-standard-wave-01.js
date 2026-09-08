// Deterministic authoring source for the five Wave 01 candidates.
// This file is local QA tooling and is excluded from the public artifact.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { CONCEPTS } from '../concepts/gallery/manifest.js';

const root = new URL('../', import.meta.url);
const ledgerURL = new URL('.raiden/state/SNAPSHOTS/gallery-visual-standard/wave-01.json', root);
const wave = JSON.parse(fs.readFileSync(ledgerURL, 'utf8'));
const fmt = x => Number(x.toFixed(4));
const tau = Math.PI * 2;
const smooth = t => (1-Math.cos(tau*t))/2;
const circle = (x,y,r,fill,more='') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" ${more}/>`;
const line = (x1,y1,x2,y2,color='#d4c5a7',width=2,more='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" ${more}/>`;
const text = (x,y,s,color='#a9b7b0',size=7) => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}">${s}</text>`;
const rect = (x,y,w,h,fill,more='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${more}/>`;
const move = (x,y,angle=0) => `translate(${fmt(x)}px,${fmt(y)}px) rotate(${fmt(angle)}deg)`;
const prefix = 'agvs2';
function scene(title,description,body,tracks,extra='') {
  let css = `:host{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.agvs2{width:100%;height:100%;max-width:140px;max-height:140px;overflow:hidden}.agvs2 text{font-family:ui-monospace,monospace}.agvs2 *{transform-box:view-box;transform-origin:0 0}\n${extra}\n`;
  let reduced='';
  for (const [name, fn] of Object.entries(tracks)) {
    const pose=fn(.25);
    css += `.${prefix}-${name}{${pose};animation:${prefix}-${name} 6s linear infinite}\n@keyframes ${prefix}-${name}{\n`;
    for(let i=0;i<=120;i++) css+=`${fmt(i*100/120)}%{${fn(i/120)}}\n`;
    css+='}\n'; reduced+=`.${prefix}-${name}{animation:none!important;${pose}}\n`;
  }
  css+=`@media(prefers-reduced-motion:reduce){${reduced}}`;
  const svg=`<svg class="agvs2" viewBox="0 0 140 140" role="img" aria-label="${description}"><title>${title}</title>${rect(4,4,132,132,'#101914','rx="7" stroke="#3b5043"')}${text(12,19,title,'#e3d6b9',7.5)}${body}</svg>`;
  return {css,svg};
}
const group=(name,body)=>`<g class="${prefix}-${name}">${body}</g>`;
const rod=(name,length,color)=>group(name,line(0,0,length,0,color,2.5)+circle(0,0,2,'#f0e4c9')+circle(length,0,2,'#f0e4c9'));

// Slider-crank with a 12-unit crank and an invariant 35-unit connecting rod.
export function solenoidPose(t) {
  const a=tau*t, pin=[98+12*Math.cos(a),70+12*Math.sin(a)];
  const slider=[pin[0]-Math.sqrt(35**2-(pin[1]-70)**2),70];
  return {pin,slider,angle:Math.atan2(pin[1]-70,pin[0]-slider[0])*180/Math.PI};
}
function solenoid() {
  const body = text(13,34,'COIL','#d2a875')+text(83,34,'FLYWHEEL','#9cbbb0')+
    rect(15,112,108,5,'#5e6255','rx="2"')+rect(24,85,8,27,'#475346')+rect(94,92,8,20,'#475346')+
    rect(19,51,42,38,'#302b23','rx="4" stroke="#a0784d"')+
    group('coil',Array.from({length:7},(_,i)=>line(24+i*5,55,24+i*5,85,'#e8ad6e',2.4)).join(''))+
    group('plunger',rect(-30,-4,33,8,'#c3d1ca','rx="2" stroke="#71877a"'))+
    circle(98,70,24,'#192d29','stroke="#88aa9e" stroke-width="3"')+
    group('wheel',Array.from({length:6},(_,i)=>line(0,0,21*Math.cos(i*tau/6),21*Math.sin(i*tau/6),'#5c8073',2)).join('')+circle(12,0,3,'#e8bd78'))+
    rod('rod',35,'#e9c386')+circle(98,70,3,'#dae1d3')+
    group('energized',text(14,103,'PULL','#f2c887',8))+group('coasting',text(14,103,'COAST','#9fb4ab',8))+
    text(13,130,'TIMED PULL / INERTIAL RETURN');
  return scene('SOLENOID ENGINE','A timed magnetic pull retracts the core; a rigid connecting rod drives the flywheel, which carries the return stroke.',body,{
    plunger:t=>`transform:${move(...solenoidPose(t).slider)}`,
    wheel:t=>`transform:${move(98,70,t*360)}`,
    rod:t=>`transform:${move(...solenoidPose(t).slider,solenoidPose(t).angle)}`,
    coil:t=>`opacity:${t>.03&&t<.47?1:.25}`,
    energized:t=>`opacity:${t>.03&&t<.47?1:0}`,
    coasting:t=>`opacity:${t>.03&&t<.47?0:1}`,
  });
}

// Wheel and windlass share a shaft. Rope travel is r*theta (r = 4).
export function cranePose(t) { const lift=22*smooth(t); return {lift,angle:lift/4*180/Math.PI,loadY:99-lift}; }
function crane() {
  const spokes=Array.from({length:12},(_,i)=>line(5*Math.cos(i*tau/12),5*Math.sin(i*tau/12),24*Math.cos(i*tau/12),24*Math.sin(i*tau/12),'#98704b',1.4)).join('');
  const body = line(16,118,123,118,'#70644c',4)+line(75,118,75,36,'#b59562',5)+line(75,36,117,36,'#b59562',4)+line(75,76,114,36,'#78694d',3)+
    circle(40,80,26,'#1d241c','stroke="#ae8854" stroke-width="2.5"')+
    group('wheel',spokes+circle(0,0,4,'#d6bb84'))+
    '<path d="M44 80 V47 Q44 43 48 43 H112 A4 4 0 0 1 116 47" fill="none" stroke="#dfd1a8" stroke-width="1.5"/>'+
    circle(112,47,4,'#425347','stroke="#9ca98d"')+
    group('rope',line(116,47,116,99,'#dfd1a8',1.5))+
    group('load',rect(106,-1,20,12,'#8d9587','rx="1" stroke="#d8d7c4"')+line(110,1,122,1,'#313d33',1))+
    // Worker stays near the bottom while the cage revolves beneath their feet.
    circle(35,82,2.5,'#cfbc94')+line(35,86,37,94,'#c6b28a',2)+line(35,88,42,86,'#c6b28a',1.5)+
    group('feet',line(37,94,32,101,'#c6b28a',1.5)+line(37,94,42,99,'#c6b28a',1.5))+
    line(29,118,40,106,'#776c51',3)+line(51,118,40,106,'#776c51',3)+
    group('raising',text(84,64,'HOIST','#e6c58d'))+group('lowering',text(84,64,'LOWER','#a6c6b5'))+
    text(13,130,'SHAFT → ROPE → LOAD');
  return scene('TREADWHEEL CRANE','A treadwheel turns a shared windlass to hoist a stone. Reversing the wheel pays out the same rope and lowers the stone.',body,{
    wheel:t=>`transform:${move(40,80,cranePose(t).angle)}`,
    rope:t=>`transform:translate(0px,47px) scaleY(${fmt((cranePose(t).loadY-47)/52)}) translate(0px,-47px)`,
    load:t=>`transform:${move(0,cranePose(t).loadY)}`,
    feet:t=>`transform:${move(0,-Math.abs(Math.sin(tau*t))*1.2)}`,
    raising:t=>`opacity:${t<.5?1:0}`,
    lowering:t=>`opacity:${t<.5?0:1}`,
  });
}

// Idealized double chamber: pump stroke transfers 16 height-units per cycle;
// weighted reservoir discharges 16 per cycle. Both inventories are periodic.
export function bellowsPose(t) {const pump=16*smooth(t);return {floor:87+pump,roof:38+16*t-(t>.5?16-pump:0)};}
function bellows() {
  const chamber = color => rect(24,0,49,1,color) + '<path d="M24 0 L21 .2 L26 .4 L21 .6 L26 .8 L24 1 M73 0 L76 .2 L71 .4 L76 .6 L71 .8 L73 1" fill="none" stroke="#bd9460" stroke-width="1.2" vector-effect="non-scaling-stroke"/>';
  const body = text(16,30,'WEIGHTED RESERVOIR', '#ceb589',6.5)+
    group('upperLeather',chamber('#25382d'))+
    group('roof',rect(20,-2,57,4,'#b99c6d','rx="1"')+rect(34,-7,27,5,'#727a69','rx="1"'))+
    rect(20,65,57,4,'#b99c6d','rx="1"')+
    group('lowerLeather',chamber('#343c2d'))+
    group('floor',rect(20,-2,57,4,'#b99c6d','rx="1"'))+
    line(76,56,103,56,'#a0a89d',5)+rect(99,69,27,12,'#514733','rx="2"')+
    group('fire','<path d="M102 68 Q96 57 105 49 Q103 57 110 59 Q111 49 116 46 Q124 61 120 68Z" fill="#dc8045"/>'+circle(111,66,5,'#e8b463'))+
    group('blast',line(79,56,99,56,'#b9d8cb',1.5,'stroke-dasharray="3 4"'))+
    rect(26,66,10,3,'#16251e')+group('transfer',line(27,65,35,62,'#b9d8cb',2))+
    group('inlet',line(15,78,23,78,'#b9d8cb',2)+ '<path d="M20 75 L23 78 L20 81" fill="none" stroke="#b9d8cb"/>')+
    text(34,59,'BUFFER','#e4cda2',7)+text(35,82,'PUMP','#e4cda2',7)+text(87,94,'AIR','#b9d8cb',7)+
    text(13,117,'INLET / TRANSFER VALVES', '#a9b7b0',6.5)+text(13,130,'TWO CHAMBERS / STEADY BLAST', '#c3b290',6.5);
  return scene('FORGE BELLOWS','Cutaway double-chamber bellows. An inlet fills the lower pump on expansion; compression transfers air to a weighted upper reservoir that feeds the forge continuously.',body,{
    upperLeather:t=>`transform:translate(0px,${fmt(bellowsPose(t).roof)}px) scaleY(${fmt(65-bellowsPose(t).roof)})`,
    roof:t=>`transform:${move(0,bellowsPose(t).roof)}`,
    lowerLeather:t=>`transform:translate(0px,69px) scaleY(${fmt(bellowsPose(t).floor-69)})`,
    floor:t=>`transform:${move(0,bellowsPose(t).floor)}`,
    transfer:t=>`opacity:${t>.5&&t<1?1:.2}`,
    inlet:t=>`opacity:${t<.5?1:0}`,
    blast:t=>`stroke-dashoffset:${fmt(-28*t)}`,
    fire:t=>`opacity:${fmt(.88+.06*Math.sin(4*tau*t))}`,
  });
}

function churn() {
  const body = text(12,34,'CUTAWAY','#c9b88e',7)+
    '<path d="M43 59 H97 L102 114 Q70 120 38 114Z" fill="#433020" stroke="#af8654" stroke-width="2"/>'+
    '<path d="M49 69 H91 L94 111 H46Z" fill="#baa578"/>'+line(49,69,91,69,'#ecdcac',1.5)+
    group('flowLeft','<path d="M53 84 Q47 89 53 97" fill="none" stroke="#f3e0aa" stroke-width="1.4"/><path d="M50 95 L53 98 L56 94" fill="none" stroke="#f3e0aa"/>')+
    group('flowRight','<path d="M87 84 Q93 89 87 97" fill="none" stroke="#f3e0aa" stroke-width="1.4"/><path d="M84 95 L87 98 L90 94" fill="none" stroke="#f3e0aa"/>')+
    group('dasher',rect(68,35,4,54,'#d8bd89','rx="1"')+rect(60,31,20,4,'#b8925e','rx="2"')+rect(55,87,30,5,'#e3c993','rx="1" stroke="#8f7345"')+[60,69,78].map(x=>rect(x,88,3,3,'#816b46')).join(''))+
    line(42,62,98,62,'#c1b28b',3)+line(40,105,47,105,'#b1b4a0',3)+line(93,105,100,105,'#b1b4a0',3)+
    text(13,130,'CREAM THROUGH PERFORATIONS', '#c3b290',6.5);
  return scene('BUTTER CHURN','A cutaway wooden churn reveals a perforated dasher reciprocating through cream. Flow reverses with the stroke; butter formation takes many strokes.',body,{
    dasher:t=>`transform:${move(0,10*smooth(t))}`,
    flowLeft:t=>`transform:translate(0px,${t<.5?181:0}px) scaleY(${t<.5?-1:1});opacity:${fmt(.3+.7*Math.abs(Math.sin(tau*t)))}`,
    flowRight:t=>`transform:translate(0px,${t<.5?181:0}px) scaleY(${t<.5?-1:1});opacity:${fmt(.3+.7*Math.abs(Math.sin(tau*t)))}`,
  });
}

// Four-bar solution: crank at O=(80,66), radius 9; pedal pivot A=(25,111),
// pedal length 52; pitman length 42. Circle intersection chooses upper branch.
export function grindstonePose(t) {
  const a=tau*t, pin=[80+9*Math.cos(a),66+9*Math.sin(a)], A=[25,111], r=52,L=42;
  const dx=pin[0]-A[0],dy=pin[1]-A[1],d=Math.hypot(dx,dy),s=(r*r-L*L+d*d)/(2*d),h=Math.sqrt(r*r-s*s);
  const foot=[A[0]+s*dx/d-h*dy/d,A[1]+s*dy/d+h*dx/d];
  return {pin,foot,pedalAngle:Math.atan2(foot[1]-111,foot[0]-25)*180/Math.PI,rodAngle:Math.atan2(pin[1]-foot[1],pin[0]-foot[0])*180/Math.PI};
}
function grindstone() {
  const body = line(14,118,125,118,'#6d6c57',3)+line(65,112,80,66,'#95744d',4)+line(101,112,80,66,'#95744d',4)+
    '<path d="M51 85 H109 L105 99 H55Z" fill="#24433b" stroke="#84977c"/>'+line(54,89,107,89,'#8cbeb2',1.5)+
    circle(80,66,25,'#726e59','stroke="#c4b38e" stroke-width="2"')+
    group('wheel',Array.from({length:10},(_,i)=>line(19*Math.cos(i*tau/10),19*Math.sin(i*tau/10),23*Math.cos(i*tau/10),23*Math.sin(i*tau/10),'#a69b80',1)).join('')+circle(9,0,2.8,'#e3d4b2'))+
    circle(80,66,3,'#d9d4b7')+rod('pedal',52,'#aa8959')+rod('pitman',42,'#d5c9a7')+
    circle(25,111,3,'#b3c2ad')+
    // The straight cutting edge is tangent at (65,46), exactly on the 25-unit rim.
    '<g transform="translate(65 46) rotate(-36.86989765)">'+
    '<path d="M-31 -10 H1 Q8 -10 12 -3 Q7 0 0 0 H-31Z" fill="#b9c9c7" stroke="#526b68" stroke-width=".8"/>'+
    '<path d="M-31 -2 H0 Q7 -2 12 -3 Q7 0 0 0 H-31Z" fill="#eef2df"/>'+
    rect(-52,-10,21,10,'#795032','rx="2" stroke="#bc9260" stroke-width=".8"')+
    rect(-33,-10,3,10,'#d2c4a0')+circle(-47,-5,1,'#dbc48d')+circle(-39,-5,1,'#dbc48d')+'</g>'+
    text(14,31,'WET STONE','#b0c3b5',7)+text(13,130,'TREADLE → CRANK → WHEEL', '#c3b290',6.5);
  return scene('TREADLE GRINDSTONE','A foot pedal drives a rigid pitman and rotating crank. The grindstone dips into a water trough while a wooden-handled knife holds its bright cutting bevel against the upper left rim.',body,{
    wheel:t=>`transform:${move(80,66,t*360)}`,
    pedal:t=>`transform:${move(25,111,grindstonePose(t).pedalAngle)}`,
    pitman:t=>`transform:${move(...grindstonePose(t).foot,grindstonePose(t).rodAngle)}`,
  });
}

const candidates={
  'concept-solenoid-engine':{make:solenoid,previousCycleSeconds:1.2,reason:'The plunger, rod and crank drift apart; the coil pulse does not explain a timed pull.',note:'Rigid 35-unit rod; magnetic pull is timed to retraction, with flywheel-driven return. Educational timing schematic.'},
  'concept-treadwheel-crane':{make:crane,previousCycleSeconds:8,reason:'The wheel turns one way while the hoist independently rises and falls; the rope does not reach the windlass.',note:'Shared shaft and continuous rope route; load displacement equals windlass radius × angle. Controlled reversal closes the loop.'},
  'concept-forge-bellows':{make:bellows,previousCycleSeconds:9.6,reason:'Disconnected leaves and constant packets obscure the double-chamber pump and reservoir mechanism.',note:'Idealized double-chamber cutaway with inlet/transfer valves and weighted reservoir. Continuous delivery is balanced by periodic pump transfer.',references:['https://www.si.edu/object/forge-bellows-ca-1850:nmah_845591','https://www.nps.gov/places/blacksmith-shop-interior.htm']},
  'concept-butter-churn':{make:churn,previousCycleSeconds:4,reason:'The dasher emerges below the barrel and floating grains hide the agitation mechanism.',note:'Cutaway preserves the wooden craft treatment; a perforated dasher stays within the cream and flow reverses with the stroke. Butter formation is not instantaneous.'},
  'concept-treadle-grindstone':{make:grindstone,previousCycleSeconds:2.4,reason:'The independent pedal and wheel periods disagree and the pitman stretches instead of connecting fixed-length joints.',note:'Solved four-bar geometry keeps both pitman endpoints attached. A tapered steel knife, bright bevel, ferrule and riveted wooden handle clarify the tool. Its cutting edge is tangent to the wet stone at the upper-left rim.'},
};

const sha=s=>crypto.createHash('sha256').update(s.replaceAll('\r\n','\n')).digest('hex');
const block=body=>`// BEGIN VISUAL STANDARD v2\n${body}\n// END VISUAL STANDARD v2\n`;
export function verifyGeometry() {
  for(let i=0;i<=1200;i++) {
    const t=i/1200,s=solenoidPose(t),g=grindstonePose(t),c=cranePose(t),b=bellowsPose(t);
    assert.ok(Math.abs(Math.hypot(s.pin[0]-s.slider[0],s.pin[1]-s.slider[1])-35)<1e-9);
    assert.ok(Math.abs(Math.hypot(g.pin[0]-g.foot[0],g.pin[1]-g.foot[1])-42)<1e-9);
    assert.ok(Math.abs(Math.hypot(g.foot[0]-25,g.foot[1]-111)-52)<1e-9);
    assert.ok(Math.abs(c.angle*Math.PI/180*4-c.lift)<1e-9);
    assert.ok(b.roof>=37&&b.roof<=48&&b.floor>=87&&b.floor<=103);
  }
  for(const fn of [solenoidPose,grindstonePose,cranePose,bellowsPose]) {
    const flatten=o=>Object.values(o).flat();const a=flatten(fn(0)),b=flatten(fn(1));a.forEach((v,i)=>assert.ok(Math.abs(v-b[i])<1e-9));
  }
  console.log('Wave 01 geometry: 1,201 phases pass rigid links, travel, inventories and loop closure.');
}

if (process.argv.includes('--write')) {
  const onlyTag = process.argv.find(arg=>arg.startsWith('--tag='))?.slice(6);
  assert.ok(!onlyTag || candidates[onlyTag], 'Unknown candidate tag');
  let manifest=fs.readFileSync(new URL('concepts/gallery/manifests/concepts.js',root),'utf8');
  for(const [tag,spec] of Object.entries(candidates)) {
    if (onlyTag && tag !== onlyTag) continue;
    const concept=CONCEPTS.find(c=>c.tag===tag), row=wave.concepts.find(c=>c.tag===tag);
    const url=new URL(concept.module,new URL('concepts/gallery/',root));
    let source=fs.readFileSync(url,'utf8').replaceAll('\r\n','\n');
    source=source.replace(/\/\/ BEGIN VISUAL STANDARD v2\n[\s\S]*?\/\/ END VISUAL STANDARD v2\n/g,'');
    row.previousSourceSha256=sha(source);
    const {css,svg}=spec.make();
    source=source.replace(/(class \w+ extends HTMLElement \{\n)/,`$1${block("  static get observedAttributes() { return ['version']; }\n  attributeChangedCallback() { if (this.isConnected) this.connectedCallback(); }")}`);
    source=source.replace('  connectedCallback() {\n',`  connectedCallback() {\n${block("    if (this.getAttribute('version') !== 'v1') {\n      this.shadowRoot.innerHTML = `<style>${visualStandardV2Styles}</style>${visualStandardV2Markup}`;\n      return;\n    }")}`);
    source=block(`// Candidate contributed by Codex / Astra / 6. v1 below is preserved verbatim.\n// Generated by scripts/gallery-standard-wave-01.js from coupled mechanism geometry.\nconst visualStandardV2Styles = \`\n${css}\n\`;\nconst visualStandardV2Markup = \`\n${svg.replaceAll('><','>\n<')}\n\`;`)+source;
    fs.writeFileSync(url,source);
    Object.assign(row,{classification:'refine',decisionReason:spec.reason,candidateVersion:'v2',candidateProvenance:{agent:'codex',model:'astra',version:'6'},candidateCycleSeconds:6,previousCycleSeconds:spec.previousCycleSeconds,implementationNote:spec.note,references:spec.references||[],deferredConcern:null,sourceHashAfterCompletion:sha(source)});
    if (!row.previousMetadata) {
      row.previousMetadata=Object.fromEntries(['updated','versioned','badge','badgeCls','default','versions','origin'].map(k=>[k,concept[k]]));
      const start=manifest.indexOf(`    tag: "${tag}",`),end=manifest.indexOf('\n  },',start);
      assert.ok(start>0&&end>start);
      let entry=manifest.slice(start,end);
      entry=entry.replace(/origin: .*\n/,`origin: ${JSON.stringify({contributions:[...concept.origin.contributions,{agent:'codex',model:'astra',version:'6'}]})},\n`)
        .replace(/updated: .*/,`updated: "2026-09-08T06:00:00Z",`)
        .replace('versioned: false','versioned: true').replace(/badge: .*/, 'badge: "Refined v2",')
        .replace(/badgeCls: .*/, 'badgeCls: "meta-status-refined",').replace('default: null','default: "v2"')
        .replace('versions: []',`versions: [\n      { v: "v1", badge: "Original v1", badgeCls: "meta-status-original" },\n      { v: "v2", badge: "Refined v2", badgeCls: "meta-status-refined", origin: { contributions: [{ agent: "codex", model: "astra", version: "6" }] } },\n    ]`);
      manifest=manifest.slice(0,start)+entry+manifest.slice(end);
    }
  }
  fs.writeFileSync(new URL('concepts/gallery/manifests/concepts.js',root),manifest);
  wave.status='implementation';fs.writeFileSync(ledgerURL,JSON.stringify(wave,null,2)+'\n');
}
verifyGeometry();
