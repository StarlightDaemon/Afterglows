// Sample-and-Hold. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSampleAndHold extends HTMLElement {
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
        .source-wire,.source-mark {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5
        }
        .sampling-switch {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          animation:hold-switch 8s steps(1,end) infinite
        }
        .contact {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:1
        }
        .capacitor-field,.output-voltage {
          fill:#70edb1;
          opacity:0.798;
          animation:hold-charge 8s linear infinite
        }
        .input-trace {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.2
        }
        .output-trace {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.8
        }
        .hold-cursor {
          stroke:#375b51;
          stroke-width:.8;
          transform:translateX(26px);
          animation:hold-cursor 8s linear infinite
        }
        .input-dot {
          fill:#07120f;
          stroke:#77c9ef;
          stroke-width:1.3;
          transform:translate(44px,71.2px);
          animation:hold-input 8s linear infinite
        }
        .output-dot {
          fill:#70edb1;
          transform:translate(44px,76.121px);
          animation:hold-output 8s linear infinite
        }
        .tracking-cursor {
          animation:hold-wrap 8s linear infinite
        }
        @keyframes hold-switch {
          0% {
            d:path("M45 30L65 30")
          }
          12.5% {
            d:path("M45 30L61 18")
          }
          37.5% {
            d:path("M45 30L65 30")
          }
          62.5% {
            d:path("M45 30L61 18")
          }
          87.5% {
            d:path("M45 30L65 30")
          }
        }
        @keyframes hold-charge {
          0% {
            opacity:0.6
          }
          0.625% {
            opacity:0.611
          }
          1.25% {
            opacity:0.622
          }
          1.875% {
            opacity:0.633
          }
          2.5% {
            opacity:0.644
          }
          3.125% {
            opacity:0.655
          }
          3.75% {
            opacity:0.665
          }
          4.375% {
            opacity:0.676
          }
          5% {
            opacity:0.687
          }
          5.625% {
            opacity:0.697
          }
          6.25% {
            opacity:0.707
          }
          6.875% {
            opacity:0.717
          }
          7.5% {
            opacity:0.727
          }
          8.125% {
            opacity:0.737
          }
          8.75% {
            opacity:0.746
          }
          9.375% {
            opacity:0.756
          }
          10% {
            opacity:0.765
          }
          10.625% {
            opacity:0.773
          }
          11.25% {
            opacity:0.782
          }
          11.875% {
            opacity:0.79
          }
          12.5% {
            opacity:0.798
          }
          13.125% {
            opacity:0.798
          }
          13.75% {
            opacity:0.798
          }
          14.375% {
            opacity:0.798
          }
          15.0% {
            opacity:0.798
          }
          15.625% {
            opacity:0.798
          }
          16.25% {
            opacity:0.798
          }
          16.875% {
            opacity:0.798
          }
          17.5% {
            opacity:0.798
          }
          18.125% {
            opacity:0.798
          }
          18.75% {
            opacity:0.798
          }
          19.375% {
            opacity:0.798
          }
          20% {
            opacity:0.798
          }
          20.625% {
            opacity:0.798
          }
          21.25% {
            opacity:0.798
          }
          21.875% {
            opacity:0.798
          }
          22.5% {
            opacity:0.798
          }
          23.125% {
            opacity:0.798
          }
          23.75% {
            opacity:0.798
          }
          24.375% {
            opacity:0.798
          }
          25% {
            opacity:0.798
          }
          25.625% {
            opacity:0.798
          }
          26.25% {
            opacity:0.798
          }
          26.875% {
            opacity:0.798
          }
          27.5% {
            opacity:0.798
          }
          28.125% {
            opacity:0.798
          }
          28.75% {
            opacity:0.798
          }
          29.375% {
            opacity:0.798
          }
          30.0% {
            opacity:0.798
          }
          30.625% {
            opacity:0.798
          }
          31.25% {
            opacity:0.798
          }
          31.875% {
            opacity:0.798
          }
          32.5% {
            opacity:0.798
          }
          33.125% {
            opacity:0.798
          }
          33.75% {
            opacity:0.798
          }
          34.375% {
            opacity:0.798
          }
          35% {
            opacity:0.798
          }
          35.625% {
            opacity:0.798
          }
          36.25% {
            opacity:0.798
          }
          36.875% {
            opacity:0.798
          }
          37.5% {
            opacity:0.798
          }
          38.125% {
            opacity:0.79
          }
          38.75% {
            opacity:0.782
          }
          39.375% {
            opacity:0.773
          }
          40% {
            opacity:0.765
          }
          40.625% {
            opacity:0.756
          }
          41.25% {
            opacity:0.746
          }
          41.875% {
            opacity:0.737
          }
          42.5% {
            opacity:0.727
          }
          43.125% {
            opacity:0.717
          }
          43.75% {
            opacity:0.707
          }
          44.375% {
            opacity:0.697
          }
          45% {
            opacity:0.687
          }
          45.625% {
            opacity:0.676
          }
          46.25% {
            opacity:0.665
          }
          46.875% {
            opacity:0.655
          }
          47.5% {
            opacity:0.644
          }
          48.125% {
            opacity:0.633
          }
          48.75% {
            opacity:0.622
          }
          49.375% {
            opacity:0.611
          }
          50% {
            opacity:0.6
          }
          50.625% {
            opacity:0.589
          }
          51.25% {
            opacity:0.578
          }
          51.875% {
            opacity:0.567
          }
          52.5% {
            opacity:0.556
          }
          53.125% {
            opacity:0.545
          }
          53.75% {
            opacity:0.535
          }
          54.375% {
            opacity:0.524
          }
          55.0% {
            opacity:0.513
          }
          55.625% {
            opacity:0.503
          }
          56.25% {
            opacity:0.493
          }
          56.875% {
            opacity:0.483
          }
          57.5% {
            opacity:0.473
          }
          58.125% {
            opacity:0.463
          }
          58.75% {
            opacity:0.454
          }
          59.375% {
            opacity:0.444
          }
          60.0% {
            opacity:0.435
          }
          60.625% {
            opacity:0.427
          }
          61.25% {
            opacity:0.418
          }
          61.875% {
            opacity:0.41
          }
          62.5% {
            opacity:0.402
          }
          63.125% {
            opacity:0.402
          }
          63.75% {
            opacity:0.402
          }
          64.375% {
            opacity:0.402
          }
          65% {
            opacity:0.402
          }
          65.625% {
            opacity:0.402
          }
          66.25% {
            opacity:0.402
          }
          66.875% {
            opacity:0.402
          }
          67.5% {
            opacity:0.402
          }
          68.125% {
            opacity:0.402
          }
          68.75% {
            opacity:0.402
          }
          69.375% {
            opacity:0.402
          }
          70% {
            opacity:0.402
          }
          70.625% {
            opacity:0.402
          }
          71.25% {
            opacity:0.402
          }
          71.875% {
            opacity:0.402
          }
          72.5% {
            opacity:0.402
          }
          73.125% {
            opacity:0.402
          }
          73.75% {
            opacity:0.402
          }
          74.375% {
            opacity:0.402
          }
          75% {
            opacity:0.402
          }
          75.625% {
            opacity:0.402
          }
          76.25% {
            opacity:0.402
          }
          76.875% {
            opacity:0.402
          }
          77.5% {
            opacity:0.402
          }
          78.125% {
            opacity:0.402
          }
          78.75% {
            opacity:0.402
          }
          79.375% {
            opacity:0.402
          }
          80% {
            opacity:0.402
          }
          80.625% {
            opacity:0.402
          }
          81.25% {
            opacity:0.402
          }
          81.875% {
            opacity:0.402
          }
          82.5% {
            opacity:0.402
          }
          83.125% {
            opacity:0.402
          }
          83.75% {
            opacity:0.402
          }
          84.375% {
            opacity:0.402
          }
          85.0% {
            opacity:0.402
          }
          85.625% {
            opacity:0.402
          }
          86.25% {
            opacity:0.402
          }
          86.875% {
            opacity:0.402
          }
          87.5% {
            opacity:0.402
          }
          88.125% {
            opacity:0.41
          }
          88.75% {
            opacity:0.418
          }
          89.375% {
            opacity:0.427
          }
          90% {
            opacity:0.435
          }
          90.625% {
            opacity:0.444
          }
          91.25% {
            opacity:0.454
          }
          91.875% {
            opacity:0.463
          }
          92.5% {
            opacity:0.473
          }
          93.125% {
            opacity:0.483
          }
          93.75% {
            opacity:0.493
          }
          94.375% {
            opacity:0.503
          }
          95% {
            opacity:0.513
          }
          95.625% {
            opacity:0.524
          }
          96.25% {
            opacity:0.535
          }
          96.875% {
            opacity:0.545
          }
          97.5% {
            opacity:0.556
          }
          98.125% {
            opacity:0.567
          }
          98.75% {
            opacity:0.578
          }
          99.375% {
            opacity:0.589
          }
          100% {
            opacity:0.6
          }
        }
        @keyframes hold-input {
          0% {
            transform:translate(18px,88px)
          }
          0.625% {
            transform:translate(18.65px,87.34px)
          }
          1.25% {
            transform:translate(19.3px,86.682px)
          }
          1.875% {
            transform:translate(19.95px,86.025px)
          }
          2.5% {
            transform:translate(20.6px,85.372px)
          }
          3.125% {
            transform:translate(21.25px,84.722px)
          }
          3.75% {
            transform:translate(21.9px,84.078px)
          }
          4.375% {
            transform:translate(22.55px,83.44px)
          }
          5% {
            transform:translate(23.2px,82.809px)
          }
          5.625% {
            transform:translate(23.85px,82.185px)
          }
          6.25% {
            transform:translate(24.5px,81.571px)
          }
          6.875% {
            transform:translate(25.15px,80.967px)
          }
          7.5% {
            transform:translate(25.8px,80.373px)
          }
          8.125% {
            transform:translate(26.45px,79.791px)
          }
          8.75% {
            transform:translate(27.1px,79.222px)
          }
          9.375% {
            transform:translate(27.75px,78.666px)
          }
          10% {
            transform:translate(28.4px,78.125px)
          }
          10.625% {
            transform:translate(29.05px,77.599px)
          }
          11.25% {
            transform:translate(29.7px,77.089px)
          }
          11.875% {
            transform:translate(30.35px,76.596px)
          }
          12.5% {
            transform:translate(31px,76.121px)
          }
          13.125% {
            transform:translate(31.65px,75.663px)
          }
          13.75% {
            transform:translate(32.3px,75.225px)
          }
          14.375% {
            transform:translate(32.95px,74.807px)
          }
          15.0% {
            transform:translate(33.6px,74.409px)
          }
          15.625% {
            transform:translate(34.25px,74.031px)
          }
          16.25% {
            transform:translate(34.9px,73.676px)
          }
          16.875% {
            transform:translate(35.55px,73.342px)
          }
          17.5% {
            transform:translate(36.2px,73.031px)
          }
          18.125% {
            transform:translate(36.85px,72.743px)
          }
          18.75% {
            transform:translate(37.5px,72.479px)
          }
          19.375% {
            transform:translate(38.15px,72.238px)
          }
          20% {
            transform:translate(38.8px,72.022px)
          }
          20.625% {
            transform:translate(39.45px,71.831px)
          }
          21.25% {
            transform:translate(40.1px,71.664px)
          }
          21.875% {
            transform:translate(40.75px,71.523px)
          }
          22.5% {
            transform:translate(41.4px,71.407px)
          }
          23.125% {
            transform:translate(42.05px,71.316px)
          }
          23.75% {
            transform:translate(42.7px,71.252px)
          }
          24.375% {
            transform:translate(43.35px,71.213px)
          }
          25% {
            transform:translate(44px,71.2px)
          }
          25.625% {
            transform:translate(44.65px,71.213px)
          }
          26.25% {
            transform:translate(45.3px,71.252px)
          }
          26.875% {
            transform:translate(45.95px,71.316px)
          }
          27.5% {
            transform:translate(46.6px,71.407px)
          }
          28.125% {
            transform:translate(47.25px,71.523px)
          }
          28.75% {
            transform:translate(47.9px,71.664px)
          }
          29.375% {
            transform:translate(48.55px,71.831px)
          }
          30.0% {
            transform:translate(49.2px,72.022px)
          }
          30.625% {
            transform:translate(49.85px,72.238px)
          }
          31.25% {
            transform:translate(50.5px,72.479px)
          }
          31.875% {
            transform:translate(51.15px,72.743px)
          }
          32.5% {
            transform:translate(51.8px,73.031px)
          }
          33.125% {
            transform:translate(52.45px,73.342px)
          }
          33.75% {
            transform:translate(53.1px,73.676px)
          }
          34.375% {
            transform:translate(53.75px,74.031px)
          }
          35% {
            transform:translate(54.4px,74.409px)
          }
          35.625% {
            transform:translate(55.05px,74.807px)
          }
          36.25% {
            transform:translate(55.7px,75.225px)
          }
          36.875% {
            transform:translate(56.35px,75.663px)
          }
          37.5% {
            transform:translate(57px,76.121px)
          }
          38.125% {
            transform:translate(57.65px,76.596px)
          }
          38.75% {
            transform:translate(58.3px,77.089px)
          }
          39.375% {
            transform:translate(58.95px,77.599px)
          }
          40% {
            transform:translate(59.6px,78.125px)
          }
          40.625% {
            transform:translate(60.25px,78.666px)
          }
          41.25% {
            transform:translate(60.9px,79.222px)
          }
          41.875% {
            transform:translate(61.55px,79.791px)
          }
          42.5% {
            transform:translate(62.2px,80.373px)
          }
          43.125% {
            transform:translate(62.85px,80.967px)
          }
          43.75% {
            transform:translate(63.5px,81.571px)
          }
          44.375% {
            transform:translate(64.15px,82.185px)
          }
          45% {
            transform:translate(64.8px,82.809px)
          }
          45.625% {
            transform:translate(65.45px,83.44px)
          }
          46.25% {
            transform:translate(66.1px,84.078px)
          }
          46.875% {
            transform:translate(66.75px,84.722px)
          }
          47.5% {
            transform:translate(67.4px,85.372px)
          }
          48.125% {
            transform:translate(68.05px,86.025px)
          }
          48.75% {
            transform:translate(68.7px,86.682px)
          }
          49.375% {
            transform:translate(69.35px,87.34px)
          }
          50% {
            transform:translate(70px,88px)
          }
          50.625% {
            transform:translate(70.65px,88.66px)
          }
          51.25% {
            transform:translate(71.3px,89.318px)
          }
          51.875% {
            transform:translate(71.95px,89.975px)
          }
          52.5% {
            transform:translate(72.6px,90.628px)
          }
          53.125% {
            transform:translate(73.25px,91.278px)
          }
          53.75% {
            transform:translate(73.9px,91.922px)
          }
          54.375% {
            transform:translate(74.55px,92.56px)
          }
          55.0% {
            transform:translate(75.2px,93.191px)
          }
          55.625% {
            transform:translate(75.85px,93.815px)
          }
          56.25% {
            transform:translate(76.5px,94.429px)
          }
          56.875% {
            transform:translate(77.15px,95.033px)
          }
          57.5% {
            transform:translate(77.8px,95.627px)
          }
          58.125% {
            transform:translate(78.45px,96.209px)
          }
          58.75% {
            transform:translate(79.1px,96.778px)
          }
          59.375% {
            transform:translate(79.75px,97.334px)
          }
          60.0% {
            transform:translate(80.4px,97.875px)
          }
          60.625% {
            transform:translate(81.05px,98.401px)
          }
          61.25% {
            transform:translate(81.7px,98.911px)
          }
          61.875% {
            transform:translate(82.35px,99.404px)
          }
          62.5% {
            transform:translate(83px,99.879px)
          }
          63.125% {
            transform:translate(83.65px,100.337px)
          }
          63.75% {
            transform:translate(84.3px,100.775px)
          }
          64.375% {
            transform:translate(84.95px,101.193px)
          }
          65% {
            transform:translate(85.6px,101.591px)
          }
          65.625% {
            transform:translate(86.25px,101.969px)
          }
          66.25% {
            transform:translate(86.9px,102.324px)
          }
          66.875% {
            transform:translate(87.55px,102.658px)
          }
          67.5% {
            transform:translate(88.2px,102.969px)
          }
          68.125% {
            transform:translate(88.85px,103.257px)
          }
          68.75% {
            transform:translate(89.5px,103.521px)
          }
          69.375% {
            transform:translate(90.15px,103.762px)
          }
          70% {
            transform:translate(90.8px,103.978px)
          }
          70.625% {
            transform:translate(91.45px,104.169px)
          }
          71.25% {
            transform:translate(92.1px,104.336px)
          }
          71.875% {
            transform:translate(92.75px,104.477px)
          }
          72.5% {
            transform:translate(93.4px,104.593px)
          }
          73.125% {
            transform:translate(94.05px,104.684px)
          }
          73.75% {
            transform:translate(94.7px,104.748px)
          }
          74.375% {
            transform:translate(95.35px,104.787px)
          }
          75% {
            transform:translate(96px,104.8px)
          }
          75.625% {
            transform:translate(96.65px,104.787px)
          }
          76.25% {
            transform:translate(97.3px,104.748px)
          }
          76.875% {
            transform:translate(97.95px,104.684px)
          }
          77.5% {
            transform:translate(98.6px,104.593px)
          }
          78.125% {
            transform:translate(99.25px,104.477px)
          }
          78.75% {
            transform:translate(99.9px,104.336px)
          }
          79.375% {
            transform:translate(100.55px,104.169px)
          }
          80% {
            transform:translate(101.2px,103.978px)
          }
          80.625% {
            transform:translate(101.85px,103.762px)
          }
          81.25% {
            transform:translate(102.5px,103.521px)
          }
          81.875% {
            transform:translate(103.15px,103.257px)
          }
          82.5% {
            transform:translate(103.8px,102.969px)
          }
          83.125% {
            transform:translate(104.45px,102.658px)
          }
          83.75% {
            transform:translate(105.1px,102.324px)
          }
          84.375% {
            transform:translate(105.75px,101.969px)
          }
          85.0% {
            transform:translate(106.4px,101.591px)
          }
          85.625% {
            transform:translate(107.05px,101.193px)
          }
          86.25% {
            transform:translate(107.7px,100.775px)
          }
          86.875% {
            transform:translate(108.35px,100.337px)
          }
          87.5% {
            transform:translate(109px,99.879px)
          }
          88.125% {
            transform:translate(109.65px,99.404px)
          }
          88.75% {
            transform:translate(110.3px,98.911px)
          }
          89.375% {
            transform:translate(110.95px,98.401px)
          }
          90% {
            transform:translate(111.6px,97.875px)
          }
          90.625% {
            transform:translate(112.25px,97.334px)
          }
          91.25% {
            transform:translate(112.9px,96.778px)
          }
          91.875% {
            transform:translate(113.55px,96.209px)
          }
          92.5% {
            transform:translate(114.2px,95.627px)
          }
          93.125% {
            transform:translate(114.85px,95.033px)
          }
          93.75% {
            transform:translate(115.5px,94.429px)
          }
          94.375% {
            transform:translate(116.15px,93.815px)
          }
          95% {
            transform:translate(116.8px,93.191px)
          }
          95.625% {
            transform:translate(117.45px,92.56px)
          }
          96.25% {
            transform:translate(118.1px,91.922px)
          }
          96.875% {
            transform:translate(118.75px,91.278px)
          }
          97.5% {
            transform:translate(119.4px,90.628px)
          }
          98.125% {
            transform:translate(120.05px,89.975px)
          }
          98.75% {
            transform:translate(120.7px,89.318px)
          }
          99.375% {
            transform:translate(121.35px,88.66px)
          }
          100% {
            transform:translate(122px,88px)
          }
        }
        @keyframes hold-output {
          0% {
            transform:translate(18px,88px)
          }
          0.625% {
            transform:translate(18.65px,87.34px)
          }
          1.25% {
            transform:translate(19.3px,86.682px)
          }
          1.875% {
            transform:translate(19.95px,86.025px)
          }
          2.5% {
            transform:translate(20.6px,85.372px)
          }
          3.125% {
            transform:translate(21.25px,84.722px)
          }
          3.75% {
            transform:translate(21.9px,84.078px)
          }
          4.375% {
            transform:translate(22.55px,83.44px)
          }
          5% {
            transform:translate(23.2px,82.809px)
          }
          5.625% {
            transform:translate(23.85px,82.185px)
          }
          6.25% {
            transform:translate(24.5px,81.571px)
          }
          6.875% {
            transform:translate(25.15px,80.967px)
          }
          7.5% {
            transform:translate(25.8px,80.373px)
          }
          8.125% {
            transform:translate(26.45px,79.791px)
          }
          8.75% {
            transform:translate(27.1px,79.222px)
          }
          9.375% {
            transform:translate(27.75px,78.666px)
          }
          10% {
            transform:translate(28.4px,78.125px)
          }
          10.625% {
            transform:translate(29.05px,77.599px)
          }
          11.25% {
            transform:translate(29.7px,77.089px)
          }
          11.875% {
            transform:translate(30.35px,76.596px)
          }
          12.5% {
            transform:translate(31px,76.121px)
          }
          13.125% {
            transform:translate(31.65px,76.121px)
          }
          13.75% {
            transform:translate(32.3px,76.121px)
          }
          14.375% {
            transform:translate(32.95px,76.121px)
          }
          15.0% {
            transform:translate(33.6px,76.121px)
          }
          15.625% {
            transform:translate(34.25px,76.121px)
          }
          16.25% {
            transform:translate(34.9px,76.121px)
          }
          16.875% {
            transform:translate(35.55px,76.121px)
          }
          17.5% {
            transform:translate(36.2px,76.121px)
          }
          18.125% {
            transform:translate(36.85px,76.121px)
          }
          18.75% {
            transform:translate(37.5px,76.121px)
          }
          19.375% {
            transform:translate(38.15px,76.121px)
          }
          20% {
            transform:translate(38.8px,76.121px)
          }
          20.625% {
            transform:translate(39.45px,76.121px)
          }
          21.25% {
            transform:translate(40.1px,76.121px)
          }
          21.875% {
            transform:translate(40.75px,76.121px)
          }
          22.5% {
            transform:translate(41.4px,76.121px)
          }
          23.125% {
            transform:translate(42.05px,76.121px)
          }
          23.75% {
            transform:translate(42.7px,76.121px)
          }
          24.375% {
            transform:translate(43.35px,76.121px)
          }
          25% {
            transform:translate(44px,76.121px)
          }
          25.625% {
            transform:translate(44.65px,76.121px)
          }
          26.25% {
            transform:translate(45.3px,76.121px)
          }
          26.875% {
            transform:translate(45.95px,76.121px)
          }
          27.5% {
            transform:translate(46.6px,76.121px)
          }
          28.125% {
            transform:translate(47.25px,76.121px)
          }
          28.75% {
            transform:translate(47.9px,76.121px)
          }
          29.375% {
            transform:translate(48.55px,76.121px)
          }
          30.0% {
            transform:translate(49.2px,76.121px)
          }
          30.625% {
            transform:translate(49.85px,76.121px)
          }
          31.25% {
            transform:translate(50.5px,76.121px)
          }
          31.875% {
            transform:translate(51.15px,76.121px)
          }
          32.5% {
            transform:translate(51.8px,76.121px)
          }
          33.125% {
            transform:translate(52.45px,76.121px)
          }
          33.75% {
            transform:translate(53.1px,76.121px)
          }
          34.375% {
            transform:translate(53.75px,76.121px)
          }
          35% {
            transform:translate(54.4px,76.121px)
          }
          35.625% {
            transform:translate(55.05px,76.121px)
          }
          36.25% {
            transform:translate(55.7px,76.121px)
          }
          36.875% {
            transform:translate(56.35px,76.121px)
          }
          37.5% {
            transform:translate(57px,76.121px)
          }
          38.125% {
            transform:translate(57.65px,76.596px)
          }
          38.75% {
            transform:translate(58.3px,77.089px)
          }
          39.375% {
            transform:translate(58.95px,77.599px)
          }
          40% {
            transform:translate(59.6px,78.125px)
          }
          40.625% {
            transform:translate(60.25px,78.666px)
          }
          41.25% {
            transform:translate(60.9px,79.222px)
          }
          41.875% {
            transform:translate(61.55px,79.791px)
          }
          42.5% {
            transform:translate(62.2px,80.373px)
          }
          43.125% {
            transform:translate(62.85px,80.967px)
          }
          43.75% {
            transform:translate(63.5px,81.571px)
          }
          44.375% {
            transform:translate(64.15px,82.185px)
          }
          45% {
            transform:translate(64.8px,82.809px)
          }
          45.625% {
            transform:translate(65.45px,83.44px)
          }
          46.25% {
            transform:translate(66.1px,84.078px)
          }
          46.875% {
            transform:translate(66.75px,84.722px)
          }
          47.5% {
            transform:translate(67.4px,85.372px)
          }
          48.125% {
            transform:translate(68.05px,86.025px)
          }
          48.75% {
            transform:translate(68.7px,86.682px)
          }
          49.375% {
            transform:translate(69.35px,87.34px)
          }
          50% {
            transform:translate(70px,88px)
          }
          50.625% {
            transform:translate(70.65px,88.66px)
          }
          51.25% {
            transform:translate(71.3px,89.318px)
          }
          51.875% {
            transform:translate(71.95px,89.975px)
          }
          52.5% {
            transform:translate(72.6px,90.628px)
          }
          53.125% {
            transform:translate(73.25px,91.278px)
          }
          53.75% {
            transform:translate(73.9px,91.922px)
          }
          54.375% {
            transform:translate(74.55px,92.56px)
          }
          55.0% {
            transform:translate(75.2px,93.191px)
          }
          55.625% {
            transform:translate(75.85px,93.815px)
          }
          56.25% {
            transform:translate(76.5px,94.429px)
          }
          56.875% {
            transform:translate(77.15px,95.033px)
          }
          57.5% {
            transform:translate(77.8px,95.627px)
          }
          58.125% {
            transform:translate(78.45px,96.209px)
          }
          58.75% {
            transform:translate(79.1px,96.778px)
          }
          59.375% {
            transform:translate(79.75px,97.334px)
          }
          60.0% {
            transform:translate(80.4px,97.875px)
          }
          60.625% {
            transform:translate(81.05px,98.401px)
          }
          61.25% {
            transform:translate(81.7px,98.911px)
          }
          61.875% {
            transform:translate(82.35px,99.404px)
          }
          62.5% {
            transform:translate(83px,99.879px)
          }
          63.125% {
            transform:translate(83.65px,99.879px)
          }
          63.75% {
            transform:translate(84.3px,99.879px)
          }
          64.375% {
            transform:translate(84.95px,99.879px)
          }
          65% {
            transform:translate(85.6px,99.879px)
          }
          65.625% {
            transform:translate(86.25px,99.879px)
          }
          66.25% {
            transform:translate(86.9px,99.879px)
          }
          66.875% {
            transform:translate(87.55px,99.879px)
          }
          67.5% {
            transform:translate(88.2px,99.879px)
          }
          68.125% {
            transform:translate(88.85px,99.879px)
          }
          68.75% {
            transform:translate(89.5px,99.879px)
          }
          69.375% {
            transform:translate(90.15px,99.879px)
          }
          70% {
            transform:translate(90.8px,99.879px)
          }
          70.625% {
            transform:translate(91.45px,99.879px)
          }
          71.25% {
            transform:translate(92.1px,99.879px)
          }
          71.875% {
            transform:translate(92.75px,99.879px)
          }
          72.5% {
            transform:translate(93.4px,99.879px)
          }
          73.125% {
            transform:translate(94.05px,99.879px)
          }
          73.75% {
            transform:translate(94.7px,99.879px)
          }
          74.375% {
            transform:translate(95.35px,99.879px)
          }
          75% {
            transform:translate(96px,99.879px)
          }
          75.625% {
            transform:translate(96.65px,99.879px)
          }
          76.25% {
            transform:translate(97.3px,99.879px)
          }
          76.875% {
            transform:translate(97.95px,99.879px)
          }
          77.5% {
            transform:translate(98.6px,99.879px)
          }
          78.125% {
            transform:translate(99.25px,99.879px)
          }
          78.75% {
            transform:translate(99.9px,99.879px)
          }
          79.375% {
            transform:translate(100.55px,99.879px)
          }
          80% {
            transform:translate(101.2px,99.879px)
          }
          80.625% {
            transform:translate(101.85px,99.879px)
          }
          81.25% {
            transform:translate(102.5px,99.879px)
          }
          81.875% {
            transform:translate(103.15px,99.879px)
          }
          82.5% {
            transform:translate(103.8px,99.879px)
          }
          83.125% {
            transform:translate(104.45px,99.879px)
          }
          83.75% {
            transform:translate(105.1px,99.879px)
          }
          84.375% {
            transform:translate(105.75px,99.879px)
          }
          85.0% {
            transform:translate(106.4px,99.879px)
          }
          85.625% {
            transform:translate(107.05px,99.879px)
          }
          86.25% {
            transform:translate(107.7px,99.879px)
          }
          86.875% {
            transform:translate(108.35px,99.879px)
          }
          87.5% {
            transform:translate(109px,99.879px)
          }
          88.125% {
            transform:translate(109.65px,99.404px)
          }
          88.75% {
            transform:translate(110.3px,98.911px)
          }
          89.375% {
            transform:translate(110.95px,98.401px)
          }
          90% {
            transform:translate(111.6px,97.875px)
          }
          90.625% {
            transform:translate(112.25px,97.334px)
          }
          91.25% {
            transform:translate(112.9px,96.778px)
          }
          91.875% {
            transform:translate(113.55px,96.209px)
          }
          92.5% {
            transform:translate(114.2px,95.627px)
          }
          93.125% {
            transform:translate(114.85px,95.033px)
          }
          93.75% {
            transform:translate(115.5px,94.429px)
          }
          94.375% {
            transform:translate(116.15px,93.815px)
          }
          95% {
            transform:translate(116.8px,93.191px)
          }
          95.625% {
            transform:translate(117.45px,92.56px)
          }
          96.25% {
            transform:translate(118.1px,91.922px)
          }
          96.875% {
            transform:translate(118.75px,91.278px)
          }
          97.5% {
            transform:translate(119.4px,90.628px)
          }
          98.125% {
            transform:translate(120.05px,89.975px)
          }
          98.75% {
            transform:translate(120.7px,89.318px)
          }
          99.375% {
            transform:translate(121.35px,88.66px)
          }
          100% {
            transform:translate(122px,88px)
          }
        }
        @keyframes hold-cursor {
          0% {
            transform:translateX(0px)
          }
          0.625% {
            transform:translateX(0.65px)
          }
          1.25% {
            transform:translateX(1.3px)
          }
          1.875% {
            transform:translateX(1.95px)
          }
          2.5% {
            transform:translateX(2.6px)
          }
          3.125% {
            transform:translateX(3.25px)
          }
          3.75% {
            transform:translateX(3.9px)
          }
          4.375% {
            transform:translateX(4.55px)
          }
          5% {
            transform:translateX(5.2px)
          }
          5.625% {
            transform:translateX(5.85px)
          }
          6.25% {
            transform:translateX(6.5px)
          }
          6.875% {
            transform:translateX(7.15px)
          }
          7.5% {
            transform:translateX(7.8px)
          }
          8.125% {
            transform:translateX(8.45px)
          }
          8.75% {
            transform:translateX(9.1px)
          }
          9.375% {
            transform:translateX(9.75px)
          }
          10% {
            transform:translateX(10.4px)
          }
          10.625% {
            transform:translateX(11.05px)
          }
          11.25% {
            transform:translateX(11.7px)
          }
          11.875% {
            transform:translateX(12.35px)
          }
          12.5% {
            transform:translateX(13px)
          }
          13.125% {
            transform:translateX(13.65px)
          }
          13.75% {
            transform:translateX(14.3px)
          }
          14.375% {
            transform:translateX(14.95px)
          }
          15.0% {
            transform:translateX(15.6px)
          }
          15.625% {
            transform:translateX(16.25px)
          }
          16.25% {
            transform:translateX(16.9px)
          }
          16.875% {
            transform:translateX(17.55px)
          }
          17.5% {
            transform:translateX(18.2px)
          }
          18.125% {
            transform:translateX(18.85px)
          }
          18.75% {
            transform:translateX(19.5px)
          }
          19.375% {
            transform:translateX(20.15px)
          }
          20% {
            transform:translateX(20.8px)
          }
          20.625% {
            transform:translateX(21.45px)
          }
          21.25% {
            transform:translateX(22.1px)
          }
          21.875% {
            transform:translateX(22.75px)
          }
          22.5% {
            transform:translateX(23.4px)
          }
          23.125% {
            transform:translateX(24.05px)
          }
          23.75% {
            transform:translateX(24.7px)
          }
          24.375% {
            transform:translateX(25.35px)
          }
          25% {
            transform:translateX(26px)
          }
          25.625% {
            transform:translateX(26.65px)
          }
          26.25% {
            transform:translateX(27.3px)
          }
          26.875% {
            transform:translateX(27.95px)
          }
          27.5% {
            transform:translateX(28.6px)
          }
          28.125% {
            transform:translateX(29.25px)
          }
          28.75% {
            transform:translateX(29.9px)
          }
          29.375% {
            transform:translateX(30.55px)
          }
          30.0% {
            transform:translateX(31.2px)
          }
          30.625% {
            transform:translateX(31.85px)
          }
          31.25% {
            transform:translateX(32.5px)
          }
          31.875% {
            transform:translateX(33.15px)
          }
          32.5% {
            transform:translateX(33.8px)
          }
          33.125% {
            transform:translateX(34.45px)
          }
          33.75% {
            transform:translateX(35.1px)
          }
          34.375% {
            transform:translateX(35.75px)
          }
          35% {
            transform:translateX(36.4px)
          }
          35.625% {
            transform:translateX(37.05px)
          }
          36.25% {
            transform:translateX(37.7px)
          }
          36.875% {
            transform:translateX(38.35px)
          }
          37.5% {
            transform:translateX(39px)
          }
          38.125% {
            transform:translateX(39.65px)
          }
          38.75% {
            transform:translateX(40.3px)
          }
          39.375% {
            transform:translateX(40.95px)
          }
          40% {
            transform:translateX(41.6px)
          }
          40.625% {
            transform:translateX(42.25px)
          }
          41.25% {
            transform:translateX(42.9px)
          }
          41.875% {
            transform:translateX(43.55px)
          }
          42.5% {
            transform:translateX(44.2px)
          }
          43.125% {
            transform:translateX(44.85px)
          }
          43.75% {
            transform:translateX(45.5px)
          }
          44.375% {
            transform:translateX(46.15px)
          }
          45% {
            transform:translateX(46.8px)
          }
          45.625% {
            transform:translateX(47.45px)
          }
          46.25% {
            transform:translateX(48.1px)
          }
          46.875% {
            transform:translateX(48.75px)
          }
          47.5% {
            transform:translateX(49.4px)
          }
          48.125% {
            transform:translateX(50.05px)
          }
          48.75% {
            transform:translateX(50.7px)
          }
          49.375% {
            transform:translateX(51.35px)
          }
          50% {
            transform:translateX(52px)
          }
          50.625% {
            transform:translateX(52.65px)
          }
          51.25% {
            transform:translateX(53.3px)
          }
          51.875% {
            transform:translateX(53.95px)
          }
          52.5% {
            transform:translateX(54.6px)
          }
          53.125% {
            transform:translateX(55.25px)
          }
          53.75% {
            transform:translateX(55.9px)
          }
          54.375% {
            transform:translateX(56.55px)
          }
          55.0% {
            transform:translateX(57.2px)
          }
          55.625% {
            transform:translateX(57.85px)
          }
          56.25% {
            transform:translateX(58.5px)
          }
          56.875% {
            transform:translateX(59.15px)
          }
          57.5% {
            transform:translateX(59.8px)
          }
          58.125% {
            transform:translateX(60.45px)
          }
          58.75% {
            transform:translateX(61.1px)
          }
          59.375% {
            transform:translateX(61.75px)
          }
          60.0% {
            transform:translateX(62.4px)
          }
          60.625% {
            transform:translateX(63.05px)
          }
          61.25% {
            transform:translateX(63.7px)
          }
          61.875% {
            transform:translateX(64.35px)
          }
          62.5% {
            transform:translateX(65px)
          }
          63.125% {
            transform:translateX(65.65px)
          }
          63.75% {
            transform:translateX(66.3px)
          }
          64.375% {
            transform:translateX(66.95px)
          }
          65% {
            transform:translateX(67.6px)
          }
          65.625% {
            transform:translateX(68.25px)
          }
          66.25% {
            transform:translateX(68.9px)
          }
          66.875% {
            transform:translateX(69.55px)
          }
          67.5% {
            transform:translateX(70.2px)
          }
          68.125% {
            transform:translateX(70.85px)
          }
          68.75% {
            transform:translateX(71.5px)
          }
          69.375% {
            transform:translateX(72.15px)
          }
          70% {
            transform:translateX(72.8px)
          }
          70.625% {
            transform:translateX(73.45px)
          }
          71.25% {
            transform:translateX(74.1px)
          }
          71.875% {
            transform:translateX(74.75px)
          }
          72.5% {
            transform:translateX(75.4px)
          }
          73.125% {
            transform:translateX(76.05px)
          }
          73.75% {
            transform:translateX(76.7px)
          }
          74.375% {
            transform:translateX(77.35px)
          }
          75% {
            transform:translateX(78px)
          }
          75.625% {
            transform:translateX(78.65px)
          }
          76.25% {
            transform:translateX(79.3px)
          }
          76.875% {
            transform:translateX(79.95px)
          }
          77.5% {
            transform:translateX(80.6px)
          }
          78.125% {
            transform:translateX(81.25px)
          }
          78.75% {
            transform:translateX(81.9px)
          }
          79.375% {
            transform:translateX(82.55px)
          }
          80% {
            transform:translateX(83.2px)
          }
          80.625% {
            transform:translateX(83.85px)
          }
          81.25% {
            transform:translateX(84.5px)
          }
          81.875% {
            transform:translateX(85.15px)
          }
          82.5% {
            transform:translateX(85.8px)
          }
          83.125% {
            transform:translateX(86.45px)
          }
          83.75% {
            transform:translateX(87.1px)
          }
          84.375% {
            transform:translateX(87.75px)
          }
          85.0% {
            transform:translateX(88.4px)
          }
          85.625% {
            transform:translateX(89.05px)
          }
          86.25% {
            transform:translateX(89.7px)
          }
          86.875% {
            transform:translateX(90.35px)
          }
          87.5% {
            transform:translateX(91px)
          }
          88.125% {
            transform:translateX(91.65px)
          }
          88.75% {
            transform:translateX(92.3px)
          }
          89.375% {
            transform:translateX(92.95px)
          }
          90% {
            transform:translateX(93.6px)
          }
          90.625% {
            transform:translateX(94.25px)
          }
          91.25% {
            transform:translateX(94.9px)
          }
          91.875% {
            transform:translateX(95.55px)
          }
          92.5% {
            transform:translateX(96.2px)
          }
          93.125% {
            transform:translateX(96.85px)
          }
          93.75% {
            transform:translateX(97.5px)
          }
          94.375% {
            transform:translateX(98.15px)
          }
          95% {
            transform:translateX(98.8px)
          }
          95.625% {
            transform:translateX(99.45px)
          }
          96.25% {
            transform:translateX(100.1px)
          }
          96.875% {
            transform:translateX(100.75px)
          }
          97.5% {
            transform:translateX(101.4px)
          }
          98.125% {
            transform:translateX(102.05px)
          }
          98.75% {
            transform:translateX(102.7px)
          }
          99.375% {
            transform:translateX(103.35px)
          }
          100% {
            transform:translateX(104px)
          }
        }
        @keyframes hold-wrap {
          0%,100% {
            opacity:0
          }
          2%,97% {
            opacity:1
          }
          99% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sample-and-Hold">
        <path class="source-wire" d="M18 30H45"/>
        <circle class="ink" cx="18" cy="30" r="5"/>
        <path class="source-mark" d="M15 30Q16.5 25 18 30T21 30"/>
        <path class="sampling-switch" d="M45 30L61 18"/>
        <circle class="contact" cx="45" cy="30" r="1.8"/>
        <circle class="contact" cx="65" cy="30" r="1.8"/>
        <path class="ink" d="M65 30H100M75 30V50M66 50H84M66 57H84M75 57V66M69 66H81M71 69H79M120 30H128"/>
        <path class="ink paper" d="M100 20L120 30L100 40Z"/>
        <rect class="capacitor-field" x="66" y="51" width="18" height="5"/>
        <circle class="output-voltage" cx="128" cy="30" r="2.5"/>
        <path class="ink muted" d="M18 112H122M18 71V112"/>
        <path class="input-trace" d="M18 88L18.65 87.34L19.3 86.682L19.95 86.025L20.6 85.372L21.25 84.722L21.9 84.078L22.55 83.44L23.2 82.809L23.85 82.185L24.5 81.571L25.15 80.967L25.8 80.373L26.45 79.791L27.1 79.222L27.75 78.666L28.4 78.125L29.05 77.599L29.7 77.089L30.35 76.596L31 76.121L31.65 75.663L32.3 75.225L32.95 74.807L33.6 74.409L34.25 74.031L34.9 73.676L35.55 73.342L36.2 73.031L36.85 72.743L37.5 72.479L38.15 72.238L38.8 72.022L39.45 71.831L40.1 71.664L40.75 71.523L41.4 71.407L42.05 71.316L42.7 71.252L43.35 71.213L44 71.2L44.65 71.213L45.3 71.252L45.95 71.316L46.6 71.407L47.25 71.523L47.9 71.664L48.55 71.831L49.2 72.022L49.85 72.238L50.5 72.479L51.15 72.743L51.8 73.031L52.45 73.342L53.1 73.676L53.75 74.031L54.4 74.409L55.05 74.807L55.7 75.225L56.35 75.663L57 76.121L57.65 76.596L58.3 77.089L58.95 77.599L59.6 78.125L60.25 78.666L60.9 79.222L61.55 79.791L62.2 80.373L62.85 80.967L63.5 81.571L64.15 82.185L64.8 82.809L65.45 83.44L66.1 84.078L66.75 84.722L67.4 85.372L68.05 86.025L68.7 86.682L69.35 87.34L70 88L70.65 88.66L71.3 89.318L71.95 89.975L72.6 90.628L73.25 91.278L73.9 91.922L74.55 92.56L75.2 93.191L75.85 93.815L76.5 94.429L77.15 95.033L77.8 95.627L78.45 96.209L79.1 96.778L79.75 97.334L80.4 97.875L81.05 98.401L81.7 98.911L82.35 99.404L83 99.879L83.65 100.337L84.3 100.775L84.95 101.193L85.6 101.591L86.25 101.969L86.9 102.324L87.55 102.658L88.2 102.969L88.85 103.257L89.5 103.521L90.15 103.762L90.8 103.978L91.45 104.169L92.1 104.336L92.75 104.477L93.4 104.593L94.05 104.684L94.7 104.748L95.35 104.787L96 104.8L96.65 104.787L97.3 104.748L97.95 104.684L98.6 104.593L99.25 104.477L99.9 104.336L100.55 104.169L101.2 103.978L101.85 103.762L102.5 103.521L103.15 103.257L103.8 102.969L104.45 102.658L105.1 102.324L105.75 101.969L106.4 101.591L107.05 101.193L107.7 100.775L108.35 100.337L109 99.879L109.65 99.404L110.3 98.911L110.95 98.401L111.6 97.875L112.25 97.334L112.9 96.778L113.55 96.209L114.2 95.627L114.85 95.033L115.5 94.429L116.15 93.815L116.8 93.191L117.45 92.56L118.1 91.922L118.75 91.278L119.4 90.628L120.05 89.975L120.7 89.318L121.35 88.66L122 88"/>
        <path class="output-trace" d="M18 88L18.65 87.34L19.3 86.682L19.95 86.025L20.6 85.372L21.25 84.722L21.9 84.078L22.55 83.44L23.2 82.809L23.85 82.185L24.5 81.571L25.15 80.967L25.8 80.373L26.45 79.791L27.1 79.222L27.75 78.666L28.4 78.125L29.05 77.599L29.7 77.089L30.35 76.596L31 76.121L31.65 76.121L32.3 76.121L32.95 76.121L33.6 76.121L34.25 76.121L34.9 76.121L35.55 76.121L36.2 76.121L36.85 76.121L37.5 76.121L38.15 76.121L38.8 76.121L39.45 76.121L40.1 76.121L40.75 76.121L41.4 76.121L42.05 76.121L42.7 76.121L43.35 76.121L44 76.121L44.65 76.121L45.3 76.121L45.95 76.121L46.6 76.121L47.25 76.121L47.9 76.121L48.55 76.121L49.2 76.121L49.85 76.121L50.5 76.121L51.15 76.121L51.8 76.121L52.45 76.121L53.1 76.121L53.75 76.121L54.4 76.121L55.05 76.121L55.7 76.121L56.35 76.121L57 76.121L57.65 76.596L58.3 77.089L58.95 77.599L59.6 78.125L60.25 78.666L60.9 79.222L61.55 79.791L62.2 80.373L62.85 80.967L63.5 81.571L64.15 82.185L64.8 82.809L65.45 83.44L66.1 84.078L66.75 84.722L67.4 85.372L68.05 86.025L68.7 86.682L69.35 87.34L70 88L70.65 88.66L71.3 89.318L71.95 89.975L72.6 90.628L73.25 91.278L73.9 91.922L74.55 92.56L75.2 93.191L75.85 93.815L76.5 94.429L77.15 95.033L77.8 95.627L78.45 96.209L79.1 96.778L79.75 97.334L80.4 97.875L81.05 98.401L81.7 98.911L82.35 99.404L83 99.879L83.65 99.879L84.3 99.879L84.95 99.879L85.6 99.879L86.25 99.879L86.9 99.879L87.55 99.879L88.2 99.879L88.85 99.879L89.5 99.879L90.15 99.879L90.8 99.879L91.45 99.879L92.1 99.879L92.75 99.879L93.4 99.879L94.05 99.879L94.7 99.879L95.35 99.879L96 99.879L96.65 99.879L97.3 99.879L97.95 99.879L98.6 99.879L99.25 99.879L99.9 99.879L100.55 99.879L101.2 99.879L101.85 99.879L102.5 99.879L103.15 99.879L103.8 99.879L104.45 99.879L105.1 99.879L105.75 99.879L106.4 99.879L107.05 99.879L107.7 99.879L108.35 99.879L109 99.879L109.65 99.404L110.3 98.911L110.95 98.401L111.6 97.875L112.25 97.334L112.9 96.778L113.55 96.209L114.2 95.627L114.85 95.033L115.5 94.429L116.15 93.815L116.8 93.191L117.45 92.56L118.1 91.922L118.75 91.278L119.4 90.628L120.05 89.975L120.7 89.318L121.35 88.66L122 88"/>
        <g class="tracking-cursor">
          <path class="hold-cursor" d="M18 71V113"/>
          <circle class="input-dot" cx="0" cy="0" r="3.5"/>
          <circle class="output-dot" cx="0" cy="0" r="2.3"/>
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

if (!customElements.get("concept-sample-and-hold")) {
  customElements.define("concept-sample-and-hold", ConceptSampleAndHold);
}
