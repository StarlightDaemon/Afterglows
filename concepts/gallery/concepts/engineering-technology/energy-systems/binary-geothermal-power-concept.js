// Binary Geothermal Power. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBinaryGeothermalPower extends HTMLElement {
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
        .rock {
          fill:#1d2017
        }
        .rock-hatch {
          stroke:#695a39;
          stroke-width:.8
        }
        .brine-hot {
          fill:none;
          stroke:#ed8eab;
          stroke-width:2
        }
        .brine-cool {
          fill:none;
          stroke:#cc9764;
          stroke-width:2
        }
        .reservoir {
          stroke:#ed8eab;
          stroke-width:1;
          stroke-dasharray:2 2
        }
        .exchanger {
          fill:#101d18;
          stroke:#375b51;
          stroke-width:1
        }
        .separator {
          stroke:#375b51;
          stroke-width:1
        }
        .secondary-liquid {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.6
        }
        .secondary-vapor {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.6;
          stroke-dasharray:3 2
        }
        .condensation {
          stroke:#77c9ef;
          stroke-width:1.6
        }
        .turbine,.pump {
          fill:#10251b;
          stroke:#70edb1;
          stroke-width:1.3
        }
        .shaft {
          stroke:#70edb1;
          stroke-width:2
        }
        .generator {
          fill:#173621;
          stroke:#70edb1;
          stroke-width:1
        }
        .turbine-rotation {
          fill:#70edb1;
          animation:binary-turbine 4s linear infinite
        }
        .condenser {
          fill:none;
          stroke:#375b51;
          stroke-width:1
        }
        .condenser-fin {
          fill:none;
          stroke:#77c9ef;
          stroke-width:.9
        }
        .pump-impeller {
          fill:#70edb1;
          transform-origin:90px 91px;
          animation:binary-turbine 4s linear infinite
        }
        .heat-transfer,.reject-heat {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.2
        }
        .net-power {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.3
        }
        .pump-work {
          fill:none;
          stroke:#70edb1;
          stroke-width:.9
        }
        .brine-tracer {
          fill:#ed8eab;
          stroke:#07120f;
          stroke-width:.5;
          animation:binary-brine 6s linear infinite
        }
        .secondary-tracer {
          fill:#07120f;
          stroke:#70edb1;
          stroke-width:1;
          animation:binary-secondary 4s linear infinite
        }
        @keyframes binary-brine {
          0.0000% {
            transform:translate(25px,124px)
          }
          35.6436% {
            transform:translate(25px,52px)
          }
          50.0000% {
            transform:translate(54px,52px)
          }
          62.8713% {
            transform:translate(54px,78px)
          }
          69.8020% {
            transform:translate(40px,78px)
          }
          92.5743% {
            transform:translate(40px,124px)
          }
          100.0000% {
            transform:translate(25px,124px)
          }
        }
        @keyframes binary-secondary {
          0.0000% {
            transform:translate(72px,78px)
          }
          11.6071% {
            transform:translate(72px,52px)
          }
          20.9821% {
            transform:translate(72px,31px)
          }
          32.5893% {
            transform:translate(98px,31px)
          }
          41.5179% {
            transform:translate(118px,31px)
          }
          44.1964% {
            transform:translate(124px,31px)
          }
          64.7321% {
            transform:translate(124px,77px)
          }
          67.4107% {
            transform:translate(118px,77px)
          }
          73.6607% {
            transform:translate(118px,91px)
          }
          83.4821% {
            transform:translate(96px,91px)
          }
          86.1607% {
            transform:translate(90px,91px)
          }
          91.9643% {
            transform:translate(90px,78px)
          }
          100.0000% {
            transform:translate(72px,78px)
          }
        }
        @keyframes binary-turbine {
          to {
            transform:rotate(360deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Binary Geothermal Power">
        <path class="rock" d="M12 112Q33 107 49 113T85 114L128 112V132H12Z"/>
        <path class="rock-hatch" d="M14 126L20 120M46 129L53 122M68 127L75 120M91 130L100 121M118 128L125 121"/>
        <path class="brine-hot" d="M25 124V52H54V65"/>
        <path class="brine-cool" d="M54 65V78H40V124"/>
        <path class="reservoir" d="M40 124H25"/>
        <rect class="exchanger" x="48" y="48" width="32" height="35" rx="2"/>
        <path class="separator" d="M63 49V82M61 54L65 58M61 71L65 75"/>
        <path class="brine-hot" d="M48 52H54V65"/>
        <path class="brine-cool" d="M54 65V78H48"/>
        <path class="secondary-liquid" d="M118 91H90V78H72V68"/>
        <path class="secondary-vapor" d="M72 68V31H98M118 31H124V77H118V84"/>
        <path class="condensation" d="M118 84V91"/>
        <circle class="turbine" cx="108" cy="31" r="10"/>
        <path class="shaft" d="M108 21V13"/>
        <circle class="generator" cx="108" cy="9" r="4"/>
        <g transform="translate(108,31)">
          <g class="turbine-rotation">
            <path transform="rotate(0)" d="M0 0L7 -3L6 3Z"/>
            <path transform="rotate(120)" d="M0 0L7 -3L6 3Z"/>
            <path transform="rotate(240)" d="M0 0L7 -3L6 3Z"/>
          </g>
        </g>
        <rect class="condenser" x="110" y="77" width="18" height="14" rx="2"/>
        <path class="condenser-fin" d="M111 79H117M121 82H127M111 85H117M121 88H127"/>
        <circle class="pump" cx="90" cy="91" r="6"/>
        <path class="pump-impeller" d="M87 93L90 86L93 93Z"/>
        <path class="heat-transfer" d="M57 63H69M66 60L69 63L66 66"/>
        <path class="reject-heat" d="M129 83H136M133 80L136 83L133 86"/>
        <path class="net-power" d="M115 9H132M128 6L132 9L128 12"/>
        <path class="pump-work" d="M79 106L86 98M82 99L86 98L85 102"/>
        <circle class="brine-tracer" r="1.8" transform="translate(25,90)"/>
        <circle class="secondary-tracer" r="1.8" transform="translate(92,31)"/>
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

if (!customElements.get("concept-binary-geothermal-power")) {
  customElements.define("concept-binary-geothermal-power", ConceptBinaryGeothermalPower);
}
