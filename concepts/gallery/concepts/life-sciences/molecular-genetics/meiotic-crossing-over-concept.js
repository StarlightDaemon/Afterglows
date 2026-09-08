// Meiotic Crossing Over. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMeioticCrossingOver extends HTMLElement {
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
        .chrom {
          stroke-width:4;
          fill:none
        }
        .green {
          stroke:#70edb1
        }
        .blue {
          stroke:#77c9ef
        }
        .junction {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:1.5;
          opacity:0;
          animation:joint 12s linear infinite
        }
        @keyframes joint {
          0%,29%,76%,100% {
            opacity:0
          }
          35%,62% {
            opacity:1
          }
        }
        .greenleft {
          animation:greenleft 12s ease-in-out infinite
        }
        @keyframes greenleft {
          0%,10% {
            d:path('M18,60H48 Q60,60 70,60')
          }
          35%,55% {
            d:path('M18,60H48 Q60,60 70,70')
          }
          78%,100% {
            d:path('M18,60H48 Q60,60 70,60')
          }
        }
        .greenright {
          animation:greenright 12s ease-in-out infinite
        }
        @keyframes greenright {
          0%,10% {
            d:path('M70,60 Q80,60 92,60H122')
          }
          35%,55% {
            d:path('M70,70 Q80,60 92,60H122')
          }
          78%,100% {
            d:path('M70,80 Q80,80 92,80H122')
          }
        }
        .blueleft {
          animation:blueleft 12s ease-in-out infinite
        }
        @keyframes blueleft {
          0%,10% {
            d:path('M18,80H48 Q60,80 70,80')
          }
          35%,55% {
            d:path('M18,80H48 Q60,80 70,70')
          }
          78%,100% {
            d:path('M18,80H48 Q60,80 70,80')
          }
        }
        .blueright {
          animation:blueright 12s ease-in-out infinite
        }
        @keyframes blueright {
          0%,10% {
            d:path('M70,80 Q80,80 92,80H122')
          }
          35%,55% {
            d:path('M70,70 Q80,80 92,80H122')
          }
          78%,100% {
            d:path('M70,60 Q80,60 92,60H122')
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Meiotic Crossing Over">
        <path class="sister ink muted" d="M24,42V60 M24,80V98"/>
        <path class="ink chrom green" d="M18,42H122"/>
        <path class="ink chrom blue" d="M18,98H122"/>
        <path class="chrom green greenleft" d="M18,60H48 Q60,60 70,60"/>
        <path class="chrom green greenright" d="M70,80 Q80,80 92,80H122"/>
        <path class="chrom blue blueleft" d="M18,80H48 Q60,80 70,80"/>
        <path class="chrom blue blueright" d="M70,60 Q80,60 92,60H122"/>
        <circle class="junction" cx="70" cy="70" r="6"/>
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

if (!customElements.get("concept-meiotic-crossing-over")) {
  customElements.define("concept-meiotic-crossing-over", ConceptMeioticCrossingOver);
}
