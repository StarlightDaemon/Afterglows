// Kanizsa Illusory Contour. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKanizsaIllusoryContour extends HTMLElement {
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
        .inducer {
          animation:align 10s ease-in-out infinite;
          transform:rotate(0deg)
        }
        @keyframes align {
          0%,18%,90%,100% {
            transform:rotate(60deg)
          }
          32%,75% {
            transform:rotate(0deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Kanizsa Illusory Contour">
        <g transform="translate(70 26)">
          <path class="solid inducer" d="M0 0L-8.5,14.722A17 17 0 1 1 8.5,14.722Z"/>
        </g>
        <g transform="translate(26 102.21)">
          <path class="solid inducer" d="M0 0L17,0A17 17 0 1 1 8.5,-14.722Z"/>
        </g>
        <g transform="translate(114 102.21)">
          <path class="solid inducer" d="M0 0L-8.5,-14.722A17 17 0 1 1 -17,2.082e-15Z"/>
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

if (!customElements.get("concept-kanizsa-illusory-contour")) {
  customElements.define("concept-kanizsa-illusory-contour", ConceptKanizsaIllusoryContour);
}
