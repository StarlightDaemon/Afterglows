// Hamming Error Correction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHammingErrorCorrection extends HTMLElement {
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
        .p0 {
          animation:p0 10s steps(1,end) infinite;
        }
        @keyframes p0 {
          0% {
            fill:#284736;
          }
          36% {
            fill:#70edb1;
          }
          86%,100% {
            fill:#70edb1;
          }
        }
        .p1 {
          animation:p1 10s steps(1,end) infinite;
        }
        @keyframes p1 {
          0% {
            fill:#284736;
          }
          48% {
            fill:#ed8eab;
          }
          86%,100% {
            fill:#70edb1;
          }
        }
        .ok1 {
          animation:ok1 10s steps(1,end) infinite;
        }
        .bad1 {
          animation:bad1 10s steps(1,end) infinite;
        }
        @keyframes ok1 {
          0% {
            opacity:1;
          }
          20% {
            opacity:0;
          }
          86%,100% {
            opacity:1;
          }
        }
        @keyframes bad1 {
          0% {
            opacity:0;
          }
          48% {
            opacity:1;
          }
          86%,100% {
            opacity:0;
          }
        }
        .p2 {
          animation:p2 10s steps(1,end) infinite;
        }
        @keyframes p2 {
          0% {
            fill:#284736;
          }
          60% {
            fill:#ed8eab;
          }
          86%,100% {
            fill:#70edb1;
          }
        }
        .ok2 {
          animation:ok2 10s steps(1,end) infinite;
        }
        .bad2 {
          animation:bad2 10s steps(1,end) infinite;
        }
        @keyframes ok2 {
          0% {
            opacity:1;
          }
          20% {
            opacity:0;
          }
          86%,100% {
            opacity:1;
          }
        }
        @keyframes bad2 {
          0% {
            opacity:0;
          }
          60% {
            opacity:1;
          }
          86%,100% {
            opacity:0;
          }
        }
        text {
          font:12px ui-monospace,monospace;
          fill:#dfeee4;
          text-anchor:middle;
        }
        .index {
          font-size:9px;
          fill:#88a897;
        }
        .slot {
          fill:#10251c;
          stroke:#496a54;
          stroke-width:1;
        }
        .check {
          fill:#70edb1;
        }
        .original {
          animation:original 10s steps(1,end) infinite;
        }
        .error,.bad,.wrong,.fault {
          opacity:0;
        }
        .error {
          fill:#ed8eab;
          animation:error 10s steps(1,end) infinite;
        }
        .bad {
          fill:#ed8eab;
        }
        .ok0 {
          animation:ok0 10s steps(1,end) infinite;
        }
        @keyframes ok0 {
          0% {
            opacity:1;
          }
          20% {
            opacity:0;
          }
          36%,100% {
            opacity:1;
          }
        }
        .ok {
          fill:#70edb1;
        }
        .wrong {
          fill:#f3c977;
          animation:wrong 10s steps(1,end) infinite;
        }
        .zero {
          fill:#70edb1;
          animation:zero 10s steps(1,end) infinite;
        }
        .repair {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.7;
          opacity:0;
          animation:repair 10s steps(1,end) infinite;
        }
        .fault {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.5;
          animation:error 10s steps(1,end) infinite;
        }
        @keyframes original {
          0% {
            opacity:1;
          }
          20% {
            opacity:0;
          }
          86%,100% {
            opacity:1;
          }
        }
        @keyframes error {
          0% {
            opacity:0;
          }
          20% {
            opacity:1;
          }
          86%,100% {
            opacity:0;
          }
        }
        @keyframes wrong {
          0% {
            opacity:0;
          }
          64% {
            opacity:1;
          }
          86%,100% {
            opacity:0;
          }
        }
        @keyframes zero {
          0% {
            opacity:0;
          }
          86%,100% {
            opacity:1;
          }
        }
        @keyframes repair {
          0% {
            opacity:0;
          }
          70% {
            opacity:1;
          }
          86%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Hamming Error Correction">
        <text class="index" x="20" y="19">1</text>
        <rect class="slot" x="14" y="25" width="12" height="19"/>
        <text x="20" y="39">0</text>
        <text class="index" x="36" y="19">2</text>
        <rect class="slot" x="30" y="25" width="12" height="19"/>
        <text x="36" y="39">1</text>
        <text class="index" x="52" y="19">3</text>
        <rect class="slot" x="46" y="25" width="12" height="19"/>
        <text x="52" y="39">1</text>
        <text class="index" x="68" y="19">4</text>
        <rect class="slot" x="62" y="25" width="12" height="19"/>
        <text x="68" y="39">0</text>
        <text class="index" x="84" y="19">5</text>
        <rect class="slot" x="78" y="25" width="12" height="19"/>
        <text x="84" y="39">0</text>
        <text class="index" x="100" y="19">6</text>
        <rect class="slot" x="94" y="25" width="12" height="19"/>
        <text class="original" x="100" y="39">1</text>
        <text class="error" x="100" y="39">0</text>
        <text class="index" x="116" y="19">7</text>
        <rect class="slot" x="110" y="25" width="12" height="19"/>
        <text x="116" y="39">1</text>
        <text class="index" x="8" y="64">1</text>
        <path class="ink muted" d="M15 61H122"/>
        <circle class="check p0" cx="20" cy="61" r="3"/>
        <circle class="check p0" cx="52" cy="61" r="3"/>
        <circle class="check p0" cx="84" cy="61" r="3"/>
        <circle class="check p0" cx="116" cy="61" r="3"/>
        <text class="ok ok0" x="131" y="65">0</text>
        <text class="index" x="8" y="82">2</text>
        <path class="ink muted" d="M15 79H122"/>
        <circle class="check p1" cx="36" cy="79" r="3"/>
        <circle class="check p1" cx="52" cy="79" r="3"/>
        <circle class="check p1" cx="100" cy="79" r="3"/>
        <circle class="check p1" cx="116" cy="79" r="3"/>
        <text class="ok ok1" x="131" y="83">0</text>
        <text class="bad bad1" x="131" y="83">1</text>
        <text class="index" x="8" y="100">4</text>
        <path class="ink muted" d="M15 97H122"/>
        <circle class="check p2" cx="68" cy="97" r="3"/>
        <circle class="check p2" cx="84" cy="97" r="3"/>
        <circle class="check p2" cx="100" cy="97" r="3"/>
        <circle class="check p2" cx="116" cy="97" r="3"/>
        <text class="ok ok2" x="131" y="101">0</text>
        <text class="bad bad2" x="131" y="101">1</text>
        <text class="syndrome wrong" x="56" y="127">110 = 6</text>
        <text class="syndrome zero" x="56" y="127">000</text>
        <path class="repair" d="M89 119H122V48H103m3 -3l-3 3l3 3"/>
        <circle class="fault" cx="100" cy="35" r="11"/>
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

if (!customElements.get("concept-hamming-error-correction")) {
  customElements.define("concept-hamming-error-correction", ConceptHammingErrorCorrection);
}
