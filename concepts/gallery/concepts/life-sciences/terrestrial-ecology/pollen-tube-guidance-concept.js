// Pollen Tube Guidance. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPollenTubeGuidance extends HTMLElement {
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
        .ovule {
          fill:none;
          stroke:#759c7b;
          stroke-width:3
        }
        .egg {
          fill:#799774;
          stroke:#b5cda0;
          stroke-width:1
        }
        .synergid {
          fill:#ccaf79;
          stroke:#e5c58c;
          stroke-width:1
        }
        .grain {
          fill:#b69659;
          stroke:#eac575;
          stroke-width:1.5
        }
        .tube {
          fill:none;
          stroke:#9dcd9a;
          stroke-width:5;
          stroke-linecap:round;
          stroke-dasharray:100;
          animation:grow 12s linear infinite
        }
        .lumen {
          fill:none;
          stroke:#395d38;
          stroke-width:2.5;
          stroke-linecap:round;
          stroke-dasharray:100;
          animation:grow 12s linear infinite
        }
        .tip {
          fill:#cbe2a0;
          transform:translate(83px,83px);
          animation:tip 12s linear infinite
        }
        .signal {
          fill:none;
          stroke:#e4c686;
          stroke-width:1;
          stroke-dasharray:1 4;
          opacity:.45;
          animation:signal 12s linear infinite
        }
        .tube-group {
          animation:reset 12s linear infinite
        }
        @keyframes grow {
          0%,5% {
            stroke-dashoffset:100
          }
          75%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        @keyframes signal {
          0%,5% {
            opacity:.05
          }
          20%,65% {
            opacity:.65
          }
          85%,100% {
            opacity:.2
          }
        }
        @keyframes tip {
          0% {
            transform:translate(16px,30px)
          }
          5.0000% {
            transform:translate(16.000px,30.000px)
          }
          6.7049% {
            transform:translate(18.293px,29.730px)
          }
          8.3589% {
            transform:translate(20.523px,29.519px)
          }
          9.9634% {
            transform:translate(22.691px,29.367px)
          }
          11.5199% {
            transform:translate(24.797px,29.272px)
          }
          13.0299% {
            transform:translate(26.842px,29.234px)
          }
          14.4951% {
            transform:translate(28.826px,29.253px)
          }
          15.9171% {
            transform:translate(30.751px,29.327px)
          }
          17.2977% {
            transform:translate(32.616px,29.456px)
          }
          18.6386% {
            transform:translate(34.423px,29.639px)
          }
          19.9417% {
            transform:translate(36.172px,29.875px)
          }
          21.2089% {
            transform:translate(37.864px,30.164px)
          }
          22.4422% {
            transform:translate(39.499px,30.504px)
          }
          23.6437% {
            transform:translate(41.078px,30.895px)
          }
          24.8154% {
            transform:translate(42.603px,31.337px)
          }
          25.9595% {
            transform:translate(44.072px,31.828px)
          }
          27.0782% {
            transform:translate(45.488px,32.368px)
          }
          28.1738% {
            transform:translate(46.850px,32.956px)
          }
          29.2487% {
            transform:translate(48.160px,33.591px)
          }
          30.3051% {
            transform:translate(49.418px,34.273px)
          }
          31.3454% {
            transform:translate(50.625px,35.000px)
          }
          32.3719% {
            transform:translate(51.781px,35.772px)
          }
          33.3871% {
            transform:translate(52.887px,36.589px)
          }
          34.3931% {
            transform:translate(53.944px,37.449px)
          }
          35.3924% {
            transform:translate(54.952px,38.352px)
          }
          36.3870% {
            transform:translate(55.912px,39.297px)
          }
          37.3791% {
            transform:translate(56.825px,40.283px)
          }
          38.3708% {
            transform:translate(57.691px,41.310px)
          }
          39.3641% {
            transform:translate(58.511px,42.376px)
          }
          40.3607% {
            transform:translate(59.286px,43.481px)
          }
          41.3624% {
            transform:translate(60.016px,44.625px)
          }
          42.3709% {
            transform:translate(60.702px,45.806px)
          }
          43.3876% {
            transform:translate(61.344px,47.024px)
          }
          44.4138% {
            transform:translate(61.944px,48.278px)
          }
          45.4509% {
            transform:translate(62.501px,49.567px)
          }
          46.4999% {
            transform:translate(63.018px,50.891px)
          }
          47.5618% {
            transform:translate(63.493px,52.248px)
          }
          48.6375% {
            transform:translate(63.928px,53.638px)
          }
          49.7278% {
            transform:translate(64.324px,55.061px)
          }
          50.8334% {
            transform:translate(64.681px,56.515px)
          }
          51.9547% {
            transform:translate(65.000px,58.000px)
          }
          52.6308% {
            transform:translate(65.234px,58.885px)
          }
          53.2901% {
            transform:translate(65.487px,59.742px)
          }
          53.9337% {
            transform:translate(65.757px,60.570px)
          }
          54.5631% {
            transform:translate(66.044px,61.373px)
          }
          55.1793% {
            transform:translate(66.348px,62.150px)
          }
          55.7836% {
            transform:translate(66.667px,62.904px)
          }
          56.3772% {
            transform:translate(67.002px,63.635px)
          }
          56.9611% {
            transform:translate(67.352px,64.344px)
          }
          57.5365% {
            transform:translate(67.716px,65.033px)
          }
          58.1045% {
            transform:translate(68.094px,65.703px)
          }
          58.6659% {
            transform:translate(68.485px,66.355px)
          }
          59.2218% {
            transform:translate(68.888px,66.991px)
          }
          59.7729% {
            transform:translate(69.303px,67.611px)
          }
          60.3203% {
            transform:translate(69.730px,68.217px)
          }
          60.8646% {
            transform:translate(70.168px,68.811px)
          }
          61.4066% {
            transform:translate(70.616px,69.392px)
          }
          61.9469% {
            transform:translate(71.074px,69.963px)
          }
          62.4863% {
            transform:translate(71.541px,70.525px)
          }
          63.0251% {
            transform:translate(72.016px,71.078px)
          }
          63.5641% {
            transform:translate(72.500px,71.625px)
          }
          64.1037% {
            transform:translate(72.991px,72.166px)
          }
          64.6444% {
            transform:translate(73.489px,72.703px)
          }
          65.1865% {
            transform:translate(73.994px,73.236px)
          }
          65.7306% {
            transform:translate(74.504px,73.768px)
          }
          66.2769% {
            transform:translate(75.020px,74.299px)
          }
          66.8260% {
            transform:translate(75.540px,74.830px)
          }
          67.3780% {
            transform:translate(76.064px,75.363px)
          }
          67.9334% {
            transform:translate(76.592px,75.899px)
          }
          68.4926% {
            transform:translate(77.123px,76.439px)
          }
          69.0558% {
            transform:translate(77.656px,76.984px)
          }
          69.6234% {
            transform:translate(78.191px,77.536px)
          }
          70.1959% {
            transform:translate(78.728px,78.096px)
          }
          70.7736% {
            transform:translate(79.265px,78.665px)
          }
          71.3568% {
            transform:translate(79.803px,79.244px)
          }
          71.9461% {
            transform:translate(80.340px,79.834px)
          }
          72.5419% {
            transform:translate(80.876px,80.437px)
          }
          73.1446% {
            transform:translate(81.411px,81.054px)
          }
          73.7549% {
            transform:translate(81.943px,81.686px)
          }
          74.3731% {
            transform:translate(82.473px,82.334px)
          }
          75.0000% {
            transform:translate(83.000px,83.000px)
          }
          100% {
            transform:translate(83px,83px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pollen Tube Guidance">
        <path class="ovule" d="M84,72.483A26,26 0 1 1 74.483,82"/>
        <ellipse class="egg" cx="99" cy="96" rx="7" ry="8"/>
        <circle class="synergid" cx="87" cy="86" r="4.5"/>
        <circle class="synergid" cx="96" cy="80" r="4.5"/>
        <circle class="signal" cx="87" cy="86" r="10"/>
        <circle class="signal" cx="87" cy="86" r="18"/>
        <g class="tube-group">
          <path class="tube" pathLength="100" d="M16.000,30.000L18.293,29.730L20.523,29.519L22.691,29.367L24.797,29.272L26.842,29.234L28.826,29.253L30.751,29.327L32.616,29.456L34.423,29.639L36.172,29.875L37.864,30.164L39.499,30.504L41.078,30.895L42.603,31.337L44.072,31.828L45.488,32.368L46.850,32.956L48.160,33.591L49.418,34.273L50.625,35.000L51.781,35.772L52.887,36.589L53.944,37.449L54.952,38.352L55.912,39.297L56.825,40.283L57.691,41.310L58.511,42.376L59.286,43.481L60.016,44.625L60.702,45.806L61.344,47.024L61.944,48.278L62.501,49.567L63.018,50.891L63.493,52.248L63.928,53.638L64.324,55.061L64.681,56.515L65.000,58.000L65.234,58.885L65.487,59.742L65.757,60.570L66.044,61.373L66.348,62.150L66.667,62.904L67.002,63.635L67.352,64.344L67.716,65.033L68.094,65.703L68.485,66.355L68.888,66.991L69.303,67.611L69.730,68.217L70.168,68.811L70.616,69.392L71.074,69.963L71.541,70.525L72.016,71.078L72.500,71.625L72.991,72.166L73.489,72.703L73.994,73.236L74.504,73.768L75.020,74.299L75.540,74.830L76.064,75.363L76.592,75.899L77.123,76.439L77.656,76.984L78.191,77.536L78.728,78.096L79.265,78.665L79.803,79.244L80.340,79.834L80.876,80.437L81.411,81.054L81.943,81.686L82.473,82.334L83.000,83.000"/>
          <path class="lumen" pathLength="100" d="M16.000,30.000L18.293,29.730L20.523,29.519L22.691,29.367L24.797,29.272L26.842,29.234L28.826,29.253L30.751,29.327L32.616,29.456L34.423,29.639L36.172,29.875L37.864,30.164L39.499,30.504L41.078,30.895L42.603,31.337L44.072,31.828L45.488,32.368L46.850,32.956L48.160,33.591L49.418,34.273L50.625,35.000L51.781,35.772L52.887,36.589L53.944,37.449L54.952,38.352L55.912,39.297L56.825,40.283L57.691,41.310L58.511,42.376L59.286,43.481L60.016,44.625L60.702,45.806L61.344,47.024L61.944,48.278L62.501,49.567L63.018,50.891L63.493,52.248L63.928,53.638L64.324,55.061L64.681,56.515L65.000,58.000L65.234,58.885L65.487,59.742L65.757,60.570L66.044,61.373L66.348,62.150L66.667,62.904L67.002,63.635L67.352,64.344L67.716,65.033L68.094,65.703L68.485,66.355L68.888,66.991L69.303,67.611L69.730,68.217L70.168,68.811L70.616,69.392L71.074,69.963L71.541,70.525L72.016,71.078L72.500,71.625L72.991,72.166L73.489,72.703L73.994,73.236L74.504,73.768L75.020,74.299L75.540,74.830L76.064,75.363L76.592,75.899L77.123,76.439L77.656,76.984L78.191,77.536L78.728,78.096L79.265,78.665L79.803,79.244L80.340,79.834L80.876,80.437L81.411,81.054L81.943,81.686L82.473,82.334L83.000,83.000"/>
          <circle class="tip" cx="0" cy="0" r="2.5"/>
        </g>
        <circle class="grain" cx="16" cy="30" r="6"/>
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

if (!customElements.get("concept-pollen-tube-guidance")) {
  customElements.define("concept-pollen-tube-guidance", ConceptPollenTubeGuidance);
}
