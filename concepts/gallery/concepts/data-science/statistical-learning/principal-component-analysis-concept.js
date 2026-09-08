// Principal Component Analysis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPrincipalComponentAnalysis extends HTMLElement {
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
        .axes {
          transform-origin:70px 66px;
          transform:rotate(-31.462deg);
          animation:axis 8s ease-in-out infinite;
        }
        @keyframes axis {
          0%,10% {
            transform:rotate(0deg);
          }
          45%,100% {
            transform:rotate(-31.462deg);
          }
        }
        .p0 {
          transform:translate(0.683px,1.116px);
          animation:p0 8s ease-in-out infinite;
        }
        @keyframes p0 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(0.683px,1.116px);
          }
        }
        .p1 {
          transform:translate(-3.731px,-6.098px);
          animation:p1 8s ease-in-out infinite;
        }
        @keyframes p1 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(-3.731px,-6.098px);
          }
        }
        .p2 {
          transform:translate(4.524px,7.393px);
          animation:p2 8s ease-in-out infinite;
        }
        @keyframes p2 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(4.524px,7.393px);
          }
        }
        .p3 {
          transform:translate(-2.525px,-4.127px);
          animation:p3 8s ease-in-out infinite;
        }
        @keyframes p3 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(-2.525px,-4.127px);
          }
        }
        .p4 {
          transform:translate(3.081px,5.035px);
          animation:p4 8s ease-in-out infinite;
        }
        @keyframes p4 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(3.081px,5.035px);
          }
        }
        .p5 {
          transform:translate(-4.879px,-7.973px);
          animation:p5 8s ease-in-out infinite;
        }
        @keyframes p5 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(-4.879px,-7.973px);
          }
        }
        .p6 {
          transform:translate(3.323px,5.431px);
          animation:p6 8s ease-in-out infinite;
        }
        @keyframes p6 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(3.323px,5.431px);
          }
        }
        .p7 {
          transform:translate(-0.476px,-0.777px);
          animation:p7 8s ease-in-out infinite;
        }
        @keyframes p7 {
          0%,48% {
            transform:translate(0px,0px);
          }
          78%,100% {
            transform:translate(-0.476px,-0.777px);
          }
        }
        .projection {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
          stroke-dasharray:2 3;
          animation:project 8s linear infinite;
        }
        @keyframes project {
          0%,48% {
            opacity:0;
          }
          65%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Principal Component Analysis">
        <path class="ink muted" d="M13 66H127M70 14V118"/>
        <g class="axes">
          <path class="ink" d="M14 66H126"/>
          <path class="ink muted" d="M70 44V88"/>
          <path class="solid" d="M126 66l-7 -3v6Z"/>
        </g>
        <path class="projection" d="M29.776 89.079L30.458 90.195"/>
        <circle class="warm" cx="29.776" cy="89.079" r="2.5"/>
        <circle class="solid p0" cx="29.776" cy="89.079" r="3"/>
        <path class="projection" d="M49.364 87.007L45.633 80.91"/>
        <circle class="warm" cx="49.364" cy="87.007" r="2.5"/>
        <circle class="solid p1" cx="49.364" cy="87.007" r="3"/>
        <path class="projection" d="M47.426 69.651L51.95 77.044"/>
        <circle class="warm" cx="47.426" cy="69.651" r="2.5"/>
        <circle class="solid p2" cx="47.426" cy="69.651" r="3"/>
        <path class="projection" d="M71.247 70.909L68.721 66.782"/>
        <circle class="warm" cx="71.247" cy="70.909" r="2.5"/>
        <circle class="solid p3" cx="71.247" cy="70.909" r="3"/>
        <path class="projection" d="M74.407 56.383L77.488 61.418"/>
        <circle class="warm" cx="74.407" cy="56.383" r="2.5"/>
        <circle class="solid p4" cx="74.407" cy="56.383" r="3"/>
        <path class="projection" d="M90.567 64.373L85.689 56.4"/>
        <circle class="warm" cx="90.567" cy="64.373" r="2.5"/>
        <circle class="solid p5" cx="90.567" cy="64.373" r="3"/>
        <path class="projection" d="M92.094 45.017L95.417 50.448"/>
        <circle class="warm" cx="92.094" cy="45.017" r="2.5"/>
        <circle class="solid p6" cx="92.094" cy="45.017" r="3"/>
        <path class="projection" d="M105.12 45.579L104.644 44.802"/>
        <circle class="warm" cx="105.12" cy="45.579" r="2.5"/>
        <circle class="solid p7" cx="105.12" cy="45.579" r="3"/>
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

if (!customElements.get("concept-principal-component-analysis")) {
  customElements.define("concept-principal-component-analysis", ConceptPrincipalComponentAnalysis);
}
