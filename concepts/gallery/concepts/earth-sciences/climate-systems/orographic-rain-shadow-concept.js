// Orographic Rain Shadow. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptOrographicRainShadow extends HTMLElement {
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
        .parcel {
          animation:parcel 16s linear infinite;
        }
        .parcel {
          animation:parcel 16s linear infinite;
        }
        .condensate {
          animation:condensate 16s linear infinite;
        }
        .condensate {
          animation:condensate 16s linear infinite;
        }
        .rainDrop0 {
          animation:rainDrop0 16s linear infinite;
        }
        .rainDrop0 {
          animation:rainDrop0 16s linear infinite;
        }
        .rainDrop1 {
          animation:rainDrop1 16s linear infinite;
        }
        .rainDrop1 {
          animation:rainDrop1 16s linear infinite;
        }
        .rainDrop2 {
          animation:rainDrop2 16s linear infinite;
        }
        .rainDrop2 {
          animation:rainDrop2 16s linear infinite;
        }
        @keyframes parcel {
          0% {
            transform:translate(13px,74px);
            r:5px;
            stroke:#c6e4dc;
            opacity:0;
          }
          2.083% {
            transform:translate(15.375px,70.991px);
            r:5.327px;
            stroke:#c6e4dc;
            opacity:0.375;
          }
          4.167% {
            transform:translate(17.75px,67.996px);
            r:5.653px;
            stroke:#c6e4dc;
            opacity:0.75;
          }
          6.25% {
            transform:translate(20.125px,65.026px);
            r:5.975px;
            stroke:#c6e4dc;
            opacity:1;
          }
          8.333% {
            transform:translate(22.5px,62.094px);
            r:6.294px;
            stroke:#c6e4dc;
            opacity:1;
          }
          10.417% {
            transform:translate(24.875px,59.214px);
            r:6.607px;
            stroke:#c6e4dc;
            opacity:1;
          }
          12.5% {
            transform:translate(27.25px,56.397px);
            r:6.913px;
            stroke:#c6e4dc;
            opacity:1;
          }
          14.583% {
            transform:translate(29.625px,53.655px);
            r:7.211px;
            stroke:#c6e4dc;
            opacity:1;
          }
          16.667% {
            transform:translate(32px,51px);
            r:7.5px;
            stroke:#c6e4dc;
            opacity:1;
          }
          18.75% {
            transform:translate(34.375px,48.444px);
            r:7.778px;
            stroke:#c6e4dc;
            opacity:1;
          }
          20.833% {
            transform:translate(36.75px,45.997px);
            r:8.044px;
            stroke:#c6e4dc;
            opacity:1;
          }
          22.917% {
            transform:translate(39.125px,43.67px);
            r:8.297px;
            stroke:#c6e4dc;
            opacity:1;
          }
          25% {
            transform:translate(41.5px,41.473px);
            r:8.536px;
            stroke:#c6e4dc;
            opacity:1;
          }
          27.083% {
            transform:translate(43.875px,39.415px);
            r:8.759px;
            stroke:#c6e4dc;
            opacity:1;
          }
          29.167% {
            transform:translate(46.25px,37.506px);
            r:8.967px;
            stroke:#c6e4dc;
            opacity:1;
          }
          31.25% {
            transform:translate(48.625px,35.752px);
            r:9.157px;
            stroke:#c6e4dc;
            opacity:1;
          }
          33.333% {
            transform:translate(51px,34.163px);
            r:9.33px;
            stroke:#c6e4dc;
            opacity:1;
          }
          35.417% {
            transform:translate(53.375px,32.744px);
            r:9.484px;
            stroke:#c6e4dc;
            opacity:1;
          }
          37.5% {
            transform:translate(55.75px,31.502px);
            r:9.619px;
            stroke:#c6e4dc;
            opacity:1;
          }
          39.583% {
            transform:translate(58.125px,30.441px);
            r:9.735px;
            stroke:#c6e4dc;
            opacity:1;
          }
          41.667% {
            transform:translate(60.5px,29.567px);
            r:9.83px;
            stroke:#c6e4dc;
            opacity:1;
          }
          43.75% {
            transform:translate(62.875px,28.884px);
            r:9.904px;
            stroke:#c6e4dc;
            opacity:1;
          }
          45.833% {
            transform:translate(65.25px,28.394px);
            r:9.957px;
            stroke:#c6e4dc;
            opacity:1;
          }
          47.917% {
            transform:translate(67.625px,28.098px);
            r:9.989px;
            stroke:#c6e4dc;
            opacity:1;
          }
          50% {
            transform:translate(70px,28px);
            r:10px;
            stroke:#c6e4dc;
            opacity:1;
          }
          52.083% {
            transform:translate(72.375px,28.098px);
            r:9.989px;
            stroke:#c6e4dc;
            opacity:1;
          }
          54.167% {
            transform:translate(74.75px,28.394px);
            r:9.957px;
            stroke:#c6e4dc;
            opacity:1;
          }
          56.25% {
            transform:translate(77.125px,28.884px);
            r:9.904px;
            stroke:#c6e4dc;
            opacity:1;
          }
          58.333% {
            transform:translate(79.5px,29.567px);
            r:9.83px;
            stroke:#c6e4dc;
            opacity:1;
          }
          60.417% {
            transform:translate(81.875px,30.441px);
            r:9.735px;
            stroke:#dda87a;
            opacity:1;
          }
          62.5% {
            transform:translate(84.25px,31.502px);
            r:9.619px;
            stroke:#dda87a;
            opacity:1;
          }
          64.583% {
            transform:translate(86.625px,32.744px);
            r:9.484px;
            stroke:#dda87a;
            opacity:1;
          }
          66.667% {
            transform:translate(89px,34.163px);
            r:9.33px;
            stroke:#dda87a;
            opacity:1;
          }
          68.75% {
            transform:translate(91.375px,35.752px);
            r:9.157px;
            stroke:#dda87a;
            opacity:1;
          }
          70.833% {
            transform:translate(93.75px,37.506px);
            r:8.967px;
            stroke:#dda87a;
            opacity:1;
          }
          72.917% {
            transform:translate(96.125px,39.415px);
            r:8.759px;
            stroke:#dda87a;
            opacity:1;
          }
          75% {
            transform:translate(98.5px,41.473px);
            r:8.536px;
            stroke:#dda87a;
            opacity:1;
          }
          77.083% {
            transform:translate(100.875px,43.67px);
            r:8.297px;
            stroke:#dda87a;
            opacity:1;
          }
          79.167% {
            transform:translate(103.25px,45.997px);
            r:8.044px;
            stroke:#dda87a;
            opacity:1;
          }
          81.25% {
            transform:translate(105.625px,48.444px);
            r:7.778px;
            stroke:#dda87a;
            opacity:1;
          }
          83.333% {
            transform:translate(108px,51px);
            r:7.5px;
            stroke:#dda87a;
            opacity:1;
          }
          85.417% {
            transform:translate(110.375px,53.655px);
            r:7.211px;
            stroke:#dda87a;
            opacity:1;
          }
          87.5% {
            transform:translate(112.75px,56.397px);
            r:6.913px;
            stroke:#dda87a;
            opacity:1;
          }
          89.583% {
            transform:translate(115.125px,59.214px);
            r:6.607px;
            stroke:#dda87a;
            opacity:1;
          }
          91.667% {
            transform:translate(117.5px,62.094px);
            r:6.294px;
            stroke:#dda87a;
            opacity:1;
          }
          93.75% {
            transform:translate(119.875px,65.026px);
            r:5.975px;
            stroke:#dda87a;
            opacity:1;
          }
          95.833% {
            transform:translate(122.25px,67.996px);
            r:5.653px;
            stroke:#dda87a;
            opacity:0.75;
          }
          97.917% {
            transform:translate(124.625px,70.991px);
            r:5.327px;
            stroke:#dda87a;
            opacity:0.375;
          }
          100% {
            transform:translate(127px,74px);
            r:5px;
            stroke:#dda87a;
            opacity:0;
          }
        }
        @keyframes condensate {
          0% {
            transform:translate(13px,74px);
            opacity:0;
          }
          2.083% {
            transform:translate(15.375px,70.991px);
            opacity:0;
          }
          4.167% {
            transform:translate(17.75px,67.996px);
            opacity:0;
          }
          6.25% {
            transform:translate(20.125px,65.026px);
            opacity:0;
          }
          8.333% {
            transform:translate(22.5px,62.094px);
            opacity:0;
          }
          10.417% {
            transform:translate(24.875px,59.214px);
            opacity:0;
          }
          12.5% {
            transform:translate(27.25px,56.397px);
            opacity:0;
          }
          14.583% {
            transform:translate(29.625px,53.655px);
            opacity:0;
          }
          16.667% {
            transform:translate(32px,51px);
            opacity:0;
          }
          18.75% {
            transform:translate(34.375px,48.444px);
            opacity:0;
          }
          20.833% {
            transform:translate(36.75px,45.997px);
            opacity:0.02;
          }
          22.917% {
            transform:translate(39.125px,43.67px);
            opacity:0.206;
          }
          25% {
            transform:translate(41.5px,41.473px);
            opacity:0.5;
          }
          27.083% {
            transform:translate(43.875px,39.415px);
            opacity:0.794;
          }
          29.167% {
            transform:translate(46.25px,37.506px);
            opacity:0.98;
          }
          31.25% {
            transform:translate(48.625px,35.752px);
            opacity:1;
          }
          33.333% {
            transform:translate(51px,34.163px);
            opacity:1;
          }
          35.417% {
            transform:translate(53.375px,32.744px);
            opacity:1;
          }
          37.5% {
            transform:translate(55.75px,31.502px);
            opacity:1;
          }
          39.583% {
            transform:translate(58.125px,30.441px);
            opacity:1;
          }
          41.667% {
            transform:translate(60.5px,29.567px);
            opacity:1;
          }
          43.75% {
            transform:translate(62.875px,28.884px);
            opacity:1;
          }
          45.833% {
            transform:translate(65.25px,28.394px);
            opacity:1;
          }
          47.917% {
            transform:translate(67.625px,28.098px);
            opacity:1;
          }
          50% {
            transform:translate(70px,28px);
            opacity:1;
          }
          52.083% {
            transform:translate(72.375px,28.098px);
            opacity:1;
          }
          54.167% {
            transform:translate(74.75px,28.394px);
            opacity:1;
          }
          56.25% {
            transform:translate(77.125px,28.884px);
            opacity:0.97;
          }
          58.333% {
            transform:translate(79.5px,29.567px);
            opacity:0.811;
          }
          60.417% {
            transform:translate(81.875px,30.441px);
            opacity:0.573;
          }
          62.5% {
            transform:translate(84.25px,31.502px);
            opacity:0.316;
          }
          64.583% {
            transform:translate(86.625px,32.744px);
            opacity:0.105;
          }
          66.667% {
            transform:translate(89px,34.163px);
            opacity:0.002;
          }
          68.75% {
            transform:translate(91.375px,35.752px);
            opacity:0;
          }
          70.833% {
            transform:translate(93.75px,37.506px);
            opacity:0;
          }
          72.917% {
            transform:translate(96.125px,39.415px);
            opacity:0;
          }
          75% {
            transform:translate(98.5px,41.473px);
            opacity:0;
          }
          77.083% {
            transform:translate(100.875px,43.67px);
            opacity:0;
          }
          79.167% {
            transform:translate(103.25px,45.997px);
            opacity:0;
          }
          81.25% {
            transform:translate(105.625px,48.444px);
            opacity:0;
          }
          83.333% {
            transform:translate(108px,51px);
            opacity:0;
          }
          85.417% {
            transform:translate(110.375px,53.655px);
            opacity:0;
          }
          87.5% {
            transform:translate(112.75px,56.397px);
            opacity:0;
          }
          89.583% {
            transform:translate(115.125px,59.214px);
            opacity:0;
          }
          91.667% {
            transform:translate(117.5px,62.094px);
            opacity:0;
          }
          93.75% {
            transform:translate(119.875px,65.026px);
            opacity:0;
          }
          95.833% {
            transform:translate(122.25px,67.996px);
            opacity:0;
          }
          97.917% {
            transform:translate(124.625px,70.991px);
            opacity:0;
          }
          100% {
            transform:translate(127px,74px);
            opacity:0;
          }
        }
        @keyframes rainDrop0 {
          0% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          2.083% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          4.167% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          6.25% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          8.333% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          10.417% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          12.5% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          14.583% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          16.667% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          18.75% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          20.833% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          22.917% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          25% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          27.083% {
            transform:translate(44.92px,49.409px);
            opacity:0;
          }
          29.167% {
            transform:translate(45.406px,51.492px);
            opacity:1;
          }
          31.25% {
            transform:translate(46.274px,55.212px);
            opacity:1;
          }
          33.333% {
            transform:translate(47.142px,58.932px);
            opacity:1;
          }
          35.417% {
            transform:translate(48.01px,62.652px);
            opacity:1;
          }
          37.5% {
            transform:translate(48.878px,66.372px);
            opacity:1;
          }
          39.583% {
            transform:translate(49.746px,70.092px);
            opacity:1;
          }
          41.667% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          43.75% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          45.833% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          47.917% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          50% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          52.083% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          54.167% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          56.25% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          58.333% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          60.417% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          62.5% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          64.583% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          66.667% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          68.75% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          70.833% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          72.917% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          75% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          77.083% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          79.167% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          81.25% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          83.333% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          85.417% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          87.5% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          89.583% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          91.667% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          93.75% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          95.833% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          97.917% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          100% {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
        }
        @keyframes rainDrop1 {
          0% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          2.083% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          4.167% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          6.25% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          8.333% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          10.417% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          12.5% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          14.583% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          16.667% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          18.75% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          20.833% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          22.917% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          25% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          27.083% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          29.167% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          31.25% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          33.333% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          35.417% {
            transform:translate(54.04px,43.902px);
            opacity:0;
          }
          37.5% {
            transform:translate(54.665px,45.859px);
            opacity:1;
          }
          39.583% {
            transform:translate(55.533px,48.576px);
            opacity:1;
          }
          41.667% {
            transform:translate(56.401px,51.294px);
            opacity:1;
          }
          43.75% {
            transform:translate(57.269px,54.012px);
            opacity:1;
          }
          45.833% {
            transform:translate(58.137px,56.729px);
            opacity:1;
          }
          47.917% {
            transform:translate(59.005px,59.447px);
            opacity:1;
          }
          50% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          52.083% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          54.167% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          56.25% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          58.333% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          60.417% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          62.5% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          64.583% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          66.667% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          68.75% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          70.833% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          72.917% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          75% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          77.083% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          79.167% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          81.25% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          83.333% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          85.417% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          87.5% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          89.583% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          91.667% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          93.75% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          95.833% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          97.917% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          100% {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
        }
        @keyframes rainDrop2 {
          0% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          2.083% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          4.167% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          6.25% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          8.333% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          10.417% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          12.5% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          14.583% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          16.667% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          18.75% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          20.833% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          22.917% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          25% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          27.083% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          29.167% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          31.25% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          33.333% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          35.417% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          37.5% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          39.583% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          41.667% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          43.75% {
            transform:translate(63.16px,40.726px);
            opacity:0;
          }
          45.833% {
            transform:translate(63.924px,41.88px);
            opacity:1;
          }
          47.917% {
            transform:translate(64.792px,43.19px);
            opacity:1;
          }
          50% {
            transform:translate(65.66px,44.501px);
            opacity:1;
          }
          52.083% {
            transform:translate(66.528px,45.812px);
            opacity:1;
          }
          54.167% {
            transform:translate(67.396px,47.122px);
            opacity:1;
          }
          56.25% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          58.333% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          60.417% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          62.5% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          64.583% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          66.667% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          68.75% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          70.833% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          72.917% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          75% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          77.083% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          79.167% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          81.25% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          83.333% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          85.417% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          87.5% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          89.583% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          91.667% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          93.75% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          95.833% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          97.917% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
          100% {
            transform:translate(68.16px,48.276px);
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .parcel {
            transform:translate(98.5px,41.473px);
            r:8.536px;
            stroke:#dda87a;
            opacity:1;
          }
          .condensate {
            transform:translate(98.5px,41.473px);
            opacity:0;
          }
          .rainDrop0 {
            transform:translate(49.92px,70.836px);
            opacity:0;
          }
          .rainDrop1 {
            transform:translate(59.04px,59.556px);
            opacity:0;
          }
          .rainDrop2 {
            transform:translate(68.16px,48.276px);
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Orographic Rain Shadow">
        <path d="M8 123V98L32 93 70 46 104 102 132 112V123Z" fill="#5d5841" stroke="#aaa37d"/>
        <path d="M8 99L32 93 70 46 56 74 40 108 8 115Z" fill="#516b42"/>
        <path d="M59 60L70 46 80 65 72 61 66 64Z" fill="#d3d8c4"/>
        <path d="M15 104v-9m-3 5 3 -7 3 7" fill="none" stroke="#88a565"/>
        <path d="M23 102v-9m-3 5 3 -7 3 7" fill="none" stroke="#88a565"/>
        <path d="M31 100v-9m-3 5 3 -7 3 7" fill="none" stroke="#88a565"/>
        <path d="M39 98v-9m-3 5 3 -7 3 7" fill="none" stroke="#88a565"/>
        <path d="M13 74L15.375 70.991L17.75 67.996L20.125 65.026L22.5 62.094L24.875 59.214L27.25 56.397L29.625 53.655L32 51L34.375 48.444L36.75 45.997L39.125 43.67L41.5 41.473L43.875 39.415L46.25 37.506L48.625 35.752L51 34.163L53.375 32.744L55.75 31.502L58.125 30.441L60.5 29.567L62.875 28.884L65.25 28.394L67.625 28.098L70 28L72.375 28.098L74.75 28.394L77.125 28.884L79.5 29.567L81.875 30.441L84.25 31.502L86.625 32.744L89 34.163L91.375 35.752L93.75 37.506L96.125 39.415L98.5 41.473L100.875 43.67L103.25 45.997L105.625 48.444L108 51L110.375 53.655L112.75 56.397L115.125 59.214L117.5 62.094L119.875 65.026L122.25 67.996L124.625 70.991L127 74" fill="none" stroke="#718c82" stroke-dasharray="2 4"/>
        <circle cx="0" cy="0" r="10" class="parcel" fill="none" stroke="#c6e4dc" transform="translate(70 28)"/>
        <g transform="translate(20 80) rotate(-28)" fill="#9dd8d6">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <g transform="translate(119 84) rotate(25)" fill="#e5ba76">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <circle cx="0" cy="0" r="7" class="condensate" fill="#c6e4dc" transform="translate(70 28)"/>
        <circle cx="0" cy="0" r="1.5" class="rainDrop0" fill="#8ecfe4" opacity="0"/>
        <circle cx="0" cy="0" r="1.5" class="rainDrop1" fill="#8ecfe4" opacity="0"/>
        <circle cx="0" cy="0" r="1.5" class="rainDrop2" fill="#8ecfe4" opacity="0"/>
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

if (!customElements.get("concept-orographic-rain-shadow")) {
  customElements.define("concept-orographic-rain-shadow", ConceptOrographicRainShadow);
}
