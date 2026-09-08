// Knapsack Dynamic Programming. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKnapsackDynamicProgramming extends HTMLElement {
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
        .r1 {
          animation:r1 11s steps(1,end) infinite;
        }
        @keyframes r1 {
          0% {
            opacity:0;
          }
          23%,100% {
            opacity:1;
          }
        }
        .r2 {
          animation:r2 11s steps(1,end) infinite;
        }
        @keyframes r2 {
          0% {
            opacity:0;
          }
          46%,100% {
            opacity:1;
          }
        }
        .r3 {
          animation:r3 11s steps(1,end) infinite;
        }
        @keyframes r3 {
          0% {
            opacity:0;
          }
          69%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#deeee4;
          text-anchor:middle;
        }
        .label {
          font-size:11px;
          fill:#a9c6b6;
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
        .compare {
          fill:none;
          stroke-width:2;
          opacity:0;
          animation:compare 11s steps(1,end) infinite;
        }
        .exclude {
          stroke:#77c9ef;
        }
        .include {
          stroke:#ed8eab;
          stroke-dasharray:2 3;
        }
        .trace {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.7;
          stroke-dasharray:3 3;
          animation:trace 11s linear infinite;
        }
        .selection {
          animation:trace 11s linear infinite;
        }
        @keyframes compare {
          0% {
            opacity:0;
          }
          62% {
            opacity:.8;
          }
          76%,100% {
            opacity:0;
          }
        }
        @keyframes trace {
          0%,78% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Knapsack Dynamic Programming">
        <rect class="cell" x="30" y="19" width="14" height="18"/>
        <rect class="cell" x="45" y="19" width="14" height="18"/>
        <rect class="cell" x="60" y="19" width="14" height="18"/>
        <rect class="cell" x="75" y="19" width="14" height="18"/>
        <rect class="cell" x="90" y="19" width="14" height="18"/>
        <rect class="cell" x="105" y="19" width="14" height="18"/>
        <rect class="cell" x="30" y="39" width="14" height="18"/>
        <rect class="cell" x="45" y="39" width="14" height="18"/>
        <rect class="cell" x="60" y="39" width="14" height="18"/>
        <rect class="cell" x="75" y="39" width="14" height="18"/>
        <rect class="cell" x="90" y="39" width="14" height="18"/>
        <rect class="cell" x="105" y="39" width="14" height="18"/>
        <rect class="cell" x="30" y="59" width="14" height="18"/>
        <rect class="cell" x="45" y="59" width="14" height="18"/>
        <rect class="cell" x="60" y="59" width="14" height="18"/>
        <rect class="cell" x="75" y="59" width="14" height="18"/>
        <rect class="cell" x="90" y="59" width="14" height="18"/>
        <rect class="cell" x="105" y="59" width="14" height="18"/>
        <rect class="cell" x="30" y="79" width="14" height="18"/>
        <rect class="cell" x="45" y="79" width="14" height="18"/>
        <rect class="cell" x="60" y="79" width="14" height="18"/>
        <rect class="cell" x="75" y="79" width="14" height="18"/>
        <rect class="cell" x="90" y="79" width="14" height="18"/>
        <rect class="cell" x="105" y="79" width="14" height="18"/>
        <path class="compare exclude" d="M112 68V88"/>
        <path class="compare include" d="M52 68L112 88"/>
        <path class="trace" d="M112 88V68L67 48L37 28"/>
        <g class="selection">
          <path class="ink muted" d="M55 111v18h53v-18"/>
          <rect class="cool" x="57" y="114" width="20" height="12"/>
          <rect class="warm" x="77" y="114" width="30" height="12"/>
          <circle fill="#77c9ef" cx="59" cy="106" r="1.8"/>
          <circle fill="#77c9ef" cx="66.5" cy="106" r="1.8"/>
          <circle fill="#77c9ef" cx="74" cy="106" r="1.8"/>
          <circle fill="#f3c977" cx="81.5" cy="106" r="1.8"/>
          <circle fill="#f3c977" cx="89" cy="106" r="1.8"/>
          <circle fill="#f3c977" cx="96.5" cy="106" r="1.8"/>
          <circle fill="#f3c977" cx="104" cy="106" r="1.8"/>
        </g>
        <path class="ink muted" d="M35 119h13m-3 -3l3 3l-3 3"/>
        <text class="label" x="14" y="15">w/v</text>
        <text class="label" x="37" y="15">0</text>
        <text class="label" x="52" y="15">1</text>
        <text class="label" x="67" y="15">2</text>
        <text class="label" x="82" y="15">3</text>
        <text class="label" x="97" y="15">4</text>
        <text class="label" x="112" y="15">5</text>
        <text class="row r0" x="37" y="31.5">0</text>
        <text class="row r0" x="52" y="31.5">0</text>
        <text class="row r0" x="67" y="31.5">0</text>
        <text class="row r0" x="82" y="31.5">0</text>
        <text class="row r0" x="97" y="31.5">0</text>
        <text class="row r0" x="112" y="31.5">0</text>
        <text class="label" x="14" y="51.5">2/3</text>
        <text class="row r1" x="37" y="51.5">0</text>
        <text class="row r1" x="52" y="51.5">0</text>
        <text class="row r1" x="67" y="51.5">3</text>
        <text class="row r1" x="82" y="51.5">3</text>
        <text class="row r1" x="97" y="51.5">3</text>
        <text class="row r1" x="112" y="51.5">3</text>
        <text class="label" x="14" y="71.5">3/4</text>
        <text class="row r2" x="37" y="71.5">0</text>
        <text class="row r2" x="52" y="71.5">0</text>
        <text class="row r2" x="67" y="71.5">3</text>
        <text class="row r2" x="82" y="71.5">4</text>
        <text class="row r2" x="97" y="71.5">4</text>
        <text class="row r2" x="112" y="71.5">7</text>
        <text class="label" x="14" y="91.5">4/5</text>
        <text class="row r3" x="37" y="91.5">0</text>
        <text class="row r3" x="52" y="91.5">0</text>
        <text class="row r3" x="67" y="91.5">3</text>
        <text class="row r3" x="82" y="91.5">4</text>
        <text class="row r3" x="97" y="91.5">5</text>
        <text class="row r3" x="112" y="91.5">7</text>
        <text class="label" x="27" y="123">5</text>
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

if (!customElements.get("concept-knapsack-dynamic-programming")) {
  customElements.define("concept-knapsack-dynamic-programming", ConceptKnapsackDynamicProgramming);
}
