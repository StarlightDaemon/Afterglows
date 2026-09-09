// Bank Run. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBankRun extends HTMLElement {
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
        .cash0 {
          animation:cash0 16s linear infinite;
        }
        .cash1 {
          animation:cash1 16s linear infinite;
        }
        .asset0 {
          animation:asset0 16s linear infinite;
        }
        .liquidated0 {
          animation:liquidated0 16s linear infinite;
        }
        .liquidated0 {
          animation:liquidated0 16s linear infinite;
        }
        .asset1 {
          animation:asset1 16s linear infinite;
        }
        .liquidated1 {
          animation:liquidated1 16s linear infinite;
        }
        .liquidated1 {
          animation:liquidated1 16s linear infinite;
        }
        .asset2 {
          animation:asset2 16s linear infinite;
        }
        .liquidated2 {
          animation:liquidated2 16s linear infinite;
        }
        .liquidated2 {
          animation:liquidated2 16s linear infinite;
        }
        .asset3 {
          animation:asset3 16s linear infinite;
        }
        .liquidated3 {
          animation:liquidated3 16s linear infinite;
        }
        .liquidated3 {
          animation:liquidated3 16s linear infinite;
        }
        .runEpisode {
          animation:runEpisode 16s linear infinite;
        }
        @keyframes cash0 {
          0% {
            transform:translate(35px,94px);
          }
          2.083% {
            transform:translate(35px,94px);
          }
          4.167% {
            transform:translate(35px,94px);
          }
          6.25% {
            transform:translate(35px,94px);
          }
          8.333% {
            transform:translate(35.228px,93.772px);
          }
          10.417% {
            transform:translate(45.289px,83.711px);
          }
          12.5% {
            transform:translate(64.767px,64.233px);
            opacity:0;
          }
          14.583% {
            transform:translate(86.069px,42.931px);
            opacity:0;
          }
          16.667% {
            transform:translate(101.599px,27.401px);
          }
          18.75% {
            transform:translate(105px,24px);
          }
          20.833% {
            transform:translate(105px,24px);
          }
          22.917% {
            transform:translate(105px,24px);
          }
          25% {
            transform:translate(105px,24px);
          }
          27.083% {
            transform:translate(105px,24px);
          }
          29.167% {
            transform:translate(105px,24px);
          }
          31.25% {
            transform:translate(105px,24px);
          }
          33.333% {
            transform:translate(105px,24px);
          }
          35.417% {
            transform:translate(105px,24px);
          }
          37.5% {
            transform:translate(105px,24px);
          }
          39.583% {
            transform:translate(105px,24px);
          }
          41.667% {
            transform:translate(105px,24px);
          }
          43.75% {
            transform:translate(105px,24px);
          }
          45.833% {
            transform:translate(105px,24px);
          }
          47.917% {
            transform:translate(105px,24px);
          }
          50% {
            transform:translate(105px,24px);
          }
          52.083% {
            transform:translate(105px,24px);
          }
          54.167% {
            transform:translate(105px,24px);
          }
          56.25% {
            transform:translate(105px,24px);
          }
          58.333% {
            transform:translate(105px,24px);
          }
          60.417% {
            transform:translate(105px,24px);
          }
          62.5% {
            transform:translate(105px,24px);
          }
          64.583% {
            transform:translate(105px,24px);
          }
          66.667% {
            transform:translate(105px,24px);
          }
          68.75% {
            transform:translate(105px,24px);
          }
          70.833% {
            transform:translate(105px,24px);
          }
          72.917% {
            transform:translate(105px,24px);
          }
          75% {
            transform:translate(105px,24px);
          }
          77.083% {
            transform:translate(105px,24px);
          }
          79.167% {
            transform:translate(105px,24px);
          }
          81.25% {
            transform:translate(105px,24px);
          }
          83.333% {
            transform:translate(105px,24px);
          }
          85.417% {
            transform:translate(105px,24px);
          }
          87.5% {
            transform:translate(105px,24px);
          }
          89.583% {
            transform:translate(105px,24px);
          }
          91.667% {
            transform:translate(105px,24px);
          }
          93.75% {
            transform:translate(105px,24px);
          }
          95.833% {
            transform:translate(105px,24px);
          }
          97.917% {
            transform:translate(105px,24px);
          }
          100% {
            transform:translate(105px,24px);
          }
        }
        @keyframes cash1 {
          0% {
            transform:translate(58px,94px);
          }
          2.083% {
            transform:translate(58px,94px);
          }
          4.167% {
            transform:translate(58px,94px);
          }
          6.25% {
            transform:translate(58px,94px);
          }
          8.333% {
            transform:translate(58px,94px);
          }
          10.417% {
            transform:translate(58px,94px);
          }
          12.5% {
            transform:translate(58px,94px);
          }
          14.583% {
            transform:translate(58px,94px);
          }
          16.667% {
            transform:translate(58px,94px);
          }
          18.75% {
            transform:translate(58px,94px);
          }
          20.833% {
            transform:translate(58.925px,92.997px);
          }
          22.917% {
            transform:translate(67.662px,83.515px);
          }
          25% {
            transform:translate(81.5px,68.5px);
          }
          27.083% {
            transform:translate(95.338px,53.485px);
          }
          29.167% {
            transform:translate(104.075px,44.003px);
          }
          31.25% {
            transform:translate(105px,43px);
          }
          33.333% {
            transform:translate(105px,43px);
          }
          35.417% {
            transform:translate(105px,43px);
          }
          37.5% {
            transform:translate(105px,43px);
          }
          39.583% {
            transform:translate(105px,43px);
          }
          41.667% {
            transform:translate(105px,43px);
          }
          43.75% {
            transform:translate(105px,43px);
          }
          45.833% {
            transform:translate(105px,43px);
          }
          47.917% {
            transform:translate(105px,43px);
          }
          50% {
            transform:translate(105px,43px);
          }
          52.083% {
            transform:translate(105px,43px);
          }
          54.167% {
            transform:translate(105px,43px);
          }
          56.25% {
            transform:translate(105px,43px);
          }
          58.333% {
            transform:translate(105px,43px);
          }
          60.417% {
            transform:translate(105px,43px);
          }
          62.5% {
            transform:translate(105px,43px);
          }
          64.583% {
            transform:translate(105px,43px);
          }
          66.667% {
            transform:translate(105px,43px);
          }
          68.75% {
            transform:translate(105px,43px);
          }
          70.833% {
            transform:translate(105px,43px);
          }
          72.917% {
            transform:translate(105px,43px);
          }
          75% {
            transform:translate(105px,43px);
          }
          77.083% {
            transform:translate(105px,43px);
          }
          79.167% {
            transform:translate(105px,43px);
          }
          81.25% {
            transform:translate(105px,43px);
          }
          83.333% {
            transform:translate(105px,43px);
          }
          85.417% {
            transform:translate(105px,43px);
          }
          87.5% {
            transform:translate(105px,43px);
          }
          89.583% {
            transform:translate(105px,43px);
          }
          91.667% {
            transform:translate(105px,43px);
          }
          93.75% {
            transform:translate(105px,43px);
          }
          95.833% {
            transform:translate(105px,43px);
          }
          97.917% {
            transform:translate(105px,43px);
          }
          100% {
            transform:translate(105px,43px);
          }
        }
        @keyframes asset0 {
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
            opacity:0.684;
          }
          39.583% {
            opacity:0.03;
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
        @keyframes liquidated0 {
          0% {
            transform:translate(34px,44px);
            opacity:0;
          }
          2.083% {
            transform:translate(34px,44px);
            opacity:0;
          }
          4.167% {
            transform:translate(34px,44px);
            opacity:0;
          }
          6.25% {
            transform:translate(34px,44px);
            opacity:0;
          }
          8.333% {
            transform:translate(34px,44px);
            opacity:0;
          }
          10.417% {
            transform:translate(34px,44px);
            opacity:0;
          }
          12.5% {
            transform:translate(34px,44px);
            opacity:0;
          }
          14.583% {
            transform:translate(34px,44px);
            opacity:0;
          }
          16.667% {
            transform:translate(34px,44px);
            opacity:0;
          }
          18.75% {
            transform:translate(34px,44px);
            opacity:0;
          }
          20.833% {
            transform:translate(34px,44px);
            opacity:0;
          }
          22.917% {
            transform:translate(34px,44px);
            opacity:0;
          }
          25% {
            transform:translate(34px,44px);
            opacity:0;
          }
          27.083% {
            transform:translate(34px,44px);
            opacity:0;
          }
          29.167% {
            transform:translate(34px,44px);
            opacity:0;
          }
          31.25% {
            transform:translate(34px,44px);
            opacity:0;
          }
          33.333% {
            transform:translate(34px,44px);
            opacity:0;
          }
          35.417% {
            transform:translate(34px,44px);
            opacity:0;
          }
          37.5% {
            transform:translate(35.988px,44.504px);
            opacity:0.316;
          }
          39.583% {
            transform:translate(44.22px,46.591px);
            opacity:0.97;
          }
          41.667% {
            transform:translate(56.743px,49.766px);
            opacity:1;
          }
          43.75% {
            transform:translate(71.274px,53.45px);
            opacity:1;
          }
          45.833% {
            transform:translate(85.532px,57.064px);
            opacity:1;
          }
          47.917% {
            transform:translate(97.233px,60.031px);
            opacity:1;
          }
          50% {
            transform:translate(104.095px,61.771px);
            opacity:1;
          }
          52.083% {
            transform:translate(105px,62px);
            opacity:1;
          }
          54.167% {
            transform:translate(105px,62px);
            opacity:1;
          }
          56.25% {
            transform:translate(105px,62px);
            opacity:1;
          }
          58.333% {
            transform:translate(105px,62px);
            opacity:1;
          }
          60.417% {
            transform:translate(105px,62px);
            opacity:1;
          }
          62.5% {
            transform:translate(105px,62px);
            opacity:1;
          }
          64.583% {
            transform:translate(105px,62px);
            opacity:1;
          }
          66.667% {
            transform:translate(105px,62px);
            opacity:1;
          }
          68.75% {
            transform:translate(105px,62px);
            opacity:1;
          }
          70.833% {
            transform:translate(105px,62px);
            opacity:1;
          }
          72.917% {
            transform:translate(105px,62px);
            opacity:1;
          }
          75% {
            transform:translate(105px,62px);
            opacity:1;
          }
          77.083% {
            transform:translate(105px,62px);
            opacity:1;
          }
          79.167% {
            transform:translate(105px,62px);
            opacity:1;
          }
          81.25% {
            transform:translate(105px,62px);
            opacity:1;
          }
          83.333% {
            transform:translate(105px,62px);
            opacity:1;
          }
          85.417% {
            transform:translate(105px,62px);
            opacity:1;
          }
          87.5% {
            transform:translate(105px,62px);
            opacity:1;
          }
          89.583% {
            transform:translate(105px,62px);
            opacity:1;
          }
          91.667% {
            transform:translate(105px,62px);
            opacity:1;
          }
          93.75% {
            transform:translate(105px,62px);
            opacity:1;
          }
          95.833% {
            transform:translate(105px,62px);
            opacity:1;
          }
          97.917% {
            transform:translate(105px,62px);
            opacity:1;
          }
          100% {
            transform:translate(105px,62px);
            opacity:1;
          }
        }
        @keyframes asset1 {
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
            opacity:0.531;
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
        @keyframes liquidated1 {
          0% {
            transform:translate(58px,44px);
            opacity:0;
          }
          2.083% {
            transform:translate(58px,44px);
            opacity:0;
          }
          4.167% {
            transform:translate(58px,44px);
            opacity:0;
          }
          6.25% {
            transform:translate(58px,44px);
            opacity:0;
          }
          8.333% {
            transform:translate(58px,44px);
            opacity:0;
          }
          10.417% {
            transform:translate(58px,44px);
            opacity:0;
          }
          12.5% {
            transform:translate(58px,44px);
            opacity:0;
          }
          14.583% {
            transform:translate(58px,44px);
            opacity:0;
          }
          16.667% {
            transform:translate(58px,44px);
            opacity:0;
          }
          18.75% {
            transform:translate(58px,44px);
            opacity:0;
          }
          20.833% {
            transform:translate(58px,44px);
            opacity:0;
          }
          22.917% {
            transform:translate(58px,44px);
            opacity:0;
          }
          25% {
            transform:translate(58px,44px);
            opacity:0;
          }
          27.083% {
            transform:translate(58px,44px);
            opacity:0;
          }
          29.167% {
            transform:translate(58px,44px);
            opacity:0;
          }
          31.25% {
            transform:translate(58px,44px);
            opacity:0;
          }
          33.333% {
            transform:translate(58px,44px);
            opacity:0;
          }
          35.417% {
            transform:translate(58px,44px);
            opacity:0;
          }
          37.5% {
            transform:translate(58px,44px);
            opacity:0;
          }
          39.583% {
            transform:translate(58px,44px);
            opacity:0;
          }
          41.667% {
            transform:translate(58px,44px);
            opacity:0;
          }
          43.75% {
            transform:translate(58px,44px);
            opacity:0;
          }
          45.833% {
            transform:translate(58px,44px);
            opacity:0;
          }
          47.917% {
            transform:translate(60.106px,44.807px);
            opacity:0.469;
          }
          50% {
            transform:translate(66.244px,47.157px);
            opacity:1;
          }
          52.083% {
            transform:translate(74.921px,50.48px);
            opacity:1;
          }
          54.167% {
            transform:translate(84.625px,54.197px);
            opacity:1;
          }
          56.25% {
            transform:translate(93.846px,57.728px);
            opacity:1;
          }
          58.333% {
            transform:translate(101.072px,60.496px);
            opacity:1;
          }
          60.417% {
            transform:translate(104.792px,61.92px);
            opacity:1;
          }
          62.5% {
            transform:translate(105px,62px);
            opacity:1;
          }
          64.583% {
            transform:translate(105px,62px);
            opacity:1;
          }
          66.667% {
            transform:translate(105px,62px);
            opacity:1;
          }
          68.75% {
            transform:translate(105px,62px);
            opacity:1;
          }
          70.833% {
            transform:translate(105px,62px);
            opacity:1;
          }
          72.917% {
            transform:translate(105px,62px);
            opacity:1;
          }
          75% {
            transform:translate(105px,62px);
            opacity:1;
          }
          77.083% {
            transform:translate(105px,62px);
            opacity:1;
          }
          79.167% {
            transform:translate(105px,62px);
            opacity:1;
          }
          81.25% {
            transform:translate(105px,62px);
            opacity:1;
          }
          83.333% {
            transform:translate(105px,62px);
            opacity:1;
          }
          85.417% {
            transform:translate(105px,62px);
            opacity:1;
          }
          87.5% {
            transform:translate(105px,62px);
            opacity:1;
          }
          89.583% {
            transform:translate(105px,62px);
            opacity:1;
          }
          91.667% {
            transform:translate(105px,62px);
            opacity:1;
          }
          93.75% {
            transform:translate(105px,62px);
            opacity:1;
          }
          95.833% {
            transform:translate(105px,62px);
            opacity:1;
          }
          97.917% {
            transform:translate(105px,62px);
            opacity:1;
          }
          100% {
            transform:translate(105px,62px);
            opacity:1;
          }
        }
        @keyframes asset2 {
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
            opacity:0.989;
          }
          58.333% {
            opacity:0.376;
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
        @keyframes liquidated2 {
          0% {
            transform:translate(34px,66px);
            opacity:0;
          }
          2.083% {
            transform:translate(34px,66px);
            opacity:0;
          }
          4.167% {
            transform:translate(34px,66px);
            opacity:0;
          }
          6.25% {
            transform:translate(34px,66px);
            opacity:0;
          }
          8.333% {
            transform:translate(34px,66px);
            opacity:0;
          }
          10.417% {
            transform:translate(34px,66px);
            opacity:0;
          }
          12.5% {
            transform:translate(34px,66px);
            opacity:0;
          }
          14.583% {
            transform:translate(34px,66px);
            opacity:0;
          }
          16.667% {
            transform:translate(34px,66px);
            opacity:0;
          }
          18.75% {
            transform:translate(34px,66px);
            opacity:0;
          }
          20.833% {
            transform:translate(34px,66px);
            opacity:0;
          }
          22.917% {
            transform:translate(34px,66px);
            opacity:0;
          }
          25% {
            transform:translate(34px,66px);
            opacity:0;
          }
          27.083% {
            transform:translate(34px,66px);
            opacity:0;
          }
          29.167% {
            transform:translate(34px,66px);
            opacity:0;
          }
          31.25% {
            transform:translate(34px,66px);
            opacity:0;
          }
          33.333% {
            transform:translate(34px,66px);
            opacity:0;
          }
          35.417% {
            transform:translate(34px,66px);
            opacity:0;
          }
          37.5% {
            transform:translate(34px,66px);
            opacity:0;
          }
          39.583% {
            transform:translate(34px,66px);
            opacity:0;
          }
          41.667% {
            transform:translate(34px,66px);
            opacity:0;
          }
          43.75% {
            transform:translate(34px,66px);
            opacity:0;
          }
          45.833% {
            transform:translate(34px,66px);
            opacity:0;
          }
          47.917% {
            transform:translate(34px,66px);
            opacity:0;
          }
          50% {
            transform:translate(34px,66px);
            opacity:0;
          }
          52.083% {
            transform:translate(34px,66px);
            opacity:0;
          }
          54.167% {
            transform:translate(34px,66px);
            opacity:0;
          }
          56.25% {
            transform:translate(34.059px,66.012px);
            opacity:0.011;
          }
          58.333% {
            transform:translate(38.62px,66.976px);
            opacity:0.624;
          }
          60.417% {
            transform:translate(48.842px,69.136px);
            opacity:1;
          }
          62.5% {
            transform:translate(62.442px,72.009px);
            opacity:1;
          }
          64.583% {
            transform:translate(77.138px,75.114px);
            opacity:1;
          }
          66.667% {
            transform:translate(90.647px,77.968px);
            opacity:1;
          }
          68.75% {
            transform:translate(100.687px,80.089px);
            opacity:1;
          }
          70.833% {
            transform:translate(104.974px,80.994px);
            opacity:1;
          }
          72.917% {
            transform:translate(105px,81px);
            opacity:1;
          }
          75% {
            transform:translate(105px,81px);
            opacity:1;
          }
          77.083% {
            transform:translate(105px,81px);
            opacity:1;
          }
          79.167% {
            transform:translate(105px,81px);
            opacity:1;
          }
          81.25% {
            transform:translate(105px,81px);
            opacity:1;
          }
          83.333% {
            transform:translate(105px,81px);
            opacity:1;
          }
          85.417% {
            transform:translate(105px,81px);
            opacity:1;
          }
          87.5% {
            transform:translate(105px,81px);
            opacity:1;
          }
          89.583% {
            transform:translate(105px,81px);
            opacity:1;
          }
          91.667% {
            transform:translate(105px,81px);
            opacity:1;
          }
          93.75% {
            transform:translate(105px,81px);
            opacity:1;
          }
          95.833% {
            transform:translate(105px,81px);
            opacity:1;
          }
          97.917% {
            transform:translate(105px,81px);
            opacity:1;
          }
          100% {
            transform:translate(105px,81px);
            opacity:1;
          }
        }
        @keyframes asset3 {
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
            opacity:0.926;
          }
          68.75% {
            opacity:0.232;
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
        @keyframes liquidated3 {
          0% {
            transform:translate(58px,66px);
            opacity:0;
          }
          2.083% {
            transform:translate(58px,66px);
            opacity:0;
          }
          4.167% {
            transform:translate(58px,66px);
            opacity:0;
          }
          6.25% {
            transform:translate(58px,66px);
            opacity:0;
          }
          8.333% {
            transform:translate(58px,66px);
            opacity:0;
          }
          10.417% {
            transform:translate(58px,66px);
            opacity:0;
          }
          12.5% {
            transform:translate(58px,66px);
            opacity:0;
          }
          14.583% {
            transform:translate(58px,66px);
            opacity:0;
          }
          16.667% {
            transform:translate(58px,66px);
            opacity:0;
          }
          18.75% {
            transform:translate(58px,66px);
            opacity:0;
          }
          20.833% {
            transform:translate(58px,66px);
            opacity:0;
          }
          22.917% {
            transform:translate(58px,66px);
            opacity:0;
          }
          25% {
            transform:translate(58px,66px);
            opacity:0;
          }
          27.083% {
            transform:translate(58px,66px);
            opacity:0;
          }
          29.167% {
            transform:translate(58px,66px);
            opacity:0;
          }
          31.25% {
            transform:translate(58px,66px);
            opacity:0;
          }
          33.333% {
            transform:translate(58px,66px);
            opacity:0;
          }
          35.417% {
            transform:translate(58px,66px);
            opacity:0;
          }
          37.5% {
            transform:translate(58px,66px);
            opacity:0;
          }
          39.583% {
            transform:translate(58px,66px);
            opacity:0;
          }
          41.667% {
            transform:translate(58px,66px);
            opacity:0;
          }
          43.75% {
            transform:translate(58px,66px);
            opacity:0;
          }
          45.833% {
            transform:translate(58px,66px);
            opacity:0;
          }
          47.917% {
            transform:translate(58px,66px);
            opacity:0;
          }
          50% {
            transform:translate(58px,66px);
            opacity:0;
          }
          52.083% {
            transform:translate(58px,66px);
            opacity:0;
          }
          54.167% {
            transform:translate(58px,66px);
            opacity:0;
          }
          56.25% {
            transform:translate(58px,66px);
            opacity:0;
          }
          58.333% {
            transform:translate(58px,66px);
            opacity:0;
          }
          60.417% {
            transform:translate(58px,66px);
            opacity:0;
          }
          62.5% {
            transform:translate(58px,66px);
            opacity:0;
          }
          64.583% {
            transform:translate(58px,66px);
            opacity:0;
          }
          66.667% {
            transform:translate(58.27px,66.086px);
            opacity:0.074;
          }
          68.75% {
            transform:translate(62.16px,67.328px);
            opacity:0.768;
          }
          70.833% {
            transform:translate(69.495px,69.669px);
            opacity:1;
          }
          72.917% {
            transform:translate(78.764px,72.627px);
            opacity:1;
          }
          75% {
            transform:translate(88.456px,75.72px);
            opacity:1;
          }
          77.083% {
            transform:translate(97.06px,78.466px);
            opacity:1;
          }
          79.167% {
            transform:translate(103.065px,80.383px);
            opacity:1;
          }
          81.25% {
            transform:translate(105px,81px);
            opacity:1;
          }
          83.333% {
            transform:translate(105px,81px);
            opacity:1;
          }
          85.417% {
            transform:translate(105px,81px);
            opacity:1;
          }
          87.5% {
            transform:translate(105px,81px);
            opacity:1;
          }
          89.583% {
            transform:translate(105px,81px);
            opacity:1;
          }
          91.667% {
            transform:translate(105px,81px);
            opacity:1;
          }
          93.75% {
            transform:translate(105px,81px);
            opacity:1;
          }
          95.833% {
            transform:translate(105px,81px);
            opacity:1;
          }
          97.917% {
            transform:translate(105px,81px);
            opacity:1;
          }
          100% {
            transform:translate(105px,81px);
            opacity:1;
          }
        }
        @keyframes runEpisode {
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
            opacity:0.531;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .cash0 {
            transform:translate(105px,24px);
          }
          .cash1 {
            transform:translate(105px,43px);
          }
          .asset0 {
            opacity:0;
          }
          .liquidated0 {
            transform:translate(105px,62px);
            opacity:1;
          }
          .asset1 {
            opacity:0;
          }
          .liquidated1 {
            transform:translate(105px,62px);
            opacity:1;
          }
          .asset2 {
            opacity:0;
          }
          .liquidated2 {
            transform:translate(105px,81px);
            opacity:1;
          }
          .asset3 {
            opacity:0;
          }
          .liquidated3 {
            transform:translate(88.456px,75.72px);
            opacity:1;
          }
          .runEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bank Run">
        <g class="runEpisode">
          <path d="M9 29L48 12 87 29Z" fill="#a9b897"/>
          <rect x="12" y="30" width="73" height="86" fill="#2b4435" stroke="#98ad8b"/>
          <rect x="17" y="33" width="6" height="73" fill="#718b70"/>
          <rect x="44" y="33" width="6" height="73" fill="#718b70"/>
          <rect x="71" y="33" width="6" height="73" fill="#718b70"/>
          <rect x="26" y="80" width="43" height="28" rx="3" fill="#17372d" stroke="#b5bb90"/>
          <circle cx="47" cy="94" r="7" fill="none" stroke="#738e76"/>
          <circle cx="119" cy="18" r="3" fill="#aac3ae"/>
          <path d="M114 28Q114 22 119 22Q124 22 124 28Z" fill="#aac3ae"/>
          <circle cx="105" cy="24" r="4" fill="none" stroke="#768f75"/>
          <circle cx="119" cy="37" r="3" fill="#aac3ae"/>
          <path d="M114 47Q114 41 119 41Q124 41 124 47Z" fill="#aac3ae"/>
          <circle cx="105" cy="43" r="4" fill="none" stroke="#768f75"/>
          <circle cx="119" cy="56" r="3" fill="#aac3ae"/>
          <path d="M114 66Q114 60 119 60Q124 60 124 66Z" fill="#aac3ae"/>
          <circle cx="105" cy="62" r="4" fill="none" stroke="#768f75"/>
          <circle cx="119" cy="75" r="3" fill="#aac3ae"/>
          <path d="M114 85Q114 79 119 79Q124 79 124 85Z" fill="#aac3ae"/>
          <circle cx="105" cy="81" r="4" fill="none" stroke="#768f75"/>
          <circle cx="119" cy="94" r="3" fill="#cdad84"/>
          <path d="M114 104Q114 98 119 98Q124 98 124 104Z" fill="#cdad84"/>
          <circle cx="105" cy="100" r="4" fill="none" stroke="#768f75"/>
          <circle cx="119" cy="113" r="3" fill="#cdad84"/>
          <path d="M114 123Q114 117 119 117Q124 117 124 123Z" fill="#cdad84"/>
          <circle cx="105" cy="119" r="4" fill="none" stroke="#768f75"/>
          <circle cx="0" cy="0" r="3.7" class="cash0" fill="#dbc47e"/>
          <circle cx="0" cy="0" r="3.7" class="cash1" fill="#dbc47e"/>
          <g class="asset0">
            <rect x="29" y="38" width="10" height="14" fill="#96b2a0"/>
            <circle cx="34" cy="44" r="3" fill="none" stroke="#365b48"/>
            <path d="M34 42v2h2" fill="none" stroke="#365b48"/>
          </g>
          <path d="M0 -3.7A3.7 3.7 0 0 0 0 3.7Z" class="liquidated0" fill="#dbc47e"/>
          <g class="asset1">
            <rect x="53" y="38" width="10" height="14" fill="#96b2a0"/>
            <circle cx="58" cy="44" r="3" fill="none" stroke="#365b48"/>
            <path d="M58 42v2h2" fill="none" stroke="#365b48"/>
          </g>
          <path d="M0 -3.7A3.7 3.7 0 0 1 0 3.7Z" class="liquidated1" fill="#dbc47e"/>
          <g class="asset2">
            <rect x="29" y="60" width="10" height="14" fill="#96b2a0"/>
            <circle cx="34" cy="66" r="3" fill="none" stroke="#365b48"/>
            <path d="M34 64v2h2" fill="none" stroke="#365b48"/>
          </g>
          <path d="M0 -3.7A3.7 3.7 0 0 0 0 3.7Z" class="liquidated2" fill="#dbc47e"/>
          <g class="asset3">
            <rect x="53" y="60" width="10" height="14" fill="#96b2a0"/>
            <circle cx="58" cy="66" r="3" fill="none" stroke="#365b48"/>
            <path d="M58 64v2h2" fill="none" stroke="#365b48"/>
          </g>
          <path d="M0 -3.7A3.7 3.7 0 0 1 0 3.7Z" class="liquidated3" fill="#dbc47e"/>
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

if (!customElements.get("concept-bank-run")) {
  customElements.define("concept-bank-run", ConceptBankRun);
}
