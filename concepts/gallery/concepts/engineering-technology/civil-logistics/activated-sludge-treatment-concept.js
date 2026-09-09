// Activated-Sludge Treatment. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptActivatedSludgeTreatment extends HTMLElement {
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
        .air0 {
          animation:air0 16s linear infinite;
        }
        .air0 {
          animation:air0 16s linear infinite;
        }
        .air1 {
          animation:air1 16s linear infinite;
        }
        .air1 {
          animation:air1 16s linear infinite;
        }
        .air2 {
          animation:air2 16s linear infinite;
        }
        .air2 {
          animation:air2 16s linear infinite;
        }
        .air3 {
          animation:air3 16s linear infinite;
        }
        .air3 {
          animation:air3 16s linear infinite;
        }
        .air4 {
          animation:air4 16s linear infinite;
        }
        .air4 {
          animation:air4 16s linear infinite;
        }
        .air5 {
          animation:air5 16s linear infinite;
        }
        .air5 {
          animation:air5 16s linear infinite;
        }
        .air6 {
          animation:air6 16s linear infinite;
        }
        .air6 {
          animation:air6 16s linear infinite;
        }
        .floc0 {
          animation:floc0 16s linear infinite;
        }
        .organic0 {
          animation:organic0 16s linear infinite;
        }
        .organic0 {
          animation:organic0 16s linear infinite;
        }
        .floc1 {
          animation:floc1 16s linear infinite;
        }
        .organic1 {
          animation:organic1 16s linear infinite;
        }
        .organic1 {
          animation:organic1 16s linear infinite;
        }
        .floc2 {
          animation:floc2 16s linear infinite;
        }
        .organic2 {
          animation:organic2 16s linear infinite;
        }
        .organic2 {
          animation:organic2 16s linear infinite;
        }
        .bioEpisode {
          animation:bioEpisode 16s linear infinite;
        }
        @keyframes air0 {
          0% {
            transform:translate(22px,85px);
            opacity:0;
          }
          2.083% {
            transform:translate(22px,82.167px);
            opacity:0.259;
          }
          4.167% {
            transform:translate(22px,79.333px);
            opacity:0.5;
          }
          6.25% {
            transform:translate(22px,76.5px);
            opacity:0.707;
          }
          8.333% {
            transform:translate(22px,73.667px);
            opacity:0.866;
          }
          10.417% {
            transform:translate(22px,70.833px);
            opacity:0.966;
          }
          12.5% {
            transform:translate(22px,68px);
            opacity:1;
          }
          14.583% {
            transform:translate(22px,65.167px);
            opacity:0.966;
          }
          16.667% {
            transform:translate(22px,62.333px);
            opacity:0.866;
          }
          18.75% {
            transform:translate(22px,59.5px);
            opacity:0.707;
          }
          20.833% {
            transform:translate(22px,56.667px);
            opacity:0.5;
          }
          22.917% {
            transform:translate(22px,53.833px);
            opacity:0.259;
            opacity:0;
          }
          25% {
            transform:translate(22px,85px);
            opacity:0;
            opacity:0;
          }
          27.083% {
            transform:translate(22px,82.167px);
            opacity:0.259;
          }
          29.167% {
            transform:translate(22px,79.333px);
            opacity:0.5;
          }
          31.25% {
            transform:translate(22px,76.5px);
            opacity:0.707;
          }
          33.333% {
            transform:translate(22px,73.667px);
            opacity:0.866;
          }
          35.417% {
            transform:translate(22px,70.833px);
            opacity:0.966;
          }
          37.5% {
            transform:translate(22px,68px);
            opacity:1;
          }
          39.583% {
            transform:translate(22px,65.167px);
            opacity:0.966;
          }
          41.667% {
            transform:translate(22px,62.333px);
            opacity:0.866;
          }
          43.75% {
            transform:translate(22px,59.5px);
            opacity:0.707;
          }
          45.833% {
            transform:translate(22px,56.667px);
            opacity:0.5;
          }
          47.917% {
            transform:translate(22px,53.833px);
            opacity:0.259;
            opacity:0;
          }
          50% {
            transform:translate(22px,85px);
            opacity:0;
            opacity:0;
          }
          52.083% {
            transform:translate(22px,82.167px);
            opacity:0.259;
          }
          54.167% {
            transform:translate(22px,79.333px);
            opacity:0.5;
          }
          56.25% {
            transform:translate(22px,76.5px);
            opacity:0.707;
          }
          58.333% {
            transform:translate(22px,73.667px);
            opacity:0.866;
          }
          60.417% {
            transform:translate(22px,70.833px);
            opacity:0.966;
          }
          62.5% {
            transform:translate(22px,68px);
            opacity:1;
          }
          64.583% {
            transform:translate(22px,65.167px);
            opacity:0.966;
          }
          66.667% {
            transform:translate(22px,62.333px);
            opacity:0.866;
          }
          68.75% {
            transform:translate(22px,59.5px);
            opacity:0.707;
          }
          70.833% {
            transform:translate(22px,56.667px);
            opacity:0.5;
          }
          72.917% {
            transform:translate(22px,53.833px);
            opacity:0.259;
            opacity:0;
          }
          75% {
            transform:translate(22px,85px);
            opacity:0;
            opacity:0;
          }
          77.083% {
            transform:translate(22px,82.167px);
            opacity:0.259;
          }
          79.167% {
            transform:translate(22px,79.333px);
            opacity:0.5;
          }
          81.25% {
            transform:translate(22px,76.5px);
            opacity:0.707;
          }
          83.333% {
            transform:translate(22px,73.667px);
            opacity:0.866;
          }
          85.417% {
            transform:translate(22px,70.833px);
            opacity:0.966;
          }
          87.5% {
            transform:translate(22px,68px);
            opacity:1;
          }
          89.583% {
            transform:translate(22px,65.167px);
            opacity:0.966;
          }
          91.667% {
            transform:translate(22px,62.333px);
            opacity:0.866;
          }
          93.75% {
            transform:translate(22px,59.5px);
            opacity:0.707;
          }
          95.833% {
            transform:translate(22px,56.667px);
            opacity:0.5;
          }
          97.917% {
            transform:translate(22px,53.833px);
            opacity:0.259;
            opacity:0;
          }
          100% {
            transform:translate(22px,85px);
            opacity:0;
            opacity:0;
          }
        }
        @keyframes air1 {
          0% {
            transform:translate(28px,80.143px);
            opacity:0.434;
          }
          2.083% {
            transform:translate(28px,77.31px);
            opacity:0.652;
          }
          4.167% {
            transform:translate(28px,74.476px);
            opacity:0.826;
          }
          6.25% {
            transform:translate(28px,71.643px);
            opacity:0.944;
          }
          8.333% {
            transform:translate(28px,68.81px);
            opacity:0.997;
          }
          10.417% {
            transform:translate(28px,65.976px);
            opacity:0.983;
          }
          12.5% {
            transform:translate(28px,63.143px);
            opacity:0.901;
          }
          14.583% {
            transform:translate(28px,60.31px);
            opacity:0.758;
          }
          16.667% {
            transform:translate(28px,57.476px);
            opacity:0.563;
          }
          18.75% {
            transform:translate(28px,54.643px);
            opacity:0.33;
          }
          20.833% {
            transform:translate(28px,51.81px);
            opacity:0.075;
            opacity:0;
          }
          22.917% {
            transform:translate(28px,82.976px);
            opacity:0.186;
            opacity:0;
          }
          25% {
            transform:translate(28px,80.143px);
            opacity:0.434;
          }
          27.083% {
            transform:translate(28px,77.31px);
            opacity:0.652;
          }
          29.167% {
            transform:translate(28px,74.476px);
            opacity:0.826;
          }
          31.25% {
            transform:translate(28px,71.643px);
            opacity:0.944;
          }
          33.333% {
            transform:translate(28px,68.81px);
            opacity:0.997;
          }
          35.417% {
            transform:translate(28px,65.976px);
            opacity:0.983;
          }
          37.5% {
            transform:translate(28px,63.143px);
            opacity:0.901;
          }
          39.583% {
            transform:translate(28px,60.31px);
            opacity:0.758;
          }
          41.667% {
            transform:translate(28px,57.476px);
            opacity:0.563;
          }
          43.75% {
            transform:translate(28px,54.643px);
            opacity:0.33;
          }
          45.833% {
            transform:translate(28px,51.81px);
            opacity:0.075;
            opacity:0;
          }
          47.917% {
            transform:translate(28px,82.976px);
            opacity:0.186;
            opacity:0;
          }
          50% {
            transform:translate(28px,80.143px);
            opacity:0.434;
          }
          52.083% {
            transform:translate(28px,77.31px);
            opacity:0.652;
          }
          54.167% {
            transform:translate(28px,74.476px);
            opacity:0.826;
          }
          56.25% {
            transform:translate(28px,71.643px);
            opacity:0.944;
          }
          58.333% {
            transform:translate(28px,68.81px);
            opacity:0.997;
          }
          60.417% {
            transform:translate(28px,65.976px);
            opacity:0.983;
          }
          62.5% {
            transform:translate(28px,63.143px);
            opacity:0.901;
          }
          64.583% {
            transform:translate(28px,60.31px);
            opacity:0.758;
          }
          66.667% {
            transform:translate(28px,57.476px);
            opacity:0.563;
          }
          68.75% {
            transform:translate(28px,54.643px);
            opacity:0.33;
          }
          70.833% {
            transform:translate(28px,51.81px);
            opacity:0.075;
            opacity:0;
          }
          72.917% {
            transform:translate(28px,82.976px);
            opacity:0.186;
            opacity:0;
          }
          75% {
            transform:translate(28px,80.143px);
            opacity:0.434;
          }
          77.083% {
            transform:translate(28px,77.31px);
            opacity:0.652;
          }
          79.167% {
            transform:translate(28px,74.476px);
            opacity:0.826;
          }
          81.25% {
            transform:translate(28px,71.643px);
            opacity:0.944;
          }
          83.333% {
            transform:translate(28px,68.81px);
            opacity:0.997;
          }
          85.417% {
            transform:translate(28px,65.976px);
            opacity:0.983;
          }
          87.5% {
            transform:translate(28px,63.143px);
            opacity:0.901;
          }
          89.583% {
            transform:translate(28px,60.31px);
            opacity:0.758;
          }
          91.667% {
            transform:translate(28px,57.476px);
            opacity:0.563;
          }
          93.75% {
            transform:translate(28px,54.643px);
            opacity:0.33;
          }
          95.833% {
            transform:translate(28px,51.81px);
            opacity:0.075;
            opacity:0;
          }
          97.917% {
            transform:translate(28px,82.976px);
            opacity:0.186;
            opacity:0;
          }
          100% {
            transform:translate(28px,80.143px);
            opacity:0.434;
          }
        }
        @keyframes air2 {
          0% {
            transform:translate(34px,75.286px);
            opacity:0.782;
          }
          2.083% {
            transform:translate(34px,72.452px);
            opacity:0.917;
          }
          4.167% {
            transform:translate(34px,69.619px);
            opacity:0.989;
          }
          6.25% {
            transform:translate(34px,66.786px);
            opacity:0.994;
          }
          8.333% {
            transform:translate(34px,63.952px);
            opacity:0.931;
          }
          10.417% {
            transform:translate(34px,61.119px);
            opacity:0.805;
          }
          12.5% {
            transform:translate(34px,58.286px);
            opacity:0.623;
          }
          14.583% {
            transform:translate(34px,55.452px);
            opacity:0.4;
          }
          16.667% {
            transform:translate(34px,52.619px);
            opacity:0.149;
            opacity:0;
          }
          18.75% {
            transform:translate(34px,83.786px);
            opacity:0.112;
            opacity:0;
          }
          20.833% {
            transform:translate(34px,80.952px);
            opacity:0.365;
          }
          22.917% {
            transform:translate(34px,78.119px);
            opacity:0.594;
          }
          25% {
            transform:translate(34px,75.286px);
            opacity:0.782;
          }
          27.083% {
            transform:translate(34px,72.452px);
            opacity:0.917;
          }
          29.167% {
            transform:translate(34px,69.619px);
            opacity:0.989;
          }
          31.25% {
            transform:translate(34px,66.786px);
            opacity:0.994;
          }
          33.333% {
            transform:translate(34px,63.952px);
            opacity:0.931;
          }
          35.417% {
            transform:translate(34px,61.119px);
            opacity:0.805;
          }
          37.5% {
            transform:translate(34px,58.286px);
            opacity:0.623;
          }
          39.583% {
            transform:translate(34px,55.452px);
            opacity:0.4;
          }
          41.667% {
            transform:translate(34px,52.619px);
            opacity:0.149;
            opacity:0;
          }
          43.75% {
            transform:translate(34px,83.786px);
            opacity:0.112;
            opacity:0;
          }
          45.833% {
            transform:translate(34px,80.952px);
            opacity:0.365;
          }
          47.917% {
            transform:translate(34px,78.119px);
            opacity:0.594;
          }
          50% {
            transform:translate(34px,75.286px);
            opacity:0.782;
          }
          52.083% {
            transform:translate(34px,72.452px);
            opacity:0.917;
          }
          54.167% {
            transform:translate(34px,69.619px);
            opacity:0.989;
          }
          56.25% {
            transform:translate(34px,66.786px);
            opacity:0.994;
          }
          58.333% {
            transform:translate(34px,63.952px);
            opacity:0.931;
          }
          60.417% {
            transform:translate(34px,61.119px);
            opacity:0.805;
          }
          62.5% {
            transform:translate(34px,58.286px);
            opacity:0.623;
          }
          64.583% {
            transform:translate(34px,55.452px);
            opacity:0.4;
          }
          66.667% {
            transform:translate(34px,52.619px);
            opacity:0.149;
            opacity:0;
          }
          68.75% {
            transform:translate(34px,83.786px);
            opacity:0.112;
            opacity:0;
          }
          70.833% {
            transform:translate(34px,80.952px);
            opacity:0.365;
          }
          72.917% {
            transform:translate(34px,78.119px);
            opacity:0.594;
          }
          75% {
            transform:translate(34px,75.286px);
            opacity:0.782;
          }
          77.083% {
            transform:translate(34px,72.452px);
            opacity:0.917;
          }
          79.167% {
            transform:translate(34px,69.619px);
            opacity:0.989;
          }
          81.25% {
            transform:translate(34px,66.786px);
            opacity:0.994;
          }
          83.333% {
            transform:translate(34px,63.952px);
            opacity:0.931;
          }
          85.417% {
            transform:translate(34px,61.119px);
            opacity:0.805;
          }
          87.5% {
            transform:translate(34px,58.286px);
            opacity:0.623;
          }
          89.583% {
            transform:translate(34px,55.452px);
            opacity:0.4;
          }
          91.667% {
            transform:translate(34px,52.619px);
            opacity:0.149;
            opacity:0;
          }
          93.75% {
            transform:translate(34px,83.786px);
            opacity:0.112;
            opacity:0;
          }
          95.833% {
            transform:translate(34px,80.952px);
            opacity:0.365;
          }
          97.917% {
            transform:translate(34px,78.119px);
            opacity:0.594;
          }
          100% {
            transform:translate(34px,75.286px);
            opacity:0.782;
          }
        }
        @keyframes air3 {
          0% {
            transform:translate(40px,70.429px);
            opacity:0.975;
          }
          2.083% {
            transform:translate(40px,67.595px);
            opacity:0.999;
          }
          4.167% {
            transform:translate(40px,64.762px);
            opacity:0.956;
          }
          6.25% {
            transform:translate(40px,61.929px);
            opacity:0.847;
          }
          8.333% {
            transform:translate(40px,59.095px);
            opacity:0.68;
          }
          10.417% {
            transform:translate(40px,56.262px);
            opacity:0.467;
          }
          12.5% {
            transform:translate(40px,53.429px);
            opacity:0.223;
            opacity:0;
          }
          14.583% {
            transform:translate(40px,84.595px);
            opacity:0.037;
            opacity:0;
          }
          16.667% {
            transform:translate(40px,81.762px);
            opacity:0.295;
          }
          18.75% {
            transform:translate(40px,78.929px);
            opacity:0.532;
          }
          20.833% {
            transform:translate(40px,76.095px);
            opacity:0.733;
          }
          22.917% {
            transform:translate(40px,73.262px);
            opacity:0.884;
          }
          25% {
            transform:translate(40px,70.429px);
            opacity:0.975;
          }
          27.083% {
            transform:translate(40px,67.595px);
            opacity:0.999;
          }
          29.167% {
            transform:translate(40px,64.762px);
            opacity:0.956;
          }
          31.25% {
            transform:translate(40px,61.929px);
            opacity:0.847;
          }
          33.333% {
            transform:translate(40px,59.095px);
            opacity:0.68;
          }
          35.417% {
            transform:translate(40px,56.262px);
            opacity:0.467;
          }
          37.5% {
            transform:translate(40px,53.429px);
            opacity:0.223;
            opacity:0;
          }
          39.583% {
            transform:translate(40px,84.595px);
            opacity:0.037;
            opacity:0;
          }
          41.667% {
            transform:translate(40px,81.762px);
            opacity:0.295;
          }
          43.75% {
            transform:translate(40px,78.929px);
            opacity:0.532;
          }
          45.833% {
            transform:translate(40px,76.095px);
            opacity:0.733;
          }
          47.917% {
            transform:translate(40px,73.262px);
            opacity:0.884;
          }
          50% {
            transform:translate(40px,70.429px);
            opacity:0.975;
          }
          52.083% {
            transform:translate(40px,67.595px);
            opacity:0.999;
          }
          54.167% {
            transform:translate(40px,64.762px);
            opacity:0.956;
          }
          56.25% {
            transform:translate(40px,61.929px);
            opacity:0.847;
          }
          58.333% {
            transform:translate(40px,59.095px);
            opacity:0.68;
          }
          60.417% {
            transform:translate(40px,56.262px);
            opacity:0.467;
          }
          62.5% {
            transform:translate(40px,53.429px);
            opacity:0.223;
            opacity:0;
          }
          64.583% {
            transform:translate(40px,84.595px);
            opacity:0.037;
            opacity:0;
          }
          66.667% {
            transform:translate(40px,81.762px);
            opacity:0.295;
          }
          68.75% {
            transform:translate(40px,78.929px);
            opacity:0.532;
          }
          70.833% {
            transform:translate(40px,76.095px);
            opacity:0.733;
          }
          72.917% {
            transform:translate(40px,73.262px);
            opacity:0.884;
          }
          75% {
            transform:translate(40px,70.429px);
            opacity:0.975;
          }
          77.083% {
            transform:translate(40px,67.595px);
            opacity:0.999;
          }
          79.167% {
            transform:translate(40px,64.762px);
            opacity:0.956;
          }
          81.25% {
            transform:translate(40px,61.929px);
            opacity:0.847;
          }
          83.333% {
            transform:translate(40px,59.095px);
            opacity:0.68;
          }
          85.417% {
            transform:translate(40px,56.262px);
            opacity:0.467;
          }
          87.5% {
            transform:translate(40px,53.429px);
            opacity:0.223;
            opacity:0;
          }
          89.583% {
            transform:translate(40px,84.595px);
            opacity:0.037;
            opacity:0;
          }
          91.667% {
            transform:translate(40px,81.762px);
            opacity:0.295;
          }
          93.75% {
            transform:translate(40px,78.929px);
            opacity:0.532;
          }
          95.833% {
            transform:translate(40px,76.095px);
            opacity:0.733;
          }
          97.917% {
            transform:translate(40px,73.262px);
            opacity:0.884;
          }
          100% {
            transform:translate(40px,70.429px);
            opacity:0.975;
          }
        }
        @keyframes air4 {
          0% {
            transform:translate(46px,65.571px);
            opacity:0.975;
          }
          2.083% {
            transform:translate(46px,62.738px);
            opacity:0.884;
          }
          4.167% {
            transform:translate(46px,59.905px);
            opacity:0.733;
          }
          6.25% {
            transform:translate(46px,57.071px);
            opacity:0.532;
          }
          8.333% {
            transform:translate(46px,54.238px);
            opacity:0.295;
          }
          10.417% {
            transform:translate(46px,51.405px);
            opacity:0.037;
            opacity:0;
          }
          12.5% {
            transform:translate(46px,82.571px);
            opacity:0.223;
            opacity:0;
          }
          14.583% {
            transform:translate(46px,79.738px);
            opacity:0.467;
          }
          16.667% {
            transform:translate(46px,76.905px);
            opacity:0.68;
          }
          18.75% {
            transform:translate(46px,74.071px);
            opacity:0.847;
          }
          20.833% {
            transform:translate(46px,71.238px);
            opacity:0.956;
          }
          22.917% {
            transform:translate(46px,68.405px);
            opacity:0.999;
          }
          25% {
            transform:translate(46px,65.571px);
            opacity:0.975;
          }
          27.083% {
            transform:translate(46px,62.738px);
            opacity:0.884;
          }
          29.167% {
            transform:translate(46px,59.905px);
            opacity:0.733;
          }
          31.25% {
            transform:translate(46px,57.071px);
            opacity:0.532;
          }
          33.333% {
            transform:translate(46px,54.238px);
            opacity:0.295;
          }
          35.417% {
            transform:translate(46px,51.405px);
            opacity:0.037;
            opacity:0;
          }
          37.5% {
            transform:translate(46px,82.571px);
            opacity:0.223;
            opacity:0;
          }
          39.583% {
            transform:translate(46px,79.738px);
            opacity:0.467;
          }
          41.667% {
            transform:translate(46px,76.905px);
            opacity:0.68;
          }
          43.75% {
            transform:translate(46px,74.071px);
            opacity:0.847;
          }
          45.833% {
            transform:translate(46px,71.238px);
            opacity:0.956;
          }
          47.917% {
            transform:translate(46px,68.405px);
            opacity:0.999;
          }
          50% {
            transform:translate(46px,65.571px);
            opacity:0.975;
          }
          52.083% {
            transform:translate(46px,62.738px);
            opacity:0.884;
          }
          54.167% {
            transform:translate(46px,59.905px);
            opacity:0.733;
          }
          56.25% {
            transform:translate(46px,57.071px);
            opacity:0.532;
          }
          58.333% {
            transform:translate(46px,54.238px);
            opacity:0.295;
          }
          60.417% {
            transform:translate(46px,51.405px);
            opacity:0.037;
            opacity:0;
          }
          62.5% {
            transform:translate(46px,82.571px);
            opacity:0.223;
            opacity:0;
          }
          64.583% {
            transform:translate(46px,79.738px);
            opacity:0.467;
          }
          66.667% {
            transform:translate(46px,76.905px);
            opacity:0.68;
          }
          68.75% {
            transform:translate(46px,74.071px);
            opacity:0.847;
          }
          70.833% {
            transform:translate(46px,71.238px);
            opacity:0.956;
          }
          72.917% {
            transform:translate(46px,68.405px);
            opacity:0.999;
          }
          75% {
            transform:translate(46px,65.571px);
            opacity:0.975;
          }
          77.083% {
            transform:translate(46px,62.738px);
            opacity:0.884;
          }
          79.167% {
            transform:translate(46px,59.905px);
            opacity:0.733;
          }
          81.25% {
            transform:translate(46px,57.071px);
            opacity:0.532;
          }
          83.333% {
            transform:translate(46px,54.238px);
            opacity:0.295;
          }
          85.417% {
            transform:translate(46px,51.405px);
            opacity:0.037;
            opacity:0;
          }
          87.5% {
            transform:translate(46px,82.571px);
            opacity:0.223;
            opacity:0;
          }
          89.583% {
            transform:translate(46px,79.738px);
            opacity:0.467;
          }
          91.667% {
            transform:translate(46px,76.905px);
            opacity:0.68;
          }
          93.75% {
            transform:translate(46px,74.071px);
            opacity:0.847;
          }
          95.833% {
            transform:translate(46px,71.238px);
            opacity:0.956;
          }
          97.917% {
            transform:translate(46px,68.405px);
            opacity:0.999;
          }
          100% {
            transform:translate(46px,65.571px);
            opacity:0.975;
          }
        }
        @keyframes air5 {
          0% {
            transform:translate(52px,60.714px);
            opacity:0.782;
          }
          2.083% {
            transform:translate(52px,57.881px);
            opacity:0.594;
          }
          4.167% {
            transform:translate(52px,55.048px);
            opacity:0.365;
          }
          6.25% {
            transform:translate(52px,52.214px);
            opacity:0.112;
            opacity:0;
          }
          8.333% {
            transform:translate(52px,83.381px);
            opacity:0.149;
            opacity:0;
          }
          10.417% {
            transform:translate(52px,80.548px);
            opacity:0.4;
          }
          12.5% {
            transform:translate(52px,77.714px);
            opacity:0.623;
          }
          14.583% {
            transform:translate(52px,74.881px);
            opacity:0.805;
          }
          16.667% {
            transform:translate(52px,72.048px);
            opacity:0.931;
          }
          18.75% {
            transform:translate(52px,69.214px);
            opacity:0.994;
          }
          20.833% {
            transform:translate(52px,66.381px);
            opacity:0.989;
          }
          22.917% {
            transform:translate(52px,63.548px);
            opacity:0.917;
          }
          25% {
            transform:translate(52px,60.714px);
            opacity:0.782;
          }
          27.083% {
            transform:translate(52px,57.881px);
            opacity:0.594;
          }
          29.167% {
            transform:translate(52px,55.048px);
            opacity:0.365;
          }
          31.25% {
            transform:translate(52px,52.214px);
            opacity:0.112;
            opacity:0;
          }
          33.333% {
            transform:translate(52px,83.381px);
            opacity:0.149;
            opacity:0;
          }
          35.417% {
            transform:translate(52px,80.548px);
            opacity:0.4;
          }
          37.5% {
            transform:translate(52px,77.714px);
            opacity:0.623;
          }
          39.583% {
            transform:translate(52px,74.881px);
            opacity:0.805;
          }
          41.667% {
            transform:translate(52px,72.048px);
            opacity:0.931;
          }
          43.75% {
            transform:translate(52px,69.214px);
            opacity:0.994;
          }
          45.833% {
            transform:translate(52px,66.381px);
            opacity:0.989;
          }
          47.917% {
            transform:translate(52px,63.548px);
            opacity:0.917;
          }
          50% {
            transform:translate(52px,60.714px);
            opacity:0.782;
          }
          52.083% {
            transform:translate(52px,57.881px);
            opacity:0.594;
          }
          54.167% {
            transform:translate(52px,55.048px);
            opacity:0.365;
          }
          56.25% {
            transform:translate(52px,52.214px);
            opacity:0.112;
            opacity:0;
          }
          58.333% {
            transform:translate(52px,83.381px);
            opacity:0.149;
            opacity:0;
          }
          60.417% {
            transform:translate(52px,80.548px);
            opacity:0.4;
          }
          62.5% {
            transform:translate(52px,77.714px);
            opacity:0.623;
          }
          64.583% {
            transform:translate(52px,74.881px);
            opacity:0.805;
          }
          66.667% {
            transform:translate(52px,72.048px);
            opacity:0.931;
          }
          68.75% {
            transform:translate(52px,69.214px);
            opacity:0.994;
          }
          70.833% {
            transform:translate(52px,66.381px);
            opacity:0.989;
          }
          72.917% {
            transform:translate(52px,63.548px);
            opacity:0.917;
          }
          75% {
            transform:translate(52px,60.714px);
            opacity:0.782;
          }
          77.083% {
            transform:translate(52px,57.881px);
            opacity:0.594;
          }
          79.167% {
            transform:translate(52px,55.048px);
            opacity:0.365;
          }
          81.25% {
            transform:translate(52px,52.214px);
            opacity:0.112;
            opacity:0;
          }
          83.333% {
            transform:translate(52px,83.381px);
            opacity:0.149;
            opacity:0;
          }
          85.417% {
            transform:translate(52px,80.548px);
            opacity:0.4;
          }
          87.5% {
            transform:translate(52px,77.714px);
            opacity:0.623;
          }
          89.583% {
            transform:translate(52px,74.881px);
            opacity:0.805;
          }
          91.667% {
            transform:translate(52px,72.048px);
            opacity:0.931;
          }
          93.75% {
            transform:translate(52px,69.214px);
            opacity:0.994;
          }
          95.833% {
            transform:translate(52px,66.381px);
            opacity:0.989;
          }
          97.917% {
            transform:translate(52px,63.548px);
            opacity:0.917;
          }
          100% {
            transform:translate(52px,60.714px);
            opacity:0.782;
          }
        }
        @keyframes air6 {
          0% {
            transform:translate(58px,55.857px);
            opacity:0.434;
          }
          2.083% {
            transform:translate(58px,53.024px);
            opacity:0.186;
            opacity:0;
          }
          4.167% {
            transform:translate(58px,84.19px);
            opacity:0.075;
            opacity:0;
          }
          6.25% {
            transform:translate(58px,81.357px);
            opacity:0.33;
          }
          8.333% {
            transform:translate(58px,78.524px);
            opacity:0.563;
          }
          10.417% {
            transform:translate(58px,75.69px);
            opacity:0.758;
          }
          12.5% {
            transform:translate(58px,72.857px);
            opacity:0.901;
          }
          14.583% {
            transform:translate(58px,70.024px);
            opacity:0.983;
          }
          16.667% {
            transform:translate(58px,67.19px);
            opacity:0.997;
          }
          18.75% {
            transform:translate(58px,64.357px);
            opacity:0.944;
          }
          20.833% {
            transform:translate(58px,61.524px);
            opacity:0.826;
          }
          22.917% {
            transform:translate(58px,58.69px);
            opacity:0.652;
          }
          25% {
            transform:translate(58px,55.857px);
            opacity:0.434;
          }
          27.083% {
            transform:translate(58px,53.024px);
            opacity:0.186;
            opacity:0;
          }
          29.167% {
            transform:translate(58px,84.19px);
            opacity:0.075;
            opacity:0;
          }
          31.25% {
            transform:translate(58px,81.357px);
            opacity:0.33;
          }
          33.333% {
            transform:translate(58px,78.524px);
            opacity:0.563;
          }
          35.417% {
            transform:translate(58px,75.69px);
            opacity:0.758;
          }
          37.5% {
            transform:translate(58px,72.857px);
            opacity:0.901;
          }
          39.583% {
            transform:translate(58px,70.024px);
            opacity:0.983;
          }
          41.667% {
            transform:translate(58px,67.19px);
            opacity:0.997;
          }
          43.75% {
            transform:translate(58px,64.357px);
            opacity:0.944;
          }
          45.833% {
            transform:translate(58px,61.524px);
            opacity:0.826;
          }
          47.917% {
            transform:translate(58px,58.69px);
            opacity:0.652;
          }
          50% {
            transform:translate(58px,55.857px);
            opacity:0.434;
          }
          52.083% {
            transform:translate(58px,53.024px);
            opacity:0.186;
            opacity:0;
          }
          54.167% {
            transform:translate(58px,84.19px);
            opacity:0.075;
            opacity:0;
          }
          56.25% {
            transform:translate(58px,81.357px);
            opacity:0.33;
          }
          58.333% {
            transform:translate(58px,78.524px);
            opacity:0.563;
          }
          60.417% {
            transform:translate(58px,75.69px);
            opacity:0.758;
          }
          62.5% {
            transform:translate(58px,72.857px);
            opacity:0.901;
          }
          64.583% {
            transform:translate(58px,70.024px);
            opacity:0.983;
          }
          66.667% {
            transform:translate(58px,67.19px);
            opacity:0.997;
          }
          68.75% {
            transform:translate(58px,64.357px);
            opacity:0.944;
          }
          70.833% {
            transform:translate(58px,61.524px);
            opacity:0.826;
          }
          72.917% {
            transform:translate(58px,58.69px);
            opacity:0.652;
          }
          75% {
            transform:translate(58px,55.857px);
            opacity:0.434;
          }
          77.083% {
            transform:translate(58px,53.024px);
            opacity:0.186;
            opacity:0;
          }
          79.167% {
            transform:translate(58px,84.19px);
            opacity:0.075;
            opacity:0;
          }
          81.25% {
            transform:translate(58px,81.357px);
            opacity:0.33;
          }
          83.333% {
            transform:translate(58px,78.524px);
            opacity:0.563;
          }
          85.417% {
            transform:translate(58px,75.69px);
            opacity:0.758;
          }
          87.5% {
            transform:translate(58px,72.857px);
            opacity:0.901;
          }
          89.583% {
            transform:translate(58px,70.024px);
            opacity:0.983;
          }
          91.667% {
            transform:translate(58px,67.19px);
            opacity:0.997;
          }
          93.75% {
            transform:translate(58px,64.357px);
            opacity:0.944;
          }
          95.833% {
            transform:translate(58px,61.524px);
            opacity:0.826;
          }
          97.917% {
            transform:translate(58px,58.69px);
            opacity:0.652;
          }
          100% {
            transform:translate(58px,55.857px);
            opacity:0.434;
          }
        }
        @keyframes floc0 {
          0% {
            transform:translate(30px,65px);
          }
          2.083% {
            transform:translate(30px,65px);
          }
          4.167% {
            transform:translate(30px,65px);
          }
          6.25% {
            transform:translate(30px,65px);
          }
          8.333% {
            transform:translate(30px,65px);
          }
          10.417% {
            transform:translate(30px,65px);
          }
          12.5% {
            transform:translate(34.776px,63.408px);
          }
          14.583% {
            transform:translate(43.822px,60.393px);
          }
          16.667% {
            transform:translate(52.868px,57.377px);
          }
          18.75% {
            transform:translate(61.914px,54.362px);
          }
          20.833% {
            transform:translate(70.076px,54.161px);
          }
          22.917% {
            transform:translate(78.117px,54.344px);
          }
          25% {
            transform:translate(86.158px,54.526px);
          }
          27.083% {
            transform:translate(94.199px,54.709px);
          }
          29.167% {
            transform:translate(102.24px,54.892px);
          }
          31.25% {
            transform:translate(107px,57.61px);
          }
          33.333% {
            transform:translate(107px,64.006px);
          }
          35.417% {
            transform:translate(107px,70.402px);
          }
          37.5% {
            transform:translate(107px,76.798px);
          }
          39.583% {
            transform:translate(107px,83.194px);
          }
          41.667% {
            transform:translate(107px,89.591px);
          }
          43.75% {
            transform:translate(107px,95.987px);
          }
          45.833% {
            transform:translate(107px,103.537px);
          }
          47.917% {
            transform:translate(107px,111.303px);
          }
          50% {
            transform:translate(99.927px,114px);
          }
          52.083% {
            transform:translate(89.093px,114px);
          }
          54.167% {
            transform:translate(78.259px,114px);
          }
          56.25% {
            transform:translate(67.424px,114px);
          }
          58.333% {
            transform:translate(56.59px,114px);
          }
          60.417% {
            transform:translate(45.755px,114px);
          }
          62.5% {
            transform:translate(34.921px,114px);
          }
          64.583% {
            transform:translate(24.087px,114px);
          }
          66.667% {
            transform:translate(24px,102.579px);
          }
          68.75% {
            transform:translate(24.276px,91.711px);
          }
          70.833% {
            transform:translate(25.921px,84.035px);
          }
          72.917% {
            transform:translate(27.566px,76.36px);
          }
          75% {
            transform:translate(29.211px,68.684px);
          }
          77.083% {
            transform:translate(30px,65px);
          }
          79.167% {
            transform:translate(30px,65px);
          }
          81.25% {
            transform:translate(30px,65px);
          }
          83.333% {
            transform:translate(30px,65px);
          }
          85.417% {
            transform:translate(30px,65px);
          }
          87.5% {
            transform:translate(30px,65px);
          }
          89.583% {
            transform:translate(30px,65px);
          }
          91.667% {
            transform:translate(30px,65px);
          }
          93.75% {
            transform:translate(30px,65px);
          }
          95.833% {
            transform:translate(30px,65px);
          }
          97.917% {
            transform:translate(30px,65px);
          }
          100% {
            transform:translate(30px,65px);
          }
        }
        @keyframes organic0 {
          0% {
            transform:translate(14px,52px);
            opacity:1;
          }
          2.083% {
            transform:translate(15.794px,53.458px);
            opacity:1;
          }
          4.167% {
            transform:translate(20.019px,56.89px);
            opacity:1;
          }
          6.25% {
            transform:translate(24.938px,60.887px);
            opacity:1;
          }
          8.333% {
            transform:translate(28.815px,64.037px);
            opacity:1;
          }
          10.417% {
            transform:translate(30px,65px);
            opacity:0.206;
          }
          12.5% {
            transform:translate(30px,65px);
            opacity:0;
          }
          14.583% {
            transform:translate(30px,65px);
            opacity:0;
          }
          16.667% {
            transform:translate(30px,65px);
            opacity:0;
          }
          18.75% {
            transform:translate(30px,65px);
            opacity:0;
          }
          20.833% {
            transform:translate(30px,65px);
            opacity:0;
          }
          22.917% {
            transform:translate(30px,65px);
            opacity:0;
          }
          25% {
            transform:translate(30px,65px);
            opacity:0;
          }
          27.083% {
            transform:translate(30px,65px);
            opacity:0;
          }
          29.167% {
            transform:translate(30px,65px);
            opacity:0;
          }
          31.25% {
            transform:translate(30px,65px);
            opacity:0;
          }
          33.333% {
            transform:translate(30px,65px);
            opacity:0;
          }
          35.417% {
            transform:translate(30px,65px);
            opacity:0;
          }
          37.5% {
            transform:translate(30px,65px);
            opacity:0;
          }
          39.583% {
            transform:translate(30px,65px);
            opacity:0;
          }
          41.667% {
            transform:translate(30px,65px);
            opacity:0;
          }
          43.75% {
            transform:translate(30px,65px);
            opacity:0;
          }
          45.833% {
            transform:translate(30px,65px);
            opacity:0;
          }
          47.917% {
            transform:translate(30px,65px);
            opacity:0;
          }
          50% {
            transform:translate(30px,65px);
            opacity:0;
          }
          52.083% {
            transform:translate(30px,65px);
            opacity:0;
          }
          54.167% {
            transform:translate(30px,65px);
            opacity:0;
          }
          56.25% {
            transform:translate(30px,65px);
            opacity:0;
          }
          58.333% {
            transform:translate(30px,65px);
            opacity:0;
          }
          60.417% {
            transform:translate(30px,65px);
            opacity:0;
          }
          62.5% {
            transform:translate(30px,65px);
            opacity:0;
          }
          64.583% {
            transform:translate(30px,65px);
            opacity:0;
          }
          66.667% {
            transform:translate(30px,65px);
            opacity:0;
          }
          68.75% {
            transform:translate(30px,65px);
            opacity:0;
          }
          70.833% {
            transform:translate(30px,65px);
            opacity:0;
          }
          72.917% {
            transform:translate(30px,65px);
            opacity:0;
          }
          75% {
            transform:translate(30px,65px);
            opacity:0;
          }
          77.083% {
            transform:translate(30px,65px);
            opacity:0;
          }
          79.167% {
            transform:translate(30px,65px);
            opacity:0;
          }
          81.25% {
            transform:translate(30px,65px);
            opacity:0;
          }
          83.333% {
            transform:translate(30px,65px);
            opacity:0;
          }
          85.417% {
            transform:translate(30px,65px);
            opacity:0;
          }
          87.5% {
            transform:translate(30px,65px);
            opacity:0;
          }
          89.583% {
            transform:translate(30px,65px);
            opacity:0;
          }
          91.667% {
            transform:translate(30px,65px);
            opacity:0;
          }
          93.75% {
            transform:translate(30px,65px);
            opacity:0;
          }
          95.833% {
            transform:translate(30px,65px);
            opacity:0;
          }
          97.917% {
            transform:translate(30px,65px);
            opacity:0;
          }
          100% {
            transform:translate(30px,65px);
            opacity:0;
          }
        }
        @keyframes floc1 {
          0% {
            transform:translate(46px,72px);
          }
          2.083% {
            transform:translate(46px,72px);
          }
          4.167% {
            transform:translate(46px,72px);
          }
          6.25% {
            transform:translate(46px,72px);
          }
          8.333% {
            transform:translate(46px,72px);
          }
          10.417% {
            transform:translate(46px,72px);
          }
          12.5% {
            transform:translate(46px,72px);
          }
          14.583% {
            transform:translate(46px,72px);
          }
          16.667% {
            transform:translate(46px,72px);
          }
          18.75% {
            transform:translate(46px,72px);
          }
          20.833% {
            transform:translate(49.206px,68.605px);
          }
          22.917% {
            transform:translate(53.866px,63.671px);
          }
          25% {
            transform:translate(58.526px,58.737px);
          }
          27.083% {
            transform:translate(63.322px,54.007px);
          }
          29.167% {
            transform:translate(71.363px,54.19px);
          }
          31.25% {
            transform:translate(79.404px,54.373px);
          }
          33.333% {
            transform:translate(87.444px,54.556px);
          }
          35.417% {
            transform:translate(95.485px,54.738px);
          }
          37.5% {
            transform:translate(103.526px,54.921px);
          }
          39.583% {
            transform:translate(107px,58.633px);
          }
          41.667% {
            transform:translate(107px,65.029px);
          }
          43.75% {
            transform:translate(107px,71.425px);
          }
          45.833% {
            transform:translate(107px,77.822px);
          }
          47.917% {
            transform:translate(107px,84.218px);
          }
          50% {
            transform:translate(107px,90.614px);
          }
          52.083% {
            transform:translate(107px,97.012px);
          }
          54.167% {
            transform:translate(107px,104.779px);
          }
          56.25% {
            transform:translate(107px,112.546px);
          }
          58.333% {
            transform:translate(98.194px,114px);
          }
          60.417% {
            transform:translate(87.359px,114px);
          }
          62.5% {
            transform:translate(76.525px,114px);
          }
          64.583% {
            transform:translate(65.691px,114px);
          }
          66.667% {
            transform:translate(54.856px,114px);
          }
          68.75% {
            transform:translate(44.022px,114px);
          }
          70.833% {
            transform:translate(33.188px,114px);
          }
          72.917% {
            transform:translate(24px,112.25px);
          }
          75% {
            transform:translate(24px,100.737px);
          }
          77.083% {
            transform:translate(25.978px,91.112px);
          }
          79.167% {
            transform:translate(32.009px,85.355px);
          }
          81.25% {
            transform:translate(38.039px,79.599px);
          }
          83.333% {
            transform:translate(44.07px,73.842px);
          }
          85.417% {
            transform:translate(46px,72px);
          }
          87.5% {
            transform:translate(46px,72px);
          }
          89.583% {
            transform:translate(46px,72px);
          }
          91.667% {
            transform:translate(46px,72px);
          }
          93.75% {
            transform:translate(46px,72px);
          }
          95.833% {
            transform:translate(46px,72px);
          }
          97.917% {
            transform:translate(46px,72px);
          }
          100% {
            transform:translate(46px,72px);
          }
        }
        @keyframes organic1 {
          0% {
            transform:translate(14px,52px);
            opacity:1;
          }
          2.083% {
            transform:translate(17.588px,54.242px);
            opacity:1;
          }
          4.167% {
            transform:translate(26.037px,59.523px);
            opacity:1;
          }
          6.25% {
            transform:translate(35.875px,65.672px);
            opacity:1;
          }
          8.333% {
            transform:translate(43.63px,70.519px);
            opacity:1;
          }
          10.417% {
            transform:translate(46px,72px);
            opacity:0.206;
          }
          12.5% {
            transform:translate(46px,72px);
            opacity:0;
          }
          14.583% {
            transform:translate(46px,72px);
            opacity:0;
          }
          16.667% {
            transform:translate(46px,72px);
            opacity:0;
          }
          18.75% {
            transform:translate(46px,72px);
            opacity:0;
          }
          20.833% {
            transform:translate(46px,72px);
            opacity:0;
          }
          22.917% {
            transform:translate(46px,72px);
            opacity:0;
          }
          25% {
            transform:translate(46px,72px);
            opacity:0;
          }
          27.083% {
            transform:translate(46px,72px);
            opacity:0;
          }
          29.167% {
            transform:translate(46px,72px);
            opacity:0;
          }
          31.25% {
            transform:translate(46px,72px);
            opacity:0;
          }
          33.333% {
            transform:translate(46px,72px);
            opacity:0;
          }
          35.417% {
            transform:translate(46px,72px);
            opacity:0;
          }
          37.5% {
            transform:translate(46px,72px);
            opacity:0;
          }
          39.583% {
            transform:translate(46px,72px);
            opacity:0;
          }
          41.667% {
            transform:translate(46px,72px);
            opacity:0;
          }
          43.75% {
            transform:translate(46px,72px);
            opacity:0;
          }
          45.833% {
            transform:translate(46px,72px);
            opacity:0;
          }
          47.917% {
            transform:translate(46px,72px);
            opacity:0;
          }
          50% {
            transform:translate(46px,72px);
            opacity:0;
          }
          52.083% {
            transform:translate(46px,72px);
            opacity:0;
          }
          54.167% {
            transform:translate(46px,72px);
            opacity:0;
          }
          56.25% {
            transform:translate(46px,72px);
            opacity:0;
          }
          58.333% {
            transform:translate(46px,72px);
            opacity:0;
          }
          60.417% {
            transform:translate(46px,72px);
            opacity:0;
          }
          62.5% {
            transform:translate(46px,72px);
            opacity:0;
          }
          64.583% {
            transform:translate(46px,72px);
            opacity:0;
          }
          66.667% {
            transform:translate(46px,72px);
            opacity:0;
          }
          68.75% {
            transform:translate(46px,72px);
            opacity:0;
          }
          70.833% {
            transform:translate(46px,72px);
            opacity:0;
          }
          72.917% {
            transform:translate(46px,72px);
            opacity:0;
          }
          75% {
            transform:translate(46px,72px);
            opacity:0;
          }
          77.083% {
            transform:translate(46px,72px);
            opacity:0;
          }
          79.167% {
            transform:translate(46px,72px);
            opacity:0;
          }
          81.25% {
            transform:translate(46px,72px);
            opacity:0;
          }
          83.333% {
            transform:translate(46px,72px);
            opacity:0;
          }
          85.417% {
            transform:translate(46px,72px);
            opacity:0;
          }
          87.5% {
            transform:translate(46px,72px);
            opacity:0;
          }
          89.583% {
            transform:translate(46px,72px);
            opacity:0;
          }
          91.667% {
            transform:translate(46px,72px);
            opacity:0;
          }
          93.75% {
            transform:translate(46px,72px);
            opacity:0;
          }
          95.833% {
            transform:translate(46px,72px);
            opacity:0;
          }
          97.917% {
            transform:translate(46px,72px);
            opacity:0;
          }
          100% {
            transform:translate(46px,72px);
            opacity:0;
          }
        }
        @keyframes floc2 {
          0% {
            transform:translate(51px,80px);
          }
          2.083% {
            transform:translate(51px,80px);
          }
          4.167% {
            transform:translate(51px,80px);
          }
          6.25% {
            transform:translate(51px,80px);
          }
          8.333% {
            transform:translate(51px,80px);
          }
          10.417% {
            transform:translate(51px,80px);
          }
          12.5% {
            transform:translate(51px,80px);
          }
          14.583% {
            transform:translate(51px,80px);
          }
          16.667% {
            transform:translate(51px,80px);
          }
          18.75% {
            transform:translate(51px,80px);
          }
          20.833% {
            transform:translate(51px,80px);
          }
          22.917% {
            transform:translate(51px,80px);
          }
          25% {
            transform:translate(51px,80px);
          }
          27.083% {
            transform:translate(51px,80px);
          }
          29.167% {
            transform:translate(53.789px,73.956px);
          }
          31.25% {
            transform:translate(57.079px,66.829px);
          }
          33.333% {
            transform:translate(60.368px,59.702px);
          }
          35.417% {
            transform:translate(64.608px,54.037px);
          }
          37.5% {
            transform:translate(72.649px,54.219px);
          }
          39.583% {
            transform:translate(80.69px,54.402px);
          }
          41.667% {
            transform:translate(88.731px,54.585px);
          }
          43.75% {
            transform:translate(96.772px,54.768px);
          }
          45.833% {
            transform:translate(104.813px,54.95px);
          }
          47.917% {
            transform:translate(107px,59.656px);
          }
          50% {
            transform:translate(107px,66.053px);
          }
          52.083% {
            transform:translate(107px,72.449px);
          }
          54.167% {
            transform:translate(107px,78.845px);
          }
          56.25% {
            transform:translate(107px,85.241px);
          }
          58.333% {
            transform:translate(107px,91.637px);
          }
          60.417% {
            transform:translate(107px,98.255px);
          }
          62.5% {
            transform:translate(107px,106.022px);
          }
          64.583% {
            transform:translate(107px,113.789px);
          }
          66.667% {
            transform:translate(101.667px,114px);
          }
          68.75% {
            transform:translate(96.184px,114px);
          }
          70.833% {
            transform:translate(90.702px,114px);
          }
          72.917% {
            transform:translate(85.219px,114px);
          }
          75% {
            transform:translate(79.737px,114px);
          }
          77.083% {
            transform:translate(75px,114.41px);
          }
          79.167% {
            transform:translate(75px,117.425px);
          }
          81.25% {
            transform:translate(75px,120.441px);
          }
          83.333% {
            transform:translate(75px,123.456px);
          }
          85.417% {
            transform:translate(75px,125px);
          }
          87.5% {
            transform:translate(75px,125px);
          }
          89.583% {
            transform:translate(75px,125px);
          }
          91.667% {
            transform:translate(75px,125px);
          }
          93.75% {
            transform:translate(75px,125px);
          }
          95.833% {
            transform:translate(75px,125px);
          }
          97.917% {
            transform:translate(75px,125px);
          }
          100% {
            transform:translate(75px,125px);
          }
        }
        @keyframes organic2 {
          0% {
            transform:translate(14px,52px);
            opacity:1;
          }
          2.083% {
            transform:translate(18.149px,55.139px);
            opacity:1;
          }
          4.167% {
            transform:translate(27.918px,62.532px);
            opacity:1;
          }
          6.25% {
            transform:translate(39.293px,71.141px);
            opacity:1;
          }
          8.333% {
            transform:translate(48.259px,77.926px);
            opacity:1;
          }
          10.417% {
            transform:translate(51px,80px);
            opacity:0.206;
          }
          12.5% {
            transform:translate(51px,80px);
            opacity:0;
          }
          14.583% {
            transform:translate(51px,80px);
            opacity:0;
          }
          16.667% {
            transform:translate(51px,80px);
            opacity:0;
          }
          18.75% {
            transform:translate(51px,80px);
            opacity:0;
          }
          20.833% {
            transform:translate(51px,80px);
            opacity:0;
          }
          22.917% {
            transform:translate(51px,80px);
            opacity:0;
          }
          25% {
            transform:translate(51px,80px);
            opacity:0;
          }
          27.083% {
            transform:translate(51px,80px);
            opacity:0;
          }
          29.167% {
            transform:translate(51px,80px);
            opacity:0;
          }
          31.25% {
            transform:translate(51px,80px);
            opacity:0;
          }
          33.333% {
            transform:translate(51px,80px);
            opacity:0;
          }
          35.417% {
            transform:translate(51px,80px);
            opacity:0;
          }
          37.5% {
            transform:translate(51px,80px);
            opacity:0;
          }
          39.583% {
            transform:translate(51px,80px);
            opacity:0;
          }
          41.667% {
            transform:translate(51px,80px);
            opacity:0;
          }
          43.75% {
            transform:translate(51px,80px);
            opacity:0;
          }
          45.833% {
            transform:translate(51px,80px);
            opacity:0;
          }
          47.917% {
            transform:translate(51px,80px);
            opacity:0;
          }
          50% {
            transform:translate(51px,80px);
            opacity:0;
          }
          52.083% {
            transform:translate(51px,80px);
            opacity:0;
          }
          54.167% {
            transform:translate(51px,80px);
            opacity:0;
          }
          56.25% {
            transform:translate(51px,80px);
            opacity:0;
          }
          58.333% {
            transform:translate(51px,80px);
            opacity:0;
          }
          60.417% {
            transform:translate(51px,80px);
            opacity:0;
          }
          62.5% {
            transform:translate(51px,80px);
            opacity:0;
          }
          64.583% {
            transform:translate(51px,80px);
            opacity:0;
          }
          66.667% {
            transform:translate(51px,80px);
            opacity:0;
          }
          68.75% {
            transform:translate(51px,80px);
            opacity:0;
          }
          70.833% {
            transform:translate(51px,80px);
            opacity:0;
          }
          72.917% {
            transform:translate(51px,80px);
            opacity:0;
          }
          75% {
            transform:translate(51px,80px);
            opacity:0;
          }
          77.083% {
            transform:translate(51px,80px);
            opacity:0;
          }
          79.167% {
            transform:translate(51px,80px);
            opacity:0;
          }
          81.25% {
            transform:translate(51px,80px);
            opacity:0;
          }
          83.333% {
            transform:translate(51px,80px);
            opacity:0;
          }
          85.417% {
            transform:translate(51px,80px);
            opacity:0;
          }
          87.5% {
            transform:translate(51px,80px);
            opacity:0;
          }
          89.583% {
            transform:translate(51px,80px);
            opacity:0;
          }
          91.667% {
            transform:translate(51px,80px);
            opacity:0;
          }
          93.75% {
            transform:translate(51px,80px);
            opacity:0;
          }
          95.833% {
            transform:translate(51px,80px);
            opacity:0;
          }
          97.917% {
            transform:translate(51px,80px);
            opacity:0;
          }
          100% {
            transform:translate(51px,80px);
            opacity:0;
          }
        }
        @keyframes bioEpisode {
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
          .air0 {
            transform:translate(22px,85px);
            opacity:0;
            opacity:0;
          }
          .air1 {
            transform:translate(28px,80.143px);
            opacity:0.434;
          }
          .air2 {
            transform:translate(34px,75.286px);
            opacity:0.782;
          }
          .air3 {
            transform:translate(40px,70.429px);
            opacity:0.975;
          }
          .air4 {
            transform:translate(46px,65.571px);
            opacity:0.975;
          }
          .air5 {
            transform:translate(52px,60.714px);
            opacity:0.782;
          }
          .air6 {
            transform:translate(58px,55.857px);
            opacity:0.434;
          }
          .floc0 {
            transform:translate(29.211px,68.684px);
          }
          .organic0 {
            transform:translate(30px,65px);
            opacity:0;
          }
          .floc1 {
            transform:translate(24px,100.737px);
          }
          .organic1 {
            transform:translate(46px,72px);
            opacity:0;
          }
          .floc2 {
            transform:translate(79.737px,114px);
          }
          .organic2 {
            transform:translate(51px,80px);
            opacity:0;
          }
          .bioEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Activated-Sludge Treatment">
        <g class="bioEpisode">
          <path d="M12 42V93H68V42M85 45V80L107 99 128 80V45" fill="#194650" stroke="#a6b9aa" stroke-width="2"/>
          <path d="M7 53H20M63 54H91M125 49H134M107 97V114H24V93M75 114V126" fill="none" stroke="#8eb6ac" stroke-width="2"/>
          <path d="M18 88L61 88" stroke="#c5b78f" stroke-width="2"/>
          <circle cx="22" cy="86" r="1" fill="#b8ddd9"/>
          <circle cx="29" cy="86" r="1" fill="#b8ddd9"/>
          <circle cx="36" cy="86" r="1" fill="#b8ddd9"/>
          <circle cx="43" cy="86" r="1" fill="#b8ddd9"/>
          <circle cx="50" cy="86" r="1" fill="#b8ddd9"/>
          <circle cx="57" cy="86" r="1" fill="#b8ddd9"/>
          <g transform="translate(71 54) rotate(0)" fill="#8dcbd0">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g transform="translate(55 114) rotate(180)" fill="#d1b77c">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g transform="translate(75 124) rotate(90)" fill="#d1b77c">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <circle cx="0" cy="0" r="1.4" class="air0" fill="none" stroke="#86bec8"/>
          <circle cx="0" cy="0" r="1.4" class="air1" fill="none" stroke="#86bec8"/>
          <circle cx="0" cy="0" r="1.4" class="air2" fill="none" stroke="#86bec8"/>
          <circle cx="0" cy="0" r="1.4" class="air3" fill="none" stroke="#86bec8"/>
          <circle cx="0" cy="0" r="1.4" class="air4" fill="none" stroke="#86bec8"/>
          <circle cx="0" cy="0" r="1.4" class="air5" fill="none" stroke="#86bec8"/>
          <circle cx="0" cy="0" r="1.4" class="air6" fill="none" stroke="#86bec8"/>
          <g class="floc0" fill="#d3bd87">
            <circle cx="0" cy="0" r="2"/>
            <circle cx="1.8" cy="0.6" r="1.1"/>
            <circle cx="-1.3" cy="-1.1" r="1.1"/>
          </g>
          <circle cx="0" cy="0" r="1.4" class="organic0" fill="#ed9477"/>
          <g class="floc1" fill="#d3bd87">
            <circle cx="0" cy="0" r="2"/>
            <circle cx="1.8" cy="0.6" r="1.1"/>
            <circle cx="-1.3" cy="-1.1" r="1.1"/>
          </g>
          <circle cx="0" cy="0" r="1.4" class="organic1" fill="#ed9477"/>
          <g class="floc2" fill="#d3bd87">
            <circle cx="0" cy="0" r="2"/>
            <circle cx="1.8" cy="0.6" r="1.1"/>
            <circle cx="-1.3" cy="-1.1" r="1.1"/>
          </g>
          <circle cx="0" cy="0" r="1.4" class="organic2" fill="#ed9477"/>
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

if (!customElements.get("concept-activated-sludge-treatment")) {
  customElements.define("concept-activated-sludge-treatment", ConceptActivatedSludgeTreatment);
}
