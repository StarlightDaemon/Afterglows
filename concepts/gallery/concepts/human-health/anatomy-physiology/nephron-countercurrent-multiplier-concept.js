// Nephron Countercurrent Multiplier. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptNephronCountercurrentMultiplier extends HTMLElement {
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
        .wall {
          fill:none;
          stroke:#7fa7b3;
          stroke-width:17
        }
        .lumen {
          fill:none;
          stroke:#15333e;
          stroke-width:12
        }
        .thick {
          fill:none;
          stroke:#b79270;
          stroke-width:3
        }
        .flow {
          stroke:#99c9c2;
          opacity:.6
        }
        .water {
          fill:#7ec8e9;
          opacity:0
        }
        .salt {
          fill:#edc67d;
          opacity:0
        }
        .density {
          animation:density 12s infinite
        }
        @keyframes density {
          0%,10% {
            stop-opacity:.12
          }
          45% {
            stop-opacity:.35
          }
          80%,100% {
            stop-opacity:.65
          }
        }
        .w0 {
          animation:w0 12s linear infinite
        }
        @keyframes w0 {
          0%,9.9% {
            opacity:0;
            transform:translateX(0)
          }
          10% {
            opacity:1;
            transform:translateX(0)
          }
          28% {
            opacity:1;
            transform:translateX(-22px)
          }
          29%,100% {
            opacity:0
          }
        }
        .w1 {
          animation:w1 12s linear infinite
        }
        @keyframes w1 {
          0%,24.9% {
            opacity:0;
            transform:translateX(0)
          }
          25% {
            opacity:1;
            transform:translateX(0)
          }
          43% {
            opacity:1;
            transform:translateX(-22px)
          }
          44%,100% {
            opacity:0
          }
        }
        .w2 {
          animation:w2 12s linear infinite
        }
        @keyframes w2 {
          0%,49.9% {
            opacity:0;
            transform:translateX(0)
          }
          50% {
            opacity:1;
            transform:translateX(0)
          }
          68% {
            opacity:1;
            transform:translateX(-22px)
          }
          69%,100% {
            opacity:0
          }
        }
        .w3 {
          animation:w3 12s linear infinite
        }
        @keyframes w3 {
          0%,64.9% {
            opacity:0;
            transform:translateX(0)
          }
          65% {
            opacity:1;
            transform:translateX(0)
          }
          83% {
            opacity:1;
            transform:translateX(-22px)
          }
          84%,100% {
            opacity:0
          }
        }
        .s0 {
          animation:s0 12s linear infinite
        }
        @keyframes s0 {
          0%,17.9% {
            opacity:0;
            transform:translateX(0)
          }
          18% {
            opacity:1;
            transform:translateX(0)
          }
          33% {
            opacity:1;
            transform:translateX(24px)
          }
          34%,100% {
            opacity:0
          }
        }
        .s1 {
          animation:s1 12s linear infinite
        }
        @keyframes s1 {
          0%,29.9% {
            opacity:0;
            transform:translateX(0)
          }
          30% {
            opacity:1;
            transform:translateX(0)
          }
          45% {
            opacity:1;
            transform:translateX(24px)
          }
          46%,100% {
            opacity:0
          }
        }
        .s2 {
          animation:s2 12s linear infinite
        }
        @keyframes s2 {
          0%,57.9% {
            opacity:0;
            transform:translateX(0)
          }
          58% {
            opacity:1;
            transform:translateX(0)
          }
          73% {
            opacity:1;
            transform:translateX(24px)
          }
          74%,100% {
            opacity:0
          }
        }
        .s3 {
          animation:s3 12s linear infinite
        }
        @keyframes s3 {
          0%,69.9% {
            opacity:0;
            transform:translateX(0)
          }
          70% {
            opacity:1;
            transform:translateX(0)
          }
          85% {
            opacity:1;
            transform:translateX(24px)
          }
          86%,100% {
            opacity:0
          }
        }
        .water-guide {
          fill:none;
          stroke:#7ec8e9;
          stroke-width:1.5
        }
        .salt-guide {
          fill:none;
          stroke:#edc67d;
          stroke-width:1.5
        }
        .filtrate {
          fill:none;
          stroke:#a0d4c3;
          stroke-width:2.3;
          stroke-dasharray:2 8;
          opacity:.65;
          animation:filtrate 12s linear infinite
        }
        @keyframes filtrate {
          from {
            stroke-dashoffset:0
          }
          to {
            stroke-dashoffset:-100
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Nephron Countercurrent Multiplier">
        <defs>
          <linearGradient id="medulla" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#875879" stop-opacity=".02"/>
            <stop class="density" offset="1" stop-color="#875879" stop-opacity=".65"/>
          </linearGradient>
        </defs>
        <rect x="16" y="19" width="110" height="107" rx="7" fill="url(#medulla)"/>
        <path class="wall" d="M39 20V99C39 127 95 127 95 99V20"/>
        <path class="lumen" d="M39 20V99C39 127 95 127 95 99V20"/>
        <path class="filtrate" pathLength="100" d="M39 24V98C39 126 95 126 95 98V24"/>
        <path class="thick" d="M86 21V76M104 21V76"/>
        <path class="ink flow" d="M39 32V55M35 50L39 55L43 50M95 106V83M91 88L95 83L99 88"/>
        <text x="70" y="13">dilute</text>
        <text x="70" y="139">medullary gradient</text>
        <path class="water w0" d="M39 52C34 56 36 59 39 59C42 59 44 56 39 52Z"/>
        <path class="water w1" d="M39 82C34 86 36 89 39 89C42 89 44 86 39 82Z"/>
        <path class="water w2" d="M39 52C34 56 36 59 39 59C42 59 44 56 39 52Z"/>
        <path class="water w3" d="M39 82C34 86 36 89 39 89C42 89 44 86 39 82Z"/>
        <rect class="salt s0" x="93" y="33" width="4" height="4"/>
        <rect class="salt s1" x="93" y="62" width="4" height="4"/>
        <rect class="salt s2" x="93" y="33" width="4" height="4"/>
        <rect class="salt s3" x="93" y="62" width="4" height="4"/>
        <path class="water-guide" d="M28 55H17M21 51L17 55L21 59"/>
        <path class="salt-guide" d="M108 64H120M116 60L120 64L116 68"/>
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

if (!customElements.get("concept-nephron-countercurrent-multiplier")) {
  customElements.define("concept-nephron-countercurrent-multiplier", ConceptNephronCountercurrentMultiplier);
}
