// Simplex Linear Programming. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSimplexLinearProgramming extends HTMLElement {
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
        .pivot {
          animation:pivot 8s linear infinite
        }
        .objective {
          animation:objective 8s linear infinite;
          transform:translateX(152px)
        }
        .pivot-path {
          animation:route 8s linear infinite;
          stroke-dasharray:1
        }
        @keyframes pivot {
          0% {
            transform:translate(0px,0px)
          }
          24% {
            transform:translate(0px,-45px)
          }
          48% {
            transform:translate(27px,-83px)
          }
          72% {
            transform:translate(69px,-83px)
          }
          94%,100% {
            transform:translate(69px,-83px)
          }
        }
        @keyframes objective {
          0% {
            transform:translateX(0px)
          }
          24% {
            transform:translateX(45px)
          }
          48% {
            transform:translateX(110px)
          }
          72% {
            transform:translateX(152px)
          }
          94%,100% {
            transform:translateX(152px)
          }
        }
        @keyframes route {
          0% {
            stroke-dashoffset:1
          }
          72%,100% {
            stroke-dashoffset:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Simplex Linear Programming">
        <path d="M22 109L22 64L49 26L91 26L120 65L97 109Z" fill="#70edb1" fill-opacity=".08" stroke="#70edb1" stroke-width="1.8"/>
        <defs>
          <clipPath id="plot">
            <rect x="14" y="15" width="112" height="112"/>
          </clipPath>
        </defs>
        <g clip-path="url(#plot)">
          <path class="objective" d="M-110 -23L190 277" stroke="#f3c977" stroke-width="2" stroke-dasharray="4 3"/>
        </g>
        <circle cx="22" cy="109" r="3" fill="#70edb1"/>
        <circle cx="22" cy="64" r="3" fill="#70edb1"/>
        <circle cx="49" cy="26" r="3" fill="#70edb1"/>
        <circle cx="91" cy="26" r="3" fill="#70edb1"/>
        <circle cx="120" cy="65" r="3" fill="#70edb1"/>
        <circle cx="97" cy="109" r="3" fill="#70edb1"/>
        <path class="pivot-path" d="M22 109L22 64L49 26L91 26" fill="none" stroke="#77c9ef" stroke-width="3" pathLength="1"/>
        <circle class="pivot" cx="22" cy="109" r="4.5" fill="#f3c977" transform="translate(69 -83)"/>
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

if (!customElements.get("concept-simplex-linear-programming")) {
  customElements.define("concept-simplex-linear-programming", ConceptSimplexLinearProgramming);
}
