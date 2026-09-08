// Diaphragmatic Ventilation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDiaphragmaticVentilation extends HTMLElement {
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
        .ribs {
          fill:none;
          stroke:#466d59;
          stroke-width:1.7;
          stroke-linecap:round
        }
        .lung {
          fill:#35735988;
          stroke:#70edb1;
          stroke-width:1.7
        }
        .left {
          animation:left 6s ease-in-out infinite
        }
        .right {
          animation:right 6s ease-in-out infinite
        }
        .airway {
          fill:none;
          stroke:#8caa99;
          stroke-width:7;
          stroke-linecap:round
        }
        .bronchi {
          fill:none;
          stroke:#8caa99;
          stroke-width:2;
          stroke-linecap:round;
          opacity:.7
        }
        .diaphragm {
          fill:none;
          stroke:#d59488;
          stroke-width:4;
          stroke-linecap:round;
          animation:diaphragm 6s ease-in-out infinite
        }
        .inhale {
          stroke:#163c34;
          opacity:.8;
          animation:inhale 6s infinite
        }
        .exhale {
          stroke:#163c34;
          opacity:0;
          animation:exhale 6s infinite
        }
        @keyframes left {
          0%,6%,100% {
            d:path("M61 42C39 43 28 57 28 84Q28 99 41 101L61 92Z")
          }
          48%,54% {
            d:path("M61 42C34 42 24 56 24 91Q24 111 41 113L61 111Z")
          }
        }
        @keyframes right {
          0%,6%,100% {
            d:path("M79 42C101 43 112 57 112 84Q112 99 99 101L79 92Z")
          }
          48%,54% {
            d:path("M79 42C106 42 116 56 116 91Q116 111 99 113L79 111Z")
          }
        }
        @keyframes diaphragm {
          0%,6%,100% {
            d:path("M22 114Q70 79 118 114")
          }
          48%,54% {
            d:path("M22 114Q70 111 118 114")
          }
        }
        @keyframes inhale {
          0%,9% {
            opacity:0
          }
          10%,47% {
            opacity:1;
            stroke-dashoffset:-12
          }
          48%,100% {
            opacity:0
          }
        }
        @keyframes exhale {
          0%,56% {
            opacity:0
          }
          57%,96% {
            opacity:1;
            stroke-dashoffset:12
          }
          97%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Diaphragmatic Ventilation">
        <path class="ribs" d="M56 28C20 35 13 70 20 117M84 28C120 35 127 70 120 117M23 56Q38 48 54 52M20 72Q37 63 55 67M19 89Q36 80 54 82M117 56Q102 48 86 52M120 72Q103 63 85 67M121 89Q104 80 86 82"/>
        <path class="lung left" d="M61 42C39 43 28 57 28 84Q28 99 41 101L61 92Z"/>
        <path class="lung right" d="M79 42C101 43 112 57 112 84Q112 99 99 101L79 92Z"/>
        <path class="airway" d="M70 14V43M70 43L52 58M70 43L88 58"/>
        <path class="bronchi" d="M52 58L43 76M52 58L57 81M43 76L34 87M43 76L48 92M88 58L97 76M88 58L83 81M97 76L106 87M97 76L92 92"/>
        <path class="diaphragm" d="M22 114Q70 79 118 114"/>
        <path class="ink inhale" d="M70 17V40M66 35L70 40L74 35"/>
        <path class="ink exhale" d="M70 40V17M66 22L70 17L74 22"/>
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

if (!customElements.get("concept-diaphragmatic-ventilation")) {
  customElements.define("concept-diaphragmatic-ventilation", ConceptDiaphragmaticVentilation);
}
