// Gradient Descent. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGradientDescent extends HTMLElement {
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
        .s0 {
          animation:step0 8s linear infinite
        }
        @keyframes step0 {
          0%,0% {
            opacity:.12
          }
          5%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s1 {
          animation:step1 8s linear infinite
        }
        @keyframes step1 {
          0%,6% {
            opacity:.12
          }
          11%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s2 {
          animation:step2 8s linear infinite
        }
        @keyframes step2 {
          0%,12% {
            opacity:.12
          }
          17%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s3 {
          animation:step3 8s linear infinite
        }
        @keyframes step3 {
          0%,18% {
            opacity:.12
          }
          23%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s4 {
          animation:step4 8s linear infinite
        }
        @keyframes step4 {
          0%,24% {
            opacity:.12
          }
          29%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s5 {
          animation:step5 8s linear infinite
        }
        @keyframes step5 {
          0%,30% {
            opacity:.12
          }
          35%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s6 {
          animation:step6 8s linear infinite
        }
        @keyframes step6 {
          0%,36% {
            opacity:.12
          }
          41%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s7 {
          animation:step7 8s linear infinite
        }
        @keyframes step7 {
          0%,42% {
            opacity:.12
          }
          47%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s8 {
          animation:step8 8s linear infinite
        }
        @keyframes step8 {
          0%,48% {
            opacity:.12
          }
          53%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s9 {
          animation:step9 8s linear infinite
        }
        @keyframes step9 {
          0%,54% {
            opacity:.12
          }
          59%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s10 {
          animation:step10 8s linear infinite
        }
        @keyframes step10 {
          0%,60% {
            opacity:.12
          }
          65%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .s11 {
          animation:step11 8s linear infinite
        }
        @keyframes step11 {
          0%,66% {
            opacity:.12
          }
          71%,94% {
            opacity:1
          }
          100% {
            opacity:.12
          }
        }
        .iterate {
          animation:iterate 8s linear infinite
        }
        @keyframes iterate {
          0% {
            transform:translate(0px,0px)
          }
          6% {
            transform:translate(13.44px,42px)
          }
          12% {
            transform:translate(23.117px,10.5px)
          }
          18% {
            transform:translate(30.084px,34.125px)
          }
          24% {
            transform:translate(35.101px,16.406px)
          }
          30% {
            transform:translate(38.712px,29.695px)
          }
          36% {
            transform:translate(41.313px,19.729px)
          }
          42% {
            transform:translate(43.185px,27.204px)
          }
          48% {
            transform:translate(44.533px,21.597px)
          }
          54% {
            transform:translate(45.504px,25.802px)
          }
          60% {
            transform:translate(46.203px,22.648px)
          }
          66% {
            transform:translate(46.706px,25.014px)
          }
          72% {
            transform:translate(47.068px,23.24px)
          }
          94%,100% {
            transform:translate(47.068px,23.24px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Gradient Descent">
        <g class="ink muted">
          <ellipse cx="70" cy="70" rx="58" ry="23.2"/>
          <ellipse cx="70" cy="70" rx="39" ry="15.6"/>
          <ellipse cx="70" cy="70" rx="19" ry="7.6"/>
        </g>
        <defs>
          <marker id="head" markerWidth="3.5" markerHeight="3.5" refX="4" refY="2.5" orient="auto">
            <path d="M0 0L5 2.5L0 5" fill="none" stroke="#70edb1"/>
          </marker>
        </defs>
        <path class="ink step s0" d="M22 46L35.44 88" marker-end="url(#head)"/>
        <path class="ink step s1" d="M35.44 88L45.1168 56.5" marker-end="url(#head)"/>
        <path class="ink step s2" d="M45.1168 56.5L52.084 80.125" marker-end="url(#head)"/>
        <path class="ink step s3" d="M52.084 80.125L57.101 62.406" marker-end="url(#head)"/>
        <path class="ink step s4" d="M57.101 62.406L60.712 75.695" style="stroke-width:1"/>
        <path class="ink step s5" d="M60.712 75.695L63.313 65.729" style="stroke-width:1"/>
        <path class="ink step s6" d="M63.313 65.729L65.185 73.204" style="stroke-width:1"/>
        <path class="ink step s7" d="M65.185 73.204L66.533 67.597" style="stroke-width:1"/>
        <path class="ink step s8" d="M66.533 67.597L67.504 71.802" style="stroke-width:1"/>
        <path class="ink step s9" d="M67.504 71.802L68.203 68.648" style="stroke-width:1"/>
        <path class="ink step s10" d="M68.203 68.648L68.706 71.014" style="stroke-width:1"/>
        <path class="ink step s11" d="M68.706 71.014L69.068 69.24" style="stroke-width:1"/>
        <path d="M66 70H74M70 66V74" stroke="#f3c977"/>
        <circle class="iterate" cx="22" cy="46" r="3.6" fill="#f3c977" transform="translate(47.068 23.24)"/>
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

if (!customElements.get("concept-gradient-descent")) {
  customElements.define("concept-gradient-descent", ConceptGradientDescent);
}
