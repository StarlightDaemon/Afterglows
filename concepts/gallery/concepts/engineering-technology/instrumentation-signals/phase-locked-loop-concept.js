// Phase-Locked Loop. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPhaseLockedLoop extends HTMLElement {
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
        .reference {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.4
        }
        .oscillator {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .phase-error {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.1
        }
        .correction {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          opacity:0;
          animation:pll-correction 12s steps(1,end) infinite
        }
        .pll-window {
          animation:pll-reveal 12s linear infinite
        }
        .pll-cursor {
          stroke:#96ac9e;
          stroke-width:.7;
          stroke-dasharray:2 3;
          opacity:0;
          animation:pll-cursor 12s linear infinite
        }
        .pll-cycle {
          animation:pll-cycle 12s linear infinite
        }
        @keyframes pll-correction {
          0% {
            opacity:0
          }
          8.333% {
            opacity:1
          }
          13.583% {
            opacity:0
          }
          20.833% {
            opacity:1
          }
          23.721% {
            opacity:0
          }
          33.333% {
            opacity:1
          }
          34.921% {
            opacity:0
          }
          45.833% {
            opacity:1
          }
          46.707% {
            opacity:0
          }
          58.333% {
            opacity:1
          }
          58.814% {
            opacity:0
          }
          70.833% {
            opacity:1
          }
          71.098% {
            opacity:0
          }
        }
        @keyframes pll-reveal {
          0%,8.3333% {
            width:0
          }
          83.3333%,100% {
            width:104px
          }
        }
        @keyframes pll-cursor {
          0%,8.3333% {
            opacity:0;
            transform:translateX(0)
          }
          8.4% {
            opacity:1
          }
          83.3333% {
            opacity:1;
            transform:translateX(104px)
          }
          84%,100% {
            opacity:0;
            transform:translateX(104px)
          }
        }
        @keyframes pll-cycle {
          0%,95%,100% {
            opacity:0
          }
          5%,90% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Phase-Locked Loop">
        <defs>
          <clipPath id="timing-window">
            <rect class="pll-window" x="18" y="58" width="104" height="66"/>
          </clipPath>
        </defs>
        <g class="pll-cycle">
          <path class="ink muted" d="M12 23H24M52 27H63M79 27H92M119 27H124V48H36V37M18 71H122M18 94H122M18 118H122"/>
          <rect class="paper ink" x="24" y="17" width="28" height="20" rx="2"/>
          <path class="ink" d="M29 30V23H33V30M42 30V23H46"/>
          <rect class="paper ink muted" x="63" y="21" width="16" height="12" rx="2"/>
          <path class="ink" d="M66 29L69 26L73 26L76 25"/>
          <rect class="paper ink" x="92" y="17" width="27" height="20" rx="2"/>
          <path class="ink" d="M96 27Q100 18 105 27T115 27"/>
          <path class="correction" d="M53 27H61M57 24L61 27L57 30"/>
          <g clip-path="url(#timing-window)">
            <path class="reference" d="M18 71L18 71V62H24.067V71L35.333 71V62H41.4V71L52.667 71V62H58.733V71L70 71V62H76.067V71L87.333 71V62H93.4V71L104.667 71V62H110.733V71H122"/>
            <path class="oscillator" d="M18 94L25.28 94V85H31.347V94L39.337 94V85H45.404V94L54.869 94V85H60.936V94L71.211 94V85H77.278V94L87.999 94V85H94.066V94L105.033 94V85H111.1V94H122"/>
            <path class="phase-error" d="M18 118L18 118V108H25.28V118L35.333 118V108H39.337V118L52.667 118V108H54.869V118L70 118V108H71.211V118L87.333 118V108H87.999V118L104.667 118V108H105.033V118H122"/>
          </g>
          <path class="pll-cursor" d="M18 57V124"/>
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

if (!customElements.get("concept-phase-locked-loop")) {
  customElements.define("concept-phase-locked-loop", ConceptPhaseLockedLoop);
}
