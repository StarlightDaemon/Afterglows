// Competitive Enzyme Inhibition. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCompetitiveEnzymeInhibition extends HTMLElement {
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
        .enzyme {
          fill:#315443;
          stroke:#89b799;
          stroke-width:1.5
        }
        .pocket {
          fill:none;
          stroke:#c2d3a8;
          stroke-width:2.5
        }
        .inhibitor {
          fill:#d497a8;
          stroke:#e4bec2;
          stroke-width:1;
          transform:translate(20px,28px);
          animation:inhibitor 14s linear infinite
        }
        .cap {
          fill:none;
          stroke:#7b526c;
          stroke-width:2
        }
        .substrate {
          opacity:0;
          animation:substrate 14s linear infinite
        }
        .substrate-bond {
          stroke:#ead6a2;
          stroke-width:2
        }
        .substrate-left,.product-left {
          fill:#e8c175
        }
        .substrate-right,.product-right {
          fill:#9ecb9c
        }
        .product-left {
          transform:translate(39px,25px);
          animation:left 14s linear infinite
        }
        .product-right {
          transform:translate(98px,17px);
          animation:right 14s linear infinite
        }
        @keyframes inhibitor {
          0%,10% {
            transform:translate(40px,25px)
          }
          17% {
            transform:translate(70px,28px)
          }
          25%,45% {
            transform:translate(70px,60px)
          }
          54% {
            transform:translate(70px,28px)
          }
          60%,100% {
            transform:translate(20px,28px)
          }
        }
        @keyframes substrate {
          0%,25% {
            opacity:1;
            transform:translate(70px,17px)
          }
          40%,60% {
            opacity:1;
            transform:translate(97px,30px)
          }
          64% {
            opacity:1;
            transform:translate(70px,30px)
          }
          72%,79.99% {
            opacity:1;
            transform:translate(70px,60px)
          }
          80%,100% {
            opacity:0;
            transform:translate(70px,60px)
          }
        }
        @keyframes left {
          0%,79.99% {
            opacity:0;
            transform:translate(66px,60px)
          }
          80%,82% {
            opacity:1;
            transform:translate(66px,60px)
          }
          89% {
            opacity:1;
            transform:translate(66px,35px)
          }
          97%,100% {
            opacity:1;
            transform:translate(39px,25px)
          }
        }
        @keyframes right {
          0%,79.99% {
            opacity:0;
            transform:translate(74px,60px)
          }
          80%,82% {
            opacity:1;
            transform:translate(74px,60px)
          }
          89% {
            opacity:1;
            transform:translate(74px,35px)
          }
          97%,100% {
            opacity:1;
            transform:translate(98px,17px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Competitive Enzyme Inhibition">
        <path class="enzyme" d="M59,50C20,35 11,101 48,119C83,136 124,110 116,77C112,56 98,44 81,50L81,64Q70,76 59,64Z"/>
        <path class="pocket" d="M81,50V64Q70,76 59,64V50"/>
        <g class="inhibitor">
          <path d="M-8,-3Q0,-7 8,-3V3H-8Z"/>
          <path class="cap" d="M-5,-3H5"/>
        </g>
        <g class="substrate">
          <path class="substrate-bond" d="M-4,0H4"/>
          <circle class="substrate-left" cx="-4" cy="0" r="3.2"/>
          <circle class="substrate-right" cx="4" cy="0" r="3.2"/>
        </g>
        <circle class="product-left" r="3.2"/>
        <circle class="product-right" r="3.2"/>
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

if (!customElements.get("concept-competitive-enzyme-inhibition")) {
  customElements.define("concept-competitive-enzyme-inhibition", ConceptCompetitiveEnzymeInhibition);
}
