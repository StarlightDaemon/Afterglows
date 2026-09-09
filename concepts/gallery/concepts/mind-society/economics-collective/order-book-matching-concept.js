// Order Book Matching. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptOrderBookMatching extends HTMLElement {
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
        .ask0 {
          animation:ask0 16s linear infinite;
        }
        .ask1 {
          animation:ask1 16s linear infinite;
        }
        .ask2 {
          animation:ask2 16s linear infinite;
        }
        .ask3 {
          animation:ask3 16s linear infinite;
        }
        .ask4 {
          animation:ask4 16s linear infinite;
        }
        .request0 {
          animation:request0 16s linear infinite;
        }
        .request1 {
          animation:request1 16s linear infinite;
        }
        .request2 {
          animation:request2 16s linear infinite;
        }
        .request3 {
          animation:request3 16s linear infinite;
        }
        .price100 {
          animation:price100 16s linear infinite;
        }
        .price101 {
          animation:price101 16s linear infinite;
        }
        .bookEpisode {
          animation:bookEpisode 16s linear infinite;
        }
        @keyframes ask0 {
          0% {
            transform:translate(48px,43px);
          }
          2.083% {
            transform:translate(48px,43px);
          }
          4.167% {
            transform:translate(48px,43px);
          }
          6.25% {
            transform:translate(48px,43px);
          }
          8.333% {
            transform:translate(48px,43px);
          }
          10.417% {
            transform:translate(48px,43px);
          }
          12.5% {
            transform:translate(48px,43px);
          }
          14.583% {
            transform:translate(48px,46.889px);
          }
          16.667% {
            transform:translate(35.677px,54px);
          }
          18.75% {
            transform:translate(10.424px,54px);
            opacity:0;
          }
          20.833% {
            transform:translate(12.158px,91px);
            opacity:0;
            opacity:0;
          }
          22.917% {
            transform:translate(49.279px,91px);
            opacity:0;
          }
          25% {
            transform:translate(57px,112px);
          }
          27.083% {
            transform:translate(57px,112px);
          }
          29.167% {
            transform:translate(57px,112px);
          }
          31.25% {
            transform:translate(57px,112px);
          }
          33.333% {
            transform:translate(57px,112px);
          }
          35.417% {
            transform:translate(57px,112px);
          }
          37.5% {
            transform:translate(57px,112px);
          }
          39.583% {
            transform:translate(57px,112px);
          }
          41.667% {
            transform:translate(57px,112px);
          }
          43.75% {
            transform:translate(57px,112px);
          }
          45.833% {
            transform:translate(57px,112px);
          }
          47.917% {
            transform:translate(57px,112px);
          }
          50% {
            transform:translate(57px,112px);
          }
          52.083% {
            transform:translate(57px,112px);
          }
          54.167% {
            transform:translate(57px,112px);
          }
          56.25% {
            transform:translate(57px,112px);
          }
          58.333% {
            transform:translate(57px,112px);
          }
          60.417% {
            transform:translate(57px,112px);
          }
          62.5% {
            transform:translate(57px,112px);
          }
          64.583% {
            transform:translate(57px,112px);
          }
          66.667% {
            transform:translate(57px,112px);
          }
          68.75% {
            transform:translate(57px,112px);
          }
          70.833% {
            transform:translate(57px,112px);
          }
          72.917% {
            transform:translate(57px,112px);
          }
          75% {
            transform:translate(57px,112px);
          }
          77.083% {
            transform:translate(57px,112px);
          }
          79.167% {
            transform:translate(57px,112px);
          }
          81.25% {
            transform:translate(57px,112px);
          }
          83.333% {
            transform:translate(57px,112px);
          }
          85.417% {
            transform:translate(57px,112px);
          }
          87.5% {
            transform:translate(57px,112px);
          }
          89.583% {
            transform:translate(57px,112px);
          }
          91.667% {
            transform:translate(57px,112px);
          }
          93.75% {
            transform:translate(57px,112px);
          }
          95.833% {
            transform:translate(57px,112px);
          }
          97.917% {
            transform:translate(57px,112px);
          }
          100% {
            transform:translate(57px,112px);
          }
        }
        @keyframes ask1 {
          0% {
            transform:translate(59px,43px);
          }
          2.083% {
            transform:translate(59px,43px);
          }
          4.167% {
            transform:translate(59px,43px);
          }
          6.25% {
            transform:translate(59px,43px);
          }
          8.333% {
            transform:translate(59px,43px);
          }
          10.417% {
            transform:translate(59px,43px);
          }
          12.5% {
            transform:translate(59px,43px);
          }
          14.583% {
            transform:translate(59px,43px);
          }
          16.667% {
            transform:translate(59px,43px);
          }
          18.75% {
            transform:translate(59px,43px);
          }
          20.833% {
            transform:translate(59px,43px);
          }
          22.917% {
            transform:translate(59px,43px);
          }
          25% {
            transform:translate(59px,43px);
          }
          27.083% {
            transform:translate(59px,43px);
          }
          29.167% {
            transform:translate(59px,50.778px);
          }
          31.25% {
            transform:translate(34.273px,54px);
          }
          33.333% {
            transform:translate(8px,62.596px);
            opacity:0;
          }
          35.417% {
            transform:translate(25.224px,91px);
            opacity:0;
            opacity:0;
          }
          37.5% {
            transform:translate(66px,92.909px);
            opacity:0;
          }
          39.583% {
            transform:translate(66px,112px);
          }
          41.667% {
            transform:translate(66px,112px);
          }
          43.75% {
            transform:translate(66px,112px);
          }
          45.833% {
            transform:translate(66px,112px);
          }
          47.917% {
            transform:translate(66px,112px);
          }
          50% {
            transform:translate(66px,112px);
          }
          52.083% {
            transform:translate(66px,112px);
          }
          54.167% {
            transform:translate(66px,112px);
          }
          56.25% {
            transform:translate(66px,112px);
          }
          58.333% {
            transform:translate(66px,112px);
          }
          60.417% {
            transform:translate(66px,112px);
          }
          62.5% {
            transform:translate(66px,112px);
          }
          64.583% {
            transform:translate(66px,112px);
          }
          66.667% {
            transform:translate(66px,112px);
          }
          68.75% {
            transform:translate(66px,112px);
          }
          70.833% {
            transform:translate(66px,112px);
          }
          72.917% {
            transform:translate(66px,112px);
          }
          75% {
            transform:translate(66px,112px);
          }
          77.083% {
            transform:translate(66px,112px);
          }
          79.167% {
            transform:translate(66px,112px);
          }
          81.25% {
            transform:translate(66px,112px);
          }
          83.333% {
            transform:translate(66px,112px);
          }
          85.417% {
            transform:translate(66px,112px);
          }
          87.5% {
            transform:translate(66px,112px);
          }
          89.583% {
            transform:translate(66px,112px);
          }
          91.667% {
            transform:translate(66px,112px);
          }
          93.75% {
            transform:translate(66px,112px);
          }
          95.833% {
            transform:translate(66px,112px);
          }
          97.917% {
            transform:translate(66px,112px);
          }
          100% {
            transform:translate(66px,112px);
          }
        }
        @keyframes ask2 {
          0% {
            transform:translate(74px,43px);
          }
          2.083% {
            transform:translate(74px,43px);
          }
          4.167% {
            transform:translate(74px,43px);
          }
          6.25% {
            transform:translate(74px,43px);
          }
          8.333% {
            transform:translate(74px,43px);
          }
          10.417% {
            transform:translate(74px,43px);
          }
          12.5% {
            transform:translate(74px,43px);
          }
          14.583% {
            transform:translate(74px,43px);
          }
          16.667% {
            transform:translate(74px,43px);
          }
          18.75% {
            transform:translate(74px,43px);
          }
          20.833% {
            transform:translate(74px,43px);
          }
          22.917% {
            transform:translate(74px,43px);
          }
          25% {
            transform:translate(74px,43px);
          }
          27.083% {
            transform:translate(74px,43px);
          }
          29.167% {
            transform:translate(74px,43px);
          }
          31.25% {
            transform:translate(74px,43px);
          }
          33.333% {
            transform:translate(74px,43px);
          }
          35.417% {
            transform:translate(74px,43px);
          }
          37.5% {
            transform:translate(74px,43px);
          }
          39.583% {
            transform:translate(74px,43px);
          }
          41.667% {
            transform:translate(74px,43px);
          }
          43.75% {
            transform:translate(72px,54px);
            opacity:0;
          }
          45.833% {
            transform:translate(30.333px,54px);
            opacity:0;
            opacity:0;
          }
          47.917% {
            transform:translate(8px,75.677px);
            opacity:0;
            opacity:0;
          }
          50% {
            transform:translate(42.109px,91px);
            opacity:0;
            opacity:0;
          }
          52.083% {
            transform:translate(75px,100.333px);
            opacity:0;
          }
          54.167% {
            transform:translate(75px,112px);
          }
          56.25% {
            transform:translate(75px,112px);
          }
          58.333% {
            transform:translate(75px,112px);
          }
          60.417% {
            transform:translate(75px,112px);
          }
          62.5% {
            transform:translate(75px,112px);
          }
          64.583% {
            transform:translate(75px,112px);
          }
          66.667% {
            transform:translate(75px,112px);
          }
          68.75% {
            transform:translate(75px,112px);
          }
          70.833% {
            transform:translate(75px,112px);
          }
          72.917% {
            transform:translate(75px,112px);
          }
          75% {
            transform:translate(75px,112px);
          }
          77.083% {
            transform:translate(75px,112px);
          }
          79.167% {
            transform:translate(75px,112px);
          }
          81.25% {
            transform:translate(75px,112px);
          }
          83.333% {
            transform:translate(75px,112px);
          }
          85.417% {
            transform:translate(75px,112px);
          }
          87.5% {
            transform:translate(75px,112px);
          }
          89.583% {
            transform:translate(75px,112px);
          }
          91.667% {
            transform:translate(75px,112px);
          }
          93.75% {
            transform:translate(75px,112px);
          }
          95.833% {
            transform:translate(75px,112px);
          }
          97.917% {
            transform:translate(75px,112px);
          }
          100% {
            transform:translate(75px,112px);
          }
        }
        @keyframes ask3 {
          0% {
            transform:translate(48px,66px);
          }
          2.083% {
            transform:translate(48px,66px);
          }
          4.167% {
            transform:translate(48px,66px);
          }
          6.25% {
            transform:translate(48px,66px);
          }
          8.333% {
            transform:translate(48px,66px);
          }
          10.417% {
            transform:translate(48px,66px);
          }
          12.5% {
            transform:translate(48px,66px);
          }
          14.583% {
            transform:translate(48px,66px);
          }
          16.667% {
            transform:translate(48px,66px);
          }
          18.75% {
            transform:translate(48px,66px);
          }
          20.833% {
            transform:translate(48px,66px);
          }
          22.917% {
            transform:translate(48px,66px);
          }
          25% {
            transform:translate(48px,66px);
          }
          27.083% {
            transform:translate(48px,66px);
          }
          29.167% {
            transform:translate(48px,66px);
          }
          31.25% {
            transform:translate(48px,66px);
          }
          33.333% {
            transform:translate(48px,66px);
          }
          35.417% {
            transform:translate(48px,66px);
          }
          37.5% {
            transform:translate(48px,66px);
          }
          39.583% {
            transform:translate(48px,66px);
          }
          41.667% {
            transform:translate(48px,66px);
          }
          43.75% {
            transform:translate(48px,66px);
          }
          45.833% {
            transform:translate(48px,66px);
          }
          47.917% {
            transform:translate(48px,66px);
          }
          50% {
            transform:translate(48px,66px);
          }
          52.083% {
            transform:translate(48px,66px);
          }
          54.167% {
            transform:translate(48px,66px);
          }
          56.25% {
            transform:translate(48px,66px);
          }
          58.333% {
            transform:translate(48px,66px);
          }
          60.417% {
            transform:translate(48px,66px);
          }
          62.5% {
            transform:translate(48px,66px);
          }
          64.583% {
            transform:translate(48px,66px);
          }
          66.667% {
            transform:translate(48px,66px);
          }
          68.75% {
            transform:translate(48px,71px);
          }
          70.833% {
            transform:translate(33.657px,77px);
          }
          72.917% {
            transform:translate(8.404px,77px);
          }
          75% {
            transform:translate(19.055px,91px);
            opacity:0;
          }
          77.083% {
            transform:translate(76.63px,91px);
            opacity:0;
          }
          79.167% {
            transform:translate(84px,112px);
          }
          81.25% {
            transform:translate(84px,112px);
          }
          83.333% {
            transform:translate(84px,112px);
          }
          85.417% {
            transform:translate(84px,112px);
          }
          87.5% {
            transform:translate(84px,112px);
          }
          89.583% {
            transform:translate(84px,112px);
          }
          91.667% {
            transform:translate(84px,112px);
          }
          93.75% {
            transform:translate(84px,112px);
          }
          95.833% {
            transform:translate(84px,112px);
          }
          97.917% {
            transform:translate(84px,112px);
          }
          100% {
            transform:translate(84px,112px);
          }
        }
        @keyframes ask4 {
          0% {
            transform:translate(59px,66px);
          }
          2.083% {
            transform:translate(59px,66px);
          }
          4.167% {
            transform:translate(59px,66px);
          }
          6.25% {
            transform:translate(59px,66px);
          }
          8.333% {
            transform:translate(59px,66px);
          }
          10.417% {
            transform:translate(59px,66px);
          }
          12.5% {
            transform:translate(59px,66px);
          }
          14.583% {
            transform:translate(59px,66px);
          }
          16.667% {
            transform:translate(59px,66px);
          }
          18.75% {
            transform:translate(59px,66px);
          }
          20.833% {
            transform:translate(59px,66px);
          }
          22.917% {
            transform:translate(59px,66px);
          }
          25% {
            transform:translate(59px,66px);
          }
          27.083% {
            transform:translate(59px,66px);
          }
          29.167% {
            transform:translate(59px,66px);
          }
          31.25% {
            transform:translate(59px,66px);
          }
          33.333% {
            transform:translate(59px,66px);
          }
          35.417% {
            transform:translate(59px,66px);
          }
          37.5% {
            transform:translate(59px,66px);
          }
          39.583% {
            transform:translate(59px,66px);
          }
          41.667% {
            transform:translate(59px,66px);
          }
          43.75% {
            transform:translate(59px,66px);
          }
          45.833% {
            transform:translate(59px,66px);
          }
          47.917% {
            transform:translate(59px,66px);
          }
          50% {
            transform:translate(59px,66px);
          }
          52.083% {
            transform:translate(59px,66px);
          }
          54.167% {
            transform:translate(59px,66px);
          }
          56.25% {
            transform:translate(59px,66px);
          }
          58.333% {
            transform:translate(59px,66px);
          }
          60.417% {
            transform:translate(59px,66px);
          }
          62.5% {
            transform:translate(59px,66px);
          }
          64.583% {
            transform:translate(59px,66px);
          }
          66.667% {
            transform:translate(59px,66px);
          }
          68.75% {
            transform:translate(59px,66px);
          }
          70.833% {
            transform:translate(59px,66px);
          }
          72.917% {
            transform:translate(59px,66px);
          }
          75% {
            transform:translate(59px,66px);
          }
          77.083% {
            transform:translate(59px,66px);
          }
          79.167% {
            transform:translate(59px,66px);
          }
          81.25% {
            transform:translate(59px,66px);
          }
          83.333% {
            transform:translate(59px,66px);
          }
          85.417% {
            transform:translate(59px,66px);
          }
          87.5% {
            transform:translate(59px,66px);
          }
          89.583% {
            transform:translate(59px,66px);
          }
          91.667% {
            transform:translate(59px,66px);
          }
          93.75% {
            transform:translate(59px,66px);
          }
          95.833% {
            transform:translate(59px,66px);
          }
          97.917% {
            transform:translate(59px,66px);
          }
          100% {
            transform:translate(59px,66px);
          }
        }
        @keyframes request0 {
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
            opacity:0.08;
          }
          27.083% {
            opacity:0.08;
          }
          29.167% {
            opacity:0.08;
          }
          31.25% {
            opacity:0.08;
          }
          33.333% {
            opacity:0.08;
          }
          35.417% {
            opacity:0.08;
          }
          37.5% {
            opacity:0.08;
          }
          39.583% {
            opacity:0.08;
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
        @keyframes request1 {
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
            opacity:0.08;
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
        @keyframes request2 {
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
        @keyframes request3 {
          0% {
            opacity:0.08;
          }
          2.083% {
            opacity:0.08;
          }
          4.167% {
            opacity:0.08;
          }
          6.25% {
            opacity:0.08;
          }
          8.333% {
            opacity:0.08;
          }
          10.417% {
            opacity:0.08;
          }
          12.5% {
            opacity:0.08;
          }
          14.583% {
            opacity:0.08;
          }
          16.667% {
            opacity:0.08;
          }
          18.75% {
            opacity:0.08;
          }
          20.833% {
            opacity:0.08;
          }
          22.917% {
            opacity:0.08;
          }
          25% {
            opacity:0.08;
          }
          27.083% {
            opacity:0.08;
          }
          29.167% {
            opacity:0.08;
          }
          31.25% {
            opacity:0.08;
          }
          33.333% {
            opacity:0.08;
          }
          35.417% {
            opacity:0.08;
          }
          37.5% {
            opacity:0.08;
          }
          39.583% {
            opacity:0.08;
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
        @keyframes price100 {
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
            opacity:0.156;
          }
          27.083% {
            opacity:0.867;
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
        @keyframes price101 {
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
            opacity:0.001;
          }
          79.167% {
            opacity:0.562;
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
        @keyframes bookEpisode {
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
          .ask0 {
            transform:translate(57px,112px);
          }
          .ask1 {
            transform:translate(66px,112px);
          }
          .ask2 {
            transform:translate(75px,112px);
          }
          .ask3 {
            transform:translate(19.055px,91px);
            opacity:0;
          }
          .ask4 {
            transform:translate(59px,66px);
          }
          .request0 {
            opacity:0.08;
          }
          .request1 {
            opacity:0.08;
          }
          .request2 {
            opacity:0.08;
          }
          .request3 {
            opacity:1;
          }
          .price100 {
            opacity:1;
          }
          .price101 {
            opacity:0;
          }
          .bookEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Order Book Matching">
        <g class="bookEpisode">
          <rect x="12" y="17" width="79" height="66" rx="3" fill="#193c36" stroke="#628e78"/>
          <text x="17" y="29" font-family="sans-serif" font-size="9" fill="#c9d6b9">ASK QUEUE</text>
          <text x="17" y="48" font-family="sans-serif" font-size="9" fill="#c9d6b9">100</text>
          <text x="17" y="70" font-family="sans-serif" font-size="9" fill="#c9d6b9">101</text>
          <rect x="97" y="33" width="29" height="43" rx="3" fill="#304c46" stroke="#99bbae"/>
          <text x="99" y="27" font-family="sans-serif" font-size="9" fill="#c9d6b9">BUY</text>
          <rect x="49" y="100" width="43" height="23" rx="3" fill="#334b3c" stroke="#c1b486"/>
          <text x="52" y="134" font-family="sans-serif" font-size="9" fill="#c9d6b9">FILLED</text>
          <rect x="-3" y="-4" width="6" height="8" class="ask0" fill="#d2b17a" stroke="#e6d5a6" stroke-width=".5"/>
          <rect x="-3" y="-4" width="6" height="8" class="ask1" fill="#d2b17a" stroke="#e6d5a6" stroke-width=".5"/>
          <rect x="-3" y="-4" width="6" height="8" class="ask2" fill="#b8bf84" stroke="#e6d5a6" stroke-width=".5"/>
          <rect x="-3" y="-4" width="6" height="8" class="ask3" fill="#d2b17a" stroke="#e6d5a6" stroke-width=".5"/>
          <rect x="-3" y="-4" width="6" height="8" class="ask4" fill="#d2b17a" stroke="#e6d5a6" stroke-width=".5"/>
          <rect x="103" y="40" width="15" height="5" class="request0" fill="#8cbfc9"/>
          <rect x="103" y="49" width="15" height="5" class="request1" fill="#8cbfc9"/>
          <rect x="103" y="58" width="15" height="5" class="request2" fill="#8cbfc9"/>
          <rect x="103" y="67" width="15" height="5" class="request3" fill="#8cbfc9"/>
          <g class="price100">
            <text x="18" y="112" font-family="sans-serif" font-size="9" fill="#c9d6b9">100</text>
          </g>
          <g class="price101">
            <text x="101" y="112" font-family="sans-serif" font-size="9" fill="#c9d6b9">101</text>
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

if (!customElements.get("concept-order-book-matching")) {
  customElements.define("concept-order-book-matching", ConceptOrderBookMatching);
}
