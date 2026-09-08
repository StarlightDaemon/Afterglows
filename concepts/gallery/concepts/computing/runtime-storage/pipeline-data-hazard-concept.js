// Pipeline Data Hazard. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPipelineDataHazard extends HTMLElement {
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
          font:9px monospace;
          text-anchor:middle
        }
        .dark {
          fill:#07120f;
          font-size:9px
        }
        .load {
          animation:load 11s infinite
        }
        .add {
          transform:translateX(-50px);
          animation:add 11s infinite
        }
        .bubble {
          stroke:#ed8eab;
          transform:translateX(25px);
          animation:bubble 11s infinite
        }
        .forward {
          stroke:#70edb1;
          animation:forward 11s infinite
        }
        .hold {
          fill:#f3c977;
          animation:hold 11s infinite
        }
        .ghost {
          fill:none;
          stroke:#f3c977;
          stroke-width:1;
          stroke-dasharray:2 2;
          opacity:.5;
          animation:ghost 11s infinite
        }
        .result {
          animation:result 11s infinite
        }
        @keyframes load {
          0%,7.9% {
            opacity:0;
            transform:translateX(-100px)
          }
          8%,19.9% {
            opacity:1;
            transform:translateX(-100px)
          }
          20%,31.9% {
            opacity:1;
            transform:translateX(-75px)
          }
          32%,43.9% {
            opacity:1;
            transform:translateX(-50px)
          }
          44%,55.9% {
            opacity:1;
            transform:translateX(-25px)
          }
          56%,67.9% {
            opacity:1;
            transform:translateX(0)
          }
          68%,100% {
            opacity:0;
            transform:translateX(0)
          }
        }
        @keyframes add {
          0%,19.9% {
            opacity:0;
            transform:translateX(-100px)
          }
          20%,31.9% {
            opacity:1;
            transform:translateX(-100px)
          }
          32%,55.9% {
            opacity:1;
            transform:translateX(-75px)
          }
          56%,67.9% {
            opacity:1;
            transform:translateX(-50px)
          }
          68%,79.9% {
            opacity:1;
            transform:translateX(-25px)
          }
          80%,100% {
            opacity:1;
            transform:translateX(0)
          }
        }
        @keyframes bubble {
          0%,43.9% {
            opacity:0;
            transform:translateX(0)
          }
          44%,55.9% {
            opacity:1;
            transform:translateX(0)
          }
          56%,67.9% {
            opacity:1;
            transform:translateX(25px)
          }
          68%,79.9% {
            opacity:1;
            transform:translateX(50px)
          }
          80%,100% {
            opacity:0;
            transform:translateX(50px)
          }
        }
        @keyframes forward {
          0%,55.9% {
            opacity:0
          }
          56%,67.9% {
            opacity:1
          }
          68%,100% {
            opacity:.25
          }
        }
        @keyframes hold {
          0%,43.9% {
            opacity:0
          }
          44%,55.9% {
            opacity:1
          }
          56%,100% {
            opacity:.4
          }
        }
        @keyframes ghost {
          0%,55.9% {
            opacity:0
          }
          56%,100% {
            opacity:.5
          }
        }
        @keyframes result {
          0%,67.9% {
            opacity:0
          }
          68%,100% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pipeline Data Hazard">
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
            <path class="solid" d="M0 0L6 3L0 6Z"/>
          </marker>
        </defs>
        <rect class="ink muted" x="4" y="16" width="22" height="109" rx="3"/>
        <text x="15" y="29">IF</text>
        <rect class="ink muted" x="29" y="16" width="22" height="109" rx="3"/>
        <text x="40" y="29">ID</text>
        <rect class="ink muted" x="54" y="16" width="22" height="109" rx="3"/>
        <text x="65" y="29">EX</text>
        <rect class="ink muted" x="79" y="16" width="22" height="109" rx="3"/>
        <text x="90" y="29">MEM</text>
        <rect class="ink muted" x="104" y="16" width="22" height="109" rx="3"/>
        <text x="115" y="29">WB</text>
        <g class="load">
          <rect class="cool" x="104" y="41" width="22" height="16" rx="2"/>
          <text class="dark" x="115" y="53">lw</text>
        </g>
        <g class="add">
          <rect class="warm" x="104" y="82" width="22" height="16" rx="2"/>
          <text class="dark" x="115" y="94">add</text>
        </g>
        <rect class="ghost" x="29" y="82" width="22" height="16" rx="2"/>
        <text class="hold" x="40" y="76">+1</text>
        <circle class="ink bubble" cx="65" cy="115" r="7"/>
        <path class="ink forward" marker-end="url(#arrow)" d="M115 57V66H65V80"/>
        <text class="forward" x="89" y="63">7</text>
        <text class="result" x="70" y="138">7 + 5 → 12</text>
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

if (!customElements.get("concept-pipeline-data-hazard")) {
  customElements.define("concept-pipeline-data-hazard", ConceptPipelineDataHazard);
}
