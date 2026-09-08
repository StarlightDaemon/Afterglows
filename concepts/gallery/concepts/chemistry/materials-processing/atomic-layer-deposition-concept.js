// Atomic Layer Deposition. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAtomicLayerDeposition extends HTMLElement {
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
        .a0_0 {
          animation:a0_0 18s linear infinite
        }
        .b0_0 {
          animation:b0_0 18s linear infinite
        }
        .stem0_0 {
          animation:stem0_0 18s linear infinite
        }
        @keyframes a0_0 {
          0%,6% {
            opacity:0;
            transform:translate(25px,30px)
          }
          7% {
            opacity:1;
            transform:translate(25px,34px)
          }
          8.5% {
            opacity:1;
            transform:translate(30px,78px)
          }
          10%,33% {
            opacity:1;
            transform:translate(30px,86px)
          }
          35%,100% {
            opacity:0;
            transform:translate(30px,86px)
          }
        }
        @keyframes b0_0 {
          0%,31% {
            opacity:0;
            transform:translate(30px,38px)
          }
          32% {
            opacity:1;
            transform:translate(30px,78px)
          }
          33% {
            opacity:1;
            transform:translate(30px,86px)
          }
          35%,100% {
            opacity:0;
            transform:translate(30px,86px)
          }
        }
        @keyframes stem0_0 {
          0%,9.8% {
            opacity:0
          }
          10%,33% {
            opacity:1
          }
          35%,100% {
            opacity:0
          }
        }
        .a0_1 {
          animation:a0_1 18s linear infinite
        }
        .b0_1 {
          animation:b0_1 18s linear infinite
        }
        .stem0_1 {
          animation:stem0_1 18s linear infinite
        }
        @keyframes a0_1 {
          0%,7.1% {
            opacity:0;
            transform:translate(37px,30px)
          }
          8.1% {
            opacity:1;
            transform:translate(37px,34px)
          }
          9.6% {
            opacity:1;
            transform:translate(110px,78px)
          }
          11.1%,34.1% {
            opacity:1;
            transform:translate(110px,86px)
          }
          36.1%,100% {
            opacity:0;
            transform:translate(110px,86px)
          }
        }
        @keyframes b0_1 {
          0%,32.1% {
            opacity:0;
            transform:translate(110px,38px)
          }
          33.1% {
            opacity:1;
            transform:translate(110px,78px)
          }
          34.1% {
            opacity:1;
            transform:translate(110px,86px)
          }
          36.1%,100% {
            opacity:0;
            transform:translate(110px,86px)
          }
        }
        @keyframes stem0_1 {
          0%,10.9% {
            opacity:0
          }
          11.1%,34.1% {
            opacity:1
          }
          36.1%,100% {
            opacity:0
          }
        }
        .a0_2 {
          animation:a0_2 18s linear infinite
        }
        .b0_2 {
          animation:b0_2 18s linear infinite
        }
        .stem0_2 {
          animation:stem0_2 18s linear infinite
        }
        @keyframes a0_2 {
          0%,8.2% {
            opacity:0;
            transform:translate(49px,30px)
          }
          9.2% {
            opacity:1;
            transform:translate(49px,34px)
          }
          10.7% {
            opacity:1;
            transform:translate(70px,78px)
          }
          12.2%,35.2% {
            opacity:1;
            transform:translate(52px,98px)
          }
          37.2%,100% {
            opacity:0;
            transform:translate(52px,98px)
          }
        }
        @keyframes b0_2 {
          0%,33.2% {
            opacity:0;
            transform:translate(70px,38px)
          }
          34.2% {
            opacity:1;
            transform:translate(70px,78px)
          }
          35.2% {
            opacity:1;
            transform:translate(52px,98px)
          }
          37.2%,100% {
            opacity:0;
            transform:translate(52px,98px)
          }
        }
        @keyframes stem0_2 {
          0%,12% {
            opacity:0
          }
          12.2%,35.2% {
            opacity:1
          }
          37.2%,100% {
            opacity:0
          }
        }
        .a0_3 {
          animation:a0_3 18s linear infinite
        }
        .b0_3 {
          animation:b0_3 18s linear infinite
        }
        .stem0_3 {
          animation:stem0_3 18s linear infinite
        }
        @keyframes a0_3 {
          0%,9.3% {
            opacity:0;
            transform:translate(61px,30px)
          }
          10.3% {
            opacity:1;
            transform:translate(61px,34px)
          }
          11.8% {
            opacity:1;
            transform:translate(70px,78px)
          }
          13.3%,36.3% {
            opacity:1;
            transform:translate(88px,98px)
          }
          38.3%,100% {
            opacity:0;
            transform:translate(88px,98px)
          }
        }
        @keyframes b0_3 {
          0%,34.3% {
            opacity:0;
            transform:translate(70px,38px)
          }
          35.3% {
            opacity:1;
            transform:translate(70px,78px)
          }
          36.3% {
            opacity:1;
            transform:translate(88px,98px)
          }
          38.3%,100% {
            opacity:0;
            transform:translate(88px,98px)
          }
        }
        @keyframes stem0_3 {
          0%,13.1% {
            opacity:0
          }
          13.3%,36.3% {
            opacity:1
          }
          38.3%,100% {
            opacity:0
          }
        }
        .a0_4 {
          animation:a0_4 18s linear infinite
        }
        .b0_4 {
          animation:b0_4 18s linear infinite
        }
        .stem0_4 {
          animation:stem0_4 18s linear infinite
        }
        @keyframes a0_4 {
          0%,10.4% {
            opacity:0;
            transform:translate(73px,30px)
          }
          11.4% {
            opacity:1;
            transform:translate(73px,34px)
          }
          12.9% {
            opacity:1;
            transform:translate(70px,78px)
          }
          14.4%,37.4% {
            opacity:1;
            transform:translate(52px,106px)
          }
          39.4%,100% {
            opacity:0;
            transform:translate(52px,106px)
          }
        }
        @keyframes b0_4 {
          0%,35.4% {
            opacity:0;
            transform:translate(70px,38px)
          }
          36.4% {
            opacity:1;
            transform:translate(70px,78px)
          }
          37.4% {
            opacity:1;
            transform:translate(52px,106px)
          }
          39.4%,100% {
            opacity:0;
            transform:translate(52px,106px)
          }
        }
        @keyframes stem0_4 {
          0%,14.2% {
            opacity:0
          }
          14.4%,37.4% {
            opacity:1
          }
          39.4%,100% {
            opacity:0
          }
        }
        .a0_5 {
          animation:a0_5 18s linear infinite
        }
        .b0_5 {
          animation:b0_5 18s linear infinite
        }
        .stem0_5 {
          animation:stem0_5 18s linear infinite
        }
        @keyframes a0_5 {
          0%,11.5% {
            opacity:0;
            transform:translate(85px,30px)
          }
          12.5% {
            opacity:1;
            transform:translate(85px,34px)
          }
          14% {
            opacity:1;
            transform:translate(70px,78px)
          }
          15.5%,38.5% {
            opacity:1;
            transform:translate(88px,106px)
          }
          40.5%,100% {
            opacity:0;
            transform:translate(88px,106px)
          }
        }
        @keyframes b0_5 {
          0%,36.5% {
            opacity:0;
            transform:translate(70px,38px)
          }
          37.5% {
            opacity:1;
            transform:translate(70px,78px)
          }
          38.5% {
            opacity:1;
            transform:translate(88px,106px)
          }
          40.5%,100% {
            opacity:0;
            transform:translate(88px,106px)
          }
        }
        @keyframes stem0_5 {
          0%,15.3% {
            opacity:0
          }
          15.5%,38.5% {
            opacity:1
          }
          40.5%,100% {
            opacity:0
          }
        }
        .a0_6 {
          animation:a0_6 18s linear infinite
        }
        .b0_6 {
          animation:b0_6 18s linear infinite
        }
        .stem0_6 {
          animation:stem0_6 18s linear infinite
        }
        @keyframes a0_6 {
          0%,12.6% {
            opacity:0;
            transform:translate(97px,30px)
          }
          13.6% {
            opacity:1;
            transform:translate(97px,34px)
          }
          15.1% {
            opacity:1;
            transform:translate(70px,78px)
          }
          16.6%,39.6% {
            opacity:1;
            transform:translate(62px,108px)
          }
          41.6%,100% {
            opacity:0;
            transform:translate(62px,108px)
          }
        }
        @keyframes b0_6 {
          0%,37.6% {
            opacity:0;
            transform:translate(70px,38px)
          }
          38.6% {
            opacity:1;
            transform:translate(70px,78px)
          }
          39.6% {
            opacity:1;
            transform:translate(62px,108px)
          }
          41.6%,100% {
            opacity:0;
            transform:translate(62px,108px)
          }
        }
        @keyframes stem0_6 {
          0%,16.4% {
            opacity:0
          }
          16.6%,39.6% {
            opacity:1
          }
          41.6%,100% {
            opacity:0
          }
        }
        .a0_7 {
          animation:a0_7 18s linear infinite
        }
        .b0_7 {
          animation:b0_7 18s linear infinite
        }
        .stem0_7 {
          animation:stem0_7 18s linear infinite
        }
        @keyframes a0_7 {
          0%,13.7% {
            opacity:0;
            transform:translate(109px,30px)
          }
          14.7% {
            opacity:1;
            transform:translate(109px,34px)
          }
          16.2% {
            opacity:1;
            transform:translate(70px,78px)
          }
          17.7%,40.7% {
            opacity:1;
            transform:translate(78px,108px)
          }
          42.7%,100% {
            opacity:0;
            transform:translate(78px,108px)
          }
        }
        @keyframes b0_7 {
          0%,38.7% {
            opacity:0;
            transform:translate(70px,38px)
          }
          39.7% {
            opacity:1;
            transform:translate(70px,78px)
          }
          40.7% {
            opacity:1;
            transform:translate(78px,108px)
          }
          42.7%,100% {
            opacity:0;
            transform:translate(78px,108px)
          }
        }
        @keyframes stem0_7 {
          0%,17.5% {
            opacity:0
          }
          17.7%,40.7% {
            opacity:1
          }
          42.7%,100% {
            opacity:0
          }
        }
        .a1_0 {
          animation:a1_0 18s linear infinite
        }
        .b1_0 {
          animation:b1_0 18s linear infinite
        }
        .stem1_0 {
          animation:stem1_0 18s linear infinite
        }
        @keyframes a1_0 {
          0%,53% {
            opacity:0;
            transform:translate(25px,30px)
          }
          54% {
            opacity:1;
            transform:translate(25px,34px)
          }
          55.5% {
            opacity:1;
            transform:translate(30px,78px)
          }
          57%,75% {
            opacity:1;
            transform:translate(30px,84px)
          }
          77%,100% {
            opacity:0;
            transform:translate(30px,84px)
          }
        }
        @keyframes b1_0 {
          0%,73% {
            opacity:0;
            transform:translate(30px,38px)
          }
          74% {
            opacity:1;
            transform:translate(30px,78px)
          }
          75% {
            opacity:1;
            transform:translate(30px,84px)
          }
          77%,100% {
            opacity:0;
            transform:translate(30px,84px)
          }
        }
        @keyframes stem1_0 {
          0%,56.8% {
            opacity:0
          }
          57%,75% {
            opacity:1
          }
          77%,100% {
            opacity:0
          }
        }
        .a1_1 {
          animation:a1_1 18s linear infinite
        }
        .b1_1 {
          animation:b1_1 18s linear infinite
        }
        .stem1_1 {
          animation:stem1_1 18s linear infinite
        }
        @keyframes a1_1 {
          0%,54.1% {
            opacity:0;
            transform:translate(37px,30px)
          }
          55.1% {
            opacity:1;
            transform:translate(37px,34px)
          }
          56.6% {
            opacity:1;
            transform:translate(110px,78px)
          }
          58.1%,76.1% {
            opacity:1;
            transform:translate(110px,84px)
          }
          78.1%,100% {
            opacity:0;
            transform:translate(110px,84px)
          }
        }
        @keyframes b1_1 {
          0%,74.1% {
            opacity:0;
            transform:translate(110px,38px)
          }
          75.1% {
            opacity:1;
            transform:translate(110px,78px)
          }
          76.1% {
            opacity:1;
            transform:translate(110px,84px)
          }
          78.1%,100% {
            opacity:0;
            transform:translate(110px,84px)
          }
        }
        @keyframes stem1_1 {
          0%,57.9% {
            opacity:0
          }
          58.1%,76.1% {
            opacity:1
          }
          78.1%,100% {
            opacity:0
          }
        }
        .a1_2 {
          animation:a1_2 18s linear infinite
        }
        .b1_2 {
          animation:b1_2 18s linear infinite
        }
        .stem1_2 {
          animation:stem1_2 18s linear infinite
        }
        @keyframes a1_2 {
          0%,55.2% {
            opacity:0;
            transform:translate(49px,30px)
          }
          56.2% {
            opacity:1;
            transform:translate(49px,34px)
          }
          57.7% {
            opacity:1;
            transform:translate(70px,78px)
          }
          59.2%,77.2% {
            opacity:1;
            transform:translate(54px,98px)
          }
          79.2%,100% {
            opacity:0;
            transform:translate(54px,98px)
          }
        }
        @keyframes b1_2 {
          0%,75.2% {
            opacity:0;
            transform:translate(70px,38px)
          }
          76.2% {
            opacity:1;
            transform:translate(70px,78px)
          }
          77.2% {
            opacity:1;
            transform:translate(54px,98px)
          }
          79.2%,100% {
            opacity:0;
            transform:translate(54px,98px)
          }
        }
        @keyframes stem1_2 {
          0%,59% {
            opacity:0
          }
          59.2%,77.2% {
            opacity:1
          }
          79.2%,100% {
            opacity:0
          }
        }
        .a1_3 {
          animation:a1_3 18s linear infinite
        }
        .b1_3 {
          animation:b1_3 18s linear infinite
        }
        .stem1_3 {
          animation:stem1_3 18s linear infinite
        }
        @keyframes a1_3 {
          0%,56.3% {
            opacity:0;
            transform:translate(61px,30px)
          }
          57.3% {
            opacity:1;
            transform:translate(61px,34px)
          }
          58.8% {
            opacity:1;
            transform:translate(70px,78px)
          }
          60.3%,78.3% {
            opacity:1;
            transform:translate(86px,98px)
          }
          80.3%,100% {
            opacity:0;
            transform:translate(86px,98px)
          }
        }
        @keyframes b1_3 {
          0%,76.3% {
            opacity:0;
            transform:translate(70px,38px)
          }
          77.3% {
            opacity:1;
            transform:translate(70px,78px)
          }
          78.3% {
            opacity:1;
            transform:translate(86px,98px)
          }
          80.3%,100% {
            opacity:0;
            transform:translate(86px,98px)
          }
        }
        @keyframes stem1_3 {
          0%,60.1% {
            opacity:0
          }
          60.3%,78.3% {
            opacity:1
          }
          80.3%,100% {
            opacity:0
          }
        }
        .a1_4 {
          animation:a1_4 18s linear infinite
        }
        .b1_4 {
          animation:b1_4 18s linear infinite
        }
        .stem1_4 {
          animation:stem1_4 18s linear infinite
        }
        @keyframes a1_4 {
          0%,57.4% {
            opacity:0;
            transform:translate(73px,30px)
          }
          58.4% {
            opacity:1;
            transform:translate(73px,34px)
          }
          59.9% {
            opacity:1;
            transform:translate(70px,78px)
          }
          61.4%,79.4% {
            opacity:1;
            transform:translate(54px,106px)
          }
          81.4%,100% {
            opacity:0;
            transform:translate(54px,106px)
          }
        }
        @keyframes b1_4 {
          0%,77.4% {
            opacity:0;
            transform:translate(70px,38px)
          }
          78.4% {
            opacity:1;
            transform:translate(70px,78px)
          }
          79.4% {
            opacity:1;
            transform:translate(54px,106px)
          }
          81.4%,100% {
            opacity:0;
            transform:translate(54px,106px)
          }
        }
        @keyframes stem1_4 {
          0%,61.2% {
            opacity:0
          }
          61.4%,79.4% {
            opacity:1
          }
          81.4%,100% {
            opacity:0
          }
        }
        .a1_5 {
          animation:a1_5 18s linear infinite
        }
        .b1_5 {
          animation:b1_5 18s linear infinite
        }
        .stem1_5 {
          animation:stem1_5 18s linear infinite
        }
        @keyframes a1_5 {
          0%,58.5% {
            opacity:0;
            transform:translate(85px,30px)
          }
          59.5% {
            opacity:1;
            transform:translate(85px,34px)
          }
          61% {
            opacity:1;
            transform:translate(70px,78px)
          }
          62.5%,80.5% {
            opacity:1;
            transform:translate(86px,106px)
          }
          82.5%,100% {
            opacity:0;
            transform:translate(86px,106px)
          }
        }
        @keyframes b1_5 {
          0%,78.5% {
            opacity:0;
            transform:translate(70px,38px)
          }
          79.5% {
            opacity:1;
            transform:translate(70px,78px)
          }
          80.5% {
            opacity:1;
            transform:translate(86px,106px)
          }
          82.5%,100% {
            opacity:0;
            transform:translate(86px,106px)
          }
        }
        @keyframes stem1_5 {
          0%,62.3% {
            opacity:0
          }
          62.5%,80.5% {
            opacity:1
          }
          82.5%,100% {
            opacity:0
          }
        }
        .a1_6 {
          animation:a1_6 18s linear infinite
        }
        .b1_6 {
          animation:b1_6 18s linear infinite
        }
        .stem1_6 {
          animation:stem1_6 18s linear infinite
        }
        @keyframes a1_6 {
          0%,59.6% {
            opacity:0;
            transform:translate(97px,30px)
          }
          60.6% {
            opacity:1;
            transform:translate(97px,34px)
          }
          62.1% {
            opacity:1;
            transform:translate(70px,78px)
          }
          63.6%,81.6% {
            opacity:1;
            transform:translate(62px,106px)
          }
          83.6%,100% {
            opacity:0;
            transform:translate(62px,106px)
          }
        }
        @keyframes b1_6 {
          0%,79.6% {
            opacity:0;
            transform:translate(70px,38px)
          }
          80.6% {
            opacity:1;
            transform:translate(70px,78px)
          }
          81.6% {
            opacity:1;
            transform:translate(62px,106px)
          }
          83.6%,100% {
            opacity:0;
            transform:translate(62px,106px)
          }
        }
        @keyframes stem1_6 {
          0%,63.4% {
            opacity:0
          }
          63.6%,81.6% {
            opacity:1
          }
          83.6%,100% {
            opacity:0
          }
        }
        .a1_7 {
          animation:a1_7 18s linear infinite
        }
        .b1_7 {
          animation:b1_7 18s linear infinite
        }
        .stem1_7 {
          animation:stem1_7 18s linear infinite
        }
        @keyframes a1_7 {
          0%,60.7% {
            opacity:0;
            transform:translate(109px,30px)
          }
          61.7% {
            opacity:1;
            transform:translate(109px,34px)
          }
          63.2% {
            opacity:1;
            transform:translate(70px,78px)
          }
          64.7%,82.7% {
            opacity:1;
            transform:translate(78px,106px)
          }
          84.7%,100% {
            opacity:0;
            transform:translate(78px,106px)
          }
        }
        @keyframes b1_7 {
          0%,80.7% {
            opacity:0;
            transform:translate(70px,38px)
          }
          81.7% {
            opacity:1;
            transform:translate(70px,78px)
          }
          82.7% {
            opacity:1;
            transform:translate(78px,106px)
          }
          84.7%,100% {
            opacity:0;
            transform:translate(78px,106px)
          }
        }
        @keyframes stem1_7 {
          0%,64.5% {
            opacity:0
          }
          64.7%,82.7% {
            opacity:1
          }
          84.7%,100% {
            opacity:0
          }
        }
        .free0_0 {
          animation:free0_0 18s linear infinite
        }
        @keyframes free0_0 {
          0%,8% {
            opacity:0;
            transform:translate(15px,34px)
          }
          10% {
            opacity:1;
            transform:translate(38px,37px)
          }
          23% {
            opacity:1;
            transform:translate(46px,37px)
          }
          30% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free0_1 {
          animation:free0_1 18s linear infinite
        }
        @keyframes free0_1 {
          0%,8% {
            opacity:0;
            transform:translate(15px,34px)
          }
          10% {
            opacity:1;
            transform:translate(100px,45px)
          }
          23% {
            opacity:1;
            transform:translate(108px,45px)
          }
          30% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free1_0 {
          animation:free1_0 18s linear infinite
        }
        @keyframes free1_0 {
          0%,31% {
            opacity:0;
            transform:translate(15px,34px)
          }
          33% {
            opacity:1;
            transform:translate(38px,37px)
          }
          45% {
            opacity:1;
            transform:translate(46px,37px)
          }
          52% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free1_1 {
          animation:free1_1 18s linear infinite
        }
        @keyframes free1_1 {
          0%,31% {
            opacity:0;
            transform:translate(15px,34px)
          }
          33% {
            opacity:1;
            transform:translate(100px,45px)
          }
          45% {
            opacity:1;
            transform:translate(108px,45px)
          }
          52% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free2_0 {
          animation:free2_0 18s linear infinite
        }
        @keyframes free2_0 {
          0%,53% {
            opacity:0;
            transform:translate(15px,34px)
          }
          55% {
            opacity:1;
            transform:translate(38px,37px)
          }
          67% {
            opacity:1;
            transform:translate(46px,37px)
          }
          72% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free2_1 {
          animation:free2_1 18s linear infinite
        }
        @keyframes free2_1 {
          0%,53% {
            opacity:0;
            transform:translate(15px,34px)
          }
          55% {
            opacity:1;
            transform:translate(100px,45px)
          }
          67% {
            opacity:1;
            transform:translate(108px,45px)
          }
          72% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free3_0 {
          animation:free3_0 18s linear infinite
        }
        @keyframes free3_0 {
          0%,73% {
            opacity:0;
            transform:translate(15px,34px)
          }
          75% {
            opacity:1;
            transform:translate(38px,37px)
          }
          85% {
            opacity:1;
            transform:translate(46px,37px)
          }
          90% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .free3_1 {
          animation:free3_1 18s linear infinite
        }
        @keyframes free3_1 {
          0%,73% {
            opacity:0;
            transform:translate(15px,34px)
          }
          75% {
            opacity:1;
            transform:translate(100px,45px)
          }
          85% {
            opacity:1;
            transform:translate(108px,45px)
          }
          90% {
            opacity:0;
            transform:translate(127px,35px)
          }
          100% {
            opacity:0;
            transform:translate(127px,35px)
          }
        }
        .a {
          fill:#77c9ef;
          opacity:0
        }
        .b {
          fill:#f3c977;
          opacity:0
        }
        .stem {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
          opacity:0
        }
        .layer1 {
          fill:#5796ac;
          animation:layer1 18s linear infinite
        }
        .layer2 {
          fill:#8dc6d6;
          animation:layer2 18s linear infinite
        }
        @keyframes layer1 {
          0%,33% {
            opacity:0
          }
          45%,96% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes layer2 {
          0%,75% {
            opacity:0
          }
          86%,96% {
            opacity:1
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Atomic Layer Deposition">
        <path class="ink muted" d="M10,25V127H130V25M12,35H20M16,32L20,35L16,38M120,35H128M124,32L128,35L124,38"/>
        <path fill="#294a3a" d="M18,90H48V112H92V90H122V124H18Z"/>
        <path class="layer1" d="M18,88H50V110H90V88H122V90H92V112H48V90H18Z"/>
        <path class="layer2" d="M18,86H52V108H88V86H122V88H90V110H50V88H18Z"/>
        <path class="stem stem0_0" d="M30,90L30,86"/>
        <g class="a a0_0">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_0">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_1" d="M110,90L110,86"/>
        <g class="a a0_1">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_1">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_2" d="M48,98L52,98"/>
        <g class="a a0_2">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_2">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_3" d="M92,98L88,98"/>
        <g class="a a0_3">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_3">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_4" d="M48,106L52,106"/>
        <g class="a a0_4">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_4">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_5" d="M92,106L88,106"/>
        <g class="a a0_5">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_5">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_6" d="M62,112L62,108"/>
        <g class="a a0_6">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_6">
          <circle r="2.1"/>
        </g>
        <path class="stem stem0_7" d="M78,112L78,108"/>
        <g class="a a0_7">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b0_7">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_0" d="M30,88L30,84"/>
        <g class="a a1_0">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_0">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_1" d="M110,88L110,84"/>
        <g class="a a1_1">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_1">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_2" d="M50,98L54,98"/>
        <g class="a a1_2">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_2">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_3" d="M90,98L86,98"/>
        <g class="a a1_3">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_3">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_4" d="M50,106L54,106"/>
        <g class="a a1_4">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_4">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_5" d="M90,106L86,106"/>
        <g class="a a1_5">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_5">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_6" d="M62,110L62,106"/>
        <g class="a a1_6">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_6">
          <circle r="2.1"/>
        </g>
        <path class="stem stem1_7" d="M78,110L78,106"/>
        <g class="a a1_7">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="b b1_7">
          <circle r="2.1"/>
        </g>
        <g class="free free0_0 a">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="free free0_1 a">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="free free1_0 b">
          <circle r="2.1"/>
        </g>
        <g class="free free1_1 b">
          <circle r="2.1"/>
        </g>
        <g class="free free2_0 a">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="free free2_1 a">
          <path d="M0,-2.8L2.5,1.6H-2.5Z"/>
        </g>
        <g class="free free3_0 b">
          <circle r="2.1"/>
        </g>
        <g class="free free3_1 b">
          <circle r="2.1"/>
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

if (!customElements.get("concept-atomic-layer-deposition")) {
  customElements.define("concept-atomic-layer-deposition", ConceptAtomicLayerDeposition);
}
