// Lac Operon Induction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLacOperonInduction extends HTMLElement {
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
        .dna {
          fill:none;
          stroke:#78a6b7;
          stroke-width:2
        }
        .promoter {
          fill:#a0b489;
          stroke:#c3cfa8;
          stroke-width:1
        }
        .operator {
          fill:#b1946a;
          stroke:#d5bc8c;
          stroke-width:1
        }
        .genes {
          fill:#588975
        }
        .cap {
          fill:#657d6a;
          stroke:#9eb48d;
          stroke-width:1
        }
        .camp {
          fill:#dec381
        }
        .polymerase {
          transform:translateX(70px);
          fill:#729786cc;
          stroke:#bfceac;
          stroke-width:1.3;
          animation:polymerase 12s linear infinite
        }
        .bound-complex {
          transform:translate(12px,-22px);
          animation:release 12s infinite
        }
        .repressor {
          fill:#917189;
          stroke:#c19cac;
          stroke-width:1.5;
          animation:shape 12s infinite
        }
        .inducer {
          fill:#edca7e;
          stroke:#b68b51;
          stroke-width:1;
          animation:bind 12s infinite
        }
        .rna {
          fill:none;
          stroke:#e6c57f;
          stroke-width:2.5;
          animation:rna 12s linear infinite
        }
        text {
          fill:#b9cdb7;
          font:8px serif;
          text-anchor:middle
        }
        @keyframes release {
          0%,40% {
            transform:translate(0,0)
          }
          55%,100% {
            transform:translate(12px,-22px)
          }
        }
        @keyframes shape {
          0%,25% {
            d:path("M48 62C39 46 59 39 62 53C66 39 83 49 75 63L69 66L69 78L64 78L64 66L57 66L57 78L52 78L52 65Z")
          }
          40%,100% {
            d:path("M48 62C39 46 59 39 62 53C66 39 83 49 75 63L72 66L76 74L71 77L66 67L55 67L50 77L45 74L47 66Z")
          }
        }
        @keyframes bind {
          0%,18% {
            transform:translate(30px,-23px)
          }
          32%,100% {
            transform:translate(0,0)
          }
        }
        @keyframes polymerase {
          0%,55% {
            transform:translateX(0)
          }
          85%,100% {
            transform:translateX(70px)
          }
        }
        @keyframes rna {
          0%,55% {
            d:path("M43 85Q43 85 43 85");
            opacity:0
          }
          56% {
            opacity:1
          }
          85%,100% {
            d:path("M18 112Q68 115 113 85");
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Lac Operon Induction">
        <path class="dna" d="M12 80H129M12 86H129"/>
        <rect class="promoter" x="36" y="78" width="13" height="10"/>
        <rect class="operator" x="53" y="78" width="14" height="10"/>
        <path class="genes" d="M75 80H91V86H75ZM96 80H109V86H96ZM114 80H128V86H114Z"/>
        <path class="cap" d="M17 74Q17 63 25 63Q33 63 33 74Z"/>
        <path d="M25 74V80" fill="none" stroke="#9eb48d" stroke-width="2"/>
        <circle class="camp" cx="25" cy="64" r="2.4"/>
        <g class="polymerase">
          <ellipse cx="43" cy="75" rx="10" ry="12"/>
        </g>
        <g class="bound-complex">
          <path class="repressor" d="M48 62C39 46 59 39 62 53C66 39 83 49 75 63L69 66L69 78L64 78L64 66L57 66L57 78L52 78L52 65Z"/>
          <path class="inducer" d="M70 49L74 46L78 49V54L74 57L70 54Z"/>
        </g>
        <path class="rna" d="M18 112Q68 115 113 85"/>
        <text x="25" y="53">CAP</text>
        <text x="70" y="130">low glucose</text>
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

if (!customElements.get("concept-lac-operon-induction")) {
  customElements.define("concept-lac-operon-induction", ConceptLacOperonInduction);
}
