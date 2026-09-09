// Clarifier Sedimentation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptClarifierSedimentation extends HTMLElement {
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
        .scraper {
          animation:scraper 16s linear infinite;
        }
        .sediment0 {
          animation:sediment0 16s linear infinite;
        }
        .sediment0 {
          animation:sediment0 16s linear infinite;
        }
        .sediment1 {
          animation:sediment1 16s linear infinite;
        }
        .sediment1 {
          animation:sediment1 16s linear infinite;
        }
        .sediment2 {
          animation:sediment2 16s linear infinite;
        }
        .sediment2 {
          animation:sediment2 16s linear infinite;
        }
        .sediment3 {
          animation:sediment3 16s linear infinite;
        }
        .sediment3 {
          animation:sediment3 16s linear infinite;
        }
        .settleEpisode {
          animation:settleEpisode 16s linear infinite;
        }
        @keyframes scraper {
          0% {
            d:path('M117 89V99');
          }
          2.083% {
            d:path('M117 89V99');
          }
          4.167% {
            d:path('M117 89V99');
          }
          6.25% {
            d:path('M117 89V99');
          }
          8.333% {
            d:path('M117 89V99');
          }
          10.417% {
            d:path('M117 89V99');
          }
          12.5% {
            d:path('M117 89V99');
          }
          14.583% {
            d:path('M117 89V99');
          }
          16.667% {
            d:path('M117 89V99');
          }
          18.75% {
            d:path('M117 89V99');
          }
          20.833% {
            d:path('M117 89V99');
          }
          22.917% {
            d:path('M117 89V99');
          }
          25% {
            d:path('M117 89V99');
          }
          27.083% {
            d:path('M117 89V99');
          }
          29.167% {
            d:path('M117 89V99');
          }
          31.25% {
            d:path('M117 89V99');
          }
          33.333% {
            d:path('M117 89V99');
          }
          35.417% {
            d:path('M117 89V99');
          }
          37.5% {
            d:path('M117 89V99');
          }
          39.583% {
            d:path('M117 89V99');
          }
          41.667% {
            d:path('M117 89V99');
          }
          43.75% {
            d:path('M117 89V99');
          }
          45.833% {
            d:path('M117 89V99');
          }
          47.917% {
            d:path('M117 89V99');
          }
          50% {
            d:path('M117 89V99');
          }
          52.083% {
            d:path('M115.917 89V99');
          }
          54.167% {
            d:path('M112.866 89V99');
          }
          56.25% {
            d:path('M108.141 89V99');
          }
          58.333% {
            d:path('M102.036 89V99');
          }
          60.417% {
            d:path('M94.847 89V99');
          }
          62.5% {
            d:path('M86.869 89V99');
          }
          64.583% {
            d:path('M78.395 89V99');
          }
          66.667% {
            d:path('M69.72 89V99');
          }
          68.75% {
            d:path('M61.14 89V99');
          }
          70.833% {
            d:path('M52.949 89V99');
          }
          72.917% {
            d:path('M45.442 89V99');
          }
          75% {
            d:path('M38.913 89V99');
          }
          77.083% {
            d:path('M33.657 89V99');
          }
          79.167% {
            d:path('M29.97 89V99');
          }
          81.25% {
            d:path('M28.144 89V99');
          }
          83.333% {
            d:path('M28 89V99');
          }
          85.417% {
            d:path('M28 89V99');
          }
          87.5% {
            d:path('M28 89V99');
          }
          89.583% {
            d:path('M28 89V99');
          }
          91.667% {
            d:path('M28 89V99');
          }
          93.75% {
            d:path('M28 89V99');
          }
          95.833% {
            d:path('M28 89V99');
          }
          97.917% {
            d:path('M28 89V99');
          }
          100% {
            d:path('M28 89V99');
          }
        }
        @keyframes sediment0 {
          0% {
            transform:translate(35px,60px);
            opacity:1;
          }
          0.521% {
            transform:translate(35.199px,60.551px);
            opacity:1;
          }
          1.042% {
            transform:translate(35.398px,61.103px);
            opacity:1;
          }
          1.563% {
            transform:translate(35.597px,61.654px);
            opacity:1;
          }
          2.083% {
            transform:translate(35.797px,62.206px);
            opacity:1;
          }
          2.604% {
            transform:translate(35.996px,62.757px);
            opacity:1;
          }
          3.125% {
            transform:translate(36.195px,63.309px);
            opacity:1;
          }
          3.646% {
            transform:translate(36.394px,63.86px);
            opacity:1;
          }
          4.167% {
            transform:translate(36.593px,64.412px);
            opacity:1;
          }
          4.688% {
            transform:translate(36.792px,64.963px);
            opacity:1;
          }
          5.208% {
            transform:translate(36.991px,65.515px);
            opacity:1;
          }
          5.729% {
            transform:translate(37.191px,66.066px);
            opacity:1;
          }
          6.25% {
            transform:translate(37.39px,66.618px);
            opacity:1;
          }
          6.771% {
            transform:translate(37.589px,67.169px);
            opacity:1;
          }
          7.292% {
            transform:translate(37.788px,67.721px);
            opacity:1;
          }
          7.813% {
            transform:translate(37.987px,68.272px);
            opacity:1;
          }
          8.333% {
            transform:translate(38.186px,68.824px);
            opacity:1;
          }
          8.854% {
            transform:translate(38.385px,69.375px);
            opacity:1;
          }
          9.375% {
            transform:translate(38.585px,69.926px);
            opacity:1;
          }
          9.896% {
            transform:translate(38.784px,70.478px);
            opacity:1;
          }
          10.417% {
            transform:translate(38.983px,71.029px);
            opacity:1;
          }
          10.938% {
            transform:translate(39.182px,71.581px);
            opacity:1;
          }
          11.458% {
            transform:translate(39.381px,72.132px);
            opacity:1;
          }
          11.979% {
            transform:translate(39.58px,72.684px);
            opacity:1;
          }
          12.5% {
            transform:translate(39.779px,73.235px);
            opacity:1;
          }
          13.021% {
            transform:translate(39.979px,73.787px);
            opacity:1;
          }
          13.542% {
            transform:translate(40.178px,74.338px);
            opacity:1;
          }
          14.063% {
            transform:translate(40.377px,74.89px);
            opacity:1;
          }
          14.583% {
            transform:translate(40.576px,75.441px);
            opacity:1;
          }
          15.104% {
            transform:translate(40.775px,75.993px);
            opacity:1;
          }
          15.625% {
            transform:translate(40.974px,76.544px);
            opacity:1;
          }
          16.146% {
            transform:translate(41.173px,77.096px);
            opacity:1;
          }
          16.667% {
            transform:translate(41.373px,77.647px);
            opacity:1;
          }
          17.188% {
            transform:translate(41.572px,78.199px);
            opacity:1;
          }
          17.708% {
            transform:translate(41.771px,78.75px);
            opacity:1;
          }
          18.229% {
            transform:translate(41.97px,79.301px);
            opacity:1;
          }
          18.75% {
            transform:translate(42.169px,79.853px);
            opacity:1;
          }
          19.271% {
            transform:translate(42.368px,80.404px);
            opacity:1;
          }
          19.792% {
            transform:translate(42.567px,80.956px);
            opacity:1;
          }
          20.313% {
            transform:translate(42.767px,81.507px);
            opacity:1;
          }
          20.833% {
            transform:translate(42.966px,82.059px);
            opacity:1;
          }
          21.354% {
            transform:translate(43.165px,82.61px);
            opacity:1;
          }
          21.875% {
            transform:translate(43.364px,83.162px);
            opacity:1;
          }
          22.396% {
            transform:translate(43.563px,83.713px);
            opacity:1;
          }
          22.917% {
            transform:translate(43.762px,84.265px);
            opacity:1;
          }
          23.438% {
            transform:translate(43.961px,84.816px);
            opacity:1;
          }
          23.958% {
            transform:translate(44.161px,85.368px);
            opacity:1;
          }
          24.479% {
            transform:translate(44.36px,85.919px);
            opacity:1;
          }
          25% {
            transform:translate(44.559px,86.471px);
            opacity:1;
          }
          25.521% {
            transform:translate(44.758px,87.022px);
            opacity:1;
          }
          26.042% {
            transform:translate(44.957px,87.574px);
            opacity:1;
          }
          26.563% {
            transform:translate(45.156px,88.125px);
            opacity:1;
          }
          27.083% {
            transform:translate(45.355px,88.676px);
            opacity:1;
          }
          27.604% {
            transform:translate(45.555px,89.228px);
            opacity:1;
          }
          28.125% {
            transform:translate(45.754px,89.779px);
            opacity:1;
          }
          28.646% {
            transform:translate(45.953px,90.331px);
            opacity:1;
          }
          29.167% {
            transform:translate(46.152px,90.882px);
            opacity:1;
          }
          29.688% {
            transform:translate(46.351px,91.434px);
            opacity:1;
          }
          30.208% {
            transform:translate(46.55px,91.985px);
            opacity:1;
          }
          30.729% {
            transform:translate(46.749px,92.537px);
            opacity:1;
          }
          31.25% {
            transform:translate(46.949px,93.088px);
            opacity:1;
          }
          31.771% {
            transform:translate(47.148px,93.64px);
            opacity:1;
          }
          32.292% {
            transform:translate(47.347px,94.191px);
            opacity:1;
          }
          32.813% {
            transform:translate(47.546px,94.743px);
            opacity:1;
          }
          33.333% {
            transform:translate(47.745px,95.294px);
            opacity:1;
          }
          33.854% {
            transform:translate(47.944px,95.846px);
            opacity:1;
          }
          34.375% {
            transform:translate(48px,96px);
            opacity:1;
          }
          34.896% {
            transform:translate(48px,96px);
            opacity:1;
          }
          35.417% {
            transform:translate(48px,96px);
            opacity:1;
          }
          35.938% {
            transform:translate(48px,96px);
            opacity:1;
          }
          36.458% {
            transform:translate(48px,96px);
            opacity:1;
          }
          36.979% {
            transform:translate(48px,96px);
            opacity:1;
          }
          37.5% {
            transform:translate(48px,96px);
            opacity:1;
          }
          38.021% {
            transform:translate(48px,96px);
            opacity:1;
          }
          38.542% {
            transform:translate(48px,96px);
            opacity:1;
          }
          39.063% {
            transform:translate(48px,96px);
            opacity:1;
          }
          39.583% {
            transform:translate(48px,96px);
            opacity:1;
          }
          40.104% {
            transform:translate(48px,96px);
            opacity:1;
          }
          40.625% {
            transform:translate(48px,96px);
            opacity:1;
          }
          41.146% {
            transform:translate(48px,96px);
            opacity:1;
          }
          41.667% {
            transform:translate(48px,96px);
            opacity:1;
          }
          42.188% {
            transform:translate(48px,96px);
            opacity:1;
          }
          42.708% {
            transform:translate(48px,96px);
            opacity:1;
          }
          43.229% {
            transform:translate(48px,96px);
            opacity:1;
          }
          43.75% {
            transform:translate(48px,96px);
            opacity:1;
          }
          44.271% {
            transform:translate(48px,96px);
            opacity:1;
          }
          44.792% {
            transform:translate(48px,96px);
            opacity:1;
          }
          45.313% {
            transform:translate(48px,96px);
            opacity:1;
          }
          45.833% {
            transform:translate(48px,96px);
            opacity:1;
          }
          46.354% {
            transform:translate(48px,96px);
            opacity:1;
          }
          46.875% {
            transform:translate(48px,96px);
            opacity:1;
          }
          47.396% {
            transform:translate(48px,96px);
            opacity:1;
          }
          47.917% {
            transform:translate(48px,96px);
            opacity:1;
          }
          48.438% {
            transform:translate(48px,96px);
            opacity:1;
          }
          48.958% {
            transform:translate(48px,96px);
            opacity:1;
          }
          49.479% {
            transform:translate(48px,96px);
            opacity:1;
          }
          50% {
            transform:translate(48px,96px);
            opacity:1;
          }
          50.521% {
            transform:translate(48px,96px);
            opacity:1;
          }
          51.042% {
            transform:translate(48px,96px);
            opacity:1;
          }
          51.563% {
            transform:translate(48px,96px);
            opacity:1;
          }
          52.083% {
            transform:translate(48px,96px);
            opacity:1;
          }
          52.604% {
            transform:translate(48px,96px);
            opacity:1;
          }
          53.125% {
            transform:translate(48px,96px);
            opacity:1;
          }
          53.646% {
            transform:translate(48px,96px);
            opacity:1;
          }
          54.167% {
            transform:translate(48px,96px);
            opacity:1;
          }
          54.688% {
            transform:translate(48px,96px);
            opacity:1;
          }
          55.208% {
            transform:translate(48px,96px);
            opacity:1;
          }
          55.729% {
            transform:translate(48px,96px);
            opacity:1;
          }
          56.25% {
            transform:translate(48px,96px);
            opacity:1;
          }
          56.771% {
            transform:translate(48px,96px);
            opacity:1;
          }
          57.292% {
            transform:translate(48px,96px);
            opacity:1;
          }
          57.813% {
            transform:translate(48px,96px);
            opacity:1;
          }
          58.333% {
            transform:translate(48px,96px);
            opacity:1;
          }
          58.854% {
            transform:translate(48px,96px);
            opacity:1;
          }
          59.375% {
            transform:translate(48px,96px);
            opacity:1;
          }
          59.896% {
            transform:translate(48px,96px);
            opacity:1;
          }
          60.417% {
            transform:translate(48px,96px);
            opacity:1;
          }
          60.938% {
            transform:translate(48px,96px);
            opacity:1;
          }
          61.458% {
            transform:translate(48px,96px);
            opacity:1;
          }
          61.979% {
            transform:translate(48px,96px);
            opacity:1;
          }
          62.5% {
            transform:translate(48px,96px);
            opacity:1;
          }
          63.021% {
            transform:translate(48px,96px);
            opacity:1;
          }
          63.542% {
            transform:translate(48px,96px);
            opacity:1;
          }
          64.063% {
            transform:translate(48px,96px);
            opacity:1;
          }
          64.583% {
            transform:translate(48px,96px);
            opacity:1;
          }
          65.104% {
            transform:translate(48px,96px);
            opacity:1;
          }
          65.625% {
            transform:translate(48px,96px);
            opacity:1;
          }
          66.146% {
            transform:translate(48px,96px);
            opacity:1;
          }
          66.667% {
            transform:translate(48px,96px);
            opacity:1;
          }
          67.188% {
            transform:translate(48px,96px);
            opacity:1;
          }
          67.708% {
            transform:translate(47.4px,96px);
            opacity:1;
          }
          68.229% {
            transform:translate(45.26px,96px);
            opacity:1;
          }
          68.75% {
            transform:translate(43.14px,96px);
            opacity:1;
          }
          69.271% {
            transform:translate(41.045px,96px);
            opacity:1;
          }
          69.792% {
            transform:translate(38.978px,96px);
            opacity:1;
          }
          70.313% {
            transform:translate(36.944px,96px);
            opacity:1;
          }
          70.833% {
            transform:translate(34.949px,96px);
            opacity:1;
          }
          71.354% {
            transform:translate(32.997px,96px);
            opacity:1;
          }
          71.875% {
            transform:translate(31.092px,96px);
            opacity:1;
          }
          72.396% {
            transform:translate(29.239px,96px);
            opacity:1;
          }
          72.917% {
            transform:translate(28px,96.527px);
            opacity:1;
          }
          73.438% {
            transform:translate(28px,98.205px);
            opacity:1;
          }
          73.958% {
            transform:translate(28px,99.884px);
            opacity:1;
          }
          74.479% {
            transform:translate(28px,101.562px);
            opacity:1;
          }
          75% {
            transform:translate(28px,103.24px);
            opacity:1;
          }
          75.521% {
            transform:translate(28px,104.918px);
            opacity:1;
          }
          76.042% {
            transform:translate(28px,106.597px);
            opacity:1;
          }
          76.563% {
            transform:translate(28px,108.275px);
            opacity:1;
          }
          77.083% {
            transform:translate(28px,109.953px);
            opacity:1;
          }
          77.604% {
            transform:translate(28px,111.631px);
            opacity:1;
          }
          78.125% {
            transform:translate(28px,113.31px);
            opacity:1;
          }
          78.646% {
            transform:translate(28px,114.988px);
            opacity:1;
          }
          79.167% {
            transform:translate(28px,116.666px);
            opacity:1;
          }
          79.688% {
            transform:translate(28px,118.344px);
            opacity:1;
          }
          80.208% {
            transform:translate(28px,120.023px);
            opacity:1;
          }
          80.729% {
            transform:translate(28px,121.701px);
            opacity:1;
          }
          81.25% {
            transform:translate(28px,123.379px);
            opacity:0.743;
          }
          81.771% {
            transform:translate(28px,125.057px);
            opacity:0.244;
          }
          82.292% {
            transform:translate(28px,126.736px);
            opacity:0;
          }
          82.813% {
            transform:translate(28px,128.414px);
            opacity:0;
          }
          83.333% {
            transform:translate(28px,130.092px);
            opacity:0;
          }
          83.854% {
            transform:translate(28px,131.77px);
            opacity:0;
          }
          84.375% {
            transform:translate(28px,133.448px);
            opacity:0;
          }
          84.896% {
            transform:translate(28px,135.127px);
            opacity:0;
          }
          85.417% {
            transform:translate(28px,136.805px);
            opacity:0;
          }
          85.938% {
            transform:translate(28px,138.483px);
            opacity:0;
          }
          86.458% {
            transform:translate(28px,140.161px);
            opacity:0;
          }
          86.979% {
            transform:translate(28px,141.84px);
            opacity:0;
          }
          87.5% {
            transform:translate(28px,143.518px);
            opacity:0;
          }
          88.021% {
            transform:translate(28px,145.196px);
            opacity:0;
          }
          88.542% {
            transform:translate(28px,146.874px);
            opacity:0;
          }
          89.063% {
            transform:translate(28px,148.553px);
            opacity:0;
          }
          89.583% {
            transform:translate(28px,150.231px);
            opacity:0;
          }
          90.104% {
            transform:translate(28px,151.909px);
            opacity:0;
          }
          90.625% {
            transform:translate(28px,153.587px);
            opacity:0;
          }
          91.146% {
            transform:translate(28px,155.266px);
            opacity:0;
          }
          91.667% {
            transform:translate(28px,156.944px);
            opacity:0;
          }
          92.188% {
            transform:translate(28px,158.622px);
            opacity:0;
          }
          92.708% {
            transform:translate(28px,160.3px);
            opacity:0;
          }
          93.229% {
            transform:translate(28px,161.979px);
            opacity:0;
          }
          93.75% {
            transform:translate(28px,163.657px);
            opacity:0;
          }
          94.271% {
            transform:translate(28px,165.335px);
            opacity:0;
          }
          94.792% {
            transform:translate(28px,167.013px);
            opacity:0;
          }
          95.313% {
            transform:translate(28px,168.692px);
            opacity:0;
          }
          95.833% {
            transform:translate(28px,170.37px);
            opacity:0;
          }
          96.354% {
            transform:translate(28px,172.048px);
            opacity:0;
          }
          96.875% {
            transform:translate(28px,173.726px);
            opacity:0;
          }
          97.396% {
            transform:translate(28px,175.405px);
            opacity:0;
          }
          97.917% {
            transform:translate(28px,177.083px);
            opacity:0;
          }
          98.438% {
            transform:translate(28px,178.761px);
            opacity:0;
          }
          98.958% {
            transform:translate(28px,180.439px);
            opacity:0;
          }
          99.479% {
            transform:translate(28px,182.117px);
            opacity:0;
          }
          100% {
            transform:translate(28px,183.796px);
            opacity:0;
          }
        }
        @keyframes sediment1 {
          0% {
            transform:translate(48px,60px);
            opacity:1;
          }
          0.521% {
            transform:translate(48.181px,60.5px);
            opacity:1;
          }
          1.042% {
            transform:translate(48.361px,61px);
            opacity:1;
          }
          1.563% {
            transform:translate(48.542px,61.5px);
            opacity:1;
          }
          2.083% {
            transform:translate(48.722px,62px);
            opacity:1;
          }
          2.604% {
            transform:translate(48.903px,62.5px);
            opacity:1;
          }
          3.125% {
            transform:translate(49.083px,63px);
            opacity:1;
          }
          3.646% {
            transform:translate(49.264px,63.5px);
            opacity:1;
          }
          4.167% {
            transform:translate(49.444px,64px);
            opacity:1;
          }
          4.688% {
            transform:translate(49.625px,64.5px);
            opacity:1;
          }
          5.208% {
            transform:translate(49.806px,65px);
            opacity:1;
          }
          5.729% {
            transform:translate(49.986px,65.5px);
            opacity:1;
          }
          6.25% {
            transform:translate(50.167px,66px);
            opacity:1;
          }
          6.771% {
            transform:translate(50.347px,66.5px);
            opacity:1;
          }
          7.292% {
            transform:translate(50.528px,67px);
            opacity:1;
          }
          7.813% {
            transform:translate(50.708px,67.5px);
            opacity:1;
          }
          8.333% {
            transform:translate(50.889px,68px);
            opacity:1;
          }
          8.854% {
            transform:translate(51.069px,68.5px);
            opacity:1;
          }
          9.375% {
            transform:translate(51.25px,69px);
            opacity:1;
          }
          9.896% {
            transform:translate(51.431px,69.5px);
            opacity:1;
          }
          10.417% {
            transform:translate(51.611px,70px);
            opacity:1;
          }
          10.938% {
            transform:translate(51.792px,70.5px);
            opacity:1;
          }
          11.458% {
            transform:translate(51.972px,71px);
            opacity:1;
          }
          11.979% {
            transform:translate(52.153px,71.5px);
            opacity:1;
          }
          12.5% {
            transform:translate(52.333px,72px);
            opacity:1;
          }
          13.021% {
            transform:translate(52.514px,72.5px);
            opacity:1;
          }
          13.542% {
            transform:translate(52.694px,73px);
            opacity:1;
          }
          14.063% {
            transform:translate(52.875px,73.5px);
            opacity:1;
          }
          14.583% {
            transform:translate(53.056px,74px);
            opacity:1;
          }
          15.104% {
            transform:translate(53.236px,74.5px);
            opacity:1;
          }
          15.625% {
            transform:translate(53.417px,75px);
            opacity:1;
          }
          16.146% {
            transform:translate(53.597px,75.5px);
            opacity:1;
          }
          16.667% {
            transform:translate(53.778px,76px);
            opacity:1;
          }
          17.188% {
            transform:translate(53.958px,76.5px);
            opacity:1;
          }
          17.708% {
            transform:translate(54.139px,77px);
            opacity:1;
          }
          18.229% {
            transform:translate(54.319px,77.5px);
            opacity:1;
          }
          18.75% {
            transform:translate(54.5px,78px);
            opacity:1;
          }
          19.271% {
            transform:translate(54.681px,78.5px);
            opacity:1;
          }
          19.792% {
            transform:translate(54.861px,79px);
            opacity:1;
          }
          20.313% {
            transform:translate(55.042px,79.5px);
            opacity:1;
          }
          20.833% {
            transform:translate(55.222px,80px);
            opacity:1;
          }
          21.354% {
            transform:translate(55.403px,80.5px);
            opacity:1;
          }
          21.875% {
            transform:translate(55.583px,81px);
            opacity:1;
          }
          22.396% {
            transform:translate(55.764px,81.5px);
            opacity:1;
          }
          22.917% {
            transform:translate(55.944px,82px);
            opacity:1;
          }
          23.438% {
            transform:translate(56.125px,82.5px);
            opacity:1;
          }
          23.958% {
            transform:translate(56.306px,83px);
            opacity:1;
          }
          24.479% {
            transform:translate(56.486px,83.5px);
            opacity:1;
          }
          25% {
            transform:translate(56.667px,84px);
            opacity:1;
          }
          25.521% {
            transform:translate(56.847px,84.5px);
            opacity:1;
          }
          26.042% {
            transform:translate(57.028px,85px);
            opacity:1;
          }
          26.563% {
            transform:translate(57.208px,85.5px);
            opacity:1;
          }
          27.083% {
            transform:translate(57.389px,86px);
            opacity:1;
          }
          27.604% {
            transform:translate(57.569px,86.5px);
            opacity:1;
          }
          28.125% {
            transform:translate(57.75px,87px);
            opacity:1;
          }
          28.646% {
            transform:translate(57.931px,87.5px);
            opacity:1;
          }
          29.167% {
            transform:translate(58.111px,88px);
            opacity:1;
          }
          29.688% {
            transform:translate(58.292px,88.5px);
            opacity:1;
          }
          30.208% {
            transform:translate(58.472px,89px);
            opacity:1;
          }
          30.729% {
            transform:translate(58.653px,89.5px);
            opacity:1;
          }
          31.25% {
            transform:translate(58.833px,90px);
            opacity:1;
          }
          31.771% {
            transform:translate(59.014px,90.5px);
            opacity:1;
          }
          32.292% {
            transform:translate(59.194px,91px);
            opacity:1;
          }
          32.813% {
            transform:translate(59.375px,91.5px);
            opacity:1;
          }
          33.333% {
            transform:translate(59.556px,92px);
            opacity:1;
          }
          33.854% {
            transform:translate(59.736px,92.5px);
            opacity:1;
          }
          34.375% {
            transform:translate(59.917px,93px);
            opacity:1;
          }
          34.896% {
            transform:translate(60.097px,93.5px);
            opacity:1;
          }
          35.417% {
            transform:translate(60.278px,94px);
            opacity:1;
          }
          35.938% {
            transform:translate(60.458px,94.5px);
            opacity:1;
          }
          36.458% {
            transform:translate(60.639px,95px);
            opacity:1;
          }
          36.979% {
            transform:translate(60.819px,95.5px);
            opacity:1;
          }
          37.5% {
            transform:translate(61px,96px);
            opacity:1;
          }
          38.021% {
            transform:translate(61px,96px);
            opacity:1;
          }
          38.542% {
            transform:translate(61px,96px);
            opacity:1;
          }
          39.063% {
            transform:translate(61px,96px);
            opacity:1;
          }
          39.583% {
            transform:translate(61px,96px);
            opacity:1;
          }
          40.104% {
            transform:translate(61px,96px);
            opacity:1;
          }
          40.625% {
            transform:translate(61px,96px);
            opacity:1;
          }
          41.146% {
            transform:translate(61px,96px);
            opacity:1;
          }
          41.667% {
            transform:translate(61px,96px);
            opacity:1;
          }
          42.188% {
            transform:translate(61px,96px);
            opacity:1;
          }
          42.708% {
            transform:translate(61px,96px);
            opacity:1;
          }
          43.229% {
            transform:translate(61px,96px);
            opacity:1;
          }
          43.75% {
            transform:translate(61px,96px);
            opacity:1;
          }
          44.271% {
            transform:translate(61px,96px);
            opacity:1;
          }
          44.792% {
            transform:translate(61px,96px);
            opacity:1;
          }
          45.313% {
            transform:translate(61px,96px);
            opacity:1;
          }
          45.833% {
            transform:translate(61px,96px);
            opacity:1;
          }
          46.354% {
            transform:translate(61px,96px);
            opacity:1;
          }
          46.875% {
            transform:translate(61px,96px);
            opacity:1;
          }
          47.396% {
            transform:translate(61px,96px);
            opacity:1;
          }
          47.917% {
            transform:translate(61px,96px);
            opacity:1;
          }
          48.438% {
            transform:translate(61px,96px);
            opacity:1;
          }
          48.958% {
            transform:translate(61px,96px);
            opacity:1;
          }
          49.479% {
            transform:translate(61px,96px);
            opacity:1;
          }
          50% {
            transform:translate(61px,96px);
            opacity:1;
          }
          50.521% {
            transform:translate(61px,96px);
            opacity:1;
          }
          51.042% {
            transform:translate(61px,96px);
            opacity:1;
          }
          51.563% {
            transform:translate(61px,96px);
            opacity:1;
          }
          52.083% {
            transform:translate(61px,96px);
            opacity:1;
          }
          52.604% {
            transform:translate(61px,96px);
            opacity:1;
          }
          53.125% {
            transform:translate(61px,96px);
            opacity:1;
          }
          53.646% {
            transform:translate(61px,96px);
            opacity:1;
          }
          54.167% {
            transform:translate(61px,96px);
            opacity:1;
          }
          54.688% {
            transform:translate(61px,96px);
            opacity:1;
          }
          55.208% {
            transform:translate(61px,96px);
            opacity:1;
          }
          55.729% {
            transform:translate(61px,96px);
            opacity:1;
          }
          56.25% {
            transform:translate(61px,96px);
            opacity:1;
          }
          56.771% {
            transform:translate(61px,96px);
            opacity:1;
          }
          57.292% {
            transform:translate(61px,96px);
            opacity:1;
          }
          57.813% {
            transform:translate(61px,96px);
            opacity:1;
          }
          58.333% {
            transform:translate(61px,96px);
            opacity:1;
          }
          58.854% {
            transform:translate(61px,96px);
            opacity:1;
          }
          59.375% {
            transform:translate(61px,96px);
            opacity:1;
          }
          59.896% {
            transform:translate(61px,96px);
            opacity:1;
          }
          60.417% {
            transform:translate(61px,96px);
            opacity:1;
          }
          60.938% {
            transform:translate(61px,96px);
            opacity:1;
          }
          61.458% {
            transform:translate(61px,96px);
            opacity:1;
          }
          61.979% {
            transform:translate(61px,96px);
            opacity:1;
          }
          62.5% {
            transform:translate(61px,96px);
            opacity:1;
          }
          63.021% {
            transform:translate(61px,96px);
            opacity:1;
          }
          63.542% {
            transform:translate(61px,96px);
            opacity:1;
          }
          64.063% {
            transform:translate(61px,96px);
            opacity:1;
          }
          64.583% {
            transform:translate(61px,96px);
            opacity:1;
          }
          65.104% {
            transform:translate(61px,96px);
            opacity:1;
          }
          65.625% {
            transform:translate(61px,96px);
            opacity:1;
          }
          66.146% {
            transform:translate(60.892px,96px);
            opacity:1;
          }
          66.667% {
            transform:translate(58.72px,96px);
            opacity:1;
          }
          67.188% {
            transform:translate(56.555px,96px);
            opacity:1;
          }
          67.708% {
            transform:translate(54.4px,96px);
            opacity:1;
          }
          68.229% {
            transform:translate(52.26px,96px);
            opacity:1;
          }
          68.75% {
            transform:translate(50.14px,96px);
            opacity:1;
          }
          69.271% {
            transform:translate(48.045px,96px);
            opacity:1;
          }
          69.792% {
            transform:translate(45.978px,96px);
            opacity:1;
          }
          70.313% {
            transform:translate(43.944px,96px);
            opacity:1;
          }
          70.833% {
            transform:translate(41.949px,96px);
            opacity:1;
          }
          71.354% {
            transform:translate(39.997px,96px);
            opacity:1;
          }
          71.875% {
            transform:translate(38.092px,96px);
            opacity:1;
          }
          72.396% {
            transform:translate(36.239px,96px);
            opacity:1;
          }
          72.917% {
            transform:translate(34.442px,96px);
            opacity:1;
          }
          73.438% {
            transform:translate(32.707px,96px);
            opacity:1;
          }
          73.958% {
            transform:translate(31.037px,96px);
            opacity:1;
          }
          74.479% {
            transform:translate(29.438px,96px);
            opacity:1;
          }
          75% {
            transform:translate(28px,96.098px);
            opacity:1;
          }
          75.521% {
            transform:translate(28px,97.776px);
            opacity:1;
          }
          76.042% {
            transform:translate(28px,99.454px);
            opacity:1;
          }
          76.563% {
            transform:translate(28px,101.133px);
            opacity:1;
          }
          77.083% {
            transform:translate(28px,102.811px);
            opacity:1;
          }
          77.604% {
            transform:translate(28px,104.489px);
            opacity:1;
          }
          78.125% {
            transform:translate(28px,106.167px);
            opacity:1;
          }
          78.646% {
            transform:translate(28px,107.846px);
            opacity:1;
          }
          79.167% {
            transform:translate(28px,109.524px);
            opacity:1;
          }
          79.688% {
            transform:translate(28px,111.202px);
            opacity:1;
          }
          80.208% {
            transform:translate(28px,112.88px);
            opacity:1;
          }
          80.729% {
            transform:translate(28px,114.559px);
            opacity:1;
          }
          81.25% {
            transform:translate(28px,116.237px);
            opacity:1;
          }
          81.771% {
            transform:translate(28px,117.915px);
            opacity:1;
          }
          82.292% {
            transform:translate(28px,119.593px);
            opacity:1;
          }
          82.813% {
            transform:translate(28px,121.272px);
            opacity:1;
          }
          83.333% {
            transform:translate(28px,122.95px);
            opacity:0.852;
          }
          83.854% {
            transform:translate(28px,124.628px);
            opacity:0.367;
          }
          84.375% {
            transform:translate(28px,126.306px);
            opacity:0.011;
          }
          84.896% {
            transform:translate(28px,127.985px);
            opacity:0;
          }
          85.417% {
            transform:translate(28px,129.663px);
            opacity:0;
          }
          85.938% {
            transform:translate(28px,131.341px);
            opacity:0;
          }
          86.458% {
            transform:translate(28px,133.019px);
            opacity:0;
          }
          86.979% {
            transform:translate(28px,134.698px);
            opacity:0;
          }
          87.5% {
            transform:translate(28px,136.376px);
            opacity:0;
          }
          88.021% {
            transform:translate(28px,138.054px);
            opacity:0;
          }
          88.542% {
            transform:translate(28px,139.732px);
            opacity:0;
          }
          89.063% {
            transform:translate(28px,141.41px);
            opacity:0;
          }
          89.583% {
            transform:translate(28px,143.089px);
            opacity:0;
          }
          90.104% {
            transform:translate(28px,144.767px);
            opacity:0;
          }
          90.625% {
            transform:translate(28px,146.445px);
            opacity:0;
          }
          91.146% {
            transform:translate(28px,148.123px);
            opacity:0;
          }
          91.667% {
            transform:translate(28px,149.802px);
            opacity:0;
          }
          92.188% {
            transform:translate(28px,151.48px);
            opacity:0;
          }
          92.708% {
            transform:translate(28px,153.158px);
            opacity:0;
          }
          93.229% {
            transform:translate(28px,154.836px);
            opacity:0;
          }
          93.75% {
            transform:translate(28px,156.515px);
            opacity:0;
          }
          94.271% {
            transform:translate(28px,158.193px);
            opacity:0;
          }
          94.792% {
            transform:translate(28px,159.871px);
            opacity:0;
          }
          95.313% {
            transform:translate(28px,161.549px);
            opacity:0;
          }
          95.833% {
            transform:translate(28px,163.228px);
            opacity:0;
          }
          96.354% {
            transform:translate(28px,164.906px);
            opacity:0;
          }
          96.875% {
            transform:translate(28px,166.584px);
            opacity:0;
          }
          97.396% {
            transform:translate(28px,168.262px);
            opacity:0;
          }
          97.917% {
            transform:translate(28px,169.941px);
            opacity:0;
          }
          98.438% {
            transform:translate(28px,171.619px);
            opacity:0;
          }
          98.958% {
            transform:translate(28px,173.297px);
            opacity:0;
          }
          99.479% {
            transform:translate(28px,174.975px);
            opacity:0;
          }
          100% {
            transform:translate(28px,176.654px);
            opacity:0;
          }
        }
        @keyframes sediment2 {
          0% {
            transform:translate(61px,60px);
            opacity:1;
          }
          0.521% {
            transform:translate(61.165px,60.457px);
            opacity:1;
          }
          1.042% {
            transform:translate(61.33px,60.915px);
            opacity:1;
          }
          1.563% {
            transform:translate(61.495px,61.372px);
            opacity:1;
          }
          2.083% {
            transform:translate(61.661px,61.829px);
            opacity:1;
          }
          2.604% {
            transform:translate(61.826px,62.287px);
            opacity:1;
          }
          3.125% {
            transform:translate(61.991px,62.744px);
            opacity:1;
          }
          3.646% {
            transform:translate(62.156px,63.201px);
            opacity:1;
          }
          4.167% {
            transform:translate(62.321px,63.659px);
            opacity:1;
          }
          4.688% {
            transform:translate(62.486px,64.116px);
            opacity:1;
          }
          5.208% {
            transform:translate(62.651px,64.573px);
            opacity:1;
          }
          5.729% {
            transform:translate(62.817px,65.03px);
            opacity:1;
          }
          6.25% {
            transform:translate(62.982px,65.488px);
            opacity:1;
          }
          6.771% {
            transform:translate(63.147px,65.945px);
            opacity:1;
          }
          7.292% {
            transform:translate(63.312px,66.402px);
            opacity:1;
          }
          7.813% {
            transform:translate(63.477px,66.86px);
            opacity:1;
          }
          8.333% {
            transform:translate(63.642px,67.317px);
            opacity:1;
          }
          8.854% {
            transform:translate(63.807px,67.774px);
            opacity:1;
          }
          9.375% {
            transform:translate(63.973px,68.232px);
            opacity:1;
          }
          9.896% {
            transform:translate(64.138px,68.689px);
            opacity:1;
          }
          10.417% {
            transform:translate(64.303px,69.146px);
            opacity:1;
          }
          10.938% {
            transform:translate(64.468px,69.604px);
            opacity:1;
          }
          11.458% {
            transform:translate(64.633px,70.061px);
            opacity:1;
          }
          11.979% {
            transform:translate(64.798px,70.518px);
            opacity:1;
          }
          12.5% {
            transform:translate(64.963px,70.976px);
            opacity:1;
          }
          13.021% {
            transform:translate(65.129px,71.433px);
            opacity:1;
          }
          13.542% {
            transform:translate(65.294px,71.89px);
            opacity:1;
          }
          14.063% {
            transform:translate(65.459px,72.348px);
            opacity:1;
          }
          14.583% {
            transform:translate(65.624px,72.805px);
            opacity:1;
          }
          15.104% {
            transform:translate(65.789px,73.262px);
            opacity:1;
          }
          15.625% {
            transform:translate(65.954px,73.72px);
            opacity:1;
          }
          16.146% {
            transform:translate(66.119px,74.177px);
            opacity:1;
          }
          16.667% {
            transform:translate(66.285px,74.634px);
            opacity:1;
          }
          17.188% {
            transform:translate(66.45px,75.091px);
            opacity:1;
          }
          17.708% {
            transform:translate(66.615px,75.549px);
            opacity:1;
          }
          18.229% {
            transform:translate(66.78px,76.006px);
            opacity:1;
          }
          18.75% {
            transform:translate(66.945px,76.463px);
            opacity:1;
          }
          19.271% {
            transform:translate(67.11px,76.921px);
            opacity:1;
          }
          19.792% {
            transform:translate(67.275px,77.378px);
            opacity:1;
          }
          20.313% {
            transform:translate(67.441px,77.835px);
            opacity:1;
          }
          20.833% {
            transform:translate(67.606px,78.293px);
            opacity:1;
          }
          21.354% {
            transform:translate(67.771px,78.75px);
            opacity:1;
          }
          21.875% {
            transform:translate(67.936px,79.207px);
            opacity:1;
          }
          22.396% {
            transform:translate(68.101px,79.665px);
            opacity:1;
          }
          22.917% {
            transform:translate(68.266px,80.122px);
            opacity:1;
          }
          23.438% {
            transform:translate(68.431px,80.579px);
            opacity:1;
          }
          23.958% {
            transform:translate(68.597px,81.037px);
            opacity:1;
          }
          24.479% {
            transform:translate(68.762px,81.494px);
            opacity:1;
          }
          25% {
            transform:translate(68.927px,81.951px);
            opacity:1;
          }
          25.521% {
            transform:translate(69.092px,82.409px);
            opacity:1;
          }
          26.042% {
            transform:translate(69.257px,82.866px);
            opacity:1;
          }
          26.563% {
            transform:translate(69.422px,83.323px);
            opacity:1;
          }
          27.083% {
            transform:translate(69.587px,83.78px);
            opacity:1;
          }
          27.604% {
            transform:translate(69.753px,84.238px);
            opacity:1;
          }
          28.125% {
            transform:translate(69.918px,84.695px);
            opacity:1;
          }
          28.646% {
            transform:translate(70.083px,85.152px);
            opacity:1;
          }
          29.167% {
            transform:translate(70.248px,85.61px);
            opacity:1;
          }
          29.688% {
            transform:translate(70.413px,86.067px);
            opacity:1;
          }
          30.208% {
            transform:translate(70.578px,86.524px);
            opacity:1;
          }
          30.729% {
            transform:translate(70.743px,86.982px);
            opacity:1;
          }
          31.25% {
            transform:translate(70.909px,87.439px);
            opacity:1;
          }
          31.771% {
            transform:translate(71.074px,87.896px);
            opacity:1;
          }
          32.292% {
            transform:translate(71.239px,88.354px);
            opacity:1;
          }
          32.813% {
            transform:translate(71.404px,88.811px);
            opacity:1;
          }
          33.333% {
            transform:translate(71.569px,89.268px);
            opacity:1;
          }
          33.854% {
            transform:translate(71.734px,89.726px);
            opacity:1;
          }
          34.375% {
            transform:translate(71.899px,90.183px);
            opacity:1;
          }
          34.896% {
            transform:translate(72.065px,90.64px);
            opacity:1;
          }
          35.417% {
            transform:translate(72.23px,91.098px);
            opacity:1;
          }
          35.938% {
            transform:translate(72.395px,91.555px);
            opacity:1;
          }
          36.458% {
            transform:translate(72.56px,92.012px);
            opacity:1;
          }
          36.979% {
            transform:translate(72.725px,92.47px);
            opacity:1;
          }
          37.5% {
            transform:translate(72.89px,92.927px);
            opacity:1;
          }
          38.021% {
            transform:translate(73.055px,93.384px);
            opacity:1;
          }
          38.542% {
            transform:translate(73.221px,93.841px);
            opacity:1;
          }
          39.063% {
            transform:translate(73.386px,94.299px);
            opacity:1;
          }
          39.583% {
            transform:translate(73.551px,94.756px);
            opacity:1;
          }
          40.104% {
            transform:translate(73.716px,95.213px);
            opacity:1;
          }
          40.625% {
            transform:translate(73.881px,95.671px);
            opacity:1;
          }
          41.146% {
            transform:translate(74px,96px);
            opacity:1;
          }
          41.667% {
            transform:translate(74px,96px);
            opacity:1;
          }
          42.188% {
            transform:translate(74px,96px);
            opacity:1;
          }
          42.708% {
            transform:translate(74px,96px);
            opacity:1;
          }
          43.229% {
            transform:translate(74px,96px);
            opacity:1;
          }
          43.75% {
            transform:translate(74px,96px);
            opacity:1;
          }
          44.271% {
            transform:translate(74px,96px);
            opacity:1;
          }
          44.792% {
            transform:translate(74px,96px);
            opacity:1;
          }
          45.313% {
            transform:translate(74px,96px);
            opacity:1;
          }
          45.833% {
            transform:translate(74px,96px);
            opacity:1;
          }
          46.354% {
            transform:translate(74px,96px);
            opacity:1;
          }
          46.875% {
            transform:translate(74px,96px);
            opacity:1;
          }
          47.396% {
            transform:translate(74px,96px);
            opacity:1;
          }
          47.917% {
            transform:translate(74px,96px);
            opacity:1;
          }
          48.438% {
            transform:translate(74px,96px);
            opacity:1;
          }
          48.958% {
            transform:translate(74px,96px);
            opacity:1;
          }
          49.479% {
            transform:translate(74px,96px);
            opacity:1;
          }
          50% {
            transform:translate(74px,96px);
            opacity:1;
          }
          50.521% {
            transform:translate(74px,96px);
            opacity:1;
          }
          51.042% {
            transform:translate(74px,96px);
            opacity:1;
          }
          51.563% {
            transform:translate(74px,96px);
            opacity:1;
          }
          52.083% {
            transform:translate(74px,96px);
            opacity:1;
          }
          52.604% {
            transform:translate(74px,96px);
            opacity:1;
          }
          53.125% {
            transform:translate(74px,96px);
            opacity:1;
          }
          53.646% {
            transform:translate(74px,96px);
            opacity:1;
          }
          54.167% {
            transform:translate(74px,96px);
            opacity:1;
          }
          54.688% {
            transform:translate(74px,96px);
            opacity:1;
          }
          55.208% {
            transform:translate(74px,96px);
            opacity:1;
          }
          55.729% {
            transform:translate(74px,96px);
            opacity:1;
          }
          56.25% {
            transform:translate(74px,96px);
            opacity:1;
          }
          56.771% {
            transform:translate(74px,96px);
            opacity:1;
          }
          57.292% {
            transform:translate(74px,96px);
            opacity:1;
          }
          57.813% {
            transform:translate(74px,96px);
            opacity:1;
          }
          58.333% {
            transform:translate(74px,96px);
            opacity:1;
          }
          58.854% {
            transform:translate(74px,96px);
            opacity:1;
          }
          59.375% {
            transform:translate(74px,96px);
            opacity:1;
          }
          59.896% {
            transform:translate(74px,96px);
            opacity:1;
          }
          60.417% {
            transform:translate(74px,96px);
            opacity:1;
          }
          60.938% {
            transform:translate(74px,96px);
            opacity:1;
          }
          61.458% {
            transform:translate(74px,96px);
            opacity:1;
          }
          61.979% {
            transform:translate(74px,96px);
            opacity:1;
          }
          62.5% {
            transform:translate(74px,96px);
            opacity:1;
          }
          63.021% {
            transform:translate(74px,96px);
            opacity:1;
          }
          63.542% {
            transform:translate(74px,96px);
            opacity:1;
          }
          64.063% {
            transform:translate(74px,96px);
            opacity:1;
          }
          64.583% {
            transform:translate(74px,96px);
            opacity:1;
          }
          65.104% {
            transform:translate(72.233px,96px);
            opacity:1;
          }
          65.625% {
            transform:translate(70.064px,96px);
            opacity:1;
          }
          66.146% {
            transform:translate(67.892px,96px);
            opacity:1;
          }
          66.667% {
            transform:translate(65.72px,96px);
            opacity:1;
          }
          67.188% {
            transform:translate(63.555px,96px);
            opacity:1;
          }
          67.708% {
            transform:translate(61.4px,96px);
            opacity:1;
          }
          68.229% {
            transform:translate(59.26px,96px);
            opacity:1;
          }
          68.75% {
            transform:translate(57.14px,96px);
            opacity:1;
          }
          69.271% {
            transform:translate(55.045px,96px);
            opacity:1;
          }
          69.792% {
            transform:translate(52.978px,96px);
            opacity:1;
          }
          70.313% {
            transform:translate(50.944px,96px);
            opacity:1;
          }
          70.833% {
            transform:translate(48.949px,96px);
            opacity:1;
          }
          71.354% {
            transform:translate(46.997px,96px);
            opacity:1;
          }
          71.875% {
            transform:translate(45.092px,96px);
            opacity:1;
          }
          72.396% {
            transform:translate(43.239px,96px);
            opacity:1;
          }
          72.917% {
            transform:translate(41.442px,96px);
            opacity:1;
          }
          73.438% {
            transform:translate(39.707px,96px);
            opacity:1;
          }
          73.958% {
            transform:translate(38.037px,96px);
            opacity:1;
          }
          74.479% {
            transform:translate(36.438px,96px);
            opacity:1;
          }
          75% {
            transform:translate(34.913px,96px);
            opacity:1;
          }
          75.521% {
            transform:translate(33.468px,96px);
            opacity:1;
          }
          76.042% {
            transform:translate(32.108px,96px);
            opacity:1;
          }
          76.563% {
            transform:translate(30.836px,96px);
            opacity:1;
          }
          77.083% {
            transform:translate(29.657px,96px);
            opacity:1;
          }
          77.604% {
            transform:translate(28.577px,96px);
            opacity:1;
          }
          78.125% {
            transform:translate(28px,96.71px);
            opacity:1;
          }
          78.646% {
            transform:translate(28px,98.388px);
            opacity:1;
          }
          79.167% {
            transform:translate(28px,100.066px);
            opacity:1;
          }
          79.688% {
            transform:translate(28px,101.745px);
            opacity:1;
          }
          80.208% {
            transform:translate(28px,103.423px);
            opacity:1;
          }
          80.729% {
            transform:translate(28px,105.101px);
            opacity:1;
          }
          81.25% {
            transform:translate(28px,106.779px);
            opacity:1;
          }
          81.771% {
            transform:translate(28px,108.458px);
            opacity:1;
          }
          82.292% {
            transform:translate(28px,110.136px);
            opacity:1;
          }
          82.813% {
            transform:translate(28px,111.814px);
            opacity:1;
          }
          83.333% {
            transform:translate(28px,113.492px);
            opacity:1;
          }
          83.854% {
            transform:translate(28px,115.171px);
            opacity:1;
          }
          84.375% {
            transform:translate(28px,116.849px);
            opacity:1;
          }
          84.896% {
            transform:translate(28px,118.527px);
            opacity:1;
          }
          85.417% {
            transform:translate(28px,120.205px);
            opacity:1;
          }
          85.938% {
            transform:translate(28px,121.884px);
            opacity:0.999;
          }
          86.458% {
            transform:translate(28px,123.562px);
            opacity:0.692;
          }
          86.979% {
            transform:translate(28px,125.24px);
            opacity:0.196;
          }
          87.5% {
            transform:translate(28px,126.918px);
            opacity:0;
          }
          88.021% {
            transform:translate(28px,128.597px);
            opacity:0;
          }
          88.542% {
            transform:translate(28px,130.275px);
            opacity:0;
          }
          89.063% {
            transform:translate(28px,131.953px);
            opacity:0;
          }
          89.583% {
            transform:translate(28px,133.631px);
            opacity:0;
          }
          90.104% {
            transform:translate(28px,135.31px);
            opacity:0;
          }
          90.625% {
            transform:translate(28px,136.988px);
            opacity:0;
          }
          91.146% {
            transform:translate(28px,138.666px);
            opacity:0;
          }
          91.667% {
            transform:translate(28px,140.344px);
            opacity:0;
          }
          92.188% {
            transform:translate(28px,142.022px);
            opacity:0;
          }
          92.708% {
            transform:translate(28px,143.701px);
            opacity:0;
          }
          93.229% {
            transform:translate(28px,145.379px);
            opacity:0;
          }
          93.75% {
            transform:translate(28px,147.057px);
            opacity:0;
          }
          94.271% {
            transform:translate(28px,148.735px);
            opacity:0;
          }
          94.792% {
            transform:translate(28px,150.414px);
            opacity:0;
          }
          95.313% {
            transform:translate(28px,152.092px);
            opacity:0;
          }
          95.833% {
            transform:translate(28px,153.77px);
            opacity:0;
          }
          96.354% {
            transform:translate(28px,155.448px);
            opacity:0;
          }
          96.875% {
            transform:translate(28px,157.127px);
            opacity:0;
          }
          97.396% {
            transform:translate(28px,158.805px);
            opacity:0;
          }
          97.917% {
            transform:translate(28px,160.483px);
            opacity:0;
          }
          98.438% {
            transform:translate(28px,162.161px);
            opacity:0;
          }
          98.958% {
            transform:translate(28px,163.84px);
            opacity:0;
          }
          99.479% {
            transform:translate(28px,165.518px);
            opacity:0;
          }
          100% {
            transform:translate(28px,167.196px);
            opacity:0;
          }
        }
        @keyframes sediment3 {
          0% {
            transform:translate(42px,59px);
            opacity:1;
          }
          0.521% {
            transform:translate(42.773px,58.957px);
            opacity:1;
          }
          1.042% {
            transform:translate(43.545px,58.913px);
            opacity:1;
          }
          1.563% {
            transform:translate(44.318px,58.87px);
            opacity:1;
          }
          2.083% {
            transform:translate(45.09px,58.826px);
            opacity:1;
          }
          2.604% {
            transform:translate(45.863px,58.783px);
            opacity:1;
          }
          3.125% {
            transform:translate(46.635px,58.74px);
            opacity:1;
          }
          3.646% {
            transform:translate(47.408px,58.696px);
            opacity:1;
          }
          4.167% {
            transform:translate(48.181px,58.653px);
            opacity:1;
          }
          4.688% {
            transform:translate(48.953px,58.609px);
            opacity:1;
          }
          5.208% {
            transform:translate(49.726px,58.566px);
            opacity:1;
          }
          5.729% {
            transform:translate(50.498px,58.523px);
            opacity:1;
          }
          6.25% {
            transform:translate(51.271px,58.479px);
            opacity:1;
          }
          6.771% {
            transform:translate(52.043px,58.436px);
            opacity:1;
          }
          7.292% {
            transform:translate(52.816px,58.392px);
            opacity:1;
          }
          7.813% {
            transform:translate(53.589px,58.349px);
            opacity:1;
          }
          8.333% {
            transform:translate(54.361px,58.306px);
            opacity:1;
          }
          8.854% {
            transform:translate(55.134px,58.262px);
            opacity:1;
          }
          9.375% {
            transform:translate(55.906px,58.219px);
            opacity:1;
          }
          9.896% {
            transform:translate(56.679px,58.175px);
            opacity:1;
          }
          10.417% {
            transform:translate(57.451px,58.132px);
            opacity:1;
          }
          10.938% {
            transform:translate(58.224px,58.089px);
            opacity:1;
          }
          11.458% {
            transform:translate(58.997px,58.045px);
            opacity:1;
          }
          11.979% {
            transform:translate(59.769px,58.002px);
            opacity:1;
          }
          12.5% {
            transform:translate(60.542px,57.958px);
            opacity:1;
          }
          13.021% {
            transform:translate(61.314px,57.915px);
            opacity:1;
          }
          13.542% {
            transform:translate(62.087px,57.872px);
            opacity:1;
          }
          14.063% {
            transform:translate(62.859px,57.828px);
            opacity:1;
          }
          14.583% {
            transform:translate(63.632px,57.785px);
            opacity:1;
          }
          15.104% {
            transform:translate(64.405px,57.741px);
            opacity:1;
          }
          15.625% {
            transform:translate(65.177px,57.698px);
            opacity:1;
          }
          16.146% {
            transform:translate(65.95px,57.655px);
            opacity:1;
          }
          16.667% {
            transform:translate(66.722px,57.611px);
            opacity:1;
          }
          17.188% {
            transform:translate(67.495px,57.568px);
            opacity:1;
          }
          17.708% {
            transform:translate(68.267px,57.524px);
            opacity:1;
          }
          18.229% {
            transform:translate(69.04px,57.481px);
            opacity:1;
          }
          18.75% {
            transform:translate(69.813px,57.438px);
            opacity:1;
          }
          19.271% {
            transform:translate(70.585px,57.394px);
            opacity:1;
          }
          19.792% {
            transform:translate(71.358px,57.351px);
            opacity:1;
          }
          20.313% {
            transform:translate(72.13px,57.307px);
            opacity:1;
          }
          20.833% {
            transform:translate(72.903px,57.264px);
            opacity:1;
          }
          21.354% {
            transform:translate(73.675px,57.22px);
            opacity:1;
          }
          21.875% {
            transform:translate(74.448px,57.177px);
            opacity:1;
          }
          22.396% {
            transform:translate(75.22px,57.134px);
            opacity:1;
          }
          22.917% {
            transform:translate(75.993px,57.09px);
            opacity:1;
          }
          23.438% {
            transform:translate(76.766px,57.047px);
            opacity:1;
          }
          23.958% {
            transform:translate(77.538px,57.003px);
            opacity:1;
          }
          24.479% {
            transform:translate(78.311px,56.96px);
            opacity:1;
          }
          25% {
            transform:translate(79.083px,56.917px);
            opacity:1;
          }
          25.521% {
            transform:translate(79.856px,56.873px);
            opacity:1;
          }
          26.042% {
            transform:translate(80.628px,56.83px);
            opacity:1;
          }
          26.563% {
            transform:translate(81.401px,56.786px);
            opacity:1;
          }
          27.083% {
            transform:translate(82.174px,56.743px);
            opacity:1;
          }
          27.604% {
            transform:translate(82.946px,56.7px);
            opacity:1;
          }
          28.125% {
            transform:translate(83.719px,56.656px);
            opacity:1;
          }
          28.646% {
            transform:translate(84.491px,56.613px);
            opacity:1;
          }
          29.167% {
            transform:translate(85.264px,56.569px);
            opacity:1;
          }
          29.688% {
            transform:translate(86.036px,56.526px);
            opacity:1;
          }
          30.208% {
            transform:translate(86.809px,56.483px);
            opacity:1;
          }
          30.729% {
            transform:translate(87.582px,56.439px);
            opacity:1;
          }
          31.25% {
            transform:translate(88.354px,56.396px);
            opacity:1;
          }
          31.771% {
            transform:translate(89.127px,56.352px);
            opacity:1;
          }
          32.292% {
            transform:translate(89.899px,56.309px);
            opacity:1;
          }
          32.813% {
            transform:translate(90.672px,56.266px);
            opacity:1;
          }
          33.333% {
            transform:translate(91.444px,56.222px);
            opacity:1;
          }
          33.854% {
            transform:translate(92.217px,56.179px);
            opacity:1;
          }
          34.375% {
            transform:translate(92.99px,56.135px);
            opacity:1;
          }
          34.896% {
            transform:translate(93.762px,56.092px);
            opacity:1;
          }
          35.417% {
            transform:translate(94.535px,56.049px);
            opacity:1;
          }
          35.938% {
            transform:translate(95.307px,56.005px);
            opacity:1;
          }
          36.458% {
            transform:translate(96.08px,55.962px);
            opacity:1;
          }
          36.979% {
            transform:translate(96.852px,55.918px);
            opacity:1;
          }
          37.5% {
            transform:translate(97.625px,55.875px);
            opacity:1;
          }
          38.021% {
            transform:translate(98.398px,55.832px);
            opacity:1;
          }
          38.542% {
            transform:translate(99.17px,55.788px);
            opacity:1;
          }
          39.063% {
            transform:translate(99.943px,55.745px);
            opacity:1;
          }
          39.583% {
            transform:translate(100.715px,55.701px);
            opacity:1;
          }
          40.104% {
            transform:translate(101.488px,55.658px);
            opacity:1;
          }
          40.625% {
            transform:translate(102.26px,55.615px);
            opacity:1;
          }
          41.146% {
            transform:translate(103.033px,55.571px);
            opacity:1;
          }
          41.667% {
            transform:translate(103.806px,55.528px);
            opacity:1;
          }
          42.188% {
            transform:translate(104.578px,55.484px);
            opacity:1;
          }
          42.708% {
            transform:translate(105.351px,55.441px);
            opacity:1;
          }
          43.229% {
            transform:translate(106.123px,55.398px);
            opacity:1;
          }
          43.75% {
            transform:translate(106.896px,55.354px);
            opacity:1;
          }
          44.271% {
            transform:translate(107.668px,55.311px);
            opacity:1;
          }
          44.792% {
            transform:translate(108.441px,55.267px);
            opacity:1;
          }
          45.313% {
            transform:translate(109.214px,55.224px);
            opacity:1;
          }
          45.833% {
            transform:translate(109.986px,55.181px);
            opacity:1;
          }
          46.354% {
            transform:translate(110.759px,55.137px);
            opacity:1;
          }
          46.875% {
            transform:translate(111.531px,55.094px);
            opacity:1;
          }
          47.396% {
            transform:translate(112.304px,55.05px);
            opacity:1;
          }
          47.917% {
            transform:translate(113.076px,55.007px);
            opacity:1;
          }
          48.438% {
            transform:translate(113.849px,54.964px);
            opacity:1;
          }
          48.958% {
            transform:translate(114.622px,54.92px);
            opacity:1;
          }
          49.479% {
            transform:translate(115.394px,54.877px);
            opacity:1;
          }
          50% {
            transform:translate(116.167px,54.833px);
            opacity:1;
          }
          50.521% {
            transform:translate(116.939px,54.79px);
            opacity:1;
          }
          51.042% {
            transform:translate(117.712px,54.747px);
            opacity:1;
          }
          51.563% {
            transform:translate(118.484px,54.703px);
            opacity:1;
          }
          52.083% {
            transform:translate(119.257px,54.66px);
            opacity:1;
          }
          52.604% {
            transform:translate(120.03px,54.616px);
            opacity:1;
          }
          53.125% {
            transform:translate(120.802px,54.573px);
            opacity:1;
          }
          53.646% {
            transform:translate(121.575px,54.53px);
            opacity:1;
          }
          54.167% {
            transform:translate(122.347px,54.486px);
            opacity:1;
          }
          54.688% {
            transform:translate(123.12px,54.443px);
            opacity:1;
          }
          55.208% {
            transform:translate(123.892px,54.399px);
            opacity:0.998;
          }
          55.729% {
            transform:translate(124.665px,54.356px);
            opacity:0.977;
          }
          56.25% {
            transform:translate(125.438px,54.313px);
            opacity:0.934;
          }
          56.771% {
            transform:translate(126.21px,54.269px);
            opacity:0.875;
          }
          57.292% {
            transform:translate(126.983px,54.226px);
            opacity:0.801;
          }
          57.813% {
            transform:translate(127.755px,54.182px);
            opacity:0.716;
          }
          58.333% {
            transform:translate(128.528px,54.139px);
            opacity:0.624;
          }
          58.854% {
            transform:translate(129.3px,54.095px);
            opacity:0.527;
          }
          59.375% {
            transform:translate(130.073px,54.052px);
            opacity:0.43;
          }
          59.896% {
            transform:translate(130.845px,54.009px);
            opacity:0.335;
          }
          60.417% {
            transform:translate(131px,54px);
            opacity:0.245;
          }
          60.938% {
            transform:translate(131px,54px);
            opacity:0.165;
          }
          61.458% {
            transform:translate(131px,54px);
            opacity:0.097;
          }
          61.979% {
            transform:translate(131px,54px);
            opacity:0.045;
          }
          62.5% {
            transform:translate(131px,54px);
            opacity:0.011;
          }
          63.021% {
            transform:translate(131px,54px);
            opacity:0;
          }
          63.542% {
            transform:translate(131px,54px);
            opacity:0;
          }
          64.063% {
            transform:translate(131px,54px);
            opacity:0;
          }
          64.583% {
            transform:translate(131px,54px);
            opacity:0;
          }
          65.104% {
            transform:translate(131px,54px);
            opacity:0;
          }
          65.625% {
            transform:translate(131px,54px);
            opacity:0;
          }
          66.146% {
            transform:translate(131px,54px);
            opacity:0;
          }
          66.667% {
            transform:translate(131px,54px);
            opacity:0;
          }
          67.188% {
            transform:translate(131px,54px);
            opacity:0;
          }
          67.708% {
            transform:translate(131px,54px);
            opacity:0;
          }
          68.229% {
            transform:translate(131px,54px);
            opacity:0;
          }
          68.75% {
            transform:translate(131px,54px);
            opacity:0;
          }
          69.271% {
            transform:translate(131px,54px);
            opacity:0;
          }
          69.792% {
            transform:translate(131px,54px);
            opacity:0;
          }
          70.313% {
            transform:translate(131px,54px);
            opacity:0;
          }
          70.833% {
            transform:translate(131px,54px);
            opacity:0;
          }
          71.354% {
            transform:translate(131px,54px);
            opacity:0;
          }
          71.875% {
            transform:translate(131px,54px);
            opacity:0;
          }
          72.396% {
            transform:translate(131px,54px);
            opacity:0;
          }
          72.917% {
            transform:translate(131px,54px);
            opacity:0;
          }
          73.438% {
            transform:translate(131px,54px);
            opacity:0;
          }
          73.958% {
            transform:translate(131px,54px);
            opacity:0;
          }
          74.479% {
            transform:translate(131px,54px);
            opacity:0;
          }
          75% {
            transform:translate(131px,54px);
            opacity:0;
          }
          75.521% {
            transform:translate(131px,54px);
            opacity:0;
          }
          76.042% {
            transform:translate(131px,54px);
            opacity:0;
          }
          76.563% {
            transform:translate(131px,54px);
            opacity:0;
          }
          77.083% {
            transform:translate(131px,54px);
            opacity:0;
          }
          77.604% {
            transform:translate(131px,54px);
            opacity:0;
          }
          78.125% {
            transform:translate(131px,54px);
            opacity:0;
          }
          78.646% {
            transform:translate(131px,54px);
            opacity:0;
          }
          79.167% {
            transform:translate(131px,54px);
            opacity:0;
          }
          79.688% {
            transform:translate(131px,54px);
            opacity:0;
          }
          80.208% {
            transform:translate(131px,54px);
            opacity:0;
          }
          80.729% {
            transform:translate(131px,54px);
            opacity:0;
          }
          81.25% {
            transform:translate(131px,54px);
            opacity:0;
          }
          81.771% {
            transform:translate(131px,54px);
            opacity:0;
          }
          82.292% {
            transform:translate(131px,54px);
            opacity:0;
          }
          82.813% {
            transform:translate(131px,54px);
            opacity:0;
          }
          83.333% {
            transform:translate(131px,54px);
            opacity:0;
          }
          83.854% {
            transform:translate(131px,54px);
            opacity:0;
          }
          84.375% {
            transform:translate(131px,54px);
            opacity:0;
          }
          84.896% {
            transform:translate(131px,54px);
            opacity:0;
          }
          85.417% {
            transform:translate(131px,54px);
            opacity:0;
          }
          85.938% {
            transform:translate(131px,54px);
            opacity:0;
          }
          86.458% {
            transform:translate(131px,54px);
            opacity:0;
          }
          86.979% {
            transform:translate(131px,54px);
            opacity:0;
          }
          87.5% {
            transform:translate(131px,54px);
            opacity:0;
          }
          88.021% {
            transform:translate(131px,54px);
            opacity:0;
          }
          88.542% {
            transform:translate(131px,54px);
            opacity:0;
          }
          89.063% {
            transform:translate(131px,54px);
            opacity:0;
          }
          89.583% {
            transform:translate(131px,54px);
            opacity:0;
          }
          90.104% {
            transform:translate(131px,54px);
            opacity:0;
          }
          90.625% {
            transform:translate(131px,54px);
            opacity:0;
          }
          91.146% {
            transform:translate(131px,54px);
            opacity:0;
          }
          91.667% {
            transform:translate(131px,54px);
            opacity:0;
          }
          92.188% {
            transform:translate(131px,54px);
            opacity:0;
          }
          92.708% {
            transform:translate(131px,54px);
            opacity:0;
          }
          93.229% {
            transform:translate(131px,54px);
            opacity:0;
          }
          93.75% {
            transform:translate(131px,54px);
            opacity:0;
          }
          94.271% {
            transform:translate(131px,54px);
            opacity:0;
          }
          94.792% {
            transform:translate(131px,54px);
            opacity:0;
          }
          95.313% {
            transform:translate(131px,54px);
            opacity:0;
          }
          95.833% {
            transform:translate(131px,54px);
            opacity:0;
          }
          96.354% {
            transform:translate(131px,54px);
            opacity:0;
          }
          96.875% {
            transform:translate(131px,54px);
            opacity:0;
          }
          97.396% {
            transform:translate(131px,54px);
            opacity:0;
          }
          97.917% {
            transform:translate(131px,54px);
            opacity:0;
          }
          98.438% {
            transform:translate(131px,54px);
            opacity:0;
          }
          98.958% {
            transform:translate(131px,54px);
            opacity:0;
          }
          99.479% {
            transform:translate(131px,54px);
            opacity:0;
          }
          100% {
            transform:translate(131px,54px);
            opacity:0;
          }
        }
        @keyframes settleEpisode {
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
          .scraper {
            d:path('M38.913 89V99');
          }
          .sediment0 {
            transform:translate(28px,103.24px);
            opacity:1;
          }
          .sediment1 {
            transform:translate(28px,96.098px);
            opacity:1;
          }
          .sediment2 {
            transform:translate(34.913px,96px);
            opacity:1;
          }
          .sediment3 {
            transform:translate(131px,54px);
            opacity:0;
          }
          .settleEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Clarifier Sedimentation">
        <g class="settleEpisode">
          <path d="M15 46V101H20L28 114 36 101H125V48" fill="#184450" stroke="#a5b5a6" stroke-width="2"/>
          <path d="M15 51L124 51" stroke="#8cc7d2"/>
          <path d="M8 60H28V78M30 46V74M120 47V55H133" fill="none" stroke="#93bcb9" stroke-width="2"/>
          <path d="M28 114V125" stroke="#acba9f" stroke-width="5"/>
          <path d="M29 95H117V33H29Z" fill="none" stroke="#466b64" stroke-width="1" stroke-dasharray="2 3"/>
          <path d="M115 89V99" class="scraper" stroke="#d2ba7f" stroke-width="3"/>
          <circle cx="0" cy="0" r="2.1" class="sediment0" fill="#d3b57c"/>
          <circle cx="0" cy="0" r="2.1" class="sediment1" fill="#d3b57c"/>
          <circle cx="0" cy="0" r="2.1" class="sediment2" fill="#d3b57c"/>
          <circle cx="0" cy="0" r="1" class="sediment3" fill="#9cced5"/>
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

if (!customElements.get("concept-clarifier-sedimentation")) {
  customElements.define("concept-clarifier-sedimentation", ConceptClarifierSedimentation);
}
