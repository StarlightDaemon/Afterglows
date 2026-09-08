// Plant Cell Plasmolysis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPlantCellPlasmolysis extends HTMLElement {
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
        .wall {
          fill:none;
          stroke:#a0b786;
          stroke-width:4
        }
        .solution {
          fill:#112d32
        }
        .membrane {
          fill:#264d35;
          stroke:#8bc794;
          stroke-width:1.5
        }
        .vacuole {
          fill:#397387;
          stroke:#77c9ef;
          stroke-width:1;
          transform-origin:70px 73px;
          transform:scale(.75,.82);
          animation:vacuole 12s linear infinite
        }
        .nucleus {
          fill:#a6a0c8
        }
        .chloroplast {
          fill:#76af62
        }
        .protoplast {
          transform-origin:70px 71px;
          transform:scale(.64,.73);
          animation:shrink 12s ease-in-out infinite,reset 12s linear infinite
        }
        .solute {
          fill:#edbb78
        }
        .water {
          fill:#9bdae7;
          opacity:0
        }
        .w1 {
          animation:w1 12s linear infinite
        }
        .w2 {
          animation:w2 12s linear infinite
        }
        .w3 {
          animation:w3 12s linear infinite
        }
        @keyframes reset {
          0%,97%,100% {
            opacity:0
          }
          6%,90% {
            opacity:1
          }
        }
        @keyframes shrink {
          0%,15% {
            transform:scale(1)
          }
          60%,100% {
            transform:scale(.64,.73)
          }
        }
        @keyframes vacuole {
          0%,15% {
            transform:scale(1)
          }
          60%,100% {
            transform:scale(.75,.82)
          }
        }
        @keyframes w1 {
          0%,16% {
            opacity:0;
            transform:translate(0,0)
          }
          20% {
            opacity:1;
            transform:translate(0,0)
          }
          43% {
            opacity:1;
            transform:translate(-23px,-5px)
          }
          48%,100% {
            opacity:0;
            transform:translate(-25px,-5px)
          }
        }
        @keyframes w2 {
          0%,27% {
            opacity:0;
            transform:translate(-3px,0)
          }
          31% {
            opacity:1;
            transform:translate(-3px,0)
          }
          52% {
            opacity:1;
            transform:translate(25px,5px)
          }
          58%,100% {
            opacity:0;
            transform:translate(28px,5px)
          }
        }
        @keyframes w3 {
          0%,35% {
            opacity:0;
            transform:translate(0,-10px)
          }
          40% {
            opacity:1;
            transform:translate(0,-10px)
          }
          61% {
            opacity:1;
            transform:translate(0,22px)
          }
          67%,100% {
            opacity:0;
            transform:translate(0,24px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Plant Cell Plasmolysis">
        <rect class="wall" x="24" y="20" width="92" height="102" rx="8"/>
        <rect class="solution" x="28" y="24" width="84" height="94" rx="6"/>
        <g class="protoplast">
          <rect class="membrane" x="31" y="27" width="78" height="88" rx="10"/>
          <ellipse class="vacuole" cx="70" cy="73" rx="31" ry="34"/>
          <ellipse class="nucleus" cx="96" cy="38" rx="5" ry="6"/>
          <ellipse class="chloroplast" cx="39" cy="48" rx="3" ry="6"/>
          <ellipse class="chloroplast" cx="103" cy="87" rx="3" ry="6"/>
          <ellipse class="chloroplast" cx="41" cy="104" rx="5" ry="3"/>
        </g>
        <g class="solute">
          <path d="M14,34h5v5h-5zM120,49h5v5h-5zM12,93h5v5h-5zM119,109h5v5h-5zM52,10h5v5h-5zM87,125h5v5h-5z"/>
        </g>
        <g class="water w1">
          <circle cx="37" cy="59" r="2"/>
          <circle cx="35" cy="57" r="1"/>
          <circle cx="39" cy="57" r="1"/>
        </g>
        <g class="water w2">
          <circle cx="98" cy="74" r="2"/>
          <circle cx="96" cy="72" r="1"/>
          <circle cx="100" cy="72" r="1"/>
        </g>
        <g class="water w3">
          <circle cx="65" cy="105" r="2"/>
          <circle cx="63" cy="103" r="1"/>
          <circle cx="67" cy="103" r="1"/>
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

if (!customElements.get("concept-plant-cell-plasmolysis")) {
  customElements.define("concept-plant-cell-plasmolysis", ConceptPlantCellPlasmolysis);
}
