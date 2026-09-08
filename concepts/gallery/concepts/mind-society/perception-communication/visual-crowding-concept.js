// Visual Crowding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVisualCrowding extends HTMLElement {
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
          animation:left 10s ease-in-out infinite
        }
        .right {
          animation:right 10s ease-in-out infinite
        }
        @keyframes left {
          0%,30%,95%,100% {
            transform:translateX(24px)
          }
          48%,78% {
            transform:translateX(0)
          }
        }
        @keyframes right {
          0%,30%,95%,100% {
            transform:translateX(-24px)
          }
          48%,78% {
            transform:translateX(0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Visual Crowding">
        <path class="ink" d="M12 70H20M16 66V74"/>
        <g fill="currentColor" font-family="monospace" font-size="16" text-anchor="middle" dominant-baseline="central">
          <text class="left" x="52" y="70">H</text>
          <text x="90" y="70">R</text>
          <text class="right" x="128" y="70">K</text>
        </g>
        <text x="70" y="122" fill="#92aaa1" font-family="monospace" font-size="11" text-anchor="middle">fixate +</text>
        <path class="ink cue" d="M76 91H52m3-2-3 2 3 2M104 91H128m-3-2 3 2-3 2"/>
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

if (!customElements.get("concept-visual-crowding")) {
  customElements.define("concept-visual-crowding", ConceptVisualCrowding);
}
