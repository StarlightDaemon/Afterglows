// Mental Rotation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMentalRotation extends HTMLElement {
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
        .same {
          animation:same 12s steps(1,end) infinite
        }
        .foil {
          opacity:0;
          animation:foil 12s steps(1,end) infinite
        }
        @keyframes same {
          0% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes foil {
          0% {
            opacity:0
          }
          65%,98% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .rotate-same {
          animation:rs 12s linear infinite
        }
        .rotate-foil {
          animation:rf 12s linear infinite
        }
        @keyframes rs {
          0%,20% {
            transform:rotate(120deg)
          }
          45%,100% {
            transform:rotate(0)
          }
        }
        @keyframes rf {
          0%,65% {
            transform:rotate(120deg)
          }
          90%,100% {
            transform:rotate(0)
          }
        }
        .correct {
          animation:correct 12s steps(1,end) infinite
        }
        .wrong {
          opacity:0;
          animation:wrong 12s steps(1,end) infinite
        }
        @keyframes correct {
          0% {
            opacity:0
          }
          45% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes wrong {
          0% {
            opacity:0
          }
          90%,98% {
            opacity:1
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Mental Rotation">
        <g class="solid" transform="translate(35 62)">
          <rect x="-5" y="-13" width="10" height="10"/>
          <rect x="5" y="-13" width="10" height="10"/>
          <rect x="-15" y="-3.0" width="10" height="10"/>
          <rect x="-5" y="-3.0" width="10" height="10"/>
          <rect x="-5" y="7" width="10" height="10"/>
        </g>
        <g transform="translate(103 62)">
          <g class="solid same">
            <g class="rotate-same">
              <rect x="-5" y="-13" width="10" height="10"/>
              <rect x="5" y="-13" width="10" height="10"/>
              <rect x="-15" y="-3.0" width="10" height="10"/>
              <rect x="-5" y="-3.0" width="10" height="10"/>
              <rect x="-5" y="7" width="10" height="10"/>
            </g>
          </g>
          <g class="solid foil">
            <g class="rotate-foil">
              <rect x="-5" y="-13" width="10" height="10"/>
              <rect x="-15" y="-13" width="10" height="10"/>
              <rect x="5" y="-3.0" width="10" height="10"/>
              <rect x="-5" y="-3.0" width="10" height="10"/>
              <rect x="-5" y="7" width="10" height="10"/>
            </g>
          </g>
        </g>
        <path class="ink correct" d="M88 103 94 109 107 95"/>
        <path class="ink wrong" d="M91 97 105 111M105 97 91 111"/>
        <path class="ink muted" d="M65 62H72m-3-3 3 3-3 3"/>
        <text class="static-note" x="70" y="128" text-anchor="middle" font-size="10" font-family="monospace" fill="#92aaa1">120° → 0°</text>
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

if (!customElements.get("concept-mental-rotation")) {
  customElements.define("concept-mental-rotation", ConceptMentalRotation);
}
