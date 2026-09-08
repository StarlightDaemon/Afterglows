// Phagocytosis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPhagocytosis extends HTMLElement {
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
          fill:#315744;
          stroke:#8bb698;
          stroke-width:2;
          animation:cell 12s infinite
        }
        .nucleus {
          fill:#5c617d;
          stroke:#9196ba;
          stroke-width:1.5
        }
        .cargo {
          transform:translate(-10px,31px);
          animation:cargo 12s infinite
        }
        .phagosome {
          fill:#264a3f;
          stroke:#a6cba9;
          stroke-width:2;
          animation:phagosome 12s infinite
        }
        .microbe {
          fill:#bd9971;
          stroke:#e0b68a;
          stroke-width:1.4;
          opacity:0;
          animation:microbe 12s infinite
        }
        .spines {
          fill:none
        }
        .fragments {
          fill:#c9b38b;
          animation:fragments 12s infinite
        }
        .lysosome {
          fill:#be9a5e;
          stroke:#ead28d;
          stroke-width:1.3;
          opacity:0;
          animation:lysosome 12s infinite
        }
        .enzyme {
          fill:#655937;
          stroke:none
        }
        @keyframes cell {
          0%,12% {
            d:path("M91 67C106 85 93 116 69 121C40 131 15 112 16 86C11 58 34 40 56 49C69 48 76 52 80 59C81 62 86 65 88 66C89 66 90 67 91 67Z")
          }
          21% {
            d:path("M112 67C117 89 93 116 69 121C40 131 15 112 16 86C11 58 34 40 56 49C69 48 76 52 80 59C81 62 86 69 98 74C106 77 112 74 112 67Z")
          }
          32%,42% {
            d:path("M102 34C126 57 109 112 69 121C40 131 15 112 16 86C11 58 31 37 65 36C79 26 87 26 91 31C78 39 77 59 90 63C106 66 110 49 102 34Z")
          }
          48%,100% {
            d:path("M105 36C124 58 109 112 69 121C40 131 15 112 16 86C11 58 31 37 65 36C79 26 93 25 102 31C103 33 104 35 105 36C105 36 105 36 105 36Z")
          }
        }
        @keyframes cargo {
          0%,48% {
            transform:translate(0,0)
          }
          66%,100% {
            transform:translate(-10px,31px)
          }
        }
        @keyframes phagosome {
          0%,43% {
            opacity:0;
            fill:#264a3f
          }
          48%,72% {
            opacity:1;
            fill:#264a3f
          }
          82%,100% {
            opacity:1;
            fill:#817143
          }
        }
        @keyframes microbe {
          0%,76% {
            opacity:1
          }
          88%,100% {
            opacity:0
          }
        }
        @keyframes fragments {
          0%,76% {
            opacity:0
          }
          88%,100% {
            opacity:1
          }
        }
        @keyframes lysosome {
          0%,59% {
            opacity:1;
            transform:translate(0,0)
          }
          73% {
            opacity:1;
            transform:translate(17px,17px)
          }
          80%,100% {
            opacity:0;
            transform:translate(28px,19px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Phagocytosis">
        <path class="cell" d="M105 36C124 58 109 112 69 121C40 131 15 112 16 86C11 58 31 37 65 36C79 26 93 25 102 31C103 33 104 35 105 36C105 36 105 36 105 36Z"/>
        <path class="nucleus" d="M37 77C25 81 29 106 43 108C58 111 64 95 52 86Q53 74 37 77Z"/>
        <g class="cargo">
          <circle class="phagosome" cx="96" cy="48" r="14"/>
          <g class="microbe">
            <path d="M89 43Q96 38 103 43V53Q96 58 89 53Z"/>
            <path class="spines" d="M89 45L85 43M89 51L85 54M103 45L108 42M103 51L107 55"/>
          </g>
          <g class="fragments">
            <path d="M88 44L93 41L94 46L90 48ZM98 43L103 47L100 50L96 47ZM91 52L96 51L98 55L92 56Z"/>
          </g>
        </g>
        <g class="lysosome">
          <circle cx="58" cy="60" r="8"/>
          <circle class="enzyme" cx="55" cy="58" r="1.5"/>
          <circle class="enzyme" cx="61" cy="59" r="1.5"/>
          <circle class="enzyme" cx="58" cy="64" r="1.5"/>
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

if (!customElements.get("concept-phagocytosis")) {
  customElements.define("concept-phagocytosis", ConceptPhagocytosis);
}
