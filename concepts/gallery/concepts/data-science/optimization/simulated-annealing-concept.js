// Simulated Annealing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSimulatedAnnealing extends HTMLElement {
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
        .tour0 {
          opacity:0;
          animation:first 10s steps(1,end) infinite
        }
        .tour1 {
          opacity:0;
          animation:uphill 10s steps(1,end) infinite
        }
        .tour2 {
          animation:best 10s steps(1,end) infinite
        }
        .rejected {
          opacity:0;
          animation:reject 10s linear infinite
        }
        .temperature {
          transform:scaleX(.06);
          transform-origin:21px 126px;
          animation:cool 10s linear infinite
        }
        @keyframes first {
          0% {
            opacity:1
          }
          20%,100% {
            opacity:0
          }
        }
        @keyframes uphill {
          0% {
            opacity:0
          }
          20% {
            opacity:1
          }
          45%,100% {
            opacity:0
          }
        }
        @keyframes best {
          0% {
            opacity:0
          }
          45%,100% {
            opacity:1
          }
        }
        @keyframes reject {
          0%,65% {
            opacity:0
          }
          70%,80% {
            opacity:1
          }
          85%,100% {
            opacity:0
          }
        }
        @keyframes cool {
          0% {
            transform:scaleX(1)
          }
          90%,100% {
            transform:scaleX(.06)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Simulated Annealing">
        <path class="tour tour0" d="M24 31L65 18L111 35L76 109L115 85L25 90Z" fill="none" stroke="#70edb1" stroke-width="2"/>
        <path class="tour tour1" d="M24 31L111 35L65 18L76 109L115 85L25 90Z" fill="none" stroke="#ed8eab" stroke-width="2"/>
        <path class="tour tour2" d="M24 31L65 18L111 35L115 85L76 109L25 90Z" fill="none" stroke="#70edb1" stroke-width="2"/>
        <circle cx="24" cy="31" r="4" fill="#f3c977"/>
        <circle cx="65" cy="18" r="4" fill="#f3c977"/>
        <circle cx="111" cy="35" r="4" fill="#f3c977"/>
        <circle cx="115" cy="85" r="4" fill="#f3c977"/>
        <circle cx="76" cy="109" r="4" fill="#f3c977"/>
        <circle cx="25" cy="90" r="4" fill="#f3c977"/>
        <path class="rejected" d="M24 31L111 35L65 18L76 109L115 85L25 90Z" fill="none" stroke="#ed8eab" stroke-dasharray="4 3"/>
        <path class="rejected" d="M65 54L77 66M65 66L77 54" stroke="#ed8eab" stroke-width="3"/>
        <rect x="21" y="124" width="98" height="4" fill="#375b51"/>
        <rect class="temperature" x="21" y="124" width="98" height="4" fill="#ed8eab"/>
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

if (!customElements.get("concept-simulated-annealing")) {
  customElements.define("concept-simulated-annealing", ConceptSimulatedAnnealing);
}
