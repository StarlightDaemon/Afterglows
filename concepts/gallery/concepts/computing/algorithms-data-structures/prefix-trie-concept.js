// Prefix Trie. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPrefixTrie extends HTMLElement {
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
        .pC {
          animation:pC 9s steps(1,end) infinite;
        }
        @keyframes pC {
          0% {
            opacity:0;
          }
          10%,100% {
            opacity:1;
          }
        }
        .pA {
          animation:pA 9s steps(1,end) infinite;
        }
        @keyframes pA {
          0% {
            opacity:0;
          }
          18%,100% {
            opacity:1;
          }
        }
        .pT {
          animation:pT 9s steps(1,end) infinite;
        }
        @keyframes pT {
          0% {
            opacity:0;
          }
          26%,100% {
            opacity:1;
          }
        }
        .pR {
          animation:pR 9s steps(1,end) infinite;
        }
        @keyframes pR {
          0% {
            opacity:0;
          }
          52%,100% {
            opacity:1;
          }
        }
        .pD {
          animation:pD 9s steps(1,end) infinite;
        }
        @keyframes pD {
          0% {
            opacity:0;
          }
          68%,100% {
            opacity:1;
          }
        }
        .pO {
          animation:pO 9s steps(1,end) infinite;
        }
        @keyframes pO {
          0% {
            opacity:0;
          }
          76%,100% {
            opacity:1;
          }
        }
        .pG {
          animation:pG 9s steps(1,end) infinite;
        }
        @keyframes pG {
          0% {
            opacity:0;
          }
          84%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0f1e8;
          text-anchor:middle;
        }
        .reuse {
          fill:none;
          stroke:#77c9ef;
          stroke-width:3;
          opacity:0;
          animation:reuse 9s linear infinite;
        }
        .word {
          fill:#f3c977;
          opacity:0;
          font-size:10px;
        }
        .w1 {
          animation:w1 9s steps(1,end) infinite;
        }
        .w2 {
          animation:w2 9s steps(1,end) infinite;
        }
        .w3 {
          animation:w3 9s steps(1,end) infinite;
        }
        .cursor {
          fill:#f3c977;
          opacity:0;
          animation:cursor 9s steps(1,end) infinite;
        }
        @keyframes reuse {
          0%,36% {
            opacity:0;
          }
          42%,48% {
            opacity:1;
          }
          54%,100% {
            opacity:0;
          }
        }
        @keyframes w1 {
          0% {
            opacity:1;
          }
          34%,100% {
            opacity:0;
          }
        }
        @keyframes w2 {
          0% {
            opacity:0;
          }
          34% {
            opacity:1;
          }
          60%,100% {
            opacity:0;
          }
        }
        @keyframes w3 {
          0% {
            opacity:0;
          }
          60% {
            opacity:1;
          }
          92%,100% {
            opacity:0;
          }
        }
        @keyframes cursor {
          0% {
            transform:translate(70px,17px);
            opacity:0;
          }
          8% {
            transform:translate(70px,17px);
            opacity:1;
          }
          10% {
            transform:translate(40px,43px);
            opacity:1;
          }
          18% {
            transform:translate(40px,74px);
            opacity:1;
          }
          26% {
            transform:translate(62px,108px);
            opacity:1;
          }
          32% {
            transform:translate(62px,108px);
            opacity:0;
          }
          38% {
            transform:translate(70px,17px);
            opacity:1;
          }
          42% {
            transform:translate(40px,43px);
            opacity:1;
          }
          46% {
            transform:translate(40px,74px);
            opacity:1;
          }
          52% {
            transform:translate(18px,108px);
            opacity:1;
          }
          58% {
            transform:translate(18px,108px);
            opacity:0;
          }
          64% {
            transform:translate(70px,17px);
            opacity:1;
          }
          68% {
            transform:translate(104px,43px);
            opacity:1;
          }
          76% {
            transform:translate(104px,74px);
            opacity:1;
          }
          84% {
            transform:translate(104px,108px);
            opacity:1;
          }
          90% {
            transform:translate(104px,108px);
            opacity:0;
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Prefix Trie">
        <circle class="solid" cx="70" cy="17" r="4"/>
        <g class="part pC">
          <path class="ink" d="M70 17L40 43"/>
          <circle class="paper ink" cx="40" cy="43" r="8"/>
          <text x="40" y="47">C</text>
        </g>
        <g class="part pA">
          <path class="ink" d="M40 43L40 74"/>
          <circle class="paper ink" cx="40" cy="74" r="8"/>
          <text x="40" y="78">A</text>
        </g>
        <g class="part pT">
          <path class="ink" d="M40 74L62 108"/>
          <circle class="paper ink" cx="62" cy="108" r="8"/>
          <circle class="ink" cx="62" cy="108" r="11"/>
          <text x="62" y="112">T</text>
        </g>
        <g class="part pR">
          <path class="ink" d="M40 74L18 108"/>
          <circle class="paper ink" cx="18" cy="108" r="8"/>
          <circle class="ink" cx="18" cy="108" r="11"/>
          <text x="18" y="112">R</text>
        </g>
        <g class="part pD">
          <path class="ink" d="M70 17L104 43"/>
          <circle class="paper ink" cx="104" cy="43" r="8"/>
          <text x="104" y="47">D</text>
        </g>
        <g class="part pO">
          <path class="ink" d="M104 43L104 74"/>
          <circle class="paper ink" cx="104" cy="74" r="8"/>
          <text x="104" y="78">O</text>
        </g>
        <g class="part pG">
          <path class="ink" d="M104 74L104 108"/>
          <circle class="paper ink" cx="104" cy="108" r="8"/>
          <circle class="ink" cx="104" cy="108" r="11"/>
          <text x="104" y="112">G</text>
        </g>
        <path class="reuse" d="M70 17L40 43V74"/>
        <text class="word w1" x="20" y="21">CAT</text>
        <text class="word w2" x="20" y="21">CAR</text>
        <text class="word w3" x="20" y="21">DOG</text>
        <circle class="cursor" r="3"/>
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

if (!customElements.get("concept-prefix-trie")) {
  customElements.define("concept-prefix-trie", ConceptPrefixTrie);
}
