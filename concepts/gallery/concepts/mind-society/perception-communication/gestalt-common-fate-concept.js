// Gestalt Common Fate. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGestaltCommonFate extends HTMLElement {
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
        .a {
          animation:a 3s ease-in-out infinite
        }
        .b {
          animation:b 3s ease-in-out infinite
        }
        @keyframes a {
          0%,50%,100% {
            transform:translateY(0)
          }
          25% {
            transform:translateY(7px)
          }
          75% {
            transform:translateY(-7px)
          }
        }
        @keyframes b {
          0%,50%,100% {
            transform:translateY(0)
          }
          25% {
            transform:translateY(-7px)
          }
          75% {
            transform:translateY(7px)
          }
        }
        .direction {
          display:none
        }
        @media(prefers-reduced-motion:reduce) {
          .direction {
            display:block
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Gestalt Common Fate">
        <circle class="solid a" cx="35" cy="35" r="3.2"/>
        <path class="ink direction" d="M44 39v-8m-2 3 2 -3 2 3"/>
        <circle class="solid b" cx="70" cy="35" r="3.2"/>
        <path class="ink direction" d="M79 31v8m-2 -3 2 3 2 -3"/>
        <circle class="solid a" cx="105" cy="35" r="3.2"/>
        <path class="ink direction" d="M114 39v-8m-2 3 2 -3 2 3"/>
        <circle class="solid b" cx="35" cy="58" r="3.2"/>
        <path class="ink direction" d="M44 54v8m-2 -3 2 3 2 -3"/>
        <circle class="solid a" cx="70" cy="58" r="3.2"/>
        <path class="ink direction" d="M79 62v-8m-2 3 2 -3 2 3"/>
        <circle class="solid b" cx="105" cy="58" r="3.2"/>
        <path class="ink direction" d="M114 54v8m-2 -3 2 3 2 -3"/>
        <circle class="solid a" cx="35" cy="81" r="3.2"/>
        <path class="ink direction" d="M44 85v-8m-2 3 2 -3 2 3"/>
        <circle class="solid b" cx="70" cy="81" r="3.2"/>
        <path class="ink direction" d="M79 77v8m-2 -3 2 3 2 -3"/>
        <circle class="solid a" cx="105" cy="81" r="3.2"/>
        <path class="ink direction" d="M114 85v-8m-2 3 2 -3 2 3"/>
        <circle class="solid b" cx="35" cy="104" r="3.2"/>
        <path class="ink direction" d="M44 100v8m-2 -3 2 3 2 -3"/>
        <circle class="solid a" cx="70" cy="104" r="3.2"/>
        <path class="ink direction" d="M79 108v-8m-2 3 2 -3 2 3"/>
        <circle class="solid b" cx="105" cy="104" r="3.2"/>
        <path class="ink direction" d="M114 100v8m-2 -3 2 3 2 -3"/>
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

if (!customElements.get("concept-gestalt-common-fate")) {
  customElements.define("concept-gestalt-common-fate", ConceptGestaltCommonFate);
}
