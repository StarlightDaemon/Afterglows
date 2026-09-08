// Saltatory Conduction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSaltatoryConduction extends HTMLElement {
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
        .myelin {
          fill:#566e57;
          stroke:#91aa7c;
          stroke-width:1.5
        }
        .lamella {
          fill:none;
          stroke:#9aaf88;
          stroke-width:1
        }
        .axon {
          fill:#1e4444;
          stroke:#679b98;
          stroke-width:1
        }
        .node {
          stroke:#739e92;
          stroke-width:3
        }
        .current {
          fill:none;
          stroke:#d1ba7288;
          stroke-width:4;
          stroke-dasharray:66.667 100;
          animation:current 8s linear infinite
        }
        @keyframes current {
          0%,10% {
            stroke-dasharray:0 100
          }
          28% {
            stroke-dasharray:33.333 100
          }
          48% {
            stroke-dasharray:66.667 100
          }
          68%,82% {
            stroke-dasharray:100 100;
            opacity:1
          }
          92%,100% {
            stroke-dasharray:100 100;
            opacity:0
          }
        }
        .n0 {
          animation:n0 8s linear infinite
        }
        @keyframes n0 {
          0%,7% {
            stroke:#739e92
          }
          10%,14% {
            stroke:#f4d578;
            stroke-width:5
          }
          18%,92% {
            stroke:#745f88;
            stroke-width:3
          }
          100% {
            stroke:#739e92
          }
        }
        .n1 {
          stroke:#745f88;
          animation:n1 8s linear infinite
        }
        @keyframes n1 {
          0%,27% {
            stroke:#739e92
          }
          30%,34% {
            stroke:#f4d578;
            stroke-width:5
          }
          38%,92% {
            stroke:#745f88;
            stroke-width:3
          }
          100% {
            stroke:#739e92
          }
        }
        .n2 {
          stroke:#f4d578;
          stroke-width:5;
          animation:n2 8s linear infinite
        }
        @keyframes n2 {
          0%,47% {
            stroke:#739e92
          }
          50%,54% {
            stroke:#f4d578;
            stroke-width:5
          }
          58%,92% {
            stroke:#745f88;
            stroke-width:3
          }
          100% {
            stroke:#739e92
          }
        }
        .n3 {
          animation:n3 8s linear infinite
        }
        @keyframes n3 {
          0%,67% {
            stroke:#739e92
          }
          70%,74% {
            stroke:#f4d578;
            stroke-width:5
          }
          78%,92% {
            stroke:#745f88;
            stroke-width:3
          }
          100% {
            stroke:#739e92
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Saltatory Conduction">
        <rect class="myelin" x="15" y="54" width="23" height="32" rx="8"/>
        <rect class="lamella" x="18" y="57" width="17" height="26" rx="6"/>
        <rect class="lamella" x="21" y="60" width="11" height="20" rx="4"/>
        <rect class="myelin" x="50" y="54" width="23" height="32" rx="8"/>
        <rect class="lamella" x="53" y="57" width="17" height="26" rx="6"/>
        <rect class="lamella" x="56" y="60" width="11" height="20" rx="4"/>
        <rect class="myelin" x="85" y="54" width="23" height="32" rx="8"/>
        <rect class="lamella" x="88" y="57" width="17" height="26" rx="6"/>
        <rect class="lamella" x="91" y="60" width="11" height="20" rx="4"/>
        <path class="axon" d="M7 67H129V73H7Z"/>
        <path class="current" pathLength="100" d="M11 70H116"/>
        <path class="node n0" d="M11 63V77"/>
        <path class="node n1" d="M46 63V77"/>
        <path class="node n2" d="M81 63V77"/>
        <path class="node n3" d="M116 63V77"/>
        <path class="ink muted" d="M23 107H115M109 102L115 107L109 112"/>
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

if (!customElements.get("concept-saltatory-conduction")) {
  customElements.define("concept-saltatory-conduction", ConceptSaltatoryConduction);
}
