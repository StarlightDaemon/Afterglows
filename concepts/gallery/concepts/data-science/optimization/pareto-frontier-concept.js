// Pareto Frontier. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptParetoFrontier extends HTMLElement {
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
        .a0 {
          opacity:0;
          animation:area0 8s linear infinite
        }
        @keyframes area0 {
          0%,0% {
            opacity:0
          }
          5%,16% {
            opacity:1
          }
          19%,100% {
            opacity:0
          }
        }
        .a1 {
          opacity:0;
          animation:area1 8s linear infinite
        }
        @keyframes area1 {
          0%,17% {
            opacity:0
          }
          22%,33% {
            opacity:1
          }
          36%,100% {
            opacity:0
          }
        }
        .a2 {
          opacity:0;
          animation:area2 8s linear infinite
        }
        @keyframes area2 {
          0%,34% {
            opacity:0
          }
          39%,50% {
            opacity:1
          }
          53%,100% {
            opacity:0
          }
        }
        .a3 {
          opacity:0;
          animation:area3 8s linear infinite
        }
        @keyframes area3 {
          0%,51% {
            opacity:0
          }
          56%,67% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        .d0 {
          opacity:.12;
          animation:dominated0 8s linear infinite
        }
        @keyframes dominated0 {
          0%,12% {
            opacity:1
          }
          15%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .d1 {
          opacity:.12;
          animation:dominated1 8s linear infinite
        }
        @keyframes dominated1 {
          0%,29% {
            opacity:1
          }
          32%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .d2 {
          opacity:.12;
          animation:dominated2 8s linear infinite
        }
        @keyframes dominated2 {
          0%,46% {
            opacity:1
          }
          49%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .d3 {
          opacity:.12;
          animation:dominated3 8s linear infinite
        }
        @keyframes dominated3 {
          0%,63% {
            opacity:1
          }
          66%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .d4 {
          opacity:.12;
          animation:dominated4 8s linear infinite
        }
        @keyframes dominated4 {
          0%,12% {
            opacity:1
          }
          15%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .d5 {
          opacity:.12;
          animation:dominated5 8s linear infinite
        }
        @keyframes dominated5 {
          0%,29% {
            opacity:1
          }
          32%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .d6 {
          opacity:.12;
          animation:dominated6 8s linear infinite
        }
        @keyframes dominated6 {
          0%,46% {
            opacity:1
          }
          49%,94% {
            opacity:.12
          }
          100% {
            opacity:1
          }
        }
        .frontier {
          animation:frontier 8s linear infinite
        }
        @keyframes frontier {
          0%,60% {
            opacity:.1
          }
          75%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pareto Frontier">
        <path class="ink muted" d="M16 15V124H126M12 21L16 15L20 21M120 120L126 124L120 128"/>
        <rect class="dominance a0" x="17" y="27" width="13" height="96" fill="#77c9ef" fill-opacity=".1" stroke="#77c9ef" stroke-opacity=".3"/>
        <circle cx="30" cy="27" r="4" fill="#f3c977"/>
        <rect class="dominance a1" x="17" y="38" width="38" height="85" fill="#77c9ef" fill-opacity=".1" stroke="#77c9ef" stroke-opacity=".3"/>
        <circle cx="55" cy="38" r="4" fill="#f3c977"/>
        <rect class="dominance a2" x="17" y="57" width="62" height="66" fill="#77c9ef" fill-opacity=".1" stroke="#77c9ef" stroke-opacity=".3"/>
        <circle cx="79" cy="57" r="4" fill="#f3c977"/>
        <rect class="dominance a3" x="17" y="91" width="87" height="32" fill="#77c9ef" fill-opacity=".1" stroke="#77c9ef" stroke-opacity=".3"/>
        <circle cx="104" cy="91" r="4" fill="#f3c977"/>
        <circle class="inferior d0" cx="24" cy="61" r="3" fill="#77c9ef"/>
        <circle class="inferior d1" cx="38" cy="85" r="3" fill="#77c9ef"/>
        <circle class="inferior d2" cx="64" cy="92" r="3" fill="#77c9ef"/>
        <circle class="inferior d3" cx="83" cy="113" r="3" fill="#77c9ef"/>
        <circle class="inferior d4" cx="20" cy="108" r="3" fill="#77c9ef"/>
        <circle class="inferior d5" cx="49" cy="112" r="3" fill="#77c9ef"/>
        <circle class="inferior d6" cx="63" cy="67" r="3" fill="#77c9ef"/>
        <path class="frontier" stroke-dasharray="3 3" d="M30 27L55 38L79 57L104 91" fill="none" stroke="#f3c977" stroke-width="2"/>
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

if (!customElements.get("concept-pareto-frontier")) {
  customElements.define("concept-pareto-frontier", ConceptParetoFrontier);
}
