// Authoring utility: wraps independently drawn SVG/CSS in the standalone
// custom-element lifecycle. It supplies no scene or motion design.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../concepts/gallery/", import.meta.url));

export function writeComponent(concept, scene, styles) {
  if (!concept.module.startsWith(`./concepts/${concept.section}/${concept.category}/`)) {
    throw new Error(`Invalid placement: ${concept.tag}`);
  }
  if (/[`]|\$\{/.test(scene + styles)) throw new Error("Escape template literals in artwork");
  const name = concept.tag.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("");
  const code = `// ${concept.label}. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ${name} extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot.firstChild) this.shadowRoot.innerHTML = \`
      <style>
        :host { display: block; width: 100%; height: 100%; overflow: hidden; color: #70edb1; background: #07120f; }
        svg { display: block; width: 100%; height: 100%; }
        .ink { fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .muted { stroke: #375b51; } .paper { fill: #07120f; } .solid { fill: currentColor; }
        .warm { fill: #f3c977; } .cool { fill: #77c9ef; } .rose { fill: #ed8eab; }
        ${styles}
        :host(:not([data-active])) *, :host(:not([data-active])) *::before, :host(:not([data-active])) *::after { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
      </style>
      <svg viewBox="0 0 140 140" role="img" aria-label="${concept.label.replaceAll('&','&amp;').replaceAll('"','&quot;')}">
        ${scene}
      </svg>
    \`;
    this._visibility?.disconnect();
    this._visibility = new IntersectionObserver(([entry]) => {
      this.toggleAttribute("data-active", entry.isIntersecting);
    });
    this._visibility.observe(this);
  }

  disconnectedCallback() {
    this._visibility?.disconnect();
    this._visibility = null;
    this.removeAttribute("data-active");
  }
}

if (!customElements.get("${concept.tag}")) {
  customElements.define("${concept.tag}", ${name});
}
`;
  const file = path.resolve(root, concept.module);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (fs.existsSync(file)) throw new Error(`Refusing to overwrite ${file}`);
  fs.writeFileSync(file, code);
}
