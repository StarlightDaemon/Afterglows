// Ablative Heat Shield. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAblativeHeatShield extends HTMLElement {
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
        .char {
          animation:char 16s linear infinite;
        }
        .gas0 {
          animation:gas0 16s linear infinite;
        }
        .gas0 {
          animation:gas0 16s linear infinite;
        }
        .gas1 {
          animation:gas1 16s linear infinite;
        }
        .gas1 {
          animation:gas1 16s linear infinite;
        }
        .gas2 {
          animation:gas2 16s linear infinite;
        }
        .gas2 {
          animation:gas2 16s linear infinite;
        }
        .gas3 {
          animation:gas3 16s linear infinite;
        }
        .gas3 {
          animation:gas3 16s linear infinite;
        }
        .gas4 {
          animation:gas4 16s linear infinite;
        }
        .gas4 {
          animation:gas4 16s linear infinite;
        }
        .gas5 {
          animation:gas5 16s linear infinite;
        }
        .gas5 {
          animation:gas5 16s linear infinite;
        }
        .gas6 {
          animation:gas6 16s linear infinite;
        }
        .gas6 {
          animation:gas6 16s linear infinite;
        }
        .ablationEpisode {
          animation:ablationEpisode 16s linear infinite;
        }
        @keyframes char {
          0% {
            d:path('M13 58H127V68H13Z');
          }
          2.083% {
            d:path('M13 58H127V68H13Z');
          }
          4.167% {
            d:path('M13 58H127V68H13Z');
          }
          6.25% {
            d:path('M13 58H127V68H13Z');
          }
          8.333% {
            d:path('M13 58H127V68.001H13Z');
          }
          10.417% {
            d:path('M13 58.021H127V68.027H13Z');
          }
          12.5% {
            d:path('M13 58.073H127V68.093H13Z');
          }
          14.583% {
            d:path('M13 58.152H127V68.196H13Z');
          }
          16.667% {
            d:path('M13 58.259H127V68.333H13Z');
          }
          18.75% {
            d:path('M13 58.39H127V68.502H13Z');
          }
          20.833% {
            d:path('M13 58.545H127V68.7H13Z');
          }
          22.917% {
            d:path('M13 58.721H127V68.926H13Z');
          }
          25% {
            d:path('M13 58.916H127V69.178H13Z');
          }
          27.083% {
            d:path('M13 59.129H127V69.452H13Z');
          }
          29.167% {
            d:path('M13 59.358H127V69.746H13Z');
          }
          31.25% {
            d:path('M13 59.601H127V70.058H13Z');
          }
          33.333% {
            d:path('M13 59.856H127V70.387H13Z');
          }
          35.417% {
            d:path('M13 60.122H127V70.729H13Z');
          }
          37.5% {
            d:path('M13 60.397H127V71.082H13Z');
          }
          39.583% {
            d:path('M13 60.679H127V71.444H13Z');
          }
          41.667% {
            d:path('M13 60.965H127V71.812H13Z');
          }
          43.75% {
            d:path('M13 61.255H127V72.185H13Z');
          }
          45.833% {
            d:path('M13 61.547H127V72.56H13Z');
          }
          47.917% {
            d:path('M13 61.838H127V72.934H13Z');
          }
          50% {
            d:path('M13 62.127H127V73.306H13Z');
          }
          52.083% {
            d:path('M13 62.412H127V73.673H13Z');
          }
          54.167% {
            d:path('M13 62.692H127V74.032H13Z');
          }
          56.25% {
            d:path('M13 62.964H127V74.382H13Z');
          }
          58.333% {
            d:path('M13 63.227H127V74.72H13Z');
          }
          60.417% {
            d:path('M13 63.478H127V75.043H13Z');
          }
          62.5% {
            d:path('M13 63.717H127V75.35H13Z');
          }
          64.583% {
            d:path('M13 63.941H127V75.638H13Z');
          }
          66.667% {
            d:path('M13 64.149H127V75.905H13Z');
          }
          68.75% {
            d:path('M13 64.338H127V76.149H13Z');
          }
          70.833% {
            d:path('M13 64.507H127V76.366H13Z');
          }
          72.917% {
            d:path('M13 64.654H127V76.556H13Z');
          }
          75% {
            d:path('M13 64.778H127V76.715H13Z');
          }
          77.083% {
            d:path('M13 64.876H127V76.841H13Z');
          }
          79.167% {
            d:path('M13 64.947H127V76.932H13Z');
          }
          81.25% {
            d:path('M13 64.989H127V76.986H13Z');
          }
          83.333% {
            d:path('M13 65H127V77H13Z');
          }
          85.417% {
            d:path('M13 65H127V77H13Z');
          }
          87.5% {
            d:path('M13 65H127V77H13Z');
          }
          89.583% {
            d:path('M13 65H127V77H13Z');
          }
          91.667% {
            d:path('M13 65H127V77H13Z');
          }
          93.75% {
            d:path('M13 65H127V77H13Z');
          }
          95.833% {
            d:path('M13 65H127V77H13Z');
          }
          97.917% {
            d:path('M13 65H127V77H13Z');
          }
          100% {
            d:path('M13 65H127V77H13Z');
          }
        }
        @keyframes gas0 {
          0% {
            transform:translate(22px,56px);
            opacity:0;
          }
          0.694% {
            transform:translate(22.167px,55.542px);
          }
          1.389% {
            transform:translate(22.333px,55.083px);
          }
          2.083% {
            transform:translate(22.5px,54.625px);
            opacity:0.195;
          }
          2.778% {
            transform:translate(22.667px,54.167px);
          }
          3.472% {
            transform:translate(22.833px,53.708px);
          }
          4.167% {
            transform:translate(23px,53.25px);
            opacity:0.383;
          }
          4.861% {
            transform:translate(23.167px,52.792px);
          }
          5.556% {
            transform:translate(23.333px,52.333px);
          }
          6.25% {
            transform:translate(23.5px,51.875px);
            opacity:0.556;
          }
          6.944% {
            transform:translate(23.667px,51.417px);
          }
          7.639% {
            transform:translate(23.833px,50.958px);
          }
          8.333% {
            transform:translate(24px,50.5px);
            opacity:0.707;
          }
          9.028% {
            transform:translate(24.167px,50.046px);
          }
          9.722% {
            transform:translate(24.333px,49.594px);
          }
          10.417% {
            transform:translate(24.5px,49.146px);
            opacity:0.831;
          }
          11.111% {
            transform:translate(24.667px,48.702px);
          }
          11.806% {
            transform:translate(24.833px,48.261px);
          }
          12.5% {
            transform:translate(25px,47.823px);
            opacity:0.924;
          }
          13.194% {
            transform:translate(25.167px,47.388px);
          }
          13.889% {
            transform:translate(25.333px,46.956px);
          }
          14.583% {
            transform:translate(25.5px,46.527px);
            opacity:0.981;
          }
          15.278% {
            transform:translate(25.667px,46.102px);
          }
          15.972% {
            transform:translate(25.833px,45.679px);
          }
          16.667% {
            transform:translate(26px,45.259px);
            opacity:1;
          }
          17.361% {
            transform:translate(26.167px,44.842px);
          }
          18.056% {
            transform:translate(26.333px,44.427px);
          }
          18.75% {
            transform:translate(26.5px,44.015px);
            opacity:0.981;
          }
          19.444% {
            transform:translate(26.667px,43.606px);
          }
          20.139% {
            transform:translate(26.833px,43.199px);
          }
          20.833% {
            transform:translate(27px,42.795px);
            opacity:0.924;
          }
          21.528% {
            transform:translate(27.167px,42.393px);
          }
          22.222% {
            transform:translate(27.333px,41.993px);
          }
          22.917% {
            transform:translate(27.5px,41.596px);
            opacity:0.831;
          }
          23.611% {
            transform:translate(27.667px,41.2px);
          }
          24.306% {
            transform:translate(27.833px,40.807px);
          }
          25% {
            transform:translate(28px,40.416px);
            opacity:0.707;
          }
          25.694% {
            transform:translate(28.167px,40.027px);
          }
          26.389% {
            transform:translate(28.333px,39.639px);
          }
          27.083% {
            transform:translate(28.5px,39.254px);
            opacity:0.556;
          }
          27.778% {
            transform:translate(28.667px,38.87px);
          }
          28.472% {
            transform:translate(28.833px,38.488px);
          }
          29.167% {
            transform:translate(29px,38.108px);
            opacity:0.383;
          }
          29.861% {
            transform:translate(29.167px,37.729px);
          }
          30.556% {
            transform:translate(29.333px,37.352px);
          }
          31.25% {
            transform:translate(29.5px,36.976px);
            opacity:0.195;
          }
          31.944% {
            transform:translate(29.667px,36.602px);
          }
          32.639% {
            transform:translate(29.833px,36.228px);
          }
          33.333% {
            transform:translate(22px,57.856px);
            opacity:0;
          }
          34.028% {
            transform:translate(22.167px,57.486px);
          }
          34.722% {
            transform:translate(22.333px,57.116px);
          }
          35.417% {
            transform:translate(22.5px,56.747px);
            opacity:0.195;
          }
          36.111% {
            transform:translate(22.667px,56.38px);
          }
          36.806% {
            transform:translate(22.833px,56.013px);
          }
          37.5% {
            transform:translate(23px,55.647px);
            opacity:0.383;
          }
          38.194% {
            transform:translate(23.167px,55.282px);
          }
          38.889% {
            transform:translate(23.333px,54.917px);
          }
          39.583% {
            transform:translate(23.5px,54.554px);
            opacity:0.556;
          }
          40.278% {
            transform:translate(23.667px,54.19px);
          }
          40.972% {
            transform:translate(23.833px,53.828px);
          }
          41.667% {
            transform:translate(24px,53.465px);
            opacity:0.707;
          }
          42.361% {
            transform:translate(24.167px,53.103px);
          }
          43.056% {
            transform:translate(24.333px,52.742px);
          }
          43.75% {
            transform:translate(24.5px,52.38px);
            opacity:0.831;
          }
          44.444% {
            transform:translate(24.667px,52.019px);
          }
          45.139% {
            transform:translate(24.833px,51.658px);
          }
          45.833% {
            transform:translate(25px,51.297px);
            opacity:0.924;
          }
          46.528% {
            transform:translate(25.167px,50.936px);
          }
          47.222% {
            transform:translate(25.333px,50.574px);
          }
          47.917% {
            transform:translate(25.5px,50.213px);
            opacity:0.981;
          }
          48.611% {
            transform:translate(25.667px,49.851px);
          }
          49.306% {
            transform:translate(25.833px,49.489px);
          }
          50% {
            transform:translate(26px,49.127px);
            opacity:1;
          }
          50.694% {
            transform:translate(26.167px,48.764px);
          }
          51.389% {
            transform:translate(26.333px,48.401px);
          }
          52.083% {
            transform:translate(26.5px,48.037px);
            opacity:0.981;
          }
          52.778% {
            transform:translate(26.667px,47.673px);
          }
          53.472% {
            transform:translate(26.833px,47.308px);
          }
          54.167% {
            transform:translate(27px,46.942px);
            opacity:0.924;
          }
          54.861% {
            transform:translate(27.167px,46.575px);
          }
          55.556% {
            transform:translate(27.333px,46.207px);
          }
          56.25% {
            transform:translate(27.5px,45.839px);
            opacity:0.831;
          }
          56.944% {
            transform:translate(27.667px,45.469px);
          }
          57.639% {
            transform:translate(27.833px,45.098px);
          }
          58.333% {
            transform:translate(28px,44.727px);
            opacity:0.707;
          }
          59.028% {
            transform:translate(28.167px,44.353px);
          }
          59.722% {
            transform:translate(28.333px,43.979px);
          }
          60.417% {
            transform:translate(28.5px,43.603px);
            opacity:0.556;
          }
          61.111% {
            transform:translate(28.667px,43.226px);
          }
          61.806% {
            transform:translate(28.833px,42.847px);
          }
          62.5% {
            transform:translate(29px,42.467px);
            opacity:0.383;
          }
          63.194% {
            transform:translate(29.167px,42.085px);
          }
          63.889% {
            transform:translate(29.333px,41.701px);
          }
          64.583% {
            transform:translate(29.5px,41.316px);
            opacity:0.195;
          }
          65.278% {
            transform:translate(29.667px,40.929px);
          }
          65.972% {
            transform:translate(29.833px,40.54px);
          }
          66.667% {
            transform:translate(22px,62.149px);
            opacity:0;
          }
          67.361% {
            transform:translate(22.167px,61.756px);
          }
          68.056% {
            transform:translate(22.333px,61.36px);
          }
          68.75% {
            transform:translate(22.5px,60.963px);
            opacity:0.195;
          }
          69.444% {
            transform:translate(22.667px,60.563px);
          }
          70.139% {
            transform:translate(22.833px,60.161px);
          }
          70.833% {
            transform:translate(23px,59.757px);
            opacity:0.383;
          }
          71.528% {
            transform:translate(23.167px,59.35px);
          }
          72.222% {
            transform:translate(23.333px,58.941px);
          }
          72.917% {
            transform:translate(23.5px,58.529px);
            opacity:0.556;
          }
          73.611% {
            transform:translate(23.667px,58.115px);
          }
          74.306% {
            transform:translate(23.833px,57.698px);
          }
          75% {
            transform:translate(24px,57.278px);
            opacity:0.707;
          }
          75.694% {
            transform:translate(24.167px,56.855px);
          }
          76.389% {
            transform:translate(24.333px,56.43px);
          }
          77.083% {
            transform:translate(24.5px,56.001px);
            opacity:0.831;
          }
          77.778% {
            transform:translate(24.667px,55.57px);
          }
          78.472% {
            transform:translate(24.833px,55.135px);
          }
          79.167% {
            transform:translate(25px,54.697px);
            opacity:0.924;
          }
          79.861% {
            transform:translate(25.167px,54.256px);
          }
          80.556% {
            transform:translate(25.333px,53.812px);
          }
          81.25% {
            transform:translate(25.5px,53.364px);
            opacity:0.981;
          }
          81.944% {
            transform:translate(25.667px,52.913px);
          }
          82.639% {
            transform:translate(25.833px,52.458px);
          }
          83.333% {
            transform:translate(26px,52px);
            opacity:1;
          }
          84.028% {
            transform:translate(26.167px,51.542px);
          }
          84.722% {
            transform:translate(26.333px,51.083px);
          }
          85.417% {
            transform:translate(26.5px,50.625px);
            opacity:0.981;
          }
          86.111% {
            transform:translate(26.667px,50.167px);
          }
          86.806% {
            transform:translate(26.833px,49.708px);
          }
          87.5% {
            transform:translate(27px,49.25px);
            opacity:0.924;
          }
          88.194% {
            transform:translate(27.167px,48.792px);
          }
          88.889% {
            transform:translate(27.333px,48.333px);
          }
          89.583% {
            transform:translate(27.5px,47.875px);
            opacity:0.831;
          }
          90.278% {
            transform:translate(27.667px,47.417px);
          }
          90.972% {
            transform:translate(27.833px,46.958px);
          }
          91.667% {
            transform:translate(28px,46.5px);
            opacity:0.707;
          }
          92.361% {
            transform:translate(28.167px,46.042px);
          }
          93.056% {
            transform:translate(28.333px,45.583px);
          }
          93.75% {
            transform:translate(28.5px,45.125px);
            opacity:0.556;
          }
          94.444% {
            transform:translate(28.667px,44.667px);
          }
          95.139% {
            transform:translate(28.833px,44.208px);
          }
          95.833% {
            transform:translate(29px,43.75px);
            opacity:0.383;
          }
          96.528% {
            transform:translate(29.167px,43.292px);
          }
          97.222% {
            transform:translate(29.333px,42.833px);
          }
          97.917% {
            transform:translate(29.5px,42.375px);
            opacity:0.195;
          }
          98.611% {
            transform:translate(29.667px,41.917px);
          }
          99.306% {
            transform:translate(29.833px,41.458px);
          }
          100% {
            transform:translate(22px,63px);
            opacity:0;
          }
        }
        @keyframes gas1 {
          0% {
            transform:translate(38.143px,52.857px);
            opacity:0.434;
          }
          0.694% {
            transform:translate(38.31px,52.399px);
          }
          1.389% {
            transform:translate(38.476px,51.94px);
          }
          2.083% {
            transform:translate(38.643px,51.482px);
            opacity:0.601;
          }
          2.778% {
            transform:translate(38.81px,51.024px);
          }
          3.472% {
            transform:translate(38.976px,50.565px);
          }
          4.167% {
            transform:translate(39.143px,50.107px);
            opacity:0.746;
          }
          4.861% {
            transform:translate(39.31px,49.649px);
          }
          5.556% {
            transform:translate(39.476px,49.19px);
          }
          6.25% {
            transform:translate(39.643px,48.732px);
            opacity:0.861;
          }
          6.944% {
            transform:translate(39.81px,48.274px);
          }
          7.639% {
            transform:translate(39.976px,47.815px);
          }
          8.333% {
            transform:translate(40.143px,47.358px);
            opacity:0.944;
          }
          9.028% {
            transform:translate(40.31px,46.903px);
          }
          9.722% {
            transform:translate(40.476px,46.451px);
          }
          10.417% {
            transform:translate(40.643px,46.003px);
            opacity:0.99;
          }
          11.111% {
            transform:translate(40.81px,45.559px);
          }
          11.806% {
            transform:translate(40.976px,45.118px);
          }
          12.5% {
            transform:translate(41.143px,44.68px);
            opacity:0.998;
          }
          13.194% {
            transform:translate(41.31px,44.245px);
          }
          13.889% {
            transform:translate(41.476px,43.813px);
          }
          14.583% {
            transform:translate(41.643px,43.384px);
            opacity:0.968;
          }
          15.278% {
            transform:translate(41.81px,42.959px);
          }
          15.972% {
            transform:translate(41.976px,42.536px);
          }
          16.667% {
            transform:translate(42.143px,42.116px);
            opacity:0.901;
          }
          17.361% {
            transform:translate(42.31px,41.699px);
          }
          18.056% {
            transform:translate(42.476px,41.284px);
          }
          18.75% {
            transform:translate(42.643px,40.872px);
            opacity:0.799;
          }
          19.444% {
            transform:translate(42.81px,40.463px);
          }
          20.139% {
            transform:translate(42.976px,40.056px);
          }
          20.833% {
            transform:translate(43.143px,39.652px);
            opacity:0.666;
          }
          21.528% {
            transform:translate(43.31px,39.25px);
          }
          22.222% {
            transform:translate(43.476px,38.85px);
          }
          22.917% {
            transform:translate(43.643px,38.453px);
            opacity:0.508;
          }
          23.611% {
            transform:translate(43.81px,38.057px);
          }
          24.306% {
            transform:translate(43.976px,37.664px);
          }
          25% {
            transform:translate(44.143px,37.273px);
            opacity:0.33;
          }
          25.694% {
            transform:translate(44.31px,36.884px);
          }
          26.389% {
            transform:translate(44.476px,36.497px);
          }
          27.083% {
            transform:translate(44.643px,36.111px);
            opacity:0.14;
          }
          27.778% {
            transform:translate(44.81px,35.727px);
          }
          28.472% {
            transform:translate(44.976px,35.345px);
          }
          29.167% {
            transform:translate(37.143px,56.965px);
            opacity:0.056;
          }
          29.861% {
            transform:translate(37.31px,56.586px);
          }
          30.556% {
            transform:translate(37.476px,56.209px);
          }
          31.25% {
            transform:translate(37.643px,55.833px);
            opacity:0.25;
          }
          31.944% {
            transform:translate(37.81px,55.459px);
          }
          32.639% {
            transform:translate(37.976px,55.086px);
          }
          33.333% {
            transform:translate(38.143px,54.714px);
            opacity:0.434;
          }
          34.028% {
            transform:translate(38.31px,54.343px);
          }
          34.722% {
            transform:translate(38.476px,53.973px);
          }
          35.417% {
            transform:translate(38.643px,53.604px);
            opacity:0.601;
          }
          36.111% {
            transform:translate(38.81px,53.237px);
          }
          36.806% {
            transform:translate(38.976px,52.87px);
          }
          37.5% {
            transform:translate(39.143px,52.504px);
            opacity:0.746;
          }
          38.194% {
            transform:translate(39.31px,52.139px);
          }
          38.889% {
            transform:translate(39.476px,51.775px);
          }
          39.583% {
            transform:translate(39.643px,51.411px);
            opacity:0.861;
          }
          40.278% {
            transform:translate(39.81px,51.047px);
          }
          40.972% {
            transform:translate(39.976px,50.685px);
          }
          41.667% {
            transform:translate(40.143px,50.322px);
            opacity:0.944;
          }
          42.361% {
            transform:translate(40.31px,49.96px);
          }
          43.056% {
            transform:translate(40.476px,49.599px);
          }
          43.75% {
            transform:translate(40.643px,49.237px);
            opacity:0.99;
          }
          44.444% {
            transform:translate(40.81px,48.876px);
          }
          45.139% {
            transform:translate(40.976px,48.515px);
          }
          45.833% {
            transform:translate(41.143px,48.154px);
            opacity:0.998;
          }
          46.528% {
            transform:translate(41.31px,47.793px);
          }
          47.222% {
            transform:translate(41.476px,47.431px);
          }
          47.917% {
            transform:translate(41.643px,47.07px);
            opacity:0.968;
          }
          48.611% {
            transform:translate(41.81px,46.708px);
          }
          49.306% {
            transform:translate(41.976px,46.346px);
          }
          50% {
            transform:translate(42.143px,45.984px);
            opacity:0.901;
          }
          50.694% {
            transform:translate(42.31px,45.621px);
          }
          51.389% {
            transform:translate(42.476px,45.258px);
          }
          52.083% {
            transform:translate(42.643px,44.894px);
            opacity:0.799;
          }
          52.778% {
            transform:translate(42.81px,44.53px);
          }
          53.472% {
            transform:translate(42.976px,44.165px);
          }
          54.167% {
            transform:translate(43.143px,43.799px);
            opacity:0.666;
          }
          54.861% {
            transform:translate(43.31px,43.432px);
          }
          55.556% {
            transform:translate(43.476px,43.065px);
          }
          56.25% {
            transform:translate(43.643px,42.696px);
            opacity:0.508;
          }
          56.944% {
            transform:translate(43.81px,42.326px);
          }
          57.639% {
            transform:translate(43.976px,41.956px);
          }
          58.333% {
            transform:translate(44.143px,41.584px);
            opacity:0.33;
          }
          59.028% {
            transform:translate(44.31px,41.211px);
          }
          59.722% {
            transform:translate(44.476px,40.836px);
          }
          60.417% {
            transform:translate(44.643px,40.46px);
            opacity:0.14;
          }
          61.111% {
            transform:translate(44.81px,40.083px);
          }
          61.806% {
            transform:translate(44.976px,39.704px);
          }
          62.5% {
            transform:translate(37.143px,61.324px);
            opacity:0.056;
          }
          63.194% {
            transform:translate(37.31px,60.942px);
          }
          63.889% {
            transform:translate(37.476px,60.559px);
          }
          64.583% {
            transform:translate(37.643px,60.173px);
            opacity:0.25;
          }
          65.278% {
            transform:translate(37.81px,59.786px);
          }
          65.972% {
            transform:translate(37.976px,59.397px);
          }
          66.667% {
            transform:translate(38.143px,59.006px);
            opacity:0.434;
          }
          67.361% {
            transform:translate(38.31px,58.613px);
          }
          68.056% {
            transform:translate(38.476px,58.217px);
          }
          68.75% {
            transform:translate(38.643px,57.82px);
            opacity:0.601;
          }
          69.444% {
            transform:translate(38.81px,57.42px);
          }
          70.139% {
            transform:translate(38.976px,57.019px);
          }
          70.833% {
            transform:translate(39.143px,56.614px);
            opacity:0.746;
          }
          71.528% {
            transform:translate(39.31px,56.208px);
          }
          72.222% {
            transform:translate(39.476px,55.798px);
          }
          72.917% {
            transform:translate(39.643px,55.387px);
            opacity:0.861;
          }
          73.611% {
            transform:translate(39.81px,54.972px);
          }
          74.306% {
            transform:translate(39.976px,54.555px);
          }
          75% {
            transform:translate(40.143px,54.135px);
            opacity:0.944;
          }
          75.694% {
            transform:translate(40.31px,53.712px);
          }
          76.389% {
            transform:translate(40.476px,53.287px);
          }
          77.083% {
            transform:translate(40.643px,52.858px);
            opacity:0.99;
          }
          77.778% {
            transform:translate(40.81px,52.427px);
          }
          78.472% {
            transform:translate(40.976px,51.992px);
          }
          79.167% {
            transform:translate(41.143px,51.554px);
            opacity:0.998;
          }
          79.861% {
            transform:translate(41.31px,51.113px);
          }
          80.556% {
            transform:translate(41.476px,50.669px);
          }
          81.25% {
            transform:translate(41.643px,50.221px);
            opacity:0.968;
          }
          81.944% {
            transform:translate(41.81px,49.77px);
          }
          82.639% {
            transform:translate(41.976px,49.315px);
          }
          83.333% {
            transform:translate(42.143px,48.857px);
            opacity:0.901;
          }
          84.028% {
            transform:translate(42.31px,48.399px);
          }
          84.722% {
            transform:translate(42.476px,47.94px);
          }
          85.417% {
            transform:translate(42.643px,47.482px);
            opacity:0.799;
          }
          86.111% {
            transform:translate(42.81px,47.024px);
          }
          86.806% {
            transform:translate(42.976px,46.565px);
          }
          87.5% {
            transform:translate(43.143px,46.107px);
            opacity:0.666;
          }
          88.194% {
            transform:translate(43.31px,45.649px);
          }
          88.889% {
            transform:translate(43.476px,45.19px);
          }
          89.583% {
            transform:translate(43.643px,44.732px);
            opacity:0.508;
          }
          90.278% {
            transform:translate(43.81px,44.274px);
          }
          90.972% {
            transform:translate(43.976px,43.815px);
          }
          91.667% {
            transform:translate(44.143px,43.357px);
            opacity:0.33;
          }
          92.361% {
            transform:translate(44.31px,42.899px);
          }
          93.056% {
            transform:translate(44.476px,42.44px);
          }
          93.75% {
            transform:translate(44.643px,41.982px);
            opacity:0.14;
          }
          94.444% {
            transform:translate(44.81px,41.524px);
          }
          95.139% {
            transform:translate(44.976px,41.065px);
          }
          95.833% {
            transform:translate(37.143px,62.607px);
            opacity:0.056;
          }
          96.528% {
            transform:translate(37.31px,62.149px);
          }
          97.222% {
            transform:translate(37.476px,61.69px);
          }
          97.917% {
            transform:translate(37.643px,61.232px);
            opacity:0.25;
          }
          98.611% {
            transform:translate(37.81px,60.774px);
          }
          99.306% {
            transform:translate(37.976px,60.315px);
          }
          100% {
            transform:translate(38.143px,59.857px);
            opacity:0.434;
          }
        }
        @keyframes gas2 {
          0% {
            transform:translate(54.286px,49.714px);
            opacity:0.782;
          }
          0.694% {
            transform:translate(54.452px,49.256px);
          }
          1.389% {
            transform:translate(54.619px,48.798px);
          }
          2.083% {
            transform:translate(54.786px,48.339px);
            opacity:0.888;
          }
          2.778% {
            transform:translate(54.952px,47.881px);
          }
          3.472% {
            transform:translate(55.119px,47.423px);
          }
          4.167% {
            transform:translate(55.286px,46.964px);
            opacity:0.961;
          }
          4.861% {
            transform:translate(55.452px,46.506px);
          }
          5.556% {
            transform:translate(55.619px,46.048px);
          }
          6.25% {
            transform:translate(55.786px,45.589px);
            opacity:0.996;
          }
          6.944% {
            transform:translate(55.952px,45.131px);
          }
          7.639% {
            transform:translate(56.119px,44.673px);
          }
          8.333% {
            transform:translate(56.286px,44.215px);
            opacity:0.994;
          }
          9.028% {
            transform:translate(56.452px,43.76px);
          }
          9.722% {
            transform:translate(56.619px,43.309px);
          }
          10.417% {
            transform:translate(56.786px,42.861px);
            opacity:0.953;
          }
          11.111% {
            transform:translate(56.952px,42.416px);
          }
          11.806% {
            transform:translate(57.119px,41.975px);
          }
          12.5% {
            transform:translate(57.286px,41.537px);
            opacity:0.875;
          }
          13.194% {
            transform:translate(57.452px,41.102px);
          }
          13.889% {
            transform:translate(57.619px,40.67px);
          }
          14.583% {
            transform:translate(57.786px,40.242px);
            opacity:0.764;
          }
          15.278% {
            transform:translate(57.952px,39.816px);
          }
          15.972% {
            transform:translate(58.119px,39.393px);
          }
          16.667% {
            transform:translate(58.286px,38.973px);
            opacity:0.623;
          }
          17.361% {
            transform:translate(58.452px,38.556px);
          }
          18.056% {
            transform:translate(58.619px,38.141px);
          }
          18.75% {
            transform:translate(58.786px,37.729px);
            opacity:0.459;
          }
          19.444% {
            transform:translate(58.952px,37.32px);
          }
          20.139% {
            transform:translate(59.119px,36.913px);
          }
          20.833% {
            transform:translate(59.286px,36.509px);
            opacity:0.277;
          }
          21.528% {
            transform:translate(59.452px,36.107px);
          }
          22.222% {
            transform:translate(59.619px,35.707px);
          }
          22.917% {
            transform:translate(59.786px,35.31px);
            opacity:0.084;
          }
          23.611% {
            transform:translate(59.952px,34.915px);
          }
          24.306% {
            transform:translate(52.119px,56.521px);
          }
          25% {
            transform:translate(52.286px,56.13px);
            opacity:0.112;
          }
          25.694% {
            transform:translate(52.452px,55.741px);
          }
          26.389% {
            transform:translate(52.619px,55.354px);
          }
          27.083% {
            transform:translate(52.786px,54.968px);
            opacity:0.304;
          }
          27.778% {
            transform:translate(52.952px,54.585px);
          }
          28.472% {
            transform:translate(53.119px,54.203px);
          }
          29.167% {
            transform:translate(53.286px,53.822px);
            opacity:0.484;
          }
          29.861% {
            transform:translate(53.452px,53.443px);
          }
          30.556% {
            transform:translate(53.619px,53.066px);
          }
          31.25% {
            transform:translate(53.786px,52.69px);
            opacity:0.645;
          }
          31.944% {
            transform:translate(53.952px,52.316px);
          }
          32.639% {
            transform:translate(54.119px,51.943px);
          }
          33.333% {
            transform:translate(54.286px,51.571px);
            opacity:0.782;
          }
          34.028% {
            transform:translate(54.452px,51.2px);
          }
          34.722% {
            transform:translate(54.619px,50.83px);
          }
          35.417% {
            transform:translate(54.786px,50.462px);
            opacity:0.888;
          }
          36.111% {
            transform:translate(54.952px,50.094px);
          }
          36.806% {
            transform:translate(55.119px,49.727px);
          }
          37.5% {
            transform:translate(55.286px,49.361px);
            opacity:0.961;
          }
          38.194% {
            transform:translate(55.452px,48.996px);
          }
          38.889% {
            transform:translate(55.619px,48.632px);
          }
          39.583% {
            transform:translate(55.786px,48.268px);
            opacity:0.996;
          }
          40.278% {
            transform:translate(55.952px,47.905px);
          }
          40.972% {
            transform:translate(56.119px,47.542px);
          }
          41.667% {
            transform:translate(56.286px,47.179px);
            opacity:0.994;
          }
          42.361% {
            transform:translate(56.452px,46.818px);
          }
          43.056% {
            transform:translate(56.619px,46.456px);
          }
          43.75% {
            transform:translate(56.786px,46.094px);
            opacity:0.953;
          }
          44.444% {
            transform:translate(56.952px,45.733px);
          }
          45.139% {
            transform:translate(57.119px,45.372px);
          }
          45.833% {
            transform:translate(57.286px,45.011px);
            opacity:0.875;
          }
          46.528% {
            transform:translate(57.452px,44.65px);
          }
          47.222% {
            transform:translate(57.619px,44.289px);
          }
          47.917% {
            transform:translate(57.786px,43.927px);
            opacity:0.764;
          }
          48.611% {
            transform:translate(57.952px,43.566px);
          }
          49.306% {
            transform:translate(58.119px,43.204px);
          }
          50% {
            transform:translate(58.286px,42.841px);
            opacity:0.623;
          }
          50.694% {
            transform:translate(58.452px,42.479px);
          }
          51.389% {
            transform:translate(58.619px,42.115px);
          }
          52.083% {
            transform:translate(58.786px,41.751px);
            opacity:0.459;
          }
          52.778% {
            transform:translate(58.952px,41.387px);
          }
          53.472% {
            transform:translate(59.119px,41.022px);
          }
          54.167% {
            transform:translate(59.286px,40.656px);
            opacity:0.277;
          }
          54.861% {
            transform:translate(59.452px,40.289px);
          }
          55.556% {
            transform:translate(59.619px,39.922px);
          }
          56.25% {
            transform:translate(59.786px,39.553px);
            opacity:0.084;
          }
          56.944% {
            transform:translate(59.952px,39.183px);
          }
          57.639% {
            transform:translate(52.119px,60.813px);
          }
          58.333% {
            transform:translate(52.286px,60.441px);
            opacity:0.112;
          }
          59.028% {
            transform:translate(52.452px,60.068px);
          }
          59.722% {
            transform:translate(52.619px,59.693px);
          }
          60.417% {
            transform:translate(52.786px,59.317px);
            opacity:0.304;
          }
          61.111% {
            transform:translate(52.952px,58.94px);
          }
          61.806% {
            transform:translate(53.119px,58.562px);
          }
          62.5% {
            transform:translate(53.286px,58.181px);
            opacity:0.484;
          }
          63.194% {
            transform:translate(53.452px,57.799px);
          }
          63.889% {
            transform:translate(53.619px,57.416px);
          }
          64.583% {
            transform:translate(53.786px,57.03px);
            opacity:0.645;
          }
          65.278% {
            transform:translate(53.952px,56.643px);
          }
          65.972% {
            transform:translate(54.119px,56.254px);
          }
          66.667% {
            transform:translate(54.286px,55.863px);
            opacity:0.782;
          }
          67.361% {
            transform:translate(54.452px,55.47px);
          }
          68.056% {
            transform:translate(54.619px,55.075px);
          }
          68.75% {
            transform:translate(54.786px,54.677px);
            opacity:0.888;
          }
          69.444% {
            transform:translate(54.952px,54.278px);
          }
          70.139% {
            transform:translate(55.119px,53.876px);
          }
          70.833% {
            transform:translate(55.286px,53.471px);
            opacity:0.961;
          }
          71.528% {
            transform:translate(55.452px,53.065px);
          }
          72.222% {
            transform:translate(55.619px,52.655px);
          }
          72.917% {
            transform:translate(55.786px,52.244px);
            opacity:0.996;
          }
          73.611% {
            transform:translate(55.952px,51.829px);
          }
          74.306% {
            transform:translate(56.119px,51.412px);
          }
          75% {
            transform:translate(56.286px,50.992px);
            opacity:0.994;
          }
          75.694% {
            transform:translate(56.452px,50.57px);
          }
          76.389% {
            transform:translate(56.619px,50.144px);
          }
          77.083% {
            transform:translate(56.786px,49.715px);
            opacity:0.953;
          }
          77.778% {
            transform:translate(56.952px,49.284px);
          }
          78.472% {
            transform:translate(57.119px,48.849px);
          }
          79.167% {
            transform:translate(57.286px,48.411px);
            opacity:0.875;
          }
          79.861% {
            transform:translate(57.452px,47.97px);
          }
          80.556% {
            transform:translate(57.619px,47.526px);
          }
          81.25% {
            transform:translate(57.786px,47.078px);
            opacity:0.764;
          }
          81.944% {
            transform:translate(57.952px,46.627px);
          }
          82.639% {
            transform:translate(58.119px,46.172px);
          }
          83.333% {
            transform:translate(58.286px,45.714px);
            opacity:0.623;
          }
          84.028% {
            transform:translate(58.452px,45.256px);
          }
          84.722% {
            transform:translate(58.619px,44.798px);
          }
          85.417% {
            transform:translate(58.786px,44.339px);
            opacity:0.459;
          }
          86.111% {
            transform:translate(58.952px,43.881px);
          }
          86.806% {
            transform:translate(59.119px,43.423px);
          }
          87.5% {
            transform:translate(59.286px,42.964px);
            opacity:0.277;
          }
          88.194% {
            transform:translate(59.452px,42.506px);
          }
          88.889% {
            transform:translate(59.619px,42.048px);
          }
          89.583% {
            transform:translate(59.786px,41.589px);
            opacity:0.084;
          }
          90.278% {
            transform:translate(59.952px,41.131px);
          }
          90.972% {
            transform:translate(52.119px,62.673px);
          }
          91.667% {
            transform:translate(52.286px,62.214px);
            opacity:0.112;
          }
          92.361% {
            transform:translate(52.452px,61.756px);
          }
          93.056% {
            transform:translate(52.619px,61.298px);
          }
          93.75% {
            transform:translate(52.786px,60.839px);
            opacity:0.304;
          }
          94.444% {
            transform:translate(52.952px,60.381px);
          }
          95.139% {
            transform:translate(53.119px,59.923px);
          }
          95.833% {
            transform:translate(53.286px,59.464px);
            opacity:0.484;
          }
          96.528% {
            transform:translate(53.452px,59.006px);
          }
          97.222% {
            transform:translate(53.619px,58.548px);
          }
          97.917% {
            transform:translate(53.786px,58.089px);
            opacity:0.645;
          }
          98.611% {
            transform:translate(53.952px,57.631px);
          }
          99.306% {
            transform:translate(54.119px,57.173px);
          }
          100% {
            transform:translate(54.286px,56.714px);
            opacity:0.782;
          }
        }
        @keyframes gas3 {
          0% {
            transform:translate(70.429px,46.571px);
            opacity:0.975;
          }
          0.694% {
            transform:translate(70.595px,46.113px);
          }
          1.389% {
            transform:translate(70.762px,45.655px);
          }
          2.083% {
            transform:translate(70.929px,45.196px);
            opacity:1;
          }
          2.778% {
            transform:translate(71.095px,44.738px);
          }
          3.472% {
            transform:translate(71.262px,44.28px);
          }
          4.167% {
            transform:translate(71.429px,43.821px);
            opacity:0.986;
          }
          4.861% {
            transform:translate(71.595px,43.363px);
          }
          5.556% {
            transform:translate(71.762px,42.905px);
          }
          6.25% {
            transform:translate(71.929px,42.446px);
            opacity:0.934;
          }
          6.944% {
            transform:translate(72.095px,41.988px);
          }
          7.639% {
            transform:translate(72.262px,41.53px);
          }
          8.333% {
            transform:translate(72.429px,41.072px);
            opacity:0.847;
          }
          9.028% {
            transform:translate(72.595px,40.617px);
          }
          9.722% {
            transform:translate(72.762px,40.166px);
          }
          10.417% {
            transform:translate(72.929px,39.718px);
            opacity:0.727;
          }
          11.111% {
            transform:translate(73.095px,39.273px);
          }
          11.806% {
            transform:translate(73.262px,38.832px);
          }
          12.5% {
            transform:translate(73.429px,38.394px);
            opacity:0.579;
          }
          13.194% {
            transform:translate(73.595px,37.959px);
          }
          13.889% {
            transform:translate(73.762px,37.527px);
          }
          14.583% {
            transform:translate(73.929px,37.099px);
            opacity:0.408;
          }
          15.278% {
            transform:translate(74.095px,36.673px);
          }
          15.972% {
            transform:translate(74.262px,36.25px);
          }
          16.667% {
            transform:translate(74.429px,35.83px);
            opacity:0.223;
          }
          17.361% {
            transform:translate(74.595px,35.413px);
          }
          18.056% {
            transform:translate(74.762px,34.999px);
          }
          18.75% {
            transform:translate(74.929px,34.587px);
            opacity:0.028;
          }
          19.444% {
            transform:translate(67.095px,56.177px);
          }
          20.139% {
            transform:translate(67.262px,55.771px);
          }
          20.833% {
            transform:translate(67.429px,55.366px);
            opacity:0.168;
          }
          21.528% {
            transform:translate(67.595px,54.964px);
          }
          22.222% {
            transform:translate(67.762px,54.564px);
          }
          22.917% {
            transform:translate(67.929px,54.167px);
            opacity:0.357;
          }
          23.611% {
            transform:translate(68.095px,53.772px);
          }
          24.306% {
            transform:translate(68.262px,53.378px);
          }
          25% {
            transform:translate(68.429px,52.987px);
            opacity:0.532;
          }
          25.694% {
            transform:translate(68.595px,52.598px);
          }
          26.389% {
            transform:translate(68.762px,52.211px);
          }
          27.083% {
            transform:translate(68.929px,51.825px);
            opacity:0.687;
          }
          27.778% {
            transform:translate(69.095px,51.442px);
          }
          28.472% {
            transform:translate(69.262px,51.06px);
          }
          29.167% {
            transform:translate(69.429px,50.679px);
            opacity:0.816;
          }
          29.861% {
            transform:translate(69.595px,50.301px);
          }
          30.556% {
            transform:translate(69.762px,49.923px);
          }
          31.25% {
            transform:translate(69.929px,49.547px);
            opacity:0.913;
          }
          31.944% {
            transform:translate(70.095px,49.173px);
          }
          32.639% {
            transform:translate(70.262px,48.8px);
          }
          33.333% {
            transform:translate(70.429px,48.428px);
            opacity:0.975;
          }
          34.028% {
            transform:translate(70.595px,48.057px);
          }
          34.722% {
            transform:translate(70.762px,47.687px);
          }
          35.417% {
            transform:translate(70.929px,47.319px);
            opacity:1;
          }
          36.111% {
            transform:translate(71.095px,46.951px);
          }
          36.806% {
            transform:translate(71.262px,46.584px);
          }
          37.5% {
            transform:translate(71.429px,46.218px);
            opacity:0.986;
          }
          38.194% {
            transform:translate(71.595px,45.853px);
          }
          38.889% {
            transform:translate(71.762px,45.489px);
          }
          39.583% {
            transform:translate(71.929px,45.125px);
            opacity:0.934;
          }
          40.278% {
            transform:translate(72.095px,44.762px);
          }
          40.972% {
            transform:translate(72.262px,44.399px);
          }
          41.667% {
            transform:translate(72.429px,44.037px);
            opacity:0.847;
          }
          42.361% {
            transform:translate(72.595px,43.675px);
          }
          43.056% {
            transform:translate(72.762px,43.313px);
          }
          43.75% {
            transform:translate(72.929px,42.952px);
            opacity:0.727;
          }
          44.444% {
            transform:translate(73.095px,42.59px);
          }
          45.139% {
            transform:translate(73.262px,42.229px);
          }
          45.833% {
            transform:translate(73.429px,41.868px);
            opacity:0.579;
          }
          46.528% {
            transform:translate(73.595px,41.507px);
          }
          47.222% {
            transform:translate(73.762px,41.146px);
          }
          47.917% {
            transform:translate(73.929px,40.784px);
            opacity:0.408;
          }
          48.611% {
            transform:translate(74.095px,40.423px);
          }
          49.306% {
            transform:translate(74.262px,40.061px);
          }
          50% {
            transform:translate(74.429px,39.698px);
            opacity:0.223;
          }
          50.694% {
            transform:translate(74.595px,39.336px);
          }
          51.389% {
            transform:translate(74.762px,38.972px);
          }
          52.083% {
            transform:translate(74.929px,38.609px);
            opacity:0.028;
          }
          52.778% {
            transform:translate(67.095px,60.244px);
          }
          53.472% {
            transform:translate(67.262px,59.879px);
          }
          54.167% {
            transform:translate(67.429px,59.513px);
            opacity:0.168;
          }
          54.861% {
            transform:translate(67.595px,59.146px);
          }
          55.556% {
            transform:translate(67.762px,58.779px);
          }
          56.25% {
            transform:translate(67.929px,58.41px);
            opacity:0.357;
          }
          56.944% {
            transform:translate(68.095px,58.041px);
          }
          57.639% {
            transform:translate(68.262px,57.67px);
          }
          58.333% {
            transform:translate(68.429px,57.298px);
            opacity:0.532;
          }
          59.028% {
            transform:translate(68.595px,56.925px);
          }
          59.722% {
            transform:translate(68.762px,56.55px);
          }
          60.417% {
            transform:translate(68.929px,56.175px);
            opacity:0.687;
          }
          61.111% {
            transform:translate(69.095px,55.797px);
          }
          61.806% {
            transform:translate(69.262px,55.419px);
          }
          62.5% {
            transform:translate(69.429px,55.038px);
            opacity:0.816;
          }
          63.194% {
            transform:translate(69.595px,54.656px);
          }
          63.889% {
            transform:translate(69.762px,54.273px);
          }
          64.583% {
            transform:translate(69.929px,53.887px);
            opacity:0.913;
          }
          65.278% {
            transform:translate(70.095px,53.5px);
          }
          65.972% {
            transform:translate(70.262px,53.111px);
          }
          66.667% {
            transform:translate(70.429px,52.72px);
            opacity:0.975;
          }
          67.361% {
            transform:translate(70.595px,52.327px);
          }
          68.056% {
            transform:translate(70.762px,51.932px);
          }
          68.75% {
            transform:translate(70.929px,51.534px);
            opacity:1;
          }
          69.444% {
            transform:translate(71.095px,51.135px);
          }
          70.139% {
            transform:translate(71.262px,50.733px);
          }
          70.833% {
            transform:translate(71.429px,50.329px);
            opacity:0.986;
          }
          71.528% {
            transform:translate(71.595px,49.922px);
          }
          72.222% {
            transform:translate(71.762px,49.513px);
          }
          72.917% {
            transform:translate(71.929px,49.101px);
            opacity:0.934;
          }
          73.611% {
            transform:translate(72.095px,48.686px);
          }
          74.306% {
            transform:translate(72.262px,48.269px);
          }
          75% {
            transform:translate(72.429px,47.849px);
            opacity:0.847;
          }
          75.694% {
            transform:translate(72.595px,47.427px);
          }
          76.389% {
            transform:translate(72.762px,47.001px);
          }
          77.083% {
            transform:translate(72.929px,46.573px);
            opacity:0.727;
          }
          77.778% {
            transform:translate(73.095px,46.141px);
          }
          78.472% {
            transform:translate(73.262px,45.706px);
          }
          79.167% {
            transform:translate(73.429px,45.268px);
            opacity:0.579;
          }
          79.861% {
            transform:translate(73.595px,44.827px);
          }
          80.556% {
            transform:translate(73.762px,44.383px);
          }
          81.25% {
            transform:translate(73.929px,43.935px);
            opacity:0.408;
          }
          81.944% {
            transform:translate(74.095px,43.484px);
          }
          82.639% {
            transform:translate(74.262px,43.029px);
          }
          83.333% {
            transform:translate(74.429px,42.571px);
            opacity:0.223;
          }
          84.028% {
            transform:translate(74.595px,42.113px);
          }
          84.722% {
            transform:translate(74.762px,41.655px);
          }
          85.417% {
            transform:translate(74.929px,41.196px);
            opacity:0.028;
          }
          86.111% {
            transform:translate(67.095px,62.738px);
          }
          86.806% {
            transform:translate(67.262px,62.28px);
          }
          87.5% {
            transform:translate(67.429px,61.821px);
            opacity:0.168;
          }
          88.194% {
            transform:translate(67.595px,61.363px);
          }
          88.889% {
            transform:translate(67.762px,60.905px);
          }
          89.583% {
            transform:translate(67.929px,60.446px);
            opacity:0.357;
          }
          90.278% {
            transform:translate(68.095px,59.988px);
          }
          90.972% {
            transform:translate(68.262px,59.53px);
          }
          91.667% {
            transform:translate(68.429px,59.071px);
            opacity:0.532;
          }
          92.361% {
            transform:translate(68.595px,58.613px);
          }
          93.056% {
            transform:translate(68.762px,58.155px);
          }
          93.75% {
            transform:translate(68.929px,57.696px);
            opacity:0.687;
          }
          94.444% {
            transform:translate(69.095px,57.238px);
          }
          95.139% {
            transform:translate(69.262px,56.78px);
          }
          95.833% {
            transform:translate(69.429px,56.321px);
            opacity:0.816;
          }
          96.528% {
            transform:translate(69.595px,55.863px);
          }
          97.222% {
            transform:translate(69.762px,55.405px);
          }
          97.917% {
            transform:translate(69.929px,54.946px);
            opacity:0.913;
          }
          98.611% {
            transform:translate(70.095px,54.488px);
          }
          99.306% {
            transform:translate(70.262px,54.03px);
          }
          100% {
            transform:translate(70.429px,53.571px);
            opacity:0.975;
          }
        }
        @keyframes gas4 {
          0% {
            transform:translate(86.571px,43.429px);
            opacity:0.975;
          }
          0.694% {
            transform:translate(86.738px,42.97px);
          }
          1.389% {
            transform:translate(86.905px,42.512px);
          }
          2.083% {
            transform:translate(87.071px,42.054px);
            opacity:0.913;
          }
          2.778% {
            transform:translate(87.238px,41.595px);
          }
          3.472% {
            transform:translate(87.405px,41.137px);
          }
          4.167% {
            transform:translate(87.571px,40.679px);
            opacity:0.816;
          }
          4.861% {
            transform:translate(87.738px,40.22px);
          }
          5.556% {
            transform:translate(87.905px,39.762px);
          }
          6.25% {
            transform:translate(88.071px,39.304px);
            opacity:0.687;
          }
          6.944% {
            transform:translate(88.238px,38.845px);
          }
          7.639% {
            transform:translate(88.405px,38.387px);
          }
          8.333% {
            transform:translate(88.571px,37.929px);
            opacity:0.532;
          }
          9.028% {
            transform:translate(88.738px,37.474px);
          }
          9.722% {
            transform:translate(88.905px,37.023px);
          }
          10.417% {
            transform:translate(89.071px,36.575px);
            opacity:0.357;
          }
          11.111% {
            transform:translate(89.238px,36.13px);
          }
          11.806% {
            transform:translate(89.405px,35.689px);
          }
          12.5% {
            transform:translate(89.571px,35.251px);
            opacity:0.168;
          }
          13.194% {
            transform:translate(89.738px,34.816px);
          }
          13.889% {
            transform:translate(89.905px,34.385px);
          }
          14.583% {
            transform:translate(82.071px,55.956px);
            opacity:0.028;
          }
          15.278% {
            transform:translate(82.238px,55.53px);
          }
          15.972% {
            transform:translate(82.405px,55.107px);
          }
          16.667% {
            transform:translate(82.571px,54.687px);
            opacity:0.223;
          }
          17.361% {
            transform:translate(82.738px,54.27px);
          }
          18.056% {
            transform:translate(82.905px,53.856px);
          }
          18.75% {
            transform:translate(83.071px,53.444px);
            opacity:0.408;
          }
          19.444% {
            transform:translate(83.238px,53.034px);
          }
          20.139% {
            transform:translate(83.405px,52.628px);
          }
          20.833% {
            transform:translate(83.571px,52.223px);
            opacity:0.579;
          }
          21.528% {
            transform:translate(83.738px,51.821px);
          }
          22.222% {
            transform:translate(83.905px,51.422px);
          }
          22.917% {
            transform:translate(84.071px,51.024px);
            opacity:0.727;
          }
          23.611% {
            transform:translate(84.238px,50.629px);
          }
          24.306% {
            transform:translate(84.405px,50.236px);
          }
          25% {
            transform:translate(84.571px,49.844px);
            opacity:0.847;
          }
          25.694% {
            transform:translate(84.738px,49.455px);
          }
          26.389% {
            transform:translate(84.905px,49.068px);
          }
          27.083% {
            transform:translate(85.071px,48.683px);
            opacity:0.934;
          }
          27.778% {
            transform:translate(85.238px,48.299px);
          }
          28.472% {
            transform:translate(85.405px,47.917px);
          }
          29.167% {
            transform:translate(85.571px,47.537px);
            opacity:0.986;
          }
          29.861% {
            transform:translate(85.738px,47.158px);
          }
          30.556% {
            transform:translate(85.905px,46.78px);
          }
          31.25% {
            transform:translate(86.071px,46.405px);
            opacity:1;
          }
          31.944% {
            transform:translate(86.238px,46.03px);
          }
          32.639% {
            transform:translate(86.405px,45.657px);
          }
          33.333% {
            transform:translate(86.571px,45.285px);
            opacity:0.975;
          }
          34.028% {
            transform:translate(86.738px,44.914px);
          }
          34.722% {
            transform:translate(86.905px,44.545px);
          }
          35.417% {
            transform:translate(87.071px,44.176px);
            opacity:0.913;
          }
          36.111% {
            transform:translate(87.238px,43.808px);
          }
          36.806% {
            transform:translate(87.405px,43.441px);
          }
          37.5% {
            transform:translate(87.571px,43.076px);
            opacity:0.816;
          }
          38.194% {
            transform:translate(87.738px,42.71px);
          }
          38.889% {
            transform:translate(87.905px,42.346px);
          }
          39.583% {
            transform:translate(88.071px,41.982px);
            opacity:0.687;
          }
          40.278% {
            transform:translate(88.238px,41.619px);
          }
          40.972% {
            transform:translate(88.405px,41.256px);
          }
          41.667% {
            transform:translate(88.571px,40.894px);
            opacity:0.532;
          }
          42.361% {
            transform:translate(88.738px,40.532px);
          }
          43.056% {
            transform:translate(88.905px,40.17px);
          }
          43.75% {
            transform:translate(89.071px,39.809px);
            opacity:0.357;
          }
          44.444% {
            transform:translate(89.238px,39.447px);
          }
          45.139% {
            transform:translate(89.405px,39.086px);
          }
          45.833% {
            transform:translate(89.571px,38.725px);
            opacity:0.168;
          }
          46.528% {
            transform:translate(89.738px,38.364px);
          }
          47.222% {
            transform:translate(89.905px,38.003px);
          }
          47.917% {
            transform:translate(82.071px,59.641px);
            opacity:0.028;
          }
          48.611% {
            transform:translate(82.238px,59.28px);
          }
          49.306% {
            transform:translate(82.405px,58.918px);
          }
          50% {
            transform:translate(82.571px,58.556px);
            opacity:0.223;
          }
          50.694% {
            transform:translate(82.738px,58.193px);
          }
          51.389% {
            transform:translate(82.905px,57.83px);
          }
          52.083% {
            transform:translate(83.071px,57.466px);
            opacity:0.408;
          }
          52.778% {
            transform:translate(83.238px,57.101px);
          }
          53.472% {
            transform:translate(83.405px,56.736px);
          }
          54.167% {
            transform:translate(83.571px,56.37px);
            opacity:0.579;
          }
          54.861% {
            transform:translate(83.738px,56.004px);
          }
          55.556% {
            transform:translate(83.905px,55.636px);
          }
          56.25% {
            transform:translate(84.071px,55.267px);
            opacity:0.727;
          }
          56.944% {
            transform:translate(84.238px,54.898px);
          }
          57.639% {
            transform:translate(84.405px,54.527px);
          }
          58.333% {
            transform:translate(84.571px,54.155px);
            opacity:0.847;
          }
          59.028% {
            transform:translate(84.738px,53.782px);
          }
          59.722% {
            transform:translate(84.905px,53.408px);
          }
          60.417% {
            transform:translate(85.071px,53.032px);
            opacity:0.934;
          }
          61.111% {
            transform:translate(85.238px,52.655px);
          }
          61.806% {
            transform:translate(85.405px,52.276px);
          }
          62.5% {
            transform:translate(85.571px,51.896px);
            opacity:0.986;
          }
          63.194% {
            transform:translate(85.738px,51.514px);
          }
          63.889% {
            transform:translate(85.905px,51.13px);
          }
          64.583% {
            transform:translate(86.071px,50.745px);
            opacity:1;
          }
          65.278% {
            transform:translate(86.238px,50.357px);
          }
          65.972% {
            transform:translate(86.405px,49.968px);
          }
          66.667% {
            transform:translate(86.571px,49.577px);
            opacity:0.975;
          }
          67.361% {
            transform:translate(86.738px,49.184px);
          }
          68.056% {
            transform:translate(86.905px,48.789px);
          }
          68.75% {
            transform:translate(87.071px,48.391px);
            opacity:0.913;
          }
          69.444% {
            transform:translate(87.238px,47.992px);
          }
          70.139% {
            transform:translate(87.405px,47.59px);
          }
          70.833% {
            transform:translate(87.571px,47.186px);
            opacity:0.816;
          }
          71.528% {
            transform:translate(87.738px,46.779px);
          }
          72.222% {
            transform:translate(87.905px,46.37px);
          }
          72.917% {
            transform:translate(88.071px,45.958px);
            opacity:0.687;
          }
          73.611% {
            transform:translate(88.238px,45.544px);
          }
          74.306% {
            transform:translate(88.405px,45.127px);
          }
          75% {
            transform:translate(88.571px,44.707px);
            opacity:0.532;
          }
          75.694% {
            transform:translate(88.738px,44.284px);
          }
          76.389% {
            transform:translate(88.905px,43.858px);
          }
          77.083% {
            transform:translate(89.071px,43.43px);
            opacity:0.357;
          }
          77.778% {
            transform:translate(89.238px,42.998px);
          }
          78.472% {
            transform:translate(89.405px,42.563px);
          }
          79.167% {
            transform:translate(89.571px,42.126px);
            opacity:0.168;
          }
          79.861% {
            transform:translate(89.738px,41.684px);
          }
          80.556% {
            transform:translate(89.905px,41.24px);
          }
          81.25% {
            transform:translate(82.071px,62.792px);
            opacity:0.028;
          }
          81.944% {
            transform:translate(82.238px,62.341px);
          }
          82.639% {
            transform:translate(82.405px,61.886px);
          }
          83.333% {
            transform:translate(82.571px,61.429px);
            opacity:0.223;
          }
          84.028% {
            transform:translate(82.738px,60.97px);
          }
          84.722% {
            transform:translate(82.905px,60.512px);
          }
          85.417% {
            transform:translate(83.071px,60.054px);
            opacity:0.408;
          }
          86.111% {
            transform:translate(83.238px,59.595px);
          }
          86.806% {
            transform:translate(83.405px,59.137px);
          }
          87.5% {
            transform:translate(83.571px,58.679px);
            opacity:0.579;
          }
          88.194% {
            transform:translate(83.738px,58.22px);
          }
          88.889% {
            transform:translate(83.905px,57.762px);
          }
          89.583% {
            transform:translate(84.071px,57.304px);
            opacity:0.727;
          }
          90.278% {
            transform:translate(84.238px,56.845px);
          }
          90.972% {
            transform:translate(84.405px,56.387px);
          }
          91.667% {
            transform:translate(84.571px,55.929px);
            opacity:0.847;
          }
          92.361% {
            transform:translate(84.738px,55.47px);
          }
          93.056% {
            transform:translate(84.905px,55.012px);
          }
          93.75% {
            transform:translate(85.071px,54.554px);
            opacity:0.934;
          }
          94.444% {
            transform:translate(85.238px,54.095px);
          }
          95.139% {
            transform:translate(85.405px,53.637px);
          }
          95.833% {
            transform:translate(85.571px,53.179px);
            opacity:0.986;
          }
          96.528% {
            transform:translate(85.738px,52.72px);
          }
          97.222% {
            transform:translate(85.905px,52.262px);
          }
          97.917% {
            transform:translate(86.071px,51.804px);
            opacity:1;
          }
          98.611% {
            transform:translate(86.238px,51.345px);
          }
          99.306% {
            transform:translate(86.405px,50.887px);
          }
          100% {
            transform:translate(86.571px,50.429px);
            opacity:0.975;
          }
        }
        @keyframes gas5 {
          0% {
            transform:translate(102.714px,40.286px);
            opacity:0.782;
          }
          0.694% {
            transform:translate(102.881px,39.827px);
          }
          1.389% {
            transform:translate(103.048px,39.369px);
          }
          2.083% {
            transform:translate(103.214px,38.911px);
            opacity:0.645;
          }
          2.778% {
            transform:translate(103.381px,38.452px);
          }
          3.472% {
            transform:translate(103.548px,37.994px);
          }
          4.167% {
            transform:translate(103.714px,37.536px);
            opacity:0.484;
          }
          4.861% {
            transform:translate(103.881px,37.077px);
          }
          5.556% {
            transform:translate(104.048px,36.619px);
          }
          6.25% {
            transform:translate(104.214px,36.161px);
            opacity:0.304;
          }
          6.944% {
            transform:translate(104.381px,35.702px);
          }
          7.639% {
            transform:translate(104.548px,35.244px);
          }
          8.333% {
            transform:translate(104.714px,34.786px);
            opacity:0.112;
          }
          9.028% {
            transform:translate(104.881px,34.331px);
          }
          9.722% {
            transform:translate(97.048px,55.88px);
          }
          10.417% {
            transform:translate(97.214px,55.432px);
            opacity:0.084;
          }
          11.111% {
            transform:translate(97.381px,54.988px);
          }
          11.806% {
            transform:translate(97.548px,54.546px);
          }
          12.5% {
            transform:translate(97.714px,54.108px);
            opacity:0.277;
          }
          13.194% {
            transform:translate(97.881px,53.673px);
          }
          13.889% {
            transform:translate(98.048px,53.242px);
          }
          14.583% {
            transform:translate(98.214px,52.813px);
            opacity:0.459;
          }
          15.278% {
            transform:translate(98.381px,52.387px);
          }
          15.972% {
            transform:translate(98.548px,51.965px);
          }
          16.667% {
            transform:translate(98.714px,51.545px);
            opacity:0.623;
          }
          17.361% {
            transform:translate(98.881px,51.127px);
          }
          18.056% {
            transform:translate(99.048px,50.713px);
          }
          18.75% {
            transform:translate(99.214px,50.301px);
            opacity:0.764;
          }
          19.444% {
            transform:translate(99.381px,49.892px);
          }
          20.139% {
            transform:translate(99.548px,49.485px);
          }
          20.833% {
            transform:translate(99.714px,49.08px);
            opacity:0.875;
          }
          21.528% {
            transform:translate(99.881px,48.678px);
          }
          22.222% {
            transform:translate(100.048px,48.279px);
          }
          22.917% {
            transform:translate(100.214px,47.881px);
            opacity:0.953;
          }
          23.611% {
            transform:translate(100.381px,47.486px);
          }
          24.306% {
            transform:translate(100.548px,47.093px);
          }
          25% {
            transform:translate(100.714px,46.702px);
            opacity:0.994;
          }
          25.694% {
            transform:translate(100.881px,46.312px);
          }
          26.389% {
            transform:translate(101.048px,45.925px);
          }
          27.083% {
            transform:translate(101.214px,45.54px);
            opacity:0.996;
          }
          27.778% {
            transform:translate(101.381px,45.156px);
          }
          28.472% {
            transform:translate(101.548px,44.774px);
          }
          29.167% {
            transform:translate(101.714px,44.394px);
            opacity:0.961;
          }
          29.861% {
            transform:translate(101.881px,44.015px);
          }
          30.556% {
            transform:translate(102.048px,43.638px);
          }
          31.25% {
            transform:translate(102.214px,43.262px);
            opacity:0.888;
          }
          31.944% {
            transform:translate(102.381px,42.887px);
          }
          32.639% {
            transform:translate(102.548px,42.514px);
          }
          33.333% {
            transform:translate(102.714px,42.142px);
            opacity:0.782;
          }
          34.028% {
            transform:translate(102.881px,41.771px);
          }
          34.722% {
            transform:translate(103.048px,41.402px);
          }
          35.417% {
            transform:translate(103.214px,41.033px);
            opacity:0.645;
          }
          36.111% {
            transform:translate(103.381px,40.665px);
          }
          36.806% {
            transform:translate(103.548px,40.299px);
          }
          37.5% {
            transform:translate(103.714px,39.933px);
            opacity:0.484;
          }
          38.194% {
            transform:translate(103.881px,39.568px);
          }
          38.889% {
            transform:translate(104.048px,39.203px);
          }
          39.583% {
            transform:translate(104.214px,38.839px);
            opacity:0.304;
          }
          40.278% {
            transform:translate(104.381px,38.476px);
          }
          40.972% {
            transform:translate(104.548px,38.113px);
          }
          41.667% {
            transform:translate(104.714px,37.751px);
            opacity:0.112;
          }
          42.361% {
            transform:translate(104.881px,37.389px);
          }
          43.056% {
            transform:translate(97.048px,59.027px);
          }
          43.75% {
            transform:translate(97.214px,58.666px);
            opacity:0.084;
          }
          44.444% {
            transform:translate(97.381px,58.305px);
          }
          45.139% {
            transform:translate(97.548px,57.943px);
          }
          45.833% {
            transform:translate(97.714px,57.582px);
            opacity:0.277;
          }
          46.528% {
            transform:translate(97.881px,57.221px);
          }
          47.222% {
            transform:translate(98.048px,56.86px);
          }
          47.917% {
            transform:translate(98.214px,56.499px);
            opacity:0.459;
          }
          48.611% {
            transform:translate(98.381px,56.137px);
          }
          49.306% {
            transform:translate(98.548px,55.775px);
          }
          50% {
            transform:translate(98.714px,55.413px);
            opacity:0.623;
          }
          50.694% {
            transform:translate(98.881px,55.05px);
          }
          51.389% {
            transform:translate(99.048px,54.687px);
          }
          52.083% {
            transform:translate(99.214px,54.323px);
            opacity:0.764;
          }
          52.778% {
            transform:translate(99.381px,53.958px);
          }
          53.472% {
            transform:translate(99.548px,53.593px);
          }
          54.167% {
            transform:translate(99.714px,53.227px);
            opacity:0.875;
          }
          54.861% {
            transform:translate(99.881px,52.861px);
          }
          55.556% {
            transform:translate(100.048px,52.493px);
          }
          56.25% {
            transform:translate(100.214px,52.124px);
            opacity:0.953;
          }
          56.944% {
            transform:translate(100.381px,51.755px);
          }
          57.639% {
            transform:translate(100.548px,51.384px);
          }
          58.333% {
            transform:translate(100.714px,51.012px);
            opacity:0.994;
          }
          59.028% {
            transform:translate(100.881px,50.639px);
          }
          59.722% {
            transform:translate(101.048px,50.265px);
          }
          60.417% {
            transform:translate(101.214px,49.889px);
            opacity:0.996;
          }
          61.111% {
            transform:translate(101.381px,49.512px);
          }
          61.806% {
            transform:translate(101.548px,49.133px);
          }
          62.5% {
            transform:translate(101.714px,48.753px);
            opacity:0.961;
          }
          63.194% {
            transform:translate(101.881px,48.371px);
          }
          63.889% {
            transform:translate(102.048px,47.987px);
          }
          64.583% {
            transform:translate(102.214px,47.602px);
            opacity:0.888;
          }
          65.278% {
            transform:translate(102.381px,47.215px);
          }
          65.972% {
            transform:translate(102.548px,46.825px);
          }
          66.667% {
            transform:translate(102.714px,46.434px);
            opacity:0.782;
          }
          67.361% {
            transform:translate(102.881px,46.041px);
          }
          68.056% {
            transform:translate(103.048px,45.646px);
          }
          68.75% {
            transform:translate(103.214px,45.249px);
            opacity:0.645;
          }
          69.444% {
            transform:translate(103.381px,44.849px);
          }
          70.139% {
            transform:translate(103.548px,44.447px);
          }
          70.833% {
            transform:translate(103.714px,44.043px);
            opacity:0.484;
          }
          71.528% {
            transform:translate(103.881px,43.636px);
          }
          72.222% {
            transform:translate(104.048px,43.227px);
          }
          72.917% {
            transform:translate(104.214px,42.815px);
            opacity:0.304;
          }
          73.611% {
            transform:translate(104.381px,42.401px);
          }
          74.306% {
            transform:translate(104.548px,41.984px);
          }
          75% {
            transform:translate(104.714px,41.564px);
            opacity:0.112;
          }
          75.694% {
            transform:translate(104.881px,41.141px);
          }
          76.389% {
            transform:translate(97.048px,62.715px);
          }
          77.083% {
            transform:translate(97.214px,62.287px);
            opacity:0.084;
          }
          77.778% {
            transform:translate(97.381px,61.855px);
          }
          78.472% {
            transform:translate(97.548px,61.421px);
          }
          79.167% {
            transform:translate(97.714px,60.983px);
            opacity:0.277;
          }
          79.861% {
            transform:translate(97.881px,60.542px);
          }
          80.556% {
            transform:translate(98.048px,60.097px);
          }
          81.25% {
            transform:translate(98.214px,59.649px);
            opacity:0.459;
          }
          81.944% {
            transform:translate(98.381px,59.198px);
          }
          82.639% {
            transform:translate(98.548px,58.744px);
          }
          83.333% {
            transform:translate(98.714px,58.286px);
            opacity:0.623;
          }
          84.028% {
            transform:translate(98.881px,57.827px);
          }
          84.722% {
            transform:translate(99.048px,57.369px);
          }
          85.417% {
            transform:translate(99.214px,56.911px);
            opacity:0.764;
          }
          86.111% {
            transform:translate(99.381px,56.452px);
          }
          86.806% {
            transform:translate(99.548px,55.994px);
          }
          87.5% {
            transform:translate(99.714px,55.536px);
            opacity:0.875;
          }
          88.194% {
            transform:translate(99.881px,55.077px);
          }
          88.889% {
            transform:translate(100.048px,54.619px);
          }
          89.583% {
            transform:translate(100.214px,54.161px);
            opacity:0.953;
          }
          90.278% {
            transform:translate(100.381px,53.702px);
          }
          90.972% {
            transform:translate(100.548px,53.244px);
          }
          91.667% {
            transform:translate(100.714px,52.786px);
            opacity:0.994;
          }
          92.361% {
            transform:translate(100.881px,52.327px);
          }
          93.056% {
            transform:translate(101.048px,51.869px);
          }
          93.75% {
            transform:translate(101.214px,51.411px);
            opacity:0.996;
          }
          94.444% {
            transform:translate(101.381px,50.952px);
          }
          95.139% {
            transform:translate(101.548px,50.494px);
          }
          95.833% {
            transform:translate(101.714px,50.036px);
            opacity:0.961;
          }
          96.528% {
            transform:translate(101.881px,49.577px);
          }
          97.222% {
            transform:translate(102.048px,49.119px);
          }
          97.917% {
            transform:translate(102.214px,48.661px);
            opacity:0.888;
          }
          98.611% {
            transform:translate(102.381px,48.202px);
          }
          99.306% {
            transform:translate(102.548px,47.744px);
          }
          100% {
            transform:translate(102.714px,47.286px);
            opacity:0.782;
          }
        }
        @keyframes gas6 {
          0% {
            transform:translate(118.857px,37.143px);
            opacity:0.434;
          }
          0.694% {
            transform:translate(119.024px,36.685px);
          }
          1.389% {
            transform:translate(119.19px,36.226px);
          }
          2.083% {
            transform:translate(119.357px,35.768px);
            opacity:0.25;
          }
          2.778% {
            transform:translate(119.524px,35.31px);
          }
          3.472% {
            transform:translate(119.69px,34.851px);
          }
          4.167% {
            transform:translate(119.857px,34.393px);
            opacity:0.056;
          }
          4.861% {
            transform:translate(112.024px,55.935px);
          }
          5.556% {
            transform:translate(112.19px,55.476px);
          }
          6.25% {
            transform:translate(112.357px,55.018px);
            opacity:0.14;
          }
          6.944% {
            transform:translate(112.524px,54.56px);
          }
          7.639% {
            transform:translate(112.69px,54.101px);
          }
          8.333% {
            transform:translate(112.857px,53.643px);
            opacity:0.33;
          }
          9.028% {
            transform:translate(113.024px,53.188px);
          }
          9.722% {
            transform:translate(113.19px,52.737px);
          }
          10.417% {
            transform:translate(113.357px,52.289px);
            opacity:0.508;
          }
          11.111% {
            transform:translate(113.524px,51.845px);
          }
          11.806% {
            transform:translate(113.69px,51.403px);
          }
          12.5% {
            transform:translate(113.857px,50.965px);
            opacity:0.666;
          }
          13.194% {
            transform:translate(114.024px,50.531px);
          }
          13.889% {
            transform:translate(114.19px,50.099px);
          }
          14.583% {
            transform:translate(114.357px,49.67px);
            opacity:0.799;
          }
          15.278% {
            transform:translate(114.524px,49.244px);
          }
          15.972% {
            transform:translate(114.69px,48.822px);
          }
          16.667% {
            transform:translate(114.857px,48.402px);
            opacity:0.901;
          }
          17.361% {
            transform:translate(115.024px,47.984px);
          }
          18.056% {
            transform:translate(115.19px,47.57px);
          }
          18.75% {
            transform:translate(115.357px,47.158px);
            opacity:0.968;
          }
          19.444% {
            transform:translate(115.524px,46.749px);
          }
          20.139% {
            transform:translate(115.69px,46.342px);
          }
          20.833% {
            transform:translate(115.857px,45.938px);
            opacity:0.998;
          }
          21.528% {
            transform:translate(116.024px,45.536px);
          }
          22.222% {
            transform:translate(116.19px,45.136px);
          }
          22.917% {
            transform:translate(116.357px,44.738px);
            opacity:0.99;
          }
          23.611% {
            transform:translate(116.524px,44.343px);
          }
          24.306% {
            transform:translate(116.69px,43.95px);
          }
          25% {
            transform:translate(116.857px,43.559px);
            opacity:0.944;
          }
          25.694% {
            transform:translate(117.024px,43.17px);
          }
          26.389% {
            transform:translate(117.19px,42.782px);
          }
          27.083% {
            transform:translate(117.357px,42.397px);
            opacity:0.861;
          }
          27.778% {
            transform:translate(117.524px,42.013px);
          }
          28.472% {
            transform:translate(117.69px,41.631px);
          }
          29.167% {
            transform:translate(117.857px,41.251px);
            opacity:0.746;
          }
          29.861% {
            transform:translate(118.024px,40.872px);
          }
          30.556% {
            transform:translate(118.19px,40.495px);
          }
          31.25% {
            transform:translate(118.357px,40.119px);
            opacity:0.601;
          }
          31.944% {
            transform:translate(118.524px,39.744px);
          }
          32.639% {
            transform:translate(118.69px,39.371px);
          }
          33.333% {
            transform:translate(118.857px,38.999px);
            opacity:0.434;
          }
          34.028% {
            transform:translate(119.024px,38.629px);
          }
          34.722% {
            transform:translate(119.19px,38.259px);
          }
          35.417% {
            transform:translate(119.357px,37.89px);
            opacity:0.25;
          }
          36.111% {
            transform:translate(119.524px,37.523px);
          }
          36.806% {
            transform:translate(119.69px,37.156px);
          }
          37.5% {
            transform:translate(119.857px,36.79px);
            opacity:0.056;
          }
          38.194% {
            transform:translate(112.024px,58.425px);
          }
          38.889% {
            transform:translate(112.19px,58.06px);
          }
          39.583% {
            transform:translate(112.357px,57.696px);
            opacity:0.14;
          }
          40.278% {
            transform:translate(112.524px,57.333px);
          }
          40.972% {
            transform:translate(112.69px,56.97px);
          }
          41.667% {
            transform:translate(112.857px,56.608px);
            opacity:0.33;
          }
          42.361% {
            transform:translate(113.024px,56.246px);
          }
          43.056% {
            transform:translate(113.19px,55.884px);
          }
          43.75% {
            transform:translate(113.357px,55.523px);
            opacity:0.508;
          }
          44.444% {
            transform:translate(113.524px,55.162px);
          }
          45.139% {
            transform:translate(113.69px,54.801px);
          }
          45.833% {
            transform:translate(113.857px,54.44px);
            opacity:0.666;
          }
          46.528% {
            transform:translate(114.024px,54.078px);
          }
          47.222% {
            transform:translate(114.19px,53.717px);
          }
          47.917% {
            transform:translate(114.357px,53.356px);
            opacity:0.799;
          }
          48.611% {
            transform:translate(114.524px,52.994px);
          }
          49.306% {
            transform:translate(114.69px,52.632px);
          }
          50% {
            transform:translate(114.857px,52.27px);
            opacity:0.901;
          }
          50.694% {
            transform:translate(115.024px,51.907px);
          }
          51.389% {
            transform:translate(115.19px,51.544px);
          }
          52.083% {
            transform:translate(115.357px,51.18px);
            opacity:0.968;
          }
          52.778% {
            transform:translate(115.524px,50.816px);
          }
          53.472% {
            transform:translate(115.69px,50.45px);
          }
          54.167% {
            transform:translate(115.857px,50.085px);
            opacity:0.998;
          }
          54.861% {
            transform:translate(116.024px,49.718px);
          }
          55.556% {
            transform:translate(116.19px,49.35px);
          }
          56.25% {
            transform:translate(116.357px,48.982px);
            opacity:0.99;
          }
          56.944% {
            transform:translate(116.524px,48.612px);
          }
          57.639% {
            transform:translate(116.69px,48.241px);
          }
          58.333% {
            transform:translate(116.857px,47.869px);
            opacity:0.944;
          }
          59.028% {
            transform:translate(117.024px,47.496px);
          }
          59.722% {
            transform:translate(117.19px,47.122px);
          }
          60.417% {
            transform:translate(117.357px,46.746px);
            opacity:0.861;
          }
          61.111% {
            transform:translate(117.524px,46.369px);
          }
          61.806% {
            transform:translate(117.69px,45.99px);
          }
          62.5% {
            transform:translate(117.857px,45.61px);
            opacity:0.746;
          }
          63.194% {
            transform:translate(118.024px,45.228px);
          }
          63.889% {
            transform:translate(118.19px,44.844px);
          }
          64.583% {
            transform:translate(118.357px,44.459px);
            opacity:0.601;
          }
          65.278% {
            transform:translate(118.524px,44.072px);
          }
          65.972% {
            transform:translate(118.69px,43.683px);
          }
          66.667% {
            transform:translate(118.857px,43.291px);
            opacity:0.434;
          }
          67.361% {
            transform:translate(119.024px,42.898px);
          }
          68.056% {
            transform:translate(119.19px,42.503px);
          }
          68.75% {
            transform:translate(119.357px,42.106px);
            opacity:0.25;
          }
          69.444% {
            transform:translate(119.524px,41.706px);
          }
          70.139% {
            transform:translate(119.69px,41.304px);
          }
          70.833% {
            transform:translate(119.857px,40.9px);
            opacity:0.056;
          }
          71.528% {
            transform:translate(112.024px,62.493px);
          }
          72.222% {
            transform:translate(112.19px,62.084px);
          }
          72.917% {
            transform:translate(112.357px,61.672px);
            opacity:0.14;
          }
          73.611% {
            transform:translate(112.524px,61.258px);
          }
          74.306% {
            transform:translate(112.69px,60.841px);
          }
          75% {
            transform:translate(112.857px,60.421px);
            opacity:0.33;
          }
          75.694% {
            transform:translate(113.024px,59.998px);
          }
          76.389% {
            transform:translate(113.19px,59.573px);
          }
          77.083% {
            transform:translate(113.357px,59.144px);
            opacity:0.508;
          }
          77.778% {
            transform:translate(113.524px,58.712px);
          }
          78.472% {
            transform:translate(113.69px,58.278px);
          }
          79.167% {
            transform:translate(113.857px,57.84px);
            opacity:0.666;
          }
          79.861% {
            transform:translate(114.024px,57.399px);
          }
          80.556% {
            transform:translate(114.19px,56.954px);
          }
          81.25% {
            transform:translate(114.357px,56.507px);
            opacity:0.799;
          }
          81.944% {
            transform:translate(114.524px,56.055px);
          }
          82.639% {
            transform:translate(114.69px,55.601px);
          }
          83.333% {
            transform:translate(114.857px,55.143px);
            opacity:0.901;
          }
          84.028% {
            transform:translate(115.024px,54.685px);
          }
          84.722% {
            transform:translate(115.19px,54.226px);
          }
          85.417% {
            transform:translate(115.357px,53.768px);
            opacity:0.968;
          }
          86.111% {
            transform:translate(115.524px,53.31px);
          }
          86.806% {
            transform:translate(115.69px,52.851px);
          }
          87.5% {
            transform:translate(115.857px,52.393px);
            opacity:0.998;
          }
          88.194% {
            transform:translate(116.024px,51.935px);
          }
          88.889% {
            transform:translate(116.19px,51.476px);
          }
          89.583% {
            transform:translate(116.357px,51.018px);
            opacity:0.99;
          }
          90.278% {
            transform:translate(116.524px,50.56px);
          }
          90.972% {
            transform:translate(116.69px,50.101px);
          }
          91.667% {
            transform:translate(116.857px,49.643px);
            opacity:0.944;
          }
          92.361% {
            transform:translate(117.024px,49.185px);
          }
          93.056% {
            transform:translate(117.19px,48.726px);
          }
          93.75% {
            transform:translate(117.357px,48.268px);
            opacity:0.861;
          }
          94.444% {
            transform:translate(117.524px,47.81px);
          }
          95.139% {
            transform:translate(117.69px,47.351px);
          }
          95.833% {
            transform:translate(117.857px,46.893px);
            opacity:0.746;
          }
          96.528% {
            transform:translate(118.024px,46.435px);
          }
          97.222% {
            transform:translate(118.19px,45.976px);
          }
          97.917% {
            transform:translate(118.357px,45.518px);
            opacity:0.601;
          }
          98.611% {
            transform:translate(118.524px,45.06px);
          }
          99.306% {
            transform:translate(118.69px,44.601px);
          }
          100% {
            transform:translate(118.857px,44.143px);
            opacity:0.434;
          }
        }
        @keyframes ablationEpisode {
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
            opacity:0.926;
          }
          97.917% {
            opacity:0.376;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .char {
            d:path('M13 64.778H127V76.715H13Z');
          }
          .gas0 {
            transform:translate(24px,57.278px);
            opacity:0.707;
          }
          .gas1 {
            transform:translate(40.143px,54.135px);
            opacity:0.944;
          }
          .gas2 {
            transform:translate(56.286px,50.992px);
            opacity:0.994;
          }
          .gas3 {
            transform:translate(72.429px,47.849px);
            opacity:0.847;
          }
          .gas4 {
            transform:translate(88.571px,44.707px);
            opacity:0.532;
          }
          .gas5 {
            transform:translate(104.714px,41.564px);
            opacity:0.112;
          }
          .gas6 {
            transform:translate(112.857px,60.421px);
            opacity:0.33;
          }
          .ablationEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ablative Heat Shield">
        <g class="ablationEpisode">
          <rect x="13" y="67" width="114" height="29" fill="#b9ad83"/>
          <rect x="13" y="96" width="114" height="15" fill="#446a71" stroke="#9ac4c3"/>
          <rect x="13" y="112" width="114" height="8" fill="#173a40"/>
          <path d="M13 58H127" stroke="#ad8f65" stroke-dasharray="3 3"/>
          <path d="M13 58H127V68H13Z" class="char" fill="#4d4337"/>
          <path d="M18 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M32 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M46 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M60 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M74 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M88 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M102 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M116 63l3 4 -2 5" class="cracks" fill="none" stroke="#6e5740"/>
          <path d="M8 43Q63 25 132 43" fill="none" stroke="#c88559" stroke-width="5" opacity=".5"/>
          <circle cx="0" cy="0" r="1.7" class="gas0" fill="#e0ac77"/>
          <circle cx="0" cy="0" r="1.7" class="gas1" fill="#e0ac77"/>
          <circle cx="0" cy="0" r="1.7" class="gas2" fill="#e0ac77"/>
          <circle cx="0" cy="0" r="1.7" class="gas3" fill="#e0ac77"/>
          <circle cx="0" cy="0" r="1.7" class="gas4" fill="#e0ac77"/>
          <circle cx="0" cy="0" r="1.7" class="gas5" fill="#e0ac77"/>
          <circle cx="0" cy="0" r="1.7" class="gas6" fill="#e0ac77"/>
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

if (!customElements.get("concept-ablative-heat-shield")) {
  customElements.define("concept-ablative-heat-shield", ConceptAblativeHeatShield);
}
