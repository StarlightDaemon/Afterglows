// Motion Parallax. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMotionParallax extends HTMLElement {
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
        .eye {
          transform:translateX(12px);
          animation:eye 8s ease-in-out infinite
        }
        @keyframes eye {
          0%,50%,100% {
            transform:translateX(0)
          }
          25% {
            transform:translateX(12px)
          }
          75% {
            transform:translateX(-12px)
          }
        }
        .depth0 {
          transform:translateX(-12px);
          animation:depth0 8s ease-in-out infinite
        }
        @keyframes depth0 {
          0%,50%,100% {
            transform:translateX(0)
          }
          25% {
            transform:translateX(-12px)
          }
          75% {
            transform:translateX(12px)
          }
        }
        .depth1 {
          transform:translateX(-6px);
          animation:depth1 8s ease-in-out infinite
        }
        @keyframes depth1 {
          0%,50%,100% {
            transform:translateX(0)
          }
          25% {
            transform:translateX(-6px)
          }
          75% {
            transform:translateX(6px)
          }
        }
        .depth2 {
          transform:translateX(-3px);
          animation:depth2 8s ease-in-out infinite
        }
        @keyframes depth2 {
          0%,50%,100% {
            transform:translateX(0)
          }
          25% {
            transform:translateX(-3px)
          }
          75% {
            transform:translateX(3px)
          }
        }
        .static-cue {
          display:none
        }
        @media(prefers-reduced-motion:reduce) {
          .static-cue {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Motion Parallax">
        <path class="ink muted" d="M38 20H102M20 45H122M20 72H122M20 99H122"/>
        <g class="eye">
          <path class="ink" d="M63 20Q70 12 77 20Q70 28 63 20Z"/>
          <circle class="solid" cx="70" cy="20" r="2"/>
        </g>
        <g fill="#92aaa1" font-size="9" font-family="monospace">
          <text x="8" y="48">1</text>
          <text x="8" y="75">2</text>
          <text x="8" y="102">4</text>
        </g>
        <g class="depth0">
          <circle class="solid" cx="35" cy="45" r="3"/>
          <circle class="solid" cx="70" cy="45" r="3"/>
          <circle class="solid" cx="105" cy="45" r="3"/>
        </g>
        <g class="depth1">
          <circle class="solid" cx="35" cy="72" r="3"/>
          <circle class="solid" cx="70" cy="72" r="3"/>
          <circle class="solid" cx="105" cy="72" r="3"/>
        </g>
        <g class="depth2">
          <circle class="solid" cx="35" cy="99" r="3"/>
          <circle class="solid" cx="70" cy="99" r="3"/>
          <circle class="solid" cx="105" cy="99" r="3"/>
        </g>
        <g class="ink static-cue">
          <path d="M70 9H82m-3-2 3 2-3 2M70 54H58m3-2-3 2 3 2M70 81H64m3-2-3 2 3 2M70 108H67m3-2-3 2 3 2"/>
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

if (!customElements.get("concept-motion-parallax")) {
  customElements.define("concept-motion-parallax", ConceptMotionParallax);
}
