// Coastal Upwelling. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCoastalUpwelling extends HTMLElement {
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
        .warm-water {
          fill:#202d24
        }
        .cold-water {
          fill:#0c2a37
        }
        .thermocline {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
          stroke-dasharray:3 2
        }
        .land {
          fill:#263420;
          stroke:#375b51;
          stroke-width:1
        }
        .shore {
          stroke:#70edb1;
          stroke-width:1.2
        }
        .sea-surface {
          stroke:#77c9ef;
          stroke-width:1.2
        }
        .wind {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.3
        }
        .wind-dot {
          fill:#f3c977
        }
        .transport {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.3
        }
        .nutrient-water {
          fill:#77c9ef;
          stroke:#07120f;
          stroke-width:.8
        }
        .nutrient {
          fill:#f3c977
        }
        .upwelling-0-0 {
          animation:coastal-parcel-0-0 16s linear infinite
        }
        @keyframes coastal-parcel-0-0 {
          0.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          0.3125% {
            transform:translate(13.121px,113.047px);
            opacity:0.374
          }
          0.6250% {
            transform:translate(14.241px,113.043px);
            opacity:0.747
          }
          0.9375% {
            transform:translate(15.361px,113.039px);
            opacity:1
          }
          1.2500% {
            transform:translate(16.479px,113.035px);
            opacity:1
          }
          1.5625% {
            transform:translate(17.597px,113.03px);
            opacity:1
          }
          1.8750% {
            transform:translate(18.713px,113.025px);
            opacity:1
          }
          2.1875% {
            transform:translate(19.828px,113.02px);
            opacity:1
          }
          2.5000% {
            transform:translate(20.942px,113.015px);
            opacity:1
          }
          2.8125% {
            transform:translate(22.054px,113.01px);
            opacity:1
          }
          3.1250% {
            transform:translate(23.166px,113.004px);
            opacity:1
          }
          3.4375% {
            transform:translate(24.276px,112.998px);
            opacity:1
          }
          3.7500% {
            transform:translate(25.384px,112.991px);
            opacity:1
          }
          4.0625% {
            transform:translate(26.492px,112.985px);
            opacity:1
          }
          4.3750% {
            transform:translate(27.597px,112.978px);
            opacity:1
          }
          4.6875% {
            transform:translate(28.701px,112.97px);
            opacity:1
          }
          5.0000% {
            transform:translate(29.803px,112.963px);
            opacity:1
          }
          5.3125% {
            transform:translate(30.904px,112.954px);
            opacity:1
          }
          5.6250% {
            transform:translate(32.002px,112.946px);
            opacity:1
          }
          5.9375% {
            transform:translate(33.099px,112.937px);
            opacity:1
          }
          6.2500% {
            transform:translate(34.194px,112.928px);
            opacity:1
          }
          6.5625% {
            transform:translate(35.286px,112.918px);
            opacity:1
          }
          6.8750% {
            transform:translate(36.376px,112.908px);
            opacity:1
          }
          7.1875% {
            transform:translate(37.464px,112.897px);
            opacity:1
          }
          7.5000% {
            transform:translate(38.55px,112.886px);
            opacity:1
          }
          7.8125% {
            transform:translate(39.633px,112.874px);
            opacity:1
          }
          8.1250% {
            transform:translate(40.714px,112.862px);
            opacity:1
          }
          8.4375% {
            transform:translate(41.791px,112.849px);
            opacity:1
          }
          8.7500% {
            transform:translate(42.866px,112.835px);
            opacity:1
          }
          9.0625% {
            transform:translate(43.938px,112.821px);
            opacity:1
          }
          9.3750% {
            transform:translate(45.007px,112.806px);
            opacity:1
          }
          9.6875% {
            transform:translate(46.072px,112.79px);
            opacity:1
          }
          10.0000% {
            transform:translate(47.134px,112.774px);
            opacity:1
          }
          10.3125% {
            transform:translate(48.193px,112.756px);
            opacity:1
          }
          10.6250% {
            transform:translate(49.247px,112.738px);
            opacity:1
          }
          10.9375% {
            transform:translate(50.299px,112.719px);
            opacity:1
          }
          11.2500% {
            transform:translate(51.346px,112.699px);
            opacity:1
          }
          11.5625% {
            transform:translate(52.389px,112.678px);
            opacity:1
          }
          11.8750% {
            transform:translate(53.427px,112.657px);
            opacity:1
          }
          12.1875% {
            transform:translate(54.461px,112.634px);
            opacity:1
          }
          12.5000% {
            transform:translate(55.491px,112.61px);
            opacity:1
          }
          12.8125% {
            transform:translate(56.515px,112.584px);
            opacity:1
          }
          13.1250% {
            transform:translate(57.535px,112.558px);
            opacity:1
          }
          13.4375% {
            transform:translate(58.549px,112.53px);
            opacity:1
          }
          13.7500% {
            transform:translate(59.558px,112.501px);
            opacity:1
          }
          14.0625% {
            transform:translate(60.561px,112.471px);
            opacity:1
          }
          14.3750% {
            transform:translate(61.559px,112.439px);
            opacity:1
          }
          14.6875% {
            transform:translate(62.55px,112.406px);
            opacity:1
          }
          15.0000% {
            transform:translate(63.535px,112.37px);
            opacity:1
          }
          15.3125% {
            transform:translate(64.514px,112.334px);
            opacity:1
          }
          15.6250% {
            transform:translate(65.486px,112.295px);
            opacity:1
          }
          15.9375% {
            transform:translate(66.451px,112.255px);
            opacity:1
          }
          16.2500% {
            transform:translate(67.409px,112.212px);
            opacity:1
          }
          16.5625% {
            transform:translate(68.359px,112.168px);
            opacity:1
          }
          16.8750% {
            transform:translate(69.302px,112.122px);
            opacity:1
          }
          17.1875% {
            transform:translate(70.236px,112.073px);
            opacity:1
          }
          17.5000% {
            transform:translate(71.163px,112.022px);
            opacity:1
          }
          17.8125% {
            transform:translate(72.081px,111.968px);
            opacity:1
          }
          18.1250% {
            transform:translate(72.991px,111.912px);
            opacity:1
          }
          18.4375% {
            transform:translate(73.891px,111.853px);
            opacity:1
          }
          18.7500% {
            transform:translate(74.783px,111.791px);
            opacity:1
          }
          19.0625% {
            transform:translate(75.664px,111.727px);
            opacity:1
          }
          19.3750% {
            transform:translate(76.537px,111.659px);
            opacity:1
          }
          19.6875% {
            transform:translate(77.399px,111.588px);
            opacity:1
          }
          20.0000% {
            transform:translate(78.251px,111.514px);
            opacity:1
          }
          20.3125% {
            transform:translate(79.093px,111.436px);
            opacity:1
          }
          20.6250% {
            transform:translate(79.924px,111.354px);
            opacity:1
          }
          20.9375% {
            transform:translate(80.744px,111.268px);
            opacity:1
          }
          21.2500% {
            transform:translate(81.553px,111.179px);
            opacity:1
          }
          21.5625% {
            transform:translate(82.351px,111.085px);
            opacity:1
          }
          21.8750% {
            transform:translate(83.137px,110.986px);
            opacity:1
          }
          22.1875% {
            transform:translate(83.911px,110.883px);
            opacity:1
          }
          22.5000% {
            transform:translate(84.673px,110.775px);
            opacity:1
          }
          22.8125% {
            transform:translate(85.423px,110.662px);
            opacity:1
          }
          23.1250% {
            transform:translate(86.16px,110.544px);
            opacity:1
          }
          23.4375% {
            transform:translate(86.884px,110.42px);
            opacity:1
          }
          23.7500% {
            transform:translate(87.596px,110.29px);
            opacity:1
          }
          24.0625% {
            transform:translate(88.295px,110.154px);
            opacity:1
          }
          24.3750% {
            transform:translate(88.98px,110.011px);
            opacity:1
          }
          24.6875% {
            transform:translate(89.653px,109.862px);
            opacity:1
          }
          25.0000% {
            transform:translate(90.311px,109.706px);
            opacity:1
          }
          25.3125% {
            transform:translate(90.956px,109.542px);
            opacity:1
          }
          25.6250% {
            transform:translate(91.588px,109.371px);
            opacity:1
          }
          25.9375% {
            transform:translate(92.206px,109.192px);
            opacity:1
          }
          26.2500% {
            transform:translate(92.809px,109.005px);
            opacity:1
          }
          26.5625% {
            transform:translate(93.399px,108.809px);
            opacity:1
          }
          26.8750% {
            transform:translate(93.975px,108.604px);
            opacity:1
          }
          27.1875% {
            transform:translate(94.536px,108.39px);
            opacity:1
          }
          27.5000% {
            transform:translate(95.084px,108.166px);
            opacity:1
          }
          27.8125% {
            transform:translate(95.618px,107.931px);
            opacity:1
          }
          28.1250% {
            transform:translate(96.137px,107.686px);
            opacity:1
          }
          28.4375% {
            transform:translate(96.642px,107.43px);
            opacity:1
          }
          28.7500% {
            transform:translate(97.134px,107.163px);
            opacity:1
          }
          29.0625% {
            transform:translate(97.611px,106.883px);
            opacity:1
          }
          29.3750% {
            transform:translate(98.074px,106.591px);
            opacity:1
          }
          29.6875% {
            transform:translate(98.524px,106.287px);
            opacity:1
          }
          30.0000% {
            transform:translate(98.959px,105.969px);
            opacity:1
          }
          30.3125% {
            transform:translate(99.381px,105.637px);
            opacity:1
          }
          30.6250% {
            transform:translate(99.789px,105.29px);
            opacity:1
          }
          30.9375% {
            transform:translate(100.184px,104.929px);
            opacity:1
          }
          31.2500% {
            transform:translate(100.565px,104.553px);
            opacity:1
          }
          31.5625% {
            transform:translate(100.933px,104.16px);
            opacity:1
          }
          31.8750% {
            transform:translate(101.288px,103.752px);
            opacity:1
          }
          32.1875% {
            transform:translate(101.63px,103.326px);
            opacity:1
          }
          32.5000% {
            transform:translate(101.959px,102.883px);
            opacity:1
          }
          32.8125% {
            transform:translate(102.275px,102.423px);
            opacity:1
          }
          33.1250% {
            transform:translate(102.579px,101.944px);
            opacity:1
          }
          33.4375% {
            transform:translate(102.87px,101.447px);
            opacity:1
          }
          33.7500% {
            transform:translate(103.15px,100.931px);
            opacity:1
          }
          34.0625% {
            transform:translate(103.417px,100.395px);
            opacity:1
          }
          34.3750% {
            transform:translate(103.672px,99.839px);
            opacity:1
          }
          34.6875% {
            transform:translate(103.916px,99.264px);
            opacity:1
          }
          35.0000% {
            transform:translate(104.148px,98.668px);
            opacity:1
          }
          35.3125% {
            transform:translate(104.369px,98.052px);
            opacity:1
          }
          35.6250% {
            transform:translate(104.578px,97.415px);
            opacity:1
          }
          35.9375% {
            transform:translate(104.777px,96.757px);
            opacity:1
          }
          36.2500% {
            transform:translate(104.965px,96.079px);
            opacity:1
          }
          36.5625% {
            transform:translate(105.141px,95.38px);
            opacity:1
          }
          36.8750% {
            transform:translate(105.308px,94.661px);
            opacity:1
          }
          37.1875% {
            transform:translate(105.464px,93.921px);
            opacity:1
          }
          37.5000% {
            transform:translate(105.61px,93.162px);
            opacity:1
          }
          37.8125% {
            transform:translate(105.746px,92.383px);
            opacity:1
          }
          38.1250% {
            transform:translate(105.872px,91.586px);
            opacity:1
          }
          38.4375% {
            transform:translate(105.987px,90.771px);
            opacity:1
          }
          38.7500% {
            transform:translate(106.094px,89.939px);
            opacity:1
          }
          39.0625% {
            transform:translate(106.19px,89.09px);
            opacity:1
          }
          39.3750% {
            transform:translate(106.277px,88.226px);
            opacity:1
          }
          39.6875% {
            transform:translate(106.355px,87.348px);
            opacity:1
          }
          40.0000% {
            transform:translate(106.423px,86.458px);
            opacity:1
          }
          40.3125% {
            transform:translate(106.482px,85.555px);
            opacity:1
          }
          40.6250% {
            transform:translate(106.532px,84.643px);
            opacity:1
          }
          40.9375% {
            transform:translate(106.573px,83.722px);
            opacity:1
          }
          41.2500% {
            transform:translate(106.604px,82.795px);
            opacity:1
          }
          41.5625% {
            transform:translate(106.627px,81.862px);
            opacity:1
          }
          41.8750% {
            transform:translate(106.64px,80.926px);
            opacity:1
          }
          42.1875% {
            transform:translate(106.645px,79.988px);
            opacity:1
          }
          42.5000% {
            transform:translate(106.64px,79.05px);
            opacity:1
          }
          42.8125% {
            transform:translate(106.626px,78.114px);
            opacity:1
          }
          43.1250% {
            transform:translate(106.603px,77.181px);
            opacity:1
          }
          43.4375% {
            transform:translate(106.572px,76.254px);
            opacity:1
          }
          43.7500% {
            transform:translate(106.531px,75.333px);
            opacity:1
          }
          44.0625% {
            transform:translate(106.481px,74.421px);
            opacity:1
          }
          44.3750% {
            transform:translate(106.422px,73.519px);
            opacity:1
          }
          44.6875% {
            transform:translate(106.353px,72.629px);
            opacity:1
          }
          45.0000% {
            transform:translate(106.275px,71.751px);
            opacity:1
          }
          45.3125% {
            transform:translate(106.188px,70.888px);
            opacity:1
          }
          45.6250% {
            transform:translate(106.091px,70.039px);
            opacity:1
          }
          45.9375% {
            transform:translate(105.985px,69.207px);
            opacity:1
          }
          46.2500% {
            transform:translate(105.868px,68.393px);
            opacity:1
          }
          46.5625% {
            transform:translate(105.742px,67.596px);
            opacity:1
          }
          46.8750% {
            transform:translate(105.606px,66.818px);
            opacity:1
          }
          47.1875% {
            transform:translate(105.46px,66.059px);
            opacity:1
          }
          47.5000% {
            transform:translate(105.304px,65.32px);
            opacity:1
          }
          47.8125% {
            transform:translate(105.137px,64.602px);
            opacity:1
          }
          48.1250% {
            transform:translate(104.96px,63.903px);
            opacity:1
          }
          48.4375% {
            transform:translate(104.772px,63.226px);
            opacity:1
          }
          48.7500% {
            transform:translate(104.573px,62.569px);
            opacity:1
          }
          49.0625% {
            transform:translate(104.363px,61.932px);
            opacity:1
          }
          49.3750% {
            transform:translate(104.142px,61.316px);
            opacity:1
          }
          49.6875% {
            transform:translate(103.91px,60.721px);
            opacity:1
          }
          50.0000% {
            transform:translate(103.666px,60.146px);
            opacity:1
          }
          50.3125% {
            transform:translate(103.41px,59.591px);
            opacity:1
          }
          50.6250% {
            transform:translate(103.142px,59.056px);
            opacity:1
          }
          50.9375% {
            transform:translate(102.863px,58.54px);
            opacity:1
          }
          51.2500% {
            transform:translate(102.571px,58.043px);
            opacity:1
          }
          51.5625% {
            transform:translate(102.267px,57.565px);
            opacity:1
          }
          51.8750% {
            transform:translate(101.95px,57.105px);
            opacity:1
          }
          52.1875% {
            transform:translate(101.621px,56.662px);
            opacity:1
          }
          52.5000% {
            transform:translate(101.279px,56.237px);
            opacity:1
          }
          52.8125% {
            transform:translate(100.924px,55.829px);
            opacity:1
          }
          53.1250% {
            transform:translate(100.555px,55.437px);
            opacity:1
          }
          53.4375% {
            transform:translate(100.174px,55.061px);
            opacity:1
          }
          53.7500% {
            transform:translate(99.779px,54.701px);
            opacity:1
          }
          54.0625% {
            transform:translate(99.37px,54.355px);
            opacity:1
          }
          54.3750% {
            transform:translate(98.948px,54.023px);
            opacity:1
          }
          54.6875% {
            transform:translate(98.512px,53.705px);
            opacity:1
          }
          55.0000% {
            transform:translate(98.062px,53.401px);
            opacity:1
          }
          55.3125% {
            transform:translate(97.599px,53.109px);
            opacity:1
          }
          55.6250% {
            transform:translate(97.121px,52.83px);
            opacity:1
          }
          55.9375% {
            transform:translate(96.629px,52.563px);
            opacity:1
          }
          56.2500% {
            transform:translate(96.124px,52.307px);
            opacity:1
          }
          56.5625% {
            transform:translate(95.604px,52.062px);
            opacity:1
          }
          56.8750% {
            transform:translate(95.07px,51.828px);
            opacity:1
          }
          57.1875% {
            transform:translate(94.522px,51.604px);
            opacity:1
          }
          57.5000% {
            transform:translate(93.96px,51.39px);
            opacity:1
          }
          57.8125% {
            transform:translate(93.384px,51.186px);
            opacity:1
          }
          58.1250% {
            transform:translate(92.794px,50.99px);
            opacity:1
          }
          58.4375% {
            transform:translate(92.19px,50.803px);
            opacity:1
          }
          58.7500% {
            transform:translate(91.572px,50.624px);
            opacity:1
          }
          59.0625% {
            transform:translate(90.94px,50.453px);
            opacity:1
          }
          59.3750% {
            transform:translate(90.294px,50.29px);
            opacity:1
          }
          59.6875% {
            transform:translate(89.635px,50.134px);
            opacity:1
          }
          60.0000% {
            transform:translate(88.963px,49.985px);
            opacity:1
          }
          60.3125% {
            transform:translate(88.277px,49.843px);
            opacity:1
          }
          60.6250% {
            transform:translate(87.578px,49.707px);
            opacity:1
          }
          60.9375% {
            transform:translate(86.866px,49.577px);
            opacity:1
          }
          61.2500% {
            transform:translate(86.141px,49.453px);
            opacity:1
          }
          61.5625% {
            transform:translate(85.403px,49.335px);
            opacity:1
          }
          61.8750% {
            transform:translate(84.653px,49.222px);
            opacity:1
          }
          62.1875% {
            transform:translate(83.891px,49.114px);
            opacity:1
          }
          62.5000% {
            transform:translate(83.117px,49.011px);
            opacity:1
          }
          62.8125% {
            transform:translate(82.33px,48.913px);
            opacity:1
          }
          63.1250% {
            transform:translate(81.532px,48.819px);
            opacity:1
          }
          63.4375% {
            transform:translate(80.723px,48.729px);
            opacity:1
          }
          63.7500% {
            transform:translate(79.903px,48.644px);
            opacity:1
          }
          64.0625% {
            transform:translate(79.071px,48.562px);
            opacity:1
          }
          64.3750% {
            transform:translate(78.229px,48.484px);
            opacity:1
          }
          64.6875% {
            transform:translate(77.377px,48.41px);
            opacity:1
          }
          65.0000% {
            transform:translate(76.514px,48.339px);
            opacity:1
          }
          65.3125% {
            transform:translate(75.642px,48.272px);
            opacity:1
          }
          65.6250% {
            transform:translate(74.759px,48.207px);
            opacity:1
          }
          65.9375% {
            transform:translate(73.868px,48.145px);
            opacity:1
          }
          66.2500% {
            transform:translate(72.967px,48.087px);
            opacity:1
          }
          66.5625% {
            transform:translate(72.057px,48.031px);
            opacity:1
          }
          66.8750% {
            transform:translate(71.139px,47.977px);
            opacity:1
          }
          67.1875% {
            transform:translate(70.212px,47.926px);
            opacity:1
          }
          67.5000% {
            transform:translate(69.277px,47.877px);
            opacity:1
          }
          67.8125% {
            transform:translate(68.334px,47.831px);
            opacity:1
          }
          68.1250% {
            transform:translate(67.384px,47.786px);
            opacity:1
          }
          68.4375% {
            transform:translate(66.426px,47.744px);
            opacity:1
          }
          68.7500% {
            transform:translate(65.461px,47.704px);
            opacity:1
          }
          69.0625% {
            transform:translate(64.489px,47.665px);
            opacity:1
          }
          69.3750% {
            transform:translate(63.51px,47.629px);
            opacity:1
          }
          69.6875% {
            transform:translate(62.524px,47.594px);
            opacity:1
          }
          70.0000% {
            transform:translate(61.533px,47.56px);
            opacity:1
          }
          70.3125% {
            transform:translate(60.535px,47.528px);
            opacity:1
          }
          70.6250% {
            transform:translate(59.532px,47.498px);
            opacity:1
          }
          70.9375% {
            transform:translate(58.523px,47.469px);
            opacity:1
          }
          71.2500% {
            transform:translate(57.508px,47.441px);
            opacity:1
          }
          71.5625% {
            transform:translate(56.489px,47.415px);
            opacity:1
          }
          71.8750% {
            transform:translate(55.464px,47.39px);
            opacity:1
          }
          72.1875% {
            transform:translate(54.434px,47.366px);
            opacity:1
          }
          72.5000% {
            transform:translate(53.4px,47.343px);
            opacity:1
          }
          72.8125% {
            transform:translate(52.361px,47.321px);
            opacity:1
          }
          73.1250% {
            transform:translate(51.318px,47.3px);
            opacity:1
          }
          73.4375% {
            transform:translate(50.271px,47.28px);
            opacity:1
          }
          73.7500% {
            transform:translate(49.22px,47.261px);
            opacity:1
          }
          74.0625% {
            transform:translate(48.165px,47.243px);
            opacity:1
          }
          74.3750% {
            transform:translate(47.106px,47.226px);
            opacity:1
          }
          74.6875% {
            transform:translate(46.044px,47.21px);
            opacity:1
          }
          75.0000% {
            transform:translate(44.979px,47.194px);
            opacity:1
          }
          75.3125% {
            transform:translate(43.91px,47.179px);
            opacity:1
          }
          75.6250% {
            transform:translate(42.838px,47.165px);
            opacity:1
          }
          75.9375% {
            transform:translate(41.763px,47.151px);
            opacity:1
          }
          76.2500% {
            transform:translate(40.685px,47.138px);
            opacity:1
          }
          76.5625% {
            transform:translate(39.605px,47.126px);
            opacity:1
          }
          76.8750% {
            transform:translate(38.522px,47.114px);
            opacity:1
          }
          77.1875% {
            transform:translate(37.436px,47.103px);
            opacity:1
          }
          77.5000% {
            transform:translate(36.348px,47.092px);
            opacity:1
          }
          77.8125% {
            transform:translate(35.258px,47.082px);
            opacity:1
          }
          78.1250% {
            transform:translate(34.165px,47.072px);
            opacity:1
          }
          78.4375% {
            transform:translate(33.07px,47.063px);
            opacity:1
          }
          78.7500% {
            transform:translate(31.974px,47.054px);
            opacity:1
          }
          79.0625% {
            transform:translate(30.875px,47.045px);
            opacity:1
          }
          79.3750% {
            transform:translate(29.775px,47.037px);
            opacity:1
          }
          79.6875% {
            transform:translate(28.672px,47.03px);
            opacity:1
          }
          80.0000% {
            transform:translate(27.568px,47.022px);
            opacity:1
          }
          80.3125% {
            transform:translate(26.463px,47.015px);
            opacity:1
          }
          80.6250% {
            transform:translate(25.356px,47.009px);
            opacity:1
          }
          80.9375% {
            transform:translate(24.247px,47.002px);
            opacity:1
          }
          81.2500% {
            transform:translate(23.137px,46.996px);
            opacity:1
          }
          81.5625% {
            transform:translate(22.025px,46.99px);
            opacity:1
          }
          81.8750% {
            transform:translate(20.913px,46.985px);
            opacity:1
          }
          82.1875% {
            transform:translate(19.799px,46.979px);
            opacity:1
          }
          82.5000% {
            transform:translate(18.684px,46.974px);
            opacity:1
          }
          82.8125% {
            transform:translate(17.567px,46.97px);
            opacity:1
          }
          83.1250% {
            transform:translate(16.45px,46.965px);
            opacity:1
          }
          83.4375% {
            transform:translate(15.332px,46.961px);
            opacity:1
          }
          83.7500% {
            transform:translate(14.212px,46.957px);
            opacity:0.737
          }
          84.0625% {
            transform:translate(13.092px,46.953px);
            opacity:0.364
          }
          84.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          84.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          85.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          85.3125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          85.6250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          85.9375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          86.2500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          86.5625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          86.8750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          87.1875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          87.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          87.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          88.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          88.4375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          88.7500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          89.0625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          89.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          89.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          90.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          90.3125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          90.6250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          90.9375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          91.2500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          91.5625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          91.8750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          92.1875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          92.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          92.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          93.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          93.4375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          93.7500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          94.0625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          94.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          94.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.3125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.6250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.9375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          96.2500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          96.5625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          96.8750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          97.1875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          97.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          97.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          98.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          98.4375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          98.7500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          99.0625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          99.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          99.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          100.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
        }
        .upwelling-0-1 {
          animation:coastal-parcel-0-1 16s linear infinite
        }
        @keyframes coastal-parcel-0-1 {
          0.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          0.3125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          0.6250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          0.9375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          1.2500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          1.5625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          1.8750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          2.1875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          2.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          2.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          3.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          3.4375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          3.7500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          4.0625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          4.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          4.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          5.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          5.3125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          5.6250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          5.9375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          6.2500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          6.5625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          6.8750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          7.1875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          7.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          7.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          8.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          8.4375% {
            transform:translate(13.121px,113.047px);
            opacity:0.374
          }
          8.7500% {
            transform:translate(14.241px,113.043px);
            opacity:0.747
          }
          9.0625% {
            transform:translate(15.361px,113.039px);
            opacity:1
          }
          9.3750% {
            transform:translate(16.479px,113.035px);
            opacity:1
          }
          9.6875% {
            transform:translate(17.597px,113.03px);
            opacity:1
          }
          10.0000% {
            transform:translate(18.713px,113.025px);
            opacity:1
          }
          10.3125% {
            transform:translate(19.828px,113.02px);
            opacity:1
          }
          10.6250% {
            transform:translate(20.942px,113.015px);
            opacity:1
          }
          10.9375% {
            transform:translate(22.054px,113.01px);
            opacity:1
          }
          11.2500% {
            transform:translate(23.166px,113.004px);
            opacity:1
          }
          11.5625% {
            transform:translate(24.276px,112.998px);
            opacity:1
          }
          11.8750% {
            transform:translate(25.384px,112.991px);
            opacity:1
          }
          12.1875% {
            transform:translate(26.492px,112.985px);
            opacity:1
          }
          12.5000% {
            transform:translate(27.597px,112.978px);
            opacity:1
          }
          12.8125% {
            transform:translate(28.701px,112.97px);
            opacity:1
          }
          13.1250% {
            transform:translate(29.803px,112.963px);
            opacity:1
          }
          13.4375% {
            transform:translate(30.904px,112.954px);
            opacity:1
          }
          13.7500% {
            transform:translate(32.002px,112.946px);
            opacity:1
          }
          14.0625% {
            transform:translate(33.099px,112.937px);
            opacity:1
          }
          14.3750% {
            transform:translate(34.194px,112.928px);
            opacity:1
          }
          14.6875% {
            transform:translate(35.286px,112.918px);
            opacity:1
          }
          15.0000% {
            transform:translate(36.376px,112.908px);
            opacity:1
          }
          15.3125% {
            transform:translate(37.464px,112.897px);
            opacity:1
          }
          15.6250% {
            transform:translate(38.55px,112.886px);
            opacity:1
          }
          15.9375% {
            transform:translate(39.633px,112.874px);
            opacity:1
          }
          16.2500% {
            transform:translate(40.714px,112.862px);
            opacity:1
          }
          16.5625% {
            transform:translate(41.791px,112.849px);
            opacity:1
          }
          16.8750% {
            transform:translate(42.866px,112.835px);
            opacity:1
          }
          17.1875% {
            transform:translate(43.938px,112.821px);
            opacity:1
          }
          17.5000% {
            transform:translate(45.007px,112.806px);
            opacity:1
          }
          17.8125% {
            transform:translate(46.072px,112.79px);
            opacity:1
          }
          18.1250% {
            transform:translate(47.134px,112.774px);
            opacity:1
          }
          18.4375% {
            transform:translate(48.193px,112.756px);
            opacity:1
          }
          18.7500% {
            transform:translate(49.247px,112.738px);
            opacity:1
          }
          19.0625% {
            transform:translate(50.299px,112.719px);
            opacity:1
          }
          19.3750% {
            transform:translate(51.346px,112.699px);
            opacity:1
          }
          19.6875% {
            transform:translate(52.389px,112.678px);
            opacity:1
          }
          20.0000% {
            transform:translate(53.427px,112.657px);
            opacity:1
          }
          20.3125% {
            transform:translate(54.461px,112.634px);
            opacity:1
          }
          20.6250% {
            transform:translate(55.491px,112.61px);
            opacity:1
          }
          20.9375% {
            transform:translate(56.515px,112.584px);
            opacity:1
          }
          21.2500% {
            transform:translate(57.535px,112.558px);
            opacity:1
          }
          21.5625% {
            transform:translate(58.549px,112.53px);
            opacity:1
          }
          21.8750% {
            transform:translate(59.558px,112.501px);
            opacity:1
          }
          22.1875% {
            transform:translate(60.561px,112.471px);
            opacity:1
          }
          22.5000% {
            transform:translate(61.559px,112.439px);
            opacity:1
          }
          22.8125% {
            transform:translate(62.55px,112.406px);
            opacity:1
          }
          23.1250% {
            transform:translate(63.535px,112.37px);
            opacity:1
          }
          23.4375% {
            transform:translate(64.514px,112.334px);
            opacity:1
          }
          23.7500% {
            transform:translate(65.486px,112.295px);
            opacity:1
          }
          24.0625% {
            transform:translate(66.451px,112.255px);
            opacity:1
          }
          24.3750% {
            transform:translate(67.409px,112.212px);
            opacity:1
          }
          24.6875% {
            transform:translate(68.359px,112.168px);
            opacity:1
          }
          25.0000% {
            transform:translate(69.302px,112.122px);
            opacity:1
          }
          25.3125% {
            transform:translate(70.236px,112.073px);
            opacity:1
          }
          25.6250% {
            transform:translate(71.163px,112.022px);
            opacity:1
          }
          25.9375% {
            transform:translate(72.081px,111.968px);
            opacity:1
          }
          26.2500% {
            transform:translate(72.991px,111.912px);
            opacity:1
          }
          26.5625% {
            transform:translate(73.891px,111.853px);
            opacity:1
          }
          26.8750% {
            transform:translate(74.783px,111.791px);
            opacity:1
          }
          27.1875% {
            transform:translate(75.664px,111.727px);
            opacity:1
          }
          27.5000% {
            transform:translate(76.537px,111.659px);
            opacity:1
          }
          27.8125% {
            transform:translate(77.399px,111.588px);
            opacity:1
          }
          28.1250% {
            transform:translate(78.251px,111.514px);
            opacity:1
          }
          28.4375% {
            transform:translate(79.093px,111.436px);
            opacity:1
          }
          28.7500% {
            transform:translate(79.924px,111.354px);
            opacity:1
          }
          29.0625% {
            transform:translate(80.744px,111.268px);
            opacity:1
          }
          29.3750% {
            transform:translate(81.553px,111.179px);
            opacity:1
          }
          29.6875% {
            transform:translate(82.351px,111.085px);
            opacity:1
          }
          30.0000% {
            transform:translate(83.137px,110.986px);
            opacity:1
          }
          30.3125% {
            transform:translate(83.911px,110.883px);
            opacity:1
          }
          30.6250% {
            transform:translate(84.673px,110.775px);
            opacity:1
          }
          30.9375% {
            transform:translate(85.423px,110.662px);
            opacity:1
          }
          31.2500% {
            transform:translate(86.16px,110.544px);
            opacity:1
          }
          31.5625% {
            transform:translate(86.884px,110.42px);
            opacity:1
          }
          31.8750% {
            transform:translate(87.596px,110.29px);
            opacity:1
          }
          32.1875% {
            transform:translate(88.295px,110.154px);
            opacity:1
          }
          32.5000% {
            transform:translate(88.98px,110.011px);
            opacity:1
          }
          32.8125% {
            transform:translate(89.653px,109.862px);
            opacity:1
          }
          33.1250% {
            transform:translate(90.311px,109.706px);
            opacity:1
          }
          33.4375% {
            transform:translate(90.956px,109.542px);
            opacity:1
          }
          33.7500% {
            transform:translate(91.588px,109.371px);
            opacity:1
          }
          34.0625% {
            transform:translate(92.206px,109.192px);
            opacity:1
          }
          34.3750% {
            transform:translate(92.809px,109.005px);
            opacity:1
          }
          34.6875% {
            transform:translate(93.399px,108.809px);
            opacity:1
          }
          35.0000% {
            transform:translate(93.975px,108.604px);
            opacity:1
          }
          35.3125% {
            transform:translate(94.536px,108.39px);
            opacity:1
          }
          35.6250% {
            transform:translate(95.084px,108.166px);
            opacity:1
          }
          35.9375% {
            transform:translate(95.618px,107.931px);
            opacity:1
          }
          36.2500% {
            transform:translate(96.137px,107.686px);
            opacity:1
          }
          36.5625% {
            transform:translate(96.642px,107.43px);
            opacity:1
          }
          36.8750% {
            transform:translate(97.134px,107.163px);
            opacity:1
          }
          37.1875% {
            transform:translate(97.611px,106.883px);
            opacity:1
          }
          37.5000% {
            transform:translate(98.074px,106.591px);
            opacity:1
          }
          37.8125% {
            transform:translate(98.524px,106.287px);
            opacity:1
          }
          38.1250% {
            transform:translate(98.959px,105.969px);
            opacity:1
          }
          38.4375% {
            transform:translate(99.381px,105.637px);
            opacity:1
          }
          38.7500% {
            transform:translate(99.789px,105.29px);
            opacity:1
          }
          39.0625% {
            transform:translate(100.184px,104.929px);
            opacity:1
          }
          39.3750% {
            transform:translate(100.565px,104.553px);
            opacity:1
          }
          39.6875% {
            transform:translate(100.933px,104.16px);
            opacity:1
          }
          40.0000% {
            transform:translate(101.288px,103.752px);
            opacity:1
          }
          40.3125% {
            transform:translate(101.63px,103.326px);
            opacity:1
          }
          40.6250% {
            transform:translate(101.959px,102.883px);
            opacity:1
          }
          40.9375% {
            transform:translate(102.275px,102.423px);
            opacity:1
          }
          41.2500% {
            transform:translate(102.579px,101.944px);
            opacity:1
          }
          41.5625% {
            transform:translate(102.87px,101.447px);
            opacity:1
          }
          41.8750% {
            transform:translate(103.15px,100.931px);
            opacity:1
          }
          42.1875% {
            transform:translate(103.417px,100.395px);
            opacity:1
          }
          42.5000% {
            transform:translate(103.672px,99.839px);
            opacity:1
          }
          42.8125% {
            transform:translate(103.916px,99.264px);
            opacity:1
          }
          43.1250% {
            transform:translate(104.148px,98.668px);
            opacity:1
          }
          43.4375% {
            transform:translate(104.369px,98.052px);
            opacity:1
          }
          43.7500% {
            transform:translate(104.578px,97.415px);
            opacity:1
          }
          44.0625% {
            transform:translate(104.777px,96.757px);
            opacity:1
          }
          44.3750% {
            transform:translate(104.965px,96.079px);
            opacity:1
          }
          44.6875% {
            transform:translate(105.141px,95.38px);
            opacity:1
          }
          45.0000% {
            transform:translate(105.308px,94.661px);
            opacity:1
          }
          45.3125% {
            transform:translate(105.464px,93.921px);
            opacity:1
          }
          45.6250% {
            transform:translate(105.61px,93.162px);
            opacity:1
          }
          45.9375% {
            transform:translate(105.746px,92.383px);
            opacity:1
          }
          46.2500% {
            transform:translate(105.872px,91.586px);
            opacity:1
          }
          46.5625% {
            transform:translate(105.987px,90.771px);
            opacity:1
          }
          46.8750% {
            transform:translate(106.094px,89.939px);
            opacity:1
          }
          47.1875% {
            transform:translate(106.19px,89.09px);
            opacity:1
          }
          47.5000% {
            transform:translate(106.277px,88.226px);
            opacity:1
          }
          47.8125% {
            transform:translate(106.355px,87.348px);
            opacity:1
          }
          48.1250% {
            transform:translate(106.423px,86.458px);
            opacity:1
          }
          48.4375% {
            transform:translate(106.482px,85.555px);
            opacity:1
          }
          48.7500% {
            transform:translate(106.532px,84.643px);
            opacity:1
          }
          49.0625% {
            transform:translate(106.573px,83.722px);
            opacity:1
          }
          49.3750% {
            transform:translate(106.604px,82.795px);
            opacity:1
          }
          49.6875% {
            transform:translate(106.627px,81.862px);
            opacity:1
          }
          50.0000% {
            transform:translate(106.64px,80.926px);
            opacity:1
          }
          50.3125% {
            transform:translate(106.645px,79.988px);
            opacity:1
          }
          50.6250% {
            transform:translate(106.64px,79.05px);
            opacity:1
          }
          50.9375% {
            transform:translate(106.626px,78.114px);
            opacity:1
          }
          51.2500% {
            transform:translate(106.603px,77.181px);
            opacity:1
          }
          51.5625% {
            transform:translate(106.572px,76.254px);
            opacity:1
          }
          51.8750% {
            transform:translate(106.531px,75.333px);
            opacity:1
          }
          52.1875% {
            transform:translate(106.481px,74.421px);
            opacity:1
          }
          52.5000% {
            transform:translate(106.422px,73.519px);
            opacity:1
          }
          52.8125% {
            transform:translate(106.353px,72.629px);
            opacity:1
          }
          53.1250% {
            transform:translate(106.275px,71.751px);
            opacity:1
          }
          53.4375% {
            transform:translate(106.188px,70.888px);
            opacity:1
          }
          53.7500% {
            transform:translate(106.091px,70.039px);
            opacity:1
          }
          54.0625% {
            transform:translate(105.985px,69.207px);
            opacity:1
          }
          54.3750% {
            transform:translate(105.868px,68.393px);
            opacity:1
          }
          54.6875% {
            transform:translate(105.742px,67.596px);
            opacity:1
          }
          55.0000% {
            transform:translate(105.606px,66.818px);
            opacity:1
          }
          55.3125% {
            transform:translate(105.46px,66.059px);
            opacity:1
          }
          55.6250% {
            transform:translate(105.304px,65.32px);
            opacity:1
          }
          55.9375% {
            transform:translate(105.137px,64.602px);
            opacity:1
          }
          56.2500% {
            transform:translate(104.96px,63.903px);
            opacity:1
          }
          56.5625% {
            transform:translate(104.772px,63.226px);
            opacity:1
          }
          56.8750% {
            transform:translate(104.573px,62.569px);
            opacity:1
          }
          57.1875% {
            transform:translate(104.363px,61.932px);
            opacity:1
          }
          57.5000% {
            transform:translate(104.142px,61.316px);
            opacity:1
          }
          57.8125% {
            transform:translate(103.91px,60.721px);
            opacity:1
          }
          58.1250% {
            transform:translate(103.666px,60.146px);
            opacity:1
          }
          58.4375% {
            transform:translate(103.41px,59.591px);
            opacity:1
          }
          58.7500% {
            transform:translate(103.142px,59.056px);
            opacity:1
          }
          59.0625% {
            transform:translate(102.863px,58.54px);
            opacity:1
          }
          59.3750% {
            transform:translate(102.571px,58.043px);
            opacity:1
          }
          59.6875% {
            transform:translate(102.267px,57.565px);
            opacity:1
          }
          60.0000% {
            transform:translate(101.95px,57.105px);
            opacity:1
          }
          60.3125% {
            transform:translate(101.621px,56.662px);
            opacity:1
          }
          60.6250% {
            transform:translate(101.279px,56.237px);
            opacity:1
          }
          60.9375% {
            transform:translate(100.924px,55.829px);
            opacity:1
          }
          61.2500% {
            transform:translate(100.555px,55.437px);
            opacity:1
          }
          61.5625% {
            transform:translate(100.174px,55.061px);
            opacity:1
          }
          61.8750% {
            transform:translate(99.779px,54.701px);
            opacity:1
          }
          62.1875% {
            transform:translate(99.37px,54.355px);
            opacity:1
          }
          62.5000% {
            transform:translate(98.948px,54.023px);
            opacity:1
          }
          62.8125% {
            transform:translate(98.512px,53.705px);
            opacity:1
          }
          63.1250% {
            transform:translate(98.062px,53.401px);
            opacity:1
          }
          63.4375% {
            transform:translate(97.599px,53.109px);
            opacity:1
          }
          63.7500% {
            transform:translate(97.121px,52.83px);
            opacity:1
          }
          64.0625% {
            transform:translate(96.629px,52.563px);
            opacity:1
          }
          64.3750% {
            transform:translate(96.124px,52.307px);
            opacity:1
          }
          64.6875% {
            transform:translate(95.604px,52.062px);
            opacity:1
          }
          65.0000% {
            transform:translate(95.07px,51.828px);
            opacity:1
          }
          65.3125% {
            transform:translate(94.522px,51.604px);
            opacity:1
          }
          65.6250% {
            transform:translate(93.96px,51.39px);
            opacity:1
          }
          65.9375% {
            transform:translate(93.384px,51.186px);
            opacity:1
          }
          66.2500% {
            transform:translate(92.794px,50.99px);
            opacity:1
          }
          66.5625% {
            transform:translate(92.19px,50.803px);
            opacity:1
          }
          66.8750% {
            transform:translate(91.572px,50.624px);
            opacity:1
          }
          67.1875% {
            transform:translate(90.94px,50.453px);
            opacity:1
          }
          67.5000% {
            transform:translate(90.294px,50.29px);
            opacity:1
          }
          67.8125% {
            transform:translate(89.635px,50.134px);
            opacity:1
          }
          68.1250% {
            transform:translate(88.963px,49.985px);
            opacity:1
          }
          68.4375% {
            transform:translate(88.277px,49.843px);
            opacity:1
          }
          68.7500% {
            transform:translate(87.578px,49.707px);
            opacity:1
          }
          69.0625% {
            transform:translate(86.866px,49.577px);
            opacity:1
          }
          69.3750% {
            transform:translate(86.141px,49.453px);
            opacity:1
          }
          69.6875% {
            transform:translate(85.403px,49.335px);
            opacity:1
          }
          70.0000% {
            transform:translate(84.653px,49.222px);
            opacity:1
          }
          70.3125% {
            transform:translate(83.891px,49.114px);
            opacity:1
          }
          70.6250% {
            transform:translate(83.117px,49.011px);
            opacity:1
          }
          70.9375% {
            transform:translate(82.33px,48.913px);
            opacity:1
          }
          71.2500% {
            transform:translate(81.532px,48.819px);
            opacity:1
          }
          71.5625% {
            transform:translate(80.723px,48.729px);
            opacity:1
          }
          71.8750% {
            transform:translate(79.903px,48.644px);
            opacity:1
          }
          72.1875% {
            transform:translate(79.071px,48.562px);
            opacity:1
          }
          72.5000% {
            transform:translate(78.229px,48.484px);
            opacity:1
          }
          72.8125% {
            transform:translate(77.377px,48.41px);
            opacity:1
          }
          73.1250% {
            transform:translate(76.514px,48.339px);
            opacity:1
          }
          73.4375% {
            transform:translate(75.642px,48.272px);
            opacity:1
          }
          73.7500% {
            transform:translate(74.759px,48.207px);
            opacity:1
          }
          74.0625% {
            transform:translate(73.868px,48.145px);
            opacity:1
          }
          74.3750% {
            transform:translate(72.967px,48.087px);
            opacity:1
          }
          74.6875% {
            transform:translate(72.057px,48.031px);
            opacity:1
          }
          75.0000% {
            transform:translate(71.139px,47.977px);
            opacity:1
          }
          75.3125% {
            transform:translate(70.212px,47.926px);
            opacity:1
          }
          75.6250% {
            transform:translate(69.277px,47.877px);
            opacity:1
          }
          75.9375% {
            transform:translate(68.334px,47.831px);
            opacity:1
          }
          76.2500% {
            transform:translate(67.384px,47.786px);
            opacity:1
          }
          76.5625% {
            transform:translate(66.426px,47.744px);
            opacity:1
          }
          76.8750% {
            transform:translate(65.461px,47.704px);
            opacity:1
          }
          77.1875% {
            transform:translate(64.489px,47.665px);
            opacity:1
          }
          77.5000% {
            transform:translate(63.51px,47.629px);
            opacity:1
          }
          77.8125% {
            transform:translate(62.524px,47.594px);
            opacity:1
          }
          78.1250% {
            transform:translate(61.533px,47.56px);
            opacity:1
          }
          78.4375% {
            transform:translate(60.535px,47.528px);
            opacity:1
          }
          78.7500% {
            transform:translate(59.532px,47.498px);
            opacity:1
          }
          79.0625% {
            transform:translate(58.523px,47.469px);
            opacity:1
          }
          79.3750% {
            transform:translate(57.508px,47.441px);
            opacity:1
          }
          79.6875% {
            transform:translate(56.489px,47.415px);
            opacity:1
          }
          80.0000% {
            transform:translate(55.464px,47.39px);
            opacity:1
          }
          80.3125% {
            transform:translate(54.434px,47.366px);
            opacity:1
          }
          80.6250% {
            transform:translate(53.4px,47.343px);
            opacity:1
          }
          80.9375% {
            transform:translate(52.361px,47.321px);
            opacity:1
          }
          81.2500% {
            transform:translate(51.318px,47.3px);
            opacity:1
          }
          81.5625% {
            transform:translate(50.271px,47.28px);
            opacity:1
          }
          81.8750% {
            transform:translate(49.22px,47.261px);
            opacity:1
          }
          82.1875% {
            transform:translate(48.165px,47.243px);
            opacity:1
          }
          82.5000% {
            transform:translate(47.106px,47.226px);
            opacity:1
          }
          82.8125% {
            transform:translate(46.044px,47.21px);
            opacity:1
          }
          83.1250% {
            transform:translate(44.979px,47.194px);
            opacity:1
          }
          83.4375% {
            transform:translate(43.91px,47.179px);
            opacity:1
          }
          83.7500% {
            transform:translate(42.838px,47.165px);
            opacity:1
          }
          84.0625% {
            transform:translate(41.763px,47.151px);
            opacity:1
          }
          84.3750% {
            transform:translate(40.685px,47.138px);
            opacity:1
          }
          84.6875% {
            transform:translate(39.605px,47.126px);
            opacity:1
          }
          85.0000% {
            transform:translate(38.522px,47.114px);
            opacity:1
          }
          85.3125% {
            transform:translate(37.436px,47.103px);
            opacity:1
          }
          85.6250% {
            transform:translate(36.348px,47.092px);
            opacity:1
          }
          85.9375% {
            transform:translate(35.258px,47.082px);
            opacity:1
          }
          86.2500% {
            transform:translate(34.165px,47.072px);
            opacity:1
          }
          86.5625% {
            transform:translate(33.07px,47.063px);
            opacity:1
          }
          86.8750% {
            transform:translate(31.974px,47.054px);
            opacity:1
          }
          87.1875% {
            transform:translate(30.875px,47.045px);
            opacity:1
          }
          87.5000% {
            transform:translate(29.775px,47.037px);
            opacity:1
          }
          87.8125% {
            transform:translate(28.672px,47.03px);
            opacity:1
          }
          88.1250% {
            transform:translate(27.568px,47.022px);
            opacity:1
          }
          88.4375% {
            transform:translate(26.463px,47.015px);
            opacity:1
          }
          88.7500% {
            transform:translate(25.356px,47.009px);
            opacity:1
          }
          89.0625% {
            transform:translate(24.247px,47.002px);
            opacity:1
          }
          89.3750% {
            transform:translate(23.137px,46.996px);
            opacity:1
          }
          89.6875% {
            transform:translate(22.025px,46.99px);
            opacity:1
          }
          90.0000% {
            transform:translate(20.913px,46.985px);
            opacity:1
          }
          90.3125% {
            transform:translate(19.799px,46.979px);
            opacity:1
          }
          90.6250% {
            transform:translate(18.684px,46.974px);
            opacity:1
          }
          90.9375% {
            transform:translate(17.567px,46.97px);
            opacity:1
          }
          91.2500% {
            transform:translate(16.45px,46.965px);
            opacity:1
          }
          91.5625% {
            transform:translate(15.332px,46.961px);
            opacity:1
          }
          91.8750% {
            transform:translate(14.212px,46.957px);
            opacity:0.737
          }
          92.1875% {
            transform:translate(13.092px,46.953px);
            opacity:0.364
          }
          92.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          92.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          93.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          93.4375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          93.7500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          94.0625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          94.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          94.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.3125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.6250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          95.9375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          96.2500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          96.5625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          96.8750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          97.1875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          97.5000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          97.8125% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          98.1250% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          98.4375% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          98.7500% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          99.0625% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          99.3750% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          99.6875% {
            transform:translate(12px,113.051px);
            opacity:0
          }
          100.0000% {
            transform:translate(12px,113.051px);
            opacity:0
          }
        }
        .upwelling-1-0 {
          animation:coastal-parcel-1-0 16s linear infinite
        }
        @keyframes coastal-parcel-1-0 {
          0.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          0.3125% {
            transform:translate(13.018px,106.507px);
            opacity:0.339
          }
          0.6250% {
            transform:translate(14.036px,106.499px);
            opacity:0.679
          }
          0.9375% {
            transform:translate(15.052px,106.489px);
            opacity:1
          }
          1.2500% {
            transform:translate(16.068px,106.48px);
            opacity:1
          }
          1.5625% {
            transform:translate(17.083px,106.469px);
            opacity:1
          }
          1.8750% {
            transform:translate(18.096px,106.459px);
            opacity:1
          }
          2.1875% {
            transform:translate(19.109px,106.448px);
            opacity:1
          }
          2.5000% {
            transform:translate(20.12px,106.436px);
            opacity:1
          }
          2.8125% {
            transform:translate(21.13px,106.424px);
            opacity:1
          }
          3.1250% {
            transform:translate(22.139px,106.412px);
            opacity:1
          }
          3.4375% {
            transform:translate(23.146px,106.399px);
            opacity:1
          }
          3.7500% {
            transform:translate(24.152px,106.385px);
            opacity:1
          }
          4.0625% {
            transform:translate(25.157px,106.371px);
            opacity:1
          }
          4.3750% {
            transform:translate(26.16px,106.356px);
            opacity:1
          }
          4.6875% {
            transform:translate(27.162px,106.341px);
            opacity:1
          }
          5.0000% {
            transform:translate(28.162px,106.324px);
            opacity:1
          }
          5.3125% {
            transform:translate(29.161px,106.308px);
            opacity:1
          }
          5.6250% {
            transform:translate(30.158px,106.29px);
            opacity:1
          }
          5.9375% {
            transform:translate(31.152px,106.271px);
            opacity:1
          }
          6.2500% {
            transform:translate(32.146px,106.252px);
            opacity:1
          }
          6.5625% {
            transform:translate(33.137px,106.232px);
            opacity:1
          }
          6.8750% {
            transform:translate(34.126px,106.211px);
            opacity:1
          }
          7.1875% {
            transform:translate(35.113px,106.189px);
            opacity:1
          }
          7.5000% {
            transform:translate(36.097px,106.166px);
            opacity:1
          }
          7.8125% {
            transform:translate(37.08px,106.143px);
            opacity:1
          }
          8.1250% {
            transform:translate(38.06px,106.118px);
            opacity:1
          }
          8.4375% {
            transform:translate(39.038px,106.092px);
            opacity:1
          }
          8.7500% {
            transform:translate(40.013px,106.065px);
            opacity:1
          }
          9.0625% {
            transform:translate(40.985px,106.036px);
            opacity:1
          }
          9.3750% {
            transform:translate(41.955px,106.007px);
            opacity:1
          }
          9.6875% {
            transform:translate(42.922px,105.976px);
            opacity:1
          }
          10.0000% {
            transform:translate(43.885px,105.944px);
            opacity:1
          }
          10.3125% {
            transform:translate(44.846px,105.911px);
            opacity:1
          }
          10.6250% {
            transform:translate(45.803px,105.876px);
            opacity:1
          }
          10.9375% {
            transform:translate(46.757px,105.839px);
            opacity:1
          }
          11.2500% {
            transform:translate(47.708px,105.801px);
            opacity:1
          }
          11.5625% {
            transform:translate(48.655px,105.761px);
            opacity:1
          }
          11.8750% {
            transform:translate(49.598px,105.72px);
            opacity:1
          }
          12.1875% {
            transform:translate(50.537px,105.677px);
            opacity:1
          }
          12.5000% {
            transform:translate(51.473px,105.631px);
            opacity:1
          }
          12.8125% {
            transform:translate(52.404px,105.584px);
            opacity:1
          }
          13.1250% {
            transform:translate(53.331px,105.535px);
            opacity:1
          }
          13.4375% {
            transform:translate(54.253px,105.484px);
            opacity:1
          }
          13.7500% {
            transform:translate(55.171px,105.431px);
            opacity:1
          }
          14.0625% {
            transform:translate(56.084px,105.375px);
            opacity:1
          }
          14.3750% {
            transform:translate(56.992px,105.317px);
            opacity:1
          }
          14.6875% {
            transform:translate(57.895px,105.256px);
            opacity:1
          }
          15.0000% {
            transform:translate(58.792px,105.193px);
            opacity:1
          }
          15.3125% {
            transform:translate(59.684px,105.127px);
            opacity:1
          }
          15.6250% {
            transform:translate(60.571px,105.058px);
            opacity:1
          }
          15.9375% {
            transform:translate(61.452px,104.987px);
            opacity:1
          }
          16.2500% {
            transform:translate(62.326px,104.912px);
            opacity:1
          }
          16.5625% {
            transform:translate(63.194px,104.834px);
            opacity:1
          }
          16.8750% {
            transform:translate(64.056px,104.753px);
            opacity:1
          }
          17.1875% {
            transform:translate(64.912px,104.669px);
            opacity:1
          }
          17.5000% {
            transform:translate(65.76px,104.58px);
            opacity:1
          }
          17.8125% {
            transform:translate(66.602px,104.489px);
            opacity:1
          }
          18.1250% {
            transform:translate(67.436px,104.393px);
            opacity:1
          }
          18.4375% {
            transform:translate(68.263px,104.293px);
            opacity:1
          }
          18.7500% {
            transform:translate(69.082px,104.189px);
            opacity:1
          }
          19.0625% {
            transform:translate(69.893px,104.081px);
            opacity:1
          }
          19.3750% {
            transform:translate(70.697px,103.968px);
            opacity:1
          }
          19.6875% {
            transform:translate(71.492px,103.851px);
            opacity:1
          }
          20.0000% {
            transform:translate(72.278px,103.729px);
            opacity:1
          }
          20.3125% {
            transform:translate(73.056px,103.602px);
            opacity:1
          }
          20.6250% {
            transform:translate(73.825px,103.469px);
            opacity:1
          }
          20.9375% {
            transform:translate(74.584px,103.331px);
            opacity:1
          }
          21.2500% {
            transform:translate(75.335px,103.188px);
            opacity:1
          }
          21.5625% {
            transform:translate(76.075px,103.039px);
            opacity:1
          }
          21.8750% {
            transform:translate(76.806px,102.884px);
            opacity:1
          }
          22.1875% {
            transform:translate(77.527px,102.722px);
            opacity:1
          }
          22.5000% {
            transform:translate(78.238px,102.554px);
            opacity:1
          }
          22.8125% {
            transform:translate(78.938px,102.38px);
            opacity:1
          }
          23.1250% {
            transform:translate(79.628px,102.198px);
            opacity:1
          }
          23.4375% {
            transform:translate(80.306px,102.009px);
            opacity:1
          }
          23.7500% {
            transform:translate(80.974px,101.814px);
            opacity:1
          }
          24.0625% {
            transform:translate(81.631px,101.61px);
            opacity:1
          }
          24.3750% {
            transform:translate(82.276px,101.399px);
            opacity:1
          }
          24.6875% {
            transform:translate(82.909px,101.179px);
            opacity:1
          }
          25.0000% {
            transform:translate(83.531px,100.951px);
            opacity:1
          }
          25.3125% {
            transform:translate(84.14px,100.715px);
            opacity:1
          }
          25.6250% {
            transform:translate(84.738px,100.47px);
            opacity:1
          }
          25.9375% {
            transform:translate(85.323px,100.216px);
            opacity:1
          }
          26.2500% {
            transform:translate(85.896px,99.952px);
            opacity:1
          }
          26.5625% {
            transform:translate(86.456px,99.679px);
            opacity:1
          }
          26.8750% {
            transform:translate(87.004px,99.396px);
            opacity:1
          }
          27.1875% {
            transform:translate(87.538px,99.103px);
            opacity:1
          }
          27.5000% {
            transform:translate(88.06px,98.8px);
            opacity:1
          }
          27.8125% {
            transform:translate(88.568px,98.486px);
            opacity:1
          }
          28.1250% {
            transform:translate(89.063px,98.162px);
            opacity:1
          }
          28.4375% {
            transform:translate(89.545px,97.827px);
            opacity:1
          }
          28.7500% {
            transform:translate(90.014px,97.48px);
            opacity:1
          }
          29.0625% {
            transform:translate(90.468px,97.123px);
            opacity:1
          }
          29.3750% {
            transform:translate(90.91px,96.754px);
            opacity:1
          }
          29.6875% {
            transform:translate(91.337px,96.373px);
            opacity:1
          }
          30.0000% {
            transform:translate(91.751px,95.981px);
            opacity:1
          }
          30.3125% {
            transform:translate(92.151px,95.576px);
            opacity:1
          }
          30.6250% {
            transform:translate(92.537px,95.16px);
            opacity:1
          }
          30.9375% {
            transform:translate(92.909px,94.732px);
            opacity:1
          }
          31.2500% {
            transform:translate(93.267px,94.292px);
            opacity:1
          }
          31.5625% {
            transform:translate(93.611px,93.839px);
            opacity:1
          }
          31.8750% {
            transform:translate(93.942px,93.375px);
            opacity:1
          }
          32.1875% {
            transform:translate(94.258px,92.899px);
            opacity:1
          }
          32.5000% {
            transform:translate(94.56px,92.411px);
            opacity:1
          }
          32.8125% {
            transform:translate(94.848px,91.911px);
            opacity:1
          }
          33.1250% {
            transform:translate(95.121px,91.399px);
            opacity:1
          }
          33.4375% {
            transform:translate(95.381px,90.876px);
            opacity:1
          }
          33.7500% {
            transform:translate(95.627px,90.342px);
            opacity:1
          }
          34.0625% {
            transform:translate(95.858px,89.797px);
            opacity:1
          }
          34.3750% {
            transform:translate(96.076px,89.242px);
            opacity:1
          }
          34.6875% {
            transform:translate(96.279px,88.676px);
            opacity:1
          }
          35.0000% {
            transform:translate(96.468px,88.101px);
            opacity:1
          }
          35.3125% {
            transform:translate(96.643px,87.517px);
            opacity:1
          }
          35.6250% {
            transform:translate(96.804px,86.924px);
            opacity:1
          }
          35.9375% {
            transform:translate(96.952px,86.322px);
            opacity:1
          }
          36.2500% {
            transform:translate(97.085px,85.713px);
            opacity:1
          }
          36.5625% {
            transform:translate(97.204px,85.097px);
            opacity:1
          }
          36.8750% {
            transform:translate(97.309px,84.475px);
            opacity:1
          }
          37.1875% {
            transform:translate(97.399px,83.848px);
            opacity:1
          }
          37.5000% {
            transform:translate(97.476px,83.215px);
            opacity:1
          }
          37.8125% {
            transform:translate(97.54px,82.578px);
            opacity:1
          }
          38.1250% {
            transform:translate(97.589px,81.939px);
            opacity:1
          }
          38.4375% {
            transform:translate(97.624px,81.296px);
            opacity:1
          }
          38.7500% {
            transform:translate(97.645px,80.652px);
            opacity:1
          }
          39.0625% {
            transform:translate(97.652px,80.007px);
            opacity:1
          }
          39.3750% {
            transform:translate(97.645px,79.362px);
            opacity:1
          }
          39.6875% {
            transform:translate(97.624px,78.718px);
            opacity:1
          }
          40.0000% {
            transform:translate(97.59px,78.076px);
            opacity:1
          }
          40.3125% {
            transform:translate(97.541px,77.436px);
            opacity:1
          }
          40.6250% {
            transform:translate(97.478px,76.799px);
            opacity:1
          }
          40.9375% {
            transform:translate(97.401px,76.166px);
            opacity:1
          }
          41.2500% {
            transform:translate(97.311px,75.538px);
            opacity:1
          }
          41.5625% {
            transform:translate(97.206px,74.916px);
            opacity:1
          }
          41.8750% {
            transform:translate(97.087px,74.3px);
            opacity:1
          }
          42.1875% {
            transform:translate(96.955px,73.691px);
            opacity:1
          }
          42.5000% {
            transform:translate(96.808px,73.09px);
            opacity:1
          }
          42.8125% {
            transform:translate(96.647px,72.496px);
            opacity:1
          }
          43.1250% {
            transform:translate(96.472px,71.912px);
            opacity:1
          }
          43.4375% {
            transform:translate(96.283px,71.336px);
            opacity:1
          }
          43.7500% {
            transform:translate(96.08px,70.77px);
            opacity:1
          }
          44.0625% {
            transform:translate(95.863px,70.215px);
            opacity:1
          }
          44.3750% {
            transform:translate(95.632px,69.67px);
            opacity:1
          }
          44.6875% {
            transform:translate(95.387px,69.135px);
            opacity:1
          }
          45.0000% {
            transform:translate(95.127px,68.612px);
            opacity:1
          }
          45.3125% {
            transform:translate(94.854px,68.101px);
            opacity:1
          }
          45.6250% {
            transform:translate(94.566px,67.6px);
            opacity:1
          }
          45.9375% {
            transform:translate(94.264px,67.112px);
            opacity:1
          }
          46.2500% {
            transform:translate(93.949px,66.635px);
            opacity:1
          }
          46.5625% {
            transform:translate(93.619px,66.171px);
            opacity:1
          }
          46.8750% {
            transform:translate(93.275px,65.718px);
            opacity:1
          }
          47.1875% {
            transform:translate(92.917px,65.278px);
            opacity:1
          }
          47.5000% {
            transform:translate(92.545px,64.849px);
            opacity:1
          }
          47.8125% {
            transform:translate(92.16px,64.433px);
            opacity:1
          }
          48.1250% {
            transform:translate(91.76px,64.028px);
            opacity:1
          }
          48.4375% {
            transform:translate(91.347px,63.635px);
            opacity:1
          }
          48.7500% {
            transform:translate(90.919px,63.255px);
            opacity:1
          }
          49.0625% {
            transform:translate(90.478px,62.885px);
            opacity:1
          }
          49.3750% {
            transform:translate(90.024px,62.527px);
            opacity:1
          }
          49.6875% {
            transform:translate(89.556px,62.181px);
            opacity:1
          }
          50.0000% {
            transform:translate(89.074px,61.845px);
            opacity:1
          }
          50.3125% {
            transform:translate(88.579px,61.521px);
            opacity:1
          }
          50.6250% {
            transform:translate(88.071px,61.207px);
            opacity:1
          }
          50.9375% {
            transform:translate(87.55px,60.903px);
            opacity:1
          }
          51.2500% {
            transform:translate(87.016px,60.61px);
            opacity:1
          }
          51.5625% {
            transform:translate(86.468px,60.327px);
            opacity:1
          }
          51.8750% {
            transform:translate(85.908px,60.054px);
            opacity:1
          }
          52.1875% {
            transform:translate(85.336px,59.79px);
            opacity:1
          }
          52.5000% {
            transform:translate(84.751px,59.536px);
            opacity:1
          }
          52.8125% {
            transform:translate(84.154px,59.29px);
            opacity:1
          }
          53.1250% {
            transform:translate(83.544px,59.054px);
            opacity:1
          }
          53.4375% {
            transform:translate(82.923px,58.826px);
            opacity:1
          }
          53.7500% {
            transform:translate(82.29px,58.606px);
            opacity:1
          }
          54.0625% {
            transform:translate(81.645px,58.395px);
            opacity:1
          }
          54.3750% {
            transform:translate(80.989px,58.191px);
            opacity:1
          }
          54.6875% {
            transform:translate(80.321px,57.995px);
            opacity:1
          }
          55.0000% {
            transform:translate(79.643px,57.806px);
            opacity:1
          }
          55.3125% {
            transform:translate(78.953px,57.624px);
            opacity:1
          }
          55.6250% {
            transform:translate(78.253px,57.45px);
            opacity:1
          }
          55.9375% {
            transform:translate(77.543px,57.282px);
            opacity:1
          }
          56.2500% {
            transform:translate(76.822px,57.12px);
            opacity:1
          }
          56.5625% {
            transform:translate(76.091px,56.965px);
            opacity:1
          }
          56.8750% {
            transform:translate(75.351px,56.815px);
            opacity:1
          }
          57.1875% {
            transform:translate(74.601px,56.672px);
            opacity:1
          }
          57.5000% {
            transform:translate(73.841px,56.534px);
            opacity:1
          }
          57.8125% {
            transform:translate(73.073px,56.401px);
            opacity:1
          }
          58.1250% {
            transform:translate(72.295px,56.274px);
            opacity:1
          }
          58.4375% {
            transform:translate(71.509px,56.152px);
            opacity:1
          }
          58.7500% {
            transform:translate(70.714px,56.034px);
            opacity:1
          }
          59.0625% {
            transform:translate(69.911px,55.921px);
            opacity:1
          }
          59.3750% {
            transform:translate(69.1px,55.813px);
            opacity:1
          }
          59.6875% {
            transform:translate(68.281px,55.709px);
            opacity:1
          }
          60.0000% {
            transform:translate(67.454px,55.609px);
            opacity:1
          }
          60.3125% {
            transform:translate(66.62px,55.513px);
            opacity:1
          }
          60.6250% {
            transform:translate(65.779px,55.422px);
            opacity:1
          }
          60.9375% {
            transform:translate(64.931px,55.333px);
            opacity:1
          }
          61.2500% {
            transform:translate(64.075px,55.249px);
            opacity:1
          }
          61.5625% {
            transform:translate(63.214px,55.168px);
            opacity:1
          }
          61.8750% {
            transform:translate(62.345px,55.09px);
            opacity:1
          }
          62.1875% {
            transform:translate(61.471px,55.015px);
            opacity:1
          }
          62.5000% {
            transform:translate(60.59px,54.943px);
            opacity:1
          }
          62.8125% {
            transform:translate(59.704px,54.874px);
            opacity:1
          }
          63.1250% {
            transform:translate(58.812px,54.808px);
            opacity:1
          }
          63.4375% {
            transform:translate(57.915px,54.745px);
            opacity:1
          }
          63.7500% {
            transform:translate(57.012px,54.685px);
            opacity:1
          }
          64.0625% {
            transform:translate(56.104px,54.626px);
            opacity:1
          }
          64.3750% {
            transform:translate(55.191px,54.571px);
            opacity:1
          }
          64.6875% {
            transform:translate(54.274px,54.517px);
            opacity:1
          }
          65.0000% {
            transform:translate(53.351px,54.466px);
            opacity:1
          }
          65.3125% {
            transform:translate(52.424px,54.417px);
            opacity:1
          }
          65.6250% {
            transform:translate(51.493px,54.37px);
            opacity:1
          }
          65.9375% {
            transform:translate(50.558px,54.324px);
            opacity:1
          }
          66.2500% {
            transform:translate(49.619px,54.281px);
            opacity:1
          }
          66.5625% {
            transform:translate(48.676px,54.24px);
            opacity:1
          }
          66.8750% {
            transform:translate(47.729px,54.2px);
            opacity:1
          }
          67.1875% {
            transform:translate(46.778px,54.162px);
            opacity:1
          }
          67.5000% {
            transform:translate(45.824px,54.125px);
            opacity:1
          }
          67.8125% {
            transform:translate(44.867px,54.09px);
            opacity:1
          }
          68.1250% {
            transform:translate(43.906px,54.057px);
            opacity:1
          }
          68.4375% {
            transform:translate(42.943px,54.024px);
            opacity:1
          }
          68.7500% {
            transform:translate(41.976px,53.994px);
            opacity:1
          }
          69.0625% {
            transform:translate(41.007px,53.964px);
            opacity:1
          }
          69.3750% {
            transform:translate(40.034px,53.936px);
            opacity:1
          }
          69.6875% {
            transform:translate(39.059px,53.909px);
            opacity:1
          }
          70.0000% {
            transform:translate(38.082px,53.883px);
            opacity:1
          }
          70.3125% {
            transform:translate(37.102px,53.858px);
            opacity:1
          }
          70.6250% {
            transform:translate(36.119px,53.834px);
            opacity:1
          }
          70.9375% {
            transform:translate(35.134px,53.811px);
            opacity:1
          }
          71.2500% {
            transform:translate(34.148px,53.789px);
            opacity:1
          }
          71.5625% {
            transform:translate(33.158px,53.768px);
            opacity:1
          }
          71.8750% {
            transform:translate(32.167px,53.748px);
            opacity:1
          }
          72.1875% {
            transform:translate(31.174px,53.729px);
            opacity:1
          }
          72.5000% {
            transform:translate(30.18px,53.711px);
            opacity:1
          }
          72.8125% {
            transform:translate(29.183px,53.693px);
            opacity:1
          }
          73.1250% {
            transform:translate(28.184px,53.676px);
            opacity:1
          }
          73.4375% {
            transform:translate(27.184px,53.66px);
            opacity:1
          }
          73.7500% {
            transform:translate(26.183px,53.644px);
            opacity:1
          }
          74.0625% {
            transform:translate(25.179px,53.629px);
            opacity:1
          }
          74.3750% {
            transform:translate(24.175px,53.615px);
            opacity:1
          }
          74.6875% {
            transform:translate(23.169px,53.601px);
            opacity:1
          }
          75.0000% {
            transform:translate(22.161px,53.588px);
            opacity:1
          }
          75.3125% {
            transform:translate(21.152px,53.576px);
            opacity:1
          }
          75.6250% {
            transform:translate(20.142px,53.564px);
            opacity:1
          }
          75.9375% {
            transform:translate(19.131px,53.552px);
            opacity:1
          }
          76.2500% {
            transform:translate(18.119px,53.541px);
            opacity:1
          }
          76.5625% {
            transform:translate(17.105px,53.531px);
            opacity:1
          }
          76.8750% {
            transform:translate(16.09px,53.521px);
            opacity:1
          }
          77.1875% {
            transform:translate(15.075px,53.511px);
            opacity:1
          }
          77.5000% {
            transform:translate(14.058px,53.502px);
            opacity:0.686
          }
          77.8125% {
            transform:translate(13.041px,53.493px);
            opacity:0.347
          }
          78.1250% {
            transform:translate(12.022px,53.484px);
            opacity:0.007
          }
          78.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          78.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          79.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          79.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          79.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          80.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          80.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          80.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          80.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          81.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          81.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          81.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          82.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          82.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          82.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          83.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          83.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          83.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          84.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          84.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          84.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          85.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          85.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          85.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          85.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          86.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          86.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          86.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          87.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          87.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          87.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          88.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          88.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          88.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          89.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          89.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          89.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          91.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          91.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          91.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          92.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          92.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          92.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          93.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          93.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          93.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          94.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          94.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          94.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          96.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          96.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          96.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          97.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          97.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          97.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          98.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          98.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          98.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          99.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          99.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          99.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          100.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
        }
        .upwelling-1-1 {
          animation:coastal-parcel-1-1 16s linear infinite
        }
        @keyframes coastal-parcel-1-1 {
          0.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          0.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          0.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          0.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          1.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          1.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          1.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          2.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          2.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          2.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          3.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          3.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          3.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          4.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          4.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          4.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          5.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          5.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          5.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          5.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          6.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          6.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          6.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          7.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          7.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          7.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          8.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          8.4375% {
            transform:translate(13.018px,106.507px);
            opacity:0.339
          }
          8.7500% {
            transform:translate(14.036px,106.499px);
            opacity:0.679
          }
          9.0625% {
            transform:translate(15.052px,106.489px);
            opacity:1
          }
          9.3750% {
            transform:translate(16.068px,106.48px);
            opacity:1
          }
          9.6875% {
            transform:translate(17.083px,106.469px);
            opacity:1
          }
          10.0000% {
            transform:translate(18.096px,106.459px);
            opacity:1
          }
          10.3125% {
            transform:translate(19.109px,106.448px);
            opacity:1
          }
          10.6250% {
            transform:translate(20.12px,106.436px);
            opacity:1
          }
          10.9375% {
            transform:translate(21.13px,106.424px);
            opacity:1
          }
          11.2500% {
            transform:translate(22.139px,106.412px);
            opacity:1
          }
          11.5625% {
            transform:translate(23.146px,106.399px);
            opacity:1
          }
          11.8750% {
            transform:translate(24.152px,106.385px);
            opacity:1
          }
          12.1875% {
            transform:translate(25.157px,106.371px);
            opacity:1
          }
          12.5000% {
            transform:translate(26.16px,106.356px);
            opacity:1
          }
          12.8125% {
            transform:translate(27.162px,106.341px);
            opacity:1
          }
          13.1250% {
            transform:translate(28.162px,106.324px);
            opacity:1
          }
          13.4375% {
            transform:translate(29.161px,106.308px);
            opacity:1
          }
          13.7500% {
            transform:translate(30.158px,106.29px);
            opacity:1
          }
          14.0625% {
            transform:translate(31.152px,106.271px);
            opacity:1
          }
          14.3750% {
            transform:translate(32.146px,106.252px);
            opacity:1
          }
          14.6875% {
            transform:translate(33.137px,106.232px);
            opacity:1
          }
          15.0000% {
            transform:translate(34.126px,106.211px);
            opacity:1
          }
          15.3125% {
            transform:translate(35.113px,106.189px);
            opacity:1
          }
          15.6250% {
            transform:translate(36.097px,106.166px);
            opacity:1
          }
          15.9375% {
            transform:translate(37.08px,106.143px);
            opacity:1
          }
          16.2500% {
            transform:translate(38.06px,106.118px);
            opacity:1
          }
          16.5625% {
            transform:translate(39.038px,106.092px);
            opacity:1
          }
          16.8750% {
            transform:translate(40.013px,106.065px);
            opacity:1
          }
          17.1875% {
            transform:translate(40.985px,106.036px);
            opacity:1
          }
          17.5000% {
            transform:translate(41.955px,106.007px);
            opacity:1
          }
          17.8125% {
            transform:translate(42.922px,105.976px);
            opacity:1
          }
          18.1250% {
            transform:translate(43.885px,105.944px);
            opacity:1
          }
          18.4375% {
            transform:translate(44.846px,105.911px);
            opacity:1
          }
          18.7500% {
            transform:translate(45.803px,105.876px);
            opacity:1
          }
          19.0625% {
            transform:translate(46.757px,105.839px);
            opacity:1
          }
          19.3750% {
            transform:translate(47.708px,105.801px);
            opacity:1
          }
          19.6875% {
            transform:translate(48.655px,105.761px);
            opacity:1
          }
          20.0000% {
            transform:translate(49.598px,105.72px);
            opacity:1
          }
          20.3125% {
            transform:translate(50.537px,105.677px);
            opacity:1
          }
          20.6250% {
            transform:translate(51.473px,105.631px);
            opacity:1
          }
          20.9375% {
            transform:translate(52.404px,105.584px);
            opacity:1
          }
          21.2500% {
            transform:translate(53.331px,105.535px);
            opacity:1
          }
          21.5625% {
            transform:translate(54.253px,105.484px);
            opacity:1
          }
          21.8750% {
            transform:translate(55.171px,105.431px);
            opacity:1
          }
          22.1875% {
            transform:translate(56.084px,105.375px);
            opacity:1
          }
          22.5000% {
            transform:translate(56.992px,105.317px);
            opacity:1
          }
          22.8125% {
            transform:translate(57.895px,105.256px);
            opacity:1
          }
          23.1250% {
            transform:translate(58.792px,105.193px);
            opacity:1
          }
          23.4375% {
            transform:translate(59.684px,105.127px);
            opacity:1
          }
          23.7500% {
            transform:translate(60.571px,105.058px);
            opacity:1
          }
          24.0625% {
            transform:translate(61.452px,104.987px);
            opacity:1
          }
          24.3750% {
            transform:translate(62.326px,104.912px);
            opacity:1
          }
          24.6875% {
            transform:translate(63.194px,104.834px);
            opacity:1
          }
          25.0000% {
            transform:translate(64.056px,104.753px);
            opacity:1
          }
          25.3125% {
            transform:translate(64.912px,104.669px);
            opacity:1
          }
          25.6250% {
            transform:translate(65.76px,104.58px);
            opacity:1
          }
          25.9375% {
            transform:translate(66.602px,104.489px);
            opacity:1
          }
          26.2500% {
            transform:translate(67.436px,104.393px);
            opacity:1
          }
          26.5625% {
            transform:translate(68.263px,104.293px);
            opacity:1
          }
          26.8750% {
            transform:translate(69.082px,104.189px);
            opacity:1
          }
          27.1875% {
            transform:translate(69.893px,104.081px);
            opacity:1
          }
          27.5000% {
            transform:translate(70.697px,103.968px);
            opacity:1
          }
          27.8125% {
            transform:translate(71.492px,103.851px);
            opacity:1
          }
          28.1250% {
            transform:translate(72.278px,103.729px);
            opacity:1
          }
          28.4375% {
            transform:translate(73.056px,103.602px);
            opacity:1
          }
          28.7500% {
            transform:translate(73.825px,103.469px);
            opacity:1
          }
          29.0625% {
            transform:translate(74.584px,103.331px);
            opacity:1
          }
          29.3750% {
            transform:translate(75.335px,103.188px);
            opacity:1
          }
          29.6875% {
            transform:translate(76.075px,103.039px);
            opacity:1
          }
          30.0000% {
            transform:translate(76.806px,102.884px);
            opacity:1
          }
          30.3125% {
            transform:translate(77.527px,102.722px);
            opacity:1
          }
          30.6250% {
            transform:translate(78.238px,102.554px);
            opacity:1
          }
          30.9375% {
            transform:translate(78.938px,102.38px);
            opacity:1
          }
          31.2500% {
            transform:translate(79.628px,102.198px);
            opacity:1
          }
          31.5625% {
            transform:translate(80.306px,102.009px);
            opacity:1
          }
          31.8750% {
            transform:translate(80.974px,101.814px);
            opacity:1
          }
          32.1875% {
            transform:translate(81.631px,101.61px);
            opacity:1
          }
          32.5000% {
            transform:translate(82.276px,101.399px);
            opacity:1
          }
          32.8125% {
            transform:translate(82.909px,101.179px);
            opacity:1
          }
          33.1250% {
            transform:translate(83.531px,100.951px);
            opacity:1
          }
          33.4375% {
            transform:translate(84.14px,100.715px);
            opacity:1
          }
          33.7500% {
            transform:translate(84.738px,100.47px);
            opacity:1
          }
          34.0625% {
            transform:translate(85.323px,100.216px);
            opacity:1
          }
          34.3750% {
            transform:translate(85.896px,99.952px);
            opacity:1
          }
          34.6875% {
            transform:translate(86.456px,99.679px);
            opacity:1
          }
          35.0000% {
            transform:translate(87.004px,99.396px);
            opacity:1
          }
          35.3125% {
            transform:translate(87.538px,99.103px);
            opacity:1
          }
          35.6250% {
            transform:translate(88.06px,98.8px);
            opacity:1
          }
          35.9375% {
            transform:translate(88.568px,98.486px);
            opacity:1
          }
          36.2500% {
            transform:translate(89.063px,98.162px);
            opacity:1
          }
          36.5625% {
            transform:translate(89.545px,97.827px);
            opacity:1
          }
          36.8750% {
            transform:translate(90.014px,97.48px);
            opacity:1
          }
          37.1875% {
            transform:translate(90.468px,97.123px);
            opacity:1
          }
          37.5000% {
            transform:translate(90.91px,96.754px);
            opacity:1
          }
          37.8125% {
            transform:translate(91.337px,96.373px);
            opacity:1
          }
          38.1250% {
            transform:translate(91.751px,95.981px);
            opacity:1
          }
          38.4375% {
            transform:translate(92.151px,95.576px);
            opacity:1
          }
          38.7500% {
            transform:translate(92.537px,95.16px);
            opacity:1
          }
          39.0625% {
            transform:translate(92.909px,94.732px);
            opacity:1
          }
          39.3750% {
            transform:translate(93.267px,94.292px);
            opacity:1
          }
          39.6875% {
            transform:translate(93.611px,93.839px);
            opacity:1
          }
          40.0000% {
            transform:translate(93.942px,93.375px);
            opacity:1
          }
          40.3125% {
            transform:translate(94.258px,92.899px);
            opacity:1
          }
          40.6250% {
            transform:translate(94.56px,92.411px);
            opacity:1
          }
          40.9375% {
            transform:translate(94.848px,91.911px);
            opacity:1
          }
          41.2500% {
            transform:translate(95.121px,91.399px);
            opacity:1
          }
          41.5625% {
            transform:translate(95.381px,90.876px);
            opacity:1
          }
          41.8750% {
            transform:translate(95.627px,90.342px);
            opacity:1
          }
          42.1875% {
            transform:translate(95.858px,89.797px);
            opacity:1
          }
          42.5000% {
            transform:translate(96.076px,89.242px);
            opacity:1
          }
          42.8125% {
            transform:translate(96.279px,88.676px);
            opacity:1
          }
          43.1250% {
            transform:translate(96.468px,88.101px);
            opacity:1
          }
          43.4375% {
            transform:translate(96.643px,87.517px);
            opacity:1
          }
          43.7500% {
            transform:translate(96.804px,86.924px);
            opacity:1
          }
          44.0625% {
            transform:translate(96.952px,86.322px);
            opacity:1
          }
          44.3750% {
            transform:translate(97.085px,85.713px);
            opacity:1
          }
          44.6875% {
            transform:translate(97.204px,85.097px);
            opacity:1
          }
          45.0000% {
            transform:translate(97.309px,84.475px);
            opacity:1
          }
          45.3125% {
            transform:translate(97.399px,83.848px);
            opacity:1
          }
          45.6250% {
            transform:translate(97.476px,83.215px);
            opacity:1
          }
          45.9375% {
            transform:translate(97.54px,82.578px);
            opacity:1
          }
          46.2500% {
            transform:translate(97.589px,81.939px);
            opacity:1
          }
          46.5625% {
            transform:translate(97.624px,81.296px);
            opacity:1
          }
          46.8750% {
            transform:translate(97.645px,80.652px);
            opacity:1
          }
          47.1875% {
            transform:translate(97.652px,80.007px);
            opacity:1
          }
          47.5000% {
            transform:translate(97.645px,79.362px);
            opacity:1
          }
          47.8125% {
            transform:translate(97.624px,78.718px);
            opacity:1
          }
          48.1250% {
            transform:translate(97.59px,78.076px);
            opacity:1
          }
          48.4375% {
            transform:translate(97.541px,77.436px);
            opacity:1
          }
          48.7500% {
            transform:translate(97.478px,76.799px);
            opacity:1
          }
          49.0625% {
            transform:translate(97.401px,76.166px);
            opacity:1
          }
          49.3750% {
            transform:translate(97.311px,75.538px);
            opacity:1
          }
          49.6875% {
            transform:translate(97.206px,74.916px);
            opacity:1
          }
          50.0000% {
            transform:translate(97.087px,74.3px);
            opacity:1
          }
          50.3125% {
            transform:translate(96.955px,73.691px);
            opacity:1
          }
          50.6250% {
            transform:translate(96.808px,73.09px);
            opacity:1
          }
          50.9375% {
            transform:translate(96.647px,72.496px);
            opacity:1
          }
          51.2500% {
            transform:translate(96.472px,71.912px);
            opacity:1
          }
          51.5625% {
            transform:translate(96.283px,71.336px);
            opacity:1
          }
          51.8750% {
            transform:translate(96.08px,70.77px);
            opacity:1
          }
          52.1875% {
            transform:translate(95.863px,70.215px);
            opacity:1
          }
          52.5000% {
            transform:translate(95.632px,69.67px);
            opacity:1
          }
          52.8125% {
            transform:translate(95.387px,69.135px);
            opacity:1
          }
          53.1250% {
            transform:translate(95.127px,68.612px);
            opacity:1
          }
          53.4375% {
            transform:translate(94.854px,68.101px);
            opacity:1
          }
          53.7500% {
            transform:translate(94.566px,67.6px);
            opacity:1
          }
          54.0625% {
            transform:translate(94.264px,67.112px);
            opacity:1
          }
          54.3750% {
            transform:translate(93.949px,66.635px);
            opacity:1
          }
          54.6875% {
            transform:translate(93.619px,66.171px);
            opacity:1
          }
          55.0000% {
            transform:translate(93.275px,65.718px);
            opacity:1
          }
          55.3125% {
            transform:translate(92.917px,65.278px);
            opacity:1
          }
          55.6250% {
            transform:translate(92.545px,64.849px);
            opacity:1
          }
          55.9375% {
            transform:translate(92.16px,64.433px);
            opacity:1
          }
          56.2500% {
            transform:translate(91.76px,64.028px);
            opacity:1
          }
          56.5625% {
            transform:translate(91.347px,63.635px);
            opacity:1
          }
          56.8750% {
            transform:translate(90.919px,63.255px);
            opacity:1
          }
          57.1875% {
            transform:translate(90.478px,62.885px);
            opacity:1
          }
          57.5000% {
            transform:translate(90.024px,62.527px);
            opacity:1
          }
          57.8125% {
            transform:translate(89.556px,62.181px);
            opacity:1
          }
          58.1250% {
            transform:translate(89.074px,61.845px);
            opacity:1
          }
          58.4375% {
            transform:translate(88.579px,61.521px);
            opacity:1
          }
          58.7500% {
            transform:translate(88.071px,61.207px);
            opacity:1
          }
          59.0625% {
            transform:translate(87.55px,60.903px);
            opacity:1
          }
          59.3750% {
            transform:translate(87.016px,60.61px);
            opacity:1
          }
          59.6875% {
            transform:translate(86.468px,60.327px);
            opacity:1
          }
          60.0000% {
            transform:translate(85.908px,60.054px);
            opacity:1
          }
          60.3125% {
            transform:translate(85.336px,59.79px);
            opacity:1
          }
          60.6250% {
            transform:translate(84.751px,59.536px);
            opacity:1
          }
          60.9375% {
            transform:translate(84.154px,59.29px);
            opacity:1
          }
          61.2500% {
            transform:translate(83.544px,59.054px);
            opacity:1
          }
          61.5625% {
            transform:translate(82.923px,58.826px);
            opacity:1
          }
          61.8750% {
            transform:translate(82.29px,58.606px);
            opacity:1
          }
          62.1875% {
            transform:translate(81.645px,58.395px);
            opacity:1
          }
          62.5000% {
            transform:translate(80.989px,58.191px);
            opacity:1
          }
          62.8125% {
            transform:translate(80.321px,57.995px);
            opacity:1
          }
          63.1250% {
            transform:translate(79.643px,57.806px);
            opacity:1
          }
          63.4375% {
            transform:translate(78.953px,57.624px);
            opacity:1
          }
          63.7500% {
            transform:translate(78.253px,57.45px);
            opacity:1
          }
          64.0625% {
            transform:translate(77.543px,57.282px);
            opacity:1
          }
          64.3750% {
            transform:translate(76.822px,57.12px);
            opacity:1
          }
          64.6875% {
            transform:translate(76.091px,56.965px);
            opacity:1
          }
          65.0000% {
            transform:translate(75.351px,56.815px);
            opacity:1
          }
          65.3125% {
            transform:translate(74.601px,56.672px);
            opacity:1
          }
          65.6250% {
            transform:translate(73.841px,56.534px);
            opacity:1
          }
          65.9375% {
            transform:translate(73.073px,56.401px);
            opacity:1
          }
          66.2500% {
            transform:translate(72.295px,56.274px);
            opacity:1
          }
          66.5625% {
            transform:translate(71.509px,56.152px);
            opacity:1
          }
          66.8750% {
            transform:translate(70.714px,56.034px);
            opacity:1
          }
          67.1875% {
            transform:translate(69.911px,55.921px);
            opacity:1
          }
          67.5000% {
            transform:translate(69.1px,55.813px);
            opacity:1
          }
          67.8125% {
            transform:translate(68.281px,55.709px);
            opacity:1
          }
          68.1250% {
            transform:translate(67.454px,55.609px);
            opacity:1
          }
          68.4375% {
            transform:translate(66.62px,55.513px);
            opacity:1
          }
          68.7500% {
            transform:translate(65.779px,55.422px);
            opacity:1
          }
          69.0625% {
            transform:translate(64.931px,55.333px);
            opacity:1
          }
          69.3750% {
            transform:translate(64.075px,55.249px);
            opacity:1
          }
          69.6875% {
            transform:translate(63.214px,55.168px);
            opacity:1
          }
          70.0000% {
            transform:translate(62.345px,55.09px);
            opacity:1
          }
          70.3125% {
            transform:translate(61.471px,55.015px);
            opacity:1
          }
          70.6250% {
            transform:translate(60.59px,54.943px);
            opacity:1
          }
          70.9375% {
            transform:translate(59.704px,54.874px);
            opacity:1
          }
          71.2500% {
            transform:translate(58.812px,54.808px);
            opacity:1
          }
          71.5625% {
            transform:translate(57.915px,54.745px);
            opacity:1
          }
          71.8750% {
            transform:translate(57.012px,54.685px);
            opacity:1
          }
          72.1875% {
            transform:translate(56.104px,54.626px);
            opacity:1
          }
          72.5000% {
            transform:translate(55.191px,54.571px);
            opacity:1
          }
          72.8125% {
            transform:translate(54.274px,54.517px);
            opacity:1
          }
          73.1250% {
            transform:translate(53.351px,54.466px);
            opacity:1
          }
          73.4375% {
            transform:translate(52.424px,54.417px);
            opacity:1
          }
          73.7500% {
            transform:translate(51.493px,54.37px);
            opacity:1
          }
          74.0625% {
            transform:translate(50.558px,54.324px);
            opacity:1
          }
          74.3750% {
            transform:translate(49.619px,54.281px);
            opacity:1
          }
          74.6875% {
            transform:translate(48.676px,54.24px);
            opacity:1
          }
          75.0000% {
            transform:translate(47.729px,54.2px);
            opacity:1
          }
          75.3125% {
            transform:translate(46.778px,54.162px);
            opacity:1
          }
          75.6250% {
            transform:translate(45.824px,54.125px);
            opacity:1
          }
          75.9375% {
            transform:translate(44.867px,54.09px);
            opacity:1
          }
          76.2500% {
            transform:translate(43.906px,54.057px);
            opacity:1
          }
          76.5625% {
            transform:translate(42.943px,54.024px);
            opacity:1
          }
          76.8750% {
            transform:translate(41.976px,53.994px);
            opacity:1
          }
          77.1875% {
            transform:translate(41.007px,53.964px);
            opacity:1
          }
          77.5000% {
            transform:translate(40.034px,53.936px);
            opacity:1
          }
          77.8125% {
            transform:translate(39.059px,53.909px);
            opacity:1
          }
          78.1250% {
            transform:translate(38.082px,53.883px);
            opacity:1
          }
          78.4375% {
            transform:translate(37.102px,53.858px);
            opacity:1
          }
          78.7500% {
            transform:translate(36.119px,53.834px);
            opacity:1
          }
          79.0625% {
            transform:translate(35.134px,53.811px);
            opacity:1
          }
          79.3750% {
            transform:translate(34.148px,53.789px);
            opacity:1
          }
          79.6875% {
            transform:translate(33.158px,53.768px);
            opacity:1
          }
          80.0000% {
            transform:translate(32.167px,53.748px);
            opacity:1
          }
          80.3125% {
            transform:translate(31.174px,53.729px);
            opacity:1
          }
          80.6250% {
            transform:translate(30.18px,53.711px);
            opacity:1
          }
          80.9375% {
            transform:translate(29.183px,53.693px);
            opacity:1
          }
          81.2500% {
            transform:translate(28.184px,53.676px);
            opacity:1
          }
          81.5625% {
            transform:translate(27.184px,53.66px);
            opacity:1
          }
          81.8750% {
            transform:translate(26.183px,53.644px);
            opacity:1
          }
          82.1875% {
            transform:translate(25.179px,53.629px);
            opacity:1
          }
          82.5000% {
            transform:translate(24.175px,53.615px);
            opacity:1
          }
          82.8125% {
            transform:translate(23.169px,53.601px);
            opacity:1
          }
          83.1250% {
            transform:translate(22.161px,53.588px);
            opacity:1
          }
          83.4375% {
            transform:translate(21.152px,53.576px);
            opacity:1
          }
          83.7500% {
            transform:translate(20.142px,53.564px);
            opacity:1
          }
          84.0625% {
            transform:translate(19.131px,53.552px);
            opacity:1
          }
          84.3750% {
            transform:translate(18.119px,53.541px);
            opacity:1
          }
          84.6875% {
            transform:translate(17.105px,53.531px);
            opacity:1
          }
          85.0000% {
            transform:translate(16.09px,53.521px);
            opacity:1
          }
          85.3125% {
            transform:translate(15.075px,53.511px);
            opacity:1
          }
          85.6250% {
            transform:translate(14.058px,53.502px);
            opacity:0.686
          }
          85.9375% {
            transform:translate(13.041px,53.493px);
            opacity:0.347
          }
          86.2500% {
            transform:translate(12.022px,53.484px);
            opacity:0.007
          }
          86.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          86.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          87.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          87.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          87.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          88.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          88.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          88.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          89.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          89.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          89.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          90.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          91.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          91.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          91.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          92.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          92.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          92.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          93.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          93.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          93.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          94.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          94.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          94.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.3125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.6250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          95.9375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          96.2500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          96.5625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          96.8750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          97.1875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          97.5000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          97.8125% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          98.1250% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          98.4375% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          98.7500% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          99.0625% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          99.3750% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          99.6875% {
            transform:translate(12px,106.516px);
            opacity:0
          }
          100.0000% {
            transform:translate(12px,106.516px);
            opacity:0
          }
        }
        .upwelling-2-0 {
          animation:coastal-parcel-2-0 16s linear infinite
        }
        @keyframes coastal-parcel-2-0 {
          0.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          0.3125% {
            transform:translate(12.805px,98.852px);
            opacity:0.268
          }
          0.6250% {
            transform:translate(13.609px,98.839px);
            opacity:0.536
          }
          0.9375% {
            transform:translate(14.412px,98.825px);
            opacity:0.804
          }
          1.2500% {
            transform:translate(15.215px,98.81px);
            opacity:1
          }
          1.5625% {
            transform:translate(16.016px,98.795px);
            opacity:1
          }
          1.8750% {
            transform:translate(16.816px,98.78px);
            opacity:1
          }
          2.1875% {
            transform:translate(17.616px,98.763px);
            opacity:1
          }
          2.5000% {
            transform:translate(18.414px,98.747px);
            opacity:1
          }
          2.8125% {
            transform:translate(19.211px,98.729px);
            opacity:1
          }
          3.1250% {
            transform:translate(20.007px,98.712px);
            opacity:1
          }
          3.4375% {
            transform:translate(20.801px,98.693px);
            opacity:1
          }
          3.7500% {
            transform:translate(21.595px,98.674px);
            opacity:1
          }
          4.0625% {
            transform:translate(22.387px,98.654px);
            opacity:1
          }
          4.3750% {
            transform:translate(23.178px,98.634px);
            opacity:1
          }
          4.6875% {
            transform:translate(23.967px,98.613px);
            opacity:1
          }
          5.0000% {
            transform:translate(24.756px,98.591px);
            opacity:1
          }
          5.3125% {
            transform:translate(25.542px,98.568px);
            opacity:1
          }
          5.6250% {
            transform:translate(26.327px,98.545px);
            opacity:1
          }
          5.9375% {
            transform:translate(27.111px,98.521px);
            opacity:1
          }
          6.2500% {
            transform:translate(27.893px,98.496px);
            opacity:1
          }
          6.5625% {
            transform:translate(28.673px,98.47px);
            opacity:1
          }
          6.8750% {
            transform:translate(29.452px,98.443px);
            opacity:1
          }
          7.1875% {
            transform:translate(30.229px,98.415px);
            opacity:1
          }
          7.5000% {
            transform:translate(31.004px,98.387px);
            opacity:1
          }
          7.8125% {
            transform:translate(31.777px,98.357px);
            opacity:1
          }
          8.1250% {
            transform:translate(32.549px,98.326px);
            opacity:1
          }
          8.4375% {
            transform:translate(33.318px,98.295px);
            opacity:1
          }
          8.7500% {
            transform:translate(34.085px,98.262px);
            opacity:1
          }
          9.0625% {
            transform:translate(34.851px,98.228px);
            opacity:1
          }
          9.3750% {
            transform:translate(35.614px,98.193px);
            opacity:1
          }
          9.6875% {
            transform:translate(36.374px,98.157px);
            opacity:1
          }
          10.0000% {
            transform:translate(37.133px,98.12px);
            opacity:1
          }
          10.3125% {
            transform:translate(37.889px,98.081px);
            opacity:1
          }
          10.6250% {
            transform:translate(38.643px,98.042px);
            opacity:1
          }
          10.9375% {
            transform:translate(39.394px,98.0px);
            opacity:1
          }
          11.2500% {
            transform:translate(40.142px,97.958px);
            opacity:1
          }
          11.5625% {
            transform:translate(40.888px,97.914px);
            opacity:1
          }
          11.8750% {
            transform:translate(41.631px,97.868px);
            opacity:1
          }
          12.1875% {
            transform:translate(42.371px,97.821px);
            opacity:1
          }
          12.5000% {
            transform:translate(43.108px,97.773px);
            opacity:1
          }
          12.8125% {
            transform:translate(43.843px,97.723px);
            opacity:1
          }
          13.1250% {
            transform:translate(44.574px,97.671px);
            opacity:1
          }
          13.4375% {
            transform:translate(45.302px,97.617px);
            opacity:1
          }
          13.7500% {
            transform:translate(46.026px,97.562px);
            opacity:1
          }
          14.0625% {
            transform:translate(46.748px,97.505px);
            opacity:1
          }
          14.3750% {
            transform:translate(47.466px,97.446px);
            opacity:1
          }
          14.6875% {
            transform:translate(48.18px,97.385px);
            opacity:1
          }
          15.0000% {
            transform:translate(48.89px,97.323px);
            opacity:1
          }
          15.3125% {
            transform:translate(49.597px,97.258px);
            opacity:1
          }
          15.6250% {
            transform:translate(50.3px,97.191px);
            opacity:1
          }
          15.9375% {
            transform:translate(50.999px,97.122px);
            opacity:1
          }
          16.2500% {
            transform:translate(51.694px,97.05px);
            opacity:1
          }
          16.5625% {
            transform:translate(52.385px,96.977px);
            opacity:1
          }
          16.8750% {
            transform:translate(53.071px,96.901px);
            opacity:1
          }
          17.1875% {
            transform:translate(53.753px,96.823px);
            opacity:1
          }
          17.5000% {
            transform:translate(54.43px,96.742px);
            opacity:1
          }
          17.8125% {
            transform:translate(55.103px,96.659px);
            opacity:1
          }
          18.1250% {
            transform:translate(55.771px,96.573px);
            opacity:1
          }
          18.4375% {
            transform:translate(56.434px,96.484px);
            opacity:1
          }
          18.7500% {
            transform:translate(57.092px,96.393px);
            opacity:1
          }
          19.0625% {
            transform:translate(57.745px,96.299px);
            opacity:1
          }
          19.3750% {
            transform:translate(58.392px,96.202px);
            opacity:1
          }
          19.6875% {
            transform:translate(59.034px,96.102px);
            opacity:1
          }
          20.0000% {
            transform:translate(59.671px,95.999px);
            opacity:1
          }
          20.3125% {
            transform:translate(60.302px,95.892px);
            opacity:1
          }
          20.6250% {
            transform:translate(60.927px,95.783px);
            opacity:1
          }
          20.9375% {
            transform:translate(61.547px,95.67px);
            opacity:1
          }
          21.2500% {
            transform:translate(62.16px,95.554px);
            opacity:1
          }
          21.5625% {
            transform:translate(62.767px,95.435px);
            opacity:1
          }
          21.8750% {
            transform:translate(63.368px,95.312px);
            opacity:1
          }
          22.1875% {
            transform:translate(63.962px,95.186px);
            opacity:1
          }
          22.5000% {
            transform:translate(64.55px,95.056px);
            opacity:1
          }
          22.8125% {
            transform:translate(65.131px,94.922px);
            opacity:1
          }
          23.1250% {
            transform:translate(65.705px,94.784px);
            opacity:1
          }
          23.4375% {
            transform:translate(66.272px,94.643px);
            opacity:1
          }
          23.7500% {
            transform:translate(66.832px,94.497px);
            opacity:1
          }
          24.0625% {
            transform:translate(67.385px,94.348px);
            opacity:1
          }
          24.3750% {
            transform:translate(67.93px,94.194px);
            opacity:1
          }
          24.6875% {
            transform:translate(68.468px,94.036px);
            opacity:1
          }
          25.0000% {
            transform:translate(68.998px,93.874px);
            opacity:1
          }
          25.3125% {
            transform:translate(69.52px,93.708px);
            opacity:1
          }
          25.6250% {
            transform:translate(70.034px,93.537px);
            opacity:1
          }
          25.9375% {
            transform:translate(70.54px,93.362px);
            opacity:1
          }
          26.2500% {
            transform:translate(71.038px,93.182px);
            opacity:1
          }
          26.5625% {
            transform:translate(71.527px,92.998px);
            opacity:1
          }
          26.8750% {
            transform:translate(72.008px,92.809px);
            opacity:1
          }
          27.1875% {
            transform:translate(72.481px,92.615px);
            opacity:1
          }
          27.5000% {
            transform:translate(72.944px,92.417px);
            opacity:1
          }
          27.8125% {
            transform:translate(73.399px,92.214px);
            opacity:1
          }
          28.1250% {
            transform:translate(73.844px,92.006px);
            opacity:1
          }
          28.4375% {
            transform:translate(74.281px,91.793px);
            opacity:1
          }
          28.7500% {
            transform:translate(74.708px,91.575px);
            opacity:1
          }
          29.0625% {
            transform:translate(75.126px,91.353px);
            opacity:1
          }
          29.3750% {
            transform:translate(75.534px,91.125px);
            opacity:1
          }
          29.6875% {
            transform:translate(75.933px,90.893px);
            opacity:1
          }
          30.0000% {
            transform:translate(76.321px,90.655px);
            opacity:1
          }
          30.3125% {
            transform:translate(76.7px,90.413px);
            opacity:1
          }
          30.6250% {
            transform:translate(77.069px,90.166px);
            opacity:1
          }
          30.9375% {
            transform:translate(77.428px,89.913px);
            opacity:1
          }
          31.2500% {
            transform:translate(77.777px,89.656px);
            opacity:1
          }
          31.5625% {
            transform:translate(78.115px,89.394px);
            opacity:1
          }
          31.8750% {
            transform:translate(78.443px,89.127px);
            opacity:1
          }
          32.1875% {
            transform:translate(78.761px,88.855px);
            opacity:1
          }
          32.5000% {
            transform:translate(79.068px,88.579px);
            opacity:1
          }
          32.8125% {
            transform:translate(79.364px,88.298px);
            opacity:1
          }
          33.1250% {
            transform:translate(79.649px,88.012px);
            opacity:1
          }
          33.4375% {
            transform:translate(79.924px,87.722px);
            opacity:1
          }
          33.7500% {
            transform:translate(80.188px,87.427px);
            opacity:1
          }
          34.0625% {
            transform:translate(80.44px,87.128px);
            opacity:1
          }
          34.3750% {
            transform:translate(80.682px,86.824px);
            opacity:1
          }
          34.6875% {
            transform:translate(80.912px,86.517px);
            opacity:1
          }
          35.0000% {
            transform:translate(81.132px,86.205px);
            opacity:1
          }
          35.3125% {
            transform:translate(81.34px,85.89px);
            opacity:1
          }
          35.6250% {
            transform:translate(81.536px,85.571px);
            opacity:1
          }
          35.9375% {
            transform:translate(81.722px,85.248px);
            opacity:1
          }
          36.2500% {
            transform:translate(81.895px,84.922px);
            opacity:1
          }
          36.5625% {
            transform:translate(82.058px,84.593px);
            opacity:1
          }
          36.8750% {
            transform:translate(82.208px,84.26px);
            opacity:1
          }
          37.1875% {
            transform:translate(82.347px,83.925px);
            opacity:1
          }
          37.5000% {
            transform:translate(82.475px,83.588px);
            opacity:1
          }
          37.8125% {
            transform:translate(82.591px,83.247px);
            opacity:1
          }
          38.1250% {
            transform:translate(82.695px,82.905px);
            opacity:1
          }
          38.4375% {
            transform:translate(82.787px,82.561px);
            opacity:1
          }
          38.7500% {
            transform:translate(82.868px,82.215px);
            opacity:1
          }
          39.0625% {
            transform:translate(82.937px,81.867px);
            opacity:1
          }
          39.3750% {
            transform:translate(82.994px,81.518px);
            opacity:1
          }
          39.6875% {
            transform:translate(83.039px,81.168px);
            opacity:1
          }
          40.0000% {
            transform:translate(83.073px,80.817px);
            opacity:1
          }
          40.3125% {
            transform:translate(83.094px,80.466px);
            opacity:1
          }
          40.6250% {
            transform:translate(83.104px,80.114px);
            opacity:1
          }
          40.9375% {
            transform:translate(83.102px,79.762px);
            opacity:1
          }
          41.2500% {
            transform:translate(83.088px,79.41px);
            opacity:1
          }
          41.5625% {
            transform:translate(83.062px,79.059px);
            opacity:1
          }
          41.8750% {
            transform:translate(83.025px,78.708px);
            opacity:1
          }
          42.1875% {
            transform:translate(82.975px,78.359px);
            opacity:1
          }
          42.5000% {
            transform:translate(82.914px,78.01px);
            opacity:1
          }
          42.8125% {
            transform:translate(82.841px,77.663px);
            opacity:1
          }
          43.1250% {
            transform:translate(82.756px,77.318px);
            opacity:1
          }
          43.4375% {
            transform:translate(82.659px,76.974px);
            opacity:1
          }
          43.7500% {
            transform:translate(82.551px,76.632px);
            opacity:1
          }
          44.0625% {
            transform:translate(82.431px,76.293px);
            opacity:1
          }
          44.3750% {
            transform:translate(82.3px,75.956px);
            opacity:1
          }
          44.6875% {
            transform:translate(82.156px,75.622px);
            opacity:1
          }
          45.0000% {
            transform:translate(82.002px,75.291px);
            opacity:1
          }
          45.3125% {
            transform:translate(81.835px,74.963px);
            opacity:1
          }
          45.6250% {
            transform:translate(81.657px,74.638px);
            opacity:1
          }
          45.9375% {
            transform:translate(81.468px,74.316px);
            opacity:1
          }
          46.2500% {
            transform:translate(81.268px,73.999px);
            opacity:1
          }
          46.5625% {
            transform:translate(81.056px,73.685px);
            opacity:1
          }
          46.8750% {
            transform:translate(80.832px,73.374px);
            opacity:1
          }
          47.1875% {
            transform:translate(80.598px,73.068px);
            opacity:1
          }
          47.5000% {
            transform:translate(80.352px,72.766px);
            opacity:1
          }
          47.8125% {
            transform:translate(80.096px,72.469px);
            opacity:1
          }
          48.1250% {
            transform:translate(79.828px,72.175px);
            opacity:1
          }
          48.4375% {
            transform:translate(79.55px,71.887px);
            opacity:1
          }
          48.7500% {
            transform:translate(79.26px,71.602px);
            opacity:1
          }
          49.0625% {
            transform:translate(78.96px,71.323px);
            opacity:1
          }
          49.3750% {
            transform:translate(78.65px,71.048px);
            opacity:1
          }
          49.6875% {
            transform:translate(78.329px,70.778px);
            opacity:1
          }
          50.0000% {
            transform:translate(77.997px,70.513px);
            opacity:1
          }
          50.3125% {
            transform:translate(77.655px,70.252px);
            opacity:1
          }
          50.6250% {
            transform:translate(77.303px,69.997px);
            opacity:1
          }
          50.9375% {
            transform:translate(76.94px,69.746px);
            opacity:1
          }
          51.2500% {
            transform:translate(76.568px,69.501px);
            opacity:1
          }
          51.5625% {
            transform:translate(76.185px,69.26px);
            opacity:1
          }
          51.8750% {
            transform:translate(75.793px,69.024px);
            opacity:1
          }
          52.1875% {
            transform:translate(75.391px,68.794px);
            opacity:1
          }
          52.5000% {
            transform:translate(74.979px,68.568px);
            opacity:1
          }
          52.8125% {
            transform:translate(74.558px,68.347px);
            opacity:1
          }
          53.1250% {
            transform:translate(74.128px,68.131px);
            opacity:1
          }
          53.4375% {
            transform:translate(73.688px,67.92px);
            opacity:1
          }
          53.7500% {
            transform:translate(73.239px,67.714px);
            opacity:1
          }
          54.0625% {
            transform:translate(72.782px,67.512px);
            opacity:1
          }
          54.3750% {
            transform:translate(72.315px,67.316px);
            opacity:1
          }
          54.6875% {
            transform:translate(71.839px,67.124px);
            opacity:1
          }
          55.0000% {
            transform:translate(71.356px,66.937px);
            opacity:1
          }
          55.3125% {
            transform:translate(70.863px,66.754px);
            opacity:1
          }
          55.6250% {
            transform:translate(70.362px,66.576px);
            opacity:1
          }
          55.9375% {
            transform:translate(69.853px,66.402px);
            opacity:1
          }
          56.2500% {
            transform:translate(69.336px,66.233px);
            opacity:1
          }
          56.5625% {
            transform:translate(68.811px,66.068px);
            opacity:1
          }
          56.8750% {
            transform:translate(68.279px,65.908px);
            opacity:1
          }
          57.1875% {
            transform:translate(67.738px,65.751px);
            opacity:1
          }
          57.5000% {
            transform:translate(67.19px,65.599px);
            opacity:1
          }
          57.8125% {
            transform:translate(66.635px,65.451px);
            opacity:1
          }
          58.1250% {
            transform:translate(66.073px,65.307px);
            opacity:1
          }
          58.4375% {
            transform:translate(65.503px,65.167px);
            opacity:1
          }
          58.7500% {
            transform:translate(64.926px,65.031px);
            opacity:1
          }
          59.0625% {
            transform:translate(64.343px,64.898px);
            opacity:1
          }
          59.3750% {
            transform:translate(63.753px,64.769px);
            opacity:1
          }
          59.6875% {
            transform:translate(63.156px,64.644px);
            opacity:1
          }
          60.0000% {
            transform:translate(62.553px,64.522px);
            opacity:1
          }
          60.3125% {
            transform:translate(61.944px,64.404px);
            opacity:1
          }
          60.6250% {
            transform:translate(61.329px,64.289px);
            opacity:1
          }
          60.9375% {
            transform:translate(60.707px,64.178px);
            opacity:1
          }
          61.2500% {
            transform:translate(60.08px,64.07px);
            opacity:1
          }
          61.5625% {
            transform:translate(59.447px,63.965px);
            opacity:1
          }
          61.8750% {
            transform:translate(58.808px,63.863px);
            opacity:1
          }
          62.1875% {
            transform:translate(58.164px,63.764px);
            opacity:1
          }
          62.5000% {
            transform:translate(57.515px,63.668px);
            opacity:1
          }
          62.8125% {
            transform:translate(56.86px,63.575px);
            opacity:1
          }
          63.1250% {
            transform:translate(56.2px,63.484px);
            opacity:1
          }
          63.4375% {
            transform:translate(55.536px,63.397px);
            opacity:1
          }
          63.7500% {
            transform:translate(54.866px,63.312px);
            opacity:1
          }
          64.0625% {
            transform:translate(54.192px,63.229px);
            opacity:1
          }
          64.3750% {
            transform:translate(53.513px,63.149px);
            opacity:1
          }
          64.6875% {
            transform:translate(52.829px,63.072px);
            opacity:1
          }
          65.0000% {
            transform:translate(52.141px,62.997px);
            opacity:1
          }
          65.3125% {
            transform:translate(51.449px,62.924px);
            opacity:1
          }
          65.6250% {
            transform:translate(50.753px,62.854px);
            opacity:1
          }
          65.9375% {
            transform:translate(50.052px,62.785px);
            opacity:1
          }
          66.2500% {
            transform:translate(49.348px,62.719px);
            opacity:1
          }
          66.5625% {
            transform:translate(48.64px,62.655px);
            opacity:1
          }
          66.8750% {
            transform:translate(47.928px,62.593px);
            opacity:1
          }
          67.1875% {
            transform:translate(47.213px,62.533px);
            opacity:1
          }
          67.5000% {
            transform:translate(46.494px,62.475px);
            opacity:1
          }
          67.8125% {
            transform:translate(45.771px,62.418px);
            opacity:1
          }
          68.1250% {
            transform:translate(45.045px,62.364px);
            opacity:1
          }
          68.4375% {
            transform:translate(44.316px,62.311px);
            opacity:1
          }
          68.7500% {
            transform:translate(43.584px,62.26px);
            opacity:1
          }
          69.0625% {
            transform:translate(42.849px,62.21px);
            opacity:1
          }
          69.3750% {
            transform:translate(42.11px,62.162px);
            opacity:1
          }
          69.6875% {
            transform:translate(41.369px,62.116px);
            opacity:1
          }
          70.0000% {
            transform:translate(40.625px,62.071px);
            opacity:1
          }
          70.3125% {
            transform:translate(39.878px,62.027px);
            opacity:1
          }
          70.6250% {
            transform:translate(39.129px,61.985px);
            opacity:1
          }
          70.9375% {
            transform:translate(38.377px,61.944px);
            opacity:1
          }
          71.2500% {
            transform:translate(37.622px,61.905px);
            opacity:1
          }
          71.5625% {
            transform:translate(36.865px,61.867px);
            opacity:1
          }
          71.8750% {
            transform:translate(36.106px,61.83px);
            opacity:1
          }
          72.1875% {
            transform:translate(35.345px,61.794px);
            opacity:1
          }
          72.5000% {
            transform:translate(34.581px,61.76px);
            opacity:1
          }
          72.8125% {
            transform:translate(33.815px,61.726px);
            opacity:1
          }
          73.1250% {
            transform:translate(33.047px,61.694px);
            opacity:1
          }
          73.4375% {
            transform:translate(32.277px,61.663px);
            opacity:1
          }
          73.7500% {
            transform:translate(31.505px,61.632px);
            opacity:1
          }
          74.0625% {
            transform:translate(30.731px,61.603px);
            opacity:1
          }
          74.3750% {
            transform:translate(29.955px,61.575px);
            opacity:1
          }
          74.6875% {
            transform:translate(29.177px,61.548px);
            opacity:1
          }
          75.0000% {
            transform:translate(28.398px,61.521px);
            opacity:1
          }
          75.3125% {
            transform:translate(27.617px,61.496px);
            opacity:1
          }
          75.6250% {
            transform:translate(26.835px,61.471px);
            opacity:1
          }
          75.9375% {
            transform:translate(26.05px,61.447px);
            opacity:1
          }
          76.2500% {
            transform:translate(25.265px,61.424px);
            opacity:1
          }
          76.5625% {
            transform:translate(24.478px,61.401px);
            opacity:1
          }
          76.8750% {
            transform:translate(23.689px,61.38px);
            opacity:1
          }
          77.1875% {
            transform:translate(22.899px,61.359px);
            opacity:1
          }
          77.5000% {
            transform:translate(22.108px,61.339px);
            opacity:1
          }
          77.8125% {
            transform:translate(21.315px,61.319px);
            opacity:1
          }
          78.1250% {
            transform:translate(20.521px,61.3px);
            opacity:1
          }
          78.4375% {
            transform:translate(19.726px,61.282px);
            opacity:1
          }
          78.7500% {
            transform:translate(18.93px,61.264px);
            opacity:1
          }
          79.0625% {
            transform:translate(18.132px,61.247px);
            opacity:1
          }
          79.3750% {
            transform:translate(17.334px,61.231px);
            opacity:1
          }
          79.6875% {
            transform:translate(16.534px,61.215px);
            opacity:1
          }
          80.0000% {
            transform:translate(15.733px,61.199px);
            opacity:1
          }
          80.3125% {
            transform:translate(14.932px,61.185px);
            opacity:0.977
          }
          80.6250% {
            transform:translate(14.129px,61.17px);
            opacity:0.71
          }
          80.9375% {
            transform:translate(13.325px,61.156px);
            opacity:0.442
          }
          81.2500% {
            transform:translate(12.521px,61.143px);
            opacity:0.174
          }
          81.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          81.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          82.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          82.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          82.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          83.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          83.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          83.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          84.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          84.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          84.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          85.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          85.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          85.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          85.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          86.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          86.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          86.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          87.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          87.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          87.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          88.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          88.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          88.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          89.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          89.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          89.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          91.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          91.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          91.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          92.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          92.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          92.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          93.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          93.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          93.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          94.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          94.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          94.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          96.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          96.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          96.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          97.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          97.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          97.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          98.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          98.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          98.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          99.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          99.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          99.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          100.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
        }
        .upwelling-2-1 {
          animation:coastal-parcel-2-1 16s linear infinite
        }
        @keyframes coastal-parcel-2-1 {
          0.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          0.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          0.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          0.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          1.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          1.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          1.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          2.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          2.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          2.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          3.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          3.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          3.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          4.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          4.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          4.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          5.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          5.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          5.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          5.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          6.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          6.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          6.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          7.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          7.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          7.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          8.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          8.4375% {
            transform:translate(12.805px,98.852px);
            opacity:0.268
          }
          8.7500% {
            transform:translate(13.609px,98.839px);
            opacity:0.536
          }
          9.0625% {
            transform:translate(14.412px,98.825px);
            opacity:0.804
          }
          9.3750% {
            transform:translate(15.215px,98.81px);
            opacity:1
          }
          9.6875% {
            transform:translate(16.016px,98.795px);
            opacity:1
          }
          10.0000% {
            transform:translate(16.816px,98.78px);
            opacity:1
          }
          10.3125% {
            transform:translate(17.616px,98.763px);
            opacity:1
          }
          10.6250% {
            transform:translate(18.414px,98.747px);
            opacity:1
          }
          10.9375% {
            transform:translate(19.211px,98.729px);
            opacity:1
          }
          11.2500% {
            transform:translate(20.007px,98.712px);
            opacity:1
          }
          11.5625% {
            transform:translate(20.801px,98.693px);
            opacity:1
          }
          11.8750% {
            transform:translate(21.595px,98.674px);
            opacity:1
          }
          12.1875% {
            transform:translate(22.387px,98.654px);
            opacity:1
          }
          12.5000% {
            transform:translate(23.178px,98.634px);
            opacity:1
          }
          12.8125% {
            transform:translate(23.967px,98.613px);
            opacity:1
          }
          13.1250% {
            transform:translate(24.756px,98.591px);
            opacity:1
          }
          13.4375% {
            transform:translate(25.542px,98.568px);
            opacity:1
          }
          13.7500% {
            transform:translate(26.327px,98.545px);
            opacity:1
          }
          14.0625% {
            transform:translate(27.111px,98.521px);
            opacity:1
          }
          14.3750% {
            transform:translate(27.893px,98.496px);
            opacity:1
          }
          14.6875% {
            transform:translate(28.673px,98.47px);
            opacity:1
          }
          15.0000% {
            transform:translate(29.452px,98.443px);
            opacity:1
          }
          15.3125% {
            transform:translate(30.229px,98.415px);
            opacity:1
          }
          15.6250% {
            transform:translate(31.004px,98.387px);
            opacity:1
          }
          15.9375% {
            transform:translate(31.777px,98.357px);
            opacity:1
          }
          16.2500% {
            transform:translate(32.549px,98.326px);
            opacity:1
          }
          16.5625% {
            transform:translate(33.318px,98.295px);
            opacity:1
          }
          16.8750% {
            transform:translate(34.085px,98.262px);
            opacity:1
          }
          17.1875% {
            transform:translate(34.851px,98.228px);
            opacity:1
          }
          17.5000% {
            transform:translate(35.614px,98.193px);
            opacity:1
          }
          17.8125% {
            transform:translate(36.374px,98.157px);
            opacity:1
          }
          18.1250% {
            transform:translate(37.133px,98.12px);
            opacity:1
          }
          18.4375% {
            transform:translate(37.889px,98.081px);
            opacity:1
          }
          18.7500% {
            transform:translate(38.643px,98.042px);
            opacity:1
          }
          19.0625% {
            transform:translate(39.394px,98.0px);
            opacity:1
          }
          19.3750% {
            transform:translate(40.142px,97.958px);
            opacity:1
          }
          19.6875% {
            transform:translate(40.888px,97.914px);
            opacity:1
          }
          20.0000% {
            transform:translate(41.631px,97.868px);
            opacity:1
          }
          20.3125% {
            transform:translate(42.371px,97.821px);
            opacity:1
          }
          20.6250% {
            transform:translate(43.108px,97.773px);
            opacity:1
          }
          20.9375% {
            transform:translate(43.843px,97.723px);
            opacity:1
          }
          21.2500% {
            transform:translate(44.574px,97.671px);
            opacity:1
          }
          21.5625% {
            transform:translate(45.302px,97.617px);
            opacity:1
          }
          21.8750% {
            transform:translate(46.026px,97.562px);
            opacity:1
          }
          22.1875% {
            transform:translate(46.748px,97.505px);
            opacity:1
          }
          22.5000% {
            transform:translate(47.466px,97.446px);
            opacity:1
          }
          22.8125% {
            transform:translate(48.18px,97.385px);
            opacity:1
          }
          23.1250% {
            transform:translate(48.89px,97.323px);
            opacity:1
          }
          23.4375% {
            transform:translate(49.597px,97.258px);
            opacity:1
          }
          23.7500% {
            transform:translate(50.3px,97.191px);
            opacity:1
          }
          24.0625% {
            transform:translate(50.999px,97.122px);
            opacity:1
          }
          24.3750% {
            transform:translate(51.694px,97.05px);
            opacity:1
          }
          24.6875% {
            transform:translate(52.385px,96.977px);
            opacity:1
          }
          25.0000% {
            transform:translate(53.071px,96.901px);
            opacity:1
          }
          25.3125% {
            transform:translate(53.753px,96.823px);
            opacity:1
          }
          25.6250% {
            transform:translate(54.43px,96.742px);
            opacity:1
          }
          25.9375% {
            transform:translate(55.103px,96.659px);
            opacity:1
          }
          26.2500% {
            transform:translate(55.771px,96.573px);
            opacity:1
          }
          26.5625% {
            transform:translate(56.434px,96.484px);
            opacity:1
          }
          26.8750% {
            transform:translate(57.092px,96.393px);
            opacity:1
          }
          27.1875% {
            transform:translate(57.745px,96.299px);
            opacity:1
          }
          27.5000% {
            transform:translate(58.392px,96.202px);
            opacity:1
          }
          27.8125% {
            transform:translate(59.034px,96.102px);
            opacity:1
          }
          28.1250% {
            transform:translate(59.671px,95.999px);
            opacity:1
          }
          28.4375% {
            transform:translate(60.302px,95.892px);
            opacity:1
          }
          28.7500% {
            transform:translate(60.927px,95.783px);
            opacity:1
          }
          29.0625% {
            transform:translate(61.547px,95.67px);
            opacity:1
          }
          29.3750% {
            transform:translate(62.16px,95.554px);
            opacity:1
          }
          29.6875% {
            transform:translate(62.767px,95.435px);
            opacity:1
          }
          30.0000% {
            transform:translate(63.368px,95.312px);
            opacity:1
          }
          30.3125% {
            transform:translate(63.962px,95.186px);
            opacity:1
          }
          30.6250% {
            transform:translate(64.55px,95.056px);
            opacity:1
          }
          30.9375% {
            transform:translate(65.131px,94.922px);
            opacity:1
          }
          31.2500% {
            transform:translate(65.705px,94.784px);
            opacity:1
          }
          31.5625% {
            transform:translate(66.272px,94.643px);
            opacity:1
          }
          31.8750% {
            transform:translate(66.832px,94.497px);
            opacity:1
          }
          32.1875% {
            transform:translate(67.385px,94.348px);
            opacity:1
          }
          32.5000% {
            transform:translate(67.93px,94.194px);
            opacity:1
          }
          32.8125% {
            transform:translate(68.468px,94.036px);
            opacity:1
          }
          33.1250% {
            transform:translate(68.998px,93.874px);
            opacity:1
          }
          33.4375% {
            transform:translate(69.52px,93.708px);
            opacity:1
          }
          33.7500% {
            transform:translate(70.034px,93.537px);
            opacity:1
          }
          34.0625% {
            transform:translate(70.54px,93.362px);
            opacity:1
          }
          34.3750% {
            transform:translate(71.038px,93.182px);
            opacity:1
          }
          34.6875% {
            transform:translate(71.527px,92.998px);
            opacity:1
          }
          35.0000% {
            transform:translate(72.008px,92.809px);
            opacity:1
          }
          35.3125% {
            transform:translate(72.481px,92.615px);
            opacity:1
          }
          35.6250% {
            transform:translate(72.944px,92.417px);
            opacity:1
          }
          35.9375% {
            transform:translate(73.399px,92.214px);
            opacity:1
          }
          36.2500% {
            transform:translate(73.844px,92.006px);
            opacity:1
          }
          36.5625% {
            transform:translate(74.281px,91.793px);
            opacity:1
          }
          36.8750% {
            transform:translate(74.708px,91.575px);
            opacity:1
          }
          37.1875% {
            transform:translate(75.126px,91.353px);
            opacity:1
          }
          37.5000% {
            transform:translate(75.534px,91.125px);
            opacity:1
          }
          37.8125% {
            transform:translate(75.933px,90.893px);
            opacity:1
          }
          38.1250% {
            transform:translate(76.321px,90.655px);
            opacity:1
          }
          38.4375% {
            transform:translate(76.7px,90.413px);
            opacity:1
          }
          38.7500% {
            transform:translate(77.069px,90.166px);
            opacity:1
          }
          39.0625% {
            transform:translate(77.428px,89.913px);
            opacity:1
          }
          39.3750% {
            transform:translate(77.777px,89.656px);
            opacity:1
          }
          39.6875% {
            transform:translate(78.115px,89.394px);
            opacity:1
          }
          40.0000% {
            transform:translate(78.443px,89.127px);
            opacity:1
          }
          40.3125% {
            transform:translate(78.761px,88.855px);
            opacity:1
          }
          40.6250% {
            transform:translate(79.068px,88.579px);
            opacity:1
          }
          40.9375% {
            transform:translate(79.364px,88.298px);
            opacity:1
          }
          41.2500% {
            transform:translate(79.649px,88.012px);
            opacity:1
          }
          41.5625% {
            transform:translate(79.924px,87.722px);
            opacity:1
          }
          41.8750% {
            transform:translate(80.188px,87.427px);
            opacity:1
          }
          42.1875% {
            transform:translate(80.44px,87.128px);
            opacity:1
          }
          42.5000% {
            transform:translate(80.682px,86.824px);
            opacity:1
          }
          42.8125% {
            transform:translate(80.912px,86.517px);
            opacity:1
          }
          43.1250% {
            transform:translate(81.132px,86.205px);
            opacity:1
          }
          43.4375% {
            transform:translate(81.34px,85.89px);
            opacity:1
          }
          43.7500% {
            transform:translate(81.536px,85.571px);
            opacity:1
          }
          44.0625% {
            transform:translate(81.722px,85.248px);
            opacity:1
          }
          44.3750% {
            transform:translate(81.895px,84.922px);
            opacity:1
          }
          44.6875% {
            transform:translate(82.058px,84.593px);
            opacity:1
          }
          45.0000% {
            transform:translate(82.208px,84.26px);
            opacity:1
          }
          45.3125% {
            transform:translate(82.347px,83.925px);
            opacity:1
          }
          45.6250% {
            transform:translate(82.475px,83.588px);
            opacity:1
          }
          45.9375% {
            transform:translate(82.591px,83.247px);
            opacity:1
          }
          46.2500% {
            transform:translate(82.695px,82.905px);
            opacity:1
          }
          46.5625% {
            transform:translate(82.787px,82.561px);
            opacity:1
          }
          46.8750% {
            transform:translate(82.868px,82.215px);
            opacity:1
          }
          47.1875% {
            transform:translate(82.937px,81.867px);
            opacity:1
          }
          47.5000% {
            transform:translate(82.994px,81.518px);
            opacity:1
          }
          47.8125% {
            transform:translate(83.039px,81.168px);
            opacity:1
          }
          48.1250% {
            transform:translate(83.073px,80.817px);
            opacity:1
          }
          48.4375% {
            transform:translate(83.094px,80.466px);
            opacity:1
          }
          48.7500% {
            transform:translate(83.104px,80.114px);
            opacity:1
          }
          49.0625% {
            transform:translate(83.102px,79.762px);
            opacity:1
          }
          49.3750% {
            transform:translate(83.088px,79.41px);
            opacity:1
          }
          49.6875% {
            transform:translate(83.062px,79.059px);
            opacity:1
          }
          50.0000% {
            transform:translate(83.025px,78.708px);
            opacity:1
          }
          50.3125% {
            transform:translate(82.975px,78.359px);
            opacity:1
          }
          50.6250% {
            transform:translate(82.914px,78.01px);
            opacity:1
          }
          50.9375% {
            transform:translate(82.841px,77.663px);
            opacity:1
          }
          51.2500% {
            transform:translate(82.756px,77.318px);
            opacity:1
          }
          51.5625% {
            transform:translate(82.659px,76.974px);
            opacity:1
          }
          51.8750% {
            transform:translate(82.551px,76.632px);
            opacity:1
          }
          52.1875% {
            transform:translate(82.431px,76.293px);
            opacity:1
          }
          52.5000% {
            transform:translate(82.3px,75.956px);
            opacity:1
          }
          52.8125% {
            transform:translate(82.156px,75.622px);
            opacity:1
          }
          53.1250% {
            transform:translate(82.002px,75.291px);
            opacity:1
          }
          53.4375% {
            transform:translate(81.835px,74.963px);
            opacity:1
          }
          53.7500% {
            transform:translate(81.657px,74.638px);
            opacity:1
          }
          54.0625% {
            transform:translate(81.468px,74.316px);
            opacity:1
          }
          54.3750% {
            transform:translate(81.268px,73.999px);
            opacity:1
          }
          54.6875% {
            transform:translate(81.056px,73.685px);
            opacity:1
          }
          55.0000% {
            transform:translate(80.832px,73.374px);
            opacity:1
          }
          55.3125% {
            transform:translate(80.598px,73.068px);
            opacity:1
          }
          55.6250% {
            transform:translate(80.352px,72.766px);
            opacity:1
          }
          55.9375% {
            transform:translate(80.096px,72.469px);
            opacity:1
          }
          56.2500% {
            transform:translate(79.828px,72.175px);
            opacity:1
          }
          56.5625% {
            transform:translate(79.55px,71.887px);
            opacity:1
          }
          56.8750% {
            transform:translate(79.26px,71.602px);
            opacity:1
          }
          57.1875% {
            transform:translate(78.96px,71.323px);
            opacity:1
          }
          57.5000% {
            transform:translate(78.65px,71.048px);
            opacity:1
          }
          57.8125% {
            transform:translate(78.329px,70.778px);
            opacity:1
          }
          58.1250% {
            transform:translate(77.997px,70.513px);
            opacity:1
          }
          58.4375% {
            transform:translate(77.655px,70.252px);
            opacity:1
          }
          58.7500% {
            transform:translate(77.303px,69.997px);
            opacity:1
          }
          59.0625% {
            transform:translate(76.94px,69.746px);
            opacity:1
          }
          59.3750% {
            transform:translate(76.568px,69.501px);
            opacity:1
          }
          59.6875% {
            transform:translate(76.185px,69.26px);
            opacity:1
          }
          60.0000% {
            transform:translate(75.793px,69.024px);
            opacity:1
          }
          60.3125% {
            transform:translate(75.391px,68.794px);
            opacity:1
          }
          60.6250% {
            transform:translate(74.979px,68.568px);
            opacity:1
          }
          60.9375% {
            transform:translate(74.558px,68.347px);
            opacity:1
          }
          61.2500% {
            transform:translate(74.128px,68.131px);
            opacity:1
          }
          61.5625% {
            transform:translate(73.688px,67.92px);
            opacity:1
          }
          61.8750% {
            transform:translate(73.239px,67.714px);
            opacity:1
          }
          62.1875% {
            transform:translate(72.782px,67.512px);
            opacity:1
          }
          62.5000% {
            transform:translate(72.315px,67.316px);
            opacity:1
          }
          62.8125% {
            transform:translate(71.839px,67.124px);
            opacity:1
          }
          63.1250% {
            transform:translate(71.356px,66.937px);
            opacity:1
          }
          63.4375% {
            transform:translate(70.863px,66.754px);
            opacity:1
          }
          63.7500% {
            transform:translate(70.362px,66.576px);
            opacity:1
          }
          64.0625% {
            transform:translate(69.853px,66.402px);
            opacity:1
          }
          64.3750% {
            transform:translate(69.336px,66.233px);
            opacity:1
          }
          64.6875% {
            transform:translate(68.811px,66.068px);
            opacity:1
          }
          65.0000% {
            transform:translate(68.279px,65.908px);
            opacity:1
          }
          65.3125% {
            transform:translate(67.738px,65.751px);
            opacity:1
          }
          65.6250% {
            transform:translate(67.19px,65.599px);
            opacity:1
          }
          65.9375% {
            transform:translate(66.635px,65.451px);
            opacity:1
          }
          66.2500% {
            transform:translate(66.073px,65.307px);
            opacity:1
          }
          66.5625% {
            transform:translate(65.503px,65.167px);
            opacity:1
          }
          66.8750% {
            transform:translate(64.926px,65.031px);
            opacity:1
          }
          67.1875% {
            transform:translate(64.343px,64.898px);
            opacity:1
          }
          67.5000% {
            transform:translate(63.753px,64.769px);
            opacity:1
          }
          67.8125% {
            transform:translate(63.156px,64.644px);
            opacity:1
          }
          68.1250% {
            transform:translate(62.553px,64.522px);
            opacity:1
          }
          68.4375% {
            transform:translate(61.944px,64.404px);
            opacity:1
          }
          68.7500% {
            transform:translate(61.329px,64.289px);
            opacity:1
          }
          69.0625% {
            transform:translate(60.707px,64.178px);
            opacity:1
          }
          69.3750% {
            transform:translate(60.08px,64.07px);
            opacity:1
          }
          69.6875% {
            transform:translate(59.447px,63.965px);
            opacity:1
          }
          70.0000% {
            transform:translate(58.808px,63.863px);
            opacity:1
          }
          70.3125% {
            transform:translate(58.164px,63.764px);
            opacity:1
          }
          70.6250% {
            transform:translate(57.515px,63.668px);
            opacity:1
          }
          70.9375% {
            transform:translate(56.86px,63.575px);
            opacity:1
          }
          71.2500% {
            transform:translate(56.2px,63.484px);
            opacity:1
          }
          71.5625% {
            transform:translate(55.536px,63.397px);
            opacity:1
          }
          71.8750% {
            transform:translate(54.866px,63.312px);
            opacity:1
          }
          72.1875% {
            transform:translate(54.192px,63.229px);
            opacity:1
          }
          72.5000% {
            transform:translate(53.513px,63.149px);
            opacity:1
          }
          72.8125% {
            transform:translate(52.829px,63.072px);
            opacity:1
          }
          73.1250% {
            transform:translate(52.141px,62.997px);
            opacity:1
          }
          73.4375% {
            transform:translate(51.449px,62.924px);
            opacity:1
          }
          73.7500% {
            transform:translate(50.753px,62.854px);
            opacity:1
          }
          74.0625% {
            transform:translate(50.052px,62.785px);
            opacity:1
          }
          74.3750% {
            transform:translate(49.348px,62.719px);
            opacity:1
          }
          74.6875% {
            transform:translate(48.64px,62.655px);
            opacity:1
          }
          75.0000% {
            transform:translate(47.928px,62.593px);
            opacity:1
          }
          75.3125% {
            transform:translate(47.213px,62.533px);
            opacity:1
          }
          75.6250% {
            transform:translate(46.494px,62.475px);
            opacity:1
          }
          75.9375% {
            transform:translate(45.771px,62.418px);
            opacity:1
          }
          76.2500% {
            transform:translate(45.045px,62.364px);
            opacity:1
          }
          76.5625% {
            transform:translate(44.316px,62.311px);
            opacity:1
          }
          76.8750% {
            transform:translate(43.584px,62.26px);
            opacity:1
          }
          77.1875% {
            transform:translate(42.849px,62.21px);
            opacity:1
          }
          77.5000% {
            transform:translate(42.11px,62.162px);
            opacity:1
          }
          77.8125% {
            transform:translate(41.369px,62.116px);
            opacity:1
          }
          78.1250% {
            transform:translate(40.625px,62.071px);
            opacity:1
          }
          78.4375% {
            transform:translate(39.878px,62.027px);
            opacity:1
          }
          78.7500% {
            transform:translate(39.129px,61.985px);
            opacity:1
          }
          79.0625% {
            transform:translate(38.377px,61.944px);
            opacity:1
          }
          79.3750% {
            transform:translate(37.622px,61.905px);
            opacity:1
          }
          79.6875% {
            transform:translate(36.865px,61.867px);
            opacity:1
          }
          80.0000% {
            transform:translate(36.106px,61.83px);
            opacity:1
          }
          80.3125% {
            transform:translate(35.345px,61.794px);
            opacity:1
          }
          80.6250% {
            transform:translate(34.581px,61.76px);
            opacity:1
          }
          80.9375% {
            transform:translate(33.815px,61.726px);
            opacity:1
          }
          81.2500% {
            transform:translate(33.047px,61.694px);
            opacity:1
          }
          81.5625% {
            transform:translate(32.277px,61.663px);
            opacity:1
          }
          81.8750% {
            transform:translate(31.505px,61.632px);
            opacity:1
          }
          82.1875% {
            transform:translate(30.731px,61.603px);
            opacity:1
          }
          82.5000% {
            transform:translate(29.955px,61.575px);
            opacity:1
          }
          82.8125% {
            transform:translate(29.177px,61.548px);
            opacity:1
          }
          83.1250% {
            transform:translate(28.398px,61.521px);
            opacity:1
          }
          83.4375% {
            transform:translate(27.617px,61.496px);
            opacity:1
          }
          83.7500% {
            transform:translate(26.835px,61.471px);
            opacity:1
          }
          84.0625% {
            transform:translate(26.05px,61.447px);
            opacity:1
          }
          84.3750% {
            transform:translate(25.265px,61.424px);
            opacity:1
          }
          84.6875% {
            transform:translate(24.478px,61.401px);
            opacity:1
          }
          85.0000% {
            transform:translate(23.689px,61.38px);
            opacity:1
          }
          85.3125% {
            transform:translate(22.899px,61.359px);
            opacity:1
          }
          85.6250% {
            transform:translate(22.108px,61.339px);
            opacity:1
          }
          85.9375% {
            transform:translate(21.315px,61.319px);
            opacity:1
          }
          86.2500% {
            transform:translate(20.521px,61.3px);
            opacity:1
          }
          86.5625% {
            transform:translate(19.726px,61.282px);
            opacity:1
          }
          86.8750% {
            transform:translate(18.93px,61.264px);
            opacity:1
          }
          87.1875% {
            transform:translate(18.132px,61.247px);
            opacity:1
          }
          87.5000% {
            transform:translate(17.334px,61.231px);
            opacity:1
          }
          87.8125% {
            transform:translate(16.534px,61.215px);
            opacity:1
          }
          88.1250% {
            transform:translate(15.733px,61.199px);
            opacity:1
          }
          88.4375% {
            transform:translate(14.932px,61.185px);
            opacity:0.977
          }
          88.7500% {
            transform:translate(14.129px,61.17px);
            opacity:0.71
          }
          89.0625% {
            transform:translate(13.325px,61.156px);
            opacity:0.442
          }
          89.3750% {
            transform:translate(12.521px,61.143px);
            opacity:0.174
          }
          89.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          90.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          91.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          91.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          91.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          92.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          92.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          92.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          93.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          93.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          93.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          94.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          94.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          94.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.0000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.3125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.6250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          95.9375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          96.2500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          96.5625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          96.8750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          97.1875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          97.5000% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          97.8125% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          98.1250% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          98.4375% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          98.7500% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          99.0625% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          99.3750% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          99.6875% {
            transform:translate(12px,98.866px);
            opacity:0
          }
          100.0000% {
            transform:translate(12px,98.866px);
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Coastal Upwelling">
        <defs>
          <clipPath id="upwelling-water">
            <rect x="12" y="42" width="100" height="76"/>
          </clipPath>
        </defs>
        <path class="warm-water" d="M12 42H112V118H12Z"/>
        <path class="cold-water" d="M12,81.297L16,81.189L20,81.065L24,80.921L28,80.755L32,80.564L36,80.344L40,80.089L44,79.796L48,79.457L52,79.067L56,78.617L60,78.097L64,77.498L68,76.806L72,76.009L76,75.089L80,74.027L84,72.803L88,71.391L92,69.761L96,67.882L100,65.714L104,63.213L108,60.328L112,57V118H12Z"/>
        <path class="thermocline" d="M12,81.297L16,81.189L20,81.065L24,80.921L28,80.755L32,80.564L36,80.344L40,80.089L44,79.796L48,79.457L52,79.067L56,78.617L60,78.097L64,77.498L68,76.806L72,76.009L76,75.089L80,74.027L84,72.803L88,71.391L92,69.761L96,67.882L100,65.714L104,63.213L108,60.328L112,57"/>
        <path class="land" d="M112 118V42L120 36L137 40V124H12V118Z"/>
        <path class="shore" d="M112 42V118"/>
        <path class="sea-surface" d="M12 42H112"/>
        <g class="wind">
          <circle cx="104" cy="23" r="8"/>
          <circle class="wind-dot" cx="104" cy="23" r="2.5"/>
        </g>
        <path class="transport" d="M99 49H30M35 45L30 49L35 53M19 108H71Q94 108 99 88M95 91L99 86L101 92"/>
        <g clip-path="url(#upwelling-water)">
          <g class="upwelling-0-0" transform="translate(105.61,93.162)" opacity="1">
            <circle class="nutrient-water" r="2.75"/>
            <circle class="nutrient" cx="-1" cy="-1" r=".6"/>
            <circle class="nutrient" cx="1" cy="1" r=".6"/>
          </g>
          <g class="upwelling-0-1" transform="translate(98.074,106.591)" opacity="1">
            <circle class="nutrient-water" r="2.75"/>
            <circle class="nutrient" cx="-1" cy="-1" r=".6"/>
            <circle class="nutrient" cx="1" cy="1" r=".6"/>
          </g>
          <g class="upwelling-1-0" transform="translate(97.476,83.215)" opacity="1">
            <circle class="nutrient-water" r="2.75"/>
            <circle class="nutrient" cx="-1" cy="-1" r=".6"/>
            <circle class="nutrient" cx="1" cy="1" r=".6"/>
          </g>
          <g class="upwelling-1-1" transform="translate(90.91,96.754)" opacity="1">
            <circle class="nutrient-water" r="2.75"/>
            <circle class="nutrient" cx="-1" cy="-1" r=".6"/>
            <circle class="nutrient" cx="1" cy="1" r=".6"/>
          </g>
          <g class="upwelling-2-0" transform="translate(82.475,83.588)" opacity="1">
            <circle class="nutrient-water" r="2.75"/>
            <circle class="nutrient" cx="-1" cy="-1" r=".6"/>
            <circle class="nutrient" cx="1" cy="1" r=".6"/>
          </g>
          <g class="upwelling-2-1" transform="translate(75.534,91.125)" opacity="1">
            <circle class="nutrient-water" r="2.75"/>
            <circle class="nutrient" cx="-1" cy="-1" r=".6"/>
            <circle class="nutrient" cx="1" cy="1" r=".6"/>
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

if (!customElements.get("concept-coastal-upwelling")) {
  customElements.define("concept-coastal-upwelling", ConceptCoastalUpwelling);
}
