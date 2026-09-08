// Hemodialysis Membrane Exchange. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHemodialysisMembraneExchange extends HTMLElement {
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
        .dialysate {
          fill:#234b4c;
          stroke:#779d9d;
          stroke-width:1.5
        }
        .blood-lumen {
          fill:#4b303d
        }
        .membrane {
          fill:none;
          stroke:#bdacb4;
          stroke-width:2;
          stroke-dasharray:2 2
        }
        .blood-arrow {
          fill:none;
          stroke:#bb7f91;
          stroke-width:1
        }
        .solution-arrow {
          fill:none;
          stroke:#79c3c8;
          stroke-width:1.5
        }
        .rbc {
          fill:#c8899a;
          animation:rbc 10s linear infinite
        }
        .solution-solutes {
          fill:#aad5c8;
          animation:solution 10s linear infinite
        }
        .waste {
          fill:#e2c177;
          opacity:1
        }
        @keyframes rbc {
          0% {
            transform:translateX(-7px)
          }
          100% {
            transform:translateX(38px)
          }
        }
        @keyframes solution {
          0% {
            transform:translateX(14px)
          }
          100% {
            transform:translateX(-14px)
          }
        }
        .w0 {
          animation:w0 10s linear infinite
        }
        @keyframes w0 {
          0%,0% {
            opacity:0;
            transform:translate(0,0)
          }
          1% {
            opacity:1;
            transform:translate(0,0)
          }
          20% {
            opacity:1;
            transform:translate(8px,-28px)
          }
          50% {
            opacity:1;
            transform:translate(-25px,-28px)
          }
          51%,100% {
            opacity:0;
            transform:translate(-25px,-28px)
          }
        }
        .w1 {
          animation:w1 10s linear infinite
        }
        @keyframes w1 {
          0%,18% {
            opacity:0;
            transform:translate(0,0)
          }
          19% {
            opacity:1;
            transform:translate(0,0)
          }
          38% {
            opacity:1;
            transform:translate(8px,28px)
          }
          68% {
            opacity:1;
            transform:translate(-25px,28px)
          }
          69%,100% {
            opacity:0;
            transform:translate(-25px,28px)
          }
        }
        .w2 {
          animation:w2 10s linear infinite
        }
        @keyframes w2 {
          0%,36% {
            opacity:0;
            transform:translate(0,0)
          }
          37% {
            opacity:1;
            transform:translate(0,0)
          }
          56% {
            opacity:1;
            transform:translate(8px,-28px)
          }
          86% {
            opacity:1;
            transform:translate(-25px,-28px)
          }
          87%,100% {
            opacity:0;
            transform:translate(-25px,-28px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Hemodialysis Membrane Exchange">
        <rect class="dialysate" x="12" y="24" width="116" height="92" rx="7"/>
        <path class="blood-lumen" d="M12 59H128V81H12Z"/>
        <path class="membrane" d="M12 57H128M12 83H128"/>
        <path class="blood-arrow" d="M20 70H122M117 66L122 70L117 74"/>
        <path class="solution-arrow" d="M122 38H20M25 34L20 38L25 42M122 102H20M25 98L20 102L25 106"/>
        <g class="rbc">
          <ellipse cx="26" cy="70" rx="6" ry="3.5"/>
          <ellipse cx="73" cy="70" rx="6" ry="3.5"/>
        </g>
        <g class="solution-solutes">
          <rect x="38" y="32" width="3" height="3"/>
          <rect x="88" y="42" width="3" height="3"/>
          <rect x="72" y="97" width="3" height="3"/>
        </g>
        <circle class="waste w0" cx="48" cy="65" r="2"/>
        <circle class="waste w1" cx="79" cy="76" r="2"/>
        <circle class="waste w2" cx="103" cy="65" r="2"/>
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

if (!customElements.get("concept-hemodialysis-membrane-exchange")) {
  customElements.define("concept-hemodialysis-membrane-exchange", ConceptHemodialysisMembraneExchange);
}
