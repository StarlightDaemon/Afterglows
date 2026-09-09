// Tunnel-Boring Advance. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTunnelBoringAdvance extends HTMLElement {
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
        .excavated {
          animation:excavated 16s linear infinite;
        }
        .machine {
          animation:machine 16s linear infinite;
        }
        .rockFace {
          animation:rockFace 16s linear infinite;
        }
        .jacks {
          animation:jacks 16s linear infinite;
        }
        .newRing {
          animation:newRing 16s linear infinite;
        }
        .spoil0 {
          animation:spoil0 16s linear infinite;
        }
        .spoil0 {
          animation:spoil0 16s linear infinite;
        }
        .spoil1 {
          animation:spoil1 16s linear infinite;
        }
        .spoil1 {
          animation:spoil1 16s linear infinite;
        }
        .spoil2 {
          animation:spoil2 16s linear infinite;
        }
        .spoil2 {
          animation:spoil2 16s linear infinite;
        }
        .spoil3 {
          animation:spoil3 16s linear infinite;
        }
        .spoil3 {
          animation:spoil3 16s linear infinite;
        }
        .spoil4 {
          animation:spoil4 16s linear infinite;
        }
        .spoil4 {
          animation:spoil4 16s linear infinite;
        }
        .boreEpisode {
          animation:boreEpisode 16s linear infinite;
        }
        @keyframes excavated {
          0% {
            d:path('M8 45H110V101H8Z');
          }
          2.083% {
            d:path('M8 45H110V101H8Z');
          }
          4.167% {
            d:path('M8 45H110V101H8Z');
          }
          6.25% {
            d:path('M8 45H110.002V101H8Z');
          }
          8.333% {
            d:path('M8 45H110.162V101H8Z');
          }
          10.417% {
            d:path('M8 45H110.555V101H8Z');
          }
          12.5% {
            d:path('M8 45H111.148V101H8Z');
          }
          14.583% {
            d:path('M8 45H111.908V101H8Z');
          }
          16.667% {
            d:path('M8 45H112.802V101H8Z');
          }
          18.75% {
            d:path('M8 45H113.797V101H8Z');
          }
          20.833% {
            d:path('M8 45H114.859V101H8Z');
          }
          22.917% {
            d:path('M8 45H115.956V101H8Z');
          }
          25% {
            d:path('M8 45H117.054V101H8Z');
          }
          27.083% {
            d:path('M8 45H118.12V101H8Z');
          }
          29.167% {
            d:path('M8 45H119.122V101H8Z');
          }
          31.25% {
            d:path('M8 45H120.025V101H8Z');
          }
          33.333% {
            d:path('M8 45H120.797V101H8Z');
          }
          35.417% {
            d:path('M8 45H121.405V101H8Z');
          }
          37.5% {
            d:path('M8 45H121.815V101H8Z');
          }
          39.583% {
            d:path('M8 45H121.995V101H8Z');
          }
          41.667% {
            d:path('M8 45H122V101H8Z');
          }
          43.75% {
            d:path('M8 45H122V101H8Z');
          }
          45.833% {
            d:path('M8 45H122V101H8Z');
          }
          47.917% {
            d:path('M8 45H122V101H8Z');
          }
          50% {
            d:path('M8 45H122V101H8Z');
          }
          52.083% {
            d:path('M8 45H122V101H8Z');
          }
          54.167% {
            d:path('M8 45H122V101H8Z');
          }
          56.25% {
            d:path('M8 45H122V101H8Z');
          }
          58.333% {
            d:path('M8 45H122V101H8Z');
          }
          60.417% {
            d:path('M8 45H122V101H8Z');
          }
          62.5% {
            d:path('M8 45H122V101H8Z');
          }
          64.583% {
            d:path('M8 45H122V101H8Z');
          }
          66.667% {
            d:path('M8 45H122V101H8Z');
          }
          68.75% {
            d:path('M8 45H122V101H8Z');
          }
          70.833% {
            d:path('M8 45H122V101H8Z');
          }
          72.917% {
            d:path('M8 45H122V101H8Z');
          }
          75% {
            d:path('M8 45H122V101H8Z');
          }
          77.083% {
            d:path('M8 45H122V101H8Z');
          }
          79.167% {
            d:path('M8 45H122V101H8Z');
          }
          81.25% {
            d:path('M8 45H122V101H8Z');
          }
          83.333% {
            d:path('M8 45H122V101H8Z');
          }
          85.417% {
            d:path('M8 45H122V101H8Z');
          }
          87.5% {
            d:path('M8 45H122V101H8Z');
          }
          89.583% {
            d:path('M8 45H122V101H8Z');
          }
          91.667% {
            d:path('M8 45H122V101H8Z');
          }
          93.75% {
            d:path('M8 45H122V101H8Z');
          }
          95.833% {
            d:path('M8 45H122V101H8Z');
          }
          97.917% {
            d:path('M8 45H122V101H8Z');
          }
          100% {
            d:path('M8 45H122V101H8Z');
          }
        }
        @keyframes machine {
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
            transform:translate(0.002px,0px);
          }
          8.333% {
            transform:translate(0.162px,0px);
          }
          10.417% {
            transform:translate(0.555px,0px);
          }
          12.5% {
            transform:translate(1.148px,0px);
          }
          14.583% {
            transform:translate(1.908px,0px);
          }
          16.667% {
            transform:translate(2.802px,0px);
          }
          18.75% {
            transform:translate(3.797px,0px);
          }
          20.833% {
            transform:translate(4.859px,0px);
          }
          22.917% {
            transform:translate(5.956px,0px);
          }
          25% {
            transform:translate(7.054px,0px);
          }
          27.083% {
            transform:translate(8.12px,0px);
          }
          29.167% {
            transform:translate(9.122px,0px);
          }
          31.25% {
            transform:translate(10.025px,0px);
          }
          33.333% {
            transform:translate(10.797px,0px);
          }
          35.417% {
            transform:translate(11.405px,0px);
          }
          37.5% {
            transform:translate(11.815px,0px);
          }
          39.583% {
            transform:translate(11.995px,0px);
          }
          41.667% {
            transform:translate(12px,0px);
          }
          43.75% {
            transform:translate(12px,0px);
          }
          45.833% {
            transform:translate(12px,0px);
          }
          47.917% {
            transform:translate(12px,0px);
          }
          50% {
            transform:translate(12px,0px);
          }
          52.083% {
            transform:translate(12px,0px);
          }
          54.167% {
            transform:translate(12px,0px);
          }
          56.25% {
            transform:translate(12px,0px);
          }
          58.333% {
            transform:translate(12px,0px);
          }
          60.417% {
            transform:translate(12px,0px);
          }
          62.5% {
            transform:translate(12px,0px);
          }
          64.583% {
            transform:translate(12px,0px);
          }
          66.667% {
            transform:translate(12px,0px);
          }
          68.75% {
            transform:translate(12px,0px);
          }
          70.833% {
            transform:translate(12px,0px);
          }
          72.917% {
            transform:translate(12px,0px);
          }
          75% {
            transform:translate(12px,0px);
          }
          77.083% {
            transform:translate(12px,0px);
          }
          79.167% {
            transform:translate(12px,0px);
          }
          81.25% {
            transform:translate(12px,0px);
          }
          83.333% {
            transform:translate(12px,0px);
          }
          85.417% {
            transform:translate(12px,0px);
          }
          87.5% {
            transform:translate(12px,0px);
          }
          89.583% {
            transform:translate(12px,0px);
          }
          91.667% {
            transform:translate(12px,0px);
          }
          93.75% {
            transform:translate(12px,0px);
          }
          95.833% {
            transform:translate(12px,0px);
          }
          97.917% {
            transform:translate(12px,0px);
          }
          100% {
            transform:translate(12px,0px);
          }
        }
        @keyframes rockFace {
          0% {
            d:path('M110 34H132V115H110Z');
          }
          2.083% {
            d:path('M110 34H132V115H110Z');
          }
          4.167% {
            d:path('M110 34H132V115H110Z');
          }
          6.25% {
            d:path('M110.002 34H132V115H110.002Z');
          }
          8.333% {
            d:path('M110.162 34H132V115H110.162Z');
          }
          10.417% {
            d:path('M110.555 34H132V115H110.555Z');
          }
          12.5% {
            d:path('M111.148 34H132V115H111.148Z');
          }
          14.583% {
            d:path('M111.908 34H132V115H111.908Z');
          }
          16.667% {
            d:path('M112.802 34H132V115H112.802Z');
          }
          18.75% {
            d:path('M113.797 34H132V115H113.797Z');
          }
          20.833% {
            d:path('M114.859 34H132V115H114.859Z');
          }
          22.917% {
            d:path('M115.956 34H132V115H115.956Z');
          }
          25% {
            d:path('M117.054 34H132V115H117.054Z');
          }
          27.083% {
            d:path('M118.12 34H132V115H118.12Z');
          }
          29.167% {
            d:path('M119.122 34H132V115H119.122Z');
          }
          31.25% {
            d:path('M120.025 34H132V115H120.025Z');
          }
          33.333% {
            d:path('M120.797 34H132V115H120.797Z');
          }
          35.417% {
            d:path('M121.405 34H132V115H121.405Z');
          }
          37.5% {
            d:path('M121.815 34H132V115H121.815Z');
          }
          39.583% {
            d:path('M121.995 34H132V115H121.995Z');
          }
          41.667% {
            d:path('M122 34H132V115H122Z');
          }
          43.75% {
            d:path('M122 34H132V115H122Z');
          }
          45.833% {
            d:path('M122 34H132V115H122Z');
          }
          47.917% {
            d:path('M122 34H132V115H122Z');
          }
          50% {
            d:path('M122 34H132V115H122Z');
          }
          52.083% {
            d:path('M122 34H132V115H122Z');
          }
          54.167% {
            d:path('M122 34H132V115H122Z');
          }
          56.25% {
            d:path('M122 34H132V115H122Z');
          }
          58.333% {
            d:path('M122 34H132V115H122Z');
          }
          60.417% {
            d:path('M122 34H132V115H122Z');
          }
          62.5% {
            d:path('M122 34H132V115H122Z');
          }
          64.583% {
            d:path('M122 34H132V115H122Z');
          }
          66.667% {
            d:path('M122 34H132V115H122Z');
          }
          68.75% {
            d:path('M122 34H132V115H122Z');
          }
          70.833% {
            d:path('M122 34H132V115H122Z');
          }
          72.917% {
            d:path('M122 34H132V115H122Z');
          }
          75% {
            d:path('M122 34H132V115H122Z');
          }
          77.083% {
            d:path('M122 34H132V115H122Z');
          }
          79.167% {
            d:path('M122 34H132V115H122Z');
          }
          81.25% {
            d:path('M122 34H132V115H122Z');
          }
          83.333% {
            d:path('M122 34H132V115H122Z');
          }
          85.417% {
            d:path('M122 34H132V115H122Z');
          }
          87.5% {
            d:path('M122 34H132V115H122Z');
          }
          89.583% {
            d:path('M122 34H132V115H122Z');
          }
          91.667% {
            d:path('M122 34H132V115H122Z');
          }
          93.75% {
            d:path('M122 34H132V115H122Z');
          }
          95.833% {
            d:path('M122 34H132V115H122Z');
          }
          97.917% {
            d:path('M122 34H132V115H122Z');
          }
          100% {
            d:path('M122 34H132V115H122Z');
          }
        }
        @keyframes jacks {
          0% {
            d:path('M44 55H60M44 89H60');
          }
          2.083% {
            d:path('M44 55H60M44 89H60');
          }
          4.167% {
            d:path('M44 55H60M44 89H60');
          }
          6.25% {
            d:path('M44 55H60.002M44 89H60.002');
          }
          8.333% {
            d:path('M44 55H60.162M44 89H60.162');
          }
          10.417% {
            d:path('M44 55H60.555M44 89H60.555');
          }
          12.5% {
            d:path('M44 55H61.148M44 89H61.148');
          }
          14.583% {
            d:path('M44 55H61.908M44 89H61.908');
          }
          16.667% {
            d:path('M44 55H62.802M44 89H62.802');
          }
          18.75% {
            d:path('M44 55H63.797M44 89H63.797');
          }
          20.833% {
            d:path('M44 55H64.859M44 89H64.859');
          }
          22.917% {
            d:path('M44 55H65.956M44 89H65.956');
          }
          25% {
            d:path('M44 55H67.054M44 89H67.054');
          }
          27.083% {
            d:path('M44 55H68.12M44 89H68.12');
          }
          29.167% {
            d:path('M44 55H69.122M44 89H69.122');
          }
          31.25% {
            d:path('M44 55H70.025M44 89H70.025');
          }
          33.333% {
            d:path('M44 55H70.797M44 89H70.797');
          }
          35.417% {
            d:path('M44 55H71.405M44 89H71.405');
          }
          37.5% {
            d:path('M44 55H71.815M44 89H71.815');
          }
          39.583% {
            d:path('M44 55H71.995M44 89H71.995');
          }
          41.667% {
            d:path('M44 55H72M44 89H72');
          }
          43.75% {
            d:path('M44 55H72M44 89H72');
          }
          45.833% {
            d:path('M44 55H72M44 89H72');
          }
          47.917% {
            d:path('M44 55H72M44 89H72');
          }
          50% {
            d:path('M44 55H72M44 89H72');
          }
          52.083% {
            d:path('M44 55H72M44 89H72');
          }
          54.167% {
            d:path('M44 55H72M44 89H72');
          }
          56.25% {
            d:path('M44 55H72M44 89H72');
          }
          58.333% {
            d:path('M44 55H72M44 89H72');
          }
          60.417% {
            d:path('M44 55H72M44 89H72');
          }
          62.5% {
            d:path('M44 55H72M44 89H72');
          }
          64.583% {
            d:path('M44 55H72M44 89H72');
          }
          66.667% {
            d:path('M44 55H72M44 89H72');
          }
          68.75% {
            d:path('M44 55H72M44 89H72');
          }
          70.833% {
            d:path('M44 55H72M44 89H72');
          }
          72.917% {
            d:path('M44 55H72M44 89H72');
          }
          75% {
            d:path('M44 55H72M44 89H72');
          }
          77.083% {
            d:path('M44.601 55H72M44.601 89H72');
          }
          79.167% {
            d:path('M48.152 55H72M48.152 89H72');
          }
          81.25% {
            d:path('M52.721 55H72M52.721 89H72');
          }
          83.333% {
            d:path('M55.764 55H72M55.764 89H72');
          }
          85.417% {
            d:path('M56 55H72M56 89H72');
          }
          87.5% {
            d:path('M56 55H72M56 89H72');
          }
          89.583% {
            d:path('M56 55H72M56 89H72');
          }
          91.667% {
            d:path('M56 55H72M56 89H72');
          }
          93.75% {
            d:path('M56 55H72M56 89H72');
          }
          95.833% {
            d:path('M56 55H72M56 89H72');
          }
          97.917% {
            d:path('M56 55H72M56 89H72');
          }
          100% {
            d:path('M56 55H72M56 89H72');
          }
        }
        @keyframes newRing {
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
            opacity:0.025;
          }
          54.167% {
            opacity:0.094;
          }
          56.25% {
            opacity:0.196;
          }
          58.333% {
            opacity:0.322;
          }
          60.417% {
            opacity:0.46;
          }
          62.5% {
            opacity:0.602;
          }
          64.583% {
            opacity:0.736;
          }
          66.667% {
            opacity:0.852;
          }
          68.75% {
            opacity:0.941;
          }
          70.833% {
            opacity:0.992;
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
        @keyframes spoil0 {
          0% {
            transform:translate(105px,74px);
            opacity:0;
          }
          2.083% {
            transform:translate(105px,74px);
            opacity:0;
          }
          4.167% {
            transform:translate(105px,74px);
            opacity:0;
          }
          6.25% {
            transform:translate(105.002px,74px);
            opacity:0;
          }
          8.333% {
            transform:translate(101.695px,74.533px);
            opacity:1;
          }
          10.417% {
            transform:translate(96.672px,75.367px);
            opacity:1;
          }
          12.5% {
            transform:translate(91.848px,76.2px);
            opacity:1;
          }
          14.583% {
            transform:translate(87.192px,77.033px);
            opacity:1;
          }
          16.667% {
            transform:translate(82.669px,77.867px);
            opacity:1;
          }
          18.75% {
            transform:translate(78.247px,78.7px);
            opacity:1;
          }
          20.833% {
            transform:translate(73.892px,79.533px);
            opacity:1;
          }
          22.917% {
            transform:translate(69.573px,80.367px);
            opacity:1;
          }
          25% {
            transform:translate(65.254px,81.2px);
            opacity:1;
          }
          27.083% {
            transform:translate(60.904px,82.033px);
            opacity:1;
          }
          29.167% {
            transform:translate(56.488px,82.867px);
            opacity:1;
          }
          31.25% {
            transform:translate(51.975px,83.7px);
            opacity:1;
          }
          33.333% {
            transform:translate(50.797px,84px);
            opacity:0;
          }
          35.417% {
            transform:translate(51.405px,84px);
            opacity:0;
          }
          37.5% {
            transform:translate(51.815px,84px);
            opacity:0;
          }
          39.583% {
            transform:translate(51.995px,84px);
            opacity:0;
          }
          41.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          43.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          45.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          47.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          50% {
            transform:translate(52px,84px);
            opacity:0;
          }
          52.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          54.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          56.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          58.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          60.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          62.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          64.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          66.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          68.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          70.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          72.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          77.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          79.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          81.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          83.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          85.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          87.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          89.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          91.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          93.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          95.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          97.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          100% {
            transform:translate(52px,84px);
            opacity:0;
          }
        }
        @keyframes spoil1 {
          0% {
            transform:translate(105px,74px);
            opacity:0;
          }
          2.083% {
            transform:translate(105px,74px);
            opacity:0;
          }
          4.167% {
            transform:translate(105px,74px);
            opacity:0;
          }
          6.25% {
            transform:translate(105.002px,74px);
            opacity:0;
          }
          8.333% {
            transform:translate(105.162px,74px);
            opacity:0;
          }
          10.417% {
            transform:translate(105.555px,74px);
            opacity:0;
          }
          12.5% {
            transform:translate(104.848px,74.2px);
            opacity:1;
          }
          14.583% {
            transform:translate(100.192px,75.033px);
            opacity:1;
          }
          16.667% {
            transform:translate(95.669px,75.867px);
            opacity:1;
          }
          18.75% {
            transform:translate(91.247px,76.7px);
            opacity:1;
          }
          20.833% {
            transform:translate(86.892px,77.533px);
            opacity:1;
          }
          22.917% {
            transform:translate(82.573px,78.367px);
            opacity:1;
          }
          25% {
            transform:translate(78.254px,79.2px);
            opacity:1;
          }
          27.083% {
            transform:translate(73.904px,80.033px);
            opacity:1;
          }
          29.167% {
            transform:translate(69.488px,80.867px);
            opacity:1;
          }
          31.25% {
            transform:translate(64.975px,81.7px);
            opacity:1;
          }
          33.333% {
            transform:translate(60.33px,82.533px);
            opacity:1;
          }
          35.417% {
            transform:translate(55.521px,83.367px);
            opacity:1;
          }
          37.5% {
            transform:translate(51.815px,84px);
            opacity:0;
          }
          39.583% {
            transform:translate(51.995px,84px);
            opacity:0;
          }
          41.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          43.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          45.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          47.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          50% {
            transform:translate(52px,84px);
            opacity:0;
          }
          52.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          54.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          56.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          58.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          60.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          62.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          64.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          66.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          68.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          70.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          72.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          77.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          79.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          81.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          83.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          85.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          87.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          89.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          91.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          93.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          95.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          97.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          100% {
            transform:translate(52px,84px);
            opacity:0;
          }
        }
        @keyframes spoil2 {
          0% {
            transform:translate(105px,74px);
            opacity:0;
          }
          2.083% {
            transform:translate(105px,74px);
            opacity:0;
          }
          4.167% {
            transform:translate(105px,74px);
            opacity:0;
          }
          6.25% {
            transform:translate(105.002px,74px);
            opacity:0;
          }
          8.333% {
            transform:translate(105.162px,74px);
            opacity:0;
          }
          10.417% {
            transform:translate(105.555px,74px);
            opacity:0;
          }
          12.5% {
            transform:translate(106.148px,74px);
            opacity:0;
          }
          14.583% {
            transform:translate(106.908px,74px);
            opacity:0;
          }
          16.667% {
            transform:translate(107.802px,74px);
            opacity:0;
          }
          18.75% {
            transform:translate(104.247px,74.7px);
            opacity:1;
          }
          20.833% {
            transform:translate(99.892px,75.533px);
            opacity:1;
          }
          22.917% {
            transform:translate(95.573px,76.367px);
            opacity:1;
          }
          25% {
            transform:translate(91.254px,77.2px);
            opacity:1;
          }
          27.083% {
            transform:translate(86.904px,78.033px);
            opacity:1;
          }
          29.167% {
            transform:translate(82.488px,78.867px);
            opacity:1;
          }
          31.25% {
            transform:translate(77.975px,79.7px);
            opacity:1;
          }
          33.333% {
            transform:translate(73.33px,80.533px);
            opacity:1;
          }
          35.417% {
            transform:translate(68.521px,81.367px);
            opacity:1;
          }
          37.5% {
            transform:translate(63.515px,82.2px);
            opacity:1;
          }
          39.583% {
            transform:translate(58.278px,83.033px);
            opacity:1;
          }
          41.667% {
            transform:translate(52.867px,83.867px);
            opacity:1;
          }
          43.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          45.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          47.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          50% {
            transform:translate(52px,84px);
            opacity:0;
          }
          52.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          54.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          56.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          58.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          60.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          62.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          64.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          66.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          68.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          70.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          72.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          77.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          79.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          81.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          83.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          85.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          87.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          89.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          91.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          93.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          95.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          97.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          100% {
            transform:translate(52px,84px);
            opacity:0;
          }
        }
        @keyframes spoil3 {
          0% {
            transform:translate(105px,74px);
            opacity:0;
          }
          2.083% {
            transform:translate(105px,74px);
            opacity:0;
          }
          4.167% {
            transform:translate(105px,74px);
            opacity:0;
          }
          6.25% {
            transform:translate(105.002px,74px);
            opacity:0;
          }
          8.333% {
            transform:translate(105.162px,74px);
            opacity:0;
          }
          10.417% {
            transform:translate(105.555px,74px);
            opacity:0;
          }
          12.5% {
            transform:translate(106.148px,74px);
            opacity:0;
          }
          14.583% {
            transform:translate(106.908px,74px);
            opacity:0;
          }
          16.667% {
            transform:translate(107.802px,74px);
            opacity:0;
          }
          18.75% {
            transform:translate(108.797px,74px);
            opacity:0;
          }
          20.833% {
            transform:translate(109.859px,74px);
            opacity:0;
          }
          22.917% {
            transform:translate(108.573px,74.367px);
            opacity:1;
          }
          25% {
            transform:translate(104.254px,75.2px);
            opacity:1;
          }
          27.083% {
            transform:translate(99.904px,76.033px);
            opacity:1;
          }
          29.167% {
            transform:translate(95.488px,76.867px);
            opacity:1;
          }
          31.25% {
            transform:translate(90.975px,77.7px);
            opacity:1;
          }
          33.333% {
            transform:translate(86.33px,78.533px);
            opacity:1;
          }
          35.417% {
            transform:translate(81.521px,79.367px);
            opacity:1;
          }
          37.5% {
            transform:translate(76.515px,80.2px);
            opacity:1;
          }
          39.583% {
            transform:translate(71.278px,81.033px);
            opacity:1;
          }
          41.667% {
            transform:translate(65.867px,81.867px);
            opacity:1;
          }
          43.75% {
            transform:translate(60.45px,82.7px);
            opacity:1;
          }
          45.833% {
            transform:translate(55.033px,83.533px);
            opacity:1;
          }
          47.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          50% {
            transform:translate(52px,84px);
            opacity:0;
          }
          52.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          54.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          56.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          58.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          60.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          62.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          64.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          66.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          68.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          70.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          72.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          77.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          79.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          81.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          83.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          85.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          87.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          89.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          91.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          93.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          95.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          97.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          100% {
            transform:translate(52px,84px);
            opacity:0;
          }
        }
        @keyframes spoil4 {
          0% {
            transform:translate(105px,74px);
            opacity:0;
          }
          2.083% {
            transform:translate(105px,74px);
            opacity:0;
          }
          4.167% {
            transform:translate(105px,74px);
            opacity:0;
          }
          6.25% {
            transform:translate(105.002px,74px);
            opacity:0;
          }
          8.333% {
            transform:translate(105.162px,74px);
            opacity:0;
          }
          10.417% {
            transform:translate(105.555px,74px);
            opacity:0;
          }
          12.5% {
            transform:translate(106.148px,74px);
            opacity:0;
          }
          14.583% {
            transform:translate(106.908px,74px);
            opacity:0;
          }
          16.667% {
            transform:translate(107.802px,74px);
            opacity:0;
          }
          18.75% {
            transform:translate(108.797px,74px);
            opacity:0;
          }
          20.833% {
            transform:translate(109.859px,74px);
            opacity:0;
          }
          22.917% {
            transform:translate(110.956px,74px);
            opacity:0;
          }
          25% {
            transform:translate(112.054px,74px);
            opacity:0;
          }
          27.083% {
            transform:translate(112.904px,74.033px);
            opacity:1;
          }
          29.167% {
            transform:translate(108.488px,74.867px);
            opacity:1;
          }
          31.25% {
            transform:translate(103.975px,75.7px);
            opacity:1;
          }
          33.333% {
            transform:translate(99.33px,76.533px);
            opacity:1;
          }
          35.417% {
            transform:translate(94.521px,77.367px);
            opacity:1;
          }
          37.5% {
            transform:translate(89.515px,78.2px);
            opacity:1;
          }
          39.583% {
            transform:translate(84.278px,79.033px);
            opacity:1;
          }
          41.667% {
            transform:translate(78.867px,79.867px);
            opacity:1;
          }
          43.75% {
            transform:translate(73.45px,80.7px);
            opacity:1;
          }
          45.833% {
            transform:translate(68.033px,81.533px);
            opacity:1;
          }
          47.917% {
            transform:translate(62.617px,82.367px);
            opacity:1;
          }
          50% {
            transform:translate(57.2px,83.2px);
            opacity:1;
          }
          52.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          54.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          56.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          58.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          60.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          62.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          64.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          66.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          68.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          70.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          72.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          77.083% {
            transform:translate(52px,84px);
            opacity:0;
          }
          79.167% {
            transform:translate(52px,84px);
            opacity:0;
          }
          81.25% {
            transform:translate(52px,84px);
            opacity:0;
          }
          83.333% {
            transform:translate(52px,84px);
            opacity:0;
          }
          85.417% {
            transform:translate(52px,84px);
            opacity:0;
          }
          87.5% {
            transform:translate(52px,84px);
            opacity:0;
          }
          89.583% {
            transform:translate(52px,84px);
            opacity:0;
          }
          91.667% {
            transform:translate(52px,84px);
            opacity:0;
          }
          93.75% {
            transform:translate(52px,84px);
            opacity:0;
          }
          95.833% {
            transform:translate(52px,84px);
            opacity:0;
          }
          97.917% {
            transform:translate(52px,84px);
            opacity:0;
          }
          100% {
            transform:translate(52px,84px);
            opacity:0;
          }
        }
        @keyframes boreEpisode {
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
            opacity:0.777;
          }
          97.917% {
            opacity:0.278;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .excavated {
            d:path('M8 45H122V101H8Z');
          }
          .machine {
            transform:translate(12px,0px);
          }
          .rockFace {
            d:path('M122 34H132V115H122Z');
          }
          .jacks {
            d:path('M44 55H72M44 89H72');
          }
          .newRing {
            opacity:1;
          }
          .spoil0 {
            transform:translate(52px,84px);
            opacity:0;
          }
          .spoil1 {
            transform:translate(52px,84px);
            opacity:0;
          }
          .spoil2 {
            transform:translate(52px,84px);
            opacity:0;
          }
          .spoil3 {
            transform:translate(52px,84px);
            opacity:0;
          }
          .spoil4 {
            transform:translate(52px,84px);
            opacity:0;
          }
          .boreEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Tunnel-Boring Advance">
        <g class="boreEpisode">
          <rect x="8" y="34" width="124" height="81" fill="#51412e"/>
          <path d="M8 45H122V101H8Z" class="excavated" fill="#102826"/>
          <path d="M122 34H132V115H122Z" class="rockFace" fill="#756043"/>
          <rect x="8" y="44" width="11" height="7" fill="#a1afa0"/>
          <rect x="8" y="95" width="11" height="7" fill="#a1afa0"/>
          <rect x="20" y="44" width="11" height="7" fill="#a1afa0"/>
          <rect x="20" y="95" width="11" height="7" fill="#a1afa0"/>
          <rect x="32" y="44" width="11" height="7" fill="#a1afa0"/>
          <rect x="32" y="95" width="11" height="7" fill="#a1afa0"/>
          <g class="machine">
            <path d="M44 46H108V98H44M44 50H104V94H44" fill="none" stroke="#94a9a1" stroke-width="2"/>
            <rect x="106" y="43" width="6" height="58" fill="#bd996a"/>
            <rect x="108" y="46" width="6" height="3" fill="#e0c08a"/>
            <rect x="108" y="54" width="6" height="3" fill="#e0c08a"/>
            <rect x="108" y="62" width="6" height="3" fill="#e0c08a"/>
            <rect x="108" y="70" width="6" height="3" fill="#e0c08a"/>
            <rect x="108" y="78" width="6" height="3" fill="#e0c08a"/>
            <rect x="108" y="86" width="6" height="3" fill="#e0c08a"/>
            <rect x="108" y="94" width="6" height="3" fill="#e0c08a"/>
            <path d="M103 71L54 82" stroke="#788d81" stroke-width="6"/>
            <path d="M57 77L60 84" stroke="#d2c894" stroke-width="1.3"/>
            <path d="M63 75.7L66 82.7" stroke="#d2c894" stroke-width="1.3"/>
            <path d="M69 74.4L72 81.4" stroke="#d2c894" stroke-width="1.3"/>
            <path d="M75 73.1L78 80.1" stroke="#d2c894" stroke-width="1.3"/>
            <path d="M81 71.8L84 78.8" stroke="#d2c894" stroke-width="1.3"/>
            <path d="M87 70.5L90 77.5" stroke="#d2c894" stroke-width="1.3"/>
            <path d="M93 69.2L96 76.2" stroke="#d2c894" stroke-width="1.3"/>
          </g>
          <path d="M44 55H60M44 89H60" class="jacks" stroke="#edca81" stroke-width="3"/>
          <g class="newRing" opacity="0">
            <rect x="44" y="44" width="12" height="7" fill="#c2c5ad"/>
            <rect x="44" y="95" width="12" height="7" fill="#c2c5ad"/>
            <path d="M56 51L56 95" stroke="#b4bca4" stroke-width="2"/>
          </g>
          <circle cx="0" cy="0" r="1.6" class="spoil0" fill="#c9ad75" opacity="0"/>
          <circle cx="0" cy="0" r="1.6" class="spoil1" fill="#c9ad75" opacity="0"/>
          <circle cx="0" cy="0" r="1.6" class="spoil2" fill="#c9ad75" opacity="0"/>
          <circle cx="0" cy="0" r="1.6" class="spoil3" fill="#c9ad75" opacity="0"/>
          <circle cx="0" cy="0" r="1.6" class="spoil4" fill="#c9ad75" opacity="0"/>
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

if (!customElements.get("concept-tunnel-boring-advance")) {
  customElements.define("concept-tunnel-boring-advance", ConceptTunnelBoringAdvance);
}
