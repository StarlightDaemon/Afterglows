// Polymer Extrusion. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPolymerExtrusion extends HTMLElement {
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
        .stripe0 {
          animation:stripe0 12s linear infinite
        }
        @keyframes stripe0 {
          0% {
            transform:translate(82.000px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          1% {
            transform:translate(82.970px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          2% {
            transform:translate(83.940px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          3% {
            transform:translate(84.910px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          4% {
            transform:translate(85.880px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          5% {
            transform:translate(86.850px,72px);
            opacity:0.212;
            stroke:rgb(226,158,98)
          }
          6% {
            transform:translate(87.820px,72px);
            opacity:0.455;
            stroke:rgb(226,158,98)
          }
          7% {
            transform:translate(88.790px,72px);
            opacity:0.698;
            stroke:rgb(226,158,98)
          }
          8% {
            transform:translate(89.760px,72px);
            opacity:0.940;
            stroke:rgb(226,158,98)
          }
          9% {
            transform:translate(90.730px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          10% {
            transform:translate(91.700px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          11% {
            transform:translate(92.670px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          12% {
            transform:translate(93.640px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          13% {
            transform:translate(94.610px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          14% {
            transform:translate(95.580px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          15% {
            transform:translate(96.550px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          16% {
            transform:translate(97.520px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          17% {
            transform:translate(98.486px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          18% {
            transform:translate(99.426px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          19% {
            transform:translate(100.339px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          20% {
            transform:translate(101.226px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          21% {
            transform:translate(102.091px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          22% {
            transform:translate(102.934px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          23% {
            transform:translate(103.758px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          24% {
            transform:translate(104.562px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          25% {
            transform:translate(105.350px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          26% {
            transform:translate(106.121px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          27% {
            transform:translate(106.877px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          28% {
            transform:translate(107.618px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          29% {
            transform:translate(108.347px,72px);
            opacity:1.000;
            stroke:rgb(224,159,100)
          }
          30% {
            transform:translate(109.075px,72px);
            opacity:1.000;
            stroke:rgb(220,160,106)
          }
          31% {
            transform:translate(109.802px,72px);
            opacity:1.000;
            stroke:rgb(216,162,111)
          }
          32% {
            transform:translate(110.530px,72px);
            opacity:1.000;
            stroke:rgb(212,163,116)
          }
          33% {
            transform:translate(111.257px,72px);
            opacity:1.000;
            stroke:rgb(209,165,121)
          }
          34% {
            transform:translate(111.985px,72px);
            opacity:1.000;
            stroke:rgb(205,167,126)
          }
          35% {
            transform:translate(112.713px,72px);
            opacity:1.000;
            stroke:rgb(201,168,131)
          }
          36% {
            transform:translate(113.440px,72px);
            opacity:1.000;
            stroke:rgb(197,170,136)
          }
          37% {
            transform:translate(114.168px,72px);
            opacity:1.000;
            stroke:rgb(193,171,141)
          }
          38% {
            transform:translate(114.895px,72px);
            opacity:1.000;
            stroke:rgb(189,173,147)
          }
          39% {
            transform:translate(115.623px,72px);
            opacity:1.000;
            stroke:rgb(185,174,152)
          }
          40% {
            transform:translate(116.350px,72px);
            opacity:1.000;
            stroke:rgb(181,176,157)
          }
          41% {
            transform:translate(117.078px,72px);
            opacity:1.000;
            stroke:rgb(177,178,162)
          }
          42% {
            transform:translate(117.805px,72px);
            opacity:1.000;
            stroke:rgb(174,179,167)
          }
          43% {
            transform:translate(118.532px,72px);
            opacity:1.000;
            stroke:rgb(170,181,172)
          }
          44% {
            transform:translate(119.260px,72px);
            opacity:1.000;
            stroke:rgb(166,182,177)
          }
          45% {
            transform:translate(119.988px,72px);
            opacity:1.000;
            stroke:rgb(162,184,183)
          }
          46% {
            transform:translate(120.715px,72px);
            opacity:1.000;
            stroke:rgb(158,185,188)
          }
          47% {
            transform:translate(121.442px,72px);
            opacity:1.000;
            stroke:rgb(154,187,193)
          }
          48% {
            transform:translate(122.170px,72px);
            opacity:1.000;
            stroke:rgb(150,188,198)
          }
          49% {
            transform:translate(122.898px,72px);
            opacity:1.000;
            stroke:rgb(146,190,203)
          }
          50% {
            transform:translate(123.625px,72px);
            opacity:1.000;
            stroke:rgb(142,192,208)
          }
          51% {
            transform:translate(124.352px,72px);
            opacity:1.000;
            stroke:rgb(139,193,213)
          }
          52% {
            transform:translate(125.080px,72px);
            opacity:1.000;
            stroke:rgb(135,195,218)
          }
          53% {
            transform:translate(125.808px,72px);
            opacity:1.000;
            stroke:rgb(131,196,224)
          }
          54% {
            transform:translate(126.535px,72px);
            opacity:1.000;
            stroke:rgb(127,198,229)
          }
          55% {
            transform:translate(127.263px,72px);
            opacity:1.000;
            stroke:rgb(123,199,234)
          }
          56% {
            transform:translate(127.990px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          57% {
            transform:translate(128.718px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          58% {
            transform:translate(129.445px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          59% {
            transform:translate(130.173px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          60% {
            transform:translate(130.900px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          61% {
            transform:translate(131.627px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          62% {
            transform:translate(132.355px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          63% {
            transform:translate(133.083px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          64% {
            transform:translate(133.810px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          65% {
            transform:translate(134.537px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          66% {
            transform:translate(135.265px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          67% {
            transform:translate(135.993px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          68% {
            transform:translate(136.720px,72px);
            opacity:0.820;
            stroke:rgb(119,201,239)
          }
          69% {
            transform:translate(137.447px,72px);
            opacity:0.638;
            stroke:rgb(119,201,239)
          }
          70% {
            transform:translate(138.175px,72px);
            opacity:0.456;
            stroke:rgb(119,201,239)
          }
          71% {
            transform:translate(138.903px,72px);
            opacity:0.274;
            stroke:rgb(119,201,239)
          }
          72% {
            transform:translate(139.630px,72px);
            opacity:0.093;
            stroke:rgb(119,201,239)
          }
          73% {
            transform:translate(140.358px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          74% {
            transform:translate(141.085px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          75% {
            transform:translate(141.813px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          76% {
            transform:translate(142.540px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          77% {
            transform:translate(143.267px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          78% {
            transform:translate(143.995px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          79% {
            transform:translate(144.722px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          80% {
            transform:translate(145.450px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          81% {
            transform:translate(146.178px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          82% {
            transform:translate(146.905px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          83% {
            transform:translate(147.632px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          84% {
            transform:translate(148.360px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          85% {
            transform:translate(149.088px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          86% {
            transform:translate(149.815px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          87% {
            transform:translate(150.542px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          88% {
            transform:translate(151.270px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          89% {
            transform:translate(151.998px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          90% {
            transform:translate(152.725px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          91% {
            transform:translate(153.452px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          92% {
            transform:translate(154.180px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          93% {
            transform:translate(154.907px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          94% {
            transform:translate(155.635px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          95% {
            transform:translate(156.363px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          96% {
            transform:translate(157.090px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          97% {
            transform:translate(157.817px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          98% {
            transform:translate(158.545px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          99% {
            transform:translate(159.272px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          100% {
            transform:translate(82.000px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
        }
        .stripe1 {
          animation:stripe1 12s linear infinite
        }
        @keyframes stripe1 {
          0% {
            transform:translate(94.125px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          1% {
            transform:translate(95.095px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          2% {
            transform:translate(96.065px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          3% {
            transform:translate(97.035px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          4% {
            transform:translate(98.005px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          5% {
            transform:translate(98.960px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          6% {
            transform:translate(99.886px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          7% {
            transform:translate(100.786px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          8% {
            transform:translate(101.662px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          9% {
            transform:translate(102.515px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          10% {
            transform:translate(103.348px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          11% {
            transform:translate(104.162px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          12% {
            transform:translate(104.958px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          13% {
            transform:translate(105.737px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          14% {
            transform:translate(106.501px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          15% {
            transform:translate(107.249px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          16% {
            transform:translate(107.984px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          17% {
            transform:translate(108.711px,72px);
            opacity:1.000;
            stroke:rgb(222,160,103)
          }
          18% {
            transform:translate(109.439px,72px);
            opacity:1.000;
            stroke:rgb(218,161,108)
          }
          19% {
            transform:translate(110.166px,72px);
            opacity:1.000;
            stroke:rgb(214,163,113)
          }
          20% {
            transform:translate(110.894px,72px);
            opacity:1.000;
            stroke:rgb(211,164,118)
          }
          21% {
            transform:translate(111.621px,72px);
            opacity:1.000;
            stroke:rgb(207,166,124)
          }
          22% {
            transform:translate(112.349px,72px);
            opacity:1.000;
            stroke:rgb(203,167,129)
          }
          23% {
            transform:translate(113.076px,72px);
            opacity:1.000;
            stroke:rgb(199,169,134)
          }
          24% {
            transform:translate(113.804px,72px);
            opacity:1.000;
            stroke:rgb(195,170,139)
          }
          25% {
            transform:translate(114.531px,72px);
            opacity:1.000;
            stroke:rgb(191,172,144)
          }
          26% {
            transform:translate(115.259px,72px);
            opacity:1.000;
            stroke:rgb(187,174,149)
          }
          27% {
            transform:translate(115.986px,72px);
            opacity:1.000;
            stroke:rgb(183,175,154)
          }
          28% {
            transform:translate(116.714px,72px);
            opacity:1.000;
            stroke:rgb(179,177,159)
          }
          29% {
            transform:translate(117.441px,72px);
            opacity:1.000;
            stroke:rgb(175,178,165)
          }
          30% {
            transform:translate(118.169px,72px);
            opacity:1.000;
            stroke:rgb(172,180,170)
          }
          31% {
            transform:translate(118.896px,72px);
            opacity:1.000;
            stroke:rgb(168,181,175)
          }
          32% {
            transform:translate(119.624px,72px);
            opacity:1.000;
            stroke:rgb(164,183,180)
          }
          33% {
            transform:translate(120.351px,72px);
            opacity:1.000;
            stroke:rgb(160,185,185)
          }
          34% {
            transform:translate(121.079px,72px);
            opacity:1.000;
            stroke:rgb(156,186,190)
          }
          35% {
            transform:translate(121.806px,72px);
            opacity:1.000;
            stroke:rgb(152,188,195)
          }
          36% {
            transform:translate(122.534px,72px);
            opacity:1.000;
            stroke:rgb(148,189,200)
          }
          37% {
            transform:translate(123.261px,72px);
            opacity:1.000;
            stroke:rgb(144,191,206)
          }
          38% {
            transform:translate(123.989px,72px);
            opacity:1.000;
            stroke:rgb(140,192,211)
          }
          39% {
            transform:translate(124.716px,72px);
            opacity:1.000;
            stroke:rgb(137,194,216)
          }
          40% {
            transform:translate(125.444px,72px);
            opacity:1.000;
            stroke:rgb(133,196,221)
          }
          41% {
            transform:translate(126.171px,72px);
            opacity:1.000;
            stroke:rgb(129,197,226)
          }
          42% {
            transform:translate(126.899px,72px);
            opacity:1.000;
            stroke:rgb(125,199,231)
          }
          43% {
            transform:translate(127.626px,72px);
            opacity:1.000;
            stroke:rgb(121,200,236)
          }
          44% {
            transform:translate(128.354px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          45% {
            transform:translate(129.081px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          46% {
            transform:translate(129.809px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          47% {
            transform:translate(130.536px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          48% {
            transform:translate(131.264px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          49% {
            transform:translate(131.991px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          50% {
            transform:translate(132.719px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          51% {
            transform:translate(133.446px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          52% {
            transform:translate(134.174px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          53% {
            transform:translate(134.901px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          54% {
            transform:translate(135.629px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          55% {
            transform:translate(136.356px,72px);
            opacity:0.911;
            stroke:rgb(119,201,239)
          }
          56% {
            transform:translate(137.084px,72px);
            opacity:0.729;
            stroke:rgb(119,201,239)
          }
          57% {
            transform:translate(137.811px,72px);
            opacity:0.547;
            stroke:rgb(119,201,239)
          }
          58% {
            transform:translate(138.539px,72px);
            opacity:0.365;
            stroke:rgb(119,201,239)
          }
          59% {
            transform:translate(139.266px,72px);
            opacity:0.183;
            stroke:rgb(119,201,239)
          }
          60% {
            transform:translate(139.994px,72px);
            opacity:0.002;
            stroke:rgb(119,201,239)
          }
          61% {
            transform:translate(140.721px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          62% {
            transform:translate(141.449px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          63% {
            transform:translate(142.176px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          64% {
            transform:translate(142.904px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          65% {
            transform:translate(143.631px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          66% {
            transform:translate(144.359px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          67% {
            transform:translate(145.086px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          68% {
            transform:translate(145.814px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          69% {
            transform:translate(146.541px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          70% {
            transform:translate(147.269px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          71% {
            transform:translate(147.996px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          72% {
            transform:translate(148.724px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          73% {
            transform:translate(149.451px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          74% {
            transform:translate(150.179px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          75% {
            transform:translate(150.906px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          76% {
            transform:translate(151.634px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          77% {
            transform:translate(152.361px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          78% {
            transform:translate(153.089px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          79% {
            transform:translate(153.816px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          80% {
            transform:translate(154.544px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          81% {
            transform:translate(155.271px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          82% {
            transform:translate(155.999px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          83% {
            transform:translate(156.726px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          84% {
            transform:translate(157.454px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          85% {
            transform:translate(158.181px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          86% {
            transform:translate(158.909px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          87% {
            transform:translate(159.636px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          88% {
            transform:translate(82.485px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          89% {
            transform:translate(83.455px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          90% {
            transform:translate(84.425px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          91% {
            transform:translate(85.395px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          92% {
            transform:translate(86.365px,72px);
            opacity:0.091;
            stroke:rgb(226,158,98)
          }
          93% {
            transform:translate(87.335px,72px);
            opacity:0.334;
            stroke:rgb(226,158,98)
          }
          94% {
            transform:translate(88.305px,72px);
            opacity:0.576;
            stroke:rgb(226,158,98)
          }
          95% {
            transform:translate(89.275px,72px);
            opacity:0.819;
            stroke:rgb(226,158,98)
          }
          96% {
            transform:translate(90.245px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          97% {
            transform:translate(91.215px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          98% {
            transform:translate(92.185px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          99% {
            transform:translate(93.155px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          100% {
            transform:translate(94.125px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
        }
        .stripe2 {
          animation:stripe2 12s linear infinite
        }
        @keyframes stripe2 {
          0% {
            transform:translate(105.350px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          1% {
            transform:translate(106.121px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          2% {
            transform:translate(106.877px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          3% {
            transform:translate(107.618px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          4% {
            transform:translate(108.347px,72px);
            opacity:1.000;
            stroke:rgb(224,159,100)
          }
          5% {
            transform:translate(109.075px,72px);
            opacity:1.000;
            stroke:rgb(220,160,106)
          }
          6% {
            transform:translate(109.802px,72px);
            opacity:1.000;
            stroke:rgb(216,162,111)
          }
          7% {
            transform:translate(110.530px,72px);
            opacity:1.000;
            stroke:rgb(212,163,116)
          }
          8% {
            transform:translate(111.257px,72px);
            opacity:1.000;
            stroke:rgb(209,165,121)
          }
          9% {
            transform:translate(111.985px,72px);
            opacity:1.000;
            stroke:rgb(205,167,126)
          }
          10% {
            transform:translate(112.713px,72px);
            opacity:1.000;
            stroke:rgb(201,168,131)
          }
          11% {
            transform:translate(113.440px,72px);
            opacity:1.000;
            stroke:rgb(197,170,136)
          }
          12% {
            transform:translate(114.168px,72px);
            opacity:1.000;
            stroke:rgb(193,171,141)
          }
          13% {
            transform:translate(114.895px,72px);
            opacity:1.000;
            stroke:rgb(189,173,147)
          }
          14% {
            transform:translate(115.623px,72px);
            opacity:1.000;
            stroke:rgb(185,174,152)
          }
          15% {
            transform:translate(116.350px,72px);
            opacity:1.000;
            stroke:rgb(181,176,157)
          }
          16% {
            transform:translate(117.078px,72px);
            opacity:1.000;
            stroke:rgb(177,178,162)
          }
          17% {
            transform:translate(117.805px,72px);
            opacity:1.000;
            stroke:rgb(174,179,167)
          }
          18% {
            transform:translate(118.532px,72px);
            opacity:1.000;
            stroke:rgb(170,181,172)
          }
          19% {
            transform:translate(119.260px,72px);
            opacity:1.000;
            stroke:rgb(166,182,177)
          }
          20% {
            transform:translate(119.988px,72px);
            opacity:1.000;
            stroke:rgb(162,184,183)
          }
          21% {
            transform:translate(120.715px,72px);
            opacity:1.000;
            stroke:rgb(158,185,188)
          }
          22% {
            transform:translate(121.442px,72px);
            opacity:1.000;
            stroke:rgb(154,187,193)
          }
          23% {
            transform:translate(122.170px,72px);
            opacity:1.000;
            stroke:rgb(150,188,198)
          }
          24% {
            transform:translate(122.898px,72px);
            opacity:1.000;
            stroke:rgb(146,190,203)
          }
          25% {
            transform:translate(123.625px,72px);
            opacity:1.000;
            stroke:rgb(142,192,208)
          }
          26% {
            transform:translate(124.352px,72px);
            opacity:1.000;
            stroke:rgb(139,193,213)
          }
          27% {
            transform:translate(125.080px,72px);
            opacity:1.000;
            stroke:rgb(135,195,218)
          }
          28% {
            transform:translate(125.808px,72px);
            opacity:1.000;
            stroke:rgb(131,196,224)
          }
          29% {
            transform:translate(126.535px,72px);
            opacity:1.000;
            stroke:rgb(127,198,229)
          }
          30% {
            transform:translate(127.263px,72px);
            opacity:1.000;
            stroke:rgb(123,199,234)
          }
          31% {
            transform:translate(127.990px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          32% {
            transform:translate(128.718px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          33% {
            transform:translate(129.445px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          34% {
            transform:translate(130.173px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          35% {
            transform:translate(130.900px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          36% {
            transform:translate(131.627px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          37% {
            transform:translate(132.355px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          38% {
            transform:translate(133.083px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          39% {
            transform:translate(133.810px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          40% {
            transform:translate(134.537px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          41% {
            transform:translate(135.265px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          42% {
            transform:translate(135.993px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          43% {
            transform:translate(136.720px,72px);
            opacity:0.820;
            stroke:rgb(119,201,239)
          }
          44% {
            transform:translate(137.447px,72px);
            opacity:0.638;
            stroke:rgb(119,201,239)
          }
          45% {
            transform:translate(138.175px,72px);
            opacity:0.456;
            stroke:rgb(119,201,239)
          }
          46% {
            transform:translate(138.903px,72px);
            opacity:0.274;
            stroke:rgb(119,201,239)
          }
          47% {
            transform:translate(139.630px,72px);
            opacity:0.093;
            stroke:rgb(119,201,239)
          }
          48% {
            transform:translate(140.358px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          49% {
            transform:translate(141.085px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          50% {
            transform:translate(141.813px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          51% {
            transform:translate(142.540px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          52% {
            transform:translate(143.267px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          53% {
            transform:translate(143.995px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          54% {
            transform:translate(144.722px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          55% {
            transform:translate(145.450px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          56% {
            transform:translate(146.178px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          57% {
            transform:translate(146.905px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          58% {
            transform:translate(147.632px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          59% {
            transform:translate(148.360px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          60% {
            transform:translate(149.088px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          61% {
            transform:translate(149.815px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          62% {
            transform:translate(150.542px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          63% {
            transform:translate(151.270px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          64% {
            transform:translate(151.998px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          65% {
            transform:translate(152.725px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          66% {
            transform:translate(153.452px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          67% {
            transform:translate(154.180px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          68% {
            transform:translate(154.907px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          69% {
            transform:translate(155.635px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          70% {
            transform:translate(156.363px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          71% {
            transform:translate(157.090px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          72% {
            transform:translate(157.817px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          73% {
            transform:translate(158.545px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          74% {
            transform:translate(159.272px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          75% {
            transform:translate(82.000px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          76% {
            transform:translate(82.970px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          77% {
            transform:translate(83.940px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          78% {
            transform:translate(84.910px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          79% {
            transform:translate(85.880px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          80% {
            transform:translate(86.850px,72px);
            opacity:0.213;
            stroke:rgb(226,158,98)
          }
          81% {
            transform:translate(87.820px,72px);
            opacity:0.455;
            stroke:rgb(226,158,98)
          }
          82% {
            transform:translate(88.790px,72px);
            opacity:0.697;
            stroke:rgb(226,158,98)
          }
          83% {
            transform:translate(89.760px,72px);
            opacity:0.940;
            stroke:rgb(226,158,98)
          }
          84% {
            transform:translate(90.730px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          85% {
            transform:translate(91.700px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          86% {
            transform:translate(92.670px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          87% {
            transform:translate(93.640px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          88% {
            transform:translate(94.610px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          89% {
            transform:translate(95.580px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          90% {
            transform:translate(96.550px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          91% {
            transform:translate(97.520px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          92% {
            transform:translate(98.486px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          93% {
            transform:translate(99.426px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          94% {
            transform:translate(100.339px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          95% {
            transform:translate(101.226px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          96% {
            transform:translate(102.091px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          97% {
            transform:translate(102.934px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          98% {
            transform:translate(103.758px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          99% {
            transform:translate(104.562px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          100% {
            transform:translate(105.350px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
        }
        .stripe3 {
          animation:stripe3 12s linear infinite
        }
        @keyframes stripe3 {
          0% {
            transform:translate(114.531px,72px);
            opacity:1.000;
            stroke:rgb(191,172,144)
          }
          1% {
            transform:translate(115.259px,72px);
            opacity:1.000;
            stroke:rgb(187,174,149)
          }
          2% {
            transform:translate(115.986px,72px);
            opacity:1.000;
            stroke:rgb(183,175,154)
          }
          3% {
            transform:translate(116.714px,72px);
            opacity:1.000;
            stroke:rgb(179,177,159)
          }
          4% {
            transform:translate(117.441px,72px);
            opacity:1.000;
            stroke:rgb(175,178,165)
          }
          5% {
            transform:translate(118.169px,72px);
            opacity:1.000;
            stroke:rgb(172,180,170)
          }
          6% {
            transform:translate(118.896px,72px);
            opacity:1.000;
            stroke:rgb(168,181,175)
          }
          7% {
            transform:translate(119.624px,72px);
            opacity:1.000;
            stroke:rgb(164,183,180)
          }
          8% {
            transform:translate(120.351px,72px);
            opacity:1.000;
            stroke:rgb(160,185,185)
          }
          9% {
            transform:translate(121.079px,72px);
            opacity:1.000;
            stroke:rgb(156,186,190)
          }
          10% {
            transform:translate(121.806px,72px);
            opacity:1.000;
            stroke:rgb(152,188,195)
          }
          11% {
            transform:translate(122.534px,72px);
            opacity:1.000;
            stroke:rgb(148,189,200)
          }
          12% {
            transform:translate(123.261px,72px);
            opacity:1.000;
            stroke:rgb(144,191,206)
          }
          13% {
            transform:translate(123.989px,72px);
            opacity:1.000;
            stroke:rgb(140,192,211)
          }
          14% {
            transform:translate(124.716px,72px);
            opacity:1.000;
            stroke:rgb(137,194,216)
          }
          15% {
            transform:translate(125.444px,72px);
            opacity:1.000;
            stroke:rgb(133,196,221)
          }
          16% {
            transform:translate(126.171px,72px);
            opacity:1.000;
            stroke:rgb(129,197,226)
          }
          17% {
            transform:translate(126.899px,72px);
            opacity:1.000;
            stroke:rgb(125,199,231)
          }
          18% {
            transform:translate(127.626px,72px);
            opacity:1.000;
            stroke:rgb(121,200,236)
          }
          19% {
            transform:translate(128.354px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          20% {
            transform:translate(129.081px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          21% {
            transform:translate(129.809px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          22% {
            transform:translate(130.536px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          23% {
            transform:translate(131.264px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          24% {
            transform:translate(131.991px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          25% {
            transform:translate(132.719px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          26% {
            transform:translate(133.446px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          27% {
            transform:translate(134.174px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          28% {
            transform:translate(134.901px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          29% {
            transform:translate(135.629px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          30% {
            transform:translate(136.356px,72px);
            opacity:0.911;
            stroke:rgb(119,201,239)
          }
          31% {
            transform:translate(137.084px,72px);
            opacity:0.729;
            stroke:rgb(119,201,239)
          }
          32% {
            transform:translate(137.811px,72px);
            opacity:0.547;
            stroke:rgb(119,201,239)
          }
          33% {
            transform:translate(138.539px,72px);
            opacity:0.365;
            stroke:rgb(119,201,239)
          }
          34% {
            transform:translate(139.266px,72px);
            opacity:0.183;
            stroke:rgb(119,201,239)
          }
          35% {
            transform:translate(139.994px,72px);
            opacity:0.002;
            stroke:rgb(119,201,239)
          }
          36% {
            transform:translate(140.721px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          37% {
            transform:translate(141.449px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          38% {
            transform:translate(142.176px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          39% {
            transform:translate(142.904px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          40% {
            transform:translate(143.631px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          41% {
            transform:translate(144.359px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          42% {
            transform:translate(145.086px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          43% {
            transform:translate(145.814px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          44% {
            transform:translate(146.541px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          45% {
            transform:translate(147.269px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          46% {
            transform:translate(147.996px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          47% {
            transform:translate(148.724px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          48% {
            transform:translate(149.451px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          49% {
            transform:translate(150.179px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          50% {
            transform:translate(150.906px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          51% {
            transform:translate(151.634px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          52% {
            transform:translate(152.361px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          53% {
            transform:translate(153.089px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          54% {
            transform:translate(153.816px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          55% {
            transform:translate(154.544px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          56% {
            transform:translate(155.271px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          57% {
            transform:translate(155.999px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          58% {
            transform:translate(156.726px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          59% {
            transform:translate(157.454px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          60% {
            transform:translate(158.181px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          61% {
            transform:translate(158.909px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          62% {
            transform:translate(159.636px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          63% {
            transform:translate(82.485px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          64% {
            transform:translate(83.455px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          65% {
            transform:translate(84.425px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          66% {
            transform:translate(85.395px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          67% {
            transform:translate(86.365px,72px);
            opacity:0.091;
            stroke:rgb(226,158,98)
          }
          68% {
            transform:translate(87.335px,72px);
            opacity:0.334;
            stroke:rgb(226,158,98)
          }
          69% {
            transform:translate(88.305px,72px);
            opacity:0.576;
            stroke:rgb(226,158,98)
          }
          70% {
            transform:translate(89.275px,72px);
            opacity:0.819;
            stroke:rgb(226,158,98)
          }
          71% {
            transform:translate(90.245px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          72% {
            transform:translate(91.215px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          73% {
            transform:translate(92.185px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          74% {
            transform:translate(93.155px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          75% {
            transform:translate(94.125px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          76% {
            transform:translate(95.095px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          77% {
            transform:translate(96.065px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          78% {
            transform:translate(97.035px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          79% {
            transform:translate(98.005px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          80% {
            transform:translate(98.960px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          81% {
            transform:translate(99.886px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          82% {
            transform:translate(100.786px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          83% {
            transform:translate(101.662px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          84% {
            transform:translate(102.515px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          85% {
            transform:translate(103.348px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          86% {
            transform:translate(104.162px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          87% {
            transform:translate(104.958px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          88% {
            transform:translate(105.737px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          89% {
            transform:translate(106.501px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          90% {
            transform:translate(107.249px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          91% {
            transform:translate(107.984px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          92% {
            transform:translate(108.711px,72px);
            opacity:1.000;
            stroke:rgb(222,160,103)
          }
          93% {
            transform:translate(109.439px,72px);
            opacity:1.000;
            stroke:rgb(218,161,108)
          }
          94% {
            transform:translate(110.166px,72px);
            opacity:1.000;
            stroke:rgb(214,163,113)
          }
          95% {
            transform:translate(110.894px,72px);
            opacity:1.000;
            stroke:rgb(211,164,118)
          }
          96% {
            transform:translate(111.621px,72px);
            opacity:1.000;
            stroke:rgb(207,166,124)
          }
          97% {
            transform:translate(112.349px,72px);
            opacity:1.000;
            stroke:rgb(203,167,129)
          }
          98% {
            transform:translate(113.076px,72px);
            opacity:1.000;
            stroke:rgb(199,169,134)
          }
          99% {
            transform:translate(113.804px,72px);
            opacity:1.000;
            stroke:rgb(195,170,139)
          }
          100% {
            transform:translate(114.531px,72px);
            opacity:1.000;
            stroke:rgb(191,172,144)
          }
        }
        .stripe4 {
          animation:stripe4 12s linear infinite
        }
        @keyframes stripe4 {
          0% {
            transform:translate(123.625px,72px);
            opacity:1.000;
            stroke:rgb(142,192,208)
          }
          1% {
            transform:translate(124.352px,72px);
            opacity:1.000;
            stroke:rgb(139,193,213)
          }
          2% {
            transform:translate(125.080px,72px);
            opacity:1.000;
            stroke:rgb(135,195,218)
          }
          3% {
            transform:translate(125.808px,72px);
            opacity:1.000;
            stroke:rgb(131,196,224)
          }
          4% {
            transform:translate(126.535px,72px);
            opacity:1.000;
            stroke:rgb(127,198,229)
          }
          5% {
            transform:translate(127.263px,72px);
            opacity:1.000;
            stroke:rgb(123,199,234)
          }
          6% {
            transform:translate(127.990px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          7% {
            transform:translate(128.718px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          8% {
            transform:translate(129.445px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          9% {
            transform:translate(130.173px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          10% {
            transform:translate(130.900px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          11% {
            transform:translate(131.627px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          12% {
            transform:translate(132.355px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          13% {
            transform:translate(133.083px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          14% {
            transform:translate(133.810px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          15% {
            transform:translate(134.537px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          16% {
            transform:translate(135.265px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          17% {
            transform:translate(135.993px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          18% {
            transform:translate(136.720px,72px);
            opacity:0.820;
            stroke:rgb(119,201,239)
          }
          19% {
            transform:translate(137.447px,72px);
            opacity:0.638;
            stroke:rgb(119,201,239)
          }
          20% {
            transform:translate(138.175px,72px);
            opacity:0.456;
            stroke:rgb(119,201,239)
          }
          21% {
            transform:translate(138.903px,72px);
            opacity:0.274;
            stroke:rgb(119,201,239)
          }
          22% {
            transform:translate(139.630px,72px);
            opacity:0.093;
            stroke:rgb(119,201,239)
          }
          23% {
            transform:translate(140.358px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          24% {
            transform:translate(141.085px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          25% {
            transform:translate(141.813px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          26% {
            transform:translate(142.540px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          27% {
            transform:translate(143.267px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          28% {
            transform:translate(143.995px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          29% {
            transform:translate(144.722px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          30% {
            transform:translate(145.450px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          31% {
            transform:translate(146.178px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          32% {
            transform:translate(146.905px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          33% {
            transform:translate(147.632px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          34% {
            transform:translate(148.360px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          35% {
            transform:translate(149.088px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          36% {
            transform:translate(149.815px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          37% {
            transform:translate(150.542px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          38% {
            transform:translate(151.270px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          39% {
            transform:translate(151.998px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          40% {
            transform:translate(152.725px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          41% {
            transform:translate(153.452px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          42% {
            transform:translate(154.180px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          43% {
            transform:translate(154.907px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          44% {
            transform:translate(155.635px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          45% {
            transform:translate(156.363px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          46% {
            transform:translate(157.090px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          47% {
            transform:translate(157.817px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          48% {
            transform:translate(158.545px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          49% {
            transform:translate(159.272px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          50% {
            transform:translate(82.000px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          51% {
            transform:translate(82.970px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          52% {
            transform:translate(83.940px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          53% {
            transform:translate(84.910px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          54% {
            transform:translate(85.880px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          55% {
            transform:translate(86.850px,72px);
            opacity:0.213;
            stroke:rgb(226,158,98)
          }
          56% {
            transform:translate(87.820px,72px);
            opacity:0.455;
            stroke:rgb(226,158,98)
          }
          57% {
            transform:translate(88.790px,72px);
            opacity:0.697;
            stroke:rgb(226,158,98)
          }
          58% {
            transform:translate(89.760px,72px);
            opacity:0.940;
            stroke:rgb(226,158,98)
          }
          59% {
            transform:translate(90.730px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          60% {
            transform:translate(91.700px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          61% {
            transform:translate(92.670px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          62% {
            transform:translate(93.640px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          63% {
            transform:translate(94.610px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          64% {
            transform:translate(95.580px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          65% {
            transform:translate(96.550px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          66% {
            transform:translate(97.520px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          67% {
            transform:translate(98.486px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          68% {
            transform:translate(99.426px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          69% {
            transform:translate(100.339px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          70% {
            transform:translate(101.226px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          71% {
            transform:translate(102.091px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          72% {
            transform:translate(102.934px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          73% {
            transform:translate(103.758px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          74% {
            transform:translate(104.562px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          75% {
            transform:translate(105.350px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          76% {
            transform:translate(106.121px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          77% {
            transform:translate(106.877px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          78% {
            transform:translate(107.618px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          79% {
            transform:translate(108.347px,72px);
            opacity:1.000;
            stroke:rgb(224,159,100)
          }
          80% {
            transform:translate(109.075px,72px);
            opacity:1.000;
            stroke:rgb(220,160,106)
          }
          81% {
            transform:translate(109.803px,72px);
            opacity:1.000;
            stroke:rgb(216,162,111)
          }
          82% {
            transform:translate(110.530px,72px);
            opacity:1.000;
            stroke:rgb(212,163,116)
          }
          83% {
            transform:translate(111.258px,72px);
            opacity:1.000;
            stroke:rgb(209,165,121)
          }
          84% {
            transform:translate(111.985px,72px);
            opacity:1.000;
            stroke:rgb(205,167,126)
          }
          85% {
            transform:translate(112.713px,72px);
            opacity:1.000;
            stroke:rgb(201,168,131)
          }
          86% {
            transform:translate(113.440px,72px);
            opacity:1.000;
            stroke:rgb(197,170,136)
          }
          87% {
            transform:translate(114.168px,72px);
            opacity:1.000;
            stroke:rgb(193,171,141)
          }
          88% {
            transform:translate(114.895px,72px);
            opacity:1.000;
            stroke:rgb(189,173,147)
          }
          89% {
            transform:translate(115.623px,72px);
            opacity:1.000;
            stroke:rgb(185,174,152)
          }
          90% {
            transform:translate(116.350px,72px);
            opacity:1.000;
            stroke:rgb(181,176,157)
          }
          91% {
            transform:translate(117.078px,72px);
            opacity:1.000;
            stroke:rgb(177,178,162)
          }
          92% {
            transform:translate(117.805px,72px);
            opacity:1.000;
            stroke:rgb(174,179,167)
          }
          93% {
            transform:translate(118.533px,72px);
            opacity:1.000;
            stroke:rgb(170,181,172)
          }
          94% {
            transform:translate(119.260px,72px);
            opacity:1.000;
            stroke:rgb(166,182,177)
          }
          95% {
            transform:translate(119.987px,72px);
            opacity:1.000;
            stroke:rgb(162,184,183)
          }
          96% {
            transform:translate(120.715px,72px);
            opacity:1.000;
            stroke:rgb(158,185,188)
          }
          97% {
            transform:translate(121.442px,72px);
            opacity:1.000;
            stroke:rgb(154,187,193)
          }
          98% {
            transform:translate(122.170px,72px);
            opacity:1.000;
            stroke:rgb(150,188,198)
          }
          99% {
            transform:translate(122.897px,72px);
            opacity:1.000;
            stroke:rgb(146,190,203)
          }
          100% {
            transform:translate(123.625px,72px);
            opacity:1.000;
            stroke:rgb(142,192,208)
          }
        }
        .stripe5 {
          animation:stripe5 12s linear infinite
        }
        @keyframes stripe5 {
          0% {
            transform:translate(132.719px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          1% {
            transform:translate(133.446px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          2% {
            transform:translate(134.174px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          3% {
            transform:translate(134.901px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          4% {
            transform:translate(135.629px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          5% {
            transform:translate(136.356px,72px);
            opacity:0.911;
            stroke:rgb(119,201,239)
          }
          6% {
            transform:translate(137.084px,72px);
            opacity:0.729;
            stroke:rgb(119,201,239)
          }
          7% {
            transform:translate(137.811px,72px);
            opacity:0.547;
            stroke:rgb(119,201,239)
          }
          8% {
            transform:translate(138.539px,72px);
            opacity:0.365;
            stroke:rgb(119,201,239)
          }
          9% {
            transform:translate(139.266px,72px);
            opacity:0.183;
            stroke:rgb(119,201,239)
          }
          10% {
            transform:translate(139.994px,72px);
            opacity:0.002;
            stroke:rgb(119,201,239)
          }
          11% {
            transform:translate(140.721px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          12% {
            transform:translate(141.449px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          13% {
            transform:translate(142.176px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          14% {
            transform:translate(142.904px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          15% {
            transform:translate(143.631px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          16% {
            transform:translate(144.359px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          17% {
            transform:translate(145.086px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          18% {
            transform:translate(145.814px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          19% {
            transform:translate(146.541px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          20% {
            transform:translate(147.269px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          21% {
            transform:translate(147.996px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          22% {
            transform:translate(148.724px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          23% {
            transform:translate(149.451px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          24% {
            transform:translate(150.179px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          25% {
            transform:translate(150.906px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          26% {
            transform:translate(151.634px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          27% {
            transform:translate(152.361px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          28% {
            transform:translate(153.089px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          29% {
            transform:translate(153.816px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          30% {
            transform:translate(154.544px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          31% {
            transform:translate(155.271px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          32% {
            transform:translate(155.999px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          33% {
            transform:translate(156.726px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          34% {
            transform:translate(157.454px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          35% {
            transform:translate(158.181px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          36% {
            transform:translate(158.909px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          37% {
            transform:translate(159.636px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          38% {
            transform:translate(82.485px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          39% {
            transform:translate(83.455px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          40% {
            transform:translate(84.425px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          41% {
            transform:translate(85.395px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          42% {
            transform:translate(86.365px,72px);
            opacity:0.091;
            stroke:rgb(226,158,98)
          }
          43% {
            transform:translate(87.335px,72px);
            opacity:0.334;
            stroke:rgb(226,158,98)
          }
          44% {
            transform:translate(88.305px,72px);
            opacity:0.576;
            stroke:rgb(226,158,98)
          }
          45% {
            transform:translate(89.275px,72px);
            opacity:0.819;
            stroke:rgb(226,158,98)
          }
          46% {
            transform:translate(90.245px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          47% {
            transform:translate(91.215px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          48% {
            transform:translate(92.185px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          49% {
            transform:translate(93.155px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          50% {
            transform:translate(94.125px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          51% {
            transform:translate(95.095px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          52% {
            transform:translate(96.065px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          53% {
            transform:translate(97.035px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          54% {
            transform:translate(98.005px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          55% {
            transform:translate(98.960px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          56% {
            transform:translate(99.886px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          57% {
            transform:translate(100.786px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          58% {
            transform:translate(101.662px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          59% {
            transform:translate(102.515px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          60% {
            transform:translate(103.348px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          61% {
            transform:translate(104.162px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          62% {
            transform:translate(104.958px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          63% {
            transform:translate(105.737px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          64% {
            transform:translate(106.501px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          65% {
            transform:translate(107.249px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          66% {
            transform:translate(107.984px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          67% {
            transform:translate(108.711px,72px);
            opacity:1.000;
            stroke:rgb(222,160,103)
          }
          68% {
            transform:translate(109.439px,72px);
            opacity:1.000;
            stroke:rgb(218,161,108)
          }
          69% {
            transform:translate(110.166px,72px);
            opacity:1.000;
            stroke:rgb(214,163,113)
          }
          70% {
            transform:translate(110.894px,72px);
            opacity:1.000;
            stroke:rgb(211,164,118)
          }
          71% {
            transform:translate(111.621px,72px);
            opacity:1.000;
            stroke:rgb(207,166,124)
          }
          72% {
            transform:translate(112.349px,72px);
            opacity:1.000;
            stroke:rgb(203,167,129)
          }
          73% {
            transform:translate(113.076px,72px);
            opacity:1.000;
            stroke:rgb(199,169,134)
          }
          74% {
            transform:translate(113.804px,72px);
            opacity:1.000;
            stroke:rgb(195,170,139)
          }
          75% {
            transform:translate(114.531px,72px);
            opacity:1.000;
            stroke:rgb(191,172,144)
          }
          76% {
            transform:translate(115.259px,72px);
            opacity:1.000;
            stroke:rgb(187,174,149)
          }
          77% {
            transform:translate(115.986px,72px);
            opacity:1.000;
            stroke:rgb(183,175,154)
          }
          78% {
            transform:translate(116.714px,72px);
            opacity:1.000;
            stroke:rgb(179,177,159)
          }
          79% {
            transform:translate(117.441px,72px);
            opacity:1.000;
            stroke:rgb(175,178,165)
          }
          80% {
            transform:translate(118.169px,72px);
            opacity:1.000;
            stroke:rgb(172,180,170)
          }
          81% {
            transform:translate(118.896px,72px);
            opacity:1.000;
            stroke:rgb(168,181,175)
          }
          82% {
            transform:translate(119.624px,72px);
            opacity:1.000;
            stroke:rgb(164,183,180)
          }
          83% {
            transform:translate(120.351px,72px);
            opacity:1.000;
            stroke:rgb(160,185,185)
          }
          84% {
            transform:translate(121.079px,72px);
            opacity:1.000;
            stroke:rgb(156,186,190)
          }
          85% {
            transform:translate(121.806px,72px);
            opacity:1.000;
            stroke:rgb(152,188,195)
          }
          86% {
            transform:translate(122.534px,72px);
            opacity:1.000;
            stroke:rgb(148,189,200)
          }
          87% {
            transform:translate(123.261px,72px);
            opacity:1.000;
            stroke:rgb(144,191,206)
          }
          88% {
            transform:translate(123.989px,72px);
            opacity:1.000;
            stroke:rgb(140,192,211)
          }
          89% {
            transform:translate(124.716px,72px);
            opacity:1.000;
            stroke:rgb(137,194,216)
          }
          90% {
            transform:translate(125.444px,72px);
            opacity:1.000;
            stroke:rgb(133,196,221)
          }
          91% {
            transform:translate(126.171px,72px);
            opacity:1.000;
            stroke:rgb(129,197,226)
          }
          92% {
            transform:translate(126.899px,72px);
            opacity:1.000;
            stroke:rgb(125,199,231)
          }
          93% {
            transform:translate(127.626px,72px);
            opacity:1.000;
            stroke:rgb(121,200,236)
          }
          94% {
            transform:translate(128.354px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          95% {
            transform:translate(129.081px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          96% {
            transform:translate(129.809px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          97% {
            transform:translate(130.536px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          98% {
            transform:translate(131.264px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          99% {
            transform:translate(131.991px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          100% {
            transform:translate(132.719px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
        }
        .stripe6 {
          animation:stripe6 12s linear infinite
        }
        @keyframes stripe6 {
          0% {
            transform:translate(141.813px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          1% {
            transform:translate(142.540px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          2% {
            transform:translate(143.267px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          3% {
            transform:translate(143.995px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          4% {
            transform:translate(144.722px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          5% {
            transform:translate(145.450px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          6% {
            transform:translate(146.178px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          7% {
            transform:translate(146.905px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          8% {
            transform:translate(147.632px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          9% {
            transform:translate(148.360px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          10% {
            transform:translate(149.088px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          11% {
            transform:translate(149.815px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          12% {
            transform:translate(150.542px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          13% {
            transform:translate(151.270px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          14% {
            transform:translate(151.998px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          15% {
            transform:translate(152.725px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          16% {
            transform:translate(153.452px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          17% {
            transform:translate(154.180px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          18% {
            transform:translate(154.907px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          19% {
            transform:translate(155.635px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          20% {
            transform:translate(156.363px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          21% {
            transform:translate(157.090px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          22% {
            transform:translate(157.817px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          23% {
            transform:translate(158.545px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          24% {
            transform:translate(159.272px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          25% {
            transform:translate(82.000px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          26% {
            transform:translate(82.970px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          27% {
            transform:translate(83.940px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          28% {
            transform:translate(84.910px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          29% {
            transform:translate(85.880px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          30% {
            transform:translate(86.850px,72px);
            opacity:0.213;
            stroke:rgb(226,158,98)
          }
          31% {
            transform:translate(87.820px,72px);
            opacity:0.455;
            stroke:rgb(226,158,98)
          }
          32% {
            transform:translate(88.790px,72px);
            opacity:0.698;
            stroke:rgb(226,158,98)
          }
          33% {
            transform:translate(89.760px,72px);
            opacity:0.940;
            stroke:rgb(226,158,98)
          }
          34% {
            transform:translate(90.730px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          35% {
            transform:translate(91.700px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          36% {
            transform:translate(92.670px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          37% {
            transform:translate(93.640px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          38% {
            transform:translate(94.610px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          39% {
            transform:translate(95.580px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          40% {
            transform:translate(96.550px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          41% {
            transform:translate(97.520px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          42% {
            transform:translate(98.486px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          43% {
            transform:translate(99.426px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          44% {
            transform:translate(100.339px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          45% {
            transform:translate(101.226px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          46% {
            transform:translate(102.091px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          47% {
            transform:translate(102.934px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          48% {
            transform:translate(103.758px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          49% {
            transform:translate(104.562px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          50% {
            transform:translate(105.350px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          51% {
            transform:translate(106.121px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          52% {
            transform:translate(106.877px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          53% {
            transform:translate(107.618px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          54% {
            transform:translate(108.347px,72px);
            opacity:1.000;
            stroke:rgb(224,159,100)
          }
          55% {
            transform:translate(109.075px,72px);
            opacity:1.000;
            stroke:rgb(220,160,106)
          }
          56% {
            transform:translate(109.803px,72px);
            opacity:1.000;
            stroke:rgb(216,162,111)
          }
          57% {
            transform:translate(110.530px,72px);
            opacity:1.000;
            stroke:rgb(212,163,116)
          }
          58% {
            transform:translate(111.258px,72px);
            opacity:1.000;
            stroke:rgb(209,165,121)
          }
          59% {
            transform:translate(111.985px,72px);
            opacity:1.000;
            stroke:rgb(205,167,126)
          }
          60% {
            transform:translate(112.713px,72px);
            opacity:1.000;
            stroke:rgb(201,168,131)
          }
          61% {
            transform:translate(113.440px,72px);
            opacity:1.000;
            stroke:rgb(197,170,136)
          }
          62% {
            transform:translate(114.168px,72px);
            opacity:1.000;
            stroke:rgb(193,171,141)
          }
          63% {
            transform:translate(114.895px,72px);
            opacity:1.000;
            stroke:rgb(189,173,147)
          }
          64% {
            transform:translate(115.623px,72px);
            opacity:1.000;
            stroke:rgb(185,174,152)
          }
          65% {
            transform:translate(116.350px,72px);
            opacity:1.000;
            stroke:rgb(181,176,157)
          }
          66% {
            transform:translate(117.078px,72px);
            opacity:1.000;
            stroke:rgb(177,178,162)
          }
          67% {
            transform:translate(117.805px,72px);
            opacity:1.000;
            stroke:rgb(174,179,167)
          }
          68% {
            transform:translate(118.533px,72px);
            opacity:1.000;
            stroke:rgb(170,181,172)
          }
          69% {
            transform:translate(119.260px,72px);
            opacity:1.000;
            stroke:rgb(166,182,177)
          }
          70% {
            transform:translate(119.987px,72px);
            opacity:1.000;
            stroke:rgb(162,184,183)
          }
          71% {
            transform:translate(120.715px,72px);
            opacity:1.000;
            stroke:rgb(158,185,188)
          }
          72% {
            transform:translate(121.442px,72px);
            opacity:1.000;
            stroke:rgb(154,187,193)
          }
          73% {
            transform:translate(122.170px,72px);
            opacity:1.000;
            stroke:rgb(150,188,198)
          }
          74% {
            transform:translate(122.897px,72px);
            opacity:1.000;
            stroke:rgb(146,190,203)
          }
          75% {
            transform:translate(123.625px,72px);
            opacity:1.000;
            stroke:rgb(142,192,208)
          }
          76% {
            transform:translate(124.353px,72px);
            opacity:1.000;
            stroke:rgb(139,193,213)
          }
          77% {
            transform:translate(125.080px,72px);
            opacity:1.000;
            stroke:rgb(135,195,218)
          }
          78% {
            transform:translate(125.808px,72px);
            opacity:1.000;
            stroke:rgb(131,196,224)
          }
          79% {
            transform:translate(126.535px,72px);
            opacity:1.000;
            stroke:rgb(127,198,229)
          }
          80% {
            transform:translate(127.263px,72px);
            opacity:1.000;
            stroke:rgb(123,199,234)
          }
          81% {
            transform:translate(127.990px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          82% {
            transform:translate(128.717px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          83% {
            transform:translate(129.445px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          84% {
            transform:translate(130.172px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          85% {
            transform:translate(130.900px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          86% {
            transform:translate(131.627px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          87% {
            transform:translate(132.355px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          88% {
            transform:translate(133.082px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          89% {
            transform:translate(133.810px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          90% {
            transform:translate(134.537px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          91% {
            transform:translate(135.265px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          92% {
            transform:translate(135.993px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          93% {
            transform:translate(136.720px,72px);
            opacity:0.820;
            stroke:rgb(119,201,239)
          }
          94% {
            transform:translate(137.447px,72px);
            opacity:0.638;
            stroke:rgb(119,201,239)
          }
          95% {
            transform:translate(138.175px,72px);
            opacity:0.456;
            stroke:rgb(119,201,239)
          }
          96% {
            transform:translate(138.903px,72px);
            opacity:0.274;
            stroke:rgb(119,201,239)
          }
          97% {
            transform:translate(139.630px,72px);
            opacity:0.093;
            stroke:rgb(119,201,239)
          }
          98% {
            transform:translate(140.358px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          99% {
            transform:translate(141.085px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          100% {
            transform:translate(141.813px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
        }
        .stripe7 {
          animation:stripe7 12s linear infinite
        }
        @keyframes stripe7 {
          0% {
            transform:translate(150.906px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          1% {
            transform:translate(151.634px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          2% {
            transform:translate(152.361px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          3% {
            transform:translate(153.089px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          4% {
            transform:translate(153.816px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          5% {
            transform:translate(154.544px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          6% {
            transform:translate(155.271px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          7% {
            transform:translate(155.999px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          8% {
            transform:translate(156.726px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          9% {
            transform:translate(157.454px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          10% {
            transform:translate(158.181px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          11% {
            transform:translate(158.909px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          12% {
            transform:translate(159.636px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          13% {
            transform:translate(82.485px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          14% {
            transform:translate(83.455px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          15% {
            transform:translate(84.425px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          16% {
            transform:translate(85.395px,72px);
            opacity:0.000;
            stroke:rgb(226,158,98)
          }
          17% {
            transform:translate(86.365px,72px);
            opacity:0.091;
            stroke:rgb(226,158,98)
          }
          18% {
            transform:translate(87.335px,72px);
            opacity:0.334;
            stroke:rgb(226,158,98)
          }
          19% {
            transform:translate(88.305px,72px);
            opacity:0.576;
            stroke:rgb(226,158,98)
          }
          20% {
            transform:translate(89.275px,72px);
            opacity:0.819;
            stroke:rgb(226,158,98)
          }
          21% {
            transform:translate(90.245px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          22% {
            transform:translate(91.215px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          23% {
            transform:translate(92.185px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          24% {
            transform:translate(93.155px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          25% {
            transform:translate(94.125px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          26% {
            transform:translate(95.095px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          27% {
            transform:translate(96.065px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          28% {
            transform:translate(97.035px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          29% {
            transform:translate(98.005px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          30% {
            transform:translate(98.960px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          31% {
            transform:translate(99.886px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          32% {
            transform:translate(100.786px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          33% {
            transform:translate(101.662px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          34% {
            transform:translate(102.515px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          35% {
            transform:translate(103.348px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          36% {
            transform:translate(104.162px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          37% {
            transform:translate(104.958px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          38% {
            transform:translate(105.737px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          39% {
            transform:translate(106.501px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          40% {
            transform:translate(107.249px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          41% {
            transform:translate(107.984px,72px);
            opacity:1.000;
            stroke:rgb(226,158,98)
          }
          42% {
            transform:translate(108.711px,72px);
            opacity:1.000;
            stroke:rgb(222,160,103)
          }
          43% {
            transform:translate(109.439px,72px);
            opacity:1.000;
            stroke:rgb(218,161,108)
          }
          44% {
            transform:translate(110.166px,72px);
            opacity:1.000;
            stroke:rgb(214,163,113)
          }
          45% {
            transform:translate(110.894px,72px);
            opacity:1.000;
            stroke:rgb(211,164,118)
          }
          46% {
            transform:translate(111.621px,72px);
            opacity:1.000;
            stroke:rgb(207,166,124)
          }
          47% {
            transform:translate(112.349px,72px);
            opacity:1.000;
            stroke:rgb(203,167,129)
          }
          48% {
            transform:translate(113.076px,72px);
            opacity:1.000;
            stroke:rgb(199,169,134)
          }
          49% {
            transform:translate(113.804px,72px);
            opacity:1.000;
            stroke:rgb(195,170,139)
          }
          50% {
            transform:translate(114.531px,72px);
            opacity:1.000;
            stroke:rgb(191,172,144)
          }
          51% {
            transform:translate(115.259px,72px);
            opacity:1.000;
            stroke:rgb(187,174,149)
          }
          52% {
            transform:translate(115.986px,72px);
            opacity:1.000;
            stroke:rgb(183,175,154)
          }
          53% {
            transform:translate(116.714px,72px);
            opacity:1.000;
            stroke:rgb(179,177,159)
          }
          54% {
            transform:translate(117.441px,72px);
            opacity:1.000;
            stroke:rgb(175,178,165)
          }
          55% {
            transform:translate(118.169px,72px);
            opacity:1.000;
            stroke:rgb(172,180,170)
          }
          56% {
            transform:translate(118.896px,72px);
            opacity:1.000;
            stroke:rgb(168,181,175)
          }
          57% {
            transform:translate(119.624px,72px);
            opacity:1.000;
            stroke:rgb(164,183,180)
          }
          58% {
            transform:translate(120.351px,72px);
            opacity:1.000;
            stroke:rgb(160,185,185)
          }
          59% {
            transform:translate(121.079px,72px);
            opacity:1.000;
            stroke:rgb(156,186,190)
          }
          60% {
            transform:translate(121.806px,72px);
            opacity:1.000;
            stroke:rgb(152,188,195)
          }
          61% {
            transform:translate(122.534px,72px);
            opacity:1.000;
            stroke:rgb(148,189,200)
          }
          62% {
            transform:translate(123.261px,72px);
            opacity:1.000;
            stroke:rgb(144,191,206)
          }
          63% {
            transform:translate(123.989px,72px);
            opacity:1.000;
            stroke:rgb(140,192,211)
          }
          64% {
            transform:translate(124.716px,72px);
            opacity:1.000;
            stroke:rgb(137,194,216)
          }
          65% {
            transform:translate(125.444px,72px);
            opacity:1.000;
            stroke:rgb(133,196,221)
          }
          66% {
            transform:translate(126.171px,72px);
            opacity:1.000;
            stroke:rgb(129,197,226)
          }
          67% {
            transform:translate(126.899px,72px);
            opacity:1.000;
            stroke:rgb(125,199,231)
          }
          68% {
            transform:translate(127.626px,72px);
            opacity:1.000;
            stroke:rgb(121,200,236)
          }
          69% {
            transform:translate(128.354px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          70% {
            transform:translate(129.081px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          71% {
            transform:translate(129.809px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          72% {
            transform:translate(130.536px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          73% {
            transform:translate(131.264px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          74% {
            transform:translate(131.991px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          75% {
            transform:translate(132.719px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          76% {
            transform:translate(133.446px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          77% {
            transform:translate(134.174px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          78% {
            transform:translate(134.901px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          79% {
            transform:translate(135.629px,72px);
            opacity:1.000;
            stroke:rgb(119,201,239)
          }
          80% {
            transform:translate(136.356px,72px);
            opacity:0.911;
            stroke:rgb(119,201,239)
          }
          81% {
            transform:translate(137.084px,72px);
            opacity:0.729;
            stroke:rgb(119,201,239)
          }
          82% {
            transform:translate(137.811px,72px);
            opacity:0.547;
            stroke:rgb(119,201,239)
          }
          83% {
            transform:translate(138.539px,72px);
            opacity:0.365;
            stroke:rgb(119,201,239)
          }
          84% {
            transform:translate(139.266px,72px);
            opacity:0.183;
            stroke:rgb(119,201,239)
          }
          85% {
            transform:translate(139.994px,72px);
            opacity:0.002;
            stroke:rgb(119,201,239)
          }
          86% {
            transform:translate(140.721px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          87% {
            transform:translate(141.449px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          88% {
            transform:translate(142.176px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          89% {
            transform:translate(142.904px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          90% {
            transform:translate(143.631px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          91% {
            transform:translate(144.359px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          92% {
            transform:translate(145.086px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          93% {
            transform:translate(145.814px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          94% {
            transform:translate(146.541px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          95% {
            transform:translate(147.269px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          96% {
            transform:translate(147.996px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          97% {
            transform:translate(148.724px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          98% {
            transform:translate(149.451px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          99% {
            transform:translate(150.179px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
          100% {
            transform:translate(150.906px,72px);
            opacity:0.000;
            stroke:rgb(119,201,239)
          }
        }
        .shaft {
          fill:none;
          stroke:#28483e;
          stroke-width:5
        }
        .flights {
          fill:none;
          stroke:#82a796;
          stroke-width:2;
          animation:flights 12s linear infinite
        }
        .die {
          fill:#2a493f;
          stroke:#719886;
          stroke-width:1
        }
        .stripe {
          fill:none;
          stroke-width:1.2;
          opacity:0
        }
        .pellet {
          fill:#d6aa7d;
          opacity:0;
          animation:pellet 4s linear infinite
        }
        .pellet1 {
          animation-delay:-1.333s
        }
        .pellet2 {
          animation-delay:-2.667s
        }
        .cooling {
          stroke:#77c9ef;
          opacity:.65
        }
        @keyframes flights {
          0% {
            d:path('M15,62L21,82M27,62L33,82M39,62L45,82M51,62L57,82M63,62L69,82M75,62L81,82')
          }
          1% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          2% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          3% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          4% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          5% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          6% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          7% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          8% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          9% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          10% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          11% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          12% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          13% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          14% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          15% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          16% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          17% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          18% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          19% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          20% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          21% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          22% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          23% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          24% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          25% {
            d:path('M15,62L21,82M27,62L33,82M39,62L45,82M51,62L57,82M63,62L69,82M75,62L81,82')
          }
          26% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          27% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          28% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          29% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          30% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          31% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          32% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          33% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          34% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          35% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          36% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          37% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          38% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          39% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          40% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          41% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          42% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          43% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          44% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          45% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          46% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          47% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          48% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          49% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          50% {
            d:path('M15,62L21,82M27,62L33,82M39,62L45,82M51,62L57,82M63,62L69,82M75,62L81,82')
          }
          51% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          52% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          53% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          54% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          55% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          56% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          57% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          58% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          59% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          60% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          61% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          62% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          63% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          64% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          65% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          66% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          67% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          68% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          69% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          70% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          71% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          72% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          73% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          74% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          75% {
            d:path('M15,62L21,82M27,62L33,82M39,62L45,82M51,62L57,82M63,62L69,82M75,62L81,82')
          }
          76% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          77% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          78% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          79% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          80% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          81% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          82% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          83% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          84% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          85% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          86% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          87% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          88% {
            d:path('M15,81.921L21,62.079M27,81.921L33,62.079M39,81.921L45,62.079M51,81.921L57,62.079M63,81.921L69,62.079M75,81.921L81,62.079')
          }
          89% {
            d:path('M15,81.298L21,62.702M27,81.298L33,62.702M39,81.298L45,62.702M51,81.298L57,62.702M63,81.298L69,62.702M75,81.298L81,62.702')
          }
          90% {
            d:path('M15,80.09L21,63.91M27,80.09L33,63.91M39,80.09L45,63.91M51,80.09L57,63.91M63,80.09L69,63.91M75,80.09L81,63.91')
          }
          91% {
            d:path('M15,78.374L21,65.626M27,78.374L33,65.626M39,78.374L45,65.626M51,78.374L57,65.626M63,78.374L69,65.626M75,78.374L81,65.626')
          }
          92% {
            d:path('M15,76.258L21,67.742M27,76.258L33,67.742M39,76.258L45,67.742M51,76.258L57,67.742M63,76.258L69,67.742M75,76.258L81,67.742')
          }
          93% {
            d:path('M15,73.874L21,70.126M27,73.874L33,70.126M39,73.874L45,70.126M51,73.874L57,70.126M63,73.874L69,70.126M75,73.874L81,70.126')
          }
          94% {
            d:path('M15,71.372L21,72.628M27,71.372L33,72.628M39,71.372L45,72.628M51,71.372L57,72.628M63,71.372L69,72.628M75,71.372L81,72.628')
          }
          95% {
            d:path('M15,68.91L21,75.09M27,68.91L33,75.09M39,68.91L45,75.09M51,68.91L57,75.09M63,68.91L69,75.09M75,68.91L81,75.09')
          }
          96% {
            d:path('M15,66.642L21,77.358M27,66.642L33,77.358M39,66.642L45,77.358M51,66.642L57,77.358M63,66.642L69,77.358M75,66.642L81,77.358')
          }
          97% {
            d:path('M15,64.71L21,79.29M27,64.71L33,79.29M39,64.71L45,79.29M51,64.71L57,79.29M63,64.71L69,79.29M75,64.71L81,79.29')
          }
          98% {
            d:path('M15,63.237L21,80.763M27,63.237L33,80.763M39,63.237L45,80.763M51,63.237L57,80.763M63,63.237L69,80.763M75,63.237L81,80.763')
          }
          99% {
            d:path('M15,62.314L21,81.686M27,62.314L33,81.686M39,62.314L45,81.686M51,62.314L57,81.686M63,62.314L69,81.686M75,62.314L81,81.686')
          }
          100% {
            d:path('M15,62L21,82M27,62L33,82M39,62L45,82M51,62L57,82M63,62L69,82M75,62L81,82')
          }
        }
        @keyframes pellet {
          0%,3% {
            opacity:0;
            transform:translate(0,0)
          }
          8% {
            opacity:1;
            transform:translate(0,6px)
          }
          25% {
            opacity:1;
            transform:translate(0,30px)
          }
          85% {
            opacity:1;
            transform:translate(30px,30px)
          }
          95%,100% {
            opacity:0;
            transform:translate(34px,30px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Polymer Extrusion">
        <defs>
          <clipPath id="barrel">
            <rect x="12" y="60" width="76" height="24"/>
          </clipPath>
          <clipPath id="profile">
            <path d="M82,69H98L108,68H140V76H108L98,75H82Z"/>
          </clipPath>
          <linearGradient id="cooldown">
            <stop offset="0" stop-color="#bd855b"/>
            <stop offset=".46" stop-color="#bd855b"/>
            <stop offset="1" stop-color="#407585"/>
          </linearGradient>
        </defs>
        <path class="ink muted" d="M12,60H88M12,84H88M20,28H39L34,59H25Z"/>
        <path fill="#b98962" d="M23,32H36L32,45H27Z"/>
        <g clip-path="url(#barrel)">
          <path fill="#866149" d="M48,60H82L88,69V75L82,84H48Z"/>
          <path class="shaft" d="M12,72H81"/>
          <path class="flights" d="M15,62L21,82M27,62L33,82M39,62L45,82M51,62L57,82M63,62L69,82M75,62L81,82"/>
        </g>
        <circle class="pellet pellet0" cx="28" cy="34" r="1.8"/>
        <circle class="pellet pellet1" cx="28" cy="34" r="1.8"/>
        <circle class="pellet pellet2" cx="28" cy="34" r="1.8"/>
        <path class="die" d="M88,56H98V69H88ZM88,75H98V88H88Z"/>
        <path fill="url(#cooldown)" d="M82,69H98L108,68H140V76H108L98,75H82Z"/>
        <g clip-path="url(#profile)">
          <path class="stripe stripe0" d="M0,-5V5"/>
          <path class="stripe stripe1" d="M0,-5V5"/>
          <path class="stripe stripe2" d="M0,-5V5"/>
          <path class="stripe stripe3" d="M0,-5V5"/>
          <path class="stripe stripe4" d="M0,-5V5"/>
          <path class="stripe stripe5" d="M0,-5V5"/>
          <path class="stripe stripe6" d="M0,-5V5"/>
          <path class="stripe stripe7" d="M0,-5V5"/>
        </g>
        <path class="ink muted" d="M82,69H98L108,68H140M82,75H98L108,76H140"/>
        <path class="cooling ink" d="M119,49V62M116,58L119,62L122,58M131,49V62M128,58L131,62L134,58"/>
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

if (!customElements.get("concept-polymer-extrusion")) {
  customElements.define("concept-polymer-extrusion", ConceptPolymerExtrusion);
}
