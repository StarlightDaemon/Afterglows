// Local authoring source. Every v2 is an additive refinement of its intact v1.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { CONCEPTS } from '../concepts/gallery/manifest.js';
const root=new URL('../',import.meta.url);
const ledgerURL=new URL('.raiden/state/SNAPSHOTS/gallery-visual-standard/wave-02.json',root);
const fmt=n=>Number(n.toFixed(5));
const tau=2*Math.PI;
const track=(selector,name,fn,seconds=6)=>`${selector}{${fn(.25)};animation:${name} ${seconds}s linear infinite}\n@keyframes ${name}{${Array.from({length:121},(_,i)=>`${fmt(i*100/120)}%{${fn(i/120)}}`).join('\n')}}`;
const pulse=(selector,name,start,end)=>track(selector,name,t=>`opacity:${t>=start&&t<end?1:.25}`);
const specs=[];
function add(tag,reason,note,css,reduced,patch='',cycle=6){specs.push({tag:'concept-'+tag,reason,note,css,reduced,patch,cycle});}
add('wireframe-globe','Suppressing animation collapses all meridians onto the same outline; scanning glow obscures the grid.',
  'Retained the green wire sphere; separated stable meridians and softened the scanning band.',
  '.wg-scan{opacity:.35;filter:blur(.5px)}.wg-sphere{box-shadow:0 0 7px #0c04,inset 0 0 8px #0c02}',
  '.wg-mer.m1{transform:scaleX(1);opacity:.7}.wg-mer.m2{transform:scaleX(.72);opacity:.6}.wg-mer.m3{transform:scaleX(.35);opacity:.5}.wg-mer.m4{transform:scaleX(.08);opacity:.4}.wg-scan{display:none}', '',14.4);
add('rotary-phone','The nominal ten-hole dial has only eight holes, and pulse glow does not distinguish individual return pulses.',
  'Ten finger holes, a steady handset and five discrete return pulses make a single dialled digit legible.',
  '.rtp-cradle{animation:none;transform:none}.rtp-finger-wheel{animation:vs2-dial 6s linear infinite}.rtp-pulse-spark{animation:vs2-phone-pulse 6s steps(1,end) infinite;box-shadow:0 0 4px #8cffaa}@keyframes vs2-dial{0%,10%{transform:rotate(0)}30%,36%{transform:rotate(150deg)}66%,100%{transform:rotate(0)}}@keyframes vs2-phone-pulse{0%,36%,40%,46%,52%,58%,64%,100%{opacity:0}38%,44%,50%,56%,62%{opacity:1}}',
  '.rtp-finger-wheel{transform:rotate(0)}.rtp-pulse-spark{opacity:0}',
  `const wheel=root.querySelector('.rtp-finger-wheel');wheel.replaceChildren();for(let i=0;i<10;i++){const hole=document.createElement('div');hole.className='rtp-hole';const a=(-120+i*30)*Math.PI/180;hole.style.left=(20+17*Math.cos(a))+'px';hole.style.top=(20+17*Math.sin(a))+'px';wheel.append(hole);}root.querySelector('.rtp-label').textContent='DIAL 5 · RETURN PULSES';`);
add('wind-rose','A printed portolan rose hunts like a magnetic compass while a marker orbits independently of the rhumb lines.',
  'The printed rose stays fixed; a restrained course marker travels along a rhumb line.',
  '.wnr-rose-disc{animation:none;transform:none}.wnr-course-spark{animation:vs2-course 6s linear infinite;box-shadow:0 0 4px #ffca68}@keyframes vs2-course{0%{transform:translateX(-28px);opacity:0}15%,85%{opacity:.85}100%{transform:translateX(28px);opacity:0}}',
  '.wnr-course-spark{transform:translateX(20px);opacity:.8}');
add('nocturnal-dial','The star-clock arm continually scans through the fixed star group and the pulsing polar marker dominates the reading.',
  'The index approaches and dwells on a sighting direction; a quiet polar reference and larger dial preserve the brass instrument.',
  '.nt-alidade-arm{animation:vs2-nocturnal 6s ease-in-out infinite}.nt-polaris{animation:none;transform:none;filter:none}@keyframes vs2-nocturnal{0%,100%{transform:rotate(-20deg)}35%,75%{transform:rotate(42deg)}}',
  '.nt-alidade-arm{transform:rotate(42deg)}.nt-polaris{transform:none}', '',6);
add('kamal-navigator','The card slides away from the fixed cord and its moving sight rays lose the intended horizon/star alignment.',
  'Hold the measured card and taut cord together; moving light along the two sight lines explains a held observation.',
  '.km-card-plate{animation:none;transform:none}.km-cord-line{animation:none;stroke:#d5dbe0}',
  '.km-card-plate{transform:none}.km-polaris-beam,.km-horizon-beam{stroke-dashoffset:0}', '',3);
add('traverse-board','A bright moving peg glides between holes and doubles in size, obscuring rather than recording a bearing.',
  'The recording peg now dwells at discrete chart holes, with restrained fixed pegs and an intact static record.',
  '.tb-pegs,.tb-pegs circle{animation:none;opacity:.8;filter:none;transform:none}.tb-peg-runner{animation:vs2-peg 6s steps(1,end) infinite;filter:none}@keyframes vs2-peg{0%,100%{transform:translate(0,-14px)}25%{transform:translate(8px,-8px)}50%{transform:translate(12px,0)}75%{transform:translate(0,-8px)}}',
  '.tb-peg-runner{transform:translate(8px,-8px)}.tb-pegs{transform:none;opacity:.8}');
add('chip-log','The reel rotates around an offset point and the bobbing chip detaches from the line; reduced motion drops its essential translation.',
  'The reel turns on its own axle, a fixed chip meets its bridle, and the knotted line advances at the reel rim speed.',
  `.cl-reel-spool{transform-origin:16px 16px;animation-duration:6s}.cl-drogue-bob{animation:none;transform:translate(54px,46px)}.cl-line-flow{stroke-dasharray:${fmt(5*Math.PI)} ${fmt(5*Math.PI)};animation:vs2-log-line 6s linear infinite}@keyframes vs2-log-line{from{stroke-dashoffset:0}to{stroke-dashoffset:${fmt(-20*Math.PI)}}}`,
  '.cl-reel-spool{transform:rotate(25deg)}.cl-drogue-bob{transform:translate(54px,46px)}',
  `const rope=root.querySelector('.cl-line-flow');rope.setAttribute('d','M24 24 Q38 32 48 46');const base=rope.cloneNode();base.removeAttribute('class');base.setAttribute('stroke','#778e99');base.setAttribute('stroke-width','.7');rope.before(base);`);
add('davis-backstaff','Both vanes move independently of the fixed shadow and sight lines, disconnecting the observation.',
  'A held observation keeps both vanes attached to their rays; directional light paths retain purposeful motion.',
  '.db-shadow-vane,.db-sight-vane{animation:none;transform:none}.db-sun{animation:none;transform:none;filter:none}',
  '.db-shadow-vane,.db-sight-vane,.db-sun{transform:none}', '',1.5);
add('pelorus-dial','The sight ray reaches the SVG boundary and clips during the bearing sweep; the counter-rotating ring distracts from the sighting.',
  'Inset the sight ray, steady the support ring, and give the bearing arm time to settle at each reading.',
  '.pr-gimbal-ring{animation:none;transform:none}.pr-sighting-vane{animation:vs2-bearing 6s ease-in-out infinite}@keyframes vs2-bearing{0%,100%{transform:rotate(-35deg)}35%,65%{transform:rotate(40deg)}}',
  '.pr-sighting-vane{transform:rotate(40deg)}.pr-gimbal-ring{transform:none}',
  `root.querySelector('.pr-sight-ray').setAttribute('y2','4');`);
add('cross-staff','CSS translation overrides the SVG placement of the sliding crosspiece, moving it outside the instrument and tile.',
  'Restore the crosspiece at the sighting position; keep the star and horizon lines attached and animate only their directional traces.',
  '.cs-sliding-vane{animation:none;transform:translate(38px,36.5px)}',
  '.cs-sliding-vane{transform:translate(38px,36.5px)}', '',1.5);
add('hadley-octant','The index mirror moves away from the fixed reflected ray path, so the optical explanation breaks during the sweep.',
  'Keep the index at the illustrated sighting and let the ray sequence carry the explanation; enlarge the ebony-and-brass frame.',
  '.ho-index-arm{animation:none;transform:none}',
  '.ho-index-arm{transform:none}.ho-light-beam{stroke-dashoffset:0}', '',1.2);
add('lead-sounding','The entire line shifts off the top of the drawing and the silt effect runs while the lead is still above the seabed.',
  'A fixed line origin pays out to the moving weight; seabed contact precedes the short silt cloud.',
  track('.ls-lead-weight','vs2-lead',t=>`transform:translateY(${fmt(-8+12*(1-Math.cos(tau*t))/2)}px)`)+
  track('.ls-fathom-marks','vs2-lead-line',t=>`transform:scaleY(${fmt((34-8+12*(1-Math.cos(tau*t))/2)/34)})`)+
  '.ls-fathom-marks{transform-origin:38px 4px}.ls-sediment-cloud{animation:vs2-silt 6s linear infinite}@keyframes vs2-silt{0%,43%,75%,100%{opacity:0;transform:scale(.5)}53%{opacity:.45;transform:scale(1)}65%{opacity:0;transform:scale(1.2)}}',
  '.ls-lead-weight{transform:translateY(4px)}.ls-fathom-marks{transform:scaleY(1.117647)}.ls-sediment-cloud{opacity:.2;transform:scale(1)}',
  `const line=root.querySelector('.ls-fathom-marks'),weight=root.querySelector('.ls-lead-weight');weight.before(line);`);
add('station-pointer','The two outer arms sweep independently of stationary landmarks, and reduced motion stacks all three arms together.',
  'The outer arms settle on the two plotted landmarks; the stable pose retains all three measured directions.',
  '.sp-left-arm{animation:vs2-station-left 6s ease-in-out infinite}.sp-right-arm{animation:vs2-station-right 6s ease-in-out infinite}.sp-fix-point{animation:none;transform:none;filter:none}@keyframes vs2-station-left{0%,100%{transform:rotate(-15deg)}35%,80%{transform:rotate(-40.236deg)}}@keyframes vs2-station-right{0%,100%{transform:rotate(20deg)}35%,80%{transform:rotate(49.764deg)}}',
  '.sp-left-arm{transform:rotate(-40.236deg)}.sp-right-arm{transform:rotate(49.764deg)}.sp-fix-point{transform:none}');
add('chappe-semaphore','Continuously sweeping arms, a floating packet and beacon obscure the semaphore character positions.',
  'Three articulated arms move together between held code poses; remove unrelated packet and beacon effects.',
  '.cs-signal-packet,.cs-signal-beacon{display:none}.cs-regulator-beam{animation:vs2-chappe-main 6s ease-in-out infinite}.cs-wing-left{animation:vs2-chappe-left 6s ease-in-out infinite}.cs-wing-right{animation:vs2-chappe-right 6s ease-in-out infinite;animation-delay:0s}@keyframes vs2-chappe-main{0%,28%,100%{transform:rotate(0)}40%,80%{transform:rotate(45deg)}}@keyframes vs2-chappe-left{0%,28%,100%{transform:rotate(90deg)}40%,80%{transform:rotate(0)}}@keyframes vs2-chappe-right{0%,28%,100%{transform:rotate(-45deg)}40%,80%{transform:rotate(90deg)}}',
  '.cs-regulator-beam{transform:rotate(0)}.cs-wing-left{transform:rotate(90deg)}.cs-wing-right{transform:rotate(-45deg)}');
add('baudot-distributor','Sector glow is unrelated to the brush position and the drawn dividers do not show five contacts per channel.',
  'Twenty contact divisions form four five-contact groups; the active sector follows the sweeping brush.',
  '.bd-wiper-arm{animation-duration:6s}'+[1,2,3,4].map((n,i)=>pulse('.bd-s'+n,'vs2-sector'+n,i/4,(i+1)/4)).join('\n'),
  '.bd-wiper-arm{transform:rotate(45deg)}.bd-s1{opacity:1}.bd-s2,.bd-s3,.bd-s4{opacity:.25}',
  `const dividers=root.querySelector('svg > g[stroke="#03080c"]');dividers.replaceChildren();for(let i=0;i<20;i++){const a=i*Math.PI/10-Math.PI/2;const line=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [k,v] of Object.entries({x1:38+25*Math.cos(a),y1:36+25*Math.sin(a),x2:38+31*Math.cos(a),y2:36+31*Math.sin(a)}))line.setAttribute(k,v);dividers.append(line);}`);
add('wheatstone-abc','Pointer steps land between the eight illustrated characters, while the same key flashes independently.',
  'The dial advances in eight exact character positions and the active key matches the pointer.',
  '.wa-pointer-needle{animation:vs2-abc 6s steps(1,end) infinite}.wa-key-button{animation:none}@keyframes vs2-abc{0%{transform:rotate(0)}12.5%{transform:rotate(45deg)}25%{transform:rotate(90deg)}37.5%{transform:rotate(135deg)}50%{transform:rotate(180deg)}62.5%{transform:rotate(225deg)}75%{transform:rotate(270deg)}87.5%{transform:rotate(315deg)}100%{transform:rotate(360deg)}}'+Array.from({length:8},(_,i)=>track('.vs2-key-'+i,'vs2-key'+i,t=>`fill:${Math.floor((t%1)*8)===i?'#ff6a32':'#cfd8dc'}`)).join('\n'),
  '.wa-pointer-needle{transform:rotate(90deg)}[class*=vs2-key-]{fill:#cfd8dc}.vs2-key-2{fill:#ff6a32}',
  `root.querySelectorAll('svg > g[fill="#d7ccc8"] > circle').forEach((e,i)=>e.classList.add('vs2-key-'+i));`);
add('heliograph-flash','The key, mirror and beam run at unrelated periods and the beam floats away from the mirror.',
  'Hold the aimed mirror steady; key depression and a restrained reflected beam now share a dot-and-dash timing.',
  '.hg-mirror-gimbal,.hg-mirror-glint{animation:none;transform:none;filter:none}.hg-signal-packet{display:none}.hg-flash-beam{animation:vs2-heliobeam 6s steps(1,end) infinite;transform:none}.hg-key-lever{animation:vs2-heliokey 6s steps(1,end) infinite}@keyframes vs2-heliobeam{0%,20%,70%,100%{opacity:.08}12%,45%{opacity:.8}}@keyframes vs2-heliokey{0%,20%,70%,100%{transform:rotate(0)}12%,45%{transform:rotate(8deg)}}',
  '.hg-key-lever{transform:rotate(8deg)}.hg-flash-beam{opacity:.5;transform:none}',
  `root.querySelector('.hg-flash-beam').setAttribute('points','30,24 70,9 70,39');`);
add('telegraph-sounder','The arm moves away from the electromagnets on the labelled pull, and acoustic rings run independently of contact.',
  'The armature moves down toward the coils; coil glow and click rings follow the dot-and-dash contact sequence.',
  '.ts-lever-arm{animation:vs2-sounder 6s steps(1,end) infinite}.ts-sound-ring{animation:vs2-click 6s linear infinite;transform-origin:0 0;filter:none}@keyframes vs2-sounder{0%,20%,70%,100%{transform:rotate(-10deg)}12%,45%{transform:rotate(11deg)}}@keyframes vs2-click{0%,11%,30%,44%,80%,100%{opacity:0;transform:scale(.3)}12%,20%,45%,70%{opacity:.7;transform:scale(.5)}18%,28%,51%,78%{opacity:0;transform:scale(1.5)}}',
  '.ts-lever-arm{transform:rotate(11deg)}.ts-sound-ring{opacity:0}',
  `root.querySelectorAll('svg > rect[fill="#b71c1c"]').forEach(e=>e.classList.add('vs2-coil'));`);
add('siphon-recorder','The continuous ink stroke does not advance, the siphon tip is hidden under the paper, and coil/tip motions are unrelated.',
  'A visible capillary tip writes a travelling trace; coil and ink displacement share the same phase.',
  track('.sr-siphon-tube path','vs2-siphon',t=>`d:path("M28 18 L38 18 L38 ${fmt(53+4*Math.sin(tau*t))}")`)+
  track('.sr-siphon-tube circle','vs2-inktip',t=>`transform:translateY(${fmt(7+4*Math.sin(tau*t))}px)`)+
  track('.sr-moving-coil','vs2-coil',t=>`transform:rotate(${fmt(5*Math.sin(tau*t))}deg)`)+
  '.sr-siphon-tube{animation:none;transform:none}.sr-wavy-ink-line path{animation:vs2-tape 6s linear infinite;stroke-dasharray:none;stroke:#008a9e}@keyframes vs2-tape{from{transform:translateX(0)}to{transform:translateX(-24px)}}',
  '.sr-siphon-tube{transform:none}.sr-siphon-tube path{d:path("M28 18 L38 18 L38 57")}.sr-siphon-tube circle{transform:translateY(11px)}.sr-moving-coil{transform:rotate(5deg)}.sr-wavy-ink-line path{transform:translateX(-6px)}',
  `const svg=root.querySelector('svg'),trace=root.querySelector('.sr-wavy-ink-line'),path=trace.querySelector('path');let d='';for(let x=-24;x<=80;x++){d+=(x===-24?'M':'L')+x+' '+(53+4*Math.sin(2*Math.PI*(x-38)/24));}path.setAttribute('d',d);const clip=document.createElementNS('http://www.w3.org/2000/svg','clipPath');clip.id='vs2-ink-clip';clip.innerHTML='<rect x="6" y="44" width="32" height="18"/>';svg.prepend(clip);trace.setAttribute('clip-path','url(#vs2-ink-clip)');svg.append(root.querySelector('.sr-siphon-tube'));`);
add('rotary-spark-gap','Stationary and rotating electrodes overlap, and fast flicker occurs without electrode alignment.',
  'Separate the electrodes with visible gaps; each of eight alignments per revolution triggers one short arc.',
  '.sg-rotary-wheel{animation-duration:6s}.sg-spark-arc{stroke-width:1.6;animation:vs2-gap 0.75s linear infinite;filter:none}@keyframes vs2-gap{0%,4%,100%{opacity:1;stroke:#e8ffff}12%,90%{opacity:0}}',
  '.sg-rotary-wheel{transform:rotate(0)}.sg-spark-arc{opacity:.6;stroke:#a4e9ef}',
  `const posts=root.querySelectorAll('.sg-electrode-post');posts[0].setAttribute('d','M34 4H42L40 12H36Z');posts[1].setAttribute('d','M36 60H40L42 68H34Z');const fixed=root.querySelectorAll('svg > circle[fill="#ffd700"]');fixed[0].setAttribute('cy','12');fixed[1].setAttribute('cy','60');const arcs=root.querySelectorAll('.sg-spark-arc');arcs[0].setAttribute('y1','13');arcs[0].setAttribute('y2','15');arcs[1].setAttribute('y1','57');arcs[1].setAttribute('y2','59');`);

specs.find(s=>s.tag==='concept-telegraph-sounder').css += '.vs2-coil{animation:vs2-coil-glow 6s steps(1,end) infinite}@keyframes vs2-coil-glow{0%,20%,70%,100%{fill:#852b28}12%,45%{fill:#e36b38}}';
specs.find(s=>s.tag==='concept-siphon-recorder').css += '.sr-siphon-tube path{stroke:#527e87;stroke-width:1.2}';
export const candidateTags=specs.map(s=>s.tag);
const deferred={
  'concept-sextant':'Fixed numerical altitude does not follow the moving arm; defer a solved double-reflection optical reconstruction.',
  'concept-loran-navigation':'The vessel does not follow a computed time-difference intersection; defer exact station/hyperbola geometry.',
  'concept-viking-sunstone':'The two images do not model polarization or intensity matching; defer a physically explained optical model and historical uncertainty.',
  'concept-marconi-detector':'The coil response is unrelated to moving-wire magnetic history; defer a legible hysteresis/demodulation explanation.',
  'concept-hughes-telegraph':'Typewheel, platen and paper advance need a shared character-selection model; defer printing synchronization.',
  'concept-strowger-switch':'The wiper leaves the contact-bank geometry during rotation; defer a projected bank and exact two-motion selection model.',
};
const sha=s=>crypto.createHash('sha256').update(s.replaceAll('\r\n','\n')).digest('hex');
const block=s=>`// BEGIN VISUAL STANDARD v2\n${s.split('\n').map(line=>line.trimEnd()).join('\n')}\n// END VISUAL STANDARD v2\n`;
if(process.argv.includes('--write')){
  const group=Number(process.argv.find(a=>a.startsWith('--group='))?.split('=')[1]);
  assert.ok(group>=1&&group<=4,'Choose internal group 1–4');
  const wave=JSON.parse(fs.readFileSync(ledgerURL,'utf8'));
  let manifest=fs.readFileSync(new URL('concepts/gallery/manifests/concepts.js',root),'utf8');
  for(const [i,row] of wave.concepts.entries()){
    row.visualEvidencePaths ||= [];
    const assessment=`wave-02-evidence/assessment-${Math.floor(i/5)+1}.jpg`;
    if(!row.visualEvidencePaths.includes(assessment))row.visualEvidencePaths.push(assessment);
    if(deferred[row.tag])Object.assign(row,{classification:'defer',decisionReason:deferred[row.tag],deferredConcern:deferred[row.tag],verificationResult:'source and original visual assessment; not accepted'});
  }
  for(const spec of specs.slice((group-1)*5,group*5)){
    const concept=CONCEPTS.find(c=>c.tag===spec.tag),row=wave.concepts.find(c=>c.tag===spec.tag),url=new URL(concept.module,new URL('concepts/gallery/',root));
    let source=fs.readFileSync(url,'utf8').replaceAll('\r\n','\n').replace(/\/\/ BEGIN VISUAL STANDARD v2\n[\s\S]*?\/\/ END VISUAL STANDARD v2\n/g,'');
    row.previousSourceSha256=sha(source);
    const frame=spec.tag==='concept-wireframe-globe'?'':'.vs2-frame{width:134px;height:128px;box-sizing:border-box}.vs2-frame [class$="-stage"]{width:110px;height:102px}.vs2-frame svg[class$="-svg"]{width:98px;height:94px}.vs2-frame [class$="-label"]{left:4px;right:4px;bottom:4px;font-size:7px;line-height:1.15;text-align:center;letter-spacing:.2px}';
    const css=frame+'\n'+spec.css+'\n@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}'+spec.reduced+'}';
    const helper=`// Refined v2 by Codex / Astra / 6; historical markup/styles below remain intact.\nconst visualStandardV2Styles=${JSON.stringify(css)};\nfunction applyVisualStandardV2(root){\n const style=document.createElement('style');style.textContent=visualStandardV2Styles;root.append(style);\n const frame=root.querySelector('div');frame.classList.add('vs2-frame');frame.setAttribute('role','img');frame.setAttribute('aria-label',${JSON.stringify(concept.label+'. '+spec.note)});\n ${spec.patch}\n}`;
    source=block(helper)+source;
    source=source.replace(/(class \w+ extends HTMLElement \{\n)/,`$1${block("  static get observedAttributes(){return ['version'];}\n  attributeChangedCallback(){if(this.isConnected)this.connectedCallback();}")}`);
    const tail=source.lastIndexOf('\n  }\n}');assert.ok(tail>0);
    source=source.slice(0,tail+1)+block("    if(this.getAttribute('version')!=='v1')applyVisualStandardV2(this.shadowRoot);")+source.slice(tail+1);
    fs.writeFileSync(url,source);
    Object.assign(row,{classification:'refine',decisionReason:spec.reason,candidateVersion:'v2',candidateCycleSeconds:spec.cycle,previousCycleSeconds:spec.cycle,implementationNote:spec.note,candidateProvenance:{agent:'codex',model:'astra',version:'6'},sourceHashAfterCompletion:sha(source),verificationResult:'pending visual validation',deferredConcern:null});
    if(!row.previousMetadata){
      row.previousMetadata=Object.fromEntries(['updated','versioned','badge','badgeCls','default','versions','origin'].map(k=>[k,concept[k]]));
      const start=manifest.indexOf(`    tag: "${spec.tag}",`),end=manifest.indexOf('\n  },',start);assert.ok(start>0&&end>start);
      let entry=manifest.slice(start,end).replace(/origin: .*\n/,`origin: ${JSON.stringify({contributions:[...concept.origin.contributions,{agent:'codex',model:'astra',version:'6'}]})},\n`).replace(/updated: .*/,`updated: "2026-09-08T18:00:00Z",`).replace('versioned: false','versioned: true').replace(/badge: .*/,'badge: "Refined v2",').replace(/badgeCls: .*/,'badgeCls: "meta-status-refined",').replace('default: null','default: "v2"').replace('versions: []',`versions: [\n      { v: "v1", badge: "Original v1", badgeCls: "meta-status-original" },\n      { v: "v2", badge: "Refined v2", badgeCls: "meta-status-refined", origin: { contributions: [{ agent: "codex", model: "astra", version: "6" }] } },\n    ]`);
      manifest=manifest.slice(0,start)+entry+manifest.slice(end);
    }
  }
  fs.writeFileSync(new URL('concepts/gallery/manifests/concepts.js',root),manifest);
  wave.status='implementation';fs.writeFileSync(ledgerURL,JSON.stringify(wave,null,2)+'\n');
  console.log(`Wave 02 subgroup ${group}: five additive refinements generated.`);
}
