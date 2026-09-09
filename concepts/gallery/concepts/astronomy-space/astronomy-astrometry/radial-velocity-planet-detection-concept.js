// Radial-Velocity Planet Detection. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRadialVelocityPlanetDetection extends HTMLElement {
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
        .star {
          animation:star 16s linear infinite;
        }
        .planet {
          animation:planet 16s linear infinite;
        }
        .rvCursor {
          animation:rvCursor 16s linear infinite;
        }
        .line0 {
          animation:line0 16s linear infinite;
        }
        .line1 {
          animation:line1 16s linear infinite;
        }
        .line2 {
          animation:line2 16s linear infinite;
        }
        @keyframes star {
          0% {
            transform:translate(75px,29px);
          }
          2.083% {
            transform:translate(74.957px,29.261px);
          }
          4.167% {
            transform:translate(74.83px,29.518px);
          }
          6.25% {
            transform:translate(74.619px,29.765px);
          }
          8.333% {
            transform:translate(74.33px,30px);
          }
          10.417% {
            transform:translate(73.967px,30.218px);
          }
          12.5% {
            transform:translate(73.536px,30.414px);
          }
          14.583% {
            transform:translate(73.044px,30.587px);
          }
          16.667% {
            transform:translate(72.5px,30.732px);
          }
          18.75% {
            transform:translate(71.913px,30.848px);
          }
          20.833% {
            transform:translate(71.294px,30.932px);
          }
          22.917% {
            transform:translate(70.653px,30.983px);
          }
          25% {
            transform:translate(70px,31px);
          }
          27.083% {
            transform:translate(69.347px,30.983px);
          }
          29.167% {
            transform:translate(68.706px,30.932px);
          }
          31.25% {
            transform:translate(68.087px,30.848px);
          }
          33.333% {
            transform:translate(67.5px,30.732px);
          }
          35.417% {
            transform:translate(66.956px,30.587px);
          }
          37.5% {
            transform:translate(66.464px,30.414px);
          }
          39.583% {
            transform:translate(66.033px,30.218px);
          }
          41.667% {
            transform:translate(65.67px,30px);
          }
          43.75% {
            transform:translate(65.381px,29.765px);
          }
          45.833% {
            transform:translate(65.17px,29.518px);
          }
          47.917% {
            transform:translate(65.043px,29.261px);
          }
          50% {
            transform:translate(65px,29px);
          }
          52.083% {
            transform:translate(65.043px,28.739px);
          }
          54.167% {
            transform:translate(65.17px,28.482px);
          }
          56.25% {
            transform:translate(65.381px,28.235px);
          }
          58.333% {
            transform:translate(65.67px,28px);
          }
          60.417% {
            transform:translate(66.033px,27.782px);
          }
          62.5% {
            transform:translate(66.464px,27.586px);
          }
          64.583% {
            transform:translate(66.956px,27.413px);
          }
          66.667% {
            transform:translate(67.5px,27.268px);
          }
          68.75% {
            transform:translate(68.087px,27.152px);
          }
          70.833% {
            transform:translate(68.706px,27.068px);
          }
          72.917% {
            transform:translate(69.347px,27.017px);
          }
          75% {
            transform:translate(70px,27px);
          }
          77.083% {
            transform:translate(70.653px,27.017px);
          }
          79.167% {
            transform:translate(71.294px,27.068px);
          }
          81.25% {
            transform:translate(71.913px,27.152px);
          }
          83.333% {
            transform:translate(72.5px,27.268px);
          }
          85.417% {
            transform:translate(73.044px,27.413px);
          }
          87.5% {
            transform:translate(73.536px,27.586px);
          }
          89.583% {
            transform:translate(73.967px,27.782px);
          }
          91.667% {
            transform:translate(74.33px,28px);
          }
          93.75% {
            transform:translate(74.619px,28.235px);
          }
          95.833% {
            transform:translate(74.83px,28.482px);
          }
          97.917% {
            transform:translate(74.957px,28.739px);
          }
          100% {
            transform:translate(75px,29px);
          }
        }
        @keyframes planet {
          0% {
            transform:translate(49px,29px);
          }
          2.083% {
            transform:translate(49.18px,27.904px);
          }
          4.167% {
            transform:translate(49.716px,26.826px);
          }
          6.25% {
            transform:translate(50.599px,25.785px);
          }
          8.333% {
            transform:translate(51.813px,24.8px);
          }
          10.417% {
            transform:translate(53.34px,23.886px);
          }
          12.5% {
            transform:translate(55.151px,23.06px);
          }
          14.583% {
            transform:translate(57.216px,22.336px);
          }
          16.667% {
            transform:translate(59.5px,21.725px);
          }
          18.75% {
            transform:translate(61.964px,21.239px);
          }
          20.833% {
            transform:translate(64.565px,20.886px);
          }
          22.917% {
            transform:translate(67.259px,20.672px);
          }
          25% {
            transform:translate(70px,20.6px);
          }
          27.083% {
            transform:translate(72.741px,20.672px);
          }
          29.167% {
            transform:translate(75.435px,20.886px);
          }
          31.25% {
            transform:translate(78.036px,21.239px);
          }
          33.333% {
            transform:translate(80.5px,21.725px);
          }
          35.417% {
            transform:translate(82.784px,22.336px);
          }
          37.5% {
            transform:translate(84.849px,23.06px);
          }
          39.583% {
            transform:translate(86.66px,23.886px);
          }
          41.667% {
            transform:translate(88.187px,24.8px);
          }
          43.75% {
            transform:translate(89.401px,25.785px);
          }
          45.833% {
            transform:translate(90.284px,26.826px);
          }
          47.917% {
            transform:translate(90.82px,27.904px);
          }
          50% {
            transform:translate(91px,29px);
          }
          52.083% {
            transform:translate(90.82px,30.096px);
          }
          54.167% {
            transform:translate(90.284px,31.174px);
          }
          56.25% {
            transform:translate(89.401px,32.215px);
          }
          58.333% {
            transform:translate(88.187px,33.2px);
          }
          60.417% {
            transform:translate(86.66px,34.114px);
          }
          62.5% {
            transform:translate(84.849px,34.94px);
          }
          64.583% {
            transform:translate(82.784px,35.664px);
          }
          66.667% {
            transform:translate(80.5px,36.275px);
          }
          68.75% {
            transform:translate(78.036px,36.761px);
          }
          70.833% {
            transform:translate(75.435px,37.114px);
          }
          72.917% {
            transform:translate(72.741px,37.328px);
          }
          75% {
            transform:translate(70px,37.4px);
          }
          77.083% {
            transform:translate(67.259px,37.328px);
          }
          79.167% {
            transform:translate(64.565px,37.114px);
          }
          81.25% {
            transform:translate(61.964px,36.761px);
          }
          83.333% {
            transform:translate(59.5px,36.275px);
          }
          85.417% {
            transform:translate(57.216px,35.664px);
          }
          87.5% {
            transform:translate(55.151px,34.94px);
          }
          89.583% {
            transform:translate(53.34px,34.114px);
          }
          91.667% {
            transform:translate(51.813px,33.2px);
          }
          93.75% {
            transform:translate(50.599px,32.215px);
          }
          95.833% {
            transform:translate(49.716px,31.174px);
          }
          97.917% {
            transform:translate(49.18px,30.096px);
          }
          100% {
            transform:translate(49px,29px);
          }
        }
        @keyframes rvCursor {
          0% {
            transform:translate(16px,105px);
          }
          2.083% {
            transform:translate(18.25px,106.697px);
          }
          4.167% {
            transform:translate(20.5px,108.365px);
          }
          6.25% {
            transform:translate(22.75px,109.975px);
          }
          8.333% {
            transform:translate(25px,111.5px);
          }
          10.417% {
            transform:translate(27.25px,112.914px);
          }
          12.5% {
            transform:translate(29.5px,114.192px);
          }
          14.583% {
            transform:translate(31.75px,115.314px);
          }
          16.667% {
            transform:translate(34px,116.258px);
          }
          18.75% {
            transform:translate(36.25px,117.01px);
          }
          20.833% {
            transform:translate(38.5px,117.557px);
          }
          22.917% {
            transform:translate(40.75px,117.889px);
          }
          25% {
            transform:translate(43px,118px);
          }
          27.083% {
            transform:translate(45.25px,117.889px);
          }
          29.167% {
            transform:translate(47.5px,117.557px);
          }
          31.25% {
            transform:translate(49.75px,117.01px);
          }
          33.333% {
            transform:translate(52px,116.258px);
          }
          35.417% {
            transform:translate(54.25px,115.314px);
          }
          37.5% {
            transform:translate(56.5px,114.192px);
          }
          39.583% {
            transform:translate(58.75px,112.914px);
          }
          41.667% {
            transform:translate(61px,111.5px);
          }
          43.75% {
            transform:translate(63.25px,109.975px);
          }
          45.833% {
            transform:translate(65.5px,108.365px);
          }
          47.917% {
            transform:translate(67.75px,106.697px);
          }
          50% {
            transform:translate(70px,105px);
          }
          52.083% {
            transform:translate(72.25px,103.303px);
          }
          54.167% {
            transform:translate(74.5px,101.635px);
          }
          56.25% {
            transform:translate(76.75px,100.025px);
          }
          58.333% {
            transform:translate(79px,98.5px);
          }
          60.417% {
            transform:translate(81.25px,97.086px);
          }
          62.5% {
            transform:translate(83.5px,95.808px);
          }
          64.583% {
            transform:translate(85.75px,94.686px);
          }
          66.667% {
            transform:translate(88px,93.742px);
          }
          68.75% {
            transform:translate(90.25px,92.99px);
          }
          70.833% {
            transform:translate(92.5px,92.443px);
          }
          72.917% {
            transform:translate(94.75px,92.111px);
          }
          75% {
            transform:translate(97px,92px);
          }
          77.083% {
            transform:translate(99.25px,92.111px);
          }
          79.167% {
            transform:translate(101.5px,92.443px);
          }
          81.25% {
            transform:translate(103.75px,92.99px);
          }
          83.333% {
            transform:translate(106px,93.742px);
          }
          85.417% {
            transform:translate(108.25px,94.686px);
          }
          87.5% {
            transform:translate(110.5px,95.808px);
          }
          89.583% {
            transform:translate(112.75px,97.086px);
          }
          91.667% {
            transform:translate(115px,98.5px);
          }
          93.75% {
            transform:translate(117.25px,100.025px);
          }
          95.833% {
            transform:translate(119.5px,101.635px);
          }
          97.917% {
            transform:translate(121.75px,103.303px);
          }
          100% {
            transform:translate(124px,105px);
          }
        }
        @keyframes line0 {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(-0.439px,0px);
          }
          4.167% {
            transform:translate(-0.87px,0px);
          }
          6.25% {
            transform:translate(-1.286px,0px);
          }
          8.333% {
            transform:translate(-1.68px,0px);
          }
          10.417% {
            transform:translate(-2.045px,0px);
          }
          12.5% {
            transform:translate(-2.376px,0px);
          }
          14.583% {
            transform:translate(-2.666px,0px);
          }
          16.667% {
            transform:translate(-2.91px,0px);
          }
          18.75% {
            transform:translate(-3.104px,0px);
          }
          20.833% {
            transform:translate(-3.246px,0px);
          }
          22.917% {
            transform:translate(-3.331px,0px);
          }
          25% {
            transform:translate(-3.36px,0px);
          }
          27.083% {
            transform:translate(-3.331px,0px);
          }
          29.167% {
            transform:translate(-3.246px,0px);
          }
          31.25% {
            transform:translate(-3.104px,0px);
          }
          33.333% {
            transform:translate(-2.91px,0px);
          }
          35.417% {
            transform:translate(-2.666px,0px);
          }
          37.5% {
            transform:translate(-2.376px,0px);
          }
          39.583% {
            transform:translate(-2.045px,0px);
          }
          41.667% {
            transform:translate(-1.68px,0px);
          }
          43.75% {
            transform:translate(-1.286px,0px);
          }
          45.833% {
            transform:translate(-0.87px,0px);
          }
          47.917% {
            transform:translate(-0.439px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          52.083% {
            transform:translate(0.439px,0px);
          }
          54.167% {
            transform:translate(0.87px,0px);
          }
          56.25% {
            transform:translate(1.286px,0px);
          }
          58.333% {
            transform:translate(1.68px,0px);
          }
          60.417% {
            transform:translate(2.045px,0px);
          }
          62.5% {
            transform:translate(2.376px,0px);
          }
          64.583% {
            transform:translate(2.666px,0px);
          }
          66.667% {
            transform:translate(2.91px,0px);
          }
          68.75% {
            transform:translate(3.104px,0px);
          }
          70.833% {
            transform:translate(3.246px,0px);
          }
          72.917% {
            transform:translate(3.331px,0px);
          }
          75% {
            transform:translate(3.36px,0px);
          }
          77.083% {
            transform:translate(3.331px,0px);
          }
          79.167% {
            transform:translate(3.246px,0px);
          }
          81.25% {
            transform:translate(3.104px,0px);
          }
          83.333% {
            transform:translate(2.91px,0px);
          }
          85.417% {
            transform:translate(2.666px,0px);
          }
          87.5% {
            transform:translate(2.376px,0px);
          }
          89.583% {
            transform:translate(2.045px,0px);
          }
          91.667% {
            transform:translate(1.68px,0px);
          }
          93.75% {
            transform:translate(1.286px,0px);
          }
          95.833% {
            transform:translate(0.87px,0px);
          }
          97.917% {
            transform:translate(0.439px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes line1 {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(-0.783px,0px);
          }
          4.167% {
            transform:translate(-1.553px,0px);
          }
          6.25% {
            transform:translate(-2.296px,0px);
          }
          8.333% {
            transform:translate(-3px,0px);
          }
          10.417% {
            transform:translate(-3.653px,0px);
          }
          12.5% {
            transform:translate(-4.243px,0px);
          }
          14.583% {
            transform:translate(-4.76px,0px);
          }
          16.667% {
            transform:translate(-5.196px,0px);
          }
          18.75% {
            transform:translate(-5.543px,0px);
          }
          20.833% {
            transform:translate(-5.796px,0px);
          }
          22.917% {
            transform:translate(-5.949px,0px);
          }
          25% {
            transform:translate(-6px,0px);
          }
          27.083% {
            transform:translate(-5.949px,0px);
          }
          29.167% {
            transform:translate(-5.796px,0px);
          }
          31.25% {
            transform:translate(-5.543px,0px);
          }
          33.333% {
            transform:translate(-5.196px,0px);
          }
          35.417% {
            transform:translate(-4.76px,0px);
          }
          37.5% {
            transform:translate(-4.243px,0px);
          }
          39.583% {
            transform:translate(-3.653px,0px);
          }
          41.667% {
            transform:translate(-3px,0px);
          }
          43.75% {
            transform:translate(-2.296px,0px);
          }
          45.833% {
            transform:translate(-1.553px,0px);
          }
          47.917% {
            transform:translate(-0.783px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          52.083% {
            transform:translate(0.783px,0px);
          }
          54.167% {
            transform:translate(1.553px,0px);
          }
          56.25% {
            transform:translate(2.296px,0px);
          }
          58.333% {
            transform:translate(3px,0px);
          }
          60.417% {
            transform:translate(3.653px,0px);
          }
          62.5% {
            transform:translate(4.243px,0px);
          }
          64.583% {
            transform:translate(4.76px,0px);
          }
          66.667% {
            transform:translate(5.196px,0px);
          }
          68.75% {
            transform:translate(5.543px,0px);
          }
          70.833% {
            transform:translate(5.796px,0px);
          }
          72.917% {
            transform:translate(5.949px,0px);
          }
          75% {
            transform:translate(6px,0px);
          }
          77.083% {
            transform:translate(5.949px,0px);
          }
          79.167% {
            transform:translate(5.796px,0px);
          }
          81.25% {
            transform:translate(5.543px,0px);
          }
          83.333% {
            transform:translate(5.196px,0px);
          }
          85.417% {
            transform:translate(4.76px,0px);
          }
          87.5% {
            transform:translate(4.243px,0px);
          }
          89.583% {
            transform:translate(3.653px,0px);
          }
          91.667% {
            transform:translate(3px,0px);
          }
          93.75% {
            transform:translate(2.296px,0px);
          }
          95.833% {
            transform:translate(1.553px,0px);
          }
          97.917% {
            transform:translate(0.783px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes line2 {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(-1.159px,0px);
          }
          4.167% {
            transform:translate(-2.298px,0px);
          }
          6.25% {
            transform:translate(-3.398px,0px);
          }
          8.333% {
            transform:translate(-4.44px,0px);
          }
          10.417% {
            transform:translate(-5.406px,0px);
          }
          12.5% {
            transform:translate(-6.279px,0px);
          }
          14.583% {
            transform:translate(-7.045px,0px);
          }
          16.667% {
            transform:translate(-7.69px,0px);
          }
          18.75% {
            transform:translate(-8.204px,0px);
          }
          20.833% {
            transform:translate(-8.577px,0px);
          }
          22.917% {
            transform:translate(-8.804px,0px);
          }
          25% {
            transform:translate(-8.88px,0px);
          }
          27.083% {
            transform:translate(-8.804px,0px);
          }
          29.167% {
            transform:translate(-8.577px,0px);
          }
          31.25% {
            transform:translate(-8.204px,0px);
          }
          33.333% {
            transform:translate(-7.69px,0px);
          }
          35.417% {
            transform:translate(-7.045px,0px);
          }
          37.5% {
            transform:translate(-6.279px,0px);
          }
          39.583% {
            transform:translate(-5.406px,0px);
          }
          41.667% {
            transform:translate(-4.44px,0px);
          }
          43.75% {
            transform:translate(-3.398px,0px);
          }
          45.833% {
            transform:translate(-2.298px,0px);
          }
          47.917% {
            transform:translate(-1.159px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          52.083% {
            transform:translate(1.159px,0px);
          }
          54.167% {
            transform:translate(2.298px,0px);
          }
          56.25% {
            transform:translate(3.398px,0px);
          }
          58.333% {
            transform:translate(4.44px,0px);
          }
          60.417% {
            transform:translate(5.406px,0px);
          }
          62.5% {
            transform:translate(6.279px,0px);
          }
          64.583% {
            transform:translate(7.045px,0px);
          }
          66.667% {
            transform:translate(7.69px,0px);
          }
          68.75% {
            transform:translate(8.204px,0px);
          }
          70.833% {
            transform:translate(8.577px,0px);
          }
          72.917% {
            transform:translate(8.804px,0px);
          }
          75% {
            transform:translate(8.88px,0px);
          }
          77.083% {
            transform:translate(8.804px,0px);
          }
          79.167% {
            transform:translate(8.577px,0px);
          }
          81.25% {
            transform:translate(8.204px,0px);
          }
          83.333% {
            transform:translate(7.69px,0px);
          }
          85.417% {
            transform:translate(7.045px,0px);
          }
          87.5% {
            transform:translate(6.279px,0px);
          }
          89.583% {
            transform:translate(5.406px,0px);
          }
          91.667% {
            transform:translate(4.44px,0px);
          }
          93.75% {
            transform:translate(3.398px,0px);
          }
          95.833% {
            transform:translate(2.298px,0px);
          }
          97.917% {
            transform:translate(1.159px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .star {
            transform:translate(70px,27px);
          }
          .planet {
            transform:translate(70px,37.4px);
          }
          .rvCursor {
            transform:translate(97px,92px);
          }
          .line0 {
            transform:translate(3.36px,0px);
          }
          .line1 {
            transform:translate(6px,0px);
          }
          .line2 {
            transform:translate(8.88px,0px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Radial-Velocity Planet Detection">
        <circle cx="9" cy="8" r="1" fill="#789697" opacity=".5"/>
        <circle cx="56" cy="75" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="103" cy="19" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="29" cy="86" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="76" cy="30" r="1" fill="#789697" opacity=".5"/>
        <circle cx="123" cy="97" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="49" cy="41" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="96" cy="108" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="22" cy="52" r="1" fill="#789697" opacity=".5"/>
        <circle cx="69" cy="119" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="116" cy="63" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="42" cy="130" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="89" cy="74" r="1" fill="#789697" opacity=".5"/>
        <circle cx="15" cy="18" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="62" cy="85" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="109" cy="29" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="35" cy="96" r="1" fill="#789697" opacity=".5"/>
        <circle cx="82" cy="40" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="129" cy="107" r="0.55" fill="#789697" opacity=".5"/>
        <defs>
          <linearGradient id="spectrum">
            <stop stop-color="#6d92c7"/>
            <stop offset=".5" stop-color="#97bc82"/>
            <stop offset="1" stop-color="#cf8262"/>
          </linearGradient>
        </defs>
        <path d="M49 29A21 9 0 1 0 91 29A21 9 0 1 0 49 29" fill="none" stroke="#41685e"/>
        <circle cx="70" cy="29" r="1" fill="#b5c7b3"/>
        <circle cx="0" cy="0" r="5" class="star" fill="#e9cb88"/>
        <circle cx="0" cy="0" r="2" class="planet" fill="#81b8c7"/>
        <g transform="translate(27 29) rotate(180)" fill="#97b7a9">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <rect x="15" y="57" width="110" height="25" fill="url(#spectrum)"/>
        <path d="M16 105H125" stroke="#54776b" stroke-dasharray="2 3"/>
        <path d="M16 105L17.125 105.85L18.25 106.697L19.375 107.536L20.5 108.365L21.625 109.179L22.75 109.975L23.875 110.75L25 111.5L26.125 112.222L27.25 112.914L28.375 113.571L29.5 114.192L30.625 114.774L31.75 115.314L32.875 115.809L34 116.258L35.125 116.659L36.25 117.01L37.375 117.31L38.5 117.557L39.625 117.75L40.75 117.889L41.875 117.972L43 118L44.125 117.972L45.25 117.889L46.375 117.75L47.5 117.557L48.625 117.31L49.75 117.01L50.875 116.659L52 116.258L53.125 115.809L54.25 115.314L55.375 114.774L56.5 114.192L57.625 113.571L58.75 112.914L59.875 112.222L61 111.5L62.125 110.75L63.25 109.975L64.375 109.179L65.5 108.365L66.625 107.536L67.75 106.697L68.875 105.85L70 105L71.125 104.15L72.25 103.303L73.375 102.464L74.5 101.635L75.625 100.821L76.75 100.025L77.875 99.25L79 98.5L80.125 97.778L81.25 97.086L82.375 96.429L83.5 95.808L84.625 95.226L85.75 94.686L86.875 94.191L88 93.742L89.125 93.341L90.25 92.99L91.375 92.69L92.5 92.443L93.625 92.25L94.75 92.111L95.875 92.028L97 92L98.125 92.028L99.25 92.111L100.375 92.25L101.5 92.443L102.625 92.69L103.75 92.99L104.875 93.341L106 93.742L107.125 94.191L108.25 94.686L109.375 95.226L110.5 95.808L111.625 96.429L112.75 97.086L113.875 97.778L115 98.5L116.125 99.25L117.25 100.025L118.375 100.821L119.5 101.635L120.625 102.464L121.75 103.303L122.875 104.15L124 105" fill="none" stroke="#8dcbd0" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="2" class="rvCursor" fill="#e6c889"/>
        <path d="M45.8 51L45.8 55" stroke="#d9d7ae"/>
        <rect x="44.8" y="57" width="2" height="25" class="line0" fill="#1a2d2e"/>
        <path d="M70 51L70 55" stroke="#d9d7ae"/>
        <rect x="69" y="57" width="2" height="25" class="line1" fill="#1a2d2e"/>
        <path d="M96.4 51L96.4 55" stroke="#d9d7ae"/>
        <rect x="95.4" y="57" width="2" height="25" class="line2" fill="#1a2d2e"/>
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

if (!customElements.get("concept-radial-velocity-planet-detection")) {
  customElements.define("concept-radial-velocity-planet-detection", ConceptRadialVelocityPlanetDetection);
}
