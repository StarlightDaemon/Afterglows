// Traffic Shock Wave. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTrafficShockWave extends HTMLElement {
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
        .brakeFront {
          animation:brakeFront 16s linear infinite;
        }
        .car0 {
          animation:car0 16s linear infinite;
        }
        .car0 {
          animation:car0 16s linear infinite;
        }
        .lamp0 {
          animation:lamp0 16s linear infinite;
        }
        .car1 {
          animation:car1 16s linear infinite;
        }
        .car1 {
          animation:car1 16s linear infinite;
        }
        .lamp1 {
          animation:lamp1 16s linear infinite;
        }
        .car2 {
          animation:car2 16s linear infinite;
        }
        .car2 {
          animation:car2 16s linear infinite;
        }
        .lamp2 {
          animation:lamp2 16s linear infinite;
        }
        .car3 {
          animation:car3 16s linear infinite;
        }
        .car3 {
          animation:car3 16s linear infinite;
        }
        .lamp3 {
          animation:lamp3 16s linear infinite;
        }
        .car4 {
          animation:car4 16s linear infinite;
        }
        .car4 {
          animation:car4 16s linear infinite;
        }
        .lamp4 {
          animation:lamp4 16s linear infinite;
        }
        .car5 {
          animation:car5 16s linear infinite;
        }
        .car5 {
          animation:car5 16s linear infinite;
        }
        .lamp5 {
          animation:lamp5 16s linear infinite;
        }
        .car6 {
          animation:car6 16s linear infinite;
        }
        .car6 {
          animation:car6 16s linear infinite;
        }
        .lamp6 {
          animation:lamp6 16s linear infinite;
        }
        .car7 {
          animation:car7 16s linear infinite;
        }
        .car7 {
          animation:car7 16s linear infinite;
        }
        .lamp7 {
          animation:lamp7 16s linear infinite;
        }
        .car8 {
          animation:car8 16s linear infinite;
        }
        .car8 {
          animation:car8 16s linear infinite;
        }
        .lamp8 {
          animation:lamp8 16s linear infinite;
        }
        .car9 {
          animation:car9 16s linear infinite;
        }
        .car9 {
          animation:car9 16s linear infinite;
        }
        .lamp9 {
          animation:lamp9 16s linear infinite;
        }
        .slow0 {
          animation:slow0 16s linear infinite;
        }
        .slow0 {
          animation:slow0 16s linear infinite;
        }
        .slow1 {
          animation:slow1 16s linear infinite;
        }
        .slow1 {
          animation:slow1 16s linear infinite;
        }
        .slow2 {
          animation:slow2 16s linear infinite;
        }
        .slow2 {
          animation:slow2 16s linear infinite;
        }
        .shockEpisode {
          animation:shockEpisode 16s linear infinite;
        }
        @keyframes brakeFront {
          0% {
            d:path('M105 42V97');
          }
          2.083% {
            d:path('M104.167 42V97');
          }
          4.167% {
            d:path('M103.333 42V97');
          }
          6.25% {
            d:path('M102.5 42V97');
          }
          8.333% {
            d:path('M101.667 42V97');
          }
          10.417% {
            d:path('M100.833 42V97');
          }
          12.5% {
            d:path('M100 42V97');
          }
          14.583% {
            d:path('M99.167 42V97');
          }
          16.667% {
            d:path('M98.333 42V97');
          }
          18.75% {
            d:path('M97.5 42V97');
          }
          20.833% {
            d:path('M96.667 42V97');
          }
          22.917% {
            d:path('M95.833 42V97');
          }
          25% {
            d:path('M95 42V97');
          }
          27.083% {
            d:path('M94.167 42V97');
          }
          29.167% {
            d:path('M93.333 42V97');
          }
          31.25% {
            d:path('M92.5 42V97');
          }
          33.333% {
            d:path('M91.667 42V97');
          }
          35.417% {
            d:path('M90.833 42V97');
          }
          37.5% {
            d:path('M90 42V97');
          }
          39.583% {
            d:path('M89.167 42V97');
          }
          41.667% {
            d:path('M88.333 42V97');
          }
          43.75% {
            d:path('M87.5 42V97');
          }
          45.833% {
            d:path('M86.667 42V97');
          }
          47.917% {
            d:path('M85.833 42V97');
          }
          50% {
            d:path('M85 42V97');
          }
          52.083% {
            d:path('M84.167 42V97');
          }
          54.167% {
            d:path('M83.333 42V97');
          }
          56.25% {
            d:path('M82.5 42V97');
          }
          58.333% {
            d:path('M81.667 42V97');
          }
          60.417% {
            d:path('M80.833 42V97');
          }
          62.5% {
            d:path('M80 42V97');
          }
          64.583% {
            d:path('M79.167 42V97');
          }
          66.667% {
            d:path('M78.333 42V97');
          }
          68.75% {
            d:path('M77.5 42V97');
          }
          70.833% {
            d:path('M76.667 42V97');
          }
          72.917% {
            d:path('M75.833 42V97');
          }
          75% {
            d:path('M75 42V97');
          }
          77.083% {
            d:path('M74.167 42V97');
          }
          79.167% {
            d:path('M73.333 42V97');
          }
          81.25% {
            d:path('M72.5 42V97');
          }
          83.333% {
            d:path('M71.667 42V97');
          }
          85.417% {
            d:path('M70.833 42V97');
          }
          87.5% {
            d:path('M70 42V97');
          }
          89.583% {
            d:path('M69.167 42V97');
          }
          91.667% {
            d:path('M68.333 42V97');
          }
          93.75% {
            d:path('M67.5 42V97');
          }
          95.833% {
            d:path('M66.667 42V97');
          }
          97.917% {
            d:path('M65.833 42V97');
          }
          100% {
            d:path('M65 42V97');
          }
        }
        @keyframes car0 {
          0% {
            transform:translate(95px,61px);
            opacity:1;
          }
          0.694% {
            transform:translate(95.833px,61px);
          }
          1.389% {
            transform:translate(96.667px,61px);
          }
          2.083% {
            transform:translate(97.5px,61px);
            opacity:1;
          }
          2.778% {
            transform:translate(98.333px,61px);
          }
          3.472% {
            transform:translate(99.167px,61px);
          }
          4.167% {
            transform:translate(100px,61px);
            opacity:1;
          }
          4.861% {
            transform:translate(100.833px,61px);
          }
          5.556% {
            transform:translate(101.667px,61px);
          }
          6.25% {
            transform:translate(102.5px,61px);
            opacity:1;
          }
          6.944% {
            transform:translate(102.667px,61px);
          }
          7.639% {
            transform:translate(102.833px,61px);
          }
          8.333% {
            transform:translate(103px,61px);
            opacity:1;
          }
          9.028% {
            transform:translate(103.167px,61px);
          }
          9.722% {
            transform:translate(103.333px,61px);
          }
          10.417% {
            transform:translate(103.5px,61px);
            opacity:1;
          }
          11.111% {
            transform:translate(103.667px,61px);
          }
          11.806% {
            transform:translate(103.833px,61px);
          }
          12.5% {
            transform:translate(104px,61px);
            opacity:1;
          }
          13.194% {
            transform:translate(104.167px,61px);
          }
          13.889% {
            transform:translate(104.333px,61px);
          }
          14.583% {
            transform:translate(104.5px,61px);
            opacity:1;
          }
          15.278% {
            transform:translate(104.667px,61px);
          }
          15.972% {
            transform:translate(104.833px,61px);
          }
          16.667% {
            transform:translate(105px,61px);
            opacity:1;
          }
          17.361% {
            transform:translate(105.167px,61px);
          }
          18.056% {
            transform:translate(105.333px,61px);
          }
          18.75% {
            transform:translate(105.5px,61px);
            opacity:1;
          }
          19.444% {
            transform:translate(105.667px,61px);
          }
          20.139% {
            transform:translate(105.833px,61px);
          }
          20.833% {
            transform:translate(106px,61px);
            opacity:1;
          }
          21.528% {
            transform:translate(106.167px,61px);
          }
          22.222% {
            transform:translate(106.333px,61px);
          }
          22.917% {
            transform:translate(106.5px,61px);
            opacity:1;
          }
          23.611% {
            transform:translate(106.667px,61px);
          }
          24.306% {
            transform:translate(106.833px,61px);
          }
          25% {
            transform:translate(107px,61px);
            opacity:1;
          }
          25.694% {
            transform:translate(107.167px,61px);
          }
          26.389% {
            transform:translate(107.333px,61px);
          }
          27.083% {
            transform:translate(107.5px,61px);
            opacity:1;
          }
          27.778% {
            transform:translate(107.667px,61px);
          }
          28.472% {
            transform:translate(107.833px,61px);
          }
          29.167% {
            transform:translate(108px,61px);
            opacity:1;
          }
          29.861% {
            transform:translate(108.167px,61px);
          }
          30.556% {
            transform:translate(108.333px,61px);
          }
          31.25% {
            transform:translate(108.5px,61px);
            opacity:1;
          }
          31.944% {
            transform:translate(108.667px,61px);
          }
          32.639% {
            transform:translate(108.833px,61px);
          }
          33.333% {
            transform:translate(109px,61px);
            opacity:1;
          }
          34.028% {
            transform:translate(109.167px,61px);
          }
          34.722% {
            transform:translate(109.333px,61px);
          }
          35.417% {
            transform:translate(109.5px,61px);
            opacity:1;
          }
          36.111% {
            transform:translate(109.667px,61px);
          }
          36.806% {
            transform:translate(109.833px,61px);
          }
          37.5% {
            transform:translate(110px,61px);
            opacity:1;
          }
          38.194% {
            transform:translate(110.167px,61px);
          }
          38.889% {
            transform:translate(110.333px,61px);
          }
          39.583% {
            transform:translate(110.5px,61px);
            opacity:1;
          }
          40.278% {
            transform:translate(110.667px,61px);
          }
          40.972% {
            transform:translate(110.833px,61px);
          }
          41.667% {
            transform:translate(111px,61px);
            opacity:1;
          }
          42.361% {
            transform:translate(111.167px,61px);
          }
          43.056% {
            transform:translate(111.333px,61px);
          }
          43.75% {
            transform:translate(111.5px,61px);
            opacity:1;
          }
          44.444% {
            transform:translate(111.667px,61px);
          }
          45.139% {
            transform:translate(111.833px,61px);
          }
          45.833% {
            transform:translate(112px,61px);
            opacity:1;
          }
          46.528% {
            transform:translate(112.167px,61px);
          }
          47.222% {
            transform:translate(112.333px,61px);
          }
          47.917% {
            transform:translate(112.5px,61px);
            opacity:1;
          }
          48.611% {
            transform:translate(112.667px,61px);
          }
          49.306% {
            transform:translate(112.833px,61px);
          }
          50% {
            transform:translate(113px,61px);
            opacity:1;
          }
          50.694% {
            transform:translate(113.167px,61px);
          }
          51.389% {
            transform:translate(113.333px,61px);
          }
          52.083% {
            transform:translate(113.5px,61px);
            opacity:1;
          }
          52.778% {
            transform:translate(113.667px,61px);
          }
          53.472% {
            transform:translate(113.833px,61px);
          }
          54.167% {
            transform:translate(114px,61px);
            opacity:1;
          }
          54.861% {
            transform:translate(114.167px,61px);
          }
          55.556% {
            transform:translate(114.333px,61px);
          }
          56.25% {
            transform:translate(114.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(114.667px,61px);
          }
          57.639% {
            transform:translate(114.833px,61px);
          }
          58.333% {
            transform:translate(115px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(115.167px,61px);
          }
          59.722% {
            transform:translate(115.333px,61px);
          }
          60.417% {
            transform:translate(115.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(115.667px,61px);
          }
          61.806% {
            transform:translate(115.833px,61px);
          }
          62.5% {
            transform:translate(116px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(116.167px,61px);
          }
          63.889% {
            transform:translate(116.333px,61px);
          }
          64.583% {
            transform:translate(116.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(116.667px,61px);
          }
          65.972% {
            transform:translate(116.833px,61px);
          }
          66.667% {
            transform:translate(117px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(117.167px,61px);
          }
          68.056% {
            transform:translate(117.333px,61px);
          }
          68.75% {
            transform:translate(117.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(117.667px,61px);
          }
          70.139% {
            transform:translate(117.833px,61px);
          }
          70.833% {
            transform:translate(118px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(118.167px,61px);
          }
          72.222% {
            transform:translate(118.333px,61px);
          }
          72.917% {
            transform:translate(118.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(118.667px,61px);
          }
          74.306% {
            transform:translate(118.833px,61px);
          }
          75% {
            transform:translate(119px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(119.167px,61px);
          }
          76.389% {
            transform:translate(119.333px,61px);
          }
          77.083% {
            transform:translate(119.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(119.667px,61px);
          }
          78.472% {
            transform:translate(119.833px,61px);
          }
          79.167% {
            transform:translate(120px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(120.167px,61px);
          }
          80.556% {
            transform:translate(120.333px,61px);
          }
          81.25% {
            transform:translate(120.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(120.667px,61px);
          }
          82.639% {
            transform:translate(120.833px,61px);
          }
          83.333% {
            transform:translate(121px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(121.167px,61px);
          }
          84.722% {
            transform:translate(121.333px,61px);
          }
          85.417% {
            transform:translate(121.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(121.667px,61px);
          }
          86.806% {
            transform:translate(121.833px,61px);
          }
          87.5% {
            transform:translate(122px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(122.167px,61px);
          }
          88.889% {
            transform:translate(122.333px,61px);
          }
          89.583% {
            transform:translate(122.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(122.667px,61px);
          }
          90.972% {
            transform:translate(122.833px,61px);
          }
          91.667% {
            transform:translate(123px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(123.167px,61px);
          }
          93.056% {
            transform:translate(123.333px,61px);
          }
          93.75% {
            transform:translate(123.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(123.667px,61px);
          }
          95.139% {
            transform:translate(123.833px,61px);
          }
          95.833% {
            transform:translate(124px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(124.167px,61px);
          }
          97.222% {
            transform:translate(124.333px,61px);
          }
          97.917% {
            transform:translate(124.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(124.667px,61px);
          }
          99.306% {
            transform:translate(124.833px,61px);
          }
          100% {
            transform:translate(125px,61px);
            opacity:1;
          }
        }
        @keyframes lamp0 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car1 {
          0% {
            transform:translate(70px,61px);
            opacity:1;
          }
          0.694% {
            transform:translate(70.833px,61px);
          }
          1.389% {
            transform:translate(71.667px,61px);
          }
          2.083% {
            transform:translate(72.5px,61px);
            opacity:1;
          }
          2.778% {
            transform:translate(73.333px,61px);
          }
          3.472% {
            transform:translate(74.167px,61px);
          }
          4.167% {
            transform:translate(75px,61px);
            opacity:1;
          }
          4.861% {
            transform:translate(75.833px,61px);
          }
          5.556% {
            transform:translate(76.667px,61px);
          }
          6.25% {
            transform:translate(77.5px,61px);
            opacity:1;
          }
          6.944% {
            transform:translate(78.333px,61px);
          }
          7.639% {
            transform:translate(79.167px,61px);
          }
          8.333% {
            transform:translate(80px,61px);
            opacity:1;
          }
          9.028% {
            transform:translate(80.833px,61px);
          }
          9.722% {
            transform:translate(81.667px,61px);
          }
          10.417% {
            transform:translate(82.5px,61px);
            opacity:1;
          }
          11.111% {
            transform:translate(83.333px,61px);
          }
          11.806% {
            transform:translate(84.167px,61px);
          }
          12.5% {
            transform:translate(85px,61px);
            opacity:1;
          }
          13.194% {
            transform:translate(85.833px,61px);
          }
          13.889% {
            transform:translate(86.667px,61px);
          }
          14.583% {
            transform:translate(87.5px,61px);
            opacity:1;
          }
          15.278% {
            transform:translate(88.333px,61px);
          }
          15.972% {
            transform:translate(89.167px,61px);
          }
          16.667% {
            transform:translate(90px,61px);
            opacity:1;
          }
          17.361% {
            transform:translate(90.833px,61px);
          }
          18.056% {
            transform:translate(91.667px,61px);
          }
          18.75% {
            transform:translate(92.5px,61px);
            opacity:1;
          }
          19.444% {
            transform:translate(93.333px,61px);
          }
          20.139% {
            transform:translate(94.167px,61px);
          }
          20.833% {
            transform:translate(95px,61px);
            opacity:1;
          }
          21.528% {
            transform:translate(95.833px,61px);
          }
          22.222% {
            transform:translate(96.333px,61px);
          }
          22.917% {
            transform:translate(96.5px,61px);
            opacity:1;
          }
          23.611% {
            transform:translate(96.667px,61px);
          }
          24.306% {
            transform:translate(96.833px,61px);
          }
          25% {
            transform:translate(97px,61px);
            opacity:1;
          }
          25.694% {
            transform:translate(97.167px,61px);
          }
          26.389% {
            transform:translate(97.333px,61px);
          }
          27.083% {
            transform:translate(97.5px,61px);
            opacity:1;
          }
          27.778% {
            transform:translate(97.667px,61px);
          }
          28.472% {
            transform:translate(97.833px,61px);
          }
          29.167% {
            transform:translate(98px,61px);
            opacity:1;
          }
          29.861% {
            transform:translate(98.167px,61px);
          }
          30.556% {
            transform:translate(98.333px,61px);
          }
          31.25% {
            transform:translate(98.5px,61px);
            opacity:1;
          }
          31.944% {
            transform:translate(98.667px,61px);
          }
          32.639% {
            transform:translate(98.833px,61px);
          }
          33.333% {
            transform:translate(99px,61px);
            opacity:1;
          }
          34.028% {
            transform:translate(99.167px,61px);
          }
          34.722% {
            transform:translate(99.333px,61px);
          }
          35.417% {
            transform:translate(99.5px,61px);
            opacity:1;
          }
          36.111% {
            transform:translate(99.667px,61px);
          }
          36.806% {
            transform:translate(99.833px,61px);
          }
          37.5% {
            transform:translate(100px,61px);
            opacity:1;
          }
          38.194% {
            transform:translate(100.167px,61px);
          }
          38.889% {
            transform:translate(100.333px,61px);
          }
          39.583% {
            transform:translate(100.5px,61px);
            opacity:1;
          }
          40.278% {
            transform:translate(100.667px,61px);
          }
          40.972% {
            transform:translate(100.833px,61px);
          }
          41.667% {
            transform:translate(101px,61px);
            opacity:1;
          }
          42.361% {
            transform:translate(101.167px,61px);
          }
          43.056% {
            transform:translate(101.333px,61px);
          }
          43.75% {
            transform:translate(101.5px,61px);
            opacity:1;
          }
          44.444% {
            transform:translate(101.667px,61px);
          }
          45.139% {
            transform:translate(101.833px,61px);
          }
          45.833% {
            transform:translate(102px,61px);
            opacity:1;
          }
          46.528% {
            transform:translate(102.167px,61px);
          }
          47.222% {
            transform:translate(102.333px,61px);
          }
          47.917% {
            transform:translate(102.5px,61px);
            opacity:1;
          }
          48.611% {
            transform:translate(102.667px,61px);
          }
          49.306% {
            transform:translate(102.833px,61px);
          }
          50% {
            transform:translate(103px,61px);
            opacity:1;
          }
          50.694% {
            transform:translate(103.167px,61px);
          }
          51.389% {
            transform:translate(103.333px,61px);
          }
          52.083% {
            transform:translate(103.5px,61px);
            opacity:1;
          }
          52.778% {
            transform:translate(103.667px,61px);
          }
          53.472% {
            transform:translate(103.833px,61px);
          }
          54.167% {
            transform:translate(104px,61px);
            opacity:1;
          }
          54.861% {
            transform:translate(104.167px,61px);
          }
          55.556% {
            transform:translate(104.333px,61px);
          }
          56.25% {
            transform:translate(104.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(104.667px,61px);
          }
          57.639% {
            transform:translate(104.833px,61px);
          }
          58.333% {
            transform:translate(105px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(105.167px,61px);
          }
          59.722% {
            transform:translate(105.333px,61px);
          }
          60.417% {
            transform:translate(105.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(105.667px,61px);
          }
          61.806% {
            transform:translate(105.833px,61px);
          }
          62.5% {
            transform:translate(106px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(106.167px,61px);
          }
          63.889% {
            transform:translate(106.333px,61px);
          }
          64.583% {
            transform:translate(106.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(106.667px,61px);
          }
          65.972% {
            transform:translate(106.833px,61px);
          }
          66.667% {
            transform:translate(107px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(107.167px,61px);
          }
          68.056% {
            transform:translate(107.333px,61px);
          }
          68.75% {
            transform:translate(107.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(107.667px,61px);
          }
          70.139% {
            transform:translate(107.833px,61px);
          }
          70.833% {
            transform:translate(108px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(108.167px,61px);
          }
          72.222% {
            transform:translate(108.333px,61px);
          }
          72.917% {
            transform:translate(108.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(108.667px,61px);
          }
          74.306% {
            transform:translate(108.833px,61px);
          }
          75% {
            transform:translate(109px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(109.167px,61px);
          }
          76.389% {
            transform:translate(109.333px,61px);
          }
          77.083% {
            transform:translate(109.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(109.667px,61px);
          }
          78.472% {
            transform:translate(109.833px,61px);
          }
          79.167% {
            transform:translate(110px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(110.167px,61px);
          }
          80.556% {
            transform:translate(110.333px,61px);
          }
          81.25% {
            transform:translate(110.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(110.667px,61px);
          }
          82.639% {
            transform:translate(110.833px,61px);
          }
          83.333% {
            transform:translate(111px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(111.167px,61px);
          }
          84.722% {
            transform:translate(111.333px,61px);
          }
          85.417% {
            transform:translate(111.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(111.667px,61px);
          }
          86.806% {
            transform:translate(111.833px,61px);
          }
          87.5% {
            transform:translate(112px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(112.167px,61px);
          }
          88.889% {
            transform:translate(112.333px,61px);
          }
          89.583% {
            transform:translate(112.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(112.667px,61px);
          }
          90.972% {
            transform:translate(112.833px,61px);
          }
          91.667% {
            transform:translate(113px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(113.167px,61px);
          }
          93.056% {
            transform:translate(113.333px,61px);
          }
          93.75% {
            transform:translate(113.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(113.667px,61px);
          }
          95.139% {
            transform:translate(113.833px,61px);
          }
          95.833% {
            transform:translate(114px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(114.167px,61px);
          }
          97.222% {
            transform:translate(114.333px,61px);
          }
          97.917% {
            transform:translate(114.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(114.667px,61px);
          }
          99.306% {
            transform:translate(114.833px,61px);
          }
          100% {
            transform:translate(115px,61px);
            opacity:1;
          }
        }
        @keyframes lamp1 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car2 {
          0% {
            transform:translate(45px,61px);
            opacity:1;
          }
          0.694% {
            transform:translate(45.833px,61px);
          }
          1.389% {
            transform:translate(46.667px,61px);
          }
          2.083% {
            transform:translate(47.5px,61px);
            opacity:1;
          }
          2.778% {
            transform:translate(48.333px,61px);
          }
          3.472% {
            transform:translate(49.167px,61px);
          }
          4.167% {
            transform:translate(50px,61px);
            opacity:1;
          }
          4.861% {
            transform:translate(50.833px,61px);
          }
          5.556% {
            transform:translate(51.667px,61px);
          }
          6.25% {
            transform:translate(52.5px,61px);
            opacity:1;
          }
          6.944% {
            transform:translate(53.333px,61px);
          }
          7.639% {
            transform:translate(54.167px,61px);
          }
          8.333% {
            transform:translate(55px,61px);
            opacity:1;
          }
          9.028% {
            transform:translate(55.833px,61px);
          }
          9.722% {
            transform:translate(56.667px,61px);
          }
          10.417% {
            transform:translate(57.5px,61px);
            opacity:1;
          }
          11.111% {
            transform:translate(58.333px,61px);
          }
          11.806% {
            transform:translate(59.167px,61px);
          }
          12.5% {
            transform:translate(60px,61px);
            opacity:1;
          }
          13.194% {
            transform:translate(60.833px,61px);
          }
          13.889% {
            transform:translate(61.667px,61px);
          }
          14.583% {
            transform:translate(62.5px,61px);
            opacity:1;
          }
          15.278% {
            transform:translate(63.333px,61px);
          }
          15.972% {
            transform:translate(64.167px,61px);
          }
          16.667% {
            transform:translate(65px,61px);
            opacity:1;
          }
          17.361% {
            transform:translate(65.833px,61px);
          }
          18.056% {
            transform:translate(66.667px,61px);
          }
          18.75% {
            transform:translate(67.5px,61px);
            opacity:1;
          }
          19.444% {
            transform:translate(68.333px,61px);
          }
          20.139% {
            transform:translate(69.167px,61px);
          }
          20.833% {
            transform:translate(70px,61px);
            opacity:1;
          }
          21.528% {
            transform:translate(70.833px,61px);
          }
          22.222% {
            transform:translate(71.667px,61px);
          }
          22.917% {
            transform:translate(72.5px,61px);
            opacity:1;
          }
          23.611% {
            transform:translate(73.333px,61px);
          }
          24.306% {
            transform:translate(74.167px,61px);
          }
          25% {
            transform:translate(75px,61px);
            opacity:1;
          }
          25.694% {
            transform:translate(75.833px,61px);
          }
          26.389% {
            transform:translate(76.667px,61px);
          }
          27.083% {
            transform:translate(77.5px,61px);
            opacity:1;
          }
          27.778% {
            transform:translate(78.333px,61px);
          }
          28.472% {
            transform:translate(79.167px,61px);
          }
          29.167% {
            transform:translate(80px,61px);
            opacity:1;
          }
          29.861% {
            transform:translate(80.833px,61px);
          }
          30.556% {
            transform:translate(81.667px,61px);
          }
          31.25% {
            transform:translate(82.5px,61px);
            opacity:1;
          }
          31.944% {
            transform:translate(83.333px,61px);
          }
          32.639% {
            transform:translate(84.167px,61px);
          }
          33.333% {
            transform:translate(85px,61px);
            opacity:1;
          }
          34.028% {
            transform:translate(85.833px,61px);
          }
          34.722% {
            transform:translate(86.667px,61px);
          }
          35.417% {
            transform:translate(87.5px,61px);
            opacity:1;
          }
          36.111% {
            transform:translate(88.333px,61px);
          }
          36.806% {
            transform:translate(89.167px,61px);
          }
          37.5% {
            transform:translate(90px,61px);
            opacity:1;
          }
          38.194% {
            transform:translate(90.167px,61px);
          }
          38.889% {
            transform:translate(90.333px,61px);
          }
          39.583% {
            transform:translate(90.5px,61px);
            opacity:1;
          }
          40.278% {
            transform:translate(90.667px,61px);
          }
          40.972% {
            transform:translate(90.833px,61px);
          }
          41.667% {
            transform:translate(91px,61px);
            opacity:1;
          }
          42.361% {
            transform:translate(91.167px,61px);
          }
          43.056% {
            transform:translate(91.333px,61px);
          }
          43.75% {
            transform:translate(91.5px,61px);
            opacity:1;
          }
          44.444% {
            transform:translate(91.667px,61px);
          }
          45.139% {
            transform:translate(91.833px,61px);
          }
          45.833% {
            transform:translate(92px,61px);
            opacity:1;
          }
          46.528% {
            transform:translate(92.167px,61px);
          }
          47.222% {
            transform:translate(92.333px,61px);
          }
          47.917% {
            transform:translate(92.5px,61px);
            opacity:1;
          }
          48.611% {
            transform:translate(92.667px,61px);
          }
          49.306% {
            transform:translate(92.833px,61px);
          }
          50% {
            transform:translate(93px,61px);
            opacity:1;
          }
          50.694% {
            transform:translate(93.167px,61px);
          }
          51.389% {
            transform:translate(93.333px,61px);
          }
          52.083% {
            transform:translate(93.5px,61px);
            opacity:1;
          }
          52.778% {
            transform:translate(93.667px,61px);
          }
          53.472% {
            transform:translate(93.833px,61px);
          }
          54.167% {
            transform:translate(94px,61px);
            opacity:1;
          }
          54.861% {
            transform:translate(94.167px,61px);
          }
          55.556% {
            transform:translate(94.333px,61px);
          }
          56.25% {
            transform:translate(94.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(94.667px,61px);
          }
          57.639% {
            transform:translate(94.833px,61px);
          }
          58.333% {
            transform:translate(95px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(95.167px,61px);
          }
          59.722% {
            transform:translate(95.333px,61px);
          }
          60.417% {
            transform:translate(95.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(95.667px,61px);
          }
          61.806% {
            transform:translate(95.833px,61px);
          }
          62.5% {
            transform:translate(96px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(96.167px,61px);
          }
          63.889% {
            transform:translate(96.333px,61px);
          }
          64.583% {
            transform:translate(96.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(96.667px,61px);
          }
          65.972% {
            transform:translate(96.833px,61px);
          }
          66.667% {
            transform:translate(97px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(97.167px,61px);
          }
          68.056% {
            transform:translate(97.333px,61px);
          }
          68.75% {
            transform:translate(97.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(97.667px,61px);
          }
          70.139% {
            transform:translate(97.833px,61px);
          }
          70.833% {
            transform:translate(98px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(98.167px,61px);
          }
          72.222% {
            transform:translate(98.333px,61px);
          }
          72.917% {
            transform:translate(98.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(98.667px,61px);
          }
          74.306% {
            transform:translate(98.833px,61px);
          }
          75% {
            transform:translate(99px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(99.167px,61px);
          }
          76.389% {
            transform:translate(99.333px,61px);
          }
          77.083% {
            transform:translate(99.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(99.667px,61px);
          }
          78.472% {
            transform:translate(99.833px,61px);
          }
          79.167% {
            transform:translate(100px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(100.167px,61px);
          }
          80.556% {
            transform:translate(100.333px,61px);
          }
          81.25% {
            transform:translate(100.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(100.667px,61px);
          }
          82.639% {
            transform:translate(100.833px,61px);
          }
          83.333% {
            transform:translate(101px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(101.167px,61px);
          }
          84.722% {
            transform:translate(101.333px,61px);
          }
          85.417% {
            transform:translate(101.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(101.667px,61px);
          }
          86.806% {
            transform:translate(101.833px,61px);
          }
          87.5% {
            transform:translate(102px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(102.167px,61px);
          }
          88.889% {
            transform:translate(102.333px,61px);
          }
          89.583% {
            transform:translate(102.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(102.667px,61px);
          }
          90.972% {
            transform:translate(102.833px,61px);
          }
          91.667% {
            transform:translate(103px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(103.167px,61px);
          }
          93.056% {
            transform:translate(103.333px,61px);
          }
          93.75% {
            transform:translate(103.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(103.667px,61px);
          }
          95.139% {
            transform:translate(103.833px,61px);
          }
          95.833% {
            transform:translate(104px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(104.167px,61px);
          }
          97.222% {
            transform:translate(104.333px,61px);
          }
          97.917% {
            transform:translate(104.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(104.667px,61px);
          }
          99.306% {
            transform:translate(104.833px,61px);
          }
          100% {
            transform:translate(105px,61px);
            opacity:1;
          }
        }
        @keyframes lamp2 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car3 {
          0% {
            transform:translate(20px,61px);
            opacity:1;
          }
          0.694% {
            transform:translate(20.833px,61px);
          }
          1.389% {
            transform:translate(21.667px,61px);
          }
          2.083% {
            transform:translate(22.5px,61px);
            opacity:1;
          }
          2.778% {
            transform:translate(23.333px,61px);
          }
          3.472% {
            transform:translate(24.167px,61px);
          }
          4.167% {
            transform:translate(25px,61px);
            opacity:1;
          }
          4.861% {
            transform:translate(25.833px,61px);
          }
          5.556% {
            transform:translate(26.667px,61px);
          }
          6.25% {
            transform:translate(27.5px,61px);
            opacity:1;
          }
          6.944% {
            transform:translate(28.333px,61px);
          }
          7.639% {
            transform:translate(29.167px,61px);
          }
          8.333% {
            transform:translate(30px,61px);
            opacity:1;
          }
          9.028% {
            transform:translate(30.833px,61px);
          }
          9.722% {
            transform:translate(31.667px,61px);
          }
          10.417% {
            transform:translate(32.5px,61px);
            opacity:1;
          }
          11.111% {
            transform:translate(33.333px,61px);
          }
          11.806% {
            transform:translate(34.167px,61px);
          }
          12.5% {
            transform:translate(35px,61px);
            opacity:1;
          }
          13.194% {
            transform:translate(35.833px,61px);
          }
          13.889% {
            transform:translate(36.667px,61px);
          }
          14.583% {
            transform:translate(37.5px,61px);
            opacity:1;
          }
          15.278% {
            transform:translate(38.333px,61px);
          }
          15.972% {
            transform:translate(39.167px,61px);
          }
          16.667% {
            transform:translate(40px,61px);
            opacity:1;
          }
          17.361% {
            transform:translate(40.833px,61px);
          }
          18.056% {
            transform:translate(41.667px,61px);
          }
          18.75% {
            transform:translate(42.5px,61px);
            opacity:1;
          }
          19.444% {
            transform:translate(43.333px,61px);
          }
          20.139% {
            transform:translate(44.167px,61px);
          }
          20.833% {
            transform:translate(45px,61px);
            opacity:1;
          }
          21.528% {
            transform:translate(45.833px,61px);
          }
          22.222% {
            transform:translate(46.667px,61px);
          }
          22.917% {
            transform:translate(47.5px,61px);
            opacity:1;
          }
          23.611% {
            transform:translate(48.333px,61px);
          }
          24.306% {
            transform:translate(49.167px,61px);
          }
          25% {
            transform:translate(50px,61px);
            opacity:1;
          }
          25.694% {
            transform:translate(50.833px,61px);
          }
          26.389% {
            transform:translate(51.667px,61px);
          }
          27.083% {
            transform:translate(52.5px,61px);
            opacity:1;
          }
          27.778% {
            transform:translate(53.333px,61px);
          }
          28.472% {
            transform:translate(54.167px,61px);
          }
          29.167% {
            transform:translate(55px,61px);
            opacity:1;
          }
          29.861% {
            transform:translate(55.833px,61px);
          }
          30.556% {
            transform:translate(56.667px,61px);
          }
          31.25% {
            transform:translate(57.5px,61px);
            opacity:1;
          }
          31.944% {
            transform:translate(58.333px,61px);
          }
          32.639% {
            transform:translate(59.167px,61px);
          }
          33.333% {
            transform:translate(60px,61px);
            opacity:1;
          }
          34.028% {
            transform:translate(60.833px,61px);
          }
          34.722% {
            transform:translate(61.667px,61px);
          }
          35.417% {
            transform:translate(62.5px,61px);
            opacity:1;
          }
          36.111% {
            transform:translate(63.333px,61px);
          }
          36.806% {
            transform:translate(64.167px,61px);
          }
          37.5% {
            transform:translate(65px,61px);
            opacity:1;
          }
          38.194% {
            transform:translate(65.833px,61px);
          }
          38.889% {
            transform:translate(66.667px,61px);
          }
          39.583% {
            transform:translate(67.5px,61px);
            opacity:1;
          }
          40.278% {
            transform:translate(68.333px,61px);
          }
          40.972% {
            transform:translate(69.167px,61px);
          }
          41.667% {
            transform:translate(70px,61px);
            opacity:1;
          }
          42.361% {
            transform:translate(70.833px,61px);
          }
          43.056% {
            transform:translate(71.667px,61px);
          }
          43.75% {
            transform:translate(72.5px,61px);
            opacity:1;
          }
          44.444% {
            transform:translate(73.333px,61px);
          }
          45.139% {
            transform:translate(74.167px,61px);
          }
          45.833% {
            transform:translate(75px,61px);
            opacity:1;
          }
          46.528% {
            transform:translate(75.833px,61px);
          }
          47.222% {
            transform:translate(76.667px,61px);
          }
          47.917% {
            transform:translate(77.5px,61px);
            opacity:1;
          }
          48.611% {
            transform:translate(78.333px,61px);
          }
          49.306% {
            transform:translate(79.167px,61px);
          }
          50% {
            transform:translate(80px,61px);
            opacity:1;
          }
          50.694% {
            transform:translate(80.833px,61px);
          }
          51.389% {
            transform:translate(81.667px,61px);
          }
          52.083% {
            transform:translate(82.5px,61px);
            opacity:1;
          }
          52.778% {
            transform:translate(83.333px,61px);
          }
          53.472% {
            transform:translate(83.833px,61px);
          }
          54.167% {
            transform:translate(84px,61px);
            opacity:1;
          }
          54.861% {
            transform:translate(84.167px,61px);
          }
          55.556% {
            transform:translate(84.333px,61px);
          }
          56.25% {
            transform:translate(84.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(84.667px,61px);
          }
          57.639% {
            transform:translate(84.833px,61px);
          }
          58.333% {
            transform:translate(85px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(85.167px,61px);
          }
          59.722% {
            transform:translate(85.333px,61px);
          }
          60.417% {
            transform:translate(85.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(85.667px,61px);
          }
          61.806% {
            transform:translate(85.833px,61px);
          }
          62.5% {
            transform:translate(86px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(86.167px,61px);
          }
          63.889% {
            transform:translate(86.333px,61px);
          }
          64.583% {
            transform:translate(86.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(86.667px,61px);
          }
          65.972% {
            transform:translate(86.833px,61px);
          }
          66.667% {
            transform:translate(87px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(87.167px,61px);
          }
          68.056% {
            transform:translate(87.333px,61px);
          }
          68.75% {
            transform:translate(87.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(87.667px,61px);
          }
          70.139% {
            transform:translate(87.833px,61px);
          }
          70.833% {
            transform:translate(88px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(88.167px,61px);
          }
          72.222% {
            transform:translate(88.333px,61px);
          }
          72.917% {
            transform:translate(88.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(88.667px,61px);
          }
          74.306% {
            transform:translate(88.833px,61px);
          }
          75% {
            transform:translate(89px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(89.167px,61px);
          }
          76.389% {
            transform:translate(89.333px,61px);
          }
          77.083% {
            transform:translate(89.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(89.667px,61px);
          }
          78.472% {
            transform:translate(89.833px,61px);
          }
          79.167% {
            transform:translate(90px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(90.167px,61px);
          }
          80.556% {
            transform:translate(90.333px,61px);
          }
          81.25% {
            transform:translate(90.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(90.667px,61px);
          }
          82.639% {
            transform:translate(90.833px,61px);
          }
          83.333% {
            transform:translate(91px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(91.167px,61px);
          }
          84.722% {
            transform:translate(91.333px,61px);
          }
          85.417% {
            transform:translate(91.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(91.667px,61px);
          }
          86.806% {
            transform:translate(91.833px,61px);
          }
          87.5% {
            transform:translate(92px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(92.167px,61px);
          }
          88.889% {
            transform:translate(92.333px,61px);
          }
          89.583% {
            transform:translate(92.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(92.667px,61px);
          }
          90.972% {
            transform:translate(92.833px,61px);
          }
          91.667% {
            transform:translate(93px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(93.167px,61px);
          }
          93.056% {
            transform:translate(93.333px,61px);
          }
          93.75% {
            transform:translate(93.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(93.667px,61px);
          }
          95.139% {
            transform:translate(93.833px,61px);
          }
          95.833% {
            transform:translate(94px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(94.167px,61px);
          }
          97.222% {
            transform:translate(94.333px,61px);
          }
          97.917% {
            transform:translate(94.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(94.667px,61px);
          }
          99.306% {
            transform:translate(94.833px,61px);
          }
          100% {
            transform:translate(95px,61px);
            opacity:1;
          }
        }
        @keyframes lamp3 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car4 {
          0% {
            transform:translate(-5px,61px);
            opacity:0;
          }
          0.694% {
            transform:translate(-4.167px,61px);
          }
          1.389% {
            transform:translate(-3.333px,61px);
          }
          2.083% {
            transform:translate(-2.5px,61px);
            opacity:0;
          }
          2.778% {
            transform:translate(-1.667px,61px);
          }
          3.472% {
            transform:translate(-0.833px,61px);
          }
          4.167% {
            transform:translate(0px,61px);
            opacity:0;
          }
          4.861% {
            transform:translate(0.833px,61px);
          }
          5.556% {
            transform:translate(1.667px,61px);
          }
          6.25% {
            transform:translate(2.5px,61px);
            opacity:0;
          }
          6.944% {
            transform:translate(3.333px,61px);
          }
          7.639% {
            transform:translate(4.167px,61px);
          }
          8.333% {
            transform:translate(5px,61px);
            opacity:0;
          }
          9.028% {
            transform:translate(5.833px,61px);
          }
          9.722% {
            transform:translate(6.667px,61px);
          }
          10.417% {
            transform:translate(7.5px,61px);
            opacity:0.125;
          }
          11.111% {
            transform:translate(8.333px,61px);
          }
          11.806% {
            transform:translate(9.167px,61px);
          }
          12.5% {
            transform:translate(10px,61px);
            opacity:0.75;
          }
          13.194% {
            transform:translate(10.833px,61px);
          }
          13.889% {
            transform:translate(11.667px,61px);
          }
          14.583% {
            transform:translate(12.5px,61px);
            opacity:1;
          }
          15.278% {
            transform:translate(13.333px,61px);
          }
          15.972% {
            transform:translate(14.167px,61px);
          }
          16.667% {
            transform:translate(15px,61px);
            opacity:1;
          }
          17.361% {
            transform:translate(15.833px,61px);
          }
          18.056% {
            transform:translate(16.667px,61px);
          }
          18.75% {
            transform:translate(17.5px,61px);
            opacity:1;
          }
          19.444% {
            transform:translate(18.333px,61px);
          }
          20.139% {
            transform:translate(19.167px,61px);
          }
          20.833% {
            transform:translate(20px,61px);
            opacity:1;
          }
          21.528% {
            transform:translate(20.833px,61px);
          }
          22.222% {
            transform:translate(21.667px,61px);
          }
          22.917% {
            transform:translate(22.5px,61px);
            opacity:1;
          }
          23.611% {
            transform:translate(23.333px,61px);
          }
          24.306% {
            transform:translate(24.167px,61px);
          }
          25% {
            transform:translate(25px,61px);
            opacity:1;
          }
          25.694% {
            transform:translate(25.833px,61px);
          }
          26.389% {
            transform:translate(26.667px,61px);
          }
          27.083% {
            transform:translate(27.5px,61px);
            opacity:1;
          }
          27.778% {
            transform:translate(28.333px,61px);
          }
          28.472% {
            transform:translate(29.167px,61px);
          }
          29.167% {
            transform:translate(30px,61px);
            opacity:1;
          }
          29.861% {
            transform:translate(30.833px,61px);
          }
          30.556% {
            transform:translate(31.667px,61px);
          }
          31.25% {
            transform:translate(32.5px,61px);
            opacity:1;
          }
          31.944% {
            transform:translate(33.333px,61px);
          }
          32.639% {
            transform:translate(34.167px,61px);
          }
          33.333% {
            transform:translate(35px,61px);
            opacity:1;
          }
          34.028% {
            transform:translate(35.833px,61px);
          }
          34.722% {
            transform:translate(36.667px,61px);
          }
          35.417% {
            transform:translate(37.5px,61px);
            opacity:1;
          }
          36.111% {
            transform:translate(38.333px,61px);
          }
          36.806% {
            transform:translate(39.167px,61px);
          }
          37.5% {
            transform:translate(40px,61px);
            opacity:1;
          }
          38.194% {
            transform:translate(40.833px,61px);
          }
          38.889% {
            transform:translate(41.667px,61px);
          }
          39.583% {
            transform:translate(42.5px,61px);
            opacity:1;
          }
          40.278% {
            transform:translate(43.333px,61px);
          }
          40.972% {
            transform:translate(44.167px,61px);
          }
          41.667% {
            transform:translate(45px,61px);
            opacity:1;
          }
          42.361% {
            transform:translate(45.833px,61px);
          }
          43.056% {
            transform:translate(46.667px,61px);
          }
          43.75% {
            transform:translate(47.5px,61px);
            opacity:1;
          }
          44.444% {
            transform:translate(48.333px,61px);
          }
          45.139% {
            transform:translate(49.167px,61px);
          }
          45.833% {
            transform:translate(50px,61px);
            opacity:1;
          }
          46.528% {
            transform:translate(50.833px,61px);
          }
          47.222% {
            transform:translate(51.667px,61px);
          }
          47.917% {
            transform:translate(52.5px,61px);
            opacity:1;
          }
          48.611% {
            transform:translate(53.333px,61px);
          }
          49.306% {
            transform:translate(54.167px,61px);
          }
          50% {
            transform:translate(55px,61px);
            opacity:1;
          }
          50.694% {
            transform:translate(55.833px,61px);
          }
          51.389% {
            transform:translate(56.667px,61px);
          }
          52.083% {
            transform:translate(57.5px,61px);
            opacity:1;
          }
          52.778% {
            transform:translate(58.333px,61px);
          }
          53.472% {
            transform:translate(59.167px,61px);
          }
          54.167% {
            transform:translate(60px,61px);
            opacity:1;
          }
          54.861% {
            transform:translate(60.833px,61px);
          }
          55.556% {
            transform:translate(61.667px,61px);
          }
          56.25% {
            transform:translate(62.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(63.333px,61px);
          }
          57.639% {
            transform:translate(64.167px,61px);
          }
          58.333% {
            transform:translate(65px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(65.833px,61px);
          }
          59.722% {
            transform:translate(66.667px,61px);
          }
          60.417% {
            transform:translate(67.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(68.333px,61px);
          }
          61.806% {
            transform:translate(69.167px,61px);
          }
          62.5% {
            transform:translate(70px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(70.833px,61px);
          }
          63.889% {
            transform:translate(71.667px,61px);
          }
          64.583% {
            transform:translate(72.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(73.333px,61px);
          }
          65.972% {
            transform:translate(74.167px,61px);
          }
          66.667% {
            transform:translate(75px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(75.833px,61px);
          }
          68.056% {
            transform:translate(76.667px,61px);
          }
          68.75% {
            transform:translate(77.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(77.667px,61px);
          }
          70.139% {
            transform:translate(77.833px,61px);
          }
          70.833% {
            transform:translate(78px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(78.167px,61px);
          }
          72.222% {
            transform:translate(78.333px,61px);
          }
          72.917% {
            transform:translate(78.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(78.667px,61px);
          }
          74.306% {
            transform:translate(78.833px,61px);
          }
          75% {
            transform:translate(79px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(79.167px,61px);
          }
          76.389% {
            transform:translate(79.333px,61px);
          }
          77.083% {
            transform:translate(79.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(79.667px,61px);
          }
          78.472% {
            transform:translate(79.833px,61px);
          }
          79.167% {
            transform:translate(80px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(80.167px,61px);
          }
          80.556% {
            transform:translate(80.333px,61px);
          }
          81.25% {
            transform:translate(80.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(80.667px,61px);
          }
          82.639% {
            transform:translate(80.833px,61px);
          }
          83.333% {
            transform:translate(81px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(81.167px,61px);
          }
          84.722% {
            transform:translate(81.333px,61px);
          }
          85.417% {
            transform:translate(81.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(81.667px,61px);
          }
          86.806% {
            transform:translate(81.833px,61px);
          }
          87.5% {
            transform:translate(82px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(82.167px,61px);
          }
          88.889% {
            transform:translate(82.333px,61px);
          }
          89.583% {
            transform:translate(82.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(82.667px,61px);
          }
          90.972% {
            transform:translate(82.833px,61px);
          }
          91.667% {
            transform:translate(83px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(83.167px,61px);
          }
          93.056% {
            transform:translate(83.333px,61px);
          }
          93.75% {
            transform:translate(83.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(83.667px,61px);
          }
          95.139% {
            transform:translate(83.833px,61px);
          }
          95.833% {
            transform:translate(84px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(84.167px,61px);
          }
          97.222% {
            transform:translate(84.333px,61px);
          }
          97.917% {
            transform:translate(84.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(84.667px,61px);
          }
          99.306% {
            transform:translate(84.833px,61px);
          }
          100% {
            transform:translate(85px,61px);
            opacity:1;
          }
        }
        @keyframes lamp4 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car5 {
          0% {
            transform:translate(-30px,61px);
            opacity:0;
          }
          0.694% {
            transform:translate(-29.167px,61px);
          }
          1.389% {
            transform:translate(-28.333px,61px);
          }
          2.083% {
            transform:translate(-27.5px,61px);
            opacity:0;
          }
          2.778% {
            transform:translate(-26.667px,61px);
          }
          3.472% {
            transform:translate(-25.833px,61px);
          }
          4.167% {
            transform:translate(-25px,61px);
            opacity:0;
          }
          4.861% {
            transform:translate(-24.167px,61px);
          }
          5.556% {
            transform:translate(-23.333px,61px);
          }
          6.25% {
            transform:translate(-22.5px,61px);
            opacity:0;
          }
          6.944% {
            transform:translate(-21.667px,61px);
          }
          7.639% {
            transform:translate(-20.833px,61px);
          }
          8.333% {
            transform:translate(-20px,61px);
            opacity:0;
          }
          9.028% {
            transform:translate(-19.167px,61px);
          }
          9.722% {
            transform:translate(-18.333px,61px);
          }
          10.417% {
            transform:translate(-17.5px,61px);
            opacity:0;
          }
          11.111% {
            transform:translate(-16.667px,61px);
          }
          11.806% {
            transform:translate(-15.833px,61px);
          }
          12.5% {
            transform:translate(-15px,61px);
            opacity:0;
          }
          13.194% {
            transform:translate(-14.167px,61px);
          }
          13.889% {
            transform:translate(-13.333px,61px);
          }
          14.583% {
            transform:translate(-12.5px,61px);
            opacity:0;
          }
          15.278% {
            transform:translate(-11.667px,61px);
          }
          15.972% {
            transform:translate(-10.833px,61px);
          }
          16.667% {
            transform:translate(-10px,61px);
            opacity:0;
          }
          17.361% {
            transform:translate(-9.167px,61px);
          }
          18.056% {
            transform:translate(-8.333px,61px);
          }
          18.75% {
            transform:translate(-7.5px,61px);
            opacity:0;
          }
          19.444% {
            transform:translate(-6.667px,61px);
          }
          20.139% {
            transform:translate(-5.833px,61px);
          }
          20.833% {
            transform:translate(-5px,61px);
            opacity:0;
          }
          21.528% {
            transform:translate(-4.167px,61px);
          }
          22.222% {
            transform:translate(-3.333px,61px);
          }
          22.917% {
            transform:translate(-2.5px,61px);
            opacity:0;
          }
          23.611% {
            transform:translate(-1.667px,61px);
          }
          24.306% {
            transform:translate(-0.833px,61px);
          }
          25% {
            transform:translate(0px,61px);
            opacity:0;
          }
          25.694% {
            transform:translate(0.833px,61px);
          }
          26.389% {
            transform:translate(1.667px,61px);
          }
          27.083% {
            transform:translate(2.5px,61px);
            opacity:0;
          }
          27.778% {
            transform:translate(3.333px,61px);
          }
          28.472% {
            transform:translate(4.167px,61px);
          }
          29.167% {
            transform:translate(5px,61px);
            opacity:0;
          }
          29.861% {
            transform:translate(5.833px,61px);
          }
          30.556% {
            transform:translate(6.667px,61px);
          }
          31.25% {
            transform:translate(7.5px,61px);
            opacity:0.125;
          }
          31.944% {
            transform:translate(8.333px,61px);
          }
          32.639% {
            transform:translate(9.167px,61px);
          }
          33.333% {
            transform:translate(10px,61px);
            opacity:0.75;
          }
          34.028% {
            transform:translate(10.833px,61px);
          }
          34.722% {
            transform:translate(11.667px,61px);
          }
          35.417% {
            transform:translate(12.5px,61px);
            opacity:1;
          }
          36.111% {
            transform:translate(13.333px,61px);
          }
          36.806% {
            transform:translate(14.167px,61px);
          }
          37.5% {
            transform:translate(15px,61px);
            opacity:1;
          }
          38.194% {
            transform:translate(15.833px,61px);
          }
          38.889% {
            transform:translate(16.667px,61px);
          }
          39.583% {
            transform:translate(17.5px,61px);
            opacity:1;
          }
          40.278% {
            transform:translate(18.333px,61px);
          }
          40.972% {
            transform:translate(19.167px,61px);
          }
          41.667% {
            transform:translate(20px,61px);
            opacity:1;
          }
          42.361% {
            transform:translate(20.833px,61px);
          }
          43.056% {
            transform:translate(21.667px,61px);
          }
          43.75% {
            transform:translate(22.5px,61px);
            opacity:1;
          }
          44.444% {
            transform:translate(23.333px,61px);
          }
          45.139% {
            transform:translate(24.167px,61px);
          }
          45.833% {
            transform:translate(25px,61px);
            opacity:1;
          }
          46.528% {
            transform:translate(25.833px,61px);
          }
          47.222% {
            transform:translate(26.667px,61px);
          }
          47.917% {
            transform:translate(27.5px,61px);
            opacity:1;
          }
          48.611% {
            transform:translate(28.333px,61px);
          }
          49.306% {
            transform:translate(29.167px,61px);
          }
          50% {
            transform:translate(30px,61px);
            opacity:1;
          }
          50.694% {
            transform:translate(30.833px,61px);
          }
          51.389% {
            transform:translate(31.667px,61px);
          }
          52.083% {
            transform:translate(32.5px,61px);
            opacity:1;
          }
          52.778% {
            transform:translate(33.333px,61px);
          }
          53.472% {
            transform:translate(34.167px,61px);
          }
          54.167% {
            transform:translate(35px,61px);
            opacity:1;
          }
          54.861% {
            transform:translate(35.833px,61px);
          }
          55.556% {
            transform:translate(36.667px,61px);
          }
          56.25% {
            transform:translate(37.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(38.333px,61px);
          }
          57.639% {
            transform:translate(39.167px,61px);
          }
          58.333% {
            transform:translate(40px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(40.833px,61px);
          }
          59.722% {
            transform:translate(41.667px,61px);
          }
          60.417% {
            transform:translate(42.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(43.333px,61px);
          }
          61.806% {
            transform:translate(44.167px,61px);
          }
          62.5% {
            transform:translate(45px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(45.833px,61px);
          }
          63.889% {
            transform:translate(46.667px,61px);
          }
          64.583% {
            transform:translate(47.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(48.333px,61px);
          }
          65.972% {
            transform:translate(49.167px,61px);
          }
          66.667% {
            transform:translate(50px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(50.833px,61px);
          }
          68.056% {
            transform:translate(51.667px,61px);
          }
          68.75% {
            transform:translate(52.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(53.333px,61px);
          }
          70.139% {
            transform:translate(54.167px,61px);
          }
          70.833% {
            transform:translate(55px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(55.833px,61px);
          }
          72.222% {
            transform:translate(56.667px,61px);
          }
          72.917% {
            transform:translate(57.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(58.333px,61px);
          }
          74.306% {
            transform:translate(59.167px,61px);
          }
          75% {
            transform:translate(60px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(60.833px,61px);
          }
          76.389% {
            transform:translate(61.667px,61px);
          }
          77.083% {
            transform:translate(62.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(63.333px,61px);
          }
          78.472% {
            transform:translate(64.167px,61px);
          }
          79.167% {
            transform:translate(65px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(65.833px,61px);
          }
          80.556% {
            transform:translate(66.667px,61px);
          }
          81.25% {
            transform:translate(67.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(68.333px,61px);
          }
          82.639% {
            transform:translate(69.167px,61px);
          }
          83.333% {
            transform:translate(70px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(70.833px,61px);
          }
          84.722% {
            transform:translate(71.333px,61px);
          }
          85.417% {
            transform:translate(71.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(71.667px,61px);
          }
          86.806% {
            transform:translate(71.833px,61px);
          }
          87.5% {
            transform:translate(72px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(72.167px,61px);
          }
          88.889% {
            transform:translate(72.333px,61px);
          }
          89.583% {
            transform:translate(72.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(72.667px,61px);
          }
          90.972% {
            transform:translate(72.833px,61px);
          }
          91.667% {
            transform:translate(73px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(73.167px,61px);
          }
          93.056% {
            transform:translate(73.333px,61px);
          }
          93.75% {
            transform:translate(73.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(73.667px,61px);
          }
          95.139% {
            transform:translate(73.833px,61px);
          }
          95.833% {
            transform:translate(74px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(74.167px,61px);
          }
          97.222% {
            transform:translate(74.333px,61px);
          }
          97.917% {
            transform:translate(74.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(74.667px,61px);
          }
          99.306% {
            transform:translate(74.833px,61px);
          }
          100% {
            transform:translate(75px,61px);
            opacity:1;
          }
        }
        @keyframes lamp5 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car6 {
          0% {
            transform:translate(-55px,61px);
            opacity:0;
          }
          0.694% {
            transform:translate(-54.167px,61px);
          }
          1.389% {
            transform:translate(-53.333px,61px);
          }
          2.083% {
            transform:translate(-52.5px,61px);
            opacity:0;
          }
          2.778% {
            transform:translate(-51.667px,61px);
          }
          3.472% {
            transform:translate(-50.833px,61px);
          }
          4.167% {
            transform:translate(-50px,61px);
            opacity:0;
          }
          4.861% {
            transform:translate(-49.167px,61px);
          }
          5.556% {
            transform:translate(-48.333px,61px);
          }
          6.25% {
            transform:translate(-47.5px,61px);
            opacity:0;
          }
          6.944% {
            transform:translate(-46.667px,61px);
          }
          7.639% {
            transform:translate(-45.833px,61px);
          }
          8.333% {
            transform:translate(-45px,61px);
            opacity:0;
          }
          9.028% {
            transform:translate(-44.167px,61px);
          }
          9.722% {
            transform:translate(-43.333px,61px);
          }
          10.417% {
            transform:translate(-42.5px,61px);
            opacity:0;
          }
          11.111% {
            transform:translate(-41.667px,61px);
          }
          11.806% {
            transform:translate(-40.833px,61px);
          }
          12.5% {
            transform:translate(-40px,61px);
            opacity:0;
          }
          13.194% {
            transform:translate(-39.167px,61px);
          }
          13.889% {
            transform:translate(-38.333px,61px);
          }
          14.583% {
            transform:translate(-37.5px,61px);
            opacity:0;
          }
          15.278% {
            transform:translate(-36.667px,61px);
          }
          15.972% {
            transform:translate(-35.833px,61px);
          }
          16.667% {
            transform:translate(-35px,61px);
            opacity:0;
          }
          17.361% {
            transform:translate(-34.167px,61px);
          }
          18.056% {
            transform:translate(-33.333px,61px);
          }
          18.75% {
            transform:translate(-32.5px,61px);
            opacity:0;
          }
          19.444% {
            transform:translate(-31.667px,61px);
          }
          20.139% {
            transform:translate(-30.833px,61px);
          }
          20.833% {
            transform:translate(-30px,61px);
            opacity:0;
          }
          21.528% {
            transform:translate(-29.167px,61px);
          }
          22.222% {
            transform:translate(-28.333px,61px);
          }
          22.917% {
            transform:translate(-27.5px,61px);
            opacity:0;
          }
          23.611% {
            transform:translate(-26.667px,61px);
          }
          24.306% {
            transform:translate(-25.833px,61px);
          }
          25% {
            transform:translate(-25px,61px);
            opacity:0;
          }
          25.694% {
            transform:translate(-24.167px,61px);
          }
          26.389% {
            transform:translate(-23.333px,61px);
          }
          27.083% {
            transform:translate(-22.5px,61px);
            opacity:0;
          }
          27.778% {
            transform:translate(-21.667px,61px);
          }
          28.472% {
            transform:translate(-20.833px,61px);
          }
          29.167% {
            transform:translate(-20px,61px);
            opacity:0;
          }
          29.861% {
            transform:translate(-19.167px,61px);
          }
          30.556% {
            transform:translate(-18.333px,61px);
          }
          31.25% {
            transform:translate(-17.5px,61px);
            opacity:0;
          }
          31.944% {
            transform:translate(-16.667px,61px);
          }
          32.639% {
            transform:translate(-15.833px,61px);
          }
          33.333% {
            transform:translate(-15px,61px);
            opacity:0;
          }
          34.028% {
            transform:translate(-14.167px,61px);
          }
          34.722% {
            transform:translate(-13.333px,61px);
          }
          35.417% {
            transform:translate(-12.5px,61px);
            opacity:0;
          }
          36.111% {
            transform:translate(-11.667px,61px);
          }
          36.806% {
            transform:translate(-10.833px,61px);
          }
          37.5% {
            transform:translate(-10px,61px);
            opacity:0;
          }
          38.194% {
            transform:translate(-9.167px,61px);
          }
          38.889% {
            transform:translate(-8.333px,61px);
          }
          39.583% {
            transform:translate(-7.5px,61px);
            opacity:0;
          }
          40.278% {
            transform:translate(-6.667px,61px);
          }
          40.972% {
            transform:translate(-5.833px,61px);
          }
          41.667% {
            transform:translate(-5px,61px);
            opacity:0;
          }
          42.361% {
            transform:translate(-4.167px,61px);
          }
          43.056% {
            transform:translate(-3.333px,61px);
          }
          43.75% {
            transform:translate(-2.5px,61px);
            opacity:0;
          }
          44.444% {
            transform:translate(-1.667px,61px);
          }
          45.139% {
            transform:translate(-0.833px,61px);
          }
          45.833% {
            transform:translate(0px,61px);
            opacity:0;
          }
          46.528% {
            transform:translate(0.833px,61px);
          }
          47.222% {
            transform:translate(1.667px,61px);
          }
          47.917% {
            transform:translate(2.5px,61px);
            opacity:0;
          }
          48.611% {
            transform:translate(3.333px,61px);
          }
          49.306% {
            transform:translate(4.167px,61px);
          }
          50% {
            transform:translate(5px,61px);
            opacity:0;
          }
          50.694% {
            transform:translate(5.833px,61px);
          }
          51.389% {
            transform:translate(6.667px,61px);
          }
          52.083% {
            transform:translate(7.5px,61px);
            opacity:0.125;
          }
          52.778% {
            transform:translate(8.333px,61px);
          }
          53.472% {
            transform:translate(9.167px,61px);
          }
          54.167% {
            transform:translate(10px,61px);
            opacity:0.75;
          }
          54.861% {
            transform:translate(10.833px,61px);
          }
          55.556% {
            transform:translate(11.667px,61px);
          }
          56.25% {
            transform:translate(12.5px,61px);
            opacity:1;
          }
          56.944% {
            transform:translate(13.333px,61px);
          }
          57.639% {
            transform:translate(14.167px,61px);
          }
          58.333% {
            transform:translate(15px,61px);
            opacity:1;
          }
          59.028% {
            transform:translate(15.833px,61px);
          }
          59.722% {
            transform:translate(16.667px,61px);
          }
          60.417% {
            transform:translate(17.5px,61px);
            opacity:1;
          }
          61.111% {
            transform:translate(18.333px,61px);
          }
          61.806% {
            transform:translate(19.167px,61px);
          }
          62.5% {
            transform:translate(20px,61px);
            opacity:1;
          }
          63.194% {
            transform:translate(20.833px,61px);
          }
          63.889% {
            transform:translate(21.667px,61px);
          }
          64.583% {
            transform:translate(22.5px,61px);
            opacity:1;
          }
          65.278% {
            transform:translate(23.333px,61px);
          }
          65.972% {
            transform:translate(24.167px,61px);
          }
          66.667% {
            transform:translate(25px,61px);
            opacity:1;
          }
          67.361% {
            transform:translate(25.833px,61px);
          }
          68.056% {
            transform:translate(26.667px,61px);
          }
          68.75% {
            transform:translate(27.5px,61px);
            opacity:1;
          }
          69.444% {
            transform:translate(28.333px,61px);
          }
          70.139% {
            transform:translate(29.167px,61px);
          }
          70.833% {
            transform:translate(30px,61px);
            opacity:1;
          }
          71.528% {
            transform:translate(30.833px,61px);
          }
          72.222% {
            transform:translate(31.667px,61px);
          }
          72.917% {
            transform:translate(32.5px,61px);
            opacity:1;
          }
          73.611% {
            transform:translate(33.333px,61px);
          }
          74.306% {
            transform:translate(34.167px,61px);
          }
          75% {
            transform:translate(35px,61px);
            opacity:1;
          }
          75.694% {
            transform:translate(35.833px,61px);
          }
          76.389% {
            transform:translate(36.667px,61px);
          }
          77.083% {
            transform:translate(37.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(38.333px,61px);
          }
          78.472% {
            transform:translate(39.167px,61px);
          }
          79.167% {
            transform:translate(40px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(40.833px,61px);
          }
          80.556% {
            transform:translate(41.667px,61px);
          }
          81.25% {
            transform:translate(42.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(43.333px,61px);
          }
          82.639% {
            transform:translate(44.167px,61px);
          }
          83.333% {
            transform:translate(45px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(45.833px,61px);
          }
          84.722% {
            transform:translate(46.667px,61px);
          }
          85.417% {
            transform:translate(47.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(48.333px,61px);
          }
          86.806% {
            transform:translate(49.167px,61px);
          }
          87.5% {
            transform:translate(50px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(50.833px,61px);
          }
          88.889% {
            transform:translate(51.667px,61px);
          }
          89.583% {
            transform:translate(52.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(53.333px,61px);
          }
          90.972% {
            transform:translate(54.167px,61px);
          }
          91.667% {
            transform:translate(55px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(55.833px,61px);
          }
          93.056% {
            transform:translate(56.667px,61px);
          }
          93.75% {
            transform:translate(57.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(58.333px,61px);
          }
          95.139% {
            transform:translate(59.167px,61px);
          }
          95.833% {
            transform:translate(60px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(60.833px,61px);
          }
          97.222% {
            transform:translate(61.667px,61px);
          }
          97.917% {
            transform:translate(62.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(63.333px,61px);
          }
          99.306% {
            transform:translate(64.167px,61px);
          }
          100% {
            transform:translate(65px,61px);
            opacity:1;
          }
        }
        @keyframes lamp6 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes car7 {
          0% {
            transform:translate(-80px,61px);
            opacity:0;
          }
          0.694% {
            transform:translate(-79.167px,61px);
          }
          1.389% {
            transform:translate(-78.333px,61px);
          }
          2.083% {
            transform:translate(-77.5px,61px);
            opacity:0;
          }
          2.778% {
            transform:translate(-76.667px,61px);
          }
          3.472% {
            transform:translate(-75.833px,61px);
          }
          4.167% {
            transform:translate(-75px,61px);
            opacity:0;
          }
          4.861% {
            transform:translate(-74.167px,61px);
          }
          5.556% {
            transform:translate(-73.333px,61px);
          }
          6.25% {
            transform:translate(-72.5px,61px);
            opacity:0;
          }
          6.944% {
            transform:translate(-71.667px,61px);
          }
          7.639% {
            transform:translate(-70.833px,61px);
          }
          8.333% {
            transform:translate(-70px,61px);
            opacity:0;
          }
          9.028% {
            transform:translate(-69.167px,61px);
          }
          9.722% {
            transform:translate(-68.333px,61px);
          }
          10.417% {
            transform:translate(-67.5px,61px);
            opacity:0;
          }
          11.111% {
            transform:translate(-66.667px,61px);
          }
          11.806% {
            transform:translate(-65.833px,61px);
          }
          12.5% {
            transform:translate(-65px,61px);
            opacity:0;
          }
          13.194% {
            transform:translate(-64.167px,61px);
          }
          13.889% {
            transform:translate(-63.333px,61px);
          }
          14.583% {
            transform:translate(-62.5px,61px);
            opacity:0;
          }
          15.278% {
            transform:translate(-61.667px,61px);
          }
          15.972% {
            transform:translate(-60.833px,61px);
          }
          16.667% {
            transform:translate(-60px,61px);
            opacity:0;
          }
          17.361% {
            transform:translate(-59.167px,61px);
          }
          18.056% {
            transform:translate(-58.333px,61px);
          }
          18.75% {
            transform:translate(-57.5px,61px);
            opacity:0;
          }
          19.444% {
            transform:translate(-56.667px,61px);
          }
          20.139% {
            transform:translate(-55.833px,61px);
          }
          20.833% {
            transform:translate(-55px,61px);
            opacity:0;
          }
          21.528% {
            transform:translate(-54.167px,61px);
          }
          22.222% {
            transform:translate(-53.333px,61px);
          }
          22.917% {
            transform:translate(-52.5px,61px);
            opacity:0;
          }
          23.611% {
            transform:translate(-51.667px,61px);
          }
          24.306% {
            transform:translate(-50.833px,61px);
          }
          25% {
            transform:translate(-50px,61px);
            opacity:0;
          }
          25.694% {
            transform:translate(-49.167px,61px);
          }
          26.389% {
            transform:translate(-48.333px,61px);
          }
          27.083% {
            transform:translate(-47.5px,61px);
            opacity:0;
          }
          27.778% {
            transform:translate(-46.667px,61px);
          }
          28.472% {
            transform:translate(-45.833px,61px);
          }
          29.167% {
            transform:translate(-45px,61px);
            opacity:0;
          }
          29.861% {
            transform:translate(-44.167px,61px);
          }
          30.556% {
            transform:translate(-43.333px,61px);
          }
          31.25% {
            transform:translate(-42.5px,61px);
            opacity:0;
          }
          31.944% {
            transform:translate(-41.667px,61px);
          }
          32.639% {
            transform:translate(-40.833px,61px);
          }
          33.333% {
            transform:translate(-40px,61px);
            opacity:0;
          }
          34.028% {
            transform:translate(-39.167px,61px);
          }
          34.722% {
            transform:translate(-38.333px,61px);
          }
          35.417% {
            transform:translate(-37.5px,61px);
            opacity:0;
          }
          36.111% {
            transform:translate(-36.667px,61px);
          }
          36.806% {
            transform:translate(-35.833px,61px);
          }
          37.5% {
            transform:translate(-35px,61px);
            opacity:0;
          }
          38.194% {
            transform:translate(-34.167px,61px);
          }
          38.889% {
            transform:translate(-33.333px,61px);
          }
          39.583% {
            transform:translate(-32.5px,61px);
            opacity:0;
          }
          40.278% {
            transform:translate(-31.667px,61px);
          }
          40.972% {
            transform:translate(-30.833px,61px);
          }
          41.667% {
            transform:translate(-30px,61px);
            opacity:0;
          }
          42.361% {
            transform:translate(-29.167px,61px);
          }
          43.056% {
            transform:translate(-28.333px,61px);
          }
          43.75% {
            transform:translate(-27.5px,61px);
            opacity:0;
          }
          44.444% {
            transform:translate(-26.667px,61px);
          }
          45.139% {
            transform:translate(-25.833px,61px);
          }
          45.833% {
            transform:translate(-25px,61px);
            opacity:0;
          }
          46.528% {
            transform:translate(-24.167px,61px);
          }
          47.222% {
            transform:translate(-23.333px,61px);
          }
          47.917% {
            transform:translate(-22.5px,61px);
            opacity:0;
          }
          48.611% {
            transform:translate(-21.667px,61px);
          }
          49.306% {
            transform:translate(-20.833px,61px);
          }
          50% {
            transform:translate(-20px,61px);
            opacity:0;
          }
          50.694% {
            transform:translate(-19.167px,61px);
          }
          51.389% {
            transform:translate(-18.333px,61px);
          }
          52.083% {
            transform:translate(-17.5px,61px);
            opacity:0;
          }
          52.778% {
            transform:translate(-16.667px,61px);
          }
          53.472% {
            transform:translate(-15.833px,61px);
          }
          54.167% {
            transform:translate(-15px,61px);
            opacity:0;
          }
          54.861% {
            transform:translate(-14.167px,61px);
          }
          55.556% {
            transform:translate(-13.333px,61px);
          }
          56.25% {
            transform:translate(-12.5px,61px);
            opacity:0;
          }
          56.944% {
            transform:translate(-11.667px,61px);
          }
          57.639% {
            transform:translate(-10.833px,61px);
          }
          58.333% {
            transform:translate(-10px,61px);
            opacity:0;
          }
          59.028% {
            transform:translate(-9.167px,61px);
          }
          59.722% {
            transform:translate(-8.333px,61px);
          }
          60.417% {
            transform:translate(-7.5px,61px);
            opacity:0;
          }
          61.111% {
            transform:translate(-6.667px,61px);
          }
          61.806% {
            transform:translate(-5.833px,61px);
          }
          62.5% {
            transform:translate(-5px,61px);
            opacity:0;
          }
          63.194% {
            transform:translate(-4.167px,61px);
          }
          63.889% {
            transform:translate(-3.333px,61px);
          }
          64.583% {
            transform:translate(-2.5px,61px);
            opacity:0;
          }
          65.278% {
            transform:translate(-1.667px,61px);
          }
          65.972% {
            transform:translate(-0.833px,61px);
          }
          66.667% {
            transform:translate(0px,61px);
            opacity:0;
          }
          67.361% {
            transform:translate(0.833px,61px);
          }
          68.056% {
            transform:translate(1.667px,61px);
          }
          68.75% {
            transform:translate(2.5px,61px);
            opacity:0;
          }
          69.444% {
            transform:translate(3.333px,61px);
          }
          70.139% {
            transform:translate(4.167px,61px);
          }
          70.833% {
            transform:translate(5px,61px);
            opacity:0;
          }
          71.528% {
            transform:translate(5.833px,61px);
          }
          72.222% {
            transform:translate(6.667px,61px);
          }
          72.917% {
            transform:translate(7.5px,61px);
            opacity:0.125;
          }
          73.611% {
            transform:translate(8.333px,61px);
          }
          74.306% {
            transform:translate(9.167px,61px);
          }
          75% {
            transform:translate(10px,61px);
            opacity:0.75;
          }
          75.694% {
            transform:translate(10.833px,61px);
          }
          76.389% {
            transform:translate(11.667px,61px);
          }
          77.083% {
            transform:translate(12.5px,61px);
            opacity:1;
          }
          77.778% {
            transform:translate(13.333px,61px);
          }
          78.472% {
            transform:translate(14.167px,61px);
          }
          79.167% {
            transform:translate(15px,61px);
            opacity:1;
          }
          79.861% {
            transform:translate(15.833px,61px);
          }
          80.556% {
            transform:translate(16.667px,61px);
          }
          81.25% {
            transform:translate(17.5px,61px);
            opacity:1;
          }
          81.944% {
            transform:translate(18.333px,61px);
          }
          82.639% {
            transform:translate(19.167px,61px);
          }
          83.333% {
            transform:translate(20px,61px);
            opacity:1;
          }
          84.028% {
            transform:translate(20.833px,61px);
          }
          84.722% {
            transform:translate(21.667px,61px);
          }
          85.417% {
            transform:translate(22.5px,61px);
            opacity:1;
          }
          86.111% {
            transform:translate(23.333px,61px);
          }
          86.806% {
            transform:translate(24.167px,61px);
          }
          87.5% {
            transform:translate(25px,61px);
            opacity:1;
          }
          88.194% {
            transform:translate(25.833px,61px);
          }
          88.889% {
            transform:translate(26.667px,61px);
          }
          89.583% {
            transform:translate(27.5px,61px);
            opacity:1;
          }
          90.278% {
            transform:translate(28.333px,61px);
          }
          90.972% {
            transform:translate(29.167px,61px);
          }
          91.667% {
            transform:translate(30px,61px);
            opacity:1;
          }
          92.361% {
            transform:translate(30.833px,61px);
          }
          93.056% {
            transform:translate(31.667px,61px);
          }
          93.75% {
            transform:translate(32.5px,61px);
            opacity:1;
          }
          94.444% {
            transform:translate(33.333px,61px);
          }
          95.139% {
            transform:translate(34.167px,61px);
          }
          95.833% {
            transform:translate(35px,61px);
            opacity:1;
          }
          96.528% {
            transform:translate(35.833px,61px);
          }
          97.222% {
            transform:translate(36.667px,61px);
          }
          97.917% {
            transform:translate(37.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(38.333px,61px);
          }
          99.306% {
            transform:translate(39.167px,61px);
          }
          100% {
            transform:translate(40px,61px);
            opacity:1;
          }
        }
        @keyframes lamp7 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes car8 {
          0% {
            transform:translate(-105px,61px);
            opacity:0;
          }
          0.694% {
            transform:translate(-104.167px,61px);
          }
          1.389% {
            transform:translate(-103.333px,61px);
          }
          2.083% {
            transform:translate(-102.5px,61px);
            opacity:0;
          }
          2.778% {
            transform:translate(-101.667px,61px);
          }
          3.472% {
            transform:translate(-100.833px,61px);
          }
          4.167% {
            transform:translate(-100px,61px);
            opacity:0;
          }
          4.861% {
            transform:translate(-99.167px,61px);
          }
          5.556% {
            transform:translate(-98.333px,61px);
          }
          6.25% {
            transform:translate(-97.5px,61px);
            opacity:0;
          }
          6.944% {
            transform:translate(-96.667px,61px);
          }
          7.639% {
            transform:translate(-95.833px,61px);
          }
          8.333% {
            transform:translate(-95px,61px);
            opacity:0;
          }
          9.028% {
            transform:translate(-94.167px,61px);
          }
          9.722% {
            transform:translate(-93.333px,61px);
          }
          10.417% {
            transform:translate(-92.5px,61px);
            opacity:0;
          }
          11.111% {
            transform:translate(-91.667px,61px);
          }
          11.806% {
            transform:translate(-90.833px,61px);
          }
          12.5% {
            transform:translate(-90px,61px);
            opacity:0;
          }
          13.194% {
            transform:translate(-89.167px,61px);
          }
          13.889% {
            transform:translate(-88.333px,61px);
          }
          14.583% {
            transform:translate(-87.5px,61px);
            opacity:0;
          }
          15.278% {
            transform:translate(-86.667px,61px);
          }
          15.972% {
            transform:translate(-85.833px,61px);
          }
          16.667% {
            transform:translate(-85px,61px);
            opacity:0;
          }
          17.361% {
            transform:translate(-84.167px,61px);
          }
          18.056% {
            transform:translate(-83.333px,61px);
          }
          18.75% {
            transform:translate(-82.5px,61px);
            opacity:0;
          }
          19.444% {
            transform:translate(-81.667px,61px);
          }
          20.139% {
            transform:translate(-80.833px,61px);
          }
          20.833% {
            transform:translate(-80px,61px);
            opacity:0;
          }
          21.528% {
            transform:translate(-79.167px,61px);
          }
          22.222% {
            transform:translate(-78.333px,61px);
          }
          22.917% {
            transform:translate(-77.5px,61px);
            opacity:0;
          }
          23.611% {
            transform:translate(-76.667px,61px);
          }
          24.306% {
            transform:translate(-75.833px,61px);
          }
          25% {
            transform:translate(-75px,61px);
            opacity:0;
          }
          25.694% {
            transform:translate(-74.167px,61px);
          }
          26.389% {
            transform:translate(-73.333px,61px);
          }
          27.083% {
            transform:translate(-72.5px,61px);
            opacity:0;
          }
          27.778% {
            transform:translate(-71.667px,61px);
          }
          28.472% {
            transform:translate(-70.833px,61px);
          }
          29.167% {
            transform:translate(-70px,61px);
            opacity:0;
          }
          29.861% {
            transform:translate(-69.167px,61px);
          }
          30.556% {
            transform:translate(-68.333px,61px);
          }
          31.25% {
            transform:translate(-67.5px,61px);
            opacity:0;
          }
          31.944% {
            transform:translate(-66.667px,61px);
          }
          32.639% {
            transform:translate(-65.833px,61px);
          }
          33.333% {
            transform:translate(-65px,61px);
            opacity:0;
          }
          34.028% {
            transform:translate(-64.167px,61px);
          }
          34.722% {
            transform:translate(-63.333px,61px);
          }
          35.417% {
            transform:translate(-62.5px,61px);
            opacity:0;
          }
          36.111% {
            transform:translate(-61.667px,61px);
          }
          36.806% {
            transform:translate(-60.833px,61px);
          }
          37.5% {
            transform:translate(-60px,61px);
            opacity:0;
          }
          38.194% {
            transform:translate(-59.167px,61px);
          }
          38.889% {
            transform:translate(-58.333px,61px);
          }
          39.583% {
            transform:translate(-57.5px,61px);
            opacity:0;
          }
          40.278% {
            transform:translate(-56.667px,61px);
          }
          40.972% {
            transform:translate(-55.833px,61px);
          }
          41.667% {
            transform:translate(-55px,61px);
            opacity:0;
          }
          42.361% {
            transform:translate(-54.167px,61px);
          }
          43.056% {
            transform:translate(-53.333px,61px);
          }
          43.75% {
            transform:translate(-52.5px,61px);
            opacity:0;
          }
          44.444% {
            transform:translate(-51.667px,61px);
          }
          45.139% {
            transform:translate(-50.833px,61px);
          }
          45.833% {
            transform:translate(-50px,61px);
            opacity:0;
          }
          46.528% {
            transform:translate(-49.167px,61px);
          }
          47.222% {
            transform:translate(-48.333px,61px);
          }
          47.917% {
            transform:translate(-47.5px,61px);
            opacity:0;
          }
          48.611% {
            transform:translate(-46.667px,61px);
          }
          49.306% {
            transform:translate(-45.833px,61px);
          }
          50% {
            transform:translate(-45px,61px);
            opacity:0;
          }
          50.694% {
            transform:translate(-44.167px,61px);
          }
          51.389% {
            transform:translate(-43.333px,61px);
          }
          52.083% {
            transform:translate(-42.5px,61px);
            opacity:0;
          }
          52.778% {
            transform:translate(-41.667px,61px);
          }
          53.472% {
            transform:translate(-40.833px,61px);
          }
          54.167% {
            transform:translate(-40px,61px);
            opacity:0;
          }
          54.861% {
            transform:translate(-39.167px,61px);
          }
          55.556% {
            transform:translate(-38.333px,61px);
          }
          56.25% {
            transform:translate(-37.5px,61px);
            opacity:0;
          }
          56.944% {
            transform:translate(-36.667px,61px);
          }
          57.639% {
            transform:translate(-35.833px,61px);
          }
          58.333% {
            transform:translate(-35px,61px);
            opacity:0;
          }
          59.028% {
            transform:translate(-34.167px,61px);
          }
          59.722% {
            transform:translate(-33.333px,61px);
          }
          60.417% {
            transform:translate(-32.5px,61px);
            opacity:0;
          }
          61.111% {
            transform:translate(-31.667px,61px);
          }
          61.806% {
            transform:translate(-30.833px,61px);
          }
          62.5% {
            transform:translate(-30px,61px);
            opacity:0;
          }
          63.194% {
            transform:translate(-29.167px,61px);
          }
          63.889% {
            transform:translate(-28.333px,61px);
          }
          64.583% {
            transform:translate(-27.5px,61px);
            opacity:0;
          }
          65.278% {
            transform:translate(-26.667px,61px);
          }
          65.972% {
            transform:translate(-25.833px,61px);
          }
          66.667% {
            transform:translate(-25px,61px);
            opacity:0;
          }
          67.361% {
            transform:translate(-24.167px,61px);
          }
          68.056% {
            transform:translate(-23.333px,61px);
          }
          68.75% {
            transform:translate(-22.5px,61px);
            opacity:0;
          }
          69.444% {
            transform:translate(-21.667px,61px);
          }
          70.139% {
            transform:translate(-20.833px,61px);
          }
          70.833% {
            transform:translate(-20px,61px);
            opacity:0;
          }
          71.528% {
            transform:translate(-19.167px,61px);
          }
          72.222% {
            transform:translate(-18.333px,61px);
          }
          72.917% {
            transform:translate(-17.5px,61px);
            opacity:0;
          }
          73.611% {
            transform:translate(-16.667px,61px);
          }
          74.306% {
            transform:translate(-15.833px,61px);
          }
          75% {
            transform:translate(-15px,61px);
            opacity:0;
          }
          75.694% {
            transform:translate(-14.167px,61px);
          }
          76.389% {
            transform:translate(-13.333px,61px);
          }
          77.083% {
            transform:translate(-12.5px,61px);
            opacity:0;
          }
          77.778% {
            transform:translate(-11.667px,61px);
          }
          78.472% {
            transform:translate(-10.833px,61px);
          }
          79.167% {
            transform:translate(-10px,61px);
            opacity:0;
          }
          79.861% {
            transform:translate(-9.167px,61px);
          }
          80.556% {
            transform:translate(-8.333px,61px);
          }
          81.25% {
            transform:translate(-7.5px,61px);
            opacity:0;
          }
          81.944% {
            transform:translate(-6.667px,61px);
          }
          82.639% {
            transform:translate(-5.833px,61px);
          }
          83.333% {
            transform:translate(-5px,61px);
            opacity:0;
          }
          84.028% {
            transform:translate(-4.167px,61px);
          }
          84.722% {
            transform:translate(-3.333px,61px);
          }
          85.417% {
            transform:translate(-2.5px,61px);
            opacity:0;
          }
          86.111% {
            transform:translate(-1.667px,61px);
          }
          86.806% {
            transform:translate(-0.833px,61px);
          }
          87.5% {
            transform:translate(0px,61px);
            opacity:0;
          }
          88.194% {
            transform:translate(0.833px,61px);
          }
          88.889% {
            transform:translate(1.667px,61px);
          }
          89.583% {
            transform:translate(2.5px,61px);
            opacity:0;
          }
          90.278% {
            transform:translate(3.333px,61px);
          }
          90.972% {
            transform:translate(4.167px,61px);
          }
          91.667% {
            transform:translate(5px,61px);
            opacity:0;
          }
          92.361% {
            transform:translate(5.833px,61px);
          }
          93.056% {
            transform:translate(6.667px,61px);
          }
          93.75% {
            transform:translate(7.5px,61px);
            opacity:0.125;
          }
          94.444% {
            transform:translate(8.333px,61px);
          }
          95.139% {
            transform:translate(9.167px,61px);
          }
          95.833% {
            transform:translate(10px,61px);
            opacity:0.75;
          }
          96.528% {
            transform:translate(10.833px,61px);
          }
          97.222% {
            transform:translate(11.667px,61px);
          }
          97.917% {
            transform:translate(12.5px,61px);
            opacity:1;
          }
          98.611% {
            transform:translate(13.333px,61px);
          }
          99.306% {
            transform:translate(14.167px,61px);
          }
          100% {
            transform:translate(15px,61px);
            opacity:1;
          }
        }
        @keyframes lamp8 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes car9 {
          0% {
            transform:translate(-130px,61px);
            opacity:0;
          }
          0.694% {
            transform:translate(-129.167px,61px);
          }
          1.389% {
            transform:translate(-128.333px,61px);
          }
          2.083% {
            transform:translate(-127.5px,61px);
            opacity:0;
          }
          2.778% {
            transform:translate(-126.667px,61px);
          }
          3.472% {
            transform:translate(-125.833px,61px);
          }
          4.167% {
            transform:translate(-125px,61px);
            opacity:0;
          }
          4.861% {
            transform:translate(-124.167px,61px);
          }
          5.556% {
            transform:translate(-123.333px,61px);
          }
          6.25% {
            transform:translate(-122.5px,61px);
            opacity:0;
          }
          6.944% {
            transform:translate(-121.667px,61px);
          }
          7.639% {
            transform:translate(-120.833px,61px);
          }
          8.333% {
            transform:translate(-120px,61px);
            opacity:0;
          }
          9.028% {
            transform:translate(-119.167px,61px);
          }
          9.722% {
            transform:translate(-118.333px,61px);
          }
          10.417% {
            transform:translate(-117.5px,61px);
            opacity:0;
          }
          11.111% {
            transform:translate(-116.667px,61px);
          }
          11.806% {
            transform:translate(-115.833px,61px);
          }
          12.5% {
            transform:translate(-115px,61px);
            opacity:0;
          }
          13.194% {
            transform:translate(-114.167px,61px);
          }
          13.889% {
            transform:translate(-113.333px,61px);
          }
          14.583% {
            transform:translate(-112.5px,61px);
            opacity:0;
          }
          15.278% {
            transform:translate(-111.667px,61px);
          }
          15.972% {
            transform:translate(-110.833px,61px);
          }
          16.667% {
            transform:translate(-110px,61px);
            opacity:0;
          }
          17.361% {
            transform:translate(-109.167px,61px);
          }
          18.056% {
            transform:translate(-108.333px,61px);
          }
          18.75% {
            transform:translate(-107.5px,61px);
            opacity:0;
          }
          19.444% {
            transform:translate(-106.667px,61px);
          }
          20.139% {
            transform:translate(-105.833px,61px);
          }
          20.833% {
            transform:translate(-105px,61px);
            opacity:0;
          }
          21.528% {
            transform:translate(-104.167px,61px);
          }
          22.222% {
            transform:translate(-103.333px,61px);
          }
          22.917% {
            transform:translate(-102.5px,61px);
            opacity:0;
          }
          23.611% {
            transform:translate(-101.667px,61px);
          }
          24.306% {
            transform:translate(-100.833px,61px);
          }
          25% {
            transform:translate(-100px,61px);
            opacity:0;
          }
          25.694% {
            transform:translate(-99.167px,61px);
          }
          26.389% {
            transform:translate(-98.333px,61px);
          }
          27.083% {
            transform:translate(-97.5px,61px);
            opacity:0;
          }
          27.778% {
            transform:translate(-96.667px,61px);
          }
          28.472% {
            transform:translate(-95.833px,61px);
          }
          29.167% {
            transform:translate(-95px,61px);
            opacity:0;
          }
          29.861% {
            transform:translate(-94.167px,61px);
          }
          30.556% {
            transform:translate(-93.333px,61px);
          }
          31.25% {
            transform:translate(-92.5px,61px);
            opacity:0;
          }
          31.944% {
            transform:translate(-91.667px,61px);
          }
          32.639% {
            transform:translate(-90.833px,61px);
          }
          33.333% {
            transform:translate(-90px,61px);
            opacity:0;
          }
          34.028% {
            transform:translate(-89.167px,61px);
          }
          34.722% {
            transform:translate(-88.333px,61px);
          }
          35.417% {
            transform:translate(-87.5px,61px);
            opacity:0;
          }
          36.111% {
            transform:translate(-86.667px,61px);
          }
          36.806% {
            transform:translate(-85.833px,61px);
          }
          37.5% {
            transform:translate(-85px,61px);
            opacity:0;
          }
          38.194% {
            transform:translate(-84.167px,61px);
          }
          38.889% {
            transform:translate(-83.333px,61px);
          }
          39.583% {
            transform:translate(-82.5px,61px);
            opacity:0;
          }
          40.278% {
            transform:translate(-81.667px,61px);
          }
          40.972% {
            transform:translate(-80.833px,61px);
          }
          41.667% {
            transform:translate(-80px,61px);
            opacity:0;
          }
          42.361% {
            transform:translate(-79.167px,61px);
          }
          43.056% {
            transform:translate(-78.333px,61px);
          }
          43.75% {
            transform:translate(-77.5px,61px);
            opacity:0;
          }
          44.444% {
            transform:translate(-76.667px,61px);
          }
          45.139% {
            transform:translate(-75.833px,61px);
          }
          45.833% {
            transform:translate(-75px,61px);
            opacity:0;
          }
          46.528% {
            transform:translate(-74.167px,61px);
          }
          47.222% {
            transform:translate(-73.333px,61px);
          }
          47.917% {
            transform:translate(-72.5px,61px);
            opacity:0;
          }
          48.611% {
            transform:translate(-71.667px,61px);
          }
          49.306% {
            transform:translate(-70.833px,61px);
          }
          50% {
            transform:translate(-70px,61px);
            opacity:0;
          }
          50.694% {
            transform:translate(-69.167px,61px);
          }
          51.389% {
            transform:translate(-68.333px,61px);
          }
          52.083% {
            transform:translate(-67.5px,61px);
            opacity:0;
          }
          52.778% {
            transform:translate(-66.667px,61px);
          }
          53.472% {
            transform:translate(-65.833px,61px);
          }
          54.167% {
            transform:translate(-65px,61px);
            opacity:0;
          }
          54.861% {
            transform:translate(-64.167px,61px);
          }
          55.556% {
            transform:translate(-63.333px,61px);
          }
          56.25% {
            transform:translate(-62.5px,61px);
            opacity:0;
          }
          56.944% {
            transform:translate(-61.667px,61px);
          }
          57.639% {
            transform:translate(-60.833px,61px);
          }
          58.333% {
            transform:translate(-60px,61px);
            opacity:0;
          }
          59.028% {
            transform:translate(-59.167px,61px);
          }
          59.722% {
            transform:translate(-58.333px,61px);
          }
          60.417% {
            transform:translate(-57.5px,61px);
            opacity:0;
          }
          61.111% {
            transform:translate(-56.667px,61px);
          }
          61.806% {
            transform:translate(-55.833px,61px);
          }
          62.5% {
            transform:translate(-55px,61px);
            opacity:0;
          }
          63.194% {
            transform:translate(-54.167px,61px);
          }
          63.889% {
            transform:translate(-53.333px,61px);
          }
          64.583% {
            transform:translate(-52.5px,61px);
            opacity:0;
          }
          65.278% {
            transform:translate(-51.667px,61px);
          }
          65.972% {
            transform:translate(-50.833px,61px);
          }
          66.667% {
            transform:translate(-50px,61px);
            opacity:0;
          }
          67.361% {
            transform:translate(-49.167px,61px);
          }
          68.056% {
            transform:translate(-48.333px,61px);
          }
          68.75% {
            transform:translate(-47.5px,61px);
            opacity:0;
          }
          69.444% {
            transform:translate(-46.667px,61px);
          }
          70.139% {
            transform:translate(-45.833px,61px);
          }
          70.833% {
            transform:translate(-45px,61px);
            opacity:0;
          }
          71.528% {
            transform:translate(-44.167px,61px);
          }
          72.222% {
            transform:translate(-43.333px,61px);
          }
          72.917% {
            transform:translate(-42.5px,61px);
            opacity:0;
          }
          73.611% {
            transform:translate(-41.667px,61px);
          }
          74.306% {
            transform:translate(-40.833px,61px);
          }
          75% {
            transform:translate(-40px,61px);
            opacity:0;
          }
          75.694% {
            transform:translate(-39.167px,61px);
          }
          76.389% {
            transform:translate(-38.333px,61px);
          }
          77.083% {
            transform:translate(-37.5px,61px);
            opacity:0;
          }
          77.778% {
            transform:translate(-36.667px,61px);
          }
          78.472% {
            transform:translate(-35.833px,61px);
          }
          79.167% {
            transform:translate(-35px,61px);
            opacity:0;
          }
          79.861% {
            transform:translate(-34.167px,61px);
          }
          80.556% {
            transform:translate(-33.333px,61px);
          }
          81.25% {
            transform:translate(-32.5px,61px);
            opacity:0;
          }
          81.944% {
            transform:translate(-31.667px,61px);
          }
          82.639% {
            transform:translate(-30.833px,61px);
          }
          83.333% {
            transform:translate(-30px,61px);
            opacity:0;
          }
          84.028% {
            transform:translate(-29.167px,61px);
          }
          84.722% {
            transform:translate(-28.333px,61px);
          }
          85.417% {
            transform:translate(-27.5px,61px);
            opacity:0;
          }
          86.111% {
            transform:translate(-26.667px,61px);
          }
          86.806% {
            transform:translate(-25.833px,61px);
          }
          87.5% {
            transform:translate(-25px,61px);
            opacity:0;
          }
          88.194% {
            transform:translate(-24.167px,61px);
          }
          88.889% {
            transform:translate(-23.333px,61px);
          }
          89.583% {
            transform:translate(-22.5px,61px);
            opacity:0;
          }
          90.278% {
            transform:translate(-21.667px,61px);
          }
          90.972% {
            transform:translate(-20.833px,61px);
          }
          91.667% {
            transform:translate(-20px,61px);
            opacity:0;
          }
          92.361% {
            transform:translate(-19.167px,61px);
          }
          93.056% {
            transform:translate(-18.333px,61px);
          }
          93.75% {
            transform:translate(-17.5px,61px);
            opacity:0;
          }
          94.444% {
            transform:translate(-16.667px,61px);
          }
          95.139% {
            transform:translate(-15.833px,61px);
          }
          95.833% {
            transform:translate(-15px,61px);
            opacity:0;
          }
          96.528% {
            transform:translate(-14.167px,61px);
          }
          97.222% {
            transform:translate(-13.333px,61px);
          }
          97.917% {
            transform:translate(-12.5px,61px);
            opacity:0;
          }
          98.611% {
            transform:translate(-11.667px,61px);
          }
          99.306% {
            transform:translate(-10.833px,61px);
          }
          100% {
            transform:translate(-10px,61px);
            opacity:0;
          }
        }
        @keyframes lamp9 {
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
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
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
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes slow0 {
          0% {
            transform:translate(111px,61px);
            opacity:1;
          }
          2.083% {
            transform:translate(111.5px,61px);
            opacity:1;
          }
          4.167% {
            transform:translate(112px,61px);
            opacity:1;
          }
          6.25% {
            transform:translate(112.5px,61px);
            opacity:1;
          }
          8.333% {
            transform:translate(113px,61px);
            opacity:1;
          }
          10.417% {
            transform:translate(113.5px,61px);
            opacity:1;
          }
          12.5% {
            transform:translate(114px,61px);
            opacity:1;
          }
          14.583% {
            transform:translate(114.5px,61px);
            opacity:1;
          }
          16.667% {
            transform:translate(115px,61px);
            opacity:1;
          }
          18.75% {
            transform:translate(115.5px,61px);
            opacity:1;
          }
          20.833% {
            transform:translate(116px,61px);
            opacity:1;
          }
          22.917% {
            transform:translate(116.5px,61px);
            opacity:1;
          }
          25% {
            transform:translate(117px,61px);
            opacity:1;
          }
          27.083% {
            transform:translate(117.5px,61px);
            opacity:1;
          }
          29.167% {
            transform:translate(118px,61px);
            opacity:1;
          }
          31.25% {
            transform:translate(118.5px,61px);
            opacity:1;
          }
          33.333% {
            transform:translate(119px,61px);
            opacity:1;
          }
          35.417% {
            transform:translate(119.5px,61px);
            opacity:1;
          }
          37.5% {
            transform:translate(120px,61px);
            opacity:1;
          }
          39.583% {
            transform:translate(120.5px,61px);
            opacity:1;
          }
          41.667% {
            transform:translate(121px,61px);
            opacity:1;
          }
          43.75% {
            transform:translate(121.5px,61px);
            opacity:1;
          }
          45.833% {
            transform:translate(122px,61px);
            opacity:1;
          }
          47.917% {
            transform:translate(122.5px,61px);
            opacity:1;
          }
          50% {
            transform:translate(123px,61px);
            opacity:1;
          }
          52.083% {
            transform:translate(123.5px,61px);
            opacity:1;
          }
          54.167% {
            transform:translate(124px,61px);
            opacity:1;
          }
          56.25% {
            transform:translate(124.5px,61px);
            opacity:1;
          }
          58.333% {
            transform:translate(125px,61px);
            opacity:1;
          }
          60.417% {
            transform:translate(125.5px,61px);
            opacity:1;
          }
          62.5% {
            transform:translate(126px,61px);
            opacity:1;
          }
          64.583% {
            transform:translate(126.5px,61px);
            opacity:1;
          }
          66.667% {
            transform:translate(127px,61px);
            opacity:1;
          }
          68.75% {
            transform:translate(127.5px,61px);
            opacity:1;
          }
          70.833% {
            transform:translate(128px,61px);
            opacity:1;
          }
          72.917% {
            transform:translate(128.5px,61px);
            opacity:1;
          }
          75% {
            transform:translate(129px,61px);
            opacity:1;
          }
          77.083% {
            transform:translate(129.5px,61px);
            opacity:1;
          }
          79.167% {
            transform:translate(130px,61px);
            opacity:1;
          }
          81.25% {
            transform:translate(130.5px,61px);
            opacity:0.875;
          }
          83.333% {
            transform:translate(131px,61px);
            opacity:0.75;
          }
          85.417% {
            transform:translate(131.5px,61px);
            opacity:0.625;
          }
          87.5% {
            transform:translate(132px,61px);
            opacity:0.5;
          }
          89.583% {
            transform:translate(132.5px,61px);
            opacity:0.375;
          }
          91.667% {
            transform:translate(133px,61px);
            opacity:0.25;
          }
          93.75% {
            transform:translate(133.5px,61px);
            opacity:0.125;
          }
          95.833% {
            transform:translate(134px,61px);
            opacity:0;
          }
          97.917% {
            transform:translate(134.5px,61px);
            opacity:0;
          }
          100% {
            transform:translate(135px,61px);
            opacity:0;
          }
        }
        @keyframes slow1 {
          0% {
            transform:translate(121px,61px);
            opacity:1;
          }
          2.083% {
            transform:translate(121.5px,61px);
            opacity:1;
          }
          4.167% {
            transform:translate(122px,61px);
            opacity:1;
          }
          6.25% {
            transform:translate(122.5px,61px);
            opacity:1;
          }
          8.333% {
            transform:translate(123px,61px);
            opacity:1;
          }
          10.417% {
            transform:translate(123.5px,61px);
            opacity:1;
          }
          12.5% {
            transform:translate(124px,61px);
            opacity:1;
          }
          14.583% {
            transform:translate(124.5px,61px);
            opacity:1;
          }
          16.667% {
            transform:translate(125px,61px);
            opacity:1;
          }
          18.75% {
            transform:translate(125.5px,61px);
            opacity:1;
          }
          20.833% {
            transform:translate(126px,61px);
            opacity:1;
          }
          22.917% {
            transform:translate(126.5px,61px);
            opacity:1;
          }
          25% {
            transform:translate(127px,61px);
            opacity:1;
          }
          27.083% {
            transform:translate(127.5px,61px);
            opacity:1;
          }
          29.167% {
            transform:translate(128px,61px);
            opacity:1;
          }
          31.25% {
            transform:translate(128.5px,61px);
            opacity:1;
          }
          33.333% {
            transform:translate(129px,61px);
            opacity:1;
          }
          35.417% {
            transform:translate(129.5px,61px);
            opacity:1;
          }
          37.5% {
            transform:translate(130px,61px);
            opacity:1;
          }
          39.583% {
            transform:translate(130.5px,61px);
            opacity:0.875;
          }
          41.667% {
            transform:translate(131px,61px);
            opacity:0.75;
          }
          43.75% {
            transform:translate(131.5px,61px);
            opacity:0.625;
          }
          45.833% {
            transform:translate(132px,61px);
            opacity:0.5;
          }
          47.917% {
            transform:translate(132.5px,61px);
            opacity:0.375;
          }
          50% {
            transform:translate(133px,61px);
            opacity:0.25;
          }
          52.083% {
            transform:translate(133.5px,61px);
            opacity:0.125;
          }
          54.167% {
            transform:translate(134px,61px);
            opacity:0;
          }
          56.25% {
            transform:translate(134.5px,61px);
            opacity:0;
          }
          58.333% {
            transform:translate(135px,61px);
            opacity:0;
          }
          60.417% {
            transform:translate(135.5px,61px);
            opacity:0;
          }
          62.5% {
            transform:translate(136px,61px);
            opacity:0;
          }
          64.583% {
            transform:translate(136.5px,61px);
            opacity:0;
          }
          66.667% {
            transform:translate(137px,61px);
            opacity:0;
          }
          68.75% {
            transform:translate(137.5px,61px);
            opacity:0;
          }
          70.833% {
            transform:translate(138px,61px);
            opacity:0;
          }
          72.917% {
            transform:translate(138.5px,61px);
            opacity:0;
          }
          75% {
            transform:translate(139px,61px);
            opacity:0;
          }
          77.083% {
            transform:translate(139.5px,61px);
            opacity:0;
          }
          79.167% {
            transform:translate(140px,61px);
            opacity:0;
          }
          81.25% {
            transform:translate(140.5px,61px);
            opacity:0;
          }
          83.333% {
            transform:translate(141px,61px);
            opacity:0;
          }
          85.417% {
            transform:translate(141.5px,61px);
            opacity:0;
          }
          87.5% {
            transform:translate(142px,61px);
            opacity:0;
          }
          89.583% {
            transform:translate(142.5px,61px);
            opacity:0;
          }
          91.667% {
            transform:translate(143px,61px);
            opacity:0;
          }
          93.75% {
            transform:translate(143.5px,61px);
            opacity:0;
          }
          95.833% {
            transform:translate(144px,61px);
            opacity:0;
          }
          97.917% {
            transform:translate(144.5px,61px);
            opacity:0;
          }
          100% {
            transform:translate(145px,61px);
            opacity:0;
          }
        }
        @keyframes slow2 {
          0% {
            transform:translate(131px,61px);
            opacity:0.75;
          }
          2.083% {
            transform:translate(131.5px,61px);
            opacity:0.625;
          }
          4.167% {
            transform:translate(132px,61px);
            opacity:0.5;
          }
          6.25% {
            transform:translate(132.5px,61px);
            opacity:0.375;
          }
          8.333% {
            transform:translate(133px,61px);
            opacity:0.25;
          }
          10.417% {
            transform:translate(133.5px,61px);
            opacity:0.125;
          }
          12.5% {
            transform:translate(134px,61px);
            opacity:0;
          }
          14.583% {
            transform:translate(134.5px,61px);
            opacity:0;
          }
          16.667% {
            transform:translate(135px,61px);
            opacity:0;
          }
          18.75% {
            transform:translate(135.5px,61px);
            opacity:0;
          }
          20.833% {
            transform:translate(136px,61px);
            opacity:0;
          }
          22.917% {
            transform:translate(136.5px,61px);
            opacity:0;
          }
          25% {
            transform:translate(137px,61px);
            opacity:0;
          }
          27.083% {
            transform:translate(137.5px,61px);
            opacity:0;
          }
          29.167% {
            transform:translate(138px,61px);
            opacity:0;
          }
          31.25% {
            transform:translate(138.5px,61px);
            opacity:0;
          }
          33.333% {
            transform:translate(139px,61px);
            opacity:0;
          }
          35.417% {
            transform:translate(139.5px,61px);
            opacity:0;
          }
          37.5% {
            transform:translate(140px,61px);
            opacity:0;
          }
          39.583% {
            transform:translate(140.5px,61px);
            opacity:0;
          }
          41.667% {
            transform:translate(141px,61px);
            opacity:0;
          }
          43.75% {
            transform:translate(141.5px,61px);
            opacity:0;
          }
          45.833% {
            transform:translate(142px,61px);
            opacity:0;
          }
          47.917% {
            transform:translate(142.5px,61px);
            opacity:0;
          }
          50% {
            transform:translate(143px,61px);
            opacity:0;
          }
          52.083% {
            transform:translate(143.5px,61px);
            opacity:0;
          }
          54.167% {
            transform:translate(144px,61px);
            opacity:0;
          }
          56.25% {
            transform:translate(144.5px,61px);
            opacity:0;
          }
          58.333% {
            transform:translate(145px,61px);
            opacity:0;
          }
          60.417% {
            transform:translate(145.5px,61px);
            opacity:0;
          }
          62.5% {
            transform:translate(146px,61px);
            opacity:0;
          }
          64.583% {
            transform:translate(146.5px,61px);
            opacity:0;
          }
          66.667% {
            transform:translate(147px,61px);
            opacity:0;
          }
          68.75% {
            transform:translate(147.5px,61px);
            opacity:0;
          }
          70.833% {
            transform:translate(148px,61px);
            opacity:0;
          }
          72.917% {
            transform:translate(148.5px,61px);
            opacity:0;
          }
          75% {
            transform:translate(149px,61px);
            opacity:0;
          }
          77.083% {
            transform:translate(149.5px,61px);
            opacity:0;
          }
          79.167% {
            transform:translate(150px,61px);
            opacity:0;
          }
          81.25% {
            transform:translate(150.5px,61px);
            opacity:0;
          }
          83.333% {
            transform:translate(151px,61px);
            opacity:0;
          }
          85.417% {
            transform:translate(151.5px,61px);
            opacity:0;
          }
          87.5% {
            transform:translate(152px,61px);
            opacity:0;
          }
          89.583% {
            transform:translate(152.5px,61px);
            opacity:0;
          }
          91.667% {
            transform:translate(153px,61px);
            opacity:0;
          }
          93.75% {
            transform:translate(153.5px,61px);
            opacity:0;
          }
          95.833% {
            transform:translate(154px,61px);
            opacity:0;
          }
          97.917% {
            transform:translate(154.5px,61px);
            opacity:0;
          }
          100% {
            transform:translate(155px,61px);
            opacity:0;
          }
        }
        @keyframes shockEpisode {
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
            opacity:0.777;
          }
          97.917% {
            opacity:0.278;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .brakeFront {
            d:path('M75 42V97');
          }
          .car0 {
            transform:translate(119px,61px);
            opacity:1;
          }
          .lamp0 {
            opacity:1;
          }
          .car1 {
            transform:translate(109px,61px);
            opacity:1;
          }
          .lamp1 {
            opacity:1;
          }
          .car2 {
            transform:translate(99px,61px);
            opacity:1;
          }
          .lamp2 {
            opacity:1;
          }
          .car3 {
            transform:translate(89px,61px);
            opacity:1;
          }
          .lamp3 {
            opacity:1;
          }
          .car4 {
            transform:translate(79px,61px);
            opacity:1;
          }
          .lamp4 {
            opacity:1;
          }
          .car5 {
            transform:translate(60px,61px);
            opacity:1;
          }
          .lamp5 {
            opacity:0;
          }
          .car6 {
            transform:translate(35px,61px);
            opacity:1;
          }
          .lamp6 {
            opacity:0;
          }
          .car7 {
            transform:translate(10px,61px);
            opacity:0.75;
          }
          .lamp7 {
            opacity:0;
          }
          .car8 {
            transform:translate(-15px,61px);
            opacity:0;
          }
          .lamp8 {
            opacity:0;
          }
          .car9 {
            transform:translate(-40px,61px);
            opacity:0;
          }
          .lamp9 {
            opacity:0;
          }
          .slow0 {
            transform:translate(129px,61px);
            opacity:1;
          }
          .slow1 {
            transform:translate(139px,61px);
            opacity:0;
          }
          .slow2 {
            transform:translate(149px,61px);
            opacity:0;
          }
          .shockEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Traffic Shock Wave">
        <g class="shockEpisode">
          <rect x="8" y="48" width="124" height="44" rx="3" fill="#405751"/>
          <path d="M8 70L132 70" stroke="#c6c8a8" stroke-dasharray="8 7"/>
          <path d="M105 42V97" class="brakeFront" stroke="#e09f7a" stroke-width="1.2" stroke-dasharray="2 3"/>
          <g transform="translate(85 32) rotate(180)" fill="#e09f7a">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g transform="translate(43 110) rotate(0)" fill="#9ccbbf">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g class="car0">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp0" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car1">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp1" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car2">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp2" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car3">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp3" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car4">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp4" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car5">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp5" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car6">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp6" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car7">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp7" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car8">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp8" stroke="#ed9c77" opacity="0"/>
          </g>
          <g class="car9">
            <rect x="-2.5" y="-2" width="5" height="4" rx=".8" fill="#a5c8c0"/>
            <path d="M-2 -1.5V1.5" class="lamp9" stroke="#ed9c77" opacity="0"/>
          </g>
          <rect x="-2.5" y="-2" width="5" height="4" class="slow0" rx=".8" fill="#a5c8c0"/>
          <rect x="-2.5" y="-2" width="5" height="4" class="slow1" rx=".8" fill="#a5c8c0"/>
          <rect x="-2.5" y="-2" width="5" height="4" class="slow2" rx=".8" fill="#a5c8c0"/>
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

if (!customElements.get("concept-traffic-shock-wave")) {
  customElements.define("concept-traffic-shock-wave", ConceptTrafficShockWave);
}
