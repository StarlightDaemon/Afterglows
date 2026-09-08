// Network Address Port Translation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptNetworkAddressPortTranslation extends HTMLElement {
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
        text {
          fill:#b6d4c6;
          font:9px monospace;
          text-anchor:middle
        }
        .map-a {
          fill:#f3c977;
          animation:ma 10s infinite
        }
        .map-b {
          fill:#77c9ef;
          animation:mb 10s infinite
        }
        .packet {
          opacity:0
        }
        .a {
          animation:a 10s linear infinite
        }
        .b {
          animation:b 10s linear infinite
        }
        .route-a {
          stroke:#f3c977;
          opacity:.4;
          animation:ra 10s infinite
        }
        .route-b {
          stroke:#77c9ef;
          opacity:.4;
          animation:rb 10s infinite
        }
        @keyframes ma {
          0%,16% {
            opacity:0
          }
          17%,100% {
            opacity:1
          }
        }
        @keyframes mb {
          0%,36% {
            opacity:0
          }
          37%,100% {
            opacity:1
          }
        }
        @keyframes ra {
          0%,57% {
            opacity:0
          }
          58%,100% {
            opacity:.4
          }
        }
        @keyframes rb {
          0%,77% {
            opacity:0
          }
          78%,100% {
            opacity:.4
          }
        }
        @keyframes a {
          0%,5% {
            opacity:0;
            transform:translate(0,0)
          }
          6% {
            opacity:1;
            transform:translate(0,0)
          }
          17% {
            opacity:1;
            transform:translate(36px,29px)
          }
          25% {
            transform:translate(84px,29px)
          }
          30% {
            opacity:1;
            transform:translate(105px,32px)
          }
          30.1%,57% {
            opacity:0;
            transform:translate(105px,32px)
          }
          58% {
            opacity:1;
            transform:translate(105px,32px)
          }
          63% {
            transform:translate(84px,29px)
          }
          69% {
            transform:translate(36px,29px)
          }
          75% {
            opacity:1;
            transform:translate(0,0)
          }
          75.1%,100% {
            opacity:0
          }
        }
        @keyframes b {
          0%,25% {
            opacity:0;
            transform:translate(0,0)
          }
          26% {
            opacity:1;
            transform:translate(0,0)
          }
          37% {
            opacity:1;
            transform:translate(36px,-12px)
          }
          45% {
            transform:translate(84px,-12px)
          }
          50% {
            opacity:1;
            transform:translate(105px,-34px)
          }
          50.1%,77% {
            opacity:0;
            transform:translate(105px,-34px)
          }
          78% {
            opacity:1;
            transform:translate(105px,-34px)
          }
          83% {
            transform:translate(84px,-12px)
          }
          89% {
            transform:translate(36px,-12px)
          }
          95% {
            opacity:1;
            transform:translate(0,0)
          }
          95.1%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Network Address Port Translation">
        <path class="ink muted" d="M20 38L56 67H104L125 70L104 92H56L20 104"/>
        <path class="ink paper" d="M8 18H32V35H8ZM5 39H35M8 105H32V122H8ZM5 126H35"/>
        <rect class="ink paper" x="42" y="45" width="72" height="51" rx="5"/>
        <path class="ink muted" d="M42 70H114M74 45V96"/>
        <text x="21" y="13">.2</text>
        <text x="20" y="138">.3</text>
        <text x="58" y="61">5000</text>
        <text x="58" y="86">5000</text>
        <text class="map-a" x="94" y="61">40001</text>
        <text class="map-b" x="94" y="86">40002</text>
        <text x="79" y="34">203.0.113.9</text>
        <circle class="ink paper" cx="125" cy="70" r="9"/>
        <path class="ink muted" d="M118 70H132M125 63V77"/>
        <circle class="warm packet a" cx="20" cy="38" r="3.5"/>
        <circle class="cool packet b" cx="20" cy="104" r="3.5"/>
        <path class="ink route-a" d="M125 70L104 67H56L20 38"/>
        <path class="ink route-b" d="M125 70L104 92H56L20 104"/>
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

if (!customElements.get("concept-network-address-port-translation")) {
  customElements.define("concept-network-address-port-translation", ConceptNetworkAddressPortTranslation);
}
