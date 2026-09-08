// KMP String Search. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKmpStringSearch extends HTMLElement {
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
        .t0 {
          fill:#668376;
          animation:t0 10s steps(1,end) infinite;
        }
        @keyframes t0 {
          0% {
            fill:#a1bdae;
          }
          10% {
            fill:#70edb1;
          }
          60%,100% {
            fill:#668376;
          }
        }
        .t1 {
          fill:#668376;
          animation:t1 10s steps(1,end) infinite;
        }
        @keyframes t1 {
          0% {
            fill:#a1bdae;
          }
          18% {
            fill:#70edb1;
          }
          60%,100% {
            fill:#668376;
          }
        }
        .t2 {
          fill:#70edb1;
          animation:t2 10s steps(1,end) infinite;
        }
        @keyframes t2 {
          0% {
            fill:#a1bdae;
          }
          26% {
            fill:#70edb1;
          }
          100% {
            fill:#70edb1;
          }
        }
        .t3 {
          fill:#70edb1;
          animation:t3 10s steps(1,end) infinite;
        }
        @keyframes t3 {
          0% {
            fill:#a1bdae;
          }
          34% {
            fill:#70edb1;
          }
          100% {
            fill:#70edb1;
          }
        }
        .t4 {
          fill:#70edb1;
          animation:t4 10s steps(1,end) infinite;
        }
        @keyframes t4 {
          0% {
            fill:#a1bdae;
          }
          42% {
            fill:#70edb1;
          }
          100% {
            fill:#70edb1;
          }
        }
        .t5 {
          fill:#70edb1;
          animation:t5 10s steps(1,end) infinite;
        }
        @keyframes t5 {
          0% {
            fill:#a1bdae;
          }
          64% {
            fill:#70edb1;
          }
          100% {
            fill:#70edb1;
          }
        }
        .t6 {
          fill:#70edb1;
          animation:t6 10s steps(1,end) infinite;
        }
        @keyframes t6 {
          0% {
            fill:#a1bdae;
          }
          72% {
            fill:#70edb1;
          }
          100% {
            fill:#70edb1;
          }
        }
        .t7 {
          fill:#70edb1;
          animation:t7 10s steps(1,end) infinite;
        }
        @keyframes t7 {
          0% {
            fill:#a1bdae;
          }
          80% {
            fill:#70edb1;
          }
          100% {
            fill:#70edb1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0efe5;
          text-anchor:middle;
        }
        .pattern {
          transform:translateX(28px);
          animation:shift 10s ease-in-out infinite;
        }
        .matched {
          stroke:#70edb1;
          animation:matched 10s steps(1,end) infinite;
        }
        .cursor {
          transform:translateX(115px);
          animation:cursor 10s steps(1,end) infinite;
        }
        .mismatch {
          fill:none;
          stroke:#ed8eab;
          stroke-width:2;
          opacity:0;
          animation:mismatch 10s steps(1,end) infinite;
        }
        .fallback {
          fill:#f3c977;
          font-size:10px;
          animation:fallback 10s steps(1,end) infinite;
        }
        .reuse {
          fill:none;
          stroke:#77c9ef;
          stroke-width:2;
          opacity:0;
          animation:fallback 10s steps(1,end) infinite;
        }
        @keyframes shift {
          0%,52% {
            transform:translateX(0px);
          }
          60%,100% {
            transform:translateX(28px);
          }
        }
        @keyframes cursor {
          0%,10% {
            transform:translateX(17px);
          }
          18% {
            transform:translateX(31px);
          }
          26% {
            transform:translateX(45px);
          }
          34% {
            transform:translateX(59px);
          }
          42% {
            transform:translateX(73px);
          }
          50%,64% {
            transform:translateX(87px);
          }
          72% {
            transform:translateX(101px);
          }
          80%,100% {
            transform:translateX(115px);
          }
        }
        @keyframes matched {
          0% {
            opacity:0;
          }
          10% {
            opacity:1;
            d:path("M11 85v5h12v-5");
          }
          18% {
            d:path("M11 85v5h26v-5");
          }
          26% {
            d:path("M11 85v5h40v-5");
          }
          34% {
            d:path("M11 85v5h54v-5");
          }
          42% {
            d:path("M11 85v5h68v-5");
          }
          52% {
            d:path("M11 85v5h40v-5");
          }
          64% {
            d:path("M11 85v5h54v-5");
          }
          72% {
            d:path("M11 85v5h68v-5");
          }
          80%,100% {
            d:path("M11 85v5h82v-5");
          }
        }
        @keyframes mismatch {
          0% {
            opacity:0;
          }
          50% {
            opacity:1;
          }
          64%,100% {
            opacity:0;
          }
        }
        @keyframes fallback {
          0% {
            opacity:0;
          }
          52% {
            opacity:1;
          }
          72%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="KMP String Search">
        <path class="ink muted" d="M10 43H122"/>
        <text class="text t0" x="17" y="37">A</text>
        <text class="text t1" x="31" y="37">B</text>
        <text class="text t2" x="45" y="37">A</text>
        <text class="text t3" x="59" y="37">B</text>
        <text class="text t4" x="73" y="37">A</text>
        <text class="text t5" x="87" y="37">B</text>
        <text class="text t6" x="101" y="37">A</text>
        <text class="text t7" x="115" y="37">C</text>
        <g class="pattern">
          <text x="17" y="77">A</text>
          <text x="31" y="77">B</text>
          <text x="45" y="77">A</text>
          <text x="59" y="77">B</text>
          <text x="73" y="77">A</text>
          <text x="87" y="77">C</text>
          <path class="ink matched" d="M11 85v5h82v-5"/>
        </g>
        <path class="ink cursor" d="M0 15v8m-3 -3l3 3l3 -3"/>
        <path class="mismatch" d="M84 48l7 7m-7 0l7 -7"/>
        <text class="fallback" x="70" y="119">ABABA → ABA</text>
        <path class="reuse" d="M39 45v7h40v-7"/>
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

if (!customElements.get("concept-kmp-string-search")) {
  customElements.define("concept-kmp-string-search", ConceptKmpStringSearch);
}
