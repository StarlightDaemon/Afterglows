// Markov Chain. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMarkovChain extends HTMLElement {
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
        .t0 {
          animation:transfer0 8s ease-in-out infinite
        }
        @keyframes transfer0 {
          0%,15% {
            transform:translate(0,0)
          }
          23% {
            transform:translate(38px,0)
          }
          35% {
            transform:translate(38px,38px)
          }
          44%,91% {
            transform:translate(-15px,38px)
          }
          96%,100% {
            transform:translate(0,0)
          }
        }
        .t1 {
          animation:transfer1 8s ease-in-out infinite
        }
        @keyframes transfer1 {
          0%,27% {
            transform:translate(0,0)
          }
          35% {
            transform:translate(53px,0)
          }
          47% {
            transform:translate(53px,38px)
          }
          56%,91% {
            transform:translate(-10px,38px)
          }
          96%,100% {
            transform:translate(0,0)
          }
        }
        .t2 {
          animation:transfer2 8s ease-in-out infinite
        }
        @keyframes transfer2 {
          0%,39% {
            transform:translate(0,0)
          }
          47% {
            transform:translate(63px,0)
          }
          59% {
            transform:translate(63px,-76px)
          }
          68%,91% {
            transform:translate(25px,-76px)
          }
          96%,100% {
            transform:translate(0,0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Markov Chain">
        <path class="ink muted" d="M24 41H124"/>
        <circle cx="14" cy="33" r="4" fill="#70edb1"/>
        <rect x="24" y="27" width="30" height="12" fill="#70edb1"/>
        <rect class="transfer t0" x="54" y="27" width="30" height="12" fill="#70edb1" transform="translate(-15 38)"/>
        <path class="ink muted" d="M54 23V43"/>
        <path class="ink muted" d="M24 79H124"/>
        <circle cx="14" cy="71" r="4" fill="#77c9ef"/>
        <rect x="24" y="65" width="15" height="12" fill="#77c9ef"/>
        <rect class="transfer t1" x="39" y="65" width="15" height="12" fill="#77c9ef" transform="translate(-10 38)"/>
        <path class="ink muted" d="M39 61V81"/>
        <path class="ink muted" d="M24 117H124"/>
        <circle cx="14" cy="109" r="4" fill="#ed8eab"/>
        <rect x="24" y="103" width="5" height="12" fill="#ed8eab"/>
        <rect class="transfer t2" x="29" y="103" width="5" height="12" fill="#ed8eab" transform="translate(25 -76)"/>
        <path class="ink muted" d="M29 99V119"/>
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

if (!customElements.get("concept-markov-chain")) {
  customElements.define("concept-markov-chain", ConceptMarkovChain);
}
