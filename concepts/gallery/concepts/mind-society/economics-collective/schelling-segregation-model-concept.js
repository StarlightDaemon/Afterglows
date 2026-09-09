// Schelling Segregation Model. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSchellingSegregationModel extends HTMLElement {
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
        .household0 {
          animation:household0 16s linear infinite;
        }
        .household0 {
          animation:household0 16s linear infinite;
        }
        .household1 {
          animation:household1 16s linear infinite;
        }
        .household1 {
          animation:household1 16s linear infinite;
        }
        .household2 {
          animation:household2 16s linear infinite;
        }
        .household2 {
          animation:household2 16s linear infinite;
        }
        .household3 {
          animation:household3 16s linear infinite;
        }
        .household3 {
          animation:household3 16s linear infinite;
        }
        .household4 {
          animation:household4 16s linear infinite;
        }
        .household4 {
          animation:household4 16s linear infinite;
        }
        .household5 {
          animation:household5 16s linear infinite;
        }
        .household5 {
          animation:household5 16s linear infinite;
        }
        .household6 {
          animation:household6 16s linear infinite;
        }
        .household6 {
          animation:household6 16s linear infinite;
        }
        .household7 {
          animation:household7 16s linear infinite;
        }
        .household7 {
          animation:household7 16s linear infinite;
        }
        .household8 {
          animation:household8 16s linear infinite;
        }
        .household8 {
          animation:household8 16s linear infinite;
        }
        .household9 {
          animation:household9 16s linear infinite;
        }
        .household9 {
          animation:household9 16s linear infinite;
        }
        .household10 {
          animation:household10 16s linear infinite;
        }
        .household10 {
          animation:household10 16s linear infinite;
        }
        .household11 {
          animation:household11 16s linear infinite;
        }
        .household11 {
          animation:household11 16s linear infinite;
        }
        .household12 {
          animation:household12 16s linear infinite;
        }
        .household12 {
          animation:household12 16s linear infinite;
        }
        .household13 {
          animation:household13 16s linear infinite;
        }
        .household13 {
          animation:household13 16s linear infinite;
        }
        .household14 {
          animation:household14 16s linear infinite;
        }
        .household14 {
          animation:household14 16s linear infinite;
        }
        .household15 {
          animation:household15 16s linear infinite;
        }
        .household15 {
          animation:household15 16s linear infinite;
        }
        .household16 {
          animation:household16 16s linear infinite;
        }
        .household16 {
          animation:household16 16s linear infinite;
        }
        .household17 {
          animation:household17 16s linear infinite;
        }
        .household17 {
          animation:household17 16s linear infinite;
        }
        .household18 {
          animation:household18 16s linear infinite;
        }
        .household18 {
          animation:household18 16s linear infinite;
        }
        .household19 {
          animation:household19 16s linear infinite;
        }
        .household19 {
          animation:household19 16s linear infinite;
        }
        .household20 {
          animation:household20 16s linear infinite;
        }
        .household20 {
          animation:household20 16s linear infinite;
        }
        .household21 {
          animation:household21 16s linear infinite;
        }
        .household21 {
          animation:household21 16s linear infinite;
        }
        .household22 {
          animation:household22 16s linear infinite;
        }
        .household22 {
          animation:household22 16s linear infinite;
        }
        .household23 {
          animation:household23 16s linear infinite;
        }
        .household23 {
          animation:household23 16s linear infinite;
        }
        .household24 {
          animation:household24 16s linear infinite;
        }
        .household24 {
          animation:household24 16s linear infinite;
        }
        .household25 {
          animation:household25 16s linear infinite;
        }
        .household25 {
          animation:household25 16s linear infinite;
        }
        .household26 {
          animation:household26 16s linear infinite;
        }
        .household26 {
          animation:household26 16s linear infinite;
        }
        .household27 {
          animation:household27 16s linear infinite;
        }
        .household27 {
          animation:household27 16s linear infinite;
        }
        .destination {
          animation:destination 16s linear infinite;
        }
        .destination {
          animation:destination 16s linear infinite;
        }
        .segregationEpisode {
          animation:segregationEpisode 16s linear infinite;
        }
        @keyframes household0 {
          0% {
            transform:translate(80px,100px);
            opacity:1;
          }
          0.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          0.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          1.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          1.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          2.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          2.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          2.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          3.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          3.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          4.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          4.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          5.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          5.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          6.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          6.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          7.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          7.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          7.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          8.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          8.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          9.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          9.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          10% {
            transform:translate(80px,100px);
            opacity:1;
          }
          10.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          10.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          11.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          11.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          12.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          12.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          12.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          13.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          13.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          14.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          14.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          15% {
            transform:translate(80px,100px);
            opacity:1;
          }
          15.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          15.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          16.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          16.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          17.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          17.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          17.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          18.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          18.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          19.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          19.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          20% {
            transform:translate(80px,100px);
            opacity:1;
          }
          20.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          20.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          21.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          21.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          22.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          22.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          22.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          23.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          23.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          24.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          24.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          25.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          25.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          26.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          26.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          27.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          27.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          27.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          28.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          28.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          29.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          29.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          30% {
            transform:translate(80px,100px);
            opacity:1;
          }
          30.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          30.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          31.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          31.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          32.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          32.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          32.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          33.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          33.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          34.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          34.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          35% {
            transform:translate(80px,100px);
            opacity:1;
          }
          35.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          35.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          36.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          36.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          37.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          37.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          37.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          38.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          38.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          39.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          39.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          40% {
            transform:translate(80px,100px);
            opacity:1;
          }
          40.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          40.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          41.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          41.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          42.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          42.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          42.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          43.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          43.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          44.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          44.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          45% {
            transform:translate(80px,100px);
            opacity:1;
          }
          45.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          45.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          46.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          46.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          47.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          47.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          47.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          48.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          48.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          49.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          49.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          50% {
            transform:translate(80px,100px);
            opacity:1;
          }
          50.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          50.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          51.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          51.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          52.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          52.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          52.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          53.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          53.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          54.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          54.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          55% {
            transform:translate(80px,100px);
            opacity:1;
          }
          55.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          55.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          56.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          56.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          57.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          57.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          57.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          58.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          58.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          59.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          59.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          60% {
            transform:translate(80px,100px);
            opacity:1;
          }
          60.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          60.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          61.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          61.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          62.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          62.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          62.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          63.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          63.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          64.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          64.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          65% {
            transform:translate(80px,100px);
            opacity:1;
          }
          65.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          65.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          66.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          66.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          67.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          67.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          67.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          68.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          68.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          69.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          69.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          70% {
            transform:translate(80px,100px);
            opacity:1;
          }
          70.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          70.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          71.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          71.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          72.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          72.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          72.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          73.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          73.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          74.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          74.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          75.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          75.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          76.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          76.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          77.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          77.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          77.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          78.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          78.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          79.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          79.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          80% {
            transform:translate(80px,100px);
            opacity:1;
          }
          80.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          80.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          81.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          82.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          82.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          82.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          83.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          84.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          84.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          85% {
            transform:translate(80px,100px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          85.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          86.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          86.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          87.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          87.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          88.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          88.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          89.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          90% {
            transform:translate(80px,100px);
            opacity:1;
          }
          90.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          90.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          91.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          92.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          92.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          92.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          93.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          94.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          94.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          95% {
            transform:translate(80px,100px);
            opacity:1;
          }
          95.417% {
            transform:translate(80px,100px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,100px);
            opacity:1;
          }
          96.25% {
            transform:translate(80px,100px);
            opacity:1;
          }
          96.667% {
            transform:translate(80px,100px);
            opacity:1;
          }
          97.083% {
            transform:translate(80px,100px);
            opacity:1;
          }
          97.5% {
            transform:translate(80px,100px);
            opacity:1;
          }
          97.917% {
            transform:translate(80px,100px);
            opacity:1;
          }
          98.333% {
            transform:translate(80px,100px);
            opacity:1;
          }
          98.75% {
            transform:translate(80px,100px);
            opacity:1;
          }
          99.167% {
            transform:translate(80px,100px);
            opacity:1;
          }
          99.583% {
            transform:translate(80px,100px);
            opacity:1;
          }
          100% {
            transform:translate(80px,100px);
            opacity:1;
          }
        }
        @keyframes household1 {
          0% {
            transform:translate(40px,120px);
            opacity:1;
          }
          0.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          0.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          1.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          1.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          2.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          2.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          2.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          3.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          3.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          4.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          4.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          5.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          5.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          6.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          6.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          7.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          7.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          7.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          8.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          8.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          9.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          9.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          10% {
            transform:translate(40px,120px);
            opacity:1;
          }
          10.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          10.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          11.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          11.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          12.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          12.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          12.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          13.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          13.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          14.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          14.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          15% {
            transform:translate(40px,120px);
            opacity:1;
          }
          15.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          15.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          16.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          16.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          17.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          17.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          17.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          18.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          18.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          19.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          19.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          20% {
            transform:translate(40px,120px);
            opacity:1;
          }
          20.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          20.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          21.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          21.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          22.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          22.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          22.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          23.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          23.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          24.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          24.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          25.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          25.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          26.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          26.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          27.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          27.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          27.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          28.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          28.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          29.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          29.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          30% {
            transform:translate(40px,120px);
            opacity:1;
          }
          30.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          30.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          31.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          31.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          32.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          32.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          32.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          33.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          33.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          34.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          34.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          35% {
            transform:translate(40px,120px);
            opacity:1;
          }
          35.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          35.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          36.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          36.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          37.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          37.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          37.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          38.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          38.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          39.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          39.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          40% {
            transform:translate(40px,120px);
            opacity:1;
          }
          40.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          40.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          41.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          41.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          42.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          42.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          42.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          43.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          43.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          44.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          44.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          45% {
            transform:translate(40px,120px);
            opacity:1;
          }
          45.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          45.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          46.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          46.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          47.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          47.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          47.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          48.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          48.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          49.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          49.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          50% {
            transform:translate(40px,120px);
            opacity:1;
          }
          50.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          50.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          51.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          51.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          52.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          52.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          52.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          53.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          53.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          54.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          54.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          55% {
            transform:translate(40px,120px);
            opacity:1;
          }
          55.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          55.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          56.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          56.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          57.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          57.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          57.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          58.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          58.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          59.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          59.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          60% {
            transform:translate(40px,120px);
            opacity:1;
          }
          60.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          60.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          61.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          61.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          62.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          62.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          62.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          63.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          63.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          64.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          64.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          65% {
            transform:translate(40px,120px);
            opacity:1;
          }
          65.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          65.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          66.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          66.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          67.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          67.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          67.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          68.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          68.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          69.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          69.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          70% {
            transform:translate(40px,120px);
            opacity:1;
          }
          70.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          70.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          71.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          71.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          72.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          72.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          72.917% {
            transform:translate(40px,120px);
            opacity:1;
          }
          73.333% {
            transform:translate(40px,120px);
            opacity:1;
          }
          73.75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          74.167% {
            transform:translate(40px,120px);
            opacity:1;
          }
          74.583% {
            transform:translate(40px,120px);
            opacity:1;
          }
          75% {
            transform:translate(40px,120px);
            opacity:1;
          }
          75.417% {
            transform:translate(40px,120px);
            opacity:1;
          }
          75.833% {
            transform:translate(40px,120px);
            opacity:1;
          }
          76.25% {
            transform:translate(40px,120px);
            opacity:1;
          }
          76.667% {
            transform:translate(40px,120px);
            opacity:1;
          }
          77.083% {
            transform:translate(40px,120px);
            opacity:1;
          }
          77.5% {
            transform:translate(40px,120px);
            opacity:1;
          }
          77.917% {
            transform:translate(40px,120px);
            opacity:0;
          }
          78.333% {
            transform:translate(40px,120px);
            opacity:0;
          }
          78.75% {
            transform:translate(40px,120px);
            opacity:0;
            opacity:0;
          }
          79.167% {
            transform:translate(80px,20px);
            opacity:0;
            opacity:0;
          }
          79.583% {
            transform:translate(80px,20px);
            opacity:0;
          }
          80% {
            transform:translate(80px,20px);
            opacity:0;
          }
          80.417% {
            transform:translate(80px,20px);
            opacity:1;
          }
          80.833% {
            transform:translate(80px,20px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,20px);
            opacity:1;
          }
          81.667% {
            transform:translate(80px,20px);
            opacity:1;
          }
          82.083% {
            transform:translate(80px,20px);
            opacity:1;
          }
          82.5% {
            transform:translate(80px,20px);
            opacity:1;
          }
          82.917% {
            transform:translate(80px,20px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,20px);
            opacity:1;
          }
          83.75% {
            transform:translate(80px,20px);
            opacity:1;
          }
          84.167% {
            transform:translate(80px,20px);
            opacity:1;
          }
          84.583% {
            transform:translate(80px,20px);
            opacity:1;
          }
          85% {
            transform:translate(80px,20px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,20px);
            opacity:1;
          }
          85.833% {
            transform:translate(80px,20px);
            opacity:1;
          }
          86.25% {
            transform:translate(80px,20px);
            opacity:1;
          }
          86.667% {
            transform:translate(80px,20px);
            opacity:1;
          }
          87.083% {
            transform:translate(80px,20px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,20px);
            opacity:1;
          }
          87.917% {
            transform:translate(80px,20px);
            opacity:1;
          }
          88.333% {
            transform:translate(80px,20px);
            opacity:1;
          }
          88.75% {
            transform:translate(80px,20px);
            opacity:1;
          }
          89.167% {
            transform:translate(80px,20px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,20px);
            opacity:1;
          }
          90% {
            transform:translate(80px,20px);
            opacity:1;
          }
          90.417% {
            transform:translate(80px,20px);
            opacity:1;
          }
          90.833% {
            transform:translate(80px,20px);
            opacity:1;
          }
          91.25% {
            transform:translate(80px,20px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,20px);
            opacity:1;
          }
          92.083% {
            transform:translate(80px,20px);
            opacity:1;
          }
          92.5% {
            transform:translate(80px,20px);
            opacity:1;
          }
          92.917% {
            transform:translate(80px,20px);
            opacity:1;
          }
          93.333% {
            transform:translate(80px,20px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,20px);
            opacity:1;
          }
          94.167% {
            transform:translate(80px,20px);
            opacity:1;
          }
          94.583% {
            transform:translate(80px,20px);
            opacity:1;
          }
          95% {
            transform:translate(80px,20px);
            opacity:1;
          }
          95.417% {
            transform:translate(80px,20px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,20px);
            opacity:1;
          }
          96.25% {
            transform:translate(80px,20px);
            opacity:1;
          }
          96.667% {
            transform:translate(80px,20px);
            opacity:1;
          }
          97.083% {
            transform:translate(80px,20px);
            opacity:1;
          }
          97.5% {
            transform:translate(80px,20px);
            opacity:1;
          }
          97.917% {
            transform:translate(80px,20px);
            opacity:1;
          }
          98.333% {
            transform:translate(80px,20px);
            opacity:1;
          }
          98.75% {
            transform:translate(80px,20px);
            opacity:1;
          }
          99.167% {
            transform:translate(80px,20px);
            opacity:1;
          }
          99.583% {
            transform:translate(80px,20px);
            opacity:1;
          }
          100% {
            transform:translate(80px,20px);
            opacity:1;
          }
        }
        @keyframes household2 {
          0% {
            transform:translate(40px,40px);
            opacity:1;
          }
          0.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          0.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          1.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          1.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          2.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          2.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          2.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          3.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          3.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          4.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          4.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          5.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          5.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          6.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          6.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          7.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          7.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          7.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          8.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          8.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          9.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          9.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          10% {
            transform:translate(40px,40px);
            opacity:1;
          }
          10.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          10.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          11.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          11.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          12.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          12.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          12.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          13.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          13.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          14.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          14.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          15% {
            transform:translate(40px,40px);
            opacity:1;
          }
          15.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          15.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          16.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          16.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          17.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          17.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          17.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          18.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          18.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          19.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          19.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          20% {
            transform:translate(40px,40px);
            opacity:1;
          }
          20.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          20.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          21.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          21.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          22.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          22.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          22.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          23.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          23.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          24.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          24.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          25.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          25.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          26.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          26.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          27.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          27.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          27.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          28.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          28.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          29.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          29.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          30% {
            transform:translate(40px,40px);
            opacity:1;
          }
          30.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          30.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          31.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          31.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          32.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          32.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          32.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          33.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          33.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          34.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          34.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          35% {
            transform:translate(40px,40px);
            opacity:1;
          }
          35.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          35.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          36.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          36.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          37.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          37.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          37.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          38.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          38.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          39.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          39.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          40% {
            transform:translate(40px,40px);
            opacity:1;
          }
          40.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          40.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          41.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          41.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          42.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          42.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          42.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          43.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          43.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          44.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          44.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          45% {
            transform:translate(40px,40px);
            opacity:1;
          }
          45.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          45.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          46.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          46.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          47.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          47.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          47.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          48.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          48.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          49.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          49.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          50% {
            transform:translate(40px,40px);
            opacity:1;
          }
          50.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          50.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          51.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          51.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          52.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          52.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          52.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          53.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          53.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          54.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          54.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          55% {
            transform:translate(40px,40px);
            opacity:1;
          }
          55.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          55.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          56.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          56.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          57.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          57.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          57.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          58.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          58.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          59.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          59.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          60% {
            transform:translate(40px,40px);
            opacity:1;
          }
          60.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          60.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          61.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          61.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          62.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          62.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          62.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          63.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          63.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          64.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          64.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          65% {
            transform:translate(40px,40px);
            opacity:1;
          }
          65.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          65.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          66.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          66.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          67.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          67.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          67.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          68.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          68.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          69.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          69.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          70% {
            transform:translate(40px,40px);
            opacity:1;
          }
          70.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          70.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          71.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          71.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          72.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          72.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          72.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          73.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          73.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          74.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          74.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          75.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          75.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          76.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          76.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          77.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          77.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          77.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          78.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          78.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          79.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          79.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          80% {
            transform:translate(40px,40px);
            opacity:1;
          }
          80.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          80.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          81.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          81.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          82.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          82.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          82.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          83.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          83.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          84.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          84.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          85% {
            transform:translate(40px,40px);
            opacity:1;
          }
          85.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          85.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          86.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          86.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          87.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          87.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          87.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          88.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          88.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          89.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          89.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          90% {
            transform:translate(40px,40px);
            opacity:1;
          }
          90.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          90.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          91.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          91.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          92.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          92.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          92.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          93.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          93.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          94.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          94.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          95% {
            transform:translate(40px,40px);
            opacity:1;
          }
          95.417% {
            transform:translate(40px,40px);
            opacity:1;
          }
          95.833% {
            transform:translate(40px,40px);
            opacity:1;
          }
          96.25% {
            transform:translate(40px,40px);
            opacity:1;
          }
          96.667% {
            transform:translate(40px,40px);
            opacity:1;
          }
          97.083% {
            transform:translate(40px,40px);
            opacity:1;
          }
          97.5% {
            transform:translate(40px,40px);
            opacity:1;
          }
          97.917% {
            transform:translate(40px,40px);
            opacity:1;
          }
          98.333% {
            transform:translate(40px,40px);
            opacity:1;
          }
          98.75% {
            transform:translate(40px,40px);
            opacity:1;
          }
          99.167% {
            transform:translate(40px,40px);
            opacity:1;
          }
          99.583% {
            transform:translate(40px,40px);
            opacity:1;
          }
          100% {
            transform:translate(40px,40px);
            opacity:1;
          }
        }
        @keyframes household3 {
          0% {
            transform:translate(80px,60px);
            opacity:1;
          }
          0.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          0.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          1.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          1.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          2.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          2.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          2.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          3.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          3.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          4.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          4.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          5.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          5.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          6.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          6.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          7.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          7.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          7.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          8.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          8.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          9.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          9.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          10% {
            transform:translate(80px,60px);
            opacity:1;
          }
          10.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          10.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          11.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          11.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          12.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          12.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          12.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          13.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          13.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          14.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          14.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          15% {
            transform:translate(80px,60px);
            opacity:1;
          }
          15.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          15.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          16.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          16.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          17.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          17.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          17.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          18.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          18.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          19.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          19.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          20% {
            transform:translate(80px,60px);
            opacity:1;
          }
          20.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          20.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          21.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          21.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          22.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          22.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          22.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          23.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          23.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          24.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          24.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          25.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          25.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          26.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          26.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          27.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          27.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          27.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          28.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          28.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          29.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          29.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          30% {
            transform:translate(80px,60px);
            opacity:1;
          }
          30.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          30.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          31.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          31.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          32.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          32.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          32.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          33.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          33.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          34.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          34.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          35% {
            transform:translate(80px,60px);
            opacity:1;
          }
          35.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          35.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          36.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          36.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          37.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          37.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          37.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          38.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          38.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          39.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          39.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          40% {
            transform:translate(80px,60px);
            opacity:1;
          }
          40.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          40.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          41.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          41.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          42.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          42.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          42.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          43.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          43.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          44.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          44.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          45% {
            transform:translate(80px,60px);
            opacity:1;
          }
          45.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          45.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          46.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          46.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          47.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          47.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          47.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          48.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          48.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          49.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          49.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          50% {
            transform:translate(80px,60px);
            opacity:1;
          }
          50.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          50.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          51.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          51.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          52.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          52.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          52.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          53.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          53.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          54.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          54.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          55% {
            transform:translate(80px,60px);
            opacity:1;
          }
          55.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          55.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          56.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          56.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          57.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          57.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          57.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          58.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          58.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          59.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          59.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          60% {
            transform:translate(80px,60px);
            opacity:1;
          }
          60.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          60.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          61.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          61.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          62.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          62.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          62.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          63.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          63.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          64.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          64.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          65% {
            transform:translate(80px,60px);
            opacity:1;
          }
          65.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          65.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          66.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          66.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          67.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          67.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          67.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          68.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          68.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          69.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          69.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          70% {
            transform:translate(80px,60px);
            opacity:1;
          }
          70.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          70.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          71.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          71.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          72.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          72.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          72.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          73.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          73.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          74.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          74.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          75.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          75.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          76.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          76.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          77.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          77.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          77.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          78.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          78.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          79.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          79.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          80% {
            transform:translate(80px,60px);
            opacity:1;
          }
          80.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          80.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          81.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          82.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          82.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          82.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          83.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          84.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          84.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          85% {
            transform:translate(80px,60px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          85.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          86.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          86.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          87.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          87.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          88.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          88.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          89.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          90% {
            transform:translate(80px,60px);
            opacity:1;
          }
          90.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          90.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          91.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          92.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          92.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          92.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          93.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          94.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          94.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          95% {
            transform:translate(80px,60px);
            opacity:1;
          }
          95.417% {
            transform:translate(80px,60px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,60px);
            opacity:1;
          }
          96.25% {
            transform:translate(80px,60px);
            opacity:1;
          }
          96.667% {
            transform:translate(80px,60px);
            opacity:1;
          }
          97.083% {
            transform:translate(80px,60px);
            opacity:1;
          }
          97.5% {
            transform:translate(80px,60px);
            opacity:1;
          }
          97.917% {
            transform:translate(80px,60px);
            opacity:1;
          }
          98.333% {
            transform:translate(80px,60px);
            opacity:1;
          }
          98.75% {
            transform:translate(80px,60px);
            opacity:1;
          }
          99.167% {
            transform:translate(80px,60px);
            opacity:1;
          }
          99.583% {
            transform:translate(80px,60px);
            opacity:1;
          }
          100% {
            transform:translate(80px,60px);
            opacity:1;
          }
        }
        @keyframes household4 {
          0% {
            transform:translate(20px,60px);
            opacity:1;
          }
          0.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          0.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          1.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          1.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          2.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          2.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          2.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          3.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          3.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          4.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          4.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          5.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          5.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          6.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          6.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          7.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          7.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          7.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          8.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          8.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          9.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          9.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          10% {
            transform:translate(20px,60px);
            opacity:1;
          }
          10.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          10.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          11.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          11.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          12.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          12.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          12.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          13.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          13.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          14.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          14.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          15% {
            transform:translate(20px,60px);
            opacity:1;
          }
          15.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          15.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          16.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          16.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          17.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          17.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          17.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          18.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          18.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          19.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          19.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          20% {
            transform:translate(20px,60px);
            opacity:1;
          }
          20.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          20.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          21.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          21.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          22.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          22.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          22.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          23.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          23.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          24.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          24.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          25.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          25.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          26.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          26.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          27.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          27.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          27.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          28.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          28.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          29.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          29.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          30% {
            transform:translate(20px,60px);
            opacity:1;
          }
          30.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          30.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          31.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          31.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          32.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          32.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          32.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          33.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          33.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          34.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          34.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          35% {
            transform:translate(20px,60px);
            opacity:1;
          }
          35.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          35.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          36.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          36.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          37.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          37.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          37.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          38.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          38.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          39.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          39.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          40% {
            transform:translate(20px,60px);
            opacity:1;
          }
          40.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          40.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          41.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          41.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          42.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          42.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          42.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          43.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          43.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          44.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          44.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          45% {
            transform:translate(20px,60px);
            opacity:1;
          }
          45.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          45.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          46.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          46.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          47.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          47.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          47.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          48.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          48.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          49.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          49.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          50% {
            transform:translate(20px,60px);
            opacity:1;
          }
          50.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          50.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          51.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          51.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          52.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          52.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          52.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          53.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          53.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          54.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          54.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          55% {
            transform:translate(20px,60px);
            opacity:1;
          }
          55.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          55.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          56.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          56.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          57.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          57.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          57.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          58.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          58.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          59.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          59.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          60% {
            transform:translate(20px,60px);
            opacity:1;
          }
          60.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          60.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          61.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          61.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          62.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          62.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          62.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          63.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          63.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          64.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          64.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          65% {
            transform:translate(20px,60px);
            opacity:1;
          }
          65.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          65.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          66.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          66.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          67.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          67.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          67.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          68.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          68.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          69.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          69.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          70% {
            transform:translate(20px,60px);
            opacity:1;
          }
          70.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          70.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          71.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          71.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          72.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          72.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          72.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          73.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          73.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          74.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          74.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          75.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          75.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          76.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          76.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          77.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          77.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          77.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          78.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          78.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          79.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          79.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          80% {
            transform:translate(20px,60px);
            opacity:1;
          }
          80.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          80.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          81.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          81.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          82.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          82.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          82.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          83.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          83.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          84.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          84.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          85% {
            transform:translate(20px,60px);
            opacity:1;
          }
          85.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          85.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          86.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          86.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          87.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          87.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          87.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          88.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          88.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          89.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          89.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          90% {
            transform:translate(20px,60px);
            opacity:1;
          }
          90.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          90.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          91.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          91.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          92.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          92.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          92.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          93.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          93.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          94.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          94.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          95% {
            transform:translate(20px,60px);
            opacity:1;
          }
          95.417% {
            transform:translate(20px,60px);
            opacity:1;
          }
          95.833% {
            transform:translate(20px,60px);
            opacity:1;
          }
          96.25% {
            transform:translate(20px,60px);
            opacity:1;
          }
          96.667% {
            transform:translate(20px,60px);
            opacity:1;
          }
          97.083% {
            transform:translate(20px,60px);
            opacity:1;
          }
          97.5% {
            transform:translate(20px,60px);
            opacity:1;
          }
          97.917% {
            transform:translate(20px,60px);
            opacity:1;
          }
          98.333% {
            transform:translate(20px,60px);
            opacity:1;
          }
          98.75% {
            transform:translate(20px,60px);
            opacity:1;
          }
          99.167% {
            transform:translate(20px,60px);
            opacity:1;
          }
          99.583% {
            transform:translate(20px,60px);
            opacity:1;
          }
          100% {
            transform:translate(20px,60px);
            opacity:1;
          }
        }
        @keyframes household5 {
          0% {
            transform:translate(80px,80px);
            opacity:1;
          }
          0.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          0.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          1.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          1.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          2.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          2.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          2.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          3.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          3.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          4.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          4.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          5.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          5.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          6.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          6.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          7.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          7.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          7.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          8.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          8.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          9.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          9.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          10% {
            transform:translate(80px,80px);
            opacity:1;
          }
          10.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          10.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          11.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          11.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          12.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          12.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          12.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          13.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          13.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          14.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          14.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          15% {
            transform:translate(80px,80px);
            opacity:1;
          }
          15.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          15.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          16.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          16.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          17.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          17.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          17.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          18.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          18.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          19.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          19.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          20% {
            transform:translate(80px,80px);
            opacity:1;
          }
          20.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          20.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          21.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          21.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          22.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          22.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          22.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          23.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          23.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          24.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          24.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          25.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          25.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          26.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          26.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          27.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          27.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          27.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          28.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          28.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          29.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          29.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          30% {
            transform:translate(80px,80px);
            opacity:1;
          }
          30.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          30.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          31.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          31.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          32.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          32.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          32.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          33.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          33.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          34.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          34.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          35% {
            transform:translate(80px,80px);
            opacity:1;
          }
          35.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          35.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          36.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          36.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          37.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          37.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          37.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          38.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          38.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          39.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          39.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          40% {
            transform:translate(80px,80px);
            opacity:1;
          }
          40.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          40.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          41.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          41.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          42.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          42.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          42.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          43.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          43.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          44.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          44.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          45% {
            transform:translate(80px,80px);
            opacity:1;
          }
          45.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          45.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          46.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          46.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          47.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          47.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          47.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          48.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          48.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          49.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          49.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          50% {
            transform:translate(80px,80px);
            opacity:1;
          }
          50.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          50.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          51.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          51.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          52.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          52.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          52.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          53.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          53.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          54.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          54.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          55% {
            transform:translate(80px,80px);
            opacity:1;
          }
          55.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          55.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          56.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          56.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          57.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          57.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          57.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          58.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          58.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          59.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          59.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          60% {
            transform:translate(80px,80px);
            opacity:1;
          }
          60.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          60.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          61.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          61.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          62.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          62.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          62.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          63.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          63.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          64.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          64.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          65% {
            transform:translate(80px,80px);
            opacity:1;
          }
          65.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          65.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          66.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          66.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          67.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          67.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          67.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          68.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          68.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          69.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          69.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          70% {
            transform:translate(80px,80px);
            opacity:1;
          }
          70.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          70.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          71.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          71.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          72.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          72.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          72.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          73.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          73.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          74.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          74.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          75.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          75.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          76.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          76.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          77.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          77.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          77.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          78.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          78.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          79.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          79.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          80% {
            transform:translate(80px,80px);
            opacity:1;
          }
          80.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          80.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          81.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          82.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          82.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          82.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          83.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          84.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          84.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          85% {
            transform:translate(80px,80px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          85.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          86.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          86.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          87.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          87.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          88.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          88.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          89.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          90% {
            transform:translate(80px,80px);
            opacity:1;
          }
          90.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          90.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          91.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          92.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          92.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          92.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          93.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          94.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          94.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          95% {
            transform:translate(80px,80px);
            opacity:1;
          }
          95.417% {
            transform:translate(80px,80px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,80px);
            opacity:1;
          }
          96.25% {
            transform:translate(80px,80px);
            opacity:1;
          }
          96.667% {
            transform:translate(80px,80px);
            opacity:1;
          }
          97.083% {
            transform:translate(80px,80px);
            opacity:1;
          }
          97.5% {
            transform:translate(80px,80px);
            opacity:1;
          }
          97.917% {
            transform:translate(80px,80px);
            opacity:1;
          }
          98.333% {
            transform:translate(80px,80px);
            opacity:1;
          }
          98.75% {
            transform:translate(80px,80px);
            opacity:1;
          }
          99.167% {
            transform:translate(80px,80px);
            opacity:1;
          }
          99.583% {
            transform:translate(80px,80px);
            opacity:1;
          }
          100% {
            transform:translate(80px,80px);
            opacity:1;
          }
        }
        @keyframes household6 {
          0% {
            transform:translate(40px,100px);
            opacity:1;
          }
          0.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          0.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          1.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          1.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          2.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          2.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          2.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          3.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          3.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          4.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          4.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          5.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          5.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          6.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          6.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          7.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          7.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          7.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          8.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          8.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          9.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          9.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          10% {
            transform:translate(40px,100px);
            opacity:1;
          }
          10.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          10.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          11.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          11.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          12.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          12.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          12.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          13.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          13.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          14.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          14.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          15% {
            transform:translate(40px,100px);
            opacity:1;
          }
          15.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          15.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          16.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          16.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          17.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          17.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          17.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          18.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          18.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          19.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          19.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          20% {
            transform:translate(40px,100px);
            opacity:1;
          }
          20.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          20.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          21.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          21.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          22.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          22.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          22.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          23.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          23.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          24.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          24.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          25.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          25.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          26.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          26.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          27.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          27.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          27.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          28.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          28.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          29.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          29.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          30% {
            transform:translate(40px,100px);
            opacity:1;
          }
          30.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          30.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          31.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          31.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          32.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          32.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          32.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          33.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          33.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          34.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          34.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          35% {
            transform:translate(40px,100px);
            opacity:1;
          }
          35.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          35.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          36.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          36.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          37.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          37.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          37.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          38.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          38.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          39.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          39.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          40% {
            transform:translate(40px,100px);
            opacity:1;
          }
          40.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          40.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          41.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          41.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          42.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          42.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          42.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          43.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          43.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          44.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          44.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          45% {
            transform:translate(40px,100px);
            opacity:1;
          }
          45.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          45.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          46.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          46.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          47.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          47.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          47.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          48.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          48.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          49.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          49.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          50% {
            transform:translate(40px,100px);
            opacity:1;
          }
          50.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          50.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          51.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          51.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          52.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          52.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          52.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          53.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          53.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          54.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          54.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          55% {
            transform:translate(40px,100px);
            opacity:1;
          }
          55.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          55.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          56.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          56.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          57.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          57.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          57.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          58.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          58.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          59.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          59.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          60% {
            transform:translate(40px,100px);
            opacity:1;
          }
          60.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          60.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          61.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          61.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          62.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          62.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          62.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          63.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          63.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          64.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          64.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          65% {
            transform:translate(40px,100px);
            opacity:1;
          }
          65.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          65.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          66.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          66.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          67.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          67.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          67.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          68.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          68.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          69.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          69.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          70% {
            transform:translate(40px,100px);
            opacity:1;
          }
          70.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          70.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          71.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          71.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          72.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          72.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          72.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          73.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          73.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          74.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          74.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          75.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          75.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          76.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          76.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          77.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          77.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          77.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          78.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          78.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          79.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          79.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          80% {
            transform:translate(40px,100px);
            opacity:1;
          }
          80.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          80.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          81.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          81.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          82.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          82.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          82.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          83.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          83.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          84.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          84.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          85% {
            transform:translate(40px,100px);
            opacity:1;
          }
          85.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          85.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          86.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          86.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          87.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          87.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          87.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          88.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          88.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          89.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          89.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          90% {
            transform:translate(40px,100px);
            opacity:1;
          }
          90.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          90.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          91.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          91.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          92.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          92.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          92.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          93.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          93.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          94.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          94.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          95% {
            transform:translate(40px,100px);
            opacity:1;
          }
          95.417% {
            transform:translate(40px,100px);
            opacity:1;
          }
          95.833% {
            transform:translate(40px,100px);
            opacity:1;
          }
          96.25% {
            transform:translate(40px,100px);
            opacity:1;
          }
          96.667% {
            transform:translate(40px,100px);
            opacity:1;
          }
          97.083% {
            transform:translate(40px,100px);
            opacity:1;
          }
          97.5% {
            transform:translate(40px,100px);
            opacity:1;
          }
          97.917% {
            transform:translate(40px,100px);
            opacity:1;
          }
          98.333% {
            transform:translate(40px,100px);
            opacity:1;
          }
          98.75% {
            transform:translate(40px,100px);
            opacity:1;
          }
          99.167% {
            transform:translate(40px,100px);
            opacity:1;
          }
          99.583% {
            transform:translate(40px,100px);
            opacity:1;
          }
          100% {
            transform:translate(40px,100px);
            opacity:1;
          }
        }
        @keyframes household7 {
          0% {
            transform:translate(100px,40px);
            opacity:1;
          }
          0.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          0.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          1.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          1.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          2.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          2.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          2.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          3.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          3.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          4.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          4.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          5.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          5.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          6.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          6.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          7.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          7.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          7.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          8.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          8.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          9.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          9.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          10% {
            transform:translate(100px,40px);
            opacity:1;
          }
          10.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          10.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          11.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          11.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          12.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          12.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          12.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          13.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          13.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          14.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          14.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          15% {
            transform:translate(100px,40px);
            opacity:1;
          }
          15.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          15.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          16.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          16.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          17.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          17.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          17.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          18.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          18.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          19.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          19.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          20% {
            transform:translate(100px,40px);
            opacity:1;
          }
          20.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          20.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          21.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          21.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          22.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          22.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          22.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          23.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          23.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          24.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          24.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          25.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          25.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          26.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          26.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          27.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          27.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          27.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          28.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          28.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          29.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          29.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          30% {
            transform:translate(100px,40px);
            opacity:1;
          }
          30.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          30.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          31.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          31.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          32.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          32.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          32.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          33.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          33.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          34.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          34.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          35% {
            transform:translate(100px,40px);
            opacity:1;
          }
          35.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          35.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          36.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          36.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          37.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          37.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          37.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          38.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          38.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          39.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          39.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          40% {
            transform:translate(100px,40px);
            opacity:1;
          }
          40.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          40.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          41.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          41.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          42.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          42.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          42.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          43.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          43.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          44.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          44.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          45% {
            transform:translate(100px,40px);
            opacity:1;
          }
          45.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          45.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          46.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          46.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          47.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          47.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          47.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          48.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          48.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          49.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          49.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          50% {
            transform:translate(100px,40px);
            opacity:1;
          }
          50.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          50.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          51.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          51.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          52.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          52.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          52.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          53.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          53.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          54.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          54.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          55% {
            transform:translate(100px,40px);
            opacity:1;
          }
          55.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          55.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          56.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          56.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          57.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          57.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          57.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          58.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          58.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          59.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          59.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          60% {
            transform:translate(100px,40px);
            opacity:1;
          }
          60.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          60.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          61.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          61.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          62.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          62.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          62.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          63.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          63.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          64.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          64.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          65% {
            transform:translate(100px,40px);
            opacity:1;
          }
          65.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          65.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          66.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          66.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          67.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          67.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          67.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          68.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          68.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          69.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          69.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          70% {
            transform:translate(100px,40px);
            opacity:1;
          }
          70.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          70.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          71.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          71.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          72.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          72.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          72.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          73.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          73.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          74.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          74.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          75.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          75.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          76.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          76.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          77.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          77.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          77.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          78.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          78.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          79.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          79.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          80% {
            transform:translate(100px,40px);
            opacity:1;
          }
          80.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          80.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          81.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          81.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          82.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          82.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          82.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          83.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          83.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          84.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          84.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          85% {
            transform:translate(100px,40px);
            opacity:1;
          }
          85.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          85.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          86.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          86.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          87.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          87.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          87.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          88.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          88.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          89.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          89.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          90% {
            transform:translate(100px,40px);
            opacity:1;
          }
          90.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          90.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          91.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          91.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          92.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          92.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          92.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          93.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          93.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          94.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          94.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          95% {
            transform:translate(100px,40px);
            opacity:1;
          }
          95.417% {
            transform:translate(100px,40px);
            opacity:1;
          }
          95.833% {
            transform:translate(100px,40px);
            opacity:1;
          }
          96.25% {
            transform:translate(100px,40px);
            opacity:1;
          }
          96.667% {
            transform:translate(100px,40px);
            opacity:1;
          }
          97.083% {
            transform:translate(100px,40px);
            opacity:1;
          }
          97.5% {
            transform:translate(100px,40px);
            opacity:1;
          }
          97.917% {
            transform:translate(100px,40px);
            opacity:1;
          }
          98.333% {
            transform:translate(100px,40px);
            opacity:1;
          }
          98.75% {
            transform:translate(100px,40px);
            opacity:1;
          }
          99.167% {
            transform:translate(100px,40px);
            opacity:1;
          }
          99.583% {
            transform:translate(100px,40px);
            opacity:1;
          }
          100% {
            transform:translate(100px,40px);
            opacity:1;
          }
        }
        @keyframes household8 {
          0% {
            transform:translate(120px,120px);
            opacity:1;
          }
          0.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          0.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          1.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          1.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          2.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          2.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          2.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          3.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          3.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          4.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          4.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          5.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          5.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          6.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          6.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          7.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          7.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          7.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          8.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          8.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          9.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          9.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          10% {
            transform:translate(120px,120px);
            opacity:1;
          }
          10.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          10.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          11.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          11.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          12.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          12.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          12.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          13.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          13.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          14.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          14.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          15% {
            transform:translate(120px,120px);
            opacity:1;
          }
          15.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          15.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          16.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          16.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          17.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          17.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          17.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          18.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          18.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          19.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          19.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          20% {
            transform:translate(120px,120px);
            opacity:1;
          }
          20.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          20.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          21.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          21.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          22.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          22.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          22.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          23.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          23.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          24.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          24.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          25.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          25.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          26.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          26.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          27.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          27.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          27.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          28.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          28.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          29.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          29.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          30% {
            transform:translate(120px,120px);
            opacity:1;
          }
          30.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          30.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          31.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          31.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          32.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          32.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          32.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          33.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          33.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          34.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          34.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          35% {
            transform:translate(120px,120px);
            opacity:1;
          }
          35.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          35.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          36.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          36.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          37.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          37.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          37.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          38.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          38.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          39.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          39.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          40% {
            transform:translate(120px,120px);
            opacity:1;
          }
          40.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          40.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          41.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          41.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          42.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          42.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          42.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          43.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          43.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          44.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          44.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          45% {
            transform:translate(120px,120px);
            opacity:1;
          }
          45.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          45.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          46.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          46.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          47.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          47.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          47.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          48.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          48.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          49.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          49.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          50% {
            transform:translate(120px,120px);
            opacity:1;
          }
          50.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          50.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          51.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          51.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          52.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          52.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          52.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          53.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          53.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          54.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          54.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          55% {
            transform:translate(120px,120px);
            opacity:1;
          }
          55.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          55.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          56.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          56.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          57.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          57.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          57.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          58.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          58.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          59.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          59.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          60% {
            transform:translate(120px,120px);
            opacity:1;
          }
          60.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          60.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          61.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          61.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          62.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          62.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          62.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          63.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          63.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          64.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          64.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          65% {
            transform:translate(120px,120px);
            opacity:1;
          }
          65.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          65.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          66.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          66.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          67.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          67.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          67.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          68.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          68.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          69.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          69.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          70% {
            transform:translate(120px,120px);
            opacity:1;
          }
          70.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          70.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          71.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          71.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          72.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          72.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          72.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          73.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          73.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          74.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          74.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          75.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          75.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          76.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          76.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          77.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          77.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          77.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          78.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          78.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          79.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          79.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          80% {
            transform:translate(120px,120px);
            opacity:1;
          }
          80.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          80.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          81.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          81.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          82.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          82.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          82.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          83.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          83.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          84.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          84.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          85% {
            transform:translate(120px,120px);
            opacity:1;
          }
          85.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          85.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          86.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          86.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          87.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          87.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          87.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          88.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          88.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          89.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          89.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          90% {
            transform:translate(120px,120px);
            opacity:1;
          }
          90.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          90.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          91.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          91.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          92.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          92.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          92.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          93.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          93.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          94.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          94.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          95% {
            transform:translate(120px,120px);
            opacity:1;
          }
          95.417% {
            transform:translate(120px,120px);
            opacity:1;
          }
          95.833% {
            transform:translate(120px,120px);
            opacity:1;
          }
          96.25% {
            transform:translate(120px,120px);
            opacity:1;
          }
          96.667% {
            transform:translate(120px,120px);
            opacity:1;
          }
          97.083% {
            transform:translate(120px,120px);
            opacity:1;
          }
          97.5% {
            transform:translate(120px,120px);
            opacity:1;
          }
          97.917% {
            transform:translate(120px,120px);
            opacity:1;
          }
          98.333% {
            transform:translate(120px,120px);
            opacity:1;
          }
          98.75% {
            transform:translate(120px,120px);
            opacity:1;
          }
          99.167% {
            transform:translate(120px,120px);
            opacity:1;
          }
          99.583% {
            transform:translate(120px,120px);
            opacity:1;
          }
          100% {
            transform:translate(120px,120px);
            opacity:1;
          }
        }
        @keyframes household9 {
          0% {
            transform:translate(100px,60px);
            opacity:1;
          }
          0.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          0.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          1.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          1.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          2.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          2.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          2.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          3.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          3.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          4.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          4.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          5.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          5.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          6.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          6.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          7.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          7.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          7.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          8.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          8.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          9.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          9.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          10% {
            transform:translate(100px,60px);
            opacity:1;
          }
          10.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          10.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          11.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          11.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          12.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          12.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          12.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          13.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          13.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          14.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          14.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          15% {
            transform:translate(100px,60px);
            opacity:1;
          }
          15.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          15.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          16.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          16.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          17.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          17.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          17.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          18.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          18.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          19.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          19.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          20% {
            transform:translate(100px,60px);
            opacity:1;
          }
          20.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          20.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          21.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          21.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          22.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          22.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          22.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          23.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          23.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          24.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          24.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          25.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          25.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          26.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          26.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          27.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          27.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          27.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          28.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          28.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          29.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          29.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          30% {
            transform:translate(100px,60px);
            opacity:1;
          }
          30.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          30.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          31.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          31.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          32.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          32.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          32.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          33.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          33.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          34.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          34.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          35% {
            transform:translate(100px,60px);
            opacity:1;
          }
          35.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          35.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          36.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          36.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          37.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          37.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          37.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          38.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          38.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          39.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          39.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          40% {
            transform:translate(100px,60px);
            opacity:1;
          }
          40.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          40.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          41.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          41.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          42.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          42.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          42.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          43.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          43.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          44.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          44.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          45% {
            transform:translate(100px,60px);
            opacity:1;
          }
          45.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          45.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          46.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          46.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          47.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          47.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          47.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          48.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          48.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          49.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          49.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          50% {
            transform:translate(100px,60px);
            opacity:1;
          }
          50.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          50.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          51.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          51.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          52.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          52.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          52.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          53.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          53.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          54.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          54.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          55% {
            transform:translate(100px,60px);
            opacity:1;
          }
          55.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          55.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          56.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          56.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          57.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          57.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          57.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          58.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          58.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          59.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          59.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          60% {
            transform:translate(100px,60px);
            opacity:1;
          }
          60.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          60.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          61.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          61.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          62.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          62.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          62.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          63.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          63.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          64.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          64.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          65% {
            transform:translate(100px,60px);
            opacity:1;
          }
          65.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          65.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          66.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          66.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          67.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          67.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          67.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          68.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          68.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          69.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          69.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          70% {
            transform:translate(100px,60px);
            opacity:1;
          }
          70.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          70.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          71.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          71.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          72.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          72.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          72.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          73.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          73.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          74.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          74.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          75.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          75.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          76.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          76.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          77.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          77.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          77.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          78.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          78.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          79.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          79.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          80% {
            transform:translate(100px,60px);
            opacity:1;
          }
          80.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          80.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          81.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          81.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          82.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          82.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          82.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          83.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          83.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          84.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          84.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          85% {
            transform:translate(100px,60px);
            opacity:1;
          }
          85.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          85.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          86.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          86.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          87.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          87.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          87.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          88.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          88.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          89.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          89.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          90% {
            transform:translate(100px,60px);
            opacity:1;
          }
          90.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          90.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          91.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          91.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          92.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          92.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          92.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          93.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          93.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          94.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          94.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          95% {
            transform:translate(100px,60px);
            opacity:1;
          }
          95.417% {
            transform:translate(100px,60px);
            opacity:1;
          }
          95.833% {
            transform:translate(100px,60px);
            opacity:1;
          }
          96.25% {
            transform:translate(100px,60px);
            opacity:1;
          }
          96.667% {
            transform:translate(100px,60px);
            opacity:1;
          }
          97.083% {
            transform:translate(100px,60px);
            opacity:1;
          }
          97.5% {
            transform:translate(100px,60px);
            opacity:1;
          }
          97.917% {
            transform:translate(100px,60px);
            opacity:1;
          }
          98.333% {
            transform:translate(100px,60px);
            opacity:1;
          }
          98.75% {
            transform:translate(100px,60px);
            opacity:1;
          }
          99.167% {
            transform:translate(100px,60px);
            opacity:1;
          }
          99.583% {
            transform:translate(100px,60px);
            opacity:1;
          }
          100% {
            transform:translate(100px,60px);
            opacity:1;
          }
        }
        @keyframes household10 {
          0% {
            transform:translate(20px,100px);
            opacity:1;
          }
          0.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          0.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          1.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          1.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          2.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          2.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          2.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          3.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          3.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          4.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          4.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          5.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          5.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          6.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          6.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          7.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          7.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          7.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          8.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          8.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          9.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          9.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          10% {
            transform:translate(20px,100px);
            opacity:1;
          }
          10.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          10.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          11.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          11.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          12.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          12.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          12.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          13.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          13.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          14.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          14.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          15% {
            transform:translate(20px,100px);
            opacity:1;
          }
          15.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          15.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          16.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          16.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          17.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          17.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          17.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          18.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          18.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          19.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          19.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          20% {
            transform:translate(20px,100px);
            opacity:1;
          }
          20.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          20.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          21.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          21.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          22.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          22.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          22.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          23.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          23.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          24.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          24.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          25.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          25.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          26.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          26.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          27.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          27.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          27.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          28.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          28.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          29.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          29.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          30% {
            transform:translate(20px,100px);
            opacity:1;
          }
          30.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          30.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          31.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          31.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          32.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          32.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          32.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          33.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          33.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          34.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          34.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          35% {
            transform:translate(20px,100px);
            opacity:1;
          }
          35.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          35.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          36.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          36.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          37.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          37.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          37.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          38.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          38.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          39.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          39.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          40% {
            transform:translate(20px,100px);
            opacity:1;
          }
          40.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          40.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          41.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          41.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          42.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          42.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          42.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          43.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          43.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          44.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          44.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          45% {
            transform:translate(20px,100px);
            opacity:1;
          }
          45.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          45.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          46.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          46.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          47.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          47.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          47.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          48.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          48.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          49.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          49.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          50% {
            transform:translate(20px,100px);
            opacity:1;
          }
          50.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          50.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          51.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          51.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          52.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          52.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          52.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          53.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          53.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          54.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          54.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          55% {
            transform:translate(20px,100px);
            opacity:1;
          }
          55.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          55.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          56.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          56.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          57.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          57.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          57.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          58.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          58.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          59.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          59.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          60% {
            transform:translate(20px,100px);
            opacity:1;
          }
          60.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          60.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          61.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          61.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          62.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          62.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          62.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          63.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          63.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          64.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          64.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          65% {
            transform:translate(20px,100px);
            opacity:1;
          }
          65.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          65.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          66.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          66.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          67.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          67.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          67.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          68.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          68.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          69.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          69.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          70% {
            transform:translate(20px,100px);
            opacity:1;
          }
          70.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          70.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          71.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          71.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          72.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          72.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          72.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          73.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          73.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          74.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          74.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          75.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          75.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          76.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          76.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          77.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          77.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          77.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          78.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          78.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          79.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          79.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          80% {
            transform:translate(20px,100px);
            opacity:1;
          }
          80.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          80.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          81.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          81.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          82.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          82.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          82.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          83.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          83.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          84.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          84.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          85% {
            transform:translate(20px,100px);
            opacity:1;
          }
          85.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          85.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          86.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          86.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          87.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          87.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          87.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          88.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          88.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          89.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          89.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          90% {
            transform:translate(20px,100px);
            opacity:1;
          }
          90.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          90.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          91.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          91.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          92.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          92.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          92.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          93.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          93.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          94.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          94.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          95% {
            transform:translate(20px,100px);
            opacity:1;
          }
          95.417% {
            transform:translate(20px,100px);
            opacity:1;
          }
          95.833% {
            transform:translate(20px,100px);
            opacity:1;
          }
          96.25% {
            transform:translate(20px,100px);
            opacity:1;
          }
          96.667% {
            transform:translate(20px,100px);
            opacity:1;
          }
          97.083% {
            transform:translate(20px,100px);
            opacity:1;
          }
          97.5% {
            transform:translate(20px,100px);
            opacity:1;
          }
          97.917% {
            transform:translate(20px,100px);
            opacity:1;
          }
          98.333% {
            transform:translate(20px,100px);
            opacity:1;
          }
          98.75% {
            transform:translate(20px,100px);
            opacity:1;
          }
          99.167% {
            transform:translate(20px,100px);
            opacity:1;
          }
          99.583% {
            transform:translate(20px,100px);
            opacity:1;
          }
          100% {
            transform:translate(20px,100px);
            opacity:1;
          }
        }
        @keyframes household11 {
          0% {
            transform:translate(20px,120px);
            opacity:1;
          }
          0.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          0.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          1.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          1.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          2.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          2.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          2.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          3.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          3.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          4.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          4.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          5.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          5.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          6.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          6.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          7.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          7.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          7.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          8.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          8.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          9.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          9.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          10% {
            transform:translate(20px,120px);
            opacity:1;
          }
          10.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          10.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          11.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          11.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          12.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          12.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          12.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          13.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          13.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          14.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          14.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          15% {
            transform:translate(20px,120px);
            opacity:1;
          }
          15.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          15.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          16.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          16.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          17.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          17.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          17.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          18.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          18.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          19.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          19.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          20% {
            transform:translate(20px,120px);
            opacity:1;
          }
          20.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          20.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          21.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          21.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          22.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          22.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          22.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          23.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          23.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          24.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          24.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          25.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          25.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          26.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          26.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          27.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          27.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          27.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          28.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          28.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          29.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          29.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          30% {
            transform:translate(20px,120px);
            opacity:1;
          }
          30.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          30.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          31.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          31.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          32.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          32.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          32.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          33.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          33.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          34.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          34.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          35% {
            transform:translate(20px,120px);
            opacity:1;
          }
          35.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          35.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          36.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          36.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          37.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          37.5% {
            transform:translate(20px,120px);
            opacity:1;
          }
          37.917% {
            transform:translate(20px,120px);
            opacity:1;
          }
          38.333% {
            transform:translate(20px,120px);
            opacity:1;
          }
          38.75% {
            transform:translate(20px,120px);
            opacity:1;
          }
          39.167% {
            transform:translate(20px,120px);
            opacity:1;
          }
          39.583% {
            transform:translate(20px,120px);
            opacity:1;
          }
          40% {
            transform:translate(20px,120px);
            opacity:1;
          }
          40.417% {
            transform:translate(20px,120px);
            opacity:1;
          }
          40.833% {
            transform:translate(20px,120px);
            opacity:1;
          }
          41.25% {
            transform:translate(20px,120px);
            opacity:1;
          }
          41.667% {
            transform:translate(20px,120px);
            opacity:1;
          }
          42.083% {
            transform:translate(20px,120px);
            opacity:1;
          }
          42.5% {
            transform:translate(20px,120px);
            opacity:0;
          }
          42.917% {
            transform:translate(20px,120px);
            opacity:0;
          }
          43.333% {
            transform:translate(20px,120px);
            opacity:0;
            opacity:0;
          }
          43.75% {
            transform:translate(120px,80px);
            opacity:0;
            opacity:0;
          }
          44.167% {
            transform:translate(120px,80px);
            opacity:0;
          }
          44.583% {
            transform:translate(120px,80px);
            opacity:0;
          }
          45% {
            transform:translate(120px,80px);
            opacity:1;
          }
          45.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          45.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          46.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          46.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          47.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          47.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          47.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          48.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          48.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          49.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          49.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          50% {
            transform:translate(120px,80px);
            opacity:1;
          }
          50.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          50.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          51.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          51.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          52.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          52.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          52.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          53.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          53.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          54.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          54.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          55% {
            transform:translate(120px,80px);
            opacity:1;
          }
          55.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          55.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          56.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          56.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          57.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          57.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          57.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          58.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          58.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          59.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          59.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          60% {
            transform:translate(120px,80px);
            opacity:1;
          }
          60.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          60.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          61.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          61.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          62.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          62.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          62.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          63.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          63.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          64.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          64.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          65% {
            transform:translate(120px,80px);
            opacity:1;
          }
          65.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          65.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          66.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          66.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          67.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          67.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          67.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          68.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          68.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          69.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          69.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          70% {
            transform:translate(120px,80px);
            opacity:1;
          }
          70.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          70.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          71.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          71.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          72.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          72.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          72.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          73.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          73.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          74.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          74.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          75.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          75.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          76.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          76.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          77.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          77.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          77.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          78.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          78.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          79.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          79.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          80% {
            transform:translate(120px,80px);
            opacity:1;
          }
          80.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          80.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          81.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          81.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          82.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          82.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          82.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          83.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          83.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          84.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          84.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          85% {
            transform:translate(120px,80px);
            opacity:1;
          }
          85.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          85.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          86.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          86.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          87.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          87.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          87.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          88.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          88.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          89.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          89.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          90% {
            transform:translate(120px,80px);
            opacity:1;
          }
          90.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          90.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          91.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          91.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          92.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          92.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          92.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          93.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          93.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          94.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          94.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          95% {
            transform:translate(120px,80px);
            opacity:1;
          }
          95.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          95.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          96.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          96.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          97.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          97.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          97.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          98.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          98.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          99.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          99.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          100% {
            transform:translate(120px,80px);
            opacity:1;
          }
        }
        @keyframes household12 {
          0% {
            transform:translate(100px,120px);
            opacity:1;
          }
          0.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          0.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          1.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          1.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          2.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          2.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          2.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          3.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          3.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          4.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          4.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          5.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          5.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          6.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          6.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          7.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          7.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          7.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          8.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          8.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          9.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          9.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          10% {
            transform:translate(100px,120px);
            opacity:1;
          }
          10.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          10.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          11.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          11.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          12.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          12.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          12.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          13.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          13.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          14.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          14.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          15% {
            transform:translate(100px,120px);
            opacity:1;
          }
          15.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          15.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          16.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          16.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          17.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          17.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          17.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          18.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          18.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          19.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          19.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          20% {
            transform:translate(100px,120px);
            opacity:1;
          }
          20.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          20.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          21.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          21.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          22.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          22.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          22.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          23.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          23.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          24.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          24.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          25.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          25.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          26.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          26.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          27.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          27.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          27.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          28.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          28.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          29.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          29.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          30% {
            transform:translate(100px,120px);
            opacity:1;
          }
          30.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          30.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          31.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          31.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          32.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          32.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          32.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          33.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          33.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          34.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          34.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          35% {
            transform:translate(100px,120px);
            opacity:1;
          }
          35.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          35.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          36.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          36.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          37.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          37.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          37.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          38.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          38.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          39.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          39.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          40% {
            transform:translate(100px,120px);
            opacity:1;
          }
          40.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          40.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          41.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          41.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          42.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          42.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          42.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          43.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          43.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          44.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          44.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          45% {
            transform:translate(100px,120px);
            opacity:1;
          }
          45.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          45.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          46.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          46.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          47.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          47.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          47.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          48.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          48.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          49.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          49.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          50% {
            transform:translate(100px,120px);
            opacity:1;
          }
          50.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          50.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          51.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          51.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          52.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          52.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          52.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          53.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          53.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          54.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          54.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          55% {
            transform:translate(100px,120px);
            opacity:1;
          }
          55.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          55.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          56.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          56.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          57.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          57.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          57.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          58.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          58.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          59.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          59.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          60% {
            transform:translate(100px,120px);
            opacity:1;
          }
          60.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          60.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          61.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          61.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          62.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          62.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          62.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          63.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          63.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          64.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          64.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          65% {
            transform:translate(100px,120px);
            opacity:1;
          }
          65.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          65.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          66.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          66.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          67.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          67.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          67.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          68.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          68.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          69.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          69.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          70% {
            transform:translate(100px,120px);
            opacity:1;
          }
          70.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          70.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          71.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          71.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          72.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          72.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          72.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          73.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          73.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          74.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          74.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          75.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          75.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          76.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          76.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          77.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          77.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          77.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          78.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          78.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          79.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          79.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          80% {
            transform:translate(100px,120px);
            opacity:1;
          }
          80.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          80.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          81.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          81.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          82.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          82.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          82.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          83.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          83.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          84.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          84.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          85% {
            transform:translate(100px,120px);
            opacity:1;
          }
          85.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          85.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          86.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          86.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          87.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          87.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          87.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          88.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          88.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          89.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          89.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          90% {
            transform:translate(100px,120px);
            opacity:1;
          }
          90.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          90.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          91.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          91.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          92.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          92.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          92.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          93.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          93.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          94.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          94.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          95% {
            transform:translate(100px,120px);
            opacity:1;
          }
          95.417% {
            transform:translate(100px,120px);
            opacity:1;
          }
          95.833% {
            transform:translate(100px,120px);
            opacity:1;
          }
          96.25% {
            transform:translate(100px,120px);
            opacity:1;
          }
          96.667% {
            transform:translate(100px,120px);
            opacity:1;
          }
          97.083% {
            transform:translate(100px,120px);
            opacity:1;
          }
          97.5% {
            transform:translate(100px,120px);
            opacity:1;
          }
          97.917% {
            transform:translate(100px,120px);
            opacity:1;
          }
          98.333% {
            transform:translate(100px,120px);
            opacity:1;
          }
          98.75% {
            transform:translate(100px,120px);
            opacity:1;
          }
          99.167% {
            transform:translate(100px,120px);
            opacity:1;
          }
          99.583% {
            transform:translate(100px,120px);
            opacity:1;
          }
          100% {
            transform:translate(100px,120px);
            opacity:1;
          }
        }
        @keyframes household13 {
          0% {
            transform:translate(100px,20px);
            opacity:1;
          }
          0.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          0.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          1.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          1.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          2.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          2.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          2.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          3.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          3.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          4.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          4.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          5.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          5.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          6.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          6.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          7.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          7.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          7.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          8.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          8.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          9.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          9.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          10% {
            transform:translate(100px,20px);
            opacity:1;
          }
          10.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          10.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          11.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          11.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          12.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          12.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          12.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          13.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          13.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          14.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          14.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          15% {
            transform:translate(100px,20px);
            opacity:1;
          }
          15.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          15.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          16.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          16.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          17.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          17.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          17.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          18.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          18.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          19.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          19.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          20% {
            transform:translate(100px,20px);
            opacity:1;
          }
          20.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          20.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          21.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          21.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          22.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          22.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          22.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          23.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          23.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          24.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          24.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          25.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          25.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          26.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          26.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          27.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          27.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          27.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          28.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          28.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          29.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          29.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          30% {
            transform:translate(100px,20px);
            opacity:1;
          }
          30.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          30.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          31.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          31.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          32.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          32.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          32.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          33.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          33.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          34.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          34.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          35% {
            transform:translate(100px,20px);
            opacity:1;
          }
          35.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          35.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          36.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          36.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          37.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          37.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          37.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          38.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          38.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          39.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          39.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          40% {
            transform:translate(100px,20px);
            opacity:1;
          }
          40.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          40.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          41.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          41.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          42.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          42.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          42.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          43.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          43.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          44.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          44.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          45% {
            transform:translate(100px,20px);
            opacity:1;
          }
          45.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          45.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          46.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          46.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          47.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          47.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          47.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          48.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          48.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          49.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          49.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          50% {
            transform:translate(100px,20px);
            opacity:1;
          }
          50.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          50.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          51.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          51.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          52.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          52.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          52.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          53.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          53.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          54.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          54.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          55% {
            transform:translate(100px,20px);
            opacity:1;
          }
          55.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          55.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          56.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          56.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          57.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          57.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          57.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          58.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          58.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          59.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          59.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          60% {
            transform:translate(100px,20px);
            opacity:1;
          }
          60.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          60.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          61.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          61.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          62.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          62.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          62.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          63.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          63.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          64.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          64.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          65% {
            transform:translate(100px,20px);
            opacity:1;
          }
          65.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          65.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          66.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          66.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          67.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          67.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          67.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          68.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          68.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          69.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          69.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          70% {
            transform:translate(100px,20px);
            opacity:1;
          }
          70.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          70.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          71.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          71.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          72.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          72.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          72.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          73.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          73.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          74.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          74.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          75.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          75.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          76.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          76.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          77.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          77.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          77.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          78.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          78.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          79.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          79.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          80% {
            transform:translate(100px,20px);
            opacity:1;
          }
          80.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          80.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          81.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          81.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          82.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          82.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          82.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          83.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          83.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          84.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          84.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          85% {
            transform:translate(100px,20px);
            opacity:1;
          }
          85.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          85.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          86.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          86.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          87.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          87.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          87.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          88.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          88.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          89.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          89.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          90% {
            transform:translate(100px,20px);
            opacity:1;
          }
          90.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          90.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          91.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          91.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          92.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          92.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          92.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          93.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          93.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          94.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          94.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          95% {
            transform:translate(100px,20px);
            opacity:1;
          }
          95.417% {
            transform:translate(100px,20px);
            opacity:1;
          }
          95.833% {
            transform:translate(100px,20px);
            opacity:1;
          }
          96.25% {
            transform:translate(100px,20px);
            opacity:1;
          }
          96.667% {
            transform:translate(100px,20px);
            opacity:1;
          }
          97.083% {
            transform:translate(100px,20px);
            opacity:1;
          }
          97.5% {
            transform:translate(100px,20px);
            opacity:1;
          }
          97.917% {
            transform:translate(100px,20px);
            opacity:1;
          }
          98.333% {
            transform:translate(100px,20px);
            opacity:1;
          }
          98.75% {
            transform:translate(100px,20px);
            opacity:1;
          }
          99.167% {
            transform:translate(100px,20px);
            opacity:1;
          }
          99.583% {
            transform:translate(100px,20px);
            opacity:1;
          }
          100% {
            transform:translate(100px,20px);
            opacity:1;
          }
        }
        @keyframes household14 {
          0% {
            transform:translate(120px,80px);
            opacity:1;
          }
          0.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          0.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          1.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          1.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          2.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          2.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          2.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          3.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          3.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          4.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          4.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          5.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          5.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          6.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          6.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          7.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          7.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          7.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          8.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          8.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          9.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          9.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          10% {
            transform:translate(120px,80px);
            opacity:1;
          }
          10.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          10.833% {
            transform:translate(120px,80px);
            opacity:1;
          }
          11.25% {
            transform:translate(120px,80px);
            opacity:1;
          }
          11.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          12.083% {
            transform:translate(120px,80px);
            opacity:1;
          }
          12.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          12.917% {
            transform:translate(120px,80px);
            opacity:1;
          }
          13.333% {
            transform:translate(120px,80px);
            opacity:1;
          }
          13.75% {
            transform:translate(120px,80px);
            opacity:1;
          }
          14.167% {
            transform:translate(120px,80px);
            opacity:1;
          }
          14.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          15% {
            transform:translate(120px,80px);
            opacity:1;
          }
          15.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          15.833% {
            transform:translate(120px,80px);
            opacity:0;
          }
          16.25% {
            transform:translate(120px,80px);
            opacity:0;
          }
          16.667% {
            transform:translate(120px,80px);
            opacity:0;
            opacity:0;
          }
          17.083% {
            transform:translate(20px,40px);
            opacity:0;
            opacity:0;
          }
          17.5% {
            transform:translate(20px,40px);
            opacity:0;
          }
          17.917% {
            transform:translate(20px,40px);
            opacity:0;
          }
          18.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          18.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          19.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          19.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          20% {
            transform:translate(20px,40px);
            opacity:1;
          }
          20.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          20.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          21.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          21.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          22.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          22.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          22.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          23.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          23.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          24.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          24.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          25.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          25.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          26.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          26.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          27.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          27.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          27.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          28.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          28.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          29.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          29.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          30% {
            transform:translate(20px,40px);
            opacity:1;
          }
          30.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          30.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          31.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          31.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          32.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          32.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          32.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          33.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          33.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          34.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          34.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          35% {
            transform:translate(20px,40px);
            opacity:1;
          }
          35.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          35.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          36.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          36.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          37.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          37.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          37.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          38.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          38.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          39.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          39.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          40% {
            transform:translate(20px,40px);
            opacity:1;
          }
          40.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          40.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          41.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          41.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          42.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          42.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          42.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          43.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          43.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          44.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          44.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          45% {
            transform:translate(20px,40px);
            opacity:1;
          }
          45.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          45.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          46.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          46.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          47.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          47.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          47.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          48.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          48.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          49.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          49.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          50% {
            transform:translate(20px,40px);
            opacity:1;
          }
          50.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          50.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          51.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          51.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          52.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          52.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          52.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          53.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          53.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          54.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          54.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          55% {
            transform:translate(20px,40px);
            opacity:1;
          }
          55.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          55.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          56.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          56.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          57.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          57.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          57.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          58.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          58.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          59.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          59.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          60% {
            transform:translate(20px,40px);
            opacity:1;
          }
          60.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          60.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          61.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          61.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          62.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          62.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          62.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          63.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          63.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          64.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          64.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          65% {
            transform:translate(20px,40px);
            opacity:1;
          }
          65.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          65.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          66.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          66.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          67.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          67.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          67.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          68.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          68.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          69.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          69.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          70% {
            transform:translate(20px,40px);
            opacity:1;
          }
          70.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          70.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          71.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          71.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          72.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          72.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          72.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          73.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          73.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          74.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          74.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          75.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          75.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          76.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          76.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          77.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          77.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          77.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          78.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          78.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          79.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          79.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          80% {
            transform:translate(20px,40px);
            opacity:1;
          }
          80.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          80.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          81.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          81.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          82.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          82.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          82.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          83.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          83.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          84.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          84.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          85% {
            transform:translate(20px,40px);
            opacity:1;
          }
          85.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          85.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          86.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          86.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          87.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          87.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          87.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          88.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          88.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          89.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          89.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          90% {
            transform:translate(20px,40px);
            opacity:1;
          }
          90.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          90.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          91.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          91.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          92.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          92.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          92.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          93.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          93.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          94.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          94.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          95% {
            transform:translate(20px,40px);
            opacity:1;
          }
          95.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          95.833% {
            transform:translate(20px,40px);
            opacity:1;
          }
          96.25% {
            transform:translate(20px,40px);
            opacity:1;
          }
          96.667% {
            transform:translate(20px,40px);
            opacity:1;
          }
          97.083% {
            transform:translate(20px,40px);
            opacity:1;
          }
          97.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          97.917% {
            transform:translate(20px,40px);
            opacity:1;
          }
          98.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          98.75% {
            transform:translate(20px,40px);
            opacity:1;
          }
          99.167% {
            transform:translate(20px,40px);
            opacity:1;
          }
          99.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          100% {
            transform:translate(20px,40px);
            opacity:1;
          }
        }
        @keyframes household15 {
          0% {
            transform:translate(60px,40px);
            opacity:1;
          }
          0.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          0.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          1.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          1.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          2.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          2.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          2.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          3.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          3.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          4.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          4.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          5.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          5.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          6.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          6.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          7.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          7.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          7.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          8.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          8.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          9.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          9.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          10% {
            transform:translate(60px,40px);
            opacity:1;
          }
          10.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          10.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          11.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          11.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          12.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          12.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          12.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          13.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          13.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          14.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          14.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          15% {
            transform:translate(60px,40px);
            opacity:1;
          }
          15.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          15.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          16.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          16.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          17.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          17.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          17.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          18.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          18.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          19.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          19.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          20% {
            transform:translate(60px,40px);
            opacity:1;
          }
          20.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          20.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          21.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          21.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          22.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          22.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          22.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          23.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          23.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          24.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          24.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          25.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          25.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          26.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          26.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          27.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          27.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          27.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          28.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          28.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          29.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          29.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          30% {
            transform:translate(60px,40px);
            opacity:1;
          }
          30.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          30.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          31.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          31.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          32.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          32.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          32.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          33.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          33.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          34.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          34.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          35% {
            transform:translate(60px,40px);
            opacity:1;
          }
          35.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          35.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          36.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          36.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          37.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          37.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          37.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          38.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          38.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          39.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          39.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          40% {
            transform:translate(60px,40px);
            opacity:1;
          }
          40.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          40.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          41.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          41.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          42.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          42.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          42.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          43.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          43.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          44.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          44.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          45% {
            transform:translate(60px,40px);
            opacity:1;
          }
          45.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          45.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          46.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          46.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          47.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          47.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          47.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          48.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          48.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          49.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          49.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          50% {
            transform:translate(60px,40px);
            opacity:1;
          }
          50.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          50.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          51.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          51.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          52.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          52.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          52.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          53.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          53.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          54.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          54.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          55% {
            transform:translate(60px,40px);
            opacity:1;
          }
          55.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          55.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          56.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          56.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          57.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          57.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          57.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          58.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          58.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          59.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          59.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          60% {
            transform:translate(60px,40px);
            opacity:1;
          }
          60.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          60.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          61.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          61.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          62.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          62.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          62.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          63.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          63.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          64.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          64.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          65% {
            transform:translate(60px,40px);
            opacity:1;
          }
          65.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          65.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          66.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          66.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          67.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          67.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          67.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          68.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          68.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          69.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          69.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          70% {
            transform:translate(60px,40px);
            opacity:1;
          }
          70.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          70.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          71.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          71.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          72.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          72.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          72.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          73.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          73.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          74.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          74.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          75.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          75.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          76.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          76.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          77.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          77.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          77.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          78.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          78.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          79.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          79.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          80% {
            transform:translate(60px,40px);
            opacity:1;
          }
          80.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          80.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          81.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          81.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          82.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          82.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          82.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          83.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          83.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          84.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          84.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          85% {
            transform:translate(60px,40px);
            opacity:1;
          }
          85.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          85.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          86.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          86.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          87.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          87.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          87.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          88.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          88.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          89.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          89.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          90% {
            transform:translate(60px,40px);
            opacity:1;
          }
          90.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          90.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          91.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          91.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          92.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          92.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          92.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          93.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          93.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          94.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          94.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          95% {
            transform:translate(60px,40px);
            opacity:1;
          }
          95.417% {
            transform:translate(60px,40px);
            opacity:1;
          }
          95.833% {
            transform:translate(60px,40px);
            opacity:1;
          }
          96.25% {
            transform:translate(60px,40px);
            opacity:1;
          }
          96.667% {
            transform:translate(60px,40px);
            opacity:1;
          }
          97.083% {
            transform:translate(60px,40px);
            opacity:1;
          }
          97.5% {
            transform:translate(60px,40px);
            opacity:1;
          }
          97.917% {
            transform:translate(60px,40px);
            opacity:1;
          }
          98.333% {
            transform:translate(60px,40px);
            opacity:1;
          }
          98.75% {
            transform:translate(60px,40px);
            opacity:1;
          }
          99.167% {
            transform:translate(60px,40px);
            opacity:1;
          }
          99.583% {
            transform:translate(60px,40px);
            opacity:1;
          }
          100% {
            transform:translate(60px,40px);
            opacity:1;
          }
        }
        @keyframes household16 {
          0% {
            transform:translate(100px,100px);
            opacity:1;
          }
          0.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          0.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          1.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          1.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          2.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          2.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          2.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          3.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          3.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          4.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          4.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          5.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          5.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          6.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          6.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          7.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          7.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          7.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          8.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          8.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          9.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          9.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          10% {
            transform:translate(100px,100px);
            opacity:1;
          }
          10.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          10.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          11.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          11.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          12.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          12.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          12.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          13.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          13.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          14.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          14.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          15% {
            transform:translate(100px,100px);
            opacity:1;
          }
          15.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          15.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          16.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          16.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          17.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          17.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          17.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          18.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          18.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          19.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          19.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          20% {
            transform:translate(100px,100px);
            opacity:1;
          }
          20.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          20.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          21.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          21.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          22.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          22.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          22.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          23.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          23.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          24.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          24.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          25.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          25.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          26.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          26.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          27.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          27.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          27.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          28.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          28.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          29.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          29.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          30% {
            transform:translate(100px,100px);
            opacity:1;
          }
          30.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          30.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          31.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          31.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          32.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          32.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          32.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          33.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          33.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          34.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          34.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          35% {
            transform:translate(100px,100px);
            opacity:1;
          }
          35.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          35.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          36.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          36.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          37.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          37.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          37.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          38.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          38.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          39.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          39.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          40% {
            transform:translate(100px,100px);
            opacity:1;
          }
          40.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          40.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          41.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          41.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          42.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          42.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          42.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          43.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          43.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          44.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          44.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          45% {
            transform:translate(100px,100px);
            opacity:1;
          }
          45.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          45.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          46.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          46.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          47.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          47.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          47.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          48.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          48.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          49.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          49.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          50% {
            transform:translate(100px,100px);
            opacity:1;
          }
          50.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          50.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          51.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          51.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          52.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          52.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          52.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          53.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          53.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          54.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          54.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          55% {
            transform:translate(100px,100px);
            opacity:1;
          }
          55.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          55.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          56.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          56.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          57.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          57.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          57.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          58.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          58.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          59.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          59.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          60% {
            transform:translate(100px,100px);
            opacity:1;
          }
          60.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          60.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          61.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          61.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          62.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          62.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          62.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          63.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          63.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          64.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          64.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          65% {
            transform:translate(100px,100px);
            opacity:1;
          }
          65.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          65.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          66.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          66.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          67.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          67.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          67.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          68.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          68.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          69.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          69.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          70% {
            transform:translate(100px,100px);
            opacity:1;
          }
          70.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          70.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          71.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          71.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          72.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          72.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          72.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          73.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          73.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          74.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          74.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          75.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          75.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          76.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          76.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          77.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          77.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          77.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          78.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          78.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          79.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          79.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          80% {
            transform:translate(100px,100px);
            opacity:1;
          }
          80.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          80.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          81.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          81.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          82.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          82.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          82.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          83.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          83.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          84.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          84.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          85% {
            transform:translate(100px,100px);
            opacity:1;
          }
          85.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          85.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          86.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          86.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          87.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          87.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          87.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          88.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          88.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          89.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          89.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          90% {
            transform:translate(100px,100px);
            opacity:1;
          }
          90.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          90.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          91.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          91.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          92.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          92.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          92.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          93.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          93.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          94.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          94.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          95% {
            transform:translate(100px,100px);
            opacity:1;
          }
          95.417% {
            transform:translate(100px,100px);
            opacity:1;
          }
          95.833% {
            transform:translate(100px,100px);
            opacity:1;
          }
          96.25% {
            transform:translate(100px,100px);
            opacity:1;
          }
          96.667% {
            transform:translate(100px,100px);
            opacity:1;
          }
          97.083% {
            transform:translate(100px,100px);
            opacity:1;
          }
          97.5% {
            transform:translate(100px,100px);
            opacity:1;
          }
          97.917% {
            transform:translate(100px,100px);
            opacity:1;
          }
          98.333% {
            transform:translate(100px,100px);
            opacity:1;
          }
          98.75% {
            transform:translate(100px,100px);
            opacity:1;
          }
          99.167% {
            transform:translate(100px,100px);
            opacity:1;
          }
          99.583% {
            transform:translate(100px,100px);
            opacity:1;
          }
          100% {
            transform:translate(100px,100px);
            opacity:1;
          }
        }
        @keyframes household17 {
          0% {
            transform:translate(80px,120px);
            opacity:1;
          }
          0.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          0.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          1.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          1.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          2.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          2.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          2.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          3.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          3.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          4.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          4.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          5.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          5.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          6.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          6.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          7.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          7.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          7.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          8.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          8.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          9.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          9.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          10% {
            transform:translate(80px,120px);
            opacity:1;
          }
          10.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          10.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          11.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          11.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          12.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          12.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          12.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          13.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          13.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          14.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          14.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          15% {
            transform:translate(80px,120px);
            opacity:1;
          }
          15.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          15.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          16.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          16.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          17.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          17.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          17.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          18.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          18.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          19.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          19.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          20% {
            transform:translate(80px,120px);
            opacity:1;
          }
          20.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          20.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          21.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          21.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          22.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          22.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          22.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          23.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          23.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          24.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          24.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          25.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          25.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          26.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          26.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          27.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          27.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          27.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          28.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          28.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          29.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          29.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          30% {
            transform:translate(80px,120px);
            opacity:1;
          }
          30.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          30.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          31.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          31.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          32.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          32.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          32.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          33.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          33.75% {
            transform:translate(80px,120px);
            opacity:0;
          }
          34.167% {
            transform:translate(80px,120px);
            opacity:0;
          }
          34.583% {
            transform:translate(80px,120px);
            opacity:0;
          }
          35% {
            transform:translate(60px,100px);
            opacity:0;
          }
          35.417% {
            transform:translate(60px,100px);
            opacity:0;
          }
          35.833% {
            transform:translate(60px,100px);
            opacity:0;
          }
          36.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          36.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          37.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          37.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          37.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          38.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          38.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          39.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          39.583% {
            transform:translate(60px,100px);
            opacity:1;
          }
          40% {
            transform:translate(60px,100px);
            opacity:1;
          }
          40.417% {
            transform:translate(60px,100px);
            opacity:1;
          }
          40.833% {
            transform:translate(60px,100px);
            opacity:1;
          }
          41.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          41.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          42.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          42.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          42.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          43.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          43.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          44.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          44.583% {
            transform:translate(60px,100px);
            opacity:1;
          }
          45% {
            transform:translate(60px,100px);
            opacity:1;
          }
          45.417% {
            transform:translate(60px,100px);
            opacity:1;
          }
          45.833% {
            transform:translate(60px,100px);
            opacity:1;
          }
          46.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          46.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          47.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          47.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          47.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          48.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          48.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          49.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          49.583% {
            transform:translate(60px,100px);
            opacity:1;
          }
          50% {
            transform:translate(60px,100px);
            opacity:1;
          }
          50.417% {
            transform:translate(60px,100px);
            opacity:1;
          }
          50.833% {
            transform:translate(60px,100px);
            opacity:1;
          }
          51.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          51.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          52.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          52.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          52.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          53.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          53.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          54.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          54.583% {
            transform:translate(60px,100px);
            opacity:1;
          }
          55% {
            transform:translate(60px,100px);
            opacity:1;
          }
          55.417% {
            transform:translate(60px,100px);
            opacity:1;
          }
          55.833% {
            transform:translate(60px,100px);
            opacity:1;
          }
          56.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          56.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          57.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          57.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          57.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          58.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          58.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          59.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          59.583% {
            transform:translate(60px,100px);
            opacity:1;
          }
          60% {
            transform:translate(60px,100px);
            opacity:1;
          }
          60.417% {
            transform:translate(60px,100px);
            opacity:1;
          }
          60.833% {
            transform:translate(60px,100px);
            opacity:1;
          }
          61.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          61.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          62.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          62.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          62.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          63.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          63.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          64.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          64.583% {
            transform:translate(60px,100px);
            opacity:1;
          }
          65% {
            transform:translate(60px,100px);
            opacity:1;
          }
          65.417% {
            transform:translate(60px,100px);
            opacity:1;
          }
          65.833% {
            transform:translate(60px,100px);
            opacity:1;
          }
          66.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          66.667% {
            transform:translate(60px,100px);
            opacity:1;
          }
          67.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          67.5% {
            transform:translate(60px,100px);
            opacity:1;
          }
          67.917% {
            transform:translate(60px,100px);
            opacity:1;
          }
          68.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          68.75% {
            transform:translate(60px,100px);
            opacity:1;
          }
          69.167% {
            transform:translate(60px,100px);
            opacity:0;
          }
          69.583% {
            transform:translate(60px,100px);
            opacity:0;
          }
          70% {
            transform:translate(60px,100px);
            opacity:0;
            opacity:0;
          }
          70.417% {
            transform:translate(120px,100px);
            opacity:0;
            opacity:0;
          }
          70.833% {
            transform:translate(120px,100px);
            opacity:0;
          }
          71.25% {
            transform:translate(120px,100px);
            opacity:0;
          }
          71.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          72.083% {
            transform:translate(120px,100px);
            opacity:1;
          }
          72.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          72.917% {
            transform:translate(120px,100px);
            opacity:1;
          }
          73.333% {
            transform:translate(120px,100px);
            opacity:1;
          }
          73.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          74.167% {
            transform:translate(120px,100px);
            opacity:1;
          }
          74.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          75.417% {
            transform:translate(120px,100px);
            opacity:1;
          }
          75.833% {
            transform:translate(120px,100px);
            opacity:1;
          }
          76.25% {
            transform:translate(120px,100px);
            opacity:1;
          }
          76.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          77.083% {
            transform:translate(120px,100px);
            opacity:1;
          }
          77.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          77.917% {
            transform:translate(120px,100px);
            opacity:1;
          }
          78.333% {
            transform:translate(120px,100px);
            opacity:1;
          }
          78.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          79.167% {
            transform:translate(120px,100px);
            opacity:1;
          }
          79.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          80% {
            transform:translate(120px,100px);
            opacity:1;
          }
          80.417% {
            transform:translate(120px,100px);
            opacity:1;
          }
          80.833% {
            transform:translate(120px,100px);
            opacity:1;
          }
          81.25% {
            transform:translate(120px,100px);
            opacity:1;
          }
          81.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          82.083% {
            transform:translate(120px,100px);
            opacity:1;
          }
          82.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          82.917% {
            transform:translate(120px,100px);
            opacity:1;
          }
          83.333% {
            transform:translate(120px,100px);
            opacity:1;
          }
          83.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          84.167% {
            transform:translate(120px,100px);
            opacity:1;
          }
          84.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          85% {
            transform:translate(120px,100px);
            opacity:1;
          }
          85.417% {
            transform:translate(120px,100px);
            opacity:1;
          }
          85.833% {
            transform:translate(120px,100px);
            opacity:1;
          }
          86.25% {
            transform:translate(120px,100px);
            opacity:1;
          }
          86.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          87.083% {
            transform:translate(120px,100px);
            opacity:1;
          }
          87.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          87.917% {
            transform:translate(120px,100px);
            opacity:1;
          }
          88.333% {
            transform:translate(120px,100px);
            opacity:1;
          }
          88.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          89.167% {
            transform:translate(120px,100px);
            opacity:1;
          }
          89.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          90% {
            transform:translate(120px,100px);
            opacity:1;
          }
          90.417% {
            transform:translate(120px,100px);
            opacity:1;
          }
          90.833% {
            transform:translate(120px,100px);
            opacity:1;
          }
          91.25% {
            transform:translate(120px,100px);
            opacity:1;
          }
          91.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          92.083% {
            transform:translate(120px,100px);
            opacity:1;
          }
          92.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          92.917% {
            transform:translate(120px,100px);
            opacity:1;
          }
          93.333% {
            transform:translate(120px,100px);
            opacity:1;
          }
          93.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          94.167% {
            transform:translate(120px,100px);
            opacity:1;
          }
          94.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          95% {
            transform:translate(120px,100px);
            opacity:1;
          }
          95.417% {
            transform:translate(120px,100px);
            opacity:1;
          }
          95.833% {
            transform:translate(120px,100px);
            opacity:1;
          }
          96.25% {
            transform:translate(120px,100px);
            opacity:1;
          }
          96.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          97.083% {
            transform:translate(120px,100px);
            opacity:1;
          }
          97.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          97.917% {
            transform:translate(120px,100px);
            opacity:1;
          }
          98.333% {
            transform:translate(120px,100px);
            opacity:1;
          }
          98.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          99.167% {
            transform:translate(120px,100px);
            opacity:1;
          }
          99.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          100% {
            transform:translate(120px,100px);
            opacity:1;
          }
        }
        @keyframes household18 {
          0% {
            transform:translate(120px,20px);
            opacity:1;
          }
          0.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          0.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          1.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          1.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          2.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          2.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          2.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          3.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          3.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          4.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          4.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          5.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          5.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          6.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          6.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          7.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          7.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          7.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          8.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          8.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          9.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          9.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          10% {
            transform:translate(120px,20px);
            opacity:1;
          }
          10.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          10.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          11.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          11.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          12.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          12.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          12.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          13.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          13.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          14.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          14.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          15% {
            transform:translate(120px,20px);
            opacity:1;
          }
          15.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          15.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          16.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          16.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          17.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          17.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          17.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          18.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          18.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          19.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          19.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          20% {
            transform:translate(120px,20px);
            opacity:1;
          }
          20.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          20.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          21.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          21.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          22.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          22.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          22.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          23.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          23.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          24.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          24.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          25.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          25.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          26.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          26.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          27.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          27.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          27.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          28.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          28.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          29.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          29.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          30% {
            transform:translate(120px,20px);
            opacity:1;
          }
          30.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          30.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          31.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          31.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          32.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          32.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          32.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          33.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          33.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          34.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          34.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          35% {
            transform:translate(120px,20px);
            opacity:1;
          }
          35.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          35.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          36.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          36.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          37.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          37.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          37.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          38.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          38.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          39.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          39.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          40% {
            transform:translate(120px,20px);
            opacity:1;
          }
          40.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          40.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          41.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          41.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          42.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          42.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          42.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          43.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          43.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          44.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          44.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          45% {
            transform:translate(120px,20px);
            opacity:1;
          }
          45.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          45.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          46.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          46.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          47.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          47.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          47.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          48.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          48.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          49.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          49.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          50% {
            transform:translate(120px,20px);
            opacity:1;
          }
          50.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          50.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          51.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          51.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          52.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          52.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          52.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          53.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          53.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          54.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          54.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          55% {
            transform:translate(120px,20px);
            opacity:1;
          }
          55.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          55.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          56.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          56.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          57.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          57.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          57.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          58.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          58.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          59.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          59.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          60% {
            transform:translate(120px,20px);
            opacity:1;
          }
          60.417% {
            transform:translate(120px,20px);
            opacity:0;
          }
          60.833% {
            transform:translate(120px,20px);
            opacity:0;
          }
          61.25% {
            transform:translate(120px,20px);
            opacity:0;
            opacity:0;
          }
          61.667% {
            transform:translate(80px,120px);
            opacity:0;
            opacity:0;
          }
          62.083% {
            transform:translate(80px,120px);
            opacity:0;
          }
          62.5% {
            transform:translate(80px,120px);
            opacity:0;
          }
          62.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          63.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          63.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          64.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          64.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          65% {
            transform:translate(80px,120px);
            opacity:1;
          }
          65.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          65.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          66.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          66.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          67.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          67.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          67.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          68.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          68.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          69.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          69.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          70% {
            transform:translate(80px,120px);
            opacity:1;
          }
          70.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          70.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          71.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          71.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          72.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          72.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          72.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          73.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          73.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          74.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          74.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          75.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          75.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          76.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          76.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          77.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          77.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          77.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          78.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          78.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          79.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          79.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          80% {
            transform:translate(80px,120px);
            opacity:1;
          }
          80.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          80.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          81.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          82.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          82.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          82.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          83.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          84.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          84.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          85% {
            transform:translate(80px,120px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          85.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          86.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          86.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          87.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          87.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          88.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          88.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          89.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          90% {
            transform:translate(80px,120px);
            opacity:1;
          }
          90.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          90.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          91.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          92.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          92.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          92.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          93.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          94.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          94.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          95% {
            transform:translate(80px,120px);
            opacity:1;
          }
          95.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,120px);
            opacity:1;
          }
          96.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          96.667% {
            transform:translate(80px,120px);
            opacity:1;
          }
          97.083% {
            transform:translate(80px,120px);
            opacity:1;
          }
          97.5% {
            transform:translate(80px,120px);
            opacity:1;
          }
          97.917% {
            transform:translate(80px,120px);
            opacity:1;
          }
          98.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          98.75% {
            transform:translate(80px,120px);
            opacity:1;
          }
          99.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          99.583% {
            transform:translate(80px,120px);
            opacity:1;
          }
          100% {
            transform:translate(80px,120px);
            opacity:1;
          }
        }
        @keyframes household19 {
          0% {
            transform:translate(100px,80px);
            opacity:1;
          }
          0.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          0.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          1.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          1.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          2.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          2.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          2.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          3.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          3.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          4.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          4.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          5.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          5.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          6.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          6.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          7.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          7.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          7.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          8.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          8.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          9.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          9.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          10% {
            transform:translate(100px,80px);
            opacity:1;
          }
          10.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          10.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          11.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          11.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          12.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          12.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          12.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          13.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          13.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          14.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          14.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          15% {
            transform:translate(100px,80px);
            opacity:1;
          }
          15.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          15.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          16.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          16.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          17.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          17.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          17.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          18.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          18.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          19.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          19.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          20% {
            transform:translate(100px,80px);
            opacity:1;
          }
          20.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          20.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          21.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          21.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          22.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          22.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          22.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          23.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          23.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          24.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          24.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          25.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          25.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          26.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          26.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          27.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          27.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          27.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          28.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          28.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          29.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          29.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          30% {
            transform:translate(100px,80px);
            opacity:1;
          }
          30.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          30.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          31.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          31.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          32.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          32.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          32.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          33.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          33.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          34.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          34.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          35% {
            transform:translate(100px,80px);
            opacity:1;
          }
          35.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          35.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          36.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          36.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          37.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          37.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          37.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          38.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          38.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          39.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          39.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          40% {
            transform:translate(100px,80px);
            opacity:1;
          }
          40.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          40.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          41.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          41.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          42.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          42.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          42.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          43.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          43.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          44.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          44.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          45% {
            transform:translate(100px,80px);
            opacity:1;
          }
          45.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          45.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          46.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          46.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          47.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          47.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          47.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          48.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          48.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          49.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          49.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          50% {
            transform:translate(100px,80px);
            opacity:1;
          }
          50.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          50.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          51.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          51.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          52.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          52.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          52.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          53.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          53.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          54.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          54.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          55% {
            transform:translate(100px,80px);
            opacity:1;
          }
          55.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          55.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          56.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          56.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          57.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          57.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          57.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          58.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          58.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          59.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          59.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          60% {
            transform:translate(100px,80px);
            opacity:1;
          }
          60.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          60.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          61.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          61.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          62.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          62.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          62.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          63.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          63.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          64.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          64.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          65% {
            transform:translate(100px,80px);
            opacity:1;
          }
          65.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          65.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          66.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          66.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          67.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          67.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          67.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          68.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          68.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          69.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          69.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          70% {
            transform:translate(100px,80px);
            opacity:1;
          }
          70.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          70.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          71.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          71.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          72.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          72.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          72.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          73.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          73.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          74.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          74.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          75.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          75.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          76.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          76.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          77.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          77.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          77.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          78.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          78.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          79.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          79.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          80% {
            transform:translate(100px,80px);
            opacity:1;
          }
          80.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          80.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          81.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          81.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          82.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          82.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          82.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          83.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          83.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          84.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          84.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          85% {
            transform:translate(100px,80px);
            opacity:1;
          }
          85.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          85.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          86.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          86.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          87.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          87.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          87.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          88.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          88.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          89.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          89.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          90% {
            transform:translate(100px,80px);
            opacity:1;
          }
          90.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          90.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          91.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          91.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          92.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          92.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          92.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          93.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          93.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          94.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          94.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          95% {
            transform:translate(100px,80px);
            opacity:1;
          }
          95.417% {
            transform:translate(100px,80px);
            opacity:1;
          }
          95.833% {
            transform:translate(100px,80px);
            opacity:1;
          }
          96.25% {
            transform:translate(100px,80px);
            opacity:1;
          }
          96.667% {
            transform:translate(100px,80px);
            opacity:1;
          }
          97.083% {
            transform:translate(100px,80px);
            opacity:1;
          }
          97.5% {
            transform:translate(100px,80px);
            opacity:1;
          }
          97.917% {
            transform:translate(100px,80px);
            opacity:1;
          }
          98.333% {
            transform:translate(100px,80px);
            opacity:1;
          }
          98.75% {
            transform:translate(100px,80px);
            opacity:1;
          }
          99.167% {
            transform:translate(100px,80px);
            opacity:1;
          }
          99.583% {
            transform:translate(100px,80px);
            opacity:1;
          }
          100% {
            transform:translate(100px,80px);
            opacity:1;
          }
        }
        @keyframes household20 {
          0% {
            transform:translate(60px,80px);
            opacity:1;
          }
          0.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          0.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          1.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          1.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          2.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          2.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          2.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          3.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          3.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          4.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          4.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          5.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          5.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          6.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          6.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          7.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          7.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          7.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          8.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          8.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          9.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          9.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          10% {
            transform:translate(60px,80px);
            opacity:1;
          }
          10.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          10.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          11.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          11.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          12.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          12.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          12.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          13.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          13.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          14.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          14.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          15% {
            transform:translate(60px,80px);
            opacity:1;
          }
          15.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          15.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          16.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          16.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          17.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          17.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          17.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          18.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          18.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          19.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          19.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          20% {
            transform:translate(60px,80px);
            opacity:1;
          }
          20.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          20.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          21.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          21.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          22.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          22.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          22.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          23.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          23.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          24.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          24.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          25.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          25.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          26.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          26.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          27.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          27.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          27.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          28.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          28.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          29.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          29.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          30% {
            transform:translate(60px,80px);
            opacity:1;
          }
          30.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          30.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          31.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          31.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          32.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          32.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          32.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          33.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          33.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          34.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          34.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          35% {
            transform:translate(60px,80px);
            opacity:1;
          }
          35.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          35.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          36.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          36.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          37.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          37.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          37.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          38.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          38.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          39.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          39.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          40% {
            transform:translate(60px,80px);
            opacity:1;
          }
          40.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          40.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          41.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          41.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          42.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          42.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          42.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          43.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          43.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          44.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          44.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          45% {
            transform:translate(60px,80px);
            opacity:1;
          }
          45.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          45.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          46.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          46.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          47.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          47.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          47.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          48.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          48.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          49.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          49.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          50% {
            transform:translate(60px,80px);
            opacity:1;
          }
          50.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          50.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          51.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          51.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          52.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          52.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          52.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          53.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          53.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          54.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          54.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          55% {
            transform:translate(60px,80px);
            opacity:1;
          }
          55.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          55.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          56.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          56.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          57.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          57.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          57.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          58.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          58.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          59.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          59.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          60% {
            transform:translate(60px,80px);
            opacity:1;
          }
          60.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          60.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          61.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          61.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          62.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          62.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          62.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          63.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          63.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          64.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          64.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          65% {
            transform:translate(60px,80px);
            opacity:1;
          }
          65.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          65.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          66.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          66.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          67.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          67.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          67.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          68.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          68.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          69.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          69.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          70% {
            transform:translate(60px,80px);
            opacity:1;
          }
          70.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          70.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          71.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          71.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          72.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          72.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          72.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          73.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          73.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          74.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          74.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          75.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          75.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          76.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          76.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          77.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          77.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          77.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          78.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          78.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          79.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          79.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          80% {
            transform:translate(60px,80px);
            opacity:1;
          }
          80.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          80.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          81.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          81.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          82.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          82.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          82.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          83.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          83.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          84.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          84.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          85% {
            transform:translate(60px,80px);
            opacity:1;
          }
          85.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          85.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          86.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          86.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          87.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          87.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          87.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          88.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          88.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          89.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          89.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          90% {
            transform:translate(60px,80px);
            opacity:1;
          }
          90.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          90.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          91.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          91.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          92.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          92.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          92.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          93.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          93.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          94.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          94.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          95% {
            transform:translate(60px,80px);
            opacity:1;
          }
          95.417% {
            transform:translate(60px,80px);
            opacity:1;
          }
          95.833% {
            transform:translate(60px,80px);
            opacity:1;
          }
          96.25% {
            transform:translate(60px,80px);
            opacity:1;
          }
          96.667% {
            transform:translate(60px,80px);
            opacity:1;
          }
          97.083% {
            transform:translate(60px,80px);
            opacity:1;
          }
          97.5% {
            transform:translate(60px,80px);
            opacity:1;
          }
          97.917% {
            transform:translate(60px,80px);
            opacity:1;
          }
          98.333% {
            transform:translate(60px,80px);
            opacity:1;
          }
          98.75% {
            transform:translate(60px,80px);
            opacity:1;
          }
          99.167% {
            transform:translate(60px,80px);
            opacity:1;
          }
          99.583% {
            transform:translate(60px,80px);
            opacity:1;
          }
          100% {
            transform:translate(60px,80px);
            opacity:1;
          }
        }
        @keyframes household21 {
          0% {
            transform:translate(80px,40px);
            opacity:1;
          }
          0.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          0.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          1.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          1.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          2.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          2.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          2.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          3.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          3.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          4.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          4.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          5.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          5.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          6.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          6.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          7.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          7.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          7.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          8.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          8.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          9.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          9.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          10% {
            transform:translate(80px,40px);
            opacity:1;
          }
          10.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          10.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          11.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          11.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          12.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          12.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          12.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          13.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          13.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          14.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          14.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          15% {
            transform:translate(80px,40px);
            opacity:1;
          }
          15.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          15.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          16.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          16.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          17.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          17.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          17.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          18.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          18.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          19.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          19.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          20% {
            transform:translate(80px,40px);
            opacity:1;
          }
          20.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          20.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          21.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          21.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          22.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          22.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          22.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          23.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          23.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          24.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          24.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          25.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          25.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          26.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          26.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          27.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          27.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          27.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          28.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          28.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          29.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          29.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          30% {
            transform:translate(80px,40px);
            opacity:1;
          }
          30.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          30.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          31.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          31.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          32.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          32.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          32.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          33.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          33.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          34.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          34.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          35% {
            transform:translate(80px,40px);
            opacity:1;
          }
          35.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          35.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          36.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          36.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          37.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          37.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          37.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          38.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          38.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          39.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          39.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          40% {
            transform:translate(80px,40px);
            opacity:1;
          }
          40.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          40.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          41.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          41.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          42.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          42.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          42.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          43.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          43.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          44.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          44.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          45% {
            transform:translate(80px,40px);
            opacity:1;
          }
          45.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          45.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          46.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          46.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          47.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          47.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          47.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          48.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          48.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          49.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          49.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          50% {
            transform:translate(80px,40px);
            opacity:1;
          }
          50.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          50.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          51.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          51.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          52.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          52.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          52.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          53.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          53.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          54.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          54.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          55% {
            transform:translate(80px,40px);
            opacity:1;
          }
          55.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          55.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          56.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          56.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          57.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          57.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          57.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          58.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          58.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          59.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          59.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          60% {
            transform:translate(80px,40px);
            opacity:1;
          }
          60.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          60.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          61.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          61.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          62.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          62.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          62.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          63.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          63.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          64.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          64.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          65% {
            transform:translate(80px,40px);
            opacity:1;
          }
          65.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          65.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          66.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          66.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          67.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          67.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          67.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          68.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          68.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          69.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          69.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          70% {
            transform:translate(80px,40px);
            opacity:1;
          }
          70.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          70.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          71.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          71.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          72.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          72.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          72.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          73.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          73.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          74.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          74.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          75.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          75.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          76.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          76.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          77.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          77.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          77.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          78.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          78.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          79.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          79.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          80% {
            transform:translate(80px,40px);
            opacity:1;
          }
          80.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          80.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          81.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          82.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          82.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          82.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          83.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          84.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          84.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          85% {
            transform:translate(80px,40px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          85.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          86.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          86.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          87.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          87.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          88.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          88.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          89.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          90% {
            transform:translate(80px,40px);
            opacity:1;
          }
          90.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          90.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          91.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          92.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          92.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          92.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          93.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          94.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          94.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          95% {
            transform:translate(80px,40px);
            opacity:1;
          }
          95.417% {
            transform:translate(80px,40px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,40px);
            opacity:1;
          }
          96.25% {
            transform:translate(80px,40px);
            opacity:1;
          }
          96.667% {
            transform:translate(80px,40px);
            opacity:1;
          }
          97.083% {
            transform:translate(80px,40px);
            opacity:1;
          }
          97.5% {
            transform:translate(80px,40px);
            opacity:1;
          }
          97.917% {
            transform:translate(80px,40px);
            opacity:1;
          }
          98.333% {
            transform:translate(80px,40px);
            opacity:1;
          }
          98.75% {
            transform:translate(80px,40px);
            opacity:1;
          }
          99.167% {
            transform:translate(80px,40px);
            opacity:1;
          }
          99.583% {
            transform:translate(80px,40px);
            opacity:1;
          }
          100% {
            transform:translate(80px,40px);
            opacity:1;
          }
        }
        @keyframes household22 {
          0% {
            transform:translate(40px,20px);
            opacity:1;
          }
          0.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          0.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          1.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          1.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          2.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          2.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          2.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          3.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          3.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          4.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          4.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          5.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          5.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          6.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          6.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          7.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          7.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          7.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          8.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          8.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          9.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          9.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          10% {
            transform:translate(40px,20px);
            opacity:1;
          }
          10.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          10.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          11.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          11.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          12.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          12.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          12.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          13.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          13.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          14.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          14.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          15% {
            transform:translate(40px,20px);
            opacity:1;
          }
          15.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          15.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          16.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          16.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          17.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          17.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          17.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          18.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          18.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          19.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          19.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          20% {
            transform:translate(40px,20px);
            opacity:1;
          }
          20.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          20.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          21.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          21.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          22.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          22.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          22.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          23.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          23.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          24.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          24.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          25.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          25.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          26.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          26.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          27.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          27.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          27.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          28.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          28.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          29.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          29.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          30% {
            transform:translate(40px,20px);
            opacity:1;
          }
          30.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          30.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          31.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          31.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          32.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          32.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          32.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          33.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          33.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          34.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          34.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          35% {
            transform:translate(40px,20px);
            opacity:1;
          }
          35.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          35.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          36.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          36.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          37.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          37.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          37.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          38.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          38.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          39.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          39.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          40% {
            transform:translate(40px,20px);
            opacity:1;
          }
          40.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          40.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          41.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          41.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          42.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          42.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          42.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          43.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          43.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          44.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          44.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          45% {
            transform:translate(40px,20px);
            opacity:1;
          }
          45.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          45.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          46.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          46.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          47.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          47.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          47.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          48.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          48.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          49.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          49.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          50% {
            transform:translate(40px,20px);
            opacity:1;
          }
          50.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          50.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          51.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          51.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          52.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          52.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          52.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          53.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          53.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          54.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          54.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          55% {
            transform:translate(40px,20px);
            opacity:1;
          }
          55.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          55.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          56.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          56.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          57.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          57.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          57.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          58.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          58.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          59.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          59.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          60% {
            transform:translate(40px,20px);
            opacity:1;
          }
          60.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          60.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          61.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          61.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          62.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          62.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          62.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          63.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          63.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          64.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          64.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          65% {
            transform:translate(40px,20px);
            opacity:1;
          }
          65.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          65.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          66.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          66.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          67.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          67.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          67.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          68.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          68.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          69.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          69.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          70% {
            transform:translate(40px,20px);
            opacity:1;
          }
          70.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          70.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          71.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          71.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          72.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          72.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          72.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          73.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          73.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          74.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          74.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          75.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          75.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          76.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          76.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          77.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          77.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          77.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          78.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          78.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          79.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          79.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          80% {
            transform:translate(40px,20px);
            opacity:1;
          }
          80.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          80.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          81.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          81.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          82.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          82.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          82.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          83.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          83.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          84.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          84.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          85% {
            transform:translate(40px,20px);
            opacity:1;
          }
          85.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          85.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          86.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          86.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          87.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          87.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          87.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          88.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          88.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          89.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          89.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          90% {
            transform:translate(40px,20px);
            opacity:1;
          }
          90.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          90.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          91.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          91.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          92.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          92.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          92.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          93.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          93.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          94.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          94.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          95% {
            transform:translate(40px,20px);
            opacity:1;
          }
          95.417% {
            transform:translate(40px,20px);
            opacity:1;
          }
          95.833% {
            transform:translate(40px,20px);
            opacity:1;
          }
          96.25% {
            transform:translate(40px,20px);
            opacity:1;
          }
          96.667% {
            transform:translate(40px,20px);
            opacity:1;
          }
          97.083% {
            transform:translate(40px,20px);
            opacity:1;
          }
          97.5% {
            transform:translate(40px,20px);
            opacity:1;
          }
          97.917% {
            transform:translate(40px,20px);
            opacity:1;
          }
          98.333% {
            transform:translate(40px,20px);
            opacity:1;
          }
          98.75% {
            transform:translate(40px,20px);
            opacity:1;
          }
          99.167% {
            transform:translate(40px,20px);
            opacity:1;
          }
          99.583% {
            transform:translate(40px,20px);
            opacity:1;
          }
          100% {
            transform:translate(40px,20px);
            opacity:1;
          }
        }
        @keyframes household23 {
          0% {
            transform:translate(60px,120px);
            opacity:1;
          }
          0.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          0.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          1.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          1.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          2.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          2.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          2.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          3.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          3.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          4.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          4.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          5.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          5.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          6.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          6.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          7.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          7.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          7.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          8.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          8.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          9.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          9.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          10% {
            transform:translate(60px,120px);
            opacity:1;
          }
          10.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          10.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          11.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          11.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          12.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          12.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          12.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          13.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          13.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          14.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          14.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          15% {
            transform:translate(60px,120px);
            opacity:1;
          }
          15.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          15.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          16.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          16.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          17.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          17.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          17.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          18.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          18.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          19.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          19.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          20% {
            transform:translate(60px,120px);
            opacity:1;
          }
          20.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          20.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          21.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          21.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          22.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          22.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          22.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          23.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          23.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          24.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          24.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          25.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          25.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          26.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          26.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          27.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          27.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          27.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          28.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          28.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          29.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          29.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          30% {
            transform:translate(60px,120px);
            opacity:1;
          }
          30.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          30.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          31.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          31.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          32.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          32.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          32.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          33.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          33.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          34.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          34.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          35% {
            transform:translate(60px,120px);
            opacity:1;
          }
          35.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          35.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          36.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          36.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          37.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          37.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          37.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          38.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          38.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          39.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          39.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          40% {
            transform:translate(60px,120px);
            opacity:1;
          }
          40.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          40.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          41.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          41.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          42.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          42.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          42.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          43.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          43.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          44.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          44.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          45% {
            transform:translate(60px,120px);
            opacity:1;
          }
          45.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          45.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          46.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          46.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          47.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          47.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          47.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          48.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          48.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          49.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          49.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          50% {
            transform:translate(60px,120px);
            opacity:1;
          }
          50.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          50.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          51.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          51.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          52.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          52.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          52.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          53.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          53.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          54.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          54.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          55% {
            transform:translate(60px,120px);
            opacity:1;
          }
          55.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          55.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          56.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          56.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          57.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          57.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          57.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          58.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          58.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          59.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          59.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          60% {
            transform:translate(60px,120px);
            opacity:1;
          }
          60.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          60.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          61.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          61.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          62.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          62.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          62.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          63.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          63.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          64.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          64.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          65% {
            transform:translate(60px,120px);
            opacity:1;
          }
          65.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          65.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          66.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          66.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          67.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          67.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          67.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          68.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          68.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          69.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          69.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          70% {
            transform:translate(60px,120px);
            opacity:1;
          }
          70.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          70.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          71.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          71.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          72.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          72.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          72.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          73.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          73.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          74.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          74.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          75.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          75.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          76.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          76.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          77.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          77.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          77.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          78.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          78.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          79.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          79.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          80% {
            transform:translate(60px,120px);
            opacity:1;
          }
          80.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          80.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          81.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          81.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          82.083% {
            transform:translate(60px,120px);
            opacity:1;
          }
          82.5% {
            transform:translate(60px,120px);
            opacity:1;
          }
          82.917% {
            transform:translate(60px,120px);
            opacity:1;
          }
          83.333% {
            transform:translate(60px,120px);
            opacity:1;
          }
          83.75% {
            transform:translate(60px,120px);
            opacity:1;
          }
          84.167% {
            transform:translate(60px,120px);
            opacity:1;
          }
          84.583% {
            transform:translate(60px,120px);
            opacity:1;
          }
          85% {
            transform:translate(60px,120px);
            opacity:1;
          }
          85.417% {
            transform:translate(60px,120px);
            opacity:1;
          }
          85.833% {
            transform:translate(60px,120px);
            opacity:1;
          }
          86.25% {
            transform:translate(60px,120px);
            opacity:1;
          }
          86.667% {
            transform:translate(60px,120px);
            opacity:1;
          }
          87.083% {
            transform:translate(60px,120px);
            opacity:0;
          }
          87.5% {
            transform:translate(60px,120px);
            opacity:0;
          }
          87.917% {
            transform:translate(60px,120px);
            opacity:0;
            opacity:0;
          }
          88.333% {
            transform:translate(120px,20px);
            opacity:0;
            opacity:0;
          }
          88.75% {
            transform:translate(120px,20px);
            opacity:0;
          }
          89.167% {
            transform:translate(120px,20px);
            opacity:0;
          }
          89.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          90% {
            transform:translate(120px,20px);
            opacity:1;
          }
          90.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          90.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          91.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          91.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          92.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          92.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          92.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          93.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          93.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          94.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          94.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          95% {
            transform:translate(120px,20px);
            opacity:1;
          }
          95.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          95.833% {
            transform:translate(120px,20px);
            opacity:1;
          }
          96.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          96.667% {
            transform:translate(120px,20px);
            opacity:1;
          }
          97.083% {
            transform:translate(120px,20px);
            opacity:1;
          }
          97.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          97.917% {
            transform:translate(120px,20px);
            opacity:1;
          }
          98.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          98.75% {
            transform:translate(120px,20px);
            opacity:1;
          }
          99.167% {
            transform:translate(120px,20px);
            opacity:1;
          }
          99.583% {
            transform:translate(120px,20px);
            opacity:1;
          }
          100% {
            transform:translate(120px,20px);
            opacity:1;
          }
        }
        @keyframes household24 {
          0% {
            transform:translate(60px,20px);
            opacity:1;
          }
          0.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          0.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          1.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          1.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          2.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          2.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          2.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          3.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          3.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          4.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          4.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          5.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          5.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          6.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          6.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          7.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          7.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          7.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          8.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          8.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          9.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          9.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          10% {
            transform:translate(60px,20px);
            opacity:1;
          }
          10.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          10.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          11.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          11.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          12.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          12.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          12.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          13.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          13.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          14.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          14.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          15% {
            transform:translate(60px,20px);
            opacity:1;
          }
          15.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          15.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          16.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          16.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          17.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          17.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          17.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          18.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          18.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          19.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          19.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          20% {
            transform:translate(60px,20px);
            opacity:1;
          }
          20.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          20.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          21.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          21.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          22.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          22.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          22.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          23.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          23.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          24.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          24.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          25.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          25.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          26.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          26.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          27.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          27.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          27.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          28.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          28.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          29.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          29.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          30% {
            transform:translate(60px,20px);
            opacity:1;
          }
          30.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          30.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          31.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          31.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          32.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          32.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          32.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          33.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          33.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          34.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          34.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          35% {
            transform:translate(60px,20px);
            opacity:1;
          }
          35.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          35.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          36.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          36.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          37.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          37.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          37.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          38.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          38.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          39.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          39.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          40% {
            transform:translate(60px,20px);
            opacity:1;
          }
          40.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          40.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          41.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          41.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          42.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          42.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          42.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          43.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          43.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          44.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          44.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          45% {
            transform:translate(60px,20px);
            opacity:1;
          }
          45.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          45.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          46.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          46.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          47.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          47.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          47.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          48.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          48.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          49.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          49.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          50% {
            transform:translate(60px,20px);
            opacity:1;
          }
          50.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          50.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          51.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          51.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          52.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          52.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          52.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          53.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          53.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          54.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          54.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          55% {
            transform:translate(60px,20px);
            opacity:1;
          }
          55.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          55.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          56.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          56.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          57.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          57.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          57.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          58.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          58.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          59.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          59.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          60% {
            transform:translate(60px,20px);
            opacity:1;
          }
          60.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          60.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          61.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          61.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          62.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          62.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          62.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          63.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          63.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          64.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          64.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          65% {
            transform:translate(60px,20px);
            opacity:1;
          }
          65.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          65.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          66.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          66.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          67.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          67.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          67.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          68.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          68.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          69.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          69.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          70% {
            transform:translate(60px,20px);
            opacity:1;
          }
          70.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          70.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          71.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          71.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          72.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          72.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          72.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          73.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          73.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          74.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          74.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          75.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          75.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          76.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          76.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          77.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          77.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          77.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          78.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          78.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          79.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          79.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          80% {
            transform:translate(60px,20px);
            opacity:1;
          }
          80.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          80.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          81.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          81.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          82.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          82.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          82.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          83.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          83.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          84.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          84.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          85% {
            transform:translate(60px,20px);
            opacity:1;
          }
          85.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          85.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          86.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          86.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          87.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          87.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          87.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          88.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          88.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          89.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          89.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          90% {
            transform:translate(60px,20px);
            opacity:1;
          }
          90.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          90.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          91.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          91.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          92.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          92.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          92.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          93.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          93.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          94.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          94.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          95% {
            transform:translate(60px,20px);
            opacity:1;
          }
          95.417% {
            transform:translate(60px,20px);
            opacity:1;
          }
          95.833% {
            transform:translate(60px,20px);
            opacity:1;
          }
          96.25% {
            transform:translate(60px,20px);
            opacity:1;
          }
          96.667% {
            transform:translate(60px,20px);
            opacity:1;
          }
          97.083% {
            transform:translate(60px,20px);
            opacity:1;
          }
          97.5% {
            transform:translate(60px,20px);
            opacity:1;
          }
          97.917% {
            transform:translate(60px,20px);
            opacity:1;
          }
          98.333% {
            transform:translate(60px,20px);
            opacity:1;
          }
          98.75% {
            transform:translate(60px,20px);
            opacity:1;
          }
          99.167% {
            transform:translate(60px,20px);
            opacity:1;
          }
          99.583% {
            transform:translate(60px,20px);
            opacity:1;
          }
          100% {
            transform:translate(60px,20px);
            opacity:1;
          }
        }
        @keyframes household25 {
          0% {
            transform:translate(20px,80px);
            opacity:1;
          }
          0.417% {
            transform:translate(20px,80px);
            opacity:1;
          }
          0.833% {
            transform:translate(20px,80px);
            opacity:1;
          }
          1.25% {
            transform:translate(20px,80px);
            opacity:1;
          }
          1.667% {
            transform:translate(20px,80px);
            opacity:1;
          }
          2.083% {
            transform:translate(20px,80px);
            opacity:1;
          }
          2.5% {
            transform:translate(20px,80px);
            opacity:1;
          }
          2.917% {
            transform:translate(20px,80px);
            opacity:1;
          }
          3.333% {
            transform:translate(20px,80px);
            opacity:1;
          }
          3.75% {
            transform:translate(20px,80px);
            opacity:1;
          }
          4.167% {
            transform:translate(20px,80px);
            opacity:1;
          }
          4.583% {
            transform:translate(20px,80px);
            opacity:1;
          }
          5% {
            transform:translate(20px,80px);
            opacity:1;
          }
          5.417% {
            transform:translate(20px,80px);
            opacity:1;
          }
          5.833% {
            transform:translate(20px,80px);
            opacity:1;
          }
          6.25% {
            transform:translate(20px,80px);
            opacity:1;
          }
          6.667% {
            transform:translate(20px,80px);
            opacity:1;
          }
          7.083% {
            transform:translate(20px,80px);
            opacity:1;
          }
          7.5% {
            transform:translate(20px,80px);
            opacity:1;
          }
          7.917% {
            transform:translate(20px,80px);
            opacity:1;
          }
          8.333% {
            transform:translate(20px,80px);
            opacity:1;
          }
          8.75% {
            transform:translate(20px,80px);
            opacity:1;
          }
          9.167% {
            transform:translate(20px,80px);
            opacity:1;
          }
          9.583% {
            transform:translate(20px,80px);
            opacity:1;
          }
          10% {
            transform:translate(20px,80px);
            opacity:1;
          }
          10.417% {
            transform:translate(20px,80px);
            opacity:1;
          }
          10.833% {
            transform:translate(20px,80px);
            opacity:1;
          }
          11.25% {
            transform:translate(20px,80px);
            opacity:1;
          }
          11.667% {
            transform:translate(20px,80px);
            opacity:1;
          }
          12.083% {
            transform:translate(20px,80px);
            opacity:1;
          }
          12.5% {
            transform:translate(20px,80px);
            opacity:1;
          }
          12.917% {
            transform:translate(20px,80px);
            opacity:1;
          }
          13.333% {
            transform:translate(20px,80px);
            opacity:1;
          }
          13.75% {
            transform:translate(20px,80px);
            opacity:1;
          }
          14.167% {
            transform:translate(20px,80px);
            opacity:1;
          }
          14.583% {
            transform:translate(20px,80px);
            opacity:1;
          }
          15% {
            transform:translate(20px,80px);
            opacity:1;
          }
          15.417% {
            transform:translate(20px,80px);
            opacity:1;
          }
          15.833% {
            transform:translate(20px,80px);
            opacity:1;
          }
          16.25% {
            transform:translate(20px,80px);
            opacity:1;
          }
          16.667% {
            transform:translate(20px,80px);
            opacity:1;
          }
          17.083% {
            transform:translate(20px,80px);
            opacity:1;
          }
          17.5% {
            transform:translate(20px,80px);
            opacity:1;
          }
          17.917% {
            transform:translate(20px,80px);
            opacity:1;
          }
          18.333% {
            transform:translate(20px,80px);
            opacity:1;
          }
          18.75% {
            transform:translate(20px,80px);
            opacity:1;
          }
          19.167% {
            transform:translate(20px,80px);
            opacity:1;
          }
          19.583% {
            transform:translate(20px,80px);
            opacity:1;
          }
          20% {
            transform:translate(20px,80px);
            opacity:1;
          }
          20.417% {
            transform:translate(20px,80px);
            opacity:1;
          }
          20.833% {
            transform:translate(20px,80px);
            opacity:1;
          }
          21.25% {
            transform:translate(20px,80px);
            opacity:1;
          }
          21.667% {
            transform:translate(20px,80px);
            opacity:1;
          }
          22.083% {
            transform:translate(20px,80px);
            opacity:1;
          }
          22.5% {
            transform:translate(20px,80px);
            opacity:1;
          }
          22.917% {
            transform:translate(20px,80px);
            opacity:1;
          }
          23.333% {
            transform:translate(20px,80px);
            opacity:1;
          }
          23.75% {
            transform:translate(20px,80px);
            opacity:1;
          }
          24.167% {
            transform:translate(20px,80px);
            opacity:1;
          }
          24.583% {
            transform:translate(20px,80px);
            opacity:0;
          }
          25% {
            transform:translate(20px,80px);
            opacity:0;
          }
          25.417% {
            transform:translate(20px,80px);
            opacity:0;
            opacity:0;
          }
          25.833% {
            transform:translate(120px,60px);
            opacity:0;
            opacity:0;
          }
          26.25% {
            transform:translate(120px,60px);
            opacity:0;
          }
          26.667% {
            transform:translate(120px,60px);
            opacity:0;
          }
          27.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          27.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          27.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          28.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          28.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          29.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          29.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          30% {
            transform:translate(120px,60px);
            opacity:1;
          }
          30.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          30.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          31.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          31.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          32.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          32.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          32.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          33.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          33.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          34.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          34.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          35% {
            transform:translate(120px,60px);
            opacity:1;
          }
          35.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          35.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          36.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          36.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          37.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          37.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          37.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          38.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          38.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          39.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          39.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          40% {
            transform:translate(120px,60px);
            opacity:1;
          }
          40.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          40.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          41.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          41.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          42.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          42.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          42.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          43.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          43.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          44.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          44.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          45% {
            transform:translate(120px,60px);
            opacity:1;
          }
          45.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          45.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          46.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          46.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          47.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          47.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          47.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          48.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          48.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          49.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          49.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          50% {
            transform:translate(120px,60px);
            opacity:1;
          }
          50.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          50.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          51.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          51.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          52.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          52.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          52.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          53.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          53.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          54.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          54.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          55% {
            transform:translate(120px,60px);
            opacity:1;
          }
          55.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          55.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          56.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          56.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          57.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          57.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          57.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          58.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          58.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          59.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          59.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          60% {
            transform:translate(120px,60px);
            opacity:1;
          }
          60.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          60.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          61.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          61.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          62.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          62.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          62.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          63.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          63.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          64.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          64.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          65% {
            transform:translate(120px,60px);
            opacity:1;
          }
          65.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          65.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          66.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          66.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          67.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          67.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          67.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          68.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          68.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          69.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          69.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          70% {
            transform:translate(120px,60px);
            opacity:1;
          }
          70.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          70.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          71.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          71.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          72.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          72.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          72.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          73.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          73.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          74.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          74.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          75.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          75.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          76.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          76.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          77.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          77.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          77.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          78.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          78.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          79.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          79.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          80% {
            transform:translate(120px,60px);
            opacity:1;
          }
          80.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          80.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          81.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          81.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          82.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          82.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          82.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          83.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          83.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          84.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          84.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          85% {
            transform:translate(120px,60px);
            opacity:1;
          }
          85.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          85.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          86.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          86.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          87.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          87.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          87.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          88.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          88.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          89.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          89.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          90% {
            transform:translate(120px,60px);
            opacity:1;
          }
          90.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          90.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          91.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          91.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          92.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          92.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          92.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          93.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          93.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          94.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          94.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          95% {
            transform:translate(120px,60px);
            opacity:1;
          }
          95.417% {
            transform:translate(120px,60px);
            opacity:1;
          }
          95.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          96.25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          96.667% {
            transform:translate(120px,60px);
            opacity:1;
          }
          97.083% {
            transform:translate(120px,60px);
            opacity:1;
          }
          97.5% {
            transform:translate(120px,60px);
            opacity:1;
          }
          97.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          98.333% {
            transform:translate(120px,60px);
            opacity:1;
          }
          98.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          99.167% {
            transform:translate(120px,60px);
            opacity:1;
          }
          99.583% {
            transform:translate(120px,60px);
            opacity:1;
          }
          100% {
            transform:translate(120px,60px);
            opacity:1;
          }
        }
        @keyframes household26 {
          0% {
            transform:translate(40px,80px);
            opacity:1;
          }
          0.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          0.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          1.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          1.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          2.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          2.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          2.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          3.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          3.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          4.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          4.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          5.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          5.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          6.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          6.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          7.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          7.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          7.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          8.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          8.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          9.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          9.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          10% {
            transform:translate(40px,80px);
            opacity:1;
          }
          10.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          10.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          11.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          11.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          12.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          12.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          12.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          13.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          13.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          14.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          14.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          15% {
            transform:translate(40px,80px);
            opacity:1;
          }
          15.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          15.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          16.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          16.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          17.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          17.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          17.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          18.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          18.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          19.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          19.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          20% {
            transform:translate(40px,80px);
            opacity:1;
          }
          20.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          20.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          21.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          21.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          22.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          22.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          22.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          23.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          23.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          24.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          24.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          25.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          25.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          26.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          26.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          27.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          27.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          27.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          28.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          28.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          29.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          29.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          30% {
            transform:translate(40px,80px);
            opacity:1;
          }
          30.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          30.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          31.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          31.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          32.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          32.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          32.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          33.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          33.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          34.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          34.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          35% {
            transform:translate(40px,80px);
            opacity:1;
          }
          35.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          35.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          36.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          36.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          37.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          37.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          37.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          38.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          38.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          39.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          39.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          40% {
            transform:translate(40px,80px);
            opacity:1;
          }
          40.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          40.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          41.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          41.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          42.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          42.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          42.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          43.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          43.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          44.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          44.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          45% {
            transform:translate(40px,80px);
            opacity:1;
          }
          45.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          45.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          46.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          46.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          47.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          47.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          47.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          48.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          48.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          49.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          49.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          50% {
            transform:translate(40px,80px);
            opacity:1;
          }
          50.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          50.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          51.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          51.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          52.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          52.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          52.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          53.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          53.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          54.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          54.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          55% {
            transform:translate(40px,80px);
            opacity:1;
          }
          55.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          55.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          56.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          56.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          57.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          57.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          57.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          58.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          58.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          59.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          59.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          60% {
            transform:translate(40px,80px);
            opacity:1;
          }
          60.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          60.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          61.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          61.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          62.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          62.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          62.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          63.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          63.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          64.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          64.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          65% {
            transform:translate(40px,80px);
            opacity:1;
          }
          65.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          65.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          66.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          66.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          67.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          67.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          67.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          68.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          68.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          69.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          69.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          70% {
            transform:translate(40px,80px);
            opacity:1;
          }
          70.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          70.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          71.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          71.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          72.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          72.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          72.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          73.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          73.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          74.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          74.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          75.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          75.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          76.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          76.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          77.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          77.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          77.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          78.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          78.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          79.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          79.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          80% {
            transform:translate(40px,80px);
            opacity:1;
          }
          80.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          80.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          81.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          81.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          82.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          82.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          82.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          83.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          83.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          84.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          84.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          85% {
            transform:translate(40px,80px);
            opacity:1;
          }
          85.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          85.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          86.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          86.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          87.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          87.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          87.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          88.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          88.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          89.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          89.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          90% {
            transform:translate(40px,80px);
            opacity:1;
          }
          90.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          90.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          91.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          91.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          92.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          92.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          92.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          93.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          93.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          94.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          94.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          95% {
            transform:translate(40px,80px);
            opacity:1;
          }
          95.417% {
            transform:translate(40px,80px);
            opacity:1;
          }
          95.833% {
            transform:translate(40px,80px);
            opacity:1;
          }
          96.25% {
            transform:translate(40px,80px);
            opacity:1;
          }
          96.667% {
            transform:translate(40px,80px);
            opacity:1;
          }
          97.083% {
            transform:translate(40px,80px);
            opacity:1;
          }
          97.5% {
            transform:translate(40px,80px);
            opacity:1;
          }
          97.917% {
            transform:translate(40px,80px);
            opacity:1;
          }
          98.333% {
            transform:translate(40px,80px);
            opacity:1;
          }
          98.75% {
            transform:translate(40px,80px);
            opacity:1;
          }
          99.167% {
            transform:translate(40px,80px);
            opacity:1;
          }
          99.583% {
            transform:translate(40px,80px);
            opacity:1;
          }
          100% {
            transform:translate(40px,80px);
            opacity:1;
          }
        }
        @keyframes household27 {
          0% {
            transform:translate(40px,60px);
            opacity:1;
          }
          0.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          0.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          1.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          1.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          2.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          2.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          2.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          3.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          3.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          4.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          4.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          5.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          5.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          6.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          6.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          7.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          7.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          7.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          8.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          8.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          9.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          9.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          10% {
            transform:translate(40px,60px);
            opacity:1;
          }
          10.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          10.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          11.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          11.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          12.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          12.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          12.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          13.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          13.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          14.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          14.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          15% {
            transform:translate(40px,60px);
            opacity:1;
          }
          15.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          15.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          16.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          16.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          17.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          17.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          17.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          18.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          18.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          19.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          19.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          20% {
            transform:translate(40px,60px);
            opacity:1;
          }
          20.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          20.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          21.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          21.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          22.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          22.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          22.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          23.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          23.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          24.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          24.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          25.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          25.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          26.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          26.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          27.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          27.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          27.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          28.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          28.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          29.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          29.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          30% {
            transform:translate(40px,60px);
            opacity:1;
          }
          30.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          30.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          31.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          31.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          32.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          32.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          32.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          33.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          33.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          34.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          34.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          35% {
            transform:translate(40px,60px);
            opacity:1;
          }
          35.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          35.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          36.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          36.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          37.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          37.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          37.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          38.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          38.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          39.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          39.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          40% {
            transform:translate(40px,60px);
            opacity:1;
          }
          40.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          40.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          41.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          41.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          42.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          42.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          42.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          43.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          43.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          44.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          44.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          45% {
            transform:translate(40px,60px);
            opacity:1;
          }
          45.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          45.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          46.25% {
            transform:translate(40px,60px);
            opacity:1;
          }
          46.667% {
            transform:translate(40px,60px);
            opacity:1;
          }
          47.083% {
            transform:translate(40px,60px);
            opacity:1;
          }
          47.5% {
            transform:translate(40px,60px);
            opacity:1;
          }
          47.917% {
            transform:translate(40px,60px);
            opacity:1;
          }
          48.333% {
            transform:translate(40px,60px);
            opacity:1;
          }
          48.75% {
            transform:translate(40px,60px);
            opacity:1;
          }
          49.167% {
            transform:translate(40px,60px);
            opacity:1;
          }
          49.583% {
            transform:translate(40px,60px);
            opacity:1;
          }
          50% {
            transform:translate(40px,60px);
            opacity:1;
          }
          50.417% {
            transform:translate(40px,60px);
            opacity:1;
          }
          50.833% {
            transform:translate(40px,60px);
            opacity:1;
          }
          51.25% {
            transform:translate(40px,60px);
            opacity:0;
          }
          51.667% {
            transform:translate(40px,60px);
            opacity:0;
          }
          52.083% {
            transform:translate(40px,60px);
            opacity:0;
          }
          52.5% {
            transform:translate(60px,60px);
            opacity:0;
          }
          52.917% {
            transform:translate(60px,60px);
            opacity:0;
          }
          53.333% {
            transform:translate(60px,60px);
            opacity:0;
          }
          53.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          54.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          54.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          55% {
            transform:translate(60px,60px);
            opacity:1;
          }
          55.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          55.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          56.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          56.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          57.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          57.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          57.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          58.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          58.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          59.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          59.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          60% {
            transform:translate(60px,60px);
            opacity:1;
          }
          60.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          60.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          61.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          61.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          62.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          62.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          62.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          63.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          63.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          64.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          64.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          65% {
            transform:translate(60px,60px);
            opacity:1;
          }
          65.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          65.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          66.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          66.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          67.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          67.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          67.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          68.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          68.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          69.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          69.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          70% {
            transform:translate(60px,60px);
            opacity:1;
          }
          70.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          70.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          71.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          71.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          72.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          72.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          72.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          73.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          73.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          74.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          74.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          75.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          75.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          76.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          76.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          77.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          77.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          77.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          78.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          78.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          79.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          79.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          80% {
            transform:translate(60px,60px);
            opacity:1;
          }
          80.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          80.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          81.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          81.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          82.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          82.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          82.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          83.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          83.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          84.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          84.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          85% {
            transform:translate(60px,60px);
            opacity:1;
          }
          85.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          85.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          86.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          86.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          87.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          87.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          87.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          88.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          88.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          89.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          89.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          90% {
            transform:translate(60px,60px);
            opacity:1;
          }
          90.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          90.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          91.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          91.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          92.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          92.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          92.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          93.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          93.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          94.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          94.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          95% {
            transform:translate(60px,60px);
            opacity:1;
          }
          95.417% {
            transform:translate(60px,60px);
            opacity:1;
          }
          95.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          96.25% {
            transform:translate(60px,60px);
            opacity:1;
          }
          96.667% {
            transform:translate(60px,60px);
            opacity:1;
          }
          97.083% {
            transform:translate(60px,60px);
            opacity:1;
          }
          97.5% {
            transform:translate(60px,60px);
            opacity:1;
          }
          97.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          98.333% {
            transform:translate(60px,60px);
            opacity:1;
          }
          98.75% {
            transform:translate(60px,60px);
            opacity:1;
          }
          99.167% {
            transform:translate(60px,60px);
            opacity:1;
          }
          99.583% {
            transform:translate(60px,60px);
            opacity:1;
          }
          100% {
            transform:translate(60px,60px);
            opacity:1;
          }
        }
        @keyframes destination {
          0% {
            transform:translate(20px,40px);
            opacity:0;
          }
          0.417% {
            transform:translate(20px,40px);
          }
          0.833% {
            transform:translate(20px,40px);
          }
          1.25% {
            transform:translate(20px,40px);
          }
          1.667% {
            transform:translate(20px,40px);
          }
          2.083% {
            transform:translate(20px,40px);
            opacity:0;
          }
          2.5% {
            transform:translate(20px,40px);
          }
          2.917% {
            transform:translate(20px,40px);
          }
          3.333% {
            transform:translate(20px,40px);
          }
          3.75% {
            transform:translate(20px,40px);
          }
          4.167% {
            transform:translate(20px,40px);
            opacity:0;
          }
          4.583% {
            transform:translate(20px,40px);
          }
          5% {
            transform:translate(20px,40px);
          }
          5.417% {
            transform:translate(20px,40px);
          }
          5.833% {
            transform:translate(20px,40px);
          }
          6.25% {
            transform:translate(20px,40px);
            opacity:0;
          }
          6.667% {
            transform:translate(20px,40px);
          }
          7.083% {
            transform:translate(20px,40px);
          }
          7.5% {
            transform:translate(20px,40px);
          }
          7.917% {
            transform:translate(20px,40px);
          }
          8.333% {
            transform:translate(20px,40px);
            opacity:1;
          }
          8.75% {
            transform:translate(20px,40px);
          }
          9.167% {
            transform:translate(20px,40px);
          }
          9.583% {
            transform:translate(20px,40px);
          }
          10% {
            transform:translate(20px,40px);
          }
          10.417% {
            transform:translate(20px,40px);
            opacity:1;
          }
          10.833% {
            transform:translate(20px,40px);
          }
          11.25% {
            transform:translate(20px,40px);
          }
          11.667% {
            transform:translate(20px,40px);
          }
          12.083% {
            transform:translate(20px,40px);
          }
          12.5% {
            transform:translate(20px,40px);
            opacity:1;
          }
          12.917% {
            transform:translate(20px,40px);
          }
          13.333% {
            transform:translate(20px,40px);
          }
          13.75% {
            transform:translate(20px,40px);
          }
          14.167% {
            transform:translate(20px,40px);
          }
          14.583% {
            transform:translate(20px,40px);
            opacity:1;
          }
          15% {
            transform:translate(20px,40px);
          }
          15.417% {
            transform:translate(20px,40px);
          }
          15.833% {
            transform:translate(20px,40px);
          }
          16.25% {
            transform:translate(20px,40px);
          }
          16.667% {
            transform:translate(20px,40px);
            opacity:1;
            opacity:0;
          }
          17.083% {
            transform:translate(120px,60px);
            opacity:0;
          }
          17.5% {
            transform:translate(120px,60px);
          }
          17.917% {
            transform:translate(120px,60px);
          }
          18.333% {
            transform:translate(120px,60px);
          }
          18.75% {
            transform:translate(120px,60px);
            opacity:1;
          }
          19.167% {
            transform:translate(120px,60px);
          }
          19.583% {
            transform:translate(120px,60px);
          }
          20% {
            transform:translate(120px,60px);
          }
          20.417% {
            transform:translate(120px,60px);
          }
          20.833% {
            transform:translate(120px,60px);
            opacity:1;
          }
          21.25% {
            transform:translate(120px,60px);
          }
          21.667% {
            transform:translate(120px,60px);
          }
          22.083% {
            transform:translate(120px,60px);
          }
          22.5% {
            transform:translate(120px,60px);
          }
          22.917% {
            transform:translate(120px,60px);
            opacity:1;
          }
          23.333% {
            transform:translate(120px,60px);
          }
          23.75% {
            transform:translate(120px,60px);
          }
          24.167% {
            transform:translate(120px,60px);
          }
          24.583% {
            transform:translate(120px,60px);
          }
          25% {
            transform:translate(120px,60px);
            opacity:1;
          }
          25.417% {
            transform:translate(120px,60px);
            opacity:0;
          }
          25.833% {
            transform:translate(60px,100px);
            opacity:0;
          }
          26.25% {
            transform:translate(60px,100px);
          }
          26.667% {
            transform:translate(60px,100px);
          }
          27.083% {
            transform:translate(60px,100px);
            opacity:1;
          }
          27.5% {
            transform:translate(60px,100px);
          }
          27.917% {
            transform:translate(60px,100px);
          }
          28.333% {
            transform:translate(60px,100px);
          }
          28.75% {
            transform:translate(60px,100px);
          }
          29.167% {
            transform:translate(60px,100px);
            opacity:1;
          }
          29.583% {
            transform:translate(60px,100px);
          }
          30% {
            transform:translate(60px,100px);
          }
          30.417% {
            transform:translate(60px,100px);
          }
          30.833% {
            transform:translate(60px,100px);
          }
          31.25% {
            transform:translate(60px,100px);
            opacity:1;
          }
          31.667% {
            transform:translate(60px,100px);
          }
          32.083% {
            transform:translate(60px,100px);
          }
          32.5% {
            transform:translate(60px,100px);
          }
          32.917% {
            transform:translate(60px,100px);
          }
          33.333% {
            transform:translate(60px,100px);
            opacity:1;
          }
          33.75% {
            transform:translate(60px,100px);
          }
          34.167% {
            transform:translate(60px,100px);
          }
          34.583% {
            transform:translate(60px,100px);
            opacity:0;
          }
          35% {
            transform:translate(120px,80px);
            opacity:0;
          }
          35.417% {
            transform:translate(120px,80px);
            opacity:1;
          }
          35.833% {
            transform:translate(120px,80px);
          }
          36.25% {
            transform:translate(120px,80px);
          }
          36.667% {
            transform:translate(120px,80px);
          }
          37.083% {
            transform:translate(120px,80px);
          }
          37.5% {
            transform:translate(120px,80px);
            opacity:1;
          }
          37.917% {
            transform:translate(120px,80px);
          }
          38.333% {
            transform:translate(120px,80px);
          }
          38.75% {
            transform:translate(120px,80px);
          }
          39.167% {
            transform:translate(120px,80px);
          }
          39.583% {
            transform:translate(120px,80px);
            opacity:1;
          }
          40% {
            transform:translate(120px,80px);
          }
          40.417% {
            transform:translate(120px,80px);
          }
          40.833% {
            transform:translate(120px,80px);
          }
          41.25% {
            transform:translate(120px,80px);
          }
          41.667% {
            transform:translate(120px,80px);
            opacity:1;
          }
          42.083% {
            transform:translate(120px,80px);
          }
          42.5% {
            transform:translate(120px,80px);
          }
          42.917% {
            transform:translate(120px,80px);
          }
          43.333% {
            transform:translate(120px,80px);
            opacity:0;
          }
          43.75% {
            transform:translate(60px,60px);
            opacity:1;
            opacity:0;
          }
          44.167% {
            transform:translate(60px,60px);
          }
          44.583% {
            transform:translate(60px,60px);
          }
          45% {
            transform:translate(60px,60px);
          }
          45.417% {
            transform:translate(60px,60px);
          }
          45.833% {
            transform:translate(60px,60px);
            opacity:1;
          }
          46.25% {
            transform:translate(60px,60px);
          }
          46.667% {
            transform:translate(60px,60px);
          }
          47.083% {
            transform:translate(60px,60px);
          }
          47.5% {
            transform:translate(60px,60px);
          }
          47.917% {
            transform:translate(60px,60px);
            opacity:1;
          }
          48.333% {
            transform:translate(60px,60px);
          }
          48.75% {
            transform:translate(60px,60px);
          }
          49.167% {
            transform:translate(60px,60px);
          }
          49.583% {
            transform:translate(60px,60px);
          }
          50% {
            transform:translate(60px,60px);
            opacity:1;
          }
          50.417% {
            transform:translate(60px,60px);
          }
          50.833% {
            transform:translate(60px,60px);
          }
          51.25% {
            transform:translate(60px,60px);
          }
          51.667% {
            transform:translate(60px,60px);
          }
          52.083% {
            transform:translate(60px,60px);
            opacity:1;
            opacity:0;
          }
          52.5% {
            transform:translate(80px,120px);
            opacity:0;
          }
          52.917% {
            transform:translate(80px,120px);
          }
          53.333% {
            transform:translate(80px,120px);
          }
          53.75% {
            transform:translate(80px,120px);
          }
          54.167% {
            transform:translate(80px,120px);
            opacity:1;
          }
          54.583% {
            transform:translate(80px,120px);
          }
          55% {
            transform:translate(80px,120px);
          }
          55.417% {
            transform:translate(80px,120px);
          }
          55.833% {
            transform:translate(80px,120px);
          }
          56.25% {
            transform:translate(80px,120px);
            opacity:1;
          }
          56.667% {
            transform:translate(80px,120px);
          }
          57.083% {
            transform:translate(80px,120px);
          }
          57.5% {
            transform:translate(80px,120px);
          }
          57.917% {
            transform:translate(80px,120px);
          }
          58.333% {
            transform:translate(80px,120px);
            opacity:1;
          }
          58.75% {
            transform:translate(80px,120px);
          }
          59.167% {
            transform:translate(80px,120px);
          }
          59.583% {
            transform:translate(80px,120px);
          }
          60% {
            transform:translate(80px,120px);
          }
          60.417% {
            transform:translate(80px,120px);
            opacity:1;
          }
          60.833% {
            transform:translate(80px,120px);
          }
          61.25% {
            transform:translate(80px,120px);
            opacity:0;
          }
          61.667% {
            transform:translate(120px,100px);
            opacity:0;
          }
          62.083% {
            transform:translate(120px,100px);
          }
          62.5% {
            transform:translate(120px,100px);
            opacity:1;
          }
          62.917% {
            transform:translate(120px,100px);
          }
          63.333% {
            transform:translate(120px,100px);
          }
          63.75% {
            transform:translate(120px,100px);
          }
          64.167% {
            transform:translate(120px,100px);
          }
          64.583% {
            transform:translate(120px,100px);
            opacity:1;
          }
          65% {
            transform:translate(120px,100px);
          }
          65.417% {
            transform:translate(120px,100px);
          }
          65.833% {
            transform:translate(120px,100px);
          }
          66.25% {
            transform:translate(120px,100px);
          }
          66.667% {
            transform:translate(120px,100px);
            opacity:1;
          }
          67.083% {
            transform:translate(120px,100px);
          }
          67.5% {
            transform:translate(120px,100px);
          }
          67.917% {
            transform:translate(120px,100px);
          }
          68.333% {
            transform:translate(120px,100px);
          }
          68.75% {
            transform:translate(120px,100px);
            opacity:1;
          }
          69.167% {
            transform:translate(120px,100px);
          }
          69.583% {
            transform:translate(120px,100px);
          }
          70% {
            transform:translate(120px,100px);
            opacity:0;
          }
          70.417% {
            transform:translate(80px,20px);
            opacity:0;
          }
          70.833% {
            transform:translate(80px,20px);
            opacity:1;
          }
          71.25% {
            transform:translate(80px,20px);
          }
          71.667% {
            transform:translate(80px,20px);
          }
          72.083% {
            transform:translate(80px,20px);
          }
          72.5% {
            transform:translate(80px,20px);
          }
          72.917% {
            transform:translate(80px,20px);
            opacity:1;
          }
          73.333% {
            transform:translate(80px,20px);
          }
          73.75% {
            transform:translate(80px,20px);
          }
          74.167% {
            transform:translate(80px,20px);
          }
          74.583% {
            transform:translate(80px,20px);
          }
          75% {
            transform:translate(80px,20px);
            opacity:1;
          }
          75.417% {
            transform:translate(80px,20px);
          }
          75.833% {
            transform:translate(80px,20px);
          }
          76.25% {
            transform:translate(80px,20px);
          }
          76.667% {
            transform:translate(80px,20px);
          }
          77.083% {
            transform:translate(80px,20px);
            opacity:1;
          }
          77.5% {
            transform:translate(80px,20px);
          }
          77.917% {
            transform:translate(80px,20px);
          }
          78.333% {
            transform:translate(80px,20px);
          }
          78.75% {
            transform:translate(80px,20px);
            opacity:0;
          }
          79.167% {
            transform:translate(120px,20px);
            opacity:1;
            opacity:0;
          }
          79.583% {
            transform:translate(120px,20px);
          }
          80% {
            transform:translate(120px,20px);
          }
          80.417% {
            transform:translate(120px,20px);
          }
          80.833% {
            transform:translate(120px,20px);
          }
          81.25% {
            transform:translate(120px,20px);
            opacity:1;
          }
          81.667% {
            transform:translate(120px,20px);
          }
          82.083% {
            transform:translate(120px,20px);
          }
          82.5% {
            transform:translate(120px,20px);
          }
          82.917% {
            transform:translate(120px,20px);
          }
          83.333% {
            transform:translate(120px,20px);
            opacity:1;
          }
          83.75% {
            transform:translate(120px,20px);
          }
          84.167% {
            transform:translate(120px,20px);
          }
          84.583% {
            transform:translate(120px,20px);
          }
          85% {
            transform:translate(120px,20px);
          }
          85.417% {
            transform:translate(120px,20px);
            opacity:1;
          }
          85.833% {
            transform:translate(120px,20px);
          }
          86.25% {
            transform:translate(120px,20px);
          }
          86.667% {
            transform:translate(120px,20px);
          }
          87.083% {
            transform:translate(120px,20px);
          }
          87.5% {
            transform:translate(120px,20px);
            opacity:1;
          }
          87.917% {
            transform:translate(120px,20px);
          }
          88.333% {
            transform:translate(120px,20px);
          }
          88.75% {
            transform:translate(120px,20px);
          }
          89.167% {
            transform:translate(120px,20px);
          }
          89.583% {
            transform:translate(120px,20px);
            opacity:0;
          }
          90% {
            transform:translate(120px,20px);
          }
          90.417% {
            transform:translate(120px,20px);
          }
          90.833% {
            transform:translate(120px,20px);
          }
          91.25% {
            transform:translate(120px,20px);
          }
          91.667% {
            transform:translate(120px,20px);
            opacity:0;
          }
          92.083% {
            transform:translate(120px,20px);
          }
          92.5% {
            transform:translate(120px,20px);
          }
          92.917% {
            transform:translate(120px,20px);
          }
          93.333% {
            transform:translate(120px,20px);
          }
          93.75% {
            transform:translate(120px,20px);
            opacity:0;
          }
          94.167% {
            transform:translate(120px,20px);
          }
          94.583% {
            transform:translate(120px,20px);
          }
          95% {
            transform:translate(120px,20px);
          }
          95.417% {
            transform:translate(120px,20px);
          }
          95.833% {
            transform:translate(120px,20px);
            opacity:0;
          }
          96.25% {
            transform:translate(120px,20px);
          }
          96.667% {
            transform:translate(120px,20px);
          }
          97.083% {
            transform:translate(120px,20px);
          }
          97.5% {
            transform:translate(120px,20px);
          }
          97.917% {
            transform:translate(120px,20px);
            opacity:0;
          }
          98.333% {
            transform:translate(120px,20px);
          }
          98.75% {
            transform:translate(120px,20px);
          }
          99.167% {
            transform:translate(120px,20px);
          }
          99.583% {
            transform:translate(120px,20px);
          }
          100% {
            transform:translate(120px,20px);
            opacity:0;
          }
        }
        @keyframes segregationEpisode {
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
          .household0 {
            transform:translate(80px,100px);
            opacity:1;
          }
          .household1 {
            transform:translate(40px,120px);
            opacity:1;
          }
          .household2 {
            transform:translate(40px,40px);
            opacity:1;
          }
          .household3 {
            transform:translate(80px,60px);
            opacity:1;
          }
          .household4 {
            transform:translate(20px,60px);
            opacity:1;
          }
          .household5 {
            transform:translate(80px,80px);
            opacity:1;
          }
          .household6 {
            transform:translate(40px,100px);
            opacity:1;
          }
          .household7 {
            transform:translate(100px,40px);
            opacity:1;
          }
          .household8 {
            transform:translate(120px,120px);
            opacity:1;
          }
          .household9 {
            transform:translate(100px,60px);
            opacity:1;
          }
          .household10 {
            transform:translate(20px,100px);
            opacity:1;
          }
          .household11 {
            transform:translate(120px,80px);
            opacity:1;
          }
          .household12 {
            transform:translate(100px,120px);
            opacity:1;
          }
          .household13 {
            transform:translate(100px,20px);
            opacity:1;
          }
          .household14 {
            transform:translate(20px,40px);
            opacity:1;
          }
          .household15 {
            transform:translate(60px,40px);
            opacity:1;
          }
          .household16 {
            transform:translate(100px,100px);
            opacity:1;
          }
          .household17 {
            transform:translate(120px,100px);
            opacity:1;
          }
          .household18 {
            transform:translate(80px,120px);
            opacity:1;
          }
          .household19 {
            transform:translate(100px,80px);
            opacity:1;
          }
          .household20 {
            transform:translate(60px,80px);
            opacity:1;
          }
          .household21 {
            transform:translate(80px,40px);
            opacity:1;
          }
          .household22 {
            transform:translate(40px,20px);
            opacity:1;
          }
          .household23 {
            transform:translate(60px,120px);
            opacity:1;
          }
          .household24 {
            transform:translate(60px,20px);
            opacity:1;
          }
          .household25 {
            transform:translate(120px,60px);
            opacity:1;
          }
          .household26 {
            transform:translate(40px,80px);
            opacity:1;
          }
          .household27 {
            transform:translate(60px,60px);
            opacity:1;
          }
          .destination {
            transform:translate(80px,20px);
            opacity:1;
          }
          .segregationEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Schelling Segregation Model">
        <g class="segregationEpisode">
          <rect x="12" y="12" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="32" y="12" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="52" y="12" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="72" y="12" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="92" y="12" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="112" y="12" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="12" y="32" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="32" y="32" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="52" y="32" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="72" y="32" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="92" y="32" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="112" y="32" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="12" y="52" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="32" y="52" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="52" y="52" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="72" y="52" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="92" y="52" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="112" y="52" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="12" y="72" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="32" y="72" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="52" y="72" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="72" y="72" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="92" y="72" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="112" y="72" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="12" y="92" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="32" y="92" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="52" y="92" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="72" y="92" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="92" y="92" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="112" y="92" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="12" y="112" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="32" y="112" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="52" y="112" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="72" y="112" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="92" y="112" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <rect x="112" y="112" width="16" height="16" rx="2" fill="#173b2e" stroke="#3f6854" stroke-width=".7"/>
          <g class="household0">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household1">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household2">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household3">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household4">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household5">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household6">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household7">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household8">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household9">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household10">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household11">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household12">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household13">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household14">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household15">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household16">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household17">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household18">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household19">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household20">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household21">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household22">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household23">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household24">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household25">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household26">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#82bfc5"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <g class="household27">
            <path d="M-5 1L0 -5 5 1V6H-5Z" fill="#d8b47a"/>
            <rect x="-1" y="2" width="2" height="4" fill="#1c4437"/>
          </g>
          <rect x="-8" y="-8" width="16" height="16" class="destination" rx="2" fill="none" stroke="#e8dc9b" stroke-width="1.5"/>
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

if (!customElements.get("concept-schelling-segregation-model")) {
  customElements.define("concept-schelling-segregation-model", ConceptSchellingSegregationModel);
}
