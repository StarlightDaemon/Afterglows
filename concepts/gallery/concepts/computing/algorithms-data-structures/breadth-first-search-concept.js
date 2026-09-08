// Breadth-First Search. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBreadthFirstSearch extends HTMLElement {
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
        .eAB {
          animation:eAB 9s steps(1,end) infinite;
        }
        @keyframes eAB {
          0% {
            opacity:0;
          }
          12%,100% {
            opacity:1;
          }
        }
        .eAC {
          animation:eAC 9s steps(1,end) infinite;
        }
        @keyframes eAC {
          0% {
            opacity:0;
          }
          12%,100% {
            opacity:1;
          }
        }
        .eBD {
          animation:eBD 9s steps(1,end) infinite;
        }
        @keyframes eBD {
          0% {
            opacity:0;
          }
          28%,100% {
            opacity:1;
          }
        }
        .eBE {
          animation:eBE 9s steps(1,end) infinite;
        }
        @keyframes eBE {
          0% {
            opacity:0;
          }
          28%,100% {
            opacity:1;
          }
        }
        .eCF {
          animation:eCF 9s steps(1,end) infinite;
        }
        @keyframes eCF {
          0% {
            opacity:0;
          }
          44%,100% {
            opacity:1;
          }
        }
        .nA circle {
          fill:#70edb1;
          animation:nA 9s steps(1,end) infinite;
        }
        @keyframes nA {
          0% {
            fill:#19392f;
          }
          12%,100% {
            fill:#70edb1;
          }
        }
        .nB circle {
          fill:#70edb1;
          animation:nB 9s steps(1,end) infinite;
        }
        @keyframes nB {
          0% {
            fill:#19392f;
          }
          28%,100% {
            fill:#70edb1;
          }
        }
        .nC circle {
          fill:#70edb1;
          animation:nC 9s steps(1,end) infinite;
        }
        @keyframes nC {
          0% {
            fill:#19392f;
          }
          44%,100% {
            fill:#70edb1;
          }
        }
        .nD circle {
          fill:#70edb1;
          animation:nD 9s steps(1,end) infinite;
        }
        @keyframes nD {
          0% {
            fill:#19392f;
          }
          60%,100% {
            fill:#70edb1;
          }
        }
        .nE circle {
          fill:#70edb1;
          animation:nE 9s steps(1,end) infinite;
        }
        @keyframes nE {
          0% {
            fill:#19392f;
          }
          74%,100% {
            fill:#70edb1;
          }
        }
        .nF circle {
          fill:#70edb1;
          animation:nF 9s steps(1,end) infinite;
        }
        @keyframes nF {
          0% {
            fill:#19392f;
          }
          86%,100% {
            fill:#70edb1;
          }
        }
        .qA {
          opacity:0;
          animation:qA 9s steps(1,end) infinite;
        }
        @keyframes qA {
          0% {
            opacity:1;
            transform:translateX(0px);
          }
          12% {
            opacity:0;
            transform:translateX(0px);
          }
          28% {
            opacity:0;
            transform:translateX(0px);
          }
          44% {
            opacity:0;
            transform:translateX(0px);
          }
          60% {
            opacity:0;
            transform:translateX(0px);
          }
          74% {
            opacity:0;
            transform:translateX(0px);
          }
          86% {
            opacity:0;
            transform:translateX(0px);
          }
          100% {
            opacity:0;
          }
        }
        .qB {
          opacity:0;
          animation:qB 9s steps(1,end) infinite;
        }
        @keyframes qB {
          0% {
            opacity:0;
            transform:translateX(0px);
          }
          12% {
            opacity:1;
            transform:translateX(0px);
          }
          28% {
            opacity:0;
            transform:translateX(0px);
          }
          44% {
            opacity:0;
            transform:translateX(0px);
          }
          60% {
            opacity:0;
            transform:translateX(0px);
          }
          74% {
            opacity:0;
            transform:translateX(0px);
          }
          86% {
            opacity:0;
            transform:translateX(0px);
          }
          100% {
            opacity:0;
          }
        }
        .qC {
          opacity:0;
          animation:qC 9s steps(1,end) infinite;
        }
        @keyframes qC {
          0% {
            opacity:0;
            transform:translateX(0px);
          }
          12% {
            opacity:1;
            transform:translateX(20px);
          }
          28% {
            opacity:1;
            transform:translateX(0px);
          }
          44% {
            opacity:0;
            transform:translateX(0px);
          }
          60% {
            opacity:0;
            transform:translateX(0px);
          }
          74% {
            opacity:0;
            transform:translateX(0px);
          }
          86% {
            opacity:0;
            transform:translateX(0px);
          }
          100% {
            opacity:0;
          }
        }
        .qD {
          opacity:0;
          animation:qD 9s steps(1,end) infinite;
        }
        @keyframes qD {
          0% {
            opacity:0;
            transform:translateX(0px);
          }
          12% {
            opacity:0;
            transform:translateX(0px);
          }
          28% {
            opacity:1;
            transform:translateX(20px);
          }
          44% {
            opacity:1;
            transform:translateX(0px);
          }
          60% {
            opacity:0;
            transform:translateX(0px);
          }
          74% {
            opacity:0;
            transform:translateX(0px);
          }
          86% {
            opacity:0;
            transform:translateX(0px);
          }
          100% {
            opacity:0;
          }
        }
        .qE {
          opacity:0;
          animation:qE 9s steps(1,end) infinite;
        }
        @keyframes qE {
          0% {
            opacity:0;
            transform:translateX(0px);
          }
          12% {
            opacity:0;
            transform:translateX(0px);
          }
          28% {
            opacity:1;
            transform:translateX(40px);
          }
          44% {
            opacity:1;
            transform:translateX(20px);
          }
          60% {
            opacity:1;
            transform:translateX(0px);
          }
          74% {
            opacity:0;
            transform:translateX(0px);
          }
          86% {
            opacity:0;
            transform:translateX(0px);
          }
          100% {
            opacity:0;
          }
        }
        .qF {
          opacity:0;
          animation:qF 9s steps(1,end) infinite;
        }
        @keyframes qF {
          0% {
            opacity:0;
            transform:translateX(0px);
          }
          12% {
            opacity:0;
            transform:translateX(0px);
          }
          28% {
            opacity:0;
            transform:translateX(0px);
          }
          44% {
            opacity:1;
            transform:translateX(40px);
          }
          60% {
            opacity:1;
            transform:translateX(20px);
          }
          74% {
            opacity:1;
            transform:translateX(0px);
          }
          86% {
            opacity:0;
            transform:translateX(0px);
          }
          100% {
            opacity:0;
          }
        }
        text {
          font:10px ui-monospace,monospace;
          text-anchor:middle;
          fill:#e0f2e9;
        }
        .node circle {
          stroke:#70edb1;
          stroke-width:1.3;
        }
        .node text {
          paint-order:stroke;
          stroke:#07120f;
          stroke-width:2px;
        }
        .skip {
          fill:none;
          stroke:#ed8eab;
          stroke-width:2;
          opacity:0;
        }
        .skip-c {
          animation:skipc 9s steps(1,end) infinite;
        }
        .skip-e {
          animation:skipe 9s steps(1,end) infinite;
        }
        @keyframes skipc {
          0% {
            opacity:0;
          }
          44% {
            opacity:1;
          }
          58%,100% {
            opacity:0;
          }
        }
        @keyframes skipe {
          0% {
            opacity:0;
          }
          74% {
            opacity:1;
          }
          84%,100% {
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Breadth-First Search">
        <path class="ink muted" d="M70 20L35 49"/>
        <path class="ink tree eAB" d="M70 20L35 49"/>
        <path class="ink muted" d="M70 20L105 49"/>
        <path class="ink tree eAC" d="M70 20L105 49"/>
        <path class="ink muted" d="M35 49L18 81"/>
        <path class="ink tree eBD" d="M35 49L18 81"/>
        <path class="ink muted" d="M35 49L70 81"/>
        <path class="ink tree eBE" d="M35 49L70 81"/>
        <path class="ink muted" d="M105 49L70 81"/>
        <path class="ink muted" d="M105 49L121 81"/>
        <path class="ink tree eCF" d="M105 49L121 81"/>
        <path class="ink muted" d="M70 81L121 81"/>
        <g class="node nA">
          <circle cx="70" cy="20" r="8"/>
          <text x="70" y="23.5">A</text>
        </g>
        <g class="node nB">
          <circle cx="35" cy="49" r="8"/>
          <text x="35" y="52.5">B</text>
        </g>
        <g class="node nC">
          <circle cx="105" cy="49" r="8"/>
          <text x="105" y="52.5">C</text>
        </g>
        <g class="node nD">
          <circle cx="18" cy="81" r="8"/>
          <text x="18" y="84.5">D</text>
        </g>
        <g class="node nE">
          <circle cx="70" cy="81" r="8"/>
          <text x="70" y="84.5">E</text>
        </g>
        <g class="node nF">
          <circle cx="121" cy="81" r="8"/>
          <text x="121" y="84.5">F</text>
        </g>
        <path class="skip skip-c" d="M83 61l6 6m-6 0l6 -6"/>
        <path class="skip skip-e" d="M92 77l6 6m-6 0l6 -6"/>
        <path class="ink muted" d="M12 105H128V128H12Z M12 116H5m3 -3l-3 3l3 3"/>
        <rect fill="#77c9ef18" x="13" y="106" width="19" height="21"/>
        <g class="q qA">
          <circle class="paper ink" cx="22" cy="116" r="7"/>
          <text x="22" y="119.5">A</text>
        </g>
        <g class="q qB">
          <circle class="paper ink" cx="22" cy="116" r="7"/>
          <text x="22" y="119.5">B</text>
        </g>
        <g class="q qC">
          <circle class="paper ink" cx="22" cy="116" r="7"/>
          <text x="22" y="119.5">C</text>
        </g>
        <g class="q qD">
          <circle class="paper ink" cx="22" cy="116" r="7"/>
          <text x="22" y="119.5">D</text>
        </g>
        <g class="q qE">
          <circle class="paper ink" cx="22" cy="116" r="7"/>
          <text x="22" y="119.5">E</text>
        </g>
        <g class="q qF">
          <circle class="paper ink" cx="22" cy="116" r="7"/>
          <text x="22" y="119.5">F</text>
        </g>
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

if (!customElements.get("concept-breadth-first-search")) {
  customElements.define("concept-breadth-first-search", ConceptBreadthFirstSearch);
}
