// Fracture Repair. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFractureRepair extends HTMLElement {
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
        .cortex {
          fill:#9c9e79;
          stroke:#d2cc9f;
          stroke-width:1.8
        }
        .marrow {
          fill:#273e30
        }
        .hematoma {
          fill:#8d425d;
          opacity:0;
          animation:hematoma 14s infinite
        }
        .soft {
          fill:#778878;
          opacity:.8;
          animation:soft 14s infinite, shape 14s infinite
        }
        .callus-shape:not(.soft) {
          animation:shape 14s infinite
        }
        .hard {
          fill:#b0a875;
          animation:hard 14s infinite
        }
        .texture {
          animation:texture 14s infinite
        }
        .bridge {
          fill:none;
          stroke:#d2cc9f;
          stroke-width:6;
          animation:bridge 14s infinite
        }
        .restored {
          animation:bridge 14s infinite
        }
        @keyframes hematoma {
          0%,5% {
            opacity:0
          }
          8%,25% {
            opacity:.85
          }
          50%,100% {
            opacity:0
          }
        }
        @keyframes soft {
          0%,19% {
            opacity:0
          }
          25%,58% {
            opacity:.8
          }
          80%,100% {
            opacity:.3
          }
        }
        @keyframes shape {
          0%,10%,100% {
            d:path("M58 69C58 56 64 51 72 53C81 51 85 60 84 73C86 87 78 91 70 89C60 92 56 81 58 69Z")
          }
          35%,75% {
            d:path("M45 69C43 47 60 38 72 43C90 38 100 57 96 73C101 97 87 105 70 99C53 104 41 87 45 69Z")
          }
        }
        @keyframes hard {
          0%,44.9% {
            opacity:0
          }
          45% {
            opacity:0
          }
          75%,100% {
            opacity:1
          }
        }
        @keyframes texture {
          0%,49% {
            opacity:0
          }
          55% {
            opacity:.2
          }
          80%,100% {
            opacity:1
          }
        }
        @keyframes bridge {
          0%,84.9% {
            opacity:0
          }
          85% {
            opacity:0
          }
          96%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Fracture Repair">
        <defs>
          <clipPath id="callus">
            <path class="callus-shape" d="M58 69C58 56 64 51 72 53C81 51 85 60 84 73C86 87 78 91 70 89C60 92 56 81 58 69Z"/>
          </clipPath>
          <pattern id="hard-matrix" width="7" height="7" patternUnits="userSpaceOnUse">
            <path d="M1 1L5 3M2 6L6 5" stroke="#e1d4a2" stroke-width="1.1"/>
          </pattern>
        </defs>
        <path class="cortex" d="M12 54H66L63 63L67 73L62 87H12ZM128 54H76L72 64L76 75L72 87H128Z"/>
        <path class="marrow" d="M12 62H62L59 68L63 77L59 80H12ZM128 62H75L70 66L74 77L70 80H128Z"/>
        <path class="hematoma" d="M58 47Q70 35 80 49Q96 50 88 65Q101 80 83 87Q76 101 64 90Q45 96 50 80Q39 65 53 58Z"/>
        <path class="soft callus-shape" d="M58 69C58 56 64 51 72 53C81 51 85 60 84 73C86 87 78 91 70 89C60 92 56 81 58 69Z"/>
        <g clip-path="url(#callus)">
          <rect class="hard" x="40" y="38" width="62" height="67"/>
          <rect class="texture" x="40" y="38" width="62" height="67" fill="url(#hard-matrix)"/>
        </g>
        <path class="bridge" d="M62 54H78M60 87H76"/>
        <path class="marrow restored" d="M59 62H77V80H59Z"/>
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

if (!customElements.get("concept-fracture-repair")) {
  customElements.define("concept-fracture-repair", ConceptFractureRepair);
}
