// DNA Gel Electrophoresis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDnaGelElectrophoresis extends HTMLElement {
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
        .gel {
          fill:#23483f;
          stroke:#79a796;
          stroke-width:1.5
        }
        .pores {
          fill:none;
          stroke:#578473;
          stroke-width:1;
          stroke-dasharray:1 7;
          opacity:.45
        }
        .wells {
          fill:#091914;
          stroke:#a1b8a4;
          stroke-width:1.5
        }
        .band {
          fill:none;
          stroke:#c8df9c;
          stroke-width:3;
          stroke-linecap:round
        }
        .electrode {
          stroke:#a0a8a6;
          stroke-width:2
        }
        .sign {
          stroke:#e6c981;
          stroke-width:1.4
        }
        .direction {
          fill:none;
          stroke:#8ec1ac;
          stroke-width:1.5
        }
        .ladder0 {
          animation:ladder0 12s linear infinite
        }
        @keyframes ladder0 {
          0%,10% {
            transform:translateY(-12px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .ladder1 {
          animation:ladder1 12s linear infinite
        }
        @keyframes ladder1 {
          0%,10% {
            transform:translateY(-21px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .ladder2 {
          animation:ladder2 12s linear infinite
        }
        @keyframes ladder2 {
          0%,10% {
            transform:translateY(-34px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .ladder3 {
          animation:ladder3 12s linear infinite
        }
        @keyframes ladder3 {
          0%,10% {
            transform:translateY(-47px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .ladder4 {
          animation:ladder4 12s linear infinite
        }
        @keyframes ladder4 {
          0%,10% {
            transform:translateY(-63px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .ladder5 {
          animation:ladder5 12s linear infinite
        }
        @keyframes ladder5 {
          0%,10% {
            transform:translateY(-80px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .sample0 {
          animation:sample0 12s linear infinite
        }
        @keyframes sample0 {
          0%,10% {
            transform:translateY(-25px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .sample1 {
          animation:sample1 12s linear infinite
        }
        @keyframes sample1 {
          0%,10% {
            transform:translateY(-49px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
            opacity:0
          }
        }
        .sample2 {
          animation:sample2 12s linear infinite
        }
        @keyframes sample2 {
          0%,10% {
            transform:translateY(-77px);
            opacity:1
          }
          80%,94% {
            transform:translateY(0);
            opacity:1
          }
          99%,100% {
            transform:translateY(0);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="DNA Gel Electrophoresis">
        <rect class="gel" x="22" y="24" width="96" height="94" rx="3"/>
        <path class="pores" d="M30 44H111M30 65H111M30 87H111M30 107H111M60 36V113M104 36V113"/>
        <path class="wells" d="M34 27V33H52V27M78 27V33H96V27"/>
        <path class="band ladder0" d="M36 43H50"/>
        <path class="band ladder1" d="M36 52H50"/>
        <path class="band ladder2" d="M36 65H50"/>
        <path class="band ladder3" d="M36 78H50"/>
        <path class="band ladder4" d="M36 94H50"/>
        <path class="band ladder5" d="M36 111H50"/>
        <path class="band sample0" d="M80 56H94"/>
        <path class="band sample1" d="M80 80H94"/>
        <path class="band sample2" d="M80 108H94"/>
        <path class="electrode" d="M23 15H117M23 124H117"/>
        <path class="sign" d="M65 8H75M65 132H75M70 128V136"/>
        <path class="direction" d="M11 45V105M7 100L11 105L15 100"/>
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

if (!customElements.get("concept-dna-gel-electrophoresis")) {
  customElements.define("concept-dna-gel-electrophoresis", ConceptDnaGelElectrophoresis);
}
