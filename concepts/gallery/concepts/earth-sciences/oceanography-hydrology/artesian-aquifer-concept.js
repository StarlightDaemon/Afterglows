// Artesian Aquifer. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptArtesianAquifer extends HTMLElement {
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
        .rise {
          animation:rise 16s linear infinite;
        }
        .rise {
          animation:rise 16s linear infinite;
        }
        .seep0 {
          animation:seep0 16s linear infinite;
        }
        .seep0 {
          animation:seep0 16s linear infinite;
        }
        .seep1 {
          animation:seep1 16s linear infinite;
        }
        .seep1 {
          animation:seep1 16s linear infinite;
        }
        .seep2 {
          animation:seep2 16s linear infinite;
        }
        .seep2 {
          animation:seep2 16s linear infinite;
        }
        .seep3 {
          animation:seep3 16s linear infinite;
        }
        .seep3 {
          animation:seep3 16s linear infinite;
        }
        .seep4 {
          animation:seep4 16s linear infinite;
        }
        .seep4 {
          animation:seep4 16s linear infinite;
        }
        @keyframes rise {
          0% {
            d:path('M98.5 92V92');
            opacity:1;
          }
          2.083% {
            d:path('M98.5 92V91.803');
            opacity:1;
          }
          4.167% {
            d:path('M98.5 92V91.233');
            opacity:1;
          }
          6.25% {
            d:path('M98.5 92V90.324');
            opacity:1;
          }
          8.333% {
            d:path('M98.5 92V89.111');
            opacity:1;
          }
          10.417% {
            d:path('M98.5 92V87.627');
            opacity:1;
          }
          12.5% {
            d:path('M98.5 92V85.906');
            opacity:1;
          }
          14.583% {
            d:path('M98.5 92V83.982');
            opacity:1;
          }
          16.667% {
            d:path('M98.5 92V81.889');
            opacity:1;
          }
          18.75% {
            d:path('M98.5 92V79.66');
            opacity:1;
          }
          20.833% {
            d:path('M98.5 92V77.33');
            opacity:1;
          }
          22.917% {
            d:path('M98.5 92V74.932');
            opacity:1;
          }
          25% {
            d:path('M98.5 92V72.5');
            opacity:1;
          }
          27.083% {
            d:path('M98.5 92V70.068');
            opacity:1;
          }
          29.167% {
            d:path('M98.5 92V67.67');
            opacity:1;
          }
          31.25% {
            d:path('M98.5 92V65.34');
            opacity:1;
          }
          33.333% {
            d:path('M98.5 92V63.111');
            opacity:1;
          }
          35.417% {
            d:path('M98.5 92V61.018');
            opacity:1;
          }
          37.5% {
            d:path('M98.5 92V59.094');
            opacity:1;
          }
          39.583% {
            d:path('M98.5 92V57.373');
            opacity:1;
          }
          41.667% {
            d:path('M98.5 92V55.889');
            opacity:1;
          }
          43.75% {
            d:path('M98.5 92V54.676');
            opacity:1;
          }
          45.833% {
            d:path('M98.5 92V53.767');
            opacity:1;
          }
          47.917% {
            d:path('M98.5 92V53.197');
            opacity:1;
          }
          50% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          52.083% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          54.167% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          56.25% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          58.333% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          60.417% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          62.5% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          64.583% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          66.667% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          68.75% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          70.833% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          72.917% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          75% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          77.083% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          79.167% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          81.25% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          83.333% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          85.417% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          87.5% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          89.583% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          91.667% {
            d:path('M98.5 92V53');
            opacity:1;
          }
          93.75% {
            d:path('M98.5 92V53');
            opacity:0.877;
          }
          95.833% {
            d:path('M98.5 92V53');
            opacity:0.531;
          }
          97.917% {
            d:path('M98.5 92V53');
            opacity:0.168;
          }
          100% {
            d:path('M98.5 92V53');
            opacity:0;
          }
        }
        @keyframes seep0 {
          0% {
            transform:translate(14px,53px);
            opacity:0;
          }
          2.083% {
            transform:translate(16.354px,54.877px);
            opacity:0.313;
          }
          4.167% {
            transform:translate(18.708px,56.674px);
            opacity:0.625;
          }
          6.25% {
            transform:translate(21.063px,58.394px);
            opacity:0.938;
          }
          8.333% {
            transform:translate(23.417px,60.041px);
            opacity:1;
          }
          10.417% {
            transform:translate(25.771px,61.618px);
            opacity:1;
          }
          12.5% {
            transform:translate(28.125px,63.127px);
            opacity:1;
          }
          14.583% {
            transform:translate(30.479px,64.572px);
            opacity:1;
          }
          16.667% {
            transform:translate(32.833px,65.955px);
            opacity:1;
          }
          18.75% {
            transform:translate(35.188px,67.28px);
            opacity:1;
          }
          20.833% {
            transform:translate(37.542px,68.548px);
            opacity:1;
          }
          22.917% {
            transform:translate(39.896px,69.761px);
            opacity:1;
          }
          25% {
            transform:translate(42.25px,70.923px);
            opacity:1;
          }
          27.083% {
            transform:translate(44.604px,72.036px);
            opacity:1;
          }
          29.167% {
            transform:translate(46.958px,73.101px);
            opacity:1;
          }
          31.25% {
            transform:translate(49.313px,74.12px);
            opacity:1;
          }
          33.333% {
            transform:translate(51.667px,75.096px);
            opacity:1;
          }
          35.417% {
            transform:translate(54.021px,76.031px);
            opacity:1;
          }
          37.5% {
            transform:translate(56.375px,76.925px);
            opacity:1;
          }
          39.583% {
            transform:translate(58.729px,77.782px);
            opacity:1;
          }
          41.667% {
            transform:translate(61.083px,78.601px);
            opacity:1;
          }
          43.75% {
            transform:translate(63.438px,79.386px);
            opacity:1;
          }
          45.833% {
            transform:translate(65.792px,80.138px);
            opacity:1;
          }
          47.917% {
            transform:translate(68.146px,80.857px);
            opacity:1;
          }
          50% {
            transform:translate(70.5px,81.546px);
            opacity:1;
          }
          52.083% {
            transform:translate(72.854px,82.205px);
            opacity:1;
          }
          54.167% {
            transform:translate(75.208px,82.836px);
            opacity:1;
          }
          56.25% {
            transform:translate(77.563px,83.44px);
            opacity:1;
          }
          58.333% {
            transform:translate(79.917px,84.019px);
            opacity:1;
          }
          60.417% {
            transform:translate(82.271px,84.572px);
            opacity:1;
          }
          62.5% {
            transform:translate(84.625px,85.103px);
            opacity:1;
          }
          64.583% {
            transform:translate(86.979px,85.61px);
            opacity:1;
          }
          66.667% {
            transform:translate(89.333px,86.096px);
            opacity:1;
          }
          68.75% {
            transform:translate(91.688px,86.561px);
            opacity:1;
          }
          70.833% {
            transform:translate(94.042px,87.006px);
            opacity:1;
          }
          72.917% {
            transform:translate(96.396px,87.433px);
            opacity:1;
          }
          75% {
            transform:translate(98.75px,87.841px);
            opacity:1;
          }
          77.083% {
            transform:translate(101.104px,88.232px);
            opacity:1;
          }
          79.167% {
            transform:translate(103.458px,88.606px);
            opacity:1;
          }
          81.25% {
            transform:translate(105.813px,88.964px);
            opacity:1;
          }
          83.333% {
            transform:translate(108.167px,89.307px);
            opacity:1;
          }
          85.417% {
            transform:translate(110.521px,89.635px);
            opacity:1;
          }
          87.5% {
            transform:translate(112.875px,89.949px);
            opacity:1;
          }
          89.583% {
            transform:translate(115.229px,90.25px);
            opacity:1;
          }
          91.667% {
            transform:translate(117.583px,90.538px);
            opacity:1;
          }
          93.75% {
            transform:translate(119.938px,90.813px);
            opacity:0.938;
          }
          95.833% {
            transform:translate(122.292px,91.077px);
            opacity:0.625;
          }
          97.917% {
            transform:translate(124.646px,91.33px);
            opacity:0.313;
            opacity:0;
          }
          100% {
            transform:translate(14px,53px);
            opacity:0;
            opacity:0;
          }
        }
        @keyframes seep1 {
          0% {
            transform:translate(36.6px,68.047px);
            opacity:1;
          }
          2.083% {
            transform:translate(38.954px,69.282px);
            opacity:1;
          }
          4.167% {
            transform:translate(41.308px,70.465px);
            opacity:1;
          }
          6.25% {
            transform:translate(43.663px,71.597px);
            opacity:1;
          }
          8.333% {
            transform:translate(46.017px,72.68px);
            opacity:1;
          }
          10.417% {
            transform:translate(48.371px,73.718px);
            opacity:1;
          }
          12.5% {
            transform:translate(50.725px,74.711px);
            opacity:1;
          }
          14.583% {
            transform:translate(53.079px,75.662px);
            opacity:1;
          }
          16.667% {
            transform:translate(55.433px,76.572px);
            opacity:1;
          }
          18.75% {
            transform:translate(57.788px,77.443px);
            opacity:1;
          }
          20.833% {
            transform:translate(60.142px,78.278px);
            opacity:1;
          }
          22.917% {
            transform:translate(62.496px,79.076px);
            opacity:1;
          }
          25% {
            transform:translate(64.85px,79.841px);
            opacity:1;
          }
          27.083% {
            transform:translate(67.204px,80.573px);
            opacity:1;
          }
          29.167% {
            transform:translate(69.558px,81.274px);
            opacity:1;
          }
          31.25% {
            transform:translate(71.912px,81.945px);
            opacity:1;
          }
          33.333% {
            transform:translate(74.267px,82.587px);
            opacity:1;
          }
          35.417% {
            transform:translate(76.621px,83.202px);
            opacity:1;
          }
          37.5% {
            transform:translate(78.975px,83.79px);
            opacity:1;
          }
          39.583% {
            transform:translate(81.329px,84.354px);
            opacity:1;
          }
          41.667% {
            transform:translate(83.683px,84.893px);
            opacity:1;
          }
          43.75% {
            transform:translate(86.037px,85.41px);
            opacity:1;
          }
          45.833% {
            transform:translate(88.392px,85.904px);
            opacity:1;
          }
          47.917% {
            transform:translate(90.746px,86.378px);
            opacity:1;
          }
          50% {
            transform:translate(93.1px,86.831px);
            opacity:1;
          }
          52.083% {
            transform:translate(95.454px,87.264px);
            opacity:1;
          }
          54.167% {
            transform:translate(97.808px,87.68px);
            opacity:1;
          }
          56.25% {
            transform:translate(100.162px,88.077px);
            opacity:1;
          }
          58.333% {
            transform:translate(102.517px,88.458px);
            opacity:1;
          }
          60.417% {
            transform:translate(104.871px,88.822px);
            opacity:1;
          }
          62.5% {
            transform:translate(107.225px,89.171px);
            opacity:1;
          }
          64.583% {
            transform:translate(109.579px,89.505px);
            opacity:1;
          }
          66.667% {
            transform:translate(111.933px,89.825px);
            opacity:1;
          }
          68.75% {
            transform:translate(114.287px,90.131px);
            opacity:1;
          }
          70.833% {
            transform:translate(116.642px,90.424px);
            opacity:1;
          }
          72.917% {
            transform:translate(118.996px,90.705px);
            opacity:1;
          }
          75% {
            transform:translate(121.35px,90.973px);
            opacity:0.75;
          }
          77.083% {
            transform:translate(123.704px,91.23px);
            opacity:0.437;
          }
          79.167% {
            transform:translate(126.058px,91.476px);
            opacity:0.125;
            opacity:0;
          }
          81.25% {
            transform:translate(15.412px,54.136px);
            opacity:0.187;
            opacity:0;
          }
          83.333% {
            transform:translate(17.767px,55.965px);
            opacity:0.5;
          }
          85.417% {
            transform:translate(20.121px,57.715px);
            opacity:0.813;
          }
          87.5% {
            transform:translate(22.475px,59.391px);
            opacity:1;
          }
          89.583% {
            transform:translate(24.829px,60.995px);
            opacity:1;
          }
          91.667% {
            transform:translate(27.183px,62.531px);
            opacity:1;
          }
          93.75% {
            transform:translate(29.537px,64.002px);
            opacity:1;
          }
          95.833% {
            transform:translate(31.892px,65.409px);
            opacity:1;
          }
          97.917% {
            transform:translate(34.246px,66.757px);
            opacity:1;
          }
          100% {
            transform:translate(36.6px,68.047px);
            opacity:1;
          }
        }
        @keyframes seep2 {
          0% {
            transform:translate(59.2px,77.948px);
            opacity:1;
          }
          2.083% {
            transform:translate(61.554px,78.761px);
            opacity:1;
          }
          4.167% {
            transform:translate(63.908px,79.539px);
            opacity:1;
          }
          6.25% {
            transform:translate(66.263px,80.284px);
            opacity:1;
          }
          8.333% {
            transform:translate(68.617px,80.997px);
            opacity:1;
          }
          10.417% {
            transform:translate(70.971px,81.68px);
            opacity:1;
          }
          12.5% {
            transform:translate(73.325px,82.333px);
            opacity:1;
          }
          14.583% {
            transform:translate(75.679px,82.959px);
            opacity:1;
          }
          16.667% {
            transform:translate(78.033px,83.558px);
            opacity:1;
          }
          18.75% {
            transform:translate(80.388px,84.131px);
            opacity:1;
          }
          20.833% {
            transform:translate(82.742px,84.68px);
            opacity:1;
          }
          22.917% {
            transform:translate(85.096px,85.206px);
            opacity:1;
          }
          25% {
            transform:translate(87.45px,85.709px);
            opacity:1;
          }
          27.083% {
            transform:translate(89.804px,86.191px);
            opacity:1;
          }
          29.167% {
            transform:translate(92.158px,86.652px);
            opacity:1;
          }
          31.25% {
            transform:translate(94.513px,87.093px);
            opacity:1;
          }
          33.333% {
            transform:translate(96.867px,87.516px);
            opacity:1;
          }
          35.417% {
            transform:translate(99.221px,87.92px);
            opacity:1;
          }
          37.5% {
            transform:translate(101.575px,88.308px);
            opacity:1;
          }
          39.583% {
            transform:translate(103.929px,88.679px);
            opacity:1;
          }
          41.667% {
            transform:translate(106.283px,89.034px);
            opacity:1;
          }
          43.75% {
            transform:translate(108.638px,89.373px);
            opacity:1;
          }
          45.833% {
            transform:translate(110.992px,89.699px);
            opacity:1;
          }
          47.917% {
            transform:translate(113.346px,90.01px);
            opacity:1;
          }
          50% {
            transform:translate(115.7px,90.308px);
            opacity:1;
          }
          52.083% {
            transform:translate(118.054px,90.594px);
            opacity:1;
          }
          54.167% {
            transform:translate(120.408px,90.867px);
            opacity:0.875;
          }
          56.25% {
            transform:translate(122.763px,91.129px);
            opacity:0.562;
          }
          58.333% {
            transform:translate(125.117px,91.379px);
            opacity:0.25;
            opacity:0;
          }
          60.417% {
            transform:translate(14.471px,53.382px);
            opacity:0.062;
            opacity:0;
          }
          62.5% {
            transform:translate(16.825px,55.243px);
            opacity:0.375;
          }
          64.583% {
            transform:translate(19.179px,57.024px);
            opacity:0.688;
          }
          66.667% {
            transform:translate(21.533px,58.729px);
            opacity:1;
          }
          68.75% {
            transform:translate(23.887px,60.362px);
            opacity:1;
          }
          70.833% {
            transform:translate(26.242px,61.925px);
            opacity:1;
          }
          72.917% {
            transform:translate(28.596px,63.421px);
            opacity:1;
          }
          75% {
            transform:translate(30.95px,64.854px);
            opacity:1;
          }
          77.083% {
            transform:translate(33.304px,66.225px);
            opacity:1;
          }
          79.167% {
            transform:translate(35.658px,67.538px);
            opacity:1;
          }
          81.25% {
            transform:translate(38.012px,68.795px);
            opacity:1;
          }
          83.333% {
            transform:translate(40.367px,69.998px);
            opacity:1;
          }
          85.417% {
            transform:translate(42.721px,71.15px);
            opacity:1;
          }
          87.5% {
            transform:translate(45.075px,72.252px);
            opacity:1;
          }
          89.583% {
            transform:translate(47.429px,73.308px);
            opacity:1;
          }
          91.667% {
            transform:translate(49.783px,74.319px);
            opacity:1;
          }
          93.75% {
            transform:translate(52.137px,75.286px);
            opacity:1;
          }
          95.833% {
            transform:translate(54.492px,76.213px);
            opacity:1;
          }
          97.917% {
            transform:translate(56.846px,77.099px);
            opacity:1;
          }
          100% {
            transform:translate(59.2px,77.948px);
            opacity:1;
          }
        }
        @keyframes seep3 {
          0% {
            transform:translate(81.8px,84.464px);
            opacity:1;
          }
          2.083% {
            transform:translate(84.154px,84.998px);
            opacity:1;
          }
          4.167% {
            transform:translate(86.508px,85.51px);
            opacity:1;
          }
          6.25% {
            transform:translate(88.862px,86.001px);
            opacity:1;
          }
          8.333% {
            transform:translate(91.217px,86.47px);
            opacity:1;
          }
          10.417% {
            transform:translate(93.571px,86.919px);
            opacity:1;
          }
          12.5% {
            transform:translate(95.925px,87.349px);
            opacity:1;
          }
          14.583% {
            transform:translate(98.279px,87.761px);
            opacity:1;
          }
          16.667% {
            transform:translate(100.633px,88.155px);
            opacity:1;
          }
          18.75% {
            transform:translate(102.987px,88.532px);
            opacity:1;
          }
          20.833% {
            transform:translate(105.342px,88.893px);
            opacity:1;
          }
          22.917% {
            transform:translate(107.696px,89.239px);
            opacity:1;
          }
          25% {
            transform:translate(110.05px,89.57px);
            opacity:1;
          }
          27.083% {
            transform:translate(112.404px,89.887px);
            opacity:1;
          }
          29.167% {
            transform:translate(114.758px,90.191px);
            opacity:1;
          }
          31.25% {
            transform:translate(117.112px,90.481px);
            opacity:1;
          }
          33.333% {
            transform:translate(119.467px,90.759px);
            opacity:1;
          }
          35.417% {
            transform:translate(121.821px,91.025px);
            opacity:0.688;
          }
          37.5% {
            transform:translate(124.175px,91.28px);
            opacity:0.375;
          }
          39.583% {
            transform:translate(126.529px,91.524px);
            opacity:0.062;
            opacity:0;
          }
          41.667% {
            transform:translate(15.883px,54.508px);
            opacity:0.25;
            opacity:0;
          }
          43.75% {
            transform:translate(18.238px,56.321px);
            opacity:0.563;
          }
          45.833% {
            transform:translate(20.592px,58.056px);
            opacity:0.875;
          }
          47.917% {
            transform:translate(22.946px,59.717px);
            opacity:1;
          }
          50% {
            transform:translate(25.3px,61.308px);
            opacity:1;
          }
          52.083% {
            transform:translate(27.654px,62.83px);
            opacity:1;
          }
          54.167% {
            transform:translate(30.008px,64.288px);
            opacity:1;
          }
          56.25% {
            transform:translate(32.363px,65.684px);
            opacity:1;
          }
          58.333% {
            transform:translate(34.717px,67.019px);
            opacity:1;
          }
          60.417% {
            transform:translate(37.071px,68.298px);
            opacity:1;
          }
          62.5% {
            transform:translate(39.425px,69.523px);
            opacity:1;
          }
          64.583% {
            transform:translate(41.779px,70.695px);
            opacity:1;
          }
          66.667% {
            transform:translate(44.133px,71.817px);
            opacity:1;
          }
          68.75% {
            transform:translate(46.488px,72.891px);
            opacity:1;
          }
          70.833% {
            transform:translate(48.842px,73.92px);
            opacity:1;
          }
          72.917% {
            transform:translate(51.196px,74.904px);
            opacity:1;
          }
          75% {
            transform:translate(53.55px,75.847px);
            opacity:1;
          }
          77.083% {
            transform:translate(55.904px,76.749px);
            opacity:1;
          }
          79.167% {
            transform:translate(58.258px,77.613px);
            opacity:1;
          }
          81.25% {
            transform:translate(60.613px,78.44px);
            opacity:1;
          }
          83.333% {
            transform:translate(62.967px,79.232px);
            opacity:1;
          }
          85.417% {
            transform:translate(65.321px,79.99px);
            opacity:1;
          }
          87.5% {
            transform:translate(67.675px,80.716px);
            opacity:1;
          }
          89.583% {
            transform:translate(70.029px,81.41px);
            opacity:1;
          }
          91.667% {
            transform:translate(72.383px,82.075px);
            opacity:1;
          }
          93.75% {
            transform:translate(74.738px,82.712px);
            opacity:1;
          }
          95.833% {
            transform:translate(77.092px,83.321px);
            opacity:1;
          }
          97.917% {
            transform:translate(79.446px,83.905px);
            opacity:1;
          }
          100% {
            transform:translate(81.8px,84.464px);
            opacity:1;
          }
        }
        @keyframes seep4 {
          0% {
            transform:translate(104.4px,88.751px);
            opacity:1;
          }
          2.083% {
            transform:translate(106.754px,89.103px);
            opacity:1;
          }
          4.167% {
            transform:translate(109.108px,89.44px);
            opacity:1;
          }
          6.25% {
            transform:translate(111.463px,89.762px);
            opacity:1;
          }
          8.333% {
            transform:translate(113.817px,90.071px);
            opacity:1;
          }
          10.417% {
            transform:translate(116.171px,90.366px);
            opacity:1;
          }
          12.5% {
            transform:translate(118.525px,90.649px);
            opacity:1;
          }
          14.583% {
            transform:translate(120.879px,90.92px);
            opacity:0.812;
          }
          16.667% {
            transform:translate(123.233px,91.18px);
            opacity:0.5;
          }
          18.75% {
            transform:translate(125.588px,91.428px);
            opacity:0.187;
            opacity:0;
          }
          20.833% {
            transform:translate(14.942px,53.761px);
            opacity:0.125;
            opacity:0;
          }
          22.917% {
            transform:translate(17.296px,55.605px);
            opacity:0.438;
          }
          25% {
            transform:translate(19.65px,57.371px);
            opacity:0.75;
          }
          27.083% {
            transform:translate(22.004px,59.062px);
            opacity:1;
          }
          29.167% {
            transform:translate(24.358px,60.68px);
            opacity:1;
          }
          31.25% {
            transform:translate(26.713px,62.229px);
            opacity:1;
          }
          33.333% {
            transform:translate(29.067px,63.713px);
            opacity:1;
          }
          35.417% {
            transform:translate(31.421px,65.133px);
            opacity:1;
          }
          37.5% {
            transform:translate(33.775px,66.492px);
            opacity:1;
          }
          39.583% {
            transform:translate(36.129px,67.794px);
            opacity:1;
          }
          41.667% {
            transform:translate(38.483px,69.039px);
            opacity:1;
          }
          43.75% {
            transform:translate(40.838px,70.232px);
            opacity:1;
          }
          45.833% {
            transform:translate(43.192px,71.374px);
            opacity:1;
          }
          47.917% {
            transform:translate(45.546px,72.467px);
            opacity:1;
          }
          50% {
            transform:translate(47.9px,73.514px);
            opacity:1;
          }
          52.083% {
            transform:translate(50.254px,74.516px);
            opacity:1;
          }
          54.167% {
            transform:translate(52.608px,75.475px);
            opacity:1;
          }
          56.25% {
            transform:translate(54.963px,76.393px);
            opacity:1;
          }
          58.333% {
            transform:translate(57.317px,77.272px);
            opacity:1;
          }
          60.417% {
            transform:translate(59.671px,78.114px);
            opacity:1;
          }
          62.5% {
            transform:translate(62.025px,78.919px);
            opacity:1;
          }
          64.583% {
            transform:translate(64.379px,79.691px);
            opacity:1;
          }
          66.667% {
            transform:translate(66.733px,80.429px);
            opacity:1;
          }
          68.75% {
            transform:translate(69.088px,81.136px);
            opacity:1;
          }
          70.833% {
            transform:translate(71.442px,81.813px);
            opacity:1;
          }
          72.917% {
            transform:translate(73.796px,82.461px);
            opacity:1;
          }
          75% {
            transform:translate(76.15px,83.081px);
            opacity:1;
          }
          77.083% {
            transform:translate(78.504px,83.675px);
            opacity:1;
          }
          79.167% {
            transform:translate(80.858px,84.243px);
            opacity:1;
          }
          81.25% {
            transform:translate(83.213px,84.787px);
            opacity:1;
          }
          83.333% {
            transform:translate(85.567px,85.308px);
            opacity:1;
          }
          85.417% {
            transform:translate(87.921px,85.807px);
            opacity:1;
          }
          87.5% {
            transform:translate(90.275px,86.285px);
            opacity:1;
          }
          89.583% {
            transform:translate(92.629px,86.742px);
            opacity:1;
          }
          91.667% {
            transform:translate(94.983px,87.179px);
            opacity:1;
          }
          93.75% {
            transform:translate(97.338px,87.598px);
            opacity:1;
          }
          95.833% {
            transform:translate(99.692px,87.999px);
            opacity:1;
          }
          97.917% {
            transform:translate(102.046px,88.383px);
            opacity:1;
          }
          100% {
            transform:translate(104.4px,88.751px);
            opacity:1;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .rise {
            d:path('M98.5 92V53');
            opacity:1;
          }
          .seep0 {
            transform:translate(98.75px,87.841px);
            opacity:1;
          }
          .seep1 {
            transform:translate(121.35px,90.973px);
            opacity:0.75;
          }
          .seep2 {
            transform:translate(30.95px,64.854px);
            opacity:1;
          }
          .seep3 {
            transform:translate(53.55px,75.847px);
            opacity:1;
          }
          .seep4 {
            transform:translate(76.15px,83.081px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Artesian Aquifer">
        <path d="M10 32Q35 49 58 61T130 69V126H10Z" fill="#38342a"/>
        <circle cx="12" cy="70" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="54.495" cy="102.701" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="96.99" cy="83.402" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="23.485" cy="116.103" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="65.98" cy="96.804" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="108.475" cy="77.505" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="34.97" cy="110.206" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="77.465" cy="90.907" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="119.96" cy="71.608" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="46.455" cy="104.309" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="88.95" cy="85.01" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="15.446" cy="117.711" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="57.941" cy="98.412" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="100.436" cy="79.113" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="26.931" cy="111.814" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="69.426" cy="92.515" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="111.921" cy="73.216" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="38.416" cy="105.918" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="80.911" cy="86.619" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="123.406" cy="119.32" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="49.901" cy="100.021" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="92.396" cy="80.722" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="18.891" cy="113.423" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="61.386" cy="94.124" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="103.881" cy="74.825" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="30.376" cy="107.526" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="72.871" cy="88.227" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="115.366" cy="120.928" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="41.861" cy="101.629" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="84.356" cy="82.33" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="126.851" cy="115.031" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="53.347" cy="95.732" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="95.842" cy="76.433" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="22.337" cy="109.134" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="64.832" cy="89.835" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="107.327" cy="70.536" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="33.822" cy="103.237" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="76.317" cy="83.938" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="118.812" cy="116.639" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="45.307" cy="97.34" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="87.802" cy="78.041" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="14.297" cy="110.742" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="56.792" cy="91.443" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="99.287" cy="72.144" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="25.782" cy="104.845" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="68.277" cy="85.546" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="110.772" cy="118.247" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="37.267" cy="98.948" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="79.762" cy="79.649" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="122.257" cy="112.351" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="48.752" cy="93.052" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="91.248" cy="73.753" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="17.743" cy="106.454" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="60.238" cy="87.155" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="102.733" cy="119.856" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="29.228" cy="100.557" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="71.723" cy="81.258" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="114.218" cy="113.959" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="40.713" cy="94.66" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="83.208" cy="75.361" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="125.703" cy="108.062" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="52.198" cy="88.763" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="94.693" cy="121.464" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="21.188" cy="102.165" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="63.683" cy="82.866" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="106.178" cy="115.567" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="32.673" cy="96.268" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="75.168" cy="76.969" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="117.663" cy="109.67" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="44.158" cy="90.371" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="86.653" cy="71.072" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="13.149" cy="103.773" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="55.644" cy="84.474" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="98.139" cy="117.175" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="24.634" cy="97.876" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="67.129" cy="78.577" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="109.624" cy="111.278" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="36.119" cy="91.979" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="78.614" cy="72.68" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="121.109" cy="105.381" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="47.604" cy="86.082" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="90.099" cy="118.784" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="16.594" cy="99.485" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="59.089" cy="80.186" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="101.584" cy="112.887" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="28.079" cy="93.588" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="70.574" cy="74.289" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="113.069" cy="106.99" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="39.564" cy="87.691" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="82.059" cy="120.392" r="0.6" fill="#bba37a" opacity=".25"/>
        <path d="M12 43C45 63 73 79 130 83L130 101C73 97 45 81 12 61Z" fill="#286075"/>
        <path d="M12 43C45 63 73 79 130 83" fill="none" stroke="#867a60" stroke-width="5"/>
        <path d="M12 61C45 81 73 97 130 101" fill="none" stroke="#867a60" stroke-width="5"/>
        <path d="M10 32Q35 49 58 61T130 69" fill="none" stroke="#9eae76" stroke-width="3"/>
        <rect x="94" y="39" width="9" height="54" fill="#0b1820" stroke="#b3c6bd"/>
        <path d="M80 53L118 53" stroke="#e5c986" stroke-dasharray="3 3"/>
        <path d="M98.5 92V53" class="rise" fill="none" stroke="#83dbe7" stroke-width="5"/>
        <path d="M94 86L103 86" stroke="#c3c8b0"/>
        <path d="M94 89L103 89" stroke="#c3c8b0"/>
        <path d="M94 92L103 92" stroke="#c3c8b0"/>
        <g transform="translate(5 52) rotate(0)" fill="#77c9ef">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <circle cx="0" cy="0" r="1.6" class="seep0" fill="#a5dce6" transform="translate(14 53)"/>
        <circle cx="0" cy="0" r="1.6" class="seep1" fill="#a5dce6" transform="translate(36.6 68.047)"/>
        <circle cx="0" cy="0" r="1.6" class="seep2" fill="#a5dce6" transform="translate(59.2 77.948)"/>
        <circle cx="0" cy="0" r="1.6" class="seep3" fill="#a5dce6" transform="translate(81.8 84.464)"/>
        <circle cx="0" cy="0" r="1.6" class="seep4" fill="#a5dce6" transform="translate(104.4 88.751)"/>
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

if (!customElements.get("concept-artesian-aquifer")) {
  customElements.define("concept-artesian-aquifer", ConceptArtesianAquifer);
}
