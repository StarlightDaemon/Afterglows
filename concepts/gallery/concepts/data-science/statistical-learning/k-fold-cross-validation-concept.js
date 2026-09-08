// K-Fold Cross-Validation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKFoldCrossValidation extends HTMLElement {
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
        .r0 {
          opacity:0;
          animation:r0 9s steps(1,end) infinite;
        }
        @keyframes r0 {
          0% {
            opacity:1;
          }
          20% {
            opacity:0;
          }
        }
        .done0 {
          animation:done0 9s steps(1,end) infinite;
        }
        @keyframes done0 {
          0% {
            fill:#243f37;
          }
          16%,100% {
            fill:#70edb1;
          }
        }
        .r1 {
          opacity:0;
          animation:r1 9s steps(1,end) infinite;
        }
        @keyframes r1 {
          0% {
            opacity:0;
          }
          20% {
            opacity:1;
          }
          40% {
            opacity:0;
          }
        }
        .done1 {
          animation:done1 9s steps(1,end) infinite;
        }
        @keyframes done1 {
          0% {
            fill:#243f37;
          }
          36%,100% {
            fill:#70edb1;
          }
        }
        .r2 {
          opacity:0;
          animation:r2 9s steps(1,end) infinite;
        }
        @keyframes r2 {
          0% {
            opacity:0;
          }
          40% {
            opacity:1;
          }
          60% {
            opacity:0;
          }
        }
        .done2 {
          animation:done2 9s steps(1,end) infinite;
        }
        @keyframes done2 {
          0% {
            fill:#243f37;
          }
          56%,100% {
            fill:#70edb1;
          }
        }
        .r3 {
          opacity:0;
          animation:r3 9s steps(1,end) infinite;
        }
        @keyframes r3 {
          0% {
            opacity:0;
          }
          60% {
            opacity:1;
          }
          80% {
            opacity:0;
          }
        }
        .done3 {
          animation:done3 9s steps(1,end) infinite;
        }
        @keyframes done3 {
          0% {
            fill:#243f37;
          }
          76%,100% {
            fill:#70edb1;
          }
        }
        .r4 {
          opacity:1;
          animation:r4 9s steps(1,end) infinite;
        }
        @keyframes r4 {
          0% {
            opacity:0;
          }
          80% {
            opacity:1;
          }
          100% {
            opacity:0;
          }
        }
        .done4 {
          animation:done4 9s steps(1,end) infinite;
        }
        @keyframes done4 {
          0% {
            fill:#243f37;
          }
          96%,100% {
            fill:#70edb1;
          }
        }
        .held {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          stroke-dasharray:3 2;
        }
        .train {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
        }
        .result {
          fill:#70edb1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="K-Fold Cross-Validation">
        <path class="ink muted" d="M18 59H66L49 78H35Z"/>
        <rect class="ink paper" x="30" y="83" width="24" height="19" rx="3"/>
        <path class="ink" d="M36 88h12m-12 4h8m-8 5h12M42 102v7h44"/>
        <rect class="ink paper" x="88" y="89" width="25" height="23" rx="3"/>
        <path class="ink" d="M94 99l5 5l8 -10"/>
        <g class="round r0">
          <rect fill="#f3c977" x="16" y="16" width="17" height="17" rx="2"/>
          <path class="held" d="M24.5 33V42H124V100H113"/>
          <rect fill="#77c9ef" x="38" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M46.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="60" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M68.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="82" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M90.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="104" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M112.5 33V49L42 59"/>
        </g>
        <circle class="result done0" cx="26" cy="125" r="3"/>
        <g class="round r1">
          <rect fill="#77c9ef" x="16" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M24.5 33V49L42 59"/>
          <rect fill="#f3c977" x="38" y="16" width="17" height="17" rx="2"/>
          <path class="held" d="M46.5 33V42H124V100H113"/>
          <rect fill="#77c9ef" x="60" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M68.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="82" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M90.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="104" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M112.5 33V49L42 59"/>
        </g>
        <circle class="result done1" cx="48" cy="125" r="3"/>
        <g class="round r2">
          <rect fill="#77c9ef" x="16" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M24.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="38" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M46.5 33V49L42 59"/>
          <rect fill="#f3c977" x="60" y="16" width="17" height="17" rx="2"/>
          <path class="held" d="M68.5 33V42H124V100H113"/>
          <rect fill="#77c9ef" x="82" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M90.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="104" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M112.5 33V49L42 59"/>
        </g>
        <circle class="result done2" cx="70" cy="125" r="3"/>
        <g class="round r3">
          <rect fill="#77c9ef" x="16" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M24.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="38" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M46.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="60" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M68.5 33V49L42 59"/>
          <rect fill="#f3c977" x="82" y="16" width="17" height="17" rx="2"/>
          <path class="held" d="M90.5 33V42H124V100H113"/>
          <rect fill="#77c9ef" x="104" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M112.5 33V49L42 59"/>
        </g>
        <circle class="result done3" cx="92" cy="125" r="3"/>
        <g class="round r4">
          <rect fill="#77c9ef" x="16" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M24.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="38" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M46.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="60" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M68.5 33V49L42 59"/>
          <rect fill="#77c9ef" x="82" y="16" width="17" height="17" rx="2"/>
          <path class="train" d="M90.5 33V49L42 59"/>
          <rect fill="#f3c977" x="104" y="16" width="17" height="17" rx="2"/>
          <path class="held" d="M112.5 33V42H124V100H113"/>
        </g>
        <circle class="result done4" cx="114" cy="125" r="3"/>
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

if (!customElements.get("concept-k-fold-cross-validation")) {
  customElements.define("concept-k-fold-cross-validation", ConceptKFoldCrossValidation);
}
