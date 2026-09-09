// Public Goods Free Riding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPublicGoodsFreeRiding extends HTMLElement {
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
        .contribution0 {
          animation:contribution0 16s linear infinite;
        }
        .contribution0 {
          animation:contribution0 16s linear infinite;
        }
        .contribution1 {
          animation:contribution1 16s linear infinite;
        }
        .contribution1 {
          animation:contribution1 16s linear infinite;
        }
        .contribution2 {
          animation:contribution2 16s linear infinite;
        }
        .contribution2 {
          animation:contribution2 16s linear infinite;
        }
        .contribution3 {
          animation:contribution3 16s linear infinite;
        }
        .contribution3 {
          animation:contribution3 16s linear infinite;
        }
        .light {
          animation:light 16s linear infinite;
        }
        .publicEpisode {
          animation:publicEpisode 16s linear infinite;
        }
        @keyframes contribution0 {
          0% {
            transform:translate(20px,84px);
            opacity:1;
          }
          2.083% {
            transform:translate(20px,84px);
            opacity:1;
          }
          4.167% {
            transform:translate(20px,84px);
            opacity:1;
          }
          6.25% {
            transform:translate(20.986px,84px);
            opacity:1;
          }
          8.333% {
            transform:translate(26.441px,84px);
            opacity:1;
          }
          10.417% {
            transform:translate(35.512px,84px);
            opacity:1;
          }
          12.5% {
            transform:translate(46.868px,84px);
            opacity:1;
          }
          14.583% {
            transform:translate(59.182px,84px);
            opacity:1;
          }
          16.667% {
            transform:translate(70px,84.943px);
            opacity:1;
          }
          18.75% {
            transform:translate(70px,93.545px);
            opacity:1;
          }
          20.833% {
            transform:translate(70px,99.601px);
            opacity:0.961;
          }
          22.917% {
            transform:translate(70px,101.996px);
            opacity:0.624;
          }
          25% {
            transform:translate(70px,102px);
            opacity:0.198;
          }
          27.083% {
            transform:translate(70px,102px);
            opacity:0;
          }
          29.167% {
            transform:translate(70px,102px);
            opacity:0;
          }
          31.25% {
            transform:translate(70px,102px);
            opacity:0;
          }
          33.333% {
            transform:translate(70px,102px);
            opacity:0;
          }
          35.417% {
            transform:translate(70px,102px);
            opacity:0;
          }
          37.5% {
            transform:translate(70px,102px);
            opacity:0;
          }
          39.583% {
            transform:translate(70px,102px);
            opacity:0;
          }
          41.667% {
            transform:translate(70px,102px);
            opacity:0;
          }
          43.75% {
            transform:translate(70px,102px);
            opacity:0;
          }
          45.833% {
            transform:translate(70px,102px);
            opacity:0;
          }
          47.917% {
            transform:translate(70px,102px);
            opacity:0;
            opacity:0;
          }
          50% {
            transform:translate(20px,84px);
            opacity:1;
            opacity:0;
          }
          52.083% {
            transform:translate(20px,84px);
            opacity:1;
          }
          54.167% {
            transform:translate(20px,84px);
            opacity:1;
          }
          56.25% {
            transform:translate(20.986px,84px);
            opacity:1;
          }
          58.333% {
            transform:translate(26.441px,84px);
            opacity:1;
          }
          60.417% {
            transform:translate(35.512px,84px);
            opacity:1;
          }
          62.5% {
            transform:translate(46.868px,84px);
            opacity:1;
          }
          64.583% {
            transform:translate(59.182px,84px);
            opacity:1;
          }
          66.667% {
            transform:translate(70px,84.943px);
            opacity:1;
          }
          68.75% {
            transform:translate(70px,93.545px);
            opacity:1;
          }
          70.833% {
            transform:translate(70px,99.601px);
            opacity:0.961;
          }
          72.917% {
            transform:translate(70px,101.996px);
            opacity:0.624;
          }
          75% {
            transform:translate(70px,102px);
            opacity:0.198;
          }
          77.083% {
            transform:translate(70px,102px);
            opacity:0;
          }
          79.167% {
            transform:translate(70px,102px);
            opacity:0;
          }
          81.25% {
            transform:translate(70px,102px);
            opacity:0;
          }
          83.333% {
            transform:translate(70px,102px);
            opacity:0;
          }
          85.417% {
            transform:translate(70px,102px);
            opacity:0;
          }
          87.5% {
            transform:translate(70px,102px);
            opacity:0;
          }
          89.583% {
            transform:translate(70px,102px);
            opacity:0;
          }
          91.667% {
            transform:translate(70px,102px);
            opacity:0;
          }
          93.75% {
            transform:translate(70px,102px);
            opacity:0;
          }
          95.833% {
            transform:translate(70px,102px);
            opacity:0;
          }
          97.917% {
            transform:translate(70px,102px);
            opacity:0;
            opacity:0;
          }
          100% {
            transform:translate(20px,84px);
            opacity:1;
            opacity:0;
          }
        }
        @keyframes contribution1 {
          0% {
            transform:translate(53px,84px);
            opacity:1;
          }
          2.083% {
            transform:translate(53px,84px);
            opacity:1;
          }
          4.167% {
            transform:translate(53px,84px);
            opacity:1;
          }
          6.25% {
            transform:translate(53.335px,84px);
            opacity:1;
          }
          8.333% {
            transform:translate(55.19px,84px);
            opacity:1;
          }
          10.417% {
            transform:translate(58.274px,84px);
            opacity:1;
          }
          12.5% {
            transform:translate(62.135px,84px);
            opacity:1;
          }
          14.583% {
            transform:translate(66.322px,84px);
            opacity:1;
          }
          16.667% {
            transform:translate(70px,84.943px);
            opacity:1;
          }
          18.75% {
            transform:translate(70px,93.545px);
            opacity:1;
          }
          20.833% {
            transform:translate(70px,99.601px);
            opacity:0.961;
          }
          22.917% {
            transform:translate(70px,101.996px);
            opacity:0.624;
          }
          25% {
            transform:translate(70px,102px);
            opacity:0.198;
          }
          27.083% {
            transform:translate(70px,102px);
            opacity:0;
          }
          29.167% {
            transform:translate(70px,102px);
            opacity:0;
          }
          31.25% {
            transform:translate(70px,102px);
            opacity:0;
          }
          33.333% {
            transform:translate(70px,102px);
            opacity:0;
          }
          35.417% {
            transform:translate(70px,102px);
            opacity:0;
          }
          37.5% {
            transform:translate(70px,102px);
            opacity:0;
          }
          39.583% {
            transform:translate(70px,102px);
            opacity:0;
          }
          41.667% {
            transform:translate(70px,102px);
            opacity:0;
          }
          43.75% {
            transform:translate(70px,102px);
            opacity:0;
          }
          45.833% {
            transform:translate(70px,102px);
            opacity:0;
          }
          47.917% {
            transform:translate(70px,102px);
            opacity:0;
          }
          50% {
            transform:translate(53px,84px);
            opacity:1;
          }
          52.083% {
            transform:translate(53px,84px);
            opacity:1;
          }
          54.167% {
            transform:translate(53px,84px);
            opacity:1;
          }
          56.25% {
            transform:translate(53px,84px);
            opacity:1;
          }
          58.333% {
            transform:translate(53px,84px);
            opacity:1;
          }
          60.417% {
            transform:translate(53px,84px);
            opacity:1;
          }
          62.5% {
            transform:translate(53px,84px);
            opacity:1;
          }
          64.583% {
            transform:translate(53px,84px);
            opacity:1;
          }
          66.667% {
            transform:translate(53px,84px);
            opacity:1;
          }
          68.75% {
            transform:translate(53px,84px);
            opacity:1;
          }
          70.833% {
            transform:translate(53px,84px);
            opacity:1;
          }
          72.917% {
            transform:translate(53px,84px);
            opacity:1;
          }
          75% {
            transform:translate(53px,84px);
            opacity:1;
          }
          77.083% {
            transform:translate(53px,84px);
            opacity:1;
          }
          79.167% {
            transform:translate(53px,84px);
            opacity:1;
          }
          81.25% {
            transform:translate(53px,84px);
            opacity:1;
          }
          83.333% {
            transform:translate(53px,84px);
            opacity:1;
          }
          85.417% {
            transform:translate(53px,84px);
            opacity:1;
          }
          87.5% {
            transform:translate(53px,84px);
            opacity:1;
          }
          89.583% {
            transform:translate(53px,84px);
            opacity:1;
          }
          91.667% {
            transform:translate(53px,84px);
            opacity:1;
          }
          93.75% {
            transform:translate(53px,84px);
            opacity:1;
          }
          95.833% {
            transform:translate(53px,84px);
            opacity:1;
          }
          97.917% {
            transform:translate(53px,84px);
            opacity:1;
          }
          100% {
            transform:translate(53px,84px);
            opacity:1;
          }
        }
        @keyframes contribution2 {
          0% {
            transform:translate(86px,84px);
            opacity:1;
          }
          2.083% {
            transform:translate(86px,84px);
            opacity:1;
          }
          4.167% {
            transform:translate(86px,84px);
            opacity:1;
          }
          6.25% {
            transform:translate(85.685px,84px);
            opacity:1;
          }
          8.333% {
            transform:translate(83.939px,84px);
            opacity:1;
          }
          10.417% {
            transform:translate(81.036px,84px);
            opacity:1;
          }
          12.5% {
            transform:translate(77.402px,84px);
            opacity:1;
          }
          14.583% {
            transform:translate(73.462px,84px);
            opacity:1;
          }
          16.667% {
            transform:translate(70px,84.943px);
            opacity:1;
          }
          18.75% {
            transform:translate(70px,93.545px);
            opacity:1;
          }
          20.833% {
            transform:translate(70px,99.601px);
            opacity:0.961;
          }
          22.917% {
            transform:translate(70px,101.996px);
            opacity:0.624;
          }
          25% {
            transform:translate(70px,102px);
            opacity:0.198;
          }
          27.083% {
            transform:translate(70px,102px);
            opacity:0;
          }
          29.167% {
            transform:translate(70px,102px);
            opacity:0;
          }
          31.25% {
            transform:translate(70px,102px);
            opacity:0;
          }
          33.333% {
            transform:translate(70px,102px);
            opacity:0;
          }
          35.417% {
            transform:translate(70px,102px);
            opacity:0;
          }
          37.5% {
            transform:translate(70px,102px);
            opacity:0;
          }
          39.583% {
            transform:translate(70px,102px);
            opacity:0;
          }
          41.667% {
            transform:translate(70px,102px);
            opacity:0;
          }
          43.75% {
            transform:translate(70px,102px);
            opacity:0;
          }
          45.833% {
            transform:translate(70px,102px);
            opacity:0;
          }
          47.917% {
            transform:translate(70px,102px);
            opacity:0;
          }
          50% {
            transform:translate(86px,84px);
            opacity:1;
          }
          52.083% {
            transform:translate(86px,84px);
            opacity:1;
          }
          54.167% {
            transform:translate(86px,84px);
            opacity:1;
          }
          56.25% {
            transform:translate(86px,84px);
            opacity:1;
          }
          58.333% {
            transform:translate(86px,84px);
            opacity:1;
          }
          60.417% {
            transform:translate(86px,84px);
            opacity:1;
          }
          62.5% {
            transform:translate(86px,84px);
            opacity:1;
          }
          64.583% {
            transform:translate(86px,84px);
            opacity:1;
          }
          66.667% {
            transform:translate(86px,84px);
            opacity:1;
          }
          68.75% {
            transform:translate(86px,84px);
            opacity:1;
          }
          70.833% {
            transform:translate(86px,84px);
            opacity:1;
          }
          72.917% {
            transform:translate(86px,84px);
            opacity:1;
          }
          75% {
            transform:translate(86px,84px);
            opacity:1;
          }
          77.083% {
            transform:translate(86px,84px);
            opacity:1;
          }
          79.167% {
            transform:translate(86px,84px);
            opacity:1;
          }
          81.25% {
            transform:translate(86px,84px);
            opacity:1;
          }
          83.333% {
            transform:translate(86px,84px);
            opacity:1;
          }
          85.417% {
            transform:translate(86px,84px);
            opacity:1;
          }
          87.5% {
            transform:translate(86px,84px);
            opacity:1;
          }
          89.583% {
            transform:translate(86px,84px);
            opacity:1;
          }
          91.667% {
            transform:translate(86px,84px);
            opacity:1;
          }
          93.75% {
            transform:translate(86px,84px);
            opacity:1;
          }
          95.833% {
            transform:translate(86px,84px);
            opacity:1;
          }
          97.917% {
            transform:translate(86px,84px);
            opacity:1;
          }
          100% {
            transform:translate(86px,84px);
            opacity:1;
          }
        }
        @keyframes contribution3 {
          0% {
            transform:translate(119px,84px);
            opacity:1;
          }
          2.083% {
            transform:translate(119px,84px);
            opacity:1;
          }
          4.167% {
            transform:translate(119px,84px);
            opacity:1;
          }
          6.25% {
            transform:translate(119px,84px);
            opacity:1;
          }
          8.333% {
            transform:translate(119px,84px);
            opacity:1;
          }
          10.417% {
            transform:translate(119px,84px);
            opacity:1;
          }
          12.5% {
            transform:translate(119px,84px);
            opacity:1;
          }
          14.583% {
            transform:translate(119px,84px);
            opacity:1;
          }
          16.667% {
            transform:translate(119px,84px);
            opacity:1;
          }
          18.75% {
            transform:translate(119px,84px);
            opacity:1;
          }
          20.833% {
            transform:translate(119px,84px);
            opacity:1;
          }
          22.917% {
            transform:translate(119px,84px);
            opacity:1;
          }
          25% {
            transform:translate(119px,84px);
            opacity:1;
          }
          27.083% {
            transform:translate(119px,84px);
            opacity:1;
          }
          29.167% {
            transform:translate(119px,84px);
            opacity:1;
          }
          31.25% {
            transform:translate(119px,84px);
            opacity:1;
          }
          33.333% {
            transform:translate(119px,84px);
            opacity:1;
          }
          35.417% {
            transform:translate(119px,84px);
            opacity:1;
          }
          37.5% {
            transform:translate(119px,84px);
            opacity:1;
          }
          39.583% {
            transform:translate(119px,84px);
            opacity:1;
          }
          41.667% {
            transform:translate(119px,84px);
            opacity:1;
          }
          43.75% {
            transform:translate(119px,84px);
            opacity:1;
          }
          45.833% {
            transform:translate(119px,84px);
            opacity:1;
          }
          47.917% {
            transform:translate(119px,84px);
            opacity:1;
          }
          50% {
            transform:translate(119px,84px);
            opacity:1;
          }
          52.083% {
            transform:translate(119px,84px);
            opacity:1;
          }
          54.167% {
            transform:translate(119px,84px);
            opacity:1;
          }
          56.25% {
            transform:translate(119px,84px);
            opacity:1;
          }
          58.333% {
            transform:translate(119px,84px);
            opacity:1;
          }
          60.417% {
            transform:translate(119px,84px);
            opacity:1;
          }
          62.5% {
            transform:translate(119px,84px);
            opacity:1;
          }
          64.583% {
            transform:translate(119px,84px);
            opacity:1;
          }
          66.667% {
            transform:translate(119px,84px);
            opacity:1;
          }
          68.75% {
            transform:translate(119px,84px);
            opacity:1;
          }
          70.833% {
            transform:translate(119px,84px);
            opacity:1;
          }
          72.917% {
            transform:translate(119px,84px);
            opacity:1;
          }
          75% {
            transform:translate(119px,84px);
            opacity:1;
          }
          77.083% {
            transform:translate(119px,84px);
            opacity:1;
          }
          79.167% {
            transform:translate(119px,84px);
            opacity:1;
          }
          81.25% {
            transform:translate(119px,84px);
            opacity:1;
          }
          83.333% {
            transform:translate(119px,84px);
            opacity:1;
          }
          85.417% {
            transform:translate(119px,84px);
            opacity:1;
          }
          87.5% {
            transform:translate(119px,84px);
            opacity:1;
          }
          89.583% {
            transform:translate(119px,84px);
            opacity:1;
          }
          91.667% {
            transform:translate(119px,84px);
            opacity:1;
          }
          93.75% {
            transform:translate(119px,84px);
            opacity:1;
          }
          95.833% {
            transform:translate(119px,84px);
            opacity:1;
          }
          97.917% {
            transform:translate(119px,84px);
            opacity:1;
          }
          100% {
            transform:translate(119px,84px);
            opacity:1;
          }
        }
        @keyframes light {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0.007;
          }
          20.833% {
            opacity:0.078;
          }
          22.917% {
            opacity:0.181;
          }
          25% {
            opacity:0.258;
          }
          27.083% {
            opacity:0.27;
          }
          29.167% {
            opacity:0.27;
          }
          31.25% {
            opacity:0.27;
          }
          33.333% {
            opacity:0.27;
          }
          35.417% {
            opacity:0.27;
          }
          37.5% {
            opacity:0.27;
          }
          39.583% {
            opacity:0.27;
          }
          41.667% {
            opacity:0.27;
          }
          43.75% {
            opacity:0.27;
          }
          45.833% {
            opacity:0.27;
          }
          47.917% {
            opacity:0.27;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
          }
          60.417% {
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          66.667% {
            opacity:0;
          }
          68.75% {
            opacity:0.002;
          }
          70.833% {
            opacity:0.026;
          }
          72.917% {
            opacity:0.06;
          }
          75% {
            opacity:0.086;
          }
          77.083% {
            opacity:0.09;
          }
          79.167% {
            opacity:0.09;
          }
          81.25% {
            opacity:0.09;
          }
          83.333% {
            opacity:0.09;
          }
          85.417% {
            opacity:0.09;
          }
          87.5% {
            opacity:0.09;
          }
          89.583% {
            opacity:0.09;
          }
          91.667% {
            opacity:0.09;
          }
          93.75% {
            opacity:0.09;
          }
          95.833% {
            opacity:0.09;
          }
          97.917% {
            opacity:0.09;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes publicEpisode {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0.926;
          }
          4.167% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          47.917% {
            opacity:0.531;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0.926;
          }
          54.167% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          97.917% {
            opacity:0.531;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .contribution0 {
            transform:translate(70px,102px);
            opacity:0.198;
          }
          .contribution1 {
            transform:translate(53px,84px);
            opacity:1;
          }
          .contribution2 {
            transform:translate(86px,84px);
            opacity:1;
          }
          .contribution3 {
            transform:translate(119px,84px);
            opacity:1;
          }
          .light {
            opacity:0.086;
          }
          .publicEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Public Goods Free Riding">
        <g class="publicEpisode">
          <path d="M70 27L15 122H125Z" class="light" fill="#d8c67e" opacity=".2"/>
          <path d="M70 29L70 109" stroke="#a7b395" stroke-width="3"/>
          <path d="M61 29Q70 14 79 29Z" fill="#c6c99c"/>
          <rect x="61" y="108" width="18" height="11" fill="#617b5b"/>
          <path d="M11 101L20 92  29 101V117H11Z" fill="#426449" stroke="#9cb68b"/>
          <rect x="18" y="107" width="4" height="10" fill="#233e30"/>
          <circle cx="0" cy="0" r="2.5" class="contribution0" fill="#e1c87d"/>
          <path d="M44 101L53 92  62 101V117H44Z" fill="#426449" stroke="#9cb68b"/>
          <rect x="51" y="107" width="4" height="10" fill="#233e30"/>
          <circle cx="0" cy="0" r="2.5" class="contribution1" fill="#e1c87d"/>
          <path d="M77 101L86 92  95 101V117H77Z" fill="#426449" stroke="#9cb68b"/>
          <rect x="84" y="107" width="4" height="10" fill="#233e30"/>
          <circle cx="0" cy="0" r="2.5" class="contribution2" fill="#e1c87d"/>
          <path d="M110 101L119 92  128 101V117H110Z" fill="#426449" stroke="#9cb68b"/>
          <rect x="117" y="107" width="4" height="10" fill="#233e30"/>
          <circle cx="0" cy="0" r="2.5" class="contribution3" fill="#e1c87d"/>
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

if (!customElements.get("concept-public-goods-free-riding")) {
  customElements.define("concept-public-goods-free-riding", ConceptPublicGoodsFreeRiding);
}
