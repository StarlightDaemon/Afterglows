// H-Bridge Inverter. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHBridgeInverter extends HTMLElement {
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
        .rails {
          fill:none;
          stroke:#375b51;
          stroke-width:1.4
        }
        .source {
          fill:#0c2117;
          stroke:#70edb1;
          stroke-width:1.2
        }
        .source-sign {
          stroke:#70edb1;
          stroke-width:1.2
        }
        .load-resistor {
          fill:none;
          stroke:#acbfac;
          stroke-width:1.6;
          stroke-linejoin:round
        }
        .positive-path,.negative-path {
          fill:none;
          stroke-width:2;
          stroke-linejoin:round
        }
        .positive-path {
          stroke:#70edb1;
          animation:bridge-positive 8s steps(1,end) infinite
        }
        .negative-path {
          stroke:#77c9ef;
          opacity:0;
          animation:bridge-negative 8s steps(1,end) infinite
        }
        .switch {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.8
        }
        .pivot {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:.8
        }
        .load-direction {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.2;
          animation:bridge-direction 8s steps(1,end) infinite
        }
        .baseline {
          stroke:#375b51;
          stroke-width:.8
        }
        .output-wave {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.2
        }
        .state-dot {
          fill:#f3c977;
          animation:bridge-state 8s steps(1,end) infinite
        }
        .wave-marker {
          animation:bridge-marker 8s linear infinite,bridge-marker-show 8s steps(1,end) infinite
        }
        @keyframes bridge-positive {
          0% {
            opacity:1
          }
          45%,100% {
            opacity:0
          }
        }
        @keyframes bridge-negative {
          0% {
            opacity:0
          }
          50% {
            opacity:1
          }
          95% {
            opacity:0
          }
        }
        @keyframes bridge-direction {
          0% {
            d:path("M78 70H88M85 67L88 70L85 73");
            opacity:1
          }
          45% {
            d:path("M78 70H78M78 67L78 70L78 73");
            opacity:0
          }
          50% {
            d:path("M78 70H68M71 67L68 70L71 73");
            opacity:1
          }
          95% {
            d:path("M78 70H78M78 67L78 70L78 73");
            opacity:0
          }
        }
        @keyframes bridge-state {
          0% {
            transform:translateY(0)
          }
          45% {
            transform:translateY(8px)
          }
          50% {
            transform:translateY(16px)
          }
          95% {
            transform:translateY(8px)
          }
        }
        @keyframes bridge-marker {
          0% {
            transform:translateX(0px)
          }
          0.625% {
            transform:translateX(0.625px)
          }
          1.25% {
            transform:translateX(1.25px)
          }
          1.875% {
            transform:translateX(1.875px)
          }
          2.5% {
            transform:translateX(2.5px)
          }
          3.125% {
            transform:translateX(3.125px)
          }
          3.75% {
            transform:translateX(3.75px)
          }
          4.375% {
            transform:translateX(4.375px)
          }
          5% {
            transform:translateX(5px)
          }
          5.625% {
            transform:translateX(5.625px)
          }
          6.25% {
            transform:translateX(6.25px)
          }
          6.875% {
            transform:translateX(6.875px)
          }
          7.5% {
            transform:translateX(7.5px)
          }
          8.125% {
            transform:translateX(8.125px)
          }
          8.75% {
            transform:translateX(8.75px)
          }
          9.375% {
            transform:translateX(9.375px)
          }
          10% {
            transform:translateX(10px)
          }
          10.625% {
            transform:translateX(10.625px)
          }
          11.25% {
            transform:translateX(11.25px)
          }
          11.875% {
            transform:translateX(11.875px)
          }
          12.5% {
            transform:translateX(12.5px)
          }
          13.125% {
            transform:translateX(13.125px)
          }
          13.75% {
            transform:translateX(13.75px)
          }
          14.375% {
            transform:translateX(14.375px)
          }
          15% {
            transform:translateX(15.0px)
          }
          15.625% {
            transform:translateX(15.625px)
          }
          16.25% {
            transform:translateX(16.25px)
          }
          16.875% {
            transform:translateX(16.875px)
          }
          17.5% {
            transform:translateX(17.5px)
          }
          18.125% {
            transform:translateX(18.125px)
          }
          18.75% {
            transform:translateX(18.75px)
          }
          19.375% {
            transform:translateX(19.375px)
          }
          20% {
            transform:translateX(20px)
          }
          20.625% {
            transform:translateX(20.625px)
          }
          21.25% {
            transform:translateX(21.25px)
          }
          21.875% {
            transform:translateX(21.875px)
          }
          22.5% {
            transform:translateX(22.5px)
          }
          23.125% {
            transform:translateX(23.125px)
          }
          23.75% {
            transform:translateX(23.75px)
          }
          24.375% {
            transform:translateX(24.375px)
          }
          25% {
            transform:translateX(25px)
          }
          25.625% {
            transform:translateX(25.625px)
          }
          26.25% {
            transform:translateX(26.25px)
          }
          26.875% {
            transform:translateX(26.875px)
          }
          27.5% {
            transform:translateX(27.5px)
          }
          28.125% {
            transform:translateX(28.125px)
          }
          28.75% {
            transform:translateX(28.75px)
          }
          29.375% {
            transform:translateX(29.375px)
          }
          30% {
            transform:translateX(30.0px)
          }
          30.625% {
            transform:translateX(30.625px)
          }
          31.25% {
            transform:translateX(31.25px)
          }
          31.875% {
            transform:translateX(31.875px)
          }
          32.5% {
            transform:translateX(32.5px)
          }
          33.125% {
            transform:translateX(33.125px)
          }
          33.75% {
            transform:translateX(33.75px)
          }
          34.375% {
            transform:translateX(34.375px)
          }
          35% {
            transform:translateX(35px)
          }
          35.625% {
            transform:translateX(35.625px)
          }
          36.25% {
            transform:translateX(36.25px)
          }
          36.875% {
            transform:translateX(36.875px)
          }
          37.5% {
            transform:translateX(37.5px)
          }
          38.125% {
            transform:translateX(38.125px)
          }
          38.75% {
            transform:translateX(38.75px)
          }
          39.375% {
            transform:translateX(39.375px)
          }
          40% {
            transform:translateX(40px)
          }
          40.625% {
            transform:translateX(40.625px)
          }
          41.25% {
            transform:translateX(41.25px)
          }
          41.875% {
            transform:translateX(41.875px)
          }
          42.5% {
            transform:translateX(42.5px)
          }
          43.125% {
            transform:translateX(43.125px)
          }
          43.75% {
            transform:translateX(43.75px)
          }
          44.375% {
            transform:translateX(44.375px)
          }
          45% {
            transform:translateX(45px)
          }
          45.625% {
            transform:translateX(45.625px)
          }
          46.25% {
            transform:translateX(46.25px)
          }
          46.875% {
            transform:translateX(46.875px)
          }
          47.5% {
            transform:translateX(47.5px)
          }
          48.125% {
            transform:translateX(48.125px)
          }
          48.75% {
            transform:translateX(48.75px)
          }
          49.375% {
            transform:translateX(49.375px)
          }
          50% {
            transform:translateX(50px)
          }
          50.625% {
            transform:translateX(50.625px)
          }
          51.25% {
            transform:translateX(51.25px)
          }
          51.875% {
            transform:translateX(51.875px)
          }
          52.5% {
            transform:translateX(52.5px)
          }
          53.125% {
            transform:translateX(53.125px)
          }
          53.75% {
            transform:translateX(53.75px)
          }
          54.375% {
            transform:translateX(54.375px)
          }
          55.0% {
            transform:translateX(55.0px)
          }
          55.625% {
            transform:translateX(55.625px)
          }
          56.25% {
            transform:translateX(56.25px)
          }
          56.875% {
            transform:translateX(56.875px)
          }
          57.5% {
            transform:translateX(57.5px)
          }
          58.125% {
            transform:translateX(58.125px)
          }
          58.75% {
            transform:translateX(58.75px)
          }
          59.375% {
            transform:translateX(59.375px)
          }
          60% {
            transform:translateX(60.0px)
          }
          60.625% {
            transform:translateX(60.625px)
          }
          61.25% {
            transform:translateX(61.25px)
          }
          61.875% {
            transform:translateX(61.875px)
          }
          62.5% {
            transform:translateX(62.5px)
          }
          63.125% {
            transform:translateX(63.125px)
          }
          63.75% {
            transform:translateX(63.75px)
          }
          64.375% {
            transform:translateX(64.375px)
          }
          65% {
            transform:translateX(65px)
          }
          65.625% {
            transform:translateX(65.625px)
          }
          66.25% {
            transform:translateX(66.25px)
          }
          66.875% {
            transform:translateX(66.875px)
          }
          67.5% {
            transform:translateX(67.5px)
          }
          68.125% {
            transform:translateX(68.125px)
          }
          68.75% {
            transform:translateX(68.75px)
          }
          69.375% {
            transform:translateX(69.375px)
          }
          70% {
            transform:translateX(70px)
          }
          70.625% {
            transform:translateX(70.625px)
          }
          71.25% {
            transform:translateX(71.25px)
          }
          71.875% {
            transform:translateX(71.875px)
          }
          72.5% {
            transform:translateX(72.5px)
          }
          73.125% {
            transform:translateX(73.125px)
          }
          73.75% {
            transform:translateX(73.75px)
          }
          74.375% {
            transform:translateX(74.375px)
          }
          75% {
            transform:translateX(75px)
          }
          75.625% {
            transform:translateX(75.625px)
          }
          76.25% {
            transform:translateX(76.25px)
          }
          76.875% {
            transform:translateX(76.875px)
          }
          77.5% {
            transform:translateX(77.5px)
          }
          78.125% {
            transform:translateX(78.125px)
          }
          78.75% {
            transform:translateX(78.75px)
          }
          79.375% {
            transform:translateX(79.375px)
          }
          80% {
            transform:translateX(80px)
          }
          80.625% {
            transform:translateX(80.625px)
          }
          81.25% {
            transform:translateX(81.25px)
          }
          81.875% {
            transform:translateX(81.875px)
          }
          82.5% {
            transform:translateX(82.5px)
          }
          83.125% {
            transform:translateX(83.125px)
          }
          83.75% {
            transform:translateX(83.75px)
          }
          84.375% {
            transform:translateX(84.375px)
          }
          85% {
            transform:translateX(85.0px)
          }
          85.625% {
            transform:translateX(85.625px)
          }
          86.25% {
            transform:translateX(86.25px)
          }
          86.875% {
            transform:translateX(86.875px)
          }
          87.5% {
            transform:translateX(87.5px)
          }
          88.125% {
            transform:translateX(88.125px)
          }
          88.75% {
            transform:translateX(88.75px)
          }
          89.375% {
            transform:translateX(89.375px)
          }
          90% {
            transform:translateX(90px)
          }
          90.625% {
            transform:translateX(90.625px)
          }
          91.25% {
            transform:translateX(91.25px)
          }
          91.875% {
            transform:translateX(91.875px)
          }
          92.5% {
            transform:translateX(92.5px)
          }
          93.125% {
            transform:translateX(93.125px)
          }
          93.75% {
            transform:translateX(93.75px)
          }
          94.375% {
            transform:translateX(94.375px)
          }
          95% {
            transform:translateX(95px)
          }
          95.625% {
            transform:translateX(95.625px)
          }
          96.25% {
            transform:translateX(96.25px)
          }
          96.875% {
            transform:translateX(96.875px)
          }
          97.5% {
            transform:translateX(97.5px)
          }
          98.125% {
            transform:translateX(98.125px)
          }
          98.75% {
            transform:translateX(98.75px)
          }
          99.375% {
            transform:translateX(99.375px)
          }
          100% {
            transform:translateX(100px)
          }
        }
        @keyframes bridge-marker-show {
          0% {
            opacity:1
          }
          95% {
            opacity:0
          }
        }
        .switch-0 {
          animation:bridge-switch-0 8s steps(1,end) infinite
        }
        @keyframes bridge-switch-0 {
          0% {
            d:path("M48 38L48 50")
          }
          45% {
            d:path("M48 38L53 48.909")
          }
          50% {
            d:path("M48 38L53 48.909")
          }
          95% {
            d:path("M48 38L53 48.909")
          }
        }
        .switch-1 {
          animation:bridge-switch-1 8s steps(1,end) infinite
        }
        @keyframes bridge-switch-1 {
          0% {
            d:path("M48 76L53 86.909")
          }
          45% {
            d:path("M48 76L53 86.909")
          }
          50% {
            d:path("M48 76L48 88")
          }
          95% {
            d:path("M48 76L53 86.909")
          }
        }
        .switch-2 {
          animation:bridge-switch-2 8s steps(1,end) infinite
        }
        @keyframes bridge-switch-2 {
          0% {
            d:path("M108 38L113 48.909")
          }
          45% {
            d:path("M108 38L113 48.909")
          }
          50% {
            d:path("M108 38L108 50")
          }
          95% {
            d:path("M108 38L113 48.909")
          }
        }
        .switch-3 {
          animation:bridge-switch-3 8s steps(1,end) infinite
        }
        @keyframes bridge-switch-3 {
          0% {
            d:path("M108 76L108 88")
          }
          45% {
            d:path("M108 76L113 86.909")
          }
          50% {
            d:path("M108 76L113 86.909")
          }
          95% {
            d:path("M108 76L113 86.909")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="H-Bridge Inverter">
        <path class="rails" d="M20 24H120M20 100H120M20 24V45M20 79V100M48 24V38M48 50V76M48 88V100M108 24V38M108 50V76M108 88V100M48 62H61M95 62H108"/>
        <circle class="source" cx="20" cy="62" r="17"/>
        <path class="source-sign" d="M16 56H24M20 52V60M16 69H24"/>
        <path class="load-resistor" d="M61 62L65 59L69 65L73 59L77 65L81 59L85 65L89 59L93 62H95"/>
        <path class="positive-path" d="M20 24H48V62H61L65 59L69 65L73 59L77 65L81 59L85 65L89 59L93 62H95H108V100H20"/>
        <path class="negative-path" d="M20 24H108V62H95L93 62L89 59L85 65L81 59L77 65L73 59L69 65L65 59L61 62H48V100H20"/>
        <path class="switch switch-0" d="M48 38L48 50"/>
        <circle class="pivot" cx="48" cy="38" r="1.5"/>
        <circle class="pivot" cx="48" cy="50" r="1.5"/>
        <path class="switch switch-1" d="M48 76L53 86.909"/>
        <circle class="pivot" cx="48" cy="76" r="1.5"/>
        <circle class="pivot" cx="48" cy="88" r="1.5"/>
        <path class="switch switch-2" d="M108 38L113 48.909"/>
        <circle class="pivot" cx="108" cy="38" r="1.5"/>
        <circle class="pivot" cx="108" cy="50" r="1.5"/>
        <path class="switch switch-3" d="M108 76L108 88"/>
        <circle class="pivot" cx="108" cy="76" r="1.5"/>
        <circle class="pivot" cx="108" cy="88" r="1.5"/>
        <path class="load-direction" d="M78 70H88M85 67L88 70L85 73"/>
        <path class="baseline" d="M20 122H120"/>
        <path class="output-wave" d="M20 114H65V122H70V130H115V122H120"/>
        <g class="wave-marker">
          <circle class="state-dot" cx="20" cy="114" r="2.4"/>
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

if (!customElements.get("concept-h-bridge-inverter")) {
  customElements.define("concept-h-bridge-inverter", ConceptHBridgeInverter);
}
