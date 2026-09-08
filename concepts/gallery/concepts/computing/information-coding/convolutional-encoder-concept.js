// Convolutional Encoder. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptConvolutionalEncoder extends HTMLElement {
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
        .u0 {
          opacity:1;
          animation:u0 12s steps(1,end) infinite;
        }
        @keyframes u0 {
          0% {
            opacity:1;
          }
          8% {
            opacity:0;
          }
          22% {
            opacity:1;
          }
          36% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          64% {
            opacity:1;
          }
          78% {
            opacity:1;
          }
        }
        .u1 {
          opacity:0;
          animation:u1 12s steps(1,end) infinite;
        }
        @keyframes u1 {
          0% {
            opacity:0;
          }
          8% {
            opacity:1;
          }
          22% {
            opacity:0;
          }
          36% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          64% {
            opacity:0;
          }
          78% {
            opacity:0;
          }
        }
        .m10 {
          opacity:1;
          animation:m10 12s steps(1,end) infinite;
        }
        @keyframes m10 {
          0% {
            opacity:1;
          }
          16% {
            opacity:0;
          }
          30% {
            opacity:1;
          }
          44% {
            opacity:0;
          }
          58% {
            opacity:0;
          }
          72% {
            opacity:1;
          }
          86% {
            opacity:1;
          }
        }
        .m11 {
          opacity:0;
          animation:m11 12s steps(1,end) infinite;
        }
        @keyframes m11 {
          0% {
            opacity:0;
          }
          16% {
            opacity:1;
          }
          30% {
            opacity:0;
          }
          44% {
            opacity:1;
          }
          58% {
            opacity:1;
          }
          72% {
            opacity:0;
          }
          86% {
            opacity:0;
          }
        }
        .m20 {
          opacity:1;
          animation:m20 12s steps(1,end) infinite;
        }
        @keyframes m20 {
          0% {
            opacity:1;
          }
          16% {
            opacity:1;
          }
          30% {
            opacity:0;
          }
          44% {
            opacity:1;
          }
          58% {
            opacity:0;
          }
          72% {
            opacity:0;
          }
          86% {
            opacity:1;
          }
        }
        .m21 {
          opacity:0;
          animation:m21 12s steps(1,end) infinite;
        }
        @keyframes m21 {
          0% {
            opacity:0;
          }
          16% {
            opacity:0;
          }
          30% {
            opacity:1;
          }
          44% {
            opacity:0;
          }
          58% {
            opacity:1;
          }
          72% {
            opacity:1;
          }
          86% {
            opacity:0;
          }
        }
        .live0 {
          animation:live0 12s steps(1,end) infinite;
        }
        @keyframes live0 {
          0% {
            opacity:0;
          }
          12% {
            opacity:1;
          }
          16%,100% {
            opacity:0;
          }
        }
        .h0 {
          animation:h0 12s steps(1,end) infinite;
        }
        @keyframes h0 {
          0% {
            opacity:0;
          }
          16%,100% {
            opacity:1;
          }
        }
        .live1 {
          animation:live1 12s steps(1,end) infinite;
        }
        @keyframes live1 {
          0% {
            opacity:0;
          }
          26% {
            opacity:1;
          }
          30%,100% {
            opacity:0;
          }
        }
        .h1 {
          animation:h1 12s steps(1,end) infinite;
        }
        @keyframes h1 {
          0% {
            opacity:0;
          }
          30%,100% {
            opacity:1;
          }
        }
        .live2 {
          animation:live2 12s steps(1,end) infinite;
        }
        @keyframes live2 {
          0% {
            opacity:0;
          }
          40% {
            opacity:1;
          }
          44%,100% {
            opacity:0;
          }
        }
        .h2 {
          animation:h2 12s steps(1,end) infinite;
        }
        @keyframes h2 {
          0% {
            opacity:0;
          }
          44%,100% {
            opacity:1;
          }
        }
        .live3 {
          animation:live3 12s steps(1,end) infinite;
        }
        @keyframes live3 {
          0% {
            opacity:0;
          }
          54% {
            opacity:1;
          }
          58%,100% {
            opacity:0;
          }
        }
        .h3 {
          animation:h3 12s steps(1,end) infinite;
        }
        @keyframes h3 {
          0% {
            opacity:0;
          }
          58%,100% {
            opacity:1;
          }
        }
        .live4 {
          animation:live4 12s steps(1,end) infinite;
        }
        @keyframes live4 {
          0% {
            opacity:0;
          }
          68% {
            opacity:1;
          }
          72%,100% {
            opacity:0;
          }
        }
        .h4 {
          animation:h4 12s steps(1,end) infinite;
        }
        @keyframes h4 {
          0% {
            opacity:0;
          }
          72%,100% {
            opacity:1;
          }
        }
        .live5 {
          animation:live5 12s steps(1,end) infinite;
        }
        @keyframes live5 {
          0% {
            opacity:0;
          }
          82% {
            opacity:1;
          }
          86%,100% {
            opacity:0;
          }
        }
        .h5 {
          animation:h5 12s steps(1,end) infinite;
        }
        @keyframes h5 {
          0% {
            opacity:0;
          }
          86%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0efe5;
          text-anchor:middle;
        }
        .tail {
          fill:#789284;
        }
        .tap {
          fill:none;
          stroke:#375b51;
          stroke-width:1.3;
          animation:clock 12s steps(1,end) infinite;
        }
        .clock-mark {
          stroke-width:1;
        }
        .live {
          opacity:0;
        }
        .live text {
          fill:#f3c977;
        }
        .history text {
          font-size:10px;
        }
        .packet {
          fill:#10251c;
          stroke:#466751;
          stroke-width:1;
        }
        @keyframes clock {
          0% {
            stroke:#375b51;
          }
          10% {
            stroke:#77c9ef;
          }
          16% {
            stroke:#375b51;
          }
          24% {
            stroke:#77c9ef;
          }
          30% {
            stroke:#375b51;
          }
          38% {
            stroke:#77c9ef;
          }
          44% {
            stroke:#375b51;
          }
          52% {
            stroke:#77c9ef;
          }
          58% {
            stroke:#375b51;
          }
          66% {
            stroke:#77c9ef;
          }
          72% {
            stroke:#375b51;
          }
          80% {
            stroke:#77c9ef;
          }
          86% {
            stroke:#375b51;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Convolutional Encoder">
        <defs>
          <marker id="wire" markerWidth="3" markerHeight="3" refX="7" refY="3" viewBox="0 0 8 6" orient="auto">
            <path class="solid" d="M0 0L8 3L0 6Z"/>
          </marker>
        </defs>
        <text class="tape" x="54" y="12">1011</text>
        <text class="tail" x="89" y="12">·00</text>
        <path class="tap top" d="M20 57V18H102L106 23M52 57V28H105M84 57V38H102L106 33"/>
        <path class="tap bottom" d="M20 57V100H102L106 92M84 57V80H102L106 82"/>
        <path class="ink muted" marker-end="url(#wire)" d="M27 57H42M62 57H74"/>
        <circle class="paper ink" cx="20" cy="57" r="7"/>
        <rect class="paper ink" x="43" y="48" width="18" height="19"/>
        <rect class="paper ink" x="75" y="48" width="18" height="19"/>
        <path class="ink clock-mark" d="M43 59l4 4l-4 3M75 59l4 4l-4 3"/>
        <g class="xor">
          <circle class="paper ink" cx="113" cy="28" r="8"/>
          <path class="ink" d="M108 28h10m-5 -5v10"/>
          <circle class="paper ink" cx="113" cy="87" r="8"/>
          <path class="ink" d="M108 87h10m-5 -5v10"/>
        </g>
        <path class="ink muted" d="M121 28h5M121 87h5"/>
        <text class="register u0" x="20" y="61">0</text>
        <text class="register u1" x="20" y="61">1</text>
        <text class="register m10" x="52" y="61">0</text>
        <text class="register m11" x="52" y="61">1</text>
        <text class="register m20" x="84" y="61">0</text>
        <text class="register m21" x="84" y="61">1</text>
        <g class="live live0">
          <text x="130" y="32">1</text>
          <text x="130" y="91">1</text>
        </g>
        <g class="history h0">
          <rect class="packet" x="12" y="116" width="16" height="17"/>
          <text x="20" y="129">11</text>
        </g>
        <g class="live live1">
          <text x="130" y="32">1</text>
          <text x="130" y="91">0</text>
        </g>
        <g class="history h1">
          <rect class="packet" x="32" y="116" width="16" height="17"/>
          <text x="40" y="129">10</text>
        </g>
        <g class="live live2">
          <text x="130" y="32">0</text>
          <text x="130" y="91">0</text>
        </g>
        <g class="history h2">
          <rect class="packet" x="52" y="116" width="16" height="17"/>
          <text x="60" y="129">00</text>
        </g>
        <g class="live live3">
          <text x="130" y="32">0</text>
          <text x="130" y="91">1</text>
        </g>
        <g class="history h3">
          <rect class="packet" x="72" y="116" width="16" height="17"/>
          <text x="80" y="129">01</text>
        </g>
        <g class="live live4">
          <text x="130" y="32">0</text>
          <text x="130" y="91">1</text>
        </g>
        <g class="history h4">
          <rect class="packet" x="92" y="116" width="16" height="17"/>
          <text x="100" y="129">01</text>
        </g>
        <g class="live live5">
          <text x="130" y="32">1</text>
          <text x="130" y="91">1</text>
        </g>
        <g class="history h5">
          <rect class="packet" x="112" y="116" width="16" height="17"/>
          <text x="120" y="129">11</text>
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

if (!customElements.get("concept-convolutional-encoder")) {
  customElements.define("concept-convolutional-encoder", ConceptConvolutionalEncoder);
}
