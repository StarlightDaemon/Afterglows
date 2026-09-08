// De-Jitter Buffer. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDeJitterBuffer extends HTMLElement {
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
        .number {
          font-size:9px;
          fill:#07120f
        }
        .incoming,.release {
          opacity:0
        }
        .slot {
          fill:#77c9ef;
          opacity:.1
        }
        .out {
          fill:#70edb1
        }
        .in0 {
          animation:in0 11s linear infinite
        }
        .s0 {
          animation:s0 11s infinite
        }
        .r0 {
          animation:r0 11s linear infinite
        }
        .d0 {
          animation:d0 11s infinite
        }
        @keyframes in0 {
          0%,1.65% {
            opacity:0;
            transform:translate(0,0)
          }
          1.75% {
            opacity:1;
            transform:translate(0,0)
          }
          6.75% {
            opacity:1;
            transform:translate(-0.64px,32px)
          }
          6.85%,100% {
            opacity:0
          }
        }
        @keyframes s0 {
          0%,6.65% {
            opacity:.1
          }
          6.75%,34.775% {
            opacity:1
          }
          34.875%,100% {
            opacity:.1
          }
        }
        @keyframes r0 {
          0%,34.775% {
            opacity:0;
            transform:translateY(0)
          }
          34.875% {
            opacity:1;
            transform:translateY(0)
          }
          39.875% {
            opacity:1;
            transform:translateY(61px)
          }
          39.975%,100% {
            opacity:0
          }
        }
        @keyframes d0 {
          0%,39.775% {
            opacity:.1
          }
          39.875%,100% {
            opacity:1
          }
        }
        .in1 {
          animation:in1 11s linear infinite
        }
        .s1 {
          animation:s1 11s infinite
        }
        .r1 {
          animation:r1 11s linear infinite
        }
        .d1 {
          animation:d1 11s infinite
        }
        @keyframes in1 {
          0%,16.275% {
            opacity:0;
            transform:translate(0,0)
          }
          16.375% {
            opacity:1;
            transform:translate(0,0)
          }
          21.375% {
            opacity:1;
            transform:translate(-9.36px,32px)
          }
          21.475%,100% {
            opacity:0
          }
        }
        @keyframes s1 {
          0%,21.275% {
            opacity:.1
          }
          21.375%,46.025% {
            opacity:1
          }
          46.125%,100% {
            opacity:.1
          }
        }
        @keyframes r1 {
          0%,46.025% {
            opacity:0;
            transform:translateY(0)
          }
          46.125% {
            opacity:1;
            transform:translateY(0)
          }
          51.125% {
            opacity:1;
            transform:translateY(61px)
          }
          51.225%,100% {
            opacity:0
          }
        }
        @keyframes d1 {
          0%,51.025% {
            opacity:.1
          }
          51.125%,100% {
            opacity:1
          }
        }
        .in2 {
          animation:in2 11s linear infinite
        }
        .s2 {
          animation:s2 11s infinite
        }
        .r2 {
          animation:r2 11s linear infinite
        }
        .d2 {
          animation:d2 11s infinite
        }
        @keyframes in2 {
          0%,19.65% {
            opacity:0;
            transform:translate(0,0)
          }
          19.75% {
            opacity:1;
            transform:translate(0,0)
          }
          24.75% {
            opacity:1;
            transform:translate(6.32px,32px)
          }
          24.85%,100% {
            opacity:0
          }
        }
        @keyframes s2 {
          0%,24.65% {
            opacity:.1
          }
          24.75%,57.275% {
            opacity:1
          }
          57.375%,100% {
            opacity:.1
          }
        }
        @keyframes r2 {
          0%,57.275% {
            opacity:0;
            transform:translateY(0)
          }
          57.375% {
            opacity:1;
            transform:translateY(0)
          }
          62.375% {
            opacity:1;
            transform:translateY(61px)
          }
          62.475%,100% {
            opacity:0
          }
        }
        @keyframes d2 {
          0%,62.275% {
            opacity:.1
          }
          62.375%,100% {
            opacity:1
          }
        }
        .in3 {
          animation:in3 11s linear infinite
        }
        .s3 {
          animation:s3 11s infinite
        }
        .r3 {
          animation:r3 11s linear infinite
        }
        .d3 {
          animation:d3 11s infinite
        }
        @keyframes in3 {
          0%,46.0875% {
            opacity:0;
            transform:translate(0,0)
          }
          46.1875% {
            opacity:1;
            transform:translate(0,0)
          }
          51.1875% {
            opacity:1;
            transform:translate(-28.02px,32px)
          }
          51.2875%,100% {
            opacity:0
          }
        }
        @keyframes s3 {
          0%,51.0875% {
            opacity:.1
          }
          51.1875%,68.525% {
            opacity:1
          }
          68.625%,100% {
            opacity:.1
          }
        }
        @keyframes r3 {
          0%,68.525% {
            opacity:0;
            transform:translateY(0)
          }
          68.625% {
            opacity:1;
            transform:translateY(0)
          }
          73.625% {
            opacity:1;
            transform:translateY(61px)
          }
          73.725%,100% {
            opacity:0
          }
        }
        @keyframes d3 {
          0%,73.525% {
            opacity:.1
          }
          73.625%,100% {
            opacity:1
          }
        }
        .in4 {
          animation:in4 11s linear infinite
        }
        .s4 {
          animation:s4 11s infinite
        }
        .r4 {
          animation:r4 11s linear infinite
        }
        .d4 {
          animation:d4 11s infinite
        }
        @keyframes in4 {
          0%,42.7125% {
            opacity:0;
            transform:translate(0,0)
          }
          42.8125% {
            opacity:1;
            transform:translate(0,0)
          }
          47.8125% {
            opacity:1;
            transform:translate(2.3px,32px)
          }
          47.9125%,100% {
            opacity:0
          }
        }
        @keyframes s4 {
          0%,47.7125% {
            opacity:.1
          }
          47.8125%,79.775% {
            opacity:1
          }
          79.875%,100% {
            opacity:.1
          }
        }
        @keyframes r4 {
          0%,79.775% {
            opacity:0;
            transform:translateY(0)
          }
          79.875% {
            opacity:1;
            transform:translateY(0)
          }
          84.875% {
            opacity:1;
            transform:translateY(61px)
          }
          84.975%,100% {
            opacity:0
          }
        }
        @keyframes d4 {
          0%,84.775% {
            opacity:.1
          }
          84.875%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="De-Jitter Buffer">
        <text x="70" y="12">variable arrival</text>
        <path class="ink muted" d="M9 29H131"/>
        <rect class="ink muted" x="9" y="47" width="122" height="29" rx="5"/>
        <text x="70" y="94">20 ms playout</text>
        <path class="ink muted" d="M14 111H126"/>
        <path class="ink" d="M24.64 26V32"/>
        <g class="incoming in0">
          <rect class="cool" x="20.64" y="22" width="8" height="12" rx="2"/>
          <text class="number" x="24.64" y="31">0</text>
        </g>
        <rect class="ink muted" x="17" y="53" width="14" height="17" rx="2"/>
        <rect class="slot s0" x="18" y="54" width="12" height="15" rx="2"/>
        <text x="24" y="66">0</text>
        <g class="release r0">
          <rect class="solid" x="18" y="54" width="12" height="15" rx="2"/>
          <text class="number" x="24" y="66">0</text>
        </g>
        <g class="done d0">
          <rect class="out" x="18" y="115" width="12" height="15" rx="2"/>
          <text class="number" x="24" y="126">0</text>
        </g>
        <path class="ink" d="M56.36 26V32"/>
        <g class="incoming in1">
          <rect class="cool" x="52.36" y="22" width="8" height="12" rx="2"/>
          <text class="number" x="56.36" y="31">1</text>
        </g>
        <rect class="ink muted" x="40" y="53" width="14" height="17" rx="2"/>
        <rect class="slot s1" x="41" y="54" width="12" height="15" rx="2"/>
        <text x="47" y="66">1</text>
        <g class="release r1">
          <rect class="solid" x="41" y="54" width="12" height="15" rx="2"/>
          <text class="number" x="47" y="66">1</text>
        </g>
        <g class="done d1">
          <rect class="out" x="41" y="115" width="12" height="15" rx="2"/>
          <text class="number" x="47" y="126">1</text>
        </g>
        <path class="ink" d="M63.68 26V32"/>
        <g class="incoming in2">
          <rect class="cool" x="59.68" y="22" width="8" height="12" rx="2"/>
          <text class="number" x="63.68" y="31">2</text>
        </g>
        <rect class="ink muted" x="63" y="53" width="14" height="17" rx="2"/>
        <rect class="slot s2" x="64" y="54" width="12" height="15" rx="2"/>
        <text x="70" y="66">2</text>
        <g class="release r2">
          <rect class="solid" x="64" y="54" width="12" height="15" rx="2"/>
          <text class="number" x="70" y="66">2</text>
        </g>
        <g class="done d2">
          <rect class="out" x="64" y="115" width="12" height="15" rx="2"/>
          <text class="number" x="70" y="126">2</text>
        </g>
        <path class="ink" d="M121.02 26V32"/>
        <g class="incoming in3">
          <rect class="cool" x="117.02" y="22" width="8" height="12" rx="2"/>
          <text class="number" x="121.02" y="31">3</text>
        </g>
        <rect class="ink muted" x="86" y="53" width="14" height="17" rx="2"/>
        <rect class="slot s3" x="87" y="54" width="12" height="15" rx="2"/>
        <text x="93" y="66">3</text>
        <g class="release r3">
          <rect class="solid" x="87" y="54" width="12" height="15" rx="2"/>
          <text class="number" x="93" y="66">3</text>
        </g>
        <g class="done d3">
          <rect class="out" x="87" y="115" width="12" height="15" rx="2"/>
          <text class="number" x="93" y="126">3</text>
        </g>
        <path class="ink" d="M113.7 26V32"/>
        <g class="incoming in4">
          <rect class="cool" x="109.7" y="22" width="8" height="12" rx="2"/>
          <text class="number" x="113.7" y="31">4</text>
        </g>
        <rect class="ink muted" x="109" y="53" width="14" height="17" rx="2"/>
        <rect class="slot s4" x="110" y="54" width="12" height="15" rx="2"/>
        <text x="116" y="66">4</text>
        <g class="release r4">
          <rect class="solid" x="110" y="54" width="12" height="15" rx="2"/>
          <text class="number" x="116" y="66">4</text>
        </g>
        <g class="done d4">
          <rect class="out" x="110" y="115" width="12" height="15" rx="2"/>
          <text class="number" x="116" y="126">4</text>
        </g>
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

if (!customElements.get("concept-de-jitter-buffer")) {
  customElements.define("concept-de-jitter-buffer", ConceptDeJitterBuffer);
}
