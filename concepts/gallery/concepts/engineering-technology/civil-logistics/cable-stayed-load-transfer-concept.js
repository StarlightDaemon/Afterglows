// Cable-Stayed Load Transfer. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCableStayedLoadTransfer extends HTMLElement {
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
        .stay00 {
          animation:stay00 16s linear infinite;
        }
        .stay01 {
          animation:stay01 16s linear infinite;
        }
        .stay02 {
          animation:stay02 16s linear infinite;
        }
        .stay10 {
          animation:stay10 16s linear infinite;
        }
        .stay11 {
          animation:stay11 16s linear infinite;
        }
        .stay12 {
          animation:stay12 16s linear infinite;
        }
        .deckload0 {
          animation:deckload0 16s linear infinite;
        }
        .deckload1 {
          animation:deckload1 16s linear infinite;
        }
        @keyframes stay00 {
          0% {
            stroke-width:3.118;
            stroke:#f0ca7c;
          }
          2.083% {
            stroke-width:3.1;
            stroke:#f0ca7c;
          }
          4.167% {
            stroke-width:3.048;
            stroke:#f0ca7c;
          }
          6.25% {
            stroke-width:2.962;
            stroke:#f0ca7c;
          }
          8.333% {
            stroke-width:2.843;
            stroke:#f0ca7c;
          }
          10.417% {
            stroke-width:2.694;
            stroke:#f0ca7c;
          }
          12.5% {
            stroke-width:2.518;
            stroke:#f0ca7c;
          }
          14.583% {
            stroke-width:2.316;
            stroke:#f0ca7c;
          }
          16.667% {
            stroke-width:2.093;
            stroke:#f0ca7c;
          }
          18.75% {
            stroke-width:1.853;
            stroke:#71938b;
          }
          20.833% {
            stroke-width:1.599;
            stroke:#71938b;
          }
          22.917% {
            stroke-width:1.336;
            stroke:#71938b;
          }
          25% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          27.083% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          29.167% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          31.25% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          33.333% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          35.417% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          37.5% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          39.583% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          41.667% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          43.75% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          45.833% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          47.917% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          50% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          52.083% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          54.167% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          56.25% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          58.333% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          60.417% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          62.5% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          64.583% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          66.667% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          68.75% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          70.833% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          72.917% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          75% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          77.083% {
            stroke-width:1.336;
            stroke:#71938b;
          }
          79.167% {
            stroke-width:1.599;
            stroke:#71938b;
          }
          81.25% {
            stroke-width:1.853;
            stroke:#71938b;
          }
          83.333% {
            stroke-width:2.093;
            stroke:#f0ca7c;
          }
          85.417% {
            stroke-width:2.316;
            stroke:#f0ca7c;
          }
          87.5% {
            stroke-width:2.518;
            stroke:#f0ca7c;
          }
          89.583% {
            stroke-width:2.694;
            stroke:#f0ca7c;
          }
          91.667% {
            stroke-width:2.843;
            stroke:#f0ca7c;
          }
          93.75% {
            stroke-width:2.962;
            stroke:#f0ca7c;
          }
          95.833% {
            stroke-width:3.048;
            stroke:#f0ca7c;
          }
          97.917% {
            stroke-width:3.1;
            stroke:#f0ca7c;
          }
          100% {
            stroke-width:3.118;
            stroke:#f0ca7c;
          }
        }
        @keyframes stay01 {
          0% {
            stroke-width:1.026;
            stroke:#71938b;
          }
          2.083% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          4.167% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          6.25% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          8.333% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          10.417% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          12.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          14.583% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          16.667% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          18.75% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          20.833% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          22.917% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          25% {
            stroke-width:2.84;
            stroke:#f0ca7c;
          }
          27.083% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          29.167% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          31.25% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          33.333% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          35.417% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          37.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          39.583% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          41.667% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          43.75% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          45.833% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          47.917% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          50% {
            stroke-width:1.026;
            stroke:#71938b;
          }
          52.083% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          54.167% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          56.25% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          58.333% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          60.417% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          62.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          64.583% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          66.667% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          68.75% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          70.833% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          72.917% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          75% {
            stroke-width:2.84;
            stroke:#f0ca7c;
          }
          77.083% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          79.167% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          81.25% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          83.333% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          85.417% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          87.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          89.583% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          91.667% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          93.75% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          95.833% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          97.917% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          100% {
            stroke-width:1.026;
            stroke:#71938b;
          }
        }
        @keyframes stay02 {
          0% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          2.083% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          4.167% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          6.25% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          8.333% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          10.417% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          12.5% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          14.583% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          16.667% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          18.75% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          20.833% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          22.917% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          25% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          27.083% {
            stroke-width:1.214;
            stroke:#71938b;
          }
          29.167% {
            stroke-width:1.427;
            stroke:#71938b;
          }
          31.25% {
            stroke-width:1.632;
            stroke:#71938b;
          }
          33.333% {
            stroke-width:1.826;
            stroke:#f0ca7c;
          }
          35.417% {
            stroke-width:2.006;
            stroke:#f0ca7c;
          }
          37.5% {
            stroke-width:2.169;
            stroke:#f0ca7c;
          }
          39.583% {
            stroke-width:2.312;
            stroke:#f0ca7c;
          }
          41.667% {
            stroke-width:2.432;
            stroke:#f0ca7c;
          }
          43.75% {
            stroke-width:2.528;
            stroke:#f0ca7c;
          }
          45.833% {
            stroke-width:2.598;
            stroke:#f0ca7c;
          }
          47.917% {
            stroke-width:2.64;
            stroke:#f0ca7c;
          }
          50% {
            stroke-width:2.654;
            stroke:#f0ca7c;
          }
          52.083% {
            stroke-width:2.64;
            stroke:#f0ca7c;
          }
          54.167% {
            stroke-width:2.598;
            stroke:#f0ca7c;
          }
          56.25% {
            stroke-width:2.528;
            stroke:#f0ca7c;
          }
          58.333% {
            stroke-width:2.432;
            stroke:#f0ca7c;
          }
          60.417% {
            stroke-width:2.312;
            stroke:#f0ca7c;
          }
          62.5% {
            stroke-width:2.169;
            stroke:#f0ca7c;
          }
          64.583% {
            stroke-width:2.006;
            stroke:#f0ca7c;
          }
          66.667% {
            stroke-width:1.826;
            stroke:#f0ca7c;
          }
          68.75% {
            stroke-width:1.632;
            stroke:#71938b;
          }
          70.833% {
            stroke-width:1.427;
            stroke:#71938b;
          }
          72.917% {
            stroke-width:1.214;
            stroke:#71938b;
          }
          75% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          77.083% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          79.167% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          81.25% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          83.333% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          85.417% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          87.5% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          89.583% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          91.667% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          93.75% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          95.833% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          97.917% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          100% {
            stroke-width:0.998;
            stroke:#71938b;
          }
        }
        @keyframes stay10 {
          0% {
            stroke-width:3.118;
            stroke:#f0ca7c;
          }
          2.083% {
            stroke-width:3.1;
            stroke:#f0ca7c;
          }
          4.167% {
            stroke-width:3.048;
            stroke:#f0ca7c;
          }
          6.25% {
            stroke-width:2.962;
            stroke:#f0ca7c;
          }
          8.333% {
            stroke-width:2.843;
            stroke:#f0ca7c;
          }
          10.417% {
            stroke-width:2.694;
            stroke:#f0ca7c;
          }
          12.5% {
            stroke-width:2.518;
            stroke:#f0ca7c;
          }
          14.583% {
            stroke-width:2.316;
            stroke:#f0ca7c;
          }
          16.667% {
            stroke-width:2.093;
            stroke:#f0ca7c;
          }
          18.75% {
            stroke-width:1.853;
            stroke:#71938b;
          }
          20.833% {
            stroke-width:1.599;
            stroke:#71938b;
          }
          22.917% {
            stroke-width:1.336;
            stroke:#71938b;
          }
          25% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          27.083% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          29.167% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          31.25% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          33.333% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          35.417% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          37.5% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          39.583% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          41.667% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          43.75% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          45.833% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          47.917% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          50% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          52.083% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          54.167% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          56.25% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          58.333% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          60.417% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          62.5% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          64.583% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          66.667% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          68.75% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          70.833% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          72.917% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          75% {
            stroke-width:1.069;
            stroke:#71938b;
          }
          77.083% {
            stroke-width:1.336;
            stroke:#71938b;
          }
          79.167% {
            stroke-width:1.599;
            stroke:#71938b;
          }
          81.25% {
            stroke-width:1.853;
            stroke:#71938b;
          }
          83.333% {
            stroke-width:2.093;
            stroke:#f0ca7c;
          }
          85.417% {
            stroke-width:2.316;
            stroke:#f0ca7c;
          }
          87.5% {
            stroke-width:2.518;
            stroke:#f0ca7c;
          }
          89.583% {
            stroke-width:2.694;
            stroke:#f0ca7c;
          }
          91.667% {
            stroke-width:2.843;
            stroke:#f0ca7c;
          }
          93.75% {
            stroke-width:2.962;
            stroke:#f0ca7c;
          }
          95.833% {
            stroke-width:3.048;
            stroke:#f0ca7c;
          }
          97.917% {
            stroke-width:3.1;
            stroke:#f0ca7c;
          }
          100% {
            stroke-width:3.118;
            stroke:#f0ca7c;
          }
        }
        @keyframes stay11 {
          0% {
            stroke-width:1.026;
            stroke:#71938b;
          }
          2.083% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          4.167% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          6.25% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          8.333% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          10.417% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          12.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          14.583% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          16.667% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          18.75% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          20.833% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          22.917% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          25% {
            stroke-width:2.84;
            stroke:#f0ca7c;
          }
          27.083% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          29.167% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          31.25% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          33.333% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          35.417% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          37.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          39.583% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          41.667% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          43.75% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          45.833% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          47.917% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          50% {
            stroke-width:1.026;
            stroke:#71938b;
          }
          52.083% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          54.167% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          56.25% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          58.333% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          60.417% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          62.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          64.583% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          66.667% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          68.75% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          70.833% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          72.917% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          75% {
            stroke-width:2.84;
            stroke:#f0ca7c;
          }
          77.083% {
            stroke-width:2.603;
            stroke:#f0ca7c;
          }
          79.167% {
            stroke-width:2.37;
            stroke:#f0ca7c;
          }
          81.25% {
            stroke-width:2.146;
            stroke:#f0ca7c;
          }
          83.333% {
            stroke-width:1.933;
            stroke:#f0ca7c;
          }
          85.417% {
            stroke-width:1.736;
            stroke:#71938b;
          }
          87.5% {
            stroke-width:1.558;
            stroke:#71938b;
          }
          89.583% {
            stroke-width:1.401;
            stroke:#71938b;
          }
          91.667% {
            stroke-width:1.269;
            stroke:#71938b;
          }
          93.75% {
            stroke-width:1.164;
            stroke:#71938b;
          }
          95.833% {
            stroke-width:1.088;
            stroke:#71938b;
          }
          97.917% {
            stroke-width:1.042;
            stroke:#71938b;
          }
          100% {
            stroke-width:1.026;
            stroke:#71938b;
          }
        }
        @keyframes stay12 {
          0% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          2.083% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          4.167% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          6.25% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          8.333% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          10.417% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          12.5% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          14.583% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          16.667% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          18.75% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          20.833% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          22.917% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          25% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          27.083% {
            stroke-width:1.214;
            stroke:#71938b;
          }
          29.167% {
            stroke-width:1.427;
            stroke:#71938b;
          }
          31.25% {
            stroke-width:1.632;
            stroke:#71938b;
          }
          33.333% {
            stroke-width:1.826;
            stroke:#f0ca7c;
          }
          35.417% {
            stroke-width:2.006;
            stroke:#f0ca7c;
          }
          37.5% {
            stroke-width:2.169;
            stroke:#f0ca7c;
          }
          39.583% {
            stroke-width:2.312;
            stroke:#f0ca7c;
          }
          41.667% {
            stroke-width:2.432;
            stroke:#f0ca7c;
          }
          43.75% {
            stroke-width:2.528;
            stroke:#f0ca7c;
          }
          45.833% {
            stroke-width:2.598;
            stroke:#f0ca7c;
          }
          47.917% {
            stroke-width:2.64;
            stroke:#f0ca7c;
          }
          50% {
            stroke-width:2.654;
            stroke:#f0ca7c;
          }
          52.083% {
            stroke-width:2.64;
            stroke:#f0ca7c;
          }
          54.167% {
            stroke-width:2.598;
            stroke:#f0ca7c;
          }
          56.25% {
            stroke-width:2.528;
            stroke:#f0ca7c;
          }
          58.333% {
            stroke-width:2.432;
            stroke:#f0ca7c;
          }
          60.417% {
            stroke-width:2.312;
            stroke:#f0ca7c;
          }
          62.5% {
            stroke-width:2.169;
            stroke:#f0ca7c;
          }
          64.583% {
            stroke-width:2.006;
            stroke:#f0ca7c;
          }
          66.667% {
            stroke-width:1.826;
            stroke:#f0ca7c;
          }
          68.75% {
            stroke-width:1.632;
            stroke:#71938b;
          }
          70.833% {
            stroke-width:1.427;
            stroke:#71938b;
          }
          72.917% {
            stroke-width:1.214;
            stroke:#71938b;
          }
          75% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          77.083% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          79.167% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          81.25% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          83.333% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          85.417% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          87.5% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          89.583% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          91.667% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          93.75% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          95.833% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          97.917% {
            stroke-width:0.998;
            stroke:#71938b;
          }
          100% {
            stroke-width:0.998;
            stroke:#71938b;
          }
        }
        @keyframes deckload0 {
          0% {
            transform:translate(22px,94px);
          }
          2.083% {
            transform:translate(22.137px,94px);
          }
          4.167% {
            transform:translate(22.545px,94px);
          }
          6.25% {
            transform:translate(23.218px,94px);
          }
          8.333% {
            transform:translate(24.144px,94px);
          }
          10.417% {
            transform:translate(25.306px,94px);
          }
          12.5% {
            transform:translate(26.686px,94px);
          }
          14.583% {
            transform:translate(28.26px,94px);
          }
          16.667% {
            transform:translate(30px,94px);
          }
          18.75% {
            transform:translate(31.877px,94px);
          }
          20.833% {
            transform:translate(33.859px,94px);
          }
          22.917% {
            transform:translate(35.912px,94px);
          }
          25% {
            transform:translate(38px,94px);
          }
          27.083% {
            transform:translate(40.088px,94px);
          }
          29.167% {
            transform:translate(42.141px,94px);
          }
          31.25% {
            transform:translate(44.123px,94px);
          }
          33.333% {
            transform:translate(46px,94px);
          }
          35.417% {
            transform:translate(47.74px,94px);
          }
          37.5% {
            transform:translate(49.314px,94px);
          }
          39.583% {
            transform:translate(50.694px,94px);
          }
          41.667% {
            transform:translate(51.856px,94px);
          }
          43.75% {
            transform:translate(52.782px,94px);
          }
          45.833% {
            transform:translate(53.455px,94px);
          }
          47.917% {
            transform:translate(53.863px,94px);
          }
          50% {
            transform:translate(54px,94px);
          }
          52.083% {
            transform:translate(53.863px,94px);
          }
          54.167% {
            transform:translate(53.455px,94px);
          }
          56.25% {
            transform:translate(52.782px,94px);
          }
          58.333% {
            transform:translate(51.856px,94px);
          }
          60.417% {
            transform:translate(50.694px,94px);
          }
          62.5% {
            transform:translate(49.314px,94px);
          }
          64.583% {
            transform:translate(47.74px,94px);
          }
          66.667% {
            transform:translate(46px,94px);
          }
          68.75% {
            transform:translate(44.123px,94px);
          }
          70.833% {
            transform:translate(42.141px,94px);
          }
          72.917% {
            transform:translate(40.088px,94px);
          }
          75% {
            transform:translate(38px,94px);
          }
          77.083% {
            transform:translate(35.912px,94px);
          }
          79.167% {
            transform:translate(33.859px,94px);
          }
          81.25% {
            transform:translate(31.877px,94px);
          }
          83.333% {
            transform:translate(30px,94px);
          }
          85.417% {
            transform:translate(28.26px,94px);
          }
          87.5% {
            transform:translate(26.686px,94px);
          }
          89.583% {
            transform:translate(25.306px,94px);
          }
          91.667% {
            transform:translate(24.144px,94px);
          }
          93.75% {
            transform:translate(23.218px,94px);
          }
          95.833% {
            transform:translate(22.545px,94px);
          }
          97.917% {
            transform:translate(22.137px,94px);
          }
          100% {
            transform:translate(22px,94px);
          }
        }
        @keyframes deckload1 {
          0% {
            transform:translate(118px,94px);
          }
          2.083% {
            transform:translate(117.863px,94px);
          }
          4.167% {
            transform:translate(117.455px,94px);
          }
          6.25% {
            transform:translate(116.782px,94px);
          }
          8.333% {
            transform:translate(115.856px,94px);
          }
          10.417% {
            transform:translate(114.694px,94px);
          }
          12.5% {
            transform:translate(113.314px,94px);
          }
          14.583% {
            transform:translate(111.74px,94px);
          }
          16.667% {
            transform:translate(110px,94px);
          }
          18.75% {
            transform:translate(108.123px,94px);
          }
          20.833% {
            transform:translate(106.141px,94px);
          }
          22.917% {
            transform:translate(104.088px,94px);
          }
          25% {
            transform:translate(102px,94px);
          }
          27.083% {
            transform:translate(99.912px,94px);
          }
          29.167% {
            transform:translate(97.859px,94px);
          }
          31.25% {
            transform:translate(95.877px,94px);
          }
          33.333% {
            transform:translate(94px,94px);
          }
          35.417% {
            transform:translate(92.26px,94px);
          }
          37.5% {
            transform:translate(90.686px,94px);
          }
          39.583% {
            transform:translate(89.306px,94px);
          }
          41.667% {
            transform:translate(88.144px,94px);
          }
          43.75% {
            transform:translate(87.218px,94px);
          }
          45.833% {
            transform:translate(86.545px,94px);
          }
          47.917% {
            transform:translate(86.137px,94px);
          }
          50% {
            transform:translate(86px,94px);
          }
          52.083% {
            transform:translate(86.137px,94px);
          }
          54.167% {
            transform:translate(86.545px,94px);
          }
          56.25% {
            transform:translate(87.218px,94px);
          }
          58.333% {
            transform:translate(88.144px,94px);
          }
          60.417% {
            transform:translate(89.306px,94px);
          }
          62.5% {
            transform:translate(90.686px,94px);
          }
          64.583% {
            transform:translate(92.26px,94px);
          }
          66.667% {
            transform:translate(94px,94px);
          }
          68.75% {
            transform:translate(95.877px,94px);
          }
          70.833% {
            transform:translate(97.859px,94px);
          }
          72.917% {
            transform:translate(99.912px,94px);
          }
          75% {
            transform:translate(102px,94px);
          }
          77.083% {
            transform:translate(104.088px,94px);
          }
          79.167% {
            transform:translate(106.141px,94px);
          }
          81.25% {
            transform:translate(108.123px,94px);
          }
          83.333% {
            transform:translate(110px,94px);
          }
          85.417% {
            transform:translate(111.74px,94px);
          }
          87.5% {
            transform:translate(113.314px,94px);
          }
          89.583% {
            transform:translate(114.694px,94px);
          }
          91.667% {
            transform:translate(115.856px,94px);
          }
          93.75% {
            transform:translate(116.782px,94px);
          }
          95.833% {
            transform:translate(117.455px,94px);
          }
          97.917% {
            transform:translate(117.863px,94px);
          }
          100% {
            transform:translate(118px,94px);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .stay00 {
            stroke-width:1.069;
            stroke:#71938b;
          }
          .stay01 {
            stroke-width:2.84;
            stroke:#f0ca7c;
          }
          .stay02 {
            stroke-width:0.998;
            stroke:#71938b;
          }
          .stay10 {
            stroke-width:1.069;
            stroke:#71938b;
          }
          .stay11 {
            stroke-width:2.84;
            stroke:#f0ca7c;
          }
          .stay12 {
            stroke-width:0.998;
            stroke:#71938b;
          }
          .deckload0 {
            transform:translate(38px,94px);
          }
          .deckload1 {
            transform:translate(102px,94px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Cable-Stayed Load Transfer">
        <path d="M10 122Q35 119 62 122T131 122" fill="none" stroke="#397481"/>
        <rect x="67" y="28" width="6" height="91" fill="#9cb6a1"/>
        <rect x="13" y="95" width="114" height="5" fill="#667d70"/>
        <rect x="64" y="116" width="12" height="8" fill="#71897a"/>
        <path d="M70 35L22 95" class="stay00" stroke="#c9c5a0" stroke-width="1.5"/>
        <path d="M70 35L38 95" class="stay01" stroke="#c9c5a0" stroke-width="1.5"/>
        <path d="M70 35L54 95" class="stay02" stroke="#c9c5a0" stroke-width="1.5"/>
        <path d="M70 35L118 95" class="stay10" stroke="#c9c5a0" stroke-width="1.5"/>
        <path d="M70 35L102 95" class="stay11" stroke="#c9c5a0" stroke-width="1.5"/>
        <path d="M70 35L86 95" class="stay12" stroke="#c9c5a0" stroke-width="1.5"/>
        <g class="deckload0">
          <rect x="-5" y="-8" width="10" height="6" fill="#85c7d4"/>
          <circle cx="-3" cy="0" r="1.5" fill="#bbc9b5"/>
          <circle cx="3" cy="0" r="1.5" fill="#bbc9b5"/>
        </g>
        <g class="deckload1">
          <rect x="-5" y="-8" width="10" height="6" fill="#85c7d4"/>
          <circle cx="-3" cy="0" r="1.5" fill="#bbc9b5"/>
          <circle cx="3" cy="0" r="1.5" fill="#bbc9b5"/>
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

if (!customElements.get("concept-cable-stayed-load-transfer")) {
  customElements.define("concept-cable-stayed-load-transfer", ConceptCableStayedLoadTransfer);
}
