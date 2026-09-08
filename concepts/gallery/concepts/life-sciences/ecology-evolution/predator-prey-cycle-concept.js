// Predator-Prey Cycle. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPredatorPreyCycle extends HTMLElement {
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
        .meadow {
          fill:#172e20
        }
        .den {
          fill:#2d261c
        }
        .rabbit {
          fill:#b7caaa;
          stroke:#d1dcc4;
          stroke-width:.6
        }
        .fox {
          fill:#c98d5c;
          stroke:#e9b276;
          stroke-width:.7
        }
        .animal0 {
          opacity:1;
          animation:animal0 14s linear infinite
        }
        @keyframes animal0 {
          0% {
            opacity:1.000
          }
          1% {
            opacity:1.000
          }
          2% {
            opacity:1.000
          }
          3% {
            opacity:1.000
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:1.000
          }
          49% {
            opacity:1.000
          }
          50% {
            opacity:1.000
          }
          51% {
            opacity:1.000
          }
          52% {
            opacity:1.000
          }
          53% {
            opacity:1.000
          }
          54% {
            opacity:1.000
          }
          55% {
            opacity:1.000
          }
          56% {
            opacity:1.000
          }
          57% {
            opacity:1.000
          }
          58% {
            opacity:1.000
          }
          59% {
            opacity:1.000
          }
          60% {
            opacity:1.000
          }
          61% {
            opacity:1.000
          }
          62% {
            opacity:1.000
          }
          63% {
            opacity:1.000
          }
          64% {
            opacity:1.000
          }
          65% {
            opacity:1.000
          }
          66% {
            opacity:1.000
          }
          67% {
            opacity:1.000
          }
          68% {
            opacity:1.000
          }
          69% {
            opacity:1.000
          }
          70% {
            opacity:1.000
          }
          71% {
            opacity:1.000
          }
          72% {
            opacity:1.000
          }
          73% {
            opacity:1.000
          }
          74% {
            opacity:1.000
          }
          75% {
            opacity:1.000
          }
          76% {
            opacity:1.000
          }
          77% {
            opacity:1.000
          }
          78% {
            opacity:1.000
          }
          79% {
            opacity:1.000
          }
          80% {
            opacity:1.000
          }
          81% {
            opacity:1.000
          }
          82% {
            opacity:1.000
          }
          83% {
            opacity:1.000
          }
          84% {
            opacity:1.000
          }
          85% {
            opacity:1.000
          }
          86% {
            opacity:1.000
          }
          87% {
            opacity:1.000
          }
          88% {
            opacity:1.000
          }
          89% {
            opacity:1.000
          }
          90% {
            opacity:1.000
          }
          91% {
            opacity:1.000
          }
          92% {
            opacity:1.000
          }
          93% {
            opacity:1.000
          }
          94% {
            opacity:1.000
          }
          95% {
            opacity:1.000
          }
          96% {
            opacity:1.000
          }
          97% {
            opacity:1.000
          }
          98% {
            opacity:1.000
          }
          99% {
            opacity:1.000
          }
          100% {
            opacity:1.000
          }
        }
        .animal1 {
          opacity:1;
          animation:animal1 14s linear infinite
        }
        @keyframes animal1 {
          0% {
            opacity:1.000
          }
          1% {
            opacity:1.000
          }
          2% {
            opacity:1.000
          }
          3% {
            opacity:1.000
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:1.000
          }
          49% {
            opacity:1.000
          }
          50% {
            opacity:1.000
          }
          51% {
            opacity:1.000
          }
          52% {
            opacity:1.000
          }
          53% {
            opacity:1.000
          }
          54% {
            opacity:1.000
          }
          55% {
            opacity:1.000
          }
          56% {
            opacity:0.960
          }
          57% {
            opacity:0.901
          }
          58% {
            opacity:0.851
          }
          59% {
            opacity:0.809
          }
          60% {
            opacity:0.774
          }
          61% {
            opacity:0.746
          }
          62% {
            opacity:0.724
          }
          63% {
            opacity:0.708
          }
          64% {
            opacity:0.698
          }
          65% {
            opacity:0.693
          }
          66% {
            opacity:0.693
          }
          67% {
            opacity:0.698
          }
          68% {
            opacity:0.708
          }
          69% {
            opacity:0.723
          }
          70% {
            opacity:0.742
          }
          71% {
            opacity:0.765
          }
          72% {
            opacity:0.794
          }
          73% {
            opacity:0.826
          }
          74% {
            opacity:0.863
          }
          75% {
            opacity:0.905
          }
          76% {
            opacity:0.952
          }
          77% {
            opacity:1.000
          }
          78% {
            opacity:1.000
          }
          79% {
            opacity:1.000
          }
          80% {
            opacity:1.000
          }
          81% {
            opacity:1.000
          }
          82% {
            opacity:1.000
          }
          83% {
            opacity:1.000
          }
          84% {
            opacity:1.000
          }
          85% {
            opacity:1.000
          }
          86% {
            opacity:1.000
          }
          87% {
            opacity:1.000
          }
          88% {
            opacity:1.000
          }
          89% {
            opacity:1.000
          }
          90% {
            opacity:1.000
          }
          91% {
            opacity:1.000
          }
          92% {
            opacity:1.000
          }
          93% {
            opacity:1.000
          }
          94% {
            opacity:1.000
          }
          95% {
            opacity:1.000
          }
          96% {
            opacity:1.000
          }
          97% {
            opacity:1.000
          }
          98% {
            opacity:1.000
          }
          99% {
            opacity:1.000
          }
          100% {
            opacity:1.000
          }
        }
        .animal2 {
          opacity:1;
          animation:animal2 14s linear infinite
        }
        @keyframes animal2 {
          0% {
            opacity:1.000
          }
          1% {
            opacity:1.000
          }
          2% {
            opacity:1.000
          }
          3% {
            opacity:1.000
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:0.880
          }
          49% {
            opacity:0.708
          }
          50% {
            opacity:0.556
          }
          51% {
            opacity:0.422
          }
          52% {
            opacity:0.304
          }
          53% {
            opacity:0.200
          }
          54% {
            opacity:0.108
          }
          55% {
            opacity:0.029
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.003
          }
          78% {
            opacity:0.059
          }
          79% {
            opacity:0.120
          }
          80% {
            opacity:0.187
          }
          81% {
            opacity:0.259
          }
          82% {
            opacity:0.336
          }
          83% {
            opacity:0.420
          }
          84% {
            opacity:0.509
          }
          85% {
            opacity:0.605
          }
          86% {
            opacity:0.708
          }
          87% {
            opacity:0.817
          }
          88% {
            opacity:0.933
          }
          89% {
            opacity:1.000
          }
          90% {
            opacity:1.000
          }
          91% {
            opacity:1.000
          }
          92% {
            opacity:1.000
          }
          93% {
            opacity:1.000
          }
          94% {
            opacity:1.000
          }
          95% {
            opacity:1.000
          }
          96% {
            opacity:1.000
          }
          97% {
            opacity:1.000
          }
          98% {
            opacity:1.000
          }
          99% {
            opacity:1.000
          }
          100% {
            opacity:1.000
          }
        }
        .animal3 {
          opacity:1;
          animation:animal3 14s linear infinite
        }
        @keyframes animal3 {
          0% {
            opacity:1.000
          }
          1% {
            opacity:1.000
          }
          2% {
            opacity:1.000
          }
          3% {
            opacity:1.000
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:0.799
          }
          45% {
            opacity:0.530
          }
          46% {
            opacity:0.288
          }
          47% {
            opacity:0.072
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.057
          }
          90% {
            opacity:0.189
          }
          91% {
            opacity:0.328
          }
          92% {
            opacity:0.476
          }
          93% {
            opacity:0.633
          }
          94% {
            opacity:0.799
          }
          95% {
            opacity:0.974
          }
          96% {
            opacity:1.000
          }
          97% {
            opacity:1.000
          }
          98% {
            opacity:1.000
          }
          99% {
            opacity:1.000
          }
          100% {
            opacity:1.000
          }
        }
        .animal4 {
          opacity:1;
          animation:animal4 14s linear infinite
        }
        @keyframes animal4 {
          0% {
            opacity:1.000
          }
          1% {
            opacity:1.000
          }
          2% {
            opacity:1.000
          }
          3% {
            opacity:1.000
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:0.784
          }
          42% {
            opacity:0.425
          }
          43% {
            opacity:0.097
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.159
          }
          97% {
            opacity:0.354
          }
          98% {
            opacity:0.559
          }
          99% {
            opacity:0.774
          }
          100% {
            opacity:1.000
          }
        }
        .animal5 {
          opacity:0;
          animation:animal5 14s linear infinite
        }
        @keyframes animal5 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.237
          }
          2% {
            opacity:0.484
          }
          3% {
            opacity:0.742
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:0.596
          }
          40% {
            opacity:0.175
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal6 {
          opacity:0;
          animation:animal6 14s linear infinite
        }
        @keyframes animal6 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.010
          }
          5% {
            opacity:0.289
          }
          6% {
            opacity:0.578
          }
          7% {
            opacity:0.876
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:0.517
          }
          38% {
            opacity:0.044
          }
          39% {
            opacity:0.000
          }
          40% {
            opacity:0.000
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal7 {
          opacity:0;
          animation:animal7 14s linear infinite
        }
        @keyframes animal7 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.182
          }
          9% {
            opacity:0.495
          }
          10% {
            opacity:0.814
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:0.509
          }
          36% {
            opacity:0.008
          }
          37% {
            opacity:0.000
          }
          38% {
            opacity:0.000
          }
          39% {
            opacity:0.000
          }
          40% {
            opacity:0.000
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal8 {
          opacity:0;
          animation:animal8 14s linear infinite
        }
        @keyframes animal8 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.137
          }
          12% {
            opacity:0.462
          }
          13% {
            opacity:0.786
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:0.989
          }
          33% {
            opacity:0.510
          }
          34% {
            opacity:0.014
          }
          35% {
            opacity:0.000
          }
          36% {
            opacity:0.000
          }
          37% {
            opacity:0.000
          }
          38% {
            opacity:0.000
          }
          39% {
            opacity:0.000
          }
          40% {
            opacity:0.000
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal9 {
          opacity:0;
          animation:animal9 14s linear infinite
        }
        @keyframes animal9 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.107
          }
          15% {
            opacity:0.420
          }
          16% {
            opacity:0.722
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:0.847
          }
          31% {
            opacity:0.438
          }
          32% {
            opacity:0.000
          }
          33% {
            opacity:0.000
          }
          34% {
            opacity:0.000
          }
          35% {
            opacity:0.000
          }
          36% {
            opacity:0.000
          }
          37% {
            opacity:0.000
          }
          38% {
            opacity:0.000
          }
          39% {
            opacity:0.000
          }
          40% {
            opacity:0.000
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal10 {
          opacity:0;
          animation:animal10 14s linear infinite
        }
        @keyframes animal10 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.000
          }
          15% {
            opacity:0.000
          }
          16% {
            opacity:0.000
          }
          17% {
            opacity:0.009
          }
          18% {
            opacity:0.274
          }
          19% {
            opacity:0.512
          }
          20% {
            opacity:0.718
          }
          21% {
            opacity:0.885
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:0.931
          }
          27% {
            opacity:0.754
          }
          28% {
            opacity:0.511
          }
          29% {
            opacity:0.207
          }
          30% {
            opacity:0.000
          }
          31% {
            opacity:0.000
          }
          32% {
            opacity:0.000
          }
          33% {
            opacity:0.000
          }
          34% {
            opacity:0.000
          }
          35% {
            opacity:0.000
          }
          36% {
            opacity:0.000
          }
          37% {
            opacity:0.000
          }
          38% {
            opacity:0.000
          }
          39% {
            opacity:0.000
          }
          40% {
            opacity:0.000
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal11 {
          opacity:0;
          animation:animal11 14s linear infinite
        }
        @keyframes animal11 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.000
          }
          15% {
            opacity:0.000
          }
          16% {
            opacity:0.000
          }
          17% {
            opacity:0.000
          }
          18% {
            opacity:0.000
          }
          19% {
            opacity:0.000
          }
          20% {
            opacity:0.000
          }
          21% {
            opacity:0.000
          }
          22% {
            opacity:0.007
          }
          23% {
            opacity:0.077
          }
          24% {
            opacity:0.091
          }
          25% {
            opacity:0.043
          }
          26% {
            opacity:0.000
          }
          27% {
            opacity:0.000
          }
          28% {
            opacity:0.000
          }
          29% {
            opacity:0.000
          }
          30% {
            opacity:0.000
          }
          31% {
            opacity:0.000
          }
          32% {
            opacity:0.000
          }
          33% {
            opacity:0.000
          }
          34% {
            opacity:0.000
          }
          35% {
            opacity:0.000
          }
          36% {
            opacity:0.000
          }
          37% {
            opacity:0.000
          }
          38% {
            opacity:0.000
          }
          39% {
            opacity:0.000
          }
          40% {
            opacity:0.000
          }
          41% {
            opacity:0.000
          }
          42% {
            opacity:0.000
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal12 {
          opacity:1;
          animation:animal12 14s linear infinite
        }
        @keyframes animal12 {
          0% {
            opacity:1.000
          }
          1% {
            opacity:1.000
          }
          2% {
            opacity:1.000
          }
          3% {
            opacity:1.000
          }
          4% {
            opacity:1.000
          }
          5% {
            opacity:1.000
          }
          6% {
            opacity:1.000
          }
          7% {
            opacity:1.000
          }
          8% {
            opacity:1.000
          }
          9% {
            opacity:1.000
          }
          10% {
            opacity:1.000
          }
          11% {
            opacity:1.000
          }
          12% {
            opacity:1.000
          }
          13% {
            opacity:1.000
          }
          14% {
            opacity:1.000
          }
          15% {
            opacity:1.000
          }
          16% {
            opacity:1.000
          }
          17% {
            opacity:1.000
          }
          18% {
            opacity:1.000
          }
          19% {
            opacity:1.000
          }
          20% {
            opacity:1.000
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:1.000
          }
          49% {
            opacity:1.000
          }
          50% {
            opacity:1.000
          }
          51% {
            opacity:1.000
          }
          52% {
            opacity:1.000
          }
          53% {
            opacity:1.000
          }
          54% {
            opacity:1.000
          }
          55% {
            opacity:1.000
          }
          56% {
            opacity:1.000
          }
          57% {
            opacity:1.000
          }
          58% {
            opacity:1.000
          }
          59% {
            opacity:1.000
          }
          60% {
            opacity:1.000
          }
          61% {
            opacity:1.000
          }
          62% {
            opacity:1.000
          }
          63% {
            opacity:1.000
          }
          64% {
            opacity:1.000
          }
          65% {
            opacity:1.000
          }
          66% {
            opacity:1.000
          }
          67% {
            opacity:1.000
          }
          68% {
            opacity:1.000
          }
          69% {
            opacity:1.000
          }
          70% {
            opacity:1.000
          }
          71% {
            opacity:1.000
          }
          72% {
            opacity:1.000
          }
          73% {
            opacity:1.000
          }
          74% {
            opacity:1.000
          }
          75% {
            opacity:1.000
          }
          76% {
            opacity:1.000
          }
          77% {
            opacity:1.000
          }
          78% {
            opacity:1.000
          }
          79% {
            opacity:1.000
          }
          80% {
            opacity:1.000
          }
          81% {
            opacity:1.000
          }
          82% {
            opacity:1.000
          }
          83% {
            opacity:1.000
          }
          84% {
            opacity:1.000
          }
          85% {
            opacity:1.000
          }
          86% {
            opacity:1.000
          }
          87% {
            opacity:1.000
          }
          88% {
            opacity:1.000
          }
          89% {
            opacity:1.000
          }
          90% {
            opacity:1.000
          }
          91% {
            opacity:1.000
          }
          92% {
            opacity:1.000
          }
          93% {
            opacity:1.000
          }
          94% {
            opacity:1.000
          }
          95% {
            opacity:1.000
          }
          96% {
            opacity:1.000
          }
          97% {
            opacity:1.000
          }
          98% {
            opacity:1.000
          }
          99% {
            opacity:1.000
          }
          100% {
            opacity:1.000
          }
        }
        .animal13 {
          opacity:0;
          animation:animal13 14s linear infinite
        }
        @keyframes animal13 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.001
          }
          2% {
            opacity:0.006
          }
          3% {
            opacity:0.013
          }
          4% {
            opacity:0.023
          }
          5% {
            opacity:0.037
          }
          6% {
            opacity:0.054
          }
          7% {
            opacity:0.075
          }
          8% {
            opacity:0.101
          }
          9% {
            opacity:0.131
          }
          10% {
            opacity:0.166
          }
          11% {
            opacity:0.207
          }
          12% {
            opacity:0.254
          }
          13% {
            opacity:0.307
          }
          14% {
            opacity:0.369
          }
          15% {
            opacity:0.438
          }
          16% {
            opacity:0.516
          }
          17% {
            opacity:0.604
          }
          18% {
            opacity:0.702
          }
          19% {
            opacity:0.811
          }
          20% {
            opacity:0.933
          }
          21% {
            opacity:1.000
          }
          22% {
            opacity:1.000
          }
          23% {
            opacity:1.000
          }
          24% {
            opacity:1.000
          }
          25% {
            opacity:1.000
          }
          26% {
            opacity:1.000
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:1.000
          }
          49% {
            opacity:1.000
          }
          50% {
            opacity:1.000
          }
          51% {
            opacity:1.000
          }
          52% {
            opacity:1.000
          }
          53% {
            opacity:1.000
          }
          54% {
            opacity:1.000
          }
          55% {
            opacity:1.000
          }
          56% {
            opacity:1.000
          }
          57% {
            opacity:1.000
          }
          58% {
            opacity:1.000
          }
          59% {
            opacity:1.000
          }
          60% {
            opacity:1.000
          }
          61% {
            opacity:1.000
          }
          62% {
            opacity:1.000
          }
          63% {
            opacity:1.000
          }
          64% {
            opacity:1.000
          }
          65% {
            opacity:1.000
          }
          66% {
            opacity:1.000
          }
          67% {
            opacity:1.000
          }
          68% {
            opacity:1.000
          }
          69% {
            opacity:1.000
          }
          70% {
            opacity:1.000
          }
          71% {
            opacity:1.000
          }
          72% {
            opacity:0.951
          }
          73% {
            opacity:0.881
          }
          74% {
            opacity:0.813
          }
          75% {
            opacity:0.749
          }
          76% {
            opacity:0.688
          }
          77% {
            opacity:0.630
          }
          78% {
            opacity:0.575
          }
          79% {
            opacity:0.523
          }
          80% {
            opacity:0.474
          }
          81% {
            opacity:0.427
          }
          82% {
            opacity:0.383
          }
          83% {
            opacity:0.342
          }
          84% {
            opacity:0.303
          }
          85% {
            opacity:0.267
          }
          86% {
            opacity:0.233
          }
          87% {
            opacity:0.201
          }
          88% {
            opacity:0.172
          }
          89% {
            opacity:0.145
          }
          90% {
            opacity:0.121
          }
          91% {
            opacity:0.098
          }
          92% {
            opacity:0.078
          }
          93% {
            opacity:0.060
          }
          94% {
            opacity:0.045
          }
          95% {
            opacity:0.031
          }
          96% {
            opacity:0.020
          }
          97% {
            opacity:0.012
          }
          98% {
            opacity:0.005
          }
          99% {
            opacity:0.001
          }
          100% {
            opacity:0.000
          }
        }
        .animal14 {
          opacity:0;
          animation:animal14 14s linear infinite
        }
        @keyframes animal14 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.000
          }
          15% {
            opacity:0.000
          }
          16% {
            opacity:0.000
          }
          17% {
            opacity:0.000
          }
          18% {
            opacity:0.000
          }
          19% {
            opacity:0.000
          }
          20% {
            opacity:0.000
          }
          21% {
            opacity:0.067
          }
          22% {
            opacity:0.214
          }
          23% {
            opacity:0.375
          }
          24% {
            opacity:0.548
          }
          25% {
            opacity:0.733
          }
          26% {
            opacity:0.929
          }
          27% {
            opacity:1.000
          }
          28% {
            opacity:1.000
          }
          29% {
            opacity:1.000
          }
          30% {
            opacity:1.000
          }
          31% {
            opacity:1.000
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:1.000
          }
          49% {
            opacity:1.000
          }
          50% {
            opacity:1.000
          }
          51% {
            opacity:1.000
          }
          52% {
            opacity:1.000
          }
          53% {
            opacity:1.000
          }
          54% {
            opacity:1.000
          }
          55% {
            opacity:1.000
          }
          56% {
            opacity:1.000
          }
          57% {
            opacity:1.000
          }
          58% {
            opacity:1.000
          }
          59% {
            opacity:1.000
          }
          60% {
            opacity:1.000
          }
          61% {
            opacity:0.961
          }
          62% {
            opacity:0.852
          }
          63% {
            opacity:0.745
          }
          64% {
            opacity:0.643
          }
          65% {
            opacity:0.544
          }
          66% {
            opacity:0.448
          }
          67% {
            opacity:0.356
          }
          68% {
            opacity:0.268
          }
          69% {
            opacity:0.184
          }
          70% {
            opacity:0.103
          }
          71% {
            opacity:0.025
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal15 {
          opacity:0;
          animation:animal15 14s linear infinite
        }
        @keyframes animal15 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.000
          }
          15% {
            opacity:0.000
          }
          16% {
            opacity:0.000
          }
          17% {
            opacity:0.000
          }
          18% {
            opacity:0.000
          }
          19% {
            opacity:0.000
          }
          20% {
            opacity:0.000
          }
          21% {
            opacity:0.000
          }
          22% {
            opacity:0.000
          }
          23% {
            opacity:0.000
          }
          24% {
            opacity:0.000
          }
          25% {
            opacity:0.000
          }
          26% {
            opacity:0.000
          }
          27% {
            opacity:0.134
          }
          28% {
            opacity:0.345
          }
          29% {
            opacity:0.559
          }
          30% {
            opacity:0.772
          }
          31% {
            opacity:0.981
          }
          32% {
            opacity:1.000
          }
          33% {
            opacity:1.000
          }
          34% {
            opacity:1.000
          }
          35% {
            opacity:1.000
          }
          36% {
            opacity:1.000
          }
          37% {
            opacity:1.000
          }
          38% {
            opacity:1.000
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:1.000
          }
          44% {
            opacity:1.000
          }
          45% {
            opacity:1.000
          }
          46% {
            opacity:1.000
          }
          47% {
            opacity:1.000
          }
          48% {
            opacity:1.000
          }
          49% {
            opacity:1.000
          }
          50% {
            opacity:1.000
          }
          51% {
            opacity:1.000
          }
          52% {
            opacity:1.000
          }
          53% {
            opacity:0.936
          }
          54% {
            opacity:0.808
          }
          55% {
            opacity:0.681
          }
          56% {
            opacity:0.556
          }
          57% {
            opacity:0.432
          }
          58% {
            opacity:0.310
          }
          59% {
            opacity:0.191
          }
          60% {
            opacity:0.074
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal16 {
          opacity:0;
          animation:animal16 14s linear infinite
        }
        @keyframes animal16 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.000
          }
          15% {
            opacity:0.000
          }
          16% {
            opacity:0.000
          }
          17% {
            opacity:0.000
          }
          18% {
            opacity:0.000
          }
          19% {
            opacity:0.000
          }
          20% {
            opacity:0.000
          }
          21% {
            opacity:0.000
          }
          22% {
            opacity:0.000
          }
          23% {
            opacity:0.000
          }
          24% {
            opacity:0.000
          }
          25% {
            opacity:0.000
          }
          26% {
            opacity:0.000
          }
          27% {
            opacity:0.000
          }
          28% {
            opacity:0.000
          }
          29% {
            opacity:0.000
          }
          30% {
            opacity:0.000
          }
          31% {
            opacity:0.000
          }
          32% {
            opacity:0.179
          }
          33% {
            opacity:0.365
          }
          34% {
            opacity:0.533
          }
          35% {
            opacity:0.680
          }
          36% {
            opacity:0.803
          }
          37% {
            opacity:0.902
          }
          38% {
            opacity:0.975
          }
          39% {
            opacity:1.000
          }
          40% {
            opacity:1.000
          }
          41% {
            opacity:1.000
          }
          42% {
            opacity:1.000
          }
          43% {
            opacity:0.977
          }
          44% {
            opacity:0.917
          }
          45% {
            opacity:0.842
          }
          46% {
            opacity:0.753
          }
          47% {
            opacity:0.654
          }
          48% {
            opacity:0.546
          }
          49% {
            opacity:0.432
          }
          50% {
            opacity:0.312
          }
          51% {
            opacity:0.189
          }
          52% {
            opacity:0.063
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
          }
        }
        .animal17 {
          opacity:0;
          animation:animal17 14s linear infinite
        }
        @keyframes animal17 {
          0% {
            opacity:0.000
          }
          1% {
            opacity:0.000
          }
          2% {
            opacity:0.000
          }
          3% {
            opacity:0.000
          }
          4% {
            opacity:0.000
          }
          5% {
            opacity:0.000
          }
          6% {
            opacity:0.000
          }
          7% {
            opacity:0.000
          }
          8% {
            opacity:0.000
          }
          9% {
            opacity:0.000
          }
          10% {
            opacity:0.000
          }
          11% {
            opacity:0.000
          }
          12% {
            opacity:0.000
          }
          13% {
            opacity:0.000
          }
          14% {
            opacity:0.000
          }
          15% {
            opacity:0.000
          }
          16% {
            opacity:0.000
          }
          17% {
            opacity:0.000
          }
          18% {
            opacity:0.000
          }
          19% {
            opacity:0.000
          }
          20% {
            opacity:0.000
          }
          21% {
            opacity:0.000
          }
          22% {
            opacity:0.000
          }
          23% {
            opacity:0.000
          }
          24% {
            opacity:0.000
          }
          25% {
            opacity:0.000
          }
          26% {
            opacity:0.000
          }
          27% {
            opacity:0.000
          }
          28% {
            opacity:0.000
          }
          29% {
            opacity:0.000
          }
          30% {
            opacity:0.000
          }
          31% {
            opacity:0.000
          }
          32% {
            opacity:0.000
          }
          33% {
            opacity:0.000
          }
          34% {
            opacity:0.000
          }
          35% {
            opacity:0.000
          }
          36% {
            opacity:0.000
          }
          37% {
            opacity:0.000
          }
          38% {
            opacity:0.000
          }
          39% {
            opacity:0.022
          }
          40% {
            opacity:0.045
          }
          41% {
            opacity:0.043
          }
          42% {
            opacity:0.020
          }
          43% {
            opacity:0.000
          }
          44% {
            opacity:0.000
          }
          45% {
            opacity:0.000
          }
          46% {
            opacity:0.000
          }
          47% {
            opacity:0.000
          }
          48% {
            opacity:0.000
          }
          49% {
            opacity:0.000
          }
          50% {
            opacity:0.000
          }
          51% {
            opacity:0.000
          }
          52% {
            opacity:0.000
          }
          53% {
            opacity:0.000
          }
          54% {
            opacity:0.000
          }
          55% {
            opacity:0.000
          }
          56% {
            opacity:0.000
          }
          57% {
            opacity:0.000
          }
          58% {
            opacity:0.000
          }
          59% {
            opacity:0.000
          }
          60% {
            opacity:0.000
          }
          61% {
            opacity:0.000
          }
          62% {
            opacity:0.000
          }
          63% {
            opacity:0.000
          }
          64% {
            opacity:0.000
          }
          65% {
            opacity:0.000
          }
          66% {
            opacity:0.000
          }
          67% {
            opacity:0.000
          }
          68% {
            opacity:0.000
          }
          69% {
            opacity:0.000
          }
          70% {
            opacity:0.000
          }
          71% {
            opacity:0.000
          }
          72% {
            opacity:0.000
          }
          73% {
            opacity:0.000
          }
          74% {
            opacity:0.000
          }
          75% {
            opacity:0.000
          }
          76% {
            opacity:0.000
          }
          77% {
            opacity:0.000
          }
          78% {
            opacity:0.000
          }
          79% {
            opacity:0.000
          }
          80% {
            opacity:0.000
          }
          81% {
            opacity:0.000
          }
          82% {
            opacity:0.000
          }
          83% {
            opacity:0.000
          }
          84% {
            opacity:0.000
          }
          85% {
            opacity:0.000
          }
          86% {
            opacity:0.000
          }
          87% {
            opacity:0.000
          }
          88% {
            opacity:0.000
          }
          89% {
            opacity:0.000
          }
          90% {
            opacity:0.000
          }
          91% {
            opacity:0.000
          }
          92% {
            opacity:0.000
          }
          93% {
            opacity:0.000
          }
          94% {
            opacity:0.000
          }
          95% {
            opacity:0.000
          }
          96% {
            opacity:0.000
          }
          97% {
            opacity:0.000
          }
          98% {
            opacity:0.000
          }
          99% {
            opacity:0.000
          }
          100% {
            opacity:0.000
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Predator-Prey Cycle">
        <rect class="meadow" x="12" y="18" width="116" height="60" rx="5"/>
        <rect class="den" x="12" y="88" width="116" height="43" rx="5"/>
        <g class="rabbit animal0" transform="translate(25 31)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal1" transform="translate(55 31)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal2" transform="translate(85 31)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal3" transform="translate(115 31)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal4" transform="translate(25 49)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal5" transform="translate(55 49)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal6" transform="translate(85 49)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal7" transform="translate(115 49)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal8" transform="translate(25 67)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal9" transform="translate(55 67)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal10" transform="translate(85 67)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="rabbit animal11" transform="translate(115 67)">
          <ellipse cx="0" cy="1" rx="5" ry="3"/>
          <ellipse cx="4" cy="-2" rx="2.5" ry="2.5"/>
          <ellipse cx="3" cy="-6" rx=".8" ry="3"/>
          <ellipse cx="5" cy="-6" rx=".8" ry="3"/>
          <circle cx="-5" cy="0" r="1.5"/>
        </g>
        <g class="fox animal12" transform="translate(32 99)">
          <path d="M-8,3L-4,-1L1,0L3,-5L6,-1L10,1L6,4H-2L-6,6Z"/>
          <circle fill="#172015" stroke="none" cx="6" cy="0" r=".8"/>
        </g>
        <g class="fox animal13" transform="translate(70 99)">
          <path d="M-8,3L-4,-1L1,0L3,-5L6,-1L10,1L6,4H-2L-6,6Z"/>
          <circle fill="#172015" stroke="none" cx="6" cy="0" r=".8"/>
        </g>
        <g class="fox animal14" transform="translate(108 99)">
          <path d="M-8,3L-4,-1L1,0L3,-5L6,-1L10,1L6,4H-2L-6,6Z"/>
          <circle fill="#172015" stroke="none" cx="6" cy="0" r=".8"/>
        </g>
        <g class="fox animal15" transform="translate(32 118)">
          <path d="M-8,3L-4,-1L1,0L3,-5L6,-1L10,1L6,4H-2L-6,6Z"/>
          <circle fill="#172015" stroke="none" cx="6" cy="0" r=".8"/>
        </g>
        <g class="fox animal16" transform="translate(70 118)">
          <path d="M-8,3L-4,-1L1,0L3,-5L6,-1L10,1L6,4H-2L-6,6Z"/>
          <circle fill="#172015" stroke="none" cx="6" cy="0" r=".8"/>
        </g>
        <g class="fox animal17" transform="translate(108 118)">
          <path d="M-8,3L-4,-1L1,0L3,-5L6,-1L10,1L6,4H-2L-6,6Z"/>
          <circle fill="#172015" stroke="none" cx="6" cy="0" r=".8"/>
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

if (!customElements.get("concept-predator-prey-cycle")) {
  customElements.define("concept-predator-prey-cycle", ConceptPredatorPreyCycle);
}
