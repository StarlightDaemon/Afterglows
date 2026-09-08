// Huffman Coding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHuffmanCoding extends HTMLElement {
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
        .m0 {
          animation:m0 10s linear infinite;
        }
        @keyframes m0 {
          0%,8% {
            opacity:0;
          }
          22%,100% {
            opacity:1;
          }
        }
        .m1 {
          animation:m1 10s linear infinite;
        }
        @keyframes m1 {
          0%,28% {
            opacity:0;
          }
          42%,100% {
            opacity:1;
          }
        }
        .m2 {
          animation:m2 10s linear infinite;
        }
        @keyframes m2 {
          0%,48% {
            opacity:0;
          }
          62%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0f0e6;
          text-anchor:middle;
        }
        .weight {
          fill:#f3c977;
          font-size:10px;
        }
        .bit {
          fill:#87ab97;
          font-size:10px;
        }
        .trace {
          fill:none;
          stroke:#f3c977;
          stroke-width:2.3;
        }
        .short {
          opacity:0;
          animation:short 10s steps(1,end) infinite;
        }
        .long {
          stroke-dasharray:1;
          animation:long 10s linear infinite;
        }
        .code {
          fill:#f3c977;
        }
        .c0,.c1,.c11 {
          opacity:0;
        }
        .c0 {
          animation:c0 10s steps(1,end) infinite;
        }
        .c1 {
          animation:c1 10s steps(1,end) infinite;
        }
        .c11 {
          animation:c11 10s steps(1,end) infinite;
        }
        .c110 {
          animation:c110 10s steps(1,end) infinite;
        }
        @keyframes short {
          0% {
            opacity:0;
          }
          70% {
            opacity:1;
          }
          78%,100% {
            opacity:0;
          }
        }
        @keyframes long {
          0%,80% {
            stroke-dashoffset:1;
          }
          94%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes c0 {
          0% {
            opacity:0;
          }
          70% {
            opacity:1;
          }
          78%,100% {
            opacity:0;
          }
        }
        @keyframes c1 {
          0% {
            opacity:0;
          }
          84% {
            opacity:1;
          }
          89%,100% {
            opacity:0;
          }
        }
        @keyframes c11 {
          0% {
            opacity:0;
          }
          89% {
            opacity:1;
          }
          94%,100% {
            opacity:0;
          }
        }
        @keyframes c110 {
          0% {
            opacity:0;
          }
          94%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Huffman Coding">
        <circle class="ink paper" cx="22" cy="110" r="8"/>
        <text x="22" y="114">A</text>
        <text class="weight" x="22" y="129">5</text>
        <circle class="ink paper" cx="60" cy="110" r="8"/>
        <text x="60" y="114">B</text>
        <text class="weight" x="60" y="129">2</text>
        <circle class="ink paper" cx="90" cy="110" r="8"/>
        <text x="90" y="114">C</text>
        <text class="weight" x="90" y="129">1</text>
        <circle class="ink paper" cx="118" cy="110" r="8"/>
        <text x="118" y="114">D</text>
        <text class="weight" x="118" y="129">1</text>
        <g class="merge m0">
          <path class="ink" pathLength="1" d="M90 102L104 80L118 102"/>
          <circle class="paper ink" cx="104" cy="80" r="8"/>
          <text x="104" y="84">2</text>
          <text class="bit" x="91" y="94">0</text>
          <text class="bit" x="117" y="94">1</text>
        </g>
        <g class="merge m1">
          <path class="ink" pathLength="1" d="M60 102L82 52L104 72"/>
          <circle class="paper ink" cx="82" cy="52" r="8"/>
          <text x="82" y="56">4</text>
          <text class="bit" x="65" y="79">0</text>
          <text class="bit" x="97" y="63">1</text>
        </g>
        <g class="merge m2">
          <path class="ink" pathLength="1" d="M22 102L50 23L82 44"/>
          <circle class="paper ink" cx="50" cy="23" r="8"/>
          <text x="50" y="27">9</text>
          <text class="bit" x="28" y="65">0</text>
          <text class="bit" x="73" y="30">1</text>
        </g>
        <path class="trace short" d="M50 23L22 110"/>
        <path class="trace long" pathLength="1" d="M50 23L82 52L104 80L90 110"/>
        <text class="code c0" x="110" y="23">0</text>
        <text class="code c1" x="110" y="23">1</text>
        <text class="code c11" x="110" y="23">11</text>
        <text class="code c110" x="110" y="23">110</text>
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

if (!customElements.get("concept-huffman-coding")) {
  customElements.define("concept-huffman-coding", ConceptHuffmanCoding);
}
