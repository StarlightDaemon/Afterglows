// Thermohaline Overturning. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptThermohalineOverturning extends HTMLElement {
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
        .basin {
          fill:#0b2027;
          stroke:#375b51;
          stroke-width:1
        }
        .surface {
          stroke:#77c9ef;
          stroke-width:1
        }
        .warm-ribbon {
          fill:none;
          stroke:#f3c977;
          stroke-width:9;
          opacity:.12
        }
        .sinking {
          fill:none;
          stroke:#77c9ef;
          stroke-width:8;
          opacity:.2
        }
        .deep-ribbon {
          fill:none;
          stroke:#77c9ef;
          stroke-width:10;
          opacity:.12
        }
        .mixing-ribbon {
          fill:none;
          stroke:#70edb1;
          stroke-width:23;
          opacity:.07
        }
        .transport {
          fill:none;
          stroke:#70edb1;
          stroke-width:1
        }
        .mixing {
          fill:none;
          stroke:#77c9ef;
          stroke-width:.7;
          opacity:.4
        }
        .ice {
          fill:#a5d9e2;
          stroke:#77c9ef;
          stroke-width:1
        }
        .sinking-arrow {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1
        }
        .water-parcel {
          stroke:#07120f;
          stroke-width:.8
        }
        .salt-mark {
          stroke:#07120f;
          stroke-width:.8
        }
        .salt-fleck {
          fill:#edf4d2
        }
        .parcel-0 {
          animation:overturn-parcel-0 16s linear infinite
        }
        .color-0 {
          animation:overturn-color-0 16s linear infinite
        }
        .mark-0 {
          animation:overturn-mark-0 16s linear infinite
        }
        .fleck-0 {
          animation:overturn-fleck-0 16s linear infinite
        }
        @keyframes overturn-parcel-0 {
          0.0000% {
            transform:translate(70px,49px)
          }
          0.3125% {
            transform:translate(70.942px,49.006px)
          }
          0.6250% {
            transform:translate(71.884px,49.023px)
          }
          0.9375% {
            transform:translate(72.826px,49.052px)
          }
          1.2500% {
            transform:translate(73.766px,49.092px)
          }
          1.5625% {
            transform:translate(74.705px,49.144px)
          }
          1.8750% {
            transform:translate(75.642px,49.208px)
          }
          2.1875% {
            transform:translate(76.577px,49.283px)
          }
          2.5000% {
            transform:translate(77.509px,49.369px)
          }
          2.8125% {
            transform:translate(78.438px,49.467px)
          }
          3.1250% {
            transform:translate(79.364px,49.576px)
          }
          3.4375% {
            transform:translate(80.287px,49.697px)
          }
          3.7500% {
            transform:translate(81.205px,49.829px)
          }
          4.0625% {
            transform:translate(82.12px,49.972px)
          }
          4.3750% {
            transform:translate(83.029px,50.126px)
          }
          4.6875% {
            transform:translate(83.934px,50.292px)
          }
          5.0000% {
            transform:translate(84.833px,50.468px)
          }
          5.3125% {
            transform:translate(85.726px,50.656px)
          }
          5.6250% {
            transform:translate(86.614px,50.854px)
          }
          5.9375% {
            transform:translate(87.495px,51.064px)
          }
          6.2500% {
            transform:translate(88.369px,51.284px)
          }
          6.5625% {
            transform:translate(89.236px,51.514px)
          }
          6.8750% {
            transform:translate(90.096px,51.756px)
          }
          7.1875% {
            transform:translate(90.948px,52.008px)
          }
          7.5000% {
            transform:translate(91.792px,52.27px)
          }
          7.8125% {
            transform:translate(92.627px,52.542px)
          }
          8.1250% {
            transform:translate(93.454px,52.825px)
          }
          8.4375% {
            transform:translate(94.272px,53.118px)
          }
          8.7500% {
            transform:translate(95.08px,53.421px)
          }
          9.0625% {
            transform:translate(95.879px,53.733px)
          }
          9.3750% {
            transform:translate(96.667px,54.056px)
          }
          9.6875% {
            transform:translate(97.446px,54.388px)
          }
          10.0000% {
            transform:translate(98.214px,54.729px)
          }
          10.3125% {
            transform:translate(98.971px,55.08px)
          }
          10.6250% {
            transform:translate(99.717px,55.44px)
          }
          10.9375% {
            transform:translate(100.451px,55.81px)
          }
          11.2500% {
            transform:translate(101.174px,56.188px)
          }
          11.5625% {
            transform:translate(101.884px,56.575px)
          }
          11.8750% {
            transform:translate(102.582px,56.97px)
          }
          12.1875% {
            transform:translate(103.268px,57.374px)
          }
          12.5000% {
            transform:translate(103.941px,57.787px)
          }
          12.8125% {
            transform:translate(104.601px,58.207px)
          }
          13.1250% {
            transform:translate(105.247px,58.636px)
          }
          13.4375% {
            transform:translate(105.88px,59.072px)
          }
          13.7500% {
            transform:translate(106.499px,59.517px)
          }
          14.0625% {
            transform:translate(107.105px,59.968px)
          }
          14.3750% {
            transform:translate(107.695px,60.427px)
          }
          14.6875% {
            transform:translate(108.271px,60.893px)
          }
          15.0000% {
            transform:translate(108.833px,61.366px)
          }
          15.3125% {
            transform:translate(109.379px,61.846px)
          }
          15.6250% {
            transform:translate(109.911px,62.333px)
          }
          15.9375% {
            transform:translate(110.426px,62.826px)
          }
          16.2500% {
            transform:translate(110.927px,63.325px)
          }
          16.5625% {
            transform:translate(111.411px,63.83px)
          }
          16.8750% {
            transform:translate(111.88px,64.341px)
          }
          17.1875% {
            transform:translate(112.332px,64.858px)
          }
          17.5000% {
            transform:translate(112.768px,65.38px)
          }
          17.8125% {
            transform:translate(113.188px,65.908px)
          }
          18.1250% {
            transform:translate(113.591px,66.44px)
          }
          18.4375% {
            transform:translate(113.977px,66.978px)
          }
          18.7500% {
            transform:translate(114.346px,67.519px)
          }
          19.0625% {
            transform:translate(114.698px,68.066px)
          }
          19.3750% {
            transform:translate(115.033px,68.616px)
          }
          19.6875% {
            transform:translate(115.351px,69.171px)
          }
          20.0000% {
            transform:translate(115.651px,69.729px)
          }
          20.3125% {
            transform:translate(115.933px,70.291px)
          }
          20.6250% {
            transform:translate(116.198px,70.857px)
          }
          20.9375% {
            transform:translate(116.445px,71.425px)
          }
          21.2500% {
            transform:translate(116.674px,71.997px)
          }
          21.5625% {
            transform:translate(116.885px,72.571px)
          }
          21.8750% {
            transform:translate(117.078px,73.147px)
          }
          22.1875% {
            transform:translate(117.252px,73.726px)
          }
          22.5000% {
            transform:translate(117.409px,74.307px)
          }
          22.8125% {
            transform:translate(117.547px,74.89px)
          }
          23.1250% {
            transform:translate(117.667px,75.474px)
          }
          23.4375% {
            transform:translate(117.769px,76.059px)
          }
          23.7500% {
            transform:translate(117.852px,76.646px)
          }
          24.0625% {
            transform:translate(117.917px,77.234px)
          }
          24.3750% {
            transform:translate(117.963px,77.822px)
          }
          24.6875% {
            transform:translate(117.991px,78.411px)
          }
          25.0000% {
            transform:translate(118px,79px)
          }
          25.3125% {
            transform:translate(117.991px,79.589px)
          }
          25.6250% {
            transform:translate(117.963px,80.178px)
          }
          25.9375% {
            transform:translate(117.917px,80.766px)
          }
          26.2500% {
            transform:translate(117.852px,81.354px)
          }
          26.5625% {
            transform:translate(117.769px,81.941px)
          }
          26.8750% {
            transform:translate(117.667px,82.526px)
          }
          27.1875% {
            transform:translate(117.547px,83.11px)
          }
          27.5000% {
            transform:translate(117.409px,83.693px)
          }
          27.8125% {
            transform:translate(117.252px,84.274px)
          }
          28.1250% {
            transform:translate(117.078px,84.853px)
          }
          28.4375% {
            transform:translate(116.885px,85.429px)
          }
          28.7500% {
            transform:translate(116.674px,86.003px)
          }
          29.0625% {
            transform:translate(116.445px,86.575px)
          }
          29.3750% {
            transform:translate(116.198px,87.143px)
          }
          29.6875% {
            transform:translate(115.933px,87.709px)
          }
          30.0000% {
            transform:translate(115.651px,88.271px)
          }
          30.3125% {
            transform:translate(115.351px,88.829px)
          }
          30.6250% {
            transform:translate(115.033px,89.384px)
          }
          30.9375% {
            transform:translate(114.698px,89.934px)
          }
          31.2500% {
            transform:translate(114.346px,90.481px)
          }
          31.5625% {
            transform:translate(113.977px,91.022px)
          }
          31.8750% {
            transform:translate(113.591px,91.56px)
          }
          32.1875% {
            transform:translate(113.188px,92.092px)
          }
          32.5000% {
            transform:translate(112.768px,92.62px)
          }
          32.8125% {
            transform:translate(112.332px,93.142px)
          }
          33.1250% {
            transform:translate(111.88px,93.659px)
          }
          33.4375% {
            transform:translate(111.411px,94.17px)
          }
          33.7500% {
            transform:translate(110.927px,94.675px)
          }
          34.0625% {
            transform:translate(110.426px,95.174px)
          }
          34.3750% {
            transform:translate(109.911px,95.667px)
          }
          34.6875% {
            transform:translate(109.379px,96.154px)
          }
          35.0000% {
            transform:translate(108.833px,96.634px)
          }
          35.3125% {
            transform:translate(108.271px,97.107px)
          }
          35.6250% {
            transform:translate(107.695px,97.573px)
          }
          35.9375% {
            transform:translate(107.105px,98.032px)
          }
          36.2500% {
            transform:translate(106.499px,98.483px)
          }
          36.5625% {
            transform:translate(105.88px,98.928px)
          }
          36.8750% {
            transform:translate(105.247px,99.364px)
          }
          37.1875% {
            transform:translate(104.601px,99.793px)
          }
          37.5000% {
            transform:translate(103.941px,100.213px)
          }
          37.8125% {
            transform:translate(103.268px,100.626px)
          }
          38.1250% {
            transform:translate(102.582px,101.03px)
          }
          38.4375% {
            transform:translate(101.884px,101.425px)
          }
          38.7500% {
            transform:translate(101.174px,101.812px)
          }
          39.0625% {
            transform:translate(100.451px,102.19px)
          }
          39.3750% {
            transform:translate(99.717px,102.56px)
          }
          39.6875% {
            transform:translate(98.971px,102.92px)
          }
          40.0000% {
            transform:translate(98.214px,103.271px)
          }
          40.3125% {
            transform:translate(97.446px,103.612px)
          }
          40.6250% {
            transform:translate(96.667px,103.944px)
          }
          40.9375% {
            transform:translate(95.879px,104.267px)
          }
          41.2500% {
            transform:translate(95.08px,104.579px)
          }
          41.5625% {
            transform:translate(94.272px,104.882px)
          }
          41.8750% {
            transform:translate(93.454px,105.175px)
          }
          42.1875% {
            transform:translate(92.627px,105.458px)
          }
          42.5000% {
            transform:translate(91.792px,105.73px)
          }
          42.8125% {
            transform:translate(90.948px,105.992px)
          }
          43.1250% {
            transform:translate(90.096px,106.244px)
          }
          43.4375% {
            transform:translate(89.236px,106.486px)
          }
          43.7500% {
            transform:translate(88.369px,106.716px)
          }
          44.0625% {
            transform:translate(87.495px,106.936px)
          }
          44.3750% {
            transform:translate(86.614px,107.146px)
          }
          44.6875% {
            transform:translate(85.726px,107.344px)
          }
          45.0000% {
            transform:translate(84.833px,107.532px)
          }
          45.3125% {
            transform:translate(83.934px,107.708px)
          }
          45.6250% {
            transform:translate(83.029px,107.874px)
          }
          45.9375% {
            transform:translate(82.12px,108.028px)
          }
          46.2500% {
            transform:translate(81.205px,108.171px)
          }
          46.5625% {
            transform:translate(80.287px,108.303px)
          }
          46.8750% {
            transform:translate(79.364px,108.424px)
          }
          47.1875% {
            transform:translate(78.438px,108.533px)
          }
          47.5000% {
            transform:translate(77.509px,108.631px)
          }
          47.8125% {
            transform:translate(76.577px,108.717px)
          }
          48.1250% {
            transform:translate(75.642px,108.792px)
          }
          48.4375% {
            transform:translate(74.705px,108.856px)
          }
          48.7500% {
            transform:translate(73.766px,108.908px)
          }
          49.0625% {
            transform:translate(72.826px,108.948px)
          }
          49.3750% {
            transform:translate(71.884px,108.977px)
          }
          49.6875% {
            transform:translate(70.942px,108.994px)
          }
          50.0000% {
            transform:translate(70px,109px)
          }
          50.3125% {
            transform:translate(69.058px,108.994px)
          }
          50.6250% {
            transform:translate(68.116px,108.977px)
          }
          50.9375% {
            transform:translate(67.174px,108.948px)
          }
          51.2500% {
            transform:translate(66.234px,108.908px)
          }
          51.5625% {
            transform:translate(65.295px,108.856px)
          }
          51.8750% {
            transform:translate(64.358px,108.792px)
          }
          52.1875% {
            transform:translate(63.423px,108.717px)
          }
          52.5000% {
            transform:translate(62.491px,108.631px)
          }
          52.8125% {
            transform:translate(61.562px,108.533px)
          }
          53.1250% {
            transform:translate(60.636px,108.424px)
          }
          53.4375% {
            transform:translate(59.713px,108.303px)
          }
          53.7500% {
            transform:translate(58.795px,108.171px)
          }
          54.0625% {
            transform:translate(57.88px,108.028px)
          }
          54.3750% {
            transform:translate(56.971px,107.874px)
          }
          54.6875% {
            transform:translate(56.066px,107.708px)
          }
          55.0000% {
            transform:translate(55.167px,107.532px)
          }
          55.3125% {
            transform:translate(54.274px,107.344px)
          }
          55.6250% {
            transform:translate(53.386px,107.146px)
          }
          55.9375% {
            transform:translate(52.505px,106.936px)
          }
          56.2500% {
            transform:translate(51.631px,106.716px)
          }
          56.5625% {
            transform:translate(50.764px,106.486px)
          }
          56.8750% {
            transform:translate(49.904px,106.244px)
          }
          57.1875% {
            transform:translate(49.052px,105.992px)
          }
          57.5000% {
            transform:translate(48.208px,105.73px)
          }
          57.8125% {
            transform:translate(47.373px,105.458px)
          }
          58.1250% {
            transform:translate(46.546px,105.175px)
          }
          58.4375% {
            transform:translate(45.728px,104.882px)
          }
          58.7500% {
            transform:translate(44.92px,104.579px)
          }
          59.0625% {
            transform:translate(44.121px,104.267px)
          }
          59.3750% {
            transform:translate(43.333px,103.944px)
          }
          59.6875% {
            transform:translate(42.554px,103.612px)
          }
          60.0000% {
            transform:translate(41.786px,103.271px)
          }
          60.3125% {
            transform:translate(41.029px,102.92px)
          }
          60.6250% {
            transform:translate(40.283px,102.56px)
          }
          60.9375% {
            transform:translate(39.549px,102.19px)
          }
          61.2500% {
            transform:translate(38.826px,101.812px)
          }
          61.5625% {
            transform:translate(38.116px,101.425px)
          }
          61.8750% {
            transform:translate(37.418px,101.03px)
          }
          62.1875% {
            transform:translate(36.732px,100.626px)
          }
          62.5000% {
            transform:translate(36.059px,100.213px)
          }
          62.8125% {
            transform:translate(35.399px,99.793px)
          }
          63.1250% {
            transform:translate(34.753px,99.364px)
          }
          63.4375% {
            transform:translate(34.12px,98.928px)
          }
          63.7500% {
            transform:translate(33.501px,98.483px)
          }
          64.0625% {
            transform:translate(32.895px,98.032px)
          }
          64.3750% {
            transform:translate(32.305px,97.573px)
          }
          64.6875% {
            transform:translate(31.729px,97.107px)
          }
          65.0000% {
            transform:translate(31.167px,96.634px)
          }
          65.3125% {
            transform:translate(30.621px,96.154px)
          }
          65.6250% {
            transform:translate(30.089px,95.667px)
          }
          65.9375% {
            transform:translate(29.574px,95.174px)
          }
          66.2500% {
            transform:translate(29.073px,94.675px)
          }
          66.5625% {
            transform:translate(28.589px,94.17px)
          }
          66.8750% {
            transform:translate(28.12px,93.659px)
          }
          67.1875% {
            transform:translate(27.668px,93.142px)
          }
          67.5000% {
            transform:translate(27.232px,92.62px)
          }
          67.8125% {
            transform:translate(26.812px,92.092px)
          }
          68.1250% {
            transform:translate(26.409px,91.56px)
          }
          68.4375% {
            transform:translate(26.023px,91.022px)
          }
          68.7500% {
            transform:translate(25.654px,90.481px)
          }
          69.0625% {
            transform:translate(25.302px,89.934px)
          }
          69.3750% {
            transform:translate(24.967px,89.384px)
          }
          69.6875% {
            transform:translate(24.649px,88.829px)
          }
          70.0000% {
            transform:translate(24.349px,88.271px)
          }
          70.3125% {
            transform:translate(24.067px,87.709px)
          }
          70.6250% {
            transform:translate(23.802px,87.143px)
          }
          70.9375% {
            transform:translate(23.555px,86.575px)
          }
          71.2500% {
            transform:translate(23.326px,86.003px)
          }
          71.5625% {
            transform:translate(23.115px,85.429px)
          }
          71.8750% {
            transform:translate(22.922px,84.853px)
          }
          72.1875% {
            transform:translate(22.748px,84.274px)
          }
          72.5000% {
            transform:translate(22.591px,83.693px)
          }
          72.8125% {
            transform:translate(22.453px,83.11px)
          }
          73.1250% {
            transform:translate(22.333px,82.526px)
          }
          73.4375% {
            transform:translate(22.231px,81.941px)
          }
          73.7500% {
            transform:translate(22.148px,81.354px)
          }
          74.0625% {
            transform:translate(22.083px,80.766px)
          }
          74.3750% {
            transform:translate(22.037px,80.178px)
          }
          74.6875% {
            transform:translate(22.009px,79.589px)
          }
          75.0000% {
            transform:translate(22px,79px)
          }
          75.3125% {
            transform:translate(22.009px,78.411px)
          }
          75.6250% {
            transform:translate(22.037px,77.822px)
          }
          75.9375% {
            transform:translate(22.083px,77.234px)
          }
          76.2500% {
            transform:translate(22.148px,76.646px)
          }
          76.5625% {
            transform:translate(22.231px,76.059px)
          }
          76.8750% {
            transform:translate(22.333px,75.474px)
          }
          77.1875% {
            transform:translate(22.453px,74.89px)
          }
          77.5000% {
            transform:translate(22.591px,74.307px)
          }
          77.8125% {
            transform:translate(22.748px,73.726px)
          }
          78.1250% {
            transform:translate(22.922px,73.147px)
          }
          78.4375% {
            transform:translate(23.115px,72.571px)
          }
          78.7500% {
            transform:translate(23.326px,71.997px)
          }
          79.0625% {
            transform:translate(23.555px,71.425px)
          }
          79.3750% {
            transform:translate(23.802px,70.857px)
          }
          79.6875% {
            transform:translate(24.067px,70.291px)
          }
          80.0000% {
            transform:translate(24.349px,69.729px)
          }
          80.3125% {
            transform:translate(24.649px,69.171px)
          }
          80.6250% {
            transform:translate(24.967px,68.616px)
          }
          80.9375% {
            transform:translate(25.302px,68.066px)
          }
          81.2500% {
            transform:translate(25.654px,67.519px)
          }
          81.5625% {
            transform:translate(26.023px,66.978px)
          }
          81.8750% {
            transform:translate(26.409px,66.44px)
          }
          82.1875% {
            transform:translate(26.812px,65.908px)
          }
          82.5000% {
            transform:translate(27.232px,65.38px)
          }
          82.8125% {
            transform:translate(27.668px,64.858px)
          }
          83.1250% {
            transform:translate(28.12px,64.341px)
          }
          83.4375% {
            transform:translate(28.589px,63.83px)
          }
          83.7500% {
            transform:translate(29.073px,63.325px)
          }
          84.0625% {
            transform:translate(29.574px,62.826px)
          }
          84.3750% {
            transform:translate(30.089px,62.333px)
          }
          84.6875% {
            transform:translate(30.621px,61.846px)
          }
          85.0000% {
            transform:translate(31.167px,61.366px)
          }
          85.3125% {
            transform:translate(31.729px,60.893px)
          }
          85.6250% {
            transform:translate(32.305px,60.427px)
          }
          85.9375% {
            transform:translate(32.895px,59.968px)
          }
          86.2500% {
            transform:translate(33.501px,59.517px)
          }
          86.5625% {
            transform:translate(34.12px,59.072px)
          }
          86.8750% {
            transform:translate(34.753px,58.636px)
          }
          87.1875% {
            transform:translate(35.399px,58.207px)
          }
          87.5000% {
            transform:translate(36.059px,57.787px)
          }
          87.8125% {
            transform:translate(36.732px,57.374px)
          }
          88.1250% {
            transform:translate(37.418px,56.97px)
          }
          88.4375% {
            transform:translate(38.116px,56.575px)
          }
          88.7500% {
            transform:translate(38.826px,56.188px)
          }
          89.0625% {
            transform:translate(39.549px,55.81px)
          }
          89.3750% {
            transform:translate(40.283px,55.44px)
          }
          89.6875% {
            transform:translate(41.029px,55.08px)
          }
          90.0000% {
            transform:translate(41.786px,54.729px)
          }
          90.3125% {
            transform:translate(42.554px,54.388px)
          }
          90.6250% {
            transform:translate(43.333px,54.056px)
          }
          90.9375% {
            transform:translate(44.121px,53.733px)
          }
          91.2500% {
            transform:translate(44.92px,53.421px)
          }
          91.5625% {
            transform:translate(45.728px,53.118px)
          }
          91.8750% {
            transform:translate(46.546px,52.825px)
          }
          92.1875% {
            transform:translate(47.373px,52.542px)
          }
          92.5000% {
            transform:translate(48.208px,52.27px)
          }
          92.8125% {
            transform:translate(49.052px,52.008px)
          }
          93.1250% {
            transform:translate(49.904px,51.756px)
          }
          93.4375% {
            transform:translate(50.764px,51.514px)
          }
          93.7500% {
            transform:translate(51.631px,51.284px)
          }
          94.0625% {
            transform:translate(52.505px,51.064px)
          }
          94.3750% {
            transform:translate(53.386px,50.854px)
          }
          94.6875% {
            transform:translate(54.274px,50.656px)
          }
          95.0000% {
            transform:translate(55.167px,50.468px)
          }
          95.3125% {
            transform:translate(56.066px,50.292px)
          }
          95.6250% {
            transform:translate(56.971px,50.126px)
          }
          95.9375% {
            transform:translate(57.88px,49.972px)
          }
          96.2500% {
            transform:translate(58.795px,49.829px)
          }
          96.5625% {
            transform:translate(59.713px,49.697px)
          }
          96.8750% {
            transform:translate(60.636px,49.576px)
          }
          97.1875% {
            transform:translate(61.562px,49.467px)
          }
          97.5000% {
            transform:translate(62.491px,49.369px)
          }
          97.8125% {
            transform:translate(63.423px,49.283px)
          }
          98.1250% {
            transform:translate(64.358px,49.208px)
          }
          98.4375% {
            transform:translate(65.295px,49.144px)
          }
          98.7500% {
            transform:translate(66.234px,49.092px)
          }
          99.0625% {
            transform:translate(67.174px,49.052px)
          }
          99.3750% {
            transform:translate(68.116px,49.023px)
          }
          99.6875% {
            transform:translate(69.058px,49.006px)
          }
          100.0000% {
            transform:translate(70px,49px)
          }
        }
        @keyframes overturn-color-0 {
          0.0000% {
            fill:rgb(243 201 119)
          }
          0.3125% {
            fill:rgb(243 201 119)
          }
          0.6250% {
            fill:rgb(243 201 119)
          }
          0.9375% {
            fill:rgb(243 201 119)
          }
          1.2500% {
            fill:rgb(243 201 119)
          }
          1.5625% {
            fill:rgb(243 201 119)
          }
          1.8750% {
            fill:rgb(243 201 119)
          }
          2.1875% {
            fill:rgb(243 201 119)
          }
          2.5000% {
            fill:rgb(243 201 119)
          }
          2.8125% {
            fill:rgb(243 201 119)
          }
          3.1250% {
            fill:rgb(243 201 119)
          }
          3.4375% {
            fill:rgb(243 201 119)
          }
          3.7500% {
            fill:rgb(243 201 119)
          }
          4.0625% {
            fill:rgb(243 201 119)
          }
          4.3750% {
            fill:rgb(243 201 119)
          }
          4.6875% {
            fill:rgb(243 201 119)
          }
          5.0000% {
            fill:rgb(243 201 119)
          }
          5.3125% {
            fill:rgb(243 201 119)
          }
          5.6250% {
            fill:rgb(243 201 119)
          }
          5.9375% {
            fill:rgb(243 201 119)
          }
          6.2500% {
            fill:rgb(243 201 119)
          }
          6.5625% {
            fill:rgb(243 201 119)
          }
          6.8750% {
            fill:rgb(243 201 119)
          }
          7.1875% {
            fill:rgb(243 201 119)
          }
          7.5000% {
            fill:rgb(243 201 119)
          }
          7.8125% {
            fill:rgb(243 201 119)
          }
          8.1250% {
            fill:rgb(243 201 119)
          }
          8.4375% {
            fill:rgb(243 201 119)
          }
          8.7500% {
            fill:rgb(243 201 119)
          }
          9.0625% {
            fill:rgb(242 201 120)
          }
          9.3750% {
            fill:rgb(242 201 120)
          }
          9.6875% {
            fill:rgb(241 201 121)
          }
          10.0000% {
            fill:rgb(240 201 122)
          }
          10.3125% {
            fill:rgb(238 201 124)
          }
          10.6250% {
            fill:rgb(237 201 125)
          }
          10.9375% {
            fill:rgb(235 201 127)
          }
          11.2500% {
            fill:rgb(233 201 129)
          }
          11.5625% {
            fill:rgb(231 201 131)
          }
          11.8750% {
            fill:rgb(229 201 133)
          }
          12.1875% {
            fill:rgb(226 201 135)
          }
          12.5000% {
            fill:rgb(224 201 138)
          }
          12.8125% {
            fill:rgb(221 201 140)
          }
          13.1250% {
            fill:rgb(218 201 143)
          }
          13.4375% {
            fill:rgb(215 201 146)
          }
          13.7500% {
            fill:rgb(212 201 149)
          }
          14.0625% {
            fill:rgb(209 201 152)
          }
          14.3750% {
            fill:rgb(206 201 155)
          }
          14.6875% {
            fill:rgb(203 201 158)
          }
          15.0000% {
            fill:rgb(199 201 161)
          }
          15.3125% {
            fill:rgb(196 201 165)
          }
          15.6250% {
            fill:rgb(193 201 168)
          }
          15.9375% {
            fill:rgb(189 201 171)
          }
          16.2500% {
            fill:rgb(186 201 175)
          }
          16.5625% {
            fill:rgb(182 201 178)
          }
          16.8750% {
            fill:rgb(179 201 181)
          }
          17.1875% {
            fill:rgb(175 201 185)
          }
          17.5000% {
            fill:rgb(172 201 188)
          }
          17.8125% {
            fill:rgb(168 201 191)
          }
          18.1250% {
            fill:rgb(165 201 195)
          }
          18.4375% {
            fill:rgb(162 201 198)
          }
          18.7500% {
            fill:rgb(158 201 201)
          }
          19.0625% {
            fill:rgb(155 201 204)
          }
          19.3750% {
            fill:rgb(152 201 207)
          }
          19.6875% {
            fill:rgb(149 201 210)
          }
          20.0000% {
            fill:rgb(146 201 213)
          }
          20.3125% {
            fill:rgb(143 201 216)
          }
          20.6250% {
            fill:rgb(140 201 219)
          }
          20.9375% {
            fill:rgb(138 201 221)
          }
          21.2500% {
            fill:rgb(135 201 224)
          }
          21.5625% {
            fill:rgb(133 201 226)
          }
          21.8750% {
            fill:rgb(130 201 228)
          }
          22.1875% {
            fill:rgb(128 201 230)
          }
          22.5000% {
            fill:rgb(127 201 232)
          }
          22.8125% {
            fill:rgb(125 201 233)
          }
          23.1250% {
            fill:rgb(123 201 235)
          }
          23.4375% {
            fill:rgb(122 201 236)
          }
          23.7500% {
            fill:rgb(121 201 237)
          }
          24.0625% {
            fill:rgb(120 201 238)
          }
          24.3750% {
            fill:rgb(120 201 239)
          }
          24.6875% {
            fill:rgb(119 201 239)
          }
          25.0000% {
            fill:rgb(119 201 239)
          }
          25.3125% {
            fill:rgb(119 201 239)
          }
          25.6250% {
            fill:rgb(119 201 239)
          }
          25.9375% {
            fill:rgb(119 201 239)
          }
          26.2500% {
            fill:rgb(119 201 239)
          }
          26.5625% {
            fill:rgb(119 201 239)
          }
          26.8750% {
            fill:rgb(119 201 239)
          }
          27.1875% {
            fill:rgb(119 201 239)
          }
          27.5000% {
            fill:rgb(119 201 239)
          }
          27.8125% {
            fill:rgb(119 201 239)
          }
          28.1250% {
            fill:rgb(119 201 239)
          }
          28.4375% {
            fill:rgb(119 201 239)
          }
          28.7500% {
            fill:rgb(119 201 239)
          }
          29.0625% {
            fill:rgb(119 201 239)
          }
          29.3750% {
            fill:rgb(119 201 239)
          }
          29.6875% {
            fill:rgb(119 201 239)
          }
          30.0000% {
            fill:rgb(119 201 239)
          }
          30.3125% {
            fill:rgb(119 201 239)
          }
          30.6250% {
            fill:rgb(119 201 239)
          }
          30.9375% {
            fill:rgb(119 201 239)
          }
          31.2500% {
            fill:rgb(119 201 239)
          }
          31.5625% {
            fill:rgb(119 201 239)
          }
          31.8750% {
            fill:rgb(119 201 239)
          }
          32.1875% {
            fill:rgb(119 201 239)
          }
          32.5000% {
            fill:rgb(119 201 239)
          }
          32.8125% {
            fill:rgb(119 201 239)
          }
          33.1250% {
            fill:rgb(119 201 239)
          }
          33.4375% {
            fill:rgb(119 201 239)
          }
          33.7500% {
            fill:rgb(119 201 239)
          }
          34.0625% {
            fill:rgb(119 201 239)
          }
          34.3750% {
            fill:rgb(119 201 239)
          }
          34.6875% {
            fill:rgb(119 201 239)
          }
          35.0000% {
            fill:rgb(119 201 239)
          }
          35.3125% {
            fill:rgb(119 201 239)
          }
          35.6250% {
            fill:rgb(119 201 239)
          }
          35.9375% {
            fill:rgb(119 201 239)
          }
          36.2500% {
            fill:rgb(119 201 239)
          }
          36.5625% {
            fill:rgb(119 201 239)
          }
          36.8750% {
            fill:rgb(119 201 239)
          }
          37.1875% {
            fill:rgb(119 201 239)
          }
          37.5000% {
            fill:rgb(119 201 239)
          }
          37.8125% {
            fill:rgb(119 201 239)
          }
          38.1250% {
            fill:rgb(119 201 239)
          }
          38.4375% {
            fill:rgb(119 201 239)
          }
          38.7500% {
            fill:rgb(119 201 239)
          }
          39.0625% {
            fill:rgb(119 201 239)
          }
          39.3750% {
            fill:rgb(119 201 239)
          }
          39.6875% {
            fill:rgb(119 201 239)
          }
          40.0000% {
            fill:rgb(119 201 239)
          }
          40.3125% {
            fill:rgb(119 201 239)
          }
          40.6250% {
            fill:rgb(119 201 239)
          }
          40.9375% {
            fill:rgb(119 201 239)
          }
          41.2500% {
            fill:rgb(119 201 239)
          }
          41.5625% {
            fill:rgb(119 201 239)
          }
          41.8750% {
            fill:rgb(119 201 239)
          }
          42.1875% {
            fill:rgb(119 201 239)
          }
          42.5000% {
            fill:rgb(119 201 239)
          }
          42.8125% {
            fill:rgb(119 201 239)
          }
          43.1250% {
            fill:rgb(119 201 239)
          }
          43.4375% {
            fill:rgb(119 201 239)
          }
          43.7500% {
            fill:rgb(119 201 239)
          }
          44.0625% {
            fill:rgb(119 201 239)
          }
          44.3750% {
            fill:rgb(119 201 239)
          }
          44.6875% {
            fill:rgb(119 201 239)
          }
          45.0000% {
            fill:rgb(119 201 239)
          }
          45.3125% {
            fill:rgb(119 201 239)
          }
          45.6250% {
            fill:rgb(119 201 239)
          }
          45.9375% {
            fill:rgb(119 201 239)
          }
          46.2500% {
            fill:rgb(119 201 239)
          }
          46.5625% {
            fill:rgb(119 201 239)
          }
          46.8750% {
            fill:rgb(119 201 239)
          }
          47.1875% {
            fill:rgb(119 201 239)
          }
          47.5000% {
            fill:rgb(119 201 239)
          }
          47.8125% {
            fill:rgb(119 201 239)
          }
          48.1250% {
            fill:rgb(119 201 239)
          }
          48.4375% {
            fill:rgb(119 201 239)
          }
          48.7500% {
            fill:rgb(119 201 239)
          }
          49.0625% {
            fill:rgb(119 201 239)
          }
          49.3750% {
            fill:rgb(119 201 239)
          }
          49.6875% {
            fill:rgb(119 201 239)
          }
          50.0000% {
            fill:rgb(119 201 239)
          }
          50.3125% {
            fill:rgb(119 201 239)
          }
          50.6250% {
            fill:rgb(119 201 239)
          }
          50.9375% {
            fill:rgb(119 201 239)
          }
          51.2500% {
            fill:rgb(119 201 239)
          }
          51.5625% {
            fill:rgb(119 201 239)
          }
          51.8750% {
            fill:rgb(119 201 239)
          }
          52.1875% {
            fill:rgb(119 201 239)
          }
          52.5000% {
            fill:rgb(119 201 239)
          }
          52.8125% {
            fill:rgb(119 201 239)
          }
          53.1250% {
            fill:rgb(119 201 239)
          }
          53.4375% {
            fill:rgb(119 201 239)
          }
          53.7500% {
            fill:rgb(119 201 239)
          }
          54.0625% {
            fill:rgb(119 201 239)
          }
          54.3750% {
            fill:rgb(119 201 239)
          }
          54.6875% {
            fill:rgb(119 201 239)
          }
          55.0000% {
            fill:rgb(119 201 239)
          }
          55.3125% {
            fill:rgb(119 201 239)
          }
          55.6250% {
            fill:rgb(119 201 239)
          }
          55.9375% {
            fill:rgb(119 201 239)
          }
          56.2500% {
            fill:rgb(119 201 239)
          }
          56.5625% {
            fill:rgb(119 201 239)
          }
          56.8750% {
            fill:rgb(119 201 239)
          }
          57.1875% {
            fill:rgb(119 201 239)
          }
          57.5000% {
            fill:rgb(119 201 239)
          }
          57.8125% {
            fill:rgb(119 201 239)
          }
          58.1250% {
            fill:rgb(119 201 239)
          }
          58.4375% {
            fill:rgb(119 201 239)
          }
          58.7500% {
            fill:rgb(119 201 239)
          }
          59.0625% {
            fill:rgb(119 201 239)
          }
          59.3750% {
            fill:rgb(119 201 239)
          }
          59.6875% {
            fill:rgb(119 201 239)
          }
          60.0000% {
            fill:rgb(119 201 239)
          }
          60.3125% {
            fill:rgb(119 201 239)
          }
          60.6250% {
            fill:rgb(119 201 239)
          }
          60.9375% {
            fill:rgb(119 201 239)
          }
          61.2500% {
            fill:rgb(119 201 239)
          }
          61.5625% {
            fill:rgb(119 201 239)
          }
          61.8750% {
            fill:rgb(119 201 239)
          }
          62.1875% {
            fill:rgb(119 201 239)
          }
          62.5000% {
            fill:rgb(119 201 239)
          }
          62.8125% {
            fill:rgb(119 201 239)
          }
          63.1250% {
            fill:rgb(119 201 239)
          }
          63.4375% {
            fill:rgb(119 201 239)
          }
          63.7500% {
            fill:rgb(119 201 239)
          }
          64.0625% {
            fill:rgb(119 201 239)
          }
          64.3750% {
            fill:rgb(119 201 239)
          }
          64.6875% {
            fill:rgb(119 201 239)
          }
          65.0000% {
            fill:rgb(119 201 239)
          }
          65.3125% {
            fill:rgb(119 201 239)
          }
          65.6250% {
            fill:rgb(119 201 239)
          }
          65.9375% {
            fill:rgb(119 201 239)
          }
          66.2500% {
            fill:rgb(119 201 239)
          }
          66.5625% {
            fill:rgb(119 201 239)
          }
          66.8750% {
            fill:rgb(119 201 239)
          }
          67.1875% {
            fill:rgb(119 201 239)
          }
          67.5000% {
            fill:rgb(119 201 239)
          }
          67.8125% {
            fill:rgb(119 201 239)
          }
          68.1250% {
            fill:rgb(119 201 239)
          }
          68.4375% {
            fill:rgb(119 201 239)
          }
          68.7500% {
            fill:rgb(119 201 239)
          }
          69.0625% {
            fill:rgb(119 201 239)
          }
          69.3750% {
            fill:rgb(119 201 239)
          }
          69.6875% {
            fill:rgb(119 201 239)
          }
          70.0000% {
            fill:rgb(119 201 239)
          }
          70.3125% {
            fill:rgb(119 201 239)
          }
          70.6250% {
            fill:rgb(119 201 239)
          }
          70.9375% {
            fill:rgb(119 201 239)
          }
          71.2500% {
            fill:rgb(119 201 239)
          }
          71.5625% {
            fill:rgb(119 201 239)
          }
          71.8750% {
            fill:rgb(119 201 239)
          }
          72.1875% {
            fill:rgb(119 201 239)
          }
          72.5000% {
            fill:rgb(119 201 239)
          }
          72.8125% {
            fill:rgb(119 201 239)
          }
          73.1250% {
            fill:rgb(119 201 239)
          }
          73.4375% {
            fill:rgb(119 201 239)
          }
          73.7500% {
            fill:rgb(119 201 239)
          }
          74.0625% {
            fill:rgb(119 201 239)
          }
          74.3750% {
            fill:rgb(119 201 239)
          }
          74.6875% {
            fill:rgb(119 201 239)
          }
          75.0000% {
            fill:rgb(119 201 239)
          }
          75.3125% {
            fill:rgb(119 201 239)
          }
          75.6250% {
            fill:rgb(119 201 239)
          }
          75.9375% {
            fill:rgb(120 201 239)
          }
          76.2500% {
            fill:rgb(120 201 238)
          }
          76.5625% {
            fill:rgb(120 201 238)
          }
          76.8750% {
            fill:rgb(121 201 237)
          }
          77.1875% {
            fill:rgb(122 201 236)
          }
          77.5000% {
            fill:rgb(122 201 236)
          }
          77.8125% {
            fill:rgb(123 201 235)
          }
          78.1250% {
            fill:rgb(124 201 234)
          }
          78.4375% {
            fill:rgb(125 201 233)
          }
          78.7500% {
            fill:rgb(127 201 232)
          }
          79.0625% {
            fill:rgb(128 201 231)
          }
          79.3750% {
            fill:rgb(129 201 229)
          }
          79.6875% {
            fill:rgb(130 201 228)
          }
          80.0000% {
            fill:rgb(132 201 227)
          }
          80.3125% {
            fill:rgb(133 201 225)
          }
          80.6250% {
            fill:rgb(135 201 224)
          }
          80.9375% {
            fill:rgb(137 201 222)
          }
          81.2500% {
            fill:rgb(138 201 220)
          }
          81.5625% {
            fill:rgb(140 201 219)
          }
          81.8750% {
            fill:rgb(142 201 217)
          }
          82.1875% {
            fill:rgb(144 201 215)
          }
          82.5000% {
            fill:rgb(146 201 213)
          }
          82.8125% {
            fill:rgb(148 201 211)
          }
          83.1250% {
            fill:rgb(150 201 209)
          }
          83.4375% {
            fill:rgb(152 201 207)
          }
          83.7500% {
            fill:rgb(154 201 205)
          }
          84.0625% {
            fill:rgb(156 201 203)
          }
          84.3750% {
            fill:rgb(158 201 201)
          }
          84.6875% {
            fill:rgb(160 201 199)
          }
          85.0000% {
            fill:rgb(163 201 197)
          }
          85.3125% {
            fill:rgb(165 201 195)
          }
          85.6250% {
            fill:rgb(167 201 192)
          }
          85.9375% {
            fill:rgb(169 201 190)
          }
          86.2500% {
            fill:rgb(172 201 188)
          }
          86.5625% {
            fill:rgb(174 201 186)
          }
          86.8750% {
            fill:rgb(176 201 183)
          }
          87.1875% {
            fill:rgb(179 201 181)
          }
          87.5000% {
            fill:rgb(181 201 179)
          }
          87.8125% {
            fill:rgb(183 201 177)
          }
          88.1250% {
            fill:rgb(186 201 175)
          }
          88.4375% {
            fill:rgb(188 201 172)
          }
          88.7500% {
            fill:rgb(190 201 170)
          }
          89.0625% {
            fill:rgb(193 201 168)
          }
          89.3750% {
            fill:rgb(195 201 166)
          }
          89.6875% {
            fill:rgb(197 201 163)
          }
          90.0000% {
            fill:rgb(199 201 161)
          }
          90.3125% {
            fill:rgb(202 201 159)
          }
          90.6250% {
            fill:rgb(204 201 157)
          }
          90.9375% {
            fill:rgb(206 201 155)
          }
          91.2500% {
            fill:rgb(208 201 153)
          }
          91.5625% {
            fill:rgb(210 201 151)
          }
          91.8750% {
            fill:rgb(212 201 149)
          }
          92.1875% {
            fill:rgb(214 201 147)
          }
          92.5000% {
            fill:rgb(216 201 145)
          }
          92.8125% {
            fill:rgb(218 201 143)
          }
          93.1250% {
            fill:rgb(220 201 141)
          }
          93.4375% {
            fill:rgb(222 201 139)
          }
          93.7500% {
            fill:rgb(224 201 138)
          }
          94.0625% {
            fill:rgb(225 201 136)
          }
          94.3750% {
            fill:rgb(227 201 134)
          }
          94.6875% {
            fill:rgb(229 201 133)
          }
          95.0000% {
            fill:rgb(230 201 131)
          }
          95.3125% {
            fill:rgb(232 201 130)
          }
          95.6250% {
            fill:rgb(233 201 129)
          }
          95.9375% {
            fill:rgb(234 201 127)
          }
          96.2500% {
            fill:rgb(235 201 126)
          }
          96.5625% {
            fill:rgb(237 201 125)
          }
          96.8750% {
            fill:rgb(238 201 124)
          }
          97.1875% {
            fill:rgb(239 201 123)
          }
          97.5000% {
            fill:rgb(240 201 122)
          }
          97.8125% {
            fill:rgb(240 201 122)
          }
          98.1250% {
            fill:rgb(241 201 121)
          }
          98.4375% {
            fill:rgb(242 201 120)
          }
          98.7500% {
            fill:rgb(242 201 120)
          }
          99.0625% {
            fill:rgb(242 201 119)
          }
          99.3750% {
            fill:rgb(243 201 119)
          }
          99.6875% {
            fill:rgb(243 201 119)
          }
          100.0000% {
            fill:rgb(243 201 119)
          }
        }
        @keyframes overturn-mark-0 {
          0.0000% {
            opacity:0
          }
          0.3125% {
            opacity:0
          }
          0.6250% {
            opacity:0
          }
          0.9375% {
            opacity:0
          }
          1.2500% {
            opacity:0
          }
          1.5625% {
            opacity:0
          }
          1.8750% {
            opacity:0
          }
          2.1875% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          2.8125% {
            opacity:0
          }
          3.1250% {
            opacity:0
          }
          3.4375% {
            opacity:0
          }
          3.7500% {
            opacity:0
          }
          4.0625% {
            opacity:0
          }
          4.3750% {
            opacity:0
          }
          4.6875% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.3125% {
            opacity:0
          }
          5.6250% {
            opacity:0
          }
          5.9375% {
            opacity:0
          }
          6.2500% {
            opacity:0
          }
          6.5625% {
            opacity:0
          }
          6.8750% {
            opacity:0
          }
          7.1875% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          7.8125% {
            opacity:0
          }
          8.1250% {
            opacity:0
          }
          8.4375% {
            opacity:0.0
          }
          8.7500% {
            opacity:0.002
          }
          9.0625% {
            opacity:0.006
          }
          9.3750% {
            opacity:0.011
          }
          9.6875% {
            opacity:0.019
          }
          10.0000% {
            opacity:0.028
          }
          10.3125% {
            opacity:0.039
          }
          10.6250% {
            opacity:0.052
          }
          10.9375% {
            opacity:0.066
          }
          11.2500% {
            opacity:0.081
          }
          11.5625% {
            opacity:0.098
          }
          11.8750% {
            opacity:0.116
          }
          12.1875% {
            opacity:0.136
          }
          12.5000% {
            opacity:0.156
          }
          12.8125% {
            opacity:0.178
          }
          13.1250% {
            opacity:0.2
          }
          13.4375% {
            opacity:0.224
          }
          13.7500% {
            opacity:0.248
          }
          14.0625% {
            opacity:0.273
          }
          14.3750% {
            opacity:0.299
          }
          14.6875% {
            opacity:0.325
          }
          15.0000% {
            opacity:0.352
          }
          15.3125% {
            opacity:0.379
          }
          15.6250% {
            opacity:0.407
          }
          15.9375% {
            opacity:0.435
          }
          16.2500% {
            opacity:0.463
          }
          16.5625% {
            opacity:0.491
          }
          16.8750% {
            opacity:0.519
          }
          17.1875% {
            opacity:0.547
          }
          17.5000% {
            opacity:0.575
          }
          17.8125% {
            opacity:0.602
          }
          18.1250% {
            opacity:0.63
          }
          18.4375% {
            opacity:0.657
          }
          18.7500% {
            opacity:0.684
          }
          19.0625% {
            opacity:0.71
          }
          19.3750% {
            opacity:0.735
          }
          19.6875% {
            opacity:0.76
          }
          20.0000% {
            opacity:0.784
          }
          20.3125% {
            opacity:0.807
          }
          20.6250% {
            opacity:0.829
          }
          20.9375% {
            opacity:0.851
          }
          21.2500% {
            opacity:0.871
          }
          21.5625% {
            opacity:0.89
          }
          21.8750% {
            opacity:0.908
          }
          22.1875% {
            opacity:0.924
          }
          22.5000% {
            opacity:0.939
          }
          22.8125% {
            opacity:0.953
          }
          23.1250% {
            opacity:0.965
          }
          23.4375% {
            opacity:0.975
          }
          23.7500% {
            opacity:0.984
          }
          24.0625% {
            opacity:0.991
          }
          24.3750% {
            opacity:0.996
          }
          24.6875% {
            opacity:0.999
          }
          25.0000% {
            opacity:1
          }
          25.3125% {
            opacity:1
          }
          25.6250% {
            opacity:1
          }
          25.9375% {
            opacity:1
          }
          26.2500% {
            opacity:1
          }
          26.5625% {
            opacity:1
          }
          26.8750% {
            opacity:1
          }
          27.1875% {
            opacity:1
          }
          27.5000% {
            opacity:1
          }
          27.8125% {
            opacity:1
          }
          28.1250% {
            opacity:1
          }
          28.4375% {
            opacity:1
          }
          28.7500% {
            opacity:1
          }
          29.0625% {
            opacity:1
          }
          29.3750% {
            opacity:1
          }
          29.6875% {
            opacity:1
          }
          30.0000% {
            opacity:1
          }
          30.3125% {
            opacity:1
          }
          30.6250% {
            opacity:1
          }
          30.9375% {
            opacity:1
          }
          31.2500% {
            opacity:1
          }
          31.5625% {
            opacity:1
          }
          31.8750% {
            opacity:1
          }
          32.1875% {
            opacity:1
          }
          32.5000% {
            opacity:1
          }
          32.8125% {
            opacity:1
          }
          33.1250% {
            opacity:1
          }
          33.4375% {
            opacity:1
          }
          33.7500% {
            opacity:1
          }
          34.0625% {
            opacity:1
          }
          34.3750% {
            opacity:1
          }
          34.6875% {
            opacity:1
          }
          35.0000% {
            opacity:1
          }
          35.3125% {
            opacity:1
          }
          35.6250% {
            opacity:1
          }
          35.9375% {
            opacity:1
          }
          36.2500% {
            opacity:1
          }
          36.5625% {
            opacity:1
          }
          36.8750% {
            opacity:1
          }
          37.1875% {
            opacity:1
          }
          37.5000% {
            opacity:1
          }
          37.8125% {
            opacity:1
          }
          38.1250% {
            opacity:1
          }
          38.4375% {
            opacity:1
          }
          38.7500% {
            opacity:1
          }
          39.0625% {
            opacity:1
          }
          39.3750% {
            opacity:1
          }
          39.6875% {
            opacity:1
          }
          40.0000% {
            opacity:1
          }
          40.3125% {
            opacity:1
          }
          40.6250% {
            opacity:1
          }
          40.9375% {
            opacity:1
          }
          41.2500% {
            opacity:1
          }
          41.5625% {
            opacity:1
          }
          41.8750% {
            opacity:1
          }
          42.1875% {
            opacity:1
          }
          42.5000% {
            opacity:1
          }
          42.8125% {
            opacity:1
          }
          43.1250% {
            opacity:1
          }
          43.4375% {
            opacity:1
          }
          43.7500% {
            opacity:1
          }
          44.0625% {
            opacity:1
          }
          44.3750% {
            opacity:1
          }
          44.6875% {
            opacity:1
          }
          45.0000% {
            opacity:1
          }
          45.3125% {
            opacity:1
          }
          45.6250% {
            opacity:1
          }
          45.9375% {
            opacity:1
          }
          46.2500% {
            opacity:1
          }
          46.5625% {
            opacity:1
          }
          46.8750% {
            opacity:1
          }
          47.1875% {
            opacity:1
          }
          47.5000% {
            opacity:1
          }
          47.8125% {
            opacity:1
          }
          48.1250% {
            opacity:1
          }
          48.4375% {
            opacity:1
          }
          48.7500% {
            opacity:1
          }
          49.0625% {
            opacity:1
          }
          49.3750% {
            opacity:1
          }
          49.6875% {
            opacity:1
          }
          50.0000% {
            opacity:1
          }
          50.3125% {
            opacity:1
          }
          50.6250% {
            opacity:1
          }
          50.9375% {
            opacity:1
          }
          51.2500% {
            opacity:1
          }
          51.5625% {
            opacity:1
          }
          51.8750% {
            opacity:1
          }
          52.1875% {
            opacity:1
          }
          52.5000% {
            opacity:1
          }
          52.8125% {
            opacity:1
          }
          53.1250% {
            opacity:1
          }
          53.4375% {
            opacity:1
          }
          53.7500% {
            opacity:1
          }
          54.0625% {
            opacity:1
          }
          54.3750% {
            opacity:1
          }
          54.6875% {
            opacity:1
          }
          55.0000% {
            opacity:1
          }
          55.3125% {
            opacity:1
          }
          55.6250% {
            opacity:1
          }
          55.9375% {
            opacity:1
          }
          56.2500% {
            opacity:1
          }
          56.5625% {
            opacity:1
          }
          56.8750% {
            opacity:1
          }
          57.1875% {
            opacity:1
          }
          57.5000% {
            opacity:1
          }
          57.8125% {
            opacity:1
          }
          58.1250% {
            opacity:1
          }
          58.4375% {
            opacity:1
          }
          58.7500% {
            opacity:1
          }
          59.0625% {
            opacity:1
          }
          59.3750% {
            opacity:1
          }
          59.6875% {
            opacity:1
          }
          60.0000% {
            opacity:1
          }
          60.3125% {
            opacity:1
          }
          60.6250% {
            opacity:1
          }
          60.9375% {
            opacity:1
          }
          61.2500% {
            opacity:1
          }
          61.5625% {
            opacity:1
          }
          61.8750% {
            opacity:1
          }
          62.1875% {
            opacity:1
          }
          62.5000% {
            opacity:1
          }
          62.8125% {
            opacity:1
          }
          63.1250% {
            opacity:1
          }
          63.4375% {
            opacity:1
          }
          63.7500% {
            opacity:1
          }
          64.0625% {
            opacity:1
          }
          64.3750% {
            opacity:1
          }
          64.6875% {
            opacity:1
          }
          65.0000% {
            opacity:1
          }
          65.3125% {
            opacity:1
          }
          65.6250% {
            opacity:1
          }
          65.9375% {
            opacity:1
          }
          66.2500% {
            opacity:1
          }
          66.5625% {
            opacity:1
          }
          66.8750% {
            opacity:1
          }
          67.1875% {
            opacity:1
          }
          67.5000% {
            opacity:1
          }
          67.8125% {
            opacity:1
          }
          68.1250% {
            opacity:1
          }
          68.4375% {
            opacity:1
          }
          68.7500% {
            opacity:1
          }
          69.0625% {
            opacity:1
          }
          69.3750% {
            opacity:1
          }
          69.6875% {
            opacity:1
          }
          70.0000% {
            opacity:1
          }
          70.3125% {
            opacity:1
          }
          70.6250% {
            opacity:1
          }
          70.9375% {
            opacity:1
          }
          71.2500% {
            opacity:1
          }
          71.5625% {
            opacity:1
          }
          71.8750% {
            opacity:1
          }
          72.1875% {
            opacity:1
          }
          72.5000% {
            opacity:1
          }
          72.8125% {
            opacity:1
          }
          73.1250% {
            opacity:1
          }
          73.4375% {
            opacity:1
          }
          73.7500% {
            opacity:1
          }
          74.0625% {
            opacity:1
          }
          74.3750% {
            opacity:1
          }
          74.6875% {
            opacity:1
          }
          75.0000% {
            opacity:1
          }
          75.3125% {
            opacity:1.0
          }
          75.6250% {
            opacity:0.998
          }
          75.9375% {
            opacity:0.996
          }
          76.2500% {
            opacity:0.993
          }
          76.5625% {
            opacity:0.989
          }
          76.8750% {
            opacity:0.984
          }
          77.1875% {
            opacity:0.978
          }
          77.5000% {
            opacity:0.972
          }
          77.8125% {
            opacity:0.965
          }
          78.1250% {
            opacity:0.957
          }
          78.4375% {
            opacity:0.948
          }
          78.7500% {
            opacity:0.939
          }
          79.0625% {
            opacity:0.929
          }
          79.3750% {
            opacity:0.919
          }
          79.6875% {
            opacity:0.908
          }
          80.0000% {
            opacity:0.896
          }
          80.3125% {
            opacity:0.884
          }
          80.6250% {
            opacity:0.871
          }
          80.9375% {
            opacity:0.858
          }
          81.2500% {
            opacity:0.844
          }
          81.5625% {
            opacity:0.829
          }
          81.8750% {
            opacity:0.815
          }
          82.1875% {
            opacity:0.8
          }
          82.5000% {
            opacity:0.784
          }
          82.8125% {
            opacity:0.768
          }
          83.1250% {
            opacity:0.752
          }
          83.4375% {
            opacity:0.735
          }
          83.7500% {
            opacity:0.718
          }
          84.0625% {
            opacity:0.701
          }
          84.3750% {
            opacity:0.684
          }
          84.6875% {
            opacity:0.666
          }
          85.0000% {
            opacity:0.648
          }
          85.3125% {
            opacity:0.63
          }
          85.6250% {
            opacity:0.612
          }
          85.9375% {
            opacity:0.593
          }
          86.2500% {
            opacity:0.575
          }
          86.5625% {
            opacity:0.556
          }
          86.8750% {
            opacity:0.537
          }
          87.1875% {
            opacity:0.519
          }
          87.5000% {
            opacity:0.5
          }
          87.8125% {
            opacity:0.481
          }
          88.1250% {
            opacity:0.463
          }
          88.4375% {
            opacity:0.444
          }
          88.7500% {
            opacity:0.425
          }
          89.0625% {
            opacity:0.407
          }
          89.3750% {
            opacity:0.388
          }
          89.6875% {
            opacity:0.37
          }
          90.0000% {
            opacity:0.352
          }
          90.3125% {
            opacity:0.334
          }
          90.6250% {
            opacity:0.316
          }
          90.9375% {
            opacity:0.299
          }
          91.2500% {
            opacity:0.282
          }
          91.5625% {
            opacity:0.265
          }
          91.8750% {
            opacity:0.248
          }
          92.1875% {
            opacity:0.232
          }
          92.5000% {
            opacity:0.216
          }
          92.8125% {
            opacity:0.2
          }
          93.1250% {
            opacity:0.185
          }
          93.4375% {
            opacity:0.171
          }
          93.7500% {
            opacity:0.156
          }
          94.0625% {
            opacity:0.142
          }
          94.3750% {
            opacity:0.129
          }
          94.6875% {
            opacity:0.116
          }
          95.0000% {
            opacity:0.104
          }
          95.3125% {
            opacity:0.092
          }
          95.6250% {
            opacity:0.081
          }
          95.9375% {
            opacity:0.071
          }
          96.2500% {
            opacity:0.061
          }
          96.5625% {
            opacity:0.052
          }
          96.8750% {
            opacity:0.043
          }
          97.1875% {
            opacity:0.035
          }
          97.5000% {
            opacity:0.028
          }
          97.8125% {
            opacity:0.022
          }
          98.1250% {
            opacity:0.016
          }
          98.4375% {
            opacity:0.011
          }
          98.7500% {
            opacity:0.007
          }
          99.0625% {
            opacity:0.004
          }
          99.3750% {
            opacity:0.002
          }
          99.6875% {
            opacity:0.0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes overturn-fleck-0 {
          0.0000% {
            transform:translate(70px,44px);
            opacity:0
          }
          0.3125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          0.6250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          0.9375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          1.2500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          1.5625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          1.8750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          2.1875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          2.5000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          2.8125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          3.1250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          3.4375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          3.7500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          4.0625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          4.3750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          4.6875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          5.0000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          5.3125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          5.6250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          5.9375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          6.2500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          6.5625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          6.8750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          7.1875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          7.5000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          7.8125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          8.1250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          8.4375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          8.7500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          9.0625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          9.3750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          9.6875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          10.0000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          10.3125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          10.6250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          10.9375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          11.2500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          11.5625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          11.8750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          12.1875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          12.5000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          12.8125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          13.1250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          13.4375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          13.7500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          14.0625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          14.3750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          14.6875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          15.0000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          15.3125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          15.6250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          15.9375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          16.2500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          16.5625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          16.8750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          17.1875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          17.5000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          17.8125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          18.1250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          18.4375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          18.7500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          19.0625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          19.3750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          19.6875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          20.0000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          20.3125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          20.6250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          20.9375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          21.2500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          21.5625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          21.8750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          22.1875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          22.5000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          22.8125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          23.1250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          23.4375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          23.7500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          24.0625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          24.3750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          24.6875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          25.0000% {
            transform:translate(118px,79px);
            opacity:0
          }
          25.3125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          25.6250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          25.9375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          26.2500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          26.5625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          26.8750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          27.1875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          27.5000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          27.8125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          28.1250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          28.4375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          28.7500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          29.0625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          29.3750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          29.6875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          30.0000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          30.3125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          30.6250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          30.9375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          31.2500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          31.5625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          31.8750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          32.1875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          32.5000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          32.8125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          33.1250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          33.4375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          33.7500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          34.0625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          34.3750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          34.6875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          35.0000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          35.3125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          35.6250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          35.9375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          36.2500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          36.5625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          36.8750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          37.1875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          37.5000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          37.8125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          38.1250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          38.4375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          38.7500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          39.0625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          39.3750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          39.6875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          40.0000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          40.3125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          40.6250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          40.9375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          41.2500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          41.5625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          41.8750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          42.1875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          42.5000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          42.8125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          43.1250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          43.4375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          43.7500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          44.0625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          44.3750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          44.6875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          45.0000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          45.3125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          45.6250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          45.9375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          46.2500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          46.5625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          46.8750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          47.1875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          47.5000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          47.8125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          48.1250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          48.4375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          48.7500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          49.0625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          49.3750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          49.6875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          50.0000% {
            transform:translate(70px,109px);
            opacity:0
          }
          50.3125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          50.6250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          50.9375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          51.2500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          51.5625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          51.8750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          52.1875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          52.5000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          52.8125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          53.1250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          53.4375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          53.7500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          54.0625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          54.3750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          54.6875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          55.0000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          55.3125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          55.6250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          55.9375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          56.2500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          56.5625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          56.8750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          57.1875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          57.5000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          57.8125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          58.1250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          58.4375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          58.7500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          59.0625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          59.3750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          59.6875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          60.0000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          60.3125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          60.6250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          60.9375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          61.2500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          61.5625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          61.8750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          62.1875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          62.5000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          62.8125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          63.1250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          63.4375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          63.7500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          64.0625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          64.3750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          64.6875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          65.0000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          65.3125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          65.6250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          65.9375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          66.2500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          66.5625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          66.8750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          67.1875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          67.5000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          67.8125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          68.1250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          68.4375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          68.7500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          69.0625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          69.3750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          69.6875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          70.0000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          70.3125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          70.6250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          70.9375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          71.2500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          71.5625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          71.8750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          72.1875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          72.5000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          72.8125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          73.1250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          73.4375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          73.7500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          74.0625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          74.3750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          74.6875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          75.0000% {
            transform:translate(22px,79px);
            opacity:0
          }
          75.3125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          75.6250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          75.9375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          76.2500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          76.5625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          76.8750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          77.1875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          77.5000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          77.8125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          78.1250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          78.4375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          78.7500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          79.0625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          79.3750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          79.6875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          80.0000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          80.3125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          80.6250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          80.9375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          81.2500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          81.5625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          81.8750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          82.1875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          82.5000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          82.8125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          83.1250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          83.4375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          83.7500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          84.0625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          84.3750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          84.6875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          85.0000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          85.3125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          85.6250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          85.9375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          86.2500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          86.5625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          86.8750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          87.1875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          87.5000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          87.8125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          88.1250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          88.4375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          88.7500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          89.0625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          89.3750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          89.6875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          90.0000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          90.3125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          90.6250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          90.9375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          91.2500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          91.5625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          91.8750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          92.1875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          92.5000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          92.8125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          93.1250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          93.4375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          93.7500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          94.0625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          94.3750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          94.6875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          95.0000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          95.3125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          95.6250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          95.9375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          96.2500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          96.5625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          96.8750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          97.1875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          97.5000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          97.8125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          98.1250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          98.4375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          98.7500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          99.0625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          99.3750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          99.6875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          100.0000% {
            transform:translate(70px,44px);
            opacity:0
          }
        }
        .parcel-1 {
          animation:overturn-parcel-1 16s linear infinite
        }
        .color-1 {
          animation:overturn-color-1 16s linear infinite
        }
        .mark-1 {
          animation:overturn-mark-1 16s linear infinite
        }
        .fleck-1 {
          animation:overturn-fleck-1 16s linear infinite
        }
        @keyframes overturn-parcel-1 {
          0.0000% {
            transform:translate(103.941px,57.787px)
          }
          0.3125% {
            transform:translate(104.601px,58.207px)
          }
          0.6250% {
            transform:translate(105.247px,58.636px)
          }
          0.9375% {
            transform:translate(105.88px,59.072px)
          }
          1.2500% {
            transform:translate(106.499px,59.517px)
          }
          1.5625% {
            transform:translate(107.105px,59.968px)
          }
          1.8750% {
            transform:translate(107.695px,60.427px)
          }
          2.1875% {
            transform:translate(108.271px,60.893px)
          }
          2.5000% {
            transform:translate(108.833px,61.366px)
          }
          2.8125% {
            transform:translate(109.379px,61.846px)
          }
          3.1250% {
            transform:translate(109.911px,62.333px)
          }
          3.4375% {
            transform:translate(110.426px,62.826px)
          }
          3.7500% {
            transform:translate(110.927px,63.325px)
          }
          4.0625% {
            transform:translate(111.411px,63.83px)
          }
          4.3750% {
            transform:translate(111.88px,64.341px)
          }
          4.6875% {
            transform:translate(112.332px,64.858px)
          }
          5.0000% {
            transform:translate(112.768px,65.38px)
          }
          5.3125% {
            transform:translate(113.188px,65.908px)
          }
          5.6250% {
            transform:translate(113.591px,66.44px)
          }
          5.9375% {
            transform:translate(113.977px,66.978px)
          }
          6.2500% {
            transform:translate(114.346px,67.519px)
          }
          6.5625% {
            transform:translate(114.698px,68.066px)
          }
          6.8750% {
            transform:translate(115.033px,68.616px)
          }
          7.1875% {
            transform:translate(115.351px,69.171px)
          }
          7.5000% {
            transform:translate(115.651px,69.729px)
          }
          7.8125% {
            transform:translate(115.933px,70.291px)
          }
          8.1250% {
            transform:translate(116.198px,70.857px)
          }
          8.4375% {
            transform:translate(116.445px,71.425px)
          }
          8.7500% {
            transform:translate(116.674px,71.997px)
          }
          9.0625% {
            transform:translate(116.885px,72.571px)
          }
          9.3750% {
            transform:translate(117.078px,73.147px)
          }
          9.6875% {
            transform:translate(117.252px,73.726px)
          }
          10.0000% {
            transform:translate(117.409px,74.307px)
          }
          10.3125% {
            transform:translate(117.547px,74.89px)
          }
          10.6250% {
            transform:translate(117.667px,75.474px)
          }
          10.9375% {
            transform:translate(117.769px,76.059px)
          }
          11.2500% {
            transform:translate(117.852px,76.646px)
          }
          11.5625% {
            transform:translate(117.917px,77.234px)
          }
          11.8750% {
            transform:translate(117.963px,77.822px)
          }
          12.1875% {
            transform:translate(117.991px,78.411px)
          }
          12.5000% {
            transform:translate(118px,79px)
          }
          12.8125% {
            transform:translate(117.991px,79.589px)
          }
          13.1250% {
            transform:translate(117.963px,80.178px)
          }
          13.4375% {
            transform:translate(117.917px,80.766px)
          }
          13.7500% {
            transform:translate(117.852px,81.354px)
          }
          14.0625% {
            transform:translate(117.769px,81.941px)
          }
          14.3750% {
            transform:translate(117.667px,82.526px)
          }
          14.6875% {
            transform:translate(117.547px,83.11px)
          }
          15.0000% {
            transform:translate(117.409px,83.693px)
          }
          15.3125% {
            transform:translate(117.252px,84.274px)
          }
          15.6250% {
            transform:translate(117.078px,84.853px)
          }
          15.9375% {
            transform:translate(116.885px,85.429px)
          }
          16.2500% {
            transform:translate(116.674px,86.003px)
          }
          16.5625% {
            transform:translate(116.445px,86.575px)
          }
          16.8750% {
            transform:translate(116.198px,87.143px)
          }
          17.1875% {
            transform:translate(115.933px,87.709px)
          }
          17.5000% {
            transform:translate(115.651px,88.271px)
          }
          17.8125% {
            transform:translate(115.351px,88.829px)
          }
          18.1250% {
            transform:translate(115.033px,89.384px)
          }
          18.4375% {
            transform:translate(114.698px,89.934px)
          }
          18.7500% {
            transform:translate(114.346px,90.481px)
          }
          19.0625% {
            transform:translate(113.977px,91.022px)
          }
          19.3750% {
            transform:translate(113.591px,91.56px)
          }
          19.6875% {
            transform:translate(113.188px,92.092px)
          }
          20.0000% {
            transform:translate(112.768px,92.62px)
          }
          20.3125% {
            transform:translate(112.332px,93.142px)
          }
          20.6250% {
            transform:translate(111.88px,93.659px)
          }
          20.9375% {
            transform:translate(111.411px,94.17px)
          }
          21.2500% {
            transform:translate(110.927px,94.675px)
          }
          21.5625% {
            transform:translate(110.426px,95.174px)
          }
          21.8750% {
            transform:translate(109.911px,95.667px)
          }
          22.1875% {
            transform:translate(109.379px,96.154px)
          }
          22.5000% {
            transform:translate(108.833px,96.634px)
          }
          22.8125% {
            transform:translate(108.271px,97.107px)
          }
          23.1250% {
            transform:translate(107.695px,97.573px)
          }
          23.4375% {
            transform:translate(107.105px,98.032px)
          }
          23.7500% {
            transform:translate(106.499px,98.483px)
          }
          24.0625% {
            transform:translate(105.88px,98.928px)
          }
          24.3750% {
            transform:translate(105.247px,99.364px)
          }
          24.6875% {
            transform:translate(104.601px,99.793px)
          }
          25.0000% {
            transform:translate(103.941px,100.213px)
          }
          25.3125% {
            transform:translate(103.268px,100.626px)
          }
          25.6250% {
            transform:translate(102.582px,101.03px)
          }
          25.9375% {
            transform:translate(101.884px,101.425px)
          }
          26.2500% {
            transform:translate(101.174px,101.812px)
          }
          26.5625% {
            transform:translate(100.451px,102.19px)
          }
          26.8750% {
            transform:translate(99.717px,102.56px)
          }
          27.1875% {
            transform:translate(98.971px,102.92px)
          }
          27.5000% {
            transform:translate(98.214px,103.271px)
          }
          27.8125% {
            transform:translate(97.446px,103.612px)
          }
          28.1250% {
            transform:translate(96.667px,103.944px)
          }
          28.4375% {
            transform:translate(95.879px,104.267px)
          }
          28.7500% {
            transform:translate(95.08px,104.579px)
          }
          29.0625% {
            transform:translate(94.272px,104.882px)
          }
          29.3750% {
            transform:translate(93.454px,105.175px)
          }
          29.6875% {
            transform:translate(92.627px,105.458px)
          }
          30.0000% {
            transform:translate(91.792px,105.73px)
          }
          30.3125% {
            transform:translate(90.948px,105.992px)
          }
          30.6250% {
            transform:translate(90.096px,106.244px)
          }
          30.9375% {
            transform:translate(89.236px,106.486px)
          }
          31.2500% {
            transform:translate(88.369px,106.716px)
          }
          31.5625% {
            transform:translate(87.495px,106.936px)
          }
          31.8750% {
            transform:translate(86.614px,107.146px)
          }
          32.1875% {
            transform:translate(85.726px,107.344px)
          }
          32.5000% {
            transform:translate(84.833px,107.532px)
          }
          32.8125% {
            transform:translate(83.934px,107.708px)
          }
          33.1250% {
            transform:translate(83.029px,107.874px)
          }
          33.4375% {
            transform:translate(82.12px,108.028px)
          }
          33.7500% {
            transform:translate(81.205px,108.171px)
          }
          34.0625% {
            transform:translate(80.287px,108.303px)
          }
          34.3750% {
            transform:translate(79.364px,108.424px)
          }
          34.6875% {
            transform:translate(78.438px,108.533px)
          }
          35.0000% {
            transform:translate(77.509px,108.631px)
          }
          35.3125% {
            transform:translate(76.577px,108.717px)
          }
          35.6250% {
            transform:translate(75.642px,108.792px)
          }
          35.9375% {
            transform:translate(74.705px,108.856px)
          }
          36.2500% {
            transform:translate(73.766px,108.908px)
          }
          36.5625% {
            transform:translate(72.826px,108.948px)
          }
          36.8750% {
            transform:translate(71.884px,108.977px)
          }
          37.1875% {
            transform:translate(70.942px,108.994px)
          }
          37.5000% {
            transform:translate(70px,109px)
          }
          37.8125% {
            transform:translate(69.058px,108.994px)
          }
          38.1250% {
            transform:translate(68.116px,108.977px)
          }
          38.4375% {
            transform:translate(67.174px,108.948px)
          }
          38.7500% {
            transform:translate(66.234px,108.908px)
          }
          39.0625% {
            transform:translate(65.295px,108.856px)
          }
          39.3750% {
            transform:translate(64.358px,108.792px)
          }
          39.6875% {
            transform:translate(63.423px,108.717px)
          }
          40.0000% {
            transform:translate(62.491px,108.631px)
          }
          40.3125% {
            transform:translate(61.562px,108.533px)
          }
          40.6250% {
            transform:translate(60.636px,108.424px)
          }
          40.9375% {
            transform:translate(59.713px,108.303px)
          }
          41.2500% {
            transform:translate(58.795px,108.171px)
          }
          41.5625% {
            transform:translate(57.88px,108.028px)
          }
          41.8750% {
            transform:translate(56.971px,107.874px)
          }
          42.1875% {
            transform:translate(56.066px,107.708px)
          }
          42.5000% {
            transform:translate(55.167px,107.532px)
          }
          42.8125% {
            transform:translate(54.274px,107.344px)
          }
          43.1250% {
            transform:translate(53.386px,107.146px)
          }
          43.4375% {
            transform:translate(52.505px,106.936px)
          }
          43.7500% {
            transform:translate(51.631px,106.716px)
          }
          44.0625% {
            transform:translate(50.764px,106.486px)
          }
          44.3750% {
            transform:translate(49.904px,106.244px)
          }
          44.6875% {
            transform:translate(49.052px,105.992px)
          }
          45.0000% {
            transform:translate(48.208px,105.73px)
          }
          45.3125% {
            transform:translate(47.373px,105.458px)
          }
          45.6250% {
            transform:translate(46.546px,105.175px)
          }
          45.9375% {
            transform:translate(45.728px,104.882px)
          }
          46.2500% {
            transform:translate(44.92px,104.579px)
          }
          46.5625% {
            transform:translate(44.121px,104.267px)
          }
          46.8750% {
            transform:translate(43.333px,103.944px)
          }
          47.1875% {
            transform:translate(42.554px,103.612px)
          }
          47.5000% {
            transform:translate(41.786px,103.271px)
          }
          47.8125% {
            transform:translate(41.029px,102.92px)
          }
          48.1250% {
            transform:translate(40.283px,102.56px)
          }
          48.4375% {
            transform:translate(39.549px,102.19px)
          }
          48.7500% {
            transform:translate(38.826px,101.812px)
          }
          49.0625% {
            transform:translate(38.116px,101.425px)
          }
          49.3750% {
            transform:translate(37.418px,101.03px)
          }
          49.6875% {
            transform:translate(36.732px,100.626px)
          }
          50.0000% {
            transform:translate(36.059px,100.213px)
          }
          50.3125% {
            transform:translate(35.399px,99.793px)
          }
          50.6250% {
            transform:translate(34.753px,99.364px)
          }
          50.9375% {
            transform:translate(34.12px,98.928px)
          }
          51.2500% {
            transform:translate(33.501px,98.483px)
          }
          51.5625% {
            transform:translate(32.895px,98.032px)
          }
          51.8750% {
            transform:translate(32.305px,97.573px)
          }
          52.1875% {
            transform:translate(31.729px,97.107px)
          }
          52.5000% {
            transform:translate(31.167px,96.634px)
          }
          52.8125% {
            transform:translate(30.621px,96.154px)
          }
          53.1250% {
            transform:translate(30.089px,95.667px)
          }
          53.4375% {
            transform:translate(29.574px,95.174px)
          }
          53.7500% {
            transform:translate(29.073px,94.675px)
          }
          54.0625% {
            transform:translate(28.589px,94.17px)
          }
          54.3750% {
            transform:translate(28.12px,93.659px)
          }
          54.6875% {
            transform:translate(27.668px,93.142px)
          }
          55.0000% {
            transform:translate(27.232px,92.62px)
          }
          55.3125% {
            transform:translate(26.812px,92.092px)
          }
          55.6250% {
            transform:translate(26.409px,91.56px)
          }
          55.9375% {
            transform:translate(26.023px,91.022px)
          }
          56.2500% {
            transform:translate(25.654px,90.481px)
          }
          56.5625% {
            transform:translate(25.302px,89.934px)
          }
          56.8750% {
            transform:translate(24.967px,89.384px)
          }
          57.1875% {
            transform:translate(24.649px,88.829px)
          }
          57.5000% {
            transform:translate(24.349px,88.271px)
          }
          57.8125% {
            transform:translate(24.067px,87.709px)
          }
          58.1250% {
            transform:translate(23.802px,87.143px)
          }
          58.4375% {
            transform:translate(23.555px,86.575px)
          }
          58.7500% {
            transform:translate(23.326px,86.003px)
          }
          59.0625% {
            transform:translate(23.115px,85.429px)
          }
          59.3750% {
            transform:translate(22.922px,84.853px)
          }
          59.6875% {
            transform:translate(22.748px,84.274px)
          }
          60.0000% {
            transform:translate(22.591px,83.693px)
          }
          60.3125% {
            transform:translate(22.453px,83.11px)
          }
          60.6250% {
            transform:translate(22.333px,82.526px)
          }
          60.9375% {
            transform:translate(22.231px,81.941px)
          }
          61.2500% {
            transform:translate(22.148px,81.354px)
          }
          61.5625% {
            transform:translate(22.083px,80.766px)
          }
          61.8750% {
            transform:translate(22.037px,80.178px)
          }
          62.1875% {
            transform:translate(22.009px,79.589px)
          }
          62.5000% {
            transform:translate(22px,79px)
          }
          62.8125% {
            transform:translate(22.009px,78.411px)
          }
          63.1250% {
            transform:translate(22.037px,77.822px)
          }
          63.4375% {
            transform:translate(22.083px,77.234px)
          }
          63.7500% {
            transform:translate(22.148px,76.646px)
          }
          64.0625% {
            transform:translate(22.231px,76.059px)
          }
          64.3750% {
            transform:translate(22.333px,75.474px)
          }
          64.6875% {
            transform:translate(22.453px,74.89px)
          }
          65.0000% {
            transform:translate(22.591px,74.307px)
          }
          65.3125% {
            transform:translate(22.748px,73.726px)
          }
          65.6250% {
            transform:translate(22.922px,73.147px)
          }
          65.9375% {
            transform:translate(23.115px,72.571px)
          }
          66.2500% {
            transform:translate(23.326px,71.997px)
          }
          66.5625% {
            transform:translate(23.555px,71.425px)
          }
          66.8750% {
            transform:translate(23.802px,70.857px)
          }
          67.1875% {
            transform:translate(24.067px,70.291px)
          }
          67.5000% {
            transform:translate(24.349px,69.729px)
          }
          67.8125% {
            transform:translate(24.649px,69.171px)
          }
          68.1250% {
            transform:translate(24.967px,68.616px)
          }
          68.4375% {
            transform:translate(25.302px,68.066px)
          }
          68.7500% {
            transform:translate(25.654px,67.519px)
          }
          69.0625% {
            transform:translate(26.023px,66.978px)
          }
          69.3750% {
            transform:translate(26.409px,66.44px)
          }
          69.6875% {
            transform:translate(26.812px,65.908px)
          }
          70.0000% {
            transform:translate(27.232px,65.38px)
          }
          70.3125% {
            transform:translate(27.668px,64.858px)
          }
          70.6250% {
            transform:translate(28.12px,64.341px)
          }
          70.9375% {
            transform:translate(28.589px,63.83px)
          }
          71.2500% {
            transform:translate(29.073px,63.325px)
          }
          71.5625% {
            transform:translate(29.574px,62.826px)
          }
          71.8750% {
            transform:translate(30.089px,62.333px)
          }
          72.1875% {
            transform:translate(30.621px,61.846px)
          }
          72.5000% {
            transform:translate(31.167px,61.366px)
          }
          72.8125% {
            transform:translate(31.729px,60.893px)
          }
          73.1250% {
            transform:translate(32.305px,60.427px)
          }
          73.4375% {
            transform:translate(32.895px,59.968px)
          }
          73.7500% {
            transform:translate(33.501px,59.517px)
          }
          74.0625% {
            transform:translate(34.12px,59.072px)
          }
          74.3750% {
            transform:translate(34.753px,58.636px)
          }
          74.6875% {
            transform:translate(35.399px,58.207px)
          }
          75.0000% {
            transform:translate(36.059px,57.787px)
          }
          75.3125% {
            transform:translate(36.732px,57.374px)
          }
          75.6250% {
            transform:translate(37.418px,56.97px)
          }
          75.9375% {
            transform:translate(38.116px,56.575px)
          }
          76.2500% {
            transform:translate(38.826px,56.188px)
          }
          76.5625% {
            transform:translate(39.549px,55.81px)
          }
          76.8750% {
            transform:translate(40.283px,55.44px)
          }
          77.1875% {
            transform:translate(41.029px,55.08px)
          }
          77.5000% {
            transform:translate(41.786px,54.729px)
          }
          77.8125% {
            transform:translate(42.554px,54.388px)
          }
          78.1250% {
            transform:translate(43.333px,54.056px)
          }
          78.4375% {
            transform:translate(44.121px,53.733px)
          }
          78.7500% {
            transform:translate(44.92px,53.421px)
          }
          79.0625% {
            transform:translate(45.728px,53.118px)
          }
          79.3750% {
            transform:translate(46.546px,52.825px)
          }
          79.6875% {
            transform:translate(47.373px,52.542px)
          }
          80.0000% {
            transform:translate(48.208px,52.27px)
          }
          80.3125% {
            transform:translate(49.052px,52.008px)
          }
          80.6250% {
            transform:translate(49.904px,51.756px)
          }
          80.9375% {
            transform:translate(50.764px,51.514px)
          }
          81.2500% {
            transform:translate(51.631px,51.284px)
          }
          81.5625% {
            transform:translate(52.505px,51.064px)
          }
          81.8750% {
            transform:translate(53.386px,50.854px)
          }
          82.1875% {
            transform:translate(54.274px,50.656px)
          }
          82.5000% {
            transform:translate(55.167px,50.468px)
          }
          82.8125% {
            transform:translate(56.066px,50.292px)
          }
          83.1250% {
            transform:translate(56.971px,50.126px)
          }
          83.4375% {
            transform:translate(57.88px,49.972px)
          }
          83.7500% {
            transform:translate(58.795px,49.829px)
          }
          84.0625% {
            transform:translate(59.713px,49.697px)
          }
          84.3750% {
            transform:translate(60.636px,49.576px)
          }
          84.6875% {
            transform:translate(61.562px,49.467px)
          }
          85.0000% {
            transform:translate(62.491px,49.369px)
          }
          85.3125% {
            transform:translate(63.423px,49.283px)
          }
          85.6250% {
            transform:translate(64.358px,49.208px)
          }
          85.9375% {
            transform:translate(65.295px,49.144px)
          }
          86.2500% {
            transform:translate(66.234px,49.092px)
          }
          86.5625% {
            transform:translate(67.174px,49.052px)
          }
          86.8750% {
            transform:translate(68.116px,49.023px)
          }
          87.1875% {
            transform:translate(69.058px,49.006px)
          }
          87.5000% {
            transform:translate(70px,49px)
          }
          87.8125% {
            transform:translate(70.942px,49.006px)
          }
          88.1250% {
            transform:translate(71.884px,49.023px)
          }
          88.4375% {
            transform:translate(72.826px,49.052px)
          }
          88.7500% {
            transform:translate(73.766px,49.092px)
          }
          89.0625% {
            transform:translate(74.705px,49.144px)
          }
          89.3750% {
            transform:translate(75.642px,49.208px)
          }
          89.6875% {
            transform:translate(76.577px,49.283px)
          }
          90.0000% {
            transform:translate(77.509px,49.369px)
          }
          90.3125% {
            transform:translate(78.438px,49.467px)
          }
          90.6250% {
            transform:translate(79.364px,49.576px)
          }
          90.9375% {
            transform:translate(80.287px,49.697px)
          }
          91.2500% {
            transform:translate(81.205px,49.829px)
          }
          91.5625% {
            transform:translate(82.12px,49.972px)
          }
          91.8750% {
            transform:translate(83.029px,50.126px)
          }
          92.1875% {
            transform:translate(83.934px,50.292px)
          }
          92.5000% {
            transform:translate(84.833px,50.468px)
          }
          92.8125% {
            transform:translate(85.726px,50.656px)
          }
          93.1250% {
            transform:translate(86.614px,50.854px)
          }
          93.4375% {
            transform:translate(87.495px,51.064px)
          }
          93.7500% {
            transform:translate(88.369px,51.284px)
          }
          94.0625% {
            transform:translate(89.236px,51.514px)
          }
          94.3750% {
            transform:translate(90.096px,51.756px)
          }
          94.6875% {
            transform:translate(90.948px,52.008px)
          }
          95.0000% {
            transform:translate(91.792px,52.27px)
          }
          95.3125% {
            transform:translate(92.627px,52.542px)
          }
          95.6250% {
            transform:translate(93.454px,52.825px)
          }
          95.9375% {
            transform:translate(94.272px,53.118px)
          }
          96.2500% {
            transform:translate(95.08px,53.421px)
          }
          96.5625% {
            transform:translate(95.879px,53.733px)
          }
          96.8750% {
            transform:translate(96.667px,54.056px)
          }
          97.1875% {
            transform:translate(97.446px,54.388px)
          }
          97.5000% {
            transform:translate(98.214px,54.729px)
          }
          97.8125% {
            transform:translate(98.971px,55.08px)
          }
          98.1250% {
            transform:translate(99.717px,55.44px)
          }
          98.4375% {
            transform:translate(100.451px,55.81px)
          }
          98.7500% {
            transform:translate(101.174px,56.188px)
          }
          99.0625% {
            transform:translate(101.884px,56.575px)
          }
          99.3750% {
            transform:translate(102.582px,56.97px)
          }
          99.6875% {
            transform:translate(103.268px,57.374px)
          }
          100.0000% {
            transform:translate(103.941px,57.787px)
          }
        }
        @keyframes overturn-color-1 {
          0.0000% {
            fill:rgb(224 201 138)
          }
          0.3125% {
            fill:rgb(221 201 140)
          }
          0.6250% {
            fill:rgb(218 201 143)
          }
          0.9375% {
            fill:rgb(215 201 146)
          }
          1.2500% {
            fill:rgb(212 201 149)
          }
          1.5625% {
            fill:rgb(209 201 152)
          }
          1.8750% {
            fill:rgb(206 201 155)
          }
          2.1875% {
            fill:rgb(203 201 158)
          }
          2.5000% {
            fill:rgb(199 201 161)
          }
          2.8125% {
            fill:rgb(196 201 165)
          }
          3.1250% {
            fill:rgb(193 201 168)
          }
          3.4375% {
            fill:rgb(189 201 171)
          }
          3.7500% {
            fill:rgb(186 201 175)
          }
          4.0625% {
            fill:rgb(182 201 178)
          }
          4.3750% {
            fill:rgb(179 201 181)
          }
          4.6875% {
            fill:rgb(175 201 185)
          }
          5.0000% {
            fill:rgb(172 201 188)
          }
          5.3125% {
            fill:rgb(168 201 191)
          }
          5.6250% {
            fill:rgb(165 201 195)
          }
          5.9375% {
            fill:rgb(162 201 198)
          }
          6.2500% {
            fill:rgb(158 201 201)
          }
          6.5625% {
            fill:rgb(155 201 204)
          }
          6.8750% {
            fill:rgb(152 201 207)
          }
          7.1875% {
            fill:rgb(149 201 210)
          }
          7.5000% {
            fill:rgb(146 201 213)
          }
          7.8125% {
            fill:rgb(143 201 216)
          }
          8.1250% {
            fill:rgb(140 201 219)
          }
          8.4375% {
            fill:rgb(138 201 221)
          }
          8.7500% {
            fill:rgb(135 201 224)
          }
          9.0625% {
            fill:rgb(133 201 226)
          }
          9.3750% {
            fill:rgb(130 201 228)
          }
          9.6875% {
            fill:rgb(128 201 230)
          }
          10.0000% {
            fill:rgb(127 201 232)
          }
          10.3125% {
            fill:rgb(125 201 233)
          }
          10.6250% {
            fill:rgb(123 201 235)
          }
          10.9375% {
            fill:rgb(122 201 236)
          }
          11.2500% {
            fill:rgb(121 201 237)
          }
          11.5625% {
            fill:rgb(120 201 238)
          }
          11.8750% {
            fill:rgb(120 201 239)
          }
          12.1875% {
            fill:rgb(119 201 239)
          }
          12.5000% {
            fill:rgb(119 201 239)
          }
          12.8125% {
            fill:rgb(119 201 239)
          }
          13.1250% {
            fill:rgb(119 201 239)
          }
          13.4375% {
            fill:rgb(119 201 239)
          }
          13.7500% {
            fill:rgb(119 201 239)
          }
          14.0625% {
            fill:rgb(119 201 239)
          }
          14.3750% {
            fill:rgb(119 201 239)
          }
          14.6875% {
            fill:rgb(119 201 239)
          }
          15.0000% {
            fill:rgb(119 201 239)
          }
          15.3125% {
            fill:rgb(119 201 239)
          }
          15.6250% {
            fill:rgb(119 201 239)
          }
          15.9375% {
            fill:rgb(119 201 239)
          }
          16.2500% {
            fill:rgb(119 201 239)
          }
          16.5625% {
            fill:rgb(119 201 239)
          }
          16.8750% {
            fill:rgb(119 201 239)
          }
          17.1875% {
            fill:rgb(119 201 239)
          }
          17.5000% {
            fill:rgb(119 201 239)
          }
          17.8125% {
            fill:rgb(119 201 239)
          }
          18.1250% {
            fill:rgb(119 201 239)
          }
          18.4375% {
            fill:rgb(119 201 239)
          }
          18.7500% {
            fill:rgb(119 201 239)
          }
          19.0625% {
            fill:rgb(119 201 239)
          }
          19.3750% {
            fill:rgb(119 201 239)
          }
          19.6875% {
            fill:rgb(119 201 239)
          }
          20.0000% {
            fill:rgb(119 201 239)
          }
          20.3125% {
            fill:rgb(119 201 239)
          }
          20.6250% {
            fill:rgb(119 201 239)
          }
          20.9375% {
            fill:rgb(119 201 239)
          }
          21.2500% {
            fill:rgb(119 201 239)
          }
          21.5625% {
            fill:rgb(119 201 239)
          }
          21.8750% {
            fill:rgb(119 201 239)
          }
          22.1875% {
            fill:rgb(119 201 239)
          }
          22.5000% {
            fill:rgb(119 201 239)
          }
          22.8125% {
            fill:rgb(119 201 239)
          }
          23.1250% {
            fill:rgb(119 201 239)
          }
          23.4375% {
            fill:rgb(119 201 239)
          }
          23.7500% {
            fill:rgb(119 201 239)
          }
          24.0625% {
            fill:rgb(119 201 239)
          }
          24.3750% {
            fill:rgb(119 201 239)
          }
          24.6875% {
            fill:rgb(119 201 239)
          }
          25.0000% {
            fill:rgb(119 201 239)
          }
          25.3125% {
            fill:rgb(119 201 239)
          }
          25.6250% {
            fill:rgb(119 201 239)
          }
          25.9375% {
            fill:rgb(119 201 239)
          }
          26.2500% {
            fill:rgb(119 201 239)
          }
          26.5625% {
            fill:rgb(119 201 239)
          }
          26.8750% {
            fill:rgb(119 201 239)
          }
          27.1875% {
            fill:rgb(119 201 239)
          }
          27.5000% {
            fill:rgb(119 201 239)
          }
          27.8125% {
            fill:rgb(119 201 239)
          }
          28.1250% {
            fill:rgb(119 201 239)
          }
          28.4375% {
            fill:rgb(119 201 239)
          }
          28.7500% {
            fill:rgb(119 201 239)
          }
          29.0625% {
            fill:rgb(119 201 239)
          }
          29.3750% {
            fill:rgb(119 201 239)
          }
          29.6875% {
            fill:rgb(119 201 239)
          }
          30.0000% {
            fill:rgb(119 201 239)
          }
          30.3125% {
            fill:rgb(119 201 239)
          }
          30.6250% {
            fill:rgb(119 201 239)
          }
          30.9375% {
            fill:rgb(119 201 239)
          }
          31.2500% {
            fill:rgb(119 201 239)
          }
          31.5625% {
            fill:rgb(119 201 239)
          }
          31.8750% {
            fill:rgb(119 201 239)
          }
          32.1875% {
            fill:rgb(119 201 239)
          }
          32.5000% {
            fill:rgb(119 201 239)
          }
          32.8125% {
            fill:rgb(119 201 239)
          }
          33.1250% {
            fill:rgb(119 201 239)
          }
          33.4375% {
            fill:rgb(119 201 239)
          }
          33.7500% {
            fill:rgb(119 201 239)
          }
          34.0625% {
            fill:rgb(119 201 239)
          }
          34.3750% {
            fill:rgb(119 201 239)
          }
          34.6875% {
            fill:rgb(119 201 239)
          }
          35.0000% {
            fill:rgb(119 201 239)
          }
          35.3125% {
            fill:rgb(119 201 239)
          }
          35.6250% {
            fill:rgb(119 201 239)
          }
          35.9375% {
            fill:rgb(119 201 239)
          }
          36.2500% {
            fill:rgb(119 201 239)
          }
          36.5625% {
            fill:rgb(119 201 239)
          }
          36.8750% {
            fill:rgb(119 201 239)
          }
          37.1875% {
            fill:rgb(119 201 239)
          }
          37.5000% {
            fill:rgb(119 201 239)
          }
          37.8125% {
            fill:rgb(119 201 239)
          }
          38.1250% {
            fill:rgb(119 201 239)
          }
          38.4375% {
            fill:rgb(119 201 239)
          }
          38.7500% {
            fill:rgb(119 201 239)
          }
          39.0625% {
            fill:rgb(119 201 239)
          }
          39.3750% {
            fill:rgb(119 201 239)
          }
          39.6875% {
            fill:rgb(119 201 239)
          }
          40.0000% {
            fill:rgb(119 201 239)
          }
          40.3125% {
            fill:rgb(119 201 239)
          }
          40.6250% {
            fill:rgb(119 201 239)
          }
          40.9375% {
            fill:rgb(119 201 239)
          }
          41.2500% {
            fill:rgb(119 201 239)
          }
          41.5625% {
            fill:rgb(119 201 239)
          }
          41.8750% {
            fill:rgb(119 201 239)
          }
          42.1875% {
            fill:rgb(119 201 239)
          }
          42.5000% {
            fill:rgb(119 201 239)
          }
          42.8125% {
            fill:rgb(119 201 239)
          }
          43.1250% {
            fill:rgb(119 201 239)
          }
          43.4375% {
            fill:rgb(119 201 239)
          }
          43.7500% {
            fill:rgb(119 201 239)
          }
          44.0625% {
            fill:rgb(119 201 239)
          }
          44.3750% {
            fill:rgb(119 201 239)
          }
          44.6875% {
            fill:rgb(119 201 239)
          }
          45.0000% {
            fill:rgb(119 201 239)
          }
          45.3125% {
            fill:rgb(119 201 239)
          }
          45.6250% {
            fill:rgb(119 201 239)
          }
          45.9375% {
            fill:rgb(119 201 239)
          }
          46.2500% {
            fill:rgb(119 201 239)
          }
          46.5625% {
            fill:rgb(119 201 239)
          }
          46.8750% {
            fill:rgb(119 201 239)
          }
          47.1875% {
            fill:rgb(119 201 239)
          }
          47.5000% {
            fill:rgb(119 201 239)
          }
          47.8125% {
            fill:rgb(119 201 239)
          }
          48.1250% {
            fill:rgb(119 201 239)
          }
          48.4375% {
            fill:rgb(119 201 239)
          }
          48.7500% {
            fill:rgb(119 201 239)
          }
          49.0625% {
            fill:rgb(119 201 239)
          }
          49.3750% {
            fill:rgb(119 201 239)
          }
          49.6875% {
            fill:rgb(119 201 239)
          }
          50.0000% {
            fill:rgb(119 201 239)
          }
          50.3125% {
            fill:rgb(119 201 239)
          }
          50.6250% {
            fill:rgb(119 201 239)
          }
          50.9375% {
            fill:rgb(119 201 239)
          }
          51.2500% {
            fill:rgb(119 201 239)
          }
          51.5625% {
            fill:rgb(119 201 239)
          }
          51.8750% {
            fill:rgb(119 201 239)
          }
          52.1875% {
            fill:rgb(119 201 239)
          }
          52.5000% {
            fill:rgb(119 201 239)
          }
          52.8125% {
            fill:rgb(119 201 239)
          }
          53.1250% {
            fill:rgb(119 201 239)
          }
          53.4375% {
            fill:rgb(119 201 239)
          }
          53.7500% {
            fill:rgb(119 201 239)
          }
          54.0625% {
            fill:rgb(119 201 239)
          }
          54.3750% {
            fill:rgb(119 201 239)
          }
          54.6875% {
            fill:rgb(119 201 239)
          }
          55.0000% {
            fill:rgb(119 201 239)
          }
          55.3125% {
            fill:rgb(119 201 239)
          }
          55.6250% {
            fill:rgb(119 201 239)
          }
          55.9375% {
            fill:rgb(119 201 239)
          }
          56.2500% {
            fill:rgb(119 201 239)
          }
          56.5625% {
            fill:rgb(119 201 239)
          }
          56.8750% {
            fill:rgb(119 201 239)
          }
          57.1875% {
            fill:rgb(119 201 239)
          }
          57.5000% {
            fill:rgb(119 201 239)
          }
          57.8125% {
            fill:rgb(119 201 239)
          }
          58.1250% {
            fill:rgb(119 201 239)
          }
          58.4375% {
            fill:rgb(119 201 239)
          }
          58.7500% {
            fill:rgb(119 201 239)
          }
          59.0625% {
            fill:rgb(119 201 239)
          }
          59.3750% {
            fill:rgb(119 201 239)
          }
          59.6875% {
            fill:rgb(119 201 239)
          }
          60.0000% {
            fill:rgb(119 201 239)
          }
          60.3125% {
            fill:rgb(119 201 239)
          }
          60.6250% {
            fill:rgb(119 201 239)
          }
          60.9375% {
            fill:rgb(119 201 239)
          }
          61.2500% {
            fill:rgb(119 201 239)
          }
          61.5625% {
            fill:rgb(119 201 239)
          }
          61.8750% {
            fill:rgb(119 201 239)
          }
          62.1875% {
            fill:rgb(119 201 239)
          }
          62.5000% {
            fill:rgb(119 201 239)
          }
          62.8125% {
            fill:rgb(119 201 239)
          }
          63.1250% {
            fill:rgb(119 201 239)
          }
          63.4375% {
            fill:rgb(120 201 239)
          }
          63.7500% {
            fill:rgb(120 201 238)
          }
          64.0625% {
            fill:rgb(120 201 238)
          }
          64.3750% {
            fill:rgb(121 201 237)
          }
          64.6875% {
            fill:rgb(122 201 236)
          }
          65.0000% {
            fill:rgb(122 201 236)
          }
          65.3125% {
            fill:rgb(123 201 235)
          }
          65.6250% {
            fill:rgb(124 201 234)
          }
          65.9375% {
            fill:rgb(125 201 233)
          }
          66.2500% {
            fill:rgb(127 201 232)
          }
          66.5625% {
            fill:rgb(128 201 231)
          }
          66.8750% {
            fill:rgb(129 201 229)
          }
          67.1875% {
            fill:rgb(130 201 228)
          }
          67.5000% {
            fill:rgb(132 201 227)
          }
          67.8125% {
            fill:rgb(133 201 225)
          }
          68.1250% {
            fill:rgb(135 201 224)
          }
          68.4375% {
            fill:rgb(137 201 222)
          }
          68.7500% {
            fill:rgb(138 201 220)
          }
          69.0625% {
            fill:rgb(140 201 219)
          }
          69.3750% {
            fill:rgb(142 201 217)
          }
          69.6875% {
            fill:rgb(144 201 215)
          }
          70.0000% {
            fill:rgb(146 201 213)
          }
          70.3125% {
            fill:rgb(148 201 211)
          }
          70.6250% {
            fill:rgb(150 201 209)
          }
          70.9375% {
            fill:rgb(152 201 207)
          }
          71.2500% {
            fill:rgb(154 201 205)
          }
          71.5625% {
            fill:rgb(156 201 203)
          }
          71.8750% {
            fill:rgb(158 201 201)
          }
          72.1875% {
            fill:rgb(160 201 199)
          }
          72.5000% {
            fill:rgb(163 201 197)
          }
          72.8125% {
            fill:rgb(165 201 195)
          }
          73.1250% {
            fill:rgb(167 201 192)
          }
          73.4375% {
            fill:rgb(169 201 190)
          }
          73.7500% {
            fill:rgb(172 201 188)
          }
          74.0625% {
            fill:rgb(174 201 186)
          }
          74.3750% {
            fill:rgb(176 201 183)
          }
          74.6875% {
            fill:rgb(179 201 181)
          }
          75.0000% {
            fill:rgb(181 201 179)
          }
          75.3125% {
            fill:rgb(183 201 177)
          }
          75.6250% {
            fill:rgb(186 201 175)
          }
          75.9375% {
            fill:rgb(188 201 172)
          }
          76.2500% {
            fill:rgb(190 201 170)
          }
          76.5625% {
            fill:rgb(193 201 168)
          }
          76.8750% {
            fill:rgb(195 201 166)
          }
          77.1875% {
            fill:rgb(197 201 163)
          }
          77.5000% {
            fill:rgb(199 201 161)
          }
          77.8125% {
            fill:rgb(202 201 159)
          }
          78.1250% {
            fill:rgb(204 201 157)
          }
          78.4375% {
            fill:rgb(206 201 155)
          }
          78.7500% {
            fill:rgb(208 201 153)
          }
          79.0625% {
            fill:rgb(210 201 151)
          }
          79.3750% {
            fill:rgb(212 201 149)
          }
          79.6875% {
            fill:rgb(214 201 147)
          }
          80.0000% {
            fill:rgb(216 201 145)
          }
          80.3125% {
            fill:rgb(218 201 143)
          }
          80.6250% {
            fill:rgb(220 201 141)
          }
          80.9375% {
            fill:rgb(222 201 139)
          }
          81.2500% {
            fill:rgb(224 201 138)
          }
          81.5625% {
            fill:rgb(225 201 136)
          }
          81.8750% {
            fill:rgb(227 201 134)
          }
          82.1875% {
            fill:rgb(229 201 133)
          }
          82.5000% {
            fill:rgb(230 201 131)
          }
          82.8125% {
            fill:rgb(232 201 130)
          }
          83.1250% {
            fill:rgb(233 201 129)
          }
          83.4375% {
            fill:rgb(234 201 127)
          }
          83.7500% {
            fill:rgb(235 201 126)
          }
          84.0625% {
            fill:rgb(237 201 125)
          }
          84.3750% {
            fill:rgb(238 201 124)
          }
          84.6875% {
            fill:rgb(239 201 123)
          }
          85.0000% {
            fill:rgb(240 201 122)
          }
          85.3125% {
            fill:rgb(240 201 122)
          }
          85.6250% {
            fill:rgb(241 201 121)
          }
          85.9375% {
            fill:rgb(242 201 120)
          }
          86.2500% {
            fill:rgb(242 201 120)
          }
          86.5625% {
            fill:rgb(242 201 119)
          }
          86.8750% {
            fill:rgb(243 201 119)
          }
          87.1875% {
            fill:rgb(243 201 119)
          }
          87.5000% {
            fill:rgb(243 201 119)
          }
          87.8125% {
            fill:rgb(243 201 119)
          }
          88.1250% {
            fill:rgb(243 201 119)
          }
          88.4375% {
            fill:rgb(243 201 119)
          }
          88.7500% {
            fill:rgb(243 201 119)
          }
          89.0625% {
            fill:rgb(243 201 119)
          }
          89.3750% {
            fill:rgb(243 201 119)
          }
          89.6875% {
            fill:rgb(243 201 119)
          }
          90.0000% {
            fill:rgb(243 201 119)
          }
          90.3125% {
            fill:rgb(243 201 119)
          }
          90.6250% {
            fill:rgb(243 201 119)
          }
          90.9375% {
            fill:rgb(243 201 119)
          }
          91.2500% {
            fill:rgb(243 201 119)
          }
          91.5625% {
            fill:rgb(243 201 119)
          }
          91.8750% {
            fill:rgb(243 201 119)
          }
          92.1875% {
            fill:rgb(243 201 119)
          }
          92.5000% {
            fill:rgb(243 201 119)
          }
          92.8125% {
            fill:rgb(243 201 119)
          }
          93.1250% {
            fill:rgb(243 201 119)
          }
          93.4375% {
            fill:rgb(243 201 119)
          }
          93.7500% {
            fill:rgb(243 201 119)
          }
          94.0625% {
            fill:rgb(243 201 119)
          }
          94.3750% {
            fill:rgb(243 201 119)
          }
          94.6875% {
            fill:rgb(243 201 119)
          }
          95.0000% {
            fill:rgb(243 201 119)
          }
          95.3125% {
            fill:rgb(243 201 119)
          }
          95.6250% {
            fill:rgb(243 201 119)
          }
          95.9375% {
            fill:rgb(243 201 119)
          }
          96.2500% {
            fill:rgb(243 201 119)
          }
          96.5625% {
            fill:rgb(242 201 120)
          }
          96.8750% {
            fill:rgb(242 201 120)
          }
          97.1875% {
            fill:rgb(241 201 121)
          }
          97.5000% {
            fill:rgb(240 201 122)
          }
          97.8125% {
            fill:rgb(238 201 124)
          }
          98.1250% {
            fill:rgb(237 201 125)
          }
          98.4375% {
            fill:rgb(235 201 127)
          }
          98.7500% {
            fill:rgb(233 201 129)
          }
          99.0625% {
            fill:rgb(231 201 131)
          }
          99.3750% {
            fill:rgb(229 201 133)
          }
          99.6875% {
            fill:rgb(226 201 135)
          }
          100.0000% {
            fill:rgb(224 201 138)
          }
        }
        @keyframes overturn-mark-1 {
          0.0000% {
            opacity:0.156
          }
          0.3125% {
            opacity:0.178
          }
          0.6250% {
            opacity:0.2
          }
          0.9375% {
            opacity:0.224
          }
          1.2500% {
            opacity:0.248
          }
          1.5625% {
            opacity:0.273
          }
          1.8750% {
            opacity:0.299
          }
          2.1875% {
            opacity:0.325
          }
          2.5000% {
            opacity:0.352
          }
          2.8125% {
            opacity:0.379
          }
          3.1250% {
            opacity:0.407
          }
          3.4375% {
            opacity:0.435
          }
          3.7500% {
            opacity:0.463
          }
          4.0625% {
            opacity:0.491
          }
          4.3750% {
            opacity:0.519
          }
          4.6875% {
            opacity:0.547
          }
          5.0000% {
            opacity:0.575
          }
          5.3125% {
            opacity:0.602
          }
          5.6250% {
            opacity:0.63
          }
          5.9375% {
            opacity:0.657
          }
          6.2500% {
            opacity:0.684
          }
          6.5625% {
            opacity:0.71
          }
          6.8750% {
            opacity:0.735
          }
          7.1875% {
            opacity:0.76
          }
          7.5000% {
            opacity:0.784
          }
          7.8125% {
            opacity:0.807
          }
          8.1250% {
            opacity:0.829
          }
          8.4375% {
            opacity:0.851
          }
          8.7500% {
            opacity:0.871
          }
          9.0625% {
            opacity:0.89
          }
          9.3750% {
            opacity:0.908
          }
          9.6875% {
            opacity:0.924
          }
          10.0000% {
            opacity:0.939
          }
          10.3125% {
            opacity:0.953
          }
          10.6250% {
            opacity:0.965
          }
          10.9375% {
            opacity:0.975
          }
          11.2500% {
            opacity:0.984
          }
          11.5625% {
            opacity:0.991
          }
          11.8750% {
            opacity:0.996
          }
          12.1875% {
            opacity:0.999
          }
          12.5000% {
            opacity:1
          }
          12.8125% {
            opacity:1
          }
          13.1250% {
            opacity:1
          }
          13.4375% {
            opacity:1
          }
          13.7500% {
            opacity:1
          }
          14.0625% {
            opacity:1
          }
          14.3750% {
            opacity:1
          }
          14.6875% {
            opacity:1
          }
          15.0000% {
            opacity:1
          }
          15.3125% {
            opacity:1
          }
          15.6250% {
            opacity:1
          }
          15.9375% {
            opacity:1
          }
          16.2500% {
            opacity:1
          }
          16.5625% {
            opacity:1
          }
          16.8750% {
            opacity:1
          }
          17.1875% {
            opacity:1
          }
          17.5000% {
            opacity:1
          }
          17.8125% {
            opacity:1
          }
          18.1250% {
            opacity:1
          }
          18.4375% {
            opacity:1
          }
          18.7500% {
            opacity:1
          }
          19.0625% {
            opacity:1
          }
          19.3750% {
            opacity:1
          }
          19.6875% {
            opacity:1
          }
          20.0000% {
            opacity:1
          }
          20.3125% {
            opacity:1
          }
          20.6250% {
            opacity:1
          }
          20.9375% {
            opacity:1
          }
          21.2500% {
            opacity:1
          }
          21.5625% {
            opacity:1
          }
          21.8750% {
            opacity:1
          }
          22.1875% {
            opacity:1
          }
          22.5000% {
            opacity:1
          }
          22.8125% {
            opacity:1
          }
          23.1250% {
            opacity:1
          }
          23.4375% {
            opacity:1
          }
          23.7500% {
            opacity:1
          }
          24.0625% {
            opacity:1
          }
          24.3750% {
            opacity:1
          }
          24.6875% {
            opacity:1
          }
          25.0000% {
            opacity:1
          }
          25.3125% {
            opacity:1
          }
          25.6250% {
            opacity:1
          }
          25.9375% {
            opacity:1
          }
          26.2500% {
            opacity:1
          }
          26.5625% {
            opacity:1
          }
          26.8750% {
            opacity:1
          }
          27.1875% {
            opacity:1
          }
          27.5000% {
            opacity:1
          }
          27.8125% {
            opacity:1
          }
          28.1250% {
            opacity:1
          }
          28.4375% {
            opacity:1
          }
          28.7500% {
            opacity:1
          }
          29.0625% {
            opacity:1
          }
          29.3750% {
            opacity:1
          }
          29.6875% {
            opacity:1
          }
          30.0000% {
            opacity:1
          }
          30.3125% {
            opacity:1
          }
          30.6250% {
            opacity:1
          }
          30.9375% {
            opacity:1
          }
          31.2500% {
            opacity:1
          }
          31.5625% {
            opacity:1
          }
          31.8750% {
            opacity:1
          }
          32.1875% {
            opacity:1
          }
          32.5000% {
            opacity:1
          }
          32.8125% {
            opacity:1
          }
          33.1250% {
            opacity:1
          }
          33.4375% {
            opacity:1
          }
          33.7500% {
            opacity:1
          }
          34.0625% {
            opacity:1
          }
          34.3750% {
            opacity:1
          }
          34.6875% {
            opacity:1
          }
          35.0000% {
            opacity:1
          }
          35.3125% {
            opacity:1
          }
          35.6250% {
            opacity:1
          }
          35.9375% {
            opacity:1
          }
          36.2500% {
            opacity:1
          }
          36.5625% {
            opacity:1
          }
          36.8750% {
            opacity:1
          }
          37.1875% {
            opacity:1
          }
          37.5000% {
            opacity:1
          }
          37.8125% {
            opacity:1
          }
          38.1250% {
            opacity:1
          }
          38.4375% {
            opacity:1
          }
          38.7500% {
            opacity:1
          }
          39.0625% {
            opacity:1
          }
          39.3750% {
            opacity:1
          }
          39.6875% {
            opacity:1
          }
          40.0000% {
            opacity:1
          }
          40.3125% {
            opacity:1
          }
          40.6250% {
            opacity:1
          }
          40.9375% {
            opacity:1
          }
          41.2500% {
            opacity:1
          }
          41.5625% {
            opacity:1
          }
          41.8750% {
            opacity:1
          }
          42.1875% {
            opacity:1
          }
          42.5000% {
            opacity:1
          }
          42.8125% {
            opacity:1
          }
          43.1250% {
            opacity:1
          }
          43.4375% {
            opacity:1
          }
          43.7500% {
            opacity:1
          }
          44.0625% {
            opacity:1
          }
          44.3750% {
            opacity:1
          }
          44.6875% {
            opacity:1
          }
          45.0000% {
            opacity:1
          }
          45.3125% {
            opacity:1
          }
          45.6250% {
            opacity:1
          }
          45.9375% {
            opacity:1
          }
          46.2500% {
            opacity:1
          }
          46.5625% {
            opacity:1
          }
          46.8750% {
            opacity:1
          }
          47.1875% {
            opacity:1
          }
          47.5000% {
            opacity:1
          }
          47.8125% {
            opacity:1
          }
          48.1250% {
            opacity:1
          }
          48.4375% {
            opacity:1
          }
          48.7500% {
            opacity:1
          }
          49.0625% {
            opacity:1
          }
          49.3750% {
            opacity:1
          }
          49.6875% {
            opacity:1
          }
          50.0000% {
            opacity:1
          }
          50.3125% {
            opacity:1
          }
          50.6250% {
            opacity:1
          }
          50.9375% {
            opacity:1
          }
          51.2500% {
            opacity:1
          }
          51.5625% {
            opacity:1
          }
          51.8750% {
            opacity:1
          }
          52.1875% {
            opacity:1
          }
          52.5000% {
            opacity:1
          }
          52.8125% {
            opacity:1
          }
          53.1250% {
            opacity:1
          }
          53.4375% {
            opacity:1
          }
          53.7500% {
            opacity:1
          }
          54.0625% {
            opacity:1
          }
          54.3750% {
            opacity:1
          }
          54.6875% {
            opacity:1
          }
          55.0000% {
            opacity:1
          }
          55.3125% {
            opacity:1
          }
          55.6250% {
            opacity:1
          }
          55.9375% {
            opacity:1
          }
          56.2500% {
            opacity:1
          }
          56.5625% {
            opacity:1
          }
          56.8750% {
            opacity:1
          }
          57.1875% {
            opacity:1
          }
          57.5000% {
            opacity:1
          }
          57.8125% {
            opacity:1
          }
          58.1250% {
            opacity:1
          }
          58.4375% {
            opacity:1
          }
          58.7500% {
            opacity:1
          }
          59.0625% {
            opacity:1
          }
          59.3750% {
            opacity:1
          }
          59.6875% {
            opacity:1
          }
          60.0000% {
            opacity:1
          }
          60.3125% {
            opacity:1
          }
          60.6250% {
            opacity:1
          }
          60.9375% {
            opacity:1
          }
          61.2500% {
            opacity:1
          }
          61.5625% {
            opacity:1
          }
          61.8750% {
            opacity:1
          }
          62.1875% {
            opacity:1
          }
          62.5000% {
            opacity:1
          }
          62.8125% {
            opacity:1.0
          }
          63.1250% {
            opacity:0.998
          }
          63.4375% {
            opacity:0.996
          }
          63.7500% {
            opacity:0.993
          }
          64.0625% {
            opacity:0.989
          }
          64.3750% {
            opacity:0.984
          }
          64.6875% {
            opacity:0.978
          }
          65.0000% {
            opacity:0.972
          }
          65.3125% {
            opacity:0.965
          }
          65.6250% {
            opacity:0.957
          }
          65.9375% {
            opacity:0.948
          }
          66.2500% {
            opacity:0.939
          }
          66.5625% {
            opacity:0.929
          }
          66.8750% {
            opacity:0.919
          }
          67.1875% {
            opacity:0.908
          }
          67.5000% {
            opacity:0.896
          }
          67.8125% {
            opacity:0.884
          }
          68.1250% {
            opacity:0.871
          }
          68.4375% {
            opacity:0.858
          }
          68.7500% {
            opacity:0.844
          }
          69.0625% {
            opacity:0.829
          }
          69.3750% {
            opacity:0.815
          }
          69.6875% {
            opacity:0.8
          }
          70.0000% {
            opacity:0.784
          }
          70.3125% {
            opacity:0.768
          }
          70.6250% {
            opacity:0.752
          }
          70.9375% {
            opacity:0.735
          }
          71.2500% {
            opacity:0.718
          }
          71.5625% {
            opacity:0.701
          }
          71.8750% {
            opacity:0.684
          }
          72.1875% {
            opacity:0.666
          }
          72.5000% {
            opacity:0.648
          }
          72.8125% {
            opacity:0.63
          }
          73.1250% {
            opacity:0.612
          }
          73.4375% {
            opacity:0.593
          }
          73.7500% {
            opacity:0.575
          }
          74.0625% {
            opacity:0.556
          }
          74.3750% {
            opacity:0.537
          }
          74.6875% {
            opacity:0.519
          }
          75.0000% {
            opacity:0.5
          }
          75.3125% {
            opacity:0.481
          }
          75.6250% {
            opacity:0.463
          }
          75.9375% {
            opacity:0.444
          }
          76.2500% {
            opacity:0.425
          }
          76.5625% {
            opacity:0.407
          }
          76.8750% {
            opacity:0.388
          }
          77.1875% {
            opacity:0.37
          }
          77.5000% {
            opacity:0.352
          }
          77.8125% {
            opacity:0.334
          }
          78.1250% {
            opacity:0.316
          }
          78.4375% {
            opacity:0.299
          }
          78.7500% {
            opacity:0.282
          }
          79.0625% {
            opacity:0.265
          }
          79.3750% {
            opacity:0.248
          }
          79.6875% {
            opacity:0.232
          }
          80.0000% {
            opacity:0.216
          }
          80.3125% {
            opacity:0.2
          }
          80.6250% {
            opacity:0.185
          }
          80.9375% {
            opacity:0.171
          }
          81.2500% {
            opacity:0.156
          }
          81.5625% {
            opacity:0.142
          }
          81.8750% {
            opacity:0.129
          }
          82.1875% {
            opacity:0.116
          }
          82.5000% {
            opacity:0.104
          }
          82.8125% {
            opacity:0.092
          }
          83.1250% {
            opacity:0.081
          }
          83.4375% {
            opacity:0.071
          }
          83.7500% {
            opacity:0.061
          }
          84.0625% {
            opacity:0.052
          }
          84.3750% {
            opacity:0.043
          }
          84.6875% {
            opacity:0.035
          }
          85.0000% {
            opacity:0.028
          }
          85.3125% {
            opacity:0.022
          }
          85.6250% {
            opacity:0.016
          }
          85.9375% {
            opacity:0.011
          }
          86.2500% {
            opacity:0.007
          }
          86.5625% {
            opacity:0.004
          }
          86.8750% {
            opacity:0.002
          }
          87.1875% {
            opacity:0.0
          }
          87.5000% {
            opacity:0
          }
          87.8125% {
            opacity:0
          }
          88.1250% {
            opacity:0
          }
          88.4375% {
            opacity:0
          }
          88.7500% {
            opacity:0
          }
          89.0625% {
            opacity:0
          }
          89.3750% {
            opacity:0
          }
          89.6875% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.3125% {
            opacity:0
          }
          90.6250% {
            opacity:0
          }
          90.9375% {
            opacity:0
          }
          91.2500% {
            opacity:0
          }
          91.5625% {
            opacity:0
          }
          91.8750% {
            opacity:0
          }
          92.1875% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          92.8125% {
            opacity:0
          }
          93.1250% {
            opacity:0
          }
          93.4375% {
            opacity:0
          }
          93.7500% {
            opacity:0
          }
          94.0625% {
            opacity:0
          }
          94.3750% {
            opacity:0
          }
          94.6875% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.3125% {
            opacity:0
          }
          95.6250% {
            opacity:0
          }
          95.9375% {
            opacity:0.0
          }
          96.2500% {
            opacity:0.002
          }
          96.5625% {
            opacity:0.006
          }
          96.8750% {
            opacity:0.011
          }
          97.1875% {
            opacity:0.019
          }
          97.5000% {
            opacity:0.028
          }
          97.8125% {
            opacity:0.039
          }
          98.1250% {
            opacity:0.052
          }
          98.4375% {
            opacity:0.066
          }
          98.7500% {
            opacity:0.081
          }
          99.0625% {
            opacity:0.098
          }
          99.3750% {
            opacity:0.116
          }
          99.6875% {
            opacity:0.136
          }
          100.0000% {
            opacity:0.156
          }
        }
        @keyframes overturn-fleck-1 {
          0.0000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          0.3125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          0.6250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          0.9375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          1.2500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          1.5625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          1.8750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          2.1875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          2.5000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          2.8125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          3.1250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          3.4375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          3.7500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          4.0625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          4.3750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          4.6875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          5.0000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          5.3125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          5.6250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          5.9375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          6.2500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          6.5625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          6.8750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          7.1875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          7.5000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          7.8125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          8.1250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          8.4375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          8.7500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          9.0625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          9.3750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          9.6875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          10.0000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          10.3125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          10.6250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          10.9375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          11.2500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          11.5625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          11.8750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          12.1875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          12.5000% {
            transform:translate(118px,79px);
            opacity:0
          }
          12.8125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          13.1250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          13.4375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          13.7500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          14.0625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          14.3750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          14.6875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          15.0000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          15.3125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          15.6250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          15.9375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          16.2500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          16.5625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          16.8750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          17.1875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          17.5000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          17.8125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          18.1250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          18.4375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          18.7500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          19.0625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          19.3750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          19.6875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          20.0000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          20.3125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          20.6250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          20.9375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          21.2500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          21.5625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          21.8750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          22.1875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          22.5000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          22.8125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          23.1250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          23.4375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          23.7500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          24.0625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          24.3750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          24.6875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          25.0000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          25.3125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          25.6250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          25.9375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          26.2500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          26.5625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          26.8750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          27.1875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          27.5000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          27.8125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          28.1250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          28.4375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          28.7500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          29.0625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          29.3750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          29.6875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          30.0000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          30.3125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          30.6250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          30.9375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          31.2500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          31.5625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          31.8750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          32.1875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          32.5000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          32.8125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          33.1250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          33.4375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          33.7500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          34.0625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          34.3750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          34.6875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          35.0000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          35.3125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          35.6250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          35.9375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          36.2500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          36.5625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          36.8750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          37.1875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          37.5000% {
            transform:translate(70px,109px);
            opacity:0
          }
          37.8125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          38.1250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          38.4375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          38.7500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          39.0625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          39.3750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          39.6875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          40.0000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          40.3125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          40.6250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          40.9375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          41.2500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          41.5625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          41.8750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          42.1875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          42.5000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          42.8125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          43.1250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          43.4375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          43.7500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          44.0625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          44.3750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          44.6875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          45.0000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          45.3125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          45.6250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          45.9375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          46.2500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          46.5625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          46.8750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          47.1875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          47.5000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          47.8125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          48.1250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          48.4375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          48.7500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          49.0625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          49.3750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          49.6875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          50.0000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          50.3125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          50.6250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          50.9375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          51.2500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          51.5625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          51.8750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          52.1875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          52.5000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          52.8125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          53.1250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          53.4375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          53.7500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          54.0625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          54.3750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          54.6875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          55.0000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          55.3125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          55.6250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          55.9375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          56.2500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          56.5625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          56.8750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          57.1875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          57.5000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          57.8125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          58.1250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          58.4375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          58.7500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          59.0625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          59.3750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          59.6875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          60.0000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          60.3125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          60.6250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          60.9375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          61.2500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          61.5625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          61.8750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          62.1875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          62.5000% {
            transform:translate(22px,79px);
            opacity:0
          }
          62.8125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          63.1250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          63.4375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          63.7500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          64.0625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          64.3750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          64.6875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          65.0000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          65.3125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          65.6250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          65.9375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          66.2500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          66.5625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          66.8750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          67.1875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          67.5000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          67.8125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          68.1250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          68.4375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          68.7500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          69.0625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          69.3750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          69.6875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          70.0000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          70.3125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          70.6250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          70.9375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          71.2500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          71.5625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          71.8750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          72.1875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          72.5000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          72.8125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          73.1250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          73.4375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          73.7500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          74.0625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          74.3750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          74.6875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          75.0000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          75.3125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          75.6250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          75.9375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          76.2500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          76.5625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          76.8750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          77.1875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          77.5000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          77.8125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          78.1250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          78.4375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          78.7500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          79.0625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          79.3750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          79.6875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          80.0000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          80.3125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          80.6250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          80.9375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          81.2500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          81.5625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          81.8750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          82.1875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          82.5000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          82.8125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          83.1250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          83.4375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          83.7500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          84.0625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          84.3750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          84.6875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          85.0000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          85.3125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          85.6250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          85.9375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          86.2500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          86.5625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          86.8750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          87.1875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          87.5000% {
            transform:translate(70px,44px);
            opacity:0
          }
          87.8125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          88.1250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          88.4375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          88.7500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          89.0625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          89.3750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          89.6875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          90.0000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          90.3125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          90.6250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          90.9375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          91.2500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          91.5625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          91.8750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          92.1875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          92.5000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          92.8125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          93.1250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          93.4375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          93.7500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          94.0625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          94.3750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          94.6875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          95.0000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          95.3125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          95.6250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          95.9375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          96.2500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          96.5625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          96.8750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          97.1875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          97.5000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          97.8125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          98.1250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          98.4375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          98.7500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          99.0625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          99.3750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          99.6875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          100.0000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
        }
        .parcel-2 {
          animation:overturn-parcel-2 16s linear infinite
        }
        .color-2 {
          animation:overturn-color-2 16s linear infinite
        }
        .mark-2 {
          animation:overturn-mark-2 16s linear infinite
        }
        .fleck-2 {
          animation:overturn-fleck-2 16s linear infinite
        }
        @keyframes overturn-parcel-2 {
          0.0000% {
            transform:translate(118px,79px)
          }
          0.3125% {
            transform:translate(117.991px,79.589px)
          }
          0.6250% {
            transform:translate(117.963px,80.178px)
          }
          0.9375% {
            transform:translate(117.917px,80.766px)
          }
          1.2500% {
            transform:translate(117.852px,81.354px)
          }
          1.5625% {
            transform:translate(117.769px,81.941px)
          }
          1.8750% {
            transform:translate(117.667px,82.526px)
          }
          2.1875% {
            transform:translate(117.547px,83.11px)
          }
          2.5000% {
            transform:translate(117.409px,83.693px)
          }
          2.8125% {
            transform:translate(117.252px,84.274px)
          }
          3.1250% {
            transform:translate(117.078px,84.853px)
          }
          3.4375% {
            transform:translate(116.885px,85.429px)
          }
          3.7500% {
            transform:translate(116.674px,86.003px)
          }
          4.0625% {
            transform:translate(116.445px,86.575px)
          }
          4.3750% {
            transform:translate(116.198px,87.143px)
          }
          4.6875% {
            transform:translate(115.933px,87.709px)
          }
          5.0000% {
            transform:translate(115.651px,88.271px)
          }
          5.3125% {
            transform:translate(115.351px,88.829px)
          }
          5.6250% {
            transform:translate(115.033px,89.384px)
          }
          5.9375% {
            transform:translate(114.698px,89.934px)
          }
          6.2500% {
            transform:translate(114.346px,90.481px)
          }
          6.5625% {
            transform:translate(113.977px,91.022px)
          }
          6.8750% {
            transform:translate(113.591px,91.56px)
          }
          7.1875% {
            transform:translate(113.188px,92.092px)
          }
          7.5000% {
            transform:translate(112.768px,92.62px)
          }
          7.8125% {
            transform:translate(112.332px,93.142px)
          }
          8.1250% {
            transform:translate(111.88px,93.659px)
          }
          8.4375% {
            transform:translate(111.411px,94.17px)
          }
          8.7500% {
            transform:translate(110.927px,94.675px)
          }
          9.0625% {
            transform:translate(110.426px,95.174px)
          }
          9.3750% {
            transform:translate(109.911px,95.667px)
          }
          9.6875% {
            transform:translate(109.379px,96.154px)
          }
          10.0000% {
            transform:translate(108.833px,96.634px)
          }
          10.3125% {
            transform:translate(108.271px,97.107px)
          }
          10.6250% {
            transform:translate(107.695px,97.573px)
          }
          10.9375% {
            transform:translate(107.105px,98.032px)
          }
          11.2500% {
            transform:translate(106.499px,98.483px)
          }
          11.5625% {
            transform:translate(105.88px,98.928px)
          }
          11.8750% {
            transform:translate(105.247px,99.364px)
          }
          12.1875% {
            transform:translate(104.601px,99.793px)
          }
          12.5000% {
            transform:translate(103.941px,100.213px)
          }
          12.8125% {
            transform:translate(103.268px,100.626px)
          }
          13.1250% {
            transform:translate(102.582px,101.03px)
          }
          13.4375% {
            transform:translate(101.884px,101.425px)
          }
          13.7500% {
            transform:translate(101.174px,101.812px)
          }
          14.0625% {
            transform:translate(100.451px,102.19px)
          }
          14.3750% {
            transform:translate(99.717px,102.56px)
          }
          14.6875% {
            transform:translate(98.971px,102.92px)
          }
          15.0000% {
            transform:translate(98.214px,103.271px)
          }
          15.3125% {
            transform:translate(97.446px,103.612px)
          }
          15.6250% {
            transform:translate(96.667px,103.944px)
          }
          15.9375% {
            transform:translate(95.879px,104.267px)
          }
          16.2500% {
            transform:translate(95.08px,104.579px)
          }
          16.5625% {
            transform:translate(94.272px,104.882px)
          }
          16.8750% {
            transform:translate(93.454px,105.175px)
          }
          17.1875% {
            transform:translate(92.627px,105.458px)
          }
          17.5000% {
            transform:translate(91.792px,105.73px)
          }
          17.8125% {
            transform:translate(90.948px,105.992px)
          }
          18.1250% {
            transform:translate(90.096px,106.244px)
          }
          18.4375% {
            transform:translate(89.236px,106.486px)
          }
          18.7500% {
            transform:translate(88.369px,106.716px)
          }
          19.0625% {
            transform:translate(87.495px,106.936px)
          }
          19.3750% {
            transform:translate(86.614px,107.146px)
          }
          19.6875% {
            transform:translate(85.726px,107.344px)
          }
          20.0000% {
            transform:translate(84.833px,107.532px)
          }
          20.3125% {
            transform:translate(83.934px,107.708px)
          }
          20.6250% {
            transform:translate(83.029px,107.874px)
          }
          20.9375% {
            transform:translate(82.12px,108.028px)
          }
          21.2500% {
            transform:translate(81.205px,108.171px)
          }
          21.5625% {
            transform:translate(80.287px,108.303px)
          }
          21.8750% {
            transform:translate(79.364px,108.424px)
          }
          22.1875% {
            transform:translate(78.438px,108.533px)
          }
          22.5000% {
            transform:translate(77.509px,108.631px)
          }
          22.8125% {
            transform:translate(76.577px,108.717px)
          }
          23.1250% {
            transform:translate(75.642px,108.792px)
          }
          23.4375% {
            transform:translate(74.705px,108.856px)
          }
          23.7500% {
            transform:translate(73.766px,108.908px)
          }
          24.0625% {
            transform:translate(72.826px,108.948px)
          }
          24.3750% {
            transform:translate(71.884px,108.977px)
          }
          24.6875% {
            transform:translate(70.942px,108.994px)
          }
          25.0000% {
            transform:translate(70px,109px)
          }
          25.3125% {
            transform:translate(69.058px,108.994px)
          }
          25.6250% {
            transform:translate(68.116px,108.977px)
          }
          25.9375% {
            transform:translate(67.174px,108.948px)
          }
          26.2500% {
            transform:translate(66.234px,108.908px)
          }
          26.5625% {
            transform:translate(65.295px,108.856px)
          }
          26.8750% {
            transform:translate(64.358px,108.792px)
          }
          27.1875% {
            transform:translate(63.423px,108.717px)
          }
          27.5000% {
            transform:translate(62.491px,108.631px)
          }
          27.8125% {
            transform:translate(61.562px,108.533px)
          }
          28.1250% {
            transform:translate(60.636px,108.424px)
          }
          28.4375% {
            transform:translate(59.713px,108.303px)
          }
          28.7500% {
            transform:translate(58.795px,108.171px)
          }
          29.0625% {
            transform:translate(57.88px,108.028px)
          }
          29.3750% {
            transform:translate(56.971px,107.874px)
          }
          29.6875% {
            transform:translate(56.066px,107.708px)
          }
          30.0000% {
            transform:translate(55.167px,107.532px)
          }
          30.3125% {
            transform:translate(54.274px,107.344px)
          }
          30.6250% {
            transform:translate(53.386px,107.146px)
          }
          30.9375% {
            transform:translate(52.505px,106.936px)
          }
          31.2500% {
            transform:translate(51.631px,106.716px)
          }
          31.5625% {
            transform:translate(50.764px,106.486px)
          }
          31.8750% {
            transform:translate(49.904px,106.244px)
          }
          32.1875% {
            transform:translate(49.052px,105.992px)
          }
          32.5000% {
            transform:translate(48.208px,105.73px)
          }
          32.8125% {
            transform:translate(47.373px,105.458px)
          }
          33.1250% {
            transform:translate(46.546px,105.175px)
          }
          33.4375% {
            transform:translate(45.728px,104.882px)
          }
          33.7500% {
            transform:translate(44.92px,104.579px)
          }
          34.0625% {
            transform:translate(44.121px,104.267px)
          }
          34.3750% {
            transform:translate(43.333px,103.944px)
          }
          34.6875% {
            transform:translate(42.554px,103.612px)
          }
          35.0000% {
            transform:translate(41.786px,103.271px)
          }
          35.3125% {
            transform:translate(41.029px,102.92px)
          }
          35.6250% {
            transform:translate(40.283px,102.56px)
          }
          35.9375% {
            transform:translate(39.549px,102.19px)
          }
          36.2500% {
            transform:translate(38.826px,101.812px)
          }
          36.5625% {
            transform:translate(38.116px,101.425px)
          }
          36.8750% {
            transform:translate(37.418px,101.03px)
          }
          37.1875% {
            transform:translate(36.732px,100.626px)
          }
          37.5000% {
            transform:translate(36.059px,100.213px)
          }
          37.8125% {
            transform:translate(35.399px,99.793px)
          }
          38.1250% {
            transform:translate(34.753px,99.364px)
          }
          38.4375% {
            transform:translate(34.12px,98.928px)
          }
          38.7500% {
            transform:translate(33.501px,98.483px)
          }
          39.0625% {
            transform:translate(32.895px,98.032px)
          }
          39.3750% {
            transform:translate(32.305px,97.573px)
          }
          39.6875% {
            transform:translate(31.729px,97.107px)
          }
          40.0000% {
            transform:translate(31.167px,96.634px)
          }
          40.3125% {
            transform:translate(30.621px,96.154px)
          }
          40.6250% {
            transform:translate(30.089px,95.667px)
          }
          40.9375% {
            transform:translate(29.574px,95.174px)
          }
          41.2500% {
            transform:translate(29.073px,94.675px)
          }
          41.5625% {
            transform:translate(28.589px,94.17px)
          }
          41.8750% {
            transform:translate(28.12px,93.659px)
          }
          42.1875% {
            transform:translate(27.668px,93.142px)
          }
          42.5000% {
            transform:translate(27.232px,92.62px)
          }
          42.8125% {
            transform:translate(26.812px,92.092px)
          }
          43.1250% {
            transform:translate(26.409px,91.56px)
          }
          43.4375% {
            transform:translate(26.023px,91.022px)
          }
          43.7500% {
            transform:translate(25.654px,90.481px)
          }
          44.0625% {
            transform:translate(25.302px,89.934px)
          }
          44.3750% {
            transform:translate(24.967px,89.384px)
          }
          44.6875% {
            transform:translate(24.649px,88.829px)
          }
          45.0000% {
            transform:translate(24.349px,88.271px)
          }
          45.3125% {
            transform:translate(24.067px,87.709px)
          }
          45.6250% {
            transform:translate(23.802px,87.143px)
          }
          45.9375% {
            transform:translate(23.555px,86.575px)
          }
          46.2500% {
            transform:translate(23.326px,86.003px)
          }
          46.5625% {
            transform:translate(23.115px,85.429px)
          }
          46.8750% {
            transform:translate(22.922px,84.853px)
          }
          47.1875% {
            transform:translate(22.748px,84.274px)
          }
          47.5000% {
            transform:translate(22.591px,83.693px)
          }
          47.8125% {
            transform:translate(22.453px,83.11px)
          }
          48.1250% {
            transform:translate(22.333px,82.526px)
          }
          48.4375% {
            transform:translate(22.231px,81.941px)
          }
          48.7500% {
            transform:translate(22.148px,81.354px)
          }
          49.0625% {
            transform:translate(22.083px,80.766px)
          }
          49.3750% {
            transform:translate(22.037px,80.178px)
          }
          49.6875% {
            transform:translate(22.009px,79.589px)
          }
          50.0000% {
            transform:translate(22px,79px)
          }
          50.3125% {
            transform:translate(22.009px,78.411px)
          }
          50.6250% {
            transform:translate(22.037px,77.822px)
          }
          50.9375% {
            transform:translate(22.083px,77.234px)
          }
          51.2500% {
            transform:translate(22.148px,76.646px)
          }
          51.5625% {
            transform:translate(22.231px,76.059px)
          }
          51.8750% {
            transform:translate(22.333px,75.474px)
          }
          52.1875% {
            transform:translate(22.453px,74.89px)
          }
          52.5000% {
            transform:translate(22.591px,74.307px)
          }
          52.8125% {
            transform:translate(22.748px,73.726px)
          }
          53.1250% {
            transform:translate(22.922px,73.147px)
          }
          53.4375% {
            transform:translate(23.115px,72.571px)
          }
          53.7500% {
            transform:translate(23.326px,71.997px)
          }
          54.0625% {
            transform:translate(23.555px,71.425px)
          }
          54.3750% {
            transform:translate(23.802px,70.857px)
          }
          54.6875% {
            transform:translate(24.067px,70.291px)
          }
          55.0000% {
            transform:translate(24.349px,69.729px)
          }
          55.3125% {
            transform:translate(24.649px,69.171px)
          }
          55.6250% {
            transform:translate(24.967px,68.616px)
          }
          55.9375% {
            transform:translate(25.302px,68.066px)
          }
          56.2500% {
            transform:translate(25.654px,67.519px)
          }
          56.5625% {
            transform:translate(26.023px,66.978px)
          }
          56.8750% {
            transform:translate(26.409px,66.44px)
          }
          57.1875% {
            transform:translate(26.812px,65.908px)
          }
          57.5000% {
            transform:translate(27.232px,65.38px)
          }
          57.8125% {
            transform:translate(27.668px,64.858px)
          }
          58.1250% {
            transform:translate(28.12px,64.341px)
          }
          58.4375% {
            transform:translate(28.589px,63.83px)
          }
          58.7500% {
            transform:translate(29.073px,63.325px)
          }
          59.0625% {
            transform:translate(29.574px,62.826px)
          }
          59.3750% {
            transform:translate(30.089px,62.333px)
          }
          59.6875% {
            transform:translate(30.621px,61.846px)
          }
          60.0000% {
            transform:translate(31.167px,61.366px)
          }
          60.3125% {
            transform:translate(31.729px,60.893px)
          }
          60.6250% {
            transform:translate(32.305px,60.427px)
          }
          60.9375% {
            transform:translate(32.895px,59.968px)
          }
          61.2500% {
            transform:translate(33.501px,59.517px)
          }
          61.5625% {
            transform:translate(34.12px,59.072px)
          }
          61.8750% {
            transform:translate(34.753px,58.636px)
          }
          62.1875% {
            transform:translate(35.399px,58.207px)
          }
          62.5000% {
            transform:translate(36.059px,57.787px)
          }
          62.8125% {
            transform:translate(36.732px,57.374px)
          }
          63.1250% {
            transform:translate(37.418px,56.97px)
          }
          63.4375% {
            transform:translate(38.116px,56.575px)
          }
          63.7500% {
            transform:translate(38.826px,56.188px)
          }
          64.0625% {
            transform:translate(39.549px,55.81px)
          }
          64.3750% {
            transform:translate(40.283px,55.44px)
          }
          64.6875% {
            transform:translate(41.029px,55.08px)
          }
          65.0000% {
            transform:translate(41.786px,54.729px)
          }
          65.3125% {
            transform:translate(42.554px,54.388px)
          }
          65.6250% {
            transform:translate(43.333px,54.056px)
          }
          65.9375% {
            transform:translate(44.121px,53.733px)
          }
          66.2500% {
            transform:translate(44.92px,53.421px)
          }
          66.5625% {
            transform:translate(45.728px,53.118px)
          }
          66.8750% {
            transform:translate(46.546px,52.825px)
          }
          67.1875% {
            transform:translate(47.373px,52.542px)
          }
          67.5000% {
            transform:translate(48.208px,52.27px)
          }
          67.8125% {
            transform:translate(49.052px,52.008px)
          }
          68.1250% {
            transform:translate(49.904px,51.756px)
          }
          68.4375% {
            transform:translate(50.764px,51.514px)
          }
          68.7500% {
            transform:translate(51.631px,51.284px)
          }
          69.0625% {
            transform:translate(52.505px,51.064px)
          }
          69.3750% {
            transform:translate(53.386px,50.854px)
          }
          69.6875% {
            transform:translate(54.274px,50.656px)
          }
          70.0000% {
            transform:translate(55.167px,50.468px)
          }
          70.3125% {
            transform:translate(56.066px,50.292px)
          }
          70.6250% {
            transform:translate(56.971px,50.126px)
          }
          70.9375% {
            transform:translate(57.88px,49.972px)
          }
          71.2500% {
            transform:translate(58.795px,49.829px)
          }
          71.5625% {
            transform:translate(59.713px,49.697px)
          }
          71.8750% {
            transform:translate(60.636px,49.576px)
          }
          72.1875% {
            transform:translate(61.562px,49.467px)
          }
          72.5000% {
            transform:translate(62.491px,49.369px)
          }
          72.8125% {
            transform:translate(63.423px,49.283px)
          }
          73.1250% {
            transform:translate(64.358px,49.208px)
          }
          73.4375% {
            transform:translate(65.295px,49.144px)
          }
          73.7500% {
            transform:translate(66.234px,49.092px)
          }
          74.0625% {
            transform:translate(67.174px,49.052px)
          }
          74.3750% {
            transform:translate(68.116px,49.023px)
          }
          74.6875% {
            transform:translate(69.058px,49.006px)
          }
          75.0000% {
            transform:translate(70px,49px)
          }
          75.3125% {
            transform:translate(70.942px,49.006px)
          }
          75.6250% {
            transform:translate(71.884px,49.023px)
          }
          75.9375% {
            transform:translate(72.826px,49.052px)
          }
          76.2500% {
            transform:translate(73.766px,49.092px)
          }
          76.5625% {
            transform:translate(74.705px,49.144px)
          }
          76.8750% {
            transform:translate(75.642px,49.208px)
          }
          77.1875% {
            transform:translate(76.577px,49.283px)
          }
          77.5000% {
            transform:translate(77.509px,49.369px)
          }
          77.8125% {
            transform:translate(78.438px,49.467px)
          }
          78.1250% {
            transform:translate(79.364px,49.576px)
          }
          78.4375% {
            transform:translate(80.287px,49.697px)
          }
          78.7500% {
            transform:translate(81.205px,49.829px)
          }
          79.0625% {
            transform:translate(82.12px,49.972px)
          }
          79.3750% {
            transform:translate(83.029px,50.126px)
          }
          79.6875% {
            transform:translate(83.934px,50.292px)
          }
          80.0000% {
            transform:translate(84.833px,50.468px)
          }
          80.3125% {
            transform:translate(85.726px,50.656px)
          }
          80.6250% {
            transform:translate(86.614px,50.854px)
          }
          80.9375% {
            transform:translate(87.495px,51.064px)
          }
          81.2500% {
            transform:translate(88.369px,51.284px)
          }
          81.5625% {
            transform:translate(89.236px,51.514px)
          }
          81.8750% {
            transform:translate(90.096px,51.756px)
          }
          82.1875% {
            transform:translate(90.948px,52.008px)
          }
          82.5000% {
            transform:translate(91.792px,52.27px)
          }
          82.8125% {
            transform:translate(92.627px,52.542px)
          }
          83.1250% {
            transform:translate(93.454px,52.825px)
          }
          83.4375% {
            transform:translate(94.272px,53.118px)
          }
          83.7500% {
            transform:translate(95.08px,53.421px)
          }
          84.0625% {
            transform:translate(95.879px,53.733px)
          }
          84.3750% {
            transform:translate(96.667px,54.056px)
          }
          84.6875% {
            transform:translate(97.446px,54.388px)
          }
          85.0000% {
            transform:translate(98.214px,54.729px)
          }
          85.3125% {
            transform:translate(98.971px,55.08px)
          }
          85.6250% {
            transform:translate(99.717px,55.44px)
          }
          85.9375% {
            transform:translate(100.451px,55.81px)
          }
          86.2500% {
            transform:translate(101.174px,56.188px)
          }
          86.5625% {
            transform:translate(101.884px,56.575px)
          }
          86.8750% {
            transform:translate(102.582px,56.97px)
          }
          87.1875% {
            transform:translate(103.268px,57.374px)
          }
          87.5000% {
            transform:translate(103.941px,57.787px)
          }
          87.8125% {
            transform:translate(104.601px,58.207px)
          }
          88.1250% {
            transform:translate(105.247px,58.636px)
          }
          88.4375% {
            transform:translate(105.88px,59.072px)
          }
          88.7500% {
            transform:translate(106.499px,59.517px)
          }
          89.0625% {
            transform:translate(107.105px,59.968px)
          }
          89.3750% {
            transform:translate(107.695px,60.427px)
          }
          89.6875% {
            transform:translate(108.271px,60.893px)
          }
          90.0000% {
            transform:translate(108.833px,61.366px)
          }
          90.3125% {
            transform:translate(109.379px,61.846px)
          }
          90.6250% {
            transform:translate(109.911px,62.333px)
          }
          90.9375% {
            transform:translate(110.426px,62.826px)
          }
          91.2500% {
            transform:translate(110.927px,63.325px)
          }
          91.5625% {
            transform:translate(111.411px,63.83px)
          }
          91.8750% {
            transform:translate(111.88px,64.341px)
          }
          92.1875% {
            transform:translate(112.332px,64.858px)
          }
          92.5000% {
            transform:translate(112.768px,65.38px)
          }
          92.8125% {
            transform:translate(113.188px,65.908px)
          }
          93.1250% {
            transform:translate(113.591px,66.44px)
          }
          93.4375% {
            transform:translate(113.977px,66.978px)
          }
          93.7500% {
            transform:translate(114.346px,67.519px)
          }
          94.0625% {
            transform:translate(114.698px,68.066px)
          }
          94.3750% {
            transform:translate(115.033px,68.616px)
          }
          94.6875% {
            transform:translate(115.351px,69.171px)
          }
          95.0000% {
            transform:translate(115.651px,69.729px)
          }
          95.3125% {
            transform:translate(115.933px,70.291px)
          }
          95.6250% {
            transform:translate(116.198px,70.857px)
          }
          95.9375% {
            transform:translate(116.445px,71.425px)
          }
          96.2500% {
            transform:translate(116.674px,71.997px)
          }
          96.5625% {
            transform:translate(116.885px,72.571px)
          }
          96.8750% {
            transform:translate(117.078px,73.147px)
          }
          97.1875% {
            transform:translate(117.252px,73.726px)
          }
          97.5000% {
            transform:translate(117.409px,74.307px)
          }
          97.8125% {
            transform:translate(117.547px,74.89px)
          }
          98.1250% {
            transform:translate(117.667px,75.474px)
          }
          98.4375% {
            transform:translate(117.769px,76.059px)
          }
          98.7500% {
            transform:translate(117.852px,76.646px)
          }
          99.0625% {
            transform:translate(117.917px,77.234px)
          }
          99.3750% {
            transform:translate(117.963px,77.822px)
          }
          99.6875% {
            transform:translate(117.991px,78.411px)
          }
          100.0000% {
            transform:translate(118px,79px)
          }
        }
        @keyframes overturn-color-2 {
          0.0000% {
            fill:rgb(119 201 239)
          }
          0.3125% {
            fill:rgb(119 201 239)
          }
          0.6250% {
            fill:rgb(119 201 239)
          }
          0.9375% {
            fill:rgb(119 201 239)
          }
          1.2500% {
            fill:rgb(119 201 239)
          }
          1.5625% {
            fill:rgb(119 201 239)
          }
          1.8750% {
            fill:rgb(119 201 239)
          }
          2.1875% {
            fill:rgb(119 201 239)
          }
          2.5000% {
            fill:rgb(119 201 239)
          }
          2.8125% {
            fill:rgb(119 201 239)
          }
          3.1250% {
            fill:rgb(119 201 239)
          }
          3.4375% {
            fill:rgb(119 201 239)
          }
          3.7500% {
            fill:rgb(119 201 239)
          }
          4.0625% {
            fill:rgb(119 201 239)
          }
          4.3750% {
            fill:rgb(119 201 239)
          }
          4.6875% {
            fill:rgb(119 201 239)
          }
          5.0000% {
            fill:rgb(119 201 239)
          }
          5.3125% {
            fill:rgb(119 201 239)
          }
          5.6250% {
            fill:rgb(119 201 239)
          }
          5.9375% {
            fill:rgb(119 201 239)
          }
          6.2500% {
            fill:rgb(119 201 239)
          }
          6.5625% {
            fill:rgb(119 201 239)
          }
          6.8750% {
            fill:rgb(119 201 239)
          }
          7.1875% {
            fill:rgb(119 201 239)
          }
          7.5000% {
            fill:rgb(119 201 239)
          }
          7.8125% {
            fill:rgb(119 201 239)
          }
          8.1250% {
            fill:rgb(119 201 239)
          }
          8.4375% {
            fill:rgb(119 201 239)
          }
          8.7500% {
            fill:rgb(119 201 239)
          }
          9.0625% {
            fill:rgb(119 201 239)
          }
          9.3750% {
            fill:rgb(119 201 239)
          }
          9.6875% {
            fill:rgb(119 201 239)
          }
          10.0000% {
            fill:rgb(119 201 239)
          }
          10.3125% {
            fill:rgb(119 201 239)
          }
          10.6250% {
            fill:rgb(119 201 239)
          }
          10.9375% {
            fill:rgb(119 201 239)
          }
          11.2500% {
            fill:rgb(119 201 239)
          }
          11.5625% {
            fill:rgb(119 201 239)
          }
          11.8750% {
            fill:rgb(119 201 239)
          }
          12.1875% {
            fill:rgb(119 201 239)
          }
          12.5000% {
            fill:rgb(119 201 239)
          }
          12.8125% {
            fill:rgb(119 201 239)
          }
          13.1250% {
            fill:rgb(119 201 239)
          }
          13.4375% {
            fill:rgb(119 201 239)
          }
          13.7500% {
            fill:rgb(119 201 239)
          }
          14.0625% {
            fill:rgb(119 201 239)
          }
          14.3750% {
            fill:rgb(119 201 239)
          }
          14.6875% {
            fill:rgb(119 201 239)
          }
          15.0000% {
            fill:rgb(119 201 239)
          }
          15.3125% {
            fill:rgb(119 201 239)
          }
          15.6250% {
            fill:rgb(119 201 239)
          }
          15.9375% {
            fill:rgb(119 201 239)
          }
          16.2500% {
            fill:rgb(119 201 239)
          }
          16.5625% {
            fill:rgb(119 201 239)
          }
          16.8750% {
            fill:rgb(119 201 239)
          }
          17.1875% {
            fill:rgb(119 201 239)
          }
          17.5000% {
            fill:rgb(119 201 239)
          }
          17.8125% {
            fill:rgb(119 201 239)
          }
          18.1250% {
            fill:rgb(119 201 239)
          }
          18.4375% {
            fill:rgb(119 201 239)
          }
          18.7500% {
            fill:rgb(119 201 239)
          }
          19.0625% {
            fill:rgb(119 201 239)
          }
          19.3750% {
            fill:rgb(119 201 239)
          }
          19.6875% {
            fill:rgb(119 201 239)
          }
          20.0000% {
            fill:rgb(119 201 239)
          }
          20.3125% {
            fill:rgb(119 201 239)
          }
          20.6250% {
            fill:rgb(119 201 239)
          }
          20.9375% {
            fill:rgb(119 201 239)
          }
          21.2500% {
            fill:rgb(119 201 239)
          }
          21.5625% {
            fill:rgb(119 201 239)
          }
          21.8750% {
            fill:rgb(119 201 239)
          }
          22.1875% {
            fill:rgb(119 201 239)
          }
          22.5000% {
            fill:rgb(119 201 239)
          }
          22.8125% {
            fill:rgb(119 201 239)
          }
          23.1250% {
            fill:rgb(119 201 239)
          }
          23.4375% {
            fill:rgb(119 201 239)
          }
          23.7500% {
            fill:rgb(119 201 239)
          }
          24.0625% {
            fill:rgb(119 201 239)
          }
          24.3750% {
            fill:rgb(119 201 239)
          }
          24.6875% {
            fill:rgb(119 201 239)
          }
          25.0000% {
            fill:rgb(119 201 239)
          }
          25.3125% {
            fill:rgb(119 201 239)
          }
          25.6250% {
            fill:rgb(119 201 239)
          }
          25.9375% {
            fill:rgb(119 201 239)
          }
          26.2500% {
            fill:rgb(119 201 239)
          }
          26.5625% {
            fill:rgb(119 201 239)
          }
          26.8750% {
            fill:rgb(119 201 239)
          }
          27.1875% {
            fill:rgb(119 201 239)
          }
          27.5000% {
            fill:rgb(119 201 239)
          }
          27.8125% {
            fill:rgb(119 201 239)
          }
          28.1250% {
            fill:rgb(119 201 239)
          }
          28.4375% {
            fill:rgb(119 201 239)
          }
          28.7500% {
            fill:rgb(119 201 239)
          }
          29.0625% {
            fill:rgb(119 201 239)
          }
          29.3750% {
            fill:rgb(119 201 239)
          }
          29.6875% {
            fill:rgb(119 201 239)
          }
          30.0000% {
            fill:rgb(119 201 239)
          }
          30.3125% {
            fill:rgb(119 201 239)
          }
          30.6250% {
            fill:rgb(119 201 239)
          }
          30.9375% {
            fill:rgb(119 201 239)
          }
          31.2500% {
            fill:rgb(119 201 239)
          }
          31.5625% {
            fill:rgb(119 201 239)
          }
          31.8750% {
            fill:rgb(119 201 239)
          }
          32.1875% {
            fill:rgb(119 201 239)
          }
          32.5000% {
            fill:rgb(119 201 239)
          }
          32.8125% {
            fill:rgb(119 201 239)
          }
          33.1250% {
            fill:rgb(119 201 239)
          }
          33.4375% {
            fill:rgb(119 201 239)
          }
          33.7500% {
            fill:rgb(119 201 239)
          }
          34.0625% {
            fill:rgb(119 201 239)
          }
          34.3750% {
            fill:rgb(119 201 239)
          }
          34.6875% {
            fill:rgb(119 201 239)
          }
          35.0000% {
            fill:rgb(119 201 239)
          }
          35.3125% {
            fill:rgb(119 201 239)
          }
          35.6250% {
            fill:rgb(119 201 239)
          }
          35.9375% {
            fill:rgb(119 201 239)
          }
          36.2500% {
            fill:rgb(119 201 239)
          }
          36.5625% {
            fill:rgb(119 201 239)
          }
          36.8750% {
            fill:rgb(119 201 239)
          }
          37.1875% {
            fill:rgb(119 201 239)
          }
          37.5000% {
            fill:rgb(119 201 239)
          }
          37.8125% {
            fill:rgb(119 201 239)
          }
          38.1250% {
            fill:rgb(119 201 239)
          }
          38.4375% {
            fill:rgb(119 201 239)
          }
          38.7500% {
            fill:rgb(119 201 239)
          }
          39.0625% {
            fill:rgb(119 201 239)
          }
          39.3750% {
            fill:rgb(119 201 239)
          }
          39.6875% {
            fill:rgb(119 201 239)
          }
          40.0000% {
            fill:rgb(119 201 239)
          }
          40.3125% {
            fill:rgb(119 201 239)
          }
          40.6250% {
            fill:rgb(119 201 239)
          }
          40.9375% {
            fill:rgb(119 201 239)
          }
          41.2500% {
            fill:rgb(119 201 239)
          }
          41.5625% {
            fill:rgb(119 201 239)
          }
          41.8750% {
            fill:rgb(119 201 239)
          }
          42.1875% {
            fill:rgb(119 201 239)
          }
          42.5000% {
            fill:rgb(119 201 239)
          }
          42.8125% {
            fill:rgb(119 201 239)
          }
          43.1250% {
            fill:rgb(119 201 239)
          }
          43.4375% {
            fill:rgb(119 201 239)
          }
          43.7500% {
            fill:rgb(119 201 239)
          }
          44.0625% {
            fill:rgb(119 201 239)
          }
          44.3750% {
            fill:rgb(119 201 239)
          }
          44.6875% {
            fill:rgb(119 201 239)
          }
          45.0000% {
            fill:rgb(119 201 239)
          }
          45.3125% {
            fill:rgb(119 201 239)
          }
          45.6250% {
            fill:rgb(119 201 239)
          }
          45.9375% {
            fill:rgb(119 201 239)
          }
          46.2500% {
            fill:rgb(119 201 239)
          }
          46.5625% {
            fill:rgb(119 201 239)
          }
          46.8750% {
            fill:rgb(119 201 239)
          }
          47.1875% {
            fill:rgb(119 201 239)
          }
          47.5000% {
            fill:rgb(119 201 239)
          }
          47.8125% {
            fill:rgb(119 201 239)
          }
          48.1250% {
            fill:rgb(119 201 239)
          }
          48.4375% {
            fill:rgb(119 201 239)
          }
          48.7500% {
            fill:rgb(119 201 239)
          }
          49.0625% {
            fill:rgb(119 201 239)
          }
          49.3750% {
            fill:rgb(119 201 239)
          }
          49.6875% {
            fill:rgb(119 201 239)
          }
          50.0000% {
            fill:rgb(119 201 239)
          }
          50.3125% {
            fill:rgb(119 201 239)
          }
          50.6250% {
            fill:rgb(119 201 239)
          }
          50.9375% {
            fill:rgb(120 201 239)
          }
          51.2500% {
            fill:rgb(120 201 238)
          }
          51.5625% {
            fill:rgb(120 201 238)
          }
          51.8750% {
            fill:rgb(121 201 237)
          }
          52.1875% {
            fill:rgb(122 201 236)
          }
          52.5000% {
            fill:rgb(122 201 236)
          }
          52.8125% {
            fill:rgb(123 201 235)
          }
          53.1250% {
            fill:rgb(124 201 234)
          }
          53.4375% {
            fill:rgb(125 201 233)
          }
          53.7500% {
            fill:rgb(127 201 232)
          }
          54.0625% {
            fill:rgb(128 201 231)
          }
          54.3750% {
            fill:rgb(129 201 229)
          }
          54.6875% {
            fill:rgb(130 201 228)
          }
          55.0000% {
            fill:rgb(132 201 227)
          }
          55.3125% {
            fill:rgb(133 201 225)
          }
          55.6250% {
            fill:rgb(135 201 224)
          }
          55.9375% {
            fill:rgb(137 201 222)
          }
          56.2500% {
            fill:rgb(138 201 220)
          }
          56.5625% {
            fill:rgb(140 201 219)
          }
          56.8750% {
            fill:rgb(142 201 217)
          }
          57.1875% {
            fill:rgb(144 201 215)
          }
          57.5000% {
            fill:rgb(146 201 213)
          }
          57.8125% {
            fill:rgb(148 201 211)
          }
          58.1250% {
            fill:rgb(150 201 209)
          }
          58.4375% {
            fill:rgb(152 201 207)
          }
          58.7500% {
            fill:rgb(154 201 205)
          }
          59.0625% {
            fill:rgb(156 201 203)
          }
          59.3750% {
            fill:rgb(158 201 201)
          }
          59.6875% {
            fill:rgb(160 201 199)
          }
          60.0000% {
            fill:rgb(163 201 197)
          }
          60.3125% {
            fill:rgb(165 201 195)
          }
          60.6250% {
            fill:rgb(167 201 192)
          }
          60.9375% {
            fill:rgb(169 201 190)
          }
          61.2500% {
            fill:rgb(172 201 188)
          }
          61.5625% {
            fill:rgb(174 201 186)
          }
          61.8750% {
            fill:rgb(176 201 183)
          }
          62.1875% {
            fill:rgb(179 201 181)
          }
          62.5000% {
            fill:rgb(181 201 179)
          }
          62.8125% {
            fill:rgb(183 201 177)
          }
          63.1250% {
            fill:rgb(186 201 175)
          }
          63.4375% {
            fill:rgb(188 201 172)
          }
          63.7500% {
            fill:rgb(190 201 170)
          }
          64.0625% {
            fill:rgb(193 201 168)
          }
          64.3750% {
            fill:rgb(195 201 166)
          }
          64.6875% {
            fill:rgb(197 201 163)
          }
          65.0000% {
            fill:rgb(199 201 161)
          }
          65.3125% {
            fill:rgb(202 201 159)
          }
          65.6250% {
            fill:rgb(204 201 157)
          }
          65.9375% {
            fill:rgb(206 201 155)
          }
          66.2500% {
            fill:rgb(208 201 153)
          }
          66.5625% {
            fill:rgb(210 201 151)
          }
          66.8750% {
            fill:rgb(212 201 149)
          }
          67.1875% {
            fill:rgb(214 201 147)
          }
          67.5000% {
            fill:rgb(216 201 145)
          }
          67.8125% {
            fill:rgb(218 201 143)
          }
          68.1250% {
            fill:rgb(220 201 141)
          }
          68.4375% {
            fill:rgb(222 201 139)
          }
          68.7500% {
            fill:rgb(224 201 138)
          }
          69.0625% {
            fill:rgb(225 201 136)
          }
          69.3750% {
            fill:rgb(227 201 134)
          }
          69.6875% {
            fill:rgb(229 201 133)
          }
          70.0000% {
            fill:rgb(230 201 131)
          }
          70.3125% {
            fill:rgb(232 201 130)
          }
          70.6250% {
            fill:rgb(233 201 129)
          }
          70.9375% {
            fill:rgb(234 201 127)
          }
          71.2500% {
            fill:rgb(235 201 126)
          }
          71.5625% {
            fill:rgb(237 201 125)
          }
          71.8750% {
            fill:rgb(238 201 124)
          }
          72.1875% {
            fill:rgb(239 201 123)
          }
          72.5000% {
            fill:rgb(240 201 122)
          }
          72.8125% {
            fill:rgb(240 201 122)
          }
          73.1250% {
            fill:rgb(241 201 121)
          }
          73.4375% {
            fill:rgb(242 201 120)
          }
          73.7500% {
            fill:rgb(242 201 120)
          }
          74.0625% {
            fill:rgb(242 201 119)
          }
          74.3750% {
            fill:rgb(243 201 119)
          }
          74.6875% {
            fill:rgb(243 201 119)
          }
          75.0000% {
            fill:rgb(243 201 119)
          }
          75.3125% {
            fill:rgb(243 201 119)
          }
          75.6250% {
            fill:rgb(243 201 119)
          }
          75.9375% {
            fill:rgb(243 201 119)
          }
          76.2500% {
            fill:rgb(243 201 119)
          }
          76.5625% {
            fill:rgb(243 201 119)
          }
          76.8750% {
            fill:rgb(243 201 119)
          }
          77.1875% {
            fill:rgb(243 201 119)
          }
          77.5000% {
            fill:rgb(243 201 119)
          }
          77.8125% {
            fill:rgb(243 201 119)
          }
          78.1250% {
            fill:rgb(243 201 119)
          }
          78.4375% {
            fill:rgb(243 201 119)
          }
          78.7500% {
            fill:rgb(243 201 119)
          }
          79.0625% {
            fill:rgb(243 201 119)
          }
          79.3750% {
            fill:rgb(243 201 119)
          }
          79.6875% {
            fill:rgb(243 201 119)
          }
          80.0000% {
            fill:rgb(243 201 119)
          }
          80.3125% {
            fill:rgb(243 201 119)
          }
          80.6250% {
            fill:rgb(243 201 119)
          }
          80.9375% {
            fill:rgb(243 201 119)
          }
          81.2500% {
            fill:rgb(243 201 119)
          }
          81.5625% {
            fill:rgb(243 201 119)
          }
          81.8750% {
            fill:rgb(243 201 119)
          }
          82.1875% {
            fill:rgb(243 201 119)
          }
          82.5000% {
            fill:rgb(243 201 119)
          }
          82.8125% {
            fill:rgb(243 201 119)
          }
          83.1250% {
            fill:rgb(243 201 119)
          }
          83.4375% {
            fill:rgb(243 201 119)
          }
          83.7500% {
            fill:rgb(243 201 119)
          }
          84.0625% {
            fill:rgb(242 201 120)
          }
          84.3750% {
            fill:rgb(242 201 120)
          }
          84.6875% {
            fill:rgb(241 201 121)
          }
          85.0000% {
            fill:rgb(240 201 122)
          }
          85.3125% {
            fill:rgb(238 201 124)
          }
          85.6250% {
            fill:rgb(237 201 125)
          }
          85.9375% {
            fill:rgb(235 201 127)
          }
          86.2500% {
            fill:rgb(233 201 129)
          }
          86.5625% {
            fill:rgb(231 201 131)
          }
          86.8750% {
            fill:rgb(229 201 133)
          }
          87.1875% {
            fill:rgb(226 201 135)
          }
          87.5000% {
            fill:rgb(224 201 138)
          }
          87.8125% {
            fill:rgb(221 201 140)
          }
          88.1250% {
            fill:rgb(218 201 143)
          }
          88.4375% {
            fill:rgb(215 201 146)
          }
          88.7500% {
            fill:rgb(212 201 149)
          }
          89.0625% {
            fill:rgb(209 201 152)
          }
          89.3750% {
            fill:rgb(206 201 155)
          }
          89.6875% {
            fill:rgb(203 201 158)
          }
          90.0000% {
            fill:rgb(199 201 161)
          }
          90.3125% {
            fill:rgb(196 201 165)
          }
          90.6250% {
            fill:rgb(193 201 168)
          }
          90.9375% {
            fill:rgb(189 201 171)
          }
          91.2500% {
            fill:rgb(186 201 175)
          }
          91.5625% {
            fill:rgb(182 201 178)
          }
          91.8750% {
            fill:rgb(179 201 181)
          }
          92.1875% {
            fill:rgb(175 201 185)
          }
          92.5000% {
            fill:rgb(172 201 188)
          }
          92.8125% {
            fill:rgb(168 201 191)
          }
          93.1250% {
            fill:rgb(165 201 195)
          }
          93.4375% {
            fill:rgb(162 201 198)
          }
          93.7500% {
            fill:rgb(158 201 201)
          }
          94.0625% {
            fill:rgb(155 201 204)
          }
          94.3750% {
            fill:rgb(152 201 207)
          }
          94.6875% {
            fill:rgb(149 201 210)
          }
          95.0000% {
            fill:rgb(146 201 213)
          }
          95.3125% {
            fill:rgb(143 201 216)
          }
          95.6250% {
            fill:rgb(140 201 219)
          }
          95.9375% {
            fill:rgb(138 201 221)
          }
          96.2500% {
            fill:rgb(135 201 224)
          }
          96.5625% {
            fill:rgb(133 201 226)
          }
          96.8750% {
            fill:rgb(130 201 228)
          }
          97.1875% {
            fill:rgb(128 201 230)
          }
          97.5000% {
            fill:rgb(127 201 232)
          }
          97.8125% {
            fill:rgb(125 201 233)
          }
          98.1250% {
            fill:rgb(123 201 235)
          }
          98.4375% {
            fill:rgb(122 201 236)
          }
          98.7500% {
            fill:rgb(121 201 237)
          }
          99.0625% {
            fill:rgb(120 201 238)
          }
          99.3750% {
            fill:rgb(120 201 239)
          }
          99.6875% {
            fill:rgb(119 201 239)
          }
          100.0000% {
            fill:rgb(119 201 239)
          }
        }
        @keyframes overturn-mark-2 {
          0.0000% {
            opacity:1
          }
          0.3125% {
            opacity:1
          }
          0.6250% {
            opacity:1
          }
          0.9375% {
            opacity:1
          }
          1.2500% {
            opacity:1
          }
          1.5625% {
            opacity:1
          }
          1.8750% {
            opacity:1
          }
          2.1875% {
            opacity:1
          }
          2.5000% {
            opacity:1
          }
          2.8125% {
            opacity:1
          }
          3.1250% {
            opacity:1
          }
          3.4375% {
            opacity:1
          }
          3.7500% {
            opacity:1
          }
          4.0625% {
            opacity:1
          }
          4.3750% {
            opacity:1
          }
          4.6875% {
            opacity:1
          }
          5.0000% {
            opacity:1
          }
          5.3125% {
            opacity:1
          }
          5.6250% {
            opacity:1
          }
          5.9375% {
            opacity:1
          }
          6.2500% {
            opacity:1
          }
          6.5625% {
            opacity:1
          }
          6.8750% {
            opacity:1
          }
          7.1875% {
            opacity:1
          }
          7.5000% {
            opacity:1
          }
          7.8125% {
            opacity:1
          }
          8.1250% {
            opacity:1
          }
          8.4375% {
            opacity:1
          }
          8.7500% {
            opacity:1
          }
          9.0625% {
            opacity:1
          }
          9.3750% {
            opacity:1
          }
          9.6875% {
            opacity:1
          }
          10.0000% {
            opacity:1
          }
          10.3125% {
            opacity:1
          }
          10.6250% {
            opacity:1
          }
          10.9375% {
            opacity:1
          }
          11.2500% {
            opacity:1
          }
          11.5625% {
            opacity:1
          }
          11.8750% {
            opacity:1
          }
          12.1875% {
            opacity:1
          }
          12.5000% {
            opacity:1
          }
          12.8125% {
            opacity:1
          }
          13.1250% {
            opacity:1
          }
          13.4375% {
            opacity:1
          }
          13.7500% {
            opacity:1
          }
          14.0625% {
            opacity:1
          }
          14.3750% {
            opacity:1
          }
          14.6875% {
            opacity:1
          }
          15.0000% {
            opacity:1
          }
          15.3125% {
            opacity:1
          }
          15.6250% {
            opacity:1
          }
          15.9375% {
            opacity:1
          }
          16.2500% {
            opacity:1
          }
          16.5625% {
            opacity:1
          }
          16.8750% {
            opacity:1
          }
          17.1875% {
            opacity:1
          }
          17.5000% {
            opacity:1
          }
          17.8125% {
            opacity:1
          }
          18.1250% {
            opacity:1
          }
          18.4375% {
            opacity:1
          }
          18.7500% {
            opacity:1
          }
          19.0625% {
            opacity:1
          }
          19.3750% {
            opacity:1
          }
          19.6875% {
            opacity:1
          }
          20.0000% {
            opacity:1
          }
          20.3125% {
            opacity:1
          }
          20.6250% {
            opacity:1
          }
          20.9375% {
            opacity:1
          }
          21.2500% {
            opacity:1
          }
          21.5625% {
            opacity:1
          }
          21.8750% {
            opacity:1
          }
          22.1875% {
            opacity:1
          }
          22.5000% {
            opacity:1
          }
          22.8125% {
            opacity:1
          }
          23.1250% {
            opacity:1
          }
          23.4375% {
            opacity:1
          }
          23.7500% {
            opacity:1
          }
          24.0625% {
            opacity:1
          }
          24.3750% {
            opacity:1
          }
          24.6875% {
            opacity:1
          }
          25.0000% {
            opacity:1
          }
          25.3125% {
            opacity:1
          }
          25.6250% {
            opacity:1
          }
          25.9375% {
            opacity:1
          }
          26.2500% {
            opacity:1
          }
          26.5625% {
            opacity:1
          }
          26.8750% {
            opacity:1
          }
          27.1875% {
            opacity:1
          }
          27.5000% {
            opacity:1
          }
          27.8125% {
            opacity:1
          }
          28.1250% {
            opacity:1
          }
          28.4375% {
            opacity:1
          }
          28.7500% {
            opacity:1
          }
          29.0625% {
            opacity:1
          }
          29.3750% {
            opacity:1
          }
          29.6875% {
            opacity:1
          }
          30.0000% {
            opacity:1
          }
          30.3125% {
            opacity:1
          }
          30.6250% {
            opacity:1
          }
          30.9375% {
            opacity:1
          }
          31.2500% {
            opacity:1
          }
          31.5625% {
            opacity:1
          }
          31.8750% {
            opacity:1
          }
          32.1875% {
            opacity:1
          }
          32.5000% {
            opacity:1
          }
          32.8125% {
            opacity:1
          }
          33.1250% {
            opacity:1
          }
          33.4375% {
            opacity:1
          }
          33.7500% {
            opacity:1
          }
          34.0625% {
            opacity:1
          }
          34.3750% {
            opacity:1
          }
          34.6875% {
            opacity:1
          }
          35.0000% {
            opacity:1
          }
          35.3125% {
            opacity:1
          }
          35.6250% {
            opacity:1
          }
          35.9375% {
            opacity:1
          }
          36.2500% {
            opacity:1
          }
          36.5625% {
            opacity:1
          }
          36.8750% {
            opacity:1
          }
          37.1875% {
            opacity:1
          }
          37.5000% {
            opacity:1
          }
          37.8125% {
            opacity:1
          }
          38.1250% {
            opacity:1
          }
          38.4375% {
            opacity:1
          }
          38.7500% {
            opacity:1
          }
          39.0625% {
            opacity:1
          }
          39.3750% {
            opacity:1
          }
          39.6875% {
            opacity:1
          }
          40.0000% {
            opacity:1
          }
          40.3125% {
            opacity:1
          }
          40.6250% {
            opacity:1
          }
          40.9375% {
            opacity:1
          }
          41.2500% {
            opacity:1
          }
          41.5625% {
            opacity:1
          }
          41.8750% {
            opacity:1
          }
          42.1875% {
            opacity:1
          }
          42.5000% {
            opacity:1
          }
          42.8125% {
            opacity:1
          }
          43.1250% {
            opacity:1
          }
          43.4375% {
            opacity:1
          }
          43.7500% {
            opacity:1
          }
          44.0625% {
            opacity:1
          }
          44.3750% {
            opacity:1
          }
          44.6875% {
            opacity:1
          }
          45.0000% {
            opacity:1
          }
          45.3125% {
            opacity:1
          }
          45.6250% {
            opacity:1
          }
          45.9375% {
            opacity:1
          }
          46.2500% {
            opacity:1
          }
          46.5625% {
            opacity:1
          }
          46.8750% {
            opacity:1
          }
          47.1875% {
            opacity:1
          }
          47.5000% {
            opacity:1
          }
          47.8125% {
            opacity:1
          }
          48.1250% {
            opacity:1
          }
          48.4375% {
            opacity:1
          }
          48.7500% {
            opacity:1
          }
          49.0625% {
            opacity:1
          }
          49.3750% {
            opacity:1
          }
          49.6875% {
            opacity:1
          }
          50.0000% {
            opacity:1
          }
          50.3125% {
            opacity:1.0
          }
          50.6250% {
            opacity:0.998
          }
          50.9375% {
            opacity:0.996
          }
          51.2500% {
            opacity:0.993
          }
          51.5625% {
            opacity:0.989
          }
          51.8750% {
            opacity:0.984
          }
          52.1875% {
            opacity:0.978
          }
          52.5000% {
            opacity:0.972
          }
          52.8125% {
            opacity:0.965
          }
          53.1250% {
            opacity:0.957
          }
          53.4375% {
            opacity:0.948
          }
          53.7500% {
            opacity:0.939
          }
          54.0625% {
            opacity:0.929
          }
          54.3750% {
            opacity:0.919
          }
          54.6875% {
            opacity:0.908
          }
          55.0000% {
            opacity:0.896
          }
          55.3125% {
            opacity:0.884
          }
          55.6250% {
            opacity:0.871
          }
          55.9375% {
            opacity:0.858
          }
          56.2500% {
            opacity:0.844
          }
          56.5625% {
            opacity:0.829
          }
          56.8750% {
            opacity:0.815
          }
          57.1875% {
            opacity:0.8
          }
          57.5000% {
            opacity:0.784
          }
          57.8125% {
            opacity:0.768
          }
          58.1250% {
            opacity:0.752
          }
          58.4375% {
            opacity:0.735
          }
          58.7500% {
            opacity:0.718
          }
          59.0625% {
            opacity:0.701
          }
          59.3750% {
            opacity:0.684
          }
          59.6875% {
            opacity:0.666
          }
          60.0000% {
            opacity:0.648
          }
          60.3125% {
            opacity:0.63
          }
          60.6250% {
            opacity:0.612
          }
          60.9375% {
            opacity:0.593
          }
          61.2500% {
            opacity:0.575
          }
          61.5625% {
            opacity:0.556
          }
          61.8750% {
            opacity:0.537
          }
          62.1875% {
            opacity:0.519
          }
          62.5000% {
            opacity:0.5
          }
          62.8125% {
            opacity:0.481
          }
          63.1250% {
            opacity:0.463
          }
          63.4375% {
            opacity:0.444
          }
          63.7500% {
            opacity:0.425
          }
          64.0625% {
            opacity:0.407
          }
          64.3750% {
            opacity:0.388
          }
          64.6875% {
            opacity:0.37
          }
          65.0000% {
            opacity:0.352
          }
          65.3125% {
            opacity:0.334
          }
          65.6250% {
            opacity:0.316
          }
          65.9375% {
            opacity:0.299
          }
          66.2500% {
            opacity:0.282
          }
          66.5625% {
            opacity:0.265
          }
          66.8750% {
            opacity:0.248
          }
          67.1875% {
            opacity:0.232
          }
          67.5000% {
            opacity:0.216
          }
          67.8125% {
            opacity:0.2
          }
          68.1250% {
            opacity:0.185
          }
          68.4375% {
            opacity:0.171
          }
          68.7500% {
            opacity:0.156
          }
          69.0625% {
            opacity:0.142
          }
          69.3750% {
            opacity:0.129
          }
          69.6875% {
            opacity:0.116
          }
          70.0000% {
            opacity:0.104
          }
          70.3125% {
            opacity:0.092
          }
          70.6250% {
            opacity:0.081
          }
          70.9375% {
            opacity:0.071
          }
          71.2500% {
            opacity:0.061
          }
          71.5625% {
            opacity:0.052
          }
          71.8750% {
            opacity:0.043
          }
          72.1875% {
            opacity:0.035
          }
          72.5000% {
            opacity:0.028
          }
          72.8125% {
            opacity:0.022
          }
          73.1250% {
            opacity:0.016
          }
          73.4375% {
            opacity:0.011
          }
          73.7500% {
            opacity:0.007
          }
          74.0625% {
            opacity:0.004
          }
          74.3750% {
            opacity:0.002
          }
          74.6875% {
            opacity:0.0
          }
          75.0000% {
            opacity:0
          }
          75.3125% {
            opacity:0
          }
          75.6250% {
            opacity:0
          }
          75.9375% {
            opacity:0
          }
          76.2500% {
            opacity:0
          }
          76.5625% {
            opacity:0
          }
          76.8750% {
            opacity:0
          }
          77.1875% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          77.8125% {
            opacity:0
          }
          78.1250% {
            opacity:0
          }
          78.4375% {
            opacity:0
          }
          78.7500% {
            opacity:0
          }
          79.0625% {
            opacity:0
          }
          79.3750% {
            opacity:0
          }
          79.6875% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.3125% {
            opacity:0
          }
          80.6250% {
            opacity:0
          }
          80.9375% {
            opacity:0
          }
          81.2500% {
            opacity:0
          }
          81.5625% {
            opacity:0
          }
          81.8750% {
            opacity:0
          }
          82.1875% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          82.8125% {
            opacity:0
          }
          83.1250% {
            opacity:0
          }
          83.4375% {
            opacity:0.0
          }
          83.7500% {
            opacity:0.002
          }
          84.0625% {
            opacity:0.006
          }
          84.3750% {
            opacity:0.011
          }
          84.6875% {
            opacity:0.019
          }
          85.0000% {
            opacity:0.028
          }
          85.3125% {
            opacity:0.039
          }
          85.6250% {
            opacity:0.052
          }
          85.9375% {
            opacity:0.066
          }
          86.2500% {
            opacity:0.081
          }
          86.5625% {
            opacity:0.098
          }
          86.8750% {
            opacity:0.116
          }
          87.1875% {
            opacity:0.136
          }
          87.5000% {
            opacity:0.156
          }
          87.8125% {
            opacity:0.178
          }
          88.1250% {
            opacity:0.2
          }
          88.4375% {
            opacity:0.224
          }
          88.7500% {
            opacity:0.248
          }
          89.0625% {
            opacity:0.273
          }
          89.3750% {
            opacity:0.299
          }
          89.6875% {
            opacity:0.325
          }
          90.0000% {
            opacity:0.352
          }
          90.3125% {
            opacity:0.379
          }
          90.6250% {
            opacity:0.407
          }
          90.9375% {
            opacity:0.435
          }
          91.2500% {
            opacity:0.463
          }
          91.5625% {
            opacity:0.491
          }
          91.8750% {
            opacity:0.519
          }
          92.1875% {
            opacity:0.547
          }
          92.5000% {
            opacity:0.575
          }
          92.8125% {
            opacity:0.602
          }
          93.1250% {
            opacity:0.63
          }
          93.4375% {
            opacity:0.657
          }
          93.7500% {
            opacity:0.684
          }
          94.0625% {
            opacity:0.71
          }
          94.3750% {
            opacity:0.735
          }
          94.6875% {
            opacity:0.76
          }
          95.0000% {
            opacity:0.784
          }
          95.3125% {
            opacity:0.807
          }
          95.6250% {
            opacity:0.829
          }
          95.9375% {
            opacity:0.851
          }
          96.2500% {
            opacity:0.871
          }
          96.5625% {
            opacity:0.89
          }
          96.8750% {
            opacity:0.908
          }
          97.1875% {
            opacity:0.924
          }
          97.5000% {
            opacity:0.939
          }
          97.8125% {
            opacity:0.953
          }
          98.1250% {
            opacity:0.965
          }
          98.4375% {
            opacity:0.975
          }
          98.7500% {
            opacity:0.984
          }
          99.0625% {
            opacity:0.991
          }
          99.3750% {
            opacity:0.996
          }
          99.6875% {
            opacity:0.999
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes overturn-fleck-2 {
          0.0000% {
            transform:translate(118px,79px);
            opacity:0
          }
          0.3125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          0.6250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          0.9375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          1.2500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          1.5625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          1.8750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          2.1875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          2.5000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          2.8125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          3.1250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          3.4375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          3.7500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          4.0625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          4.3750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          4.6875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          5.0000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          5.3125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          5.6250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          5.9375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          6.2500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          6.5625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          6.8750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          7.1875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          7.5000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          7.8125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          8.1250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          8.4375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          8.7500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          9.0625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          9.3750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          9.6875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          10.0000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          10.3125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          10.6250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          10.9375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          11.2500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          11.5625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          11.8750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          12.1875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          12.5000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          12.8125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          13.1250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          13.4375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          13.7500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          14.0625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          14.3750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          14.6875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          15.0000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          15.3125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          15.6250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          15.9375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          16.2500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          16.5625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          16.8750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          17.1875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          17.5000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          17.8125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          18.1250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          18.4375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          18.7500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          19.0625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          19.3750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          19.6875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          20.0000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          20.3125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          20.6250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          20.9375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          21.2500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          21.5625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          21.8750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          22.1875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          22.5000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          22.8125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          23.1250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          23.4375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          23.7500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          24.0625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          24.3750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          24.6875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          25.0000% {
            transform:translate(70px,109px);
            opacity:0
          }
          25.3125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          25.6250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          25.9375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          26.2500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          26.5625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          26.8750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          27.1875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          27.5000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          27.8125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          28.1250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          28.4375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          28.7500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          29.0625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          29.3750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          29.6875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          30.0000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          30.3125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          30.6250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          30.9375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          31.2500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          31.5625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          31.8750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          32.1875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          32.5000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          32.8125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          33.1250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          33.4375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          33.7500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          34.0625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          34.3750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          34.6875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          35.0000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          35.3125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          35.6250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          35.9375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          36.2500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          36.5625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          36.8750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          37.1875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          37.5000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          37.8125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          38.1250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          38.4375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          38.7500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          39.0625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          39.3750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          39.6875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          40.0000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          40.3125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          40.6250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          40.9375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          41.2500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          41.5625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          41.8750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          42.1875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          42.5000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          42.8125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          43.1250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          43.4375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          43.7500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          44.0625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          44.3750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          44.6875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          45.0000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          45.3125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          45.6250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          45.9375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          46.2500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          46.5625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          46.8750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          47.1875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          47.5000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          47.8125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          48.1250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          48.4375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          48.7500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          49.0625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          49.3750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          49.6875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          50.0000% {
            transform:translate(22px,79px);
            opacity:0
          }
          50.3125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          50.6250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          50.9375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          51.2500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          51.5625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          51.8750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          52.1875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          52.5000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          52.8125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          53.1250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          53.4375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          53.7500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          54.0625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          54.3750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          54.6875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          55.0000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          55.3125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          55.6250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          55.9375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          56.2500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          56.5625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          56.8750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          57.1875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          57.5000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          57.8125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          58.1250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          58.4375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          58.7500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          59.0625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          59.3750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          59.6875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          60.0000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          60.3125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          60.6250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          60.9375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          61.2500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          61.5625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          61.8750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          62.1875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          62.5000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          62.8125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          63.1250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          63.4375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          63.7500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          64.0625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          64.3750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          64.6875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          65.0000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          65.3125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          65.6250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          65.9375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          66.2500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          66.5625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          66.8750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          67.1875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          67.5000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          67.8125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          68.1250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          68.4375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          68.7500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          69.0625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          69.3750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          69.6875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          70.0000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          70.3125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          70.6250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          70.9375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          71.2500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          71.5625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          71.8750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          72.1875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          72.5000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          72.8125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          73.1250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          73.4375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          73.7500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          74.0625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          74.3750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          74.6875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          75.0000% {
            transform:translate(70px,44px);
            opacity:0
          }
          75.3125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          75.6250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          75.9375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          76.2500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          76.5625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          76.8750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          77.1875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          77.5000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          77.8125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          78.1250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          78.4375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          78.7500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          79.0625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          79.3750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          79.6875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          80.0000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          80.3125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          80.6250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          80.9375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          81.2500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          81.5625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          81.8750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          82.1875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          82.5000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          82.8125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          83.1250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          83.4375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          83.7500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          84.0625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          84.3750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          84.6875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          85.0000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          85.3125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          85.6250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          85.9375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          86.2500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          86.5625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          86.8750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          87.1875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          87.5000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          87.8125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          88.1250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          88.4375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          88.7500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          89.0625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          89.3750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          89.6875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          90.0000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          90.3125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          90.6250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          90.9375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          91.2500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          91.5625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          91.8750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          92.1875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          92.5000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          92.8125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          93.1250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          93.4375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          93.7500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          94.0625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          94.3750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          94.6875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          95.0000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          95.3125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          95.6250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          95.9375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          96.2500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          96.5625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          96.8750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          97.1875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          97.5000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          97.8125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          98.1250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          98.4375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          98.7500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          99.0625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          99.3750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          99.6875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          100.0000% {
            transform:translate(118px,79px);
            opacity:0
          }
        }
        .parcel-3 {
          animation:overturn-parcel-3 16s linear infinite
        }
        .color-3 {
          animation:overturn-color-3 16s linear infinite
        }
        .mark-3 {
          animation:overturn-mark-3 16s linear infinite
        }
        .fleck-3 {
          animation:overturn-fleck-3 16s linear infinite
        }
        @keyframes overturn-parcel-3 {
          0.0000% {
            transform:translate(103.941px,100.213px)
          }
          0.3125% {
            transform:translate(103.268px,100.626px)
          }
          0.6250% {
            transform:translate(102.582px,101.03px)
          }
          0.9375% {
            transform:translate(101.884px,101.425px)
          }
          1.2500% {
            transform:translate(101.174px,101.812px)
          }
          1.5625% {
            transform:translate(100.451px,102.19px)
          }
          1.8750% {
            transform:translate(99.717px,102.56px)
          }
          2.1875% {
            transform:translate(98.971px,102.92px)
          }
          2.5000% {
            transform:translate(98.214px,103.271px)
          }
          2.8125% {
            transform:translate(97.446px,103.612px)
          }
          3.1250% {
            transform:translate(96.667px,103.944px)
          }
          3.4375% {
            transform:translate(95.879px,104.267px)
          }
          3.7500% {
            transform:translate(95.08px,104.579px)
          }
          4.0625% {
            transform:translate(94.272px,104.882px)
          }
          4.3750% {
            transform:translate(93.454px,105.175px)
          }
          4.6875% {
            transform:translate(92.627px,105.458px)
          }
          5.0000% {
            transform:translate(91.792px,105.73px)
          }
          5.3125% {
            transform:translate(90.948px,105.992px)
          }
          5.6250% {
            transform:translate(90.096px,106.244px)
          }
          5.9375% {
            transform:translate(89.236px,106.486px)
          }
          6.2500% {
            transform:translate(88.369px,106.716px)
          }
          6.5625% {
            transform:translate(87.495px,106.936px)
          }
          6.8750% {
            transform:translate(86.614px,107.146px)
          }
          7.1875% {
            transform:translate(85.726px,107.344px)
          }
          7.5000% {
            transform:translate(84.833px,107.532px)
          }
          7.8125% {
            transform:translate(83.934px,107.708px)
          }
          8.1250% {
            transform:translate(83.029px,107.874px)
          }
          8.4375% {
            transform:translate(82.12px,108.028px)
          }
          8.7500% {
            transform:translate(81.205px,108.171px)
          }
          9.0625% {
            transform:translate(80.287px,108.303px)
          }
          9.3750% {
            transform:translate(79.364px,108.424px)
          }
          9.6875% {
            transform:translate(78.438px,108.533px)
          }
          10.0000% {
            transform:translate(77.509px,108.631px)
          }
          10.3125% {
            transform:translate(76.577px,108.717px)
          }
          10.6250% {
            transform:translate(75.642px,108.792px)
          }
          10.9375% {
            transform:translate(74.705px,108.856px)
          }
          11.2500% {
            transform:translate(73.766px,108.908px)
          }
          11.5625% {
            transform:translate(72.826px,108.948px)
          }
          11.8750% {
            transform:translate(71.884px,108.977px)
          }
          12.1875% {
            transform:translate(70.942px,108.994px)
          }
          12.5000% {
            transform:translate(70px,109px)
          }
          12.8125% {
            transform:translate(69.058px,108.994px)
          }
          13.1250% {
            transform:translate(68.116px,108.977px)
          }
          13.4375% {
            transform:translate(67.174px,108.948px)
          }
          13.7500% {
            transform:translate(66.234px,108.908px)
          }
          14.0625% {
            transform:translate(65.295px,108.856px)
          }
          14.3750% {
            transform:translate(64.358px,108.792px)
          }
          14.6875% {
            transform:translate(63.423px,108.717px)
          }
          15.0000% {
            transform:translate(62.491px,108.631px)
          }
          15.3125% {
            transform:translate(61.562px,108.533px)
          }
          15.6250% {
            transform:translate(60.636px,108.424px)
          }
          15.9375% {
            transform:translate(59.713px,108.303px)
          }
          16.2500% {
            transform:translate(58.795px,108.171px)
          }
          16.5625% {
            transform:translate(57.88px,108.028px)
          }
          16.8750% {
            transform:translate(56.971px,107.874px)
          }
          17.1875% {
            transform:translate(56.066px,107.708px)
          }
          17.5000% {
            transform:translate(55.167px,107.532px)
          }
          17.8125% {
            transform:translate(54.274px,107.344px)
          }
          18.1250% {
            transform:translate(53.386px,107.146px)
          }
          18.4375% {
            transform:translate(52.505px,106.936px)
          }
          18.7500% {
            transform:translate(51.631px,106.716px)
          }
          19.0625% {
            transform:translate(50.764px,106.486px)
          }
          19.3750% {
            transform:translate(49.904px,106.244px)
          }
          19.6875% {
            transform:translate(49.052px,105.992px)
          }
          20.0000% {
            transform:translate(48.208px,105.73px)
          }
          20.3125% {
            transform:translate(47.373px,105.458px)
          }
          20.6250% {
            transform:translate(46.546px,105.175px)
          }
          20.9375% {
            transform:translate(45.728px,104.882px)
          }
          21.2500% {
            transform:translate(44.92px,104.579px)
          }
          21.5625% {
            transform:translate(44.121px,104.267px)
          }
          21.8750% {
            transform:translate(43.333px,103.944px)
          }
          22.1875% {
            transform:translate(42.554px,103.612px)
          }
          22.5000% {
            transform:translate(41.786px,103.271px)
          }
          22.8125% {
            transform:translate(41.029px,102.92px)
          }
          23.1250% {
            transform:translate(40.283px,102.56px)
          }
          23.4375% {
            transform:translate(39.549px,102.19px)
          }
          23.7500% {
            transform:translate(38.826px,101.812px)
          }
          24.0625% {
            transform:translate(38.116px,101.425px)
          }
          24.3750% {
            transform:translate(37.418px,101.03px)
          }
          24.6875% {
            transform:translate(36.732px,100.626px)
          }
          25.0000% {
            transform:translate(36.059px,100.213px)
          }
          25.3125% {
            transform:translate(35.399px,99.793px)
          }
          25.6250% {
            transform:translate(34.753px,99.364px)
          }
          25.9375% {
            transform:translate(34.12px,98.928px)
          }
          26.2500% {
            transform:translate(33.501px,98.483px)
          }
          26.5625% {
            transform:translate(32.895px,98.032px)
          }
          26.8750% {
            transform:translate(32.305px,97.573px)
          }
          27.1875% {
            transform:translate(31.729px,97.107px)
          }
          27.5000% {
            transform:translate(31.167px,96.634px)
          }
          27.8125% {
            transform:translate(30.621px,96.154px)
          }
          28.1250% {
            transform:translate(30.089px,95.667px)
          }
          28.4375% {
            transform:translate(29.574px,95.174px)
          }
          28.7500% {
            transform:translate(29.073px,94.675px)
          }
          29.0625% {
            transform:translate(28.589px,94.17px)
          }
          29.3750% {
            transform:translate(28.12px,93.659px)
          }
          29.6875% {
            transform:translate(27.668px,93.142px)
          }
          30.0000% {
            transform:translate(27.232px,92.62px)
          }
          30.3125% {
            transform:translate(26.812px,92.092px)
          }
          30.6250% {
            transform:translate(26.409px,91.56px)
          }
          30.9375% {
            transform:translate(26.023px,91.022px)
          }
          31.2500% {
            transform:translate(25.654px,90.481px)
          }
          31.5625% {
            transform:translate(25.302px,89.934px)
          }
          31.8750% {
            transform:translate(24.967px,89.384px)
          }
          32.1875% {
            transform:translate(24.649px,88.829px)
          }
          32.5000% {
            transform:translate(24.349px,88.271px)
          }
          32.8125% {
            transform:translate(24.067px,87.709px)
          }
          33.1250% {
            transform:translate(23.802px,87.143px)
          }
          33.4375% {
            transform:translate(23.555px,86.575px)
          }
          33.7500% {
            transform:translate(23.326px,86.003px)
          }
          34.0625% {
            transform:translate(23.115px,85.429px)
          }
          34.3750% {
            transform:translate(22.922px,84.853px)
          }
          34.6875% {
            transform:translate(22.748px,84.274px)
          }
          35.0000% {
            transform:translate(22.591px,83.693px)
          }
          35.3125% {
            transform:translate(22.453px,83.11px)
          }
          35.6250% {
            transform:translate(22.333px,82.526px)
          }
          35.9375% {
            transform:translate(22.231px,81.941px)
          }
          36.2500% {
            transform:translate(22.148px,81.354px)
          }
          36.5625% {
            transform:translate(22.083px,80.766px)
          }
          36.8750% {
            transform:translate(22.037px,80.178px)
          }
          37.1875% {
            transform:translate(22.009px,79.589px)
          }
          37.5000% {
            transform:translate(22px,79px)
          }
          37.8125% {
            transform:translate(22.009px,78.411px)
          }
          38.1250% {
            transform:translate(22.037px,77.822px)
          }
          38.4375% {
            transform:translate(22.083px,77.234px)
          }
          38.7500% {
            transform:translate(22.148px,76.646px)
          }
          39.0625% {
            transform:translate(22.231px,76.059px)
          }
          39.3750% {
            transform:translate(22.333px,75.474px)
          }
          39.6875% {
            transform:translate(22.453px,74.89px)
          }
          40.0000% {
            transform:translate(22.591px,74.307px)
          }
          40.3125% {
            transform:translate(22.748px,73.726px)
          }
          40.6250% {
            transform:translate(22.922px,73.147px)
          }
          40.9375% {
            transform:translate(23.115px,72.571px)
          }
          41.2500% {
            transform:translate(23.326px,71.997px)
          }
          41.5625% {
            transform:translate(23.555px,71.425px)
          }
          41.8750% {
            transform:translate(23.802px,70.857px)
          }
          42.1875% {
            transform:translate(24.067px,70.291px)
          }
          42.5000% {
            transform:translate(24.349px,69.729px)
          }
          42.8125% {
            transform:translate(24.649px,69.171px)
          }
          43.1250% {
            transform:translate(24.967px,68.616px)
          }
          43.4375% {
            transform:translate(25.302px,68.066px)
          }
          43.7500% {
            transform:translate(25.654px,67.519px)
          }
          44.0625% {
            transform:translate(26.023px,66.978px)
          }
          44.3750% {
            transform:translate(26.409px,66.44px)
          }
          44.6875% {
            transform:translate(26.812px,65.908px)
          }
          45.0000% {
            transform:translate(27.232px,65.38px)
          }
          45.3125% {
            transform:translate(27.668px,64.858px)
          }
          45.6250% {
            transform:translate(28.12px,64.341px)
          }
          45.9375% {
            transform:translate(28.589px,63.83px)
          }
          46.2500% {
            transform:translate(29.073px,63.325px)
          }
          46.5625% {
            transform:translate(29.574px,62.826px)
          }
          46.8750% {
            transform:translate(30.089px,62.333px)
          }
          47.1875% {
            transform:translate(30.621px,61.846px)
          }
          47.5000% {
            transform:translate(31.167px,61.366px)
          }
          47.8125% {
            transform:translate(31.729px,60.893px)
          }
          48.1250% {
            transform:translate(32.305px,60.427px)
          }
          48.4375% {
            transform:translate(32.895px,59.968px)
          }
          48.7500% {
            transform:translate(33.501px,59.517px)
          }
          49.0625% {
            transform:translate(34.12px,59.072px)
          }
          49.3750% {
            transform:translate(34.753px,58.636px)
          }
          49.6875% {
            transform:translate(35.399px,58.207px)
          }
          50.0000% {
            transform:translate(36.059px,57.787px)
          }
          50.3125% {
            transform:translate(36.732px,57.374px)
          }
          50.6250% {
            transform:translate(37.418px,56.97px)
          }
          50.9375% {
            transform:translate(38.116px,56.575px)
          }
          51.2500% {
            transform:translate(38.826px,56.188px)
          }
          51.5625% {
            transform:translate(39.549px,55.81px)
          }
          51.8750% {
            transform:translate(40.283px,55.44px)
          }
          52.1875% {
            transform:translate(41.029px,55.08px)
          }
          52.5000% {
            transform:translate(41.786px,54.729px)
          }
          52.8125% {
            transform:translate(42.554px,54.388px)
          }
          53.1250% {
            transform:translate(43.333px,54.056px)
          }
          53.4375% {
            transform:translate(44.121px,53.733px)
          }
          53.7500% {
            transform:translate(44.92px,53.421px)
          }
          54.0625% {
            transform:translate(45.728px,53.118px)
          }
          54.3750% {
            transform:translate(46.546px,52.825px)
          }
          54.6875% {
            transform:translate(47.373px,52.542px)
          }
          55.0000% {
            transform:translate(48.208px,52.27px)
          }
          55.3125% {
            transform:translate(49.052px,52.008px)
          }
          55.6250% {
            transform:translate(49.904px,51.756px)
          }
          55.9375% {
            transform:translate(50.764px,51.514px)
          }
          56.2500% {
            transform:translate(51.631px,51.284px)
          }
          56.5625% {
            transform:translate(52.505px,51.064px)
          }
          56.8750% {
            transform:translate(53.386px,50.854px)
          }
          57.1875% {
            transform:translate(54.274px,50.656px)
          }
          57.5000% {
            transform:translate(55.167px,50.468px)
          }
          57.8125% {
            transform:translate(56.066px,50.292px)
          }
          58.1250% {
            transform:translate(56.971px,50.126px)
          }
          58.4375% {
            transform:translate(57.88px,49.972px)
          }
          58.7500% {
            transform:translate(58.795px,49.829px)
          }
          59.0625% {
            transform:translate(59.713px,49.697px)
          }
          59.3750% {
            transform:translate(60.636px,49.576px)
          }
          59.6875% {
            transform:translate(61.562px,49.467px)
          }
          60.0000% {
            transform:translate(62.491px,49.369px)
          }
          60.3125% {
            transform:translate(63.423px,49.283px)
          }
          60.6250% {
            transform:translate(64.358px,49.208px)
          }
          60.9375% {
            transform:translate(65.295px,49.144px)
          }
          61.2500% {
            transform:translate(66.234px,49.092px)
          }
          61.5625% {
            transform:translate(67.174px,49.052px)
          }
          61.8750% {
            transform:translate(68.116px,49.023px)
          }
          62.1875% {
            transform:translate(69.058px,49.006px)
          }
          62.5000% {
            transform:translate(70px,49px)
          }
          62.8125% {
            transform:translate(70.942px,49.006px)
          }
          63.1250% {
            transform:translate(71.884px,49.023px)
          }
          63.4375% {
            transform:translate(72.826px,49.052px)
          }
          63.7500% {
            transform:translate(73.766px,49.092px)
          }
          64.0625% {
            transform:translate(74.705px,49.144px)
          }
          64.3750% {
            transform:translate(75.642px,49.208px)
          }
          64.6875% {
            transform:translate(76.577px,49.283px)
          }
          65.0000% {
            transform:translate(77.509px,49.369px)
          }
          65.3125% {
            transform:translate(78.438px,49.467px)
          }
          65.6250% {
            transform:translate(79.364px,49.576px)
          }
          65.9375% {
            transform:translate(80.287px,49.697px)
          }
          66.2500% {
            transform:translate(81.205px,49.829px)
          }
          66.5625% {
            transform:translate(82.12px,49.972px)
          }
          66.8750% {
            transform:translate(83.029px,50.126px)
          }
          67.1875% {
            transform:translate(83.934px,50.292px)
          }
          67.5000% {
            transform:translate(84.833px,50.468px)
          }
          67.8125% {
            transform:translate(85.726px,50.656px)
          }
          68.1250% {
            transform:translate(86.614px,50.854px)
          }
          68.4375% {
            transform:translate(87.495px,51.064px)
          }
          68.7500% {
            transform:translate(88.369px,51.284px)
          }
          69.0625% {
            transform:translate(89.236px,51.514px)
          }
          69.3750% {
            transform:translate(90.096px,51.756px)
          }
          69.6875% {
            transform:translate(90.948px,52.008px)
          }
          70.0000% {
            transform:translate(91.792px,52.27px)
          }
          70.3125% {
            transform:translate(92.627px,52.542px)
          }
          70.6250% {
            transform:translate(93.454px,52.825px)
          }
          70.9375% {
            transform:translate(94.272px,53.118px)
          }
          71.2500% {
            transform:translate(95.08px,53.421px)
          }
          71.5625% {
            transform:translate(95.879px,53.733px)
          }
          71.8750% {
            transform:translate(96.667px,54.056px)
          }
          72.1875% {
            transform:translate(97.446px,54.388px)
          }
          72.5000% {
            transform:translate(98.214px,54.729px)
          }
          72.8125% {
            transform:translate(98.971px,55.08px)
          }
          73.1250% {
            transform:translate(99.717px,55.44px)
          }
          73.4375% {
            transform:translate(100.451px,55.81px)
          }
          73.7500% {
            transform:translate(101.174px,56.188px)
          }
          74.0625% {
            transform:translate(101.884px,56.575px)
          }
          74.3750% {
            transform:translate(102.582px,56.97px)
          }
          74.6875% {
            transform:translate(103.268px,57.374px)
          }
          75.0000% {
            transform:translate(103.941px,57.787px)
          }
          75.3125% {
            transform:translate(104.601px,58.207px)
          }
          75.6250% {
            transform:translate(105.247px,58.636px)
          }
          75.9375% {
            transform:translate(105.88px,59.072px)
          }
          76.2500% {
            transform:translate(106.499px,59.517px)
          }
          76.5625% {
            transform:translate(107.105px,59.968px)
          }
          76.8750% {
            transform:translate(107.695px,60.427px)
          }
          77.1875% {
            transform:translate(108.271px,60.893px)
          }
          77.5000% {
            transform:translate(108.833px,61.366px)
          }
          77.8125% {
            transform:translate(109.379px,61.846px)
          }
          78.1250% {
            transform:translate(109.911px,62.333px)
          }
          78.4375% {
            transform:translate(110.426px,62.826px)
          }
          78.7500% {
            transform:translate(110.927px,63.325px)
          }
          79.0625% {
            transform:translate(111.411px,63.83px)
          }
          79.3750% {
            transform:translate(111.88px,64.341px)
          }
          79.6875% {
            transform:translate(112.332px,64.858px)
          }
          80.0000% {
            transform:translate(112.768px,65.38px)
          }
          80.3125% {
            transform:translate(113.188px,65.908px)
          }
          80.6250% {
            transform:translate(113.591px,66.44px)
          }
          80.9375% {
            transform:translate(113.977px,66.978px)
          }
          81.2500% {
            transform:translate(114.346px,67.519px)
          }
          81.5625% {
            transform:translate(114.698px,68.066px)
          }
          81.8750% {
            transform:translate(115.033px,68.616px)
          }
          82.1875% {
            transform:translate(115.351px,69.171px)
          }
          82.5000% {
            transform:translate(115.651px,69.729px)
          }
          82.8125% {
            transform:translate(115.933px,70.291px)
          }
          83.1250% {
            transform:translate(116.198px,70.857px)
          }
          83.4375% {
            transform:translate(116.445px,71.425px)
          }
          83.7500% {
            transform:translate(116.674px,71.997px)
          }
          84.0625% {
            transform:translate(116.885px,72.571px)
          }
          84.3750% {
            transform:translate(117.078px,73.147px)
          }
          84.6875% {
            transform:translate(117.252px,73.726px)
          }
          85.0000% {
            transform:translate(117.409px,74.307px)
          }
          85.3125% {
            transform:translate(117.547px,74.89px)
          }
          85.6250% {
            transform:translate(117.667px,75.474px)
          }
          85.9375% {
            transform:translate(117.769px,76.059px)
          }
          86.2500% {
            transform:translate(117.852px,76.646px)
          }
          86.5625% {
            transform:translate(117.917px,77.234px)
          }
          86.8750% {
            transform:translate(117.963px,77.822px)
          }
          87.1875% {
            transform:translate(117.991px,78.411px)
          }
          87.5000% {
            transform:translate(118px,79px)
          }
          87.8125% {
            transform:translate(117.991px,79.589px)
          }
          88.1250% {
            transform:translate(117.963px,80.178px)
          }
          88.4375% {
            transform:translate(117.917px,80.766px)
          }
          88.7500% {
            transform:translate(117.852px,81.354px)
          }
          89.0625% {
            transform:translate(117.769px,81.941px)
          }
          89.3750% {
            transform:translate(117.667px,82.526px)
          }
          89.6875% {
            transform:translate(117.547px,83.11px)
          }
          90.0000% {
            transform:translate(117.409px,83.693px)
          }
          90.3125% {
            transform:translate(117.252px,84.274px)
          }
          90.6250% {
            transform:translate(117.078px,84.853px)
          }
          90.9375% {
            transform:translate(116.885px,85.429px)
          }
          91.2500% {
            transform:translate(116.674px,86.003px)
          }
          91.5625% {
            transform:translate(116.445px,86.575px)
          }
          91.8750% {
            transform:translate(116.198px,87.143px)
          }
          92.1875% {
            transform:translate(115.933px,87.709px)
          }
          92.5000% {
            transform:translate(115.651px,88.271px)
          }
          92.8125% {
            transform:translate(115.351px,88.829px)
          }
          93.1250% {
            transform:translate(115.033px,89.384px)
          }
          93.4375% {
            transform:translate(114.698px,89.934px)
          }
          93.7500% {
            transform:translate(114.346px,90.481px)
          }
          94.0625% {
            transform:translate(113.977px,91.022px)
          }
          94.3750% {
            transform:translate(113.591px,91.56px)
          }
          94.6875% {
            transform:translate(113.188px,92.092px)
          }
          95.0000% {
            transform:translate(112.768px,92.62px)
          }
          95.3125% {
            transform:translate(112.332px,93.142px)
          }
          95.6250% {
            transform:translate(111.88px,93.659px)
          }
          95.9375% {
            transform:translate(111.411px,94.17px)
          }
          96.2500% {
            transform:translate(110.927px,94.675px)
          }
          96.5625% {
            transform:translate(110.426px,95.174px)
          }
          96.8750% {
            transform:translate(109.911px,95.667px)
          }
          97.1875% {
            transform:translate(109.379px,96.154px)
          }
          97.5000% {
            transform:translate(108.833px,96.634px)
          }
          97.8125% {
            transform:translate(108.271px,97.107px)
          }
          98.1250% {
            transform:translate(107.695px,97.573px)
          }
          98.4375% {
            transform:translate(107.105px,98.032px)
          }
          98.7500% {
            transform:translate(106.499px,98.483px)
          }
          99.0625% {
            transform:translate(105.88px,98.928px)
          }
          99.3750% {
            transform:translate(105.247px,99.364px)
          }
          99.6875% {
            transform:translate(104.601px,99.793px)
          }
          100.0000% {
            transform:translate(103.941px,100.213px)
          }
        }
        @keyframes overturn-color-3 {
          0.0000% {
            fill:rgb(119 201 239)
          }
          0.3125% {
            fill:rgb(119 201 239)
          }
          0.6250% {
            fill:rgb(119 201 239)
          }
          0.9375% {
            fill:rgb(119 201 239)
          }
          1.2500% {
            fill:rgb(119 201 239)
          }
          1.5625% {
            fill:rgb(119 201 239)
          }
          1.8750% {
            fill:rgb(119 201 239)
          }
          2.1875% {
            fill:rgb(119 201 239)
          }
          2.5000% {
            fill:rgb(119 201 239)
          }
          2.8125% {
            fill:rgb(119 201 239)
          }
          3.1250% {
            fill:rgb(119 201 239)
          }
          3.4375% {
            fill:rgb(119 201 239)
          }
          3.7500% {
            fill:rgb(119 201 239)
          }
          4.0625% {
            fill:rgb(119 201 239)
          }
          4.3750% {
            fill:rgb(119 201 239)
          }
          4.6875% {
            fill:rgb(119 201 239)
          }
          5.0000% {
            fill:rgb(119 201 239)
          }
          5.3125% {
            fill:rgb(119 201 239)
          }
          5.6250% {
            fill:rgb(119 201 239)
          }
          5.9375% {
            fill:rgb(119 201 239)
          }
          6.2500% {
            fill:rgb(119 201 239)
          }
          6.5625% {
            fill:rgb(119 201 239)
          }
          6.8750% {
            fill:rgb(119 201 239)
          }
          7.1875% {
            fill:rgb(119 201 239)
          }
          7.5000% {
            fill:rgb(119 201 239)
          }
          7.8125% {
            fill:rgb(119 201 239)
          }
          8.1250% {
            fill:rgb(119 201 239)
          }
          8.4375% {
            fill:rgb(119 201 239)
          }
          8.7500% {
            fill:rgb(119 201 239)
          }
          9.0625% {
            fill:rgb(119 201 239)
          }
          9.3750% {
            fill:rgb(119 201 239)
          }
          9.6875% {
            fill:rgb(119 201 239)
          }
          10.0000% {
            fill:rgb(119 201 239)
          }
          10.3125% {
            fill:rgb(119 201 239)
          }
          10.6250% {
            fill:rgb(119 201 239)
          }
          10.9375% {
            fill:rgb(119 201 239)
          }
          11.2500% {
            fill:rgb(119 201 239)
          }
          11.5625% {
            fill:rgb(119 201 239)
          }
          11.8750% {
            fill:rgb(119 201 239)
          }
          12.1875% {
            fill:rgb(119 201 239)
          }
          12.5000% {
            fill:rgb(119 201 239)
          }
          12.8125% {
            fill:rgb(119 201 239)
          }
          13.1250% {
            fill:rgb(119 201 239)
          }
          13.4375% {
            fill:rgb(119 201 239)
          }
          13.7500% {
            fill:rgb(119 201 239)
          }
          14.0625% {
            fill:rgb(119 201 239)
          }
          14.3750% {
            fill:rgb(119 201 239)
          }
          14.6875% {
            fill:rgb(119 201 239)
          }
          15.0000% {
            fill:rgb(119 201 239)
          }
          15.3125% {
            fill:rgb(119 201 239)
          }
          15.6250% {
            fill:rgb(119 201 239)
          }
          15.9375% {
            fill:rgb(119 201 239)
          }
          16.2500% {
            fill:rgb(119 201 239)
          }
          16.5625% {
            fill:rgb(119 201 239)
          }
          16.8750% {
            fill:rgb(119 201 239)
          }
          17.1875% {
            fill:rgb(119 201 239)
          }
          17.5000% {
            fill:rgb(119 201 239)
          }
          17.8125% {
            fill:rgb(119 201 239)
          }
          18.1250% {
            fill:rgb(119 201 239)
          }
          18.4375% {
            fill:rgb(119 201 239)
          }
          18.7500% {
            fill:rgb(119 201 239)
          }
          19.0625% {
            fill:rgb(119 201 239)
          }
          19.3750% {
            fill:rgb(119 201 239)
          }
          19.6875% {
            fill:rgb(119 201 239)
          }
          20.0000% {
            fill:rgb(119 201 239)
          }
          20.3125% {
            fill:rgb(119 201 239)
          }
          20.6250% {
            fill:rgb(119 201 239)
          }
          20.9375% {
            fill:rgb(119 201 239)
          }
          21.2500% {
            fill:rgb(119 201 239)
          }
          21.5625% {
            fill:rgb(119 201 239)
          }
          21.8750% {
            fill:rgb(119 201 239)
          }
          22.1875% {
            fill:rgb(119 201 239)
          }
          22.5000% {
            fill:rgb(119 201 239)
          }
          22.8125% {
            fill:rgb(119 201 239)
          }
          23.1250% {
            fill:rgb(119 201 239)
          }
          23.4375% {
            fill:rgb(119 201 239)
          }
          23.7500% {
            fill:rgb(119 201 239)
          }
          24.0625% {
            fill:rgb(119 201 239)
          }
          24.3750% {
            fill:rgb(119 201 239)
          }
          24.6875% {
            fill:rgb(119 201 239)
          }
          25.0000% {
            fill:rgb(119 201 239)
          }
          25.3125% {
            fill:rgb(119 201 239)
          }
          25.6250% {
            fill:rgb(119 201 239)
          }
          25.9375% {
            fill:rgb(119 201 239)
          }
          26.2500% {
            fill:rgb(119 201 239)
          }
          26.5625% {
            fill:rgb(119 201 239)
          }
          26.8750% {
            fill:rgb(119 201 239)
          }
          27.1875% {
            fill:rgb(119 201 239)
          }
          27.5000% {
            fill:rgb(119 201 239)
          }
          27.8125% {
            fill:rgb(119 201 239)
          }
          28.1250% {
            fill:rgb(119 201 239)
          }
          28.4375% {
            fill:rgb(119 201 239)
          }
          28.7500% {
            fill:rgb(119 201 239)
          }
          29.0625% {
            fill:rgb(119 201 239)
          }
          29.3750% {
            fill:rgb(119 201 239)
          }
          29.6875% {
            fill:rgb(119 201 239)
          }
          30.0000% {
            fill:rgb(119 201 239)
          }
          30.3125% {
            fill:rgb(119 201 239)
          }
          30.6250% {
            fill:rgb(119 201 239)
          }
          30.9375% {
            fill:rgb(119 201 239)
          }
          31.2500% {
            fill:rgb(119 201 239)
          }
          31.5625% {
            fill:rgb(119 201 239)
          }
          31.8750% {
            fill:rgb(119 201 239)
          }
          32.1875% {
            fill:rgb(119 201 239)
          }
          32.5000% {
            fill:rgb(119 201 239)
          }
          32.8125% {
            fill:rgb(119 201 239)
          }
          33.1250% {
            fill:rgb(119 201 239)
          }
          33.4375% {
            fill:rgb(119 201 239)
          }
          33.7500% {
            fill:rgb(119 201 239)
          }
          34.0625% {
            fill:rgb(119 201 239)
          }
          34.3750% {
            fill:rgb(119 201 239)
          }
          34.6875% {
            fill:rgb(119 201 239)
          }
          35.0000% {
            fill:rgb(119 201 239)
          }
          35.3125% {
            fill:rgb(119 201 239)
          }
          35.6250% {
            fill:rgb(119 201 239)
          }
          35.9375% {
            fill:rgb(119 201 239)
          }
          36.2500% {
            fill:rgb(119 201 239)
          }
          36.5625% {
            fill:rgb(119 201 239)
          }
          36.8750% {
            fill:rgb(119 201 239)
          }
          37.1875% {
            fill:rgb(119 201 239)
          }
          37.5000% {
            fill:rgb(119 201 239)
          }
          37.8125% {
            fill:rgb(119 201 239)
          }
          38.1250% {
            fill:rgb(119 201 239)
          }
          38.4375% {
            fill:rgb(120 201 239)
          }
          38.7500% {
            fill:rgb(120 201 238)
          }
          39.0625% {
            fill:rgb(120 201 238)
          }
          39.3750% {
            fill:rgb(121 201 237)
          }
          39.6875% {
            fill:rgb(122 201 236)
          }
          40.0000% {
            fill:rgb(122 201 236)
          }
          40.3125% {
            fill:rgb(123 201 235)
          }
          40.6250% {
            fill:rgb(124 201 234)
          }
          40.9375% {
            fill:rgb(125 201 233)
          }
          41.2500% {
            fill:rgb(127 201 232)
          }
          41.5625% {
            fill:rgb(128 201 231)
          }
          41.8750% {
            fill:rgb(129 201 229)
          }
          42.1875% {
            fill:rgb(130 201 228)
          }
          42.5000% {
            fill:rgb(132 201 227)
          }
          42.8125% {
            fill:rgb(133 201 225)
          }
          43.1250% {
            fill:rgb(135 201 224)
          }
          43.4375% {
            fill:rgb(137 201 222)
          }
          43.7500% {
            fill:rgb(138 201 220)
          }
          44.0625% {
            fill:rgb(140 201 219)
          }
          44.3750% {
            fill:rgb(142 201 217)
          }
          44.6875% {
            fill:rgb(144 201 215)
          }
          45.0000% {
            fill:rgb(146 201 213)
          }
          45.3125% {
            fill:rgb(148 201 211)
          }
          45.6250% {
            fill:rgb(150 201 209)
          }
          45.9375% {
            fill:rgb(152 201 207)
          }
          46.2500% {
            fill:rgb(154 201 205)
          }
          46.5625% {
            fill:rgb(156 201 203)
          }
          46.8750% {
            fill:rgb(158 201 201)
          }
          47.1875% {
            fill:rgb(160 201 199)
          }
          47.5000% {
            fill:rgb(163 201 197)
          }
          47.8125% {
            fill:rgb(165 201 195)
          }
          48.1250% {
            fill:rgb(167 201 192)
          }
          48.4375% {
            fill:rgb(169 201 190)
          }
          48.7500% {
            fill:rgb(172 201 188)
          }
          49.0625% {
            fill:rgb(174 201 186)
          }
          49.3750% {
            fill:rgb(176 201 183)
          }
          49.6875% {
            fill:rgb(179 201 181)
          }
          50.0000% {
            fill:rgb(181 201 179)
          }
          50.3125% {
            fill:rgb(183 201 177)
          }
          50.6250% {
            fill:rgb(186 201 175)
          }
          50.9375% {
            fill:rgb(188 201 172)
          }
          51.2500% {
            fill:rgb(190 201 170)
          }
          51.5625% {
            fill:rgb(193 201 168)
          }
          51.8750% {
            fill:rgb(195 201 166)
          }
          52.1875% {
            fill:rgb(197 201 163)
          }
          52.5000% {
            fill:rgb(199 201 161)
          }
          52.8125% {
            fill:rgb(202 201 159)
          }
          53.1250% {
            fill:rgb(204 201 157)
          }
          53.4375% {
            fill:rgb(206 201 155)
          }
          53.7500% {
            fill:rgb(208 201 153)
          }
          54.0625% {
            fill:rgb(210 201 151)
          }
          54.3750% {
            fill:rgb(212 201 149)
          }
          54.6875% {
            fill:rgb(214 201 147)
          }
          55.0000% {
            fill:rgb(216 201 145)
          }
          55.3125% {
            fill:rgb(218 201 143)
          }
          55.6250% {
            fill:rgb(220 201 141)
          }
          55.9375% {
            fill:rgb(222 201 139)
          }
          56.2500% {
            fill:rgb(224 201 138)
          }
          56.5625% {
            fill:rgb(225 201 136)
          }
          56.8750% {
            fill:rgb(227 201 134)
          }
          57.1875% {
            fill:rgb(229 201 133)
          }
          57.5000% {
            fill:rgb(230 201 131)
          }
          57.8125% {
            fill:rgb(232 201 130)
          }
          58.1250% {
            fill:rgb(233 201 129)
          }
          58.4375% {
            fill:rgb(234 201 127)
          }
          58.7500% {
            fill:rgb(235 201 126)
          }
          59.0625% {
            fill:rgb(237 201 125)
          }
          59.3750% {
            fill:rgb(238 201 124)
          }
          59.6875% {
            fill:rgb(239 201 123)
          }
          60.0000% {
            fill:rgb(240 201 122)
          }
          60.3125% {
            fill:rgb(240 201 122)
          }
          60.6250% {
            fill:rgb(241 201 121)
          }
          60.9375% {
            fill:rgb(242 201 120)
          }
          61.2500% {
            fill:rgb(242 201 120)
          }
          61.5625% {
            fill:rgb(242 201 119)
          }
          61.8750% {
            fill:rgb(243 201 119)
          }
          62.1875% {
            fill:rgb(243 201 119)
          }
          62.5000% {
            fill:rgb(243 201 119)
          }
          62.8125% {
            fill:rgb(243 201 119)
          }
          63.1250% {
            fill:rgb(243 201 119)
          }
          63.4375% {
            fill:rgb(243 201 119)
          }
          63.7500% {
            fill:rgb(243 201 119)
          }
          64.0625% {
            fill:rgb(243 201 119)
          }
          64.3750% {
            fill:rgb(243 201 119)
          }
          64.6875% {
            fill:rgb(243 201 119)
          }
          65.0000% {
            fill:rgb(243 201 119)
          }
          65.3125% {
            fill:rgb(243 201 119)
          }
          65.6250% {
            fill:rgb(243 201 119)
          }
          65.9375% {
            fill:rgb(243 201 119)
          }
          66.2500% {
            fill:rgb(243 201 119)
          }
          66.5625% {
            fill:rgb(243 201 119)
          }
          66.8750% {
            fill:rgb(243 201 119)
          }
          67.1875% {
            fill:rgb(243 201 119)
          }
          67.5000% {
            fill:rgb(243 201 119)
          }
          67.8125% {
            fill:rgb(243 201 119)
          }
          68.1250% {
            fill:rgb(243 201 119)
          }
          68.4375% {
            fill:rgb(243 201 119)
          }
          68.7500% {
            fill:rgb(243 201 119)
          }
          69.0625% {
            fill:rgb(243 201 119)
          }
          69.3750% {
            fill:rgb(243 201 119)
          }
          69.6875% {
            fill:rgb(243 201 119)
          }
          70.0000% {
            fill:rgb(243 201 119)
          }
          70.3125% {
            fill:rgb(243 201 119)
          }
          70.6250% {
            fill:rgb(243 201 119)
          }
          70.9375% {
            fill:rgb(243 201 119)
          }
          71.2500% {
            fill:rgb(243 201 119)
          }
          71.5625% {
            fill:rgb(242 201 120)
          }
          71.8750% {
            fill:rgb(242 201 120)
          }
          72.1875% {
            fill:rgb(241 201 121)
          }
          72.5000% {
            fill:rgb(240 201 122)
          }
          72.8125% {
            fill:rgb(238 201 124)
          }
          73.1250% {
            fill:rgb(237 201 125)
          }
          73.4375% {
            fill:rgb(235 201 127)
          }
          73.7500% {
            fill:rgb(233 201 129)
          }
          74.0625% {
            fill:rgb(231 201 131)
          }
          74.3750% {
            fill:rgb(229 201 133)
          }
          74.6875% {
            fill:rgb(226 201 135)
          }
          75.0000% {
            fill:rgb(224 201 138)
          }
          75.3125% {
            fill:rgb(221 201 140)
          }
          75.6250% {
            fill:rgb(218 201 143)
          }
          75.9375% {
            fill:rgb(215 201 146)
          }
          76.2500% {
            fill:rgb(212 201 149)
          }
          76.5625% {
            fill:rgb(209 201 152)
          }
          76.8750% {
            fill:rgb(206 201 155)
          }
          77.1875% {
            fill:rgb(203 201 158)
          }
          77.5000% {
            fill:rgb(199 201 161)
          }
          77.8125% {
            fill:rgb(196 201 165)
          }
          78.1250% {
            fill:rgb(193 201 168)
          }
          78.4375% {
            fill:rgb(189 201 171)
          }
          78.7500% {
            fill:rgb(186 201 175)
          }
          79.0625% {
            fill:rgb(182 201 178)
          }
          79.3750% {
            fill:rgb(179 201 181)
          }
          79.6875% {
            fill:rgb(175 201 185)
          }
          80.0000% {
            fill:rgb(172 201 188)
          }
          80.3125% {
            fill:rgb(168 201 191)
          }
          80.6250% {
            fill:rgb(165 201 195)
          }
          80.9375% {
            fill:rgb(162 201 198)
          }
          81.2500% {
            fill:rgb(158 201 201)
          }
          81.5625% {
            fill:rgb(155 201 204)
          }
          81.8750% {
            fill:rgb(152 201 207)
          }
          82.1875% {
            fill:rgb(149 201 210)
          }
          82.5000% {
            fill:rgb(146 201 213)
          }
          82.8125% {
            fill:rgb(143 201 216)
          }
          83.1250% {
            fill:rgb(140 201 219)
          }
          83.4375% {
            fill:rgb(138 201 221)
          }
          83.7500% {
            fill:rgb(135 201 224)
          }
          84.0625% {
            fill:rgb(133 201 226)
          }
          84.3750% {
            fill:rgb(130 201 228)
          }
          84.6875% {
            fill:rgb(128 201 230)
          }
          85.0000% {
            fill:rgb(127 201 232)
          }
          85.3125% {
            fill:rgb(125 201 233)
          }
          85.6250% {
            fill:rgb(123 201 235)
          }
          85.9375% {
            fill:rgb(122 201 236)
          }
          86.2500% {
            fill:rgb(121 201 237)
          }
          86.5625% {
            fill:rgb(120 201 238)
          }
          86.8750% {
            fill:rgb(120 201 239)
          }
          87.1875% {
            fill:rgb(119 201 239)
          }
          87.5000% {
            fill:rgb(119 201 239)
          }
          87.8125% {
            fill:rgb(119 201 239)
          }
          88.1250% {
            fill:rgb(119 201 239)
          }
          88.4375% {
            fill:rgb(119 201 239)
          }
          88.7500% {
            fill:rgb(119 201 239)
          }
          89.0625% {
            fill:rgb(119 201 239)
          }
          89.3750% {
            fill:rgb(119 201 239)
          }
          89.6875% {
            fill:rgb(119 201 239)
          }
          90.0000% {
            fill:rgb(119 201 239)
          }
          90.3125% {
            fill:rgb(119 201 239)
          }
          90.6250% {
            fill:rgb(119 201 239)
          }
          90.9375% {
            fill:rgb(119 201 239)
          }
          91.2500% {
            fill:rgb(119 201 239)
          }
          91.5625% {
            fill:rgb(119 201 239)
          }
          91.8750% {
            fill:rgb(119 201 239)
          }
          92.1875% {
            fill:rgb(119 201 239)
          }
          92.5000% {
            fill:rgb(119 201 239)
          }
          92.8125% {
            fill:rgb(119 201 239)
          }
          93.1250% {
            fill:rgb(119 201 239)
          }
          93.4375% {
            fill:rgb(119 201 239)
          }
          93.7500% {
            fill:rgb(119 201 239)
          }
          94.0625% {
            fill:rgb(119 201 239)
          }
          94.3750% {
            fill:rgb(119 201 239)
          }
          94.6875% {
            fill:rgb(119 201 239)
          }
          95.0000% {
            fill:rgb(119 201 239)
          }
          95.3125% {
            fill:rgb(119 201 239)
          }
          95.6250% {
            fill:rgb(119 201 239)
          }
          95.9375% {
            fill:rgb(119 201 239)
          }
          96.2500% {
            fill:rgb(119 201 239)
          }
          96.5625% {
            fill:rgb(119 201 239)
          }
          96.8750% {
            fill:rgb(119 201 239)
          }
          97.1875% {
            fill:rgb(119 201 239)
          }
          97.5000% {
            fill:rgb(119 201 239)
          }
          97.8125% {
            fill:rgb(119 201 239)
          }
          98.1250% {
            fill:rgb(119 201 239)
          }
          98.4375% {
            fill:rgb(119 201 239)
          }
          98.7500% {
            fill:rgb(119 201 239)
          }
          99.0625% {
            fill:rgb(119 201 239)
          }
          99.3750% {
            fill:rgb(119 201 239)
          }
          99.6875% {
            fill:rgb(119 201 239)
          }
          100.0000% {
            fill:rgb(119 201 239)
          }
        }
        @keyframes overturn-mark-3 {
          0.0000% {
            opacity:1
          }
          0.3125% {
            opacity:1
          }
          0.6250% {
            opacity:1
          }
          0.9375% {
            opacity:1
          }
          1.2500% {
            opacity:1
          }
          1.5625% {
            opacity:1
          }
          1.8750% {
            opacity:1
          }
          2.1875% {
            opacity:1
          }
          2.5000% {
            opacity:1
          }
          2.8125% {
            opacity:1
          }
          3.1250% {
            opacity:1
          }
          3.4375% {
            opacity:1
          }
          3.7500% {
            opacity:1
          }
          4.0625% {
            opacity:1
          }
          4.3750% {
            opacity:1
          }
          4.6875% {
            opacity:1
          }
          5.0000% {
            opacity:1
          }
          5.3125% {
            opacity:1
          }
          5.6250% {
            opacity:1
          }
          5.9375% {
            opacity:1
          }
          6.2500% {
            opacity:1
          }
          6.5625% {
            opacity:1
          }
          6.8750% {
            opacity:1
          }
          7.1875% {
            opacity:1
          }
          7.5000% {
            opacity:1
          }
          7.8125% {
            opacity:1
          }
          8.1250% {
            opacity:1
          }
          8.4375% {
            opacity:1
          }
          8.7500% {
            opacity:1
          }
          9.0625% {
            opacity:1
          }
          9.3750% {
            opacity:1
          }
          9.6875% {
            opacity:1
          }
          10.0000% {
            opacity:1
          }
          10.3125% {
            opacity:1
          }
          10.6250% {
            opacity:1
          }
          10.9375% {
            opacity:1
          }
          11.2500% {
            opacity:1
          }
          11.5625% {
            opacity:1
          }
          11.8750% {
            opacity:1
          }
          12.1875% {
            opacity:1
          }
          12.5000% {
            opacity:1
          }
          12.8125% {
            opacity:1
          }
          13.1250% {
            opacity:1
          }
          13.4375% {
            opacity:1
          }
          13.7500% {
            opacity:1
          }
          14.0625% {
            opacity:1
          }
          14.3750% {
            opacity:1
          }
          14.6875% {
            opacity:1
          }
          15.0000% {
            opacity:1
          }
          15.3125% {
            opacity:1
          }
          15.6250% {
            opacity:1
          }
          15.9375% {
            opacity:1
          }
          16.2500% {
            opacity:1
          }
          16.5625% {
            opacity:1
          }
          16.8750% {
            opacity:1
          }
          17.1875% {
            opacity:1
          }
          17.5000% {
            opacity:1
          }
          17.8125% {
            opacity:1
          }
          18.1250% {
            opacity:1
          }
          18.4375% {
            opacity:1
          }
          18.7500% {
            opacity:1
          }
          19.0625% {
            opacity:1
          }
          19.3750% {
            opacity:1
          }
          19.6875% {
            opacity:1
          }
          20.0000% {
            opacity:1
          }
          20.3125% {
            opacity:1
          }
          20.6250% {
            opacity:1
          }
          20.9375% {
            opacity:1
          }
          21.2500% {
            opacity:1
          }
          21.5625% {
            opacity:1
          }
          21.8750% {
            opacity:1
          }
          22.1875% {
            opacity:1
          }
          22.5000% {
            opacity:1
          }
          22.8125% {
            opacity:1
          }
          23.1250% {
            opacity:1
          }
          23.4375% {
            opacity:1
          }
          23.7500% {
            opacity:1
          }
          24.0625% {
            opacity:1
          }
          24.3750% {
            opacity:1
          }
          24.6875% {
            opacity:1
          }
          25.0000% {
            opacity:1
          }
          25.3125% {
            opacity:1
          }
          25.6250% {
            opacity:1
          }
          25.9375% {
            opacity:1
          }
          26.2500% {
            opacity:1
          }
          26.5625% {
            opacity:1
          }
          26.8750% {
            opacity:1
          }
          27.1875% {
            opacity:1
          }
          27.5000% {
            opacity:1
          }
          27.8125% {
            opacity:1
          }
          28.1250% {
            opacity:1
          }
          28.4375% {
            opacity:1
          }
          28.7500% {
            opacity:1
          }
          29.0625% {
            opacity:1
          }
          29.3750% {
            opacity:1
          }
          29.6875% {
            opacity:1
          }
          30.0000% {
            opacity:1
          }
          30.3125% {
            opacity:1
          }
          30.6250% {
            opacity:1
          }
          30.9375% {
            opacity:1
          }
          31.2500% {
            opacity:1
          }
          31.5625% {
            opacity:1
          }
          31.8750% {
            opacity:1
          }
          32.1875% {
            opacity:1
          }
          32.5000% {
            opacity:1
          }
          32.8125% {
            opacity:1
          }
          33.1250% {
            opacity:1
          }
          33.4375% {
            opacity:1
          }
          33.7500% {
            opacity:1
          }
          34.0625% {
            opacity:1
          }
          34.3750% {
            opacity:1
          }
          34.6875% {
            opacity:1
          }
          35.0000% {
            opacity:1
          }
          35.3125% {
            opacity:1
          }
          35.6250% {
            opacity:1
          }
          35.9375% {
            opacity:1
          }
          36.2500% {
            opacity:1
          }
          36.5625% {
            opacity:1
          }
          36.8750% {
            opacity:1
          }
          37.1875% {
            opacity:1
          }
          37.5000% {
            opacity:1
          }
          37.8125% {
            opacity:1.0
          }
          38.1250% {
            opacity:0.998
          }
          38.4375% {
            opacity:0.996
          }
          38.7500% {
            opacity:0.993
          }
          39.0625% {
            opacity:0.989
          }
          39.3750% {
            opacity:0.984
          }
          39.6875% {
            opacity:0.978
          }
          40.0000% {
            opacity:0.972
          }
          40.3125% {
            opacity:0.965
          }
          40.6250% {
            opacity:0.957
          }
          40.9375% {
            opacity:0.948
          }
          41.2500% {
            opacity:0.939
          }
          41.5625% {
            opacity:0.929
          }
          41.8750% {
            opacity:0.919
          }
          42.1875% {
            opacity:0.908
          }
          42.5000% {
            opacity:0.896
          }
          42.8125% {
            opacity:0.884
          }
          43.1250% {
            opacity:0.871
          }
          43.4375% {
            opacity:0.858
          }
          43.7500% {
            opacity:0.844
          }
          44.0625% {
            opacity:0.829
          }
          44.3750% {
            opacity:0.815
          }
          44.6875% {
            opacity:0.8
          }
          45.0000% {
            opacity:0.784
          }
          45.3125% {
            opacity:0.768
          }
          45.6250% {
            opacity:0.752
          }
          45.9375% {
            opacity:0.735
          }
          46.2500% {
            opacity:0.718
          }
          46.5625% {
            opacity:0.701
          }
          46.8750% {
            opacity:0.684
          }
          47.1875% {
            opacity:0.666
          }
          47.5000% {
            opacity:0.648
          }
          47.8125% {
            opacity:0.63
          }
          48.1250% {
            opacity:0.612
          }
          48.4375% {
            opacity:0.593
          }
          48.7500% {
            opacity:0.575
          }
          49.0625% {
            opacity:0.556
          }
          49.3750% {
            opacity:0.537
          }
          49.6875% {
            opacity:0.519
          }
          50.0000% {
            opacity:0.5
          }
          50.3125% {
            opacity:0.481
          }
          50.6250% {
            opacity:0.463
          }
          50.9375% {
            opacity:0.444
          }
          51.2500% {
            opacity:0.425
          }
          51.5625% {
            opacity:0.407
          }
          51.8750% {
            opacity:0.388
          }
          52.1875% {
            opacity:0.37
          }
          52.5000% {
            opacity:0.352
          }
          52.8125% {
            opacity:0.334
          }
          53.1250% {
            opacity:0.316
          }
          53.4375% {
            opacity:0.299
          }
          53.7500% {
            opacity:0.282
          }
          54.0625% {
            opacity:0.265
          }
          54.3750% {
            opacity:0.248
          }
          54.6875% {
            opacity:0.232
          }
          55.0000% {
            opacity:0.216
          }
          55.3125% {
            opacity:0.2
          }
          55.6250% {
            opacity:0.185
          }
          55.9375% {
            opacity:0.171
          }
          56.2500% {
            opacity:0.156
          }
          56.5625% {
            opacity:0.142
          }
          56.8750% {
            opacity:0.129
          }
          57.1875% {
            opacity:0.116
          }
          57.5000% {
            opacity:0.104
          }
          57.8125% {
            opacity:0.092
          }
          58.1250% {
            opacity:0.081
          }
          58.4375% {
            opacity:0.071
          }
          58.7500% {
            opacity:0.061
          }
          59.0625% {
            opacity:0.052
          }
          59.3750% {
            opacity:0.043
          }
          59.6875% {
            opacity:0.035
          }
          60.0000% {
            opacity:0.028
          }
          60.3125% {
            opacity:0.022
          }
          60.6250% {
            opacity:0.016
          }
          60.9375% {
            opacity:0.011
          }
          61.2500% {
            opacity:0.007
          }
          61.5625% {
            opacity:0.004
          }
          61.8750% {
            opacity:0.002
          }
          62.1875% {
            opacity:0.0
          }
          62.5000% {
            opacity:0
          }
          62.8125% {
            opacity:0
          }
          63.1250% {
            opacity:0
          }
          63.4375% {
            opacity:0
          }
          63.7500% {
            opacity:0
          }
          64.0625% {
            opacity:0
          }
          64.3750% {
            opacity:0
          }
          64.6875% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.3125% {
            opacity:0
          }
          65.6250% {
            opacity:0
          }
          65.9375% {
            opacity:0
          }
          66.2500% {
            opacity:0
          }
          66.5625% {
            opacity:0
          }
          66.8750% {
            opacity:0
          }
          67.1875% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          67.8125% {
            opacity:0
          }
          68.1250% {
            opacity:0
          }
          68.4375% {
            opacity:0
          }
          68.7500% {
            opacity:0
          }
          69.0625% {
            opacity:0
          }
          69.3750% {
            opacity:0
          }
          69.6875% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.3125% {
            opacity:0
          }
          70.6250% {
            opacity:0
          }
          70.9375% {
            opacity:0.0
          }
          71.2500% {
            opacity:0.002
          }
          71.5625% {
            opacity:0.006
          }
          71.8750% {
            opacity:0.011
          }
          72.1875% {
            opacity:0.019
          }
          72.5000% {
            opacity:0.028
          }
          72.8125% {
            opacity:0.039
          }
          73.1250% {
            opacity:0.052
          }
          73.4375% {
            opacity:0.066
          }
          73.7500% {
            opacity:0.081
          }
          74.0625% {
            opacity:0.098
          }
          74.3750% {
            opacity:0.116
          }
          74.6875% {
            opacity:0.136
          }
          75.0000% {
            opacity:0.156
          }
          75.3125% {
            opacity:0.178
          }
          75.6250% {
            opacity:0.2
          }
          75.9375% {
            opacity:0.224
          }
          76.2500% {
            opacity:0.248
          }
          76.5625% {
            opacity:0.273
          }
          76.8750% {
            opacity:0.299
          }
          77.1875% {
            opacity:0.325
          }
          77.5000% {
            opacity:0.352
          }
          77.8125% {
            opacity:0.379
          }
          78.1250% {
            opacity:0.407
          }
          78.4375% {
            opacity:0.435
          }
          78.7500% {
            opacity:0.463
          }
          79.0625% {
            opacity:0.491
          }
          79.3750% {
            opacity:0.519
          }
          79.6875% {
            opacity:0.547
          }
          80.0000% {
            opacity:0.575
          }
          80.3125% {
            opacity:0.602
          }
          80.6250% {
            opacity:0.63
          }
          80.9375% {
            opacity:0.657
          }
          81.2500% {
            opacity:0.684
          }
          81.5625% {
            opacity:0.71
          }
          81.8750% {
            opacity:0.735
          }
          82.1875% {
            opacity:0.76
          }
          82.5000% {
            opacity:0.784
          }
          82.8125% {
            opacity:0.807
          }
          83.1250% {
            opacity:0.829
          }
          83.4375% {
            opacity:0.851
          }
          83.7500% {
            opacity:0.871
          }
          84.0625% {
            opacity:0.89
          }
          84.3750% {
            opacity:0.908
          }
          84.6875% {
            opacity:0.924
          }
          85.0000% {
            opacity:0.939
          }
          85.3125% {
            opacity:0.953
          }
          85.6250% {
            opacity:0.965
          }
          85.9375% {
            opacity:0.975
          }
          86.2500% {
            opacity:0.984
          }
          86.5625% {
            opacity:0.991
          }
          86.8750% {
            opacity:0.996
          }
          87.1875% {
            opacity:0.999
          }
          87.5000% {
            opacity:1
          }
          87.8125% {
            opacity:1
          }
          88.1250% {
            opacity:1
          }
          88.4375% {
            opacity:1
          }
          88.7500% {
            opacity:1
          }
          89.0625% {
            opacity:1
          }
          89.3750% {
            opacity:1
          }
          89.6875% {
            opacity:1
          }
          90.0000% {
            opacity:1
          }
          90.3125% {
            opacity:1
          }
          90.6250% {
            opacity:1
          }
          90.9375% {
            opacity:1
          }
          91.2500% {
            opacity:1
          }
          91.5625% {
            opacity:1
          }
          91.8750% {
            opacity:1
          }
          92.1875% {
            opacity:1
          }
          92.5000% {
            opacity:1
          }
          92.8125% {
            opacity:1
          }
          93.1250% {
            opacity:1
          }
          93.4375% {
            opacity:1
          }
          93.7500% {
            opacity:1
          }
          94.0625% {
            opacity:1
          }
          94.3750% {
            opacity:1
          }
          94.6875% {
            opacity:1
          }
          95.0000% {
            opacity:1
          }
          95.3125% {
            opacity:1
          }
          95.6250% {
            opacity:1
          }
          95.9375% {
            opacity:1
          }
          96.2500% {
            opacity:1
          }
          96.5625% {
            opacity:1
          }
          96.8750% {
            opacity:1
          }
          97.1875% {
            opacity:1
          }
          97.5000% {
            opacity:1
          }
          97.8125% {
            opacity:1
          }
          98.1250% {
            opacity:1
          }
          98.4375% {
            opacity:1
          }
          98.7500% {
            opacity:1
          }
          99.0625% {
            opacity:1
          }
          99.3750% {
            opacity:1
          }
          99.6875% {
            opacity:1
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes overturn-fleck-3 {
          0.0000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          0.3125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          0.6250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          0.9375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          1.2500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          1.5625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          1.8750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          2.1875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          2.5000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          2.8125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          3.1250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          3.4375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          3.7500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          4.0625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          4.3750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          4.6875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          5.0000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          5.3125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          5.6250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          5.9375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          6.2500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          6.5625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          6.8750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          7.1875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          7.5000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          7.8125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          8.1250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          8.4375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          8.7500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          9.0625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          9.3750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          9.6875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          10.0000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          10.3125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          10.6250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          10.9375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          11.2500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          11.5625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          11.8750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          12.1875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          12.5000% {
            transform:translate(70px,109px);
            opacity:0
          }
          12.8125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          13.1250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          13.4375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          13.7500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          14.0625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          14.3750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          14.6875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          15.0000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          15.3125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          15.6250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          15.9375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          16.2500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          16.5625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          16.8750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          17.1875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          17.5000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          17.8125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          18.1250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          18.4375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          18.7500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          19.0625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          19.3750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          19.6875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          20.0000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          20.3125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          20.6250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          20.9375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          21.2500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          21.5625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          21.8750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          22.1875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          22.5000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          22.8125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          23.1250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          23.4375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          23.7500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          24.0625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          24.3750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          24.6875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          25.0000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          25.3125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          25.6250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          25.9375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          26.2500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          26.5625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          26.8750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          27.1875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          27.5000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          27.8125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          28.1250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          28.4375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          28.7500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          29.0625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          29.3750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          29.6875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          30.0000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          30.3125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          30.6250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          30.9375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          31.2500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          31.5625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          31.8750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          32.1875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          32.5000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          32.8125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          33.1250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          33.4375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          33.7500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          34.0625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          34.3750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          34.6875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          35.0000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          35.3125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          35.6250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          35.9375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          36.2500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          36.5625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          36.8750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          37.1875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          37.5000% {
            transform:translate(22px,79px);
            opacity:0
          }
          37.8125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          38.1250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          38.4375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          38.7500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          39.0625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          39.3750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          39.6875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          40.0000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          40.3125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          40.6250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          40.9375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          41.2500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          41.5625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          41.8750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          42.1875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          42.5000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          42.8125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          43.1250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          43.4375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          43.7500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          44.0625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          44.3750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          44.6875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          45.0000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          45.3125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          45.6250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          45.9375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          46.2500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          46.5625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          46.8750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          47.1875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          47.5000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          47.8125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          48.1250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          48.4375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          48.7500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          49.0625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          49.3750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          49.6875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          50.0000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          50.3125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          50.6250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          50.9375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          51.2500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          51.5625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          51.8750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          52.1875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          52.5000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          52.8125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          53.1250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          53.4375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          53.7500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          54.0625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          54.3750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          54.6875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          55.0000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          55.3125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          55.6250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          55.9375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          56.2500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          56.5625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          56.8750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          57.1875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          57.5000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          57.8125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          58.1250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          58.4375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          58.7500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          59.0625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          59.3750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          59.6875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          60.0000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          60.3125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          60.6250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          60.9375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          61.2500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          61.5625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          61.8750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          62.1875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          62.5000% {
            transform:translate(70px,44px);
            opacity:0
          }
          62.8125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          63.1250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          63.4375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          63.7500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          64.0625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          64.3750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          64.6875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          65.0000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          65.3125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          65.6250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          65.9375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          66.2500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          66.5625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          66.8750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          67.1875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          67.5000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          67.8125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          68.1250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          68.4375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          68.7500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          69.0625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          69.3750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          69.6875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          70.0000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          70.3125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          70.6250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          70.9375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          71.2500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          71.5625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          71.8750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          72.1875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          72.5000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          72.8125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          73.1250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          73.4375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          73.7500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          74.0625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          74.3750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          74.6875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          75.0000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          75.3125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          75.6250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          75.9375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          76.2500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          76.5625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          76.8750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          77.1875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          77.5000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          77.8125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          78.1250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          78.4375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          78.7500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          79.0625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          79.3750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          79.6875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          80.0000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          80.3125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          80.6250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          80.9375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          81.2500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          81.5625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          81.8750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          82.1875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          82.5000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          82.8125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          83.1250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          83.4375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          83.7500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          84.0625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          84.3750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          84.6875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          85.0000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          85.3125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          85.6250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          85.9375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          86.2500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          86.5625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          86.8750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          87.1875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          87.5000% {
            transform:translate(118px,79px);
            opacity:0
          }
          87.8125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          88.1250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          88.4375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          88.7500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          89.0625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          89.3750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          89.6875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          90.0000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          90.3125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          90.6250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          90.9375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          91.2500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          91.5625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          91.8750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          92.1875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          92.5000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          92.8125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          93.1250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          93.4375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          93.7500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          94.0625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          94.3750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          94.6875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          95.0000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          95.3125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          95.6250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          95.9375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          96.2500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          96.5625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          96.8750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          97.1875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          97.5000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          97.8125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          98.1250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          98.4375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          98.7500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          99.0625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          99.3750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          99.6875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          100.0000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
        }
        .parcel-4 {
          animation:overturn-parcel-4 16s linear infinite
        }
        .color-4 {
          animation:overturn-color-4 16s linear infinite
        }
        .mark-4 {
          animation:overturn-mark-4 16s linear infinite
        }
        .fleck-4 {
          animation:overturn-fleck-4 16s linear infinite
        }
        @keyframes overturn-parcel-4 {
          0.0000% {
            transform:translate(70px,109px)
          }
          0.3125% {
            transform:translate(69.058px,108.994px)
          }
          0.6250% {
            transform:translate(68.116px,108.977px)
          }
          0.9375% {
            transform:translate(67.174px,108.948px)
          }
          1.2500% {
            transform:translate(66.234px,108.908px)
          }
          1.5625% {
            transform:translate(65.295px,108.856px)
          }
          1.8750% {
            transform:translate(64.358px,108.792px)
          }
          2.1875% {
            transform:translate(63.423px,108.717px)
          }
          2.5000% {
            transform:translate(62.491px,108.631px)
          }
          2.8125% {
            transform:translate(61.562px,108.533px)
          }
          3.1250% {
            transform:translate(60.636px,108.424px)
          }
          3.4375% {
            transform:translate(59.713px,108.303px)
          }
          3.7500% {
            transform:translate(58.795px,108.171px)
          }
          4.0625% {
            transform:translate(57.88px,108.028px)
          }
          4.3750% {
            transform:translate(56.971px,107.874px)
          }
          4.6875% {
            transform:translate(56.066px,107.708px)
          }
          5.0000% {
            transform:translate(55.167px,107.532px)
          }
          5.3125% {
            transform:translate(54.274px,107.344px)
          }
          5.6250% {
            transform:translate(53.386px,107.146px)
          }
          5.9375% {
            transform:translate(52.505px,106.936px)
          }
          6.2500% {
            transform:translate(51.631px,106.716px)
          }
          6.5625% {
            transform:translate(50.764px,106.486px)
          }
          6.8750% {
            transform:translate(49.904px,106.244px)
          }
          7.1875% {
            transform:translate(49.052px,105.992px)
          }
          7.5000% {
            transform:translate(48.208px,105.73px)
          }
          7.8125% {
            transform:translate(47.373px,105.458px)
          }
          8.1250% {
            transform:translate(46.546px,105.175px)
          }
          8.4375% {
            transform:translate(45.728px,104.882px)
          }
          8.7500% {
            transform:translate(44.92px,104.579px)
          }
          9.0625% {
            transform:translate(44.121px,104.267px)
          }
          9.3750% {
            transform:translate(43.333px,103.944px)
          }
          9.6875% {
            transform:translate(42.554px,103.612px)
          }
          10.0000% {
            transform:translate(41.786px,103.271px)
          }
          10.3125% {
            transform:translate(41.029px,102.92px)
          }
          10.6250% {
            transform:translate(40.283px,102.56px)
          }
          10.9375% {
            transform:translate(39.549px,102.19px)
          }
          11.2500% {
            transform:translate(38.826px,101.812px)
          }
          11.5625% {
            transform:translate(38.116px,101.425px)
          }
          11.8750% {
            transform:translate(37.418px,101.03px)
          }
          12.1875% {
            transform:translate(36.732px,100.626px)
          }
          12.5000% {
            transform:translate(36.059px,100.213px)
          }
          12.8125% {
            transform:translate(35.399px,99.793px)
          }
          13.1250% {
            transform:translate(34.753px,99.364px)
          }
          13.4375% {
            transform:translate(34.12px,98.928px)
          }
          13.7500% {
            transform:translate(33.501px,98.483px)
          }
          14.0625% {
            transform:translate(32.895px,98.032px)
          }
          14.3750% {
            transform:translate(32.305px,97.573px)
          }
          14.6875% {
            transform:translate(31.729px,97.107px)
          }
          15.0000% {
            transform:translate(31.167px,96.634px)
          }
          15.3125% {
            transform:translate(30.621px,96.154px)
          }
          15.6250% {
            transform:translate(30.089px,95.667px)
          }
          15.9375% {
            transform:translate(29.574px,95.174px)
          }
          16.2500% {
            transform:translate(29.073px,94.675px)
          }
          16.5625% {
            transform:translate(28.589px,94.17px)
          }
          16.8750% {
            transform:translate(28.12px,93.659px)
          }
          17.1875% {
            transform:translate(27.668px,93.142px)
          }
          17.5000% {
            transform:translate(27.232px,92.62px)
          }
          17.8125% {
            transform:translate(26.812px,92.092px)
          }
          18.1250% {
            transform:translate(26.409px,91.56px)
          }
          18.4375% {
            transform:translate(26.023px,91.022px)
          }
          18.7500% {
            transform:translate(25.654px,90.481px)
          }
          19.0625% {
            transform:translate(25.302px,89.934px)
          }
          19.3750% {
            transform:translate(24.967px,89.384px)
          }
          19.6875% {
            transform:translate(24.649px,88.829px)
          }
          20.0000% {
            transform:translate(24.349px,88.271px)
          }
          20.3125% {
            transform:translate(24.067px,87.709px)
          }
          20.6250% {
            transform:translate(23.802px,87.143px)
          }
          20.9375% {
            transform:translate(23.555px,86.575px)
          }
          21.2500% {
            transform:translate(23.326px,86.003px)
          }
          21.5625% {
            transform:translate(23.115px,85.429px)
          }
          21.8750% {
            transform:translate(22.922px,84.853px)
          }
          22.1875% {
            transform:translate(22.748px,84.274px)
          }
          22.5000% {
            transform:translate(22.591px,83.693px)
          }
          22.8125% {
            transform:translate(22.453px,83.11px)
          }
          23.1250% {
            transform:translate(22.333px,82.526px)
          }
          23.4375% {
            transform:translate(22.231px,81.941px)
          }
          23.7500% {
            transform:translate(22.148px,81.354px)
          }
          24.0625% {
            transform:translate(22.083px,80.766px)
          }
          24.3750% {
            transform:translate(22.037px,80.178px)
          }
          24.6875% {
            transform:translate(22.009px,79.589px)
          }
          25.0000% {
            transform:translate(22px,79px)
          }
          25.3125% {
            transform:translate(22.009px,78.411px)
          }
          25.6250% {
            transform:translate(22.037px,77.822px)
          }
          25.9375% {
            transform:translate(22.083px,77.234px)
          }
          26.2500% {
            transform:translate(22.148px,76.646px)
          }
          26.5625% {
            transform:translate(22.231px,76.059px)
          }
          26.8750% {
            transform:translate(22.333px,75.474px)
          }
          27.1875% {
            transform:translate(22.453px,74.89px)
          }
          27.5000% {
            transform:translate(22.591px,74.307px)
          }
          27.8125% {
            transform:translate(22.748px,73.726px)
          }
          28.1250% {
            transform:translate(22.922px,73.147px)
          }
          28.4375% {
            transform:translate(23.115px,72.571px)
          }
          28.7500% {
            transform:translate(23.326px,71.997px)
          }
          29.0625% {
            transform:translate(23.555px,71.425px)
          }
          29.3750% {
            transform:translate(23.802px,70.857px)
          }
          29.6875% {
            transform:translate(24.067px,70.291px)
          }
          30.0000% {
            transform:translate(24.349px,69.729px)
          }
          30.3125% {
            transform:translate(24.649px,69.171px)
          }
          30.6250% {
            transform:translate(24.967px,68.616px)
          }
          30.9375% {
            transform:translate(25.302px,68.066px)
          }
          31.2500% {
            transform:translate(25.654px,67.519px)
          }
          31.5625% {
            transform:translate(26.023px,66.978px)
          }
          31.8750% {
            transform:translate(26.409px,66.44px)
          }
          32.1875% {
            transform:translate(26.812px,65.908px)
          }
          32.5000% {
            transform:translate(27.232px,65.38px)
          }
          32.8125% {
            transform:translate(27.668px,64.858px)
          }
          33.1250% {
            transform:translate(28.12px,64.341px)
          }
          33.4375% {
            transform:translate(28.589px,63.83px)
          }
          33.7500% {
            transform:translate(29.073px,63.325px)
          }
          34.0625% {
            transform:translate(29.574px,62.826px)
          }
          34.3750% {
            transform:translate(30.089px,62.333px)
          }
          34.6875% {
            transform:translate(30.621px,61.846px)
          }
          35.0000% {
            transform:translate(31.167px,61.366px)
          }
          35.3125% {
            transform:translate(31.729px,60.893px)
          }
          35.6250% {
            transform:translate(32.305px,60.427px)
          }
          35.9375% {
            transform:translate(32.895px,59.968px)
          }
          36.2500% {
            transform:translate(33.501px,59.517px)
          }
          36.5625% {
            transform:translate(34.12px,59.072px)
          }
          36.8750% {
            transform:translate(34.753px,58.636px)
          }
          37.1875% {
            transform:translate(35.399px,58.207px)
          }
          37.5000% {
            transform:translate(36.059px,57.787px)
          }
          37.8125% {
            transform:translate(36.732px,57.374px)
          }
          38.1250% {
            transform:translate(37.418px,56.97px)
          }
          38.4375% {
            transform:translate(38.116px,56.575px)
          }
          38.7500% {
            transform:translate(38.826px,56.188px)
          }
          39.0625% {
            transform:translate(39.549px,55.81px)
          }
          39.3750% {
            transform:translate(40.283px,55.44px)
          }
          39.6875% {
            transform:translate(41.029px,55.08px)
          }
          40.0000% {
            transform:translate(41.786px,54.729px)
          }
          40.3125% {
            transform:translate(42.554px,54.388px)
          }
          40.6250% {
            transform:translate(43.333px,54.056px)
          }
          40.9375% {
            transform:translate(44.121px,53.733px)
          }
          41.2500% {
            transform:translate(44.92px,53.421px)
          }
          41.5625% {
            transform:translate(45.728px,53.118px)
          }
          41.8750% {
            transform:translate(46.546px,52.825px)
          }
          42.1875% {
            transform:translate(47.373px,52.542px)
          }
          42.5000% {
            transform:translate(48.208px,52.27px)
          }
          42.8125% {
            transform:translate(49.052px,52.008px)
          }
          43.1250% {
            transform:translate(49.904px,51.756px)
          }
          43.4375% {
            transform:translate(50.764px,51.514px)
          }
          43.7500% {
            transform:translate(51.631px,51.284px)
          }
          44.0625% {
            transform:translate(52.505px,51.064px)
          }
          44.3750% {
            transform:translate(53.386px,50.854px)
          }
          44.6875% {
            transform:translate(54.274px,50.656px)
          }
          45.0000% {
            transform:translate(55.167px,50.468px)
          }
          45.3125% {
            transform:translate(56.066px,50.292px)
          }
          45.6250% {
            transform:translate(56.971px,50.126px)
          }
          45.9375% {
            transform:translate(57.88px,49.972px)
          }
          46.2500% {
            transform:translate(58.795px,49.829px)
          }
          46.5625% {
            transform:translate(59.713px,49.697px)
          }
          46.8750% {
            transform:translate(60.636px,49.576px)
          }
          47.1875% {
            transform:translate(61.562px,49.467px)
          }
          47.5000% {
            transform:translate(62.491px,49.369px)
          }
          47.8125% {
            transform:translate(63.423px,49.283px)
          }
          48.1250% {
            transform:translate(64.358px,49.208px)
          }
          48.4375% {
            transform:translate(65.295px,49.144px)
          }
          48.7500% {
            transform:translate(66.234px,49.092px)
          }
          49.0625% {
            transform:translate(67.174px,49.052px)
          }
          49.3750% {
            transform:translate(68.116px,49.023px)
          }
          49.6875% {
            transform:translate(69.058px,49.006px)
          }
          50.0000% {
            transform:translate(70px,49px)
          }
          50.3125% {
            transform:translate(70.942px,49.006px)
          }
          50.6250% {
            transform:translate(71.884px,49.023px)
          }
          50.9375% {
            transform:translate(72.826px,49.052px)
          }
          51.2500% {
            transform:translate(73.766px,49.092px)
          }
          51.5625% {
            transform:translate(74.705px,49.144px)
          }
          51.8750% {
            transform:translate(75.642px,49.208px)
          }
          52.1875% {
            transform:translate(76.577px,49.283px)
          }
          52.5000% {
            transform:translate(77.509px,49.369px)
          }
          52.8125% {
            transform:translate(78.438px,49.467px)
          }
          53.1250% {
            transform:translate(79.364px,49.576px)
          }
          53.4375% {
            transform:translate(80.287px,49.697px)
          }
          53.7500% {
            transform:translate(81.205px,49.829px)
          }
          54.0625% {
            transform:translate(82.12px,49.972px)
          }
          54.3750% {
            transform:translate(83.029px,50.126px)
          }
          54.6875% {
            transform:translate(83.934px,50.292px)
          }
          55.0000% {
            transform:translate(84.833px,50.468px)
          }
          55.3125% {
            transform:translate(85.726px,50.656px)
          }
          55.6250% {
            transform:translate(86.614px,50.854px)
          }
          55.9375% {
            transform:translate(87.495px,51.064px)
          }
          56.2500% {
            transform:translate(88.369px,51.284px)
          }
          56.5625% {
            transform:translate(89.236px,51.514px)
          }
          56.8750% {
            transform:translate(90.096px,51.756px)
          }
          57.1875% {
            transform:translate(90.948px,52.008px)
          }
          57.5000% {
            transform:translate(91.792px,52.27px)
          }
          57.8125% {
            transform:translate(92.627px,52.542px)
          }
          58.1250% {
            transform:translate(93.454px,52.825px)
          }
          58.4375% {
            transform:translate(94.272px,53.118px)
          }
          58.7500% {
            transform:translate(95.08px,53.421px)
          }
          59.0625% {
            transform:translate(95.879px,53.733px)
          }
          59.3750% {
            transform:translate(96.667px,54.056px)
          }
          59.6875% {
            transform:translate(97.446px,54.388px)
          }
          60.0000% {
            transform:translate(98.214px,54.729px)
          }
          60.3125% {
            transform:translate(98.971px,55.08px)
          }
          60.6250% {
            transform:translate(99.717px,55.44px)
          }
          60.9375% {
            transform:translate(100.451px,55.81px)
          }
          61.2500% {
            transform:translate(101.174px,56.188px)
          }
          61.5625% {
            transform:translate(101.884px,56.575px)
          }
          61.8750% {
            transform:translate(102.582px,56.97px)
          }
          62.1875% {
            transform:translate(103.268px,57.374px)
          }
          62.5000% {
            transform:translate(103.941px,57.787px)
          }
          62.8125% {
            transform:translate(104.601px,58.207px)
          }
          63.1250% {
            transform:translate(105.247px,58.636px)
          }
          63.4375% {
            transform:translate(105.88px,59.072px)
          }
          63.7500% {
            transform:translate(106.499px,59.517px)
          }
          64.0625% {
            transform:translate(107.105px,59.968px)
          }
          64.3750% {
            transform:translate(107.695px,60.427px)
          }
          64.6875% {
            transform:translate(108.271px,60.893px)
          }
          65.0000% {
            transform:translate(108.833px,61.366px)
          }
          65.3125% {
            transform:translate(109.379px,61.846px)
          }
          65.6250% {
            transform:translate(109.911px,62.333px)
          }
          65.9375% {
            transform:translate(110.426px,62.826px)
          }
          66.2500% {
            transform:translate(110.927px,63.325px)
          }
          66.5625% {
            transform:translate(111.411px,63.83px)
          }
          66.8750% {
            transform:translate(111.88px,64.341px)
          }
          67.1875% {
            transform:translate(112.332px,64.858px)
          }
          67.5000% {
            transform:translate(112.768px,65.38px)
          }
          67.8125% {
            transform:translate(113.188px,65.908px)
          }
          68.1250% {
            transform:translate(113.591px,66.44px)
          }
          68.4375% {
            transform:translate(113.977px,66.978px)
          }
          68.7500% {
            transform:translate(114.346px,67.519px)
          }
          69.0625% {
            transform:translate(114.698px,68.066px)
          }
          69.3750% {
            transform:translate(115.033px,68.616px)
          }
          69.6875% {
            transform:translate(115.351px,69.171px)
          }
          70.0000% {
            transform:translate(115.651px,69.729px)
          }
          70.3125% {
            transform:translate(115.933px,70.291px)
          }
          70.6250% {
            transform:translate(116.198px,70.857px)
          }
          70.9375% {
            transform:translate(116.445px,71.425px)
          }
          71.2500% {
            transform:translate(116.674px,71.997px)
          }
          71.5625% {
            transform:translate(116.885px,72.571px)
          }
          71.8750% {
            transform:translate(117.078px,73.147px)
          }
          72.1875% {
            transform:translate(117.252px,73.726px)
          }
          72.5000% {
            transform:translate(117.409px,74.307px)
          }
          72.8125% {
            transform:translate(117.547px,74.89px)
          }
          73.1250% {
            transform:translate(117.667px,75.474px)
          }
          73.4375% {
            transform:translate(117.769px,76.059px)
          }
          73.7500% {
            transform:translate(117.852px,76.646px)
          }
          74.0625% {
            transform:translate(117.917px,77.234px)
          }
          74.3750% {
            transform:translate(117.963px,77.822px)
          }
          74.6875% {
            transform:translate(117.991px,78.411px)
          }
          75.0000% {
            transform:translate(118px,79px)
          }
          75.3125% {
            transform:translate(117.991px,79.589px)
          }
          75.6250% {
            transform:translate(117.963px,80.178px)
          }
          75.9375% {
            transform:translate(117.917px,80.766px)
          }
          76.2500% {
            transform:translate(117.852px,81.354px)
          }
          76.5625% {
            transform:translate(117.769px,81.941px)
          }
          76.8750% {
            transform:translate(117.667px,82.526px)
          }
          77.1875% {
            transform:translate(117.547px,83.11px)
          }
          77.5000% {
            transform:translate(117.409px,83.693px)
          }
          77.8125% {
            transform:translate(117.252px,84.274px)
          }
          78.1250% {
            transform:translate(117.078px,84.853px)
          }
          78.4375% {
            transform:translate(116.885px,85.429px)
          }
          78.7500% {
            transform:translate(116.674px,86.003px)
          }
          79.0625% {
            transform:translate(116.445px,86.575px)
          }
          79.3750% {
            transform:translate(116.198px,87.143px)
          }
          79.6875% {
            transform:translate(115.933px,87.709px)
          }
          80.0000% {
            transform:translate(115.651px,88.271px)
          }
          80.3125% {
            transform:translate(115.351px,88.829px)
          }
          80.6250% {
            transform:translate(115.033px,89.384px)
          }
          80.9375% {
            transform:translate(114.698px,89.934px)
          }
          81.2500% {
            transform:translate(114.346px,90.481px)
          }
          81.5625% {
            transform:translate(113.977px,91.022px)
          }
          81.8750% {
            transform:translate(113.591px,91.56px)
          }
          82.1875% {
            transform:translate(113.188px,92.092px)
          }
          82.5000% {
            transform:translate(112.768px,92.62px)
          }
          82.8125% {
            transform:translate(112.332px,93.142px)
          }
          83.1250% {
            transform:translate(111.88px,93.659px)
          }
          83.4375% {
            transform:translate(111.411px,94.17px)
          }
          83.7500% {
            transform:translate(110.927px,94.675px)
          }
          84.0625% {
            transform:translate(110.426px,95.174px)
          }
          84.3750% {
            transform:translate(109.911px,95.667px)
          }
          84.6875% {
            transform:translate(109.379px,96.154px)
          }
          85.0000% {
            transform:translate(108.833px,96.634px)
          }
          85.3125% {
            transform:translate(108.271px,97.107px)
          }
          85.6250% {
            transform:translate(107.695px,97.573px)
          }
          85.9375% {
            transform:translate(107.105px,98.032px)
          }
          86.2500% {
            transform:translate(106.499px,98.483px)
          }
          86.5625% {
            transform:translate(105.88px,98.928px)
          }
          86.8750% {
            transform:translate(105.247px,99.364px)
          }
          87.1875% {
            transform:translate(104.601px,99.793px)
          }
          87.5000% {
            transform:translate(103.941px,100.213px)
          }
          87.8125% {
            transform:translate(103.268px,100.626px)
          }
          88.1250% {
            transform:translate(102.582px,101.03px)
          }
          88.4375% {
            transform:translate(101.884px,101.425px)
          }
          88.7500% {
            transform:translate(101.174px,101.812px)
          }
          89.0625% {
            transform:translate(100.451px,102.19px)
          }
          89.3750% {
            transform:translate(99.717px,102.56px)
          }
          89.6875% {
            transform:translate(98.971px,102.92px)
          }
          90.0000% {
            transform:translate(98.214px,103.271px)
          }
          90.3125% {
            transform:translate(97.446px,103.612px)
          }
          90.6250% {
            transform:translate(96.667px,103.944px)
          }
          90.9375% {
            transform:translate(95.879px,104.267px)
          }
          91.2500% {
            transform:translate(95.08px,104.579px)
          }
          91.5625% {
            transform:translate(94.272px,104.882px)
          }
          91.8750% {
            transform:translate(93.454px,105.175px)
          }
          92.1875% {
            transform:translate(92.627px,105.458px)
          }
          92.5000% {
            transform:translate(91.792px,105.73px)
          }
          92.8125% {
            transform:translate(90.948px,105.992px)
          }
          93.1250% {
            transform:translate(90.096px,106.244px)
          }
          93.4375% {
            transform:translate(89.236px,106.486px)
          }
          93.7500% {
            transform:translate(88.369px,106.716px)
          }
          94.0625% {
            transform:translate(87.495px,106.936px)
          }
          94.3750% {
            transform:translate(86.614px,107.146px)
          }
          94.6875% {
            transform:translate(85.726px,107.344px)
          }
          95.0000% {
            transform:translate(84.833px,107.532px)
          }
          95.3125% {
            transform:translate(83.934px,107.708px)
          }
          95.6250% {
            transform:translate(83.029px,107.874px)
          }
          95.9375% {
            transform:translate(82.12px,108.028px)
          }
          96.2500% {
            transform:translate(81.205px,108.171px)
          }
          96.5625% {
            transform:translate(80.287px,108.303px)
          }
          96.8750% {
            transform:translate(79.364px,108.424px)
          }
          97.1875% {
            transform:translate(78.438px,108.533px)
          }
          97.5000% {
            transform:translate(77.509px,108.631px)
          }
          97.8125% {
            transform:translate(76.577px,108.717px)
          }
          98.1250% {
            transform:translate(75.642px,108.792px)
          }
          98.4375% {
            transform:translate(74.705px,108.856px)
          }
          98.7500% {
            transform:translate(73.766px,108.908px)
          }
          99.0625% {
            transform:translate(72.826px,108.948px)
          }
          99.3750% {
            transform:translate(71.884px,108.977px)
          }
          99.6875% {
            transform:translate(70.942px,108.994px)
          }
          100.0000% {
            transform:translate(70px,109px)
          }
        }
        @keyframes overturn-color-4 {
          0.0000% {
            fill:rgb(119 201 239)
          }
          0.3125% {
            fill:rgb(119 201 239)
          }
          0.6250% {
            fill:rgb(119 201 239)
          }
          0.9375% {
            fill:rgb(119 201 239)
          }
          1.2500% {
            fill:rgb(119 201 239)
          }
          1.5625% {
            fill:rgb(119 201 239)
          }
          1.8750% {
            fill:rgb(119 201 239)
          }
          2.1875% {
            fill:rgb(119 201 239)
          }
          2.5000% {
            fill:rgb(119 201 239)
          }
          2.8125% {
            fill:rgb(119 201 239)
          }
          3.1250% {
            fill:rgb(119 201 239)
          }
          3.4375% {
            fill:rgb(119 201 239)
          }
          3.7500% {
            fill:rgb(119 201 239)
          }
          4.0625% {
            fill:rgb(119 201 239)
          }
          4.3750% {
            fill:rgb(119 201 239)
          }
          4.6875% {
            fill:rgb(119 201 239)
          }
          5.0000% {
            fill:rgb(119 201 239)
          }
          5.3125% {
            fill:rgb(119 201 239)
          }
          5.6250% {
            fill:rgb(119 201 239)
          }
          5.9375% {
            fill:rgb(119 201 239)
          }
          6.2500% {
            fill:rgb(119 201 239)
          }
          6.5625% {
            fill:rgb(119 201 239)
          }
          6.8750% {
            fill:rgb(119 201 239)
          }
          7.1875% {
            fill:rgb(119 201 239)
          }
          7.5000% {
            fill:rgb(119 201 239)
          }
          7.8125% {
            fill:rgb(119 201 239)
          }
          8.1250% {
            fill:rgb(119 201 239)
          }
          8.4375% {
            fill:rgb(119 201 239)
          }
          8.7500% {
            fill:rgb(119 201 239)
          }
          9.0625% {
            fill:rgb(119 201 239)
          }
          9.3750% {
            fill:rgb(119 201 239)
          }
          9.6875% {
            fill:rgb(119 201 239)
          }
          10.0000% {
            fill:rgb(119 201 239)
          }
          10.3125% {
            fill:rgb(119 201 239)
          }
          10.6250% {
            fill:rgb(119 201 239)
          }
          10.9375% {
            fill:rgb(119 201 239)
          }
          11.2500% {
            fill:rgb(119 201 239)
          }
          11.5625% {
            fill:rgb(119 201 239)
          }
          11.8750% {
            fill:rgb(119 201 239)
          }
          12.1875% {
            fill:rgb(119 201 239)
          }
          12.5000% {
            fill:rgb(119 201 239)
          }
          12.8125% {
            fill:rgb(119 201 239)
          }
          13.1250% {
            fill:rgb(119 201 239)
          }
          13.4375% {
            fill:rgb(119 201 239)
          }
          13.7500% {
            fill:rgb(119 201 239)
          }
          14.0625% {
            fill:rgb(119 201 239)
          }
          14.3750% {
            fill:rgb(119 201 239)
          }
          14.6875% {
            fill:rgb(119 201 239)
          }
          15.0000% {
            fill:rgb(119 201 239)
          }
          15.3125% {
            fill:rgb(119 201 239)
          }
          15.6250% {
            fill:rgb(119 201 239)
          }
          15.9375% {
            fill:rgb(119 201 239)
          }
          16.2500% {
            fill:rgb(119 201 239)
          }
          16.5625% {
            fill:rgb(119 201 239)
          }
          16.8750% {
            fill:rgb(119 201 239)
          }
          17.1875% {
            fill:rgb(119 201 239)
          }
          17.5000% {
            fill:rgb(119 201 239)
          }
          17.8125% {
            fill:rgb(119 201 239)
          }
          18.1250% {
            fill:rgb(119 201 239)
          }
          18.4375% {
            fill:rgb(119 201 239)
          }
          18.7500% {
            fill:rgb(119 201 239)
          }
          19.0625% {
            fill:rgb(119 201 239)
          }
          19.3750% {
            fill:rgb(119 201 239)
          }
          19.6875% {
            fill:rgb(119 201 239)
          }
          20.0000% {
            fill:rgb(119 201 239)
          }
          20.3125% {
            fill:rgb(119 201 239)
          }
          20.6250% {
            fill:rgb(119 201 239)
          }
          20.9375% {
            fill:rgb(119 201 239)
          }
          21.2500% {
            fill:rgb(119 201 239)
          }
          21.5625% {
            fill:rgb(119 201 239)
          }
          21.8750% {
            fill:rgb(119 201 239)
          }
          22.1875% {
            fill:rgb(119 201 239)
          }
          22.5000% {
            fill:rgb(119 201 239)
          }
          22.8125% {
            fill:rgb(119 201 239)
          }
          23.1250% {
            fill:rgb(119 201 239)
          }
          23.4375% {
            fill:rgb(119 201 239)
          }
          23.7500% {
            fill:rgb(119 201 239)
          }
          24.0625% {
            fill:rgb(119 201 239)
          }
          24.3750% {
            fill:rgb(119 201 239)
          }
          24.6875% {
            fill:rgb(119 201 239)
          }
          25.0000% {
            fill:rgb(119 201 239)
          }
          25.3125% {
            fill:rgb(119 201 239)
          }
          25.6250% {
            fill:rgb(119 201 239)
          }
          25.9375% {
            fill:rgb(120 201 239)
          }
          26.2500% {
            fill:rgb(120 201 238)
          }
          26.5625% {
            fill:rgb(120 201 238)
          }
          26.8750% {
            fill:rgb(121 201 237)
          }
          27.1875% {
            fill:rgb(122 201 236)
          }
          27.5000% {
            fill:rgb(122 201 236)
          }
          27.8125% {
            fill:rgb(123 201 235)
          }
          28.1250% {
            fill:rgb(124 201 234)
          }
          28.4375% {
            fill:rgb(125 201 233)
          }
          28.7500% {
            fill:rgb(127 201 232)
          }
          29.0625% {
            fill:rgb(128 201 231)
          }
          29.3750% {
            fill:rgb(129 201 229)
          }
          29.6875% {
            fill:rgb(130 201 228)
          }
          30.0000% {
            fill:rgb(132 201 227)
          }
          30.3125% {
            fill:rgb(133 201 225)
          }
          30.6250% {
            fill:rgb(135 201 224)
          }
          30.9375% {
            fill:rgb(137 201 222)
          }
          31.2500% {
            fill:rgb(138 201 220)
          }
          31.5625% {
            fill:rgb(140 201 219)
          }
          31.8750% {
            fill:rgb(142 201 217)
          }
          32.1875% {
            fill:rgb(144 201 215)
          }
          32.5000% {
            fill:rgb(146 201 213)
          }
          32.8125% {
            fill:rgb(148 201 211)
          }
          33.1250% {
            fill:rgb(150 201 209)
          }
          33.4375% {
            fill:rgb(152 201 207)
          }
          33.7500% {
            fill:rgb(154 201 205)
          }
          34.0625% {
            fill:rgb(156 201 203)
          }
          34.3750% {
            fill:rgb(158 201 201)
          }
          34.6875% {
            fill:rgb(160 201 199)
          }
          35.0000% {
            fill:rgb(163 201 197)
          }
          35.3125% {
            fill:rgb(165 201 195)
          }
          35.6250% {
            fill:rgb(167 201 192)
          }
          35.9375% {
            fill:rgb(169 201 190)
          }
          36.2500% {
            fill:rgb(172 201 188)
          }
          36.5625% {
            fill:rgb(174 201 186)
          }
          36.8750% {
            fill:rgb(176 201 183)
          }
          37.1875% {
            fill:rgb(179 201 181)
          }
          37.5000% {
            fill:rgb(181 201 179)
          }
          37.8125% {
            fill:rgb(183 201 177)
          }
          38.1250% {
            fill:rgb(186 201 175)
          }
          38.4375% {
            fill:rgb(188 201 172)
          }
          38.7500% {
            fill:rgb(190 201 170)
          }
          39.0625% {
            fill:rgb(193 201 168)
          }
          39.3750% {
            fill:rgb(195 201 166)
          }
          39.6875% {
            fill:rgb(197 201 163)
          }
          40.0000% {
            fill:rgb(199 201 161)
          }
          40.3125% {
            fill:rgb(202 201 159)
          }
          40.6250% {
            fill:rgb(204 201 157)
          }
          40.9375% {
            fill:rgb(206 201 155)
          }
          41.2500% {
            fill:rgb(208 201 153)
          }
          41.5625% {
            fill:rgb(210 201 151)
          }
          41.8750% {
            fill:rgb(212 201 149)
          }
          42.1875% {
            fill:rgb(214 201 147)
          }
          42.5000% {
            fill:rgb(216 201 145)
          }
          42.8125% {
            fill:rgb(218 201 143)
          }
          43.1250% {
            fill:rgb(220 201 141)
          }
          43.4375% {
            fill:rgb(222 201 139)
          }
          43.7500% {
            fill:rgb(224 201 138)
          }
          44.0625% {
            fill:rgb(225 201 136)
          }
          44.3750% {
            fill:rgb(227 201 134)
          }
          44.6875% {
            fill:rgb(229 201 133)
          }
          45.0000% {
            fill:rgb(230 201 131)
          }
          45.3125% {
            fill:rgb(232 201 130)
          }
          45.6250% {
            fill:rgb(233 201 129)
          }
          45.9375% {
            fill:rgb(234 201 127)
          }
          46.2500% {
            fill:rgb(235 201 126)
          }
          46.5625% {
            fill:rgb(237 201 125)
          }
          46.8750% {
            fill:rgb(238 201 124)
          }
          47.1875% {
            fill:rgb(239 201 123)
          }
          47.5000% {
            fill:rgb(240 201 122)
          }
          47.8125% {
            fill:rgb(240 201 122)
          }
          48.1250% {
            fill:rgb(241 201 121)
          }
          48.4375% {
            fill:rgb(242 201 120)
          }
          48.7500% {
            fill:rgb(242 201 120)
          }
          49.0625% {
            fill:rgb(242 201 119)
          }
          49.3750% {
            fill:rgb(243 201 119)
          }
          49.6875% {
            fill:rgb(243 201 119)
          }
          50.0000% {
            fill:rgb(243 201 119)
          }
          50.3125% {
            fill:rgb(243 201 119)
          }
          50.6250% {
            fill:rgb(243 201 119)
          }
          50.9375% {
            fill:rgb(243 201 119)
          }
          51.2500% {
            fill:rgb(243 201 119)
          }
          51.5625% {
            fill:rgb(243 201 119)
          }
          51.8750% {
            fill:rgb(243 201 119)
          }
          52.1875% {
            fill:rgb(243 201 119)
          }
          52.5000% {
            fill:rgb(243 201 119)
          }
          52.8125% {
            fill:rgb(243 201 119)
          }
          53.1250% {
            fill:rgb(243 201 119)
          }
          53.4375% {
            fill:rgb(243 201 119)
          }
          53.7500% {
            fill:rgb(243 201 119)
          }
          54.0625% {
            fill:rgb(243 201 119)
          }
          54.3750% {
            fill:rgb(243 201 119)
          }
          54.6875% {
            fill:rgb(243 201 119)
          }
          55.0000% {
            fill:rgb(243 201 119)
          }
          55.3125% {
            fill:rgb(243 201 119)
          }
          55.6250% {
            fill:rgb(243 201 119)
          }
          55.9375% {
            fill:rgb(243 201 119)
          }
          56.2500% {
            fill:rgb(243 201 119)
          }
          56.5625% {
            fill:rgb(243 201 119)
          }
          56.8750% {
            fill:rgb(243 201 119)
          }
          57.1875% {
            fill:rgb(243 201 119)
          }
          57.5000% {
            fill:rgb(243 201 119)
          }
          57.8125% {
            fill:rgb(243 201 119)
          }
          58.1250% {
            fill:rgb(243 201 119)
          }
          58.4375% {
            fill:rgb(243 201 119)
          }
          58.7500% {
            fill:rgb(243 201 119)
          }
          59.0625% {
            fill:rgb(242 201 120)
          }
          59.3750% {
            fill:rgb(242 201 120)
          }
          59.6875% {
            fill:rgb(241 201 121)
          }
          60.0000% {
            fill:rgb(240 201 122)
          }
          60.3125% {
            fill:rgb(238 201 124)
          }
          60.6250% {
            fill:rgb(237 201 125)
          }
          60.9375% {
            fill:rgb(235 201 127)
          }
          61.2500% {
            fill:rgb(233 201 129)
          }
          61.5625% {
            fill:rgb(231 201 131)
          }
          61.8750% {
            fill:rgb(229 201 133)
          }
          62.1875% {
            fill:rgb(226 201 135)
          }
          62.5000% {
            fill:rgb(224 201 138)
          }
          62.8125% {
            fill:rgb(221 201 140)
          }
          63.1250% {
            fill:rgb(218 201 143)
          }
          63.4375% {
            fill:rgb(215 201 146)
          }
          63.7500% {
            fill:rgb(212 201 149)
          }
          64.0625% {
            fill:rgb(209 201 152)
          }
          64.3750% {
            fill:rgb(206 201 155)
          }
          64.6875% {
            fill:rgb(203 201 158)
          }
          65.0000% {
            fill:rgb(199 201 161)
          }
          65.3125% {
            fill:rgb(196 201 165)
          }
          65.6250% {
            fill:rgb(193 201 168)
          }
          65.9375% {
            fill:rgb(189 201 171)
          }
          66.2500% {
            fill:rgb(186 201 175)
          }
          66.5625% {
            fill:rgb(182 201 178)
          }
          66.8750% {
            fill:rgb(179 201 181)
          }
          67.1875% {
            fill:rgb(175 201 185)
          }
          67.5000% {
            fill:rgb(172 201 188)
          }
          67.8125% {
            fill:rgb(168 201 191)
          }
          68.1250% {
            fill:rgb(165 201 195)
          }
          68.4375% {
            fill:rgb(162 201 198)
          }
          68.7500% {
            fill:rgb(158 201 201)
          }
          69.0625% {
            fill:rgb(155 201 204)
          }
          69.3750% {
            fill:rgb(152 201 207)
          }
          69.6875% {
            fill:rgb(149 201 210)
          }
          70.0000% {
            fill:rgb(146 201 213)
          }
          70.3125% {
            fill:rgb(143 201 216)
          }
          70.6250% {
            fill:rgb(140 201 219)
          }
          70.9375% {
            fill:rgb(138 201 221)
          }
          71.2500% {
            fill:rgb(135 201 224)
          }
          71.5625% {
            fill:rgb(133 201 226)
          }
          71.8750% {
            fill:rgb(130 201 228)
          }
          72.1875% {
            fill:rgb(128 201 230)
          }
          72.5000% {
            fill:rgb(127 201 232)
          }
          72.8125% {
            fill:rgb(125 201 233)
          }
          73.1250% {
            fill:rgb(123 201 235)
          }
          73.4375% {
            fill:rgb(122 201 236)
          }
          73.7500% {
            fill:rgb(121 201 237)
          }
          74.0625% {
            fill:rgb(120 201 238)
          }
          74.3750% {
            fill:rgb(120 201 239)
          }
          74.6875% {
            fill:rgb(119 201 239)
          }
          75.0000% {
            fill:rgb(119 201 239)
          }
          75.3125% {
            fill:rgb(119 201 239)
          }
          75.6250% {
            fill:rgb(119 201 239)
          }
          75.9375% {
            fill:rgb(119 201 239)
          }
          76.2500% {
            fill:rgb(119 201 239)
          }
          76.5625% {
            fill:rgb(119 201 239)
          }
          76.8750% {
            fill:rgb(119 201 239)
          }
          77.1875% {
            fill:rgb(119 201 239)
          }
          77.5000% {
            fill:rgb(119 201 239)
          }
          77.8125% {
            fill:rgb(119 201 239)
          }
          78.1250% {
            fill:rgb(119 201 239)
          }
          78.4375% {
            fill:rgb(119 201 239)
          }
          78.7500% {
            fill:rgb(119 201 239)
          }
          79.0625% {
            fill:rgb(119 201 239)
          }
          79.3750% {
            fill:rgb(119 201 239)
          }
          79.6875% {
            fill:rgb(119 201 239)
          }
          80.0000% {
            fill:rgb(119 201 239)
          }
          80.3125% {
            fill:rgb(119 201 239)
          }
          80.6250% {
            fill:rgb(119 201 239)
          }
          80.9375% {
            fill:rgb(119 201 239)
          }
          81.2500% {
            fill:rgb(119 201 239)
          }
          81.5625% {
            fill:rgb(119 201 239)
          }
          81.8750% {
            fill:rgb(119 201 239)
          }
          82.1875% {
            fill:rgb(119 201 239)
          }
          82.5000% {
            fill:rgb(119 201 239)
          }
          82.8125% {
            fill:rgb(119 201 239)
          }
          83.1250% {
            fill:rgb(119 201 239)
          }
          83.4375% {
            fill:rgb(119 201 239)
          }
          83.7500% {
            fill:rgb(119 201 239)
          }
          84.0625% {
            fill:rgb(119 201 239)
          }
          84.3750% {
            fill:rgb(119 201 239)
          }
          84.6875% {
            fill:rgb(119 201 239)
          }
          85.0000% {
            fill:rgb(119 201 239)
          }
          85.3125% {
            fill:rgb(119 201 239)
          }
          85.6250% {
            fill:rgb(119 201 239)
          }
          85.9375% {
            fill:rgb(119 201 239)
          }
          86.2500% {
            fill:rgb(119 201 239)
          }
          86.5625% {
            fill:rgb(119 201 239)
          }
          86.8750% {
            fill:rgb(119 201 239)
          }
          87.1875% {
            fill:rgb(119 201 239)
          }
          87.5000% {
            fill:rgb(119 201 239)
          }
          87.8125% {
            fill:rgb(119 201 239)
          }
          88.1250% {
            fill:rgb(119 201 239)
          }
          88.4375% {
            fill:rgb(119 201 239)
          }
          88.7500% {
            fill:rgb(119 201 239)
          }
          89.0625% {
            fill:rgb(119 201 239)
          }
          89.3750% {
            fill:rgb(119 201 239)
          }
          89.6875% {
            fill:rgb(119 201 239)
          }
          90.0000% {
            fill:rgb(119 201 239)
          }
          90.3125% {
            fill:rgb(119 201 239)
          }
          90.6250% {
            fill:rgb(119 201 239)
          }
          90.9375% {
            fill:rgb(119 201 239)
          }
          91.2500% {
            fill:rgb(119 201 239)
          }
          91.5625% {
            fill:rgb(119 201 239)
          }
          91.8750% {
            fill:rgb(119 201 239)
          }
          92.1875% {
            fill:rgb(119 201 239)
          }
          92.5000% {
            fill:rgb(119 201 239)
          }
          92.8125% {
            fill:rgb(119 201 239)
          }
          93.1250% {
            fill:rgb(119 201 239)
          }
          93.4375% {
            fill:rgb(119 201 239)
          }
          93.7500% {
            fill:rgb(119 201 239)
          }
          94.0625% {
            fill:rgb(119 201 239)
          }
          94.3750% {
            fill:rgb(119 201 239)
          }
          94.6875% {
            fill:rgb(119 201 239)
          }
          95.0000% {
            fill:rgb(119 201 239)
          }
          95.3125% {
            fill:rgb(119 201 239)
          }
          95.6250% {
            fill:rgb(119 201 239)
          }
          95.9375% {
            fill:rgb(119 201 239)
          }
          96.2500% {
            fill:rgb(119 201 239)
          }
          96.5625% {
            fill:rgb(119 201 239)
          }
          96.8750% {
            fill:rgb(119 201 239)
          }
          97.1875% {
            fill:rgb(119 201 239)
          }
          97.5000% {
            fill:rgb(119 201 239)
          }
          97.8125% {
            fill:rgb(119 201 239)
          }
          98.1250% {
            fill:rgb(119 201 239)
          }
          98.4375% {
            fill:rgb(119 201 239)
          }
          98.7500% {
            fill:rgb(119 201 239)
          }
          99.0625% {
            fill:rgb(119 201 239)
          }
          99.3750% {
            fill:rgb(119 201 239)
          }
          99.6875% {
            fill:rgb(119 201 239)
          }
          100.0000% {
            fill:rgb(119 201 239)
          }
        }
        @keyframes overturn-mark-4 {
          0.0000% {
            opacity:1
          }
          0.3125% {
            opacity:1
          }
          0.6250% {
            opacity:1
          }
          0.9375% {
            opacity:1
          }
          1.2500% {
            opacity:1
          }
          1.5625% {
            opacity:1
          }
          1.8750% {
            opacity:1
          }
          2.1875% {
            opacity:1
          }
          2.5000% {
            opacity:1
          }
          2.8125% {
            opacity:1
          }
          3.1250% {
            opacity:1
          }
          3.4375% {
            opacity:1
          }
          3.7500% {
            opacity:1
          }
          4.0625% {
            opacity:1
          }
          4.3750% {
            opacity:1
          }
          4.6875% {
            opacity:1
          }
          5.0000% {
            opacity:1
          }
          5.3125% {
            opacity:1
          }
          5.6250% {
            opacity:1
          }
          5.9375% {
            opacity:1
          }
          6.2500% {
            opacity:1
          }
          6.5625% {
            opacity:1
          }
          6.8750% {
            opacity:1
          }
          7.1875% {
            opacity:1
          }
          7.5000% {
            opacity:1
          }
          7.8125% {
            opacity:1
          }
          8.1250% {
            opacity:1
          }
          8.4375% {
            opacity:1
          }
          8.7500% {
            opacity:1
          }
          9.0625% {
            opacity:1
          }
          9.3750% {
            opacity:1
          }
          9.6875% {
            opacity:1
          }
          10.0000% {
            opacity:1
          }
          10.3125% {
            opacity:1
          }
          10.6250% {
            opacity:1
          }
          10.9375% {
            opacity:1
          }
          11.2500% {
            opacity:1
          }
          11.5625% {
            opacity:1
          }
          11.8750% {
            opacity:1
          }
          12.1875% {
            opacity:1
          }
          12.5000% {
            opacity:1
          }
          12.8125% {
            opacity:1
          }
          13.1250% {
            opacity:1
          }
          13.4375% {
            opacity:1
          }
          13.7500% {
            opacity:1
          }
          14.0625% {
            opacity:1
          }
          14.3750% {
            opacity:1
          }
          14.6875% {
            opacity:1
          }
          15.0000% {
            opacity:1
          }
          15.3125% {
            opacity:1
          }
          15.6250% {
            opacity:1
          }
          15.9375% {
            opacity:1
          }
          16.2500% {
            opacity:1
          }
          16.5625% {
            opacity:1
          }
          16.8750% {
            opacity:1
          }
          17.1875% {
            opacity:1
          }
          17.5000% {
            opacity:1
          }
          17.8125% {
            opacity:1
          }
          18.1250% {
            opacity:1
          }
          18.4375% {
            opacity:1
          }
          18.7500% {
            opacity:1
          }
          19.0625% {
            opacity:1
          }
          19.3750% {
            opacity:1
          }
          19.6875% {
            opacity:1
          }
          20.0000% {
            opacity:1
          }
          20.3125% {
            opacity:1
          }
          20.6250% {
            opacity:1
          }
          20.9375% {
            opacity:1
          }
          21.2500% {
            opacity:1
          }
          21.5625% {
            opacity:1
          }
          21.8750% {
            opacity:1
          }
          22.1875% {
            opacity:1
          }
          22.5000% {
            opacity:1
          }
          22.8125% {
            opacity:1
          }
          23.1250% {
            opacity:1
          }
          23.4375% {
            opacity:1
          }
          23.7500% {
            opacity:1
          }
          24.0625% {
            opacity:1
          }
          24.3750% {
            opacity:1
          }
          24.6875% {
            opacity:1
          }
          25.0000% {
            opacity:1
          }
          25.3125% {
            opacity:1.0
          }
          25.6250% {
            opacity:0.998
          }
          25.9375% {
            opacity:0.996
          }
          26.2500% {
            opacity:0.993
          }
          26.5625% {
            opacity:0.989
          }
          26.8750% {
            opacity:0.984
          }
          27.1875% {
            opacity:0.978
          }
          27.5000% {
            opacity:0.972
          }
          27.8125% {
            opacity:0.965
          }
          28.1250% {
            opacity:0.957
          }
          28.4375% {
            opacity:0.948
          }
          28.7500% {
            opacity:0.939
          }
          29.0625% {
            opacity:0.929
          }
          29.3750% {
            opacity:0.919
          }
          29.6875% {
            opacity:0.908
          }
          30.0000% {
            opacity:0.896
          }
          30.3125% {
            opacity:0.884
          }
          30.6250% {
            opacity:0.871
          }
          30.9375% {
            opacity:0.858
          }
          31.2500% {
            opacity:0.844
          }
          31.5625% {
            opacity:0.829
          }
          31.8750% {
            opacity:0.815
          }
          32.1875% {
            opacity:0.8
          }
          32.5000% {
            opacity:0.784
          }
          32.8125% {
            opacity:0.768
          }
          33.1250% {
            opacity:0.752
          }
          33.4375% {
            opacity:0.735
          }
          33.7500% {
            opacity:0.718
          }
          34.0625% {
            opacity:0.701
          }
          34.3750% {
            opacity:0.684
          }
          34.6875% {
            opacity:0.666
          }
          35.0000% {
            opacity:0.648
          }
          35.3125% {
            opacity:0.63
          }
          35.6250% {
            opacity:0.612
          }
          35.9375% {
            opacity:0.593
          }
          36.2500% {
            opacity:0.575
          }
          36.5625% {
            opacity:0.556
          }
          36.8750% {
            opacity:0.537
          }
          37.1875% {
            opacity:0.519
          }
          37.5000% {
            opacity:0.5
          }
          37.8125% {
            opacity:0.481
          }
          38.1250% {
            opacity:0.463
          }
          38.4375% {
            opacity:0.444
          }
          38.7500% {
            opacity:0.425
          }
          39.0625% {
            opacity:0.407
          }
          39.3750% {
            opacity:0.388
          }
          39.6875% {
            opacity:0.37
          }
          40.0000% {
            opacity:0.352
          }
          40.3125% {
            opacity:0.334
          }
          40.6250% {
            opacity:0.316
          }
          40.9375% {
            opacity:0.299
          }
          41.2500% {
            opacity:0.282
          }
          41.5625% {
            opacity:0.265
          }
          41.8750% {
            opacity:0.248
          }
          42.1875% {
            opacity:0.232
          }
          42.5000% {
            opacity:0.216
          }
          42.8125% {
            opacity:0.2
          }
          43.1250% {
            opacity:0.185
          }
          43.4375% {
            opacity:0.171
          }
          43.7500% {
            opacity:0.156
          }
          44.0625% {
            opacity:0.142
          }
          44.3750% {
            opacity:0.129
          }
          44.6875% {
            opacity:0.116
          }
          45.0000% {
            opacity:0.104
          }
          45.3125% {
            opacity:0.092
          }
          45.6250% {
            opacity:0.081
          }
          45.9375% {
            opacity:0.071
          }
          46.2500% {
            opacity:0.061
          }
          46.5625% {
            opacity:0.052
          }
          46.8750% {
            opacity:0.043
          }
          47.1875% {
            opacity:0.035
          }
          47.5000% {
            opacity:0.028
          }
          47.8125% {
            opacity:0.022
          }
          48.1250% {
            opacity:0.016
          }
          48.4375% {
            opacity:0.011
          }
          48.7500% {
            opacity:0.007
          }
          49.0625% {
            opacity:0.004
          }
          49.3750% {
            opacity:0.002
          }
          49.6875% {
            opacity:0.0
          }
          50.0000% {
            opacity:0
          }
          50.3125% {
            opacity:0
          }
          50.6250% {
            opacity:0
          }
          50.9375% {
            opacity:0
          }
          51.2500% {
            opacity:0
          }
          51.5625% {
            opacity:0
          }
          51.8750% {
            opacity:0
          }
          52.1875% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          52.8125% {
            opacity:0
          }
          53.1250% {
            opacity:0
          }
          53.4375% {
            opacity:0
          }
          53.7500% {
            opacity:0
          }
          54.0625% {
            opacity:0
          }
          54.3750% {
            opacity:0
          }
          54.6875% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.3125% {
            opacity:0
          }
          55.6250% {
            opacity:0
          }
          55.9375% {
            opacity:0
          }
          56.2500% {
            opacity:0
          }
          56.5625% {
            opacity:0
          }
          56.8750% {
            opacity:0
          }
          57.1875% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          57.8125% {
            opacity:0
          }
          58.1250% {
            opacity:0
          }
          58.4375% {
            opacity:0.0
          }
          58.7500% {
            opacity:0.002
          }
          59.0625% {
            opacity:0.006
          }
          59.3750% {
            opacity:0.011
          }
          59.6875% {
            opacity:0.019
          }
          60.0000% {
            opacity:0.028
          }
          60.3125% {
            opacity:0.039
          }
          60.6250% {
            opacity:0.052
          }
          60.9375% {
            opacity:0.066
          }
          61.2500% {
            opacity:0.081
          }
          61.5625% {
            opacity:0.098
          }
          61.8750% {
            opacity:0.116
          }
          62.1875% {
            opacity:0.136
          }
          62.5000% {
            opacity:0.156
          }
          62.8125% {
            opacity:0.178
          }
          63.1250% {
            opacity:0.2
          }
          63.4375% {
            opacity:0.224
          }
          63.7500% {
            opacity:0.248
          }
          64.0625% {
            opacity:0.273
          }
          64.3750% {
            opacity:0.299
          }
          64.6875% {
            opacity:0.325
          }
          65.0000% {
            opacity:0.352
          }
          65.3125% {
            opacity:0.379
          }
          65.6250% {
            opacity:0.407
          }
          65.9375% {
            opacity:0.435
          }
          66.2500% {
            opacity:0.463
          }
          66.5625% {
            opacity:0.491
          }
          66.8750% {
            opacity:0.519
          }
          67.1875% {
            opacity:0.547
          }
          67.5000% {
            opacity:0.575
          }
          67.8125% {
            opacity:0.602
          }
          68.1250% {
            opacity:0.63
          }
          68.4375% {
            opacity:0.657
          }
          68.7500% {
            opacity:0.684
          }
          69.0625% {
            opacity:0.71
          }
          69.3750% {
            opacity:0.735
          }
          69.6875% {
            opacity:0.76
          }
          70.0000% {
            opacity:0.784
          }
          70.3125% {
            opacity:0.807
          }
          70.6250% {
            opacity:0.829
          }
          70.9375% {
            opacity:0.851
          }
          71.2500% {
            opacity:0.871
          }
          71.5625% {
            opacity:0.89
          }
          71.8750% {
            opacity:0.908
          }
          72.1875% {
            opacity:0.924
          }
          72.5000% {
            opacity:0.939
          }
          72.8125% {
            opacity:0.953
          }
          73.1250% {
            opacity:0.965
          }
          73.4375% {
            opacity:0.975
          }
          73.7500% {
            opacity:0.984
          }
          74.0625% {
            opacity:0.991
          }
          74.3750% {
            opacity:0.996
          }
          74.6875% {
            opacity:0.999
          }
          75.0000% {
            opacity:1
          }
          75.3125% {
            opacity:1
          }
          75.6250% {
            opacity:1
          }
          75.9375% {
            opacity:1
          }
          76.2500% {
            opacity:1
          }
          76.5625% {
            opacity:1
          }
          76.8750% {
            opacity:1
          }
          77.1875% {
            opacity:1
          }
          77.5000% {
            opacity:1
          }
          77.8125% {
            opacity:1
          }
          78.1250% {
            opacity:1
          }
          78.4375% {
            opacity:1
          }
          78.7500% {
            opacity:1
          }
          79.0625% {
            opacity:1
          }
          79.3750% {
            opacity:1
          }
          79.6875% {
            opacity:1
          }
          80.0000% {
            opacity:1
          }
          80.3125% {
            opacity:1
          }
          80.6250% {
            opacity:1
          }
          80.9375% {
            opacity:1
          }
          81.2500% {
            opacity:1
          }
          81.5625% {
            opacity:1
          }
          81.8750% {
            opacity:1
          }
          82.1875% {
            opacity:1
          }
          82.5000% {
            opacity:1
          }
          82.8125% {
            opacity:1
          }
          83.1250% {
            opacity:1
          }
          83.4375% {
            opacity:1
          }
          83.7500% {
            opacity:1
          }
          84.0625% {
            opacity:1
          }
          84.3750% {
            opacity:1
          }
          84.6875% {
            opacity:1
          }
          85.0000% {
            opacity:1
          }
          85.3125% {
            opacity:1
          }
          85.6250% {
            opacity:1
          }
          85.9375% {
            opacity:1
          }
          86.2500% {
            opacity:1
          }
          86.5625% {
            opacity:1
          }
          86.8750% {
            opacity:1
          }
          87.1875% {
            opacity:1
          }
          87.5000% {
            opacity:1
          }
          87.8125% {
            opacity:1
          }
          88.1250% {
            opacity:1
          }
          88.4375% {
            opacity:1
          }
          88.7500% {
            opacity:1
          }
          89.0625% {
            opacity:1
          }
          89.3750% {
            opacity:1
          }
          89.6875% {
            opacity:1
          }
          90.0000% {
            opacity:1
          }
          90.3125% {
            opacity:1
          }
          90.6250% {
            opacity:1
          }
          90.9375% {
            opacity:1
          }
          91.2500% {
            opacity:1
          }
          91.5625% {
            opacity:1
          }
          91.8750% {
            opacity:1
          }
          92.1875% {
            opacity:1
          }
          92.5000% {
            opacity:1
          }
          92.8125% {
            opacity:1
          }
          93.1250% {
            opacity:1
          }
          93.4375% {
            opacity:1
          }
          93.7500% {
            opacity:1
          }
          94.0625% {
            opacity:1
          }
          94.3750% {
            opacity:1
          }
          94.6875% {
            opacity:1
          }
          95.0000% {
            opacity:1
          }
          95.3125% {
            opacity:1
          }
          95.6250% {
            opacity:1
          }
          95.9375% {
            opacity:1
          }
          96.2500% {
            opacity:1
          }
          96.5625% {
            opacity:1
          }
          96.8750% {
            opacity:1
          }
          97.1875% {
            opacity:1
          }
          97.5000% {
            opacity:1
          }
          97.8125% {
            opacity:1
          }
          98.1250% {
            opacity:1
          }
          98.4375% {
            opacity:1
          }
          98.7500% {
            opacity:1
          }
          99.0625% {
            opacity:1
          }
          99.3750% {
            opacity:1
          }
          99.6875% {
            opacity:1
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes overturn-fleck-4 {
          0.0000% {
            transform:translate(70px,109px);
            opacity:0
          }
          0.3125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          0.6250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          0.9375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          1.2500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          1.5625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          1.8750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          2.1875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          2.5000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          2.8125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          3.1250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          3.4375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          3.7500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          4.0625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          4.3750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          4.6875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          5.0000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          5.3125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          5.6250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          5.9375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          6.2500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          6.5625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          6.8750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          7.1875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          7.5000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          7.8125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          8.1250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          8.4375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          8.7500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          9.0625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          9.3750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          9.6875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          10.0000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          10.3125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          10.6250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          10.9375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          11.2500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          11.5625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          11.8750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          12.1875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          12.5000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          12.8125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          13.1250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          13.4375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          13.7500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          14.0625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          14.3750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          14.6875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          15.0000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          15.3125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          15.6250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          15.9375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          16.2500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          16.5625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          16.8750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          17.1875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          17.5000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          17.8125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          18.1250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          18.4375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          18.7500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          19.0625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          19.3750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          19.6875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          20.0000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          20.3125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          20.6250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          20.9375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          21.2500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          21.5625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          21.8750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          22.1875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          22.5000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          22.8125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          23.1250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          23.4375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          23.7500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          24.0625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          24.3750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          24.6875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          25.0000% {
            transform:translate(22px,79px);
            opacity:0
          }
          25.3125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          25.6250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          25.9375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          26.2500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          26.5625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          26.8750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          27.1875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          27.5000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          27.8125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          28.1250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          28.4375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          28.7500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          29.0625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          29.3750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          29.6875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          30.0000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          30.3125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          30.6250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          30.9375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          31.2500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          31.5625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          31.8750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          32.1875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          32.5000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          32.8125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          33.1250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          33.4375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          33.7500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          34.0625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          34.3750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          34.6875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          35.0000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          35.3125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          35.6250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          35.9375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          36.2500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          36.5625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          36.8750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          37.1875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          37.5000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          37.8125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          38.1250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          38.4375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          38.7500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          39.0625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          39.3750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          39.6875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          40.0000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          40.3125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          40.6250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          40.9375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          41.2500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          41.5625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          41.8750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          42.1875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          42.5000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          42.8125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          43.1250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          43.4375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          43.7500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          44.0625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          44.3750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          44.6875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          45.0000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          45.3125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          45.6250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          45.9375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          46.2500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          46.5625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          46.8750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          47.1875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          47.5000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          47.8125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          48.1250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          48.4375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          48.7500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          49.0625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          49.3750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          49.6875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          50.0000% {
            transform:translate(70px,44px);
            opacity:0
          }
          50.3125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          50.6250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          50.9375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          51.2500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          51.5625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          51.8750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          52.1875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          52.5000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          52.8125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          53.1250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          53.4375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          53.7500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          54.0625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          54.3750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          54.6875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          55.0000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          55.3125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          55.6250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          55.9375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          56.2500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          56.5625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          56.8750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          57.1875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          57.5000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          57.8125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          58.1250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          58.4375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          58.7500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          59.0625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          59.3750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          59.6875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          60.0000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          60.3125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          60.6250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          60.9375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          61.2500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          61.5625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          61.8750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          62.1875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          62.5000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          62.8125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          63.1250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          63.4375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          63.7500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          64.0625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          64.3750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          64.6875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          65.0000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          65.3125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          65.6250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          65.9375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          66.2500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          66.5625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          66.8750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          67.1875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          67.5000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          67.8125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          68.1250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          68.4375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          68.7500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          69.0625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          69.3750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          69.6875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          70.0000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          70.3125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          70.6250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          70.9375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          71.2500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          71.5625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          71.8750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          72.1875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          72.5000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          72.8125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          73.1250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          73.4375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          73.7500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          74.0625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          74.3750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          74.6875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          75.0000% {
            transform:translate(118px,79px);
            opacity:0
          }
          75.3125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          75.6250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          75.9375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          76.2500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          76.5625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          76.8750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          77.1875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          77.5000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          77.8125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          78.1250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          78.4375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          78.7500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          79.0625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          79.3750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          79.6875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          80.0000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          80.3125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          80.6250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          80.9375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          81.2500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          81.5625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          81.8750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          82.1875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          82.5000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          82.8125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          83.1250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          83.4375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          83.7500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          84.0625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          84.3750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          84.6875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          85.0000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          85.3125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          85.6250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          85.9375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          86.2500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          86.5625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          86.8750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          87.1875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          87.5000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          87.8125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          88.1250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          88.4375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          88.7500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          89.0625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          89.3750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          89.6875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          90.0000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          90.3125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          90.6250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          90.9375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          91.2500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          91.5625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          91.8750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          92.1875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          92.5000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          92.8125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          93.1250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          93.4375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          93.7500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          94.0625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          94.3750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          94.6875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          95.0000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          95.3125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          95.6250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          95.9375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          96.2500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          96.5625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          96.8750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          97.1875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          97.5000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          97.8125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          98.1250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          98.4375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          98.7500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          99.0625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          99.3750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          99.6875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          100.0000% {
            transform:translate(70px,109px);
            opacity:0
          }
        }
        .parcel-5 {
          animation:overturn-parcel-5 16s linear infinite
        }
        .color-5 {
          animation:overturn-color-5 16s linear infinite
        }
        .mark-5 {
          animation:overturn-mark-5 16s linear infinite
        }
        .fleck-5 {
          animation:overturn-fleck-5 16s linear infinite
        }
        @keyframes overturn-parcel-5 {
          0.0000% {
            transform:translate(36.059px,100.213px)
          }
          0.3125% {
            transform:translate(35.399px,99.793px)
          }
          0.6250% {
            transform:translate(34.753px,99.364px)
          }
          0.9375% {
            transform:translate(34.12px,98.928px)
          }
          1.2500% {
            transform:translate(33.501px,98.483px)
          }
          1.5625% {
            transform:translate(32.895px,98.032px)
          }
          1.8750% {
            transform:translate(32.305px,97.573px)
          }
          2.1875% {
            transform:translate(31.729px,97.107px)
          }
          2.5000% {
            transform:translate(31.167px,96.634px)
          }
          2.8125% {
            transform:translate(30.621px,96.154px)
          }
          3.1250% {
            transform:translate(30.089px,95.667px)
          }
          3.4375% {
            transform:translate(29.574px,95.174px)
          }
          3.7500% {
            transform:translate(29.073px,94.675px)
          }
          4.0625% {
            transform:translate(28.589px,94.17px)
          }
          4.3750% {
            transform:translate(28.12px,93.659px)
          }
          4.6875% {
            transform:translate(27.668px,93.142px)
          }
          5.0000% {
            transform:translate(27.232px,92.62px)
          }
          5.3125% {
            transform:translate(26.812px,92.092px)
          }
          5.6250% {
            transform:translate(26.409px,91.56px)
          }
          5.9375% {
            transform:translate(26.023px,91.022px)
          }
          6.2500% {
            transform:translate(25.654px,90.481px)
          }
          6.5625% {
            transform:translate(25.302px,89.934px)
          }
          6.8750% {
            transform:translate(24.967px,89.384px)
          }
          7.1875% {
            transform:translate(24.649px,88.829px)
          }
          7.5000% {
            transform:translate(24.349px,88.271px)
          }
          7.8125% {
            transform:translate(24.067px,87.709px)
          }
          8.1250% {
            transform:translate(23.802px,87.143px)
          }
          8.4375% {
            transform:translate(23.555px,86.575px)
          }
          8.7500% {
            transform:translate(23.326px,86.003px)
          }
          9.0625% {
            transform:translate(23.115px,85.429px)
          }
          9.3750% {
            transform:translate(22.922px,84.853px)
          }
          9.6875% {
            transform:translate(22.748px,84.274px)
          }
          10.0000% {
            transform:translate(22.591px,83.693px)
          }
          10.3125% {
            transform:translate(22.453px,83.11px)
          }
          10.6250% {
            transform:translate(22.333px,82.526px)
          }
          10.9375% {
            transform:translate(22.231px,81.941px)
          }
          11.2500% {
            transform:translate(22.148px,81.354px)
          }
          11.5625% {
            transform:translate(22.083px,80.766px)
          }
          11.8750% {
            transform:translate(22.037px,80.178px)
          }
          12.1875% {
            transform:translate(22.009px,79.589px)
          }
          12.5000% {
            transform:translate(22px,79px)
          }
          12.8125% {
            transform:translate(22.009px,78.411px)
          }
          13.1250% {
            transform:translate(22.037px,77.822px)
          }
          13.4375% {
            transform:translate(22.083px,77.234px)
          }
          13.7500% {
            transform:translate(22.148px,76.646px)
          }
          14.0625% {
            transform:translate(22.231px,76.059px)
          }
          14.3750% {
            transform:translate(22.333px,75.474px)
          }
          14.6875% {
            transform:translate(22.453px,74.89px)
          }
          15.0000% {
            transform:translate(22.591px,74.307px)
          }
          15.3125% {
            transform:translate(22.748px,73.726px)
          }
          15.6250% {
            transform:translate(22.922px,73.147px)
          }
          15.9375% {
            transform:translate(23.115px,72.571px)
          }
          16.2500% {
            transform:translate(23.326px,71.997px)
          }
          16.5625% {
            transform:translate(23.555px,71.425px)
          }
          16.8750% {
            transform:translate(23.802px,70.857px)
          }
          17.1875% {
            transform:translate(24.067px,70.291px)
          }
          17.5000% {
            transform:translate(24.349px,69.729px)
          }
          17.8125% {
            transform:translate(24.649px,69.171px)
          }
          18.1250% {
            transform:translate(24.967px,68.616px)
          }
          18.4375% {
            transform:translate(25.302px,68.066px)
          }
          18.7500% {
            transform:translate(25.654px,67.519px)
          }
          19.0625% {
            transform:translate(26.023px,66.978px)
          }
          19.3750% {
            transform:translate(26.409px,66.44px)
          }
          19.6875% {
            transform:translate(26.812px,65.908px)
          }
          20.0000% {
            transform:translate(27.232px,65.38px)
          }
          20.3125% {
            transform:translate(27.668px,64.858px)
          }
          20.6250% {
            transform:translate(28.12px,64.341px)
          }
          20.9375% {
            transform:translate(28.589px,63.83px)
          }
          21.2500% {
            transform:translate(29.073px,63.325px)
          }
          21.5625% {
            transform:translate(29.574px,62.826px)
          }
          21.8750% {
            transform:translate(30.089px,62.333px)
          }
          22.1875% {
            transform:translate(30.621px,61.846px)
          }
          22.5000% {
            transform:translate(31.167px,61.366px)
          }
          22.8125% {
            transform:translate(31.729px,60.893px)
          }
          23.1250% {
            transform:translate(32.305px,60.427px)
          }
          23.4375% {
            transform:translate(32.895px,59.968px)
          }
          23.7500% {
            transform:translate(33.501px,59.517px)
          }
          24.0625% {
            transform:translate(34.12px,59.072px)
          }
          24.3750% {
            transform:translate(34.753px,58.636px)
          }
          24.6875% {
            transform:translate(35.399px,58.207px)
          }
          25.0000% {
            transform:translate(36.059px,57.787px)
          }
          25.3125% {
            transform:translate(36.732px,57.374px)
          }
          25.6250% {
            transform:translate(37.418px,56.97px)
          }
          25.9375% {
            transform:translate(38.116px,56.575px)
          }
          26.2500% {
            transform:translate(38.826px,56.188px)
          }
          26.5625% {
            transform:translate(39.549px,55.81px)
          }
          26.8750% {
            transform:translate(40.283px,55.44px)
          }
          27.1875% {
            transform:translate(41.029px,55.08px)
          }
          27.5000% {
            transform:translate(41.786px,54.729px)
          }
          27.8125% {
            transform:translate(42.554px,54.388px)
          }
          28.1250% {
            transform:translate(43.333px,54.056px)
          }
          28.4375% {
            transform:translate(44.121px,53.733px)
          }
          28.7500% {
            transform:translate(44.92px,53.421px)
          }
          29.0625% {
            transform:translate(45.728px,53.118px)
          }
          29.3750% {
            transform:translate(46.546px,52.825px)
          }
          29.6875% {
            transform:translate(47.373px,52.542px)
          }
          30.0000% {
            transform:translate(48.208px,52.27px)
          }
          30.3125% {
            transform:translate(49.052px,52.008px)
          }
          30.6250% {
            transform:translate(49.904px,51.756px)
          }
          30.9375% {
            transform:translate(50.764px,51.514px)
          }
          31.2500% {
            transform:translate(51.631px,51.284px)
          }
          31.5625% {
            transform:translate(52.505px,51.064px)
          }
          31.8750% {
            transform:translate(53.386px,50.854px)
          }
          32.1875% {
            transform:translate(54.274px,50.656px)
          }
          32.5000% {
            transform:translate(55.167px,50.468px)
          }
          32.8125% {
            transform:translate(56.066px,50.292px)
          }
          33.1250% {
            transform:translate(56.971px,50.126px)
          }
          33.4375% {
            transform:translate(57.88px,49.972px)
          }
          33.7500% {
            transform:translate(58.795px,49.829px)
          }
          34.0625% {
            transform:translate(59.713px,49.697px)
          }
          34.3750% {
            transform:translate(60.636px,49.576px)
          }
          34.6875% {
            transform:translate(61.562px,49.467px)
          }
          35.0000% {
            transform:translate(62.491px,49.369px)
          }
          35.3125% {
            transform:translate(63.423px,49.283px)
          }
          35.6250% {
            transform:translate(64.358px,49.208px)
          }
          35.9375% {
            transform:translate(65.295px,49.144px)
          }
          36.2500% {
            transform:translate(66.234px,49.092px)
          }
          36.5625% {
            transform:translate(67.174px,49.052px)
          }
          36.8750% {
            transform:translate(68.116px,49.023px)
          }
          37.1875% {
            transform:translate(69.058px,49.006px)
          }
          37.5000% {
            transform:translate(70px,49px)
          }
          37.8125% {
            transform:translate(70.942px,49.006px)
          }
          38.1250% {
            transform:translate(71.884px,49.023px)
          }
          38.4375% {
            transform:translate(72.826px,49.052px)
          }
          38.7500% {
            transform:translate(73.766px,49.092px)
          }
          39.0625% {
            transform:translate(74.705px,49.144px)
          }
          39.3750% {
            transform:translate(75.642px,49.208px)
          }
          39.6875% {
            transform:translate(76.577px,49.283px)
          }
          40.0000% {
            transform:translate(77.509px,49.369px)
          }
          40.3125% {
            transform:translate(78.438px,49.467px)
          }
          40.6250% {
            transform:translate(79.364px,49.576px)
          }
          40.9375% {
            transform:translate(80.287px,49.697px)
          }
          41.2500% {
            transform:translate(81.205px,49.829px)
          }
          41.5625% {
            transform:translate(82.12px,49.972px)
          }
          41.8750% {
            transform:translate(83.029px,50.126px)
          }
          42.1875% {
            transform:translate(83.934px,50.292px)
          }
          42.5000% {
            transform:translate(84.833px,50.468px)
          }
          42.8125% {
            transform:translate(85.726px,50.656px)
          }
          43.1250% {
            transform:translate(86.614px,50.854px)
          }
          43.4375% {
            transform:translate(87.495px,51.064px)
          }
          43.7500% {
            transform:translate(88.369px,51.284px)
          }
          44.0625% {
            transform:translate(89.236px,51.514px)
          }
          44.3750% {
            transform:translate(90.096px,51.756px)
          }
          44.6875% {
            transform:translate(90.948px,52.008px)
          }
          45.0000% {
            transform:translate(91.792px,52.27px)
          }
          45.3125% {
            transform:translate(92.627px,52.542px)
          }
          45.6250% {
            transform:translate(93.454px,52.825px)
          }
          45.9375% {
            transform:translate(94.272px,53.118px)
          }
          46.2500% {
            transform:translate(95.08px,53.421px)
          }
          46.5625% {
            transform:translate(95.879px,53.733px)
          }
          46.8750% {
            transform:translate(96.667px,54.056px)
          }
          47.1875% {
            transform:translate(97.446px,54.388px)
          }
          47.5000% {
            transform:translate(98.214px,54.729px)
          }
          47.8125% {
            transform:translate(98.971px,55.08px)
          }
          48.1250% {
            transform:translate(99.717px,55.44px)
          }
          48.4375% {
            transform:translate(100.451px,55.81px)
          }
          48.7500% {
            transform:translate(101.174px,56.188px)
          }
          49.0625% {
            transform:translate(101.884px,56.575px)
          }
          49.3750% {
            transform:translate(102.582px,56.97px)
          }
          49.6875% {
            transform:translate(103.268px,57.374px)
          }
          50.0000% {
            transform:translate(103.941px,57.787px)
          }
          50.3125% {
            transform:translate(104.601px,58.207px)
          }
          50.6250% {
            transform:translate(105.247px,58.636px)
          }
          50.9375% {
            transform:translate(105.88px,59.072px)
          }
          51.2500% {
            transform:translate(106.499px,59.517px)
          }
          51.5625% {
            transform:translate(107.105px,59.968px)
          }
          51.8750% {
            transform:translate(107.695px,60.427px)
          }
          52.1875% {
            transform:translate(108.271px,60.893px)
          }
          52.5000% {
            transform:translate(108.833px,61.366px)
          }
          52.8125% {
            transform:translate(109.379px,61.846px)
          }
          53.1250% {
            transform:translate(109.911px,62.333px)
          }
          53.4375% {
            transform:translate(110.426px,62.826px)
          }
          53.7500% {
            transform:translate(110.927px,63.325px)
          }
          54.0625% {
            transform:translate(111.411px,63.83px)
          }
          54.3750% {
            transform:translate(111.88px,64.341px)
          }
          54.6875% {
            transform:translate(112.332px,64.858px)
          }
          55.0000% {
            transform:translate(112.768px,65.38px)
          }
          55.3125% {
            transform:translate(113.188px,65.908px)
          }
          55.6250% {
            transform:translate(113.591px,66.44px)
          }
          55.9375% {
            transform:translate(113.977px,66.978px)
          }
          56.2500% {
            transform:translate(114.346px,67.519px)
          }
          56.5625% {
            transform:translate(114.698px,68.066px)
          }
          56.8750% {
            transform:translate(115.033px,68.616px)
          }
          57.1875% {
            transform:translate(115.351px,69.171px)
          }
          57.5000% {
            transform:translate(115.651px,69.729px)
          }
          57.8125% {
            transform:translate(115.933px,70.291px)
          }
          58.1250% {
            transform:translate(116.198px,70.857px)
          }
          58.4375% {
            transform:translate(116.445px,71.425px)
          }
          58.7500% {
            transform:translate(116.674px,71.997px)
          }
          59.0625% {
            transform:translate(116.885px,72.571px)
          }
          59.3750% {
            transform:translate(117.078px,73.147px)
          }
          59.6875% {
            transform:translate(117.252px,73.726px)
          }
          60.0000% {
            transform:translate(117.409px,74.307px)
          }
          60.3125% {
            transform:translate(117.547px,74.89px)
          }
          60.6250% {
            transform:translate(117.667px,75.474px)
          }
          60.9375% {
            transform:translate(117.769px,76.059px)
          }
          61.2500% {
            transform:translate(117.852px,76.646px)
          }
          61.5625% {
            transform:translate(117.917px,77.234px)
          }
          61.8750% {
            transform:translate(117.963px,77.822px)
          }
          62.1875% {
            transform:translate(117.991px,78.411px)
          }
          62.5000% {
            transform:translate(118px,79px)
          }
          62.8125% {
            transform:translate(117.991px,79.589px)
          }
          63.1250% {
            transform:translate(117.963px,80.178px)
          }
          63.4375% {
            transform:translate(117.917px,80.766px)
          }
          63.7500% {
            transform:translate(117.852px,81.354px)
          }
          64.0625% {
            transform:translate(117.769px,81.941px)
          }
          64.3750% {
            transform:translate(117.667px,82.526px)
          }
          64.6875% {
            transform:translate(117.547px,83.11px)
          }
          65.0000% {
            transform:translate(117.409px,83.693px)
          }
          65.3125% {
            transform:translate(117.252px,84.274px)
          }
          65.6250% {
            transform:translate(117.078px,84.853px)
          }
          65.9375% {
            transform:translate(116.885px,85.429px)
          }
          66.2500% {
            transform:translate(116.674px,86.003px)
          }
          66.5625% {
            transform:translate(116.445px,86.575px)
          }
          66.8750% {
            transform:translate(116.198px,87.143px)
          }
          67.1875% {
            transform:translate(115.933px,87.709px)
          }
          67.5000% {
            transform:translate(115.651px,88.271px)
          }
          67.8125% {
            transform:translate(115.351px,88.829px)
          }
          68.1250% {
            transform:translate(115.033px,89.384px)
          }
          68.4375% {
            transform:translate(114.698px,89.934px)
          }
          68.7500% {
            transform:translate(114.346px,90.481px)
          }
          69.0625% {
            transform:translate(113.977px,91.022px)
          }
          69.3750% {
            transform:translate(113.591px,91.56px)
          }
          69.6875% {
            transform:translate(113.188px,92.092px)
          }
          70.0000% {
            transform:translate(112.768px,92.62px)
          }
          70.3125% {
            transform:translate(112.332px,93.142px)
          }
          70.6250% {
            transform:translate(111.88px,93.659px)
          }
          70.9375% {
            transform:translate(111.411px,94.17px)
          }
          71.2500% {
            transform:translate(110.927px,94.675px)
          }
          71.5625% {
            transform:translate(110.426px,95.174px)
          }
          71.8750% {
            transform:translate(109.911px,95.667px)
          }
          72.1875% {
            transform:translate(109.379px,96.154px)
          }
          72.5000% {
            transform:translate(108.833px,96.634px)
          }
          72.8125% {
            transform:translate(108.271px,97.107px)
          }
          73.1250% {
            transform:translate(107.695px,97.573px)
          }
          73.4375% {
            transform:translate(107.105px,98.032px)
          }
          73.7500% {
            transform:translate(106.499px,98.483px)
          }
          74.0625% {
            transform:translate(105.88px,98.928px)
          }
          74.3750% {
            transform:translate(105.247px,99.364px)
          }
          74.6875% {
            transform:translate(104.601px,99.793px)
          }
          75.0000% {
            transform:translate(103.941px,100.213px)
          }
          75.3125% {
            transform:translate(103.268px,100.626px)
          }
          75.6250% {
            transform:translate(102.582px,101.03px)
          }
          75.9375% {
            transform:translate(101.884px,101.425px)
          }
          76.2500% {
            transform:translate(101.174px,101.812px)
          }
          76.5625% {
            transform:translate(100.451px,102.19px)
          }
          76.8750% {
            transform:translate(99.717px,102.56px)
          }
          77.1875% {
            transform:translate(98.971px,102.92px)
          }
          77.5000% {
            transform:translate(98.214px,103.271px)
          }
          77.8125% {
            transform:translate(97.446px,103.612px)
          }
          78.1250% {
            transform:translate(96.667px,103.944px)
          }
          78.4375% {
            transform:translate(95.879px,104.267px)
          }
          78.7500% {
            transform:translate(95.08px,104.579px)
          }
          79.0625% {
            transform:translate(94.272px,104.882px)
          }
          79.3750% {
            transform:translate(93.454px,105.175px)
          }
          79.6875% {
            transform:translate(92.627px,105.458px)
          }
          80.0000% {
            transform:translate(91.792px,105.73px)
          }
          80.3125% {
            transform:translate(90.948px,105.992px)
          }
          80.6250% {
            transform:translate(90.096px,106.244px)
          }
          80.9375% {
            transform:translate(89.236px,106.486px)
          }
          81.2500% {
            transform:translate(88.369px,106.716px)
          }
          81.5625% {
            transform:translate(87.495px,106.936px)
          }
          81.8750% {
            transform:translate(86.614px,107.146px)
          }
          82.1875% {
            transform:translate(85.726px,107.344px)
          }
          82.5000% {
            transform:translate(84.833px,107.532px)
          }
          82.8125% {
            transform:translate(83.934px,107.708px)
          }
          83.1250% {
            transform:translate(83.029px,107.874px)
          }
          83.4375% {
            transform:translate(82.12px,108.028px)
          }
          83.7500% {
            transform:translate(81.205px,108.171px)
          }
          84.0625% {
            transform:translate(80.287px,108.303px)
          }
          84.3750% {
            transform:translate(79.364px,108.424px)
          }
          84.6875% {
            transform:translate(78.438px,108.533px)
          }
          85.0000% {
            transform:translate(77.509px,108.631px)
          }
          85.3125% {
            transform:translate(76.577px,108.717px)
          }
          85.6250% {
            transform:translate(75.642px,108.792px)
          }
          85.9375% {
            transform:translate(74.705px,108.856px)
          }
          86.2500% {
            transform:translate(73.766px,108.908px)
          }
          86.5625% {
            transform:translate(72.826px,108.948px)
          }
          86.8750% {
            transform:translate(71.884px,108.977px)
          }
          87.1875% {
            transform:translate(70.942px,108.994px)
          }
          87.5000% {
            transform:translate(70px,109px)
          }
          87.8125% {
            transform:translate(69.058px,108.994px)
          }
          88.1250% {
            transform:translate(68.116px,108.977px)
          }
          88.4375% {
            transform:translate(67.174px,108.948px)
          }
          88.7500% {
            transform:translate(66.234px,108.908px)
          }
          89.0625% {
            transform:translate(65.295px,108.856px)
          }
          89.3750% {
            transform:translate(64.358px,108.792px)
          }
          89.6875% {
            transform:translate(63.423px,108.717px)
          }
          90.0000% {
            transform:translate(62.491px,108.631px)
          }
          90.3125% {
            transform:translate(61.562px,108.533px)
          }
          90.6250% {
            transform:translate(60.636px,108.424px)
          }
          90.9375% {
            transform:translate(59.713px,108.303px)
          }
          91.2500% {
            transform:translate(58.795px,108.171px)
          }
          91.5625% {
            transform:translate(57.88px,108.028px)
          }
          91.8750% {
            transform:translate(56.971px,107.874px)
          }
          92.1875% {
            transform:translate(56.066px,107.708px)
          }
          92.5000% {
            transform:translate(55.167px,107.532px)
          }
          92.8125% {
            transform:translate(54.274px,107.344px)
          }
          93.1250% {
            transform:translate(53.386px,107.146px)
          }
          93.4375% {
            transform:translate(52.505px,106.936px)
          }
          93.7500% {
            transform:translate(51.631px,106.716px)
          }
          94.0625% {
            transform:translate(50.764px,106.486px)
          }
          94.3750% {
            transform:translate(49.904px,106.244px)
          }
          94.6875% {
            transform:translate(49.052px,105.992px)
          }
          95.0000% {
            transform:translate(48.208px,105.73px)
          }
          95.3125% {
            transform:translate(47.373px,105.458px)
          }
          95.6250% {
            transform:translate(46.546px,105.175px)
          }
          95.9375% {
            transform:translate(45.728px,104.882px)
          }
          96.2500% {
            transform:translate(44.92px,104.579px)
          }
          96.5625% {
            transform:translate(44.121px,104.267px)
          }
          96.8750% {
            transform:translate(43.333px,103.944px)
          }
          97.1875% {
            transform:translate(42.554px,103.612px)
          }
          97.5000% {
            transform:translate(41.786px,103.271px)
          }
          97.8125% {
            transform:translate(41.029px,102.92px)
          }
          98.1250% {
            transform:translate(40.283px,102.56px)
          }
          98.4375% {
            transform:translate(39.549px,102.19px)
          }
          98.7500% {
            transform:translate(38.826px,101.812px)
          }
          99.0625% {
            transform:translate(38.116px,101.425px)
          }
          99.3750% {
            transform:translate(37.418px,101.03px)
          }
          99.6875% {
            transform:translate(36.732px,100.626px)
          }
          100.0000% {
            transform:translate(36.059px,100.213px)
          }
        }
        @keyframes overturn-color-5 {
          0.0000% {
            fill:rgb(119 201 239)
          }
          0.3125% {
            fill:rgb(119 201 239)
          }
          0.6250% {
            fill:rgb(119 201 239)
          }
          0.9375% {
            fill:rgb(119 201 239)
          }
          1.2500% {
            fill:rgb(119 201 239)
          }
          1.5625% {
            fill:rgb(119 201 239)
          }
          1.8750% {
            fill:rgb(119 201 239)
          }
          2.1875% {
            fill:rgb(119 201 239)
          }
          2.5000% {
            fill:rgb(119 201 239)
          }
          2.8125% {
            fill:rgb(119 201 239)
          }
          3.1250% {
            fill:rgb(119 201 239)
          }
          3.4375% {
            fill:rgb(119 201 239)
          }
          3.7500% {
            fill:rgb(119 201 239)
          }
          4.0625% {
            fill:rgb(119 201 239)
          }
          4.3750% {
            fill:rgb(119 201 239)
          }
          4.6875% {
            fill:rgb(119 201 239)
          }
          5.0000% {
            fill:rgb(119 201 239)
          }
          5.3125% {
            fill:rgb(119 201 239)
          }
          5.6250% {
            fill:rgb(119 201 239)
          }
          5.9375% {
            fill:rgb(119 201 239)
          }
          6.2500% {
            fill:rgb(119 201 239)
          }
          6.5625% {
            fill:rgb(119 201 239)
          }
          6.8750% {
            fill:rgb(119 201 239)
          }
          7.1875% {
            fill:rgb(119 201 239)
          }
          7.5000% {
            fill:rgb(119 201 239)
          }
          7.8125% {
            fill:rgb(119 201 239)
          }
          8.1250% {
            fill:rgb(119 201 239)
          }
          8.4375% {
            fill:rgb(119 201 239)
          }
          8.7500% {
            fill:rgb(119 201 239)
          }
          9.0625% {
            fill:rgb(119 201 239)
          }
          9.3750% {
            fill:rgb(119 201 239)
          }
          9.6875% {
            fill:rgb(119 201 239)
          }
          10.0000% {
            fill:rgb(119 201 239)
          }
          10.3125% {
            fill:rgb(119 201 239)
          }
          10.6250% {
            fill:rgb(119 201 239)
          }
          10.9375% {
            fill:rgb(119 201 239)
          }
          11.2500% {
            fill:rgb(119 201 239)
          }
          11.5625% {
            fill:rgb(119 201 239)
          }
          11.8750% {
            fill:rgb(119 201 239)
          }
          12.1875% {
            fill:rgb(119 201 239)
          }
          12.5000% {
            fill:rgb(119 201 239)
          }
          12.8125% {
            fill:rgb(119 201 239)
          }
          13.1250% {
            fill:rgb(119 201 239)
          }
          13.4375% {
            fill:rgb(120 201 239)
          }
          13.7500% {
            fill:rgb(120 201 238)
          }
          14.0625% {
            fill:rgb(120 201 238)
          }
          14.3750% {
            fill:rgb(121 201 237)
          }
          14.6875% {
            fill:rgb(122 201 236)
          }
          15.0000% {
            fill:rgb(122 201 236)
          }
          15.3125% {
            fill:rgb(123 201 235)
          }
          15.6250% {
            fill:rgb(124 201 234)
          }
          15.9375% {
            fill:rgb(125 201 233)
          }
          16.2500% {
            fill:rgb(127 201 232)
          }
          16.5625% {
            fill:rgb(128 201 231)
          }
          16.8750% {
            fill:rgb(129 201 229)
          }
          17.1875% {
            fill:rgb(130 201 228)
          }
          17.5000% {
            fill:rgb(132 201 227)
          }
          17.8125% {
            fill:rgb(133 201 225)
          }
          18.1250% {
            fill:rgb(135 201 224)
          }
          18.4375% {
            fill:rgb(137 201 222)
          }
          18.7500% {
            fill:rgb(138 201 220)
          }
          19.0625% {
            fill:rgb(140 201 219)
          }
          19.3750% {
            fill:rgb(142 201 217)
          }
          19.6875% {
            fill:rgb(144 201 215)
          }
          20.0000% {
            fill:rgb(146 201 213)
          }
          20.3125% {
            fill:rgb(148 201 211)
          }
          20.6250% {
            fill:rgb(150 201 209)
          }
          20.9375% {
            fill:rgb(152 201 207)
          }
          21.2500% {
            fill:rgb(154 201 205)
          }
          21.5625% {
            fill:rgb(156 201 203)
          }
          21.8750% {
            fill:rgb(158 201 201)
          }
          22.1875% {
            fill:rgb(160 201 199)
          }
          22.5000% {
            fill:rgb(163 201 197)
          }
          22.8125% {
            fill:rgb(165 201 195)
          }
          23.1250% {
            fill:rgb(167 201 192)
          }
          23.4375% {
            fill:rgb(169 201 190)
          }
          23.7500% {
            fill:rgb(172 201 188)
          }
          24.0625% {
            fill:rgb(174 201 186)
          }
          24.3750% {
            fill:rgb(176 201 183)
          }
          24.6875% {
            fill:rgb(179 201 181)
          }
          25.0000% {
            fill:rgb(181 201 179)
          }
          25.3125% {
            fill:rgb(183 201 177)
          }
          25.6250% {
            fill:rgb(186 201 175)
          }
          25.9375% {
            fill:rgb(188 201 172)
          }
          26.2500% {
            fill:rgb(190 201 170)
          }
          26.5625% {
            fill:rgb(193 201 168)
          }
          26.8750% {
            fill:rgb(195 201 166)
          }
          27.1875% {
            fill:rgb(197 201 163)
          }
          27.5000% {
            fill:rgb(199 201 161)
          }
          27.8125% {
            fill:rgb(202 201 159)
          }
          28.1250% {
            fill:rgb(204 201 157)
          }
          28.4375% {
            fill:rgb(206 201 155)
          }
          28.7500% {
            fill:rgb(208 201 153)
          }
          29.0625% {
            fill:rgb(210 201 151)
          }
          29.3750% {
            fill:rgb(212 201 149)
          }
          29.6875% {
            fill:rgb(214 201 147)
          }
          30.0000% {
            fill:rgb(216 201 145)
          }
          30.3125% {
            fill:rgb(218 201 143)
          }
          30.6250% {
            fill:rgb(220 201 141)
          }
          30.9375% {
            fill:rgb(222 201 139)
          }
          31.2500% {
            fill:rgb(224 201 138)
          }
          31.5625% {
            fill:rgb(225 201 136)
          }
          31.8750% {
            fill:rgb(227 201 134)
          }
          32.1875% {
            fill:rgb(229 201 133)
          }
          32.5000% {
            fill:rgb(230 201 131)
          }
          32.8125% {
            fill:rgb(232 201 130)
          }
          33.1250% {
            fill:rgb(233 201 129)
          }
          33.4375% {
            fill:rgb(234 201 127)
          }
          33.7500% {
            fill:rgb(235 201 126)
          }
          34.0625% {
            fill:rgb(237 201 125)
          }
          34.3750% {
            fill:rgb(238 201 124)
          }
          34.6875% {
            fill:rgb(239 201 123)
          }
          35.0000% {
            fill:rgb(240 201 122)
          }
          35.3125% {
            fill:rgb(240 201 122)
          }
          35.6250% {
            fill:rgb(241 201 121)
          }
          35.9375% {
            fill:rgb(242 201 120)
          }
          36.2500% {
            fill:rgb(242 201 120)
          }
          36.5625% {
            fill:rgb(242 201 119)
          }
          36.8750% {
            fill:rgb(243 201 119)
          }
          37.1875% {
            fill:rgb(243 201 119)
          }
          37.5000% {
            fill:rgb(243 201 119)
          }
          37.8125% {
            fill:rgb(243 201 119)
          }
          38.1250% {
            fill:rgb(243 201 119)
          }
          38.4375% {
            fill:rgb(243 201 119)
          }
          38.7500% {
            fill:rgb(243 201 119)
          }
          39.0625% {
            fill:rgb(243 201 119)
          }
          39.3750% {
            fill:rgb(243 201 119)
          }
          39.6875% {
            fill:rgb(243 201 119)
          }
          40.0000% {
            fill:rgb(243 201 119)
          }
          40.3125% {
            fill:rgb(243 201 119)
          }
          40.6250% {
            fill:rgb(243 201 119)
          }
          40.9375% {
            fill:rgb(243 201 119)
          }
          41.2500% {
            fill:rgb(243 201 119)
          }
          41.5625% {
            fill:rgb(243 201 119)
          }
          41.8750% {
            fill:rgb(243 201 119)
          }
          42.1875% {
            fill:rgb(243 201 119)
          }
          42.5000% {
            fill:rgb(243 201 119)
          }
          42.8125% {
            fill:rgb(243 201 119)
          }
          43.1250% {
            fill:rgb(243 201 119)
          }
          43.4375% {
            fill:rgb(243 201 119)
          }
          43.7500% {
            fill:rgb(243 201 119)
          }
          44.0625% {
            fill:rgb(243 201 119)
          }
          44.3750% {
            fill:rgb(243 201 119)
          }
          44.6875% {
            fill:rgb(243 201 119)
          }
          45.0000% {
            fill:rgb(243 201 119)
          }
          45.3125% {
            fill:rgb(243 201 119)
          }
          45.6250% {
            fill:rgb(243 201 119)
          }
          45.9375% {
            fill:rgb(243 201 119)
          }
          46.2500% {
            fill:rgb(243 201 119)
          }
          46.5625% {
            fill:rgb(242 201 120)
          }
          46.8750% {
            fill:rgb(242 201 120)
          }
          47.1875% {
            fill:rgb(241 201 121)
          }
          47.5000% {
            fill:rgb(240 201 122)
          }
          47.8125% {
            fill:rgb(238 201 124)
          }
          48.1250% {
            fill:rgb(237 201 125)
          }
          48.4375% {
            fill:rgb(235 201 127)
          }
          48.7500% {
            fill:rgb(233 201 129)
          }
          49.0625% {
            fill:rgb(231 201 131)
          }
          49.3750% {
            fill:rgb(229 201 133)
          }
          49.6875% {
            fill:rgb(226 201 135)
          }
          50.0000% {
            fill:rgb(224 201 138)
          }
          50.3125% {
            fill:rgb(221 201 140)
          }
          50.6250% {
            fill:rgb(218 201 143)
          }
          50.9375% {
            fill:rgb(215 201 146)
          }
          51.2500% {
            fill:rgb(212 201 149)
          }
          51.5625% {
            fill:rgb(209 201 152)
          }
          51.8750% {
            fill:rgb(206 201 155)
          }
          52.1875% {
            fill:rgb(203 201 158)
          }
          52.5000% {
            fill:rgb(199 201 161)
          }
          52.8125% {
            fill:rgb(196 201 165)
          }
          53.1250% {
            fill:rgb(193 201 168)
          }
          53.4375% {
            fill:rgb(189 201 171)
          }
          53.7500% {
            fill:rgb(186 201 175)
          }
          54.0625% {
            fill:rgb(182 201 178)
          }
          54.3750% {
            fill:rgb(179 201 181)
          }
          54.6875% {
            fill:rgb(175 201 185)
          }
          55.0000% {
            fill:rgb(172 201 188)
          }
          55.3125% {
            fill:rgb(168 201 191)
          }
          55.6250% {
            fill:rgb(165 201 195)
          }
          55.9375% {
            fill:rgb(162 201 198)
          }
          56.2500% {
            fill:rgb(158 201 201)
          }
          56.5625% {
            fill:rgb(155 201 204)
          }
          56.8750% {
            fill:rgb(152 201 207)
          }
          57.1875% {
            fill:rgb(149 201 210)
          }
          57.5000% {
            fill:rgb(146 201 213)
          }
          57.8125% {
            fill:rgb(143 201 216)
          }
          58.1250% {
            fill:rgb(140 201 219)
          }
          58.4375% {
            fill:rgb(138 201 221)
          }
          58.7500% {
            fill:rgb(135 201 224)
          }
          59.0625% {
            fill:rgb(133 201 226)
          }
          59.3750% {
            fill:rgb(130 201 228)
          }
          59.6875% {
            fill:rgb(128 201 230)
          }
          60.0000% {
            fill:rgb(127 201 232)
          }
          60.3125% {
            fill:rgb(125 201 233)
          }
          60.6250% {
            fill:rgb(123 201 235)
          }
          60.9375% {
            fill:rgb(122 201 236)
          }
          61.2500% {
            fill:rgb(121 201 237)
          }
          61.5625% {
            fill:rgb(120 201 238)
          }
          61.8750% {
            fill:rgb(120 201 239)
          }
          62.1875% {
            fill:rgb(119 201 239)
          }
          62.5000% {
            fill:rgb(119 201 239)
          }
          62.8125% {
            fill:rgb(119 201 239)
          }
          63.1250% {
            fill:rgb(119 201 239)
          }
          63.4375% {
            fill:rgb(119 201 239)
          }
          63.7500% {
            fill:rgb(119 201 239)
          }
          64.0625% {
            fill:rgb(119 201 239)
          }
          64.3750% {
            fill:rgb(119 201 239)
          }
          64.6875% {
            fill:rgb(119 201 239)
          }
          65.0000% {
            fill:rgb(119 201 239)
          }
          65.3125% {
            fill:rgb(119 201 239)
          }
          65.6250% {
            fill:rgb(119 201 239)
          }
          65.9375% {
            fill:rgb(119 201 239)
          }
          66.2500% {
            fill:rgb(119 201 239)
          }
          66.5625% {
            fill:rgb(119 201 239)
          }
          66.8750% {
            fill:rgb(119 201 239)
          }
          67.1875% {
            fill:rgb(119 201 239)
          }
          67.5000% {
            fill:rgb(119 201 239)
          }
          67.8125% {
            fill:rgb(119 201 239)
          }
          68.1250% {
            fill:rgb(119 201 239)
          }
          68.4375% {
            fill:rgb(119 201 239)
          }
          68.7500% {
            fill:rgb(119 201 239)
          }
          69.0625% {
            fill:rgb(119 201 239)
          }
          69.3750% {
            fill:rgb(119 201 239)
          }
          69.6875% {
            fill:rgb(119 201 239)
          }
          70.0000% {
            fill:rgb(119 201 239)
          }
          70.3125% {
            fill:rgb(119 201 239)
          }
          70.6250% {
            fill:rgb(119 201 239)
          }
          70.9375% {
            fill:rgb(119 201 239)
          }
          71.2500% {
            fill:rgb(119 201 239)
          }
          71.5625% {
            fill:rgb(119 201 239)
          }
          71.8750% {
            fill:rgb(119 201 239)
          }
          72.1875% {
            fill:rgb(119 201 239)
          }
          72.5000% {
            fill:rgb(119 201 239)
          }
          72.8125% {
            fill:rgb(119 201 239)
          }
          73.1250% {
            fill:rgb(119 201 239)
          }
          73.4375% {
            fill:rgb(119 201 239)
          }
          73.7500% {
            fill:rgb(119 201 239)
          }
          74.0625% {
            fill:rgb(119 201 239)
          }
          74.3750% {
            fill:rgb(119 201 239)
          }
          74.6875% {
            fill:rgb(119 201 239)
          }
          75.0000% {
            fill:rgb(119 201 239)
          }
          75.3125% {
            fill:rgb(119 201 239)
          }
          75.6250% {
            fill:rgb(119 201 239)
          }
          75.9375% {
            fill:rgb(119 201 239)
          }
          76.2500% {
            fill:rgb(119 201 239)
          }
          76.5625% {
            fill:rgb(119 201 239)
          }
          76.8750% {
            fill:rgb(119 201 239)
          }
          77.1875% {
            fill:rgb(119 201 239)
          }
          77.5000% {
            fill:rgb(119 201 239)
          }
          77.8125% {
            fill:rgb(119 201 239)
          }
          78.1250% {
            fill:rgb(119 201 239)
          }
          78.4375% {
            fill:rgb(119 201 239)
          }
          78.7500% {
            fill:rgb(119 201 239)
          }
          79.0625% {
            fill:rgb(119 201 239)
          }
          79.3750% {
            fill:rgb(119 201 239)
          }
          79.6875% {
            fill:rgb(119 201 239)
          }
          80.0000% {
            fill:rgb(119 201 239)
          }
          80.3125% {
            fill:rgb(119 201 239)
          }
          80.6250% {
            fill:rgb(119 201 239)
          }
          80.9375% {
            fill:rgb(119 201 239)
          }
          81.2500% {
            fill:rgb(119 201 239)
          }
          81.5625% {
            fill:rgb(119 201 239)
          }
          81.8750% {
            fill:rgb(119 201 239)
          }
          82.1875% {
            fill:rgb(119 201 239)
          }
          82.5000% {
            fill:rgb(119 201 239)
          }
          82.8125% {
            fill:rgb(119 201 239)
          }
          83.1250% {
            fill:rgb(119 201 239)
          }
          83.4375% {
            fill:rgb(119 201 239)
          }
          83.7500% {
            fill:rgb(119 201 239)
          }
          84.0625% {
            fill:rgb(119 201 239)
          }
          84.3750% {
            fill:rgb(119 201 239)
          }
          84.6875% {
            fill:rgb(119 201 239)
          }
          85.0000% {
            fill:rgb(119 201 239)
          }
          85.3125% {
            fill:rgb(119 201 239)
          }
          85.6250% {
            fill:rgb(119 201 239)
          }
          85.9375% {
            fill:rgb(119 201 239)
          }
          86.2500% {
            fill:rgb(119 201 239)
          }
          86.5625% {
            fill:rgb(119 201 239)
          }
          86.8750% {
            fill:rgb(119 201 239)
          }
          87.1875% {
            fill:rgb(119 201 239)
          }
          87.5000% {
            fill:rgb(119 201 239)
          }
          87.8125% {
            fill:rgb(119 201 239)
          }
          88.1250% {
            fill:rgb(119 201 239)
          }
          88.4375% {
            fill:rgb(119 201 239)
          }
          88.7500% {
            fill:rgb(119 201 239)
          }
          89.0625% {
            fill:rgb(119 201 239)
          }
          89.3750% {
            fill:rgb(119 201 239)
          }
          89.6875% {
            fill:rgb(119 201 239)
          }
          90.0000% {
            fill:rgb(119 201 239)
          }
          90.3125% {
            fill:rgb(119 201 239)
          }
          90.6250% {
            fill:rgb(119 201 239)
          }
          90.9375% {
            fill:rgb(119 201 239)
          }
          91.2500% {
            fill:rgb(119 201 239)
          }
          91.5625% {
            fill:rgb(119 201 239)
          }
          91.8750% {
            fill:rgb(119 201 239)
          }
          92.1875% {
            fill:rgb(119 201 239)
          }
          92.5000% {
            fill:rgb(119 201 239)
          }
          92.8125% {
            fill:rgb(119 201 239)
          }
          93.1250% {
            fill:rgb(119 201 239)
          }
          93.4375% {
            fill:rgb(119 201 239)
          }
          93.7500% {
            fill:rgb(119 201 239)
          }
          94.0625% {
            fill:rgb(119 201 239)
          }
          94.3750% {
            fill:rgb(119 201 239)
          }
          94.6875% {
            fill:rgb(119 201 239)
          }
          95.0000% {
            fill:rgb(119 201 239)
          }
          95.3125% {
            fill:rgb(119 201 239)
          }
          95.6250% {
            fill:rgb(119 201 239)
          }
          95.9375% {
            fill:rgb(119 201 239)
          }
          96.2500% {
            fill:rgb(119 201 239)
          }
          96.5625% {
            fill:rgb(119 201 239)
          }
          96.8750% {
            fill:rgb(119 201 239)
          }
          97.1875% {
            fill:rgb(119 201 239)
          }
          97.5000% {
            fill:rgb(119 201 239)
          }
          97.8125% {
            fill:rgb(119 201 239)
          }
          98.1250% {
            fill:rgb(119 201 239)
          }
          98.4375% {
            fill:rgb(119 201 239)
          }
          98.7500% {
            fill:rgb(119 201 239)
          }
          99.0625% {
            fill:rgb(119 201 239)
          }
          99.3750% {
            fill:rgb(119 201 239)
          }
          99.6875% {
            fill:rgb(119 201 239)
          }
          100.0000% {
            fill:rgb(119 201 239)
          }
        }
        @keyframes overturn-mark-5 {
          0.0000% {
            opacity:1
          }
          0.3125% {
            opacity:1
          }
          0.6250% {
            opacity:1
          }
          0.9375% {
            opacity:1
          }
          1.2500% {
            opacity:1
          }
          1.5625% {
            opacity:1
          }
          1.8750% {
            opacity:1
          }
          2.1875% {
            opacity:1
          }
          2.5000% {
            opacity:1
          }
          2.8125% {
            opacity:1
          }
          3.1250% {
            opacity:1
          }
          3.4375% {
            opacity:1
          }
          3.7500% {
            opacity:1
          }
          4.0625% {
            opacity:1
          }
          4.3750% {
            opacity:1
          }
          4.6875% {
            opacity:1
          }
          5.0000% {
            opacity:1
          }
          5.3125% {
            opacity:1
          }
          5.6250% {
            opacity:1
          }
          5.9375% {
            opacity:1
          }
          6.2500% {
            opacity:1
          }
          6.5625% {
            opacity:1
          }
          6.8750% {
            opacity:1
          }
          7.1875% {
            opacity:1
          }
          7.5000% {
            opacity:1
          }
          7.8125% {
            opacity:1
          }
          8.1250% {
            opacity:1
          }
          8.4375% {
            opacity:1
          }
          8.7500% {
            opacity:1
          }
          9.0625% {
            opacity:1
          }
          9.3750% {
            opacity:1
          }
          9.6875% {
            opacity:1
          }
          10.0000% {
            opacity:1
          }
          10.3125% {
            opacity:1
          }
          10.6250% {
            opacity:1
          }
          10.9375% {
            opacity:1
          }
          11.2500% {
            opacity:1
          }
          11.5625% {
            opacity:1
          }
          11.8750% {
            opacity:1
          }
          12.1875% {
            opacity:1
          }
          12.5000% {
            opacity:1
          }
          12.8125% {
            opacity:1.0
          }
          13.1250% {
            opacity:0.998
          }
          13.4375% {
            opacity:0.996
          }
          13.7500% {
            opacity:0.993
          }
          14.0625% {
            opacity:0.989
          }
          14.3750% {
            opacity:0.984
          }
          14.6875% {
            opacity:0.978
          }
          15.0000% {
            opacity:0.972
          }
          15.3125% {
            opacity:0.965
          }
          15.6250% {
            opacity:0.957
          }
          15.9375% {
            opacity:0.948
          }
          16.2500% {
            opacity:0.939
          }
          16.5625% {
            opacity:0.929
          }
          16.8750% {
            opacity:0.919
          }
          17.1875% {
            opacity:0.908
          }
          17.5000% {
            opacity:0.896
          }
          17.8125% {
            opacity:0.884
          }
          18.1250% {
            opacity:0.871
          }
          18.4375% {
            opacity:0.858
          }
          18.7500% {
            opacity:0.844
          }
          19.0625% {
            opacity:0.829
          }
          19.3750% {
            opacity:0.815
          }
          19.6875% {
            opacity:0.8
          }
          20.0000% {
            opacity:0.784
          }
          20.3125% {
            opacity:0.768
          }
          20.6250% {
            opacity:0.752
          }
          20.9375% {
            opacity:0.735
          }
          21.2500% {
            opacity:0.718
          }
          21.5625% {
            opacity:0.701
          }
          21.8750% {
            opacity:0.684
          }
          22.1875% {
            opacity:0.666
          }
          22.5000% {
            opacity:0.648
          }
          22.8125% {
            opacity:0.63
          }
          23.1250% {
            opacity:0.612
          }
          23.4375% {
            opacity:0.593
          }
          23.7500% {
            opacity:0.575
          }
          24.0625% {
            opacity:0.556
          }
          24.3750% {
            opacity:0.537
          }
          24.6875% {
            opacity:0.519
          }
          25.0000% {
            opacity:0.5
          }
          25.3125% {
            opacity:0.481
          }
          25.6250% {
            opacity:0.463
          }
          25.9375% {
            opacity:0.444
          }
          26.2500% {
            opacity:0.425
          }
          26.5625% {
            opacity:0.407
          }
          26.8750% {
            opacity:0.388
          }
          27.1875% {
            opacity:0.37
          }
          27.5000% {
            opacity:0.352
          }
          27.8125% {
            opacity:0.334
          }
          28.1250% {
            opacity:0.316
          }
          28.4375% {
            opacity:0.299
          }
          28.7500% {
            opacity:0.282
          }
          29.0625% {
            opacity:0.265
          }
          29.3750% {
            opacity:0.248
          }
          29.6875% {
            opacity:0.232
          }
          30.0000% {
            opacity:0.216
          }
          30.3125% {
            opacity:0.2
          }
          30.6250% {
            opacity:0.185
          }
          30.9375% {
            opacity:0.171
          }
          31.2500% {
            opacity:0.156
          }
          31.5625% {
            opacity:0.142
          }
          31.8750% {
            opacity:0.129
          }
          32.1875% {
            opacity:0.116
          }
          32.5000% {
            opacity:0.104
          }
          32.8125% {
            opacity:0.092
          }
          33.1250% {
            opacity:0.081
          }
          33.4375% {
            opacity:0.071
          }
          33.7500% {
            opacity:0.061
          }
          34.0625% {
            opacity:0.052
          }
          34.3750% {
            opacity:0.043
          }
          34.6875% {
            opacity:0.035
          }
          35.0000% {
            opacity:0.028
          }
          35.3125% {
            opacity:0.022
          }
          35.6250% {
            opacity:0.016
          }
          35.9375% {
            opacity:0.011
          }
          36.2500% {
            opacity:0.007
          }
          36.5625% {
            opacity:0.004
          }
          36.8750% {
            opacity:0.002
          }
          37.1875% {
            opacity:0.0
          }
          37.5000% {
            opacity:0
          }
          37.8125% {
            opacity:0
          }
          38.1250% {
            opacity:0
          }
          38.4375% {
            opacity:0
          }
          38.7500% {
            opacity:0
          }
          39.0625% {
            opacity:0
          }
          39.3750% {
            opacity:0
          }
          39.6875% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.3125% {
            opacity:0
          }
          40.6250% {
            opacity:0
          }
          40.9375% {
            opacity:0
          }
          41.2500% {
            opacity:0
          }
          41.5625% {
            opacity:0
          }
          41.8750% {
            opacity:0
          }
          42.1875% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          42.8125% {
            opacity:0
          }
          43.1250% {
            opacity:0
          }
          43.4375% {
            opacity:0
          }
          43.7500% {
            opacity:0
          }
          44.0625% {
            opacity:0
          }
          44.3750% {
            opacity:0
          }
          44.6875% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.3125% {
            opacity:0
          }
          45.6250% {
            opacity:0
          }
          45.9375% {
            opacity:0.0
          }
          46.2500% {
            opacity:0.002
          }
          46.5625% {
            opacity:0.006
          }
          46.8750% {
            opacity:0.011
          }
          47.1875% {
            opacity:0.019
          }
          47.5000% {
            opacity:0.028
          }
          47.8125% {
            opacity:0.039
          }
          48.1250% {
            opacity:0.052
          }
          48.4375% {
            opacity:0.066
          }
          48.7500% {
            opacity:0.081
          }
          49.0625% {
            opacity:0.098
          }
          49.3750% {
            opacity:0.116
          }
          49.6875% {
            opacity:0.136
          }
          50.0000% {
            opacity:0.156
          }
          50.3125% {
            opacity:0.178
          }
          50.6250% {
            opacity:0.2
          }
          50.9375% {
            opacity:0.224
          }
          51.2500% {
            opacity:0.248
          }
          51.5625% {
            opacity:0.273
          }
          51.8750% {
            opacity:0.299
          }
          52.1875% {
            opacity:0.325
          }
          52.5000% {
            opacity:0.352
          }
          52.8125% {
            opacity:0.379
          }
          53.1250% {
            opacity:0.407
          }
          53.4375% {
            opacity:0.435
          }
          53.7500% {
            opacity:0.463
          }
          54.0625% {
            opacity:0.491
          }
          54.3750% {
            opacity:0.519
          }
          54.6875% {
            opacity:0.547
          }
          55.0000% {
            opacity:0.575
          }
          55.3125% {
            opacity:0.602
          }
          55.6250% {
            opacity:0.63
          }
          55.9375% {
            opacity:0.657
          }
          56.2500% {
            opacity:0.684
          }
          56.5625% {
            opacity:0.71
          }
          56.8750% {
            opacity:0.735
          }
          57.1875% {
            opacity:0.76
          }
          57.5000% {
            opacity:0.784
          }
          57.8125% {
            opacity:0.807
          }
          58.1250% {
            opacity:0.829
          }
          58.4375% {
            opacity:0.851
          }
          58.7500% {
            opacity:0.871
          }
          59.0625% {
            opacity:0.89
          }
          59.3750% {
            opacity:0.908
          }
          59.6875% {
            opacity:0.924
          }
          60.0000% {
            opacity:0.939
          }
          60.3125% {
            opacity:0.953
          }
          60.6250% {
            opacity:0.965
          }
          60.9375% {
            opacity:0.975
          }
          61.2500% {
            opacity:0.984
          }
          61.5625% {
            opacity:0.991
          }
          61.8750% {
            opacity:0.996
          }
          62.1875% {
            opacity:0.999
          }
          62.5000% {
            opacity:1
          }
          62.8125% {
            opacity:1
          }
          63.1250% {
            opacity:1
          }
          63.4375% {
            opacity:1
          }
          63.7500% {
            opacity:1
          }
          64.0625% {
            opacity:1
          }
          64.3750% {
            opacity:1
          }
          64.6875% {
            opacity:1
          }
          65.0000% {
            opacity:1
          }
          65.3125% {
            opacity:1
          }
          65.6250% {
            opacity:1
          }
          65.9375% {
            opacity:1
          }
          66.2500% {
            opacity:1
          }
          66.5625% {
            opacity:1
          }
          66.8750% {
            opacity:1
          }
          67.1875% {
            opacity:1
          }
          67.5000% {
            opacity:1
          }
          67.8125% {
            opacity:1
          }
          68.1250% {
            opacity:1
          }
          68.4375% {
            opacity:1
          }
          68.7500% {
            opacity:1
          }
          69.0625% {
            opacity:1
          }
          69.3750% {
            opacity:1
          }
          69.6875% {
            opacity:1
          }
          70.0000% {
            opacity:1
          }
          70.3125% {
            opacity:1
          }
          70.6250% {
            opacity:1
          }
          70.9375% {
            opacity:1
          }
          71.2500% {
            opacity:1
          }
          71.5625% {
            opacity:1
          }
          71.8750% {
            opacity:1
          }
          72.1875% {
            opacity:1
          }
          72.5000% {
            opacity:1
          }
          72.8125% {
            opacity:1
          }
          73.1250% {
            opacity:1
          }
          73.4375% {
            opacity:1
          }
          73.7500% {
            opacity:1
          }
          74.0625% {
            opacity:1
          }
          74.3750% {
            opacity:1
          }
          74.6875% {
            opacity:1
          }
          75.0000% {
            opacity:1
          }
          75.3125% {
            opacity:1
          }
          75.6250% {
            opacity:1
          }
          75.9375% {
            opacity:1
          }
          76.2500% {
            opacity:1
          }
          76.5625% {
            opacity:1
          }
          76.8750% {
            opacity:1
          }
          77.1875% {
            opacity:1
          }
          77.5000% {
            opacity:1
          }
          77.8125% {
            opacity:1
          }
          78.1250% {
            opacity:1
          }
          78.4375% {
            opacity:1
          }
          78.7500% {
            opacity:1
          }
          79.0625% {
            opacity:1
          }
          79.3750% {
            opacity:1
          }
          79.6875% {
            opacity:1
          }
          80.0000% {
            opacity:1
          }
          80.3125% {
            opacity:1
          }
          80.6250% {
            opacity:1
          }
          80.9375% {
            opacity:1
          }
          81.2500% {
            opacity:1
          }
          81.5625% {
            opacity:1
          }
          81.8750% {
            opacity:1
          }
          82.1875% {
            opacity:1
          }
          82.5000% {
            opacity:1
          }
          82.8125% {
            opacity:1
          }
          83.1250% {
            opacity:1
          }
          83.4375% {
            opacity:1
          }
          83.7500% {
            opacity:1
          }
          84.0625% {
            opacity:1
          }
          84.3750% {
            opacity:1
          }
          84.6875% {
            opacity:1
          }
          85.0000% {
            opacity:1
          }
          85.3125% {
            opacity:1
          }
          85.6250% {
            opacity:1
          }
          85.9375% {
            opacity:1
          }
          86.2500% {
            opacity:1
          }
          86.5625% {
            opacity:1
          }
          86.8750% {
            opacity:1
          }
          87.1875% {
            opacity:1
          }
          87.5000% {
            opacity:1
          }
          87.8125% {
            opacity:1
          }
          88.1250% {
            opacity:1
          }
          88.4375% {
            opacity:1
          }
          88.7500% {
            opacity:1
          }
          89.0625% {
            opacity:1
          }
          89.3750% {
            opacity:1
          }
          89.6875% {
            opacity:1
          }
          90.0000% {
            opacity:1
          }
          90.3125% {
            opacity:1
          }
          90.6250% {
            opacity:1
          }
          90.9375% {
            opacity:1
          }
          91.2500% {
            opacity:1
          }
          91.5625% {
            opacity:1
          }
          91.8750% {
            opacity:1
          }
          92.1875% {
            opacity:1
          }
          92.5000% {
            opacity:1
          }
          92.8125% {
            opacity:1
          }
          93.1250% {
            opacity:1
          }
          93.4375% {
            opacity:1
          }
          93.7500% {
            opacity:1
          }
          94.0625% {
            opacity:1
          }
          94.3750% {
            opacity:1
          }
          94.6875% {
            opacity:1
          }
          95.0000% {
            opacity:1
          }
          95.3125% {
            opacity:1
          }
          95.6250% {
            opacity:1
          }
          95.9375% {
            opacity:1
          }
          96.2500% {
            opacity:1
          }
          96.5625% {
            opacity:1
          }
          96.8750% {
            opacity:1
          }
          97.1875% {
            opacity:1
          }
          97.5000% {
            opacity:1
          }
          97.8125% {
            opacity:1
          }
          98.1250% {
            opacity:1
          }
          98.4375% {
            opacity:1
          }
          98.7500% {
            opacity:1
          }
          99.0625% {
            opacity:1
          }
          99.3750% {
            opacity:1
          }
          99.6875% {
            opacity:1
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes overturn-fleck-5 {
          0.0000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          0.3125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          0.6250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          0.9375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          1.2500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          1.5625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          1.8750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          2.1875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          2.5000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          2.8125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          3.1250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          3.4375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          3.7500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          4.0625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          4.3750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          4.6875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          5.0000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          5.3125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          5.6250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          5.9375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          6.2500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          6.5625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          6.8750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          7.1875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          7.5000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          7.8125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          8.1250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          8.4375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          8.7500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          9.0625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          9.3750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          9.6875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          10.0000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          10.3125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          10.6250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          10.9375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          11.2500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          11.5625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          11.8750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          12.1875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          12.5000% {
            transform:translate(22px,79px);
            opacity:0
          }
          12.8125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          13.1250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          13.4375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          13.7500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          14.0625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          14.3750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          14.6875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          15.0000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          15.3125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          15.6250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          15.9375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          16.2500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          16.5625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          16.8750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          17.1875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          17.5000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          17.8125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          18.1250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          18.4375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          18.7500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          19.0625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          19.3750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          19.6875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          20.0000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          20.3125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          20.6250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          20.9375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          21.2500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          21.5625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          21.8750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          22.1875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          22.5000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          22.8125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          23.1250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          23.4375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          23.7500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          24.0625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          24.3750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          24.6875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          25.0000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          25.3125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          25.6250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          25.9375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          26.2500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          26.5625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          26.8750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          27.1875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          27.5000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          27.8125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          28.1250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          28.4375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          28.7500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          29.0625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          29.3750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          29.6875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          30.0000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          30.3125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          30.6250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          30.9375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          31.2500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          31.5625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          31.8750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          32.1875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          32.5000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          32.8125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          33.1250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          33.4375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          33.7500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          34.0625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          34.3750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          34.6875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          35.0000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          35.3125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          35.6250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          35.9375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          36.2500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          36.5625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          36.8750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          37.1875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          37.5000% {
            transform:translate(70px,44px);
            opacity:0
          }
          37.8125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          38.1250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          38.4375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          38.7500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          39.0625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          39.3750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          39.6875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          40.0000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          40.3125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          40.6250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          40.9375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          41.2500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          41.5625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          41.8750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          42.1875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          42.5000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          42.8125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          43.1250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          43.4375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          43.7500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          44.0625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          44.3750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          44.6875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          45.0000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          45.3125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          45.6250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          45.9375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          46.2500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          46.5625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          46.8750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          47.1875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          47.5000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          47.8125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          48.1250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          48.4375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          48.7500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          49.0625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          49.3750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          49.6875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          50.0000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          50.3125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          50.6250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          50.9375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          51.2500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          51.5625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          51.8750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          52.1875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          52.5000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          52.8125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          53.1250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          53.4375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          53.7500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          54.0625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          54.3750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          54.6875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          55.0000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          55.3125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          55.6250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          55.9375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          56.2500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          56.5625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          56.8750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          57.1875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          57.5000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          57.8125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          58.1250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          58.4375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          58.7500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          59.0625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          59.3750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          59.6875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          60.0000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          60.3125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          60.6250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          60.9375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          61.2500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          61.5625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          61.8750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          62.1875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          62.5000% {
            transform:translate(118px,79px);
            opacity:0
          }
          62.8125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          63.1250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          63.4375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          63.7500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          64.0625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          64.3750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          64.6875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          65.0000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          65.3125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          65.6250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          65.9375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          66.2500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          66.5625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          66.8750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          67.1875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          67.5000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          67.8125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          68.1250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          68.4375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          68.7500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          69.0625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          69.3750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          69.6875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          70.0000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          70.3125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          70.6250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          70.9375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          71.2500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          71.5625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          71.8750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          72.1875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          72.5000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          72.8125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          73.1250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          73.4375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          73.7500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          74.0625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          74.3750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          74.6875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          75.0000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          75.3125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          75.6250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          75.9375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          76.2500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          76.5625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          76.8750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          77.1875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          77.5000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          77.8125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          78.1250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          78.4375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          78.7500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          79.0625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          79.3750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          79.6875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          80.0000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          80.3125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          80.6250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          80.9375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          81.2500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          81.5625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          81.8750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          82.1875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          82.5000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          82.8125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          83.1250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          83.4375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          83.7500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          84.0625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          84.3750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          84.6875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          85.0000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          85.3125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          85.6250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          85.9375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          86.2500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          86.5625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          86.8750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          87.1875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          87.5000% {
            transform:translate(70px,109px);
            opacity:0
          }
          87.8125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          88.1250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          88.4375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          88.7500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          89.0625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          89.3750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          89.6875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          90.0000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          90.3125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          90.6250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          90.9375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          91.2500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          91.5625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          91.8750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          92.1875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          92.5000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          92.8125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          93.1250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          93.4375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          93.7500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          94.0625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          94.3750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          94.6875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          95.0000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          95.3125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          95.6250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          95.9375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          96.2500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          96.5625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          96.8750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          97.1875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          97.5000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          97.8125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          98.1250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          98.4375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          98.7500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          99.0625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          99.3750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          99.6875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          100.0000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
        }
        .parcel-6 {
          animation:overturn-parcel-6 16s linear infinite
        }
        .color-6 {
          animation:overturn-color-6 16s linear infinite
        }
        .mark-6 {
          animation:overturn-mark-6 16s linear infinite
        }
        .fleck-6 {
          animation:overturn-fleck-6 16s linear infinite
        }
        @keyframes overturn-parcel-6 {
          0.0000% {
            transform:translate(22px,79px)
          }
          0.3125% {
            transform:translate(22.009px,78.411px)
          }
          0.6250% {
            transform:translate(22.037px,77.822px)
          }
          0.9375% {
            transform:translate(22.083px,77.234px)
          }
          1.2500% {
            transform:translate(22.148px,76.646px)
          }
          1.5625% {
            transform:translate(22.231px,76.059px)
          }
          1.8750% {
            transform:translate(22.333px,75.474px)
          }
          2.1875% {
            transform:translate(22.453px,74.89px)
          }
          2.5000% {
            transform:translate(22.591px,74.307px)
          }
          2.8125% {
            transform:translate(22.748px,73.726px)
          }
          3.1250% {
            transform:translate(22.922px,73.147px)
          }
          3.4375% {
            transform:translate(23.115px,72.571px)
          }
          3.7500% {
            transform:translate(23.326px,71.997px)
          }
          4.0625% {
            transform:translate(23.555px,71.425px)
          }
          4.3750% {
            transform:translate(23.802px,70.857px)
          }
          4.6875% {
            transform:translate(24.067px,70.291px)
          }
          5.0000% {
            transform:translate(24.349px,69.729px)
          }
          5.3125% {
            transform:translate(24.649px,69.171px)
          }
          5.6250% {
            transform:translate(24.967px,68.616px)
          }
          5.9375% {
            transform:translate(25.302px,68.066px)
          }
          6.2500% {
            transform:translate(25.654px,67.519px)
          }
          6.5625% {
            transform:translate(26.023px,66.978px)
          }
          6.8750% {
            transform:translate(26.409px,66.44px)
          }
          7.1875% {
            transform:translate(26.812px,65.908px)
          }
          7.5000% {
            transform:translate(27.232px,65.38px)
          }
          7.8125% {
            transform:translate(27.668px,64.858px)
          }
          8.1250% {
            transform:translate(28.12px,64.341px)
          }
          8.4375% {
            transform:translate(28.589px,63.83px)
          }
          8.7500% {
            transform:translate(29.073px,63.325px)
          }
          9.0625% {
            transform:translate(29.574px,62.826px)
          }
          9.3750% {
            transform:translate(30.089px,62.333px)
          }
          9.6875% {
            transform:translate(30.621px,61.846px)
          }
          10.0000% {
            transform:translate(31.167px,61.366px)
          }
          10.3125% {
            transform:translate(31.729px,60.893px)
          }
          10.6250% {
            transform:translate(32.305px,60.427px)
          }
          10.9375% {
            transform:translate(32.895px,59.968px)
          }
          11.2500% {
            transform:translate(33.501px,59.517px)
          }
          11.5625% {
            transform:translate(34.12px,59.072px)
          }
          11.8750% {
            transform:translate(34.753px,58.636px)
          }
          12.1875% {
            transform:translate(35.399px,58.207px)
          }
          12.5000% {
            transform:translate(36.059px,57.787px)
          }
          12.8125% {
            transform:translate(36.732px,57.374px)
          }
          13.1250% {
            transform:translate(37.418px,56.97px)
          }
          13.4375% {
            transform:translate(38.116px,56.575px)
          }
          13.7500% {
            transform:translate(38.826px,56.188px)
          }
          14.0625% {
            transform:translate(39.549px,55.81px)
          }
          14.3750% {
            transform:translate(40.283px,55.44px)
          }
          14.6875% {
            transform:translate(41.029px,55.08px)
          }
          15.0000% {
            transform:translate(41.786px,54.729px)
          }
          15.3125% {
            transform:translate(42.554px,54.388px)
          }
          15.6250% {
            transform:translate(43.333px,54.056px)
          }
          15.9375% {
            transform:translate(44.121px,53.733px)
          }
          16.2500% {
            transform:translate(44.92px,53.421px)
          }
          16.5625% {
            transform:translate(45.728px,53.118px)
          }
          16.8750% {
            transform:translate(46.546px,52.825px)
          }
          17.1875% {
            transform:translate(47.373px,52.542px)
          }
          17.5000% {
            transform:translate(48.208px,52.27px)
          }
          17.8125% {
            transform:translate(49.052px,52.008px)
          }
          18.1250% {
            transform:translate(49.904px,51.756px)
          }
          18.4375% {
            transform:translate(50.764px,51.514px)
          }
          18.7500% {
            transform:translate(51.631px,51.284px)
          }
          19.0625% {
            transform:translate(52.505px,51.064px)
          }
          19.3750% {
            transform:translate(53.386px,50.854px)
          }
          19.6875% {
            transform:translate(54.274px,50.656px)
          }
          20.0000% {
            transform:translate(55.167px,50.468px)
          }
          20.3125% {
            transform:translate(56.066px,50.292px)
          }
          20.6250% {
            transform:translate(56.971px,50.126px)
          }
          20.9375% {
            transform:translate(57.88px,49.972px)
          }
          21.2500% {
            transform:translate(58.795px,49.829px)
          }
          21.5625% {
            transform:translate(59.713px,49.697px)
          }
          21.8750% {
            transform:translate(60.636px,49.576px)
          }
          22.1875% {
            transform:translate(61.562px,49.467px)
          }
          22.5000% {
            transform:translate(62.491px,49.369px)
          }
          22.8125% {
            transform:translate(63.423px,49.283px)
          }
          23.1250% {
            transform:translate(64.358px,49.208px)
          }
          23.4375% {
            transform:translate(65.295px,49.144px)
          }
          23.7500% {
            transform:translate(66.234px,49.092px)
          }
          24.0625% {
            transform:translate(67.174px,49.052px)
          }
          24.3750% {
            transform:translate(68.116px,49.023px)
          }
          24.6875% {
            transform:translate(69.058px,49.006px)
          }
          25.0000% {
            transform:translate(70px,49px)
          }
          25.3125% {
            transform:translate(70.942px,49.006px)
          }
          25.6250% {
            transform:translate(71.884px,49.023px)
          }
          25.9375% {
            transform:translate(72.826px,49.052px)
          }
          26.2500% {
            transform:translate(73.766px,49.092px)
          }
          26.5625% {
            transform:translate(74.705px,49.144px)
          }
          26.8750% {
            transform:translate(75.642px,49.208px)
          }
          27.1875% {
            transform:translate(76.577px,49.283px)
          }
          27.5000% {
            transform:translate(77.509px,49.369px)
          }
          27.8125% {
            transform:translate(78.438px,49.467px)
          }
          28.1250% {
            transform:translate(79.364px,49.576px)
          }
          28.4375% {
            transform:translate(80.287px,49.697px)
          }
          28.7500% {
            transform:translate(81.205px,49.829px)
          }
          29.0625% {
            transform:translate(82.12px,49.972px)
          }
          29.3750% {
            transform:translate(83.029px,50.126px)
          }
          29.6875% {
            transform:translate(83.934px,50.292px)
          }
          30.0000% {
            transform:translate(84.833px,50.468px)
          }
          30.3125% {
            transform:translate(85.726px,50.656px)
          }
          30.6250% {
            transform:translate(86.614px,50.854px)
          }
          30.9375% {
            transform:translate(87.495px,51.064px)
          }
          31.2500% {
            transform:translate(88.369px,51.284px)
          }
          31.5625% {
            transform:translate(89.236px,51.514px)
          }
          31.8750% {
            transform:translate(90.096px,51.756px)
          }
          32.1875% {
            transform:translate(90.948px,52.008px)
          }
          32.5000% {
            transform:translate(91.792px,52.27px)
          }
          32.8125% {
            transform:translate(92.627px,52.542px)
          }
          33.1250% {
            transform:translate(93.454px,52.825px)
          }
          33.4375% {
            transform:translate(94.272px,53.118px)
          }
          33.7500% {
            transform:translate(95.08px,53.421px)
          }
          34.0625% {
            transform:translate(95.879px,53.733px)
          }
          34.3750% {
            transform:translate(96.667px,54.056px)
          }
          34.6875% {
            transform:translate(97.446px,54.388px)
          }
          35.0000% {
            transform:translate(98.214px,54.729px)
          }
          35.3125% {
            transform:translate(98.971px,55.08px)
          }
          35.6250% {
            transform:translate(99.717px,55.44px)
          }
          35.9375% {
            transform:translate(100.451px,55.81px)
          }
          36.2500% {
            transform:translate(101.174px,56.188px)
          }
          36.5625% {
            transform:translate(101.884px,56.575px)
          }
          36.8750% {
            transform:translate(102.582px,56.97px)
          }
          37.1875% {
            transform:translate(103.268px,57.374px)
          }
          37.5000% {
            transform:translate(103.941px,57.787px)
          }
          37.8125% {
            transform:translate(104.601px,58.207px)
          }
          38.1250% {
            transform:translate(105.247px,58.636px)
          }
          38.4375% {
            transform:translate(105.88px,59.072px)
          }
          38.7500% {
            transform:translate(106.499px,59.517px)
          }
          39.0625% {
            transform:translate(107.105px,59.968px)
          }
          39.3750% {
            transform:translate(107.695px,60.427px)
          }
          39.6875% {
            transform:translate(108.271px,60.893px)
          }
          40.0000% {
            transform:translate(108.833px,61.366px)
          }
          40.3125% {
            transform:translate(109.379px,61.846px)
          }
          40.6250% {
            transform:translate(109.911px,62.333px)
          }
          40.9375% {
            transform:translate(110.426px,62.826px)
          }
          41.2500% {
            transform:translate(110.927px,63.325px)
          }
          41.5625% {
            transform:translate(111.411px,63.83px)
          }
          41.8750% {
            transform:translate(111.88px,64.341px)
          }
          42.1875% {
            transform:translate(112.332px,64.858px)
          }
          42.5000% {
            transform:translate(112.768px,65.38px)
          }
          42.8125% {
            transform:translate(113.188px,65.908px)
          }
          43.1250% {
            transform:translate(113.591px,66.44px)
          }
          43.4375% {
            transform:translate(113.977px,66.978px)
          }
          43.7500% {
            transform:translate(114.346px,67.519px)
          }
          44.0625% {
            transform:translate(114.698px,68.066px)
          }
          44.3750% {
            transform:translate(115.033px,68.616px)
          }
          44.6875% {
            transform:translate(115.351px,69.171px)
          }
          45.0000% {
            transform:translate(115.651px,69.729px)
          }
          45.3125% {
            transform:translate(115.933px,70.291px)
          }
          45.6250% {
            transform:translate(116.198px,70.857px)
          }
          45.9375% {
            transform:translate(116.445px,71.425px)
          }
          46.2500% {
            transform:translate(116.674px,71.997px)
          }
          46.5625% {
            transform:translate(116.885px,72.571px)
          }
          46.8750% {
            transform:translate(117.078px,73.147px)
          }
          47.1875% {
            transform:translate(117.252px,73.726px)
          }
          47.5000% {
            transform:translate(117.409px,74.307px)
          }
          47.8125% {
            transform:translate(117.547px,74.89px)
          }
          48.1250% {
            transform:translate(117.667px,75.474px)
          }
          48.4375% {
            transform:translate(117.769px,76.059px)
          }
          48.7500% {
            transform:translate(117.852px,76.646px)
          }
          49.0625% {
            transform:translate(117.917px,77.234px)
          }
          49.3750% {
            transform:translate(117.963px,77.822px)
          }
          49.6875% {
            transform:translate(117.991px,78.411px)
          }
          50.0000% {
            transform:translate(118px,79px)
          }
          50.3125% {
            transform:translate(117.991px,79.589px)
          }
          50.6250% {
            transform:translate(117.963px,80.178px)
          }
          50.9375% {
            transform:translate(117.917px,80.766px)
          }
          51.2500% {
            transform:translate(117.852px,81.354px)
          }
          51.5625% {
            transform:translate(117.769px,81.941px)
          }
          51.8750% {
            transform:translate(117.667px,82.526px)
          }
          52.1875% {
            transform:translate(117.547px,83.11px)
          }
          52.5000% {
            transform:translate(117.409px,83.693px)
          }
          52.8125% {
            transform:translate(117.252px,84.274px)
          }
          53.1250% {
            transform:translate(117.078px,84.853px)
          }
          53.4375% {
            transform:translate(116.885px,85.429px)
          }
          53.7500% {
            transform:translate(116.674px,86.003px)
          }
          54.0625% {
            transform:translate(116.445px,86.575px)
          }
          54.3750% {
            transform:translate(116.198px,87.143px)
          }
          54.6875% {
            transform:translate(115.933px,87.709px)
          }
          55.0000% {
            transform:translate(115.651px,88.271px)
          }
          55.3125% {
            transform:translate(115.351px,88.829px)
          }
          55.6250% {
            transform:translate(115.033px,89.384px)
          }
          55.9375% {
            transform:translate(114.698px,89.934px)
          }
          56.2500% {
            transform:translate(114.346px,90.481px)
          }
          56.5625% {
            transform:translate(113.977px,91.022px)
          }
          56.8750% {
            transform:translate(113.591px,91.56px)
          }
          57.1875% {
            transform:translate(113.188px,92.092px)
          }
          57.5000% {
            transform:translate(112.768px,92.62px)
          }
          57.8125% {
            transform:translate(112.332px,93.142px)
          }
          58.1250% {
            transform:translate(111.88px,93.659px)
          }
          58.4375% {
            transform:translate(111.411px,94.17px)
          }
          58.7500% {
            transform:translate(110.927px,94.675px)
          }
          59.0625% {
            transform:translate(110.426px,95.174px)
          }
          59.3750% {
            transform:translate(109.911px,95.667px)
          }
          59.6875% {
            transform:translate(109.379px,96.154px)
          }
          60.0000% {
            transform:translate(108.833px,96.634px)
          }
          60.3125% {
            transform:translate(108.271px,97.107px)
          }
          60.6250% {
            transform:translate(107.695px,97.573px)
          }
          60.9375% {
            transform:translate(107.105px,98.032px)
          }
          61.2500% {
            transform:translate(106.499px,98.483px)
          }
          61.5625% {
            transform:translate(105.88px,98.928px)
          }
          61.8750% {
            transform:translate(105.247px,99.364px)
          }
          62.1875% {
            transform:translate(104.601px,99.793px)
          }
          62.5000% {
            transform:translate(103.941px,100.213px)
          }
          62.8125% {
            transform:translate(103.268px,100.626px)
          }
          63.1250% {
            transform:translate(102.582px,101.03px)
          }
          63.4375% {
            transform:translate(101.884px,101.425px)
          }
          63.7500% {
            transform:translate(101.174px,101.812px)
          }
          64.0625% {
            transform:translate(100.451px,102.19px)
          }
          64.3750% {
            transform:translate(99.717px,102.56px)
          }
          64.6875% {
            transform:translate(98.971px,102.92px)
          }
          65.0000% {
            transform:translate(98.214px,103.271px)
          }
          65.3125% {
            transform:translate(97.446px,103.612px)
          }
          65.6250% {
            transform:translate(96.667px,103.944px)
          }
          65.9375% {
            transform:translate(95.879px,104.267px)
          }
          66.2500% {
            transform:translate(95.08px,104.579px)
          }
          66.5625% {
            transform:translate(94.272px,104.882px)
          }
          66.8750% {
            transform:translate(93.454px,105.175px)
          }
          67.1875% {
            transform:translate(92.627px,105.458px)
          }
          67.5000% {
            transform:translate(91.792px,105.73px)
          }
          67.8125% {
            transform:translate(90.948px,105.992px)
          }
          68.1250% {
            transform:translate(90.096px,106.244px)
          }
          68.4375% {
            transform:translate(89.236px,106.486px)
          }
          68.7500% {
            transform:translate(88.369px,106.716px)
          }
          69.0625% {
            transform:translate(87.495px,106.936px)
          }
          69.3750% {
            transform:translate(86.614px,107.146px)
          }
          69.6875% {
            transform:translate(85.726px,107.344px)
          }
          70.0000% {
            transform:translate(84.833px,107.532px)
          }
          70.3125% {
            transform:translate(83.934px,107.708px)
          }
          70.6250% {
            transform:translate(83.029px,107.874px)
          }
          70.9375% {
            transform:translate(82.12px,108.028px)
          }
          71.2500% {
            transform:translate(81.205px,108.171px)
          }
          71.5625% {
            transform:translate(80.287px,108.303px)
          }
          71.8750% {
            transform:translate(79.364px,108.424px)
          }
          72.1875% {
            transform:translate(78.438px,108.533px)
          }
          72.5000% {
            transform:translate(77.509px,108.631px)
          }
          72.8125% {
            transform:translate(76.577px,108.717px)
          }
          73.1250% {
            transform:translate(75.642px,108.792px)
          }
          73.4375% {
            transform:translate(74.705px,108.856px)
          }
          73.7500% {
            transform:translate(73.766px,108.908px)
          }
          74.0625% {
            transform:translate(72.826px,108.948px)
          }
          74.3750% {
            transform:translate(71.884px,108.977px)
          }
          74.6875% {
            transform:translate(70.942px,108.994px)
          }
          75.0000% {
            transform:translate(70px,109px)
          }
          75.3125% {
            transform:translate(69.058px,108.994px)
          }
          75.6250% {
            transform:translate(68.116px,108.977px)
          }
          75.9375% {
            transform:translate(67.174px,108.948px)
          }
          76.2500% {
            transform:translate(66.234px,108.908px)
          }
          76.5625% {
            transform:translate(65.295px,108.856px)
          }
          76.8750% {
            transform:translate(64.358px,108.792px)
          }
          77.1875% {
            transform:translate(63.423px,108.717px)
          }
          77.5000% {
            transform:translate(62.491px,108.631px)
          }
          77.8125% {
            transform:translate(61.562px,108.533px)
          }
          78.1250% {
            transform:translate(60.636px,108.424px)
          }
          78.4375% {
            transform:translate(59.713px,108.303px)
          }
          78.7500% {
            transform:translate(58.795px,108.171px)
          }
          79.0625% {
            transform:translate(57.88px,108.028px)
          }
          79.3750% {
            transform:translate(56.971px,107.874px)
          }
          79.6875% {
            transform:translate(56.066px,107.708px)
          }
          80.0000% {
            transform:translate(55.167px,107.532px)
          }
          80.3125% {
            transform:translate(54.274px,107.344px)
          }
          80.6250% {
            transform:translate(53.386px,107.146px)
          }
          80.9375% {
            transform:translate(52.505px,106.936px)
          }
          81.2500% {
            transform:translate(51.631px,106.716px)
          }
          81.5625% {
            transform:translate(50.764px,106.486px)
          }
          81.8750% {
            transform:translate(49.904px,106.244px)
          }
          82.1875% {
            transform:translate(49.052px,105.992px)
          }
          82.5000% {
            transform:translate(48.208px,105.73px)
          }
          82.8125% {
            transform:translate(47.373px,105.458px)
          }
          83.1250% {
            transform:translate(46.546px,105.175px)
          }
          83.4375% {
            transform:translate(45.728px,104.882px)
          }
          83.7500% {
            transform:translate(44.92px,104.579px)
          }
          84.0625% {
            transform:translate(44.121px,104.267px)
          }
          84.3750% {
            transform:translate(43.333px,103.944px)
          }
          84.6875% {
            transform:translate(42.554px,103.612px)
          }
          85.0000% {
            transform:translate(41.786px,103.271px)
          }
          85.3125% {
            transform:translate(41.029px,102.92px)
          }
          85.6250% {
            transform:translate(40.283px,102.56px)
          }
          85.9375% {
            transform:translate(39.549px,102.19px)
          }
          86.2500% {
            transform:translate(38.826px,101.812px)
          }
          86.5625% {
            transform:translate(38.116px,101.425px)
          }
          86.8750% {
            transform:translate(37.418px,101.03px)
          }
          87.1875% {
            transform:translate(36.732px,100.626px)
          }
          87.5000% {
            transform:translate(36.059px,100.213px)
          }
          87.8125% {
            transform:translate(35.399px,99.793px)
          }
          88.1250% {
            transform:translate(34.753px,99.364px)
          }
          88.4375% {
            transform:translate(34.12px,98.928px)
          }
          88.7500% {
            transform:translate(33.501px,98.483px)
          }
          89.0625% {
            transform:translate(32.895px,98.032px)
          }
          89.3750% {
            transform:translate(32.305px,97.573px)
          }
          89.6875% {
            transform:translate(31.729px,97.107px)
          }
          90.0000% {
            transform:translate(31.167px,96.634px)
          }
          90.3125% {
            transform:translate(30.621px,96.154px)
          }
          90.6250% {
            transform:translate(30.089px,95.667px)
          }
          90.9375% {
            transform:translate(29.574px,95.174px)
          }
          91.2500% {
            transform:translate(29.073px,94.675px)
          }
          91.5625% {
            transform:translate(28.589px,94.17px)
          }
          91.8750% {
            transform:translate(28.12px,93.659px)
          }
          92.1875% {
            transform:translate(27.668px,93.142px)
          }
          92.5000% {
            transform:translate(27.232px,92.62px)
          }
          92.8125% {
            transform:translate(26.812px,92.092px)
          }
          93.1250% {
            transform:translate(26.409px,91.56px)
          }
          93.4375% {
            transform:translate(26.023px,91.022px)
          }
          93.7500% {
            transform:translate(25.654px,90.481px)
          }
          94.0625% {
            transform:translate(25.302px,89.934px)
          }
          94.3750% {
            transform:translate(24.967px,89.384px)
          }
          94.6875% {
            transform:translate(24.649px,88.829px)
          }
          95.0000% {
            transform:translate(24.349px,88.271px)
          }
          95.3125% {
            transform:translate(24.067px,87.709px)
          }
          95.6250% {
            transform:translate(23.802px,87.143px)
          }
          95.9375% {
            transform:translate(23.555px,86.575px)
          }
          96.2500% {
            transform:translate(23.326px,86.003px)
          }
          96.5625% {
            transform:translate(23.115px,85.429px)
          }
          96.8750% {
            transform:translate(22.922px,84.853px)
          }
          97.1875% {
            transform:translate(22.748px,84.274px)
          }
          97.5000% {
            transform:translate(22.591px,83.693px)
          }
          97.8125% {
            transform:translate(22.453px,83.11px)
          }
          98.1250% {
            transform:translate(22.333px,82.526px)
          }
          98.4375% {
            transform:translate(22.231px,81.941px)
          }
          98.7500% {
            transform:translate(22.148px,81.354px)
          }
          99.0625% {
            transform:translate(22.083px,80.766px)
          }
          99.3750% {
            transform:translate(22.037px,80.178px)
          }
          99.6875% {
            transform:translate(22.009px,79.589px)
          }
          100.0000% {
            transform:translate(22px,79px)
          }
        }
        @keyframes overturn-color-6 {
          0.0000% {
            fill:rgb(119 201 239)
          }
          0.3125% {
            fill:rgb(119 201 239)
          }
          0.6250% {
            fill:rgb(119 201 239)
          }
          0.9375% {
            fill:rgb(120 201 239)
          }
          1.2500% {
            fill:rgb(120 201 238)
          }
          1.5625% {
            fill:rgb(120 201 238)
          }
          1.8750% {
            fill:rgb(121 201 237)
          }
          2.1875% {
            fill:rgb(122 201 236)
          }
          2.5000% {
            fill:rgb(122 201 236)
          }
          2.8125% {
            fill:rgb(123 201 235)
          }
          3.1250% {
            fill:rgb(124 201 234)
          }
          3.4375% {
            fill:rgb(125 201 233)
          }
          3.7500% {
            fill:rgb(127 201 232)
          }
          4.0625% {
            fill:rgb(128 201 231)
          }
          4.3750% {
            fill:rgb(129 201 229)
          }
          4.6875% {
            fill:rgb(130 201 228)
          }
          5.0000% {
            fill:rgb(132 201 227)
          }
          5.3125% {
            fill:rgb(133 201 225)
          }
          5.6250% {
            fill:rgb(135 201 224)
          }
          5.9375% {
            fill:rgb(137 201 222)
          }
          6.2500% {
            fill:rgb(138 201 220)
          }
          6.5625% {
            fill:rgb(140 201 219)
          }
          6.8750% {
            fill:rgb(142 201 217)
          }
          7.1875% {
            fill:rgb(144 201 215)
          }
          7.5000% {
            fill:rgb(146 201 213)
          }
          7.8125% {
            fill:rgb(148 201 211)
          }
          8.1250% {
            fill:rgb(150 201 209)
          }
          8.4375% {
            fill:rgb(152 201 207)
          }
          8.7500% {
            fill:rgb(154 201 205)
          }
          9.0625% {
            fill:rgb(156 201 203)
          }
          9.3750% {
            fill:rgb(158 201 201)
          }
          9.6875% {
            fill:rgb(160 201 199)
          }
          10.0000% {
            fill:rgb(163 201 197)
          }
          10.3125% {
            fill:rgb(165 201 195)
          }
          10.6250% {
            fill:rgb(167 201 192)
          }
          10.9375% {
            fill:rgb(169 201 190)
          }
          11.2500% {
            fill:rgb(172 201 188)
          }
          11.5625% {
            fill:rgb(174 201 186)
          }
          11.8750% {
            fill:rgb(176 201 183)
          }
          12.1875% {
            fill:rgb(179 201 181)
          }
          12.5000% {
            fill:rgb(181 201 179)
          }
          12.8125% {
            fill:rgb(183 201 177)
          }
          13.1250% {
            fill:rgb(186 201 175)
          }
          13.4375% {
            fill:rgb(188 201 172)
          }
          13.7500% {
            fill:rgb(190 201 170)
          }
          14.0625% {
            fill:rgb(193 201 168)
          }
          14.3750% {
            fill:rgb(195 201 166)
          }
          14.6875% {
            fill:rgb(197 201 163)
          }
          15.0000% {
            fill:rgb(199 201 161)
          }
          15.3125% {
            fill:rgb(202 201 159)
          }
          15.6250% {
            fill:rgb(204 201 157)
          }
          15.9375% {
            fill:rgb(206 201 155)
          }
          16.2500% {
            fill:rgb(208 201 153)
          }
          16.5625% {
            fill:rgb(210 201 151)
          }
          16.8750% {
            fill:rgb(212 201 149)
          }
          17.1875% {
            fill:rgb(214 201 147)
          }
          17.5000% {
            fill:rgb(216 201 145)
          }
          17.8125% {
            fill:rgb(218 201 143)
          }
          18.1250% {
            fill:rgb(220 201 141)
          }
          18.4375% {
            fill:rgb(222 201 139)
          }
          18.7500% {
            fill:rgb(224 201 138)
          }
          19.0625% {
            fill:rgb(225 201 136)
          }
          19.3750% {
            fill:rgb(227 201 134)
          }
          19.6875% {
            fill:rgb(229 201 133)
          }
          20.0000% {
            fill:rgb(230 201 131)
          }
          20.3125% {
            fill:rgb(232 201 130)
          }
          20.6250% {
            fill:rgb(233 201 129)
          }
          20.9375% {
            fill:rgb(234 201 127)
          }
          21.2500% {
            fill:rgb(235 201 126)
          }
          21.5625% {
            fill:rgb(237 201 125)
          }
          21.8750% {
            fill:rgb(238 201 124)
          }
          22.1875% {
            fill:rgb(239 201 123)
          }
          22.5000% {
            fill:rgb(240 201 122)
          }
          22.8125% {
            fill:rgb(240 201 122)
          }
          23.1250% {
            fill:rgb(241 201 121)
          }
          23.4375% {
            fill:rgb(242 201 120)
          }
          23.7500% {
            fill:rgb(242 201 120)
          }
          24.0625% {
            fill:rgb(242 201 119)
          }
          24.3750% {
            fill:rgb(243 201 119)
          }
          24.6875% {
            fill:rgb(243 201 119)
          }
          25.0000% {
            fill:rgb(243 201 119)
          }
          25.3125% {
            fill:rgb(243 201 119)
          }
          25.6250% {
            fill:rgb(243 201 119)
          }
          25.9375% {
            fill:rgb(243 201 119)
          }
          26.2500% {
            fill:rgb(243 201 119)
          }
          26.5625% {
            fill:rgb(243 201 119)
          }
          26.8750% {
            fill:rgb(243 201 119)
          }
          27.1875% {
            fill:rgb(243 201 119)
          }
          27.5000% {
            fill:rgb(243 201 119)
          }
          27.8125% {
            fill:rgb(243 201 119)
          }
          28.1250% {
            fill:rgb(243 201 119)
          }
          28.4375% {
            fill:rgb(243 201 119)
          }
          28.7500% {
            fill:rgb(243 201 119)
          }
          29.0625% {
            fill:rgb(243 201 119)
          }
          29.3750% {
            fill:rgb(243 201 119)
          }
          29.6875% {
            fill:rgb(243 201 119)
          }
          30.0000% {
            fill:rgb(243 201 119)
          }
          30.3125% {
            fill:rgb(243 201 119)
          }
          30.6250% {
            fill:rgb(243 201 119)
          }
          30.9375% {
            fill:rgb(243 201 119)
          }
          31.2500% {
            fill:rgb(243 201 119)
          }
          31.5625% {
            fill:rgb(243 201 119)
          }
          31.8750% {
            fill:rgb(243 201 119)
          }
          32.1875% {
            fill:rgb(243 201 119)
          }
          32.5000% {
            fill:rgb(243 201 119)
          }
          32.8125% {
            fill:rgb(243 201 119)
          }
          33.1250% {
            fill:rgb(243 201 119)
          }
          33.4375% {
            fill:rgb(243 201 119)
          }
          33.7500% {
            fill:rgb(243 201 119)
          }
          34.0625% {
            fill:rgb(242 201 120)
          }
          34.3750% {
            fill:rgb(242 201 120)
          }
          34.6875% {
            fill:rgb(241 201 121)
          }
          35.0000% {
            fill:rgb(240 201 122)
          }
          35.3125% {
            fill:rgb(238 201 124)
          }
          35.6250% {
            fill:rgb(237 201 125)
          }
          35.9375% {
            fill:rgb(235 201 127)
          }
          36.2500% {
            fill:rgb(233 201 129)
          }
          36.5625% {
            fill:rgb(231 201 131)
          }
          36.8750% {
            fill:rgb(229 201 133)
          }
          37.1875% {
            fill:rgb(226 201 135)
          }
          37.5000% {
            fill:rgb(224 201 138)
          }
          37.8125% {
            fill:rgb(221 201 140)
          }
          38.1250% {
            fill:rgb(218 201 143)
          }
          38.4375% {
            fill:rgb(215 201 146)
          }
          38.7500% {
            fill:rgb(212 201 149)
          }
          39.0625% {
            fill:rgb(209 201 152)
          }
          39.3750% {
            fill:rgb(206 201 155)
          }
          39.6875% {
            fill:rgb(203 201 158)
          }
          40.0000% {
            fill:rgb(199 201 161)
          }
          40.3125% {
            fill:rgb(196 201 165)
          }
          40.6250% {
            fill:rgb(193 201 168)
          }
          40.9375% {
            fill:rgb(189 201 171)
          }
          41.2500% {
            fill:rgb(186 201 175)
          }
          41.5625% {
            fill:rgb(182 201 178)
          }
          41.8750% {
            fill:rgb(179 201 181)
          }
          42.1875% {
            fill:rgb(175 201 185)
          }
          42.5000% {
            fill:rgb(172 201 188)
          }
          42.8125% {
            fill:rgb(168 201 191)
          }
          43.1250% {
            fill:rgb(165 201 195)
          }
          43.4375% {
            fill:rgb(162 201 198)
          }
          43.7500% {
            fill:rgb(158 201 201)
          }
          44.0625% {
            fill:rgb(155 201 204)
          }
          44.3750% {
            fill:rgb(152 201 207)
          }
          44.6875% {
            fill:rgb(149 201 210)
          }
          45.0000% {
            fill:rgb(146 201 213)
          }
          45.3125% {
            fill:rgb(143 201 216)
          }
          45.6250% {
            fill:rgb(140 201 219)
          }
          45.9375% {
            fill:rgb(138 201 221)
          }
          46.2500% {
            fill:rgb(135 201 224)
          }
          46.5625% {
            fill:rgb(133 201 226)
          }
          46.8750% {
            fill:rgb(130 201 228)
          }
          47.1875% {
            fill:rgb(128 201 230)
          }
          47.5000% {
            fill:rgb(127 201 232)
          }
          47.8125% {
            fill:rgb(125 201 233)
          }
          48.1250% {
            fill:rgb(123 201 235)
          }
          48.4375% {
            fill:rgb(122 201 236)
          }
          48.7500% {
            fill:rgb(121 201 237)
          }
          49.0625% {
            fill:rgb(120 201 238)
          }
          49.3750% {
            fill:rgb(120 201 239)
          }
          49.6875% {
            fill:rgb(119 201 239)
          }
          50.0000% {
            fill:rgb(119 201 239)
          }
          50.3125% {
            fill:rgb(119 201 239)
          }
          50.6250% {
            fill:rgb(119 201 239)
          }
          50.9375% {
            fill:rgb(119 201 239)
          }
          51.2500% {
            fill:rgb(119 201 239)
          }
          51.5625% {
            fill:rgb(119 201 239)
          }
          51.8750% {
            fill:rgb(119 201 239)
          }
          52.1875% {
            fill:rgb(119 201 239)
          }
          52.5000% {
            fill:rgb(119 201 239)
          }
          52.8125% {
            fill:rgb(119 201 239)
          }
          53.1250% {
            fill:rgb(119 201 239)
          }
          53.4375% {
            fill:rgb(119 201 239)
          }
          53.7500% {
            fill:rgb(119 201 239)
          }
          54.0625% {
            fill:rgb(119 201 239)
          }
          54.3750% {
            fill:rgb(119 201 239)
          }
          54.6875% {
            fill:rgb(119 201 239)
          }
          55.0000% {
            fill:rgb(119 201 239)
          }
          55.3125% {
            fill:rgb(119 201 239)
          }
          55.6250% {
            fill:rgb(119 201 239)
          }
          55.9375% {
            fill:rgb(119 201 239)
          }
          56.2500% {
            fill:rgb(119 201 239)
          }
          56.5625% {
            fill:rgb(119 201 239)
          }
          56.8750% {
            fill:rgb(119 201 239)
          }
          57.1875% {
            fill:rgb(119 201 239)
          }
          57.5000% {
            fill:rgb(119 201 239)
          }
          57.8125% {
            fill:rgb(119 201 239)
          }
          58.1250% {
            fill:rgb(119 201 239)
          }
          58.4375% {
            fill:rgb(119 201 239)
          }
          58.7500% {
            fill:rgb(119 201 239)
          }
          59.0625% {
            fill:rgb(119 201 239)
          }
          59.3750% {
            fill:rgb(119 201 239)
          }
          59.6875% {
            fill:rgb(119 201 239)
          }
          60.0000% {
            fill:rgb(119 201 239)
          }
          60.3125% {
            fill:rgb(119 201 239)
          }
          60.6250% {
            fill:rgb(119 201 239)
          }
          60.9375% {
            fill:rgb(119 201 239)
          }
          61.2500% {
            fill:rgb(119 201 239)
          }
          61.5625% {
            fill:rgb(119 201 239)
          }
          61.8750% {
            fill:rgb(119 201 239)
          }
          62.1875% {
            fill:rgb(119 201 239)
          }
          62.5000% {
            fill:rgb(119 201 239)
          }
          62.8125% {
            fill:rgb(119 201 239)
          }
          63.1250% {
            fill:rgb(119 201 239)
          }
          63.4375% {
            fill:rgb(119 201 239)
          }
          63.7500% {
            fill:rgb(119 201 239)
          }
          64.0625% {
            fill:rgb(119 201 239)
          }
          64.3750% {
            fill:rgb(119 201 239)
          }
          64.6875% {
            fill:rgb(119 201 239)
          }
          65.0000% {
            fill:rgb(119 201 239)
          }
          65.3125% {
            fill:rgb(119 201 239)
          }
          65.6250% {
            fill:rgb(119 201 239)
          }
          65.9375% {
            fill:rgb(119 201 239)
          }
          66.2500% {
            fill:rgb(119 201 239)
          }
          66.5625% {
            fill:rgb(119 201 239)
          }
          66.8750% {
            fill:rgb(119 201 239)
          }
          67.1875% {
            fill:rgb(119 201 239)
          }
          67.5000% {
            fill:rgb(119 201 239)
          }
          67.8125% {
            fill:rgb(119 201 239)
          }
          68.1250% {
            fill:rgb(119 201 239)
          }
          68.4375% {
            fill:rgb(119 201 239)
          }
          68.7500% {
            fill:rgb(119 201 239)
          }
          69.0625% {
            fill:rgb(119 201 239)
          }
          69.3750% {
            fill:rgb(119 201 239)
          }
          69.6875% {
            fill:rgb(119 201 239)
          }
          70.0000% {
            fill:rgb(119 201 239)
          }
          70.3125% {
            fill:rgb(119 201 239)
          }
          70.6250% {
            fill:rgb(119 201 239)
          }
          70.9375% {
            fill:rgb(119 201 239)
          }
          71.2500% {
            fill:rgb(119 201 239)
          }
          71.5625% {
            fill:rgb(119 201 239)
          }
          71.8750% {
            fill:rgb(119 201 239)
          }
          72.1875% {
            fill:rgb(119 201 239)
          }
          72.5000% {
            fill:rgb(119 201 239)
          }
          72.8125% {
            fill:rgb(119 201 239)
          }
          73.1250% {
            fill:rgb(119 201 239)
          }
          73.4375% {
            fill:rgb(119 201 239)
          }
          73.7500% {
            fill:rgb(119 201 239)
          }
          74.0625% {
            fill:rgb(119 201 239)
          }
          74.3750% {
            fill:rgb(119 201 239)
          }
          74.6875% {
            fill:rgb(119 201 239)
          }
          75.0000% {
            fill:rgb(119 201 239)
          }
          75.3125% {
            fill:rgb(119 201 239)
          }
          75.6250% {
            fill:rgb(119 201 239)
          }
          75.9375% {
            fill:rgb(119 201 239)
          }
          76.2500% {
            fill:rgb(119 201 239)
          }
          76.5625% {
            fill:rgb(119 201 239)
          }
          76.8750% {
            fill:rgb(119 201 239)
          }
          77.1875% {
            fill:rgb(119 201 239)
          }
          77.5000% {
            fill:rgb(119 201 239)
          }
          77.8125% {
            fill:rgb(119 201 239)
          }
          78.1250% {
            fill:rgb(119 201 239)
          }
          78.4375% {
            fill:rgb(119 201 239)
          }
          78.7500% {
            fill:rgb(119 201 239)
          }
          79.0625% {
            fill:rgb(119 201 239)
          }
          79.3750% {
            fill:rgb(119 201 239)
          }
          79.6875% {
            fill:rgb(119 201 239)
          }
          80.0000% {
            fill:rgb(119 201 239)
          }
          80.3125% {
            fill:rgb(119 201 239)
          }
          80.6250% {
            fill:rgb(119 201 239)
          }
          80.9375% {
            fill:rgb(119 201 239)
          }
          81.2500% {
            fill:rgb(119 201 239)
          }
          81.5625% {
            fill:rgb(119 201 239)
          }
          81.8750% {
            fill:rgb(119 201 239)
          }
          82.1875% {
            fill:rgb(119 201 239)
          }
          82.5000% {
            fill:rgb(119 201 239)
          }
          82.8125% {
            fill:rgb(119 201 239)
          }
          83.1250% {
            fill:rgb(119 201 239)
          }
          83.4375% {
            fill:rgb(119 201 239)
          }
          83.7500% {
            fill:rgb(119 201 239)
          }
          84.0625% {
            fill:rgb(119 201 239)
          }
          84.3750% {
            fill:rgb(119 201 239)
          }
          84.6875% {
            fill:rgb(119 201 239)
          }
          85.0000% {
            fill:rgb(119 201 239)
          }
          85.3125% {
            fill:rgb(119 201 239)
          }
          85.6250% {
            fill:rgb(119 201 239)
          }
          85.9375% {
            fill:rgb(119 201 239)
          }
          86.2500% {
            fill:rgb(119 201 239)
          }
          86.5625% {
            fill:rgb(119 201 239)
          }
          86.8750% {
            fill:rgb(119 201 239)
          }
          87.1875% {
            fill:rgb(119 201 239)
          }
          87.5000% {
            fill:rgb(119 201 239)
          }
          87.8125% {
            fill:rgb(119 201 239)
          }
          88.1250% {
            fill:rgb(119 201 239)
          }
          88.4375% {
            fill:rgb(119 201 239)
          }
          88.7500% {
            fill:rgb(119 201 239)
          }
          89.0625% {
            fill:rgb(119 201 239)
          }
          89.3750% {
            fill:rgb(119 201 239)
          }
          89.6875% {
            fill:rgb(119 201 239)
          }
          90.0000% {
            fill:rgb(119 201 239)
          }
          90.3125% {
            fill:rgb(119 201 239)
          }
          90.6250% {
            fill:rgb(119 201 239)
          }
          90.9375% {
            fill:rgb(119 201 239)
          }
          91.2500% {
            fill:rgb(119 201 239)
          }
          91.5625% {
            fill:rgb(119 201 239)
          }
          91.8750% {
            fill:rgb(119 201 239)
          }
          92.1875% {
            fill:rgb(119 201 239)
          }
          92.5000% {
            fill:rgb(119 201 239)
          }
          92.8125% {
            fill:rgb(119 201 239)
          }
          93.1250% {
            fill:rgb(119 201 239)
          }
          93.4375% {
            fill:rgb(119 201 239)
          }
          93.7500% {
            fill:rgb(119 201 239)
          }
          94.0625% {
            fill:rgb(119 201 239)
          }
          94.3750% {
            fill:rgb(119 201 239)
          }
          94.6875% {
            fill:rgb(119 201 239)
          }
          95.0000% {
            fill:rgb(119 201 239)
          }
          95.3125% {
            fill:rgb(119 201 239)
          }
          95.6250% {
            fill:rgb(119 201 239)
          }
          95.9375% {
            fill:rgb(119 201 239)
          }
          96.2500% {
            fill:rgb(119 201 239)
          }
          96.5625% {
            fill:rgb(119 201 239)
          }
          96.8750% {
            fill:rgb(119 201 239)
          }
          97.1875% {
            fill:rgb(119 201 239)
          }
          97.5000% {
            fill:rgb(119 201 239)
          }
          97.8125% {
            fill:rgb(119 201 239)
          }
          98.1250% {
            fill:rgb(119 201 239)
          }
          98.4375% {
            fill:rgb(119 201 239)
          }
          98.7500% {
            fill:rgb(119 201 239)
          }
          99.0625% {
            fill:rgb(119 201 239)
          }
          99.3750% {
            fill:rgb(119 201 239)
          }
          99.6875% {
            fill:rgb(119 201 239)
          }
          100.0000% {
            fill:rgb(119 201 239)
          }
        }
        @keyframes overturn-mark-6 {
          0.0000% {
            opacity:1
          }
          0.3125% {
            opacity:1.0
          }
          0.6250% {
            opacity:0.998
          }
          0.9375% {
            opacity:0.996
          }
          1.2500% {
            opacity:0.993
          }
          1.5625% {
            opacity:0.989
          }
          1.8750% {
            opacity:0.984
          }
          2.1875% {
            opacity:0.978
          }
          2.5000% {
            opacity:0.972
          }
          2.8125% {
            opacity:0.965
          }
          3.1250% {
            opacity:0.957
          }
          3.4375% {
            opacity:0.948
          }
          3.7500% {
            opacity:0.939
          }
          4.0625% {
            opacity:0.929
          }
          4.3750% {
            opacity:0.919
          }
          4.6875% {
            opacity:0.908
          }
          5.0000% {
            opacity:0.896
          }
          5.3125% {
            opacity:0.884
          }
          5.6250% {
            opacity:0.871
          }
          5.9375% {
            opacity:0.858
          }
          6.2500% {
            opacity:0.844
          }
          6.5625% {
            opacity:0.829
          }
          6.8750% {
            opacity:0.815
          }
          7.1875% {
            opacity:0.8
          }
          7.5000% {
            opacity:0.784
          }
          7.8125% {
            opacity:0.768
          }
          8.1250% {
            opacity:0.752
          }
          8.4375% {
            opacity:0.735
          }
          8.7500% {
            opacity:0.718
          }
          9.0625% {
            opacity:0.701
          }
          9.3750% {
            opacity:0.684
          }
          9.6875% {
            opacity:0.666
          }
          10.0000% {
            opacity:0.648
          }
          10.3125% {
            opacity:0.63
          }
          10.6250% {
            opacity:0.612
          }
          10.9375% {
            opacity:0.593
          }
          11.2500% {
            opacity:0.575
          }
          11.5625% {
            opacity:0.556
          }
          11.8750% {
            opacity:0.537
          }
          12.1875% {
            opacity:0.519
          }
          12.5000% {
            opacity:0.5
          }
          12.8125% {
            opacity:0.481
          }
          13.1250% {
            opacity:0.463
          }
          13.4375% {
            opacity:0.444
          }
          13.7500% {
            opacity:0.425
          }
          14.0625% {
            opacity:0.407
          }
          14.3750% {
            opacity:0.388
          }
          14.6875% {
            opacity:0.37
          }
          15.0000% {
            opacity:0.352
          }
          15.3125% {
            opacity:0.334
          }
          15.6250% {
            opacity:0.316
          }
          15.9375% {
            opacity:0.299
          }
          16.2500% {
            opacity:0.282
          }
          16.5625% {
            opacity:0.265
          }
          16.8750% {
            opacity:0.248
          }
          17.1875% {
            opacity:0.232
          }
          17.5000% {
            opacity:0.216
          }
          17.8125% {
            opacity:0.2
          }
          18.1250% {
            opacity:0.185
          }
          18.4375% {
            opacity:0.171
          }
          18.7500% {
            opacity:0.156
          }
          19.0625% {
            opacity:0.142
          }
          19.3750% {
            opacity:0.129
          }
          19.6875% {
            opacity:0.116
          }
          20.0000% {
            opacity:0.104
          }
          20.3125% {
            opacity:0.092
          }
          20.6250% {
            opacity:0.081
          }
          20.9375% {
            opacity:0.071
          }
          21.2500% {
            opacity:0.061
          }
          21.5625% {
            opacity:0.052
          }
          21.8750% {
            opacity:0.043
          }
          22.1875% {
            opacity:0.035
          }
          22.5000% {
            opacity:0.028
          }
          22.8125% {
            opacity:0.022
          }
          23.1250% {
            opacity:0.016
          }
          23.4375% {
            opacity:0.011
          }
          23.7500% {
            opacity:0.007
          }
          24.0625% {
            opacity:0.004
          }
          24.3750% {
            opacity:0.002
          }
          24.6875% {
            opacity:0.0
          }
          25.0000% {
            opacity:0
          }
          25.3125% {
            opacity:0
          }
          25.6250% {
            opacity:0
          }
          25.9375% {
            opacity:0
          }
          26.2500% {
            opacity:0
          }
          26.5625% {
            opacity:0
          }
          26.8750% {
            opacity:0
          }
          27.1875% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          27.8125% {
            opacity:0
          }
          28.1250% {
            opacity:0
          }
          28.4375% {
            opacity:0
          }
          28.7500% {
            opacity:0
          }
          29.0625% {
            opacity:0
          }
          29.3750% {
            opacity:0
          }
          29.6875% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.3125% {
            opacity:0
          }
          30.6250% {
            opacity:0
          }
          30.9375% {
            opacity:0
          }
          31.2500% {
            opacity:0
          }
          31.5625% {
            opacity:0
          }
          31.8750% {
            opacity:0
          }
          32.1875% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          32.8125% {
            opacity:0
          }
          33.1250% {
            opacity:0
          }
          33.4375% {
            opacity:0.0
          }
          33.7500% {
            opacity:0.002
          }
          34.0625% {
            opacity:0.006
          }
          34.3750% {
            opacity:0.011
          }
          34.6875% {
            opacity:0.019
          }
          35.0000% {
            opacity:0.028
          }
          35.3125% {
            opacity:0.039
          }
          35.6250% {
            opacity:0.052
          }
          35.9375% {
            opacity:0.066
          }
          36.2500% {
            opacity:0.081
          }
          36.5625% {
            opacity:0.098
          }
          36.8750% {
            opacity:0.116
          }
          37.1875% {
            opacity:0.136
          }
          37.5000% {
            opacity:0.156
          }
          37.8125% {
            opacity:0.178
          }
          38.1250% {
            opacity:0.2
          }
          38.4375% {
            opacity:0.224
          }
          38.7500% {
            opacity:0.248
          }
          39.0625% {
            opacity:0.273
          }
          39.3750% {
            opacity:0.299
          }
          39.6875% {
            opacity:0.325
          }
          40.0000% {
            opacity:0.352
          }
          40.3125% {
            opacity:0.379
          }
          40.6250% {
            opacity:0.407
          }
          40.9375% {
            opacity:0.435
          }
          41.2500% {
            opacity:0.463
          }
          41.5625% {
            opacity:0.491
          }
          41.8750% {
            opacity:0.519
          }
          42.1875% {
            opacity:0.547
          }
          42.5000% {
            opacity:0.575
          }
          42.8125% {
            opacity:0.602
          }
          43.1250% {
            opacity:0.63
          }
          43.4375% {
            opacity:0.657
          }
          43.7500% {
            opacity:0.684
          }
          44.0625% {
            opacity:0.71
          }
          44.3750% {
            opacity:0.735
          }
          44.6875% {
            opacity:0.76
          }
          45.0000% {
            opacity:0.784
          }
          45.3125% {
            opacity:0.807
          }
          45.6250% {
            opacity:0.829
          }
          45.9375% {
            opacity:0.851
          }
          46.2500% {
            opacity:0.871
          }
          46.5625% {
            opacity:0.89
          }
          46.8750% {
            opacity:0.908
          }
          47.1875% {
            opacity:0.924
          }
          47.5000% {
            opacity:0.939
          }
          47.8125% {
            opacity:0.953
          }
          48.1250% {
            opacity:0.965
          }
          48.4375% {
            opacity:0.975
          }
          48.7500% {
            opacity:0.984
          }
          49.0625% {
            opacity:0.991
          }
          49.3750% {
            opacity:0.996
          }
          49.6875% {
            opacity:0.999
          }
          50.0000% {
            opacity:1
          }
          50.3125% {
            opacity:1
          }
          50.6250% {
            opacity:1
          }
          50.9375% {
            opacity:1
          }
          51.2500% {
            opacity:1
          }
          51.5625% {
            opacity:1
          }
          51.8750% {
            opacity:1
          }
          52.1875% {
            opacity:1
          }
          52.5000% {
            opacity:1
          }
          52.8125% {
            opacity:1
          }
          53.1250% {
            opacity:1
          }
          53.4375% {
            opacity:1
          }
          53.7500% {
            opacity:1
          }
          54.0625% {
            opacity:1
          }
          54.3750% {
            opacity:1
          }
          54.6875% {
            opacity:1
          }
          55.0000% {
            opacity:1
          }
          55.3125% {
            opacity:1
          }
          55.6250% {
            opacity:1
          }
          55.9375% {
            opacity:1
          }
          56.2500% {
            opacity:1
          }
          56.5625% {
            opacity:1
          }
          56.8750% {
            opacity:1
          }
          57.1875% {
            opacity:1
          }
          57.5000% {
            opacity:1
          }
          57.8125% {
            opacity:1
          }
          58.1250% {
            opacity:1
          }
          58.4375% {
            opacity:1
          }
          58.7500% {
            opacity:1
          }
          59.0625% {
            opacity:1
          }
          59.3750% {
            opacity:1
          }
          59.6875% {
            opacity:1
          }
          60.0000% {
            opacity:1
          }
          60.3125% {
            opacity:1
          }
          60.6250% {
            opacity:1
          }
          60.9375% {
            opacity:1
          }
          61.2500% {
            opacity:1
          }
          61.5625% {
            opacity:1
          }
          61.8750% {
            opacity:1
          }
          62.1875% {
            opacity:1
          }
          62.5000% {
            opacity:1
          }
          62.8125% {
            opacity:1
          }
          63.1250% {
            opacity:1
          }
          63.4375% {
            opacity:1
          }
          63.7500% {
            opacity:1
          }
          64.0625% {
            opacity:1
          }
          64.3750% {
            opacity:1
          }
          64.6875% {
            opacity:1
          }
          65.0000% {
            opacity:1
          }
          65.3125% {
            opacity:1
          }
          65.6250% {
            opacity:1
          }
          65.9375% {
            opacity:1
          }
          66.2500% {
            opacity:1
          }
          66.5625% {
            opacity:1
          }
          66.8750% {
            opacity:1
          }
          67.1875% {
            opacity:1
          }
          67.5000% {
            opacity:1
          }
          67.8125% {
            opacity:1
          }
          68.1250% {
            opacity:1
          }
          68.4375% {
            opacity:1
          }
          68.7500% {
            opacity:1
          }
          69.0625% {
            opacity:1
          }
          69.3750% {
            opacity:1
          }
          69.6875% {
            opacity:1
          }
          70.0000% {
            opacity:1
          }
          70.3125% {
            opacity:1
          }
          70.6250% {
            opacity:1
          }
          70.9375% {
            opacity:1
          }
          71.2500% {
            opacity:1
          }
          71.5625% {
            opacity:1
          }
          71.8750% {
            opacity:1
          }
          72.1875% {
            opacity:1
          }
          72.5000% {
            opacity:1
          }
          72.8125% {
            opacity:1
          }
          73.1250% {
            opacity:1
          }
          73.4375% {
            opacity:1
          }
          73.7500% {
            opacity:1
          }
          74.0625% {
            opacity:1
          }
          74.3750% {
            opacity:1
          }
          74.6875% {
            opacity:1
          }
          75.0000% {
            opacity:1
          }
          75.3125% {
            opacity:1
          }
          75.6250% {
            opacity:1
          }
          75.9375% {
            opacity:1
          }
          76.2500% {
            opacity:1
          }
          76.5625% {
            opacity:1
          }
          76.8750% {
            opacity:1
          }
          77.1875% {
            opacity:1
          }
          77.5000% {
            opacity:1
          }
          77.8125% {
            opacity:1
          }
          78.1250% {
            opacity:1
          }
          78.4375% {
            opacity:1
          }
          78.7500% {
            opacity:1
          }
          79.0625% {
            opacity:1
          }
          79.3750% {
            opacity:1
          }
          79.6875% {
            opacity:1
          }
          80.0000% {
            opacity:1
          }
          80.3125% {
            opacity:1
          }
          80.6250% {
            opacity:1
          }
          80.9375% {
            opacity:1
          }
          81.2500% {
            opacity:1
          }
          81.5625% {
            opacity:1
          }
          81.8750% {
            opacity:1
          }
          82.1875% {
            opacity:1
          }
          82.5000% {
            opacity:1
          }
          82.8125% {
            opacity:1
          }
          83.1250% {
            opacity:1
          }
          83.4375% {
            opacity:1
          }
          83.7500% {
            opacity:1
          }
          84.0625% {
            opacity:1
          }
          84.3750% {
            opacity:1
          }
          84.6875% {
            opacity:1
          }
          85.0000% {
            opacity:1
          }
          85.3125% {
            opacity:1
          }
          85.6250% {
            opacity:1
          }
          85.9375% {
            opacity:1
          }
          86.2500% {
            opacity:1
          }
          86.5625% {
            opacity:1
          }
          86.8750% {
            opacity:1
          }
          87.1875% {
            opacity:1
          }
          87.5000% {
            opacity:1
          }
          87.8125% {
            opacity:1
          }
          88.1250% {
            opacity:1
          }
          88.4375% {
            opacity:1
          }
          88.7500% {
            opacity:1
          }
          89.0625% {
            opacity:1
          }
          89.3750% {
            opacity:1
          }
          89.6875% {
            opacity:1
          }
          90.0000% {
            opacity:1
          }
          90.3125% {
            opacity:1
          }
          90.6250% {
            opacity:1
          }
          90.9375% {
            opacity:1
          }
          91.2500% {
            opacity:1
          }
          91.5625% {
            opacity:1
          }
          91.8750% {
            opacity:1
          }
          92.1875% {
            opacity:1
          }
          92.5000% {
            opacity:1
          }
          92.8125% {
            opacity:1
          }
          93.1250% {
            opacity:1
          }
          93.4375% {
            opacity:1
          }
          93.7500% {
            opacity:1
          }
          94.0625% {
            opacity:1
          }
          94.3750% {
            opacity:1
          }
          94.6875% {
            opacity:1
          }
          95.0000% {
            opacity:1
          }
          95.3125% {
            opacity:1
          }
          95.6250% {
            opacity:1
          }
          95.9375% {
            opacity:1
          }
          96.2500% {
            opacity:1
          }
          96.5625% {
            opacity:1
          }
          96.8750% {
            opacity:1
          }
          97.1875% {
            opacity:1
          }
          97.5000% {
            opacity:1
          }
          97.8125% {
            opacity:1
          }
          98.1250% {
            opacity:1
          }
          98.4375% {
            opacity:1
          }
          98.7500% {
            opacity:1
          }
          99.0625% {
            opacity:1
          }
          99.3750% {
            opacity:1
          }
          99.6875% {
            opacity:1
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes overturn-fleck-6 {
          0.0000% {
            transform:translate(22px,79px);
            opacity:0
          }
          0.3125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          0.6250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          0.9375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          1.2500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          1.5625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          1.8750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          2.1875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          2.5000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          2.8125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          3.1250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          3.4375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          3.7500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          4.0625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          4.3750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          4.6875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          5.0000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          5.3125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          5.6250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          5.9375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          6.2500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          6.5625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          6.8750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          7.1875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          7.5000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          7.8125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          8.1250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          8.4375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          8.7500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          9.0625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          9.3750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          9.6875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          10.0000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          10.3125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          10.6250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          10.9375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          11.2500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          11.5625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          11.8750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          12.1875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          12.5000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          12.8125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          13.1250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          13.4375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          13.7500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          14.0625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          14.3750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          14.6875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          15.0000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          15.3125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          15.6250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          15.9375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          16.2500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          16.5625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          16.8750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          17.1875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          17.5000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          17.8125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          18.1250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          18.4375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          18.7500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          19.0625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          19.3750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          19.6875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          20.0000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          20.3125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          20.6250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          20.9375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          21.2500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          21.5625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          21.8750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          22.1875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          22.5000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          22.8125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          23.1250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          23.4375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          23.7500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          24.0625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          24.3750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          24.6875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          25.0000% {
            transform:translate(70px,44px);
            opacity:0
          }
          25.3125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          25.6250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          25.9375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          26.2500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          26.5625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          26.8750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          27.1875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          27.5000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          27.8125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          28.1250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          28.4375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          28.7500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          29.0625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          29.3750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          29.6875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          30.0000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          30.3125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          30.6250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          30.9375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          31.2500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          31.5625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          31.8750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          32.1875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          32.5000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          32.8125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          33.1250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          33.4375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          33.7500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          34.0625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          34.3750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          34.6875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          35.0000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          35.3125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          35.6250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          35.9375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          36.2500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          36.5625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          36.8750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          37.1875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          37.5000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          37.8125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          38.1250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          38.4375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          38.7500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          39.0625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          39.3750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          39.6875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          40.0000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          40.3125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          40.6250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          40.9375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          41.2500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          41.5625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          41.8750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          42.1875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          42.5000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          42.8125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          43.1250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          43.4375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          43.7500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          44.0625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          44.3750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          44.6875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          45.0000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          45.3125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          45.6250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          45.9375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          46.2500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          46.5625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          46.8750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          47.1875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          47.5000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          47.8125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          48.1250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          48.4375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          48.7500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          49.0625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          49.3750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          49.6875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          50.0000% {
            transform:translate(118px,79px);
            opacity:0
          }
          50.3125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          50.6250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          50.9375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          51.2500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          51.5625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          51.8750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          52.1875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          52.5000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          52.8125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          53.1250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          53.4375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          53.7500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          54.0625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          54.3750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          54.6875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          55.0000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          55.3125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          55.6250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          55.9375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          56.2500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          56.5625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          56.8750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          57.1875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          57.5000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          57.8125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          58.1250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          58.4375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          58.7500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          59.0625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          59.3750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          59.6875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          60.0000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          60.3125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          60.6250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          60.9375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          61.2500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          61.5625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          61.8750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          62.1875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          62.5000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          62.8125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          63.1250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          63.4375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          63.7500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          64.0625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          64.3750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          64.6875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          65.0000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          65.3125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          65.6250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          65.9375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          66.2500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          66.5625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          66.8750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          67.1875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          67.5000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          67.8125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          68.1250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          68.4375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          68.7500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          69.0625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          69.3750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          69.6875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          70.0000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          70.3125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          70.6250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          70.9375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          71.2500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          71.5625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          71.8750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          72.1875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          72.5000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          72.8125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          73.1250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          73.4375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          73.7500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          74.0625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          74.3750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          74.6875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          75.0000% {
            transform:translate(70px,109px);
            opacity:0
          }
          75.3125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          75.6250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          75.9375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          76.2500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          76.5625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          76.8750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          77.1875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          77.5000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          77.8125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          78.1250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          78.4375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          78.7500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          79.0625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          79.3750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          79.6875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          80.0000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          80.3125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          80.6250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          80.9375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          81.2500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          81.5625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          81.8750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          82.1875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          82.5000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          82.8125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          83.1250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          83.4375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          83.7500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          84.0625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          84.3750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          84.6875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          85.0000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          85.3125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          85.6250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          85.9375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          86.2500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          86.5625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          86.8750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          87.1875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          87.5000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          87.8125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          88.1250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          88.4375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          88.7500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          89.0625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          89.3750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          89.6875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          90.0000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          90.3125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          90.6250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          90.9375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          91.2500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          91.5625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          91.8750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          92.1875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          92.5000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          92.8125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          93.1250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          93.4375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          93.7500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          94.0625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          94.3750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          94.6875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          95.0000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          95.3125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          95.6250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          95.9375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          96.2500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          96.5625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          96.8750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          97.1875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          97.5000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          97.8125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          98.1250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          98.4375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          98.7500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          99.0625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          99.3750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          99.6875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          100.0000% {
            transform:translate(22px,79px);
            opacity:0
          }
        }
        .parcel-7 {
          animation:overturn-parcel-7 16s linear infinite
        }
        .color-7 {
          animation:overturn-color-7 16s linear infinite
        }
        .mark-7 {
          animation:overturn-mark-7 16s linear infinite
        }
        .fleck-7 {
          animation:overturn-fleck-7 16s linear infinite
        }
        @keyframes overturn-parcel-7 {
          0.0000% {
            transform:translate(36.059px,57.787px)
          }
          0.3125% {
            transform:translate(36.732px,57.374px)
          }
          0.6250% {
            transform:translate(37.418px,56.97px)
          }
          0.9375% {
            transform:translate(38.116px,56.575px)
          }
          1.2500% {
            transform:translate(38.826px,56.188px)
          }
          1.5625% {
            transform:translate(39.549px,55.81px)
          }
          1.8750% {
            transform:translate(40.283px,55.44px)
          }
          2.1875% {
            transform:translate(41.029px,55.08px)
          }
          2.5000% {
            transform:translate(41.786px,54.729px)
          }
          2.8125% {
            transform:translate(42.554px,54.388px)
          }
          3.1250% {
            transform:translate(43.333px,54.056px)
          }
          3.4375% {
            transform:translate(44.121px,53.733px)
          }
          3.7500% {
            transform:translate(44.92px,53.421px)
          }
          4.0625% {
            transform:translate(45.728px,53.118px)
          }
          4.3750% {
            transform:translate(46.546px,52.825px)
          }
          4.6875% {
            transform:translate(47.373px,52.542px)
          }
          5.0000% {
            transform:translate(48.208px,52.27px)
          }
          5.3125% {
            transform:translate(49.052px,52.008px)
          }
          5.6250% {
            transform:translate(49.904px,51.756px)
          }
          5.9375% {
            transform:translate(50.764px,51.514px)
          }
          6.2500% {
            transform:translate(51.631px,51.284px)
          }
          6.5625% {
            transform:translate(52.505px,51.064px)
          }
          6.8750% {
            transform:translate(53.386px,50.854px)
          }
          7.1875% {
            transform:translate(54.274px,50.656px)
          }
          7.5000% {
            transform:translate(55.167px,50.468px)
          }
          7.8125% {
            transform:translate(56.066px,50.292px)
          }
          8.1250% {
            transform:translate(56.971px,50.126px)
          }
          8.4375% {
            transform:translate(57.88px,49.972px)
          }
          8.7500% {
            transform:translate(58.795px,49.829px)
          }
          9.0625% {
            transform:translate(59.713px,49.697px)
          }
          9.3750% {
            transform:translate(60.636px,49.576px)
          }
          9.6875% {
            transform:translate(61.562px,49.467px)
          }
          10.0000% {
            transform:translate(62.491px,49.369px)
          }
          10.3125% {
            transform:translate(63.423px,49.283px)
          }
          10.6250% {
            transform:translate(64.358px,49.208px)
          }
          10.9375% {
            transform:translate(65.295px,49.144px)
          }
          11.2500% {
            transform:translate(66.234px,49.092px)
          }
          11.5625% {
            transform:translate(67.174px,49.052px)
          }
          11.8750% {
            transform:translate(68.116px,49.023px)
          }
          12.1875% {
            transform:translate(69.058px,49.006px)
          }
          12.5000% {
            transform:translate(70px,49px)
          }
          12.8125% {
            transform:translate(70.942px,49.006px)
          }
          13.1250% {
            transform:translate(71.884px,49.023px)
          }
          13.4375% {
            transform:translate(72.826px,49.052px)
          }
          13.7500% {
            transform:translate(73.766px,49.092px)
          }
          14.0625% {
            transform:translate(74.705px,49.144px)
          }
          14.3750% {
            transform:translate(75.642px,49.208px)
          }
          14.6875% {
            transform:translate(76.577px,49.283px)
          }
          15.0000% {
            transform:translate(77.509px,49.369px)
          }
          15.3125% {
            transform:translate(78.438px,49.467px)
          }
          15.6250% {
            transform:translate(79.364px,49.576px)
          }
          15.9375% {
            transform:translate(80.287px,49.697px)
          }
          16.2500% {
            transform:translate(81.205px,49.829px)
          }
          16.5625% {
            transform:translate(82.12px,49.972px)
          }
          16.8750% {
            transform:translate(83.029px,50.126px)
          }
          17.1875% {
            transform:translate(83.934px,50.292px)
          }
          17.5000% {
            transform:translate(84.833px,50.468px)
          }
          17.8125% {
            transform:translate(85.726px,50.656px)
          }
          18.1250% {
            transform:translate(86.614px,50.854px)
          }
          18.4375% {
            transform:translate(87.495px,51.064px)
          }
          18.7500% {
            transform:translate(88.369px,51.284px)
          }
          19.0625% {
            transform:translate(89.236px,51.514px)
          }
          19.3750% {
            transform:translate(90.096px,51.756px)
          }
          19.6875% {
            transform:translate(90.948px,52.008px)
          }
          20.0000% {
            transform:translate(91.792px,52.27px)
          }
          20.3125% {
            transform:translate(92.627px,52.542px)
          }
          20.6250% {
            transform:translate(93.454px,52.825px)
          }
          20.9375% {
            transform:translate(94.272px,53.118px)
          }
          21.2500% {
            transform:translate(95.08px,53.421px)
          }
          21.5625% {
            transform:translate(95.879px,53.733px)
          }
          21.8750% {
            transform:translate(96.667px,54.056px)
          }
          22.1875% {
            transform:translate(97.446px,54.388px)
          }
          22.5000% {
            transform:translate(98.214px,54.729px)
          }
          22.8125% {
            transform:translate(98.971px,55.08px)
          }
          23.1250% {
            transform:translate(99.717px,55.44px)
          }
          23.4375% {
            transform:translate(100.451px,55.81px)
          }
          23.7500% {
            transform:translate(101.174px,56.188px)
          }
          24.0625% {
            transform:translate(101.884px,56.575px)
          }
          24.3750% {
            transform:translate(102.582px,56.97px)
          }
          24.6875% {
            transform:translate(103.268px,57.374px)
          }
          25.0000% {
            transform:translate(103.941px,57.787px)
          }
          25.3125% {
            transform:translate(104.601px,58.207px)
          }
          25.6250% {
            transform:translate(105.247px,58.636px)
          }
          25.9375% {
            transform:translate(105.88px,59.072px)
          }
          26.2500% {
            transform:translate(106.499px,59.517px)
          }
          26.5625% {
            transform:translate(107.105px,59.968px)
          }
          26.8750% {
            transform:translate(107.695px,60.427px)
          }
          27.1875% {
            transform:translate(108.271px,60.893px)
          }
          27.5000% {
            transform:translate(108.833px,61.366px)
          }
          27.8125% {
            transform:translate(109.379px,61.846px)
          }
          28.1250% {
            transform:translate(109.911px,62.333px)
          }
          28.4375% {
            transform:translate(110.426px,62.826px)
          }
          28.7500% {
            transform:translate(110.927px,63.325px)
          }
          29.0625% {
            transform:translate(111.411px,63.83px)
          }
          29.3750% {
            transform:translate(111.88px,64.341px)
          }
          29.6875% {
            transform:translate(112.332px,64.858px)
          }
          30.0000% {
            transform:translate(112.768px,65.38px)
          }
          30.3125% {
            transform:translate(113.188px,65.908px)
          }
          30.6250% {
            transform:translate(113.591px,66.44px)
          }
          30.9375% {
            transform:translate(113.977px,66.978px)
          }
          31.2500% {
            transform:translate(114.346px,67.519px)
          }
          31.5625% {
            transform:translate(114.698px,68.066px)
          }
          31.8750% {
            transform:translate(115.033px,68.616px)
          }
          32.1875% {
            transform:translate(115.351px,69.171px)
          }
          32.5000% {
            transform:translate(115.651px,69.729px)
          }
          32.8125% {
            transform:translate(115.933px,70.291px)
          }
          33.1250% {
            transform:translate(116.198px,70.857px)
          }
          33.4375% {
            transform:translate(116.445px,71.425px)
          }
          33.7500% {
            transform:translate(116.674px,71.997px)
          }
          34.0625% {
            transform:translate(116.885px,72.571px)
          }
          34.3750% {
            transform:translate(117.078px,73.147px)
          }
          34.6875% {
            transform:translate(117.252px,73.726px)
          }
          35.0000% {
            transform:translate(117.409px,74.307px)
          }
          35.3125% {
            transform:translate(117.547px,74.89px)
          }
          35.6250% {
            transform:translate(117.667px,75.474px)
          }
          35.9375% {
            transform:translate(117.769px,76.059px)
          }
          36.2500% {
            transform:translate(117.852px,76.646px)
          }
          36.5625% {
            transform:translate(117.917px,77.234px)
          }
          36.8750% {
            transform:translate(117.963px,77.822px)
          }
          37.1875% {
            transform:translate(117.991px,78.411px)
          }
          37.5000% {
            transform:translate(118px,79px)
          }
          37.8125% {
            transform:translate(117.991px,79.589px)
          }
          38.1250% {
            transform:translate(117.963px,80.178px)
          }
          38.4375% {
            transform:translate(117.917px,80.766px)
          }
          38.7500% {
            transform:translate(117.852px,81.354px)
          }
          39.0625% {
            transform:translate(117.769px,81.941px)
          }
          39.3750% {
            transform:translate(117.667px,82.526px)
          }
          39.6875% {
            transform:translate(117.547px,83.11px)
          }
          40.0000% {
            transform:translate(117.409px,83.693px)
          }
          40.3125% {
            transform:translate(117.252px,84.274px)
          }
          40.6250% {
            transform:translate(117.078px,84.853px)
          }
          40.9375% {
            transform:translate(116.885px,85.429px)
          }
          41.2500% {
            transform:translate(116.674px,86.003px)
          }
          41.5625% {
            transform:translate(116.445px,86.575px)
          }
          41.8750% {
            transform:translate(116.198px,87.143px)
          }
          42.1875% {
            transform:translate(115.933px,87.709px)
          }
          42.5000% {
            transform:translate(115.651px,88.271px)
          }
          42.8125% {
            transform:translate(115.351px,88.829px)
          }
          43.1250% {
            transform:translate(115.033px,89.384px)
          }
          43.4375% {
            transform:translate(114.698px,89.934px)
          }
          43.7500% {
            transform:translate(114.346px,90.481px)
          }
          44.0625% {
            transform:translate(113.977px,91.022px)
          }
          44.3750% {
            transform:translate(113.591px,91.56px)
          }
          44.6875% {
            transform:translate(113.188px,92.092px)
          }
          45.0000% {
            transform:translate(112.768px,92.62px)
          }
          45.3125% {
            transform:translate(112.332px,93.142px)
          }
          45.6250% {
            transform:translate(111.88px,93.659px)
          }
          45.9375% {
            transform:translate(111.411px,94.17px)
          }
          46.2500% {
            transform:translate(110.927px,94.675px)
          }
          46.5625% {
            transform:translate(110.426px,95.174px)
          }
          46.8750% {
            transform:translate(109.911px,95.667px)
          }
          47.1875% {
            transform:translate(109.379px,96.154px)
          }
          47.5000% {
            transform:translate(108.833px,96.634px)
          }
          47.8125% {
            transform:translate(108.271px,97.107px)
          }
          48.1250% {
            transform:translate(107.695px,97.573px)
          }
          48.4375% {
            transform:translate(107.105px,98.032px)
          }
          48.7500% {
            transform:translate(106.499px,98.483px)
          }
          49.0625% {
            transform:translate(105.88px,98.928px)
          }
          49.3750% {
            transform:translate(105.247px,99.364px)
          }
          49.6875% {
            transform:translate(104.601px,99.793px)
          }
          50.0000% {
            transform:translate(103.941px,100.213px)
          }
          50.3125% {
            transform:translate(103.268px,100.626px)
          }
          50.6250% {
            transform:translate(102.582px,101.03px)
          }
          50.9375% {
            transform:translate(101.884px,101.425px)
          }
          51.2500% {
            transform:translate(101.174px,101.812px)
          }
          51.5625% {
            transform:translate(100.451px,102.19px)
          }
          51.8750% {
            transform:translate(99.717px,102.56px)
          }
          52.1875% {
            transform:translate(98.971px,102.92px)
          }
          52.5000% {
            transform:translate(98.214px,103.271px)
          }
          52.8125% {
            transform:translate(97.446px,103.612px)
          }
          53.1250% {
            transform:translate(96.667px,103.944px)
          }
          53.4375% {
            transform:translate(95.879px,104.267px)
          }
          53.7500% {
            transform:translate(95.08px,104.579px)
          }
          54.0625% {
            transform:translate(94.272px,104.882px)
          }
          54.3750% {
            transform:translate(93.454px,105.175px)
          }
          54.6875% {
            transform:translate(92.627px,105.458px)
          }
          55.0000% {
            transform:translate(91.792px,105.73px)
          }
          55.3125% {
            transform:translate(90.948px,105.992px)
          }
          55.6250% {
            transform:translate(90.096px,106.244px)
          }
          55.9375% {
            transform:translate(89.236px,106.486px)
          }
          56.2500% {
            transform:translate(88.369px,106.716px)
          }
          56.5625% {
            transform:translate(87.495px,106.936px)
          }
          56.8750% {
            transform:translate(86.614px,107.146px)
          }
          57.1875% {
            transform:translate(85.726px,107.344px)
          }
          57.5000% {
            transform:translate(84.833px,107.532px)
          }
          57.8125% {
            transform:translate(83.934px,107.708px)
          }
          58.1250% {
            transform:translate(83.029px,107.874px)
          }
          58.4375% {
            transform:translate(82.12px,108.028px)
          }
          58.7500% {
            transform:translate(81.205px,108.171px)
          }
          59.0625% {
            transform:translate(80.287px,108.303px)
          }
          59.3750% {
            transform:translate(79.364px,108.424px)
          }
          59.6875% {
            transform:translate(78.438px,108.533px)
          }
          60.0000% {
            transform:translate(77.509px,108.631px)
          }
          60.3125% {
            transform:translate(76.577px,108.717px)
          }
          60.6250% {
            transform:translate(75.642px,108.792px)
          }
          60.9375% {
            transform:translate(74.705px,108.856px)
          }
          61.2500% {
            transform:translate(73.766px,108.908px)
          }
          61.5625% {
            transform:translate(72.826px,108.948px)
          }
          61.8750% {
            transform:translate(71.884px,108.977px)
          }
          62.1875% {
            transform:translate(70.942px,108.994px)
          }
          62.5000% {
            transform:translate(70px,109px)
          }
          62.8125% {
            transform:translate(69.058px,108.994px)
          }
          63.1250% {
            transform:translate(68.116px,108.977px)
          }
          63.4375% {
            transform:translate(67.174px,108.948px)
          }
          63.7500% {
            transform:translate(66.234px,108.908px)
          }
          64.0625% {
            transform:translate(65.295px,108.856px)
          }
          64.3750% {
            transform:translate(64.358px,108.792px)
          }
          64.6875% {
            transform:translate(63.423px,108.717px)
          }
          65.0000% {
            transform:translate(62.491px,108.631px)
          }
          65.3125% {
            transform:translate(61.562px,108.533px)
          }
          65.6250% {
            transform:translate(60.636px,108.424px)
          }
          65.9375% {
            transform:translate(59.713px,108.303px)
          }
          66.2500% {
            transform:translate(58.795px,108.171px)
          }
          66.5625% {
            transform:translate(57.88px,108.028px)
          }
          66.8750% {
            transform:translate(56.971px,107.874px)
          }
          67.1875% {
            transform:translate(56.066px,107.708px)
          }
          67.5000% {
            transform:translate(55.167px,107.532px)
          }
          67.8125% {
            transform:translate(54.274px,107.344px)
          }
          68.1250% {
            transform:translate(53.386px,107.146px)
          }
          68.4375% {
            transform:translate(52.505px,106.936px)
          }
          68.7500% {
            transform:translate(51.631px,106.716px)
          }
          69.0625% {
            transform:translate(50.764px,106.486px)
          }
          69.3750% {
            transform:translate(49.904px,106.244px)
          }
          69.6875% {
            transform:translate(49.052px,105.992px)
          }
          70.0000% {
            transform:translate(48.208px,105.73px)
          }
          70.3125% {
            transform:translate(47.373px,105.458px)
          }
          70.6250% {
            transform:translate(46.546px,105.175px)
          }
          70.9375% {
            transform:translate(45.728px,104.882px)
          }
          71.2500% {
            transform:translate(44.92px,104.579px)
          }
          71.5625% {
            transform:translate(44.121px,104.267px)
          }
          71.8750% {
            transform:translate(43.333px,103.944px)
          }
          72.1875% {
            transform:translate(42.554px,103.612px)
          }
          72.5000% {
            transform:translate(41.786px,103.271px)
          }
          72.8125% {
            transform:translate(41.029px,102.92px)
          }
          73.1250% {
            transform:translate(40.283px,102.56px)
          }
          73.4375% {
            transform:translate(39.549px,102.19px)
          }
          73.7500% {
            transform:translate(38.826px,101.812px)
          }
          74.0625% {
            transform:translate(38.116px,101.425px)
          }
          74.3750% {
            transform:translate(37.418px,101.03px)
          }
          74.6875% {
            transform:translate(36.732px,100.626px)
          }
          75.0000% {
            transform:translate(36.059px,100.213px)
          }
          75.3125% {
            transform:translate(35.399px,99.793px)
          }
          75.6250% {
            transform:translate(34.753px,99.364px)
          }
          75.9375% {
            transform:translate(34.12px,98.928px)
          }
          76.2500% {
            transform:translate(33.501px,98.483px)
          }
          76.5625% {
            transform:translate(32.895px,98.032px)
          }
          76.8750% {
            transform:translate(32.305px,97.573px)
          }
          77.1875% {
            transform:translate(31.729px,97.107px)
          }
          77.5000% {
            transform:translate(31.167px,96.634px)
          }
          77.8125% {
            transform:translate(30.621px,96.154px)
          }
          78.1250% {
            transform:translate(30.089px,95.667px)
          }
          78.4375% {
            transform:translate(29.574px,95.174px)
          }
          78.7500% {
            transform:translate(29.073px,94.675px)
          }
          79.0625% {
            transform:translate(28.589px,94.17px)
          }
          79.3750% {
            transform:translate(28.12px,93.659px)
          }
          79.6875% {
            transform:translate(27.668px,93.142px)
          }
          80.0000% {
            transform:translate(27.232px,92.62px)
          }
          80.3125% {
            transform:translate(26.812px,92.092px)
          }
          80.6250% {
            transform:translate(26.409px,91.56px)
          }
          80.9375% {
            transform:translate(26.023px,91.022px)
          }
          81.2500% {
            transform:translate(25.654px,90.481px)
          }
          81.5625% {
            transform:translate(25.302px,89.934px)
          }
          81.8750% {
            transform:translate(24.967px,89.384px)
          }
          82.1875% {
            transform:translate(24.649px,88.829px)
          }
          82.5000% {
            transform:translate(24.349px,88.271px)
          }
          82.8125% {
            transform:translate(24.067px,87.709px)
          }
          83.1250% {
            transform:translate(23.802px,87.143px)
          }
          83.4375% {
            transform:translate(23.555px,86.575px)
          }
          83.7500% {
            transform:translate(23.326px,86.003px)
          }
          84.0625% {
            transform:translate(23.115px,85.429px)
          }
          84.3750% {
            transform:translate(22.922px,84.853px)
          }
          84.6875% {
            transform:translate(22.748px,84.274px)
          }
          85.0000% {
            transform:translate(22.591px,83.693px)
          }
          85.3125% {
            transform:translate(22.453px,83.11px)
          }
          85.6250% {
            transform:translate(22.333px,82.526px)
          }
          85.9375% {
            transform:translate(22.231px,81.941px)
          }
          86.2500% {
            transform:translate(22.148px,81.354px)
          }
          86.5625% {
            transform:translate(22.083px,80.766px)
          }
          86.8750% {
            transform:translate(22.037px,80.178px)
          }
          87.1875% {
            transform:translate(22.009px,79.589px)
          }
          87.5000% {
            transform:translate(22px,79px)
          }
          87.8125% {
            transform:translate(22.009px,78.411px)
          }
          88.1250% {
            transform:translate(22.037px,77.822px)
          }
          88.4375% {
            transform:translate(22.083px,77.234px)
          }
          88.7500% {
            transform:translate(22.148px,76.646px)
          }
          89.0625% {
            transform:translate(22.231px,76.059px)
          }
          89.3750% {
            transform:translate(22.333px,75.474px)
          }
          89.6875% {
            transform:translate(22.453px,74.89px)
          }
          90.0000% {
            transform:translate(22.591px,74.307px)
          }
          90.3125% {
            transform:translate(22.748px,73.726px)
          }
          90.6250% {
            transform:translate(22.922px,73.147px)
          }
          90.9375% {
            transform:translate(23.115px,72.571px)
          }
          91.2500% {
            transform:translate(23.326px,71.997px)
          }
          91.5625% {
            transform:translate(23.555px,71.425px)
          }
          91.8750% {
            transform:translate(23.802px,70.857px)
          }
          92.1875% {
            transform:translate(24.067px,70.291px)
          }
          92.5000% {
            transform:translate(24.349px,69.729px)
          }
          92.8125% {
            transform:translate(24.649px,69.171px)
          }
          93.1250% {
            transform:translate(24.967px,68.616px)
          }
          93.4375% {
            transform:translate(25.302px,68.066px)
          }
          93.7500% {
            transform:translate(25.654px,67.519px)
          }
          94.0625% {
            transform:translate(26.023px,66.978px)
          }
          94.3750% {
            transform:translate(26.409px,66.44px)
          }
          94.6875% {
            transform:translate(26.812px,65.908px)
          }
          95.0000% {
            transform:translate(27.232px,65.38px)
          }
          95.3125% {
            transform:translate(27.668px,64.858px)
          }
          95.6250% {
            transform:translate(28.12px,64.341px)
          }
          95.9375% {
            transform:translate(28.589px,63.83px)
          }
          96.2500% {
            transform:translate(29.073px,63.325px)
          }
          96.5625% {
            transform:translate(29.574px,62.826px)
          }
          96.8750% {
            transform:translate(30.089px,62.333px)
          }
          97.1875% {
            transform:translate(30.621px,61.846px)
          }
          97.5000% {
            transform:translate(31.167px,61.366px)
          }
          97.8125% {
            transform:translate(31.729px,60.893px)
          }
          98.1250% {
            transform:translate(32.305px,60.427px)
          }
          98.4375% {
            transform:translate(32.895px,59.968px)
          }
          98.7500% {
            transform:translate(33.501px,59.517px)
          }
          99.0625% {
            transform:translate(34.12px,59.072px)
          }
          99.3750% {
            transform:translate(34.753px,58.636px)
          }
          99.6875% {
            transform:translate(35.399px,58.207px)
          }
          100.0000% {
            transform:translate(36.059px,57.787px)
          }
        }
        @keyframes overturn-color-7 {
          0.0000% {
            fill:rgb(181 201 179)
          }
          0.3125% {
            fill:rgb(183 201 177)
          }
          0.6250% {
            fill:rgb(186 201 175)
          }
          0.9375% {
            fill:rgb(188 201 172)
          }
          1.2500% {
            fill:rgb(190 201 170)
          }
          1.5625% {
            fill:rgb(193 201 168)
          }
          1.8750% {
            fill:rgb(195 201 166)
          }
          2.1875% {
            fill:rgb(197 201 163)
          }
          2.5000% {
            fill:rgb(199 201 161)
          }
          2.8125% {
            fill:rgb(202 201 159)
          }
          3.1250% {
            fill:rgb(204 201 157)
          }
          3.4375% {
            fill:rgb(206 201 155)
          }
          3.7500% {
            fill:rgb(208 201 153)
          }
          4.0625% {
            fill:rgb(210 201 151)
          }
          4.3750% {
            fill:rgb(212 201 149)
          }
          4.6875% {
            fill:rgb(214 201 147)
          }
          5.0000% {
            fill:rgb(216 201 145)
          }
          5.3125% {
            fill:rgb(218 201 143)
          }
          5.6250% {
            fill:rgb(220 201 141)
          }
          5.9375% {
            fill:rgb(222 201 139)
          }
          6.2500% {
            fill:rgb(224 201 138)
          }
          6.5625% {
            fill:rgb(225 201 136)
          }
          6.8750% {
            fill:rgb(227 201 134)
          }
          7.1875% {
            fill:rgb(229 201 133)
          }
          7.5000% {
            fill:rgb(230 201 131)
          }
          7.8125% {
            fill:rgb(232 201 130)
          }
          8.1250% {
            fill:rgb(233 201 129)
          }
          8.4375% {
            fill:rgb(234 201 127)
          }
          8.7500% {
            fill:rgb(235 201 126)
          }
          9.0625% {
            fill:rgb(237 201 125)
          }
          9.3750% {
            fill:rgb(238 201 124)
          }
          9.6875% {
            fill:rgb(239 201 123)
          }
          10.0000% {
            fill:rgb(240 201 122)
          }
          10.3125% {
            fill:rgb(240 201 122)
          }
          10.6250% {
            fill:rgb(241 201 121)
          }
          10.9375% {
            fill:rgb(242 201 120)
          }
          11.2500% {
            fill:rgb(242 201 120)
          }
          11.5625% {
            fill:rgb(242 201 119)
          }
          11.8750% {
            fill:rgb(243 201 119)
          }
          12.1875% {
            fill:rgb(243 201 119)
          }
          12.5000% {
            fill:rgb(243 201 119)
          }
          12.8125% {
            fill:rgb(243 201 119)
          }
          13.1250% {
            fill:rgb(243 201 119)
          }
          13.4375% {
            fill:rgb(243 201 119)
          }
          13.7500% {
            fill:rgb(243 201 119)
          }
          14.0625% {
            fill:rgb(243 201 119)
          }
          14.3750% {
            fill:rgb(243 201 119)
          }
          14.6875% {
            fill:rgb(243 201 119)
          }
          15.0000% {
            fill:rgb(243 201 119)
          }
          15.3125% {
            fill:rgb(243 201 119)
          }
          15.6250% {
            fill:rgb(243 201 119)
          }
          15.9375% {
            fill:rgb(243 201 119)
          }
          16.2500% {
            fill:rgb(243 201 119)
          }
          16.5625% {
            fill:rgb(243 201 119)
          }
          16.8750% {
            fill:rgb(243 201 119)
          }
          17.1875% {
            fill:rgb(243 201 119)
          }
          17.5000% {
            fill:rgb(243 201 119)
          }
          17.8125% {
            fill:rgb(243 201 119)
          }
          18.1250% {
            fill:rgb(243 201 119)
          }
          18.4375% {
            fill:rgb(243 201 119)
          }
          18.7500% {
            fill:rgb(243 201 119)
          }
          19.0625% {
            fill:rgb(243 201 119)
          }
          19.3750% {
            fill:rgb(243 201 119)
          }
          19.6875% {
            fill:rgb(243 201 119)
          }
          20.0000% {
            fill:rgb(243 201 119)
          }
          20.3125% {
            fill:rgb(243 201 119)
          }
          20.6250% {
            fill:rgb(243 201 119)
          }
          20.9375% {
            fill:rgb(243 201 119)
          }
          21.2500% {
            fill:rgb(243 201 119)
          }
          21.5625% {
            fill:rgb(242 201 120)
          }
          21.8750% {
            fill:rgb(242 201 120)
          }
          22.1875% {
            fill:rgb(241 201 121)
          }
          22.5000% {
            fill:rgb(240 201 122)
          }
          22.8125% {
            fill:rgb(238 201 124)
          }
          23.1250% {
            fill:rgb(237 201 125)
          }
          23.4375% {
            fill:rgb(235 201 127)
          }
          23.7500% {
            fill:rgb(233 201 129)
          }
          24.0625% {
            fill:rgb(231 201 131)
          }
          24.3750% {
            fill:rgb(229 201 133)
          }
          24.6875% {
            fill:rgb(226 201 135)
          }
          25.0000% {
            fill:rgb(224 201 138)
          }
          25.3125% {
            fill:rgb(221 201 140)
          }
          25.6250% {
            fill:rgb(218 201 143)
          }
          25.9375% {
            fill:rgb(215 201 146)
          }
          26.2500% {
            fill:rgb(212 201 149)
          }
          26.5625% {
            fill:rgb(209 201 152)
          }
          26.8750% {
            fill:rgb(206 201 155)
          }
          27.1875% {
            fill:rgb(203 201 158)
          }
          27.5000% {
            fill:rgb(199 201 161)
          }
          27.8125% {
            fill:rgb(196 201 165)
          }
          28.1250% {
            fill:rgb(193 201 168)
          }
          28.4375% {
            fill:rgb(189 201 171)
          }
          28.7500% {
            fill:rgb(186 201 175)
          }
          29.0625% {
            fill:rgb(182 201 178)
          }
          29.3750% {
            fill:rgb(179 201 181)
          }
          29.6875% {
            fill:rgb(175 201 185)
          }
          30.0000% {
            fill:rgb(172 201 188)
          }
          30.3125% {
            fill:rgb(168 201 191)
          }
          30.6250% {
            fill:rgb(165 201 195)
          }
          30.9375% {
            fill:rgb(162 201 198)
          }
          31.2500% {
            fill:rgb(158 201 201)
          }
          31.5625% {
            fill:rgb(155 201 204)
          }
          31.8750% {
            fill:rgb(152 201 207)
          }
          32.1875% {
            fill:rgb(149 201 210)
          }
          32.5000% {
            fill:rgb(146 201 213)
          }
          32.8125% {
            fill:rgb(143 201 216)
          }
          33.1250% {
            fill:rgb(140 201 219)
          }
          33.4375% {
            fill:rgb(138 201 221)
          }
          33.7500% {
            fill:rgb(135 201 224)
          }
          34.0625% {
            fill:rgb(133 201 226)
          }
          34.3750% {
            fill:rgb(130 201 228)
          }
          34.6875% {
            fill:rgb(128 201 230)
          }
          35.0000% {
            fill:rgb(127 201 232)
          }
          35.3125% {
            fill:rgb(125 201 233)
          }
          35.6250% {
            fill:rgb(123 201 235)
          }
          35.9375% {
            fill:rgb(122 201 236)
          }
          36.2500% {
            fill:rgb(121 201 237)
          }
          36.5625% {
            fill:rgb(120 201 238)
          }
          36.8750% {
            fill:rgb(120 201 239)
          }
          37.1875% {
            fill:rgb(119 201 239)
          }
          37.5000% {
            fill:rgb(119 201 239)
          }
          37.8125% {
            fill:rgb(119 201 239)
          }
          38.1250% {
            fill:rgb(119 201 239)
          }
          38.4375% {
            fill:rgb(119 201 239)
          }
          38.7500% {
            fill:rgb(119 201 239)
          }
          39.0625% {
            fill:rgb(119 201 239)
          }
          39.3750% {
            fill:rgb(119 201 239)
          }
          39.6875% {
            fill:rgb(119 201 239)
          }
          40.0000% {
            fill:rgb(119 201 239)
          }
          40.3125% {
            fill:rgb(119 201 239)
          }
          40.6250% {
            fill:rgb(119 201 239)
          }
          40.9375% {
            fill:rgb(119 201 239)
          }
          41.2500% {
            fill:rgb(119 201 239)
          }
          41.5625% {
            fill:rgb(119 201 239)
          }
          41.8750% {
            fill:rgb(119 201 239)
          }
          42.1875% {
            fill:rgb(119 201 239)
          }
          42.5000% {
            fill:rgb(119 201 239)
          }
          42.8125% {
            fill:rgb(119 201 239)
          }
          43.1250% {
            fill:rgb(119 201 239)
          }
          43.4375% {
            fill:rgb(119 201 239)
          }
          43.7500% {
            fill:rgb(119 201 239)
          }
          44.0625% {
            fill:rgb(119 201 239)
          }
          44.3750% {
            fill:rgb(119 201 239)
          }
          44.6875% {
            fill:rgb(119 201 239)
          }
          45.0000% {
            fill:rgb(119 201 239)
          }
          45.3125% {
            fill:rgb(119 201 239)
          }
          45.6250% {
            fill:rgb(119 201 239)
          }
          45.9375% {
            fill:rgb(119 201 239)
          }
          46.2500% {
            fill:rgb(119 201 239)
          }
          46.5625% {
            fill:rgb(119 201 239)
          }
          46.8750% {
            fill:rgb(119 201 239)
          }
          47.1875% {
            fill:rgb(119 201 239)
          }
          47.5000% {
            fill:rgb(119 201 239)
          }
          47.8125% {
            fill:rgb(119 201 239)
          }
          48.1250% {
            fill:rgb(119 201 239)
          }
          48.4375% {
            fill:rgb(119 201 239)
          }
          48.7500% {
            fill:rgb(119 201 239)
          }
          49.0625% {
            fill:rgb(119 201 239)
          }
          49.3750% {
            fill:rgb(119 201 239)
          }
          49.6875% {
            fill:rgb(119 201 239)
          }
          50.0000% {
            fill:rgb(119 201 239)
          }
          50.3125% {
            fill:rgb(119 201 239)
          }
          50.6250% {
            fill:rgb(119 201 239)
          }
          50.9375% {
            fill:rgb(119 201 239)
          }
          51.2500% {
            fill:rgb(119 201 239)
          }
          51.5625% {
            fill:rgb(119 201 239)
          }
          51.8750% {
            fill:rgb(119 201 239)
          }
          52.1875% {
            fill:rgb(119 201 239)
          }
          52.5000% {
            fill:rgb(119 201 239)
          }
          52.8125% {
            fill:rgb(119 201 239)
          }
          53.1250% {
            fill:rgb(119 201 239)
          }
          53.4375% {
            fill:rgb(119 201 239)
          }
          53.7500% {
            fill:rgb(119 201 239)
          }
          54.0625% {
            fill:rgb(119 201 239)
          }
          54.3750% {
            fill:rgb(119 201 239)
          }
          54.6875% {
            fill:rgb(119 201 239)
          }
          55.0000% {
            fill:rgb(119 201 239)
          }
          55.3125% {
            fill:rgb(119 201 239)
          }
          55.6250% {
            fill:rgb(119 201 239)
          }
          55.9375% {
            fill:rgb(119 201 239)
          }
          56.2500% {
            fill:rgb(119 201 239)
          }
          56.5625% {
            fill:rgb(119 201 239)
          }
          56.8750% {
            fill:rgb(119 201 239)
          }
          57.1875% {
            fill:rgb(119 201 239)
          }
          57.5000% {
            fill:rgb(119 201 239)
          }
          57.8125% {
            fill:rgb(119 201 239)
          }
          58.1250% {
            fill:rgb(119 201 239)
          }
          58.4375% {
            fill:rgb(119 201 239)
          }
          58.7500% {
            fill:rgb(119 201 239)
          }
          59.0625% {
            fill:rgb(119 201 239)
          }
          59.3750% {
            fill:rgb(119 201 239)
          }
          59.6875% {
            fill:rgb(119 201 239)
          }
          60.0000% {
            fill:rgb(119 201 239)
          }
          60.3125% {
            fill:rgb(119 201 239)
          }
          60.6250% {
            fill:rgb(119 201 239)
          }
          60.9375% {
            fill:rgb(119 201 239)
          }
          61.2500% {
            fill:rgb(119 201 239)
          }
          61.5625% {
            fill:rgb(119 201 239)
          }
          61.8750% {
            fill:rgb(119 201 239)
          }
          62.1875% {
            fill:rgb(119 201 239)
          }
          62.5000% {
            fill:rgb(119 201 239)
          }
          62.8125% {
            fill:rgb(119 201 239)
          }
          63.1250% {
            fill:rgb(119 201 239)
          }
          63.4375% {
            fill:rgb(119 201 239)
          }
          63.7500% {
            fill:rgb(119 201 239)
          }
          64.0625% {
            fill:rgb(119 201 239)
          }
          64.3750% {
            fill:rgb(119 201 239)
          }
          64.6875% {
            fill:rgb(119 201 239)
          }
          65.0000% {
            fill:rgb(119 201 239)
          }
          65.3125% {
            fill:rgb(119 201 239)
          }
          65.6250% {
            fill:rgb(119 201 239)
          }
          65.9375% {
            fill:rgb(119 201 239)
          }
          66.2500% {
            fill:rgb(119 201 239)
          }
          66.5625% {
            fill:rgb(119 201 239)
          }
          66.8750% {
            fill:rgb(119 201 239)
          }
          67.1875% {
            fill:rgb(119 201 239)
          }
          67.5000% {
            fill:rgb(119 201 239)
          }
          67.8125% {
            fill:rgb(119 201 239)
          }
          68.1250% {
            fill:rgb(119 201 239)
          }
          68.4375% {
            fill:rgb(119 201 239)
          }
          68.7500% {
            fill:rgb(119 201 239)
          }
          69.0625% {
            fill:rgb(119 201 239)
          }
          69.3750% {
            fill:rgb(119 201 239)
          }
          69.6875% {
            fill:rgb(119 201 239)
          }
          70.0000% {
            fill:rgb(119 201 239)
          }
          70.3125% {
            fill:rgb(119 201 239)
          }
          70.6250% {
            fill:rgb(119 201 239)
          }
          70.9375% {
            fill:rgb(119 201 239)
          }
          71.2500% {
            fill:rgb(119 201 239)
          }
          71.5625% {
            fill:rgb(119 201 239)
          }
          71.8750% {
            fill:rgb(119 201 239)
          }
          72.1875% {
            fill:rgb(119 201 239)
          }
          72.5000% {
            fill:rgb(119 201 239)
          }
          72.8125% {
            fill:rgb(119 201 239)
          }
          73.1250% {
            fill:rgb(119 201 239)
          }
          73.4375% {
            fill:rgb(119 201 239)
          }
          73.7500% {
            fill:rgb(119 201 239)
          }
          74.0625% {
            fill:rgb(119 201 239)
          }
          74.3750% {
            fill:rgb(119 201 239)
          }
          74.6875% {
            fill:rgb(119 201 239)
          }
          75.0000% {
            fill:rgb(119 201 239)
          }
          75.3125% {
            fill:rgb(119 201 239)
          }
          75.6250% {
            fill:rgb(119 201 239)
          }
          75.9375% {
            fill:rgb(119 201 239)
          }
          76.2500% {
            fill:rgb(119 201 239)
          }
          76.5625% {
            fill:rgb(119 201 239)
          }
          76.8750% {
            fill:rgb(119 201 239)
          }
          77.1875% {
            fill:rgb(119 201 239)
          }
          77.5000% {
            fill:rgb(119 201 239)
          }
          77.8125% {
            fill:rgb(119 201 239)
          }
          78.1250% {
            fill:rgb(119 201 239)
          }
          78.4375% {
            fill:rgb(119 201 239)
          }
          78.7500% {
            fill:rgb(119 201 239)
          }
          79.0625% {
            fill:rgb(119 201 239)
          }
          79.3750% {
            fill:rgb(119 201 239)
          }
          79.6875% {
            fill:rgb(119 201 239)
          }
          80.0000% {
            fill:rgb(119 201 239)
          }
          80.3125% {
            fill:rgb(119 201 239)
          }
          80.6250% {
            fill:rgb(119 201 239)
          }
          80.9375% {
            fill:rgb(119 201 239)
          }
          81.2500% {
            fill:rgb(119 201 239)
          }
          81.5625% {
            fill:rgb(119 201 239)
          }
          81.8750% {
            fill:rgb(119 201 239)
          }
          82.1875% {
            fill:rgb(119 201 239)
          }
          82.5000% {
            fill:rgb(119 201 239)
          }
          82.8125% {
            fill:rgb(119 201 239)
          }
          83.1250% {
            fill:rgb(119 201 239)
          }
          83.4375% {
            fill:rgb(119 201 239)
          }
          83.7500% {
            fill:rgb(119 201 239)
          }
          84.0625% {
            fill:rgb(119 201 239)
          }
          84.3750% {
            fill:rgb(119 201 239)
          }
          84.6875% {
            fill:rgb(119 201 239)
          }
          85.0000% {
            fill:rgb(119 201 239)
          }
          85.3125% {
            fill:rgb(119 201 239)
          }
          85.6250% {
            fill:rgb(119 201 239)
          }
          85.9375% {
            fill:rgb(119 201 239)
          }
          86.2500% {
            fill:rgb(119 201 239)
          }
          86.5625% {
            fill:rgb(119 201 239)
          }
          86.8750% {
            fill:rgb(119 201 239)
          }
          87.1875% {
            fill:rgb(119 201 239)
          }
          87.5000% {
            fill:rgb(119 201 239)
          }
          87.8125% {
            fill:rgb(119 201 239)
          }
          88.1250% {
            fill:rgb(119 201 239)
          }
          88.4375% {
            fill:rgb(120 201 239)
          }
          88.7500% {
            fill:rgb(120 201 238)
          }
          89.0625% {
            fill:rgb(120 201 238)
          }
          89.3750% {
            fill:rgb(121 201 237)
          }
          89.6875% {
            fill:rgb(122 201 236)
          }
          90.0000% {
            fill:rgb(122 201 236)
          }
          90.3125% {
            fill:rgb(123 201 235)
          }
          90.6250% {
            fill:rgb(124 201 234)
          }
          90.9375% {
            fill:rgb(125 201 233)
          }
          91.2500% {
            fill:rgb(127 201 232)
          }
          91.5625% {
            fill:rgb(128 201 231)
          }
          91.8750% {
            fill:rgb(129 201 229)
          }
          92.1875% {
            fill:rgb(130 201 228)
          }
          92.5000% {
            fill:rgb(132 201 227)
          }
          92.8125% {
            fill:rgb(133 201 225)
          }
          93.1250% {
            fill:rgb(135 201 224)
          }
          93.4375% {
            fill:rgb(137 201 222)
          }
          93.7500% {
            fill:rgb(138 201 220)
          }
          94.0625% {
            fill:rgb(140 201 219)
          }
          94.3750% {
            fill:rgb(142 201 217)
          }
          94.6875% {
            fill:rgb(144 201 215)
          }
          95.0000% {
            fill:rgb(146 201 213)
          }
          95.3125% {
            fill:rgb(148 201 211)
          }
          95.6250% {
            fill:rgb(150 201 209)
          }
          95.9375% {
            fill:rgb(152 201 207)
          }
          96.2500% {
            fill:rgb(154 201 205)
          }
          96.5625% {
            fill:rgb(156 201 203)
          }
          96.8750% {
            fill:rgb(158 201 201)
          }
          97.1875% {
            fill:rgb(160 201 199)
          }
          97.5000% {
            fill:rgb(163 201 197)
          }
          97.8125% {
            fill:rgb(165 201 195)
          }
          98.1250% {
            fill:rgb(167 201 192)
          }
          98.4375% {
            fill:rgb(169 201 190)
          }
          98.7500% {
            fill:rgb(172 201 188)
          }
          99.0625% {
            fill:rgb(174 201 186)
          }
          99.3750% {
            fill:rgb(176 201 183)
          }
          99.6875% {
            fill:rgb(179 201 181)
          }
          100.0000% {
            fill:rgb(181 201 179)
          }
        }
        @keyframes overturn-mark-7 {
          0.0000% {
            opacity:0.5
          }
          0.3125% {
            opacity:0.481
          }
          0.6250% {
            opacity:0.463
          }
          0.9375% {
            opacity:0.444
          }
          1.2500% {
            opacity:0.425
          }
          1.5625% {
            opacity:0.407
          }
          1.8750% {
            opacity:0.388
          }
          2.1875% {
            opacity:0.37
          }
          2.5000% {
            opacity:0.352
          }
          2.8125% {
            opacity:0.334
          }
          3.1250% {
            opacity:0.316
          }
          3.4375% {
            opacity:0.299
          }
          3.7500% {
            opacity:0.282
          }
          4.0625% {
            opacity:0.265
          }
          4.3750% {
            opacity:0.248
          }
          4.6875% {
            opacity:0.232
          }
          5.0000% {
            opacity:0.216
          }
          5.3125% {
            opacity:0.2
          }
          5.6250% {
            opacity:0.185
          }
          5.9375% {
            opacity:0.171
          }
          6.2500% {
            opacity:0.156
          }
          6.5625% {
            opacity:0.142
          }
          6.8750% {
            opacity:0.129
          }
          7.1875% {
            opacity:0.116
          }
          7.5000% {
            opacity:0.104
          }
          7.8125% {
            opacity:0.092
          }
          8.1250% {
            opacity:0.081
          }
          8.4375% {
            opacity:0.071
          }
          8.7500% {
            opacity:0.061
          }
          9.0625% {
            opacity:0.052
          }
          9.3750% {
            opacity:0.043
          }
          9.6875% {
            opacity:0.035
          }
          10.0000% {
            opacity:0.028
          }
          10.3125% {
            opacity:0.022
          }
          10.6250% {
            opacity:0.016
          }
          10.9375% {
            opacity:0.011
          }
          11.2500% {
            opacity:0.007
          }
          11.5625% {
            opacity:0.004
          }
          11.8750% {
            opacity:0.002
          }
          12.1875% {
            opacity:0.0
          }
          12.5000% {
            opacity:0
          }
          12.8125% {
            opacity:0
          }
          13.1250% {
            opacity:0
          }
          13.4375% {
            opacity:0
          }
          13.7500% {
            opacity:0
          }
          14.0625% {
            opacity:0
          }
          14.3750% {
            opacity:0
          }
          14.6875% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.3125% {
            opacity:0
          }
          15.6250% {
            opacity:0
          }
          15.9375% {
            opacity:0
          }
          16.2500% {
            opacity:0
          }
          16.5625% {
            opacity:0
          }
          16.8750% {
            opacity:0
          }
          17.1875% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          17.8125% {
            opacity:0
          }
          18.1250% {
            opacity:0
          }
          18.4375% {
            opacity:0
          }
          18.7500% {
            opacity:0
          }
          19.0625% {
            opacity:0
          }
          19.3750% {
            opacity:0
          }
          19.6875% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.3125% {
            opacity:0
          }
          20.6250% {
            opacity:0
          }
          20.9375% {
            opacity:0.0
          }
          21.2500% {
            opacity:0.002
          }
          21.5625% {
            opacity:0.006
          }
          21.8750% {
            opacity:0.011
          }
          22.1875% {
            opacity:0.019
          }
          22.5000% {
            opacity:0.028
          }
          22.8125% {
            opacity:0.039
          }
          23.1250% {
            opacity:0.052
          }
          23.4375% {
            opacity:0.066
          }
          23.7500% {
            opacity:0.081
          }
          24.0625% {
            opacity:0.098
          }
          24.3750% {
            opacity:0.116
          }
          24.6875% {
            opacity:0.136
          }
          25.0000% {
            opacity:0.156
          }
          25.3125% {
            opacity:0.178
          }
          25.6250% {
            opacity:0.2
          }
          25.9375% {
            opacity:0.224
          }
          26.2500% {
            opacity:0.248
          }
          26.5625% {
            opacity:0.273
          }
          26.8750% {
            opacity:0.299
          }
          27.1875% {
            opacity:0.325
          }
          27.5000% {
            opacity:0.352
          }
          27.8125% {
            opacity:0.379
          }
          28.1250% {
            opacity:0.407
          }
          28.4375% {
            opacity:0.435
          }
          28.7500% {
            opacity:0.463
          }
          29.0625% {
            opacity:0.491
          }
          29.3750% {
            opacity:0.519
          }
          29.6875% {
            opacity:0.547
          }
          30.0000% {
            opacity:0.575
          }
          30.3125% {
            opacity:0.602
          }
          30.6250% {
            opacity:0.63
          }
          30.9375% {
            opacity:0.657
          }
          31.2500% {
            opacity:0.684
          }
          31.5625% {
            opacity:0.71
          }
          31.8750% {
            opacity:0.735
          }
          32.1875% {
            opacity:0.76
          }
          32.5000% {
            opacity:0.784
          }
          32.8125% {
            opacity:0.807
          }
          33.1250% {
            opacity:0.829
          }
          33.4375% {
            opacity:0.851
          }
          33.7500% {
            opacity:0.871
          }
          34.0625% {
            opacity:0.89
          }
          34.3750% {
            opacity:0.908
          }
          34.6875% {
            opacity:0.924
          }
          35.0000% {
            opacity:0.939
          }
          35.3125% {
            opacity:0.953
          }
          35.6250% {
            opacity:0.965
          }
          35.9375% {
            opacity:0.975
          }
          36.2500% {
            opacity:0.984
          }
          36.5625% {
            opacity:0.991
          }
          36.8750% {
            opacity:0.996
          }
          37.1875% {
            opacity:0.999
          }
          37.5000% {
            opacity:1
          }
          37.8125% {
            opacity:1
          }
          38.1250% {
            opacity:1
          }
          38.4375% {
            opacity:1
          }
          38.7500% {
            opacity:1
          }
          39.0625% {
            opacity:1
          }
          39.3750% {
            opacity:1
          }
          39.6875% {
            opacity:1
          }
          40.0000% {
            opacity:1
          }
          40.3125% {
            opacity:1
          }
          40.6250% {
            opacity:1
          }
          40.9375% {
            opacity:1
          }
          41.2500% {
            opacity:1
          }
          41.5625% {
            opacity:1
          }
          41.8750% {
            opacity:1
          }
          42.1875% {
            opacity:1
          }
          42.5000% {
            opacity:1
          }
          42.8125% {
            opacity:1
          }
          43.1250% {
            opacity:1
          }
          43.4375% {
            opacity:1
          }
          43.7500% {
            opacity:1
          }
          44.0625% {
            opacity:1
          }
          44.3750% {
            opacity:1
          }
          44.6875% {
            opacity:1
          }
          45.0000% {
            opacity:1
          }
          45.3125% {
            opacity:1
          }
          45.6250% {
            opacity:1
          }
          45.9375% {
            opacity:1
          }
          46.2500% {
            opacity:1
          }
          46.5625% {
            opacity:1
          }
          46.8750% {
            opacity:1
          }
          47.1875% {
            opacity:1
          }
          47.5000% {
            opacity:1
          }
          47.8125% {
            opacity:1
          }
          48.1250% {
            opacity:1
          }
          48.4375% {
            opacity:1
          }
          48.7500% {
            opacity:1
          }
          49.0625% {
            opacity:1
          }
          49.3750% {
            opacity:1
          }
          49.6875% {
            opacity:1
          }
          50.0000% {
            opacity:1
          }
          50.3125% {
            opacity:1
          }
          50.6250% {
            opacity:1
          }
          50.9375% {
            opacity:1
          }
          51.2500% {
            opacity:1
          }
          51.5625% {
            opacity:1
          }
          51.8750% {
            opacity:1
          }
          52.1875% {
            opacity:1
          }
          52.5000% {
            opacity:1
          }
          52.8125% {
            opacity:1
          }
          53.1250% {
            opacity:1
          }
          53.4375% {
            opacity:1
          }
          53.7500% {
            opacity:1
          }
          54.0625% {
            opacity:1
          }
          54.3750% {
            opacity:1
          }
          54.6875% {
            opacity:1
          }
          55.0000% {
            opacity:1
          }
          55.3125% {
            opacity:1
          }
          55.6250% {
            opacity:1
          }
          55.9375% {
            opacity:1
          }
          56.2500% {
            opacity:1
          }
          56.5625% {
            opacity:1
          }
          56.8750% {
            opacity:1
          }
          57.1875% {
            opacity:1
          }
          57.5000% {
            opacity:1
          }
          57.8125% {
            opacity:1
          }
          58.1250% {
            opacity:1
          }
          58.4375% {
            opacity:1
          }
          58.7500% {
            opacity:1
          }
          59.0625% {
            opacity:1
          }
          59.3750% {
            opacity:1
          }
          59.6875% {
            opacity:1
          }
          60.0000% {
            opacity:1
          }
          60.3125% {
            opacity:1
          }
          60.6250% {
            opacity:1
          }
          60.9375% {
            opacity:1
          }
          61.2500% {
            opacity:1
          }
          61.5625% {
            opacity:1
          }
          61.8750% {
            opacity:1
          }
          62.1875% {
            opacity:1
          }
          62.5000% {
            opacity:1
          }
          62.8125% {
            opacity:1
          }
          63.1250% {
            opacity:1
          }
          63.4375% {
            opacity:1
          }
          63.7500% {
            opacity:1
          }
          64.0625% {
            opacity:1
          }
          64.3750% {
            opacity:1
          }
          64.6875% {
            opacity:1
          }
          65.0000% {
            opacity:1
          }
          65.3125% {
            opacity:1
          }
          65.6250% {
            opacity:1
          }
          65.9375% {
            opacity:1
          }
          66.2500% {
            opacity:1
          }
          66.5625% {
            opacity:1
          }
          66.8750% {
            opacity:1
          }
          67.1875% {
            opacity:1
          }
          67.5000% {
            opacity:1
          }
          67.8125% {
            opacity:1
          }
          68.1250% {
            opacity:1
          }
          68.4375% {
            opacity:1
          }
          68.7500% {
            opacity:1
          }
          69.0625% {
            opacity:1
          }
          69.3750% {
            opacity:1
          }
          69.6875% {
            opacity:1
          }
          70.0000% {
            opacity:1
          }
          70.3125% {
            opacity:1
          }
          70.6250% {
            opacity:1
          }
          70.9375% {
            opacity:1
          }
          71.2500% {
            opacity:1
          }
          71.5625% {
            opacity:1
          }
          71.8750% {
            opacity:1
          }
          72.1875% {
            opacity:1
          }
          72.5000% {
            opacity:1
          }
          72.8125% {
            opacity:1
          }
          73.1250% {
            opacity:1
          }
          73.4375% {
            opacity:1
          }
          73.7500% {
            opacity:1
          }
          74.0625% {
            opacity:1
          }
          74.3750% {
            opacity:1
          }
          74.6875% {
            opacity:1
          }
          75.0000% {
            opacity:1
          }
          75.3125% {
            opacity:1
          }
          75.6250% {
            opacity:1
          }
          75.9375% {
            opacity:1
          }
          76.2500% {
            opacity:1
          }
          76.5625% {
            opacity:1
          }
          76.8750% {
            opacity:1
          }
          77.1875% {
            opacity:1
          }
          77.5000% {
            opacity:1
          }
          77.8125% {
            opacity:1
          }
          78.1250% {
            opacity:1
          }
          78.4375% {
            opacity:1
          }
          78.7500% {
            opacity:1
          }
          79.0625% {
            opacity:1
          }
          79.3750% {
            opacity:1
          }
          79.6875% {
            opacity:1
          }
          80.0000% {
            opacity:1
          }
          80.3125% {
            opacity:1
          }
          80.6250% {
            opacity:1
          }
          80.9375% {
            opacity:1
          }
          81.2500% {
            opacity:1
          }
          81.5625% {
            opacity:1
          }
          81.8750% {
            opacity:1
          }
          82.1875% {
            opacity:1
          }
          82.5000% {
            opacity:1
          }
          82.8125% {
            opacity:1
          }
          83.1250% {
            opacity:1
          }
          83.4375% {
            opacity:1
          }
          83.7500% {
            opacity:1
          }
          84.0625% {
            opacity:1
          }
          84.3750% {
            opacity:1
          }
          84.6875% {
            opacity:1
          }
          85.0000% {
            opacity:1
          }
          85.3125% {
            opacity:1
          }
          85.6250% {
            opacity:1
          }
          85.9375% {
            opacity:1
          }
          86.2500% {
            opacity:1
          }
          86.5625% {
            opacity:1
          }
          86.8750% {
            opacity:1
          }
          87.1875% {
            opacity:1
          }
          87.5000% {
            opacity:1
          }
          87.8125% {
            opacity:1.0
          }
          88.1250% {
            opacity:0.998
          }
          88.4375% {
            opacity:0.996
          }
          88.7500% {
            opacity:0.993
          }
          89.0625% {
            opacity:0.989
          }
          89.3750% {
            opacity:0.984
          }
          89.6875% {
            opacity:0.978
          }
          90.0000% {
            opacity:0.972
          }
          90.3125% {
            opacity:0.965
          }
          90.6250% {
            opacity:0.957
          }
          90.9375% {
            opacity:0.948
          }
          91.2500% {
            opacity:0.939
          }
          91.5625% {
            opacity:0.929
          }
          91.8750% {
            opacity:0.919
          }
          92.1875% {
            opacity:0.908
          }
          92.5000% {
            opacity:0.896
          }
          92.8125% {
            opacity:0.884
          }
          93.1250% {
            opacity:0.871
          }
          93.4375% {
            opacity:0.858
          }
          93.7500% {
            opacity:0.844
          }
          94.0625% {
            opacity:0.829
          }
          94.3750% {
            opacity:0.815
          }
          94.6875% {
            opacity:0.8
          }
          95.0000% {
            opacity:0.784
          }
          95.3125% {
            opacity:0.768
          }
          95.6250% {
            opacity:0.752
          }
          95.9375% {
            opacity:0.735
          }
          96.2500% {
            opacity:0.718
          }
          96.5625% {
            opacity:0.701
          }
          96.8750% {
            opacity:0.684
          }
          97.1875% {
            opacity:0.666
          }
          97.5000% {
            opacity:0.648
          }
          97.8125% {
            opacity:0.63
          }
          98.1250% {
            opacity:0.612
          }
          98.4375% {
            opacity:0.593
          }
          98.7500% {
            opacity:0.575
          }
          99.0625% {
            opacity:0.556
          }
          99.3750% {
            opacity:0.537
          }
          99.6875% {
            opacity:0.519
          }
          100.0000% {
            opacity:0.5
          }
        }
        @keyframes overturn-fleck-7 {
          0.0000% {
            transform:translate(36.059px,57.787px);
            opacity:0
          }
          0.3125% {
            transform:translate(36.732px,57.374px);
            opacity:0
          }
          0.6250% {
            transform:translate(37.418px,56.97px);
            opacity:0
          }
          0.9375% {
            transform:translate(38.116px,56.575px);
            opacity:0
          }
          1.2500% {
            transform:translate(38.826px,56.188px);
            opacity:0
          }
          1.5625% {
            transform:translate(39.549px,55.81px);
            opacity:0
          }
          1.8750% {
            transform:translate(40.283px,55.44px);
            opacity:0
          }
          2.1875% {
            transform:translate(41.029px,55.08px);
            opacity:0
          }
          2.5000% {
            transform:translate(41.786px,54.729px);
            opacity:0
          }
          2.8125% {
            transform:translate(42.554px,54.388px);
            opacity:0
          }
          3.1250% {
            transform:translate(43.333px,54.056px);
            opacity:0
          }
          3.4375% {
            transform:translate(44.121px,53.733px);
            opacity:0
          }
          3.7500% {
            transform:translate(44.92px,53.421px);
            opacity:0
          }
          4.0625% {
            transform:translate(45.728px,53.118px);
            opacity:0
          }
          4.3750% {
            transform:translate(46.546px,52.825px);
            opacity:0
          }
          4.6875% {
            transform:translate(47.373px,52.542px);
            opacity:0
          }
          5.0000% {
            transform:translate(48.208px,52.27px);
            opacity:0
          }
          5.3125% {
            transform:translate(49.052px,52.008px);
            opacity:0
          }
          5.6250% {
            transform:translate(49.904px,51.756px);
            opacity:0
          }
          5.9375% {
            transform:translate(50.764px,51.514px);
            opacity:0
          }
          6.2500% {
            transform:translate(51.631px,51.284px);
            opacity:0
          }
          6.5625% {
            transform:translate(52.505px,51.064px);
            opacity:0
          }
          6.8750% {
            transform:translate(53.386px,50.854px);
            opacity:0
          }
          7.1875% {
            transform:translate(54.274px,50.656px);
            opacity:0
          }
          7.5000% {
            transform:translate(55.167px,50.468px);
            opacity:0
          }
          7.8125% {
            transform:translate(56.066px,50.292px);
            opacity:0
          }
          8.1250% {
            transform:translate(56.971px,50.126px);
            opacity:0
          }
          8.4375% {
            transform:translate(57.88px,49.972px);
            opacity:0
          }
          8.7500% {
            transform:translate(58.795px,49.829px);
            opacity:0
          }
          9.0625% {
            transform:translate(59.713px,49.697px);
            opacity:0
          }
          9.3750% {
            transform:translate(60.636px,49.576px);
            opacity:0
          }
          9.6875% {
            transform:translate(61.562px,49.467px);
            opacity:0
          }
          10.0000% {
            transform:translate(62.491px,49.369px);
            opacity:0
          }
          10.3125% {
            transform:translate(63.423px,49.283px);
            opacity:0
          }
          10.6250% {
            transform:translate(64.358px,49.208px);
            opacity:0
          }
          10.9375% {
            transform:translate(65.295px,49.144px);
            opacity:0
          }
          11.2500% {
            transform:translate(66.234px,49.092px);
            opacity:0
          }
          11.5625% {
            transform:translate(67.174px,49.052px);
            opacity:0
          }
          11.8750% {
            transform:translate(68.116px,49.023px);
            opacity:0
          }
          12.1875% {
            transform:translate(69.058px,49.006px);
            opacity:0
          }
          12.5000% {
            transform:translate(70px,44px);
            opacity:0
          }
          12.8125% {
            transform:translate(70.942px,44px);
            opacity:0
          }
          13.1250% {
            transform:translate(71.884px,44px);
            opacity:0
          }
          13.4375% {
            transform:translate(72.826px,44px);
            opacity:0
          }
          13.7500% {
            transform:translate(73.766px,44px);
            opacity:0
          }
          14.0625% {
            transform:translate(74.705px,44px);
            opacity:0
          }
          14.3750% {
            transform:translate(75.642px,44px);
            opacity:0
          }
          14.6875% {
            transform:translate(76.577px,44px);
            opacity:0
          }
          15.0000% {
            transform:translate(77.509px,44px);
            opacity:0
          }
          15.3125% {
            transform:translate(78.438px,44px);
            opacity:0
          }
          15.6250% {
            transform:translate(79.364px,44px);
            opacity:0
          }
          15.9375% {
            transform:translate(80.287px,44px);
            opacity:0
          }
          16.2500% {
            transform:translate(81.205px,44px);
            opacity:0
          }
          16.5625% {
            transform:translate(82.12px,44px);
            opacity:0
          }
          16.8750% {
            transform:translate(83.029px,44px);
            opacity:0
          }
          17.1875% {
            transform:translate(83.934px,44px);
            opacity:0
          }
          17.5000% {
            transform:translate(84.833px,44px);
            opacity:0
          }
          17.8125% {
            transform:translate(85.726px,44px);
            opacity:0
          }
          18.1250% {
            transform:translate(86.614px,44px);
            opacity:0
          }
          18.4375% {
            transform:translate(87.495px,44px);
            opacity:0
          }
          18.7500% {
            transform:translate(88.369px,44px);
            opacity:0
          }
          19.0625% {
            transform:translate(89.236px,44px);
            opacity:0
          }
          19.3750% {
            transform:translate(90.096px,44px);
            opacity:0
          }
          19.6875% {
            transform:translate(90.948px,44px);
            opacity:0
          }
          20.0000% {
            transform:translate(91.792px,44px);
            opacity:0
          }
          20.3125% {
            transform:translate(92.627px,44px);
            opacity:0
          }
          20.6250% {
            transform:translate(93.454px,44px);
            opacity:0
          }
          20.9375% {
            transform:translate(94.272px,44.057px);
            opacity:0.02
          }
          21.2500% {
            transform:translate(95.08px,44.236px);
            opacity:0.078
          }
          21.5625% {
            transform:translate(95.879px,44.426px);
            opacity:0.137
          }
          21.8750% {
            transform:translate(96.667px,44.628px);
            opacity:0.195
          }
          22.1875% {
            transform:translate(97.446px,44.844px);
            opacity:0.252
          }
          22.5000% {
            transform:translate(98.214px,45.073px);
            opacity:0.309
          }
          22.8125% {
            transform:translate(98.971px,45.316px);
            opacity:0.364
          }
          23.1250% {
            transform:translate(99.717px,45.573px);
            opacity:0.419
          }
          23.4375% {
            transform:translate(100.451px,45.845px);
            opacity:0.471
          }
          23.7500% {
            transform:translate(101.174px,46.133px);
            opacity:0.522
          }
          24.0625% {
            transform:translate(101.884px,46.436px);
            opacity:0.572
          }
          24.3750% {
            transform:translate(102.582px,46.756px);
            opacity:0.619
          }
          24.6875% {
            transform:translate(103.268px,47.093px);
            opacity:0.664
          }
          25.0000% {
            transform:translate(103.941px,47.447px);
            opacity:0.707
          }
          25.3125% {
            transform:translate(104.601px,47.818px);
            opacity:0.748
          }
          25.6250% {
            transform:translate(105.247px,48.208px);
            opacity:0.785
          }
          25.9375% {
            transform:translate(105.88px,48.616px);
            opacity:0.82
          }
          26.2500% {
            transform:translate(106.499px,49.043px);
            opacity:0.853
          }
          26.5625% {
            transform:translate(107.105px,49.489px);
            opacity:0.882
          }
          26.8750% {
            transform:translate(107.695px,49.955px);
            opacity:0.908
          }
          27.1875% {
            transform:translate(108.271px,50.441px);
            opacity:0.931
          }
          27.5000% {
            transform:translate(108.833px,50.947px);
            opacity:0.951
          }
          27.8125% {
            transform:translate(109.379px,51.473px);
            opacity:0.968
          }
          28.1250% {
            transform:translate(109.911px,52.021px);
            opacity:0.981
          }
          28.4375% {
            transform:translate(110.426px,52.589px);
            opacity:0.991
          }
          28.7500% {
            transform:translate(110.927px,53.179px);
            opacity:0.997
          }
          29.0625% {
            transform:translate(111.411px,53.791px);
            opacity:1.0
          }
          29.3750% {
            transform:translate(111.88px,54.425px);
            opacity:0.999
          }
          29.6875% {
            transform:translate(112.332px,55.081px);
            opacity:0.995
          }
          30.0000% {
            transform:translate(112.768px,55.759px);
            opacity:0.988
          }
          30.3125% {
            transform:translate(113.188px,56.46px);
            opacity:0.977
          }
          30.6250% {
            transform:translate(113.591px,57.184px);
            opacity:0.962
          }
          30.9375% {
            transform:translate(113.977px,57.93px);
            opacity:0.945
          }
          31.2500% {
            transform:translate(114.346px,58.7px);
            opacity:0.924
          }
          31.5625% {
            transform:translate(114.698px,59.492px);
            opacity:0.9
          }
          31.8750% {
            transform:translate(115.033px,60.308px);
            opacity:0.872
          }
          32.1875% {
            transform:translate(115.351px,61.148px);
            opacity:0.842
          }
          32.5000% {
            transform:translate(115.651px,62.011px);
            opacity:0.809
          }
          32.8125% {
            transform:translate(115.933px,62.897px);
            opacity:0.773
          }
          33.1250% {
            transform:translate(116.198px,63.807px);
            opacity:0.734
          }
          33.4375% {
            transform:translate(116.445px,64.74px);
            opacity:0.693
          }
          33.7500% {
            transform:translate(116.674px,65.697px);
            opacity:0.649
          }
          34.0625% {
            transform:translate(116.885px,66.678px);
            opacity:0.604
          }
          34.3750% {
            transform:translate(117.078px,67.682px);
            opacity:0.556
          }
          34.6875% {
            transform:translate(117.252px,68.71px);
            opacity:0.506
          }
          35.0000% {
            transform:translate(117.409px,69.761px);
            opacity:0.454
          }
          35.3125% {
            transform:translate(117.547px,70.835px);
            opacity:0.401
          }
          35.6250% {
            transform:translate(117.667px,71.933px);
            opacity:0.346
          }
          35.9375% {
            transform:translate(117.769px,73.054px);
            opacity:0.29
          }
          36.2500% {
            transform:translate(117.852px,74.198px);
            opacity:0.233
          }
          36.5625% {
            transform:translate(117.917px,75.364px);
            opacity:0.176
          }
          36.8750% {
            transform:translate(117.963px,76.554px);
            opacity:0.118
          }
          37.1875% {
            transform:translate(117.991px,77.766px);
            opacity:0.059
          }
          37.5000% {
            transform:translate(118px,79px);
            opacity:0
          }
          37.8125% {
            transform:translate(117.991px,79.589px);
            opacity:0
          }
          38.1250% {
            transform:translate(117.963px,80.178px);
            opacity:0
          }
          38.4375% {
            transform:translate(117.917px,80.766px);
            opacity:0
          }
          38.7500% {
            transform:translate(117.852px,81.354px);
            opacity:0
          }
          39.0625% {
            transform:translate(117.769px,81.941px);
            opacity:0
          }
          39.3750% {
            transform:translate(117.667px,82.526px);
            opacity:0
          }
          39.6875% {
            transform:translate(117.547px,83.11px);
            opacity:0
          }
          40.0000% {
            transform:translate(117.409px,83.693px);
            opacity:0
          }
          40.3125% {
            transform:translate(117.252px,84.274px);
            opacity:0
          }
          40.6250% {
            transform:translate(117.078px,84.853px);
            opacity:0
          }
          40.9375% {
            transform:translate(116.885px,85.429px);
            opacity:0
          }
          41.2500% {
            transform:translate(116.674px,86.003px);
            opacity:0
          }
          41.5625% {
            transform:translate(116.445px,86.575px);
            opacity:0
          }
          41.8750% {
            transform:translate(116.198px,87.143px);
            opacity:0
          }
          42.1875% {
            transform:translate(115.933px,87.709px);
            opacity:0
          }
          42.5000% {
            transform:translate(115.651px,88.271px);
            opacity:0
          }
          42.8125% {
            transform:translate(115.351px,88.829px);
            opacity:0
          }
          43.1250% {
            transform:translate(115.033px,89.384px);
            opacity:0
          }
          43.4375% {
            transform:translate(114.698px,89.934px);
            opacity:0
          }
          43.7500% {
            transform:translate(114.346px,90.481px);
            opacity:0
          }
          44.0625% {
            transform:translate(113.977px,91.022px);
            opacity:0
          }
          44.3750% {
            transform:translate(113.591px,91.56px);
            opacity:0
          }
          44.6875% {
            transform:translate(113.188px,92.092px);
            opacity:0
          }
          45.0000% {
            transform:translate(112.768px,92.62px);
            opacity:0
          }
          45.3125% {
            transform:translate(112.332px,93.142px);
            opacity:0
          }
          45.6250% {
            transform:translate(111.88px,93.659px);
            opacity:0
          }
          45.9375% {
            transform:translate(111.411px,94.17px);
            opacity:0
          }
          46.2500% {
            transform:translate(110.927px,94.675px);
            opacity:0
          }
          46.5625% {
            transform:translate(110.426px,95.174px);
            opacity:0
          }
          46.8750% {
            transform:translate(109.911px,95.667px);
            opacity:0
          }
          47.1875% {
            transform:translate(109.379px,96.154px);
            opacity:0
          }
          47.5000% {
            transform:translate(108.833px,96.634px);
            opacity:0
          }
          47.8125% {
            transform:translate(108.271px,97.107px);
            opacity:0
          }
          48.1250% {
            transform:translate(107.695px,97.573px);
            opacity:0
          }
          48.4375% {
            transform:translate(107.105px,98.032px);
            opacity:0
          }
          48.7500% {
            transform:translate(106.499px,98.483px);
            opacity:0
          }
          49.0625% {
            transform:translate(105.88px,98.928px);
            opacity:0
          }
          49.3750% {
            transform:translate(105.247px,99.364px);
            opacity:0
          }
          49.6875% {
            transform:translate(104.601px,99.793px);
            opacity:0
          }
          50.0000% {
            transform:translate(103.941px,100.213px);
            opacity:0
          }
          50.3125% {
            transform:translate(103.268px,100.626px);
            opacity:0
          }
          50.6250% {
            transform:translate(102.582px,101.03px);
            opacity:0
          }
          50.9375% {
            transform:translate(101.884px,101.425px);
            opacity:0
          }
          51.2500% {
            transform:translate(101.174px,101.812px);
            opacity:0
          }
          51.5625% {
            transform:translate(100.451px,102.19px);
            opacity:0
          }
          51.8750% {
            transform:translate(99.717px,102.56px);
            opacity:0
          }
          52.1875% {
            transform:translate(98.971px,102.92px);
            opacity:0
          }
          52.5000% {
            transform:translate(98.214px,103.271px);
            opacity:0
          }
          52.8125% {
            transform:translate(97.446px,103.612px);
            opacity:0
          }
          53.1250% {
            transform:translate(96.667px,103.944px);
            opacity:0
          }
          53.4375% {
            transform:translate(95.879px,104.267px);
            opacity:0
          }
          53.7500% {
            transform:translate(95.08px,104.579px);
            opacity:0
          }
          54.0625% {
            transform:translate(94.272px,104.882px);
            opacity:0
          }
          54.3750% {
            transform:translate(93.454px,105.175px);
            opacity:0
          }
          54.6875% {
            transform:translate(92.627px,105.458px);
            opacity:0
          }
          55.0000% {
            transform:translate(91.792px,105.73px);
            opacity:0
          }
          55.3125% {
            transform:translate(90.948px,105.992px);
            opacity:0
          }
          55.6250% {
            transform:translate(90.096px,106.244px);
            opacity:0
          }
          55.9375% {
            transform:translate(89.236px,106.486px);
            opacity:0
          }
          56.2500% {
            transform:translate(88.369px,106.716px);
            opacity:0
          }
          56.5625% {
            transform:translate(87.495px,106.936px);
            opacity:0
          }
          56.8750% {
            transform:translate(86.614px,107.146px);
            opacity:0
          }
          57.1875% {
            transform:translate(85.726px,107.344px);
            opacity:0
          }
          57.5000% {
            transform:translate(84.833px,107.532px);
            opacity:0
          }
          57.8125% {
            transform:translate(83.934px,107.708px);
            opacity:0
          }
          58.1250% {
            transform:translate(83.029px,107.874px);
            opacity:0
          }
          58.4375% {
            transform:translate(82.12px,108.028px);
            opacity:0
          }
          58.7500% {
            transform:translate(81.205px,108.171px);
            opacity:0
          }
          59.0625% {
            transform:translate(80.287px,108.303px);
            opacity:0
          }
          59.3750% {
            transform:translate(79.364px,108.424px);
            opacity:0
          }
          59.6875% {
            transform:translate(78.438px,108.533px);
            opacity:0
          }
          60.0000% {
            transform:translate(77.509px,108.631px);
            opacity:0
          }
          60.3125% {
            transform:translate(76.577px,108.717px);
            opacity:0
          }
          60.6250% {
            transform:translate(75.642px,108.792px);
            opacity:0
          }
          60.9375% {
            transform:translate(74.705px,108.856px);
            opacity:0
          }
          61.2500% {
            transform:translate(73.766px,108.908px);
            opacity:0
          }
          61.5625% {
            transform:translate(72.826px,108.948px);
            opacity:0
          }
          61.8750% {
            transform:translate(71.884px,108.977px);
            opacity:0
          }
          62.1875% {
            transform:translate(70.942px,108.994px);
            opacity:0
          }
          62.5000% {
            transform:translate(70px,109px);
            opacity:0
          }
          62.8125% {
            transform:translate(69.058px,108.994px);
            opacity:0
          }
          63.1250% {
            transform:translate(68.116px,108.977px);
            opacity:0
          }
          63.4375% {
            transform:translate(67.174px,108.948px);
            opacity:0
          }
          63.7500% {
            transform:translate(66.234px,108.908px);
            opacity:0
          }
          64.0625% {
            transform:translate(65.295px,108.856px);
            opacity:0
          }
          64.3750% {
            transform:translate(64.358px,108.792px);
            opacity:0
          }
          64.6875% {
            transform:translate(63.423px,108.717px);
            opacity:0
          }
          65.0000% {
            transform:translate(62.491px,108.631px);
            opacity:0
          }
          65.3125% {
            transform:translate(61.562px,108.533px);
            opacity:0
          }
          65.6250% {
            transform:translate(60.636px,108.424px);
            opacity:0
          }
          65.9375% {
            transform:translate(59.713px,108.303px);
            opacity:0
          }
          66.2500% {
            transform:translate(58.795px,108.171px);
            opacity:0
          }
          66.5625% {
            transform:translate(57.88px,108.028px);
            opacity:0
          }
          66.8750% {
            transform:translate(56.971px,107.874px);
            opacity:0
          }
          67.1875% {
            transform:translate(56.066px,107.708px);
            opacity:0
          }
          67.5000% {
            transform:translate(55.167px,107.532px);
            opacity:0
          }
          67.8125% {
            transform:translate(54.274px,107.344px);
            opacity:0
          }
          68.1250% {
            transform:translate(53.386px,107.146px);
            opacity:0
          }
          68.4375% {
            transform:translate(52.505px,106.936px);
            opacity:0
          }
          68.7500% {
            transform:translate(51.631px,106.716px);
            opacity:0
          }
          69.0625% {
            transform:translate(50.764px,106.486px);
            opacity:0
          }
          69.3750% {
            transform:translate(49.904px,106.244px);
            opacity:0
          }
          69.6875% {
            transform:translate(49.052px,105.992px);
            opacity:0
          }
          70.0000% {
            transform:translate(48.208px,105.73px);
            opacity:0
          }
          70.3125% {
            transform:translate(47.373px,105.458px);
            opacity:0
          }
          70.6250% {
            transform:translate(46.546px,105.175px);
            opacity:0
          }
          70.9375% {
            transform:translate(45.728px,104.882px);
            opacity:0
          }
          71.2500% {
            transform:translate(44.92px,104.579px);
            opacity:0
          }
          71.5625% {
            transform:translate(44.121px,104.267px);
            opacity:0
          }
          71.8750% {
            transform:translate(43.333px,103.944px);
            opacity:0
          }
          72.1875% {
            transform:translate(42.554px,103.612px);
            opacity:0
          }
          72.5000% {
            transform:translate(41.786px,103.271px);
            opacity:0
          }
          72.8125% {
            transform:translate(41.029px,102.92px);
            opacity:0
          }
          73.1250% {
            transform:translate(40.283px,102.56px);
            opacity:0
          }
          73.4375% {
            transform:translate(39.549px,102.19px);
            opacity:0
          }
          73.7500% {
            transform:translate(38.826px,101.812px);
            opacity:0
          }
          74.0625% {
            transform:translate(38.116px,101.425px);
            opacity:0
          }
          74.3750% {
            transform:translate(37.418px,101.03px);
            opacity:0
          }
          74.6875% {
            transform:translate(36.732px,100.626px);
            opacity:0
          }
          75.0000% {
            transform:translate(36.059px,100.213px);
            opacity:0
          }
          75.3125% {
            transform:translate(35.399px,99.793px);
            opacity:0
          }
          75.6250% {
            transform:translate(34.753px,99.364px);
            opacity:0
          }
          75.9375% {
            transform:translate(34.12px,98.928px);
            opacity:0
          }
          76.2500% {
            transform:translate(33.501px,98.483px);
            opacity:0
          }
          76.5625% {
            transform:translate(32.895px,98.032px);
            opacity:0
          }
          76.8750% {
            transform:translate(32.305px,97.573px);
            opacity:0
          }
          77.1875% {
            transform:translate(31.729px,97.107px);
            opacity:0
          }
          77.5000% {
            transform:translate(31.167px,96.634px);
            opacity:0
          }
          77.8125% {
            transform:translate(30.621px,96.154px);
            opacity:0
          }
          78.1250% {
            transform:translate(30.089px,95.667px);
            opacity:0
          }
          78.4375% {
            transform:translate(29.574px,95.174px);
            opacity:0
          }
          78.7500% {
            transform:translate(29.073px,94.675px);
            opacity:0
          }
          79.0625% {
            transform:translate(28.589px,94.17px);
            opacity:0
          }
          79.3750% {
            transform:translate(28.12px,93.659px);
            opacity:0
          }
          79.6875% {
            transform:translate(27.668px,93.142px);
            opacity:0
          }
          80.0000% {
            transform:translate(27.232px,92.62px);
            opacity:0
          }
          80.3125% {
            transform:translate(26.812px,92.092px);
            opacity:0
          }
          80.6250% {
            transform:translate(26.409px,91.56px);
            opacity:0
          }
          80.9375% {
            transform:translate(26.023px,91.022px);
            opacity:0
          }
          81.2500% {
            transform:translate(25.654px,90.481px);
            opacity:0
          }
          81.5625% {
            transform:translate(25.302px,89.934px);
            opacity:0
          }
          81.8750% {
            transform:translate(24.967px,89.384px);
            opacity:0
          }
          82.1875% {
            transform:translate(24.649px,88.829px);
            opacity:0
          }
          82.5000% {
            transform:translate(24.349px,88.271px);
            opacity:0
          }
          82.8125% {
            transform:translate(24.067px,87.709px);
            opacity:0
          }
          83.1250% {
            transform:translate(23.802px,87.143px);
            opacity:0
          }
          83.4375% {
            transform:translate(23.555px,86.575px);
            opacity:0
          }
          83.7500% {
            transform:translate(23.326px,86.003px);
            opacity:0
          }
          84.0625% {
            transform:translate(23.115px,85.429px);
            opacity:0
          }
          84.3750% {
            transform:translate(22.922px,84.853px);
            opacity:0
          }
          84.6875% {
            transform:translate(22.748px,84.274px);
            opacity:0
          }
          85.0000% {
            transform:translate(22.591px,83.693px);
            opacity:0
          }
          85.3125% {
            transform:translate(22.453px,83.11px);
            opacity:0
          }
          85.6250% {
            transform:translate(22.333px,82.526px);
            opacity:0
          }
          85.9375% {
            transform:translate(22.231px,81.941px);
            opacity:0
          }
          86.2500% {
            transform:translate(22.148px,81.354px);
            opacity:0
          }
          86.5625% {
            transform:translate(22.083px,80.766px);
            opacity:0
          }
          86.8750% {
            transform:translate(22.037px,80.178px);
            opacity:0
          }
          87.1875% {
            transform:translate(22.009px,79.589px);
            opacity:0
          }
          87.5000% {
            transform:translate(22px,79px);
            opacity:0
          }
          87.8125% {
            transform:translate(22.009px,78.411px);
            opacity:0
          }
          88.1250% {
            transform:translate(22.037px,77.822px);
            opacity:0
          }
          88.4375% {
            transform:translate(22.083px,77.234px);
            opacity:0
          }
          88.7500% {
            transform:translate(22.148px,76.646px);
            opacity:0
          }
          89.0625% {
            transform:translate(22.231px,76.059px);
            opacity:0
          }
          89.3750% {
            transform:translate(22.333px,75.474px);
            opacity:0
          }
          89.6875% {
            transform:translate(22.453px,74.89px);
            opacity:0
          }
          90.0000% {
            transform:translate(22.591px,74.307px);
            opacity:0
          }
          90.3125% {
            transform:translate(22.748px,73.726px);
            opacity:0
          }
          90.6250% {
            transform:translate(22.922px,73.147px);
            opacity:0
          }
          90.9375% {
            transform:translate(23.115px,72.571px);
            opacity:0
          }
          91.2500% {
            transform:translate(23.326px,71.997px);
            opacity:0
          }
          91.5625% {
            transform:translate(23.555px,71.425px);
            opacity:0
          }
          91.8750% {
            transform:translate(23.802px,70.857px);
            opacity:0
          }
          92.1875% {
            transform:translate(24.067px,70.291px);
            opacity:0
          }
          92.5000% {
            transform:translate(24.349px,69.729px);
            opacity:0
          }
          92.8125% {
            transform:translate(24.649px,69.171px);
            opacity:0
          }
          93.1250% {
            transform:translate(24.967px,68.616px);
            opacity:0
          }
          93.4375% {
            transform:translate(25.302px,68.066px);
            opacity:0
          }
          93.7500% {
            transform:translate(25.654px,67.519px);
            opacity:0
          }
          94.0625% {
            transform:translate(26.023px,66.978px);
            opacity:0
          }
          94.3750% {
            transform:translate(26.409px,66.44px);
            opacity:0
          }
          94.6875% {
            transform:translate(26.812px,65.908px);
            opacity:0
          }
          95.0000% {
            transform:translate(27.232px,65.38px);
            opacity:0
          }
          95.3125% {
            transform:translate(27.668px,64.858px);
            opacity:0
          }
          95.6250% {
            transform:translate(28.12px,64.341px);
            opacity:0
          }
          95.9375% {
            transform:translate(28.589px,63.83px);
            opacity:0
          }
          96.2500% {
            transform:translate(29.073px,63.325px);
            opacity:0
          }
          96.5625% {
            transform:translate(29.574px,62.826px);
            opacity:0
          }
          96.8750% {
            transform:translate(30.089px,62.333px);
            opacity:0
          }
          97.1875% {
            transform:translate(30.621px,61.846px);
            opacity:0
          }
          97.5000% {
            transform:translate(31.167px,61.366px);
            opacity:0
          }
          97.8125% {
            transform:translate(31.729px,60.893px);
            opacity:0
          }
          98.1250% {
            transform:translate(32.305px,60.427px);
            opacity:0
          }
          98.4375% {
            transform:translate(32.895px,59.968px);
            opacity:0
          }
          98.7500% {
            transform:translate(33.501px,59.517px);
            opacity:0
          }
          99.0625% {
            transform:translate(34.12px,59.072px);
            opacity:0
          }
          99.3750% {
            transform:translate(34.753px,58.636px);
            opacity:0
          }
          99.6875% {
            transform:translate(35.399px,58.207px);
            opacity:0
          }
          100.0000% {
            transform:translate(36.059px,57.787px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Thermohaline Overturning">
        <path class="basin" d="M12 43H128V121H12Z"/>
        <path class="surface" d="M12 43H128"/>
        <path class="warm-ribbon" d="M39 52Q70 43 104 56"/>
        <path class="sinking" d="M108 55Q125 78 112 102"/>
        <path class="deep-ribbon" d="M109 105Q74 117 34 104"/>
        <path class="mixing-ribbon" d="M36 103Q12 79 40 55"/>
        <path class="transport" d="M67 48H79M75 45L79 48L75 51M83 110H70M74 107L70 110L74 113"/>
        <path class="mixing" d="M18 92Q13 86 18 80T18 67M27 94Q22 86 27 78T27 62M36 94Q31 85 36 76T36 60M15 70L18 66L21 70M24 65L27 61L30 65M33 63L36 59L39 63"/>
        <path class="ice" d="M98 34L106 36L113 33L125 35V41L117 44L110 41L103 44L98 41Z"/>
        <path class="sinking-arrow" d="M126 64V82M123 78L126 82L129 78"/>
        <g class="parcel-0" transform="translate(70,49)">
          <circle class="water-parcel color-0" r="4" fill="rgb(243 201 119)"/>
          <path class="salt-mark mark-0" opacity="0" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-0" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(70,44)"/>
        <g class="parcel-1" transform="translate(103.941,57.787)">
          <circle class="water-parcel color-1" r="4" fill="rgb(224 201 138)"/>
          <path class="salt-mark mark-1" opacity="0.156" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-1" x="-1" y="-1" width="2" height="2" opacity="0.707" transform="translate(103.941,47.447)"/>
        <g class="parcel-2" transform="translate(118,79)">
          <circle class="water-parcel color-2" r="4" fill="rgb(119 201 239)"/>
          <path class="salt-mark mark-2" opacity="1" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-2" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(118,79)"/>
        <g class="parcel-3" transform="translate(103.941,100.213)">
          <circle class="water-parcel color-3" r="4" fill="rgb(119 201 239)"/>
          <path class="salt-mark mark-3" opacity="1" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-3" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(103.941,100.213)"/>
        <g class="parcel-4" transform="translate(70,109)">
          <circle class="water-parcel color-4" r="4" fill="rgb(119 201 239)"/>
          <path class="salt-mark mark-4" opacity="1" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-4" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(70,109)"/>
        <g class="parcel-5" transform="translate(36.059,100.213)">
          <circle class="water-parcel color-5" r="4" fill="rgb(119 201 239)"/>
          <path class="salt-mark mark-5" opacity="1" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-5" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(36.059,100.213)"/>
        <g class="parcel-6" transform="translate(22,79)">
          <circle class="water-parcel color-6" r="4" fill="rgb(119 201 239)"/>
          <path class="salt-mark mark-6" opacity="1" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-6" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(22,79)"/>
        <g class="parcel-7" transform="translate(36.059,57.787)">
          <circle class="water-parcel color-7" r="4" fill="rgb(181 201 179)"/>
          <path class="salt-mark mark-7" opacity="0.5" d="M-2 -1H2M-2 1H2"/>
        </g>
        <rect class="salt-fleck fleck-7" x="-1" y="-1" width="2" height="2" opacity="0" transform="translate(36.059,57.787)"/>
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

if (!customElements.get("concept-thermohaline-overturning")) {
  customElements.define("concept-thermohaline-overturning", ConceptThermohalineOverturning);
}
