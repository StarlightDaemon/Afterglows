// Comparative Advantage. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptComparativeAdvantage extends HTMLElement {
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
        .food0 {
          animation:food0 16s linear infinite;
        }
        .cloth0 {
          animation:cloth0 16s linear infinite;
        }
        .food0 {
          animation:food0 16s linear infinite;
        }
        .cloth0 {
          animation:cloth0 16s linear infinite;
        }
        .food1 {
          animation:food1 16s linear infinite;
        }
        .cloth1 {
          animation:cloth1 16s linear infinite;
        }
        .food1 {
          animation:food1 16s linear infinite;
        }
        .cloth1 {
          animation:cloth1 16s linear infinite;
        }
        .food2 {
          animation:food2 16s linear infinite;
        }
        .cloth2 {
          animation:cloth2 16s linear infinite;
        }
        .food2 {
          animation:food2 16s linear infinite;
        }
        .cloth2 {
          animation:cloth2 16s linear infinite;
        }
        .food3 {
          animation:food3 16s linear infinite;
        }
        .cloth3 {
          animation:cloth3 16s linear infinite;
        }
        .food3 {
          animation:food3 16s linear infinite;
        }
        .cloth3 {
          animation:cloth3 16s linear infinite;
        }
        .tradeEpisode {
          animation:tradeEpisode 16s linear infinite;
        }
        @keyframes food0 {
          0% {
            transform:translate(23px,92px);
            opacity:0;
          }
          2.083% {
            transform:translate(23px,92px);
            opacity:0;
          }
          4.167% {
            transform:translate(23px,92px);
            opacity:0;
          }
          6.25% {
            transform:translate(23px,92px);
            opacity:0.043;
          }
          8.333% {
            transform:translate(23px,92px);
            opacity:0.259;
          }
          10.417% {
            transform:translate(23px,92px);
            opacity:0.562;
          }
          12.5% {
            transform:translate(23px,92px);
            opacity:0.844;
          }
          14.583% {
            transform:translate(23px,92px);
            opacity:0.995;
          }
          16.667% {
            transform:translate(23px,92px);
            opacity:1;
          }
          18.75% {
            transform:translate(23px,92px);
            opacity:1;
          }
          20.833% {
            transform:translate(23px,92px);
            opacity:1;
          }
          22.917% {
            transform:translate(23px,92px);
            opacity:1;
          }
          25% {
            transform:translate(23px,92px);
            opacity:1;
          }
          27.083% {
            transform:translate(23px,92px);
            opacity:1;
          }
          29.167% {
            transform:translate(23px,92px);
            opacity:1;
          }
          31.25% {
            transform:translate(23px,92px);
            opacity:1;
          }
          33.333% {
            transform:translate(23px,92px);
            opacity:1;
          }
          35.417% {
            transform:translate(23px,92px);
            opacity:1;
          }
          37.5% {
            transform:translate(23px,92px);
            opacity:1;
          }
          39.583% {
            transform:translate(23px,92px);
            opacity:1;
          }
          41.667% {
            transform:translate(23px,92px);
            opacity:1;
          }
          43.75% {
            transform:translate(23px,92px);
            opacity:1;
          }
          45.833% {
            transform:translate(23px,92px);
            opacity:1;
          }
          47.917% {
            transform:translate(23px,92px);
            opacity:1;
          }
          50% {
            transform:translate(23px,92px);
            opacity:1;
          }
          52.083% {
            transform:translate(23px,92px);
            opacity:1;
          }
          54.167% {
            transform:translate(23px,92px);
            opacity:1;
          }
          56.25% {
            transform:translate(23px,92px);
            opacity:1;
          }
          58.333% {
            transform:translate(23px,92px);
            opacity:1;
          }
          60.417% {
            transform:translate(23px,92px);
            opacity:1;
          }
          62.5% {
            transform:translate(23px,92px);
            opacity:1;
          }
          64.583% {
            transform:translate(23px,92px);
            opacity:1;
          }
          66.667% {
            transform:translate(23px,92px);
            opacity:1;
          }
          68.75% {
            transform:translate(23px,92px);
            opacity:1;
          }
          70.833% {
            transform:translate(23px,92px);
            opacity:1;
          }
          72.917% {
            transform:translate(23px,92px);
            opacity:1;
          }
          75% {
            transform:translate(23px,92px);
            opacity:1;
          }
          77.083% {
            transform:translate(23px,92px);
            opacity:1;
          }
          79.167% {
            transform:translate(23px,92px);
            opacity:1;
          }
          81.25% {
            transform:translate(23px,92px);
            opacity:1;
          }
          83.333% {
            transform:translate(23px,92px);
            opacity:1;
          }
          85.417% {
            transform:translate(23px,92px);
            opacity:1;
          }
          87.5% {
            transform:translate(23px,92px);
            opacity:1;
          }
          89.583% {
            transform:translate(23px,92px);
            opacity:1;
          }
          91.667% {
            transform:translate(23px,92px);
            opacity:1;
          }
          93.75% {
            transform:translate(23px,92px);
            opacity:1;
          }
          95.833% {
            transform:translate(23px,92px);
            opacity:1;
          }
          97.917% {
            transform:translate(23px,92px);
            opacity:1;
          }
          100% {
            transform:translate(23px,92px);
            opacity:1;
          }
        }
        @keyframes cloth0 {
          0% {
            transform:translate(94px,92px);
            opacity:0;
          }
          2.083% {
            transform:translate(94px,92px);
            opacity:0;
          }
          4.167% {
            transform:translate(94px,92px);
            opacity:0;
          }
          6.25% {
            transform:translate(94px,92px);
            opacity:0.043;
          }
          8.333% {
            transform:translate(94px,92px);
            opacity:0.259;
          }
          10.417% {
            transform:translate(94px,92px);
            opacity:0.562;
          }
          12.5% {
            transform:translate(94px,92px);
            opacity:0.844;
          }
          14.583% {
            transform:translate(94px,92px);
            opacity:0.995;
          }
          16.667% {
            transform:translate(94px,92px);
            opacity:1;
          }
          18.75% {
            transform:translate(94px,92px);
            opacity:1;
          }
          20.833% {
            transform:translate(94px,92px);
            opacity:1;
          }
          22.917% {
            transform:translate(94px,92px);
            opacity:1;
          }
          25% {
            transform:translate(94px,92px);
            opacity:1;
          }
          27.083% {
            transform:translate(94px,92px);
            opacity:1;
          }
          29.167% {
            transform:translate(94px,92px);
            opacity:1;
          }
          31.25% {
            transform:translate(94px,92px);
            opacity:1;
          }
          33.333% {
            transform:translate(94px,92px);
            opacity:1;
          }
          35.417% {
            transform:translate(94px,92px);
            opacity:1;
          }
          37.5% {
            transform:translate(94px,92px);
            opacity:1;
          }
          39.583% {
            transform:translate(94px,92px);
            opacity:1;
          }
          41.667% {
            transform:translate(94px,92px);
            opacity:1;
          }
          43.75% {
            transform:translate(94px,92px);
            opacity:1;
          }
          45.833% {
            transform:translate(94px,92px);
            opacity:1;
          }
          47.917% {
            transform:translate(94px,92px);
            opacity:1;
          }
          50% {
            transform:translate(94px,92px);
            opacity:1;
          }
          52.083% {
            transform:translate(94px,92px);
            opacity:1;
          }
          54.167% {
            transform:translate(94px,92px);
            opacity:1;
          }
          56.25% {
            transform:translate(94px,92px);
            opacity:1;
          }
          58.333% {
            transform:translate(94px,92px);
            opacity:1;
          }
          60.417% {
            transform:translate(94px,92px);
            opacity:1;
          }
          62.5% {
            transform:translate(94px,92px);
            opacity:1;
          }
          64.583% {
            transform:translate(94px,92px);
            opacity:1;
          }
          66.667% {
            transform:translate(94px,92px);
            opacity:1;
          }
          68.75% {
            transform:translate(94px,92px);
            opacity:1;
          }
          70.833% {
            transform:translate(94px,92px);
            opacity:1;
          }
          72.917% {
            transform:translate(94px,92px);
            opacity:1;
          }
          75% {
            transform:translate(94px,92px);
            opacity:1;
          }
          77.083% {
            transform:translate(94px,92px);
            opacity:1;
          }
          79.167% {
            transform:translate(94px,92px);
            opacity:1;
          }
          81.25% {
            transform:translate(94px,92px);
            opacity:1;
          }
          83.333% {
            transform:translate(94px,92px);
            opacity:1;
          }
          85.417% {
            transform:translate(94px,92px);
            opacity:1;
          }
          87.5% {
            transform:translate(94px,92px);
            opacity:1;
          }
          89.583% {
            transform:translate(94px,92px);
            opacity:1;
          }
          91.667% {
            transform:translate(94px,92px);
            opacity:1;
          }
          93.75% {
            transform:translate(94px,92px);
            opacity:1;
          }
          95.833% {
            transform:translate(94px,92px);
            opacity:1;
          }
          97.917% {
            transform:translate(94px,92px);
            opacity:1;
          }
          100% {
            transform:translate(94px,92px);
            opacity:1;
          }
        }
        @keyframes food1 {
          0% {
            transform:translate(39px,92px);
            opacity:0;
          }
          2.083% {
            transform:translate(39px,92px);
            opacity:0;
          }
          4.167% {
            transform:translate(39px,92px);
            opacity:0;
          }
          6.25% {
            transform:translate(39px,92px);
            opacity:0;
          }
          8.333% {
            transform:translate(39px,92px);
            opacity:0;
          }
          10.417% {
            transform:translate(39px,92px);
            opacity:0.055;
          }
          12.5% {
            transform:translate(39px,92px);
            opacity:0.282;
          }
          14.583% {
            transform:translate(39px,92px);
            opacity:0.587;
          }
          16.667% {
            transform:translate(39px,92px);
            opacity:0.862;
          }
          18.75% {
            transform:translate(39px,92px);
            opacity:0.998;
          }
          20.833% {
            transform:translate(39px,92px);
            opacity:1;
          }
          22.917% {
            transform:translate(39px,92px);
            opacity:1;
          }
          25% {
            transform:translate(39px,92px);
            opacity:1;
          }
          27.083% {
            transform:translate(39px,92px);
            opacity:1;
          }
          29.167% {
            transform:translate(39px,92px);
            opacity:1;
          }
          31.25% {
            transform:translate(39px,92px);
            opacity:1;
          }
          33.333% {
            transform:translate(39px,92px);
            opacity:1;
          }
          35.417% {
            transform:translate(39px,92px);
            opacity:1;
          }
          37.5% {
            transform:translate(39px,92px);
            opacity:1;
          }
          39.583% {
            transform:translate(39px,92px);
            opacity:1;
          }
          41.667% {
            transform:translate(39px,92px);
            opacity:1;
          }
          43.75% {
            transform:translate(39px,92px);
            opacity:1;
          }
          45.833% {
            transform:translate(39px,92px);
            opacity:1;
          }
          47.917% {
            transform:translate(39px,92px);
            opacity:1;
          }
          50% {
            transform:translate(39px,92px);
            opacity:1;
          }
          52.083% {
            transform:translate(39px,92px);
            opacity:1;
          }
          54.167% {
            transform:translate(39px,92px);
            opacity:1;
          }
          56.25% {
            transform:translate(39px,92px);
            opacity:1;
          }
          58.333% {
            transform:translate(39px,92px);
            opacity:1;
          }
          60.417% {
            transform:translate(39px,92px);
            opacity:1;
          }
          62.5% {
            transform:translate(39px,92px);
            opacity:1;
          }
          64.583% {
            transform:translate(39px,92px);
            opacity:1;
          }
          66.667% {
            transform:translate(39px,92px);
            opacity:1;
          }
          68.75% {
            transform:translate(39px,92px);
            opacity:1;
          }
          70.833% {
            transform:translate(39px,92px);
            opacity:1;
          }
          72.917% {
            transform:translate(39px,92px);
            opacity:1;
          }
          75% {
            transform:translate(39px,92px);
            opacity:1;
          }
          77.083% {
            transform:translate(39px,92px);
            opacity:1;
          }
          79.167% {
            transform:translate(39px,92px);
            opacity:1;
          }
          81.25% {
            transform:translate(39px,92px);
            opacity:1;
          }
          83.333% {
            transform:translate(39px,92px);
            opacity:1;
          }
          85.417% {
            transform:translate(39px,92px);
            opacity:1;
          }
          87.5% {
            transform:translate(39px,92px);
            opacity:1;
          }
          89.583% {
            transform:translate(39px,92px);
            opacity:1;
          }
          91.667% {
            transform:translate(39px,92px);
            opacity:1;
          }
          93.75% {
            transform:translate(39px,92px);
            opacity:1;
          }
          95.833% {
            transform:translate(39px,92px);
            opacity:1;
          }
          97.917% {
            transform:translate(39px,92px);
            opacity:1;
          }
          100% {
            transform:translate(39px,92px);
            opacity:1;
          }
        }
        @keyframes cloth1 {
          0% {
            transform:translate(110px,92px);
            opacity:0;
          }
          2.083% {
            transform:translate(110px,92px);
            opacity:0;
          }
          4.167% {
            transform:translate(110px,92px);
            opacity:0;
          }
          6.25% {
            transform:translate(110px,92px);
            opacity:0;
          }
          8.333% {
            transform:translate(110px,92px);
            opacity:0;
          }
          10.417% {
            transform:translate(110px,92px);
            opacity:0.055;
          }
          12.5% {
            transform:translate(110px,92px);
            opacity:0.282;
          }
          14.583% {
            transform:translate(110px,92px);
            opacity:0.587;
          }
          16.667% {
            transform:translate(110px,92px);
            opacity:0.862;
          }
          18.75% {
            transform:translate(110px,92px);
            opacity:0.998;
          }
          20.833% {
            transform:translate(110px,92px);
            opacity:1;
          }
          22.917% {
            transform:translate(110px,92px);
            opacity:1;
          }
          25% {
            transform:translate(110px,92px);
            opacity:1;
          }
          27.083% {
            transform:translate(110px,92px);
            opacity:1;
          }
          29.167% {
            transform:translate(110px,92px);
            opacity:1;
          }
          31.25% {
            transform:translate(110px,92px);
            opacity:1;
          }
          33.333% {
            transform:translate(110px,92px);
            opacity:1;
          }
          35.417% {
            transform:translate(110px,92px);
            opacity:1;
          }
          37.5% {
            transform:translate(110px,92px);
            opacity:1;
          }
          39.583% {
            transform:translate(110px,92px);
            opacity:1;
          }
          41.667% {
            transform:translate(110px,92px);
            opacity:1;
          }
          43.75% {
            transform:translate(110px,92px);
            opacity:1;
          }
          45.833% {
            transform:translate(110px,92px);
            opacity:1;
          }
          47.917% {
            transform:translate(110px,92px);
            opacity:1;
          }
          50% {
            transform:translate(110px,92px);
            opacity:1;
          }
          52.083% {
            transform:translate(110px,92px);
            opacity:1;
          }
          54.167% {
            transform:translate(110px,92px);
            opacity:1;
          }
          56.25% {
            transform:translate(110px,92px);
            opacity:1;
          }
          58.333% {
            transform:translate(110px,92px);
            opacity:1;
          }
          60.417% {
            transform:translate(110px,92px);
            opacity:1;
          }
          62.5% {
            transform:translate(110px,92px);
            opacity:1;
          }
          64.583% {
            transform:translate(110px,92px);
            opacity:1;
          }
          66.667% {
            transform:translate(110px,92px);
            opacity:1;
          }
          68.75% {
            transform:translate(110px,92px);
            opacity:1;
          }
          70.833% {
            transform:translate(110px,92px);
            opacity:1;
          }
          72.917% {
            transform:translate(110px,92px);
            opacity:1;
          }
          75% {
            transform:translate(110px,92px);
            opacity:1;
          }
          77.083% {
            transform:translate(110px,92px);
            opacity:1;
          }
          79.167% {
            transform:translate(110px,92px);
            opacity:1;
          }
          81.25% {
            transform:translate(110px,92px);
            opacity:1;
          }
          83.333% {
            transform:translate(110px,92px);
            opacity:1;
          }
          85.417% {
            transform:translate(110px,92px);
            opacity:1;
          }
          87.5% {
            transform:translate(110px,92px);
            opacity:1;
          }
          89.583% {
            transform:translate(110px,92px);
            opacity:1;
          }
          91.667% {
            transform:translate(110px,92px);
            opacity:1;
          }
          93.75% {
            transform:translate(110px,92px);
            opacity:1;
          }
          95.833% {
            transform:translate(110px,92px);
            opacity:1;
          }
          97.917% {
            transform:translate(110px,92px);
            opacity:1;
          }
          100% {
            transform:translate(110px,92px);
            opacity:1;
          }
        }
        @keyframes food2 {
          0% {
            transform:translate(23px,110px);
            opacity:0;
          }
          2.083% {
            transform:translate(23px,110px);
            opacity:0;
          }
          4.167% {
            transform:translate(23px,110px);
            opacity:0;
          }
          6.25% {
            transform:translate(23px,110px);
            opacity:0;
          }
          8.333% {
            transform:translate(23px,110px);
            opacity:0;
          }
          10.417% {
            transform:translate(23px,110px);
            opacity:0;
          }
          12.5% {
            transform:translate(23px,110px);
            opacity:0;
          }
          14.583% {
            transform:translate(23px,110px);
            opacity:0.067;
          }
          16.667% {
            transform:translate(23px,110px);
            opacity:0.305;
          }
          18.75% {
            transform:translate(23px,110px);
            opacity:0.612;
          }
          20.833% {
            transform:translate(23px,110px);
            opacity:0.88;
          }
          22.917% {
            transform:translate(23px,110px);
            opacity:1;
          }
          25% {
            transform:translate(23px,110px);
            opacity:1;
          }
          27.083% {
            transform:translate(23px,110px);
            opacity:1;
          }
          29.167% {
            transform:translate(23px,110px);
            opacity:1;
          }
          31.25% {
            transform:translate(23px,110px);
            opacity:1;
          }
          33.333% {
            transform:translate(23px,110px);
            opacity:1;
          }
          35.417% {
            transform:translate(23px,110px);
            opacity:1;
          }
          37.5% {
            transform:translate(23px,110px);
            opacity:1;
          }
          39.583% {
            transform:translate(23px,110px);
            opacity:1;
          }
          41.667% {
            transform:translate(23px,110px);
            opacity:1;
          }
          43.75% {
            transform:translate(23px,110px);
            opacity:1;
          }
          45.833% {
            transform:translate(23px,110px);
            opacity:1;
          }
          47.917% {
            transform:translate(23px,110px);
            opacity:1;
          }
          50% {
            transform:translate(23.797px,109.647px);
            opacity:1;
          }
          52.083% {
            transform:translate(26.173px,108.601px);
            opacity:1;
          }
          54.167% {
            transform:translate(29.894px,106.997px);
            opacity:1;
          }
          56.25% {
            transform:translate(34.724px,105.042px);
            opacity:1;
          }
          58.333% {
            transform:translate(40.429px,103.03px);
            opacity:1;
          }
          60.417% {
            transform:translate(46.774px,101.316px);
            opacity:1;
          }
          62.5% {
            transform:translate(53.522px,100.242px);
            opacity:1;
          }
          64.583% {
            transform:translate(60.441px,100.037px);
            opacity:1;
          }
          66.667% {
            transform:translate(67.293px,100.747px);
            opacity:1;
          }
          68.75% {
            transform:translate(73.844px,102.218px);
            opacity:1;
          }
          70.833% {
            transform:translate(79.859px,104.143px);
            opacity:1;
          }
          72.917% {
            transform:translate(85.104px,106.164px);
            opacity:1;
          }
          75% {
            transform:translate(89.341px,107.953px);
            opacity:1;
          }
          77.083% {
            transform:translate(92.338px,109.265px);
            opacity:1;
          }
          79.167% {
            transform:translate(93.858px,109.937px);
            opacity:1;
          }
          81.25% {
            transform:translate(94px,110px);
            opacity:1;
          }
          83.333% {
            transform:translate(94px,110px);
            opacity:1;
          }
          85.417% {
            transform:translate(94px,110px);
            opacity:1;
          }
          87.5% {
            transform:translate(94px,110px);
            opacity:1;
          }
          89.583% {
            transform:translate(94px,110px);
            opacity:1;
          }
          91.667% {
            transform:translate(94px,110px);
            opacity:1;
          }
          93.75% {
            transform:translate(94px,110px);
            opacity:1;
          }
          95.833% {
            transform:translate(94px,110px);
            opacity:1;
          }
          97.917% {
            transform:translate(94px,110px);
            opacity:1;
          }
          100% {
            transform:translate(94px,110px);
            opacity:1;
          }
        }
        @keyframes cloth2 {
          0% {
            transform:translate(94px,110px);
            opacity:0;
          }
          2.083% {
            transform:translate(94px,110px);
            opacity:0;
          }
          4.167% {
            transform:translate(94px,110px);
            opacity:0;
          }
          6.25% {
            transform:translate(94px,110px);
            opacity:0;
          }
          8.333% {
            transform:translate(94px,110px);
            opacity:0;
          }
          10.417% {
            transform:translate(94px,110px);
            opacity:0;
          }
          12.5% {
            transform:translate(94px,110px);
            opacity:0;
          }
          14.583% {
            transform:translate(94px,110px);
            opacity:0.067;
          }
          16.667% {
            transform:translate(94px,110px);
            opacity:0.305;
          }
          18.75% {
            transform:translate(94px,110px);
            opacity:0.612;
          }
          20.833% {
            transform:translate(94px,110px);
            opacity:0.88;
          }
          22.917% {
            transform:translate(94px,110px);
            opacity:1;
          }
          25% {
            transform:translate(94px,110px);
            opacity:1;
          }
          27.083% {
            transform:translate(94px,110px);
            opacity:1;
          }
          29.167% {
            transform:translate(94px,110px);
            opacity:1;
          }
          31.25% {
            transform:translate(94px,110px);
            opacity:1;
          }
          33.333% {
            transform:translate(94px,110px);
            opacity:1;
          }
          35.417% {
            transform:translate(94px,110px);
            opacity:1;
          }
          37.5% {
            transform:translate(94px,110px);
            opacity:1;
          }
          39.583% {
            transform:translate(94px,110px);
            opacity:1;
          }
          41.667% {
            transform:translate(94px,110px);
            opacity:1;
          }
          43.75% {
            transform:translate(94px,110px);
            opacity:1;
          }
          45.833% {
            transform:translate(94px,110px);
            opacity:1;
          }
          47.917% {
            transform:translate(94px,110px);
            opacity:1;
          }
          50% {
            transform:translate(93.203px,110.353px);
            opacity:1;
          }
          52.083% {
            transform:translate(90.827px,111.399px);
            opacity:1;
          }
          54.167% {
            transform:translate(87.106px,113.003px);
            opacity:1;
          }
          56.25% {
            transform:translate(82.276px,114.958px);
            opacity:1;
          }
          58.333% {
            transform:translate(76.571px,116.97px);
            opacity:1;
          }
          60.417% {
            transform:translate(70.226px,118.684px);
            opacity:1;
          }
          62.5% {
            transform:translate(63.478px,119.758px);
            opacity:1;
          }
          64.583% {
            transform:translate(56.559px,119.963px);
            opacity:1;
          }
          66.667% {
            transform:translate(49.707px,119.253px);
            opacity:1;
          }
          68.75% {
            transform:translate(43.156px,117.782px);
            opacity:1;
          }
          70.833% {
            transform:translate(37.141px,115.857px);
            opacity:1;
          }
          72.917% {
            transform:translate(31.896px,113.836px);
            opacity:1;
          }
          75% {
            transform:translate(27.659px,112.047px);
            opacity:1;
          }
          77.083% {
            transform:translate(24.662px,110.735px);
            opacity:1;
          }
          79.167% {
            transform:translate(23.142px,110.063px);
            opacity:1;
          }
          81.25% {
            transform:translate(23px,110px);
            opacity:1;
          }
          83.333% {
            transform:translate(23px,110px);
            opacity:1;
          }
          85.417% {
            transform:translate(23px,110px);
            opacity:1;
          }
          87.5% {
            transform:translate(23px,110px);
            opacity:1;
          }
          89.583% {
            transform:translate(23px,110px);
            opacity:1;
          }
          91.667% {
            transform:translate(23px,110px);
            opacity:1;
          }
          93.75% {
            transform:translate(23px,110px);
            opacity:1;
          }
          95.833% {
            transform:translate(23px,110px);
            opacity:1;
          }
          97.917% {
            transform:translate(23px,110px);
            opacity:1;
          }
          100% {
            transform:translate(23px,110px);
            opacity:1;
          }
        }
        @keyframes food3 {
          0% {
            transform:translate(39px,110px);
            opacity:0;
          }
          2.083% {
            transform:translate(39px,110px);
            opacity:0;
          }
          4.167% {
            transform:translate(39px,110px);
            opacity:0;
          }
          6.25% {
            transform:translate(39px,110px);
            opacity:0;
          }
          8.333% {
            transform:translate(39px,110px);
            opacity:0;
          }
          10.417% {
            transform:translate(39px,110px);
            opacity:0;
          }
          12.5% {
            transform:translate(39px,110px);
            opacity:0;
          }
          14.583% {
            transform:translate(39px,110px);
            opacity:0;
          }
          16.667% {
            transform:translate(39px,110px);
            opacity:0;
          }
          18.75% {
            transform:translate(39px,110px);
            opacity:0.081;
          }
          20.833% {
            transform:translate(39px,110px);
            opacity:0.328;
          }
          22.917% {
            transform:translate(39px,110px);
            opacity:0.636;
          }
          25% {
            transform:translate(39px,110px);
            opacity:0.896;
          }
          27.083% {
            transform:translate(39px,110px);
            opacity:1;
          }
          29.167% {
            transform:translate(39px,110px);
            opacity:1;
          }
          31.25% {
            transform:translate(39px,110px);
            opacity:1;
          }
          33.333% {
            transform:translate(39px,110px);
            opacity:1;
          }
          35.417% {
            transform:translate(39px,110px);
            opacity:1;
          }
          37.5% {
            transform:translate(39px,110px);
            opacity:1;
          }
          39.583% {
            transform:translate(39px,110px);
            opacity:1;
          }
          41.667% {
            transform:translate(39px,110px);
            opacity:1;
          }
          43.75% {
            transform:translate(39px,110px);
            opacity:1;
          }
          45.833% {
            transform:translate(39px,110px);
            opacity:1;
          }
          47.917% {
            transform:translate(39px,110px);
            opacity:1;
          }
          50% {
            transform:translate(39.797px,109.647px);
            opacity:1;
          }
          52.083% {
            transform:translate(42.173px,108.601px);
            opacity:1;
          }
          54.167% {
            transform:translate(45.894px,106.997px);
            opacity:1;
          }
          56.25% {
            transform:translate(50.724px,105.042px);
            opacity:1;
          }
          58.333% {
            transform:translate(56.429px,103.03px);
            opacity:1;
          }
          60.417% {
            transform:translate(62.774px,101.316px);
            opacity:1;
          }
          62.5% {
            transform:translate(69.522px,100.242px);
            opacity:1;
          }
          64.583% {
            transform:translate(76.441px,100.037px);
            opacity:1;
          }
          66.667% {
            transform:translate(83.293px,100.747px);
            opacity:1;
          }
          68.75% {
            transform:translate(89.844px,102.218px);
            opacity:1;
          }
          70.833% {
            transform:translate(95.859px,104.143px);
            opacity:1;
          }
          72.917% {
            transform:translate(101.104px,106.164px);
            opacity:1;
          }
          75% {
            transform:translate(105.341px,107.953px);
            opacity:1;
          }
          77.083% {
            transform:translate(108.338px,109.265px);
            opacity:1;
          }
          79.167% {
            transform:translate(109.858px,109.937px);
            opacity:1;
          }
          81.25% {
            transform:translate(110px,110px);
            opacity:1;
          }
          83.333% {
            transform:translate(110px,110px);
            opacity:1;
          }
          85.417% {
            transform:translate(110px,110px);
            opacity:1;
          }
          87.5% {
            transform:translate(110px,110px);
            opacity:1;
          }
          89.583% {
            transform:translate(110px,110px);
            opacity:1;
          }
          91.667% {
            transform:translate(110px,110px);
            opacity:1;
          }
          93.75% {
            transform:translate(110px,110px);
            opacity:1;
          }
          95.833% {
            transform:translate(110px,110px);
            opacity:1;
          }
          97.917% {
            transform:translate(110px,110px);
            opacity:1;
          }
          100% {
            transform:translate(110px,110px);
            opacity:1;
          }
        }
        @keyframes cloth3 {
          0% {
            transform:translate(110px,110px);
            opacity:0;
          }
          2.083% {
            transform:translate(110px,110px);
            opacity:0;
          }
          4.167% {
            transform:translate(110px,110px);
            opacity:0;
          }
          6.25% {
            transform:translate(110px,110px);
            opacity:0;
          }
          8.333% {
            transform:translate(110px,110px);
            opacity:0;
          }
          10.417% {
            transform:translate(110px,110px);
            opacity:0;
          }
          12.5% {
            transform:translate(110px,110px);
            opacity:0;
          }
          14.583% {
            transform:translate(110px,110px);
            opacity:0;
          }
          16.667% {
            transform:translate(110px,110px);
            opacity:0;
          }
          18.75% {
            transform:translate(110px,110px);
            opacity:0.081;
          }
          20.833% {
            transform:translate(110px,110px);
            opacity:0.328;
          }
          22.917% {
            transform:translate(110px,110px);
            opacity:0.636;
          }
          25% {
            transform:translate(110px,110px);
            opacity:0.896;
          }
          27.083% {
            transform:translate(110px,110px);
            opacity:1;
          }
          29.167% {
            transform:translate(110px,110px);
            opacity:1;
          }
          31.25% {
            transform:translate(110px,110px);
            opacity:1;
          }
          33.333% {
            transform:translate(110px,110px);
            opacity:1;
          }
          35.417% {
            transform:translate(110px,110px);
            opacity:1;
          }
          37.5% {
            transform:translate(110px,110px);
            opacity:1;
          }
          39.583% {
            transform:translate(110px,110px);
            opacity:1;
          }
          41.667% {
            transform:translate(110px,110px);
            opacity:1;
          }
          43.75% {
            transform:translate(110px,110px);
            opacity:1;
          }
          45.833% {
            transform:translate(110px,110px);
            opacity:1;
          }
          47.917% {
            transform:translate(110px,110px);
            opacity:1;
          }
          50% {
            transform:translate(109.203px,110.353px);
            opacity:1;
          }
          52.083% {
            transform:translate(106.827px,111.399px);
            opacity:1;
          }
          54.167% {
            transform:translate(103.106px,113.003px);
            opacity:1;
          }
          56.25% {
            transform:translate(98.276px,114.958px);
            opacity:1;
          }
          58.333% {
            transform:translate(92.571px,116.97px);
            opacity:1;
          }
          60.417% {
            transform:translate(86.226px,118.684px);
            opacity:1;
          }
          62.5% {
            transform:translate(79.478px,119.758px);
            opacity:1;
          }
          64.583% {
            transform:translate(72.559px,119.963px);
            opacity:1;
          }
          66.667% {
            transform:translate(65.707px,119.253px);
            opacity:1;
          }
          68.75% {
            transform:translate(59.156px,117.782px);
            opacity:1;
          }
          70.833% {
            transform:translate(53.141px,115.857px);
            opacity:1;
          }
          72.917% {
            transform:translate(47.896px,113.836px);
            opacity:1;
          }
          75% {
            transform:translate(43.659px,112.047px);
            opacity:1;
          }
          77.083% {
            transform:translate(40.662px,110.735px);
            opacity:1;
          }
          79.167% {
            transform:translate(39.142px,110.063px);
            opacity:1;
          }
          81.25% {
            transform:translate(39px,110px);
            opacity:1;
          }
          83.333% {
            transform:translate(39px,110px);
            opacity:1;
          }
          85.417% {
            transform:translate(39px,110px);
            opacity:1;
          }
          87.5% {
            transform:translate(39px,110px);
            opacity:1;
          }
          89.583% {
            transform:translate(39px,110px);
            opacity:1;
          }
          91.667% {
            transform:translate(39px,110px);
            opacity:1;
          }
          93.75% {
            transform:translate(39px,110px);
            opacity:1;
          }
          95.833% {
            transform:translate(39px,110px);
            opacity:1;
          }
          97.917% {
            transform:translate(39px,110px);
            opacity:1;
          }
          100% {
            transform:translate(39px,110px);
            opacity:1;
          }
        }
        @keyframes tradeEpisode {
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
          .food0 {
            transform:translate(23px,92px);
            opacity:1;
          }
          .cloth0 {
            transform:translate(94px,92px);
            opacity:1;
          }
          .food1 {
            transform:translate(39px,92px);
            opacity:1;
          }
          .cloth1 {
            transform:translate(110px,92px);
            opacity:1;
          }
          .food2 {
            transform:translate(89.341px,107.953px);
            opacity:1;
          }
          .cloth2 {
            transform:translate(27.659px,112.047px);
            opacity:1;
          }
          .food3 {
            transform:translate(105.341px,107.953px);
            opacity:1;
          }
          .cloth3 {
            transform:translate(43.659px,112.047px);
            opacity:1;
          }
          .tradeEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Comparative Advantage">
        <g class="tradeEpisode">
          <text x="16" y="17" font-family="sans-serif" font-size="9" fill="#c9d6b9">A</text>
          <text x="105" y="17" font-family="sans-serif" font-size="9" fill="#c9d6b9">B</text>
          <text x="51" y="17" font-family="sans-serif" font-size="9" fill="#c9d6b9">2 ticks</text>
          <rect x="12" y="24" width="45" height="30" fill="#294738" stroke="#749778"/>
          <rect x="83" y="24" width="45" height="30" fill="#294738" stroke="#749778"/>
          <circle cx="22" cy="36" r="2.7" fill="#daa06e"/>
          <path d="M22 34l2 -3" stroke="#92ba78" stroke-width="1"/>
          <circle cx="32" cy="36" r="2.7" fill="#daa06e"/>
          <path d="M32 34l2 -3" stroke="#92ba78" stroke-width="1"/>
          <rect x="42" y="33" width="6" height="6" fill="#86bbc5"/>
          <path d="M43 35l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          <circle cx="93" cy="36" r="2.7" fill="#daa06e"/>
          <path d="M93 34l2 -3" stroke="#92ba78" stroke-width="1"/>
          <rect x="101" y="33" width="6" height="6" fill="#86bbc5"/>
          <path d="M102 35l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          <rect x="113" y="33" width="6" height="6" fill="#86bbc5"/>
          <path d="M114 35l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          <text x="43" y="65" font-family="sans-serif" font-size="9" fill="#c9d6b9">mixed round</text>
          <rect x="12" y="79" width="45" height="47" fill="#294738" stroke="#749778"/>
          <rect x="83" y="79" width="45" height="47" fill="#294738" stroke="#749778"/>
          <g transform="translate(69 98) rotate(0)" fill="#d4bd82">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g transform="translate(69 113) rotate(180)" fill="#9ac2c6">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g class="food0">
            <circle cx="0" cy="0" r="2.7" fill="#daa06e"/>
            <path d="M0 -2l2 -3" stroke="#92ba78" stroke-width="1"/>
          </g>
          <g class="cloth0">
            <rect x="-3" y="-3" width="6" height="6" fill="#86bbc5"/>
            <path d="M-2 -1l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          </g>
          <g class="food1">
            <circle cx="0" cy="0" r="2.7" fill="#daa06e"/>
            <path d="M0 -2l2 -3" stroke="#92ba78" stroke-width="1"/>
          </g>
          <g class="cloth1">
            <rect x="-3" y="-3" width="6" height="6" fill="#86bbc5"/>
            <path d="M-2 -1l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          </g>
          <g class="food2">
            <circle cx="0" cy="0" r="2.7" fill="#daa06e"/>
            <path d="M0 -2l2 -3" stroke="#92ba78" stroke-width="1"/>
          </g>
          <g class="cloth2">
            <rect x="-3" y="-3" width="6" height="6" fill="#86bbc5"/>
            <path d="M-2 -1l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          </g>
          <g class="food3">
            <circle cx="0" cy="0" r="2.7" fill="#daa06e"/>
            <path d="M0 -2l2 -3" stroke="#92ba78" stroke-width="1"/>
          </g>
          <g class="cloth3">
            <rect x="-3" y="-3" width="6" height="6" fill="#86bbc5"/>
            <path d="M-2 -1l4 3" stroke="#c4dbd8" stroke-width=".7"/>
          </g>
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

if (!customElements.get("concept-comparative-advantage")) {
  customElements.define("concept-comparative-advantage", ConceptComparativeAdvantage);
}
