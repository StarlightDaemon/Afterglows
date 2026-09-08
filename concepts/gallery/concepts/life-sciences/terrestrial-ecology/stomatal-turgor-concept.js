// Stomatal Turgor. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptStomatalTurgor extends HTMLElement {
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
        .guard {
          fill:#2b573b;
          stroke:#83b78a;
          stroke-width:1.5;
          animation:guard 12s ease-in-out infinite
        }
        .inner-wall {
          fill:none;
          stroke:#b6d5a1;
          stroke-width:3;
          animation:inner 12s ease-in-out infinite
        }
        .organelles {
          fill:#79ad5f;
          transform:translateX(-3px);
          animation:organelles 12s ease-in-out infinite
        }
        .water {
          fill:#77c9ef;
          opacity:0
        }
        .l {
          animation:water-l 12s linear infinite
        }
        .r {
          animation:water-r 12s linear infinite
        }
        @keyframes guard {
          0%,15%,95%,100% {
            d:path('M70,33C33,27 27,110 70,107C69,90 69,50 70,33Z')
          }
          55%,70% {
            d:path('M70,33C25,20 20,120 70,107C60,90 60,50 70,33Z')
          }
        }
        @keyframes inner {
          0%,15%,95%,100% {
            d:path('M70,107C69,90 69,50 70,33')
          }
          55%,70% {
            d:path('M70,107C60,90 60,50 70,33')
          }
        }
        @keyframes organelles {
          0%,15%,95%,100% {
            transform:translateX(0)
          }
          55%,70% {
            transform:translateX(-3px)
          }
        }
        @keyframes water-l {
          0%,10% {
            opacity:0;
            transform:translateX(20px)
          }
          15% {
            opacity:1;
            transform:translateX(20px)
          }
          40% {
            opacity:1;
            transform:translateX(42px)
          }
          48%,64% {
            opacity:0;
            transform:translateX(42px)
          }
          70% {
            opacity:1;
            transform:translateX(42px)
          }
          90% {
            opacity:1;
            transform:translateX(20px)
          }
          95%,100% {
            opacity:0;
            transform:translateX(20px)
          }
        }
        @keyframes water-r {
          0%,10% {
            opacity:0;
            transform:translateX(120px)
          }
          15% {
            opacity:1;
            transform:translateX(120px)
          }
          40% {
            opacity:1;
            transform:translateX(98px)
          }
          48%,64% {
            opacity:0;
            transform:translateX(98px)
          }
          70% {
            opacity:1;
            transform:translateX(98px)
          }
          90% {
            opacity:1;
            transform:translateX(120px)
          }
          95%,100% {
            opacity:0;
            transform:translateX(120px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Stomatal Turgor">
        <path class="epidermis ink muted" d="M14,23Q42,13 70,22Q102,11 128,24V116Q98,130 70,119Q43,130 13,116Z"/>
        <g class="left">
          <path class="guard" d="M70,33C25,20 20,120 70,107C60,90 60,50 70,33Z"/>
          <path class="inner-wall" d="M70,107C60,90 60,50 70,33"/>
          <g class="organelles">
            <ellipse cx="48" cy="60" rx="4" ry="6"/>
            <ellipse cx="48" cy="82" rx="4" ry="6"/>
          </g>
        </g>
        <g transform="translate(140 0) scale(-1 1)">
          <path class="guard" d="M70,33C25,20 20,120 70,107C60,90 60,50 70,33Z"/>
          <path class="inner-wall" d="M70,107C60,90 60,50 70,33"/>
          <g class="organelles">
            <ellipse cx="48" cy="60" rx="4" ry="6"/>
            <ellipse cx="48" cy="82" rx="4" ry="6"/>
          </g>
        </g>
        <circle class="water l" cx="0" cy="70" r="2.5"/>
        <circle class="water r" cx="0" cy="72" r="2.5"/>
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

if (!customElements.get("concept-stomatal-turgor")) {
  customElements.define("concept-stomatal-turgor", ConceptStomatalTurgor);
}
