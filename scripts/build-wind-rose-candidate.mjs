// Builds only the fresh review candidate. No imports from previous Wind Rose designs.
import fs from 'node:fs';
import { observations, directions, colors, seconds, classify, stateAt, point, sector, cuePosition } from './wind-rose-model.mjs';
const directory = new URL('../.raiden/state/SNAPSHOTS/gallery-visual-standard/wind-rose-restart/', import.meta.url);
fs.mkdirSync(directory, { recursive: true });
const n = v => Number(v.toFixed(3));
const text = (x,y,value,extra='') => `<text x="${x}" y="${y}" ${extra}>${value}</text>`;
const tracks = [];
function track(name, render, discrete=false) {
  // Event boundaries plus dense samples preserve input/accumulation timing.
  const times = new Set(Array.from({length:361},(_,i)=>i/20));
  for(let i=0;i<20;i++) for(const f of [0,.45,.75,1]) times.add(n(.8+.6*(i+f)));
  const frames=[...times].sort((a,b)=>a-b).map(t=>({t,value:render(t)}));
  const changes=frames.filter((frame,i)=>i===0||i===frames.length-1||frame.value!==frames[i-1].value||frame.value!==frames[i+1].value);
  tracks.push(`.${name}{${render(15)};animation:${name} ${seconds}s ${discrete?'step-end':'linear'} infinite}` +
    `@keyframes ${name}{${changes.map(({t,value})=>`${n(t/seconds*100)}%{${value}}`).join('')}}`);
  return `class="${name}"`;
}
let drawing = '<rect x=".5" y=".5" width="139" height="139" rx="7" fill="#0a1c21" stroke="#355059"/>';
drawing += text(8,10,'SYNTHETIC', 'class="eyebrow"') + text(132,10,'WIND FROM', 'class="eyebrow" text-anchor="end"');
let plot = '';
for(const count of [1,3,5]) plot += `<circle cx="70" cy="65" r="${count*8}" fill="none" stroke="#56717a" stroke-width=".5" opacity=".58"/>`;
for(let d=0;d<8;d++) {const [x,y]=point(d*45,40);plot+=`<path d="M70 65L${n(x)} ${n(y)}" stroke="#39565f" stroke-width=".45"/>`;}
for(let d=0;d<8;d++)for(let c=0;c<3;c++){
  const pose = t => {const row=stateAt(t).bins[d],inner=row.slice(0,c).reduce((a,b)=>a+b,0);return `d:path('${sector(d,inner,inner+row[c])}');opacity:${row[c]>.0001?1:0}`;};
  plot += `<path ${track(`bin-${d}-${c}`,pose)} fill="${colors[c]}" stroke="#0a1c21" stroke-width=".5"/>`;
}
// Scale labels sit in the empty gap between N and NE spokes.
for(const count of [1,3,5]){const [x,y]=point(22.5,count*8);plot+=text(n(x+2),n(y),' '+count,'class="scale"');}
plot+='<circle cx="70" cy="65" r="1.3" fill="#d9e7e2"/>';
drawing += `<g ${track('distribution',t=>`opacity:${n(stateAt(t).fade)}`)}>${plot}</g>`;
for(let d=0;d<8;d++){const [x,y]=point(d*45,48);drawing+=text(n(x),n(y+2),directions[d],'class="direction" text-anchor="middle"');}
// A small inbound arrow is an observation of wind FROM its measured bearing.
const approach = t => {
  const s=stateAt(t),o=s.current===null?null:observations[s.current];
  if(!o||o[1]<1)return 'opacity:0;transform:translate(70px,65px) rotate(0deg)';
  const [x,y]=cuePosition(o[0],o[1],s.approach);
  return `opacity:${n(Math.sin(Math.PI*s.approach))};color:${colors[classify(...o).speedClass]};transform:translate(${n(x)}px,${n(y)}px) rotate(${o[0]}deg)`;
};
drawing += `<path d="M0 -3V3M-2 1L0 3L2 1" ${track('incoming',approach)} stroke="currentColor" fill="none" stroke-width="1.2"/>`;
// Discrete observation labels make the direction/speed mapping explicit.
for(let i=0;i<=20;i++){
  const o=observations[i],label=o?(o[1]<1?'CALM':`${directions[classify(...o).direction]} · ${o[1]} m/s`):'20 READINGS';
  const start=i===20?12.8:.8+i*.6,end=i===20?17.3:start+.6;
  drawing+=`<g ${track(`reading-${i}`,t=>`opacity:${t>=start&&t<end?1:0}`,true)}>${text(70,121,label,'class="readout" text-anchor="middle"')}</g>`;
}
// Calm is excluded from branches, represented by a count rather than radial area.
for(let count=0;count<=2;count++){
  drawing+=`<g ${track(`calm-${count}`,t=>`opacity:${Math.round(stateAt(t).calm)===count?n(stateAt(t).fade):0}`,true)}>${text(8,137,`CALM ${count}/20`,'class="foot"')}</g>`;
}
for(let c=0;c<3;c++)drawing+=`<rect x="${12+c*43}" y="125" width="5" height="5" rx="1" fill="${colors[c]}"/>`+text(20+c*43,130,['1–&lt;3','3–&lt;6','6+'][c],'class="legend"');
drawing+=text(132,137,'m/s · count scale','class="foot" text-anchor="end"');
const css=`:host{display:block;width:100%;height:100%;color:#d5e4df}svg{width:100%;height:100%;display:block}text{fill:#c6d8d7;font-family:ui-monospace,monospace;font-size:6px}.eyebrow{font-size:5.5px;letter-spacing:.3px;fill:#7fa9ad}.direction{font-size:7px;font-weight:600;fill:#d7e6e1}.scale{font-size:5px;fill:#a7c0c0;paint-order:stroke;stroke:#0a1c21;stroke-width:2px}.readout{font-size:6px;fill:#dfe9dd}.legend{font-size:5.5px}.foot{font-size:4.8px;fill:#88aeb0}.incoming{color:#e8dbc1;transform-origin:0 0}.distribution{transform-origin:0 0}${tracks.join('\n')}:host(:not([data-active])) *{animation-play-state:paused!important}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}`;
const markup=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" role="img" aria-label="Meteorological wind rose of twenty synthetic observations. Branches show the direction wind comes from; their radial lengths count observations. Gold, teal and coral show increasing speed ranges. Southwest has five observations, west four, and two calm observations have no direction."><title>Wind Rose — direction, frequency and speed</title>${drawing}</svg>`;
const source=`// Fresh Wind Rose review candidate; Codex / Astra / 6, 2026-09-09.
// Meteorological histogram. Synthetic observations and assumptions are in design.md.
const styles = ${JSON.stringify(css)};
const markup = ${JSON.stringify(markup)};
class WindRoseConcept extends HTMLElement {
  constructor() { super(); this.attachShadow({mode:'open'}); }
  connectedCallback() {
    if (!this.shadowRoot.firstChild) { const style=document.createElement('style');style.textContent=styles;this.shadowRoot.append(style);const template=document.createElement('template');template.innerHTML=markup;this.shadowRoot.append(template.content.cloneNode(true)); }
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(entries=>{for(const entry of entries)this.toggleAttribute('data-active',entry.isIntersecting);});
    this.observer.observe(this);
  }
  disconnectedCallback() { this.observer?.disconnect(); this.observer=null; this.removeAttribute('data-active'); }
}
if (!customElements.get('concept-wind-rose')) customElements.define('concept-wind-rose',WindRoseConcept);
`;
fs.writeFileSync(new URL('wind-rose-candidate.js',directory),source);
fs.writeFileSync(new URL('observations.json',directory),JSON.stringify({synthetic:true,units:'m/s',equalDuration:true,calmThreshold:'speed < 1 m/s',directions,speedBins:['[1,3)','[3,6)','[6,infinity)'],observations,final:stateAt(15)},null,2)+'\n');
console.log(`Built fresh Wind Rose candidate (${source.length} characters), 20 synthetic readings.`);
