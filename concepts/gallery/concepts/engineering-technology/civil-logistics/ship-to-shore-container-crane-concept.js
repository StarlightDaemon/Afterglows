// Ship-to-Shore Container Crane. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptShipToShoreContainerCrane extends HTMLElement {
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
        .cargo {
          animation:cargo 16s linear infinite;
        }
        .spreader {
          animation:spreader 16s linear infinite;
        }
        .trolley {
          animation:trolley 16s linear infinite;
        }
        .ropes {
          animation:ropes 16s linear infinite;
        }
        .locks {
          animation:locks 16s linear infinite;
        }
        .locks {
          animation:locks 16s linear infinite;
        }
        .craneEpisode {
          animation:craneEpisode 16s linear infinite;
        }
        @keyframes cargo {
          0% {
            transform:translate(34px,94px);
          }
          2.083% {
            transform:translate(34px,94px);
          }
          4.167% {
            transform:translate(34px,94px);
          }
          6.25% {
            transform:translate(34px,94px);
          }
          8.333% {
            transform:translate(34px,94px);
          }
          10.417% {
            transform:translate(34px,94px);
          }
          12.5% {
            transform:translate(34px,94px);
          }
          14.583% {
            transform:translate(34px,94px);
          }
          16.667% {
            transform:translate(34px,94px);
          }
          18.75% {
            transform:translate(34px,93.803px);
          }
          20.833% {
            transform:translate(34px,91.405px);
          }
          22.917% {
            transform:translate(34px,86.86px);
          }
          25% {
            transform:translate(34px,80.893px);
          }
          27.083% {
            transform:translate(34px,74.229px);
          }
          29.167% {
            transform:translate(34px,67.594px);
          }
          31.25% {
            transform:translate(34px,61.714px);
          }
          33.333% {
            transform:translate(34px,57.314px);
          }
          35.417% {
            transform:translate(34px,55.12px);
          }
          37.5% {
            transform:translate(34.933px,55px);
          }
          39.583% {
            transform:translate(38.954px,55px);
          }
          41.667% {
            transform:translate(45.465px,55px);
          }
          43.75% {
            transform:translate(53.716px,55px);
          }
          45.833% {
            transform:translate(62.956px,55px);
          }
          47.917% {
            transform:translate(72.437px,55px);
          }
          50% {
            transform:translate(81.407px,55px);
          }
          52.083% {
            transform:translate(89.118px,55px);
          }
          54.167% {
            transform:translate(94.819px,55px);
          }
          56.25% {
            transform:translate(97.761px,55px);
          }
          58.333% {
            transform:translate(98px,55.61px);
          }
          60.417% {
            transform:translate(98px,58.682px);
          }
          62.5% {
            transform:translate(98px,63.698px);
          }
          64.583% {
            transform:translate(98px,69.934px);
          }
          66.667% {
            transform:translate(98px,76.663px);
          }
          68.75% {
            transform:translate(98px,83.159px);
          }
          70.833% {
            transform:translate(98px,88.698px);
          }
          72.917% {
            transform:translate(98px,92.554px);
          }
          75% {
            transform:translate(98px,94px);
          }
          77.083% {
            transform:translate(98px,94px);
          }
          79.167% {
            transform:translate(98px,94px);
          }
          81.25% {
            transform:translate(98px,94px);
          }
          83.333% {
            transform:translate(98px,94px);
          }
          85.417% {
            transform:translate(98px,94px);
          }
          87.5% {
            transform:translate(98px,94px);
          }
          89.583% {
            transform:translate(98px,94px);
          }
          91.667% {
            transform:translate(98px,94px);
          }
          93.75% {
            transform:translate(98px,94px);
          }
          95.833% {
            transform:translate(98px,94px);
          }
          97.917% {
            transform:translate(98px,94px);
          }
          100% {
            transform:translate(98px,94px);
          }
        }
        @keyframes spreader {
          0% {
            transform:translate(34px,94px);
          }
          2.083% {
            transform:translate(34px,94px);
          }
          4.167% {
            transform:translate(34px,94px);
          }
          6.25% {
            transform:translate(34px,94px);
          }
          8.333% {
            transform:translate(34px,94px);
          }
          10.417% {
            transform:translate(34px,94px);
          }
          12.5% {
            transform:translate(34px,94px);
          }
          14.583% {
            transform:translate(34px,94px);
          }
          16.667% {
            transform:translate(34px,94px);
          }
          18.75% {
            transform:translate(34px,93.803px);
          }
          20.833% {
            transform:translate(34px,91.405px);
          }
          22.917% {
            transform:translate(34px,86.86px);
          }
          25% {
            transform:translate(34px,80.893px);
          }
          27.083% {
            transform:translate(34px,74.229px);
          }
          29.167% {
            transform:translate(34px,67.594px);
          }
          31.25% {
            transform:translate(34px,61.714px);
          }
          33.333% {
            transform:translate(34px,57.314px);
          }
          35.417% {
            transform:translate(34px,55.12px);
          }
          37.5% {
            transform:translate(34.933px,55px);
          }
          39.583% {
            transform:translate(38.954px,55px);
          }
          41.667% {
            transform:translate(45.465px,55px);
          }
          43.75% {
            transform:translate(53.716px,55px);
          }
          45.833% {
            transform:translate(62.956px,55px);
          }
          47.917% {
            transform:translate(72.437px,55px);
          }
          50% {
            transform:translate(81.407px,55px);
          }
          52.083% {
            transform:translate(89.118px,55px);
          }
          54.167% {
            transform:translate(94.819px,55px);
          }
          56.25% {
            transform:translate(97.761px,55px);
          }
          58.333% {
            transform:translate(98px,55.61px);
          }
          60.417% {
            transform:translate(98px,58.682px);
          }
          62.5% {
            transform:translate(98px,63.698px);
          }
          64.583% {
            transform:translate(98px,69.934px);
          }
          66.667% {
            transform:translate(98px,76.663px);
          }
          68.75% {
            transform:translate(98px,83.159px);
          }
          70.833% {
            transform:translate(98px,88.698px);
          }
          72.917% {
            transform:translate(98px,92.554px);
          }
          75% {
            transform:translate(98px,94px);
          }
          77.083% {
            transform:translate(98px,87.443px);
          }
          79.167% {
            transform:translate(98px,73.282px);
          }
          81.25% {
            transform:translate(98px,59.782px);
          }
          83.333% {
            transform:translate(97.855px,55px);
          }
          85.417% {
            transform:translate(91.258px,55px);
          }
          87.5% {
            transform:translate(77.75px,55px);
          }
          89.583% {
            transform:translate(61.348px,55px);
          }
          91.667% {
            transform:translate(46.071px,55px);
          }
          93.75% {
            transform:translate(35.939px,55px);
          }
          95.833% {
            transform:translate(34px,55px);
          }
          97.917% {
            transform:translate(34px,55px);
          }
          100% {
            transform:translate(34px,55px);
          }
        }
        @keyframes trolley {
          0% {
            transform:translate(34px,0px);
          }
          2.083% {
            transform:translate(34px,0px);
          }
          4.167% {
            transform:translate(34px,0px);
          }
          6.25% {
            transform:translate(34px,0px);
          }
          8.333% {
            transform:translate(34px,0px);
          }
          10.417% {
            transform:translate(34px,0px);
          }
          12.5% {
            transform:translate(34px,0px);
          }
          14.583% {
            transform:translate(34px,0px);
          }
          16.667% {
            transform:translate(34px,0px);
          }
          18.75% {
            transform:translate(34px,0px);
          }
          20.833% {
            transform:translate(34px,0px);
          }
          22.917% {
            transform:translate(34px,0px);
          }
          25% {
            transform:translate(34px,0px);
          }
          27.083% {
            transform:translate(34px,0px);
          }
          29.167% {
            transform:translate(34px,0px);
          }
          31.25% {
            transform:translate(34px,0px);
          }
          33.333% {
            transform:translate(34px,0px);
          }
          35.417% {
            transform:translate(34px,0px);
          }
          37.5% {
            transform:translate(34.933px,0px);
          }
          39.583% {
            transform:translate(38.954px,0px);
          }
          41.667% {
            transform:translate(45.465px,0px);
          }
          43.75% {
            transform:translate(53.716px,0px);
          }
          45.833% {
            transform:translate(62.956px,0px);
          }
          47.917% {
            transform:translate(72.437px,0px);
          }
          50% {
            transform:translate(81.407px,0px);
          }
          52.083% {
            transform:translate(89.118px,0px);
          }
          54.167% {
            transform:translate(94.819px,0px);
          }
          56.25% {
            transform:translate(97.761px,0px);
          }
          58.333% {
            transform:translate(98px,0px);
          }
          60.417% {
            transform:translate(98px,0px);
          }
          62.5% {
            transform:translate(98px,0px);
          }
          64.583% {
            transform:translate(98px,0px);
          }
          66.667% {
            transform:translate(98px,0px);
          }
          68.75% {
            transform:translate(98px,0px);
          }
          70.833% {
            transform:translate(98px,0px);
          }
          72.917% {
            transform:translate(98px,0px);
          }
          75% {
            transform:translate(98px,0px);
          }
          77.083% {
            transform:translate(98px,0px);
          }
          79.167% {
            transform:translate(98px,0px);
          }
          81.25% {
            transform:translate(98px,0px);
          }
          83.333% {
            transform:translate(97.855px,0px);
          }
          85.417% {
            transform:translate(91.258px,0px);
          }
          87.5% {
            transform:translate(77.75px,0px);
          }
          89.583% {
            transform:translate(61.348px,0px);
          }
          91.667% {
            transform:translate(46.071px,0px);
          }
          93.75% {
            transform:translate(35.939px,0px);
          }
          95.833% {
            transform:translate(34px,0px);
          }
          97.917% {
            transform:translate(34px,0px);
          }
          100% {
            transform:translate(34px,0px);
          }
        }
        @keyframes ropes {
          0% {
            d:path('M31 31V91M37 31V91');
          }
          2.083% {
            d:path('M31 31V91M37 31V91');
          }
          4.167% {
            d:path('M31 31V91M37 31V91');
          }
          6.25% {
            d:path('M31 31V91M37 31V91');
          }
          8.333% {
            d:path('M31 31V91M37 31V91');
          }
          10.417% {
            d:path('M31 31V91M37 31V91');
          }
          12.5% {
            d:path('M31 31V91M37 31V91');
          }
          14.583% {
            d:path('M31 31V91M37 31V91');
          }
          16.667% {
            d:path('M31 31V91M37 31V91');
          }
          18.75% {
            d:path('M31 31V90.803M37 31V90.803');
          }
          20.833% {
            d:path('M31 31V88.405M37 31V88.405');
          }
          22.917% {
            d:path('M31 31V83.86M37 31V83.86');
          }
          25% {
            d:path('M31 31V77.893M37 31V77.893');
          }
          27.083% {
            d:path('M31 31V71.229M37 31V71.229');
          }
          29.167% {
            d:path('M31 31V64.594M37 31V64.594');
          }
          31.25% {
            d:path('M31 31V58.714M37 31V58.714');
          }
          33.333% {
            d:path('M31 31V54.314M37 31V54.314');
          }
          35.417% {
            d:path('M31 31V52.12M37 31V52.12');
          }
          37.5% {
            d:path('M31.933 31V52M37.933 31V52');
          }
          39.583% {
            d:path('M35.954 31V52M41.954 31V52');
          }
          41.667% {
            d:path('M42.465 31V52M48.465 31V52');
          }
          43.75% {
            d:path('M50.716 31V52M56.716 31V52');
          }
          45.833% {
            d:path('M59.956 31V52M65.956 31V52');
          }
          47.917% {
            d:path('M69.437 31V52M75.437 31V52');
          }
          50% {
            d:path('M78.407 31V52M84.407 31V52');
          }
          52.083% {
            d:path('M86.118 31V52M92.118 31V52');
          }
          54.167% {
            d:path('M91.819 31V52M97.819 31V52');
          }
          56.25% {
            d:path('M94.761 31V52M100.761 31V52');
          }
          58.333% {
            d:path('M95 31V52.61M101 31V52.61');
          }
          60.417% {
            d:path('M95 31V55.682M101 31V55.682');
          }
          62.5% {
            d:path('M95 31V60.698M101 31V60.698');
          }
          64.583% {
            d:path('M95 31V66.934M101 31V66.934');
          }
          66.667% {
            d:path('M95 31V73.663M101 31V73.663');
          }
          68.75% {
            d:path('M95 31V80.159M101 31V80.159');
          }
          70.833% {
            d:path('M95 31V85.698M101 31V85.698');
          }
          72.917% {
            d:path('M95 31V89.554M101 31V89.554');
          }
          75% {
            d:path('M95 31V91M101 31V91');
          }
          77.083% {
            d:path('M95 31V84.443M101 31V84.443');
          }
          79.167% {
            d:path('M95 31V70.282M101 31V70.282');
          }
          81.25% {
            d:path('M95 31V56.782M101 31V56.782');
          }
          83.333% {
            d:path('M94.855 31V52M100.855 31V52');
          }
          85.417% {
            d:path('M88.258 31V52M94.258 31V52');
          }
          87.5% {
            d:path('M74.75 31V52M80.75 31V52');
          }
          89.583% {
            d:path('M58.348 31V52M64.348 31V52');
          }
          91.667% {
            d:path('M43.071 31V52M49.071 31V52');
          }
          93.75% {
            d:path('M32.939 31V52M38.939 31V52');
          }
          95.833% {
            d:path('M31 31V52M37 31V52');
          }
          97.917% {
            d:path('M31 31V52M37 31V52');
          }
          100% {
            d:path('M31 31V52M37 31V52');
          }
        }
        @keyframes locks {
          0% {
            transform:translate(34px,94px);
            opacity:0;
          }
          2.083% {
            transform:translate(34px,94px);
            opacity:0;
          }
          4.167% {
            transform:translate(34px,94px);
            opacity:0;
          }
          6.25% {
            transform:translate(34px,94px);
            opacity:0.007;
          }
          8.333% {
            transform:translate(34px,94px);
            opacity:0.45;
          }
          10.417% {
            transform:translate(34px,94px);
            opacity:0.962;
          }
          12.5% {
            transform:translate(34px,94px);
            opacity:1;
          }
          14.583% {
            transform:translate(34px,94px);
            opacity:1;
          }
          16.667% {
            transform:translate(34px,94px);
            opacity:1;
          }
          18.75% {
            transform:translate(34px,93.803px);
            opacity:1;
          }
          20.833% {
            transform:translate(34px,91.405px);
            opacity:1;
          }
          22.917% {
            transform:translate(34px,86.86px);
            opacity:1;
          }
          25% {
            transform:translate(34px,80.893px);
            opacity:1;
          }
          27.083% {
            transform:translate(34px,74.229px);
            opacity:1;
          }
          29.167% {
            transform:translate(34px,67.594px);
            opacity:1;
          }
          31.25% {
            transform:translate(34px,61.714px);
            opacity:1;
          }
          33.333% {
            transform:translate(34px,57.314px);
            opacity:1;
          }
          35.417% {
            transform:translate(34px,55.12px);
            opacity:1;
          }
          37.5% {
            transform:translate(34.933px,55px);
            opacity:1;
          }
          39.583% {
            transform:translate(38.954px,55px);
            opacity:1;
          }
          41.667% {
            transform:translate(45.465px,55px);
            opacity:1;
          }
          43.75% {
            transform:translate(53.716px,55px);
            opacity:1;
          }
          45.833% {
            transform:translate(62.956px,55px);
            opacity:1;
          }
          47.917% {
            transform:translate(72.437px,55px);
            opacity:1;
          }
          50% {
            transform:translate(81.407px,55px);
            opacity:1;
          }
          52.083% {
            transform:translate(89.118px,55px);
            opacity:1;
          }
          54.167% {
            transform:translate(94.819px,55px);
            opacity:1;
          }
          56.25% {
            transform:translate(97.761px,55px);
            opacity:1;
          }
          58.333% {
            transform:translate(98px,55.61px);
            opacity:1;
          }
          60.417% {
            transform:translate(98px,58.682px);
            opacity:1;
          }
          62.5% {
            transform:translate(98px,63.698px);
            opacity:1;
          }
          64.583% {
            transform:translate(98px,69.934px);
            opacity:1;
          }
          66.667% {
            transform:translate(98px,76.663px);
            opacity:1;
          }
          68.75% {
            transform:translate(98px,83.159px);
            opacity:1;
          }
          70.833% {
            transform:translate(98px,88.698px);
            opacity:1;
          }
          72.917% {
            transform:translate(98px,92.554px);
            opacity:1;
          }
          75% {
            transform:translate(98px,94px);
            opacity:0;
          }
          77.083% {
            transform:translate(98px,87.443px);
            opacity:0;
          }
          79.167% {
            transform:translate(98px,73.282px);
            opacity:0;
          }
          81.25% {
            transform:translate(98px,59.782px);
            opacity:0;
          }
          83.333% {
            transform:translate(97.855px,55px);
            opacity:0;
          }
          85.417% {
            transform:translate(91.258px,55px);
            opacity:0;
          }
          87.5% {
            transform:translate(77.75px,55px);
            opacity:0;
          }
          89.583% {
            transform:translate(61.348px,55px);
            opacity:0;
          }
          91.667% {
            transform:translate(46.071px,55px);
            opacity:0;
          }
          93.75% {
            transform:translate(35.939px,55px);
            opacity:0;
          }
          95.833% {
            transform:translate(34px,55px);
            opacity:0;
          }
          97.917% {
            transform:translate(34px,55px);
            opacity:0;
          }
          100% {
            transform:translate(34px,55px);
            opacity:0;
          }
        }
        @keyframes craneEpisode {
          0% {
            opacity:1;
          }
          2.083% {
            opacity:1;
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
            opacity:1;
          }
          50% {
            opacity:1;
          }
          52.083% {
            opacity:1;
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
          .cargo {
            transform:translate(98px,94px);
          }
          .spreader {
            transform:translate(98px,94px);
          }
          .trolley {
            transform:translate(98px,0px);
          }
          .ropes {
            d:path('M95 31V91M101 31V91');
          }
          .locks {
            transform:translate(98px,94px);
            opacity:0;
          }
          .craneEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ship-to-Shore Container Crane">
        <g class="craneEpisode">
          <path d="M8 109H65L58 119H18Z" fill="#416562" stroke="#9caaa0"/>
          <path d="M8 125Q36 120 65 125" fill="none" stroke="#3e8a9b"/>
          <rect x="72" y="109" width="60" height="18" fill="#515e51"/>
          <rect x="118" y="24" width="5" height="85" fill="#89a89c"/>
          <path d="M16 29H127M119 31L77 11 38 29M118 55L127 104" fill="none" stroke="#9ab6a6" stroke-width="3"/>
          <rect x="76" y="106" width="39" height="3" fill="#829d8b"/>
          <circle cx="82" cy="111" r="3" fill="#152d28" stroke="#abc0a5"/>
          <circle cx="108" cy="111" r="3" fill="#152d28" stroke="#abc0a5"/>
          <rect x="22" y="105" width="24" height="3" fill="#927c59"/>
          <g class="cargo">
            <rect x="-10" y="0" width="20" height="12" fill="#c49b62" stroke="#ecd098"/>
            <path d="M-7 2L-7 10" stroke="#866f48"/>
            <path d="M-3.5 2L-3.5 10" stroke="#866f48"/>
            <path d="M0 2L0 10" stroke="#866f48"/>
            <path d="M3.5 2L3.5 10" stroke="#866f48"/>
            <path d="M7 2L7 10" stroke="#866f48"/>
          </g>
          <g class="spreader">
            <rect x="-11" y="-3" width="22" height="3" fill="#a7c2b0"/>
          </g>
          <rect x="-5" y="24" width="10" height="7" class="trolley" fill="#d3c894"/>
          <path d="M31 31V91M37 31V91" class="ropes" stroke="#c0cbb4" stroke-width="1"/>
          <g class="locks">
            <path d="M-10 -1v4h3M10 -1v4H7" fill="none" stroke="#f1d990" stroke-width="1.3"/>
          </g>
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

if (!customElements.get("concept-ship-to-shore-container-crane")) {
  customElements.define("concept-ship-to-shore-container-crane", ConceptShipToShoreContainerCrane);
}
