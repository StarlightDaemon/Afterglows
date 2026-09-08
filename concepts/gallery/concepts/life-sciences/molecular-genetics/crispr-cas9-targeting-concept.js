// CRISPR-Cas9 Targeting. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCrisprCas9Targeting extends HTMLElement {
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
        .dna {
          fill:none;
          stroke:#8bb5c4;
          stroke-width:2.5
        }
        .upper1 {
          animation:upper1 12s linear infinite
        }
        .upper2 {
          animation:upper2 12s linear infinite
        }
        .pam {
          stroke:#d9a7ba;
          stroke-width:5
        }
        .complex {
          animation:engage 12s infinite
        }
        .protein {
          fill:#526e6088;
          stroke:#9db497;
          stroke-width:1.5
        }
        .guide-loop {
          fill:none;
          stroke:#e7c07c;
          stroke-width:2.5
        }
        .paired-guide {
          fill:none;
          stroke:#e7c07c;
          stroke-width:2.5;
          animation:pair 12s linear infinite
        }
        .hybrid {
          fill:none;
          stroke:#b5c598;
          stroke-width:1.2;
          animation:hybrid 12s infinite
        }
        .cuts {
          fill:none;
          stroke:#07120f;
          stroke-width:4;
          animation:cuts 12s steps(1) infinite
        }
        .left-fragment {
          animation:left 12s infinite
        }
        .right-fragment {
          animation:right 12s infinite
        }
        text {
          fill:#c1afba;
          font:8px serif;
          text-anchor:middle
        }
        @keyframes engage {
          0%,10% {
            transform:translateY(-25px);
            opacity:0
          }
          30%,80% {
            transform:translateY(0);
            opacity:1
          }
          90%,100% {
            transform:translateY(-23px);
            opacity:0
          }
        }
        @keyframes pair {
          0%,30% {
            stroke-dasharray:100;
            stroke-dashoffset:100;
            opacity:1
          }
          55%,80% {
            stroke-dasharray:100;
            stroke-dashoffset:0;
            opacity:1
          }
          90%,100% {
            stroke-dashoffset:0;
            opacity:0
          }
        }
        @keyframes hybrid {
          0%,48% {
            opacity:0
          }
          55%,80% {
            opacity:1
          }
          90%,100% {
            opacity:0
          }
        }
        @keyframes cuts {
          0% {
            opacity:0
          }
          60% {
            opacity:1
          }
          90%,100% {
            opacity:0
          }
        }
        @keyframes left {
          0%,90% {
            transform:translateX(0)
          }
          98%,100% {
            transform:translateX(-3px)
          }
        }
        @keyframes right {
          0%,90% {
            transform:translateX(0)
          }
          98%,100% {
            transform:translateX(3px)
          }
        }
        @keyframes upper1 {
          0% {
            d:path("M15 70H43Q66 70 89 70")
          }
          5% {
            d:path("M15 70H43Q66 70 89 70")
          }
          10% {
            d:path("M15 70H43Q66 70 89 70")
          }
          15% {
            d:path("M15 70H43Q66 70 89 70")
          }
          20% {
            d:path("M15 70H43Q66 70 89 70")
          }
          25% {
            d:path("M15 70H43Q66 70 89 70")
          }
          30% {
            d:path("M15 70H43Q66 70 89 70")
          }
          35% {
            d:path("M15 70H43Q66 64.8888 89 68.4856")
          }
          40% {
            d:path("M15 70H43Q66 59.7776 89 66.9712")
          }
          45% {
            d:path("M15 70H43Q66 54.666 89 65.4568")
          }
          50% {
            d:path("M15 70H43Q66 49.5552 89 63.9424")
          }
          55% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          60% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          65% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          70% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          75% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          80% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          85% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          90% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          95% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
          100% {
            d:path("M15 70H43Q66 44.444 89 62.428")
          }
        }
        @keyframes upper2 {
          0% {
            d:path("M89 70Q93 70 97 70H125")
          }
          5% {
            d:path("M89 70Q93 70 97 70H125")
          }
          10% {
            d:path("M89 70Q93 70 97 70H125")
          }
          15% {
            d:path("M89 70Q93 70 97 70H125")
          }
          20% {
            d:path("M89 70Q93 70 97 70H125")
          }
          25% {
            d:path("M89 70Q93 70 97 70H125")
          }
          30% {
            d:path("M89 70Q93 70 97 70H125")
          }
          35% {
            d:path("M89 68.4856Q93 69.1112 97 70H125")
          }
          40% {
            d:path("M89 66.9712Q93 68.2224 97 70H125")
          }
          45% {
            d:path("M89 65.4568Q93 67.3336 97 70H125")
          }
          50% {
            d:path("M89 63.9424Q93 66.4448 97 70H125")
          }
          55% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          60% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          65% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          70% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          75% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          80% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          85% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          90% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          95% {
            d:path("M89 62.428Q93 65.556 97 70H125")
          }
          100% {
            d:path("M89 62.428Q93 65.556 97 70H125")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="CRISPR-Cas9 Targeting">
        <g class="complex">
          <path class="protein" d="M42 61C42 31 98 28 112 54Q120 76 101 86H57Q35 85 42 61Z"/>
        </g>
        <g class="left-fragment">
          <path class="dna upper1" d="M15 70H43Q66 44.444 89 62.428"/>
          <path class="dna" d="M15 80H89"/>
        </g>
        <g class="right-fragment">
          <path class="dna upper2" d="M89 62.428Q93 65.556 97 70H125"/>
          <path class="dna" d="M89 80H125"/>
          <path class="pam" d="M102 69H113"/>
        </g>
        <g class="complex">
          <path class="guide-loop" d="M51 59Q39 45 49 40Q58 38 57 49Q70 36 76 46Q81 58 67 62L43 76H97"/>
        </g>
        <path class="paired-guide" pathLength="100" d="M97 76H43"/>
        <path class="hybrid" d="M49 76V80M57 76V80M65 76V80M73 76V80M81 76V80M89 76V80"/>
        <g class="cuts">
          <path d="M87 61L91 64M87 80H91"/>
        </g>
        <text x="108" y="104">PAM</text>
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

if (!customElements.get("concept-crispr-cas9-targeting")) {
  customElements.define("concept-crispr-cas9-targeting", ConceptCrisprCas9Targeting);
}
