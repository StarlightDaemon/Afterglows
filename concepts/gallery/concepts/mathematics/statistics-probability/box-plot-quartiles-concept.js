// Box Plot Quartiles. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBoxPlotQuartiles extends HTMLElement {
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
        .guide {
          stroke-dasharray:41;
          animation:project 8s ease-in-out infinite
        }
        .summary {
          animation:summary 8s ease-in-out infinite;
          transform-origin:60px 80px
        }
        .rank-brackets {
          animation:ranks 8s linear infinite
        }
        @keyframes project {
          0%,20% {
            stroke-dashoffset:41
          }
          50%,90% {
            stroke-dashoffset:0
          }
          100% {
            stroke-dashoffset:41
          }
        }
        @keyframes summary {
          0%,35% {
            opacity:0;
            transform:scaleX(.1)
          }
          60%,90% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        @keyframes ranks {
          0% {
            opacity:.2
          }
          20%,80% {
            opacity:1
          }
          100% {
            opacity:.2
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Box Plot Quartiles">
        <path class="ink muted" d="M15 115H120"/>
        <circle cx="20" cy="32" r="3" fill="#70edb1"/>
        <circle cx="29" cy="32" r="3" fill="#70edb1"/>
        <circle cx="36" cy="32" r="3" fill="#70edb1"/>
        <circle cx="43" cy="32" r="3" fill="#77c9ef"/>
        <circle cx="49" cy="32" r="3" fill="#77c9ef"/>
        <circle cx="56" cy="32" r="3" fill="#77c9ef"/>
        <circle cx="64" cy="32" r="3" fill="#f3c977"/>
        <circle cx="71" cy="32" r="3" fill="#f3c977"/>
        <circle cx="77" cy="32" r="3" fill="#f3c977"/>
        <circle cx="84" cy="32" r="3" fill="#ed8eab"/>
        <circle cx="91" cy="32" r="3" fill="#ed8eab"/>
        <circle cx="100" cy="32" r="3" fill="#ed8eab"/>
        <path class="guide g0" d="M20 39V80" fill="none" stroke="#375b51" stroke-dasharray="3 3"/>
        <path class="guide g1" d="M39.5 39V80" fill="none" stroke="#375b51" stroke-dasharray="3 3"/>
        <path class="guide g2" d="M60 39V80" fill="none" stroke="#375b51" stroke-dasharray="3 3"/>
        <path class="guide g3" d="M80.5 39V80" fill="none" stroke="#375b51" stroke-dasharray="3 3"/>
        <path class="guide g4" d="M100 39V80" fill="none" stroke="#375b51" stroke-dasharray="3 3"/>
        <g class="summary ink">
          <path d="M20 80H100M20 71V89M100 71V89"/>
          <rect class="paper" x="39.5" y="66" width="41" height="28"/>
          <path d="M60 66V94" stroke="#f3c977"/>
        </g>
        <g class="rank-brackets ink muted">
          <path d="M17 19V13H40V19M41 19V13H59V19M61 19V13H81V19M82 19V13H103V19"/>
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

if (!customElements.get("concept-box-plot-quartiles")) {
  customElements.define("concept-box-plot-quartiles", ConceptBoxPlotQuartiles);
}
