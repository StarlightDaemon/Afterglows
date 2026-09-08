// Venous Muscle Pump. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVenousMusclePump extends HTMLElement {
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
        .muscle {
          fill:#74454e;
          stroke:#b98185;
          stroke-width:1.5
        }
        .ml {
          animation:ml 7s infinite
        }
        .mr {
          animation:mr 7s infinite
        }
        .fibres {
          fill:none;
          stroke:#b98185;
          stroke-width:1;
          opacity:.5
        }
        .vein {
          fill:#352c3d;
          stroke:#89a4b4;
          stroke-width:2;
          animation:vein 7s infinite
        }
        .upper,.lower {
          stroke:#f3c977;
          stroke-width:2.2
        }
        .upper {
          animation:upper 7s infinite
        }
        .lower {
          animation:lower 7s infinite
        }
        .blood {
          fill:#c084a5;
          opacity:0
        }
        .ejected {
          animation:ejected 7s linear infinite
        }
        .refill {
          animation:refill 7s linear infinite
        }
        @keyframes ml {
          0%,36% {
            d:path("M18 42C37 31 54 43 50 68C54 89 37 106 18 98Q28 72 18 42Z")
          }
          55%,63% {
            d:path("M18 42C47 35 64 48 64 68C64 89 47 103 18 98Q28 72 18 42Z")
          }
          85%,100% {
            d:path("M18 42C37 31 54 43 50 68C54 89 37 106 18 98Q28 72 18 42Z")
          }
        }
        @keyframes mr {
          0%,36% {
            d:path("M122 42C103 31 86 43 90 68C86 89 103 106 122 98Q112 72 122 42Z")
          }
          55%,63% {
            d:path("M122 42C93 35 76 48 76 68C76 89 93 103 122 98Q112 72 122 42Z")
          }
          85%,100% {
            d:path("M122 42C103 31 86 43 90 68C86 89 103 106 122 98Q112 72 122 42Z")
          }
        }
        @keyframes vein {
          0%,36% {
            d:path("M58 12V32C58 51 58 90 58 108V128H82V108C82 90 82 51 82 32V12Z")
          }
          55%,63% {
            d:path("M58 12V32C67 51 67 90 58 108V128H82V108C73 90 73 51 82 32V12Z")
          }
          85%,100% {
            d:path("M58 12V32C58 51 58 90 58 108V128H82V108C82 90 82 51 82 32V12Z")
          }
        }
        @keyframes upper {
          0%,34% {
            d:path("M58 38L70 32M82 38L70 32")
          }
          36%,60% {
            d:path("M58 38L61 25M82 38L79 25")
          }
          62%,100% {
            d:path("M58 38L70 32M82 38L70 32")
          }
        }
        @keyframes lower {
          0%,28% {
            d:path("M58 113L61 100M82 113L79 100")
          }
          30%,62% {
            d:path("M58 113L70 107M82 113L70 107")
          }
          65%,100% {
            d:path("M58 113L61 100M82 113L79 100")
          }
        }
        @keyframes ejected {
          0%,39% {
            opacity:0;
            transform:translateY(0)
          }
          40% {
            opacity:1;
            transform:translateY(0)
          }
          61% {
            opacity:1;
            transform:translateY(-63px)
          }
          62%,100% {
            opacity:0
          }
        }
        @keyframes refill {
          0%,64% {
            opacity:0;
            transform:translateY(0)
          }
          65% {
            opacity:1;
            transform:translateY(0)
          }
          85% {
            opacity:1;
            transform:translateY(-46px)
          }
          86%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Venous Muscle Pump">
        <path class="muscle ml" d="M18 42C37 31 54 43 50 68C54 89 37 106 18 98Q28 72 18 42Z"/>
        <path class="muscle mr" d="M122 42C103 31 86 43 90 68C86 89 103 106 122 98Q112 72 122 42Z"/>
        <path class="fibres" d="M23 47Q42 70 23 94M31 44Q49 70 31 97M117 47Q98 70 117 94M109 44Q91 70 109 97"/>
        <path class="vein" d="M58 12V32C58 51 58 90 58 108V128H82V108C82 90 82 51 82 32V12Z"/>
        <path class="ink upper" d="M58 38L70 32M82 38L70 32"/>
        <path class="ink lower" d="M58 113L61 100M82 113L79 100"/>
        <path class="ink muted" d="M67 18L70 14L73 18"/>
        <circle class="blood ejected" cx="70" cy="80" r="4"/>
        <circle class="blood refill" cx="70" cy="126" r="4"/>
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

if (!customElements.get("concept-venous-muscle-pump")) {
  customElements.define("concept-venous-muscle-pump", ConceptVenousMusclePump);
}
