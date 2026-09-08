// Linear-Probing Hash Table. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLinearProbingHashTable extends HTMLElement {
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
          font:11px ui-monospace,monospace;
          fill:#e1f1e8;
          text-anchor:middle;
        }
        .index,.hash {
          font-size:10px;
          fill:#8ba89b;
        }
        .key {
          transform:translate(24px,91px);
          animation:insert 8s ease-in-out infinite;
        }
        .probe {
          stroke:#f3c977;
          transform:translateX(24px);
          animation:probe 8s steps(1,end) infinite;
        }
        .wrap {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.7;
          stroke-dasharray:140;
          stroke-dashoffset:0;
          animation:wrap 8s linear infinite;
        }
        .collision {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1;
          opacity:0;
        }
        .c1 {
          animation:c1 8s steps(1,end) infinite;
        }
        .c2 {
          animation:c2 8s steps(1,end) infinite;
        }
        @keyframes insert {
          0%,65% {
            transform:translate(70px,26px);
          }
          84%,100% {
            transform:translate(24px,91px);
          }
        }
        @keyframes probe {
          0% {
            transform:translateX(96px);
          }
          32% {
            transform:translateX(114px);
          }
          60%,100% {
            transform:translateX(24px);
          }
        }
        @keyframes wrap {
          0%,42% {
            stroke-dashoffset:140;
          }
          62%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes c1 {
          0% {
            opacity:0;
          }
          16% {
            opacity:1;
          }
          30%,100% {
            opacity:0;
          }
        }
        @keyframes c2 {
          0% {
            opacity:0;
          }
          34% {
            opacity:1;
          }
          48%,100% {
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Linear-Probing Hash Table">
        <path class="ink muted" d="M70 38v9h26v15"/>
        <text class="hash" x="56" y="48">h</text>
        <rect class="ink paper" x="16" y="77" width="16" height="27"/>
        <text class="index" x="24" y="73">0</text>
        <rect class="ink paper" x="34" y="77" width="16" height="27"/>
        <text class="index" x="42" y="73">1</text>
        <rect class="ink paper" x="52" y="77" width="16" height="27"/>
        <text class="index" x="60" y="73">2</text>
        <rect class="ink paper" x="70" y="77" width="16" height="27"/>
        <text class="index" x="78" y="73">3</text>
        <rect class="ink paper" x="88" y="77" width="16" height="27"/>
        <text class="index" x="96" y="73">4</text>
        <rect class="ink paper" x="106" y="77" width="16" height="27"/>
        <text class="index" x="114" y="73">5</text>
        <text x="96" y="95">10</text>
        <text x="114" y="95">16</text>
        <g class="key">
          <rect class="paper ink" x="-7" y="-8" width="14" height="17" rx="2"/>
          <text y="4">22</text>
        </g>
        <path class="ink probe" d="M0 57v7m-3 -3l3 3l3 -3"/>
        <path class="wrap" d="M114 106v14H24v-14m-3 3l3 -3l3 3"/>
        <path class="collision c1" d="M92 80l8 20m-8 0l8 -20"/>
        <path class="collision c2" d="M110 80l8 20m-8 0l8 -20"/>
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

if (!customElements.get("concept-linear-probing-hash-table")) {
  customElements.define("concept-linear-probing-hash-table", ConceptLinearProbingHashTable);
}
