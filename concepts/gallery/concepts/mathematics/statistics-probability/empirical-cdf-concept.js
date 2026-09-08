// Empirical Cumulative Distribution. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEmpiricalCdf extends HTMLElement {
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
        .reveal {
          animation:reveal 7s linear infinite
        }
        .threshold {
          animation:threshold 7s linear infinite
        }
        .tracker {
          animation:tracker 7s linear infinite
        }
        @keyframes reveal {
          0% {
            width:0
          }
          85%,100% {
            width:112px
          }
        }
        @keyframes threshold {
          0% {
            transform:translateX(0)
          }
          85%,100% {
            transform:translateX(109px)
          }
        }
        @keyframes tracker {
          0% {
            transform:translate(0,0)
          }
          6.04% {
            transform:translate(8px,0px)
          }
          6.24% {
            transform:translate(8px,-14px)
          }
          19.30% {
            transform:translate(25px,-14px)
          }
          19.50% {
            transform:translate(25px,-28px)
          }
          27.87% {
            transform:translate(36px,-28px)
          }
          28.07% {
            transform:translate(36px,-42px)
          }
          46.59% {
            transform:translate(60px,-42px)
          }
          46.79% {
            transform:translate(60px,-56px)
          }
          59.85% {
            transform:translate(77px,-56px)
          }
          60.05% {
            transform:translate(77px,-70px)
          }
          76.22% {
            transform:translate(98px,-70px)
          }
          76.42% {
            transform:translate(98px,-84px)
          }
          85%,100% {
            transform:translate(109px,-84px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Empirical Cumulative Distribution">
        <path class="ink muted" d="M16 16V113H126"/>
        <circle class="warm" cx="25" cy="121" r="2.5"/>
        <circle class="warm" cx="42" cy="121" r="2.5"/>
        <circle class="warm" cx="53" cy="121" r="2.5"/>
        <circle class="warm" cx="77" cy="121" r="2.5"/>
        <circle class="warm" cx="94" cy="121" r="2.5"/>
        <circle class="warm" cx="115" cy="121" r="2.5"/>
        <defs>
          <clipPath id="reveal">
            <rect class="reveal" x="16" y="12" width="112" height="102"/>
          </clipPath>
        </defs>
        <path class="ink" d="M17 112H25V98H42V84H53V70H77V56H94V42H115V28H126" clip-path="url(#reveal)"/>
        <line class="ink warm threshold" x1="17" y1="16" x2="17" y2="124" stroke="#f3c977"/>
        <circle class="cool tracker" cx="17" cy="112" r="4"/>
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

if (!customElements.get("concept-empirical-cdf")) {
  customElements.define("concept-empirical-cdf", ConceptEmpiricalCdf);
}
