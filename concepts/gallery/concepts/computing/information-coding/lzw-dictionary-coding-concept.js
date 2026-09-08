// LZW Dictionary Coding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLzwDictionaryCoding extends HTMLElement {
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
        .e2 {
          animation:e2 11s steps(1,end) infinite;
        }
        @keyframes e2 {
          0% {
            opacity:0;
          }
          16%,100% {
            opacity:1;
          }
        }
        .e3 {
          animation:e3 11s steps(1,end) infinite;
        }
        @keyframes e3 {
          0% {
            opacity:0;
          }
          32%,100% {
            opacity:1;
          }
        }
        .e4 {
          animation:e4 11s steps(1,end) infinite;
        }
        @keyframes e4 {
          0% {
            opacity:0;
          }
          56%,100% {
            opacity:1;
          }
        }
        .o0 {
          animation:o0 11s steps(1,end) infinite;
        }
        @keyframes o0 {
          0% {
            opacity:0;
          }
          16%,100% {
            opacity:1;
          }
        }
        .o1 {
          animation:o1 11s steps(1,end) infinite;
        }
        @keyframes o1 {
          0% {
            opacity:0;
          }
          32%,100% {
            opacity:1;
          }
        }
        .o2 {
          animation:o2 11s steps(1,end) infinite;
        }
        @keyframes o2 {
          0% {
            opacity:0;
          }
          56%,100% {
            opacity:1;
          }
        }
        .o3 {
          animation:o3 11s steps(1,end) infinite;
        }
        @keyframes o3 {
          0% {
            opacity:0;
          }
          88%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0efe4;
          text-anchor:middle;
        }
        .code {
          fill:#77c9ef;
        }
        .phrase {
          stroke:#f3c977;
          animation:phrase 11s steps(1,end) infinite;
        }
        .reuse {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5;
          animation:reuse 11s steps(1,end) infinite;
        }
        .cursor {
          stroke:#77c9ef;
          opacity:0;
          animation:cursor 11s steps(1,end) infinite;
        }
        @keyframes phrase {
          0% {
            d:path("M16 29v6h12v-6");
          }
          16% {
            d:path("M32 29v6h12v-6");
          }
          32% {
            d:path("M48 29v6h12v-6");
          }
          44% {
            d:path("M48 29v6h28v-6");
          }
          56% {
            d:path("M80 29v6h12v-6");
          }
          68% {
            d:path("M80 29v6h28v-6");
          }
          80%,100% {
            d:path("M80 29v6h44v-6");
          }
        }
        @keyframes reuse {
          0% {
            opacity:0;
          }
          84%,100% {
            opacity:1;
          }
        }
        @keyframes cursor {
          0% {
            opacity:1;
            transform:translateX(38px);
          }
          32% {
            transform:translateX(54px);
          }
          44% {
            transform:translateX(70px);
          }
          56% {
            transform:translateX(86px);
          }
          68% {
            transform:translateX(102px);
          }
          80% {
            transform:translateX(118px);
          }
          90%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="LZW Dictionary Coding">
        <text x="22" y="24">A</text>
        <text x="38" y="24">B</text>
        <text x="54" y="24">A</text>
        <text x="70" y="24">B</text>
        <text x="86" y="24">A</text>
        <text x="102" y="24">B</text>
        <text x="118" y="24">A</text>
        <path class="ink phrase" d="M80 29v6h44v-6"/>
        <path class="ink muted" d="M15 47H78V108H15Z M32 47V108"/>
        <g class="entry e0">
          <text class="code" x="24" y="58">0</text>
          <text x="53" y="58">A</text>
        </g>
        <g class="entry e1">
          <text class="code" x="24" y="68.5">1</text>
          <text x="53" y="68.5">B</text>
        </g>
        <g class="entry e2">
          <text class="code" x="24" y="79">2</text>
          <text x="53" y="79">AB</text>
        </g>
        <g class="entry e3">
          <text class="code" x="24" y="89.5">3</text>
          <text x="53" y="89.5">BA</text>
        </g>
        <g class="entry e4">
          <text class="code" x="24" y="100">4</text>
          <text x="53" y="100">ABA</text>
        </g>
        <g class="out o0">
          <rect class="paper ink" x="14" y="117" width="20" height="17" rx="2"/>
          <text x="24" y="130">0</text>
        </g>
        <g class="out o1">
          <rect class="paper ink" x="44" y="117" width="20" height="17" rx="2"/>
          <text x="54" y="130">1</text>
        </g>
        <g class="out o2">
          <rect class="paper ink" x="74" y="117" width="20" height="17" rx="2"/>
          <text x="84" y="130">2</text>
        </g>
        <g class="out o3">
          <rect class="paper ink" x="104" y="117" width="20" height="17" rx="2"/>
          <text x="114" y="130">4</text>
        </g>
        <path class="reuse" d="M80 101H114V115m-3 -3l3 3l3 -3"/>
        <path class="ink cursor" d="M0 6v7m-3 -3l3 3l3 -3"/>
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

if (!customElements.get("concept-lzw-dictionary-coding")) {
  customElements.define("concept-lzw-dictionary-coding", ConceptLzwDictionaryCoding);
}
