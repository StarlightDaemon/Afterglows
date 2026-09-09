// Atmospheric River. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAtmosphericRiver extends HTMLElement {
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
        .vapor {
          animation:transport 16s linear infinite;
        }
        .landfall0 {
          animation:landfall0 16s linear infinite;
        }
        .landfall0 {
          animation:landfall0 16s linear infinite;
        }
        .landfall1 {
          animation:landfall1 16s linear infinite;
        }
        .landfall1 {
          animation:landfall1 16s linear infinite;
        }
        .landfall2 {
          animation:landfall2 16s linear infinite;
        }
        .landfall2 {
          animation:landfall2 16s linear infinite;
        }
        .landfall3 {
          animation:landfall3 16s linear infinite;
        }
        .landfall3 {
          animation:landfall3 16s linear infinite;
        }
        .landfall4 {
          animation:landfall4 16s linear infinite;
        }
        .landfall4 {
          animation:landfall4 16s linear infinite;
        }
        .landfall5 {
          animation:landfall5 16s linear infinite;
        }
        .landfall5 {
          animation:landfall5 16s linear infinite;
        }
        .landfall6 {
          animation:landfall6 16s linear infinite;
        }
        .landfall6 {
          animation:landfall6 16s linear infinite;
        }
        @keyframes transport {
          to {
            stroke-dashoffset:-112
          }
        }
        @keyframes landfall0 {
          0% {
            transform:translate(0px,0px);
            opacity:0.35;
          }
          2.083% {
            transform:translate(0px,1.5px);
            opacity:0.518;
          }
          4.167% {
            transform:translate(0px,2.598px);
            opacity:0.675;
          }
          6.25% {
            transform:translate(0px,3px);
            opacity:0.81;
          }
          8.333% {
            transform:translate(0px,2.598px);
            opacity:0.913;
          }
          10.417% {
            transform:translate(0px,1.5px);
            opacity:0.978;
          }
          12.5% {
            transform:translate(0px,0px);
            opacity:1;
          }
          14.583% {
            transform:translate(0px,-1.5px);
            opacity:0.978;
          }
          16.667% {
            transform:translate(0px,-2.598px);
            opacity:0.913;
          }
          18.75% {
            transform:translate(0px,-3px);
            opacity:0.81;
          }
          20.833% {
            transform:translate(0px,-2.598px);
            opacity:0.675;
          }
          22.917% {
            transform:translate(0px,-1.5px);
            opacity:0.518;
          }
          25% {
            transform:translate(0px,0px);
            opacity:0.35;
          }
          27.083% {
            transform:translate(0px,1.5px);
            opacity:0.518;
          }
          29.167% {
            transform:translate(0px,2.598px);
            opacity:0.675;
          }
          31.25% {
            transform:translate(0px,3px);
            opacity:0.81;
          }
          33.333% {
            transform:translate(0px,2.598px);
            opacity:0.913;
          }
          35.417% {
            transform:translate(0px,1.5px);
            opacity:0.978;
          }
          37.5% {
            transform:translate(0px,0px);
            opacity:1;
          }
          39.583% {
            transform:translate(0px,-1.5px);
            opacity:0.978;
          }
          41.667% {
            transform:translate(0px,-2.598px);
            opacity:0.913;
          }
          43.75% {
            transform:translate(0px,-3px);
            opacity:0.81;
          }
          45.833% {
            transform:translate(0px,-2.598px);
            opacity:0.675;
          }
          47.917% {
            transform:translate(0px,-1.5px);
            opacity:0.518;
          }
          50% {
            transform:translate(0px,0px);
            opacity:0.35;
          }
          52.083% {
            transform:translate(0px,1.5px);
            opacity:0.518;
          }
          54.167% {
            transform:translate(0px,2.598px);
            opacity:0.675;
          }
          56.25% {
            transform:translate(0px,3px);
            opacity:0.81;
          }
          58.333% {
            transform:translate(0px,2.598px);
            opacity:0.913;
          }
          60.417% {
            transform:translate(0px,1.5px);
            opacity:0.978;
          }
          62.5% {
            transform:translate(0px,0px);
            opacity:1;
          }
          64.583% {
            transform:translate(0px,-1.5px);
            opacity:0.978;
          }
          66.667% {
            transform:translate(0px,-2.598px);
            opacity:0.913;
          }
          68.75% {
            transform:translate(0px,-3px);
            opacity:0.81;
          }
          70.833% {
            transform:translate(0px,-2.598px);
            opacity:0.675;
          }
          72.917% {
            transform:translate(0px,-1.5px);
            opacity:0.518;
          }
          75% {
            transform:translate(0px,0px);
            opacity:0.35;
          }
          77.083% {
            transform:translate(0px,1.5px);
            opacity:0.518;
          }
          79.167% {
            transform:translate(0px,2.598px);
            opacity:0.675;
          }
          81.25% {
            transform:translate(0px,3px);
            opacity:0.81;
          }
          83.333% {
            transform:translate(0px,2.598px);
            opacity:0.913;
          }
          85.417% {
            transform:translate(0px,1.5px);
            opacity:0.978;
          }
          87.5% {
            transform:translate(0px,0px);
            opacity:1;
          }
          89.583% {
            transform:translate(0px,-1.5px);
            opacity:0.978;
          }
          91.667% {
            transform:translate(0px,-2.598px);
            opacity:0.913;
          }
          93.75% {
            transform:translate(0px,-3px);
            opacity:0.81;
          }
          95.833% {
            transform:translate(0px,-2.598px);
            opacity:0.675;
          }
          97.917% {
            transform:translate(0px,-1.5px);
            opacity:0.518;
          }
          100% {
            transform:translate(0px,0px);
            opacity:0.35;
          }
        }
        @keyframes landfall1 {
          0% {
            transform:translate(0px,2.345px);
            opacity:0.632;
          }
          2.083% {
            transform:translate(0px,2.966px);
            opacity:0.774;
          }
          4.167% {
            transform:translate(0px,2.793px);
            opacity:0.887;
          }
          6.25% {
            transform:translate(0px,1.87px);
            opacity:0.964;
          }
          8.333% {
            transform:translate(0px,0.447px);
            opacity:0.998;
          }
          10.417% {
            transform:translate(0px,-1.096px);
            opacity:0.989;
          }
          12.5% {
            transform:translate(0px,-2.345px);
            opacity:0.936;
          }
          14.583% {
            transform:translate(0px,-2.966px);
            opacity:0.843;
          }
          16.667% {
            transform:translate(0px,-2.793px);
            opacity:0.716;
          }
          18.75% {
            transform:translate(0px,-1.87px);
            opacity:0.565;
          }
          20.833% {
            transform:translate(0px,-0.447px);
            opacity:0.399;
          }
          22.917% {
            transform:translate(0px,1.096px);
            opacity:0.471;
          }
          25% {
            transform:translate(0px,2.345px);
            opacity:0.632;
          }
          27.083% {
            transform:translate(0px,2.966px);
            opacity:0.774;
          }
          29.167% {
            transform:translate(0px,2.793px);
            opacity:0.887;
          }
          31.25% {
            transform:translate(0px,1.87px);
            opacity:0.964;
          }
          33.333% {
            transform:translate(0px,0.447px);
            opacity:0.998;
          }
          35.417% {
            transform:translate(0px,-1.096px);
            opacity:0.989;
          }
          37.5% {
            transform:translate(0px,-2.345px);
            opacity:0.936;
          }
          39.583% {
            transform:translate(0px,-2.966px);
            opacity:0.843;
          }
          41.667% {
            transform:translate(0px,-2.793px);
            opacity:0.716;
          }
          43.75% {
            transform:translate(0px,-1.87px);
            opacity:0.565;
          }
          45.833% {
            transform:translate(0px,-0.447px);
            opacity:0.399;
          }
          47.917% {
            transform:translate(0px,1.096px);
            opacity:0.471;
          }
          50% {
            transform:translate(0px,2.345px);
            opacity:0.632;
          }
          52.083% {
            transform:translate(0px,2.966px);
            opacity:0.774;
          }
          54.167% {
            transform:translate(0px,2.793px);
            opacity:0.887;
          }
          56.25% {
            transform:translate(0px,1.87px);
            opacity:0.964;
          }
          58.333% {
            transform:translate(0px,0.447px);
            opacity:0.998;
          }
          60.417% {
            transform:translate(0px,-1.096px);
            opacity:0.989;
          }
          62.5% {
            transform:translate(0px,-2.345px);
            opacity:0.936;
          }
          64.583% {
            transform:translate(0px,-2.966px);
            opacity:0.843;
          }
          66.667% {
            transform:translate(0px,-2.793px);
            opacity:0.716;
          }
          68.75% {
            transform:translate(0px,-1.87px);
            opacity:0.565;
          }
          70.833% {
            transform:translate(0px,-0.447px);
            opacity:0.399;
          }
          72.917% {
            transform:translate(0px,1.096px);
            opacity:0.471;
          }
          75% {
            transform:translate(0px,2.345px);
            opacity:0.632;
          }
          77.083% {
            transform:translate(0px,2.966px);
            opacity:0.774;
          }
          79.167% {
            transform:translate(0px,2.793px);
            opacity:0.887;
          }
          81.25% {
            transform:translate(0px,1.87px);
            opacity:0.964;
          }
          83.333% {
            transform:translate(0px,0.447px);
            opacity:0.998;
          }
          85.417% {
            transform:translate(0px,-1.096px);
            opacity:0.989;
          }
          87.5% {
            transform:translate(0px,-2.345px);
            opacity:0.936;
          }
          89.583% {
            transform:translate(0px,-2.966px);
            opacity:0.843;
          }
          91.667% {
            transform:translate(0px,-2.793px);
            opacity:0.716;
          }
          93.75% {
            transform:translate(0px,-1.87px);
            opacity:0.565;
          }
          95.833% {
            transform:translate(0px,-0.447px);
            opacity:0.399;
          }
          97.917% {
            transform:translate(0px,1.096px);
            opacity:0.471;
          }
          100% {
            transform:translate(0px,2.345px);
            opacity:0.632;
          }
        }
        @keyframes landfall2 {
          0% {
            transform:translate(0px,2.925px);
            opacity:0.858;
          }
          2.083% {
            transform:translate(0px,2.199px);
            opacity:0.946;
          }
          4.167% {
            transform:translate(0px,0.884px);
            opacity:0.993;
          }
          6.25% {
            transform:translate(0px,-0.668px);
            opacity:0.996;
          }
          8.333% {
            transform:translate(0px,-2.041px);
            opacity:0.955;
          }
          10.417% {
            transform:translate(0px,-2.867px);
            opacity:0.873;
          }
          12.5% {
            transform:translate(0px,-2.925px);
            opacity:0.755;
          }
          14.583% {
            transform:translate(0px,-2.199px);
            opacity:0.61;
          }
          16.667% {
            transform:translate(0px,-0.884px);
            opacity:0.447;
          }
          18.75% {
            transform:translate(0px,0.668px);
            opacity:0.423;
          }
          20.833% {
            transform:translate(0px,2.041px);
            opacity:0.587;
          }
          22.917% {
            transform:translate(0px,2.867px);
            opacity:0.736;
          }
          25% {
            transform:translate(0px,2.925px);
            opacity:0.858;
          }
          27.083% {
            transform:translate(0px,2.199px);
            opacity:0.946;
          }
          29.167% {
            transform:translate(0px,0.884px);
            opacity:0.993;
          }
          31.25% {
            transform:translate(0px,-0.668px);
            opacity:0.996;
          }
          33.333% {
            transform:translate(0px,-2.041px);
            opacity:0.955;
          }
          35.417% {
            transform:translate(0px,-2.867px);
            opacity:0.873;
          }
          37.5% {
            transform:translate(0px,-2.925px);
            opacity:0.755;
          }
          39.583% {
            transform:translate(0px,-2.199px);
            opacity:0.61;
          }
          41.667% {
            transform:translate(0px,-0.884px);
            opacity:0.447;
          }
          43.75% {
            transform:translate(0px,0.668px);
            opacity:0.423;
          }
          45.833% {
            transform:translate(0px,2.041px);
            opacity:0.587;
          }
          47.917% {
            transform:translate(0px,2.867px);
            opacity:0.736;
          }
          50% {
            transform:translate(0px,2.925px);
            opacity:0.858;
          }
          52.083% {
            transform:translate(0px,2.199px);
            opacity:0.946;
          }
          54.167% {
            transform:translate(0px,0.884px);
            opacity:0.993;
          }
          56.25% {
            transform:translate(0px,-0.668px);
            opacity:0.996;
          }
          58.333% {
            transform:translate(0px,-2.041px);
            opacity:0.955;
          }
          60.417% {
            transform:translate(0px,-2.867px);
            opacity:0.873;
          }
          62.5% {
            transform:translate(0px,-2.925px);
            opacity:0.755;
          }
          64.583% {
            transform:translate(0px,-2.199px);
            opacity:0.61;
          }
          66.667% {
            transform:translate(0px,-0.884px);
            opacity:0.447;
          }
          68.75% {
            transform:translate(0px,0.668px);
            opacity:0.423;
          }
          70.833% {
            transform:translate(0px,2.041px);
            opacity:0.587;
          }
          72.917% {
            transform:translate(0px,2.867px);
            opacity:0.736;
          }
          75% {
            transform:translate(0px,2.925px);
            opacity:0.858;
          }
          77.083% {
            transform:translate(0px,2.199px);
            opacity:0.946;
          }
          79.167% {
            transform:translate(0px,0.884px);
            opacity:0.993;
          }
          81.25% {
            transform:translate(0px,-0.668px);
            opacity:0.996;
          }
          83.333% {
            transform:translate(0px,-2.041px);
            opacity:0.955;
          }
          85.417% {
            transform:translate(0px,-2.867px);
            opacity:0.873;
          }
          87.5% {
            transform:translate(0px,-2.925px);
            opacity:0.755;
          }
          89.583% {
            transform:translate(0px,-2.199px);
            opacity:0.61;
          }
          91.667% {
            transform:translate(0px,-0.884px);
            opacity:0.447;
          }
          93.75% {
            transform:translate(0px,0.668px);
            opacity:0.423;
          }
          95.833% {
            transform:translate(0px,2.041px);
            opacity:0.587;
          }
          97.917% {
            transform:translate(0px,2.867px);
            opacity:0.736;
          }
          100% {
            transform:translate(0px,2.925px);
            opacity:0.858;
          }
        }
        @keyframes landfall3 {
          0% {
            transform:translate(0px,1.302px);
            opacity:0.984;
          }
          2.083% {
            transform:translate(0px,-0.224px);
            opacity:1;
          }
          4.167% {
            transform:translate(0px,-1.69px);
            opacity:0.971;
          }
          6.25% {
            transform:translate(0px,-2.703px);
            opacity:0.9;
          }
          8.333% {
            transform:translate(0px,-2.992px);
            opacity:0.792;
          }
          10.417% {
            transform:translate(0px,-2.479px);
            opacity:0.654;
          }
          12.5% {
            transform:translate(0px,-1.302px);
            opacity:0.495;
          }
          14.583% {
            transform:translate(0px,0.224px);
            opacity:0.374;
          }
          16.667% {
            transform:translate(0px,1.69px);
            opacity:0.542;
          }
          18.75% {
            transform:translate(0px,2.703px);
            opacity:0.696;
          }
          20.833% {
            transform:translate(0px,2.992px);
            opacity:0.826;
          }
          22.917% {
            transform:translate(0px,2.479px);
            opacity:0.925;
          }
          25% {
            transform:translate(0px,1.302px);
            opacity:0.984;
          }
          27.083% {
            transform:translate(0px,-0.224px);
            opacity:1;
          }
          29.167% {
            transform:translate(0px,-1.69px);
            opacity:0.971;
          }
          31.25% {
            transform:translate(0px,-2.703px);
            opacity:0.9;
          }
          33.333% {
            transform:translate(0px,-2.992px);
            opacity:0.792;
          }
          35.417% {
            transform:translate(0px,-2.479px);
            opacity:0.654;
          }
          37.5% {
            transform:translate(0px,-1.302px);
            opacity:0.495;
          }
          39.583% {
            transform:translate(0px,0.224px);
            opacity:0.374;
          }
          41.667% {
            transform:translate(0px,1.69px);
            opacity:0.542;
          }
          43.75% {
            transform:translate(0px,2.703px);
            opacity:0.696;
          }
          45.833% {
            transform:translate(0px,2.992px);
            opacity:0.826;
          }
          47.917% {
            transform:translate(0px,2.479px);
            opacity:0.925;
          }
          50% {
            transform:translate(0px,1.302px);
            opacity:0.984;
          }
          52.083% {
            transform:translate(0px,-0.224px);
            opacity:1;
          }
          54.167% {
            transform:translate(0px,-1.69px);
            opacity:0.971;
          }
          56.25% {
            transform:translate(0px,-2.703px);
            opacity:0.9;
          }
          58.333% {
            transform:translate(0px,-2.992px);
            opacity:0.792;
          }
          60.417% {
            transform:translate(0px,-2.479px);
            opacity:0.654;
          }
          62.5% {
            transform:translate(0px,-1.302px);
            opacity:0.495;
          }
          64.583% {
            transform:translate(0px,0.224px);
            opacity:0.374;
          }
          66.667% {
            transform:translate(0px,1.69px);
            opacity:0.542;
          }
          68.75% {
            transform:translate(0px,2.703px);
            opacity:0.696;
          }
          70.833% {
            transform:translate(0px,2.992px);
            opacity:0.826;
          }
          72.917% {
            transform:translate(0px,2.479px);
            opacity:0.925;
          }
          75% {
            transform:translate(0px,1.302px);
            opacity:0.984;
          }
          77.083% {
            transform:translate(0px,-0.224px);
            opacity:1;
          }
          79.167% {
            transform:translate(0px,-1.69px);
            opacity:0.971;
          }
          81.25% {
            transform:translate(0px,-2.703px);
            opacity:0.9;
          }
          83.333% {
            transform:translate(0px,-2.992px);
            opacity:0.792;
          }
          85.417% {
            transform:translate(0px,-2.479px);
            opacity:0.654;
          }
          87.5% {
            transform:translate(0px,-1.302px);
            opacity:0.495;
          }
          89.583% {
            transform:translate(0px,0.224px);
            opacity:0.374;
          }
          91.667% {
            transform:translate(0px,1.69px);
            opacity:0.542;
          }
          93.75% {
            transform:translate(0px,2.703px);
            opacity:0.696;
          }
          95.833% {
            transform:translate(0px,2.992px);
            opacity:0.826;
          }
          97.917% {
            transform:translate(0px,2.479px);
            opacity:0.925;
          }
          100% {
            transform:translate(0px,1.302px);
            opacity:0.984;
          }
        }
        @keyframes landfall4 {
          0% {
            transform:translate(0px,-1.302px);
            opacity:0.984;
          }
          2.083% {
            transform:translate(0px,-2.479px);
            opacity:0.925;
          }
          4.167% {
            transform:translate(0px,-2.992px);
            opacity:0.826;
          }
          6.25% {
            transform:translate(0px,-2.703px);
            opacity:0.696;
          }
          8.333% {
            transform:translate(0px,-1.69px);
            opacity:0.542;
          }
          10.417% {
            transform:translate(0px,-0.224px);
            opacity:0.374;
          }
          12.5% {
            transform:translate(0px,1.302px);
            opacity:0.495;
          }
          14.583% {
            transform:translate(0px,2.479px);
            opacity:0.654;
          }
          16.667% {
            transform:translate(0px,2.992px);
            opacity:0.792;
          }
          18.75% {
            transform:translate(0px,2.703px);
            opacity:0.9;
          }
          20.833% {
            transform:translate(0px,1.69px);
            opacity:0.971;
          }
          22.917% {
            transform:translate(0px,0.224px);
            opacity:1;
          }
          25% {
            transform:translate(0px,-1.302px);
            opacity:0.984;
          }
          27.083% {
            transform:translate(0px,-2.479px);
            opacity:0.925;
          }
          29.167% {
            transform:translate(0px,-2.992px);
            opacity:0.826;
          }
          31.25% {
            transform:translate(0px,-2.703px);
            opacity:0.696;
          }
          33.333% {
            transform:translate(0px,-1.69px);
            opacity:0.542;
          }
          35.417% {
            transform:translate(0px,-0.224px);
            opacity:0.374;
          }
          37.5% {
            transform:translate(0px,1.302px);
            opacity:0.495;
          }
          39.583% {
            transform:translate(0px,2.479px);
            opacity:0.654;
          }
          41.667% {
            transform:translate(0px,2.992px);
            opacity:0.792;
          }
          43.75% {
            transform:translate(0px,2.703px);
            opacity:0.9;
          }
          45.833% {
            transform:translate(0px,1.69px);
            opacity:0.971;
          }
          47.917% {
            transform:translate(0px,0.224px);
            opacity:1;
          }
          50% {
            transform:translate(0px,-1.302px);
            opacity:0.984;
          }
          52.083% {
            transform:translate(0px,-2.479px);
            opacity:0.925;
          }
          54.167% {
            transform:translate(0px,-2.992px);
            opacity:0.826;
          }
          56.25% {
            transform:translate(0px,-2.703px);
            opacity:0.696;
          }
          58.333% {
            transform:translate(0px,-1.69px);
            opacity:0.542;
          }
          60.417% {
            transform:translate(0px,-0.224px);
            opacity:0.374;
          }
          62.5% {
            transform:translate(0px,1.302px);
            opacity:0.495;
          }
          64.583% {
            transform:translate(0px,2.479px);
            opacity:0.654;
          }
          66.667% {
            transform:translate(0px,2.992px);
            opacity:0.792;
          }
          68.75% {
            transform:translate(0px,2.703px);
            opacity:0.9;
          }
          70.833% {
            transform:translate(0px,1.69px);
            opacity:0.971;
          }
          72.917% {
            transform:translate(0px,0.224px);
            opacity:1;
          }
          75% {
            transform:translate(0px,-1.302px);
            opacity:0.984;
          }
          77.083% {
            transform:translate(0px,-2.479px);
            opacity:0.925;
          }
          79.167% {
            transform:translate(0px,-2.992px);
            opacity:0.826;
          }
          81.25% {
            transform:translate(0px,-2.703px);
            opacity:0.696;
          }
          83.333% {
            transform:translate(0px,-1.69px);
            opacity:0.542;
          }
          85.417% {
            transform:translate(0px,-0.224px);
            opacity:0.374;
          }
          87.5% {
            transform:translate(0px,1.302px);
            opacity:0.495;
          }
          89.583% {
            transform:translate(0px,2.479px);
            opacity:0.654;
          }
          91.667% {
            transform:translate(0px,2.992px);
            opacity:0.792;
          }
          93.75% {
            transform:translate(0px,2.703px);
            opacity:0.9;
          }
          95.833% {
            transform:translate(0px,1.69px);
            opacity:0.971;
          }
          97.917% {
            transform:translate(0px,0.224px);
            opacity:1;
          }
          100% {
            transform:translate(0px,-1.302px);
            opacity:0.984;
          }
        }
        @keyframes landfall5 {
          0% {
            transform:translate(0px,-2.925px);
            opacity:0.858;
          }
          2.083% {
            transform:translate(0px,-2.867px);
            opacity:0.736;
          }
          4.167% {
            transform:translate(0px,-2.041px);
            opacity:0.587;
          }
          6.25% {
            transform:translate(0px,-0.668px);
            opacity:0.423;
          }
          8.333% {
            transform:translate(0px,0.884px);
            opacity:0.447;
          }
          10.417% {
            transform:translate(0px,2.199px);
            opacity:0.61;
          }
          12.5% {
            transform:translate(0px,2.925px);
            opacity:0.755;
          }
          14.583% {
            transform:translate(0px,2.867px);
            opacity:0.873;
          }
          16.667% {
            transform:translate(0px,2.041px);
            opacity:0.955;
          }
          18.75% {
            transform:translate(0px,0.668px);
            opacity:0.996;
          }
          20.833% {
            transform:translate(0px,-0.884px);
            opacity:0.993;
          }
          22.917% {
            transform:translate(0px,-2.199px);
            opacity:0.946;
          }
          25% {
            transform:translate(0px,-2.925px);
            opacity:0.858;
          }
          27.083% {
            transform:translate(0px,-2.867px);
            opacity:0.736;
          }
          29.167% {
            transform:translate(0px,-2.041px);
            opacity:0.587;
          }
          31.25% {
            transform:translate(0px,-0.668px);
            opacity:0.423;
          }
          33.333% {
            transform:translate(0px,0.884px);
            opacity:0.447;
          }
          35.417% {
            transform:translate(0px,2.199px);
            opacity:0.61;
          }
          37.5% {
            transform:translate(0px,2.925px);
            opacity:0.755;
          }
          39.583% {
            transform:translate(0px,2.867px);
            opacity:0.873;
          }
          41.667% {
            transform:translate(0px,2.041px);
            opacity:0.955;
          }
          43.75% {
            transform:translate(0px,0.668px);
            opacity:0.996;
          }
          45.833% {
            transform:translate(0px,-0.884px);
            opacity:0.993;
          }
          47.917% {
            transform:translate(0px,-2.199px);
            opacity:0.946;
          }
          50% {
            transform:translate(0px,-2.925px);
            opacity:0.858;
          }
          52.083% {
            transform:translate(0px,-2.867px);
            opacity:0.736;
          }
          54.167% {
            transform:translate(0px,-2.041px);
            opacity:0.587;
          }
          56.25% {
            transform:translate(0px,-0.668px);
            opacity:0.423;
          }
          58.333% {
            transform:translate(0px,0.884px);
            opacity:0.447;
          }
          60.417% {
            transform:translate(0px,2.199px);
            opacity:0.61;
          }
          62.5% {
            transform:translate(0px,2.925px);
            opacity:0.755;
          }
          64.583% {
            transform:translate(0px,2.867px);
            opacity:0.873;
          }
          66.667% {
            transform:translate(0px,2.041px);
            opacity:0.955;
          }
          68.75% {
            transform:translate(0px,0.668px);
            opacity:0.996;
          }
          70.833% {
            transform:translate(0px,-0.884px);
            opacity:0.993;
          }
          72.917% {
            transform:translate(0px,-2.199px);
            opacity:0.946;
          }
          75% {
            transform:translate(0px,-2.925px);
            opacity:0.858;
          }
          77.083% {
            transform:translate(0px,-2.867px);
            opacity:0.736;
          }
          79.167% {
            transform:translate(0px,-2.041px);
            opacity:0.587;
          }
          81.25% {
            transform:translate(0px,-0.668px);
            opacity:0.423;
          }
          83.333% {
            transform:translate(0px,0.884px);
            opacity:0.447;
          }
          85.417% {
            transform:translate(0px,2.199px);
            opacity:0.61;
          }
          87.5% {
            transform:translate(0px,2.925px);
            opacity:0.755;
          }
          89.583% {
            transform:translate(0px,2.867px);
            opacity:0.873;
          }
          91.667% {
            transform:translate(0px,2.041px);
            opacity:0.955;
          }
          93.75% {
            transform:translate(0px,0.668px);
            opacity:0.996;
          }
          95.833% {
            transform:translate(0px,-0.884px);
            opacity:0.993;
          }
          97.917% {
            transform:translate(0px,-2.199px);
            opacity:0.946;
          }
          100% {
            transform:translate(0px,-2.925px);
            opacity:0.858;
          }
        }
        @keyframes landfall6 {
          0% {
            transform:translate(0px,-2.345px);
            opacity:0.632;
          }
          2.083% {
            transform:translate(0px,-1.096px);
            opacity:0.471;
          }
          4.167% {
            transform:translate(0px,0.447px);
            opacity:0.399;
          }
          6.25% {
            transform:translate(0px,1.87px);
            opacity:0.565;
          }
          8.333% {
            transform:translate(0px,2.793px);
            opacity:0.716;
          }
          10.417% {
            transform:translate(0px,2.966px);
            opacity:0.843;
          }
          12.5% {
            transform:translate(0px,2.345px);
            opacity:0.936;
          }
          14.583% {
            transform:translate(0px,1.096px);
            opacity:0.989;
          }
          16.667% {
            transform:translate(0px,-0.447px);
            opacity:0.998;
          }
          18.75% {
            transform:translate(0px,-1.87px);
            opacity:0.964;
          }
          20.833% {
            transform:translate(0px,-2.793px);
            opacity:0.887;
          }
          22.917% {
            transform:translate(0px,-2.966px);
            opacity:0.774;
          }
          25% {
            transform:translate(0px,-2.345px);
            opacity:0.632;
          }
          27.083% {
            transform:translate(0px,-1.096px);
            opacity:0.471;
          }
          29.167% {
            transform:translate(0px,0.447px);
            opacity:0.399;
          }
          31.25% {
            transform:translate(0px,1.87px);
            opacity:0.565;
          }
          33.333% {
            transform:translate(0px,2.793px);
            opacity:0.716;
          }
          35.417% {
            transform:translate(0px,2.966px);
            opacity:0.843;
          }
          37.5% {
            transform:translate(0px,2.345px);
            opacity:0.936;
          }
          39.583% {
            transform:translate(0px,1.096px);
            opacity:0.989;
          }
          41.667% {
            transform:translate(0px,-0.447px);
            opacity:0.998;
          }
          43.75% {
            transform:translate(0px,-1.87px);
            opacity:0.964;
          }
          45.833% {
            transform:translate(0px,-2.793px);
            opacity:0.887;
          }
          47.917% {
            transform:translate(0px,-2.966px);
            opacity:0.774;
          }
          50% {
            transform:translate(0px,-2.345px);
            opacity:0.632;
          }
          52.083% {
            transform:translate(0px,-1.096px);
            opacity:0.471;
          }
          54.167% {
            transform:translate(0px,0.447px);
            opacity:0.399;
          }
          56.25% {
            transform:translate(0px,1.87px);
            opacity:0.565;
          }
          58.333% {
            transform:translate(0px,2.793px);
            opacity:0.716;
          }
          60.417% {
            transform:translate(0px,2.966px);
            opacity:0.843;
          }
          62.5% {
            transform:translate(0px,2.345px);
            opacity:0.936;
          }
          64.583% {
            transform:translate(0px,1.096px);
            opacity:0.989;
          }
          66.667% {
            transform:translate(0px,-0.447px);
            opacity:0.998;
          }
          68.75% {
            transform:translate(0px,-1.87px);
            opacity:0.964;
          }
          70.833% {
            transform:translate(0px,-2.793px);
            opacity:0.887;
          }
          72.917% {
            transform:translate(0px,-2.966px);
            opacity:0.774;
          }
          75% {
            transform:translate(0px,-2.345px);
            opacity:0.632;
          }
          77.083% {
            transform:translate(0px,-1.096px);
            opacity:0.471;
          }
          79.167% {
            transform:translate(0px,0.447px);
            opacity:0.399;
          }
          81.25% {
            transform:translate(0px,1.87px);
            opacity:0.565;
          }
          83.333% {
            transform:translate(0px,2.793px);
            opacity:0.716;
          }
          85.417% {
            transform:translate(0px,2.966px);
            opacity:0.843;
          }
          87.5% {
            transform:translate(0px,2.345px);
            opacity:0.936;
          }
          89.583% {
            transform:translate(0px,1.096px);
            opacity:0.989;
          }
          91.667% {
            transform:translate(0px,-0.447px);
            opacity:0.998;
          }
          93.75% {
            transform:translate(0px,-1.87px);
            opacity:0.964;
          }
          95.833% {
            transform:translate(0px,-2.793px);
            opacity:0.887;
          }
          97.917% {
            transform:translate(0px,-2.966px);
            opacity:0.774;
          }
          100% {
            transform:translate(0px,-2.345px);
            opacity:0.632;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .vapor {
            stroke-dashoffset:-112
          }
          .landfall0 {
            transform:translate(0px,0px);
            opacity:0.35;
          }
          .landfall1 {
            transform:translate(0px,2.345px);
            opacity:0.632;
          }
          .landfall2 {
            transform:translate(0px,2.925px);
            opacity:0.858;
          }
          .landfall3 {
            transform:translate(0px,1.302px);
            opacity:0.984;
          }
          .landfall4 {
            transform:translate(0px,-1.302px);
            opacity:0.984;
          }
          .landfall5 {
            transform:translate(0px,-2.925px);
            opacity:0.858;
          }
          .landfall6 {
            transform:translate(0px,-2.345px);
            opacity:0.632;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Atmospheric River">
        <rect x="8" y="8" width="124" height="124" fill="#10323f"/>
        <path d="M12 26Q42 14 73 28" fill="none" stroke="#264a54"/>
        <path d="M12 52Q42 40 73 54" fill="none" stroke="#264a54"/>
        <path d="M12 78Q42 66 73 80" fill="none" stroke="#264a54"/>
        <path d="M12 104Q42 92 73 106" fill="none" stroke="#264a54"/>
        <path d="M106 8L102 25 110 43 103 59 112 73 107 91 117 113 119 132H132V8Z" fill="#4b6547" stroke="#87a076"/>
        <path d="M12 109C39 110 46 76 72 69S90 59 109 48" fill="none" stroke="#68bbb8" stroke-width="22" opacity=".2"/>
        <path d="M12 109C39 110 46 76 72 69S90 59 109 48" class="vapor" fill="none" stroke="#aadbd0" stroke-width="7" stroke-dasharray="8 6" opacity=".6"/>
        <path d="M111 22l4 -8 5 10Z" fill="#9aa78a"/>
        <path d="M117 40l4 -8 5 10Z" fill="#9aa78a"/>
        <path d="M111 58l4 -8 5 10Z" fill="#9aa78a"/>
        <path d="M117 76l4 -8 5 10Z" fill="#9aa78a"/>
        <path d="M111 94l4 -8 5 10Z" fill="#9aa78a"/>
        <path d="M106 42L104 47" class="landfall0" stroke="#98d6ea" stroke-width="1.8"/>
        <path d="M111 47L109 52" class="landfall1" stroke="#98d6ea" stroke-width="1.8"/>
        <path d="M116 52L114 57" class="landfall2" stroke="#98d6ea" stroke-width="1.8"/>
        <path d="M106 57L104 62" class="landfall3" stroke="#98d6ea" stroke-width="1.8"/>
        <path d="M111 62L109 67" class="landfall4" stroke="#98d6ea" stroke-width="1.8"/>
        <path d="M116 67L114 72" class="landfall5" stroke="#98d6ea" stroke-width="1.8"/>
        <path d="M106 72L104 77" class="landfall6" stroke="#98d6ea" stroke-width="1.8"/>
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

if (!customElements.get("concept-atmospheric-river")) {
  customElements.define("concept-atmospheric-river", ConceptAtmosphericRiver);
}
