// Vestibulo-Ocular Reflex. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVestibuloOcularReflex extends HTMLElement {
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
        .gaze {
          fill:none;
          stroke:#e4c97588;
          stroke-width:1.4;
          animation:gaze 8s linear infinite
        }
        .head {
          transform-origin:70px 86px;
          animation:turn 8s linear infinite
        }
        .outline {
          fill:#25473cbb;
          stroke:#95b09c;
          stroke-width:2
        }
        .nose {
          fill:none;
          stroke:#cfb18a;
          stroke-width:2
        }
        .globe {
          fill:#9ab7a5;
          stroke:#cad6c5;
          stroke-width:1
        }
        .iris {
          fill:none;
          stroke:#315d63;
          stroke-width:4
        }
        .axis {
          stroke:#526f63;
          stroke-width:1.3
        }
        .eye {
          transform-origin:52px 67px;
          animation:e0 8s linear infinite
        }
        .e1 {
          transform-origin:88px 67px;
          animation-name:e1
        }
        .target {
          fill:#e5ca78;
          stroke:#f5e7bb;
          stroke-width:1
        }
        @keyframes turn {
          0% {
            transform:rotate(0deg)
          }
          2.5% {
            transform:rotate(2.347deg)
          }
          5% {
            transform:rotate(4.635deg)
          }
          7.5% {
            transform:rotate(6.81deg)
          }
          10% {
            transform:rotate(8.817deg)
          }
          12.5% {
            transform:rotate(10.607deg)
          }
          15% {
            transform:rotate(12.135deg)
          }
          17.5% {
            transform:rotate(13.365deg)
          }
          20% {
            transform:rotate(14.266deg)
          }
          22.5% {
            transform:rotate(14.815deg)
          }
          25% {
            transform:rotate(15deg)
          }
          27.5% {
            transform:rotate(14.815deg)
          }
          30% {
            transform:rotate(14.266deg)
          }
          32.5% {
            transform:rotate(13.365deg)
          }
          35% {
            transform:rotate(12.135deg)
          }
          37.5% {
            transform:rotate(10.607deg)
          }
          40% {
            transform:rotate(8.817deg)
          }
          42.5% {
            transform:rotate(6.81deg)
          }
          45% {
            transform:rotate(4.635deg)
          }
          47.5% {
            transform:rotate(2.347deg)
          }
          50% {
            transform:rotate(1.837e-15deg)
          }
          52.5% {
            transform:rotate(-2.347deg)
          }
          55.0% {
            transform:rotate(-4.635deg)
          }
          57.5% {
            transform:rotate(-6.81deg)
          }
          60% {
            transform:rotate(-8.817deg)
          }
          62.5% {
            transform:rotate(-10.607deg)
          }
          65% {
            transform:rotate(-12.135deg)
          }
          67.5% {
            transform:rotate(-13.365deg)
          }
          70% {
            transform:rotate(-14.266deg)
          }
          72.5% {
            transform:rotate(-14.815deg)
          }
          75% {
            transform:rotate(-15deg)
          }
          77.5% {
            transform:rotate(-14.815deg)
          }
          80% {
            transform:rotate(-14.266deg)
          }
          82.5% {
            transform:rotate(-13.365deg)
          }
          85% {
            transform:rotate(-12.135deg)
          }
          87.5% {
            transform:rotate(-10.607deg)
          }
          90% {
            transform:rotate(-8.817deg)
          }
          92.5% {
            transform:rotate(-6.81deg)
          }
          95% {
            transform:rotate(-4.635deg)
          }
          97.5% {
            transform:rotate(-2.347deg)
          }
          100% {
            transform:rotate(-3.674e-15deg)
          }
        }
        @keyframes gaze {
          0% {
            d:path("M52 67L70 12M88 67L70 12")
          }
          2.5% {
            d:path("M52.793 66.279L70 12M88.763 67.753L70 12")
          }
          5% {
            d:path("M53.594 65.608L70 12M89.477 68.517L70 12")
          }
          7.5% {
            d:path("M54.38 65.0L70 12M90.126 69.268L70 12")
          }
          10% {
            d:path("M55.125 64.466L70 12M90.7 69.983L70 12")
          }
          12.5% {
            d:path("M55.805 64.011L70 12M91.19 70.638L70 12")
          }
          15% {
            d:path("M56.396 63.641L70 12M91.592 71.209L70 12")
          }
          17.5% {
            d:path("M56.879 63.354L70 12M91.904 71.675L70 12")
          }
          20% {
            d:path("M57.237 63.15L70 12M92.127 72.021L70 12")
          }
          22.5% {
            d:path("M57.457 63.029L70 12M92.26 72.234L70 12")
          }
          25% {
            d:path("M57.531 62.989L70 12M92.304 72.306L70 12")
          }
          27.5% {
            d:path("M57.457 63.029L70 12M92.26 72.234L70 12")
          }
          30% {
            d:path("M57.237 63.15L70 12M92.127 72.021L70 12")
          }
          32.5% {
            d:path("M56.879 63.354L70 12M91.904 71.675L70 12")
          }
          35% {
            d:path("M56.396 63.641L70 12M91.592 71.209L70 12")
          }
          37.5% {
            d:path("M55.805 64.011L70 12M91.19 70.638L70 12")
          }
          40% {
            d:path("M55.125 64.466L70 12M90.7 69.983L70 12")
          }
          42.5% {
            d:path("M54.38 65.0L70 12M90.126 69.268L70 12")
          }
          45% {
            d:path("M53.594 65.608L70 12M89.477 68.517L70 12")
          }
          47.5% {
            d:path("M52.793 66.279L70 12M88.763 67.753L70 12")
          }
          50% {
            d:path("M52 67L70 12M88 67L70 12")
          }
          52.5% {
            d:path("M51.237 67.753L70 12M87.207 66.279L70 12")
          }
          55.0% {
            d:path("M50.523 68.517L70 12M86.406 65.608L70 12")
          }
          57.5% {
            d:path("M49.874 69.268L70 12M85.62 65.0L70 12")
          }
          60% {
            d:path("M49.3 69.983L70 12M84.875 64.466L70 12")
          }
          62.5% {
            d:path("M48.81 70.638L70 12M84.195 64.011L70 12")
          }
          65% {
            d:path("M48.408 71.209L70 12M83.604 63.641L70 12")
          }
          67.5% {
            d:path("M48.096 71.675L70 12M83.121 63.354L70 12")
          }
          70% {
            d:path("M47.873 72.021L70 12M82.763 63.15L70 12")
          }
          72.5% {
            d:path("M47.74 72.234L70 12M82.543 63.029L70 12")
          }
          75% {
            d:path("M47.696 72.306L70 12M82.469 62.989L70 12")
          }
          77.5% {
            d:path("M47.74 72.234L70 12M82.543 63.029L70 12")
          }
          80% {
            d:path("M47.873 72.021L70 12M82.763 63.15L70 12")
          }
          82.5% {
            d:path("M48.096 71.675L70 12M83.121 63.354L70 12")
          }
          85% {
            d:path("M48.408 71.209L70 12M83.604 63.641L70 12")
          }
          87.5% {
            d:path("M48.81 70.638L70 12M84.195 64.011L70 12")
          }
          90% {
            d:path("M49.3 69.983L70 12M84.875 64.466L70 12")
          }
          92.5% {
            d:path("M49.874 69.268L70 12M85.62 65.0L70 12")
          }
          95% {
            d:path("M50.523 68.517L70 12M86.406 65.608L70 12")
          }
          97.5% {
            d:path("M51.237 67.753L70 12M87.207 66.279L70 12")
          }
          100% {
            d:path("M52 67L70 12M88 67L70 12")
          }
        }
        @keyframes e0 {
          0% {
            transform:rotate(18.122deg)
          }
          2.5% {
            transform:rotate(15.243deg)
          }
          5% {
            transform:rotate(12.381deg)
          }
          7.5% {
            transform:rotate(9.611deg)
          }
          10% {
            transform:rotate(7.012deg)
          }
          12.5% {
            transform:rotate(4.659deg)
          }
          15% {
            transform:rotate(2.623deg)
          }
          17.5% {
            transform:rotate(0.967deg)
          }
          20% {
            transform:rotate(-0.256deg)
          }
          22.5% {
            transform:rotate(-1.005deg)
          }
          25% {
            transform:rotate(-1.258deg)
          }
          27.5% {
            transform:rotate(-1.005deg)
          }
          30% {
            transform:rotate(-0.256deg)
          }
          32.5% {
            transform:rotate(0.967deg)
          }
          35% {
            transform:rotate(2.623deg)
          }
          37.5% {
            transform:rotate(4.659deg)
          }
          40% {
            transform:rotate(7.012deg)
          }
          42.5% {
            transform:rotate(9.611deg)
          }
          45% {
            transform:rotate(12.381deg)
          }
          47.5% {
            transform:rotate(15.243deg)
          }
          50% {
            transform:rotate(18.122deg)
          }
          52.5% {
            transform:rotate(20.946deg)
          }
          55.0% {
            transform:rotate(23.65deg)
          }
          57.5% {
            transform:rotate(26.173deg)
          }
          60% {
            transform:rotate(28.463deg)
          }
          62.5% {
            transform:rotate(30.475deg)
          }
          65% {
            transform:rotate(32.171deg)
          }
          67.5% {
            transform:rotate(33.521deg)
          }
          70% {
            transform:rotate(34.502deg)
          }
          72.5% {
            transform:rotate(35.097deg)
          }
          75% {
            transform:rotate(35.297deg)
          }
          77.5% {
            transform:rotate(35.097deg)
          }
          80% {
            transform:rotate(34.502deg)
          }
          82.5% {
            transform:rotate(33.521deg)
          }
          85% {
            transform:rotate(32.171deg)
          }
          87.5% {
            transform:rotate(30.475deg)
          }
          90% {
            transform:rotate(28.463deg)
          }
          92.5% {
            transform:rotate(26.173deg)
          }
          95% {
            transform:rotate(23.65deg)
          }
          97.5% {
            transform:rotate(20.946deg)
          }
          100% {
            transform:rotate(18.122deg)
          }
        }
        @keyframes e1 {
          0% {
            transform:rotate(-18.122deg)
          }
          2.5% {
            transform:rotate(-20.946deg)
          }
          5% {
            transform:rotate(-23.65deg)
          }
          7.5% {
            transform:rotate(-26.173deg)
          }
          10% {
            transform:rotate(-28.463deg)
          }
          12.5% {
            transform:rotate(-30.475deg)
          }
          15% {
            transform:rotate(-32.171deg)
          }
          17.5% {
            transform:rotate(-33.521deg)
          }
          20% {
            transform:rotate(-34.502deg)
          }
          22.5% {
            transform:rotate(-35.097deg)
          }
          25% {
            transform:rotate(-35.297deg)
          }
          27.5% {
            transform:rotate(-35.097deg)
          }
          30% {
            transform:rotate(-34.502deg)
          }
          32.5% {
            transform:rotate(-33.521deg)
          }
          35% {
            transform:rotate(-32.171deg)
          }
          37.5% {
            transform:rotate(-30.475deg)
          }
          40% {
            transform:rotate(-28.463deg)
          }
          42.5% {
            transform:rotate(-26.173deg)
          }
          45% {
            transform:rotate(-23.65deg)
          }
          47.5% {
            transform:rotate(-20.946deg)
          }
          50% {
            transform:rotate(-18.122deg)
          }
          52.5% {
            transform:rotate(-15.243deg)
          }
          55.0% {
            transform:rotate(-12.381deg)
          }
          57.5% {
            transform:rotate(-9.611deg)
          }
          60% {
            transform:rotate(-7.012deg)
          }
          62.5% {
            transform:rotate(-4.659deg)
          }
          65% {
            transform:rotate(-2.623deg)
          }
          67.5% {
            transform:rotate(-0.967deg)
          }
          70% {
            transform:rotate(0.256deg)
          }
          72.5% {
            transform:rotate(1.005deg)
          }
          75% {
            transform:rotate(1.258deg)
          }
          77.5% {
            transform:rotate(1.005deg)
          }
          80% {
            transform:rotate(0.256deg)
          }
          82.5% {
            transform:rotate(-0.967deg)
          }
          85% {
            transform:rotate(-2.623deg)
          }
          87.5% {
            transform:rotate(-4.659deg)
          }
          90% {
            transform:rotate(-7.012deg)
          }
          92.5% {
            transform:rotate(-9.611deg)
          }
          95% {
            transform:rotate(-12.381deg)
          }
          97.5% {
            transform:rotate(-15.243deg)
          }
          100% {
            transform:rotate(-18.122deg)
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .e0 {
            transform:rotate(18.121deg)
          }
          .e1 {
            transform:rotate(-18.121deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Vestibulo-Ocular Reflex">
        <path class="gaze" d="M52 67L70 12M88 67L70 12"/>
        <g class="head">
          <path class="outline" d="M54 44L70 31L86 44C114 48 116 111 90 122H50C24 111 26 48 54 44Z"/>
          <path class="nose" d="M64 43L70 34L76 43"/>
          <g class="eye e0">
            <circle class="globe" cx="52" cy="67" r="11"/>
            <path class="iris" d="M46 58Q52 53 58 58"/>
            <path class="axis" d="M52 67V57"/>
          </g>
          <g class="eye e1">
            <circle class="globe" cx="88" cy="67" r="11"/>
            <path class="iris" d="M82 58Q88 53 94 58"/>
            <path class="axis" d="M88 67V57"/>
          </g>
        </g>
        <circle class="target" cx="70" cy="12" r="4"/>
        <path class="ink muted" d="M48 12H57M83 12H92"/>
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

if (!customElements.get("concept-vestibulo-ocular-reflex")) {
  customElements.define("concept-vestibulo-ocular-reflex", ConceptVestibuloOcularReflex);
}
