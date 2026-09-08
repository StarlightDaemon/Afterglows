// Poisson Arrival Process. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPoissonArrivalProcess extends HTMLElement {
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
        .time-hand {
          animation:clock 9s linear infinite
        }
        @keyframes clock {
          0% {
            transform:translateX(0)
          }
          90%,100% {
            transform:translateX(108px)
          }
        }
        .e0 {
          animation:event0 9s linear infinite
        }
        @keyframes event0 {
          0%,2.025% {
            opacity:0
          }
          2.125%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e1 {
          animation:event1 9s linear infinite
        }
        @keyframes event1 {
          0%,10.2375% {
            opacity:0
          }
          10.3375%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e2 {
          animation:event2 9s linear infinite
        }
        @keyframes event2 {
          0%,11.475% {
            opacity:0
          }
          11.575%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e3 {
          animation:event3 9s linear infinite
        }
        @keyframes event3 {
          0%,19.35% {
            opacity:0
          }
          19.45%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e4 {
          animation:event4 9s linear infinite
        }
        @keyframes event4 {
          0%,31.6125% {
            opacity:0
          }
          31.713%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e5 {
          animation:event5 9s linear infinite
        }
        @keyframes event5 {
          0%,34.0875% {
            opacity:0
          }
          34.1875%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e6 {
          animation:event6 9s linear infinite
        }
        @keyframes event6 {
          0%,35.8875% {
            opacity:0
          }
          35.988%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e7 {
          animation:event7 9s linear infinite
        }
        @keyframes event7 {
          0%,49.95% {
            opacity:0
          }
          50.05%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e8 {
          animation:event8 9s linear infinite
        }
        @keyframes event8 {
          0%,52.9875% {
            opacity:0
          }
          53.0875%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e9 {
          animation:event9 9s linear infinite
        }
        @keyframes event9 {
          0%,54.1125% {
            opacity:0
          }
          54.2125%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e10 {
          animation:event10 9s linear infinite
        }
        @keyframes event10 {
          0%,55.575% {
            opacity:0
          }
          55.675%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e11 {
          animation:event11 9s linear infinite
        }
        @keyframes event11 {
          0%,56.925% {
            opacity:0
          }
          57.025%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e12 {
          animation:event12 9s linear infinite
        }
        @keyframes event12 {
          0%,71.1% {
            opacity:0
          }
          71.2%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .e13 {
          animation:event13 9s linear infinite
        }
        @keyframes event13 {
          0%,79.875% {
            opacity:0
          }
          79.975%,95% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Poisson Arrival Process">
        <path class="ink muted" d="M16 55H126"/>
        <path class="ink time-hand" d="M18 22V61" stroke="#f3c977"/>
        <rect class="ink muted" x="18" y="72" width="26" height="48"/>
        <rect class="count e0" x="21" y="115" width="20" height="5" fill="#70edb1"/>
        <rect class="count e1" x="21" y="108" width="20" height="5" fill="#70edb1"/>
        <rect class="count e2" x="21" y="101" width="20" height="5" fill="#70edb1"/>
        <rect class="count e3" x="21" y="94" width="20" height="5" fill="#70edb1"/>
        <rect class="ink muted" x="45" y="72" width="26" height="48"/>
        <rect class="count e4" x="48" y="115" width="20" height="5" fill="#70edb1"/>
        <rect class="count e5" x="48" y="108" width="20" height="5" fill="#70edb1"/>
        <rect class="count e6" x="48" y="101" width="20" height="5" fill="#70edb1"/>
        <rect class="ink muted" x="72" y="72" width="26" height="48"/>
        <rect class="count e7" x="75" y="115" width="20" height="5" fill="#70edb1"/>
        <rect class="count e8" x="75" y="108" width="20" height="5" fill="#70edb1"/>
        <rect class="count e9" x="75" y="101" width="20" height="5" fill="#70edb1"/>
        <rect class="count e10" x="75" y="94" width="20" height="5" fill="#70edb1"/>
        <rect class="count e11" x="75" y="87" width="20" height="5" fill="#70edb1"/>
        <rect class="ink muted" x="99" y="72" width="26" height="48"/>
        <rect class="count e12" x="102" y="115" width="20" height="5" fill="#70edb1"/>
        <rect class="count e13" x="102" y="108" width="20" height="5" fill="#70edb1"/>
        <path class="ink event e0" d="M20.43 37V54"/>
        <path class="ink event e1" d="M30.285 37V54"/>
        <path class="ink event e2" d="M31.77 37V54"/>
        <path class="ink event e3" d="M41.22 37V54"/>
        <path class="ink event e4" d="M55.935 37V54"/>
        <path class="ink event e5" d="M58.905 37V54"/>
        <path class="ink event e6" d="M61.065 37V54"/>
        <path class="ink event e7" d="M77.94 37V54"/>
        <path class="ink event e8" d="M81.585 37V54"/>
        <path class="ink event e9" d="M82.935 37V54"/>
        <path class="ink event e10" d="M84.69 37V54"/>
        <path class="ink event e11" d="M86.31 37V54"/>
        <path class="ink event e12" d="M103.32 37V54"/>
        <path class="ink event e13" d="M113.85 37V54"/>
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

if (!customElements.get("concept-poisson-arrival-process")) {
  customElements.define("concept-poisson-arrival-process", ConceptPoissonArrivalProcess);
}
