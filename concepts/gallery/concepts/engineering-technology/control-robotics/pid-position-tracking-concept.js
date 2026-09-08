// PID Position Tracking. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPidPositionTracking extends HTMLElement {
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
        .cycle {
          animation:cycle 12s linear infinite
        }
        @keyframes cycle {
          0%,91.6667% {
            opacity:1
          }
          95%,97% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .carriage {
          animation:carriage 12s linear infinite
        }
        @keyframes carriage {
          0% {
            transform:translateX(30px)
          }
          0.4167% {
            transform:translateX(30px)
          }
          0.8333% {
            transform:translateX(30px)
          }
          1.25% {
            transform:translateX(30px)
          }
          1.6667% {
            transform:translateX(30px)
          }
          2.0833% {
            transform:translateX(30px)
          }
          2.5% {
            transform:translateX(30px)
          }
          2.9167% {
            transform:translateX(30px)
          }
          3.3333% {
            transform:translateX(30px)
          }
          3.75% {
            transform:translateX(30px)
          }
          4.1667% {
            transform:translateX(30px)
          }
          4.5833% {
            transform:translateX(30px)
          }
          5% {
            transform:translateX(30px)
          }
          5.4167% {
            transform:translateX(30px)
          }
          5.8333% {
            transform:translateX(30px)
          }
          6.25% {
            transform:translateX(30px)
          }
          6.6667% {
            transform:translateX(30px)
          }
          7.0833% {
            transform:translateX(30px)
          }
          7.5% {
            transform:translateX(30px)
          }
          7.9167% {
            transform:translateX(30px)
          }
          8.3333% {
            transform:translateX(30px)
          }
          8.75% {
            transform:translateX(34.0598px)
          }
          9.1667% {
            transform:translateX(42.6901px)
          }
          9.5833% {
            transform:translateX(52.5884px)
          }
          10% {
            transform:translateX(62.1075px)
          }
          10.4167% {
            transform:translateX(70.5222px)
          }
          10.8333% {
            transform:translateX(77.6025px)
          }
          11.25% {
            transform:translateX(83.3693px)
          }
          11.6667% {
            transform:translateX(87.9575px)
          }
          12.0833% {
            transform:translateX(91.542px)
          }
          12.5% {
            transform:translateX(94.2995px)
          }
          12.9167% {
            transform:translateX(96.3908px)
          }
          13.3333% {
            transform:translateX(97.9543px)
          }
          13.75% {
            transform:translateX(99.1044px)
          }
          14.1667% {
            transform:translateX(99.9339px)
          }
          14.5833% {
            transform:translateX(100.5169px)
          }
          15% {
            transform:translateX(100.9114px)
          }
          15.4167% {
            transform:translateX(101.1627px)
          }
          15.8333% {
            transform:translateX(101.3059px)
          }
          16.25% {
            transform:translateX(101.3681px)
          }
          16.6667% {
            transform:translateX(101.3698px)
          }
          17.0833% {
            transform:translateX(101.3268px)
          }
          17.5% {
            transform:translateX(101.2513px)
          }
          17.9167% {
            transform:translateX(101.1522px)
          }
          18.3333% {
            transform:translateX(101.0364px)
          }
          18.75% {
            transform:translateX(100.9093px)
          }
          19.1667% {
            transform:translateX(100.7746px)
          }
          19.5833% {
            transform:translateX(100.6353px)
          }
          20% {
            transform:translateX(100.4936px)
          }
          20.4167% {
            transform:translateX(100.3512px)
          }
          20.8333% {
            transform:translateX(100.2092px)
          }
          21.25% {
            transform:translateX(100.0684px)
          }
          21.6667% {
            transform:translateX(99.9297px)
          }
          22.0833% {
            transform:translateX(99.7933px)
          }
          22.5% {
            transform:translateX(99.6596px)
          }
          22.9167% {
            transform:translateX(99.5289px)
          }
          23.3333% {
            transform:translateX(99.4012px)
          }
          23.75% {
            transform:translateX(99.2767px)
          }
          24.1667% {
            transform:translateX(99.1554px)
          }
          24.5833% {
            transform:translateX(99.0372px)
          }
          25% {
            transform:translateX(98.9222px)
          }
          25.4167% {
            transform:translateX(98.8103px)
          }
          25.8333% {
            transform:translateX(98.7015px)
          }
          26.25% {
            transform:translateX(98.5958px)
          }
          26.6667% {
            transform:translateX(98.493px)
          }
          27.0833% {
            transform:translateX(98.393px)
          }
          27.5% {
            transform:translateX(98.2959px)
          }
          27.9167% {
            transform:translateX(98.2016px)
          }
          28.3333% {
            transform:translateX(98.1099px)
          }
          28.75% {
            transform:translateX(98.0209px)
          }
          29.1667% {
            transform:translateX(97.9344px)
          }
          29.5833% {
            transform:translateX(97.8503px)
          }
          30% {
            transform:translateX(97.7687px)
          }
          30.4167% {
            transform:translateX(97.6893px)
          }
          30.8333% {
            transform:translateX(97.6123px)
          }
          31.25% {
            transform:translateX(97.5375px)
          }
          31.6667% {
            transform:translateX(97.4648px)
          }
          32.0833% {
            transform:translateX(97.3941px)
          }
          32.5% {
            transform:translateX(97.3255px)
          }
          32.9167% {
            transform:translateX(97.2589px)
          }
          33.3333% {
            transform:translateX(97.1942px)
          }
          33.75% {
            transform:translateX(97.1313px)
          }
          34.1667% {
            transform:translateX(97.0702px)
          }
          34.5833% {
            transform:translateX(97.0109px)
          }
          35% {
            transform:translateX(96.9533px)
          }
          35.4167% {
            transform:translateX(96.8973px)
          }
          35.8333% {
            transform:translateX(96.843px)
          }
          36.25% {
            transform:translateX(96.7902px)
          }
          36.6667% {
            transform:translateX(96.7389px)
          }
          37.0833% {
            transform:translateX(96.689px)
          }
          37.5% {
            transform:translateX(96.6406px)
          }
          37.9167% {
            transform:translateX(96.5936px)
          }
          38.3333% {
            transform:translateX(96.548px)
          }
          38.75% {
            transform:translateX(96.5036px)
          }
          39.1667% {
            transform:translateX(96.4605px)
          }
          39.5833% {
            transform:translateX(96.4187px)
          }
          40% {
            transform:translateX(96.378px)
          }
          40.4167% {
            transform:translateX(96.3385px)
          }
          40.8333% {
            transform:translateX(96.3002px)
          }
          41.25% {
            transform:translateX(96.2629px)
          }
          41.6667% {
            transform:translateX(96.2267px)
          }
          42.0833% {
            transform:translateX(96.1916px)
          }
          42.5% {
            transform:translateX(96.1574px)
          }
          42.9167% {
            transform:translateX(96.1243px)
          }
          43.3333% {
            transform:translateX(96.0921px)
          }
          43.75% {
            transform:translateX(96.0608px)
          }
          44.1667% {
            transform:translateX(96.0304px)
          }
          44.5833% {
            transform:translateX(96.0009px)
          }
          45% {
            transform:translateX(95.9722px)
          }
          45.4167% {
            transform:translateX(95.9443px)
          }
          45.8333% {
            transform:translateX(95.9173px)
          }
          46.25% {
            transform:translateX(95.891px)
          }
          46.6667% {
            transform:translateX(95.8655px)
          }
          47.0833% {
            transform:translateX(95.8407px)
          }
          47.5% {
            transform:translateX(95.8166px)
          }
          47.9167% {
            transform:translateX(95.7932px)
          }
          48.3333% {
            transform:translateX(95.7704px)
          }
          48.75% {
            transform:translateX(95.7484px)
          }
          49.1667% {
            transform:translateX(95.7269px)
          }
          49.5833% {
            transform:translateX(95.7061px)
          }
          50% {
            transform:translateX(95.6859px)
          }
          50.4167% {
            transform:translateX(95.6662px)
          }
          50.8333% {
            transform:translateX(95.6471px)
          }
          51.25% {
            transform:translateX(95.6286px)
          }
          51.6667% {
            transform:translateX(95.6106px)
          }
          52.0833% {
            transform:translateX(95.5931px)
          }
          52.5% {
            transform:translateX(95.5761px)
          }
          52.9167% {
            transform:translateX(95.5596px)
          }
          53.3333% {
            transform:translateX(95.5435px)
          }
          53.75% {
            transform:translateX(95.528px)
          }
          54.1667% {
            transform:translateX(95.5128px)
          }
          54.5833% {
            transform:translateX(95.4981px)
          }
          55% {
            transform:translateX(95.4839px)
          }
          55.4167% {
            transform:translateX(95.47px)
          }
          55.8333% {
            transform:translateX(95.4565px)
          }
          56.25% {
            transform:translateX(95.4434px)
          }
          56.6667% {
            transform:translateX(95.4307px)
          }
          57.0833% {
            transform:translateX(95.4184px)
          }
          57.5% {
            transform:translateX(95.4064px)
          }
          57.9167% {
            transform:translateX(95.3948px)
          }
          58.3333% {
            transform:translateX(95.3835px)
          }
          58.75% {
            transform:translateX(95.3725px)
          }
          59.1667% {
            transform:translateX(95.3618px)
          }
          59.5833% {
            transform:translateX(95.3514px)
          }
          60% {
            transform:translateX(95.3414px)
          }
          60.4167% {
            transform:translateX(95.3316px)
          }
          60.8333% {
            transform:translateX(95.3221px)
          }
          61.25% {
            transform:translateX(95.3128px)
          }
          61.6667% {
            transform:translateX(95.3039px)
          }
          62.0833% {
            transform:translateX(95.2952px)
          }
          62.5% {
            transform:translateX(95.2867px)
          }
          62.9167% {
            transform:translateX(95.2785px)
          }
          63.3333% {
            transform:translateX(95.2705px)
          }
          63.75% {
            transform:translateX(95.2628px)
          }
          64.1667% {
            transform:translateX(95.2552px)
          }
          64.5833% {
            transform:translateX(95.2479px)
          }
          65% {
            transform:translateX(95.2408px)
          }
          65.4167% {
            transform:translateX(95.2339px)
          }
          65.8333% {
            transform:translateX(95.2272px)
          }
          66.25% {
            transform:translateX(95.2207px)
          }
          66.6667% {
            transform:translateX(95.2144px)
          }
          67.0833% {
            transform:translateX(95.2082px)
          }
          67.5% {
            transform:translateX(95.2023px)
          }
          67.9167% {
            transform:translateX(95.1965px)
          }
          68.3333% {
            transform:translateX(95.1908px)
          }
          68.75% {
            transform:translateX(95.1854px)
          }
          69.1667% {
            transform:translateX(95.1801px)
          }
          69.5833% {
            transform:translateX(95.1749px)
          }
          70% {
            transform:translateX(95.1699px)
          }
          70.4167% {
            transform:translateX(95.165px)
          }
          70.8333% {
            transform:translateX(95.1603px)
          }
          71.25% {
            transform:translateX(95.1557px)
          }
          71.6667% {
            transform:translateX(95.1512px)
          }
          72.0833% {
            transform:translateX(95.1469px)
          }
          72.5% {
            transform:translateX(95.1427px)
          }
          72.9167% {
            transform:translateX(95.1386px)
          }
          73.3333% {
            transform:translateX(95.1346px)
          }
          73.75% {
            transform:translateX(95.1308px)
          }
          74.1667% {
            transform:translateX(95.127px)
          }
          74.5833% {
            transform:translateX(95.1234px)
          }
          75% {
            transform:translateX(95.1199px)
          }
          75.4167% {
            transform:translateX(95.1164px)
          }
          75.8333% {
            transform:translateX(95.1131px)
          }
          76.25% {
            transform:translateX(95.1098px)
          }
          76.6667% {
            transform:translateX(95.1067px)
          }
          77.0833% {
            transform:translateX(95.1036px)
          }
          77.5% {
            transform:translateX(95.1007px)
          }
          77.9167% {
            transform:translateX(95.0978px)
          }
          78.3333% {
            transform:translateX(95.095px)
          }
          78.75% {
            transform:translateX(95.0923px)
          }
          79.1667% {
            transform:translateX(95.0896px)
          }
          79.5833% {
            transform:translateX(95.0871px)
          }
          80% {
            transform:translateX(95.0846px)
          }
          80.4167% {
            transform:translateX(95.0821px)
          }
          80.8333% {
            transform:translateX(95.0798px)
          }
          81.25% {
            transform:translateX(95.0775px)
          }
          81.6667% {
            transform:translateX(95.0753px)
          }
          82.0833% {
            transform:translateX(95.0731px)
          }
          82.5% {
            transform:translateX(95.071px)
          }
          82.9167% {
            transform:translateX(95.069px)
          }
          83.3333% {
            transform:translateX(95.067px)
          }
          83.75% {
            transform:translateX(95.0651px)
          }
          84.1667% {
            transform:translateX(95.0632px)
          }
          84.5833% {
            transform:translateX(95.0614px)
          }
          85% {
            transform:translateX(95.0597px)
          }
          85.4167% {
            transform:translateX(95.0579px)
          }
          85.8333% {
            transform:translateX(95.0563px)
          }
          86.25% {
            transform:translateX(95.0547px)
          }
          86.6667% {
            transform:translateX(95.0531px)
          }
          87.0833% {
            transform:translateX(95.0516px)
          }
          87.5% {
            transform:translateX(95.0501px)
          }
          95% {
            transform:translateX(95.0501px)
          }
          95.01%,100% {
            transform:translateX(30px)
          }
        }
        .target {
          animation:target 12s linear infinite
        }
        @keyframes target {
          0% {
            cx:30
          }
          0.4167% {
            cx:30
          }
          0.8333% {
            cx:30
          }
          1.25% {
            cx:30
          }
          1.6667% {
            cx:30
          }
          2.0833% {
            cx:30
          }
          2.5% {
            cx:30
          }
          2.9167% {
            cx:30
          }
          3.3333% {
            cx:30
          }
          3.75% {
            cx:30
          }
          4.1667% {
            cx:30
          }
          4.5833% {
            cx:30
          }
          5% {
            cx:30
          }
          5.4167% {
            cx:30
          }
          5.8333% {
            cx:30
          }
          6.25% {
            cx:30
          }
          6.6667% {
            cx:30
          }
          7.0833% {
            cx:30
          }
          7.5% {
            cx:30
          }
          7.9167% {
            cx:30
          }
          8.3333% {
            cx:95
          }
          8.75% {
            cx:95
          }
          9.1667% {
            cx:95
          }
          9.5833% {
            cx:95
          }
          10% {
            cx:95
          }
          10.4167% {
            cx:95
          }
          10.8333% {
            cx:95
          }
          11.25% {
            cx:95
          }
          11.6667% {
            cx:95
          }
          12.0833% {
            cx:95
          }
          12.5% {
            cx:95
          }
          12.9167% {
            cx:95
          }
          13.3333% {
            cx:95
          }
          13.75% {
            cx:95
          }
          14.1667% {
            cx:95
          }
          14.5833% {
            cx:95
          }
          15% {
            cx:95
          }
          15.4167% {
            cx:95
          }
          15.8333% {
            cx:95
          }
          16.25% {
            cx:95
          }
          16.6667% {
            cx:95
          }
          17.0833% {
            cx:95
          }
          17.5% {
            cx:95
          }
          17.9167% {
            cx:95
          }
          18.3333% {
            cx:95
          }
          18.75% {
            cx:95
          }
          19.1667% {
            cx:95
          }
          19.5833% {
            cx:95
          }
          20% {
            cx:95
          }
          20.4167% {
            cx:95
          }
          20.8333% {
            cx:95
          }
          21.25% {
            cx:95
          }
          21.6667% {
            cx:95
          }
          22.0833% {
            cx:95
          }
          22.5% {
            cx:95
          }
          22.9167% {
            cx:95
          }
          23.3333% {
            cx:95
          }
          23.75% {
            cx:95
          }
          24.1667% {
            cx:95
          }
          24.5833% {
            cx:95
          }
          25% {
            cx:95
          }
          25.4167% {
            cx:95
          }
          25.8333% {
            cx:95
          }
          26.25% {
            cx:95
          }
          26.6667% {
            cx:95
          }
          27.0833% {
            cx:95
          }
          27.5% {
            cx:95
          }
          27.9167% {
            cx:95
          }
          28.3333% {
            cx:95
          }
          28.75% {
            cx:95
          }
          29.1667% {
            cx:95
          }
          29.5833% {
            cx:95
          }
          30% {
            cx:95
          }
          30.4167% {
            cx:95
          }
          30.8333% {
            cx:95
          }
          31.25% {
            cx:95
          }
          31.6667% {
            cx:95
          }
          32.0833% {
            cx:95
          }
          32.5% {
            cx:95
          }
          32.9167% {
            cx:95
          }
          33.3333% {
            cx:95
          }
          33.75% {
            cx:95
          }
          34.1667% {
            cx:95
          }
          34.5833% {
            cx:95
          }
          35% {
            cx:95
          }
          35.4167% {
            cx:95
          }
          35.8333% {
            cx:95
          }
          36.25% {
            cx:95
          }
          36.6667% {
            cx:95
          }
          37.0833% {
            cx:95
          }
          37.5% {
            cx:95
          }
          37.9167% {
            cx:95
          }
          38.3333% {
            cx:95
          }
          38.75% {
            cx:95
          }
          39.1667% {
            cx:95
          }
          39.5833% {
            cx:95
          }
          40% {
            cx:95
          }
          40.4167% {
            cx:95
          }
          40.8333% {
            cx:95
          }
          41.25% {
            cx:95
          }
          41.6667% {
            cx:95
          }
          42.0833% {
            cx:95
          }
          42.5% {
            cx:95
          }
          42.9167% {
            cx:95
          }
          43.3333% {
            cx:95
          }
          43.75% {
            cx:95
          }
          44.1667% {
            cx:95
          }
          44.5833% {
            cx:95
          }
          45% {
            cx:95
          }
          45.4167% {
            cx:95
          }
          45.8333% {
            cx:95
          }
          46.25% {
            cx:95
          }
          46.6667% {
            cx:95
          }
          47.0833% {
            cx:95
          }
          47.5% {
            cx:95
          }
          47.9167% {
            cx:95
          }
          48.3333% {
            cx:95
          }
          48.75% {
            cx:95
          }
          49.1667% {
            cx:95
          }
          49.5833% {
            cx:95
          }
          50% {
            cx:95
          }
          50.4167% {
            cx:95
          }
          50.8333% {
            cx:95
          }
          51.25% {
            cx:95
          }
          51.6667% {
            cx:95
          }
          52.0833% {
            cx:95
          }
          52.5% {
            cx:95
          }
          52.9167% {
            cx:95
          }
          53.3333% {
            cx:95
          }
          53.75% {
            cx:95
          }
          54.1667% {
            cx:95
          }
          54.5833% {
            cx:95
          }
          55% {
            cx:95
          }
          55.4167% {
            cx:95
          }
          55.8333% {
            cx:95
          }
          56.25% {
            cx:95
          }
          56.6667% {
            cx:95
          }
          57.0833% {
            cx:95
          }
          57.5% {
            cx:95
          }
          57.9167% {
            cx:95
          }
          58.3333% {
            cx:95
          }
          58.75% {
            cx:95
          }
          59.1667% {
            cx:95
          }
          59.5833% {
            cx:95
          }
          60% {
            cx:95
          }
          60.4167% {
            cx:95
          }
          60.8333% {
            cx:95
          }
          61.25% {
            cx:95
          }
          61.6667% {
            cx:95
          }
          62.0833% {
            cx:95
          }
          62.5% {
            cx:95
          }
          62.9167% {
            cx:95
          }
          63.3333% {
            cx:95
          }
          63.75% {
            cx:95
          }
          64.1667% {
            cx:95
          }
          64.5833% {
            cx:95
          }
          65% {
            cx:95
          }
          65.4167% {
            cx:95
          }
          65.8333% {
            cx:95
          }
          66.25% {
            cx:95
          }
          66.6667% {
            cx:95
          }
          67.0833% {
            cx:95
          }
          67.5% {
            cx:95
          }
          67.9167% {
            cx:95
          }
          68.3333% {
            cx:95
          }
          68.75% {
            cx:95
          }
          69.1667% {
            cx:95
          }
          69.5833% {
            cx:95
          }
          70% {
            cx:95
          }
          70.4167% {
            cx:95
          }
          70.8333% {
            cx:95
          }
          71.25% {
            cx:95
          }
          71.6667% {
            cx:95
          }
          72.0833% {
            cx:95
          }
          72.5% {
            cx:95
          }
          72.9167% {
            cx:95
          }
          73.3333% {
            cx:95
          }
          73.75% {
            cx:95
          }
          74.1667% {
            cx:95
          }
          74.5833% {
            cx:95
          }
          75% {
            cx:95
          }
          75.4167% {
            cx:95
          }
          75.8333% {
            cx:95
          }
          76.25% {
            cx:95
          }
          76.6667% {
            cx:95
          }
          77.0833% {
            cx:95
          }
          77.5% {
            cx:95
          }
          77.9167% {
            cx:95
          }
          78.3333% {
            cx:95
          }
          78.75% {
            cx:95
          }
          79.1667% {
            cx:95
          }
          79.5833% {
            cx:95
          }
          80% {
            cx:95
          }
          80.4167% {
            cx:95
          }
          80.8333% {
            cx:95
          }
          81.25% {
            cx:95
          }
          81.6667% {
            cx:95
          }
          82.0833% {
            cx:95
          }
          82.5% {
            cx:95
          }
          82.9167% {
            cx:95
          }
          83.3333% {
            cx:95
          }
          83.75% {
            cx:95
          }
          84.1667% {
            cx:95
          }
          84.5833% {
            cx:95
          }
          85% {
            cx:95
          }
          85.4167% {
            cx:95
          }
          85.8333% {
            cx:95
          }
          86.25% {
            cx:95
          }
          86.6667% {
            cx:95
          }
          87.0833% {
            cx:95
          }
          87.5% {
            cx:95
          }
          95% {
            cx:95
          }
          95.01%,100% {
            cx:30
          }
        }
        .gap {
          animation:gap 12s linear infinite
        }
        @keyframes gap {
          0% {
            d:path("M30 38V34H30V38")
          }
          0.4167% {
            d:path("M30 38V34H30V38")
          }
          0.8333% {
            d:path("M30 38V34H30V38")
          }
          1.25% {
            d:path("M30 38V34H30V38")
          }
          1.6667% {
            d:path("M30 38V34H30V38")
          }
          2.0833% {
            d:path("M30 38V34H30V38")
          }
          2.5% {
            d:path("M30 38V34H30V38")
          }
          2.9167% {
            d:path("M30 38V34H30V38")
          }
          3.3333% {
            d:path("M30 38V34H30V38")
          }
          3.75% {
            d:path("M30 38V34H30V38")
          }
          4.1667% {
            d:path("M30 38V34H30V38")
          }
          4.5833% {
            d:path("M30 38V34H30V38")
          }
          5% {
            d:path("M30 38V34H30V38")
          }
          5.4167% {
            d:path("M30 38V34H30V38")
          }
          5.8333% {
            d:path("M30 38V34H30V38")
          }
          6.25% {
            d:path("M30 38V34H30V38")
          }
          6.6667% {
            d:path("M30 38V34H30V38")
          }
          7.0833% {
            d:path("M30 38V34H30V38")
          }
          7.5% {
            d:path("M30 38V34H30V38")
          }
          7.9167% {
            d:path("M30 38V34H30V38")
          }
          8.3333% {
            d:path("M30 38V34H95V38")
          }
          8.75% {
            d:path("M34.0598 38V34H95V38")
          }
          9.1667% {
            d:path("M42.6901 38V34H95V38")
          }
          9.5833% {
            d:path("M52.5884 38V34H95V38")
          }
          10% {
            d:path("M62.1075 38V34H95V38")
          }
          10.4167% {
            d:path("M70.5222 38V34H95V38")
          }
          10.8333% {
            d:path("M77.6025 38V34H95V38")
          }
          11.25% {
            d:path("M83.3693 38V34H95V38")
          }
          11.6667% {
            d:path("M87.9575 38V34H95V38")
          }
          12.0833% {
            d:path("M91.542 38V34H95V38")
          }
          12.5% {
            d:path("M94.2995 38V34H95V38")
          }
          12.9167% {
            d:path("M96.3908 38V34H95V38")
          }
          13.3333% {
            d:path("M97.9543 38V34H95V38")
          }
          13.75% {
            d:path("M99.1044 38V34H95V38")
          }
          14.1667% {
            d:path("M99.9339 38V34H95V38")
          }
          14.5833% {
            d:path("M100.5169 38V34H95V38")
          }
          15% {
            d:path("M100.9114 38V34H95V38")
          }
          15.4167% {
            d:path("M101.1627 38V34H95V38")
          }
          15.8333% {
            d:path("M101.3059 38V34H95V38")
          }
          16.25% {
            d:path("M101.3681 38V34H95V38")
          }
          16.6667% {
            d:path("M101.3698 38V34H95V38")
          }
          17.0833% {
            d:path("M101.3268 38V34H95V38")
          }
          17.5% {
            d:path("M101.2513 38V34H95V38")
          }
          17.9167% {
            d:path("M101.1522 38V34H95V38")
          }
          18.3333% {
            d:path("M101.0364 38V34H95V38")
          }
          18.75% {
            d:path("M100.9093 38V34H95V38")
          }
          19.1667% {
            d:path("M100.7746 38V34H95V38")
          }
          19.5833% {
            d:path("M100.6353 38V34H95V38")
          }
          20% {
            d:path("M100.4936 38V34H95V38")
          }
          20.4167% {
            d:path("M100.3512 38V34H95V38")
          }
          20.8333% {
            d:path("M100.2092 38V34H95V38")
          }
          21.25% {
            d:path("M100.0684 38V34H95V38")
          }
          21.6667% {
            d:path("M99.9297 38V34H95V38")
          }
          22.0833% {
            d:path("M99.7933 38V34H95V38")
          }
          22.5% {
            d:path("M99.6596 38V34H95V38")
          }
          22.9167% {
            d:path("M99.5289 38V34H95V38")
          }
          23.3333% {
            d:path("M99.4012 38V34H95V38")
          }
          23.75% {
            d:path("M99.2767 38V34H95V38")
          }
          24.1667% {
            d:path("M99.1554 38V34H95V38")
          }
          24.5833% {
            d:path("M99.0372 38V34H95V38")
          }
          25% {
            d:path("M98.9222 38V34H95V38")
          }
          25.4167% {
            d:path("M98.8103 38V34H95V38")
          }
          25.8333% {
            d:path("M98.7015 38V34H95V38")
          }
          26.25% {
            d:path("M98.5958 38V34H95V38")
          }
          26.6667% {
            d:path("M98.493 38V34H95V38")
          }
          27.0833% {
            d:path("M98.393 38V34H95V38")
          }
          27.5% {
            d:path("M98.2959 38V34H95V38")
          }
          27.9167% {
            d:path("M98.2016 38V34H95V38")
          }
          28.3333% {
            d:path("M98.1099 38V34H95V38")
          }
          28.75% {
            d:path("M98.0209 38V34H95V38")
          }
          29.1667% {
            d:path("M97.9344 38V34H95V38")
          }
          29.5833% {
            d:path("M97.8503 38V34H95V38")
          }
          30% {
            d:path("M97.7687 38V34H95V38")
          }
          30.4167% {
            d:path("M97.6893 38V34H95V38")
          }
          30.8333% {
            d:path("M97.6123 38V34H95V38")
          }
          31.25% {
            d:path("M97.5375 38V34H95V38")
          }
          31.6667% {
            d:path("M97.4648 38V34H95V38")
          }
          32.0833% {
            d:path("M97.3941 38V34H95V38")
          }
          32.5% {
            d:path("M97.3255 38V34H95V38")
          }
          32.9167% {
            d:path("M97.2589 38V34H95V38")
          }
          33.3333% {
            d:path("M97.1942 38V34H95V38")
          }
          33.75% {
            d:path("M97.1313 38V34H95V38")
          }
          34.1667% {
            d:path("M97.0702 38V34H95V38")
          }
          34.5833% {
            d:path("M97.0109 38V34H95V38")
          }
          35% {
            d:path("M96.9533 38V34H95V38")
          }
          35.4167% {
            d:path("M96.8973 38V34H95V38")
          }
          35.8333% {
            d:path("M96.843 38V34H95V38")
          }
          36.25% {
            d:path("M96.7902 38V34H95V38")
          }
          36.6667% {
            d:path("M96.7389 38V34H95V38")
          }
          37.0833% {
            d:path("M96.689 38V34H95V38")
          }
          37.5% {
            d:path("M96.6406 38V34H95V38")
          }
          37.9167% {
            d:path("M96.5936 38V34H95V38")
          }
          38.3333% {
            d:path("M96.548 38V34H95V38")
          }
          38.75% {
            d:path("M96.5036 38V34H95V38")
          }
          39.1667% {
            d:path("M96.4605 38V34H95V38")
          }
          39.5833% {
            d:path("M96.4187 38V34H95V38")
          }
          40% {
            d:path("M96.378 38V34H95V38")
          }
          40.4167% {
            d:path("M96.3385 38V34H95V38")
          }
          40.8333% {
            d:path("M96.3002 38V34H95V38")
          }
          41.25% {
            d:path("M96.2629 38V34H95V38")
          }
          41.6667% {
            d:path("M96.2267 38V34H95V38")
          }
          42.0833% {
            d:path("M96.1916 38V34H95V38")
          }
          42.5% {
            d:path("M96.1574 38V34H95V38")
          }
          42.9167% {
            d:path("M96.1243 38V34H95V38")
          }
          43.3333% {
            d:path("M96.0921 38V34H95V38")
          }
          43.75% {
            d:path("M96.0608 38V34H95V38")
          }
          44.1667% {
            d:path("M96.0304 38V34H95V38")
          }
          44.5833% {
            d:path("M96.0009 38V34H95V38")
          }
          45% {
            d:path("M95.9722 38V34H95V38")
          }
          45.4167% {
            d:path("M95.9443 38V34H95V38")
          }
          45.8333% {
            d:path("M95.9173 38V34H95V38")
          }
          46.25% {
            d:path("M95.891 38V34H95V38")
          }
          46.6667% {
            d:path("M95.8655 38V34H95V38")
          }
          47.0833% {
            d:path("M95.8407 38V34H95V38")
          }
          47.5% {
            d:path("M95.8166 38V34H95V38")
          }
          47.9167% {
            d:path("M95.7932 38V34H95V38")
          }
          48.3333% {
            d:path("M95.7704 38V34H95V38")
          }
          48.75% {
            d:path("M95.7484 38V34H95V38")
          }
          49.1667% {
            d:path("M95.7269 38V34H95V38")
          }
          49.5833% {
            d:path("M95.7061 38V34H95V38")
          }
          50% {
            d:path("M95.6859 38V34H95V38")
          }
          50.4167% {
            d:path("M95.6662 38V34H95V38")
          }
          50.8333% {
            d:path("M95.6471 38V34H95V38")
          }
          51.25% {
            d:path("M95.6286 38V34H95V38")
          }
          51.6667% {
            d:path("M95.6106 38V34H95V38")
          }
          52.0833% {
            d:path("M95.5931 38V34H95V38")
          }
          52.5% {
            d:path("M95.5761 38V34H95V38")
          }
          52.9167% {
            d:path("M95.5596 38V34H95V38")
          }
          53.3333% {
            d:path("M95.5435 38V34H95V38")
          }
          53.75% {
            d:path("M95.528 38V34H95V38")
          }
          54.1667% {
            d:path("M95.5128 38V34H95V38")
          }
          54.5833% {
            d:path("M95.4981 38V34H95V38")
          }
          55% {
            d:path("M95.4839 38V34H95V38")
          }
          55.4167% {
            d:path("M95.47 38V34H95V38")
          }
          55.8333% {
            d:path("M95.4565 38V34H95V38")
          }
          56.25% {
            d:path("M95.4434 38V34H95V38")
          }
          56.6667% {
            d:path("M95.4307 38V34H95V38")
          }
          57.0833% {
            d:path("M95.4184 38V34H95V38")
          }
          57.5% {
            d:path("M95.4064 38V34H95V38")
          }
          57.9167% {
            d:path("M95.3948 38V34H95V38")
          }
          58.3333% {
            d:path("M95.3835 38V34H95V38")
          }
          58.75% {
            d:path("M95.3725 38V34H95V38")
          }
          59.1667% {
            d:path("M95.3618 38V34H95V38")
          }
          59.5833% {
            d:path("M95.3514 38V34H95V38")
          }
          60% {
            d:path("M95.3414 38V34H95V38")
          }
          60.4167% {
            d:path("M95.3316 38V34H95V38")
          }
          60.8333% {
            d:path("M95.3221 38V34H95V38")
          }
          61.25% {
            d:path("M95.3128 38V34H95V38")
          }
          61.6667% {
            d:path("M95.3039 38V34H95V38")
          }
          62.0833% {
            d:path("M95.2952 38V34H95V38")
          }
          62.5% {
            d:path("M95.2867 38V34H95V38")
          }
          62.9167% {
            d:path("M95.2785 38V34H95V38")
          }
          63.3333% {
            d:path("M95.2705 38V34H95V38")
          }
          63.75% {
            d:path("M95.2628 38V34H95V38")
          }
          64.1667% {
            d:path("M95.2552 38V34H95V38")
          }
          64.5833% {
            d:path("M95.2479 38V34H95V38")
          }
          65% {
            d:path("M95.2408 38V34H95V38")
          }
          65.4167% {
            d:path("M95.2339 38V34H95V38")
          }
          65.8333% {
            d:path("M95.2272 38V34H95V38")
          }
          66.25% {
            d:path("M95.2207 38V34H95V38")
          }
          66.6667% {
            d:path("M95.2144 38V34H95V38")
          }
          67.0833% {
            d:path("M95.2082 38V34H95V38")
          }
          67.5% {
            d:path("M95.2023 38V34H95V38")
          }
          67.9167% {
            d:path("M95.1965 38V34H95V38")
          }
          68.3333% {
            d:path("M95.1908 38V34H95V38")
          }
          68.75% {
            d:path("M95.1854 38V34H95V38")
          }
          69.1667% {
            d:path("M95.1801 38V34H95V38")
          }
          69.5833% {
            d:path("M95.1749 38V34H95V38")
          }
          70% {
            d:path("M95.1699 38V34H95V38")
          }
          70.4167% {
            d:path("M95.165 38V34H95V38")
          }
          70.8333% {
            d:path("M95.1603 38V34H95V38")
          }
          71.25% {
            d:path("M95.1557 38V34H95V38")
          }
          71.6667% {
            d:path("M95.1512 38V34H95V38")
          }
          72.0833% {
            d:path("M95.1469 38V34H95V38")
          }
          72.5% {
            d:path("M95.1427 38V34H95V38")
          }
          72.9167% {
            d:path("M95.1386 38V34H95V38")
          }
          73.3333% {
            d:path("M95.1346 38V34H95V38")
          }
          73.75% {
            d:path("M95.1308 38V34H95V38")
          }
          74.1667% {
            d:path("M95.127 38V34H95V38")
          }
          74.5833% {
            d:path("M95.1234 38V34H95V38")
          }
          75% {
            d:path("M95.1199 38V34H95V38")
          }
          75.4167% {
            d:path("M95.1164 38V34H95V38")
          }
          75.8333% {
            d:path("M95.1131 38V34H95V38")
          }
          76.25% {
            d:path("M95.1098 38V34H95V38")
          }
          76.6667% {
            d:path("M95.1067 38V34H95V38")
          }
          77.0833% {
            d:path("M95.1036 38V34H95V38")
          }
          77.5% {
            d:path("M95.1007 38V34H95V38")
          }
          77.9167% {
            d:path("M95.0978 38V34H95V38")
          }
          78.3333% {
            d:path("M95.095 38V34H95V38")
          }
          78.75% {
            d:path("M95.0923 38V34H95V38")
          }
          79.1667% {
            d:path("M95.0896 38V34H95V38")
          }
          79.5833% {
            d:path("M95.0871 38V34H95V38")
          }
          80% {
            d:path("M95.0846 38V34H95V38")
          }
          80.4167% {
            d:path("M95.0821 38V34H95V38")
          }
          80.8333% {
            d:path("M95.0798 38V34H95V38")
          }
          81.25% {
            d:path("M95.0775 38V34H95V38")
          }
          81.6667% {
            d:path("M95.0753 38V34H95V38")
          }
          82.0833% {
            d:path("M95.0731 38V34H95V38")
          }
          82.5% {
            d:path("M95.071 38V34H95V38")
          }
          82.9167% {
            d:path("M95.069 38V34H95V38")
          }
          83.3333% {
            d:path("M95.067 38V34H95V38")
          }
          83.75% {
            d:path("M95.0651 38V34H95V38")
          }
          84.1667% {
            d:path("M95.0632 38V34H95V38")
          }
          84.5833% {
            d:path("M95.0614 38V34H95V38")
          }
          85% {
            d:path("M95.0597 38V34H95V38")
          }
          85.4167% {
            d:path("M95.0579 38V34H95V38")
          }
          85.8333% {
            d:path("M95.0563 38V34H95V38")
          }
          86.25% {
            d:path("M95.0547 38V34H95V38")
          }
          86.6667% {
            d:path("M95.0531 38V34H95V38")
          }
          87.0833% {
            d:path("M95.0516 38V34H95V38")
          }
          87.5% {
            d:path("M95.0501 38V34H95V38")
          }
          95% {
            d:path("M95.0501 38V34H95V38")
          }
          95.01%,100% {
            d:path("M30 38V34H30V38")
          }
        }
        .P {
          animation:P 12s linear infinite
        }
        @keyframes P {
          0% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          0.4167% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          0.8333% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          1.25% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          1.6667% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          2.0833% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          2.5% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          2.9167% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          3.3333% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          3.75% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          4.1667% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          4.5833% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          5% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          5.4167% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          5.8333% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          6.25% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          6.6667% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          7.0833% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          7.5% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          7.9167% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
          8.3333% {
            opacity:1;
            d:path("M70 85h27.2m-3-2 3 2 -3 2")
          }
          8.75% {
            opacity:1;
            d:path("M70 85h25.5011m-3-2 3 2 -3 2")
          }
          9.1667% {
            opacity:1;
            d:path("M70 85h21.8897m-3-2 3 2 -3 2")
          }
          9.5833% {
            opacity:1;
            d:path("M70 85h17.7476m-3-2 3 2 -3 2")
          }
          10% {
            opacity:1;
            d:path("M70 85h13.7642m-3-2 3 2 -3 2")
          }
          10.4167% {
            opacity:1;
            d:path("M70 85h10.243m-3-2 3 2 -3 2")
          }
          10.8333% {
            opacity:1;
            d:path("M70 85h7.2802m-3-2 3 2 -3 2")
          }
          11.25% {
            opacity:1;
            d:path("M70 85h4.867m-3-2 3 2 -3 2")
          }
          11.6667% {
            opacity:1;
            d:path("M70 85h2.947m-3-2 3 2 -3 2")
          }
          12.0833% {
            opacity:1;
            d:path("M70 85h1.4471m-3-2 3 2 -3 2")
          }
          12.5% {
            opacity:1;
            d:path("M70 85h0.2931m-3-2 3 2 -3 2")
          }
          12.9167% {
            opacity:1;
            d:path("M70 85h-0.582m3-2 -3 2 3 2")
          }
          13.3333% {
            opacity:1;
            d:path("M70 85h-1.2362m3-2 -3 2 3 2")
          }
          13.75% {
            opacity:1;
            d:path("M70 85h-1.7175m3-2 -3 2 3 2")
          }
          14.1667% {
            opacity:1;
            d:path("M70 85h-2.0647m3-2 -3 2 3 2")
          }
          14.5833% {
            opacity:1;
            d:path("M70 85h-2.3086m3-2 -3 2 3 2")
          }
          15% {
            opacity:1;
            d:path("M70 85h-2.4737m3-2 -3 2 3 2")
          }
          15.4167% {
            opacity:1;
            d:path("M70 85h-2.5789m3-2 -3 2 3 2")
          }
          15.8333% {
            opacity:1;
            d:path("M70 85h-2.6388m3-2 -3 2 3 2")
          }
          16.25% {
            opacity:1;
            d:path("M70 85h-2.6648m3-2 -3 2 3 2")
          }
          16.6667% {
            opacity:1;
            d:path("M70 85h-2.6655m3-2 -3 2 3 2")
          }
          17.0833% {
            opacity:1;
            d:path("M70 85h-2.6475m3-2 -3 2 3 2")
          }
          17.5% {
            opacity:1;
            d:path("M70 85h-2.6159m3-2 -3 2 3 2")
          }
          17.9167% {
            opacity:1;
            d:path("M70 85h-2.5744m3-2 -3 2 3 2")
          }
          18.3333% {
            opacity:1;
            d:path("M70 85h-2.526m3-2 -3 2 3 2")
          }
          18.75% {
            opacity:1;
            d:path("M70 85h-2.4728m3-2 -3 2 3 2")
          }
          19.1667% {
            opacity:1;
            d:path("M70 85h-2.4164m3-2 -3 2 3 2")
          }
          19.5833% {
            opacity:1;
            d:path("M70 85h-2.3582m3-2 -3 2 3 2")
          }
          20% {
            opacity:1;
            d:path("M70 85h-2.2989m3-2 -3 2 3 2")
          }
          20.4167% {
            opacity:1;
            d:path("M70 85h-2.2393m3-2 -3 2 3 2")
          }
          20.8333% {
            opacity:1;
            d:path("M70 85h-2.1798m3-2 -3 2 3 2")
          }
          21.25% {
            opacity:1;
            d:path("M70 85h-2.1209m3-2 -3 2 3 2")
          }
          21.6667% {
            opacity:1;
            d:path("M70 85h-2.0629m3-2 -3 2 3 2")
          }
          22.0833% {
            opacity:1;
            d:path("M70 85h-2.0058m3-2 -3 2 3 2")
          }
          22.5% {
            opacity:1;
            d:path("M70 85h-1.9499m3-2 -3 2 3 2")
          }
          22.9167% {
            opacity:1;
            d:path("M70 85h-1.8952m3-2 -3 2 3 2")
          }
          23.3333% {
            opacity:1;
            d:path("M70 85h-1.8417m3-2 -3 2 3 2")
          }
          23.75% {
            opacity:1;
            d:path("M70 85h-1.7896m3-2 -3 2 3 2")
          }
          24.1667% {
            opacity:1;
            d:path("M70 85h-1.7389m3-2 -3 2 3 2")
          }
          24.5833% {
            opacity:1;
            d:path("M70 85h-1.6894m3-2 -3 2 3 2")
          }
          25% {
            opacity:1;
            d:path("M70 85h-1.6413m3-2 -3 2 3 2")
          }
          25.4167% {
            opacity:1;
            d:path("M70 85h-1.5945m3-2 -3 2 3 2")
          }
          25.8333% {
            opacity:1;
            d:path("M70 85h-1.549m3-2 -3 2 3 2")
          }
          26.25% {
            opacity:1;
            d:path("M70 85h-1.5047m3-2 -3 2 3 2")
          }
          26.6667% {
            opacity:1;
            d:path("M70 85h-1.4617m3-2 -3 2 3 2")
          }
          27.0833% {
            opacity:1;
            d:path("M70 85h-1.4199m3-2 -3 2 3 2")
          }
          27.5% {
            opacity:1;
            d:path("M70 85h-1.3792m3-2 -3 2 3 2")
          }
          27.9167% {
            opacity:1;
            d:path("M70 85h-1.3397m3-2 -3 2 3 2")
          }
          28.3333% {
            opacity:1;
            d:path("M70 85h-1.3014m3-2 -3 2 3 2")
          }
          28.75% {
            opacity:1;
            d:path("M70 85h-1.2641m3-2 -3 2 3 2")
          }
          29.1667% {
            opacity:1;
            d:path("M70 85h-1.2279m3-2 -3 2 3 2")
          }
          29.5833% {
            opacity:1;
            d:path("M70 85h-1.1927m3-2 -3 2 3 2")
          }
          30% {
            opacity:1;
            d:path("M70 85h-1.1586m3-2 -3 2 3 2")
          }
          30.4167% {
            opacity:1;
            d:path("M70 85h-1.1254m3-2 -3 2 3 2")
          }
          30.8333% {
            opacity:1;
            d:path("M70 85h-1.0931m3-2 -3 2 3 2")
          }
          31.25% {
            opacity:1;
            d:path("M70 85h-1.0618m3-2 -3 2 3 2")
          }
          31.6667% {
            opacity:1;
            d:path("M70 85h-1.0314m3-2 -3 2 3 2")
          }
          32.0833% {
            opacity:1;
            d:path("M70 85h-1.0019m3-2 -3 2 3 2")
          }
          32.5% {
            opacity:1;
            d:path("M70 85h-0.9731m3-2 -3 2 3 2")
          }
          32.9167% {
            opacity:1;
            d:path("M70 85h-0.9453m3-2 -3 2 3 2")
          }
          33.3333% {
            opacity:1;
            d:path("M70 85h-0.9182m3-2 -3 2 3 2")
          }
          33.75% {
            opacity:1;
            d:path("M70 85h-0.8919m3-2 -3 2 3 2")
          }
          34.1667% {
            opacity:1;
            d:path("M70 85h-0.8663m3-2 -3 2 3 2")
          }
          34.5833% {
            opacity:1;
            d:path("M70 85h-0.8415m3-2 -3 2 3 2")
          }
          35% {
            opacity:1;
            d:path("M70 85h-0.8174m3-2 -3 2 3 2")
          }
          35.4167% {
            opacity:1;
            d:path("M70 85h-0.794m3-2 -3 2 3 2")
          }
          35.8333% {
            opacity:1;
            d:path("M70 85h-0.7712m3-2 -3 2 3 2")
          }
          36.25% {
            opacity:1;
            d:path("M70 85h-0.7491m3-2 -3 2 3 2")
          }
          36.6667% {
            opacity:1;
            d:path("M70 85h-0.7276m3-2 -3 2 3 2")
          }
          37.0833% {
            opacity:1;
            d:path("M70 85h-0.7068m3-2 -3 2 3 2")
          }
          37.5% {
            opacity:1;
            d:path("M70 85h-0.6865m3-2 -3 2 3 2")
          }
          37.9167% {
            opacity:1;
            d:path("M70 85h-0.6669m3-2 -3 2 3 2")
          }
          38.3333% {
            opacity:1;
            d:path("M70 85h-0.6478m3-2 -3 2 3 2")
          }
          38.75% {
            opacity:1;
            d:path("M70 85h-0.6292m3-2 -3 2 3 2")
          }
          39.1667% {
            opacity:1;
            d:path("M70 85h-0.6112m3-2 -3 2 3 2")
          }
          39.5833% {
            opacity:1;
            d:path("M70 85h-0.5937m3-2 -3 2 3 2")
          }
          40% {
            opacity:1;
            d:path("M70 85h-0.5767m3-2 -3 2 3 2")
          }
          40.4167% {
            opacity:1;
            d:path("M70 85h-0.5601m3-2 -3 2 3 2")
          }
          40.8333% {
            opacity:1;
            d:path("M70 85h-0.5441m3-2 -3 2 3 2")
          }
          41.25% {
            opacity:1;
            d:path("M70 85h-0.5285m3-2 -3 2 3 2")
          }
          41.6667% {
            opacity:1;
            d:path("M70 85h-0.5133m3-2 -3 2 3 2")
          }
          42.0833% {
            opacity:1;
            d:path("M70 85h-0.4986m3-2 -3 2 3 2")
          }
          42.5% {
            opacity:1;
            d:path("M70 85h-0.4843m3-2 -3 2 3 2")
          }
          42.9167% {
            opacity:1;
            d:path("M70 85h-0.4705m3-2 -3 2 3 2")
          }
          43.3333% {
            opacity:1;
            d:path("M70 85h-0.457m3-2 -3 2 3 2")
          }
          43.75% {
            opacity:1;
            d:path("M70 85h-0.4439m3-2 -3 2 3 2")
          }
          44.1667% {
            opacity:1;
            d:path("M70 85h-0.4312m3-2 -3 2 3 2")
          }
          44.5833% {
            opacity:1;
            d:path("M70 85h-0.4188m3-2 -3 2 3 2")
          }
          45% {
            opacity:1;
            d:path("M70 85h-0.4068m3-2 -3 2 3 2")
          }
          45.4167% {
            opacity:1;
            d:path("M70 85h-0.3952m3-2 -3 2 3 2")
          }
          45.8333% {
            opacity:1;
            d:path("M70 85h-0.3838m3-2 -3 2 3 2")
          }
          46.25% {
            opacity:1;
            d:path("M70 85h-0.3728m3-2 -3 2 3 2")
          }
          46.6667% {
            opacity:1;
            d:path("M70 85h-0.3622m3-2 -3 2 3 2")
          }
          47.0833% {
            opacity:1;
            d:path("M70 85h-0.3518m3-2 -3 2 3 2")
          }
          47.5% {
            opacity:1;
            d:path("M70 85h-0.3417m3-2 -3 2 3 2")
          }
          47.9167% {
            opacity:1;
            d:path("M70 85h-0.3319m3-2 -3 2 3 2")
          }
          48.3333% {
            opacity:1;
            d:path("M70 85h-0.3224m3-2 -3 2 3 2")
          }
          48.75% {
            opacity:1;
            d:path("M70 85h-0.3132m3-2 -3 2 3 2")
          }
          49.1667% {
            opacity:1;
            d:path("M70 85h-0.3042m3-2 -3 2 3 2")
          }
          49.5833% {
            opacity:1;
            d:path("M70 85h-0.2955m3-2 -3 2 3 2")
          }
          50% {
            opacity:1;
            d:path("M70 85h-0.287m3-2 -3 2 3 2")
          }
          50.4167% {
            opacity:1;
            d:path("M70 85h-0.2788m3-2 -3 2 3 2")
          }
          50.8333% {
            opacity:1;
            d:path("M70 85h-0.2708m3-2 -3 2 3 2")
          }
          51.25% {
            opacity:1;
            d:path("M70 85h-0.263m3-2 -3 2 3 2")
          }
          51.6667% {
            opacity:1;
            d:path("M70 85h-0.2555m3-2 -3 2 3 2")
          }
          52.0833% {
            opacity:1;
            d:path("M70 85h-0.2482m3-2 -3 2 3 2")
          }
          52.5% {
            opacity:1;
            d:path("M70 85h-0.2411m3-2 -3 2 3 2")
          }
          52.9167% {
            opacity:1;
            d:path("M70 85h-0.2342m3-2 -3 2 3 2")
          }
          53.3333% {
            opacity:1;
            d:path("M70 85h-0.2274m3-2 -3 2 3 2")
          }
          53.75% {
            opacity:1;
            d:path("M70 85h-0.2209m3-2 -3 2 3 2")
          }
          54.1667% {
            opacity:1;
            d:path("M70 85h-0.2146m3-2 -3 2 3 2")
          }
          54.5833% {
            opacity:1;
            d:path("M70 85h-0.2085m3-2 -3 2 3 2")
          }
          55% {
            opacity:1;
            d:path("M70 85h-0.2025m3-2 -3 2 3 2")
          }
          55.4167% {
            opacity:1;
            d:path("M70 85h-0.1967m3-2 -3 2 3 2")
          }
          55.8333% {
            opacity:1;
            d:path("M70 85h-0.191m3-2 -3 2 3 2")
          }
          56.25% {
            opacity:1;
            d:path("M70 85h-0.1856m3-2 -3 2 3 2")
          }
          56.6667% {
            opacity:1;
            d:path("M70 85h-0.1802m3-2 -3 2 3 2")
          }
          57.0833% {
            opacity:1;
            d:path("M70 85h-0.1751m3-2 -3 2 3 2")
          }
          57.5% {
            opacity:1;
            d:path("M70 85h-0.1701m3-2 -3 2 3 2")
          }
          57.9167% {
            opacity:1;
            d:path("M70 85h-0.1652m3-2 -3 2 3 2")
          }
          58.3333% {
            opacity:1;
            d:path("M70 85h-0.1605m3-2 -3 2 3 2")
          }
          58.75% {
            opacity:1;
            d:path("M70 85h-0.1559m3-2 -3 2 3 2")
          }
          59.1667% {
            opacity:1;
            d:path("M70 85h-0.1514m3-2 -3 2 3 2")
          }
          59.5833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          60% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          60.4167% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          60.8333% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          61.25% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          61.6667% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          62.0833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          62.5% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          62.9167% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          63.3333% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          63.75% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          64.1667% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          64.5833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          65% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          65.4167% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          65.8333% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          66.25% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          66.6667% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          67.0833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          67.5% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          67.9167% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          68.3333% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          68.75% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          69.1667% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          69.5833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          70% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          70.4167% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          70.8333% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          71.25% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          71.6667% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          72.0833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          72.5% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          72.9167% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          73.3333% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          73.75% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          74.1667% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          74.5833% {
            opacity:1;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          75% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          75.4167% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          75.8333% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          76.25% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          76.6667% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          77.0833% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          77.5% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          77.9167% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          78.3333% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          78.75% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          79.1667% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          79.5833% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          80% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          80.4167% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          80.8333% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          81.25% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          81.6667% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          82.0833% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          82.5% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          82.9167% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          83.3333% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          83.75% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          84.1667% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          84.5833% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          85% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          85.4167% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          85.8333% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          86.25% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          86.6667% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          87.0833% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          87.5% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          95% {
            opacity:0;
            d:path("M70 85h0m3-2 -3 2 3 2")
          }
          95.01%,100% {
            opacity:0;
            d:path("M70 85h0m-3-2 3 2 -3 2")
          }
        }
        .I {
          animation:I 12s linear infinite
        }
        @keyframes I {
          0% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          0.4167% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          0.8333% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          1.25% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          1.6667% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          2.0833% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          2.5% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          2.9167% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          3.3333% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          3.75% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          4.1667% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          4.5833% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          5% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          5.4167% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          5.8333% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          6.25% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          6.6667% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          7.0833% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          7.5% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          7.9167% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
          8.3333% {
            opacity:1;
            d:path("M70 101h0.3423m-3-2 3 2 -3 2")
          }
          8.75% {
            opacity:1;
            d:path("M70 101h1.0071m-3-2 3 2 -3 2")
          }
          9.1667% {
            opacity:1;
            d:path("M70 101h1.6017m-3-2 3 2 -3 2")
          }
          9.5833% {
            opacity:1;
            d:path("M70 101h2.0974m-3-2 3 2 -3 2")
          }
          10% {
            opacity:1;
            d:path("M70 101h2.4905m-3-2 3 2 -3 2")
          }
          10.4167% {
            opacity:1;
            d:path("M70 101h2.7895m-3-2 3 2 -3 2")
          }
          10.8333% {
            opacity:1;
            d:path("M70 101h3.0073m-3-2 3 2 -3 2")
          }
          11.25% {
            opacity:1;
            d:path("M70 101h3.1581m-3-2 3 2 -3 2")
          }
          11.6667% {
            opacity:1;
            d:path("M70 101h3.2548m-3-2 3 2 -3 2")
          }
          12.0833% {
            opacity:1;
            d:path("M70 101h3.3089m-3-2 3 2 -3 2")
          }
          12.5% {
            opacity:1;
            d:path("M70 101h3.33m-3-2 3 2 -3 2")
          }
          12.9167% {
            opacity:1;
            d:path("M70 101h3.3259m-3-2 3 2 -3 2")
          }
          13.3333% {
            opacity:1;
            d:path("M70 101h3.3028m-3-2 3 2 -3 2")
          }
          13.75% {
            opacity:1;
            d:path("M70 101h3.2655m-3-2 3 2 -3 2")
          }
          14.1667% {
            opacity:1;
            d:path("M70 101h3.218m-3-2 3 2 -3 2")
          }
          14.5833% {
            opacity:1;
            d:path("M70 101h3.1632m-3-2 3 2 -3 2")
          }
          15% {
            opacity:1;
            d:path("M70 101h3.1033m-3-2 3 2 -3 2")
          }
          15.4167% {
            opacity:1;
            d:path("M70 101h3.04m-3-2 3 2 -3 2")
          }
          15.8333% {
            opacity:1;
            d:path("M70 101h2.9747m-3-2 3 2 -3 2")
          }
          16.25% {
            opacity:1;
            d:path("M70 101h2.9083m-3-2 3 2 -3 2")
          }
          16.6667% {
            opacity:1;
            d:path("M70 101h2.8417m-3-2 3 2 -3 2")
          }
          17.0833% {
            opacity:1;
            d:path("M70 101h2.7752m-3-2 3 2 -3 2")
          }
          17.5% {
            opacity:1;
            d:path("M70 101h2.7094m-3-2 3 2 -3 2")
          }
          17.9167% {
            opacity:1;
            d:path("M70 101h2.6445m-3-2 3 2 -3 2")
          }
          18.3333% {
            opacity:1;
            d:path("M70 101h2.5807m-3-2 3 2 -3 2")
          }
          18.75% {
            opacity:1;
            d:path("M70 101h2.5182m-3-2 3 2 -3 2")
          }
          19.1667% {
            opacity:1;
            d:path("M70 101h2.4571m-3-2 3 2 -3 2")
          }
          19.5833% {
            opacity:1;
            d:path("M70 101h2.3974m-3-2 3 2 -3 2")
          }
          20% {
            opacity:1;
            d:path("M70 101h2.3392m-3-2 3 2 -3 2")
          }
          20.4167% {
            opacity:1;
            d:path("M70 101h2.2825m-3-2 3 2 -3 2")
          }
          20.8333% {
            opacity:1;
            d:path("M70 101h2.2272m-3-2 3 2 -3 2")
          }
          21.25% {
            opacity:1;
            d:path("M70 101h2.1735m-3-2 3 2 -3 2")
          }
          21.6667% {
            opacity:1;
            d:path("M70 101h2.1212m-3-2 3 2 -3 2")
          }
          22.0833% {
            opacity:1;
            d:path("M70 101h2.0703m-3-2 3 2 -3 2")
          }
          22.5% {
            opacity:1;
            d:path("M70 101h2.0209m-3-2 3 2 -3 2")
          }
          22.9167% {
            opacity:1;
            d:path("M70 101h1.9728m-3-2 3 2 -3 2")
          }
          23.3333% {
            opacity:1;
            d:path("M70 101h1.9261m-3-2 3 2 -3 2")
          }
          23.75% {
            opacity:1;
            d:path("M70 101h1.8807m-3-2 3 2 -3 2")
          }
          24.1667% {
            opacity:1;
            d:path("M70 101h1.8366m-3-2 3 2 -3 2")
          }
          24.5833% {
            opacity:1;
            d:path("M70 101h1.7938m-3-2 3 2 -3 2")
          }
          25% {
            opacity:1;
            d:path("M70 101h1.7521m-3-2 3 2 -3 2")
          }
          25.4167% {
            opacity:1;
            d:path("M70 101h1.7117m-3-2 3 2 -3 2")
          }
          25.8333% {
            opacity:1;
            d:path("M70 101h1.6724m-3-2 3 2 -3 2")
          }
          26.25% {
            opacity:1;
            d:path("M70 101h1.6342m-3-2 3 2 -3 2")
          }
          26.6667% {
            opacity:1;
            d:path("M70 101h1.5972m-3-2 3 2 -3 2")
          }
          27.0833% {
            opacity:1;
            d:path("M70 101h1.5612m-3-2 3 2 -3 2")
          }
          27.5% {
            opacity:1;
            d:path("M70 101h1.5262m-3-2 3 2 -3 2")
          }
          27.9167% {
            opacity:1;
            d:path("M70 101h1.4922m-3-2 3 2 -3 2")
          }
          28.3333% {
            opacity:1;
            d:path("M70 101h1.4592m-3-2 3 2 -3 2")
          }
          28.75% {
            opacity:1;
            d:path("M70 101h1.4271m-3-2 3 2 -3 2")
          }
          29.1667% {
            opacity:1;
            d:path("M70 101h1.396m-3-2 3 2 -3 2")
          }
          29.5833% {
            opacity:1;
            d:path("M70 101h1.3657m-3-2 3 2 -3 2")
          }
          30% {
            opacity:1;
            d:path("M70 101h1.3363m-3-2 3 2 -3 2")
          }
          30.4167% {
            opacity:1;
            d:path("M70 101h1.3078m-3-2 3 2 -3 2")
          }
          30.8333% {
            opacity:1;
            d:path("M70 101h1.28m-3-2 3 2 -3 2")
          }
          31.25% {
            opacity:1;
            d:path("M70 101h1.2531m-3-2 3 2 -3 2")
          }
          31.6667% {
            opacity:1;
            d:path("M70 101h1.2269m-3-2 3 2 -3 2")
          }
          32.0833% {
            opacity:1;
            d:path("M70 101h1.2015m-3-2 3 2 -3 2")
          }
          32.5% {
            opacity:1;
            d:path("M70 101h1.1768m-3-2 3 2 -3 2")
          }
          32.9167% {
            opacity:1;
            d:path("M70 101h1.1529m-3-2 3 2 -3 2")
          }
          33.3333% {
            opacity:1;
            d:path("M70 101h1.1296m-3-2 3 2 -3 2")
          }
          33.75% {
            opacity:1;
            d:path("M70 101h1.1069m-3-2 3 2 -3 2")
          }
          34.1667% {
            opacity:1;
            d:path("M70 101h1.085m-3-2 3 2 -3 2")
          }
          34.5833% {
            opacity:1;
            d:path("M70 101h1.0636m-3-2 3 2 -3 2")
          }
          35% {
            opacity:1;
            d:path("M70 101h1.0429m-3-2 3 2 -3 2")
          }
          35.4167% {
            opacity:1;
            d:path("M70 101h1.0227m-3-2 3 2 -3 2")
          }
          35.8333% {
            opacity:1;
            d:path("M70 101h1.0032m-3-2 3 2 -3 2")
          }
          36.25% {
            opacity:1;
            d:path("M70 101h0.9842m-3-2 3 2 -3 2")
          }
          36.6667% {
            opacity:1;
            d:path("M70 101h0.9657m-3-2 3 2 -3 2")
          }
          37.0833% {
            opacity:1;
            d:path("M70 101h0.9478m-3-2 3 2 -3 2")
          }
          37.5% {
            opacity:1;
            d:path("M70 101h0.9304m-3-2 3 2 -3 2")
          }
          37.9167% {
            opacity:1;
            d:path("M70 101h0.9135m-3-2 3 2 -3 2")
          }
          38.3333% {
            opacity:1;
            d:path("M70 101h0.897m-3-2 3 2 -3 2")
          }
          38.75% {
            opacity:1;
            d:path("M70 101h0.8811m-3-2 3 2 -3 2")
          }
          39.1667% {
            opacity:1;
            d:path("M70 101h0.8656m-3-2 3 2 -3 2")
          }
          39.5833% {
            opacity:1;
            d:path("M70 101h0.8505m-3-2 3 2 -3 2")
          }
          40% {
            opacity:1;
            d:path("M70 101h0.8359m-3-2 3 2 -3 2")
          }
          40.4167% {
            opacity:1;
            d:path("M70 101h0.8217m-3-2 3 2 -3 2")
          }
          40.8333% {
            opacity:1;
            d:path("M70 101h0.8079m-3-2 3 2 -3 2")
          }
          41.25% {
            opacity:1;
            d:path("M70 101h0.7945m-3-2 3 2 -3 2")
          }
          41.6667% {
            opacity:1;
            d:path("M70 101h0.7814m-3-2 3 2 -3 2")
          }
          42.0833% {
            opacity:1;
            d:path("M70 101h0.7688m-3-2 3 2 -3 2")
          }
          42.5% {
            opacity:1;
            d:path("M70 101h0.7565m-3-2 3 2 -3 2")
          }
          42.9167% {
            opacity:1;
            d:path("M70 101h0.7446m-3-2 3 2 -3 2")
          }
          43.3333% {
            opacity:1;
            d:path("M70 101h0.733m-3-2 3 2 -3 2")
          }
          43.75% {
            opacity:1;
            d:path("M70 101h0.7217m-3-2 3 2 -3 2")
          }
          44.1667% {
            opacity:1;
            d:path("M70 101h0.7108m-3-2 3 2 -3 2")
          }
          44.5833% {
            opacity:1;
            d:path("M70 101h0.7002m-3-2 3 2 -3 2")
          }
          45% {
            opacity:1;
            d:path("M70 101h0.6898m-3-2 3 2 -3 2")
          }
          45.4167% {
            opacity:1;
            d:path("M70 101h0.6798m-3-2 3 2 -3 2")
          }
          45.8333% {
            opacity:1;
            d:path("M70 101h0.6701m-3-2 3 2 -3 2")
          }
          46.25% {
            opacity:1;
            d:path("M70 101h0.6606m-3-2 3 2 -3 2")
          }
          46.6667% {
            opacity:1;
            d:path("M70 101h0.6514m-3-2 3 2 -3 2")
          }
          47.0833% {
            opacity:1;
            d:path("M70 101h0.6425m-3-2 3 2 -3 2")
          }
          47.5% {
            opacity:1;
            d:path("M70 101h0.6338m-3-2 3 2 -3 2")
          }
          47.9167% {
            opacity:1;
            d:path("M70 101h0.6254m-3-2 3 2 -3 2")
          }
          48.3333% {
            opacity:1;
            d:path("M70 101h0.6172m-3-2 3 2 -3 2")
          }
          48.75% {
            opacity:1;
            d:path("M70 101h0.6093m-3-2 3 2 -3 2")
          }
          49.1667% {
            opacity:1;
            d:path("M70 101h0.6016m-3-2 3 2 -3 2")
          }
          49.5833% {
            opacity:1;
            d:path("M70 101h0.5941m-3-2 3 2 -3 2")
          }
          50% {
            opacity:1;
            d:path("M70 101h0.5868m-3-2 3 2 -3 2")
          }
          50.4167% {
            opacity:1;
            d:path("M70 101h0.5797m-3-2 3 2 -3 2")
          }
          50.8333% {
            opacity:1;
            d:path("M70 101h0.5729m-3-2 3 2 -3 2")
          }
          51.25% {
            opacity:1;
            d:path("M70 101h0.5662m-3-2 3 2 -3 2")
          }
          51.6667% {
            opacity:1;
            d:path("M70 101h0.5597m-3-2 3 2 -3 2")
          }
          52.0833% {
            opacity:1;
            d:path("M70 101h0.5534m-3-2 3 2 -3 2")
          }
          52.5% {
            opacity:1;
            d:path("M70 101h0.5473m-3-2 3 2 -3 2")
          }
          52.9167% {
            opacity:1;
            d:path("M70 101h0.5414m-3-2 3 2 -3 2")
          }
          53.3333% {
            opacity:1;
            d:path("M70 101h0.5356m-3-2 3 2 -3 2")
          }
          53.75% {
            opacity:1;
            d:path("M70 101h0.53m-3-2 3 2 -3 2")
          }
          54.1667% {
            opacity:1;
            d:path("M70 101h0.5245m-3-2 3 2 -3 2")
          }
          54.5833% {
            opacity:1;
            d:path("M70 101h0.5193m-3-2 3 2 -3 2")
          }
          55% {
            opacity:1;
            d:path("M70 101h0.5141m-3-2 3 2 -3 2")
          }
          55.4167% {
            opacity:1;
            d:path("M70 101h0.5091m-3-2 3 2 -3 2")
          }
          55.8333% {
            opacity:1;
            d:path("M70 101h0.5043m-3-2 3 2 -3 2")
          }
          56.25% {
            opacity:1;
            d:path("M70 101h0.4996m-3-2 3 2 -3 2")
          }
          56.6667% {
            opacity:1;
            d:path("M70 101h0.495m-3-2 3 2 -3 2")
          }
          57.0833% {
            opacity:1;
            d:path("M70 101h0.4906m-3-2 3 2 -3 2")
          }
          57.5% {
            opacity:1;
            d:path("M70 101h0.4862m-3-2 3 2 -3 2")
          }
          57.9167% {
            opacity:1;
            d:path("M70 101h0.4821m-3-2 3 2 -3 2")
          }
          58.3333% {
            opacity:1;
            d:path("M70 101h0.478m-3-2 3 2 -3 2")
          }
          58.75% {
            opacity:1;
            d:path("M70 101h0.474m-3-2 3 2 -3 2")
          }
          59.1667% {
            opacity:1;
            d:path("M70 101h0.4702m-3-2 3 2 -3 2")
          }
          59.5833% {
            opacity:1;
            d:path("M70 101h0.4665m-3-2 3 2 -3 2")
          }
          60% {
            opacity:1;
            d:path("M70 101h0.4628m-3-2 3 2 -3 2")
          }
          60.4167% {
            opacity:1;
            d:path("M70 101h0.4593m-3-2 3 2 -3 2")
          }
          60.8333% {
            opacity:1;
            d:path("M70 101h0.4559m-3-2 3 2 -3 2")
          }
          61.25% {
            opacity:1;
            d:path("M70 101h0.4526m-3-2 3 2 -3 2")
          }
          61.6667% {
            opacity:1;
            d:path("M70 101h0.4494m-3-2 3 2 -3 2")
          }
          62.0833% {
            opacity:1;
            d:path("M70 101h0.4462m-3-2 3 2 -3 2")
          }
          62.5% {
            opacity:1;
            d:path("M70 101h0.4432m-3-2 3 2 -3 2")
          }
          62.9167% {
            opacity:1;
            d:path("M70 101h0.4402m-3-2 3 2 -3 2")
          }
          63.3333% {
            opacity:1;
            d:path("M70 101h0.4373m-3-2 3 2 -3 2")
          }
          63.75% {
            opacity:1;
            d:path("M70 101h0.4346m-3-2 3 2 -3 2")
          }
          64.1667% {
            opacity:1;
            d:path("M70 101h0.4318m-3-2 3 2 -3 2")
          }
          64.5833% {
            opacity:1;
            d:path("M70 101h0.4292m-3-2 3 2 -3 2")
          }
          65% {
            opacity:1;
            d:path("M70 101h0.4267m-3-2 3 2 -3 2")
          }
          65.4167% {
            opacity:1;
            d:path("M70 101h0.4242m-3-2 3 2 -3 2")
          }
          65.8333% {
            opacity:1;
            d:path("M70 101h0.4218m-3-2 3 2 -3 2")
          }
          66.25% {
            opacity:1;
            d:path("M70 101h0.4194m-3-2 3 2 -3 2")
          }
          66.6667% {
            opacity:1;
            d:path("M70 101h0.4171m-3-2 3 2 -3 2")
          }
          67.0833% {
            opacity:1;
            d:path("M70 101h0.4149m-3-2 3 2 -3 2")
          }
          67.5% {
            opacity:1;
            d:path("M70 101h0.4128m-3-2 3 2 -3 2")
          }
          67.9167% {
            opacity:1;
            d:path("M70 101h0.4107m-3-2 3 2 -3 2")
          }
          68.3333% {
            opacity:1;
            d:path("M70 101h0.4087m-3-2 3 2 -3 2")
          }
          68.75% {
            opacity:1;
            d:path("M70 101h0.4067m-3-2 3 2 -3 2")
          }
          69.1667% {
            opacity:1;
            d:path("M70 101h0.4048m-3-2 3 2 -3 2")
          }
          69.5833% {
            opacity:1;
            d:path("M70 101h0.4029m-3-2 3 2 -3 2")
          }
          70% {
            opacity:1;
            d:path("M70 101h0.4011m-3-2 3 2 -3 2")
          }
          70.4167% {
            opacity:1;
            d:path("M70 101h0.3994m-3-2 3 2 -3 2")
          }
          70.8333% {
            opacity:1;
            d:path("M70 101h0.3977m-3-2 3 2 -3 2")
          }
          71.25% {
            opacity:1;
            d:path("M70 101h0.396m-3-2 3 2 -3 2")
          }
          71.6667% {
            opacity:1;
            d:path("M70 101h0.3944m-3-2 3 2 -3 2")
          }
          72.0833% {
            opacity:1;
            d:path("M70 101h0.3929m-3-2 3 2 -3 2")
          }
          72.5% {
            opacity:1;
            d:path("M70 101h0.3914m-3-2 3 2 -3 2")
          }
          72.9167% {
            opacity:1;
            d:path("M70 101h0.3899m-3-2 3 2 -3 2")
          }
          73.3333% {
            opacity:1;
            d:path("M70 101h0.3884m-3-2 3 2 -3 2")
          }
          73.75% {
            opacity:1;
            d:path("M70 101h0.3871m-3-2 3 2 -3 2")
          }
          74.1667% {
            opacity:1;
            d:path("M70 101h0.3857m-3-2 3 2 -3 2")
          }
          74.5833% {
            opacity:1;
            d:path("M70 101h0.3844m-3-2 3 2 -3 2")
          }
          75% {
            opacity:1;
            d:path("M70 101h0.3831m-3-2 3 2 -3 2")
          }
          75.4167% {
            opacity:1;
            d:path("M70 101h0.3819m-3-2 3 2 -3 2")
          }
          75.8333% {
            opacity:1;
            d:path("M70 101h0.3807m-3-2 3 2 -3 2")
          }
          76.25% {
            opacity:1;
            d:path("M70 101h0.3795m-3-2 3 2 -3 2")
          }
          76.6667% {
            opacity:1;
            d:path("M70 101h0.3784m-3-2 3 2 -3 2")
          }
          77.0833% {
            opacity:1;
            d:path("M70 101h0.3773m-3-2 3 2 -3 2")
          }
          77.5% {
            opacity:1;
            d:path("M70 101h0.3762m-3-2 3 2 -3 2")
          }
          77.9167% {
            opacity:1;
            d:path("M70 101h0.3752m-3-2 3 2 -3 2")
          }
          78.3333% {
            opacity:1;
            d:path("M70 101h0.3742m-3-2 3 2 -3 2")
          }
          78.75% {
            opacity:1;
            d:path("M70 101h0.3732m-3-2 3 2 -3 2")
          }
          79.1667% {
            opacity:1;
            d:path("M70 101h0.3722m-3-2 3 2 -3 2")
          }
          79.5833% {
            opacity:1;
            d:path("M70 101h0.3713m-3-2 3 2 -3 2")
          }
          80% {
            opacity:1;
            d:path("M70 101h0.3704m-3-2 3 2 -3 2")
          }
          80.4167% {
            opacity:1;
            d:path("M70 101h0.3696m-3-2 3 2 -3 2")
          }
          80.8333% {
            opacity:1;
            d:path("M70 101h0.3687m-3-2 3 2 -3 2")
          }
          81.25% {
            opacity:1;
            d:path("M70 101h0.3679m-3-2 3 2 -3 2")
          }
          81.6667% {
            opacity:1;
            d:path("M70 101h0.3671m-3-2 3 2 -3 2")
          }
          82.0833% {
            opacity:1;
            d:path("M70 101h0.3663m-3-2 3 2 -3 2")
          }
          82.5% {
            opacity:1;
            d:path("M70 101h0.3656m-3-2 3 2 -3 2")
          }
          82.9167% {
            opacity:1;
            d:path("M70 101h0.3648m-3-2 3 2 -3 2")
          }
          83.3333% {
            opacity:1;
            d:path("M70 101h0.3641m-3-2 3 2 -3 2")
          }
          83.75% {
            opacity:1;
            d:path("M70 101h0.3634m-3-2 3 2 -3 2")
          }
          84.1667% {
            opacity:1;
            d:path("M70 101h0.3628m-3-2 3 2 -3 2")
          }
          84.5833% {
            opacity:1;
            d:path("M70 101h0.3621m-3-2 3 2 -3 2")
          }
          85% {
            opacity:1;
            d:path("M70 101h0.3615m-3-2 3 2 -3 2")
          }
          85.4167% {
            opacity:1;
            d:path("M70 101h0.3609m-3-2 3 2 -3 2")
          }
          85.8333% {
            opacity:1;
            d:path("M70 101h0.3603m-3-2 3 2 -3 2")
          }
          86.25% {
            opacity:1;
            d:path("M70 101h0.3597m-3-2 3 2 -3 2")
          }
          86.6667% {
            opacity:1;
            d:path("M70 101h0.3591m-3-2 3 2 -3 2")
          }
          87.0833% {
            opacity:1;
            d:path("M70 101h0.3586m-3-2 3 2 -3 2")
          }
          87.5% {
            opacity:1;
            d:path("M70 101h0.358m-3-2 3 2 -3 2")
          }
          95% {
            opacity:1;
            d:path("M70 101h0.358m-3-2 3 2 -3 2")
          }
          95.01%,100% {
            opacity:1;
            d:path("M70 101h0.34m-3-2 3 2 -3 2")
          }
        }
        .D {
          animation:D 12s linear infinite
        }
        @keyframes D {
          0% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          0.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          0.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          1.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          1.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          2.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          2.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          2.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          3.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          3.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          4.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          4.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          5.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          5.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          6.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          6.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          7.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          7.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          7.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          8.3333% {
            opacity:1;
            d:path("M70 117h0m3-2 -3 2 3 2")
          }
          8.75% {
            opacity:1;
            d:path("M70 117h-11.1174m3-2 -3 2 3 2")
          }
          9.1667% {
            opacity:1;
            d:path("M70 117h-15.1362m3-2 -3 2 3 2")
          }
          9.5833% {
            opacity:1;
            d:path("M70 117h-15.5168m3-2 -3 2 3 2")
          }
          10% {
            opacity:1;
            d:path("M70 117h-14.1795m3-2 -3 2 3 2")
          }
          10.4167% {
            opacity:1;
            d:path("M70 117h-12.1756m3-2 -3 2 3 2")
          }
          10.8333% {
            opacity:1;
            d:path("M70 117h-10.0545m3-2 -3 2 3 2")
          }
          11.25% {
            opacity:1;
            d:path("M70 117h-8.0814m3-2 -3 2 3 2")
          }
          11.6667% {
            opacity:1;
            d:path("M70 117h-6.3651m3-2 -3 2 3 2")
          }
          12.0833% {
            opacity:1;
            d:path("M70 117h-4.9313m3-2 -3 2 3 2")
          }
          12.5% {
            opacity:1;
            d:path("M70 117h-3.7652m3-2 -3 2 3 2")
          }
          12.9167% {
            opacity:1;
            d:path("M70 117h-2.8346m3-2 -3 2 3 2")
          }
          13.3333% {
            opacity:1;
            d:path("M70 117h-2.1021m3-2 -3 2 3 2")
          }
          13.75% {
            opacity:1;
            d:path("M70 117h-1.5316m3-2 -3 2 3 2")
          }
          14.1667% {
            opacity:1;
            d:path("M70 117h-1.0912m3-2 -3 2 3 2")
          }
          14.5833% {
            opacity:1;
            d:path("M70 117h-0.7535m3-2 -3 2 3 2")
          }
          15% {
            opacity:1;
            d:path("M70 117h-0.4963m3-2 -3 2 3 2")
          }
          15.4167% {
            opacity:1;
            d:path("M70 117h-0.3016m3-2 -3 2 3 2")
          }
          15.8333% {
            opacity:1;
            d:path("M70 117h-0.155m3-2 -3 2 3 2")
          }
          16.25% {
            opacity:0;
            d:path("M70 117h0m3-2 -3 2 3 2")
          }
          16.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          17.0833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          17.5% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          17.9167% {
            opacity:1;
            d:path("M70 117h0.1701m-3-2 3 2 -3 2")
          }
          18.3333% {
            opacity:1;
            d:path("M70 117h0.1917m-3-2 3 2 -3 2")
          }
          18.75% {
            opacity:1;
            d:path("M70 117h0.2063m-3-2 3 2 -3 2")
          }
          19.1667% {
            opacity:1;
            d:path("M70 117h0.2156m-3-2 3 2 -3 2")
          }
          19.5833% {
            opacity:1;
            d:path("M70 117h0.2209m-3-2 3 2 -3 2")
          }
          20% {
            opacity:1;
            d:path("M70 117h0.2233m-3-2 3 2 -3 2")
          }
          20.4167% {
            opacity:1;
            d:path("M70 117h0.2235m-3-2 3 2 -3 2")
          }
          20.8333% {
            opacity:1;
            d:path("M70 117h0.222m-3-2 3 2 -3 2")
          }
          21.25% {
            opacity:1;
            d:path("M70 117h0.2194m-3-2 3 2 -3 2")
          }
          21.6667% {
            opacity:1;
            d:path("M70 117h0.216m-3-2 3 2 -3 2")
          }
          22.0833% {
            opacity:1;
            d:path("M70 117h0.2119m-3-2 3 2 -3 2")
          }
          22.5% {
            opacity:1;
            d:path("M70 117h0.2075m-3-2 3 2 -3 2")
          }
          22.9167% {
            opacity:1;
            d:path("M70 117h0.2028m-3-2 3 2 -3 2")
          }
          23.3333% {
            opacity:1;
            d:path("M70 117h0.1979m-3-2 3 2 -3 2")
          }
          23.75% {
            opacity:1;
            d:path("M70 117h0.1929m-3-2 3 2 -3 2")
          }
          24.1667% {
            opacity:1;
            d:path("M70 117h0.1879m-3-2 3 2 -3 2")
          }
          24.5833% {
            opacity:1;
            d:path("M70 117h0.1829m-3-2 3 2 -3 2")
          }
          25% {
            opacity:1;
            d:path("M70 117h0.178m-3-2 3 2 -3 2")
          }
          25.4167% {
            opacity:1;
            d:path("M70 117h0.1731m-3-2 3 2 -3 2")
          }
          25.8333% {
            opacity:1;
            d:path("M70 117h0.1683m-3-2 3 2 -3 2")
          }
          26.25% {
            opacity:1;
            d:path("M70 117h0.1636m-3-2 3 2 -3 2")
          }
          26.6667% {
            opacity:1;
            d:path("M70 117h0.159m-3-2 3 2 -3 2")
          }
          27.0833% {
            opacity:1;
            d:path("M70 117h0.1546m-3-2 3 2 -3 2")
          }
          27.5% {
            opacity:1;
            d:path("M70 117h0.1502m-3-2 3 2 -3 2")
          }
          27.9167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          28.3333% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          28.75% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          29.1667% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          29.5833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          30% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          30.4167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          30.8333% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          31.25% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          31.6667% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          32.0833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          32.5% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          32.9167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          33.3333% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          33.75% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          34.1667% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          34.5833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          35% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          35.4167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          35.8333% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          36.25% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          36.6667% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          37.0833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          37.5% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          37.9167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          38.3333% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          38.75% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          39.1667% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          39.5833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          40% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          40.4167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          40.8333% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          41.25% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          41.6667% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          42.0833% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          42.5% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          42.9167% {
            opacity:1;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          43.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          43.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          44.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          44.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          45% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          45.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          45.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          46.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          46.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          47.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          47.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          47.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          48.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          48.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          49.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          49.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          50% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          50.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          50.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          51.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          51.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          52.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          52.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          52.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          53.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          53.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          54.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          54.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          55% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          55.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          55.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          56.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          56.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          57.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          57.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          57.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          58.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          58.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          59.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          59.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          60% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          60.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          60.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          61.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          61.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          62.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          62.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          62.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          63.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          63.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          64.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          64.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          65% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          65.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          65.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          66.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          66.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          67.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          67.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          67.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          68.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          68.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          69.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          69.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          70% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          70.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          70.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          71.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          71.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          72.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          72.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          72.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          73.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          73.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          74.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          74.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          75.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          75.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          76.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          76.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          77.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          77.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          77.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          78.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          78.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          79.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          79.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          80% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          80.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          80.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          81.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          81.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          82.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          82.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          82.9167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          83.3333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          83.75% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          84.1667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          84.5833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          85% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          85.4167% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          85.8333% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          86.25% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          86.6667% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          87.0833% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          87.5% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          95% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
          95.01%,100% {
            opacity:0;
            d:path("M70 117h0m-3-2 3 2 -3 2")
          }
        }
        .force {
          animation:force 12s linear infinite
        }
        @keyframes force {
          0% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          0.4167% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          0.8333% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          1.25% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          1.6667% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          2.0833% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          2.5% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          2.9167% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          3.3333% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          3.75% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          4.1667% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          4.5833% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          5% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          5.4167% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          5.8333% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          6.25% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          6.6667% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          7.0833% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          7.5% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          7.9167% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
          8.3333% {
            opacity:1;
            d:path("M30 72h27.4879m-3-2 3 2 -3 2")
          }
          8.75% {
            opacity:1;
            d:path("M34.0598 72h15.3909m-3-2 3 2 -3 2")
          }
          9.1667% {
            opacity:1;
            d:path("M42.6901 72h8.3551m-3-2 3 2 -3 2")
          }
          9.5833% {
            opacity:1;
            d:path("M52.5884 72h4.3281m-3-2 3 2 -3 2")
          }
          10% {
            opacity:1;
            d:path("M62.1075 72h2.0752m-3-2 3 2 -3 2")
          }
          10.4167% {
            opacity:1;
            d:path("M70.5222 72h0.8569m-3-2 3 2 -3 2")
          }
          10.8333% {
            opacity:1;
            d:path("M77.6025 72h0.233m-3-2 3 2 -3 2")
          }
          11.25% {
            opacity:1;
            d:path("M83.3693 72h0m3-2 -3 2 3 2")
          }
          11.6667% {
            opacity:1;
            d:path("M87.9575 72h-0.1633m3-2 -3 2 3 2")
          }
          12.0833% {
            opacity:1;
            d:path("M91.542 72h-0.1753m3-2 -3 2 3 2")
          }
          12.5% {
            opacity:1;
            d:path("M94.2995 72h0m3-2 -3 2 3 2")
          }
          12.9167% {
            opacity:1;
            d:path("M96.3908 72h0m3-2 -3 2 3 2")
          }
          13.3333% {
            opacity:0;
            d:path("M97.9543 72h0m3-2 -3 2 3 2")
          }
          13.75% {
            opacity:0;
            d:path("M99.1044 72h0m-3-2 3 2 -3 2")
          }
          14.1667% {
            opacity:1;
            d:path("M99.9339 72h0m-3-2 3 2 -3 2")
          }
          14.5833% {
            opacity:1;
            d:path("M100.5169 72h0m-3-2 3 2 -3 2")
          }
          15% {
            opacity:1;
            d:path("M100.9114 72h0m-3-2 3 2 -3 2")
          }
          15.4167% {
            opacity:1;
            d:path("M101.1627 72h0.1596m-3-2 3 2 -3 2")
          }
          15.8333% {
            opacity:1;
            d:path("M101.3059 72h0.1809m-3-2 3 2 -3 2")
          }
          16.25% {
            opacity:1;
            d:path("M101.3681 72h0.1982m-3-2 3 2 -3 2")
          }
          16.6667% {
            opacity:1;
            d:path("M101.3698 72h0.2121m-3-2 3 2 -3 2")
          }
          17.0833% {
            opacity:1;
            d:path("M101.3268 72h0.2234m-3-2 3 2 -3 2")
          }
          17.5% {
            opacity:1;
            d:path("M101.2513 72h0.2326m-3-2 3 2 -3 2")
          }
          17.9167% {
            opacity:1;
            d:path("M101.1522 72h0.2402m-3-2 3 2 -3 2")
          }
          18.3333% {
            opacity:1;
            d:path("M101.0364 72h0.2465m-3-2 3 2 -3 2")
          }
          18.75% {
            opacity:1;
            d:path("M100.9093 72h0.2518m-3-2 3 2 -3 2")
          }
          19.1667% {
            opacity:1;
            d:path("M100.7746 72h0.2563m-3-2 3 2 -3 2")
          }
          19.5833% {
            opacity:1;
            d:path("M100.6353 72h0.2602m-3-2 3 2 -3 2")
          }
          20% {
            opacity:1;
            d:path("M100.4936 72h0.2636m-3-2 3 2 -3 2")
          }
          20.4167% {
            opacity:1;
            d:path("M100.3512 72h0.2667m-3-2 3 2 -3 2")
          }
          20.8333% {
            opacity:1;
            d:path("M100.2092 72h0.2695m-3-2 3 2 -3 2")
          }
          21.25% {
            opacity:1;
            d:path("M100.0684 72h0.272m-3-2 3 2 -3 2")
          }
          21.6667% {
            opacity:1;
            d:path("M99.9297 72h0.2743m-3-2 3 2 -3 2")
          }
          22.0833% {
            opacity:1;
            d:path("M99.7933 72h0.2765m-3-2 3 2 -3 2")
          }
          22.5% {
            opacity:1;
            d:path("M99.6596 72h0.2785m-3-2 3 2 -3 2")
          }
          22.9167% {
            opacity:1;
            d:path("M99.5289 72h0.2804m-3-2 3 2 -3 2")
          }
          23.3333% {
            opacity:1;
            d:path("M99.4012 72h0.2823m-3-2 3 2 -3 2")
          }
          23.75% {
            opacity:1;
            d:path("M99.2767 72h0.284m-3-2 3 2 -3 2")
          }
          24.1667% {
            opacity:1;
            d:path("M99.1554 72h0.2857m-3-2 3 2 -3 2")
          }
          24.5833% {
            opacity:1;
            d:path("M99.0372 72h0.2873m-3-2 3 2 -3 2")
          }
          25% {
            opacity:1;
            d:path("M98.9222 72h0.2889m-3-2 3 2 -3 2")
          }
          25.4167% {
            opacity:1;
            d:path("M98.8103 72h0.2903m-3-2 3 2 -3 2")
          }
          25.8333% {
            opacity:1;
            d:path("M98.7015 72h0.2918m-3-2 3 2 -3 2")
          }
          26.25% {
            opacity:1;
            d:path("M98.5958 72h0.2932m-3-2 3 2 -3 2")
          }
          26.6667% {
            opacity:1;
            d:path("M98.493 72h0.2945m-3-2 3 2 -3 2")
          }
          27.0833% {
            opacity:1;
            d:path("M98.393 72h0.2959m-3-2 3 2 -3 2")
          }
          27.5% {
            opacity:1;
            d:path("M98.2959 72h0.2971m-3-2 3 2 -3 2")
          }
          27.9167% {
            opacity:1;
            d:path("M98.2016 72h0.2984m-3-2 3 2 -3 2")
          }
          28.3333% {
            opacity:1;
            d:path("M98.1099 72h0.2996m-3-2 3 2 -3 2")
          }
          28.75% {
            opacity:1;
            d:path("M98.0209 72h0.3007m-3-2 3 2 -3 2")
          }
          29.1667% {
            opacity:1;
            d:path("M97.9344 72h0.3019m-3-2 3 2 -3 2")
          }
          29.5833% {
            opacity:1;
            d:path("M97.8503 72h0.3029m-3-2 3 2 -3 2")
          }
          30% {
            opacity:1;
            d:path("M97.7687 72h0.304m-3-2 3 2 -3 2")
          }
          30.4167% {
            opacity:1;
            d:path("M97.6893 72h0.305m-3-2 3 2 -3 2")
          }
          30.8333% {
            opacity:1;
            d:path("M97.6123 72h0.306m-3-2 3 2 -3 2")
          }
          31.25% {
            opacity:1;
            d:path("M97.5375 72h0.307m-3-2 3 2 -3 2")
          }
          31.6667% {
            opacity:1;
            d:path("M97.4648 72h0.308m-3-2 3 2 -3 2")
          }
          32.0833% {
            opacity:1;
            d:path("M97.3941 72h0.3089m-3-2 3 2 -3 2")
          }
          32.5% {
            opacity:1;
            d:path("M97.3255 72h0.3098m-3-2 3 2 -3 2")
          }
          32.9167% {
            opacity:1;
            d:path("M97.2589 72h0.3106m-3-2 3 2 -3 2")
          }
          33.3333% {
            opacity:1;
            d:path("M97.1942 72h0.3115m-3-2 3 2 -3 2")
          }
          33.75% {
            opacity:1;
            d:path("M97.1313 72h0.3123m-3-2 3 2 -3 2")
          }
          34.1667% {
            opacity:1;
            d:path("M97.0702 72h0.3131m-3-2 3 2 -3 2")
          }
          34.5833% {
            opacity:1;
            d:path("M97.0109 72h0.3139m-3-2 3 2 -3 2")
          }
          35% {
            opacity:1;
            d:path("M96.9533 72h0.3146m-3-2 3 2 -3 2")
          }
          35.4167% {
            opacity:1;
            d:path("M96.8973 72h0.3153m-3-2 3 2 -3 2")
          }
          35.8333% {
            opacity:1;
            d:path("M96.843 72h0.316m-3-2 3 2 -3 2")
          }
          36.25% {
            opacity:1;
            d:path("M96.7902 72h0.3167m-3-2 3 2 -3 2")
          }
          36.6667% {
            opacity:1;
            d:path("M96.7389 72h0.3174m-3-2 3 2 -3 2")
          }
          37.0833% {
            opacity:1;
            d:path("M96.689 72h0.318m-3-2 3 2 -3 2")
          }
          37.5% {
            opacity:1;
            d:path("M96.6406 72h0.3187m-3-2 3 2 -3 2")
          }
          37.9167% {
            opacity:1;
            d:path("M96.5936 72h0.3193m-3-2 3 2 -3 2")
          }
          38.3333% {
            opacity:1;
            d:path("M96.548 72h0.3199m-3-2 3 2 -3 2")
          }
          38.75% {
            opacity:1;
            d:path("M96.5036 72h0.3205m-3-2 3 2 -3 2")
          }
          39.1667% {
            opacity:1;
            d:path("M96.4605 72h0.321m-3-2 3 2 -3 2")
          }
          39.5833% {
            opacity:1;
            d:path("M96.4187 72h0.3216m-3-2 3 2 -3 2")
          }
          40% {
            opacity:1;
            d:path("M96.378 72h0.3221m-3-2 3 2 -3 2")
          }
          40.4167% {
            opacity:1;
            d:path("M96.3385 72h0.3226m-3-2 3 2 -3 2")
          }
          40.8333% {
            opacity:1;
            d:path("M96.3002 72h0.3231m-3-2 3 2 -3 2")
          }
          41.25% {
            opacity:1;
            d:path("M96.2629 72h0.3236m-3-2 3 2 -3 2")
          }
          41.6667% {
            opacity:1;
            d:path("M96.2267 72h0.3241m-3-2 3 2 -3 2")
          }
          42.0833% {
            opacity:1;
            d:path("M96.1916 72h0.3245m-3-2 3 2 -3 2")
          }
          42.5% {
            opacity:1;
            d:path("M96.1574 72h0.325m-3-2 3 2 -3 2")
          }
          42.9167% {
            opacity:1;
            d:path("M96.1243 72h0.3254m-3-2 3 2 -3 2")
          }
          43.3333% {
            opacity:1;
            d:path("M96.0921 72h0.3258m-3-2 3 2 -3 2")
          }
          43.75% {
            opacity:1;
            d:path("M96.0608 72h0.3262m-3-2 3 2 -3 2")
          }
          44.1667% {
            opacity:1;
            d:path("M96.0304 72h0.3266m-3-2 3 2 -3 2")
          }
          44.5833% {
            opacity:1;
            d:path("M96.0009 72h0.327m-3-2 3 2 -3 2")
          }
          45% {
            opacity:1;
            d:path("M95.9722 72h0.3274m-3-2 3 2 -3 2")
          }
          45.4167% {
            opacity:1;
            d:path("M95.9443 72h0.3277m-3-2 3 2 -3 2")
          }
          45.8333% {
            opacity:1;
            d:path("M95.9173 72h0.3281m-3-2 3 2 -3 2")
          }
          46.25% {
            opacity:1;
            d:path("M95.891 72h0.3284m-3-2 3 2 -3 2")
          }
          46.6667% {
            opacity:1;
            d:path("M95.8655 72h0.3288m-3-2 3 2 -3 2")
          }
          47.0833% {
            opacity:1;
            d:path("M95.8407 72h0.3291m-3-2 3 2 -3 2")
          }
          47.5% {
            opacity:1;
            d:path("M95.8166 72h0.3294m-3-2 3 2 -3 2")
          }
          47.9167% {
            opacity:1;
            d:path("M95.7932 72h0.3297m-3-2 3 2 -3 2")
          }
          48.3333% {
            opacity:1;
            d:path("M95.7704 72h0.33m-3-2 3 2 -3 2")
          }
          48.75% {
            opacity:1;
            d:path("M95.7484 72h0.3303m-3-2 3 2 -3 2")
          }
          49.1667% {
            opacity:1;
            d:path("M95.7269 72h0.3306m-3-2 3 2 -3 2")
          }
          49.5833% {
            opacity:1;
            d:path("M95.7061 72h0.3308m-3-2 3 2 -3 2")
          }
          50% {
            opacity:1;
            d:path("M95.6859 72h0.3311m-3-2 3 2 -3 2")
          }
          50.4167% {
            opacity:1;
            d:path("M95.6662 72h0.3313m-3-2 3 2 -3 2")
          }
          50.8333% {
            opacity:1;
            d:path("M95.6471 72h0.3316m-3-2 3 2 -3 2")
          }
          51.25% {
            opacity:1;
            d:path("M95.6286 72h0.3318m-3-2 3 2 -3 2")
          }
          51.6667% {
            opacity:1;
            d:path("M95.6106 72h0.3321m-3-2 3 2 -3 2")
          }
          52.0833% {
            opacity:1;
            d:path("M95.5931 72h0.3323m-3-2 3 2 -3 2")
          }
          52.5% {
            opacity:1;
            d:path("M95.5761 72h0.3325m-3-2 3 2 -3 2")
          }
          52.9167% {
            opacity:1;
            d:path("M95.5596 72h0.3327m-3-2 3 2 -3 2")
          }
          53.3333% {
            opacity:1;
            d:path("M95.5435 72h0.3329m-3-2 3 2 -3 2")
          }
          53.75% {
            opacity:1;
            d:path("M95.528 72h0.3331m-3-2 3 2 -3 2")
          }
          54.1667% {
            opacity:1;
            d:path("M95.5128 72h0.3333m-3-2 3 2 -3 2")
          }
          54.5833% {
            opacity:1;
            d:path("M95.4981 72h0.3335m-3-2 3 2 -3 2")
          }
          55% {
            opacity:1;
            d:path("M95.4839 72h0.3337m-3-2 3 2 -3 2")
          }
          55.4167% {
            opacity:1;
            d:path("M95.47 72h0.3339m-3-2 3 2 -3 2")
          }
          55.8333% {
            opacity:1;
            d:path("M95.4565 72h0.3341m-3-2 3 2 -3 2")
          }
          56.25% {
            opacity:1;
            d:path("M95.4434 72h0.3342m-3-2 3 2 -3 2")
          }
          56.6667% {
            opacity:1;
            d:path("M95.4307 72h0.3344m-3-2 3 2 -3 2")
          }
          57.0833% {
            opacity:1;
            d:path("M95.4184 72h0.3346m-3-2 3 2 -3 2")
          }
          57.5% {
            opacity:1;
            d:path("M95.4064 72h0.3347m-3-2 3 2 -3 2")
          }
          57.9167% {
            opacity:1;
            d:path("M95.3948 72h0.3349m-3-2 3 2 -3 2")
          }
          58.3333% {
            opacity:1;
            d:path("M95.3835 72h0.335m-3-2 3 2 -3 2")
          }
          58.75% {
            opacity:1;
            d:path("M95.3725 72h0.3352m-3-2 3 2 -3 2")
          }
          59.1667% {
            opacity:1;
            d:path("M95.3618 72h0.3353m-3-2 3 2 -3 2")
          }
          59.5833% {
            opacity:1;
            d:path("M95.3514 72h0.3354m-3-2 3 2 -3 2")
          }
          60% {
            opacity:1;
            d:path("M95.3414 72h0.3356m-3-2 3 2 -3 2")
          }
          60.4167% {
            opacity:1;
            d:path("M95.3316 72h0.3357m-3-2 3 2 -3 2")
          }
          60.8333% {
            opacity:1;
            d:path("M95.3221 72h0.3358m-3-2 3 2 -3 2")
          }
          61.25% {
            opacity:1;
            d:path("M95.3128 72h0.3359m-3-2 3 2 -3 2")
          }
          61.6667% {
            opacity:1;
            d:path("M95.3039 72h0.3361m-3-2 3 2 -3 2")
          }
          62.0833% {
            opacity:1;
            d:path("M95.2952 72h0.3362m-3-2 3 2 -3 2")
          }
          62.5% {
            opacity:1;
            d:path("M95.2867 72h0.3363m-3-2 3 2 -3 2")
          }
          62.9167% {
            opacity:1;
            d:path("M95.2785 72h0.3364m-3-2 3 2 -3 2")
          }
          63.3333% {
            opacity:1;
            d:path("M95.2705 72h0.3365m-3-2 3 2 -3 2")
          }
          63.75% {
            opacity:1;
            d:path("M95.2628 72h0.3366m-3-2 3 2 -3 2")
          }
          64.1667% {
            opacity:1;
            d:path("M95.2552 72h0.3367m-3-2 3 2 -3 2")
          }
          64.5833% {
            opacity:1;
            d:path("M95.2479 72h0.3368m-3-2 3 2 -3 2")
          }
          65% {
            opacity:1;
            d:path("M95.2408 72h0.3369m-3-2 3 2 -3 2")
          }
          65.4167% {
            opacity:1;
            d:path("M95.2339 72h0.337m-3-2 3 2 -3 2")
          }
          65.8333% {
            opacity:1;
            d:path("M95.2272 72h0.337m-3-2 3 2 -3 2")
          }
          66.25% {
            opacity:1;
            d:path("M95.2207 72h0.3371m-3-2 3 2 -3 2")
          }
          66.6667% {
            opacity:1;
            d:path("M95.2144 72h0.3372m-3-2 3 2 -3 2")
          }
          67.0833% {
            opacity:1;
            d:path("M95.2082 72h0.3373m-3-2 3 2 -3 2")
          }
          67.5% {
            opacity:1;
            d:path("M95.2023 72h0.3374m-3-2 3 2 -3 2")
          }
          67.9167% {
            opacity:1;
            d:path("M95.1965 72h0.3374m-3-2 3 2 -3 2")
          }
          68.3333% {
            opacity:1;
            d:path("M95.1908 72h0.3375m-3-2 3 2 -3 2")
          }
          68.75% {
            opacity:1;
            d:path("M95.1854 72h0.3376m-3-2 3 2 -3 2")
          }
          69.1667% {
            opacity:1;
            d:path("M95.1801 72h0.3377m-3-2 3 2 -3 2")
          }
          69.5833% {
            opacity:1;
            d:path("M95.1749 72h0.3377m-3-2 3 2 -3 2")
          }
          70% {
            opacity:1;
            d:path("M95.1699 72h0.3378m-3-2 3 2 -3 2")
          }
          70.4167% {
            opacity:1;
            d:path("M95.165 72h0.3379m-3-2 3 2 -3 2")
          }
          70.8333% {
            opacity:1;
            d:path("M95.1603 72h0.3379m-3-2 3 2 -3 2")
          }
          71.25% {
            opacity:1;
            d:path("M95.1557 72h0.338m-3-2 3 2 -3 2")
          }
          71.6667% {
            opacity:1;
            d:path("M95.1512 72h0.338m-3-2 3 2 -3 2")
          }
          72.0833% {
            opacity:1;
            d:path("M95.1469 72h0.3381m-3-2 3 2 -3 2")
          }
          72.5% {
            opacity:1;
            d:path("M95.1427 72h0.3381m-3-2 3 2 -3 2")
          }
          72.9167% {
            opacity:1;
            d:path("M95.1386 72h0.3382m-3-2 3 2 -3 2")
          }
          73.3333% {
            opacity:1;
            d:path("M95.1346 72h0.3383m-3-2 3 2 -3 2")
          }
          73.75% {
            opacity:1;
            d:path("M95.1308 72h0.3383m-3-2 3 2 -3 2")
          }
          74.1667% {
            opacity:1;
            d:path("M95.127 72h0.3383m-3-2 3 2 -3 2")
          }
          74.5833% {
            opacity:1;
            d:path("M95.1234 72h0.3384m-3-2 3 2 -3 2")
          }
          75% {
            opacity:1;
            d:path("M95.1199 72h0.3384m-3-2 3 2 -3 2")
          }
          75.4167% {
            opacity:1;
            d:path("M95.1164 72h0.3385m-3-2 3 2 -3 2")
          }
          75.8333% {
            opacity:1;
            d:path("M95.1131 72h0.3385m-3-2 3 2 -3 2")
          }
          76.25% {
            opacity:1;
            d:path("M95.1098 72h0.3386m-3-2 3 2 -3 2")
          }
          76.6667% {
            opacity:1;
            d:path("M95.1067 72h0.3386m-3-2 3 2 -3 2")
          }
          77.0833% {
            opacity:1;
            d:path("M95.1036 72h0.3387m-3-2 3 2 -3 2")
          }
          77.5% {
            opacity:1;
            d:path("M95.1007 72h0.3387m-3-2 3 2 -3 2")
          }
          77.9167% {
            opacity:1;
            d:path("M95.0978 72h0.3387m-3-2 3 2 -3 2")
          }
          78.3333% {
            opacity:1;
            d:path("M95.095 72h0.3388m-3-2 3 2 -3 2")
          }
          78.75% {
            opacity:1;
            d:path("M95.0923 72h0.3388m-3-2 3 2 -3 2")
          }
          79.1667% {
            opacity:1;
            d:path("M95.0896 72h0.3388m-3-2 3 2 -3 2")
          }
          79.5833% {
            opacity:1;
            d:path("M95.0871 72h0.3389m-3-2 3 2 -3 2")
          }
          80% {
            opacity:1;
            d:path("M95.0846 72h0.3389m-3-2 3 2 -3 2")
          }
          80.4167% {
            opacity:1;
            d:path("M95.0821 72h0.3389m-3-2 3 2 -3 2")
          }
          80.8333% {
            opacity:1;
            d:path("M95.0798 72h0.339m-3-2 3 2 -3 2")
          }
          81.25% {
            opacity:1;
            d:path("M95.0775 72h0.339m-3-2 3 2 -3 2")
          }
          81.6667% {
            opacity:1;
            d:path("M95.0753 72h0.339m-3-2 3 2 -3 2")
          }
          82.0833% {
            opacity:1;
            d:path("M95.0731 72h0.339m-3-2 3 2 -3 2")
          }
          82.5% {
            opacity:1;
            d:path("M95.071 72h0.3391m-3-2 3 2 -3 2")
          }
          82.9167% {
            opacity:1;
            d:path("M95.069 72h0.3391m-3-2 3 2 -3 2")
          }
          83.3333% {
            opacity:1;
            d:path("M95.067 72h0.3391m-3-2 3 2 -3 2")
          }
          83.75% {
            opacity:1;
            d:path("M95.0651 72h0.3392m-3-2 3 2 -3 2")
          }
          84.1667% {
            opacity:1;
            d:path("M95.0632 72h0.3392m-3-2 3 2 -3 2")
          }
          84.5833% {
            opacity:1;
            d:path("M95.0614 72h0.3392m-3-2 3 2 -3 2")
          }
          85% {
            opacity:1;
            d:path("M95.0597 72h0.3392m-3-2 3 2 -3 2")
          }
          85.4167% {
            opacity:1;
            d:path("M95.0579 72h0.3392m-3-2 3 2 -3 2")
          }
          85.8333% {
            opacity:1;
            d:path("M95.0563 72h0.3393m-3-2 3 2 -3 2")
          }
          86.25% {
            opacity:1;
            d:path("M95.0547 72h0.3393m-3-2 3 2 -3 2")
          }
          86.6667% {
            opacity:1;
            d:path("M95.0531 72h0.3393m-3-2 3 2 -3 2")
          }
          87.0833% {
            opacity:1;
            d:path("M95.0516 72h0.3393m-3-2 3 2 -3 2")
          }
          87.5% {
            opacity:1;
            d:path("M95.0501 72h0.3393m-3-2 3 2 -3 2")
          }
          95% {
            opacity:1;
            d:path("M95.0501 72h0.3393m-3-2 3 2 -3 2")
          }
          95.01%,100% {
            opacity:1;
            d:path("M30 72h0.34m-3-2 3 2 -3 2")
          }
        }
        .load {
          animation:load 12s linear infinite
        }
        @keyframes load {
          0% {
            transform:translateX(30px)
          }
          0.4167% {
            transform:translateX(30px)
          }
          0.8333% {
            transform:translateX(30px)
          }
          1.25% {
            transform:translateX(30px)
          }
          1.6667% {
            transform:translateX(30px)
          }
          2.0833% {
            transform:translateX(30px)
          }
          2.5% {
            transform:translateX(30px)
          }
          2.9167% {
            transform:translateX(30px)
          }
          3.3333% {
            transform:translateX(30px)
          }
          3.75% {
            transform:translateX(30px)
          }
          4.1667% {
            transform:translateX(30px)
          }
          4.5833% {
            transform:translateX(30px)
          }
          5% {
            transform:translateX(30px)
          }
          5.4167% {
            transform:translateX(30px)
          }
          5.8333% {
            transform:translateX(30px)
          }
          6.25% {
            transform:translateX(30px)
          }
          6.6667% {
            transform:translateX(30px)
          }
          7.0833% {
            transform:translateX(30px)
          }
          7.5% {
            transform:translateX(30px)
          }
          7.9167% {
            transform:translateX(30px)
          }
          8.3333% {
            transform:translateX(30px)
          }
          8.75% {
            transform:translateX(34.0598px)
          }
          9.1667% {
            transform:translateX(42.6901px)
          }
          9.5833% {
            transform:translateX(52.5884px)
          }
          10% {
            transform:translateX(62.1075px)
          }
          10.4167% {
            transform:translateX(70.5222px)
          }
          10.8333% {
            transform:translateX(77.6025px)
          }
          11.25% {
            transform:translateX(83.3693px)
          }
          11.6667% {
            transform:translateX(87.9575px)
          }
          12.0833% {
            transform:translateX(91.542px)
          }
          12.5% {
            transform:translateX(94.2995px)
          }
          12.9167% {
            transform:translateX(96.3908px)
          }
          13.3333% {
            transform:translateX(97.9543px)
          }
          13.75% {
            transform:translateX(99.1044px)
          }
          14.1667% {
            transform:translateX(99.9339px)
          }
          14.5833% {
            transform:translateX(100.5169px)
          }
          15% {
            transform:translateX(100.9114px)
          }
          15.4167% {
            transform:translateX(101.1627px)
          }
          15.8333% {
            transform:translateX(101.3059px)
          }
          16.25% {
            transform:translateX(101.3681px)
          }
          16.6667% {
            transform:translateX(101.3698px)
          }
          17.0833% {
            transform:translateX(101.3268px)
          }
          17.5% {
            transform:translateX(101.2513px)
          }
          17.9167% {
            transform:translateX(101.1522px)
          }
          18.3333% {
            transform:translateX(101.0364px)
          }
          18.75% {
            transform:translateX(100.9093px)
          }
          19.1667% {
            transform:translateX(100.7746px)
          }
          19.5833% {
            transform:translateX(100.6353px)
          }
          20% {
            transform:translateX(100.4936px)
          }
          20.4167% {
            transform:translateX(100.3512px)
          }
          20.8333% {
            transform:translateX(100.2092px)
          }
          21.25% {
            transform:translateX(100.0684px)
          }
          21.6667% {
            transform:translateX(99.9297px)
          }
          22.0833% {
            transform:translateX(99.7933px)
          }
          22.5% {
            transform:translateX(99.6596px)
          }
          22.9167% {
            transform:translateX(99.5289px)
          }
          23.3333% {
            transform:translateX(99.4012px)
          }
          23.75% {
            transform:translateX(99.2767px)
          }
          24.1667% {
            transform:translateX(99.1554px)
          }
          24.5833% {
            transform:translateX(99.0372px)
          }
          25% {
            transform:translateX(98.9222px)
          }
          25.4167% {
            transform:translateX(98.8103px)
          }
          25.8333% {
            transform:translateX(98.7015px)
          }
          26.25% {
            transform:translateX(98.5958px)
          }
          26.6667% {
            transform:translateX(98.493px)
          }
          27.0833% {
            transform:translateX(98.393px)
          }
          27.5% {
            transform:translateX(98.2959px)
          }
          27.9167% {
            transform:translateX(98.2016px)
          }
          28.3333% {
            transform:translateX(98.1099px)
          }
          28.75% {
            transform:translateX(98.0209px)
          }
          29.1667% {
            transform:translateX(97.9344px)
          }
          29.5833% {
            transform:translateX(97.8503px)
          }
          30% {
            transform:translateX(97.7687px)
          }
          30.4167% {
            transform:translateX(97.6893px)
          }
          30.8333% {
            transform:translateX(97.6123px)
          }
          31.25% {
            transform:translateX(97.5375px)
          }
          31.6667% {
            transform:translateX(97.4648px)
          }
          32.0833% {
            transform:translateX(97.3941px)
          }
          32.5% {
            transform:translateX(97.3255px)
          }
          32.9167% {
            transform:translateX(97.2589px)
          }
          33.3333% {
            transform:translateX(97.1942px)
          }
          33.75% {
            transform:translateX(97.1313px)
          }
          34.1667% {
            transform:translateX(97.0702px)
          }
          34.5833% {
            transform:translateX(97.0109px)
          }
          35% {
            transform:translateX(96.9533px)
          }
          35.4167% {
            transform:translateX(96.8973px)
          }
          35.8333% {
            transform:translateX(96.843px)
          }
          36.25% {
            transform:translateX(96.7902px)
          }
          36.6667% {
            transform:translateX(96.7389px)
          }
          37.0833% {
            transform:translateX(96.689px)
          }
          37.5% {
            transform:translateX(96.6406px)
          }
          37.9167% {
            transform:translateX(96.5936px)
          }
          38.3333% {
            transform:translateX(96.548px)
          }
          38.75% {
            transform:translateX(96.5036px)
          }
          39.1667% {
            transform:translateX(96.4605px)
          }
          39.5833% {
            transform:translateX(96.4187px)
          }
          40% {
            transform:translateX(96.378px)
          }
          40.4167% {
            transform:translateX(96.3385px)
          }
          40.8333% {
            transform:translateX(96.3002px)
          }
          41.25% {
            transform:translateX(96.2629px)
          }
          41.6667% {
            transform:translateX(96.2267px)
          }
          42.0833% {
            transform:translateX(96.1916px)
          }
          42.5% {
            transform:translateX(96.1574px)
          }
          42.9167% {
            transform:translateX(96.1243px)
          }
          43.3333% {
            transform:translateX(96.0921px)
          }
          43.75% {
            transform:translateX(96.0608px)
          }
          44.1667% {
            transform:translateX(96.0304px)
          }
          44.5833% {
            transform:translateX(96.0009px)
          }
          45% {
            transform:translateX(95.9722px)
          }
          45.4167% {
            transform:translateX(95.9443px)
          }
          45.8333% {
            transform:translateX(95.9173px)
          }
          46.25% {
            transform:translateX(95.891px)
          }
          46.6667% {
            transform:translateX(95.8655px)
          }
          47.0833% {
            transform:translateX(95.8407px)
          }
          47.5% {
            transform:translateX(95.8166px)
          }
          47.9167% {
            transform:translateX(95.7932px)
          }
          48.3333% {
            transform:translateX(95.7704px)
          }
          48.75% {
            transform:translateX(95.7484px)
          }
          49.1667% {
            transform:translateX(95.7269px)
          }
          49.5833% {
            transform:translateX(95.7061px)
          }
          50% {
            transform:translateX(95.6859px)
          }
          50.4167% {
            transform:translateX(95.6662px)
          }
          50.8333% {
            transform:translateX(95.6471px)
          }
          51.25% {
            transform:translateX(95.6286px)
          }
          51.6667% {
            transform:translateX(95.6106px)
          }
          52.0833% {
            transform:translateX(95.5931px)
          }
          52.5% {
            transform:translateX(95.5761px)
          }
          52.9167% {
            transform:translateX(95.5596px)
          }
          53.3333% {
            transform:translateX(95.5435px)
          }
          53.75% {
            transform:translateX(95.528px)
          }
          54.1667% {
            transform:translateX(95.5128px)
          }
          54.5833% {
            transform:translateX(95.4981px)
          }
          55% {
            transform:translateX(95.4839px)
          }
          55.4167% {
            transform:translateX(95.47px)
          }
          55.8333% {
            transform:translateX(95.4565px)
          }
          56.25% {
            transform:translateX(95.4434px)
          }
          56.6667% {
            transform:translateX(95.4307px)
          }
          57.0833% {
            transform:translateX(95.4184px)
          }
          57.5% {
            transform:translateX(95.4064px)
          }
          57.9167% {
            transform:translateX(95.3948px)
          }
          58.3333% {
            transform:translateX(95.3835px)
          }
          58.75% {
            transform:translateX(95.3725px)
          }
          59.1667% {
            transform:translateX(95.3618px)
          }
          59.5833% {
            transform:translateX(95.3514px)
          }
          60% {
            transform:translateX(95.3414px)
          }
          60.4167% {
            transform:translateX(95.3316px)
          }
          60.8333% {
            transform:translateX(95.3221px)
          }
          61.25% {
            transform:translateX(95.3128px)
          }
          61.6667% {
            transform:translateX(95.3039px)
          }
          62.0833% {
            transform:translateX(95.2952px)
          }
          62.5% {
            transform:translateX(95.2867px)
          }
          62.9167% {
            transform:translateX(95.2785px)
          }
          63.3333% {
            transform:translateX(95.2705px)
          }
          63.75% {
            transform:translateX(95.2628px)
          }
          64.1667% {
            transform:translateX(95.2552px)
          }
          64.5833% {
            transform:translateX(95.2479px)
          }
          65% {
            transform:translateX(95.2408px)
          }
          65.4167% {
            transform:translateX(95.2339px)
          }
          65.8333% {
            transform:translateX(95.2272px)
          }
          66.25% {
            transform:translateX(95.2207px)
          }
          66.6667% {
            transform:translateX(95.2144px)
          }
          67.0833% {
            transform:translateX(95.2082px)
          }
          67.5% {
            transform:translateX(95.2023px)
          }
          67.9167% {
            transform:translateX(95.1965px)
          }
          68.3333% {
            transform:translateX(95.1908px)
          }
          68.75% {
            transform:translateX(95.1854px)
          }
          69.1667% {
            transform:translateX(95.1801px)
          }
          69.5833% {
            transform:translateX(95.1749px)
          }
          70% {
            transform:translateX(95.1699px)
          }
          70.4167% {
            transform:translateX(95.165px)
          }
          70.8333% {
            transform:translateX(95.1603px)
          }
          71.25% {
            transform:translateX(95.1557px)
          }
          71.6667% {
            transform:translateX(95.1512px)
          }
          72.0833% {
            transform:translateX(95.1469px)
          }
          72.5% {
            transform:translateX(95.1427px)
          }
          72.9167% {
            transform:translateX(95.1386px)
          }
          73.3333% {
            transform:translateX(95.1346px)
          }
          73.75% {
            transform:translateX(95.1308px)
          }
          74.1667% {
            transform:translateX(95.127px)
          }
          74.5833% {
            transform:translateX(95.1234px)
          }
          75% {
            transform:translateX(95.1199px)
          }
          75.4167% {
            transform:translateX(95.1164px)
          }
          75.8333% {
            transform:translateX(95.1131px)
          }
          76.25% {
            transform:translateX(95.1098px)
          }
          76.6667% {
            transform:translateX(95.1067px)
          }
          77.0833% {
            transform:translateX(95.1036px)
          }
          77.5% {
            transform:translateX(95.1007px)
          }
          77.9167% {
            transform:translateX(95.0978px)
          }
          78.3333% {
            transform:translateX(95.095px)
          }
          78.75% {
            transform:translateX(95.0923px)
          }
          79.1667% {
            transform:translateX(95.0896px)
          }
          79.5833% {
            transform:translateX(95.0871px)
          }
          80% {
            transform:translateX(95.0846px)
          }
          80.4167% {
            transform:translateX(95.0821px)
          }
          80.8333% {
            transform:translateX(95.0798px)
          }
          81.25% {
            transform:translateX(95.0775px)
          }
          81.6667% {
            transform:translateX(95.0753px)
          }
          82.0833% {
            transform:translateX(95.0731px)
          }
          82.5% {
            transform:translateX(95.071px)
          }
          82.9167% {
            transform:translateX(95.069px)
          }
          83.3333% {
            transform:translateX(95.067px)
          }
          83.75% {
            transform:translateX(95.0651px)
          }
          84.1667% {
            transform:translateX(95.0632px)
          }
          84.5833% {
            transform:translateX(95.0614px)
          }
          85% {
            transform:translateX(95.0597px)
          }
          85.4167% {
            transform:translateX(95.0579px)
          }
          85.8333% {
            transform:translateX(95.0563px)
          }
          86.25% {
            transform:translateX(95.0547px)
          }
          86.6667% {
            transform:translateX(95.0531px)
          }
          87.0833% {
            transform:translateX(95.0516px)
          }
          87.5% {
            transform:translateX(95.0501px)
          }
          95% {
            transform:translateX(95.0501px)
          }
          95.01%,100% {
            transform:translateX(30px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="PID Position Tracking">
        <path class="ink muted" d="M14 58H126M42 85H100M42 101H100M42 117H100M70 79V123"/>
        <g fill="#92aaa1" font-family="monospace" font-size="10">
          <text x="22" y="89">P</text>
          <text x="22" y="105">I</text>
          <text x="22" y="121">D</text>
        </g>
        <g class="cycle">
          <circle class="ink warm target" style="fill:none" cx="95" cy="58" r="10"/>
          <g class="carriage" style="transform:translateX(95px)">
            <rect class="ink paper" x="-7" y="50" width="14" height="16" rx="2"/>
          </g>
          <path class="ink muted gap" d="M95 38V34H95V38"/>
          <path class="ink load" style="transform:translateX(95px);stroke:#ed8eab" d="M-8 46H-18m3-2-3 2 3 2"/>
          <path class="ink force" d="M95 72h1"/>
          <path class="ink P" d="M70 85H70"/>
          <path class="ink I" d="M70 101H72"/>
          <path class="ink D" d="M70 117H70"/>
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

if (!customElements.get("concept-pid-position-tracking")) {
  customElements.define("concept-pid-position-tracking", ConceptPidPositionTracking);
}
