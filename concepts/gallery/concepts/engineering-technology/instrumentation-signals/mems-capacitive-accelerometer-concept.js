// MEMS Capacitive Accelerometer. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMemsCapacitiveAccelerometer extends HTMLElement {
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
        .mems-housing {
          transform:translateX(10px);
          animation:mems-housing 10s linear infinite
        }
        .housing {
          fill:#0c2017;
          stroke:#70edb1;
          stroke-width:1.5
        }
        .electrodes {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.4
        }
        .mass {
          fill:#254a39;
          stroke:#b8dfc9;
          stroke-width:1
        }
        .proof-mass {
          transform:translateX(4.649px);
          animation:mems-mass 10s linear infinite
        }
        .suspension {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.2;
          stroke-linejoin:round;
          animation:mems-spring 10s linear infinite
        }
        .left-gap,.right-gap {
          fill:#77c9ef
        }
        .left-gap {
          opacity:0.206;
          animation:mems-left-gap 10s linear infinite
        }
        .right-gap {
          opacity:0.558;
          animation:mems-right-gap 10s linear infinite
        }
        .acceleration {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.6;
          animation:mems-acceleration 10s linear infinite
        }
        .mems-output {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.7;
          animation:mems-output 10s linear infinite
        }
        @keyframes mems-housing {
          0% {
            transform:translateX(0px)
          }
          0.5% {
            transform:translateX(0.314px)
          }
          1% {
            transform:translateX(0.628px)
          }
          1.5% {
            transform:translateX(0.941px)
          }
          2% {
            transform:translateX(1.253px)
          }
          2.5% {
            transform:translateX(1.564px)
          }
          3% {
            transform:translateX(1.874px)
          }
          3.5% {
            transform:translateX(2.181px)
          }
          4% {
            transform:translateX(2.487px)
          }
          4.5% {
            transform:translateX(2.79px)
          }
          5% {
            transform:translateX(3.09px)
          }
          5.5% {
            transform:translateX(3.387px)
          }
          6% {
            transform:translateX(3.681px)
          }
          6.5% {
            transform:translateX(3.971px)
          }
          7.0% {
            transform:translateX(4.258px)
          }
          7.5% {
            transform:translateX(4.54px)
          }
          8% {
            transform:translateX(4.818px)
          }
          8.5% {
            transform:translateX(5.09px)
          }
          9% {
            transform:translateX(5.358px)
          }
          9.5% {
            transform:translateX(5.621px)
          }
          10% {
            transform:translateX(5.878px)
          }
          10.5% {
            transform:translateX(6.129px)
          }
          11% {
            transform:translateX(6.374px)
          }
          11.5% {
            transform:translateX(6.613px)
          }
          12% {
            transform:translateX(6.845px)
          }
          12.5% {
            transform:translateX(7.071px)
          }
          13% {
            transform:translateX(7.29px)
          }
          13.5% {
            transform:translateX(7.501px)
          }
          14.0% {
            transform:translateX(7.705px)
          }
          14.5% {
            transform:translateX(7.902px)
          }
          15% {
            transform:translateX(8.09px)
          }
          15.5% {
            transform:translateX(8.271px)
          }
          16% {
            transform:translateX(8.443px)
          }
          16.5% {
            transform:translateX(8.607px)
          }
          17% {
            transform:translateX(8.763px)
          }
          17.5% {
            transform:translateX(8.91px)
          }
          18% {
            transform:translateX(9.048px)
          }
          18.5% {
            transform:translateX(9.178px)
          }
          19% {
            transform:translateX(9.298px)
          }
          19.5% {
            transform:translateX(9.409px)
          }
          20% {
            transform:translateX(9.511px)
          }
          20.5% {
            transform:translateX(9.603px)
          }
          21% {
            transform:translateX(9.686px)
          }
          21.5% {
            transform:translateX(9.759px)
          }
          22% {
            transform:translateX(9.823px)
          }
          22.5% {
            transform:translateX(9.877px)
          }
          23% {
            transform:translateX(9.921px)
          }
          23.5% {
            transform:translateX(9.956px)
          }
          24% {
            transform:translateX(9.98px)
          }
          24.5% {
            transform:translateX(9.995px)
          }
          25% {
            transform:translateX(10px)
          }
          25.5% {
            transform:translateX(9.995px)
          }
          26% {
            transform:translateX(9.98px)
          }
          26.5% {
            transform:translateX(9.956px)
          }
          27% {
            transform:translateX(9.921px)
          }
          27.5% {
            transform:translateX(9.877px)
          }
          28.0% {
            transform:translateX(9.823px)
          }
          28.5% {
            transform:translateX(9.759px)
          }
          29.0% {
            transform:translateX(9.686px)
          }
          29.5% {
            transform:translateX(9.603px)
          }
          30% {
            transform:translateX(9.511px)
          }
          30.5% {
            transform:translateX(9.409px)
          }
          31% {
            transform:translateX(9.298px)
          }
          31.5% {
            transform:translateX(9.178px)
          }
          32% {
            transform:translateX(9.048px)
          }
          32.5% {
            transform:translateX(8.91px)
          }
          33% {
            transform:translateX(8.763px)
          }
          33.5% {
            transform:translateX(8.607px)
          }
          34% {
            transform:translateX(8.443px)
          }
          34.5% {
            transform:translateX(8.271px)
          }
          35% {
            transform:translateX(8.09px)
          }
          35.5% {
            transform:translateX(7.902px)
          }
          36% {
            transform:translateX(7.705px)
          }
          36.5% {
            transform:translateX(7.501px)
          }
          37% {
            transform:translateX(7.29px)
          }
          37.5% {
            transform:translateX(7.071px)
          }
          38% {
            transform:translateX(6.845px)
          }
          38.5% {
            transform:translateX(6.613px)
          }
          39% {
            transform:translateX(6.374px)
          }
          39.5% {
            transform:translateX(6.129px)
          }
          40% {
            transform:translateX(5.878px)
          }
          40.5% {
            transform:translateX(5.621px)
          }
          41% {
            transform:translateX(5.358px)
          }
          41.5% {
            transform:translateX(5.09px)
          }
          42% {
            transform:translateX(4.818px)
          }
          42.5% {
            transform:translateX(4.54px)
          }
          43% {
            transform:translateX(4.258px)
          }
          43.5% {
            transform:translateX(3.971px)
          }
          44% {
            transform:translateX(3.681px)
          }
          44.5% {
            transform:translateX(3.387px)
          }
          45% {
            transform:translateX(3.09px)
          }
          45.5% {
            transform:translateX(2.79px)
          }
          46% {
            transform:translateX(2.487px)
          }
          46.5% {
            transform:translateX(2.181px)
          }
          47% {
            transform:translateX(1.874px)
          }
          47.5% {
            transform:translateX(1.564px)
          }
          48% {
            transform:translateX(1.253px)
          }
          48.5% {
            transform:translateX(0.941px)
          }
          49% {
            transform:translateX(0.628px)
          }
          49.5% {
            transform:translateX(0.314px)
          }
          50% {
            transform:translateX(1.225e-15px)
          }
          50.5% {
            transform:translateX(-0.314px)
          }
          51% {
            transform:translateX(-0.628px)
          }
          51.5% {
            transform:translateX(-0.941px)
          }
          52% {
            transform:translateX(-1.253px)
          }
          52.5% {
            transform:translateX(-1.564px)
          }
          53% {
            transform:translateX(-1.874px)
          }
          53.5% {
            transform:translateX(-2.181px)
          }
          54% {
            transform:translateX(-2.487px)
          }
          54.5% {
            transform:translateX(-2.79px)
          }
          55.0% {
            transform:translateX(-3.09px)
          }
          55.5% {
            transform:translateX(-3.387px)
          }
          56.0% {
            transform:translateX(-3.681px)
          }
          56.5% {
            transform:translateX(-3.971px)
          }
          57.0% {
            transform:translateX(-4.258px)
          }
          57.5% {
            transform:translateX(-4.54px)
          }
          58.0% {
            transform:translateX(-4.818px)
          }
          58.5% {
            transform:translateX(-5.09px)
          }
          59% {
            transform:translateX(-5.358px)
          }
          59.5% {
            transform:translateX(-5.621px)
          }
          60% {
            transform:translateX(-5.878px)
          }
          60.5% {
            transform:translateX(-6.129px)
          }
          61% {
            transform:translateX(-6.374px)
          }
          61.5% {
            transform:translateX(-6.613px)
          }
          62% {
            transform:translateX(-6.845px)
          }
          62.5% {
            transform:translateX(-7.071px)
          }
          63% {
            transform:translateX(-7.29px)
          }
          63.5% {
            transform:translateX(-7.501px)
          }
          64% {
            transform:translateX(-7.705px)
          }
          64.5% {
            transform:translateX(-7.902px)
          }
          65% {
            transform:translateX(-8.09px)
          }
          65.5% {
            transform:translateX(-8.271px)
          }
          66% {
            transform:translateX(-8.443px)
          }
          66.5% {
            transform:translateX(-8.607px)
          }
          67% {
            transform:translateX(-8.763px)
          }
          67.5% {
            transform:translateX(-8.91px)
          }
          68% {
            transform:translateX(-9.048px)
          }
          68.5% {
            transform:translateX(-9.178px)
          }
          69% {
            transform:translateX(-9.298px)
          }
          69.5% {
            transform:translateX(-9.409px)
          }
          70% {
            transform:translateX(-9.511px)
          }
          70.5% {
            transform:translateX(-9.603px)
          }
          71% {
            transform:translateX(-9.686px)
          }
          71.5% {
            transform:translateX(-9.759px)
          }
          72% {
            transform:translateX(-9.823px)
          }
          72.5% {
            transform:translateX(-9.877px)
          }
          73% {
            transform:translateX(-9.921px)
          }
          73.5% {
            transform:translateX(-9.956px)
          }
          74% {
            transform:translateX(-9.98px)
          }
          74.5% {
            transform:translateX(-9.995px)
          }
          75% {
            transform:translateX(-10px)
          }
          75.5% {
            transform:translateX(-9.995px)
          }
          76% {
            transform:translateX(-9.98px)
          }
          76.5% {
            transform:translateX(-9.956px)
          }
          77% {
            transform:translateX(-9.921px)
          }
          77.5% {
            transform:translateX(-9.877px)
          }
          78% {
            transform:translateX(-9.823px)
          }
          78.5% {
            transform:translateX(-9.759px)
          }
          79% {
            transform:translateX(-9.686px)
          }
          79.5% {
            transform:translateX(-9.603px)
          }
          80% {
            transform:translateX(-9.511px)
          }
          80.5% {
            transform:translateX(-9.409px)
          }
          81% {
            transform:translateX(-9.298px)
          }
          81.5% {
            transform:translateX(-9.178px)
          }
          82% {
            transform:translateX(-9.048px)
          }
          82.5% {
            transform:translateX(-8.91px)
          }
          83% {
            transform:translateX(-8.763px)
          }
          83.5% {
            transform:translateX(-8.607px)
          }
          84% {
            transform:translateX(-8.443px)
          }
          84.5% {
            transform:translateX(-8.271px)
          }
          85% {
            transform:translateX(-8.09px)
          }
          85.5% {
            transform:translateX(-7.902px)
          }
          86% {
            transform:translateX(-7.705px)
          }
          86.5% {
            transform:translateX(-7.501px)
          }
          87% {
            transform:translateX(-7.29px)
          }
          87.5% {
            transform:translateX(-7.071px)
          }
          88% {
            transform:translateX(-6.845px)
          }
          88.5% {
            transform:translateX(-6.613px)
          }
          89% {
            transform:translateX(-6.374px)
          }
          89.5% {
            transform:translateX(-6.129px)
          }
          90% {
            transform:translateX(-5.878px)
          }
          90.5% {
            transform:translateX(-5.621px)
          }
          91% {
            transform:translateX(-5.358px)
          }
          91.5% {
            transform:translateX(-5.09px)
          }
          92% {
            transform:translateX(-4.818px)
          }
          92.5% {
            transform:translateX(-4.54px)
          }
          93% {
            transform:translateX(-4.258px)
          }
          93.5% {
            transform:translateX(-3.971px)
          }
          94% {
            transform:translateX(-3.681px)
          }
          94.5% {
            transform:translateX(-3.387px)
          }
          95% {
            transform:translateX(-3.09px)
          }
          95.5% {
            transform:translateX(-2.79px)
          }
          96% {
            transform:translateX(-2.487px)
          }
          96.5% {
            transform:translateX(-2.181px)
          }
          97% {
            transform:translateX(-1.874px)
          }
          97.5% {
            transform:translateX(-1.564px)
          }
          98% {
            transform:translateX(-1.253px)
          }
          98.5% {
            transform:translateX(-0.941px)
          }
          99% {
            transform:translateX(-0.628px)
          }
          99.5% {
            transform:translateX(-0.314px)
          }
          100% {
            transform:translateX(-2.449e-15px)
          }
        }
        @keyframes mems-mass {
          0% {
            transform:translateX(-2.861px)
          }
          0.5% {
            transform:translateX(-2.714px)
          }
          1% {
            transform:translateX(-2.564px)
          }
          1.5% {
            transform:translateX(-2.411px)
          }
          2% {
            transform:translateX(-2.256px)
          }
          2.5% {
            transform:translateX(-2.099px)
          }
          3% {
            transform:translateX(-1.939px)
          }
          3.5% {
            transform:translateX(-1.778px)
          }
          4% {
            transform:translateX(-1.615px)
          }
          4.5% {
            transform:translateX(-1.45px)
          }
          5% {
            transform:translateX(-1.284px)
          }
          5.5% {
            transform:translateX(-1.117px)
          }
          6% {
            transform:translateX(-0.949px)
          }
          6.5% {
            transform:translateX(-0.779px)
          }
          7.0% {
            transform:translateX(-0.609px)
          }
          7.5% {
            transform:translateX(-0.439px)
          }
          8% {
            transform:translateX(-0.267px)
          }
          8.5% {
            transform:translateX(-0.096px)
          }
          9% {
            transform:translateX(0.076px)
          }
          9.5% {
            transform:translateX(0.247px)
          }
          10% {
            transform:translateX(0.418px)
          }
          10.5% {
            transform:translateX(0.589px)
          }
          11% {
            transform:translateX(0.759px)
          }
          11.5% {
            transform:translateX(0.929px)
          }
          12% {
            transform:translateX(1.097px)
          }
          12.5% {
            transform:translateX(1.264px)
          }
          13% {
            transform:translateX(1.431px)
          }
          13.5% {
            transform:translateX(1.595px)
          }
          14.0% {
            transform:translateX(1.759px)
          }
          14.5% {
            transform:translateX(1.92px)
          }
          15% {
            transform:translateX(2.08px)
          }
          15.5% {
            transform:translateX(2.237px)
          }
          16% {
            transform:translateX(2.393px)
          }
          16.5% {
            transform:translateX(2.546px)
          }
          17% {
            transform:translateX(2.696px)
          }
          17.5% {
            transform:translateX(2.844px)
          }
          18% {
            transform:translateX(2.989px)
          }
          18.5% {
            transform:translateX(3.131px)
          }
          19% {
            transform:translateX(3.27px)
          }
          19.5% {
            transform:translateX(3.405px)
          }
          20% {
            transform:translateX(3.538px)
          }
          20.5% {
            transform:translateX(3.667px)
          }
          21% {
            transform:translateX(3.792px)
          }
          21.5% {
            transform:translateX(3.913px)
          }
          22% {
            transform:translateX(4.031px)
          }
          22.5% {
            transform:translateX(4.145px)
          }
          23% {
            transform:translateX(4.254px)
          }
          23.5% {
            transform:translateX(4.36px)
          }
          24% {
            transform:translateX(4.461px)
          }
          24.5% {
            transform:translateX(4.557px)
          }
          25% {
            transform:translateX(4.649px)
          }
          25.5% {
            transform:translateX(4.737px)
          }
          26% {
            transform:translateX(4.82px)
          }
          26.5% {
            transform:translateX(4.898px)
          }
          27% {
            transform:translateX(4.971px)
          }
          27.5% {
            transform:translateX(5.04px)
          }
          28.0% {
            transform:translateX(5.103px)
          }
          28.5% {
            transform:translateX(5.162px)
          }
          29.0% {
            transform:translateX(5.215px)
          }
          29.5% {
            transform:translateX(5.263px)
          }
          30% {
            transform:translateX(5.306px)
          }
          30.5% {
            transform:translateX(5.344px)
          }
          31% {
            transform:translateX(5.376px)
          }
          31.5% {
            transform:translateX(5.403px)
          }
          32% {
            transform:translateX(5.425px)
          }
          32.5% {
            transform:translateX(5.442px)
          }
          33% {
            transform:translateX(5.453px)
          }
          33.5% {
            transform:translateX(5.459px)
          }
          34% {
            transform:translateX(5.459px)
          }
          34.5% {
            transform:translateX(5.454px)
          }
          35% {
            transform:translateX(5.443px)
          }
          35.5% {
            transform:translateX(5.427px)
          }
          36% {
            transform:translateX(5.406px)
          }
          36.5% {
            transform:translateX(5.38px)
          }
          37% {
            transform:translateX(5.348px)
          }
          37.5% {
            transform:translateX(5.311px)
          }
          38% {
            transform:translateX(5.269px)
          }
          38.5% {
            transform:translateX(5.221px)
          }
          39% {
            transform:translateX(5.168px)
          }
          39.5% {
            transform:translateX(5.111px)
          }
          40% {
            transform:translateX(5.048px)
          }
          40.5% {
            transform:translateX(4.98px)
          }
          41% {
            transform:translateX(4.907px)
          }
          41.5% {
            transform:translateX(4.83px)
          }
          42% {
            transform:translateX(4.747px)
          }
          42.5% {
            transform:translateX(4.66px)
          }
          43% {
            transform:translateX(4.569px)
          }
          43.5% {
            transform:translateX(4.472px)
          }
          44% {
            transform:translateX(4.372px)
          }
          44.5% {
            transform:translateX(4.267px)
          }
          45% {
            transform:translateX(4.158px)
          }
          45.5% {
            transform:translateX(4.045px)
          }
          46% {
            transform:translateX(3.928px)
          }
          46.5% {
            transform:translateX(3.807px)
          }
          47% {
            transform:translateX(3.682px)
          }
          47.5% {
            transform:translateX(3.553px)
          }
          48% {
            transform:translateX(3.421px)
          }
          48.5% {
            transform:translateX(3.286px)
          }
          49% {
            transform:translateX(3.148px)
          }
          49.5% {
            transform:translateX(3.006px)
          }
          50% {
            transform:translateX(2.861px)
          }
          50.5% {
            transform:translateX(2.714px)
          }
          51% {
            transform:translateX(2.564px)
          }
          51.5% {
            transform:translateX(2.411px)
          }
          52% {
            transform:translateX(2.256px)
          }
          52.5% {
            transform:translateX(2.099px)
          }
          53% {
            transform:translateX(1.939px)
          }
          53.5% {
            transform:translateX(1.778px)
          }
          54% {
            transform:translateX(1.615px)
          }
          54.5% {
            transform:translateX(1.45px)
          }
          55.0% {
            transform:translateX(1.284px)
          }
          55.5% {
            transform:translateX(1.117px)
          }
          56.0% {
            transform:translateX(0.949px)
          }
          56.5% {
            transform:translateX(0.779px)
          }
          57.0% {
            transform:translateX(0.609px)
          }
          57.5% {
            transform:translateX(0.439px)
          }
          58.0% {
            transform:translateX(0.267px)
          }
          58.5% {
            transform:translateX(0.096px)
          }
          59% {
            transform:translateX(-0.076px)
          }
          59.5% {
            transform:translateX(-0.247px)
          }
          60% {
            transform:translateX(-0.418px)
          }
          60.5% {
            transform:translateX(-0.589px)
          }
          61% {
            transform:translateX(-0.759px)
          }
          61.5% {
            transform:translateX(-0.929px)
          }
          62% {
            transform:translateX(-1.097px)
          }
          62.5% {
            transform:translateX(-1.264px)
          }
          63% {
            transform:translateX(-1.431px)
          }
          63.5% {
            transform:translateX(-1.595px)
          }
          64% {
            transform:translateX(-1.759px)
          }
          64.5% {
            transform:translateX(-1.92px)
          }
          65% {
            transform:translateX(-2.08px)
          }
          65.5% {
            transform:translateX(-2.237px)
          }
          66% {
            transform:translateX(-2.393px)
          }
          66.5% {
            transform:translateX(-2.546px)
          }
          67% {
            transform:translateX(-2.696px)
          }
          67.5% {
            transform:translateX(-2.844px)
          }
          68% {
            transform:translateX(-2.989px)
          }
          68.5% {
            transform:translateX(-3.131px)
          }
          69% {
            transform:translateX(-3.27px)
          }
          69.5% {
            transform:translateX(-3.405px)
          }
          70% {
            transform:translateX(-3.538px)
          }
          70.5% {
            transform:translateX(-3.667px)
          }
          71% {
            transform:translateX(-3.792px)
          }
          71.5% {
            transform:translateX(-3.913px)
          }
          72% {
            transform:translateX(-4.031px)
          }
          72.5% {
            transform:translateX(-4.145px)
          }
          73% {
            transform:translateX(-4.254px)
          }
          73.5% {
            transform:translateX(-4.36px)
          }
          74% {
            transform:translateX(-4.461px)
          }
          74.5% {
            transform:translateX(-4.557px)
          }
          75% {
            transform:translateX(-4.649px)
          }
          75.5% {
            transform:translateX(-4.737px)
          }
          76% {
            transform:translateX(-4.82px)
          }
          76.5% {
            transform:translateX(-4.898px)
          }
          77% {
            transform:translateX(-4.971px)
          }
          77.5% {
            transform:translateX(-5.04px)
          }
          78% {
            transform:translateX(-5.103px)
          }
          78.5% {
            transform:translateX(-5.162px)
          }
          79% {
            transform:translateX(-5.215px)
          }
          79.5% {
            transform:translateX(-5.263px)
          }
          80% {
            transform:translateX(-5.306px)
          }
          80.5% {
            transform:translateX(-5.344px)
          }
          81% {
            transform:translateX(-5.376px)
          }
          81.5% {
            transform:translateX(-5.403px)
          }
          82% {
            transform:translateX(-5.425px)
          }
          82.5% {
            transform:translateX(-5.442px)
          }
          83% {
            transform:translateX(-5.453px)
          }
          83.5% {
            transform:translateX(-5.459px)
          }
          84% {
            transform:translateX(-5.459px)
          }
          84.5% {
            transform:translateX(-5.454px)
          }
          85% {
            transform:translateX(-5.443px)
          }
          85.5% {
            transform:translateX(-5.427px)
          }
          86% {
            transform:translateX(-5.406px)
          }
          86.5% {
            transform:translateX(-5.38px)
          }
          87% {
            transform:translateX(-5.348px)
          }
          87.5% {
            transform:translateX(-5.311px)
          }
          88% {
            transform:translateX(-5.269px)
          }
          88.5% {
            transform:translateX(-5.221px)
          }
          89% {
            transform:translateX(-5.168px)
          }
          89.5% {
            transform:translateX(-5.111px)
          }
          90% {
            transform:translateX(-5.048px)
          }
          90.5% {
            transform:translateX(-4.98px)
          }
          91% {
            transform:translateX(-4.907px)
          }
          91.5% {
            transform:translateX(-4.83px)
          }
          92% {
            transform:translateX(-4.747px)
          }
          92.5% {
            transform:translateX(-4.66px)
          }
          93% {
            transform:translateX(-4.569px)
          }
          93.5% {
            transform:translateX(-4.472px)
          }
          94% {
            transform:translateX(-4.372px)
          }
          94.5% {
            transform:translateX(-4.267px)
          }
          95% {
            transform:translateX(-4.158px)
          }
          95.5% {
            transform:translateX(-4.045px)
          }
          96% {
            transform:translateX(-3.928px)
          }
          96.5% {
            transform:translateX(-3.807px)
          }
          97% {
            transform:translateX(-3.682px)
          }
          97.5% {
            transform:translateX(-3.553px)
          }
          98% {
            transform:translateX(-3.421px)
          }
          98.5% {
            transform:translateX(-3.286px)
          }
          99% {
            transform:translateX(-3.148px)
          }
          99.5% {
            transform:translateX(-3.006px)
          }
          100% {
            transform:translateX(-2.861px)
          }
        }
        @keyframes mems-spring {
          0% {
            d:path("M28 52L30.714 52L33.126 54.5L35.539 49.5L37.951 54.5L40.363 49.5L42.776 54.5L45.188 49.5L47.6 54.5L50.013 49.5L52.425 52L55.139 52M112 52L108.714 52L105.793 54.5L102.872 49.5L99.951 54.5L97.03 49.5L94.109 54.5L91.188 49.5L88.267 54.5L85.346 49.5L82.425 52L79.139 52")
          }
          0.5% {
            d:path("M28 52L30.729 52L33.154 54.5L35.58 49.5L38.005 54.5L40.43 49.5L42.856 54.5L45.281 49.5L47.707 54.5L50.132 49.5L52.558 52L55.286 52M112 52L108.729 52L105.821 54.5L102.913 49.5L100.005 54.5L97.097 49.5L94.189 54.5L91.281 49.5L88.373 54.5L85.465 49.5L82.558 52L79.286 52")
          }
          1% {
            d:path("M28 52L30.744 52L33.182 54.5L35.621 49.5L38.06 54.5L40.499 49.5L42.938 54.5L45.376 49.5L47.815 54.5L50.254 49.5L52.693 52L55.436 52M112 52L108.744 52L105.849 54.5L102.955 49.5L100.06 54.5L97.165 49.5L94.271 54.5L91.376 49.5L88.482 54.5L85.587 49.5L82.693 52L79.436 52")
          }
          1.5% {
            d:path("M28 52L30.759 52L33.211 54.5L35.664 49.5L38.116 54.5L40.568 49.5L43.021 54.5L45.473 49.5L47.925 54.5L50.378 49.5L52.83 52L55.589 52M112 52L108.759 52L105.878 54.5L102.997 49.5L100.116 54.5L97.235 49.5L94.354 54.5L91.473 49.5L88.592 54.5L85.711 49.5L82.83 52L79.589 52")
          }
          2% {
            d:path("M28 52L30.774 52L33.241 54.5L35.707 49.5L38.173 54.5L40.639 49.5L43.105 54.5L45.571 49.5L48.037 54.5L50.504 49.5L52.97 52L55.744 52M112 52L108.774 52L105.907 54.5L103.04 49.5L100.173 54.5L97.306 49.5L94.438 54.5L91.571 49.5L88.704 54.5L85.837 49.5L82.97 52L79.744 52")
          }
          2.5% {
            d:path("M28 52L30.79 52L33.27 54.5L35.75 49.5L38.23 54.5L40.711 49.5L43.191 54.5L45.671 49.5L48.151 54.5L50.631 49.5L53.111 52L55.901 52M112 52L108.79 52L105.937 54.5L103.084 49.5L100.23 54.5L97.377 49.5L94.524 54.5L91.671 49.5L88.818 54.5L85.964 49.5L83.111 52L79.901 52")
          }
          3% {
            d:path("M28 52L30.806 52L33.3 54.5L35.795 49.5L38.289 54.5L40.783 49.5L43.277 54.5L45.772 49.5L48.266 54.5L50.76 49.5L53.255 52L56.061 52M112 52L108.806 52L105.967 54.5L103.128 49.5L100.289 54.5L97.45 49.5L94.611 54.5L91.772 49.5L88.933 54.5L86.094 49.5L83.255 52L80.061 52")
          }
          3.5% {
            d:path("M28 52L30.822 52L33.331 54.5L35.839 49.5L38.348 54.5L40.857 49.5L43.365 54.5L45.874 49.5L48.383 54.5L50.891 49.5L53.4 52L56.222 52M112 52L108.822 52L105.997 54.5L103.173 49.5L100.348 54.5L97.523 49.5L94.699 54.5L91.874 49.5L89.049 54.5L86.224 49.5L83.4 52L80.222 52")
          }
          4% {
            d:path("M28 52L30.838 52L33.362 54.5L35.885 49.5L38.408 54.5L40.931 49.5L43.454 54.5L45.977 49.5L48.5 54.5L51.023 49.5L53.546 52L56.385 52M112 52L108.838 52L106.028 54.5L103.218 49.5L100.408 54.5L97.598 49.5L94.787 54.5L91.977 49.5L89.167 54.5L86.357 49.5L83.546 52L80.385 52")
          }
          4.5% {
            d:path("M28 52L30.855 52L33.393 54.5L35.93 49.5L38.468 54.5L41.006 49.5L43.544 54.5L46.081 49.5L48.619 54.5L51.157 49.5L53.695 52L56.55 52M112 52L108.855 52L106.059 54.5L103.264 49.5L100.468 54.5L97.673 49.5L94.877 54.5L92.081 49.5L89.286 54.5L86.49 49.5L83.695 52L80.55 52")
          }
          5% {
            d:path("M28 52L30.872 52L33.424 54.5L35.977 49.5L38.529 54.5L41.082 49.5L43.634 54.5L46.187 49.5L48.739 54.5L51.292 49.5L53.844 52L56.716 52M112 52L108.872 52L106.091 54.5L103.31 49.5L100.529 54.5L97.748 49.5L94.967 54.5L92.187 49.5L89.406 54.5L86.625 49.5L83.844 52L80.716 52")
          }
          5.5% {
            d:path("M28 52L30.888 52L33.456 54.5L36.023 49.5L38.59 54.5L41.158 49.5L43.725 54.5L46.292 49.5L48.86 54.5L51.427 49.5L53.995 52L56.883 52M112 52L108.888 52L106.122 54.5L103.356 49.5L100.59 54.5L97.824 49.5L95.058 54.5L92.292 49.5L89.527 54.5L86.761 49.5L83.995 52L80.883 52")
          }
          6% {
            d:path("M28 52L30.905 52L33.487 54.5L36.07 49.5L38.652 54.5L41.234 49.5L43.817 54.5L46.399 49.5L48.981 54.5L51.564 49.5L54.146 52L57.051 52M112 52L108.905 52L106.154 54.5L103.403 49.5L100.652 54.5L97.901 49.5L95.15 54.5L92.399 49.5L89.648 54.5L86.897 49.5L84.146 52L81.051 52")
          }
          6.5% {
            d:path("M28 52L30.922 52L33.519 54.5L36.117 49.5L38.714 54.5L41.312 49.5L43.909 54.5L46.506 49.5L49.104 54.5L51.701 49.5L54.299 52L57.221 52M112 52L108.922 52L106.186 54.5L103.45 49.5L100.714 54.5L97.978 49.5L95.242 54.5L92.506 49.5L89.77 54.5L87.035 49.5L84.299 52L81.221 52")
          }
          7.0% {
            d:path("M28 52L30.939 52L33.552 54.5L36.164 49.5L38.777 54.5L41.389 49.5L44.002 54.5L46.614 49.5L49.227 54.5L51.839 49.5L54.452 52L57.391 52M112 52L108.939 52L106.218 54.5L103.497 49.5L100.777 54.5L98.056 49.5L95.335 54.5L92.614 49.5L89.893 54.5L87.172 49.5L84.452 52L81.391 52")
          }
          7.5% {
            d:path("M28 52L30.956 52L33.584 54.5L36.212 49.5L38.839 54.5L41.467 49.5L44.095 54.5L46.722 49.5L49.35 54.5L51.978 49.5L54.605 52L57.561 52M112 52L108.956 52L106.25 54.5L103.545 49.5L100.839 54.5L98.134 49.5L95.428 54.5L92.722 49.5L90.017 54.5L87.311 49.5L84.605 52L81.561 52")
          }
          8% {
            d:path("M28 52L30.973 52L33.616 54.5L36.259 49.5L38.902 54.5L41.545 49.5L44.188 54.5L46.831 49.5L49.474 54.5L52.116 49.5L54.759 52L57.733 52M112 52L108.973 52L106.283 54.5L103.592 49.5L100.902 54.5L98.212 49.5L95.521 54.5L92.831 49.5L90.14 54.5L87.45 49.5L84.759 52L81.733 52")
          }
          8.5% {
            d:path("M28 52L30.99 52L33.649 54.5L36.307 49.5L38.965 54.5L41.623 49.5L44.281 54.5L46.939 49.5L49.597 54.5L52.255 49.5L54.914 52L57.904 52M112 52L108.99 52L106.315 54.5L103.64 49.5L100.965 54.5L98.29 49.5L95.614 54.5L92.939 49.5L90.264 54.5L87.589 49.5L84.914 52L81.904 52")
          }
          9% {
            d:path("M28 52L31.008 52L33.681 54.5L36.354 49.5L39.028 54.5L41.701 49.5L44.374 54.5L47.048 49.5L49.721 54.5L52.395 49.5L55.068 52L58.076 52M112 52L109.008 52L106.348 54.5L103.688 49.5L101.028 54.5L98.368 49.5L95.708 54.5L93.048 49.5L90.388 54.5L87.728 49.5L85.068 52L82.076 52")
          }
          9.5% {
            d:path("M28 52L31.025 52L33.713 54.5L36.402 49.5L39.091 54.5L41.779 49.5L44.468 54.5L47.156 49.5L49.845 54.5L52.534 49.5L55.222 52L58.247 52M112 52L109.025 52L106.38 54.5L103.735 49.5L101.091 54.5L98.446 49.5L95.801 54.5L93.156 49.5L90.512 54.5L87.867 49.5L85.222 52L82.247 52")
          }
          10% {
            d:path("M28 52L31.042 52L33.746 54.5L36.449 49.5L39.153 54.5L41.857 49.5L44.561 54.5L47.265 49.5L49.969 54.5L52.672 49.5L55.376 52L58.418 52M112 52L109.042 52L106.412 54.5L103.783 49.5L101.153 54.5L98.524 49.5L95.894 54.5L93.265 49.5L90.635 54.5L88.006 49.5L85.376 52L82.418 52")
          }
          10.5% {
            d:path("M28 52L31.059 52L33.778 54.5L36.497 49.5L39.216 54.5L41.935 49.5L44.654 54.5L47.373 49.5L50.092 54.5L52.811 49.5L55.53 52L58.589 52M112 52L109.059 52L106.445 54.5L103.83 49.5L101.216 54.5L98.602 49.5L95.987 54.5L93.373 49.5L90.759 54.5L88.144 49.5L85.53 52L82.589 52")
          }
          11% {
            d:path("M28 52L31.076 52L33.81 54.5L36.544 49.5L39.278 54.5L42.012 49.5L44.747 54.5L47.481 49.5L50.215 54.5L52.949 49.5L55.683 52L58.759 52M112 52L109.076 52L106.477 54.5L103.878 49.5L101.278 54.5L98.679 49.5L96.08 54.5L93.481 49.5L90.882 54.5L88.282 49.5L85.683 52L82.759 52")
          }
          11.5% {
            d:path("M28 52L31.093 52L33.842 54.5L36.591 49.5L39.34 54.5L42.09 49.5L44.839 54.5L47.588 49.5L50.337 54.5L53.086 49.5L55.836 52L58.929 52M112 52L109.093 52L106.509 54.5L103.925 49.5L101.34 54.5L98.756 49.5L96.172 54.5L93.588 49.5L91.004 54.5L88.42 49.5L85.836 52L82.929 52")
          }
          12% {
            d:path("M28 52L31.11 52L33.874 54.5L36.638 49.5L39.402 54.5L42.166 49.5L44.931 54.5L47.695 49.5L50.459 54.5L53.223 49.5L55.987 52L59.097 52M112 52L109.11 52L106.541 54.5L103.971 49.5L101.402 54.5L98.833 49.5L96.264 54.5L93.695 49.5L91.126 54.5L88.556 49.5L85.987 52L83.097 52")
          }
          12.5% {
            d:path("M28 52L31.126 52L33.906 54.5L36.685 49.5L39.464 54.5L42.243 49.5L45.022 54.5L47.801 49.5L50.58 54.5L53.359 49.5L56.138 52L59.264 52M112 52L109.126 52L106.572 54.5L104.018 49.5L101.464 54.5L98.909 49.5L96.355 54.5L93.801 49.5L91.247 54.5L88.692 49.5L86.138 52L83.264 52")
          }
          13% {
            d:path("M28 52L31.143 52L33.937 54.5L36.731 49.5L39.525 54.5L42.318 49.5L45.112 54.5L47.906 49.5L50.7 54.5L53.494 49.5L56.288 52L59.431 52M112 52L109.143 52L106.604 54.5L104.064 49.5L101.525 54.5L98.985 49.5L96.446 54.5L93.906 49.5L91.367 54.5L88.827 49.5L86.288 52L83.431 52")
          }
          13.5% {
            d:path("M28 52L31.16 52L33.968 54.5L36.777 49.5L39.585 54.5L42.393 49.5L45.202 54.5L48.01 49.5L50.819 54.5L53.627 49.5L56.436 52L59.595 52M112 52L109.16 52L106.635 54.5L104.11 49.5L101.585 54.5L99.06 49.5L96.535 54.5L94.01 49.5L91.486 54.5L88.961 49.5L86.436 52L83.595 52")
          }
          14.0% {
            d:path("M28 52L31.176 52L33.999 54.5L36.822 49.5L39.645 54.5L42.468 49.5L45.291 54.5L48.114 49.5L50.937 54.5L53.76 49.5L56.583 52L59.759 52M112 52L109.176 52L106.666 54.5L104.155 49.5L101.645 54.5L99.135 49.5L96.624 54.5L94.114 49.5L91.603 54.5L89.093 49.5L86.583 52L83.759 52")
          }
          14.5% {
            d:path("M28 52L31.192 52L34.029 54.5L36.867 49.5L39.704 54.5L42.541 49.5L45.379 54.5L48.216 49.5L51.053 54.5L53.891 49.5L56.728 52L59.92 52M112 52L109.192 52L106.696 54.5L104.2 49.5L101.704 54.5L99.208 49.5L96.712 54.5L94.216 49.5L91.72 54.5L89.224 49.5L86.728 52L83.92 52")
          }
          15% {
            d:path("M28 52L31.208 52L34.06 54.5L36.911 49.5L39.763 54.5L42.614 49.5L45.466 54.5L48.317 49.5L51.169 54.5L54.02 49.5L56.872 52L60.08 52M112 52L109.208 52L106.726 54.5L104.244 49.5L101.763 54.5L99.281 49.5L96.799 54.5L94.317 49.5L91.835 54.5L89.354 49.5L86.872 52L84.08 52")
          }
          15.5% {
            d:path("M28 52L31.224 52L34.089 54.5L36.955 49.5L39.82 54.5L42.686 49.5L45.551 54.5L48.417 49.5L51.282 54.5L54.148 49.5L57.014 52L60.237 52M112 52L109.224 52L106.756 54.5L104.288 49.5L101.82 54.5L99.353 49.5L96.885 54.5L94.417 49.5L91.949 54.5L89.481 49.5L87.014 52L84.237 52")
          }
          16% {
            d:path("M28 52L31.239 52L34.119 54.5L36.998 49.5L39.877 54.5L42.757 49.5L45.636 54.5L48.515 49.5L51.395 54.5L54.274 49.5L57.153 52L60.393 52M112 52L109.239 52L106.785 54.5L104.331 49.5L101.877 54.5L99.423 49.5L96.969 54.5L94.515 49.5L92.061 54.5L89.607 49.5L87.153 52L84.393 52")
          }
          16.5% {
            d:path("M28 52L31.255 52L34.147 54.5L37.04 49.5L39.933 54.5L42.826 49.5L45.719 54.5L48.612 49.5L51.505 54.5L54.398 49.5L57.291 52L60.546 52M112 52L109.255 52L106.814 54.5L104.374 49.5L101.933 54.5L99.493 49.5L97.053 54.5L94.612 49.5L92.172 54.5L89.731 49.5L87.291 52L84.546 52")
          }
          17% {
            d:path("M28 52L31.27 52L34.176 54.5L37.082 49.5L39.989 54.5L42.895 49.5L45.801 54.5L48.707 49.5L51.614 54.5L54.52 49.5L57.426 52L60.696 52M112 52L109.27 52L106.843 54.5L104.416 49.5L101.989 54.5L99.562 49.5L97.134 54.5L94.707 49.5L92.28 54.5L89.853 49.5L87.426 52L84.696 52")
          }
          17.5% {
            d:path("M28 52L31.284 52L34.204 54.5L37.123 49.5L40.043 54.5L42.962 49.5L45.882 54.5L48.801 49.5L51.72 54.5L54.64 49.5L57.559 52L60.844 52M112 52L109.284 52L106.87 54.5L104.457 49.5L102.043 54.5L99.629 49.5L97.215 54.5L94.801 49.5L92.387 54.5L89.973 49.5L87.559 52L84.844 52")
          }
          18% {
            d:path("M28 52L31.299 52L34.231 54.5L37.164 49.5L40.096 54.5L43.028 49.5L45.961 54.5L48.893 49.5L51.825 54.5L54.758 49.5L57.69 52L60.989 52M112 52L109.299 52L106.898 54.5L104.497 49.5L102.096 54.5L99.695 49.5L97.294 54.5L94.893 49.5L92.492 54.5L90.091 49.5L87.69 52L84.989 52")
          }
          18.5% {
            d:path("M28 52L31.313 52L34.258 54.5L37.203 49.5L40.148 54.5L43.093 49.5L46.038 54.5L48.983 49.5L51.928 54.5L54.873 49.5L57.818 52L61.131 52M112 52L109.313 52L106.925 54.5L104.536 49.5L102.148 54.5L99.76 49.5L97.371 54.5L94.983 49.5L92.594 54.5L90.206 49.5L87.818 52L85.131 52")
          }
          19% {
            d:path("M28 52L31.327 52L34.284 54.5L37.242 49.5L40.199 54.5L43.156 49.5L46.114 54.5L49.071 49.5L52.028 54.5L54.985 49.5L57.943 52L61.27 52M112 52L109.327 52L106.951 54.5L104.575 49.5L102.199 54.5L99.823 49.5L97.447 54.5L95.071 49.5L92.695 54.5L90.319 49.5L87.943 52L85.27 52")
          }
          19.5% {
            d:path("M28 52L31.341 52L34.31 54.5L37.279 49.5L40.249 54.5L43.218 49.5L46.187 54.5L49.157 49.5L52.126 54.5L55.096 49.5L58.065 52L61.405 52M112 52L109.341 52L106.977 54.5L104.613 49.5L102.249 54.5L99.885 49.5L97.521 54.5L95.157 49.5L92.793 54.5L90.429 49.5L88.065 52L85.405 52")
          }
          20% {
            d:path("M28 52L31.354 52L34.335 54.5L37.316 49.5L40.297 54.5L43.278 49.5L46.259 54.5L49.241 49.5L52.222 54.5L55.203 49.5L58.184 52L61.538 52M112 52L109.354 52L107.002 54.5L104.649 49.5L102.297 54.5L99.945 49.5L97.593 54.5L95.241 49.5L92.888 54.5L90.536 49.5L88.184 52L85.538 52")
          }
          20.5% {
            d:path("M28 52L31.367 52L34.359 54.5L37.352 49.5L40.344 54.5L43.337 49.5L46.33 54.5L49.322 49.5L52.315 54.5L55.307 49.5L58.3 52L61.667 52M112 52L109.367 52L107.026 54.5L104.685 49.5L102.344 54.5L100.004 49.5L97.663 54.5L95.322 49.5L92.981 54.5L90.641 49.5L88.3 52L85.667 52")
          }
          21% {
            d:path("M28 52L31.379 52L34.383 54.5L37.387 49.5L40.39 54.5L43.394 49.5L46.398 54.5L49.402 49.5L52.405 54.5L55.409 49.5L58.413 52L61.792 52M112 52L109.379 52L107.05 54.5L104.72 49.5L102.39 54.5L100.061 49.5L97.731 54.5L95.402 49.5L93.072 54.5L90.742 49.5L88.413 52L85.792 52")
          }
          21.5% {
            d:path("M28 52L31.391 52L34.406 54.5L37.42 49.5L40.435 54.5L43.449 49.5L46.464 54.5L49.478 49.5L52.493 54.5L55.508 49.5L58.522 52L61.913 52M112 52L109.391 52L107.073 54.5L104.754 49.5L102.435 54.5L100.116 49.5L97.797 54.5L95.478 49.5L93.16 54.5L90.841 49.5L88.522 52L85.913 52")
          }
          22% {
            d:path("M28 52L31.403 52L34.428 54.5L37.453 49.5L40.478 54.5L43.503 49.5L46.528 54.5L49.553 49.5L52.578 54.5L55.603 49.5L58.628 52L62.031 52M112 52L109.403 52L107.095 54.5L104.786 49.5L102.478 54.5L100.17 49.5L97.861 54.5L95.553 49.5L93.245 54.5L90.936 49.5L88.628 52L86.031 52")
          }
          22.5% {
            d:path("M28 52L31.414 52L34.45 54.5L37.485 49.5L40.52 54.5L43.555 49.5L46.59 54.5L49.625 49.5L52.66 54.5L55.695 49.5L58.73 52L62.145 52M112 52L109.414 52L107.116 54.5L104.818 49.5L102.52 54.5L100.221 49.5L97.923 54.5L95.625 49.5L93.327 54.5L91.028 49.5L88.73 52L86.145 52")
          }
          23% {
            d:path("M28 52L31.425 52L34.47 54.5L37.515 49.5L40.56 54.5L43.605 49.5L46.65 54.5L49.694 49.5L52.739 54.5L55.784 49.5L58.829 52L62.254 52M112 52L109.425 52L107.137 54.5L104.848 49.5L102.56 54.5L100.271 49.5L97.983 54.5L95.694 49.5L93.406 54.5L91.117 49.5L88.829 52L86.254 52")
          }
          23.5% {
            d:path("M28 52L31.436 52L34.49 54.5L37.544 49.5L40.599 54.5L43.653 49.5L46.707 54.5L49.761 49.5L52.815 54.5L55.869 49.5L58.924 52L62.36 52M112 52L109.436 52L107.157 54.5L104.878 49.5L102.599 54.5L100.319 49.5L98.04 54.5L95.761 49.5L93.482 54.5L91.203 49.5L88.924 52L86.36 52")
          }
          24% {
            d:path("M28 52L31.446 52L34.509 54.5L37.572 49.5L40.636 54.5L43.699 49.5L46.762 54.5L49.825 49.5L52.888 54.5L55.951 49.5L59.015 52L62.461 52M112 52L109.446 52L107.176 54.5L104.906 49.5L102.636 54.5L100.365 49.5L98.095 54.5L95.825 49.5L93.555 54.5L91.285 49.5L89.015 52L86.461 52")
          }
          24.5% {
            d:path("M28 52L31.456 52L34.527 54.5L37.599 49.5L40.671 54.5L43.743 49.5L46.815 54.5L49.886 49.5L52.958 54.5L56.03 49.5L59.102 52L62.557 52M112 52L109.456 52L107.194 54.5L104.933 49.5L102.671 54.5L100.409 49.5L98.148 54.5L95.886 49.5L93.625 54.5L91.363 49.5L89.102 52L86.557 52")
          }
          25% {
            d:path("M28 52L31.465 52L34.545 54.5L37.625 49.5L40.705 54.5L43.785 49.5L46.865 54.5L49.945 49.5L53.025 54.5L56.105 49.5L59.185 52L62.649 52M112 52L109.465 52L107.212 54.5L104.958 49.5L102.705 54.5L100.451 49.5L98.198 54.5L95.945 49.5L93.691 54.5L91.438 49.5L89.185 52L86.649 52")
          }
          25.5% {
            d:path("M28 52L31.474 52L34.561 54.5L37.649 49.5L40.737 54.5L43.825 49.5L46.912 54.5L50.0 49.5L53.088 54.5L56.176 49.5L59.263 52L62.737 52M112 52L109.474 52L107.228 54.5L104.983 49.5L102.737 54.5L100.491 49.5L98.246 54.5L96.0 49.5L93.755 54.5L91.509 49.5L89.263 52L86.737 52")
          }
          26% {
            d:path("M28 52L31.482 52L34.577 54.5L37.672 49.5L40.767 54.5L43.862 49.5L46.958 54.5L50.053 49.5L53.148 54.5L56.243 49.5L59.338 52L62.82 52M112 52L109.482 52L107.244 54.5L105.006 49.5L102.767 54.5L100.529 49.5L98.291 54.5L96.053 49.5L93.814 54.5L91.576 49.5L89.338 52L86.82 52")
          }
          26.5% {
            d:path("M28 52L31.49 52L34.592 54.5L37.694 49.5L40.796 54.5L43.898 49.5L47.0 54.5L50.102 49.5L53.204 54.5L56.306 49.5L59.408 52L62.898 52M112 52L109.49 52L107.259 54.5L105.027 49.5L102.796 54.5L100.565 49.5L98.333 54.5L96.102 49.5L93.871 54.5L91.64 49.5L89.408 52L86.898 52")
          }
          27% {
            d:path("M28 52L31.497 52L34.606 54.5L37.714 49.5L40.823 54.5L43.931 49.5L47.04 54.5L50.149 49.5L53.257 54.5L56.366 49.5L59.474 52L62.971 52M112 52L109.497 52L107.272 54.5L105.048 49.5L102.823 54.5L100.598 49.5L98.373 54.5L96.149 49.5L93.924 54.5L91.699 49.5L89.474 52L86.971 52")
          }
          27.5% {
            d:path("M28 52L31.504 52L34.619 54.5L37.733 49.5L40.848 54.5L43.963 49.5L47.077 54.5L50.192 49.5L53.307 54.5L56.421 49.5L59.536 52L63.04 52M112 52L109.504 52L107.285 54.5L105.067 49.5L102.848 54.5L100.629 49.5L98.411 54.5L96.192 49.5L93.973 54.5L91.755 49.5L89.536 52L87.04 52")
          }
          28.0% {
            d:path("M28 52L31.51 52L34.631 54.5L37.751 49.5L40.871 54.5L43.991 49.5L47.112 54.5L50.232 49.5L53.352 54.5L56.473 49.5L59.593 52L63.103 52M112 52L109.51 52L107.297 54.5L105.084 49.5L102.871 54.5L100.658 49.5L98.445 54.5L96.232 49.5L94.019 54.5L91.806 49.5L89.593 52L87.103 52")
          }
          28.5% {
            d:path("M28 52L31.516 52L34.642 54.5L37.767 49.5L40.893 54.5L44.018 49.5L47.144 54.5L50.269 49.5L53.395 54.5L56.52 49.5L59.646 52L63.162 52M112 52L109.516 52L107.308 54.5L105.1 49.5L102.893 54.5L100.685 49.5L98.477 54.5L96.269 49.5L94.061 54.5L91.853 49.5L89.646 52L87.162 52")
          }
          29.0% {
            d:path("M28 52L31.521 52L34.652 54.5L37.782 49.5L40.912 54.5L44.042 49.5L47.173 54.5L50.303 49.5L53.433 54.5L56.563 49.5L59.693 52L63.215 52M112 52L109.521 52L107.318 54.5L105.115 49.5L102.912 54.5L100.709 49.5L98.506 54.5L96.303 49.5L94.1 54.5L91.897 49.5L89.693 52L87.215 52")
          }
          29.5% {
            d:path("M28 52L31.526 52L34.661 54.5L37.795 49.5L40.93 54.5L44.064 49.5L47.199 54.5L50.333 49.5L53.468 54.5L56.602 49.5L59.737 52L63.263 52M112 52L109.526 52L107.327 54.5L105.129 49.5L102.93 54.5L100.731 49.5L98.532 54.5L96.333 49.5L94.134 54.5L91.936 49.5L89.737 52L87.263 52")
          }
          30% {
            d:path("M28 52L31.531 52L34.669 54.5L37.807 49.5L40.946 54.5L44.084 49.5L47.222 54.5L50.361 49.5L53.499 54.5L56.637 49.5L59.775 52L63.306 52M112 52L109.531 52L107.336 54.5L105.141 49.5L102.946 54.5L100.751 49.5L98.556 54.5L96.361 49.5L94.166 54.5L91.971 49.5L89.775 52L87.306 52")
          }
          30.5% {
            d:path("M28 52L31.534 52L34.676 54.5L37.818 49.5L40.959 54.5L44.101 49.5L47.243 54.5L50.384 49.5L53.526 54.5L56.668 49.5L59.809 52L63.344 52M112 52L109.534 52L107.343 54.5L105.151 49.5L102.959 54.5L100.768 49.5L98.576 54.5L96.384 49.5L94.193 54.5L92.001 49.5L89.809 52L87.344 52")
          }
          31% {
            d:path("M28 52L31.538 52L34.682 54.5L37.827 49.5L40.971 54.5L44.116 49.5L47.26 54.5L50.405 49.5L53.55 54.5L56.694 49.5L59.839 52L63.376 52M112 52L109.538 52L107.349 54.5L105.16 49.5L102.971 54.5L100.783 49.5L98.594 54.5L96.405 49.5L94.216 54.5L92.027 49.5L89.839 52L87.376 52")
          }
          31.5% {
            d:path("M28 52L31.54 52L34.687 54.5L37.834 49.5L40.981 54.5L44.128 49.5L47.275 54.5L50.422 49.5L53.569 54.5L56.716 49.5L59.863 52L63.403 52M112 52L109.54 52L107.354 54.5L105.168 49.5L102.981 54.5L100.795 49.5L98.609 54.5L96.422 49.5L94.236 54.5L92.049 49.5L89.863 52L87.403 52")
          }
          32% {
            d:path("M28 52L31.543 52L34.691 54.5L37.84 49.5L40.989 54.5L44.138 49.5L47.287 54.5L50.436 49.5L53.585 54.5L56.734 49.5L59.883 52L63.425 52M112 52L109.543 52L107.358 54.5L105.174 49.5L102.989 54.5L100.805 49.5L98.62 54.5L96.436 49.5L94.252 54.5L92.067 49.5L89.883 52L87.425 52")
          }
          32.5% {
            d:path("M28 52L31.544 52L34.695 54.5L37.845 49.5L40.995 54.5L44.146 49.5L47.296 54.5L50.446 49.5L53.597 54.5L56.747 49.5L59.898 52L63.442 52M112 52L109.544 52L107.361 54.5L105.178 49.5L102.995 54.5L100.812 49.5L98.629 54.5L96.446 49.5L94.263 54.5L92.08 49.5L89.898 52L87.442 52")
          }
          33% {
            d:path("M28 52L31.545 52L34.697 54.5L37.848 49.5L40.999 54.5L44.151 49.5L47.302 54.5L50.453 49.5L53.605 54.5L56.756 49.5L59.908 52L63.453 52M112 52L109.545 52L107.363 54.5L105.181 49.5L102.999 54.5L100.817 49.5L98.635 54.5L96.453 49.5L94.271 54.5L92.089 49.5L89.908 52L87.453 52")
          }
          33.5% {
            d:path("M28 52L31.546 52L34.698 54.5L37.85 49.5L41.001 54.5L44.153 49.5L47.305 54.5L50.457 49.5L53.609 54.5L56.761 49.5L59.913 52L63.459 52M112 52L109.546 52L107.364 54.5L105.183 49.5L103.001 54.5L100.82 49.5L98.639 54.5L96.457 49.5L94.276 54.5L92.094 49.5L89.913 52L87.459 52")
          }
          34% {
            d:path("M28 52L31.546 52L34.698 54.5L37.85 49.5L41.002 54.5L44.153 49.5L47.305 54.5L50.457 49.5L53.609 54.5L56.761 49.5L59.913 52L63.459 52M112 52L109.546 52L107.364 54.5L105.183 49.5L103.002 54.5L100.82 49.5L98.639 54.5L96.457 49.5L94.276 54.5L92.094 49.5L89.913 52L87.459 52")
          }
          34.5% {
            d:path("M28 52L31.545 52L34.697 54.5L37.848 49.5L41.0 54.5L44.151 49.5L47.303 54.5L50.454 49.5L53.605 54.5L56.757 49.5L59.908 52L63.454 52M112 52L109.545 52L107.363 54.5L105.182 49.5L103.0 54.5L100.818 49.5L98.636 54.5L96.454 49.5L94.272 54.5L92.09 49.5L89.908 52L87.454 52")
          }
          35% {
            d:path("M28 52L31.544 52L34.695 54.5L37.845 49.5L40.996 54.5L44.146 49.5L47.297 54.5L50.447 49.5L53.598 54.5L56.748 49.5L59.899 52L63.443 52M112 52L109.544 52L107.362 54.5L105.179 49.5L102.996 54.5L100.813 49.5L98.63 54.5L96.447 49.5L94.265 54.5L92.082 49.5L89.899 52L87.443 52")
          }
          35.5% {
            d:path("M28 52L31.543 52L34.692 54.5L37.841 49.5L40.99 54.5L44.139 49.5L47.288 54.5L50.437 49.5L53.587 54.5L56.736 49.5L59.885 52L63.427 52M112 52L109.543 52L107.359 54.5L105.174 49.5L102.99 54.5L100.806 49.5L98.622 54.5L96.437 49.5L94.253 54.5L92.069 49.5L89.885 52L87.427 52")
          }
          36% {
            d:path("M28 52L31.541 52L34.688 54.5L37.835 49.5L40.982 54.5L44.13 49.5L47.277 54.5L50.424 49.5L53.571 54.5L56.718 49.5L59.866 52L63.406 52M112 52L109.541 52L107.355 54.5L105.168 49.5L102.982 54.5L100.796 49.5L98.61 54.5L96.424 49.5L94.238 54.5L92.052 49.5L89.866 52L87.406 52")
          }
          36.5% {
            d:path("M28 52L31.538 52L34.683 54.5L37.828 49.5L40.973 54.5L44.117 49.5L47.262 54.5L50.407 49.5L53.552 54.5L56.697 49.5L59.842 52L63.38 52M112 52L109.538 52L107.35 54.5L105.161 49.5L102.973 54.5L100.784 49.5L98.596 54.5L96.407 49.5L94.219 54.5L92.03 49.5L89.842 52L87.38 52")
          }
          37% {
            d:path("M28 52L31.535 52L34.677 54.5L37.819 49.5L40.961 54.5L44.103 49.5L47.245 54.5L50.387 49.5L53.529 54.5L56.671 49.5L59.813 52L63.348 52M112 52L109.535 52L107.344 54.5L105.152 49.5L102.961 54.5L100.77 49.5L98.578 54.5L96.387 49.5L94.196 54.5L92.004 49.5L89.813 52L87.348 52")
          }
          37.5% {
            d:path("M28 52L31.531 52L34.67 54.5L37.809 49.5L40.947 54.5L44.086 49.5L47.225 54.5L50.364 49.5L53.502 54.5L56.641 49.5L59.78 52L63.311 52M112 52L109.531 52L107.337 54.5L105.142 49.5L102.947 54.5L100.753 49.5L98.558 54.5L96.364 49.5L94.169 54.5L91.974 49.5L89.78 52L87.311 52")
          }
          38% {
            d:path("M28 52L31.527 52L34.662 54.5L37.797 49.5L40.932 54.5L44.067 49.5L47.202 54.5L50.337 49.5L53.472 54.5L56.607 49.5L59.742 52L63.269 52M112 52L109.527 52L107.329 54.5L105.13 49.5L102.932 54.5L100.733 49.5L98.535 54.5L96.337 49.5L94.138 54.5L91.94 49.5L89.742 52L87.269 52")
          }
          38.5% {
            d:path("M28 52L31.522 52L34.653 54.5L37.784 49.5L40.914 54.5L44.045 49.5L47.176 54.5L50.307 49.5L53.437 54.5L56.568 49.5L59.699 52L63.221 52M112 52L109.522 52L107.32 54.5L105.117 49.5L102.914 54.5L100.712 49.5L98.509 54.5L96.307 49.5L94.104 54.5L91.901 49.5L89.699 52L87.221 52")
          }
          39% {
            d:path("M28 52L31.517 52L34.643 54.5L37.769 49.5L40.895 54.5L44.021 49.5L47.147 54.5L50.273 49.5L53.399 54.5L56.525 49.5L59.651 52L63.168 52M112 52L109.517 52L107.31 54.5L105.102 49.5L102.895 54.5L100.688 49.5L98.481 54.5L96.273 49.5L94.066 54.5L91.859 49.5L89.651 52L87.168 52")
          }
          39.5% {
            d:path("M28 52L31.511 52L34.632 54.5L37.753 49.5L40.874 54.5L43.995 49.5L47.116 54.5L50.237 49.5L53.358 54.5L56.479 49.5L59.599 52L63.111 52M112 52L109.511 52L107.299 54.5L105.086 49.5L102.874 54.5L100.661 49.5L98.449 54.5L96.237 49.5L94.024 54.5L91.812 49.5L89.599 52L87.111 52")
          }
          40% {
            d:path("M28 52L31.505 52L34.62 54.5L37.735 49.5L40.851 54.5L43.966 49.5L47.082 54.5L50.197 49.5L53.312 54.5L56.428 49.5L59.543 52L63.048 52M112 52L109.505 52L107.287 54.5L105.069 49.5L102.851 54.5L100.633 49.5L98.415 54.5L96.197 49.5L93.979 54.5L91.761 49.5L89.543 52L87.048 52")
          }
          40.5% {
            d:path("M28 52L31.498 52L34.607 54.5L37.717 49.5L40.826 54.5L43.935 49.5L47.045 54.5L50.154 49.5L53.263 54.5L56.373 49.5L59.482 52L62.98 52M112 52L109.498 52L107.274 54.5L105.05 49.5L102.826 54.5L100.602 49.5L98.378 54.5L96.154 49.5L93.93 54.5L91.706 49.5L89.482 52L86.98 52")
          }
          41% {
            d:path("M28 52L31.491 52L34.594 54.5L37.696 49.5L40.799 54.5L43.902 49.5L47.005 54.5L50.108 49.5L53.211 54.5L56.314 49.5L59.416 52L62.907 52M112 52L109.491 52L107.26 54.5L105.03 49.5L102.799 54.5L100.569 49.5L98.338 54.5L96.108 49.5L93.877 54.5L91.647 49.5L89.416 52L86.907 52")
          }
          41.5% {
            d:path("M28 52L31.483 52L34.579 54.5L37.675 49.5L40.771 54.5L43.867 49.5L46.963 54.5L50.059 49.5L53.155 54.5L56.251 49.5L59.347 52L62.83 52M112 52L109.483 52L107.246 54.5L105.008 49.5L102.771 54.5L100.533 49.5L98.296 54.5L96.059 49.5L93.821 54.5L91.584 49.5L89.347 52L86.83 52")
          }
          42% {
            d:path("M28 52L31.475 52L34.563 54.5L37.652 49.5L40.741 54.5L43.829 49.5L46.918 54.5L50.007 49.5L53.095 54.5L56.184 49.5L59.273 52L62.747 52M112 52L109.475 52L107.23 54.5L104.985 49.5L102.741 54.5L100.496 49.5L98.251 54.5L96.007 49.5L93.762 54.5L91.517 49.5L89.273 52L86.747 52")
          }
          42.5% {
            d:path("M28 52L31.466 52L34.547 54.5L37.628 49.5L40.709 54.5L43.79 49.5L46.871 54.5L49.951 49.5L53.032 54.5L56.113 49.5L59.194 52L62.66 52M112 52L109.466 52L107.214 54.5L104.961 49.5L102.709 54.5L100.456 49.5L98.204 54.5L95.951 49.5L93.699 54.5L91.447 49.5L89.194 52L86.66 52")
          }
          43% {
            d:path("M28 52L31.457 52L34.53 54.5L37.602 49.5L40.675 54.5L43.748 49.5L46.821 54.5L49.893 49.5L52.966 54.5L56.039 49.5L59.112 52L62.569 52M112 52L109.457 52L107.196 54.5L104.936 49.5L102.675 54.5L100.415 49.5L98.154 54.5L95.893 49.5L93.633 54.5L91.372 49.5L89.112 52L86.569 52")
          }
          43.5% {
            d:path("M28 52L31.447 52L34.511 54.5L37.576 49.5L40.64 54.5L43.704 49.5L46.768 54.5L49.833 49.5L52.897 54.5L55.961 49.5L59.025 52L62.472 52M112 52L109.447 52L107.178 54.5L104.909 49.5L102.64 54.5L100.371 49.5L98.102 54.5L95.833 49.5L93.563 54.5L91.294 49.5L89.025 52L86.472 52")
          }
          44% {
            d:path("M28 52L31.437 52L34.492 54.5L37.548 49.5L40.603 54.5L43.658 49.5L46.714 54.5L49.769 49.5L52.824 54.5L55.879 49.5L58.935 52L62.372 52M112 52L109.437 52L107.159 54.5L104.881 49.5L102.603 54.5L100.325 49.5L98.047 54.5L95.769 49.5L93.491 54.5L91.213 49.5L88.935 52L86.372 52")
          }
          44.5% {
            d:path("M28 52L31.427 52L34.473 54.5L37.519 49.5L40.565 54.5L43.611 49.5L46.656 54.5L49.702 49.5L52.748 54.5L55.794 49.5L58.84 52L62.267 52M112 52L109.427 52L107.139 54.5L104.852 49.5L102.565 54.5L100.277 49.5L97.99 54.5L95.702 49.5L93.415 54.5L91.128 49.5L88.84 52L86.267 52")
          }
          45% {
            d:path("M28 52L31.416 52L34.452 54.5L37.488 49.5L40.525 54.5L43.561 49.5L46.597 54.5L49.633 49.5L52.67 54.5L55.706 49.5L58.742 52L62.158 52M112 52L109.416 52L107.119 54.5L104.822 49.5L102.525 54.5L100.228 49.5L97.93 54.5L95.633 49.5L93.336 54.5L91.039 49.5L88.742 52L86.158 52")
          }
          45.5% {
            d:path("M28 52L31.404 52L34.431 54.5L37.457 49.5L40.483 54.5L43.509 49.5L46.535 54.5L49.562 49.5L52.588 54.5L55.614 49.5L58.64 52L62.045 52M112 52L109.404 52L107.097 54.5L104.79 49.5L102.483 54.5L100.176 49.5L97.869 54.5L95.562 49.5L93.255 54.5L90.947 49.5L88.64 52L86.045 52")
          }
          46% {
            d:path("M28 52L31.393 52L34.409 54.5L37.424 49.5L40.44 54.5L43.456 49.5L46.472 54.5L49.487 49.5L52.503 54.5L55.519 49.5L58.535 52L61.928 52M112 52L109.393 52L107.075 54.5L104.758 49.5L102.44 54.5L100.123 49.5L97.805 54.5L95.487 49.5L93.17 54.5L90.852 49.5L88.535 52L85.928 52")
          }
          46.5% {
            d:path("M28 52L31.381 52L34.386 54.5L37.391 49.5L40.396 54.5L43.401 49.5L46.406 54.5L49.411 49.5L52.416 54.5L55.421 49.5L58.426 52L61.807 52M112 52L109.381 52L107.052 54.5L104.724 49.5L102.396 54.5L100.067 49.5L97.739 54.5L95.411 49.5L93.083 54.5L90.754 49.5L88.426 52L85.807 52")
          }
          47% {
            d:path("M28 52L31.368 52L34.362 54.5L37.356 49.5L40.35 54.5L43.344 49.5L46.338 54.5L49.332 49.5L52.326 54.5L55.32 49.5L58.314 52L61.682 52M112 52L109.368 52L107.029 54.5L104.689 49.5L102.35 54.5L100.011 49.5L97.671 54.5L95.332 49.5L92.992 54.5L90.653 49.5L88.314 52L85.682 52")
          }
          47.5% {
            d:path("M28 52L31.355 52L34.338 54.5L37.32 49.5L40.303 54.5L43.285 49.5L46.268 54.5L49.25 49.5L52.233 54.5L55.215 49.5L58.198 52L61.553 52M112 52L109.355 52L107.005 54.5L104.654 49.5L102.303 54.5L99.952 49.5L97.601 54.5L95.25 49.5L92.9 54.5L90.549 49.5L88.198 52L85.553 52")
          }
          48% {
            d:path("M28 52L31.342 52L34.313 54.5L37.284 49.5L40.255 54.5L43.225 49.5L46.196 54.5L49.167 49.5L52.138 54.5L55.108 49.5L58.079 52L61.421 52M112 52L109.342 52L106.98 54.5L104.617 49.5L102.255 54.5L99.892 49.5L97.529 54.5L95.167 49.5L92.804 54.5L90.442 49.5L88.079 52L85.421 52")
          }
          48.5% {
            d:path("M28 52L31.329 52L34.287 54.5L37.246 49.5L40.205 54.5L43.164 49.5L46.122 54.5L49.081 49.5L52.04 54.5L54.999 49.5L57.957 52L61.286 52M112 52L109.329 52L106.954 54.5L104.579 49.5L102.205 54.5L99.83 49.5L97.456 54.5L95.081 49.5L92.707 54.5L90.332 49.5L87.957 52L85.286 52")
          }
          49% {
            d:path("M28 52L31.315 52L34.261 54.5L37.208 49.5L40.154 54.5L43.101 49.5L46.047 54.5L48.993 49.5L51.94 54.5L54.886 49.5L57.833 52L61.148 52M112 52L109.315 52L106.928 54.5L104.541 49.5L102.154 54.5L99.767 49.5L97.38 54.5L94.993 49.5L92.607 54.5L90.22 49.5L87.833 52L85.148 52")
          }
          49.5% {
            d:path("M28 52L31.301 52L34.234 54.5L37.168 49.5L40.102 54.5L43.036 49.5L45.97 54.5L48.904 49.5L51.838 54.5L54.771 49.5L57.705 52L61.006 52M112 52L109.301 52L106.901 54.5L104.502 49.5L102.102 54.5L99.703 49.5L97.303 54.5L94.904 49.5L92.504 54.5L90.105 49.5L87.705 52L85.006 52")
          }
          50% {
            d:path("M28 52L31.286 52L34.207 54.5L37.128 49.5L40.049 54.5L42.97 49.5L45.891 54.5L48.812 49.5L51.733 54.5L54.654 49.5L57.575 52L60.861 52M112 52L109.286 52L106.874 54.5L104.461 49.5L102.049 54.5L99.637 49.5L97.224 54.5L94.812 49.5L92.4 54.5L89.987 49.5L87.575 52L84.861 52")
          }
          50.5% {
            d:path("M28 52L31.271 52L34.179 54.5L37.087 49.5L39.995 54.5L42.903 49.5L45.811 54.5L48.719 49.5L51.627 54.5L54.535 49.5L57.442 52L60.714 52M112 52L109.271 52L106.846 54.5L104.42 49.5L101.995 54.5L99.57 49.5L97.144 54.5L94.719 49.5L92.293 54.5L89.868 49.5L87.442 52L84.714 52")
          }
          51% {
            d:path("M28 52L31.256 52L34.151 54.5L37.045 49.5L39.94 54.5L42.835 49.5L45.729 54.5L48.624 49.5L51.518 54.5L54.413 49.5L57.307 52L60.564 52M112 52L109.256 52L106.818 54.5L104.379 49.5L101.94 54.5L99.501 49.5L97.062 54.5L94.624 49.5L92.185 54.5L89.746 49.5L87.307 52L84.564 52")
          }
          51.5% {
            d:path("M28 52L31.241 52L34.122 54.5L37.003 49.5L39.884 54.5L42.765 49.5L45.646 54.5L48.527 49.5L51.408 54.5L54.289 49.5L57.17 52L60.411 52M112 52L109.241 52L106.789 54.5L104.336 49.5L101.884 54.5L99.432 49.5L96.979 54.5L94.527 49.5L92.075 54.5L89.622 49.5L87.17 52L84.411 52")
          }
          52% {
            d:path("M28 52L31.226 52L34.093 54.5L36.96 49.5L39.827 54.5L42.694 49.5L45.562 54.5L48.429 49.5L51.296 54.5L54.163 49.5L57.03 52L60.256 52M112 52L109.226 52L106.759 54.5L104.293 49.5L101.827 54.5L99.361 49.5L96.895 54.5L94.429 49.5L91.963 54.5L89.496 49.5L87.03 52L84.256 52")
          }
          52.5% {
            d:path("M28 52L31.21 52L34.063 54.5L36.916 49.5L39.77 54.5L42.623 49.5L45.476 54.5L48.329 49.5L51.182 54.5L54.036 49.5L56.889 52L60.099 52M112 52L109.21 52L106.73 54.5L104.25 49.5L101.77 54.5L99.289 49.5L96.809 54.5L94.329 49.5L91.849 54.5L89.369 49.5L86.889 52L84.099 52")
          }
          53% {
            d:path("M28 52L31.194 52L34.033 54.5L36.872 49.5L39.711 54.5L42.55 49.5L45.389 54.5L48.228 49.5L51.067 54.5L53.906 49.5L56.745 52L59.939 52M112 52L109.194 52L106.7 54.5L104.205 49.5L101.711 54.5L99.217 49.5L96.723 54.5L94.228 49.5L91.734 54.5L89.24 49.5L86.745 52L83.939 52")
          }
          53.5% {
            d:path("M28 52L31.178 52L34.003 54.5L36.827 49.5L39.652 54.5L42.477 49.5L45.301 54.5L48.126 49.5L50.951 54.5L53.776 49.5L56.6 52L59.778 52M112 52L109.178 52L106.669 54.5L104.161 49.5L101.652 54.5L99.143 49.5L96.635 54.5L94.126 49.5L91.617 54.5L89.109 49.5L86.6 52L83.778 52")
          }
          54% {
            d:path("M28 52L31.162 52L33.972 54.5L36.782 49.5L39.592 54.5L42.402 49.5L45.213 54.5L48.023 49.5L50.833 54.5L53.643 49.5L56.454 52L59.615 52M112 52L109.162 52L106.638 54.5L104.115 49.5L101.592 54.5L99.069 49.5L96.546 54.5L94.023 49.5L91.5 54.5L88.977 49.5L86.454 52L83.615 52")
          }
          54.5% {
            d:path("M28 52L31.145 52L33.941 54.5L36.736 49.5L39.532 54.5L42.327 49.5L45.123 54.5L47.919 49.5L50.714 54.5L53.51 49.5L56.305 52L59.45 52M112 52L109.145 52L106.607 54.5L104.07 49.5L101.532 54.5L98.994 49.5L96.456 54.5L93.919 49.5L91.381 54.5L88.843 49.5L86.305 52L83.45 52")
          }
          55.0% {
            d:path("M28 52L31.128 52L33.909 54.5L36.69 49.5L39.471 54.5L42.252 49.5L45.033 54.5L47.813 49.5L50.594 54.5L53.375 49.5L56.156 52L59.284 52M112 52L109.128 52L106.576 54.5L104.023 49.5L101.471 54.5L98.918 49.5L96.366 54.5L93.813 49.5L91.261 54.5L88.708 49.5L86.156 52L83.284 52")
          }
          55.5% {
            d:path("M28 52L31.112 52L33.878 54.5L36.644 49.5L39.41 54.5L42.176 49.5L44.942 54.5L47.708 49.5L50.473 54.5L53.239 49.5L56.005 52L59.117 52M112 52L109.112 52L106.544 54.5L103.977 49.5L101.41 54.5L98.842 49.5L96.275 54.5L93.708 49.5L91.14 54.5L88.573 49.5L86.005 52L83.117 52")
          }
          56.0% {
            d:path("M28 52L31.095 52L33.846 54.5L36.597 49.5L39.348 54.5L42.099 49.5L44.85 54.5L47.601 49.5L50.352 54.5L53.103 49.5L55.854 52L58.949 52M112 52L109.095 52L106.513 54.5L103.93 49.5L101.348 54.5L98.766 49.5L96.183 54.5L93.601 49.5L91.019 54.5L88.436 49.5L85.854 52L82.949 52")
          }
          56.5% {
            d:path("M28 52L31.078 52L33.814 54.5L36.55 49.5L39.286 54.5L42.022 49.5L44.758 54.5L47.494 49.5L50.23 54.5L52.965 49.5L55.701 52L58.779 52M112 52L109.078 52L106.481 54.5L103.883 49.5L101.286 54.5L98.688 49.5L96.091 54.5L93.494 49.5L90.896 54.5L88.299 49.5L85.701 52L82.779 52")
          }
          57.0% {
            d:path("M28 52L31.061 52L33.782 54.5L36.503 49.5L39.223 54.5L41.944 49.5L44.665 54.5L47.386 49.5L50.107 54.5L52.828 49.5L55.548 52L58.609 52M112 52L109.061 52L106.448 54.5L103.836 49.5L101.223 54.5L98.611 49.5L95.998 54.5L93.386 49.5L90.773 54.5L88.161 49.5L85.548 52L82.609 52")
          }
          57.5% {
            d:path("M28 52L31.044 52L33.75 54.5L36.455 49.5L39.161 54.5L41.866 49.5L44.572 54.5L47.278 49.5L49.983 54.5L52.689 49.5L55.395 52L58.439 52M112 52L109.044 52L106.416 54.5L103.788 49.5L101.161 54.5L98.533 49.5L95.905 54.5L93.278 49.5L90.65 54.5L88.022 49.5L85.395 52L82.439 52")
          }
          58.0% {
            d:path("M28 52L31.027 52L33.717 54.5L36.408 49.5L39.098 54.5L41.788 49.5L44.479 54.5L47.169 49.5L49.86 54.5L52.55 49.5L55.241 52L58.267 52M112 52L109.027 52L106.384 54.5L103.741 49.5L101.098 54.5L98.455 49.5L95.812 54.5L93.169 49.5L90.526 54.5L87.884 49.5L85.241 52L82.267 52")
          }
          58.5% {
            d:path("M28 52L31.01 52L33.685 54.5L36.36 49.5L39.035 54.5L41.71 49.5L44.386 54.5L47.061 49.5L49.736 54.5L52.411 49.5L55.086 52L58.096 52M112 52L109.01 52L106.351 54.5L103.693 49.5L101.035 54.5L98.377 49.5L95.719 54.5L93.061 49.5L90.403 54.5L87.745 49.5L85.086 52L82.096 52")
          }
          59% {
            d:path("M28 52L30.992 52L33.652 54.5L36.312 49.5L38.972 54.5L41.632 49.5L44.292 54.5L46.952 49.5L49.612 54.5L52.272 49.5L54.932 52L57.924 52M112 52L108.992 52L106.319 54.5L103.646 49.5L100.972 54.5L98.299 49.5L95.626 54.5L92.952 49.5L90.279 54.5L87.605 49.5L84.932 52L81.924 52")
          }
          59.5% {
            d:path("M28 52L30.975 52L33.62 54.5L36.265 49.5L38.909 54.5L41.554 49.5L44.199 54.5L46.844 49.5L49.488 54.5L52.133 49.5L54.778 52L57.753 52M112 52L108.975 52L106.287 54.5L103.598 49.5L100.909 54.5L98.221 49.5L95.532 54.5L92.844 49.5L90.155 54.5L87.466 49.5L84.778 52L81.753 52")
          }
          60% {
            d:path("M28 52L30.958 52L33.588 54.5L36.217 49.5L38.847 54.5L41.476 49.5L44.106 54.5L46.735 49.5L49.365 54.5L51.994 49.5L54.624 52L57.582 52M112 52L108.958 52L106.254 54.5L103.551 49.5L100.847 54.5L98.143 49.5L95.439 54.5L92.735 49.5L90.031 54.5L87.328 49.5L84.624 52L81.582 52")
          }
          60.5% {
            d:path("M28 52L30.941 52L33.555 54.5L36.17 49.5L38.784 54.5L41.398 49.5L44.013 54.5L46.627 49.5L49.241 54.5L51.856 49.5L54.47 52L57.411 52M112 52L108.941 52L106.222 54.5L103.503 49.5L100.784 54.5L98.065 49.5L95.346 54.5L92.627 49.5L89.908 54.5L87.189 49.5L84.47 52L81.411 52")
          }
          61% {
            d:path("M28 52L30.924 52L33.523 54.5L36.122 49.5L38.722 54.5L41.321 49.5L43.92 54.5L46.519 49.5L49.118 54.5L51.718 49.5L54.317 52L57.241 52M112 52L108.924 52L106.19 54.5L103.456 49.5L100.722 54.5L97.988 49.5L95.253 54.5L92.519 49.5L89.785 54.5L87.051 49.5L84.317 52L81.241 52")
          }
          61.5% {
            d:path("M28 52L30.907 52L33.491 54.5L36.075 49.5L38.66 54.5L41.244 49.5L43.828 54.5L46.412 49.5L48.996 54.5L51.58 49.5L54.164 52L57.071 52M112 52L108.907 52L106.158 54.5L103.409 49.5L100.66 54.5L97.91 49.5L95.161 54.5L92.412 49.5L89.663 54.5L86.914 49.5L84.164 52L81.071 52")
          }
          62% {
            d:path("M28 52L30.89 52L33.459 54.5L36.029 49.5L38.598 54.5L41.167 49.5L43.736 54.5L46.305 49.5L48.874 54.5L51.444 49.5L54.013 52L56.903 52M112 52L108.89 52L106.126 54.5L103.362 49.5L100.598 54.5L97.834 49.5L95.069 54.5L92.305 49.5L89.541 54.5L86.777 49.5L84.013 52L80.903 52")
          }
          62.5% {
            d:path("M28 52L30.874 52L33.428 54.5L35.982 49.5L38.536 54.5L41.091 49.5L43.645 54.5L46.199 49.5L48.753 54.5L51.308 49.5L53.862 52L56.736 52M112 52L108.874 52L106.094 54.5L103.315 49.5L100.536 54.5L97.757 49.5L94.978 54.5L92.199 49.5L89.42 54.5L86.641 49.5L83.862 52L80.736 52")
          }
          63% {
            d:path("M28 52L30.857 52L33.396 54.5L35.936 49.5L38.475 54.5L41.015 49.5L43.554 54.5L46.094 49.5L48.633 54.5L51.173 49.5L53.712 52L56.569 52M112 52L108.857 52L106.063 54.5L103.269 49.5L100.475 54.5L97.682 49.5L94.888 54.5L92.094 49.5L89.3 54.5L86.506 49.5L83.712 52L80.569 52")
          }
          63.5% {
            d:path("M28 52L30.84 52L33.365 54.5L35.89 49.5L38.415 54.5L40.94 49.5L43.465 54.5L45.99 49.5L48.514 54.5L51.039 49.5L53.564 52L56.405 52M112 52L108.84 52L106.032 54.5L103.223 49.5L100.415 54.5L97.607 49.5L94.798 54.5L91.99 49.5L89.181 54.5L86.373 49.5L83.564 52L80.405 52")
          }
          64% {
            d:path("M28 52L30.824 52L33.334 54.5L35.845 49.5L38.355 54.5L40.865 49.5L43.376 54.5L45.886 49.5L48.397 54.5L50.907 49.5L53.417 52L56.241 52M112 52L108.824 52L106.001 54.5L103.178 49.5L100.355 54.5L97.532 49.5L94.709 54.5L91.886 49.5L89.063 54.5L86.24 49.5L83.417 52L80.241 52")
          }
          64.5% {
            d:path("M28 52L30.808 52L33.304 54.5L35.8 49.5L38.296 54.5L40.792 49.5L43.288 54.5L45.784 49.5L48.28 54.5L50.776 49.5L53.272 52L56.08 52M112 52L108.808 52L105.971 54.5L103.133 49.5L100.296 54.5L97.459 49.5L94.621 54.5L91.784 49.5L88.947 54.5L86.109 49.5L83.272 52L80.08 52")
          }
          65% {
            d:path("M28 52L30.792 52L33.274 54.5L35.756 49.5L38.237 54.5L40.719 49.5L43.201 54.5L45.683 49.5L48.165 54.5L50.646 49.5L53.128 52L55.92 52M112 52L108.792 52L105.94 54.5L103.089 49.5L100.237 54.5L97.386 49.5L94.534 54.5L91.683 49.5L88.831 54.5L85.98 49.5L83.128 52L79.92 52")
          }
          65.5% {
            d:path("M28 52L30.776 52L33.244 54.5L35.712 49.5L38.18 54.5L40.647 49.5L43.115 54.5L45.583 49.5L48.051 54.5L50.519 49.5L52.986 52L55.763 52M112 52L108.776 52L105.911 54.5L103.045 49.5L100.18 54.5L97.314 49.5L94.449 54.5L91.583 49.5L88.718 54.5L85.852 49.5L82.986 52L79.763 52")
          }
          66% {
            d:path("M28 52L30.761 52L33.215 54.5L35.669 49.5L38.123 54.5L40.577 49.5L43.031 54.5L45.485 49.5L47.939 54.5L50.393 49.5L52.847 52L55.607 52M112 52L108.761 52L105.881 54.5L103.002 49.5L100.123 54.5L97.243 49.5L94.364 54.5L91.485 49.5L88.605 54.5L85.726 49.5L82.847 52L79.607 52")
          }
          66.5% {
            d:path("M28 52L30.745 52L33.186 54.5L35.626 49.5L38.067 54.5L40.507 49.5L42.947 54.5L45.388 49.5L47.828 54.5L50.269 49.5L52.709 52L55.454 52M112 52L108.745 52L105.853 54.5L102.96 49.5L100.067 54.5L97.174 49.5L94.281 54.5L91.388 49.5L88.495 54.5L85.602 49.5L82.709 52L79.454 52")
          }
          67% {
            d:path("M28 52L30.73 52L33.157 54.5L35.584 49.5L38.011 54.5L40.438 49.5L42.866 54.5L45.293 49.5L47.72 54.5L50.147 49.5L52.574 52L55.304 52M112 52L108.73 52L105.824 54.5L102.918 49.5L100.011 54.5L97.105 49.5L94.199 54.5L91.293 49.5L88.386 54.5L85.48 49.5L82.574 52L79.304 52")
          }
          67.5% {
            d:path("M28 52L30.716 52L33.13 54.5L35.543 49.5L37.957 54.5L40.371 49.5L42.785 54.5L45.199 49.5L47.613 54.5L50.027 49.5L52.441 52L55.156 52M112 52L108.716 52L105.796 54.5L102.877 49.5L99.957 54.5L97.038 49.5L94.118 54.5L91.199 49.5L88.28 54.5L85.36 49.5L82.441 52L79.156 52")
          }
          68% {
            d:path("M28 52L30.701 52L33.102 54.5L35.503 49.5L37.904 54.5L40.305 49.5L42.706 54.5L45.107 49.5L47.508 54.5L49.909 49.5L52.31 52L55.011 52M112 52L108.701 52L105.769 54.5L102.836 49.5L99.904 54.5L96.972 49.5L94.039 54.5L91.107 49.5L88.175 54.5L85.242 49.5L82.31 52L79.011 52")
          }
          68.5% {
            d:path("M28 52L30.687 52L33.075 54.5L35.464 49.5L37.852 54.5L40.24 49.5L42.629 54.5L45.017 49.5L47.406 54.5L49.794 49.5L52.182 52L54.869 52M112 52L108.687 52L105.742 54.5L102.797 49.5L99.852 54.5L96.907 49.5L93.962 54.5L91.017 49.5L88.072 54.5L85.127 49.5L82.182 52L78.869 52")
          }
          69% {
            d:path("M28 52L30.673 52L33.049 54.5L35.425 49.5L37.801 54.5L40.177 49.5L42.553 54.5L44.929 49.5L47.305 54.5L49.681 49.5L52.057 52L54.73 52M112 52L108.673 52L105.716 54.5L102.758 49.5L99.801 54.5L96.844 49.5L93.886 54.5L90.929 49.5L87.972 54.5L85.015 49.5L82.057 52L78.73 52")
          }
          69.5% {
            d:path("M28 52L30.659 52L33.023 54.5L35.387 49.5L37.751 54.5L40.115 49.5L42.479 54.5L44.843 49.5L47.207 54.5L49.571 49.5L51.935 52L54.595 52M112 52L108.659 52L105.69 54.5L102.721 49.5L99.751 54.5L96.782 49.5L93.813 54.5L90.843 49.5L87.874 54.5L84.904 49.5L81.935 52L78.595 52")
          }
          70% {
            d:path("M28 52L30.646 52L32.998 54.5L35.351 49.5L37.703 54.5L40.055 49.5L42.407 54.5L44.759 49.5L47.112 54.5L49.464 49.5L51.816 52L54.462 52M112 52L108.646 52L105.665 54.5L102.684 49.5L99.703 54.5L96.722 49.5L93.741 54.5L90.759 49.5L87.778 54.5L84.797 49.5L81.816 52L78.462 52")
          }
          70.5% {
            d:path("M28 52L30.633 52L32.974 54.5L35.315 49.5L37.656 54.5L39.996 49.5L42.337 54.5L44.678 49.5L47.019 54.5L49.359 49.5L51.7 52L54.333 52M112 52L108.633 52L105.641 54.5L102.648 49.5L99.656 54.5L96.663 49.5L93.67 54.5L90.678 49.5L87.685 54.5L84.693 49.5L81.7 52L78.333 52")
          }
          71% {
            d:path("M28 52L30.621 52L32.95 54.5L35.28 49.5L37.61 54.5L39.939 49.5L42.269 54.5L44.598 49.5L46.928 54.5L49.258 49.5L51.587 52L54.208 52M112 52L108.621 52L105.617 54.5L102.613 49.5L99.61 54.5L96.606 49.5L93.602 54.5L90.598 49.5L87.595 54.5L84.591 49.5L81.587 52L78.208 52")
          }
          71.5% {
            d:path("M28 52L30.609 52L32.927 54.5L35.246 49.5L37.565 54.5L39.884 49.5L42.203 54.5L44.522 49.5L46.84 54.5L49.159 49.5L51.478 52L54.087 52M112 52L108.609 52L105.594 54.5L102.58 49.5L99.565 54.5L96.551 49.5L93.536 54.5L90.522 49.5L87.507 54.5L84.492 49.5L81.478 52L78.087 52")
          }
          72% {
            d:path("M28 52L30.597 52L32.905 54.5L35.214 49.5L37.522 54.5L39.83 49.5L42.139 54.5L44.447 49.5L46.755 54.5L49.064 49.5L51.372 52L53.969 52M112 52L108.597 52L105.572 54.5L102.547 49.5L99.522 54.5L96.497 49.5L93.472 54.5L90.447 49.5L87.422 54.5L84.397 49.5L81.372 52L77.969 52")
          }
          72.5% {
            d:path("M28 52L30.586 52L32.884 54.5L35.182 49.5L37.48 54.5L39.779 49.5L42.077 54.5L44.375 49.5L46.673 54.5L48.972 49.5L51.27 52L53.855 52M112 52L108.586 52L105.55 54.5L102.515 49.5L99.48 54.5L96.445 49.5L93.41 54.5L90.375 49.5L87.34 54.5L84.305 49.5L81.27 52L77.855 52")
          }
          73% {
            d:path("M28 52L30.575 52L32.863 54.5L35.152 49.5L37.44 54.5L39.729 49.5L42.017 54.5L44.306 49.5L46.594 54.5L48.883 49.5L51.171 52L53.746 52M112 52L108.575 52L105.53 54.5L102.485 49.5L99.44 54.5L96.395 49.5L93.35 54.5L90.306 49.5L87.261 54.5L84.216 49.5L81.171 52L77.746 52")
          }
          73.5% {
            d:path("M28 52L30.564 52L32.843 54.5L35.122 49.5L37.401 54.5L39.681 49.5L41.96 54.5L44.239 49.5L46.518 54.5L48.797 49.5L51.076 52L53.64 52M112 52L108.564 52L105.51 54.5L102.456 49.5L99.401 54.5L96.347 49.5L93.293 54.5L90.239 49.5L87.185 54.5L84.131 49.5L81.076 52L77.64 52")
          }
          74% {
            d:path("M28 52L30.554 52L32.824 54.5L35.094 49.5L37.364 54.5L39.635 49.5L41.905 54.5L44.175 49.5L46.445 54.5L48.715 49.5L50.985 52L53.539 52M112 52L108.554 52L105.491 54.5L102.428 49.5L99.364 54.5L96.301 49.5L93.238 54.5L90.175 49.5L87.112 54.5L84.049 49.5L80.985 52L77.539 52")
          }
          74.5% {
            d:path("M28 52L30.544 52L32.806 54.5L35.067 49.5L37.329 54.5L39.591 49.5L41.852 54.5L44.114 49.5L46.375 54.5L48.637 49.5L50.898 52L53.443 52M112 52L108.544 52L105.473 54.5L102.401 49.5L99.329 54.5L96.257 49.5L93.185 54.5L90.114 49.5L87.042 54.5L83.97 49.5L80.898 52L77.443 52")
          }
          75% {
            d:path("M28 52L30.535 52L32.788 54.5L35.042 49.5L37.295 54.5L39.549 49.5L41.802 54.5L44.055 49.5L46.309 54.5L48.562 49.5L50.815 52L53.351 52M112 52L108.535 52L105.455 54.5L102.375 49.5L99.295 54.5L96.215 49.5L93.135 54.5L90.055 49.5L86.975 54.5L83.895 49.5L80.815 52L77.351 52")
          }
          75.5% {
            d:path("M28 52L30.526 52L32.772 54.5L35.017 49.5L37.263 54.5L39.509 49.5L41.754 54.5L44.0 49.5L46.245 54.5L48.491 49.5L50.737 52L53.263 52M112 52L108.526 52L105.439 54.5L102.351 49.5L99.263 54.5L96.175 49.5L93.088 54.5L90.0 49.5L86.912 54.5L83.824 49.5L80.737 52L77.263 52")
          }
          76% {
            d:path("M28 52L30.518 52L32.756 54.5L34.994 49.5L37.233 54.5L39.471 49.5L41.709 54.5L43.947 49.5L46.186 54.5L48.424 49.5L50.662 52L53.18 52M112 52L108.518 52L105.423 54.5L102.328 49.5L99.233 54.5L96.138 49.5L93.042 54.5L89.947 49.5L86.852 54.5L83.757 49.5L80.662 52L77.18 52")
          }
          76.5% {
            d:path("M28 52L30.51 52L32.741 54.5L34.973 49.5L37.204 54.5L39.435 49.5L41.667 54.5L43.898 49.5L46.129 54.5L48.36 49.5L50.592 52L53.102 52M112 52L108.51 52L105.408 54.5L102.306 49.5L99.204 54.5L96.102 49.5L93.0 54.5L89.898 49.5L86.796 54.5L83.694 49.5L80.592 52L77.102 52")
          }
          77% {
            d:path("M28 52L30.503 52L32.728 54.5L34.952 49.5L37.177 54.5L39.402 49.5L41.627 54.5L43.851 49.5L46.076 54.5L48.301 49.5L50.526 52L53.029 52M112 52L108.503 52L105.394 54.5L102.286 49.5L99.177 54.5L96.069 49.5L92.96 54.5L89.851 49.5L86.743 54.5L83.634 49.5L80.526 52L77.029 52")
          }
          77.5% {
            d:path("M28 52L30.496 52L32.715 54.5L34.933 49.5L37.152 54.5L39.371 49.5L41.589 54.5L43.808 49.5L46.027 54.5L48.245 49.5L50.464 52L52.96 52M112 52L108.496 52L105.381 54.5L102.267 49.5L99.152 54.5L96.037 49.5L92.923 54.5L89.808 49.5L86.693 54.5L83.579 49.5L80.464 52L76.96 52")
          }
          78% {
            d:path("M28 52L30.49 52L32.703 54.5L34.916 49.5L37.129 54.5L39.342 49.5L41.555 54.5L43.768 49.5L45.981 54.5L48.194 49.5L50.407 52L52.897 52M112 52L108.49 52L105.369 54.5L102.249 49.5L99.129 54.5L96.009 49.5L92.888 54.5L89.768 49.5L86.648 54.5L83.527 49.5L80.407 52L76.897 52")
          }
          78.5% {
            d:path("M28 52L30.484 52L32.692 54.5L34.9 49.5L37.107 54.5L39.315 49.5L41.523 54.5L43.731 49.5L45.939 54.5L48.147 49.5L50.354 52L52.838 52M112 52L108.484 52L105.358 54.5L102.233 49.5L99.107 54.5L95.982 49.5L92.856 54.5L89.731 49.5L86.605 54.5L83.48 49.5L80.354 52L76.838 52")
          }
          79% {
            d:path("M28 52L30.479 52L32.682 54.5L34.885 49.5L37.088 54.5L39.291 49.5L41.494 54.5L43.697 49.5L45.9 54.5L48.103 49.5L50.307 52L52.785 52M112 52L108.479 52L105.348 54.5L102.218 49.5L99.088 54.5L95.958 49.5L92.827 54.5L89.697 49.5L86.567 54.5L83.437 49.5L80.307 52L76.785 52")
          }
          79.5% {
            d:path("M28 52L30.474 52L32.673 54.5L34.871 49.5L37.07 54.5L39.269 49.5L41.468 54.5L43.667 49.5L45.866 54.5L48.064 49.5L50.263 52L52.737 52M112 52L108.474 52L105.339 54.5L102.205 49.5L99.07 54.5L95.936 49.5L92.801 54.5L89.667 49.5L86.532 54.5L83.398 49.5L80.263 52L76.737 52")
          }
          80% {
            d:path("M28 52L30.469 52L32.664 54.5L34.859 49.5L37.054 54.5L39.249 49.5L41.444 54.5L43.639 49.5L45.834 54.5L48.029 49.5L50.225 52L52.694 52M112 52L108.469 52L105.331 54.5L102.193 49.5L99.054 54.5L95.916 49.5L92.778 54.5L89.639 49.5L86.501 54.5L83.363 49.5L80.225 52L76.694 52")
          }
          80.5% {
            d:path("M28 52L30.466 52L32.657 54.5L34.849 49.5L37.041 54.5L39.232 49.5L41.424 54.5L43.616 49.5L45.807 54.5L47.999 49.5L50.191 52L52.656 52M112 52L108.466 52L105.324 54.5L102.182 49.5L99.041 54.5L95.899 49.5L92.757 54.5L89.616 49.5L86.474 54.5L83.332 49.5L80.191 52L76.656 52")
          }
          81% {
            d:path("M28 52L30.462 52L32.651 54.5L34.84 49.5L37.029 54.5L39.217 49.5L41.406 54.5L43.595 49.5L45.784 54.5L47.973 49.5L50.161 52L52.624 52M112 52L108.462 52L105.318 54.5L102.173 49.5L99.029 54.5L95.884 49.5L92.74 54.5L89.595 49.5L86.45 54.5L83.306 49.5L80.161 52L76.624 52")
          }
          81.5% {
            d:path("M28 52L30.46 52L32.646 54.5L34.832 49.5L37.019 54.5L39.205 49.5L41.391 54.5L43.578 49.5L45.764 54.5L47.951 49.5L50.137 52L52.597 52M112 52L108.46 52L105.313 54.5L102.166 49.5L99.019 54.5L95.872 49.5L92.725 54.5L89.578 49.5L86.431 54.5L83.284 49.5L80.137 52L76.597 52")
          }
          82% {
            d:path("M28 52L30.457 52L32.642 54.5L34.826 49.5L37.011 54.5L39.195 49.5L41.38 54.5L43.564 49.5L45.748 54.5L47.933 49.5L50.117 52L52.575 52M112 52L108.457 52L105.309 54.5L102.16 49.5L99.011 54.5L95.862 49.5L92.713 54.5L89.564 49.5L86.415 54.5L83.266 49.5L80.117 52L76.575 52")
          }
          82.5% {
            d:path("M28 52L30.456 52L32.639 54.5L34.822 49.5L37.005 54.5L39.188 49.5L41.371 54.5L43.554 49.5L45.737 54.5L47.92 49.5L50.102 52L52.558 52M112 52L108.456 52L105.305 54.5L102.155 49.5L99.005 54.5L95.854 49.5L92.704 54.5L89.554 49.5L86.403 54.5L83.253 49.5L80.102 52L76.558 52")
          }
          83% {
            d:path("M28 52L30.455 52L32.637 54.5L34.819 49.5L37.001 54.5L39.183 49.5L41.365 54.5L43.547 49.5L45.729 54.5L47.911 49.5L50.092 52L52.547 52M112 52L108.455 52L105.303 54.5L102.152 49.5L99.001 54.5L95.849 49.5L92.698 54.5L89.547 49.5L86.395 54.5L83.244 49.5L80.092 52L76.547 52")
          }
          83.5% {
            d:path("M28 52L30.454 52L32.636 54.5L34.817 49.5L36.999 54.5L39.18 49.5L41.361 54.5L43.543 49.5L45.724 54.5L47.906 49.5L50.087 52L52.541 52M112 52L108.454 52L105.302 54.5L102.15 49.5L98.999 54.5L95.847 49.5L92.695 54.5L89.543 49.5L86.391 54.5L83.239 49.5L80.087 52L76.541 52")
          }
          84% {
            d:path("M28 52L30.454 52L32.636 54.5L34.817 49.5L36.998 54.5L39.18 49.5L41.361 54.5L43.543 49.5L45.724 54.5L47.906 49.5L50.087 52L52.541 52M112 52L108.454 52L105.302 54.5L102.15 49.5L98.998 54.5L95.847 49.5L92.695 54.5L89.543 49.5L86.391 54.5L83.239 49.5L80.087 52L76.541 52")
          }
          84.5% {
            d:path("M28 52L30.455 52L32.637 54.5L34.818 49.5L37.0 54.5L39.182 49.5L41.364 54.5L43.546 49.5L45.728 54.5L47.91 49.5L50.092 52L52.546 52M112 52L108.455 52L105.303 54.5L102.152 49.5L99.0 54.5L95.849 49.5L92.697 54.5L89.546 49.5L86.395 54.5L83.243 49.5L80.092 52L76.546 52")
          }
          85% {
            d:path("M28 52L30.456 52L32.638 54.5L34.821 49.5L37.004 54.5L39.187 49.5L41.37 54.5L43.553 49.5L45.735 54.5L47.918 49.5L50.101 52L52.557 52M112 52L108.456 52L105.305 54.5L102.155 49.5L99.004 54.5L95.854 49.5L92.703 54.5L89.553 49.5L86.402 54.5L83.252 49.5L80.101 52L76.557 52")
          }
          85.5% {
            d:path("M28 52L30.457 52L32.641 54.5L34.826 49.5L37.01 54.5L39.194 49.5L41.378 54.5L43.563 49.5L45.747 54.5L47.931 49.5L50.115 52L52.573 52M112 52L108.457 52L105.308 54.5L102.159 49.5L99.01 54.5L95.861 49.5L92.712 54.5L89.563 49.5L86.413 54.5L83.264 49.5L80.115 52L76.573 52")
          }
          86% {
            d:path("M28 52L30.459 52L32.645 54.5L34.832 49.5L37.018 54.5L39.204 49.5L41.39 54.5L43.576 49.5L45.762 54.5L47.948 49.5L50.134 52L52.594 52M112 52L108.459 52L105.312 54.5L102.165 49.5L99.018 54.5L95.87 49.5L92.723 54.5L89.576 49.5L86.429 54.5L83.282 49.5L80.134 52L76.594 52")
          }
          86.5% {
            d:path("M28 52L30.462 52L32.65 54.5L34.839 49.5L37.027 54.5L39.216 49.5L41.404 54.5L43.593 49.5L45.781 54.5L47.97 49.5L50.158 52L52.62 52M112 52L108.462 52L105.317 54.5L102.172 49.5L99.027 54.5L95.883 49.5L92.738 54.5L89.593 49.5L86.448 54.5L83.303 49.5L80.158 52L76.62 52")
          }
          87% {
            d:path("M28 52L30.465 52L32.656 54.5L34.848 49.5L37.039 54.5L39.23 49.5L41.422 54.5L43.613 49.5L45.804 54.5L47.996 49.5L50.187 52L52.652 52M112 52L108.465 52L105.323 54.5L102.181 49.5L99.039 54.5L95.897 49.5L92.755 54.5L89.613 49.5L86.471 54.5L83.329 49.5L80.187 52L76.652 52")
          }
          87.5% {
            d:path("M28 52L30.469 52L32.663 54.5L34.858 49.5L37.053 54.5L39.247 49.5L41.442 54.5L43.636 49.5L45.831 54.5L48.026 49.5L50.22 52L52.689 52M112 52L108.469 52L105.33 54.5L102.191 49.5L99.053 54.5L95.914 49.5L92.775 54.5L89.636 49.5L86.498 54.5L83.359 49.5L80.22 52L76.689 52")
          }
          88% {
            d:path("M28 52L30.473 52L32.671 54.5L34.87 49.5L37.068 54.5L39.267 49.5L41.465 54.5L43.663 49.5L45.862 54.5L48.06 49.5L50.258 52L52.731 52M112 52L108.473 52L105.338 54.5L102.203 49.5L99.068 54.5L95.933 49.5L92.798 54.5L89.663 49.5L86.528 54.5L83.393 49.5L80.258 52L76.731 52")
          }
          88.5% {
            d:path("M28 52L30.478 52L32.68 54.5L34.883 49.5L37.086 54.5L39.288 49.5L41.491 54.5L43.693 49.5L45.896 54.5L48.099 49.5L50.301 52L52.779 52M112 52L108.478 52L105.347 54.5L102.216 49.5L99.086 54.5L95.955 49.5L92.824 54.5L89.693 49.5L86.563 54.5L83.432 49.5L80.301 52L76.779 52")
          }
          89% {
            d:path("M28 52L30.483 52L32.69 54.5L34.898 49.5L37.105 54.5L39.312 49.5L41.519 54.5L43.727 49.5L45.934 54.5L48.141 49.5L50.349 52L52.832 52M112 52L108.483 52L105.357 54.5L102.231 49.5L99.105 54.5L95.979 49.5L92.853 54.5L89.727 49.5L86.601 54.5L83.475 49.5L80.349 52L76.832 52")
          }
          89.5% {
            d:path("M28 52L30.489 52L32.701 54.5L34.914 49.5L37.126 54.5L39.339 49.5L41.551 54.5L43.763 49.5L45.976 54.5L48.188 49.5L50.401 52L52.889 52M112 52L108.489 52L105.368 54.5L102.247 49.5L99.126 54.5L96.005 49.5L92.884 54.5L89.763 49.5L86.642 54.5L83.521 49.5L80.401 52L76.889 52")
          }
          90% {
            d:path("M28 52L30.495 52L32.713 54.5L34.931 49.5L37.149 54.5L39.367 49.5L41.585 54.5L43.803 49.5L46.021 54.5L48.239 49.5L50.457 52L52.952 52M112 52L108.495 52L105.38 54.5L102.265 49.5L99.149 54.5L96.034 49.5L92.918 54.5L89.803 49.5L86.688 54.5L83.572 49.5L80.457 52L76.952 52")
          }
          90.5% {
            d:path("M28 52L30.502 52L32.726 54.5L34.95 49.5L37.174 54.5L39.398 49.5L41.622 54.5L43.846 49.5L46.07 54.5L48.294 49.5L50.518 52L53.02 52M112 52L108.502 52L105.393 54.5L102.283 49.5L99.174 54.5L96.065 49.5L92.955 54.5L89.846 49.5L86.737 54.5L83.627 49.5L80.518 52L77.02 52")
          }
          91% {
            d:path("M28 52L30.509 52L32.74 54.5L34.97 49.5L37.201 54.5L39.431 49.5L41.662 54.5L43.892 49.5L46.123 54.5L48.353 49.5L50.584 52L53.093 52M112 52L108.509 52L105.406 54.5L102.304 49.5L99.201 54.5L96.098 49.5L92.995 54.5L89.892 49.5L86.789 54.5L83.686 49.5L80.584 52L77.093 52")
          }
          91.5% {
            d:path("M28 52L30.517 52L32.754 54.5L34.992 49.5L37.229 54.5L39.467 49.5L41.704 54.5L43.941 49.5L46.179 54.5L48.416 49.5L50.653 52L53.17 52M112 52L108.517 52L105.421 54.5L102.325 49.5L99.229 54.5L96.133 49.5L93.037 54.5L89.941 49.5L86.845 54.5L83.749 49.5L80.653 52L77.17 52")
          }
          92% {
            d:path("M28 52L30.525 52L32.77 54.5L35.015 49.5L37.259 54.5L39.504 49.5L41.749 54.5L43.993 49.5L46.238 54.5L48.483 49.5L50.727 52L53.253 52M112 52L108.525 52L105.437 54.5L102.348 49.5L99.259 54.5L96.171 49.5L93.082 54.5L89.993 49.5L86.905 54.5L83.816 49.5L80.727 52L77.253 52")
          }
          92.5% {
            d:path("M28 52L30.534 52L32.786 54.5L35.039 49.5L37.291 54.5L39.544 49.5L41.796 54.5L44.049 49.5L46.301 54.5L48.553 49.5L50.806 52L53.34 52M112 52L108.534 52L105.453 54.5L102.372 49.5L99.291 54.5L96.21 49.5L93.129 54.5L90.049 49.5L86.968 54.5L83.887 49.5L80.806 52L77.34 52")
          }
          93% {
            d:path("M28 52L30.543 52L32.804 54.5L35.064 49.5L37.325 54.5L39.585 49.5L41.846 54.5L44.107 49.5L46.367 54.5L48.628 49.5L50.888 52L53.431 52M112 52L108.543 52L105.47 54.5L102.398 49.5L99.325 54.5L96.252 49.5L93.179 54.5L90.107 49.5L87.034 54.5L83.961 49.5L80.888 52L77.431 52")
          }
          93.5% {
            d:path("M28 52L30.553 52L32.822 54.5L35.091 49.5L37.36 54.5L39.629 49.5L41.898 54.5L44.167 49.5L46.437 54.5L48.706 49.5L50.975 52L53.528 52M112 52L108.553 52L105.489 54.5L102.424 49.5L99.36 54.5L96.296 49.5L93.232 54.5L90.167 49.5L87.103 54.5L84.039 49.5L80.975 52L77.528 52")
          }
          94% {
            d:path("M28 52L30.563 52L32.841 54.5L35.119 49.5L37.397 54.5L39.675 49.5L41.953 54.5L44.231 49.5L46.509 54.5L48.787 49.5L51.065 52L53.628 52M112 52L108.563 52L105.508 54.5L102.452 49.5L99.397 54.5L96.342 49.5L93.286 54.5L90.231 49.5L87.176 54.5L84.121 49.5L81.065 52L77.628 52")
          }
          94.5% {
            d:path("M28 52L30.573 52L32.861 54.5L35.148 49.5L37.435 54.5L39.723 49.5L42.01 54.5L44.298 49.5L46.585 54.5L48.872 49.5L51.16 52L53.733 52M112 52L108.573 52L105.527 54.5L102.481 49.5L99.435 54.5L96.389 49.5L93.344 54.5L90.298 49.5L87.252 54.5L84.206 49.5L81.16 52L77.733 52")
          }
          95% {
            d:path("M28 52L30.584 52L32.881 54.5L35.178 49.5L37.475 54.5L39.772 49.5L42.07 54.5L44.367 49.5L46.664 54.5L48.961 49.5L51.258 52L53.842 52M112 52L108.584 52L105.548 54.5L102.512 49.5L99.475 54.5L96.439 49.5L93.403 54.5L90.367 49.5L87.33 54.5L84.294 49.5L81.258 52L77.842 52")
          }
          95.5% {
            d:path("M28 52L30.596 52L32.903 54.5L35.21 49.5L37.517 54.5L39.824 49.5L42.131 54.5L44.438 49.5L46.745 54.5L49.053 49.5L51.36 52L53.955 52M112 52L108.596 52L105.569 54.5L102.543 49.5L99.517 54.5L96.491 49.5L93.465 54.5L90.438 49.5L87.412 54.5L84.386 49.5L81.36 52L77.955 52")
          }
          96% {
            d:path("M28 52L30.607 52L32.925 54.5L35.242 49.5L37.56 54.5L39.877 49.5L42.195 54.5L44.513 49.5L46.83 54.5L49.148 49.5L51.465 52L54.072 52M112 52L108.607 52L105.591 54.5L102.576 49.5L99.56 54.5L96.544 49.5L93.528 54.5L90.513 49.5L87.497 54.5L84.481 49.5L81.465 52L78.072 52")
          }
          96.5% {
            d:path("M28 52L30.619 52L32.948 54.5L35.276 49.5L37.604 54.5L39.933 49.5L42.261 54.5L44.589 49.5L46.917 54.5L49.246 49.5L51.574 52L54.193 52M112 52L108.619 52L105.614 54.5L102.609 49.5L99.604 54.5L96.599 49.5L93.594 54.5L90.589 49.5L87.584 54.5L84.579 49.5L81.574 52L78.193 52")
          }
          97% {
            d:path("M28 52L30.632 52L32.971 54.5L35.311 49.5L37.65 54.5L39.989 49.5L42.329 54.5L44.668 49.5L47.008 54.5L49.347 49.5L51.686 52L54.318 52M112 52L108.632 52L105.638 54.5L102.644 49.5L99.65 54.5L96.656 49.5L93.662 54.5L90.668 49.5L87.674 54.5L84.68 49.5L81.686 52L78.318 52")
          }
          97.5% {
            d:path("M28 52L30.645 52L32.995 54.5L35.346 49.5L37.697 54.5L40.048 49.5L42.399 54.5L44.75 49.5L47.1 54.5L49.451 49.5L51.802 52L54.447 52M112 52L108.645 52L105.662 54.5L102.68 49.5L99.697 54.5L96.715 49.5L93.732 54.5L90.75 49.5L87.767 54.5L84.785 49.5L81.802 52L78.447 52")
          }
          98% {
            d:path("M28 52L30.658 52L33.02 54.5L35.383 49.5L37.745 54.5L40.108 49.5L42.471 54.5L44.833 49.5L47.196 54.5L49.558 49.5L51.921 52L54.579 52M112 52L108.658 52L105.687 54.5L102.716 49.5L99.745 54.5L96.775 49.5L93.804 54.5L90.833 49.5L87.862 54.5L84.892 49.5L81.921 52L78.579 52")
          }
          98.5% {
            d:path("M28 52L30.671 52L33.046 54.5L35.421 49.5L37.795 54.5L40.17 49.5L42.544 54.5L44.919 49.5L47.293 54.5L49.668 49.5L52.043 52L54.714 52M112 52L108.671 52L105.713 54.5L102.754 49.5L99.795 54.5L96.836 49.5L93.878 54.5L90.919 49.5L87.96 54.5L85.001 49.5L82.043 52L78.714 52")
          }
          99% {
            d:path("M28 52L30.685 52L33.072 54.5L35.459 49.5L37.846 54.5L40.233 49.5L42.62 54.5L45.007 49.5L47.393 54.5L49.78 49.5L52.167 52L54.852 52M112 52L108.685 52L105.739 54.5L102.792 49.5L99.846 54.5L96.899 49.5L93.953 54.5L91.007 49.5L88.06 54.5L85.114 49.5L82.167 52L78.852 52")
          }
          99.5% {
            d:path("M28 52L30.699 52L33.099 54.5L35.498 49.5L37.898 54.5L40.297 49.5L42.697 54.5L45.096 49.5L47.496 54.5L49.895 49.5L52.295 52L54.994 52M112 52L108.699 52L105.766 54.5L102.832 49.5L99.898 54.5L96.964 49.5L94.03 54.5L91.096 49.5L88.162 54.5L85.229 49.5L82.295 52L78.994 52")
          }
          100% {
            d:path("M28 52L30.714 52L33.126 54.5L35.539 49.5L37.951 54.5L40.363 49.5L42.776 54.5L45.188 49.5L47.6 54.5L50.013 49.5L52.425 52L55.139 52M112 52L108.714 52L105.793 54.5L102.872 49.5L99.951 54.5L97.03 49.5L94.109 54.5L91.188 49.5L88.267 54.5L85.346 49.5L82.425 52L79.139 52")
          }
        }
        @keyframes mems-acceleration {
          0% {
            d:path("M70 14H70M70 14L70 14L70 14")
          }
          0.5% {
            d:path("M70 14H69.497M70 13.497L69.497 14L70 14.503")
          }
          1% {
            d:path("M70 14H68.995M70 12.995L68.995 14L70 15.005")
          }
          1.5% {
            d:path("M70 14H68.494M70 12.494L68.494 14L70 15.506")
          }
          2% {
            d:path("M70 14H67.995M70 11.995L67.995 14L70 16.005")
          }
          2.5% {
            d:path("M70 14H67.497M70 11.497L67.497 14L70 16.503")
          }
          3% {
            d:path("M70 14H67.002M70 11.002L67.002 14L70 16.998")
          }
          3.5% {
            d:path("M70 14H66.51M69.51 11L66.51 14L69.51 17")
          }
          4% {
            d:path("M70 14H66.021M69.021 11L66.021 14L69.021 17")
          }
          4.5% {
            d:path("M70 14H65.536M68.536 11L65.536 14L68.536 17")
          }
          5% {
            d:path("M70 14H65.056M68.056 11L65.056 14L68.056 17")
          }
          5.5% {
            d:path("M70 14H64.58M67.58 11L64.58 14L67.58 17")
          }
          6% {
            d:path("M70 14H64.11M67.11 11L64.11 14L67.11 17")
          }
          6.5% {
            d:path("M70 14H63.646M66.646 11L63.646 14L66.646 17")
          }
          7.0% {
            d:path("M70 14H63.188M66.188 11L63.188 14L66.188 17")
          }
          7.5% {
            d:path("M70 14H62.736M65.736 11L62.736 14L65.736 17")
          }
          8% {
            d:path("M70 14H62.292M65.292 11L62.292 14L65.292 17")
          }
          8.5% {
            d:path("M70 14H61.855M64.855 11L61.855 14L64.855 17")
          }
          9% {
            d:path("M70 14H61.427M64.427 11L61.427 14L64.427 17")
          }
          9.5% {
            d:path("M70 14H61.007M64.007 11L61.007 14L64.007 17")
          }
          10% {
            d:path("M70 14H60.595M63.595 11L60.595 14L63.595 17")
          }
          10.5% {
            d:path("M70 14H60.193M63.193 11L60.193 14L63.193 17")
          }
          11% {
            d:path("M70 14H59.801M62.801 11L59.801 14L62.801 17")
          }
          11.5% {
            d:path("M70 14H59.419M62.419 11L59.419 14L62.419 17")
          }
          12% {
            d:path("M70 14H59.047M62.047 11L59.047 14L62.047 17")
          }
          12.5% {
            d:path("M70 14H58.686M61.686 11L58.686 14L61.686 17")
          }
          13% {
            d:path("M70 14H58.337M61.337 11L58.337 14L61.337 17")
          }
          13.5% {
            d:path("M70 14H57.998M60.998 11L57.998 14L60.998 17")
          }
          14.0% {
            d:path("M70 14H57.672M60.672 11L57.672 14L60.672 17")
          }
          14.5% {
            d:path("M70 14H57.358M60.358 11L57.358 14L60.358 17")
          }
          15% {
            d:path("M70 14H57.056M60.056 11L57.056 14L60.056 17")
          }
          15.5% {
            d:path("M70 14H56.767M59.767 11L56.767 14L59.767 17")
          }
          16% {
            d:path("M70 14H56.491M59.491 11L56.491 14L59.491 17")
          }
          16.5% {
            d:path("M70 14H56.228M59.228 11L56.228 14L59.228 17")
          }
          17% {
            d:path("M70 14H55.979M58.979 11L55.979 14L58.979 17")
          }
          17.5% {
            d:path("M70 14H55.744M58.744 11L55.744 14L58.744 17")
          }
          18% {
            d:path("M70 14H55.523M58.523 11L55.523 14L58.523 17")
          }
          18.5% {
            d:path("M70 14H55.316M58.316 11L55.316 14L58.316 17")
          }
          19% {
            d:path("M70 14H55.124M58.124 11L55.124 14L58.124 17")
          }
          19.5% {
            d:path("M70 14H54.946M57.946 11L54.946 14L57.946 17")
          }
          20% {
            d:path("M70 14H54.783M57.783 11L54.783 14L57.783 17")
          }
          20.5% {
            d:path("M70 14H54.635M57.635 11L54.635 14L57.635 17")
          }
          21% {
            d:path("M70 14H54.503M57.503 11L54.503 14L57.503 17")
          }
          21.5% {
            d:path("M70 14H54.385M57.385 11L54.385 14L57.385 17")
          }
          22% {
            d:path("M70 14H54.283M57.283 11L54.283 14L57.283 17")
          }
          22.5% {
            d:path("M70 14H54.197M57.197 11L54.197 14L57.197 17")
          }
          23% {
            d:path("M70 14H54.126M57.126 11L54.126 14L57.126 17")
          }
          23.5% {
            d:path("M70 14H54.071M57.071 11L54.071 14L57.071 17")
          }
          24% {
            d:path("M70 14H54.032M57.032 11L54.032 14L57.032 17")
          }
          24.5% {
            d:path("M70 14H54.008M57.008 11L54.008 14L57.008 17")
          }
          25% {
            d:path("M70 14H54M57 11L54 14L57 17")
          }
          25.5% {
            d:path("M70 14H54.008M57.008 11L54.008 14L57.008 17")
          }
          26% {
            d:path("M70 14H54.032M57.032 11L54.032 14L57.032 17")
          }
          26.5% {
            d:path("M70 14H54.071M57.071 11L54.071 14L57.071 17")
          }
          27% {
            d:path("M70 14H54.126M57.126 11L54.126 14L57.126 17")
          }
          27.5% {
            d:path("M70 14H54.197M57.197 11L54.197 14L57.197 17")
          }
          28.0% {
            d:path("M70 14H54.283M57.283 11L54.283 14L57.283 17")
          }
          28.5% {
            d:path("M70 14H54.385M57.385 11L54.385 14L57.385 17")
          }
          29.0% {
            d:path("M70 14H54.503M57.503 11L54.503 14L57.503 17")
          }
          29.5% {
            d:path("M70 14H54.635M57.635 11L54.635 14L57.635 17")
          }
          30% {
            d:path("M70 14H54.783M57.783 11L54.783 14L57.783 17")
          }
          30.5% {
            d:path("M70 14H54.946M57.946 11L54.946 14L57.946 17")
          }
          31% {
            d:path("M70 14H55.124M58.124 11L55.124 14L58.124 17")
          }
          31.5% {
            d:path("M70 14H55.316M58.316 11L55.316 14L58.316 17")
          }
          32% {
            d:path("M70 14H55.523M58.523 11L55.523 14L58.523 17")
          }
          32.5% {
            d:path("M70 14H55.744M58.744 11L55.744 14L58.744 17")
          }
          33% {
            d:path("M70 14H55.979M58.979 11L55.979 14L58.979 17")
          }
          33.5% {
            d:path("M70 14H56.228M59.228 11L56.228 14L59.228 17")
          }
          34% {
            d:path("M70 14H56.491M59.491 11L56.491 14L59.491 17")
          }
          34.5% {
            d:path("M70 14H56.767M59.767 11L56.767 14L59.767 17")
          }
          35% {
            d:path("M70 14H57.056M60.056 11L57.056 14L60.056 17")
          }
          35.5% {
            d:path("M70 14H57.358M60.358 11L57.358 14L60.358 17")
          }
          36% {
            d:path("M70 14H57.672M60.672 11L57.672 14L60.672 17")
          }
          36.5% {
            d:path("M70 14H57.998M60.998 11L57.998 14L60.998 17")
          }
          37% {
            d:path("M70 14H58.337M61.337 11L58.337 14L61.337 17")
          }
          37.5% {
            d:path("M70 14H58.686M61.686 11L58.686 14L61.686 17")
          }
          38% {
            d:path("M70 14H59.047M62.047 11L59.047 14L62.047 17")
          }
          38.5% {
            d:path("M70 14H59.419M62.419 11L59.419 14L62.419 17")
          }
          39% {
            d:path("M70 14H59.801M62.801 11L59.801 14L62.801 17")
          }
          39.5% {
            d:path("M70 14H60.193M63.193 11L60.193 14L63.193 17")
          }
          40% {
            d:path("M70 14H60.595M63.595 11L60.595 14L63.595 17")
          }
          40.5% {
            d:path("M70 14H61.007M64.007 11L61.007 14L64.007 17")
          }
          41% {
            d:path("M70 14H61.427M64.427 11L61.427 14L64.427 17")
          }
          41.5% {
            d:path("M70 14H61.855M64.855 11L61.855 14L64.855 17")
          }
          42% {
            d:path("M70 14H62.292M65.292 11L62.292 14L65.292 17")
          }
          42.5% {
            d:path("M70 14H62.736M65.736 11L62.736 14L65.736 17")
          }
          43% {
            d:path("M70 14H63.188M66.188 11L63.188 14L66.188 17")
          }
          43.5% {
            d:path("M70 14H63.646M66.646 11L63.646 14L66.646 17")
          }
          44% {
            d:path("M70 14H64.11M67.11 11L64.11 14L67.11 17")
          }
          44.5% {
            d:path("M70 14H64.58M67.58 11L64.58 14L67.58 17")
          }
          45% {
            d:path("M70 14H65.056M68.056 11L65.056 14L68.056 17")
          }
          45.5% {
            d:path("M70 14H65.536M68.536 11L65.536 14L68.536 17")
          }
          46% {
            d:path("M70 14H66.021M69.021 11L66.021 14L69.021 17")
          }
          46.5% {
            d:path("M70 14H66.51M69.51 11L66.51 14L69.51 17")
          }
          47% {
            d:path("M70 14H67.002M70 11.002L67.002 14L70 16.998")
          }
          47.5% {
            d:path("M70 14H67.497M70 11.497L67.497 14L70 16.503")
          }
          48% {
            d:path("M70 14H67.995M70 11.995L67.995 14L70 16.005")
          }
          48.5% {
            d:path("M70 14H68.494M70 12.494L68.494 14L70 15.506")
          }
          49% {
            d:path("M70 14H68.995M70 12.995L68.995 14L70 15.005")
          }
          49.5% {
            d:path("M70 14H69.497M70 13.497L69.497 14L70 14.503")
          }
          50% {
            d:path("M70 14H70M70 14L70 14L70 14")
          }
          50.5% {
            d:path("M70 14H70.503M70 13.497L70.503 14L70 14.503")
          }
          51% {
            d:path("M70 14H71.005M70 12.995L71.005 14L70 15.005")
          }
          51.5% {
            d:path("M70 14H71.506M70 12.494L71.506 14L70 15.506")
          }
          52% {
            d:path("M70 14H72.005M70 11.995L72.005 14L70 16.005")
          }
          52.5% {
            d:path("M70 14H72.503M70 11.497L72.503 14L70 16.503")
          }
          53% {
            d:path("M70 14H72.998M70 11.002L72.998 14L70 16.998")
          }
          53.5% {
            d:path("M70 14H73.49M70.49 11L73.49 14L70.49 17")
          }
          54% {
            d:path("M70 14H73.979M70.979 11L73.979 14L70.979 17")
          }
          54.5% {
            d:path("M70 14H74.464M71.464 11L74.464 14L71.464 17")
          }
          55.0% {
            d:path("M70 14H74.944M71.944 11L74.944 14L71.944 17")
          }
          55.5% {
            d:path("M70 14H75.42M72.42 11L75.42 14L72.42 17")
          }
          56.0% {
            d:path("M70 14H75.89M72.89 11L75.89 14L72.89 17")
          }
          56.5% {
            d:path("M70 14H76.354M73.354 11L76.354 14L73.354 17")
          }
          57.0% {
            d:path("M70 14H76.812M73.812 11L76.812 14L73.812 17")
          }
          57.5% {
            d:path("M70 14H77.264M74.264 11L77.264 14L74.264 17")
          }
          58.0% {
            d:path("M70 14H77.708M74.708 11L77.708 14L74.708 17")
          }
          58.5% {
            d:path("M70 14H78.145M75.145 11L78.145 14L75.145 17")
          }
          59% {
            d:path("M70 14H78.573M75.573 11L78.573 14L75.573 17")
          }
          59.5% {
            d:path("M70 14H78.993M75.993 11L78.993 14L75.993 17")
          }
          60% {
            d:path("M70 14H79.405M76.405 11L79.405 14L76.405 17")
          }
          60.5% {
            d:path("M70 14H79.807M76.807 11L79.807 14L76.807 17")
          }
          61% {
            d:path("M70 14H80.199M77.199 11L80.199 14L77.199 17")
          }
          61.5% {
            d:path("M70 14H80.581M77.581 11L80.581 14L77.581 17")
          }
          62% {
            d:path("M70 14H80.953M77.953 11L80.953 14L77.953 17")
          }
          62.5% {
            d:path("M70 14H81.314M78.314 11L81.314 14L78.314 17")
          }
          63% {
            d:path("M70 14H81.663M78.663 11L81.663 14L78.663 17")
          }
          63.5% {
            d:path("M70 14H82.002M79.002 11L82.002 14L79.002 17")
          }
          64% {
            d:path("M70 14H82.328M79.328 11L82.328 14L79.328 17")
          }
          64.5% {
            d:path("M70 14H82.642M79.642 11L82.642 14L79.642 17")
          }
          65% {
            d:path("M70 14H82.944M79.944 11L82.944 14L79.944 17")
          }
          65.5% {
            d:path("M70 14H83.233M80.233 11L83.233 14L80.233 17")
          }
          66% {
            d:path("M70 14H83.509M80.509 11L83.509 14L80.509 17")
          }
          66.5% {
            d:path("M70 14H83.772M80.772 11L83.772 14L80.772 17")
          }
          67% {
            d:path("M70 14H84.021M81.021 11L84.021 14L81.021 17")
          }
          67.5% {
            d:path("M70 14H84.256M81.256 11L84.256 14L81.256 17")
          }
          68% {
            d:path("M70 14H84.477M81.477 11L84.477 14L81.477 17")
          }
          68.5% {
            d:path("M70 14H84.684M81.684 11L84.684 14L81.684 17")
          }
          69% {
            d:path("M70 14H84.876M81.876 11L84.876 14L81.876 17")
          }
          69.5% {
            d:path("M70 14H85.054M82.054 11L85.054 14L82.054 17")
          }
          70% {
            d:path("M70 14H85.217M82.217 11L85.217 14L82.217 17")
          }
          70.5% {
            d:path("M70 14H85.365M82.365 11L85.365 14L82.365 17")
          }
          71% {
            d:path("M70 14H85.497M82.497 11L85.497 14L82.497 17")
          }
          71.5% {
            d:path("M70 14H85.615M82.615 11L85.615 14L82.615 17")
          }
          72% {
            d:path("M70 14H85.717M82.717 11L85.717 14L82.717 17")
          }
          72.5% {
            d:path("M70 14H85.803M82.803 11L85.803 14L82.803 17")
          }
          73% {
            d:path("M70 14H85.874M82.874 11L85.874 14L82.874 17")
          }
          73.5% {
            d:path("M70 14H85.929M82.929 11L85.929 14L82.929 17")
          }
          74% {
            d:path("M70 14H85.968M82.968 11L85.968 14L82.968 17")
          }
          74.5% {
            d:path("M70 14H85.992M82.992 11L85.992 14L82.992 17")
          }
          75% {
            d:path("M70 14H86M83 11L86 14L83 17")
          }
          75.5% {
            d:path("M70 14H85.992M82.992 11L85.992 14L82.992 17")
          }
          76% {
            d:path("M70 14H85.968M82.968 11L85.968 14L82.968 17")
          }
          76.5% {
            d:path("M70 14H85.929M82.929 11L85.929 14L82.929 17")
          }
          77% {
            d:path("M70 14H85.874M82.874 11L85.874 14L82.874 17")
          }
          77.5% {
            d:path("M70 14H85.803M82.803 11L85.803 14L82.803 17")
          }
          78% {
            d:path("M70 14H85.717M82.717 11L85.717 14L82.717 17")
          }
          78.5% {
            d:path("M70 14H85.615M82.615 11L85.615 14L82.615 17")
          }
          79% {
            d:path("M70 14H85.497M82.497 11L85.497 14L82.497 17")
          }
          79.5% {
            d:path("M70 14H85.365M82.365 11L85.365 14L82.365 17")
          }
          80% {
            d:path("M70 14H85.217M82.217 11L85.217 14L82.217 17")
          }
          80.5% {
            d:path("M70 14H85.054M82.054 11L85.054 14L82.054 17")
          }
          81% {
            d:path("M70 14H84.876M81.876 11L84.876 14L81.876 17")
          }
          81.5% {
            d:path("M70 14H84.684M81.684 11L84.684 14L81.684 17")
          }
          82% {
            d:path("M70 14H84.477M81.477 11L84.477 14L81.477 17")
          }
          82.5% {
            d:path("M70 14H84.256M81.256 11L84.256 14L81.256 17")
          }
          83% {
            d:path("M70 14H84.021M81.021 11L84.021 14L81.021 17")
          }
          83.5% {
            d:path("M70 14H83.772M80.772 11L83.772 14L80.772 17")
          }
          84% {
            d:path("M70 14H83.509M80.509 11L83.509 14L80.509 17")
          }
          84.5% {
            d:path("M70 14H83.233M80.233 11L83.233 14L80.233 17")
          }
          85% {
            d:path("M70 14H82.944M79.944 11L82.944 14L79.944 17")
          }
          85.5% {
            d:path("M70 14H82.642M79.642 11L82.642 14L79.642 17")
          }
          86% {
            d:path("M70 14H82.328M79.328 11L82.328 14L79.328 17")
          }
          86.5% {
            d:path("M70 14H82.002M79.002 11L82.002 14L79.002 17")
          }
          87% {
            d:path("M70 14H81.663M78.663 11L81.663 14L78.663 17")
          }
          87.5% {
            d:path("M70 14H81.314M78.314 11L81.314 14L78.314 17")
          }
          88% {
            d:path("M70 14H80.953M77.953 11L80.953 14L77.953 17")
          }
          88.5% {
            d:path("M70 14H80.581M77.581 11L80.581 14L77.581 17")
          }
          89% {
            d:path("M70 14H80.199M77.199 11L80.199 14L77.199 17")
          }
          89.5% {
            d:path("M70 14H79.807M76.807 11L79.807 14L76.807 17")
          }
          90% {
            d:path("M70 14H79.405M76.405 11L79.405 14L76.405 17")
          }
          90.5% {
            d:path("M70 14H78.993M75.993 11L78.993 14L75.993 17")
          }
          91% {
            d:path("M70 14H78.573M75.573 11L78.573 14L75.573 17")
          }
          91.5% {
            d:path("M70 14H78.145M75.145 11L78.145 14L75.145 17")
          }
          92% {
            d:path("M70 14H77.708M74.708 11L77.708 14L74.708 17")
          }
          92.5% {
            d:path("M70 14H77.264M74.264 11L77.264 14L74.264 17")
          }
          93% {
            d:path("M70 14H76.812M73.812 11L76.812 14L73.812 17")
          }
          93.5% {
            d:path("M70 14H76.354M73.354 11L76.354 14L73.354 17")
          }
          94% {
            d:path("M70 14H75.89M72.89 11L75.89 14L72.89 17")
          }
          94.5% {
            d:path("M70 14H75.42M72.42 11L75.42 14L72.42 17")
          }
          95% {
            d:path("M70 14H74.944M71.944 11L74.944 14L71.944 17")
          }
          95.5% {
            d:path("M70 14H74.464M71.464 11L74.464 14L71.464 17")
          }
          96% {
            d:path("M70 14H73.979M70.979 11L73.979 14L70.979 17")
          }
          96.5% {
            d:path("M70 14H73.49M70.49 11L73.49 14L70.49 17")
          }
          97% {
            d:path("M70 14H72.998M70 11.002L72.998 14L70 16.998")
          }
          97.5% {
            d:path("M70 14H72.503M70 11.497L72.503 14L70 16.503")
          }
          98% {
            d:path("M70 14H72.005M70 11.995L72.005 14L70 16.005")
          }
          98.5% {
            d:path("M70 14H71.506M70 12.494L71.506 14L70 15.506")
          }
          99% {
            d:path("M70 14H71.005M70 12.995L71.005 14L70 15.005")
          }
          99.5% {
            d:path("M70 14H70.503M70 13.497L70.503 14L70 14.503")
          }
          100% {
            d:path("M70 14H70M70 14L70 14L70 14")
          }
        }
        @keyframes mems-output {
          0% {
            d:path("M70 116H61.416M64.416 113L61.416 116L64.416 119")
          }
          0.5% {
            d:path("M70 116H61.859M64.859 113L61.859 116L64.859 119")
          }
          1% {
            d:path("M70 116H62.309M65.309 113L62.309 116L65.309 119")
          }
          1.5% {
            d:path("M70 116H62.767M65.767 113L62.767 116L65.767 119")
          }
          2% {
            d:path("M70 116H63.232M66.232 113L63.232 116L66.232 119")
          }
          2.5% {
            d:path("M70 116H63.704M66.704 113L63.704 116L66.704 119")
          }
          3% {
            d:path("M70 116H64.182M67.182 113L64.182 116L67.182 119")
          }
          3.5% {
            d:path("M70 116H64.666M67.666 113L64.666 116L67.666 119")
          }
          4% {
            d:path("M70 116H65.155M68.155 113L65.155 116L68.155 119")
          }
          4.5% {
            d:path("M70 116H65.649M68.649 113L65.649 116L68.649 119")
          }
          5% {
            d:path("M70 116H66.147M69.147 113L66.147 116L69.147 119")
          }
          5.5% {
            d:path("M70 116H66.649M69.649 113L66.649 116L69.649 119")
          }
          6% {
            d:path("M70 116H67.154M70 113.154L67.154 116L70 118.846")
          }
          6.5% {
            d:path("M70 116H67.662M70 113.662L67.662 116L70 118.338")
          }
          7.0% {
            d:path("M70 116H68.172M70 114.172L68.172 116L70 117.828")
          }
          7.5% {
            d:path("M70 116H68.684M70 114.684L68.684 116L70 117.316")
          }
          8% {
            d:path("M70 116H69.198M70 115.198L69.198 116L70 116.802")
          }
          8.5% {
            d:path("M70 116H69.712M70 115.712L69.712 116L70 116.288")
          }
          9% {
            d:path("M70 116H70.227M70 115.773L70.227 116L70 116.227")
          }
          9.5% {
            d:path("M70 116H70.741M70 115.259L70.741 116L70 116.741")
          }
          10% {
            d:path("M70 116H71.254M70 114.746L71.254 116L70 117.254")
          }
          10.5% {
            d:path("M70 116H71.767M70 114.233L71.767 116L70 117.767")
          }
          11% {
            d:path("M70 116H72.277M70 113.723L72.277 116L70 118.277")
          }
          11.5% {
            d:path("M70 116H72.786M70 113.214L72.786 116L70 118.786")
          }
          12% {
            d:path("M70 116H73.291M70.291 113L73.291 116L70.291 119")
          }
          12.5% {
            d:path("M70 116H73.793M70.793 113L73.793 116L70.793 119")
          }
          13% {
            d:path("M70 116H74.292M71.292 113L74.292 116L71.292 119")
          }
          13.5% {
            d:path("M70 116H74.786M71.786 113L74.786 116L71.786 119")
          }
          14.0% {
            d:path("M70 116H75.276M72.276 113L75.276 116L72.276 119")
          }
          14.5% {
            d:path("M70 116H75.76M72.76 113L75.76 116L72.76 119")
          }
          15% {
            d:path("M70 116H76.239M73.239 113L76.239 116L73.239 119")
          }
          15.5% {
            d:path("M70 116H76.712M73.712 113L76.712 116L73.712 119")
          }
          16% {
            d:path("M70 116H77.178M74.178 113L77.178 116L74.178 119")
          }
          16.5% {
            d:path("M70 116H77.637M74.637 113L77.637 116L74.637 119")
          }
          17% {
            d:path("M70 116H78.088M75.088 113L78.088 116L75.088 119")
          }
          17.5% {
            d:path("M70 116H78.531M75.531 113L78.531 116L75.531 119")
          }
          18% {
            d:path("M70 116H78.966M75.966 113L78.966 116L75.966 119")
          }
          18.5% {
            d:path("M70 116H79.392M76.392 113L79.392 116L76.392 119")
          }
          19% {
            d:path("M70 116H79.809M76.809 113L79.809 116L76.809 119")
          }
          19.5% {
            d:path("M70 116H80.216M77.216 113L80.216 116L77.216 119")
          }
          20% {
            d:path("M70 116H80.613M77.613 113L80.613 116L77.613 119")
          }
          20.5% {
            d:path("M70 116H81.0M78.0 113L81.0 116L78.0 119")
          }
          21% {
            d:path("M70 116H81.376M78.376 113L81.376 116L78.376 119")
          }
          21.5% {
            d:path("M70 116H81.74M78.74 113L81.74 116L78.74 119")
          }
          22% {
            d:path("M70 116H82.093M79.093 113L82.093 116L79.093 119")
          }
          22.5% {
            d:path("M70 116H82.434M79.434 113L82.434 116L79.434 119")
          }
          23% {
            d:path("M70 116H82.763M79.763 113L82.763 116L79.763 119")
          }
          23.5% {
            d:path("M70 116H83.079M80.079 113L83.079 116L80.079 119")
          }
          24% {
            d:path("M70 116H83.382M80.382 113L83.382 116L80.382 119")
          }
          24.5% {
            d:path("M70 116H83.672M80.672 113L83.672 116L80.672 119")
          }
          25% {
            d:path("M70 116H83.948M80.948 113L83.948 116L80.948 119")
          }
          25.5% {
            d:path("M70 116H84.211M81.211 113L84.211 116L81.211 119")
          }
          26% {
            d:path("M70 116H84.46M81.46 113L84.46 116L81.46 119")
          }
          26.5% {
            d:path("M70 116H84.694M81.694 113L84.694 116L81.694 119")
          }
          27% {
            d:path("M70 116H84.914M81.914 113L84.914 116L81.914 119")
          }
          27.5% {
            d:path("M70 116H85.12M82.12 113L85.12 116L82.12 119")
          }
          28.0% {
            d:path("M70 116H85.31M82.31 113L85.31 116L82.31 119")
          }
          28.5% {
            d:path("M70 116H85.485M82.485 113L85.485 116L82.485 119")
          }
          29.0% {
            d:path("M70 116H85.645M82.645 113L85.645 116L82.645 119")
          }
          29.5% {
            d:path("M70 116H85.789M82.789 113L85.789 116L82.789 119")
          }
          30% {
            d:path("M70 116H85.918M82.918 113L85.918 116L82.918 119")
          }
          30.5% {
            d:path("M70 116H86.031M83.031 113L86.031 116L83.031 119")
          }
          31% {
            d:path("M70 116H86.129M83.129 113L86.129 116L83.129 119")
          }
          31.5% {
            d:path("M70 116H86.21M83.21 113L86.21 116L83.21 119")
          }
          32% {
            d:path("M70 116H86.276M83.276 113L86.276 116L83.276 119")
          }
          32.5% {
            d:path("M70 116H86.325M83.325 113L86.325 116L83.325 119")
          }
          33% {
            d:path("M70 116H86.358M83.358 113L86.358 116L83.358 119")
          }
          33.5% {
            d:path("M70 116H86.376M83.376 113L86.376 116L83.376 119")
          }
          34% {
            d:path("M70 116H86.376M83.376 113L86.376 116L83.376 119")
          }
          34.5% {
            d:path("M70 116H86.361M83.361 113L86.361 116L83.361 119")
          }
          35% {
            d:path("M70 116H86.33M83.33 113L86.33 116L83.33 119")
          }
          35.5% {
            d:path("M70 116H86.282M83.282 113L86.282 116L83.282 119")
          }
          36% {
            d:path("M70 116H86.219M83.219 113L86.219 116L83.219 119")
          }
          36.5% {
            d:path("M70 116H86.139M83.139 113L86.139 116L83.139 119")
          }
          37% {
            d:path("M70 116H86.044M83.044 113L86.044 116L83.044 119")
          }
          37.5% {
            d:path("M70 116H85.933M82.933 113L85.933 116L82.933 119")
          }
          38% {
            d:path("M70 116H85.806M82.806 113L85.806 116L82.806 119")
          }
          38.5% {
            d:path("M70 116H85.663M82.663 113L85.663 116L82.663 119")
          }
          39% {
            d:path("M70 116H85.505M82.505 113L85.505 116L82.505 119")
          }
          39.5% {
            d:path("M70 116H85.332M82.332 113L85.332 116L82.332 119")
          }
          40% {
            d:path("M70 116H85.143M82.143 113L85.143 116L82.143 119")
          }
          40.5% {
            d:path("M70 116H84.94M81.94 113L84.94 116L81.94 119")
          }
          41% {
            d:path("M70 116H84.721M81.721 113L84.721 116L81.721 119")
          }
          41.5% {
            d:path("M70 116H84.489M81.489 113L84.489 116L81.489 119")
          }
          42% {
            d:path("M70 116H84.242M81.242 113L84.242 116L81.242 119")
          }
          42.5% {
            d:path("M70 116H83.981M80.981 113L83.981 116L80.981 119")
          }
          43% {
            d:path("M70 116H83.706M80.706 113L83.706 116L80.706 119")
          }
          43.5% {
            d:path("M70 116H83.417M80.417 113L83.417 116L80.417 119")
          }
          44% {
            d:path("M70 116H83.116M80.116 113L83.116 116L80.116 119")
          }
          44.5% {
            d:path("M70 116H82.801M79.801 113L82.801 116L79.801 119")
          }
          45% {
            d:path("M70 116H82.474M79.474 113L82.474 116L79.474 119")
          }
          45.5% {
            d:path("M70 116H82.134M79.134 113L82.134 116L79.134 119")
          }
          46% {
            d:path("M70 116H81.783M78.783 113L81.783 116L78.783 119")
          }
          46.5% {
            d:path("M70 116H81.42M78.42 113L81.42 116L78.42 119")
          }
          47% {
            d:path("M70 116H81.045M78.045 113L81.045 116L78.045 119")
          }
          47.5% {
            d:path("M70 116H80.66M77.66 113L80.66 116L77.66 119")
          }
          48% {
            d:path("M70 116H80.264M77.264 113L80.264 116L77.264 119")
          }
          48.5% {
            d:path("M70 116H79.858M76.858 113L79.858 116L76.858 119")
          }
          49% {
            d:path("M70 116H79.443M76.443 113L79.443 116L76.443 119")
          }
          49.5% {
            d:path("M70 116H79.018M76.018 113L79.018 116L76.018 119")
          }
          50% {
            d:path("M70 116H78.584M75.584 113L78.584 116L75.584 119")
          }
          50.5% {
            d:path("M70 116H78.141M75.141 113L78.141 116L75.141 119")
          }
          51% {
            d:path("M70 116H77.691M74.691 113L77.691 116L74.691 119")
          }
          51.5% {
            d:path("M70 116H77.233M74.233 113L77.233 116L74.233 119")
          }
          52% {
            d:path("M70 116H76.768M73.768 113L76.768 116L73.768 119")
          }
          52.5% {
            d:path("M70 116H76.296M73.296 113L76.296 116L73.296 119")
          }
          53% {
            d:path("M70 116H75.818M72.818 113L75.818 116L72.818 119")
          }
          53.5% {
            d:path("M70 116H75.334M72.334 113L75.334 116L72.334 119")
          }
          54% {
            d:path("M70 116H74.845M71.845 113L74.845 116L71.845 119")
          }
          54.5% {
            d:path("M70 116H74.351M71.351 113L74.351 116L71.351 119")
          }
          55.0% {
            d:path("M70 116H73.853M70.853 113L73.853 116L70.853 119")
          }
          55.5% {
            d:path("M70 116H73.351M70.351 113L73.351 116L70.351 119")
          }
          56.0% {
            d:path("M70 116H72.846M70 113.154L72.846 116L70 118.846")
          }
          56.5% {
            d:path("M70 116H72.338M70 113.662L72.338 116L70 118.338")
          }
          57.0% {
            d:path("M70 116H71.828M70 114.172L71.828 116L70 117.828")
          }
          57.5% {
            d:path("M70 116H71.316M70 114.684L71.316 116L70 117.316")
          }
          58.0% {
            d:path("M70 116H70.802M70 115.198L70.802 116L70 116.802")
          }
          58.5% {
            d:path("M70 116H70.288M70 115.712L70.288 116L70 116.288")
          }
          59% {
            d:path("M70 116H69.773M70 115.773L69.773 116L70 116.227")
          }
          59.5% {
            d:path("M70 116H69.259M70 115.259L69.259 116L70 116.741")
          }
          60% {
            d:path("M70 116H68.746M70 114.746L68.746 116L70 117.254")
          }
          60.5% {
            d:path("M70 116H68.233M70 114.233L68.233 116L70 117.767")
          }
          61% {
            d:path("M70 116H67.723M70 113.723L67.723 116L70 118.277")
          }
          61.5% {
            d:path("M70 116H67.214M70 113.214L67.214 116L70 118.786")
          }
          62% {
            d:path("M70 116H66.709M69.709 113L66.709 116L69.709 119")
          }
          62.5% {
            d:path("M70 116H66.207M69.207 113L66.207 116L69.207 119")
          }
          63% {
            d:path("M70 116H65.708M68.708 113L65.708 116L68.708 119")
          }
          63.5% {
            d:path("M70 116H65.214M68.214 113L65.214 116L68.214 119")
          }
          64% {
            d:path("M70 116H64.724M67.724 113L64.724 116L67.724 119")
          }
          64.5% {
            d:path("M70 116H64.24M67.24 113L64.24 116L67.24 119")
          }
          65% {
            d:path("M70 116H63.761M66.761 113L63.761 116L66.761 119")
          }
          65.5% {
            d:path("M70 116H63.288M66.288 113L63.288 116L66.288 119")
          }
          66% {
            d:path("M70 116H62.822M65.822 113L62.822 116L65.822 119")
          }
          66.5% {
            d:path("M70 116H62.363M65.363 113L62.363 116L65.363 119")
          }
          67% {
            d:path("M70 116H61.912M64.912 113L61.912 116L64.912 119")
          }
          67.5% {
            d:path("M70 116H61.469M64.469 113L61.469 116L64.469 119")
          }
          68% {
            d:path("M70 116H61.034M64.034 113L61.034 116L64.034 119")
          }
          68.5% {
            d:path("M70 116H60.608M63.608 113L60.608 116L63.608 119")
          }
          69% {
            d:path("M70 116H60.191M63.191 113L60.191 116L63.191 119")
          }
          69.5% {
            d:path("M70 116H59.784M62.784 113L59.784 116L62.784 119")
          }
          70% {
            d:path("M70 116H59.387M62.387 113L59.387 116L62.387 119")
          }
          70.5% {
            d:path("M70 116H59.0M62.0 113L59.0 116L62.0 119")
          }
          71% {
            d:path("M70 116H58.624M61.624 113L58.624 116L61.624 119")
          }
          71.5% {
            d:path("M70 116H58.26M61.26 113L58.26 116L61.26 119")
          }
          72% {
            d:path("M70 116H57.907M60.907 113L57.907 116L60.907 119")
          }
          72.5% {
            d:path("M70 116H57.566M60.566 113L57.566 116L60.566 119")
          }
          73% {
            d:path("M70 116H57.237M60.237 113L57.237 116L60.237 119")
          }
          73.5% {
            d:path("M70 116H56.921M59.921 113L56.921 116L59.921 119")
          }
          74% {
            d:path("M70 116H56.618M59.618 113L56.618 116L59.618 119")
          }
          74.5% {
            d:path("M70 116H56.328M59.328 113L56.328 116L59.328 119")
          }
          75% {
            d:path("M70 116H56.052M59.052 113L56.052 116L59.052 119")
          }
          75.5% {
            d:path("M70 116H55.789M58.789 113L55.789 116L58.789 119")
          }
          76% {
            d:path("M70 116H55.54M58.54 113L55.54 116L58.54 119")
          }
          76.5% {
            d:path("M70 116H55.306M58.306 113L55.306 116L58.306 119")
          }
          77% {
            d:path("M70 116H55.086M58.086 113L55.086 116L58.086 119")
          }
          77.5% {
            d:path("M70 116H54.88M57.88 113L54.88 116L57.88 119")
          }
          78% {
            d:path("M70 116H54.69M57.69 113L54.69 116L57.69 119")
          }
          78.5% {
            d:path("M70 116H54.515M57.515 113L54.515 116L57.515 119")
          }
          79% {
            d:path("M70 116H54.355M57.355 113L54.355 116L57.355 119")
          }
          79.5% {
            d:path("M70 116H54.211M57.211 113L54.211 116L57.211 119")
          }
          80% {
            d:path("M70 116H54.082M57.082 113L54.082 116L57.082 119")
          }
          80.5% {
            d:path("M70 116H53.969M56.969 113L53.969 116L56.969 119")
          }
          81% {
            d:path("M70 116H53.871M56.871 113L53.871 116L56.871 119")
          }
          81.5% {
            d:path("M70 116H53.79M56.79 113L53.79 116L56.79 119")
          }
          82% {
            d:path("M70 116H53.724M56.724 113L53.724 116L56.724 119")
          }
          82.5% {
            d:path("M70 116H53.675M56.675 113L53.675 116L56.675 119")
          }
          83% {
            d:path("M70 116H53.642M56.642 113L53.642 116L56.642 119")
          }
          83.5% {
            d:path("M70 116H53.624M56.624 113L53.624 116L56.624 119")
          }
          84% {
            d:path("M70 116H53.624M56.624 113L53.624 116L56.624 119")
          }
          84.5% {
            d:path("M70 116H53.639M56.639 113L53.639 116L56.639 119")
          }
          85% {
            d:path("M70 116H53.67M56.67 113L53.67 116L56.67 119")
          }
          85.5% {
            d:path("M70 116H53.718M56.718 113L53.718 116L56.718 119")
          }
          86% {
            d:path("M70 116H53.781M56.781 113L53.781 116L56.781 119")
          }
          86.5% {
            d:path("M70 116H53.861M56.861 113L53.861 116L56.861 119")
          }
          87% {
            d:path("M70 116H53.956M56.956 113L53.956 116L56.956 119")
          }
          87.5% {
            d:path("M70 116H54.067M57.067 113L54.067 116L57.067 119")
          }
          88% {
            d:path("M70 116H54.194M57.194 113L54.194 116L57.194 119")
          }
          88.5% {
            d:path("M70 116H54.337M57.337 113L54.337 116L57.337 119")
          }
          89% {
            d:path("M70 116H54.495M57.495 113L54.495 116L57.495 119")
          }
          89.5% {
            d:path("M70 116H54.668M57.668 113L54.668 116L57.668 119")
          }
          90% {
            d:path("M70 116H54.857M57.857 113L54.857 116L57.857 119")
          }
          90.5% {
            d:path("M70 116H55.06M58.06 113L55.06 116L58.06 119")
          }
          91% {
            d:path("M70 116H55.279M58.279 113L55.279 116L58.279 119")
          }
          91.5% {
            d:path("M70 116H55.511M58.511 113L55.511 116L58.511 119")
          }
          92% {
            d:path("M70 116H55.758M58.758 113L55.758 116L58.758 119")
          }
          92.5% {
            d:path("M70 116H56.019M59.019 113L56.019 116L59.019 119")
          }
          93% {
            d:path("M70 116H56.294M59.294 113L56.294 116L59.294 119")
          }
          93.5% {
            d:path("M70 116H56.583M59.583 113L56.583 116L59.583 119")
          }
          94% {
            d:path("M70 116H56.884M59.884 113L56.884 116L59.884 119")
          }
          94.5% {
            d:path("M70 116H57.199M60.199 113L57.199 116L60.199 119")
          }
          95% {
            d:path("M70 116H57.526M60.526 113L57.526 116L60.526 119")
          }
          95.5% {
            d:path("M70 116H57.866M60.866 113L57.866 116L60.866 119")
          }
          96% {
            d:path("M70 116H58.217M61.217 113L58.217 116L61.217 119")
          }
          96.5% {
            d:path("M70 116H58.58M61.58 113L58.58 116L61.58 119")
          }
          97% {
            d:path("M70 116H58.955M61.955 113L58.955 116L61.955 119")
          }
          97.5% {
            d:path("M70 116H59.34M62.34 113L59.34 116L62.34 119")
          }
          98% {
            d:path("M70 116H59.736M62.736 113L59.736 116L62.736 119")
          }
          98.5% {
            d:path("M70 116H60.142M63.142 113L60.142 116L63.142 119")
          }
          99% {
            d:path("M70 116H60.557M63.557 113L60.557 116L63.557 119")
          }
          99.5% {
            d:path("M70 116H60.982M63.982 113L60.982 116L63.982 119")
          }
          100% {
            d:path("M70 116H61.416M64.416 113L61.416 116L64.416 119")
          }
        }
        @keyframes mems-left-gap {
          0% {
            width:5.139px;
            opacity:0.391
          }
          0.5% {
            width:5.286px;
            opacity:0.383
          }
          1% {
            width:5.436px;
            opacity:0.374
          }
          1.5% {
            width:5.589px;
            opacity:0.366
          }
          2% {
            width:5.744px;
            opacity:0.359
          }
          2.5% {
            width:5.901px;
            opacity:0.351
          }
          3% {
            width:6.061px;
            opacity:0.344
          }
          3.5% {
            width:6.222px;
            opacity:0.337
          }
          4% {
            width:6.385px;
            opacity:0.331
          }
          4.5% {
            width:6.55px;
            opacity:0.324
          }
          5% {
            width:6.716px;
            opacity:0.318
          }
          5.5% {
            width:6.883px;
            opacity:0.312
          }
          6% {
            width:7.051px;
            opacity:0.307
          }
          6.5% {
            width:7.221px;
            opacity:0.302
          }
          7.0% {
            width:7.391px;
            opacity:0.296
          }
          7.5% {
            width:7.561px;
            opacity:0.292
          }
          8% {
            width:7.733px;
            opacity:0.287
          }
          8.5% {
            width:7.904px;
            opacity:0.282
          }
          9% {
            width:8.076px;
            opacity:0.278
          }
          9.5% {
            width:8.247px;
            opacity:0.274
          }
          10% {
            width:8.418px;
            opacity:0.27
          }
          10.5% {
            width:8.589px;
            opacity:0.266
          }
          11% {
            width:8.759px;
            opacity:0.263
          }
          11.5% {
            width:8.929px;
            opacity:0.259
          }
          12% {
            width:9.097px;
            opacity:0.256
          }
          12.5% {
            width:9.264px;
            opacity:0.253
          }
          13% {
            width:9.431px;
            opacity:0.25
          }
          13.5% {
            width:9.595px;
            opacity:0.247
          }
          14.0% {
            width:9.759px;
            opacity:0.244
          }
          14.5% {
            width:9.92px;
            opacity:0.241
          }
          15% {
            width:10.08px;
            opacity:0.239
          }
          15.5% {
            width:10.237px;
            opacity:0.236
          }
          16% {
            width:10.393px;
            opacity:0.234
          }
          16.5% {
            width:10.546px;
            opacity:0.232
          }
          17% {
            width:10.696px;
            opacity:0.23
          }
          17.5% {
            width:10.844px;
            opacity:0.228
          }
          18% {
            width:10.989px;
            opacity:0.226
          }
          18.5% {
            width:11.131px;
            opacity:0.224
          }
          19% {
            width:11.27px;
            opacity:0.222
          }
          19.5% {
            width:11.405px;
            opacity:0.22
          }
          20% {
            width:11.538px;
            opacity:0.219
          }
          20.5% {
            width:11.667px;
            opacity:0.217
          }
          21% {
            width:11.792px;
            opacity:0.216
          }
          21.5% {
            width:11.913px;
            opacity:0.214
          }
          22% {
            width:12.031px;
            opacity:0.213
          }
          22.5% {
            width:12.145px;
            opacity:0.212
          }
          23% {
            width:12.254px;
            opacity:0.211
          }
          23.5% {
            width:12.36px;
            opacity:0.209
          }
          24% {
            width:12.461px;
            opacity:0.208
          }
          24.5% {
            width:12.557px;
            opacity:0.207
          }
          25% {
            width:12.649px;
            opacity:0.206
          }
          25.5% {
            width:12.737px;
            opacity:0.206
          }
          26% {
            width:12.82px;
            opacity:0.205
          }
          26.5% {
            width:12.898px;
            opacity:0.204
          }
          27% {
            width:12.971px;
            opacity:0.203
          }
          27.5% {
            width:13.04px;
            opacity:0.203
          }
          28.0% {
            width:13.103px;
            opacity:0.202
          }
          28.5% {
            width:13.162px;
            opacity:0.202
          }
          29.0% {
            width:13.215px;
            opacity:0.201
          }
          29.5% {
            width:13.263px;
            opacity:0.201
          }
          30% {
            width:13.306px;
            opacity:0.2
          }
          30.5% {
            width:13.344px;
            opacity:0.2
          }
          31% {
            width:13.376px;
            opacity:0.2
          }
          31.5% {
            width:13.403px;
            opacity:0.199
          }
          32% {
            width:13.425px;
            opacity:0.199
          }
          32.5% {
            width:13.442px;
            opacity:0.199
          }
          33% {
            width:13.453px;
            opacity:0.199
          }
          33.5% {
            width:13.459px;
            opacity:0.199
          }
          34% {
            width:13.459px;
            opacity:0.199
          }
          34.5% {
            width:13.454px;
            opacity:0.199
          }
          35% {
            width:13.443px;
            opacity:0.199
          }
          35.5% {
            width:13.427px;
            opacity:0.199
          }
          36% {
            width:13.406px;
            opacity:0.199
          }
          36.5% {
            width:13.38px;
            opacity:0.2
          }
          37% {
            width:13.348px;
            opacity:0.2
          }
          37.5% {
            width:13.311px;
            opacity:0.2
          }
          38% {
            width:13.269px;
            opacity:0.201
          }
          38.5% {
            width:13.221px;
            opacity:0.201
          }
          39% {
            width:13.168px;
            opacity:0.202
          }
          39.5% {
            width:13.111px;
            opacity:0.202
          }
          40% {
            width:13.048px;
            opacity:0.203
          }
          40.5% {
            width:12.98px;
            opacity:0.203
          }
          41% {
            width:12.907px;
            opacity:0.204
          }
          41.5% {
            width:12.83px;
            opacity:0.205
          }
          42% {
            width:12.747px;
            opacity:0.206
          }
          42.5% {
            width:12.66px;
            opacity:0.206
          }
          43% {
            width:12.569px;
            opacity:0.207
          }
          43.5% {
            width:12.472px;
            opacity:0.208
          }
          44% {
            width:12.372px;
            opacity:0.209
          }
          44.5% {
            width:12.267px;
            opacity:0.21
          }
          45% {
            width:12.158px;
            opacity:0.212
          }
          45.5% {
            width:12.045px;
            opacity:0.213
          }
          46% {
            width:11.928px;
            opacity:0.214
          }
          46.5% {
            width:11.807px;
            opacity:0.216
          }
          47% {
            width:11.682px;
            opacity:0.217
          }
          47.5% {
            width:11.553px;
            opacity:0.218
          }
          48% {
            width:11.421px;
            opacity:0.22
          }
          48.5% {
            width:11.286px;
            opacity:0.222
          }
          49% {
            width:11.148px;
            opacity:0.224
          }
          49.5% {
            width:11.006px;
            opacity:0.225
          }
          50% {
            width:10.861px;
            opacity:0.227
          }
          50.5% {
            width:10.714px;
            opacity:0.229
          }
          51% {
            width:10.564px;
            opacity:0.231
          }
          51.5% {
            width:10.411px;
            opacity:0.234
          }
          52% {
            width:10.256px;
            opacity:0.236
          }
          52.5% {
            width:10.099px;
            opacity:0.238
          }
          53% {
            width:9.939px;
            opacity:0.241
          }
          53.5% {
            width:9.778px;
            opacity:0.244
          }
          54% {
            width:9.615px;
            opacity:0.246
          }
          54.5% {
            width:9.45px;
            opacity:0.249
          }
          55.0% {
            width:9.284px;
            opacity:0.252
          }
          55.5% {
            width:9.117px;
            opacity:0.255
          }
          56.0% {
            width:8.949px;
            opacity:0.259
          }
          56.5% {
            width:8.779px;
            opacity:0.262
          }
          57.0% {
            width:8.609px;
            opacity:0.266
          }
          57.5% {
            width:8.439px;
            opacity:0.27
          }
          58.0% {
            width:8.267px;
            opacity:0.274
          }
          58.5% {
            width:8.096px;
            opacity:0.278
          }
          59% {
            width:7.924px;
            opacity:0.282
          }
          59.5% {
            width:7.753px;
            opacity:0.286
          }
          60% {
            width:7.582px;
            opacity:0.291
          }
          60.5% {
            width:7.411px;
            opacity:0.296
          }
          61% {
            width:7.241px;
            opacity:0.301
          }
          61.5% {
            width:7.071px;
            opacity:0.306
          }
          62% {
            width:6.903px;
            opacity:0.312
          }
          62.5% {
            width:6.736px;
            opacity:0.318
          }
          63% {
            width:6.569px;
            opacity:0.324
          }
          63.5% {
            width:6.405px;
            opacity:0.33
          }
          64% {
            width:6.241px;
            opacity:0.336
          }
          64.5% {
            width:6.08px;
            opacity:0.343
          }
          65% {
            width:5.92px;
            opacity:0.35
          }
          65.5% {
            width:5.763px;
            opacity:0.358
          }
          66% {
            width:5.607px;
            opacity:0.365
          }
          66.5% {
            width:5.454px;
            opacity:0.373
          }
          67% {
            width:5.304px;
            opacity:0.382
          }
          67.5% {
            width:5.156px;
            opacity:0.39
          }
          68% {
            width:5.011px;
            opacity:0.399
          }
          68.5% {
            width:4.869px;
            opacity:0.409
          }
          69% {
            width:4.73px;
            opacity:0.418
          }
          69.5% {
            width:4.595px;
            opacity:0.428
          }
          70% {
            width:4.462px;
            opacity:0.439
          }
          70.5% {
            width:4.333px;
            opacity:0.449
          }
          71% {
            width:4.208px;
            opacity:0.46
          }
          71.5% {
            width:4.087px;
            opacity:0.472
          }
          72% {
            width:3.969px;
            opacity:0.483
          }
          72.5% {
            width:3.855px;
            opacity:0.495
          }
          73% {
            width:3.746px;
            opacity:0.507
          }
          73.5% {
            width:3.64px;
            opacity:0.52
          }
          74% {
            width:3.539px;
            opacity:0.532
          }
          74.5% {
            width:3.443px;
            opacity:0.545
          }
          75% {
            width:3.351px;
            opacity:0.558
          }
          75.5% {
            width:3.263px;
            opacity:0.57
          }
          76% {
            width:3.18px;
            opacity:0.583
          }
          76.5% {
            width:3.102px;
            opacity:0.596
          }
          77% {
            width:3.029px;
            opacity:0.608
          }
          77.5% {
            width:2.96px;
            opacity:0.621
          }
          78% {
            width:2.897px;
            opacity:0.632
          }
          78.5% {
            width:2.838px;
            opacity:0.644
          }
          79% {
            width:2.785px;
            opacity:0.655
          }
          79.5% {
            width:2.737px;
            opacity:0.665
          }
          80% {
            width:2.694px;
            opacity:0.674
          }
          80.5% {
            width:2.656px;
            opacity:0.682
          }
          81% {
            width:2.624px;
            opacity:0.69
          }
          81.5% {
            width:2.597px;
            opacity:0.696
          }
          82% {
            width:2.575px;
            opacity:0.701
          }
          82.5% {
            width:2.558px;
            opacity:0.705
          }
          83% {
            width:2.547px;
            opacity:0.708
          }
          83.5% {
            width:2.541px;
            opacity:0.71
          }
          84% {
            width:2.541px;
            opacity:0.71
          }
          84.5% {
            width:2.546px;
            opacity:0.708
          }
          85% {
            width:2.557px;
            opacity:0.706
          }
          85.5% {
            width:2.573px;
            opacity:0.702
          }
          86% {
            width:2.594px;
            opacity:0.697
          }
          86.5% {
            width:2.62px;
            opacity:0.691
          }
          87% {
            width:2.652px;
            opacity:0.683
          }
          87.5% {
            width:2.689px;
            opacity:0.675
          }
          88% {
            width:2.731px;
            opacity:0.666
          }
          88.5% {
            width:2.779px;
            opacity:0.656
          }
          89% {
            width:2.832px;
            opacity:0.645
          }
          89.5% {
            width:2.889px;
            opacity:0.634
          }
          90% {
            width:2.952px;
            opacity:0.622
          }
          90.5% {
            width:3.02px;
            opacity:0.61
          }
          91% {
            width:3.093px;
            opacity:0.597
          }
          91.5% {
            width:3.17px;
            opacity:0.585
          }
          92% {
            width:3.253px;
            opacity:0.572
          }
          92.5% {
            width:3.34px;
            opacity:0.559
          }
          93% {
            width:3.431px;
            opacity:0.546
          }
          93.5% {
            width:3.528px;
            opacity:0.534
          }
          94% {
            width:3.628px;
            opacity:0.521
          }
          94.5% {
            width:3.733px;
            opacity:0.509
          }
          95% {
            width:3.842px;
            opacity:0.496
          }
          95.5% {
            width:3.955px;
            opacity:0.485
          }
          96% {
            width:4.072px;
            opacity:0.473
          }
          96.5% {
            width:4.193px;
            opacity:0.462
          }
          97% {
            width:4.318px;
            opacity:0.451
          }
          97.5% {
            width:4.447px;
            opacity:0.44
          }
          98% {
            width:4.579px;
            opacity:0.429
          }
          98.5% {
            width:4.714px;
            opacity:0.419
          }
          99% {
            width:4.852px;
            opacity:0.41
          }
          99.5% {
            width:4.994px;
            opacity:0.4
          }
          100% {
            width:5.139px;
            opacity:0.391
          }
        }
        @keyframes mems-right-gap {
          0% {
            x:79.139px;
            width:10.861px;
            opacity:0.227
          }
          0.5% {
            x:79.286px;
            width:10.714px;
            opacity:0.229
          }
          1% {
            x:79.436px;
            width:10.564px;
            opacity:0.231
          }
          1.5% {
            x:79.589px;
            width:10.411px;
            opacity:0.234
          }
          2% {
            x:79.744px;
            width:10.256px;
            opacity:0.236
          }
          2.5% {
            x:79.901px;
            width:10.099px;
            opacity:0.238
          }
          3% {
            x:80.061px;
            width:9.939px;
            opacity:0.241
          }
          3.5% {
            x:80.222px;
            width:9.778px;
            opacity:0.244
          }
          4% {
            x:80.385px;
            width:9.615px;
            opacity:0.246
          }
          4.5% {
            x:80.55px;
            width:9.45px;
            opacity:0.249
          }
          5% {
            x:80.716px;
            width:9.284px;
            opacity:0.252
          }
          5.5% {
            x:80.883px;
            width:9.117px;
            opacity:0.255
          }
          6% {
            x:81.051px;
            width:8.949px;
            opacity:0.259
          }
          6.5% {
            x:81.221px;
            width:8.779px;
            opacity:0.262
          }
          7.0% {
            x:81.391px;
            width:8.609px;
            opacity:0.266
          }
          7.5% {
            x:81.561px;
            width:8.439px;
            opacity:0.27
          }
          8% {
            x:81.733px;
            width:8.267px;
            opacity:0.274
          }
          8.5% {
            x:81.904px;
            width:8.096px;
            opacity:0.278
          }
          9% {
            x:82.076px;
            width:7.924px;
            opacity:0.282
          }
          9.5% {
            x:82.247px;
            width:7.753px;
            opacity:0.286
          }
          10% {
            x:82.418px;
            width:7.582px;
            opacity:0.291
          }
          10.5% {
            x:82.589px;
            width:7.411px;
            opacity:0.296
          }
          11% {
            x:82.759px;
            width:7.241px;
            opacity:0.301
          }
          11.5% {
            x:82.929px;
            width:7.071px;
            opacity:0.306
          }
          12% {
            x:83.097px;
            width:6.903px;
            opacity:0.312
          }
          12.5% {
            x:83.264px;
            width:6.736px;
            opacity:0.318
          }
          13% {
            x:83.431px;
            width:6.569px;
            opacity:0.324
          }
          13.5% {
            x:83.595px;
            width:6.405px;
            opacity:0.33
          }
          14.0% {
            x:83.759px;
            width:6.241px;
            opacity:0.336
          }
          14.5% {
            x:83.92px;
            width:6.08px;
            opacity:0.343
          }
          15% {
            x:84.08px;
            width:5.92px;
            opacity:0.35
          }
          15.5% {
            x:84.237px;
            width:5.763px;
            opacity:0.358
          }
          16% {
            x:84.393px;
            width:5.607px;
            opacity:0.365
          }
          16.5% {
            x:84.546px;
            width:5.454px;
            opacity:0.373
          }
          17% {
            x:84.696px;
            width:5.304px;
            opacity:0.382
          }
          17.5% {
            x:84.844px;
            width:5.156px;
            opacity:0.39
          }
          18% {
            x:84.989px;
            width:5.011px;
            opacity:0.399
          }
          18.5% {
            x:85.131px;
            width:4.869px;
            opacity:0.409
          }
          19% {
            x:85.27px;
            width:4.73px;
            opacity:0.418
          }
          19.5% {
            x:85.405px;
            width:4.595px;
            opacity:0.428
          }
          20% {
            x:85.538px;
            width:4.462px;
            opacity:0.439
          }
          20.5% {
            x:85.667px;
            width:4.333px;
            opacity:0.449
          }
          21% {
            x:85.792px;
            width:4.208px;
            opacity:0.46
          }
          21.5% {
            x:85.913px;
            width:4.087px;
            opacity:0.472
          }
          22% {
            x:86.031px;
            width:3.969px;
            opacity:0.483
          }
          22.5% {
            x:86.145px;
            width:3.855px;
            opacity:0.495
          }
          23% {
            x:86.254px;
            width:3.746px;
            opacity:0.507
          }
          23.5% {
            x:86.36px;
            width:3.64px;
            opacity:0.52
          }
          24% {
            x:86.461px;
            width:3.539px;
            opacity:0.532
          }
          24.5% {
            x:86.557px;
            width:3.443px;
            opacity:0.545
          }
          25% {
            x:86.649px;
            width:3.351px;
            opacity:0.558
          }
          25.5% {
            x:86.737px;
            width:3.263px;
            opacity:0.57
          }
          26% {
            x:86.82px;
            width:3.18px;
            opacity:0.583
          }
          26.5% {
            x:86.898px;
            width:3.102px;
            opacity:0.596
          }
          27% {
            x:86.971px;
            width:3.029px;
            opacity:0.608
          }
          27.5% {
            x:87.04px;
            width:2.96px;
            opacity:0.621
          }
          28.0% {
            x:87.103px;
            width:2.897px;
            opacity:0.632
          }
          28.5% {
            x:87.162px;
            width:2.838px;
            opacity:0.644
          }
          29.0% {
            x:87.215px;
            width:2.785px;
            opacity:0.655
          }
          29.5% {
            x:87.263px;
            width:2.737px;
            opacity:0.665
          }
          30% {
            x:87.306px;
            width:2.694px;
            opacity:0.674
          }
          30.5% {
            x:87.344px;
            width:2.656px;
            opacity:0.682
          }
          31% {
            x:87.376px;
            width:2.624px;
            opacity:0.69
          }
          31.5% {
            x:87.403px;
            width:2.597px;
            opacity:0.696
          }
          32% {
            x:87.425px;
            width:2.575px;
            opacity:0.701
          }
          32.5% {
            x:87.442px;
            width:2.558px;
            opacity:0.705
          }
          33% {
            x:87.453px;
            width:2.547px;
            opacity:0.708
          }
          33.5% {
            x:87.459px;
            width:2.541px;
            opacity:0.71
          }
          34% {
            x:87.459px;
            width:2.541px;
            opacity:0.71
          }
          34.5% {
            x:87.454px;
            width:2.546px;
            opacity:0.708
          }
          35% {
            x:87.443px;
            width:2.557px;
            opacity:0.706
          }
          35.5% {
            x:87.427px;
            width:2.573px;
            opacity:0.702
          }
          36% {
            x:87.406px;
            width:2.594px;
            opacity:0.697
          }
          36.5% {
            x:87.38px;
            width:2.62px;
            opacity:0.691
          }
          37% {
            x:87.348px;
            width:2.652px;
            opacity:0.683
          }
          37.5% {
            x:87.311px;
            width:2.689px;
            opacity:0.675
          }
          38% {
            x:87.269px;
            width:2.731px;
            opacity:0.666
          }
          38.5% {
            x:87.221px;
            width:2.779px;
            opacity:0.656
          }
          39% {
            x:87.168px;
            width:2.832px;
            opacity:0.645
          }
          39.5% {
            x:87.111px;
            width:2.889px;
            opacity:0.634
          }
          40% {
            x:87.048px;
            width:2.952px;
            opacity:0.622
          }
          40.5% {
            x:86.98px;
            width:3.02px;
            opacity:0.61
          }
          41% {
            x:86.907px;
            width:3.093px;
            opacity:0.597
          }
          41.5% {
            x:86.83px;
            width:3.17px;
            opacity:0.585
          }
          42% {
            x:86.747px;
            width:3.253px;
            opacity:0.572
          }
          42.5% {
            x:86.66px;
            width:3.34px;
            opacity:0.559
          }
          43% {
            x:86.569px;
            width:3.431px;
            opacity:0.546
          }
          43.5% {
            x:86.472px;
            width:3.528px;
            opacity:0.534
          }
          44% {
            x:86.372px;
            width:3.628px;
            opacity:0.521
          }
          44.5% {
            x:86.267px;
            width:3.733px;
            opacity:0.509
          }
          45% {
            x:86.158px;
            width:3.842px;
            opacity:0.496
          }
          45.5% {
            x:86.045px;
            width:3.955px;
            opacity:0.485
          }
          46% {
            x:85.928px;
            width:4.072px;
            opacity:0.473
          }
          46.5% {
            x:85.807px;
            width:4.193px;
            opacity:0.462
          }
          47% {
            x:85.682px;
            width:4.318px;
            opacity:0.451
          }
          47.5% {
            x:85.553px;
            width:4.447px;
            opacity:0.44
          }
          48% {
            x:85.421px;
            width:4.579px;
            opacity:0.429
          }
          48.5% {
            x:85.286px;
            width:4.714px;
            opacity:0.419
          }
          49% {
            x:85.148px;
            width:4.852px;
            opacity:0.41
          }
          49.5% {
            x:85.006px;
            width:4.994px;
            opacity:0.4
          }
          50% {
            x:84.861px;
            width:5.139px;
            opacity:0.391
          }
          50.5% {
            x:84.714px;
            width:5.286px;
            opacity:0.383
          }
          51% {
            x:84.564px;
            width:5.436px;
            opacity:0.374
          }
          51.5% {
            x:84.411px;
            width:5.589px;
            opacity:0.366
          }
          52% {
            x:84.256px;
            width:5.744px;
            opacity:0.359
          }
          52.5% {
            x:84.099px;
            width:5.901px;
            opacity:0.351
          }
          53% {
            x:83.939px;
            width:6.061px;
            opacity:0.344
          }
          53.5% {
            x:83.778px;
            width:6.222px;
            opacity:0.337
          }
          54% {
            x:83.615px;
            width:6.385px;
            opacity:0.331
          }
          54.5% {
            x:83.45px;
            width:6.55px;
            opacity:0.324
          }
          55.0% {
            x:83.284px;
            width:6.716px;
            opacity:0.318
          }
          55.5% {
            x:83.117px;
            width:6.883px;
            opacity:0.312
          }
          56.0% {
            x:82.949px;
            width:7.051px;
            opacity:0.307
          }
          56.5% {
            x:82.779px;
            width:7.221px;
            opacity:0.302
          }
          57.0% {
            x:82.609px;
            width:7.391px;
            opacity:0.296
          }
          57.5% {
            x:82.439px;
            width:7.561px;
            opacity:0.292
          }
          58.0% {
            x:82.267px;
            width:7.733px;
            opacity:0.287
          }
          58.5% {
            x:82.096px;
            width:7.904px;
            opacity:0.282
          }
          59% {
            x:81.924px;
            width:8.076px;
            opacity:0.278
          }
          59.5% {
            x:81.753px;
            width:8.247px;
            opacity:0.274
          }
          60% {
            x:81.582px;
            width:8.418px;
            opacity:0.27
          }
          60.5% {
            x:81.411px;
            width:8.589px;
            opacity:0.266
          }
          61% {
            x:81.241px;
            width:8.759px;
            opacity:0.263
          }
          61.5% {
            x:81.071px;
            width:8.929px;
            opacity:0.259
          }
          62% {
            x:80.903px;
            width:9.097px;
            opacity:0.256
          }
          62.5% {
            x:80.736px;
            width:9.264px;
            opacity:0.253
          }
          63% {
            x:80.569px;
            width:9.431px;
            opacity:0.25
          }
          63.5% {
            x:80.405px;
            width:9.595px;
            opacity:0.247
          }
          64% {
            x:80.241px;
            width:9.759px;
            opacity:0.244
          }
          64.5% {
            x:80.08px;
            width:9.92px;
            opacity:0.241
          }
          65% {
            x:79.92px;
            width:10.08px;
            opacity:0.239
          }
          65.5% {
            x:79.763px;
            width:10.237px;
            opacity:0.236
          }
          66% {
            x:79.607px;
            width:10.393px;
            opacity:0.234
          }
          66.5% {
            x:79.454px;
            width:10.546px;
            opacity:0.232
          }
          67% {
            x:79.304px;
            width:10.696px;
            opacity:0.23
          }
          67.5% {
            x:79.156px;
            width:10.844px;
            opacity:0.228
          }
          68% {
            x:79.011px;
            width:10.989px;
            opacity:0.226
          }
          68.5% {
            x:78.869px;
            width:11.131px;
            opacity:0.224
          }
          69% {
            x:78.73px;
            width:11.27px;
            opacity:0.222
          }
          69.5% {
            x:78.595px;
            width:11.405px;
            opacity:0.22
          }
          70% {
            x:78.462px;
            width:11.538px;
            opacity:0.219
          }
          70.5% {
            x:78.333px;
            width:11.667px;
            opacity:0.217
          }
          71% {
            x:78.208px;
            width:11.792px;
            opacity:0.216
          }
          71.5% {
            x:78.087px;
            width:11.913px;
            opacity:0.214
          }
          72% {
            x:77.969px;
            width:12.031px;
            opacity:0.213
          }
          72.5% {
            x:77.855px;
            width:12.145px;
            opacity:0.212
          }
          73% {
            x:77.746px;
            width:12.254px;
            opacity:0.211
          }
          73.5% {
            x:77.64px;
            width:12.36px;
            opacity:0.209
          }
          74% {
            x:77.539px;
            width:12.461px;
            opacity:0.208
          }
          74.5% {
            x:77.443px;
            width:12.557px;
            opacity:0.207
          }
          75% {
            x:77.351px;
            width:12.649px;
            opacity:0.206
          }
          75.5% {
            x:77.263px;
            width:12.737px;
            opacity:0.206
          }
          76% {
            x:77.18px;
            width:12.82px;
            opacity:0.205
          }
          76.5% {
            x:77.102px;
            width:12.898px;
            opacity:0.204
          }
          77% {
            x:77.029px;
            width:12.971px;
            opacity:0.203
          }
          77.5% {
            x:76.96px;
            width:13.04px;
            opacity:0.203
          }
          78% {
            x:76.897px;
            width:13.103px;
            opacity:0.202
          }
          78.5% {
            x:76.838px;
            width:13.162px;
            opacity:0.202
          }
          79% {
            x:76.785px;
            width:13.215px;
            opacity:0.201
          }
          79.5% {
            x:76.737px;
            width:13.263px;
            opacity:0.201
          }
          80% {
            x:76.694px;
            width:13.306px;
            opacity:0.2
          }
          80.5% {
            x:76.656px;
            width:13.344px;
            opacity:0.2
          }
          81% {
            x:76.624px;
            width:13.376px;
            opacity:0.2
          }
          81.5% {
            x:76.597px;
            width:13.403px;
            opacity:0.199
          }
          82% {
            x:76.575px;
            width:13.425px;
            opacity:0.199
          }
          82.5% {
            x:76.558px;
            width:13.442px;
            opacity:0.199
          }
          83% {
            x:76.547px;
            width:13.453px;
            opacity:0.199
          }
          83.5% {
            x:76.541px;
            width:13.459px;
            opacity:0.199
          }
          84% {
            x:76.541px;
            width:13.459px;
            opacity:0.199
          }
          84.5% {
            x:76.546px;
            width:13.454px;
            opacity:0.199
          }
          85% {
            x:76.557px;
            width:13.443px;
            opacity:0.199
          }
          85.5% {
            x:76.573px;
            width:13.427px;
            opacity:0.199
          }
          86% {
            x:76.594px;
            width:13.406px;
            opacity:0.199
          }
          86.5% {
            x:76.62px;
            width:13.38px;
            opacity:0.2
          }
          87% {
            x:76.652px;
            width:13.348px;
            opacity:0.2
          }
          87.5% {
            x:76.689px;
            width:13.311px;
            opacity:0.2
          }
          88% {
            x:76.731px;
            width:13.269px;
            opacity:0.201
          }
          88.5% {
            x:76.779px;
            width:13.221px;
            opacity:0.201
          }
          89% {
            x:76.832px;
            width:13.168px;
            opacity:0.202
          }
          89.5% {
            x:76.889px;
            width:13.111px;
            opacity:0.202
          }
          90% {
            x:76.952px;
            width:13.048px;
            opacity:0.203
          }
          90.5% {
            x:77.02px;
            width:12.98px;
            opacity:0.203
          }
          91% {
            x:77.093px;
            width:12.907px;
            opacity:0.204
          }
          91.5% {
            x:77.17px;
            width:12.83px;
            opacity:0.205
          }
          92% {
            x:77.253px;
            width:12.747px;
            opacity:0.206
          }
          92.5% {
            x:77.34px;
            width:12.66px;
            opacity:0.206
          }
          93% {
            x:77.431px;
            width:12.569px;
            opacity:0.207
          }
          93.5% {
            x:77.528px;
            width:12.472px;
            opacity:0.208
          }
          94% {
            x:77.628px;
            width:12.372px;
            opacity:0.209
          }
          94.5% {
            x:77.733px;
            width:12.267px;
            opacity:0.21
          }
          95% {
            x:77.842px;
            width:12.158px;
            opacity:0.212
          }
          95.5% {
            x:77.955px;
            width:12.045px;
            opacity:0.213
          }
          96% {
            x:78.072px;
            width:11.928px;
            opacity:0.214
          }
          96.5% {
            x:78.193px;
            width:11.807px;
            opacity:0.216
          }
          97% {
            x:78.318px;
            width:11.682px;
            opacity:0.217
          }
          97.5% {
            x:78.447px;
            width:11.553px;
            opacity:0.218
          }
          98% {
            x:78.579px;
            width:11.421px;
            opacity:0.22
          }
          98.5% {
            x:78.714px;
            width:11.286px;
            opacity:0.222
          }
          99% {
            x:78.852px;
            width:11.148px;
            opacity:0.224
          }
          99.5% {
            x:78.994px;
            width:11.006px;
            opacity:0.225
          }
          100% {
            x:79.139px;
            width:10.861px;
            opacity:0.227
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
      <svg viewBox="0 0 140 140" role="img" aria-label="MEMS Capacitive Accelerometer">
        <g class="mems-housing">
          <path class="acceleration" d="M70 14H54M57 11L54 14L57 17"/>
          <rect class="housing" x="22" y="25" width="96" height="71" rx="4"/>
          <path class="ink muted" d="M28 46V55M112 46V55"/>
          <rect class="left-gap" x="50" y="58" width="12.649" height="20"/>
          <rect class="right-gap" x="86.649" y="58" width="3.351" height="20"/>
          <path class="electrodes" d="M50 57V79M90 57V79M50 80V87H37M90 80V87H103"/>
          <g class="proof-mass">
            <rect class="mass" x="58" y="49" width="24" height="30" rx="2"/>
            <path class="ink muted" d="M64 59H76M64 69H76"/>
          </g>
          <path class="suspension" d="M28 52L31.465 52L34.545 54.5L37.625 49.5L40.705 54.5L43.785 49.5L46.865 54.5L49.945 49.5L53.025 54.5L56.105 49.5L59.185 52L62.649 52M112 52L109.465 52L107.212 54.5L104.958 49.5L102.705 54.5L100.451 49.5L98.198 54.5L95.945 49.5L93.691 54.5L91.438 49.5L89.185 52L86.649 52"/>
        </g>
        <path class="ink muted" d="M45 116H95M70 111V121"/>
        <path class="mems-output" d="M70 116H83.948M80.948 113L83.948 116L80.948 119"/>
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

if (!customElements.get("concept-mems-capacitive-accelerometer")) {
  customElements.define("concept-mems-capacitive-accelerometer", ConceptMemsCapacitiveAccelerometer);
}
