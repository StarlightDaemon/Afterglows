// Vector Clocks. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVectorClocks extends HTMLElement {
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
        .vector {
          font-size:12px;
          letter-spacing:2px
        }
        .a0,.a1,.b0,.c0,.c1,.c2 {
          opacity:0
        }
        .a0 {
          animation:a0 12s infinite
        }
        .a1 {
          animation:a1 12s infinite
        }
        .a2 {
          animation:a2 12s infinite
        }
        .b0 {
          animation:b0 12s infinite
        }
        .b1 {
          animation:b1 12s infinite
        }
        .c0 {
          animation:c0 12s infinite
        }
        .c1 {
          animation:c1 12s infinite
        }
        .c2 {
          animation:c2 12s infinite
        }
        .c3 {
          animation:c3 12s infinite
        }
        .arrows {
          opacity:.35
        }
        .concurrent {
          animation:concurrent 12s infinite
        }
        .m,.n,.reply {
          opacity:0
        }
        .m {
          animation:m 12s linear infinite
        }
        .n {
          animation:n 12s linear infinite
        }
        .reply {
          animation:reply 12s linear infinite
        }
        @keyframes a0 {
          0%,11.9% {
            opacity:1
          }
          12%,100% {
            opacity:0
          }
        }
        @keyframes a1 {
          0%,11.9% {
            opacity:0
          }
          12%,89.9% {
            opacity:1
          }
          90%,100% {
            opacity:0
          }
        }
        @keyframes a2 {
          0%,89.9% {
            opacity:0
          }
          90%,100% {
            opacity:1
          }
        }
        @keyframes b0 {
          0%,11.9% {
            opacity:1
          }
          12%,100% {
            opacity:0
          }
        }
        @keyframes b1 {
          0%,11.9% {
            opacity:0
          }
          12%,100% {
            opacity:1
          }
        }
        @keyframes c0 {
          0%,39.9% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        @keyframes c1 {
          0%,39.9% {
            opacity:0
          }
          40%,59.9% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes c2 {
          0%,59.9% {
            opacity:0
          }
          60%,69.9% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        @keyframes c3 {
          0%,69.9% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        @keyframes concurrent {
          0%,11.9% {
            opacity:0
          }
          12%,100% {
            opacity:1
          }
        }
        @keyframes m {
          0%,11.9% {
            opacity:0;
            transform:translate(0,0)
          }
          12% {
            opacity:1;
            transform:translate(0,0)
          }
          40% {
            opacity:1;
            transform:translate(92px,22px)
          }
          40.1%,100% {
            opacity:0
          }
        }
        @keyframes n {
          0%,11.9% {
            opacity:0;
            transform:translate(0,0)
          }
          12% {
            opacity:1;
            transform:translate(0,0)
          }
          60% {
            opacity:1;
            transform:translate(46px,41px)
          }
          60.1%,100% {
            opacity:0
          }
        }
        @keyframes reply {
          0%,69.9% {
            opacity:0;
            transform:translate(0,0)
          }
          70% {
            opacity:1;
            transform:translate(0,0)
          }
          90% {
            opacity:1;
            transform:translate(-92px,18px)
          }
          90.1%,100% {
            opacity:0
          }
        }
        .vector text {
          font-size:12px;
          letter-spacing:0
        }
        .vector .vc0 {
          fill:#f3c977
        }
        .vector .vc1 {
          fill:#77c9ef
        }
        .vector .vc2 {
          fill:#ed8eab
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Vector Clocks">
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
            <path class="solid" d="M0 0L6 3L0 6Z"/>
          </marker>
        </defs>
        <text x="24" y="12">A</text>
        <rect class="ink muted" x="7" y="18" width="34" height="17" rx="3"/>
        <path class="ink muted" d="M24 40V125"/>
        <text x="70" y="12">B</text>
        <rect class="ink muted" x="53" y="18" width="34" height="17" rx="3"/>
        <path class="ink muted" d="M70 40V125"/>
        <text x="116" y="12">C</text>
        <rect class="ink muted" x="99" y="18" width="34" height="17" rx="3"/>
        <path class="ink muted" d="M116 40V125"/>
        <g class="vector a0">
          <text class="vc0" x="16" y="29">0</text>
          <text class="vc1" x="24" y="29">0</text>
          <text class="vc2" x="32" y="29">0</text>
        </g>
        <g class="vector a1">
          <text class="vc0" x="16" y="29">1</text>
          <text class="vc1" x="24" y="29">0</text>
          <text class="vc2" x="32" y="29">0</text>
        </g>
        <g class="vector a2">
          <text class="vc0" x="16" y="29">2</text>
          <text class="vc1" x="24" y="29">1</text>
          <text class="vc2" x="32" y="29">3</text>
        </g>
        <g class="vector b0">
          <text class="vc0" x="62" y="29">0</text>
          <text class="vc1" x="70" y="29">0</text>
          <text class="vc2" x="78" y="29">0</text>
        </g>
        <g class="vector b1">
          <text class="vc0" x="62" y="29">0</text>
          <text class="vc1" x="70" y="29">1</text>
          <text class="vc2" x="78" y="29">0</text>
        </g>
        <g class="vector c0">
          <text class="vc0" x="108" y="29">0</text>
          <text class="vc1" x="116" y="29">0</text>
          <text class="vc2" x="124" y="29">0</text>
        </g>
        <g class="vector c1">
          <text class="vc0" x="108" y="29">1</text>
          <text class="vc1" x="116" y="29">0</text>
          <text class="vc2" x="124" y="29">1</text>
        </g>
        <g class="vector c2">
          <text class="vc0" x="108" y="29">1</text>
          <text class="vc1" x="116" y="29">1</text>
          <text class="vc2" x="124" y="29">2</text>
        </g>
        <g class="vector c3">
          <text class="vc0" x="108" y="29">1</text>
          <text class="vc1" x="116" y="29">1</text>
          <text class="vc2" x="124" y="29">3</text>
        </g>
        <path class="ink concurrent" d="M24 45V41H70V45"/>
        <text class="concurrent" x="47" y="52">∥</text>
        <path class="ink arrows" marker-end="url(#arrow)" d="M24 50L116 72"/>
        <path class="ink arrows" marker-end="url(#arrow)" d="M70 50L116 91"/>
        <path class="ink arrows" marker-end="url(#arrow)" d="M116 101L24 119"/>
        <circle class="warm m" cx="24" cy="50" r="3"/>
        <circle class="cool n" cx="70" cy="50" r="3"/>
        <circle class="rose reply" cx="116" cy="101" r="3"/>
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

if (!customElements.get("concept-vector-clocks")) {
  customElements.define("concept-vector-clocks", ConceptVectorClocks);
}
