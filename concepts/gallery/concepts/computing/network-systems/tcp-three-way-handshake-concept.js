// TCP Three-Way Handshake. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTcpThreeWayHandshake extends HTMLElement {
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
          fill:#a5c6b9;
          font:8px monospace;
          text-anchor:middle
        }
        .route {
          opacity:.2
        }
        .exchange {
          opacity:.7
        }
        .one {
          animation:e1 11s infinite
        }
        .two {
          animation:e2 11s infinite
        }
        .three {
          animation:e3 11s infinite
        }
        .packet {
          opacity:0
        }
        .a {
          animation:p1 11s linear infinite
        }
        .b {
          animation:p2 11s linear infinite
        }
        .c {
          animation:p3 11s linear infinite
        }
        .client-check {
          animation:client 11s infinite
        }
        .server-check {
          animation:server 11s infinite
        }
        @keyframes e1 {
          0%,5% {
            opacity:.1
          }
          6%,100% {
            opacity:.7
          }
        }
        @keyframes e2 {
          0%,30% {
            opacity:.1
          }
          31%,100% {
            opacity:.7
          }
        }
        @keyframes e3 {
          0%,56% {
            opacity:.1
          }
          57%,100% {
            opacity:.7
          }
        }
        @keyframes p1 {
          0%,5% {
            opacity:0;
            transform:translate(0,0)
          }
          6% {
            opacity:1;
            transform:translate(0,0)
          }
          24% {
            opacity:1;
            transform:translate(96px,17px)
          }
          24.1%,100% {
            opacity:0;
            transform:translate(96px,17px)
          }
        }
        @keyframes p2 {
          0%,31% {
            opacity:0;
            transform:translate(0,0)
          }
          32% {
            opacity:1;
            transform:translate(0,0)
          }
          50% {
            opacity:1;
            transform:translate(-96px,17px)
          }
          50.1%,100% {
            opacity:0;
            transform:translate(-96px,17px)
          }
        }
        @keyframes p3 {
          0%,59% {
            opacity:0;
            transform:translate(0,0)
          }
          60% {
            opacity:1;
            transform:translate(0,0)
          }
          78% {
            opacity:1;
            transform:translate(96px,17px)
          }
          78.1%,100% {
            opacity:0;
            transform:translate(96px,17px)
          }
        }
        @keyframes client {
          0%,49.9% {
            opacity:0
          }
          50%,100% {
            opacity:1
          }
        }
        @keyframes server {
          0%,77.9% {
            opacity:0
          }
          78%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="TCP Three-Way Handshake">
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
            <path class="solid" d="M0 0L6 3L0 6Z"/>
          </marker>
        </defs>
        <text x="22" y="16">CLIENT</text>
        <text x="118" y="16">SERVER</text>
        <path class="ink muted" d="M22 23V116M118 23V116"/>
        <path class="ink route" d="M22 32L118 49M118 61L22 78M22 90L118 107"/>
        <g class="exchange one">
          <path class="ink" marker-end="url(#arrow)" d="M22 32L118 49"/>
          <text x="70" y="30">SYN · 100</text>
        </g>
        <g class="exchange two">
          <path class="ink" marker-end="url(#arrow)" d="M118 61L22 78"/>
          <text x="70" y="59">SYN + ACK</text>
          <text x="70" y="87">300 / 101</text>
        </g>
        <g class="exchange three">
          <path class="ink" marker-end="url(#arrow)" d="M22 90L118 107"/>
          <text x="70" y="117">ACK · 301</text>
        </g>
        <circle class="warm packet a" cx="22" cy="32" r="3"/>
        <circle class="cool packet b" cx="118" cy="61" r="3"/>
        <circle class="warm packet c" cx="22" cy="90" r="3"/>
        <circle class="paper ink client" cx="22" cy="124" r="5"/>
        <circle class="paper ink server" cx="118" cy="124" r="5"/>
        <path class="ink client-check" d="M19 124L21 126L25 121"/>
        <path class="ink server-check" d="M115 124L117 126L121 121"/>
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

if (!customElements.get("concept-tcp-three-way-handshake")) {
  customElements.define("concept-tcp-three-way-handshake", ConceptTcpThreeWayHandshake);
}
