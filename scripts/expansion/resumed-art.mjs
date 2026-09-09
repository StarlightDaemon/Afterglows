// Authoring-only numeric/SVG utilities; no shared scene or runtime dependency.
import fs from 'node:fs';
import { writeComponent } from './component-shell.mjs';
import { expansionEntries } from '../../concepts/gallery/manifests/expansion-entry.js';
export const n = x => Number(x.toFixed(3));
export const range = (count, fn) => Array.from({length:count},(_,i)=>fn(i)).join('');
export const line = (x1,y1,x2,y2,attrs='') => `<path d="M${n(x1)} ${n(y1)}L${n(x2)} ${n(y2)}" ${attrs}/>`;
export const path = (d,attrs='') => `<path d="${d}" ${attrs}/>`;
export const circle = (x,y,r,attrs='') => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" ${attrs}/>`;
export const rect = (x,y,w,h,attrs='') => `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" ${attrs}/>`;
export const arrow = (x,y,angle=0,color='#f3c977') => `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(angle)})" fill="${color}"><path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/></g>`;
export const vector = (x,y,dx,dy) => {const len=Math.hypot(dx,dy);if(len<.001)return `M${n(x)} ${n(y)}l0 0`;const ux=dx/len,uy=dy/len,h=Math.min(4,len*.4),a=x+dx,b=y+dy;return `M${n(x)} ${n(y)}L${n(a)} ${n(b)}M${n(a-h*ux+h*.5*uy)} ${n(b-h*uy-h*.5*ux)}L${n(a)} ${n(b)}L${n(a-h*ux-h*.5*uy)} ${n(b-h*uy+h*.5*ux)}`;};
export const curve = points => points.map(([x,y],i)=>`${i?'L':'M'}${n(x)} ${n(y)}`).join('');
export const sample = (fn,count=48) => Array.from({length:count+1},(_,i)=>fn(i/count));
export const keys = (name,fn,count=48) => `@keyframes ${name}{${sample(t=>`${n(t*100)}%{${fn(t)}}`,count).join('')}}`;
export const move = (name,fn,duration=16,count=48) => `.${name}{animation:${name} ${duration}s linear infinite;} ${keys(name,t=>{const p=fn(t);return `transform:translate(${n(p[0])}px,${n(p[1])}px)${p.length>2?` rotate(${n(p[2])}deg)`:''};`;},count)}`;
export const morph = (name,fn,duration=16,count=48) => `.${name}{animation:${name} ${duration}s linear infinite;} ${keys(name,t=>`d:path('${fn(t)}');`,count)}`;
export const opacity = (name,fn,duration=16,count=48) => `.${name}{animation:${name} ${duration}s linear infinite;} ${keys(name,t=>`opacity:${n(fn(t))};`,count)}`;
export const clamp = (x,a=0,b=1)=>Math.max(a,Math.min(b,x));
export const smooth = x => {x=clamp(x);return x*x*(3-2*x);};
export const dots = (x0,y0,w,h,count=60) => range(count,i=>circle(x0+(i*37%101)/101*w,y0+(i*61%97)/97*h,.6,'fill="#bba37a" opacity=".25"'));
const baseline=JSON.parse(fs.readFileSync('.raiden/state/SNAPSHOTS/gallery-expansion-resumed/baseline.json','utf8'));
export function emit(subject, scene, css='') {
  // A scene can author motion and opacity separately for the same actor. Merge
  // their equal-time declarations into one keyframe track, avoiding CSS's
  // last-definition-wins behavior that would silently drop the actor's motion.
  const tracks=new Map();
  css=css.replace(/@keyframes\s+([\w-]+)\s*\{((?:[^{}]*\{[^{}]*\})+)\}/g,(_,name,body)=>{
    const frames=tracks.get(name)||new Map();
    for(const [,pct,decl] of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) frames.set(pct,(frames.get(pct)||'')+decl);
    tracks.set(name,frames);return '';
  });
  // A modulo path is an open flow with a hidden reinsertion, not a rapid
  // backward transit. Mask both ends of any sampled spatial discontinuity.
  for(const frames of tracks.values()){
    const moves=[...frames].map(([pct,decl])=>[pct,decl.match(/transform:translate\((-?[\d.]+)px,(-?[\d.]+)px\)/)]).filter(([,m])=>m).sort((a,b)=>parseFloat(a[0])-parseFloat(b[0]));
    for(let i=1;i<moves.length;i++){
      const [previous,a]=moves[i-1],[current,b]=moves[i];
      if(Math.hypot(Number(a[1])-Number(b[1]),Number(a[2])-Number(b[2]))>30){
        frames.set(previous,frames.get(previous)+'opacity:0;');
        frames.set(current,frames.get(current)+'opacity:0;');
      }
    }
  }
  const phase=subject.reducedMotionPhase??.75;
  const poses=new Map();
  for(const [,selector,animation] of css.matchAll(/(\.[\w-]+)\s*\{\s*animation\s*:\s*([\w-]+)/g)) {
    const frames=tracks.get(animation);if(!frames)continue;
    const points=[...frames].flatMap(([pct,decl])=>pct.trim().split(',').map(p=>[p==='from'?0:p==='to'?100:Number.parseFloat(p),decl])).sort((a,b)=>a[0]-b[0]);
    const chosen=points.filter(([pct])=>pct<=phase*100).at(-1)||points[0];
    poses.set(selector,chosen[1]);
  }
  css += [...tracks].map(([name,frames])=>`@keyframes ${name}{${[...frames].map(([pct,decl])=>`${pct}{${decl}}`).join('')}}`).join('\n');
  // Freeze every actor at the same source-authored phase, including geometry,
  // visibility, fill and transform. This is standalone OS preference support.
  css += `\n@media(prefers-reduced-motion:reduce){${[...poses].map(([selector,decl])=>`${selector}{${decl}}`).join('')}}`;
  const [concept]=expansionEntries(subject.section,subject.category,[subject]);
  if (baseline.entries.some(e=>e.concept.tag===concept.tag)) throw new Error('Protected baseline tag '+concept.tag);
  const file=new URL(`../../concepts/gallery/${concept.module}`,import.meta.url);
  // Re-generation is restricted to this pass's new subject and canonical path.
  if(fs.existsSync(file)) fs.unlinkSync(file);
  writeComponent(concept,scene,css);
  return concept;
}
export function saveShard(name,subjects) {
  fs.writeFileSync(`concepts/gallery/manifests/${name}.js`,
    `// Canonical facts for the resumed expansion; standalone sources carry the drawing.\nimport { expansionEntries } from './expansion-entry.js';\nexport const CONCEPTS = ${JSON.stringify(subjects,null,2)}.flatMap(({section,category,...subject}) => expansionEntries(section,category,[subject]));\n`);
}
