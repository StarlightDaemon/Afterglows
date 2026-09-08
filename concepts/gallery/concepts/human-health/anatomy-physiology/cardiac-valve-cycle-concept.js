// Cardiac Valve Cycle. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCardiacValveCycle extends HTMLElement {
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
        .vessel {
          fill:none;
          stroke:#466f5d;
          stroke-width:10;
          stroke-linecap:round
        }
        .lumen {
          fill:none;
          stroke:#11271f;
          stroke-width:6
        }
        .atrium,.ventricle {
          stroke:#70edb1;
          stroke-width:1.6
        }
        .left,.vl {
          fill:#594050
        }
        .right,.vr {
          fill:#794548
        }
        .septum {
          stroke:#426d59;
          stroke-width:6;
          stroke-linecap:round
        }
        .atrium {
          animation:atrial 8s infinite;
          transform-box:fill-box;
          transform-origin:center
        }
        .vl {
          animation:vl 8s infinite
        }
        .vr {
          animation:vr 8s infinite
        }
        .av,.semilunar {
          stroke:#f3c977;
          stroke-width:2.3
        }
        .left-av {
          animation:la 8s infinite
        }
        .right-av {
          animation:ra 8s infinite
        }
        .sl {
          animation:sl 8s infinite
        }
        .sr {
          animation:sr 8s infinite
        }
        .fill-flow {
          stroke:#a7cebe;
          opacity:.25;
          animation:fill 8s infinite
        }
        .deoxy {
          fill:#bb7b97
        }
        .oxy {
          fill:#e99992
        }
        .eject {
          opacity:0
        }
        .el {
          animation:el 8s linear infinite
        }
        .er {
          animation:er 8s linear infinite
        }
        @keyframes atrial {
          0%,18% {
            transform:scale(1)
          }
          28%,33% {
            transform:scale(.91)
          }
          38%,100% {
            transform:scale(1)
          }
        }
        @keyframes vl {
          0%,18%,100% {
            d:path("M28 66H61L68 120Q29 104 27 81Z")
          }
          28%,37% {
            d:path("M27 66H61L68 122Q27 106 25 81Z")
          }
          60%,76% {
            d:path("M32 66H61L67 116Q35 100 31 81Z")
          }
        }
        @keyframes vr {
          0%,18%,100% {
            d:path("M79 66H112Q118 98 72 120Z")
          }
          28%,37% {
            d:path("M79 66H113Q120 100 72 122Z")
          }
          60%,76% {
            d:path("M79 66H108Q112 95 73 116Z")
          }
        }
        @keyframes la {
          0%,28% {
            d:path("M28 61L33 73M58 61L53 73")
          }
          30%,74% {
            d:path("M28 61L43 65M58 61L43 65")
          }
          76%,100% {
            d:path("M28 61L33 73M58 61L53 73")
          }
        }
        @keyframes ra {
          0%,28% {
            d:path("M82 61L87 73M112 61L107 73")
          }
          30%,74% {
            d:path("M82 61L97 65M112 61L97 65")
          }
          76%,100% {
            d:path("M82 61L87 73M112 61L107 73")
          }
        }
        @keyframes sl {
          0%,36% {
            d:path("M10 77L16 73L22 77")
          }
          38%,63% {
            d:path("M10 77L11 69L11 69 M22 77L21 69")
          }
          65%,100% {
            d:path("M10 77L16 73L22 77")
          }
        }
        @keyframes sr {
          0%,36% {
            d:path("M118 77L124 73L130 77")
          }
          38%,63% {
            d:path("M118 77L119 69L119 69 M130 77L129 69")
          }
          65%,100% {
            d:path("M118 77L124 73L130 77")
          }
        }
        @keyframes fill {
          0%,28% {
            opacity:.7;
            stroke-dasharray:5 9;
            stroke-dashoffset:28
          }
          30%,75% {
            opacity:0;
            stroke-dashoffset:0
          }
          76%,100% {
            opacity:.7;
            stroke-dasharray:5 9;
            stroke-dashoffset:-28
          }
        }
        @keyframes el {
          0%,38% {
            opacity:0;
            transform:translate(0,0)
          }
          39% {
            opacity:1;
            transform:translate(0,0)
          }
          45% {
            transform:translate(-18px,-10px)
          }
          62% {
            opacity:1;
            transform:translate(-18px,-76px)
          }
          63%,100% {
            opacity:0
          }
        }
        @keyframes er {
          0%,38% {
            opacity:0;
            transform:translate(0,0)
          }
          39% {
            opacity:1;
            transform:translate(0,0)
          }
          45% {
            transform:translate(18px,-10px)
          }
          62% {
            opacity:1;
            transform:translate(18px,-76px)
          }
          63%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Cardiac Valve Cycle">
        <path class="vessel" d="M34 93Q16 95 16 83V13M106 93Q124 95 124 83V13M43 13V34M97 13V34"/>
        <path class="lumen" d="M34 93Q16 95 16 83V13M106 93Q124 95 124 83V13M43 13V34M97 13V34"/>
        <path class="atrium left" d="M28 30Q18 42 28 56H59V30Q44 20 28 30Z"/>
        <path class="atrium right" d="M81 30V56H112Q122 42 112 30Q96 20 81 30Z"/>
        <path class="ventricle vl" d="M27 66H61L68 122Q27 106 25 81Z"/>
        <path class="ventricle vr" d="M79 66H113Q120 100 72 122Z"/>
        <path class="septum" d="M68 28L70 119"/>
        <path class="ink av left-av" d="M28 61L33 73M58 61L53 73"/>
        <path class="ink av right-av" d="M82 61L87 73M112 61L107 73"/>
        <path class="ink semilunar sl" d="M10 77L16 73L22 77"/>
        <path class="ink semilunar sr" d="M118 77L124 73L130 77"/>
        <path class="ink fill-flow" d="M43 38V93M39 88L43 93L47 88M97 38V93M93 88L97 93L101 88"/>
        <circle class="deoxy eject el" cx="34" cy="93" r="3"/>
        <circle class="oxy eject er" cx="106" cy="93" r="3"/>
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

if (!customElements.get("concept-cardiac-valve-cycle")) {
  customElements.define("concept-cardiac-valve-cycle", ConceptCardiacValveCycle);
}
