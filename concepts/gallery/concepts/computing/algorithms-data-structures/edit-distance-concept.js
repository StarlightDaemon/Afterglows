// Edit Distance. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEditDistance extends HTMLElement {
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
        .k11 {
          animation:k11 10s steps(1,end) infinite;
        }
        @keyframes k11 {
          0% {
            opacity:0;
          }
          22%,100% {
            opacity:1;
          }
        }
        .k12 {
          animation:k12 10s steps(1,end) infinite;
        }
        @keyframes k12 {
          0% {
            opacity:0;
          }
          29%,100% {
            opacity:1;
          }
        }
        .k13 {
          animation:k13 10s steps(1,end) infinite;
        }
        @keyframes k13 {
          0% {
            opacity:0;
          }
          36%,100% {
            opacity:1;
          }
        }
        .k14 {
          animation:k14 10s steps(1,end) infinite;
        }
        @keyframes k14 {
          0% {
            opacity:0;
          }
          43%,100% {
            opacity:1;
          }
        }
        .k21 {
          animation:k21 10s steps(1,end) infinite;
        }
        @keyframes k21 {
          0% {
            opacity:0;
          }
          29%,100% {
            opacity:1;
          }
        }
        .k22 {
          animation:k22 10s steps(1,end) infinite;
        }
        @keyframes k22 {
          0% {
            opacity:0;
          }
          36%,100% {
            opacity:1;
          }
        }
        .k23 {
          animation:k23 10s steps(1,end) infinite;
        }
        @keyframes k23 {
          0% {
            opacity:0;
          }
          43%,100% {
            opacity:1;
          }
        }
        .k24 {
          animation:k24 10s steps(1,end) infinite;
        }
        @keyframes k24 {
          0% {
            opacity:0;
          }
          50%,100% {
            opacity:1;
          }
        }
        .k31 {
          animation:k31 10s steps(1,end) infinite;
        }
        @keyframes k31 {
          0% {
            opacity:0;
          }
          36%,100% {
            opacity:1;
          }
        }
        .k32 {
          animation:k32 10s steps(1,end) infinite;
        }
        @keyframes k32 {
          0% {
            opacity:0;
          }
          43%,100% {
            opacity:1;
          }
        }
        .k33 {
          animation:k33 10s steps(1,end) infinite;
        }
        @keyframes k33 {
          0% {
            opacity:0;
          }
          50%,100% {
            opacity:1;
          }
        }
        .k34 {
          animation:k34 10s steps(1,end) infinite;
        }
        @keyframes k34 {
          0% {
            opacity:0;
          }
          57%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0efe6;
          text-anchor:middle;
        }
        .symbol {
          fill:#77c9ef;
          font-size:11px;
        }
        .row, .cost {
          paint-order:stroke;
          stroke:#10251c;
          stroke-width:3px;
          stroke-linejoin:round;
        }
        .cell {
          fill:#10251c;
          stroke:#365345;
          stroke-width:.7;
        }
        .trace {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.8;
          stroke-dasharray:1;
          animation:trace 10s linear infinite;
        }
        .word {
          font-size:13px;
        }
        .w0,.w1 {
          opacity:0;
        }
        .w0 {
          animation:w0 10s steps(1,end) infinite;
        }
        .w1 {
          animation:w1 10s steps(1,end) infinite;
        }
        .w2 {
          animation:w2 10s steps(1,end) infinite;
        }
        @keyframes trace {
          0%,64% {
            stroke-dashoffset:1;
          }
          85%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes w0 {
          0% {
            opacity:1;
          }
          78%,100% {
            opacity:0;
          }
        }
        @keyframes w1 {
          0% {
            opacity:0;
          }
          78% {
            opacity:1;
          }
          90%,100% {
            opacity:0;
          }
        }
        @keyframes w2 {
          0% {
            opacity:0;
          }
          90%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Edit Distance">
        <rect class="cell" x="32" y="25" width="16" height="18"/>
        <rect class="cell" x="50" y="25" width="16" height="18"/>
        <rect class="cell" x="68" y="25" width="16" height="18"/>
        <rect class="cell" x="86" y="25" width="16" height="18"/>
        <rect class="cell" x="104" y="25" width="16" height="18"/>
        <rect class="cell" x="32" y="45" width="16" height="18"/>
        <rect class="cell" x="50" y="45" width="16" height="18"/>
        <rect class="cell" x="68" y="45" width="16" height="18"/>
        <rect class="cell" x="86" y="45" width="16" height="18"/>
        <rect class="cell" x="104" y="45" width="16" height="18"/>
        <rect class="cell" x="32" y="65" width="16" height="18"/>
        <rect class="cell" x="50" y="65" width="16" height="18"/>
        <rect class="cell" x="68" y="65" width="16" height="18"/>
        <rect class="cell" x="86" y="65" width="16" height="18"/>
        <rect class="cell" x="104" y="65" width="16" height="18"/>
        <rect class="cell" x="32" y="85" width="16" height="18"/>
        <rect class="cell" x="50" y="85" width="16" height="18"/>
        <rect class="cell" x="68" y="85" width="16" height="18"/>
        <rect class="cell" x="86" y="85" width="16" height="18"/>
        <rect class="cell" x="104" y="85" width="16" height="18"/>
        <path class="trace" pathLength="1" d="M112 94L94 94L76 74L58 54L40 34"/>
        <text class="symbol" x="40" y="18">ε</text>
        <text class="symbol" x="58" y="18">C</text>
        <text class="symbol" x="76" y="18">U</text>
        <text class="symbol" x="94" y="18">T</text>
        <text class="symbol" x="112" y="18">S</text>
        <text class="symbol" x="22" y="38">ε</text>
        <text class="cost k00" x="40" y="38">0</text>
        <text class="cost k01" x="58" y="38">1</text>
        <text class="cost k02" x="76" y="38">2</text>
        <text class="cost k03" x="94" y="38">3</text>
        <text class="cost k04" x="112" y="38">4</text>
        <text class="symbol" x="22" y="58">C</text>
        <text class="cost k10" x="40" y="58">1</text>
        <text class="cost k11" x="58" y="58">0</text>
        <text class="cost k12" x="76" y="58">1</text>
        <text class="cost k13" x="94" y="58">2</text>
        <text class="cost k14" x="112" y="58">3</text>
        <text class="symbol" x="22" y="78">A</text>
        <text class="cost k20" x="40" y="78">2</text>
        <text class="cost k21" x="58" y="78">1</text>
        <text class="cost k22" x="76" y="78">1</text>
        <text class="cost k23" x="94" y="78">2</text>
        <text class="cost k24" x="112" y="78">3</text>
        <text class="symbol" x="22" y="98">T</text>
        <text class="cost k30" x="40" y="98">3</text>
        <text class="cost k31" x="58" y="98">2</text>
        <text class="cost k32" x="76" y="98">2</text>
        <text class="cost k33" x="94" y="98">1</text>
        <text class="cost k34" x="112" y="98">2</text>
        <text class="word w0" x="74" y="129">CAT</text>
        <text class="word w1" x="74" y="129">CUT</text>
        <text class="word w2" x="74" y="129">CUTS</text>
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

if (!customElements.get("concept-edit-distance")) {
  customElements.define("concept-edit-distance", ConceptEditDistance);
}
