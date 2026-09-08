// Adsorption Breakthrough. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAdsorptionBreakthrough extends HTMLElement {
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
        .column {
          fill:none;
          stroke:#93b5a8;
          stroke-width:2
        }
        .grain {
          fill:#2f403b;
          stroke:#62766a;
          stroke-width:1.5
        }
        .pores {
          fill:#10261e
        }
        .carrier {
          fill:none;
          stroke:#447989;
          stroke-width:1.5;
          stroke-dasharray:4 12;
          animation:carrier 3s linear infinite
        }
        .contaminant {
          fill:#edc67e;
          stroke:#ac925f;
          stroke-width:.6
        }
        .run {
          animation:reset 18s linear infinite
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          3%,97% {
            opacity:1
          }
        }
        @keyframes carrier {
          to {
            stroke-dashoffset:-32
          }
        }
        .capture0 {
          transform:translate(59px,42px);
          animation:capture0 18s linear infinite
        }
        @keyframes capture0 {
          0%,3.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          4% {
            opacity:1;
            transform:translate(70px,10px)
          }
          17% {
            opacity:1;
            transform:translate(70px,42px)
          }
          20%,100% {
            opacity:1;
            transform:translate(59px,42px)
          }
        }
        .capture1 {
          transform:translate(81px,42px);
          animation:capture1 18s linear infinite
        }
        @keyframes capture1 {
          0%,13.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          14% {
            opacity:1;
            transform:translate(70px,10px)
          }
          27% {
            opacity:1;
            transform:translate(70px,42px)
          }
          30%,100% {
            opacity:1;
            transform:translate(81px,42px)
          }
        }
        .capture2 {
          transform:translate(59px,68px);
          animation:capture2 18s linear infinite
        }
        @keyframes capture2 {
          0%,23.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          24% {
            opacity:1;
            transform:translate(70px,10px)
          }
          37% {
            opacity:1;
            transform:translate(70px,68px)
          }
          40%,100% {
            opacity:1;
            transform:translate(59px,68px)
          }
        }
        .capture3 {
          transform:translate(81px,68px);
          animation:capture3 18s linear infinite
        }
        @keyframes capture3 {
          0%,33.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          34% {
            opacity:1;
            transform:translate(70px,10px)
          }
          47% {
            opacity:1;
            transform:translate(70px,68px)
          }
          50%,100% {
            opacity:1;
            transform:translate(81px,68px)
          }
        }
        .capture4 {
          transform:translate(59px,94px);
          animation:capture4 18s linear infinite
        }
        @keyframes capture4 {
          0%,45.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          46% {
            opacity:1;
            transform:translate(70px,10px)
          }
          59% {
            opacity:1;
            transform:translate(70px,94px)
          }
          62%,100% {
            opacity:1;
            transform:translate(59px,94px)
          }
        }
        .capture5 {
          transform:translate(81px,94px);
          animation:capture5 18s linear infinite
        }
        @keyframes capture5 {
          0%,65.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          66% {
            opacity:1;
            transform:translate(70px,10px)
          }
          79% {
            opacity:1;
            transform:translate(70px,94px)
          }
          82%,100% {
            opacity:1;
            transform:translate(81px,94px)
          }
        }
        .breakthrough0 {
          opacity:0;
          animation:breakthrough0 18s linear infinite
        }
        @keyframes breakthrough0 {
          0%,59.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          60% {
            opacity:1;
            transform:translate(70px,10px)
          }
          77% {
            opacity:1;
            transform:translate(70px,121px)
          }
          78% {
            opacity:.5;
            transform:translate(70px,127px)
          }
          79%,100% {
            opacity:0;
            transform:translate(70px,131px)
          }
        }
        .breakthrough1 {
          opacity:0;
          animation:breakthrough1 18s linear infinite
        }
        @keyframes breakthrough1 {
          0%,79.99% {
            opacity:0;
            transform:translate(70px,10px)
          }
          80% {
            opacity:1;
            transform:translate(70px,10px)
          }
          97% {
            opacity:1;
            transform:translate(70px,121px)
          }
          98% {
            opacity:.5;
            transform:translate(70px,127px)
          }
          99%,100% {
            opacity:0;
            transform:translate(70px,131px)
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .breakthrough0 {
            opacity:1;
            transform:translate(70px,125px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Adsorption Breakthrough">
        <path class="column" d="M27,20V112M113,20V112"/>
        <path class="carrier" d="M70,12V126" pathLength="100"/>
        <g class="run">
          <circle class="grain" cx="45" cy="42" r="11"/>
          <g class="pores">
            <circle cx="41" cy="39" r="2"/>
            <circle cx="49" cy="40" r="1.5"/>
            <circle cx="45" cy="46" r="2"/>
          </g>
          <circle class="grain" cx="95" cy="42" r="11"/>
          <g class="pores">
            <circle cx="91" cy="39" r="2"/>
            <circle cx="99" cy="40" r="1.5"/>
            <circle cx="95" cy="46" r="2"/>
          </g>
          <circle class="grain" cx="45" cy="68" r="11"/>
          <g class="pores">
            <circle cx="41" cy="65" r="2"/>
            <circle cx="49" cy="66" r="1.5"/>
            <circle cx="45" cy="72" r="2"/>
          </g>
          <circle class="grain" cx="95" cy="68" r="11"/>
          <g class="pores">
            <circle cx="91" cy="65" r="2"/>
            <circle cx="99" cy="66" r="1.5"/>
            <circle cx="95" cy="72" r="2"/>
          </g>
          <circle class="grain" cx="45" cy="94" r="11"/>
          <g class="pores">
            <circle cx="41" cy="91" r="2"/>
            <circle cx="49" cy="92" r="1.5"/>
            <circle cx="45" cy="98" r="2"/>
          </g>
          <circle class="grain" cx="95" cy="94" r="11"/>
          <g class="pores">
            <circle cx="91" cy="91" r="2"/>
            <circle cx="99" cy="92" r="1.5"/>
            <circle cx="95" cy="98" r="2"/>
          </g>
          <circle class="contaminant capture0" r="2.5"/>
          <circle class="contaminant capture1" r="2.5"/>
          <circle class="contaminant capture2" r="2.5"/>
          <circle class="contaminant capture3" r="2.5"/>
          <circle class="contaminant capture4" r="2.5"/>
          <circle class="contaminant capture5" r="2.5"/>
          <circle class="contaminant breakthrough0" r="2.5"/>
          <circle class="contaminant breakthrough1" r="2.5"/>
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

if (!customElements.get("concept-adsorption-breakthrough")) {
  customElements.define("concept-adsorption-breakthrough", ConceptAdsorptionBreakthrough);
}
