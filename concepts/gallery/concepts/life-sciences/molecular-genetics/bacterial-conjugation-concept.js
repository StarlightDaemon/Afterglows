// Bacterial Conjugation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBacterialConjugation extends HTMLElement {
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
          stroke:#527c6e
        }
        .chromosome {
          stroke-width:2.2
        }
        .original,.received,.thread {
          stroke:#f3c977
        }
        .replacement,.complement {
          stroke:#70edb1
        }
        .original {
          stroke-dasharray:100;
          stroke-dashoffset:100;
          animation:unwind 14s linear infinite
        }
        .replacement {
          stroke-dasharray:100;
          animation:replace 14s linear infinite
        }
        .thread {
          stroke-dasharray:100;
          opacity:0;
          animation:thread 14s linear infinite
        }
        .received {
          stroke-dasharray:100;
          animation:receive 14s linear infinite
        }
        .complement {
          stroke-dasharray:100;
          animation:complement 14s linear infinite
        }
        .pilus {
          stroke-width:1;
          opacity:0;
          transform-origin:60px 57px;
          animation:pilus 14s linear infinite
        }
        .bridge {
          fill:#19362c;
          stroke:#70edb1;
          stroke-width:1;
          opacity:0;
          animation:bridge 14s linear infinite
        }
        @keyframes pilus {
          0%,8%,30%,100% {
            opacity:0
          }
          10% {
            opacity:1;
            transform:scaleX(.05)
          }
          24% {
            opacity:1;
            transform:scaleX(1)
          }
        }
        @keyframes bridge {
          0%,23%,92%,100% {
            opacity:0
          }
          27%,85% {
            opacity:1
          }
        }
        @keyframes unwind {
          0%,29% {
            stroke-dashoffset:0
          }
          68%,100% {
            stroke-dashoffset:-100
          }
        }
        @keyframes replace {
          0%,29% {
            stroke-dashoffset:100
          }
          68%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes thread {
          0%,29% {
            stroke-dashoffset:100;
            opacity:0
          }
          30% {
            stroke-dashoffset:100;
            opacity:1
          }
          43%,76% {
            stroke-dashoffset:0;
            opacity:1
          }
          83%,100% {
            stroke-dashoffset:-100;
            opacity:0
          }
        }
        @keyframes receive {
          0%,43% {
            stroke-dashoffset:100
          }
          76%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes complement {
          0%,55% {
            stroke-dashoffset:100
          }
          85%,100% {
            stroke-dashoffset:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bacterial Conjugation">
        <rect class="ink paper cell" x="10" y="27" width="50" height="89" rx="25"/>
        <rect class="ink paper cell" x="80" y="27" width="50" height="89" rx="25"/>
        <path class="ink muted chromosome" d="M22,89C16,73 43,76 47,87S20,107 22,89Q37,103 47,85 M92,89C86,73 113,76 117,87S90,107 92,89Q107,103 117,85"/>
        <path class="pilus ink" d="M60,57L80,65"/>
        <path class="bridge" d="M59,61H81V69H59"/>
        <circle class="ink template" cx="35" cy="52" r="11"/>
        <circle class="ink original" cx="35" cy="52" r="15" pathLength="100" transform="rotate(90 35 52)"/>
        <circle class="ink replacement" cx="35" cy="52" r="15" pathLength="100" transform="rotate(90 35 52)"/>
        <path class="ink thread" pathLength="100" d="M35,67Q44,76 53,67Q58,65 64,65H78Q90,65 90,52"/>
        <path class="ink received" pathLength="100" d="M90,52A15,15 0 1 1 90,52.01"/>
        <path class="ink complement" pathLength="100" d="M94,52A11,11 0 1 1 94,52.01"/>
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

if (!customElements.get("concept-bacterial-conjugation")) {
  customElements.define("concept-bacterial-conjugation", ConceptBacterialConjugation);
}
