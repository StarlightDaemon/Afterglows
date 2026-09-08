// Law of Large Numbers. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLawOfLargeNumbers extends HTMLElement {
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
        .elapsed {
          animation:accumulate 8s linear infinite
        }
        @keyframes accumulate {
          0% {
            width:2px
          }
          85%,100% {
            width:113px
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Law of Large Numbers">
        <path class="ink muted" d="M16 17V120H127"/>
        <path d="M16 70H127" stroke="#f3c977" stroke-width="1.5" stroke-dasharray="4 3"/>
        <defs>
          <clipPath id="time">
            <rect class="elapsed" x="16" y="15" width="113" height="105"/>
          </clipPath>
        </defs>
        <path class="ink" stroke="#70edb1" style="color:#70edb1" d="M18 29L23 53L29 38L35 84L42 62L48 77L56 57L64 75L74 65L85 72L94 67L107 71L123 69" clip-path="url(#time)"/>
        <path class="ink" stroke="#77c9ef" style="color:#77c9ef" d="M18 107L24 84L31 97L39 74L46 58L53 72L60 79L69 68L77 72L86 65L96 69L108 73L123 70" clip-path="url(#time)"/>
        <path class="ink" stroke="#ed8eab" style="color:#ed8eab" d="M18 51L25 92L34 72L43 87L51 66L60 76L71 68L80 65L89 72L100 68L111 71L123 70" clip-path="url(#time)"/>
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

if (!customElements.get("concept-law-of-large-numbers")) {
  customElements.define("concept-law-of-large-numbers", ConceptLawOfLargeNumbers);
}
