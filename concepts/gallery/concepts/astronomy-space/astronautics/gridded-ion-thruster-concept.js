// Gridded Ion Thruster. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGriddedIonThruster extends HTMLElement {
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
        .ion0 {
          animation:ion0 16s linear infinite;
        }
        .ion0 {
          animation:ion0 16s linear infinite;
        }
        .charge0 {
          animation:charge0 16s linear infinite;
        }
        .ion1 {
          animation:ion1 16s linear infinite;
        }
        .ion1 {
          animation:ion1 16s linear infinite;
        }
        .charge1 {
          animation:charge1 16s linear infinite;
        }
        .ion2 {
          animation:ion2 16s linear infinite;
        }
        .ion2 {
          animation:ion2 16s linear infinite;
        }
        .charge2 {
          animation:charge2 16s linear infinite;
        }
        .ion3 {
          animation:ion3 16s linear infinite;
        }
        .ion3 {
          animation:ion3 16s linear infinite;
        }
        .charge3 {
          animation:charge3 16s linear infinite;
        }
        .ion4 {
          animation:ion4 16s linear infinite;
        }
        .ion4 {
          animation:ion4 16s linear infinite;
        }
        .charge4 {
          animation:charge4 16s linear infinite;
        }
        .ion5 {
          animation:ion5 16s linear infinite;
        }
        .ion5 {
          animation:ion5 16s linear infinite;
        }
        .charge5 {
          animation:charge5 16s linear infinite;
        }
        .electron0 {
          animation:electron0 16s linear infinite;
        }
        .electron0 {
          animation:electron0 16s linear infinite;
        }
        .electron1 {
          animation:electron1 16s linear infinite;
        }
        .electron1 {
          animation:electron1 16s linear infinite;
        }
        .electron2 {
          animation:electron2 16s linear infinite;
        }
        .electron2 {
          animation:electron2 16s linear infinite;
        }
        .electron3 {
          animation:electron3 16s linear infinite;
        }
        .electron3 {
          animation:electron3 16s linear infinite;
        }
        @keyframes ion0 {
          0% {
            transform:translate(10px,50px);
            opacity:0;
          }
          0.521% {
            transform:translate(11.111px,50px);
          }
          1.042% {
            transform:translate(12.222px,50px);
          }
          1.563% {
            transform:translate(13.333px,50px);
          }
          2.083% {
            transform:translate(14.444px,50px);
            opacity:0.889;
          }
          2.604% {
            transform:translate(15.556px,50px);
          }
          3.125% {
            transform:translate(16.667px,50px);
          }
          3.646% {
            transform:translate(17.778px,50px);
          }
          4.167% {
            transform:translate(18.889px,50px);
            opacity:1;
          }
          4.688% {
            transform:translate(20px,50px);
          }
          5.208% {
            transform:translate(21.111px,50px);
          }
          5.729% {
            transform:translate(22.222px,50px);
          }
          6.25% {
            transform:translate(23.333px,50px);
            opacity:1;
          }
          6.771% {
            transform:translate(24.444px,50px);
          }
          7.292% {
            transform:translate(25.556px,50px);
          }
          7.813% {
            transform:translate(26.667px,50px);
          }
          8.333% {
            transform:translate(27.778px,50px);
            opacity:1;
          }
          8.854% {
            transform:translate(28.889px,50px);
          }
          9.375% {
            transform:translate(30px,50px);
          }
          9.896% {
            transform:translate(31.111px,50px);
          }
          10.417% {
            transform:translate(32.222px,50px);
            opacity:1;
          }
          10.938% {
            transform:translate(33.333px,50px);
          }
          11.458% {
            transform:translate(34.444px,50px);
          }
          11.979% {
            transform:translate(35.556px,50px);
          }
          12.5% {
            transform:translate(36.667px,50px);
            opacity:1;
          }
          13.021% {
            transform:translate(37.778px,50px);
          }
          13.542% {
            transform:translate(38.889px,50px);
          }
          14.063% {
            transform:translate(40px,50px);
          }
          14.583% {
            transform:translate(41.111px,50px);
            opacity:1;
          }
          15.104% {
            transform:translate(42.222px,50px);
          }
          15.625% {
            transform:translate(43.333px,50px);
          }
          16.146% {
            transform:translate(44.444px,50px);
          }
          16.667% {
            transform:translate(45.556px,50px);
            opacity:1;
          }
          17.188% {
            transform:translate(46.667px,50px);
          }
          17.708% {
            transform:translate(47.778px,50px);
          }
          18.229% {
            transform:translate(48.889px,50px);
          }
          18.75% {
            transform:translate(50px,50px);
            opacity:1;
          }
          19.271% {
            transform:translate(51.111px,50px);
          }
          19.792% {
            transform:translate(52.222px,50px);
          }
          20.313% {
            transform:translate(53.333px,50px);
          }
          20.833% {
            transform:translate(54.444px,50px);
            opacity:1;
          }
          21.354% {
            transform:translate(55.556px,50px);
          }
          21.875% {
            transform:translate(56.667px,50px);
          }
          22.396% {
            transform:translate(57.778px,50px);
          }
          22.917% {
            transform:translate(58.889px,50px);
            opacity:1;
          }
          23.438% {
            transform:translate(60px,50px);
          }
          23.958% {
            transform:translate(61.111px,50px);
          }
          24.479% {
            transform:translate(62.222px,50px);
          }
          25% {
            transform:translate(63.333px,50px);
            opacity:1;
          }
          25.521% {
            transform:translate(64.444px,50px);
          }
          26.042% {
            transform:translate(65.556px,50px);
          }
          26.563% {
            transform:translate(66.667px,50px);
          }
          27.083% {
            transform:translate(67.778px,50px);
            opacity:1;
          }
          27.604% {
            transform:translate(68.889px,50px);
          }
          28.125% {
            transform:translate(70px,50px);
          }
          28.646% {
            transform:translate(71.111px,50px);
          }
          29.167% {
            transform:translate(72.222px,50px);
            opacity:1;
          }
          29.688% {
            transform:translate(73.333px,50px);
          }
          30.208% {
            transform:translate(74.447px,50px);
          }
          30.729% {
            transform:translate(75.589px,50px);
          }
          31.25% {
            transform:translate(76.765px,50px);
            opacity:1;
          }
          31.771% {
            transform:translate(77.975px,50px);
          }
          32.292% {
            transform:translate(79.219px,50px);
          }
          32.813% {
            transform:translate(80.498px,50px);
          }
          33.333% {
            transform:translate(81.81px,50px);
            opacity:1;
          }
          33.854% {
            transform:translate(83.157px,50px);
          }
          34.375% {
            transform:translate(84.537px,50px);
          }
          34.896% {
            transform:translate(85.952px,50px);
          }
          35.417% {
            transform:translate(87.401px,50px);
            opacity:1;
          }
          35.938% {
            transform:translate(88.884px,50px);
          }
          36.458% {
            transform:translate(90.402px,50px);
          }
          36.979% {
            transform:translate(91.953px,50px);
          }
          37.5% {
            transform:translate(93.538px,50px);
            opacity:1;
          }
          38.021% {
            transform:translate(95.141px,50px);
          }
          38.542% {
            transform:translate(96.744px,50px);
          }
          39.063% {
            transform:translate(98.346px,50px);
          }
          39.583% {
            transform:translate(99.949px,50px);
            opacity:1;
          }
          40.104% {
            transform:translate(101.551px,50px);
          }
          40.625% {
            transform:translate(103.154px,50px);
          }
          41.146% {
            transform:translate(104.756px,50px);
          }
          41.667% {
            transform:translate(106.359px,50px);
            opacity:1;
          }
          42.188% {
            transform:translate(107.962px,50px);
          }
          42.708% {
            transform:translate(109.564px,50px);
          }
          43.229% {
            transform:translate(111.167px,50px);
          }
          43.75% {
            transform:translate(112.769px,50px);
            opacity:1;
          }
          44.271% {
            transform:translate(114.372px,50px);
          }
          44.792% {
            transform:translate(115.974px,50px);
          }
          45.313% {
            transform:translate(117.577px,50px);
          }
          45.833% {
            transform:translate(119.179px,50px);
            opacity:1;
          }
          46.354% {
            transform:translate(120.782px,50px);
          }
          46.875% {
            transform:translate(122.385px,50px);
          }
          47.396% {
            transform:translate(123.987px,50px);
          }
          47.917% {
            transform:translate(125.59px,50px);
            opacity:1;
          }
          48.438% {
            transform:translate(127.192px,50px);
          }
          48.958% {
            transform:translate(128.795px,50px);
          }
          49.479% {
            transform:translate(130.397px,50px);
            opacity:0;
          }
          50% {
            transform:translate(10px,50px);
            opacity:0;
            opacity:0;
          }
          50.521% {
            transform:translate(11.111px,50px);
          }
          51.042% {
            transform:translate(12.222px,50px);
          }
          51.563% {
            transform:translate(13.333px,50px);
          }
          52.083% {
            transform:translate(14.444px,50px);
            opacity:0.889;
          }
          52.604% {
            transform:translate(15.556px,50px);
          }
          53.125% {
            transform:translate(16.667px,50px);
          }
          53.646% {
            transform:translate(17.778px,50px);
          }
          54.167% {
            transform:translate(18.889px,50px);
            opacity:1;
          }
          54.688% {
            transform:translate(20px,50px);
          }
          55.208% {
            transform:translate(21.111px,50px);
          }
          55.729% {
            transform:translate(22.222px,50px);
          }
          56.25% {
            transform:translate(23.333px,50px);
            opacity:1;
          }
          56.771% {
            transform:translate(24.444px,50px);
          }
          57.292% {
            transform:translate(25.556px,50px);
          }
          57.813% {
            transform:translate(26.667px,50px);
          }
          58.333% {
            transform:translate(27.778px,50px);
            opacity:1;
          }
          58.854% {
            transform:translate(28.889px,50px);
          }
          59.375% {
            transform:translate(30px,50px);
          }
          59.896% {
            transform:translate(31.111px,50px);
          }
          60.417% {
            transform:translate(32.222px,50px);
            opacity:1;
          }
          60.938% {
            transform:translate(33.333px,50px);
          }
          61.458% {
            transform:translate(34.444px,50px);
          }
          61.979% {
            transform:translate(35.556px,50px);
          }
          62.5% {
            transform:translate(36.667px,50px);
            opacity:1;
          }
          63.021% {
            transform:translate(37.778px,50px);
          }
          63.542% {
            transform:translate(38.889px,50px);
          }
          64.063% {
            transform:translate(40px,50px);
          }
          64.583% {
            transform:translate(41.111px,50px);
            opacity:1;
          }
          65.104% {
            transform:translate(42.222px,50px);
          }
          65.625% {
            transform:translate(43.333px,50px);
          }
          66.146% {
            transform:translate(44.444px,50px);
          }
          66.667% {
            transform:translate(45.556px,50px);
            opacity:1;
          }
          67.188% {
            transform:translate(46.667px,50px);
          }
          67.708% {
            transform:translate(47.778px,50px);
          }
          68.229% {
            transform:translate(48.889px,50px);
          }
          68.75% {
            transform:translate(50px,50px);
            opacity:1;
          }
          69.271% {
            transform:translate(51.111px,50px);
          }
          69.792% {
            transform:translate(52.222px,50px);
          }
          70.313% {
            transform:translate(53.333px,50px);
          }
          70.833% {
            transform:translate(54.444px,50px);
            opacity:1;
          }
          71.354% {
            transform:translate(55.556px,50px);
          }
          71.875% {
            transform:translate(56.667px,50px);
          }
          72.396% {
            transform:translate(57.778px,50px);
          }
          72.917% {
            transform:translate(58.889px,50px);
            opacity:1;
          }
          73.438% {
            transform:translate(60px,50px);
          }
          73.958% {
            transform:translate(61.111px,50px);
          }
          74.479% {
            transform:translate(62.222px,50px);
          }
          75% {
            transform:translate(63.333px,50px);
            opacity:1;
          }
          75.521% {
            transform:translate(64.444px,50px);
          }
          76.042% {
            transform:translate(65.556px,50px);
          }
          76.563% {
            transform:translate(66.667px,50px);
          }
          77.083% {
            transform:translate(67.778px,50px);
            opacity:1;
          }
          77.604% {
            transform:translate(68.889px,50px);
          }
          78.125% {
            transform:translate(70px,50px);
          }
          78.646% {
            transform:translate(71.111px,50px);
          }
          79.167% {
            transform:translate(72.222px,50px);
            opacity:1;
          }
          79.688% {
            transform:translate(73.333px,50px);
          }
          80.208% {
            transform:translate(74.447px,50px);
          }
          80.729% {
            transform:translate(75.589px,50px);
          }
          81.25% {
            transform:translate(76.765px,50px);
            opacity:1;
          }
          81.771% {
            transform:translate(77.975px,50px);
          }
          82.292% {
            transform:translate(79.219px,50px);
          }
          82.813% {
            transform:translate(80.498px,50px);
          }
          83.333% {
            transform:translate(81.81px,50px);
            opacity:1;
          }
          83.854% {
            transform:translate(83.157px,50px);
          }
          84.375% {
            transform:translate(84.537px,50px);
          }
          84.896% {
            transform:translate(85.952px,50px);
          }
          85.417% {
            transform:translate(87.401px,50px);
            opacity:1;
          }
          85.938% {
            transform:translate(88.884px,50px);
          }
          86.458% {
            transform:translate(90.402px,50px);
          }
          86.979% {
            transform:translate(91.953px,50px);
          }
          87.5% {
            transform:translate(93.538px,50px);
            opacity:1;
          }
          88.021% {
            transform:translate(95.141px,50px);
          }
          88.542% {
            transform:translate(96.744px,50px);
          }
          89.063% {
            transform:translate(98.346px,50px);
          }
          89.583% {
            transform:translate(99.949px,50px);
            opacity:1;
          }
          90.104% {
            transform:translate(101.551px,50px);
          }
          90.625% {
            transform:translate(103.154px,50px);
          }
          91.146% {
            transform:translate(104.756px,50px);
          }
          91.667% {
            transform:translate(106.359px,50px);
            opacity:1;
          }
          92.188% {
            transform:translate(107.962px,50px);
          }
          92.708% {
            transform:translate(109.564px,50px);
          }
          93.229% {
            transform:translate(111.167px,50px);
          }
          93.75% {
            transform:translate(112.769px,50px);
            opacity:1;
          }
          94.271% {
            transform:translate(114.372px,50px);
          }
          94.792% {
            transform:translate(115.974px,50px);
          }
          95.313% {
            transform:translate(117.577px,50px);
          }
          95.833% {
            transform:translate(119.179px,50px);
            opacity:1;
          }
          96.354% {
            transform:translate(120.782px,50px);
          }
          96.875% {
            transform:translate(122.385px,50px);
          }
          97.396% {
            transform:translate(123.987px,50px);
          }
          97.917% {
            transform:translate(125.59px,50px);
            opacity:1;
          }
          98.438% {
            transform:translate(127.192px,50px);
          }
          98.958% {
            transform:translate(128.795px,50px);
          }
          99.479% {
            transform:translate(130.397px,50px);
            opacity:0;
          }
          100% {
            transform:translate(10px,50px);
            opacity:0;
            opacity:0;
          }
        }
        @keyframes charge0 {
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
            opacity:0;
          }
        }
        @keyframes ion1 {
          0% {
            transform:translate(27.778px,70px);
            opacity:1;
          }
          0.521% {
            transform:translate(28.889px,70px);
          }
          1.042% {
            transform:translate(30px,70px);
          }
          1.563% {
            transform:translate(31.111px,70px);
          }
          2.083% {
            transform:translate(32.222px,70px);
            opacity:1;
          }
          2.604% {
            transform:translate(33.333px,70px);
          }
          3.125% {
            transform:translate(34.444px,70px);
          }
          3.646% {
            transform:translate(35.556px,70px);
          }
          4.167% {
            transform:translate(36.667px,70px);
            opacity:1;
          }
          4.688% {
            transform:translate(37.778px,70px);
          }
          5.208% {
            transform:translate(38.889px,70px);
          }
          5.729% {
            transform:translate(40px,70px);
          }
          6.25% {
            transform:translate(41.111px,70px);
            opacity:1;
          }
          6.771% {
            transform:translate(42.222px,70px);
          }
          7.292% {
            transform:translate(43.333px,70px);
          }
          7.813% {
            transform:translate(44.444px,70px);
          }
          8.333% {
            transform:translate(45.556px,70px);
            opacity:1;
          }
          8.854% {
            transform:translate(46.667px,70px);
          }
          9.375% {
            transform:translate(47.778px,70px);
          }
          9.896% {
            transform:translate(48.889px,70px);
          }
          10.417% {
            transform:translate(50px,70px);
            opacity:1;
          }
          10.938% {
            transform:translate(51.111px,70px);
          }
          11.458% {
            transform:translate(52.222px,70px);
          }
          11.979% {
            transform:translate(53.333px,70px);
          }
          12.5% {
            transform:translate(54.444px,70px);
            opacity:1;
          }
          13.021% {
            transform:translate(55.556px,70px);
          }
          13.542% {
            transform:translate(56.667px,70px);
          }
          14.063% {
            transform:translate(57.778px,70px);
          }
          14.583% {
            transform:translate(58.889px,70px);
            opacity:1;
          }
          15.104% {
            transform:translate(60px,70px);
          }
          15.625% {
            transform:translate(61.111px,70px);
          }
          16.146% {
            transform:translate(62.222px,70px);
          }
          16.667% {
            transform:translate(63.333px,70px);
            opacity:1;
          }
          17.188% {
            transform:translate(64.444px,70px);
          }
          17.708% {
            transform:translate(65.556px,70px);
          }
          18.229% {
            transform:translate(66.667px,70px);
          }
          18.75% {
            transform:translate(67.778px,70px);
            opacity:1;
          }
          19.271% {
            transform:translate(68.889px,70px);
          }
          19.792% {
            transform:translate(70px,70px);
          }
          20.313% {
            transform:translate(71.111px,70px);
          }
          20.833% {
            transform:translate(72.222px,70px);
            opacity:1;
          }
          21.354% {
            transform:translate(73.333px,70px);
          }
          21.875% {
            transform:translate(74.447px,70px);
          }
          22.396% {
            transform:translate(75.589px,70px);
          }
          22.917% {
            transform:translate(76.765px,70px);
            opacity:1;
          }
          23.438% {
            transform:translate(77.975px,70px);
          }
          23.958% {
            transform:translate(79.219px,70px);
          }
          24.479% {
            transform:translate(80.498px,70px);
          }
          25% {
            transform:translate(81.81px,70px);
            opacity:1;
          }
          25.521% {
            transform:translate(83.157px,70px);
          }
          26.042% {
            transform:translate(84.537px,70px);
          }
          26.563% {
            transform:translate(85.952px,70px);
          }
          27.083% {
            transform:translate(87.401px,70px);
            opacity:1;
          }
          27.604% {
            transform:translate(88.884px,70px);
          }
          28.125% {
            transform:translate(90.402px,70px);
          }
          28.646% {
            transform:translate(91.953px,70px);
          }
          29.167% {
            transform:translate(93.538px,70px);
            opacity:1;
          }
          29.688% {
            transform:translate(95.141px,70px);
          }
          30.208% {
            transform:translate(96.744px,70px);
          }
          30.729% {
            transform:translate(98.346px,70px);
          }
          31.25% {
            transform:translate(99.949px,70px);
            opacity:1;
          }
          31.771% {
            transform:translate(101.551px,70px);
          }
          32.292% {
            transform:translate(103.154px,70px);
          }
          32.813% {
            transform:translate(104.756px,70px);
          }
          33.333% {
            transform:translate(106.359px,70px);
            opacity:1;
          }
          33.854% {
            transform:translate(107.962px,70px);
          }
          34.375% {
            transform:translate(109.564px,70px);
          }
          34.896% {
            transform:translate(111.167px,70px);
          }
          35.417% {
            transform:translate(112.769px,70px);
            opacity:1;
          }
          35.938% {
            transform:translate(114.372px,70px);
          }
          36.458% {
            transform:translate(115.974px,70px);
          }
          36.979% {
            transform:translate(117.577px,70px);
          }
          37.5% {
            transform:translate(119.179px,70px);
            opacity:1;
          }
          38.021% {
            transform:translate(120.782px,70px);
          }
          38.542% {
            transform:translate(122.385px,70px);
          }
          39.063% {
            transform:translate(123.987px,70px);
          }
          39.583% {
            transform:translate(125.59px,70px);
            opacity:1;
          }
          40.104% {
            transform:translate(127.192px,70px);
          }
          40.625% {
            transform:translate(128.795px,70px);
          }
          41.146% {
            transform:translate(130.397px,70px);
            opacity:0;
          }
          41.667% {
            transform:translate(10px,70px);
            opacity:0;
            opacity:0;
          }
          42.188% {
            transform:translate(11.111px,70px);
          }
          42.708% {
            transform:translate(12.222px,70px);
          }
          43.229% {
            transform:translate(13.333px,70px);
          }
          43.75% {
            transform:translate(14.444px,70px);
            opacity:0.889;
          }
          44.271% {
            transform:translate(15.556px,70px);
          }
          44.792% {
            transform:translate(16.667px,70px);
          }
          45.313% {
            transform:translate(17.778px,70px);
          }
          45.833% {
            transform:translate(18.889px,70px);
            opacity:1;
          }
          46.354% {
            transform:translate(20px,70px);
          }
          46.875% {
            transform:translate(21.111px,70px);
          }
          47.396% {
            transform:translate(22.222px,70px);
          }
          47.917% {
            transform:translate(23.333px,70px);
            opacity:1;
          }
          48.438% {
            transform:translate(24.444px,70px);
          }
          48.958% {
            transform:translate(25.556px,70px);
          }
          49.479% {
            transform:translate(26.667px,70px);
          }
          50% {
            transform:translate(27.778px,70px);
            opacity:1;
          }
          50.521% {
            transform:translate(28.889px,70px);
          }
          51.042% {
            transform:translate(30px,70px);
          }
          51.563% {
            transform:translate(31.111px,70px);
          }
          52.083% {
            transform:translate(32.222px,70px);
            opacity:1;
          }
          52.604% {
            transform:translate(33.333px,70px);
          }
          53.125% {
            transform:translate(34.444px,70px);
          }
          53.646% {
            transform:translate(35.556px,70px);
          }
          54.167% {
            transform:translate(36.667px,70px);
            opacity:1;
          }
          54.688% {
            transform:translate(37.778px,70px);
          }
          55.208% {
            transform:translate(38.889px,70px);
          }
          55.729% {
            transform:translate(40px,70px);
          }
          56.25% {
            transform:translate(41.111px,70px);
            opacity:1;
          }
          56.771% {
            transform:translate(42.222px,70px);
          }
          57.292% {
            transform:translate(43.333px,70px);
          }
          57.813% {
            transform:translate(44.444px,70px);
          }
          58.333% {
            transform:translate(45.556px,70px);
            opacity:1;
          }
          58.854% {
            transform:translate(46.667px,70px);
          }
          59.375% {
            transform:translate(47.778px,70px);
          }
          59.896% {
            transform:translate(48.889px,70px);
          }
          60.417% {
            transform:translate(50px,70px);
            opacity:1;
          }
          60.938% {
            transform:translate(51.111px,70px);
          }
          61.458% {
            transform:translate(52.222px,70px);
          }
          61.979% {
            transform:translate(53.333px,70px);
          }
          62.5% {
            transform:translate(54.444px,70px);
            opacity:1;
          }
          63.021% {
            transform:translate(55.556px,70px);
          }
          63.542% {
            transform:translate(56.667px,70px);
          }
          64.063% {
            transform:translate(57.778px,70px);
          }
          64.583% {
            transform:translate(58.889px,70px);
            opacity:1;
          }
          65.104% {
            transform:translate(60px,70px);
          }
          65.625% {
            transform:translate(61.111px,70px);
          }
          66.146% {
            transform:translate(62.222px,70px);
          }
          66.667% {
            transform:translate(63.333px,70px);
            opacity:1;
          }
          67.188% {
            transform:translate(64.444px,70px);
          }
          67.708% {
            transform:translate(65.556px,70px);
          }
          68.229% {
            transform:translate(66.667px,70px);
          }
          68.75% {
            transform:translate(67.778px,70px);
            opacity:1;
          }
          69.271% {
            transform:translate(68.889px,70px);
          }
          69.792% {
            transform:translate(70px,70px);
          }
          70.313% {
            transform:translate(71.111px,70px);
          }
          70.833% {
            transform:translate(72.222px,70px);
            opacity:1;
          }
          71.354% {
            transform:translate(73.333px,70px);
          }
          71.875% {
            transform:translate(74.447px,70px);
          }
          72.396% {
            transform:translate(75.589px,70px);
          }
          72.917% {
            transform:translate(76.765px,70px);
            opacity:1;
          }
          73.438% {
            transform:translate(77.975px,70px);
          }
          73.958% {
            transform:translate(79.219px,70px);
          }
          74.479% {
            transform:translate(80.498px,70px);
          }
          75% {
            transform:translate(81.81px,70px);
            opacity:1;
          }
          75.521% {
            transform:translate(83.157px,70px);
          }
          76.042% {
            transform:translate(84.537px,70px);
          }
          76.563% {
            transform:translate(85.952px,70px);
          }
          77.083% {
            transform:translate(87.401px,70px);
            opacity:1;
          }
          77.604% {
            transform:translate(88.884px,70px);
          }
          78.125% {
            transform:translate(90.402px,70px);
          }
          78.646% {
            transform:translate(91.953px,70px);
          }
          79.167% {
            transform:translate(93.538px,70px);
            opacity:1;
          }
          79.688% {
            transform:translate(95.141px,70px);
          }
          80.208% {
            transform:translate(96.744px,70px);
          }
          80.729% {
            transform:translate(98.346px,70px);
          }
          81.25% {
            transform:translate(99.949px,70px);
            opacity:1;
          }
          81.771% {
            transform:translate(101.551px,70px);
          }
          82.292% {
            transform:translate(103.154px,70px);
          }
          82.813% {
            transform:translate(104.756px,70px);
          }
          83.333% {
            transform:translate(106.359px,70px);
            opacity:1;
          }
          83.854% {
            transform:translate(107.962px,70px);
          }
          84.375% {
            transform:translate(109.564px,70px);
          }
          84.896% {
            transform:translate(111.167px,70px);
          }
          85.417% {
            transform:translate(112.769px,70px);
            opacity:1;
          }
          85.938% {
            transform:translate(114.372px,70px);
          }
          86.458% {
            transform:translate(115.974px,70px);
          }
          86.979% {
            transform:translate(117.577px,70px);
          }
          87.5% {
            transform:translate(119.179px,70px);
            opacity:1;
          }
          88.021% {
            transform:translate(120.782px,70px);
          }
          88.542% {
            transform:translate(122.385px,70px);
          }
          89.063% {
            transform:translate(123.987px,70px);
          }
          89.583% {
            transform:translate(125.59px,70px);
            opacity:1;
          }
          90.104% {
            transform:translate(127.192px,70px);
          }
          90.625% {
            transform:translate(128.795px,70px);
          }
          91.146% {
            transform:translate(130.397px,70px);
            opacity:0;
          }
          91.667% {
            transform:translate(10px,70px);
            opacity:0;
            opacity:0;
          }
          92.188% {
            transform:translate(11.111px,70px);
          }
          92.708% {
            transform:translate(12.222px,70px);
          }
          93.229% {
            transform:translate(13.333px,70px);
          }
          93.75% {
            transform:translate(14.444px,70px);
            opacity:0.889;
          }
          94.271% {
            transform:translate(15.556px,70px);
          }
          94.792% {
            transform:translate(16.667px,70px);
          }
          95.313% {
            transform:translate(17.778px,70px);
          }
          95.833% {
            transform:translate(18.889px,70px);
            opacity:1;
          }
          96.354% {
            transform:translate(20px,70px);
          }
          96.875% {
            transform:translate(21.111px,70px);
          }
          97.396% {
            transform:translate(22.222px,70px);
          }
          97.917% {
            transform:translate(23.333px,70px);
            opacity:1;
          }
          98.438% {
            transform:translate(24.444px,70px);
          }
          98.958% {
            transform:translate(25.556px,70px);
          }
          99.479% {
            transform:translate(26.667px,70px);
          }
          100% {
            transform:translate(27.778px,70px);
            opacity:1;
          }
        }
        @keyframes charge1 {
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
        @keyframes ion2 {
          0% {
            transform:translate(45.556px,90px);
            opacity:1;
          }
          0.521% {
            transform:translate(46.667px,90px);
          }
          1.042% {
            transform:translate(47.778px,90px);
          }
          1.563% {
            transform:translate(48.889px,90px);
          }
          2.083% {
            transform:translate(50px,90px);
            opacity:1;
          }
          2.604% {
            transform:translate(51.111px,90px);
          }
          3.125% {
            transform:translate(52.222px,90px);
          }
          3.646% {
            transform:translate(53.333px,90px);
          }
          4.167% {
            transform:translate(54.444px,90px);
            opacity:1;
          }
          4.688% {
            transform:translate(55.556px,90px);
          }
          5.208% {
            transform:translate(56.667px,90px);
          }
          5.729% {
            transform:translate(57.778px,90px);
          }
          6.25% {
            transform:translate(58.889px,90px);
            opacity:1;
          }
          6.771% {
            transform:translate(60px,90px);
          }
          7.292% {
            transform:translate(61.111px,90px);
          }
          7.813% {
            transform:translate(62.222px,90px);
          }
          8.333% {
            transform:translate(63.333px,90px);
            opacity:1;
          }
          8.854% {
            transform:translate(64.444px,90px);
          }
          9.375% {
            transform:translate(65.556px,90px);
          }
          9.896% {
            transform:translate(66.667px,90px);
          }
          10.417% {
            transform:translate(67.778px,90px);
            opacity:1;
          }
          10.938% {
            transform:translate(68.889px,90px);
          }
          11.458% {
            transform:translate(70px,90px);
          }
          11.979% {
            transform:translate(71.111px,90px);
          }
          12.5% {
            transform:translate(72.222px,90px);
            opacity:1;
          }
          13.021% {
            transform:translate(73.333px,90px);
          }
          13.542% {
            transform:translate(74.447px,90px);
          }
          14.063% {
            transform:translate(75.589px,90px);
          }
          14.583% {
            transform:translate(76.765px,90px);
            opacity:1;
          }
          15.104% {
            transform:translate(77.975px,90px);
          }
          15.625% {
            transform:translate(79.219px,90px);
          }
          16.146% {
            transform:translate(80.498px,90px);
          }
          16.667% {
            transform:translate(81.81px,90px);
            opacity:1;
          }
          17.188% {
            transform:translate(83.157px,90px);
          }
          17.708% {
            transform:translate(84.537px,90px);
          }
          18.229% {
            transform:translate(85.952px,90px);
          }
          18.75% {
            transform:translate(87.401px,90px);
            opacity:1;
          }
          19.271% {
            transform:translate(88.884px,90px);
          }
          19.792% {
            transform:translate(90.402px,90px);
          }
          20.313% {
            transform:translate(91.953px,90px);
          }
          20.833% {
            transform:translate(93.538px,90px);
            opacity:1;
          }
          21.354% {
            transform:translate(95.141px,90px);
          }
          21.875% {
            transform:translate(96.744px,90px);
          }
          22.396% {
            transform:translate(98.346px,90px);
          }
          22.917% {
            transform:translate(99.949px,90px);
            opacity:1;
          }
          23.438% {
            transform:translate(101.551px,90px);
          }
          23.958% {
            transform:translate(103.154px,90px);
          }
          24.479% {
            transform:translate(104.756px,90px);
          }
          25% {
            transform:translate(106.359px,90px);
            opacity:1;
          }
          25.521% {
            transform:translate(107.962px,90px);
          }
          26.042% {
            transform:translate(109.564px,90px);
          }
          26.563% {
            transform:translate(111.167px,90px);
          }
          27.083% {
            transform:translate(112.769px,90px);
            opacity:1;
          }
          27.604% {
            transform:translate(114.372px,90px);
          }
          28.125% {
            transform:translate(115.974px,90px);
          }
          28.646% {
            transform:translate(117.577px,90px);
          }
          29.167% {
            transform:translate(119.179px,90px);
            opacity:1;
          }
          29.688% {
            transform:translate(120.782px,90px);
          }
          30.208% {
            transform:translate(122.385px,90px);
          }
          30.729% {
            transform:translate(123.987px,90px);
          }
          31.25% {
            transform:translate(125.59px,90px);
            opacity:1;
          }
          31.771% {
            transform:translate(127.192px,90px);
          }
          32.292% {
            transform:translate(128.795px,90px);
          }
          32.813% {
            transform:translate(130.397px,90px);
            opacity:0;
          }
          33.333% {
            transform:translate(10px,90px);
            opacity:0;
            opacity:0;
          }
          33.854% {
            transform:translate(11.111px,90px);
          }
          34.375% {
            transform:translate(12.222px,90px);
          }
          34.896% {
            transform:translate(13.333px,90px);
          }
          35.417% {
            transform:translate(14.444px,90px);
            opacity:0.889;
          }
          35.938% {
            transform:translate(15.556px,90px);
          }
          36.458% {
            transform:translate(16.667px,90px);
          }
          36.979% {
            transform:translate(17.778px,90px);
          }
          37.5% {
            transform:translate(18.889px,90px);
            opacity:1;
          }
          38.021% {
            transform:translate(20px,90px);
          }
          38.542% {
            transform:translate(21.111px,90px);
          }
          39.063% {
            transform:translate(22.222px,90px);
          }
          39.583% {
            transform:translate(23.333px,90px);
            opacity:1;
          }
          40.104% {
            transform:translate(24.444px,90px);
          }
          40.625% {
            transform:translate(25.556px,90px);
          }
          41.146% {
            transform:translate(26.667px,90px);
          }
          41.667% {
            transform:translate(27.778px,90px);
            opacity:1;
          }
          42.188% {
            transform:translate(28.889px,90px);
          }
          42.708% {
            transform:translate(30px,90px);
          }
          43.229% {
            transform:translate(31.111px,90px);
          }
          43.75% {
            transform:translate(32.222px,90px);
            opacity:1;
          }
          44.271% {
            transform:translate(33.333px,90px);
          }
          44.792% {
            transform:translate(34.444px,90px);
          }
          45.313% {
            transform:translate(35.556px,90px);
          }
          45.833% {
            transform:translate(36.667px,90px);
            opacity:1;
          }
          46.354% {
            transform:translate(37.778px,90px);
          }
          46.875% {
            transform:translate(38.889px,90px);
          }
          47.396% {
            transform:translate(40px,90px);
          }
          47.917% {
            transform:translate(41.111px,90px);
            opacity:1;
          }
          48.438% {
            transform:translate(42.222px,90px);
          }
          48.958% {
            transform:translate(43.333px,90px);
          }
          49.479% {
            transform:translate(44.444px,90px);
          }
          50% {
            transform:translate(45.556px,90px);
            opacity:1;
          }
          50.521% {
            transform:translate(46.667px,90px);
          }
          51.042% {
            transform:translate(47.778px,90px);
          }
          51.563% {
            transform:translate(48.889px,90px);
          }
          52.083% {
            transform:translate(50px,90px);
            opacity:1;
          }
          52.604% {
            transform:translate(51.111px,90px);
          }
          53.125% {
            transform:translate(52.222px,90px);
          }
          53.646% {
            transform:translate(53.333px,90px);
          }
          54.167% {
            transform:translate(54.444px,90px);
            opacity:1;
          }
          54.688% {
            transform:translate(55.556px,90px);
          }
          55.208% {
            transform:translate(56.667px,90px);
          }
          55.729% {
            transform:translate(57.778px,90px);
          }
          56.25% {
            transform:translate(58.889px,90px);
            opacity:1;
          }
          56.771% {
            transform:translate(60px,90px);
          }
          57.292% {
            transform:translate(61.111px,90px);
          }
          57.813% {
            transform:translate(62.222px,90px);
          }
          58.333% {
            transform:translate(63.333px,90px);
            opacity:1;
          }
          58.854% {
            transform:translate(64.444px,90px);
          }
          59.375% {
            transform:translate(65.556px,90px);
          }
          59.896% {
            transform:translate(66.667px,90px);
          }
          60.417% {
            transform:translate(67.778px,90px);
            opacity:1;
          }
          60.938% {
            transform:translate(68.889px,90px);
          }
          61.458% {
            transform:translate(70px,90px);
          }
          61.979% {
            transform:translate(71.111px,90px);
          }
          62.5% {
            transform:translate(72.222px,90px);
            opacity:1;
          }
          63.021% {
            transform:translate(73.333px,90px);
          }
          63.542% {
            transform:translate(74.447px,90px);
          }
          64.063% {
            transform:translate(75.589px,90px);
          }
          64.583% {
            transform:translate(76.765px,90px);
            opacity:1;
          }
          65.104% {
            transform:translate(77.975px,90px);
          }
          65.625% {
            transform:translate(79.219px,90px);
          }
          66.146% {
            transform:translate(80.498px,90px);
          }
          66.667% {
            transform:translate(81.81px,90px);
            opacity:1;
          }
          67.188% {
            transform:translate(83.157px,90px);
          }
          67.708% {
            transform:translate(84.537px,90px);
          }
          68.229% {
            transform:translate(85.952px,90px);
          }
          68.75% {
            transform:translate(87.401px,90px);
            opacity:1;
          }
          69.271% {
            transform:translate(88.884px,90px);
          }
          69.792% {
            transform:translate(90.402px,90px);
          }
          70.313% {
            transform:translate(91.953px,90px);
          }
          70.833% {
            transform:translate(93.538px,90px);
            opacity:1;
          }
          71.354% {
            transform:translate(95.141px,90px);
          }
          71.875% {
            transform:translate(96.744px,90px);
          }
          72.396% {
            transform:translate(98.346px,90px);
          }
          72.917% {
            transform:translate(99.949px,90px);
            opacity:1;
          }
          73.438% {
            transform:translate(101.551px,90px);
          }
          73.958% {
            transform:translate(103.154px,90px);
          }
          74.479% {
            transform:translate(104.756px,90px);
          }
          75% {
            transform:translate(106.359px,90px);
            opacity:1;
          }
          75.521% {
            transform:translate(107.962px,90px);
          }
          76.042% {
            transform:translate(109.564px,90px);
          }
          76.563% {
            transform:translate(111.167px,90px);
          }
          77.083% {
            transform:translate(112.769px,90px);
            opacity:1;
          }
          77.604% {
            transform:translate(114.372px,90px);
          }
          78.125% {
            transform:translate(115.974px,90px);
          }
          78.646% {
            transform:translate(117.577px,90px);
          }
          79.167% {
            transform:translate(119.179px,90px);
            opacity:1;
          }
          79.688% {
            transform:translate(120.782px,90px);
          }
          80.208% {
            transform:translate(122.385px,90px);
          }
          80.729% {
            transform:translate(123.987px,90px);
          }
          81.25% {
            transform:translate(125.59px,90px);
            opacity:1;
          }
          81.771% {
            transform:translate(127.192px,90px);
          }
          82.292% {
            transform:translate(128.795px,90px);
          }
          82.813% {
            transform:translate(130.397px,90px);
            opacity:0;
          }
          83.333% {
            transform:translate(10px,90px);
            opacity:0;
            opacity:0;
          }
          83.854% {
            transform:translate(11.111px,90px);
          }
          84.375% {
            transform:translate(12.222px,90px);
          }
          84.896% {
            transform:translate(13.333px,90px);
          }
          85.417% {
            transform:translate(14.444px,90px);
            opacity:0.889;
          }
          85.938% {
            transform:translate(15.556px,90px);
          }
          86.458% {
            transform:translate(16.667px,90px);
          }
          86.979% {
            transform:translate(17.778px,90px);
          }
          87.5% {
            transform:translate(18.889px,90px);
            opacity:1;
          }
          88.021% {
            transform:translate(20px,90px);
          }
          88.542% {
            transform:translate(21.111px,90px);
          }
          89.063% {
            transform:translate(22.222px,90px);
          }
          89.583% {
            transform:translate(23.333px,90px);
            opacity:1;
          }
          90.104% {
            transform:translate(24.444px,90px);
          }
          90.625% {
            transform:translate(25.556px,90px);
          }
          91.146% {
            transform:translate(26.667px,90px);
          }
          91.667% {
            transform:translate(27.778px,90px);
            opacity:1;
          }
          92.188% {
            transform:translate(28.889px,90px);
          }
          92.708% {
            transform:translate(30px,90px);
          }
          93.229% {
            transform:translate(31.111px,90px);
          }
          93.75% {
            transform:translate(32.222px,90px);
            opacity:1;
          }
          94.271% {
            transform:translate(33.333px,90px);
          }
          94.792% {
            transform:translate(34.444px,90px);
          }
          95.313% {
            transform:translate(35.556px,90px);
          }
          95.833% {
            transform:translate(36.667px,90px);
            opacity:1;
          }
          96.354% {
            transform:translate(37.778px,90px);
          }
          96.875% {
            transform:translate(38.889px,90px);
          }
          97.396% {
            transform:translate(40px,90px);
          }
          97.917% {
            transform:translate(41.111px,90px);
            opacity:1;
          }
          98.438% {
            transform:translate(42.222px,90px);
          }
          98.958% {
            transform:translate(43.333px,90px);
          }
          99.479% {
            transform:translate(44.444px,90px);
          }
          100% {
            transform:translate(45.556px,90px);
            opacity:1;
          }
        }
        @keyframes charge2 {
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
            opacity:1;
          }
        }
        @keyframes ion3 {
          0% {
            transform:translate(63.333px,50px);
            opacity:1;
          }
          0.521% {
            transform:translate(64.444px,50px);
          }
          1.042% {
            transform:translate(65.556px,50px);
          }
          1.563% {
            transform:translate(66.667px,50px);
          }
          2.083% {
            transform:translate(67.778px,50px);
            opacity:1;
          }
          2.604% {
            transform:translate(68.889px,50px);
          }
          3.125% {
            transform:translate(70px,50px);
          }
          3.646% {
            transform:translate(71.111px,50px);
          }
          4.167% {
            transform:translate(72.222px,50px);
            opacity:1;
          }
          4.688% {
            transform:translate(73.333px,50px);
          }
          5.208% {
            transform:translate(74.447px,50px);
          }
          5.729% {
            transform:translate(75.589px,50px);
          }
          6.25% {
            transform:translate(76.765px,50px);
            opacity:1;
          }
          6.771% {
            transform:translate(77.975px,50px);
          }
          7.292% {
            transform:translate(79.219px,50px);
          }
          7.813% {
            transform:translate(80.498px,50px);
          }
          8.333% {
            transform:translate(81.81px,50px);
            opacity:1;
          }
          8.854% {
            transform:translate(83.157px,50px);
          }
          9.375% {
            transform:translate(84.537px,50px);
          }
          9.896% {
            transform:translate(85.952px,50px);
          }
          10.417% {
            transform:translate(87.401px,50px);
            opacity:1;
          }
          10.938% {
            transform:translate(88.884px,50px);
          }
          11.458% {
            transform:translate(90.402px,50px);
          }
          11.979% {
            transform:translate(91.953px,50px);
          }
          12.5% {
            transform:translate(93.538px,50px);
            opacity:1;
          }
          13.021% {
            transform:translate(95.141px,50px);
          }
          13.542% {
            transform:translate(96.744px,50px);
          }
          14.063% {
            transform:translate(98.346px,50px);
          }
          14.583% {
            transform:translate(99.949px,50px);
            opacity:1;
          }
          15.104% {
            transform:translate(101.551px,50px);
          }
          15.625% {
            transform:translate(103.154px,50px);
          }
          16.146% {
            transform:translate(104.756px,50px);
          }
          16.667% {
            transform:translate(106.359px,50px);
            opacity:1;
          }
          17.188% {
            transform:translate(107.962px,50px);
          }
          17.708% {
            transform:translate(109.564px,50px);
          }
          18.229% {
            transform:translate(111.167px,50px);
          }
          18.75% {
            transform:translate(112.769px,50px);
            opacity:1;
          }
          19.271% {
            transform:translate(114.372px,50px);
          }
          19.792% {
            transform:translate(115.974px,50px);
          }
          20.313% {
            transform:translate(117.577px,50px);
          }
          20.833% {
            transform:translate(119.179px,50px);
            opacity:1;
          }
          21.354% {
            transform:translate(120.782px,50px);
          }
          21.875% {
            transform:translate(122.385px,50px);
          }
          22.396% {
            transform:translate(123.987px,50px);
          }
          22.917% {
            transform:translate(125.59px,50px);
            opacity:1;
          }
          23.438% {
            transform:translate(127.192px,50px);
          }
          23.958% {
            transform:translate(128.795px,50px);
          }
          24.479% {
            transform:translate(130.397px,50px);
            opacity:0;
          }
          25% {
            transform:translate(10px,50px);
            opacity:0;
            opacity:0;
          }
          25.521% {
            transform:translate(11.111px,50px);
          }
          26.042% {
            transform:translate(12.222px,50px);
          }
          26.563% {
            transform:translate(13.333px,50px);
          }
          27.083% {
            transform:translate(14.444px,50px);
            opacity:0.889;
          }
          27.604% {
            transform:translate(15.556px,50px);
          }
          28.125% {
            transform:translate(16.667px,50px);
          }
          28.646% {
            transform:translate(17.778px,50px);
          }
          29.167% {
            transform:translate(18.889px,50px);
            opacity:1;
          }
          29.688% {
            transform:translate(20px,50px);
          }
          30.208% {
            transform:translate(21.111px,50px);
          }
          30.729% {
            transform:translate(22.222px,50px);
          }
          31.25% {
            transform:translate(23.333px,50px);
            opacity:1;
          }
          31.771% {
            transform:translate(24.444px,50px);
          }
          32.292% {
            transform:translate(25.556px,50px);
          }
          32.813% {
            transform:translate(26.667px,50px);
          }
          33.333% {
            transform:translate(27.778px,50px);
            opacity:1;
          }
          33.854% {
            transform:translate(28.889px,50px);
          }
          34.375% {
            transform:translate(30px,50px);
          }
          34.896% {
            transform:translate(31.111px,50px);
          }
          35.417% {
            transform:translate(32.222px,50px);
            opacity:1;
          }
          35.938% {
            transform:translate(33.333px,50px);
          }
          36.458% {
            transform:translate(34.444px,50px);
          }
          36.979% {
            transform:translate(35.556px,50px);
          }
          37.5% {
            transform:translate(36.667px,50px);
            opacity:1;
          }
          38.021% {
            transform:translate(37.778px,50px);
          }
          38.542% {
            transform:translate(38.889px,50px);
          }
          39.063% {
            transform:translate(40px,50px);
          }
          39.583% {
            transform:translate(41.111px,50px);
            opacity:1;
          }
          40.104% {
            transform:translate(42.222px,50px);
          }
          40.625% {
            transform:translate(43.333px,50px);
          }
          41.146% {
            transform:translate(44.444px,50px);
          }
          41.667% {
            transform:translate(45.556px,50px);
            opacity:1;
          }
          42.188% {
            transform:translate(46.667px,50px);
          }
          42.708% {
            transform:translate(47.778px,50px);
          }
          43.229% {
            transform:translate(48.889px,50px);
          }
          43.75% {
            transform:translate(50px,50px);
            opacity:1;
          }
          44.271% {
            transform:translate(51.111px,50px);
          }
          44.792% {
            transform:translate(52.222px,50px);
          }
          45.313% {
            transform:translate(53.333px,50px);
          }
          45.833% {
            transform:translate(54.444px,50px);
            opacity:1;
          }
          46.354% {
            transform:translate(55.556px,50px);
          }
          46.875% {
            transform:translate(56.667px,50px);
          }
          47.396% {
            transform:translate(57.778px,50px);
          }
          47.917% {
            transform:translate(58.889px,50px);
            opacity:1;
          }
          48.438% {
            transform:translate(60px,50px);
          }
          48.958% {
            transform:translate(61.111px,50px);
          }
          49.479% {
            transform:translate(62.222px,50px);
          }
          50% {
            transform:translate(63.333px,50px);
            opacity:1;
          }
          50.521% {
            transform:translate(64.444px,50px);
          }
          51.042% {
            transform:translate(65.556px,50px);
          }
          51.563% {
            transform:translate(66.667px,50px);
          }
          52.083% {
            transform:translate(67.778px,50px);
            opacity:1;
          }
          52.604% {
            transform:translate(68.889px,50px);
          }
          53.125% {
            transform:translate(70px,50px);
          }
          53.646% {
            transform:translate(71.111px,50px);
          }
          54.167% {
            transform:translate(72.222px,50px);
            opacity:1;
          }
          54.688% {
            transform:translate(73.333px,50px);
          }
          55.208% {
            transform:translate(74.447px,50px);
          }
          55.729% {
            transform:translate(75.589px,50px);
          }
          56.25% {
            transform:translate(76.765px,50px);
            opacity:1;
          }
          56.771% {
            transform:translate(77.975px,50px);
          }
          57.292% {
            transform:translate(79.219px,50px);
          }
          57.813% {
            transform:translate(80.498px,50px);
          }
          58.333% {
            transform:translate(81.81px,50px);
            opacity:1;
          }
          58.854% {
            transform:translate(83.157px,50px);
          }
          59.375% {
            transform:translate(84.537px,50px);
          }
          59.896% {
            transform:translate(85.952px,50px);
          }
          60.417% {
            transform:translate(87.401px,50px);
            opacity:1;
          }
          60.938% {
            transform:translate(88.884px,50px);
          }
          61.458% {
            transform:translate(90.402px,50px);
          }
          61.979% {
            transform:translate(91.953px,50px);
          }
          62.5% {
            transform:translate(93.538px,50px);
            opacity:1;
          }
          63.021% {
            transform:translate(95.141px,50px);
          }
          63.542% {
            transform:translate(96.744px,50px);
          }
          64.063% {
            transform:translate(98.346px,50px);
          }
          64.583% {
            transform:translate(99.949px,50px);
            opacity:1;
          }
          65.104% {
            transform:translate(101.551px,50px);
          }
          65.625% {
            transform:translate(103.154px,50px);
          }
          66.146% {
            transform:translate(104.756px,50px);
          }
          66.667% {
            transform:translate(106.359px,50px);
            opacity:1;
          }
          67.188% {
            transform:translate(107.962px,50px);
          }
          67.708% {
            transform:translate(109.564px,50px);
          }
          68.229% {
            transform:translate(111.167px,50px);
          }
          68.75% {
            transform:translate(112.769px,50px);
            opacity:1;
          }
          69.271% {
            transform:translate(114.372px,50px);
          }
          69.792% {
            transform:translate(115.974px,50px);
          }
          70.313% {
            transform:translate(117.577px,50px);
          }
          70.833% {
            transform:translate(119.179px,50px);
            opacity:1;
          }
          71.354% {
            transform:translate(120.782px,50px);
          }
          71.875% {
            transform:translate(122.385px,50px);
          }
          72.396% {
            transform:translate(123.987px,50px);
          }
          72.917% {
            transform:translate(125.59px,50px);
            opacity:1;
          }
          73.438% {
            transform:translate(127.192px,50px);
          }
          73.958% {
            transform:translate(128.795px,50px);
          }
          74.479% {
            transform:translate(130.397px,50px);
            opacity:0;
          }
          75% {
            transform:translate(10px,50px);
            opacity:0;
            opacity:0;
          }
          75.521% {
            transform:translate(11.111px,50px);
          }
          76.042% {
            transform:translate(12.222px,50px);
          }
          76.563% {
            transform:translate(13.333px,50px);
          }
          77.083% {
            transform:translate(14.444px,50px);
            opacity:0.889;
          }
          77.604% {
            transform:translate(15.556px,50px);
          }
          78.125% {
            transform:translate(16.667px,50px);
          }
          78.646% {
            transform:translate(17.778px,50px);
          }
          79.167% {
            transform:translate(18.889px,50px);
            opacity:1;
          }
          79.688% {
            transform:translate(20px,50px);
          }
          80.208% {
            transform:translate(21.111px,50px);
          }
          80.729% {
            transform:translate(22.222px,50px);
          }
          81.25% {
            transform:translate(23.333px,50px);
            opacity:1;
          }
          81.771% {
            transform:translate(24.444px,50px);
          }
          82.292% {
            transform:translate(25.556px,50px);
          }
          82.813% {
            transform:translate(26.667px,50px);
          }
          83.333% {
            transform:translate(27.778px,50px);
            opacity:1;
          }
          83.854% {
            transform:translate(28.889px,50px);
          }
          84.375% {
            transform:translate(30px,50px);
          }
          84.896% {
            transform:translate(31.111px,50px);
          }
          85.417% {
            transform:translate(32.222px,50px);
            opacity:1;
          }
          85.938% {
            transform:translate(33.333px,50px);
          }
          86.458% {
            transform:translate(34.444px,50px);
          }
          86.979% {
            transform:translate(35.556px,50px);
          }
          87.5% {
            transform:translate(36.667px,50px);
            opacity:1;
          }
          88.021% {
            transform:translate(37.778px,50px);
          }
          88.542% {
            transform:translate(38.889px,50px);
          }
          89.063% {
            transform:translate(40px,50px);
          }
          89.583% {
            transform:translate(41.111px,50px);
            opacity:1;
          }
          90.104% {
            transform:translate(42.222px,50px);
          }
          90.625% {
            transform:translate(43.333px,50px);
          }
          91.146% {
            transform:translate(44.444px,50px);
          }
          91.667% {
            transform:translate(45.556px,50px);
            opacity:1;
          }
          92.188% {
            transform:translate(46.667px,50px);
          }
          92.708% {
            transform:translate(47.778px,50px);
          }
          93.229% {
            transform:translate(48.889px,50px);
          }
          93.75% {
            transform:translate(50px,50px);
            opacity:1;
          }
          94.271% {
            transform:translate(51.111px,50px);
          }
          94.792% {
            transform:translate(52.222px,50px);
          }
          95.313% {
            transform:translate(53.333px,50px);
          }
          95.833% {
            transform:translate(54.444px,50px);
            opacity:1;
          }
          96.354% {
            transform:translate(55.556px,50px);
          }
          96.875% {
            transform:translate(56.667px,50px);
          }
          97.396% {
            transform:translate(57.778px,50px);
          }
          97.917% {
            transform:translate(58.889px,50px);
            opacity:1;
          }
          98.438% {
            transform:translate(60px,50px);
          }
          98.958% {
            transform:translate(61.111px,50px);
          }
          99.479% {
            transform:translate(62.222px,50px);
          }
          100% {
            transform:translate(63.333px,50px);
            opacity:1;
          }
        }
        @keyframes charge3 {
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
        @keyframes ion4 {
          0% {
            transform:translate(81.81px,70px);
            opacity:1;
          }
          0.521% {
            transform:translate(83.157px,70px);
          }
          1.042% {
            transform:translate(84.537px,70px);
          }
          1.563% {
            transform:translate(85.952px,70px);
          }
          2.083% {
            transform:translate(87.401px,70px);
            opacity:1;
          }
          2.604% {
            transform:translate(88.884px,70px);
          }
          3.125% {
            transform:translate(90.402px,70px);
          }
          3.646% {
            transform:translate(91.953px,70px);
          }
          4.167% {
            transform:translate(93.538px,70px);
            opacity:1;
          }
          4.688% {
            transform:translate(95.141px,70px);
          }
          5.208% {
            transform:translate(96.744px,70px);
          }
          5.729% {
            transform:translate(98.346px,70px);
          }
          6.25% {
            transform:translate(99.949px,70px);
            opacity:1;
          }
          6.771% {
            transform:translate(101.551px,70px);
          }
          7.292% {
            transform:translate(103.154px,70px);
          }
          7.813% {
            transform:translate(104.756px,70px);
          }
          8.333% {
            transform:translate(106.359px,70px);
            opacity:1;
          }
          8.854% {
            transform:translate(107.962px,70px);
          }
          9.375% {
            transform:translate(109.564px,70px);
          }
          9.896% {
            transform:translate(111.167px,70px);
          }
          10.417% {
            transform:translate(112.769px,70px);
            opacity:1;
          }
          10.938% {
            transform:translate(114.372px,70px);
          }
          11.458% {
            transform:translate(115.974px,70px);
          }
          11.979% {
            transform:translate(117.577px,70px);
          }
          12.5% {
            transform:translate(119.179px,70px);
            opacity:1;
          }
          13.021% {
            transform:translate(120.782px,70px);
          }
          13.542% {
            transform:translate(122.385px,70px);
          }
          14.063% {
            transform:translate(123.987px,70px);
          }
          14.583% {
            transform:translate(125.59px,70px);
            opacity:1;
          }
          15.104% {
            transform:translate(127.192px,70px);
          }
          15.625% {
            transform:translate(128.795px,70px);
          }
          16.146% {
            transform:translate(130.397px,70px);
            opacity:0;
          }
          16.667% {
            transform:translate(10px,70px);
            opacity:0;
            opacity:0;
          }
          17.188% {
            transform:translate(11.111px,70px);
          }
          17.708% {
            transform:translate(12.222px,70px);
          }
          18.229% {
            transform:translate(13.333px,70px);
          }
          18.75% {
            transform:translate(14.444px,70px);
            opacity:0.889;
          }
          19.271% {
            transform:translate(15.556px,70px);
          }
          19.792% {
            transform:translate(16.667px,70px);
          }
          20.313% {
            transform:translate(17.778px,70px);
          }
          20.833% {
            transform:translate(18.889px,70px);
            opacity:1;
          }
          21.354% {
            transform:translate(20px,70px);
          }
          21.875% {
            transform:translate(21.111px,70px);
          }
          22.396% {
            transform:translate(22.222px,70px);
          }
          22.917% {
            transform:translate(23.333px,70px);
            opacity:1;
          }
          23.438% {
            transform:translate(24.444px,70px);
          }
          23.958% {
            transform:translate(25.556px,70px);
          }
          24.479% {
            transform:translate(26.667px,70px);
          }
          25% {
            transform:translate(27.778px,70px);
            opacity:1;
          }
          25.521% {
            transform:translate(28.889px,70px);
          }
          26.042% {
            transform:translate(30px,70px);
          }
          26.563% {
            transform:translate(31.111px,70px);
          }
          27.083% {
            transform:translate(32.222px,70px);
            opacity:1;
          }
          27.604% {
            transform:translate(33.333px,70px);
          }
          28.125% {
            transform:translate(34.444px,70px);
          }
          28.646% {
            transform:translate(35.556px,70px);
          }
          29.167% {
            transform:translate(36.667px,70px);
            opacity:1;
          }
          29.688% {
            transform:translate(37.778px,70px);
          }
          30.208% {
            transform:translate(38.889px,70px);
          }
          30.729% {
            transform:translate(40px,70px);
          }
          31.25% {
            transform:translate(41.111px,70px);
            opacity:1;
          }
          31.771% {
            transform:translate(42.222px,70px);
          }
          32.292% {
            transform:translate(43.333px,70px);
          }
          32.813% {
            transform:translate(44.444px,70px);
          }
          33.333% {
            transform:translate(45.556px,70px);
            opacity:1;
          }
          33.854% {
            transform:translate(46.667px,70px);
          }
          34.375% {
            transform:translate(47.778px,70px);
          }
          34.896% {
            transform:translate(48.889px,70px);
          }
          35.417% {
            transform:translate(50px,70px);
            opacity:1;
          }
          35.938% {
            transform:translate(51.111px,70px);
          }
          36.458% {
            transform:translate(52.222px,70px);
          }
          36.979% {
            transform:translate(53.333px,70px);
          }
          37.5% {
            transform:translate(54.444px,70px);
            opacity:1;
          }
          38.021% {
            transform:translate(55.556px,70px);
          }
          38.542% {
            transform:translate(56.667px,70px);
          }
          39.063% {
            transform:translate(57.778px,70px);
          }
          39.583% {
            transform:translate(58.889px,70px);
            opacity:1;
          }
          40.104% {
            transform:translate(60px,70px);
          }
          40.625% {
            transform:translate(61.111px,70px);
          }
          41.146% {
            transform:translate(62.222px,70px);
          }
          41.667% {
            transform:translate(63.333px,70px);
            opacity:1;
          }
          42.188% {
            transform:translate(64.444px,70px);
          }
          42.708% {
            transform:translate(65.556px,70px);
          }
          43.229% {
            transform:translate(66.667px,70px);
          }
          43.75% {
            transform:translate(67.778px,70px);
            opacity:1;
          }
          44.271% {
            transform:translate(68.889px,70px);
          }
          44.792% {
            transform:translate(70px,70px);
          }
          45.313% {
            transform:translate(71.111px,70px);
          }
          45.833% {
            transform:translate(72.222px,70px);
            opacity:1;
          }
          46.354% {
            transform:translate(73.333px,70px);
          }
          46.875% {
            transform:translate(74.447px,70px);
          }
          47.396% {
            transform:translate(75.589px,70px);
          }
          47.917% {
            transform:translate(76.765px,70px);
            opacity:1;
          }
          48.438% {
            transform:translate(77.975px,70px);
          }
          48.958% {
            transform:translate(79.219px,70px);
          }
          49.479% {
            transform:translate(80.498px,70px);
          }
          50% {
            transform:translate(81.81px,70px);
            opacity:1;
          }
          50.521% {
            transform:translate(83.157px,70px);
          }
          51.042% {
            transform:translate(84.537px,70px);
          }
          51.563% {
            transform:translate(85.952px,70px);
          }
          52.083% {
            transform:translate(87.401px,70px);
            opacity:1;
          }
          52.604% {
            transform:translate(88.884px,70px);
          }
          53.125% {
            transform:translate(90.402px,70px);
          }
          53.646% {
            transform:translate(91.953px,70px);
          }
          54.167% {
            transform:translate(93.538px,70px);
            opacity:1;
          }
          54.688% {
            transform:translate(95.141px,70px);
          }
          55.208% {
            transform:translate(96.744px,70px);
          }
          55.729% {
            transform:translate(98.346px,70px);
          }
          56.25% {
            transform:translate(99.949px,70px);
            opacity:1;
          }
          56.771% {
            transform:translate(101.551px,70px);
          }
          57.292% {
            transform:translate(103.154px,70px);
          }
          57.813% {
            transform:translate(104.756px,70px);
          }
          58.333% {
            transform:translate(106.359px,70px);
            opacity:1;
          }
          58.854% {
            transform:translate(107.962px,70px);
          }
          59.375% {
            transform:translate(109.564px,70px);
          }
          59.896% {
            transform:translate(111.167px,70px);
          }
          60.417% {
            transform:translate(112.769px,70px);
            opacity:1;
          }
          60.938% {
            transform:translate(114.372px,70px);
          }
          61.458% {
            transform:translate(115.974px,70px);
          }
          61.979% {
            transform:translate(117.577px,70px);
          }
          62.5% {
            transform:translate(119.179px,70px);
            opacity:1;
          }
          63.021% {
            transform:translate(120.782px,70px);
          }
          63.542% {
            transform:translate(122.385px,70px);
          }
          64.063% {
            transform:translate(123.987px,70px);
          }
          64.583% {
            transform:translate(125.59px,70px);
            opacity:1;
          }
          65.104% {
            transform:translate(127.192px,70px);
          }
          65.625% {
            transform:translate(128.795px,70px);
          }
          66.146% {
            transform:translate(130.397px,70px);
            opacity:0;
          }
          66.667% {
            transform:translate(10px,70px);
            opacity:0;
            opacity:0;
          }
          67.188% {
            transform:translate(11.111px,70px);
          }
          67.708% {
            transform:translate(12.222px,70px);
          }
          68.229% {
            transform:translate(13.333px,70px);
          }
          68.75% {
            transform:translate(14.444px,70px);
            opacity:0.889;
          }
          69.271% {
            transform:translate(15.556px,70px);
          }
          69.792% {
            transform:translate(16.667px,70px);
          }
          70.313% {
            transform:translate(17.778px,70px);
          }
          70.833% {
            transform:translate(18.889px,70px);
            opacity:1;
          }
          71.354% {
            transform:translate(20px,70px);
          }
          71.875% {
            transform:translate(21.111px,70px);
          }
          72.396% {
            transform:translate(22.222px,70px);
          }
          72.917% {
            transform:translate(23.333px,70px);
            opacity:1;
          }
          73.438% {
            transform:translate(24.444px,70px);
          }
          73.958% {
            transform:translate(25.556px,70px);
          }
          74.479% {
            transform:translate(26.667px,70px);
          }
          75% {
            transform:translate(27.778px,70px);
            opacity:1;
          }
          75.521% {
            transform:translate(28.889px,70px);
          }
          76.042% {
            transform:translate(30px,70px);
          }
          76.563% {
            transform:translate(31.111px,70px);
          }
          77.083% {
            transform:translate(32.222px,70px);
            opacity:1;
          }
          77.604% {
            transform:translate(33.333px,70px);
          }
          78.125% {
            transform:translate(34.444px,70px);
          }
          78.646% {
            transform:translate(35.556px,70px);
          }
          79.167% {
            transform:translate(36.667px,70px);
            opacity:1;
          }
          79.688% {
            transform:translate(37.778px,70px);
          }
          80.208% {
            transform:translate(38.889px,70px);
          }
          80.729% {
            transform:translate(40px,70px);
          }
          81.25% {
            transform:translate(41.111px,70px);
            opacity:1;
          }
          81.771% {
            transform:translate(42.222px,70px);
          }
          82.292% {
            transform:translate(43.333px,70px);
          }
          82.813% {
            transform:translate(44.444px,70px);
          }
          83.333% {
            transform:translate(45.556px,70px);
            opacity:1;
          }
          83.854% {
            transform:translate(46.667px,70px);
          }
          84.375% {
            transform:translate(47.778px,70px);
          }
          84.896% {
            transform:translate(48.889px,70px);
          }
          85.417% {
            transform:translate(50px,70px);
            opacity:1;
          }
          85.938% {
            transform:translate(51.111px,70px);
          }
          86.458% {
            transform:translate(52.222px,70px);
          }
          86.979% {
            transform:translate(53.333px,70px);
          }
          87.5% {
            transform:translate(54.444px,70px);
            opacity:1;
          }
          88.021% {
            transform:translate(55.556px,70px);
          }
          88.542% {
            transform:translate(56.667px,70px);
          }
          89.063% {
            transform:translate(57.778px,70px);
          }
          89.583% {
            transform:translate(58.889px,70px);
            opacity:1;
          }
          90.104% {
            transform:translate(60px,70px);
          }
          90.625% {
            transform:translate(61.111px,70px);
          }
          91.146% {
            transform:translate(62.222px,70px);
          }
          91.667% {
            transform:translate(63.333px,70px);
            opacity:1;
          }
          92.188% {
            transform:translate(64.444px,70px);
          }
          92.708% {
            transform:translate(65.556px,70px);
          }
          93.229% {
            transform:translate(66.667px,70px);
          }
          93.75% {
            transform:translate(67.778px,70px);
            opacity:1;
          }
          94.271% {
            transform:translate(68.889px,70px);
          }
          94.792% {
            transform:translate(70px,70px);
          }
          95.313% {
            transform:translate(71.111px,70px);
          }
          95.833% {
            transform:translate(72.222px,70px);
            opacity:1;
          }
          96.354% {
            transform:translate(73.333px,70px);
          }
          96.875% {
            transform:translate(74.447px,70px);
          }
          97.396% {
            transform:translate(75.589px,70px);
          }
          97.917% {
            transform:translate(76.765px,70px);
            opacity:1;
          }
          98.438% {
            transform:translate(77.975px,70px);
          }
          98.958% {
            transform:translate(79.219px,70px);
          }
          99.479% {
            transform:translate(80.498px,70px);
          }
          100% {
            transform:translate(81.81px,70px);
            opacity:1;
          }
        }
        @keyframes charge4 {
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
        @keyframes ion5 {
          0% {
            transform:translate(106.359px,90px);
            opacity:1;
          }
          0.521% {
            transform:translate(107.962px,90px);
          }
          1.042% {
            transform:translate(109.564px,90px);
          }
          1.563% {
            transform:translate(111.167px,90px);
          }
          2.083% {
            transform:translate(112.769px,90px);
            opacity:1;
          }
          2.604% {
            transform:translate(114.372px,90px);
          }
          3.125% {
            transform:translate(115.974px,90px);
          }
          3.646% {
            transform:translate(117.577px,90px);
          }
          4.167% {
            transform:translate(119.179px,90px);
            opacity:1;
          }
          4.688% {
            transform:translate(120.782px,90px);
          }
          5.208% {
            transform:translate(122.385px,90px);
          }
          5.729% {
            transform:translate(123.987px,90px);
          }
          6.25% {
            transform:translate(125.59px,90px);
            opacity:1;
          }
          6.771% {
            transform:translate(127.192px,90px);
          }
          7.292% {
            transform:translate(128.795px,90px);
          }
          7.813% {
            transform:translate(130.397px,90px);
            opacity:0;
          }
          8.333% {
            transform:translate(10px,90px);
            opacity:0;
            opacity:0;
          }
          8.854% {
            transform:translate(11.111px,90px);
          }
          9.375% {
            transform:translate(12.222px,90px);
          }
          9.896% {
            transform:translate(13.333px,90px);
          }
          10.417% {
            transform:translate(14.444px,90px);
            opacity:0.889;
          }
          10.938% {
            transform:translate(15.556px,90px);
          }
          11.458% {
            transform:translate(16.667px,90px);
          }
          11.979% {
            transform:translate(17.778px,90px);
          }
          12.5% {
            transform:translate(18.889px,90px);
            opacity:1;
          }
          13.021% {
            transform:translate(20px,90px);
          }
          13.542% {
            transform:translate(21.111px,90px);
          }
          14.063% {
            transform:translate(22.222px,90px);
          }
          14.583% {
            transform:translate(23.333px,90px);
            opacity:1;
          }
          15.104% {
            transform:translate(24.444px,90px);
          }
          15.625% {
            transform:translate(25.556px,90px);
          }
          16.146% {
            transform:translate(26.667px,90px);
          }
          16.667% {
            transform:translate(27.778px,90px);
            opacity:1;
          }
          17.188% {
            transform:translate(28.889px,90px);
          }
          17.708% {
            transform:translate(30px,90px);
          }
          18.229% {
            transform:translate(31.111px,90px);
          }
          18.75% {
            transform:translate(32.222px,90px);
            opacity:1;
          }
          19.271% {
            transform:translate(33.333px,90px);
          }
          19.792% {
            transform:translate(34.444px,90px);
          }
          20.313% {
            transform:translate(35.556px,90px);
          }
          20.833% {
            transform:translate(36.667px,90px);
            opacity:1;
          }
          21.354% {
            transform:translate(37.778px,90px);
          }
          21.875% {
            transform:translate(38.889px,90px);
          }
          22.396% {
            transform:translate(40px,90px);
          }
          22.917% {
            transform:translate(41.111px,90px);
            opacity:1;
          }
          23.438% {
            transform:translate(42.222px,90px);
          }
          23.958% {
            transform:translate(43.333px,90px);
          }
          24.479% {
            transform:translate(44.444px,90px);
          }
          25% {
            transform:translate(45.556px,90px);
            opacity:1;
          }
          25.521% {
            transform:translate(46.667px,90px);
          }
          26.042% {
            transform:translate(47.778px,90px);
          }
          26.563% {
            transform:translate(48.889px,90px);
          }
          27.083% {
            transform:translate(50px,90px);
            opacity:1;
          }
          27.604% {
            transform:translate(51.111px,90px);
          }
          28.125% {
            transform:translate(52.222px,90px);
          }
          28.646% {
            transform:translate(53.333px,90px);
          }
          29.167% {
            transform:translate(54.444px,90px);
            opacity:1;
          }
          29.688% {
            transform:translate(55.556px,90px);
          }
          30.208% {
            transform:translate(56.667px,90px);
          }
          30.729% {
            transform:translate(57.778px,90px);
          }
          31.25% {
            transform:translate(58.889px,90px);
            opacity:1;
          }
          31.771% {
            transform:translate(60px,90px);
          }
          32.292% {
            transform:translate(61.111px,90px);
          }
          32.813% {
            transform:translate(62.222px,90px);
          }
          33.333% {
            transform:translate(63.333px,90px);
            opacity:1;
          }
          33.854% {
            transform:translate(64.444px,90px);
          }
          34.375% {
            transform:translate(65.556px,90px);
          }
          34.896% {
            transform:translate(66.667px,90px);
          }
          35.417% {
            transform:translate(67.778px,90px);
            opacity:1;
          }
          35.938% {
            transform:translate(68.889px,90px);
          }
          36.458% {
            transform:translate(70px,90px);
          }
          36.979% {
            transform:translate(71.111px,90px);
          }
          37.5% {
            transform:translate(72.222px,90px);
            opacity:1;
          }
          38.021% {
            transform:translate(73.333px,90px);
          }
          38.542% {
            transform:translate(74.447px,90px);
          }
          39.063% {
            transform:translate(75.589px,90px);
          }
          39.583% {
            transform:translate(76.765px,90px);
            opacity:1;
          }
          40.104% {
            transform:translate(77.975px,90px);
          }
          40.625% {
            transform:translate(79.219px,90px);
          }
          41.146% {
            transform:translate(80.498px,90px);
          }
          41.667% {
            transform:translate(81.81px,90px);
            opacity:1;
          }
          42.188% {
            transform:translate(83.157px,90px);
          }
          42.708% {
            transform:translate(84.537px,90px);
          }
          43.229% {
            transform:translate(85.952px,90px);
          }
          43.75% {
            transform:translate(87.401px,90px);
            opacity:1;
          }
          44.271% {
            transform:translate(88.884px,90px);
          }
          44.792% {
            transform:translate(90.402px,90px);
          }
          45.313% {
            transform:translate(91.953px,90px);
          }
          45.833% {
            transform:translate(93.538px,90px);
            opacity:1;
          }
          46.354% {
            transform:translate(95.141px,90px);
          }
          46.875% {
            transform:translate(96.744px,90px);
          }
          47.396% {
            transform:translate(98.346px,90px);
          }
          47.917% {
            transform:translate(99.949px,90px);
            opacity:1;
          }
          48.438% {
            transform:translate(101.551px,90px);
          }
          48.958% {
            transform:translate(103.154px,90px);
          }
          49.479% {
            transform:translate(104.756px,90px);
          }
          50% {
            transform:translate(106.359px,90px);
            opacity:1;
          }
          50.521% {
            transform:translate(107.962px,90px);
          }
          51.042% {
            transform:translate(109.564px,90px);
          }
          51.563% {
            transform:translate(111.167px,90px);
          }
          52.083% {
            transform:translate(112.769px,90px);
            opacity:1;
          }
          52.604% {
            transform:translate(114.372px,90px);
          }
          53.125% {
            transform:translate(115.974px,90px);
          }
          53.646% {
            transform:translate(117.577px,90px);
          }
          54.167% {
            transform:translate(119.179px,90px);
            opacity:1;
          }
          54.688% {
            transform:translate(120.782px,90px);
          }
          55.208% {
            transform:translate(122.385px,90px);
          }
          55.729% {
            transform:translate(123.987px,90px);
          }
          56.25% {
            transform:translate(125.59px,90px);
            opacity:1;
          }
          56.771% {
            transform:translate(127.192px,90px);
          }
          57.292% {
            transform:translate(128.795px,90px);
          }
          57.813% {
            transform:translate(130.397px,90px);
            opacity:0;
          }
          58.333% {
            transform:translate(10px,90px);
            opacity:0;
            opacity:0;
          }
          58.854% {
            transform:translate(11.111px,90px);
          }
          59.375% {
            transform:translate(12.222px,90px);
          }
          59.896% {
            transform:translate(13.333px,90px);
          }
          60.417% {
            transform:translate(14.444px,90px);
            opacity:0.889;
          }
          60.938% {
            transform:translate(15.556px,90px);
          }
          61.458% {
            transform:translate(16.667px,90px);
          }
          61.979% {
            transform:translate(17.778px,90px);
          }
          62.5% {
            transform:translate(18.889px,90px);
            opacity:1;
          }
          63.021% {
            transform:translate(20px,90px);
          }
          63.542% {
            transform:translate(21.111px,90px);
          }
          64.063% {
            transform:translate(22.222px,90px);
          }
          64.583% {
            transform:translate(23.333px,90px);
            opacity:1;
          }
          65.104% {
            transform:translate(24.444px,90px);
          }
          65.625% {
            transform:translate(25.556px,90px);
          }
          66.146% {
            transform:translate(26.667px,90px);
          }
          66.667% {
            transform:translate(27.778px,90px);
            opacity:1;
          }
          67.188% {
            transform:translate(28.889px,90px);
          }
          67.708% {
            transform:translate(30px,90px);
          }
          68.229% {
            transform:translate(31.111px,90px);
          }
          68.75% {
            transform:translate(32.222px,90px);
            opacity:1;
          }
          69.271% {
            transform:translate(33.333px,90px);
          }
          69.792% {
            transform:translate(34.444px,90px);
          }
          70.313% {
            transform:translate(35.556px,90px);
          }
          70.833% {
            transform:translate(36.667px,90px);
            opacity:1;
          }
          71.354% {
            transform:translate(37.778px,90px);
          }
          71.875% {
            transform:translate(38.889px,90px);
          }
          72.396% {
            transform:translate(40px,90px);
          }
          72.917% {
            transform:translate(41.111px,90px);
            opacity:1;
          }
          73.438% {
            transform:translate(42.222px,90px);
          }
          73.958% {
            transform:translate(43.333px,90px);
          }
          74.479% {
            transform:translate(44.444px,90px);
          }
          75% {
            transform:translate(45.556px,90px);
            opacity:1;
          }
          75.521% {
            transform:translate(46.667px,90px);
          }
          76.042% {
            transform:translate(47.778px,90px);
          }
          76.563% {
            transform:translate(48.889px,90px);
          }
          77.083% {
            transform:translate(50px,90px);
            opacity:1;
          }
          77.604% {
            transform:translate(51.111px,90px);
          }
          78.125% {
            transform:translate(52.222px,90px);
          }
          78.646% {
            transform:translate(53.333px,90px);
          }
          79.167% {
            transform:translate(54.444px,90px);
            opacity:1;
          }
          79.688% {
            transform:translate(55.556px,90px);
          }
          80.208% {
            transform:translate(56.667px,90px);
          }
          80.729% {
            transform:translate(57.778px,90px);
          }
          81.25% {
            transform:translate(58.889px,90px);
            opacity:1;
          }
          81.771% {
            transform:translate(60px,90px);
          }
          82.292% {
            transform:translate(61.111px,90px);
          }
          82.813% {
            transform:translate(62.222px,90px);
          }
          83.333% {
            transform:translate(63.333px,90px);
            opacity:1;
          }
          83.854% {
            transform:translate(64.444px,90px);
          }
          84.375% {
            transform:translate(65.556px,90px);
          }
          84.896% {
            transform:translate(66.667px,90px);
          }
          85.417% {
            transform:translate(67.778px,90px);
            opacity:1;
          }
          85.938% {
            transform:translate(68.889px,90px);
          }
          86.458% {
            transform:translate(70px,90px);
          }
          86.979% {
            transform:translate(71.111px,90px);
          }
          87.5% {
            transform:translate(72.222px,90px);
            opacity:1;
          }
          88.021% {
            transform:translate(73.333px,90px);
          }
          88.542% {
            transform:translate(74.447px,90px);
          }
          89.063% {
            transform:translate(75.589px,90px);
          }
          89.583% {
            transform:translate(76.765px,90px);
            opacity:1;
          }
          90.104% {
            transform:translate(77.975px,90px);
          }
          90.625% {
            transform:translate(79.219px,90px);
          }
          91.146% {
            transform:translate(80.498px,90px);
          }
          91.667% {
            transform:translate(81.81px,90px);
            opacity:1;
          }
          92.188% {
            transform:translate(83.157px,90px);
          }
          92.708% {
            transform:translate(84.537px,90px);
          }
          93.229% {
            transform:translate(85.952px,90px);
          }
          93.75% {
            transform:translate(87.401px,90px);
            opacity:1;
          }
          94.271% {
            transform:translate(88.884px,90px);
          }
          94.792% {
            transform:translate(90.402px,90px);
          }
          95.313% {
            transform:translate(91.953px,90px);
          }
          95.833% {
            transform:translate(93.538px,90px);
            opacity:1;
          }
          96.354% {
            transform:translate(95.141px,90px);
          }
          96.875% {
            transform:translate(96.744px,90px);
          }
          97.396% {
            transform:translate(98.346px,90px);
          }
          97.917% {
            transform:translate(99.949px,90px);
            opacity:1;
          }
          98.438% {
            transform:translate(101.551px,90px);
          }
          98.958% {
            transform:translate(103.154px,90px);
          }
          99.479% {
            transform:translate(104.756px,90px);
          }
          100% {
            transform:translate(106.359px,90px);
            opacity:1;
          }
        }
        @keyframes charge5 {
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
        @keyframes electron0 {
          0% {
            transform:translate(94px,104px);
            opacity:0;
          }
          0.521% {
            transform:translate(94.708px,103.182px);
          }
          1.042% {
            transform:translate(95.417px,102.365px);
          }
          1.563% {
            transform:translate(96.125px,101.55px);
          }
          2.083% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          2.604% {
            transform:translate(97.542px,99.928px);
          }
          3.125% {
            transform:translate(98.25px,99.123px);
          }
          3.646% {
            transform:translate(98.958px,98.323px);
          }
          4.167% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          4.688% {
            transform:translate(100.375px,96.743px);
          }
          5.208% {
            transform:translate(101.083px,95.964px);
          }
          5.729% {
            transform:translate(101.792px,95.194px);
          }
          6.25% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          6.771% {
            transform:translate(103.208px,93.682px);
          }
          7.292% {
            transform:translate(103.917px,92.943px);
          }
          7.813% {
            transform:translate(104.625px,92.215px);
          }
          8.333% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          8.854% {
            transform:translate(106.042px,90.798px);
          }
          9.375% {
            transform:translate(106.75px,90.111px);
          }
          9.896% {
            transform:translate(107.458px,89.438px);
          }
          10.417% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          10.938% {
            transform:translate(108.875px,88.14px);
          }
          11.458% {
            transform:translate(109.583px,87.516px);
          }
          11.979% {
            transform:translate(110.292px,86.91px);
          }
          12.5% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          13.021% {
            transform:translate(111.708px,85.753px);
          }
          13.542% {
            transform:translate(112.417px,85.204px);
          }
          14.063% {
            transform:translate(113.125px,84.675px);
          }
          14.583% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          15.104% {
            transform:translate(114.542px,83.679px);
          }
          15.625% {
            transform:translate(115.25px,83.213px);
          }
          16.146% {
            transform:translate(115.958px,82.77px);
          }
          16.667% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          17.188% {
            transform:translate(117.375px,81.952px);
          }
          17.708% {
            transform:translate(118.083px,81.578px);
          }
          18.229% {
            transform:translate(118.792px,81.228px);
          }
          18.75% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          19.271% {
            transform:translate(120.208px,80.602px);
          }
          19.792% {
            transform:translate(120.917px,80.327px);
          }
          20.313% {
            transform:translate(121.625px,80.076px);
          }
          20.833% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          21.354% {
            transform:translate(123.042px,79.653px);
          }
          21.875% {
            transform:translate(123.75px,79.48px);
          }
          22.396% {
            transform:translate(124.458px,79.334px);
          }
          22.917% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          23.438% {
            transform:translate(125.875px,79.12px);
          }
          23.958% {
            transform:translate(126.583px,79.054px);
          }
          24.479% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          25% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          25.521% {
            transform:translate(94.708px,103.182px);
          }
          26.042% {
            transform:translate(95.417px,102.365px);
          }
          26.563% {
            transform:translate(96.125px,101.55px);
          }
          27.083% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          27.604% {
            transform:translate(97.542px,99.928px);
          }
          28.125% {
            transform:translate(98.25px,99.123px);
          }
          28.646% {
            transform:translate(98.958px,98.323px);
          }
          29.167% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          29.688% {
            transform:translate(100.375px,96.743px);
          }
          30.208% {
            transform:translate(101.083px,95.964px);
          }
          30.729% {
            transform:translate(101.792px,95.194px);
          }
          31.25% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          31.771% {
            transform:translate(103.208px,93.682px);
          }
          32.292% {
            transform:translate(103.917px,92.943px);
          }
          32.813% {
            transform:translate(104.625px,92.215px);
          }
          33.333% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          33.854% {
            transform:translate(106.042px,90.798px);
          }
          34.375% {
            transform:translate(106.75px,90.111px);
          }
          34.896% {
            transform:translate(107.458px,89.438px);
          }
          35.417% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          35.938% {
            transform:translate(108.875px,88.14px);
          }
          36.458% {
            transform:translate(109.583px,87.516px);
          }
          36.979% {
            transform:translate(110.292px,86.91px);
          }
          37.5% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          38.021% {
            transform:translate(111.708px,85.753px);
          }
          38.542% {
            transform:translate(112.417px,85.204px);
          }
          39.063% {
            transform:translate(113.125px,84.675px);
          }
          39.583% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          40.104% {
            transform:translate(114.542px,83.679px);
          }
          40.625% {
            transform:translate(115.25px,83.213px);
          }
          41.146% {
            transform:translate(115.958px,82.77px);
          }
          41.667% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          42.188% {
            transform:translate(117.375px,81.952px);
          }
          42.708% {
            transform:translate(118.083px,81.578px);
          }
          43.229% {
            transform:translate(118.792px,81.228px);
          }
          43.75% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          44.271% {
            transform:translate(120.208px,80.602px);
          }
          44.792% {
            transform:translate(120.917px,80.327px);
          }
          45.313% {
            transform:translate(121.625px,80.076px);
          }
          45.833% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          46.354% {
            transform:translate(123.042px,79.653px);
          }
          46.875% {
            transform:translate(123.75px,79.48px);
          }
          47.396% {
            transform:translate(124.458px,79.334px);
          }
          47.917% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          48.438% {
            transform:translate(125.875px,79.12px);
          }
          48.958% {
            transform:translate(126.583px,79.054px);
          }
          49.479% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          50% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          50.521% {
            transform:translate(94.708px,103.182px);
          }
          51.042% {
            transform:translate(95.417px,102.365px);
          }
          51.563% {
            transform:translate(96.125px,101.55px);
          }
          52.083% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          52.604% {
            transform:translate(97.542px,99.928px);
          }
          53.125% {
            transform:translate(98.25px,99.123px);
          }
          53.646% {
            transform:translate(98.958px,98.323px);
          }
          54.167% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          54.688% {
            transform:translate(100.375px,96.743px);
          }
          55.208% {
            transform:translate(101.083px,95.964px);
          }
          55.729% {
            transform:translate(101.792px,95.194px);
          }
          56.25% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          56.771% {
            transform:translate(103.208px,93.682px);
          }
          57.292% {
            transform:translate(103.917px,92.943px);
          }
          57.813% {
            transform:translate(104.625px,92.215px);
          }
          58.333% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          58.854% {
            transform:translate(106.042px,90.798px);
          }
          59.375% {
            transform:translate(106.75px,90.111px);
          }
          59.896% {
            transform:translate(107.458px,89.438px);
          }
          60.417% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          60.938% {
            transform:translate(108.875px,88.14px);
          }
          61.458% {
            transform:translate(109.583px,87.516px);
          }
          61.979% {
            transform:translate(110.292px,86.91px);
          }
          62.5% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          63.021% {
            transform:translate(111.708px,85.753px);
          }
          63.542% {
            transform:translate(112.417px,85.204px);
          }
          64.063% {
            transform:translate(113.125px,84.675px);
          }
          64.583% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          65.104% {
            transform:translate(114.542px,83.679px);
          }
          65.625% {
            transform:translate(115.25px,83.213px);
          }
          66.146% {
            transform:translate(115.958px,82.77px);
          }
          66.667% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          67.188% {
            transform:translate(117.375px,81.952px);
          }
          67.708% {
            transform:translate(118.083px,81.578px);
          }
          68.229% {
            transform:translate(118.792px,81.228px);
          }
          68.75% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          69.271% {
            transform:translate(120.208px,80.602px);
          }
          69.792% {
            transform:translate(120.917px,80.327px);
          }
          70.313% {
            transform:translate(121.625px,80.076px);
          }
          70.833% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          71.354% {
            transform:translate(123.042px,79.653px);
          }
          71.875% {
            transform:translate(123.75px,79.48px);
          }
          72.396% {
            transform:translate(124.458px,79.334px);
          }
          72.917% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          73.438% {
            transform:translate(125.875px,79.12px);
          }
          73.958% {
            transform:translate(126.583px,79.054px);
          }
          74.479% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          75% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          75.521% {
            transform:translate(94.708px,103.182px);
          }
          76.042% {
            transform:translate(95.417px,102.365px);
          }
          76.563% {
            transform:translate(96.125px,101.55px);
          }
          77.083% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          77.604% {
            transform:translate(97.542px,99.928px);
          }
          78.125% {
            transform:translate(98.25px,99.123px);
          }
          78.646% {
            transform:translate(98.958px,98.323px);
          }
          79.167% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          79.688% {
            transform:translate(100.375px,96.743px);
          }
          80.208% {
            transform:translate(101.083px,95.964px);
          }
          80.729% {
            transform:translate(101.792px,95.194px);
          }
          81.25% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          81.771% {
            transform:translate(103.208px,93.682px);
          }
          82.292% {
            transform:translate(103.917px,92.943px);
          }
          82.813% {
            transform:translate(104.625px,92.215px);
          }
          83.333% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          83.854% {
            transform:translate(106.042px,90.798px);
          }
          84.375% {
            transform:translate(106.75px,90.111px);
          }
          84.896% {
            transform:translate(107.458px,89.438px);
          }
          85.417% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          85.938% {
            transform:translate(108.875px,88.14px);
          }
          86.458% {
            transform:translate(109.583px,87.516px);
          }
          86.979% {
            transform:translate(110.292px,86.91px);
          }
          87.5% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          88.021% {
            transform:translate(111.708px,85.753px);
          }
          88.542% {
            transform:translate(112.417px,85.204px);
          }
          89.063% {
            transform:translate(113.125px,84.675px);
          }
          89.583% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          90.104% {
            transform:translate(114.542px,83.679px);
          }
          90.625% {
            transform:translate(115.25px,83.213px);
          }
          91.146% {
            transform:translate(115.958px,82.77px);
          }
          91.667% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          92.188% {
            transform:translate(117.375px,81.952px);
          }
          92.708% {
            transform:translate(118.083px,81.578px);
          }
          93.229% {
            transform:translate(118.792px,81.228px);
          }
          93.75% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          94.271% {
            transform:translate(120.208px,80.602px);
          }
          94.792% {
            transform:translate(120.917px,80.327px);
          }
          95.313% {
            transform:translate(121.625px,80.076px);
          }
          95.833% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          96.354% {
            transform:translate(123.042px,79.653px);
          }
          96.875% {
            transform:translate(123.75px,79.48px);
          }
          97.396% {
            transform:translate(124.458px,79.334px);
          }
          97.917% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          98.438% {
            transform:translate(125.875px,79.12px);
          }
          98.958% {
            transform:translate(126.583px,79.054px);
          }
          99.479% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          100% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
        }
        @keyframes electron1 {
          0% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          0.521% {
            transform:translate(103.208px,93.682px);
          }
          1.042% {
            transform:translate(103.917px,92.943px);
          }
          1.563% {
            transform:translate(104.625px,92.215px);
          }
          2.083% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          2.604% {
            transform:translate(106.042px,90.798px);
          }
          3.125% {
            transform:translate(106.75px,90.111px);
          }
          3.646% {
            transform:translate(107.458px,89.438px);
          }
          4.167% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          4.688% {
            transform:translate(108.875px,88.14px);
          }
          5.208% {
            transform:translate(109.583px,87.516px);
          }
          5.729% {
            transform:translate(110.292px,86.91px);
          }
          6.25% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          6.771% {
            transform:translate(111.708px,85.753px);
          }
          7.292% {
            transform:translate(112.417px,85.204px);
          }
          7.813% {
            transform:translate(113.125px,84.675px);
          }
          8.333% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          8.854% {
            transform:translate(114.542px,83.679px);
          }
          9.375% {
            transform:translate(115.25px,83.213px);
          }
          9.896% {
            transform:translate(115.958px,82.77px);
          }
          10.417% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          10.938% {
            transform:translate(117.375px,81.952px);
          }
          11.458% {
            transform:translate(118.083px,81.578px);
          }
          11.979% {
            transform:translate(118.792px,81.228px);
          }
          12.5% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          13.021% {
            transform:translate(120.208px,80.602px);
          }
          13.542% {
            transform:translate(120.917px,80.327px);
          }
          14.063% {
            transform:translate(121.625px,80.076px);
          }
          14.583% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          15.104% {
            transform:translate(123.042px,79.653px);
          }
          15.625% {
            transform:translate(123.75px,79.48px);
          }
          16.146% {
            transform:translate(124.458px,79.334px);
          }
          16.667% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          17.188% {
            transform:translate(125.875px,79.12px);
          }
          17.708% {
            transform:translate(126.583px,79.054px);
          }
          18.229% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          18.75% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          19.271% {
            transform:translate(94.708px,103.182px);
          }
          19.792% {
            transform:translate(95.417px,102.365px);
          }
          20.313% {
            transform:translate(96.125px,101.55px);
          }
          20.833% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          21.354% {
            transform:translate(97.542px,99.928px);
          }
          21.875% {
            transform:translate(98.25px,99.123px);
          }
          22.396% {
            transform:translate(98.958px,98.323px);
          }
          22.917% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          23.438% {
            transform:translate(100.375px,96.743px);
          }
          23.958% {
            transform:translate(101.083px,95.964px);
          }
          24.479% {
            transform:translate(101.792px,95.194px);
          }
          25% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          25.521% {
            transform:translate(103.208px,93.682px);
          }
          26.042% {
            transform:translate(103.917px,92.943px);
          }
          26.563% {
            transform:translate(104.625px,92.215px);
          }
          27.083% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          27.604% {
            transform:translate(106.042px,90.798px);
          }
          28.125% {
            transform:translate(106.75px,90.111px);
          }
          28.646% {
            transform:translate(107.458px,89.438px);
          }
          29.167% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          29.688% {
            transform:translate(108.875px,88.14px);
          }
          30.208% {
            transform:translate(109.583px,87.516px);
          }
          30.729% {
            transform:translate(110.292px,86.91px);
          }
          31.25% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          31.771% {
            transform:translate(111.708px,85.753px);
          }
          32.292% {
            transform:translate(112.417px,85.204px);
          }
          32.813% {
            transform:translate(113.125px,84.675px);
          }
          33.333% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          33.854% {
            transform:translate(114.542px,83.679px);
          }
          34.375% {
            transform:translate(115.25px,83.213px);
          }
          34.896% {
            transform:translate(115.958px,82.77px);
          }
          35.417% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          35.938% {
            transform:translate(117.375px,81.952px);
          }
          36.458% {
            transform:translate(118.083px,81.578px);
          }
          36.979% {
            transform:translate(118.792px,81.228px);
          }
          37.5% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          38.021% {
            transform:translate(120.208px,80.602px);
          }
          38.542% {
            transform:translate(120.917px,80.327px);
          }
          39.063% {
            transform:translate(121.625px,80.076px);
          }
          39.583% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          40.104% {
            transform:translate(123.042px,79.653px);
          }
          40.625% {
            transform:translate(123.75px,79.48px);
          }
          41.146% {
            transform:translate(124.458px,79.334px);
          }
          41.667% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          42.188% {
            transform:translate(125.875px,79.12px);
          }
          42.708% {
            transform:translate(126.583px,79.054px);
          }
          43.229% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          43.75% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          44.271% {
            transform:translate(94.708px,103.182px);
          }
          44.792% {
            transform:translate(95.417px,102.365px);
          }
          45.313% {
            transform:translate(96.125px,101.55px);
          }
          45.833% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          46.354% {
            transform:translate(97.542px,99.928px);
          }
          46.875% {
            transform:translate(98.25px,99.123px);
          }
          47.396% {
            transform:translate(98.958px,98.323px);
          }
          47.917% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          48.438% {
            transform:translate(100.375px,96.743px);
          }
          48.958% {
            transform:translate(101.083px,95.964px);
          }
          49.479% {
            transform:translate(101.792px,95.194px);
          }
          50% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          50.521% {
            transform:translate(103.208px,93.682px);
          }
          51.042% {
            transform:translate(103.917px,92.943px);
          }
          51.563% {
            transform:translate(104.625px,92.215px);
          }
          52.083% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          52.604% {
            transform:translate(106.042px,90.798px);
          }
          53.125% {
            transform:translate(106.75px,90.111px);
          }
          53.646% {
            transform:translate(107.458px,89.438px);
          }
          54.167% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          54.688% {
            transform:translate(108.875px,88.14px);
          }
          55.208% {
            transform:translate(109.583px,87.516px);
          }
          55.729% {
            transform:translate(110.292px,86.91px);
          }
          56.25% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          56.771% {
            transform:translate(111.708px,85.753px);
          }
          57.292% {
            transform:translate(112.417px,85.204px);
          }
          57.813% {
            transform:translate(113.125px,84.675px);
          }
          58.333% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          58.854% {
            transform:translate(114.542px,83.679px);
          }
          59.375% {
            transform:translate(115.25px,83.213px);
          }
          59.896% {
            transform:translate(115.958px,82.77px);
          }
          60.417% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          60.938% {
            transform:translate(117.375px,81.952px);
          }
          61.458% {
            transform:translate(118.083px,81.578px);
          }
          61.979% {
            transform:translate(118.792px,81.228px);
          }
          62.5% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          63.021% {
            transform:translate(120.208px,80.602px);
          }
          63.542% {
            transform:translate(120.917px,80.327px);
          }
          64.063% {
            transform:translate(121.625px,80.076px);
          }
          64.583% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          65.104% {
            transform:translate(123.042px,79.653px);
          }
          65.625% {
            transform:translate(123.75px,79.48px);
          }
          66.146% {
            transform:translate(124.458px,79.334px);
          }
          66.667% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          67.188% {
            transform:translate(125.875px,79.12px);
          }
          67.708% {
            transform:translate(126.583px,79.054px);
          }
          68.229% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          68.75% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          69.271% {
            transform:translate(94.708px,103.182px);
          }
          69.792% {
            transform:translate(95.417px,102.365px);
          }
          70.313% {
            transform:translate(96.125px,101.55px);
          }
          70.833% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          71.354% {
            transform:translate(97.542px,99.928px);
          }
          71.875% {
            transform:translate(98.25px,99.123px);
          }
          72.396% {
            transform:translate(98.958px,98.323px);
          }
          72.917% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          73.438% {
            transform:translate(100.375px,96.743px);
          }
          73.958% {
            transform:translate(101.083px,95.964px);
          }
          74.479% {
            transform:translate(101.792px,95.194px);
          }
          75% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          75.521% {
            transform:translate(103.208px,93.682px);
          }
          76.042% {
            transform:translate(103.917px,92.943px);
          }
          76.563% {
            transform:translate(104.625px,92.215px);
          }
          77.083% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          77.604% {
            transform:translate(106.042px,90.798px);
          }
          78.125% {
            transform:translate(106.75px,90.111px);
          }
          78.646% {
            transform:translate(107.458px,89.438px);
          }
          79.167% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          79.688% {
            transform:translate(108.875px,88.14px);
          }
          80.208% {
            transform:translate(109.583px,87.516px);
          }
          80.729% {
            transform:translate(110.292px,86.91px);
          }
          81.25% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          81.771% {
            transform:translate(111.708px,85.753px);
          }
          82.292% {
            transform:translate(112.417px,85.204px);
          }
          82.813% {
            transform:translate(113.125px,84.675px);
          }
          83.333% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          83.854% {
            transform:translate(114.542px,83.679px);
          }
          84.375% {
            transform:translate(115.25px,83.213px);
          }
          84.896% {
            transform:translate(115.958px,82.77px);
          }
          85.417% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          85.938% {
            transform:translate(117.375px,81.952px);
          }
          86.458% {
            transform:translate(118.083px,81.578px);
          }
          86.979% {
            transform:translate(118.792px,81.228px);
          }
          87.5% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          88.021% {
            transform:translate(120.208px,80.602px);
          }
          88.542% {
            transform:translate(120.917px,80.327px);
          }
          89.063% {
            transform:translate(121.625px,80.076px);
          }
          89.583% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          90.104% {
            transform:translate(123.042px,79.653px);
          }
          90.625% {
            transform:translate(123.75px,79.48px);
          }
          91.146% {
            transform:translate(124.458px,79.334px);
          }
          91.667% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          92.188% {
            transform:translate(125.875px,79.12px);
          }
          92.708% {
            transform:translate(126.583px,79.054px);
          }
          93.229% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          93.75% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          94.271% {
            transform:translate(94.708px,103.182px);
          }
          94.792% {
            transform:translate(95.417px,102.365px);
          }
          95.313% {
            transform:translate(96.125px,101.55px);
          }
          95.833% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          96.354% {
            transform:translate(97.542px,99.928px);
          }
          96.875% {
            transform:translate(98.25px,99.123px);
          }
          97.396% {
            transform:translate(98.958px,98.323px);
          }
          97.917% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          98.438% {
            transform:translate(100.375px,96.743px);
          }
          98.958% {
            transform:translate(101.083px,95.964px);
          }
          99.479% {
            transform:translate(101.792px,95.194px);
          }
          100% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
        }
        @keyframes electron2 {
          0% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          0.521% {
            transform:translate(111.708px,85.753px);
          }
          1.042% {
            transform:translate(112.417px,85.204px);
          }
          1.563% {
            transform:translate(113.125px,84.675px);
          }
          2.083% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          2.604% {
            transform:translate(114.542px,83.679px);
          }
          3.125% {
            transform:translate(115.25px,83.213px);
          }
          3.646% {
            transform:translate(115.958px,82.77px);
          }
          4.167% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          4.688% {
            transform:translate(117.375px,81.952px);
          }
          5.208% {
            transform:translate(118.083px,81.578px);
          }
          5.729% {
            transform:translate(118.792px,81.228px);
          }
          6.25% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          6.771% {
            transform:translate(120.208px,80.602px);
          }
          7.292% {
            transform:translate(120.917px,80.327px);
          }
          7.813% {
            transform:translate(121.625px,80.076px);
          }
          8.333% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          8.854% {
            transform:translate(123.042px,79.653px);
          }
          9.375% {
            transform:translate(123.75px,79.48px);
          }
          9.896% {
            transform:translate(124.458px,79.334px);
          }
          10.417% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          10.938% {
            transform:translate(125.875px,79.12px);
          }
          11.458% {
            transform:translate(126.583px,79.054px);
          }
          11.979% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          12.5% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          13.021% {
            transform:translate(94.708px,103.182px);
          }
          13.542% {
            transform:translate(95.417px,102.365px);
          }
          14.063% {
            transform:translate(96.125px,101.55px);
          }
          14.583% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          15.104% {
            transform:translate(97.542px,99.928px);
          }
          15.625% {
            transform:translate(98.25px,99.123px);
          }
          16.146% {
            transform:translate(98.958px,98.323px);
          }
          16.667% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          17.188% {
            transform:translate(100.375px,96.743px);
          }
          17.708% {
            transform:translate(101.083px,95.964px);
          }
          18.229% {
            transform:translate(101.792px,95.194px);
          }
          18.75% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          19.271% {
            transform:translate(103.208px,93.682px);
          }
          19.792% {
            transform:translate(103.917px,92.943px);
          }
          20.313% {
            transform:translate(104.625px,92.215px);
          }
          20.833% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          21.354% {
            transform:translate(106.042px,90.798px);
          }
          21.875% {
            transform:translate(106.75px,90.111px);
          }
          22.396% {
            transform:translate(107.458px,89.438px);
          }
          22.917% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          23.438% {
            transform:translate(108.875px,88.14px);
          }
          23.958% {
            transform:translate(109.583px,87.516px);
          }
          24.479% {
            transform:translate(110.292px,86.91px);
          }
          25% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          25.521% {
            transform:translate(111.708px,85.753px);
          }
          26.042% {
            transform:translate(112.417px,85.204px);
          }
          26.563% {
            transform:translate(113.125px,84.675px);
          }
          27.083% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          27.604% {
            transform:translate(114.542px,83.679px);
          }
          28.125% {
            transform:translate(115.25px,83.213px);
          }
          28.646% {
            transform:translate(115.958px,82.77px);
          }
          29.167% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          29.688% {
            transform:translate(117.375px,81.952px);
          }
          30.208% {
            transform:translate(118.083px,81.578px);
          }
          30.729% {
            transform:translate(118.792px,81.228px);
          }
          31.25% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          31.771% {
            transform:translate(120.208px,80.602px);
          }
          32.292% {
            transform:translate(120.917px,80.327px);
          }
          32.813% {
            transform:translate(121.625px,80.076px);
          }
          33.333% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          33.854% {
            transform:translate(123.042px,79.653px);
          }
          34.375% {
            transform:translate(123.75px,79.48px);
          }
          34.896% {
            transform:translate(124.458px,79.334px);
          }
          35.417% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          35.938% {
            transform:translate(125.875px,79.12px);
          }
          36.458% {
            transform:translate(126.583px,79.054px);
          }
          36.979% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          37.5% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          38.021% {
            transform:translate(94.708px,103.182px);
          }
          38.542% {
            transform:translate(95.417px,102.365px);
          }
          39.063% {
            transform:translate(96.125px,101.55px);
          }
          39.583% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          40.104% {
            transform:translate(97.542px,99.928px);
          }
          40.625% {
            transform:translate(98.25px,99.123px);
          }
          41.146% {
            transform:translate(98.958px,98.323px);
          }
          41.667% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          42.188% {
            transform:translate(100.375px,96.743px);
          }
          42.708% {
            transform:translate(101.083px,95.964px);
          }
          43.229% {
            transform:translate(101.792px,95.194px);
          }
          43.75% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          44.271% {
            transform:translate(103.208px,93.682px);
          }
          44.792% {
            transform:translate(103.917px,92.943px);
          }
          45.313% {
            transform:translate(104.625px,92.215px);
          }
          45.833% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          46.354% {
            transform:translate(106.042px,90.798px);
          }
          46.875% {
            transform:translate(106.75px,90.111px);
          }
          47.396% {
            transform:translate(107.458px,89.438px);
          }
          47.917% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          48.438% {
            transform:translate(108.875px,88.14px);
          }
          48.958% {
            transform:translate(109.583px,87.516px);
          }
          49.479% {
            transform:translate(110.292px,86.91px);
          }
          50% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          50.521% {
            transform:translate(111.708px,85.753px);
          }
          51.042% {
            transform:translate(112.417px,85.204px);
          }
          51.563% {
            transform:translate(113.125px,84.675px);
          }
          52.083% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          52.604% {
            transform:translate(114.542px,83.679px);
          }
          53.125% {
            transform:translate(115.25px,83.213px);
          }
          53.646% {
            transform:translate(115.958px,82.77px);
          }
          54.167% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          54.688% {
            transform:translate(117.375px,81.952px);
          }
          55.208% {
            transform:translate(118.083px,81.578px);
          }
          55.729% {
            transform:translate(118.792px,81.228px);
          }
          56.25% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          56.771% {
            transform:translate(120.208px,80.602px);
          }
          57.292% {
            transform:translate(120.917px,80.327px);
          }
          57.813% {
            transform:translate(121.625px,80.076px);
          }
          58.333% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          58.854% {
            transform:translate(123.042px,79.653px);
          }
          59.375% {
            transform:translate(123.75px,79.48px);
          }
          59.896% {
            transform:translate(124.458px,79.334px);
          }
          60.417% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          60.938% {
            transform:translate(125.875px,79.12px);
          }
          61.458% {
            transform:translate(126.583px,79.054px);
          }
          61.979% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          62.5% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          63.021% {
            transform:translate(94.708px,103.182px);
          }
          63.542% {
            transform:translate(95.417px,102.365px);
          }
          64.063% {
            transform:translate(96.125px,101.55px);
          }
          64.583% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          65.104% {
            transform:translate(97.542px,99.928px);
          }
          65.625% {
            transform:translate(98.25px,99.123px);
          }
          66.146% {
            transform:translate(98.958px,98.323px);
          }
          66.667% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          67.188% {
            transform:translate(100.375px,96.743px);
          }
          67.708% {
            transform:translate(101.083px,95.964px);
          }
          68.229% {
            transform:translate(101.792px,95.194px);
          }
          68.75% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          69.271% {
            transform:translate(103.208px,93.682px);
          }
          69.792% {
            transform:translate(103.917px,92.943px);
          }
          70.313% {
            transform:translate(104.625px,92.215px);
          }
          70.833% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          71.354% {
            transform:translate(106.042px,90.798px);
          }
          71.875% {
            transform:translate(106.75px,90.111px);
          }
          72.396% {
            transform:translate(107.458px,89.438px);
          }
          72.917% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          73.438% {
            transform:translate(108.875px,88.14px);
          }
          73.958% {
            transform:translate(109.583px,87.516px);
          }
          74.479% {
            transform:translate(110.292px,86.91px);
          }
          75% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          75.521% {
            transform:translate(111.708px,85.753px);
          }
          76.042% {
            transform:translate(112.417px,85.204px);
          }
          76.563% {
            transform:translate(113.125px,84.675px);
          }
          77.083% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          77.604% {
            transform:translate(114.542px,83.679px);
          }
          78.125% {
            transform:translate(115.25px,83.213px);
          }
          78.646% {
            transform:translate(115.958px,82.77px);
          }
          79.167% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          79.688% {
            transform:translate(117.375px,81.952px);
          }
          80.208% {
            transform:translate(118.083px,81.578px);
          }
          80.729% {
            transform:translate(118.792px,81.228px);
          }
          81.25% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          81.771% {
            transform:translate(120.208px,80.602px);
          }
          82.292% {
            transform:translate(120.917px,80.327px);
          }
          82.813% {
            transform:translate(121.625px,80.076px);
          }
          83.333% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          83.854% {
            transform:translate(123.042px,79.653px);
          }
          84.375% {
            transform:translate(123.75px,79.48px);
          }
          84.896% {
            transform:translate(124.458px,79.334px);
          }
          85.417% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          85.938% {
            transform:translate(125.875px,79.12px);
          }
          86.458% {
            transform:translate(126.583px,79.054px);
          }
          86.979% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          87.5% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          88.021% {
            transform:translate(94.708px,103.182px);
          }
          88.542% {
            transform:translate(95.417px,102.365px);
          }
          89.063% {
            transform:translate(96.125px,101.55px);
          }
          89.583% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          90.104% {
            transform:translate(97.542px,99.928px);
          }
          90.625% {
            transform:translate(98.25px,99.123px);
          }
          91.146% {
            transform:translate(98.958px,98.323px);
          }
          91.667% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          92.188% {
            transform:translate(100.375px,96.743px);
          }
          92.708% {
            transform:translate(101.083px,95.964px);
          }
          93.229% {
            transform:translate(101.792px,95.194px);
          }
          93.75% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          94.271% {
            transform:translate(103.208px,93.682px);
          }
          94.792% {
            transform:translate(103.917px,92.943px);
          }
          95.313% {
            transform:translate(104.625px,92.215px);
          }
          95.833% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          96.354% {
            transform:translate(106.042px,90.798px);
          }
          96.875% {
            transform:translate(106.75px,90.111px);
          }
          97.396% {
            transform:translate(107.458px,89.438px);
          }
          97.917% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          98.438% {
            transform:translate(108.875px,88.14px);
          }
          98.958% {
            transform:translate(109.583px,87.516px);
          }
          99.479% {
            transform:translate(110.292px,86.91px);
          }
          100% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
        }
        @keyframes electron3 {
          0% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          0.521% {
            transform:translate(120.208px,80.602px);
          }
          1.042% {
            transform:translate(120.917px,80.327px);
          }
          1.563% {
            transform:translate(121.625px,80.076px);
          }
          2.083% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          2.604% {
            transform:translate(123.042px,79.653px);
          }
          3.125% {
            transform:translate(123.75px,79.48px);
          }
          3.646% {
            transform:translate(124.458px,79.334px);
          }
          4.167% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          4.688% {
            transform:translate(125.875px,79.12px);
          }
          5.208% {
            transform:translate(126.583px,79.054px);
          }
          5.729% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          6.25% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          6.771% {
            transform:translate(94.708px,103.182px);
          }
          7.292% {
            transform:translate(95.417px,102.365px);
          }
          7.813% {
            transform:translate(96.125px,101.55px);
          }
          8.333% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          8.854% {
            transform:translate(97.542px,99.928px);
          }
          9.375% {
            transform:translate(98.25px,99.123px);
          }
          9.896% {
            transform:translate(98.958px,98.323px);
          }
          10.417% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          10.938% {
            transform:translate(100.375px,96.743px);
          }
          11.458% {
            transform:translate(101.083px,95.964px);
          }
          11.979% {
            transform:translate(101.792px,95.194px);
          }
          12.5% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          13.021% {
            transform:translate(103.208px,93.682px);
          }
          13.542% {
            transform:translate(103.917px,92.943px);
          }
          14.063% {
            transform:translate(104.625px,92.215px);
          }
          14.583% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          15.104% {
            transform:translate(106.042px,90.798px);
          }
          15.625% {
            transform:translate(106.75px,90.111px);
          }
          16.146% {
            transform:translate(107.458px,89.438px);
          }
          16.667% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          17.188% {
            transform:translate(108.875px,88.14px);
          }
          17.708% {
            transform:translate(109.583px,87.516px);
          }
          18.229% {
            transform:translate(110.292px,86.91px);
          }
          18.75% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          19.271% {
            transform:translate(111.708px,85.753px);
          }
          19.792% {
            transform:translate(112.417px,85.204px);
          }
          20.313% {
            transform:translate(113.125px,84.675px);
          }
          20.833% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          21.354% {
            transform:translate(114.542px,83.679px);
          }
          21.875% {
            transform:translate(115.25px,83.213px);
          }
          22.396% {
            transform:translate(115.958px,82.77px);
          }
          22.917% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          23.438% {
            transform:translate(117.375px,81.952px);
          }
          23.958% {
            transform:translate(118.083px,81.578px);
          }
          24.479% {
            transform:translate(118.792px,81.228px);
          }
          25% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          25.521% {
            transform:translate(120.208px,80.602px);
          }
          26.042% {
            transform:translate(120.917px,80.327px);
          }
          26.563% {
            transform:translate(121.625px,80.076px);
          }
          27.083% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          27.604% {
            transform:translate(123.042px,79.653px);
          }
          28.125% {
            transform:translate(123.75px,79.48px);
          }
          28.646% {
            transform:translate(124.458px,79.334px);
          }
          29.167% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          29.688% {
            transform:translate(125.875px,79.12px);
          }
          30.208% {
            transform:translate(126.583px,79.054px);
          }
          30.729% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          31.25% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          31.771% {
            transform:translate(94.708px,103.182px);
          }
          32.292% {
            transform:translate(95.417px,102.365px);
          }
          32.813% {
            transform:translate(96.125px,101.55px);
          }
          33.333% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          33.854% {
            transform:translate(97.542px,99.928px);
          }
          34.375% {
            transform:translate(98.25px,99.123px);
          }
          34.896% {
            transform:translate(98.958px,98.323px);
          }
          35.417% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          35.938% {
            transform:translate(100.375px,96.743px);
          }
          36.458% {
            transform:translate(101.083px,95.964px);
          }
          36.979% {
            transform:translate(101.792px,95.194px);
          }
          37.5% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          38.021% {
            transform:translate(103.208px,93.682px);
          }
          38.542% {
            transform:translate(103.917px,92.943px);
          }
          39.063% {
            transform:translate(104.625px,92.215px);
          }
          39.583% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          40.104% {
            transform:translate(106.042px,90.798px);
          }
          40.625% {
            transform:translate(106.75px,90.111px);
          }
          41.146% {
            transform:translate(107.458px,89.438px);
          }
          41.667% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          42.188% {
            transform:translate(108.875px,88.14px);
          }
          42.708% {
            transform:translate(109.583px,87.516px);
          }
          43.229% {
            transform:translate(110.292px,86.91px);
          }
          43.75% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          44.271% {
            transform:translate(111.708px,85.753px);
          }
          44.792% {
            transform:translate(112.417px,85.204px);
          }
          45.313% {
            transform:translate(113.125px,84.675px);
          }
          45.833% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          46.354% {
            transform:translate(114.542px,83.679px);
          }
          46.875% {
            transform:translate(115.25px,83.213px);
          }
          47.396% {
            transform:translate(115.958px,82.77px);
          }
          47.917% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          48.438% {
            transform:translate(117.375px,81.952px);
          }
          48.958% {
            transform:translate(118.083px,81.578px);
          }
          49.479% {
            transform:translate(118.792px,81.228px);
          }
          50% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          50.521% {
            transform:translate(120.208px,80.602px);
          }
          51.042% {
            transform:translate(120.917px,80.327px);
          }
          51.563% {
            transform:translate(121.625px,80.076px);
          }
          52.083% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          52.604% {
            transform:translate(123.042px,79.653px);
          }
          53.125% {
            transform:translate(123.75px,79.48px);
          }
          53.646% {
            transform:translate(124.458px,79.334px);
          }
          54.167% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          54.688% {
            transform:translate(125.875px,79.12px);
          }
          55.208% {
            transform:translate(126.583px,79.054px);
          }
          55.729% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          56.25% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          56.771% {
            transform:translate(94.708px,103.182px);
          }
          57.292% {
            transform:translate(95.417px,102.365px);
          }
          57.813% {
            transform:translate(96.125px,101.55px);
          }
          58.333% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          58.854% {
            transform:translate(97.542px,99.928px);
          }
          59.375% {
            transform:translate(98.25px,99.123px);
          }
          59.896% {
            transform:translate(98.958px,98.323px);
          }
          60.417% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          60.938% {
            transform:translate(100.375px,96.743px);
          }
          61.458% {
            transform:translate(101.083px,95.964px);
          }
          61.979% {
            transform:translate(101.792px,95.194px);
          }
          62.5% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          63.021% {
            transform:translate(103.208px,93.682px);
          }
          63.542% {
            transform:translate(103.917px,92.943px);
          }
          64.063% {
            transform:translate(104.625px,92.215px);
          }
          64.583% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          65.104% {
            transform:translate(106.042px,90.798px);
          }
          65.625% {
            transform:translate(106.75px,90.111px);
          }
          66.146% {
            transform:translate(107.458px,89.438px);
          }
          66.667% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          67.188% {
            transform:translate(108.875px,88.14px);
          }
          67.708% {
            transform:translate(109.583px,87.516px);
          }
          68.229% {
            transform:translate(110.292px,86.91px);
          }
          68.75% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          69.271% {
            transform:translate(111.708px,85.753px);
          }
          69.792% {
            transform:translate(112.417px,85.204px);
          }
          70.313% {
            transform:translate(113.125px,84.675px);
          }
          70.833% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          71.354% {
            transform:translate(114.542px,83.679px);
          }
          71.875% {
            transform:translate(115.25px,83.213px);
          }
          72.396% {
            transform:translate(115.958px,82.77px);
          }
          72.917% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          73.438% {
            transform:translate(117.375px,81.952px);
          }
          73.958% {
            transform:translate(118.083px,81.578px);
          }
          74.479% {
            transform:translate(118.792px,81.228px);
          }
          75% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
          75.521% {
            transform:translate(120.208px,80.602px);
          }
          76.042% {
            transform:translate(120.917px,80.327px);
          }
          76.563% {
            transform:translate(121.625px,80.076px);
          }
          77.083% {
            transform:translate(122.333px,79.852px);
            opacity:0.5;
          }
          77.604% {
            transform:translate(123.042px,79.653px);
          }
          78.125% {
            transform:translate(123.75px,79.48px);
          }
          78.646% {
            transform:translate(124.458px,79.334px);
          }
          79.167% {
            transform:translate(125.167px,79.214px);
            opacity:0.259;
          }
          79.688% {
            transform:translate(125.875px,79.12px);
          }
          80.208% {
            transform:translate(126.583px,79.054px);
          }
          80.729% {
            transform:translate(127.292px,79.013px);
            opacity:0;
          }
          81.25% {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          81.771% {
            transform:translate(94.708px,103.182px);
          }
          82.292% {
            transform:translate(95.417px,102.365px);
          }
          82.813% {
            transform:translate(96.125px,101.55px);
          }
          83.333% {
            transform:translate(96.833px,100.737px);
            opacity:0.259;
          }
          83.854% {
            transform:translate(97.542px,99.928px);
          }
          84.375% {
            transform:translate(98.25px,99.123px);
          }
          84.896% {
            transform:translate(98.958px,98.323px);
          }
          85.417% {
            transform:translate(99.667px,97.53px);
            opacity:0.5;
          }
          85.938% {
            transform:translate(100.375px,96.743px);
          }
          86.458% {
            transform:translate(101.083px,95.964px);
          }
          86.979% {
            transform:translate(101.792px,95.194px);
          }
          87.5% {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          88.021% {
            transform:translate(103.208px,93.682px);
          }
          88.542% {
            transform:translate(103.917px,92.943px);
          }
          89.063% {
            transform:translate(104.625px,92.215px);
          }
          89.583% {
            transform:translate(105.333px,91.5px);
            opacity:0.866;
          }
          90.104% {
            transform:translate(106.042px,90.798px);
          }
          90.625% {
            transform:translate(106.75px,90.111px);
          }
          91.146% {
            transform:translate(107.458px,89.438px);
          }
          91.667% {
            transform:translate(108.167px,88.781px);
            opacity:0.966;
          }
          92.188% {
            transform:translate(108.875px,88.14px);
          }
          92.708% {
            transform:translate(109.583px,87.516px);
          }
          93.229% {
            transform:translate(110.292px,86.91px);
          }
          93.75% {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          94.271% {
            transform:translate(111.708px,85.753px);
          }
          94.792% {
            transform:translate(112.417px,85.204px);
          }
          95.313% {
            transform:translate(113.125px,84.675px);
          }
          95.833% {
            transform:translate(113.833px,84.166px);
            opacity:0.966;
          }
          96.354% {
            transform:translate(114.542px,83.679px);
          }
          96.875% {
            transform:translate(115.25px,83.213px);
          }
          97.396% {
            transform:translate(115.958px,82.77px);
          }
          97.917% {
            transform:translate(116.667px,82.349px);
            opacity:0.866;
          }
          98.438% {
            transform:translate(117.375px,81.952px);
          }
          98.958% {
            transform:translate(118.083px,81.578px);
          }
          99.479% {
            transform:translate(118.792px,81.228px);
          }
          100% {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .ion0 {
            transform:translate(63.333px,50px);
            opacity:1;
          }
          .charge0 {
            opacity:1;
          }
          .ion1 {
            transform:translate(81.81px,70px);
            opacity:1;
          }
          .charge1 {
            opacity:1;
          }
          .ion2 {
            transform:translate(106.359px,90px);
            opacity:1;
          }
          .charge2 {
            opacity:1;
          }
          .ion3 {
            transform:translate(10px,50px);
            opacity:0;
            opacity:0;
          }
          .charge3 {
            opacity:0;
          }
          .ion4 {
            transform:translate(27.778px,70px);
            opacity:1;
          }
          .charge4 {
            opacity:0;
          }
          .ion5 {
            transform:translate(45.556px,90px);
            opacity:1;
          }
          .charge5 {
            opacity:1;
          }
          .electron0 {
            transform:translate(94px,104px);
            opacity:0;
            opacity:0;
          }
          .electron1 {
            transform:translate(102.5px,94.433px);
            opacity:0.707;
          }
          .electron2 {
            transform:translate(111px,86.322px);
            opacity:1;
          }
          .electron3 {
            transform:translate(119.5px,80.903px);
            opacity:0.707;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Gridded Ion Thruster">
        <path d="M20 41H69V100H20Z" fill="#183d43" stroke="#a0b8b2"/>
        <path d="M8 70H20M23 48H62M23 92H62" stroke="#c4b486" fill="none" stroke-width="2"/>
        <rect x="27" y="62" width="6" height="16" fill="#657c6d"/>
        <path d="M76 38V46M76 54V66M76 74V86M76 94V103M85 38V46M85 54V66M85 74V86M85 94V103" stroke="#bfc8ac" stroke-width="3"/>
        <path d="M73 29H79M76 26V32M82 29H88" stroke="#e3c889" stroke-width="1.5"/>
        <path d="M85 111H95V101" stroke="#bfa97c" stroke-width="3" fill="none"/>
        <path d="M34 69Q40 55 49 67" stroke="#83bdd5" stroke-dasharray="2 3" fill="none"/>
        <g class="ion0">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#dbca8e"/>
          <path d="M-1.5 0H1.5M0 -1.5V1.5" class="charge0" stroke="#eddaa3" stroke-width=".8"/>
        </g>
        <g class="ion1">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#dbca8e"/>
          <path d="M-1.5 0H1.5M0 -1.5V1.5" class="charge1" stroke="#eddaa3" stroke-width=".8"/>
        </g>
        <g class="ion2">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#dbca8e"/>
          <path d="M-1.5 0H1.5M0 -1.5V1.5" class="charge2" stroke="#eddaa3" stroke-width=".8"/>
        </g>
        <g class="ion3">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#dbca8e"/>
          <path d="M-1.5 0H1.5M0 -1.5V1.5" class="charge3" stroke="#eddaa3" stroke-width=".8"/>
        </g>
        <g class="ion4">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#dbca8e"/>
          <path d="M-1.5 0H1.5M0 -1.5V1.5" class="charge4" stroke="#eddaa3" stroke-width=".8"/>
        </g>
        <g class="ion5">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#dbca8e"/>
          <path d="M-1.5 0H1.5M0 -1.5V1.5" class="charge5" stroke="#eddaa3" stroke-width=".8"/>
        </g>
        <path d="M-1.5 0H1.5" class="electron0" stroke="#7fcee2" stroke-width="1"/>
        <path d="M-1.5 0H1.5" class="electron1" stroke="#7fcee2" stroke-width="1"/>
        <path d="M-1.5 0H1.5" class="electron2" stroke="#7fcee2" stroke-width="1"/>
        <path d="M-1.5 0H1.5" class="electron3" stroke="#7fcee2" stroke-width="1"/>
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

if (!customElements.get("concept-gridded-ion-thruster")) {
  customElements.define("concept-gridded-ion-thruster", ConceptGriddedIonThruster);
}
