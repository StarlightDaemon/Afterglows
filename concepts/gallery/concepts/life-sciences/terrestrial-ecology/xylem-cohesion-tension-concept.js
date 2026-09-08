// Xylem Cohesion-Tension. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptXylemCohesionTension extends HTMLElement {
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
          stroke:#8f986f;
          stroke-width:5;
          stroke-linejoin:round
        }
        .water {
          fill:#235e74;
          animation:water 12s linear infinite
        }
        .meniscus {
          fill:none;
          stroke:#9cdeed;
          stroke-width:2;
          animation:meniscus 12s linear infinite
        }
        .tracer,.vapor {
          fill:#b1e8ef
        }
        .flow {
          animation:flow 12s linear infinite
        }
        .vapor {
          opacity:0
        }
        .a {
          animation:a 12s linear infinite
        }
        .b {
          animation:b 12s linear infinite
        }
        .up {
          stroke:#6cb9cd;
          opacity:.6
        }
        @keyframes water {
          0%,15% {
            d:path('M51,38Q70,38 89,38V57H80V125H60V57H51Z')
          }
          45%,100% {
            d:path('M51,38Q70,60 89,38V57H80V125H60V57H51Z')
          }
        }
        @keyframes meniscus {
          0%,15% {
            d:path('M51,38Q70,38 89,38')
          }
          45%,100% {
            d:path('M51,38Q70,60 89,38')
          }
        }
        @keyframes flow {
          0%,25% {
            transform:translateY(0);
            opacity:1
          }
          80%,90% {
            transform:translateY(-20px);
            opacity:1
          }
          98%,100% {
            transform:translateY(-20px);
            opacity:0
          }
        }
        @keyframes a {
          0%,15% {
            opacity:0;
            transform:translate(0,-6px)
          }
          20% {
            opacity:1;
            transform:translate(0,-3px)
          }
          45% {
            opacity:1;
            transform:translate(3px,-25px)
          }
          55%,100% {
            opacity:0;
            transform:translate(3px,-27px)
          }
        }
        @keyframes b {
          0%,28% {
            opacity:0;
            transform:translate(0,0)
          }
          33% {
            opacity:1;
            transform:translate(0,0)
          }
          57% {
            opacity:1;
            transform:translate(-12px,-23px)
          }
          64%,100% {
            opacity:0;
            transform:translate(-14px,-25px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Xylem Cohesion-Tension">
        <path class="wall" d="M45,32H51V57H60V125M95,32H89V57H80V125"/>
        <path class="water" d="M51,38Q70,60 89,38V57H80V125H60V57H51Z"/>
        <path class="meniscus" d="M51,38Q70,60 89,38"/>
        <path class="ink muted" d="M23,26Q32,17 43,23M98,25Q110,16 121,26"/>
        <g class="flow">
          <circle class="tracer" cx="70" cy="118" r="2.3"/>
          <circle class="tracer" cx="70" cy="98" r="2.3"/>
          <circle class="tracer" cx="70" cy="78" r="2.3"/>
        </g>
        <g class="vapor a">
          <circle cx="70" cy="44" r="2.2"/>
          <circle cx="68" cy="42" r="1"/>
          <circle cx="72" cy="42" r="1"/>
        </g>
        <g class="vapor b">
          <circle cx="57" cy="41" r="2.2"/>
          <circle cx="55" cy="39" r="1"/>
          <circle cx="59" cy="39" r="1"/>
        </g>
        <path class="up ink" d="M105,112V76M100,81L105,76L110,81"/>
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

if (!customElements.get("concept-xylem-cohesion-tension")) {
  customElements.define("concept-xylem-cohesion-tension", ConceptXylemCohesionTension);
}
