// Truss Load Paths. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTrussLoadPaths extends HTMLElement {
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
        .member0 {
          animation:member0 16s linear infinite;
        }
        .member1 {
          animation:member1 16s linear infinite;
        }
        .member2 {
          animation:member2 16s linear infinite;
        }
        .member3 {
          animation:member3 16s linear infinite;
        }
        .member4 {
          animation:member4 16s linear infinite;
        }
        .member5 {
          animation:member5 16s linear infinite;
        }
        .member6 {
          animation:member6 16s linear infinite;
        }
        .load0 {
          animation:load0 16s linear infinite;
        }
        .load1 {
          animation:load1 16s linear infinite;
        }
        @keyframes member0 {
          0% {
            stroke:#76c5df;
            stroke-width:4.662;
          }
          2.083% {
            stroke:#76c5df;
            stroke-width:4.652;
          }
          4.167% {
            stroke:#76c5df;
            stroke-width:4.62;
          }
          6.25% {
            stroke:#76c5df;
            stroke-width:4.569;
          }
          8.333% {
            stroke:#76c5df;
            stroke-width:4.498;
          }
          10.417% {
            stroke:#76c5df;
            stroke-width:4.41;
          }
          12.5% {
            stroke:#76c5df;
            stroke-width:4.304;
          }
          14.583% {
            stroke:#76c5df;
            stroke-width:4.184;
          }
          16.667% {
            stroke:#76c5df;
            stroke-width:4.052;
          }
          18.75% {
            stroke:#76c5df;
            stroke-width:3.908;
          }
          20.833% {
            stroke:#76c5df;
            stroke-width:3.757;
          }
          22.917% {
            stroke:#76c5df;
            stroke-width:3.601;
          }
          25% {
            stroke:#76c5df;
            stroke-width:3.441;
          }
          27.083% {
            stroke:#76c5df;
            stroke-width:3.282;
          }
          29.167% {
            stroke:#76c5df;
            stroke-width:3.125;
          }
          31.25% {
            stroke:#76c5df;
            stroke-width:2.974;
          }
          33.333% {
            stroke:#76c5df;
            stroke-width:2.831;
          }
          35.417% {
            stroke:#76c5df;
            stroke-width:2.698;
          }
          37.5% {
            stroke:#76c5df;
            stroke-width:2.578;
          }
          39.583% {
            stroke:#76c5df;
            stroke-width:2.473;
          }
          41.667% {
            stroke:#76c5df;
            stroke-width:2.384;
          }
          43.75% {
            stroke:#76c5df;
            stroke-width:2.314;
          }
          45.833% {
            stroke:#76c5df;
            stroke-width:2.262;
          }
          47.917% {
            stroke:#76c5df;
            stroke-width:2.231;
          }
          50% {
            stroke:#76c5df;
            stroke-width:2.221;
          }
          52.083% {
            stroke:#76c5df;
            stroke-width:2.231;
          }
          54.167% {
            stroke:#76c5df;
            stroke-width:2.262;
          }
          56.25% {
            stroke:#76c5df;
            stroke-width:2.314;
          }
          58.333% {
            stroke:#76c5df;
            stroke-width:2.384;
          }
          60.417% {
            stroke:#76c5df;
            stroke-width:2.473;
          }
          62.5% {
            stroke:#76c5df;
            stroke-width:2.578;
          }
          64.583% {
            stroke:#76c5df;
            stroke-width:2.698;
          }
          66.667% {
            stroke:#76c5df;
            stroke-width:2.831;
          }
          68.75% {
            stroke:#76c5df;
            stroke-width:2.974;
          }
          70.833% {
            stroke:#76c5df;
            stroke-width:3.125;
          }
          72.917% {
            stroke:#76c5df;
            stroke-width:3.282;
          }
          75% {
            stroke:#76c5df;
            stroke-width:3.441;
          }
          77.083% {
            stroke:#76c5df;
            stroke-width:3.601;
          }
          79.167% {
            stroke:#76c5df;
            stroke-width:3.757;
          }
          81.25% {
            stroke:#76c5df;
            stroke-width:3.908;
          }
          83.333% {
            stroke:#76c5df;
            stroke-width:4.052;
          }
          85.417% {
            stroke:#76c5df;
            stroke-width:4.184;
          }
          87.5% {
            stroke:#76c5df;
            stroke-width:4.304;
          }
          89.583% {
            stroke:#76c5df;
            stroke-width:4.41;
          }
          91.667% {
            stroke:#76c5df;
            stroke-width:4.498;
          }
          93.75% {
            stroke:#76c5df;
            stroke-width:4.569;
          }
          95.833% {
            stroke:#76c5df;
            stroke-width:4.62;
          }
          97.917% {
            stroke:#76c5df;
            stroke-width:4.652;
          }
          100% {
            stroke:#76c5df;
            stroke-width:4.662;
          }
        }
        @keyframes member1 {
          0% {
            stroke:#76c5df;
            stroke-width:2.221;
          }
          2.083% {
            stroke:#76c5df;
            stroke-width:2.21;
          }
          4.167% {
            stroke:#76c5df;
            stroke-width:2.179;
          }
          6.25% {
            stroke:#76c5df;
            stroke-width:2.128;
          }
          8.333% {
            stroke:#76c5df;
            stroke-width:2.057;
          }
          10.417% {
            stroke:#76c5df;
            stroke-width:1.968;
          }
          12.5% {
            stroke:#76c5df;
            stroke-width:1.863;
          }
          14.583% {
            stroke:#76c5df;
            stroke-width:1.743;
          }
          16.667% {
            stroke:#76c5df;
            stroke-width:1.61;
          }
          18.75% {
            stroke:#76c5df;
            stroke-width:1.467;
          }
          20.833% {
            stroke:#76c5df;
            stroke-width:1.316;
          }
          22.917% {
            stroke:#76c5df;
            stroke-width:1.159;
          }
          25% {
            stroke:#ecc278;
            stroke-width:1;
          }
          27.083% {
            stroke:#ecc278;
            stroke-width:1.159;
          }
          29.167% {
            stroke:#ecc278;
            stroke-width:1.316;
          }
          31.25% {
            stroke:#ecc278;
            stroke-width:1.467;
          }
          33.333% {
            stroke:#ecc278;
            stroke-width:1.61;
          }
          35.417% {
            stroke:#ecc278;
            stroke-width:1.743;
          }
          37.5% {
            stroke:#ecc278;
            stroke-width:1.863;
          }
          39.583% {
            stroke:#ecc278;
            stroke-width:1.968;
          }
          41.667% {
            stroke:#ecc278;
            stroke-width:2.057;
          }
          43.75% {
            stroke:#ecc278;
            stroke-width:2.128;
          }
          45.833% {
            stroke:#ecc278;
            stroke-width:2.179;
          }
          47.917% {
            stroke:#ecc278;
            stroke-width:2.21;
          }
          50% {
            stroke:#ecc278;
            stroke-width:2.221;
          }
          52.083% {
            stroke:#ecc278;
            stroke-width:2.21;
          }
          54.167% {
            stroke:#ecc278;
            stroke-width:2.179;
          }
          56.25% {
            stroke:#ecc278;
            stroke-width:2.128;
          }
          58.333% {
            stroke:#ecc278;
            stroke-width:2.057;
          }
          60.417% {
            stroke:#ecc278;
            stroke-width:1.968;
          }
          62.5% {
            stroke:#ecc278;
            stroke-width:1.863;
          }
          64.583% {
            stroke:#ecc278;
            stroke-width:1.743;
          }
          66.667% {
            stroke:#ecc278;
            stroke-width:1.61;
          }
          68.75% {
            stroke:#ecc278;
            stroke-width:1.467;
          }
          70.833% {
            stroke:#ecc278;
            stroke-width:1.316;
          }
          72.917% {
            stroke:#ecc278;
            stroke-width:1.159;
          }
          75% {
            stroke:#ecc278;
            stroke-width:1;
          }
          77.083% {
            stroke:#76c5df;
            stroke-width:1.159;
          }
          79.167% {
            stroke:#76c5df;
            stroke-width:1.316;
          }
          81.25% {
            stroke:#76c5df;
            stroke-width:1.467;
          }
          83.333% {
            stroke:#76c5df;
            stroke-width:1.61;
          }
          85.417% {
            stroke:#76c5df;
            stroke-width:1.743;
          }
          87.5% {
            stroke:#76c5df;
            stroke-width:1.863;
          }
          89.583% {
            stroke:#76c5df;
            stroke-width:1.968;
          }
          91.667% {
            stroke:#76c5df;
            stroke-width:2.057;
          }
          93.75% {
            stroke:#76c5df;
            stroke-width:2.128;
          }
          95.833% {
            stroke:#76c5df;
            stroke-width:2.179;
          }
          97.917% {
            stroke:#76c5df;
            stroke-width:2.21;
          }
          100% {
            stroke:#76c5df;
            stroke-width:2.221;
          }
        }
        @keyframes member2 {
          0% {
            stroke:#ecc278;
            stroke-width:2.221;
          }
          2.083% {
            stroke:#ecc278;
            stroke-width:2.21;
          }
          4.167% {
            stroke:#ecc278;
            stroke-width:2.179;
          }
          6.25% {
            stroke:#ecc278;
            stroke-width:2.128;
          }
          8.333% {
            stroke:#ecc278;
            stroke-width:2.057;
          }
          10.417% {
            stroke:#ecc278;
            stroke-width:1.968;
          }
          12.5% {
            stroke:#ecc278;
            stroke-width:1.863;
          }
          14.583% {
            stroke:#ecc278;
            stroke-width:1.743;
          }
          16.667% {
            stroke:#ecc278;
            stroke-width:1.61;
          }
          18.75% {
            stroke:#ecc278;
            stroke-width:1.467;
          }
          20.833% {
            stroke:#ecc278;
            stroke-width:1.316;
          }
          22.917% {
            stroke:#ecc278;
            stroke-width:1.159;
          }
          25% {
            stroke:#ecc278;
            stroke-width:1;
          }
          27.083% {
            stroke:#76c5df;
            stroke-width:1.159;
          }
          29.167% {
            stroke:#76c5df;
            stroke-width:1.316;
          }
          31.25% {
            stroke:#76c5df;
            stroke-width:1.467;
          }
          33.333% {
            stroke:#76c5df;
            stroke-width:1.61;
          }
          35.417% {
            stroke:#76c5df;
            stroke-width:1.743;
          }
          37.5% {
            stroke:#76c5df;
            stroke-width:1.863;
          }
          39.583% {
            stroke:#76c5df;
            stroke-width:1.968;
          }
          41.667% {
            stroke:#76c5df;
            stroke-width:2.057;
          }
          43.75% {
            stroke:#76c5df;
            stroke-width:2.128;
          }
          45.833% {
            stroke:#76c5df;
            stroke-width:2.179;
          }
          47.917% {
            stroke:#76c5df;
            stroke-width:2.21;
          }
          50% {
            stroke:#76c5df;
            stroke-width:2.221;
          }
          52.083% {
            stroke:#76c5df;
            stroke-width:2.21;
          }
          54.167% {
            stroke:#76c5df;
            stroke-width:2.179;
          }
          56.25% {
            stroke:#76c5df;
            stroke-width:2.128;
          }
          58.333% {
            stroke:#76c5df;
            stroke-width:2.057;
          }
          60.417% {
            stroke:#76c5df;
            stroke-width:1.968;
          }
          62.5% {
            stroke:#76c5df;
            stroke-width:1.863;
          }
          64.583% {
            stroke:#76c5df;
            stroke-width:1.743;
          }
          66.667% {
            stroke:#76c5df;
            stroke-width:1.61;
          }
          68.75% {
            stroke:#76c5df;
            stroke-width:1.467;
          }
          70.833% {
            stroke:#76c5df;
            stroke-width:1.316;
          }
          72.917% {
            stroke:#76c5df;
            stroke-width:1.159;
          }
          75% {
            stroke:#ecc278;
            stroke-width:1;
          }
          77.083% {
            stroke:#ecc278;
            stroke-width:1.159;
          }
          79.167% {
            stroke:#ecc278;
            stroke-width:1.316;
          }
          81.25% {
            stroke:#ecc278;
            stroke-width:1.467;
          }
          83.333% {
            stroke:#ecc278;
            stroke-width:1.61;
          }
          85.417% {
            stroke:#ecc278;
            stroke-width:1.743;
          }
          87.5% {
            stroke:#ecc278;
            stroke-width:1.863;
          }
          89.583% {
            stroke:#ecc278;
            stroke-width:1.968;
          }
          91.667% {
            stroke:#ecc278;
            stroke-width:2.057;
          }
          93.75% {
            stroke:#ecc278;
            stroke-width:2.128;
          }
          95.833% {
            stroke:#ecc278;
            stroke-width:2.179;
          }
          97.917% {
            stroke:#ecc278;
            stroke-width:2.21;
          }
          100% {
            stroke:#ecc278;
            stroke-width:2.221;
          }
        }
        @keyframes member3 {
          0% {
            stroke:#76c5df;
            stroke-width:2.221;
          }
          2.083% {
            stroke:#76c5df;
            stroke-width:2.231;
          }
          4.167% {
            stroke:#76c5df;
            stroke-width:2.262;
          }
          6.25% {
            stroke:#76c5df;
            stroke-width:2.314;
          }
          8.333% {
            stroke:#76c5df;
            stroke-width:2.384;
          }
          10.417% {
            stroke:#76c5df;
            stroke-width:2.473;
          }
          12.5% {
            stroke:#76c5df;
            stroke-width:2.578;
          }
          14.583% {
            stroke:#76c5df;
            stroke-width:2.698;
          }
          16.667% {
            stroke:#76c5df;
            stroke-width:2.831;
          }
          18.75% {
            stroke:#76c5df;
            stroke-width:2.974;
          }
          20.833% {
            stroke:#76c5df;
            stroke-width:3.125;
          }
          22.917% {
            stroke:#76c5df;
            stroke-width:3.282;
          }
          25% {
            stroke:#76c5df;
            stroke-width:3.441;
          }
          27.083% {
            stroke:#76c5df;
            stroke-width:3.601;
          }
          29.167% {
            stroke:#76c5df;
            stroke-width:3.757;
          }
          31.25% {
            stroke:#76c5df;
            stroke-width:3.908;
          }
          33.333% {
            stroke:#76c5df;
            stroke-width:4.052;
          }
          35.417% {
            stroke:#76c5df;
            stroke-width:4.184;
          }
          37.5% {
            stroke:#76c5df;
            stroke-width:4.304;
          }
          39.583% {
            stroke:#76c5df;
            stroke-width:4.41;
          }
          41.667% {
            stroke:#76c5df;
            stroke-width:4.498;
          }
          43.75% {
            stroke:#76c5df;
            stroke-width:4.569;
          }
          45.833% {
            stroke:#76c5df;
            stroke-width:4.62;
          }
          47.917% {
            stroke:#76c5df;
            stroke-width:4.652;
          }
          50% {
            stroke:#76c5df;
            stroke-width:4.662;
          }
          52.083% {
            stroke:#76c5df;
            stroke-width:4.652;
          }
          54.167% {
            stroke:#76c5df;
            stroke-width:4.62;
          }
          56.25% {
            stroke:#76c5df;
            stroke-width:4.569;
          }
          58.333% {
            stroke:#76c5df;
            stroke-width:4.498;
          }
          60.417% {
            stroke:#76c5df;
            stroke-width:4.41;
          }
          62.5% {
            stroke:#76c5df;
            stroke-width:4.304;
          }
          64.583% {
            stroke:#76c5df;
            stroke-width:4.184;
          }
          66.667% {
            stroke:#76c5df;
            stroke-width:4.052;
          }
          68.75% {
            stroke:#76c5df;
            stroke-width:3.908;
          }
          70.833% {
            stroke:#76c5df;
            stroke-width:3.757;
          }
          72.917% {
            stroke:#76c5df;
            stroke-width:3.601;
          }
          75% {
            stroke:#76c5df;
            stroke-width:3.441;
          }
          77.083% {
            stroke:#76c5df;
            stroke-width:3.282;
          }
          79.167% {
            stroke:#76c5df;
            stroke-width:3.125;
          }
          81.25% {
            stroke:#76c5df;
            stroke-width:2.974;
          }
          83.333% {
            stroke:#76c5df;
            stroke-width:2.831;
          }
          85.417% {
            stroke:#76c5df;
            stroke-width:2.698;
          }
          87.5% {
            stroke:#76c5df;
            stroke-width:2.578;
          }
          89.583% {
            stroke:#76c5df;
            stroke-width:2.473;
          }
          91.667% {
            stroke:#76c5df;
            stroke-width:2.384;
          }
          93.75% {
            stroke:#76c5df;
            stroke-width:2.314;
          }
          95.833% {
            stroke:#76c5df;
            stroke-width:2.262;
          }
          97.917% {
            stroke:#76c5df;
            stroke-width:2.231;
          }
          100% {
            stroke:#76c5df;
            stroke-width:2.221;
          }
        }
        @keyframes member4 {
          0% {
            stroke:#ecc278;
            stroke-width:3.1;
          }
          2.083% {
            stroke:#ecc278;
            stroke-width:3.094;
          }
          4.167% {
            stroke:#ecc278;
            stroke-width:3.076;
          }
          6.25% {
            stroke:#ecc278;
            stroke-width:3.047;
          }
          8.333% {
            stroke:#ecc278;
            stroke-width:3.006;
          }
          10.417% {
            stroke:#ecc278;
            stroke-width:2.955;
          }
          12.5% {
            stroke:#ecc278;
            stroke-width:2.895;
          }
          14.583% {
            stroke:#ecc278;
            stroke-width:2.826;
          }
          16.667% {
            stroke:#ecc278;
            stroke-width:2.75;
          }
          18.75% {
            stroke:#ecc278;
            stroke-width:2.668;
          }
          20.833% {
            stroke:#ecc278;
            stroke-width:2.581;
          }
          22.917% {
            stroke:#ecc278;
            stroke-width:2.491;
          }
          25% {
            stroke:#ecc278;
            stroke-width:2.4;
          }
          27.083% {
            stroke:#ecc278;
            stroke-width:2.309;
          }
          29.167% {
            stroke:#ecc278;
            stroke-width:2.219;
          }
          31.25% {
            stroke:#ecc278;
            stroke-width:2.132;
          }
          33.333% {
            stroke:#ecc278;
            stroke-width:2.05;
          }
          35.417% {
            stroke:#ecc278;
            stroke-width:1.974;
          }
          37.5% {
            stroke:#ecc278;
            stroke-width:1.905;
          }
          39.583% {
            stroke:#ecc278;
            stroke-width:1.845;
          }
          41.667% {
            stroke:#ecc278;
            stroke-width:1.794;
          }
          43.75% {
            stroke:#ecc278;
            stroke-width:1.753;
          }
          45.833% {
            stroke:#ecc278;
            stroke-width:1.724;
          }
          47.917% {
            stroke:#ecc278;
            stroke-width:1.706;
          }
          50% {
            stroke:#ecc278;
            stroke-width:1.7;
          }
          52.083% {
            stroke:#ecc278;
            stroke-width:1.706;
          }
          54.167% {
            stroke:#ecc278;
            stroke-width:1.724;
          }
          56.25% {
            stroke:#ecc278;
            stroke-width:1.753;
          }
          58.333% {
            stroke:#ecc278;
            stroke-width:1.794;
          }
          60.417% {
            stroke:#ecc278;
            stroke-width:1.845;
          }
          62.5% {
            stroke:#ecc278;
            stroke-width:1.905;
          }
          64.583% {
            stroke:#ecc278;
            stroke-width:1.974;
          }
          66.667% {
            stroke:#ecc278;
            stroke-width:2.05;
          }
          68.75% {
            stroke:#ecc278;
            stroke-width:2.132;
          }
          70.833% {
            stroke:#ecc278;
            stroke-width:2.219;
          }
          72.917% {
            stroke:#ecc278;
            stroke-width:2.309;
          }
          75% {
            stroke:#ecc278;
            stroke-width:2.4;
          }
          77.083% {
            stroke:#ecc278;
            stroke-width:2.491;
          }
          79.167% {
            stroke:#ecc278;
            stroke-width:2.581;
          }
          81.25% {
            stroke:#ecc278;
            stroke-width:2.668;
          }
          83.333% {
            stroke:#ecc278;
            stroke-width:2.75;
          }
          85.417% {
            stroke:#ecc278;
            stroke-width:2.826;
          }
          87.5% {
            stroke:#ecc278;
            stroke-width:2.895;
          }
          89.583% {
            stroke:#ecc278;
            stroke-width:2.955;
          }
          91.667% {
            stroke:#ecc278;
            stroke-width:3.006;
          }
          93.75% {
            stroke:#ecc278;
            stroke-width:3.047;
          }
          95.833% {
            stroke:#ecc278;
            stroke-width:3.076;
          }
          97.917% {
            stroke:#ecc278;
            stroke-width:3.094;
          }
          100% {
            stroke:#ecc278;
            stroke-width:3.1;
          }
        }
        @keyframes member5 {
          0% {
            stroke:#ecc278;
            stroke-width:1.7;
          }
          2.083% {
            stroke:#ecc278;
            stroke-width:1.706;
          }
          4.167% {
            stroke:#ecc278;
            stroke-width:1.724;
          }
          6.25% {
            stroke:#ecc278;
            stroke-width:1.753;
          }
          8.333% {
            stroke:#ecc278;
            stroke-width:1.794;
          }
          10.417% {
            stroke:#ecc278;
            stroke-width:1.845;
          }
          12.5% {
            stroke:#ecc278;
            stroke-width:1.905;
          }
          14.583% {
            stroke:#ecc278;
            stroke-width:1.974;
          }
          16.667% {
            stroke:#ecc278;
            stroke-width:2.05;
          }
          18.75% {
            stroke:#ecc278;
            stroke-width:2.132;
          }
          20.833% {
            stroke:#ecc278;
            stroke-width:2.219;
          }
          22.917% {
            stroke:#ecc278;
            stroke-width:2.309;
          }
          25% {
            stroke:#ecc278;
            stroke-width:2.4;
          }
          27.083% {
            stroke:#ecc278;
            stroke-width:2.491;
          }
          29.167% {
            stroke:#ecc278;
            stroke-width:2.581;
          }
          31.25% {
            stroke:#ecc278;
            stroke-width:2.668;
          }
          33.333% {
            stroke:#ecc278;
            stroke-width:2.75;
          }
          35.417% {
            stroke:#ecc278;
            stroke-width:2.826;
          }
          37.5% {
            stroke:#ecc278;
            stroke-width:2.895;
          }
          39.583% {
            stroke:#ecc278;
            stroke-width:2.955;
          }
          41.667% {
            stroke:#ecc278;
            stroke-width:3.006;
          }
          43.75% {
            stroke:#ecc278;
            stroke-width:3.047;
          }
          45.833% {
            stroke:#ecc278;
            stroke-width:3.076;
          }
          47.917% {
            stroke:#ecc278;
            stroke-width:3.094;
          }
          50% {
            stroke:#ecc278;
            stroke-width:3.1;
          }
          52.083% {
            stroke:#ecc278;
            stroke-width:3.094;
          }
          54.167% {
            stroke:#ecc278;
            stroke-width:3.076;
          }
          56.25% {
            stroke:#ecc278;
            stroke-width:3.047;
          }
          58.333% {
            stroke:#ecc278;
            stroke-width:3.006;
          }
          60.417% {
            stroke:#ecc278;
            stroke-width:2.955;
          }
          62.5% {
            stroke:#ecc278;
            stroke-width:2.895;
          }
          64.583% {
            stroke:#ecc278;
            stroke-width:2.826;
          }
          66.667% {
            stroke:#ecc278;
            stroke-width:2.75;
          }
          68.75% {
            stroke:#ecc278;
            stroke-width:2.668;
          }
          70.833% {
            stroke:#ecc278;
            stroke-width:2.581;
          }
          72.917% {
            stroke:#ecc278;
            stroke-width:2.491;
          }
          75% {
            stroke:#ecc278;
            stroke-width:2.4;
          }
          77.083% {
            stroke:#ecc278;
            stroke-width:2.309;
          }
          79.167% {
            stroke:#ecc278;
            stroke-width:2.219;
          }
          81.25% {
            stroke:#ecc278;
            stroke-width:2.132;
          }
          83.333% {
            stroke:#ecc278;
            stroke-width:2.05;
          }
          85.417% {
            stroke:#ecc278;
            stroke-width:1.974;
          }
          87.5% {
            stroke:#ecc278;
            stroke-width:1.905;
          }
          89.583% {
            stroke:#ecc278;
            stroke-width:1.845;
          }
          91.667% {
            stroke:#ecc278;
            stroke-width:1.794;
          }
          93.75% {
            stroke:#ecc278;
            stroke-width:1.753;
          }
          95.833% {
            stroke:#ecc278;
            stroke-width:1.724;
          }
          97.917% {
            stroke:#ecc278;
            stroke-width:1.706;
          }
          100% {
            stroke:#ecc278;
            stroke-width:1.7;
          }
        }
        @keyframes member6 {
          0% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          2.083% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          4.167% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          6.25% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          8.333% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          10.417% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          12.5% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          14.583% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          16.667% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          18.75% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          20.833% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          22.917% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          25% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          27.083% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          29.167% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          31.25% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          33.333% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          35.417% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          37.5% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          39.583% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          41.667% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          43.75% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          45.833% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          47.917% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          50% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          52.083% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          54.167% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          56.25% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          58.333% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          60.417% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          62.5% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          64.583% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          66.667% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          68.75% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          70.833% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          72.917% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          75% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          77.083% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          79.167% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          81.25% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          83.333% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          85.417% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          87.5% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          89.583% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          91.667% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          93.75% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          95.833% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          97.917% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          100% {
            stroke:#76c5df;
            stroke-width:2.4;
          }
        }
        @keyframes load0 {
          0% {
            d:path('M42 34L42 60M44 56L42 60L40 56');
          }
          2.083% {
            d:path('M42 34.111L42 60M44 56L42 60L40 56');
          }
          4.167% {
            d:path('M42 34.443L42 60M44 56L42 60L40 56');
          }
          6.25% {
            d:path('M42 34.99L42 60M44 56L42 60L40 56');
          }
          8.333% {
            d:path('M42 35.742L42 60M44 56L42 60L40 56');
          }
          10.417% {
            d:path('M42 36.686L42 60M44 56L42 60L40 56');
          }
          12.5% {
            d:path('M42 37.808L42 60M44 56L42 60L40 56');
          }
          14.583% {
            d:path('M42 39.086L42 60M44 56L42 60L40 56');
          }
          16.667% {
            d:path('M42 40.5L42 60M44 56L42 60L40 56');
          }
          18.75% {
            d:path('M42 42.025L42 60M44 56L42 60L40 56');
          }
          20.833% {
            d:path('M42 43.635L42 60M44 56L42 60L40 56');
          }
          22.917% {
            d:path('M42 45.303L42 60M44 56L42 60L40 56');
          }
          25% {
            d:path('M42 47L42 60M44 56L42 60L40 56');
          }
          27.083% {
            d:path('M42 48.697L42 60M44 56L42 60L40 56');
          }
          29.167% {
            d:path('M42 50.365L42 60M43.927 56.146L42 60L40.073 56.146');
          }
          31.25% {
            d:path('M42 51.975L42 60M43.605 56.79L42 60L40.395 56.79');
          }
          33.333% {
            d:path('M42 53.5L42 60M43.3 57.4L42 60L40.7 57.4');
          }
          35.417% {
            d:path('M42 54.914L42 60M43.017 57.966L42 60L40.983 57.966');
          }
          37.5% {
            d:path('M42 56.192L42 60M42.762 58.477L42 60L41.238 58.477');
          }
          39.583% {
            d:path('M42 57.314L42 60M42.537 58.925L42 60L41.463 58.925');
          }
          41.667% {
            d:path('M42 58.258L42 60M42.348 59.303L42 60L41.652 59.303');
          }
          43.75% {
            d:path('M42 59.01L42 60M42.198 59.604L42 60L41.802 59.604');
          }
          45.833% {
            d:path('M42 59.557L42 60M42.089 59.823L42 60L41.911 59.823');
          }
          47.917% {
            d:path('M42 59.889L42 60M42.022 59.956L42 60L41.978 59.956');
          }
          50% {
            d:path('M42 60l0 0');
          }
          52.083% {
            d:path('M42 59.889L42 60M42.022 59.956L42 60L41.978 59.956');
          }
          54.167% {
            d:path('M42 59.557L42 60M42.089 59.823L42 60L41.911 59.823');
          }
          56.25% {
            d:path('M42 59.01L42 60M42.198 59.604L42 60L41.802 59.604');
          }
          58.333% {
            d:path('M42 58.258L42 60M42.348 59.303L42 60L41.652 59.303');
          }
          60.417% {
            d:path('M42 57.314L42 60M42.537 58.925L42 60L41.463 58.925');
          }
          62.5% {
            d:path('M42 56.192L42 60M42.762 58.477L42 60L41.238 58.477');
          }
          64.583% {
            d:path('M42 54.914L42 60M43.017 57.966L42 60L40.983 57.966');
          }
          66.667% {
            d:path('M42 53.5L42 60M43.3 57.4L42 60L40.7 57.4');
          }
          68.75% {
            d:path('M42 51.975L42 60M43.605 56.79L42 60L40.395 56.79');
          }
          70.833% {
            d:path('M42 50.365L42 60M43.927 56.146L42 60L40.073 56.146');
          }
          72.917% {
            d:path('M42 48.697L42 60M44 56L42 60L40 56');
          }
          75% {
            d:path('M42 47L42 60M44 56L42 60L40 56');
          }
          77.083% {
            d:path('M42 45.303L42 60M44 56L42 60L40 56');
          }
          79.167% {
            d:path('M42 43.635L42 60M44 56L42 60L40 56');
          }
          81.25% {
            d:path('M42 42.025L42 60M44 56L42 60L40 56');
          }
          83.333% {
            d:path('M42 40.5L42 60M44 56L42 60L40 56');
          }
          85.417% {
            d:path('M42 39.086L42 60M44 56L42 60L40 56');
          }
          87.5% {
            d:path('M42 37.808L42 60M44 56L42 60L40 56');
          }
          89.583% {
            d:path('M42 36.686L42 60M44 56L42 60L40 56');
          }
          91.667% {
            d:path('M42 35.742L42 60M44 56L42 60L40 56');
          }
          93.75% {
            d:path('M42 34.99L42 60M44 56L42 60L40 56');
          }
          95.833% {
            d:path('M42 34.443L42 60M44 56L42 60L40 56');
          }
          97.917% {
            d:path('M42 34.111L42 60M44 56L42 60L40 56');
          }
          100% {
            d:path('M42 34L42 60M44 56L42 60L40 56');
          }
        }
        @keyframes load1 {
          0% {
            d:path('M98 60l0 0');
          }
          2.083% {
            d:path('M98 59.889L98 60M98.022 59.956L98 60L97.978 59.956');
          }
          4.167% {
            d:path('M98 59.557L98 60M98.089 59.823L98 60L97.911 59.823');
          }
          6.25% {
            d:path('M98 59.01L98 60M98.198 59.604L98 60L97.802 59.604');
          }
          8.333% {
            d:path('M98 58.258L98 60M98.348 59.303L98 60L97.652 59.303');
          }
          10.417% {
            d:path('M98 57.314L98 60M98.537 58.925L98 60L97.463 58.925');
          }
          12.5% {
            d:path('M98 56.192L98 60M98.762 58.477L98 60L97.238 58.477');
          }
          14.583% {
            d:path('M98 54.914L98 60M99.017 57.966L98 60L96.983 57.966');
          }
          16.667% {
            d:path('M98 53.5L98 60M99.3 57.4L98 60L96.7 57.4');
          }
          18.75% {
            d:path('M98 51.975L98 60M99.605 56.79L98 60L96.395 56.79');
          }
          20.833% {
            d:path('M98 50.365L98 60M99.927 56.146L98 60L96.073 56.146');
          }
          22.917% {
            d:path('M98 48.697L98 60M100 56L98 60L96 56');
          }
          25% {
            d:path('M98 47L98 60M100 56L98 60L96 56');
          }
          27.083% {
            d:path('M98 45.303L98 60M100 56L98 60L96 56');
          }
          29.167% {
            d:path('M98 43.635L98 60M100 56L98 60L96 56');
          }
          31.25% {
            d:path('M98 42.025L98 60M100 56L98 60L96 56');
          }
          33.333% {
            d:path('M98 40.5L98 60M100 56L98 60L96 56');
          }
          35.417% {
            d:path('M98 39.086L98 60M100 56L98 60L96 56');
          }
          37.5% {
            d:path('M98 37.808L98 60M100 56L98 60L96 56');
          }
          39.583% {
            d:path('M98 36.686L98 60M100 56L98 60L96 56');
          }
          41.667% {
            d:path('M98 35.742L98 60M100 56L98 60L96 56');
          }
          43.75% {
            d:path('M98 34.99L98 60M100 56L98 60L96 56');
          }
          45.833% {
            d:path('M98 34.443L98 60M100 56L98 60L96 56');
          }
          47.917% {
            d:path('M98 34.111L98 60M100 56L98 60L96 56');
          }
          50% {
            d:path('M98 34L98 60M100 56L98 60L96 56');
          }
          52.083% {
            d:path('M98 34.111L98 60M100 56L98 60L96 56');
          }
          54.167% {
            d:path('M98 34.443L98 60M100 56L98 60L96 56');
          }
          56.25% {
            d:path('M98 34.99L98 60M100 56L98 60L96 56');
          }
          58.333% {
            d:path('M98 35.742L98 60M100 56L98 60L96 56');
          }
          60.417% {
            d:path('M98 36.686L98 60M100 56L98 60L96 56');
          }
          62.5% {
            d:path('M98 37.808L98 60M100 56L98 60L96 56');
          }
          64.583% {
            d:path('M98 39.086L98 60M100 56L98 60L96 56');
          }
          66.667% {
            d:path('M98 40.5L98 60M100 56L98 60L96 56');
          }
          68.75% {
            d:path('M98 42.025L98 60M100 56L98 60L96 56');
          }
          70.833% {
            d:path('M98 43.635L98 60M100 56L98 60L96 56');
          }
          72.917% {
            d:path('M98 45.303L98 60M100 56L98 60L96 56');
          }
          75% {
            d:path('M98 47L98 60M100 56L98 60L96 56');
          }
          77.083% {
            d:path('M98 48.697L98 60M100 56L98 60L96 56');
          }
          79.167% {
            d:path('M98 50.365L98 60M99.927 56.146L98 60L96.073 56.146');
          }
          81.25% {
            d:path('M98 51.975L98 60M99.605 56.79L98 60L96.395 56.79');
          }
          83.333% {
            d:path('M98 53.5L98 60M99.3 57.4L98 60L96.7 57.4');
          }
          85.417% {
            d:path('M98 54.914L98 60M99.017 57.966L98 60L96.983 57.966');
          }
          87.5% {
            d:path('M98 56.192L98 60M98.762 58.477L98 60L97.238 58.477');
          }
          89.583% {
            d:path('M98 57.314L98 60M98.537 58.925L98 60L97.463 58.925');
          }
          91.667% {
            d:path('M98 58.258L98 60M98.348 59.303L98 60L97.652 59.303');
          }
          93.75% {
            d:path('M98 59.01L98 60M98.198 59.604L98 60L97.802 59.604');
          }
          95.833% {
            d:path('M98 59.557L98 60M98.089 59.823L98 60L97.911 59.823');
          }
          97.917% {
            d:path('M98 59.889L98 60M98.022 59.956L98 60L97.978 59.956');
          }
          100% {
            d:path('M98 60l0 0');
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .member0 {
            stroke:#76c5df;
            stroke-width:3.441;
          }
          .member1 {
            stroke:#ecc278;
            stroke-width:1;
          }
          .member2 {
            stroke:#ecc278;
            stroke-width:1;
          }
          .member3 {
            stroke:#76c5df;
            stroke-width:3.441;
          }
          .member4 {
            stroke:#ecc278;
            stroke-width:2.4;
          }
          .member5 {
            stroke:#ecc278;
            stroke-width:2.4;
          }
          .member6 {
            stroke:#76c5df;
            stroke-width:2.4;
          }
          .load0 {
            d:path('M42 47L42 60M44 56L42 60L40 56');
          }
          .load1 {
            d:path('M98 47L98 60M100 56L98 60L96 56');
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Truss Load Paths">
        <path d="M8 113L14 105 20 113ZM120 112L126 105 132 112Z" fill="#9fb39b"/>
        <circle cx="123" cy="116" r="2" fill="#9fb39b"/>
        <circle cx="129" cy="116" r="2" fill="#9fb39b"/>
        <path d="M14 105L42 65" class="member0" stroke="#96c5bd" stroke-width="2"/>
        <path d="M42 65L70 105" class="member1" stroke="#96c5bd" stroke-width="2"/>
        <path d="M70 105L98 65" class="member2" stroke="#96c5bd" stroke-width="2"/>
        <path d="M98 65L126 105" class="member3" stroke="#96c5bd" stroke-width="2"/>
        <path d="M14 105L70 105" class="member4" stroke="#96c5bd" stroke-width="2"/>
        <path d="M70 105L126 105" class="member5" stroke="#96c5bd" stroke-width="2"/>
        <path d="M42 65L98 65" class="member6" stroke="#96c5bd" stroke-width="2"/>
        <circle cx="14" cy="105" r="2.5" fill="#0e2929" stroke="#d0ddd0"/>
        <circle cx="42" cy="65" r="2.5" fill="#0e2929" stroke="#d0ddd0"/>
        <circle cx="70" cy="105" r="2.5" fill="#0e2929" stroke="#d0ddd0"/>
        <circle cx="98" cy="65" r="2.5" fill="#0e2929" stroke="#d0ddd0"/>
        <circle cx="126" cy="105" r="2.5" fill="#0e2929" stroke="#d0ddd0"/>
        <path d="M42 47L42 60M44 56L42 60L40 56" class="load0" fill="none" stroke="#d7e0b9" stroke-width="2"/>
        <path d="M98 47L98 60M100 56L98 60L96 56" class="load1" fill="none" stroke="#d7e0b9" stroke-width="2"/>
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

if (!customElements.get("concept-truss-load-paths")) {
  customElements.define("concept-truss-load-paths", ConceptTrussLoadPaths);
}
