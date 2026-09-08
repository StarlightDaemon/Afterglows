// Photolithographic Pattern Transfer. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPhotolithographicPatternTransfer extends HTMLElement {
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
        .film {
          fill:#77c9ef
        }
        .resist {
          fill:#c29453
        }
        .mask {
          opacity:0;
          animation:mask 18s linear infinite
        }
        .rays {
          fill:none;
          stroke:#ab9cec;
          stroke-width:1.5;
          stroke-dasharray:4 3;
          opacity:0;
          animation:rays 18s linear infinite,flow 1s linear infinite
        }
        .exposed {
          animation:exposed 18s linear infinite,color 18s linear infinite
        }
        .unexposed {
          animation:unexposed 18s linear infinite
        }
        .exposed-film {
          animation:film 18s linear infinite
        }
        .developer {
          opacity:0;
          animation:developer 18s linear infinite
        }
        .etch-front {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.4;
          opacity:0;
          animation:etch 18s linear infinite
        }
        @keyframes mask {
          0%,25% {
            opacity:1;
            transform:translateY(0)
          }
          32%,100% {
            opacity:0;
            transform:translateY(-12px)
          }
        }
        @keyframes rays {
          0%,9% {
            opacity:0
          }
          10%,24% {
            opacity:.9
          }
          25%,100% {
            opacity:0
          }
        }
        @keyframes flow {
          to {
            stroke-dashoffset:-14
          }
        }
        @keyframes exposed {
          0%,32% {
            d:path('M43,79H57V91H43ZM83,79H97V91H83Z')
          }
          46%,100% {
            d:path('M43,91H57V91H43ZM83,91H97V91H83Z')
          }
        }
        @keyframes color {
          0%,10% {
            fill:#c29453
          }
          25%,100% {
            fill:#ed8eab
          }
        }
        @keyframes unexposed {
          0%,68% {
            d:path('M18,79H43V91H18ZM57,79H83V91H57ZM97,79H122V91H97Z')
          }
          80%,100% {
            d:path('M18,91H43V91H18ZM57,91H83V91H57ZM97,91H122V91H97Z')
          }
        }
        @keyframes film {
          0%,46% {
            d:path('M43,91H57V101H43ZM83,91H97V101H83Z')
          }
          66%,100% {
            d:path('M43,101H57V101H43ZM83,101H97V101H83Z')
          }
        }
        @keyframes developer {
          0%,31%,47%,100% {
            opacity:0
          }
          33%,43% {
            opacity:1
          }
        }
        @keyframes etch {
          0%,46% {
            opacity:0;
            d:path('M43,91H57M83,91H97')
          }
          48% {
            opacity:1;
            d:path('M43,92H57M83,92H97')
          }
          65% {
            opacity:1;
            d:path('M43,100.5H57M83,100.5H97')
          }
          66%,100% {
            opacity:0;
            d:path('M43,101H57M83,101H97')
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Photolithographic Pattern Transfer">
        <path class="rays" d="M47,20V79M53,20V79M87,20V79M93,20V79"/>
        <g class="mask">
          <rect x="18" y="50" width="104" height="5" fill="#abc7c9" fill-opacity=".25"/>
          <path fill="#6a7c75" d="M18,50H43V55H18ZM57,50H83V55H57ZM97,50H122V55H97Z"/>
          <path class="ink muted" d="M18,50H122M18,55H122"/>
        </g>
        <rect x="18" y="101" width="104" height="17" fill="#355848"/>
        <path class="film" d="M18,91H43V101H18ZM57,91H83V101H57ZM97,91H122V101H97Z"/>
        <path class="film exposed-film" d="M43,101H57V101H43ZM83,101H97V101H83Z"/>
        <path class="resist unexposed" d="M18,91H43V91H18ZM57,91H83V91H57ZM97,91H122V91H97Z"/>
        <path class="resist exposed" d="M43,91H57V91H43ZM83,91H97V91H83Z"/>
        <path class="developer ink" d="M50,65V76M47,72L50,76L53,72M90,65V76M87,72L90,76L93,72"/>
        <path class="etch-front" d="M43,101H57M83,101H97"/>
        <path class="ink muted" d="M13,119H127"/>
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

if (!customElements.get("concept-photolithographic-pattern-transfer")) {
  customElements.define("concept-photolithographic-pattern-transfer", ConceptPhotolithographicPatternTransfer);
}
