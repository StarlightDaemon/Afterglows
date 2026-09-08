// Binary Heap. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBinaryHeap extends HTMLElement {
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
        .k9 {
          transform:translate(70px,24px);
          opacity:1;
          animation:k9 9s ease-in-out infinite;
        }
        .a9 {
          transform:translateX(20px);
          opacity:1;
          animation:a9 9s ease-in-out infinite;
        }
        @keyframes k9 {
          0% {
            transform:translate(70px,24px);
            opacity:1;
          }
          8% {
            transform:translate(70px,24px);
            opacity:1;
          }
          16% {
            transform:translate(70px,24px);
            opacity:1;
          }
          24% {
            transform:translate(70px,24px);
            opacity:1;
          }
          32% {
            transform:translate(70px,24px);
            opacity:1;
          }
          40% {
            transform:translate(70px,24px);
            opacity:1;
          }
          44% {
            transform:translate(77.793px,47.754px);
            opacity:1;
          }
          48% {
            transform:translate(102px,54px);
            opacity:1;
          }
          58% {
            transform:translate(102px,54px);
            opacity:1;
          }
          70% {
            transform:translate(102px,54px);
            opacity:1;
          }
          78% {
            transform:translate(102px,54px);
            opacity:1;
          }
          82% {
            transform:translate(94.207px,30.246px);
            opacity:1;
          }
          86% {
            transform:translate(70px,24px);
            opacity:1;
          }
        }
        @keyframes a9 {
          0% {
            transform:translateX(20px);
            opacity:1;
          }
          8% {
            transform:translateX(20px);
            opacity:1;
          }
          16% {
            transform:translateX(20px);
            opacity:1;
          }
          24% {
            transform:translateX(20px);
            opacity:1;
          }
          32% {
            transform:translateX(20px);
            opacity:1;
          }
          40% {
            transform:translateX(20px);
            opacity:1;
          }
          48% {
            transform:translateX(54px);
            opacity:1;
          }
          58% {
            transform:translateX(54px);
            opacity:1;
          }
          70% {
            transform:translateX(54px);
            opacity:1;
          }
          78% {
            transform:translateX(54px);
            opacity:1;
          }
          86% {
            transform:translateX(20px);
            opacity:1;
          }
          100% {
            transform:translateX(20px);
            opacity:1;
          }
        }
        .k7 {
          transform:translate(38px,54px);
          opacity:1;
        }
        .a7 {
          transform:translateX(37px);
          opacity:1;
        }
        .k8 {
          transform:translate(102px,54px);
          opacity:1;
          animation:k8 9s ease-in-out infinite;
        }
        .a8 {
          transform:translateX(54px);
          opacity:1;
          animation:a8 9s ease-in-out infinite;
        }
        @keyframes k8 {
          0% {
            transform:translate(102px,54px);
            opacity:1;
          }
          8% {
            transform:translate(102px,54px);
            opacity:1;
          }
          16% {
            transform:translate(102px,54px);
            opacity:1;
          }
          24% {
            transform:translate(102px,54px);
            opacity:1;
          }
          28% {
            transform:translate(100.71px,75.174px);
            opacity:1;
          }
          32% {
            transform:translate(120px,84px);
            opacity:1;
          }
          40% {
            transform:translate(120px,84px);
            opacity:1;
          }
          48% {
            transform:translate(120px,84px);
            opacity:1;
          }
          58% {
            transform:translate(120px,84px);
            opacity:1;
          }
          64% {
            transform:translate(104.219px,46.318px);
            opacity:1;
          }
          70% {
            transform:translate(70px,24px);
            opacity:1;
          }
          78% {
            transform:translate(70px,24px);
            opacity:1;
          }
          82% {
            transform:translate(77.793px,47.754px);
            opacity:1;
          }
          86% {
            transform:translate(102px,54px);
            opacity:1;
          }
        }
        @keyframes a8 {
          0% {
            transform:translateX(54px);
            opacity:1;
          }
          8% {
            transform:translateX(54px);
            opacity:1;
          }
          16% {
            transform:translateX(54px);
            opacity:1;
          }
          24% {
            transform:translateX(54px);
            opacity:1;
          }
          32% {
            transform:translateX(122px);
            opacity:1;
          }
          40% {
            transform:translateX(122px);
            opacity:1;
          }
          48% {
            transform:translateX(122px);
            opacity:1;
          }
          58% {
            transform:translateX(122px);
            opacity:1;
          }
          70% {
            transform:translateX(20px);
            opacity:1;
          }
          78% {
            transform:translateX(20px);
            opacity:1;
          }
          86% {
            transform:translateX(54px);
            opacity:1;
          }
          100% {
            transform:translateX(54px);
            opacity:1;
          }
        }
        .k3 {
          transform:translate(21px,84px);
          opacity:1;
        }
        .a3 {
          transform:translateX(71px);
          opacity:1;
        }
        .k5 {
          transform:translate(55px,84px);
          opacity:1;
        }
        .a5 {
          transform:translateX(88px);
          opacity:1;
        }
        .k6 {
          transform:translate(85px,84px);
          opacity:1;
        }
        .a6 {
          transform:translateX(105px);
          opacity:1;
        }
        .k10 {
          transform:translate(17px,18px);
          opacity:0;
          animation:k10 9s ease-in-out infinite;
        }
        .a10 {
          transform:translateX(20px);
          opacity:0;
          animation:a10 9s ease-in-out infinite;
        }
        @keyframes k10 {
          0% {
            transform:translate(123px,18px);
            opacity:1;
          }
          8% {
            transform:translate(123px,18px);
            opacity:1;
          }
          12% {
            transform:translate(109.512px,50.455px);
            opacity:1;
          }
          16% {
            transform:translate(120px,84px);
            opacity:1;
          }
          24% {
            transform:translate(120px,84px);
            opacity:1;
          }
          28% {
            transform:translate(121.29px,62.826px);
            opacity:1;
          }
          32% {
            transform:translate(102px,54px);
            opacity:1;
          }
          40% {
            transform:translate(102px,54px);
            opacity:1;
          }
          44% {
            transform:translate(94.207px,30.246px);
            opacity:1;
          }
          48% {
            transform:translate(70px,24px);
            opacity:1;
          }
          58% {
            transform:translate(70px,24px);
            opacity:1;
          }
          64% {
            transform:translate(44.85px,9.076px);
            opacity:1;
          }
          70% {
            transform:translate(17px,18px);
            opacity:0;
          }
          78% {
            transform:translate(17px,18px);
            opacity:0;
          }
          86% {
            transform:translate(17px,18px);
            opacity:0;
          }
        }
        @keyframes a10 {
          0% {
            transform:translateX(20px);
            opacity:0;
          }
          8% {
            transform:translateX(20px);
            opacity:0;
          }
          16% {
            transform:translateX(122px);
            opacity:1;
          }
          24% {
            transform:translateX(122px);
            opacity:1;
          }
          32% {
            transform:translateX(54px);
            opacity:1;
          }
          40% {
            transform:translateX(54px);
            opacity:1;
          }
          48% {
            transform:translateX(20px);
            opacity:1;
          }
          58% {
            transform:translateX(20px);
            opacity:1;
          }
          70% {
            transform:translateX(20px);
            opacity:0;
          }
          78% {
            transform:translateX(20px);
            opacity:0;
          }
          86% {
            transform:translateX(20px);
            opacity:0;
          }
          100% {
            transform:translateX(20px);
            opacity:0;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e3f3e9;
          text-anchor:middle;
        }
        .array {
          font-size:9px;
          animation-timing-function:steps(1,end);
        }
        .slot {
          fill:none;
          stroke:#375b51;
          stroke-width:1;
        }
        .k10 circle {
          stroke:#f3c977;
        }
        .last-edge {
          opacity:0;
          animation:last 9s steps(1,end) infinite;
        }
        .warm-arrow {
          stroke:#f3c977;
          opacity:0;
          animation:arrival 9s steps(1,end) infinite;
        }
        @keyframes last {
          0% {
            opacity:0;
          }
          8% {
            opacity:1;
          }
          70%,100% {
            opacity:0;
          }
        }
        @keyframes arrival {
          0% {
            opacity:1;
          }
          16%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Binary Heap">
        <path class="ink muted " d="M70 24L38 54"/>
        <path class="ink muted " d="M70 24L102 54"/>
        <path class="ink muted " d="M38 54L21 84"/>
        <path class="ink muted " d="M38 54L55 84"/>
        <path class="ink muted " d="M102 54L85 84"/>
        <path class="ink muted last-edge" d="M102 54L120 84"/>
        <rect class="slot" x="13" y="113" width="14" height="17"/>
        <rect class="slot" x="30" y="113" width="14" height="17"/>
        <rect class="slot" x="47" y="113" width="14" height="17"/>
        <rect class="slot" x="64" y="113" width="14" height="17"/>
        <rect class="slot" x="81" y="113" width="14" height="17"/>
        <rect class="slot" x="98" y="113" width="14" height="17"/>
        <rect class="slot" x="115" y="113" width="14" height="17"/>
        <g class="key k9">
          <circle class="paper ink" r="9"/>
          <text y="4">9</text>
        </g>
        <text class="array a9" y="125">9</text>
        <g class="key k7">
          <circle class="paper ink" r="9"/>
          <text y="4">7</text>
        </g>
        <text class="array a7" y="125">7</text>
        <g class="key k8">
          <circle class="paper ink" r="9"/>
          <text y="4">8</text>
        </g>
        <text class="array a8" y="125">8</text>
        <g class="key k3">
          <circle class="paper ink" r="9"/>
          <text y="4">3</text>
        </g>
        <text class="array a3" y="125">3</text>
        <g class="key k5">
          <circle class="paper ink" r="9"/>
          <text y="4">5</text>
        </g>
        <text class="array a5" y="125">5</text>
        <g class="key k6">
          <circle class="paper ink" r="9"/>
          <text y="4">6</text>
        </g>
        <text class="array a6" y="125">6</text>
        <g class="key k10">
          <circle class="paper ink" r="9"/>
          <text y="4">10</text>
        </g>
        <text class="array a10" y="125">10</text>
        <path class="ink warm-arrow" d="M117 22l-7 9m1 -5l-1 5l5 -1"/>
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

if (!customElements.get("concept-binary-heap")) {
  customElements.define("concept-binary-heap", ConceptBinaryHeap);
}
