import { CONCEPTS } from "/concepts/gallery/manifest.js";

// Keep review batches stable when a later subject returns to an earlier shard.
const additions = CONCEPTS.filter((concept) => concept.source === "expansion")
  .sort((a, b) => Date.parse(a.added) - Date.parse(b.added));
const size = 8;
const select = document.querySelector("#batch");
const reduced = document.querySelector("#reduced");
const main = document.querySelector("main");
const report = document.querySelector("#report");
let batch = Math.min(Math.floor(Math.max(0, Number(new URLSearchParams(location.search).get("batch")) || 0)), Math.max(0, Math.ceil(additions.length / size) - 1));
let phase = 0.5;
let current = [];
let generation = 0;

for (let i = 0; i < Math.ceil(additions.length / size); i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = `Batch ${i + 1}: ${i * size + 1}–${Math.min(additions.length, (i + 1) * size)}`;
  select.appendChild(option);
}

function animations(host) { return host.shadowRoot.getAnimations(); }

function seek(value) {
  phase = value;
  document.querySelector("#phase-number").value = Math.round(value * 100);
  document.querySelectorAll("[data-phase]").forEach((button) => button.setAttribute("aria-pressed", Number(button.dataset.phase) === phase ? "true" : "false"));
  for (const { host, concept } of current) {
    for (const animation of animations(host)) {
      animation.pause();
      animation.currentTime = phase * concept.cycleSeconds * 1000;
    }
    host.closest("article").dataset.animationCount = animations(host).length;
  }
  report.textContent = `${current.length} / ${Math.min(size, additions.length - batch * size)} registered and mounted; phase ${Math.round(phase * 100)}%; ${reduced.checked ? "reduced-motion declarations applied" : "animations paused for inspection"}.`;
}

async function render() {
  const ticket = ++generation;
  const subjects = additions.slice(batch * size, (batch + 1) * size);
  select.value = batch;
  history.replaceState(null, "", `?batch=${batch}`);
  main.replaceChildren();
  current = [];
  report.textContent = "Loading review batch…";
  for (const concept of subjects) {
    try {
      await import(new URL(concept.module, new URL("/concepts/gallery/", location.href)));
      if (ticket !== generation) return;
      const card = document.createElement("article");
      card.dataset.tag = concept.tag;
      const box = document.createElement("div");
      box.className = "tile";
      const host = document.createElement(concept.tag);
      const label = document.createElement("h2");
      label.textContent = concept.label;
      const status = document.createElement("div");
      status.className = "status";
      status.textContent = `${concept.cycleSeconds}s · ${concept.category}`;
      box.appendChild(host);
      card.append(box, label, status);
      main.appendChild(card);
      if (!host.shadowRoot) throw new Error(`${concept.tag} did not upgrade`);
      if (reduced.checked) {
        // Preview the actual declarations in the component's media rule.
        // This is deliberately labelled a style preview, not OS emulation.
        const rules = [...host.shadowRoot.styleSheets].flatMap((sheet) => [...sheet.cssRules]);
        const css = rules.filter((rule) => rule.conditionText?.includes("prefers-reduced-motion"))
          .flatMap((rule) => [...rule.cssRules].map((child) => child.cssText)).join("\n");
        if (!css) throw new Error(`${concept.tag} has no reduced-motion rules`);
        const style = document.createElement("style");
        style.textContent = css;
        host.shadowRoot.appendChild(style);
      }
      current.push({ host, concept });
    } catch (error) {
      const issue = document.createElement("p");
      issue.textContent = String(error);
      issue.setAttribute("role", "alert");
      main.appendChild(issue);
      console.error(error);
    }
  }
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  if (ticket === generation) seek(phase);
}

select.addEventListener("change", () => { batch = Number(select.value); render(); });
document.querySelector("#previous").addEventListener("click", () => { batch = Math.max(0, batch - 1); render(); });
document.querySelector("#next").addEventListener("click", () => { batch = Math.min(Math.ceil(additions.length / size) - 1, batch + 1); render(); });
document.querySelectorAll("[data-phase]").forEach((button) => button.addEventListener("click", () => seek(Number(button.dataset.phase))));
document.querySelector("#play").addEventListener("click", () => {
  current.forEach(({ host }) => animations(host).forEach((animation) => animation.play()));
  report.textContent = "Playing current batch.";
});
reduced.addEventListener("change", render);
document.querySelector("#phase-number").addEventListener("input", (event) => {
  const value = Number(event.target.value);
  if (Number.isFinite(value)) seek(Math.min(99, Math.max(0, value)) / 100);
});
render();
