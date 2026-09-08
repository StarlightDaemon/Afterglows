// Write-Ahead Logging. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptWriteAheadLogging extends HTMLElement {
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
          font:10px monospace;
          text-anchor:middle
        }
        .log text {
          font-size:9px;
          fill:#07120f
        }
        .dark {
          fill:#07120f;
          font-size:9px
        }
        .boundary {
          stroke-dasharray:3 3;
          stroke:#77c9ef;
          opacity:.5
        }
        .memory-old,.memory-new,.disk-old {
          opacity:0
        }
        .memory-old {
          animation:mo 11s infinite
        }
        .memory-new {
          animation:mn 11s infinite
        }
        .disk-old {
          animation:old 11s infinite
        }
        .disk-new {
          animation:new 11s infinite
        }
        .log {
          animation:log 11s infinite
        }
        .log-fill {
          fill:#70edb1;
          animation:durable 11s infinite
        }
        .ack {
          animation:ack 11s infinite
        }
        .crash {
          stroke:#ed8eab;
          stroke-width:2;
          fill:none;
          opacity:0;
          animation:crash 11s infinite
        }
        .ram {
          opacity:.25;
          animation:ram 11s infinite
        }
        .flush,.replay {
          opacity:0
        }
        .flush {
          animation:flush 11s linear infinite
        }
        .replay {
          animation:replay 11s linear infinite
        }
        .replay-path {
          opacity:.6;
          animation:replay-path 11s infinite
        }
        @keyframes mo {
          0%,19.9% {
            opacity:1
          }
          20%,100% {
            opacity:0
          }
        }
        @keyframes mn {
          0%,19.9% {
            opacity:0
          }
          20%,51.9% {
            opacity:1
          }
          52%,100% {
            opacity:0
          }
        }
        @keyframes old {
          0%,79.9% {
            opacity:1
          }
          80%,100% {
            opacity:0
          }
        }
        @keyframes new {
          0%,79.9% {
            opacity:0
          }
          80%,100% {
            opacity:1
          }
        }
        @keyframes log {
          0%,24.9% {
            opacity:0
          }
          25%,100% {
            opacity:1
          }
        }
        @keyframes durable {
          0%,41.9% {
            fill:#456257
          }
          42%,100% {
            fill:#70edb1
          }
        }
        @keyframes ack {
          0%,44.9% {
            opacity:0
          }
          45%,51.9% {
            opacity:1
          }
          52%,100% {
            opacity:.3
          }
        }
        @keyframes crash {
          0%,51.9% {
            opacity:0
          }
          52%,61% {
            opacity:1
          }
          62%,100% {
            opacity:0
          }
        }
        @keyframes ram {
          0%,51.9% {
            opacity:1
          }
          52%,100% {
            opacity:.25
          }
        }
        @keyframes flush {
          0%,29% {
            opacity:0;
            transform:translate(0,0)
          }
          30% {
            opacity:1;
            transform:translate(0,0)
          }
          42% {
            opacity:1;
            transform:translate(16px,48px)
          }
          42.1%,100% {
            opacity:0
          }
        }
        @keyframes replay {
          0%,64% {
            opacity:0;
            transform:translate(0,0)
          }
          65% {
            opacity:1;
            transform:translate(0,0)
          }
          72% {
            transform:translate(8px,-28px)
          }
          80% {
            opacity:1;
            transform:translate(-11px,-65px)
          }
          80.1%,100% {
            opacity:0
          }
        }
        @keyframes replay-path {
          0%,64% {
            opacity:0
          }
          65%,100% {
            opacity:.6
          }
        }
        .buffer-label {
          opacity:0;
          animation:buffer-label 11s infinite
        }
        .durable-label {
          animation:durable-label 11s infinite
        }
        @keyframes buffer-label {
          0%,41.9% {
            opacity:1
          }
          42%,100% {
            opacity:0
          }
        }
        @keyframes durable-label {
          0%,41.9% {
            opacity:0
          }
          42%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Write-Ahead Logging">
        <text x="31" y="13">RAM</text>
        <text x="107" y="13">DATA</text>
        <rect class="ink muted ram" x="12" y="21" width="38" height="30" rx="3"/>
        <path class="ink paper" d="M91 23Q107 16 123 23V47Q107 54 91 47ZM91 23Q107 31 123 23"/>
        <text class="memory-old" x="31" y="41">10</text>
        <text class="memory-new" x="31" y="41">15</text>
        <text class="disk-old" x="107" y="42">10</text>
        <text class="disk-new" x="107" y="42">15</text>
        <path class="ink boundary" d="M8 76H132"/>
        <text class="ack" x="33" y="68">ACK ✓</text>
        <path class="crash" d="M22 29L41 46M41 29L22 46M66 45L60 57L73 53L67 66"/>
        <rect class="ink paper" x="14" y="83" width="110" height="37" rx="3"/>
        <g class="log">
          <rect class="log-fill" x="18" y="87" width="102" height="13" rx="2"/>
          <rect class="log-fill" x="18" y="103" width="102" height="13" rx="2"/>
          <text x="69" y="97">41 SET P=15</text>
          <text x="69" y="113">42 COMMIT</text>
        </g>
        <path class="ink replay-path" d="M123 105Q140 65 116 50"/>
        <rect class="cool flush" x="24" y="42" width="13" height="9" rx="2"/>
        <g class="replay">
          <rect class="solid" x="111" y="98" width="14" height="12" rx="2"/>
          <text class="dark" x="118" y="108">15</text>
        </g>
        <text class="buffer-label" x="70" y="135">BUFFERED WAL</text>
        <text class="durable-label" x="70" y="135">DURABLE WAL</text>
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

if (!customElements.get("concept-write-ahead-logging")) {
  customElements.define("concept-write-ahead-logging", ConceptWriteAheadLogging);
}
