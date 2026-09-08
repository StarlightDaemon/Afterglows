// Agglomerative Clustering. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAgglomerativeClustering extends HTMLElement {
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
        .b0 {
          animation:b0 9s linear infinite;
        }
        @keyframes b0 {
          0%,10% {
            stroke-dashoffset:1;
          }
          24%,100% {
            stroke-dashoffset:0;
          }
        }
        .b1 {
          animation:b1 9s linear infinite;
        }
        @keyframes b1 {
          0%,28% {
            stroke-dashoffset:1;
          }
          42%,100% {
            stroke-dashoffset:0;
          }
        }
        .b2 {
          animation:b2 9s linear infinite;
        }
        @keyframes b2 {
          0%,46% {
            stroke-dashoffset:1;
          }
          60%,100% {
            stroke-dashoffset:0;
          }
        }
        .b3 {
          animation:b3 9s linear infinite;
        }
        @keyframes b3 {
          0%,64% {
            stroke-dashoffset:1;
          }
          78%,100% {
            stroke-dashoffset:0;
          }
        }
        .branch {
          stroke-dasharray:1;
          stroke-dashoffset:0;
          stroke-width:2;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Agglomerative Clustering">
        <path class="ink muted" d="M12 100V32m-3 61h6m-6 -16h6m-6 -16h6m-6 -16h6"/>
        <path class="ink branch b0" pathLength="1" d="M20 102V75.4H31V102"/>
        <path class="ink branch b1" pathLength="1" d="M58 102V61H78V102"/>
        <path class="ink branch b2" pathLength="1" d="M25.5 75.4V49.8H68V61"/>
        <path class="ink branch b3" pathLength="1" d="M46.75 49.8V41.8H110V102"/>
        <circle class="warm" cx="20" cy="105" r="3"/>
        <circle class="warm" cx="31" cy="105" r="3"/>
        <circle class="warm" cx="58" cy="105" r="3"/>
        <circle class="warm" cx="78" cy="105" r="3"/>
        <circle class="warm" cx="110" cy="105" r="3"/>
        <path class="ink muted" d="M20 116H110"/>
        <path class="ink muted" d="M20 113v6"/>
        <path class="ink muted" d="M31 113v6"/>
        <path class="ink muted" d="M58 113v6"/>
        <path class="ink muted" d="M78 113v6"/>
        <path class="ink muted" d="M110 113v6"/>
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

if (!customElements.get("concept-agglomerative-clustering")) {
  customElements.define("concept-agglomerative-clustering", ConceptAgglomerativeClustering);
}
