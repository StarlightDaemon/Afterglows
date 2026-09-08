// Autocorrelation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAutocorrelation extends HTMLElement {
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
        .l0 {
          animation:lag0 8s steps(1,end) infinite
        }
        @keyframes lag0 {
          0% {
            opacity:0
          }
          8%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .l1 {
          animation:lag1 8s steps(1,end) infinite
        }
        @keyframes lag1 {
          0% {
            opacity:0
          }
          26%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .l2 {
          animation:lag2 8s steps(1,end) infinite
        }
        @keyframes lag2 {
          0% {
            opacity:0
          }
          44%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .l3 {
          animation:lag3 8s steps(1,end) infinite
        }
        @keyframes lag3 {
          0% {
            opacity:0
          }
          62%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .l4 {
          animation:lag4 8s steps(1,end) infinite
        }
        @keyframes lag4 {
          0% {
            opacity:0
          }
          80%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .shift {
          animation:lags 8s steps(1,end) infinite
        }
        @keyframes lags {
          0% {
            transform:translateX(0)
          }
          18% {
            transform:translateX(12px)
          }
          36% {
            transform:translateX(24px)
          }
          54% {
            transform:translateX(36px)
          }
          72%,94% {
            transform:translateX(48px)
          }
          100% {
            transform:translateX(0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Autocorrelation">
        <path class="ink muted" d="M19 35H121M19 72H121M20 110H120"/>
        <defs>
          <clipPath id="window">
            <rect x="19" y="45" width="103" height="44"/>
          </clipPath>
        </defs>
        <path class="ink" d="M25 35V22"/>
        <circle class="solid" cx="25" cy="22" r="2"/>
        <path class="ink" d="M37 35V35"/>
        <circle class="solid" cx="37" cy="35" r="2"/>
        <path class="ink" d="M49 35V48"/>
        <circle class="solid" cx="49" cy="48" r="2"/>
        <path class="ink" d="M61 35V35"/>
        <circle class="solid" cx="61" cy="35" r="2"/>
        <path class="ink" d="M73 35V22"/>
        <circle class="solid" cx="73" cy="22" r="2"/>
        <path class="ink" d="M85 35V35"/>
        <circle class="solid" cx="85" cy="35" r="2"/>
        <path class="ink" d="M97 35V48"/>
        <circle class="solid" cx="97" cy="48" r="2"/>
        <path class="ink" d="M109 35V35"/>
        <circle class="solid" cx="109" cy="35" r="2"/>
        <g clip-path="url(#window)">
          <g class="shift">
            <path class="ink" style="color:#77c9ef" d="M25 72V59"/>
            <circle class="cool" cx="25" cy="59" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M37 72V72"/>
            <circle class="cool" cx="37" cy="72" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M49 72V85"/>
            <circle class="cool" cx="49" cy="85" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M61 72V72"/>
            <circle class="cool" cx="61" cy="72" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M73 72V59"/>
            <circle class="cool" cx="73" cy="59" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M85 72V72"/>
            <circle class="cool" cx="85" cy="72" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M97 72V85"/>
            <circle class="cool" cx="97" cy="85" r="2"/>
            <path class="ink" style="color:#77c9ef" d="M109 72V72"/>
            <circle class="cool" cx="109" cy="72" r="2"/>
          </g>
        </g>
        <g class="lag l0">
          <path d="M27 110V95" stroke="#f3c977" stroke-width="6"/>
          <circle cx="27" cy="95" r="2" fill="#f3c977"/>
        </g>
        <g class="lag l1">
          <path d="M48 110V110" stroke="#f3c977" stroke-width="6"/>
          <circle cx="48" cy="110" r="2" fill="#f3c977"/>
        </g>
        <g class="lag l2">
          <path d="M69 110V121.25" stroke="#f3c977" stroke-width="6"/>
          <circle cx="69" cy="121.25" r="2" fill="#f3c977"/>
        </g>
        <g class="lag l3">
          <path d="M90 110V110" stroke="#f3c977" stroke-width="6"/>
          <circle cx="90" cy="110" r="2" fill="#f3c977"/>
        </g>
        <g class="lag l4">
          <path d="M111 110V102.5" stroke="#f3c977" stroke-width="6"/>
          <circle cx="111" cy="102.5" r="2" fill="#f3c977"/>
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

if (!customElements.get("concept-autocorrelation")) {
  customElements.define("concept-autocorrelation", ConceptAutocorrelation);
}
