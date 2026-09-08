// Augmenting-Path Max Flow. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAugmentingPathMaxFlow extends HTMLElement {
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
        .fSA {
          opacity:1;
          animation:fSA 10s steps(1,end) infinite;
        }
        @keyframes fSA {
          0% {
            opacity:0;
          }
          25% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .fSB {
          opacity:1;
          animation:fSB 10s steps(1,end) infinite;
        }
        @keyframes fSB {
          0% {
            opacity:0;
          }
          66% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .fAB {
          opacity:0;
          animation:fAB 10s steps(1,end) infinite;
        }
        @keyframes fAB {
          0% {
            opacity:0;
          }
          25% {
            opacity:1;
          }
          66%,100% {
            opacity:0;
          }
        }
        .fAT {
          opacity:1;
          animation:fAT 10s steps(1,end) infinite;
        }
        @keyframes fAT {
          0% {
            opacity:0;
          }
          66% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .fBT {
          opacity:1;
          animation:fBT 10s steps(1,end) infinite;
        }
        @keyframes fBT {
          0% {
            opacity:0;
          }
          25% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e1f0e6;
          text-anchor:middle;
        }
        .pipe {
          fill:none;
          stroke:#26483b;
          stroke-width:8;
        }
        .flow {
          fill:none;
          stroke:#70edb1;
          stroke-width:4;
        }
        .forward,.residual {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          stroke-dasharray:1;
          opacity:0;
        }
        .forward {
          animation:forward 10s linear infinite;
        }
        .residual {
          animation:residual 10s linear infinite;
        }
        .reverse {
          fill:none;
          stroke:#77c9ef;
          stroke-width:2;
          opacity:0;
          animation:reverse-edge 10s steps(1,end) infinite;
        }
        .capacity {
          fill:none;
          stroke:#527563;
          stroke-width:1;
        }
        .unit {
          fill:#70edb1;
        }
        .u1 {
          animation:u1 10s steps(1,end) infinite;
        }
        .u2 {
          animation:u2 10s steps(1,end) infinite;
        }
        @keyframes forward {
          0%,8% {
            opacity:0;
            stroke-dashoffset:1;
          }
          10% {
            opacity:1;
            stroke-dashoffset:1;
          }
          24% {
            opacity:1;
            stroke-dashoffset:0;
          }
          25%,100% {
            opacity:0;
            stroke-dashoffset:0;
          }
        }
        @keyframes residual {
          0%,44% {
            opacity:0;
            stroke-dashoffset:1;
          }
          46% {
            opacity:1;
            stroke-dashoffset:1;
          }
          64% {
            opacity:1;
            stroke-dashoffset:0;
          }
          66%,100% {
            opacity:0;
            stroke-dashoffset:0;
          }
        }
        @keyframes reverse-edge {
          0% {
            opacity:0;
          }
          52% {
            opacity:1;
          }
          66%,100% {
            opacity:0;
          }
        }
        @keyframes u1 {
          0% {
            opacity:0;
          }
          25%,100% {
            opacity:1;
          }
        }
        @keyframes u2 {
          0% {
            opacity:0;
          }
          66%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Augmenting-Path Max Flow">
        <defs>
          <marker id="direction" markerWidth="4" markerHeight="4" refX="7" refY="3" viewBox="0 0 8 6" orient="auto">
            <path class="solid" d="M0 0L8 3L0 6Z"/>
          </marker>
        </defs>
        <path class="pipe" d="M18 70L70 26"/>
        <path class="flow fSA" d="M18 70L70 26"/>
        <path class="pipe" d="M18 70L70 114"/>
        <path class="flow fSB" d="M18 70L70 114"/>
        <path class="pipe" d="M70 26L70 114"/>
        <path class="flow fAB" d="M70 26L70 114"/>
        <path class="pipe" d="M70 26L122 70"/>
        <path class="flow fAT" d="M70 26L122 70"/>
        <path class="pipe" d="M70 114L122 70"/>
        <path class="flow fBT" d="M70 114L122 70"/>
        <path class="forward" pathLength="1" d="M18 70L70 26V114L122 70"/>
        <path class="residual" pathLength="1" d="M18 70L70 114Q78 114 78 104V36Q78 26 70 26L122 70"/>
        <path class="reverse" marker-end="url(#direction)" d="M78 87V53"/>
        <circle class="ink paper" cx="18" cy="70" r="9"/>
        <text x="18" y="74">S</text>
        <circle class="ink paper" cx="70" cy="26" r="9"/>
        <text x="70" y="30">A</text>
        <circle class="ink paper" cx="70" cy="114" r="9"/>
        <text x="70" y="118">B</text>
        <circle class="ink paper" cx="122" cy="70" r="9"/>
        <text x="122" y="74">T</text>
        <rect class="capacity" x="53" y="129" width="14" height="6"/>
        <rect class="capacity" x="73" y="129" width="14" height="6"/>
        <rect class="unit u1" x="54" y="130" width="12" height="4"/>
        <rect class="unit u2" x="74" y="130" width="12" height="4"/>
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

if (!customElements.get("concept-augmenting-path-max-flow")) {
  customElements.define("concept-augmenting-path-max-flow", ConceptAugmentingPathMaxFlow);
}
