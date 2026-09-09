// Watershed Divide. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptWatershedDivide extends HTMLElement {
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
        .basin0 {
          animation:basin0 16s linear infinite;
        }
        .basin0 {
          animation:basin0 16s linear infinite;
        }
        .basin1 {
          animation:basin1 16s linear infinite;
        }
        .basin1 {
          animation:basin1 16s linear infinite;
        }
        .basin2 {
          animation:basin2 16s linear infinite;
        }
        .basin2 {
          animation:basin2 16s linear infinite;
        }
        .basin3 {
          animation:basin3 16s linear infinite;
        }
        .basin3 {
          animation:basin3 16s linear infinite;
        }
        .basin4 {
          animation:basin4 16s linear infinite;
        }
        .basin4 {
          animation:basin4 16s linear infinite;
        }
        .basin5 {
          animation:basin5 16s linear infinite;
        }
        .basin5 {
          animation:basin5 16s linear infinite;
        }
        @keyframes basin0 {
          0% {
            transform:translate(53px,29px);
            opacity:0;
          }
          2.083% {
            transform:translate(53px,30.705px);
            opacity:0.417;
          }
          4.167% {
            transform:translate(53px,32.409px);
            opacity:0.833;
          }
          6.25% {
            transform:translate(53px,34.114px);
            opacity:1;
          }
          8.333% {
            transform:translate(53px,35.818px);
            opacity:1;
          }
          10.417% {
            transform:translate(53px,37.523px);
            opacity:1;
          }
          12.5% {
            transform:translate(53px,39.227px);
            opacity:1;
          }
          14.583% {
            transform:translate(53px,40.932px);
            opacity:1;
          }
          16.667% {
            transform:translate(53px,42.636px);
            opacity:1;
          }
          18.75% {
            transform:translate(53px,44.341px);
            opacity:1;
          }
          20.833% {
            transform:translate(53px,46.045px);
            opacity:1;
          }
          22.917% {
            transform:translate(52.506px,47.811px);
            opacity:1;
          }
          25% {
            transform:translate(51.385px,49.654px);
            opacity:1;
          }
          27.083% {
            transform:translate(50.263px,51.497px);
            opacity:1;
          }
          29.167% {
            transform:translate(49.141px,53.34px);
            opacity:1;
          }
          31.25% {
            transform:translate(48.019px,55.183px);
            opacity:1;
          }
          33.333% {
            transform:translate(46.897px,57.026px);
            opacity:1;
          }
          35.417% {
            transform:translate(45.776px,58.869px);
            opacity:1;
          }
          37.5% {
            transform:translate(44.654px,60.712px);
            opacity:1;
          }
          39.583% {
            transform:translate(43.532px,62.554px);
            opacity:1;
          }
          41.667% {
            transform:translate(42.41px,64.397px);
            opacity:1;
          }
          43.75% {
            transform:translate(41.288px,66.24px);
            opacity:1;
          }
          45.833% {
            transform:translate(40.167px,68.083px);
            opacity:1;
          }
          47.917% {
            transform:translate(39.045px,69.926px);
            opacity:1;
          }
          50% {
            transform:translate(38.615px,71.769px);
            opacity:1;
          }
          52.083% {
            transform:translate(38.215px,73.612px);
            opacity:1;
          }
          54.167% {
            transform:translate(37.814px,75.455px);
            opacity:1;
          }
          56.25% {
            transform:translate(37.413px,77.298px);
            opacity:1;
          }
          58.333% {
            transform:translate(37.013px,79.141px);
            opacity:1;
          }
          60.417% {
            transform:translate(36.612px,80.984px);
            opacity:1;
          }
          62.5% {
            transform:translate(36.212px,82.827px);
            opacity:1;
          }
          64.583% {
            transform:translate(35.811px,84.67px);
            opacity:1;
          }
          66.667% {
            transform:translate(35.41px,86.513px);
            opacity:1;
          }
          68.75% {
            transform:translate(35.01px,88.356px);
            opacity:1;
          }
          70.833% {
            transform:translate(34.609px,90.199px);
            opacity:1;
          }
          72.917% {
            transform:translate(34.208px,92.042px);
            opacity:1;
          }
          75% {
            transform:translate(33.5px,93.692px);
            opacity:1;
          }
          77.083% {
            transform:translate(32.458px,95.135px);
            opacity:1;
          }
          79.167% {
            transform:translate(31.417px,96.577px);
            opacity:1;
          }
          81.25% {
            transform:translate(30.375px,98.019px);
            opacity:1;
          }
          83.333% {
            transform:translate(29.333px,99.462px);
            opacity:1;
          }
          85.417% {
            transform:translate(28.292px,100.904px);
            opacity:1;
          }
          87.5% {
            transform:translate(27.25px,102.346px);
            opacity:1;
          }
          89.583% {
            transform:translate(26.208px,103.788px);
            opacity:1;
          }
          91.667% {
            transform:translate(25.167px,105.231px);
            opacity:1;
          }
          93.75% {
            transform:translate(24.125px,106.673px);
            opacity:1;
          }
          95.833% {
            transform:translate(23.083px,108.115px);
            opacity:0.833;
          }
          97.917% {
            transform:translate(22.042px,109.558px);
            opacity:0.417;
            opacity:0;
          }
          100% {
            transform:translate(53px,29px);
            opacity:0;
            opacity:0;
          }
        }
        @keyframes basin1 {
          0% {
            transform:translate(59px,64.318px);
            opacity:1;
          }
          2.083% {
            transform:translate(59px,66.023px);
            opacity:1;
          }
          4.167% {
            transform:translate(59px,67.727px);
            opacity:1;
          }
          6.25% {
            transform:translate(59px,69.432px);
            opacity:1;
          }
          8.333% {
            transform:translate(59px,71.136px);
            opacity:1;
          }
          10.417% {
            transform:translate(59px,72.841px);
            opacity:1;
          }
          12.5% {
            transform:translate(59px,74.545px);
            opacity:1;
          }
          14.583% {
            transform:translate(59px,76.25px);
            opacity:1;
          }
          16.667% {
            transform:translate(58.192px,77.583px);
            opacity:1;
          }
          18.75% {
            transform:translate(56.75px,78.625px);
            opacity:1;
          }
          20.833% {
            transform:translate(55.308px,79.667px);
            opacity:1;
          }
          22.917% {
            transform:translate(53.865px,80.708px);
            opacity:1;
          }
          25% {
            transform:translate(52.423px,81.75px);
            opacity:1;
          }
          27.083% {
            transform:translate(50.981px,82.792px);
            opacity:1;
          }
          29.167% {
            transform:translate(49.538px,83.833px);
            opacity:1;
          }
          31.25% {
            transform:translate(48.096px,84.875px);
            opacity:1;
          }
          33.333% {
            transform:translate(46.654px,85.917px);
            opacity:1;
          }
          35.417% {
            transform:translate(45.212px,86.958px);
            opacity:1;
          }
          37.5% {
            transform:translate(43.769px,88px);
            opacity:1;
          }
          39.583% {
            transform:translate(42.327px,89.042px);
            opacity:1;
          }
          41.667% {
            transform:translate(40.955px,90.019px);
            opacity:1;
          }
          43.75% {
            transform:translate(40.394px,90.26px);
            opacity:1;
          }
          45.833% {
            transform:translate(39.833px,90.5px);
            opacity:1;
          }
          47.917% {
            transform:translate(39.272px,90.74px);
            opacity:1;
          }
          50% {
            transform:translate(38.712px,90.981px);
            opacity:1;
          }
          52.083% {
            transform:translate(38.151px,91.221px);
            opacity:1;
          }
          54.167% {
            transform:translate(37.59px,91.462px);
            opacity:1;
          }
          56.25% {
            transform:translate(37.029px,91.702px);
            opacity:1;
          }
          58.333% {
            transform:translate(36.468px,91.942px);
            opacity:1;
          }
          60.417% {
            transform:translate(35.907px,92.183px);
            opacity:1;
          }
          62.5% {
            transform:translate(35.346px,92.423px);
            opacity:1;
          }
          64.583% {
            transform:translate(34.785px,92.663px);
            opacity:1;
          }
          66.667% {
            transform:translate(34.224px,92.904px);
            opacity:1;
          }
          68.75% {
            transform:translate(33.375px,93.865px);
            opacity:1;
          }
          70.833% {
            transform:translate(32.333px,95.308px);
            opacity:1;
          }
          72.917% {
            transform:translate(31.292px,96.75px);
            opacity:1;
          }
          75% {
            transform:translate(30.25px,98.192px);
            opacity:1;
          }
          77.083% {
            transform:translate(29.208px,99.635px);
            opacity:1;
          }
          79.167% {
            transform:translate(28.167px,101.077px);
            opacity:1;
          }
          81.25% {
            transform:translate(27.125px,102.519px);
            opacity:1;
          }
          83.333% {
            transform:translate(26.083px,103.962px);
            opacity:1;
          }
          85.417% {
            transform:translate(25.042px,105.404px);
            opacity:1;
          }
          87.5% {
            transform:translate(24px,106.846px);
            opacity:1;
          }
          89.583% {
            transform:translate(22.958px,108.288px);
            opacity:0.783;
          }
          91.667% {
            transform:translate(21.917px,109.731px);
            opacity:0.367;
            opacity:0;
          }
          93.75% {
            transform:translate(59px,59.205px);
            opacity:0.05;
            opacity:0;
          }
          95.833% {
            transform:translate(59px,60.909px);
            opacity:0.467;
          }
          97.917% {
            transform:translate(59px,62.614px);
            opacity:0.883;
          }
          100% {
            transform:translate(59px,64.318px);
            opacity:1;
          }
        }
        @keyframes basin2 {
          0% {
            transform:translate(35px,72.636px);
            opacity:1;
          }
          2.083% {
            transform:translate(35px,74.341px);
            opacity:1;
          }
          4.167% {
            transform:translate(35px,76.045px);
            opacity:1;
          }
          6.25% {
            transform:translate(35px,77.75px);
            opacity:1;
          }
          8.333% {
            transform:translate(35px,79.455px);
            opacity:1;
          }
          10.417% {
            transform:translate(34.837px,80.49px);
            opacity:1;
          }
          12.5% {
            transform:translate(34.596px,81.212px);
            opacity:1;
          }
          14.583% {
            transform:translate(34.356px,81.933px);
            opacity:1;
          }
          16.667% {
            transform:translate(34.115px,82.654px);
            opacity:1;
          }
          18.75% {
            transform:translate(33.875px,83.375px);
            opacity:1;
          }
          20.833% {
            transform:translate(33.635px,84.096px);
            opacity:1;
          }
          22.917% {
            transform:translate(33.394px,84.817px);
            opacity:1;
          }
          25% {
            transform:translate(33.154px,85.538px);
            opacity:1;
          }
          27.083% {
            transform:translate(32.913px,86.26px);
            opacity:1;
          }
          29.167% {
            transform:translate(32.673px,86.981px);
            opacity:1;
          }
          31.25% {
            transform:translate(32.433px,87.702px);
            opacity:1;
          }
          33.333% {
            transform:translate(32.192px,88.423px);
            opacity:1;
          }
          35.417% {
            transform:translate(32.032px,89.064px);
            opacity:1;
          }
          37.5% {
            transform:translate(32.192px,89.385px);
            opacity:1;
          }
          39.583% {
            transform:translate(32.353px,89.705px);
            opacity:1;
          }
          41.667% {
            transform:translate(32.513px,90.026px);
            opacity:1;
          }
          43.75% {
            transform:translate(32.673px,90.346px);
            opacity:1;
          }
          45.833% {
            transform:translate(32.833px,90.667px);
            opacity:1;
          }
          47.917% {
            transform:translate(32.994px,90.987px);
            opacity:1;
          }
          50% {
            transform:translate(33.154px,91.308px);
            opacity:1;
          }
          52.083% {
            transform:translate(33.314px,91.628px);
            opacity:1;
          }
          54.167% {
            transform:translate(33.474px,91.949px);
            opacity:1;
          }
          56.25% {
            transform:translate(33.635px,92.269px);
            opacity:1;
          }
          58.333% {
            transform:translate(33.795px,92.59px);
            opacity:1;
          }
          60.417% {
            transform:translate(33.955px,92.91px);
            opacity:1;
          }
          62.5% {
            transform:translate(33.25px,94.038px);
            opacity:1;
          }
          64.583% {
            transform:translate(32.208px,95.481px);
            opacity:1;
          }
          66.667% {
            transform:translate(31.167px,96.923px);
            opacity:1;
          }
          68.75% {
            transform:translate(30.125px,98.365px);
            opacity:1;
          }
          70.833% {
            transform:translate(29.083px,99.808px);
            opacity:1;
          }
          72.917% {
            transform:translate(28.042px,101.25px);
            opacity:1;
          }
          75% {
            transform:translate(27px,102.692px);
            opacity:1;
          }
          77.083% {
            transform:translate(25.958px,104.135px);
            opacity:1;
          }
          79.167% {
            transform:translate(24.917px,105.577px);
            opacity:1;
          }
          81.25% {
            transform:translate(23.875px,107.019px);
            opacity:1;
          }
          83.333% {
            transform:translate(22.833px,108.462px);
            opacity:0.733;
          }
          85.417% {
            transform:translate(21.792px,109.904px);
            opacity:0.317;
            opacity:0;
          }
          87.5% {
            transform:translate(35px,62.409px);
            opacity:0.1;
            opacity:0;
          }
          89.583% {
            transform:translate(35px,64.114px);
            opacity:0.517;
          }
          91.667% {
            transform:translate(35px,65.818px);
            opacity:0.933;
          }
          93.75% {
            transform:translate(35px,67.523px);
            opacity:1;
          }
          95.833% {
            transform:translate(35px,69.227px);
            opacity:1;
          }
          97.917% {
            transform:translate(35px,70.932px);
            opacity:1;
          }
          100% {
            transform:translate(35px,72.636px);
            opacity:1;
          }
        }
        @keyframes basin3 {
          0% {
            transform:translate(84px,43.955px);
            opacity:1;
          }
          2.083% {
            transform:translate(84px,45.659px);
            opacity:1;
          }
          4.167% {
            transform:translate(84.962px,47.667px);
            opacity:1;
          }
          6.25% {
            transform:translate(86.163px,49.75px);
            opacity:1;
          }
          8.333% {
            transform:translate(87.365px,51.833px);
            opacity:1;
          }
          10.417% {
            transform:translate(88.567px,53.917px);
            opacity:1;
          }
          12.5% {
            transform:translate(89.769px,56px);
            opacity:1;
          }
          14.583% {
            transform:translate(90.971px,58.083px);
            opacity:1;
          }
          16.667% {
            transform:translate(92.173px,60.167px);
            opacity:1;
          }
          18.75% {
            transform:translate(93.375px,62.25px);
            opacity:1;
          }
          20.833% {
            transform:translate(94.577px,64.333px);
            opacity:1;
          }
          22.917% {
            transform:translate(95.779px,66.417px);
            opacity:1;
          }
          25% {
            transform:translate(96.981px,68.5px);
            opacity:1;
          }
          27.083% {
            transform:translate(98.183px,70.583px);
            opacity:1;
          }
          29.167% {
            transform:translate(99.128px,72.487px);
            opacity:1;
          }
          31.25% {
            transform:translate(99.529px,74.01px);
            opacity:1;
          }
          33.333% {
            transform:translate(99.929px,75.532px);
            opacity:1;
          }
          35.417% {
            transform:translate(100.33px,77.054px);
            opacity:1;
          }
          37.5% {
            transform:translate(100.731px,78.577px);
            opacity:1;
          }
          39.583% {
            transform:translate(101.131px,80.099px);
            opacity:1;
          }
          41.667% {
            transform:translate(101.532px,81.622px);
            opacity:1;
          }
          43.75% {
            transform:translate(101.933px,83.144px);
            opacity:1;
          }
          45.833% {
            transform:translate(102.333px,84.667px);
            opacity:1;
          }
          47.917% {
            transform:translate(102.734px,86.189px);
            opacity:1;
          }
          50% {
            transform:translate(103.135px,87.712px);
            opacity:1;
          }
          52.083% {
            transform:translate(103.535px,89.234px);
            opacity:1;
          }
          54.167% {
            transform:translate(103.936px,90.756px);
            opacity:1;
          }
          56.25% {
            transform:translate(105.077px,92.481px);
            opacity:1;
          }
          58.333% {
            transform:translate(106.359px,94.244px);
            opacity:1;
          }
          60.417% {
            transform:translate(107.641px,96.006px);
            opacity:1;
          }
          62.5% {
            transform:translate(108.923px,97.769px);
            opacity:1;
          }
          64.583% {
            transform:translate(110.205px,99.532px);
            opacity:1;
          }
          66.667% {
            transform:translate(111.487px,101.295px);
            opacity:1;
          }
          68.75% {
            transform:translate(112.769px,103.058px);
            opacity:1;
          }
          70.833% {
            transform:translate(114.051px,104.821px);
            opacity:1;
          }
          72.917% {
            transform:translate(115.333px,106.583px);
            opacity:1;
          }
          75% {
            transform:translate(116.615px,108.346px);
            opacity:1;
          }
          77.083% {
            transform:translate(117.897px,110.109px);
            opacity:0.683;
          }
          79.167% {
            transform:translate(119.179px,111.872px);
            opacity:0.267;
            opacity:0;
          }
          81.25% {
            transform:translate(84px,28.614px);
            opacity:0.15;
            opacity:0;
          }
          83.333% {
            transform:translate(84px,30.318px);
            opacity:0.567;
          }
          85.417% {
            transform:translate(84px,32.023px);
            opacity:0.983;
          }
          87.5% {
            transform:translate(84px,33.727px);
            opacity:1;
          }
          89.583% {
            transform:translate(84px,35.432px);
            opacity:1;
          }
          91.667% {
            transform:translate(84px,37.136px);
            opacity:1;
          }
          93.75% {
            transform:translate(84px,38.841px);
            opacity:1;
          }
          95.833% {
            transform:translate(84px,40.545px);
            opacity:1;
          }
          97.917% {
            transform:translate(84px,42.25px);
            opacity:1;
          }
          100% {
            transform:translate(84px,43.955px);
            opacity:1;
          }
        }
        @keyframes basin4 {
          0% {
            transform:translate(82.154px,79.846px);
            opacity:1;
          }
          2.083% {
            transform:translate(83.276px,80.808px);
            opacity:1;
          }
          4.167% {
            transform:translate(84.397px,81.769px);
            opacity:1;
          }
          6.25% {
            transform:translate(85.519px,82.731px);
            opacity:1;
          }
          8.333% {
            transform:translate(86.641px,83.692px);
            opacity:1;
          }
          10.417% {
            transform:translate(87.763px,84.654px);
            opacity:1;
          }
          12.5% {
            transform:translate(88.885px,85.615px);
            opacity:1;
          }
          14.583% {
            transform:translate(90.006px,86.577px);
            opacity:1;
          }
          16.667% {
            transform:translate(91.128px,87.538px);
            opacity:1;
          }
          18.75% {
            transform:translate(92.25px,88.5px);
            opacity:1;
          }
          20.833% {
            transform:translate(93.372px,89.462px);
            opacity:1;
          }
          22.917% {
            transform:translate(94.353px,90.035px);
            opacity:1;
          }
          25% {
            transform:translate(95.154px,90.115px);
            opacity:1;
          }
          27.083% {
            transform:translate(95.955px,90.196px);
            opacity:1;
          }
          29.167% {
            transform:translate(96.756px,90.276px);
            opacity:1;
          }
          31.25% {
            transform:translate(97.558px,90.356px);
            opacity:1;
          }
          33.333% {
            transform:translate(98.359px,90.436px);
            opacity:1;
          }
          35.417% {
            transform:translate(99.16px,90.516px);
            opacity:1;
          }
          37.5% {
            transform:translate(99.962px,90.596px);
            opacity:1;
          }
          39.583% {
            transform:translate(100.763px,90.676px);
            opacity:1;
          }
          41.667% {
            transform:translate(101.564px,90.756px);
            opacity:1;
          }
          43.75% {
            transform:translate(102.365px,90.837px);
            opacity:1;
          }
          45.833% {
            transform:translate(103.167px,90.917px);
            opacity:1;
          }
          47.917% {
            transform:translate(103.968px,90.997px);
            opacity:1;
          }
          50% {
            transform:translate(105.231px,92.692px);
            opacity:1;
          }
          52.083% {
            transform:translate(106.513px,94.455px);
            opacity:1;
          }
          54.167% {
            transform:translate(107.795px,96.218px);
            opacity:1;
          }
          56.25% {
            transform:translate(109.077px,97.981px);
            opacity:1;
          }
          58.333% {
            transform:translate(110.359px,99.744px);
            opacity:1;
          }
          60.417% {
            transform:translate(111.641px,101.506px);
            opacity:1;
          }
          62.5% {
            transform:translate(112.923px,103.269px);
            opacity:1;
          }
          64.583% {
            transform:translate(114.205px,105.032px);
            opacity:1;
          }
          66.667% {
            transform:translate(115.487px,106.795px);
            opacity:1;
          }
          68.75% {
            transform:translate(116.769px,108.558px);
            opacity:1;
          }
          70.833% {
            transform:translate(118.051px,110.321px);
            opacity:0.633;
          }
          72.917% {
            transform:translate(119.333px,112.083px);
            opacity:0.217;
            opacity:0;
          }
          75% {
            transform:translate(80px,60.818px);
            opacity:0.2;
            opacity:0;
          }
          77.083% {
            transform:translate(80px,62.523px);
            opacity:0.617;
          }
          79.167% {
            transform:translate(80px,64.227px);
            opacity:1;
          }
          81.25% {
            transform:translate(80px,65.932px);
            opacity:1;
          }
          83.333% {
            transform:translate(80px,67.636px);
            opacity:1;
          }
          85.417% {
            transform:translate(80px,69.341px);
            opacity:1;
          }
          87.5% {
            transform:translate(80px,71.045px);
            opacity:1;
          }
          89.583% {
            transform:translate(80px,72.75px);
            opacity:1;
          }
          91.667% {
            transform:translate(80px,74.455px);
            opacity:1;
          }
          93.75% {
            transform:translate(80px,76.159px);
            opacity:1;
          }
          95.833% {
            transform:translate(80px,77.864px);
            opacity:1;
          }
          97.917% {
            transform:translate(81.032px,78.885px);
            opacity:1;
          }
          100% {
            transform:translate(82.154px,79.846px);
            opacity:1;
          }
        }
        @keyframes basin5 {
          0% {
            transform:translate(108.808px,82.827px);
            opacity:1;
          }
          2.083% {
            transform:translate(108.968px,83.388px);
            opacity:1;
          }
          4.167% {
            transform:translate(109.128px,83.949px);
            opacity:1;
          }
          6.25% {
            transform:translate(109.288px,84.51px);
            opacity:1;
          }
          8.333% {
            transform:translate(109.449px,85.071px);
            opacity:1;
          }
          10.417% {
            transform:translate(109.609px,85.631px);
            opacity:1;
          }
          12.5% {
            transform:translate(109.769px,86.192px);
            opacity:1;
          }
          14.583% {
            transform:translate(109.929px,86.753px);
            opacity:1;
          }
          16.667% {
            transform:translate(109.731px,87.179px);
            opacity:1;
          }
          18.75% {
            transform:translate(109.25px,87.5px);
            opacity:1;
          }
          20.833% {
            transform:translate(108.769px,87.821px);
            opacity:1;
          }
          22.917% {
            transform:translate(108.288px,88.141px);
            opacity:1;
          }
          25% {
            transform:translate(107.808px,88.462px);
            opacity:1;
          }
          27.083% {
            transform:translate(107.327px,88.782px);
            opacity:1;
          }
          29.167% {
            transform:translate(106.846px,89.103px);
            opacity:1;
          }
          31.25% {
            transform:translate(106.365px,89.423px);
            opacity:1;
          }
          33.333% {
            transform:translate(105.885px,89.744px);
            opacity:1;
          }
          35.417% {
            transform:translate(105.404px,90.064px);
            opacity:1;
          }
          37.5% {
            transform:translate(104.923px,90.385px);
            opacity:1;
          }
          39.583% {
            transform:translate(104.442px,90.705px);
            opacity:1;
          }
          41.667% {
            transform:translate(104.103px,91.141px);
            opacity:1;
          }
          43.75% {
            transform:translate(105.385px,92.904px);
            opacity:1;
          }
          45.833% {
            transform:translate(106.667px,94.667px);
            opacity:1;
          }
          47.917% {
            transform:translate(107.949px,96.429px);
            opacity:1;
          }
          50% {
            transform:translate(109.231px,98.192px);
            opacity:1;
          }
          52.083% {
            transform:translate(110.513px,99.955px);
            opacity:1;
          }
          54.167% {
            transform:translate(111.795px,101.718px);
            opacity:1;
          }
          56.25% {
            transform:translate(113.077px,103.481px);
            opacity:1;
          }
          58.333% {
            transform:translate(114.359px,105.244px);
            opacity:1;
          }
          60.417% {
            transform:translate(115.641px,107.006px);
            opacity:1;
          }
          62.5% {
            transform:translate(116.923px,108.769px);
            opacity:1;
          }
          64.583% {
            transform:translate(118.205px,110.532px);
            opacity:0.583;
          }
          66.667% {
            transform:translate(119.487px,112.295px);
            opacity:0.167;
            opacity:0;
          }
          68.75% {
            transform:translate(108px,63.023px);
            opacity:0.25;
            opacity:0;
          }
          70.833% {
            transform:translate(108px,64.727px);
            opacity:0.667;
          }
          72.917% {
            transform:translate(108px,66.432px);
            opacity:1;
          }
          75% {
            transform:translate(108px,68.136px);
            opacity:1;
          }
          77.083% {
            transform:translate(108px,69.841px);
            opacity:1;
          }
          79.167% {
            transform:translate(108px,71.545px);
            opacity:1;
          }
          81.25% {
            transform:translate(108px,73.25px);
            opacity:1;
          }
          83.333% {
            transform:translate(108px,74.955px);
            opacity:1;
          }
          85.417% {
            transform:translate(108px,76.659px);
            opacity:1;
          }
          87.5% {
            transform:translate(108px,78.364px);
            opacity:1;
          }
          89.583% {
            transform:translate(108.006px,80.022px);
            opacity:1;
          }
          91.667% {
            transform:translate(108.167px,80.583px);
            opacity:1;
          }
          93.75% {
            transform:translate(108.327px,81.144px);
            opacity:1;
          }
          95.833% {
            transform:translate(108.487px,81.705px);
            opacity:1;
          }
          97.917% {
            transform:translate(108.647px,82.266px);
            opacity:1;
          }
          100% {
            transform:translate(108.808px,82.827px);
            opacity:1;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .basin0 {
            transform:translate(33.5px,93.692px);
            opacity:1;
          }
          .basin1 {
            transform:translate(30.25px,98.192px);
            opacity:1;
          }
          .basin2 {
            transform:translate(27px,102.692px);
            opacity:1;
          }
          .basin3 {
            transform:translate(116.615px,108.346px);
            opacity:1;
          }
          .basin4 {
            transform:translate(80px,60.818px);
            opacity:0.2;
            opacity:0;
          }
          .basin5 {
            transform:translate(108px,68.136px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Watershed Divide">
        <path d="M10 112L70 16 130 112 76 128Z" fill="#203e2d" stroke="#72926f"/>
        <path d="M70 16L76 128 10 112Z" fill="#344d31"/>
        <path d="M70 16L72 48 68 74 76 128" fill="none" stroke="#dab875" stroke-width="2" stroke-dasharray="3 3"/>
        <path d="M53 47L39 70L34 93L21 111" fill="none" stroke="#58b5c7" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.2" class="basin0" fill="#b2eef3" transform="translate(53 29)"/>
        <path d="M59 77L41 90L34 93L21 111" fill="none" stroke="#58b5c7" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.2" class="basin1" fill="#b2eef3" transform="translate(59 64.318)"/>
        <path d="M35 80L32 89L34 93L21 111" fill="none" stroke="#58b5c7" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.2" class="basin2" fill="#b2eef3" transform="translate(35 72.636)"/>
        <path d="M84 46L99 72L104 91L120 113" fill="none" stroke="#58b5c7" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.2" class="basin3" fill="#b2eef3" transform="translate(84 43.955)"/>
        <path d="M80 78L94 90L104 91L120 113" fill="none" stroke="#58b5c7" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.2" class="basin4" fill="#b2eef3" transform="translate(82.154 79.846)"/>
        <path d="M108 80L110 87L104 91L120 113" fill="none" stroke="#58b5c7" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.2" class="basin5" fill="#b2eef3" transform="translate(108.808 82.827)"/>
        <g transform="translate(19 122) rotate(100)" fill="#77c9ef">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <g transform="translate(124 123) rotate(70)" fill="#77c9ef">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
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

if (!customElements.get("concept-watershed-divide")) {
  customElements.define("concept-watershed-divide", ConceptWatershedDivide);
}
