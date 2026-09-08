// Metropolis Sampling. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMetropolisSampling extends HTMLElement {
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
        .q0 {
          opacity:0;
          animation:q0 9s linear infinite
        }
        @keyframes q0 {
          0%,7% {
            opacity:0
          }
          9%,18% {
            opacity:1
          }
          21%,100% {
            opacity:0
          }
        }
        .q1 {
          opacity:0;
          animation:q1 9s linear infinite
        }
        @keyframes q1 {
          0%,27% {
            opacity:0
          }
          29%,38% {
            opacity:1
          }
          41%,100% {
            opacity:0
          }
        }
        .q2 {
          opacity:0;
          animation:q2 9s linear infinite
        }
        @keyframes q2 {
          0%,47% {
            opacity:0
          }
          49%,58% {
            opacity:1
          }
          61%,100% {
            opacity:0
          }
        }
        .q3 {
          opacity:0;
          animation:q3 9s linear infinite
        }
        @keyframes q3 {
          0%,67% {
            opacity:0
          }
          69%,78% {
            opacity:1
          }
          81%,100% {
            opacity:0
          }
        }
        .current {
          animation:chain 9s ease-in-out infinite
        }
        @keyframes chain {
          0% {
            transform:translate(0,0)
          }
          7% {
            transform:translate(0px,0px)
          }
          15% {
            transform:translate(16.96px,-30.118px)
          }
          21% {
            transform:translate(16.96px,-30.118px)
          }
          27% {
            transform:translate(16.96px,-30.118px)
          }
          35% {
            transform:translate(36.04px,-45.78px)
          }
          41% {
            transform:translate(36.04px,-45.78px)
          }
          47% {
            transform:translate(36.04px,-45.78px)
          }
          55% {
            transform:translate(36.04px,-45.78px)
          }
          61% {
            transform:translate(36.04px,-45.78px)
          }
          67% {
            transform:translate(36.04px,-45.78px)
          }
          75% {
            transform:translate(43.46px,-36.055px)
          }
          81% {
            transform:translate(43.46px,-36.055px)
          }
          94%,100% {
            transform:translate(43.46px,-36.055px)
          }
        }
        .r0 {
          animation:record0 9s linear infinite
        }
        @keyframes record0 {
          0%,0% {
            opacity:0
          }
          0.1%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .r1 {
          animation:record1 9s linear infinite
        }
        @keyframes record1 {
          0%,21% {
            opacity:0
          }
          22%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .r2 {
          animation:record2 9s linear infinite
        }
        @keyframes record2 {
          0%,41% {
            opacity:0
          }
          42%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .r3 {
          animation:record3 9s linear infinite
        }
        @keyframes record3 {
          0%,61% {
            opacity:0
          }
          62%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .r4 {
          animation:record4 9s linear infinite
        }
        @keyframes record4 {
          0%,81% {
            opacity:0
          }
          82%,94% {
            opacity:1
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Metropolis Sampling">
        <path class="ink muted" d="M17 15V84H125M18 118H125"/>
        <path class="ink" d="M18 82.451L19.767 82.262L21.533 82.017L23.3 81.704L25.067 81.307L26.833 80.81L28.6 80.194L30.367 79.439L32.133 78.524L33.9 77.429L35.667 76.132L37.433 74.614L39.2 72.859L40.967 70.855L42.733 68.594L44.5 66.076L46.267 63.309L48.033 60.31L49.8 57.105L51.567 53.73L53.333 50.234L55.1 46.671L56.867 43.108L58.633 39.617L60.4 36.272L62.167 33.153L63.933 30.335L65.7 27.893L67.467 25.891L69.233 24.384L71 23.415L72.767 23.012L74.533 23.185L76.3 23.93L78.067 25.226L79.833 27.036L81.6 29.31L83.367 31.985L85.133 34.993L86.9 38.257L88.667 41.699L90.433 45.242L92.2 48.813L93.967 52.343L95.733 55.773L97.5 59.051L99.267 62.136L101.033 64.999L102.8 67.617L104.567 69.981L106.333 72.088L108.1 73.941L109.867 75.552L111.633 76.935L113.4 78.109L115.167 79.093L116.933 79.91L118.7 80.579L120.467 81.121L122.233 81.556L124 81.901"/>
        <circle class="current" cx="41.32" cy="70.423" r="4" fill="#f3c977" transform="translate(43.46 -36.055)"/>
        <path class="ink proposal q0" d="M41.32 70.423L58.28 40.306" stroke-dasharray="3 3" style="color:#77c9ef"/>
        <path class="ink proposal q1" d="M58.28 40.306L77.36 24.644" stroke-dasharray="3 3" style="color:#77c9ef"/>
        <path class="ink proposal q2" d="M77.36 24.644L111.28 76.676" stroke-dasharray="3 3" style="color:#ed8eab"/>
        <g class="q2">
          <circle cx="111.28" cy="76.676" r="4" fill="none" stroke="#ed8eab"/>
          <path d="M107.28 72.676L115.28 80.676M107.28 80.676L115.28 72.676" stroke="#ed8eab"/>
        </g>
        <path class="ink proposal q3" d="M77.36 24.644L84.78 34.368" stroke-dasharray="3 3" style="color:#77c9ef"/>
        <circle class="warm record r0" cx="41.32" cy="114" r="3"/>
        <circle class="warm record r1" cx="58.28" cy="114" r="3"/>
        <circle class="warm record r2" cx="77.36" cy="114" r="3"/>
        <circle class="warm record r3" cx="77.36" cy="106" r="3"/>
        <circle class="warm record r4" cx="84.78" cy="114" r="3"/>
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

if (!customElements.get("concept-metropolis-sampling")) {
  customElements.define("concept-metropolis-sampling", ConceptMetropolisSampling);
}
