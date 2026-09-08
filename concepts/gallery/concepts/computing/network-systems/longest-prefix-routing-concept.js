// Longest-Prefix Routing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLongestPrefixRouting extends HTMLElement {
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
          fill:#aacabb;
          font:8px monospace
        }
        .destination {
          font-size:10px;
          text-anchor:middle
        }
        .port {
          text-anchor:middle
        }
        .row-bg {
          fill:#10261e;
          stroke:#26493a;
          stroke-width:.5
        }
        .prefix {
          stroke:#70edb1;
          stroke-width:1.5;
          animation:prefix 10s infinite
        }
        .r0,.r1,.r2 {
          animation:matches 10s infinite
        }
        .r3 .row-bg {
          fill:#1a533b;
          animation:winner 10s infinite
        }
        .r4 {
          opacity:.3
        }
        .r4 .prefix {
          stroke:#ed8eab;
          stroke-dasharray:2 2
        }
        .select {
          animation:select 10s infinite
        }
        .packet {
          opacity:0;
          animation:packet 10s linear infinite
        }
        .caption {
          text-anchor:middle;
          font-size:8px;
          animation:select 10s infinite
        }
        @keyframes prefix {
          0%,19% {
            opacity:0
          }
          20%,100% {
            opacity:1
          }
        }
        @keyframes matches {
          0%,19% {
            opacity:.4
          }
          20%,54% {
            opacity:1
          }
          55%,100% {
            opacity:.55
          }
        }
        @keyframes winner {
          0%,19% {
            fill:#10261e
          }
          20%,54% {
            fill:#234e3a
          }
          55%,100% {
            fill:#1a533b
          }
        }
        @keyframes select {
          0%,54% {
            opacity:0
          }
          55%,100% {
            opacity:1
          }
        }
        @keyframes packet {
          0%,63% {
            opacity:0;
            transform:translateX(0)
          }
          64% {
            opacity:1;
            transform:translateX(0)
          }
          88% {
            opacity:1;
            transform:translateX(18px)
          }
          89%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Longest-Prefix Routing">
        <rect class="ink muted" x="17" y="7" width="107" height="21" rx="4"/>
        <text x="70" y="21" class="destination">10.144.2.5</text>
        <g class="row r0">
          <rect class="row-bg" x="6" y="34" width="109" height="17" rx="2"/>
          <text x="11" y="44">0.0.0.0/0</text>
          <path class="prefix" d="M11 48h0"/>
          <text class="port" x="126" y="45">R0</text>
        </g>
        <g class="row r1">
          <rect class="row-bg" x="6" y="52" width="109" height="17" rx="2"/>
          <text x="11" y="62">10.0.0.0/8</text>
          <path class="prefix" d="M11 66h24"/>
          <text class="port" x="126" y="63">R1</text>
        </g>
        <g class="row r2">
          <rect class="row-bg" x="6" y="70" width="109" height="17" rx="2"/>
          <text x="11" y="80">10.144.0.0/16</text>
          <path class="prefix" d="M11 84h48"/>
          <text class="port" x="126" y="81">R2</text>
        </g>
        <g class="row r3">
          <rect class="row-bg" x="6" y="88" width="109" height="17" rx="2"/>
          <text x="11" y="98">10.144.2.0/24</text>
          <path class="prefix" d="M11 102h72"/>
          <text class="port" x="126" y="99">R3</text>
        </g>
        <g class="row r4">
          <rect class="row-bg" x="6" y="106" width="109" height="17" rx="2"/>
          <text x="11" y="116">10.144.3.0/24</text>
          <path class="prefix" d="M11 120h72"/>
          <text class="port" x="126" y="117">R4</text>
        </g>
        <path class="ink select" d="M115 97H135M131 94L135 97L131 100"/>
        <circle class="warm packet" cx="116" cy="97" r="2.5"/>
        <text class="caption" x="70" y="135">longest matching /24</text>
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

if (!customElements.get("concept-longest-prefix-routing")) {
  customElements.define("concept-longest-prefix-routing", ConceptLongestPrefixRouting);
}
