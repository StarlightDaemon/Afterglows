// ARP Address Resolution. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptArpAddressResolution extends HTMLElement {
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
        .broadcast {
          stroke:#f3c977;
          stroke-dasharray:100;
          opacity:0;
          animation:broadcast 10s linear infinite
        }
        .reply {
          stroke:#77c9ef;
          stroke-dasharray:100;
          opacity:.6;
          animation:reply 10s linear infinite
        }
        .match {
          opacity:0;
          animation:match 10s infinite
        }
        .mapping {
          animation:mapping 10s infinite
        }
        .data {
          opacity:0;
          animation:data 10s linear infinite
        }
        @keyframes broadcast {
          0%,5% {
            opacity:0;
            stroke-dashoffset:100
          }
          6% {
            opacity:1;
            stroke-dashoffset:100
          }
          28%,32% {
            opacity:1;
            stroke-dashoffset:0
          }
          33%,100% {
            opacity:0;
            stroke-dashoffset:0
          }
        }
        @keyframes reply {
          0%,34% {
            opacity:0;
            stroke-dashoffset:100
          }
          35% {
            opacity:1;
            stroke-dashoffset:100
          }
          52% {
            opacity:1;
            stroke-dashoffset:0
          }
          53%,100% {
            opacity:.6;
            stroke-dashoffset:0
          }
        }
        @keyframes match {
          0%,27% {
            opacity:0
          }
          28%,51% {
            opacity:1
          }
          52%,100% {
            opacity:0
          }
        }
        @keyframes mapping {
          0%,51.9% {
            opacity:0
          }
          52%,100% {
            opacity:1
          }
        }
        @keyframes data {
          0%,66% {
            opacity:0;
            transform:translate(0,0)
          }
          67% {
            opacity:1;
            transform:translate(0,0)
          }
          77% {
            opacity:1;
            transform:translate(37px,-20px)
          }
          90% {
            opacity:1;
            transform:translate(77px,-55px)
          }
          90.1%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="ARP Address Resolution">
        <path class="ink muted" d="M31 85L68 65L108 30M68 65L108 96"/>
        <path class="ink paper" d="M8 76H32V93H8ZM4 97H36M107 17H131V34H107ZM103 38H135M106 87H130V104H106ZM102 108H134M58 57H78V73H58Z"/>
        <text x="20" y="70">.10</text>
        <text x="119" y="13">.20</text>
        <text x="118" y="83">.30</text>
        <path class="broadcast ink" pathLength="100" d="M31 85L68 65L108 30M68 65L108 96"/>
        <path class="reply ink" pathLength="100" d="M108 30L68 65L31 85"/>
        <circle class="match ink" cx="119" cy="26" r="17"/>
        <circle class="solid data" cx="31" cy="85" r="3"/>
        <rect class="ink muted" x="16" y="118" width="108" height="16" rx="2"/>
        <text class="mapping" x="70" y="129">.20 → MAC …14</text>
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

if (!customElements.get("concept-arp-address-resolution")) {
  customElements.define("concept-arp-address-resolution", ConceptArpAddressResolution);
}
