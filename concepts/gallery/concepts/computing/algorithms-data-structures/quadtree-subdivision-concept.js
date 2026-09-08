// Quadtree Subdivision. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptQuadtreeSubdivision extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot.firstChild) this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          color: #70edb1;
          background: #07120f;
        }
        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
        .ink {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .muted {
          stroke: #375b51;
        }
        .paper {
          fill: #07120f;
        }
        .solid {
          fill: currentColor;
        }
        .warm {
          fill: #f3c977;
        }
        .cool {
          fill: #77c9ef;
        }
        .rose {
          fill: #ed8eab;
        }
        .p0 {
          animation:p0 9s steps(1,end) infinite;
        }
        @keyframes p0 {
          0% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .p1 {
          animation:p1 9s steps(1,end) infinite;
        }
        @keyframes p1 {
          0% {
            opacity:0;
          }
          14% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .p2 {
          animation:p2 9s steps(1,end) infinite;
        }
        @keyframes p2 {
          0% {
            opacity:0;
          }
          28% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .p3 {
          animation:p3 9s steps(1,end) infinite;
        }
        @keyframes p3 {
          0% {
            opacity:0;
          }
          52% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .p4 {
          animation:p4 9s steps(1,end) infinite;
        }
        @keyframes p4 {
          0% {
            opacity:0;
          }
          80% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .root-split {
          stroke-dasharray:1;
          animation:root 9s linear infinite;
        }
        .child-split {
          stroke-dasharray:1;
          animation:child 9s linear infinite;
        }
        .crowded {
          fill:#f3c9770d;
          animation:crowded 9s linear infinite;
        }
        @keyframes root {
          0%,31% {
            stroke-dashoffset:1;
          }
          45%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes child {
          0%,57% {
            stroke-dashoffset:1;
          }
          72%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes crowded {
          0%,51% {
            fill:#f3c97700;
          }
          55%,65% {
            fill:#f3c97722;
          }
          74%,100% {
            fill:#f3c9770d;
          }
        }
        :host(:not([data-active])) *, :host(:not([data-active])) *::before, :host(:not([data-active])) *::after {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      </style>
      <svg viewBox="0 0 140 140" role="img" aria-label="Quadtree Subdivision">
        <rect class="ink paper" x="18" y="18" width="104" height="104"/>
        <rect class="crowded" x="18" y="18" width="52" height="52"/>
        <path class="ink root-split" pathLength="1" d="M70 18V122M18 70H122"/>
        <path class="ink child-split" pathLength="1" d="M44 18V70M18 44H70"/>
        <circle class="solid p0" cx="31" cy="31" r="3.5"/>
        <circle class="solid p1" cx="57" cy="31" r="3.5"/>
        <circle class="solid p2" cx="96" cy="96" r="3.5"/>
        <circle class="solid p3" cx="31" cy="57" r="3.5"/>
        <circle class="solid p4" cx="96" cy="44" r="3.5"/>
      </svg>
    `;
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

if (!customElements.get("concept-quadtree-subdivision")) {
  customElements.define("concept-quadtree-subdivision", ConceptQuadtreeSubdivision);
}
