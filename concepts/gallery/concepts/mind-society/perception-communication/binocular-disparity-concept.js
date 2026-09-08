// Binocular Disparity. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBinocularDisparity extends HTMLElement {
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
        .left {
          animation:left 10s linear infinite
        }
        .right {
          animation:right 10s linear infinite
        }
        .depth {
          animation:depth 10s linear infinite
        }
        @keyframes left {
          0%,25%,90%,100% {
            cx:47
          }
          40% {
            cx:35
          }
          55%,75% {
            cx:29
          }
        }
        @keyframes right {
          0%,25%,90%,100% {
            cx:93
          }
          40% {
            cx:105
          }
          55%,75% {
            cx:111
          }
        }
        @keyframes depth {
          0%,25%,90%,100% {
            cx:32
          }
          40% {
            cx:70
          }
          55%,75% {
            cx:108
          }
        }
        .cue {
          display:none
        }
        @media(prefers-reduced-motion:reduce) {
          .cue {
            display:block
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Binocular Disparity">
        <g class="ink muted">
          <rect x="15" y="55" width="40" height="58" rx="3"/>
          <rect x="85" y="55" width="40" height="58" rx="3"/>
          <path d="M35 74V96M24 85H46M105 74V96M94 85H116M32 24H108"/>
        </g>
        <g fill="#92aaa1" font-family="monospace" font-size="10" text-anchor="middle">
          <text x="35" y="127">L</text>
          <text x="105" y="127">R</text>
          <text x="32" y="15">near</text>
          <text x="70" y="15">ref</text>
          <text x="108" y="15">far</text>
        </g>
        <circle class="warm depth" cx="32" cy="24" r="3"/>
        <circle class="solid left" cx="47" cy="85" r="3.5"/>
        <circle class="solid right" cx="93" cy="85" r="3.5"/>
        <path class="ink cue" d="M35 101H47m0-2v4M105 101H93m0-2v4"/>
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

if (!customElements.get("concept-binocular-disparity")) {
  customElements.define("concept-binocular-disparity", ConceptBinocularDisparity);
}
