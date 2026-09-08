// Backlash Deadband. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBacklashDeadband extends HTMLElement {
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
        .slot {
          fill:#152e25;
          stroke:#70edb1;
          stroke-width:1.5
        }
        .peg-stem {
          stroke:#f3c977;
          stroke-width:3
        }
        .input-arrow {
          stroke:#f3c977;
          transform-origin:70px 31px
        }
        .output-arrow {
          transform-origin:70px 115px;
          opacity:0
        }
        .input {
          animation:backlash-input 8s linear infinite
        }
        .carriage {
          animation:backlash-output 8s linear infinite
        }
        .input-arrow {
          animation:backlash-direction 8s steps(1,end) infinite
        }
        .output-arrow {
          animation:backlash-engagement 8s steps(1,end) infinite
        }
        @keyframes backlash-input {
          0%,100% {
            transform:translateX(-24px)
          }
          50% {
            transform:translateX(24px)
          }
        }
        @keyframes backlash-output {
          0%,12.5%,100% {
            transform:translateX(-18px)
          }
          50%,62.5% {
            transform:translateX(18px)
          }
        }
        @keyframes backlash-direction {
          0% {
            transform:scaleX(1)
          }
          50% {
            transform:scaleX(-1)
          }
        }
        @keyframes backlash-engagement {
          0% {
            opacity:0;
            transform:scaleX(1)
          }
          12.5% {
            opacity:1
          }
          50% {
            opacity:0;
            transform:scaleX(-1)
          }
          62.5% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Backlash Deadband">
        <path class="ink muted" d="M19 48H121M19 94H121"/>
        <g class="carriage" transform="translate(-18 0)">
          <rect class="paper ink" x="51" y="75" width="38" height="24" rx="3"/>
          <rect class="slot" x="61" y="78" width="18" height="15" rx="1"/>
          <path class="ink" d="M70 100V106"/>
          <path class="output-arrow ink" d="M63 115H77L73 111M77 115L73 119"/>
        </g>
        <g class="input" transform="translate(-18 0)">
          <rect class="warm" x="63" y="43" width="14" height="10" rx="2"/>
          <path class="peg-stem" d="M70 53V78"/>
          <rect class="warm" x="67" y="78" width="6" height="15"/>
          <path class="input-arrow ink" d="M61 31H79L75 27M79 31L75 35"/>
        </g>
        <path class="ink muted" d="M42 102V105M98 102V105"/>
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

if (!customElements.get("concept-backlash-deadband")) {
  customElements.define("concept-backlash-deadband", ConceptBacklashDeadband);
}
