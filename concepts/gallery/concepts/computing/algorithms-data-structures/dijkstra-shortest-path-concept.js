// Dijkstra Shortest Path. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDijkstraShortestPath extends HTMLElement {
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
          opacity:0;
          animation:eAB 10s steps(1,end) infinite;
        }
        @keyframes eAB {
          0% {
            opacity:0;
          }
          14% {
            opacity:1;
          }
          32%,100% {
            opacity:0;
          }
        }
        .eAC {
          opacity:1;
          animation:eAC 10s steps(1,end) infinite;
        }
        @keyframes eAC {
          0% {
            opacity:0;
          }
          14%,100% {
            opacity:1;
          }
        }
        .eCB {
          opacity:1;
          animation:eCB 10s steps(1,end) infinite;
        }
        @keyframes eCB {
          0% {
            opacity:0;
          }
          32%,100% {
            opacity:1;
          }
        }
        .eBD {
          opacity:1;
          animation:eBD 10s steps(1,end) infinite;
        }
        @keyframes eBD {
          0% {
            opacity:0;
          }
          50%,100% {
            opacity:1;
          }
        }
        .eCD {
          opacity:0;
          animation:eCD 10s steps(1,end) infinite;
        }
        @keyframes eCD {
          0% {
            opacity:0;
          }
          32% {
            opacity:1;
          }
          50%,100% {
            opacity:0;
          }
        }
        .eDE {
          opacity:1;
          animation:eDE 10s steps(1,end) infinite;
        }
        @keyframes eDE {
          0% {
            opacity:0;
          }
          68%,100% {
            opacity:1;
          }
        }
        .eCE {
          opacity:0;
          animation:eCE 10s steps(1,end) infinite;
        }
        @keyframes eCE {
          0% {
            opacity:0;
          }
          32% {
            opacity:1;
          }
          68%,100% {
            opacity:0;
          }
        }
        .nA circle {
          stroke:#70edb1;
          stroke-width:2;
          animation:nA 10s steps(1,end) infinite;
        }
        @keyframes nA {
          0% {
            stroke:#375b51;
          }
          8%,100% {
            stroke:#70edb1;
          }
        }
        .dA {
          animation:dA 10s steps(1,end) infinite;
        }
        @keyframes dA {
          0% {
            d:path("M18 124v0h10v0Z");
          }
        }
        .valueA0 {
          opacity:1;
          animation:valueA0 10s steps(1,end) infinite;
        }
        @keyframes valueA0 {
          0% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .nB circle {
          stroke:#70edb1;
          stroke-width:2;
          animation:nB 10s steps(1,end) infinite;
        }
        @keyframes nB {
          0% {
            stroke:#375b51;
          }
          44%,100% {
            stroke:#70edb1;
          }
        }
        .dB {
          animation:dB 10s steps(1,end) infinite;
        }
        @keyframes dB {
          0% {
            d:path("M42 124v0h10v0Z");
          }
          14% {
            d:path("M42 124v-9.6h10v9.6Z");
          }
          32% {
            d:path("M42 124v-4.8h10v4.8Z");
          }
        }
        .valueB0 {
          opacity:0;
          animation:valueB0 10s steps(1,end) infinite;
        }
        @keyframes valueB0 {
          0% {
            opacity:1;
          }
          14%,100% {
            opacity:0;
          }
        }
        .valueB1 {
          opacity:0;
          animation:valueB1 10s steps(1,end) infinite;
        }
        @keyframes valueB1 {
          0% {
            opacity:0;
          }
          14% {
            opacity:1;
          }
          32%,100% {
            opacity:0;
          }
        }
        .valueB2 {
          opacity:1;
          animation:valueB2 10s steps(1,end) infinite;
        }
        @keyframes valueB2 {
          0% {
            opacity:0;
          }
          32% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .nC circle {
          stroke:#70edb1;
          stroke-width:2;
          animation:nC 10s steps(1,end) infinite;
        }
        @keyframes nC {
          0% {
            stroke:#375b51;
          }
          26%,100% {
            stroke:#70edb1;
          }
        }
        .dC {
          animation:dC 10s steps(1,end) infinite;
        }
        @keyframes dC {
          0% {
            d:path("M66 124v0h10v0Z");
          }
          14% {
            d:path("M66 124v-3.2h10v3.2Z");
          }
        }
        .valueC0 {
          opacity:0;
          animation:valueC0 10s steps(1,end) infinite;
        }
        @keyframes valueC0 {
          0% {
            opacity:1;
          }
          14%,100% {
            opacity:0;
          }
        }
        .valueC1 {
          opacity:1;
          animation:valueC1 10s steps(1,end) infinite;
        }
        @keyframes valueC1 {
          0% {
            opacity:0;
          }
          14% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .nD circle {
          stroke:#70edb1;
          stroke-width:2;
          animation:nD 10s steps(1,end) infinite;
        }
        @keyframes nD {
          0% {
            stroke:#375b51;
          }
          62%,100% {
            stroke:#70edb1;
          }
        }
        .dD {
          animation:dD 10s steps(1,end) infinite;
        }
        @keyframes dD {
          0% {
            d:path("M90 124v0h10v0Z");
          }
          32% {
            d:path("M90 124v-14.4h10v14.4Z");
          }
          50% {
            d:path("M90 124v-8h10v8Z");
          }
        }
        .valueD0 {
          opacity:0;
          animation:valueD0 10s steps(1,end) infinite;
        }
        @keyframes valueD0 {
          0% {
            opacity:1;
          }
          32%,100% {
            opacity:0;
          }
        }
        .valueD1 {
          opacity:0;
          animation:valueD1 10s steps(1,end) infinite;
        }
        @keyframes valueD1 {
          0% {
            opacity:0;
          }
          32% {
            opacity:1;
          }
          50%,100% {
            opacity:0;
          }
        }
        .valueD2 {
          opacity:1;
          animation:valueD2 10s steps(1,end) infinite;
        }
        @keyframes valueD2 {
          0% {
            opacity:0;
          }
          50% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        .nE circle {
          stroke:#70edb1;
          stroke-width:2;
          animation:nE 10s steps(1,end) infinite;
        }
        @keyframes nE {
          0% {
            stroke:#375b51;
          }
          80%,100% {
            stroke:#70edb1;
          }
        }
        .dE {
          animation:dE 10s steps(1,end) infinite;
        }
        @keyframes dE {
          0% {
            d:path("M114 124v0h10v0Z");
          }
          32% {
            d:path("M114 124v-19.2h10v19.2Z");
          }
          68% {
            d:path("M114 124v-9.6h10v9.6Z");
          }
        }
        .valueE0 {
          opacity:0;
          animation:valueE0 10s steps(1,end) infinite;
        }
        @keyframes valueE0 {
          0% {
            opacity:1;
          }
          32%,100% {
            opacity:0;
          }
        }
        .valueE1 {
          opacity:0;
          animation:valueE1 10s steps(1,end) infinite;
        }
        @keyframes valueE1 {
          0% {
            opacity:0;
          }
          32% {
            opacity:1;
          }
          68%,100% {
            opacity:0;
          }
        }
        .valueE2 {
          opacity:1;
          animation:valueE2 10s steps(1,end) infinite;
        }
        @keyframes valueE2 {
          0% {
            opacity:0;
          }
          68% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        text {
          font:10px ui-monospace,monospace;
          fill:#e3efe9;
          text-anchor:middle;
        }
        .weight,.value {
          paint-order:stroke;
          stroke:#07120f;
          stroke-width:3px;
          stroke-linejoin:round;
        }
        .distance {
          fill:#77c9ef;
        }
        .edge {
          stroke-width:2;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Dijkstra Shortest Path">
        <defs>
          <marker id="arrow" markerWidth="4" markerHeight="4" refX="7" refY="3" viewBox="0 0 8 6" orient="auto">
            <path class="solid" d="M0 0L8 3L0 6Z"/>
          </marker>
        </defs>
        <path class="ink muted" d="M29 24L100 24"/>
        <path class="ink edge eAB" marker-end="url(#arrow)" d="M29 24L100 24"/>
        <text class="weight" x="64" y="18">6</text>
        <path class="ink muted" d="M27.901 28.31L56.099 43.69"/>
        <path class="ink edge eAC" marker-end="url(#arrow)" d="M27.901 28.31L56.099 43.69"/>
        <text class="weight" x="38" y="44">2</text>
        <path class="ink muted" d="M71.941 43.765L101.059 28.235"/>
        <path class="ink edge eCB" marker-end="url(#arrow)" d="M71.941 43.765L101.059 28.235"/>
        <text class="weight" x="90" y="44">1</text>
        <path class="ink muted" d="M109.295 32.995L110.705 76.005"/>
        <path class="ink edge eBD" marker-end="url(#arrow)" d="M109.295 32.995L110.705 76.005"/>
        <text class="weight" x="123" y="57">2</text>
        <path class="ink muted" d="M71.072 53.567L103.928 79.433"/>
        <path class="ink edge eCD" marker-end="url(#arrow)" d="M71.072 53.567L103.928 79.433"/>
        <text class="weight" x="91" y="63">7</text>
        <path class="ink muted" d="M102.032 85.758L48.968 90.242"/>
        <path class="ink edge eDE" marker-end="url(#arrow)" d="M102.032 85.758L48.968 90.242"/>
        <text class="weight" x="78" y="101">1</text>
        <path class="ink muted" d="M59.614 55.859L44.386 83.141"/>
        <path class="ink edge eCE" marker-end="url(#arrow)" d="M59.614 55.859L44.386 83.141"/>
        <text class="weight" x="43" y="67">10</text>
        <g class="node nA">
          <circle class="paper" cx="20" cy="24" r="8"/>
          <text x="20" y="27.5">A</text>
        </g>
        <path class="ink muted" d="M17 126h12"/>
        <path class="distance dA" d="M18 124v0h10v0Z"/>
        <text x="23" y="137">A</text>
        <text class="value valueA0" x="23" y="119">0</text>
        <g class="node nB">
          <circle class="paper" cx="109" cy="24" r="8"/>
          <text x="109" y="27.5">B</text>
        </g>
        <path class="ink muted" d="M41 126h12"/>
        <path class="distance dB" d="M42 124v-4.8h10v4.8Z"/>
        <text x="47" y="137">B</text>
        <text class="value valueB0" x="47" y="117">∞</text>
        <text class="value valueB1" x="47" y="109.4">6</text>
        <text class="value valueB2" x="47" y="114.2">3</text>
        <g class="node nC">
          <circle class="paper" cx="64" cy="48" r="8"/>
          <text x="64" y="51.5">C</text>
        </g>
        <path class="ink muted" d="M65 126h12"/>
        <path class="distance dC" d="M66 124v-3.2h10v3.2Z"/>
        <text x="71" y="137">C</text>
        <text class="value valueC0" x="71" y="117">∞</text>
        <text class="value valueC1" x="71" y="115.8">2</text>
        <g class="node nD">
          <circle class="paper" cx="111" cy="85" r="8"/>
          <text x="111" y="88.5">D</text>
        </g>
        <path class="ink muted" d="M89 126h12"/>
        <path class="distance dD" d="M90 124v-8h10v8Z"/>
        <text x="95" y="137">D</text>
        <text class="value valueD0" x="95" y="117">∞</text>
        <text class="value valueD1" x="95" y="104.6">9</text>
        <text class="value valueD2" x="95" y="111">5</text>
        <g class="node nE">
          <circle class="paper" cx="40" cy="91" r="8"/>
          <text x="40" y="94.5">E</text>
        </g>
        <path class="ink muted" d="M113 126h12"/>
        <path class="distance dE" d="M114 124v-9.6h10v9.6Z"/>
        <text x="119" y="137">E</text>
        <text class="value valueE0" x="119" y="117">∞</text>
        <text class="value valueE1" x="119" y="99.8">12</text>
        <text class="value valueE2" x="119" y="109.4">6</text>
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

if (!customElements.get("concept-dijkstra-shortest-path")) {
  customElements.define("concept-dijkstra-shortest-path", ConceptDijkstraShortestPath);
}
