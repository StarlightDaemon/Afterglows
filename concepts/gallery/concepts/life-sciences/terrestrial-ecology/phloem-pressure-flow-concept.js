// Phloem Pressure Flow. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPhloemPressureFlow extends HTMLElement {
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
        .xylem {
          fill:#153d4b
        }
        .phloem {
          fill:#253f2d
        }
        .plate {
          stroke:#81a489;
          stroke-width:4
        }
        .leaf {
          fill:#416a3a;
          stroke:#88b774;
          stroke-width:1
        }
        .sink {
          fill:#70503a;
          stroke:#bd996c;
          stroke-width:1
        }
        .exchange {
          fill:none;
          stroke:#426d75;
          stroke-width:1;
          stroke-dasharray:2 3
        }
        .up {
          stroke:#497b89;
          stroke-width:1
        }
        .sugar {
          fill:#f3c977;
          transform:translate(118px,110px);
          animation:sugar 14s linear infinite
        }
        .water,.return {
          fill:#77c9ef
        }
        .water {
          transform:translate(45px,110px);
          animation:water 14s linear infinite
        }
        .return {
          transform:translate(45px,85px);
          animation:return 14s linear infinite
        }
        @keyframes sugar {
          0%,10% {
            opacity:1;
            transform:translate(118px,33px)
          }
          25%,40% {
            opacity:1;
            transform:translate(88px,43px)
          }
          75% {
            opacity:1;
            transform:translate(88px,105px)
          }
          88% {
            opacity:1;
            transform:translate(118px,110px)
          }
          98%,100% {
            opacity:0;
            transform:translate(118px,110px)
          }
        }
        @keyframes water {
          0%,20% {
            opacity:1;
            transform:translate(45px,40px)
          }
          40% {
            opacity:1;
            transform:translate(98px,48px)
          }
          75% {
            opacity:1;
            transform:translate(98px,110px)
          }
          88% {
            opacity:1;
            transform:translate(45px,110px)
          }
          98%,100% {
            opacity:0;
            transform:translate(45px,110px)
          }
        }
        @keyframes return {
          0%,76% {
            opacity:0;
            transform:translate(45px,110px)
          }
          88% {
            opacity:1;
            transform:translate(45px,110px)
          }
          100% {
            opacity:0;
            transform:translate(45px,85px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Phloem Pressure Flow">
        <path class="xylem" d="M35,26H55V122H35Z"/>
        <path class="phloem" d="M80,26H104V122H80Z"/>
        <path class="ink muted" d="M35,26V122M55,26V122M80,26V122M104,26V122"/>
        <path class="plate" d="M80,70H84M92,70H95M102,70H104"/>
        <path class="leaf" d="M114,39Q108,21 128,22Q130,35 114,39Z"/>
        <path class="ink muted" d="M115,36L125,26"/>
        <ellipse class="sink" cx="118" cy="112" rx="10" ry="9"/>
        <path class="ink muted" d="M112,109Q118,104 124,110M111,115Q118,120 125,114"/>
        <path class="exchange" d="M55,40H80M80,110H55"/>
        <path class="up ink" d="M45,94V68M42,72L45,68L48,72"/>
        <g class="sugar">
          <path d="M-3,0L-1.5,-2.6H1.5L3,0L1.5,2.6H-1.5Z"/>
        </g>
        <circle class="water" r="2.4"/>
        <circle class="return" r="2.4"/>
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

if (!customElements.get("concept-phloem-pressure-flow")) {
  customElements.define("concept-phloem-pressure-flow", ConceptPhloemPressureFlow);
}
