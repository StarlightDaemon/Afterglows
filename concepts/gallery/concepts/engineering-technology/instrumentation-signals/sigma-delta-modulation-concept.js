// Sigma-Delta Modulation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSigmaDeltaModulation extends HTMLElement {
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
        .sd-cycle {
          animation:sd-cycle 12s linear infinite
        }
        .accumulator {
          fill:#f3c977;
          animation:sd-accumulator 12s linear infinite
        }
        .threshold {
          stroke:#ed8eab;
          stroke-width:1;
          stroke-dasharray:2 2
        }
        .output-ring {
          fill:#10251c;
          stroke:#70edb1;
          stroke-width:1.5
        }
        .output-one {
          animation:sd-output 12s steps(1,end) infinite
        }
        .feedback {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          opacity:0;
          animation:sd-feedback 12s steps(1,end) infinite
        }
        .bit-stem {
          stroke:#375b51;
          stroke-width:1
        }
        .zero-bit {
          fill:#375b51
        }
        .sd-minus {
          fill:#ed8eab;
          font:10px monospace
        }
        .input-quarter,.input-three {
          fill:#77c9ef;
          font:13px sans-serif
        }
        .input-quarter {
          opacity:0;
          animation:sd-quarter 12s steps(1,end) infinite
        }
        .input-three {
          opacity:1;
          animation:sd-three 12s steps(1,end) infinite
        }
        .density-first,.density-last {
          fill:#9ab7a7;
          font:9px monospace;
          text-anchor:middle
        }
        .density-first {
          animation:sd-first 12s steps(1,end) infinite
        }
        .density-last {
          animation:sd-last 12s steps(1,end) infinite
        }
        @keyframes sd-accumulator {
          0% {
            height:0px;
            y:48px
          }
          8.333% {
            height:0px;
            y:48px
          }
          9.833% {
            height:3.429px;
            y:44.571px
          }
          10.5% {
            height:3.429px;
            y:44.571px
          }
          11.833% {
            height:3.429px;
            y:44.571px
          }
          12.5% {
            height:3.429px;
            y:44.571px
          }
          12.5% {
            height:3.429px;
            y:44.571px
          }
          14.0% {
            height:6.857px;
            y:41.143px
          }
          14.667% {
            height:6.857px;
            y:41.143px
          }
          16% {
            height:6.857px;
            y:41.143px
          }
          16.667% {
            height:6.857px;
            y:41.143px
          }
          16.667% {
            height:6.857px;
            y:41.143px
          }
          18.167% {
            height:10.286px;
            y:37.714px
          }
          18.833% {
            height:10.286px;
            y:37.714px
          }
          20.167% {
            height:10.286px;
            y:37.714px
          }
          20.833% {
            height:10.286px;
            y:37.714px
          }
          20.833% {
            height:10.286px;
            y:37.714px
          }
          22.333% {
            height:13.714px;
            y:34.286px
          }
          23% {
            height:13.714px;
            y:34.286px
          }
          24.333% {
            height:0px;
            y:48px
          }
          25% {
            height:0px;
            y:48px
          }
          25% {
            height:0px;
            y:48px
          }
          26.5% {
            height:3.429px;
            y:44.571px
          }
          27.167% {
            height:3.429px;
            y:44.571px
          }
          28.5% {
            height:3.429px;
            y:44.571px
          }
          29.167% {
            height:3.429px;
            y:44.571px
          }
          29.167% {
            height:3.429px;
            y:44.571px
          }
          30.667% {
            height:6.857px;
            y:41.143px
          }
          31.333% {
            height:6.857px;
            y:41.143px
          }
          32.667% {
            height:6.857px;
            y:41.143px
          }
          33.333% {
            height:6.857px;
            y:41.143px
          }
          33.333% {
            height:6.857px;
            y:41.143px
          }
          34.833% {
            height:10.286px;
            y:37.714px
          }
          35.5% {
            height:10.286px;
            y:37.714px
          }
          36.833% {
            height:10.286px;
            y:37.714px
          }
          37.5% {
            height:10.286px;
            y:37.714px
          }
          37.5% {
            height:10.286px;
            y:37.714px
          }
          39.0% {
            height:13.714px;
            y:34.286px
          }
          39.667% {
            height:13.714px;
            y:34.286px
          }
          41% {
            height:0px;
            y:48px
          }
          41.667% {
            height:0px;
            y:48px
          }
          50% {
            height:0px;
            y:48px
          }
          51.5% {
            height:10.286px;
            y:37.714px
          }
          52.167% {
            height:10.286px;
            y:37.714px
          }
          53.5% {
            height:10.286px;
            y:37.714px
          }
          54.167% {
            height:10.286px;
            y:37.714px
          }
          54.167% {
            height:10.286px;
            y:37.714px
          }
          55.667% {
            height:20.571px;
            y:27.429px
          }
          56.333% {
            height:20.571px;
            y:27.429px
          }
          57.667% {
            height:6.857px;
            y:41.143px
          }
          58.333% {
            height:6.857px;
            y:41.143px
          }
          58.333% {
            height:6.857px;
            y:41.143px
          }
          59.833% {
            height:17.143px;
            y:30.857px
          }
          60.5% {
            height:17.143px;
            y:30.857px
          }
          61.833% {
            height:3.429px;
            y:44.571px
          }
          62.5% {
            height:3.429px;
            y:44.571px
          }
          62.5% {
            height:3.429px;
            y:44.571px
          }
          64% {
            height:13.714px;
            y:34.286px
          }
          64.667% {
            height:13.714px;
            y:34.286px
          }
          66% {
            height:0px;
            y:48px
          }
          66.667% {
            height:0px;
            y:48px
          }
          66.667% {
            height:0px;
            y:48px
          }
          68.167% {
            height:10.286px;
            y:37.714px
          }
          68.833% {
            height:10.286px;
            y:37.714px
          }
          70.167% {
            height:10.286px;
            y:37.714px
          }
          70.833% {
            height:10.286px;
            y:37.714px
          }
          70.833% {
            height:10.286px;
            y:37.714px
          }
          72.333% {
            height:20.571px;
            y:27.429px
          }
          73% {
            height:20.571px;
            y:27.429px
          }
          74.333% {
            height:6.857px;
            y:41.143px
          }
          75% {
            height:6.857px;
            y:41.143px
          }
          75% {
            height:6.857px;
            y:41.143px
          }
          76.5% {
            height:17.143px;
            y:30.857px
          }
          77.167% {
            height:17.143px;
            y:30.857px
          }
          78.5% {
            height:3.429px;
            y:44.571px
          }
          79.167% {
            height:3.429px;
            y:44.571px
          }
          79.167% {
            height:3.429px;
            y:44.571px
          }
          80.667% {
            height:13.714px;
            y:34.286px
          }
          81.333% {
            height:13.714px;
            y:34.286px
          }
          82.667% {
            height:0px;
            y:48px
          }
          83.333% {
            height:0px;
            y:48px
          }
        }
        @keyframes sd-output {
          0% {
            opacity:0
          }
          9.833% {
            opacity:0
          }
          14.0% {
            opacity:0
          }
          18.167% {
            opacity:0
          }
          22.333% {
            opacity:1
          }
          26.5% {
            opacity:0
          }
          30.667% {
            opacity:0
          }
          34.833% {
            opacity:0
          }
          39.0% {
            opacity:1
          }
          51.5% {
            opacity:0
          }
          55.667% {
            opacity:1
          }
          59.833% {
            opacity:1
          }
          64% {
            opacity:1
          }
          68.167% {
            opacity:0
          }
          72.333% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          80.667% {
            opacity:1
          }
        }
        @keyframes sd-feedback {
          0% {
            opacity:0
          }
          23% {
            opacity:1
          }
          24.333% {
            opacity:0
          }
          39.667% {
            opacity:1
          }
          41% {
            opacity:0
          }
          56.333% {
            opacity:1
          }
          57.667% {
            opacity:0
          }
          60.5% {
            opacity:1
          }
          61.833% {
            opacity:0
          }
          64.667% {
            opacity:1
          }
          66% {
            opacity:0
          }
          73% {
            opacity:1
          }
          74.333% {
            opacity:0
          }
          77.167% {
            opacity:1
          }
          78.5% {
            opacity:0
          }
          81.333% {
            opacity:1
          }
          82.667% {
            opacity:0
          }
        }
        @keyframes sd-quarter {
          0% {
            opacity:1
          }
          45.833% {
            opacity:0
          }
        }
        @keyframes sd-three {
          0% {
            opacity:0
          }
          45.833% {
            opacity:1
          }
        }
        @keyframes sd-first {
          0% {
            opacity:0
          }
          41.667% {
            opacity:1
          }
        }
        @keyframes sd-last {
          0% {
            opacity:0
          }
          83.333% {
            opacity:1
          }
        }
        @keyframes sd-cycle {
          0%,96%,100% {
            opacity:0
          }
          5%,91.667% {
            opacity:1
          }
        }
        .sd-b0 {
          animation:sd-bit-0 12s steps(1,end) infinite
        }
        @keyframes sd-bit-0 {
          0% {
            opacity:0
          }
          9.833% {
            opacity:1
          }
        }
        .sd-b1 {
          animation:sd-bit-1 12s steps(1,end) infinite
        }
        @keyframes sd-bit-1 {
          0% {
            opacity:0
          }
          14.0% {
            opacity:1
          }
        }
        .sd-b2 {
          animation:sd-bit-2 12s steps(1,end) infinite
        }
        @keyframes sd-bit-2 {
          0% {
            opacity:0
          }
          18.167% {
            opacity:1
          }
        }
        .sd-b3 {
          animation:sd-bit-3 12s steps(1,end) infinite
        }
        @keyframes sd-bit-3 {
          0% {
            opacity:0
          }
          22.333% {
            opacity:1
          }
        }
        .sd-b4 {
          animation:sd-bit-4 12s steps(1,end) infinite
        }
        @keyframes sd-bit-4 {
          0% {
            opacity:0
          }
          26.5% {
            opacity:1
          }
        }
        .sd-b5 {
          animation:sd-bit-5 12s steps(1,end) infinite
        }
        @keyframes sd-bit-5 {
          0% {
            opacity:0
          }
          30.667% {
            opacity:1
          }
        }
        .sd-b6 {
          animation:sd-bit-6 12s steps(1,end) infinite
        }
        @keyframes sd-bit-6 {
          0% {
            opacity:0
          }
          34.833% {
            opacity:1
          }
        }
        .sd-b7 {
          animation:sd-bit-7 12s steps(1,end) infinite
        }
        @keyframes sd-bit-7 {
          0% {
            opacity:0
          }
          39.0% {
            opacity:1
          }
        }
        .sd-b8 {
          animation:sd-bit-8 12s steps(1,end) infinite
        }
        @keyframes sd-bit-8 {
          0% {
            opacity:0
          }
          51.5% {
            opacity:1
          }
        }
        .sd-b9 {
          animation:sd-bit-9 12s steps(1,end) infinite
        }
        @keyframes sd-bit-9 {
          0% {
            opacity:0
          }
          55.667% {
            opacity:1
          }
        }
        .sd-b10 {
          animation:sd-bit-10 12s steps(1,end) infinite
        }
        @keyframes sd-bit-10 {
          0% {
            opacity:0
          }
          59.833% {
            opacity:1
          }
        }
        .sd-b11 {
          animation:sd-bit-11 12s steps(1,end) infinite
        }
        @keyframes sd-bit-11 {
          0% {
            opacity:0
          }
          64% {
            opacity:1
          }
        }
        .sd-b12 {
          animation:sd-bit-12 12s steps(1,end) infinite
        }
        @keyframes sd-bit-12 {
          0% {
            opacity:0
          }
          68.167% {
            opacity:1
          }
        }
        .sd-b13 {
          animation:sd-bit-13 12s steps(1,end) infinite
        }
        @keyframes sd-bit-13 {
          0% {
            opacity:0
          }
          72.333% {
            opacity:1
          }
        }
        .sd-b14 {
          animation:sd-bit-14 12s steps(1,end) infinite
        }
        @keyframes sd-bit-14 {
          0% {
            opacity:0
          }
          76.5% {
            opacity:1
          }
        }
        .sd-b15 {
          animation:sd-bit-15 12s steps(1,end) infinite
        }
        @keyframes sd-bit-15 {
          0% {
            opacity:0
          }
          80.667% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sigma-Delta Modulation">
        <g class="sd-cycle">
          <path class="ink muted" d="M9 36H17M29 36H40M71 36H82M103 36H120M116 40V65H23V43"/>
          <circle class="ink paper" cx="23" cy="36" r="6"/>
          <path class="ink" d="M20 36H26M23 33V39"/>
          <text class="sd-minus" x="27" y="58">−</text>
          <rect class="ink paper" x="40" y="20" width="31" height="32" rx="2"/>
          <path class="ink muted" d="M46 48H66"/>
          <rect class="accumulator" x="50" y="48" width="11" height="0"/>
          <path class="threshold" d="M46 34.286H66"/>
          <path class="ink paper" d="M82 24L103 36L82 48Z"/>
          <path class="ink" d="M85 39H89V32H94"/>
          <circle class="output-ring" cx="116" cy="36" r="4"/>
          <circle class="output-one solid" cx="116" cy="36" r="3"/>
          <path class="feedback" d="M116 43V65H23V47M20 51L23 47L26 51"/>
          <text class="input-quarter" x="9" y="23">¼</text>
          <text class="input-three" x="9" y="23">¾</text>
          <path class="ink muted" d="M19 105H121"/>
          <g class="sd-bit sd-b0">
            <path class="bit-stem" d="M21.5 105V103"/>
            <rect class="zero-bit" x="19" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b1">
            <path class="bit-stem" d="M27.9 105V103"/>
            <rect class="zero-bit" x="25.4" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b2">
            <path class="bit-stem" d="M34.3 105V103"/>
            <rect class="zero-bit" x="31.8" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b3">
            <path class="bit-stem" d="M40.7 105V94"/>
            <rect class="solid" x="38.2" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b4">
            <path class="bit-stem" d="M47.1 105V103"/>
            <rect class="zero-bit" x="44.6" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b5">
            <path class="bit-stem" d="M53.5 105V103"/>
            <rect class="zero-bit" x="51" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b6">
            <path class="bit-stem" d="M59.9 105V103"/>
            <rect class="zero-bit" x="57.4" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b7">
            <path class="bit-stem" d="M66.3 105V94"/>
            <rect class="solid" x="63.8" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b8">
            <path class="bit-stem" d="M72.7 105V103"/>
            <rect class="zero-bit" x="70.2" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b9">
            <path class="bit-stem" d="M79.1 105V94"/>
            <rect class="solid" x="76.6" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b10">
            <path class="bit-stem" d="M85.5 105V94"/>
            <rect class="solid" x="83" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b11">
            <path class="bit-stem" d="M91.9 105V94"/>
            <rect class="solid" x="89.4" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b12">
            <path class="bit-stem" d="M98.3 105V103"/>
            <rect class="zero-bit" x="95.8" y="102" width="5" height="3" rx=".7"/>
          </g>
          <g class="sd-bit sd-b13">
            <path class="bit-stem" d="M104.7 105V94"/>
            <rect class="solid" x="102.2" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b14">
            <path class="bit-stem" d="M111.1 105V94"/>
            <rect class="solid" x="108.6" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="sd-bit sd-b15">
            <path class="bit-stem" d="M117.5 105V94"/>
            <rect class="solid" x="115" y="94" width="5" height="11" rx=".7"/>
          </g>
          <g class="density-first">
            <path class="ink muted" d="M19 111V114H69V111"/>
            <text x="44" y="126">2/8</text>
          </g>
          <g class="density-last">
            <path class="ink muted" d="M70 111V114H120V111"/>
            <text x="95" y="126">6/8</text>
          </g>
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

if (!customElements.get("concept-sigma-delta-modulation")) {
  customElements.define("concept-sigma-delta-modulation", ConceptSigmaDeltaModulation);
}
