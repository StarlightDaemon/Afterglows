// Nearest-Neighbor Classification. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptNearestNeighborClassification extends HTMLElement {
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
        .v0 {
          transform:translate(-4px,74px);
          animation:v0 7s ease-in-out infinite;
        }
        @keyframes v0 {
          0%,42% {
            opacity:0;
            transform:translate(0px,0px);
          }
          44% {
            opacity:1;
            transform:translate(0px,0px);
          }
          65%,100% {
            opacity:1;
            transform:translate(-4px,74px);
          }
        }
        .v1 {
          transform:translate(-16px,53px);
          animation:v1 7s ease-in-out infinite;
        }
        @keyframes v1 {
          0%,42% {
            opacity:0;
            transform:translate(0px,0px);
          }
          44% {
            opacity:1;
            transform:translate(0px,0px);
          }
          65%,100% {
            opacity:1;
            transform:translate(-16px,53px);
          }
        }
        .v2 {
          transform:translate(29px,40px);
          animation:v2 7s ease-in-out infinite;
        }
        @keyframes v2 {
          0%,42% {
            opacity:0;
            transform:translate(0px,0px);
          }
          44% {
            opacity:1;
            transform:translate(0px,0px);
          }
          65%,100% {
            opacity:1;
            transform:translate(29px,40px);
          }
        }
        .radius {
          fill:#70edb10b;
          stroke:#70edb1;
          stroke-width:1.2;
          stroke-dasharray:3 2;
          transform-origin:70px 58px;
          animation:grow 7s linear infinite;
        }
        .decision {
          animation:decision 7s steps(1,end) infinite;
        }
        .query {
          opacity:0;
          animation:query 7s steps(1,end) infinite;
        }
        @keyframes grow {
          0%,10% {
            transform:scale(0);
          }
          42%,100% {
            transform:scale(1);
          }
        }
        @keyframes decision {
          0% {
            opacity:0;
          }
          72%,100% {
            opacity:1;
          }
        }
        @keyframes query {
          0% {
            opacity:1;
          }
          72%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Nearest-Neighbor Classification">
        <circle class="radius" cx="70" cy="58" r="22.3"/>
        <circle class="cool" cx="58" cy="42" r="3.5"/>
        <circle class="cool" cx="86" cy="63" r="3.5"/>
        <path class="warm" d="M57 72l4 7h-8Z"/>
        <path class="warm" d="M26 28l4 7h-8Z"/>
        <path class="warm" d="M112 30l4 7h-8Z"/>
        <circle class="cool" cx="29" cy="89" r="3.5"/>
        <path class="warm" d="M104 88l4 7h-8Z"/>
        <path class="ink query" d="M70 52l6 6l-6 6l-6 -6Z"/>
        <circle class="cool decision" cx="70" cy="58" r="4"/>
        <g class="vote v0">
          <circle class="cool" cx="58" cy="42" r="3.5"/>
        </g>
        <g class="vote v1">
          <circle class="cool" cx="86" cy="63" r="3.5"/>
        </g>
        <g class="vote v2">
          <path class="warm" d="M57 72l4 7h-8Z"/>
        </g>
        <path class="ink muted" d="M44 108v17h52v-17"/>
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

if (!customElements.get("concept-nearest-neighbor-classification")) {
  customElements.define("concept-nearest-neighbor-classification", ConceptNearestNeighborClassification);
}
