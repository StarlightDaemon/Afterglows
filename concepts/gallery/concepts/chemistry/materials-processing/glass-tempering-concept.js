// Glass Tempering. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGlassTempering extends HTMLElement {
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
        .core,.skins {
          fill:#163a3c
        }
        .core {
          animation:core 16s linear infinite
        }
        .skins {
          animation:skins 16s linear infinite
        }
        .jets {
          opacity:0;
          animation:jets 16s linear infinite
        }
        .stress {
          animation:stress 16s linear infinite
        }
        .jet {
          stroke-dasharray:3 2;
          animation:flow 1s linear infinite
        }
        @keyframes core {
          0%,45% {
            fill:#b77557
          }
          70%,100% {
            fill:#163a3c
          }
        }
        @keyframes skins {
          0%,25% {
            fill:#b77557
          }
          40%,100% {
            fill:#163a3c
          }
        }
        @keyframes jets {
          0%,15%,77%,100% {
            opacity:0
          }
          25%,65% {
            opacity:.9
          }
        }
        @keyframes stress {
          0%,60% {
            opacity:0
          }
          75%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes flow {
          to {
            stroke-dashoffset:-10
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Glass Tempering">
        <path class="ink muted" d="M30,17V25H40V17M30,123V115H40V123"/>
        <path class="ink muted" d="M65,17V25H75V17M65,123V115H75V123"/>
        <path class="ink muted" d="M100,17V25H110V17M100,123V115H110V123"/>
        <g class="jets ink" stroke="#77c9ef">
          <path class="jet top" d="M35,28V41M32,37L35,41L38,37"/>
          <path class="jet bottom" d="M35,112V99M32,103L35,99L38,103"/>
          <path class="jet top" d="M70,28V41M67,37L70,41L73,37"/>
          <path class="jet bottom" d="M70,112V99M67,103L70,99L73,103"/>
          <path class="jet top" d="M105,28V41M102,37L105,41L108,37"/>
          <path class="jet bottom" d="M105,112V99M102,103L105,99L108,103"/>
        </g>
        <rect class="core" x="20" y="45" width="100" height="50"/>
        <path class="skins" d="M20,45H120V55H20ZM20,85H120V95H20Z"/>
        <rect class="ink muted" x="20" y="45" width="100" height="50"/>
        <g class="stress ink">
          <path stroke="#77c9ef" d="M30,50H55M51,47L55,50L51,53M110,50H85M89,47L85,50L89,53M30,90H55M51,87L55,90L51,93M110,90H85M89,87L85,90L89,93"/>
          <path stroke="#f3c977" d="M55,70H30M34,67L30,70L34,73M85,70H110M106,67L110,70L106,73"/>
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

if (!customElements.get("concept-glass-tempering")) {
  customElements.define("concept-glass-tempering", ConceptGlassTempering);
}
