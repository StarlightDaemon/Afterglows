// Balloon-Expanded Stent. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBalloonExpandedStent extends HTMLElement {
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
        .artery {
          fill:#342631;
          stroke:#b2808e;
          stroke-width:4
        }
        .plaque {
          fill:#c2a262;
          stroke:#e0c791;
          stroke-width:1.5
        }
        .top {
          animation:top 12s infinite
        }
        .bottom {
          animation:bottom 12s infinite
        }
        .blood {
          fill:#bc8191;
          animation:flow 12s linear infinite
        }
        .catheter {
          animation:catheter 12s infinite
        }
        .shaft {
          fill:none;
          stroke:#aaa6b5;
          stroke-width:2
        }
        .balloon {
          fill:#77c9ef66;
          stroke:#a0d9e5;
          stroke-width:1.5;
          animation:inflate 12s infinite
        }
        .stent {
          animation:stent 12s infinite
        }
        .mesh {
          fill:none;
          stroke:#d6dbd5;
          stroke-width:1.5;
          animation:expand 12s infinite
        }
        @keyframes catheter {
          0%,5%,100% {
            transform:translateX(-100px)
          }
          24%,74% {
            transform:translateX(0)
          }
          93% {
            transform:translateX(-140px)
          }
        }
        @keyframes stent {
          0%,5% {
            transform:translateX(-100px)
          }
          24%,100% {
            transform:translateX(0)
          }
        }
        @keyframes inflate {
          0%,28%,74%,100% {
            ry:3px
          }
          48%,58% {
            ry:18px
          }
        }
        @keyframes expand {
          0%,28% {
            d:path("M45 70L49.5 66L54 70L49.5 74ZM54 70L58.5 66L63 70L58.5 74ZM63 70L67.5 66L72 70L67.5 74ZM72 70L76.5 66L81 70L76.5 74ZM81 70L85.5 66L90 70L85.5 74ZM90 70L94.5 66L99 70L94.5 74Z")
          }
          48%,100% {
            d:path("M45 70L49.5 52L54 70L49.5 88ZM54 70L58.5 52L63 70L58.5 88ZM63 70L67.5 52L72 70L67.5 88ZM72 70L76.5 52L81 70L76.5 88ZM81 70L85.5 52L90 70L85.5 88ZM90 70L94.5 52L99 70L94.5 88Z")
          }
        }
        @keyframes top {
          0%,28% {
            d:path("M35 45C49 45 48 64 70 62C92 64 91 45 105 45Z")
          }
          48%,100% {
            d:path("M16 45C28 45 30 52 70 51C110 52 112 45 124 45Z")
          }
        }
        @keyframes bottom {
          0%,28% {
            d:path("M35 95C49 95 48 76 70 78C92 76 91 95 105 95Z")
          }
          48%,100% {
            d:path("M16 95C28 95 30 88 70 89C110 88 112 95 124 95Z")
          }
        }
        @keyframes flow {
          0%,28% {
            opacity:1;
            transform:translateX(0)
          }
          34%,75% {
            opacity:0;
            transform:translateX(0)
          }
          82% {
            opacity:1;
            transform:translateX(0)
          }
          96% {
            opacity:1;
            transform:translateX(25px)
          }
          98%,99% {
            opacity:0;
            transform:translateX(30px)
          }
          99.1%,100% {
            opacity:0;
            transform:translateX(0)
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .catheter {
            display:none
          }
          .top {
            d:path("M16 45C28 45 30 52 70 51C110 52 112 45 124 45Z")
          }
          .bottom {
            d:path("M16 95C28 95 30 88 70 89C110 88 112 95 124 95Z")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Balloon-Expanded Stent">
        <path class="artery" d="M10 43H130V97H10Z"/>
        <path class="plaque top" d="M35 45C49 45 48 64 70 62C92 64 91 45 105 45Z"/>
        <path class="plaque bottom" d="M35 95C49 95 48 76 70 78C92 76 91 95 105 95Z"/>
        <g class="blood">
          <ellipse cx="23" cy="70" rx="6" ry="3"/>
          <ellipse cx="115" cy="70" rx="6" ry="3"/>
        </g>
        <g class="catheter">
          <path class="shaft" d="M-35 70H107"/>
          <ellipse class="balloon" cx="72" cy="70" rx="27" ry="3"/>
        </g>
        <g class="stent">
          <path class="mesh" d="M45 70L49.5 52L54 70L49.5 88ZM54 70L58.5 52L63 70L58.5 88ZM63 70L67.5 52L72 70L67.5 88ZM72 70L76.5 52L81 70L76.5 88ZM81 70L85.5 52L90 70L85.5 88ZM90 70L94.5 52L99 70L94.5 88Z"/>
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

if (!customElements.get("concept-balloon-expanded-stent")) {
  customElements.define("concept-balloon-expanded-stent", ConceptBalloonExpandedStent);
}
