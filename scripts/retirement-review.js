import {CONCEPTS} from '/concepts/gallery/manifest.js';
const entries=[
  {tag:'concept-archimedes-trammel',role:'Final addition · Geometry',text:'Two sliders move in perpendicular slots. Their single rigid bar carries a pen around an ellipse, leaving a short illuminated trail.'},
  {tag:'concept-linear-chirp',role:'Final addition · Signals',text:'A constant-amplitude cosine rises from 1 to 8 Hz. The shared cursor ties its increasingly close waves to the linear frequency ramp; a two-second record plays three times slower.'},
].map(row=>({...row,concept:CONCEPTS.find(c=>c.tag===row.tag)}));
const pair=document.querySelector('#pair'),status=document.querySelector('#status');
const play=document.querySelector('#play'),reduced=document.querySelector('#reduced');
let hosts=[],playing=true;
const animations=()=>hosts.flatMap(h=>h.shadowRoot?.getAnimations() || []);
function pauseAt(fraction){playing=false;play.textContent='Play';for(const a of animations()){a.pause();a.currentTime=Number(a.effect.getTiming().duration)*fraction;}status.textContent=`Paused at ${fraction*100}% of each study’s cycle`;}
function applyReduced(){
  for(const host of hosts){
    host.shadowRoot.querySelector('[data-review-reduced]')?.remove();
    if(reduced.checked){const css=[...host.shadowRoot.styleSheets].flatMap(s=>[...s.cssRules]).filter(r=>r.conditionText?.includes('prefers-reduced-motion')).flatMap(r=>[...r.cssRules].map(x=>x.cssText)).join('\n');const style=document.createElement('style');style.dataset.reviewReduced='';style.textContent=css;host.shadowRoot.append(style);}
  }
  play.disabled=reduced.checked;
  for(const button of document.querySelectorAll('[data-phase]'))button.disabled=reduced.checked;
  if(reduced.checked)status.textContent='2/2 studies · Authored reduced-motion poses';
  else{playing=true;play.textContent='Pause';for(const a of animations())a.play();status.textContent='2/2 studies · Playing live at the same preview scale';}
}
function mount(){
  pair.replaceChildren();hosts=[];
  for(const row of entries){
    const c=row.concept,card=document.createElement('article');card.className='card keeper';
    const role=document.createElement('div');role.className='role';role.textContent=row.role;
    const title=document.createElement('h2');title.textContent=c.label;
    const stage=document.createElement('div');stage.className='stage';
    const host=document.createElement(c.tag);if(c.versioned)host.setAttribute('version',c.default);
    const description=document.createElement('p');description.textContent=row.text;
    const link=document.createElement('a');link.href='/concepts/gallery/'+c.module.replace(/^\.\//,'');link.textContent='View source';link.target='_blank';
    stage.append(host);card.append(role,title,stage,description,link);pair.append(card);hosts.push(host);
  }
  applyReduced();
}
for(const button of document.querySelectorAll('[data-phase]'))button.addEventListener('click',()=>pauseAt(Number(button.dataset.phase)/100));
play.addEventListener('click',()=>{playing=!playing;for(const a of animations())playing?a.play():a.pause();play.textContent=playing?'Pause':'Play';status.textContent=playing?'Playing live':'Paused';});
reduced.addEventListener('change',applyReduced);
document.querySelector('#remount').addEventListener('click',mount);
try{await Promise.all(entries.map(({concept:c})=>import('/concepts/gallery/'+c.module.replace(/^\.\//,''))));mount();}catch(error){status.textContent='Preview failed: '+error.message;}
