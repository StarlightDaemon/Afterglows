// Recursive DNS Resolution. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRecursiveDnsResolution extends HTMLElement {
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
        .request {
          opacity:0
        }
        .q1 {
          animation:q1 12s linear infinite
        }
        .q2 {
          animation:q2 12s linear infinite
        }
        .q3 {
          animation:q3 12s linear infinite
        }
        .hit {
          animation:hit 12s linear infinite
        }
        .answer {
          animation:answer 12s linear infinite
        }
        .cached,.result {
          animation:cached 12s infinite
        }
        .lookup {
          font-size:8px
        }
        @keyframes q1 {
          0%,7% {
            opacity:0;
            transform:translate(0,0)
          }
          8% {
            opacity:1;
            transform:translate(0,0);
            fill:#f3c977
          }
          17% {
            opacity:1;
            transform:translate(-42px,-43px);
            fill:#f3c977
          }
          18% {
            fill:#77c9ef
          }
          26% {
            opacity:1;
            transform:translate(0,0);
            fill:#77c9ef
          }
          26.1%,100% {
            opacity:0
          }
        }
        @keyframes q2 {
          0%,28% {
            opacity:0;
            transform:translate(0,0)
          }
          29% {
            opacity:1;
            transform:translate(0,0);
            fill:#f3c977
          }
          38% {
            opacity:1;
            transform:translate(3px,-43px);
            fill:#f3c977
          }
          39% {
            fill:#77c9ef
          }
          47% {
            opacity:1;
            transform:translate(0,0);
            fill:#77c9ef
          }
          47.1%,100% {
            opacity:0
          }
        }
        @keyframes q3 {
          0%,49% {
            opacity:0;
            transform:translate(0,0)
          }
          50% {
            opacity:1;
            transform:translate(0,0);
            fill:#f3c977
          }
          59% {
            opacity:1;
            transform:translate(48px,-43px);
            fill:#f3c977
          }
          60% {
            fill:#77c9ef
          }
          68% {
            opacity:1;
            transform:translate(0,0);
            fill:#77c9ef
          }
          68.1%,100% {
            opacity:0
          }
        }
        @keyframes cached {
          0%,68% {
            opacity:0
          }
          69%,100% {
            opacity:1
          }
        }
        @keyframes hit {
          0%,83% {
            opacity:0;
            transform:translate(0,0)
          }
          84% {
            opacity:1;
            transform:translate(0,0)
          }
          88% {
            opacity:1;
            transform:translate(-24px,-17px)
          }
          88.1%,100% {
            opacity:0
          }
        }
        @keyframes answer {
          0%,70% {
            opacity:0;
            transform:translate(0,0)
          }
          71% {
            opacity:1;
            transform:translate(0,0)
          }
          77% {
            opacity:1;
            transform:translate(-33px,16px)
          }
          77.1%,88% {
            opacity:0;
            transform:translate(0,0)
          }
          89% {
            opacity:1;
            transform:translate(0,0)
          }
          95% {
            opacity:1;
            transform:translate(-33px,16px)
          }
          95.1%,100% {
            opacity:0
          }
        }
        .client-query {
          opacity:0;
          animation:client-query 12s linear infinite;
        }
        @keyframes client-query {
          0% {
            opacity:1;
            transform:translate(0,0)
          }
          7% {
            opacity:1;
            transform:translate(33px,-16px)
          }
          7.1%,78% {
            opacity:0;
            transform:translate(0,0)
          }
          79% {
            opacity:1;
            transform:translate(0,0)
          }
          83% {
            opacity:1;
            transform:translate(33px,-16px)
          }
          83.1%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Recursive DNS Resolution">
        <path class="ink muted" d="M25 33L67 76L70 33M67 76L115 33M27 103L60 87M74 86L98 103"/>
        <g class="ink paper">
          <rect x="11" y="14" width="28" height="21" rx="3"/>
          <rect x="55" y="14" width="30" height="21" rx="3"/>
          <rect x="99" y="14" width="32" height="21" rx="3"/>
          <rect x="53" y="71" width="28" height="25" rx="4"/>
          <rect x="8" y="94" width="29" height="21" rx="3"/>
          <path d="M92 100Q108 94 125 100V115Q108 122 92 115ZM92 100Q108 108 125 100"/>
        </g>
        <text x="25" y="28">root</text>
        <text x="70" y="28">.com</text>
        <text x="115" y="28">auth</text>
        <text x="67" y="87">R</text>
        <text x="22" y="108">C</text>
        <text x="109" y="114" class="cached">✓</text>
        <circle class="warm client-query" cx="27" cy="103" r="3"/>
        <circle class="warm request q1" cx="67" cy="76" r="3"/>
        <circle class="warm request q2" cx="67" cy="76" r="3"/>
        <circle class="warm request q3" cx="67" cy="76" r="3"/>
        <circle class="cool request hit" cx="98" cy="103" r="3"/>
        <circle class="cool request answer" cx="60" cy="87" r="3"/>
        <text x="70" y="58" class="lookup">www.example.com</text>
        <text x="70" y="135" class="result">192.0.2.80</text>
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

if (!customElements.get("concept-recursive-dns-resolution")) {
  customElements.define("concept-recursive-dns-resolution", ConceptRecursiveDnsResolution);
}
