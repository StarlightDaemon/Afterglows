// Shannon Entropy. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptShannonEntropy extends HTMLElement {
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
        .p0 {
          opacity:0;
          animation:p0 10s steps(1,end) infinite;
        }
        @keyframes p0 {
          0% {
            opacity:1;
          }
          25%,100% {
            opacity:0;
          }
        }
        .p1 {
          opacity:0;
          animation:p1 10s steps(1,end) infinite;
        }
        @keyframes p1 {
          0% {
            opacity:0;
          }
          25% {
            opacity:1;
          }
          50%,100% {
            opacity:0;
          }
        }
        .p2 {
          opacity:0;
          animation:p2 10s steps(1,end) infinite;
        }
        @keyframes p2 {
          0% {
            opacity:0;
          }
          50% {
            opacity:1;
          }
          75%,100% {
            opacity:0;
          }
        }
        .p3 {
          opacity:1;
          animation:p3 10s steps(1,end) infinite;
        }
        @keyframes p3 {
          0% {
            opacity:0;
          }
          75% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#cce4d5;
          text-anchor:middle;
        }
        .axis {
          font-size:10px;
          fill:#88a996;
        }
        .entropy {
          font-size:15px;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Shannon Entropy">
        <path class="ink muted" d="M15 52V109H124"/>
        <text class="axis" transform="translate(9 82) rotate(-90)">−log₂p</text>
        <text class="axis" x="70" y="136">p</text>
        <g class="pose p0">
          <text class="entropy" x="70" y="26">H = 0</text>
          <rect x="18" y="117" width="104" height="5" fill="#70edb1"/>
        </g>
        <g class="pose p1">
          <text class="entropy" x="70" y="26">H = 1</text>
          <rect x="18" y="82" width="52" height="26" fill="#70edb144" stroke="#70edb1" stroke-width="1"/>
          <rect x="18" y="117" width="52" height="5" fill="#70edb1"/>
          <rect x="70" y="82" width="52" height="26" fill="#77c9ef44" stroke="#77c9ef" stroke-width="1"/>
          <rect x="70" y="117" width="52" height="5" fill="#77c9ef"/>
        </g>
        <g class="pose p2">
          <text class="entropy" x="70" y="26">H = 1.5</text>
          <rect x="18" y="82" width="52" height="26" fill="#70edb144" stroke="#70edb1" stroke-width="1"/>
          <rect x="18" y="117" width="52" height="5" fill="#70edb1"/>
          <rect x="70" y="56" width="26" height="52" fill="#77c9ef44" stroke="#77c9ef" stroke-width="1"/>
          <rect x="70" y="117" width="26" height="5" fill="#77c9ef"/>
          <rect x="96" y="56" width="26" height="52" fill="#f3c97744" stroke="#f3c977" stroke-width="1"/>
          <rect x="96" y="117" width="26" height="5" fill="#f3c977"/>
        </g>
        <g class="pose p3">
          <text class="entropy" x="70" y="26">H = 2</text>
          <rect x="18" y="56" width="26" height="52" fill="#70edb144" stroke="#70edb1" stroke-width="1"/>
          <rect x="18" y="117" width="26" height="5" fill="#70edb1"/>
          <rect x="44" y="56" width="26" height="52" fill="#77c9ef44" stroke="#77c9ef" stroke-width="1"/>
          <rect x="44" y="117" width="26" height="5" fill="#77c9ef"/>
          <rect x="70" y="56" width="26" height="52" fill="#f3c97744" stroke="#f3c977" stroke-width="1"/>
          <rect x="70" y="117" width="26" height="5" fill="#f3c977"/>
          <rect x="96" y="56" width="26" height="52" fill="#ed8eab44" stroke="#ed8eab" stroke-width="1"/>
          <rect x="96" y="117" width="26" height="5" fill="#ed8eab"/>
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

if (!customElements.get("concept-shannon-entropy")) {
  customElements.define("concept-shannon-entropy", ConceptShannonEntropy);
}
