// Support Vector Margin. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSupportVectorMargin extends HTMLElement {
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
        .rail {
          stroke-dasharray:3 3;
        }
        .left {
          animation:left 8s ease-out infinite;
        }
        .right {
          animation:right 8s ease-out infinite;
        }
        .margin {
          fill:#70edb114;
          transform-origin:70px 70px;
          animation:band 8s ease-out infinite;
        }
        .contact {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.4;
          animation:touch 8s linear infinite;
        }
        .width {
          animation:touch 8s linear infinite;
        }
        @keyframes left {
          0%,15% {
            transform:translateX(20px);
          }
          65%,100% {
            transform:translateX(0);
          }
        }
        @keyframes right {
          0%,15% {
            transform:translateX(-20px);
          }
          65%,100% {
            transform:translateX(0);
          }
        }
        @keyframes band {
          0%,15% {
            transform:scaleX(.091);
          }
          65%,100% {
            transform:scaleX(1);
          }
        }
        @keyframes touch {
          0%,62% {
            opacity:0;
          }
          70%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Support Vector Margin">
        <path class="ink muted" d="M70 16V123"/>
        <path class="margin" d="M48 18V122H92V18Z"/>
        <path class="ink rail left" d="M48 18V122"/>
        <path class="ink rail right" d="M92 18V122"/>
        <circle class="cool" cx="48" cy="43" r="3.5"/>
        <circle class="cool" cx="48" cy="95" r="3.5"/>
        <circle class="cool" cx="25" cy="31" r="3.5"/>
        <circle class="cool" cx="29" cy="72" r="3.5"/>
        <circle class="cool" cx="33" cy="111" r="3.5"/>
        <path class="warm" d="M92 34l4 7h-8Z"/>
        <path class="warm" d="M92 86l4 7h-8Z"/>
        <path class="warm" d="M110 51l4 7h-8Z"/>
        <path class="warm" d="M108 108l4 7h-8Z"/>
        <path class="warm" d="M116 19l4 7h-8Z"/>
        <circle class="contact" cx="48" cy="43" r="7"/>
        <circle class="contact" cx="48" cy="95" r="7"/>
        <circle class="contact" cx="92" cy="38" r="7"/>
        <circle class="contact" cx="92" cy="90" r="7"/>
        <path class="ink width" d="M48 69H92m-44 -3v6m44 -6v6"/>
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

if (!customElements.get("concept-support-vector-margin")) {
  customElements.define("concept-support-vector-margin", ConceptSupportVectorMargin);
}
