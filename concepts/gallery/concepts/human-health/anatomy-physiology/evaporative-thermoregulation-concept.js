// Evaporative Thermoregulation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEvaporativeThermoregulation extends HTMLElement {
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
        .duct {
          fill:none;
          stroke:#dba6a0;
          stroke-width:7
        }
        .sweat-route {
          fill:none;
          stroke:#8ccfe0;
          stroke-width:3;
          stroke-dasharray:6 120;
          animation:delivery 10s linear infinite
        }
        .surface {
          fill:#94d6e6;
          transform-origin:48px 67px;
          animation:drop 10s infinite
        }
        .vapor {
          fill:none;
          stroke:#bae5e9;
          stroke-width:2;
          opacity:.7;
          animation:vapor 10s infinite
        }
        .vessel {
          fill:none;
          stroke:#a95968;
          stroke-width:6
        }
        .heat {
          stroke:#89c9b1;
          stroke-width:8;
          stroke-linecap:round;
          animation:cool 10s infinite
        }
        @keyframes delivery {
          0% {
            stroke-dashoffset:0
          }
          35%,100% {
            stroke-dashoffset:-100;
            opacity:0
          }
          34% {
            opacity:1
          }
        }
        @keyframes drop {
          0%,35% {
            transform:scale(0)
          }
          44%,48% {
            transform:scale(1)
          }
          80%,100% {
            transform:scale(0)
          }
        }
        @keyframes vapor {
          0%,48% {
            opacity:0;
            transform:translateY(8px)
          }
          56%,75% {
            opacity:.8
          }
          85%,100% {
            opacity:0;
            transform:translateY(-12px)
          }
        }
        @keyframes cool {
          0%,48% {
            stroke:#dd9464
          }
          80%,94% {
            stroke:#89c9b1
          }
          100% {
            stroke:#dd9464
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Evaporative Thermoregulation">
        <path fill="#61403d" d="M12 68H128V128H12Z"/>
        <path fill="#ac7765" d="M12 67H128V78H12Z"/>
        <path class="duct" d="M48 67V87C30 83 27 98 40 108C57 123 71 101 57 96C43 91 36 108 50 112C63 116 66 89 49 88"/>
        <path pathLength="100" class="sweat-route" d="M48 111C34 101 42 91 56 97C68 105 55 119 41 108C26 98 30 83 48 87V66"/>
        <path class="surface" d="M42 66Q42 56 48 51Q55 57 55 66Z"/>
        <g class="vapor">
          <path d="M43 47Q35 39 43 30M50 44Q59 35 51 23M59 49Q68 39 61 32"/>
        </g>
        <path class="vessel" d="M16 119C41 116 45 124 70 119S105 114 124 119"/>
        <path class="heat" d="M79 72V100M92 72V100M105 72V100"/>
        <path class="ink" d="M84 39L100 24M96 24H100V29"/>
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

if (!customElements.get("concept-evaporative-thermoregulation")) {
  customElements.define("concept-evaporative-thermoregulation", ConceptEvaporativeThermoregulation);
}
