// ROC Threshold Sweep. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRocThresholdSweep extends HTMLElement {
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
        .threshold {
          transform:translateX(-106px);
          animation:threshold 9s steps(1,end) infinite;
        }
        @keyframes threshold {
          0% {
            transform:translateX(0px);
          }
          10% {
            transform:translateX(-16px);
          }
          20% {
            transform:translateX(-28px);
          }
          30% {
            transform:translateX(-40px);
          }
          40% {
            transform:translateX(-52px);
          }
          50% {
            transform:translateX(-64px);
          }
          60% {
            transform:translateX(-76px);
          }
          70% {
            transform:translateX(-88px);
          }
          80% {
            transform:translateX(-100px);
          }
          100% {
            transform:translateX(-106px);
          }
        }
        .s0 {
          animation:s0 9s steps(1,end) infinite;
        }
        @keyframes s0 {
          0% {
            opacity:0;
          }
          10%,100% {
            opacity:1;
          }
        }
        .s1 {
          animation:s1 9s steps(1,end) infinite;
        }
        @keyframes s1 {
          0% {
            opacity:0;
          }
          20%,100% {
            opacity:1;
          }
        }
        .s2 {
          animation:s2 9s steps(1,end) infinite;
        }
        @keyframes s2 {
          0% {
            opacity:0;
          }
          30%,100% {
            opacity:1;
          }
        }
        .s3 {
          animation:s3 9s steps(1,end) infinite;
        }
        @keyframes s3 {
          0% {
            opacity:0;
          }
          40%,100% {
            opacity:1;
          }
        }
        .s4 {
          animation:s4 9s steps(1,end) infinite;
        }
        @keyframes s4 {
          0% {
            opacity:0;
          }
          50%,100% {
            opacity:1;
          }
        }
        .s5 {
          animation:s5 9s steps(1,end) infinite;
        }
        @keyframes s5 {
          0% {
            opacity:0;
          }
          60%,100% {
            opacity:1;
          }
        }
        .s6 {
          animation:s6 9s steps(1,end) infinite;
        }
        @keyframes s6 {
          0% {
            opacity:0;
          }
          70%,100% {
            opacity:1;
          }
        }
        .s7 {
          animation:s7 9s steps(1,end) infinite;
        }
        @keyframes s7 {
          0% {
            opacity:0;
          }
          80%,100% {
            opacity:1;
          }
        }
        @keyframes cursor {
          0% {
            transform:translate(26px,119px);
          }
          10% {
            transform:translate(26px,104.5px);
          }
          20% {
            transform:translate(26px,90px);
          }
          30% {
            transform:translate(48px,90px);
          }
          40% {
            transform:translate(48px,75.5px);
          }
          50% {
            transform:translate(70px,75.5px);
          }
          60% {
            transform:translate(92px,75.5px);
          }
          70% {
            transform:translate(92px,61px);
          }
          80% {
            transform:translate(114px,61px);
          }
          100% {
            transform:translate(114px,61px);
          }
        }
        .cursor {
          transform:translate(114px,61px);
          animation:cursor 9s steps(1,end) infinite;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="ROC Threshold Sweep">
        <path class="ink muted" d="M25 45H126M26 57V119H121"/>
        <circle class="cool" cx="118" cy="28" r="3.5"/>
        <circle class="cool" cx="106" cy="28" r="3.5"/>
        <path class="ink" style="stroke:#f3c977" d="M91 25l6 6m-6 0l6 -6"/>
        <circle class="cool" cx="82" cy="28" r="3.5"/>
        <path class="ink" style="stroke:#f3c977" d="M67 25l6 6m-6 0l6 -6"/>
        <path class="ink" style="stroke:#f3c977" d="M55 25l6 6m-6 0l6 -6"/>
        <circle class="cool" cx="46" cy="28" r="3.5"/>
        <path class="ink" style="stroke:#f3c977" d="M31 25l6 6m-6 0l6 -6"/>
        <path class="ink threshold" d="M128 17V40m-3 -3l3 3l3 -3"/>
        <path class="ink s0" d="M26 119L26 104.5"/>
        <path class="ink s1" d="M26 104.5L26 90"/>
        <path class="ink s2" d="M26 90L48 90"/>
        <path class="ink s3" d="M48 90L48 75.5"/>
        <path class="ink s4" d="M48 75.5L70 75.5"/>
        <path class="ink s5" d="M70 75.5L92 75.5"/>
        <path class="ink s6" d="M92 75.5L92 61"/>
        <path class="ink s7" d="M92 61L114 61"/>
        <circle class="solid cursor" r="3"/>
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

if (!customElements.get("concept-roc-threshold-sweep")) {
  customElements.define("concept-roc-threshold-sweep", ConceptRocThresholdSweep);
}
