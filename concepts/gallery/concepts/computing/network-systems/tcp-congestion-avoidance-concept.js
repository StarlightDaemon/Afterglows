// TCP Congestion Avoidance. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTcpCongestionAvoidance extends HTMLElement {
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
        .threshold {
          stroke:#f3c977;
          stroke-dasharray:3 3;
          animation:loss 11s infinite
        }
        .loss {
          animation:loss 11s infinite
        }
        .trace {
          stroke-dasharray:100;
          animation:trace 11s linear infinite
        }
        .dot {
          animation:dot 11s linear infinite
        }
        .recovery {
          animation:recovery 11s infinite
        }
        @keyframes trace {
          0% {
            stroke-dashoffset:100.000
          }
          6% {
            stroke-dashoffset:100.000
          }
          11% {
            stroke-dashoffset:96.338
          }
          16% {
            stroke-dashoffset:89.221
          }
          21% {
            stroke-dashoffset:85.559
          }
          26% {
            stroke-dashoffset:78.442
          }
          31% {
            stroke-dashoffset:74.780
          }
          36% {
            stroke-dashoffset:67.663
          }
          43% {
            stroke-dashoffset:64.001
          }
          50% {
            stroke-dashoffset:56.884
          }
          55% {
            stroke-dashoffset:53.832
          }
          60% {
            stroke-dashoffset:47.009
          }
          65% {
            stroke-dashoffset:43.958
          }
          70% {
            stroke-dashoffset:25.396
          }
          75% {
            stroke-dashoffset:20.514
          }
          80% {
            stroke-dashoffset:12.698
          }
          85% {
            stroke-dashoffset:7.816
          }
          90% {
            stroke-dashoffset:0.000
          }
          100% {
            stroke-dashoffset:0.000
          }
        }
        @keyframes dot {
          0% {
            transform:translate(-100px,20px)
          }
          6% {
            transform:translate(-100px,20px)
          }
          11% {
            transform:translate(-94px,20px)
          }
          16% {
            transform:translate(-88px,10px)
          }
          21% {
            transform:translate(-82px,10px)
          }
          26% {
            transform:translate(-76px,0px)
          }
          31% {
            transform:translate(-70px,0px)
          }
          36% {
            transform:translate(-64px,-10px)
          }
          43% {
            transform:translate(-58px,-10px)
          }
          50% {
            transform:translate(-52px,-20px)
          }
          55% {
            transform:translate(-47px,-20px)
          }
          60% {
            transform:translate(-42px,-10px)
          }
          65% {
            transform:translate(-37px,-10px)
          }
          70% {
            transform:translate(-32px,20px)
          }
          75% {
            transform:translate(-24px,20px)
          }
          80% {
            transform:translate(-16px,10px)
          }
          85% {
            transform:translate(-8px,10px)
          }
          90% {
            transform:translate(0px,0px)
          }
          100% {
            transform:translate(0px,0px)
          }
        }
        @keyframes loss {
          0%,49.9% {
            opacity:0
          }
          50%,100% {
            opacity:1
          }
        }
        @keyframes recovery {
          0%,69.9% {
            opacity:0
          }
          70%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="TCP Congestion Avoidance">
        <text x="70" y="16">RENO · segments</text>
        <path class="ink muted" d="M18 26V112H128M18 72H125"/>
        <text x="10" y="75">4</text>
        <text x="10" y="35">8</text>
        <path class="ink threshold" d="M68 72H125"/>
        <path class="ink trace" pathLength="100" d="M20 72H26L32 62H38L44 52H50L56 42H62L68 32H73L78 42H83L88 72H96L104 62H112L120 52"/>
        <g class="loss">
          <path class="ink" d="M67 23V27M72 23V27M77 23V27"/>
          <text x="88" y="35">3 dup ACK</text>
        </g>
        <circle class="warm dot" cx="120" cy="52" r="3.5"/>
        <text class="recovery" x="97" y="93">recovery ACK</text>
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

if (!customElements.get("concept-tcp-congestion-avoidance")) {
  customElements.define("concept-tcp-congestion-avoidance", ConceptTcpCongestionAvoidance);
}
