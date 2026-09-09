// Ascending Auction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAscendingAuction extends HTMLElement {
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
        .bid0 {
          animation:bid0 16s linear infinite;
        }
        .bid1 {
          animation:bid1 16s linear infinite;
        }
        .bid2 {
          animation:bid2 16s linear infinite;
        }
        .bid3 {
          animation:bid3 16s linear infinite;
        }
        .paddle0 {
          animation:paddle0 16s linear infinite;
        }
        .paddle1 {
          animation:paddle1 16s linear infinite;
        }
        .paddle2 {
          animation:paddle2 16s linear infinite;
        }
        .hammer {
          animation:hammer 16s linear infinite;
        }
        .handle {
          animation:handle 16s linear infinite;
        }
        .lot {
          animation:lot 16s linear infinite;
        }
        .auctionEpisode {
          animation:auctionEpisode 16s linear infinite;
        }
        @keyframes bid0 {
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
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
          }
          60.417% {
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          66.667% {
            opacity:0;
          }
          68.75% {
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes bid1 {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0;
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
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
          }
          60.417% {
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          66.667% {
            opacity:0;
          }
          68.75% {
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes bid2 {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
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
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          66.667% {
            opacity:0;
          }
          68.75% {
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes bid3 {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
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
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes paddle0 {
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
            opacity:0.08;
          }
          43.75% {
            opacity:0.08;
          }
          45.833% {
            opacity:0.08;
          }
          47.917% {
            opacity:0.08;
          }
          50% {
            opacity:0.08;
          }
          52.083% {
            opacity:0.08;
          }
          54.167% {
            opacity:0.08;
          }
          56.25% {
            opacity:0.08;
          }
          58.333% {
            opacity:0.08;
          }
          60.417% {
            opacity:0.08;
          }
          62.5% {
            opacity:0.08;
          }
          64.583% {
            opacity:0.08;
          }
          66.667% {
            opacity:0.08;
          }
          68.75% {
            opacity:0.08;
          }
          70.833% {
            opacity:0.08;
          }
          72.917% {
            opacity:0.08;
          }
          75% {
            opacity:0.08;
          }
          77.083% {
            opacity:0.08;
          }
          79.167% {
            opacity:0.08;
          }
          81.25% {
            opacity:0.08;
          }
          83.333% {
            opacity:0.08;
          }
          85.417% {
            opacity:0.08;
          }
          87.5% {
            opacity:0.08;
          }
          89.583% {
            opacity:0.08;
          }
          91.667% {
            opacity:0.08;
          }
          93.75% {
            opacity:0.08;
          }
          95.833% {
            opacity:0.08;
          }
          97.917% {
            opacity:0.08;
          }
          100% {
            opacity:0.08;
          }
        }
        @keyframes paddle1 {
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
            opacity:0.08;
          }
          62.5% {
            opacity:0.08;
          }
          64.583% {
            opacity:0.08;
          }
          66.667% {
            opacity:0.08;
          }
          68.75% {
            opacity:0.08;
          }
          70.833% {
            opacity:0.08;
          }
          72.917% {
            opacity:0.08;
          }
          75% {
            opacity:0.08;
          }
          77.083% {
            opacity:0.08;
          }
          79.167% {
            opacity:0.08;
          }
          81.25% {
            opacity:0.08;
          }
          83.333% {
            opacity:0.08;
          }
          85.417% {
            opacity:0.08;
          }
          87.5% {
            opacity:0.08;
          }
          89.583% {
            opacity:0.08;
          }
          91.667% {
            opacity:0.08;
          }
          93.75% {
            opacity:0.08;
          }
          95.833% {
            opacity:0.08;
          }
          97.917% {
            opacity:0.08;
          }
          100% {
            opacity:0.08;
          }
        }
        @keyframes paddle2 {
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
            opacity:0.08;
          }
          81.25% {
            opacity:0.08;
          }
          83.333% {
            opacity:0.08;
          }
          85.417% {
            opacity:0.08;
          }
          87.5% {
            opacity:0.08;
          }
          89.583% {
            opacity:0.08;
          }
          91.667% {
            opacity:0.08;
          }
          93.75% {
            opacity:0.08;
          }
          95.833% {
            opacity:0.08;
          }
          97.917% {
            opacity:0.08;
          }
          100% {
            opacity:0.08;
          }
        }
        @keyframes hammer {
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
            transform:translate(0px,2.818px);
          }
          75% {
            transform:translate(0px,7.391px);
          }
          77.083% {
            transform:translate(0px,7.287px);
          }
          79.167% {
            transform:translate(0px,2.572px);
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
        @keyframes handle {
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
            transform:translate(0px,2.818px);
          }
          75% {
            transform:translate(0px,7.391px);
          }
          77.083% {
            transform:translate(0px,7.287px);
          }
          79.167% {
            transform:translate(0px,2.572px);
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
        @keyframes lot {
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
            transform:translate(1.543px,1.68px);
          }
          85.417% {
            transform:translate(8.867px,9.655px);
          }
          87.5% {
            transform:translate(19.694px,21.445px);
          }
          89.583% {
            transform:translate(31.2px,33.973px);
          }
          91.667% {
            transform:translate(40.557px,44.163px);
          }
          93.75% {
            transform:translate(44.942px,48.937px);
          }
          95.833% {
            transform:translate(45px,49px);
          }
          97.917% {
            transform:translate(45px,49px);
          }
          100% {
            transform:translate(45px,49px);
          }
        }
        @keyframes auctionEpisode {
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
            opacity:1;
          }
          97.917% {
            opacity:0.777;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .bid0 {
            opacity:0;
          }
          .bid1 {
            opacity:0;
          }
          .bid2 {
            opacity:0;
          }
          .bid3 {
            opacity:1;
          }
          .paddle0 {
            opacity:0.08;
          }
          .paddle1 {
            opacity:0.08;
          }
          .paddle2 {
            opacity:1;
          }
          .hammer {
            transform:translate(0px,7.391px);
          }
          .handle {
            transform:translate(0px,7.391px);
          }
          .lot {
            transform:translate(0px,0px);
          }
          .auctionEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ascending Auction">
        <g class="auctionEpisode">
          <rect x="48" y="58" width="44" height="8" fill="#816d49"/>
          <rect x="59" y="67" width="22" height="19" fill="#465c3e"/>
          <circle cx="70" cy="48" r="8" class="lot" fill="#b6c398" stroke="#e6d9a6"/>
          <rect x="94" y="26" width="19" height="7" class="hammer" fill="#ac875b"/>
          <path d="M99 32L93 43" class="handle" stroke="#d0ac73" stroke-width="3"/>
          <text x="64" y="25" font-family="sans-serif" font-size="9" fill="#c9d6b9">BID</text>
          <text x="70" y="40" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="bid0" text-anchor="middle" style="font-size:15px">2</text>
          <text x="70" y="40" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="bid1" text-anchor="middle" style="font-size:15px">4</text>
          <text x="70" y="40" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="bid2" text-anchor="middle" style="font-size:15px">6</text>
          <text x="70" y="40" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="bid3" text-anchor="middle" style="font-size:15px">8</text>
          <circle cx="25" cy="108" r="3" fill="#9db99c"/>
          <path d="M20 118Q20 112 25 112Q30 112 30 118Z" fill="#9db99c"/>
          <g class="paddle0">
            <path d="M31 109L34 96" stroke="#d0c392"/>
            <circle cx="35" cy="94" r="4" fill="#d8bd78"/>
          </g>
          <circle cx="70" cy="108" r="3" fill="#9db99c"/>
          <path d="M65 118Q65 112 70 112Q75 112 75 118Z" fill="#9db99c"/>
          <g class="paddle1">
            <path d="M76 109L79 96" stroke="#d0c392"/>
            <circle cx="80" cy="94" r="4" fill="#d8bd78"/>
          </g>
          <circle cx="115" cy="108" r="3" fill="#9db99c"/>
          <path d="M110 118Q110 112 115 112Q120 112 120 118Z" fill="#9db99c"/>
          <g class="paddle2">
            <path d="M121 109L124 96" stroke="#d0c392"/>
            <circle cx="125" cy="94" r="4" fill="#d8bd78"/>
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

if (!customElements.get("concept-ascending-auction")) {
  customElements.define("concept-ascending-auction", ConceptAscendingAuction);
}
