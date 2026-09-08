// Ribosomal Translation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRibosomalTranslation extends HTMLElement {
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
        .large-subunit {
          fill:#315747;
          stroke:#83ac92;
          stroke-width:1.5
        }
        .small-subunit {
          fill:#4d7055;
          stroke:#9db38d;
          stroke-width:1.5
        }
        .message {
          fill:none;
          stroke:#ddb775;
          stroke-width:2.5
        }
        .codon {
          stroke:#c79579;
          stroke-width:1.4
        }
        .mrna {
          animation:translocate 12s infinite
        }
        .rna-backbone {
          fill:none;
          stroke:#8bbcc9;
          stroke-width:1.8
        }
        .anticodon {
          stroke:#dce0b5;
          stroke-width:3
        }
        .p-site {
          opacity:0;
          animation:p-site 12s infinite
        }
        .a-site {
          transform:translateX(-20px);
          animation:a-site 12s infinite
        }
        .amino {
          fill:#eead8a
        }
        .peptide {
          fill:#efd78c;
          stroke:#af945d;
          stroke-width:.5;
          transform:translateY(-6px);
          animation:peptide 12s infinite
        }
        text {
          fill:#bfcfb9;
          font:8px serif;
          text-anchor:middle
        }
        @keyframes translocate {
          0%,45% {
            transform:translateX(0)
          }
          65%,100% {
            transform:translateX(-20px)
          }
        }
        @keyframes p-site {
          0%,45% {
            opacity:1;
            transform:translate(0,0)
          }
          65% {
            opacity:1;
            transform:translate(-20px,0)
          }
          80%,100% {
            opacity:0;
            transform:translate(-42px,-10px)
          }
        }
        @keyframes a-site {
          0%,10% {
            transform:translate(24px,-24px);
            opacity:0
          }
          30%,45% {
            transform:translate(0,0);
            opacity:1
          }
          65%,100% {
            transform:translate(-20px,0);
            opacity:1
          }
        }
        @keyframes peptide {
          0%,30% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(20px,-6px)
          }
          65%,100% {
            transform:translate(0,-6px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ribosomal Translation">
        <path class="large-subunit" d="M30 89V64C30 35 111 31 113 64V89Z"/>
        <path class="small-subunit" d="M34 100Q71 122 109 100Z"/>
        <g class="mrna">
          <path class="message" d="M13 97H129"/>
          <path class="codon" d="M26 97v4m4 -4v4m4 -4v4"/>
          <path class="codon" d="M46 97v4m4 -4v4m4 -4v4"/>
          <path class="codon" d="M66 97v4m4 -4v4m4 -4v4"/>
          <path class="codon" d="M86 97v4m4 -4v4m4 -4v4"/>
          <path class="codon" d="M106 97v4m4 -4v4m4 -4v4"/>
        </g>
        <g class="trna p-site">
          <path class="rna-backbone" d="M70 54V62Q60 56 60 64Q60 71 67 69V80L65 88V92H75V88L73 80V69Q80 71 80 64Q80 56 70 62"/>
          <path class="anticodon" d="M65 92H75"/>
        </g>
        <g class="trna a-site">
          <path class="rna-backbone" d="M90 54V62Q80 56 80 64Q80 71 87 69V80L85 88V92H95V88L93 80V69Q100 71 100 64Q100 56 90 62"/>
          <path class="anticodon" d="M85 92H95"/>
          <circle class="amino" cx="90" cy="51" r="3"/>
        </g>
        <g class="peptide">
          <circle cx="70" cy="51" r="3"/>
          <circle cx="67" cy="45" r="3"/>
          <circle cx="72" cy="39" r="3"/>
          <circle cx="68" cy="33" r="3"/>
        </g>
        <text x="49" y="127">E</text>
        <text x="70" y="127">P</text>
        <text x="91" y="127">A</text>
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

if (!customElements.get("concept-ribosomal-translation")) {
  customElements.define("concept-ribosomal-translation", ConceptRibosomalTranslation);
}
