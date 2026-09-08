// Gossip Dissemination. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGossipDissemination extends HTMLElement {
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
        .value {
          fill:#07120f;
          font-size:10px
        }
        .contact {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5;
          opacity:.15;
          stroke-dasharray:100
        }
        .duplicate {
          fill:none;
          stroke:#f3c977;
          stroke-dasharray:2 2;
          opacity:0;
          animation:dup 11s infinite
        }
        @keyframes dup {
          0%,79% {
            opacity:0
          }
          80%,87% {
            opacity:1
          }
          88%,100% {
            opacity:0
          }
        }
        .link0 {
          animation:link0 11s linear infinite
        }
        @keyframes link0 {
          0%,9.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          10% {
            opacity:1;
            stroke-dashoffset:100
          }
          25% {
            opacity:1;
            stroke-dashoffset:0
          }
          25.1%,100% {
            opacity:0
          }
        }
        .link1 {
          animation:link1 11s linear infinite
        }
        @keyframes link1 {
          0%,32.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          33% {
            opacity:1;
            stroke-dashoffset:100
          }
          50% {
            opacity:1;
            stroke-dashoffset:0
          }
          50.1%,100% {
            opacity:0
          }
        }
        .link2 {
          animation:link2 11s linear infinite
        }
        @keyframes link2 {
          0%,32.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          33% {
            opacity:1;
            stroke-dashoffset:100
          }
          50% {
            opacity:1;
            stroke-dashoffset:0
          }
          50.1%,100% {
            opacity:0
          }
        }
        .link3 {
          animation:link3 11s linear infinite
        }
        @keyframes link3 {
          0%,59.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          60% {
            opacity:1;
            stroke-dashoffset:100
          }
          80% {
            opacity:1;
            stroke-dashoffset:0
          }
          80.1%,100% {
            opacity:0
          }
        }
        .link4 {
          animation:link4 11s linear infinite
        }
        @keyframes link4 {
          0%,59.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          60% {
            opacity:1;
            stroke-dashoffset:100
          }
          80% {
            opacity:1;
            stroke-dashoffset:0
          }
          80.1%,100% {
            opacity:0
          }
        }
        .link5 {
          animation:link5 11s linear infinite
        }
        @keyframes link5 {
          0%,59.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          60% {
            opacity:1;
            stroke-dashoffset:100
          }
          80% {
            opacity:1;
            stroke-dashoffset:0
          }
          80.1%,100% {
            opacity:0
          }
        }
        .link6 {
          animation:link6 11s linear infinite
        }
        @keyframes link6 {
          0%,59.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          60% {
            opacity:1;
            stroke-dashoffset:100
          }
          80% {
            opacity:1;
            stroke-dashoffset:0
          }
          80.1%,100% {
            opacity:0
          }
        }
        .u1 {
          animation:u1 11s infinite
        }
        @keyframes u1 {
          0%,49.9% {
            opacity:0
          }
          50%,100% {
            opacity:1
          }
        }
        .u2 {
          animation:u2 11s infinite
        }
        @keyframes u2 {
          0%,79.9% {
            opacity:0
          }
          80%,100% {
            opacity:1
          }
        }
        .u3 {
          animation:u3 11s infinite
        }
        @keyframes u3 {
          0%,24.9% {
            opacity:0
          }
          25%,100% {
            opacity:1
          }
        }
        .u4 {
          animation:u4 11s infinite
        }
        @keyframes u4 {
          0%,49.9% {
            opacity:0
          }
          50%,100% {
            opacity:1
          }
        }
        .u5 {
          animation:u5 11s infinite
        }
        @keyframes u5 {
          0%,79.9% {
            opacity:0
          }
          80%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Gossip Dissemination">
        <path class="contact link0" pathLength="100" d="M70 25L70 115"/>
        <path class="contact link1" pathLength="100" d="M70 25L110 45"/>
        <path class="contact link2" pathLength="100" d="M70 115L30 95"/>
        <path class="contact link3" pathLength="100" d="M70 25L70 115"/>
        <path class="contact link4" pathLength="100" d="M110 45L110 95"/>
        <path class="contact link5" pathLength="100" d="M70 115L30 45"/>
        <path class="contact link6" pathLength="100" d="M30 95L110 45"/>
        <text x="70" y="12">A</text>
        <rect class="ink paper" x="61" y="15" width="18" height="21" rx="2"/>
        <g class="update u0">
          <rect class="solid" x="62" y="16" width="16" height="19" rx="2"/>
          <text class="value" x="70" y="29">u1</text>
        </g>
        <text x="110" y="32">B</text>
        <rect class="ink paper" x="101" y="35" width="18" height="21" rx="2"/>
        <g class="update u1">
          <rect class="solid" x="102" y="36" width="16" height="19" rx="2"/>
          <text class="value" x="110" y="49">u1</text>
        </g>
        <text x="110" y="82">C</text>
        <rect class="ink paper" x="101" y="85" width="18" height="21" rx="2"/>
        <g class="update u2">
          <rect class="solid" x="102" y="86" width="16" height="19" rx="2"/>
          <text class="value" x="110" y="99">u1</text>
        </g>
        <text x="70" y="102">D</text>
        <rect class="ink paper" x="61" y="105" width="18" height="21" rx="2"/>
        <g class="update u3">
          <rect class="solid" x="62" y="106" width="16" height="19" rx="2"/>
          <text class="value" x="70" y="119">u1</text>
        </g>
        <text x="30" y="82">E</text>
        <rect class="ink paper" x="21" y="85" width="18" height="21" rx="2"/>
        <g class="update u4">
          <rect class="solid" x="22" y="86" width="16" height="19" rx="2"/>
          <text class="value" x="30" y="99">u1</text>
        </g>
        <text x="30" y="32">F</text>
        <rect class="ink paper" x="21" y="35" width="18" height="21" rx="2"/>
        <g class="update u5">
          <rect class="solid" x="22" y="36" width="16" height="19" rx="2"/>
          <text class="value" x="30" y="49">u1</text>
        </g>
        <circle class="duplicate" cx="70" cy="115" r="14"/>
        <circle class="duplicate" cx="110" cy="45" r="14"/>
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

if (!customElements.get("concept-gossip-dissemination")) {
  customElements.define("concept-gossip-dissemination", ConceptGossipDissemination);
}
