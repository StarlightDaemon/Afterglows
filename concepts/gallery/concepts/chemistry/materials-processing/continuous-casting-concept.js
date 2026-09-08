// Continuous Casting. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptContinuousCasting extends HTMLElement {
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
        .t0 {
          animation:t0 12s linear infinite
        }
        .t0 .liquid {
          animation:liquid0 12s steps(1,end) infinite
        }
        .t0 .solid-mark {
          animation:solid0 12s steps(1,end) infinite
        }
        @keyframes t0 {
          0% {
            transform:translate(60px,20.000px);
            opacity:0.000
          }
          0.5% {
            transform:translate(60px,20.600px);
            opacity:0.000
          }
          1% {
            transform:translate(60px,21.200px);
            opacity:0.000
          }
          1.5% {
            transform:translate(60px,21.800px);
            opacity:0.000
          }
          2% {
            transform:translate(60px,22.400px);
            opacity:0.000
          }
          2.5% {
            transform:translate(60px,23.000px);
            opacity:0.000
          }
          3% {
            transform:translate(60px,23.600px);
            opacity:0.000
          }
          3.5% {
            transform:translate(60px,24.200px);
            opacity:0.000
          }
          4% {
            transform:translate(60px,24.800px);
            opacity:0.000
          }
          4.5% {
            transform:translate(60px,25.400px);
            opacity:0.000
          }
          5% {
            transform:translate(60px,26.000px);
            opacity:0.000
          }
          5.5% {
            transform:translate(60px,26.600px);
            opacity:0.000
          }
          6% {
            transform:translate(60px,27.200px);
            opacity:0.000
          }
          6.5% {
            transform:translate(60px,27.800px);
            opacity:0.000
          }
          7% {
            transform:translate(60px,28.400px);
            opacity:0.000
          }
          7.5% {
            transform:translate(60px,29.000px);
            opacity:0.000
          }
          8% {
            transform:translate(60px,29.600px);
            opacity:0.000
          }
          8.5% {
            transform:translate(60px,30.200px);
            opacity:0.000
          }
          9% {
            transform:translate(60px,30.800px);
            opacity:0.000
          }
          9.5% {
            transform:translate(60px,31.400px);
            opacity:0.000
          }
          10% {
            transform:translate(60px,32.000px);
            opacity:0.000
          }
          10.5% {
            transform:translate(60px,32.600px);
            opacity:0.000
          }
          11% {
            transform:translate(60px,33.200px);
            opacity:0.000
          }
          11.5% {
            transform:translate(60px,33.800px);
            opacity:0.000
          }
          12% {
            transform:translate(60px,34.400px);
            opacity:0.000
          }
          12.5% {
            transform:translate(60px,35.000px);
            opacity:0.000
          }
          13% {
            transform:translate(60px,35.600px);
            opacity:0.000
          }
          13.5% {
            transform:translate(60px,36.200px);
            opacity:0.000
          }
          14% {
            transform:translate(60px,36.800px);
            opacity:0.000
          }
          14.5% {
            transform:translate(60px,37.400px);
            opacity:0.000
          }
          15% {
            transform:translate(60px,38.000px);
            opacity:0.000
          }
          15.5% {
            transform:translate(60px,38.600px);
            opacity:0.000
          }
          16% {
            transform:translate(60px,39.200px);
            opacity:0.000
          }
          16.5% {
            transform:translate(60px,39.800px);
            opacity:0.000
          }
          17% {
            transform:translate(60px,40.400px);
            opacity:0.000
          }
          17.5% {
            transform:translate(60px,41.000px);
            opacity:0.000
          }
          18% {
            transform:translate(60px,41.600px);
            opacity:0.200
          }
          18.5% {
            transform:translate(60px,42.200px);
            opacity:0.400
          }
          19% {
            transform:translate(60px,42.800px);
            opacity:0.600
          }
          19.5% {
            transform:translate(60px,43.400px);
            opacity:0.800
          }
          20% {
            transform:translate(60px,44.000px);
            opacity:1.000
          }
          20.5% {
            transform:translate(60px,44.600px);
            opacity:1.000
          }
          21% {
            transform:translate(60px,45.200px);
            opacity:1.000
          }
          21.5% {
            transform:translate(60px,45.800px);
            opacity:1.000
          }
          22% {
            transform:translate(60px,46.400px);
            opacity:1.000
          }
          22.5% {
            transform:translate(60px,47.000px);
            opacity:1.000
          }
          23% {
            transform:translate(60px,47.600px);
            opacity:1.000
          }
          23.5% {
            transform:translate(60px,48.200px);
            opacity:1.000
          }
          24% {
            transform:translate(60px,48.800px);
            opacity:1.000
          }
          24.5% {
            transform:translate(60px,49.400px);
            opacity:1.000
          }
          25% {
            transform:translate(60px,50.000px);
            opacity:1.000
          }
          25.5% {
            transform:translate(60px,50.600px);
            opacity:1.000
          }
          26% {
            transform:translate(60px,51.200px);
            opacity:1.000
          }
          26.5% {
            transform:translate(60px,51.800px);
            opacity:1.000
          }
          27% {
            transform:translate(60px,52.400px);
            opacity:1.000
          }
          27.5% {
            transform:translate(60px,53.000px);
            opacity:1.000
          }
          28% {
            transform:translate(60px,53.600px);
            opacity:1.000
          }
          28.5% {
            transform:translate(60px,54.200px);
            opacity:1.000
          }
          29% {
            transform:translate(60px,54.800px);
            opacity:1.000
          }
          29.5% {
            transform:translate(60px,55.400px);
            opacity:1.000
          }
          30% {
            transform:translate(60px,56.000px);
            opacity:1.000
          }
          30.5% {
            transform:translate(60px,56.600px);
            opacity:1.000
          }
          31% {
            transform:translate(60px,57.200px);
            opacity:1.000
          }
          31.5% {
            transform:translate(60px,57.800px);
            opacity:1.000
          }
          32% {
            transform:translate(60px,58.400px);
            opacity:1.000
          }
          32.5% {
            transform:translate(60px,59.000px);
            opacity:1.000
          }
          33% {
            transform:translate(60px,59.600px);
            opacity:1.000
          }
          33.5% {
            transform:translate(60px,60.200px);
            opacity:1.000
          }
          34% {
            transform:translate(60px,60.800px);
            opacity:1.000
          }
          34.5% {
            transform:translate(60px,61.400px);
            opacity:1.000
          }
          35% {
            transform:translate(60px,62.000px);
            opacity:1.000
          }
          35.5% {
            transform:translate(60px,62.600px);
            opacity:1.000
          }
          36% {
            transform:translate(60px,63.200px);
            opacity:1.000
          }
          36.5% {
            transform:translate(60px,63.800px);
            opacity:1.000
          }
          37% {
            transform:translate(60px,64.400px);
            opacity:1.000
          }
          37.5% {
            transform:translate(60px,65.000px);
            opacity:1.000
          }
          38% {
            transform:translate(60px,65.600px);
            opacity:1.000
          }
          38.5% {
            transform:translate(60px,66.200px);
            opacity:1.000
          }
          39% {
            transform:translate(60px,66.800px);
            opacity:1.000
          }
          39.5% {
            transform:translate(60px,67.400px);
            opacity:1.000
          }
          40% {
            transform:translate(60px,68.000px);
            opacity:1.000
          }
          40.5% {
            transform:translate(60px,68.600px);
            opacity:1.000
          }
          41% {
            transform:translate(60px,69.200px);
            opacity:1.000
          }
          41.5% {
            transform:translate(60px,69.800px);
            opacity:1.000
          }
          42% {
            transform:translate(60px,70.400px);
            opacity:1.000
          }
          42.5% {
            transform:translate(60px,71.000px);
            opacity:1.000
          }
          43% {
            transform:translate(60px,71.600px);
            opacity:1.000
          }
          43.5% {
            transform:translate(60px,72.200px);
            opacity:1.000
          }
          44% {
            transform:translate(60px,72.800px);
            opacity:1.000
          }
          44.5% {
            transform:translate(60px,73.400px);
            opacity:1.000
          }
          45% {
            transform:translate(60px,74.000px);
            opacity:1.000
          }
          45.5% {
            transform:translate(60px,74.600px);
            opacity:1.000
          }
          46% {
            transform:translate(60px,75.200px);
            opacity:1.000
          }
          46.5% {
            transform:translate(60px,75.800px);
            opacity:1.000
          }
          47% {
            transform:translate(60px,76.400px);
            opacity:1.000
          }
          47.5% {
            transform:translate(60px,77.000px);
            opacity:1.000
          }
          48% {
            transform:translate(60px,77.600px);
            opacity:1.000
          }
          48.5% {
            transform:translate(60px,78.200px);
            opacity:1.000
          }
          49% {
            transform:translate(60px,78.800px);
            opacity:1.000
          }
          49.5% {
            transform:translate(60px,79.400px);
            opacity:1.000
          }
          50% {
            transform:translate(60px,80.000px);
            opacity:1.000
          }
          50.5% {
            transform:translate(60px,80.600px);
            opacity:1.000
          }
          51% {
            transform:translate(60px,81.200px);
            opacity:1.000
          }
          51.5% {
            transform:translate(60px,81.800px);
            opacity:1.000
          }
          52% {
            transform:translate(60px,82.400px);
            opacity:1.000
          }
          52.5% {
            transform:translate(60px,83.000px);
            opacity:1.000
          }
          53% {
            transform:translate(60px,83.600px);
            opacity:1.000
          }
          53.5% {
            transform:translate(60px,84.200px);
            opacity:1.000
          }
          54% {
            transform:translate(60px,84.800px);
            opacity:1.000
          }
          54.5% {
            transform:translate(60px,85.400px);
            opacity:1.000
          }
          55% {
            transform:translate(60px,86.000px);
            opacity:1.000
          }
          55.5% {
            transform:translate(60px,86.600px);
            opacity:1.000
          }
          56% {
            transform:translate(60px,87.200px);
            opacity:1.000
          }
          56.5% {
            transform:translate(60px,87.800px);
            opacity:1.000
          }
          57% {
            transform:translate(60px,88.400px);
            opacity:1.000
          }
          57.5% {
            transform:translate(60px,89.000px);
            opacity:1.000
          }
          58% {
            transform:translate(60px,89.600px);
            opacity:1.000
          }
          58.5% {
            transform:translate(60px,90.200px);
            opacity:1.000
          }
          59% {
            transform:translate(60px,90.800px);
            opacity:1.000
          }
          59.5% {
            transform:translate(60px,91.400px);
            opacity:1.000
          }
          60% {
            transform:translate(60px,92.000px);
            opacity:1.000
          }
          60.5% {
            transform:translate(60px,92.600px);
            opacity:1.000
          }
          61% {
            transform:translate(60px,93.200px);
            opacity:1.000
          }
          61.5% {
            transform:translate(60px,93.800px);
            opacity:1.000
          }
          62% {
            transform:translate(60px,94.400px);
            opacity:1.000
          }
          62.5% {
            transform:translate(60px,95.000px);
            opacity:1.000
          }
          63% {
            transform:translate(60px,95.600px);
            opacity:1.000
          }
          63.5% {
            transform:translate(60px,96.200px);
            opacity:1.000
          }
          64% {
            transform:translate(60px,96.800px);
            opacity:1.000
          }
          64.5% {
            transform:translate(60px,97.400px);
            opacity:1.000
          }
          65% {
            transform:translate(60px,98.000px);
            opacity:1.000
          }
          65.5% {
            transform:translate(60px,98.600px);
            opacity:1.000
          }
          66% {
            transform:translate(60px,99.200px);
            opacity:1.000
          }
          66.5% {
            transform:translate(60px,99.800px);
            opacity:1.000
          }
          67% {
            transform:translate(60px,100.400px);
            opacity:1.000
          }
          67.5% {
            transform:translate(60px,101.000px);
            opacity:1.000
          }
          68% {
            transform:translate(60px,101.600px);
            opacity:1.000
          }
          68.5% {
            transform:translate(60px,102.200px);
            opacity:1.000
          }
          69% {
            transform:translate(60px,102.800px);
            opacity:1.000
          }
          69.5% {
            transform:translate(60px,103.400px);
            opacity:1.000
          }
          70% {
            transform:translate(60px,104.000px);
            opacity:1.000
          }
          70.5% {
            transform:translate(60px,104.600px);
            opacity:1.000
          }
          71% {
            transform:translate(60px,105.200px);
            opacity:1.000
          }
          71.5% {
            transform:translate(60px,105.800px);
            opacity:1.000
          }
          72% {
            transform:translate(60px,106.400px);
            opacity:1.000
          }
          72.5% {
            transform:translate(60px,107.000px);
            opacity:1.000
          }
          73% {
            transform:translate(60px,107.600px);
            opacity:1.000
          }
          73.5% {
            transform:translate(60px,108.200px);
            opacity:1.000
          }
          74% {
            transform:translate(60px,108.800px);
            opacity:1.000
          }
          74.5% {
            transform:translate(60px,109.400px);
            opacity:1.000
          }
          75% {
            transform:translate(60px,110.000px);
            opacity:1.000
          }
          75.5% {
            transform:translate(60px,110.600px);
            opacity:1.000
          }
          76% {
            transform:translate(60px,111.200px);
            opacity:1.000
          }
          76.5% {
            transform:translate(60px,111.800px);
            opacity:1.000
          }
          77% {
            transform:translate(60px,112.400px);
            opacity:1.000
          }
          77.5% {
            transform:translate(60px,113.000px);
            opacity:1.000
          }
          78% {
            transform:translate(60px,113.600px);
            opacity:1.000
          }
          78.5% {
            transform:translate(60px,114.200px);
            opacity:1.000
          }
          79% {
            transform:translate(60px,114.800px);
            opacity:1.000
          }
          79.5% {
            transform:translate(60px,115.400px);
            opacity:1.000
          }
          80% {
            transform:translate(60px,116.000px);
            opacity:1.000
          }
          80.5% {
            transform:translate(60px,116.600px);
            opacity:1.000
          }
          81% {
            transform:translate(60px,117.200px);
            opacity:1.000
          }
          81.5% {
            transform:translate(60px,117.800px);
            opacity:1.000
          }
          82% {
            transform:translate(60px,118.400px);
            opacity:1.000
          }
          82.5% {
            transform:translate(60px,119.000px);
            opacity:1.000
          }
          83% {
            transform:translate(60px,119.600px);
            opacity:1.000
          }
          83.5% {
            transform:translate(60px,120.200px);
            opacity:1.000
          }
          84% {
            transform:translate(60px,120.800px);
            opacity:1.000
          }
          84.5% {
            transform:translate(60px,121.400px);
            opacity:1.000
          }
          85% {
            transform:translate(60px,122.000px);
            opacity:1.000
          }
          85.5% {
            transform:translate(60px,122.600px);
            opacity:1.000
          }
          86% {
            transform:translate(60px,123.200px);
            opacity:1.000
          }
          86.5% {
            transform:translate(60px,123.800px);
            opacity:1.000
          }
          87% {
            transform:translate(60px,124.400px);
            opacity:1.000
          }
          87.5% {
            transform:translate(60px,125.000px);
            opacity:1.000
          }
          88% {
            transform:translate(60px,125.600px);
            opacity:1.000
          }
          88.5% {
            transform:translate(60px,126.200px);
            opacity:1.000
          }
          89% {
            transform:translate(60px,126.800px);
            opacity:1.000
          }
          89.5% {
            transform:translate(60px,127.400px);
            opacity:1.000
          }
          90% {
            transform:translate(60px,128.000px);
            opacity:1.000
          }
          90.5% {
            transform:translate(60px,128.600px);
            opacity:1.000
          }
          91% {
            transform:translate(60px,129.200px);
            opacity:1.000
          }
          91.5% {
            transform:translate(60px,129.800px);
            opacity:1.000
          }
          92% {
            transform:translate(60px,130.400px);
            opacity:1.000
          }
          92.5% {
            transform:translate(60px,131.000px);
            opacity:1.000
          }
          93% {
            transform:translate(60px,131.600px);
            opacity:0.800
          }
          93.5% {
            transform:translate(60px,132.200px);
            opacity:0.600
          }
          94% {
            transform:translate(60px,132.800px);
            opacity:0.400
          }
          94.5% {
            transform:translate(60px,133.400px);
            opacity:0.200
          }
          95% {
            transform:translate(60px,134.000px);
            opacity:0.000
          }
          95.5% {
            transform:translate(60px,134.600px);
            opacity:0.000
          }
          96% {
            transform:translate(60px,135.200px);
            opacity:0.000
          }
          96.5% {
            transform:translate(60px,135.800px);
            opacity:0.000
          }
          97% {
            transform:translate(60px,136.400px);
            opacity:0.000
          }
          97.5% {
            transform:translate(60px,137.000px);
            opacity:0.000
          }
          98% {
            transform:translate(60px,137.600px);
            opacity:0.000
          }
          98.5% {
            transform:translate(60px,138.200px);
            opacity:0.000
          }
          99% {
            transform:translate(60px,138.800px);
            opacity:0.000
          }
          99.5% {
            transform:translate(60px,139.400px);
            opacity:0.000
          }
          100% {
            transform:translate(60px,20.000px);
            opacity:0.000
          }
        }
        @keyframes liquid0 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1
          }
          1% {
            opacity:1
          }
          1.5% {
            opacity:1
          }
          2% {
            opacity:1
          }
          2.5% {
            opacity:1
          }
          3% {
            opacity:1
          }
          3.5% {
            opacity:1
          }
          4% {
            opacity:1
          }
          4.5% {
            opacity:1
          }
          5% {
            opacity:1
          }
          5.5% {
            opacity:1
          }
          6% {
            opacity:1
          }
          6.5% {
            opacity:1
          }
          7% {
            opacity:1
          }
          7.5% {
            opacity:1
          }
          8% {
            opacity:1
          }
          8.5% {
            opacity:1
          }
          9% {
            opacity:1
          }
          9.5% {
            opacity:1
          }
          10% {
            opacity:1
          }
          10.5% {
            opacity:1
          }
          11% {
            opacity:1
          }
          11.5% {
            opacity:1
          }
          12% {
            opacity:1
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1
          }
          13.5% {
            opacity:1
          }
          14% {
            opacity:1
          }
          14.5% {
            opacity:1
          }
          15% {
            opacity:1
          }
          15.5% {
            opacity:1
          }
          16% {
            opacity:1
          }
          16.5% {
            opacity:1
          }
          17% {
            opacity:1
          }
          17.5% {
            opacity:1
          }
          18% {
            opacity:1
          }
          18.5% {
            opacity:1
          }
          19% {
            opacity:1
          }
          19.5% {
            opacity:1
          }
          20% {
            opacity:1
          }
          20.5% {
            opacity:1
          }
          21% {
            opacity:1
          }
          21.5% {
            opacity:1
          }
          22% {
            opacity:1
          }
          22.5% {
            opacity:1
          }
          23% {
            opacity:1
          }
          23.5% {
            opacity:1
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        @keyframes solid0 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:1
          }
          24.5% {
            opacity:1
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1
          }
          26% {
            opacity:1
          }
          26.5% {
            opacity:1
          }
          27% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          28% {
            opacity:1
          }
          28.5% {
            opacity:1
          }
          29% {
            opacity:1
          }
          29.5% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.5% {
            opacity:1
          }
          31% {
            opacity:1
          }
          31.5% {
            opacity:1
          }
          32% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          33% {
            opacity:1
          }
          33.5% {
            opacity:1
          }
          34% {
            opacity:1
          }
          34.5% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.5% {
            opacity:1
          }
          36% {
            opacity:1
          }
          36.5% {
            opacity:1
          }
          37% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1
          }
          38.5% {
            opacity:1
          }
          39% {
            opacity:1
          }
          39.5% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.5% {
            opacity:1
          }
          41% {
            opacity:1
          }
          41.5% {
            opacity:1
          }
          42% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          43% {
            opacity:1
          }
          43.5% {
            opacity:1
          }
          44% {
            opacity:1
          }
          44.5% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.5% {
            opacity:1
          }
          46% {
            opacity:1
          }
          46.5% {
            opacity:1
          }
          47% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          48% {
            opacity:1
          }
          48.5% {
            opacity:1
          }
          49% {
            opacity:1
          }
          49.5% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
          }
          51.5% {
            opacity:1
          }
          52% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          53% {
            opacity:1
          }
          53.5% {
            opacity:1
          }
          54% {
            opacity:1
          }
          54.5% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.5% {
            opacity:1
          }
          56% {
            opacity:1
          }
          56.5% {
            opacity:1
          }
          57% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          58% {
            opacity:1
          }
          58.5% {
            opacity:1
          }
          59% {
            opacity:1
          }
          59.5% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.5% {
            opacity:1
          }
          61% {
            opacity:1
          }
          61.5% {
            opacity:1
          }
          62% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1
          }
          63.5% {
            opacity:1
          }
          64% {
            opacity:1
          }
          64.5% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.5% {
            opacity:1
          }
          66% {
            opacity:1
          }
          66.5% {
            opacity:1
          }
          67% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          68% {
            opacity:1
          }
          68.5% {
            opacity:1
          }
          69% {
            opacity:1
          }
          69.5% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.5% {
            opacity:1
          }
          71% {
            opacity:1
          }
          71.5% {
            opacity:1
          }
          72% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          73% {
            opacity:1
          }
          73.5% {
            opacity:1
          }
          74% {
            opacity:1
          }
          74.5% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1
          }
          76% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          77% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          78% {
            opacity:1
          }
          78.5% {
            opacity:1
          }
          79% {
            opacity:1
          }
          79.5% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.5% {
            opacity:1
          }
          81% {
            opacity:1
          }
          81.5% {
            opacity:1
          }
          82% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          83% {
            opacity:1
          }
          83.5% {
            opacity:1
          }
          84% {
            opacity:1
          }
          84.5% {
            opacity:1
          }
          85% {
            opacity:1
          }
          85.5% {
            opacity:1
          }
          86% {
            opacity:1
          }
          86.5% {
            opacity:1
          }
          87% {
            opacity:1
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1
          }
          88.5% {
            opacity:1
          }
          89% {
            opacity:1
          }
          89.5% {
            opacity:1
          }
          90% {
            opacity:1
          }
          90.5% {
            opacity:1
          }
          91% {
            opacity:1
          }
          91.5% {
            opacity:1
          }
          92% {
            opacity:1
          }
          92.5% {
            opacity:1
          }
          93% {
            opacity:1
          }
          93.5% {
            opacity:1
          }
          94% {
            opacity:1
          }
          94.5% {
            opacity:1
          }
          95% {
            opacity:1
          }
          95.5% {
            opacity:1
          }
          96% {
            opacity:1
          }
          96.5% {
            opacity:1
          }
          97% {
            opacity:1
          }
          97.5% {
            opacity:1
          }
          98% {
            opacity:1
          }
          98.5% {
            opacity:1
          }
          99% {
            opacity:1
          }
          99.5% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .t1 {
          animation:t1 12s linear infinite
        }
        .t1 .liquid {
          animation:liquid1 12s steps(1,end) infinite
        }
        .t1 .solid-mark {
          animation:solid1 12s steps(1,end) infinite
        }
        @keyframes t1 {
          0% {
            transform:translate(65px,40.000px);
            opacity:0.000
          }
          0.5% {
            transform:translate(65px,40.600px);
            opacity:0.000
          }
          1% {
            transform:translate(65px,41.200px);
            opacity:0.067
          }
          1.5% {
            transform:translate(65px,41.800px);
            opacity:0.267
          }
          2% {
            transform:translate(65px,42.400px);
            opacity:0.467
          }
          2.5% {
            transform:translate(65px,43.000px);
            opacity:0.667
          }
          3% {
            transform:translate(65px,43.600px);
            opacity:0.867
          }
          3.5% {
            transform:translate(65px,44.200px);
            opacity:1.000
          }
          4% {
            transform:translate(65px,44.800px);
            opacity:1.000
          }
          4.5% {
            transform:translate(65px,45.400px);
            opacity:1.000
          }
          5% {
            transform:translate(65px,46.000px);
            opacity:1.000
          }
          5.5% {
            transform:translate(65px,46.600px);
            opacity:1.000
          }
          6% {
            transform:translate(65px,47.200px);
            opacity:1.000
          }
          6.5% {
            transform:translate(65px,47.800px);
            opacity:1.000
          }
          7% {
            transform:translate(65px,48.400px);
            opacity:1.000
          }
          7.5% {
            transform:translate(65px,49.000px);
            opacity:1.000
          }
          8% {
            transform:translate(65px,49.600px);
            opacity:1.000
          }
          8.5% {
            transform:translate(65px,50.200px);
            opacity:1.000
          }
          9% {
            transform:translate(65px,50.800px);
            opacity:1.000
          }
          9.5% {
            transform:translate(65px,51.400px);
            opacity:1.000
          }
          10% {
            transform:translate(65px,52.000px);
            opacity:1.000
          }
          10.5% {
            transform:translate(65px,52.600px);
            opacity:1.000
          }
          11% {
            transform:translate(65px,53.200px);
            opacity:1.000
          }
          11.5% {
            transform:translate(65px,53.800px);
            opacity:1.000
          }
          12% {
            transform:translate(65px,54.400px);
            opacity:1.000
          }
          12.5% {
            transform:translate(65px,55.000px);
            opacity:1.000
          }
          13% {
            transform:translate(65px,55.600px);
            opacity:1.000
          }
          13.5% {
            transform:translate(65px,56.200px);
            opacity:1.000
          }
          14% {
            transform:translate(65px,56.800px);
            opacity:1.000
          }
          14.5% {
            transform:translate(65px,57.400px);
            opacity:1.000
          }
          15% {
            transform:translate(65px,58.000px);
            opacity:1.000
          }
          15.5% {
            transform:translate(65px,58.600px);
            opacity:1.000
          }
          16% {
            transform:translate(65px,59.200px);
            opacity:1.000
          }
          16.5% {
            transform:translate(65px,59.800px);
            opacity:1.000
          }
          17% {
            transform:translate(65px,60.400px);
            opacity:1.000
          }
          17.5% {
            transform:translate(65px,61.000px);
            opacity:1.000
          }
          18% {
            transform:translate(65px,61.600px);
            opacity:1.000
          }
          18.5% {
            transform:translate(65px,62.200px);
            opacity:1.000
          }
          19% {
            transform:translate(65px,62.800px);
            opacity:1.000
          }
          19.5% {
            transform:translate(65px,63.400px);
            opacity:1.000
          }
          20% {
            transform:translate(65px,64.000px);
            opacity:1.000
          }
          20.5% {
            transform:translate(65px,64.600px);
            opacity:1.000
          }
          21% {
            transform:translate(65px,65.200px);
            opacity:1.000
          }
          21.5% {
            transform:translate(65px,65.800px);
            opacity:1.000
          }
          22% {
            transform:translate(65px,66.400px);
            opacity:1.000
          }
          22.5% {
            transform:translate(65px,67.000px);
            opacity:1.000
          }
          23% {
            transform:translate(65px,67.600px);
            opacity:1.000
          }
          23.5% {
            transform:translate(65px,68.200px);
            opacity:1.000
          }
          24% {
            transform:translate(65px,68.800px);
            opacity:1.000
          }
          24.5% {
            transform:translate(65px,69.400px);
            opacity:1.000
          }
          25% {
            transform:translate(65px,70.000px);
            opacity:1.000
          }
          25.5% {
            transform:translate(65px,70.600px);
            opacity:1.000
          }
          26% {
            transform:translate(65px,71.200px);
            opacity:1.000
          }
          26.5% {
            transform:translate(65px,71.800px);
            opacity:1.000
          }
          27% {
            transform:translate(65px,72.400px);
            opacity:1.000
          }
          27.5% {
            transform:translate(65px,73.000px);
            opacity:1.000
          }
          28% {
            transform:translate(65px,73.600px);
            opacity:1.000
          }
          28.5% {
            transform:translate(65px,74.200px);
            opacity:1.000
          }
          29% {
            transform:translate(65px,74.800px);
            opacity:1.000
          }
          29.5% {
            transform:translate(65px,75.400px);
            opacity:1.000
          }
          30% {
            transform:translate(65px,76.000px);
            opacity:1.000
          }
          30.5% {
            transform:translate(65px,76.600px);
            opacity:1.000
          }
          31% {
            transform:translate(65px,77.200px);
            opacity:1.000
          }
          31.5% {
            transform:translate(65px,77.800px);
            opacity:1.000
          }
          32% {
            transform:translate(65px,78.400px);
            opacity:1.000
          }
          32.5% {
            transform:translate(65px,79.000px);
            opacity:1.000
          }
          33% {
            transform:translate(65px,79.600px);
            opacity:1.000
          }
          33.5% {
            transform:translate(65px,80.200px);
            opacity:1.000
          }
          34% {
            transform:translate(65px,80.800px);
            opacity:1.000
          }
          34.5% {
            transform:translate(65px,81.400px);
            opacity:1.000
          }
          35% {
            transform:translate(65px,82.000px);
            opacity:1.000
          }
          35.5% {
            transform:translate(65px,82.600px);
            opacity:1.000
          }
          36% {
            transform:translate(65px,83.200px);
            opacity:1.000
          }
          36.5% {
            transform:translate(65px,83.800px);
            opacity:1.000
          }
          37% {
            transform:translate(65px,84.400px);
            opacity:1.000
          }
          37.5% {
            transform:translate(65px,85.000px);
            opacity:1.000
          }
          38% {
            transform:translate(65px,85.600px);
            opacity:1.000
          }
          38.5% {
            transform:translate(65px,86.200px);
            opacity:1.000
          }
          39% {
            transform:translate(65px,86.800px);
            opacity:1.000
          }
          39.5% {
            transform:translate(65px,87.400px);
            opacity:1.000
          }
          40% {
            transform:translate(65px,88.000px);
            opacity:1.000
          }
          40.5% {
            transform:translate(65px,88.600px);
            opacity:1.000
          }
          41% {
            transform:translate(65px,89.200px);
            opacity:1.000
          }
          41.5% {
            transform:translate(65px,89.800px);
            opacity:1.000
          }
          42% {
            transform:translate(65px,90.400px);
            opacity:1.000
          }
          42.5% {
            transform:translate(65px,91.000px);
            opacity:1.000
          }
          43% {
            transform:translate(65px,91.600px);
            opacity:1.000
          }
          43.5% {
            transform:translate(65px,92.200px);
            opacity:1.000
          }
          44% {
            transform:translate(65px,92.800px);
            opacity:1.000
          }
          44.5% {
            transform:translate(65px,93.400px);
            opacity:1.000
          }
          45% {
            transform:translate(65px,94.000px);
            opacity:1.000
          }
          45.5% {
            transform:translate(65px,94.600px);
            opacity:1.000
          }
          46% {
            transform:translate(65px,95.200px);
            opacity:1.000
          }
          46.5% {
            transform:translate(65px,95.800px);
            opacity:1.000
          }
          47% {
            transform:translate(65px,96.400px);
            opacity:1.000
          }
          47.5% {
            transform:translate(65px,97.000px);
            opacity:1.000
          }
          48% {
            transform:translate(65px,97.600px);
            opacity:1.000
          }
          48.5% {
            transform:translate(65px,98.200px);
            opacity:1.000
          }
          49% {
            transform:translate(65px,98.800px);
            opacity:1.000
          }
          49.5% {
            transform:translate(65px,99.400px);
            opacity:1.000
          }
          50% {
            transform:translate(65px,100.000px);
            opacity:1.000
          }
          50.5% {
            transform:translate(65px,100.600px);
            opacity:1.000
          }
          51% {
            transform:translate(65px,101.200px);
            opacity:1.000
          }
          51.5% {
            transform:translate(65px,101.800px);
            opacity:1.000
          }
          52% {
            transform:translate(65px,102.400px);
            opacity:1.000
          }
          52.5% {
            transform:translate(65px,103.000px);
            opacity:1.000
          }
          53% {
            transform:translate(65px,103.600px);
            opacity:1.000
          }
          53.5% {
            transform:translate(65px,104.200px);
            opacity:1.000
          }
          54% {
            transform:translate(65px,104.800px);
            opacity:1.000
          }
          54.5% {
            transform:translate(65px,105.400px);
            opacity:1.000
          }
          55% {
            transform:translate(65px,106.000px);
            opacity:1.000
          }
          55.5% {
            transform:translate(65px,106.600px);
            opacity:1.000
          }
          56% {
            transform:translate(65px,107.200px);
            opacity:1.000
          }
          56.5% {
            transform:translate(65px,107.800px);
            opacity:1.000
          }
          57% {
            transform:translate(65px,108.400px);
            opacity:1.000
          }
          57.5% {
            transform:translate(65px,109.000px);
            opacity:1.000
          }
          58% {
            transform:translate(65px,109.600px);
            opacity:1.000
          }
          58.5% {
            transform:translate(65px,110.200px);
            opacity:1.000
          }
          59% {
            transform:translate(65px,110.800px);
            opacity:1.000
          }
          59.5% {
            transform:translate(65px,111.400px);
            opacity:1.000
          }
          60% {
            transform:translate(65px,112.000px);
            opacity:1.000
          }
          60.5% {
            transform:translate(65px,112.600px);
            opacity:1.000
          }
          61% {
            transform:translate(65px,113.200px);
            opacity:1.000
          }
          61.5% {
            transform:translate(65px,113.800px);
            opacity:1.000
          }
          62% {
            transform:translate(65px,114.400px);
            opacity:1.000
          }
          62.5% {
            transform:translate(65px,115.000px);
            opacity:1.000
          }
          63% {
            transform:translate(65px,115.600px);
            opacity:1.000
          }
          63.5% {
            transform:translate(65px,116.200px);
            opacity:1.000
          }
          64% {
            transform:translate(65px,116.800px);
            opacity:1.000
          }
          64.5% {
            transform:translate(65px,117.400px);
            opacity:1.000
          }
          65% {
            transform:translate(65px,118.000px);
            opacity:1.000
          }
          65.5% {
            transform:translate(65px,118.600px);
            opacity:1.000
          }
          66% {
            transform:translate(65px,119.200px);
            opacity:1.000
          }
          66.5% {
            transform:translate(65px,119.800px);
            opacity:1.000
          }
          67% {
            transform:translate(65px,120.400px);
            opacity:1.000
          }
          67.5% {
            transform:translate(65px,121.000px);
            opacity:1.000
          }
          68% {
            transform:translate(65px,121.600px);
            opacity:1.000
          }
          68.5% {
            transform:translate(65px,122.200px);
            opacity:1.000
          }
          69% {
            transform:translate(65px,122.800px);
            opacity:1.000
          }
          69.5% {
            transform:translate(65px,123.400px);
            opacity:1.000
          }
          70% {
            transform:translate(65px,124.000px);
            opacity:1.000
          }
          70.5% {
            transform:translate(65px,124.600px);
            opacity:1.000
          }
          71% {
            transform:translate(65px,125.200px);
            opacity:1.000
          }
          71.5% {
            transform:translate(65px,125.800px);
            opacity:1.000
          }
          72% {
            transform:translate(65px,126.400px);
            opacity:1.000
          }
          72.5% {
            transform:translate(65px,127.000px);
            opacity:1.000
          }
          73% {
            transform:translate(65px,127.600px);
            opacity:1.000
          }
          73.5% {
            transform:translate(65px,128.200px);
            opacity:1.000
          }
          74% {
            transform:translate(65px,128.800px);
            opacity:1.000
          }
          74.5% {
            transform:translate(65px,129.400px);
            opacity:1.000
          }
          75% {
            transform:translate(65px,130.000px);
            opacity:1.000
          }
          75.5% {
            transform:translate(65px,130.600px);
            opacity:1.000
          }
          76% {
            transform:translate(65px,131.200px);
            opacity:0.933
          }
          76.5% {
            transform:translate(65px,131.800px);
            opacity:0.733
          }
          77% {
            transform:translate(65px,132.400px);
            opacity:0.533
          }
          77.5% {
            transform:translate(65px,133.000px);
            opacity:0.333
          }
          78% {
            transform:translate(65px,133.600px);
            opacity:0.133
          }
          78.5% {
            transform:translate(65px,134.200px);
            opacity:0.000
          }
          79% {
            transform:translate(65px,134.800px);
            opacity:0.000
          }
          79.5% {
            transform:translate(65px,135.400px);
            opacity:0.000
          }
          80% {
            transform:translate(65px,136.000px);
            opacity:0.000
          }
          80.5% {
            transform:translate(65px,136.600px);
            opacity:0.000
          }
          81% {
            transform:translate(65px,137.200px);
            opacity:0.000
          }
          81.5% {
            transform:translate(65px,137.800px);
            opacity:0.000
          }
          82% {
            transform:translate(65px,138.400px);
            opacity:0.000
          }
          82.5% {
            transform:translate(65px,139.000px);
            opacity:0.000
          }
          83% {
            transform:translate(65px,139.600px);
            opacity:0.000
          }
          83.5% {
            transform:translate(65px,20.200px);
            opacity:0.000
          }
          84% {
            transform:translate(65px,20.800px);
            opacity:0.000
          }
          84.5% {
            transform:translate(65px,21.400px);
            opacity:0.000
          }
          85% {
            transform:translate(65px,22.000px);
            opacity:0.000
          }
          85.5% {
            transform:translate(65px,22.600px);
            opacity:0.000
          }
          86% {
            transform:translate(65px,23.200px);
            opacity:0.000
          }
          86.5% {
            transform:translate(65px,23.800px);
            opacity:0.000
          }
          87% {
            transform:translate(65px,24.400px);
            opacity:0.000
          }
          87.5% {
            transform:translate(65px,25.000px);
            opacity:0.000
          }
          88% {
            transform:translate(65px,25.600px);
            opacity:0.000
          }
          88.5% {
            transform:translate(65px,26.200px);
            opacity:0.000
          }
          89% {
            transform:translate(65px,26.800px);
            opacity:0.000
          }
          89.5% {
            transform:translate(65px,27.400px);
            opacity:0.000
          }
          90% {
            transform:translate(65px,28.000px);
            opacity:0.000
          }
          90.5% {
            transform:translate(65px,28.600px);
            opacity:0.000
          }
          91% {
            transform:translate(65px,29.200px);
            opacity:0.000
          }
          91.5% {
            transform:translate(65px,29.800px);
            opacity:0.000
          }
          92% {
            transform:translate(65px,30.400px);
            opacity:0.000
          }
          92.5% {
            transform:translate(65px,31.000px);
            opacity:0.000
          }
          93% {
            transform:translate(65px,31.600px);
            opacity:0.000
          }
          93.5% {
            transform:translate(65px,32.200px);
            opacity:0.000
          }
          94% {
            transform:translate(65px,32.800px);
            opacity:0.000
          }
          94.5% {
            transform:translate(65px,33.400px);
            opacity:0.000
          }
          95% {
            transform:translate(65px,34.000px);
            opacity:0.000
          }
          95.5% {
            transform:translate(65px,34.600px);
            opacity:0.000
          }
          96% {
            transform:translate(65px,35.200px);
            opacity:0.000
          }
          96.5% {
            transform:translate(65px,35.800px);
            opacity:0.000
          }
          97% {
            transform:translate(65px,36.400px);
            opacity:0.000
          }
          97.5% {
            transform:translate(65px,37.000px);
            opacity:0.000
          }
          98% {
            transform:translate(65px,37.600px);
            opacity:0.000
          }
          98.5% {
            transform:translate(65px,38.200px);
            opacity:0.000
          }
          99% {
            transform:translate(65px,38.800px);
            opacity:0.000
          }
          99.5% {
            transform:translate(65px,39.400px);
            opacity:0.000
          }
          100% {
            transform:translate(65px,40.000px);
            opacity:0.000
          }
        }
        @keyframes liquid1 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1
          }
          1% {
            opacity:1
          }
          1.5% {
            opacity:1
          }
          2% {
            opacity:1
          }
          2.5% {
            opacity:1
          }
          3% {
            opacity:1
          }
          3.5% {
            opacity:1
          }
          4% {
            opacity:1
          }
          4.5% {
            opacity:1
          }
          5% {
            opacity:1
          }
          5.5% {
            opacity:1
          }
          6% {
            opacity:1
          }
          6.5% {
            opacity:1
          }
          7% {
            opacity:1
          }
          7.5% {
            opacity:1
          }
          8% {
            opacity:1
          }
          8.5% {
            opacity:1
          }
          9% {
            opacity:1
          }
          9.5% {
            opacity:1
          }
          10% {
            opacity:1
          }
          10.5% {
            opacity:1
          }
          11% {
            opacity:1
          }
          11.5% {
            opacity:1
          }
          12% {
            opacity:1
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1
          }
          13.5% {
            opacity:1
          }
          14% {
            opacity:1
          }
          14.5% {
            opacity:1
          }
          15% {
            opacity:1
          }
          15.5% {
            opacity:1
          }
          16% {
            opacity:1
          }
          16.5% {
            opacity:1
          }
          17% {
            opacity:1
          }
          17.5% {
            opacity:1
          }
          18% {
            opacity:1
          }
          18.5% {
            opacity:1
          }
          19% {
            opacity:1
          }
          19.5% {
            opacity:1
          }
          20% {
            opacity:1
          }
          20.5% {
            opacity:1
          }
          21% {
            opacity:1
          }
          21.5% {
            opacity:1
          }
          22% {
            opacity:1
          }
          22.5% {
            opacity:1
          }
          23% {
            opacity:1
          }
          23.5% {
            opacity:1
          }
          24% {
            opacity:1
          }
          24.5% {
            opacity:1
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:1
          }
          84% {
            opacity:1
          }
          84.5% {
            opacity:1
          }
          85% {
            opacity:1
          }
          85.5% {
            opacity:1
          }
          86% {
            opacity:1
          }
          86.5% {
            opacity:1
          }
          87% {
            opacity:1
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1
          }
          88.5% {
            opacity:1
          }
          89% {
            opacity:1
          }
          89.5% {
            opacity:1
          }
          90% {
            opacity:1
          }
          90.5% {
            opacity:1
          }
          91% {
            opacity:1
          }
          91.5% {
            opacity:1
          }
          92% {
            opacity:1
          }
          92.5% {
            opacity:1
          }
          93% {
            opacity:1
          }
          93.5% {
            opacity:1
          }
          94% {
            opacity:1
          }
          94.5% {
            opacity:1
          }
          95% {
            opacity:1
          }
          95.5% {
            opacity:1
          }
          96% {
            opacity:1
          }
          96.5% {
            opacity:1
          }
          97% {
            opacity:1
          }
          97.5% {
            opacity:1
          }
          98% {
            opacity:1
          }
          98.5% {
            opacity:1
          }
          99% {
            opacity:1
          }
          99.5% {
            opacity:1
          }
          100% {
            opacity:1
          }
        }
        @keyframes solid1 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:1
          }
          26.5% {
            opacity:1
          }
          27% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          28% {
            opacity:1
          }
          28.5% {
            opacity:1
          }
          29% {
            opacity:1
          }
          29.5% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.5% {
            opacity:1
          }
          31% {
            opacity:1
          }
          31.5% {
            opacity:1
          }
          32% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          33% {
            opacity:1
          }
          33.5% {
            opacity:1
          }
          34% {
            opacity:1
          }
          34.5% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.5% {
            opacity:1
          }
          36% {
            opacity:1
          }
          36.5% {
            opacity:1
          }
          37% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1
          }
          38.5% {
            opacity:1
          }
          39% {
            opacity:1
          }
          39.5% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.5% {
            opacity:1
          }
          41% {
            opacity:1
          }
          41.5% {
            opacity:1
          }
          42% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          43% {
            opacity:1
          }
          43.5% {
            opacity:1
          }
          44% {
            opacity:1
          }
          44.5% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.5% {
            opacity:1
          }
          46% {
            opacity:1
          }
          46.5% {
            opacity:1
          }
          47% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          48% {
            opacity:1
          }
          48.5% {
            opacity:1
          }
          49% {
            opacity:1
          }
          49.5% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
          }
          51.5% {
            opacity:1
          }
          52% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          53% {
            opacity:1
          }
          53.5% {
            opacity:1
          }
          54% {
            opacity:1
          }
          54.5% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.5% {
            opacity:1
          }
          56% {
            opacity:1
          }
          56.5% {
            opacity:1
          }
          57% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          58% {
            opacity:1
          }
          58.5% {
            opacity:1
          }
          59% {
            opacity:1
          }
          59.5% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.5% {
            opacity:1
          }
          61% {
            opacity:1
          }
          61.5% {
            opacity:1
          }
          62% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1
          }
          63.5% {
            opacity:1
          }
          64% {
            opacity:1
          }
          64.5% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.5% {
            opacity:1
          }
          66% {
            opacity:1
          }
          66.5% {
            opacity:1
          }
          67% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          68% {
            opacity:1
          }
          68.5% {
            opacity:1
          }
          69% {
            opacity:1
          }
          69.5% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.5% {
            opacity:1
          }
          71% {
            opacity:1
          }
          71.5% {
            opacity:1
          }
          72% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          73% {
            opacity:1
          }
          73.5% {
            opacity:1
          }
          74% {
            opacity:1
          }
          74.5% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1
          }
          76% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          77% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          78% {
            opacity:1
          }
          78.5% {
            opacity:1
          }
          79% {
            opacity:1
          }
          79.5% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.5% {
            opacity:1
          }
          81% {
            opacity:1
          }
          81.5% {
            opacity:1
          }
          82% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          83% {
            opacity:1
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .t2 {
          animation:t2 12s linear infinite
        }
        .t2 .liquid {
          animation:liquid2 12s steps(1,end) infinite
        }
        .t2 .solid-mark {
          animation:solid2 12s steps(1,end) infinite
        }
        @keyframes t2 {
          0% {
            transform:translate(70px,60.000px);
            opacity:1.000
          }
          0.5% {
            transform:translate(70px,60.600px);
            opacity:1.000
          }
          1% {
            transform:translate(70px,61.200px);
            opacity:1.000
          }
          1.5% {
            transform:translate(70px,61.800px);
            opacity:1.000
          }
          2% {
            transform:translate(70px,62.400px);
            opacity:1.000
          }
          2.5% {
            transform:translate(70px,63.000px);
            opacity:1.000
          }
          3% {
            transform:translate(70px,63.600px);
            opacity:1.000
          }
          3.5% {
            transform:translate(70px,64.200px);
            opacity:1.000
          }
          4% {
            transform:translate(70px,64.800px);
            opacity:1.000
          }
          4.5% {
            transform:translate(70px,65.400px);
            opacity:1.000
          }
          5% {
            transform:translate(70px,66.000px);
            opacity:1.000
          }
          5.5% {
            transform:translate(70px,66.600px);
            opacity:1.000
          }
          6% {
            transform:translate(70px,67.200px);
            opacity:1.000
          }
          6.5% {
            transform:translate(70px,67.800px);
            opacity:1.000
          }
          7% {
            transform:translate(70px,68.400px);
            opacity:1.000
          }
          7.5% {
            transform:translate(70px,69.000px);
            opacity:1.000
          }
          8% {
            transform:translate(70px,69.600px);
            opacity:1.000
          }
          8.5% {
            transform:translate(70px,70.200px);
            opacity:1.000
          }
          9% {
            transform:translate(70px,70.800px);
            opacity:1.000
          }
          9.5% {
            transform:translate(70px,71.400px);
            opacity:1.000
          }
          10% {
            transform:translate(70px,72.000px);
            opacity:1.000
          }
          10.5% {
            transform:translate(70px,72.600px);
            opacity:1.000
          }
          11% {
            transform:translate(70px,73.200px);
            opacity:1.000
          }
          11.5% {
            transform:translate(70px,73.800px);
            opacity:1.000
          }
          12% {
            transform:translate(70px,74.400px);
            opacity:1.000
          }
          12.5% {
            transform:translate(70px,75.000px);
            opacity:1.000
          }
          13% {
            transform:translate(70px,75.600px);
            opacity:1.000
          }
          13.5% {
            transform:translate(70px,76.200px);
            opacity:1.000
          }
          14% {
            transform:translate(70px,76.800px);
            opacity:1.000
          }
          14.5% {
            transform:translate(70px,77.400px);
            opacity:1.000
          }
          15% {
            transform:translate(70px,78.000px);
            opacity:1.000
          }
          15.5% {
            transform:translate(70px,78.600px);
            opacity:1.000
          }
          16% {
            transform:translate(70px,79.200px);
            opacity:1.000
          }
          16.5% {
            transform:translate(70px,79.800px);
            opacity:1.000
          }
          17% {
            transform:translate(70px,80.400px);
            opacity:1.000
          }
          17.5% {
            transform:translate(70px,81.000px);
            opacity:1.000
          }
          18% {
            transform:translate(70px,81.600px);
            opacity:1.000
          }
          18.5% {
            transform:translate(70px,82.200px);
            opacity:1.000
          }
          19% {
            transform:translate(70px,82.800px);
            opacity:1.000
          }
          19.5% {
            transform:translate(70px,83.400px);
            opacity:1.000
          }
          20% {
            transform:translate(70px,84.000px);
            opacity:1.000
          }
          20.5% {
            transform:translate(70px,84.600px);
            opacity:1.000
          }
          21% {
            transform:translate(70px,85.200px);
            opacity:1.000
          }
          21.5% {
            transform:translate(70px,85.800px);
            opacity:1.000
          }
          22% {
            transform:translate(70px,86.400px);
            opacity:1.000
          }
          22.5% {
            transform:translate(70px,87.000px);
            opacity:1.000
          }
          23% {
            transform:translate(70px,87.600px);
            opacity:1.000
          }
          23.5% {
            transform:translate(70px,88.200px);
            opacity:1.000
          }
          24% {
            transform:translate(70px,88.800px);
            opacity:1.000
          }
          24.5% {
            transform:translate(70px,89.400px);
            opacity:1.000
          }
          25% {
            transform:translate(70px,90.000px);
            opacity:1.000
          }
          25.5% {
            transform:translate(70px,90.600px);
            opacity:1.000
          }
          26% {
            transform:translate(70px,91.200px);
            opacity:1.000
          }
          26.5% {
            transform:translate(70px,91.800px);
            opacity:1.000
          }
          27% {
            transform:translate(70px,92.400px);
            opacity:1.000
          }
          27.5% {
            transform:translate(70px,93.000px);
            opacity:1.000
          }
          28% {
            transform:translate(70px,93.600px);
            opacity:1.000
          }
          28.5% {
            transform:translate(70px,94.200px);
            opacity:1.000
          }
          29% {
            transform:translate(70px,94.800px);
            opacity:1.000
          }
          29.5% {
            transform:translate(70px,95.400px);
            opacity:1.000
          }
          30% {
            transform:translate(70px,96.000px);
            opacity:1.000
          }
          30.5% {
            transform:translate(70px,96.600px);
            opacity:1.000
          }
          31% {
            transform:translate(70px,97.200px);
            opacity:1.000
          }
          31.5% {
            transform:translate(70px,97.800px);
            opacity:1.000
          }
          32% {
            transform:translate(70px,98.400px);
            opacity:1.000
          }
          32.5% {
            transform:translate(70px,99.000px);
            opacity:1.000
          }
          33% {
            transform:translate(70px,99.600px);
            opacity:1.000
          }
          33.5% {
            transform:translate(70px,100.200px);
            opacity:1.000
          }
          34% {
            transform:translate(70px,100.800px);
            opacity:1.000
          }
          34.5% {
            transform:translate(70px,101.400px);
            opacity:1.000
          }
          35% {
            transform:translate(70px,102.000px);
            opacity:1.000
          }
          35.5% {
            transform:translate(70px,102.600px);
            opacity:1.000
          }
          36% {
            transform:translate(70px,103.200px);
            opacity:1.000
          }
          36.5% {
            transform:translate(70px,103.800px);
            opacity:1.000
          }
          37% {
            transform:translate(70px,104.400px);
            opacity:1.000
          }
          37.5% {
            transform:translate(70px,105.000px);
            opacity:1.000
          }
          38% {
            transform:translate(70px,105.600px);
            opacity:1.000
          }
          38.5% {
            transform:translate(70px,106.200px);
            opacity:1.000
          }
          39% {
            transform:translate(70px,106.800px);
            opacity:1.000
          }
          39.5% {
            transform:translate(70px,107.400px);
            opacity:1.000
          }
          40% {
            transform:translate(70px,108.000px);
            opacity:1.000
          }
          40.5% {
            transform:translate(70px,108.600px);
            opacity:1.000
          }
          41% {
            transform:translate(70px,109.200px);
            opacity:1.000
          }
          41.5% {
            transform:translate(70px,109.800px);
            opacity:1.000
          }
          42% {
            transform:translate(70px,110.400px);
            opacity:1.000
          }
          42.5% {
            transform:translate(70px,111.000px);
            opacity:1.000
          }
          43% {
            transform:translate(70px,111.600px);
            opacity:1.000
          }
          43.5% {
            transform:translate(70px,112.200px);
            opacity:1.000
          }
          44% {
            transform:translate(70px,112.800px);
            opacity:1.000
          }
          44.5% {
            transform:translate(70px,113.400px);
            opacity:1.000
          }
          45% {
            transform:translate(70px,114.000px);
            opacity:1.000
          }
          45.5% {
            transform:translate(70px,114.600px);
            opacity:1.000
          }
          46% {
            transform:translate(70px,115.200px);
            opacity:1.000
          }
          46.5% {
            transform:translate(70px,115.800px);
            opacity:1.000
          }
          47% {
            transform:translate(70px,116.400px);
            opacity:1.000
          }
          47.5% {
            transform:translate(70px,117.000px);
            opacity:1.000
          }
          48% {
            transform:translate(70px,117.600px);
            opacity:1.000
          }
          48.5% {
            transform:translate(70px,118.200px);
            opacity:1.000
          }
          49% {
            transform:translate(70px,118.800px);
            opacity:1.000
          }
          49.5% {
            transform:translate(70px,119.400px);
            opacity:1.000
          }
          50% {
            transform:translate(70px,120.000px);
            opacity:1.000
          }
          50.5% {
            transform:translate(70px,120.600px);
            opacity:1.000
          }
          51% {
            transform:translate(70px,121.200px);
            opacity:1.000
          }
          51.5% {
            transform:translate(70px,121.800px);
            opacity:1.000
          }
          52% {
            transform:translate(70px,122.400px);
            opacity:1.000
          }
          52.5% {
            transform:translate(70px,123.000px);
            opacity:1.000
          }
          53% {
            transform:translate(70px,123.600px);
            opacity:1.000
          }
          53.5% {
            transform:translate(70px,124.200px);
            opacity:1.000
          }
          54% {
            transform:translate(70px,124.800px);
            opacity:1.000
          }
          54.5% {
            transform:translate(70px,125.400px);
            opacity:1.000
          }
          55% {
            transform:translate(70px,126.000px);
            opacity:1.000
          }
          55.5% {
            transform:translate(70px,126.600px);
            opacity:1.000
          }
          56% {
            transform:translate(70px,127.200px);
            opacity:1.000
          }
          56.5% {
            transform:translate(70px,127.800px);
            opacity:1.000
          }
          57% {
            transform:translate(70px,128.400px);
            opacity:1.000
          }
          57.5% {
            transform:translate(70px,129.000px);
            opacity:1.000
          }
          58% {
            transform:translate(70px,129.600px);
            opacity:1.000
          }
          58.5% {
            transform:translate(70px,130.200px);
            opacity:1.000
          }
          59% {
            transform:translate(70px,130.800px);
            opacity:1.000
          }
          59.5% {
            transform:translate(70px,131.400px);
            opacity:0.867
          }
          60% {
            transform:translate(70px,132.000px);
            opacity:0.667
          }
          60.5% {
            transform:translate(70px,132.600px);
            opacity:0.467
          }
          61% {
            transform:translate(70px,133.200px);
            opacity:0.267
          }
          61.5% {
            transform:translate(70px,133.800px);
            opacity:0.067
          }
          62% {
            transform:translate(70px,134.400px);
            opacity:0.000
          }
          62.5% {
            transform:translate(70px,135.000px);
            opacity:0.000
          }
          63% {
            transform:translate(70px,135.600px);
            opacity:0.000
          }
          63.5% {
            transform:translate(70px,136.200px);
            opacity:0.000
          }
          64% {
            transform:translate(70px,136.800px);
            opacity:0.000
          }
          64.5% {
            transform:translate(70px,137.400px);
            opacity:0.000
          }
          65% {
            transform:translate(70px,138.000px);
            opacity:0.000
          }
          65.5% {
            transform:translate(70px,138.600px);
            opacity:0.000
          }
          66% {
            transform:translate(70px,139.200px);
            opacity:0.000
          }
          66.5% {
            transform:translate(70px,139.800px);
            opacity:0.000
          }
          67% {
            transform:translate(70px,20.400px);
            opacity:0.000
          }
          67.5% {
            transform:translate(70px,21.000px);
            opacity:0.000
          }
          68% {
            transform:translate(70px,21.600px);
            opacity:0.000
          }
          68.5% {
            transform:translate(70px,22.200px);
            opacity:0.000
          }
          69% {
            transform:translate(70px,22.800px);
            opacity:0.000
          }
          69.5% {
            transform:translate(70px,23.400px);
            opacity:0.000
          }
          70% {
            transform:translate(70px,24.000px);
            opacity:0.000
          }
          70.5% {
            transform:translate(70px,24.600px);
            opacity:0.000
          }
          71% {
            transform:translate(70px,25.200px);
            opacity:0.000
          }
          71.5% {
            transform:translate(70px,25.800px);
            opacity:0.000
          }
          72% {
            transform:translate(70px,26.400px);
            opacity:0.000
          }
          72.5% {
            transform:translate(70px,27.000px);
            opacity:0.000
          }
          73% {
            transform:translate(70px,27.600px);
            opacity:0.000
          }
          73.5% {
            transform:translate(70px,28.200px);
            opacity:0.000
          }
          74% {
            transform:translate(70px,28.800px);
            opacity:0.000
          }
          74.5% {
            transform:translate(70px,29.400px);
            opacity:0.000
          }
          75% {
            transform:translate(70px,30.000px);
            opacity:0.000
          }
          75.5% {
            transform:translate(70px,30.600px);
            opacity:0.000
          }
          76% {
            transform:translate(70px,31.200px);
            opacity:0.000
          }
          76.5% {
            transform:translate(70px,31.800px);
            opacity:0.000
          }
          77% {
            transform:translate(70px,32.400px);
            opacity:0.000
          }
          77.5% {
            transform:translate(70px,33.000px);
            opacity:0.000
          }
          78% {
            transform:translate(70px,33.600px);
            opacity:0.000
          }
          78.5% {
            transform:translate(70px,34.200px);
            opacity:0.000
          }
          79% {
            transform:translate(70px,34.800px);
            opacity:0.000
          }
          79.5% {
            transform:translate(70px,35.400px);
            opacity:0.000
          }
          80% {
            transform:translate(70px,36.000px);
            opacity:0.000
          }
          80.5% {
            transform:translate(70px,36.600px);
            opacity:0.000
          }
          81% {
            transform:translate(70px,37.200px);
            opacity:0.000
          }
          81.5% {
            transform:translate(70px,37.800px);
            opacity:0.000
          }
          82% {
            transform:translate(70px,38.400px);
            opacity:0.000
          }
          82.5% {
            transform:translate(70px,39.000px);
            opacity:0.000
          }
          83% {
            transform:translate(70px,39.600px);
            opacity:0.000
          }
          83.5% {
            transform:translate(70px,40.200px);
            opacity:0.000
          }
          84% {
            transform:translate(70px,40.800px);
            opacity:0.000
          }
          84.5% {
            transform:translate(70px,41.400px);
            opacity:0.133
          }
          85% {
            transform:translate(70px,42.000px);
            opacity:0.333
          }
          85.5% {
            transform:translate(70px,42.600px);
            opacity:0.533
          }
          86% {
            transform:translate(70px,43.200px);
            opacity:0.733
          }
          86.5% {
            transform:translate(70px,43.800px);
            opacity:0.933
          }
          87% {
            transform:translate(70px,44.400px);
            opacity:1.000
          }
          87.5% {
            transform:translate(70px,45.000px);
            opacity:1.000
          }
          88% {
            transform:translate(70px,45.600px);
            opacity:1.000
          }
          88.5% {
            transform:translate(70px,46.200px);
            opacity:1.000
          }
          89% {
            transform:translate(70px,46.800px);
            opacity:1.000
          }
          89.5% {
            transform:translate(70px,47.400px);
            opacity:1.000
          }
          90% {
            transform:translate(70px,48.000px);
            opacity:1.000
          }
          90.5% {
            transform:translate(70px,48.600px);
            opacity:1.000
          }
          91% {
            transform:translate(70px,49.200px);
            opacity:1.000
          }
          91.5% {
            transform:translate(70px,49.800px);
            opacity:1.000
          }
          92% {
            transform:translate(70px,50.400px);
            opacity:1.000
          }
          92.5% {
            transform:translate(70px,51.000px);
            opacity:1.000
          }
          93% {
            transform:translate(70px,51.600px);
            opacity:1.000
          }
          93.5% {
            transform:translate(70px,52.200px);
            opacity:1.000
          }
          94% {
            transform:translate(70px,52.800px);
            opacity:1.000
          }
          94.5% {
            transform:translate(70px,53.400px);
            opacity:1.000
          }
          95% {
            transform:translate(70px,54.000px);
            opacity:1.000
          }
          95.5% {
            transform:translate(70px,54.600px);
            opacity:1.000
          }
          96% {
            transform:translate(70px,55.200px);
            opacity:1.000
          }
          96.5% {
            transform:translate(70px,55.800px);
            opacity:1.000
          }
          97% {
            transform:translate(70px,56.400px);
            opacity:1.000
          }
          97.5% {
            transform:translate(70px,57.000px);
            opacity:1.000
          }
          98% {
            transform:translate(70px,57.600px);
            opacity:1.000
          }
          98.5% {
            transform:translate(70px,58.200px);
            opacity:1.000
          }
          99% {
            transform:translate(70px,58.800px);
            opacity:1.000
          }
          99.5% {
            transform:translate(70px,59.400px);
            opacity:1.000
          }
          100% {
            transform:translate(70px,60.000px);
            opacity:1.000
          }
        }
        @keyframes liquid2 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1
          }
          1% {
            opacity:1
          }
          1.5% {
            opacity:1
          }
          2% {
            opacity:1
          }
          2.5% {
            opacity:1
          }
          3% {
            opacity:1
          }
          3.5% {
            opacity:1
          }
          4% {
            opacity:1
          }
          4.5% {
            opacity:1
          }
          5% {
            opacity:1
          }
          5.5% {
            opacity:1
          }
          6% {
            opacity:1
          }
          6.5% {
            opacity:1
          }
          7% {
            opacity:1
          }
          7.5% {
            opacity:1
          }
          8% {
            opacity:1
          }
          8.5% {
            opacity:1
          }
          9% {
            opacity:1
          }
          9.5% {
            opacity:1
          }
          10% {
            opacity:1
          }
          10.5% {
            opacity:1
          }
          11% {
            opacity:1
          }
          11.5% {
            opacity:1
          }
          12% {
            opacity:1
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1
          }
          13.5% {
            opacity:1
          }
          14% {
            opacity:1
          }
          14.5% {
            opacity:1
          }
          15% {
            opacity:1
          }
          15.5% {
            opacity:1
          }
          16% {
            opacity:1
          }
          16.5% {
            opacity:1
          }
          17% {
            opacity:1
          }
          17.5% {
            opacity:1
          }
          18% {
            opacity:1
          }
          18.5% {
            opacity:1
          }
          19% {
            opacity:1
          }
          19.5% {
            opacity:1
          }
          20% {
            opacity:1
          }
          20.5% {
            opacity:1
          }
          21% {
            opacity:1
          }
          21.5% {
            opacity:1
          }
          22% {
            opacity:1
          }
          22.5% {
            opacity:1
          }
          23% {
            opacity:1
          }
          23.5% {
            opacity:1
          }
          24% {
            opacity:1
          }
          24.5% {
            opacity:1
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1
          }
          26% {
            opacity:1
          }
          26.5% {
            opacity:1
          }
          27% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          28% {
            opacity:1
          }
          28.5% {
            opacity:1
          }
          29% {
            opacity:1
          }
          29.5% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.5% {
            opacity:1
          }
          31% {
            opacity:1
          }
          31.5% {
            opacity:1
          }
          32% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          33% {
            opacity:1
          }
          33.5% {
            opacity:1
          }
          34% {
            opacity:1
          }
          34.5% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.5% {
            opacity:1
          }
          36% {
            opacity:1
          }
          36.5% {
            opacity:1
          }
          37% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1
          }
          38.5% {
            opacity:1
          }
          39% {
            opacity:1
          }
          39.5% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.5% {
            opacity:1
          }
          41% {
            opacity:1
          }
          41.5% {
            opacity:1
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          68% {
            opacity:1
          }
          68.5% {
            opacity:1
          }
          69% {
            opacity:1
          }
          69.5% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.5% {
            opacity:1
          }
          71% {
            opacity:1
          }
          71.5% {
            opacity:1
          }
          72% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          73% {
            opacity:1
          }
          73.5% {
            opacity:1
          }
          74% {
            opacity:1
          }
          74.5% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1
          }
          76% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          77% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          78% {
            opacity:1
          }
          78.5% {
            opacity:1
          }
          79% {
            opacity:1
          }
          79.5% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.5% {
            opacity:1
          }
          81% {
            opacity:1
          }
          81.5% {
            opacity:1
          }
          82% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          83% {
            opacity:1
          }
          83.5% {
            opacity:1
          }
          84% {
            opacity:1
          }
          84.5% {
            opacity:1
          }
          85% {
            opacity:1
          }
          85.5% {
            opacity:1
          }
          86% {
            opacity:1
          }
          86.5% {
            opacity:1
          }
          87% {
            opacity:1
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1
          }
          88.5% {
            opacity:1
          }
          89% {
            opacity:1
          }
          89.5% {
            opacity:1
          }
          90% {
            opacity:1
          }
          90.5% {
            opacity:1
          }
          91% {
            opacity:1
          }
          91.5% {
            opacity:1
          }
          92% {
            opacity:1
          }
          92.5% {
            opacity:1
          }
          93% {
            opacity:1
          }
          93.5% {
            opacity:1
          }
          94% {
            opacity:1
          }
          94.5% {
            opacity:1
          }
          95% {
            opacity:1
          }
          95.5% {
            opacity:1
          }
          96% {
            opacity:1
          }
          96.5% {
            opacity:1
          }
          97% {
            opacity:1
          }
          97.5% {
            opacity:1
          }
          98% {
            opacity:1
          }
          98.5% {
            opacity:1
          }
          99% {
            opacity:1
          }
          99.5% {
            opacity:1
          }
          100% {
            opacity:1
          }
        }
        @keyframes solid2 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          43% {
            opacity:1
          }
          43.5% {
            opacity:1
          }
          44% {
            opacity:1
          }
          44.5% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.5% {
            opacity:1
          }
          46% {
            opacity:1
          }
          46.5% {
            opacity:1
          }
          47% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          48% {
            opacity:1
          }
          48.5% {
            opacity:1
          }
          49% {
            opacity:1
          }
          49.5% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
          }
          51.5% {
            opacity:1
          }
          52% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          53% {
            opacity:1
          }
          53.5% {
            opacity:1
          }
          54% {
            opacity:1
          }
          54.5% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.5% {
            opacity:1
          }
          56% {
            opacity:1
          }
          56.5% {
            opacity:1
          }
          57% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          58% {
            opacity:1
          }
          58.5% {
            opacity:1
          }
          59% {
            opacity:1
          }
          59.5% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.5% {
            opacity:1
          }
          61% {
            opacity:1
          }
          61.5% {
            opacity:1
          }
          62% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1
          }
          63.5% {
            opacity:1
          }
          64% {
            opacity:1
          }
          64.5% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.5% {
            opacity:1
          }
          66% {
            opacity:1
          }
          66.5% {
            opacity:1
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .t3 {
          animation:t3 12s linear infinite
        }
        .t3 .liquid {
          animation:liquid3 12s steps(1,end) infinite
        }
        .t3 .solid-mark {
          animation:solid3 12s steps(1,end) infinite
        }
        @keyframes t3 {
          0% {
            transform:translate(75px,80.000px);
            opacity:1.000
          }
          0.5% {
            transform:translate(75px,80.600px);
            opacity:1.000
          }
          1% {
            transform:translate(75px,81.200px);
            opacity:1.000
          }
          1.5% {
            transform:translate(75px,81.800px);
            opacity:1.000
          }
          2% {
            transform:translate(75px,82.400px);
            opacity:1.000
          }
          2.5% {
            transform:translate(75px,83.000px);
            opacity:1.000
          }
          3% {
            transform:translate(75px,83.600px);
            opacity:1.000
          }
          3.5% {
            transform:translate(75px,84.200px);
            opacity:1.000
          }
          4% {
            transform:translate(75px,84.800px);
            opacity:1.000
          }
          4.5% {
            transform:translate(75px,85.400px);
            opacity:1.000
          }
          5% {
            transform:translate(75px,86.000px);
            opacity:1.000
          }
          5.5% {
            transform:translate(75px,86.600px);
            opacity:1.000
          }
          6% {
            transform:translate(75px,87.200px);
            opacity:1.000
          }
          6.5% {
            transform:translate(75px,87.800px);
            opacity:1.000
          }
          7% {
            transform:translate(75px,88.400px);
            opacity:1.000
          }
          7.5% {
            transform:translate(75px,89.000px);
            opacity:1.000
          }
          8% {
            transform:translate(75px,89.600px);
            opacity:1.000
          }
          8.5% {
            transform:translate(75px,90.200px);
            opacity:1.000
          }
          9% {
            transform:translate(75px,90.800px);
            opacity:1.000
          }
          9.5% {
            transform:translate(75px,91.400px);
            opacity:1.000
          }
          10% {
            transform:translate(75px,92.000px);
            opacity:1.000
          }
          10.5% {
            transform:translate(75px,92.600px);
            opacity:1.000
          }
          11% {
            transform:translate(75px,93.200px);
            opacity:1.000
          }
          11.5% {
            transform:translate(75px,93.800px);
            opacity:1.000
          }
          12% {
            transform:translate(75px,94.400px);
            opacity:1.000
          }
          12.5% {
            transform:translate(75px,95.000px);
            opacity:1.000
          }
          13% {
            transform:translate(75px,95.600px);
            opacity:1.000
          }
          13.5% {
            transform:translate(75px,96.200px);
            opacity:1.000
          }
          14% {
            transform:translate(75px,96.800px);
            opacity:1.000
          }
          14.5% {
            transform:translate(75px,97.400px);
            opacity:1.000
          }
          15% {
            transform:translate(75px,98.000px);
            opacity:1.000
          }
          15.5% {
            transform:translate(75px,98.600px);
            opacity:1.000
          }
          16% {
            transform:translate(75px,99.200px);
            opacity:1.000
          }
          16.5% {
            transform:translate(75px,99.800px);
            opacity:1.000
          }
          17% {
            transform:translate(75px,100.400px);
            opacity:1.000
          }
          17.5% {
            transform:translate(75px,101.000px);
            opacity:1.000
          }
          18% {
            transform:translate(75px,101.600px);
            opacity:1.000
          }
          18.5% {
            transform:translate(75px,102.200px);
            opacity:1.000
          }
          19% {
            transform:translate(75px,102.800px);
            opacity:1.000
          }
          19.5% {
            transform:translate(75px,103.400px);
            opacity:1.000
          }
          20% {
            transform:translate(75px,104.000px);
            opacity:1.000
          }
          20.5% {
            transform:translate(75px,104.600px);
            opacity:1.000
          }
          21% {
            transform:translate(75px,105.200px);
            opacity:1.000
          }
          21.5% {
            transform:translate(75px,105.800px);
            opacity:1.000
          }
          22% {
            transform:translate(75px,106.400px);
            opacity:1.000
          }
          22.5% {
            transform:translate(75px,107.000px);
            opacity:1.000
          }
          23% {
            transform:translate(75px,107.600px);
            opacity:1.000
          }
          23.5% {
            transform:translate(75px,108.200px);
            opacity:1.000
          }
          24% {
            transform:translate(75px,108.800px);
            opacity:1.000
          }
          24.5% {
            transform:translate(75px,109.400px);
            opacity:1.000
          }
          25% {
            transform:translate(75px,110.000px);
            opacity:1.000
          }
          25.5% {
            transform:translate(75px,110.600px);
            opacity:1.000
          }
          26% {
            transform:translate(75px,111.200px);
            opacity:1.000
          }
          26.5% {
            transform:translate(75px,111.800px);
            opacity:1.000
          }
          27% {
            transform:translate(75px,112.400px);
            opacity:1.000
          }
          27.5% {
            transform:translate(75px,113.000px);
            opacity:1.000
          }
          28% {
            transform:translate(75px,113.600px);
            opacity:1.000
          }
          28.5% {
            transform:translate(75px,114.200px);
            opacity:1.000
          }
          29% {
            transform:translate(75px,114.800px);
            opacity:1.000
          }
          29.5% {
            transform:translate(75px,115.400px);
            opacity:1.000
          }
          30% {
            transform:translate(75px,116.000px);
            opacity:1.000
          }
          30.5% {
            transform:translate(75px,116.600px);
            opacity:1.000
          }
          31% {
            transform:translate(75px,117.200px);
            opacity:1.000
          }
          31.5% {
            transform:translate(75px,117.800px);
            opacity:1.000
          }
          32% {
            transform:translate(75px,118.400px);
            opacity:1.000
          }
          32.5% {
            transform:translate(75px,119.000px);
            opacity:1.000
          }
          33% {
            transform:translate(75px,119.600px);
            opacity:1.000
          }
          33.5% {
            transform:translate(75px,120.200px);
            opacity:1.000
          }
          34% {
            transform:translate(75px,120.800px);
            opacity:1.000
          }
          34.5% {
            transform:translate(75px,121.400px);
            opacity:1.000
          }
          35% {
            transform:translate(75px,122.000px);
            opacity:1.000
          }
          35.5% {
            transform:translate(75px,122.600px);
            opacity:1.000
          }
          36% {
            transform:translate(75px,123.200px);
            opacity:1.000
          }
          36.5% {
            transform:translate(75px,123.800px);
            opacity:1.000
          }
          37% {
            transform:translate(75px,124.400px);
            opacity:1.000
          }
          37.5% {
            transform:translate(75px,125.000px);
            opacity:1.000
          }
          38% {
            transform:translate(75px,125.600px);
            opacity:1.000
          }
          38.5% {
            transform:translate(75px,126.200px);
            opacity:1.000
          }
          39% {
            transform:translate(75px,126.800px);
            opacity:1.000
          }
          39.5% {
            transform:translate(75px,127.400px);
            opacity:1.000
          }
          40% {
            transform:translate(75px,128.000px);
            opacity:1.000
          }
          40.5% {
            transform:translate(75px,128.600px);
            opacity:1.000
          }
          41% {
            transform:translate(75px,129.200px);
            opacity:1.000
          }
          41.5% {
            transform:translate(75px,129.800px);
            opacity:1.000
          }
          42% {
            transform:translate(75px,130.400px);
            opacity:1.000
          }
          42.5% {
            transform:translate(75px,131.000px);
            opacity:1.000
          }
          43% {
            transform:translate(75px,131.600px);
            opacity:0.800
          }
          43.5% {
            transform:translate(75px,132.200px);
            opacity:0.600
          }
          44% {
            transform:translate(75px,132.800px);
            opacity:0.400
          }
          44.5% {
            transform:translate(75px,133.400px);
            opacity:0.200
          }
          45% {
            transform:translate(75px,134.000px);
            opacity:0.000
          }
          45.5% {
            transform:translate(75px,134.600px);
            opacity:0.000
          }
          46% {
            transform:translate(75px,135.200px);
            opacity:0.000
          }
          46.5% {
            transform:translate(75px,135.800px);
            opacity:0.000
          }
          47% {
            transform:translate(75px,136.400px);
            opacity:0.000
          }
          47.5% {
            transform:translate(75px,137.000px);
            opacity:0.000
          }
          48% {
            transform:translate(75px,137.600px);
            opacity:0.000
          }
          48.5% {
            transform:translate(75px,138.200px);
            opacity:0.000
          }
          49% {
            transform:translate(75px,138.800px);
            opacity:0.000
          }
          49.5% {
            transform:translate(75px,139.400px);
            opacity:0.000
          }
          50% {
            transform:translate(75px,20.000px);
            opacity:0.000
          }
          50.5% {
            transform:translate(75px,20.600px);
            opacity:0.000
          }
          51% {
            transform:translate(75px,21.200px);
            opacity:0.000
          }
          51.5% {
            transform:translate(75px,21.800px);
            opacity:0.000
          }
          52% {
            transform:translate(75px,22.400px);
            opacity:0.000
          }
          52.5% {
            transform:translate(75px,23.000px);
            opacity:0.000
          }
          53% {
            transform:translate(75px,23.600px);
            opacity:0.000
          }
          53.5% {
            transform:translate(75px,24.200px);
            opacity:0.000
          }
          54% {
            transform:translate(75px,24.800px);
            opacity:0.000
          }
          54.5% {
            transform:translate(75px,25.400px);
            opacity:0.000
          }
          55% {
            transform:translate(75px,26.000px);
            opacity:0.000
          }
          55.5% {
            transform:translate(75px,26.600px);
            opacity:0.000
          }
          56% {
            transform:translate(75px,27.200px);
            opacity:0.000
          }
          56.5% {
            transform:translate(75px,27.800px);
            opacity:0.000
          }
          57% {
            transform:translate(75px,28.400px);
            opacity:0.000
          }
          57.5% {
            transform:translate(75px,29.000px);
            opacity:0.000
          }
          58% {
            transform:translate(75px,29.600px);
            opacity:0.000
          }
          58.5% {
            transform:translate(75px,30.200px);
            opacity:0.000
          }
          59% {
            transform:translate(75px,30.800px);
            opacity:0.000
          }
          59.5% {
            transform:translate(75px,31.400px);
            opacity:0.000
          }
          60% {
            transform:translate(75px,32.000px);
            opacity:0.000
          }
          60.5% {
            transform:translate(75px,32.600px);
            opacity:0.000
          }
          61% {
            transform:translate(75px,33.200px);
            opacity:0.000
          }
          61.5% {
            transform:translate(75px,33.800px);
            opacity:0.000
          }
          62% {
            transform:translate(75px,34.400px);
            opacity:0.000
          }
          62.5% {
            transform:translate(75px,35.000px);
            opacity:0.000
          }
          63% {
            transform:translate(75px,35.600px);
            opacity:0.000
          }
          63.5% {
            transform:translate(75px,36.200px);
            opacity:0.000
          }
          64% {
            transform:translate(75px,36.800px);
            opacity:0.000
          }
          64.5% {
            transform:translate(75px,37.400px);
            opacity:0.000
          }
          65% {
            transform:translate(75px,38.000px);
            opacity:0.000
          }
          65.5% {
            transform:translate(75px,38.600px);
            opacity:0.000
          }
          66% {
            transform:translate(75px,39.200px);
            opacity:0.000
          }
          66.5% {
            transform:translate(75px,39.800px);
            opacity:0.000
          }
          67% {
            transform:translate(75px,40.400px);
            opacity:0.000
          }
          67.5% {
            transform:translate(75px,41.000px);
            opacity:0.000
          }
          68% {
            transform:translate(75px,41.600px);
            opacity:0.200
          }
          68.5% {
            transform:translate(75px,42.200px);
            opacity:0.400
          }
          69% {
            transform:translate(75px,42.800px);
            opacity:0.600
          }
          69.5% {
            transform:translate(75px,43.400px);
            opacity:0.800
          }
          70% {
            transform:translate(75px,44.000px);
            opacity:1.000
          }
          70.5% {
            transform:translate(75px,44.600px);
            opacity:1.000
          }
          71% {
            transform:translate(75px,45.200px);
            opacity:1.000
          }
          71.5% {
            transform:translate(75px,45.800px);
            opacity:1.000
          }
          72% {
            transform:translate(75px,46.400px);
            opacity:1.000
          }
          72.5% {
            transform:translate(75px,47.000px);
            opacity:1.000
          }
          73% {
            transform:translate(75px,47.600px);
            opacity:1.000
          }
          73.5% {
            transform:translate(75px,48.200px);
            opacity:1.000
          }
          74% {
            transform:translate(75px,48.800px);
            opacity:1.000
          }
          74.5% {
            transform:translate(75px,49.400px);
            opacity:1.000
          }
          75% {
            transform:translate(75px,50.000px);
            opacity:1.000
          }
          75.5% {
            transform:translate(75px,50.600px);
            opacity:1.000
          }
          76% {
            transform:translate(75px,51.200px);
            opacity:1.000
          }
          76.5% {
            transform:translate(75px,51.800px);
            opacity:1.000
          }
          77% {
            transform:translate(75px,52.400px);
            opacity:1.000
          }
          77.5% {
            transform:translate(75px,53.000px);
            opacity:1.000
          }
          78% {
            transform:translate(75px,53.600px);
            opacity:1.000
          }
          78.5% {
            transform:translate(75px,54.200px);
            opacity:1.000
          }
          79% {
            transform:translate(75px,54.800px);
            opacity:1.000
          }
          79.5% {
            transform:translate(75px,55.400px);
            opacity:1.000
          }
          80% {
            transform:translate(75px,56.000px);
            opacity:1.000
          }
          80.5% {
            transform:translate(75px,56.600px);
            opacity:1.000
          }
          81% {
            transform:translate(75px,57.200px);
            opacity:1.000
          }
          81.5% {
            transform:translate(75px,57.800px);
            opacity:1.000
          }
          82% {
            transform:translate(75px,58.400px);
            opacity:1.000
          }
          82.5% {
            transform:translate(75px,59.000px);
            opacity:1.000
          }
          83% {
            transform:translate(75px,59.600px);
            opacity:1.000
          }
          83.5% {
            transform:translate(75px,60.200px);
            opacity:1.000
          }
          84% {
            transform:translate(75px,60.800px);
            opacity:1.000
          }
          84.5% {
            transform:translate(75px,61.400px);
            opacity:1.000
          }
          85% {
            transform:translate(75px,62.000px);
            opacity:1.000
          }
          85.5% {
            transform:translate(75px,62.600px);
            opacity:1.000
          }
          86% {
            transform:translate(75px,63.200px);
            opacity:1.000
          }
          86.5% {
            transform:translate(75px,63.800px);
            opacity:1.000
          }
          87% {
            transform:translate(75px,64.400px);
            opacity:1.000
          }
          87.5% {
            transform:translate(75px,65.000px);
            opacity:1.000
          }
          88% {
            transform:translate(75px,65.600px);
            opacity:1.000
          }
          88.5% {
            transform:translate(75px,66.200px);
            opacity:1.000
          }
          89% {
            transform:translate(75px,66.800px);
            opacity:1.000
          }
          89.5% {
            transform:translate(75px,67.400px);
            opacity:1.000
          }
          90% {
            transform:translate(75px,68.000px);
            opacity:1.000
          }
          90.5% {
            transform:translate(75px,68.600px);
            opacity:1.000
          }
          91% {
            transform:translate(75px,69.200px);
            opacity:1.000
          }
          91.5% {
            transform:translate(75px,69.800px);
            opacity:1.000
          }
          92% {
            transform:translate(75px,70.400px);
            opacity:1.000
          }
          92.5% {
            transform:translate(75px,71.000px);
            opacity:1.000
          }
          93% {
            transform:translate(75px,71.600px);
            opacity:1.000
          }
          93.5% {
            transform:translate(75px,72.200px);
            opacity:1.000
          }
          94% {
            transform:translate(75px,72.800px);
            opacity:1.000
          }
          94.5% {
            transform:translate(75px,73.400px);
            opacity:1.000
          }
          95% {
            transform:translate(75px,74.000px);
            opacity:1.000
          }
          95.5% {
            transform:translate(75px,74.600px);
            opacity:1.000
          }
          96% {
            transform:translate(75px,75.200px);
            opacity:1.000
          }
          96.5% {
            transform:translate(75px,75.800px);
            opacity:1.000
          }
          97% {
            transform:translate(75px,76.400px);
            opacity:1.000
          }
          97.5% {
            transform:translate(75px,77.000px);
            opacity:1.000
          }
          98% {
            transform:translate(75px,77.600px);
            opacity:1.000
          }
          98.5% {
            transform:translate(75px,78.200px);
            opacity:1.000
          }
          99% {
            transform:translate(75px,78.800px);
            opacity:1.000
          }
          99.5% {
            transform:translate(75px,79.400px);
            opacity:1.000
          }
          100% {
            transform:translate(75px,80.000px);
            opacity:1.000
          }
        }
        @keyframes liquid3 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
          }
          51.5% {
            opacity:1
          }
          52% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          53% {
            opacity:1
          }
          53.5% {
            opacity:1
          }
          54% {
            opacity:1
          }
          54.5% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.5% {
            opacity:1
          }
          56% {
            opacity:1
          }
          56.5% {
            opacity:1
          }
          57% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          58% {
            opacity:1
          }
          58.5% {
            opacity:1
          }
          59% {
            opacity:1
          }
          59.5% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.5% {
            opacity:1
          }
          61% {
            opacity:1
          }
          61.5% {
            opacity:1
          }
          62% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1
          }
          63.5% {
            opacity:1
          }
          64% {
            opacity:1
          }
          64.5% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.5% {
            opacity:1
          }
          66% {
            opacity:1
          }
          66.5% {
            opacity:1
          }
          67% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          68% {
            opacity:1
          }
          68.5% {
            opacity:1
          }
          69% {
            opacity:1
          }
          69.5% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.5% {
            opacity:1
          }
          71% {
            opacity:1
          }
          71.5% {
            opacity:1
          }
          72% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          73% {
            opacity:1
          }
          73.5% {
            opacity:1
          }
          74% {
            opacity:1
          }
          74.5% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1
          }
          76% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          77% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          78% {
            opacity:1
          }
          78.5% {
            opacity:1
          }
          79% {
            opacity:1
          }
          79.5% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.5% {
            opacity:1
          }
          81% {
            opacity:1
          }
          81.5% {
            opacity:1
          }
          82% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          83% {
            opacity:1
          }
          83.5% {
            opacity:1
          }
          84% {
            opacity:1
          }
          84.5% {
            opacity:1
          }
          85% {
            opacity:1
          }
          85.5% {
            opacity:1
          }
          86% {
            opacity:1
          }
          86.5% {
            opacity:1
          }
          87% {
            opacity:1
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1
          }
          88.5% {
            opacity:1
          }
          89% {
            opacity:1
          }
          89.5% {
            opacity:1
          }
          90% {
            opacity:1
          }
          90.5% {
            opacity:1
          }
          91% {
            opacity:1
          }
          91.5% {
            opacity:1
          }
          92% {
            opacity:1
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes solid3 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1
          }
          1% {
            opacity:1
          }
          1.5% {
            opacity:1
          }
          2% {
            opacity:1
          }
          2.5% {
            opacity:1
          }
          3% {
            opacity:1
          }
          3.5% {
            opacity:1
          }
          4% {
            opacity:1
          }
          4.5% {
            opacity:1
          }
          5% {
            opacity:1
          }
          5.5% {
            opacity:1
          }
          6% {
            opacity:1
          }
          6.5% {
            opacity:1
          }
          7% {
            opacity:1
          }
          7.5% {
            opacity:1
          }
          8% {
            opacity:1
          }
          8.5% {
            opacity:1
          }
          9% {
            opacity:1
          }
          9.5% {
            opacity:1
          }
          10% {
            opacity:1
          }
          10.5% {
            opacity:1
          }
          11% {
            opacity:1
          }
          11.5% {
            opacity:1
          }
          12% {
            opacity:1
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1
          }
          13.5% {
            opacity:1
          }
          14% {
            opacity:1
          }
          14.5% {
            opacity:1
          }
          15% {
            opacity:1
          }
          15.5% {
            opacity:1
          }
          16% {
            opacity:1
          }
          16.5% {
            opacity:1
          }
          17% {
            opacity:1
          }
          17.5% {
            opacity:1
          }
          18% {
            opacity:1
          }
          18.5% {
            opacity:1
          }
          19% {
            opacity:1
          }
          19.5% {
            opacity:1
          }
          20% {
            opacity:1
          }
          20.5% {
            opacity:1
          }
          21% {
            opacity:1
          }
          21.5% {
            opacity:1
          }
          22% {
            opacity:1
          }
          22.5% {
            opacity:1
          }
          23% {
            opacity:1
          }
          23.5% {
            opacity:1
          }
          24% {
            opacity:1
          }
          24.5% {
            opacity:1
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1
          }
          26% {
            opacity:1
          }
          26.5% {
            opacity:1
          }
          27% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          28% {
            opacity:1
          }
          28.5% {
            opacity:1
          }
          29% {
            opacity:1
          }
          29.5% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.5% {
            opacity:1
          }
          31% {
            opacity:1
          }
          31.5% {
            opacity:1
          }
          32% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          33% {
            opacity:1
          }
          33.5% {
            opacity:1
          }
          34% {
            opacity:1
          }
          34.5% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.5% {
            opacity:1
          }
          36% {
            opacity:1
          }
          36.5% {
            opacity:1
          }
          37% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1
          }
          38.5% {
            opacity:1
          }
          39% {
            opacity:1
          }
          39.5% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.5% {
            opacity:1
          }
          41% {
            opacity:1
          }
          41.5% {
            opacity:1
          }
          42% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          43% {
            opacity:1
          }
          43.5% {
            opacity:1
          }
          44% {
            opacity:1
          }
          44.5% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.5% {
            opacity:1
          }
          46% {
            opacity:1
          }
          46.5% {
            opacity:1
          }
          47% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          48% {
            opacity:1
          }
          48.5% {
            opacity:1
          }
          49% {
            opacity:1
          }
          49.5% {
            opacity:1
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:1
          }
          93% {
            opacity:1
          }
          93.5% {
            opacity:1
          }
          94% {
            opacity:1
          }
          94.5% {
            opacity:1
          }
          95% {
            opacity:1
          }
          95.5% {
            opacity:1
          }
          96% {
            opacity:1
          }
          96.5% {
            opacity:1
          }
          97% {
            opacity:1
          }
          97.5% {
            opacity:1
          }
          98% {
            opacity:1
          }
          98.5% {
            opacity:1
          }
          99% {
            opacity:1
          }
          99.5% {
            opacity:1
          }
          100% {
            opacity:1
          }
        }
        .t4 {
          animation:t4 12s linear infinite
        }
        .t4 .liquid {
          animation:liquid4 12s steps(1,end) infinite
        }
        .t4 .solid-mark {
          animation:solid4 12s steps(1,end) infinite
        }
        @keyframes t4 {
          0% {
            transform:translate(80px,100.000px);
            opacity:1.000
          }
          0.5% {
            transform:translate(80px,100.600px);
            opacity:1.000
          }
          1% {
            transform:translate(80px,101.200px);
            opacity:1.000
          }
          1.5% {
            transform:translate(80px,101.800px);
            opacity:1.000
          }
          2% {
            transform:translate(80px,102.400px);
            opacity:1.000
          }
          2.5% {
            transform:translate(80px,103.000px);
            opacity:1.000
          }
          3% {
            transform:translate(80px,103.600px);
            opacity:1.000
          }
          3.5% {
            transform:translate(80px,104.200px);
            opacity:1.000
          }
          4% {
            transform:translate(80px,104.800px);
            opacity:1.000
          }
          4.5% {
            transform:translate(80px,105.400px);
            opacity:1.000
          }
          5% {
            transform:translate(80px,106.000px);
            opacity:1.000
          }
          5.5% {
            transform:translate(80px,106.600px);
            opacity:1.000
          }
          6% {
            transform:translate(80px,107.200px);
            opacity:1.000
          }
          6.5% {
            transform:translate(80px,107.800px);
            opacity:1.000
          }
          7% {
            transform:translate(80px,108.400px);
            opacity:1.000
          }
          7.5% {
            transform:translate(80px,109.000px);
            opacity:1.000
          }
          8% {
            transform:translate(80px,109.600px);
            opacity:1.000
          }
          8.5% {
            transform:translate(80px,110.200px);
            opacity:1.000
          }
          9% {
            transform:translate(80px,110.800px);
            opacity:1.000
          }
          9.5% {
            transform:translate(80px,111.400px);
            opacity:1.000
          }
          10% {
            transform:translate(80px,112.000px);
            opacity:1.000
          }
          10.5% {
            transform:translate(80px,112.600px);
            opacity:1.000
          }
          11% {
            transform:translate(80px,113.200px);
            opacity:1.000
          }
          11.5% {
            transform:translate(80px,113.800px);
            opacity:1.000
          }
          12% {
            transform:translate(80px,114.400px);
            opacity:1.000
          }
          12.5% {
            transform:translate(80px,115.000px);
            opacity:1.000
          }
          13% {
            transform:translate(80px,115.600px);
            opacity:1.000
          }
          13.5% {
            transform:translate(80px,116.200px);
            opacity:1.000
          }
          14% {
            transform:translate(80px,116.800px);
            opacity:1.000
          }
          14.5% {
            transform:translate(80px,117.400px);
            opacity:1.000
          }
          15% {
            transform:translate(80px,118.000px);
            opacity:1.000
          }
          15.5% {
            transform:translate(80px,118.600px);
            opacity:1.000
          }
          16% {
            transform:translate(80px,119.200px);
            opacity:1.000
          }
          16.5% {
            transform:translate(80px,119.800px);
            opacity:1.000
          }
          17% {
            transform:translate(80px,120.400px);
            opacity:1.000
          }
          17.5% {
            transform:translate(80px,121.000px);
            opacity:1.000
          }
          18% {
            transform:translate(80px,121.600px);
            opacity:1.000
          }
          18.5% {
            transform:translate(80px,122.200px);
            opacity:1.000
          }
          19% {
            transform:translate(80px,122.800px);
            opacity:1.000
          }
          19.5% {
            transform:translate(80px,123.400px);
            opacity:1.000
          }
          20% {
            transform:translate(80px,124.000px);
            opacity:1.000
          }
          20.5% {
            transform:translate(80px,124.600px);
            opacity:1.000
          }
          21% {
            transform:translate(80px,125.200px);
            opacity:1.000
          }
          21.5% {
            transform:translate(80px,125.800px);
            opacity:1.000
          }
          22% {
            transform:translate(80px,126.400px);
            opacity:1.000
          }
          22.5% {
            transform:translate(80px,127.000px);
            opacity:1.000
          }
          23% {
            transform:translate(80px,127.600px);
            opacity:1.000
          }
          23.5% {
            transform:translate(80px,128.200px);
            opacity:1.000
          }
          24% {
            transform:translate(80px,128.800px);
            opacity:1.000
          }
          24.5% {
            transform:translate(80px,129.400px);
            opacity:1.000
          }
          25% {
            transform:translate(80px,130.000px);
            opacity:1.000
          }
          25.5% {
            transform:translate(80px,130.600px);
            opacity:1.000
          }
          26% {
            transform:translate(80px,131.200px);
            opacity:0.933
          }
          26.5% {
            transform:translate(80px,131.800px);
            opacity:0.733
          }
          27% {
            transform:translate(80px,132.400px);
            opacity:0.533
          }
          27.5% {
            transform:translate(80px,133.000px);
            opacity:0.333
          }
          28% {
            transform:translate(80px,133.600px);
            opacity:0.133
          }
          28.5% {
            transform:translate(80px,134.200px);
            opacity:0.000
          }
          29% {
            transform:translate(80px,134.800px);
            opacity:0.000
          }
          29.5% {
            transform:translate(80px,135.400px);
            opacity:0.000
          }
          30% {
            transform:translate(80px,136.000px);
            opacity:0.000
          }
          30.5% {
            transform:translate(80px,136.600px);
            opacity:0.000
          }
          31% {
            transform:translate(80px,137.200px);
            opacity:0.000
          }
          31.5% {
            transform:translate(80px,137.800px);
            opacity:0.000
          }
          32% {
            transform:translate(80px,138.400px);
            opacity:0.000
          }
          32.5% {
            transform:translate(80px,139.000px);
            opacity:0.000
          }
          33% {
            transform:translate(80px,139.600px);
            opacity:0.000
          }
          33.5% {
            transform:translate(80px,20.200px);
            opacity:0.000
          }
          34% {
            transform:translate(80px,20.800px);
            opacity:0.000
          }
          34.5% {
            transform:translate(80px,21.400px);
            opacity:0.000
          }
          35% {
            transform:translate(80px,22.000px);
            opacity:0.000
          }
          35.5% {
            transform:translate(80px,22.600px);
            opacity:0.000
          }
          36% {
            transform:translate(80px,23.200px);
            opacity:0.000
          }
          36.5% {
            transform:translate(80px,23.800px);
            opacity:0.000
          }
          37% {
            transform:translate(80px,24.400px);
            opacity:0.000
          }
          37.5% {
            transform:translate(80px,25.000px);
            opacity:0.000
          }
          38% {
            transform:translate(80px,25.600px);
            opacity:0.000
          }
          38.5% {
            transform:translate(80px,26.200px);
            opacity:0.000
          }
          39% {
            transform:translate(80px,26.800px);
            opacity:0.000
          }
          39.5% {
            transform:translate(80px,27.400px);
            opacity:0.000
          }
          40% {
            transform:translate(80px,28.000px);
            opacity:0.000
          }
          40.5% {
            transform:translate(80px,28.600px);
            opacity:0.000
          }
          41% {
            transform:translate(80px,29.200px);
            opacity:0.000
          }
          41.5% {
            transform:translate(80px,29.800px);
            opacity:0.000
          }
          42% {
            transform:translate(80px,30.400px);
            opacity:0.000
          }
          42.5% {
            transform:translate(80px,31.000px);
            opacity:0.000
          }
          43% {
            transform:translate(80px,31.600px);
            opacity:0.000
          }
          43.5% {
            transform:translate(80px,32.200px);
            opacity:0.000
          }
          44% {
            transform:translate(80px,32.800px);
            opacity:0.000
          }
          44.5% {
            transform:translate(80px,33.400px);
            opacity:0.000
          }
          45% {
            transform:translate(80px,34.000px);
            opacity:0.000
          }
          45.5% {
            transform:translate(80px,34.600px);
            opacity:0.000
          }
          46% {
            transform:translate(80px,35.200px);
            opacity:0.000
          }
          46.5% {
            transform:translate(80px,35.800px);
            opacity:0.000
          }
          47% {
            transform:translate(80px,36.400px);
            opacity:0.000
          }
          47.5% {
            transform:translate(80px,37.000px);
            opacity:0.000
          }
          48% {
            transform:translate(80px,37.600px);
            opacity:0.000
          }
          48.5% {
            transform:translate(80px,38.200px);
            opacity:0.000
          }
          49% {
            transform:translate(80px,38.800px);
            opacity:0.000
          }
          49.5% {
            transform:translate(80px,39.400px);
            opacity:0.000
          }
          50% {
            transform:translate(80px,40.000px);
            opacity:0.000
          }
          50.5% {
            transform:translate(80px,40.600px);
            opacity:0.000
          }
          51% {
            transform:translate(80px,41.200px);
            opacity:0.067
          }
          51.5% {
            transform:translate(80px,41.800px);
            opacity:0.267
          }
          52% {
            transform:translate(80px,42.400px);
            opacity:0.467
          }
          52.5% {
            transform:translate(80px,43.000px);
            opacity:0.667
          }
          53% {
            transform:translate(80px,43.600px);
            opacity:0.867
          }
          53.5% {
            transform:translate(80px,44.200px);
            opacity:1.000
          }
          54% {
            transform:translate(80px,44.800px);
            opacity:1.000
          }
          54.5% {
            transform:translate(80px,45.400px);
            opacity:1.000
          }
          55% {
            transform:translate(80px,46.000px);
            opacity:1.000
          }
          55.5% {
            transform:translate(80px,46.600px);
            opacity:1.000
          }
          56% {
            transform:translate(80px,47.200px);
            opacity:1.000
          }
          56.5% {
            transform:translate(80px,47.800px);
            opacity:1.000
          }
          57% {
            transform:translate(80px,48.400px);
            opacity:1.000
          }
          57.5% {
            transform:translate(80px,49.000px);
            opacity:1.000
          }
          58% {
            transform:translate(80px,49.600px);
            opacity:1.000
          }
          58.5% {
            transform:translate(80px,50.200px);
            opacity:1.000
          }
          59% {
            transform:translate(80px,50.800px);
            opacity:1.000
          }
          59.5% {
            transform:translate(80px,51.400px);
            opacity:1.000
          }
          60% {
            transform:translate(80px,52.000px);
            opacity:1.000
          }
          60.5% {
            transform:translate(80px,52.600px);
            opacity:1.000
          }
          61% {
            transform:translate(80px,53.200px);
            opacity:1.000
          }
          61.5% {
            transform:translate(80px,53.800px);
            opacity:1.000
          }
          62% {
            transform:translate(80px,54.400px);
            opacity:1.000
          }
          62.5% {
            transform:translate(80px,55.000px);
            opacity:1.000
          }
          63% {
            transform:translate(80px,55.600px);
            opacity:1.000
          }
          63.5% {
            transform:translate(80px,56.200px);
            opacity:1.000
          }
          64% {
            transform:translate(80px,56.800px);
            opacity:1.000
          }
          64.5% {
            transform:translate(80px,57.400px);
            opacity:1.000
          }
          65% {
            transform:translate(80px,58.000px);
            opacity:1.000
          }
          65.5% {
            transform:translate(80px,58.600px);
            opacity:1.000
          }
          66% {
            transform:translate(80px,59.200px);
            opacity:1.000
          }
          66.5% {
            transform:translate(80px,59.800px);
            opacity:1.000
          }
          67% {
            transform:translate(80px,60.400px);
            opacity:1.000
          }
          67.5% {
            transform:translate(80px,61.000px);
            opacity:1.000
          }
          68% {
            transform:translate(80px,61.600px);
            opacity:1.000
          }
          68.5% {
            transform:translate(80px,62.200px);
            opacity:1.000
          }
          69% {
            transform:translate(80px,62.800px);
            opacity:1.000
          }
          69.5% {
            transform:translate(80px,63.400px);
            opacity:1.000
          }
          70% {
            transform:translate(80px,64.000px);
            opacity:1.000
          }
          70.5% {
            transform:translate(80px,64.600px);
            opacity:1.000
          }
          71% {
            transform:translate(80px,65.200px);
            opacity:1.000
          }
          71.5% {
            transform:translate(80px,65.800px);
            opacity:1.000
          }
          72% {
            transform:translate(80px,66.400px);
            opacity:1.000
          }
          72.5% {
            transform:translate(80px,67.000px);
            opacity:1.000
          }
          73% {
            transform:translate(80px,67.600px);
            opacity:1.000
          }
          73.5% {
            transform:translate(80px,68.200px);
            opacity:1.000
          }
          74% {
            transform:translate(80px,68.800px);
            opacity:1.000
          }
          74.5% {
            transform:translate(80px,69.400px);
            opacity:1.000
          }
          75% {
            transform:translate(80px,70.000px);
            opacity:1.000
          }
          75.5% {
            transform:translate(80px,70.600px);
            opacity:1.000
          }
          76% {
            transform:translate(80px,71.200px);
            opacity:1.000
          }
          76.5% {
            transform:translate(80px,71.800px);
            opacity:1.000
          }
          77% {
            transform:translate(80px,72.400px);
            opacity:1.000
          }
          77.5% {
            transform:translate(80px,73.000px);
            opacity:1.000
          }
          78% {
            transform:translate(80px,73.600px);
            opacity:1.000
          }
          78.5% {
            transform:translate(80px,74.200px);
            opacity:1.000
          }
          79% {
            transform:translate(80px,74.800px);
            opacity:1.000
          }
          79.5% {
            transform:translate(80px,75.400px);
            opacity:1.000
          }
          80% {
            transform:translate(80px,76.000px);
            opacity:1.000
          }
          80.5% {
            transform:translate(80px,76.600px);
            opacity:1.000
          }
          81% {
            transform:translate(80px,77.200px);
            opacity:1.000
          }
          81.5% {
            transform:translate(80px,77.800px);
            opacity:1.000
          }
          82% {
            transform:translate(80px,78.400px);
            opacity:1.000
          }
          82.5% {
            transform:translate(80px,79.000px);
            opacity:1.000
          }
          83% {
            transform:translate(80px,79.600px);
            opacity:1.000
          }
          83.5% {
            transform:translate(80px,80.200px);
            opacity:1.000
          }
          84% {
            transform:translate(80px,80.800px);
            opacity:1.000
          }
          84.5% {
            transform:translate(80px,81.400px);
            opacity:1.000
          }
          85% {
            transform:translate(80px,82.000px);
            opacity:1.000
          }
          85.5% {
            transform:translate(80px,82.600px);
            opacity:1.000
          }
          86% {
            transform:translate(80px,83.200px);
            opacity:1.000
          }
          86.5% {
            transform:translate(80px,83.800px);
            opacity:1.000
          }
          87% {
            transform:translate(80px,84.400px);
            opacity:1.000
          }
          87.5% {
            transform:translate(80px,85.000px);
            opacity:1.000
          }
          88% {
            transform:translate(80px,85.600px);
            opacity:1.000
          }
          88.5% {
            transform:translate(80px,86.200px);
            opacity:1.000
          }
          89% {
            transform:translate(80px,86.800px);
            opacity:1.000
          }
          89.5% {
            transform:translate(80px,87.400px);
            opacity:1.000
          }
          90% {
            transform:translate(80px,88.000px);
            opacity:1.000
          }
          90.5% {
            transform:translate(80px,88.600px);
            opacity:1.000
          }
          91% {
            transform:translate(80px,89.200px);
            opacity:1.000
          }
          91.5% {
            transform:translate(80px,89.800px);
            opacity:1.000
          }
          92% {
            transform:translate(80px,90.400px);
            opacity:1.000
          }
          92.5% {
            transform:translate(80px,91.000px);
            opacity:1.000
          }
          93% {
            transform:translate(80px,91.600px);
            opacity:1.000
          }
          93.5% {
            transform:translate(80px,92.200px);
            opacity:1.000
          }
          94% {
            transform:translate(80px,92.800px);
            opacity:1.000
          }
          94.5% {
            transform:translate(80px,93.400px);
            opacity:1.000
          }
          95% {
            transform:translate(80px,94.000px);
            opacity:1.000
          }
          95.5% {
            transform:translate(80px,94.600px);
            opacity:1.000
          }
          96% {
            transform:translate(80px,95.200px);
            opacity:1.000
          }
          96.5% {
            transform:translate(80px,95.800px);
            opacity:1.000
          }
          97% {
            transform:translate(80px,96.400px);
            opacity:1.000
          }
          97.5% {
            transform:translate(80px,97.000px);
            opacity:1.000
          }
          98% {
            transform:translate(80px,97.600px);
            opacity:1.000
          }
          98.5% {
            transform:translate(80px,98.200px);
            opacity:1.000
          }
          99% {
            transform:translate(80px,98.800px);
            opacity:1.000
          }
          99.5% {
            transform:translate(80px,99.400px);
            opacity:1.000
          }
          100% {
            transform:translate(80px,100.000px);
            opacity:1.000
          }
        }
        @keyframes liquid4 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:1
          }
          34% {
            opacity:1
          }
          34.5% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.5% {
            opacity:1
          }
          36% {
            opacity:1
          }
          36.5% {
            opacity:1
          }
          37% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1
          }
          38.5% {
            opacity:1
          }
          39% {
            opacity:1
          }
          39.5% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.5% {
            opacity:1
          }
          41% {
            opacity:1
          }
          41.5% {
            opacity:1
          }
          42% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          43% {
            opacity:1
          }
          43.5% {
            opacity:1
          }
          44% {
            opacity:1
          }
          44.5% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.5% {
            opacity:1
          }
          46% {
            opacity:1
          }
          46.5% {
            opacity:1
          }
          47% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          48% {
            opacity:1
          }
          48.5% {
            opacity:1
          }
          49% {
            opacity:1
          }
          49.5% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
          }
          51.5% {
            opacity:1
          }
          52% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          53% {
            opacity:1
          }
          53.5% {
            opacity:1
          }
          54% {
            opacity:1
          }
          54.5% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.5% {
            opacity:1
          }
          56% {
            opacity:1
          }
          56.5% {
            opacity:1
          }
          57% {
            opacity:1
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes solid4 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1
          }
          1% {
            opacity:1
          }
          1.5% {
            opacity:1
          }
          2% {
            opacity:1
          }
          2.5% {
            opacity:1
          }
          3% {
            opacity:1
          }
          3.5% {
            opacity:1
          }
          4% {
            opacity:1
          }
          4.5% {
            opacity:1
          }
          5% {
            opacity:1
          }
          5.5% {
            opacity:1
          }
          6% {
            opacity:1
          }
          6.5% {
            opacity:1
          }
          7% {
            opacity:1
          }
          7.5% {
            opacity:1
          }
          8% {
            opacity:1
          }
          8.5% {
            opacity:1
          }
          9% {
            opacity:1
          }
          9.5% {
            opacity:1
          }
          10% {
            opacity:1
          }
          10.5% {
            opacity:1
          }
          11% {
            opacity:1
          }
          11.5% {
            opacity:1
          }
          12% {
            opacity:1
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1
          }
          13.5% {
            opacity:1
          }
          14% {
            opacity:1
          }
          14.5% {
            opacity:1
          }
          15% {
            opacity:1
          }
          15.5% {
            opacity:1
          }
          16% {
            opacity:1
          }
          16.5% {
            opacity:1
          }
          17% {
            opacity:1
          }
          17.5% {
            opacity:1
          }
          18% {
            opacity:1
          }
          18.5% {
            opacity:1
          }
          19% {
            opacity:1
          }
          19.5% {
            opacity:1
          }
          20% {
            opacity:1
          }
          20.5% {
            opacity:1
          }
          21% {
            opacity:1
          }
          21.5% {
            opacity:1
          }
          22% {
            opacity:1
          }
          22.5% {
            opacity:1
          }
          23% {
            opacity:1
          }
          23.5% {
            opacity:1
          }
          24% {
            opacity:1
          }
          24.5% {
            opacity:1
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1
          }
          26% {
            opacity:1
          }
          26.5% {
            opacity:1
          }
          27% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          28% {
            opacity:1
          }
          28.5% {
            opacity:1
          }
          29% {
            opacity:1
          }
          29.5% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.5% {
            opacity:1
          }
          31% {
            opacity:1
          }
          31.5% {
            opacity:1
          }
          32% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          33% {
            opacity:1
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:1
          }
          58% {
            opacity:1
          }
          58.5% {
            opacity:1
          }
          59% {
            opacity:1
          }
          59.5% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.5% {
            opacity:1
          }
          61% {
            opacity:1
          }
          61.5% {
            opacity:1
          }
          62% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1
          }
          63.5% {
            opacity:1
          }
          64% {
            opacity:1
          }
          64.5% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.5% {
            opacity:1
          }
          66% {
            opacity:1
          }
          66.5% {
            opacity:1
          }
          67% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          68% {
            opacity:1
          }
          68.5% {
            opacity:1
          }
          69% {
            opacity:1
          }
          69.5% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.5% {
            opacity:1
          }
          71% {
            opacity:1
          }
          71.5% {
            opacity:1
          }
          72% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          73% {
            opacity:1
          }
          73.5% {
            opacity:1
          }
          74% {
            opacity:1
          }
          74.5% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1
          }
          76% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          77% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          78% {
            opacity:1
          }
          78.5% {
            opacity:1
          }
          79% {
            opacity:1
          }
          79.5% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.5% {
            opacity:1
          }
          81% {
            opacity:1
          }
          81.5% {
            opacity:1
          }
          82% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          83% {
            opacity:1
          }
          83.5% {
            opacity:1
          }
          84% {
            opacity:1
          }
          84.5% {
            opacity:1
          }
          85% {
            opacity:1
          }
          85.5% {
            opacity:1
          }
          86% {
            opacity:1
          }
          86.5% {
            opacity:1
          }
          87% {
            opacity:1
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1
          }
          88.5% {
            opacity:1
          }
          89% {
            opacity:1
          }
          89.5% {
            opacity:1
          }
          90% {
            opacity:1
          }
          90.5% {
            opacity:1
          }
          91% {
            opacity:1
          }
          91.5% {
            opacity:1
          }
          92% {
            opacity:1
          }
          92.5% {
            opacity:1
          }
          93% {
            opacity:1
          }
          93.5% {
            opacity:1
          }
          94% {
            opacity:1
          }
          94.5% {
            opacity:1
          }
          95% {
            opacity:1
          }
          95.5% {
            opacity:1
          }
          96% {
            opacity:1
          }
          96.5% {
            opacity:1
          }
          97% {
            opacity:1
          }
          97.5% {
            opacity:1
          }
          98% {
            opacity:1
          }
          98.5% {
            opacity:1
          }
          99% {
            opacity:1
          }
          99.5% {
            opacity:1
          }
          100% {
            opacity:1
          }
        }
        .t5 {
          animation:t5 12s linear infinite
        }
        .t5 .liquid {
          animation:liquid5 12s steps(1,end) infinite
        }
        .t5 .solid-mark {
          animation:solid5 12s steps(1,end) infinite
        }
        @keyframes t5 {
          0% {
            transform:translate(70px,120.000px);
            opacity:1.000
          }
          0.5% {
            transform:translate(70px,120.600px);
            opacity:1.000
          }
          1% {
            transform:translate(70px,121.200px);
            opacity:1.000
          }
          1.5% {
            transform:translate(70px,121.800px);
            opacity:1.000
          }
          2% {
            transform:translate(70px,122.400px);
            opacity:1.000
          }
          2.5% {
            transform:translate(70px,123.000px);
            opacity:1.000
          }
          3% {
            transform:translate(70px,123.600px);
            opacity:1.000
          }
          3.5% {
            transform:translate(70px,124.200px);
            opacity:1.000
          }
          4% {
            transform:translate(70px,124.800px);
            opacity:1.000
          }
          4.5% {
            transform:translate(70px,125.400px);
            opacity:1.000
          }
          5% {
            transform:translate(70px,126.000px);
            opacity:1.000
          }
          5.5% {
            transform:translate(70px,126.600px);
            opacity:1.000
          }
          6% {
            transform:translate(70px,127.200px);
            opacity:1.000
          }
          6.5% {
            transform:translate(70px,127.800px);
            opacity:1.000
          }
          7% {
            transform:translate(70px,128.400px);
            opacity:1.000
          }
          7.5% {
            transform:translate(70px,129.000px);
            opacity:1.000
          }
          8% {
            transform:translate(70px,129.600px);
            opacity:1.000
          }
          8.5% {
            transform:translate(70px,130.200px);
            opacity:1.000
          }
          9% {
            transform:translate(70px,130.800px);
            opacity:1.000
          }
          9.5% {
            transform:translate(70px,131.400px);
            opacity:0.867
          }
          10% {
            transform:translate(70px,132.000px);
            opacity:0.667
          }
          10.5% {
            transform:translate(70px,132.600px);
            opacity:0.467
          }
          11% {
            transform:translate(70px,133.200px);
            opacity:0.267
          }
          11.5% {
            transform:translate(70px,133.800px);
            opacity:0.067
          }
          12% {
            transform:translate(70px,134.400px);
            opacity:0.000
          }
          12.5% {
            transform:translate(70px,135.000px);
            opacity:0.000
          }
          13% {
            transform:translate(70px,135.600px);
            opacity:0.000
          }
          13.5% {
            transform:translate(70px,136.200px);
            opacity:0.000
          }
          14% {
            transform:translate(70px,136.800px);
            opacity:0.000
          }
          14.5% {
            transform:translate(70px,137.400px);
            opacity:0.000
          }
          15% {
            transform:translate(70px,138.000px);
            opacity:0.000
          }
          15.5% {
            transform:translate(70px,138.600px);
            opacity:0.000
          }
          16% {
            transform:translate(70px,139.200px);
            opacity:0.000
          }
          16.5% {
            transform:translate(70px,139.800px);
            opacity:0.000
          }
          17% {
            transform:translate(70px,20.400px);
            opacity:0.000
          }
          17.5% {
            transform:translate(70px,21.000px);
            opacity:0.000
          }
          18% {
            transform:translate(70px,21.600px);
            opacity:0.000
          }
          18.5% {
            transform:translate(70px,22.200px);
            opacity:0.000
          }
          19% {
            transform:translate(70px,22.800px);
            opacity:0.000
          }
          19.5% {
            transform:translate(70px,23.400px);
            opacity:0.000
          }
          20% {
            transform:translate(70px,24.000px);
            opacity:0.000
          }
          20.5% {
            transform:translate(70px,24.600px);
            opacity:0.000
          }
          21% {
            transform:translate(70px,25.200px);
            opacity:0.000
          }
          21.5% {
            transform:translate(70px,25.800px);
            opacity:0.000
          }
          22% {
            transform:translate(70px,26.400px);
            opacity:0.000
          }
          22.5% {
            transform:translate(70px,27.000px);
            opacity:0.000
          }
          23% {
            transform:translate(70px,27.600px);
            opacity:0.000
          }
          23.5% {
            transform:translate(70px,28.200px);
            opacity:0.000
          }
          24% {
            transform:translate(70px,28.800px);
            opacity:0.000
          }
          24.5% {
            transform:translate(70px,29.400px);
            opacity:0.000
          }
          25% {
            transform:translate(70px,30.000px);
            opacity:0.000
          }
          25.5% {
            transform:translate(70px,30.600px);
            opacity:0.000
          }
          26% {
            transform:translate(70px,31.200px);
            opacity:0.000
          }
          26.5% {
            transform:translate(70px,31.800px);
            opacity:0.000
          }
          27% {
            transform:translate(70px,32.400px);
            opacity:0.000
          }
          27.5% {
            transform:translate(70px,33.000px);
            opacity:0.000
          }
          28% {
            transform:translate(70px,33.600px);
            opacity:0.000
          }
          28.5% {
            transform:translate(70px,34.200px);
            opacity:0.000
          }
          29% {
            transform:translate(70px,34.800px);
            opacity:0.000
          }
          29.5% {
            transform:translate(70px,35.400px);
            opacity:0.000
          }
          30% {
            transform:translate(70px,36.000px);
            opacity:0.000
          }
          30.5% {
            transform:translate(70px,36.600px);
            opacity:0.000
          }
          31% {
            transform:translate(70px,37.200px);
            opacity:0.000
          }
          31.5% {
            transform:translate(70px,37.800px);
            opacity:0.000
          }
          32% {
            transform:translate(70px,38.400px);
            opacity:0.000
          }
          32.5% {
            transform:translate(70px,39.000px);
            opacity:0.000
          }
          33% {
            transform:translate(70px,39.600px);
            opacity:0.000
          }
          33.5% {
            transform:translate(70px,40.200px);
            opacity:0.000
          }
          34% {
            transform:translate(70px,40.800px);
            opacity:0.000
          }
          34.5% {
            transform:translate(70px,41.400px);
            opacity:0.133
          }
          35% {
            transform:translate(70px,42.000px);
            opacity:0.333
          }
          35.5% {
            transform:translate(70px,42.600px);
            opacity:0.533
          }
          36% {
            transform:translate(70px,43.200px);
            opacity:0.733
          }
          36.5% {
            transform:translate(70px,43.800px);
            opacity:0.933
          }
          37% {
            transform:translate(70px,44.400px);
            opacity:1.000
          }
          37.5% {
            transform:translate(70px,45.000px);
            opacity:1.000
          }
          38% {
            transform:translate(70px,45.600px);
            opacity:1.000
          }
          38.5% {
            transform:translate(70px,46.200px);
            opacity:1.000
          }
          39% {
            transform:translate(70px,46.800px);
            opacity:1.000
          }
          39.5% {
            transform:translate(70px,47.400px);
            opacity:1.000
          }
          40% {
            transform:translate(70px,48.000px);
            opacity:1.000
          }
          40.5% {
            transform:translate(70px,48.600px);
            opacity:1.000
          }
          41% {
            transform:translate(70px,49.200px);
            opacity:1.000
          }
          41.5% {
            transform:translate(70px,49.800px);
            opacity:1.000
          }
          42% {
            transform:translate(70px,50.400px);
            opacity:1.000
          }
          42.5% {
            transform:translate(70px,51.000px);
            opacity:1.000
          }
          43% {
            transform:translate(70px,51.600px);
            opacity:1.000
          }
          43.5% {
            transform:translate(70px,52.200px);
            opacity:1.000
          }
          44% {
            transform:translate(70px,52.800px);
            opacity:1.000
          }
          44.5% {
            transform:translate(70px,53.400px);
            opacity:1.000
          }
          45% {
            transform:translate(70px,54.000px);
            opacity:1.000
          }
          45.5% {
            transform:translate(70px,54.600px);
            opacity:1.000
          }
          46% {
            transform:translate(70px,55.200px);
            opacity:1.000
          }
          46.5% {
            transform:translate(70px,55.800px);
            opacity:1.000
          }
          47% {
            transform:translate(70px,56.400px);
            opacity:1.000
          }
          47.5% {
            transform:translate(70px,57.000px);
            opacity:1.000
          }
          48% {
            transform:translate(70px,57.600px);
            opacity:1.000
          }
          48.5% {
            transform:translate(70px,58.200px);
            opacity:1.000
          }
          49% {
            transform:translate(70px,58.800px);
            opacity:1.000
          }
          49.5% {
            transform:translate(70px,59.400px);
            opacity:1.000
          }
          50% {
            transform:translate(70px,60.000px);
            opacity:1.000
          }
          50.5% {
            transform:translate(70px,60.600px);
            opacity:1.000
          }
          51% {
            transform:translate(70px,61.200px);
            opacity:1.000
          }
          51.5% {
            transform:translate(70px,61.800px);
            opacity:1.000
          }
          52% {
            transform:translate(70px,62.400px);
            opacity:1.000
          }
          52.5% {
            transform:translate(70px,63.000px);
            opacity:1.000
          }
          53% {
            transform:translate(70px,63.600px);
            opacity:1.000
          }
          53.5% {
            transform:translate(70px,64.200px);
            opacity:1.000
          }
          54% {
            transform:translate(70px,64.800px);
            opacity:1.000
          }
          54.5% {
            transform:translate(70px,65.400px);
            opacity:1.000
          }
          55% {
            transform:translate(70px,66.000px);
            opacity:1.000
          }
          55.5% {
            transform:translate(70px,66.600px);
            opacity:1.000
          }
          56% {
            transform:translate(70px,67.200px);
            opacity:1.000
          }
          56.5% {
            transform:translate(70px,67.800px);
            opacity:1.000
          }
          57% {
            transform:translate(70px,68.400px);
            opacity:1.000
          }
          57.5% {
            transform:translate(70px,69.000px);
            opacity:1.000
          }
          58% {
            transform:translate(70px,69.600px);
            opacity:1.000
          }
          58.5% {
            transform:translate(70px,70.200px);
            opacity:1.000
          }
          59% {
            transform:translate(70px,70.800px);
            opacity:1.000
          }
          59.5% {
            transform:translate(70px,71.400px);
            opacity:1.000
          }
          60% {
            transform:translate(70px,72.000px);
            opacity:1.000
          }
          60.5% {
            transform:translate(70px,72.600px);
            opacity:1.000
          }
          61% {
            transform:translate(70px,73.200px);
            opacity:1.000
          }
          61.5% {
            transform:translate(70px,73.800px);
            opacity:1.000
          }
          62% {
            transform:translate(70px,74.400px);
            opacity:1.000
          }
          62.5% {
            transform:translate(70px,75.000px);
            opacity:1.000
          }
          63% {
            transform:translate(70px,75.600px);
            opacity:1.000
          }
          63.5% {
            transform:translate(70px,76.200px);
            opacity:1.000
          }
          64% {
            transform:translate(70px,76.800px);
            opacity:1.000
          }
          64.5% {
            transform:translate(70px,77.400px);
            opacity:1.000
          }
          65% {
            transform:translate(70px,78.000px);
            opacity:1.000
          }
          65.5% {
            transform:translate(70px,78.600px);
            opacity:1.000
          }
          66% {
            transform:translate(70px,79.200px);
            opacity:1.000
          }
          66.5% {
            transform:translate(70px,79.800px);
            opacity:1.000
          }
          67% {
            transform:translate(70px,80.400px);
            opacity:1.000
          }
          67.5% {
            transform:translate(70px,81.000px);
            opacity:1.000
          }
          68% {
            transform:translate(70px,81.600px);
            opacity:1.000
          }
          68.5% {
            transform:translate(70px,82.200px);
            opacity:1.000
          }
          69% {
            transform:translate(70px,82.800px);
            opacity:1.000
          }
          69.5% {
            transform:translate(70px,83.400px);
            opacity:1.000
          }
          70% {
            transform:translate(70px,84.000px);
            opacity:1.000
          }
          70.5% {
            transform:translate(70px,84.600px);
            opacity:1.000
          }
          71% {
            transform:translate(70px,85.200px);
            opacity:1.000
          }
          71.5% {
            transform:translate(70px,85.800px);
            opacity:1.000
          }
          72% {
            transform:translate(70px,86.400px);
            opacity:1.000
          }
          72.5% {
            transform:translate(70px,87.000px);
            opacity:1.000
          }
          73% {
            transform:translate(70px,87.600px);
            opacity:1.000
          }
          73.5% {
            transform:translate(70px,88.200px);
            opacity:1.000
          }
          74% {
            transform:translate(70px,88.800px);
            opacity:1.000
          }
          74.5% {
            transform:translate(70px,89.400px);
            opacity:1.000
          }
          75% {
            transform:translate(70px,90.000px);
            opacity:1.000
          }
          75.5% {
            transform:translate(70px,90.600px);
            opacity:1.000
          }
          76% {
            transform:translate(70px,91.200px);
            opacity:1.000
          }
          76.5% {
            transform:translate(70px,91.800px);
            opacity:1.000
          }
          77% {
            transform:translate(70px,92.400px);
            opacity:1.000
          }
          77.5% {
            transform:translate(70px,93.000px);
            opacity:1.000
          }
          78% {
            transform:translate(70px,93.600px);
            opacity:1.000
          }
          78.5% {
            transform:translate(70px,94.200px);
            opacity:1.000
          }
          79% {
            transform:translate(70px,94.800px);
            opacity:1.000
          }
          79.5% {
            transform:translate(70px,95.400px);
            opacity:1.000
          }
          80% {
            transform:translate(70px,96.000px);
            opacity:1.000
          }
          80.5% {
            transform:translate(70px,96.600px);
            opacity:1.000
          }
          81% {
            transform:translate(70px,97.200px);
            opacity:1.000
          }
          81.5% {
            transform:translate(70px,97.800px);
            opacity:1.000
          }
          82% {
            transform:translate(70px,98.400px);
            opacity:1.000
          }
          82.5% {
            transform:translate(70px,99.000px);
            opacity:1.000
          }
          83% {
            transform:translate(70px,99.600px);
            opacity:1.000
          }
          83.5% {
            transform:translate(70px,100.200px);
            opacity:1.000
          }
          84% {
            transform:translate(70px,100.800px);
            opacity:1.000
          }
          84.5% {
            transform:translate(70px,101.400px);
            opacity:1.000
          }
          85% {
            transform:translate(70px,102.000px);
            opacity:1.000
          }
          85.5% {
            transform:translate(70px,102.600px);
            opacity:1.000
          }
          86% {
            transform:translate(70px,103.200px);
            opacity:1.000
          }
          86.5% {
            transform:translate(70px,103.800px);
            opacity:1.000
          }
          87% {
            transform:translate(70px,104.400px);
            opacity:1.000
          }
          87.5% {
            transform:translate(70px,105.000px);
            opacity:1.000
          }
          88% {
            transform:translate(70px,105.600px);
            opacity:1.000
          }
          88.5% {
            transform:translate(70px,106.200px);
            opacity:1.000
          }
          89% {
            transform:translate(70px,106.800px);
            opacity:1.000
          }
          89.5% {
            transform:translate(70px,107.400px);
            opacity:1.000
          }
          90% {
            transform:translate(70px,108.000px);
            opacity:1.000
          }
          90.5% {
            transform:translate(70px,108.600px);
            opacity:1.000
          }
          91% {
            transform:translate(70px,109.200px);
            opacity:1.000
          }
          91.5% {
            transform:translate(70px,109.800px);
            opacity:1.000
          }
          92% {
            transform:translate(70px,110.400px);
            opacity:1.000
          }
          92.5% {
            transform:translate(70px,111.000px);
            opacity:1.000
          }
          93% {
            transform:translate(70px,111.600px);
            opacity:1.000
          }
          93.5% {
            transform:translate(70px,112.200px);
            opacity:1.000
          }
          94% {
            transform:translate(70px,112.800px);
            opacity:1.000
          }
          94.5% {
            transform:translate(70px,113.400px);
            opacity:1.000
          }
          95% {
            transform:translate(70px,114.000px);
            opacity:1.000
          }
          95.5% {
            transform:translate(70px,114.600px);
            opacity:1.000
          }
          96% {
            transform:translate(70px,115.200px);
            opacity:1.000
          }
          96.5% {
            transform:translate(70px,115.800px);
            opacity:1.000
          }
          97% {
            transform:translate(70px,116.400px);
            opacity:1.000
          }
          97.5% {
            transform:translate(70px,117.000px);
            opacity:1.000
          }
          98% {
            transform:translate(70px,117.600px);
            opacity:1.000
          }
          98.5% {
            transform:translate(70px,118.200px);
            opacity:1.000
          }
          99% {
            transform:translate(70px,118.800px);
            opacity:1.000
          }
          99.5% {
            transform:translate(70px,119.400px);
            opacity:1.000
          }
          100% {
            transform:translate(70px,120.000px);
            opacity:1.000
          }
        }
        @keyframes liquid5 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:1
          }
          17.5% {
            opacity:1
          }
          18% {
            opacity:1
          }
          18.5% {
            opacity:1
          }
          19% {
            opacity:1
          }
          19.5% {
            opacity:1
          }
          20% {
            opacity:1
          }
          20.5% {
            opacity:1
          }
          21% {
            opacity:1
          }
          21.5% {
            opacity:1
          }
          22% {
            opacity:1
          }
          22.5% {
            opacity:1
          }
          23% {
            opacity:1
          }
          23.5% {
            opacity:1
          }
          24% {
            opacity:1
          }
          24.5% {
            opacity:1
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1
          }
          26% {
            opacity:1
          }
          26.5% {
            opacity:1
          }
          27% {
            opacity:1
          }
          27.5% {
            opacity:1
          }
          28% {
            opacity:1
          }
          28.5% {
            opacity:1
          }
          29% {
            opacity:1
          }
          29.5% {
            opacity:1
          }
          30% {
            opacity:1
          }
          30.5% {
            opacity:1
          }
          31% {
            opacity:1
          }
          31.5% {
            opacity:1
          }
          32% {
            opacity:1
          }
          32.5% {
            opacity:1
          }
          33% {
            opacity:1
          }
          33.5% {
            opacity:1
          }
          34% {
            opacity:1
          }
          34.5% {
            opacity:1
          }
          35% {
            opacity:1
          }
          35.5% {
            opacity:1
          }
          36% {
            opacity:1
          }
          36.5% {
            opacity:1
          }
          37% {
            opacity:1
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1
          }
          38.5% {
            opacity:1
          }
          39% {
            opacity:1
          }
          39.5% {
            opacity:1
          }
          40% {
            opacity:1
          }
          40.5% {
            opacity:1
          }
          41% {
            opacity:1
          }
          41.5% {
            opacity:1
          }
          42% {
            opacity:1
          }
          42.5% {
            opacity:1
          }
          43% {
            opacity:1
          }
          43.5% {
            opacity:1
          }
          44% {
            opacity:1
          }
          44.5% {
            opacity:1
          }
          45% {
            opacity:1
          }
          45.5% {
            opacity:1
          }
          46% {
            opacity:1
          }
          46.5% {
            opacity:1
          }
          47% {
            opacity:1
          }
          47.5% {
            opacity:1
          }
          48% {
            opacity:1
          }
          48.5% {
            opacity:1
          }
          49% {
            opacity:1
          }
          49.5% {
            opacity:1
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
          }
          51.5% {
            opacity:1
          }
          52% {
            opacity:1
          }
          52.5% {
            opacity:1
          }
          53% {
            opacity:1
          }
          53.5% {
            opacity:1
          }
          54% {
            opacity:1
          }
          54.5% {
            opacity:1
          }
          55% {
            opacity:1
          }
          55.5% {
            opacity:1
          }
          56% {
            opacity:1
          }
          56.5% {
            opacity:1
          }
          57% {
            opacity:1
          }
          57.5% {
            opacity:1
          }
          58% {
            opacity:1
          }
          58.5% {
            opacity:1
          }
          59% {
            opacity:1
          }
          59.5% {
            opacity:1
          }
          60% {
            opacity:1
          }
          60.5% {
            opacity:1
          }
          61% {
            opacity:1
          }
          61.5% {
            opacity:1
          }
          62% {
            opacity:1
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1
          }
          63.5% {
            opacity:1
          }
          64% {
            opacity:1
          }
          64.5% {
            opacity:1
          }
          65% {
            opacity:1
          }
          65.5% {
            opacity:1
          }
          66% {
            opacity:1
          }
          66.5% {
            opacity:1
          }
          67% {
            opacity:1
          }
          67.5% {
            opacity:1
          }
          68% {
            opacity:1
          }
          68.5% {
            opacity:1
          }
          69% {
            opacity:1
          }
          69.5% {
            opacity:1
          }
          70% {
            opacity:1
          }
          70.5% {
            opacity:1
          }
          71% {
            opacity:1
          }
          71.5% {
            opacity:1
          }
          72% {
            opacity:1
          }
          72.5% {
            opacity:1
          }
          73% {
            opacity:1
          }
          73.5% {
            opacity:1
          }
          74% {
            opacity:1
          }
          74.5% {
            opacity:1
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1
          }
          76% {
            opacity:1
          }
          76.5% {
            opacity:1
          }
          77% {
            opacity:1
          }
          77.5% {
            opacity:1
          }
          78% {
            opacity:1
          }
          78.5% {
            opacity:1
          }
          79% {
            opacity:1
          }
          79.5% {
            opacity:1
          }
          80% {
            opacity:1
          }
          80.5% {
            opacity:1
          }
          81% {
            opacity:1
          }
          81.5% {
            opacity:1
          }
          82% {
            opacity:1
          }
          82.5% {
            opacity:1
          }
          83% {
            opacity:1
          }
          83.5% {
            opacity:1
          }
          84% {
            opacity:1
          }
          84.5% {
            opacity:1
          }
          85% {
            opacity:1
          }
          85.5% {
            opacity:1
          }
          86% {
            opacity:1
          }
          86.5% {
            opacity:1
          }
          87% {
            opacity:1
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1
          }
          88.5% {
            opacity:1
          }
          89% {
            opacity:1
          }
          89.5% {
            opacity:1
          }
          90% {
            opacity:1
          }
          90.5% {
            opacity:1
          }
          91% {
            opacity:1
          }
          91.5% {
            opacity:1
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes solid5 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1
          }
          1% {
            opacity:1
          }
          1.5% {
            opacity:1
          }
          2% {
            opacity:1
          }
          2.5% {
            opacity:1
          }
          3% {
            opacity:1
          }
          3.5% {
            opacity:1
          }
          4% {
            opacity:1
          }
          4.5% {
            opacity:1
          }
          5% {
            opacity:1
          }
          5.5% {
            opacity:1
          }
          6% {
            opacity:1
          }
          6.5% {
            opacity:1
          }
          7% {
            opacity:1
          }
          7.5% {
            opacity:1
          }
          8% {
            opacity:1
          }
          8.5% {
            opacity:1
          }
          9% {
            opacity:1
          }
          9.5% {
            opacity:1
          }
          10% {
            opacity:1
          }
          10.5% {
            opacity:1
          }
          11% {
            opacity:1
          }
          11.5% {
            opacity:1
          }
          12% {
            opacity:1
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1
          }
          13.5% {
            opacity:1
          }
          14% {
            opacity:1
          }
          14.5% {
            opacity:1
          }
          15% {
            opacity:1
          }
          15.5% {
            opacity:1
          }
          16% {
            opacity:1
          }
          16.5% {
            opacity:1
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:1
          }
          92.5% {
            opacity:1
          }
          93% {
            opacity:1
          }
          93.5% {
            opacity:1
          }
          94% {
            opacity:1
          }
          94.5% {
            opacity:1
          }
          95% {
            opacity:1
          }
          95.5% {
            opacity:1
          }
          96% {
            opacity:1
          }
          96.5% {
            opacity:1
          }
          97% {
            opacity:1
          }
          97.5% {
            opacity:1
          }
          98% {
            opacity:1
          }
          98.5% {
            opacity:1
          }
          99% {
            opacity:1
          }
          99.5% {
            opacity:1
          }
          100% {
            opacity:1
          }
        }
        .liquid {
          fill:#9c572c
        }
        .solid-mark {
          fill:#c7d3c4
        }
        .jacket {
          fill:#355961;
          stroke:#77c9ef;
          stroke-width:.7
        }
        .water {
          fill:none;
          stroke:#a3dcea;
          stroke-width:1
        }
        .mold {
          animation:mold 2s ease-in-out infinite
        }
        .roll circle {
          fill:#274538;
          stroke:#89ac98;
          stroke-width:1
        }
        .roll path {
          fill:none;
          stroke:#6f9880;
          stroke-width:1.2
        }
        .left {
          animation:left 4.398s linear infinite
        }
        .right {
          animation:right 4.398s linear infinite
        }
        .sprays {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
          stroke-dasharray:3 2;
          animation:sprays 1s linear infinite
        }
        @keyframes mold {
          0%,100% {
            transform:translateY(-.8px)
          }
          50% {
            transform:translateY(.8px)
          }
        }
        @keyframes left {
          to {
            transform:rotate(360deg)
          }
        }
        @keyframes right {
          to {
            transform:rotate(-360deg)
          }
        }
        @keyframes sprays {
          to {
            stroke-dashoffset:-10
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Continuous Casting">
        <defs>
          <clipPath id="strand">
            <rect x="56" y="43" width="28" height="87"/>
          </clipPath>
        </defs>
        <path class="ink muted" d="M38,13V30H66V40M102,13V30H74V40"/>
        <path fill="#efb071" d="M39,18H101V29H73V43H67V29H39Z"/>
        <rect x="56" y="43" width="28" height="87" fill="#92745a"/>
        <path fill="#efb071" d="M56.000,43.000L57.710,44.000L58.419,45.000L58.962,46.000L59.421,47.000L59.825,48.000L60.190,49.000L60.525,50.000L60.838,51.000L61.131,52.000L61.409,53.000L61.673,54.000L61.925,55.000L62.167,56.000L62.400,57.000L62.624,58.000L62.841,59.000L63.052,60.000L63.256,61.000L63.455,62.000L63.649,63.000L63.838,64.000L64.022,65.000L64.203,66.000L64.379,67.000L64.552,68.000L64.721,69.000L64.887,70.000L65.050,71.000L65.211,72.000L65.368,73.000L65.523,74.000L65.675,75.000L65.825,76.000L65.973,77.000L66.119,78.000L66.262,79.000L66.404,80.000L66.543,81.000L66.681,82.000L66.817,83.000L66.952,84.000L67.084,85.000L67.216,86.000L67.345,87.000L67.474,88.000L67.600,89.000L67.726,90.000L67.850,91.000L67.973,92.000L68.094,93.000L68.215,94.000L68.334,95.000L68.452,96.000L68.569,97.000L68.684,98.000L68.799,99.000L68.913,100.000L69.026,101.000L69.138,102.000L69.248,103.000L69.358,104.000L69.467,105.000L69.576,106.000L69.683,107.000L69.789,108.000L69.895,109.000L70.000,110.000L70.000,110.000L70.105,109.000L70.211,108.000L70.317,107.000L70.424,106.000L70.533,105.000L70.642,104.000L70.752,103.000L70.862,102.000L70.974,101.000L71.087,100.000L71.201,99.000L71.316,98.000L71.431,97.000L71.548,96.000L71.666,95.000L71.785,94.000L71.906,93.000L72.027,92.000L72.150,91.000L72.274,90.000L72.400,89.000L72.526,88.000L72.655,87.000L72.784,86.000L72.916,85.000L73.048,84.000L73.183,83.000L73.319,82.000L73.457,81.000L73.596,80.000L73.738,79.000L73.881,78.000L74.027,77.000L74.175,76.000L74.325,75.000L74.477,74.000L74.632,73.000L74.789,72.000L74.950,71.000L75.113,70.000L75.279,69.000L75.448,68.000L75.621,67.000L75.797,66.000L75.978,65.000L76.162,64.000L76.351,63.000L76.545,62.000L76.744,61.000L76.948,60.000L77.159,59.000L77.376,58.000L77.600,57.000L77.833,56.000L78.075,55.000L78.327,54.000L78.591,53.000L78.869,52.000L79.162,51.000L79.475,50.000L79.810,49.000L80.175,48.000L80.579,47.000L81.038,46.000L81.581,45.000L82.290,44.000L84.000,43.000Z"/>
        <g clip-path="url(#strand)">
          <g class="tracer t0" style="transform:translate(60px,60px)">
            <circle class="liquid" r="1.5" style="opacity:0"/>
            <path class="solid-mark" d="M-1.5,-1.5H1.5V1.5H-1.5Z" style="opacity:1"/>
          </g>
          <g class="tracer t1" style="transform:translate(65px,70px)">
            <circle class="liquid" r="1.5" style="opacity:1"/>
            <path class="solid-mark" d="M-1.5,-1.5H1.5V1.5H-1.5Z" style="opacity:0"/>
          </g>
          <g class="tracer t2" style="transform:translate(70px,80px)">
            <circle class="liquid" r="1.5" style="opacity:1"/>
            <path class="solid-mark" d="M-1.5,-1.5H1.5V1.5H-1.5Z" style="opacity:0"/>
          </g>
          <g class="tracer t3" style="transform:translate(75px,90px)">
            <circle class="liquid" r="1.5" style="opacity:0"/>
            <path class="solid-mark" d="M-1.5,-1.5H1.5V1.5H-1.5Z" style="opacity:1"/>
          </g>
          <g class="tracer t4" style="transform:translate(80px,100px)">
            <circle class="liquid" r="1.5" style="opacity:0"/>
            <path class="solid-mark" d="M-1.5,-1.5H1.5V1.5H-1.5Z" style="opacity:1"/>
          </g>
          <g class="tracer t5" style="transform:translate(70px,110px)">
            <circle class="liquid" r="1.5" style="opacity:0"/>
            <path class="solid-mark" d="M-1.5,-1.5H1.5V1.5H-1.5Z" style="opacity:1"/>
          </g>
        </g>
        <g class="mold">
          <path class="jacket" d="M48,38H56V68H48ZM84,38H92V68H84Z"/>
          <path class="water" d="M51,41V65H54V41M87,41V65H90V41"/>
        </g>
        <g class="roll left" style="transform-origin:49px 84px">
          <circle cx="49" cy="84" r="7"/>
          <path d="M44,84H54M49,79V89"/>
        </g>
        <g class="roll right" style="transform-origin:91px 84px">
          <circle cx="91" cy="84" r="7"/>
          <path d="M86,84H96M91,79V89"/>
        </g>
        <g class="roll left" style="transform-origin:49px 104px">
          <circle cx="49" cy="104" r="7"/>
          <path d="M44,104H54M49,99V109"/>
        </g>
        <g class="roll right" style="transform-origin:91px 104px">
          <circle cx="91" cy="104" r="7"/>
          <path d="M86,104H96M91,99V109"/>
        </g>
        <path class="sprays" d="M35,72L55,76M35,75L55,76M105,72L85,76M105,75L85,76M35,92L55,96M35,95L55,96M105,92L85,96M105,95L85,96"/>
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

if (!customElements.get("concept-continuous-casting")) {
  customElements.define("concept-continuous-casting", ConceptContinuousCasting);
}
