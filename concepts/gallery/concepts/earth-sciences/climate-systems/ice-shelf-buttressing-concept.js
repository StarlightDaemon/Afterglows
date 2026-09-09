// Ice-Shelf Buttressing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptIceShelfButtressing extends HTMLElement {
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
        .breakaway {
          animation:breakaway 16s linear infinite;
        }
        .breakaway {
          animation:breakaway 16s linear infinite;
        }
        .crack {
          animation:crack 16s linear infinite;
        }
        .iceflow0 {
          animation:iceflow0 16s linear infinite;
        }
        .iceflow0 {
          animation:iceflow0 16s linear infinite;
        }
        .iceflow1 {
          animation:iceflow1 16s linear infinite;
        }
        .iceflow1 {
          animation:iceflow1 16s linear infinite;
        }
        .iceflow2 {
          animation:iceflow2 16s linear infinite;
        }
        .iceflow2 {
          animation:iceflow2 16s linear infinite;
        }
        .iceflow3 {
          animation:iceflow3 16s linear infinite;
        }
        .iceflow3 {
          animation:iceflow3 16s linear infinite;
        }
        .restraint {
          animation:restraint 16s linear infinite;
        }
        @media(prefers-reduced-motion:reduce) {
          .breakaway {
            transform:translate(12px,0)
          }
          .crack {
            opacity:0
          }
        }
        @keyframes breakaway {
          0% {
            transform:translate(0px,0px);
            opacity:1;
          }
          2.083% {
            transform:translate(0px,0px);
            opacity:1;
          }
          4.167% {
            transform:translate(0px,0px);
            opacity:1;
          }
          6.25% {
            transform:translate(0px,0px);
            opacity:1;
          }
          8.333% {
            transform:translate(0px,0px);
            opacity:1;
          }
          10.417% {
            transform:translate(0px,0px);
            opacity:1;
          }
          12.5% {
            transform:translate(0px,0px);
            opacity:1;
          }
          14.583% {
            transform:translate(0px,0px);
            opacity:1;
          }
          16.667% {
            transform:translate(0px,0px);
            opacity:1;
          }
          18.75% {
            transform:translate(0px,0px);
            opacity:1;
          }
          20.833% {
            transform:translate(0px,0px);
            opacity:1;
          }
          22.917% {
            transform:translate(0px,0px);
            opacity:1;
          }
          25% {
            transform:translate(0px,0px);
            opacity:1;
          }
          27.083% {
            transform:translate(0px,0px);
            opacity:1;
          }
          29.167% {
            transform:translate(0px,0px);
            opacity:1;
          }
          31.25% {
            transform:translate(0px,0px);
            opacity:1;
          }
          33.333% {
            transform:translate(0px,0px);
            opacity:1;
          }
          35.417% {
            transform:translate(0.019px,0px);
            opacity:1;
          }
          37.5% {
            transform:translate(0.669px,0px);
            opacity:1;
          }
          39.583% {
            transform:translate(2.138px,0px);
            opacity:1;
          }
          41.667% {
            transform:translate(4.291px,0px);
            opacity:1;
          }
          43.75% {
            transform:translate(6.99px,0px);
            opacity:1;
          }
          45.833% {
            transform:translate(10.099px,0px);
            opacity:1;
          }
          47.917% {
            transform:translate(13.481px,0px);
            opacity:1;
          }
          50% {
            transform:translate(17px,0px);
            opacity:1;
          }
          52.083% {
            transform:translate(20.519px,0px);
            opacity:1;
          }
          54.167% {
            transform:translate(23.901px,0px);
            opacity:1;
          }
          56.25% {
            transform:translate(27.01px,0px);
            opacity:1;
          }
          58.333% {
            transform:translate(29.709px,0px);
            opacity:1;
          }
          60.417% {
            transform:translate(31.862px,0px);
            opacity:1;
          }
          62.5% {
            transform:translate(33.331px,0px);
            opacity:1;
          }
          64.583% {
            transform:translate(33.981px,0px);
            opacity:1;
          }
          66.667% {
            transform:translate(34px,0px);
            opacity:0.98;
          }
          68.75% {
            transform:translate(34px,0px);
            opacity:0.908;
          }
          70.833% {
            transform:translate(34px,0px);
            opacity:0.794;
          }
          72.917% {
            transform:translate(34px,0px);
            opacity:0.654;
          }
          75% {
            transform:translate(34px,0px);
            opacity:0.5;
          }
          77.083% {
            transform:translate(34px,0px);
            opacity:0.346;
          }
          79.167% {
            transform:translate(34px,0px);
            opacity:0.206;
          }
          81.25% {
            transform:translate(34px,0px);
            opacity:0.092;
          }
          83.333% {
            transform:translate(34px,0px);
            opacity:0.02;
          }
          85.417% {
            transform:translate(34px,0px);
            opacity:0;
          }
          87.5% {
            transform:translate(34px,0px);
            opacity:0;
          }
          89.583% {
            transform:translate(34px,0px);
            opacity:0;
          }
          91.667% {
            transform:translate(34px,0px);
            opacity:0;
          }
          93.75% {
            transform:translate(34px,0px);
            opacity:0;
          }
          95.833% {
            transform:translate(34px,0px);
            opacity:0;
          }
          97.917% {
            transform:translate(34px,0px);
            opacity:0;
          }
          100% {
            transform:translate(34px,0px);
            opacity:0;
          }
        }
        @keyframes crack {
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
            opacity:0.009;
          }
          22.917% {
            opacity:0.099;
          }
          25% {
            opacity:0.259;
          }
          27.083% {
            opacity:0.458;
          }
          29.167% {
            opacity:0.664;
          }
          31.25% {
            opacity:0.844;
          }
          33.333% {
            opacity:0.966;
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
            opacity:0.926;
          }
          43.75% {
            opacity:0.684;
          }
          45.833% {
            opacity:0.376;
          }
          47.917% {
            opacity:0.112;
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
        @keyframes iceflow0 {
          0% {
            transform:translate(14px,62px);
            opacity:0;
          }
          2.083% {
            transform:translate(14.729px,62px);
            opacity:0.182;
          }
          4.167% {
            transform:translate(15.458px,62px);
            opacity:0.365;
          }
          6.25% {
            transform:translate(16.188px,62px);
            opacity:0.547;
          }
          8.333% {
            transform:translate(16.917px,62px);
            opacity:0.729;
          }
          10.417% {
            transform:translate(17.646px,62px);
            opacity:0.911;
          }
          12.5% {
            transform:translate(18.375px,62px);
            opacity:1;
          }
          14.583% {
            transform:translate(19.104px,62px);
            opacity:1;
          }
          16.667% {
            transform:translate(19.833px,62px);
            opacity:1;
          }
          18.75% {
            transform:translate(20.563px,62px);
            opacity:1;
          }
          20.833% {
            transform:translate(21.292px,62px);
            opacity:1;
          }
          22.917% {
            transform:translate(22.021px,62px);
            opacity:1;
          }
          25% {
            transform:translate(22.75px,62px);
            opacity:1;
          }
          27.083% {
            transform:translate(23.479px,62px);
            opacity:1;
          }
          29.167% {
            transform:translate(24.208px,62px);
            opacity:1;
          }
          31.25% {
            transform:translate(24.938px,62px);
            opacity:1;
          }
          33.333% {
            transform:translate(25.667px,62px);
            opacity:1;
          }
          35.417% {
            transform:translate(26.396px,62px);
            opacity:1;
          }
          37.5% {
            transform:translate(27.125px,62px);
            opacity:1;
          }
          39.583% {
            transform:translate(27.854px,62px);
            opacity:1;
          }
          41.667% {
            transform:translate(29.5px,62px);
            opacity:1;
          }
          43.75% {
            transform:translate(31.375px,62px);
            opacity:1;
          }
          45.833% {
            transform:translate(33.25px,62px);
            opacity:1;
          }
          47.917% {
            transform:translate(35.125px,62px);
            opacity:1;
          }
          50% {
            transform:translate(37px,62px);
            opacity:1;
          }
          52.083% {
            transform:translate(38.875px,62px);
            opacity:1;
          }
          54.167% {
            transform:translate(40.75px,62px);
            opacity:1;
          }
          56.25% {
            transform:translate(42.625px,62px);
            opacity:1;
          }
          58.333% {
            transform:translate(44.5px,62px);
            opacity:1;
          }
          60.417% {
            transform:translate(46.375px,62px);
            opacity:1;
          }
          62.5% {
            transform:translate(48.25px,62px);
            opacity:1;
          }
          64.583% {
            transform:translate(50.125px,62px);
            opacity:1;
          }
          66.667% {
            transform:translate(52px,62px);
            opacity:1;
          }
          68.75% {
            transform:translate(53.875px,62px);
            opacity:1;
          }
          70.833% {
            transform:translate(55.75px,62px);
            opacity:1;
          }
          72.917% {
            transform:translate(57.625px,62px);
            opacity:1;
          }
          75% {
            transform:translate(59.5px,62px);
            opacity:1;
          }
          77.083% {
            transform:translate(61.375px,62px);
            opacity:1;
          }
          79.167% {
            transform:translate(63.25px,62px);
            opacity:1;
          }
          81.25% {
            transform:translate(65.125px,62px);
            opacity:1;
          }
          83.333% {
            transform:translate(67px,62px);
            opacity:1;
          }
          85.417% {
            transform:translate(68.875px,62px);
            opacity:1;
          }
          87.5% {
            transform:translate(70.75px,62px);
            opacity:1;
          }
          89.583% {
            transform:translate(72.625px,62px);
            opacity:1;
          }
          91.667% {
            transform:translate(74.5px,62px);
            opacity:1;
          }
          93.75% {
            transform:translate(76.375px,62px);
            opacity:1;
          }
          95.833% {
            transform:translate(78.25px,62px);
            opacity:1;
          }
          97.917% {
            transform:translate(80.125px,62px);
            opacity:1;
          }
          100% {
            transform:translate(82px,62px);
            opacity:1;
          }
        }
        @keyframes iceflow1 {
          0% {
            transform:translate(34px,79px);
            opacity:1;
          }
          2.083% {
            transform:translate(34.729px,79px);
            opacity:1;
          }
          4.167% {
            transform:translate(35.458px,79px);
            opacity:1;
          }
          6.25% {
            transform:translate(36.188px,79px);
            opacity:1;
          }
          8.333% {
            transform:translate(36.917px,79px);
            opacity:1;
          }
          10.417% {
            transform:translate(37.646px,79px);
            opacity:1;
          }
          12.5% {
            transform:translate(38.375px,79px);
            opacity:1;
          }
          14.583% {
            transform:translate(39.104px,79px);
            opacity:1;
          }
          16.667% {
            transform:translate(39.833px,79px);
            opacity:1;
          }
          18.75% {
            transform:translate(40.563px,79px);
            opacity:1;
          }
          20.833% {
            transform:translate(41.292px,79px);
            opacity:1;
          }
          22.917% {
            transform:translate(42.021px,79px);
            opacity:1;
          }
          25% {
            transform:translate(42.75px,79px);
            opacity:1;
          }
          27.083% {
            transform:translate(43.479px,79px);
            opacity:1;
          }
          29.167% {
            transform:translate(44.208px,79px);
            opacity:1;
          }
          31.25% {
            transform:translate(44.938px,79px);
            opacity:1;
          }
          33.333% {
            transform:translate(45.667px,79px);
            opacity:1;
          }
          35.417% {
            transform:translate(46.396px,79px);
            opacity:1;
          }
          37.5% {
            transform:translate(47.125px,79px);
            opacity:1;
          }
          39.583% {
            transform:translate(47.854px,79px);
            opacity:1;
          }
          41.667% {
            transform:translate(49.5px,79px);
            opacity:1;
          }
          43.75% {
            transform:translate(51.375px,79px);
            opacity:1;
          }
          45.833% {
            transform:translate(53.25px,79px);
            opacity:1;
          }
          47.917% {
            transform:translate(55.125px,79px);
            opacity:1;
          }
          50% {
            transform:translate(57px,79px);
            opacity:1;
          }
          52.083% {
            transform:translate(58.875px,79px);
            opacity:1;
          }
          54.167% {
            transform:translate(60.75px,79px);
            opacity:1;
          }
          56.25% {
            transform:translate(62.625px,79px);
            opacity:1;
          }
          58.333% {
            transform:translate(64.5px,79px);
            opacity:1;
          }
          60.417% {
            transform:translate(66.375px,79px);
            opacity:1;
          }
          62.5% {
            transform:translate(68.25px,79px);
            opacity:1;
          }
          64.583% {
            transform:translate(70.125px,79px);
            opacity:1;
          }
          66.667% {
            transform:translate(72px,79px);
            opacity:1;
          }
          68.75% {
            transform:translate(73.875px,79px);
            opacity:1;
          }
          70.833% {
            transform:translate(75.75px,79px);
            opacity:1;
          }
          72.917% {
            transform:translate(77.625px,79px);
            opacity:1;
          }
          75% {
            transform:translate(79.5px,79px);
            opacity:1;
          }
          77.083% {
            transform:translate(81.375px,79px);
            opacity:1;
          }
          79.167% {
            transform:translate(83.25px,79px);
            opacity:1;
          }
          81.25% {
            transform:translate(85.125px,79px);
            opacity:1;
          }
          83.333% {
            transform:translate(87px,79px);
            opacity:1;
          }
          85.417% {
            transform:translate(88.875px,79px);
            opacity:1;
          }
          87.5% {
            transform:translate(90.75px,79px);
            opacity:0.813;
          }
          89.583% {
            transform:translate(92.625px,79px);
            opacity:0.344;
            opacity:0;
          }
          91.667% {
            transform:translate(14.5px,79px);
            opacity:0.125;
            opacity:0;
          }
          93.75% {
            transform:translate(16.375px,79px);
            opacity:0.594;
          }
          95.833% {
            transform:translate(18.25px,79px);
            opacity:1;
          }
          97.917% {
            transform:translate(20.125px,79px);
            opacity:1;
          }
          100% {
            transform:translate(22px,79px);
            opacity:1;
          }
        }
        @keyframes iceflow2 {
          0% {
            transform:translate(54px,62px);
            opacity:1;
          }
          2.083% {
            transform:translate(54.729px,62px);
            opacity:1;
          }
          4.167% {
            transform:translate(55.458px,62px);
            opacity:1;
          }
          6.25% {
            transform:translate(56.188px,62px);
            opacity:1;
          }
          8.333% {
            transform:translate(56.917px,62px);
            opacity:1;
          }
          10.417% {
            transform:translate(57.646px,62px);
            opacity:1;
          }
          12.5% {
            transform:translate(58.375px,62px);
            opacity:1;
          }
          14.583% {
            transform:translate(59.104px,62px);
            opacity:1;
          }
          16.667% {
            transform:translate(59.833px,62px);
            opacity:1;
          }
          18.75% {
            transform:translate(60.563px,62px);
            opacity:1;
          }
          20.833% {
            transform:translate(61.292px,62px);
            opacity:1;
          }
          22.917% {
            transform:translate(62.021px,62px);
            opacity:1;
          }
          25% {
            transform:translate(62.75px,62px);
            opacity:1;
          }
          27.083% {
            transform:translate(63.479px,62px);
            opacity:1;
          }
          29.167% {
            transform:translate(64.208px,62px);
            opacity:1;
          }
          31.25% {
            transform:translate(64.938px,62px);
            opacity:1;
          }
          33.333% {
            transform:translate(65.667px,62px);
            opacity:1;
          }
          35.417% {
            transform:translate(66.396px,62px);
            opacity:1;
          }
          37.5% {
            transform:translate(67.125px,62px);
            opacity:1;
          }
          39.583% {
            transform:translate(67.854px,62px);
            opacity:1;
          }
          41.667% {
            transform:translate(69.5px,62px);
            opacity:1;
          }
          43.75% {
            transform:translate(71.375px,62px);
            opacity:1;
          }
          45.833% {
            transform:translate(73.25px,62px);
            opacity:1;
          }
          47.917% {
            transform:translate(75.125px,62px);
            opacity:1;
          }
          50% {
            transform:translate(77px,62px);
            opacity:1;
          }
          52.083% {
            transform:translate(78.875px,62px);
            opacity:1;
          }
          54.167% {
            transform:translate(80.75px,62px);
            opacity:1;
          }
          56.25% {
            transform:translate(82.625px,62px);
            opacity:1;
          }
          58.333% {
            transform:translate(84.5px,62px);
            opacity:1;
          }
          60.417% {
            transform:translate(86.375px,62px);
            opacity:1;
          }
          62.5% {
            transform:translate(88.25px,62px);
            opacity:1;
          }
          64.583% {
            transform:translate(90.125px,62px);
            opacity:0.969;
          }
          66.667% {
            transform:translate(92px,62px);
            opacity:0.5;
          }
          68.75% {
            transform:translate(93.875px,62px);
            opacity:0.031;
            opacity:0;
          }
          70.833% {
            transform:translate(15.75px,62px);
            opacity:0.438;
            opacity:0;
          }
          72.917% {
            transform:translate(17.625px,62px);
            opacity:0.906;
          }
          75% {
            transform:translate(19.5px,62px);
            opacity:1;
          }
          77.083% {
            transform:translate(21.375px,62px);
            opacity:1;
          }
          79.167% {
            transform:translate(23.25px,62px);
            opacity:1;
          }
          81.25% {
            transform:translate(25.125px,62px);
            opacity:1;
          }
          83.333% {
            transform:translate(27px,62px);
            opacity:1;
          }
          85.417% {
            transform:translate(28.875px,62px);
            opacity:1;
          }
          87.5% {
            transform:translate(30.75px,62px);
            opacity:1;
          }
          89.583% {
            transform:translate(32.625px,62px);
            opacity:1;
          }
          91.667% {
            transform:translate(34.5px,62px);
            opacity:1;
          }
          93.75% {
            transform:translate(36.375px,62px);
            opacity:1;
          }
          95.833% {
            transform:translate(38.25px,62px);
            opacity:1;
          }
          97.917% {
            transform:translate(40.125px,62px);
            opacity:1;
          }
          100% {
            transform:translate(42px,62px);
            opacity:1;
          }
        }
        @keyframes iceflow3 {
          0% {
            transform:translate(74px,79px);
            opacity:1;
          }
          2.083% {
            transform:translate(74.729px,79px);
            opacity:1;
          }
          4.167% {
            transform:translate(75.458px,79px);
            opacity:1;
          }
          6.25% {
            transform:translate(76.188px,79px);
            opacity:1;
          }
          8.333% {
            transform:translate(76.917px,79px);
            opacity:1;
          }
          10.417% {
            transform:translate(77.646px,79px);
            opacity:1;
          }
          12.5% {
            transform:translate(78.375px,79px);
            opacity:1;
          }
          14.583% {
            transform:translate(79.104px,79px);
            opacity:1;
          }
          16.667% {
            transform:translate(79.833px,79px);
            opacity:1;
          }
          18.75% {
            transform:translate(80.563px,79px);
            opacity:1;
          }
          20.833% {
            transform:translate(81.292px,79px);
            opacity:1;
          }
          22.917% {
            transform:translate(82.021px,79px);
            opacity:1;
          }
          25% {
            transform:translate(82.75px,79px);
            opacity:1;
          }
          27.083% {
            transform:translate(83.479px,79px);
            opacity:1;
          }
          29.167% {
            transform:translate(84.208px,79px);
            opacity:1;
          }
          31.25% {
            transform:translate(84.938px,79px);
            opacity:1;
          }
          33.333% {
            transform:translate(85.667px,79px);
            opacity:1;
          }
          35.417% {
            transform:translate(86.396px,79px);
            opacity:1;
          }
          37.5% {
            transform:translate(87.125px,79px);
            opacity:1;
          }
          39.583% {
            transform:translate(87.854px,79px);
            opacity:1;
          }
          41.667% {
            transform:translate(89.5px,79px);
            opacity:1;
          }
          43.75% {
            transform:translate(91.375px,79px);
            opacity:0.656;
          }
          45.833% {
            transform:translate(93.25px,79px);
            opacity:0.188;
            opacity:0;
          }
          47.917% {
            transform:translate(15.125px,79px);
            opacity:0.281;
            opacity:0;
          }
          50% {
            transform:translate(17px,79px);
            opacity:0.75;
          }
          52.083% {
            transform:translate(18.875px,79px);
            opacity:1;
          }
          54.167% {
            transform:translate(20.75px,79px);
            opacity:1;
          }
          56.25% {
            transform:translate(22.625px,79px);
            opacity:1;
          }
          58.333% {
            transform:translate(24.5px,79px);
            opacity:1;
          }
          60.417% {
            transform:translate(26.375px,79px);
            opacity:1;
          }
          62.5% {
            transform:translate(28.25px,79px);
            opacity:1;
          }
          64.583% {
            transform:translate(30.125px,79px);
            opacity:1;
          }
          66.667% {
            transform:translate(32px,79px);
            opacity:1;
          }
          68.75% {
            transform:translate(33.875px,79px);
            opacity:1;
          }
          70.833% {
            transform:translate(35.75px,79px);
            opacity:1;
          }
          72.917% {
            transform:translate(37.625px,79px);
            opacity:1;
          }
          75% {
            transform:translate(39.5px,79px);
            opacity:1;
          }
          77.083% {
            transform:translate(41.375px,79px);
            opacity:1;
          }
          79.167% {
            transform:translate(43.25px,79px);
            opacity:1;
          }
          81.25% {
            transform:translate(45.125px,79px);
            opacity:1;
          }
          83.333% {
            transform:translate(47px,79px);
            opacity:1;
          }
          85.417% {
            transform:translate(48.875px,79px);
            opacity:1;
          }
          87.5% {
            transform:translate(50.75px,79px);
            opacity:1;
          }
          89.583% {
            transform:translate(52.625px,79px);
            opacity:1;
          }
          91.667% {
            transform:translate(54.5px,79px);
            opacity:1;
          }
          93.75% {
            transform:translate(56.375px,79px);
            opacity:1;
          }
          95.833% {
            transform:translate(58.25px,79px);
            opacity:1;
          }
          97.917% {
            transform:translate(60.125px,79px);
            opacity:1;
          }
          100% {
            transform:translate(62px,79px);
            opacity:1;
          }
        }
        @keyframes restraint {
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
            opacity:0.998;
          }
          37.5% {
            opacity:0.926;
          }
          39.583% {
            opacity:0.777;
          }
          41.667% {
            opacity:0.583;
          }
          43.75% {
            opacity:0.376;
          }
          45.833% {
            opacity:0.189;
          }
          47.917% {
            opacity:0.053;
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
        @media(prefers-reduced-motion:reduce) {
          .breakaway {
            transform:translate(34px,0px);
            opacity:0.5;
          }
          .crack {
            opacity:0;
          }
          .iceflow0 {
            transform:translate(59.5px,62px);
            opacity:1;
          }
          .iceflow1 {
            transform:translate(79.5px,79px);
            opacity:1;
          }
          .iceflow2 {
            transform:translate(19.5px,62px);
            opacity:1;
          }
          .iceflow3 {
            transform:translate(39.5px,79px);
            opacity:1;
          }
          .restraint {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ice-Shelf Buttressing">
        <rect x="9" y="20" width="122" height="106" fill="#123944"/>
        <path d="M9 35L43 41 59 49V93L40 103 9 109Z" fill="#6a7663"/>
        <path d="M12 53L58 53V89H12Z" fill="#a0c7c6"/>
        <path d="M58 48H94V94H58Z" fill="#cee5dd"/>
        <path d="M94 44H119V98H94Z" class="breakaway" fill="#bddde0" stroke="#d6f0e9"/>
        <path d="M57 39V82" stroke="#e0b981" stroke-width="1.7" stroke-dasharray="3 3"/>
        <path d="M71 29H123V44H85ZM71 112H123V98H85Z" fill="#596f63"/>
        <path d="M15 55L17 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M25 55L27 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M35 55L37 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M45 55L47 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M55 55L57 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M65 55L67 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M75 55L77 86" stroke="#82afb3" stroke-width=".7"/>
        <path d="M94 45L96 54 92 62 96 69 93 79 96 90 94 97" class="crack" fill="none" stroke="#315d70" stroke-width="1.3"/>
        <path d="M-2 -3L2 0 -2 3" class="iceflow0" fill="none" stroke="#325d71" stroke-width="2" transform="translate(37 62)"/>
        <path d="M-2 -3L2 0 -2 3" class="iceflow1" fill="none" stroke="#325d71" stroke-width="2" transform="translate(57 79)"/>
        <path d="M-2 -3L2 0 -2 3" class="iceflow2" fill="none" stroke="#325d71" stroke-width="2" transform="translate(77 62)"/>
        <path d="M-2 -3L2 0 -2 3" class="iceflow3" fill="none" stroke="#325d71" stroke-width="2" transform="translate(17 79)"/>
        <g class="restraint">
          <g transform="translate(107 47) rotate(90)" fill="#cbb680">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
          <g transform="translate(107 95) rotate(-90)" fill="#cbb680">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
          </g>
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

if (!customElements.get("concept-ice-shelf-buttressing")) {
  customElements.define("concept-ice-shelf-buttressing", ConceptIceShelfButtressing);
}
