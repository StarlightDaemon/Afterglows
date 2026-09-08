// Retinal Center-Surround Response. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRetinalCenterSurroundResponse extends HTMLElement {
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
        .field {
          fill:#25463b;
          stroke:#9cbaa0;
          stroke-width:1.5;
          stroke-dasharray:3 2
        }
        .center-light,.uniform-light {
          fill:#edd48c
        }
        .center-light {
          opacity:1;
          animation:center 12s steps(1) infinite
        }
        .ring-light {
          fill:none;
          stroke:#edd48c;
          stroke-width:17;
          opacity:0;
          animation:ring 12s steps(1) infinite
        }
        .uniform-light {
          opacity:0;
          animation:uniform 12s steps(1) infinite
        }
        .link {
          fill:none;
          stroke:#658376;
          stroke-width:1;
          stroke-dasharray:2 3
        }
        .soma {
          fill:#5d7790;
          stroke:#a7b6c7;
          stroke-width:1
        }
        .axon {
          fill:none;
          stroke:#728d8d;
          stroke-width:2
        }
        .spike {
          fill:none;
          stroke:#e9d286;
          stroke-width:1.7;
          opacity:0
        }
        text {
          fill:#bdd1bf;
          font:8px serif;
          text-anchor:middle
        }
        @keyframes center {
          0% {
            opacity:0
          }
          20% {
            opacity:1
          }
          43%,100% {
            opacity:0
          }
        }
        @keyframes ring {
          0% {
            opacity:0
          }
          45% {
            opacity:1
          }
          67%,100% {
            opacity:0
          }
        }
        @keyframes uniform {
          0% {
            opacity:0
          }
          70% {
            opacity:.75
          }
          92%,100% {
            opacity:0
          }
        }
        .p0 {
          animation:p0 12s linear infinite
        }
        @keyframes p0 {
          0%,7%,13.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          7.1% {
            opacity:1;
            transform:translateX(0)
          }
          13% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p1 {
          animation:p1 12s linear infinite
        }
        @keyframes p1 {
          0%,23%,29.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          23.1% {
            opacity:1;
            transform:translateX(0)
          }
          29% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p2 {
          animation:p2 12s linear infinite
        }
        @keyframes p2 {
          0%,26%,32.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          26.1% {
            opacity:1;
            transform:translateX(0)
          }
          32% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p3 {
          animation:p3 12s linear infinite
        }
        @keyframes p3 {
          0%,29%,35.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          29.1% {
            opacity:1;
            transform:translateX(0)
          }
          35% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p4 {
          animation:p4 12s linear infinite
        }
        @keyframes p4 {
          0%,32%,38.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          32.1% {
            opacity:1;
            transform:translateX(0)
          }
          38% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p5 {
          animation:p5 12s linear infinite
        }
        @keyframes p5 {
          0%,35%,41.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          35.1% {
            opacity:1;
            transform:translateX(0)
          }
          41% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p6 {
          animation:p6 12s linear infinite
        }
        @keyframes p6 {
          0%,38%,44.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          38.1% {
            opacity:1;
            transform:translateX(0)
          }
          44% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p7 {
          animation:p7 12s linear infinite
        }
        @keyframes p7 {
          0%,74%,80.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          74.1% {
            opacity:1;
            transform:translateX(0)
          }
          80% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        .p8 {
          animation:p8 12s linear infinite
        }
        @keyframes p8 {
          0%,82%,88.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
          82.1% {
            opacity:1;
            transform:translateX(0)
          }
          88% {
            opacity:1;
            transform:translateX(75px)
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .p2 {
            opacity:1;
            transform:translateX(20px)
          }
          .p3 {
            opacity:1;
            transform:translateX(45px)
          }
          .p4 {
            opacity:1;
            transform:translateX(70px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Retinal Center-Surround Response">
        <circle class="field" cx="70" cy="49" r="32"/>
        <circle class="center-light" cx="70" cy="49" r="12"/>
        <circle class="ring-light" cx="70" cy="49" r="23"/>
        <circle class="uniform-light" cx="70" cy="49" r="32"/>
        <circle class="ink" cx="70" cy="49" r="12"/>
        <path class="link" d="M70 84L25 100"/>
        <text x="70" y="10">ON center</text>
        <circle class="soma" cx="25" cy="110" r="8"/>
        <path class="axon" d="M32 110H128"/>
        <path class="spike p0" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p1" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p2" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p3" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p4" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p5" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p6" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p7" d="M35 110L38 110L40 102L43 117L46 110H49"/>
        <path class="spike p8" d="M35 110L38 110L40 102L43 117L46 110H49"/>
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

if (!customElements.get("concept-retinal-center-surround-response")) {
  customElements.define("concept-retinal-center-surround-response", ConceptRetinalCenterSurroundResponse);
}
