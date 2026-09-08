// Vacuum Degassing of Steel. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVacuumDegassingOfSteel extends HTMLElement {
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
          animation:cycle 16s linear infinite
        }
        @keyframes cycle {
          0%,97% {
            opacity:1
          }
          99%,100% {
            opacity:0
          }
        }
        .bubble0 {
          opacity:0;
          animation:bubble0 16s linear infinite
        }
        @keyframes bubble0 {
          0%,10% {
            cy:108;
            r:3;
            opacity:0
          }
          11% {
            cy:106.4;
            r:3.5;
            opacity:.7
          }
          15% {
            cy:100;
            r:6;
            opacity:.7
          }
          24% {
            cy:74.8;
            r:7;
            opacity:.7
          }
          25% {
            cy:72;
            r:7;
            opacity:0
          }
          100% {
            cy:72;
            r:7;
            opacity:0
          }
        }
        .h0 {
          animation:h0 16s linear infinite
        }
        @keyframes h0 {
          0% {
            cx:52.000;
            cy:86.000
          }
          1% {
            cx:52.000;
            cy:86.000
          }
          2% {
            cx:52.000;
            cy:86.000
          }
          3% {
            cx:52.000;
            cy:86.000
          }
          4% {
            cx:52.000;
            cy:86.000
          }
          5% {
            cx:52.000;
            cy:86.000
          }
          6% {
            cx:52.000;
            cy:86.000
          }
          7% {
            cx:52.000;
            cy:86.000
          }
          8% {
            cx:52.000;
            cy:86.000
          }
          9% {
            cx:52.000;
            cy:86.000
          }
          10% {
            cx:52.000;
            cy:86.000
          }
          11% {
            cx:54.680;
            cy:88.800
          }
          12% {
            cx:57.360;
            cy:91.600
          }
          13% {
            cx:60.040;
            cy:94.400
          }
          14% {
            cx:62.720;
            cy:97.200
          }
          15% {
            cx:65.400;
            cy:100.000
          }
          16% {
            cx:65.400;
            cy:97.200
          }
          17% {
            cx:65.400;
            cy:94.400
          }
          18% {
            cx:65.400;
            cy:91.600
          }
          19% {
            cx:65.400;
            cy:88.800
          }
          20% {
            cx:65.400;
            cy:86.000
          }
          21% {
            cx:65.400;
            cy:83.200
          }
          22% {
            cx:65.400;
            cy:80.400
          }
          23% {
            cx:65.400;
            cy:77.600
          }
          24% {
            cx:65.400;
            cy:74.800
          }
          25% {
            cx:65.400;
            cy:72.000
          }
          26% {
            cx:65.400;
            cy:65.600
          }
          27% {
            cx:65.400;
            cy:59.200
          }
          28% {
            cx:65.400;
            cy:52.800
          }
          29% {
            cx:65.400;
            cy:46.400
          }
          30% {
            cx:65.400;
            cy:40.000
          }
          31% {
            cx:75.900;
            cy:40.000
          }
          32% {
            cx:86.400;
            cy:40.000
          }
          33% {
            cx:96.900;
            cy:40.000
          }
          34% {
            cx:107.400;
            cy:40.000
          }
          35% {
            cx:107.400;
            cy:33.000
          }
          36% {
            cx:107.400;
            cy:26.000
          }
          37% {
            cx:107.400;
            cy:19.000
          }
          38% {
            cx:107.400;
            cy:12.000
          }
          39% {
            cx:114.400;
            cy:12.000
          }
          40% {
            cx:121.400;
            cy:12.000
          }
          41% {
            cx:128.400;
            cy:12.000
          }
          42% {
            cx:135.400;
            cy:12.000
          }
          43% {
            cx:142.400;
            cy:12.000
          }
          44% {
            cx:142.400;
            cy:12.000
          }
          45% {
            cx:142.400;
            cy:12.000
          }
          46% {
            cx:142.400;
            cy:12.000
          }
          47% {
            cx:142.400;
            cy:12.000
          }
          48% {
            cx:142.400;
            cy:12.000
          }
          49% {
            cx:142.400;
            cy:12.000
          }
          50% {
            cx:142.400;
            cy:12.000
          }
          51% {
            cx:142.400;
            cy:12.000
          }
          52% {
            cx:142.400;
            cy:12.000
          }
          53% {
            cx:142.400;
            cy:12.000
          }
          54% {
            cx:142.400;
            cy:12.000
          }
          55% {
            cx:142.400;
            cy:12.000
          }
          56% {
            cx:142.400;
            cy:12.000
          }
          57% {
            cx:142.400;
            cy:12.000
          }
          58% {
            cx:142.400;
            cy:12.000
          }
          59% {
            cx:142.400;
            cy:12.000
          }
          60% {
            cx:142.400;
            cy:12.000
          }
          61% {
            cx:142.400;
            cy:12.000
          }
          62% {
            cx:142.400;
            cy:12.000
          }
          63% {
            cx:142.400;
            cy:12.000
          }
          64% {
            cx:142.400;
            cy:12.000
          }
          65% {
            cx:142.400;
            cy:12.000
          }
          66% {
            cx:142.400;
            cy:12.000
          }
          67% {
            cx:142.400;
            cy:12.000
          }
          68% {
            cx:142.400;
            cy:12.000
          }
          69% {
            cx:142.400;
            cy:12.000
          }
          70% {
            cx:142.400;
            cy:12.000
          }
          71% {
            cx:142.400;
            cy:12.000
          }
          72% {
            cx:142.400;
            cy:12.000
          }
          73% {
            cx:142.400;
            cy:12.000
          }
          74% {
            cx:142.400;
            cy:12.000
          }
          75% {
            cx:142.400;
            cy:12.000
          }
          76% {
            cx:142.400;
            cy:12.000
          }
          77% {
            cx:142.400;
            cy:12.000
          }
          78% {
            cx:142.400;
            cy:12.000
          }
          79% {
            cx:142.400;
            cy:12.000
          }
          80% {
            cx:142.400;
            cy:12.000
          }
          81% {
            cx:142.400;
            cy:12.000
          }
          82% {
            cx:142.400;
            cy:12.000
          }
          83% {
            cx:142.400;
            cy:12.000
          }
          84% {
            cx:142.400;
            cy:12.000
          }
          85% {
            cx:142.400;
            cy:12.000
          }
          86% {
            cx:142.400;
            cy:12.000
          }
          87% {
            cx:142.400;
            cy:12.000
          }
          88% {
            cx:142.400;
            cy:12.000
          }
          89% {
            cx:142.400;
            cy:12.000
          }
          90% {
            cx:142.400;
            cy:12.000
          }
          91% {
            cx:142.400;
            cy:12.000
          }
          92% {
            cx:142.400;
            cy:12.000
          }
          93% {
            cx:142.400;
            cy:12.000
          }
          94% {
            cx:142.400;
            cy:12.000
          }
          95% {
            cx:142.400;
            cy:12.000
          }
          96% {
            cx:142.400;
            cy:12.000
          }
          97% {
            cx:142.400;
            cy:12.000
          }
          98% {
            cx:142.400;
            cy:12.000
          }
          99% {
            cx:142.400;
            cy:12.000
          }
          100% {
            cx:142.400;
            cy:12.000
          }
        }
        .h1 {
          animation:h1 16s linear infinite
        }
        @keyframes h1 {
          0% {
            cx:86.000;
            cy:86.000
          }
          1% {
            cx:86.000;
            cy:86.000
          }
          2% {
            cx:86.000;
            cy:86.000
          }
          3% {
            cx:86.000;
            cy:86.000
          }
          4% {
            cx:86.000;
            cy:86.000
          }
          5% {
            cx:86.000;
            cy:86.000
          }
          6% {
            cx:86.000;
            cy:86.000
          }
          7% {
            cx:86.000;
            cy:86.000
          }
          8% {
            cx:86.000;
            cy:86.000
          }
          9% {
            cx:86.000;
            cy:86.000
          }
          10% {
            cx:86.000;
            cy:86.000
          }
          11% {
            cx:82.920;
            cy:88.800
          }
          12% {
            cx:79.840;
            cy:91.600
          }
          13% {
            cx:76.760;
            cy:94.400
          }
          14% {
            cx:73.680;
            cy:97.200
          }
          15% {
            cx:70.600;
            cy:100.000
          }
          16% {
            cx:70.600;
            cy:97.200
          }
          17% {
            cx:70.600;
            cy:94.400
          }
          18% {
            cx:70.600;
            cy:91.600
          }
          19% {
            cx:70.600;
            cy:88.800
          }
          20% {
            cx:70.600;
            cy:86.000
          }
          21% {
            cx:70.600;
            cy:83.200
          }
          22% {
            cx:70.600;
            cy:80.400
          }
          23% {
            cx:70.600;
            cy:77.600
          }
          24% {
            cx:70.600;
            cy:74.800
          }
          25% {
            cx:70.600;
            cy:72.000
          }
          26% {
            cx:70.600;
            cy:65.600
          }
          27% {
            cx:70.600;
            cy:59.200
          }
          28% {
            cx:70.600;
            cy:52.800
          }
          29% {
            cx:70.600;
            cy:46.400
          }
          30% {
            cx:70.600;
            cy:40.000
          }
          31% {
            cx:81.100;
            cy:40.000
          }
          32% {
            cx:91.600;
            cy:40.000
          }
          33% {
            cx:102.100;
            cy:40.000
          }
          34% {
            cx:112.600;
            cy:40.000
          }
          35% {
            cx:112.600;
            cy:33.000
          }
          36% {
            cx:112.600;
            cy:26.000
          }
          37% {
            cx:112.600;
            cy:19.000
          }
          38% {
            cx:112.600;
            cy:12.000
          }
          39% {
            cx:119.600;
            cy:12.000
          }
          40% {
            cx:126.600;
            cy:12.000
          }
          41% {
            cx:133.600;
            cy:12.000
          }
          42% {
            cx:140.600;
            cy:12.000
          }
          43% {
            cx:147.600;
            cy:12.000
          }
          44% {
            cx:147.600;
            cy:12.000
          }
          45% {
            cx:147.600;
            cy:12.000
          }
          46% {
            cx:147.600;
            cy:12.000
          }
          47% {
            cx:147.600;
            cy:12.000
          }
          48% {
            cx:147.600;
            cy:12.000
          }
          49% {
            cx:147.600;
            cy:12.000
          }
          50% {
            cx:147.600;
            cy:12.000
          }
          51% {
            cx:147.600;
            cy:12.000
          }
          52% {
            cx:147.600;
            cy:12.000
          }
          53% {
            cx:147.600;
            cy:12.000
          }
          54% {
            cx:147.600;
            cy:12.000
          }
          55% {
            cx:147.600;
            cy:12.000
          }
          56% {
            cx:147.600;
            cy:12.000
          }
          57% {
            cx:147.600;
            cy:12.000
          }
          58% {
            cx:147.600;
            cy:12.000
          }
          59% {
            cx:147.600;
            cy:12.000
          }
          60% {
            cx:147.600;
            cy:12.000
          }
          61% {
            cx:147.600;
            cy:12.000
          }
          62% {
            cx:147.600;
            cy:12.000
          }
          63% {
            cx:147.600;
            cy:12.000
          }
          64% {
            cx:147.600;
            cy:12.000
          }
          65% {
            cx:147.600;
            cy:12.000
          }
          66% {
            cx:147.600;
            cy:12.000
          }
          67% {
            cx:147.600;
            cy:12.000
          }
          68% {
            cx:147.600;
            cy:12.000
          }
          69% {
            cx:147.600;
            cy:12.000
          }
          70% {
            cx:147.600;
            cy:12.000
          }
          71% {
            cx:147.600;
            cy:12.000
          }
          72% {
            cx:147.600;
            cy:12.000
          }
          73% {
            cx:147.600;
            cy:12.000
          }
          74% {
            cx:147.600;
            cy:12.000
          }
          75% {
            cx:147.600;
            cy:12.000
          }
          76% {
            cx:147.600;
            cy:12.000
          }
          77% {
            cx:147.600;
            cy:12.000
          }
          78% {
            cx:147.600;
            cy:12.000
          }
          79% {
            cx:147.600;
            cy:12.000
          }
          80% {
            cx:147.600;
            cy:12.000
          }
          81% {
            cx:147.600;
            cy:12.000
          }
          82% {
            cx:147.600;
            cy:12.000
          }
          83% {
            cx:147.600;
            cy:12.000
          }
          84% {
            cx:147.600;
            cy:12.000
          }
          85% {
            cx:147.600;
            cy:12.000
          }
          86% {
            cx:147.600;
            cy:12.000
          }
          87% {
            cx:147.600;
            cy:12.000
          }
          88% {
            cx:147.600;
            cy:12.000
          }
          89% {
            cx:147.600;
            cy:12.000
          }
          90% {
            cx:147.600;
            cy:12.000
          }
          91% {
            cx:147.600;
            cy:12.000
          }
          92% {
            cx:147.600;
            cy:12.000
          }
          93% {
            cx:147.600;
            cy:12.000
          }
          94% {
            cx:147.600;
            cy:12.000
          }
          95% {
            cx:147.600;
            cy:12.000
          }
          96% {
            cx:147.600;
            cy:12.000
          }
          97% {
            cx:147.600;
            cy:12.000
          }
          98% {
            cx:147.600;
            cy:12.000
          }
          99% {
            cx:147.600;
            cy:12.000
          }
          100% {
            cx:147.600;
            cy:12.000
          }
        }
        .bond0 {
          opacity:0;
          animation:bond0 16s linear infinite
        }
        @keyframes bond0 {
          0% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          1% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          2% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          3% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          4% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          5% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          6% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          7% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          8% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          9% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          10% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          11% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          12% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          13% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          14% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          15% {
            transform:translate(68.000px,100.000px);
            opacity:1
          }
          16% {
            transform:translate(68.000px,97.200px);
            opacity:1
          }
          17% {
            transform:translate(68.000px,94.400px);
            opacity:1
          }
          18% {
            transform:translate(68.000px,91.600px);
            opacity:1
          }
          19% {
            transform:translate(68.000px,88.800px);
            opacity:1
          }
          20% {
            transform:translate(68.000px,86.000px);
            opacity:1
          }
          21% {
            transform:translate(68.000px,83.200px);
            opacity:1
          }
          22% {
            transform:translate(68.000px,80.400px);
            opacity:1
          }
          23% {
            transform:translate(68.000px,77.600px);
            opacity:1
          }
          24% {
            transform:translate(68.000px,74.800px);
            opacity:1
          }
          25% {
            transform:translate(68.000px,72.000px);
            opacity:1
          }
          26% {
            transform:translate(68.000px,65.600px);
            opacity:1
          }
          27% {
            transform:translate(68.000px,59.200px);
            opacity:1
          }
          28% {
            transform:translate(68.000px,52.800px);
            opacity:1
          }
          29% {
            transform:translate(68.000px,46.400px);
            opacity:1
          }
          30% {
            transform:translate(68.000px,40.000px);
            opacity:1
          }
          31% {
            transform:translate(78.500px,40.000px);
            opacity:1
          }
          32% {
            transform:translate(89.000px,40.000px);
            opacity:1
          }
          33% {
            transform:translate(99.500px,40.000px);
            opacity:1
          }
          34% {
            transform:translate(110.000px,40.000px);
            opacity:1
          }
          35% {
            transform:translate(110.000px,33.000px);
            opacity:1
          }
          36% {
            transform:translate(110.000px,26.000px);
            opacity:1
          }
          37% {
            transform:translate(110.000px,19.000px);
            opacity:1
          }
          38% {
            transform:translate(110.000px,12.000px);
            opacity:1
          }
          39% {
            transform:translate(117.000px,12.000px);
            opacity:1
          }
          40% {
            transform:translate(124.000px,12.000px);
            opacity:1
          }
          41% {
            transform:translate(131.000px,12.000px);
            opacity:1
          }
          42% {
            transform:translate(138.000px,12.000px);
            opacity:1
          }
          43% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          44% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          45% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          46% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          47% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          48% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          49% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          50% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          51% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          52% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          53% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          54% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          55% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          56% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          57% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          58% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          59% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          60% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          61% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          62% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          63% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          64% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          65% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          66% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          67% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          68% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          69% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          70% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          71% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          72% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          73% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          74% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          75% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          76% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          77% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          78% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          79% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          80% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          81% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          82% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          83% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          84% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          85% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          86% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          87% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          88% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          89% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          90% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          91% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          92% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          93% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          94% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          95% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          96% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          97% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          98% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          99% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          100% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
        }
        .bubble1 {
          opacity:0;
          animation:bubble1 16s linear infinite
        }
        @keyframes bubble1 {
          0%,34% {
            cy:108;
            r:3;
            opacity:0
          }
          35% {
            cy:106.4;
            r:3.5;
            opacity:.7
          }
          39% {
            cy:100;
            r:6;
            opacity:.7
          }
          48% {
            cy:74.8;
            r:7;
            opacity:.7
          }
          49% {
            cy:72;
            r:7;
            opacity:0
          }
          100% {
            cy:72;
            r:7;
            opacity:0
          }
        }
        .h2 {
          animation:h2 16s linear infinite
        }
        @keyframes h2 {
          0% {
            cx:52.000;
            cy:94.000
          }
          1% {
            cx:52.000;
            cy:94.000
          }
          2% {
            cx:52.000;
            cy:94.000
          }
          3% {
            cx:52.000;
            cy:94.000
          }
          4% {
            cx:52.000;
            cy:94.000
          }
          5% {
            cx:52.000;
            cy:94.000
          }
          6% {
            cx:52.000;
            cy:94.000
          }
          7% {
            cx:52.000;
            cy:94.000
          }
          8% {
            cx:52.000;
            cy:94.000
          }
          9% {
            cx:52.000;
            cy:94.000
          }
          10% {
            cx:52.000;
            cy:94.000
          }
          11% {
            cx:52.000;
            cy:94.000
          }
          12% {
            cx:52.000;
            cy:94.000
          }
          13% {
            cx:52.000;
            cy:94.000
          }
          14% {
            cx:52.000;
            cy:94.000
          }
          15% {
            cx:52.000;
            cy:94.000
          }
          16% {
            cx:52.000;
            cy:94.000
          }
          17% {
            cx:52.000;
            cy:94.000
          }
          18% {
            cx:52.000;
            cy:94.000
          }
          19% {
            cx:52.000;
            cy:94.000
          }
          20% {
            cx:52.000;
            cy:94.000
          }
          21% {
            cx:52.000;
            cy:94.000
          }
          22% {
            cx:52.000;
            cy:94.000
          }
          23% {
            cx:52.000;
            cy:94.000
          }
          24% {
            cx:52.000;
            cy:94.000
          }
          25% {
            cx:52.000;
            cy:94.000
          }
          26% {
            cx:52.000;
            cy:94.000
          }
          27% {
            cx:52.000;
            cy:94.000
          }
          28% {
            cx:52.000;
            cy:94.000
          }
          29% {
            cx:52.000;
            cy:94.000
          }
          30% {
            cx:52.000;
            cy:94.000
          }
          31% {
            cx:52.000;
            cy:94.000
          }
          32% {
            cx:52.000;
            cy:94.000
          }
          33% {
            cx:52.000;
            cy:94.000
          }
          34% {
            cx:52.000;
            cy:94.000
          }
          35% {
            cx:54.680;
            cy:95.200
          }
          36% {
            cx:57.360;
            cy:96.400
          }
          37% {
            cx:60.040;
            cy:97.600
          }
          38% {
            cx:62.720;
            cy:98.800
          }
          39% {
            cx:65.400;
            cy:100.000
          }
          40% {
            cx:65.400;
            cy:97.200
          }
          41% {
            cx:65.400;
            cy:94.400
          }
          42% {
            cx:65.400;
            cy:91.600
          }
          43% {
            cx:65.400;
            cy:88.800
          }
          44% {
            cx:65.400;
            cy:86.000
          }
          45% {
            cx:65.400;
            cy:83.200
          }
          46% {
            cx:65.400;
            cy:80.400
          }
          47% {
            cx:65.400;
            cy:77.600
          }
          48% {
            cx:65.400;
            cy:74.800
          }
          49% {
            cx:65.400;
            cy:72.000
          }
          50% {
            cx:65.400;
            cy:65.600
          }
          51% {
            cx:65.400;
            cy:59.200
          }
          52% {
            cx:65.400;
            cy:52.800
          }
          53% {
            cx:65.400;
            cy:46.400
          }
          54% {
            cx:65.400;
            cy:40.000
          }
          55% {
            cx:75.900;
            cy:40.000
          }
          56% {
            cx:86.400;
            cy:40.000
          }
          57% {
            cx:96.900;
            cy:40.000
          }
          58% {
            cx:107.400;
            cy:40.000
          }
          59% {
            cx:107.400;
            cy:33.000
          }
          60% {
            cx:107.400;
            cy:26.000
          }
          61% {
            cx:107.400;
            cy:19.000
          }
          62% {
            cx:107.400;
            cy:12.000
          }
          63% {
            cx:114.400;
            cy:12.000
          }
          64% {
            cx:121.400;
            cy:12.000
          }
          65% {
            cx:128.400;
            cy:12.000
          }
          66% {
            cx:135.400;
            cy:12.000
          }
          67% {
            cx:142.400;
            cy:12.000
          }
          68% {
            cx:142.400;
            cy:12.000
          }
          69% {
            cx:142.400;
            cy:12.000
          }
          70% {
            cx:142.400;
            cy:12.000
          }
          71% {
            cx:142.400;
            cy:12.000
          }
          72% {
            cx:142.400;
            cy:12.000
          }
          73% {
            cx:142.400;
            cy:12.000
          }
          74% {
            cx:142.400;
            cy:12.000
          }
          75% {
            cx:142.400;
            cy:12.000
          }
          76% {
            cx:142.400;
            cy:12.000
          }
          77% {
            cx:142.400;
            cy:12.000
          }
          78% {
            cx:142.400;
            cy:12.000
          }
          79% {
            cx:142.400;
            cy:12.000
          }
          80% {
            cx:142.400;
            cy:12.000
          }
          81% {
            cx:142.400;
            cy:12.000
          }
          82% {
            cx:142.400;
            cy:12.000
          }
          83% {
            cx:142.400;
            cy:12.000
          }
          84% {
            cx:142.400;
            cy:12.000
          }
          85% {
            cx:142.400;
            cy:12.000
          }
          86% {
            cx:142.400;
            cy:12.000
          }
          87% {
            cx:142.400;
            cy:12.000
          }
          88% {
            cx:142.400;
            cy:12.000
          }
          89% {
            cx:142.400;
            cy:12.000
          }
          90% {
            cx:142.400;
            cy:12.000
          }
          91% {
            cx:142.400;
            cy:12.000
          }
          92% {
            cx:142.400;
            cy:12.000
          }
          93% {
            cx:142.400;
            cy:12.000
          }
          94% {
            cx:142.400;
            cy:12.000
          }
          95% {
            cx:142.400;
            cy:12.000
          }
          96% {
            cx:142.400;
            cy:12.000
          }
          97% {
            cx:142.400;
            cy:12.000
          }
          98% {
            cx:142.400;
            cy:12.000
          }
          99% {
            cx:142.400;
            cy:12.000
          }
          100% {
            cx:142.400;
            cy:12.000
          }
        }
        .h3 {
          animation:h3 16s linear infinite
        }
        @keyframes h3 {
          0% {
            cx:86.000;
            cy:94.000
          }
          1% {
            cx:86.000;
            cy:94.000
          }
          2% {
            cx:86.000;
            cy:94.000
          }
          3% {
            cx:86.000;
            cy:94.000
          }
          4% {
            cx:86.000;
            cy:94.000
          }
          5% {
            cx:86.000;
            cy:94.000
          }
          6% {
            cx:86.000;
            cy:94.000
          }
          7% {
            cx:86.000;
            cy:94.000
          }
          8% {
            cx:86.000;
            cy:94.000
          }
          9% {
            cx:86.000;
            cy:94.000
          }
          10% {
            cx:86.000;
            cy:94.000
          }
          11% {
            cx:86.000;
            cy:94.000
          }
          12% {
            cx:86.000;
            cy:94.000
          }
          13% {
            cx:86.000;
            cy:94.000
          }
          14% {
            cx:86.000;
            cy:94.000
          }
          15% {
            cx:86.000;
            cy:94.000
          }
          16% {
            cx:86.000;
            cy:94.000
          }
          17% {
            cx:86.000;
            cy:94.000
          }
          18% {
            cx:86.000;
            cy:94.000
          }
          19% {
            cx:86.000;
            cy:94.000
          }
          20% {
            cx:86.000;
            cy:94.000
          }
          21% {
            cx:86.000;
            cy:94.000
          }
          22% {
            cx:86.000;
            cy:94.000
          }
          23% {
            cx:86.000;
            cy:94.000
          }
          24% {
            cx:86.000;
            cy:94.000
          }
          25% {
            cx:86.000;
            cy:94.000
          }
          26% {
            cx:86.000;
            cy:94.000
          }
          27% {
            cx:86.000;
            cy:94.000
          }
          28% {
            cx:86.000;
            cy:94.000
          }
          29% {
            cx:86.000;
            cy:94.000
          }
          30% {
            cx:86.000;
            cy:94.000
          }
          31% {
            cx:86.000;
            cy:94.000
          }
          32% {
            cx:86.000;
            cy:94.000
          }
          33% {
            cx:86.000;
            cy:94.000
          }
          34% {
            cx:86.000;
            cy:94.000
          }
          35% {
            cx:82.920;
            cy:95.200
          }
          36% {
            cx:79.840;
            cy:96.400
          }
          37% {
            cx:76.760;
            cy:97.600
          }
          38% {
            cx:73.680;
            cy:98.800
          }
          39% {
            cx:70.600;
            cy:100.000
          }
          40% {
            cx:70.600;
            cy:97.200
          }
          41% {
            cx:70.600;
            cy:94.400
          }
          42% {
            cx:70.600;
            cy:91.600
          }
          43% {
            cx:70.600;
            cy:88.800
          }
          44% {
            cx:70.600;
            cy:86.000
          }
          45% {
            cx:70.600;
            cy:83.200
          }
          46% {
            cx:70.600;
            cy:80.400
          }
          47% {
            cx:70.600;
            cy:77.600
          }
          48% {
            cx:70.600;
            cy:74.800
          }
          49% {
            cx:70.600;
            cy:72.000
          }
          50% {
            cx:70.600;
            cy:65.600
          }
          51% {
            cx:70.600;
            cy:59.200
          }
          52% {
            cx:70.600;
            cy:52.800
          }
          53% {
            cx:70.600;
            cy:46.400
          }
          54% {
            cx:70.600;
            cy:40.000
          }
          55% {
            cx:81.100;
            cy:40.000
          }
          56% {
            cx:91.600;
            cy:40.000
          }
          57% {
            cx:102.100;
            cy:40.000
          }
          58% {
            cx:112.600;
            cy:40.000
          }
          59% {
            cx:112.600;
            cy:33.000
          }
          60% {
            cx:112.600;
            cy:26.000
          }
          61% {
            cx:112.600;
            cy:19.000
          }
          62% {
            cx:112.600;
            cy:12.000
          }
          63% {
            cx:119.600;
            cy:12.000
          }
          64% {
            cx:126.600;
            cy:12.000
          }
          65% {
            cx:133.600;
            cy:12.000
          }
          66% {
            cx:140.600;
            cy:12.000
          }
          67% {
            cx:147.600;
            cy:12.000
          }
          68% {
            cx:147.600;
            cy:12.000
          }
          69% {
            cx:147.600;
            cy:12.000
          }
          70% {
            cx:147.600;
            cy:12.000
          }
          71% {
            cx:147.600;
            cy:12.000
          }
          72% {
            cx:147.600;
            cy:12.000
          }
          73% {
            cx:147.600;
            cy:12.000
          }
          74% {
            cx:147.600;
            cy:12.000
          }
          75% {
            cx:147.600;
            cy:12.000
          }
          76% {
            cx:147.600;
            cy:12.000
          }
          77% {
            cx:147.600;
            cy:12.000
          }
          78% {
            cx:147.600;
            cy:12.000
          }
          79% {
            cx:147.600;
            cy:12.000
          }
          80% {
            cx:147.600;
            cy:12.000
          }
          81% {
            cx:147.600;
            cy:12.000
          }
          82% {
            cx:147.600;
            cy:12.000
          }
          83% {
            cx:147.600;
            cy:12.000
          }
          84% {
            cx:147.600;
            cy:12.000
          }
          85% {
            cx:147.600;
            cy:12.000
          }
          86% {
            cx:147.600;
            cy:12.000
          }
          87% {
            cx:147.600;
            cy:12.000
          }
          88% {
            cx:147.600;
            cy:12.000
          }
          89% {
            cx:147.600;
            cy:12.000
          }
          90% {
            cx:147.600;
            cy:12.000
          }
          91% {
            cx:147.600;
            cy:12.000
          }
          92% {
            cx:147.600;
            cy:12.000
          }
          93% {
            cx:147.600;
            cy:12.000
          }
          94% {
            cx:147.600;
            cy:12.000
          }
          95% {
            cx:147.600;
            cy:12.000
          }
          96% {
            cx:147.600;
            cy:12.000
          }
          97% {
            cx:147.600;
            cy:12.000
          }
          98% {
            cx:147.600;
            cy:12.000
          }
          99% {
            cx:147.600;
            cy:12.000
          }
          100% {
            cx:147.600;
            cy:12.000
          }
        }
        .bond1 {
          opacity:0;
          animation:bond1 16s linear infinite
        }
        @keyframes bond1 {
          0% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          1% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          2% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          3% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          4% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          5% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          6% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          7% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          8% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          9% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          10% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          11% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          12% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          13% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          14% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          15% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          16% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          17% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          18% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          19% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          20% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          21% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          22% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          23% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          24% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          25% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          26% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          27% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          28% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          29% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          30% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          31% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          32% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          33% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          34% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          35% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          36% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          37% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          38% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          39% {
            transform:translate(68.000px,100.000px);
            opacity:1
          }
          40% {
            transform:translate(68.000px,97.200px);
            opacity:1
          }
          41% {
            transform:translate(68.000px,94.400px);
            opacity:1
          }
          42% {
            transform:translate(68.000px,91.600px);
            opacity:1
          }
          43% {
            transform:translate(68.000px,88.800px);
            opacity:1
          }
          44% {
            transform:translate(68.000px,86.000px);
            opacity:1
          }
          45% {
            transform:translate(68.000px,83.200px);
            opacity:1
          }
          46% {
            transform:translate(68.000px,80.400px);
            opacity:1
          }
          47% {
            transform:translate(68.000px,77.600px);
            opacity:1
          }
          48% {
            transform:translate(68.000px,74.800px);
            opacity:1
          }
          49% {
            transform:translate(68.000px,72.000px);
            opacity:1
          }
          50% {
            transform:translate(68.000px,65.600px);
            opacity:1
          }
          51% {
            transform:translate(68.000px,59.200px);
            opacity:1
          }
          52% {
            transform:translate(68.000px,52.800px);
            opacity:1
          }
          53% {
            transform:translate(68.000px,46.400px);
            opacity:1
          }
          54% {
            transform:translate(68.000px,40.000px);
            opacity:1
          }
          55% {
            transform:translate(78.500px,40.000px);
            opacity:1
          }
          56% {
            transform:translate(89.000px,40.000px);
            opacity:1
          }
          57% {
            transform:translate(99.500px,40.000px);
            opacity:1
          }
          58% {
            transform:translate(110.000px,40.000px);
            opacity:1
          }
          59% {
            transform:translate(110.000px,33.000px);
            opacity:1
          }
          60% {
            transform:translate(110.000px,26.000px);
            opacity:1
          }
          61% {
            transform:translate(110.000px,19.000px);
            opacity:1
          }
          62% {
            transform:translate(110.000px,12.000px);
            opacity:1
          }
          63% {
            transform:translate(117.000px,12.000px);
            opacity:1
          }
          64% {
            transform:translate(124.000px,12.000px);
            opacity:1
          }
          65% {
            transform:translate(131.000px,12.000px);
            opacity:1
          }
          66% {
            transform:translate(138.000px,12.000px);
            opacity:1
          }
          67% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          68% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          69% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          70% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          71% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          72% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          73% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          74% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          75% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          76% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          77% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          78% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          79% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          80% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          81% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          82% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          83% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          84% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          85% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          86% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          87% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          88% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          89% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          90% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          91% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          92% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          93% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          94% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          95% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          96% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          97% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          98% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          99% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          100% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
        }
        .bubble2 {
          opacity:0;
          animation:bubble2 16s linear infinite
        }
        @keyframes bubble2 {
          0%,58% {
            cy:108;
            r:3;
            opacity:0
          }
          59% {
            cy:106.4;
            r:3.5;
            opacity:.7
          }
          63% {
            cy:100;
            r:6;
            opacity:.7
          }
          72% {
            cy:74.8;
            r:7;
            opacity:.7
          }
          73% {
            cy:72;
            r:7;
            opacity:0
          }
          100% {
            cy:72;
            r:7;
            opacity:0
          }
        }
        .h4 {
          animation:h4 16s linear infinite
        }
        @keyframes h4 {
          0% {
            cx:52.000;
            cy:102.000
          }
          1% {
            cx:52.000;
            cy:102.000
          }
          2% {
            cx:52.000;
            cy:102.000
          }
          3% {
            cx:52.000;
            cy:102.000
          }
          4% {
            cx:52.000;
            cy:102.000
          }
          5% {
            cx:52.000;
            cy:102.000
          }
          6% {
            cx:52.000;
            cy:102.000
          }
          7% {
            cx:52.000;
            cy:102.000
          }
          8% {
            cx:52.000;
            cy:102.000
          }
          9% {
            cx:52.000;
            cy:102.000
          }
          10% {
            cx:52.000;
            cy:102.000
          }
          11% {
            cx:52.000;
            cy:102.000
          }
          12% {
            cx:52.000;
            cy:102.000
          }
          13% {
            cx:52.000;
            cy:102.000
          }
          14% {
            cx:52.000;
            cy:102.000
          }
          15% {
            cx:52.000;
            cy:102.000
          }
          16% {
            cx:52.000;
            cy:102.000
          }
          17% {
            cx:52.000;
            cy:102.000
          }
          18% {
            cx:52.000;
            cy:102.000
          }
          19% {
            cx:52.000;
            cy:102.000
          }
          20% {
            cx:52.000;
            cy:102.000
          }
          21% {
            cx:52.000;
            cy:102.000
          }
          22% {
            cx:52.000;
            cy:102.000
          }
          23% {
            cx:52.000;
            cy:102.000
          }
          24% {
            cx:52.000;
            cy:102.000
          }
          25% {
            cx:52.000;
            cy:102.000
          }
          26% {
            cx:52.000;
            cy:102.000
          }
          27% {
            cx:52.000;
            cy:102.000
          }
          28% {
            cx:52.000;
            cy:102.000
          }
          29% {
            cx:52.000;
            cy:102.000
          }
          30% {
            cx:52.000;
            cy:102.000
          }
          31% {
            cx:52.000;
            cy:102.000
          }
          32% {
            cx:52.000;
            cy:102.000
          }
          33% {
            cx:52.000;
            cy:102.000
          }
          34% {
            cx:52.000;
            cy:102.000
          }
          35% {
            cx:52.000;
            cy:102.000
          }
          36% {
            cx:52.000;
            cy:102.000
          }
          37% {
            cx:52.000;
            cy:102.000
          }
          38% {
            cx:52.000;
            cy:102.000
          }
          39% {
            cx:52.000;
            cy:102.000
          }
          40% {
            cx:52.000;
            cy:102.000
          }
          41% {
            cx:52.000;
            cy:102.000
          }
          42% {
            cx:52.000;
            cy:102.000
          }
          43% {
            cx:52.000;
            cy:102.000
          }
          44% {
            cx:52.000;
            cy:102.000
          }
          45% {
            cx:52.000;
            cy:102.000
          }
          46% {
            cx:52.000;
            cy:102.000
          }
          47% {
            cx:52.000;
            cy:102.000
          }
          48% {
            cx:52.000;
            cy:102.000
          }
          49% {
            cx:52.000;
            cy:102.000
          }
          50% {
            cx:52.000;
            cy:102.000
          }
          51% {
            cx:52.000;
            cy:102.000
          }
          52% {
            cx:52.000;
            cy:102.000
          }
          53% {
            cx:52.000;
            cy:102.000
          }
          54% {
            cx:52.000;
            cy:102.000
          }
          55% {
            cx:52.000;
            cy:102.000
          }
          56% {
            cx:52.000;
            cy:102.000
          }
          57% {
            cx:52.000;
            cy:102.000
          }
          58% {
            cx:52.000;
            cy:102.000
          }
          59% {
            cx:54.680;
            cy:101.600
          }
          60% {
            cx:57.360;
            cy:101.200
          }
          61% {
            cx:60.040;
            cy:100.800
          }
          62% {
            cx:62.720;
            cy:100.400
          }
          63% {
            cx:65.400;
            cy:100.000
          }
          64% {
            cx:65.400;
            cy:97.200
          }
          65% {
            cx:65.400;
            cy:94.400
          }
          66% {
            cx:65.400;
            cy:91.600
          }
          67% {
            cx:65.400;
            cy:88.800
          }
          68% {
            cx:65.400;
            cy:86.000
          }
          69% {
            cx:65.400;
            cy:83.200
          }
          70% {
            cx:65.400;
            cy:80.400
          }
          71% {
            cx:65.400;
            cy:77.600
          }
          72% {
            cx:65.400;
            cy:74.800
          }
          73% {
            cx:65.400;
            cy:72.000
          }
          74% {
            cx:65.400;
            cy:65.600
          }
          75% {
            cx:65.400;
            cy:59.200
          }
          76% {
            cx:65.400;
            cy:52.800
          }
          77% {
            cx:65.400;
            cy:46.400
          }
          78% {
            cx:65.400;
            cy:40.000
          }
          79% {
            cx:75.900;
            cy:40.000
          }
          80% {
            cx:86.400;
            cy:40.000
          }
          81% {
            cx:96.900;
            cy:40.000
          }
          82% {
            cx:107.400;
            cy:40.000
          }
          83% {
            cx:107.400;
            cy:33.000
          }
          84% {
            cx:107.400;
            cy:26.000
          }
          85% {
            cx:107.400;
            cy:19.000
          }
          86% {
            cx:107.400;
            cy:12.000
          }
          87% {
            cx:114.400;
            cy:12.000
          }
          88% {
            cx:121.400;
            cy:12.000
          }
          89% {
            cx:128.400;
            cy:12.000
          }
          90% {
            cx:135.400;
            cy:12.000
          }
          91% {
            cx:142.400;
            cy:12.000
          }
          92% {
            cx:142.400;
            cy:12.000
          }
          93% {
            cx:142.400;
            cy:12.000
          }
          94% {
            cx:142.400;
            cy:12.000
          }
          95% {
            cx:142.400;
            cy:12.000
          }
          96% {
            cx:142.400;
            cy:12.000
          }
          97% {
            cx:142.400;
            cy:12.000
          }
          98% {
            cx:142.400;
            cy:12.000
          }
          99% {
            cx:142.400;
            cy:12.000
          }
          100% {
            cx:142.400;
            cy:12.000
          }
        }
        .h5 {
          animation:h5 16s linear infinite
        }
        @keyframes h5 {
          0% {
            cx:86.000;
            cy:102.000
          }
          1% {
            cx:86.000;
            cy:102.000
          }
          2% {
            cx:86.000;
            cy:102.000
          }
          3% {
            cx:86.000;
            cy:102.000
          }
          4% {
            cx:86.000;
            cy:102.000
          }
          5% {
            cx:86.000;
            cy:102.000
          }
          6% {
            cx:86.000;
            cy:102.000
          }
          7% {
            cx:86.000;
            cy:102.000
          }
          8% {
            cx:86.000;
            cy:102.000
          }
          9% {
            cx:86.000;
            cy:102.000
          }
          10% {
            cx:86.000;
            cy:102.000
          }
          11% {
            cx:86.000;
            cy:102.000
          }
          12% {
            cx:86.000;
            cy:102.000
          }
          13% {
            cx:86.000;
            cy:102.000
          }
          14% {
            cx:86.000;
            cy:102.000
          }
          15% {
            cx:86.000;
            cy:102.000
          }
          16% {
            cx:86.000;
            cy:102.000
          }
          17% {
            cx:86.000;
            cy:102.000
          }
          18% {
            cx:86.000;
            cy:102.000
          }
          19% {
            cx:86.000;
            cy:102.000
          }
          20% {
            cx:86.000;
            cy:102.000
          }
          21% {
            cx:86.000;
            cy:102.000
          }
          22% {
            cx:86.000;
            cy:102.000
          }
          23% {
            cx:86.000;
            cy:102.000
          }
          24% {
            cx:86.000;
            cy:102.000
          }
          25% {
            cx:86.000;
            cy:102.000
          }
          26% {
            cx:86.000;
            cy:102.000
          }
          27% {
            cx:86.000;
            cy:102.000
          }
          28% {
            cx:86.000;
            cy:102.000
          }
          29% {
            cx:86.000;
            cy:102.000
          }
          30% {
            cx:86.000;
            cy:102.000
          }
          31% {
            cx:86.000;
            cy:102.000
          }
          32% {
            cx:86.000;
            cy:102.000
          }
          33% {
            cx:86.000;
            cy:102.000
          }
          34% {
            cx:86.000;
            cy:102.000
          }
          35% {
            cx:86.000;
            cy:102.000
          }
          36% {
            cx:86.000;
            cy:102.000
          }
          37% {
            cx:86.000;
            cy:102.000
          }
          38% {
            cx:86.000;
            cy:102.000
          }
          39% {
            cx:86.000;
            cy:102.000
          }
          40% {
            cx:86.000;
            cy:102.000
          }
          41% {
            cx:86.000;
            cy:102.000
          }
          42% {
            cx:86.000;
            cy:102.000
          }
          43% {
            cx:86.000;
            cy:102.000
          }
          44% {
            cx:86.000;
            cy:102.000
          }
          45% {
            cx:86.000;
            cy:102.000
          }
          46% {
            cx:86.000;
            cy:102.000
          }
          47% {
            cx:86.000;
            cy:102.000
          }
          48% {
            cx:86.000;
            cy:102.000
          }
          49% {
            cx:86.000;
            cy:102.000
          }
          50% {
            cx:86.000;
            cy:102.000
          }
          51% {
            cx:86.000;
            cy:102.000
          }
          52% {
            cx:86.000;
            cy:102.000
          }
          53% {
            cx:86.000;
            cy:102.000
          }
          54% {
            cx:86.000;
            cy:102.000
          }
          55% {
            cx:86.000;
            cy:102.000
          }
          56% {
            cx:86.000;
            cy:102.000
          }
          57% {
            cx:86.000;
            cy:102.000
          }
          58% {
            cx:86.000;
            cy:102.000
          }
          59% {
            cx:82.920;
            cy:101.600
          }
          60% {
            cx:79.840;
            cy:101.200
          }
          61% {
            cx:76.760;
            cy:100.800
          }
          62% {
            cx:73.680;
            cy:100.400
          }
          63% {
            cx:70.600;
            cy:100.000
          }
          64% {
            cx:70.600;
            cy:97.200
          }
          65% {
            cx:70.600;
            cy:94.400
          }
          66% {
            cx:70.600;
            cy:91.600
          }
          67% {
            cx:70.600;
            cy:88.800
          }
          68% {
            cx:70.600;
            cy:86.000
          }
          69% {
            cx:70.600;
            cy:83.200
          }
          70% {
            cx:70.600;
            cy:80.400
          }
          71% {
            cx:70.600;
            cy:77.600
          }
          72% {
            cx:70.600;
            cy:74.800
          }
          73% {
            cx:70.600;
            cy:72.000
          }
          74% {
            cx:70.600;
            cy:65.600
          }
          75% {
            cx:70.600;
            cy:59.200
          }
          76% {
            cx:70.600;
            cy:52.800
          }
          77% {
            cx:70.600;
            cy:46.400
          }
          78% {
            cx:70.600;
            cy:40.000
          }
          79% {
            cx:81.100;
            cy:40.000
          }
          80% {
            cx:91.600;
            cy:40.000
          }
          81% {
            cx:102.100;
            cy:40.000
          }
          82% {
            cx:112.600;
            cy:40.000
          }
          83% {
            cx:112.600;
            cy:33.000
          }
          84% {
            cx:112.600;
            cy:26.000
          }
          85% {
            cx:112.600;
            cy:19.000
          }
          86% {
            cx:112.600;
            cy:12.000
          }
          87% {
            cx:119.600;
            cy:12.000
          }
          88% {
            cx:126.600;
            cy:12.000
          }
          89% {
            cx:133.600;
            cy:12.000
          }
          90% {
            cx:140.600;
            cy:12.000
          }
          91% {
            cx:147.600;
            cy:12.000
          }
          92% {
            cx:147.600;
            cy:12.000
          }
          93% {
            cx:147.600;
            cy:12.000
          }
          94% {
            cx:147.600;
            cy:12.000
          }
          95% {
            cx:147.600;
            cy:12.000
          }
          96% {
            cx:147.600;
            cy:12.000
          }
          97% {
            cx:147.600;
            cy:12.000
          }
          98% {
            cx:147.600;
            cy:12.000
          }
          99% {
            cx:147.600;
            cy:12.000
          }
          100% {
            cx:147.600;
            cy:12.000
          }
        }
        .bond2 {
          opacity:0;
          animation:bond2 16s linear infinite
        }
        @keyframes bond2 {
          0% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          1% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          2% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          3% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          4% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          5% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          6% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          7% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          8% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          9% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          10% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          11% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          12% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          13% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          14% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          15% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          16% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          17% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          18% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          19% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          20% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          21% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          22% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          23% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          24% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          25% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          26% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          27% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          28% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          29% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          30% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          31% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          32% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          33% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          34% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          35% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          36% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          37% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          38% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          39% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          40% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          41% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          42% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          43% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          44% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          45% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          46% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          47% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          48% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          49% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          50% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          51% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          52% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          53% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          54% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          55% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          56% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          57% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          58% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          59% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          60% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          61% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          62% {
            transform:translate(68.000px,100.000px);
            opacity:0
          }
          63% {
            transform:translate(68.000px,100.000px);
            opacity:1
          }
          64% {
            transform:translate(68.000px,97.200px);
            opacity:1
          }
          65% {
            transform:translate(68.000px,94.400px);
            opacity:1
          }
          66% {
            transform:translate(68.000px,91.600px);
            opacity:1
          }
          67% {
            transform:translate(68.000px,88.800px);
            opacity:1
          }
          68% {
            transform:translate(68.000px,86.000px);
            opacity:1
          }
          69% {
            transform:translate(68.000px,83.200px);
            opacity:1
          }
          70% {
            transform:translate(68.000px,80.400px);
            opacity:1
          }
          71% {
            transform:translate(68.000px,77.600px);
            opacity:1
          }
          72% {
            transform:translate(68.000px,74.800px);
            opacity:1
          }
          73% {
            transform:translate(68.000px,72.000px);
            opacity:1
          }
          74% {
            transform:translate(68.000px,65.600px);
            opacity:1
          }
          75% {
            transform:translate(68.000px,59.200px);
            opacity:1
          }
          76% {
            transform:translate(68.000px,52.800px);
            opacity:1
          }
          77% {
            transform:translate(68.000px,46.400px);
            opacity:1
          }
          78% {
            transform:translate(68.000px,40.000px);
            opacity:1
          }
          79% {
            transform:translate(78.500px,40.000px);
            opacity:1
          }
          80% {
            transform:translate(89.000px,40.000px);
            opacity:1
          }
          81% {
            transform:translate(99.500px,40.000px);
            opacity:1
          }
          82% {
            transform:translate(110.000px,40.000px);
            opacity:1
          }
          83% {
            transform:translate(110.000px,33.000px);
            opacity:1
          }
          84% {
            transform:translate(110.000px,26.000px);
            opacity:1
          }
          85% {
            transform:translate(110.000px,19.000px);
            opacity:1
          }
          86% {
            transform:translate(110.000px,12.000px);
            opacity:1
          }
          87% {
            transform:translate(117.000px,12.000px);
            opacity:1
          }
          88% {
            transform:translate(124.000px,12.000px);
            opacity:1
          }
          89% {
            transform:translate(131.000px,12.000px);
            opacity:1
          }
          90% {
            transform:translate(138.000px,12.000px);
            opacity:1
          }
          91% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          92% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          93% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          94% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          95% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          96% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          97% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          98% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          99% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
          100% {
            transform:translate(145.000px,12.000px);
            opacity:1
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .bubble1 {
            opacity:.7;
            cy:85
          }
          .h2 {
            cx:65.4;
            cy:85
          }
          .h3 {
            cx:70.6;
            cy:85
          }
          .bond1 {
            opacity:1;
            transform:translate(68px,85px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Vacuum Degassing of Steel">
        <path class="ink muted" d="M104 24H16V125H122V24H116M104 24V7H135M116 24V17H135"/>
        <path class="ink" d="M31 51 42 115H96L107 51"/>
        <path fill="#826349" d="M34.27 70H103.73L96 115H42Z"/>
        <path class="ink cool" style="fill:none" d="M64 135V119H76V135M64 115H76"/>
        <path class="ink muted" d="M43 81Q48 74 56 77M94 91Q92 107 81 108"/>
        <circle class="cool" cx="48" cy="98" r="2.1"/>
        <circle class="cool" cx="89" cy="99" r="2.1"/>
        <g class="cycle">
          <circle class="ink cool bubble0" style="fill:none" cx="68" cy="72" r="7"/>
          <circle class="cool h0" cx="142.4" cy="12" r="2.1"/>
          <circle class="cool h1" cx="147.6" cy="12" r="2.1"/>
          <path class="ink bond0" d="M-2.6 0H2.6"/>
          <circle class="ink cool bubble1" style="fill:none" cx="68" cy="72" r="7"/>
          <circle class="cool h2" cx="65.4" cy="65.6" r="2.1"/>
          <circle class="cool h3" cx="70.6" cy="65.6" r="2.1"/>
          <path class="ink bond1" d="M-2.6 0H2.6"/>
          <circle class="ink cool bubble2" style="fill:none" cx="68" cy="72" r="7"/>
          <circle class="cool h4" cx="52" cy="102" r="2.1"/>
          <circle class="cool h5" cx="86" cy="102" r="2.1"/>
          <path class="ink bond2" d="M-2.6 0H2.6"/>
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

if (!customElements.get("concept-vacuum-degassing-of-steel")) {
  customElements.define("concept-vacuum-degassing-of-steel", ConceptVacuumDegassingOfSteel);
}
