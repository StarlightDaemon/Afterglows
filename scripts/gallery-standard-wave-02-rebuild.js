// Five scene rebuilds after operator feedback. No production dependencies.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {CONCEPTS} from '../concepts/gallery/manifest.js';
const root=new URL('../',import.meta.url);
const base=new URL('.raiden/state/SNAPSHOTS/gallery-visual-standard/',root);
const n=x=>Number(x.toFixed(3));
const clamp=x=>Math.max(0,Math.min(1,x));
const ease=x=>{x=clamp(x);return x*x*(3-2*x);};
const lerp=(a,b,t)=>a+(b-a)*t;
const tau=Math.PI*2;
const circle=(x,y,r,fill,extra='')=>`<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${fill}" ${extra}/>`;
const line=(x,y,X,Y,color,width=1,extra='')=>`<path d="M${x} ${y}L${X} ${Y}" fill="none" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const path=(d,fill,extra='')=>`<path d="${d}" fill="${fill}" ${extra}/>`;
const rect=(x,y,w,h,fill,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;
const text=(x,y,s,color='#b8c9c7',size=6,extra='')=>`<text x="${x}" y="${y}" fill="${color}" font-size="${size}" ${extra}>${s}</text>`;
const group=(name,body)=>`<g class="rb-${name}">${body}</g>`;
const move=(x,y,a=0)=>`transform:translate(${n(x)}px,${n(y)}px) rotate(${n(a)}deg)`;
const dcss=d=>`d:path('${d}')`;
function scene(title,description,body,tracks,{seconds=9,pose=.55,background='#0b171b',border='#37525b',extra=''}={}){
  let css=`:host{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.vs2-frame{width:100%;height:100%;max-width:140px;max-height:140px;overflow:hidden}.vs2-frame text{font-family:ui-monospace,monospace}.vs2-frame *{transform-box:view-box;transform-origin:0 0}.vs2-frame path{stroke-linecap:round;stroke-linejoin:round}${extra}\n`;
  let reduced='';
  for(const [name,fn] of Object.entries(tracks)){
    css+=`.rb-${name}{${fn(pose)};animation:rb-${name} ${seconds}s linear infinite}@keyframes rb-${name}{${Array.from({length:61},(_,i)=>`${n(i*100/60)}%{${fn(i/60)}}`).join('')}}\n`;
    reduced+=`.rb-${name}{${fn(pose)}}`;
  }
  css+=`@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}${reduced}}`;
  return {css,svg:`<svg xmlns="http://www.w3.org/2000/svg" class="vs2-frame" viewBox="0 0 140 140" role="img" aria-label="${description}"><title>${title}</title>${rect(3,3,134,134,background,`rx="8" stroke="${border}"`)}${text(12,17,title,'#e4d6b3',6.8)}${body}</svg>`,seconds};
}

// Orthographic sphere; a screen-plane tilt preserves projected radius.
export function globePoint(lat,lon){const a=-23.4*Math.PI/180,x=43*Math.cos(lat)*Math.sin(lon),y=-43*Math.sin(lat);return [70+x*Math.cos(a)-y*Math.sin(a),70+x*Math.sin(a)+y*Math.cos(a),Math.cos(lat)*Math.cos(lon)];}
function globe(){
  const tracks={},parts=[];
  const curve=(latitude,longitude)=>Array.from({length:25},(_,i)=>globePoint(latitude(i),longitude(i))).map((p,i)=>`${i?'L':'M'}${n(p[0])} ${n(p[1])}`).join(' ');
  for(const lat of [-60,-30,0,30,60]){
    for(const rear of [true,false])parts.push(path(curve(()=>lat*Math.PI/180,i=>(rear?Math.PI/2:-Math.PI/2)+Math.PI*i/24),'none',`stroke="${lat===0?'#7cffc3':'#42b984'}" stroke-width="${lat===0?1.2:.65}" opacity="${rear?.16:.7}"`));
  }
  for(let j=0;j<12;j++){
    const name='meridian'+j,fn=t=>{const lon=t*tau+j*tau/12;return dcss(curve(i=>-Math.PI/2+i*Math.PI/24,()=>lon))+`;opacity:${Math.cos(lon)>=0?(j===0?1:.65):.12}`;};
    tracks[name]=fn;parts.push(path('M70 27L70 113','none',`class="rb-${name}" stroke="${j===0?'#f6cc74':'#53f4a4'}" stroke-width="${j===0?1.7:.85}"`));
  }
  const poleN=globePoint(Math.PI/2,0),poleS=globePoint(-Math.PI/2,0);
  tracks.marker=t=>{const p=globePoint(0,t*tau);return move(p[0],p[1])+`;opacity:${p[2]>=0?1:.16}`;};
  const body=`<defs><radialGradient id="orb"><stop stop-color="#153c2e"/><stop offset=".75" stop-color="#09251c"/><stop offset="1" stop-color="#03120e"/></radialGradient></defs>${circle(70,70,48,'none','stroke="#24523c" stroke-width=".5"')}${circle(70,70,43,'url(#orb)','stroke="#54ac83" stroke-width="1"')}${parts.join('')}${line(n(poleN[0]-4),n(poleN[1]-9),n(poleS[0]+4),n(poleS[1]+9),'#a6d9b4',.6,'stroke-dasharray="2 3" opacity=".45"')}${circle(...poleN.slice(0,2),2,'#dbffe4')}${circle(...poleS.slice(0,2),2,'#79b893')}${group('marker',circle(0,0,2.5,'#f7d17b')+circle(0,0,5,'none','stroke="#f7d17b" stroke-width=".7"'))}${text(70,128,'AXIAL ROTATION','#95c5a9',6,'text-anchor="middle"')}`;
  return scene('WIREFRAME GLOBE','A tilted wireframe sphere rotates in depth. A gold meridian and equatorial marker travel across the near side and dim on the far side.',body,tracks,{seconds:12,background:'#071510',border:'#315d42',pose:.14});
}
export function coursePose(t){const u=ease((t-.18)/.57);return {x:26+80*u,y:100-55*u,progress:u};}
function windRose(){
  let rose='';for(let i=0;i<8;i++){const a=i*45*Math.PI/180,r=i%2?17:25,cx=44,cy=53;const tip=[cx+r*Math.sin(a),cy-r*Math.cos(a)],left=[cx+4*Math.sin(a-Math.PI/2),cy-4*Math.cos(a-Math.PI/2)],right=[cx+4*Math.sin(a+Math.PI/2),cy-4*Math.cos(a+Math.PI/2)];rose+=path(`M${cx} ${cy}L${n(left[0])} ${n(left[1])}L${n(tip[0])} ${n(tip[1])}Z`,i%2?'#7c8465':'#236d6a');rose+=path(`M${cx} ${cy}L${n(right[0])} ${n(right[1])}L${n(tip[0])} ${n(tip[1])}Z`,'#e9cb8d');}
  let rhumbs='';for(let i=0;i<16;i++){const a=i*tau/16;rhumbs+=line(44,53,n(44+90*Math.sin(a)),n(53-90*Math.cos(a)),'#8e7955',.5,'opacity=".27"');}
  const tracks={ship:t=>{const p=coursePose(t);return move(p.x,p.y,55.49)+`;opacity:${t<.9?1:1-ease((t-.9)/.09)}`;},route:t=>`stroke-dashoffset:${n(97.083*(1-coursePose(t).progress))}`,plot:t=>`opacity:${t<.18?1:0}`,sail:t=>`opacity:${t>=.18&&t<.76?1:0}`,arrival:t=>`opacity:${t>=.76&&t<.94?1:0}`,halo:t=>`opacity:${t>=.76&&t<.94?.7:0}`};
  const body=`<defs><clipPath id="chart"><rect x="9" y="23" width="122" height="88" rx="4"/></clipPath></defs>${rect(9,23,122,88,'#c6b58a','rx="4"') }<g clip-path="url(#chart)">${rhumbs}${path('M120 24L111 29L119 37L110 43L115 51L130 55L136 32Z','#728568','stroke="#647359" stroke-width="1"')}${path('M9 83L18 87L15 95L22 109L8 114Z','#839572','stroke="#647359"')}${circle(44,53,28,'none','stroke="#8b764d" stroke-width=".8"')}${rose}${circle(44,53,3,'#c29a52')}${text(44,26,'N','#493e2d',6,'text-anchor="middle"')}${text(74,55,'E','#493e2d',5)}${text(44,85,'S','#493e2d',5,'text-anchor="middle"')}${text(12,55,'W','#493e2d',5)}${line(26,100,106,45,'#42534b',.8,'stroke-dasharray="2 3"')}${line(26,100,106,45,'#225e65',2,'class="rb-route" stroke-dasharray="97.083"')}${circle(26,100,3,'#e9d4a3','stroke="#725b36"')}${circle(106,45,3,'#e9d4a3','stroke="#725b36"')}${group('halo',circle(106,45,7,'none','stroke="#27685c" stroke-width="1.5"'))}${group('ship',path('M0 -9Q7 -3 4 6L0 9L-4 6Q-7 -3 0 -9','#654232','stroke="#f9eccb" stroke-width="1"')+line(0,-5,0,5,'#e7c98c',.7)+path('M0 -4L4 2H0Z','#fff0c8'))}</g>${group('plot',text(70,126,'PLOT A COURSE','#d7c49c',6,'text-anchor="middle"'))}${group('sail',text(70,126,'FOLLOW THE BEARING','#d7c49c',6,'text-anchor="middle"'))}${group('arrival',text(70,126,'MAKE LANDFALL','#d7c49c',6,'text-anchor="middle"'))}`;
  return scene('PORTOLAN WIND ROSE','A fixed compass rose gives direction on a parchment chart. A ship follows the plotted northeast course from an offshore point to a coastal destination.',body,tracks,{background:'#201e17',border:'#776542',pose:.55});
}
export function kamalPose(t){let x=t<.25?lerp(53,87,ease(t/.25)):t<.48?lerp(87,73,ease((t-.25)/.23)):t<.82?73:lerp(73,53,ease((t-.82)/.18));return {x,top:56,bottom:86,targetY:86-(x-20)*30/53};}
function kamal(){
  const tracks={card:t=>move(kamalPose(t).x,0),cord:t=>dcss(`M20 89L${n(kamalPose(t).x)} 71`),gap:t=>{const p=kamalPose(t);return dcss(`M${n(p.x+6)} 56L${n(p.x+6)} ${n(p.targetY)}`)+`;opacity:${t>=.48&&t<=.82?0:.85}`;},aligned:t=>`opacity:${t>=.48&&t<=.82?1:0}`,adjust:t=>`opacity:${t<.48||t>.82?1:0}`};
  for(let i=1;i<=3;i++)tracks['knot'+i]=t=>move(lerp(20,kamalPose(t).x,i/4),lerp(89,71,i/4));
  const body=`<defs><linearGradient id="night" x2="0" y2="1"><stop stop-color="#111f39"/><stop offset="1" stop-color="#29495a"/></linearGradient><linearGradient id="wood"><stop stop-color="#a77b47"/><stop offset=".5" stop-color="#d2aa6d"/><stop offset="1" stop-color="#75512f"/></linearGradient></defs>${rect(9,23,122,86,'url(#night)','rx="4"')}${circle(41,32,.7,'#7288a0')}${circle(91,39,.7,'#7288a0')}${circle(59,27,.7,'#7288a0')}${rect(9,86,122,23,'#123747')}${line(10,86,130,86,'#8cbbbf',1)}${text(99,99,'HORIZON','#9bc2c5',4.8)}${line(20,86,121,28.83,'#c2ad64',1,'stroke-dasharray="3 2"')}${line(20,86,120,86,'#ebd79c',.8)}${path('M44 86A24 24 0 0 0 40.9 74.2','none','stroke="#ceac6e" stroke-width=".8"')}${circle(121,28.83,2,'#fff4cc')}${path('M121 23L121 35M116 29L126 29','none','stroke="#f6e6ac" stroke-width=".8"')}<g transform="translate(-2 7)">${path('M12 81Q12 71 18 72Q24 72 25 78L29 81L25 83L25 94H13Z','#6e878f','stroke="#b1c4c7" stroke-width=".7"')}${circle(22,79,1,'#f3edc7')}</g>${path('M20 89L73 71','none','class="rb-cord" stroke="#d5b887" stroke-width="1.1"')}${[1,2,3].map(i=>group('knot'+i,circle(0,0,1.35,'#f3d38e'))).join('')}${group('card',path('M4 56L7 53V83L4 86Z','#775734')+rect(-4,56,8,30,'url(#wood)','stroke="#efcf98" stroke-width=".8"')+line(-3,56,6,56,'#fff1c9',1.2)+line(-3,86,6,86,'#fff1c9',1.2)+circle(0,71,1.3,'#513c27')+path('M-2 98L-4 89Q-6 84-4 82L0 88L4 84Q8 85 6 91L7 98','#bb9984','stroke="#e0b99a" stroke-width=".7"')+rect(-2,97,9,9,'#425f74','rx="1"'))}${path('M79 56L79 56','none','class="rb-gap" stroke="#ef9c6a" stroke-width="1.5"')}${group('aligned',circle(73,56,4,'none','stroke="#88e0b5" stroke-width="1.4"')+circle(73,86,4,'none','stroke="#88e0b5" stroke-width="1.4"')+text(70,126,'STAR + HORIZON ALIGNED','#91d7b8',5.8,'text-anchor="middle"'))}${group('adjust',text(70,126,'ADJUST THE KNOTTED CORD','#d5c19c',5.8,'text-anchor="middle"'))}`;
  return scene('KAMAL NAVIGATOR','Side view: adjust the distance of a wooden card on a knotted cord until its upper edge meets the star sightline and its lower edge meets the horizon. The aligned span measures star altitude.',body,tracks,{pose:.6});
}
export function logPose(t){const u=clamp((t-.12)/.6);return {travel:42*u,reelAngle:42*u/7*180/Math.PI,progress:u,fade:t<.86?1:1-ease((t-.86)/.1)};}
function chipLog(){
  const tracks={boat:t=>move(50+logPose(t).travel,0),reel:t=>move(0,61,-logPose(t).reelAngle),rope:t=>dcss(`M32 68L${n(50+logPose(t).travel)} 68`),measurement:t=>`opacity:${n(logPose(t).fade)}`,sandTop:t=>`transform:translate(115px,38px) scale(1,${n(1-logPose(t).progress)})`,sandBottom:t=>`transform:translate(115px,54px) scale(1,${n(logPose(t).progress)})`,stream:t=>`opacity:${t>=.12&&t<.72?1:0}`,counting:t=>`opacity:${t<.72?1:0}`,read:t=>`opacity:${t>=.72&&t<.92?1:0}`};
  for(let j=1;j<=3;j++){tracks['k'+j]=t=>`opacity:${logPose(t).travel>=j*14?1:0}`;tracks['tick'+j]=t=>`opacity:${logPose(t).travel>=j*14?1:.2}`;}
  const vessel=path('M-6 68L29 68L23 78L0 78Z','#79503a','stroke="#d0aa76" stroke-width="1"')+rect(10,57,12,11,'#ad9470')+line(15,57,15,43,'#e3c798',1)+path('M16 43L16 56L27 56Z','#d6c9a6')+group('reel',circle(0,0,7,'#473b2b','stroke="#d6ad69" stroke-width="1.3"')+line(-7,0,7,0,'#bd9356',1.1)+line(0,-7,0,7,'#bd9356',1.1)+circle(0,0,1.7,'#f0dbaa'));
  const body=`<defs><clipPath id="sea"><rect x="9" y="24" width="122" height="81" rx="4"/></clipPath></defs>${rect(9,24,122,81,'#122935','rx="4"')}${rect(9,73,122,32,'#164453')}${line(9,73,131,73,'#57929b',.8)}${line(12,91,30,91,'#2c6877',1)}${line(47,99,72,99,'#2c6877',1)}${line(104,90,127,90,'#2c6877',1)}${text(17,37,'LOG','#b7cbd0',5)}${line(24,40,24,68,'#819c9f',.6,'stroke-dasharray="1 2"')}${group('measurement',path('M25 72L14 87Q25 94 36 87Z','#bca079','stroke="#edcea0" stroke-width="1"')+path('M14 87Q25 94 36 87','none','stroke="#58616a" stroke-width="3"')+path('M17 85L32 68L33 85','none','stroke="#d5bb86" stroke-width=".8"')+path('M32 68L50 68','none','class="rb-rope" stroke="#dfc28a" stroke-width="1.2"')+[1,2,3].map(j=>group('k'+j,circle(50+j*14,68,1.7,'#f0d39c'))).join('')+group('boat',vessel))}${path('M109 35H121M109 57H121M110 36L120 56M120 36L110 56','none','stroke="#b8a273" stroke-width="1.2"')}${group('sandTop',path('M-4 0H4L0 7Z','#e6c58a'))}${group('sandBottom',path('M-4 0H4L0 -7Z','#e6c58a'))}${group('stream',line(115,44,115,51,'#e6c58a',.7))}${text(115,30,'28 s','#b8c9c7',5,'text-anchor="middle"')}${[1,2,3].map(j=>group('tick'+j,circle(42+j*14,114,4.5,'#5e532f','stroke="#c7aa66" stroke-width=".7"')+text(42+j*14,116,j,'#f2d69a',5.5,'text-anchor="middle"'))).join('')}${group('counting',text(70,129,'COUNT THE PAYING-OUT KNOTS','#bfc7b8',5.1,'text-anchor="middle"'))}${group('read',text(70,129,'3 KNOTS · TIMED SAMPLE','#e0c581',5.8,'text-anchor="middle"'))}`;
  return scene('CHIP LOG · SHIP SPEED','The weighted wooden log stays in the water as the boat moves away. Rope pays out from the reel; three spaced knots pass the boat during a sandglass interval. Time and distance are compressed for illustration.',body,tracks,{pose:.76});
}
// The receiver copies the sender after a viewing delay; shapes are illustrative.
export function semaphorePose(t,receiver=false){const local=(t-(receiver?.18:0)+1)%1;let mix;if(local<.12)mix=ease(local/.12);else if(local<.5)mix=1;else if(local<.62)mix=1-ease((local-.5)/.12);else mix=0;return {regulator:lerp(0,90,mix),left:lerp(-90,-45,mix),right:lerp(45,90,mix)};}
function semaphore(){
  const tracks={};
  const apparatus=(prefix,receiver)=>{for(const part of ['regulator','left','right'])tracks[prefix+part]=t=>`transform:rotate(${n(semaphorePose(t,receiver)[part])}deg)`;return group(prefix+'regulator',rect(-17,-2,34,4,'#caa16c','rx="1" stroke="#efd8a9" stroke-width=".6"')+`<g transform="translate(-17 0)">${group(prefix+'left',line(0,0,14,0,'#63bdc1',3)+line(0,0,-4,0,'#566366',2)+circle(0,0,2.2,'#f3d08b'))}</g><g transform="translate(17 0)">${group(prefix+'right',line(0,0,14,0,'#63bdc1',3)+line(0,0,-4,0,'#566366',2)+circle(0,0,2.2,'#f3d08b'))}</g>`+circle(0,0,2.5,'#f3d08b'));};
  tracks.sight=t=>`opacity:${(t>.13&&t<.32)||(t>.63&&t<.82)?.75:.12}`;
  tracks.repeat=t=>`opacity:${(t>.3&&t<.5)||(t>.8&&t<1)?1:0}`;
  tracks.setting=t=>`opacity:${(t<=.3)||(t>=.5&&t<=.8)?1:0}`;
  const tower=(x,y,s,prefix,receiver)=>`<g transform="translate(${x} ${y}) scale(${s})">${path('M-14 30H14L19 53H-19Z','#485557','stroke="#8e9a91" stroke-width=".8"')}${rect(-16,27,32,5,'#87978e')}${line(0,0,0,27,'#98aeb0',2)}${line(-3,7,-3,29,'#b29c71',.7)}${line(3,7,3,29,'#b29c71',.7)}${rect(-5,37,10,12,'#172931','rx="1"')}${apparatus(prefix,receiver)}</g>`;
  const body=`${path('M9 112L9 103L21 96L49 99L68 108L84 99L111 92L131 98V112Z','#1e393b')}${line(45,90,106,90,'#d1c092',.7,'class="rb-sight" stroke-dasharray="2 3"')}${tower(38,52,1,'send',false)}${tower(106,65,.68,'receive',true)}${path('M43 90L49 87L50 89L44 92Z','#ddcca4')}${text(38,116,'SEND','#b9ccca',5,'text-anchor="middle"')}${text(106,116,'REPEAT','#b9ccca',5,'text-anchor="middle"')}${group('repeat',text(70,129,'NEXT TOWER COPIES THE POSE','#d9c48e',5,'text-anchor="middle"'))}${group('setting',text(70,129,'SET · HOLD · OBSERVE','#b6cccc',5.7,'text-anchor="middle"'))}`;
  return scene('CHAPPE · OPTICAL RELAY','Two optical telegraph stations. The near station sets and holds a shape with three articulated arms; the next station observes and repeats it after a delay. Demonstration shapes do not claim a historical word code.',body,tracks,{seconds:10,pose:.4,background:'#10232b'});
}
export const rebuilds={
  'concept-wireframe-globe':{make:globe,brief:'Make rotation read as depth: projected grid, near/far contrast, tilted axis and a tracked gold meridian.'},
  'concept-wind-rose':{make:windRose,brief:'Use the rose: plot a bearing, follow it with a ship, and arrive at a coast on a parchment chart.'},
  'concept-kamal-navigator':{make:kamal,brief:'Show adjustment, overshoot and alignment of card edges with the star sightline and horizon.'},
  'concept-chip-log':{make:chipLog,brief:'Connect a stationary weighted log to moving boat, reel payout, spaced knots and a draining sandglass.'},
  'concept-chappe-semaphore':{make:semaphore,brief:'Show articulated code poses held by one station and copied by a second after observation.'}
};
const sha=s=>crypto.createHash('sha256').update(s.replaceAll('\r\n','\n')).digest('hex');
const block=s=>`// BEGIN VISUAL STANDARD v2\n${s}\n// END VISUAL STANDARD v2\n`;
export function verifyRebuilds(){
  for(let i=0;i<=1200;i++){
    const t=i/1200,k=kamalPose(t),l=logPose(t),c=coursePose(t);
    assert.ok(k.x>=53-1e-8&&k.x<=87+1e-8);
    if(t>=.48&&t<=.82)assert.ok(Math.abs(k.top-k.targetY)<1e-8);
    assert.ok(Math.abs(l.reelAngle*Math.PI/180*7-l.travel)<1e-8);
    assert.ok(Math.abs((c.x-26)/80-(100-c.y)/55)<1e-8);
    for(const lat of [-Math.PI/2,0,Math.PI/2]){const [x,y,z]=globePoint(lat,t*tau);assert.ok((x-70)**2+(y-70)**2<=43**2+1e-8);assert.ok(Math.abs(z)<=1+1e-8);}
    const send=semaphorePose(t),receive=semaphorePose((t+.18)%1,true);for(const key of Object.keys(send))assert.ok(Math.abs(send[key]-receive[key])<1e-8);
  }
  console.log('Five rebuilds: 1,201 samples pass projection bounds, sightline alignment, reel payout, course and relay delay.');
}
if(process.argv.includes('--write')){
  const ledger=new URL('wave-02.json',base),wave=JSON.parse(fs.readFileSync(ledger));
  const archive=new URL('wave-02-rebuild/previous/',base);fs.mkdirSync(archive,{recursive:true});
  for(const [tag,spec] of Object.entries(rebuilds)){
    const row=wave.concepts.find(c=>c.tag===tag),concept=CONCEPTS.find(c=>c.tag===tag),url=new URL(concept.module,new URL('concepts/gallery/',root));
    const prior=fs.readFileSync(url,'utf8').replaceAll('\r\n','\n'),saved=new URL(tag+'.js',archive);
    if(!fs.existsSync(saved)){fs.writeFileSync(saved,prior);row.revisionHistory ||= [];row.revisionHistory.push({revision:'initial Wave 02 candidate',source:'wave-02-rebuild/previous/'+tag+'.js',sourceSha256:sha(prior),operatorDecision:row.operatorDecision,rating:row.rating,comment:row.comment,visualEvidencePaths:row.visualEvidencePaths});}
    let source=prior.replace(/\/\/ BEGIN VISUAL STANDARD v2\n[\s\S]*?\/\/ END VISUAL STANDARD v2\n/g,'');assert.equal(sha(source),row.previousSourceSha256);
    const {css,svg,seconds}=spec.make();
    source=block(`// Scene rebuild by Codex / Astra / 6; historical v1 is untouched.\nconst visualStandardV2Styles=${JSON.stringify(css)};\nconst visualStandardV2Markup=${JSON.stringify(svg)};`)+source;
    source=source.replace(/(class \w+ extends HTMLElement \{\n)/,`$1${block("  static get observedAttributes(){return ['version'];}\n  attributeChangedCallback(){if(this.isConnected)this.connectedCallback();}")}`);
    source=source.replace('  connectedCallback() {\n',`  connectedCallback() {\n${block("    if(this.getAttribute('version')!=='v1'){this.shadowRoot.innerHTML='<style>'+visualStandardV2Styles+'</style>'+visualStandardV2Markup;return;}")}`);
    assert.equal((source.match(/BEGIN VISUAL STANDARD v2/g)||[]).length,3);fs.writeFileSync(url,source);
    Object.assign(row,{candidateCycleSeconds:seconds,implementationNote:spec.brief,sourceHashAfterCompletion:sha(source),operatorDecision:null,rating:null,comment:null,verificationResult:'pending rebuild sweep',visualEvidencePaths:[],verification:{}});
  }
  wave.status='five-rebuilds-in-validation';wave.preview.reviewTags=Object.keys(rebuilds);wave.preview.reviewRevision='depth-1';wave.preview.reviewSelections='Five rebuilt candidates await a new review; 12 approvals and three other revision requests retained.';
  wave.operatorReview.hold.resumed=true;wave.operatorReview.hold.resumeScope='Five deeper rebuilds and one sweep/report, explicitly requested by operator.';
  fs.writeFileSync(ledger,JSON.stringify(wave,null,2)+'\n');
}
if(process.argv.includes('--check'))verifyRebuilds();
