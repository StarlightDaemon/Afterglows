// Market Clearing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMarketClearing extends HTMLElement {
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
        .price0 {
          animation:price0 16s linear infinite;
        }
        .price1 {
          animation:price1 16s linear infinite;
        }
        .price2 {
          animation:price2 16s linear infinite;
        }
        .seller0 {
          animation:seller0 16s linear infinite;
        }
        .buyer0 {
          animation:buyer0 16s linear infinite;
        }
        .seller1 {
          animation:seller1 16s linear infinite;
        }
        .buyer1 {
          animation:buyer1 16s linear infinite;
        }
        .seller2 {
          animation:seller2 16s linear infinite;
        }
        .buyer2 {
          animation:buyer2 16s linear infinite;
        }
        .seller3 {
          animation:seller3 16s linear infinite;
        }
        .buyer3 {
          animation:buyer3 16s linear infinite;
        }
        .goods0 {
          animation:goods0 16s linear infinite;
        }
        .goods1 {
          animation:goods1 16s linear infinite;
        }
        .marketEpisode {
          animation:marketEpisode 16s linear infinite;
        }
        @keyframes price0 {
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
        @keyframes price1 {
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
        @keyframes price2 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes seller0 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes buyer0 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes seller1 {
          0% {
            opacity:0.2;
          }
          2.083% {
            opacity:0.2;
          }
          4.167% {
            opacity:0.2;
          }
          6.25% {
            opacity:0.2;
          }
          8.333% {
            opacity:0.2;
          }
          10.417% {
            opacity:0.2;
          }
          12.5% {
            opacity:0.2;
          }
          14.583% {
            opacity:0.2;
          }
          16.667% {
            opacity:0.2;
          }
          18.75% {
            opacity:0.2;
          }
          20.833% {
            opacity:0.2;
          }
          22.917% {
            opacity:0.2;
          }
          25% {
            opacity:0.2;
          }
          27.083% {
            opacity:0.2;
          }
          29.167% {
            opacity:0.2;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes buyer1 {
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes seller2 {
          0% {
            opacity:0.2;
          }
          2.083% {
            opacity:0.2;
          }
          4.167% {
            opacity:0.2;
          }
          6.25% {
            opacity:0.2;
          }
          8.333% {
            opacity:0.2;
          }
          10.417% {
            opacity:0.2;
          }
          12.5% {
            opacity:0.2;
          }
          14.583% {
            opacity:0.2;
          }
          16.667% {
            opacity:0.2;
          }
          18.75% {
            opacity:0.2;
          }
          20.833% {
            opacity:0.2;
          }
          22.917% {
            opacity:0.2;
          }
          25% {
            opacity:0.2;
          }
          27.083% {
            opacity:0.2;
          }
          29.167% {
            opacity:0.2;
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
            opacity:0.2;
          }
          60.417% {
            opacity:0.2;
          }
          62.5% {
            opacity:0.2;
          }
          64.583% {
            opacity:0.2;
          }
          66.667% {
            opacity:0.2;
          }
          68.75% {
            opacity:0.2;
          }
          70.833% {
            opacity:0.2;
          }
          72.917% {
            opacity:0.2;
          }
          75% {
            opacity:0.2;
          }
          77.083% {
            opacity:0.2;
          }
          79.167% {
            opacity:0.2;
          }
          81.25% {
            opacity:0.2;
          }
          83.333% {
            opacity:0.2;
          }
          85.417% {
            opacity:0.2;
          }
          87.5% {
            opacity:0.2;
          }
          89.583% {
            opacity:0.2;
          }
          91.667% {
            opacity:0.2;
          }
          93.75% {
            opacity:0.2;
          }
          95.833% {
            opacity:0.2;
          }
          97.917% {
            opacity:0.2;
          }
          100% {
            opacity:0.2;
          }
        }
        @keyframes buyer2 {
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
            opacity:0.2;
          }
          33.333% {
            opacity:0.2;
          }
          35.417% {
            opacity:0.2;
          }
          37.5% {
            opacity:0.2;
          }
          39.583% {
            opacity:0.2;
          }
          41.667% {
            opacity:0.2;
          }
          43.75% {
            opacity:0.2;
          }
          45.833% {
            opacity:0.2;
          }
          47.917% {
            opacity:0.2;
          }
          50% {
            opacity:0.2;
          }
          52.083% {
            opacity:0.2;
          }
          54.167% {
            opacity:0.2;
          }
          56.25% {
            opacity:0.2;
          }
          58.333% {
            opacity:0.2;
          }
          60.417% {
            opacity:0.2;
          }
          62.5% {
            opacity:0.2;
          }
          64.583% {
            opacity:0.2;
          }
          66.667% {
            opacity:0.2;
          }
          68.75% {
            opacity:0.2;
          }
          70.833% {
            opacity:0.2;
          }
          72.917% {
            opacity:0.2;
          }
          75% {
            opacity:0.2;
          }
          77.083% {
            opacity:0.2;
          }
          79.167% {
            opacity:0.2;
          }
          81.25% {
            opacity:0.2;
          }
          83.333% {
            opacity:0.2;
          }
          85.417% {
            opacity:0.2;
          }
          87.5% {
            opacity:0.2;
          }
          89.583% {
            opacity:0.2;
          }
          91.667% {
            opacity:0.2;
          }
          93.75% {
            opacity:0.2;
          }
          95.833% {
            opacity:0.2;
          }
          97.917% {
            opacity:0.2;
          }
          100% {
            opacity:0.2;
          }
        }
        @keyframes seller3 {
          0% {
            opacity:0.2;
          }
          2.083% {
            opacity:0.2;
          }
          4.167% {
            opacity:0.2;
          }
          6.25% {
            opacity:0.2;
          }
          8.333% {
            opacity:0.2;
          }
          10.417% {
            opacity:0.2;
          }
          12.5% {
            opacity:0.2;
          }
          14.583% {
            opacity:0.2;
          }
          16.667% {
            opacity:0.2;
          }
          18.75% {
            opacity:0.2;
          }
          20.833% {
            opacity:0.2;
          }
          22.917% {
            opacity:0.2;
          }
          25% {
            opacity:0.2;
          }
          27.083% {
            opacity:0.2;
          }
          29.167% {
            opacity:0.2;
          }
          31.25% {
            opacity:0.2;
          }
          33.333% {
            opacity:0.2;
          }
          35.417% {
            opacity:0.2;
          }
          37.5% {
            opacity:0.2;
          }
          39.583% {
            opacity:0.2;
          }
          41.667% {
            opacity:0.2;
          }
          43.75% {
            opacity:0.2;
          }
          45.833% {
            opacity:0.2;
          }
          47.917% {
            opacity:0.2;
          }
          50% {
            opacity:0.2;
          }
          52.083% {
            opacity:0.2;
          }
          54.167% {
            opacity:0.2;
          }
          56.25% {
            opacity:0.2;
          }
          58.333% {
            opacity:0.2;
          }
          60.417% {
            opacity:0.2;
          }
          62.5% {
            opacity:0.2;
          }
          64.583% {
            opacity:0.2;
          }
          66.667% {
            opacity:0.2;
          }
          68.75% {
            opacity:0.2;
          }
          70.833% {
            opacity:0.2;
          }
          72.917% {
            opacity:0.2;
          }
          75% {
            opacity:0.2;
          }
          77.083% {
            opacity:0.2;
          }
          79.167% {
            opacity:0.2;
          }
          81.25% {
            opacity:0.2;
          }
          83.333% {
            opacity:0.2;
          }
          85.417% {
            opacity:0.2;
          }
          87.5% {
            opacity:0.2;
          }
          89.583% {
            opacity:0.2;
          }
          91.667% {
            opacity:0.2;
          }
          93.75% {
            opacity:0.2;
          }
          95.833% {
            opacity:0.2;
          }
          97.917% {
            opacity:0.2;
          }
          100% {
            opacity:0.2;
          }
        }
        @keyframes buyer3 {
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
            opacity:0.2;
          }
          33.333% {
            opacity:0.2;
          }
          35.417% {
            opacity:0.2;
          }
          37.5% {
            opacity:0.2;
          }
          39.583% {
            opacity:0.2;
          }
          41.667% {
            opacity:0.2;
          }
          43.75% {
            opacity:0.2;
          }
          45.833% {
            opacity:0.2;
          }
          47.917% {
            opacity:0.2;
          }
          50% {
            opacity:0.2;
          }
          52.083% {
            opacity:0.2;
          }
          54.167% {
            opacity:0.2;
          }
          56.25% {
            opacity:0.2;
          }
          58.333% {
            opacity:0.2;
          }
          60.417% {
            opacity:0.2;
          }
          62.5% {
            opacity:0.2;
          }
          64.583% {
            opacity:0.2;
          }
          66.667% {
            opacity:0.2;
          }
          68.75% {
            opacity:0.2;
          }
          70.833% {
            opacity:0.2;
          }
          72.917% {
            opacity:0.2;
          }
          75% {
            opacity:0.2;
          }
          77.083% {
            opacity:0.2;
          }
          79.167% {
            opacity:0.2;
          }
          81.25% {
            opacity:0.2;
          }
          83.333% {
            opacity:0.2;
          }
          85.417% {
            opacity:0.2;
          }
          87.5% {
            opacity:0.2;
          }
          89.583% {
            opacity:0.2;
          }
          91.667% {
            opacity:0.2;
          }
          93.75% {
            opacity:0.2;
          }
          95.833% {
            opacity:0.2;
          }
          97.917% {
            opacity:0.2;
          }
          100% {
            opacity:0.2;
          }
        }
        @keyframes goods0 {
          0% {
            transform:translate(37px,32px);
          }
          2.083% {
            transform:translate(37px,32px);
          }
          4.167% {
            transform:translate(37px,32px);
          }
          6.25% {
            transform:translate(37px,32px);
          }
          8.333% {
            transform:translate(37px,32px);
          }
          10.417% {
            transform:translate(37px,32px);
          }
          12.5% {
            transform:translate(37px,32px);
          }
          14.583% {
            transform:translate(37px,32px);
          }
          16.667% {
            transform:translate(37px,32px);
          }
          18.75% {
            transform:translate(37px,32px);
          }
          20.833% {
            transform:translate(37px,32px);
          }
          22.917% {
            transform:translate(37px,32px);
          }
          25% {
            transform:translate(37px,32px);
          }
          27.083% {
            transform:translate(37px,32px);
          }
          29.167% {
            transform:translate(37px,32px);
          }
          31.25% {
            transform:translate(37px,32px);
          }
          33.333% {
            transform:translate(37px,32px);
          }
          35.417% {
            transform:translate(37px,32px);
          }
          37.5% {
            transform:translate(37px,32px);
          }
          39.583% {
            transform:translate(37px,32px);
          }
          41.667% {
            transform:translate(37px,32px);
          }
          43.75% {
            transform:translate(37px,32px);
          }
          45.833% {
            transform:translate(37px,32px);
          }
          47.917% {
            transform:translate(37px,32px);
          }
          50% {
            transform:translate(37px,32px);
          }
          52.083% {
            transform:translate(37px,32px);
          }
          54.167% {
            transform:translate(37px,32px);
          }
          56.25% {
            transform:translate(37px,32px);
          }
          58.333% {
            transform:translate(37px,32px);
          }
          60.417% {
            transform:translate(37px,32px);
          }
          62.5% {
            transform:translate(37px,32px);
          }
          64.583% {
            transform:translate(37px,32px);
          }
          66.667% {
            transform:translate(38.593px,32px);
          }
          68.75% {
            transform:translate(44.4px,32px);
          }
          70.833% {
            transform:translate(53.302px,32px);
          }
          72.917% {
            transform:translate(64.07px,32px);
          }
          75% {
            transform:translate(75.477px,32px);
          }
          77.083% {
            transform:translate(86.295px,32px);
          }
          79.167% {
            transform:translate(95.295px,32px);
          }
          81.25% {
            transform:translate(101.25px,32px);
          }
          83.333% {
            transform:translate(103px,32px);
          }
          85.417% {
            transform:translate(103px,32px);
          }
          87.5% {
            transform:translate(103px,32px);
          }
          89.583% {
            transform:translate(103px,32px);
          }
          91.667% {
            transform:translate(103px,32px);
          }
          93.75% {
            transform:translate(103px,32px);
          }
          95.833% {
            transform:translate(103px,32px);
          }
          97.917% {
            transform:translate(103px,32px);
          }
          100% {
            transform:translate(103px,32px);
          }
        }
        @keyframes goods1 {
          0% {
            transform:translate(37px,56px);
          }
          2.083% {
            transform:translate(37px,56px);
          }
          4.167% {
            transform:translate(37px,56px);
          }
          6.25% {
            transform:translate(37px,56px);
          }
          8.333% {
            transform:translate(37px,56px);
          }
          10.417% {
            transform:translate(37px,56px);
          }
          12.5% {
            transform:translate(37px,56px);
          }
          14.583% {
            transform:translate(37px,56px);
          }
          16.667% {
            transform:translate(37px,56px);
          }
          18.75% {
            transform:translate(37px,56px);
          }
          20.833% {
            transform:translate(37px,56px);
          }
          22.917% {
            transform:translate(37px,56px);
          }
          25% {
            transform:translate(37px,56px);
          }
          27.083% {
            transform:translate(37px,56px);
          }
          29.167% {
            transform:translate(37px,56px);
          }
          31.25% {
            transform:translate(37px,56px);
          }
          33.333% {
            transform:translate(37px,56px);
          }
          35.417% {
            transform:translate(37px,56px);
          }
          37.5% {
            transform:translate(37px,56px);
          }
          39.583% {
            transform:translate(37px,56px);
          }
          41.667% {
            transform:translate(37px,56px);
          }
          43.75% {
            transform:translate(37px,56px);
          }
          45.833% {
            transform:translate(37px,56px);
          }
          47.917% {
            transform:translate(37px,56px);
          }
          50% {
            transform:translate(37px,56px);
          }
          52.083% {
            transform:translate(37px,56px);
          }
          54.167% {
            transform:translate(37px,56px);
          }
          56.25% {
            transform:translate(37px,56px);
          }
          58.333% {
            transform:translate(37px,56px);
          }
          60.417% {
            transform:translate(37px,56px);
          }
          62.5% {
            transform:translate(37px,56px);
          }
          64.583% {
            transform:translate(37px,56px);
          }
          66.667% {
            transform:translate(37px,56px);
          }
          68.75% {
            transform:translate(37px,56px);
          }
          70.833% {
            transform:translate(37px,56px);
          }
          72.917% {
            transform:translate(37.496px,56px);
          }
          75% {
            transform:translate(41.889px,56px);
          }
          77.083% {
            transform:translate(49.818px,56px);
          }
          79.167% {
            transform:translate(60.056px,56px);
          }
          81.25% {
            transform:translate(71.375px,56px);
          }
          83.333% {
            transform:translate(82.546px,56px);
          }
          85.417% {
            transform:translate(92.342px,56px);
          }
          87.5% {
            transform:translate(99.534px,56px);
          }
          89.583% {
            transform:translate(102.896px,56px);
          }
          91.667% {
            transform:translate(103px,56px);
          }
          93.75% {
            transform:translate(103px,56px);
          }
          95.833% {
            transform:translate(103px,56px);
          }
          97.917% {
            transform:translate(103px,56px);
          }
          100% {
            transform:translate(103px,56px);
          }
        }
        @keyframes marketEpisode {
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
          .price0 {
            opacity:0;
          }
          .price1 {
            opacity:0;
          }
          .price2 {
            opacity:1;
          }
          .seller0 {
            opacity:1;
          }
          .buyer0 {
            opacity:1;
          }
          .seller1 {
            opacity:1;
          }
          .buyer1 {
            opacity:1;
          }
          .seller2 {
            opacity:0.2;
          }
          .buyer2 {
            opacity:0.2;
          }
          .seller3 {
            opacity:0.2;
          }
          .buyer3 {
            opacity:0.2;
          }
          .goods0 {
            transform:translate(75.477px,32px);
          }
          .goods1 {
            transform:translate(41.889px,56px);
          }
          .marketEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Market Clearing">
        <g class="marketEpisode">
          <path d="M12 19H44M96 19H128" stroke="#8cac8e"/>
          <rect x="53" y="40" width="34" height="28" rx="3" fill="#294a3c" stroke="#abc09c"/>
          <text x="57" y="30" font-family="sans-serif" font-size="9" fill="#c9d6b9">PRICE</text>
          <text x="70" y="59" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="price0" text-anchor="middle" style="font-size:16px">3</text>
          <text x="70" y="59" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="price1" text-anchor="middle" style="font-size:16px">7</text>
          <text x="70" y="59" font-family="sans-serif" font-size="9" fill="#c9d6b9" class="price2" text-anchor="middle" style="font-size:16px">5.5</text>
          <g class="seller0">
            <circle cx="24" cy="27" r="3" fill="#a6c3b0"/>
            <path d="M19 37Q19 31 24 31Q29 31 29 37Z" fill="#a6c3b0"/>
          </g>
          <g class="buyer0">
            <circle cx="116" cy="27" r="3" fill="#a6c3b0"/>
            <path d="M111 37Q111 31 116 31Q121 31 121 37Z" fill="#a6c3b0"/>
            <circle cx="104" cy="32" r="3" fill="#d7c680"/>
          </g>
          <g class="seller1">
            <circle cx="24" cy="51" r="3" fill="#a6c3b0"/>
            <path d="M19 61Q19 55 24 55Q29 55 29 61Z" fill="#a6c3b0"/>
          </g>
          <g class="buyer1">
            <circle cx="116" cy="51" r="3" fill="#a6c3b0"/>
            <path d="M111 61Q111 55 116 55Q121 55 121 61Z" fill="#a6c3b0"/>
            <circle cx="104" cy="56" r="3" fill="#d7c680"/>
          </g>
          <g class="seller2">
            <circle cx="24" cy="75" r="3" fill="#a6c3b0"/>
            <path d="M19 85Q19 79 24 79Q29 79 29 85Z" fill="#a6c3b0"/>
            <rect x="34" y="77" width="6" height="6" fill="#d5b47d"/>
          </g>
          <g class="buyer2">
            <circle cx="116" cy="75" r="3" fill="#a6c3b0"/>
            <path d="M111 85Q111 79 116 79Q121 79 121 85Z" fill="#a6c3b0"/>
            <circle cx="104" cy="80" r="3" fill="#d7c680"/>
          </g>
          <g class="seller3">
            <circle cx="24" cy="99" r="3" fill="#a6c3b0"/>
            <path d="M19 109Q19 103 24 103Q29 103 29 109Z" fill="#a6c3b0"/>
            <rect x="34" y="101" width="6" height="6" fill="#d5b47d"/>
          </g>
          <g class="buyer3">
            <circle cx="116" cy="99" r="3" fill="#a6c3b0"/>
            <path d="M111 109Q111 103 116 103Q121 103 121 109Z" fill="#a6c3b0"/>
            <circle cx="104" cy="104" r="3" fill="#d7c680"/>
          </g>
          <rect x="-3" y="-3" width="6" height="6" class="goods0" fill="#d5b47d"/>
          <rect x="-3" y="-3" width="6" height="6" class="goods1" fill="#d5b47d"/>
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

if (!customElements.get("concept-market-clearing")) {
  customElements.define("concept-market-clearing", ConceptMarketClearing);
}
