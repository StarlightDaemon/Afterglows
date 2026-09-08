// Confusion Matrix. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptConfusionMatrix extends HTMLElement {
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
        .i0 {
          transform:translate(31px,51px);
          animation:i0 8s ease-in-out infinite;
        }
        @keyframes i0 {
          0%,8% {
            transform:translate(0px,0px);
          }
          25%,100% {
            transform:translate(31px,51px);
          }
        }
        .i1 {
          transform:translate(58px,89px);
          animation:i1 8s ease-in-out infinite;
        }
        @keyframes i1 {
          0%,17% {
            transform:translate(0px,0px);
          }
          34%,100% {
            transform:translate(58px,89px);
          }
        }
        .i2 {
          transform:translate(37px,51px);
          animation:i2 8s ease-in-out infinite;
        }
        @keyframes i2 {
          0%,26% {
            transform:translate(0px,0px);
          }
          43%,100% {
            transform:translate(37px,51px);
          }
        }
        .i3 {
          transform:translate(-18px,51px);
          animation:i3 8s ease-in-out infinite;
        }
        @keyframes i3 {
          0%,35% {
            transform:translate(0px,0px);
          }
          52%,100% {
            transform:translate(-18px,51px);
          }
        }
        .i4 {
          transform:translate(-53px,89px);
          animation:i4 8s ease-in-out infinite;
        }
        @keyframes i4 {
          0%,44% {
            transform:translate(0px,0px);
          }
          61%,100% {
            transform:translate(-53px,89px);
          }
        }
        .i5 {
          transform:translate(-12px,89px);
          animation:i5 8s ease-in-out infinite;
        }
        @keyframes i5 {
          0%,53% {
            transform:translate(0px,0px);
          }
          70%,100% {
            transform:translate(-12px,89px);
          }
        }
        .outer {
          fill:none;
          stroke:#b5cfc4;
          stroke-width:1.2;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Confusion Matrix">
        <path class="ink muted" d="M31 51H127V127H31Z M79 51V127M31 89H127"/>
        <circle cx="56" cy="42" r="5" class="outer"/>
        <path d="M104 36L109.4 45.9H98.6Z" class="outer"/>
        <circle cx="20" cy="70" r="3.5" class="cool"/>
        <path d="M20 104L23.6 110.6H16.4Z" class="warm"/>
        <g class="item i0">
          <circle cx="18" cy="19" r="8" class="outer"/>
          <circle cx="18" cy="19" r="3.2" class="cool"/>
        </g>
        <g class="item i1">
          <path d="M39 11L46.2 24.2H31.8Z" class="outer"/>
          <path d="M39 15.8L41.88 21.08H36.12Z" class="warm"/>
        </g>
        <g class="item i2">
          <path d="M60 11L67.2 24.2H52.8Z" class="outer"/>
          <circle cx="60" cy="19" r="3.2" class="cool"/>
        </g>
        <g class="item i3">
          <circle cx="81" cy="19" r="8" class="outer"/>
          <circle cx="81" cy="19" r="3.2" class="cool"/>
        </g>
        <g class="item i4">
          <circle cx="102" cy="19" r="8" class="outer"/>
          <path d="M102 15.8L104.88 21.08H99.12Z" class="warm"/>
        </g>
        <g class="item i5">
          <path d="M123 11L130.2 24.2H115.8Z" class="outer"/>
          <path d="M123 15.8L125.88 21.08H120.12Z" class="warm"/>
        </g>
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

if (!customElements.get("concept-confusion-matrix")) {
  customElements.define("concept-confusion-matrix", ConceptConfusionMatrix);
}
