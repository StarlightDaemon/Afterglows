import { CONCEPTS } from "/concepts/gallery/manifest.js";
import { installReducedMotion } from "/concepts/gallery/reduced-motion.js";
installReducedMotion(["CONCEPT-", "PHYSICS-"]);
const wave = await fetch("./wave.json").then(r => { if (!r.ok) throw Error("Wave data unavailable"); return r.json(); });
document.title = `Afterglows · Wave ${String(wave.wave).padStart(2, "0")} review`;
document.querySelector("h1").textContent = `Wave ${String(wave.wave).padStart(2, "0")} · ${wave.title || "Mechanisms & Tools"}`;
const audit = new URLSearchParams(location.search).has("audit");
const paged = audit || new URLSearchParams(location.search).has("inspect");
const selected = wave.concepts.filter(c => audit || (!c.retirement && c.classification === "refine" && (!wave.preview?.reviewTags || wave.preview.reviewTags.includes(c.tag))));
const key = `afterglows-visual-standard-${wave.wave}-${wave.startingCommit}${wave.preview?.reviewRevision ? `-${wave.preview.reviewRevision}` : ""}${new URLSearchParams(location.search).has("test") ? "-tool-verification" : ""}`;
let decisions = Object.fromEntries(wave.concepts.filter(c => c.operatorDecision).map(c => [c.tag, {decision:c.operatorDecision,rating:c.rating,comment:c.comment || ""}]));
let storageIssue = "";
try { const stored = JSON.parse(localStorage.getItem(key) || "{}"); if (stored && typeof stored === "object" && !Array.isArray(stored)) decisions = {...decisions,...stored}; } catch { storageIssue = "Browser storage unavailable; copy the summary before leaving."; }
// A later operator retirement supersedes browser-local pre-retirement feedback.
for (const row of wave.concepts.filter(c => c.retirement)) decisions[row.tag] = {decision:"Retire",rating:row.rating,comment:row.comment || ""};
let group = 0;
let ticket = 0;
let mounted = [];
const main = document.querySelector("main");
main.dataset.focused = String(!audit && selected.length === 1);
const status = document.querySelector("#status");
function element(tag, text, cls) { const node = document.createElement(tag); if (text != null) node.textContent = text; if (cls) node.className = cls; return node; }
function summary() {
  const reviews = wave.concepts.filter(c => c.classification === "refine").map(c => ({tag:c.tag,candidate:c.candidateVersion,decision:decisions[c.tag]?.decision || "Unresolved",rating:decisions[c.tag]?.rating || null,comment:decisions[c.tag]?.comment || ""}));
  document.querySelector("#summary").textContent = `{ "wave": ${wave.wave}, "startingCommit": "${wave.startingCommit}", "reviews": [\n${reviews.map(r=>"  "+JSON.stringify(r)).join(",\n")}\n] }`;
}
function save(tag, value) { decisions[tag] = {...decisions[tag], ...value}; try { localStorage.setItem(key, JSON.stringify(decisions)); } catch { storageIssue = "Storage failed; copy the summary before leaving."; status.textContent = storageIssue; } summary(); }
function animationList(host) { return host.shadowRoot.getAnimations(); }
function reduce(host, enabled) {
  host.shadowRoot.querySelector("[data-review-reduced]")?.remove();
  if (!enabled) return;
  const sheets = [...host.shadowRoot.styleSheets, ...host.shadowRoot.adoptedStyleSheets];
  const css = sheets.flatMap(s => [...s.cssRules]).filter(r => r.conditionText?.includes("prefers-reduced-motion"))
    .flatMap(r => [...r.cssRules].map(c => c.cssText)).join("\n");
  const style = element("style", css); style.dataset.reviewReduced = "true"; host.shadowRoot.append(style);
}
async function render() {
  const turn = ++ticket;
  mounted = []; main.replaceChildren();
  const cohort = paged ? selected.slice(group*5,group*5+5) : selected;
  let failed = 0;
  for (const row of cohort) {
    const concept = CONCEPTS.find(c => c.tag === row.tag);
    const card = element("article"); card.dataset.tag = row.tag;
    card.append(element("h2", concept.label));
    main.append(card);
    try {
      await import(new URL(concept.module,new URL("/concepts/gallery/",location.href)));
      if (turn !== ticket) return;
      const comparison = element("div",null,"comparison");
      const hosts = [];
      const variants = audit ? [row.previousDefaultVersion] : [row.previousDefaultVersion,row.candidateVersion];
      variants.forEach((v, i) => {
        const col = element("div",null,"version");
        col.append(element("div",i ? `Refined ${v}` : `Previous ${v}`,i ? "badge" : ""));
        const box = element("div",null,"tile");
        const host = document.createElement(row.tag); host.setAttribute("version",v); box.append(host); col.append(box);
        comparison.append(col); hosts.push(host);
      });
      card.append(comparison);
      if (hosts.some(h => !h.shadowRoot)) throw Error("Component did not upgrade");
      let phase = .25; let reduced = false; let playing = false;
      const cycle = row.candidateCycleSeconds || row.previousCycleSeconds || 6;
      const duration = i => (i ? cycle : row.previousCycleSeconds || cycle)*1000;
      const info = element("div","Paused · 25%","verification");
      const play = element("button","Play");
      function seek(p) {
        phase = p; playing = false; play.textContent = "Play";
        hosts.forEach((h,i) => animationList(h).forEach(a => { a.pause(); a.currentTime = duration(i)*p; }));
        info.textContent = reduced ? "Reduced-motion stable pose" : `Paused · ${Math.round(p*100)}%`;
      }
      const controls = element("div",null,"controls");
      for (const p of [0,.25,.5,.75,.9]) { const b = element("button",`${p*100}%`); b.onclick = () => seek(p); controls.append(b); }
      play.onclick = () => { if (reduced) return;
        if (playing) { const a = animationList(hosts[0])[0]; if (a) phase = (Number(a.currentTime)/duration(0))%1; seek(phase); return; }
        playing = true; play.textContent = "Pause"; const start = document.timeline.currentTime;
        hosts.forEach((h,i) => animationList(h).forEach(a => { const native=wave.synchronizeCycles===false; a.playbackRate = native ? 1 : duration(i)/(cycle*1000); a.play(); a.startTime = start - phase*(native ? duration(i) : cycle*1000); }));
        info.textContent = wave.synchronizeCycles === false ? "Playing · native timing" : "Playing · synchronized cycle progress";
      };
      card.append(play);
      const label = element("label"); const toggle = element("input"); toggle.type="checkbox";
      const setReduced = enabled => { reduced=enabled; toggle.checked=enabled; play.disabled=reduced; hosts.forEach(h=>reduce(h,reduced)); seek(phase); };
      toggle.onchange = () => setReduced(toggle.checked);
      label.append(toggle,document.createTextNode(" Reduced motion"));
      const inspection = element("details"); inspection.open = audit;
      inspection.append(element("summary","Inspection tools"),controls,label,info,
        element("p",`${wave.synchronizeCycles === false ? "Play starts both studies together at their native timing." : "Play synchronizes cycle progress."} Reduced motion previews component CSS; it does not change the OS preference.`,"note"),
        element("div",`${concept.category} · ${concept.tag}`,"meta"),
        element("p",audit ? "Historical version" : "Previous: historical version · Refined: Codex / Astra / 6","meta"),
        element("p",row.implementationNote || row.decisionReason || "Historical assessment", "note"));
      const remount = element("button","Check reconnect"); remount.onclick = () => {
        let cancelled=true;
        hosts.forEach(h => {const parent=h.parentNode;const before=animationList(h);h.remove();void h.offsetWidth;cancelled &&= before.every(a=>a.playState==="idle");parent.append(h);reduce(h,reduced);});seek(phase);
        card.dataset.reconnect = cancelled ? "pass" : "check";
        info.textContent += cancelled ? " · disconnect cleanup and reconnect passed" : " · reconnected; inspect cancellation";
      }; inspection.append(remount);
      if (!audit) {
        const field = element("fieldset"); field.setAttribute("aria-label",`Review ${concept.label}`);
        const options = element("div",null,"decisions");
        for (const d of ["Approve","Revise","Keep previous"]) {
          const b = element("button",d); b.setAttribute("aria-pressed",String(decisions[row.tag]?.decision===d));
          b.onclick = () => { save(row.tag,{decision:d}); [...options.children].forEach(n=>n.setAttribute("aria-pressed",String(n===b))); }; options.append(b);
        }
        const ratingLabel=element("label","Quality rating "); const rating=element("select"); rating.setAttribute("aria-label",`Quality rating for ${concept.label}`);
        for(const v of ["",1,2,3,4,5]) { const o=element("option",v || "Choose 1–5");o.value=v;rating.append(o); }
        rating.value=decisions[row.tag]?.rating || ""; rating.onchange=()=>save(row.tag,{rating:Number(rating.value)||null}); ratingLabel.append(rating);
        const comment=element("textarea"); comment.rows=2;comment.placeholder="Optional comment";comment.setAttribute("aria-label",`Comment for ${concept.label}`);comment.value=decisions[row.tag]?.comment || "";comment.oninput=()=>save(row.tag,{comment:comment.value});
        field.append(options,ratingLabel,comment);card.append(field);
      }
      card.append(inspection);
      mounted.push({hosts,seek,setReduced,play,reconnect:remount,get playing(){return playing;}});
      await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));seek(phase);
    } catch(error) {failed++;card.append(element("p",String(error),"error"));console.error(error);}
  }
  status.textContent=`${cohort.length-failed} concept${cohort.length-failed === 1 ? "" : "s"}${failed ? ` · ${failed} failures` : ""}${audit ? ` · assessment group ${group+1}/${Math.ceil(selected.length/5)}` : wave.preview?.reviewTags ? " · revision review" : ""}. ${storageIssue}`;
  summary();
}
document.querySelector("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(document.querySelector("#summary").textContent);document.querySelector("#copy-status").textContent="Copied";}catch{document.querySelector("#copy-status").textContent="Copy unavailable; select and copy the visible summary.";}};
document.querySelector("#audit-nav").hidden=!paged;
document.querySelector("#back").onclick=()=>{group=Math.max(0,group-1);render();};
document.querySelector("#next").onclick=()=>{group=Math.min(Math.ceil(selected.length/5)-1,group+1);render();};
// Group controls are restricted to the internal inspection URL.
if (paged && !audit) {
  const nav=document.querySelector('#audit-nav');
  for(const p of [0,.25,.5,.75,.9]) {const b=element('button',`Group ${p*100}%`);b.onclick=()=>mounted.forEach(m=>m.seek(p));nav.append(b);}
  for(const [label,action] of [
    ['Play group',m=>{if(!m.playing)m.play.click();}],
    ['Pause group',m=>{if(m.playing)m.play.click();}],
    ['Reduce group',m=>m.setReduced(true)],
    ['Restore group motion',m=>m.setReduced(false)],
    ['Reconnect group',m=>m.reconnect.click()]
  ]) {const b=element('button',label);b.onclick=()=>mounted.forEach(action);nav.append(b);}
}
render();
