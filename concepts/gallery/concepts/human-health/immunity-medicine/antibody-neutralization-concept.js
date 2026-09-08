// Antibody Neutralization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAntibodyNeutralization extends HTMLElement {
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
        .cell {
          fill:#335a49;
          stroke:#92af99;
          stroke-width:2
        }
        .receptor {
          fill:none;
          stroke:#a9c7c7;
          stroke-width:3;
          stroke-linecap:round
        }
        .complex {
          transform:translateY(-8px);
          animation:approach 10s infinite
        }
        .virus {
          fill:#866677;
          stroke:#c19aaa;
          stroke-width:2
        }
        .other-spikes {
          fill:none;
          stroke:#bb9bac;
          stroke-width:3;
          stroke-linecap:round
        }
        .attachment {
          fill:#a97a8b;
          stroke:#ddbbc5;
          stroke-width:1.5
        }
        .antibody {
          fill:none;
          stroke:#efce83;
          stroke-width:3;
          stroke-linecap:round;
          animation:bind 10s infinite
        }
        .genome {
          fill:none;
          stroke:#ccb19a;
          stroke-width:1.5
        }
        @keyframes approach {
          0%,40%,100% {
            transform:translateY(-22px)
          }
          65%,85% {
            transform:translateY(-8px)
          }
        }
        @keyframes bind {
          0%,8% {
            transform:translate(40px,-35px)
          }
          30%,100% {
            transform:translate(0,0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Antibody Neutralization">
        <path class="cell" d="M12 115H128V130H12Z"/>
        <path class="receptor" d="M69 106L75 111L81 106M75 111V123"/>
        <g class="complex">
          <circle class="virus" cx="70" cy="70" r="16"/>
          <path class="other-spikes" d="M57 59L52 54M70 54V47M83 59L88 54M86 70H93M54 70H47"/>
          <path class="attachment" d="M66 84V96H74V84"/>
          <path class="antibody" d="M70 96L75 102L80 96M75 102V112"/>
          <path class="genome" d="M60 70Q64 60 69 70T80 70"/>
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

if (!customElements.get("concept-antibody-neutralization")) {
  customElements.define("concept-antibody-neutralization", ConceptAntibodyNeutralization);
}
