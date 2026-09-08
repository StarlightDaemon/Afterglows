// Alveolar Surfactant. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAlveolarSurfactant extends HTMLElement {
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
        text {
          fill:#b6d4c6;
          font:9px monospace;
          text-anchor:middle
        }
        .lined,.bare {
          fill:#17372a;
          stroke:#91b5a1;
          stroke-width:1.5
        }
        .lined {
          animation:lined 8s ease-in-out infinite
        }
        .bare {
          animation:bare 8s ease-in-out infinite
        }
        .pressure {
          stroke:#c58688;
          animation:pressure 8s infinite
        }
        .head {
          fill:#f3c977
        }
        .tail {
          stroke:#e1c894;
          stroke-width:1.2
        }
        @keyframes lined {
          0%,10%,100% {
            rx:24px;
            ry:24px
          }
          45%,60% {
            rx:18px;
            ry:18px
          }
        }
        @keyframes bare {
          0%,10%,100% {
            rx:24px;
            ry:24px
          }
          45%,60% {
            rx:8px;
            ry:19px
          }
        }
        @keyframes pressure {
          0%,10%,100% {
            opacity:.2
          }
          30%,65% {
            opacity:1
          }
        }
        .m0 {
          animation:m0 8s ease-in-out infinite
        }
        @keyframes m0 {
          0%,10%,100% {
            transform:translate(6px,0px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m1 {
          animation:m1 8s ease-in-out infinite
        }
        @keyframes m1 {
          0%,10%,100% {
            transform:translate(5.196px,3.0px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m2 {
          animation:m2 8s ease-in-out infinite
        }
        @keyframes m2 {
          0%,10%,100% {
            transform:translate(3.0px,5.196px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m3 {
          animation:m3 8s ease-in-out infinite
        }
        @keyframes m3 {
          0%,10%,100% {
            transform:translate(3.674e-16px,6px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m4 {
          animation:m4 8s ease-in-out infinite
        }
        @keyframes m4 {
          0%,10%,100% {
            transform:translate(-3.0px,5.196px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m5 {
          animation:m5 8s ease-in-out infinite
        }
        @keyframes m5 {
          0%,10%,100% {
            transform:translate(-5.196px,3.0px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m6 {
          animation:m6 8s ease-in-out infinite
        }
        @keyframes m6 {
          0%,10%,100% {
            transform:translate(-6px,7.348e-16px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m7 {
          animation:m7 8s ease-in-out infinite
        }
        @keyframes m7 {
          0%,10%,100% {
            transform:translate(-5.196px,-3.0px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m8 {
          animation:m8 8s ease-in-out infinite
        }
        @keyframes m8 {
          0%,10%,100% {
            transform:translate(-3.0px,-5.196px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m9 {
          animation:m9 8s ease-in-out infinite
        }
        @keyframes m9 {
          0%,10%,100% {
            transform:translate(-1.102e-15px,-6px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m10 {
          animation:m10 8s ease-in-out infinite
        }
        @keyframes m10 {
          0%,10%,100% {
            transform:translate(3.0px,-5.196px)
          }
          45%,60% {
            transform:translate(0,0)
          }
        }
        .m11 {
          animation:m11 8s ease-in-out infinite
        }
        @keyframes m11 {
          0%,10%,100% {
            transform:translate(5.196px,-3.0px)
          }
          45%,60% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Alveolar Surfactant">
        <text x="70" y="18">same compression</text>
        <ellipse class="lined" cx="37" cy="75" rx="18" ry="18"/>
        <ellipse class="bare" cx="103" cy="75" rx="8" ry="19"/>
        <path class="ink pressure" d="M8 75H14M10 71L14 75L10 79M66 75H60M64 71L60 75L64 79M75 75H81M77 71L81 75L77 79M131 75H125M129 71L125 75L129 79"/>
        <text x="37" y="120">film</text>
        <text x="103" y="120">bare</text>
        <g class="m m0">
          <path class="tail" d="M55 75L51 75"/>
          <circle class="head" cx="55" cy="75" r="2"/>
        </g>
        <g class="m m1">
          <path class="tail" d="M52.588 84L49.124 82"/>
          <circle class="head" cx="52.588" cy="84" r="2"/>
        </g>
        <g class="m m2">
          <path class="tail" d="M46 90.588L44 87.124"/>
          <circle class="head" cx="46" cy="90.588" r="2"/>
        </g>
        <g class="m m3">
          <path class="tail" d="M37 93L37 89"/>
          <circle class="head" cx="37" cy="93" r="2"/>
        </g>
        <g class="m m4">
          <path class="tail" d="M28.0 90.588L30.0 87.124"/>
          <circle class="head" cx="28.0" cy="90.588" r="2"/>
        </g>
        <g class="m m5">
          <path class="tail" d="M21.412 84L24.876 82"/>
          <circle class="head" cx="21.412" cy="84" r="2"/>
        </g>
        <g class="m m6">
          <path class="tail" d="M19 75L23 75"/>
          <circle class="head" cx="19" cy="75" r="2"/>
        </g>
        <g class="m m7">
          <path class="tail" d="M21.412 66L24.876 68"/>
          <circle class="head" cx="21.412" cy="66" r="2"/>
        </g>
        <g class="m m8">
          <path class="tail" d="M28.0 59.412L30.0 62.876"/>
          <circle class="head" cx="28.0" cy="59.412" r="2"/>
        </g>
        <g class="m m9">
          <path class="tail" d="M37 57L37 61"/>
          <circle class="head" cx="37" cy="57" r="2"/>
        </g>
        <g class="m m10">
          <path class="tail" d="M46 59.412L44 62.876"/>
          <circle class="head" cx="46" cy="59.412" r="2"/>
        </g>
        <g class="m m11">
          <path class="tail" d="M52.588 66L49.124 68"/>
          <circle class="head" cx="52.588" cy="66" r="2"/>
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

if (!customElements.get("concept-alveolar-surfactant")) {
  customElements.define("concept-alveolar-surfactant", ConceptAlveolarSurfactant);
}
