// Sliding Filament Contraction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSlidingFilamentContraction extends HTMLElement {
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
          font:8px monospace;
          text-anchor:middle
        }
        .thick {
          stroke:#88b3cf;
          stroke-width:7;
          stroke-linecap:round
        }
        .band {
          stroke:#88b3cf;
          stroke-width:1
        }
        .z {
          stroke:#94bcad;
          stroke-width:4
        }
        .thin-left {
          stroke:#ebbf73;
          stroke-width:2
        }
        .thin-right {
          stroke:#d99fae;
          stroke-width:2
        }
        .actin-left {
          fill:#ebbf73
        }
        .actin-right {
          fill:#d99fae
        }
        .left {
          transform:translateX(14px);
          animation:left 8s infinite
        }
        .right {
          transform:translateX(-14px);
          animation:right 8s infinite
        }
        .head {
          fill:none;
          stroke:#99c5df;
          stroke-width:2.3;
          stroke-linecap:round
        }
        .bridges {
          animation:release 8s infinite
        }
        .h0 {
          animation:h0 2s linear infinite
        }
        .h1 {
          animation:h1 2s -.6s linear infinite
        }
        .h2 {
          animation:h2 2s -1s linear infinite
        }
        .h3 {
          animation:h3 2s -1.6s linear infinite
        }
        @keyframes left {
          0%,10%,100% {
            transform:translateX(0)
          }
          55%,65% {
            transform:translateX(14px)
          }
        }
        @keyframes right {
          0%,10%,100% {
            transform:translateX(0)
          }
          55%,65% {
            transform:translateX(-14px)
          }
        }
        @keyframes release {
          0%,65% {
            opacity:1
          }
          70%,95% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        @keyframes h0 {
          0%,100% {
            d:path("M55 66L58 60L59 57")
          }
          20% {
            d:path("M55 66L50 52L49 46")
          }
          60% {
            d:path("M55 66L60 54L63 46")
          }
          80% {
            d:path("M55 66L58 60L59 57")
          }
        }
        @keyframes h1 {
          0%,100% {
            d:path("M85 66L82 62L81 59")
          }
          20% {
            d:path("M85 66L90 58L91 52")
          }
          60% {
            d:path("M85 66L80 58L77 52")
          }
          80% {
            d:path("M85 66L82 62L81 59")
          }
        }
        @keyframes h2 {
          0%,100% {
            d:path("M55 74L58 80L59 83")
          }
          20% {
            d:path("M55 74L50 88L49 94")
          }
          60% {
            d:path("M55 74L60 86L63 94")
          }
          80% {
            d:path("M55 74L58 80L59 83")
          }
        }
        @keyframes h3 {
          0%,100% {
            d:path("M85 74L82 78L81 81")
          }
          20% {
            d:path("M85 74L90 82L91 88")
          }
          60% {
            d:path("M85 74L80 82L77 88")
          }
          80% {
            d:path("M85 74L82 78L81 81")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sliding Filament Contraction">
        <path class="thick" d="M50 70H90"/>
        <path class="ink band" d="M50 117V122H90V117"/>
        <text x="70" y="135">fixed thick filament</text>
        <g class="left">
          <path class="z" d="M25 35V105"/>
          <path class="thin-left" d="M25 46H70M25 94H70"/>
          <circle class="actin-left" cx="25" cy="46" r="2"/>
          <circle class="actin-left" cx="25" cy="94" r="2"/>
          <circle class="actin-left" cx="32.5" cy="46" r="2"/>
          <circle class="actin-left" cx="32.5" cy="94" r="2"/>
          <circle class="actin-left" cx="40" cy="46" r="2"/>
          <circle class="actin-left" cx="40" cy="94" r="2"/>
          <circle class="actin-left" cx="47.5" cy="46" r="2"/>
          <circle class="actin-left" cx="47.5" cy="94" r="2"/>
          <circle class="actin-left" cx="55" cy="46" r="2"/>
          <circle class="actin-left" cx="55" cy="94" r="2"/>
          <circle class="actin-left" cx="62.5" cy="46" r="2"/>
          <circle class="actin-left" cx="62.5" cy="94" r="2"/>
          <circle class="actin-left" cx="70" cy="46" r="2"/>
          <circle class="actin-left" cx="70" cy="94" r="2"/>
        </g>
        <g class="right">
          <path class="z" d="M115 35V105"/>
          <path class="thin-right" d="M70 52H115M70 88H115"/>
          <circle class="actin-right" cx="70" cy="52" r="2"/>
          <circle class="actin-right" cx="70" cy="88" r="2"/>
          <circle class="actin-right" cx="77.5" cy="52" r="2"/>
          <circle class="actin-right" cx="77.5" cy="88" r="2"/>
          <circle class="actin-right" cx="85" cy="52" r="2"/>
          <circle class="actin-right" cx="85" cy="88" r="2"/>
          <circle class="actin-right" cx="92.5" cy="52" r="2"/>
          <circle class="actin-right" cx="92.5" cy="88" r="2"/>
          <circle class="actin-right" cx="100" cy="52" r="2"/>
          <circle class="actin-right" cx="100" cy="88" r="2"/>
          <circle class="actin-right" cx="107.5" cy="52" r="2"/>
          <circle class="actin-right" cx="107.5" cy="88" r="2"/>
          <circle class="actin-right" cx="115" cy="52" r="2"/>
          <circle class="actin-right" cx="115" cy="88" r="2"/>
        </g>
        <g class="bridges">
          <path class="head h0" d="M55 66L60 54L63 46"/>
          <path class="head h1" d="M85 66L80 58L77 52"/>
          <path class="head h2" d="M55 74L60 86L63 94"/>
          <path class="head h3" d="M85 74L80 82L77 88"/>
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

if (!customElements.get("concept-sliding-filament-contraction")) {
  customElements.define("concept-sliding-filament-contraction", ConceptSlidingFilamentContraction);
}
