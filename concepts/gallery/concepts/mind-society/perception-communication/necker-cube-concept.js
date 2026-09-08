// Necker Cube. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptNeckerCube extends HTMLElement {
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
        .a {
          animation:a 10s steps(1,end) infinite
        }
        .b {
          animation:b 10s steps(1,end) infinite
        }
        @keyframes a {
          0% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        @keyframes b {
          0% {
            opacity:0
          }
          50% {
            opacity:1
          }
          90%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Necker Cube">
        <path class="ink" d="M25 47H77V99H25ZM53 19H105V71H53ZM25 47 53 19M77 47 105 19M77 99 105 71M25 99 53 71"/>
        <g transform="translate(24 110)">
          <path class="ink muted" d="M0 7H14V21H0ZM7 0H21V14H7ZM0 7 7 0M14 7 21 0M14 21 21 14M0 21 7 14"/>
          <path fill="#70edb1" fill-opacity=".28" d="M0 7H14V21H0Z"/>
          <rect class="ink a" x="-5" y="-4" width="31" height="29" rx="3"/>
        </g>
        <g transform="translate(91 110)">
          <path class="ink muted" d="M0 7H14V21H0ZM7 0H21V14H7ZM0 7 7 0M14 7 21 0M14 21 21 14M0 21 7 14"/>
          <path fill="#70edb1" fill-opacity=".28" d="M7 0H21V14H7Z"/>
          <rect class="ink b" x="-5" y="-4" width="31" height="29" rx="3"/>
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

if (!customElements.get("concept-necker-cube")) {
  customElements.define("concept-necker-cube", ConceptNeckerCube);
}
