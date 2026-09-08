// Spanning Tree Protocol. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSpanningTreeProtocol extends HTMLElement {
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
        text {
          fill:#b6d4c6;
          font:10px monospace;
          text-anchor:middle
        }
        .stable {
          stroke:#70edb1
        }
        .bottom {
          animation:bottom 12s infinite
        }
        .broken {
          stroke-dasharray:3 3;
          opacity:.3;
          animation:broken 12s infinite
        }
        .block {
          stroke:#f3c977;
          stroke-width:4;
          opacity:0;
          animation:block 12s infinite
        }
        .failure {
          stroke:#ed8eab;
          stroke-width:2;
          animation:failure 12s infinite
        }
        .crown {
          transform:translateY(3px);
          fill:#f3c977;
          animation:crown 12s infinite
        }
        .old-cost {
          opacity:.3;
          animation:broken 12s infinite
        }
        .new-cost {
          font-size:8px;
          animation:newcost 12s infinite
        }
        .bpdu,.data {
          opacity:0
        }
        .p1 {
          animation:p1 12s linear infinite
        }
        .p2 {
          animation:p2 12s linear infinite
        }
        .d1 {
          animation:d1 12s linear infinite
        }
        .d2 {
          animation:d2 12s linear infinite
        }
        @keyframes bottom {
          0%,19% {
            stroke:#375b51
          }
          20%,68% {
            stroke:#375b51
          }
          69%,100% {
            stroke:#70edb1
          }
        }
        @keyframes broken {
          0%,49% {
            opacity:1;
            stroke-dasharray:none
          }
          50%,100% {
            opacity:.3;
            stroke-dasharray:3 3
          }
        }
        @keyframes block {
          0%,19% {
            opacity:0
          }
          20%,68% {
            opacity:1
          }
          69%,100% {
            opacity:0
          }
        }
        @keyframes failure {
          0%,49% {
            opacity:0
          }
          50%,100% {
            opacity:1
          }
        }
        @keyframes crown {
          0%,19% {
            opacity:0
          }
          20%,100% {
            opacity:1
          }
        }
        @keyframes newcost {
          0%,68% {
            opacity:0
          }
          69%,100% {
            opacity:1
          }
        }
        @keyframes p1 {
          0%,3% {
            opacity:0;
            transform:translate(0,0)
          }
          4% {
            opacity:1;
            transform:translate(0,0)
          }
          18% {
            opacity:1;
            transform:translate(-46px,83px)
          }
          18.1%,100% {
            opacity:0
          }
        }
        @keyframes p2 {
          0%,3% {
            opacity:0;
            transform:translate(0,0)
          }
          4% {
            opacity:1;
            transform:translate(0,0)
          }
          18% {
            opacity:1;
            transform:translate(46px,83px)
          }
          18.1%,100% {
            opacity:0
          }
        }
        @keyframes d1 {
          0%,27% {
            opacity:0;
            transform:translate(0,0)
          }
          28% {
            opacity:1;
            transform:translate(0,0)
          }
          43% {
            opacity:1;
            transform:translate(-46px,83px)
          }
          43.1%,74% {
            opacity:0;
            transform:translate(0,0)
          }
          75% {
            opacity:1;
            transform:translate(0,0)
          }
          84% {
            opacity:1;
            transform:translate(-46px,83px)
          }
          94% {
            opacity:1;
            transform:translate(46px,83px)
          }
          94.1%,100% {
            opacity:0
          }
        }
        @keyframes d2 {
          0%,27% {
            opacity:0;
            transform:translate(0,0)
          }
          28% {
            opacity:1;
            transform:translate(0,0)
          }
          43% {
            opacity:1;
            transform:translate(46px,83px)
          }
          43.1%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Spanning Tree Protocol">
        <path class="ink stable" d="M70 24L24 107"/>
        <path class="ink broken" d="M70 24L116 107"/>
        <path class="ink bottom" d="M24 107H116"/>
        <path class="block" d="M103 100V114"/>
        <path class="failure" d="M86 64L100 76M100 64L86 76"/>
        <g class="ink paper">
          <circle cx="70" cy="24" r="12"/>
          <circle cx="24" cy="107" r="12"/>
          <circle cx="116" cy="107" r="12"/>
        </g>
        <text x="70" y="28">A</text>
        <text x="24" y="111">B</text>
        <text x="116" y="111">C</text>
        <path class="crown" d="M61 7L61 1L66 5L70 0L74 5L79 1V7Z"/>
        <text x="31" y="62">4</text>
        <text class="old-cost" x="110" y="62">4</text>
        <text class="new-cost" x="70" y="124">path cost 8</text>
        <circle class="warm bpdu p1" cx="70" cy="24" r="3"/>
        <circle class="warm bpdu p2" cx="70" cy="24" r="3"/>
        <circle class="cool data d1" cx="70" cy="24" r="3"/>
        <circle class="cool data d2" cx="70" cy="24" r="3"/>
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

if (!customElements.get("concept-spanning-tree-protocol")) {
  customElements.define("concept-spanning-tree-protocol", ConceptSpanningTreeProtocol);
}
