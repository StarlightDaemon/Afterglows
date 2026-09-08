// Pumped Hydroelectric Storage. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPumpedHydroelectricStorage extends HTMLElement {
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
        .terrain {
          fill:none;
          stroke:#284537;
          stroke-width:1
        }
        .upper-water,.lower-water {
          fill:#24545b;
          stroke:none
        }
        .upper-water {
          animation:hydro-upper 12s linear infinite
        }
        .lower-water {
          animation:hydro-lower 12s linear infinite
        }
        .reservoir {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.4
        }
        .pipe-border {
          fill:none;
          stroke:#375b51;
          stroke-width:6;
          stroke-linejoin:round
        }
        .pipe-bore {
          fill:none;
          stroke:#091a16;
          stroke-width:3.5;
          stroke-linejoin:round
        }
        .water-flow {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.8;
          stroke-dasharray:.035 .14;
          stroke-dashoffset:.6;
          animation:hydro-flow 12s linear infinite
        }
        .flow-direction {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.4;
          transform-origin:72.31px 74px;
          animation:hydro-direction 12s steps(1,end) infinite
        }
        .bus {
          fill:#102c20;
          stroke:#70edb1;
          stroke-width:1
        }
        .machine {
          fill:#0a1c15;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .hydro-rotor {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.3;
          transform:rotate(540deg);
          animation:hydro-rotor 12s linear infinite
        }
        .power {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.6;
          animation:hydro-power 12s linear infinite
        }
        @keyframes hydro-upper {
          0% {
            y:47px;
            height:10px
          }
          0.417% {
            y:47px;
            height:10px
          }
          0.833% {
            y:47px;
            height:10px
          }
          1.25% {
            y:47px;
            height:10px
          }
          1.667% {
            y:47px;
            height:10px
          }
          2.083% {
            y:47px;
            height:10px
          }
          2.5% {
            y:47px;
            height:10px
          }
          2.917% {
            y:47px;
            height:10px
          }
          3.333% {
            y:47px;
            height:10px
          }
          3.75% {
            y:47px;
            height:10px
          }
          4.167% {
            y:47px;
            height:10px
          }
          4.583% {
            y:47px;
            height:10px
          }
          5% {
            y:47px;
            height:10px
          }
          5.417% {
            y:47px;
            height:10px
          }
          5.833% {
            y:47px;
            height:10px
          }
          6.25% {
            y:47px;
            height:10px
          }
          6.667% {
            y:47px;
            height:10px
          }
          7.083% {
            y:47px;
            height:10px
          }
          7.5% {
            y:47px;
            height:10px
          }
          7.917% {
            y:47px;
            height:10px
          }
          8.333% {
            y:47px;
            height:10px
          }
          8.75% {
            y:46.991px;
            height:10.009px
          }
          9.167% {
            y:46.963px;
            height:10.037px
          }
          9.583% {
            y:46.918px;
            height:10.082px
          }
          10% {
            y:46.855px;
            height:10.145px
          }
          10.417% {
            y:46.775px;
            height:10.225px
          }
          10.833% {
            y:46.679px;
            height:10.321px
          }
          11.25% {
            y:46.567px;
            height:10.433px
          }
          11.667% {
            y:46.44px;
            height:10.56px
          }
          12.083% {
            y:46.298px;
            height:10.702px
          }
          12.5% {
            y:46.141px;
            height:10.859px
          }
          12.917% {
            y:45.97px;
            height:11.03px
          }
          13.333% {
            y:45.785px;
            height:11.215px
          }
          13.75% {
            y:45.587px;
            height:11.413px
          }
          14.167% {
            y:45.377px;
            height:11.623px
          }
          14.583% {
            y:45.154px;
            height:11.846px
          }
          15% {
            y:44.92px;
            height:12.08px
          }
          15.417% {
            y:44.674px;
            height:12.326px
          }
          15.833% {
            y:44.418px;
            height:12.582px
          }
          16.25% {
            y:44.151px;
            height:12.849px
          }
          16.667% {
            y:43.875px;
            height:13.125px
          }
          17.083% {
            y:43.589px;
            height:13.411px
          }
          17.5% {
            y:43.294px;
            height:13.706px
          }
          17.917% {
            y:42.991px;
            height:14.009px
          }
          18.333% {
            y:42.68px;
            height:14.32px
          }
          18.75% {
            y:42.361px;
            height:14.639px
          }
          19.167% {
            y:42.036px;
            height:14.964px
          }
          19.583% {
            y:41.703px;
            height:15.297px
          }
          20% {
            y:41.365px;
            height:15.635px
          }
          20.417% {
            y:41.021px;
            height:15.979px
          }
          20.833% {
            y:40.672px;
            height:16.328px
          }
          21.25% {
            y:40.318px;
            height:16.682px
          }
          21.667% {
            y:39.96px;
            height:17.04px
          }
          22.083% {
            y:39.598px;
            height:17.402px
          }
          22.5% {
            y:39.233px;
            height:17.767px
          }
          22.917% {
            y:38.865px;
            height:18.135px
          }
          23.333% {
            y:38.495px;
            height:18.505px
          }
          23.75% {
            y:38.123px;
            height:18.877px
          }
          24.167% {
            y:37.749px;
            height:19.251px
          }
          24.583% {
            y:37.375px;
            height:19.625px
          }
          25% {
            y:37px;
            height:20px
          }
          25.417% {
            y:36.625px;
            height:20.375px
          }
          25.833% {
            y:36.251px;
            height:20.749px
          }
          26.25% {
            y:35.877px;
            height:21.123px
          }
          26.667% {
            y:35.505px;
            height:21.495px
          }
          27.083% {
            y:35.135px;
            height:21.865px
          }
          27.5% {
            y:34.767px;
            height:22.233px
          }
          27.917% {
            y:34.402px;
            height:22.598px
          }
          28.333% {
            y:34.04px;
            height:22.96px
          }
          28.75% {
            y:33.682px;
            height:23.318px
          }
          29.167% {
            y:33.328px;
            height:23.672px
          }
          29.583% {
            y:32.979px;
            height:24.021px
          }
          30% {
            y:32.635px;
            height:24.365px
          }
          30.417% {
            y:32.297px;
            height:24.703px
          }
          30.833% {
            y:31.964px;
            height:25.036px
          }
          31.25% {
            y:31.639px;
            height:25.361px
          }
          31.667% {
            y:31.32px;
            height:25.68px
          }
          32.083% {
            y:31.009px;
            height:25.991px
          }
          32.5% {
            y:30.706px;
            height:26.294px
          }
          32.917% {
            y:30.411px;
            height:26.589px
          }
          33.333% {
            y:30.125px;
            height:26.875px
          }
          33.75% {
            y:29.849px;
            height:27.151px
          }
          34.167% {
            y:29.582px;
            height:27.418px
          }
          34.583% {
            y:29.326px;
            height:27.674px
          }
          35% {
            y:29.08px;
            height:27.92px
          }
          35.417% {
            y:28.846px;
            height:28.154px
          }
          35.833% {
            y:28.623px;
            height:28.377px
          }
          36.25% {
            y:28.413px;
            height:28.587px
          }
          36.667% {
            y:28.215px;
            height:28.785px
          }
          37.083% {
            y:28.03px;
            height:28.97px
          }
          37.5% {
            y:27.859px;
            height:29.141px
          }
          37.917% {
            y:27.702px;
            height:29.298px
          }
          38.333% {
            y:27.56px;
            height:29.44px
          }
          38.75% {
            y:27.433px;
            height:29.567px
          }
          39.167% {
            y:27.321px;
            height:29.679px
          }
          39.583% {
            y:27.225px;
            height:29.775px
          }
          40% {
            y:27.145px;
            height:29.855px
          }
          40.417% {
            y:27.082px;
            height:29.918px
          }
          40.833% {
            y:27.037px;
            height:29.963px
          }
          41.25% {
            y:27.009px;
            height:29.991px
          }
          41.667% {
            y:27px;
            height:30px
          }
          42.083% {
            y:27px;
            height:30px
          }
          42.5% {
            y:27px;
            height:30px
          }
          42.917% {
            y:27px;
            height:30px
          }
          43.333% {
            y:27px;
            height:30px
          }
          43.75% {
            y:27px;
            height:30px
          }
          44.167% {
            y:27px;
            height:30px
          }
          44.583% {
            y:27px;
            height:30px
          }
          45% {
            y:27px;
            height:30px
          }
          45.417% {
            y:27px;
            height:30px
          }
          45.833% {
            y:27px;
            height:30px
          }
          46.25% {
            y:27px;
            height:30px
          }
          46.667% {
            y:27px;
            height:30px
          }
          47.083% {
            y:27px;
            height:30px
          }
          47.5% {
            y:27px;
            height:30px
          }
          47.917% {
            y:27px;
            height:30px
          }
          48.333% {
            y:27px;
            height:30px
          }
          48.75% {
            y:27px;
            height:30px
          }
          49.167% {
            y:27px;
            height:30px
          }
          49.583% {
            y:27px;
            height:30px
          }
          50% {
            y:27px;
            height:30px
          }
          50.417% {
            y:27.009px;
            height:29.991px
          }
          50.833% {
            y:27.037px;
            height:29.963px
          }
          51.25% {
            y:27.082px;
            height:29.918px
          }
          51.667% {
            y:27.145px;
            height:29.855px
          }
          52.083% {
            y:27.225px;
            height:29.775px
          }
          52.5% {
            y:27.321px;
            height:29.679px
          }
          52.917% {
            y:27.433px;
            height:29.567px
          }
          53.333% {
            y:27.56px;
            height:29.44px
          }
          53.75% {
            y:27.702px;
            height:29.298px
          }
          54.167% {
            y:27.859px;
            height:29.141px
          }
          54.583% {
            y:28.03px;
            height:28.97px
          }
          55.0% {
            y:28.215px;
            height:28.785px
          }
          55.417% {
            y:28.413px;
            height:28.587px
          }
          55.833% {
            y:28.623px;
            height:28.377px
          }
          56.25% {
            y:28.846px;
            height:28.154px
          }
          56.667% {
            y:29.08px;
            height:27.92px
          }
          57.083% {
            y:29.326px;
            height:27.674px
          }
          57.5% {
            y:29.582px;
            height:27.418px
          }
          57.917% {
            y:29.849px;
            height:27.151px
          }
          58.333% {
            y:30.125px;
            height:26.875px
          }
          58.75% {
            y:30.411px;
            height:26.589px
          }
          59.167% {
            y:30.706px;
            height:26.294px
          }
          59.583% {
            y:31.009px;
            height:25.991px
          }
          60% {
            y:31.32px;
            height:25.68px
          }
          60.417% {
            y:31.639px;
            height:25.361px
          }
          60.833% {
            y:31.964px;
            height:25.036px
          }
          61.25% {
            y:32.297px;
            height:24.703px
          }
          61.667% {
            y:32.635px;
            height:24.365px
          }
          62.083% {
            y:32.979px;
            height:24.021px
          }
          62.5% {
            y:33.328px;
            height:23.672px
          }
          62.917% {
            y:33.682px;
            height:23.318px
          }
          63.333% {
            y:34.04px;
            height:22.96px
          }
          63.75% {
            y:34.402px;
            height:22.598px
          }
          64.167% {
            y:34.767px;
            height:22.233px
          }
          64.583% {
            y:35.135px;
            height:21.865px
          }
          65% {
            y:35.505px;
            height:21.495px
          }
          65.417% {
            y:35.877px;
            height:21.123px
          }
          65.833% {
            y:36.251px;
            height:20.749px
          }
          66.25% {
            y:36.625px;
            height:20.375px
          }
          66.667% {
            y:37px;
            height:20px
          }
          67.083% {
            y:37.375px;
            height:19.625px
          }
          67.5% {
            y:37.749px;
            height:19.251px
          }
          67.917% {
            y:38.123px;
            height:18.877px
          }
          68.333% {
            y:38.495px;
            height:18.505px
          }
          68.75% {
            y:38.865px;
            height:18.135px
          }
          69.167% {
            y:39.233px;
            height:17.767px
          }
          69.583% {
            y:39.598px;
            height:17.402px
          }
          70% {
            y:39.96px;
            height:17.04px
          }
          70.417% {
            y:40.318px;
            height:16.682px
          }
          70.833% {
            y:40.672px;
            height:16.328px
          }
          71.25% {
            y:41.021px;
            height:15.979px
          }
          71.667% {
            y:41.365px;
            height:15.635px
          }
          72.083% {
            y:41.703px;
            height:15.297px
          }
          72.5% {
            y:42.036px;
            height:14.964px
          }
          72.917% {
            y:42.361px;
            height:14.639px
          }
          73.333% {
            y:42.68px;
            height:14.32px
          }
          73.75% {
            y:42.991px;
            height:14.009px
          }
          74.167% {
            y:43.294px;
            height:13.706px
          }
          74.583% {
            y:43.589px;
            height:13.411px
          }
          75% {
            y:43.875px;
            height:13.125px
          }
          75.417% {
            y:44.151px;
            height:12.849px
          }
          75.833% {
            y:44.418px;
            height:12.582px
          }
          76.25% {
            y:44.674px;
            height:12.326px
          }
          76.667% {
            y:44.92px;
            height:12.08px
          }
          77.083% {
            y:45.154px;
            height:11.846px
          }
          77.5% {
            y:45.377px;
            height:11.623px
          }
          77.917% {
            y:45.587px;
            height:11.413px
          }
          78.333% {
            y:45.785px;
            height:11.215px
          }
          78.75% {
            y:45.97px;
            height:11.03px
          }
          79.167% {
            y:46.141px;
            height:10.859px
          }
          79.583% {
            y:46.298px;
            height:10.702px
          }
          80% {
            y:46.44px;
            height:10.56px
          }
          80.417% {
            y:46.567px;
            height:10.433px
          }
          80.833% {
            y:46.679px;
            height:10.321px
          }
          81.25% {
            y:46.775px;
            height:10.225px
          }
          81.667% {
            y:46.855px;
            height:10.145px
          }
          82.083% {
            y:46.918px;
            height:10.082px
          }
          82.5% {
            y:46.963px;
            height:10.037px
          }
          82.917% {
            y:46.991px;
            height:10.009px
          }
          83.333% {
            y:47px;
            height:10px
          }
          83.75% {
            y:47px;
            height:10px
          }
          84.167% {
            y:47px;
            height:10px
          }
          84.583% {
            y:47px;
            height:10px
          }
          85% {
            y:47px;
            height:10px
          }
          85.417% {
            y:47px;
            height:10px
          }
          85.833% {
            y:47px;
            height:10px
          }
          86.25% {
            y:47px;
            height:10px
          }
          86.667% {
            y:47px;
            height:10px
          }
          87.083% {
            y:47px;
            height:10px
          }
          87.5% {
            y:47px;
            height:10px
          }
          87.917% {
            y:47px;
            height:10px
          }
          88.333% {
            y:47px;
            height:10px
          }
          88.75% {
            y:47px;
            height:10px
          }
          89.167% {
            y:47px;
            height:10px
          }
          89.583% {
            y:47px;
            height:10px
          }
          90% {
            y:47px;
            height:10px
          }
          90.417% {
            y:47px;
            height:10px
          }
          90.833% {
            y:47px;
            height:10px
          }
          91.25% {
            y:47px;
            height:10px
          }
          91.667% {
            y:47px;
            height:10px
          }
          92.083% {
            y:47px;
            height:10px
          }
          92.5% {
            y:47px;
            height:10px
          }
          92.917% {
            y:47px;
            height:10px
          }
          93.333% {
            y:47px;
            height:10px
          }
          93.75% {
            y:47px;
            height:10px
          }
          94.167% {
            y:47px;
            height:10px
          }
          94.583% {
            y:47px;
            height:10px
          }
          95% {
            y:47px;
            height:10px
          }
          95.417% {
            y:47px;
            height:10px
          }
          95.833% {
            y:47px;
            height:10px
          }
          96.25% {
            y:47px;
            height:10px
          }
          96.667% {
            y:47px;
            height:10px
          }
          97.083% {
            y:47px;
            height:10px
          }
          97.5% {
            y:47px;
            height:10px
          }
          97.917% {
            y:47px;
            height:10px
          }
          98.333% {
            y:47px;
            height:10px
          }
          98.75% {
            y:47px;
            height:10px
          }
          99.167% {
            y:47px;
            height:10px
          }
          99.583% {
            y:47px;
            height:10px
          }
          100% {
            y:47px;
            height:10px
          }
        }
        @keyframes hydro-lower {
          0% {
            y:91px;
            height:30px
          }
          0.417% {
            y:91px;
            height:30px
          }
          0.833% {
            y:91px;
            height:30px
          }
          1.25% {
            y:91px;
            height:30px
          }
          1.667% {
            y:91px;
            height:30px
          }
          2.083% {
            y:91px;
            height:30px
          }
          2.5% {
            y:91px;
            height:30px
          }
          2.917% {
            y:91px;
            height:30px
          }
          3.333% {
            y:91px;
            height:30px
          }
          3.75% {
            y:91px;
            height:30px
          }
          4.167% {
            y:91px;
            height:30px
          }
          4.583% {
            y:91px;
            height:30px
          }
          5% {
            y:91px;
            height:30px
          }
          5.417% {
            y:91px;
            height:30px
          }
          5.833% {
            y:91px;
            height:30px
          }
          6.25% {
            y:91px;
            height:30px
          }
          6.667% {
            y:91px;
            height:30px
          }
          7.083% {
            y:91px;
            height:30px
          }
          7.5% {
            y:91px;
            height:30px
          }
          7.917% {
            y:91px;
            height:30px
          }
          8.333% {
            y:91px;
            height:30px
          }
          8.75% {
            y:91.009px;
            height:29.991px
          }
          9.167% {
            y:91.037px;
            height:29.963px
          }
          9.583% {
            y:91.082px;
            height:29.918px
          }
          10% {
            y:91.145px;
            height:29.855px
          }
          10.417% {
            y:91.225px;
            height:29.775px
          }
          10.833% {
            y:91.321px;
            height:29.679px
          }
          11.25% {
            y:91.433px;
            height:29.567px
          }
          11.667% {
            y:91.56px;
            height:29.44px
          }
          12.083% {
            y:91.702px;
            height:29.298px
          }
          12.5% {
            y:91.859px;
            height:29.141px
          }
          12.917% {
            y:92.03px;
            height:28.97px
          }
          13.333% {
            y:92.215px;
            height:28.785px
          }
          13.75% {
            y:92.413px;
            height:28.587px
          }
          14.167% {
            y:92.623px;
            height:28.377px
          }
          14.583% {
            y:92.846px;
            height:28.154px
          }
          15% {
            y:93.08px;
            height:27.92px
          }
          15.417% {
            y:93.326px;
            height:27.674px
          }
          15.833% {
            y:93.582px;
            height:27.418px
          }
          16.25% {
            y:93.849px;
            height:27.151px
          }
          16.667% {
            y:94.125px;
            height:26.875px
          }
          17.083% {
            y:94.411px;
            height:26.589px
          }
          17.5% {
            y:94.706px;
            height:26.294px
          }
          17.917% {
            y:95.009px;
            height:25.991px
          }
          18.333% {
            y:95.32px;
            height:25.68px
          }
          18.75% {
            y:95.639px;
            height:25.361px
          }
          19.167% {
            y:95.964px;
            height:25.036px
          }
          19.583% {
            y:96.297px;
            height:24.703px
          }
          20% {
            y:96.635px;
            height:24.365px
          }
          20.417% {
            y:96.979px;
            height:24.021px
          }
          20.833% {
            y:97.328px;
            height:23.672px
          }
          21.25% {
            y:97.682px;
            height:23.318px
          }
          21.667% {
            y:98.04px;
            height:22.96px
          }
          22.083% {
            y:98.402px;
            height:22.598px
          }
          22.5% {
            y:98.767px;
            height:22.233px
          }
          22.917% {
            y:99.135px;
            height:21.865px
          }
          23.333% {
            y:99.505px;
            height:21.495px
          }
          23.75% {
            y:99.877px;
            height:21.123px
          }
          24.167% {
            y:100.251px;
            height:20.749px
          }
          24.583% {
            y:100.625px;
            height:20.375px
          }
          25% {
            y:101px;
            height:20px
          }
          25.417% {
            y:101.375px;
            height:19.625px
          }
          25.833% {
            y:101.749px;
            height:19.251px
          }
          26.25% {
            y:102.123px;
            height:18.877px
          }
          26.667% {
            y:102.495px;
            height:18.505px
          }
          27.083% {
            y:102.865px;
            height:18.135px
          }
          27.5% {
            y:103.233px;
            height:17.767px
          }
          27.917% {
            y:103.598px;
            height:17.402px
          }
          28.333% {
            y:103.96px;
            height:17.04px
          }
          28.75% {
            y:104.318px;
            height:16.682px
          }
          29.167% {
            y:104.672px;
            height:16.328px
          }
          29.583% {
            y:105.021px;
            height:15.979px
          }
          30% {
            y:105.365px;
            height:15.635px
          }
          30.417% {
            y:105.703px;
            height:15.297px
          }
          30.833% {
            y:106.036px;
            height:14.964px
          }
          31.25% {
            y:106.361px;
            height:14.639px
          }
          31.667% {
            y:106.68px;
            height:14.32px
          }
          32.083% {
            y:106.991px;
            height:14.009px
          }
          32.5% {
            y:107.294px;
            height:13.706px
          }
          32.917% {
            y:107.589px;
            height:13.411px
          }
          33.333% {
            y:107.875px;
            height:13.125px
          }
          33.75% {
            y:108.151px;
            height:12.849px
          }
          34.167% {
            y:108.418px;
            height:12.582px
          }
          34.583% {
            y:108.674px;
            height:12.326px
          }
          35% {
            y:108.92px;
            height:12.08px
          }
          35.417% {
            y:109.154px;
            height:11.846px
          }
          35.833% {
            y:109.377px;
            height:11.623px
          }
          36.25% {
            y:109.587px;
            height:11.413px
          }
          36.667% {
            y:109.785px;
            height:11.215px
          }
          37.083% {
            y:109.97px;
            height:11.03px
          }
          37.5% {
            y:110.141px;
            height:10.859px
          }
          37.917% {
            y:110.298px;
            height:10.702px
          }
          38.333% {
            y:110.44px;
            height:10.56px
          }
          38.75% {
            y:110.567px;
            height:10.433px
          }
          39.167% {
            y:110.679px;
            height:10.321px
          }
          39.583% {
            y:110.775px;
            height:10.225px
          }
          40% {
            y:110.855px;
            height:10.145px
          }
          40.417% {
            y:110.918px;
            height:10.082px
          }
          40.833% {
            y:110.963px;
            height:10.037px
          }
          41.25% {
            y:110.991px;
            height:10.009px
          }
          41.667% {
            y:111px;
            height:10px
          }
          42.083% {
            y:111px;
            height:10px
          }
          42.5% {
            y:111px;
            height:10px
          }
          42.917% {
            y:111px;
            height:10px
          }
          43.333% {
            y:111px;
            height:10px
          }
          43.75% {
            y:111px;
            height:10px
          }
          44.167% {
            y:111px;
            height:10px
          }
          44.583% {
            y:111px;
            height:10px
          }
          45% {
            y:111px;
            height:10px
          }
          45.417% {
            y:111px;
            height:10px
          }
          45.833% {
            y:111px;
            height:10px
          }
          46.25% {
            y:111px;
            height:10px
          }
          46.667% {
            y:111px;
            height:10px
          }
          47.083% {
            y:111px;
            height:10px
          }
          47.5% {
            y:111px;
            height:10px
          }
          47.917% {
            y:111px;
            height:10px
          }
          48.333% {
            y:111px;
            height:10px
          }
          48.75% {
            y:111px;
            height:10px
          }
          49.167% {
            y:111px;
            height:10px
          }
          49.583% {
            y:111px;
            height:10px
          }
          50% {
            y:111px;
            height:10px
          }
          50.417% {
            y:110.991px;
            height:10.009px
          }
          50.833% {
            y:110.963px;
            height:10.037px
          }
          51.25% {
            y:110.918px;
            height:10.082px
          }
          51.667% {
            y:110.855px;
            height:10.145px
          }
          52.083% {
            y:110.775px;
            height:10.225px
          }
          52.5% {
            y:110.679px;
            height:10.321px
          }
          52.917% {
            y:110.567px;
            height:10.433px
          }
          53.333% {
            y:110.44px;
            height:10.56px
          }
          53.75% {
            y:110.298px;
            height:10.702px
          }
          54.167% {
            y:110.141px;
            height:10.859px
          }
          54.583% {
            y:109.97px;
            height:11.03px
          }
          55.0% {
            y:109.785px;
            height:11.215px
          }
          55.417% {
            y:109.587px;
            height:11.413px
          }
          55.833% {
            y:109.377px;
            height:11.623px
          }
          56.25% {
            y:109.154px;
            height:11.846px
          }
          56.667% {
            y:108.92px;
            height:12.08px
          }
          57.083% {
            y:108.674px;
            height:12.326px
          }
          57.5% {
            y:108.418px;
            height:12.582px
          }
          57.917% {
            y:108.151px;
            height:12.849px
          }
          58.333% {
            y:107.875px;
            height:13.125px
          }
          58.75% {
            y:107.589px;
            height:13.411px
          }
          59.167% {
            y:107.294px;
            height:13.706px
          }
          59.583% {
            y:106.991px;
            height:14.009px
          }
          60% {
            y:106.68px;
            height:14.32px
          }
          60.417% {
            y:106.361px;
            height:14.639px
          }
          60.833% {
            y:106.036px;
            height:14.964px
          }
          61.25% {
            y:105.703px;
            height:15.297px
          }
          61.667% {
            y:105.365px;
            height:15.635px
          }
          62.083% {
            y:105.021px;
            height:15.979px
          }
          62.5% {
            y:104.672px;
            height:16.328px
          }
          62.917% {
            y:104.318px;
            height:16.682px
          }
          63.333% {
            y:103.96px;
            height:17.04px
          }
          63.75% {
            y:103.598px;
            height:17.402px
          }
          64.167% {
            y:103.233px;
            height:17.767px
          }
          64.583% {
            y:102.865px;
            height:18.135px
          }
          65% {
            y:102.495px;
            height:18.505px
          }
          65.417% {
            y:102.123px;
            height:18.877px
          }
          65.833% {
            y:101.749px;
            height:19.251px
          }
          66.25% {
            y:101.375px;
            height:19.625px
          }
          66.667% {
            y:101px;
            height:20px
          }
          67.083% {
            y:100.625px;
            height:20.375px
          }
          67.5% {
            y:100.251px;
            height:20.749px
          }
          67.917% {
            y:99.877px;
            height:21.123px
          }
          68.333% {
            y:99.505px;
            height:21.495px
          }
          68.75% {
            y:99.135px;
            height:21.865px
          }
          69.167% {
            y:98.767px;
            height:22.233px
          }
          69.583% {
            y:98.402px;
            height:22.598px
          }
          70% {
            y:98.04px;
            height:22.96px
          }
          70.417% {
            y:97.682px;
            height:23.318px
          }
          70.833% {
            y:97.328px;
            height:23.672px
          }
          71.25% {
            y:96.979px;
            height:24.021px
          }
          71.667% {
            y:96.635px;
            height:24.365px
          }
          72.083% {
            y:96.297px;
            height:24.703px
          }
          72.5% {
            y:95.964px;
            height:25.036px
          }
          72.917% {
            y:95.639px;
            height:25.361px
          }
          73.333% {
            y:95.32px;
            height:25.68px
          }
          73.75% {
            y:95.009px;
            height:25.991px
          }
          74.167% {
            y:94.706px;
            height:26.294px
          }
          74.583% {
            y:94.411px;
            height:26.589px
          }
          75% {
            y:94.125px;
            height:26.875px
          }
          75.417% {
            y:93.849px;
            height:27.151px
          }
          75.833% {
            y:93.582px;
            height:27.418px
          }
          76.25% {
            y:93.326px;
            height:27.674px
          }
          76.667% {
            y:93.08px;
            height:27.92px
          }
          77.083% {
            y:92.846px;
            height:28.154px
          }
          77.5% {
            y:92.623px;
            height:28.377px
          }
          77.917% {
            y:92.413px;
            height:28.587px
          }
          78.333% {
            y:92.215px;
            height:28.785px
          }
          78.75% {
            y:92.03px;
            height:28.97px
          }
          79.167% {
            y:91.859px;
            height:29.141px
          }
          79.583% {
            y:91.702px;
            height:29.298px
          }
          80% {
            y:91.56px;
            height:29.44px
          }
          80.417% {
            y:91.433px;
            height:29.567px
          }
          80.833% {
            y:91.321px;
            height:29.679px
          }
          81.25% {
            y:91.225px;
            height:29.775px
          }
          81.667% {
            y:91.145px;
            height:29.855px
          }
          82.083% {
            y:91.082px;
            height:29.918px
          }
          82.5% {
            y:91.037px;
            height:29.963px
          }
          82.917% {
            y:91.009px;
            height:29.991px
          }
          83.333% {
            y:91px;
            height:30px
          }
          83.75% {
            y:91px;
            height:30px
          }
          84.167% {
            y:91px;
            height:30px
          }
          84.583% {
            y:91px;
            height:30px
          }
          85% {
            y:91px;
            height:30px
          }
          85.417% {
            y:91px;
            height:30px
          }
          85.833% {
            y:91px;
            height:30px
          }
          86.25% {
            y:91px;
            height:30px
          }
          86.667% {
            y:91px;
            height:30px
          }
          87.083% {
            y:91px;
            height:30px
          }
          87.5% {
            y:91px;
            height:30px
          }
          87.917% {
            y:91px;
            height:30px
          }
          88.333% {
            y:91px;
            height:30px
          }
          88.75% {
            y:91px;
            height:30px
          }
          89.167% {
            y:91px;
            height:30px
          }
          89.583% {
            y:91px;
            height:30px
          }
          90% {
            y:91px;
            height:30px
          }
          90.417% {
            y:91px;
            height:30px
          }
          90.833% {
            y:91px;
            height:30px
          }
          91.25% {
            y:91px;
            height:30px
          }
          91.667% {
            y:91px;
            height:30px
          }
          92.083% {
            y:91px;
            height:30px
          }
          92.5% {
            y:91px;
            height:30px
          }
          92.917% {
            y:91px;
            height:30px
          }
          93.333% {
            y:91px;
            height:30px
          }
          93.75% {
            y:91px;
            height:30px
          }
          94.167% {
            y:91px;
            height:30px
          }
          94.583% {
            y:91px;
            height:30px
          }
          95% {
            y:91px;
            height:30px
          }
          95.417% {
            y:91px;
            height:30px
          }
          95.833% {
            y:91px;
            height:30px
          }
          96.25% {
            y:91px;
            height:30px
          }
          96.667% {
            y:91px;
            height:30px
          }
          97.083% {
            y:91px;
            height:30px
          }
          97.5% {
            y:91px;
            height:30px
          }
          97.917% {
            y:91px;
            height:30px
          }
          98.333% {
            y:91px;
            height:30px
          }
          98.75% {
            y:91px;
            height:30px
          }
          99.167% {
            y:91px;
            height:30px
          }
          99.583% {
            y:91px;
            height:30px
          }
          100% {
            y:91px;
            height:30px
          }
        }
        @keyframes hydro-flow {
          0% {
            stroke-dashoffset:0;
            opacity:0
          }
          0.417% {
            stroke-dashoffset:0;
            opacity:0
          }
          0.833% {
            stroke-dashoffset:0;
            opacity:0
          }
          1.25% {
            stroke-dashoffset:0;
            opacity:0
          }
          1.667% {
            stroke-dashoffset:0;
            opacity:0
          }
          2.083% {
            stroke-dashoffset:0;
            opacity:0
          }
          2.5% {
            stroke-dashoffset:0;
            opacity:0
          }
          2.917% {
            stroke-dashoffset:0;
            opacity:0
          }
          3.333% {
            stroke-dashoffset:0;
            opacity:0
          }
          3.75% {
            stroke-dashoffset:0;
            opacity:0
          }
          4.167% {
            stroke-dashoffset:0;
            opacity:0
          }
          4.583% {
            stroke-dashoffset:0;
            opacity:0
          }
          5% {
            stroke-dashoffset:0;
            opacity:0
          }
          5.417% {
            stroke-dashoffset:0;
            opacity:0
          }
          5.833% {
            stroke-dashoffset:0;
            opacity:0
          }
          6.25% {
            stroke-dashoffset:0;
            opacity:0
          }
          6.667% {
            stroke-dashoffset:0;
            opacity:0
          }
          7.083% {
            stroke-dashoffset:0;
            opacity:0
          }
          7.5% {
            stroke-dashoffset:0;
            opacity:0
          }
          7.917% {
            stroke-dashoffset:0;
            opacity:0
          }
          8.333% {
            stroke-dashoffset:0;
            opacity:0
          }
          8.75% {
            stroke-dashoffset:0.001;
            opacity:1
          }
          9.167% {
            stroke-dashoffset:0.002;
            opacity:1
          }
          9.583% {
            stroke-dashoffset:0.005;
            opacity:1
          }
          10% {
            stroke-dashoffset:0.009;
            opacity:1
          }
          10.417% {
            stroke-dashoffset:0.013;
            opacity:1
          }
          10.833% {
            stroke-dashoffset:0.019;
            opacity:1
          }
          11.25% {
            stroke-dashoffset:0.026;
            opacity:1
          }
          11.667% {
            stroke-dashoffset:0.034;
            opacity:1
          }
          12.083% {
            stroke-dashoffset:0.042;
            opacity:1
          }
          12.5% {
            stroke-dashoffset:0.052;
            opacity:1
          }
          12.917% {
            stroke-dashoffset:0.062;
            opacity:1
          }
          13.333% {
            stroke-dashoffset:0.073;
            opacity:1
          }
          13.75% {
            stroke-dashoffset:0.085;
            opacity:1
          }
          14.167% {
            stroke-dashoffset:0.097;
            opacity:1
          }
          14.583% {
            stroke-dashoffset:0.111;
            opacity:1
          }
          15% {
            stroke-dashoffset:0.125;
            opacity:1
          }
          15.417% {
            stroke-dashoffset:0.14;
            opacity:1
          }
          15.833% {
            stroke-dashoffset:0.155;
            opacity:1
          }
          16.25% {
            stroke-dashoffset:0.171;
            opacity:1
          }
          16.667% {
            stroke-dashoffset:0.1875;
            opacity:1
          }
          17.083% {
            stroke-dashoffset:0.205;
            opacity:1
          }
          17.5% {
            stroke-dashoffset:0.222;
            opacity:1
          }
          17.917% {
            stroke-dashoffset:0.241;
            opacity:1
          }
          18.333% {
            stroke-dashoffset:0.259;
            opacity:1
          }
          18.75% {
            stroke-dashoffset:0.278;
            opacity:1
          }
          19.167% {
            stroke-dashoffset:0.298;
            opacity:1
          }
          19.583% {
            stroke-dashoffset:0.318;
            opacity:1
          }
          20% {
            stroke-dashoffset:0.338;
            opacity:1
          }
          20.417% {
            stroke-dashoffset:0.359;
            opacity:1
          }
          20.833% {
            stroke-dashoffset:0.38;
            opacity:1
          }
          21.25% {
            stroke-dashoffset:0.401;
            opacity:1
          }
          21.667% {
            stroke-dashoffset:0.422;
            opacity:1
          }
          22.083% {
            stroke-dashoffset:0.444;
            opacity:1
          }
          22.5% {
            stroke-dashoffset:0.466;
            opacity:1
          }
          22.917% {
            stroke-dashoffset:0.488;
            opacity:1
          }
          23.333% {
            stroke-dashoffset:0.51;
            opacity:1
          }
          23.75% {
            stroke-dashoffset:0.533;
            opacity:1
          }
          24.167% {
            stroke-dashoffset:0.555;
            opacity:1
          }
          24.583% {
            stroke-dashoffset:0.578;
            opacity:1
          }
          25% {
            stroke-dashoffset:0.6;
            opacity:1
          }
          25.417% {
            stroke-dashoffset:0.622;
            opacity:1
          }
          25.833% {
            stroke-dashoffset:0.645;
            opacity:1
          }
          26.25% {
            stroke-dashoffset:0.667;
            opacity:1
          }
          26.667% {
            stroke-dashoffset:0.69;
            opacity:1
          }
          27.083% {
            stroke-dashoffset:0.712;
            opacity:1
          }
          27.5% {
            stroke-dashoffset:0.734;
            opacity:1
          }
          27.917% {
            stroke-dashoffset:0.756;
            opacity:1
          }
          28.333% {
            stroke-dashoffset:0.778;
            opacity:1
          }
          28.75% {
            stroke-dashoffset:0.799;
            opacity:1
          }
          29.167% {
            stroke-dashoffset:0.82;
            opacity:1
          }
          29.583% {
            stroke-dashoffset:0.841;
            opacity:1
          }
          30% {
            stroke-dashoffset:0.8619;
            opacity:1
          }
          30.417% {
            stroke-dashoffset:0.882;
            opacity:1
          }
          30.833% {
            stroke-dashoffset:0.902;
            opacity:1
          }
          31.25% {
            stroke-dashoffset:0.922;
            opacity:1
          }
          31.667% {
            stroke-dashoffset:0.941;
            opacity:1
          }
          32.083% {
            stroke-dashoffset:0.959;
            opacity:1
          }
          32.5% {
            stroke-dashoffset:0.978;
            opacity:1
          }
          32.917% {
            stroke-dashoffset:0.995;
            opacity:1
          }
          33.333% {
            stroke-dashoffset:1.0125;
            opacity:1
          }
          33.75% {
            stroke-dashoffset:1.029;
            opacity:1
          }
          34.167% {
            stroke-dashoffset:1.045;
            opacity:1
          }
          34.583% {
            stroke-dashoffset:1.06;
            opacity:1
          }
          35% {
            stroke-dashoffset:1.075;
            opacity:1
          }
          35.417% {
            stroke-dashoffset:1.089;
            opacity:1
          }
          35.833% {
            stroke-dashoffset:1.103;
            opacity:1
          }
          36.25% {
            stroke-dashoffset:1.115;
            opacity:1
          }
          36.667% {
            stroke-dashoffset:1.1271;
            opacity:1
          }
          37.083% {
            stroke-dashoffset:1.138;
            opacity:1
          }
          37.5% {
            stroke-dashoffset:1.148;
            opacity:1
          }
          37.917% {
            stroke-dashoffset:1.158;
            opacity:1
          }
          38.333% {
            stroke-dashoffset:1.1664;
            opacity:1
          }
          38.75% {
            stroke-dashoffset:1.174;
            opacity:1
          }
          39.167% {
            stroke-dashoffset:1.181;
            opacity:1
          }
          39.583% {
            stroke-dashoffset:1.187;
            opacity:1
          }
          40% {
            stroke-dashoffset:1.1913;
            opacity:1
          }
          40.417% {
            stroke-dashoffset:1.195;
            opacity:1
          }
          40.833% {
            stroke-dashoffset:1.198;
            opacity:1
          }
          41.25% {
            stroke-dashoffset:1.199;
            opacity:1
          }
          41.667% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          42.083% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          42.5% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          42.917% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          43.333% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          43.75% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          44.167% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          44.583% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          45% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          45.417% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          45.833% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          46.25% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          46.667% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          47.083% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          47.5% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          47.917% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          48.333% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          48.75% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          49.167% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          49.583% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          50% {
            stroke-dashoffset:1.2;
            opacity:0
          }
          50.417% {
            stroke-dashoffset:1.199;
            opacity:1
          }
          50.833% {
            stroke-dashoffset:1.198;
            opacity:1
          }
          51.25% {
            stroke-dashoffset:1.195;
            opacity:1
          }
          51.667% {
            stroke-dashoffset:1.1913;
            opacity:1
          }
          52.083% {
            stroke-dashoffset:1.187;
            opacity:1
          }
          52.5% {
            stroke-dashoffset:1.181;
            opacity:1
          }
          52.917% {
            stroke-dashoffset:1.174;
            opacity:1
          }
          53.333% {
            stroke-dashoffset:1.166;
            opacity:1
          }
          53.75% {
            stroke-dashoffset:1.158;
            opacity:1
          }
          54.167% {
            stroke-dashoffset:1.148;
            opacity:1
          }
          54.583% {
            stroke-dashoffset:1.138;
            opacity:1
          }
          55.0% {
            stroke-dashoffset:1.127;
            opacity:1
          }
          55.417% {
            stroke-dashoffset:1.115;
            opacity:1
          }
          55.833% {
            stroke-dashoffset:1.103;
            opacity:1
          }
          56.25% {
            stroke-dashoffset:1.089;
            opacity:1
          }
          56.667% {
            stroke-dashoffset:1.075;
            opacity:1
          }
          57.083% {
            stroke-dashoffset:1.06;
            opacity:1
          }
          57.5% {
            stroke-dashoffset:1.045;
            opacity:1
          }
          57.917% {
            stroke-dashoffset:1.029;
            opacity:1
          }
          58.333% {
            stroke-dashoffset:1.0125;
            opacity:1
          }
          58.75% {
            stroke-dashoffset:0.995;
            opacity:1
          }
          59.167% {
            stroke-dashoffset:0.978;
            opacity:1
          }
          59.583% {
            stroke-dashoffset:0.959;
            opacity:1
          }
          60% {
            stroke-dashoffset:0.941;
            opacity:1
          }
          60.417% {
            stroke-dashoffset:0.922;
            opacity:1
          }
          60.833% {
            stroke-dashoffset:0.902;
            opacity:1
          }
          61.25% {
            stroke-dashoffset:0.882;
            opacity:1
          }
          61.667% {
            stroke-dashoffset:0.862;
            opacity:1
          }
          62.083% {
            stroke-dashoffset:0.841;
            opacity:1
          }
          62.5% {
            stroke-dashoffset:0.82;
            opacity:1
          }
          62.917% {
            stroke-dashoffset:0.799;
            opacity:1
          }
          63.333% {
            stroke-dashoffset:0.778;
            opacity:1
          }
          63.75% {
            stroke-dashoffset:0.756;
            opacity:1
          }
          64.167% {
            stroke-dashoffset:0.734;
            opacity:1
          }
          64.583% {
            stroke-dashoffset:0.712;
            opacity:1
          }
          65% {
            stroke-dashoffset:0.69;
            opacity:1
          }
          65.417% {
            stroke-dashoffset:0.667;
            opacity:1
          }
          65.833% {
            stroke-dashoffset:0.645;
            opacity:1
          }
          66.25% {
            stroke-dashoffset:0.622;
            opacity:1
          }
          66.667% {
            stroke-dashoffset:0.6;
            opacity:1
          }
          67.083% {
            stroke-dashoffset:0.578;
            opacity:1
          }
          67.5% {
            stroke-dashoffset:0.555;
            opacity:1
          }
          67.917% {
            stroke-dashoffset:0.533;
            opacity:1
          }
          68.333% {
            stroke-dashoffset:0.51;
            opacity:1
          }
          68.75% {
            stroke-dashoffset:0.488;
            opacity:1
          }
          69.167% {
            stroke-dashoffset:0.466;
            opacity:1
          }
          69.583% {
            stroke-dashoffset:0.444;
            opacity:1
          }
          70% {
            stroke-dashoffset:0.422;
            opacity:1
          }
          70.417% {
            stroke-dashoffset:0.401;
            opacity:1
          }
          70.833% {
            stroke-dashoffset:0.38;
            opacity:1
          }
          71.25% {
            stroke-dashoffset:0.359;
            opacity:1
          }
          71.667% {
            stroke-dashoffset:0.338;
            opacity:1
          }
          72.083% {
            stroke-dashoffset:0.318;
            opacity:1
          }
          72.5% {
            stroke-dashoffset:0.298;
            opacity:1
          }
          72.917% {
            stroke-dashoffset:0.278;
            opacity:1
          }
          73.333% {
            stroke-dashoffset:0.259;
            opacity:1
          }
          73.75% {
            stroke-dashoffset:0.241;
            opacity:1
          }
          74.167% {
            stroke-dashoffset:0.222;
            opacity:1
          }
          74.583% {
            stroke-dashoffset:0.205;
            opacity:1
          }
          75% {
            stroke-dashoffset:0.1875;
            opacity:1
          }
          75.417% {
            stroke-dashoffset:0.171;
            opacity:1
          }
          75.833% {
            stroke-dashoffset:0.155;
            opacity:1
          }
          76.25% {
            stroke-dashoffset:0.14;
            opacity:1
          }
          76.667% {
            stroke-dashoffset:0.125;
            opacity:1
          }
          77.083% {
            stroke-dashoffset:0.111;
            opacity:1
          }
          77.5% {
            stroke-dashoffset:0.097;
            opacity:1
          }
          77.917% {
            stroke-dashoffset:0.085;
            opacity:1
          }
          78.333% {
            stroke-dashoffset:0.073;
            opacity:1
          }
          78.75% {
            stroke-dashoffset:0.062;
            opacity:1
          }
          79.167% {
            stroke-dashoffset:0.052;
            opacity:1
          }
          79.583% {
            stroke-dashoffset:0.042;
            opacity:1
          }
          80% {
            stroke-dashoffset:0.034;
            opacity:1
          }
          80.417% {
            stroke-dashoffset:0.026;
            opacity:1
          }
          80.833% {
            stroke-dashoffset:0.019;
            opacity:1
          }
          81.25% {
            stroke-dashoffset:0.013;
            opacity:1
          }
          81.667% {
            stroke-dashoffset:0.009;
            opacity:1
          }
          82.083% {
            stroke-dashoffset:0.005;
            opacity:1
          }
          82.5% {
            stroke-dashoffset:0.002;
            opacity:1
          }
          82.917% {
            stroke-dashoffset:0.001;
            opacity:1
          }
          83.333% {
            stroke-dashoffset:0;
            opacity:0
          }
          83.75% {
            stroke-dashoffset:0;
            opacity:0
          }
          84.167% {
            stroke-dashoffset:0;
            opacity:0
          }
          84.583% {
            stroke-dashoffset:0;
            opacity:0
          }
          85% {
            stroke-dashoffset:0;
            opacity:0
          }
          85.417% {
            stroke-dashoffset:0;
            opacity:0
          }
          85.833% {
            stroke-dashoffset:0;
            opacity:0
          }
          86.25% {
            stroke-dashoffset:0;
            opacity:0
          }
          86.667% {
            stroke-dashoffset:0;
            opacity:0
          }
          87.083% {
            stroke-dashoffset:0;
            opacity:0
          }
          87.5% {
            stroke-dashoffset:0;
            opacity:0
          }
          87.917% {
            stroke-dashoffset:0;
            opacity:0
          }
          88.333% {
            stroke-dashoffset:0;
            opacity:0
          }
          88.75% {
            stroke-dashoffset:0;
            opacity:0
          }
          89.167% {
            stroke-dashoffset:0;
            opacity:0
          }
          89.583% {
            stroke-dashoffset:0;
            opacity:0
          }
          90% {
            stroke-dashoffset:0;
            opacity:0
          }
          90.417% {
            stroke-dashoffset:0;
            opacity:0
          }
          90.833% {
            stroke-dashoffset:0;
            opacity:0
          }
          91.25% {
            stroke-dashoffset:0;
            opacity:0
          }
          91.667% {
            stroke-dashoffset:0;
            opacity:0
          }
          92.083% {
            stroke-dashoffset:0;
            opacity:0
          }
          92.5% {
            stroke-dashoffset:0;
            opacity:0
          }
          92.917% {
            stroke-dashoffset:0;
            opacity:0
          }
          93.333% {
            stroke-dashoffset:0;
            opacity:0
          }
          93.75% {
            stroke-dashoffset:0;
            opacity:0
          }
          94.167% {
            stroke-dashoffset:0;
            opacity:0
          }
          94.583% {
            stroke-dashoffset:0;
            opacity:0
          }
          95% {
            stroke-dashoffset:0;
            opacity:0
          }
          95.417% {
            stroke-dashoffset:0;
            opacity:0
          }
          95.833% {
            stroke-dashoffset:0;
            opacity:0
          }
          96.25% {
            stroke-dashoffset:0;
            opacity:0
          }
          96.667% {
            stroke-dashoffset:0;
            opacity:0
          }
          97.083% {
            stroke-dashoffset:0;
            opacity:0
          }
          97.5% {
            stroke-dashoffset:0;
            opacity:0
          }
          97.917% {
            stroke-dashoffset:0;
            opacity:0
          }
          98.333% {
            stroke-dashoffset:0;
            opacity:0
          }
          98.75% {
            stroke-dashoffset:0;
            opacity:0
          }
          99.167% {
            stroke-dashoffset:0;
            opacity:0
          }
          99.583% {
            stroke-dashoffset:0;
            opacity:0
          }
          100% {
            stroke-dashoffset:0;
            opacity:0
          }
        }
        @keyframes hydro-rotor {
          0% {
            transform:rotate(0deg)
          }
          0.417% {
            transform:rotate(0deg)
          }
          0.833% {
            transform:rotate(0deg)
          }
          1.25% {
            transform:rotate(0deg)
          }
          1.667% {
            transform:rotate(0deg)
          }
          2.083% {
            transform:rotate(0deg)
          }
          2.5% {
            transform:rotate(0deg)
          }
          2.917% {
            transform:rotate(0deg)
          }
          3.333% {
            transform:rotate(0deg)
          }
          3.75% {
            transform:rotate(0deg)
          }
          4.167% {
            transform:rotate(0deg)
          }
          4.583% {
            transform:rotate(0deg)
          }
          5% {
            transform:rotate(0deg)
          }
          5.417% {
            transform:rotate(0deg)
          }
          5.833% {
            transform:rotate(0deg)
          }
          6.25% {
            transform:rotate(0deg)
          }
          6.667% {
            transform:rotate(0deg)
          }
          7.083% {
            transform:rotate(0deg)
          }
          7.5% {
            transform:rotate(0deg)
          }
          7.917% {
            transform:rotate(0deg)
          }
          8.333% {
            transform:rotate(0deg)
          }
          8.75% {
            transform:rotate(0.167deg)
          }
          9.167% {
            transform:rotate(0.664deg)
          }
          9.583% {
            transform:rotate(1.481deg)
          }
          10% {
            transform:rotate(2.61deg)
          }
          10.417% {
            transform:rotate(4.043deg)
          }
          10.833% {
            transform:rotate(5.771deg)
          }
          11.25% {
            transform:rotate(7.786deg)
          }
          11.667% {
            transform:rotate(10.08deg)
          }
          12.083% {
            transform:rotate(12.644deg)
          }
          12.5% {
            transform:rotate(15.469deg)
          }
          12.917% {
            transform:rotate(18.547deg)
          }
          13.333% {
            transform:rotate(21.87deg)
          }
          13.75% {
            transform:rotate(25.429deg)
          }
          14.167% {
            transform:rotate(29.216deg)
          }
          14.583% {
            transform:rotate(33.223deg)
          }
          15% {
            transform:rotate(37.44deg)
          }
          15.417% {
            transform:rotate(41.86deg)
          }
          15.833% {
            transform:rotate(46.474deg)
          }
          16.25% {
            transform:rotate(51.273deg)
          }
          16.667% {
            transform:rotate(56.25deg)
          }
          17.083% {
            transform:rotate(61.395deg)
          }
          17.5% {
            transform:rotate(66.701deg)
          }
          17.917% {
            transform:rotate(72.159deg)
          }
          18.333% {
            transform:rotate(77.76deg)
          }
          18.75% {
            transform:rotate(83.496deg)
          }
          19.167% {
            transform:rotate(89.359deg)
          }
          19.583% {
            transform:rotate(95.34deg)
          }
          20% {
            transform:rotate(101.43deg)
          }
          20.417% {
            transform:rotate(107.622deg)
          }
          20.833% {
            transform:rotate(113.906deg)
          }
          21.25% {
            transform:rotate(120.275deg)
          }
          21.667% {
            transform:rotate(126.72deg)
          }
          22.083% {
            transform:rotate(133.232deg)
          }
          22.5% {
            transform:rotate(139.804deg)
          }
          22.917% {
            transform:rotate(146.426deg)
          }
          23.333% {
            transform:rotate(153.09deg)
          }
          23.75% {
            transform:rotate(159.788deg)
          }
          24.167% {
            transform:rotate(166.511deg)
          }
          24.583% {
            transform:rotate(173.251deg)
          }
          25% {
            transform:rotate(180deg)
          }
          25.417% {
            transform:rotate(186.749deg)
          }
          25.833% {
            transform:rotate(193.489deg)
          }
          26.25% {
            transform:rotate(200.212deg)
          }
          26.667% {
            transform:rotate(206.91deg)
          }
          27.083% {
            transform:rotate(213.574deg)
          }
          27.5% {
            transform:rotate(220.196deg)
          }
          27.917% {
            transform:rotate(226.768deg)
          }
          28.333% {
            transform:rotate(233.28deg)
          }
          28.75% {
            transform:rotate(239.725deg)
          }
          29.167% {
            transform:rotate(246.094deg)
          }
          29.583% {
            transform:rotate(252.378deg)
          }
          30% {
            transform:rotate(258.57deg)
          }
          30.417% {
            transform:rotate(264.66deg)
          }
          30.833% {
            transform:rotate(270.641deg)
          }
          31.25% {
            transform:rotate(276.504deg)
          }
          31.667% {
            transform:rotate(282.24deg)
          }
          32.083% {
            transform:rotate(287.841deg)
          }
          32.5% {
            transform:rotate(293.299deg)
          }
          32.917% {
            transform:rotate(298.605deg)
          }
          33.333% {
            transform:rotate(303.75deg)
          }
          33.75% {
            transform:rotate(308.727deg)
          }
          34.167% {
            transform:rotate(313.526deg)
          }
          34.583% {
            transform:rotate(318.14deg)
          }
          35% {
            transform:rotate(322.56deg)
          }
          35.417% {
            transform:rotate(326.777deg)
          }
          35.833% {
            transform:rotate(330.784deg)
          }
          36.25% {
            transform:rotate(334.571deg)
          }
          36.667% {
            transform:rotate(338.13deg)
          }
          37.083% {
            transform:rotate(341.453deg)
          }
          37.5% {
            transform:rotate(344.531deg)
          }
          37.917% {
            transform:rotate(347.356deg)
          }
          38.333% {
            transform:rotate(349.92deg)
          }
          38.75% {
            transform:rotate(352.214deg)
          }
          39.167% {
            transform:rotate(354.229deg)
          }
          39.583% {
            transform:rotate(355.957deg)
          }
          40% {
            transform:rotate(357.39deg)
          }
          40.417% {
            transform:rotate(358.519deg)
          }
          40.833% {
            transform:rotate(359.336deg)
          }
          41.25% {
            transform:rotate(359.833deg)
          }
          41.667% {
            transform:rotate(360deg)
          }
          42.083% {
            transform:rotate(360deg)
          }
          42.5% {
            transform:rotate(360deg)
          }
          42.917% {
            transform:rotate(360deg)
          }
          43.333% {
            transform:rotate(360deg)
          }
          43.75% {
            transform:rotate(360deg)
          }
          44.167% {
            transform:rotate(360deg)
          }
          44.583% {
            transform:rotate(360deg)
          }
          45% {
            transform:rotate(360deg)
          }
          45.417% {
            transform:rotate(360deg)
          }
          45.833% {
            transform:rotate(360deg)
          }
          46.25% {
            transform:rotate(360deg)
          }
          46.667% {
            transform:rotate(360deg)
          }
          47.083% {
            transform:rotate(360deg)
          }
          47.5% {
            transform:rotate(360deg)
          }
          47.917% {
            transform:rotate(360deg)
          }
          48.333% {
            transform:rotate(360deg)
          }
          48.75% {
            transform:rotate(360deg)
          }
          49.167% {
            transform:rotate(360deg)
          }
          49.583% {
            transform:rotate(360deg)
          }
          50% {
            transform:rotate(360deg)
          }
          50.417% {
            transform:rotate(360.167deg)
          }
          50.833% {
            transform:rotate(360.664deg)
          }
          51.25% {
            transform:rotate(361.481deg)
          }
          51.667% {
            transform:rotate(362.61deg)
          }
          52.083% {
            transform:rotate(364.043deg)
          }
          52.5% {
            transform:rotate(365.771deg)
          }
          52.917% {
            transform:rotate(367.786deg)
          }
          53.333% {
            transform:rotate(370.08deg)
          }
          53.75% {
            transform:rotate(372.644deg)
          }
          54.167% {
            transform:rotate(375.469deg)
          }
          54.583% {
            transform:rotate(378.547deg)
          }
          55.0% {
            transform:rotate(381.87deg)
          }
          55.417% {
            transform:rotate(385.429deg)
          }
          55.833% {
            transform:rotate(389.216deg)
          }
          56.25% {
            transform:rotate(393.223deg)
          }
          56.667% {
            transform:rotate(397.44deg)
          }
          57.083% {
            transform:rotate(401.86deg)
          }
          57.5% {
            transform:rotate(406.474deg)
          }
          57.917% {
            transform:rotate(411.273deg)
          }
          58.333% {
            transform:rotate(416.25deg)
          }
          58.75% {
            transform:rotate(421.395deg)
          }
          59.167% {
            transform:rotate(426.701deg)
          }
          59.583% {
            transform:rotate(432.159deg)
          }
          60% {
            transform:rotate(437.76deg)
          }
          60.417% {
            transform:rotate(443.496deg)
          }
          60.833% {
            transform:rotate(449.359deg)
          }
          61.25% {
            transform:rotate(455.34deg)
          }
          61.667% {
            transform:rotate(461.43deg)
          }
          62.083% {
            transform:rotate(467.622deg)
          }
          62.5% {
            transform:rotate(473.906deg)
          }
          62.917% {
            transform:rotate(480.275deg)
          }
          63.333% {
            transform:rotate(486.72deg)
          }
          63.75% {
            transform:rotate(493.232deg)
          }
          64.167% {
            transform:rotate(499.804deg)
          }
          64.583% {
            transform:rotate(506.426deg)
          }
          65% {
            transform:rotate(513.09deg)
          }
          65.417% {
            transform:rotate(519.788deg)
          }
          65.833% {
            transform:rotate(526.511deg)
          }
          66.25% {
            transform:rotate(533.251deg)
          }
          66.667% {
            transform:rotate(540deg)
          }
          67.083% {
            transform:rotate(546.749deg)
          }
          67.5% {
            transform:rotate(553.489deg)
          }
          67.917% {
            transform:rotate(560.212deg)
          }
          68.333% {
            transform:rotate(566.91deg)
          }
          68.75% {
            transform:rotate(573.574deg)
          }
          69.167% {
            transform:rotate(580.196deg)
          }
          69.583% {
            transform:rotate(586.768deg)
          }
          70% {
            transform:rotate(593.28deg)
          }
          70.417% {
            transform:rotate(599.725deg)
          }
          70.833% {
            transform:rotate(606.094deg)
          }
          71.25% {
            transform:rotate(612.378deg)
          }
          71.667% {
            transform:rotate(618.57deg)
          }
          72.083% {
            transform:rotate(624.66deg)
          }
          72.5% {
            transform:rotate(630.641deg)
          }
          72.917% {
            transform:rotate(636.504deg)
          }
          73.333% {
            transform:rotate(642.24deg)
          }
          73.75% {
            transform:rotate(647.841deg)
          }
          74.167% {
            transform:rotate(653.299deg)
          }
          74.583% {
            transform:rotate(658.605deg)
          }
          75% {
            transform:rotate(663.75deg)
          }
          75.417% {
            transform:rotate(668.727deg)
          }
          75.833% {
            transform:rotate(673.526deg)
          }
          76.25% {
            transform:rotate(678.14deg)
          }
          76.667% {
            transform:rotate(682.56deg)
          }
          77.083% {
            transform:rotate(686.777deg)
          }
          77.5% {
            transform:rotate(690.784deg)
          }
          77.917% {
            transform:rotate(694.571deg)
          }
          78.333% {
            transform:rotate(698.13deg)
          }
          78.75% {
            transform:rotate(701.453deg)
          }
          79.167% {
            transform:rotate(704.531deg)
          }
          79.583% {
            transform:rotate(707.356deg)
          }
          80% {
            transform:rotate(709.92deg)
          }
          80.417% {
            transform:rotate(712.214deg)
          }
          80.833% {
            transform:rotate(714.229deg)
          }
          81.25% {
            transform:rotate(715.957deg)
          }
          81.667% {
            transform:rotate(717.39deg)
          }
          82.083% {
            transform:rotate(718.519deg)
          }
          82.5% {
            transform:rotate(719.336deg)
          }
          82.917% {
            transform:rotate(719.833deg)
          }
          83.333% {
            transform:rotate(720deg)
          }
          83.75% {
            transform:rotate(720deg)
          }
          84.167% {
            transform:rotate(720deg)
          }
          84.583% {
            transform:rotate(720deg)
          }
          85% {
            transform:rotate(720deg)
          }
          85.417% {
            transform:rotate(720deg)
          }
          85.833% {
            transform:rotate(720deg)
          }
          86.25% {
            transform:rotate(720deg)
          }
          86.667% {
            transform:rotate(720deg)
          }
          87.083% {
            transform:rotate(720deg)
          }
          87.5% {
            transform:rotate(720deg)
          }
          87.917% {
            transform:rotate(720deg)
          }
          88.333% {
            transform:rotate(720deg)
          }
          88.75% {
            transform:rotate(720deg)
          }
          89.167% {
            transform:rotate(720deg)
          }
          89.583% {
            transform:rotate(720deg)
          }
          90% {
            transform:rotate(720deg)
          }
          90.417% {
            transform:rotate(720deg)
          }
          90.833% {
            transform:rotate(720deg)
          }
          91.25% {
            transform:rotate(720deg)
          }
          91.667% {
            transform:rotate(720deg)
          }
          92.083% {
            transform:rotate(720deg)
          }
          92.5% {
            transform:rotate(720deg)
          }
          92.917% {
            transform:rotate(720deg)
          }
          93.333% {
            transform:rotate(720deg)
          }
          93.75% {
            transform:rotate(720deg)
          }
          94.167% {
            transform:rotate(720deg)
          }
          94.583% {
            transform:rotate(720deg)
          }
          95% {
            transform:rotate(720deg)
          }
          95.417% {
            transform:rotate(720deg)
          }
          95.833% {
            transform:rotate(720deg)
          }
          96.25% {
            transform:rotate(720deg)
          }
          96.667% {
            transform:rotate(720deg)
          }
          97.083% {
            transform:rotate(720deg)
          }
          97.5% {
            transform:rotate(720deg)
          }
          97.917% {
            transform:rotate(720deg)
          }
          98.333% {
            transform:rotate(720deg)
          }
          98.75% {
            transform:rotate(720deg)
          }
          99.167% {
            transform:rotate(720deg)
          }
          99.583% {
            transform:rotate(720deg)
          }
          100% {
            transform:rotate(720deg)
          }
        }
        @keyframes hydro-power {
          0% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          0.417% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          0.833% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          1.25% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          1.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          2.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          2.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          2.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          3.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          3.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          4.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          4.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          5.417% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          5.833% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          6.25% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          6.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          7.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          7.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          7.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          8.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          8.75% {
            d:path("M42 99H42.745M42 98.255L42.745 99L42 99.745")
          }
          9.167% {
            d:path("M42 99H43.472M42 97.528L43.472 99L42 100.472")
          }
          9.583% {
            d:path("M42 99H44.185M42 96.815L44.185 99L42 101.185")
          }
          10% {
            d:path("M42 99H44.883M42 96.117L44.883 99L42 101.883")
          }
          10.417% {
            d:path("M42 99H45.57M42.57 96L45.57 99L42.57 102")
          }
          10.833% {
            d:path("M42 99H46.245M43.245 96L46.245 99L43.245 102")
          }
          11.25% {
            d:path("M42 99H46.91M43.91 96L46.91 99L43.91 102")
          }
          11.667% {
            d:path("M42 99H47.566M44.566 96L47.566 99L44.566 102")
          }
          12.083% {
            d:path("M42 99H48.214M45.214 96L48.214 99L45.214 102")
          }
          12.5% {
            d:path("M42 99H48.854M45.854 96L48.854 99L45.854 102")
          }
          12.917% {
            d:path("M42 99H49.487M46.487 96L49.487 99L46.487 102")
          }
          13.333% {
            d:path("M42 99H50.114M47.114 96L50.114 99L47.114 102")
          }
          13.75% {
            d:path("M42 99H50.734M47.734 96L50.734 99L47.734 102")
          }
          14.167% {
            d:path("M42 99H51.349M48.349 96L51.349 99L48.349 102")
          }
          14.583% {
            d:path("M42 99H51.958M48.958 96L51.958 99L48.958 102")
          }
          15% {
            d:path("M42 99H52.561M49.561 96L52.561 99L49.561 102")
          }
          15.417% {
            d:path("M42 99H53.159M50.159 96L53.159 99L50.159 102")
          }
          15.833% {
            d:path("M42 99H53.75M50.75 96L53.75 99L50.75 102")
          }
          16.25% {
            d:path("M42 99H54.335M51.335 96L54.335 99L51.335 102")
          }
          16.667% {
            d:path("M42 99H54.914M51.914 96L54.914 99L51.914 102")
          }
          17.083% {
            d:path("M42 99H55.485M52.485 96L55.485 99L52.485 102")
          }
          17.5% {
            d:path("M42 99H56.049M53.049 96L56.049 99L53.049 102")
          }
          17.917% {
            d:path("M42 99H56.605M53.605 96L56.605 99L53.605 102")
          }
          18.333% {
            d:path("M42 99H57.151M54.151 96L57.151 99L54.151 102")
          }
          18.75% {
            d:path("M42 99H57.688M54.688 96L57.688 99L54.688 102")
          }
          19.167% {
            d:path("M42 99H58.215M55.215 96L58.215 99L55.215 102")
          }
          19.583% {
            d:path("M42 99H58.731M55.731 96L58.731 99L55.731 102")
          }
          20% {
            d:path("M42 99H59.234M56.234 96L59.234 99L56.234 102")
          }
          20.417% {
            d:path("M42 99H59.724M56.724 96L59.724 99L56.724 102")
          }
          20.833% {
            d:path("M42 99H60.2M57.2 96L60.2 99L57.2 102")
          }
          21.25% {
            d:path("M42 99H60.661M57.661 96L60.661 99L57.661 102")
          }
          21.667% {
            d:path("M42 99H61.105M58.105 96L61.105 99L58.105 102")
          }
          22.083% {
            d:path("M42 99H61.532M58.532 96L61.532 99L58.532 102")
          }
          22.5% {
            d:path("M42 99H61.94M58.94 96L61.94 99L58.94 102")
          }
          22.917% {
            d:path("M42 99H62.329M59.329 96L62.329 99L59.329 102")
          }
          23.333% {
            d:path("M42 99H62.696M59.696 96L62.696 99L59.696 102")
          }
          23.75% {
            d:path("M42 99H63.041M60.041 96L63.041 99L60.041 102")
          }
          24.167% {
            d:path("M42 99H63.363M60.363 96L63.363 99L60.363 102")
          }
          24.583% {
            d:path("M42 99H63.659M60.659 96L63.659 99L60.659 102")
          }
          25% {
            d:path("M42 99H63.93M60.93 96L63.93 99L60.93 102")
          }
          25.417% {
            d:path("M42 99H64.173M61.173 96L64.173 99L61.173 102")
          }
          25.833% {
            d:path("M42 99H64.387M61.387 96L64.387 99L61.387 102")
          }
          26.25% {
            d:path("M42 99H64.572M61.572 96L64.572 99L61.572 102")
          }
          26.667% {
            d:path("M42 99H64.725M61.725 96L64.725 99L61.725 102")
          }
          27.083% {
            d:path("M42 99H64.845M61.845 96L64.845 99L61.845 102")
          }
          27.5% {
            d:path("M42 99H64.932M61.932 96L64.932 99L61.932 102")
          }
          27.917% {
            d:path("M42 99H64.984M61.984 96L64.984 99L61.984 102")
          }
          28.333% {
            d:path("M42 99H65M62 96L65 99L62 102")
          }
          28.75% {
            d:path("M42 99H64.978M61.978 96L64.978 99L61.978 102")
          }
          29.167% {
            d:path("M42 99H64.918M61.918 96L64.918 99L61.918 102")
          }
          29.583% {
            d:path("M42 99H64.819M61.819 96L64.819 99L61.819 102")
          }
          30% {
            d:path("M42 99H64.678M61.678 96L64.678 99L61.678 102")
          }
          30.417% {
            d:path("M42 99H64.496M61.496 96L64.496 99L61.496 102")
          }
          30.833% {
            d:path("M42 99H64.272M61.272 96L64.272 99L61.272 102")
          }
          31.25% {
            d:path("M42 99H64.003M61.003 96L64.003 99L61.003 102")
          }
          31.667% {
            d:path("M42 99H63.691M60.691 96L63.691 99L60.691 102")
          }
          32.083% {
            d:path("M42 99H63.333M60.333 96L63.333 99L60.333 102")
          }
          32.5% {
            d:path("M42 99H62.929M59.929 96L62.929 99L59.929 102")
          }
          32.917% {
            d:path("M42 99H62.479M59.479 96L62.479 99L59.479 102")
          }
          33.333% {
            d:path("M42 99H61.981M58.981 96L61.981 99L58.981 102")
          }
          33.75% {
            d:path("M42 99H61.436M58.436 96L61.436 99L58.436 102")
          }
          34.167% {
            d:path("M42 99H60.842M57.842 96L60.842 99L57.842 102")
          }
          34.583% {
            d:path("M42 99H60.2M57.2 96L60.2 99L57.2 102")
          }
          35% {
            d:path("M42 99H59.509M56.509 96L59.509 99L56.509 102")
          }
          35.417% {
            d:path("M42 99H58.769M55.769 96L58.769 99L55.769 102")
          }
          35.833% {
            d:path("M42 99H57.98M54.98 96L57.98 99L54.98 102")
          }
          36.25% {
            d:path("M42 99H57.142M54.142 96L57.142 99L54.142 102")
          }
          36.667% {
            d:path("M42 99H56.255M53.255 96L56.255 99L53.255 102")
          }
          37.083% {
            d:path("M42 99H55.319M52.319 96L55.319 99L52.319 102")
          }
          37.5% {
            d:path("M42 99H54.335M51.335 96L54.335 99L51.335 102")
          }
          37.917% {
            d:path("M42 99H53.303M50.303 96L53.303 99L50.303 102")
          }
          38.333% {
            d:path("M42 99H52.224M49.224 96L52.224 99L49.224 102")
          }
          38.75% {
            d:path("M42 99H51.098M48.098 96L51.098 99L48.098 102")
          }
          39.167% {
            d:path("M42 99H49.926M46.926 96L49.926 99L46.926 102")
          }
          39.583% {
            d:path("M42 99H48.71M45.71 96L48.71 99L45.71 102")
          }
          40% {
            d:path("M42 99H47.45M44.45 96L47.45 99L44.45 102")
          }
          40.417% {
            d:path("M42 99H46.147M43.147 96L46.147 99L43.147 102")
          }
          40.833% {
            d:path("M42 99H44.804M42 96.196L44.804 99L42 101.804")
          }
          41.25% {
            d:path("M42 99H43.421M42 97.579L43.421 99L42 100.421")
          }
          41.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          42.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          42.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          42.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          43.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          43.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          44.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          44.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          45% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          45.417% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          45.833% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          46.25% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          46.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          47.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          47.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          47.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          48.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          48.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          49.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          49.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          50% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          50.417% {
            d:path("M42 99H40.579M42 97.579L40.579 99L42 100.421")
          }
          50.833% {
            d:path("M42 99H39.196M42 96.196L39.196 99L42 101.804")
          }
          51.25% {
            d:path("M42 99H37.853M40.853 96L37.853 99L40.853 102")
          }
          51.667% {
            d:path("M42 99H36.55M39.55 96L36.55 99L39.55 102")
          }
          52.083% {
            d:path("M42 99H35.29M38.29 96L35.29 99L38.29 102")
          }
          52.5% {
            d:path("M42 99H34.074M37.074 96L34.074 99L37.074 102")
          }
          52.917% {
            d:path("M42 99H32.902M35.902 96L32.902 99L35.902 102")
          }
          53.333% {
            d:path("M42 99H31.776M34.776 96L31.776 99L34.776 102")
          }
          53.75% {
            d:path("M42 99H30.697M33.697 96L30.697 99L33.697 102")
          }
          54.167% {
            d:path("M42 99H29.665M32.665 96L29.665 99L32.665 102")
          }
          54.583% {
            d:path("M42 99H28.681M31.681 96L28.681 99L31.681 102")
          }
          55.0% {
            d:path("M42 99H27.745M30.745 96L27.745 99L30.745 102")
          }
          55.417% {
            d:path("M42 99H26.858M29.858 96L26.858 99L29.858 102")
          }
          55.833% {
            d:path("M42 99H26.02M29.02 96L26.02 99L29.02 102")
          }
          56.25% {
            d:path("M42 99H25.231M28.231 96L25.231 99L28.231 102")
          }
          56.667% {
            d:path("M42 99H24.491M27.491 96L24.491 99L27.491 102")
          }
          57.083% {
            d:path("M42 99H23.8M26.8 96L23.8 99L26.8 102")
          }
          57.5% {
            d:path("M42 99H23.158M26.158 96L23.158 99L26.158 102")
          }
          57.917% {
            d:path("M42 99H22.564M25.564 96L22.564 99L25.564 102")
          }
          58.333% {
            d:path("M42 99H22.019M25.019 96L22.019 99L25.019 102")
          }
          58.75% {
            d:path("M42 99H21.521M24.521 96L21.521 99L24.521 102")
          }
          59.167% {
            d:path("M42 99H21.071M24.071 96L21.071 99L24.071 102")
          }
          59.583% {
            d:path("M42 99H20.667M23.667 96L20.667 99L23.667 102")
          }
          60% {
            d:path("M42 99H20.309M23.309 96L20.309 99L23.309 102")
          }
          60.417% {
            d:path("M42 99H19.997M22.997 96L19.997 99L22.997 102")
          }
          60.833% {
            d:path("M42 99H19.728M22.728 96L19.728 99L22.728 102")
          }
          61.25% {
            d:path("M42 99H19.504M22.504 96L19.504 99L22.504 102")
          }
          61.667% {
            d:path("M42 99H19.322M22.322 96L19.322 99L22.322 102")
          }
          62.083% {
            d:path("M42 99H19.181M22.181 96L19.181 99L22.181 102")
          }
          62.5% {
            d:path("M42 99H19.082M22.082 96L19.082 99L22.082 102")
          }
          62.917% {
            d:path("M42 99H19.022M22.022 96L19.022 99L22.022 102")
          }
          63.333% {
            d:path("M42 99H19M22 96L19 99L22 102")
          }
          63.75% {
            d:path("M42 99H19.016M22.016 96L19.016 99L22.016 102")
          }
          64.167% {
            d:path("M42 99H19.068M22.068 96L19.068 99L22.068 102")
          }
          64.583% {
            d:path("M42 99H19.155M22.155 96L19.155 99L22.155 102")
          }
          65% {
            d:path("M42 99H19.275M22.275 96L19.275 99L22.275 102")
          }
          65.417% {
            d:path("M42 99H19.428M22.428 96L19.428 99L22.428 102")
          }
          65.833% {
            d:path("M42 99H19.613M22.613 96L19.613 99L22.613 102")
          }
          66.25% {
            d:path("M42 99H19.827M22.827 96L19.827 99L22.827 102")
          }
          66.667% {
            d:path("M42 99H20.07M23.07 96L20.07 99L23.07 102")
          }
          67.083% {
            d:path("M42 99H20.341M23.341 96L20.341 99L23.341 102")
          }
          67.5% {
            d:path("M42 99H20.637M23.637 96L20.637 99L23.637 102")
          }
          67.917% {
            d:path("M42 99H20.959M23.959 96L20.959 99L23.959 102")
          }
          68.333% {
            d:path("M42 99H21.304M24.304 96L21.304 99L24.304 102")
          }
          68.75% {
            d:path("M42 99H21.671M24.671 96L21.671 99L24.671 102")
          }
          69.167% {
            d:path("M42 99H22.06M25.06 96L22.06 99L25.06 102")
          }
          69.583% {
            d:path("M42 99H22.468M25.468 96L22.468 99L25.468 102")
          }
          70% {
            d:path("M42 99H22.895M25.895 96L22.895 99L25.895 102")
          }
          70.417% {
            d:path("M42 99H23.339M26.339 96L23.339 99L26.339 102")
          }
          70.833% {
            d:path("M42 99H23.8M26.8 96L23.8 99L26.8 102")
          }
          71.25% {
            d:path("M42 99H24.276M27.276 96L24.276 99L27.276 102")
          }
          71.667% {
            d:path("M42 99H24.766M27.766 96L24.766 99L27.766 102")
          }
          72.083% {
            d:path("M42 99H25.269M28.269 96L25.269 99L28.269 102")
          }
          72.5% {
            d:path("M42 99H25.785M28.785 96L25.785 99L28.785 102")
          }
          72.917% {
            d:path("M42 99H26.312M29.312 96L26.312 99L29.312 102")
          }
          73.333% {
            d:path("M42 99H26.849M29.849 96L26.849 99L29.849 102")
          }
          73.75% {
            d:path("M42 99H27.395M30.395 96L27.395 99L30.395 102")
          }
          74.167% {
            d:path("M42 99H27.951M30.951 96L27.951 99L30.951 102")
          }
          74.583% {
            d:path("M42 99H28.515M31.515 96L28.515 99L31.515 102")
          }
          75% {
            d:path("M42 99H29.086M32.086 96L29.086 99L32.086 102")
          }
          75.417% {
            d:path("M42 99H29.665M32.665 96L29.665 99L32.665 102")
          }
          75.833% {
            d:path("M42 99H30.25M33.25 96L30.25 99L33.25 102")
          }
          76.25% {
            d:path("M42 99H30.841M33.841 96L30.841 99L33.841 102")
          }
          76.667% {
            d:path("M42 99H31.439M34.439 96L31.439 99L34.439 102")
          }
          77.083% {
            d:path("M42 99H32.042M35.042 96L32.042 99L35.042 102")
          }
          77.5% {
            d:path("M42 99H32.651M35.651 96L32.651 99L35.651 102")
          }
          77.917% {
            d:path("M42 99H33.266M36.266 96L33.266 99L36.266 102")
          }
          78.333% {
            d:path("M42 99H33.886M36.886 96L33.886 99L36.886 102")
          }
          78.75% {
            d:path("M42 99H34.513M37.513 96L34.513 99L37.513 102")
          }
          79.167% {
            d:path("M42 99H35.146M38.146 96L35.146 99L38.146 102")
          }
          79.583% {
            d:path("M42 99H35.786M38.786 96L35.786 99L38.786 102")
          }
          80% {
            d:path("M42 99H36.434M39.434 96L36.434 99L39.434 102")
          }
          80.417% {
            d:path("M42 99H37.09M40.09 96L37.09 99L40.09 102")
          }
          80.833% {
            d:path("M42 99H37.755M40.755 96L37.755 99L40.755 102")
          }
          81.25% {
            d:path("M42 99H38.43M41.43 96L38.43 99L41.43 102")
          }
          81.667% {
            d:path("M42 99H39.117M42 96.117L39.117 99L42 101.883")
          }
          82.083% {
            d:path("M42 99H39.815M42 96.815L39.815 99L42 101.185")
          }
          82.5% {
            d:path("M42 99H40.528M42 97.528L40.528 99L42 100.472")
          }
          82.917% {
            d:path("M42 99H41.255M42 98.255L41.255 99L42 99.745")
          }
          83.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          83.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          84.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          84.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          85% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          85.417% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          85.833% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          86.25% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          86.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          87.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          87.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          87.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          88.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          88.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          89.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          89.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          90% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          90.417% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          90.833% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          91.25% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          91.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          92.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          92.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          92.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          93.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          93.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          94.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          94.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          95% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          95.417% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          95.833% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          96.25% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          96.667% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          97.083% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          97.5% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          97.917% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          98.333% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          98.75% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          99.167% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          99.583% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
          100% {
            d:path("M42 99H42M42 99L42 99L42 99")
          }
        }
        @keyframes hydro-direction {
          0% {
            opacity:0;
            transform:rotate(0deg)
          }
          0.417% {
            opacity:0;
            transform:rotate(0deg)
          }
          0.833% {
            opacity:0;
            transform:rotate(0deg)
          }
          1.25% {
            opacity:0;
            transform:rotate(0deg)
          }
          1.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          2.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          2.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          2.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          3.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          3.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          4.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          4.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          5% {
            opacity:0;
            transform:rotate(0deg)
          }
          5.417% {
            opacity:0;
            transform:rotate(0deg)
          }
          5.833% {
            opacity:0;
            transform:rotate(0deg)
          }
          6.25% {
            opacity:0;
            transform:rotate(0deg)
          }
          6.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          7.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          7.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          7.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          8.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          8.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          9.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          9.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          10% {
            opacity:1;
            transform:rotate(180deg)
          }
          10.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          10.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          11.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          11.667% {
            opacity:1;
            transform:rotate(180deg)
          }
          12.083% {
            opacity:1;
            transform:rotate(180deg)
          }
          12.5% {
            opacity:1;
            transform:rotate(180deg)
          }
          12.917% {
            opacity:1;
            transform:rotate(180deg)
          }
          13.333% {
            opacity:1;
            transform:rotate(180deg)
          }
          13.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          14.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          14.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          15% {
            opacity:1;
            transform:rotate(180deg)
          }
          15.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          15.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          16.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          16.667% {
            opacity:1;
            transform:rotate(180deg)
          }
          17.083% {
            opacity:1;
            transform:rotate(180deg)
          }
          17.5% {
            opacity:1;
            transform:rotate(180deg)
          }
          17.917% {
            opacity:1;
            transform:rotate(180deg)
          }
          18.333% {
            opacity:1;
            transform:rotate(180deg)
          }
          18.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          19.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          19.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          20% {
            opacity:1;
            transform:rotate(180deg)
          }
          20.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          20.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          21.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          21.667% {
            opacity:1;
            transform:rotate(180deg)
          }
          22.083% {
            opacity:1;
            transform:rotate(180deg)
          }
          22.5% {
            opacity:1;
            transform:rotate(180deg)
          }
          22.917% {
            opacity:1;
            transform:rotate(180deg)
          }
          23.333% {
            opacity:1;
            transform:rotate(180deg)
          }
          23.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          24.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          24.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          25% {
            opacity:1;
            transform:rotate(180deg)
          }
          25.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          25.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          26.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          26.667% {
            opacity:1;
            transform:rotate(180deg)
          }
          27.083% {
            opacity:1;
            transform:rotate(180deg)
          }
          27.5% {
            opacity:1;
            transform:rotate(180deg)
          }
          27.917% {
            opacity:1;
            transform:rotate(180deg)
          }
          28.333% {
            opacity:1;
            transform:rotate(180deg)
          }
          28.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          29.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          29.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          30% {
            opacity:1;
            transform:rotate(180deg)
          }
          30.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          30.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          31.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          31.667% {
            opacity:1;
            transform:rotate(180deg)
          }
          32.083% {
            opacity:1;
            transform:rotate(180deg)
          }
          32.5% {
            opacity:1;
            transform:rotate(180deg)
          }
          32.917% {
            opacity:1;
            transform:rotate(180deg)
          }
          33.333% {
            opacity:1;
            transform:rotate(180deg)
          }
          33.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          34.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          34.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          35% {
            opacity:1;
            transform:rotate(180deg)
          }
          35.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          35.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          36.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          36.667% {
            opacity:1;
            transform:rotate(180deg)
          }
          37.083% {
            opacity:1;
            transform:rotate(180deg)
          }
          37.5% {
            opacity:1;
            transform:rotate(180deg)
          }
          37.917% {
            opacity:1;
            transform:rotate(180deg)
          }
          38.333% {
            opacity:1;
            transform:rotate(180deg)
          }
          38.75% {
            opacity:1;
            transform:rotate(180deg)
          }
          39.167% {
            opacity:1;
            transform:rotate(180deg)
          }
          39.583% {
            opacity:1;
            transform:rotate(180deg)
          }
          40% {
            opacity:1;
            transform:rotate(180deg)
          }
          40.417% {
            opacity:1;
            transform:rotate(180deg)
          }
          40.833% {
            opacity:1;
            transform:rotate(180deg)
          }
          41.25% {
            opacity:1;
            transform:rotate(180deg)
          }
          41.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          42.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          42.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          42.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          43.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          43.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          44.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          44.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          45% {
            opacity:0;
            transform:rotate(0deg)
          }
          45.417% {
            opacity:0;
            transform:rotate(0deg)
          }
          45.833% {
            opacity:0;
            transform:rotate(0deg)
          }
          46.25% {
            opacity:0;
            transform:rotate(0deg)
          }
          46.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          47.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          47.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          47.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          48.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          48.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          49.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          49.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          50% {
            opacity:0;
            transform:rotate(0deg)
          }
          50.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          50.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          51.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          51.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          52.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          52.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          52.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          53.333% {
            opacity:1;
            transform:rotate(0deg)
          }
          53.75% {
            opacity:1;
            transform:rotate(0deg)
          }
          54.167% {
            opacity:1;
            transform:rotate(0deg)
          }
          54.583% {
            opacity:1;
            transform:rotate(0deg)
          }
          55.0% {
            opacity:1;
            transform:rotate(0deg)
          }
          55.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          55.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          56.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          56.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          57.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          57.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          57.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          58.333% {
            opacity:1;
            transform:rotate(0deg)
          }
          58.75% {
            opacity:1;
            transform:rotate(0deg)
          }
          59.167% {
            opacity:1;
            transform:rotate(0deg)
          }
          59.583% {
            opacity:1;
            transform:rotate(0deg)
          }
          60% {
            opacity:1;
            transform:rotate(0deg)
          }
          60.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          60.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          61.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          61.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          62.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          62.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          62.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          63.333% {
            opacity:1;
            transform:rotate(0deg)
          }
          63.75% {
            opacity:1;
            transform:rotate(0deg)
          }
          64.167% {
            opacity:1;
            transform:rotate(0deg)
          }
          64.583% {
            opacity:1;
            transform:rotate(0deg)
          }
          65% {
            opacity:1;
            transform:rotate(0deg)
          }
          65.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          65.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          66.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          66.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          67.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          67.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          67.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          68.333% {
            opacity:1;
            transform:rotate(0deg)
          }
          68.75% {
            opacity:1;
            transform:rotate(0deg)
          }
          69.167% {
            opacity:1;
            transform:rotate(0deg)
          }
          69.583% {
            opacity:1;
            transform:rotate(0deg)
          }
          70% {
            opacity:1;
            transform:rotate(0deg)
          }
          70.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          70.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          71.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          71.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          72.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          72.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          72.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          73.333% {
            opacity:1;
            transform:rotate(0deg)
          }
          73.75% {
            opacity:1;
            transform:rotate(0deg)
          }
          74.167% {
            opacity:1;
            transform:rotate(0deg)
          }
          74.583% {
            opacity:1;
            transform:rotate(0deg)
          }
          75% {
            opacity:1;
            transform:rotate(0deg)
          }
          75.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          75.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          76.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          76.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          77.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          77.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          77.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          78.333% {
            opacity:1;
            transform:rotate(0deg)
          }
          78.75% {
            opacity:1;
            transform:rotate(0deg)
          }
          79.167% {
            opacity:1;
            transform:rotate(0deg)
          }
          79.583% {
            opacity:1;
            transform:rotate(0deg)
          }
          80% {
            opacity:1;
            transform:rotate(0deg)
          }
          80.417% {
            opacity:1;
            transform:rotate(0deg)
          }
          80.833% {
            opacity:1;
            transform:rotate(0deg)
          }
          81.25% {
            opacity:1;
            transform:rotate(0deg)
          }
          81.667% {
            opacity:1;
            transform:rotate(0deg)
          }
          82.083% {
            opacity:1;
            transform:rotate(0deg)
          }
          82.5% {
            opacity:1;
            transform:rotate(0deg)
          }
          82.917% {
            opacity:1;
            transform:rotate(0deg)
          }
          83.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          83.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          84.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          84.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          85% {
            opacity:0;
            transform:rotate(0deg)
          }
          85.417% {
            opacity:0;
            transform:rotate(0deg)
          }
          85.833% {
            opacity:0;
            transform:rotate(0deg)
          }
          86.25% {
            opacity:0;
            transform:rotate(0deg)
          }
          86.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          87.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          87.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          87.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          88.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          88.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          89.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          89.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          90% {
            opacity:0;
            transform:rotate(0deg)
          }
          90.417% {
            opacity:0;
            transform:rotate(0deg)
          }
          90.833% {
            opacity:0;
            transform:rotate(0deg)
          }
          91.25% {
            opacity:0;
            transform:rotate(0deg)
          }
          91.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          92.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          92.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          92.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          93.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          93.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          94.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          94.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          95% {
            opacity:0;
            transform:rotate(0deg)
          }
          95.417% {
            opacity:0;
            transform:rotate(0deg)
          }
          95.833% {
            opacity:0;
            transform:rotate(0deg)
          }
          96.25% {
            opacity:0;
            transform:rotate(0deg)
          }
          96.667% {
            opacity:0;
            transform:rotate(0deg)
          }
          97.083% {
            opacity:0;
            transform:rotate(0deg)
          }
          97.5% {
            opacity:0;
            transform:rotate(0deg)
          }
          97.917% {
            opacity:0;
            transform:rotate(0deg)
          }
          98.333% {
            opacity:0;
            transform:rotate(0deg)
          }
          98.75% {
            opacity:0;
            transform:rotate(0deg)
          }
          99.167% {
            opacity:0;
            transform:rotate(0deg)
          }
          99.583% {
            opacity:0;
            transform:rotate(0deg)
          }
          100% {
            opacity:0;
            transform:rotate(0deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pumped Hydroelectric Storage">
        <path class="terrain" d="M12 62H61L91 126H132"/>
        <rect class="upper-water" x="16" y="37" width="42" height="20"/>
        <rect class="lower-water" x="88" y="101" width="42" height="20"/>
        <path class="reservoir" d="M16 23V57H58V23M88 87V121H130V87"/>
        <path class="pipe-border" d="M56 51H68L77 99L90 115"/>
        <path class="pipe-bore" d="M56 51H68L77 99L90 115"/>
        <path class="water-flow" pathLength="1" d="M56 51H68L77 99L90 115"/>
        <path class="flow-direction" d="M69.18 70.62L72.31 74L73.96 69.73"/>
        <path class="ink muted" d="M20 99H69"/>
        <rect class="bus" x="14" y="92" width="10" height="14" rx="1"/>
        <path class="power" d="M42 99H20.07M23.07 96L20.07 99L23.07 102"/>
        <circle class="machine" cx="77" cy="99" r="8"/>
        <g transform="translate(77 99)">
          <path class="hydro-rotor" d="M0 0L0-6M0 0L5.196 3M0 0L-5.196 3"/>
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

if (!customElements.get("concept-pumped-hydroelectric-storage")) {
  customElements.define("concept-pumped-hydroelectric-storage", ConceptPumpedHydroelectricStorage);
}
