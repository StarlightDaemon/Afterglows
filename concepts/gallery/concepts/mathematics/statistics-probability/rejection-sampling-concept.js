// Rejection Sampling. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRejectionSampling extends HTMLElement {
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
          animation:proposal0 8s ease-in-out infinite
        }
        @keyframes proposal0 {
          0%,4% {
            opacity:0;
            transform:translate(0,0)
          }
          6% {
            opacity:1;
            transform:translate(0,0)
          }
          12%,94% {
            opacity:1;
            transform:translate(0,0px)
          }
          100% {
            opacity:0;
            transform:translate(0,0px)
          }
        }
        .p1 {
          animation:proposal1 8s ease-in-out infinite
        }
        @keyframes proposal1 {
          0%,13% {
            opacity:0;
            transform:translate(0,0)
          }
          15% {
            opacity:1;
            transform:translate(0,0)
          }
          21%,94% {
            opacity:1;
            transform:translate(0,30px)
          }
          100% {
            opacity:0;
            transform:translate(0,30px)
          }
        }
        .p2 {
          animation:proposal2 8s ease-in-out infinite
        }
        @keyframes proposal2 {
          0%,22% {
            opacity:0;
            transform:translate(0,0)
          }
          24% {
            opacity:1;
            transform:translate(0,0)
          }
          30%,94% {
            opacity:1;
            transform:translate(0,0px)
          }
          100% {
            opacity:0;
            transform:translate(0,0px)
          }
        }
        .p3 {
          animation:proposal3 8s ease-in-out infinite
        }
        @keyframes proposal3 {
          0%,31% {
            opacity:0;
            transform:translate(0,0)
          }
          33% {
            opacity:1;
            transform:translate(0,0)
          }
          39%,94% {
            opacity:1;
            transform:translate(0,51.75px)
          }
          100% {
            opacity:0;
            transform:translate(0,51.75px)
          }
        }
        .p4 {
          animation:proposal4 8s ease-in-out infinite
        }
        @keyframes proposal4 {
          0%,40% {
            opacity:0;
            transform:translate(0,0)
          }
          42% {
            opacity:1;
            transform:translate(0,0)
          }
          48%,94% {
            opacity:1;
            transform:translate(0,80.25px)
          }
          100% {
            opacity:0;
            transform:translate(0,80.25px)
          }
        }
        .p5 {
          animation:proposal5 8s ease-in-out infinite
        }
        @keyframes proposal5 {
          0%,49% {
            opacity:0;
            transform:translate(0,0)
          }
          51% {
            opacity:1;
            transform:translate(0,0)
          }
          57%,94% {
            opacity:1;
            transform:translate(0,44.25px)
          }
          100% {
            opacity:0;
            transform:translate(0,44.25px)
          }
        }
        .p6 {
          animation:proposal6 8s ease-in-out infinite
        }
        @keyframes proposal6 {
          0%,58% {
            opacity:0;
            transform:translate(0,0)
          }
          60% {
            opacity:1;
            transform:translate(0,0)
          }
          66%,94% {
            opacity:1;
            transform:translate(0,0px)
          }
          100% {
            opacity:0;
            transform:translate(0,0px)
          }
        }
        .p7 {
          animation:proposal7 8s ease-in-out infinite
        }
        @keyframes proposal7 {
          0%,67% {
            opacity:0;
            transform:translate(0,0)
          }
          69% {
            opacity:1;
            transform:translate(0,0)
          }
          75%,94% {
            opacity:1;
            transform:translate(0,31.5px)
          }
          100% {
            opacity:0;
            transform:translate(0,31.5px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Rejection Sampling">
        <path class="ink muted" d="M17 17V98H125M18 117H124"/>
        <path class="ink" d="M18 82.399L19.767 82.357L21.533 82.301L23.3 82.225L25.067 82.124L26.833 81.99L28.6 81.816L30.367 81.591L32.133 81.303L33.9 80.939L35.667 80.485L37.433 79.923L39.2 79.236L40.967 78.405L42.733 77.413L44.5 76.241L46.267 74.872L48.033 73.294L49.8 71.495L51.567 69.472L53.333 67.225L55.1 64.761L56.867 62.099L58.633 59.262L60.4 56.284L62.167 53.209L63.933 50.087L65.7 46.977L67.467 43.942L69.233 41.049L71 38.367L72.767 35.963L74.533 33.899L76.3 32.23L78.067 31.003L79.833 30.253L81.6 30.0L83.367 30.253L85.133 31.003L86.9 32.23L88.667 33.899L90.433 35.963L92.2 38.367L93.967 41.049L95.733 43.942L97.5 46.977L99.267 50.087L101.033 53.209L102.8 56.284L104.567 59.262L106.333 62.099L108.1 64.761L109.867 67.225L111.633 69.472L113.4 71.495L115.167 73.294L116.933 74.872L118.7 76.241L120.467 77.413L122.233 78.405L124 79.236"/>
        <path d="M18 21H124" stroke="#77c9ef" stroke-dasharray="4 3"/>
        <g class="proposal p0">
          <circle cx="28.6" cy="77.25" r="3" fill="#ed8eab"/>
          <path d="M24.6 73.25L32.6 81.25M24.6 81.25L32.6 73.25" stroke="#ed8eab"/>
        </g>
        <g class="proposal p1" transform="translate(0 30)">
          <circle cx="44.5" cy="87" r="3" fill="#f3c977"/>
        </g>
        <g class="proposal p2">
          <circle cx="58.28" cy="45.75" r="3" fill="#ed8eab"/>
          <path d="M54.28 41.75L62.28 49.75M54.28 49.75L62.28 41.75" stroke="#ed8eab"/>
        </g>
        <g class="proposal p3" transform="translate(0 51.75)">
          <circle cx="68.88" cy="65.25" r="3" fill="#f3c977"/>
        </g>
        <g class="proposal p4" transform="translate(0 80.25)">
          <circle cx="79.48" cy="36.75" r="3" fill="#f3c977"/>
        </g>
        <g class="proposal p5" transform="translate(0 44.25)">
          <circle cx="90.08" cy="72.75" r="3" fill="#f3c977"/>
        </g>
        <g class="proposal p6">
          <circle cx="103.86" cy="36" r="3" fill="#ed8eab"/>
          <path d="M99.86 32L107.86 40M99.86 40L107.86 32" stroke="#ed8eab"/>
        </g>
        <g class="proposal p7" transform="translate(0 31.5)">
          <circle cx="113.4" cy="85.5" r="3" fill="#f3c977"/>
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

if (!customElements.get("concept-rejection-sampling")) {
  customElements.define("concept-rejection-sampling", ConceptRejectionSampling);
}
