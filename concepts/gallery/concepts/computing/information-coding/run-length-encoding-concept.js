// Run-Length Encoding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRunLengthEncoding extends HTMLElement {
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
        .o0,.c0 {
          animation:o0 9s steps(1,end) infinite;
        }
        @keyframes o0 {
          0% {
            opacity:0;
          }
          34%,100% {
            opacity:1;
          }
        }
        .g0 {
          animation:g0 9s steps(1,end) infinite;
        }
        @keyframes g0 {
          0% {
            opacity:0;
          }
          6%,100% {
            opacity:1;
          }
        }
        .o1,.c1 {
          animation:o1 9s steps(1,end) infinite;
        }
        @keyframes o1 {
          0% {
            opacity:0;
          }
          62%,100% {
            opacity:1;
          }
        }
        .g1 {
          animation:g1 9s steps(1,end) infinite;
        }
        @keyframes g1 {
          0% {
            opacity:0;
          }
          38%,100% {
            opacity:1;
          }
        }
        .o2,.c2 {
          animation:o2 9s steps(1,end) infinite;
        }
        @keyframes o2 {
          0% {
            opacity:0;
          }
          82%,100% {
            opacity:1;
          }
        }
        .g2 {
          animation:g2 9s steps(1,end) infinite;
        }
        @keyframes g2 {
          0% {
            opacity:0;
          }
          66%,100% {
            opacity:1;
          }
        }
        text {
          font:10px ui-monospace,monospace;
          fill:#dcefe2;
          text-anchor:middle;
        }
        .source {
          fill:#10251c;
          stroke:#375c49;
          stroke-width:1;
        }
        .count {
          font-size:16px;
          fill:#f3c977;
        }
        .symbol {
          font-size:12px;
          fill:#77c9ef;
        }
        .compress {
          fill:none;
          stroke:#547762;
          stroke-width:1.3;
        }
        .cursor {
          stroke:#f3c977;
          opacity:0;
          animation:cursor 9s steps(1,end) infinite;
        }
        @keyframes cursor {
          0%,6% {
            opacity:1;
            transform:translateX(22px);
          }
          14% {
            transform:translateX(34px);
          }
          22% {
            transform:translateX(46px);
          }
          30% {
            transform:translateX(58px);
          }
          38% {
            transform:translateX(70px);
          }
          46% {
            transform:translateX(82px);
          }
          54% {
            transform:translateX(94px);
          }
          66% {
            transform:translateX(106px);
          }
          74% {
            transform:translateX(118px);
          }
          84%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Run-Length Encoding">
        <rect class="source" x="17" y="28" width="10" height="15"/>
        <text class="source-bit" x="22" y="39">0</text>
        <rect class="source" x="29" y="28" width="10" height="15"/>
        <text class="source-bit" x="34" y="39">0</text>
        <rect class="source" x="41" y="28" width="10" height="15"/>
        <text class="source-bit" x="46" y="39">0</text>
        <rect class="source" x="53" y="28" width="10" height="15"/>
        <text class="source-bit" x="58" y="39">0</text>
        <rect class="source" x="65" y="28" width="10" height="15"/>
        <text class="source-bit" x="70" y="39">1</text>
        <rect class="source" x="77" y="28" width="10" height="15"/>
        <text class="source-bit" x="82" y="39">1</text>
        <rect class="source" x="89" y="28" width="10" height="15"/>
        <text class="source-bit" x="94" y="39">1</text>
        <rect class="source" x="101" y="28" width="10" height="15"/>
        <text class="source-bit" x="106" y="39">0</text>
        <rect class="source" x="113" y="28" width="10" height="15"/>
        <text class="source-bit" x="118" y="39">0</text>
        <path class="ink group g0" d="M17 48v7h46v-7"/>
        <path class="compress c0" d="M40 56L34 78"/>
        <g class="out o0">
          <rect class="paper ink" x="22" y="80" width="24" height="24" rx="2"/>
          <text class="count" x="34" y="97">4</text>
          <text class="symbol" x="34" y="118">0</text>
        </g>
        <path class="ink group g1" d="M65 48v7h34v-7"/>
        <path class="compress c1" d="M82 56L70 78"/>
        <g class="out o1">
          <rect class="paper ink" x="58" y="80" width="24" height="24" rx="2"/>
          <text class="count" x="70" y="97">3</text>
          <text class="symbol" x="70" y="118">1</text>
        </g>
        <path class="ink group g2" d="M101 48v7h22v-7"/>
        <path class="compress c2" d="M112 56L106 78"/>
        <g class="out o2">
          <rect class="paper ink" x="94" y="80" width="24" height="24" rx="2"/>
          <text class="count" x="106" y="97">2</text>
          <text class="symbol" x="106" y="118">0</text>
        </g>
        <path class="ink cursor" d="M0 16v7m-3 -3l3 3l3 -3"/>
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

if (!customElements.get("concept-run-length-encoding")) {
  customElements.define("concept-run-length-encoding", ConceptRunLengthEncoding);
}
