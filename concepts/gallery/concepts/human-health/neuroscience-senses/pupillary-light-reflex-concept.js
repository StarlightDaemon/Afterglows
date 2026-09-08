// Pupillary Light Reflex. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPupillaryLightReflex extends HTMLElement {
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
        .eyes {
          fill:#90a998;
          stroke:#c0cfc0;
          stroke-width:1.4
        }
        .iris {
          fill:#416f69;
          stroke:#78aaa0;
          stroke-width:2
        }
        .pupil {
          fill:#07120f;
          stroke:none;
          animation:pupil 8s infinite
        }
        .beam {
          fill:#e5cc7855;
          animation:beam 8s infinite
        }
        @keyframes beam {
          0%,12%,82%,100% {
            opacity:0
          }
          18%,70% {
            opacity:1
          }
        }
        @keyframes pupil {
          0%,23%,100% {
            r:9px
          }
          38%,77% {
            r:3px
          }
          95% {
            r:9px
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pupillary Light Reflex">
        <path class="beam" d="M10 18L50 64L31 78Z"/>
        <g class="eyes">
          <path d="M16 76Q41 49 66 76Q41 101 16 76ZM75 76Q100 49 125 76Q100 101 75 76Z"/>
          <circle class="iris" cx="41" cy="76" r="16"/>
          <circle class="iris" cx="100" cy="76" r="16"/>
          <circle class="pupil" cx="41" cy="76" r="4"/>
          <circle class="pupil" cx="100" cy="76" r="4"/>
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

if (!customElements.get("concept-pupillary-light-reflex")) {
  customElements.define("concept-pupillary-light-reflex", ConceptPupillaryLightReflex);
}
