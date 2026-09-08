// Lens Accommodation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLensAccommodation extends HTMLElement {
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
        .eye {
          fill:#152e25;
          stroke:#8eafa0;
          stroke-width:2
        }
        .retina {
          fill:none;
          stroke:#bd848f;
          stroke-width:3
        }
        .zonules {
          fill:none;
          stroke:#adbb96;
          stroke-width:1.3;
          animation:zonules 10s infinite
        }
        .muscle {
          fill:none;
          stroke:#b47c86;
          stroke-width:5;
          stroke-linecap:round;
          animation:muscle 10s infinite
        }
        .lens {
          fill:#79bfcd66;
          stroke:#9cd4dc;
          stroke-width:1.6;
          animation:lens 10s infinite
        }
        .rays {
          fill:none;
          stroke:#e8bf6d;
          stroke-width:1.5;
          animation:rays 10s infinite
        }
        .object {
          animation:object 10s infinite
        }
        @keyframes lens {
          0%,15%,100% {
            rx:8px;
            ry:24px
          }
          45%,75% {
            rx:14px;
            ry:22px
          }
        }
        @keyframes muscle {
          0%,15%,100% {
            d:path("M50 25Q65 19 80 25M50 115Q65 121 80 115")
          }
          45%,75% {
            d:path("M50 34Q65 28 80 34M50 106Q65 112 80 106")
          }
        }
        @keyframes zonules {
          0%,15%,100% {
            d:path("M57 25Q59 37.108 61 49.215M73 25Q71 37.108 69 49.215M57 115Q59 102.892 61 90.785M73 115Q71 102.892 69 90.785")
          }
          45%,75% {
            d:path("M57 34Q54 43 58 50.947M73 34Q77 43 72 50.947M57 106Q54 97 58 89.053M73 106Q77 97 72 89.053")
          }
        }
        @keyframes rays {
          0%,15%,100% {
            d:path("M13 54L65 54L120 70M13 86L65 86L120 70")
          }
          45%,75% {
            d:path("M13 70L65 54L120 70M13 70L65 86L120 70")
          }
        }
        @keyframes object {
          0%,15%,100% {
            opacity:0
          }
          45%,75% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Lens Accommodation">
        <path class="eye" d="M40 43C65 13 121 25 125 66C130 110 69 124 40 97Q19 71 40 43Z"/>
        <path class="retina" d="M110 35Q130 70 110 105"/>
        <path class="zonules" d="M57 34Q54 43 58 50.947M73 34Q77 43 72 50.947M57 106Q54 97 58 89.053M73 106Q77 97 72 89.053"/>
        <path class="muscle" d="M50 34Q65 28 80 34M50 106Q65 112 80 106"/>
        <ellipse class="lens" cx="65" cy="70" rx="14" ry="22"/>
        <path class="rays" d="M13 70L65 54L120 70M13 70L65 86L120 70"/>
        <circle class="object warm" cx="13" cy="70" r="3"/>
        <circle class="warm" cx="120" cy="70" r="2.5"/>
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

if (!customElements.get("concept-lens-accommodation")) {
  customElements.define("concept-lens-accommodation", ConceptLensAccommodation);
}
