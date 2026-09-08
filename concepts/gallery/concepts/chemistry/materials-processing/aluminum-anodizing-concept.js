// Aluminum Anodizing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAluminumAnodizing extends HTMLElement {
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
        .metal {
          fill:#284b3b;
          animation:metal 16s linear infinite
        }
        .film {
          fill:#806c3d;
          stroke:#f3c977;
          stroke-width:.7;
          animation:film 16s linear infinite
        }
        .ion path {
          fill:none;
          stroke:#07120f;
          stroke-width:.8
        }
        .directions {
          opacity:0
        }
        @keyframes metal {
          0% {
            d:path('M20,72H120V122H20Z')
          }
          1% {
            d:path('M20,72H120V122H20Z')
          }
          2% {
            d:path('M20,72H120V122H20Z')
          }
          3% {
            d:path('M20,72H120V122H20Z')
          }
          4% {
            d:path('M20,72H120V122H20Z')
          }
          5% {
            d:path('M20,72H120V122H20Z')
          }
          6% {
            d:path('M20,72H120V122H20Z')
          }
          7% {
            d:path('M20,72H120V122H20Z')
          }
          8% {
            d:path('M20,72H120V122H20Z')
          }
          9% {
            d:path('M20,72H120V122H20Z')
          }
          10% {
            d:path('M20,72H120V122H20Z')
          }
          11% {
            d:path('M20,72H120V122H20Z')
          }
          12% {
            d:path('M20,72H120V122H20Z')
          }
          13% {
            d:path('M20,72H120V122H20Z')
          }
          14% {
            d:path('M20,72H120V122H20Z')
          }
          15% {
            d:path('M20,72H120V122H20Z')
          }
          16% {
            d:path('M20,72.222H120V122H20Z')
          }
          17% {
            d:path('M20,72.444H120V122H20Z')
          }
          18% {
            d:path('M20,72.667H120V122H20Z')
          }
          19% {
            d:path('M20,72.889H120V122H20Z')
          }
          20% {
            d:path('M20,73.111H120V122H20Z')
          }
          21% {
            d:path('M20,73.333H120V122H20Z')
          }
          22% {
            d:path('M20,73.556H120V122H20Z')
          }
          23% {
            d:path('M20,73.778H120V122H20Z')
          }
          24% {
            d:path('M20,74H120V122H20Z')
          }
          25% {
            d:path('M20,74.222H120V122H20Z')
          }
          26% {
            d:path('M20,74.444H120V122H20Z')
          }
          27% {
            d:path('M20,74.667H120V122H20Z')
          }
          28% {
            d:path('M20,74.889H120V122H20Z')
          }
          29% {
            d:path('M20,75.111H120V122H20Z')
          }
          30% {
            d:path('M20,75.333H120V122H20Z')
          }
          31% {
            d:path('M20,75.556H120V122H20Z')
          }
          32% {
            d:path('M20,75.778H120V122H20Z')
          }
          33% {
            d:path('M20,76H120V122H20Z')
          }
          34% {
            d:path('M20,76.222H120V122H20Z')
          }
          35% {
            d:path('M20,76.444H120V122H20Z')
          }
          36% {
            d:path('M20,76.667H120V122H20Z')
          }
          37% {
            d:path('M20,76.889H120V122H20Z')
          }
          38% {
            d:path('M20,77.111H120V122H20Z')
          }
          39% {
            d:path('M20,77.333H120V122H20Z')
          }
          40% {
            d:path('M20,77.556H120V122H20Z')
          }
          41% {
            d:path('M20,77.778H120V122H20Z')
          }
          42% {
            d:path('M20,78H120V122H20Z')
          }
          43% {
            d:path('M20,78.222H120V122H20Z')
          }
          44% {
            d:path('M20,78.444H120V122H20Z')
          }
          45% {
            d:path('M20,78.667H120V122H20Z')
          }
          46% {
            d:path('M20,78.889H120V122H20Z')
          }
          47% {
            d:path('M20,79.111H120V122H20Z')
          }
          48% {
            d:path('M20,79.333H120V122H20Z')
          }
          49% {
            d:path('M20,79.556H120V122H20Z')
          }
          50% {
            d:path('M20,79.778H120V122H20Z')
          }
          51% {
            d:path('M20,80H120V122H20Z')
          }
          52% {
            d:path('M20,80.222H120V122H20Z')
          }
          53% {
            d:path('M20,80.444H120V122H20Z')
          }
          54% {
            d:path('M20,80.667H120V122H20Z')
          }
          55% {
            d:path('M20,80.889H120V122H20Z')
          }
          56% {
            d:path('M20,81.111H120V122H20Z')
          }
          57% {
            d:path('M20,81.333H120V122H20Z')
          }
          58% {
            d:path('M20,81.556H120V122H20Z')
          }
          59% {
            d:path('M20,81.778H120V122H20Z')
          }
          60% {
            d:path('M20,82H120V122H20Z')
          }
          61% {
            d:path('M20,82.222H120V122H20Z')
          }
          62% {
            d:path('M20,82.444H120V122H20Z')
          }
          63% {
            d:path('M20,82.667H120V122H20Z')
          }
          64% {
            d:path('M20,82.889H120V122H20Z')
          }
          65% {
            d:path('M20,83.111H120V122H20Z')
          }
          66% {
            d:path('M20,83.333H120V122H20Z')
          }
          67% {
            d:path('M20,83.556H120V122H20Z')
          }
          68% {
            d:path('M20,83.778H120V122H20Z')
          }
          69% {
            d:path('M20,84H120V122H20Z')
          }
          70% {
            d:path('M20,84.222H120V122H20Z')
          }
          71% {
            d:path('M20,84.444H120V122H20Z')
          }
          72% {
            d:path('M20,84.667H120V122H20Z')
          }
          73% {
            d:path('M20,84.889H120V122H20Z')
          }
          74% {
            d:path('M20,85.111H120V122H20Z')
          }
          75% {
            d:path('M20,85.333H120V122H20Z')
          }
          76% {
            d:path('M20,85.556H120V122H20Z')
          }
          77% {
            d:path('M20,85.778H120V122H20Z')
          }
          78% {
            d:path('M20,86H120V122H20Z')
          }
          79% {
            d:path('M20,86H120V122H20Z')
          }
          80% {
            d:path('M20,86H120V122H20Z')
          }
          81% {
            d:path('M20,86H120V122H20Z')
          }
          82% {
            d:path('M20,86H120V122H20Z')
          }
          83% {
            d:path('M20,86H120V122H20Z')
          }
          84% {
            d:path('M20,86H120V122H20Z')
          }
          85% {
            d:path('M20,86H120V122H20Z')
          }
          86% {
            d:path('M20,86H120V122H20Z')
          }
          87% {
            d:path('M20,86H120V122H20Z')
          }
          88% {
            d:path('M20,86H120V122H20Z')
          }
          89% {
            d:path('M20,86H120V122H20Z')
          }
          90% {
            d:path('M20,86H120V122H20Z')
          }
          91% {
            d:path('M20,86H120V122H20Z')
          }
          92% {
            d:path('M20,86H120V122H20Z')
          }
          93% {
            d:path('M20,86H120V122H20Z')
          }
          94% {
            d:path('M20,86H120V122H20Z')
          }
          95% {
            d:path('M20,86H120V122H20Z')
          }
          96% {
            d:path('M20,86H120V122H20Z')
          }
          97% {
            d:path('M20,86H120V122H20Z')
          }
          98% {
            d:path('M20,86H120V122H20Z')
          }
          99% {
            d:path('M20,86H120V122H20Z')
          }
          100% {
            d:path('M20,86H120V122H20Z')
          }
        }
        @keyframes film {
          0% {
            d:path('M20,70H120V72H20Z')
          }
          1% {
            d:path('M20,70H120V72H20Z')
          }
          2% {
            d:path('M20,70H120V72H20Z')
          }
          3% {
            d:path('M20,70H120V72H20Z')
          }
          4% {
            d:path('M20,70H120V72H20Z')
          }
          5% {
            d:path('M20,70H120V72H20Z')
          }
          6% {
            d:path('M20,70H120V72H20Z')
          }
          7% {
            d:path('M20,70H120V72H20Z')
          }
          8% {
            d:path('M20,70H120V72H20Z')
          }
          9% {
            d:path('M20,70H120V72H20Z')
          }
          10% {
            d:path('M20,70H120V72H20Z')
          }
          11% {
            d:path('M20,70H120V72H20Z')
          }
          12% {
            d:path('M20,70H120V72H20Z')
          }
          13% {
            d:path('M20,70H120V72H20Z')
          }
          14% {
            d:path('M20,70H120V72H20Z')
          }
          15% {
            d:path('M20,70H120V72H20Z')
          }
          16% {
            d:path('M20,69.841H120V72.222H20Z')
          }
          17% {
            d:path('M20,69.683H120V72.444H20Z')
          }
          18% {
            d:path('M20,69.524H120V72.667H20Z')
          }
          19% {
            d:path('M20,69.365H120V72.889H20Z')
          }
          20% {
            d:path('M20,69.206H120V73.111H20Z')
          }
          21% {
            d:path('M20,69.048H120V73.333H20Z')
          }
          22% {
            d:path('M20,68.889H120V73.556H20Z')
          }
          23% {
            d:path('M20,68.73H120V73.778H20Z')
          }
          24% {
            d:path('M20,68.571H120V74H20Z')
          }
          25% {
            d:path('M20,68.413H120V74.222H20Z')
          }
          26% {
            d:path('M20,68.254H120V74.444H20Z')
          }
          27% {
            d:path('M20,68.095H120V74.667H20Z')
          }
          28% {
            d:path('M20,67.937H120V74.889H20Z')
          }
          29% {
            d:path('M20,67.778H120V75.111H20Z')
          }
          30% {
            d:path('M20,67.619H120V75.333H20Z')
          }
          31% {
            d:path('M20,67.46H120V75.556H20Z')
          }
          32% {
            d:path('M20,67.302H120V75.778H20Z')
          }
          33% {
            d:path('M20,67.143H120V76H20Z')
          }
          34% {
            d:path('M20,66.984H120V76.222H20Z')
          }
          35% {
            d:path('M20,66.825H120V76.444H20Z')
          }
          36% {
            d:path('M20,66.667H120V76.667H20Z')
          }
          37% {
            d:path('M20,66.508H120V76.889H20Z')
          }
          38% {
            d:path('M20,66.349H120V77.111H20Z')
          }
          39% {
            d:path('M20,66.19H120V77.333H20Z')
          }
          40% {
            d:path('M20,66.032H120V77.556H20Z')
          }
          41% {
            d:path('M20,65.873H120V77.778H20Z')
          }
          42% {
            d:path('M20,65.714H120V78H20Z')
          }
          43% {
            d:path('M20,65.556H120V78.222H20Z')
          }
          44% {
            d:path('M20,65.397H120V78.444H20Z')
          }
          45% {
            d:path('M20,65.238H120V78.667H20Z')
          }
          46% {
            d:path('M20,65.079H120V78.889H20Z')
          }
          47% {
            d:path('M20,64.921H120V79.111H20Z')
          }
          48% {
            d:path('M20,64.762H120V79.333H20Z')
          }
          49% {
            d:path('M20,64.603H120V79.556H20Z')
          }
          50% {
            d:path('M20,64.444H120V79.778H20Z')
          }
          51% {
            d:path('M20,64.286H120V80H20Z')
          }
          52% {
            d:path('M20,64.127H120V80.222H20Z')
          }
          53% {
            d:path('M20,63.968H120V80.444H20Z')
          }
          54% {
            d:path('M20,63.81H120V80.667H20Z')
          }
          55% {
            d:path('M20,63.651H120V80.889H20Z')
          }
          56% {
            d:path('M20,63.492H120V81.111H20Z')
          }
          57% {
            d:path('M20,63.333H120V81.333H20Z')
          }
          58% {
            d:path('M20,63.175H120V81.556H20Z')
          }
          59% {
            d:path('M20,63.016H120V81.778H20Z')
          }
          60% {
            d:path('M20,62.857H120V82H20Z')
          }
          61% {
            d:path('M20,62.698H120V82.222H20Z')
          }
          62% {
            d:path('M20,62.54H120V82.444H20Z')
          }
          63% {
            d:path('M20,62.381H120V82.667H20Z')
          }
          64% {
            d:path('M20,62.222H120V82.889H20Z')
          }
          65% {
            d:path('M20,62.063H120V83.111H20Z')
          }
          66% {
            d:path('M20,61.905H120V83.333H20Z')
          }
          67% {
            d:path('M20,61.746H120V83.556H20Z')
          }
          68% {
            d:path('M20,61.587H120V83.778H20Z')
          }
          69% {
            d:path('M20,61.429H120V84H20Z')
          }
          70% {
            d:path('M20,61.27H120V84.222H20Z')
          }
          71% {
            d:path('M20,61.111H120V84.444H20Z')
          }
          72% {
            d:path('M20,60.952H120V84.667H20Z')
          }
          73% {
            d:path('M20,60.794H120V84.889H20Z')
          }
          74% {
            d:path('M20,60.635H120V85.111H20Z')
          }
          75% {
            d:path('M20,60.476H120V85.333H20Z')
          }
          76% {
            d:path('M20,60.317H120V85.556H20Z')
          }
          77% {
            d:path('M20,60.159H120V85.778H20Z')
          }
          78% {
            d:path('M20,60H120V86H20Z')
          }
          79% {
            d:path('M20,60H120V86H20Z')
          }
          80% {
            d:path('M20,60H120V86H20Z')
          }
          81% {
            d:path('M20,60H120V86H20Z')
          }
          82% {
            d:path('M20,60H120V86H20Z')
          }
          83% {
            d:path('M20,60H120V86H20Z')
          }
          84% {
            d:path('M20,60H120V86H20Z')
          }
          85% {
            d:path('M20,60H120V86H20Z')
          }
          86% {
            d:path('M20,60H120V86H20Z')
          }
          87% {
            d:path('M20,60H120V86H20Z')
          }
          88% {
            d:path('M20,60H120V86H20Z')
          }
          89% {
            d:path('M20,60H120V86H20Z')
          }
          90% {
            d:path('M20,60H120V86H20Z')
          }
          91% {
            d:path('M20,60H120V86H20Z')
          }
          92% {
            d:path('M20,60H120V86H20Z')
          }
          93% {
            d:path('M20,60H120V86H20Z')
          }
          94% {
            d:path('M20,60H120V86H20Z')
          }
          95% {
            d:path('M20,60H120V86H20Z')
          }
          96% {
            d:path('M20,60H120V86H20Z')
          }
          97% {
            d:path('M20,60H120V86H20Z')
          }
          98% {
            d:path('M20,60H120V86H20Z')
          }
          99% {
            d:path('M20,60H120V86H20Z')
          }
          100% {
            d:path('M20,60H120V86H20Z')
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .directions {
            opacity:.65
          }
        }
        .ion0 {
          animation:ion0 16s linear infinite
        }
        @keyframes ion0 {
          0% {
            transform:translateY(70.625px);
            opacity:0.000
          }
          1% {
            transform:translateY(70.250px);
            opacity:0.000
          }
          2% {
            transform:translateY(69.875px);
            opacity:0.000
          }
          3% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          4% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          5% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          6% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          7% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          8% {
            transform:translateY(72.125px);
            opacity:0.000
          }
          9% {
            transform:translateY(71.750px);
            opacity:0.000
          }
          10% {
            transform:translateY(71.375px);
            opacity:0.000
          }
          11% {
            transform:translateY(71.000px);
            opacity:0.000
          }
          12% {
            transform:translateY(70.625px);
            opacity:0.000
          }
          13% {
            transform:translateY(70.250px);
            opacity:0.000
          }
          14% {
            transform:translateY(69.875px);
            opacity:0.000
          }
          15% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          16% {
            transform:translateY(69.722px);
            opacity:0.000
          }
          17% {
            transform:translateY(69.944px);
            opacity:0.000
          }
          18% {
            transform:translateY(72.024px);
            opacity:0.000
          }
          19% {
            transform:translateY(71.865px);
            opacity:0.000
          }
          20% {
            transform:translateY(71.569px);
            opacity:0.000
          }
          21% {
            transform:translateY(71.369px);
            opacity:0.000
          }
          22% {
            transform:translateY(71.264px);
            opacity:0.000
          }
          23% {
            transform:translateY(71.254px);
            opacity:0.000
          }
          24% {
            transform:translateY(71.339px);
            opacity:0.000
          }
          25% {
            transform:translateY(71.520px);
            opacity:0.000
          }
          26% {
            transform:translateY(71.796px);
            opacity:0.000
          }
          27% {
            transform:translateY(72.167px);
            opacity:0.000
          }
          28% {
            transform:translateY(72.389px);
            opacity:0.000
          }
          29% {
            transform:translateY(72.611px);
            opacity:0.000
          }
          30% {
            transform:translateY(70.119px);
            opacity:0.000
          }
          31% {
            transform:translateY(69.960px);
            opacity:0.500
          }
          32% {
            transform:translateY(70.236px);
            opacity:1.000
          }
          33% {
            transform:translateY(70.607px);
            opacity:1.000
          }
          34% {
            transform:translateY(71.073px);
            opacity:1.000
          }
          35% {
            transform:translateY(71.635px);
            opacity:1.000
          }
          36% {
            transform:translateY(72.292px);
            opacity:1.000
          }
          37% {
            transform:translateY(73.044px);
            opacity:1.000
          }
          38% {
            transform:translateY(73.891px);
            opacity:1.000
          }
          39% {
            transform:translateY(74.833px);
            opacity:0.500
          }
          40% {
            transform:translateY(75.056px);
            opacity:0.000
          }
          41% {
            transform:translateY(75.278px);
            opacity:0.000
          }
          42% {
            transform:translateY(68.214px);
            opacity:0.000
          }
          43% {
            transform:translateY(68.056px);
            opacity:0.500
          }
          44% {
            transform:translateY(68.903px);
            opacity:1.000
          }
          45% {
            transform:translateY(69.845px);
            opacity:1.000
          }
          46% {
            transform:translateY(70.883px);
            opacity:1.000
          }
          47% {
            transform:translateY(72.016px);
            opacity:1.000
          }
          48% {
            transform:translateY(73.244px);
            opacity:1.000
          }
          49% {
            transform:translateY(74.567px);
            opacity:1.000
          }
          50% {
            transform:translateY(75.986px);
            opacity:1.000
          }
          51% {
            transform:translateY(77.500px);
            opacity:0.500
          }
          52% {
            transform:translateY(77.722px);
            opacity:0.000
          }
          53% {
            transform:translateY(77.944px);
            opacity:0.000
          }
          54% {
            transform:translateY(66.310px);
            opacity:0.000
          }
          55% {
            transform:translateY(66.151px);
            opacity:0.500
          }
          56% {
            transform:translateY(67.569px);
            opacity:1.000
          }
          57% {
            transform:translateY(69.083px);
            opacity:1.000
          }
          58% {
            transform:translateY(70.692px);
            opacity:1.000
          }
          59% {
            transform:translateY(72.397px);
            opacity:1.000
          }
          60% {
            transform:translateY(74.196px);
            opacity:1.000
          }
          61% {
            transform:translateY(76.091px);
            opacity:1.000
          }
          62% {
            transform:translateY(78.081px);
            opacity:1.000
          }
          63% {
            transform:translateY(80.167px);
            opacity:0.500
          }
          64% {
            transform:translateY(80.389px);
            opacity:0.000
          }
          65% {
            transform:translateY(80.611px);
            opacity:0.000
          }
          66% {
            transform:translateY(64.405px);
            opacity:0.000
          }
          67% {
            transform:translateY(64.246px);
            opacity:0.500
          }
          68% {
            transform:translateY(66.236px);
            opacity:1.000
          }
          69% {
            transform:translateY(68.321px);
            opacity:1.000
          }
          70% {
            transform:translateY(70.502px);
            opacity:1.000
          }
          71% {
            transform:translateY(72.778px);
            opacity:1.000
          }
          72% {
            transform:translateY(75.149px);
            opacity:1.000
          }
          73% {
            transform:translateY(77.615px);
            opacity:1.000
          }
          74% {
            transform:translateY(80.177px);
            opacity:1.000
          }
          75% {
            transform:translateY(82.833px);
            opacity:0.500
          }
          76% {
            transform:translateY(83.056px);
            opacity:0.000
          }
          77% {
            transform:translateY(83.278px);
            opacity:0.000
          }
          78% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          79% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          80% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          81% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          82% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          83% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          84% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          85% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          86% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          87% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          88% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          89% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          90% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          91% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          92% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          93% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          94% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          95% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          96% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          97% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          98% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          99% {
            transform:translateY(83.500px);
            opacity:0.000
          }
          100% {
            transform:translateY(83.500px);
            opacity:0.000
          }
        }
        .ion1 {
          animation:ion1 16s linear infinite
        }
        @keyframes ion1 {
          0% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          1% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          2% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          3% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          4% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          5% {
            transform:translateY(69.875px);
            opacity:0.000
          }
          6% {
            transform:translateY(70.250px);
            opacity:0.000
          }
          7% {
            transform:translateY(70.625px);
            opacity:0.000
          }
          8% {
            transform:translateY(71.000px);
            opacity:0.000
          }
          9% {
            transform:translateY(71.375px);
            opacity:0.000
          }
          10% {
            transform:translateY(71.750px);
            opacity:0.000
          }
          11% {
            transform:translateY(72.125px);
            opacity:0.000
          }
          12% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          13% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          14% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          15% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          16% {
            transform:translateY(69.722px);
            opacity:0.000
          }
          17% {
            transform:translateY(70.224px);
            opacity:0.000
          }
          18% {
            transform:translateY(70.631px);
            opacity:0.000
          }
          19% {
            transform:translateY(70.942px);
            opacity:0.000
          }
          20% {
            transform:translateY(71.159px);
            opacity:0.000
          }
          21% {
            transform:translateY(71.280px);
            opacity:0.000
          }
          22% {
            transform:translateY(71.306px);
            opacity:0.000
          }
          23% {
            transform:translateY(71.236px);
            opacity:0.000
          }
          24% {
            transform:translateY(71.071px);
            opacity:0.000
          }
          25% {
            transform:translateY(70.913px);
            opacity:0.000
          }
          26% {
            transform:translateY(70.754px);
            opacity:0.000
          }
          27% {
            transform:translateY(72.167px);
            opacity:0.000
          }
          28% {
            transform:translateY(72.389px);
            opacity:0.000
          }
          29% {
            transform:translateY(72.319px);
            opacity:0.000
          }
          30% {
            transform:translateY(72.155px);
            opacity:1.000
          }
          31% {
            transform:translateY(71.895px);
            opacity:1.000
          }
          32% {
            transform:translateY(71.540px);
            opacity:1.000
          }
          33% {
            transform:translateY(71.089px);
            opacity:1.000
          }
          34% {
            transform:translateY(70.544px);
            opacity:1.000
          }
          35% {
            transform:translateY(69.903px);
            opacity:1.000
          }
          36% {
            transform:translateY(69.167px);
            opacity:0.500
          }
          37% {
            transform:translateY(69.008px);
            opacity:0.000
          }
          38% {
            transform:translateY(68.849px);
            opacity:0.000
          }
          39% {
            transform:translateY(74.833px);
            opacity:0.000
          }
          40% {
            transform:translateY(75.056px);
            opacity:0.500
          }
          41% {
            transform:translateY(74.415px);
            opacity:1.000
          }
          42% {
            transform:translateY(73.679px);
            opacity:1.000
          }
          43% {
            transform:translateY(72.847px);
            opacity:1.000
          }
          44% {
            transform:translateY(71.921px);
            opacity:1.000
          }
          45% {
            transform:translateY(70.899px);
            opacity:1.000
          }
          46% {
            transform:translateY(69.782px);
            opacity:1.000
          }
          47% {
            transform:translateY(68.569px);
            opacity:1.000
          }
          48% {
            transform:translateY(67.262px);
            opacity:0.500
          }
          49% {
            transform:translateY(67.103px);
            opacity:0.000
          }
          50% {
            transform:translateY(66.944px);
            opacity:0.000
          }
          51% {
            transform:translateY(77.500px);
            opacity:0.000
          }
          52% {
            transform:translateY(77.722px);
            opacity:0.500
          }
          53% {
            transform:translateY(76.510px);
            opacity:1.000
          }
          54% {
            transform:translateY(75.202px);
            opacity:1.000
          }
          55% {
            transform:translateY(73.800px);
            opacity:1.000
          }
          56% {
            transform:translateY(72.302px);
            opacity:1.000
          }
          57% {
            transform:translateY(70.708px);
            opacity:1.000
          }
          58% {
            transform:translateY(69.020px);
            opacity:1.000
          }
          59% {
            transform:translateY(67.236px);
            opacity:1.000
          }
          60% {
            transform:translateY(65.357px);
            opacity:0.500
          }
          61% {
            transform:translateY(65.198px);
            opacity:0.000
          }
          62% {
            transform:translateY(65.040px);
            opacity:0.000
          }
          63% {
            transform:translateY(80.167px);
            opacity:0.000
          }
          64% {
            transform:translateY(80.389px);
            opacity:0.500
          }
          65% {
            transform:translateY(78.605px);
            opacity:1.000
          }
          66% {
            transform:translateY(76.726px);
            opacity:1.000
          }
          67% {
            transform:translateY(74.752px);
            opacity:1.000
          }
          68% {
            transform:translateY(72.683px);
            opacity:1.000
          }
          69% {
            transform:translateY(70.518px);
            opacity:1.000
          }
          70% {
            transform:translateY(68.258px);
            opacity:1.000
          }
          71% {
            transform:translateY(65.903px);
            opacity:1.000
          }
          72% {
            transform:translateY(63.452px);
            opacity:0.500
          }
          73% {
            transform:translateY(63.294px);
            opacity:0.000
          }
          74% {
            transform:translateY(63.135px);
            opacity:0.000
          }
          75% {
            transform:translateY(82.833px);
            opacity:0.000
          }
          76% {
            transform:translateY(83.056px);
            opacity:0.500
          }
          77% {
            transform:translateY(80.700px);
            opacity:0.500
          }
          78% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          79% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          80% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          81% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          82% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          83% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          84% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          85% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          86% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          87% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          88% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          89% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          90% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          91% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          92% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          93% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          94% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          95% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          96% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          97% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          98% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          99% {
            transform:translateY(80.875px);
            opacity:0.000
          }
          100% {
            transform:translateY(80.875px);
            opacity:0.000
          }
        }
        .ion2 {
          animation:ion2 16s linear infinite
        }
        @keyframes ion2 {
          0% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          1% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          2% {
            transform:translateY(72.125px);
            opacity:0.000
          }
          3% {
            transform:translateY(71.750px);
            opacity:0.000
          }
          4% {
            transform:translateY(71.375px);
            opacity:0.000
          }
          5% {
            transform:translateY(71.000px);
            opacity:0.000
          }
          6% {
            transform:translateY(70.625px);
            opacity:0.000
          }
          7% {
            transform:translateY(70.250px);
            opacity:0.000
          }
          8% {
            transform:translateY(69.875px);
            opacity:0.000
          }
          9% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          10% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          11% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          12% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          13% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          14% {
            transform:translateY(72.125px);
            opacity:0.000
          }
          15% {
            transform:translateY(71.750px);
            opacity:0.000
          }
          16% {
            transform:translateY(71.359px);
            opacity:0.000
          }
          17% {
            transform:translateY(71.063px);
            opacity:0.000
          }
          18% {
            transform:translateY(70.863px);
            opacity:0.000
          }
          19% {
            transform:translateY(70.758px);
            opacity:0.000
          }
          20% {
            transform:translateY(70.748px);
            opacity:0.000
          }
          21% {
            transform:translateY(70.833px);
            opacity:0.000
          }
          22% {
            transform:translateY(71.056px);
            opacity:0.000
          }
          23% {
            transform:translateY(71.278px);
            opacity:0.000
          }
          24% {
            transform:translateY(71.071px);
            opacity:0.000
          }
          25% {
            transform:translateY(70.913px);
            opacity:0.000
          }
          26% {
            transform:translateY(70.903px);
            opacity:0.000
          }
          27% {
            transform:translateY(70.988px);
            opacity:0.000
          }
          28% {
            transform:translateY(71.169px);
            opacity:0.000
          }
          29% {
            transform:translateY(71.444px);
            opacity:0.000
          }
          30% {
            transform:translateY(71.815px);
            opacity:1.000
          }
          31% {
            transform:translateY(72.282px);
            opacity:1.000
          }
          32% {
            transform:translateY(72.843px);
            opacity:1.000
          }
          33% {
            transform:translateY(73.500px);
            opacity:0.500
          }
          34% {
            transform:translateY(73.722px);
            opacity:0.000
          }
          35% {
            transform:translateY(73.944px);
            opacity:0.000
          }
          36% {
            transform:translateY(69.167px);
            opacity:0.000
          }
          37% {
            transform:translateY(69.008px);
            opacity:0.500
          }
          38% {
            transform:translateY(69.569px);
            opacity:1.000
          }
          39% {
            transform:translateY(70.226px);
            opacity:1.000
          }
          40% {
            transform:translateY(70.978px);
            opacity:1.000
          }
          41% {
            transform:translateY(71.825px);
            opacity:1.000
          }
          42% {
            transform:translateY(72.768px);
            opacity:1.000
          }
          43% {
            transform:translateY(73.806px);
            opacity:1.000
          }
          44% {
            transform:translateY(74.938px);
            opacity:1.000
          }
          45% {
            transform:translateY(76.167px);
            opacity:0.500
          }
          46% {
            transform:translateY(76.389px);
            opacity:0.000
          }
          47% {
            transform:translateY(76.611px);
            opacity:0.000
          }
          48% {
            transform:translateY(67.262px);
            opacity:0.000
          }
          49% {
            transform:translateY(67.103px);
            opacity:0.500
          }
          50% {
            transform:translateY(68.236px);
            opacity:1.000
          }
          51% {
            transform:translateY(69.464px);
            opacity:1.000
          }
          52% {
            transform:translateY(70.788px);
            opacity:1.000
          }
          53% {
            transform:translateY(72.206px);
            opacity:1.000
          }
          54% {
            transform:translateY(73.720px);
            opacity:1.000
          }
          55% {
            transform:translateY(75.329px);
            opacity:1.000
          }
          56% {
            transform:translateY(77.034px);
            opacity:1.000
          }
          57% {
            transform:translateY(78.833px);
            opacity:0.500
          }
          58% {
            transform:translateY(79.056px);
            opacity:0.000
          }
          59% {
            transform:translateY(79.278px);
            opacity:0.000
          }
          60% {
            transform:translateY(65.357px);
            opacity:0.000
          }
          61% {
            transform:translateY(65.198px);
            opacity:0.500
          }
          62% {
            transform:translateY(66.903px);
            opacity:1.000
          }
          63% {
            transform:translateY(68.702px);
            opacity:1.000
          }
          64% {
            transform:translateY(70.597px);
            opacity:1.000
          }
          65% {
            transform:translateY(72.587px);
            opacity:1.000
          }
          66% {
            transform:translateY(74.673px);
            opacity:1.000
          }
          67% {
            transform:translateY(76.853px);
            opacity:1.000
          }
          68% {
            transform:translateY(79.129px);
            opacity:1.000
          }
          69% {
            transform:translateY(81.500px);
            opacity:0.500
          }
          70% {
            transform:translateY(81.722px);
            opacity:0.000
          }
          71% {
            transform:translateY(81.944px);
            opacity:0.000
          }
          72% {
            transform:translateY(63.452px);
            opacity:0.000
          }
          73% {
            transform:translateY(63.294px);
            opacity:0.500
          }
          74% {
            transform:translateY(65.569px);
            opacity:1.000
          }
          75% {
            transform:translateY(67.940px);
            opacity:1.000
          }
          76% {
            transform:translateY(70.407px);
            opacity:1.000
          }
          77% {
            transform:translateY(72.968px);
            opacity:0.500
          }
          78% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          79% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          80% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          81% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          82% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          83% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          84% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          85% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          86% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          87% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          88% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          89% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          90% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          91% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          92% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          93% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          94% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          95% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          96% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          97% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          98% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          99% {
            transform:translateY(73.000px);
            opacity:0.000
          }
          100% {
            transform:translateY(73.000px);
            opacity:0.000
          }
        }
        .ion3 {
          animation:ion3 16s linear infinite
        }
        @keyframes ion3 {
          0% {
            transform:translateY(70.250px);
            opacity:0.000
          }
          1% {
            transform:translateY(70.625px);
            opacity:0.000
          }
          2% {
            transform:translateY(71.000px);
            opacity:0.000
          }
          3% {
            transform:translateY(71.375px);
            opacity:0.000
          }
          4% {
            transform:translateY(71.750px);
            opacity:0.000
          }
          5% {
            transform:translateY(72.125px);
            opacity:0.000
          }
          6% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          7% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          8% {
            transform:translateY(72.500px);
            opacity:0.000
          }
          9% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          10% {
            transform:translateY(69.500px);
            opacity:0.000
          }
          11% {
            transform:translateY(69.875px);
            opacity:0.000
          }
          12% {
            transform:translateY(70.250px);
            opacity:0.000
          }
          13% {
            transform:translateY(70.625px);
            opacity:0.000
          }
          14% {
            transform:translateY(71.000px);
            opacity:0.000
          }
          15% {
            transform:translateY(71.375px);
            opacity:0.000
          }
          16% {
            transform:translateY(71.687px);
            opacity:0.000
          }
          17% {
            transform:translateY(71.903px);
            opacity:0.000
          }
          18% {
            transform:translateY(72.024px);
            opacity:0.000
          }
          19% {
            transform:translateY(71.865px);
            opacity:0.000
          }
          20% {
            transform:translateY(71.706px);
            opacity:0.000
          }
          21% {
            transform:translateY(70.833px);
            opacity:0.000
          }
          22% {
            transform:translateY(71.056px);
            opacity:0.000
          }
          23% {
            transform:translateY(71.272px);
            opacity:0.000
          }
          24% {
            transform:translateY(71.393px);
            opacity:0.000
          }
          25% {
            transform:translateY(71.419px);
            opacity:0.000
          }
          26% {
            transform:translateY(71.349px);
            opacity:0.000
          }
          27% {
            transform:translateY(71.185px);
            opacity:0.000
          }
          28% {
            transform:translateY(70.925px);
            opacity:0.000
          }
          29% {
            transform:translateY(70.569px);
            opacity:0.000
          }
          30% {
            transform:translateY(70.119px);
            opacity:0.500
          }
          31% {
            transform:translateY(69.960px);
            opacity:0.000
          }
          32% {
            transform:translateY(69.802px);
            opacity:0.000
          }
          33% {
            transform:translateY(73.500px);
            opacity:0.000
          }
          34% {
            transform:translateY(73.722px);
            opacity:0.500
          }
          35% {
            transform:translateY(73.367px);
            opacity:1.000
          }
          36% {
            transform:translateY(72.917px);
            opacity:1.000
          }
          37% {
            transform:translateY(72.371px);
            opacity:1.000
          }
          38% {
            transform:translateY(71.730px);
            opacity:1.000
          }
          39% {
            transform:translateY(70.994px);
            opacity:1.000
          }
          40% {
            transform:translateY(70.163px);
            opacity:1.000
          }
          41% {
            transform:translateY(69.236px);
            opacity:1.000
          }
          42% {
            transform:translateY(68.214px);
            opacity:0.500
          }
          43% {
            transform:translateY(68.056px);
            opacity:0.000
          }
          44% {
            transform:translateY(67.897px);
            opacity:0.000
          }
          45% {
            transform:translateY(76.167px);
            opacity:0.000
          }
          46% {
            transform:translateY(76.389px);
            opacity:0.500
          }
          47% {
            transform:translateY(75.462px);
            opacity:1.000
          }
          48% {
            transform:translateY(74.440px);
            opacity:1.000
          }
          49% {
            transform:translateY(73.323px);
            opacity:1.000
          }
          50% {
            transform:translateY(72.111px);
            opacity:1.000
          }
          51% {
            transform:translateY(70.804px);
            opacity:1.000
          }
          52% {
            transform:translateY(69.401px);
            opacity:1.000
          }
          53% {
            transform:translateY(67.903px);
            opacity:1.000
          }
          54% {
            transform:translateY(66.310px);
            opacity:0.500
          }
          55% {
            transform:translateY(66.151px);
            opacity:0.000
          }
          56% {
            transform:translateY(65.992px);
            opacity:0.000
          }
          57% {
            transform:translateY(78.833px);
            opacity:0.000
          }
          58% {
            transform:translateY(79.056px);
            opacity:0.500
          }
          59% {
            transform:translateY(77.558px);
            opacity:1.000
          }
          60% {
            transform:translateY(75.964px);
            opacity:1.000
          }
          61% {
            transform:translateY(74.276px);
            opacity:1.000
          }
          62% {
            transform:translateY(72.492px);
            opacity:1.000
          }
          63% {
            transform:translateY(70.613px);
            opacity:1.000
          }
          64% {
            transform:translateY(68.639px);
            opacity:1.000
          }
          65% {
            transform:translateY(66.569px);
            opacity:1.000
          }
          66% {
            transform:translateY(64.405px);
            opacity:0.500
          }
          67% {
            transform:translateY(64.246px);
            opacity:0.000
          }
          68% {
            transform:translateY(64.087px);
            opacity:0.000
          }
          69% {
            transform:translateY(81.500px);
            opacity:0.000
          }
          70% {
            transform:translateY(81.722px);
            opacity:0.500
          }
          71% {
            transform:translateY(79.653px);
            opacity:1.000
          }
          72% {
            transform:translateY(77.488px);
            opacity:1.000
          }
          73% {
            transform:translateY(75.228px);
            opacity:1.000
          }
          74% {
            transform:translateY(72.873px);
            opacity:1.000
          }
          75% {
            transform:translateY(70.423px);
            opacity:1.000
          }
          76% {
            transform:translateY(67.877px);
            opacity:1.000
          }
          77% {
            transform:translateY(65.236px);
            opacity:0.500
          }
          78% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          79% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          80% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          81% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          82% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          83% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          84% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          85% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          86% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          87% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          88% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          89% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          90% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          91% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          92% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          93% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          94% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          95% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          96% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          97% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          98% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          99% {
            transform:translateY(65.125px);
            opacity:0.000
          }
          100% {
            transform:translateY(65.125px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Aluminum Anodizing">
        <path class="ink muted" d="M10,28V126H128V28"/>
        <rect x="11" y="28" width="116" height="97" fill="#102d34"/>
        <path class="metal" d="M20,86H120V122H20Z"/>
        <path class="film" d="M20,60H120V86H20Z"/>
        <path class="ink muted" stroke-dasharray="2 2" d="M11,71H18M122,71H128"/>
        <path class="ink" d="M120,108H133V16H124M100,16H15V38"/>
        <rect class="paper ink" x="100" y="10" width="24" height="12" rx="2"/>
        <path class="ink" d="M103,16H109M116,16H122M119,13V19"/>
        <path class="ink" stroke-width="4" d="M15,38V56"/>
        <g class="ion ion0" style="transform:translateY(68px)">
          <circle cx="46" r="2" fill="#77c9ef"/>
          <path d="M44.9,0H47.1"/>
        </g>
        <g class="ion ion1" style="transform:translateY(77px)">
          <circle cx="62" r="2" fill="#f3c977"/>
          <path d="M60.9,0H63.1M62,-1.1V1.1"/>
        </g>
        <g class="ion ion2" style="transform:translateY(68px)">
          <circle cx="90" r="2" fill="#77c9ef"/>
          <path d="M88.9,0H91.1"/>
        </g>
        <g class="ion ion3" style="transform:translateY(77px)">
          <circle cx="106" r="2" fill="#f3c977"/>
          <path d="M104.9,0H107.1M106,-1.1V1.1"/>
        </g>
        <path class="directions ink" d="M34,65V81M31,77L34,81L37,77M114,81V65M111,69L114,65L117,69"/>
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

if (!customElements.get("concept-aluminum-anodizing")) {
  customElements.define("concept-aluminum-anodizing", ConceptAluminumAnodizing);
}
