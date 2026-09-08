// Hemostatic Plug. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHemostaticPlug extends HTMLElement {
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
        .tissue {
          fill:#514333
        }
        .lumen {
          fill:#2c2730
        }
        .wall {
          fill:none;
          stroke:#b7808e;
          stroke-width:5
        }
        .blood {
          fill:#b97787;
          animation:blood 3s linear infinite
        }
        .platelet {
          fill:#bb94bc;
          stroke:#e0bad4;
          stroke-width:1;
          animation-fill-mode:both
        }
        .leak {
          opacity:0;
          fill:none;
          stroke:#dbbd7666;
          stroke-width:3;
          stroke-dasharray:4 5;
          animation:leak 12s linear infinite
        }
        .fibrin {
          fill:none;
          stroke:#e7cf86;
          stroke-width:1.5;
          stroke-dasharray:170;
          stroke-dashoffset:0;
          animation:fibrin 12s linear infinite
        }
        @keyframes blood {
          0% {
            transform:translateX(-20px)
          }
          100% {
            transform:translateX(20px)
          }
        }
        @keyframes leak {
          0%,30% {
            opacity:1;
            stroke-dashoffset:0
          }
          60%,100% {
            opacity:0;
            stroke-dashoffset:-45
          }
        }
        @keyframes fibrin {
          0%,35% {
            stroke-dashoffset:170;
            opacity:0
          }
          40% {
            opacity:.3
          }
          80%,100% {
            stroke-dashoffset:0;
            opacity:1
          }
        }
        .p0 {
          animation:p0 12s linear infinite
        }
        @keyframes p0 {
          0%,10% {
            d:path("M61 51Q61 48 64 48Q67 48 67 51Q67 54 64 54Q61 54 61 51Z");
            opacity:0;
            transform:translate(-52px,19px)
          }
          10.1% {
            opacity:1;
            transform:translate(-52px,19px)
          }
          25% {
            d:path("M61 51Q61 48 64 48Q67 48 67 51Q67 54 64 54Q61 54 61 51Z");
            transform:translate(0,0)
          }
          30%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M69 51L66.425 52.4L66.5 55.33L64 53.8L61.5 55.33L61.575 52.4L59 51L61.575 49.6L61.5 46.67L64 48.2L66.5 46.67L66.425 49.6Z")
          }
        }
        .p1 {
          animation:p1 12s linear infinite
        }
        @keyframes p1 {
          0%,15% {
            d:path("M69 50Q69 47 72 47Q75 47 75 50Q75 53 72 53Q69 53 69 50Z");
            opacity:0;
            transform:translate(-60px,20px)
          }
          15.1% {
            opacity:1;
            transform:translate(-60px,20px)
          }
          30% {
            d:path("M69 50Q69 47 72 47Q75 47 75 50Q75 53 72 53Q69 53 69 50Z");
            transform:translate(0,0)
          }
          35%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M77 50L74.425 51.4L74.5 54.33L72 52.8L69.5 54.33L69.575 51.4L67 50L69.575 48.6L69.5 45.67L72 47.2L74.5 45.67L74.425 48.6Z")
          }
        }
        .p2 {
          animation:p2 12s linear infinite
        }
        @keyframes p2 {
          0%,20% {
            d:path("M77 53Q77 50 80 50Q83 50 83 53Q83 56 80 56Q77 56 77 53Z");
            opacity:0;
            transform:translate(-68px,17px)
          }
          20.1% {
            opacity:1;
            transform:translate(-68px,17px)
          }
          35% {
            d:path("M77 53Q77 50 80 50Q83 50 83 53Q83 56 80 56Q77 56 77 53Z");
            transform:translate(0,0)
          }
          40%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M85 53L82.425 54.4L82.5 57.33L80 55.8L77.5 57.33L77.575 54.4L75 53L77.575 51.6L77.5 48.67L80 50.2L82.5 48.67L82.425 51.6Z")
          }
        }
        .p3 {
          animation:p3 12s linear infinite
        }
        @keyframes p3 {
          0%,25% {
            d:path("M56 57Q56 54 59 54Q62 54 62 57Q62 60 59 60Q56 60 56 57Z");
            opacity:0;
            transform:translate(-47px,13px)
          }
          25.1% {
            opacity:1;
            transform:translate(-47px,13px)
          }
          40% {
            d:path("M56 57Q56 54 59 54Q62 54 62 57Q62 60 59 60Q56 60 56 57Z");
            transform:translate(0,0)
          }
          45%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M64 57L61.425 58.4L61.5 61.33L59 59.8L56.5 61.33L56.575 58.4L54 57L56.575 55.6L56.5 52.67L59 54.2L61.5 52.67L61.425 55.6Z")
          }
        }
        .p4 {
          animation:p4 12s linear infinite
        }
        @keyframes p4 {
          0%,30% {
            d:path("M64 58Q64 55 67 55Q70 55 70 58Q70 61 67 61Q64 61 64 58Z");
            opacity:0;
            transform:translate(-55px,12px)
          }
          30.1% {
            opacity:1;
            transform:translate(-55px,12px)
          }
          45% {
            d:path("M64 58Q64 55 67 55Q70 55 70 58Q70 61 67 61Q64 61 64 58Z");
            transform:translate(0,0)
          }
          50%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M72 58L69.425 59.4L69.5 62.33L67 60.8L64.5 62.33L64.575 59.4L62 58L64.575 56.6L64.5 53.67L67 55.2L69.5 53.67L69.425 56.6Z")
          }
        }
        .p5 {
          animation:p5 12s linear infinite
        }
        @keyframes p5 {
          0%,35% {
            d:path("M73 59Q73 56 76 56Q79 56 79 59Q79 62 76 62Q73 62 73 59Z");
            opacity:0;
            transform:translate(-64px,11px)
          }
          35.1% {
            opacity:1;
            transform:translate(-64px,11px)
          }
          50% {
            d:path("M73 59Q73 56 76 56Q79 56 79 59Q79 62 76 62Q73 62 73 59Z");
            transform:translate(0,0)
          }
          55%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M81 59L78.425 60.4L78.5 63.33L76 61.8L73.5 63.33L73.575 60.4L71 59L73.575 57.6L73.5 54.67L76 56.2L78.5 54.67L78.425 57.6Z")
          }
        }
        .p6 {
          animation:p6 12s linear infinite
        }
        @keyframes p6 {
          0%,40% {
            d:path("M81 60Q81 57 84 57Q87 57 87 60Q87 63 84 63Q81 63 81 60Z");
            opacity:0;
            transform:translate(-72px,10px)
          }
          40.1% {
            opacity:1;
            transform:translate(-72px,10px)
          }
          55% {
            d:path("M81 60Q81 57 84 57Q87 57 87 60Q87 63 84 63Q81 63 81 60Z");
            transform:translate(0,0)
          }
          60%,100% {
            opacity:1;
            transform:translate(0,0);
            d:path("M89 60L86.425 61.4L86.5 64.33L84 62.8L81.5 64.33L81.575 61.4L79 60L81.575 58.6L81.5 55.67L84 57.2L86.5 55.67L86.425 58.6Z")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Hemostatic Plug">
        <path class="tissue" d="M10 12H130V48H80L76 42L70 47L64 42L60 48H10Z"/>
        <path class="lumen" d="M10 52H130V88H10Z"/>
        <path class="wall" d="M10 50H60M80 50H130M10 90H130"/>
        <path class="leak" d="M70 61Q75 42 68 28M73 53Q85 33 79 18"/>
        <g class="blood">
          <ellipse cx="20" cy="77" rx="6" ry="3"/>
          <ellipse cx="60" cy="77" rx="6" ry="3"/>
          <ellipse cx="100" cy="77" rx="6" ry="3"/>
        </g>
        <path class="platelet p0" d="M69 51L66.425 52.4L66.5 55.33L64 53.8L61.5 55.33L61.575 52.4L59 51L61.575 49.6L61.5 46.67L64 48.2L66.5 46.67L66.425 49.6Z"/>
        <path class="platelet p1" d="M77 50L74.425 51.4L74.5 54.33L72 52.8L69.5 54.33L69.575 51.4L67 50L69.575 48.6L69.5 45.67L72 47.2L74.5 45.67L74.425 48.6Z"/>
        <path class="platelet p2" d="M85 53L82.425 54.4L82.5 57.33L80 55.8L77.5 57.33L77.575 54.4L75 53L77.575 51.6L77.5 48.67L80 50.2L82.5 48.67L82.425 51.6Z"/>
        <path class="platelet p3" d="M64 57L61.425 58.4L61.5 61.33L59 59.8L56.5 61.33L56.575 58.4L54 57L56.575 55.6L56.5 52.67L59 54.2L61.5 52.67L61.425 55.6Z"/>
        <path class="platelet p4" d="M72 58L69.425 59.4L69.5 62.33L67 60.8L64.5 62.33L64.575 59.4L62 58L64.575 56.6L64.5 53.67L67 55.2L69.5 53.67L69.425 56.6Z"/>
        <path class="platelet p5" d="M81 59L78.425 60.4L78.5 63.33L76 61.8L73.5 63.33L73.575 60.4L71 59L73.575 57.6L73.5 54.67L76 56.2L78.5 54.67L78.425 57.6Z"/>
        <path class="platelet p6" d="M89 60L86.425 61.4L86.5 64.33L84 62.8L81.5 64.33L81.575 61.4L79 60L81.575 58.6L81.5 55.67L84 57.2L86.5 55.67L86.425 58.6Z"/>
        <path class="fibrin" d="M58 52L80 62L66 46L85 56L60 60L75 45L81 64M60 47L73 63L86 52"/>
        <path class="ink muted" d="M24 108H116M110 104L116 108L110 112"/>
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

if (!customElements.get("concept-hemostatic-plug")) {
  customElements.define("concept-hemostatic-plug", ConceptHemostaticPlug);
}
