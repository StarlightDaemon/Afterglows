// DHCP Address Lease. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDhcpAddressLease extends HTMLElement {
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
        .d,.o,.r,.a {
          font-size:8px;
          opacity:0
        }
        .d {
          animation:d 12s infinite
        }
        .o {
          animation:o 12s infinite
        }
        .r {
          animation:r 12s infinite
        }
        .a {
          animation:a 12s infinite
        }
        .packet {
          opacity:0;
          animation:packet 12s linear infinite
        }
        .address {
          animation:address 12s infinite
        }
        .lease {
          fill:#70edb1;
          animation:lease 12s infinite
        }
        .clock {
          stroke:#f3c977;
          animation:clock 12s linear infinite
        }
        .old {
          stroke:#ed8eab;
          stroke-dasharray:2 2;
          opacity:.6
        }
        .renew {
          font-size:8px;
          animation:renew 12s infinite
        }
        @keyframes d {
          0%,10% {
            opacity:1
          }
          10.1%,100% {
            opacity:0
          }
        }
        @keyframes o {
          0%,10% {
            opacity:0
          }
          10.1%,20% {
            opacity:1
          }
          20.1%,100% {
            opacity:0
          }
        }
        @keyframes r {
          0%,20% {
            opacity:0
          }
          20.1%,30% {
            opacity:1
          }
          30.1%,64% {
            opacity:0
          }
          64.1%,70% {
            opacity:1
          }
          70.1%,100% {
            opacity:0
          }
        }
        @keyframes a {
          0%,30% {
            opacity:0
          }
          30.1%,40% {
            opacity:1
          }
          40.1%,70% {
            opacity:0
          }
          70.1%,76% {
            opacity:1
          }
          76.1%,100% {
            opacity:0
          }
        }
        @keyframes packet {
          0% {
            opacity:1;
            transform:translateX(0)
          }
          10% {
            opacity:1;
            transform:translateX(56px)
          }
          20% {
            opacity:1;
            transform:translateX(0)
          }
          30% {
            opacity:1;
            transform:translateX(56px)
          }
          40% {
            opacity:1;
            transform:translateX(0)
          }
          40.1%,64% {
            opacity:0;
            transform:translateX(0)
          }
          65% {
            opacity:1;
            transform:translateX(0)
          }
          70% {
            opacity:1;
            transform:translateX(56px)
          }
          76% {
            opacity:1;
            transform:translateX(0)
          }
          76.1%,100% {
            opacity:0
          }
        }
        @keyframes address {
          0%,39.9% {
            opacity:0
          }
          40%,100% {
            opacity:1
          }
        }
        @keyframes lease {
          0%,39.9% {
            opacity:.1;
            width:69.333px
          }
          40%,75.9% {
            opacity:1;
            width:69.333px
          }
          76%,100% {
            opacity:1;
            width:104px
          }
        }
        @keyframes clock {
          0%,40% {
            transform:translateX(-35.533px)
          }
          65%,70% {
            transform:translateX(-.866px)
          }
          76%,100% {
            transform:translateX(0)
          }
        }
        @keyframes renew {
          0%,64% {
            opacity:0
          }
          65%,100% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="DHCP Address Lease">
        <path class="ink paper" d="M13 15H37V32H13ZM9 36H41M104 13H125V38H104ZM108 20H120M108 29H120"/>
        <path class="ink muted" d="M42 26H100"/>
        <text class="d" x="70" y="20">DISCOVER</text>
        <text class="o" x="70" y="20">OFFER</text>
        <text class="r" x="70" y="20">REQUEST</text>
        <text class="a" x="70" y="20">ACK</text>
        <circle class="warm packet" cx="43" cy="26" r="3"/>
        <rect class="ink muted" x="22" y="47" width="96" height="21" rx="4"/>
        <text class="address" x="70" y="61">192.0.2.10</text>
        <path class="ink muted" d="M18 99H122M18 94V104M52.667 94V104M87.333 94V104M122 94V104"/>
        <rect class="lease" x="18" y="82" width="104" height="9" rx="2"/>
        <path class="ink old" d="M87.333 77V94"/>
        <path class="ink clock" d="M53.533 75V101M50.533 75L53.533 71L56.533 75"/>
        <text x="18" y="117">0</text>
        <text x="53" y="117">4</text>
        <text x="87" y="117">8</text>
        <text x="122" y="117">12h</text>
        <text class="renew" x="70" y="134">RENEW → BOUND</text>
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

if (!customElements.get("concept-dhcp-address-lease")) {
  customElements.define("concept-dhcp-address-lease", ConceptDhcpAddressLease);
}
