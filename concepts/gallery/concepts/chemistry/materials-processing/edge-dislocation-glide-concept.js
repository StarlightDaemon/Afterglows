// Edge Dislocation Glide. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEdgeDislocationGlide extends HTMLElement {
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
        .bonds {
          fill:none;
          stroke:#385d50;
          stroke-width:1
        }
        .atoms {
          fill:none;
          stroke:#9fd3b6;
          stroke-width:4.6;
          stroke-linecap:round
        }
        .plane {
          stroke:#9b9063;
          stroke-width:.8;
          stroke-dasharray:3 4
        }
        .core {
          fill:none;
          stroke:#e6bd76;
          stroke-width:2.4;
          stroke-linecap:round;
          opacity:0
        }
        .surface {
          fill:none;
          stroke:#d6bb87;
          stroke-width:1.7;
          animation:surface 16s linear infinite
        }
        .load {
          fill:none;
          stroke:#a9c2a8;
          stroke-width:1.5;
          opacity:0;
          animation:load 16s linear infinite
        }
        .connectA0 {
          opacity:1;
          animation:connectA0 16s linear infinite,vconnectA0 16s step-end infinite
        }
        @keyframes connectA0 {
          0% {
            d:path('M18.982,60L20,78')
          }
          2% {
            d:path('M18.982,60L20,78')
          }
          4% {
            d:path('M18.982,60L20,78')
          }
          6% {
            d:path('M18.982,60L20,78')
          }
          8% {
            d:path('M18.982,60L20,78')
          }
          10% {
            d:path('M18.982,60L20,78')
          }
          12% {
            d:path('M18.982,60L20,78')
          }
          14% {
            d:path('M18.982,60L20,78')
          }
          16% {
            d:path('M19.242,60L20,78')
          }
          18% {
            d:path('M19.586,60L20,78')
          }
          20% {
            d:path('M19.776,60L20,78')
          }
          22% {
            d:path('M19.880,60L20,78')
          }
          24% {
            d:path('M19.936,60L20,78')
          }
          26% {
            d:path('M19.966,60L20,78')
          }
          28% {
            d:path('M19.982,60L20,78')
          }
          30% {
            d:path('M19.990,60L20,78')
          }
          32% {
            d:path('M19.995,60L20,78')
          }
          34% {
            d:path('M19.997,60L20,78')
          }
          36% {
            d:path('M19.999,60L20,78')
          }
          38% {
            d:path('M19.999,60L20,78')
          }
          40% {
            d:path('M20.000,60L20,78')
          }
          42% {
            d:path('M20.000,60L20,78')
          }
          44% {
            d:path('M20.000,60L20,78')
          }
          46% {
            d:path('M20.000,60L20,78')
          }
          48% {
            d:path('M20.000,60L20,78')
          }
          50% {
            d:path('M20.000,60L20,78')
          }
          52% {
            d:path('M20.000,60L20,78')
          }
          54% {
            d:path('M20.000,60L20,78')
          }
          56% {
            d:path('M20.000,60L20,78')
          }
          58% {
            d:path('M20.000,60L20,78')
          }
          60% {
            d:path('M20.000,60L20,78')
          }
          62% {
            d:path('M20.000,60L20,78')
          }
          64% {
            d:path('M20.000,60L20,78')
          }
          66% {
            d:path('M20.000,60L20,78')
          }
          68% {
            d:path('M20.000,60L20,78')
          }
          70% {
            d:path('M20.000,60L20,78')
          }
          72% {
            d:path('M20.000,60L20,78')
          }
          74% {
            d:path('M20.000,60L20,78')
          }
          76% {
            d:path('M20.000,60L20,78')
          }
          78% {
            d:path('M20.000,60L20,78')
          }
          80% {
            d:path('M20.000,60L20,78')
          }
          82% {
            d:path('M20.000,60L20,78')
          }
          84% {
            d:path('M20.000,60L20,78')
          }
          86% {
            d:path('M20.000,60L20,78')
          }
          88% {
            d:path('M20.000,60L20,78')
          }
          90% {
            d:path('M20.000,60L20,78')
          }
          92% {
            d:path('M20.000,60L20,78')
          }
          94% {
            d:path('M20.000,60L20,78')
          }
          96% {
            d:path('M20.000,60L20,78')
          }
          98% {
            d:path('M20.000,60L20,78')
          }
          100% {
            d:path('M20.000,60L20,78')
          }
        }
        @keyframes vconnectA0 {
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
            opacity:1
          }
        }
        .connectA1 {
          opacity:1;
          animation:connectA1 16s linear infinite,vconnectA1 16s step-end infinite
        }
        @keyframes connectA1 {
          0% {
            d:path('M27.000,60L34,78')
          }
          2% {
            d:path('M27.000,60L34,78')
          }
          4% {
            d:path('M27.000,60L34,78')
          }
          6% {
            d:path('M27.000,60L34,78')
          }
          8% {
            d:path('M27.000,60L34,78')
          }
          10% {
            d:path('M27.000,60L34,78')
          }
          12% {
            d:path('M27.000,60L34,78')
          }
          14% {
            d:path('M27.000,60L34,78')
          }
          16% {
            d:path('M28.093,60L34,78')
          }
          18% {
            d:path('M30.080,60L34,78')
          }
          20% {
            d:path('M31.597,60L34,78')
          }
          22% {
            d:path('M32.608,60L34,78')
          }
          24% {
            d:path('M33.222,60L34,78')
          }
          26% {
            d:path('M33.575,60L34,78')
          }
          28% {
            d:path('M33.770,60L34,78')
          }
          30% {
            d:path('M33.877,60L34,78')
          }
          32% {
            d:path('M33.934,60L34,78')
          }
          34% {
            d:path('M33.965,60L34,78')
          }
          36% {
            d:path('M33.981,60L34,78')
          }
          38% {
            d:path('M33.990,60L34,78')
          }
          40% {
            d:path('M33.995,60L34,78')
          }
          42% {
            d:path('M33.997,60L34,78')
          }
          44% {
            d:path('M33.998,60L34,78')
          }
          46% {
            d:path('M33.999,60L34,78')
          }
          48% {
            d:path('M34.000,60L34,78')
          }
          50% {
            d:path('M34.000,60L34,78')
          }
          52% {
            d:path('M34.000,60L34,78')
          }
          54% {
            d:path('M34.000,60L34,78')
          }
          56% {
            d:path('M34.000,60L34,78')
          }
          58% {
            d:path('M34.000,60L34,78')
          }
          60% {
            d:path('M34.000,60L34,78')
          }
          62% {
            d:path('M34.000,60L34,78')
          }
          64% {
            d:path('M34.000,60L34,78')
          }
          66% {
            d:path('M34.000,60L34,78')
          }
          68% {
            d:path('M34.000,60L34,78')
          }
          70% {
            d:path('M34.000,60L34,78')
          }
          72% {
            d:path('M34.000,60L34,78')
          }
          74% {
            d:path('M34.000,60L34,78')
          }
          76% {
            d:path('M34.000,60L34,78')
          }
          78% {
            d:path('M34.000,60L34,78')
          }
          80% {
            d:path('M34.000,60L34,78')
          }
          82% {
            d:path('M34.000,60L34,78')
          }
          84% {
            d:path('M34.000,60L34,78')
          }
          86% {
            d:path('M34.000,60L34,78')
          }
          88% {
            d:path('M34.000,60L34,78')
          }
          90% {
            d:path('M34.000,60L34,78')
          }
          92% {
            d:path('M34.000,60L34,78')
          }
          94% {
            d:path('M34.000,60L34,78')
          }
          96% {
            d:path('M34.000,60L34,78')
          }
          98% {
            d:path('M34.000,60L34,78')
          }
          100% {
            d:path('M34.000,60L34,78')
          }
        }
        @keyframes vconnectA1 {
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
        .connectB1 {
          opacity:0;
          animation:connectB1 16s linear infinite,vconnectB1 16s step-end infinite
        }
        @keyframes connectB1 {
          0% {
            d:path('M27.000,60L20,78')
          }
          2% {
            d:path('M27.000,60L20,78')
          }
          4% {
            d:path('M27.000,60L20,78')
          }
          6% {
            d:path('M27.000,60L20,78')
          }
          8% {
            d:path('M27.000,60L20,78')
          }
          10% {
            d:path('M27.000,60L20,78')
          }
          12% {
            d:path('M27.000,60L20,78')
          }
          14% {
            d:path('M27.000,60L20,78')
          }
          16% {
            d:path('M28.093,60L20,78')
          }
          18% {
            d:path('M30.080,60L20,78')
          }
          20% {
            d:path('M31.597,60L20,78')
          }
          22% {
            d:path('M32.608,60L20,78')
          }
          24% {
            d:path('M33.222,60L20,78')
          }
          26% {
            d:path('M33.575,60L20,78')
          }
          28% {
            d:path('M33.770,60L20,78')
          }
          30% {
            d:path('M33.877,60L20,78')
          }
          32% {
            d:path('M33.934,60L20,78')
          }
          34% {
            d:path('M33.965,60L20,78')
          }
          36% {
            d:path('M33.981,60L20,78')
          }
          38% {
            d:path('M33.990,60L20,78')
          }
          40% {
            d:path('M33.995,60L20,78')
          }
          42% {
            d:path('M33.997,60L20,78')
          }
          44% {
            d:path('M33.998,60L20,78')
          }
          46% {
            d:path('M33.999,60L20,78')
          }
          48% {
            d:path('M34.000,60L20,78')
          }
          50% {
            d:path('M34.000,60L20,78')
          }
          52% {
            d:path('M34.000,60L20,78')
          }
          54% {
            d:path('M34.000,60L20,78')
          }
          56% {
            d:path('M34.000,60L20,78')
          }
          58% {
            d:path('M34.000,60L20,78')
          }
          60% {
            d:path('M34.000,60L20,78')
          }
          62% {
            d:path('M34.000,60L20,78')
          }
          64% {
            d:path('M34.000,60L20,78')
          }
          66% {
            d:path('M34.000,60L20,78')
          }
          68% {
            d:path('M34.000,60L20,78')
          }
          70% {
            d:path('M34.000,60L20,78')
          }
          72% {
            d:path('M34.000,60L20,78')
          }
          74% {
            d:path('M34.000,60L20,78')
          }
          76% {
            d:path('M34.000,60L20,78')
          }
          78% {
            d:path('M34.000,60L20,78')
          }
          80% {
            d:path('M34.000,60L20,78')
          }
          82% {
            d:path('M34.000,60L20,78')
          }
          84% {
            d:path('M34.000,60L20,78')
          }
          86% {
            d:path('M34.000,60L20,78')
          }
          88% {
            d:path('M34.000,60L20,78')
          }
          90% {
            d:path('M34.000,60L20,78')
          }
          92% {
            d:path('M34.000,60L20,78')
          }
          94% {
            d:path('M34.000,60L20,78')
          }
          96% {
            d:path('M34.000,60L20,78')
          }
          98% {
            d:path('M34.000,60L20,78')
          }
          100% {
            d:path('M34.000,60L20,78')
          }
        }
        @keyframes vconnectB1 {
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
            opacity:0
          }
        }
        .connectA2 {
          opacity:1;
          animation:connectA2 16s linear infinite,vconnectA2 16s step-end infinite
        }
        @keyframes connectA2 {
          0% {
            d:path('M35.018,60L48,78')
          }
          2% {
            d:path('M35.018,60L48,78')
          }
          4% {
            d:path('M35.018,60L48,78')
          }
          6% {
            d:path('M35.018,60L48,78')
          }
          8% {
            d:path('M35.018,60L48,78')
          }
          10% {
            d:path('M35.018,60L48,78')
          }
          12% {
            d:path('M35.018,60L48,78')
          }
          14% {
            d:path('M35.018,60L48,78')
          }
          16% {
            d:path('M35.358,60L48,78')
          }
          18% {
            d:path('M36.350,60L48,78')
          }
          20% {
            d:path('M37.844,60L48,78')
          }
          22% {
            d:path('M39.815,60L48,78')
          }
          24% {
            d:path('M42.000,60L48,78')
          }
          26% {
            d:path('M44.003,60L48,78')
          }
          28% {
            d:path('M45.542,60L48,78')
          }
          30% {
            d:path('M46.574,60L48,78')
          }
          32% {
            d:path('M47.202,60L48,78')
          }
          34% {
            d:path('M47.563,60L48,78')
          }
          36% {
            d:path('M47.764,60L48,78')
          }
          38% {
            d:path('M47.873,60L48,78')
          }
          40% {
            d:path('M47.932,60L48,78')
          }
          42% {
            d:path('M47.964,60L48,78')
          }
          44% {
            d:path('M47.981,60L48,78')
          }
          46% {
            d:path('M47.990,60L48,78')
          }
          48% {
            d:path('M47.995,60L48,78')
          }
          50% {
            d:path('M47.997,60L48,78')
          }
          52% {
            d:path('M47.998,60L48,78')
          }
          54% {
            d:path('M47.999,60L48,78')
          }
          56% {
            d:path('M48.000,60L48,78')
          }
          58% {
            d:path('M48.000,60L48,78')
          }
          60% {
            d:path('M48.000,60L48,78')
          }
          62% {
            d:path('M48.000,60L48,78')
          }
          64% {
            d:path('M48.000,60L48,78')
          }
          66% {
            d:path('M48.000,60L48,78')
          }
          68% {
            d:path('M48.000,60L48,78')
          }
          70% {
            d:path('M48.000,60L48,78')
          }
          72% {
            d:path('M48.000,60L48,78')
          }
          74% {
            d:path('M48.000,60L48,78')
          }
          76% {
            d:path('M48.000,60L48,78')
          }
          78% {
            d:path('M48.000,60L48,78')
          }
          80% {
            d:path('M48.000,60L48,78')
          }
          82% {
            d:path('M48.000,60L48,78')
          }
          84% {
            d:path('M48.000,60L48,78')
          }
          86% {
            d:path('M48.000,60L48,78')
          }
          88% {
            d:path('M48.000,60L48,78')
          }
          90% {
            d:path('M48.000,60L48,78')
          }
          92% {
            d:path('M48.000,60L48,78')
          }
          94% {
            d:path('M48.000,60L48,78')
          }
          96% {
            d:path('M48.000,60L48,78')
          }
          98% {
            d:path('M48.000,60L48,78')
          }
          100% {
            d:path('M48.000,60L48,78')
          }
        }
        @keyframes vconnectA2 {
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
            opacity:1
          }
        }
        .connectB2 {
          opacity:0;
          animation:connectB2 16s linear infinite,vconnectB2 16s step-end infinite
        }
        @keyframes connectB2 {
          0% {
            d:path('M35.018,60L34,78')
          }
          2% {
            d:path('M35.018,60L34,78')
          }
          4% {
            d:path('M35.018,60L34,78')
          }
          6% {
            d:path('M35.018,60L34,78')
          }
          8% {
            d:path('M35.018,60L34,78')
          }
          10% {
            d:path('M35.018,60L34,78')
          }
          12% {
            d:path('M35.018,60L34,78')
          }
          14% {
            d:path('M35.018,60L34,78')
          }
          16% {
            d:path('M35.358,60L34,78')
          }
          18% {
            d:path('M36.350,60L34,78')
          }
          20% {
            d:path('M37.844,60L34,78')
          }
          22% {
            d:path('M39.815,60L34,78')
          }
          24% {
            d:path('M42.000,60L34,78')
          }
          26% {
            d:path('M44.003,60L34,78')
          }
          28% {
            d:path('M45.542,60L34,78')
          }
          30% {
            d:path('M46.574,60L34,78')
          }
          32% {
            d:path('M47.202,60L34,78')
          }
          34% {
            d:path('M47.563,60L34,78')
          }
          36% {
            d:path('M47.764,60L34,78')
          }
          38% {
            d:path('M47.873,60L34,78')
          }
          40% {
            d:path('M47.932,60L34,78')
          }
          42% {
            d:path('M47.964,60L34,78')
          }
          44% {
            d:path('M47.981,60L34,78')
          }
          46% {
            d:path('M47.990,60L34,78')
          }
          48% {
            d:path('M47.995,60L34,78')
          }
          50% {
            d:path('M47.997,60L34,78')
          }
          52% {
            d:path('M47.998,60L34,78')
          }
          54% {
            d:path('M47.999,60L34,78')
          }
          56% {
            d:path('M48.000,60L34,78')
          }
          58% {
            d:path('M48.000,60L34,78')
          }
          60% {
            d:path('M48.000,60L34,78')
          }
          62% {
            d:path('M48.000,60L34,78')
          }
          64% {
            d:path('M48.000,60L34,78')
          }
          66% {
            d:path('M48.000,60L34,78')
          }
          68% {
            d:path('M48.000,60L34,78')
          }
          70% {
            d:path('M48.000,60L34,78')
          }
          72% {
            d:path('M48.000,60L34,78')
          }
          74% {
            d:path('M48.000,60L34,78')
          }
          76% {
            d:path('M48.000,60L34,78')
          }
          78% {
            d:path('M48.000,60L34,78')
          }
          80% {
            d:path('M48.000,60L34,78')
          }
          82% {
            d:path('M48.000,60L34,78')
          }
          84% {
            d:path('M48.000,60L34,78')
          }
          86% {
            d:path('M48.000,60L34,78')
          }
          88% {
            d:path('M48.000,60L34,78')
          }
          90% {
            d:path('M48.000,60L34,78')
          }
          92% {
            d:path('M48.000,60L34,78')
          }
          94% {
            d:path('M48.000,60L34,78')
          }
          96% {
            d:path('M48.000,60L34,78')
          }
          98% {
            d:path('M48.000,60L34,78')
          }
          100% {
            d:path('M48.000,60L34,78')
          }
        }
        @keyframes vconnectB2 {
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
        .connectA3 {
          opacity:1;
          animation:connectA3 16s linear infinite,vconnectA3 16s step-end infinite
        }
        @keyframes connectA3 {
          0% {
            d:path('M48.086,60L62,78')
          }
          2% {
            d:path('M48.086,60L62,78')
          }
          4% {
            d:path('M48.086,60L62,78')
          }
          6% {
            d:path('M48.086,60L62,78')
          }
          8% {
            d:path('M48.086,60L62,78')
          }
          10% {
            d:path('M48.086,60L62,78')
          }
          12% {
            d:path('M48.086,60L62,78')
          }
          14% {
            d:path('M48.086,60L62,78')
          }
          16% {
            d:path('M48.117,60L62,78')
          }
          18% {
            d:path('M48.218,60L62,78')
          }
          20% {
            d:path('M48.404,60L62,78')
          }
          22% {
            d:path('M48.739,60L62,78')
          }
          24% {
            d:path('M49.326,60L62,78')
          }
          26% {
            d:path('M50.297,60L62,78')
          }
          28% {
            d:path('M51.769,60L62,78')
          }
          30% {
            d:path('M53.723,60L62,78')
          }
          32% {
            d:path('M55.907,60L62,78')
          }
          34% {
            d:path('M57.925,60L62,78')
          }
          36% {
            d:path('M59.487,60L62,78')
          }
          38% {
            d:path('M60.538,60L62,78')
          }
          40% {
            d:path('M61.181,60L62,78')
          }
          42% {
            d:path('M61.552,60L62,78')
          }
          44% {
            d:path('M61.757,60L62,78')
          }
          46% {
            d:path('M61.870,60L62,78')
          }
          48% {
            d:path('M61.930,60L62,78')
          }
          50% {
            d:path('M61.963,60L62,78')
          }
          52% {
            d:path('M61.980,60L62,78')
          }
          54% {
            d:path('M61.989,60L62,78')
          }
          56% {
            d:path('M61.994,60L62,78')
          }
          58% {
            d:path('M61.997,60L62,78')
          }
          60% {
            d:path('M61.998,60L62,78')
          }
          62% {
            d:path('M61.999,60L62,78')
          }
          64% {
            d:path('M62.000,60L62,78')
          }
          66% {
            d:path('M62.000,60L62,78')
          }
          68% {
            d:path('M62.000,60L62,78')
          }
          70% {
            d:path('M62.000,60L62,78')
          }
          72% {
            d:path('M62.000,60L62,78')
          }
          74% {
            d:path('M62.000,60L62,78')
          }
          76% {
            d:path('M62.000,60L62,78')
          }
          78% {
            d:path('M62.000,60L62,78')
          }
          80% {
            d:path('M62.000,60L62,78')
          }
          82% {
            d:path('M62.000,60L62,78')
          }
          84% {
            d:path('M62.000,60L62,78')
          }
          86% {
            d:path('M62.000,60L62,78')
          }
          88% {
            d:path('M62.000,60L62,78')
          }
          90% {
            d:path('M62.000,60L62,78')
          }
          92% {
            d:path('M62.000,60L62,78')
          }
          94% {
            d:path('M62.000,60L62,78')
          }
          96% {
            d:path('M62.000,60L62,78')
          }
          98% {
            d:path('M62.000,60L62,78')
          }
          100% {
            d:path('M62.000,60L62,78')
          }
        }
        @keyframes vconnectA3 {
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
            opacity:1
          }
        }
        .connectB3 {
          opacity:0;
          animation:connectB3 16s linear infinite,vconnectB3 16s step-end infinite
        }
        @keyframes connectB3 {
          0% {
            d:path('M48.086,60L48,78')
          }
          2% {
            d:path('M48.086,60L48,78')
          }
          4% {
            d:path('M48.086,60L48,78')
          }
          6% {
            d:path('M48.086,60L48,78')
          }
          8% {
            d:path('M48.086,60L48,78')
          }
          10% {
            d:path('M48.086,60L48,78')
          }
          12% {
            d:path('M48.086,60L48,78')
          }
          14% {
            d:path('M48.086,60L48,78')
          }
          16% {
            d:path('M48.117,60L48,78')
          }
          18% {
            d:path('M48.218,60L48,78')
          }
          20% {
            d:path('M48.404,60L48,78')
          }
          22% {
            d:path('M48.739,60L48,78')
          }
          24% {
            d:path('M49.326,60L48,78')
          }
          26% {
            d:path('M50.297,60L48,78')
          }
          28% {
            d:path('M51.769,60L48,78')
          }
          30% {
            d:path('M53.723,60L48,78')
          }
          32% {
            d:path('M55.907,60L48,78')
          }
          34% {
            d:path('M57.925,60L48,78')
          }
          36% {
            d:path('M59.487,60L48,78')
          }
          38% {
            d:path('M60.538,60L48,78')
          }
          40% {
            d:path('M61.181,60L48,78')
          }
          42% {
            d:path('M61.552,60L48,78')
          }
          44% {
            d:path('M61.757,60L48,78')
          }
          46% {
            d:path('M61.870,60L48,78')
          }
          48% {
            d:path('M61.930,60L48,78')
          }
          50% {
            d:path('M61.963,60L48,78')
          }
          52% {
            d:path('M61.980,60L48,78')
          }
          54% {
            d:path('M61.989,60L48,78')
          }
          56% {
            d:path('M61.994,60L48,78')
          }
          58% {
            d:path('M61.997,60L48,78')
          }
          60% {
            d:path('M61.998,60L48,78')
          }
          62% {
            d:path('M61.999,60L48,78')
          }
          64% {
            d:path('M62.000,60L48,78')
          }
          66% {
            d:path('M62.000,60L48,78')
          }
          68% {
            d:path('M62.000,60L48,78')
          }
          70% {
            d:path('M62.000,60L48,78')
          }
          72% {
            d:path('M62.000,60L48,78')
          }
          74% {
            d:path('M62.000,60L48,78')
          }
          76% {
            d:path('M62.000,60L48,78')
          }
          78% {
            d:path('M62.000,60L48,78')
          }
          80% {
            d:path('M62.000,60L48,78')
          }
          82% {
            d:path('M62.000,60L48,78')
          }
          84% {
            d:path('M62.000,60L48,78')
          }
          86% {
            d:path('M62.000,60L48,78')
          }
          88% {
            d:path('M62.000,60L48,78')
          }
          90% {
            d:path('M62.000,60L48,78')
          }
          92% {
            d:path('M62.000,60L48,78')
          }
          94% {
            d:path('M62.000,60L48,78')
          }
          96% {
            d:path('M62.000,60L48,78')
          }
          98% {
            d:path('M62.000,60L48,78')
          }
          100% {
            d:path('M62.000,60L48,78')
          }
        }
        @keyframes vconnectB3 {
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
            opacity:0
          }
        }
        .connectA4 {
          opacity:1;
          animation:connectA4 16s linear infinite,vconnectA4 16s step-end infinite
        }
        @keyframes connectA4 {
          0% {
            d:path('M62.007,60L76,78')
          }
          2% {
            d:path('M62.007,60L76,78')
          }
          4% {
            d:path('M62.007,60L76,78')
          }
          6% {
            d:path('M62.007,60L76,78')
          }
          8% {
            d:path('M62.007,60L76,78')
          }
          10% {
            d:path('M62.007,60L76,78')
          }
          12% {
            d:path('M62.007,60L76,78')
          }
          14% {
            d:path('M62.007,60L76,78')
          }
          16% {
            d:path('M62.009,60L76,78')
          }
          18% {
            d:path('M62.017,60L76,78')
          }
          20% {
            d:path('M62.033,60L76,78')
          }
          22% {
            d:path('M62.061,60L76,78')
          }
          24% {
            d:path('M62.114,60L76,78')
          }
          26% {
            d:path('M62.212,60L76,78')
          }
          28% {
            d:path('M62.393,60L76,78')
          }
          30% {
            d:path('M62.720,60L76,78')
          }
          32% {
            d:path('M63.293,60L76,78')
          }
          34% {
            d:path('M64.245,60L76,78')
          }
          36% {
            d:path('M65.695,60L76,78')
          }
          38% {
            d:path('M67.631,60L76,78')
          }
          40% {
            d:path('M69.813,60L76,78')
          }
          42% {
            d:path('M71.846,60L76,78')
          }
          44% {
            d:path('M73.430,60L76,78')
          }
          46% {
            d:path('M74.502,60L76,78')
          }
          48% {
            d:path('M75.160,60L76,78')
          }
          50% {
            d:path('M75.540,60L76,78')
          }
          52% {
            d:path('M75.751,60L76,78')
          }
          54% {
            d:path('M75.866,60L76,78')
          }
          56% {
            d:path('M75.928,60L76,78')
          }
          58% {
            d:path('M75.962,60L76,78')
          }
          60% {
            d:path('M75.980,60L76,78')
          }
          62% {
            d:path('M75.989,60L76,78')
          }
          64% {
            d:path('M75.994,60L76,78')
          }
          66% {
            d:path('M75.997,60L76,78')
          }
          68% {
            d:path('M75.998,60L76,78')
          }
          70% {
            d:path('M75.999,60L76,78')
          }
          72% {
            d:path('M76.000,60L76,78')
          }
          74% {
            d:path('M76.000,60L76,78')
          }
          76% {
            d:path('M76.000,60L76,78')
          }
          78% {
            d:path('M76.000,60L76,78')
          }
          80% {
            d:path('M76.000,60L76,78')
          }
          82% {
            d:path('M76.000,60L76,78')
          }
          84% {
            d:path('M76.000,60L76,78')
          }
          86% {
            d:path('M76.000,60L76,78')
          }
          88% {
            d:path('M76.000,60L76,78')
          }
          90% {
            d:path('M76.000,60L76,78')
          }
          92% {
            d:path('M76.000,60L76,78')
          }
          94% {
            d:path('M76.000,60L76,78')
          }
          96% {
            d:path('M76.000,60L76,78')
          }
          98% {
            d:path('M76.000,60L76,78')
          }
          100% {
            d:path('M76.000,60L76,78')
          }
        }
        @keyframes vconnectA4 {
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
            opacity:1
          }
        }
        .connectB4 {
          opacity:0;
          animation:connectB4 16s linear infinite,vconnectB4 16s step-end infinite
        }
        @keyframes connectB4 {
          0% {
            d:path('M62.007,60L62,78')
          }
          2% {
            d:path('M62.007,60L62,78')
          }
          4% {
            d:path('M62.007,60L62,78')
          }
          6% {
            d:path('M62.007,60L62,78')
          }
          8% {
            d:path('M62.007,60L62,78')
          }
          10% {
            d:path('M62.007,60L62,78')
          }
          12% {
            d:path('M62.007,60L62,78')
          }
          14% {
            d:path('M62.007,60L62,78')
          }
          16% {
            d:path('M62.009,60L62,78')
          }
          18% {
            d:path('M62.017,60L62,78')
          }
          20% {
            d:path('M62.033,60L62,78')
          }
          22% {
            d:path('M62.061,60L62,78')
          }
          24% {
            d:path('M62.114,60L62,78')
          }
          26% {
            d:path('M62.212,60L62,78')
          }
          28% {
            d:path('M62.393,60L62,78')
          }
          30% {
            d:path('M62.720,60L62,78')
          }
          32% {
            d:path('M63.293,60L62,78')
          }
          34% {
            d:path('M64.245,60L62,78')
          }
          36% {
            d:path('M65.695,60L62,78')
          }
          38% {
            d:path('M67.631,60L62,78')
          }
          40% {
            d:path('M69.813,60L62,78')
          }
          42% {
            d:path('M71.846,60L62,78')
          }
          44% {
            d:path('M73.430,60L62,78')
          }
          46% {
            d:path('M74.502,60L62,78')
          }
          48% {
            d:path('M75.160,60L62,78')
          }
          50% {
            d:path('M75.540,60L62,78')
          }
          52% {
            d:path('M75.751,60L62,78')
          }
          54% {
            d:path('M75.866,60L62,78')
          }
          56% {
            d:path('M75.928,60L62,78')
          }
          58% {
            d:path('M75.962,60L62,78')
          }
          60% {
            d:path('M75.980,60L62,78')
          }
          62% {
            d:path('M75.989,60L62,78')
          }
          64% {
            d:path('M75.994,60L62,78')
          }
          66% {
            d:path('M75.997,60L62,78')
          }
          68% {
            d:path('M75.998,60L62,78')
          }
          70% {
            d:path('M75.999,60L62,78')
          }
          72% {
            d:path('M76.000,60L62,78')
          }
          74% {
            d:path('M76.000,60L62,78')
          }
          76% {
            d:path('M76.000,60L62,78')
          }
          78% {
            d:path('M76.000,60L62,78')
          }
          80% {
            d:path('M76.000,60L62,78')
          }
          82% {
            d:path('M76.000,60L62,78')
          }
          84% {
            d:path('M76.000,60L62,78')
          }
          86% {
            d:path('M76.000,60L62,78')
          }
          88% {
            d:path('M76.000,60L62,78')
          }
          90% {
            d:path('M76.000,60L62,78')
          }
          92% {
            d:path('M76.000,60L62,78')
          }
          94% {
            d:path('M76.000,60L62,78')
          }
          96% {
            d:path('M76.000,60L62,78')
          }
          98% {
            d:path('M76.000,60L62,78')
          }
          100% {
            d:path('M76.000,60L62,78')
          }
        }
        @keyframes vconnectB4 {
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
            opacity:0
          }
        }
        .connectA5 {
          opacity:1;
          animation:connectA5 16s linear infinite,vconnectA5 16s step-end infinite
        }
        @keyframes connectA5 {
          0% {
            d:path('M76.001,60L90,78')
          }
          2% {
            d:path('M76.001,60L90,78')
          }
          4% {
            d:path('M76.001,60L90,78')
          }
          6% {
            d:path('M76.001,60L90,78')
          }
          8% {
            d:path('M76.001,60L90,78')
          }
          10% {
            d:path('M76.001,60L90,78')
          }
          12% {
            d:path('M76.001,60L90,78')
          }
          14% {
            d:path('M76.001,60L90,78')
          }
          16% {
            d:path('M76.001,60L90,78')
          }
          18% {
            d:path('M76.001,60L90,78')
          }
          20% {
            d:path('M76.003,60L90,78')
          }
          22% {
            d:path('M76.005,60L90,78')
          }
          24% {
            d:path('M76.009,60L90,78')
          }
          26% {
            d:path('M76.017,60L90,78')
          }
          28% {
            d:path('M76.032,60L90,78')
          }
          30% {
            d:path('M76.059,60L90,78')
          }
          32% {
            d:path('M76.111,60L90,78')
          }
          34% {
            d:path('M76.207,60L90,78')
          }
          36% {
            d:path('M76.383,60L90,78')
          }
          38% {
            d:path('M76.702,60L90,78')
          }
          40% {
            d:path('M77.262,60L90,78')
          }
          42% {
            d:path('M78.195,60L90,78')
          }
          44% {
            d:path('M79.621,60L90,78')
          }
          46% {
            d:path('M81.540,60L90,78')
          }
          48% {
            d:path('M83.719,60L90,78')
          }
          50% {
            d:path('M85.766,60L90,78')
          }
          52% {
            d:path('M87.373,60L90,78')
          }
          54% {
            d:path('M88.466,60L90,78')
          }
          56% {
            d:path('M89.138,60L90,78')
          }
          58% {
            d:path('M89.527,60L90,78')
          }
          60% {
            d:path('M89.744,60L90,78')
          }
          62% {
            d:path('M89.862,60L90,78')
          }
          64% {
            d:path('M89.926,60L90,78')
          }
          66% {
            d:path('M89.961,60L90,78')
          }
          68% {
            d:path('M89.979,60L90,78')
          }
          70% {
            d:path('M89.989,60L90,78')
          }
          72% {
            d:path('M89.994,60L90,78')
          }
          74% {
            d:path('M89.997,60L90,78')
          }
          76% {
            d:path('M89.998,60L90,78')
          }
          78% {
            d:path('M89.999,60L90,78')
          }
          80% {
            d:path('M90.000,60L90,78')
          }
          82% {
            d:path('M90.000,60L90,78')
          }
          84% {
            d:path('M90.000,60L90,78')
          }
          86% {
            d:path('M90.000,60L90,78')
          }
          88% {
            d:path('M90.000,60L90,78')
          }
          90% {
            d:path('M90.000,60L90,78')
          }
          92% {
            d:path('M90.000,60L90,78')
          }
          94% {
            d:path('M90.000,60L90,78')
          }
          96% {
            d:path('M90.000,60L90,78')
          }
          98% {
            d:path('M90.000,60L90,78')
          }
          100% {
            d:path('M90.000,60L90,78')
          }
        }
        @keyframes vconnectA5 {
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
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
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
            opacity:1
          }
        }
        .connectB5 {
          opacity:0;
          animation:connectB5 16s linear infinite,vconnectB5 16s step-end infinite
        }
        @keyframes connectB5 {
          0% {
            d:path('M76.001,60L76,78')
          }
          2% {
            d:path('M76.001,60L76,78')
          }
          4% {
            d:path('M76.001,60L76,78')
          }
          6% {
            d:path('M76.001,60L76,78')
          }
          8% {
            d:path('M76.001,60L76,78')
          }
          10% {
            d:path('M76.001,60L76,78')
          }
          12% {
            d:path('M76.001,60L76,78')
          }
          14% {
            d:path('M76.001,60L76,78')
          }
          16% {
            d:path('M76.001,60L76,78')
          }
          18% {
            d:path('M76.001,60L76,78')
          }
          20% {
            d:path('M76.003,60L76,78')
          }
          22% {
            d:path('M76.005,60L76,78')
          }
          24% {
            d:path('M76.009,60L76,78')
          }
          26% {
            d:path('M76.017,60L76,78')
          }
          28% {
            d:path('M76.032,60L76,78')
          }
          30% {
            d:path('M76.059,60L76,78')
          }
          32% {
            d:path('M76.111,60L76,78')
          }
          34% {
            d:path('M76.207,60L76,78')
          }
          36% {
            d:path('M76.383,60L76,78')
          }
          38% {
            d:path('M76.702,60L76,78')
          }
          40% {
            d:path('M77.262,60L76,78')
          }
          42% {
            d:path('M78.195,60L76,78')
          }
          44% {
            d:path('M79.621,60L76,78')
          }
          46% {
            d:path('M81.540,60L76,78')
          }
          48% {
            d:path('M83.719,60L76,78')
          }
          50% {
            d:path('M85.766,60L76,78')
          }
          52% {
            d:path('M87.373,60L76,78')
          }
          54% {
            d:path('M88.466,60L76,78')
          }
          56% {
            d:path('M89.138,60L76,78')
          }
          58% {
            d:path('M89.527,60L76,78')
          }
          60% {
            d:path('M89.744,60L76,78')
          }
          62% {
            d:path('M89.862,60L76,78')
          }
          64% {
            d:path('M89.926,60L76,78')
          }
          66% {
            d:path('M89.961,60L76,78')
          }
          68% {
            d:path('M89.979,60L76,78')
          }
          70% {
            d:path('M89.989,60L76,78')
          }
          72% {
            d:path('M89.994,60L76,78')
          }
          74% {
            d:path('M89.997,60L76,78')
          }
          76% {
            d:path('M89.998,60L76,78')
          }
          78% {
            d:path('M89.999,60L76,78')
          }
          80% {
            d:path('M90.000,60L76,78')
          }
          82% {
            d:path('M90.000,60L76,78')
          }
          84% {
            d:path('M90.000,60L76,78')
          }
          86% {
            d:path('M90.000,60L76,78')
          }
          88% {
            d:path('M90.000,60L76,78')
          }
          90% {
            d:path('M90.000,60L76,78')
          }
          92% {
            d:path('M90.000,60L76,78')
          }
          94% {
            d:path('M90.000,60L76,78')
          }
          96% {
            d:path('M90.000,60L76,78')
          }
          98% {
            d:path('M90.000,60L76,78')
          }
          100% {
            d:path('M90.000,60L76,78')
          }
        }
        @keyframes vconnectB5 {
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
            opacity:0
          }
        }
        .connectA6 {
          opacity:1;
          animation:connectA6 16s linear infinite,vconnectA6 16s step-end infinite
        }
        @keyframes connectA6 {
          0% {
            d:path('M90.000,60L104,78')
          }
          2% {
            d:path('M90.000,60L104,78')
          }
          4% {
            d:path('M90.000,60L104,78')
          }
          6% {
            d:path('M90.000,60L104,78')
          }
          8% {
            d:path('M90.000,60L104,78')
          }
          10% {
            d:path('M90.000,60L104,78')
          }
          12% {
            d:path('M90.000,60L104,78')
          }
          14% {
            d:path('M90.000,60L104,78')
          }
          16% {
            d:path('M90.000,60L104,78')
          }
          18% {
            d:path('M90.000,60L104,78')
          }
          20% {
            d:path('M90.000,60L104,78')
          }
          22% {
            d:path('M90.000,60L104,78')
          }
          24% {
            d:path('M90.001,60L104,78')
          }
          26% {
            d:path('M90.001,60L104,78')
          }
          28% {
            d:path('M90.002,60L104,78')
          }
          30% {
            d:path('M90.005,60L104,78')
          }
          32% {
            d:path('M90.009,60L104,78')
          }
          34% {
            d:path('M90.016,60L104,78')
          }
          36% {
            d:path('M90.031,60L104,78')
          }
          38% {
            d:path('M90.058,60L104,78')
          }
          40% {
            d:path('M90.108,60L104,78')
          }
          42% {
            d:path('M90.201,60L104,78')
          }
          44% {
            d:path('M90.373,60L104,78')
          }
          46% {
            d:path('M90.684,60L104,78')
          }
          48% {
            d:path('M91.231,60L104,78')
          }
          50% {
            d:path('M92.145,60L104,78')
          }
          52% {
            d:path('M93.549,60L104,78')
          }
          54% {
            d:path('M95.449,60L104,78')
          }
          56% {
            d:path('M97.625,60L104,78')
          }
          58% {
            d:path('M99.686,60L104,78')
          }
          60% {
            d:path('M101.315,60L104,78')
          }
          62% {
            d:path('M102.428,60L104,78')
          }
          64% {
            d:path('M103.116,60L104,78')
          }
          66% {
            d:path('M103.515,60L104,78')
          }
          68% {
            d:path('M103.737,60L104,78')
          }
          70% {
            d:path('M103.859,60L104,78')
          }
          72% {
            d:path('M103.924,60L104,78')
          }
          74% {
            d:path('M103.960,60L104,78')
          }
          76% {
            d:path('M103.978,60L104,78')
          }
          78% {
            d:path('M103.989,60L104,78')
          }
          80% {
            d:path('M103.994,60L104,78')
          }
          82% {
            d:path('M103.997,60L104,78')
          }
          84% {
            d:path('M103.998,60L104,78')
          }
          86% {
            d:path('M103.998,60L104,78')
          }
          88% {
            d:path('M103.999,60L104,78')
          }
          90% {
            d:path('M104.000,60L104,78')
          }
          92% {
            d:path('M104.000,60L104,78')
          }
          94% {
            d:path('M104.000,60L104,78')
          }
          96% {
            d:path('M104.000,60L104,78')
          }
          98% {
            d:path('M104.000,60L104,78')
          }
          100% {
            d:path('M104.000,60L104,78')
          }
        }
        @keyframes vconnectA6 {
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
        .connectB6 {
          opacity:0;
          animation:connectB6 16s linear infinite,vconnectB6 16s step-end infinite
        }
        @keyframes connectB6 {
          0% {
            d:path('M90.000,60L90,78')
          }
          2% {
            d:path('M90.000,60L90,78')
          }
          4% {
            d:path('M90.000,60L90,78')
          }
          6% {
            d:path('M90.000,60L90,78')
          }
          8% {
            d:path('M90.000,60L90,78')
          }
          10% {
            d:path('M90.000,60L90,78')
          }
          12% {
            d:path('M90.000,60L90,78')
          }
          14% {
            d:path('M90.000,60L90,78')
          }
          16% {
            d:path('M90.000,60L90,78')
          }
          18% {
            d:path('M90.000,60L90,78')
          }
          20% {
            d:path('M90.000,60L90,78')
          }
          22% {
            d:path('M90.000,60L90,78')
          }
          24% {
            d:path('M90.001,60L90,78')
          }
          26% {
            d:path('M90.001,60L90,78')
          }
          28% {
            d:path('M90.002,60L90,78')
          }
          30% {
            d:path('M90.005,60L90,78')
          }
          32% {
            d:path('M90.009,60L90,78')
          }
          34% {
            d:path('M90.016,60L90,78')
          }
          36% {
            d:path('M90.031,60L90,78')
          }
          38% {
            d:path('M90.058,60L90,78')
          }
          40% {
            d:path('M90.108,60L90,78')
          }
          42% {
            d:path('M90.201,60L90,78')
          }
          44% {
            d:path('M90.373,60L90,78')
          }
          46% {
            d:path('M90.684,60L90,78')
          }
          48% {
            d:path('M91.231,60L90,78')
          }
          50% {
            d:path('M92.145,60L90,78')
          }
          52% {
            d:path('M93.549,60L90,78')
          }
          54% {
            d:path('M95.449,60L90,78')
          }
          56% {
            d:path('M97.625,60L90,78')
          }
          58% {
            d:path('M99.686,60L90,78')
          }
          60% {
            d:path('M101.315,60L90,78')
          }
          62% {
            d:path('M102.428,60L90,78')
          }
          64% {
            d:path('M103.116,60L90,78')
          }
          66% {
            d:path('M103.515,60L90,78')
          }
          68% {
            d:path('M103.737,60L90,78')
          }
          70% {
            d:path('M103.859,60L90,78')
          }
          72% {
            d:path('M103.924,60L90,78')
          }
          74% {
            d:path('M103.960,60L90,78')
          }
          76% {
            d:path('M103.978,60L90,78')
          }
          78% {
            d:path('M103.989,60L90,78')
          }
          80% {
            d:path('M103.994,60L90,78')
          }
          82% {
            d:path('M103.997,60L90,78')
          }
          84% {
            d:path('M103.998,60L90,78')
          }
          86% {
            d:path('M103.998,60L90,78')
          }
          88% {
            d:path('M103.999,60L90,78')
          }
          90% {
            d:path('M104.000,60L90,78')
          }
          92% {
            d:path('M104.000,60L90,78')
          }
          94% {
            d:path('M104.000,60L90,78')
          }
          96% {
            d:path('M104.000,60L90,78')
          }
          98% {
            d:path('M104.000,60L90,78')
          }
          100% {
            d:path('M104.000,60L90,78')
          }
        }
        @keyframes vconnectB6 {
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
            opacity:1
          }
          50.5% {
            opacity:1
          }
          51% {
            opacity:1
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
            opacity:0
          }
        }
        .connectA7 {
          opacity:1;
          animation:connectA7 16s linear infinite,vconnectA7 16s step-end infinite
        }
        @keyframes connectA7 {
          0% {
            d:path('M104.000,60L118,78')
          }
          2% {
            d:path('M104.000,60L118,78')
          }
          4% {
            d:path('M104.000,60L118,78')
          }
          6% {
            d:path('M104.000,60L118,78')
          }
          8% {
            d:path('M104.000,60L118,78')
          }
          10% {
            d:path('M104.000,60L118,78')
          }
          12% {
            d:path('M104.000,60L118,78')
          }
          14% {
            d:path('M104.000,60L118,78')
          }
          16% {
            d:path('M104.000,60L118,78')
          }
          18% {
            d:path('M104.000,60L118,78')
          }
          20% {
            d:path('M104.000,60L118,78')
          }
          22% {
            d:path('M104.000,60L118,78')
          }
          24% {
            d:path('M104.000,60L118,78')
          }
          26% {
            d:path('M104.000,60L118,78')
          }
          28% {
            d:path('M104.000,60L118,78')
          }
          30% {
            d:path('M104.000,60L118,78')
          }
          32% {
            d:path('M104.001,60L118,78')
          }
          34% {
            d:path('M104.001,60L118,78')
          }
          36% {
            d:path('M104.002,60L118,78')
          }
          38% {
            d:path('M104.005,60L118,78')
          }
          40% {
            d:path('M104.009,60L118,78')
          }
          42% {
            d:path('M104.016,60L118,78')
          }
          44% {
            d:path('M104.030,60L118,78')
          }
          46% {
            d:path('M104.056,60L118,78')
          }
          48% {
            d:path('M104.105,60L118,78')
          }
          50% {
            d:path('M104.196,60L118,78')
          }
          52% {
            d:path('M104.363,60L118,78')
          }
          54% {
            d:path('M104.667,60L118,78')
          }
          56% {
            d:path('M105.201,60L118,78')
          }
          58% {
            d:path('M106.096,60L118,78')
          }
          60% {
            d:path('M107.478,60L118,78')
          }
          62% {
            d:path('M109.359,60L118,78')
          }
          64% {
            d:path('M111.531,60L118,78')
          }
          66% {
            d:path('M113.604,60L118,78')
          }
          68% {
            d:path('M115.255,60L118,78')
          }
          70% {
            d:path('M116.390,60L118,78')
          }
          72% {
            d:path('M117.094,60L118,78')
          }
          74% {
            d:path('M117.502,60L118,78')
          }
          76% {
            d:path('M117.730,60L118,78')
          }
          78% {
            d:path('M117.855,60L118,78')
          }
          80% {
            d:path('M117.922,60L118,78')
          }
          82% {
            d:path('M117.959,60L118,78')
          }
          84% {
            d:path('M117.969,60L118,78')
          }
          86% {
            d:path('M117.979,60L118,78')
          }
          88% {
            d:path('M117.990,60L118,78')
          }
          90% {
            d:path('M118.000,60L118,78')
          }
          92% {
            d:path('M118.000,60L118,78')
          }
          94% {
            d:path('M118.000,60L118,78')
          }
          96% {
            d:path('M118.000,60L118,78')
          }
          98% {
            d:path('M118.000,60L118,78')
          }
          100% {
            d:path('M118.000,60L118,78')
          }
        }
        @keyframes vconnectA7 {
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
        .connectB7 {
          opacity:0;
          animation:connectB7 16s linear infinite,vconnectB7 16s step-end infinite
        }
        @keyframes connectB7 {
          0% {
            d:path('M104.000,60L104,78')
          }
          2% {
            d:path('M104.000,60L104,78')
          }
          4% {
            d:path('M104.000,60L104,78')
          }
          6% {
            d:path('M104.000,60L104,78')
          }
          8% {
            d:path('M104.000,60L104,78')
          }
          10% {
            d:path('M104.000,60L104,78')
          }
          12% {
            d:path('M104.000,60L104,78')
          }
          14% {
            d:path('M104.000,60L104,78')
          }
          16% {
            d:path('M104.000,60L104,78')
          }
          18% {
            d:path('M104.000,60L104,78')
          }
          20% {
            d:path('M104.000,60L104,78')
          }
          22% {
            d:path('M104.000,60L104,78')
          }
          24% {
            d:path('M104.000,60L104,78')
          }
          26% {
            d:path('M104.000,60L104,78')
          }
          28% {
            d:path('M104.000,60L104,78')
          }
          30% {
            d:path('M104.000,60L104,78')
          }
          32% {
            d:path('M104.001,60L104,78')
          }
          34% {
            d:path('M104.001,60L104,78')
          }
          36% {
            d:path('M104.002,60L104,78')
          }
          38% {
            d:path('M104.005,60L104,78')
          }
          40% {
            d:path('M104.009,60L104,78')
          }
          42% {
            d:path('M104.016,60L104,78')
          }
          44% {
            d:path('M104.030,60L104,78')
          }
          46% {
            d:path('M104.056,60L104,78')
          }
          48% {
            d:path('M104.105,60L104,78')
          }
          50% {
            d:path('M104.196,60L104,78')
          }
          52% {
            d:path('M104.363,60L104,78')
          }
          54% {
            d:path('M104.667,60L104,78')
          }
          56% {
            d:path('M105.201,60L104,78')
          }
          58% {
            d:path('M106.096,60L104,78')
          }
          60% {
            d:path('M107.478,60L104,78')
          }
          62% {
            d:path('M109.359,60L104,78')
          }
          64% {
            d:path('M111.531,60L104,78')
          }
          66% {
            d:path('M113.604,60L104,78')
          }
          68% {
            d:path('M115.255,60L104,78')
          }
          70% {
            d:path('M116.390,60L104,78')
          }
          72% {
            d:path('M117.094,60L104,78')
          }
          74% {
            d:path('M117.502,60L104,78')
          }
          76% {
            d:path('M117.730,60L104,78')
          }
          78% {
            d:path('M117.855,60L104,78')
          }
          80% {
            d:path('M117.922,60L104,78')
          }
          82% {
            d:path('M117.959,60L104,78')
          }
          84% {
            d:path('M117.969,60L104,78')
          }
          86% {
            d:path('M117.979,60L104,78')
          }
          88% {
            d:path('M117.990,60L104,78')
          }
          90% {
            d:path('M118.000,60L104,78')
          }
          92% {
            d:path('M118.000,60L104,78')
          }
          94% {
            d:path('M118.000,60L104,78')
          }
          96% {
            d:path('M118.000,60L104,78')
          }
          98% {
            d:path('M118.000,60L104,78')
          }
          100% {
            d:path('M118.000,60L104,78')
          }
        }
        @keyframes vconnectB7 {
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
        .connectB8 {
          opacity:0;
          animation:connectB8 16s linear infinite,vconnectB8 16s step-end infinite
        }
        @keyframes connectB8 {
          0% {
            d:path('M118.000,60L118,78')
          }
          2% {
            d:path('M118.000,60L118,78')
          }
          4% {
            d:path('M118.000,60L118,78')
          }
          6% {
            d:path('M118.000,60L118,78')
          }
          8% {
            d:path('M118.000,60L118,78')
          }
          10% {
            d:path('M118.000,60L118,78')
          }
          12% {
            d:path('M118.000,60L118,78')
          }
          14% {
            d:path('M118.000,60L118,78')
          }
          16% {
            d:path('M118.000,60L118,78')
          }
          18% {
            d:path('M118.000,60L118,78')
          }
          20% {
            d:path('M118.000,60L118,78')
          }
          22% {
            d:path('M118.000,60L118,78')
          }
          24% {
            d:path('M118.000,60L118,78')
          }
          26% {
            d:path('M118.000,60L118,78')
          }
          28% {
            d:path('M118.000,60L118,78')
          }
          30% {
            d:path('M118.000,60L118,78')
          }
          32% {
            d:path('M118.000,60L118,78')
          }
          34% {
            d:path('M118.000,60L118,78')
          }
          36% {
            d:path('M118.000,60L118,78')
          }
          38% {
            d:path('M118.000,60L118,78')
          }
          40% {
            d:path('M118.001,60L118,78')
          }
          42% {
            d:path('M118.001,60L118,78')
          }
          44% {
            d:path('M118.002,60L118,78')
          }
          46% {
            d:path('M118.004,60L118,78')
          }
          48% {
            d:path('M118.008,60L118,78')
          }
          50% {
            d:path('M118.016,60L118,78')
          }
          52% {
            d:path('M118.029,60L118,78')
          }
          54% {
            d:path('M118.055,60L118,78')
          }
          56% {
            d:path('M118.102,60L118,78')
          }
          58% {
            d:path('M118.191,60L118,78')
          }
          60% {
            d:path('M118.354,60L118,78')
          }
          62% {
            d:path('M118.650,60L118,78')
          }
          64% {
            d:path('M119.171,60L118,78')
          }
          66% {
            d:path('M120.048,60L118,78')
          }
          68% {
            d:path('M121.407,60L118,78')
          }
          70% {
            d:path('M123.270,60L118,78')
          }
          72% {
            d:path('M125.436,60L118,78')
          }
          74% {
            d:path('M127.522,60L118,78')
          }
          76% {
            d:path('M129.195,60L118,78')
          }
          78% {
            d:path('M130.351,60L118,78')
          }
          80% {
            d:path('M131.070,60L118,78')
          }
          82% {
            d:path('M131.489,60L118,78')
          }
          84% {
            d:path('M131.617,60L118,78')
          }
          86% {
            d:path('M131.744,60L118,78')
          }
          88% {
            d:path('M131.872,60L118,78')
          }
          90% {
            d:path('M132.000,60L118,78')
          }
          92% {
            d:path('M132.000,60L118,78')
          }
          94% {
            d:path('M132.000,60L118,78')
          }
          96% {
            d:path('M132.000,60L118,78')
          }
          98% {
            d:path('M132.000,60L118,78')
          }
          100% {
            d:path('M132.000,60L118,78')
          }
        }
        @keyframes vconnectB8 {
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
        @keyframes surface {
          0%,82% {
            opacity:0
          }
          92%,100% {
            opacity:1
          }
        }
        @keyframes load {
          0%,10%,87%,100% {
            opacity:0
          }
          20%,76% {
            opacity:1
          }
        }
        .row0 {
          animation:row0 16s linear infinite
        }
        @keyframes row0 {
          0% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          2% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          4% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          6% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          8% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          10% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          12% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          14% {
            d:path('M17.079,32.000L27.000,32.000L36.921,32.000L48.910,32.000L62.252,32.000L76.067,32.000L90.018,32.000L104.005,32.000L118.001,32.000')
          }
          16% {
            d:path('M17.442,32.000L27.576,32.000L37.320,32.000L49.060,32.000L62.296,32.000L76.079,32.000L90.021,32.000L104.006,32.000L118.001,32.000')
          }
          18% {
            d:path('M18.061,32.000L28.697,32.000L38.225,32.000L49.432,32.000L62.408,32.000L76.110,32.000L90.029,32.000L104.008,32.000L118.002,32.000')
          }
          20% {
            d:path('M18.550,32.000L29.733,32.000L39.256,32.000L49.915,32.000L62.561,32.000L76.152,32.000L90.041,32.000L104.011,32.000L118.003,32.000')
          }
          22% {
            d:path('M18.926,32.000L30.644,32.000L40.375,32.000L50.528,32.000L62.769,32.000L76.211,32.000L90.056,32.000L104.015,32.000L118.004,32.000')
          }
          24% {
            d:path('M19.210,32.000L31.412,32.000L41.526,32.000L51.284,32.000L63.046,32.000L76.292,32.000L90.078,32.000L104.021,32.000L118.005,32.000')
          }
          26% {
            d:path('M19.423,32.000L32.037,32.000L42.650,32.000L52.184,32.000L63.414,32.000L76.403,32.000L90.108,32.000L104.029,32.000L118.008,32.000')
          }
          28% {
            d:path('M19.580,32.000L32.531,32.000L43.690,32.000L53.210,32.000L63.892,32.000L76.554,32.000L90.150,32.000L104.040,32.000L118.011,32.000')
          }
          30% {
            d:path('M19.696,32.000L32.912,32.000L44.608,32.000L54.325,32.000L64.499,32.000L76.758,32.000L90.208,32.000L104.055,32.000L118.015,32.000')
          }
          32% {
            d:path('M19.780,32.000L33.200,32.000L45.382,32.000L55.477,32.000L65.248,32.000L77.033,32.000L90.288,32.000L104.077,32.000L118.020,32.000')
          }
          34% {
            d:path('M19.841,32.000L33.415,32.000L46.013,32.000L56.603,32.000L66.142,32.000L77.396,32.000L90.397,32.000L104.107,32.000L118.028,32.000')
          }
          36% {
            d:path('M19.885,32.000L33.575,32.000L46.512,32.000L57.648,32.000L67.163,32.000L77.869,32.000L90.546,32.000L104.148,32.000L118.039,32.000')
          }
          38% {
            d:path('M19.917,32.000L33.691,32.000L46.897,32.000L58.571,32.000L68.276,32.000L78.470,32.000L90.748,32.000L104.205,32.000L118.055,32.000')
          }
          40% {
            d:path('M19.940,32.000L33.777,32.000L47.189,32.000L59.352,32.000L69.427,32.000L79.213,32.000L91.019,32.000L104.284,32.000L118.076,32.000')
          }
          42% {
            d:path('M19.957,32.000L33.839,32.000L47.407,32.000L59.989,32.000L70.556,32.000L80.101,32.000L91.378,32.000L104.392,32.000L118.105,32.000')
          }
          44% {
            d:path('M19.969,32.000L33.884,32.000L47.569,32.000L60.493,32.000L71.605,32.000L81.117,32.000L91.846,32.000L104.539,32.000L118.146,32.000')
          }
          46% {
            d:path('M19.978,32.000L33.916,32.000L47.687,32.000L60.883,32.000L72.534,32.000L82.227,32.000L92.441,32.000L104.738,32.000L118.202,32.000')
          }
          48% {
            d:path('M19.984,32.000L33.940,32.000L47.774,32.000L61.178,32.000L73.321,32.000L83.378,32.000L93.178,32.000L105.006,32.000L118.280,32.000')
          }
          50% {
            d:path('M19.989,32.000L33.957,32.000L47.836,32.000L61.399,32.000L73.964,32.000L84.508,32.000L94.060,32.000L105.361,32.000L118.386,32.000')
          }
          52% {
            d:path('M19.992,32.000L33.969,32.000L47.882,32.000L61.563,32.000L74.474,32.000L85.562,32.000L95.071,32.000L105.823,32.000L118.531,32.000')
          }
          54% {
            d:path('M19.994,32.000L33.977,32.000L47.915,32.000L61.683,32.000L74.868,32.000L86.497,32.000L96.178,32.000L106.412,32.000L118.728,32.000')
          }
          56% {
            d:path('M19.996,32.000L33.984,32.000L47.939,32.000L61.770,32.000L75.167,32.000L87.290,32.000L97.328,32.000L107.143,32.000L118.993,32.000')
          }
          58% {
            d:path('M19.997,32.000L33.988,32.000L47.956,32.000L61.834,32.000L75.391,32.000L87.940,32.000L98.461,32.000L108.019,32.000L119.343,32.000')
          }
          60% {
            d:path('M19.998,32.000L33.992,32.000L47.968,32.000L61.880,32.000L75.557,32.000L88.454,32.000L99.519,32.000L109.025,32.000L119.801,32.000')
          }
          62% {
            d:path('M19.998,32.000L33.994,32.000L47.977,32.000L61.914,32.000L75.678,32.000L88.853,32.000L100.459,32.000L110.129,32.000L120.384,32.000')
          }
          64% {
            d:path('M19.999,32.000L33.996,32.000L47.984,32.000L61.938,32.000L75.767,32.000L89.156,32.000L101.259,32.000L111.278,32.000L121.109,32.000')
          }
          66% {
            d:path('M19.999,32.000L33.997,32.000L47.988,32.000L61.955,32.000L75.832,32.000L89.383,32.000L101.914,32.000L112.413,32.000L121.978,32.000')
          }
          68% {
            d:path('M19.999,32.000L33.998,32.000L47.991,32.000L61.968,32.000L75.879,32.000L89.550,32.000L102.435,32.000L113.475,32.000L122.979,32.000')
          }
          70% {
            d:path('M20.000,32.000L33.998,32.000L47.994,32.000L61.977,32.000L75.913,32.000L89.674,32.000L102.838,32.000L114.422,32.000L124.080,32.000')
          }
          72% {
            d:path('M20.000,32.000L33.999,32.000L47.996,32.000L61.983,32.000L75.937,32.000L89.764,32.000L103.144,32.000L115.228,32.000L125.229,32.000')
          }
          74% {
            d:path('M20.000,32.000L33.999,32.000L47.997,32.000L61.988,32.000L75.955,32.000L89.829,32.000L103.374,32.000L115.889,32.000L126.365,32.000')
          }
          76% {
            d:path('M20.000,32.000L33.999,32.000L47.998,32.000L61.991,32.000L75.967,32.000L89.877,32.000L103.544,32.000L116.415,32.000L127.432,32.000')
          }
          78% {
            d:path('M20.000,32.000L34.000,32.000L47.998,32.000L61.994,32.000L75.976,32.000L89.911,32.000L103.669,32.000L116.823,32.000L128.384,32.000')
          }
          80% {
            d:path('M20.000,32.000L34.000,32.000L47.999,32.000L61.996,32.000L75.983,32.000L89.936,32.000L103.761,32.000L117.133,32.000L129.196,32.000')
          }
          82% {
            d:path('M20.000,32.000L34.000,32.000L47.999,32.000L61.997,32.000L75.988,32.000L89.954,32.000L103.827,32.000L117.366,32.000L129.863,32.000')
          }
          84% {
            d:path('M20.000,32.000L34.000,32.000L47.999,32.000L61.998,32.000L75.991,32.000L89.965,32.000L103.870,32.000L117.524,32.000L130.398,32.000')
          }
          86% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L61.998,32.000L75.994,32.000L89.977,32.000L103.913,32.000L117.683,32.000L130.932,32.000')
          }
          88% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L61.999,32.000L75.997,32.000L89.988,32.000L103.957,32.000L117.841,32.000L131.466,32.000')
          }
          90% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000')
          }
          92% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000')
          }
          94% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000')
          }
          96% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000')
          }
          98% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000')
          }
          100% {
            d:path('M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000')
          }
        }
        .atomrow0 {
          animation:atomrow0 16s linear infinite
        }
        @keyframes atomrow0 {
          0% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          2% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          4% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          6% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          8% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          10% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          12% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          14% {
            d:path('M17.079,32h.001M27.000,32h.001M36.921,32h.001M48.910,32h.001M62.252,32h.001M76.067,32h.001M90.018,32h.001M104.005,32h.001M118.001,32h.001')
          }
          16% {
            d:path('M17.442,32h.001M27.576,32h.001M37.320,32h.001M49.060,32h.001M62.296,32h.001M76.079,32h.001M90.021,32h.001M104.006,32h.001M118.001,32h.001')
          }
          18% {
            d:path('M18.061,32h.001M28.697,32h.001M38.225,32h.001M49.432,32h.001M62.408,32h.001M76.110,32h.001M90.029,32h.001M104.008,32h.001M118.002,32h.001')
          }
          20% {
            d:path('M18.550,32h.001M29.733,32h.001M39.256,32h.001M49.915,32h.001M62.561,32h.001M76.152,32h.001M90.041,32h.001M104.011,32h.001M118.003,32h.001')
          }
          22% {
            d:path('M18.926,32h.001M30.644,32h.001M40.375,32h.001M50.528,32h.001M62.769,32h.001M76.211,32h.001M90.056,32h.001M104.015,32h.001M118.004,32h.001')
          }
          24% {
            d:path('M19.210,32h.001M31.412,32h.001M41.526,32h.001M51.284,32h.001M63.046,32h.001M76.292,32h.001M90.078,32h.001M104.021,32h.001M118.005,32h.001')
          }
          26% {
            d:path('M19.423,32h.001M32.037,32h.001M42.650,32h.001M52.184,32h.001M63.414,32h.001M76.403,32h.001M90.108,32h.001M104.029,32h.001M118.008,32h.001')
          }
          28% {
            d:path('M19.580,32h.001M32.531,32h.001M43.690,32h.001M53.210,32h.001M63.892,32h.001M76.554,32h.001M90.150,32h.001M104.040,32h.001M118.011,32h.001')
          }
          30% {
            d:path('M19.696,32h.001M32.912,32h.001M44.608,32h.001M54.325,32h.001M64.499,32h.001M76.758,32h.001M90.208,32h.001M104.055,32h.001M118.015,32h.001')
          }
          32% {
            d:path('M19.780,32h.001M33.200,32h.001M45.382,32h.001M55.477,32h.001M65.248,32h.001M77.033,32h.001M90.288,32h.001M104.077,32h.001M118.020,32h.001')
          }
          34% {
            d:path('M19.841,32h.001M33.415,32h.001M46.013,32h.001M56.603,32h.001M66.142,32h.001M77.396,32h.001M90.397,32h.001M104.107,32h.001M118.028,32h.001')
          }
          36% {
            d:path('M19.885,32h.001M33.575,32h.001M46.512,32h.001M57.648,32h.001M67.163,32h.001M77.869,32h.001M90.546,32h.001M104.148,32h.001M118.039,32h.001')
          }
          38% {
            d:path('M19.917,32h.001M33.691,32h.001M46.897,32h.001M58.571,32h.001M68.276,32h.001M78.470,32h.001M90.748,32h.001M104.205,32h.001M118.055,32h.001')
          }
          40% {
            d:path('M19.940,32h.001M33.777,32h.001M47.189,32h.001M59.352,32h.001M69.427,32h.001M79.213,32h.001M91.019,32h.001M104.284,32h.001M118.076,32h.001')
          }
          42% {
            d:path('M19.957,32h.001M33.839,32h.001M47.407,32h.001M59.989,32h.001M70.556,32h.001M80.101,32h.001M91.378,32h.001M104.392,32h.001M118.105,32h.001')
          }
          44% {
            d:path('M19.969,32h.001M33.884,32h.001M47.569,32h.001M60.493,32h.001M71.605,32h.001M81.117,32h.001M91.846,32h.001M104.539,32h.001M118.146,32h.001')
          }
          46% {
            d:path('M19.978,32h.001M33.916,32h.001M47.687,32h.001M60.883,32h.001M72.534,32h.001M82.227,32h.001M92.441,32h.001M104.738,32h.001M118.202,32h.001')
          }
          48% {
            d:path('M19.984,32h.001M33.940,32h.001M47.774,32h.001M61.178,32h.001M73.321,32h.001M83.378,32h.001M93.178,32h.001M105.006,32h.001M118.280,32h.001')
          }
          50% {
            d:path('M19.989,32h.001M33.957,32h.001M47.836,32h.001M61.399,32h.001M73.964,32h.001M84.508,32h.001M94.060,32h.001M105.361,32h.001M118.386,32h.001')
          }
          52% {
            d:path('M19.992,32h.001M33.969,32h.001M47.882,32h.001M61.563,32h.001M74.474,32h.001M85.562,32h.001M95.071,32h.001M105.823,32h.001M118.531,32h.001')
          }
          54% {
            d:path('M19.994,32h.001M33.977,32h.001M47.915,32h.001M61.683,32h.001M74.868,32h.001M86.497,32h.001M96.178,32h.001M106.412,32h.001M118.728,32h.001')
          }
          56% {
            d:path('M19.996,32h.001M33.984,32h.001M47.939,32h.001M61.770,32h.001M75.167,32h.001M87.290,32h.001M97.328,32h.001M107.143,32h.001M118.993,32h.001')
          }
          58% {
            d:path('M19.997,32h.001M33.988,32h.001M47.956,32h.001M61.834,32h.001M75.391,32h.001M87.940,32h.001M98.461,32h.001M108.019,32h.001M119.343,32h.001')
          }
          60% {
            d:path('M19.998,32h.001M33.992,32h.001M47.968,32h.001M61.880,32h.001M75.557,32h.001M88.454,32h.001M99.519,32h.001M109.025,32h.001M119.801,32h.001')
          }
          62% {
            d:path('M19.998,32h.001M33.994,32h.001M47.977,32h.001M61.914,32h.001M75.678,32h.001M88.853,32h.001M100.459,32h.001M110.129,32h.001M120.384,32h.001')
          }
          64% {
            d:path('M19.999,32h.001M33.996,32h.001M47.984,32h.001M61.938,32h.001M75.767,32h.001M89.156,32h.001M101.259,32h.001M111.278,32h.001M121.109,32h.001')
          }
          66% {
            d:path('M19.999,32h.001M33.997,32h.001M47.988,32h.001M61.955,32h.001M75.832,32h.001M89.383,32h.001M101.914,32h.001M112.413,32h.001M121.978,32h.001')
          }
          68% {
            d:path('M19.999,32h.001M33.998,32h.001M47.991,32h.001M61.968,32h.001M75.879,32h.001M89.550,32h.001M102.435,32h.001M113.475,32h.001M122.979,32h.001')
          }
          70% {
            d:path('M20.000,32h.001M33.998,32h.001M47.994,32h.001M61.977,32h.001M75.913,32h.001M89.674,32h.001M102.838,32h.001M114.422,32h.001M124.080,32h.001')
          }
          72% {
            d:path('M20.000,32h.001M33.999,32h.001M47.996,32h.001M61.983,32h.001M75.937,32h.001M89.764,32h.001M103.144,32h.001M115.228,32h.001M125.229,32h.001')
          }
          74% {
            d:path('M20.000,32h.001M33.999,32h.001M47.997,32h.001M61.988,32h.001M75.955,32h.001M89.829,32h.001M103.374,32h.001M115.889,32h.001M126.365,32h.001')
          }
          76% {
            d:path('M20.000,32h.001M33.999,32h.001M47.998,32h.001M61.991,32h.001M75.967,32h.001M89.877,32h.001M103.544,32h.001M116.415,32h.001M127.432,32h.001')
          }
          78% {
            d:path('M20.000,32h.001M34.000,32h.001M47.998,32h.001M61.994,32h.001M75.976,32h.001M89.911,32h.001M103.669,32h.001M116.823,32h.001M128.384,32h.001')
          }
          80% {
            d:path('M20.000,32h.001M34.000,32h.001M47.999,32h.001M61.996,32h.001M75.983,32h.001M89.936,32h.001M103.761,32h.001M117.133,32h.001M129.196,32h.001')
          }
          82% {
            d:path('M20.000,32h.001M34.000,32h.001M47.999,32h.001M61.997,32h.001M75.988,32h.001M89.954,32h.001M103.827,32h.001M117.366,32h.001M129.863,32h.001')
          }
          84% {
            d:path('M20.000,32h.001M34.000,32h.001M47.999,32h.001M61.998,32h.001M75.991,32h.001M89.965,32h.001M103.870,32h.001M117.524,32h.001M130.398,32h.001')
          }
          86% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M61.998,32h.001M75.994,32h.001M89.977,32h.001M103.913,32h.001M117.683,32h.001M130.932,32h.001')
          }
          88% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M61.999,32h.001M75.997,32h.001M89.988,32h.001M103.957,32h.001M117.841,32h.001M131.466,32h.001')
          }
          90% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001')
          }
          92% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001')
          }
          94% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001')
          }
          96% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001')
          }
          98% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001')
          }
          100% {
            d:path('M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001')
          }
        }
        .row1 {
          animation:row1 16s linear infinite
        }
        @keyframes row1 {
          0% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          2% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          4% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          6% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          8% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          10% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          12% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          14% {
            d:path('M17.927,46.000L27.000,46.000L36.073,46.000L48.410,46.000L62.073,46.000L76.013,46.000L90.002,46.000L104.000,46.000L118.000,46.000')
          }
          16% {
            d:path('M18.281,46.000L27.755,46.000L36.485,46.000L48.506,46.000L62.091,46.000L76.016,46.000L90.003,46.000L104.000,46.000L118.000,46.000')
          }
          18% {
            d:path('M18.835,46.000L29.196,46.000L37.494,46.000L48.765,46.000L62.139,46.000L76.024,46.000L90.004,46.000L104.001,46.000L118.000,46.000')
          }
          20% {
            d:path('M19.221,46.000L30.456,46.000L38.746,46.000L49.145,46.000L62.213,46.000L76.038,46.000L90.007,46.000L104.001,46.000L118.000,46.000')
          }
          22% {
            d:path('M19.485,46.000L31.477,46.000L40.181,46.000L49.691,46.000L62.326,46.000L76.058,46.000L90.010,46.000L104.002,46.000L118.000,46.000')
          }
          24% {
            d:path('M19.661,46.000L32.253,46.000L41.690,46.000L50.447,46.000L62.497,46.000L76.089,46.000L90.016,46.000L104.003,46.000L118.000,46.000')
          }
          26% {
            d:path('M19.779,46.000L32.815,46.000L43.137,46.000L51.446,46.000L62.752,46.000L76.137,46.000L90.024,46.000L104.004,46.000L118.001,46.000')
          }
          28% {
            d:path('M19.856,46.000L33.208,46.000L44.407,46.000L52.687,46.000L63.126,46.000L76.210,46.000L90.037,46.000L104.006,46.000L118.001,46.000')
          }
          30% {
            d:path('M19.906,46.000L33.476,46.000L45.438,46.000L54.117,46.000L63.663,46.000L76.321,46.000L90.057,46.000L104.010,46.000L118.002,46.000')
          }
          32% {
            d:path('M19.939,46.000L33.655,46.000L46.224,46.000L55.625,46.000L64.409,46.000L76.488,46.000L90.087,46.000L104.015,46.000L118.003,46.000')
          }
          34% {
            d:path('M19.960,46.000L33.774,46.000L46.794,46.000L57.077,46.000L65.397,46.000L76.738,46.000L90.134,46.000L104.024,46.000L118.004,46.000')
          }
          36% {
            d:path('M19.974,46.000L33.853,46.000L47.194,46.000L58.357,46.000L66.629,46.000L77.107,46.000L90.206,46.000L104.036,46.000L118.006,46.000')
          }
          38% {
            d:path('M19.983,46.000L33.904,46.000L47.466,46.000L59.399,46.000L68.052,46.000L77.636,46.000L90.315,46.000L104.056,46.000L118.010,46.000')
          }
          40% {
            d:path('M19.989,46.000L33.938,46.000L47.649,46.000L60.195,46.000L69.560,46.000L78.372,46.000L90.479,46.000L104.086,46.000L118.015,46.000')
          }
          42% {
            d:path('M19.993,46.000L33.960,46.000L47.770,46.000L60.774,46.000L71.018,46.000L79.350,46.000L90.726,46.000L104.132,46.000L118.023,46.000')
          }
          44% {
            d:path('M19.995,46.000L33.974,46.000L47.850,46.000L61.179,46.000L72.306,46.000L80.572,46.000L91.088,46.000L104.202,46.000L118.036,46.000')
          }
          46% {
            d:path('M19.997,46.000L33.983,46.000L47.902,46.000L61.456,46.000L73.359,46.000L81.988,46.000L91.609,46.000L104.309,46.000L118.055,46.000')
          }
          48% {
            d:path('M19.998,46.000L33.989,46.000L47.937,46.000L61.642,46.000L74.165,46.000L83.495,46.000L92.336,46.000L104.471,46.000L118.084,46.000')
          }
          50% {
            d:path('M19.999,46.000L33.993,46.000L47.959,46.000L61.766,46.000L74.753,46.000L84.958,46.000L93.302,46.000L104.713,46.000L118.129,46.000')
          }
          52% {
            d:path('M19.999,46.000L33.995,46.000L47.973,46.000L61.847,46.000L75.165,46.000L86.255,46.000L94.514,46.000L105.069,46.000L118.198,46.000')
          }
          54% {
            d:path('M19.999,46.000L33.997,46.000L47.983,46.000L61.901,46.000L75.447,46.000L87.319,46.000L95.925,46.000L105.583,46.000L118.303,46.000')
          }
          56% {
            d:path('M20.000,46.000L33.998,46.000L47.989,46.000L61.935,46.000L75.636,46.000L88.135,46.000L97.430,46.000L106.300,46.000L118.462,46.000')
          }
          58% {
            d:path('M20.000,46.000L33.999,46.000L47.993,46.000L61.958,46.000L75.762,46.000L88.731,46.000L98.897,46.000L107.256,46.000L118.700,46.000')
          }
          60% {
            d:path('M20.000,46.000L33.999,46.000L47.995,46.000L61.973,46.000L75.844,46.000L89.150,46.000L100.204,46.000L108.457,46.000L119.051,46.000')
          }
          62% {
            d:path('M20.000,46.000L33.999,46.000L47.997,46.000L61.982,46.000L75.899,46.000L89.437,46.000L101.278,46.000L109.861,46.000L119.557,46.000')
          }
          64% {
            d:path('M20.000,46.000L34.000,46.000L47.998,46.000L61.989,46.000L75.934,46.000L89.629,46.000L102.105,46.000L111.365,46.000L120.264,46.000')
          }
          66% {
            d:path('M20.000,46.000L34.000,46.000L47.999,46.000L61.993,46.000L75.957,46.000L89.757,46.000L102.709,46.000L112.837,46.000L121.209,46.000')
          }
          68% {
            d:path('M20.000,46.000L34.000,46.000L47.999,46.000L61.995,46.000L75.972,46.000L89.842,46.000L103.135,46.000L114.152,46.000L122.401,46.000')
          }
          70% {
            d:path('M20.000,46.000L34.000,46.000L47.999,46.000L61.997,46.000L75.982,46.000L89.897,46.000L103.426,46.000L115.237,46.000L123.797,46.000')
          }
          72% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L61.998,46.000L75.988,46.000L89.933,46.000L103.622,46.000L116.074,46.000L125.300,46.000')
          }
          74% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L61.999,46.000L75.992,46.000L89.956,46.000L103.753,46.000L116.687,46.000L126.776,46.000')
          }
          76% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L61.999,46.000L75.995,46.000L89.972,46.000L103.839,46.000L117.120,46.000L128.100,46.000')
          }
          78% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L61.999,46.000L75.997,46.000L89.982,46.000L103.895,46.000L117.416,46.000L129.196,46.000')
          }
          80% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L75.998,46.000L89.988,46.000L103.932,46.000L117.616,46.000L130.043,46.000')
          }
          82% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L75.999,46.000L89.992,46.000L103.956,46.000L117.748,46.000L130.665,46.000')
          }
          84% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L75.999,46.000L89.994,46.000L103.967,46.000L117.811,46.000L130.999,46.000')
          }
          86% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L75.999,46.000L89.996,46.000L103.978,46.000L117.874,46.000L131.333,46.000')
          }
          88% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L89.998,46.000L103.989,46.000L117.937,46.000L131.666,46.000')
          }
          90% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000')
          }
          92% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000')
          }
          94% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000')
          }
          96% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000')
          }
          98% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000')
          }
          100% {
            d:path('M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000')
          }
        }
        .atomrow1 {
          animation:atomrow1 16s linear infinite
        }
        @keyframes atomrow1 {
          0% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          2% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          4% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          6% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          8% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          10% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          12% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          14% {
            d:path('M17.927,46h.001M27.000,46h.001M36.073,46h.001M48.410,46h.001M62.073,46h.001M76.013,46h.001M90.002,46h.001M104.000,46h.001M118.000,46h.001')
          }
          16% {
            d:path('M18.281,46h.001M27.755,46h.001M36.485,46h.001M48.506,46h.001M62.091,46h.001M76.016,46h.001M90.003,46h.001M104.000,46h.001M118.000,46h.001')
          }
          18% {
            d:path('M18.835,46h.001M29.196,46h.001M37.494,46h.001M48.765,46h.001M62.139,46h.001M76.024,46h.001M90.004,46h.001M104.001,46h.001M118.000,46h.001')
          }
          20% {
            d:path('M19.221,46h.001M30.456,46h.001M38.746,46h.001M49.145,46h.001M62.213,46h.001M76.038,46h.001M90.007,46h.001M104.001,46h.001M118.000,46h.001')
          }
          22% {
            d:path('M19.485,46h.001M31.477,46h.001M40.181,46h.001M49.691,46h.001M62.326,46h.001M76.058,46h.001M90.010,46h.001M104.002,46h.001M118.000,46h.001')
          }
          24% {
            d:path('M19.661,46h.001M32.253,46h.001M41.690,46h.001M50.447,46h.001M62.497,46h.001M76.089,46h.001M90.016,46h.001M104.003,46h.001M118.000,46h.001')
          }
          26% {
            d:path('M19.779,46h.001M32.815,46h.001M43.137,46h.001M51.446,46h.001M62.752,46h.001M76.137,46h.001M90.024,46h.001M104.004,46h.001M118.001,46h.001')
          }
          28% {
            d:path('M19.856,46h.001M33.208,46h.001M44.407,46h.001M52.687,46h.001M63.126,46h.001M76.210,46h.001M90.037,46h.001M104.006,46h.001M118.001,46h.001')
          }
          30% {
            d:path('M19.906,46h.001M33.476,46h.001M45.438,46h.001M54.117,46h.001M63.663,46h.001M76.321,46h.001M90.057,46h.001M104.010,46h.001M118.002,46h.001')
          }
          32% {
            d:path('M19.939,46h.001M33.655,46h.001M46.224,46h.001M55.625,46h.001M64.409,46h.001M76.488,46h.001M90.087,46h.001M104.015,46h.001M118.003,46h.001')
          }
          34% {
            d:path('M19.960,46h.001M33.774,46h.001M46.794,46h.001M57.077,46h.001M65.397,46h.001M76.738,46h.001M90.134,46h.001M104.024,46h.001M118.004,46h.001')
          }
          36% {
            d:path('M19.974,46h.001M33.853,46h.001M47.194,46h.001M58.357,46h.001M66.629,46h.001M77.107,46h.001M90.206,46h.001M104.036,46h.001M118.006,46h.001')
          }
          38% {
            d:path('M19.983,46h.001M33.904,46h.001M47.466,46h.001M59.399,46h.001M68.052,46h.001M77.636,46h.001M90.315,46h.001M104.056,46h.001M118.010,46h.001')
          }
          40% {
            d:path('M19.989,46h.001M33.938,46h.001M47.649,46h.001M60.195,46h.001M69.560,46h.001M78.372,46h.001M90.479,46h.001M104.086,46h.001M118.015,46h.001')
          }
          42% {
            d:path('M19.993,46h.001M33.960,46h.001M47.770,46h.001M60.774,46h.001M71.018,46h.001M79.350,46h.001M90.726,46h.001M104.132,46h.001M118.023,46h.001')
          }
          44% {
            d:path('M19.995,46h.001M33.974,46h.001M47.850,46h.001M61.179,46h.001M72.306,46h.001M80.572,46h.001M91.088,46h.001M104.202,46h.001M118.036,46h.001')
          }
          46% {
            d:path('M19.997,46h.001M33.983,46h.001M47.902,46h.001M61.456,46h.001M73.359,46h.001M81.988,46h.001M91.609,46h.001M104.309,46h.001M118.055,46h.001')
          }
          48% {
            d:path('M19.998,46h.001M33.989,46h.001M47.937,46h.001M61.642,46h.001M74.165,46h.001M83.495,46h.001M92.336,46h.001M104.471,46h.001M118.084,46h.001')
          }
          50% {
            d:path('M19.999,46h.001M33.993,46h.001M47.959,46h.001M61.766,46h.001M74.753,46h.001M84.958,46h.001M93.302,46h.001M104.713,46h.001M118.129,46h.001')
          }
          52% {
            d:path('M19.999,46h.001M33.995,46h.001M47.973,46h.001M61.847,46h.001M75.165,46h.001M86.255,46h.001M94.514,46h.001M105.069,46h.001M118.198,46h.001')
          }
          54% {
            d:path('M19.999,46h.001M33.997,46h.001M47.983,46h.001M61.901,46h.001M75.447,46h.001M87.319,46h.001M95.925,46h.001M105.583,46h.001M118.303,46h.001')
          }
          56% {
            d:path('M20.000,46h.001M33.998,46h.001M47.989,46h.001M61.935,46h.001M75.636,46h.001M88.135,46h.001M97.430,46h.001M106.300,46h.001M118.462,46h.001')
          }
          58% {
            d:path('M20.000,46h.001M33.999,46h.001M47.993,46h.001M61.958,46h.001M75.762,46h.001M88.731,46h.001M98.897,46h.001M107.256,46h.001M118.700,46h.001')
          }
          60% {
            d:path('M20.000,46h.001M33.999,46h.001M47.995,46h.001M61.973,46h.001M75.844,46h.001M89.150,46h.001M100.204,46h.001M108.457,46h.001M119.051,46h.001')
          }
          62% {
            d:path('M20.000,46h.001M33.999,46h.001M47.997,46h.001M61.982,46h.001M75.899,46h.001M89.437,46h.001M101.278,46h.001M109.861,46h.001M119.557,46h.001')
          }
          64% {
            d:path('M20.000,46h.001M34.000,46h.001M47.998,46h.001M61.989,46h.001M75.934,46h.001M89.629,46h.001M102.105,46h.001M111.365,46h.001M120.264,46h.001')
          }
          66% {
            d:path('M20.000,46h.001M34.000,46h.001M47.999,46h.001M61.993,46h.001M75.957,46h.001M89.757,46h.001M102.709,46h.001M112.837,46h.001M121.209,46h.001')
          }
          68% {
            d:path('M20.000,46h.001M34.000,46h.001M47.999,46h.001M61.995,46h.001M75.972,46h.001M89.842,46h.001M103.135,46h.001M114.152,46h.001M122.401,46h.001')
          }
          70% {
            d:path('M20.000,46h.001M34.000,46h.001M47.999,46h.001M61.997,46h.001M75.982,46h.001M89.897,46h.001M103.426,46h.001M115.237,46h.001M123.797,46h.001')
          }
          72% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M61.998,46h.001M75.988,46h.001M89.933,46h.001M103.622,46h.001M116.074,46h.001M125.300,46h.001')
          }
          74% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M61.999,46h.001M75.992,46h.001M89.956,46h.001M103.753,46h.001M116.687,46h.001M126.776,46h.001')
          }
          76% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M61.999,46h.001M75.995,46h.001M89.972,46h.001M103.839,46h.001M117.120,46h.001M128.100,46h.001')
          }
          78% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M61.999,46h.001M75.997,46h.001M89.982,46h.001M103.895,46h.001M117.416,46h.001M129.196,46h.001')
          }
          80% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M75.998,46h.001M89.988,46h.001M103.932,46h.001M117.616,46h.001M130.043,46h.001')
          }
          82% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M75.999,46h.001M89.992,46h.001M103.956,46h.001M117.748,46h.001M130.665,46h.001')
          }
          84% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M75.999,46h.001M89.994,46h.001M103.967,46h.001M117.811,46h.001M130.999,46h.001')
          }
          86% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M75.999,46h.001M89.996,46h.001M103.978,46h.001M117.874,46h.001M131.333,46h.001')
          }
          88% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M89.998,46h.001M103.989,46h.001M117.937,46h.001M131.666,46h.001')
          }
          90% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001')
          }
          92% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001')
          }
          94% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001')
          }
          96% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001')
          }
          98% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001')
          }
          100% {
            d:path('M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001')
          }
        }
        .row2 {
          animation:row2 16s linear infinite
        }
        @keyframes row2 {
          0% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          2% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          4% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          6% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          8% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          10% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          12% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          14% {
            d:path('M18.982,60.000L27.000,60.000L35.018,60.000L48.086,60.000L62.007,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          16% {
            d:path('M19.242,60.000L28.093,60.000L35.358,60.000L48.117,60.000L62.009,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          18% {
            d:path('M19.586,60.000L30.080,60.000L36.350,60.000L48.218,60.000L62.017,60.000L76.001,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          20% {
            d:path('M19.776,60.000L31.597,60.000L37.844,60.000L48.404,60.000L62.033,60.000L76.003,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          22% {
            d:path('M19.880,60.000L32.608,60.000L39.815,60.000L48.739,60.000L62.061,60.000L76.005,60.000L90.000,60.000L104.000,60.000L118.000,60.000')
          }
          24% {
            d:path('M19.936,60.000L33.222,60.000L42.000,60.000L49.326,60.000L62.114,60.000L76.009,60.000L90.001,60.000L104.000,60.000L118.000,60.000')
          }
          26% {
            d:path('M19.966,60.000L33.575,60.000L44.003,60.000L50.297,60.000L62.212,60.000L76.017,60.000L90.001,60.000L104.000,60.000L118.000,60.000')
          }
          28% {
            d:path('M19.982,60.000L33.770,60.000L45.542,60.000L51.769,60.000L62.393,60.000L76.032,60.000L90.002,60.000L104.000,60.000L118.000,60.000')
          }
          30% {
            d:path('M19.990,60.000L33.877,60.000L46.574,60.000L53.723,60.000L62.720,60.000L76.059,60.000L90.005,60.000L104.000,60.000L118.000,60.000')
          }
          32% {
            d:path('M19.995,60.000L33.934,60.000L47.202,60.000L55.907,60.000L63.293,60.000L76.111,60.000L90.009,60.000L104.001,60.000L118.000,60.000')
          }
          34% {
            d:path('M19.997,60.000L33.965,60.000L47.563,60.000L57.925,60.000L64.245,60.000L76.207,60.000L90.016,60.000L104.001,60.000L118.000,60.000')
          }
          36% {
            d:path('M19.999,60.000L33.981,60.000L47.764,60.000L59.487,60.000L65.695,60.000L76.383,60.000L90.031,60.000L104.002,60.000L118.000,60.000')
          }
          38% {
            d:path('M19.999,60.000L33.990,60.000L47.873,60.000L60.538,60.000L67.631,60.000L76.702,60.000L90.058,60.000L104.005,60.000L118.000,60.000')
          }
          40% {
            d:path('M20.000,60.000L33.995,60.000L47.932,60.000L61.181,60.000L69.813,60.000L77.262,60.000L90.108,60.000L104.009,60.000L118.001,60.000')
          }
          42% {
            d:path('M20.000,60.000L33.997,60.000L47.964,60.000L61.552,60.000L71.846,60.000L78.195,60.000L90.201,60.000L104.016,60.000L118.001,60.000')
          }
          44% {
            d:path('M20.000,60.000L33.998,60.000L47.981,60.000L61.757,60.000L73.430,60.000L79.621,60.000L90.373,60.000L104.030,60.000L118.002,60.000')
          }
          46% {
            d:path('M20.000,60.000L33.999,60.000L47.990,60.000L61.870,60.000L74.502,60.000L81.540,60.000L90.684,60.000L104.056,60.000L118.004,60.000')
          }
          48% {
            d:path('M20.000,60.000L34.000,60.000L47.995,60.000L61.930,60.000L75.160,60.000L83.719,60.000L91.231,60.000L104.105,60.000L118.008,60.000')
          }
          50% {
            d:path('M20.000,60.000L34.000,60.000L47.997,60.000L61.963,60.000L75.540,60.000L85.766,60.000L92.145,60.000L104.196,60.000L118.016,60.000')
          }
          52% {
            d:path('M20.000,60.000L34.000,60.000L47.998,60.000L61.980,60.000L75.751,60.000L87.373,60.000L93.549,60.000L104.363,60.000L118.029,60.000')
          }
          54% {
            d:path('M20.000,60.000L34.000,60.000L47.999,60.000L61.989,60.000L75.866,60.000L88.466,60.000L95.449,60.000L104.667,60.000L118.055,60.000')
          }
          56% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L61.994,60.000L75.928,60.000L89.138,60.000L97.625,60.000L105.201,60.000L118.102,60.000')
          }
          58% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L61.997,60.000L75.962,60.000L89.527,60.000L99.686,60.000L106.096,60.000L118.191,60.000')
          }
          60% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L61.998,60.000L75.980,60.000L89.744,60.000L101.315,60.000L107.478,60.000L118.354,60.000')
          }
          62% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L61.999,60.000L75.989,60.000L89.862,60.000L102.428,60.000L109.359,60.000L118.650,60.000')
          }
          64% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L75.994,60.000L89.926,60.000L103.116,60.000L111.531,60.000L119.171,60.000')
          }
          66% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L75.997,60.000L89.961,60.000L103.515,60.000L113.604,60.000L120.048,60.000')
          }
          68% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L75.998,60.000L89.979,60.000L103.737,60.000L115.255,60.000L121.407,60.000')
          }
          70% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L75.999,60.000L89.989,60.000L103.859,60.000L116.390,60.000L123.270,60.000')
          }
          72% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L89.994,60.000L103.924,60.000L117.094,60.000L125.436,60.000')
          }
          74% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L89.997,60.000L103.960,60.000L117.502,60.000L127.522,60.000')
          }
          76% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L89.998,60.000L103.978,60.000L117.730,60.000L129.195,60.000')
          }
          78% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L89.999,60.000L103.989,60.000L117.855,60.000L130.351,60.000')
          }
          80% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L103.994,60.000L117.922,60.000L131.070,60.000')
          }
          82% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L103.997,60.000L117.959,60.000L131.489,60.000')
          }
          84% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L103.998,60.000L117.969,60.000L131.617,60.000')
          }
          86% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L103.998,60.000L117.979,60.000L131.744,60.000')
          }
          88% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L103.999,60.000L117.990,60.000L131.872,60.000')
          }
          90% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000')
          }
          92% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000')
          }
          94% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000')
          }
          96% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000')
          }
          98% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000')
          }
          100% {
            d:path('M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000')
          }
        }
        .atomrow2 {
          animation:atomrow2 16s linear infinite
        }
        @keyframes atomrow2 {
          0% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          2% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          4% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          6% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          8% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          10% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          12% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          14% {
            d:path('M18.982,60h.001M27.000,60h.001M35.018,60h.001M48.086,60h.001M62.007,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          16% {
            d:path('M19.242,60h.001M28.093,60h.001M35.358,60h.001M48.117,60h.001M62.009,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          18% {
            d:path('M19.586,60h.001M30.080,60h.001M36.350,60h.001M48.218,60h.001M62.017,60h.001M76.001,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          20% {
            d:path('M19.776,60h.001M31.597,60h.001M37.844,60h.001M48.404,60h.001M62.033,60h.001M76.003,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          22% {
            d:path('M19.880,60h.001M32.608,60h.001M39.815,60h.001M48.739,60h.001M62.061,60h.001M76.005,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001')
          }
          24% {
            d:path('M19.936,60h.001M33.222,60h.001M42.000,60h.001M49.326,60h.001M62.114,60h.001M76.009,60h.001M90.001,60h.001M104.000,60h.001M118.000,60h.001')
          }
          26% {
            d:path('M19.966,60h.001M33.575,60h.001M44.003,60h.001M50.297,60h.001M62.212,60h.001M76.017,60h.001M90.001,60h.001M104.000,60h.001M118.000,60h.001')
          }
          28% {
            d:path('M19.982,60h.001M33.770,60h.001M45.542,60h.001M51.769,60h.001M62.393,60h.001M76.032,60h.001M90.002,60h.001M104.000,60h.001M118.000,60h.001')
          }
          30% {
            d:path('M19.990,60h.001M33.877,60h.001M46.574,60h.001M53.723,60h.001M62.720,60h.001M76.059,60h.001M90.005,60h.001M104.000,60h.001M118.000,60h.001')
          }
          32% {
            d:path('M19.995,60h.001M33.934,60h.001M47.202,60h.001M55.907,60h.001M63.293,60h.001M76.111,60h.001M90.009,60h.001M104.001,60h.001M118.000,60h.001')
          }
          34% {
            d:path('M19.997,60h.001M33.965,60h.001M47.563,60h.001M57.925,60h.001M64.245,60h.001M76.207,60h.001M90.016,60h.001M104.001,60h.001M118.000,60h.001')
          }
          36% {
            d:path('M19.999,60h.001M33.981,60h.001M47.764,60h.001M59.487,60h.001M65.695,60h.001M76.383,60h.001M90.031,60h.001M104.002,60h.001M118.000,60h.001')
          }
          38% {
            d:path('M19.999,60h.001M33.990,60h.001M47.873,60h.001M60.538,60h.001M67.631,60h.001M76.702,60h.001M90.058,60h.001M104.005,60h.001M118.000,60h.001')
          }
          40% {
            d:path('M20.000,60h.001M33.995,60h.001M47.932,60h.001M61.181,60h.001M69.813,60h.001M77.262,60h.001M90.108,60h.001M104.009,60h.001M118.001,60h.001')
          }
          42% {
            d:path('M20.000,60h.001M33.997,60h.001M47.964,60h.001M61.552,60h.001M71.846,60h.001M78.195,60h.001M90.201,60h.001M104.016,60h.001M118.001,60h.001')
          }
          44% {
            d:path('M20.000,60h.001M33.998,60h.001M47.981,60h.001M61.757,60h.001M73.430,60h.001M79.621,60h.001M90.373,60h.001M104.030,60h.001M118.002,60h.001')
          }
          46% {
            d:path('M20.000,60h.001M33.999,60h.001M47.990,60h.001M61.870,60h.001M74.502,60h.001M81.540,60h.001M90.684,60h.001M104.056,60h.001M118.004,60h.001')
          }
          48% {
            d:path('M20.000,60h.001M34.000,60h.001M47.995,60h.001M61.930,60h.001M75.160,60h.001M83.719,60h.001M91.231,60h.001M104.105,60h.001M118.008,60h.001')
          }
          50% {
            d:path('M20.000,60h.001M34.000,60h.001M47.997,60h.001M61.963,60h.001M75.540,60h.001M85.766,60h.001M92.145,60h.001M104.196,60h.001M118.016,60h.001')
          }
          52% {
            d:path('M20.000,60h.001M34.000,60h.001M47.998,60h.001M61.980,60h.001M75.751,60h.001M87.373,60h.001M93.549,60h.001M104.363,60h.001M118.029,60h.001')
          }
          54% {
            d:path('M20.000,60h.001M34.000,60h.001M47.999,60h.001M61.989,60h.001M75.866,60h.001M88.466,60h.001M95.449,60h.001M104.667,60h.001M118.055,60h.001')
          }
          56% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M61.994,60h.001M75.928,60h.001M89.138,60h.001M97.625,60h.001M105.201,60h.001M118.102,60h.001')
          }
          58% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M61.997,60h.001M75.962,60h.001M89.527,60h.001M99.686,60h.001M106.096,60h.001M118.191,60h.001')
          }
          60% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M61.998,60h.001M75.980,60h.001M89.744,60h.001M101.315,60h.001M107.478,60h.001M118.354,60h.001')
          }
          62% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M61.999,60h.001M75.989,60h.001M89.862,60h.001M102.428,60h.001M109.359,60h.001M118.650,60h.001')
          }
          64% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M75.994,60h.001M89.926,60h.001M103.116,60h.001M111.531,60h.001M119.171,60h.001')
          }
          66% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M75.997,60h.001M89.961,60h.001M103.515,60h.001M113.604,60h.001M120.048,60h.001')
          }
          68% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M75.998,60h.001M89.979,60h.001M103.737,60h.001M115.255,60h.001M121.407,60h.001')
          }
          70% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M75.999,60h.001M89.989,60h.001M103.859,60h.001M116.390,60h.001M123.270,60h.001')
          }
          72% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M89.994,60h.001M103.924,60h.001M117.094,60h.001M125.436,60h.001')
          }
          74% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M89.997,60h.001M103.960,60h.001M117.502,60h.001M127.522,60h.001')
          }
          76% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M89.998,60h.001M103.978,60h.001M117.730,60h.001M129.195,60h.001')
          }
          78% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M89.999,60h.001M103.989,60h.001M117.855,60h.001M130.351,60h.001')
          }
          80% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M103.994,60h.001M117.922,60h.001M131.070,60h.001')
          }
          82% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M103.997,60h.001M117.959,60h.001M131.489,60h.001')
          }
          84% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M103.998,60h.001M117.969,60h.001M131.617,60h.001')
          }
          86% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M103.998,60h.001M117.979,60h.001M131.744,60h.001')
          }
          88% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M103.999,60h.001M117.990,60h.001M131.872,60h.001')
          }
          90% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001')
          }
          92% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001')
          }
          94% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001')
          }
          96% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001')
          }
          98% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001')
          }
          100% {
            d:path('M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001')
          }
        }
        .col0,.core0 {
          animation:col0 16s linear infinite
        }
        .core0 {
          animation:col0 16s linear infinite,core0 16s step-end infinite
        }
        @keyframes col0 {
          0% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          2% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          4% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          6% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          8% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          10% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          12% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          14% {
            d:path('M17.079,32.000L17.927,46.000L18.982,60.000')
          }
          16% {
            d:path('M17.442,32.000L18.281,46.000L19.242,60.000')
          }
          18% {
            d:path('M18.061,32.000L18.835,46.000L19.586,60.000')
          }
          20% {
            d:path('M18.550,32.000L19.221,46.000L19.776,60.000')
          }
          22% {
            d:path('M18.926,32.000L19.485,46.000L19.880,60.000')
          }
          24% {
            d:path('M19.210,32.000L19.661,46.000L19.936,60.000')
          }
          26% {
            d:path('M19.423,32.000L19.779,46.000L19.966,60.000')
          }
          28% {
            d:path('M19.580,32.000L19.856,46.000L19.982,60.000')
          }
          30% {
            d:path('M19.696,32.000L19.906,46.000L19.990,60.000')
          }
          32% {
            d:path('M19.780,32.000L19.939,46.000L19.995,60.000')
          }
          34% {
            d:path('M19.841,32.000L19.960,46.000L19.997,60.000')
          }
          36% {
            d:path('M19.885,32.000L19.974,46.000L19.999,60.000')
          }
          38% {
            d:path('M19.917,32.000L19.983,46.000L19.999,60.000')
          }
          40% {
            d:path('M19.940,32.000L19.989,46.000L20.000,60.000')
          }
          42% {
            d:path('M19.957,32.000L19.993,46.000L20.000,60.000')
          }
          44% {
            d:path('M19.969,32.000L19.995,46.000L20.000,60.000')
          }
          46% {
            d:path('M19.978,32.000L19.997,46.000L20.000,60.000')
          }
          48% {
            d:path('M19.984,32.000L19.998,46.000L20.000,60.000')
          }
          50% {
            d:path('M19.989,32.000L19.999,46.000L20.000,60.000')
          }
          52% {
            d:path('M19.992,32.000L19.999,46.000L20.000,60.000')
          }
          54% {
            d:path('M19.994,32.000L19.999,46.000L20.000,60.000')
          }
          56% {
            d:path('M19.996,32.000L20.000,46.000L20.000,60.000')
          }
          58% {
            d:path('M19.997,32.000L20.000,46.000L20.000,60.000')
          }
          60% {
            d:path('M19.998,32.000L20.000,46.000L20.000,60.000')
          }
          62% {
            d:path('M19.998,32.000L20.000,46.000L20.000,60.000')
          }
          64% {
            d:path('M19.999,32.000L20.000,46.000L20.000,60.000')
          }
          66% {
            d:path('M19.999,32.000L20.000,46.000L20.000,60.000')
          }
          68% {
            d:path('M19.999,32.000L20.000,46.000L20.000,60.000')
          }
          70% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          72% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          74% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          76% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          78% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          80% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          82% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          84% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          86% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          88% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          90% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          92% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          94% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          96% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          98% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
          100% {
            d:path('M20.000,32.000L20.000,46.000L20.000,60.000')
          }
        }
        @keyframes core0 {
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
            opacity:0
          }
        }
        .col1,.core1 {
          animation:col1 16s linear infinite
        }
        .core1 {
          animation:col1 16s linear infinite,core1 16s step-end infinite
        }
        @keyframes col1 {
          0% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          2% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          4% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          6% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          8% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          10% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          12% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          14% {
            d:path('M27.000,32.000L27.000,46.000L27.000,60.000')
          }
          16% {
            d:path('M27.576,32.000L27.755,46.000L28.093,60.000')
          }
          18% {
            d:path('M28.697,32.000L29.196,46.000L30.080,60.000')
          }
          20% {
            d:path('M29.733,32.000L30.456,46.000L31.597,60.000')
          }
          22% {
            d:path('M30.644,32.000L31.477,46.000L32.608,60.000')
          }
          24% {
            d:path('M31.412,32.000L32.253,46.000L33.222,60.000')
          }
          26% {
            d:path('M32.037,32.000L32.815,46.000L33.575,60.000')
          }
          28% {
            d:path('M32.531,32.000L33.208,46.000L33.770,60.000')
          }
          30% {
            d:path('M32.912,32.000L33.476,46.000L33.877,60.000')
          }
          32% {
            d:path('M33.200,32.000L33.655,46.000L33.934,60.000')
          }
          34% {
            d:path('M33.415,32.000L33.774,46.000L33.965,60.000')
          }
          36% {
            d:path('M33.575,32.000L33.853,46.000L33.981,60.000')
          }
          38% {
            d:path('M33.691,32.000L33.904,46.000L33.990,60.000')
          }
          40% {
            d:path('M33.777,32.000L33.938,46.000L33.995,60.000')
          }
          42% {
            d:path('M33.839,32.000L33.960,46.000L33.997,60.000')
          }
          44% {
            d:path('M33.884,32.000L33.974,46.000L33.998,60.000')
          }
          46% {
            d:path('M33.916,32.000L33.983,46.000L33.999,60.000')
          }
          48% {
            d:path('M33.940,32.000L33.989,46.000L34.000,60.000')
          }
          50% {
            d:path('M33.957,32.000L33.993,46.000L34.000,60.000')
          }
          52% {
            d:path('M33.969,32.000L33.995,46.000L34.000,60.000')
          }
          54% {
            d:path('M33.977,32.000L33.997,46.000L34.000,60.000')
          }
          56% {
            d:path('M33.984,32.000L33.998,46.000L34.000,60.000')
          }
          58% {
            d:path('M33.988,32.000L33.999,46.000L34.000,60.000')
          }
          60% {
            d:path('M33.992,32.000L33.999,46.000L34.000,60.000')
          }
          62% {
            d:path('M33.994,32.000L33.999,46.000L34.000,60.000')
          }
          64% {
            d:path('M33.996,32.000L34.000,46.000L34.000,60.000')
          }
          66% {
            d:path('M33.997,32.000L34.000,46.000L34.000,60.000')
          }
          68% {
            d:path('M33.998,32.000L34.000,46.000L34.000,60.000')
          }
          70% {
            d:path('M33.998,32.000L34.000,46.000L34.000,60.000')
          }
          72% {
            d:path('M33.999,32.000L34.000,46.000L34.000,60.000')
          }
          74% {
            d:path('M33.999,32.000L34.000,46.000L34.000,60.000')
          }
          76% {
            d:path('M33.999,32.000L34.000,46.000L34.000,60.000')
          }
          78% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          80% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          82% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          84% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          86% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          88% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          90% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          92% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          94% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          96% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          98% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
          100% {
            d:path('M34.000,32.000L34.000,46.000L34.000,60.000')
          }
        }
        @keyframes core1 {
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
        .col2,.core2 {
          animation:col2 16s linear infinite
        }
        .core2 {
          animation:col2 16s linear infinite,core2 16s step-end infinite
        }
        @keyframes col2 {
          0% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          2% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          4% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          6% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          8% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          10% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          12% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          14% {
            d:path('M36.921,32.000L36.073,46.000L35.018,60.000')
          }
          16% {
            d:path('M37.320,32.000L36.485,46.000L35.358,60.000')
          }
          18% {
            d:path('M38.225,32.000L37.494,46.000L36.350,60.000')
          }
          20% {
            d:path('M39.256,32.000L38.746,46.000L37.844,60.000')
          }
          22% {
            d:path('M40.375,32.000L40.181,46.000L39.815,60.000')
          }
          24% {
            d:path('M41.526,32.000L41.690,46.000L42.000,60.000')
          }
          26% {
            d:path('M42.650,32.000L43.137,46.000L44.003,60.000')
          }
          28% {
            d:path('M43.690,32.000L44.407,46.000L45.542,60.000')
          }
          30% {
            d:path('M44.608,32.000L45.438,46.000L46.574,60.000')
          }
          32% {
            d:path('M45.382,32.000L46.224,46.000L47.202,60.000')
          }
          34% {
            d:path('M46.013,32.000L46.794,46.000L47.563,60.000')
          }
          36% {
            d:path('M46.512,32.000L47.194,46.000L47.764,60.000')
          }
          38% {
            d:path('M46.897,32.000L47.466,46.000L47.873,60.000')
          }
          40% {
            d:path('M47.189,32.000L47.649,46.000L47.932,60.000')
          }
          42% {
            d:path('M47.407,32.000L47.770,46.000L47.964,60.000')
          }
          44% {
            d:path('M47.569,32.000L47.850,46.000L47.981,60.000')
          }
          46% {
            d:path('M47.687,32.000L47.902,46.000L47.990,60.000')
          }
          48% {
            d:path('M47.774,32.000L47.937,46.000L47.995,60.000')
          }
          50% {
            d:path('M47.836,32.000L47.959,46.000L47.997,60.000')
          }
          52% {
            d:path('M47.882,32.000L47.973,46.000L47.998,60.000')
          }
          54% {
            d:path('M47.915,32.000L47.983,46.000L47.999,60.000')
          }
          56% {
            d:path('M47.939,32.000L47.989,46.000L48.000,60.000')
          }
          58% {
            d:path('M47.956,32.000L47.993,46.000L48.000,60.000')
          }
          60% {
            d:path('M47.968,32.000L47.995,46.000L48.000,60.000')
          }
          62% {
            d:path('M47.977,32.000L47.997,46.000L48.000,60.000')
          }
          64% {
            d:path('M47.984,32.000L47.998,46.000L48.000,60.000')
          }
          66% {
            d:path('M47.988,32.000L47.999,46.000L48.000,60.000')
          }
          68% {
            d:path('M47.991,32.000L47.999,46.000L48.000,60.000')
          }
          70% {
            d:path('M47.994,32.000L47.999,46.000L48.000,60.000')
          }
          72% {
            d:path('M47.996,32.000L48.000,46.000L48.000,60.000')
          }
          74% {
            d:path('M47.997,32.000L48.000,46.000L48.000,60.000')
          }
          76% {
            d:path('M47.998,32.000L48.000,46.000L48.000,60.000')
          }
          78% {
            d:path('M47.998,32.000L48.000,46.000L48.000,60.000')
          }
          80% {
            d:path('M47.999,32.000L48.000,46.000L48.000,60.000')
          }
          82% {
            d:path('M47.999,32.000L48.000,46.000L48.000,60.000')
          }
          84% {
            d:path('M47.999,32.000L48.000,46.000L48.000,60.000')
          }
          86% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          88% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          90% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          92% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          94% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          96% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          98% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
          100% {
            d:path('M48.000,32.000L48.000,46.000L48.000,60.000')
          }
        }
        @keyframes core2 {
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
            opacity:0
          }
        }
        .col3,.core3 {
          animation:col3 16s linear infinite
        }
        .core3 {
          animation:col3 16s linear infinite,core3 16s step-end infinite
        }
        @keyframes col3 {
          0% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          2% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          4% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          6% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          8% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          10% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          12% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          14% {
            d:path('M48.910,32.000L48.410,46.000L48.086,60.000')
          }
          16% {
            d:path('M49.060,32.000L48.506,46.000L48.117,60.000')
          }
          18% {
            d:path('M49.432,32.000L48.765,46.000L48.218,60.000')
          }
          20% {
            d:path('M49.915,32.000L49.145,46.000L48.404,60.000')
          }
          22% {
            d:path('M50.528,32.000L49.691,46.000L48.739,60.000')
          }
          24% {
            d:path('M51.284,32.000L50.447,46.000L49.326,60.000')
          }
          26% {
            d:path('M52.184,32.000L51.446,46.000L50.297,60.000')
          }
          28% {
            d:path('M53.210,32.000L52.687,46.000L51.769,60.000')
          }
          30% {
            d:path('M54.325,32.000L54.117,46.000L53.723,60.000')
          }
          32% {
            d:path('M55.477,32.000L55.625,46.000L55.907,60.000')
          }
          34% {
            d:path('M56.603,32.000L57.077,46.000L57.925,60.000')
          }
          36% {
            d:path('M57.648,32.000L58.357,46.000L59.487,60.000')
          }
          38% {
            d:path('M58.571,32.000L59.399,46.000L60.538,60.000')
          }
          40% {
            d:path('M59.352,32.000L60.195,46.000L61.181,60.000')
          }
          42% {
            d:path('M59.989,32.000L60.774,46.000L61.552,60.000')
          }
          44% {
            d:path('M60.493,32.000L61.179,46.000L61.757,60.000')
          }
          46% {
            d:path('M60.883,32.000L61.456,46.000L61.870,60.000')
          }
          48% {
            d:path('M61.178,32.000L61.642,46.000L61.930,60.000')
          }
          50% {
            d:path('M61.399,32.000L61.766,46.000L61.963,60.000')
          }
          52% {
            d:path('M61.563,32.000L61.847,46.000L61.980,60.000')
          }
          54% {
            d:path('M61.683,32.000L61.901,46.000L61.989,60.000')
          }
          56% {
            d:path('M61.770,32.000L61.935,46.000L61.994,60.000')
          }
          58% {
            d:path('M61.834,32.000L61.958,46.000L61.997,60.000')
          }
          60% {
            d:path('M61.880,32.000L61.973,46.000L61.998,60.000')
          }
          62% {
            d:path('M61.914,32.000L61.982,46.000L61.999,60.000')
          }
          64% {
            d:path('M61.938,32.000L61.989,46.000L62.000,60.000')
          }
          66% {
            d:path('M61.955,32.000L61.993,46.000L62.000,60.000')
          }
          68% {
            d:path('M61.968,32.000L61.995,46.000L62.000,60.000')
          }
          70% {
            d:path('M61.977,32.000L61.997,46.000L62.000,60.000')
          }
          72% {
            d:path('M61.983,32.000L61.998,46.000L62.000,60.000')
          }
          74% {
            d:path('M61.988,32.000L61.999,46.000L62.000,60.000')
          }
          76% {
            d:path('M61.991,32.000L61.999,46.000L62.000,60.000')
          }
          78% {
            d:path('M61.994,32.000L61.999,46.000L62.000,60.000')
          }
          80% {
            d:path('M61.996,32.000L62.000,46.000L62.000,60.000')
          }
          82% {
            d:path('M61.997,32.000L62.000,46.000L62.000,60.000')
          }
          84% {
            d:path('M61.998,32.000L62.000,46.000L62.000,60.000')
          }
          86% {
            d:path('M61.998,32.000L62.000,46.000L62.000,60.000')
          }
          88% {
            d:path('M61.999,32.000L62.000,46.000L62.000,60.000')
          }
          90% {
            d:path('M62.000,32.000L62.000,46.000L62.000,60.000')
          }
          92% {
            d:path('M62.000,32.000L62.000,46.000L62.000,60.000')
          }
          94% {
            d:path('M62.000,32.000L62.000,46.000L62.000,60.000')
          }
          96% {
            d:path('M62.000,32.000L62.000,46.000L62.000,60.000')
          }
          98% {
            d:path('M62.000,32.000L62.000,46.000L62.000,60.000')
          }
          100% {
            d:path('M62.000,32.000L62.000,46.000L62.000,60.000')
          }
        }
        @keyframes core3 {
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
            opacity:0
          }
        }
        .col4,.core4 {
          animation:col4 16s linear infinite
        }
        .core4 {
          animation:col4 16s linear infinite,core4 16s step-end infinite
        }
        @keyframes col4 {
          0% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          2% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          4% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          6% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          8% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          10% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          12% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          14% {
            d:path('M62.252,32.000L62.073,46.000L62.007,60.000')
          }
          16% {
            d:path('M62.296,32.000L62.091,46.000L62.009,60.000')
          }
          18% {
            d:path('M62.408,32.000L62.139,46.000L62.017,60.000')
          }
          20% {
            d:path('M62.561,32.000L62.213,46.000L62.033,60.000')
          }
          22% {
            d:path('M62.769,32.000L62.326,46.000L62.061,60.000')
          }
          24% {
            d:path('M63.046,32.000L62.497,46.000L62.114,60.000')
          }
          26% {
            d:path('M63.414,32.000L62.752,46.000L62.212,60.000')
          }
          28% {
            d:path('M63.892,32.000L63.126,46.000L62.393,60.000')
          }
          30% {
            d:path('M64.499,32.000L63.663,46.000L62.720,60.000')
          }
          32% {
            d:path('M65.248,32.000L64.409,46.000L63.293,60.000')
          }
          34% {
            d:path('M66.142,32.000L65.397,46.000L64.245,60.000')
          }
          36% {
            d:path('M67.163,32.000L66.629,46.000L65.695,60.000')
          }
          38% {
            d:path('M68.276,32.000L68.052,46.000L67.631,60.000')
          }
          40% {
            d:path('M69.427,32.000L69.560,46.000L69.813,60.000')
          }
          42% {
            d:path('M70.556,32.000L71.018,46.000L71.846,60.000')
          }
          44% {
            d:path('M71.605,32.000L72.306,46.000L73.430,60.000')
          }
          46% {
            d:path('M72.534,32.000L73.359,46.000L74.502,60.000')
          }
          48% {
            d:path('M73.321,32.000L74.165,46.000L75.160,60.000')
          }
          50% {
            d:path('M73.964,32.000L74.753,46.000L75.540,60.000')
          }
          52% {
            d:path('M74.474,32.000L75.165,46.000L75.751,60.000')
          }
          54% {
            d:path('M74.868,32.000L75.447,46.000L75.866,60.000')
          }
          56% {
            d:path('M75.167,32.000L75.636,46.000L75.928,60.000')
          }
          58% {
            d:path('M75.391,32.000L75.762,46.000L75.962,60.000')
          }
          60% {
            d:path('M75.557,32.000L75.844,46.000L75.980,60.000')
          }
          62% {
            d:path('M75.678,32.000L75.899,46.000L75.989,60.000')
          }
          64% {
            d:path('M75.767,32.000L75.934,46.000L75.994,60.000')
          }
          66% {
            d:path('M75.832,32.000L75.957,46.000L75.997,60.000')
          }
          68% {
            d:path('M75.879,32.000L75.972,46.000L75.998,60.000')
          }
          70% {
            d:path('M75.913,32.000L75.982,46.000L75.999,60.000')
          }
          72% {
            d:path('M75.937,32.000L75.988,46.000L76.000,60.000')
          }
          74% {
            d:path('M75.955,32.000L75.992,46.000L76.000,60.000')
          }
          76% {
            d:path('M75.967,32.000L75.995,46.000L76.000,60.000')
          }
          78% {
            d:path('M75.976,32.000L75.997,46.000L76.000,60.000')
          }
          80% {
            d:path('M75.983,32.000L75.998,46.000L76.000,60.000')
          }
          82% {
            d:path('M75.988,32.000L75.999,46.000L76.000,60.000')
          }
          84% {
            d:path('M75.991,32.000L75.999,46.000L76.000,60.000')
          }
          86% {
            d:path('M75.994,32.000L75.999,46.000L76.000,60.000')
          }
          88% {
            d:path('M75.997,32.000L76.000,46.000L76.000,60.000')
          }
          90% {
            d:path('M76.000,32.000L76.000,46.000L76.000,60.000')
          }
          92% {
            d:path('M76.000,32.000L76.000,46.000L76.000,60.000')
          }
          94% {
            d:path('M76.000,32.000L76.000,46.000L76.000,60.000')
          }
          96% {
            d:path('M76.000,32.000L76.000,46.000L76.000,60.000')
          }
          98% {
            d:path('M76.000,32.000L76.000,46.000L76.000,60.000')
          }
          100% {
            d:path('M76.000,32.000L76.000,46.000L76.000,60.000')
          }
        }
        @keyframes core4 {
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
            opacity:0
          }
        }
        .col5,.core5 {
          animation:col5 16s linear infinite
        }
        .core5 {
          animation:col5 16s linear infinite,core5 16s step-end infinite
        }
        @keyframes col5 {
          0% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          2% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          4% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          6% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          8% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          10% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          12% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          14% {
            d:path('M76.067,32.000L76.013,46.000L76.001,60.000')
          }
          16% {
            d:path('M76.079,32.000L76.016,46.000L76.001,60.000')
          }
          18% {
            d:path('M76.110,32.000L76.024,46.000L76.001,60.000')
          }
          20% {
            d:path('M76.152,32.000L76.038,46.000L76.003,60.000')
          }
          22% {
            d:path('M76.211,32.000L76.058,46.000L76.005,60.000')
          }
          24% {
            d:path('M76.292,32.000L76.089,46.000L76.009,60.000')
          }
          26% {
            d:path('M76.403,32.000L76.137,46.000L76.017,60.000')
          }
          28% {
            d:path('M76.554,32.000L76.210,46.000L76.032,60.000')
          }
          30% {
            d:path('M76.758,32.000L76.321,46.000L76.059,60.000')
          }
          32% {
            d:path('M77.033,32.000L76.488,46.000L76.111,60.000')
          }
          34% {
            d:path('M77.396,32.000L76.738,46.000L76.207,60.000')
          }
          36% {
            d:path('M77.869,32.000L77.107,46.000L76.383,60.000')
          }
          38% {
            d:path('M78.470,32.000L77.636,46.000L76.702,60.000')
          }
          40% {
            d:path('M79.213,32.000L78.372,46.000L77.262,60.000')
          }
          42% {
            d:path('M80.101,32.000L79.350,46.000L78.195,60.000')
          }
          44% {
            d:path('M81.117,32.000L80.572,46.000L79.621,60.000')
          }
          46% {
            d:path('M82.227,32.000L81.988,46.000L81.540,60.000')
          }
          48% {
            d:path('M83.378,32.000L83.495,46.000L83.719,60.000')
          }
          50% {
            d:path('M84.508,32.000L84.958,46.000L85.766,60.000')
          }
          52% {
            d:path('M85.562,32.000L86.255,46.000L87.373,60.000')
          }
          54% {
            d:path('M86.497,32.000L87.319,46.000L88.466,60.000')
          }
          56% {
            d:path('M87.290,32.000L88.135,46.000L89.138,60.000')
          }
          58% {
            d:path('M87.940,32.000L88.731,46.000L89.527,60.000')
          }
          60% {
            d:path('M88.454,32.000L89.150,46.000L89.744,60.000')
          }
          62% {
            d:path('M88.853,32.000L89.437,46.000L89.862,60.000')
          }
          64% {
            d:path('M89.156,32.000L89.629,46.000L89.926,60.000')
          }
          66% {
            d:path('M89.383,32.000L89.757,46.000L89.961,60.000')
          }
          68% {
            d:path('M89.550,32.000L89.842,46.000L89.979,60.000')
          }
          70% {
            d:path('M89.674,32.000L89.897,46.000L89.989,60.000')
          }
          72% {
            d:path('M89.764,32.000L89.933,46.000L89.994,60.000')
          }
          74% {
            d:path('M89.829,32.000L89.956,46.000L89.997,60.000')
          }
          76% {
            d:path('M89.877,32.000L89.972,46.000L89.998,60.000')
          }
          78% {
            d:path('M89.911,32.000L89.982,46.000L89.999,60.000')
          }
          80% {
            d:path('M89.936,32.000L89.988,46.000L90.000,60.000')
          }
          82% {
            d:path('M89.954,32.000L89.992,46.000L90.000,60.000')
          }
          84% {
            d:path('M89.965,32.000L89.994,46.000L90.000,60.000')
          }
          86% {
            d:path('M89.977,32.000L89.996,46.000L90.000,60.000')
          }
          88% {
            d:path('M89.988,32.000L89.998,46.000L90.000,60.000')
          }
          90% {
            d:path('M90.000,32.000L90.000,46.000L90.000,60.000')
          }
          92% {
            d:path('M90.000,32.000L90.000,46.000L90.000,60.000')
          }
          94% {
            d:path('M90.000,32.000L90.000,46.000L90.000,60.000')
          }
          96% {
            d:path('M90.000,32.000L90.000,46.000L90.000,60.000')
          }
          98% {
            d:path('M90.000,32.000L90.000,46.000L90.000,60.000')
          }
          100% {
            d:path('M90.000,32.000L90.000,46.000L90.000,60.000')
          }
        }
        @keyframes core5 {
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
            opacity:0
          }
        }
        .col6,.core6 {
          animation:col6 16s linear infinite
        }
        .core6 {
          animation:col6 16s linear infinite,core6 16s step-end infinite
        }
        @keyframes col6 {
          0% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          2% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          4% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          6% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          8% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          10% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          12% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          14% {
            d:path('M90.018,32.000L90.002,46.000L90.000,60.000')
          }
          16% {
            d:path('M90.021,32.000L90.003,46.000L90.000,60.000')
          }
          18% {
            d:path('M90.029,32.000L90.004,46.000L90.000,60.000')
          }
          20% {
            d:path('M90.041,32.000L90.007,46.000L90.000,60.000')
          }
          22% {
            d:path('M90.056,32.000L90.010,46.000L90.000,60.000')
          }
          24% {
            d:path('M90.078,32.000L90.016,46.000L90.001,60.000')
          }
          26% {
            d:path('M90.108,32.000L90.024,46.000L90.001,60.000')
          }
          28% {
            d:path('M90.150,32.000L90.037,46.000L90.002,60.000')
          }
          30% {
            d:path('M90.208,32.000L90.057,46.000L90.005,60.000')
          }
          32% {
            d:path('M90.288,32.000L90.087,46.000L90.009,60.000')
          }
          34% {
            d:path('M90.397,32.000L90.134,46.000L90.016,60.000')
          }
          36% {
            d:path('M90.546,32.000L90.206,46.000L90.031,60.000')
          }
          38% {
            d:path('M90.748,32.000L90.315,46.000L90.058,60.000')
          }
          40% {
            d:path('M91.019,32.000L90.479,46.000L90.108,60.000')
          }
          42% {
            d:path('M91.378,32.000L90.726,46.000L90.201,60.000')
          }
          44% {
            d:path('M91.846,32.000L91.088,46.000L90.373,60.000')
          }
          46% {
            d:path('M92.441,32.000L91.609,46.000L90.684,60.000')
          }
          48% {
            d:path('M93.178,32.000L92.336,46.000L91.231,60.000')
          }
          50% {
            d:path('M94.060,32.000L93.302,46.000L92.145,60.000')
          }
          52% {
            d:path('M95.071,32.000L94.514,46.000L93.549,60.000')
          }
          54% {
            d:path('M96.178,32.000L95.925,46.000L95.449,60.000')
          }
          56% {
            d:path('M97.328,32.000L97.430,46.000L97.625,60.000')
          }
          58% {
            d:path('M98.461,32.000L98.897,46.000L99.686,60.000')
          }
          60% {
            d:path('M99.519,32.000L100.204,46.000L101.315,60.000')
          }
          62% {
            d:path('M100.459,32.000L101.278,46.000L102.428,60.000')
          }
          64% {
            d:path('M101.259,32.000L102.105,46.000L103.116,60.000')
          }
          66% {
            d:path('M101.914,32.000L102.709,46.000L103.515,60.000')
          }
          68% {
            d:path('M102.435,32.000L103.135,46.000L103.737,60.000')
          }
          70% {
            d:path('M102.838,32.000L103.426,46.000L103.859,60.000')
          }
          72% {
            d:path('M103.144,32.000L103.622,46.000L103.924,60.000')
          }
          74% {
            d:path('M103.374,32.000L103.753,46.000L103.960,60.000')
          }
          76% {
            d:path('M103.544,32.000L103.839,46.000L103.978,60.000')
          }
          78% {
            d:path('M103.669,32.000L103.895,46.000L103.989,60.000')
          }
          80% {
            d:path('M103.761,32.000L103.932,46.000L103.994,60.000')
          }
          82% {
            d:path('M103.827,32.000L103.956,46.000L103.997,60.000')
          }
          84% {
            d:path('M103.870,32.000L103.967,46.000L103.998,60.000')
          }
          86% {
            d:path('M103.913,32.000L103.978,46.000L103.998,60.000')
          }
          88% {
            d:path('M103.957,32.000L103.989,46.000L103.999,60.000')
          }
          90% {
            d:path('M104.000,32.000L104.000,46.000L104.000,60.000')
          }
          92% {
            d:path('M104.000,32.000L104.000,46.000L104.000,60.000')
          }
          94% {
            d:path('M104.000,32.000L104.000,46.000L104.000,60.000')
          }
          96% {
            d:path('M104.000,32.000L104.000,46.000L104.000,60.000')
          }
          98% {
            d:path('M104.000,32.000L104.000,46.000L104.000,60.000')
          }
          100% {
            d:path('M104.000,32.000L104.000,46.000L104.000,60.000')
          }
        }
        @keyframes core6 {
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
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
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
        .col7,.core7 {
          animation:col7 16s linear infinite
        }
        .core7 {
          animation:col7 16s linear infinite,core7 16s step-end infinite
        }
        @keyframes col7 {
          0% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          2% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          4% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          6% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          8% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          10% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          12% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          14% {
            d:path('M104.005,32.000L104.000,46.000L104.000,60.000')
          }
          16% {
            d:path('M104.006,32.000L104.000,46.000L104.000,60.000')
          }
          18% {
            d:path('M104.008,32.000L104.001,46.000L104.000,60.000')
          }
          20% {
            d:path('M104.011,32.000L104.001,46.000L104.000,60.000')
          }
          22% {
            d:path('M104.015,32.000L104.002,46.000L104.000,60.000')
          }
          24% {
            d:path('M104.021,32.000L104.003,46.000L104.000,60.000')
          }
          26% {
            d:path('M104.029,32.000L104.004,46.000L104.000,60.000')
          }
          28% {
            d:path('M104.040,32.000L104.006,46.000L104.000,60.000')
          }
          30% {
            d:path('M104.055,32.000L104.010,46.000L104.000,60.000')
          }
          32% {
            d:path('M104.077,32.000L104.015,46.000L104.001,60.000')
          }
          34% {
            d:path('M104.107,32.000L104.024,46.000L104.001,60.000')
          }
          36% {
            d:path('M104.148,32.000L104.036,46.000L104.002,60.000')
          }
          38% {
            d:path('M104.205,32.000L104.056,46.000L104.005,60.000')
          }
          40% {
            d:path('M104.284,32.000L104.086,46.000L104.009,60.000')
          }
          42% {
            d:path('M104.392,32.000L104.132,46.000L104.016,60.000')
          }
          44% {
            d:path('M104.539,32.000L104.202,46.000L104.030,60.000')
          }
          46% {
            d:path('M104.738,32.000L104.309,46.000L104.056,60.000')
          }
          48% {
            d:path('M105.006,32.000L104.471,46.000L104.105,60.000')
          }
          50% {
            d:path('M105.361,32.000L104.713,46.000L104.196,60.000')
          }
          52% {
            d:path('M105.823,32.000L105.069,46.000L104.363,60.000')
          }
          54% {
            d:path('M106.412,32.000L105.583,46.000L104.667,60.000')
          }
          56% {
            d:path('M107.143,32.000L106.300,46.000L105.201,60.000')
          }
          58% {
            d:path('M108.019,32.000L107.256,46.000L106.096,60.000')
          }
          60% {
            d:path('M109.025,32.000L108.457,46.000L107.478,60.000')
          }
          62% {
            d:path('M110.129,32.000L109.861,46.000L109.359,60.000')
          }
          64% {
            d:path('M111.278,32.000L111.365,46.000L111.531,60.000')
          }
          66% {
            d:path('M112.413,32.000L112.837,46.000L113.604,60.000')
          }
          68% {
            d:path('M113.475,32.000L114.152,46.000L115.255,60.000')
          }
          70% {
            d:path('M114.422,32.000L115.237,46.000L116.390,60.000')
          }
          72% {
            d:path('M115.228,32.000L116.074,46.000L117.094,60.000')
          }
          74% {
            d:path('M115.889,32.000L116.687,46.000L117.502,60.000')
          }
          76% {
            d:path('M116.415,32.000L117.120,46.000L117.730,60.000')
          }
          78% {
            d:path('M116.823,32.000L117.416,46.000L117.855,60.000')
          }
          80% {
            d:path('M117.133,32.000L117.616,46.000L117.922,60.000')
          }
          82% {
            d:path('M117.366,32.000L117.748,46.000L117.959,60.000')
          }
          84% {
            d:path('M117.524,32.000L117.811,46.000L117.969,60.000')
          }
          86% {
            d:path('M117.683,32.000L117.874,46.000L117.979,60.000')
          }
          88% {
            d:path('M117.841,32.000L117.937,46.000L117.990,60.000')
          }
          90% {
            d:path('M118.000,32.000L118.000,46.000L118.000,60.000')
          }
          92% {
            d:path('M118.000,32.000L118.000,46.000L118.000,60.000')
          }
          94% {
            d:path('M118.000,32.000L118.000,46.000L118.000,60.000')
          }
          96% {
            d:path('M118.000,32.000L118.000,46.000L118.000,60.000')
          }
          98% {
            d:path('M118.000,32.000L118.000,46.000L118.000,60.000')
          }
          100% {
            d:path('M118.000,32.000L118.000,46.000L118.000,60.000')
          }
        }
        @keyframes core7 {
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
        .col8,.core8 {
          animation:col8 16s linear infinite
        }
        .core8 {
          animation:col8 16s linear infinite,core8 16s step-end infinite
        }
        @keyframes col8 {
          0% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          2% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          4% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          6% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          8% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          10% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          12% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          14% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          16% {
            d:path('M118.001,32.000L118.000,46.000L118.000,60.000')
          }
          18% {
            d:path('M118.002,32.000L118.000,46.000L118.000,60.000')
          }
          20% {
            d:path('M118.003,32.000L118.000,46.000L118.000,60.000')
          }
          22% {
            d:path('M118.004,32.000L118.000,46.000L118.000,60.000')
          }
          24% {
            d:path('M118.005,32.000L118.000,46.000L118.000,60.000')
          }
          26% {
            d:path('M118.008,32.000L118.001,46.000L118.000,60.000')
          }
          28% {
            d:path('M118.011,32.000L118.001,46.000L118.000,60.000')
          }
          30% {
            d:path('M118.015,32.000L118.002,46.000L118.000,60.000')
          }
          32% {
            d:path('M118.020,32.000L118.003,46.000L118.000,60.000')
          }
          34% {
            d:path('M118.028,32.000L118.004,46.000L118.000,60.000')
          }
          36% {
            d:path('M118.039,32.000L118.006,46.000L118.000,60.000')
          }
          38% {
            d:path('M118.055,32.000L118.010,46.000L118.000,60.000')
          }
          40% {
            d:path('M118.076,32.000L118.015,46.000L118.001,60.000')
          }
          42% {
            d:path('M118.105,32.000L118.023,46.000L118.001,60.000')
          }
          44% {
            d:path('M118.146,32.000L118.036,46.000L118.002,60.000')
          }
          46% {
            d:path('M118.202,32.000L118.055,46.000L118.004,60.000')
          }
          48% {
            d:path('M118.280,32.000L118.084,46.000L118.008,60.000')
          }
          50% {
            d:path('M118.386,32.000L118.129,46.000L118.016,60.000')
          }
          52% {
            d:path('M118.531,32.000L118.198,46.000L118.029,60.000')
          }
          54% {
            d:path('M118.728,32.000L118.303,46.000L118.055,60.000')
          }
          56% {
            d:path('M118.993,32.000L118.462,46.000L118.102,60.000')
          }
          58% {
            d:path('M119.343,32.000L118.700,46.000L118.191,60.000')
          }
          60% {
            d:path('M119.801,32.000L119.051,46.000L118.354,60.000')
          }
          62% {
            d:path('M120.384,32.000L119.557,46.000L118.650,60.000')
          }
          64% {
            d:path('M121.109,32.000L120.264,46.000L119.171,60.000')
          }
          66% {
            d:path('M121.978,32.000L121.209,46.000L120.048,60.000')
          }
          68% {
            d:path('M122.979,32.000L122.401,46.000L121.407,60.000')
          }
          70% {
            d:path('M124.080,32.000L123.797,46.000L123.270,60.000')
          }
          72% {
            d:path('M125.229,32.000L125.300,46.000L125.436,60.000')
          }
          74% {
            d:path('M126.365,32.000L126.776,46.000L127.522,60.000')
          }
          76% {
            d:path('M127.432,32.000L128.100,46.000L129.195,60.000')
          }
          78% {
            d:path('M128.384,32.000L129.196,46.000L130.351,60.000')
          }
          80% {
            d:path('M129.196,32.000L130.043,46.000L131.070,60.000')
          }
          82% {
            d:path('M129.863,32.000L130.665,46.000L131.489,60.000')
          }
          84% {
            d:path('M130.398,32.000L130.999,46.000L131.617,60.000')
          }
          86% {
            d:path('M130.932,32.000L131.333,46.000L131.744,60.000')
          }
          88% {
            d:path('M131.466,32.000L131.666,46.000L131.872,60.000')
          }
          90% {
            d:path('M132.000,32.000L132.000,46.000L132.000,60.000')
          }
          92% {
            d:path('M132.000,32.000L132.000,46.000L132.000,60.000')
          }
          94% {
            d:path('M132.000,32.000L132.000,46.000L132.000,60.000')
          }
          96% {
            d:path('M132.000,32.000L132.000,46.000L132.000,60.000')
          }
          98% {
            d:path('M132.000,32.000L132.000,46.000L132.000,60.000')
          }
          100% {
            d:path('M132.000,32.000L132.000,46.000L132.000,60.000')
          }
        }
        @keyframes core8 {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Edge Dislocation Glide">
        <path class="plane" d="M10,69H137"/>
        <path class="bonds" d="M20.000,78.000L34.000,78.000L48.000,78.000L62.000,78.000L76.000,78.000L90.000,78.000L104.000,78.000L118.000,78.000"/>
        <path class="bonds" d="M20.000,92.000L34.000,92.000L48.000,92.000L62.000,92.000L76.000,92.000L90.000,92.000L104.000,92.000L118.000,92.000"/>
        <path class="bonds" d="M20.000,106.000L34.000,106.000L48.000,106.000L62.000,106.000L76.000,106.000L90.000,106.000L104.000,106.000L118.000,106.000"/>
        <path class="bonds" d="M20,78V106"/>
        <path class="bonds" d="M34,78V106"/>
        <path class="bonds" d="M48,78V106"/>
        <path class="bonds" d="M62,78V106"/>
        <path class="bonds" d="M76,78V106"/>
        <path class="bonds" d="M90,78V106"/>
        <path class="bonds" d="M104,78V106"/>
        <path class="bonds" d="M118,78V106"/>
        <path class="bonds row0" d="M20.000,32.000L34.000,32.000L48.000,32.000L62.000,32.000L76.000,32.000L90.000,32.000L104.000,32.000L118.000,32.000L132.000,32.000"/>
        <path class="bonds row1" d="M20.000,46.000L34.000,46.000L48.000,46.000L62.000,46.000L76.000,46.000L90.000,46.000L104.000,46.000L118.000,46.000L132.000,46.000"/>
        <path class="bonds row2" d="M20.000,60.000L34.000,60.000L48.000,60.000L62.000,60.000L76.000,60.000L90.000,60.000L104.000,60.000L118.000,60.000L132.000,60.000"/>
        <path class="bonds col0" d="M20.000,32.000L20.000,46.000L20.000,60.000"/>
        <path class="core core0" d="M20.000,32.000L20.000,46.000L20.000,60.000"/>
        <path class="bonds col1" d="M34.000,32.000L34.000,46.000L34.000,60.000"/>
        <path class="core core1" d="M34.000,32.000L34.000,46.000L34.000,60.000"/>
        <path class="bonds col2" d="M48.000,32.000L48.000,46.000L48.000,60.000"/>
        <path class="core core2" d="M48.000,32.000L48.000,46.000L48.000,60.000"/>
        <path class="bonds col3" d="M62.000,32.000L62.000,46.000L62.000,60.000"/>
        <path class="core core3" d="M62.000,32.000L62.000,46.000L62.000,60.000"/>
        <path class="bonds col4" d="M76.000,32.000L76.000,46.000L76.000,60.000"/>
        <path class="core core4" d="M76.000,32.000L76.000,46.000L76.000,60.000"/>
        <path class="bonds col5" d="M90.000,32.000L90.000,46.000L90.000,60.000"/>
        <path class="core core5" d="M90.000,32.000L90.000,46.000L90.000,60.000"/>
        <path class="bonds col6" d="M104.000,32.000L104.000,46.000L104.000,60.000"/>
        <path class="core core6" d="M104.000,32.000L104.000,46.000L104.000,60.000"/>
        <path class="bonds col7" d="M118.000,32.000L118.000,46.000L118.000,60.000"/>
        <path class="core core7" d="M118.000,32.000L118.000,46.000L118.000,60.000"/>
        <path class="bonds col8" d="M132.000,32.000L132.000,46.000L132.000,60.000"/>
        <path class="core core8" d="M132.000,32.000L132.000,46.000L132.000,60.000"/>
        <path class="bonds connectA0" d="M20.000,60L20,78"/>
        <path class="bonds connectA1" d="M34.000,60L34,78"/>
        <path class="bonds connectB1" d="M34.000,60L20,78"/>
        <path class="bonds connectA2" d="M48.000,60L48,78"/>
        <path class="bonds connectB2" d="M48.000,60L34,78"/>
        <path class="bonds connectA3" d="M62.000,60L62,78"/>
        <path class="bonds connectB3" d="M62.000,60L48,78"/>
        <path class="bonds connectA4" d="M76.000,60L76,78"/>
        <path class="bonds connectB4" d="M76.000,60L62,78"/>
        <path class="bonds connectA5" d="M90.000,60L90,78"/>
        <path class="bonds connectB5" d="M90.000,60L76,78"/>
        <path class="bonds connectA6" d="M104.000,60L104,78"/>
        <path class="bonds connectB6" d="M104.000,60L90,78"/>
        <path class="bonds connectA7" d="M118.000,60L118,78"/>
        <path class="bonds connectB7" d="M118.000,60L104,78"/>
        <path class="bonds connectB8" d="M132.000,60L118,78"/>
        <path class="surface" d="M136,28V68H122V110"/>
        <path class="load" d="M40,18H104M99,14L104,18L99,22M100,120H36M41,116L36,120L41,124"/>
        <path class="atoms" d="M20.000,78h.001M34.000,78h.001M48.000,78h.001M62.000,78h.001M76.000,78h.001M90.000,78h.001M104.000,78h.001M118.000,78h.001"/>
        <path class="atoms" d="M20.000,92h.001M34.000,92h.001M48.000,92h.001M62.000,92h.001M76.000,92h.001M90.000,92h.001M104.000,92h.001M118.000,92h.001"/>
        <path class="atoms" d="M20.000,106h.001M34.000,106h.001M48.000,106h.001M62.000,106h.001M76.000,106h.001M90.000,106h.001M104.000,106h.001M118.000,106h.001"/>
        <path class="atoms atomrow0" d="M20.000,32h.001M34.000,32h.001M48.000,32h.001M62.000,32h.001M76.000,32h.001M90.000,32h.001M104.000,32h.001M118.000,32h.001M132.000,32h.001"/>
        <path class="atoms atomrow1" d="M20.000,46h.001M34.000,46h.001M48.000,46h.001M62.000,46h.001M76.000,46h.001M90.000,46h.001M104.000,46h.001M118.000,46h.001M132.000,46h.001"/>
        <path class="atoms atomrow2" d="M20.000,60h.001M34.000,60h.001M48.000,60h.001M62.000,60h.001M76.000,60h.001M90.000,60h.001M104.000,60h.001M118.000,60h.001M132.000,60h.001"/>
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

if (!customElements.get("concept-edge-dislocation-glide")) {
  customElements.define("concept-edge-dislocation-glide", ConceptEdgeDislocationGlide);
}
