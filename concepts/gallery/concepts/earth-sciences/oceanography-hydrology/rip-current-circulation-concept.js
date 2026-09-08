// Rip-Current Circulation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRipCurrentCirculation extends HTMLElement {
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
        .sea {
          fill:#0b2630;
          stroke:#375b51;
          stroke-width:1
        }
        .beach {
          fill:#3b3521
        }
        .sand {
          stroke:#84734b;
          stroke-width:1
        }
        .bar {
          fill:#686442;
          opacity:.45
        }
        .circulation-ribbon {
          fill:none;
          stroke:#77c9ef;
          stroke-width:6;
          opacity:.09
        }
        .incoming-crests {
          fill:none;
          stroke:#b1e3df;
          stroke-width:1.2;
          animation:rip-crests 2s linear infinite
        }
        .jet,.feeders {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.3
        }
        .water-marker {
          fill:#77c9ef;
          stroke:#07120f;
          stroke-width:.6
        }
        .marker-0 {
          animation:rip-marker-0 16s linear infinite
        }
        @keyframes rip-marker-0 {
          0.0000% {
            transform:translate(62.665px,68px)
          }
          0.3125% {
            transform:translate(62.662px,67.243px)
          }
          0.6250% {
            transform:translate(62.653px,66.487px)
          }
          0.9375% {
            transform:translate(62.639px,65.732px)
          }
          1.2500% {
            transform:translate(62.619px,64.979px)
          }
          1.5625% {
            transform:translate(62.593px,64.228px)
          }
          1.8750% {
            transform:translate(62.562px,63.481px)
          }
          2.1875% {
            transform:translate(62.525px,62.738px)
          }
          2.5000% {
            transform:translate(62.482px,61.999px)
          }
          2.8125% {
            transform:translate(62.433px,61.265px)
          }
          3.1250% {
            transform:translate(62.379px,60.537px)
          }
          3.4375% {
            transform:translate(62.319px,59.815px)
          }
          3.7500% {
            transform:translate(62.252px,59.099px)
          }
          4.0625% {
            transform:translate(62.18px,58.391px)
          }
          4.3750% {
            transform:translate(62.102px,57.691px)
          }
          4.6875% {
            transform:translate(62.018px,56.999px)
          }
          5.0000% {
            transform:translate(61.928px,56.315px)
          }
          5.3125% {
            transform:translate(61.832px,55.641px)
          }
          5.6250% {
            transform:translate(61.729px,54.975px)
          }
          5.9375% {
            transform:translate(61.621px,54.32px)
          }
          6.2500% {
            transform:translate(61.506px,53.675px)
          }
          6.5625% {
            transform:translate(61.385px,53.04px)
          }
          6.8750% {
            transform:translate(61.257px,52.416px)
          }
          7.1875% {
            transform:translate(61.123px,51.802px)
          }
          7.5000% {
            transform:translate(60.983px,51.2px)
          }
          7.8125% {
            transform:translate(60.836px,50.61px)
          }
          8.1250% {
            transform:translate(60.682px,50.03px)
          }
          8.4375% {
            transform:translate(60.521px,49.463px)
          }
          8.7500% {
            transform:translate(60.354px,48.907px)
          }
          9.0625% {
            transform:translate(60.18px,48.363px)
          }
          9.3750% {
            transform:translate(59.999px,47.831px)
          }
          9.6875% {
            transform:translate(59.811px,47.311px)
          }
          10.0000% {
            transform:translate(59.616px,46.804px)
          }
          10.3125% {
            transform:translate(59.414px,46.308px)
          }
          10.6250% {
            transform:translate(59.205px,45.825px)
          }
          10.9375% {
            transform:translate(58.988px,45.354px)
          }
          11.2500% {
            transform:translate(58.765px,44.895px)
          }
          11.5625% {
            transform:translate(58.533px,44.448px)
          }
          11.8750% {
            transform:translate(58.295px,44.013px)
          }
          12.1875% {
            transform:translate(58.048px,43.591px)
          }
          12.5000% {
            transform:translate(57.795px,43.18px)
          }
          12.8125% {
            transform:translate(57.533px,42.781px)
          }
          13.1250% {
            transform:translate(57.264px,42.394px)
          }
          13.4375% {
            transform:translate(56.988px,42.019px)
          }
          13.7500% {
            transform:translate(56.703px,41.656px)
          }
          14.0625% {
            transform:translate(56.411px,41.304px)
          }
          14.3750% {
            transform:translate(56.111px,40.964px)
          }
          14.6875% {
            transform:translate(55.804px,40.635px)
          }
          15.0000% {
            transform:translate(55.489px,40.317px)
          }
          15.3125% {
            transform:translate(55.166px,40.011px)
          }
          15.6250% {
            transform:translate(54.835px,39.715px)
          }
          15.9375% {
            transform:translate(54.496px,39.431px)
          }
          16.2500% {
            transform:translate(54.15px,39.158px)
          }
          16.5625% {
            transform:translate(53.796px,38.895px)
          }
          16.8750% {
            transform:translate(53.435px,38.643px)
          }
          17.1875% {
            transform:translate(53.067px,38.401px)
          }
          17.5000% {
            transform:translate(52.691px,38.17px)
          }
          17.8125% {
            transform:translate(52.308px,37.949px)
          }
          18.1250% {
            transform:translate(51.917px,37.739px)
          }
          18.4375% {
            transform:translate(51.52px,37.538px)
          }
          18.7500% {
            transform:translate(51.116px,37.348px)
          }
          19.0625% {
            transform:translate(50.705px,37.167px)
          }
          19.3750% {
            transform:translate(50.288px,36.997px)
          }
          19.6875% {
            transform:translate(49.865px,36.836px)
          }
          20.0000% {
            transform:translate(49.436px,36.685px)
          }
          20.3125% {
            transform:translate(49.001px,36.543px)
          }
          20.6250% {
            transform:translate(48.56px,36.411px)
          }
          20.9375% {
            transform:translate(48.115px,36.288px)
          }
          21.2500% {
            transform:translate(47.664px,36.175px)
          }
          21.5625% {
            transform:translate(47.209px,36.071px)
          }
          21.8750% {
            transform:translate(46.749px,35.976px)
          }
          22.1875% {
            transform:translate(46.286px,35.89px)
          }
          22.5000% {
            transform:translate(45.819px,35.814px)
          }
          22.8125% {
            transform:translate(45.349px,35.746px)
          }
          23.1250% {
            transform:translate(44.876px,35.688px)
          }
          23.4375% {
            transform:translate(44.4px,35.639px)
          }
          23.7500% {
            transform:translate(43.923px,35.599px)
          }
          24.0625% {
            transform:translate(43.444px,35.567px)
          }
          24.3750% {
            transform:translate(42.963px,35.545px)
          }
          24.6875% {
            transform:translate(42.482px,35.532px)
          }
          25.0000% {
            transform:translate(42.0px,35.527px)
          }
          25.3125% {
            transform:translate(41.518px,35.532px)
          }
          25.6250% {
            transform:translate(41.037px,35.545px)
          }
          25.9375% {
            transform:translate(40.556px,35.567px)
          }
          26.2500% {
            transform:translate(40.077px,35.599px)
          }
          26.5625% {
            transform:translate(39.6px,35.639px)
          }
          26.8750% {
            transform:translate(39.124px,35.688px)
          }
          27.1875% {
            transform:translate(38.651px,35.746px)
          }
          27.5000% {
            transform:translate(38.181px,35.814px)
          }
          27.8125% {
            transform:translate(37.714px,35.89px)
          }
          28.1250% {
            transform:translate(37.251px,35.976px)
          }
          28.4375% {
            transform:translate(36.791px,36.071px)
          }
          28.7500% {
            transform:translate(36.336px,36.175px)
          }
          29.0625% {
            transform:translate(35.885px,36.288px)
          }
          29.3750% {
            transform:translate(35.44px,36.411px)
          }
          29.6875% {
            transform:translate(34.999px,36.543px)
          }
          30.0000% {
            transform:translate(34.564px,36.685px)
          }
          30.3125% {
            transform:translate(34.135px,36.836px)
          }
          30.6250% {
            transform:translate(33.712px,36.997px)
          }
          30.9375% {
            transform:translate(33.295px,37.167px)
          }
          31.2500% {
            transform:translate(32.884px,37.348px)
          }
          31.5625% {
            transform:translate(32.48px,37.538px)
          }
          31.8750% {
            transform:translate(32.083px,37.739px)
          }
          32.1875% {
            transform:translate(31.692px,37.949px)
          }
          32.5000% {
            transform:translate(31.309px,38.17px)
          }
          32.8125% {
            transform:translate(30.933px,38.401px)
          }
          33.1250% {
            transform:translate(30.565px,38.643px)
          }
          33.4375% {
            transform:translate(30.204px,38.895px)
          }
          33.7500% {
            transform:translate(29.85px,39.158px)
          }
          34.0625% {
            transform:translate(29.504px,39.431px)
          }
          34.3750% {
            transform:translate(29.165px,39.715px)
          }
          34.6875% {
            transform:translate(28.835px,40.011px)
          }
          35.0000% {
            transform:translate(28.511px,40.317px)
          }
          35.3125% {
            transform:translate(28.196px,40.635px)
          }
          35.6250% {
            transform:translate(27.889px,40.964px)
          }
          35.9375% {
            transform:translate(27.589px,41.304px)
          }
          36.2500% {
            transform:translate(27.297px,41.656px)
          }
          36.5625% {
            transform:translate(27.012px,42.019px)
          }
          36.8750% {
            transform:translate(26.736px,42.394px)
          }
          37.1875% {
            transform:translate(26.467px,42.781px)
          }
          37.5000% {
            transform:translate(26.205px,43.18px)
          }
          37.8125% {
            transform:translate(25.952px,43.591px)
          }
          38.1250% {
            transform:translate(25.705px,44.013px)
          }
          38.4375% {
            transform:translate(25.467px,44.448px)
          }
          38.7500% {
            transform:translate(25.235px,44.895px)
          }
          39.0625% {
            transform:translate(25.012px,45.354px)
          }
          39.3750% {
            transform:translate(24.795px,45.825px)
          }
          39.6875% {
            transform:translate(24.586px,46.308px)
          }
          40.0000% {
            transform:translate(24.384px,46.804px)
          }
          40.3125% {
            transform:translate(24.189px,47.311px)
          }
          40.6250% {
            transform:translate(24.001px,47.831px)
          }
          40.9375% {
            transform:translate(23.82px,48.363px)
          }
          41.2500% {
            transform:translate(23.646px,48.907px)
          }
          41.5625% {
            transform:translate(23.479px,49.463px)
          }
          41.8750% {
            transform:translate(23.318px,50.03px)
          }
          42.1875% {
            transform:translate(23.164px,50.61px)
          }
          42.5000% {
            transform:translate(23.017px,51.2px)
          }
          42.8125% {
            transform:translate(22.877px,51.802px)
          }
          43.1250% {
            transform:translate(22.743px,52.416px)
          }
          43.4375% {
            transform:translate(22.615px,53.04px)
          }
          43.7500% {
            transform:translate(22.494px,53.675px)
          }
          44.0625% {
            transform:translate(22.379px,54.32px)
          }
          44.3750% {
            transform:translate(22.271px,54.975px)
          }
          44.6875% {
            transform:translate(22.168px,55.641px)
          }
          45.0000% {
            transform:translate(22.072px,56.315px)
          }
          45.3125% {
            transform:translate(21.982px,56.999px)
          }
          45.6250% {
            transform:translate(21.898px,57.691px)
          }
          45.9375% {
            transform:translate(21.82px,58.391px)
          }
          46.2500% {
            transform:translate(21.748px,59.099px)
          }
          46.5625% {
            transform:translate(21.681px,59.815px)
          }
          46.8750% {
            transform:translate(21.621px,60.537px)
          }
          47.1875% {
            transform:translate(21.567px,61.265px)
          }
          47.5000% {
            transform:translate(21.518px,61.999px)
          }
          47.8125% {
            transform:translate(21.475px,62.738px)
          }
          48.1250% {
            transform:translate(21.438px,63.481px)
          }
          48.4375% {
            transform:translate(21.407px,64.228px)
          }
          48.7500% {
            transform:translate(21.381px,64.979px)
          }
          49.0625% {
            transform:translate(21.361px,65.732px)
          }
          49.3750% {
            transform:translate(21.347px,66.487px)
          }
          49.6875% {
            transform:translate(21.338px,67.243px)
          }
          50.0000% {
            transform:translate(21.335px,68.0px)
          }
          50.3125% {
            transform:translate(21.338px,68.757px)
          }
          50.6250% {
            transform:translate(21.347px,69.513px)
          }
          50.9375% {
            transform:translate(21.361px,70.268px)
          }
          51.2500% {
            transform:translate(21.381px,71.021px)
          }
          51.5625% {
            transform:translate(21.407px,71.772px)
          }
          51.8750% {
            transform:translate(21.438px,72.519px)
          }
          52.1875% {
            transform:translate(21.475px,73.262px)
          }
          52.5000% {
            transform:translate(21.518px,74.001px)
          }
          52.8125% {
            transform:translate(21.567px,74.735px)
          }
          53.1250% {
            transform:translate(21.621px,75.463px)
          }
          53.4375% {
            transform:translate(21.681px,76.185px)
          }
          53.7500% {
            transform:translate(21.748px,76.901px)
          }
          54.0625% {
            transform:translate(21.82px,77.609px)
          }
          54.3750% {
            transform:translate(21.898px,78.309px)
          }
          54.6875% {
            transform:translate(21.982px,79.001px)
          }
          55.0000% {
            transform:translate(22.072px,79.685px)
          }
          55.3125% {
            transform:translate(22.168px,80.359px)
          }
          55.6250% {
            transform:translate(22.271px,81.025px)
          }
          55.9375% {
            transform:translate(22.379px,81.68px)
          }
          56.2500% {
            transform:translate(22.494px,82.325px)
          }
          56.5625% {
            transform:translate(22.615px,82.96px)
          }
          56.8750% {
            transform:translate(22.743px,83.584px)
          }
          57.1875% {
            transform:translate(22.877px,84.198px)
          }
          57.5000% {
            transform:translate(23.017px,84.8px)
          }
          57.8125% {
            transform:translate(23.164px,85.39px)
          }
          58.1250% {
            transform:translate(23.318px,85.97px)
          }
          58.4375% {
            transform:translate(23.479px,86.537px)
          }
          58.7500% {
            transform:translate(23.646px,87.093px)
          }
          59.0625% {
            transform:translate(23.82px,87.637px)
          }
          59.3750% {
            transform:translate(24.001px,88.169px)
          }
          59.6875% {
            transform:translate(24.189px,88.689px)
          }
          60.0000% {
            transform:translate(24.384px,89.196px)
          }
          60.3125% {
            transform:translate(24.586px,89.692px)
          }
          60.6250% {
            transform:translate(24.795px,90.175px)
          }
          60.9375% {
            transform:translate(25.012px,90.646px)
          }
          61.2500% {
            transform:translate(25.235px,91.105px)
          }
          61.5625% {
            transform:translate(25.467px,91.552px)
          }
          61.8750% {
            transform:translate(25.705px,91.987px)
          }
          62.1875% {
            transform:translate(25.952px,92.409px)
          }
          62.5000% {
            transform:translate(26.205px,92.82px)
          }
          62.8125% {
            transform:translate(26.467px,93.219px)
          }
          63.1250% {
            transform:translate(26.736px,93.606px)
          }
          63.4375% {
            transform:translate(27.012px,93.981px)
          }
          63.7500% {
            transform:translate(27.297px,94.344px)
          }
          64.0625% {
            transform:translate(27.589px,94.696px)
          }
          64.3750% {
            transform:translate(27.889px,95.036px)
          }
          64.6875% {
            transform:translate(28.196px,95.365px)
          }
          65.0000% {
            transform:translate(28.511px,95.683px)
          }
          65.3125% {
            transform:translate(28.835px,95.989px)
          }
          65.6250% {
            transform:translate(29.165px,96.285px)
          }
          65.9375% {
            transform:translate(29.504px,96.569px)
          }
          66.2500% {
            transform:translate(29.85px,96.842px)
          }
          66.5625% {
            transform:translate(30.204px,97.105px)
          }
          66.8750% {
            transform:translate(30.565px,97.357px)
          }
          67.1875% {
            transform:translate(30.933px,97.599px)
          }
          67.5000% {
            transform:translate(31.309px,97.83px)
          }
          67.8125% {
            transform:translate(31.692px,98.051px)
          }
          68.1250% {
            transform:translate(32.083px,98.261px)
          }
          68.4375% {
            transform:translate(32.48px,98.462px)
          }
          68.7500% {
            transform:translate(32.884px,98.652px)
          }
          69.0625% {
            transform:translate(33.295px,98.833px)
          }
          69.3750% {
            transform:translate(33.712px,99.003px)
          }
          69.6875% {
            transform:translate(34.135px,99.164px)
          }
          70.0000% {
            transform:translate(34.564px,99.315px)
          }
          70.3125% {
            transform:translate(34.999px,99.457px)
          }
          70.6250% {
            transform:translate(35.44px,99.589px)
          }
          70.9375% {
            transform:translate(35.885px,99.712px)
          }
          71.2500% {
            transform:translate(36.336px,99.825px)
          }
          71.5625% {
            transform:translate(36.791px,99.929px)
          }
          71.8750% {
            transform:translate(37.251px,100.024px)
          }
          72.1875% {
            transform:translate(37.714px,100.11px)
          }
          72.5000% {
            transform:translate(38.181px,100.186px)
          }
          72.8125% {
            transform:translate(38.651px,100.254px)
          }
          73.1250% {
            transform:translate(39.124px,100.312px)
          }
          73.4375% {
            transform:translate(39.6px,100.361px)
          }
          73.7500% {
            transform:translate(40.077px,100.401px)
          }
          74.0625% {
            transform:translate(40.556px,100.433px)
          }
          74.3750% {
            transform:translate(41.037px,100.455px)
          }
          74.6875% {
            transform:translate(41.518px,100.468px)
          }
          75.0000% {
            transform:translate(42.0px,100.473px)
          }
          75.3125% {
            transform:translate(42.482px,100.468px)
          }
          75.6250% {
            transform:translate(42.963px,100.455px)
          }
          75.9375% {
            transform:translate(43.444px,100.433px)
          }
          76.2500% {
            transform:translate(43.923px,100.401px)
          }
          76.5625% {
            transform:translate(44.4px,100.361px)
          }
          76.8750% {
            transform:translate(44.876px,100.312px)
          }
          77.1875% {
            transform:translate(45.349px,100.254px)
          }
          77.5000% {
            transform:translate(45.819px,100.186px)
          }
          77.8125% {
            transform:translate(46.286px,100.11px)
          }
          78.1250% {
            transform:translate(46.749px,100.024px)
          }
          78.4375% {
            transform:translate(47.209px,99.929px)
          }
          78.7500% {
            transform:translate(47.664px,99.825px)
          }
          79.0625% {
            transform:translate(48.115px,99.712px)
          }
          79.3750% {
            transform:translate(48.56px,99.589px)
          }
          79.6875% {
            transform:translate(49.001px,99.457px)
          }
          80.0000% {
            transform:translate(49.436px,99.315px)
          }
          80.3125% {
            transform:translate(49.865px,99.164px)
          }
          80.6250% {
            transform:translate(50.288px,99.003px)
          }
          80.9375% {
            transform:translate(50.705px,98.833px)
          }
          81.2500% {
            transform:translate(51.116px,98.652px)
          }
          81.5625% {
            transform:translate(51.52px,98.462px)
          }
          81.8750% {
            transform:translate(51.917px,98.261px)
          }
          82.1875% {
            transform:translate(52.308px,98.051px)
          }
          82.5000% {
            transform:translate(52.691px,97.83px)
          }
          82.8125% {
            transform:translate(53.067px,97.599px)
          }
          83.1250% {
            transform:translate(53.435px,97.357px)
          }
          83.4375% {
            transform:translate(53.796px,97.105px)
          }
          83.7500% {
            transform:translate(54.15px,96.842px)
          }
          84.0625% {
            transform:translate(54.496px,96.569px)
          }
          84.3750% {
            transform:translate(54.835px,96.285px)
          }
          84.6875% {
            transform:translate(55.165px,95.989px)
          }
          85.0000% {
            transform:translate(55.489px,95.683px)
          }
          85.3125% {
            transform:translate(55.804px,95.365px)
          }
          85.6250% {
            transform:translate(56.111px,95.036px)
          }
          85.9375% {
            transform:translate(56.411px,94.696px)
          }
          86.2500% {
            transform:translate(56.703px,94.344px)
          }
          86.5625% {
            transform:translate(56.988px,93.981px)
          }
          86.8750% {
            transform:translate(57.264px,93.606px)
          }
          87.1875% {
            transform:translate(57.533px,93.219px)
          }
          87.5000% {
            transform:translate(57.795px,92.82px)
          }
          87.8125% {
            transform:translate(58.048px,92.409px)
          }
          88.1250% {
            transform:translate(58.295px,91.987px)
          }
          88.4375% {
            transform:translate(58.533px,91.552px)
          }
          88.7500% {
            transform:translate(58.765px,91.105px)
          }
          89.0625% {
            transform:translate(58.988px,90.646px)
          }
          89.3750% {
            transform:translate(59.205px,90.175px)
          }
          89.6875% {
            transform:translate(59.414px,89.692px)
          }
          90.0000% {
            transform:translate(59.616px,89.196px)
          }
          90.3125% {
            transform:translate(59.811px,88.689px)
          }
          90.6250% {
            transform:translate(59.999px,88.169px)
          }
          90.9375% {
            transform:translate(60.18px,87.637px)
          }
          91.2500% {
            transform:translate(60.354px,87.093px)
          }
          91.5625% {
            transform:translate(60.521px,86.537px)
          }
          91.8750% {
            transform:translate(60.682px,85.97px)
          }
          92.1875% {
            transform:translate(60.836px,85.39px)
          }
          92.5000% {
            transform:translate(60.983px,84.8px)
          }
          92.8125% {
            transform:translate(61.123px,84.198px)
          }
          93.1250% {
            transform:translate(61.257px,83.584px)
          }
          93.4375% {
            transform:translate(61.385px,82.96px)
          }
          93.7500% {
            transform:translate(61.506px,82.325px)
          }
          94.0625% {
            transform:translate(61.621px,81.68px)
          }
          94.3750% {
            transform:translate(61.729px,81.025px)
          }
          94.6875% {
            transform:translate(61.832px,80.359px)
          }
          95.0000% {
            transform:translate(61.928px,79.685px)
          }
          95.3125% {
            transform:translate(62.018px,79.001px)
          }
          95.6250% {
            transform:translate(62.102px,78.309px)
          }
          95.9375% {
            transform:translate(62.18px,77.609px)
          }
          96.2500% {
            transform:translate(62.252px,76.901px)
          }
          96.5625% {
            transform:translate(62.319px,76.185px)
          }
          96.8750% {
            transform:translate(62.379px,75.463px)
          }
          97.1875% {
            transform:translate(62.433px,74.735px)
          }
          97.5000% {
            transform:translate(62.482px,74.001px)
          }
          97.8125% {
            transform:translate(62.525px,73.262px)
          }
          98.1250% {
            transform:translate(62.562px,72.519px)
          }
          98.4375% {
            transform:translate(62.593px,71.772px)
          }
          98.7500% {
            transform:translate(62.619px,71.021px)
          }
          99.0625% {
            transform:translate(62.639px,70.268px)
          }
          99.3750% {
            transform:translate(62.653px,69.513px)
          }
          99.6875% {
            transform:translate(62.662px,68.757px)
          }
          100.0000% {
            transform:translate(62.665px,68px)
          }
        }
        .marker-1 {
          animation:rip-marker-1 16s linear infinite
        }
        @keyframes rip-marker-1 {
          0.0000% {
            transform:translate(30.323px,38.81px)
          }
          0.3125% {
            transform:translate(29.967px,39.069px)
          }
          0.6250% {
            transform:translate(29.618px,39.339px)
          }
          0.9375% {
            transform:translate(29.277px,39.619px)
          }
          1.2500% {
            transform:translate(28.944px,39.911px)
          }
          1.5625% {
            transform:translate(28.618px,40.214px)
          }
          1.8750% {
            transform:translate(28.3px,40.528px)
          }
          2.1875% {
            transform:translate(27.99px,40.853px)
          }
          2.5000% {
            transform:translate(27.688px,41.189px)
          }
          2.8125% {
            transform:translate(27.393px,41.537px)
          }
          3.1250% {
            transform:translate(27.106px,41.897px)
          }
          3.4375% {
            transform:translate(26.827px,42.268px)
          }
          3.7500% {
            transform:translate(26.556px,42.651px)
          }
          4.0625% {
            transform:translate(26.292px,43.046px)
          }
          4.3750% {
            transform:translate(26.035px,43.452px)
          }
          4.6875% {
            transform:translate(25.787px,43.871px)
          }
          5.0000% {
            transform:translate(25.545px,44.302px)
          }
          5.3125% {
            transform:translate(25.312px,44.744px)
          }
          5.6250% {
            transform:translate(25.085px,45.199px)
          }
          5.9375% {
            transform:translate(24.866px,45.666px)
          }
          6.2500% {
            transform:translate(24.655px,46.146px)
          }
          6.5625% {
            transform:translate(24.45px,46.637px)
          }
          6.8750% {
            transform:translate(24.253px,47.141px)
          }
          7.1875% {
            transform:translate(24.063px,47.657px)
          }
          7.5000% {
            transform:translate(23.879px,48.184px)
          }
          7.8125% {
            transform:translate(23.703px,48.724px)
          }
          8.1250% {
            transform:translate(23.533px,49.276px)
          }
          8.4375% {
            transform:translate(23.371px,49.84px)
          }
          8.7500% {
            transform:translate(23.215px,50.415px)
          }
          9.0625% {
            transform:translate(23.066px,51.002px)
          }
          9.3750% {
            transform:translate(22.923px,51.6px)
          }
          9.6875% {
            transform:translate(22.787px,52.21px)
          }
          10.0000% {
            transform:translate(22.657px,52.831px)
          }
          10.3125% {
            transform:translate(22.534px,53.462px)
          }
          10.6250% {
            transform:translate(22.417px,54.104px)
          }
          10.9375% {
            transform:translate(22.306px,54.756px)
          }
          11.2500% {
            transform:translate(22.202px,55.418px)
          }
          11.5625% {
            transform:translate(22.103px,56.089px)
          }
          11.8750% {
            transform:translate(22.011px,56.77px)
          }
          12.1875% {
            transform:translate(21.925px,57.459px)
          }
          12.5000% {
            transform:translate(21.845px,58.157px)
          }
          12.8125% {
            transform:translate(21.771px,58.862px)
          }
          13.1250% {
            transform:translate(21.703px,59.575px)
          }
          13.4375% {
            transform:translate(21.64px,60.295px)
          }
          13.7500% {
            transform:translate(21.584px,61.021px)
          }
          14.0625% {
            transform:translate(21.533px,61.753px)
          }
          14.3750% {
            transform:translate(21.489px,62.491px)
          }
          14.6875% {
            transform:translate(21.45px,63.233px)
          }
          15.0000% {
            transform:translate(21.416px,63.979px)
          }
          15.3125% {
            transform:translate(21.389px,64.728px)
          }
          15.6250% {
            transform:translate(21.367px,65.48px)
          }
          15.9375% {
            transform:translate(21.351px,66.235px)
          }
          16.2500% {
            transform:translate(21.34px,66.991px)
          }
          16.5625% {
            transform:translate(21.336px,67.748px)
          }
          16.8750% {
            transform:translate(21.337px,68.505px)
          }
          17.1875% {
            transform:translate(21.343px,69.261px)
          }
          17.5000% {
            transform:translate(21.356px,70.017px)
          }
          17.8125% {
            transform:translate(21.374px,70.771px)
          }
          18.1250% {
            transform:translate(21.397px,71.522px)
          }
          18.4375% {
            transform:translate(21.427px,72.27px)
          }
          18.7500% {
            transform:translate(21.462px,73.015px)
          }
          19.0625% {
            transform:translate(21.503px,73.756px)
          }
          19.3750% {
            transform:translate(21.55px,74.491px)
          }
          19.6875% {
            transform:translate(21.602px,75.221px)
          }
          20.0000% {
            transform:translate(21.661px,75.945px)
          }
          20.3125% {
            transform:translate(21.725px,76.663px)
          }
          20.6250% {
            transform:translate(21.795px,77.374px)
          }
          20.9375% {
            transform:translate(21.871px,78.077px)
          }
          21.2500% {
            transform:translate(21.953px,78.771px)
          }
          21.5625% {
            transform:translate(22.041px,79.458px)
          }
          21.8750% {
            transform:translate(22.135px,80.136px)
          }
          22.1875% {
            transform:translate(22.236px,80.804px)
          }
          22.5000% {
            transform:translate(22.342px,81.463px)
          }
          22.8125% {
            transform:translate(22.455px,82.111px)
          }
          23.1250% {
            transform:translate(22.574px,82.75px)
          }
          23.4375% {
            transform:translate(22.7px,83.377px)
          }
          23.7500% {
            transform:translate(22.831px,83.994px)
          }
          24.0625% {
            transform:translate(22.97px,84.6px)
          }
          24.3750% {
            transform:translate(23.115px,85.195px)
          }
          24.6875% {
            transform:translate(23.266px,85.778px)
          }
          25.0000% {
            transform:translate(23.424px,86.349px)
          }
          25.3125% {
            transform:translate(23.589px,86.909px)
          }
          25.6250% {
            transform:translate(23.761px,87.457px)
          }
          25.9375% {
            transform:translate(23.94px,87.993px)
          }
          26.2500% {
            transform:translate(24.125px,88.517px)
          }
          26.5625% {
            transform:translate(24.318px,89.028px)
          }
          26.8750% {
            transform:translate(24.518px,89.528px)
          }
          27.1875% {
            transform:translate(24.724px,90.015px)
          }
          27.5000% {
            transform:translate(24.939px,90.491px)
          }
          27.8125% {
            transform:translate(25.16px,90.954px)
          }
          28.1250% {
            transform:translate(25.389px,91.404px)
          }
          28.4375% {
            transform:translate(25.625px,91.843px)
          }
          28.7500% {
            transform:translate(25.869px,92.27px)
          }
          29.0625% {
            transform:translate(26.12px,92.685px)
          }
          29.3750% {
            transform:translate(26.379px,93.087px)
          }
          29.6875% {
            transform:translate(26.645px,93.478px)
          }
          30.0000% {
            transform:translate(26.919px,93.857px)
          }
          30.3125% {
            transform:translate(27.201px,94.224px)
          }
          30.6250% {
            transform:translate(27.491px,94.58px)
          }
          30.9375% {
            transform:translate(27.788px,94.924px)
          }
          31.2500% {
            transform:translate(28.093px,95.257px)
          }
          31.5625% {
            transform:translate(28.405px,95.578px)
          }
          31.8750% {
            transform:translate(28.726px,95.888px)
          }
          32.1875% {
            transform:translate(29.054px,96.187px)
          }
          32.5000% {
            transform:translate(29.39px,96.475px)
          }
          32.8125% {
            transform:translate(29.734px,96.753px)
          }
          33.1250% {
            transform:translate(30.085px,97.019px)
          }
          33.4375% {
            transform:translate(30.443px,97.274px)
          }
          33.7500% {
            transform:translate(30.81px,97.519px)
          }
          34.0625% {
            transform:translate(31.183px,97.754px)
          }
          34.3750% {
            transform:translate(31.564px,97.978px)
          }
          34.6875% {
            transform:translate(31.952px,98.192px)
          }
          35.0000% {
            transform:translate(32.347px,98.396px)
          }
          35.3125% {
            transform:translate(32.749px,98.59px)
          }
          35.6250% {
            transform:translate(33.157px,98.774px)
          }
          35.9375% {
            transform:translate(33.572px,98.948px)
          }
          36.2500% {
            transform:translate(33.993px,99.112px)
          }
          36.5625% {
            transform:translate(34.42px,99.266px)
          }
          36.8750% {
            transform:translate(34.854px,99.411px)
          }
          37.1875% {
            transform:translate(35.292px,99.546px)
          }
          37.5000% {
            transform:translate(35.736px,99.672px)
          }
          37.8125% {
            transform:translate(36.185px,99.789px)
          }
          38.1250% {
            transform:translate(36.639px,99.896px)
          }
          38.4375% {
            transform:translate(37.097px,99.994px)
          }
          38.7500% {
            transform:translate(37.559px,100.082px)
          }
          39.0625% {
            transform:translate(38.025px,100.162px)
          }
          39.3750% {
            transform:translate(38.494px,100.232px)
          }
          39.6875% {
            transform:translate(38.966px,100.293px)
          }
          40.0000% {
            transform:translate(39.441px,100.346px)
          }
          40.3125% {
            transform:translate(39.918px,100.389px)
          }
          40.6250% {
            transform:translate(40.397px,100.423px)
          }
          40.9375% {
            transform:translate(40.877px,100.449px)
          }
          41.2500% {
            transform:translate(41.358px,100.465px)
          }
          41.5625% {
            transform:translate(41.839px,100.472px)
          }
          41.8750% {
            transform:translate(42.321px,100.471px)
          }
          42.1875% {
            transform:translate(42.803px,100.46px)
          }
          42.5000% {
            transform:translate(43.283px,100.441px)
          }
          42.8125% {
            transform:translate(43.763px,100.413px)
          }
          43.1250% {
            transform:translate(44.241px,100.376px)
          }
          43.4375% {
            transform:translate(44.718px,100.329px)
          }
          43.7500% {
            transform:translate(45.191px,100.274px)
          }
          44.0625% {
            transform:translate(45.663px,100.21px)
          }
          44.3750% {
            transform:translate(46.131px,100.136px)
          }
          44.6875% {
            transform:translate(46.595px,100.054px)
          }
          45.0000% {
            transform:translate(47.056px,99.962px)
          }
          45.3125% {
            transform:translate(47.513px,99.861px)
          }
          45.6250% {
            transform:translate(47.965px,99.751px)
          }
          45.9375% {
            transform:translate(48.412px,99.631px)
          }
          46.2500% {
            transform:translate(48.855px,99.502px)
          }
          46.5625% {
            transform:translate(49.291px,99.364px)
          }
          46.8750% {
            transform:translate(49.723px,99.216px)
          }
          47.1875% {
            transform:translate(50.148px,99.058px)
          }
          47.5000% {
            transform:translate(50.567px,98.891px)
          }
          47.8125% {
            transform:translate(50.98px,98.713px)
          }
          48.1250% {
            transform:translate(51.386px,98.526px)
          }
          48.4375% {
            transform:translate(51.786px,98.329px)
          }
          48.7500% {
            transform:translate(52.178px,98.122px)
          }
          49.0625% {
            transform:translate(52.564px,97.905px)
          }
          49.3750% {
            transform:translate(52.942px,97.677px)
          }
          49.6875% {
            transform:translate(53.313px,97.439px)
          }
          50.0000% {
            transform:translate(53.677px,97.19px)
          }
          50.3125% {
            transform:translate(54.033px,96.931px)
          }
          50.6250% {
            transform:translate(54.382px,96.661px)
          }
          50.9375% {
            transform:translate(54.723px,96.381px)
          }
          51.2500% {
            transform:translate(55.056px,96.089px)
          }
          51.5625% {
            transform:translate(55.382px,95.786px)
          }
          51.8750% {
            transform:translate(55.7px,95.472px)
          }
          52.1875% {
            transform:translate(56.01px,95.147px)
          }
          52.5000% {
            transform:translate(56.312px,94.811px)
          }
          52.8125% {
            transform:translate(56.607px,94.463px)
          }
          53.1250% {
            transform:translate(56.894px,94.103px)
          }
          53.4375% {
            transform:translate(57.173px,93.732px)
          }
          53.7500% {
            transform:translate(57.444px,93.349px)
          }
          54.0625% {
            transform:translate(57.708px,92.954px)
          }
          54.3750% {
            transform:translate(57.965px,92.548px)
          }
          54.6875% {
            transform:translate(58.213px,92.129px)
          }
          55.0000% {
            transform:translate(58.455px,91.698px)
          }
          55.3125% {
            transform:translate(58.688px,91.256px)
          }
          55.6250% {
            transform:translate(58.915px,90.801px)
          }
          55.9375% {
            transform:translate(59.134px,90.334px)
          }
          56.2500% {
            transform:translate(59.345px,89.854px)
          }
          56.5625% {
            transform:translate(59.55px,89.363px)
          }
          56.8750% {
            transform:translate(59.747px,88.859px)
          }
          57.1875% {
            transform:translate(59.937px,88.343px)
          }
          57.5000% {
            transform:translate(60.121px,87.816px)
          }
          57.8125% {
            transform:translate(60.297px,87.276px)
          }
          58.1250% {
            transform:translate(60.467px,86.724px)
          }
          58.4375% {
            transform:translate(60.629px,86.16px)
          }
          58.7500% {
            transform:translate(60.785px,85.585px)
          }
          59.0625% {
            transform:translate(60.934px,84.998px)
          }
          59.3750% {
            transform:translate(61.077px,84.4px)
          }
          59.6875% {
            transform:translate(61.213px,83.79px)
          }
          60.0000% {
            transform:translate(61.343px,83.169px)
          }
          60.3125% {
            transform:translate(61.466px,82.538px)
          }
          60.6250% {
            transform:translate(61.583px,81.896px)
          }
          60.9375% {
            transform:translate(61.694px,81.244px)
          }
          61.2500% {
            transform:translate(61.798px,80.582px)
          }
          61.5625% {
            transform:translate(61.897px,79.911px)
          }
          61.8750% {
            transform:translate(61.989px,79.23px)
          }
          62.1875% {
            transform:translate(62.075px,78.541px)
          }
          62.5000% {
            transform:translate(62.155px,77.843px)
          }
          62.8125% {
            transform:translate(62.229px,77.138px)
          }
          63.1250% {
            transform:translate(62.297px,76.425px)
          }
          63.4375% {
            transform:translate(62.36px,75.705px)
          }
          63.7500% {
            transform:translate(62.416px,74.979px)
          }
          64.0625% {
            transform:translate(62.467px,74.247px)
          }
          64.3750% {
            transform:translate(62.511px,73.509px)
          }
          64.6875% {
            transform:translate(62.55px,72.767px)
          }
          65.0000% {
            transform:translate(62.584px,72.021px)
          }
          65.3125% {
            transform:translate(62.611px,71.272px)
          }
          65.6250% {
            transform:translate(62.633px,70.52px)
          }
          65.9375% {
            transform:translate(62.649px,69.765px)
          }
          66.2500% {
            transform:translate(62.66px,69.009px)
          }
          66.5625% {
            transform:translate(62.664px,68.252px)
          }
          66.8750% {
            transform:translate(62.663px,67.495px)
          }
          67.1875% {
            transform:translate(62.657px,66.739px)
          }
          67.5000% {
            transform:translate(62.644px,65.983px)
          }
          67.8125% {
            transform:translate(62.626px,65.229px)
          }
          68.1250% {
            transform:translate(62.603px,64.478px)
          }
          68.4375% {
            transform:translate(62.573px,63.73px)
          }
          68.7500% {
            transform:translate(62.538px,62.985px)
          }
          69.0625% {
            transform:translate(62.497px,62.244px)
          }
          69.3750% {
            transform:translate(62.45px,61.509px)
          }
          69.6875% {
            transform:translate(62.398px,60.779px)
          }
          70.0000% {
            transform:translate(62.339px,60.055px)
          }
          70.3125% {
            transform:translate(62.275px,59.337px)
          }
          70.6250% {
            transform:translate(62.205px,58.626px)
          }
          70.9375% {
            transform:translate(62.129px,57.923px)
          }
          71.2500% {
            transform:translate(62.047px,57.229px)
          }
          71.5625% {
            transform:translate(61.959px,56.542px)
          }
          71.8750% {
            transform:translate(61.865px,55.864px)
          }
          72.1875% {
            transform:translate(61.764px,55.196px)
          }
          72.5000% {
            transform:translate(61.658px,54.537px)
          }
          72.8125% {
            transform:translate(61.545px,53.889px)
          }
          73.1250% {
            transform:translate(61.426px,53.25px)
          }
          73.4375% {
            transform:translate(61.3px,52.623px)
          }
          73.7500% {
            transform:translate(61.169px,52.006px)
          }
          74.0625% {
            transform:translate(61.03px,51.4px)
          }
          74.3750% {
            transform:translate(60.885px,50.805px)
          }
          74.6875% {
            transform:translate(60.734px,50.222px)
          }
          75.0000% {
            transform:translate(60.576px,49.651px)
          }
          75.3125% {
            transform:translate(60.411px,49.091px)
          }
          75.6250% {
            transform:translate(60.239px,48.543px)
          }
          75.9375% {
            transform:translate(60.06px,48.007px)
          }
          76.2500% {
            transform:translate(59.875px,47.483px)
          }
          76.5625% {
            transform:translate(59.682px,46.972px)
          }
          76.8750% {
            transform:translate(59.482px,46.472px)
          }
          77.1875% {
            transform:translate(59.276px,45.985px)
          }
          77.5000% {
            transform:translate(59.061px,45.509px)
          }
          77.8125% {
            transform:translate(58.84px,45.046px)
          }
          78.1250% {
            transform:translate(58.611px,44.596px)
          }
          78.4375% {
            transform:translate(58.375px,44.157px)
          }
          78.7500% {
            transform:translate(58.131px,43.73px)
          }
          79.0625% {
            transform:translate(57.88px,43.315px)
          }
          79.3750% {
            transform:translate(57.621px,42.913px)
          }
          79.6875% {
            transform:translate(57.355px,42.522px)
          }
          80.0000% {
            transform:translate(57.081px,42.143px)
          }
          80.3125% {
            transform:translate(56.799px,41.776px)
          }
          80.6250% {
            transform:translate(56.509px,41.42px)
          }
          80.9375% {
            transform:translate(56.212px,41.076px)
          }
          81.2500% {
            transform:translate(55.907px,40.743px)
          }
          81.5625% {
            transform:translate(55.595px,40.422px)
          }
          81.8750% {
            transform:translate(55.274px,40.112px)
          }
          82.1875% {
            transform:translate(54.946px,39.813px)
          }
          82.5000% {
            transform:translate(54.61px,39.525px)
          }
          82.8125% {
            transform:translate(54.266px,39.247px)
          }
          83.1250% {
            transform:translate(53.915px,38.981px)
          }
          83.4375% {
            transform:translate(53.557px,38.726px)
          }
          83.7500% {
            transform:translate(53.19px,38.481px)
          }
          84.0625% {
            transform:translate(52.817px,38.246px)
          }
          84.3750% {
            transform:translate(52.436px,38.022px)
          }
          84.6875% {
            transform:translate(52.048px,37.808px)
          }
          85.0000% {
            transform:translate(51.653px,37.604px)
          }
          85.3125% {
            transform:translate(51.251px,37.41px)
          }
          85.6250% {
            transform:translate(50.843px,37.226px)
          }
          85.9375% {
            transform:translate(50.428px,37.052px)
          }
          86.2500% {
            transform:translate(50.007px,36.888px)
          }
          86.5625% {
            transform:translate(49.58px,36.734px)
          }
          86.8750% {
            transform:translate(49.146px,36.589px)
          }
          87.1875% {
            transform:translate(48.708px,36.454px)
          }
          87.5000% {
            transform:translate(48.264px,36.328px)
          }
          87.8125% {
            transform:translate(47.815px,36.211px)
          }
          88.1250% {
            transform:translate(47.361px,36.104px)
          }
          88.4375% {
            transform:translate(46.903px,36.006px)
          }
          88.7500% {
            transform:translate(46.441px,35.918px)
          }
          89.0625% {
            transform:translate(45.975px,35.838px)
          }
          89.3750% {
            transform:translate(45.506px,35.768px)
          }
          89.6875% {
            transform:translate(45.034px,35.707px)
          }
          90.0000% {
            transform:translate(44.559px,35.654px)
          }
          90.3125% {
            transform:translate(44.082px,35.611px)
          }
          90.6250% {
            transform:translate(43.603px,35.577px)
          }
          90.9375% {
            transform:translate(43.123px,35.551px)
          }
          91.2500% {
            transform:translate(42.642px,35.535px)
          }
          91.5625% {
            transform:translate(42.161px,35.528px)
          }
          91.8750% {
            transform:translate(41.679px,35.529px)
          }
          92.1875% {
            transform:translate(41.197px,35.54px)
          }
          92.5000% {
            transform:translate(40.717px,35.559px)
          }
          92.8125% {
            transform:translate(40.237px,35.587px)
          }
          93.1250% {
            transform:translate(39.759px,35.624px)
          }
          93.4375% {
            transform:translate(39.282px,35.671px)
          }
          93.7500% {
            transform:translate(38.809px,35.726px)
          }
          94.0625% {
            transform:translate(38.337px,35.79px)
          }
          94.3750% {
            transform:translate(37.869px,35.864px)
          }
          94.6875% {
            transform:translate(37.405px,35.946px)
          }
          95.0000% {
            transform:translate(36.944px,36.038px)
          }
          95.3125% {
            transform:translate(36.487px,36.139px)
          }
          95.6250% {
            transform:translate(36.035px,36.249px)
          }
          95.9375% {
            transform:translate(35.588px,36.369px)
          }
          96.2500% {
            transform:translate(35.145px,36.498px)
          }
          96.5625% {
            transform:translate(34.709px,36.636px)
          }
          96.8750% {
            transform:translate(34.277px,36.784px)
          }
          97.1875% {
            transform:translate(33.852px,36.942px)
          }
          97.5000% {
            transform:translate(33.433px,37.109px)
          }
          97.8125% {
            transform:translate(33.02px,37.287px)
          }
          98.1250% {
            transform:translate(32.614px,37.474px)
          }
          98.4375% {
            transform:translate(32.214px,37.671px)
          }
          98.7500% {
            transform:translate(31.822px,37.878px)
          }
          99.0625% {
            transform:translate(31.436px,38.095px)
          }
          99.3750% {
            transform:translate(31.058px,38.323px)
          }
          99.6875% {
            transform:translate(30.687px,38.561px)
          }
          100.0000% {
            transform:translate(30.323px,38.81px)
          }
        }
        .marker-2 {
          animation:rip-marker-2 16s linear infinite
        }
        @keyframes rip-marker-2 {
          0.0000% {
            transform:translate(30.323px,97.19px)
          }
          0.3125% {
            transform:translate(30.687px,97.439px)
          }
          0.6250% {
            transform:translate(31.058px,97.677px)
          }
          0.9375% {
            transform:translate(31.436px,97.905px)
          }
          1.2500% {
            transform:translate(31.822px,98.122px)
          }
          1.5625% {
            transform:translate(32.214px,98.329px)
          }
          1.8750% {
            transform:translate(32.614px,98.526px)
          }
          2.1875% {
            transform:translate(33.02px,98.713px)
          }
          2.5000% {
            transform:translate(33.433px,98.891px)
          }
          2.8125% {
            transform:translate(33.852px,99.058px)
          }
          3.1250% {
            transform:translate(34.277px,99.216px)
          }
          3.4375% {
            transform:translate(34.709px,99.364px)
          }
          3.7500% {
            transform:translate(35.145px,99.502px)
          }
          4.0625% {
            transform:translate(35.588px,99.631px)
          }
          4.3750% {
            transform:translate(36.035px,99.751px)
          }
          4.6875% {
            transform:translate(36.487px,99.861px)
          }
          5.0000% {
            transform:translate(36.944px,99.962px)
          }
          5.3125% {
            transform:translate(37.405px,100.054px)
          }
          5.6250% {
            transform:translate(37.869px,100.136px)
          }
          5.9375% {
            transform:translate(38.337px,100.21px)
          }
          6.2500% {
            transform:translate(38.809px,100.274px)
          }
          6.5625% {
            transform:translate(39.282px,100.329px)
          }
          6.8750% {
            transform:translate(39.759px,100.376px)
          }
          7.1875% {
            transform:translate(40.237px,100.413px)
          }
          7.5000% {
            transform:translate(40.717px,100.441px)
          }
          7.8125% {
            transform:translate(41.197px,100.46px)
          }
          8.1250% {
            transform:translate(41.679px,100.471px)
          }
          8.4375% {
            transform:translate(42.161px,100.472px)
          }
          8.7500% {
            transform:translate(42.642px,100.465px)
          }
          9.0625% {
            transform:translate(43.123px,100.449px)
          }
          9.3750% {
            transform:translate(43.603px,100.423px)
          }
          9.6875% {
            transform:translate(44.082px,100.389px)
          }
          10.0000% {
            transform:translate(44.559px,100.346px)
          }
          10.3125% {
            transform:translate(45.034px,100.293px)
          }
          10.6250% {
            transform:translate(45.506px,100.232px)
          }
          10.9375% {
            transform:translate(45.975px,100.162px)
          }
          11.2500% {
            transform:translate(46.441px,100.082px)
          }
          11.5625% {
            transform:translate(46.903px,99.994px)
          }
          11.8750% {
            transform:translate(47.361px,99.896px)
          }
          12.1875% {
            transform:translate(47.815px,99.789px)
          }
          12.5000% {
            transform:translate(48.264px,99.672px)
          }
          12.8125% {
            transform:translate(48.708px,99.546px)
          }
          13.1250% {
            transform:translate(49.146px,99.411px)
          }
          13.4375% {
            transform:translate(49.58px,99.266px)
          }
          13.7500% {
            transform:translate(50.007px,99.112px)
          }
          14.0625% {
            transform:translate(50.428px,98.948px)
          }
          14.3750% {
            transform:translate(50.843px,98.774px)
          }
          14.6875% {
            transform:translate(51.251px,98.59px)
          }
          15.0000% {
            transform:translate(51.653px,98.396px)
          }
          15.3125% {
            transform:translate(52.048px,98.192px)
          }
          15.6250% {
            transform:translate(52.436px,97.978px)
          }
          15.9375% {
            transform:translate(52.817px,97.754px)
          }
          16.2500% {
            transform:translate(53.19px,97.519px)
          }
          16.5625% {
            transform:translate(53.557px,97.274px)
          }
          16.8750% {
            transform:translate(53.915px,97.019px)
          }
          17.1875% {
            transform:translate(54.266px,96.753px)
          }
          17.5000% {
            transform:translate(54.61px,96.475px)
          }
          17.8125% {
            transform:translate(54.946px,96.187px)
          }
          18.1250% {
            transform:translate(55.274px,95.888px)
          }
          18.4375% {
            transform:translate(55.595px,95.578px)
          }
          18.7500% {
            transform:translate(55.907px,95.257px)
          }
          19.0625% {
            transform:translate(56.212px,94.924px)
          }
          19.3750% {
            transform:translate(56.509px,94.58px)
          }
          19.6875% {
            transform:translate(56.799px,94.224px)
          }
          20.0000% {
            transform:translate(57.081px,93.857px)
          }
          20.3125% {
            transform:translate(57.355px,93.478px)
          }
          20.6250% {
            transform:translate(57.621px,93.087px)
          }
          20.9375% {
            transform:translate(57.88px,92.685px)
          }
          21.2500% {
            transform:translate(58.131px,92.27px)
          }
          21.5625% {
            transform:translate(58.375px,91.843px)
          }
          21.8750% {
            transform:translate(58.611px,91.404px)
          }
          22.1875% {
            transform:translate(58.84px,90.954px)
          }
          22.5000% {
            transform:translate(59.061px,90.491px)
          }
          22.8125% {
            transform:translate(59.276px,90.015px)
          }
          23.1250% {
            transform:translate(59.482px,89.528px)
          }
          23.4375% {
            transform:translate(59.682px,89.028px)
          }
          23.7500% {
            transform:translate(59.875px,88.517px)
          }
          24.0625% {
            transform:translate(60.06px,87.993px)
          }
          24.3750% {
            transform:translate(60.239px,87.457px)
          }
          24.6875% {
            transform:translate(60.411px,86.909px)
          }
          25.0000% {
            transform:translate(60.576px,86.349px)
          }
          25.3125% {
            transform:translate(60.734px,85.778px)
          }
          25.6250% {
            transform:translate(60.885px,85.195px)
          }
          25.9375% {
            transform:translate(61.03px,84.6px)
          }
          26.2500% {
            transform:translate(61.169px,83.994px)
          }
          26.5625% {
            transform:translate(61.3px,83.377px)
          }
          26.8750% {
            transform:translate(61.426px,82.75px)
          }
          27.1875% {
            transform:translate(61.545px,82.111px)
          }
          27.5000% {
            transform:translate(61.658px,81.463px)
          }
          27.8125% {
            transform:translate(61.764px,80.804px)
          }
          28.1250% {
            transform:translate(61.865px,80.136px)
          }
          28.4375% {
            transform:translate(61.959px,79.458px)
          }
          28.7500% {
            transform:translate(62.047px,78.771px)
          }
          29.0625% {
            transform:translate(62.129px,78.077px)
          }
          29.3750% {
            transform:translate(62.205px,77.374px)
          }
          29.6875% {
            transform:translate(62.275px,76.663px)
          }
          30.0000% {
            transform:translate(62.339px,75.945px)
          }
          30.3125% {
            transform:translate(62.398px,75.221px)
          }
          30.6250% {
            transform:translate(62.45px,74.491px)
          }
          30.9375% {
            transform:translate(62.497px,73.756px)
          }
          31.2500% {
            transform:translate(62.538px,73.015px)
          }
          31.5625% {
            transform:translate(62.573px,72.27px)
          }
          31.8750% {
            transform:translate(62.603px,71.522px)
          }
          32.1875% {
            transform:translate(62.626px,70.771px)
          }
          32.5000% {
            transform:translate(62.644px,70.017px)
          }
          32.8125% {
            transform:translate(62.657px,69.261px)
          }
          33.1250% {
            transform:translate(62.663px,68.505px)
          }
          33.4375% {
            transform:translate(62.664px,67.748px)
          }
          33.7500% {
            transform:translate(62.66px,66.991px)
          }
          34.0625% {
            transform:translate(62.649px,66.235px)
          }
          34.3750% {
            transform:translate(62.633px,65.48px)
          }
          34.6875% {
            transform:translate(62.611px,64.728px)
          }
          35.0000% {
            transform:translate(62.584px,63.979px)
          }
          35.3125% {
            transform:translate(62.55px,63.233px)
          }
          35.6250% {
            transform:translate(62.511px,62.491px)
          }
          35.9375% {
            transform:translate(62.467px,61.753px)
          }
          36.2500% {
            transform:translate(62.416px,61.021px)
          }
          36.5625% {
            transform:translate(62.36px,60.295px)
          }
          36.8750% {
            transform:translate(62.297px,59.575px)
          }
          37.1875% {
            transform:translate(62.229px,58.862px)
          }
          37.5000% {
            transform:translate(62.155px,58.157px)
          }
          37.8125% {
            transform:translate(62.075px,57.459px)
          }
          38.1250% {
            transform:translate(61.989px,56.77px)
          }
          38.4375% {
            transform:translate(61.897px,56.089px)
          }
          38.7500% {
            transform:translate(61.798px,55.418px)
          }
          39.0625% {
            transform:translate(61.694px,54.756px)
          }
          39.3750% {
            transform:translate(61.583px,54.104px)
          }
          39.6875% {
            transform:translate(61.466px,53.462px)
          }
          40.0000% {
            transform:translate(61.343px,52.831px)
          }
          40.3125% {
            transform:translate(61.213px,52.21px)
          }
          40.6250% {
            transform:translate(61.077px,51.6px)
          }
          40.9375% {
            transform:translate(60.934px,51.002px)
          }
          41.2500% {
            transform:translate(60.785px,50.415px)
          }
          41.5625% {
            transform:translate(60.629px,49.84px)
          }
          41.8750% {
            transform:translate(60.467px,49.276px)
          }
          42.1875% {
            transform:translate(60.297px,48.724px)
          }
          42.5000% {
            transform:translate(60.121px,48.184px)
          }
          42.8125% {
            transform:translate(59.937px,47.657px)
          }
          43.1250% {
            transform:translate(59.747px,47.141px)
          }
          43.4375% {
            transform:translate(59.55px,46.637px)
          }
          43.7500% {
            transform:translate(59.345px,46.146px)
          }
          44.0625% {
            transform:translate(59.134px,45.666px)
          }
          44.3750% {
            transform:translate(58.915px,45.199px)
          }
          44.6875% {
            transform:translate(58.688px,44.744px)
          }
          45.0000% {
            transform:translate(58.455px,44.302px)
          }
          45.3125% {
            transform:translate(58.213px,43.871px)
          }
          45.6250% {
            transform:translate(57.965px,43.452px)
          }
          45.9375% {
            transform:translate(57.708px,43.046px)
          }
          46.2500% {
            transform:translate(57.444px,42.651px)
          }
          46.5625% {
            transform:translate(57.173px,42.268px)
          }
          46.8750% {
            transform:translate(56.894px,41.897px)
          }
          47.1875% {
            transform:translate(56.607px,41.537px)
          }
          47.5000% {
            transform:translate(56.312px,41.189px)
          }
          47.8125% {
            transform:translate(56.01px,40.853px)
          }
          48.1250% {
            transform:translate(55.7px,40.528px)
          }
          48.4375% {
            transform:translate(55.382px,40.214px)
          }
          48.7500% {
            transform:translate(55.056px,39.911px)
          }
          49.0625% {
            transform:translate(54.723px,39.619px)
          }
          49.3750% {
            transform:translate(54.382px,39.339px)
          }
          49.6875% {
            transform:translate(54.033px,39.069px)
          }
          50.0000% {
            transform:translate(53.677px,38.81px)
          }
          50.3125% {
            transform:translate(53.313px,38.561px)
          }
          50.6250% {
            transform:translate(52.942px,38.323px)
          }
          50.9375% {
            transform:translate(52.564px,38.095px)
          }
          51.2500% {
            transform:translate(52.178px,37.878px)
          }
          51.5625% {
            transform:translate(51.786px,37.671px)
          }
          51.8750% {
            transform:translate(51.386px,37.474px)
          }
          52.1875% {
            transform:translate(50.98px,37.287px)
          }
          52.5000% {
            transform:translate(50.567px,37.109px)
          }
          52.8125% {
            transform:translate(50.148px,36.942px)
          }
          53.1250% {
            transform:translate(49.723px,36.784px)
          }
          53.4375% {
            transform:translate(49.291px,36.636px)
          }
          53.7500% {
            transform:translate(48.855px,36.498px)
          }
          54.0625% {
            transform:translate(48.412px,36.369px)
          }
          54.3750% {
            transform:translate(47.965px,36.249px)
          }
          54.6875% {
            transform:translate(47.513px,36.139px)
          }
          55.0000% {
            transform:translate(47.056px,36.038px)
          }
          55.3125% {
            transform:translate(46.595px,35.946px)
          }
          55.6250% {
            transform:translate(46.131px,35.864px)
          }
          55.9375% {
            transform:translate(45.663px,35.79px)
          }
          56.2500% {
            transform:translate(45.191px,35.726px)
          }
          56.5625% {
            transform:translate(44.718px,35.671px)
          }
          56.8750% {
            transform:translate(44.241px,35.624px)
          }
          57.1875% {
            transform:translate(43.763px,35.587px)
          }
          57.5000% {
            transform:translate(43.283px,35.559px)
          }
          57.8125% {
            transform:translate(42.803px,35.54px)
          }
          58.1250% {
            transform:translate(42.321px,35.529px)
          }
          58.4375% {
            transform:translate(41.839px,35.528px)
          }
          58.7500% {
            transform:translate(41.358px,35.535px)
          }
          59.0625% {
            transform:translate(40.877px,35.551px)
          }
          59.3750% {
            transform:translate(40.397px,35.577px)
          }
          59.6875% {
            transform:translate(39.918px,35.611px)
          }
          60.0000% {
            transform:translate(39.441px,35.654px)
          }
          60.3125% {
            transform:translate(38.966px,35.707px)
          }
          60.6250% {
            transform:translate(38.494px,35.768px)
          }
          60.9375% {
            transform:translate(38.025px,35.838px)
          }
          61.2500% {
            transform:translate(37.559px,35.918px)
          }
          61.5625% {
            transform:translate(37.097px,36.006px)
          }
          61.8750% {
            transform:translate(36.639px,36.104px)
          }
          62.1875% {
            transform:translate(36.185px,36.211px)
          }
          62.5000% {
            transform:translate(35.736px,36.328px)
          }
          62.8125% {
            transform:translate(35.292px,36.454px)
          }
          63.1250% {
            transform:translate(34.854px,36.589px)
          }
          63.4375% {
            transform:translate(34.42px,36.734px)
          }
          63.7500% {
            transform:translate(33.993px,36.888px)
          }
          64.0625% {
            transform:translate(33.572px,37.052px)
          }
          64.3750% {
            transform:translate(33.157px,37.226px)
          }
          64.6875% {
            transform:translate(32.749px,37.41px)
          }
          65.0000% {
            transform:translate(32.347px,37.604px)
          }
          65.3125% {
            transform:translate(31.952px,37.808px)
          }
          65.6250% {
            transform:translate(31.564px,38.022px)
          }
          65.9375% {
            transform:translate(31.183px,38.246px)
          }
          66.2500% {
            transform:translate(30.81px,38.481px)
          }
          66.5625% {
            transform:translate(30.443px,38.726px)
          }
          66.8750% {
            transform:translate(30.085px,38.981px)
          }
          67.1875% {
            transform:translate(29.734px,39.247px)
          }
          67.5000% {
            transform:translate(29.39px,39.525px)
          }
          67.8125% {
            transform:translate(29.054px,39.813px)
          }
          68.1250% {
            transform:translate(28.726px,40.112px)
          }
          68.4375% {
            transform:translate(28.405px,40.422px)
          }
          68.7500% {
            transform:translate(28.093px,40.743px)
          }
          69.0625% {
            transform:translate(27.788px,41.076px)
          }
          69.3750% {
            transform:translate(27.491px,41.42px)
          }
          69.6875% {
            transform:translate(27.201px,41.776px)
          }
          70.0000% {
            transform:translate(26.919px,42.143px)
          }
          70.3125% {
            transform:translate(26.645px,42.522px)
          }
          70.6250% {
            transform:translate(26.379px,42.913px)
          }
          70.9375% {
            transform:translate(26.12px,43.315px)
          }
          71.2500% {
            transform:translate(25.869px,43.73px)
          }
          71.5625% {
            transform:translate(25.625px,44.157px)
          }
          71.8750% {
            transform:translate(25.389px,44.596px)
          }
          72.1875% {
            transform:translate(25.16px,45.046px)
          }
          72.5000% {
            transform:translate(24.939px,45.509px)
          }
          72.8125% {
            transform:translate(24.724px,45.985px)
          }
          73.1250% {
            transform:translate(24.518px,46.472px)
          }
          73.4375% {
            transform:translate(24.318px,46.972px)
          }
          73.7500% {
            transform:translate(24.125px,47.483px)
          }
          74.0625% {
            transform:translate(23.94px,48.007px)
          }
          74.3750% {
            transform:translate(23.761px,48.543px)
          }
          74.6875% {
            transform:translate(23.589px,49.091px)
          }
          75.0000% {
            transform:translate(23.424px,49.651px)
          }
          75.3125% {
            transform:translate(23.266px,50.222px)
          }
          75.6250% {
            transform:translate(23.115px,50.805px)
          }
          75.9375% {
            transform:translate(22.97px,51.4px)
          }
          76.2500% {
            transform:translate(22.831px,52.006px)
          }
          76.5625% {
            transform:translate(22.7px,52.623px)
          }
          76.8750% {
            transform:translate(22.574px,53.25px)
          }
          77.1875% {
            transform:translate(22.455px,53.889px)
          }
          77.5000% {
            transform:translate(22.342px,54.537px)
          }
          77.8125% {
            transform:translate(22.236px,55.196px)
          }
          78.1250% {
            transform:translate(22.135px,55.864px)
          }
          78.4375% {
            transform:translate(22.041px,56.542px)
          }
          78.7500% {
            transform:translate(21.953px,57.229px)
          }
          79.0625% {
            transform:translate(21.871px,57.923px)
          }
          79.3750% {
            transform:translate(21.795px,58.626px)
          }
          79.6875% {
            transform:translate(21.725px,59.337px)
          }
          80.0000% {
            transform:translate(21.661px,60.055px)
          }
          80.3125% {
            transform:translate(21.602px,60.779px)
          }
          80.6250% {
            transform:translate(21.55px,61.509px)
          }
          80.9375% {
            transform:translate(21.503px,62.244px)
          }
          81.2500% {
            transform:translate(21.462px,62.985px)
          }
          81.5625% {
            transform:translate(21.427px,63.73px)
          }
          81.8750% {
            transform:translate(21.397px,64.478px)
          }
          82.1875% {
            transform:translate(21.374px,65.229px)
          }
          82.5000% {
            transform:translate(21.356px,65.983px)
          }
          82.8125% {
            transform:translate(21.343px,66.739px)
          }
          83.1250% {
            transform:translate(21.337px,67.495px)
          }
          83.4375% {
            transform:translate(21.336px,68.252px)
          }
          83.7500% {
            transform:translate(21.34px,69.009px)
          }
          84.0625% {
            transform:translate(21.351px,69.765px)
          }
          84.3750% {
            transform:translate(21.367px,70.52px)
          }
          84.6875% {
            transform:translate(21.389px,71.272px)
          }
          85.0000% {
            transform:translate(21.416px,72.021px)
          }
          85.3125% {
            transform:translate(21.45px,72.767px)
          }
          85.6250% {
            transform:translate(21.489px,73.509px)
          }
          85.9375% {
            transform:translate(21.533px,74.247px)
          }
          86.2500% {
            transform:translate(21.584px,74.979px)
          }
          86.5625% {
            transform:translate(21.64px,75.705px)
          }
          86.8750% {
            transform:translate(21.703px,76.425px)
          }
          87.1875% {
            transform:translate(21.771px,77.138px)
          }
          87.5000% {
            transform:translate(21.845px,77.843px)
          }
          87.8125% {
            transform:translate(21.925px,78.541px)
          }
          88.1250% {
            transform:translate(22.011px,79.23px)
          }
          88.4375% {
            transform:translate(22.103px,79.911px)
          }
          88.7500% {
            transform:translate(22.202px,80.582px)
          }
          89.0625% {
            transform:translate(22.306px,81.244px)
          }
          89.3750% {
            transform:translate(22.417px,81.896px)
          }
          89.6875% {
            transform:translate(22.534px,82.538px)
          }
          90.0000% {
            transform:translate(22.657px,83.169px)
          }
          90.3125% {
            transform:translate(22.787px,83.79px)
          }
          90.6250% {
            transform:translate(22.923px,84.4px)
          }
          90.9375% {
            transform:translate(23.066px,84.998px)
          }
          91.2500% {
            transform:translate(23.215px,85.585px)
          }
          91.5625% {
            transform:translate(23.371px,86.16px)
          }
          91.8750% {
            transform:translate(23.533px,86.724px)
          }
          92.1875% {
            transform:translate(23.703px,87.276px)
          }
          92.5000% {
            transform:translate(23.879px,87.816px)
          }
          92.8125% {
            transform:translate(24.063px,88.343px)
          }
          93.1250% {
            transform:translate(24.253px,88.859px)
          }
          93.4375% {
            transform:translate(24.45px,89.363px)
          }
          93.7500% {
            transform:translate(24.655px,89.854px)
          }
          94.0625% {
            transform:translate(24.866px,90.334px)
          }
          94.3750% {
            transform:translate(25.085px,90.801px)
          }
          94.6875% {
            transform:translate(25.312px,91.256px)
          }
          95.0000% {
            transform:translate(25.545px,91.698px)
          }
          95.3125% {
            transform:translate(25.787px,92.129px)
          }
          95.6250% {
            transform:translate(26.035px,92.548px)
          }
          95.9375% {
            transform:translate(26.292px,92.954px)
          }
          96.2500% {
            transform:translate(26.556px,93.349px)
          }
          96.5625% {
            transform:translate(26.827px,93.732px)
          }
          96.8750% {
            transform:translate(27.106px,94.103px)
          }
          97.1875% {
            transform:translate(27.393px,94.463px)
          }
          97.5000% {
            transform:translate(27.688px,94.811px)
          }
          97.8125% {
            transform:translate(27.99px,95.147px)
          }
          98.1250% {
            transform:translate(28.3px,95.472px)
          }
          98.4375% {
            transform:translate(28.618px,95.786px)
          }
          98.7500% {
            transform:translate(28.944px,96.089px)
          }
          99.0625% {
            transform:translate(29.277px,96.381px)
          }
          99.3750% {
            transform:translate(29.618px,96.661px)
          }
          99.6875% {
            transform:translate(29.967px,96.931px)
          }
          100.0000% {
            transform:translate(30.323px,97.19px)
          }
        }
        .marker-3 {
          animation:rip-marker-3 16s linear infinite
        }
        @keyframes rip-marker-3 {
          0.0000% {
            transform:translate(77.335px,68px)
          }
          0.3125% {
            transform:translate(77.338px,67.243px)
          }
          0.6250% {
            transform:translate(77.347px,66.487px)
          }
          0.9375% {
            transform:translate(77.361px,65.732px)
          }
          1.2500% {
            transform:translate(77.381px,64.979px)
          }
          1.5625% {
            transform:translate(77.407px,64.228px)
          }
          1.8750% {
            transform:translate(77.438px,63.481px)
          }
          2.1875% {
            transform:translate(77.475px,62.738px)
          }
          2.5000% {
            transform:translate(77.518px,61.999px)
          }
          2.8125% {
            transform:translate(77.567px,61.265px)
          }
          3.1250% {
            transform:translate(77.621px,60.537px)
          }
          3.4375% {
            transform:translate(77.681px,59.815px)
          }
          3.7500% {
            transform:translate(77.748px,59.099px)
          }
          4.0625% {
            transform:translate(77.82px,58.391px)
          }
          4.3750% {
            transform:translate(77.898px,57.691px)
          }
          4.6875% {
            transform:translate(77.982px,56.999px)
          }
          5.0000% {
            transform:translate(78.072px,56.315px)
          }
          5.3125% {
            transform:translate(78.168px,55.641px)
          }
          5.6250% {
            transform:translate(78.271px,54.975px)
          }
          5.9375% {
            transform:translate(78.379px,54.32px)
          }
          6.2500% {
            transform:translate(78.494px,53.675px)
          }
          6.5625% {
            transform:translate(78.615px,53.04px)
          }
          6.8750% {
            transform:translate(78.743px,52.416px)
          }
          7.1875% {
            transform:translate(78.877px,51.802px)
          }
          7.5000% {
            transform:translate(79.017px,51.2px)
          }
          7.8125% {
            transform:translate(79.164px,50.61px)
          }
          8.1250% {
            transform:translate(79.318px,50.03px)
          }
          8.4375% {
            transform:translate(79.479px,49.463px)
          }
          8.7500% {
            transform:translate(79.646px,48.907px)
          }
          9.0625% {
            transform:translate(79.82px,48.363px)
          }
          9.3750% {
            transform:translate(80.001px,47.831px)
          }
          9.6875% {
            transform:translate(80.189px,47.311px)
          }
          10.0000% {
            transform:translate(80.384px,46.804px)
          }
          10.3125% {
            transform:translate(80.586px,46.308px)
          }
          10.6250% {
            transform:translate(80.795px,45.825px)
          }
          10.9375% {
            transform:translate(81.012px,45.354px)
          }
          11.2500% {
            transform:translate(81.235px,44.895px)
          }
          11.5625% {
            transform:translate(81.467px,44.448px)
          }
          11.8750% {
            transform:translate(81.705px,44.013px)
          }
          12.1875% {
            transform:translate(81.952px,43.591px)
          }
          12.5000% {
            transform:translate(82.205px,43.18px)
          }
          12.8125% {
            transform:translate(82.467px,42.781px)
          }
          13.1250% {
            transform:translate(82.736px,42.394px)
          }
          13.4375% {
            transform:translate(83.012px,42.019px)
          }
          13.7500% {
            transform:translate(83.297px,41.656px)
          }
          14.0625% {
            transform:translate(83.589px,41.304px)
          }
          14.3750% {
            transform:translate(83.889px,40.964px)
          }
          14.6875% {
            transform:translate(84.196px,40.635px)
          }
          15.0000% {
            transform:translate(84.511px,40.317px)
          }
          15.3125% {
            transform:translate(84.834px,40.011px)
          }
          15.6250% {
            transform:translate(85.165px,39.715px)
          }
          15.9375% {
            transform:translate(85.504px,39.431px)
          }
          16.2500% {
            transform:translate(85.85px,39.158px)
          }
          16.5625% {
            transform:translate(86.204px,38.895px)
          }
          16.8750% {
            transform:translate(86.565px,38.643px)
          }
          17.1875% {
            transform:translate(86.933px,38.401px)
          }
          17.5000% {
            transform:translate(87.309px,38.17px)
          }
          17.8125% {
            transform:translate(87.692px,37.949px)
          }
          18.1250% {
            transform:translate(88.083px,37.739px)
          }
          18.4375% {
            transform:translate(88.48px,37.538px)
          }
          18.7500% {
            transform:translate(88.884px,37.348px)
          }
          19.0625% {
            transform:translate(89.295px,37.167px)
          }
          19.3750% {
            transform:translate(89.712px,36.997px)
          }
          19.6875% {
            transform:translate(90.135px,36.836px)
          }
          20.0000% {
            transform:translate(90.564px,36.685px)
          }
          20.3125% {
            transform:translate(90.999px,36.543px)
          }
          20.6250% {
            transform:translate(91.44px,36.411px)
          }
          20.9375% {
            transform:translate(91.885px,36.288px)
          }
          21.2500% {
            transform:translate(92.336px,36.175px)
          }
          21.5625% {
            transform:translate(92.791px,36.071px)
          }
          21.8750% {
            transform:translate(93.251px,35.976px)
          }
          22.1875% {
            transform:translate(93.714px,35.89px)
          }
          22.5000% {
            transform:translate(94.181px,35.814px)
          }
          22.8125% {
            transform:translate(94.651px,35.746px)
          }
          23.1250% {
            transform:translate(95.124px,35.688px)
          }
          23.4375% {
            transform:translate(95.6px,35.639px)
          }
          23.7500% {
            transform:translate(96.077px,35.599px)
          }
          24.0625% {
            transform:translate(96.556px,35.567px)
          }
          24.3750% {
            transform:translate(97.037px,35.545px)
          }
          24.6875% {
            transform:translate(97.518px,35.532px)
          }
          25.0000% {
            transform:translate(98.0px,35.527px)
          }
          25.3125% {
            transform:translate(98.482px,35.532px)
          }
          25.6250% {
            transform:translate(98.963px,35.545px)
          }
          25.9375% {
            transform:translate(99.444px,35.567px)
          }
          26.2500% {
            transform:translate(99.923px,35.599px)
          }
          26.5625% {
            transform:translate(100.4px,35.639px)
          }
          26.8750% {
            transform:translate(100.876px,35.688px)
          }
          27.1875% {
            transform:translate(101.349px,35.746px)
          }
          27.5000% {
            transform:translate(101.819px,35.814px)
          }
          27.8125% {
            transform:translate(102.286px,35.89px)
          }
          28.1250% {
            transform:translate(102.749px,35.976px)
          }
          28.4375% {
            transform:translate(103.209px,36.071px)
          }
          28.7500% {
            transform:translate(103.664px,36.175px)
          }
          29.0625% {
            transform:translate(104.115px,36.288px)
          }
          29.3750% {
            transform:translate(104.56px,36.411px)
          }
          29.6875% {
            transform:translate(105.001px,36.543px)
          }
          30.0000% {
            transform:translate(105.436px,36.685px)
          }
          30.3125% {
            transform:translate(105.865px,36.836px)
          }
          30.6250% {
            transform:translate(106.288px,36.997px)
          }
          30.9375% {
            transform:translate(106.705px,37.167px)
          }
          31.2500% {
            transform:translate(107.116px,37.348px)
          }
          31.5625% {
            transform:translate(107.52px,37.538px)
          }
          31.8750% {
            transform:translate(107.917px,37.739px)
          }
          32.1875% {
            transform:translate(108.308px,37.949px)
          }
          32.5000% {
            transform:translate(108.691px,38.17px)
          }
          32.8125% {
            transform:translate(109.067px,38.401px)
          }
          33.1250% {
            transform:translate(109.435px,38.643px)
          }
          33.4375% {
            transform:translate(109.796px,38.895px)
          }
          33.7500% {
            transform:translate(110.15px,39.158px)
          }
          34.0625% {
            transform:translate(110.496px,39.431px)
          }
          34.3750% {
            transform:translate(110.835px,39.715px)
          }
          34.6875% {
            transform:translate(111.165px,40.011px)
          }
          35.0000% {
            transform:translate(111.489px,40.317px)
          }
          35.3125% {
            transform:translate(111.804px,40.635px)
          }
          35.6250% {
            transform:translate(112.111px,40.964px)
          }
          35.9375% {
            transform:translate(112.411px,41.304px)
          }
          36.2500% {
            transform:translate(112.703px,41.656px)
          }
          36.5625% {
            transform:translate(112.988px,42.019px)
          }
          36.8750% {
            transform:translate(113.264px,42.394px)
          }
          37.1875% {
            transform:translate(113.533px,42.781px)
          }
          37.5000% {
            transform:translate(113.795px,43.18px)
          }
          37.8125% {
            transform:translate(114.048px,43.591px)
          }
          38.1250% {
            transform:translate(114.295px,44.013px)
          }
          38.4375% {
            transform:translate(114.533px,44.448px)
          }
          38.7500% {
            transform:translate(114.765px,44.895px)
          }
          39.0625% {
            transform:translate(114.988px,45.354px)
          }
          39.3750% {
            transform:translate(115.205px,45.825px)
          }
          39.6875% {
            transform:translate(115.414px,46.308px)
          }
          40.0000% {
            transform:translate(115.616px,46.804px)
          }
          40.3125% {
            transform:translate(115.811px,47.311px)
          }
          40.6250% {
            transform:translate(115.999px,47.831px)
          }
          40.9375% {
            transform:translate(116.18px,48.363px)
          }
          41.2500% {
            transform:translate(116.354px,48.907px)
          }
          41.5625% {
            transform:translate(116.521px,49.463px)
          }
          41.8750% {
            transform:translate(116.682px,50.03px)
          }
          42.1875% {
            transform:translate(116.836px,50.61px)
          }
          42.5000% {
            transform:translate(116.983px,51.2px)
          }
          42.8125% {
            transform:translate(117.123px,51.802px)
          }
          43.1250% {
            transform:translate(117.257px,52.416px)
          }
          43.4375% {
            transform:translate(117.385px,53.04px)
          }
          43.7500% {
            transform:translate(117.506px,53.675px)
          }
          44.0625% {
            transform:translate(117.621px,54.32px)
          }
          44.3750% {
            transform:translate(117.729px,54.975px)
          }
          44.6875% {
            transform:translate(117.832px,55.641px)
          }
          45.0000% {
            transform:translate(117.928px,56.315px)
          }
          45.3125% {
            transform:translate(118.018px,56.999px)
          }
          45.6250% {
            transform:translate(118.102px,57.691px)
          }
          45.9375% {
            transform:translate(118.18px,58.391px)
          }
          46.2500% {
            transform:translate(118.252px,59.099px)
          }
          46.5625% {
            transform:translate(118.319px,59.815px)
          }
          46.8750% {
            transform:translate(118.379px,60.537px)
          }
          47.1875% {
            transform:translate(118.433px,61.265px)
          }
          47.5000% {
            transform:translate(118.482px,61.999px)
          }
          47.8125% {
            transform:translate(118.525px,62.738px)
          }
          48.1250% {
            transform:translate(118.562px,63.481px)
          }
          48.4375% {
            transform:translate(118.593px,64.228px)
          }
          48.7500% {
            transform:translate(118.619px,64.979px)
          }
          49.0625% {
            transform:translate(118.639px,65.732px)
          }
          49.3750% {
            transform:translate(118.653px,66.487px)
          }
          49.6875% {
            transform:translate(118.662px,67.243px)
          }
          50.0000% {
            transform:translate(118.665px,68.0px)
          }
          50.3125% {
            transform:translate(118.662px,68.757px)
          }
          50.6250% {
            transform:translate(118.653px,69.513px)
          }
          50.9375% {
            transform:translate(118.639px,70.268px)
          }
          51.2500% {
            transform:translate(118.619px,71.021px)
          }
          51.5625% {
            transform:translate(118.593px,71.772px)
          }
          51.8750% {
            transform:translate(118.562px,72.519px)
          }
          52.1875% {
            transform:translate(118.525px,73.262px)
          }
          52.5000% {
            transform:translate(118.482px,74.001px)
          }
          52.8125% {
            transform:translate(118.433px,74.735px)
          }
          53.1250% {
            transform:translate(118.379px,75.463px)
          }
          53.4375% {
            transform:translate(118.319px,76.185px)
          }
          53.7500% {
            transform:translate(118.252px,76.901px)
          }
          54.0625% {
            transform:translate(118.18px,77.609px)
          }
          54.3750% {
            transform:translate(118.102px,78.309px)
          }
          54.6875% {
            transform:translate(118.018px,79.001px)
          }
          55.0000% {
            transform:translate(117.928px,79.685px)
          }
          55.3125% {
            transform:translate(117.832px,80.359px)
          }
          55.6250% {
            transform:translate(117.729px,81.025px)
          }
          55.9375% {
            transform:translate(117.621px,81.68px)
          }
          56.2500% {
            transform:translate(117.506px,82.325px)
          }
          56.5625% {
            transform:translate(117.385px,82.96px)
          }
          56.8750% {
            transform:translate(117.257px,83.584px)
          }
          57.1875% {
            transform:translate(117.123px,84.198px)
          }
          57.5000% {
            transform:translate(116.983px,84.8px)
          }
          57.8125% {
            transform:translate(116.836px,85.39px)
          }
          58.1250% {
            transform:translate(116.682px,85.97px)
          }
          58.4375% {
            transform:translate(116.521px,86.537px)
          }
          58.7500% {
            transform:translate(116.354px,87.093px)
          }
          59.0625% {
            transform:translate(116.18px,87.637px)
          }
          59.3750% {
            transform:translate(115.999px,88.169px)
          }
          59.6875% {
            transform:translate(115.811px,88.689px)
          }
          60.0000% {
            transform:translate(115.616px,89.196px)
          }
          60.3125% {
            transform:translate(115.414px,89.692px)
          }
          60.6250% {
            transform:translate(115.205px,90.175px)
          }
          60.9375% {
            transform:translate(114.988px,90.646px)
          }
          61.2500% {
            transform:translate(114.765px,91.105px)
          }
          61.5625% {
            transform:translate(114.533px,91.552px)
          }
          61.8750% {
            transform:translate(114.295px,91.987px)
          }
          62.1875% {
            transform:translate(114.048px,92.409px)
          }
          62.5000% {
            transform:translate(113.795px,92.82px)
          }
          62.8125% {
            transform:translate(113.533px,93.219px)
          }
          63.1250% {
            transform:translate(113.264px,93.606px)
          }
          63.4375% {
            transform:translate(112.988px,93.981px)
          }
          63.7500% {
            transform:translate(112.703px,94.344px)
          }
          64.0625% {
            transform:translate(112.411px,94.696px)
          }
          64.3750% {
            transform:translate(112.111px,95.036px)
          }
          64.6875% {
            transform:translate(111.804px,95.365px)
          }
          65.0000% {
            transform:translate(111.489px,95.683px)
          }
          65.3125% {
            transform:translate(111.165px,95.989px)
          }
          65.6250% {
            transform:translate(110.835px,96.285px)
          }
          65.9375% {
            transform:translate(110.496px,96.569px)
          }
          66.2500% {
            transform:translate(110.15px,96.842px)
          }
          66.5625% {
            transform:translate(109.796px,97.105px)
          }
          66.8750% {
            transform:translate(109.435px,97.357px)
          }
          67.1875% {
            transform:translate(109.067px,97.599px)
          }
          67.5000% {
            transform:translate(108.691px,97.83px)
          }
          67.8125% {
            transform:translate(108.308px,98.051px)
          }
          68.1250% {
            transform:translate(107.917px,98.261px)
          }
          68.4375% {
            transform:translate(107.52px,98.462px)
          }
          68.7500% {
            transform:translate(107.116px,98.652px)
          }
          69.0625% {
            transform:translate(106.705px,98.833px)
          }
          69.3750% {
            transform:translate(106.288px,99.003px)
          }
          69.6875% {
            transform:translate(105.865px,99.164px)
          }
          70.0000% {
            transform:translate(105.436px,99.315px)
          }
          70.3125% {
            transform:translate(105.001px,99.457px)
          }
          70.6250% {
            transform:translate(104.56px,99.589px)
          }
          70.9375% {
            transform:translate(104.115px,99.712px)
          }
          71.2500% {
            transform:translate(103.664px,99.825px)
          }
          71.5625% {
            transform:translate(103.209px,99.929px)
          }
          71.8750% {
            transform:translate(102.749px,100.024px)
          }
          72.1875% {
            transform:translate(102.286px,100.11px)
          }
          72.5000% {
            transform:translate(101.819px,100.186px)
          }
          72.8125% {
            transform:translate(101.349px,100.254px)
          }
          73.1250% {
            transform:translate(100.876px,100.312px)
          }
          73.4375% {
            transform:translate(100.4px,100.361px)
          }
          73.7500% {
            transform:translate(99.923px,100.401px)
          }
          74.0625% {
            transform:translate(99.444px,100.433px)
          }
          74.3750% {
            transform:translate(98.963px,100.455px)
          }
          74.6875% {
            transform:translate(98.482px,100.468px)
          }
          75.0000% {
            transform:translate(98.0px,100.473px)
          }
          75.3125% {
            transform:translate(97.518px,100.468px)
          }
          75.6250% {
            transform:translate(97.037px,100.455px)
          }
          75.9375% {
            transform:translate(96.556px,100.433px)
          }
          76.2500% {
            transform:translate(96.077px,100.401px)
          }
          76.5625% {
            transform:translate(95.6px,100.361px)
          }
          76.8750% {
            transform:translate(95.124px,100.312px)
          }
          77.1875% {
            transform:translate(94.651px,100.254px)
          }
          77.5000% {
            transform:translate(94.181px,100.186px)
          }
          77.8125% {
            transform:translate(93.714px,100.11px)
          }
          78.1250% {
            transform:translate(93.251px,100.024px)
          }
          78.4375% {
            transform:translate(92.791px,99.929px)
          }
          78.7500% {
            transform:translate(92.336px,99.825px)
          }
          79.0625% {
            transform:translate(91.885px,99.712px)
          }
          79.3750% {
            transform:translate(91.44px,99.589px)
          }
          79.6875% {
            transform:translate(90.999px,99.457px)
          }
          80.0000% {
            transform:translate(90.564px,99.315px)
          }
          80.3125% {
            transform:translate(90.135px,99.164px)
          }
          80.6250% {
            transform:translate(89.712px,99.003px)
          }
          80.9375% {
            transform:translate(89.295px,98.833px)
          }
          81.2500% {
            transform:translate(88.884px,98.652px)
          }
          81.5625% {
            transform:translate(88.48px,98.462px)
          }
          81.8750% {
            transform:translate(88.083px,98.261px)
          }
          82.1875% {
            transform:translate(87.692px,98.051px)
          }
          82.5000% {
            transform:translate(87.309px,97.83px)
          }
          82.8125% {
            transform:translate(86.933px,97.599px)
          }
          83.1250% {
            transform:translate(86.565px,97.357px)
          }
          83.4375% {
            transform:translate(86.204px,97.105px)
          }
          83.7500% {
            transform:translate(85.85px,96.842px)
          }
          84.0625% {
            transform:translate(85.504px,96.569px)
          }
          84.3750% {
            transform:translate(85.165px,96.285px)
          }
          84.6875% {
            transform:translate(84.835px,95.989px)
          }
          85.0000% {
            transform:translate(84.511px,95.683px)
          }
          85.3125% {
            transform:translate(84.196px,95.365px)
          }
          85.6250% {
            transform:translate(83.889px,95.036px)
          }
          85.9375% {
            transform:translate(83.589px,94.696px)
          }
          86.2500% {
            transform:translate(83.297px,94.344px)
          }
          86.5625% {
            transform:translate(83.012px,93.981px)
          }
          86.8750% {
            transform:translate(82.736px,93.606px)
          }
          87.1875% {
            transform:translate(82.467px,93.219px)
          }
          87.5000% {
            transform:translate(82.205px,92.82px)
          }
          87.8125% {
            transform:translate(81.952px,92.409px)
          }
          88.1250% {
            transform:translate(81.705px,91.987px)
          }
          88.4375% {
            transform:translate(81.467px,91.552px)
          }
          88.7500% {
            transform:translate(81.235px,91.105px)
          }
          89.0625% {
            transform:translate(81.012px,90.646px)
          }
          89.3750% {
            transform:translate(80.795px,90.175px)
          }
          89.6875% {
            transform:translate(80.586px,89.692px)
          }
          90.0000% {
            transform:translate(80.384px,89.196px)
          }
          90.3125% {
            transform:translate(80.189px,88.689px)
          }
          90.6250% {
            transform:translate(80.001px,88.169px)
          }
          90.9375% {
            transform:translate(79.82px,87.637px)
          }
          91.2500% {
            transform:translate(79.646px,87.093px)
          }
          91.5625% {
            transform:translate(79.479px,86.537px)
          }
          91.8750% {
            transform:translate(79.318px,85.97px)
          }
          92.1875% {
            transform:translate(79.164px,85.39px)
          }
          92.5000% {
            transform:translate(79.017px,84.8px)
          }
          92.8125% {
            transform:translate(78.877px,84.198px)
          }
          93.1250% {
            transform:translate(78.743px,83.584px)
          }
          93.4375% {
            transform:translate(78.615px,82.96px)
          }
          93.7500% {
            transform:translate(78.494px,82.325px)
          }
          94.0625% {
            transform:translate(78.379px,81.68px)
          }
          94.3750% {
            transform:translate(78.271px,81.025px)
          }
          94.6875% {
            transform:translate(78.168px,80.359px)
          }
          95.0000% {
            transform:translate(78.072px,79.685px)
          }
          95.3125% {
            transform:translate(77.982px,79.001px)
          }
          95.6250% {
            transform:translate(77.898px,78.309px)
          }
          95.9375% {
            transform:translate(77.82px,77.609px)
          }
          96.2500% {
            transform:translate(77.748px,76.901px)
          }
          96.5625% {
            transform:translate(77.681px,76.185px)
          }
          96.8750% {
            transform:translate(77.621px,75.463px)
          }
          97.1875% {
            transform:translate(77.567px,74.735px)
          }
          97.5000% {
            transform:translate(77.518px,74.001px)
          }
          97.8125% {
            transform:translate(77.475px,73.262px)
          }
          98.1250% {
            transform:translate(77.438px,72.519px)
          }
          98.4375% {
            transform:translate(77.407px,71.772px)
          }
          98.7500% {
            transform:translate(77.381px,71.021px)
          }
          99.0625% {
            transform:translate(77.361px,70.268px)
          }
          99.3750% {
            transform:translate(77.347px,69.513px)
          }
          99.6875% {
            transform:translate(77.338px,68.757px)
          }
          100.0000% {
            transform:translate(77.335px,68px)
          }
        }
        .marker-4 {
          animation:rip-marker-4 16s linear infinite
        }
        @keyframes rip-marker-4 {
          0.0000% {
            transform:translate(109.677px,38.81px)
          }
          0.3125% {
            transform:translate(110.033px,39.069px)
          }
          0.6250% {
            transform:translate(110.382px,39.339px)
          }
          0.9375% {
            transform:translate(110.723px,39.619px)
          }
          1.2500% {
            transform:translate(111.056px,39.911px)
          }
          1.5625% {
            transform:translate(111.382px,40.214px)
          }
          1.8750% {
            transform:translate(111.7px,40.528px)
          }
          2.1875% {
            transform:translate(112.01px,40.853px)
          }
          2.5000% {
            transform:translate(112.312px,41.189px)
          }
          2.8125% {
            transform:translate(112.607px,41.537px)
          }
          3.1250% {
            transform:translate(112.894px,41.897px)
          }
          3.4375% {
            transform:translate(113.173px,42.268px)
          }
          3.7500% {
            transform:translate(113.444px,42.651px)
          }
          4.0625% {
            transform:translate(113.708px,43.046px)
          }
          4.3750% {
            transform:translate(113.965px,43.452px)
          }
          4.6875% {
            transform:translate(114.213px,43.871px)
          }
          5.0000% {
            transform:translate(114.455px,44.302px)
          }
          5.3125% {
            transform:translate(114.688px,44.744px)
          }
          5.6250% {
            transform:translate(114.915px,45.199px)
          }
          5.9375% {
            transform:translate(115.134px,45.666px)
          }
          6.2500% {
            transform:translate(115.345px,46.146px)
          }
          6.5625% {
            transform:translate(115.55px,46.637px)
          }
          6.8750% {
            transform:translate(115.747px,47.141px)
          }
          7.1875% {
            transform:translate(115.937px,47.657px)
          }
          7.5000% {
            transform:translate(116.121px,48.184px)
          }
          7.8125% {
            transform:translate(116.297px,48.724px)
          }
          8.1250% {
            transform:translate(116.467px,49.276px)
          }
          8.4375% {
            transform:translate(116.629px,49.84px)
          }
          8.7500% {
            transform:translate(116.785px,50.415px)
          }
          9.0625% {
            transform:translate(116.934px,51.002px)
          }
          9.3750% {
            transform:translate(117.077px,51.6px)
          }
          9.6875% {
            transform:translate(117.213px,52.21px)
          }
          10.0000% {
            transform:translate(117.343px,52.831px)
          }
          10.3125% {
            transform:translate(117.466px,53.462px)
          }
          10.6250% {
            transform:translate(117.583px,54.104px)
          }
          10.9375% {
            transform:translate(117.694px,54.756px)
          }
          11.2500% {
            transform:translate(117.798px,55.418px)
          }
          11.5625% {
            transform:translate(117.897px,56.089px)
          }
          11.8750% {
            transform:translate(117.989px,56.77px)
          }
          12.1875% {
            transform:translate(118.075px,57.459px)
          }
          12.5000% {
            transform:translate(118.155px,58.157px)
          }
          12.8125% {
            transform:translate(118.229px,58.862px)
          }
          13.1250% {
            transform:translate(118.297px,59.575px)
          }
          13.4375% {
            transform:translate(118.36px,60.295px)
          }
          13.7500% {
            transform:translate(118.416px,61.021px)
          }
          14.0625% {
            transform:translate(118.467px,61.753px)
          }
          14.3750% {
            transform:translate(118.511px,62.491px)
          }
          14.6875% {
            transform:translate(118.55px,63.233px)
          }
          15.0000% {
            transform:translate(118.584px,63.979px)
          }
          15.3125% {
            transform:translate(118.611px,64.728px)
          }
          15.6250% {
            transform:translate(118.633px,65.48px)
          }
          15.9375% {
            transform:translate(118.649px,66.235px)
          }
          16.2500% {
            transform:translate(118.66px,66.991px)
          }
          16.5625% {
            transform:translate(118.664px,67.748px)
          }
          16.8750% {
            transform:translate(118.663px,68.505px)
          }
          17.1875% {
            transform:translate(118.657px,69.261px)
          }
          17.5000% {
            transform:translate(118.644px,70.017px)
          }
          17.8125% {
            transform:translate(118.626px,70.771px)
          }
          18.1250% {
            transform:translate(118.603px,71.522px)
          }
          18.4375% {
            transform:translate(118.573px,72.27px)
          }
          18.7500% {
            transform:translate(118.538px,73.015px)
          }
          19.0625% {
            transform:translate(118.497px,73.756px)
          }
          19.3750% {
            transform:translate(118.45px,74.491px)
          }
          19.6875% {
            transform:translate(118.398px,75.221px)
          }
          20.0000% {
            transform:translate(118.339px,75.945px)
          }
          20.3125% {
            transform:translate(118.275px,76.663px)
          }
          20.6250% {
            transform:translate(118.205px,77.374px)
          }
          20.9375% {
            transform:translate(118.129px,78.077px)
          }
          21.2500% {
            transform:translate(118.047px,78.771px)
          }
          21.5625% {
            transform:translate(117.959px,79.458px)
          }
          21.8750% {
            transform:translate(117.865px,80.136px)
          }
          22.1875% {
            transform:translate(117.764px,80.804px)
          }
          22.5000% {
            transform:translate(117.658px,81.463px)
          }
          22.8125% {
            transform:translate(117.545px,82.111px)
          }
          23.1250% {
            transform:translate(117.426px,82.75px)
          }
          23.4375% {
            transform:translate(117.3px,83.377px)
          }
          23.7500% {
            transform:translate(117.169px,83.994px)
          }
          24.0625% {
            transform:translate(117.03px,84.6px)
          }
          24.3750% {
            transform:translate(116.885px,85.195px)
          }
          24.6875% {
            transform:translate(116.734px,85.778px)
          }
          25.0000% {
            transform:translate(116.576px,86.349px)
          }
          25.3125% {
            transform:translate(116.411px,86.909px)
          }
          25.6250% {
            transform:translate(116.239px,87.457px)
          }
          25.9375% {
            transform:translate(116.06px,87.993px)
          }
          26.2500% {
            transform:translate(115.875px,88.517px)
          }
          26.5625% {
            transform:translate(115.682px,89.028px)
          }
          26.8750% {
            transform:translate(115.482px,89.528px)
          }
          27.1875% {
            transform:translate(115.276px,90.015px)
          }
          27.5000% {
            transform:translate(115.061px,90.491px)
          }
          27.8125% {
            transform:translate(114.84px,90.954px)
          }
          28.1250% {
            transform:translate(114.611px,91.404px)
          }
          28.4375% {
            transform:translate(114.375px,91.843px)
          }
          28.7500% {
            transform:translate(114.131px,92.27px)
          }
          29.0625% {
            transform:translate(113.88px,92.685px)
          }
          29.3750% {
            transform:translate(113.621px,93.087px)
          }
          29.6875% {
            transform:translate(113.355px,93.478px)
          }
          30.0000% {
            transform:translate(113.081px,93.857px)
          }
          30.3125% {
            transform:translate(112.799px,94.224px)
          }
          30.6250% {
            transform:translate(112.509px,94.58px)
          }
          30.9375% {
            transform:translate(112.212px,94.924px)
          }
          31.2500% {
            transform:translate(111.907px,95.257px)
          }
          31.5625% {
            transform:translate(111.595px,95.578px)
          }
          31.8750% {
            transform:translate(111.274px,95.888px)
          }
          32.1875% {
            transform:translate(110.946px,96.187px)
          }
          32.5000% {
            transform:translate(110.61px,96.475px)
          }
          32.8125% {
            transform:translate(110.266px,96.753px)
          }
          33.1250% {
            transform:translate(109.915px,97.019px)
          }
          33.4375% {
            transform:translate(109.557px,97.274px)
          }
          33.7500% {
            transform:translate(109.19px,97.519px)
          }
          34.0625% {
            transform:translate(108.817px,97.754px)
          }
          34.3750% {
            transform:translate(108.436px,97.978px)
          }
          34.6875% {
            transform:translate(108.048px,98.192px)
          }
          35.0000% {
            transform:translate(107.653px,98.396px)
          }
          35.3125% {
            transform:translate(107.251px,98.59px)
          }
          35.6250% {
            transform:translate(106.843px,98.774px)
          }
          35.9375% {
            transform:translate(106.428px,98.948px)
          }
          36.2500% {
            transform:translate(106.007px,99.112px)
          }
          36.5625% {
            transform:translate(105.58px,99.266px)
          }
          36.8750% {
            transform:translate(105.146px,99.411px)
          }
          37.1875% {
            transform:translate(104.708px,99.546px)
          }
          37.5000% {
            transform:translate(104.264px,99.672px)
          }
          37.8125% {
            transform:translate(103.815px,99.789px)
          }
          38.1250% {
            transform:translate(103.361px,99.896px)
          }
          38.4375% {
            transform:translate(102.903px,99.994px)
          }
          38.7500% {
            transform:translate(102.441px,100.082px)
          }
          39.0625% {
            transform:translate(101.975px,100.162px)
          }
          39.3750% {
            transform:translate(101.506px,100.232px)
          }
          39.6875% {
            transform:translate(101.034px,100.293px)
          }
          40.0000% {
            transform:translate(100.559px,100.346px)
          }
          40.3125% {
            transform:translate(100.082px,100.389px)
          }
          40.6250% {
            transform:translate(99.603px,100.423px)
          }
          40.9375% {
            transform:translate(99.123px,100.449px)
          }
          41.2500% {
            transform:translate(98.642px,100.465px)
          }
          41.5625% {
            transform:translate(98.161px,100.472px)
          }
          41.8750% {
            transform:translate(97.679px,100.471px)
          }
          42.1875% {
            transform:translate(97.197px,100.46px)
          }
          42.5000% {
            transform:translate(96.717px,100.441px)
          }
          42.8125% {
            transform:translate(96.237px,100.413px)
          }
          43.1250% {
            transform:translate(95.759px,100.376px)
          }
          43.4375% {
            transform:translate(95.282px,100.329px)
          }
          43.7500% {
            transform:translate(94.809px,100.274px)
          }
          44.0625% {
            transform:translate(94.337px,100.21px)
          }
          44.3750% {
            transform:translate(93.869px,100.136px)
          }
          44.6875% {
            transform:translate(93.405px,100.054px)
          }
          45.0000% {
            transform:translate(92.944px,99.962px)
          }
          45.3125% {
            transform:translate(92.487px,99.861px)
          }
          45.6250% {
            transform:translate(92.035px,99.751px)
          }
          45.9375% {
            transform:translate(91.588px,99.631px)
          }
          46.2500% {
            transform:translate(91.145px,99.502px)
          }
          46.5625% {
            transform:translate(90.709px,99.364px)
          }
          46.8750% {
            transform:translate(90.277px,99.216px)
          }
          47.1875% {
            transform:translate(89.852px,99.058px)
          }
          47.5000% {
            transform:translate(89.433px,98.891px)
          }
          47.8125% {
            transform:translate(89.02px,98.713px)
          }
          48.1250% {
            transform:translate(88.614px,98.526px)
          }
          48.4375% {
            transform:translate(88.214px,98.329px)
          }
          48.7500% {
            transform:translate(87.822px,98.122px)
          }
          49.0625% {
            transform:translate(87.436px,97.905px)
          }
          49.3750% {
            transform:translate(87.058px,97.677px)
          }
          49.6875% {
            transform:translate(86.687px,97.439px)
          }
          50.0000% {
            transform:translate(86.323px,97.19px)
          }
          50.3125% {
            transform:translate(85.967px,96.931px)
          }
          50.6250% {
            transform:translate(85.618px,96.661px)
          }
          50.9375% {
            transform:translate(85.277px,96.381px)
          }
          51.2500% {
            transform:translate(84.944px,96.089px)
          }
          51.5625% {
            transform:translate(84.618px,95.786px)
          }
          51.8750% {
            transform:translate(84.3px,95.472px)
          }
          52.1875% {
            transform:translate(83.99px,95.147px)
          }
          52.5000% {
            transform:translate(83.688px,94.811px)
          }
          52.8125% {
            transform:translate(83.393px,94.463px)
          }
          53.1250% {
            transform:translate(83.106px,94.103px)
          }
          53.4375% {
            transform:translate(82.827px,93.732px)
          }
          53.7500% {
            transform:translate(82.556px,93.349px)
          }
          54.0625% {
            transform:translate(82.292px,92.954px)
          }
          54.3750% {
            transform:translate(82.035px,92.548px)
          }
          54.6875% {
            transform:translate(81.787px,92.129px)
          }
          55.0000% {
            transform:translate(81.545px,91.698px)
          }
          55.3125% {
            transform:translate(81.312px,91.256px)
          }
          55.6250% {
            transform:translate(81.085px,90.801px)
          }
          55.9375% {
            transform:translate(80.866px,90.334px)
          }
          56.2500% {
            transform:translate(80.655px,89.854px)
          }
          56.5625% {
            transform:translate(80.45px,89.363px)
          }
          56.8750% {
            transform:translate(80.253px,88.859px)
          }
          57.1875% {
            transform:translate(80.063px,88.343px)
          }
          57.5000% {
            transform:translate(79.879px,87.816px)
          }
          57.8125% {
            transform:translate(79.703px,87.276px)
          }
          58.1250% {
            transform:translate(79.533px,86.724px)
          }
          58.4375% {
            transform:translate(79.371px,86.16px)
          }
          58.7500% {
            transform:translate(79.215px,85.585px)
          }
          59.0625% {
            transform:translate(79.066px,84.998px)
          }
          59.3750% {
            transform:translate(78.923px,84.4px)
          }
          59.6875% {
            transform:translate(78.787px,83.79px)
          }
          60.0000% {
            transform:translate(78.657px,83.169px)
          }
          60.3125% {
            transform:translate(78.534px,82.538px)
          }
          60.6250% {
            transform:translate(78.417px,81.896px)
          }
          60.9375% {
            transform:translate(78.306px,81.244px)
          }
          61.2500% {
            transform:translate(78.202px,80.582px)
          }
          61.5625% {
            transform:translate(78.103px,79.911px)
          }
          61.8750% {
            transform:translate(78.011px,79.23px)
          }
          62.1875% {
            transform:translate(77.925px,78.541px)
          }
          62.5000% {
            transform:translate(77.845px,77.843px)
          }
          62.8125% {
            transform:translate(77.771px,77.138px)
          }
          63.1250% {
            transform:translate(77.703px,76.425px)
          }
          63.4375% {
            transform:translate(77.64px,75.705px)
          }
          63.7500% {
            transform:translate(77.584px,74.979px)
          }
          64.0625% {
            transform:translate(77.533px,74.247px)
          }
          64.3750% {
            transform:translate(77.489px,73.509px)
          }
          64.6875% {
            transform:translate(77.45px,72.767px)
          }
          65.0000% {
            transform:translate(77.416px,72.021px)
          }
          65.3125% {
            transform:translate(77.389px,71.272px)
          }
          65.6250% {
            transform:translate(77.367px,70.52px)
          }
          65.9375% {
            transform:translate(77.351px,69.765px)
          }
          66.2500% {
            transform:translate(77.34px,69.009px)
          }
          66.5625% {
            transform:translate(77.336px,68.252px)
          }
          66.8750% {
            transform:translate(77.337px,67.495px)
          }
          67.1875% {
            transform:translate(77.343px,66.739px)
          }
          67.5000% {
            transform:translate(77.356px,65.983px)
          }
          67.8125% {
            transform:translate(77.374px,65.229px)
          }
          68.1250% {
            transform:translate(77.397px,64.478px)
          }
          68.4375% {
            transform:translate(77.427px,63.73px)
          }
          68.7500% {
            transform:translate(77.462px,62.985px)
          }
          69.0625% {
            transform:translate(77.503px,62.244px)
          }
          69.3750% {
            transform:translate(77.55px,61.509px)
          }
          69.6875% {
            transform:translate(77.602px,60.779px)
          }
          70.0000% {
            transform:translate(77.661px,60.055px)
          }
          70.3125% {
            transform:translate(77.725px,59.337px)
          }
          70.6250% {
            transform:translate(77.795px,58.626px)
          }
          70.9375% {
            transform:translate(77.871px,57.923px)
          }
          71.2500% {
            transform:translate(77.953px,57.229px)
          }
          71.5625% {
            transform:translate(78.041px,56.542px)
          }
          71.8750% {
            transform:translate(78.135px,55.864px)
          }
          72.1875% {
            transform:translate(78.236px,55.196px)
          }
          72.5000% {
            transform:translate(78.342px,54.537px)
          }
          72.8125% {
            transform:translate(78.455px,53.889px)
          }
          73.1250% {
            transform:translate(78.574px,53.25px)
          }
          73.4375% {
            transform:translate(78.7px,52.623px)
          }
          73.7500% {
            transform:translate(78.831px,52.006px)
          }
          74.0625% {
            transform:translate(78.97px,51.4px)
          }
          74.3750% {
            transform:translate(79.115px,50.805px)
          }
          74.6875% {
            transform:translate(79.266px,50.222px)
          }
          75.0000% {
            transform:translate(79.424px,49.651px)
          }
          75.3125% {
            transform:translate(79.589px,49.091px)
          }
          75.6250% {
            transform:translate(79.761px,48.543px)
          }
          75.9375% {
            transform:translate(79.94px,48.007px)
          }
          76.2500% {
            transform:translate(80.125px,47.483px)
          }
          76.5625% {
            transform:translate(80.318px,46.972px)
          }
          76.8750% {
            transform:translate(80.518px,46.472px)
          }
          77.1875% {
            transform:translate(80.724px,45.985px)
          }
          77.5000% {
            transform:translate(80.939px,45.509px)
          }
          77.8125% {
            transform:translate(81.16px,45.046px)
          }
          78.1250% {
            transform:translate(81.389px,44.596px)
          }
          78.4375% {
            transform:translate(81.625px,44.157px)
          }
          78.7500% {
            transform:translate(81.869px,43.73px)
          }
          79.0625% {
            transform:translate(82.12px,43.315px)
          }
          79.3750% {
            transform:translate(82.379px,42.913px)
          }
          79.6875% {
            transform:translate(82.645px,42.522px)
          }
          80.0000% {
            transform:translate(82.919px,42.143px)
          }
          80.3125% {
            transform:translate(83.201px,41.776px)
          }
          80.6250% {
            transform:translate(83.491px,41.42px)
          }
          80.9375% {
            transform:translate(83.788px,41.076px)
          }
          81.2500% {
            transform:translate(84.093px,40.743px)
          }
          81.5625% {
            transform:translate(84.405px,40.422px)
          }
          81.8750% {
            transform:translate(84.726px,40.112px)
          }
          82.1875% {
            transform:translate(85.054px,39.813px)
          }
          82.5000% {
            transform:translate(85.39px,39.525px)
          }
          82.8125% {
            transform:translate(85.734px,39.247px)
          }
          83.1250% {
            transform:translate(86.085px,38.981px)
          }
          83.4375% {
            transform:translate(86.443px,38.726px)
          }
          83.7500% {
            transform:translate(86.81px,38.481px)
          }
          84.0625% {
            transform:translate(87.183px,38.246px)
          }
          84.3750% {
            transform:translate(87.564px,38.022px)
          }
          84.6875% {
            transform:translate(87.952px,37.808px)
          }
          85.0000% {
            transform:translate(88.347px,37.604px)
          }
          85.3125% {
            transform:translate(88.749px,37.41px)
          }
          85.6250% {
            transform:translate(89.157px,37.226px)
          }
          85.9375% {
            transform:translate(89.572px,37.052px)
          }
          86.2500% {
            transform:translate(89.993px,36.888px)
          }
          86.5625% {
            transform:translate(90.42px,36.734px)
          }
          86.8750% {
            transform:translate(90.854px,36.589px)
          }
          87.1875% {
            transform:translate(91.292px,36.454px)
          }
          87.5000% {
            transform:translate(91.736px,36.328px)
          }
          87.8125% {
            transform:translate(92.185px,36.211px)
          }
          88.1250% {
            transform:translate(92.639px,36.104px)
          }
          88.4375% {
            transform:translate(93.097px,36.006px)
          }
          88.7500% {
            transform:translate(93.559px,35.918px)
          }
          89.0625% {
            transform:translate(94.025px,35.838px)
          }
          89.3750% {
            transform:translate(94.494px,35.768px)
          }
          89.6875% {
            transform:translate(94.966px,35.707px)
          }
          90.0000% {
            transform:translate(95.441px,35.654px)
          }
          90.3125% {
            transform:translate(95.918px,35.611px)
          }
          90.6250% {
            transform:translate(96.397px,35.577px)
          }
          90.9375% {
            transform:translate(96.877px,35.551px)
          }
          91.2500% {
            transform:translate(97.358px,35.535px)
          }
          91.5625% {
            transform:translate(97.839px,35.528px)
          }
          91.8750% {
            transform:translate(98.321px,35.529px)
          }
          92.1875% {
            transform:translate(98.803px,35.54px)
          }
          92.5000% {
            transform:translate(99.283px,35.559px)
          }
          92.8125% {
            transform:translate(99.763px,35.587px)
          }
          93.1250% {
            transform:translate(100.241px,35.624px)
          }
          93.4375% {
            transform:translate(100.718px,35.671px)
          }
          93.7500% {
            transform:translate(101.191px,35.726px)
          }
          94.0625% {
            transform:translate(101.663px,35.79px)
          }
          94.3750% {
            transform:translate(102.131px,35.864px)
          }
          94.6875% {
            transform:translate(102.595px,35.946px)
          }
          95.0000% {
            transform:translate(103.056px,36.038px)
          }
          95.3125% {
            transform:translate(103.513px,36.139px)
          }
          95.6250% {
            transform:translate(103.965px,36.249px)
          }
          95.9375% {
            transform:translate(104.412px,36.369px)
          }
          96.2500% {
            transform:translate(104.855px,36.498px)
          }
          96.5625% {
            transform:translate(105.291px,36.636px)
          }
          96.8750% {
            transform:translate(105.723px,36.784px)
          }
          97.1875% {
            transform:translate(106.148px,36.942px)
          }
          97.5000% {
            transform:translate(106.567px,37.109px)
          }
          97.8125% {
            transform:translate(106.98px,37.287px)
          }
          98.1250% {
            transform:translate(107.386px,37.474px)
          }
          98.4375% {
            transform:translate(107.786px,37.671px)
          }
          98.7500% {
            transform:translate(108.178px,37.878px)
          }
          99.0625% {
            transform:translate(108.564px,38.095px)
          }
          99.3750% {
            transform:translate(108.942px,38.323px)
          }
          99.6875% {
            transform:translate(109.313px,38.561px)
          }
          100.0000% {
            transform:translate(109.677px,38.81px)
          }
        }
        .marker-5 {
          animation:rip-marker-5 16s linear infinite
        }
        @keyframes rip-marker-5 {
          0.0000% {
            transform:translate(109.677px,97.19px)
          }
          0.3125% {
            transform:translate(109.313px,97.439px)
          }
          0.6250% {
            transform:translate(108.942px,97.677px)
          }
          0.9375% {
            transform:translate(108.564px,97.905px)
          }
          1.2500% {
            transform:translate(108.178px,98.122px)
          }
          1.5625% {
            transform:translate(107.786px,98.329px)
          }
          1.8750% {
            transform:translate(107.386px,98.526px)
          }
          2.1875% {
            transform:translate(106.98px,98.713px)
          }
          2.5000% {
            transform:translate(106.567px,98.891px)
          }
          2.8125% {
            transform:translate(106.148px,99.058px)
          }
          3.1250% {
            transform:translate(105.723px,99.216px)
          }
          3.4375% {
            transform:translate(105.291px,99.364px)
          }
          3.7500% {
            transform:translate(104.855px,99.502px)
          }
          4.0625% {
            transform:translate(104.412px,99.631px)
          }
          4.3750% {
            transform:translate(103.965px,99.751px)
          }
          4.6875% {
            transform:translate(103.513px,99.861px)
          }
          5.0000% {
            transform:translate(103.056px,99.962px)
          }
          5.3125% {
            transform:translate(102.595px,100.054px)
          }
          5.6250% {
            transform:translate(102.131px,100.136px)
          }
          5.9375% {
            transform:translate(101.663px,100.21px)
          }
          6.2500% {
            transform:translate(101.191px,100.274px)
          }
          6.5625% {
            transform:translate(100.718px,100.329px)
          }
          6.8750% {
            transform:translate(100.241px,100.376px)
          }
          7.1875% {
            transform:translate(99.763px,100.413px)
          }
          7.5000% {
            transform:translate(99.283px,100.441px)
          }
          7.8125% {
            transform:translate(98.803px,100.46px)
          }
          8.1250% {
            transform:translate(98.321px,100.471px)
          }
          8.4375% {
            transform:translate(97.839px,100.472px)
          }
          8.7500% {
            transform:translate(97.358px,100.465px)
          }
          9.0625% {
            transform:translate(96.877px,100.449px)
          }
          9.3750% {
            transform:translate(96.397px,100.423px)
          }
          9.6875% {
            transform:translate(95.918px,100.389px)
          }
          10.0000% {
            transform:translate(95.441px,100.346px)
          }
          10.3125% {
            transform:translate(94.966px,100.293px)
          }
          10.6250% {
            transform:translate(94.494px,100.232px)
          }
          10.9375% {
            transform:translate(94.025px,100.162px)
          }
          11.2500% {
            transform:translate(93.559px,100.082px)
          }
          11.5625% {
            transform:translate(93.097px,99.994px)
          }
          11.8750% {
            transform:translate(92.639px,99.896px)
          }
          12.1875% {
            transform:translate(92.185px,99.789px)
          }
          12.5000% {
            transform:translate(91.736px,99.672px)
          }
          12.8125% {
            transform:translate(91.292px,99.546px)
          }
          13.1250% {
            transform:translate(90.854px,99.411px)
          }
          13.4375% {
            transform:translate(90.42px,99.266px)
          }
          13.7500% {
            transform:translate(89.993px,99.112px)
          }
          14.0625% {
            transform:translate(89.572px,98.948px)
          }
          14.3750% {
            transform:translate(89.157px,98.774px)
          }
          14.6875% {
            transform:translate(88.749px,98.59px)
          }
          15.0000% {
            transform:translate(88.347px,98.396px)
          }
          15.3125% {
            transform:translate(87.952px,98.192px)
          }
          15.6250% {
            transform:translate(87.564px,97.978px)
          }
          15.9375% {
            transform:translate(87.183px,97.754px)
          }
          16.2500% {
            transform:translate(86.81px,97.519px)
          }
          16.5625% {
            transform:translate(86.443px,97.274px)
          }
          16.8750% {
            transform:translate(86.085px,97.019px)
          }
          17.1875% {
            transform:translate(85.734px,96.753px)
          }
          17.5000% {
            transform:translate(85.39px,96.475px)
          }
          17.8125% {
            transform:translate(85.054px,96.187px)
          }
          18.1250% {
            transform:translate(84.726px,95.888px)
          }
          18.4375% {
            transform:translate(84.405px,95.578px)
          }
          18.7500% {
            transform:translate(84.093px,95.257px)
          }
          19.0625% {
            transform:translate(83.788px,94.924px)
          }
          19.3750% {
            transform:translate(83.491px,94.58px)
          }
          19.6875% {
            transform:translate(83.201px,94.224px)
          }
          20.0000% {
            transform:translate(82.919px,93.857px)
          }
          20.3125% {
            transform:translate(82.645px,93.478px)
          }
          20.6250% {
            transform:translate(82.379px,93.087px)
          }
          20.9375% {
            transform:translate(82.12px,92.685px)
          }
          21.2500% {
            transform:translate(81.869px,92.27px)
          }
          21.5625% {
            transform:translate(81.625px,91.843px)
          }
          21.8750% {
            transform:translate(81.389px,91.404px)
          }
          22.1875% {
            transform:translate(81.16px,90.954px)
          }
          22.5000% {
            transform:translate(80.939px,90.491px)
          }
          22.8125% {
            transform:translate(80.724px,90.015px)
          }
          23.1250% {
            transform:translate(80.518px,89.528px)
          }
          23.4375% {
            transform:translate(80.318px,89.028px)
          }
          23.7500% {
            transform:translate(80.125px,88.517px)
          }
          24.0625% {
            transform:translate(79.94px,87.993px)
          }
          24.3750% {
            transform:translate(79.761px,87.457px)
          }
          24.6875% {
            transform:translate(79.589px,86.909px)
          }
          25.0000% {
            transform:translate(79.424px,86.349px)
          }
          25.3125% {
            transform:translate(79.266px,85.778px)
          }
          25.6250% {
            transform:translate(79.115px,85.195px)
          }
          25.9375% {
            transform:translate(78.97px,84.6px)
          }
          26.2500% {
            transform:translate(78.831px,83.994px)
          }
          26.5625% {
            transform:translate(78.7px,83.377px)
          }
          26.8750% {
            transform:translate(78.574px,82.75px)
          }
          27.1875% {
            transform:translate(78.455px,82.111px)
          }
          27.5000% {
            transform:translate(78.342px,81.463px)
          }
          27.8125% {
            transform:translate(78.236px,80.804px)
          }
          28.1250% {
            transform:translate(78.135px,80.136px)
          }
          28.4375% {
            transform:translate(78.041px,79.458px)
          }
          28.7500% {
            transform:translate(77.953px,78.771px)
          }
          29.0625% {
            transform:translate(77.871px,78.077px)
          }
          29.3750% {
            transform:translate(77.795px,77.374px)
          }
          29.6875% {
            transform:translate(77.725px,76.663px)
          }
          30.0000% {
            transform:translate(77.661px,75.945px)
          }
          30.3125% {
            transform:translate(77.602px,75.221px)
          }
          30.6250% {
            transform:translate(77.55px,74.491px)
          }
          30.9375% {
            transform:translate(77.503px,73.756px)
          }
          31.2500% {
            transform:translate(77.462px,73.015px)
          }
          31.5625% {
            transform:translate(77.427px,72.27px)
          }
          31.8750% {
            transform:translate(77.397px,71.522px)
          }
          32.1875% {
            transform:translate(77.374px,70.771px)
          }
          32.5000% {
            transform:translate(77.356px,70.017px)
          }
          32.8125% {
            transform:translate(77.343px,69.261px)
          }
          33.1250% {
            transform:translate(77.337px,68.505px)
          }
          33.4375% {
            transform:translate(77.336px,67.748px)
          }
          33.7500% {
            transform:translate(77.34px,66.991px)
          }
          34.0625% {
            transform:translate(77.351px,66.235px)
          }
          34.3750% {
            transform:translate(77.367px,65.48px)
          }
          34.6875% {
            transform:translate(77.389px,64.728px)
          }
          35.0000% {
            transform:translate(77.416px,63.979px)
          }
          35.3125% {
            transform:translate(77.45px,63.233px)
          }
          35.6250% {
            transform:translate(77.489px,62.491px)
          }
          35.9375% {
            transform:translate(77.533px,61.753px)
          }
          36.2500% {
            transform:translate(77.584px,61.021px)
          }
          36.5625% {
            transform:translate(77.64px,60.295px)
          }
          36.8750% {
            transform:translate(77.703px,59.575px)
          }
          37.1875% {
            transform:translate(77.771px,58.862px)
          }
          37.5000% {
            transform:translate(77.845px,58.157px)
          }
          37.8125% {
            transform:translate(77.925px,57.459px)
          }
          38.1250% {
            transform:translate(78.011px,56.77px)
          }
          38.4375% {
            transform:translate(78.103px,56.089px)
          }
          38.7500% {
            transform:translate(78.202px,55.418px)
          }
          39.0625% {
            transform:translate(78.306px,54.756px)
          }
          39.3750% {
            transform:translate(78.417px,54.104px)
          }
          39.6875% {
            transform:translate(78.534px,53.462px)
          }
          40.0000% {
            transform:translate(78.657px,52.831px)
          }
          40.3125% {
            transform:translate(78.787px,52.21px)
          }
          40.6250% {
            transform:translate(78.923px,51.6px)
          }
          40.9375% {
            transform:translate(79.066px,51.002px)
          }
          41.2500% {
            transform:translate(79.215px,50.415px)
          }
          41.5625% {
            transform:translate(79.371px,49.84px)
          }
          41.8750% {
            transform:translate(79.533px,49.276px)
          }
          42.1875% {
            transform:translate(79.703px,48.724px)
          }
          42.5000% {
            transform:translate(79.879px,48.184px)
          }
          42.8125% {
            transform:translate(80.063px,47.657px)
          }
          43.1250% {
            transform:translate(80.253px,47.141px)
          }
          43.4375% {
            transform:translate(80.45px,46.637px)
          }
          43.7500% {
            transform:translate(80.655px,46.146px)
          }
          44.0625% {
            transform:translate(80.866px,45.666px)
          }
          44.3750% {
            transform:translate(81.085px,45.199px)
          }
          44.6875% {
            transform:translate(81.312px,44.744px)
          }
          45.0000% {
            transform:translate(81.545px,44.302px)
          }
          45.3125% {
            transform:translate(81.787px,43.871px)
          }
          45.6250% {
            transform:translate(82.035px,43.452px)
          }
          45.9375% {
            transform:translate(82.292px,43.046px)
          }
          46.2500% {
            transform:translate(82.556px,42.651px)
          }
          46.5625% {
            transform:translate(82.827px,42.268px)
          }
          46.8750% {
            transform:translate(83.106px,41.897px)
          }
          47.1875% {
            transform:translate(83.393px,41.537px)
          }
          47.5000% {
            transform:translate(83.688px,41.189px)
          }
          47.8125% {
            transform:translate(83.99px,40.853px)
          }
          48.1250% {
            transform:translate(84.3px,40.528px)
          }
          48.4375% {
            transform:translate(84.618px,40.214px)
          }
          48.7500% {
            transform:translate(84.944px,39.911px)
          }
          49.0625% {
            transform:translate(85.277px,39.619px)
          }
          49.3750% {
            transform:translate(85.618px,39.339px)
          }
          49.6875% {
            transform:translate(85.967px,39.069px)
          }
          50.0000% {
            transform:translate(86.323px,38.81px)
          }
          50.3125% {
            transform:translate(86.687px,38.561px)
          }
          50.6250% {
            transform:translate(87.058px,38.323px)
          }
          50.9375% {
            transform:translate(87.436px,38.095px)
          }
          51.2500% {
            transform:translate(87.822px,37.878px)
          }
          51.5625% {
            transform:translate(88.214px,37.671px)
          }
          51.8750% {
            transform:translate(88.614px,37.474px)
          }
          52.1875% {
            transform:translate(89.02px,37.287px)
          }
          52.5000% {
            transform:translate(89.433px,37.109px)
          }
          52.8125% {
            transform:translate(89.852px,36.942px)
          }
          53.1250% {
            transform:translate(90.277px,36.784px)
          }
          53.4375% {
            transform:translate(90.709px,36.636px)
          }
          53.7500% {
            transform:translate(91.145px,36.498px)
          }
          54.0625% {
            transform:translate(91.588px,36.369px)
          }
          54.3750% {
            transform:translate(92.035px,36.249px)
          }
          54.6875% {
            transform:translate(92.487px,36.139px)
          }
          55.0000% {
            transform:translate(92.944px,36.038px)
          }
          55.3125% {
            transform:translate(93.405px,35.946px)
          }
          55.6250% {
            transform:translate(93.869px,35.864px)
          }
          55.9375% {
            transform:translate(94.337px,35.79px)
          }
          56.2500% {
            transform:translate(94.809px,35.726px)
          }
          56.5625% {
            transform:translate(95.282px,35.671px)
          }
          56.8750% {
            transform:translate(95.759px,35.624px)
          }
          57.1875% {
            transform:translate(96.237px,35.587px)
          }
          57.5000% {
            transform:translate(96.717px,35.559px)
          }
          57.8125% {
            transform:translate(97.197px,35.54px)
          }
          58.1250% {
            transform:translate(97.679px,35.529px)
          }
          58.4375% {
            transform:translate(98.161px,35.528px)
          }
          58.7500% {
            transform:translate(98.642px,35.535px)
          }
          59.0625% {
            transform:translate(99.123px,35.551px)
          }
          59.3750% {
            transform:translate(99.603px,35.577px)
          }
          59.6875% {
            transform:translate(100.082px,35.611px)
          }
          60.0000% {
            transform:translate(100.559px,35.654px)
          }
          60.3125% {
            transform:translate(101.034px,35.707px)
          }
          60.6250% {
            transform:translate(101.506px,35.768px)
          }
          60.9375% {
            transform:translate(101.975px,35.838px)
          }
          61.2500% {
            transform:translate(102.441px,35.918px)
          }
          61.5625% {
            transform:translate(102.903px,36.006px)
          }
          61.8750% {
            transform:translate(103.361px,36.104px)
          }
          62.1875% {
            transform:translate(103.815px,36.211px)
          }
          62.5000% {
            transform:translate(104.264px,36.328px)
          }
          62.8125% {
            transform:translate(104.708px,36.454px)
          }
          63.1250% {
            transform:translate(105.146px,36.589px)
          }
          63.4375% {
            transform:translate(105.58px,36.734px)
          }
          63.7500% {
            transform:translate(106.007px,36.888px)
          }
          64.0625% {
            transform:translate(106.428px,37.052px)
          }
          64.3750% {
            transform:translate(106.843px,37.226px)
          }
          64.6875% {
            transform:translate(107.251px,37.41px)
          }
          65.0000% {
            transform:translate(107.653px,37.604px)
          }
          65.3125% {
            transform:translate(108.048px,37.808px)
          }
          65.6250% {
            transform:translate(108.436px,38.022px)
          }
          65.9375% {
            transform:translate(108.817px,38.246px)
          }
          66.2500% {
            transform:translate(109.19px,38.481px)
          }
          66.5625% {
            transform:translate(109.557px,38.726px)
          }
          66.8750% {
            transform:translate(109.915px,38.981px)
          }
          67.1875% {
            transform:translate(110.266px,39.247px)
          }
          67.5000% {
            transform:translate(110.61px,39.525px)
          }
          67.8125% {
            transform:translate(110.946px,39.813px)
          }
          68.1250% {
            transform:translate(111.274px,40.112px)
          }
          68.4375% {
            transform:translate(111.595px,40.422px)
          }
          68.7500% {
            transform:translate(111.907px,40.743px)
          }
          69.0625% {
            transform:translate(112.212px,41.076px)
          }
          69.3750% {
            transform:translate(112.509px,41.42px)
          }
          69.6875% {
            transform:translate(112.799px,41.776px)
          }
          70.0000% {
            transform:translate(113.081px,42.143px)
          }
          70.3125% {
            transform:translate(113.355px,42.522px)
          }
          70.6250% {
            transform:translate(113.621px,42.913px)
          }
          70.9375% {
            transform:translate(113.88px,43.315px)
          }
          71.2500% {
            transform:translate(114.131px,43.73px)
          }
          71.5625% {
            transform:translate(114.375px,44.157px)
          }
          71.8750% {
            transform:translate(114.611px,44.596px)
          }
          72.1875% {
            transform:translate(114.84px,45.046px)
          }
          72.5000% {
            transform:translate(115.061px,45.509px)
          }
          72.8125% {
            transform:translate(115.276px,45.985px)
          }
          73.1250% {
            transform:translate(115.482px,46.472px)
          }
          73.4375% {
            transform:translate(115.682px,46.972px)
          }
          73.7500% {
            transform:translate(115.875px,47.483px)
          }
          74.0625% {
            transform:translate(116.06px,48.007px)
          }
          74.3750% {
            transform:translate(116.239px,48.543px)
          }
          74.6875% {
            transform:translate(116.411px,49.091px)
          }
          75.0000% {
            transform:translate(116.576px,49.651px)
          }
          75.3125% {
            transform:translate(116.734px,50.222px)
          }
          75.6250% {
            transform:translate(116.885px,50.805px)
          }
          75.9375% {
            transform:translate(117.03px,51.4px)
          }
          76.2500% {
            transform:translate(117.169px,52.006px)
          }
          76.5625% {
            transform:translate(117.3px,52.623px)
          }
          76.8750% {
            transform:translate(117.426px,53.25px)
          }
          77.1875% {
            transform:translate(117.545px,53.889px)
          }
          77.5000% {
            transform:translate(117.658px,54.537px)
          }
          77.8125% {
            transform:translate(117.764px,55.196px)
          }
          78.1250% {
            transform:translate(117.865px,55.864px)
          }
          78.4375% {
            transform:translate(117.959px,56.542px)
          }
          78.7500% {
            transform:translate(118.047px,57.229px)
          }
          79.0625% {
            transform:translate(118.129px,57.923px)
          }
          79.3750% {
            transform:translate(118.205px,58.626px)
          }
          79.6875% {
            transform:translate(118.275px,59.337px)
          }
          80.0000% {
            transform:translate(118.339px,60.055px)
          }
          80.3125% {
            transform:translate(118.398px,60.779px)
          }
          80.6250% {
            transform:translate(118.45px,61.509px)
          }
          80.9375% {
            transform:translate(118.497px,62.244px)
          }
          81.2500% {
            transform:translate(118.538px,62.985px)
          }
          81.5625% {
            transform:translate(118.573px,63.73px)
          }
          81.8750% {
            transform:translate(118.603px,64.478px)
          }
          82.1875% {
            transform:translate(118.626px,65.229px)
          }
          82.5000% {
            transform:translate(118.644px,65.983px)
          }
          82.8125% {
            transform:translate(118.657px,66.739px)
          }
          83.1250% {
            transform:translate(118.663px,67.495px)
          }
          83.4375% {
            transform:translate(118.664px,68.252px)
          }
          83.7500% {
            transform:translate(118.66px,69.009px)
          }
          84.0625% {
            transform:translate(118.649px,69.765px)
          }
          84.3750% {
            transform:translate(118.633px,70.52px)
          }
          84.6875% {
            transform:translate(118.611px,71.272px)
          }
          85.0000% {
            transform:translate(118.584px,72.021px)
          }
          85.3125% {
            transform:translate(118.55px,72.767px)
          }
          85.6250% {
            transform:translate(118.511px,73.509px)
          }
          85.9375% {
            transform:translate(118.467px,74.247px)
          }
          86.2500% {
            transform:translate(118.416px,74.979px)
          }
          86.5625% {
            transform:translate(118.36px,75.705px)
          }
          86.8750% {
            transform:translate(118.297px,76.425px)
          }
          87.1875% {
            transform:translate(118.229px,77.138px)
          }
          87.5000% {
            transform:translate(118.155px,77.843px)
          }
          87.8125% {
            transform:translate(118.075px,78.541px)
          }
          88.1250% {
            transform:translate(117.989px,79.23px)
          }
          88.4375% {
            transform:translate(117.897px,79.911px)
          }
          88.7500% {
            transform:translate(117.798px,80.582px)
          }
          89.0625% {
            transform:translate(117.694px,81.244px)
          }
          89.3750% {
            transform:translate(117.583px,81.896px)
          }
          89.6875% {
            transform:translate(117.466px,82.538px)
          }
          90.0000% {
            transform:translate(117.343px,83.169px)
          }
          90.3125% {
            transform:translate(117.213px,83.79px)
          }
          90.6250% {
            transform:translate(117.077px,84.4px)
          }
          90.9375% {
            transform:translate(116.934px,84.998px)
          }
          91.2500% {
            transform:translate(116.785px,85.585px)
          }
          91.5625% {
            transform:translate(116.629px,86.16px)
          }
          91.8750% {
            transform:translate(116.467px,86.724px)
          }
          92.1875% {
            transform:translate(116.297px,87.276px)
          }
          92.5000% {
            transform:translate(116.121px,87.816px)
          }
          92.8125% {
            transform:translate(115.937px,88.343px)
          }
          93.1250% {
            transform:translate(115.747px,88.859px)
          }
          93.4375% {
            transform:translate(115.55px,89.363px)
          }
          93.7500% {
            transform:translate(115.345px,89.854px)
          }
          94.0625% {
            transform:translate(115.134px,90.334px)
          }
          94.3750% {
            transform:translate(114.915px,90.801px)
          }
          94.6875% {
            transform:translate(114.688px,91.256px)
          }
          95.0000% {
            transform:translate(114.455px,91.698px)
          }
          95.3125% {
            transform:translate(114.213px,92.129px)
          }
          95.6250% {
            transform:translate(113.965px,92.548px)
          }
          95.9375% {
            transform:translate(113.708px,92.954px)
          }
          96.2500% {
            transform:translate(113.444px,93.349px)
          }
          96.5625% {
            transform:translate(113.173px,93.732px)
          }
          96.8750% {
            transform:translate(112.894px,94.103px)
          }
          97.1875% {
            transform:translate(112.607px,94.463px)
          }
          97.5000% {
            transform:translate(112.312px,94.811px)
          }
          97.8125% {
            transform:translate(112.01px,95.147px)
          }
          98.1250% {
            transform:translate(111.7px,95.472px)
          }
          98.4375% {
            transform:translate(111.382px,95.786px)
          }
          98.7500% {
            transform:translate(111.056px,96.089px)
          }
          99.0625% {
            transform:translate(110.723px,96.381px)
          }
          99.3750% {
            transform:translate(110.382px,96.661px)
          }
          99.6875% {
            transform:translate(110.033px,96.931px)
          }
          100.0000% {
            transform:translate(109.677px,97.19px)
          }
        }
        @keyframes rip-crests {
          0% {
            transform:translateY(0);
            opacity:0
          }
          15% {
            opacity:.8
          }
          70% {
            opacity:.8
          }
          100% {
            transform:translateY(66px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Rip-Current Circulation">
        <path class="sea" d="M14 24H126V112H14Z"/>
        <path class="beach" d="M14 112H126V131H14Z"/>
        <path class="sand" d="M19 122H25M39 119H44M67 126H72M91 121H96M115 128H120"/>
        <rect class="bar" x="14" y="73" width="42" height="6" rx="2"/>
        <rect class="bar" x="84" y="73" width="42" height="6" rx="2"/>
        <path class="circulation-ribbon" d="M62.665,68L62.653,66.487L62.619,64.979L62.562,63.481L62.482,61.999L62.379,60.537L62.252,59.099L62.102,57.691L61.928,56.315L61.729,54.975L61.506,53.675L61.257,52.416L60.983,51.2L60.682,50.03L60.354,48.907L59.999,47.831L59.616,46.804L59.205,45.825L58.765,44.895L58.295,44.013L57.795,43.18L57.264,42.394L56.703,41.656L56.111,40.964L55.489,40.317L54.835,39.715L54.15,39.158L53.435,38.643L52.691,38.17L51.917,37.739L51.116,37.348L50.288,36.997L49.436,36.685L48.56,36.411L47.664,36.175L46.749,35.976L45.819,35.814L44.876,35.688L43.923,35.599L42.963,35.545L42.0,35.527L41.037,35.545L40.077,35.599L39.124,35.688L38.181,35.814L37.251,35.976L36.336,36.175L35.44,36.411L34.564,36.685L33.712,36.997L32.884,37.348L32.083,37.739L31.309,38.17L30.565,38.643L29.85,39.158L29.165,39.715L28.511,40.317L27.889,40.964L27.297,41.656L26.736,42.394L26.205,43.18L25.705,44.013L25.235,44.895L24.795,45.825L24.384,46.804L24.001,47.831L23.646,48.907L23.318,50.03L23.017,51.2L22.743,52.416L22.494,53.675L22.271,54.975L22.072,56.315L21.898,57.691L21.748,59.099L21.621,60.537L21.518,61.999L21.438,63.481L21.381,64.979L21.347,66.487L21.335,68.0L21.347,69.513L21.381,71.021L21.438,72.519L21.518,74.001L21.621,75.463L21.748,76.901L21.898,78.309L22.072,79.685L22.271,81.025L22.494,82.325L22.743,83.584L23.017,84.8L23.318,85.97L23.646,87.093L24.001,88.169L24.384,89.196L24.795,90.175L25.235,91.105L25.705,91.987L26.205,92.82L26.736,93.606L27.297,94.344L27.889,95.036L28.511,95.683L29.165,96.285L29.85,96.842L30.565,97.357L31.309,97.83L32.083,98.261L32.884,98.652L33.712,99.003L34.564,99.315L35.44,99.589L36.336,99.825L37.251,100.024L38.181,100.186L39.124,100.312L40.077,100.401L41.037,100.455L42.0,100.473L42.963,100.455L43.923,100.401L44.876,100.312L45.819,100.186L46.749,100.024L47.664,99.825L48.56,99.589L49.436,99.315L50.288,99.003L51.116,98.652L51.917,98.261L52.691,97.83L53.435,97.357L54.15,96.842L54.835,96.285L55.489,95.683L56.111,95.036L56.703,94.344L57.264,93.606L57.795,92.82L58.295,91.987L58.765,91.105L59.205,90.175L59.616,89.196L59.999,88.169L60.354,87.093L60.682,85.97L60.983,84.8L61.257,83.584L61.506,82.325L61.729,81.025L61.928,79.685L62.102,78.309L62.252,76.901L62.379,75.463L62.482,74.001L62.562,72.519L62.619,71.021L62.653,69.513L62.665,68Z"/>
        <path class="circulation-ribbon" d="M77.335,68L77.347,66.487L77.381,64.979L77.438,63.481L77.518,61.999L77.621,60.537L77.748,59.099L77.898,57.691L78.072,56.315L78.271,54.975L78.494,53.675L78.743,52.416L79.017,51.2L79.318,50.03L79.646,48.907L80.001,47.831L80.384,46.804L80.795,45.825L81.235,44.895L81.705,44.013L82.205,43.18L82.736,42.394L83.297,41.656L83.889,40.964L84.511,40.317L85.165,39.715L85.85,39.158L86.565,38.643L87.309,38.17L88.083,37.739L88.884,37.348L89.712,36.997L90.564,36.685L91.44,36.411L92.336,36.175L93.251,35.976L94.181,35.814L95.124,35.688L96.077,35.599L97.037,35.545L98.0,35.527L98.963,35.545L99.923,35.599L100.876,35.688L101.819,35.814L102.749,35.976L103.664,36.175L104.56,36.411L105.436,36.685L106.288,36.997L107.116,37.348L107.917,37.739L108.691,38.17L109.435,38.643L110.15,39.158L110.835,39.715L111.489,40.317L112.111,40.964L112.703,41.656L113.264,42.394L113.795,43.18L114.295,44.013L114.765,44.895L115.205,45.825L115.616,46.804L115.999,47.831L116.354,48.907L116.682,50.03L116.983,51.2L117.257,52.416L117.506,53.675L117.729,54.975L117.928,56.315L118.102,57.691L118.252,59.099L118.379,60.537L118.482,61.999L118.562,63.481L118.619,64.979L118.653,66.487L118.665,68.0L118.653,69.513L118.619,71.021L118.562,72.519L118.482,74.001L118.379,75.463L118.252,76.901L118.102,78.309L117.928,79.685L117.729,81.025L117.506,82.325L117.257,83.584L116.983,84.8L116.682,85.97L116.354,87.093L115.999,88.169L115.616,89.196L115.205,90.175L114.765,91.105L114.295,91.987L113.795,92.82L113.264,93.606L112.703,94.344L112.111,95.036L111.489,95.683L110.835,96.285L110.15,96.842L109.435,97.357L108.691,97.83L107.917,98.261L107.116,98.652L106.288,99.003L105.436,99.315L104.56,99.589L103.664,99.825L102.749,100.024L101.819,100.186L100.876,100.312L99.923,100.401L98.963,100.455L98.0,100.473L97.037,100.455L96.077,100.401L95.124,100.312L94.181,100.186L93.251,100.024L92.336,99.825L91.44,99.589L90.564,99.315L89.712,99.003L88.884,98.652L88.083,98.261L87.309,97.83L86.565,97.357L85.85,96.842L85.165,96.285L84.511,95.683L83.889,95.036L83.297,94.344L82.736,93.606L82.205,92.82L81.705,91.987L81.235,91.105L80.795,90.175L80.384,89.196L80.001,88.169L79.646,87.093L79.318,85.97L79.017,84.8L78.743,83.584L78.494,82.325L78.271,81.025L78.072,79.685L77.898,78.309L77.748,76.901L77.621,75.463L77.518,74.001L77.438,72.519L77.381,71.021L77.347,69.513L77.335,68Z"/>
        <path class="incoming-crests" d="M15 34Q34 31 55 34M85 34Q106 31 125 34"/>
        <path class="jet" d="M70 83V52M66 57L70 52L74 57"/>
        <path class="feeders" d="M35 103H59M55 100L59 103L55 106M105 103H81M85 100L81 103L85 106"/>
        <circle class="water-marker marker-0" r="1.7" transform="translate(62.665,68)"/>
        <circle class="water-marker marker-1" r="1.7" transform="translate(30.323,38.81)"/>
        <circle class="water-marker marker-2" r="1.7" transform="translate(30.323,97.19)"/>
        <circle class="water-marker marker-3" r="1.7" transform="translate(77.335,68)"/>
        <circle class="water-marker marker-4" r="1.7" transform="translate(109.677,38.81)"/>
        <circle class="water-marker marker-5" r="1.7" transform="translate(109.677,97.19)"/>
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

if (!customElements.get("concept-rip-current-circulation")) {
  customElements.define("concept-rip-current-circulation", ConceptRipCurrentCirculation);
}
