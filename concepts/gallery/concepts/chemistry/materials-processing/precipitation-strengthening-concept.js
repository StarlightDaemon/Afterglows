// Precipitation Strengthening. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPrecipitationStrengthening extends HTMLElement {
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
        .cycle {
          animation:cycle 14s linear infinite
        }
        .line {
          animation:line 14s linear infinite
        }
        .load {
          animation:load 14s linear infinite
        }
        .contacts {
          animation:contacts 14s linear infinite
        }
        @keyframes cycle {
          0%,3%,97%,100% {
            opacity:0
          }
          6%,94% {
            opacity:1
          }
        }
        @keyframes line {
          0%,10% {
            d:path('M14,110 C30,110 20,110 45,110 C70,110 55,110 70,110 C85,110 70,110 95,110 C120,110 110,110 126,110')
          }
          28%,35% {
            d:path('M14,90 C30,90 20,90 45,90 C70,90 55,90 70,90 C85,90 70,90 95,90 C120,90 110,90 126,90')
          }
          65%,100% {
            d:path('M14,60 C30,60 20,90 45,90 C70,90 55,49 70,49 C85,49 70,90 95,90 C120,90 110,60 126,60')
          }
        }
        @keyframes load {
          0%,15% {
            opacity:0
          }
          28%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes contacts {
          0%,27% {
            opacity:0
          }
          28%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Precipitation Strengthening">
        <path class="ink muted" d="M12,20H128V122H12Z"/>
        <g class="cycle">
          <g fill="#f3c977" stroke="#f3c977">
            <circle cx="45" cy="82" r="8" fill-opacity=".18"/>
            <circle cx="95" cy="82" r="8" fill-opacity=".18"/>
          </g>
          <path class="ink" stroke="#f3c977" stroke-width="1" d="M41,80H49M41,84H49M91,80H99M91,84H99"/>
          <path class="ink line" d="M14,60 C30,60 20,90 45,90 C70,90 55,49 70,49 C85,49 70,90 95,90 C120,90 110,60 126,60"/>
          <path class="ink load" stroke="#77c9ef" d="M20,50V31M16,36L20,31L24,36M120,50V31M116,36L120,31L124,36"/>
          <g class="contacts warm">
            <circle cx="45" cy="90" r="2"/>
            <circle cx="95" cy="90" r="2"/>
          </g>
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

if (!customElements.get("concept-precipitation-strengthening")) {
  customElements.define("concept-precipitation-strengthening", ConceptPrecipitationStrengthening);
}
