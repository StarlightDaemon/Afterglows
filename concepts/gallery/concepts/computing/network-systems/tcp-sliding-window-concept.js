// TCP Sliding Window. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTcpSlidingWindow extends HTMLElement {
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
          font:9px monospace;
          text-anchor:middle
        }
        .cell {
          fill:#233f36;
          stroke:#426958;
          stroke-width:1
        }
        .c0,.c1,.c2,.c3,.c4,.c5 {
          fill:#70edb1
        }
        .c0,.c1 {
          animation:first 10s infinite
        }
        .c2,.c3 {
          animation:second 10s infinite
        }
        .c4,.c5 {
          animation:third 10s infinite
        }
        .window {
          stroke:#f3c977;
          animation:credit 10s infinite
        }
        .ack {
          opacity:0
        }
        .ack1 {
          animation:a1 10s linear infinite
        }
        .ack2 {
          animation:a2 10s linear infinite
        }
        .n0,.n1 {
          opacity:0
        }
        .n0 {
          animation:n0 10s infinite
        }
        .n1 {
          animation:n1 10s infinite
        }
        .n2 {
          animation:n2 10s infinite
        }
        @keyframes first {
          0%,9% {
            fill:#233f36
          }
          10%,39.9% {
            fill:#77c9ef
          }
          40%,100% {
            fill:#70edb1
          }
        }
        @keyframes second {
          0%,19% {
            fill:#233f36
          }
          20%,79.9% {
            fill:#77c9ef
          }
          80%,100% {
            fill:#70edb1
          }
        }
        @keyframes third {
          0%,49% {
            fill:#233f36
          }
          50%,79.9% {
            fill:#77c9ef
          }
          80%,100% {
            fill:#70edb1
          }
        }
        @keyframes credit {
          0%,39.9% {
            transform:translateX(-66px)
          }
          40%,79.9% {
            transform:translateX(-44px)
          }
          80%,100% {
            transform:translateX(0)
          }
        }
        @keyframes a1 {
          0%,29% {
            opacity:0;
            transform:translateX(0)
          }
          30% {
            opacity:1;
            transform:translateX(0)
          }
          40% {
            opacity:1;
            transform:translateX(-102px)
          }
          40.1%,100% {
            opacity:0
          }
        }
        @keyframes a2 {
          0%,69% {
            opacity:0;
            transform:translateX(0)
          }
          70% {
            opacity:1;
            transform:translateX(0)
          }
          80% {
            opacity:1;
            transform:translateX(-102px)
          }
          80.1%,100% {
            opacity:0
          }
        }
        @keyframes n0 {
          0%,39.9% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        @keyframes n1 {
          0%,39.9% {
            opacity:0
          }
          40%,79.9% {
            opacity:1
          }
          80%,100% {
            opacity:0
          }
        }
        @keyframes n2 {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="TCP Sliding Window">
        <text x="70" y="21">100 bytes / cell</text>
        <rect class="cell c0" x="15" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c1" x="26" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c2" x="37" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c3" x="48" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c4" x="59" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c5" x="70" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c6" x="81" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c7" x="92" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c8" x="103" y="48" width="9" height="18" rx="1"/>
        <rect class="cell c9" x="114" y="48" width="9" height="18" rx="1"/>
        <path class="ink window" d="M80.5 43V38H124.5V43M80.5 71V76H124.5V71"/>
        <path class="ink muted" d="M17 94H122"/>
        <path class="ink" d="M21 91L17 94L21 97"/>
        <circle class="warm ack ack1" cx="119" cy="94" r="3"/>
        <circle class="warm ack ack2" cx="119" cy="94" r="3"/>
        <text class="n0" x="70" y="118">ACK 1000</text>
        <text class="n1" x="70" y="118">ACK 1200</text>
        <text class="n2" x="70" y="118">ACK 1600</text>
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

if (!customElements.get("concept-tcp-sliding-window")) {
  customElements.define("concept-tcp-sliding-window", ConceptTcpSlidingWindow);
}
