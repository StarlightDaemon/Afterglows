// TCP Selective Acknowledgment. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTcpSelectiveAcknowledgment extends HTMLElement {
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
        .received {
          fill:#70edb1
        }
        .sender {
          fill:#77c9ef;
          opacity:.12
        }
        .r0 {
          animation:r0 12s infinite
        }
        .r2,.r3 {
          animation:r23 12s infinite
        }
        .r5,.r6,.r7 {
          animation:r567 12s infinite
        }
        .r1 {
          animation:r1 12s infinite
        }
        .r4 {
          animation:r4 12s infinite
        }
        .sender {
          animation:retain 12s infinite
        }
        .s0 {
          animation:retain0 12s infinite
        }
        .island {
          stroke:#77c9ef;
          opacity:0
        }
        .i1 {
          animation:i1 12s infinite
        }
        .i2 {
          animation:i2 12s infinite
        }
        .pointer {
          stroke:#f3c977;
          animation:ack 12s infinite
        }
        .repair {
          opacity:0
        }
        .h1 {
          animation:h1 12s linear infinite
        }
        .h4 {
          animation:h4 12s linear infinite
        }
        .a0,.a1 {
          opacity:0
        }
        .a0 {
          animation:a0 12s infinite
        }
        .a1 {
          animation:a1 12s infinite
        }
        .a2 {
          animation:a2 12s infinite
        }
        @keyframes r0 {
          0%,9.9% {
            opacity:0
          }
          10%,100% {
            opacity:1
          }
        }
        @keyframes r23 {
          0%,24.9% {
            opacity:0
          }
          25%,64.9% {
            opacity:1;
            fill:#77c9ef
          }
          65%,100% {
            opacity:1;
            fill:#70edb1
          }
        }
        @keyframes r567 {
          0%,39.9% {
            opacity:0
          }
          40%,84.9% {
            opacity:1;
            fill:#77c9ef
          }
          85%,100% {
            opacity:1;
            fill:#70edb1
          }
        }
        @keyframes r1 {
          0%,64.9% {
            opacity:0
          }
          65%,100% {
            opacity:1
          }
        }
        @keyframes r4 {
          0%,84.9% {
            opacity:0
          }
          85%,100% {
            opacity:1
          }
        }
        @keyframes retain {
          0%,39.9% {
            opacity:.8
          }
          40%,84.9% {
            opacity:.4
          }
          85%,100% {
            opacity:.12
          }
        }
        @keyframes retain0 {
          0%,9.9% {
            opacity:.8
          }
          10%,100% {
            opacity:.12
          }
        }
        @keyframes i1 {
          0%,24.9% {
            opacity:0
          }
          25%,64.9% {
            opacity:1
          }
          65%,100% {
            opacity:0
          }
        }
        @keyframes i2 {
          0%,39.9% {
            opacity:0
          }
          40%,84.9% {
            opacity:1
          }
          85%,100% {
            opacity:0
          }
        }
        @keyframes ack {
          0%,9.9% {
            transform:translateX(-112px)
          }
          10%,64.9% {
            transform:translateX(-98px)
          }
          65%,84.9% {
            transform:translateX(-56px)
          }
          85%,100% {
            transform:translateX(0)
          }
        }
        @keyframes h1 {
          0%,54.9% {
            opacity:0;
            transform:translateY(0)
          }
          55% {
            opacity:1;
            transform:translateY(0)
          }
          65% {
            opacity:1;
            transform:translateY(-62px)
          }
          65.1%,100% {
            opacity:0
          }
        }
        @keyframes h4 {
          0%,74.9% {
            opacity:0;
            transform:translateY(0)
          }
          75% {
            opacity:1;
            transform:translateY(0)
          }
          85% {
            opacity:1;
            transform:translateY(-62px)
          }
          85.1%,100% {
            opacity:0
          }
        }
        @keyframes a0 {
          0%,9.9% {
            opacity:0
          }
          10%,64.9% {
            opacity:1
          }
          65%,100% {
            opacity:0
          }
        }
        @keyframes a1 {
          0%,64.9% {
            opacity:0
          }
          65%,84.9% {
            opacity:1
          }
          85%,100% {
            opacity:0
          }
        }
        @keyframes a2 {
          0%,84.9% {
            opacity:0
          }
          85%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="TCP Selective Acknowledgment">
        <text x="70" y="18">RECEIVE BUFFER</text>
        <rect class="ink muted" x="16" y="37" width="10" height="18" rx="1"/>
        <rect class="received r0" x="17" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s0" x="17" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="30" y="37" width="10" height="18" rx="1"/>
        <rect class="received r1" x="31" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s1" x="31" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="44" y="37" width="10" height="18" rx="1"/>
        <rect class="received r2" x="45" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s2" x="45" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="58" y="37" width="10" height="18" rx="1"/>
        <rect class="received r3" x="59" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s3" x="59" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="72" y="37" width="10" height="18" rx="1"/>
        <rect class="received r4" x="73" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s4" x="73" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="86" y="37" width="10" height="18" rx="1"/>
        <rect class="received r5" x="87" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s5" x="87" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="100" y="37" width="10" height="18" rx="1"/>
        <rect class="received r6" x="101" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s6" x="101" y="100" width="8" height="14" rx="1"/>
        <rect class="ink muted" x="114" y="37" width="10" height="18" rx="1"/>
        <rect class="received r7" x="115" y="38" width="8" height="16" rx="1"/>
        <rect class="sender s7" x="115" y="100" width="8" height="14" rx="1"/>
        <path class="ink island i1" d="M43 59V64H69V59"/>
        <path class="ink island i2" d="M85 59V64H125V59"/>
        <path class="ink pointer" d="M127 30V57M123 30L127 26L131 30"/>
        <rect class="warm repair h1" x="31" y="100" width="8" height="14" rx="1"/>
        <rect class="warm repair h4" x="73" y="100" width="8" height="14" rx="1"/>
        <text class="a0" x="70" y="83">ACK 1100</text>
        <text class="a1" x="70" y="83">ACK 1400</text>
        <text class="a2" x="70" y="83">ACK 1800</text>
        <text x="70" y="130">SENDER RETAINS DATA</text>
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

if (!customElements.get("concept-tcp-selective-acknowledgment")) {
  customElements.define("concept-tcp-selective-acknowledgment", ConceptTcpSelectiveAcknowledgment);
}
