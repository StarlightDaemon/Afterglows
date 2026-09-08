// Work-Stealing Scheduler. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptWorkStealingScheduler extends HTMLElement {
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
          font:9px monospace;
          text-anchor:middle
        }
        .dark {
          fill:#07120f
        }
        .queued {
          opacity:.15
        }
        .task {
          opacity:0
        }
        .owner {
          stroke:#f3c977;
          opacity:.5
        }
        .thief {
          stroke:#77c9ef;
          opacity:.5
        }
        .progress {
          animation:progress 10s linear infinite
        }
        @keyframes progress {
          0%,24.9% {
            width:0
          }
          25% {
            width:0
          }
          45%,59.9% {
            width:24px
          }
          60% {
            width:0
          }
          82%,100% {
            width:24px
          }
        }
        .q1 {
          animation:q1 10s infinite
        }
        .t1 {
          animation:t1 10s linear infinite
        }
        .run1 {
          opacity:0;
          animation:run1 10s infinite
        }
        .d1 {
          animation:d1 10s infinite
        }
        @keyframes q1 {
          0%,11.9% {
            opacity:1
          }
          12%,100% {
            opacity:.15
          }
        }
        @keyframes t1 {
          0%,11.9% {
            opacity:0;
            transform:translate(0,0)
          }
          12% {
            opacity:1;
            transform:translate(0,0)
          }
          18.5% {
            transform:translate(48px,8px)
          }
          25% {
            opacity:1;
            transform:translate(46px,74px)
          }
          25.1%,100% {
            opacity:0
          }
        }
        @keyframes run1 {
          0%,24.9% {
            opacity:0
          }
          25%,59.9% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes d1 {
          0%,44.9% {
            opacity:.1
          }
          45%,100% {
            opacity:1
          }
        }
        .q2 {
          animation:q2 10s infinite
        }
        .t2 {
          animation:t2 10s linear infinite
        }
        .run2 {
          opacity:1;
          animation:run2 10s infinite
        }
        .d2 {
          animation:d2 10s infinite
        }
        @keyframes q2 {
          0%,47.9% {
            opacity:1
          }
          48%,100% {
            opacity:.15
          }
        }
        @keyframes t2 {
          0%,47.9% {
            opacity:0;
            transform:translate(0,0)
          }
          48% {
            opacity:1;
            transform:translate(0,0)
          }
          54% {
            transform:translate(48px,-9px)
          }
          60% {
            opacity:1;
            transform:translate(46px,57px)
          }
          60.1%,100% {
            opacity:0
          }
        }
        @keyframes run2 {
          0%,59.9% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        @keyframes d2 {
          0%,81.9% {
            opacity:.1
          }
          82%,100% {
            opacity:1
          }
        }
        .q3 {
          animation:q3 10s infinite
        }
        .t3 {
          animation:t3 10s linear infinite
        }
        .run3 {
          opacity:1;
          animation:run3 10s infinite
        }
        .d3 {
          animation:d3 10s infinite
        }
        @keyframes q3 {
          0%,47.9% {
            opacity:1
          }
          48%,100% {
            opacity:.15
          }
        }
        @keyframes t3 {
          0%,47.9% {
            opacity:0;
            transform:translate(0,0)
          }
          48% {
            opacity:1;
            transform:translate(0,0)
          }
          54% {
            transform:translate(-31px,37px)
          }
          60% {
            opacity:1;
            transform:translate(-46px,40px)
          }
          60.1%,100% {
            opacity:0
          }
        }
        @keyframes run3 {
          0%,59.9% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        @keyframes d3 {
          0%,81.9% {
            opacity:.1
          }
          82%,100% {
            opacity:1
          }
        }
        .q4 {
          animation:q4 10s infinite
        }
        .t4 {
          animation:t4 10s linear infinite
        }
        .run4 {
          opacity:0;
          animation:run4 10s infinite
        }
        .d4 {
          animation:d4 10s infinite
        }
        @keyframes q4 {
          0%,11.9% {
            opacity:1
          }
          12%,100% {
            opacity:.15
          }
        }
        @keyframes t4 {
          0%,11.9% {
            opacity:0;
            transform:translate(0,0)
          }
          12% {
            opacity:1;
            transform:translate(0,0)
          }
          18.5% {
            transform:translate(-31px,20px)
          }
          25% {
            opacity:1;
            transform:translate(-46px,23px)
          }
          25.1%,100% {
            opacity:0
          }
        }
        @keyframes run4 {
          0%,24.9% {
            opacity:0
          }
          25%,59.9% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes d4 {
          0%,44.9% {
            opacity:.1
          }
          45%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Work-Stealing Scheduler">
        <text x="70" y="13">oldest</text>
        <path class="ink muted" d="M57 19V89M83 19V89"/>
        <path class="ink owner" d="M70 84Q42 118 24 102"/>
        <path class="ink thief" d="M70 24Q125 17 116 102"/>
        <text x="70" y="109">newest</text>
        <text x="24" y="87">A</text>
        <text x="116" y="87">B</text>
        <rect class="ink muted paper" x="8" y="93" width="32" height="25" rx="4"/>
        <rect class="ink muted paper" x="100" y="93" width="32" height="25" rx="4"/>
        <rect class="warm progress" x="12" y="113" width="24" height="3"/>
        <rect class="cool progress" x="104" y="113" width="24" height="3"/>
        <g class="queued q1">
          <rect class="solid" x="61" y="24" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="34">1</text>
        </g>
        <g class="task t1">
          <rect fill="#77c9ef" x="61" y="24" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="34">1</text>
        </g>
        <text class="running run1" x="116" y="108">1</text>
        <g class="done d1">
          <rect fill="#77c9ef" x="102" y="125" width="12" height="11" rx="1"/>
          <text class="dark" x="108" y="134">1</text>
        </g>
        <g class="queued q2">
          <rect class="solid" x="61" y="41" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="51">2</text>
        </g>
        <g class="task t2">
          <rect fill="#77c9ef" x="61" y="41" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="51">2</text>
        </g>
        <text class="running run2" x="116" y="108">2</text>
        <g class="done d2">
          <rect fill="#77c9ef" x="119" y="125" width="12" height="11" rx="1"/>
          <text class="dark" x="125" y="134">2</text>
        </g>
        <g class="queued q3">
          <rect class="solid" x="61" y="58" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="68">3</text>
        </g>
        <g class="task t3">
          <rect fill="#f3c977" x="61" y="58" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="68">3</text>
        </g>
        <text class="running run3" x="24" y="108">3</text>
        <g class="done d3">
          <rect fill="#f3c977" x="27" y="125" width="12" height="11" rx="1"/>
          <text class="dark" x="33" y="134">3</text>
        </g>
        <g class="queued q4">
          <rect class="solid" x="61" y="75" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="85">4</text>
        </g>
        <g class="task t4">
          <rect fill="#f3c977" x="61" y="75" width="18" height="12" rx="2"/>
          <text class="dark" x="70" y="85">4</text>
        </g>
        <text class="running run4" x="24" y="108">4</text>
        <g class="done d4">
          <rect fill="#f3c977" x="10" y="125" width="12" height="11" rx="1"/>
          <text class="dark" x="16" y="134">4</text>
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

if (!customElements.get("concept-work-stealing-scheduler")) {
  customElements.define("concept-work-stealing-scheduler", ConceptWorkStealingScheduler);
}
