// Common-Pool Governance. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCommonPoolGovernance extends HTMLElement {
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
        .gate0 {
          animation:gate0 16s linear infinite;
        }
        .watered0 {
          animation:watered0 16s linear infinite;
        }
        .gate1 {
          animation:gate1 16s linear infinite;
        }
        .watered1 {
          animation:watered1 16s linear infinite;
        }
        .gate2 {
          animation:gate2 16s linear infinite;
        }
        .watered2 {
          animation:watered2 16s linear infinite;
        }
        .gate3 {
          animation:gate3 16s linear infinite;
        }
        .watered3 {
          animation:watered3 16s linear infinite;
        }
        .initialDiversion {
          animation:initialDiversion 16s linear infinite;
        }
        .initialDiversion {
          animation:initialDiversion 16s linear infinite;
        }
        .turn {
          animation:turn 16s linear infinite;
        }
        .turn {
          animation:turn 16s linear infinite;
        }
        .allocation0 {
          animation:allocation0 16s linear infinite;
        }
        .allocation0 {
          animation:allocation0 16s linear infinite;
        }
        .allocation1 {
          animation:allocation1 16s linear infinite;
        }
        .allocation1 {
          animation:allocation1 16s linear infinite;
        }
        .allocation2 {
          animation:allocation2 16s linear infinite;
        }
        .allocation2 {
          animation:allocation2 16s linear infinite;
        }
        .allocation3 {
          animation:allocation3 16s linear infinite;
        }
        .allocation3 {
          animation:allocation3 16s linear infinite;
        }
        .commonsEpisode {
          animation:commonsEpisode 16s linear infinite;
        }
        @keyframes gate0 {
          0% {
            d:path('M19 42L20 35');
          }
          2.083% {
            d:path('M19 42L20 35');
          }
          4.167% {
            d:path('M19 42L20 35');
          }
          6.25% {
            d:path('M19 42L20 35');
          }
          8.333% {
            d:path('M19 42L20 35');
          }
          10.417% {
            d:path('M19 42L20 35');
          }
          12.5% {
            d:path('M19 42L20 35');
          }
          14.583% {
            d:path('M19 42L20 35');
          }
          16.667% {
            d:path('M19 42L20 35');
          }
          18.75% {
            d:path('M19 42L20 35');
          }
          20.833% {
            d:path('M19 42L20 35');
          }
          22.917% {
            d:path('M19 42L20 35');
          }
          25% {
            d:path('M19 42L20 35');
          }
          27.083% {
            d:path('M19 42L20 35');
          }
          29.167% {
            d:path('M19 42L20 35');
          }
          31.25% {
            d:path('M19 42L20 35');
          }
          33.333% {
            d:path('M19 42L20 35');
          }
          35.417% {
            d:path('M19 42L20 35');
          }
          37.5% {
            d:path('M19 42L20 35');
          }
          39.583% {
            d:path('M19 42H29');
          }
          41.667% {
            d:path('M19 42H29');
          }
          43.75% {
            d:path('M19 42H29');
          }
          45.833% {
            d:path('M19 42H29');
          }
          47.917% {
            d:path('M19 42H29');
          }
          50% {
            d:path('M19 42H29');
          }
          52.083% {
            d:path('M19 42H29');
          }
          54.167% {
            d:path('M19 42H29');
          }
          56.25% {
            d:path('M19 42H29');
          }
          58.333% {
            d:path('M19 42H29');
          }
          60.417% {
            d:path('M19 42H29');
          }
          62.5% {
            d:path('M19 42H29');
          }
          64.583% {
            d:path('M19 42H29');
          }
          66.667% {
            d:path('M19 42H29');
          }
          68.75% {
            d:path('M19 42H29');
          }
          70.833% {
            d:path('M19 42H29');
          }
          72.917% {
            d:path('M19 42H29');
          }
          75% {
            d:path('M19 42H29');
          }
          77.083% {
            d:path('M19 42H29');
          }
          79.167% {
            d:path('M19 42H29');
          }
          81.25% {
            d:path('M19 42H29');
          }
          83.333% {
            d:path('M19 42H29');
          }
          85.417% {
            d:path('M19 42H29');
          }
          87.5% {
            d:path('M19 42H29');
          }
          89.583% {
            d:path('M19 42H29');
          }
          91.667% {
            d:path('M19 42H29');
          }
          93.75% {
            d:path('M19 42H29');
          }
          95.833% {
            d:path('M19 42H29');
          }
          97.917% {
            d:path('M19 42H29');
          }
          100% {
            d:path('M19 42H29');
          }
        }
        @keyframes watered0 {
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
        @keyframes gate1 {
          0% {
            d:path('M49 42H59');
          }
          2.083% {
            d:path('M49 42H59');
          }
          4.167% {
            d:path('M49 42H59');
          }
          6.25% {
            d:path('M49 42H59');
          }
          8.333% {
            d:path('M49 42H59');
          }
          10.417% {
            d:path('M49 42H59');
          }
          12.5% {
            d:path('M49 42H59');
          }
          14.583% {
            d:path('M49 42H59');
          }
          16.667% {
            d:path('M49 42H59');
          }
          18.75% {
            d:path('M49 42H59');
          }
          20.833% {
            d:path('M49 42H59');
          }
          22.917% {
            d:path('M49 42H59');
          }
          25% {
            d:path('M49 42H59');
          }
          27.083% {
            d:path('M49 42H59');
          }
          29.167% {
            d:path('M49 42H59');
          }
          31.25% {
            d:path('M49 42H59');
          }
          33.333% {
            d:path('M49 42H59');
          }
          35.417% {
            d:path('M49 42H59');
          }
          37.5% {
            d:path('M49 42H59');
          }
          39.583% {
            d:path('M49 42L50 35');
          }
          41.667% {
            d:path('M49 42L50 35');
          }
          43.75% {
            d:path('M49 42L50 35');
          }
          45.833% {
            d:path('M49 42L50 35');
          }
          47.917% {
            d:path('M49 42L50 35');
          }
          50% {
            d:path('M49 42L50 35');
          }
          52.083% {
            d:path('M49 42L50 35');
          }
          54.167% {
            d:path('M49 42L50 35');
          }
          56.25% {
            d:path('M49 42H59');
          }
          58.333% {
            d:path('M49 42H59');
          }
          60.417% {
            d:path('M49 42H59');
          }
          62.5% {
            d:path('M49 42H59');
          }
          64.583% {
            d:path('M49 42H59');
          }
          66.667% {
            d:path('M49 42H59');
          }
          68.75% {
            d:path('M49 42H59');
          }
          70.833% {
            d:path('M49 42H59');
          }
          72.917% {
            d:path('M49 42H59');
          }
          75% {
            d:path('M49 42H59');
          }
          77.083% {
            d:path('M49 42H59');
          }
          79.167% {
            d:path('M49 42H59');
          }
          81.25% {
            d:path('M49 42H59');
          }
          83.333% {
            d:path('M49 42H59');
          }
          85.417% {
            d:path('M49 42H59');
          }
          87.5% {
            d:path('M49 42H59');
          }
          89.583% {
            d:path('M49 42H59');
          }
          91.667% {
            d:path('M49 42H59');
          }
          93.75% {
            d:path('M49 42H59');
          }
          95.833% {
            d:path('M49 42H59');
          }
          97.917% {
            d:path('M49 42H59');
          }
          100% {
            d:path('M49 42H59');
          }
        }
        @keyframes watered1 {
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
        @keyframes gate2 {
          0% {
            d:path('M79 42H89');
          }
          2.083% {
            d:path('M79 42H89');
          }
          4.167% {
            d:path('M79 42H89');
          }
          6.25% {
            d:path('M79 42H89');
          }
          8.333% {
            d:path('M79 42H89');
          }
          10.417% {
            d:path('M79 42H89');
          }
          12.5% {
            d:path('M79 42H89');
          }
          14.583% {
            d:path('M79 42H89');
          }
          16.667% {
            d:path('M79 42H89');
          }
          18.75% {
            d:path('M79 42H89');
          }
          20.833% {
            d:path('M79 42H89');
          }
          22.917% {
            d:path('M79 42H89');
          }
          25% {
            d:path('M79 42H89');
          }
          27.083% {
            d:path('M79 42H89');
          }
          29.167% {
            d:path('M79 42H89');
          }
          31.25% {
            d:path('M79 42H89');
          }
          33.333% {
            d:path('M79 42H89');
          }
          35.417% {
            d:path('M79 42H89');
          }
          37.5% {
            d:path('M79 42H89');
          }
          39.583% {
            d:path('M79 42H89');
          }
          41.667% {
            d:path('M79 42H89');
          }
          43.75% {
            d:path('M79 42H89');
          }
          45.833% {
            d:path('M79 42H89');
          }
          47.917% {
            d:path('M79 42H89');
          }
          50% {
            d:path('M79 42H89');
          }
          52.083% {
            d:path('M79 42H89');
          }
          54.167% {
            d:path('M79 42H89');
          }
          56.25% {
            d:path('M79 42L80 35');
          }
          58.333% {
            d:path('M79 42L80 35');
          }
          60.417% {
            d:path('M79 42L80 35');
          }
          62.5% {
            d:path('M79 42L80 35');
          }
          64.583% {
            d:path('M79 42L80 35');
          }
          66.667% {
            d:path('M79 42L80 35');
          }
          68.75% {
            d:path('M79 42L80 35');
          }
          70.833% {
            d:path('M79 42L80 35');
          }
          72.917% {
            d:path('M79 42L80 35');
          }
          75% {
            d:path('M79 42H89');
          }
          77.083% {
            d:path('M79 42H89');
          }
          79.167% {
            d:path('M79 42H89');
          }
          81.25% {
            d:path('M79 42H89');
          }
          83.333% {
            d:path('M79 42H89');
          }
          85.417% {
            d:path('M79 42H89');
          }
          87.5% {
            d:path('M79 42H89');
          }
          89.583% {
            d:path('M79 42H89');
          }
          91.667% {
            d:path('M79 42H89');
          }
          93.75% {
            d:path('M79 42H89');
          }
          95.833% {
            d:path('M79 42H89');
          }
          97.917% {
            d:path('M79 42H89');
          }
          100% {
            d:path('M79 42H89');
          }
        }
        @keyframes watered2 {
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
        @keyframes gate3 {
          0% {
            d:path('M109 42H119');
          }
          2.083% {
            d:path('M109 42H119');
          }
          4.167% {
            d:path('M109 42H119');
          }
          6.25% {
            d:path('M109 42H119');
          }
          8.333% {
            d:path('M109 42H119');
          }
          10.417% {
            d:path('M109 42H119');
          }
          12.5% {
            d:path('M109 42H119');
          }
          14.583% {
            d:path('M109 42H119');
          }
          16.667% {
            d:path('M109 42H119');
          }
          18.75% {
            d:path('M109 42H119');
          }
          20.833% {
            d:path('M109 42H119');
          }
          22.917% {
            d:path('M109 42H119');
          }
          25% {
            d:path('M109 42H119');
          }
          27.083% {
            d:path('M109 42H119');
          }
          29.167% {
            d:path('M109 42H119');
          }
          31.25% {
            d:path('M109 42H119');
          }
          33.333% {
            d:path('M109 42H119');
          }
          35.417% {
            d:path('M109 42H119');
          }
          37.5% {
            d:path('M109 42H119');
          }
          39.583% {
            d:path('M109 42H119');
          }
          41.667% {
            d:path('M109 42H119');
          }
          43.75% {
            d:path('M109 42H119');
          }
          45.833% {
            d:path('M109 42H119');
          }
          47.917% {
            d:path('M109 42H119');
          }
          50% {
            d:path('M109 42H119');
          }
          52.083% {
            d:path('M109 42H119');
          }
          54.167% {
            d:path('M109 42H119');
          }
          56.25% {
            d:path('M109 42H119');
          }
          58.333% {
            d:path('M109 42H119');
          }
          60.417% {
            d:path('M109 42H119');
          }
          62.5% {
            d:path('M109 42H119');
          }
          64.583% {
            d:path('M109 42H119');
          }
          66.667% {
            d:path('M109 42H119');
          }
          68.75% {
            d:path('M109 42H119');
          }
          70.833% {
            d:path('M109 42H119');
          }
          72.917% {
            d:path('M109 42H119');
          }
          75% {
            d:path('M109 42L110 35');
          }
          77.083% {
            d:path('M109 42L110 35');
          }
          79.167% {
            d:path('M109 42L110 35');
          }
          81.25% {
            d:path('M109 42L110 35');
          }
          83.333% {
            d:path('M109 42L110 35');
          }
          85.417% {
            d:path('M109 42L110 35');
          }
          87.5% {
            d:path('M109 42L110 35');
          }
          89.583% {
            d:path('M109 42L110 35');
          }
          91.667% {
            d:path('M109 42L110 35');
          }
          93.75% {
            d:path('M109 42L110 35');
          }
          95.833% {
            d:path('M109 42L110 35');
          }
          97.917% {
            d:path('M109 42L110 35');
          }
          100% {
            d:path('M109 42L110 35');
          }
        }
        @keyframes watered3 {
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
        @keyframes initialDiversion {
          0% {
            transform:translate(14px,33px);
            opacity:1;
          }
          2.083% {
            transform:translate(18.252px,33px);
            opacity:1;
          }
          4.167% {
            transform:translate(22.503px,33px);
            opacity:1;
          }
          6.25% {
            transform:translate(24px,39.676px);
            opacity:1;
          }
          8.333% {
            transform:translate(24px,49.978px);
            opacity:1;
          }
          10.417% {
            transform:translate(24px,60.28px);
            opacity:1;
          }
          12.5% {
            transform:translate(24px,70.582px);
            opacity:1;
          }
          14.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          16.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          18.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          20.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          22.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          25% {
            transform:translate(24px,78px);
            opacity:0;
          }
          27.083% {
            transform:translate(24px,78px);
            opacity:0;
          }
          29.167% {
            transform:translate(24px,78px);
            opacity:0;
          }
          31.25% {
            transform:translate(24px,78px);
            opacity:0;
          }
          33.333% {
            transform:translate(24px,78px);
            opacity:0;
          }
          35.417% {
            transform:translate(24px,78px);
            opacity:0;
          }
          37.5% {
            transform:translate(24px,78px);
            opacity:0;
          }
          39.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          41.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          43.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          45.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          47.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          50% {
            transform:translate(24px,78px);
            opacity:0;
          }
          52.083% {
            transform:translate(24px,78px);
            opacity:0;
          }
          54.167% {
            transform:translate(24px,78px);
            opacity:0;
          }
          56.25% {
            transform:translate(24px,78px);
            opacity:0;
          }
          58.333% {
            transform:translate(24px,78px);
            opacity:0;
          }
          60.417% {
            transform:translate(24px,78px);
            opacity:0;
          }
          62.5% {
            transform:translate(24px,78px);
            opacity:0;
          }
          64.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          66.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          68.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          70.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          72.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          77.083% {
            transform:translate(24px,78px);
            opacity:0;
          }
          79.167% {
            transform:translate(24px,78px);
            opacity:0;
          }
          81.25% {
            transform:translate(24px,78px);
            opacity:0;
          }
          83.333% {
            transform:translate(24px,78px);
            opacity:0;
          }
          85.417% {
            transform:translate(24px,78px);
            opacity:0;
          }
          87.5% {
            transform:translate(24px,78px);
            opacity:0;
          }
          89.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          91.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          93.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          95.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          97.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          100% {
            transform:translate(24px,78px);
            opacity:0;
          }
        }
        @keyframes turn {
          0% {
            transform:translate(33px,52px);
            opacity:0;
          }
          2.083% {
            transform:translate(33px,52px);
            opacity:0;
          }
          4.167% {
            transform:translate(33px,52px);
            opacity:0;
          }
          6.25% {
            transform:translate(33px,52px);
            opacity:0;
          }
          8.333% {
            transform:translate(33px,52px);
            opacity:0;
          }
          10.417% {
            transform:translate(33px,52px);
            opacity:0;
          }
          12.5% {
            transform:translate(33px,52px);
            opacity:0;
          }
          14.583% {
            transform:translate(33px,52px);
            opacity:0;
          }
          16.667% {
            transform:translate(33px,52px);
            opacity:0;
          }
          18.75% {
            transform:translate(33px,52px);
            opacity:0.624;
          }
          20.833% {
            transform:translate(33px,52px);
            opacity:1;
          }
          22.917% {
            transform:translate(33px,52px);
            opacity:1;
          }
          25% {
            transform:translate(33px,52px);
            opacity:1;
          }
          27.083% {
            transform:translate(33px,52px);
            opacity:1;
          }
          29.167% {
            transform:translate(33px,52px);
            opacity:1;
          }
          31.25% {
            transform:translate(33px,52px);
            opacity:1;
          }
          33.333% {
            transform:translate(33px,52px);
            opacity:1;
          }
          35.417% {
            transform:translate(33px,52px);
            opacity:1;
          }
          37.5% {
            transform:translate(33px,52px);
            opacity:1;
          }
          39.583% {
            transform:translate(63px,52px);
            opacity:1;
          }
          41.667% {
            transform:translate(63px,52px);
            opacity:1;
          }
          43.75% {
            transform:translate(63px,52px);
            opacity:1;
          }
          45.833% {
            transform:translate(63px,52px);
            opacity:1;
          }
          47.917% {
            transform:translate(63px,52px);
            opacity:1;
          }
          50% {
            transform:translate(63px,52px);
            opacity:1;
          }
          52.083% {
            transform:translate(63px,52px);
            opacity:1;
          }
          54.167% {
            transform:translate(63px,52px);
            opacity:1;
          }
          56.25% {
            transform:translate(93px,52px);
            opacity:1;
          }
          58.333% {
            transform:translate(93px,52px);
            opacity:1;
          }
          60.417% {
            transform:translate(93px,52px);
            opacity:1;
          }
          62.5% {
            transform:translate(93px,52px);
            opacity:1;
          }
          64.583% {
            transform:translate(93px,52px);
            opacity:1;
          }
          66.667% {
            transform:translate(93px,52px);
            opacity:1;
          }
          68.75% {
            transform:translate(93px,52px);
            opacity:1;
          }
          70.833% {
            transform:translate(93px,52px);
            opacity:1;
          }
          72.917% {
            transform:translate(93px,52px);
            opacity:1;
          }
          75% {
            transform:translate(123px,52px);
            opacity:1;
          }
          77.083% {
            transform:translate(123px,52px);
            opacity:1;
          }
          79.167% {
            transform:translate(123px,52px);
            opacity:1;
          }
          81.25% {
            transform:translate(123px,52px);
            opacity:1;
          }
          83.333% {
            transform:translate(123px,52px);
            opacity:1;
          }
          85.417% {
            transform:translate(123px,52px);
            opacity:1;
          }
          87.5% {
            transform:translate(123px,52px);
            opacity:1;
          }
          89.583% {
            transform:translate(123px,52px);
            opacity:1;
          }
          91.667% {
            transform:translate(123px,52px);
            opacity:1;
          }
          93.75% {
            transform:translate(123px,52px);
            opacity:1;
          }
          95.833% {
            transform:translate(123px,52px);
            opacity:1;
          }
          97.917% {
            transform:translate(123px,52px);
            opacity:1;
          }
          100% {
            transform:translate(123px,52px);
            opacity:1;
          }
        }
        @keyframes allocation0 {
          0% {
            transform:translate(14px,33px);
            opacity:0;
          }
          2.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          4.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          6.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          8.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          10.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          12.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          14.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          16.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          18.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          20.833% {
            transform:translate(15.082px,33px);
            opacity:1;
          }
          22.917% {
            transform:translate(17.788px,33px);
            opacity:1;
          }
          25% {
            transform:translate(20.494px,33px);
            opacity:1;
          }
          27.083% {
            transform:translate(23.199px,33px);
            opacity:1;
          }
          29.167% {
            transform:translate(24px,43.476px);
            opacity:1;
          }
          31.25% {
            transform:translate(24px,58.357px);
            opacity:1;
          }
          33.333% {
            transform:translate(24px,73.238px);
            opacity:1;
          }
          35.417% {
            transform:translate(24px,78px);
            opacity:0;
          }
          37.5% {
            transform:translate(24px,78px);
            opacity:0;
          }
          39.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          41.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          43.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          45.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          47.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          50% {
            transform:translate(24px,78px);
            opacity:0;
          }
          52.083% {
            transform:translate(24px,78px);
            opacity:0;
          }
          54.167% {
            transform:translate(24px,78px);
            opacity:0;
          }
          56.25% {
            transform:translate(24px,78px);
            opacity:0;
          }
          58.333% {
            transform:translate(24px,78px);
            opacity:0;
          }
          60.417% {
            transform:translate(24px,78px);
            opacity:0;
          }
          62.5% {
            transform:translate(24px,78px);
            opacity:0;
          }
          64.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          66.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          68.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          70.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          72.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          77.083% {
            transform:translate(24px,78px);
            opacity:0;
          }
          79.167% {
            transform:translate(24px,78px);
            opacity:0;
          }
          81.25% {
            transform:translate(24px,78px);
            opacity:0;
          }
          83.333% {
            transform:translate(24px,78px);
            opacity:0;
          }
          85.417% {
            transform:translate(24px,78px);
            opacity:0;
          }
          87.5% {
            transform:translate(24px,78px);
            opacity:0;
          }
          89.583% {
            transform:translate(24px,78px);
            opacity:0;
          }
          91.667% {
            transform:translate(24px,78px);
            opacity:0;
          }
          93.75% {
            transform:translate(24px,78px);
            opacity:0;
          }
          95.833% {
            transform:translate(24px,78px);
            opacity:0;
          }
          97.917% {
            transform:translate(24px,78px);
            opacity:0;
          }
          100% {
            transform:translate(24px,78px);
            opacity:0;
          }
        }
        @keyframes allocation1 {
          0% {
            transform:translate(14px,33px);
            opacity:0;
          }
          2.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          4.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          6.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          8.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          10.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          12.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          14.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          16.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          18.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          20.833% {
            transform:translate(14px,33px);
            opacity:0;
          }
          22.917% {
            transform:translate(14px,33px);
            opacity:0;
          }
          25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          27.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          29.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          31.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          33.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          35.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          37.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          39.583% {
            transform:translate(22.225px,33px);
            opacity:1;
          }
          41.667% {
            transform:translate(33.048px,33px);
            opacity:1;
          }
          43.75% {
            transform:translate(43.87px,33px);
            opacity:1;
          }
          45.833% {
            transform:translate(54px,33.952px);
            opacity:1;
          }
          47.917% {
            transform:translate(54px,48.833px);
            opacity:1;
          }
          50% {
            transform:translate(54px,63.714px);
            opacity:1;
          }
          52.083% {
            transform:translate(54px,78px);
            opacity:0;
          }
          54.167% {
            transform:translate(54px,78px);
            opacity:0;
          }
          56.25% {
            transform:translate(54px,78px);
            opacity:0;
          }
          58.333% {
            transform:translate(54px,78px);
            opacity:0;
          }
          60.417% {
            transform:translate(54px,78px);
            opacity:0;
          }
          62.5% {
            transform:translate(54px,78px);
            opacity:0;
          }
          64.583% {
            transform:translate(54px,78px);
            opacity:0;
          }
          66.667% {
            transform:translate(54px,78px);
            opacity:0;
          }
          68.75% {
            transform:translate(54px,78px);
            opacity:0;
          }
          70.833% {
            transform:translate(54px,78px);
            opacity:0;
          }
          72.917% {
            transform:translate(54px,78px);
            opacity:0;
          }
          75% {
            transform:translate(54px,78px);
            opacity:0;
          }
          77.083% {
            transform:translate(54px,78px);
            opacity:0;
          }
          79.167% {
            transform:translate(54px,78px);
            opacity:0;
          }
          81.25% {
            transform:translate(54px,78px);
            opacity:0;
          }
          83.333% {
            transform:translate(54px,78px);
            opacity:0;
          }
          85.417% {
            transform:translate(54px,78px);
            opacity:0;
          }
          87.5% {
            transform:translate(54px,78px);
            opacity:0;
          }
          89.583% {
            transform:translate(54px,78px);
            opacity:0;
          }
          91.667% {
            transform:translate(54px,78px);
            opacity:0;
          }
          93.75% {
            transform:translate(54px,78px);
            opacity:0;
          }
          95.833% {
            transform:translate(54px,78px);
            opacity:0;
          }
          97.917% {
            transform:translate(54px,78px);
            opacity:0;
          }
          100% {
            transform:translate(54px,78px);
            opacity:0;
          }
        }
        @keyframes allocation2 {
          0% {
            transform:translate(14px,33px);
            opacity:0;
          }
          2.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          4.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          6.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          8.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          10.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          12.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          14.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          16.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          18.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          20.833% {
            transform:translate(14px,33px);
            opacity:0;
          }
          22.917% {
            transform:translate(14px,33px);
            opacity:0;
          }
          25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          27.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          29.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          31.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          33.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          35.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          37.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          39.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          41.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          43.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          45.833% {
            transform:translate(14px,33px);
            opacity:0;
          }
          47.917% {
            transform:translate(14px,33px);
            opacity:0;
          }
          50% {
            transform:translate(14px,33px);
            opacity:0;
          }
          52.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          54.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          56.25% {
            transform:translate(16.273px,33px);
            opacity:1;
          }
          58.333% {
            transform:translate(35.212px,33px);
            opacity:1;
          }
          60.417% {
            transform:translate(54.152px,33px);
            opacity:1;
          }
          62.5% {
            transform:translate(73.091px,33px);
            opacity:1;
          }
          64.583% {
            transform:translate(84px,39.31px);
            opacity:1;
          }
          66.667% {
            transform:translate(84px,54.19px);
            opacity:1;
          }
          68.75% {
            transform:translate(84px,69.071px);
            opacity:1;
          }
          70.833% {
            transform:translate(84px,78px);
            opacity:0;
          }
          72.917% {
            transform:translate(84px,78px);
            opacity:0;
          }
          75% {
            transform:translate(84px,78px);
            opacity:0;
          }
          77.083% {
            transform:translate(84px,78px);
            opacity:0;
          }
          79.167% {
            transform:translate(84px,78px);
            opacity:0;
          }
          81.25% {
            transform:translate(84px,78px);
            opacity:0;
          }
          83.333% {
            transform:translate(84px,78px);
            opacity:0;
          }
          85.417% {
            transform:translate(84px,78px);
            opacity:0;
          }
          87.5% {
            transform:translate(84px,78px);
            opacity:0;
          }
          89.583% {
            transform:translate(84px,78px);
            opacity:0;
          }
          91.667% {
            transform:translate(84px,78px);
            opacity:0;
          }
          93.75% {
            transform:translate(84px,78px);
            opacity:0;
          }
          95.833% {
            transform:translate(84px,78px);
            opacity:0;
          }
          97.917% {
            transform:translate(84px,78px);
            opacity:0;
          }
          100% {
            transform:translate(84px,78px);
            opacity:0;
          }
        }
        @keyframes allocation3 {
          0% {
            transform:translate(14px,33px);
            opacity:0;
          }
          2.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          4.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          6.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          8.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          10.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          12.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          14.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          16.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          18.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          20.833% {
            transform:translate(14px,33px);
            opacity:0;
          }
          22.917% {
            transform:translate(14px,33px);
            opacity:0;
          }
          25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          27.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          29.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          31.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          33.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          35.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          37.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          39.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          41.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          43.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          45.833% {
            transform:translate(14px,33px);
            opacity:0;
          }
          47.917% {
            transform:translate(14px,33px);
            opacity:0;
          }
          50% {
            transform:translate(14px,33px);
            opacity:0;
          }
          52.083% {
            transform:translate(14px,33px);
            opacity:0;
          }
          54.167% {
            transform:translate(14px,33px);
            opacity:0;
          }
          56.25% {
            transform:translate(14px,33px);
            opacity:0;
          }
          58.333% {
            transform:translate(14px,33px);
            opacity:0;
          }
          60.417% {
            transform:translate(14px,33px);
            opacity:0;
          }
          62.5% {
            transform:translate(14px,33px);
            opacity:0;
          }
          64.583% {
            transform:translate(14px,33px);
            opacity:0;
          }
          66.667% {
            transform:translate(14px,33px);
            opacity:0;
          }
          68.75% {
            transform:translate(14px,33px);
            opacity:0;
          }
          70.833% {
            transform:translate(14px,33px);
            opacity:0;
          }
          72.917% {
            transform:translate(14px,33px);
            opacity:0;
          }
          75% {
            transform:translate(26.987px,33px);
            opacity:1;
          }
          77.083% {
            transform:translate(54.043px,33px);
            opacity:1;
          }
          79.167% {
            transform:translate(81.1px,33px);
            opacity:1;
          }
          81.25% {
            transform:translate(108.156px,33px);
            opacity:1;
          }
          83.333% {
            transform:translate(114px,44.667px);
            opacity:1;
          }
          85.417% {
            transform:translate(114px,59.548px);
            opacity:1;
          }
          87.5% {
            transform:translate(114px,74.429px);
            opacity:1;
          }
          89.583% {
            transform:translate(114px,78px);
            opacity:0;
          }
          91.667% {
            transform:translate(114px,78px);
            opacity:0;
          }
          93.75% {
            transform:translate(114px,78px);
            opacity:0;
          }
          95.833% {
            transform:translate(114px,78px);
            opacity:0;
          }
          97.917% {
            transform:translate(114px,78px);
            opacity:0;
          }
          100% {
            transform:translate(114px,78px);
            opacity:0;
          }
        }
        @keyframes commonsEpisode {
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
          .gate0 {
            d:path('M19 42H29');
          }
          .watered0 {
            opacity:1;
          }
          .gate1 {
            d:path('M49 42H59');
          }
          .watered1 {
            opacity:1;
          }
          .gate2 {
            d:path('M79 42H89');
          }
          .watered2 {
            opacity:1;
          }
          .gate3 {
            d:path('M109 42L110 35');
          }
          .watered3 {
            opacity:0;
          }
          .initialDiversion {
            transform:translate(24px,78px);
            opacity:0;
          }
          .turn {
            transform:translate(123px,52px);
            opacity:1;
          }
          .allocation0 {
            transform:translate(24px,78px);
            opacity:0;
          }
          .allocation1 {
            transform:translate(54px,78px);
            opacity:0;
          }
          .allocation2 {
            transform:translate(84px,78px);
            opacity:0;
          }
          .allocation3 {
            transform:translate(26.987px,33px);
            opacity:1;
          }
          .commonsEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Common-Pool Governance">
        <g class="commonsEpisode">
          <path d="M12 28H127V38H12Z" fill="#2d6b78" stroke="#89bbb9"/>
          <rect x="13" y="78" width="23" height="39" fill="#324e32" stroke="#769767"/>
          <path d="M17 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M24 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M31 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M24 37V78" stroke="#6c8d70" stroke-width="3"/>
          <path d="M19 42H29" class="gate0" stroke="#d0b477" stroke-width="3"/>
          <circle cx="33" cy="61" r="3" fill="#a1b78e"/>
          <path d="M28 71Q28 65 33 65Q38 65 38 71Z" fill="#a1b78e"/>
          <rect x="15" y="109" width="19" height="5" class="watered0" fill="#7ab7b9" opacity="0"/>
          <rect x="43" y="78" width="23" height="39" fill="#324e32" stroke="#769767"/>
          <path d="M47 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M54 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M61 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M54 37V78" stroke="#6c8d70" stroke-width="3"/>
          <path d="M49 42H59" class="gate1" stroke="#d0b477" stroke-width="3"/>
          <circle cx="63" cy="61" r="3" fill="#a1b78e"/>
          <path d="M58 71Q58 65 63 65Q68 65 68 71Z" fill="#a1b78e"/>
          <rect x="45" y="109" width="19" height="5" class="watered1" fill="#7ab7b9" opacity="0"/>
          <rect x="73" y="78" width="23" height="39" fill="#324e32" stroke="#769767"/>
          <path d="M77 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M84 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M91 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M84 37V78" stroke="#6c8d70" stroke-width="3"/>
          <path d="M79 42H89" class="gate2" stroke="#d0b477" stroke-width="3"/>
          <circle cx="93" cy="61" r="3" fill="#a1b78e"/>
          <path d="M88 71Q88 65 93 65Q98 65 98 71Z" fill="#a1b78e"/>
          <rect x="75" y="109" width="19" height="5" class="watered2" fill="#7ab7b9" opacity="0"/>
          <rect x="103" y="78" width="23" height="39" fill="#324e32" stroke="#769767"/>
          <path d="M107 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M114 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M121 108v-21m-2 7 2 -3 2 3m-4 5 2 -3 2 3" fill="none" stroke="#90ac6c"/>
          <path d="M114 37V78" stroke="#6c8d70" stroke-width="3"/>
          <path d="M109 42H119" class="gate3" stroke="#d0b477" stroke-width="3"/>
          <circle cx="123" cy="61" r="3" fill="#a1b78e"/>
          <path d="M118 71Q118 65 123 65Q128 65 128 71Z" fill="#a1b78e"/>
          <rect x="105" y="109" width="19" height="5" class="watered3" fill="#7ab7b9" opacity="0"/>
          <circle cx="0" cy="0" r="2" class="initialDiversion" fill="#b5e0d8"/>
          <circle cx="0" cy="0" r="4" class="turn" fill="#dfc881" stroke="#fbdfa1"/>
          <circle cx="0" cy="0" r="2" class="allocation0" fill="#b5e0d8" opacity="0"/>
          <circle cx="0" cy="0" r="2" class="allocation1" fill="#b5e0d8" opacity="0"/>
          <circle cx="0" cy="0" r="2" class="allocation2" fill="#b5e0d8" opacity="0"/>
          <circle cx="0" cy="0" r="2" class="allocation3" fill="#b5e0d8" opacity="0"/>
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

if (!customElements.get("concept-common-pool-governance")) {
  customElements.define("concept-common-pool-governance", ConceptCommonPoolGovernance);
}
