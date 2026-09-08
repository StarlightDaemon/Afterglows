// Reed–Solomon Erasure Recovery. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptReedSolomonErasureRecovery extends HTMLElement {
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
        .v1 {
          fill:#f3c977;
          animation:missing 11s steps(1,end) infinite;
        }
        .v3 {
          fill:#f3c977;
          animation:missing 11s steps(1,end) infinite;
        }
        text {
          font:13px ui-monospace,monospace;
          fill:#deeee4;
          text-anchor:middle;
        }
        .box {
          fill:#10251c;
          stroke:#56755f;
          stroke-width:1;
        }
        .label {
          font-size:9px;
          fill:#88aa97;
        }
        .function,.field {
          font-size:11px;
        }
        .coefficient {
          animation:coefficient 11s steps(1,end) infinite;
        }
        .unknown {
          opacity:0;
          animation:unknown 11s steps(1,end) infinite;
        }
        .erase {
          stroke:#ed8eab;
          stroke-width:1.5;
          opacity:0;
          animation:erase 11s steps(1,end) infinite;
        }
        .recover {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.7;
          stroke-dasharray:1;
          opacity:0;
          animation:recover 11s linear infinite;
        }
        .regenerate {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          animation:regenerate 11s steps(1,end) infinite;
        }
        @keyframes coefficient {
          0% {
            opacity:1;
          }
          24% {
            opacity:0;
          }
          64%,100% {
            opacity:1;
          }
        }
        @keyframes unknown {
          0% {
            opacity:0;
          }
          24% {
            opacity:1;
          }
          64%,100% {
            opacity:0;
          }
        }
        @keyframes missing {
          0% {
            opacity:1;
            fill:#dceee2;
          }
          24% {
            opacity:0;
          }
          80%,100% {
            opacity:1;
            fill:#f3c977;
          }
        }
        @keyframes erase {
          0% {
            opacity:0;
          }
          24% {
            opacity:1;
          }
          78%,100% {
            opacity:0;
          }
        }
        @keyframes recover {
          0%,38% {
            opacity:0;
            stroke-dashoffset:1;
          }
          40% {
            opacity:1;
            stroke-dashoffset:1;
          }
          62% {
            opacity:1;
            stroke-dashoffset:0;
          }
          68%,100% {
            opacity:0;
            stroke-dashoffset:0;
          }
        }
        @keyframes regenerate {
          0% {
            opacity:0;
          }
          72%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Reed–Solomon Erasure Recovery">
        <rect class="box" x="26" y="13" width="18" height="20"/>
        <text class="coefficient" x="35" y="28">2</text>
        <text class="unknown" x="35" y="28">?</text>
        <text class="label" x="35" y="44">c0</text>
        <path class="ink muted" d="M35 34L70 50"/>
        <rect class="box" x="61" y="13" width="18" height="20"/>
        <text class="coefficient" x="70" y="28">3</text>
        <text class="unknown" x="70" y="28">?</text>
        <text class="label" x="70" y="44">c1</text>
        <path class="ink muted" d="M70 34L70 50"/>
        <rect class="box" x="96" y="13" width="18" height="20"/>
        <text class="coefficient" x="105" y="28">2</text>
        <text class="unknown" x="105" y="28">?</text>
        <text class="label" x="105" y="44">c2</text>
        <path class="ink muted" d="M105 34L70 50"/>
        <rect class="box" x="53" y="47" width="34" height="16"/>
        <text class="function" x="70" y="59">f(x)</text>
        <path class="ink muted" d="M70 63L22 83"/>
        <rect class="box packet" x="13" y="83" width="18" height="23"/>
        <text class="label" x="22" y="118">0</text>
        <text class="value v0" x="22" y="99">2</text>
        <path class="recover" pathLength="1" d="M22 83L70 63V33"/>
        <path class="ink muted" d="M70 63L46 83"/>
        <rect class="box packet" x="37" y="83" width="18" height="23"/>
        <text class="label" x="46" y="118">1</text>
        <text class="value v1" x="46" y="99">0</text>
        <path class="erase e1" d="M40 87l12 15m-12 0l12 -15"/>
        <path class="regenerate" d="M70 63L46 83"/>
        <path class="ink muted" d="M70 63L70 83"/>
        <rect class="box packet" x="61" y="83" width="18" height="23"/>
        <text class="label" x="70" y="118">2</text>
        <text class="value v2" x="70" y="99">2</text>
        <path class="recover" pathLength="1" d="M70 83L70 63V33"/>
        <path class="ink muted" d="M70 63L94 83"/>
        <rect class="box packet" x="85" y="83" width="18" height="23"/>
        <text class="label" x="94" y="118">3</text>
        <text class="value v3" x="94" y="99">1</text>
        <path class="erase e3" d="M88 87l12 15m-12 0l12 -15"/>
        <path class="regenerate" d="M70 63L94 83"/>
        <path class="ink muted" d="M70 63L118 83"/>
        <rect class="box packet" x="109" y="83" width="18" height="23"/>
        <text class="label" x="118" y="118">4</text>
        <text class="value v4" x="118" y="99">4</text>
        <path class="recover" pathLength="1" d="M118 83L70 63V33"/>
        <text class="field" x="70" y="136">GF(7)</text>
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

if (!customElements.get("concept-reed-solomon-erasure-recovery")) {
  customElements.define("concept-reed-solomon-erasure-recovery", ConceptReedSolomonErasureRecovery);
}
