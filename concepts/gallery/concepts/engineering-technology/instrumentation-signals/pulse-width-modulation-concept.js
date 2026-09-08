// Pulse-Width Modulation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPulseWidthModulation extends HTMLElement {
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
        .ramp {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.3
        }
        .threshold {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5
        }
        .falling-guides {
          fill:none;
          stroke:#f3c977;
          stroke-width:.7;
          stroke-dasharray:2 3;
          opacity:.5
        }
        .pulse-area {
          fill:#70edb1;
          opacity:.17
        }
        .pwm-output {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.6
        }
        .intersection {
          fill:#f3c977
        }
        .duty {
          fill:#a1b9ac;
          text-anchor:middle;
          font:8px monospace
        }
        .pwm-window {
          animation:pwm-reveal 10s linear infinite
        }
        .pwm-live {
          opacity:0;
          animation:pwm-live 10s linear infinite
        }
        .ramp-dot {
          fill:#77c9ef;
          animation:pwm-ramp-dot 1s linear infinite
        }
        .pwm-bit {
          fill:#70edb1;
          animation:pwm-bit 10s steps(1,end) infinite
        }
        .pwm-cycle {
          animation:pwm-cycle 10s linear infinite
        }
        @keyframes pwm-reveal {
          0%,10% {
            width:0
          }
          70%,100% {
            width:96px
          }
        }
        @keyframes pwm-live {
          0%,10% {
            opacity:0;
            transform:translateX(0)
          }
          10.01% {
            opacity:1
          }
          70% {
            opacity:1;
            transform:translateX(96px)
          }
          70.01%,100% {
            opacity:0;
            transform:translateX(96px)
          }
        }
        @keyframes pwm-ramp-dot {
          0% {
            transform:translateY(0)
          }
          100% {
            transform:translateY(-30px)
          }
        }
        @keyframes pwm-bit {
          0% {
            transform:translateY(0)
          }
          10% {
            transform:translateY(0)
          }
          12.5% {
            transform:translateY(21px)
          }
          20% {
            transform:translateY(0)
          }
          22.5% {
            transform:translateY(21px)
          }
          30% {
            transform:translateY(0)
          }
          35% {
            transform:translateY(21px)
          }
          40% {
            transform:translateY(0)
          }
          45% {
            transform:translateY(21px)
          }
          50% {
            transform:translateY(0)
          }
          57.5% {
            transform:translateY(21px)
          }
          60% {
            transform:translateY(0)
          }
          67.5% {
            transform:translateY(21px)
          }
        }
        @keyframes pwm-cycle {
          0%,90%,100% {
            opacity:0
          }
          5%,85% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pulse-Width Modulation">
        <defs>
          <clipPath id="pwm-history">
            <rect class="pwm-window" x="22" y="30" width="96" height="86"/>
          </clipPath>
        </defs>
        <g class="pwm-cycle">
          <path class="ink muted" d="M22 65H118M22 112H118"/>
          <g clip-path="url(#pwm-history)">
            <path class="ramp" d="M22 65L38 35V65L54 35V65L70 35V65L86 35V65L102 35V65L118 35V65"/>
            <path class="threshold" d="M22 57.5H38M38 57.5H54M54 50H70M70 50H86M86 42.5H102M102 42.5H118"/>
            <path class="falling-guides" d="M26 57.5V112M42 57.5V112M62 50V112M78 50V112M98 42.5V112M114 42.5V112"/>
            <rect class="pulse-area" x="22" y="91" width="4" height="21"/>
            <rect class="pulse-area" x="38" y="91" width="4" height="21"/>
            <rect class="pulse-area" x="54" y="91" width="8" height="21"/>
            <rect class="pulse-area" x="70" y="91" width="8" height="21"/>
            <rect class="pulse-area" x="86" y="91" width="12" height="21"/>
            <rect class="pulse-area" x="102" y="91" width="12" height="21"/>
            <path class="pwm-output" d="M22 112H22V91H26V112H38H38V91H42V112H54H54V91H62V112H70H70V91H78V112H86H86V91H98V112H102H102V91H114V112H118"/>
            <circle class="intersection" cx="26" cy="57.5" r="1.6"/>
            <circle class="intersection" cx="42" cy="57.5" r="1.6"/>
            <circle class="intersection" cx="62" cy="50" r="1.6"/>
            <circle class="intersection" cx="78" cy="50" r="1.6"/>
            <circle class="intersection" cx="98" cy="42.5" r="1.6"/>
            <circle class="intersection" cx="114" cy="42.5" r="1.6"/>
          </g>
          <g class="pwm-live">
            <circle class="ramp-dot" cx="22" cy="65" r="2.4"/>
            <circle class="pwm-bit" cx="22" cy="91" r="2.4"/>
          </g>
          <path class="ink muted" d="M22 117V121H54V117M54 117V121H86V117M86 117V121H118V117"/>
          <text class="duty" x="38" y="133">25%</text>
          <text class="duty" x="70" y="133">50%</text>
          <text class="duty" x="102" y="133">75%</text>
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

if (!customElements.get("concept-pulse-width-modulation")) {
  customElements.define("concept-pulse-width-modulation", ConceptPulseWidthModulation);
}
