// Change Blindness. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptChangeBlindness extends HTMLElement {
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
        .array-a {
          opacity:0;
          animation:array-a 12s steps(1,end) infinite
        }
        @keyframes array-a {
          0.0000% {
            opacity:1
          }
          6.6667% {
            opacity:0
          }
          15.8333% {
            opacity:1
          }
          22.5000% {
            opacity:0
          }
          31.6667% {
            opacity:1
          }
          38.3333% {
            opacity:0
          }
          47.5000% {
            opacity:1
          }
          54.1667% {
            opacity:0
          }
          60.8333% {
            opacity:1
          }
          67.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        .array-b {
          opacity:1;
          animation:array-b 12s steps(1,end) infinite
        }
        @keyframes array-b {
          0.0000% {
            opacity:0
          }
          7.9167% {
            opacity:1
          }
          14.5833% {
            opacity:0
          }
          23.7500% {
            opacity:1
          }
          30.4167% {
            opacity:0
          }
          39.5833% {
            opacity:1
          }
          46.2500% {
            opacity:0
          }
          54.1667% {
            opacity:1
          }
          60.8333% {
            opacity:0
          }
          67.5000% {
            opacity:1
          }
          95.8333% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        .locator {
          animation:locator 12s steps(1,end) infinite
        }
        @keyframes locator {
          0% {
            opacity:0
          }
          77.5% {
            opacity:1
          }
          95.8333%,100% {
            opacity:0
          }
        }
        .static-note {
          display:none
        }
        @media(prefers-reduced-motion:reduce) {
          .static-note {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Change Blindness">
        <g class="array-a">
          <path class="ink" style="stroke-width:2.5" transform="translate(25 32) rotate(0)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(55 32) rotate(45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(85 32) rotate(90)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(115 32) rotate(-45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(25 68) rotate(90)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(55 68) rotate(0)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(85 68) rotate(45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(115 68) rotate(90)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(25 104) rotate(-45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(55 104) rotate(45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(85 104) rotate(0)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(115 104) rotate(90)" d="M0-6.5V6.5"/>
        </g>
        <g class="array-b">
          <path class="ink" style="stroke-width:2.5" transform="translate(25 32) rotate(0)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(55 32) rotate(45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(85 32) rotate(90)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(115 32) rotate(-45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(25 68) rotate(90)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(55 68) rotate(0)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(85 68) rotate(-45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(115 68) rotate(90)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(25 104) rotate(-45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(55 104) rotate(45)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(85 104) rotate(0)" d="M0-6.5V6.5"/>
          <path class="ink" style="stroke-width:2.5" transform="translate(115 104) rotate(90)" d="M0-6.5V6.5"/>
        </g>
        <circle class="ink locator" cx="85" cy="68" r="12"/>
        <g class="static-note" fill="#92aaa1" font-size="9" font-family="monospace">
          <text x="18" y="132">A</text>
          <text x="79" y="132">B</text>
          <path class="ink" d="M44 122 36 130M96 122 104 130"/>
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

if (!customElements.get("concept-change-blindness")) {
  customElements.define("concept-change-blindness", ConceptChangeBlindness);
}
