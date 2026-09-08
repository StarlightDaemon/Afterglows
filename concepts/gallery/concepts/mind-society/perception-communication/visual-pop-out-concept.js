// Visual Pop-Out. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVisualPopOut extends HTMLElement {
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
        .array {
          animation:array 9s steps(1,end) infinite
        }
        @keyframes array {
          0% {
            opacity:1
          }
          40% {
            opacity:0
          }
          48% {
            opacity:1
          }
          90%,100% {
            opacity:0
          }
        }
        .target6 {
          transform:rotate(35deg);
          animation:t6 9s steps(1,end) infinite
        }
        .target13 {
          animation:t13 9s steps(1,end) infinite
        }
        @keyframes t6 {
          0% {
            transform:rotate(35deg)
          }
          44%,100% {
            transform:rotate(0)
          }
        }
        @keyframes t13 {
          0% {
            transform:rotate(0)
          }
          44%,100% {
            transform:rotate(35deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Visual Pop-Out">
        <g class="array">
          <g transform="translate(25 25)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(55 25)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(85 25)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(115 25)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(25 55)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(55 55)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(85 55)">
            <path class="ink target6" style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(115 55)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(25 85)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(55 85)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(85 85)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(115 85)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(25 115)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(55 115)">
            <path class="ink target13" style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(85 115)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
          <g transform="translate(115 115)">
            <path class="ink " style="stroke-width:2.5" d="M0-6V6"/>
          </g>
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

if (!customElements.get("concept-visual-pop-out")) {
  customElements.define("concept-visual-pop-out", ConceptVisualPopOut);
}
