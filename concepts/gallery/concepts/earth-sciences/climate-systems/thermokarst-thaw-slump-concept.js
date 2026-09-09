// Thermokarst Thaw Slump. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptThermokarstThawSlump extends HTMLElement {
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
        .ground {
          animation:ground 16s linear infinite;
        }
        .turfEdge {
          animation:turfEdge 16s linear infinite;
        }
        .lens0 {
          animation:lens0 16s linear infinite;
        }
        .turf0 {
          animation:turf0 16s linear infinite;
        }
        .meltwater0 {
          animation:meltwater0 16s linear infinite;
        }
        .lens1 {
          animation:lens1 16s linear infinite;
        }
        .turf1 {
          animation:turf1 16s linear infinite;
        }
        .meltwater1 {
          animation:meltwater1 16s linear infinite;
        }
        .lens2 {
          animation:lens2 16s linear infinite;
        }
        .turf2 {
          animation:turf2 16s linear infinite;
        }
        .meltwater2 {
          animation:meltwater2 16s linear infinite;
        }
        .thawEpisode {
          animation:thawEpisode 16s linear infinite;
        }
        @keyframes ground {
          0% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          2.083% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          4.167% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          6.25% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          8.333% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          10.417% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          12.5% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          14.583% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          16.667% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          18.75% {
            d:path('M10 49H65V95.25L130 118V127H10Z');
          }
          20.833% {
            d:path('M10 49H62.864V94.503L130 118V127H10Z');
          }
          22.917% {
            d:path('M10 49H57.25V92.537L130 118V127H10Z');
          }
          25% {
            d:path('M10 49H51.5V90.525L130 118V127H10Z');
          }
          27.083% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          29.167% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          31.25% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          33.333% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          35.417% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          37.5% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          39.583% {
            d:path('M10 49H49V89.65L130 118V127H10Z');
          }
          41.667% {
            d:path('M10 49H48.685V89.54L130 118V127H10Z');
          }
          43.75% {
            d:path('M10 49H44.628V88.12L130 118V127H10Z');
          }
          45.833% {
            d:path('M10 49H38.536V85.988L130 118V127H10Z');
          }
          47.917% {
            d:path('M10 49H33.801V84.33L130 118V127H10Z');
          }
          50% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          52.083% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          54.167% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          56.25% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          58.333% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          60.417% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          62.5% {
            d:path('M10 49H33V84.05L130 118V127H10Z');
          }
          64.583% {
            d:path('M10 49H31.368V83.479L130 118V127H10Z');
          }
          66.667% {
            d:path('M10 49H25.998V81.599L130 118V127H10Z');
          }
          68.75% {
            d:path('M10 49H20.085V79.53L130 118V127H10Z');
          }
          70.833% {
            d:path('M10 49H17.021V78.457L130 118V127H10Z');
          }
          72.917% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          75% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          77.083% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          79.167% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          81.25% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          83.333% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          85.417% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          87.5% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          89.583% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          91.667% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          93.75% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          95.833% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          97.917% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          100% {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
        }
        @keyframes turfEdge {
          0% {
            d:path('M10 49H65');
          }
          2.083% {
            d:path('M10 49H65');
          }
          4.167% {
            d:path('M10 49H65');
          }
          6.25% {
            d:path('M10 49H65');
          }
          8.333% {
            d:path('M10 49H65');
          }
          10.417% {
            d:path('M10 49H65');
          }
          12.5% {
            d:path('M10 49H65');
          }
          14.583% {
            d:path('M10 49H65');
          }
          16.667% {
            d:path('M10 49H65');
          }
          18.75% {
            d:path('M10 49H65');
          }
          20.833% {
            d:path('M10 49H62.864');
          }
          22.917% {
            d:path('M10 49H57.25');
          }
          25% {
            d:path('M10 49H51.5');
          }
          27.083% {
            d:path('M10 49H49');
          }
          29.167% {
            d:path('M10 49H49');
          }
          31.25% {
            d:path('M10 49H49');
          }
          33.333% {
            d:path('M10 49H49');
          }
          35.417% {
            d:path('M10 49H49');
          }
          37.5% {
            d:path('M10 49H49');
          }
          39.583% {
            d:path('M10 49H49');
          }
          41.667% {
            d:path('M10 49H48.685');
          }
          43.75% {
            d:path('M10 49H44.628');
          }
          45.833% {
            d:path('M10 49H38.536');
          }
          47.917% {
            d:path('M10 49H33.801');
          }
          50% {
            d:path('M10 49H33');
          }
          52.083% {
            d:path('M10 49H33');
          }
          54.167% {
            d:path('M10 49H33');
          }
          56.25% {
            d:path('M10 49H33');
          }
          58.333% {
            d:path('M10 49H33');
          }
          60.417% {
            d:path('M10 49H33');
          }
          62.5% {
            d:path('M10 49H33');
          }
          64.583% {
            d:path('M10 49H31.368');
          }
          66.667% {
            d:path('M10 49H25.998');
          }
          68.75% {
            d:path('M10 49H20.085');
          }
          70.833% {
            d:path('M10 49H17.021');
          }
          72.917% {
            d:path('M10 49H17');
          }
          75% {
            d:path('M10 49H17');
          }
          77.083% {
            d:path('M10 49H17');
          }
          79.167% {
            d:path('M10 49H17');
          }
          81.25% {
            d:path('M10 49H17');
          }
          83.333% {
            d:path('M10 49H17');
          }
          85.417% {
            d:path('M10 49H17');
          }
          87.5% {
            d:path('M10 49H17');
          }
          89.583% {
            d:path('M10 49H17');
          }
          91.667% {
            d:path('M10 49H17');
          }
          93.75% {
            d:path('M10 49H17');
          }
          95.833% {
            d:path('M10 49H17');
          }
          97.917% {
            d:path('M10 49H17');
          }
          100% {
            d:path('M10 49H17');
          }
        }
        @keyframes lens0 {
          0% {
            d:path('M50 64Q56 53 63 64Q56 77 50 64Z');
          }
          2.083% {
            d:path('M50 64Q56 53 63 64Q56 77 50 64Z');
          }
          4.167% {
            d:path('M50 64Q56 53 63 64Q56 77 50 64Z');
          }
          6.25% {
            d:path('M50 64Q56 53 63 64Q56 77 50 64Z');
          }
          8.333% {
            d:path('M50 64Q56 53.021 63 64Q56 76.975 50 64Z');
          }
          10.417% {
            d:path('M50 64Q56 53.999 63 64Q56 75.819 50 64Z');
          }
          12.5% {
            d:path('M50 64Q56 56.042 63 64Q56 73.405 50 64Z');
          }
          14.583% {
            d:path('M50 64Q56 58.606 63 64Q56 70.375 50 64Z');
          }
          16.667% {
            d:path('M50 64Q56 61.148 63 64Q56 67.37 50 64Z');
          }
          18.75% {
            d:path('M50 64Q56 63.126 63 64Q56 65.033 50 64Z');
          }
          20.833% {
            d:path('M50 64Q56 63.995 63 64Q56 64.006 50 64Z');
          }
          22.917% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          25% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          27.083% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          29.167% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          31.25% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          33.333% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          35.417% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          37.5% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          39.583% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          41.667% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          43.75% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          45.833% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          47.917% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          50% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          52.083% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          54.167% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          56.25% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          58.333% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          60.417% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          62.5% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          64.583% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          66.667% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          68.75% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          70.833% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          72.917% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          75% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          77.083% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          79.167% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          81.25% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          83.333% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          85.417% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          87.5% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          89.583% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          91.667% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          93.75% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          95.833% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          97.917% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          100% {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
        }
        @keyframes turf0 {
          0% {
            transform:translate(56px,49px) rotate(0deg);
          }
          2.083% {
            transform:translate(56px,49px) rotate(0deg);
          }
          4.167% {
            transform:translate(56px,49px) rotate(0deg);
          }
          6.25% {
            transform:translate(56px,49px) rotate(0deg);
          }
          8.333% {
            transform:translate(56px,49px) rotate(0deg);
          }
          10.417% {
            transform:translate(56px,49px) rotate(0deg);
          }
          12.5% {
            transform:translate(56px,49px) rotate(0deg);
          }
          14.583% {
            transform:translate(56px,49px) rotate(0deg);
          }
          16.667% {
            transform:translate(56px,49px) rotate(0deg);
          }
          18.75% {
            transform:translate(56px,49px) rotate(0deg);
          }
          20.833% {
            transform:translate(56px,49px) rotate(0deg);
          }
          22.917% {
            transform:translate(56px,49px) rotate(0deg);
          }
          25% {
            transform:translate(56px,49px) rotate(0deg);
          }
          27.083% {
            transform:translate(56.003px,49.003px) rotate(0.001deg);
          }
          29.167% {
            transform:translate(58.091px,50.772px) rotate(0.867deg);
          }
          31.25% {
            transform:translate(63.408px,55.277px) rotate(3.072deg);
          }
          33.333% {
            transform:translate(71.037px,61.742px) rotate(6.236deg);
          }
          35.417% {
            transform:translate(80.061px,69.388px) rotate(9.979deg);
          }
          37.5% {
            transform:translate(89.562px,77.439px) rotate(13.919deg);
          }
          39.583% {
            transform:translate(98.623px,85.116px) rotate(17.676deg);
          }
          41.667% {
            transform:translate(106.325px,91.643px) rotate(20.871deg);
          }
          43.75% {
            transform:translate(111.753px,96.242px) rotate(23.122deg);
          }
          45.833% {
            transform:translate(113.987px,98.135px) rotate(24.048deg);
          }
          47.917% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          50% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          52.083% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          54.167% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          56.25% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          58.333% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          60.417% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          62.5% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          64.583% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          66.667% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          68.75% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          70.833% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          72.917% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          75% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          77.083% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          79.167% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          81.25% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          83.333% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          85.417% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          87.5% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          89.583% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          91.667% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          93.75% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          95.833% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          97.917% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          100% {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
        }
        @keyframes meltwater0 {
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
            opacity:0.055;
          }
          27.083% {
            opacity:0.411;
          }
          29.167% {
            opacity:0.83;
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
            opacity:0.975;
          }
          45.833% {
            opacity:0.713;
          }
          47.917% {
            opacity:0.331;
          }
          50% {
            opacity:0.043;
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
        @keyframes lens1 {
          0% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          2.083% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          4.167% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          6.25% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          8.333% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          10.417% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          12.5% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          14.583% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          16.667% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          18.75% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          20.833% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          22.917% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          25% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          27.083% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          29.167% {
            d:path('M34 64Q40 53 47 64Q40 77 34 64Z');
          }
          31.25% {
            d:path('M34 64Q40 53.286 47 64Q40 76.663 34 64Z');
          }
          33.333% {
            d:path('M34 64Q40 54.799 47 64Q40 74.874 34 64Z');
          }
          35.417% {
            d:path('M34 64Q40 57.138 47 64Q40 72.11 34 64Z');
          }
          37.5% {
            d:path('M34 64Q40 59.759 47 64Q40 69.012 34 64Z');
          }
          39.583% {
            d:path('M34 64Q40 62.12 47 64Q40 66.222 34 64Z');
          }
          41.667% {
            d:path('M34 64Q40 63.677 47 64Q40 64.382 34 64Z');
          }
          43.75% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          45.833% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          47.917% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          50% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          52.083% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          54.167% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          56.25% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          58.333% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          60.417% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          62.5% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          64.583% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          66.667% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          68.75% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          70.833% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          72.917% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          75% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          77.083% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          79.167% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          81.25% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          83.333% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          85.417% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          87.5% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          89.583% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          91.667% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          93.75% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          95.833% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          97.917% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          100% {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
        }
        @keyframes turf1 {
          0% {
            transform:translate(40px,49px) rotate(0deg);
          }
          2.083% {
            transform:translate(40px,49px) rotate(0deg);
          }
          4.167% {
            transform:translate(40px,49px) rotate(0deg);
          }
          6.25% {
            transform:translate(40px,49px) rotate(0deg);
          }
          8.333% {
            transform:translate(40px,49px) rotate(0deg);
          }
          10.417% {
            transform:translate(40px,49px) rotate(0deg);
          }
          12.5% {
            transform:translate(40px,49px) rotate(0deg);
          }
          14.583% {
            transform:translate(40px,49px) rotate(0deg);
          }
          16.667% {
            transform:translate(40px,49px) rotate(0deg);
          }
          18.75% {
            transform:translate(40px,49px) rotate(0deg);
          }
          20.833% {
            transform:translate(40px,49px) rotate(0deg);
          }
          22.917% {
            transform:translate(40px,49px) rotate(0deg);
          }
          25% {
            transform:translate(40px,49px) rotate(0deg);
          }
          27.083% {
            transform:translate(40px,49px) rotate(0deg);
          }
          29.167% {
            transform:translate(40px,49px) rotate(0deg);
          }
          31.25% {
            transform:translate(40px,49px) rotate(0deg);
          }
          33.333% {
            transform:translate(40px,49px) rotate(0deg);
          }
          35.417% {
            transform:translate(40px,49px) rotate(0deg);
          }
          37.5% {
            transform:translate(40px,49px) rotate(0deg);
          }
          39.583% {
            transform:translate(40px,49px) rotate(0deg);
          }
          41.667% {
            transform:translate(40px,49px) rotate(0deg);
          }
          43.75% {
            transform:translate(40px,49px) rotate(0deg);
          }
          45.833% {
            transform:translate(40px,49px) rotate(0deg);
          }
          47.917% {
            transform:translate(40px,49px) rotate(0deg);
          }
          50% {
            transform:translate(40.401px,49.327px) rotate(0.193deg);
          }
          52.083% {
            transform:translate(43.523px,51.871px) rotate(1.695deg);
          }
          54.167% {
            transform:translate(49.081px,56.4px) rotate(4.369deg);
          }
          56.25% {
            transform:translate(56.284px,62.271px) rotate(7.834deg);
          }
          58.333% {
            transform:translate(64.342px,68.837px) rotate(11.71deg);
          }
          60.417% {
            transform:translate(72.463px,75.455px) rotate(15.617deg);
          }
          62.5% {
            transform:translate(79.856px,81.48px) rotate(19.174deg);
          }
          64.583% {
            transform:translate(85.731px,86.267px) rotate(22deg);
          }
          66.667% {
            transform:translate(89.296px,89.173px) rotate(23.715deg);
          }
          68.75% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          70.833% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          72.917% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          75% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          77.083% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          79.167% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          81.25% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          83.333% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          85.417% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          87.5% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          89.583% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          91.667% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          93.75% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          95.833% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          97.917% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          100% {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
        }
        @keyframes meltwater1 {
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
            opacity:0.184;
          }
          50% {
            opacity:0.606;
          }
          52.083% {
            opacity:0.953;
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
            opacity:0.888;
          }
          68.75% {
            opacity:0.547;
          }
          70.833% {
            opacity:0.18;
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
        @keyframes lens2 {
          0% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          2.083% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          4.167% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          6.25% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          8.333% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          10.417% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          12.5% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          14.583% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          16.667% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          18.75% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          20.833% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          22.917% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          25% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          27.083% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          29.167% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          31.25% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          33.333% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          35.417% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          37.5% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          39.583% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          41.667% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          43.75% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          45.833% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          47.917% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          50% {
            d:path('M18 64Q24 53 31 64Q24 77 18 64Z');
          }
          52.083% {
            d:path('M18 64Q24 53.001 31 64Q24 76.998 18 64Z');
          }
          54.167% {
            d:path('M18 64Q24 53.815 31 64Q24 76.037 18 64Z');
          }
          56.25% {
            d:path('M18 64Q24 55.758 31 64Q24 73.74 18 64Z');
          }
          58.333% {
            d:path('M18 64Q24 58.289 31 64Q24 70.75 18 64Z');
          }
          60.417% {
            d:path('M18 64Q24 60.862 31 64Q24 67.708 18 64Z');
          }
          62.5% {
            d:path('M18 64Q24 62.936 31 64Q24 65.257 18 64Z');
          }
          64.583% {
            d:path('M18 64Q24 63.967 31 64Q24 64.039 18 64Z');
          }
          66.667% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          68.75% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          70.833% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          72.917% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          75% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          77.083% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          79.167% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          81.25% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          83.333% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          85.417% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          87.5% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          89.583% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          91.667% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          93.75% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          95.833% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          97.917% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          100% {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
        }
        @keyframes turf2 {
          0% {
            transform:translate(24px,49px) rotate(0deg);
          }
          2.083% {
            transform:translate(24px,49px) rotate(0deg);
          }
          4.167% {
            transform:translate(24px,49px) rotate(0deg);
          }
          6.25% {
            transform:translate(24px,49px) rotate(0deg);
          }
          8.333% {
            transform:translate(24px,49px) rotate(0deg);
          }
          10.417% {
            transform:translate(24px,49px) rotate(0deg);
          }
          12.5% {
            transform:translate(24px,49px) rotate(0deg);
          }
          14.583% {
            transform:translate(24px,49px) rotate(0deg);
          }
          16.667% {
            transform:translate(24px,49px) rotate(0deg);
          }
          18.75% {
            transform:translate(24px,49px) rotate(0deg);
          }
          20.833% {
            transform:translate(24px,49px) rotate(0deg);
          }
          22.917% {
            transform:translate(24px,49px) rotate(0deg);
          }
          25% {
            transform:translate(24px,49px) rotate(0deg);
          }
          27.083% {
            transform:translate(24px,49px) rotate(0deg);
          }
          29.167% {
            transform:translate(24px,49px) rotate(0deg);
          }
          31.25% {
            transform:translate(24px,49px) rotate(0deg);
          }
          33.333% {
            transform:translate(24px,49px) rotate(0deg);
          }
          35.417% {
            transform:translate(24px,49px) rotate(0deg);
          }
          37.5% {
            transform:translate(24px,49px) rotate(0deg);
          }
          39.583% {
            transform:translate(24px,49px) rotate(0deg);
          }
          41.667% {
            transform:translate(24px,49px) rotate(0deg);
          }
          43.75% {
            transform:translate(24px,49px) rotate(0deg);
          }
          45.833% {
            transform:translate(24px,49px) rotate(0deg);
          }
          47.917% {
            transform:translate(24px,49px) rotate(0deg);
          }
          50% {
            transform:translate(24px,49px) rotate(0deg);
          }
          52.083% {
            transform:translate(24px,49px) rotate(0deg);
          }
          54.167% {
            transform:translate(24px,49px) rotate(0deg);
          }
          56.25% {
            transform:translate(24px,49px) rotate(0deg);
          }
          58.333% {
            transform:translate(24px,49px) rotate(0deg);
          }
          60.417% {
            transform:translate(24px,49px) rotate(0deg);
          }
          62.5% {
            transform:translate(24px,49px) rotate(0deg);
          }
          64.583% {
            transform:translate(24px,49px) rotate(0deg);
          }
          66.667% {
            transform:translate(24px,49px) rotate(0deg);
          }
          68.75% {
            transform:translate(24px,49px) rotate(0deg);
          }
          70.833% {
            transform:translate(24px,49px) rotate(0deg);
          }
          72.917% {
            transform:translate(25.196px,49.921px) rotate(0.685deg);
          }
          75% {
            transform:translate(28.801px,52.697px) rotate(2.749deg);
          }
          77.083% {
            transform:translate(34.16px,56.824px) rotate(5.818deg);
          }
          79.167% {
            transform:translate(40.608px,61.791px) rotate(9.512deg);
          }
          81.25% {
            transform:translate(47.482px,67.084px) rotate(13.448deg);
          }
          83.333% {
            transform:translate(54.116px,72.194px) rotate(17.248deg);
          }
          85.417% {
            transform:translate(59.847px,76.608px) rotate(20.53deg);
          }
          87.5% {
            transform:translate(64.01px,79.814px) rotate(22.914deg);
          }
          89.583% {
            transform:translate(65.94px,81.3px) rotate(24.019deg);
          }
          91.667% {
            transform:translate(66px,81.346px) rotate(24.054deg);
          }
          93.75% {
            transform:translate(66px,81.346px) rotate(24.054deg);
          }
          95.833% {
            transform:translate(66px,81.346px) rotate(24.054deg);
          }
          97.917% {
            transform:translate(66px,81.346px) rotate(24.054deg);
          }
          100% {
            transform:translate(66px,81.346px) rotate(24.054deg);
          }
        }
        @keyframes meltwater2 {
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
            opacity:0.032;
          }
          70.833% {
            opacity:0.359;
          }
          72.917% {
            opacity:0.787;
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
            opacity:0.989;
          }
          89.583% {
            opacity:0.755;
          }
          91.667% {
            opacity:0.376;
          }
          93.75% {
            opacity:0.066;
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
        @keyframes thawEpisode {
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
          .ground {
            d:path('M10 49H17V78.45L130 118V127H10Z');
          }
          .turfEdge {
            d:path('M10 49H17');
          }
          .lens0 {
            d:path('M50 64Q56 64 63 64Q56 64 50 64Z');
          }
          .turf0 {
            transform:translate(114px,98.146px) rotate(24.054deg);
          }
          .meltwater0 {
            opacity:0;
          }
          .lens1 {
            d:path('M34 64Q40 64 47 64Q40 64 34 64Z');
          }
          .turf1 {
            transform:translate(90px,89.746px) rotate(24.054deg);
          }
          .meltwater1 {
            opacity:0;
          }
          .lens2 {
            d:path('M18 64Q24 64 31 64Q24 64 18 64Z');
          }
          .turf2 {
            transform:translate(28.801px,52.697px) rotate(2.749deg);
          }
          .meltwater2 {
            opacity:1;
          }
          .thawEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Thermokarst Thaw Slump">
        <g class="thawEpisode">
          <path d="M10 49H17V78.45L130 118V127H10Z" class="ground" fill="#493d2b"/>
          <path d="M17 78.45L130 118V127H17Z" fill="#725743"/>
          <circle cx="12" cy="121" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="54.495" cy="124.144" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="96.99" cy="122.289" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="23.485" cy="125.433" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="65.98" cy="123.577" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="108.475" cy="121.722" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="34.97" cy="124.866" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="77.465" cy="123.01" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="119.96" cy="121.155" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="46.455" cy="124.299" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="88.95" cy="122.443" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="15.446" cy="125.588" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="57.941" cy="123.732" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="100.436" cy="121.876" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="26.931" cy="125.021" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="69.426" cy="123.165" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="111.921" cy="121.309" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="38.416" cy="124.454" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="80.911" cy="122.598" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="123.406" cy="125.742" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="49.901" cy="123.887" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="92.396" cy="122.031" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="18.891" cy="125.175" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="61.386" cy="123.32" r="0.6" fill="#bba37a" opacity=".25"/>
          <path d="M10 49H17" class="turfEdge" stroke="#99b676" stroke-width="3"/>
          <path d="M50 64Q56 64 63 64Q56 64 50 64Z" class="lens0" fill="#b6dfe3"/>
          <g class="turf0" transform="translate(114 98.4)">
            <path d="M-7 0H7L6 13-6 14Z" fill="#816b4a" stroke="#40392a"/>
            <path d="M-7 0H7" stroke="#a2c37a" stroke-width="3"/>
          </g>
          <path d="M63 66L65 93.25L126 115" class="meltwater0" fill="none" stroke="#7bc7cf" stroke-width="1.3" stroke-dasharray="3 4" opacity="0"/>
          <path d="M34 64Q40 64 47 64Q40 64 34 64Z" class="lens1" fill="#b6dfe3"/>
          <g class="turf1" transform="translate(90 90)">
            <path d="M-7 0H7L6 13-6 14Z" fill="#816b4a" stroke="#40392a"/>
            <path d="M-7 0H7" stroke="#a2c37a" stroke-width="3"/>
          </g>
          <path d="M47 66L49 87.65L126 115" class="meltwater1" fill="none" stroke="#7bc7cf" stroke-width="1.3" stroke-dasharray="3 4" opacity="0"/>
          <path d="M18 64Q24 64 31 64Q24 64 18 64Z" class="lens2" fill="#b6dfe3"/>
          <g class="turf2" transform="translate(66 81.6)">
            <path d="M-7 0H7L6 13-6 14Z" fill="#816b4a" stroke="#40392a"/>
            <path d="M-7 0H7" stroke="#a2c37a" stroke-width="3"/>
          </g>
          <path d="M31 66L33 82.05L126 115" class="meltwater2" fill="none" stroke="#7bc7cf" stroke-width="1.3" stroke-dasharray="3 4" opacity="0"/>
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

if (!customElements.get("concept-thermokarst-thaw-slump")) {
  customElements.define("concept-thermokarst-thaw-slump", ConceptThermokarstThawSlump);
}
