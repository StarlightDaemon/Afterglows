// IPv4 Fragmentation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptIpv4Fragmentation extends HTMLElement {
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
          font:8px monospace;
          text-anchor:middle
        }
        .fragments text {
          text-anchor:start
        }
        .original {
          opacity:.2;
          animation:original 11s infinite
        }
        .cut {
          stroke:#f3c977;
          animation:cut 11s infinite
        }
        .fragments {
          opacity:.45;
          animation:fragments 11s infinite
        }
        .out {
          fill:#70edb1
        }
        .o1 {
          animation:o1 11s infinite
        }
        .o0 {
          animation:o0 11s infinite
        }
        .o2 {
          animation:o2 11s infinite
        }
        .f0 {
          animation:f0 11s infinite
        }
        .f1 {
          animation:f1 11s infinite
        }
        .f2 {
          animation:f2 11s infinite
        }
        @keyframes original {
          0%,13% {
            opacity:1
          }
          14%,100% {
            opacity:.2
          }
        }
        @keyframes cut {
          0%,7% {
            opacity:0
          }
          8%,23% {
            opacity:1
          }
          24%,100% {
            opacity:.3
          }
        }
        @keyframes fragments {
          0%,13% {
            opacity:0
          }
          14%,85% {
            opacity:1
          }
          86%,100% {
            opacity:.45
          }
        }
        @keyframes f0 {
          0%,55% {
            opacity:1
          }
          56%,100% {
            opacity:.45
          }
        }
        @keyframes f1 {
          0%,40% {
            opacity:1
          }
          41%,100% {
            opacity:.45
          }
        }
        @keyframes f2 {
          0%,75% {
            opacity:1
          }
          76%,100% {
            opacity:.45
          }
        }
        @keyframes o0 {
          0%,55% {
            opacity:.1
          }
          56%,100% {
            opacity:1
          }
        }
        @keyframes o1 {
          0%,40% {
            opacity:.1
          }
          41%,100% {
            opacity:1
          }
        }
        @keyframes o2 {
          0%,75% {
            opacity:.1
          }
          76%,100% {
            opacity:1
          }
        }
        .fragments text,.fragments .cool {
          animation:headers 11s infinite
        }
        @keyframes headers {
          0%,24% {
            opacity:0
          }
          25%,100% {
            opacity:1
          }
        }
        .f0 {
          animation:split0 11s linear infinite
        }
        @keyframes split0 {
          0%,14% {
            opacity:1;
            transform:translate(-8px,-28px)
          }
          25%,55% {
            opacity:1;
            transform:translate(0,0)
          }
          56%,100% {
            opacity:.45;
            transform:translate(0,0)
          }
        }
        .f1 {
          animation:split1 11s linear infinite
        }
        @keyframes split1 {
          0%,14% {
            opacity:1;
            transform:translate(40px,-51px)
          }
          25%,40% {
            opacity:1;
            transform:translate(0,0)
          }
          41%,100% {
            opacity:.45;
            transform:translate(0,0)
          }
        }
        .f2 {
          animation:split2 11s linear infinite
        }
        @keyframes split2 {
          0%,14% {
            opacity:1;
            transform:translate(88px,-74px)
          }
          25%,75% {
            opacity:1;
            transform:translate(0,0)
          }
          76%,100% {
            opacity:.45;
            transform:translate(0,0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="IPv4 Fragmentation">
        <text x="70" y="12">1500 bytes · DF 0</text>
        <g class="original">
          <rect class="solid" x="10" y="20" width="7" height="10"/>
          <rect class="solid" x="18" y="20" width="7" height="10"/>
          <rect class="solid" x="26" y="20" width="7" height="10"/>
          <rect class="solid" x="34" y="20" width="7" height="10"/>
          <rect class="solid" x="42" y="20" width="7" height="10"/>
          <rect class="solid" x="50" y="20" width="7" height="10"/>
          <rect class="solid" x="58" y="20" width="7" height="10"/>
          <rect class="solid" x="66" y="20" width="7" height="10"/>
          <rect class="solid" x="74" y="20" width="7" height="10"/>
          <rect class="solid" x="82" y="20" width="7" height="10"/>
          <rect class="solid" x="90" y="20" width="7" height="10"/>
          <rect class="solid" x="98" y="20" width="7" height="10"/>
          <rect class="solid" x="106" y="20" width="7" height="10"/>
          <rect class="solid" x="114" y="20" width="7" height="10"/>
          <rect class="solid" x="122" y="20" width="7" height="10"/>
        </g>
        <path class="ink cut" d="M57 16V34M105 16V34"/>
        <g class="fragments">
          <g class="f0">
            <rect class="cool" x="10" y="48" width="5" height="10"/>
            <rect class="solid" x="18" y="48" width="7" height="10"/>
            <rect class="solid" x="26" y="48" width="7" height="10"/>
            <rect class="solid" x="34" y="48" width="7" height="10"/>
            <rect class="solid" x="42" y="48" width="7" height="10"/>
            <rect class="solid" x="50" y="48" width="7" height="10"/>
            <rect class="solid" x="58" y="48" width="7" height="10"/>
            <text x="72" y="56">0 / 1</text>
          </g>
          <g class="f1">
            <rect class="cool" x="10" y="71" width="5" height="10"/>
            <rect class="solid" x="18" y="71" width="7" height="10"/>
            <rect class="solid" x="26" y="71" width="7" height="10"/>
            <rect class="solid" x="34" y="71" width="7" height="10"/>
            <rect class="solid" x="42" y="71" width="7" height="10"/>
            <rect class="solid" x="50" y="71" width="7" height="10"/>
            <rect class="solid" x="58" y="71" width="7" height="10"/>
            <text x="72" y="79">75 / 1</text>
          </g>
          <g class="f2">
            <rect class="cool" x="10" y="94" width="5" height="10"/>
            <rect class="solid" x="18" y="94" width="7" height="10"/>
            <rect class="solid" x="26" y="94" width="7" height="10"/>
            <rect class="solid" x="34" y="94" width="7" height="10"/>
            <text x="48" y="102">150 / 0</text>
          </g>
        </g>
        <text x="104" y="39">off / MF</text>
        <path class="ink muted" d="M12 112H128M124 109L128 112L124 115"/>
        <g class="assembled">
          <rect class="out o0" x="10" y="121" width="7" height="10"/>
          <rect class="out o0" x="18" y="121" width="7" height="10"/>
          <rect class="out o0" x="26" y="121" width="7" height="10"/>
          <rect class="out o0" x="34" y="121" width="7" height="10"/>
          <rect class="out o0" x="42" y="121" width="7" height="10"/>
          <rect class="out o0" x="50" y="121" width="7" height="10"/>
          <rect class="out o1" x="58" y="121" width="7" height="10"/>
          <rect class="out o1" x="66" y="121" width="7" height="10"/>
          <rect class="out o1" x="74" y="121" width="7" height="10"/>
          <rect class="out o1" x="82" y="121" width="7" height="10"/>
          <rect class="out o1" x="90" y="121" width="7" height="10"/>
          <rect class="out o1" x="98" y="121" width="7" height="10"/>
          <rect class="out o2" x="106" y="121" width="7" height="10"/>
          <rect class="out o2" x="114" y="121" width="7" height="10"/>
          <rect class="out o2" x="122" y="121" width="7" height="10"/>
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

if (!customElements.get("concept-ipv4-fragmentation")) {
  customElements.define("concept-ipv4-fragmentation", ConceptIpv4Fragmentation);
}
