// Arithmetic Coding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptArithmeticCoding extends HTMLElement {
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
        .r1 {
          animation:r1 10s linear infinite;
        }
        @keyframes r1 {
          0%,25% {
            opacity:0;
          }
          36%,100% {
            opacity:1;
          }
        }
        .r2 {
          animation:r2 10s linear infinite;
        }
        @keyframes r2 {
          0%,55% {
            opacity:0;
          }
          66%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#dfefe5;
          text-anchor:middle;
        }
        .a {
          fill:#235345;
        }
        .b {
          fill:#295566;
        }
        .c {
          fill:#675331;
        }
        .chosen {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
        }
        .zoom {
          fill:#77c9ef08;
          stroke:#567b68;
          stroke-width:1;
        }
        .z1 {
          animation:z1 10s linear infinite;
        }
        .z2 {
          animation:z2 10s linear infinite;
        }
        .code {
          font-size:14px;
          fill:#f3c977;
          animation:finish 10s steps(1,end) infinite;
        }
        .finish {
          stroke:#f3c977;
          animation:finish 10s steps(1,end) infinite;
        }
        @keyframes z1 {
          0%,22% {
            opacity:0;
          }
          32%,100% {
            opacity:1;
          }
        }
        @keyframes z2 {
          0%,52% {
            opacity:0;
          }
          62%,100% {
            opacity:1;
          }
        }
        @keyframes finish {
          0% {
            opacity:0;
          }
          84%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Arithmetic Coding">
        <g class="rail r0">
          <rect class="a" x="18" y="22" width="52" height="16"/>
          <rect class="b" x="70" y="22" width="26" height="16"/>
          <rect class="c" x="96" y="22" width="26" height="16"/>
          <text x="44" y="34">A</text>
          <text x="83" y="34">B</text>
          <text x="109" y="34">C</text>
          <rect class="chosen" x="70" y="21" width="26" height="18"/>
        </g>
        <g class="rail r1">
          <rect class="a" x="18" y="54" width="52" height="16"/>
          <rect class="b" x="70" y="54" width="26" height="16"/>
          <rect class="c" x="96" y="54" width="26" height="16"/>
          <text x="44" y="66">A</text>
          <text x="83" y="66">B</text>
          <text x="109" y="66">C</text>
          <rect class="chosen" x="18" y="53" width="52" height="18"/>
        </g>
        <g class="rail r2">
          <rect class="a" x="18" y="86" width="52" height="16"/>
          <rect class="b" x="70" y="86" width="26" height="16"/>
          <rect class="c" x="96" y="86" width="26" height="16"/>
          <text x="44" y="98">A</text>
          <text x="83" y="98">B</text>
          <text x="109" y="98">C</text>
          <rect class="chosen" x="96" y="85" width="26" height="18"/>
        </g>
        <path class="zoom z1" d="M70 39L18 53H122L96 39Z"/>
        <path class="zoom z2" d="M18 71V85H122L70 71Z"/>
        <text class="code" x="70" y="128">10011</text>
        <path class="ink finish" d="M109 105v6H70v5"/>
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

if (!customElements.get("concept-arithmetic-coding")) {
  customElements.define("concept-arithmetic-coding", ConceptArithmeticCoding);
}
