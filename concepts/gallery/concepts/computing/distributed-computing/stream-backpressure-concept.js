// Stream Backpressure. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptStreamBackpressure extends HTMLElement {
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
          font:10px monospace;
          text-anchor:middle
        }
        .value {
          fill:#07120f;
          font-size:9px
        }
        .queued {
          opacity:.15
        }
        .received {
          opacity:1
        }
        .payload,.credit {
          opacity:0
        }
        .old-count {
          opacity:0
        }
        .gate {
          stroke:#f3c977;
          animation:gate 11s infinite
        }
        @keyframes gate {
          0%,13.9% {
            transform:translateY(0)
          }
          14%,26% {
            transform:translateY(-17px)
          }
          26.1%,56.9% {
            transform:translateY(0)
          }
          57%,61% {
            transform:translateY(-17px)
          }
          61.1%,71.9% {
            transform:translateY(0)
          }
          72%,84% {
            transform:translateY(-17px)
          }
          84.1%,100% {
            transform:translateY(0)
          }
        }
        .q0 {
          animation:q0 11s infinite
        }
        .p0 {
          animation:p0 11s linear infinite
        }
        .h0 {
          animation:h0 11s infinite
        }
        @keyframes q0 {
          0%,13.9% {
            opacity:1
          }
          14%,100% {
            opacity:.15
          }
        }
        @keyframes p0 {
          0%,13.9% {
            opacity:0;
            transform:translate(0,0)
          }
          14% {
            opacity:1;
            transform:translate(0,0)
          }
          16% {
            transform:translate(23px,19px)
          }
          19% {
            transform:translate(76px,19px)
          }
          21% {
            opacity:1;
            transform:translate(97px,0)
          }
          21.1%,100% {
            opacity:0
          }
        }
        @keyframes h0 {
          0%,20.9% {
            opacity:.1
          }
          21%,100% {
            opacity:1
          }
        }
        .q1 {
          animation:q1 11s infinite
        }
        .p1 {
          animation:p1 11s linear infinite
        }
        .h1 {
          animation:h1 11s infinite
        }
        @keyframes q1 {
          0%,21.9% {
            opacity:1
          }
          22%,100% {
            opacity:.15
          }
        }
        @keyframes p1 {
          0%,21.9% {
            opacity:0;
            transform:translate(0,0)
          }
          22% {
            opacity:1;
            transform:translate(0,0)
          }
          24% {
            transform:translate(23px,9px)
          }
          27% {
            transform:translate(76px,9px)
          }
          29% {
            opacity:1;
            transform:translate(97px,0)
          }
          29.1%,100% {
            opacity:0
          }
        }
        @keyframes h1 {
          0%,28.9% {
            opacity:.1
          }
          29%,100% {
            opacity:1
          }
        }
        .q2 {
          animation:q2 11s infinite
        }
        .p2 {
          animation:p2 11s linear infinite
        }
        .h2 {
          animation:h2 11s infinite
        }
        @keyframes q2 {
          0%,56.9% {
            opacity:1
          }
          57%,100% {
            opacity:.15
          }
        }
        @keyframes p2 {
          0%,56.9% {
            opacity:0;
            transform:translate(0,0)
          }
          57% {
            opacity:1;
            transform:translate(0,0)
          }
          59% {
            transform:translate(23px,-1px)
          }
          62% {
            transform:translate(76px,-1px)
          }
          64% {
            opacity:1;
            transform:translate(97px,0)
          }
          64.1%,100% {
            opacity:0
          }
        }
        @keyframes h2 {
          0%,63.9% {
            opacity:.1
          }
          64%,100% {
            opacity:1
          }
        }
        .q3 {
          animation:q3 11s infinite
        }
        .p3 {
          animation:p3 11s linear infinite
        }
        .h3 {
          animation:h3 11s infinite
        }
        @keyframes q3 {
          0%,71.9% {
            opacity:1
          }
          72%,100% {
            opacity:.15
          }
        }
        @keyframes p3 {
          0%,71.9% {
            opacity:0;
            transform:translate(0,0)
          }
          72% {
            opacity:1;
            transform:translate(0,0)
          }
          74% {
            transform:translate(23px,-11px)
          }
          77% {
            transform:translate(76px,-11px)
          }
          79% {
            opacity:1;
            transform:translate(97px,0)
          }
          79.1%,100% {
            opacity:0
          }
        }
        @keyframes h3 {
          0%,78.9% {
            opacity:.1
          }
          79%,100% {
            opacity:1
          }
        }
        .q4 {
          animation:q4 11s infinite
        }
        .p4 {
          animation:p4 11s linear infinite
        }
        .h4 {
          animation:h4 11s infinite
        }
        @keyframes q4 {
          0%,79.9% {
            opacity:1
          }
          80%,100% {
            opacity:.15
          }
        }
        @keyframes p4 {
          0%,79.9% {
            opacity:0;
            transform:translate(0,0)
          }
          80% {
            opacity:1;
            transform:translate(0,0)
          }
          82% {
            transform:translate(23px,-21px)
          }
          85% {
            transform:translate(76px,-21px)
          }
          87% {
            opacity:1;
            transform:translate(97px,0)
          }
          87.1%,100% {
            opacity:0
          }
        }
        @keyframes h4 {
          0%,86.9% {
            opacity:.1
          }
          87%,100% {
            opacity:1
          }
        }
        .cr0 {
          animation:cr0 11s linear infinite
        }
        @keyframes cr0 {
          0%,4.9% {
            opacity:0;
            transform:translateX(0)
          }
          5% {
            opacity:1;
            transform:translateX(0)
          }
          12% {
            opacity:1;
            transform:translateX(-92px)
          }
          12.1%,100% {
            opacity:0
          }
        }
        .cr1 {
          animation:cr1 11s linear infinite
        }
        @keyframes cr1 {
          0%,47.9% {
            opacity:0;
            transform:translateX(0)
          }
          48% {
            opacity:1;
            transform:translateX(0)
          }
          55% {
            opacity:1;
            transform:translateX(-92px)
          }
          55.1%,100% {
            opacity:0
          }
        }
        .cr2 {
          animation:cr2 11s linear infinite
        }
        @keyframes cr2 {
          0%,62.9% {
            opacity:0;
            transform:translateX(0)
          }
          63% {
            opacity:1;
            transform:translateX(0)
          }
          70% {
            opacity:1;
            transform:translateX(-92px)
          }
          70.1%,100% {
            opacity:0
          }
        }
        .n0 {
          animation:n0 11s infinite
        }
        @keyframes n0 {
          0%,11.9% {
            opacity:1
          }
          12%,100% {
            opacity:0
          }
        }
        .n1 {
          animation:n1 11s infinite
        }
        @keyframes n1 {
          0%,11.9% {
            opacity:0
          }
          12%,13.9% {
            opacity:1
          }
          14%,100% {
            opacity:0
          }
        }
        .n2 {
          animation:n2 11s infinite
        }
        @keyframes n2 {
          0%,13.9% {
            opacity:0
          }
          14%,21.9% {
            opacity:1
          }
          22%,100% {
            opacity:0
          }
        }
        .n3 {
          animation:n3 11s infinite
        }
        @keyframes n3 {
          0%,21.9% {
            opacity:0
          }
          22%,54.9% {
            opacity:1
          }
          55%,100% {
            opacity:0
          }
        }
        .n4 {
          animation:n4 11s infinite
        }
        @keyframes n4 {
          0%,54.9% {
            opacity:0
          }
          55%,56.9% {
            opacity:1
          }
          57%,100% {
            opacity:0
          }
        }
        .n5 {
          animation:n5 11s infinite
        }
        @keyframes n5 {
          0%,56.9% {
            opacity:0
          }
          57%,69.9% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        .n6 {
          animation:n6 11s infinite
        }
        @keyframes n6 {
          0%,69.9% {
            opacity:0
          }
          70%,71.9% {
            opacity:1
          }
          72%,100% {
            opacity:0
          }
        }
        .n7 {
          animation:n7 11s infinite
        }
        @keyframes n7 {
          0%,71.9% {
            opacity:0
          }
          72%,79.9% {
            opacity:1
          }
          80%,100% {
            opacity:0
          }
        }
        .n8 {
          animation:n8 11s infinite
        }
        @keyframes n8 {
          0%,79.9% {
            opacity:0
          }
          80%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Stream Backpressure">
        <text x="21" y="20">P</text>
        <text x="118" y="20">C</text>
        <rect class="ink muted" x="8" y="31" width="27" height="59" rx="3"/>
        <rect class="ink muted" x="105" y="31" width="27" height="59" rx="3"/>
        <path class="ink muted" d="M35 60H105M116 120H24M28 117L24 120L28 123"/>
        <path class="ink gate" d="M43 49V73"/>
        <text x="70" y="94">credit</text>
        <rect class="ink muted" x="60" y="97" width="20" height="16" rx="3"/>
        <text x="70" y="136">request ←</text>
        <g class="queued q0">
          <rect class="cool" x="12" y="36" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="44">A</text>
        </g>
        <g class="payload p0">
          <rect class="solid" x="12" y="36" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="44">A</text>
        </g>
        <g class="received h0">
          <rect class="solid" x="109" y="36" width="18" height="9" rx="1"/>
          <text class="value" x="118" y="44">A</text>
        </g>
        <g class="queued q1">
          <rect class="cool" x="12" y="46" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="54">B</text>
        </g>
        <g class="payload p1">
          <rect class="solid" x="12" y="46" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="54">B</text>
        </g>
        <g class="received h1">
          <rect class="solid" x="109" y="46" width="18" height="9" rx="1"/>
          <text class="value" x="118" y="54">B</text>
        </g>
        <g class="queued q2">
          <rect class="cool" x="12" y="56" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="64">C</text>
        </g>
        <g class="payload p2">
          <rect class="solid" x="12" y="56" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="64">C</text>
        </g>
        <g class="received h2">
          <rect class="solid" x="109" y="56" width="18" height="9" rx="1"/>
          <text class="value" x="118" y="64">C</text>
        </g>
        <g class="queued q3">
          <rect class="cool" x="12" y="66" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="74">D</text>
        </g>
        <g class="payload p3">
          <rect class="solid" x="12" y="66" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="74">D</text>
        </g>
        <g class="received h3">
          <rect class="solid" x="109" y="66" width="18" height="9" rx="1"/>
          <text class="value" x="118" y="74">D</text>
        </g>
        <g class="queued q4">
          <rect class="cool" x="12" y="76" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="84">E</text>
        </g>
        <g class="payload p4">
          <rect class="solid" x="12" y="76" width="18" height="9" rx="1"/>
          <text class="value" x="21" y="84">E</text>
        </g>
        <g class="received h4">
          <rect class="solid" x="109" y="76" width="18" height="9" rx="1"/>
          <text class="value" x="118" y="84">E</text>
        </g>
        <g class="credit cr0">
          <rect class="warm" x="110" y="113" width="12" height="14" rx="2"/>
          <text class="value" x="116" y="124">2</text>
        </g>
        <g class="credit cr1">
          <rect class="warm" x="110" y="113" width="12" height="14" rx="2"/>
          <text class="value" x="116" y="124">1</text>
        </g>
        <g class="credit cr2">
          <rect class="warm" x="110" y="113" width="12" height="14" rx="2"/>
          <text class="value" x="116" y="124">2</text>
        </g>
        <text class="count old-count n0" x="70" y="109">0</text>
        <text class="count old-count n1" x="70" y="109">2</text>
        <text class="count old-count n2" x="70" y="109">1</text>
        <text class="count old-count n3" x="70" y="109">0</text>
        <text class="count old-count n4" x="70" y="109">1</text>
        <text class="count old-count n5" x="70" y="109">0</text>
        <text class="count old-count n6" x="70" y="109">2</text>
        <text class="count old-count n7" x="70" y="109">1</text>
        <text class="count  n8" x="70" y="109">0</text>
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

if (!customElements.get("concept-stream-backpressure")) {
  customElements.define("concept-stream-backpressure", ConceptStreamBackpressure);
}
