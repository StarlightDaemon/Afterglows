import './candidate.js';
const duration = 18000;
let hosts = [...document.querySelectorAll('concept-wind-rose')];
let playing = true;
const play = document.querySelector('#play'), phase = document.querySelector('#phase');
const reduced = document.querySelector('#reduce'), status = document.querySelector('#status');
function animations() { return hosts.flatMap(host => host.shadowRoot.getAnimations()); }
function settle(message) { requestAnimationFrame(()=>requestAnimationFrame(()=>{status.textContent=message;})); }
function seek(value) {
  playing = false; play.textContent = 'Play';
  for(const animation of animations()) {animation.pause(); animation.currentTime=value/100*duration;}
  settle(reduced.checked?'Reduced-motion pose · all 20 readings':`Paused · ${value}%`);
}
play.addEventListener('click',()=>{
  if(reduced.checked)return;
  playing=!playing;
  for(const animation of animations()) playing?animation.play():animation.pause();
  play.textContent=playing?'Pause':'Play'; settle(playing?'Playing · 18-second cycle':'Paused');
});
phase.addEventListener('input',()=>seek(Math.max(0,Math.min(100,Number(phase.value)))));
function applyReduced() {
  for(const host of hosts){
    host.shadowRoot.querySelector('[data-style-preview]')?.remove();
    if(reduced.checked){
      const css=[...host.shadowRoot.styleSheets].flatMap(sheet=>[...sheet.cssRules]).filter(rule=>rule.conditionText?.includes('prefers-reduced-motion')).flatMap(rule=>[...rule.cssRules].map(r=>r.cssText)).join('\n');
      const style=document.createElement('style');style.dataset.stylePreview='true';style.textContent=css;host.shadowRoot.append(style);
    }
  }
  play.disabled=reduced.checked;
  seek(Number(phase.value));
}
reduced.addEventListener('change',applyReduced);
document.querySelector('#remount').addEventListener('click',()=>{
  hosts=hosts.map(host=>{const next=document.createElement('concept-wind-rose');host.replaceWith(next);return next;});
  applyReduced();
  document.querySelector('#inspection').textContent=`${hosts.filter(h=>h.shadowRoot?.querySelector('svg')).length}/2 studies reconnected`;
});
document.querySelector('#observations').textContent='N 1 · NE 1 · E 2 · SE 1 · S 2 · SW 5 · W 4 · NW 2\nDirectional 18 + calm 2 = 20 equal-duration readings.';
settle('Playing · 18-second cycle');
