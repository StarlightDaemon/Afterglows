// A* Search. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAStarSearch extends HTMLElement {
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
        .c00 {
          fill:#77c9ef55;
          animation:c00 12s steps(1,end) infinite;
        }
        @keyframes c00 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          39.6% {
            fill:#77c9ef55;
          }
        }
        .c10 {
          fill:#77c9ef55;
          animation:c10 12s steps(1,end) infinite;
        }
        @keyframes c10 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          30% {
            fill:#77c9ef55;
          }
        }
        .c20 {
          fill:#70edb155;
          animation:c20 12s steps(1,end) infinite;
        }
        @keyframes c20 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          20.4% {
            fill:#77c9ef55;
          }
          49.2% {
            fill:#70edb155;
          }
        }
        .c30 {
          fill:#70edb155;
          animation:c30 12s steps(1,end) infinite;
        }
        @keyframes c30 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          49.2% {
            fill:#77c9ef55;
          }
          54% {
            fill:#70edb155;
          }
        }
        .c40 {
          fill:#70edb155;
          animation:c40 12s steps(1,end) infinite;
        }
        @keyframes c40 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          54% {
            fill:#77c9ef55;
          }
          58.8% {
            fill:#70edb155;
          }
        }
        .c50 {
          fill:#70edb155;
          animation:c50 12s steps(1,end) infinite;
        }
        @keyframes c50 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          58.8% {
            fill:#77c9ef55;
          }
          63.6% {
            fill:#70edb155;
          }
        }
        .c60 {
          fill:#70edb155;
          animation:c60 12s steps(1,end) infinite;
        }
        @keyframes c60 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          63.6% {
            fill:#77c9ef55;
          }
          68.4% {
            fill:#70edb155;
          }
        }
        .c01 {
          fill:#70edb155;
          animation:c01 12s steps(1,end) infinite;
        }
        @keyframes c01 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#77c9ef55;
          }
          39.6% {
            fill:#70edb155;
          }
        }
        .c11 {
          fill:#70edb155;
          animation:c11 12s steps(1,end) infinite;
        }
        @keyframes c11 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          10.8% {
            fill:#77c9ef55;
          }
          30% {
            fill:#70edb155;
          }
        }
        .c21 {
          fill:#70edb155;
          animation:c21 12s steps(1,end) infinite;
        }
        @keyframes c21 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          15.6% {
            fill:#77c9ef55;
          }
          20.4% {
            fill:#70edb155;
          }
        }
        .c31 {
          fill:#708278;
        }
        .c41 {
          fill:#77c9ef55;
          animation:c41 12s steps(1,end) infinite;
        }
        @keyframes c41 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          58.8% {
            fill:#77c9ef55;
          }
        }
        .c51 {
          fill:#77c9ef55;
          animation:c51 12s steps(1,end) infinite;
        }
        @keyframes c51 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          63.6% {
            fill:#77c9ef55;
          }
        }
        .c61 {
          fill:#70edb155;
          animation:c61 12s steps(1,end) infinite;
        }
        @keyframes c61 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          68.4% {
            fill:#77c9ef55;
          }
          73.2% {
            fill:#70edb155;
          }
        }
        .c02 {
          fill:#70edb155;
          animation:c02 12s steps(1,end) infinite;
        }
        @keyframes c02 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#70edb155;
          }
        }
        .c12 {
          fill:#70edb155;
          animation:c12 12s steps(1,end) infinite;
        }
        @keyframes c12 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#77c9ef55;
          }
          10.8% {
            fill:#70edb155;
          }
        }
        .c22 {
          fill:#70edb155;
          animation:c22 12s steps(1,end) infinite;
        }
        @keyframes c22 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          10.8% {
            fill:#77c9ef55;
          }
          15.6% {
            fill:#70edb155;
          }
        }
        .c32 {
          fill:#708278;
        }
        .c42 {
          fill:#10231d;
          animation:c42 12s steps(1,end) infinite;
        }
        @keyframes c42 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c52 {
          fill:#10231d;
          animation:c52 12s steps(1,end) infinite;
        }
        @keyframes c52 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c62 {
          fill:#70edb155;
          animation:c62 12s steps(1,end) infinite;
        }
        @keyframes c62 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          73.2% {
            fill:#77c9ef55;
          }
          78% {
            fill:#70edb155;
          }
        }
        .c03 {
          fill:#70edb155;
          animation:c03 12s steps(1,end) infinite;
        }
        @keyframes c03 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#77c9ef55;
          }
          44.4% {
            fill:#70edb155;
          }
        }
        .c13 {
          fill:#70edb155;
          animation:c13 12s steps(1,end) infinite;
        }
        @keyframes c13 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          10.8% {
            fill:#77c9ef55;
          }
          34.8% {
            fill:#70edb155;
          }
        }
        .c23 {
          fill:#70edb155;
          animation:c23 12s steps(1,end) infinite;
        }
        @keyframes c23 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          15.6% {
            fill:#77c9ef55;
          }
          25.2% {
            fill:#70edb155;
          }
        }
        .c33 {
          fill:#708278;
        }
        .c43 {
          fill:#10231d;
          animation:c43 12s steps(1,end) infinite;
        }
        @keyframes c43 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c53 {
          fill:#10231d;
          animation:c53 12s steps(1,end) infinite;
        }
        @keyframes c53 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c63 {
          fill:#10231d;
          animation:c63 12s steps(1,end) infinite;
        }
        @keyframes c63 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c04 {
          fill:#77c9ef55;
          animation:c04 12s steps(1,end) infinite;
        }
        @keyframes c04 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          44.4% {
            fill:#77c9ef55;
          }
        }
        .c14 {
          fill:#77c9ef55;
          animation:c14 12s steps(1,end) infinite;
        }
        @keyframes c14 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          34.8% {
            fill:#77c9ef55;
          }
        }
        .c24 {
          fill:#77c9ef55;
          animation:c24 12s steps(1,end) infinite;
        }
        @keyframes c24 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
          25.2% {
            fill:#77c9ef55;
          }
        }
        .c34 {
          fill:#10231d;
          animation:c34 12s steps(1,end) infinite;
        }
        @keyframes c34 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c44 {
          fill:#10231d;
          animation:c44 12s steps(1,end) infinite;
        }
        @keyframes c44 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c54 {
          fill:#10231d;
          animation:c54 12s steps(1,end) infinite;
        }
        @keyframes c54 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .c64 {
          fill:#10231d;
          animation:c64 12s steps(1,end) infinite;
        }
        @keyframes c64 {
          0% {
            fill:#10231d;
          }
          6% {
            fill:#10231d;
          }
        }
        .cell {
          stroke:#254538;
          stroke-width:.5;
        }
        .selected {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5;
          transform:translate(114.5px,57.5px);
          animation:selected 12s steps(1,end) infinite;
        }
        .estimate {
          fill:none;
          stroke:#f3c977;
          stroke-width:1;
          stroke-dasharray:2 2;
          animation:estimate 12s steps(1,end) infinite;
        }
        .route {
          stroke-width:2.5;
          stroke-dasharray:1;
          animation:route 12s linear infinite;
        }
        .goal {
          fill:#f3c977;
        }
        .g {
          fill:#77c9ef;
          animation:g 12s steps(1,end) infinite;
        }
        .h {
          fill:#f3c977;
          animation:h 12s steps(1,end) infinite;
        }
        text {
          font:12px ui-monospace,monospace;
          fill:#c6dfd1;
          text-anchor:middle;
        }
        .g-label {
          fill:#77c9ef;
        }
        .h-label {
          fill:#f3c977;
        }
        @keyframes selected {
          0% {
            transform:translate(24.5px,57.5px);
          }
          6% {
            transform:translate(24.5px,57.5px);
          }
          10.8% {
            transform:translate(39.5px,57.5px);
          }
          15.6% {
            transform:translate(54.5px,57.5px);
          }
          20.4% {
            transform:translate(54.5px,42.5px);
          }
          25.2% {
            transform:translate(54.5px,72.5px);
          }
          30% {
            transform:translate(39.5px,42.5px);
          }
          34.8% {
            transform:translate(39.5px,72.5px);
          }
          39.6% {
            transform:translate(24.5px,42.5px);
          }
          44.4% {
            transform:translate(24.5px,72.5px);
          }
          49.2% {
            transform:translate(54.5px,27.5px);
          }
          54% {
            transform:translate(69.5px,27.5px);
          }
          58.8% {
            transform:translate(84.5px,27.5px);
          }
          63.6% {
            transform:translate(99.5px,27.5px);
          }
          68.4% {
            transform:translate(114.5px,27.5px);
          }
          73.2% {
            transform:translate(114.5px,42.5px);
          }
          78% {
            transform:translate(114.5px,57.5px);
          }
        }
        @keyframes estimate {
          0% {
            d:path("M24.5 57.5H114.5V57.5");
          }
          6% {
            d:path("M24.5 57.5H114.5V57.5");
          }
          10.8% {
            d:path("M39.5 57.5H114.5V57.5");
          }
          15.6% {
            d:path("M54.5 57.5H114.5V57.5");
          }
          20.4% {
            d:path("M54.5 42.5H114.5V57.5");
          }
          25.2% {
            d:path("M54.5 72.5H114.5V57.5");
          }
          30% {
            d:path("M39.5 42.5H114.5V57.5");
          }
          34.8% {
            d:path("M39.5 72.5H114.5V57.5");
          }
          39.6% {
            d:path("M24.5 42.5H114.5V57.5");
          }
          44.4% {
            d:path("M24.5 72.5H114.5V57.5");
          }
          49.2% {
            d:path("M54.5 27.5H114.5V57.5");
          }
          54% {
            d:path("M69.5 27.5H114.5V57.5");
          }
          58.8% {
            d:path("M84.5 27.5H114.5V57.5");
          }
          63.6% {
            d:path("M99.5 27.5H114.5V57.5");
          }
          68.4% {
            d:path("M114.5 27.5H114.5V57.5");
          }
          73.2% {
            d:path("M114.5 42.5H114.5V57.5");
          }
          78% {
            d:path("M114.5 57.5H114.5V57.5");
          }
        }
        @keyframes g {
          0% {
            width:0px;
          }
          6% {
            width:0px;
          }
          10.8% {
            width:6px;
          }
          15.6% {
            width:12px;
          }
          20.4% {
            width:18px;
          }
          25.2% {
            width:18px;
          }
          30% {
            width:12px;
          }
          34.8% {
            width:12px;
          }
          39.6% {
            width:6px;
          }
          44.4% {
            width:6px;
          }
          49.2% {
            width:24px;
          }
          54% {
            width:30px;
          }
          58.8% {
            width:36px;
          }
          63.6% {
            width:42px;
          }
          68.4% {
            width:48px;
          }
          73.2% {
            width:54px;
          }
          78% {
            width:60px;
          }
        }
        @keyframes h {
          0% {
            x:35px;
            width:36px;
          }
          6% {
            x:35px;
            width:36px;
          }
          10.8% {
            x:41px;
            width:30px;
          }
          15.6% {
            x:47px;
            width:24px;
          }
          20.4% {
            x:53px;
            width:30px;
          }
          25.2% {
            x:53px;
            width:30px;
          }
          30% {
            x:47px;
            width:36px;
          }
          34.8% {
            x:47px;
            width:36px;
          }
          39.6% {
            x:41px;
            width:42px;
          }
          44.4% {
            x:41px;
            width:42px;
          }
          49.2% {
            x:59px;
            width:36px;
          }
          54% {
            x:65px;
            width:30px;
          }
          58.8% {
            x:71px;
            width:24px;
          }
          63.6% {
            x:77px;
            width:18px;
          }
          68.4% {
            x:83px;
            width:12px;
          }
          73.2% {
            x:89px;
            width:6px;
          }
          78% {
            x:95px;
            width:0px;
          }
        }
        @keyframes route {
          0%,84% {
            stroke-dashoffset:1;
          }
          96%,100% {
            stroke-dashoffset:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="A* Search">
        <rect class="cell c00" x="17" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c10" x="32" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c20" x="47" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c30" x="62" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c40" x="77" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c50" x="92" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c60" x="107" y="20" width="14" height="14" rx="1"/>
        <rect class="cell c01" x="17" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c11" x="32" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c21" x="47" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c31" x="62" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c41" x="77" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c51" x="92" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c61" x="107" y="35" width="14" height="14" rx="1"/>
        <rect class="cell c02" x="17" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c12" x="32" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c22" x="47" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c32" x="62" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c42" x="77" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c52" x="92" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c62" x="107" y="50" width="14" height="14" rx="1"/>
        <rect class="cell c03" x="17" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c13" x="32" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c23" x="47" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c33" x="62" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c43" x="77" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c53" x="92" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c63" x="107" y="65" width="14" height="14" rx="1"/>
        <rect class="cell c04" x="17" y="80" width="14" height="14" rx="1"/>
        <rect class="cell c14" x="32" y="80" width="14" height="14" rx="1"/>
        <rect class="cell c24" x="47" y="80" width="14" height="14" rx="1"/>
        <rect class="cell c34" x="62" y="80" width="14" height="14" rx="1"/>
        <rect class="cell c44" x="77" y="80" width="14" height="14" rx="1"/>
        <rect class="cell c54" x="92" y="80" width="14" height="14" rx="1"/>
        <rect class="cell c64" x="107" y="80" width="14" height="14" rx="1"/>
        <path class="ink route" pathLength="1" d="M24.5 57.5L39.5 57.5L54.5 57.5L54.5 42.5L54.5 27.5L69.5 27.5L84.5 27.5L99.5 27.5L114.5 27.5L114.5 42.5L114.5 57.5"/>
        <path class="estimate" d="M114.5 57.5H114.5V57.5"/>
        <rect class="selected" x="-6" y="-6" width="12" height="12"/>
        <circle class="paper ink" cx="24.5" cy="57.5" r="3.5"/>
        <path class="goal" d="M114.5 52l5.5 5.5l-5.5 5.5l-5.5 -5.5Z"/>
        <path class="ink muted" d="M34 119h62"/>
        <rect class="g" x="35" y="109" width="60" height="7"/>
        <rect class="h" x="35" y="109" width="0" height="7"/>
        <text class="g-label" x="48" y="132">g</text>
        <text x="65" y="132">+</text>
        <text class="h-label" x="82" y="132">h</text>
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

if (!customElements.get("concept-a-star-search")) {
  customElements.define("concept-a-star-search", ConceptAStarSearch);
}
