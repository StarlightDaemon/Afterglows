// Depth-First Search. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDepthFirstSearch extends HTMLElement {
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
        .eAB {
          animation:eAB 11s steps(1,end) infinite;
        }
        @keyframes eAB {
          0% {
            opacity:0;
          }
          12%,100% {
            opacity:1;
          }
        }
        .eBD {
          animation:eBD 11s steps(1,end) infinite;
        }
        @keyframes eBD {
          0% {
            opacity:0;
          }
          20%,100% {
            opacity:1;
          }
        }
        .eBE {
          animation:eBE 11s steps(1,end) infinite;
        }
        @keyframes eBE {
          0% {
            opacity:0;
          }
          36%,100% {
            opacity:1;
          }
        }
        .eCE {
          animation:eCE 11s steps(1,end) infinite;
        }
        @keyframes eCE {
          0% {
            opacity:0;
          }
          44%,100% {
            opacity:1;
          }
        }
        .eEF {
          animation:eEF 11s steps(1,end) infinite;
        }
        @keyframes eEF {
          0% {
            opacity:0;
          }
          60%,100% {
            opacity:1;
          }
        }
        .nA circle {
          stroke:#f3c977;
          animation:nA 11s steps(1,end) infinite;
        }
        @keyframes nA {
          0% {
            stroke:#375b51;
          }
          4% {
            stroke:#70edb1;
          }
          92%,100% {
            stroke:#f3c977;
          }
        }
        .fA {
          opacity:0;
          animation:fA 11s steps(1,end) infinite;
        }
        @keyframes fA {
          0% {
            opacity:0;
          }
          4% {
            opacity:1;
          }
          92%,100% {
            opacity:0;
          }
        }
        .nB circle {
          stroke:#f3c977;
          animation:nB 11s steps(1,end) infinite;
        }
        @keyframes nB {
          0% {
            stroke:#375b51;
          }
          12% {
            stroke:#70edb1;
          }
          84%,100% {
            stroke:#f3c977;
          }
        }
        .fB {
          opacity:0;
          animation:fB 11s steps(1,end) infinite;
        }
        @keyframes fB {
          0% {
            opacity:0;
          }
          12% {
            opacity:1;
          }
          84%,100% {
            opacity:0;
          }
        }
        .nD circle {
          stroke:#f3c977;
          animation:nD 11s steps(1,end) infinite;
        }
        @keyframes nD {
          0% {
            stroke:#375b51;
          }
          20% {
            stroke:#70edb1;
          }
          28%,100% {
            stroke:#f3c977;
          }
        }
        .fD {
          opacity:0;
          animation:fD 11s steps(1,end) infinite;
        }
        @keyframes fD {
          0% {
            opacity:0;
          }
          20% {
            opacity:1;
          }
          28%,100% {
            opacity:0;
          }
        }
        .nE circle {
          stroke:#f3c977;
          animation:nE 11s steps(1,end) infinite;
        }
        @keyframes nE {
          0% {
            stroke:#375b51;
          }
          36% {
            stroke:#70edb1;
          }
          76%,100% {
            stroke:#f3c977;
          }
        }
        .fE {
          opacity:0;
          animation:fE 11s steps(1,end) infinite;
        }
        @keyframes fE {
          0% {
            opacity:0;
          }
          36% {
            opacity:1;
          }
          76%,100% {
            opacity:0;
          }
        }
        .nC circle {
          stroke:#f3c977;
          animation:nC 11s steps(1,end) infinite;
        }
        @keyframes nC {
          0% {
            stroke:#375b51;
          }
          44% {
            stroke:#70edb1;
          }
          52%,100% {
            stroke:#f3c977;
          }
        }
        .fC {
          opacity:0;
          animation:fC 11s steps(1,end) infinite;
        }
        @keyframes fC {
          0% {
            opacity:0;
          }
          44% {
            opacity:1;
          }
          52%,100% {
            opacity:0;
          }
        }
        .nF circle {
          stroke:#f3c977;
          animation:nF 11s steps(1,end) infinite;
        }
        @keyframes nF {
          0% {
            stroke:#375b51;
          }
          60% {
            stroke:#70edb1;
          }
          68%,100% {
            stroke:#f3c977;
          }
        }
        .fF {
          opacity:0;
          animation:fF 11s steps(1,end) infinite;
        }
        @keyframes fF {
          0% {
            opacity:0;
          }
          60% {
            opacity:1;
          }
          68%,100% {
            opacity:0;
          }
        }
        .dD {
          animation:dD 11s steps(1,end) infinite;
        }
        @keyframes dD {
          0% {
            opacity:0;
          }
          28%,100% {
            opacity:1;
          }
        }
        .dC {
          animation:dC 11s steps(1,end) infinite;
        }
        @keyframes dC {
          0% {
            opacity:0;
          }
          52%,100% {
            opacity:1;
          }
        }
        .dF {
          animation:dF 11s steps(1,end) infinite;
        }
        @keyframes dF {
          0% {
            opacity:0;
          }
          68%,100% {
            opacity:1;
          }
        }
        .dE {
          animation:dE 11s steps(1,end) infinite;
        }
        @keyframes dE {
          0% {
            opacity:0;
          }
          76%,100% {
            opacity:1;
          }
        }
        .dB {
          animation:dB 11s steps(1,end) infinite;
        }
        @keyframes dB {
          0% {
            opacity:0;
          }
          84%,100% {
            opacity:1;
          }
        }
        .dA {
          animation:dA 11s steps(1,end) infinite;
        }
        @keyframes dA {
          0% {
            opacity:0;
          }
          92%,100% {
            opacity:1;
          }
        }
        text {
          font:10px ui-monospace,monospace;
          fill:#e1f0e7;
          text-anchor:middle;
        }
        .done {
          fill:#f3c977;
          font-size:9px;
        }
        .skip {
          stroke:#ed8eab;
          stroke-width:2;
          opacity:0;
          animation:skip 11s steps(1,end) infinite;
        }
        @keyframes skip {
          0% {
            opacity:0;
          }
          46% {
            opacity:1;
          }
          52%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Depth-First Search">
        <path class="ink muted" d="M20 22L74 22"/>
        <path class="ink eAB" d="M20 22L74 22"/>
        <path class="ink muted" d="M20 22L22 73"/>
        <path class="ink muted" d="M74 22L88 57"/>
        <path class="ink eBD" d="M74 22L88 57"/>
        <path class="ink muted" d="M74 22L73 97"/>
        <path class="ink eBE" d="M74 22L73 97"/>
        <path class="ink muted" d="M22 73L73 97"/>
        <path class="ink eCE" d="M22 73L73 97"/>
        <path class="ink muted" d="M73 97L25 117"/>
        <path class="ink eEF" d="M73 97L25 117"/>
        <path class="ink muted" d="M108 43V128H129V43"/>
        <g class="node nA">
          <circle class="paper ink" cx="20" cy="22" r="7.5"/>
          <text x="20" y="25.5">A</text>
        </g>
        <g class="frame fA">
          <rect class="paper ink" x="111" y="110" width="15" height="15"/>
          <text x="118.5" y="121">A</text>
        </g>
        <g class="node nB">
          <circle class="paper ink" cx="74" cy="22" r="7.5"/>
          <text x="74" y="25.5">B</text>
        </g>
        <g class="frame fB">
          <rect class="paper ink" x="111" y="93" width="15" height="15"/>
          <text x="118.5" y="104">B</text>
        </g>
        <g class="node nD">
          <circle class="paper ink" cx="88" cy="57" r="7.5"/>
          <text x="88" y="60.5">D</text>
        </g>
        <g class="frame fD">
          <rect class="paper ink" x="111" y="76" width="15" height="15"/>
          <text x="118.5" y="87">D</text>
        </g>
        <g class="node nE">
          <circle class="paper ink" cx="73" cy="97" r="7.5"/>
          <text x="73" y="100.5">E</text>
        </g>
        <g class="frame fE">
          <rect class="paper ink" x="111" y="76" width="15" height="15"/>
          <text x="118.5" y="87">E</text>
        </g>
        <g class="node nC">
          <circle class="paper ink" cx="22" cy="73" r="7.5"/>
          <text x="22" y="76.5">C</text>
        </g>
        <g class="frame fC">
          <rect class="paper ink" x="111" y="59" width="15" height="15"/>
          <text x="118.5" y="70">C</text>
        </g>
        <g class="node nF">
          <circle class="paper ink" cx="25" cy="117" r="7.5"/>
          <text x="25" y="120.5">F</text>
        </g>
        <g class="frame fF">
          <rect class="paper ink" x="111" y="59" width="15" height="15"/>
          <text x="118.5" y="70">F</text>
        </g>
        <text class="done dD" x="12" y="137">D</text>
        <text class="done dC" x="29" y="137">C</text>
        <text class="done dF" x="46" y="137">F</text>
        <text class="done dE" x="63" y="137">E</text>
        <text class="done dB" x="80" y="137">B</text>
        <text class="done dA" x="97" y="137">A</text>
        <path class="skip" d="M17 43l8 8m-8 0l8 -8"/>
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

if (!customElements.get("concept-depth-first-search")) {
  customElements.define("concept-depth-first-search", ConceptDepthFirstSearch);
}
