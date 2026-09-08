// Convex Hull. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptConvexHull extends HTMLElement {
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
        .boundary {
          fill:#70edb10b;
          stroke:#70edb1;
          stroke-width:2;
          stroke-linejoin:round;
          animation:boundary 9s steps(1,end) infinite;
        }
        @keyframes boundary {
          0% {
            d:path("M20 115L20 115");
            fill:none;
          }
          8% {
            d:path("M20 115L92 115");
          }
          22% {
            d:path("M20 115L92 115L110 65");
          }
          36% {
            d:path("M20 115L92 115L110 65L56 90");
          }
          58% {
            d:path("M20 115L92 115L110 65");
          }
          66% {
            d:path("M20 115L92 115L110 65L74 40");
          }
          78% {
            d:path("M20 115L92 115L110 65L74 40L38 65");
          }
          88%,100% {
            d:path("M20 115L92 115L110 65L74 40L38 65Z");
            fill:#70edb10b;
          }
        }
        .candidate {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5;
          stroke-dasharray:3 2;
          opacity:0;
          animation:test 9s steps(1,end) infinite;
        }
        .turn {
          fill:#ed8eab22;
          stroke:#ed8eab;
          stroke-width:1;
          opacity:0;
          animation:test 9s steps(1,end) infinite;
        }
        .rejected {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1;
          animation:reject 9s steps(1,end) infinite;
        }
        .interior {
          fill:#6c8779;
        }
        .scan {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5;
          opacity:0;
          animation:scan 9s steps(1,end) infinite;
        }
        @keyframes test {
          0% {
            opacity:0;
          }
          48% {
            opacity:1;
          }
          58%,100% {
            opacity:0;
          }
        }
        @keyframes reject {
          0% {
            opacity:0;
          }
          58%,100% {
            opacity:1;
          }
        }
        @keyframes scan {
          0% {
            opacity:0;
          }
          8% {
            opacity:1;
            transform:translate(54px,50px);
          }
          22% {
            transform:translate(72px,0px);
          }
          36% {
            transform:translate(18px,25px);
          }
          48% {
            transform:translate(36px,-25px);
          }
          78% {
            transform:translate(0px,0px);
          }
          88%,100% {
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Convex Hull">
        <path class="boundary" d="M20 115L92 115L110 65L74 40L38 65Z"/>
        <path class="candidate" d="M56 90L74 40"/>
        <path class="turn" d="M110 65L56 90L74 40Z"/>
        <circle class="warm" cx="20" cy="115" r="3.5"/>
        <circle class="solid" cx="38" cy="65" r="3.5"/>
        <circle class="interior" cx="56" cy="90" r="3.5"/>
        <circle class="solid" cx="74" cy="40" r="3.5"/>
        <circle class="solid" cx="92" cy="115" r="3.5"/>
        <circle class="solid" cx="110" cy="65" r="3.5"/>
        <circle class="scan" cx="38" cy="65" r="7"/>
        <circle class="rejected" cx="56" cy="90" r="7"/>
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

if (!customElements.get("concept-convex-hull")) {
  customElements.define("concept-convex-hull", ConceptConvexHull);
}
