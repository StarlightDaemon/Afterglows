// Sprouting Angiogenesis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSproutingAngiogenesis extends HTMLElement {
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
        .parent-wall {
          fill:none;
          stroke:#b17d8c;
          stroke-width:12;
          stroke-linecap:round
        }
        .parent-lumen {
          fill:none;
          stroke:#583746;
          stroke-width:7
        }
        .sprout {
          fill:none;
          stroke:#b17d8c;
          stroke-width:12;
          stroke-linecap:round;
          stroke-dasharray:100;
          stroke-dashoffset:0;
          animation:grow 14s linear infinite
        }
        .new-lumen {
          fill:none;
          stroke:#583746;
          stroke-width:7;
          stroke-linecap:round;
          animation:lumen 14s infinite
        }
        .tip {
          fill:#ce9eaa;
          stroke:#e1bfaa;
          stroke-width:1.3;
          opacity:0
        }
        .tip path {
          fill:none;
          stroke-width:1.5
        }
        .rbc {
          fill:#dfa2ac;
          opacity:1;
          animation:flow 14s linear infinite
        }
        @keyframes grow {
          0%,10% {
            stroke-dashoffset:100
          }
          12.5% {
            stroke-dashoffset:95.594
          }
          15% {
            stroke-dashoffset:91.421
          }
          17.5% {
            stroke-dashoffset:87.329
          }
          20% {
            stroke-dashoffset:83.205
          }
          22.5% {
            stroke-dashoffset:78.972
          }
          25% {
            stroke-dashoffset:74.591
          }
          27.5% {
            stroke-dashoffset:70.053
          }
          30% {
            stroke-dashoffset:65.365
          }
          32.5% {
            stroke-dashoffset:60.547
          }
          35% {
            stroke-dashoffset:55.623
          }
          37.5% {
            stroke-dashoffset:50.617
          }
          40% {
            stroke-dashoffset:45.549
          }
          42.5% {
            stroke-dashoffset:40.426
          }
          45% {
            stroke-dashoffset:35.243
          }
          47.5% {
            stroke-dashoffset:29.977
          }
          50% {
            stroke-dashoffset:24.583
          }
          52.5% {
            stroke-dashoffset:18.989
          }
          55% {
            stroke-dashoffset:13.104
          }
          57.5% {
            stroke-dashoffset:6.817
          }
          60% {
            stroke-dashoffset:0
          }
          100% {
            stroke-dashoffset:0
          }
        }
        @keyframes lumen {
          0%,60% {
            opacity:0;
            stroke-dasharray:0 100
          }
          78%,100% {
            opacity:1;
            stroke-dasharray:100 100
          }
        }
        .t0 {
          animation:t0 14s linear infinite
        }
        @keyframes t0 {
          0%,10% {
            transform:translate(-48px,30px);
            opacity:1
          }
          12.5% {
            transform:translate(-45.415px,29.782px);
            opacity:1
          }
          15% {
            transform:translate(-43.038px,29.16px);
            opacity:1
          }
          17.5% {
            transform:translate(-40.838px,28.177px);
            opacity:1
          }
          20% {
            transform:translate(-38.784px,26.88px);
            opacity:1
          }
          22.5% {
            transform:translate(-36.844px,25.3125px);
            opacity:1
          }
          25% {
            transform:translate(-34.986px,23.52px);
            opacity:1
          }
          27.5% {
            transform:translate(-33.179px,21.5475px);
            opacity:1
          }
          30% {
            transform:translate(-31.392px,19.44px);
            opacity:1
          }
          32.5% {
            transform:translate(-29.593px,17.243px);
            opacity:1
          }
          35% {
            transform:translate(-27.75px,15px);
            opacity:1
          }
          37.5% {
            transform:translate(-25.832px,12.757px);
            opacity:1
          }
          40% {
            transform:translate(-23.808px,10.56px);
            opacity:1
          }
          42.5% {
            transform:translate(-21.646px,8.452px);
            opacity:1
          }
          45% {
            transform:translate(-19.314px,6.48px);
            opacity:1
          }
          47.5% {
            transform:translate(-16.781px,4.6875px);
            opacity:1
          }
          50% {
            transform:translate(-14.016px,3.12px);
            opacity:1
          }
          52.5% {
            transform:translate(-10.987px,1.823px);
            opacity:1
          }
          55% {
            transform:translate(-7.662px,0.84px);
            opacity:1
          }
          57.5% {
            transform:translate(-4.01px,0.218px);
            opacity:1
          }
          60% {
            transform:translate(0px,0px);
            opacity:1
          }
          70%,100% {
            opacity:0;
            transform:translate(0,0)
          }
        }
        .t1 {
          animation:t1 14s linear infinite
        }
        @keyframes t1 {
          0%,10% {
            transform:translate(48px,30px);
            opacity:1
          }
          12.5% {
            transform:translate(45.415px,29.782px);
            opacity:1
          }
          15% {
            transform:translate(43.038px,29.16px);
            opacity:1
          }
          17.5% {
            transform:translate(40.838px,28.177px);
            opacity:1
          }
          20% {
            transform:translate(38.784px,26.88px);
            opacity:1
          }
          22.5% {
            transform:translate(36.844px,25.3125px);
            opacity:1
          }
          25% {
            transform:translate(34.986px,23.52px);
            opacity:1
          }
          27.5% {
            transform:translate(33.179px,21.5475px);
            opacity:1
          }
          30% {
            transform:translate(31.392px,19.44px);
            opacity:1
          }
          32.5% {
            transform:translate(29.593px,17.243px);
            opacity:1
          }
          35% {
            transform:translate(27.75px,15px);
            opacity:1
          }
          37.5% {
            transform:translate(25.832px,12.757px);
            opacity:1
          }
          40% {
            transform:translate(23.808px,10.56px);
            opacity:1
          }
          42.5% {
            transform:translate(21.646px,8.452px);
            opacity:1
          }
          45% {
            transform:translate(19.314px,6.48px);
            opacity:1
          }
          47.5% {
            transform:translate(16.781px,4.6875px);
            opacity:1
          }
          50% {
            transform:translate(14.016px,3.12px);
            opacity:1
          }
          52.5% {
            transform:translate(10.987px,1.823px);
            opacity:1
          }
          55% {
            transform:translate(7.662px,0.84px);
            opacity:1
          }
          57.5% {
            transform:translate(4.01px,0.218px);
            opacity:1
          }
          60% {
            transform:translate(0px,0px);
            opacity:1
          }
          70%,100% {
            opacity:0;
            transform:translate(0,0)
          }
        }
        @keyframes flow {
          0%,81% {
            opacity:0;
            transform:translate(0,0)
          }
          82% {
            opacity:1;
            transform:translate(0,0)
          }
          82.4% {
            opacity:1;
            transform:translate(2.585px,-0.218px)
          }
          82.8% {
            opacity:1;
            transform:translate(4.962px,-0.84px)
          }
          83.2% {
            opacity:1;
            transform:translate(7.162px,-1.823px)
          }
          83.6% {
            opacity:1;
            transform:translate(9.216px,-3.12px)
          }
          84% {
            opacity:1;
            transform:translate(11.156px,-4.6875px)
          }
          84.4% {
            opacity:1;
            transform:translate(13.014px,-6.48px)
          }
          84.8% {
            opacity:1;
            transform:translate(14.821px,-8.4525px)
          }
          85.2% {
            opacity:1;
            transform:translate(16.608px,-10.56px)
          }
          85.6% {
            opacity:1;
            transform:translate(18.407px,-12.757px)
          }
          86% {
            opacity:1;
            transform:translate(20.25px,-15px)
          }
          86.4% {
            opacity:1;
            transform:translate(22.168px,-17.243px)
          }
          86.8% {
            opacity:1;
            transform:translate(24.192px,-19.44px)
          }
          87.2% {
            opacity:1;
            transform:translate(26.354px,-21.548px)
          }
          87.6% {
            opacity:1;
            transform:translate(28.686px,-23.52px)
          }
          88% {
            opacity:1;
            transform:translate(31.219px,-25.3125px)
          }
          88.4% {
            opacity:1;
            transform:translate(33.984px,-26.88px)
          }
          88.8% {
            opacity:1;
            transform:translate(37.013px,-28.177px)
          }
          89.2% {
            opacity:1;
            transform:translate(40.338px,-29.16px)
          }
          89.6% {
            opacity:1;
            transform:translate(43.99px,-29.7825px)
          }
          90% {
            opacity:1;
            transform:translate(48px,-30px)
          }
          90.4% {
            opacity:1;
            transform:translate(52.01px,-29.7825px)
          }
          90.8% {
            opacity:1;
            transform:translate(55.662px,-29.16px)
          }
          91.2% {
            opacity:1;
            transform:translate(58.987px,-28.178px)
          }
          91.6% {
            opacity:1;
            transform:translate(62.016px,-26.88px)
          }
          92% {
            opacity:1;
            transform:translate(64.781px,-25.3125px)
          }
          92.4% {
            opacity:1;
            transform:translate(67.314px,-23.52px)
          }
          92.8% {
            opacity:1;
            transform:translate(69.646px,-21.5475px)
          }
          93.2% {
            opacity:1;
            transform:translate(71.808px,-19.44px)
          }
          93.6% {
            opacity:1;
            transform:translate(73.832px,-17.243px)
          }
          94% {
            opacity:1;
            transform:translate(75.75px,-15px)
          }
          94.4% {
            opacity:1;
            transform:translate(77.593px,-12.757px)
          }
          94.8% {
            opacity:1;
            transform:translate(79.392px,-10.56px)
          }
          95.2% {
            opacity:1;
            transform:translate(81.179px,-8.453px)
          }
          95.6% {
            opacity:1;
            transform:translate(82.986px,-6.48px)
          }
          96% {
            opacity:1;
            transform:translate(84.844px,-4.6875px)
          }
          96.4% {
            opacity:1;
            transform:translate(86.784px,-3.12px)
          }
          96.8% {
            opacity:1;
            transform:translate(88.838px,-1.822px)
          }
          97.2% {
            opacity:1;
            transform:translate(91.038px,-0.84px)
          }
          97.6% {
            opacity:1;
            transform:translate(93.415px,-0.218px)
          }
          98% {
            opacity:1;
            transform:translate(96px,0px)
          }
          99%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sprouting Angiogenesis">
        <path class="parent-wall" d="M22 18V126M118 18V126"/>
        <path class="parent-lumen" d="M22 18V126M118 18V126"/>
        <path class="sprout" pathLength="100" d="M22 84C40 84 42 54 70 54"/>
        <path class="sprout" pathLength="100" d="M118 84C100 84 98 54 70 54"/>
        <path class="new-lumen" pathLength="100" d="M22 84C40 84 42 54 70 54"/>
        <path class="new-lumen" pathLength="100" d="M118 84C100 84 98 54 70 54"/>
        <g class="tip t0">
          <circle cx="70" cy="54" r="5"/>
          <path d="M75 54l10 -3M70 49l6 -8M70 59l7 6"/>
        </g>
        <g class="tip t1">
          <circle cx="70" cy="54" r="5"/>
          <path d="M65 54l-10 -3M70 49l-6 -8M70 59l-7 6"/>
        </g>
        <ellipse class="rbc" cx="22" cy="84" rx="3" ry="2"/>
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

if (!customElements.get("concept-sprouting-angiogenesis")) {
  customElements.define("concept-sprouting-angiogenesis", ConceptSproutingAngiogenesis);
}
