// Segmented-Mirror Phasing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSegmentedMirrorPhasing extends HTMLElement {
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
        .coherence {
          animation:coherence 16s linear infinite;
        }
        .segment0 {
          animation:segment0 16s linear infinite;
        }
        .support0 {
          animation:support0 16s linear infinite;
        }
        .wave00 {
          animation:wave00 16s linear infinite;
        }
        .wave01 {
          animation:wave01 16s linear infinite;
        }
        .wave02 {
          animation:wave02 16s linear infinite;
        }
        .segment1 {
          animation:segment1 16s linear infinite;
        }
        .support1 {
          animation:support1 16s linear infinite;
        }
        .wave10 {
          animation:wave10 16s linear infinite;
        }
        .wave11 {
          animation:wave11 16s linear infinite;
        }
        .wave12 {
          animation:wave12 16s linear infinite;
        }
        .segment2 {
          animation:segment2 16s linear infinite;
        }
        .support2 {
          animation:support2 16s linear infinite;
        }
        .wave20 {
          animation:wave20 16s linear infinite;
        }
        .wave21 {
          animation:wave21 16s linear infinite;
        }
        .wave22 {
          animation:wave22 16s linear infinite;
        }
        .phasingEpisode {
          animation:phasingEpisode 16s linear infinite;
        }
        @keyframes coherence {
          0% {
            d:path('M15 114.5H27.222');
          }
          2.083% {
            d:path('M15 114.5H27.222');
          }
          4.167% {
            d:path('M15 114.5H27.222');
          }
          6.25% {
            d:path('M15 114.5H27.222');
          }
          8.333% {
            d:path('M15 114.5H27.222');
          }
          10.417% {
            d:path('M15 114.5H27.222');
          }
          12.5% {
            d:path('M15 114.5H27.237');
          }
          14.583% {
            d:path('M15 114.5H27.614');
          }
          16.667% {
            d:path('M15 114.5H28.493');
          }
          18.75% {
            d:path('M15 114.5H29.885');
          }
          20.833% {
            d:path('M15 114.5H31.815');
          }
          22.917% {
            d:path('M15 114.5H34.317');
          }
          25% {
            d:path('M15 114.5H37.425');
          }
          27.083% {
            d:path('M15 114.5H41.163');
          }
          29.167% {
            d:path('M15 114.5H45.538');
          }
          31.25% {
            d:path('M15 114.5H50.531');
          }
          33.333% {
            d:path('M15 114.5H56.094');
          }
          35.417% {
            d:path('M15 114.5H62.146');
          }
          37.5% {
            d:path('M15 114.5H68.575');
          }
          39.583% {
            d:path('M15 114.5H75.238');
          }
          41.667% {
            d:path('M15 114.5H81.971');
          }
          43.75% {
            d:path('M15 114.5H88.6');
          }
          45.833% {
            d:path('M15 114.5H94.951');
          }
          47.917% {
            d:path('M15 114.5H100.866');
          }
          50% {
            d:path('M15 114.5H106.208');
          }
          52.083% {
            d:path('M15 114.5H110.879');
          }
          54.167% {
            d:path('M15 114.5H114.818');
          }
          56.25% {
            d:path('M15 114.5H118.01');
          }
          58.333% {
            d:path('M15 114.5H120.48');
          }
          60.417% {
            d:path('M15 114.5H122.29');
          }
          62.5% {
            d:path('M15 114.5H123.527');
          }
          64.583% {
            d:path('M15 114.5H124.302');
          }
          66.667% {
            d:path('M15 114.5H124.73');
          }
          68.75% {
            d:path('M15 114.5H124.925');
          }
          70.833% {
            d:path('M15 114.5H124.99');
          }
          72.917% {
            d:path('M15 114.5H125');
          }
          75% {
            d:path('M15 114.5H125');
          }
          77.083% {
            d:path('M15 114.5H125');
          }
          79.167% {
            d:path('M15 114.5H125');
          }
          81.25% {
            d:path('M15 114.5H125');
          }
          83.333% {
            d:path('M15 114.5H125');
          }
          85.417% {
            d:path('M15 114.5H125');
          }
          87.5% {
            d:path('M15 114.5H125');
          }
          89.583% {
            d:path('M15 114.5H125');
          }
          91.667% {
            d:path('M15 114.5H125');
          }
          93.75% {
            d:path('M15 114.5H125');
          }
          95.833% {
            d:path('M15 114.5H125');
          }
          97.917% {
            d:path('M15 114.5H125');
          }
          100% {
            d:path('M15 114.5H125');
          }
        }
        @keyframes segment0 {
          0% {
            transform:translate(0px,-1.5px);
          }
          2.083% {
            transform:translate(0px,-1.5px);
          }
          4.167% {
            transform:translate(0px,-1.5px);
          }
          6.25% {
            transform:translate(0px,-1.5px);
          }
          8.333% {
            transform:translate(0px,-1.5px);
          }
          10.417% {
            transform:translate(0px,-1.5px);
          }
          12.5% {
            transform:translate(0px,-1.5px);
          }
          14.583% {
            transform:translate(0px,-1.492px);
          }
          16.667% {
            transform:translate(0px,-1.476px);
          }
          18.75% {
            transform:translate(0px,-1.451px);
          }
          20.833% {
            transform:translate(0px,-1.417px);
          }
          22.917% {
            transform:translate(0px,-1.377px);
          }
          25% {
            transform:translate(0px,-1.33px);
          }
          27.083% {
            transform:translate(0px,-1.277px);
          }
          29.167% {
            transform:translate(0px,-1.219px);
          }
          31.25% {
            transform:translate(0px,-1.156px);
          }
          33.333% {
            transform:translate(0px,-1.089px);
          }
          35.417% {
            transform:translate(0px,-1.02px);
          }
          37.5% {
            transform:translate(0px,-0.948px);
          }
          39.583% {
            transform:translate(0px,-0.873px);
          }
          41.667% {
            transform:translate(0px,-0.798px);
          }
          43.75% {
            transform:translate(0px,-0.723px);
          }
          45.833% {
            transform:translate(0px,-0.647px);
          }
          47.917% {
            transform:translate(0px,-0.573px);
          }
          50% {
            transform:translate(0px,-0.5px);
          }
          52.083% {
            transform:translate(0px,-0.43px);
          }
          54.167% {
            transform:translate(0px,-0.362px);
          }
          56.25% {
            transform:translate(0px,-0.298px);
          }
          58.333% {
            transform:translate(0px,-0.239px);
          }
          60.417% {
            transform:translate(0px,-0.184px);
          }
          62.5% {
            transform:translate(0px,-0.136px);
          }
          64.583% {
            transform:translate(0px,-0.093px);
          }
          66.667% {
            transform:translate(0px,-0.058px);
          }
          68.75% {
            transform:translate(0px,-0.03px);
          }
          70.833% {
            transform:translate(0px,-0.011px);
          }
          72.917% {
            transform:translate(0px,-0.001px);
          }
          75% {
            transform:translate(0px,0px);
          }
          77.083% {
            transform:translate(0px,0px);
          }
          79.167% {
            transform:translate(0px,0px);
          }
          81.25% {
            transform:translate(0px,0px);
          }
          83.333% {
            transform:translate(0px,0px);
          }
          85.417% {
            transform:translate(0px,0px);
          }
          87.5% {
            transform:translate(0px,0px);
          }
          89.583% {
            transform:translate(0px,0px);
          }
          91.667% {
            transform:translate(0px,0px);
          }
          93.75% {
            transform:translate(0px,0px);
          }
          95.833% {
            transform:translate(0px,0px);
          }
          97.917% {
            transform:translate(0px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes support0 {
          0% {
            d:path('M35.5 102V83.5');
          }
          2.083% {
            d:path('M35.5 102V83.5');
          }
          4.167% {
            d:path('M35.5 102V83.5');
          }
          6.25% {
            d:path('M35.5 102V83.5');
          }
          8.333% {
            d:path('M35.5 102V83.5');
          }
          10.417% {
            d:path('M35.5 102V83.5');
          }
          12.5% {
            d:path('M35.5 102V83.5');
          }
          14.583% {
            d:path('M35.5 102V83.508');
          }
          16.667% {
            d:path('M35.5 102V83.524');
          }
          18.75% {
            d:path('M35.5 102V83.549');
          }
          20.833% {
            d:path('M35.5 102V83.583');
          }
          22.917% {
            d:path('M35.5 102V83.623');
          }
          25% {
            d:path('M35.5 102V83.67');
          }
          27.083% {
            d:path('M35.5 102V83.723');
          }
          29.167% {
            d:path('M35.5 102V83.781');
          }
          31.25% {
            d:path('M35.5 102V83.844');
          }
          33.333% {
            d:path('M35.5 102V83.911');
          }
          35.417% {
            d:path('M35.5 102V83.98');
          }
          37.5% {
            d:path('M35.5 102V84.052');
          }
          39.583% {
            d:path('M35.5 102V84.127');
          }
          41.667% {
            d:path('M35.5 102V84.202');
          }
          43.75% {
            d:path('M35.5 102V84.277');
          }
          45.833% {
            d:path('M35.5 102V84.353');
          }
          47.917% {
            d:path('M35.5 102V84.427');
          }
          50% {
            d:path('M35.5 102V84.5');
          }
          52.083% {
            d:path('M35.5 102V84.57');
          }
          54.167% {
            d:path('M35.5 102V84.638');
          }
          56.25% {
            d:path('M35.5 102V84.702');
          }
          58.333% {
            d:path('M35.5 102V84.761');
          }
          60.417% {
            d:path('M35.5 102V84.816');
          }
          62.5% {
            d:path('M35.5 102V84.864');
          }
          64.583% {
            d:path('M35.5 102V84.907');
          }
          66.667% {
            d:path('M35.5 102V84.942');
          }
          68.75% {
            d:path('M35.5 102V84.97');
          }
          70.833% {
            d:path('M35.5 102V84.989');
          }
          72.917% {
            d:path('M35.5 102V84.999');
          }
          75% {
            d:path('M35.5 102V85');
          }
          77.083% {
            d:path('M35.5 102V85');
          }
          79.167% {
            d:path('M35.5 102V85');
          }
          81.25% {
            d:path('M35.5 102V85');
          }
          83.333% {
            d:path('M35.5 102V85');
          }
          85.417% {
            d:path('M35.5 102V85');
          }
          87.5% {
            d:path('M35.5 102V85');
          }
          89.583% {
            d:path('M35.5 102V85');
          }
          91.667% {
            d:path('M35.5 102V85');
          }
          93.75% {
            d:path('M35.5 102V85');
          }
          95.833% {
            d:path('M35.5 102V85');
          }
          97.917% {
            d:path('M35.5 102V85');
          }
          100% {
            d:path('M35.5 102V85');
          }
        }
        @keyframes wave00 {
          0% {
            d:path('M20 36H51');
          }
          2.083% {
            d:path('M20 36H51');
          }
          4.167% {
            d:path('M20 36H51');
          }
          6.25% {
            d:path('M20 36H51');
          }
          8.333% {
            d:path('M20 36H51');
          }
          10.417% {
            d:path('M20 36H51');
          }
          12.5% {
            d:path('M20 36.001H51');
          }
          14.583% {
            d:path('M20 36.015H51');
          }
          16.667% {
            d:path('M20 36.048H51');
          }
          18.75% {
            d:path('M20 36.099H51');
          }
          20.833% {
            d:path('M20 36.165H51');
          }
          22.917% {
            d:path('M20 36.246H51');
          }
          25% {
            d:path('M20 36.34H51');
          }
          27.083% {
            d:path('M20 36.446H51');
          }
          29.167% {
            d:path('M20 36.563H51');
          }
          31.25% {
            d:path('M20 36.688H51');
          }
          33.333% {
            d:path('M20 36.821H51');
          }
          35.417% {
            d:path('M20 36.961H51');
          }
          37.5% {
            d:path('M20 37.105H51');
          }
          39.583% {
            d:path('M20 37.253H51');
          }
          41.667% {
            d:path('M20 37.403H51');
          }
          43.75% {
            d:path('M20 37.554H51');
          }
          45.833% {
            d:path('M20 37.705H51');
          }
          47.917% {
            d:path('M20 37.854H51');
          }
          50% {
            d:path('M20 37.999H51');
          }
          52.083% {
            d:path('M20 38.14H51');
          }
          54.167% {
            d:path('M20 38.275H51');
          }
          56.25% {
            d:path('M20 38.403H51');
          }
          58.333% {
            d:path('M20 38.522H51');
          }
          60.417% {
            d:path('M20 38.631H51');
          }
          62.5% {
            d:path('M20 38.729H51');
          }
          64.583% {
            d:path('M20 38.813H51');
          }
          66.667% {
            d:path('M20 38.884H51');
          }
          68.75% {
            d:path('M20 38.939H51');
          }
          70.833% {
            d:path('M20 38.977H51');
          }
          72.917% {
            d:path('M20 38.997H51');
          }
          75% {
            d:path('M20 39H51');
          }
          77.083% {
            d:path('M20 39H51');
          }
          79.167% {
            d:path('M20 39H51');
          }
          81.25% {
            d:path('M20 39H51');
          }
          83.333% {
            d:path('M20 39H51');
          }
          85.417% {
            d:path('M20 39H51');
          }
          87.5% {
            d:path('M20 39H51');
          }
          89.583% {
            d:path('M20 39H51');
          }
          91.667% {
            d:path('M20 39H51');
          }
          93.75% {
            d:path('M20 39H51');
          }
          95.833% {
            d:path('M20 39H51');
          }
          97.917% {
            d:path('M20 39H51');
          }
          100% {
            d:path('M20 39H51');
          }
        }
        @keyframes wave01 {
          0% {
            d:path('M20 48H51');
          }
          2.083% {
            d:path('M20 48H51');
          }
          4.167% {
            d:path('M20 48H51');
          }
          6.25% {
            d:path('M20 48H51');
          }
          8.333% {
            d:path('M20 48H51');
          }
          10.417% {
            d:path('M20 48H51');
          }
          12.5% {
            d:path('M20 48.001H51');
          }
          14.583% {
            d:path('M20 48.015H51');
          }
          16.667% {
            d:path('M20 48.048H51');
          }
          18.75% {
            d:path('M20 48.099H51');
          }
          20.833% {
            d:path('M20 48.165H51');
          }
          22.917% {
            d:path('M20 48.246H51');
          }
          25% {
            d:path('M20 48.34H51');
          }
          27.083% {
            d:path('M20 48.446H51');
          }
          29.167% {
            d:path('M20 48.563H51');
          }
          31.25% {
            d:path('M20 48.688H51');
          }
          33.333% {
            d:path('M20 48.821H51');
          }
          35.417% {
            d:path('M20 48.961H51');
          }
          37.5% {
            d:path('M20 49.105H51');
          }
          39.583% {
            d:path('M20 49.253H51');
          }
          41.667% {
            d:path('M20 49.403H51');
          }
          43.75% {
            d:path('M20 49.554H51');
          }
          45.833% {
            d:path('M20 49.705H51');
          }
          47.917% {
            d:path('M20 49.854H51');
          }
          50% {
            d:path('M20 49.999H51');
          }
          52.083% {
            d:path('M20 50.14H51');
          }
          54.167% {
            d:path('M20 50.275H51');
          }
          56.25% {
            d:path('M20 50.403H51');
          }
          58.333% {
            d:path('M20 50.522H51');
          }
          60.417% {
            d:path('M20 50.631H51');
          }
          62.5% {
            d:path('M20 50.729H51');
          }
          64.583% {
            d:path('M20 50.813H51');
          }
          66.667% {
            d:path('M20 50.884H51');
          }
          68.75% {
            d:path('M20 50.939H51');
          }
          70.833% {
            d:path('M20 50.977H51');
          }
          72.917% {
            d:path('M20 50.997H51');
          }
          75% {
            d:path('M20 51H51');
          }
          77.083% {
            d:path('M20 51H51');
          }
          79.167% {
            d:path('M20 51H51');
          }
          81.25% {
            d:path('M20 51H51');
          }
          83.333% {
            d:path('M20 51H51');
          }
          85.417% {
            d:path('M20 51H51');
          }
          87.5% {
            d:path('M20 51H51');
          }
          89.583% {
            d:path('M20 51H51');
          }
          91.667% {
            d:path('M20 51H51');
          }
          93.75% {
            d:path('M20 51H51');
          }
          95.833% {
            d:path('M20 51H51');
          }
          97.917% {
            d:path('M20 51H51');
          }
          100% {
            d:path('M20 51H51');
          }
        }
        @keyframes wave02 {
          0% {
            d:path('M20 60H51');
          }
          2.083% {
            d:path('M20 60H51');
          }
          4.167% {
            d:path('M20 60H51');
          }
          6.25% {
            d:path('M20 60H51');
          }
          8.333% {
            d:path('M20 60H51');
          }
          10.417% {
            d:path('M20 60H51');
          }
          12.5% {
            d:path('M20 60.001H51');
          }
          14.583% {
            d:path('M20 60.015H51');
          }
          16.667% {
            d:path('M20 60.048H51');
          }
          18.75% {
            d:path('M20 60.099H51');
          }
          20.833% {
            d:path('M20 60.165H51');
          }
          22.917% {
            d:path('M20 60.246H51');
          }
          25% {
            d:path('M20 60.34H51');
          }
          27.083% {
            d:path('M20 60.446H51');
          }
          29.167% {
            d:path('M20 60.563H51');
          }
          31.25% {
            d:path('M20 60.688H51');
          }
          33.333% {
            d:path('M20 60.821H51');
          }
          35.417% {
            d:path('M20 60.961H51');
          }
          37.5% {
            d:path('M20 61.105H51');
          }
          39.583% {
            d:path('M20 61.253H51');
          }
          41.667% {
            d:path('M20 61.403H51');
          }
          43.75% {
            d:path('M20 61.554H51');
          }
          45.833% {
            d:path('M20 61.705H51');
          }
          47.917% {
            d:path('M20 61.854H51');
          }
          50% {
            d:path('M20 61.999H51');
          }
          52.083% {
            d:path('M20 62.14H51');
          }
          54.167% {
            d:path('M20 62.275H51');
          }
          56.25% {
            d:path('M20 62.403H51');
          }
          58.333% {
            d:path('M20 62.522H51');
          }
          60.417% {
            d:path('M20 62.631H51');
          }
          62.5% {
            d:path('M20 62.729H51');
          }
          64.583% {
            d:path('M20 62.813H51');
          }
          66.667% {
            d:path('M20 62.884H51');
          }
          68.75% {
            d:path('M20 62.939H51');
          }
          70.833% {
            d:path('M20 62.977H51');
          }
          72.917% {
            d:path('M20 62.997H51');
          }
          75% {
            d:path('M20 63H51');
          }
          77.083% {
            d:path('M20 63H51');
          }
          79.167% {
            d:path('M20 63H51');
          }
          81.25% {
            d:path('M20 63H51');
          }
          83.333% {
            d:path('M20 63H51');
          }
          85.417% {
            d:path('M20 63H51');
          }
          87.5% {
            d:path('M20 63H51');
          }
          89.583% {
            d:path('M20 63H51');
          }
          91.667% {
            d:path('M20 63H51');
          }
          93.75% {
            d:path('M20 63H51');
          }
          95.833% {
            d:path('M20 63H51');
          }
          97.917% {
            d:path('M20 63H51');
          }
          100% {
            d:path('M20 63H51');
          }
        }
        @keyframes segment1 {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(0px,0px);
          }
          4.167% {
            transform:translate(0px,0px);
          }
          6.25% {
            transform:translate(0px,0px);
          }
          8.333% {
            transform:translate(0px,0px);
          }
          10.417% {
            transform:translate(0px,0px);
          }
          12.5% {
            transform:translate(0px,0px);
          }
          14.583% {
            transform:translate(0px,0px);
          }
          16.667% {
            transform:translate(0px,0px);
          }
          18.75% {
            transform:translate(0px,0px);
          }
          20.833% {
            transform:translate(0px,0px);
          }
          22.917% {
            transform:translate(0px,0px);
          }
          25% {
            transform:translate(0px,0px);
          }
          27.083% {
            transform:translate(0px,0px);
          }
          29.167% {
            transform:translate(0px,0px);
          }
          31.25% {
            transform:translate(0px,0px);
          }
          33.333% {
            transform:translate(0px,0px);
          }
          35.417% {
            transform:translate(0px,0px);
          }
          37.5% {
            transform:translate(0px,0px);
          }
          39.583% {
            transform:translate(0px,0px);
          }
          41.667% {
            transform:translate(0px,0px);
          }
          43.75% {
            transform:translate(0px,0px);
          }
          45.833% {
            transform:translate(0px,0px);
          }
          47.917% {
            transform:translate(0px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          52.083% {
            transform:translate(0px,0px);
          }
          54.167% {
            transform:translate(0px,0px);
          }
          56.25% {
            transform:translate(0px,0px);
          }
          58.333% {
            transform:translate(0px,0px);
          }
          60.417% {
            transform:translate(0px,0px);
          }
          62.5% {
            transform:translate(0px,0px);
          }
          64.583% {
            transform:translate(0px,0px);
          }
          66.667% {
            transform:translate(0px,0px);
          }
          68.75% {
            transform:translate(0px,0px);
          }
          70.833% {
            transform:translate(0px,0px);
          }
          72.917% {
            transform:translate(0px,0px);
          }
          75% {
            transform:translate(0px,0px);
          }
          77.083% {
            transform:translate(0px,0px);
          }
          79.167% {
            transform:translate(0px,0px);
          }
          81.25% {
            transform:translate(0px,0px);
          }
          83.333% {
            transform:translate(0px,0px);
          }
          85.417% {
            transform:translate(0px,0px);
          }
          87.5% {
            transform:translate(0px,0px);
          }
          89.583% {
            transform:translate(0px,0px);
          }
          91.667% {
            transform:translate(0px,0px);
          }
          93.75% {
            transform:translate(0px,0px);
          }
          95.833% {
            transform:translate(0px,0px);
          }
          97.917% {
            transform:translate(0px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes support1 {
          0% {
            d:path('M69.5 102V85');
          }
          2.083% {
            d:path('M69.5 102V85');
          }
          4.167% {
            d:path('M69.5 102V85');
          }
          6.25% {
            d:path('M69.5 102V85');
          }
          8.333% {
            d:path('M69.5 102V85');
          }
          10.417% {
            d:path('M69.5 102V85');
          }
          12.5% {
            d:path('M69.5 102V85');
          }
          14.583% {
            d:path('M69.5 102V85');
          }
          16.667% {
            d:path('M69.5 102V85');
          }
          18.75% {
            d:path('M69.5 102V85');
          }
          20.833% {
            d:path('M69.5 102V85');
          }
          22.917% {
            d:path('M69.5 102V85');
          }
          25% {
            d:path('M69.5 102V85');
          }
          27.083% {
            d:path('M69.5 102V85');
          }
          29.167% {
            d:path('M69.5 102V85');
          }
          31.25% {
            d:path('M69.5 102V85');
          }
          33.333% {
            d:path('M69.5 102V85');
          }
          35.417% {
            d:path('M69.5 102V85');
          }
          37.5% {
            d:path('M69.5 102V85');
          }
          39.583% {
            d:path('M69.5 102V85');
          }
          41.667% {
            d:path('M69.5 102V85');
          }
          43.75% {
            d:path('M69.5 102V85');
          }
          45.833% {
            d:path('M69.5 102V85');
          }
          47.917% {
            d:path('M69.5 102V85');
          }
          50% {
            d:path('M69.5 102V85');
          }
          52.083% {
            d:path('M69.5 102V85');
          }
          54.167% {
            d:path('M69.5 102V85');
          }
          56.25% {
            d:path('M69.5 102V85');
          }
          58.333% {
            d:path('M69.5 102V85');
          }
          60.417% {
            d:path('M69.5 102V85');
          }
          62.5% {
            d:path('M69.5 102V85');
          }
          64.583% {
            d:path('M69.5 102V85');
          }
          66.667% {
            d:path('M69.5 102V85');
          }
          68.75% {
            d:path('M69.5 102V85');
          }
          70.833% {
            d:path('M69.5 102V85');
          }
          72.917% {
            d:path('M69.5 102V85');
          }
          75% {
            d:path('M69.5 102V85');
          }
          77.083% {
            d:path('M69.5 102V85');
          }
          79.167% {
            d:path('M69.5 102V85');
          }
          81.25% {
            d:path('M69.5 102V85');
          }
          83.333% {
            d:path('M69.5 102V85');
          }
          85.417% {
            d:path('M69.5 102V85');
          }
          87.5% {
            d:path('M69.5 102V85');
          }
          89.583% {
            d:path('M69.5 102V85');
          }
          91.667% {
            d:path('M69.5 102V85');
          }
          93.75% {
            d:path('M69.5 102V85');
          }
          95.833% {
            d:path('M69.5 102V85');
          }
          97.917% {
            d:path('M69.5 102V85');
          }
          100% {
            d:path('M69.5 102V85');
          }
        }
        @keyframes wave10 {
          0% {
            d:path('M54 39H85');
          }
          2.083% {
            d:path('M54 39H85');
          }
          4.167% {
            d:path('M54 39H85');
          }
          6.25% {
            d:path('M54 39H85');
          }
          8.333% {
            d:path('M54 39H85');
          }
          10.417% {
            d:path('M54 39H85');
          }
          12.5% {
            d:path('M54 39H85');
          }
          14.583% {
            d:path('M54 39H85');
          }
          16.667% {
            d:path('M54 39H85');
          }
          18.75% {
            d:path('M54 39H85');
          }
          20.833% {
            d:path('M54 39H85');
          }
          22.917% {
            d:path('M54 39H85');
          }
          25% {
            d:path('M54 39H85');
          }
          27.083% {
            d:path('M54 39H85');
          }
          29.167% {
            d:path('M54 39H85');
          }
          31.25% {
            d:path('M54 39H85');
          }
          33.333% {
            d:path('M54 39H85');
          }
          35.417% {
            d:path('M54 39H85');
          }
          37.5% {
            d:path('M54 39H85');
          }
          39.583% {
            d:path('M54 39H85');
          }
          41.667% {
            d:path('M54 39H85');
          }
          43.75% {
            d:path('M54 39H85');
          }
          45.833% {
            d:path('M54 39H85');
          }
          47.917% {
            d:path('M54 39H85');
          }
          50% {
            d:path('M54 39H85');
          }
          52.083% {
            d:path('M54 39H85');
          }
          54.167% {
            d:path('M54 39H85');
          }
          56.25% {
            d:path('M54 39H85');
          }
          58.333% {
            d:path('M54 39H85');
          }
          60.417% {
            d:path('M54 39H85');
          }
          62.5% {
            d:path('M54 39H85');
          }
          64.583% {
            d:path('M54 39H85');
          }
          66.667% {
            d:path('M54 39H85');
          }
          68.75% {
            d:path('M54 39H85');
          }
          70.833% {
            d:path('M54 39H85');
          }
          72.917% {
            d:path('M54 39H85');
          }
          75% {
            d:path('M54 39H85');
          }
          77.083% {
            d:path('M54 39H85');
          }
          79.167% {
            d:path('M54 39H85');
          }
          81.25% {
            d:path('M54 39H85');
          }
          83.333% {
            d:path('M54 39H85');
          }
          85.417% {
            d:path('M54 39H85');
          }
          87.5% {
            d:path('M54 39H85');
          }
          89.583% {
            d:path('M54 39H85');
          }
          91.667% {
            d:path('M54 39H85');
          }
          93.75% {
            d:path('M54 39H85');
          }
          95.833% {
            d:path('M54 39H85');
          }
          97.917% {
            d:path('M54 39H85');
          }
          100% {
            d:path('M54 39H85');
          }
        }
        @keyframes wave11 {
          0% {
            d:path('M54 51H85');
          }
          2.083% {
            d:path('M54 51H85');
          }
          4.167% {
            d:path('M54 51H85');
          }
          6.25% {
            d:path('M54 51H85');
          }
          8.333% {
            d:path('M54 51H85');
          }
          10.417% {
            d:path('M54 51H85');
          }
          12.5% {
            d:path('M54 51H85');
          }
          14.583% {
            d:path('M54 51H85');
          }
          16.667% {
            d:path('M54 51H85');
          }
          18.75% {
            d:path('M54 51H85');
          }
          20.833% {
            d:path('M54 51H85');
          }
          22.917% {
            d:path('M54 51H85');
          }
          25% {
            d:path('M54 51H85');
          }
          27.083% {
            d:path('M54 51H85');
          }
          29.167% {
            d:path('M54 51H85');
          }
          31.25% {
            d:path('M54 51H85');
          }
          33.333% {
            d:path('M54 51H85');
          }
          35.417% {
            d:path('M54 51H85');
          }
          37.5% {
            d:path('M54 51H85');
          }
          39.583% {
            d:path('M54 51H85');
          }
          41.667% {
            d:path('M54 51H85');
          }
          43.75% {
            d:path('M54 51H85');
          }
          45.833% {
            d:path('M54 51H85');
          }
          47.917% {
            d:path('M54 51H85');
          }
          50% {
            d:path('M54 51H85');
          }
          52.083% {
            d:path('M54 51H85');
          }
          54.167% {
            d:path('M54 51H85');
          }
          56.25% {
            d:path('M54 51H85');
          }
          58.333% {
            d:path('M54 51H85');
          }
          60.417% {
            d:path('M54 51H85');
          }
          62.5% {
            d:path('M54 51H85');
          }
          64.583% {
            d:path('M54 51H85');
          }
          66.667% {
            d:path('M54 51H85');
          }
          68.75% {
            d:path('M54 51H85');
          }
          70.833% {
            d:path('M54 51H85');
          }
          72.917% {
            d:path('M54 51H85');
          }
          75% {
            d:path('M54 51H85');
          }
          77.083% {
            d:path('M54 51H85');
          }
          79.167% {
            d:path('M54 51H85');
          }
          81.25% {
            d:path('M54 51H85');
          }
          83.333% {
            d:path('M54 51H85');
          }
          85.417% {
            d:path('M54 51H85');
          }
          87.5% {
            d:path('M54 51H85');
          }
          89.583% {
            d:path('M54 51H85');
          }
          91.667% {
            d:path('M54 51H85');
          }
          93.75% {
            d:path('M54 51H85');
          }
          95.833% {
            d:path('M54 51H85');
          }
          97.917% {
            d:path('M54 51H85');
          }
          100% {
            d:path('M54 51H85');
          }
        }
        @keyframes wave12 {
          0% {
            d:path('M54 63H85');
          }
          2.083% {
            d:path('M54 63H85');
          }
          4.167% {
            d:path('M54 63H85');
          }
          6.25% {
            d:path('M54 63H85');
          }
          8.333% {
            d:path('M54 63H85');
          }
          10.417% {
            d:path('M54 63H85');
          }
          12.5% {
            d:path('M54 63H85');
          }
          14.583% {
            d:path('M54 63H85');
          }
          16.667% {
            d:path('M54 63H85');
          }
          18.75% {
            d:path('M54 63H85');
          }
          20.833% {
            d:path('M54 63H85');
          }
          22.917% {
            d:path('M54 63H85');
          }
          25% {
            d:path('M54 63H85');
          }
          27.083% {
            d:path('M54 63H85');
          }
          29.167% {
            d:path('M54 63H85');
          }
          31.25% {
            d:path('M54 63H85');
          }
          33.333% {
            d:path('M54 63H85');
          }
          35.417% {
            d:path('M54 63H85');
          }
          37.5% {
            d:path('M54 63H85');
          }
          39.583% {
            d:path('M54 63H85');
          }
          41.667% {
            d:path('M54 63H85');
          }
          43.75% {
            d:path('M54 63H85');
          }
          45.833% {
            d:path('M54 63H85');
          }
          47.917% {
            d:path('M54 63H85');
          }
          50% {
            d:path('M54 63H85');
          }
          52.083% {
            d:path('M54 63H85');
          }
          54.167% {
            d:path('M54 63H85');
          }
          56.25% {
            d:path('M54 63H85');
          }
          58.333% {
            d:path('M54 63H85');
          }
          60.417% {
            d:path('M54 63H85');
          }
          62.5% {
            d:path('M54 63H85');
          }
          64.583% {
            d:path('M54 63H85');
          }
          66.667% {
            d:path('M54 63H85');
          }
          68.75% {
            d:path('M54 63H85');
          }
          70.833% {
            d:path('M54 63H85');
          }
          72.917% {
            d:path('M54 63H85');
          }
          75% {
            d:path('M54 63H85');
          }
          77.083% {
            d:path('M54 63H85');
          }
          79.167% {
            d:path('M54 63H85');
          }
          81.25% {
            d:path('M54 63H85');
          }
          83.333% {
            d:path('M54 63H85');
          }
          85.417% {
            d:path('M54 63H85');
          }
          87.5% {
            d:path('M54 63H85');
          }
          89.583% {
            d:path('M54 63H85');
          }
          91.667% {
            d:path('M54 63H85');
          }
          93.75% {
            d:path('M54 63H85');
          }
          95.833% {
            d:path('M54 63H85');
          }
          97.917% {
            d:path('M54 63H85');
          }
          100% {
            d:path('M54 63H85');
          }
        }
        @keyframes segment2 {
          0% {
            transform:translate(0px,1.5px);
          }
          2.083% {
            transform:translate(0px,1.5px);
          }
          4.167% {
            transform:translate(0px,1.5px);
          }
          6.25% {
            transform:translate(0px,1.5px);
          }
          8.333% {
            transform:translate(0px,1.5px);
          }
          10.417% {
            transform:translate(0px,1.5px);
          }
          12.5% {
            transform:translate(0px,1.5px);
          }
          14.583% {
            transform:translate(0px,1.492px);
          }
          16.667% {
            transform:translate(0px,1.476px);
          }
          18.75% {
            transform:translate(0px,1.451px);
          }
          20.833% {
            transform:translate(0px,1.417px);
          }
          22.917% {
            transform:translate(0px,1.377px);
          }
          25% {
            transform:translate(0px,1.33px);
          }
          27.083% {
            transform:translate(0px,1.277px);
          }
          29.167% {
            transform:translate(0px,1.219px);
          }
          31.25% {
            transform:translate(0px,1.156px);
          }
          33.333% {
            transform:translate(0px,1.089px);
          }
          35.417% {
            transform:translate(0px,1.02px);
          }
          37.5% {
            transform:translate(0px,0.948px);
          }
          39.583% {
            transform:translate(0px,0.873px);
          }
          41.667% {
            transform:translate(0px,0.798px);
          }
          43.75% {
            transform:translate(0px,0.723px);
          }
          45.833% {
            transform:translate(0px,0.647px);
          }
          47.917% {
            transform:translate(0px,0.573px);
          }
          50% {
            transform:translate(0px,0.5px);
          }
          52.083% {
            transform:translate(0px,0.43px);
          }
          54.167% {
            transform:translate(0px,0.362px);
          }
          56.25% {
            transform:translate(0px,0.298px);
          }
          58.333% {
            transform:translate(0px,0.239px);
          }
          60.417% {
            transform:translate(0px,0.184px);
          }
          62.5% {
            transform:translate(0px,0.136px);
          }
          64.583% {
            transform:translate(0px,0.093px);
          }
          66.667% {
            transform:translate(0px,0.058px);
          }
          68.75% {
            transform:translate(0px,0.03px);
          }
          70.833% {
            transform:translate(0px,0.011px);
          }
          72.917% {
            transform:translate(0px,0.001px);
          }
          75% {
            transform:translate(0px,0px);
          }
          77.083% {
            transform:translate(0px,0px);
          }
          79.167% {
            transform:translate(0px,0px);
          }
          81.25% {
            transform:translate(0px,0px);
          }
          83.333% {
            transform:translate(0px,0px);
          }
          85.417% {
            transform:translate(0px,0px);
          }
          87.5% {
            transform:translate(0px,0px);
          }
          89.583% {
            transform:translate(0px,0px);
          }
          91.667% {
            transform:translate(0px,0px);
          }
          93.75% {
            transform:translate(0px,0px);
          }
          95.833% {
            transform:translate(0px,0px);
          }
          97.917% {
            transform:translate(0px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes support2 {
          0% {
            d:path('M103.5 102V86.5');
          }
          2.083% {
            d:path('M103.5 102V86.5');
          }
          4.167% {
            d:path('M103.5 102V86.5');
          }
          6.25% {
            d:path('M103.5 102V86.5');
          }
          8.333% {
            d:path('M103.5 102V86.5');
          }
          10.417% {
            d:path('M103.5 102V86.5');
          }
          12.5% {
            d:path('M103.5 102V86.5');
          }
          14.583% {
            d:path('M103.5 102V86.492');
          }
          16.667% {
            d:path('M103.5 102V86.476');
          }
          18.75% {
            d:path('M103.5 102V86.451');
          }
          20.833% {
            d:path('M103.5 102V86.417');
          }
          22.917% {
            d:path('M103.5 102V86.377');
          }
          25% {
            d:path('M103.5 102V86.33');
          }
          27.083% {
            d:path('M103.5 102V86.277');
          }
          29.167% {
            d:path('M103.5 102V86.219');
          }
          31.25% {
            d:path('M103.5 102V86.156');
          }
          33.333% {
            d:path('M103.5 102V86.089');
          }
          35.417% {
            d:path('M103.5 102V86.02');
          }
          37.5% {
            d:path('M103.5 102V85.948');
          }
          39.583% {
            d:path('M103.5 102V85.873');
          }
          41.667% {
            d:path('M103.5 102V85.798');
          }
          43.75% {
            d:path('M103.5 102V85.723');
          }
          45.833% {
            d:path('M103.5 102V85.647');
          }
          47.917% {
            d:path('M103.5 102V85.573');
          }
          50% {
            d:path('M103.5 102V85.5');
          }
          52.083% {
            d:path('M103.5 102V85.43');
          }
          54.167% {
            d:path('M103.5 102V85.362');
          }
          56.25% {
            d:path('M103.5 102V85.298');
          }
          58.333% {
            d:path('M103.5 102V85.239');
          }
          60.417% {
            d:path('M103.5 102V85.184');
          }
          62.5% {
            d:path('M103.5 102V85.136');
          }
          64.583% {
            d:path('M103.5 102V85.093');
          }
          66.667% {
            d:path('M103.5 102V85.058');
          }
          68.75% {
            d:path('M103.5 102V85.03');
          }
          70.833% {
            d:path('M103.5 102V85.011');
          }
          72.917% {
            d:path('M103.5 102V85.001');
          }
          75% {
            d:path('M103.5 102V85');
          }
          77.083% {
            d:path('M103.5 102V85');
          }
          79.167% {
            d:path('M103.5 102V85');
          }
          81.25% {
            d:path('M103.5 102V85');
          }
          83.333% {
            d:path('M103.5 102V85');
          }
          85.417% {
            d:path('M103.5 102V85');
          }
          87.5% {
            d:path('M103.5 102V85');
          }
          89.583% {
            d:path('M103.5 102V85');
          }
          91.667% {
            d:path('M103.5 102V85');
          }
          93.75% {
            d:path('M103.5 102V85');
          }
          95.833% {
            d:path('M103.5 102V85');
          }
          97.917% {
            d:path('M103.5 102V85');
          }
          100% {
            d:path('M103.5 102V85');
          }
        }
        @keyframes wave20 {
          0% {
            d:path('M88 42H119');
          }
          2.083% {
            d:path('M88 42H119');
          }
          4.167% {
            d:path('M88 42H119');
          }
          6.25% {
            d:path('M88 42H119');
          }
          8.333% {
            d:path('M88 42H119');
          }
          10.417% {
            d:path('M88 42H119');
          }
          12.5% {
            d:path('M88 41.999H119');
          }
          14.583% {
            d:path('M88 41.985H119');
          }
          16.667% {
            d:path('M88 41.952H119');
          }
          18.75% {
            d:path('M88 41.901H119');
          }
          20.833% {
            d:path('M88 41.835H119');
          }
          22.917% {
            d:path('M88 41.754H119');
          }
          25% {
            d:path('M88 41.66H119');
          }
          27.083% {
            d:path('M88 41.554H119');
          }
          29.167% {
            d:path('M88 41.437H119');
          }
          31.25% {
            d:path('M88 41.312H119');
          }
          33.333% {
            d:path('M88 41.179H119');
          }
          35.417% {
            d:path('M88 41.039H119');
          }
          37.5% {
            d:path('M88 40.895H119');
          }
          39.583% {
            d:path('M88 40.747H119');
          }
          41.667% {
            d:path('M88 40.597H119');
          }
          43.75% {
            d:path('M88 40.446H119');
          }
          45.833% {
            d:path('M88 40.295H119');
          }
          47.917% {
            d:path('M88 40.146H119');
          }
          50% {
            d:path('M88 40.001H119');
          }
          52.083% {
            d:path('M88 39.86H119');
          }
          54.167% {
            d:path('M88 39.725H119');
          }
          56.25% {
            d:path('M88 39.597H119');
          }
          58.333% {
            d:path('M88 39.478H119');
          }
          60.417% {
            d:path('M88 39.369H119');
          }
          62.5% {
            d:path('M88 39.271H119');
          }
          64.583% {
            d:path('M88 39.187H119');
          }
          66.667% {
            d:path('M88 39.116H119');
          }
          68.75% {
            d:path('M88 39.061H119');
          }
          70.833% {
            d:path('M88 39.023H119');
          }
          72.917% {
            d:path('M88 39.003H119');
          }
          75% {
            d:path('M88 39H119');
          }
          77.083% {
            d:path('M88 39H119');
          }
          79.167% {
            d:path('M88 39H119');
          }
          81.25% {
            d:path('M88 39H119');
          }
          83.333% {
            d:path('M88 39H119');
          }
          85.417% {
            d:path('M88 39H119');
          }
          87.5% {
            d:path('M88 39H119');
          }
          89.583% {
            d:path('M88 39H119');
          }
          91.667% {
            d:path('M88 39H119');
          }
          93.75% {
            d:path('M88 39H119');
          }
          95.833% {
            d:path('M88 39H119');
          }
          97.917% {
            d:path('M88 39H119');
          }
          100% {
            d:path('M88 39H119');
          }
        }
        @keyframes wave21 {
          0% {
            d:path('M88 54H119');
          }
          2.083% {
            d:path('M88 54H119');
          }
          4.167% {
            d:path('M88 54H119');
          }
          6.25% {
            d:path('M88 54H119');
          }
          8.333% {
            d:path('M88 54H119');
          }
          10.417% {
            d:path('M88 54H119');
          }
          12.5% {
            d:path('M88 53.999H119');
          }
          14.583% {
            d:path('M88 53.985H119');
          }
          16.667% {
            d:path('M88 53.952H119');
          }
          18.75% {
            d:path('M88 53.901H119');
          }
          20.833% {
            d:path('M88 53.835H119');
          }
          22.917% {
            d:path('M88 53.754H119');
          }
          25% {
            d:path('M88 53.66H119');
          }
          27.083% {
            d:path('M88 53.554H119');
          }
          29.167% {
            d:path('M88 53.437H119');
          }
          31.25% {
            d:path('M88 53.312H119');
          }
          33.333% {
            d:path('M88 53.179H119');
          }
          35.417% {
            d:path('M88 53.039H119');
          }
          37.5% {
            d:path('M88 52.895H119');
          }
          39.583% {
            d:path('M88 52.747H119');
          }
          41.667% {
            d:path('M88 52.597H119');
          }
          43.75% {
            d:path('M88 52.446H119');
          }
          45.833% {
            d:path('M88 52.295H119');
          }
          47.917% {
            d:path('M88 52.146H119');
          }
          50% {
            d:path('M88 52.001H119');
          }
          52.083% {
            d:path('M88 51.86H119');
          }
          54.167% {
            d:path('M88 51.725H119');
          }
          56.25% {
            d:path('M88 51.597H119');
          }
          58.333% {
            d:path('M88 51.478H119');
          }
          60.417% {
            d:path('M88 51.369H119');
          }
          62.5% {
            d:path('M88 51.271H119');
          }
          64.583% {
            d:path('M88 51.187H119');
          }
          66.667% {
            d:path('M88 51.116H119');
          }
          68.75% {
            d:path('M88 51.061H119');
          }
          70.833% {
            d:path('M88 51.023H119');
          }
          72.917% {
            d:path('M88 51.003H119');
          }
          75% {
            d:path('M88 51H119');
          }
          77.083% {
            d:path('M88 51H119');
          }
          79.167% {
            d:path('M88 51H119');
          }
          81.25% {
            d:path('M88 51H119');
          }
          83.333% {
            d:path('M88 51H119');
          }
          85.417% {
            d:path('M88 51H119');
          }
          87.5% {
            d:path('M88 51H119');
          }
          89.583% {
            d:path('M88 51H119');
          }
          91.667% {
            d:path('M88 51H119');
          }
          93.75% {
            d:path('M88 51H119');
          }
          95.833% {
            d:path('M88 51H119');
          }
          97.917% {
            d:path('M88 51H119');
          }
          100% {
            d:path('M88 51H119');
          }
        }
        @keyframes wave22 {
          0% {
            d:path('M88 66H119');
          }
          2.083% {
            d:path('M88 66H119');
          }
          4.167% {
            d:path('M88 66H119');
          }
          6.25% {
            d:path('M88 66H119');
          }
          8.333% {
            d:path('M88 66H119');
          }
          10.417% {
            d:path('M88 66H119');
          }
          12.5% {
            d:path('M88 65.999H119');
          }
          14.583% {
            d:path('M88 65.985H119');
          }
          16.667% {
            d:path('M88 65.952H119');
          }
          18.75% {
            d:path('M88 65.901H119');
          }
          20.833% {
            d:path('M88 65.835H119');
          }
          22.917% {
            d:path('M88 65.754H119');
          }
          25% {
            d:path('M88 65.66H119');
          }
          27.083% {
            d:path('M88 65.554H119');
          }
          29.167% {
            d:path('M88 65.437H119');
          }
          31.25% {
            d:path('M88 65.312H119');
          }
          33.333% {
            d:path('M88 65.179H119');
          }
          35.417% {
            d:path('M88 65.039H119');
          }
          37.5% {
            d:path('M88 64.895H119');
          }
          39.583% {
            d:path('M88 64.747H119');
          }
          41.667% {
            d:path('M88 64.597H119');
          }
          43.75% {
            d:path('M88 64.446H119');
          }
          45.833% {
            d:path('M88 64.295H119');
          }
          47.917% {
            d:path('M88 64.146H119');
          }
          50% {
            d:path('M88 64.001H119');
          }
          52.083% {
            d:path('M88 63.86H119');
          }
          54.167% {
            d:path('M88 63.725H119');
          }
          56.25% {
            d:path('M88 63.597H119');
          }
          58.333% {
            d:path('M88 63.478H119');
          }
          60.417% {
            d:path('M88 63.369H119');
          }
          62.5% {
            d:path('M88 63.271H119');
          }
          64.583% {
            d:path('M88 63.187H119');
          }
          66.667% {
            d:path('M88 63.116H119');
          }
          68.75% {
            d:path('M88 63.061H119');
          }
          70.833% {
            d:path('M88 63.023H119');
          }
          72.917% {
            d:path('M88 63.003H119');
          }
          75% {
            d:path('M88 63H119');
          }
          77.083% {
            d:path('M88 63H119');
          }
          79.167% {
            d:path('M88 63H119');
          }
          81.25% {
            d:path('M88 63H119');
          }
          83.333% {
            d:path('M88 63H119');
          }
          85.417% {
            d:path('M88 63H119');
          }
          87.5% {
            d:path('M88 63H119');
          }
          89.583% {
            d:path('M88 63H119');
          }
          91.667% {
            d:path('M88 63H119');
          }
          93.75% {
            d:path('M88 63H119');
          }
          95.833% {
            d:path('M88 63H119');
          }
          97.917% {
            d:path('M88 63H119');
          }
          100% {
            d:path('M88 63H119');
          }
        }
        @keyframes phasingEpisode {
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
            opacity:0.926;
          }
          97.917% {
            opacity:0.376;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .coherence {
            d:path('M15 114.5H125');
          }
          .segment0 {
            transform:translate(0px,0px);
          }
          .support0 {
            d:path('M35.5 102V85');
          }
          .wave00 {
            d:path('M20 39H51');
          }
          .wave01 {
            d:path('M20 51H51');
          }
          .wave02 {
            d:path('M20 63H51');
          }
          .segment1 {
            transform:translate(0px,0px);
          }
          .support1 {
            d:path('M69.5 102V85');
          }
          .wave10 {
            d:path('M54 39H85');
          }
          .wave11 {
            d:path('M54 51H85');
          }
          .wave12 {
            d:path('M54 63H85');
          }
          .segment2 {
            transform:translate(0px,0px);
          }
          .support2 {
            d:path('M103.5 102V85');
          }
          .wave20 {
            d:path('M88 39H119');
          }
          .wave21 {
            d:path('M88 51H119');
          }
          .wave22 {
            d:path('M88 63H119');
          }
          .phasingEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Segmented-Mirror Phasing">
        <g class="phasingEpisode">
          <circle cx="9" cy="8" r="1" fill="#789697" opacity=".5"/>
          <circle cx="56" cy="75" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="103" cy="19" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="29" cy="86" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="76" cy="30" r="1" fill="#789697" opacity=".5"/>
          <circle cx="123" cy="97" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="49" cy="41" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="96" cy="108" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="22" cy="52" r="1" fill="#789697" opacity=".5"/>
          <circle cx="69" cy="119" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="116" cy="63" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="42" cy="130" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="89" cy="74" r="1" fill="#789697" opacity=".5"/>
          <circle cx="15" cy="18" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="62" cy="85" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="109" cy="29" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="35" cy="96" r="1" fill="#789697" opacity=".5"/>
          <circle cx="82" cy="40" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="129" cy="107" r="0.55" fill="#789697" opacity=".5"/>
          <path d="M15 83L126 83" stroke="#456d61" stroke-dasharray="3 3"/>
          <rect x="15" y="110" width="110" height="9" fill="#193b36" stroke="#567b69"/>
          <path d="M15 114.5H100" class="coherence" stroke="#91c7b0" stroke-width="6"/>
          <rect x="22" y="80" width="27" height="5" class="segment0" fill="#c1c6ab" stroke="#eee0b9"/>
          <path d="M35.5 102V85" class="support0" stroke="#a8b498" stroke-width="2"/>
          <path d="M20 39H51" class="wave00" stroke="#8dcfd5" stroke-width="1.1"/>
          <path d="M20 51H51" class="wave01" stroke="#8dcfd5" stroke-width="1.1"/>
          <path d="M20 63H51" class="wave02" stroke="#8dcfd5" stroke-width="1.1"/>
          <rect x="56" y="80" width="27" height="5" class="segment1" fill="#c1c6ab" stroke="#eee0b9"/>
          <path d="M69.5 102V85" class="support1" stroke="#a8b498" stroke-width="2"/>
          <path d="M54 39H85" class="wave10" stroke="#8dcfd5" stroke-width="1.1"/>
          <path d="M54 51H85" class="wave11" stroke="#8dcfd5" stroke-width="1.1"/>
          <path d="M54 63H85" class="wave12" stroke="#8dcfd5" stroke-width="1.1"/>
          <rect x="90" y="80" width="27" height="5" class="segment2" fill="#c1c6ab" stroke="#eee0b9"/>
          <path d="M103.5 102V85" class="support2" stroke="#a8b498" stroke-width="2"/>
          <path d="M88 39H119" class="wave20" stroke="#8dcfd5" stroke-width="1.1"/>
          <path d="M88 51H119" class="wave21" stroke="#8dcfd5" stroke-width="1.1"/>
          <path d="M88 63H119" class="wave22" stroke="#8dcfd5" stroke-width="1.1"/>
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

if (!customElements.get("concept-segmented-mirror-phasing")) {
  customElements.define("concept-segmented-mirror-phasing", ConceptSegmentedMirrorPhasing);
}
