// Molten-Salt Thermal Storage. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMoltenSaltThermalStorage extends HTMLElement {
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
        .sunlight {
          opacity:0;
          animation:salt-sun 12s linear infinite
        }
        .sun {
          fill:#f3c977
        }
        .rays {
          fill:none;
          stroke:#f3c977;
          stroke-width:1
        }
        .tank {
          fill:#151c13;
          stroke:#91815a;
          stroke-width:1.3
        }
        .cold-salt {
          fill:#936b32;
          animation:salt-cold-depth 12s linear infinite
        }
        .hot-salt {
          fill:#eab85e;
          animation:salt-hot-depth 12s linear infinite
        }
        .insulation {
          fill:none;
          stroke:#375b51;
          stroke-width:1;
          stroke-dasharray:2 2
        }
        .charge-cold,.discharge-cold {
          fill:none;
          stroke:#936b32;
          stroke-width:1.5
        }
        .charge-hot,.discharge-hot {
          fill:none;
          stroke:#eab85e;
          stroke-width:1.5
        }
        .receiver {
          fill:#32251b;
          stroke:#f3c977;
          stroke-width:1.4
        }
        .receiver-coil {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1
        }
        .heat-exchanger {
          fill:#11241b;
          stroke:#375b51;
          stroke-width:1.2
        }
        .salt-channel {
          stroke:#dca25e;
          stroke-width:1.5
        }
        .exchanger-wall {
          stroke:#375b51;
          stroke-width:1
        }
        .power-block {
          fill:#11261a;
          stroke:#70edb1;
          stroke-width:1.2
        }
        .power-wheel {
          fill:none;
          stroke:#70edb1;
          stroke-width:1;
          stroke-dasharray:2 3
        }
        .thermal-flow {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.3;
          animation:salt-discharge 12s linear infinite
        }
        .electrical-flow {
          opacity: .35;
          fill:none;
          stroke:#70edb1;
          stroke-width:1.3;
          animation:salt-electricity 12s linear infinite
        }
        .rejection-flow {
          opacity: .65;
          fill:none;
          stroke:#ed8eab;
          stroke-width:1;
          animation:salt-rejection 12s linear infinite
        }
        .charge-flow {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.3;
          stroke-dasharray:3 9;
          opacity:0;
          animation:salt-charge 12s linear infinite,salt-flow 1s linear infinite
        }
        .discharge-flow {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.3;
          stroke-dasharray:3 9;
          animation:salt-discharge 12s linear infinite,salt-flow 1s linear infinite
        }
        @keyframes salt-cold-depth {
          0.0000% {
            y:77px;
            height:36px
          }
          0.4167% {
            y:77px;
            height:36px
          }
          0.8333% {
            y:77px;
            height:36px
          }
          1.2500% {
            y:77px;
            height:36px
          }
          1.6667% {
            y:77px;
            height:36px
          }
          2.0833% {
            y:77px;
            height:36px
          }
          2.5000% {
            y:77px;
            height:36px
          }
          2.9167% {
            y:77px;
            height:36px
          }
          3.3333% {
            y:77px;
            height:36px
          }
          3.7500% {
            y:77px;
            height:36px
          }
          4.1667% {
            y:77px;
            height:36px
          }
          4.5833% {
            y:77px;
            height:36px
          }
          5.0000% {
            y:77px;
            height:36px
          }
          5.4167% {
            y:77px;
            height:36px
          }
          5.8333% {
            y:77px;
            height:36px
          }
          6.2500% {
            y:77px;
            height:36px
          }
          6.6667% {
            y:77px;
            height:36px
          }
          7.0833% {
            y:77px;
            height:36px
          }
          7.5000% {
            y:77px;
            height:36px
          }
          7.9167% {
            y:77px;
            height:36px
          }
          8.3333% {
            y:77px;
            height:36px
          }
          8.7500% {
            y:77.01px;
            height:35.99px
          }
          9.1667% {
            y:77.041px;
            height:35.959px
          }
          9.5833% {
            y:77.09px;
            height:35.91px
          }
          10.0000% {
            y:77.1595px;
            height:35.8405px
          }
          10.4167% {
            y:77.247px;
            height:35.753px
          }
          10.8333% {
            y:77.353px;
            height:35.647px
          }
          11.2500% {
            y:77.476px;
            height:35.524px
          }
          11.6667% {
            y:77.616px;
            height:35.384px
          }
          12.0833% {
            y:77.773px;
            height:35.227px
          }
          12.5000% {
            y:77.945px;
            height:35.055px
          }
          12.9167% {
            y:78.133px;
            height:34.867px
          }
          13.3333% {
            y:78.3365px;
            height:34.6635px
          }
          13.7500% {
            y:78.554px;
            height:34.446px
          }
          14.1667% {
            y:78.785px;
            height:34.215px
          }
          14.5833% {
            y:79.03px;
            height:33.97px
          }
          15.0000% {
            y:79.288px;
            height:33.712px
          }
          15.4167% {
            y:79.558px;
            height:33.442px
          }
          15.8333% {
            y:79.84px;
            height:33.16px
          }
          16.2500% {
            y:80.133px;
            height:32.867px
          }
          16.6667% {
            y:80.4375px;
            height:32.5625px
          }
          17.0833% {
            y:80.752px;
            height:32.248px
          }
          17.5000% {
            y:81.076px;
            height:31.924px
          }
          17.9167% {
            y:81.41px;
            height:31.59px
          }
          18.3333% {
            y:81.752px;
            height:31.248px
          }
          18.7500% {
            y:82.103px;
            height:30.897px
          }
          19.1667% {
            y:82.461px;
            height:30.539px
          }
          19.5833% {
            y:82.826px;
            height:30.174px
          }
          20.0000% {
            y:83.1985px;
            height:29.8015px
          }
          20.4167% {
            y:83.577px;
            height:29.423px
          }
          20.8333% {
            y:83.961px;
            height:29.039px
          }
          21.2500% {
            y:84.35px;
            height:28.65px
          }
          21.6667% {
            y:84.744px;
            height:28.256px
          }
          22.0833% {
            y:85.142px;
            height:27.858px
          }
          22.5000% {
            y:85.544px;
            height:27.456px
          }
          22.9167% {
            y:85.948px;
            height:27.052px
          }
          23.3333% {
            y:86.3555px;
            height:26.6445px
          }
          23.7500% {
            y:86.765px;
            height:26.235px
          }
          24.1667% {
            y:87.176px;
            height:25.824px
          }
          24.5833% {
            y:87.588px;
            height:25.412px
          }
          25.0000% {
            y:88px;
            height:25px
          }
          25.4167% {
            y:88.412px;
            height:24.588px
          }
          25.8333% {
            y:88.824px;
            height:24.176px
          }
          26.2500% {
            y:89.235px;
            height:23.765px
          }
          26.6667% {
            y:89.645px;
            height:23.3555px
          }
          27.0833% {
            y:90.052px;
            height:22.948px
          }
          27.5000% {
            y:90.456px;
            height:22.544px
          }
          27.9167% {
            y:90.858px;
            height:22.142px
          }
          28.3333% {
            y:91.256px;
            height:21.744px
          }
          28.7500% {
            y:91.65px;
            height:21.35px
          }
          29.1667% {
            y:92.039px;
            height:20.961px
          }
          29.5833% {
            y:92.423px;
            height:20.577px
          }
          30.0000% {
            y:92.8015px;
            height:20.199px
          }
          30.4167% {
            y:93.174px;
            height:19.826px
          }
          30.8333% {
            y:93.539px;
            height:19.461px
          }
          31.2500% {
            y:93.897px;
            height:19.103px
          }
          31.6667% {
            y:94.248px;
            height:18.752px
          }
          32.0833% {
            y:94.59px;
            height:18.41px
          }
          32.5000% {
            y:94.924px;
            height:18.076px
          }
          32.9167% {
            y:95.248px;
            height:17.752px
          }
          33.3333% {
            y:95.5625px;
            height:17.4375px
          }
          33.7500% {
            y:95.867px;
            height:17.133px
          }
          34.1667% {
            y:96.16px;
            height:16.84px
          }
          34.5833% {
            y:96.442px;
            height:16.558px
          }
          35.0000% {
            y:96.712px;
            height:16.288px
          }
          35.4167% {
            y:96.97px;
            height:16.03px
          }
          35.8333% {
            y:97.215px;
            height:15.785px
          }
          36.2500% {
            y:97.446px;
            height:15.554px
          }
          36.6667% {
            y:97.6635px;
            height:15.336px
          }
          37.0833% {
            y:97.867px;
            height:15.133px
          }
          37.5000% {
            y:98.055px;
            height:14.945px
          }
          37.9167% {
            y:98.227px;
            height:14.773px
          }
          38.3333% {
            y:98.384px;
            height:14.616px
          }
          38.7500% {
            y:98.524px;
            height:14.476px
          }
          39.1667% {
            y:98.647px;
            height:14.353px
          }
          39.5833% {
            y:98.753px;
            height:14.247px
          }
          40.0000% {
            y:98.84px;
            height:14.16px
          }
          40.4167% {
            y:98.91px;
            height:14.09px
          }
          40.8333% {
            y:98.959px;
            height:14.041px
          }
          41.2500% {
            y:98.99px;
            height:14.01px
          }
          41.6667% {
            y:99px;
            height:14px
          }
          42.0833% {
            y:99px;
            height:14px
          }
          42.5000% {
            y:99px;
            height:14px
          }
          42.9167% {
            y:99px;
            height:14px
          }
          43.3333% {
            y:99px;
            height:14px
          }
          43.7500% {
            y:99px;
            height:14px
          }
          44.1667% {
            y:99px;
            height:14px
          }
          44.5833% {
            y:99px;
            height:14px
          }
          45.0000% {
            y:99px;
            height:14px
          }
          45.4167% {
            y:99px;
            height:14px
          }
          45.8333% {
            y:99px;
            height:14px
          }
          46.2500% {
            y:99px;
            height:14px
          }
          46.6667% {
            y:99px;
            height:14px
          }
          47.0833% {
            y:99px;
            height:14px
          }
          47.5000% {
            y:99px;
            height:14px
          }
          47.9167% {
            y:99px;
            height:14px
          }
          48.3333% {
            y:99px;
            height:14px
          }
          48.7500% {
            y:99px;
            height:14px
          }
          49.1667% {
            y:99px;
            height:14px
          }
          49.5833% {
            y:99px;
            height:14px
          }
          50.0000% {
            y:99px;
            height:14px
          }
          50.4167% {
            y:98.99px;
            height:14.01px
          }
          50.8333% {
            y:98.959px;
            height:14.041px
          }
          51.2500% {
            y:98.91px;
            height:14.09px
          }
          51.6667% {
            y:98.84px;
            height:14.16px
          }
          52.0833% {
            y:98.753px;
            height:14.247px
          }
          52.5000% {
            y:98.647px;
            height:14.353px
          }
          52.9167% {
            y:98.524px;
            height:14.476px
          }
          53.3333% {
            y:98.384px;
            height:14.616px
          }
          53.7500% {
            y:98.227px;
            height:14.773px
          }
          54.1667% {
            y:98.055px;
            height:14.945px
          }
          54.5833% {
            y:97.867px;
            height:15.133px
          }
          55.0000% {
            y:97.6635px;
            height:15.337px
          }
          55.4167% {
            y:97.446px;
            height:15.554px
          }
          55.8333% {
            y:97.215px;
            height:15.785px
          }
          56.2500% {
            y:96.97px;
            height:16.03px
          }
          56.6667% {
            y:96.712px;
            height:16.288px
          }
          57.0833% {
            y:96.442px;
            height:16.558px
          }
          57.5000% {
            y:96.16px;
            height:16.84px
          }
          57.9167% {
            y:95.867px;
            height:17.133px
          }
          58.3333% {
            y:95.5625px;
            height:17.4375px
          }
          58.7500% {
            y:95.248px;
            height:17.752px
          }
          59.1667% {
            y:94.924px;
            height:18.076px
          }
          59.5833% {
            y:94.59px;
            height:18.41px
          }
          60.0000% {
            y:94.248px;
            height:18.752px
          }
          60.4167% {
            y:93.897px;
            height:19.103px
          }
          60.8333% {
            y:93.539px;
            height:19.461px
          }
          61.2500% {
            y:93.174px;
            height:19.826px
          }
          61.6667% {
            y:92.8015px;
            height:20.199px
          }
          62.0833% {
            y:92.423px;
            height:20.577px
          }
          62.5000% {
            y:92.039px;
            height:20.961px
          }
          62.9167% {
            y:91.65px;
            height:21.35px
          }
          63.3333% {
            y:91.256px;
            height:21.744px
          }
          63.7500% {
            y:90.858px;
            height:22.142px
          }
          64.1667% {
            y:90.456px;
            height:22.544px
          }
          64.5833% {
            y:90.052px;
            height:22.948px
          }
          65.0000% {
            y:89.6445px;
            height:23.3555px
          }
          65.4167% {
            y:89.235px;
            height:23.765px
          }
          65.8333% {
            y:88.824px;
            height:24.176px
          }
          66.2500% {
            y:88.412px;
            height:24.588px
          }
          66.6667% {
            y:88px;
            height:25px
          }
          67.0833% {
            y:87.588px;
            height:25.412px
          }
          67.5000% {
            y:87.176px;
            height:25.824px
          }
          67.9167% {
            y:86.765px;
            height:26.235px
          }
          68.3333% {
            y:86.3555px;
            height:26.644px
          }
          68.7500% {
            y:85.948px;
            height:27.052px
          }
          69.1667% {
            y:85.544px;
            height:27.456px
          }
          69.5833% {
            y:85.142px;
            height:27.858px
          }
          70.0000% {
            y:84.744px;
            height:28.256px
          }
          70.4167% {
            y:84.35px;
            height:28.65px
          }
          70.8333% {
            y:83.961px;
            height:29.039px
          }
          71.2500% {
            y:83.577px;
            height:29.423px
          }
          71.6667% {
            y:83.199px;
            height:29.801px
          }
          72.0833% {
            y:82.826px;
            height:30.174px
          }
          72.5000% {
            y:82.461px;
            height:30.539px
          }
          72.9167% {
            y:82.103px;
            height:30.897px
          }
          73.3333% {
            y:81.752px;
            height:31.248px
          }
          73.7500% {
            y:81.41px;
            height:31.59px
          }
          74.1667% {
            y:81.076px;
            height:31.924px
          }
          74.5833% {
            y:80.752px;
            height:32.248px
          }
          75.0000% {
            y:80.4375px;
            height:32.5625px
          }
          75.4167% {
            y:80.133px;
            height:32.867px
          }
          75.8333% {
            y:79.84px;
            height:33.16px
          }
          76.2500% {
            y:79.558px;
            height:33.442px
          }
          76.6667% {
            y:79.288px;
            height:33.712px
          }
          77.0833% {
            y:79.03px;
            height:33.97px
          }
          77.5000% {
            y:78.785px;
            height:34.215px
          }
          77.9167% {
            y:78.554px;
            height:34.446px
          }
          78.3333% {
            y:78.3365px;
            height:34.664px
          }
          78.7500% {
            y:78.133px;
            height:34.867px
          }
          79.1667% {
            y:77.945px;
            height:35.055px
          }
          79.5833% {
            y:77.773px;
            height:35.227px
          }
          80.0000% {
            y:77.616px;
            height:35.384px
          }
          80.4167% {
            y:77.476px;
            height:35.524px
          }
          80.8333% {
            y:77.353px;
            height:35.647px
          }
          81.2500% {
            y:77.247px;
            height:35.753px
          }
          81.6667% {
            y:77.1595px;
            height:35.8405px
          }
          82.0833% {
            y:77.09px;
            height:35.91px
          }
          82.5000% {
            y:77.041px;
            height:35.959px
          }
          82.9167% {
            y:77.01px;
            height:35.99px
          }
          83.3333% {
            y:77px;
            height:36px
          }
          83.7500% {
            y:77px;
            height:36px
          }
          84.1667% {
            y:77px;
            height:36px
          }
          84.5833% {
            y:77px;
            height:36px
          }
          85.0000% {
            y:77px;
            height:36px
          }
          85.4167% {
            y:77px;
            height:36px
          }
          85.8333% {
            y:77px;
            height:36px
          }
          86.2500% {
            y:77px;
            height:36px
          }
          86.6667% {
            y:77px;
            height:36px
          }
          87.0833% {
            y:77px;
            height:36px
          }
          87.5000% {
            y:77px;
            height:36px
          }
          87.9167% {
            y:77px;
            height:36px
          }
          88.3333% {
            y:77px;
            height:36px
          }
          88.7500% {
            y:77px;
            height:36px
          }
          89.1667% {
            y:77px;
            height:36px
          }
          89.5833% {
            y:77px;
            height:36px
          }
          90.0000% {
            y:77px;
            height:36px
          }
          90.4167% {
            y:77px;
            height:36px
          }
          90.8333% {
            y:77px;
            height:36px
          }
          91.2500% {
            y:77px;
            height:36px
          }
          91.6667% {
            y:77px;
            height:36px
          }
          92.0833% {
            y:77px;
            height:36px
          }
          92.5000% {
            y:77px;
            height:36px
          }
          92.9167% {
            y:77px;
            height:36px
          }
          93.3333% {
            y:77px;
            height:36px
          }
          93.7500% {
            y:77px;
            height:36px
          }
          94.1667% {
            y:77px;
            height:36px
          }
          94.5833% {
            y:77px;
            height:36px
          }
          95.0000% {
            y:77px;
            height:36px
          }
          95.4167% {
            y:77px;
            height:36px
          }
          95.8333% {
            y:77px;
            height:36px
          }
          96.2500% {
            y:77px;
            height:36px
          }
          96.6667% {
            y:77px;
            height:36px
          }
          97.0833% {
            y:77px;
            height:36px
          }
          97.5000% {
            y:77px;
            height:36px
          }
          97.9167% {
            y:77px;
            height:36px
          }
          98.3333% {
            y:77px;
            height:36px
          }
          98.7500% {
            y:77px;
            height:36px
          }
          99.1667% {
            y:77px;
            height:36px
          }
          99.5833% {
            y:77px;
            height:36px
          }
          100.0000% {
            y:77px;
            height:36px
          }
        }
        @keyframes salt-hot-depth {
          0.0000% {
            y:99px;
            height:14px
          }
          0.4167% {
            y:99px;
            height:14px
          }
          0.8333% {
            y:99px;
            height:14px
          }
          1.2500% {
            y:99px;
            height:14px
          }
          1.6667% {
            y:99px;
            height:14px
          }
          2.0833% {
            y:99px;
            height:14px
          }
          2.5000% {
            y:99px;
            height:14px
          }
          2.9167% {
            y:99px;
            height:14px
          }
          3.3333% {
            y:99px;
            height:14px
          }
          3.7500% {
            y:99px;
            height:14px
          }
          4.1667% {
            y:99px;
            height:14px
          }
          4.5833% {
            y:99px;
            height:14px
          }
          5.0000% {
            y:99px;
            height:14px
          }
          5.4167% {
            y:99px;
            height:14px
          }
          5.8333% {
            y:99px;
            height:14px
          }
          6.2500% {
            y:99px;
            height:14px
          }
          6.6667% {
            y:99px;
            height:14px
          }
          7.0833% {
            y:99px;
            height:14px
          }
          7.5000% {
            y:99px;
            height:14px
          }
          7.9167% {
            y:99px;
            height:14px
          }
          8.3333% {
            y:99px;
            height:14px
          }
          8.7500% {
            y:98.99px;
            height:14.01px
          }
          9.1667% {
            y:98.959px;
            height:14.041px
          }
          9.5833% {
            y:98.91px;
            height:14.09px
          }
          10.0000% {
            y:98.8405px;
            height:14.1595px
          }
          10.4167% {
            y:98.753px;
            height:14.247px
          }
          10.8333% {
            y:98.647px;
            height:14.353px
          }
          11.2500% {
            y:98.524px;
            height:14.476px
          }
          11.6667% {
            y:98.384px;
            height:14.616px
          }
          12.0833% {
            y:98.227px;
            height:14.773px
          }
          12.5000% {
            y:98.055px;
            height:14.945px
          }
          12.9167% {
            y:97.867px;
            height:15.133px
          }
          13.3333% {
            y:97.6635px;
            height:15.337px
          }
          13.7500% {
            y:97.446px;
            height:15.554px
          }
          14.1667% {
            y:97.215px;
            height:15.785px
          }
          14.5833% {
            y:96.97px;
            height:16.03px
          }
          15.0000% {
            y:96.712px;
            height:16.288px
          }
          15.4167% {
            y:96.442px;
            height:16.558px
          }
          15.8333% {
            y:96.16px;
            height:16.84px
          }
          16.2500% {
            y:95.867px;
            height:17.133px
          }
          16.6667% {
            y:95.5625px;
            height:17.4375px
          }
          17.0833% {
            y:95.248px;
            height:17.752px
          }
          17.5000% {
            y:94.924px;
            height:18.076px
          }
          17.9167% {
            y:94.59px;
            height:18.41px
          }
          18.3333% {
            y:94.248px;
            height:18.752px
          }
          18.7500% {
            y:93.897px;
            height:19.103px
          }
          19.1667% {
            y:93.539px;
            height:19.461px
          }
          19.5833% {
            y:93.174px;
            height:19.826px
          }
          20.0000% {
            y:92.8015px;
            height:20.1985px
          }
          20.4167% {
            y:92.423px;
            height:20.577px
          }
          20.8333% {
            y:92.039px;
            height:20.961px
          }
          21.2500% {
            y:91.65px;
            height:21.35px
          }
          21.6667% {
            y:91.256px;
            height:21.744px
          }
          22.0833% {
            y:90.858px;
            height:22.142px
          }
          22.5000% {
            y:90.456px;
            height:22.544px
          }
          22.9167% {
            y:90.052px;
            height:22.948px
          }
          23.3333% {
            y:89.6445px;
            height:23.3555px
          }
          23.7500% {
            y:89.235px;
            height:23.765px
          }
          24.1667% {
            y:88.824px;
            height:24.176px
          }
          24.5833% {
            y:88.412px;
            height:24.588px
          }
          25.0000% {
            y:88px;
            height:25px
          }
          25.4167% {
            y:87.588px;
            height:25.412px
          }
          25.8333% {
            y:87.176px;
            height:25.824px
          }
          26.2500% {
            y:86.765px;
            height:26.235px
          }
          26.6667% {
            y:86.355px;
            height:26.6445px
          }
          27.0833% {
            y:85.948px;
            height:27.052px
          }
          27.5000% {
            y:85.544px;
            height:27.456px
          }
          27.9167% {
            y:85.142px;
            height:27.858px
          }
          28.3333% {
            y:84.744px;
            height:28.256px
          }
          28.7500% {
            y:84.35px;
            height:28.65px
          }
          29.1667% {
            y:83.961px;
            height:29.039px
          }
          29.5833% {
            y:83.577px;
            height:29.423px
          }
          30.0000% {
            y:83.1985px;
            height:29.801px
          }
          30.4167% {
            y:82.826px;
            height:30.174px
          }
          30.8333% {
            y:82.461px;
            height:30.539px
          }
          31.2500% {
            y:82.103px;
            height:30.897px
          }
          31.6667% {
            y:81.752px;
            height:31.248px
          }
          32.0833% {
            y:81.41px;
            height:31.59px
          }
          32.5000% {
            y:81.076px;
            height:31.924px
          }
          32.9167% {
            y:80.752px;
            height:32.248px
          }
          33.3333% {
            y:80.4375px;
            height:32.5625px
          }
          33.7500% {
            y:80.133px;
            height:32.867px
          }
          34.1667% {
            y:79.84px;
            height:33.16px
          }
          34.5833% {
            y:79.558px;
            height:33.442px
          }
          35.0000% {
            y:79.288px;
            height:33.712px
          }
          35.4167% {
            y:79.03px;
            height:33.97px
          }
          35.8333% {
            y:78.785px;
            height:34.215px
          }
          36.2500% {
            y:78.554px;
            height:34.446px
          }
          36.6667% {
            y:78.3365px;
            height:34.6635px
          }
          37.0833% {
            y:78.133px;
            height:34.867px
          }
          37.5000% {
            y:77.945px;
            height:35.055px
          }
          37.9167% {
            y:77.773px;
            height:35.227px
          }
          38.3333% {
            y:77.616px;
            height:35.384px
          }
          38.7500% {
            y:77.476px;
            height:35.524px
          }
          39.1667% {
            y:77.353px;
            height:35.647px
          }
          39.5833% {
            y:77.247px;
            height:35.753px
          }
          40.0000% {
            y:77.16px;
            height:35.84px
          }
          40.4167% {
            y:77.09px;
            height:35.91px
          }
          40.8333% {
            y:77.041px;
            height:35.959px
          }
          41.2500% {
            y:77.01px;
            height:35.99px
          }
          41.6667% {
            y:77px;
            height:36px
          }
          42.0833% {
            y:77px;
            height:36px
          }
          42.5000% {
            y:77px;
            height:36px
          }
          42.9167% {
            y:77px;
            height:36px
          }
          43.3333% {
            y:77px;
            height:36px
          }
          43.7500% {
            y:77px;
            height:36px
          }
          44.1667% {
            y:77px;
            height:36px
          }
          44.5833% {
            y:77px;
            height:36px
          }
          45.0000% {
            y:77px;
            height:36px
          }
          45.4167% {
            y:77px;
            height:36px
          }
          45.8333% {
            y:77px;
            height:36px
          }
          46.2500% {
            y:77px;
            height:36px
          }
          46.6667% {
            y:77px;
            height:36px
          }
          47.0833% {
            y:77px;
            height:36px
          }
          47.5000% {
            y:77px;
            height:36px
          }
          47.9167% {
            y:77px;
            height:36px
          }
          48.3333% {
            y:77px;
            height:36px
          }
          48.7500% {
            y:77px;
            height:36px
          }
          49.1667% {
            y:77px;
            height:36px
          }
          49.5833% {
            y:77px;
            height:36px
          }
          50.0000% {
            y:77px;
            height:36px
          }
          50.4167% {
            y:77.01px;
            height:35.99px
          }
          50.8333% {
            y:77.041px;
            height:35.959px
          }
          51.2500% {
            y:77.09px;
            height:35.91px
          }
          51.6667% {
            y:77.16px;
            height:35.8405px
          }
          52.0833% {
            y:77.247px;
            height:35.753px
          }
          52.5000% {
            y:77.353px;
            height:35.647px
          }
          52.9167% {
            y:77.476px;
            height:35.524px
          }
          53.3333% {
            y:77.616px;
            height:35.384px
          }
          53.7500% {
            y:77.773px;
            height:35.227px
          }
          54.1667% {
            y:77.945px;
            height:35.055px
          }
          54.5833% {
            y:78.133px;
            height:34.867px
          }
          55.0000% {
            y:78.3365px;
            height:34.6635px
          }
          55.4167% {
            y:78.554px;
            height:34.446px
          }
          55.8333% {
            y:78.785px;
            height:34.215px
          }
          56.2500% {
            y:79.03px;
            height:33.97px
          }
          56.6667% {
            y:79.288px;
            height:33.712px
          }
          57.0833% {
            y:79.558px;
            height:33.442px
          }
          57.5000% {
            y:79.84px;
            height:33.16px
          }
          57.9167% {
            y:80.133px;
            height:32.867px
          }
          58.3333% {
            y:80.4375px;
            height:32.5625px
          }
          58.7500% {
            y:80.752px;
            height:32.248px
          }
          59.1667% {
            y:81.076px;
            height:31.924px
          }
          59.5833% {
            y:81.41px;
            height:31.59px
          }
          60.0000% {
            y:81.752px;
            height:31.248px
          }
          60.4167% {
            y:82.103px;
            height:30.897px
          }
          60.8333% {
            y:82.461px;
            height:30.539px
          }
          61.2500% {
            y:82.826px;
            height:30.174px
          }
          61.6667% {
            y:83.1985px;
            height:29.801px
          }
          62.0833% {
            y:83.577px;
            height:29.423px
          }
          62.5000% {
            y:83.961px;
            height:29.039px
          }
          62.9167% {
            y:84.35px;
            height:28.65px
          }
          63.3333% {
            y:84.744px;
            height:28.256px
          }
          63.7500% {
            y:85.142px;
            height:27.858px
          }
          64.1667% {
            y:85.544px;
            height:27.456px
          }
          64.5833% {
            y:85.948px;
            height:27.052px
          }
          65.0000% {
            y:86.3555px;
            height:26.6445px
          }
          65.4167% {
            y:86.765px;
            height:26.235px
          }
          65.8333% {
            y:87.176px;
            height:25.824px
          }
          66.2500% {
            y:87.588px;
            height:25.412px
          }
          66.6667% {
            y:88px;
            height:25px
          }
          67.0833% {
            y:88.412px;
            height:24.588px
          }
          67.5000% {
            y:88.824px;
            height:24.176px
          }
          67.9167% {
            y:89.235px;
            height:23.765px
          }
          68.3333% {
            y:89.6445px;
            height:23.356px
          }
          68.7500% {
            y:90.052px;
            height:22.948px
          }
          69.1667% {
            y:90.456px;
            height:22.544px
          }
          69.5833% {
            y:90.858px;
            height:22.142px
          }
          70.0000% {
            y:91.256px;
            height:21.744px
          }
          70.4167% {
            y:91.65px;
            height:21.35px
          }
          70.8333% {
            y:92.039px;
            height:20.961px
          }
          71.2500% {
            y:92.423px;
            height:20.577px
          }
          71.6667% {
            y:92.801px;
            height:20.199px
          }
          72.0833% {
            y:93.174px;
            height:19.826px
          }
          72.5000% {
            y:93.539px;
            height:19.461px
          }
          72.9167% {
            y:93.897px;
            height:19.103px
          }
          73.3333% {
            y:94.248px;
            height:18.752px
          }
          73.7500% {
            y:94.59px;
            height:18.41px
          }
          74.1667% {
            y:94.924px;
            height:18.076px
          }
          74.5833% {
            y:95.248px;
            height:17.752px
          }
          75.0000% {
            y:95.5625px;
            height:17.4375px
          }
          75.4167% {
            y:95.867px;
            height:17.133px
          }
          75.8333% {
            y:96.16px;
            height:16.84px
          }
          76.2500% {
            y:96.442px;
            height:16.558px
          }
          76.6667% {
            y:96.712px;
            height:16.288px
          }
          77.0833% {
            y:96.97px;
            height:16.03px
          }
          77.5000% {
            y:97.215px;
            height:15.785px
          }
          77.9167% {
            y:97.446px;
            height:15.554px
          }
          78.3333% {
            y:97.6635px;
            height:15.336px
          }
          78.7500% {
            y:97.867px;
            height:15.133px
          }
          79.1667% {
            y:98.055px;
            height:14.945px
          }
          79.5833% {
            y:98.227px;
            height:14.773px
          }
          80.0000% {
            y:98.384px;
            height:14.616px
          }
          80.4167% {
            y:98.524px;
            height:14.476px
          }
          80.8333% {
            y:98.647px;
            height:14.353px
          }
          81.2500% {
            y:98.753px;
            height:14.247px
          }
          81.6667% {
            y:98.8405px;
            height:14.1595px
          }
          82.0833% {
            y:98.91px;
            height:14.09px
          }
          82.5000% {
            y:98.959px;
            height:14.041px
          }
          82.9167% {
            y:98.99px;
            height:14.01px
          }
          83.3333% {
            y:99px;
            height:14px
          }
          83.7500% {
            y:99px;
            height:14px
          }
          84.1667% {
            y:99px;
            height:14px
          }
          84.5833% {
            y:99px;
            height:14px
          }
          85.0000% {
            y:99px;
            height:14px
          }
          85.4167% {
            y:99px;
            height:14px
          }
          85.8333% {
            y:99px;
            height:14px
          }
          86.2500% {
            y:99px;
            height:14px
          }
          86.6667% {
            y:99px;
            height:14px
          }
          87.0833% {
            y:99px;
            height:14px
          }
          87.5000% {
            y:99px;
            height:14px
          }
          87.9167% {
            y:99px;
            height:14px
          }
          88.3333% {
            y:99px;
            height:14px
          }
          88.7500% {
            y:99px;
            height:14px
          }
          89.1667% {
            y:99px;
            height:14px
          }
          89.5833% {
            y:99px;
            height:14px
          }
          90.0000% {
            y:99px;
            height:14px
          }
          90.4167% {
            y:99px;
            height:14px
          }
          90.8333% {
            y:99px;
            height:14px
          }
          91.2500% {
            y:99px;
            height:14px
          }
          91.6667% {
            y:99px;
            height:14px
          }
          92.0833% {
            y:99px;
            height:14px
          }
          92.5000% {
            y:99px;
            height:14px
          }
          92.9167% {
            y:99px;
            height:14px
          }
          93.3333% {
            y:99px;
            height:14px
          }
          93.7500% {
            y:99px;
            height:14px
          }
          94.1667% {
            y:99px;
            height:14px
          }
          94.5833% {
            y:99px;
            height:14px
          }
          95.0000% {
            y:99px;
            height:14px
          }
          95.4167% {
            y:99px;
            height:14px
          }
          95.8333% {
            y:99px;
            height:14px
          }
          96.2500% {
            y:99px;
            height:14px
          }
          96.6667% {
            y:99px;
            height:14px
          }
          97.0833% {
            y:99px;
            height:14px
          }
          97.5000% {
            y:99px;
            height:14px
          }
          97.9167% {
            y:99px;
            height:14px
          }
          98.3333% {
            y:99px;
            height:14px
          }
          98.7500% {
            y:99px;
            height:14px
          }
          99.1667% {
            y:99px;
            height:14px
          }
          99.5833% {
            y:99px;
            height:14px
          }
          100.0000% {
            y:99px;
            height:14px
          }
        }
        @keyframes salt-sun {
          0.0000% {
            opacity:1
          }
          0.4167% {
            opacity:1
          }
          0.8333% {
            opacity:1
          }
          1.2500% {
            opacity:1
          }
          1.6667% {
            opacity:1
          }
          2.0833% {
            opacity:1
          }
          2.5000% {
            opacity:1
          }
          2.9167% {
            opacity:1
          }
          3.3333% {
            opacity:1
          }
          3.7500% {
            opacity:1
          }
          4.1667% {
            opacity:1
          }
          4.5833% {
            opacity:1
          }
          5.0000% {
            opacity:1
          }
          5.4167% {
            opacity:1
          }
          5.8333% {
            opacity:1
          }
          6.2500% {
            opacity:1
          }
          6.6667% {
            opacity:1
          }
          7.0833% {
            opacity:1
          }
          7.5000% {
            opacity:1
          }
          7.9167% {
            opacity:1
          }
          8.3333% {
            opacity:1
          }
          8.7500% {
            opacity:1
          }
          9.1667% {
            opacity:1
          }
          9.5833% {
            opacity:1
          }
          10.0000% {
            opacity:1
          }
          10.4167% {
            opacity:1
          }
          10.8333% {
            opacity:1
          }
          11.2500% {
            opacity:1
          }
          11.6667% {
            opacity:1
          }
          12.0833% {
            opacity:1
          }
          12.5000% {
            opacity:1
          }
          12.9167% {
            opacity:1
          }
          13.3333% {
            opacity:1
          }
          13.7500% {
            opacity:1
          }
          14.1667% {
            opacity:1
          }
          14.5833% {
            opacity:1
          }
          15.0000% {
            opacity:1
          }
          15.4167% {
            opacity:1
          }
          15.8333% {
            opacity:1
          }
          16.2500% {
            opacity:1
          }
          16.6667% {
            opacity:1
          }
          17.0833% {
            opacity:1
          }
          17.5000% {
            opacity:1
          }
          17.9167% {
            opacity:1
          }
          18.3333% {
            opacity:1
          }
          18.7500% {
            opacity:1
          }
          19.1667% {
            opacity:1
          }
          19.5833% {
            opacity:1
          }
          20.0000% {
            opacity:1
          }
          20.4167% {
            opacity:1
          }
          20.8333% {
            opacity:1
          }
          21.2500% {
            opacity:1
          }
          21.6667% {
            opacity:1
          }
          22.0833% {
            opacity:1
          }
          22.5000% {
            opacity:1
          }
          22.9167% {
            opacity:1
          }
          23.3333% {
            opacity:1
          }
          23.7500% {
            opacity:1
          }
          24.1667% {
            opacity:1
          }
          24.5833% {
            opacity:1
          }
          25.0000% {
            opacity:1
          }
          25.4167% {
            opacity:1
          }
          25.8333% {
            opacity:1
          }
          26.2500% {
            opacity:1
          }
          26.6667% {
            opacity:1
          }
          27.0833% {
            opacity:1
          }
          27.5000% {
            opacity:1
          }
          27.9167% {
            opacity:1
          }
          28.3333% {
            opacity:1
          }
          28.7500% {
            opacity:1
          }
          29.1667% {
            opacity:1
          }
          29.5833% {
            opacity:1
          }
          30.0000% {
            opacity:1
          }
          30.4167% {
            opacity:1
          }
          30.8333% {
            opacity:1
          }
          31.2500% {
            opacity:1
          }
          31.6667% {
            opacity:1
          }
          32.0833% {
            opacity:1
          }
          32.5000% {
            opacity:1
          }
          32.9167% {
            opacity:1
          }
          33.3333% {
            opacity:1
          }
          33.7500% {
            opacity:1
          }
          34.1667% {
            opacity:1
          }
          34.5833% {
            opacity:1
          }
          35.0000% {
            opacity:1
          }
          35.4167% {
            opacity:1
          }
          35.8333% {
            opacity:1
          }
          36.2500% {
            opacity:1
          }
          36.6667% {
            opacity:1
          }
          37.0833% {
            opacity:1
          }
          37.5000% {
            opacity:1
          }
          37.9167% {
            opacity:1
          }
          38.3333% {
            opacity:1
          }
          38.7500% {
            opacity:1
          }
          39.1667% {
            opacity:1
          }
          39.5833% {
            opacity:1
          }
          40.0000% {
            opacity:1
          }
          40.4167% {
            opacity:1
          }
          40.8333% {
            opacity:1
          }
          41.2500% {
            opacity:1
          }
          41.6667% {
            opacity:1
          }
          42.0833% {
            opacity:0.95
          }
          42.5000% {
            opacity:0.9
          }
          42.9167% {
            opacity:0.85
          }
          43.3333% {
            opacity:0.8
          }
          43.7500% {
            opacity:0.75
          }
          44.1667% {
            opacity:0.7
          }
          44.5833% {
            opacity:0.65
          }
          45.0000% {
            opacity:0.6
          }
          45.4167% {
            opacity:0.55
          }
          45.8333% {
            opacity:0.5
          }
          46.2500% {
            opacity:0.45
          }
          46.6667% {
            opacity:0.4
          }
          47.0833% {
            opacity:0.35
          }
          47.5000% {
            opacity:0.3
          }
          47.9167% {
            opacity:0.25
          }
          48.3333% {
            opacity:0.2
          }
          48.7500% {
            opacity:0.15
          }
          49.1667% {
            opacity:0.1
          }
          49.5833% {
            opacity:0.05
          }
          50.0000% {
            opacity:0
          }
          50.4167% {
            opacity:0
          }
          50.8333% {
            opacity:0
          }
          51.2500% {
            opacity:0
          }
          51.6667% {
            opacity:0
          }
          52.0833% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          52.9167% {
            opacity:0
          }
          53.3333% {
            opacity:0
          }
          53.7500% {
            opacity:0
          }
          54.1667% {
            opacity:0
          }
          54.5833% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.4167% {
            opacity:0
          }
          55.8333% {
            opacity:0
          }
          56.2500% {
            opacity:0
          }
          56.6667% {
            opacity:0
          }
          57.0833% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          57.9167% {
            opacity:0
          }
          58.3333% {
            opacity:0
          }
          58.7500% {
            opacity:0
          }
          59.1667% {
            opacity:0
          }
          59.5833% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.4167% {
            opacity:0
          }
          60.8333% {
            opacity:0
          }
          61.2500% {
            opacity:0
          }
          61.6667% {
            opacity:0
          }
          62.0833% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          62.9167% {
            opacity:0
          }
          63.3333% {
            opacity:0
          }
          63.7500% {
            opacity:0
          }
          64.1667% {
            opacity:0
          }
          64.5833% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.4167% {
            opacity:0
          }
          65.8333% {
            opacity:0
          }
          66.2500% {
            opacity:0
          }
          66.6667% {
            opacity:0
          }
          67.0833% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          67.9167% {
            opacity:0
          }
          68.3333% {
            opacity:0
          }
          68.7500% {
            opacity:0
          }
          69.1667% {
            opacity:0
          }
          69.5833% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.4167% {
            opacity:0
          }
          70.8333% {
            opacity:0
          }
          71.2500% {
            opacity:0
          }
          71.6667% {
            opacity:0
          }
          72.0833% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          72.9167% {
            opacity:0
          }
          73.3333% {
            opacity:0
          }
          73.7500% {
            opacity:0
          }
          74.1667% {
            opacity:0
          }
          74.5833% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.4167% {
            opacity:0
          }
          75.8333% {
            opacity:0
          }
          76.2500% {
            opacity:0
          }
          76.6667% {
            opacity:0
          }
          77.0833% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          77.9167% {
            opacity:0
          }
          78.3333% {
            opacity:0
          }
          78.7500% {
            opacity:0
          }
          79.1667% {
            opacity:0
          }
          79.5833% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.4167% {
            opacity:0
          }
          80.8333% {
            opacity:0
          }
          81.2500% {
            opacity:0
          }
          81.6667% {
            opacity:0
          }
          82.0833% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          82.9167% {
            opacity:0
          }
          83.3333% {
            opacity:0
          }
          83.7500% {
            opacity:0.025
          }
          84.1667% {
            opacity:0.05
          }
          84.5833% {
            opacity:0.075
          }
          85.0000% {
            opacity:0.1
          }
          85.4167% {
            opacity:0.125
          }
          85.8333% {
            opacity:0.15
          }
          86.2500% {
            opacity:0.175
          }
          86.6667% {
            opacity:0.2
          }
          87.0833% {
            opacity:0.225
          }
          87.5000% {
            opacity:0.25
          }
          87.9167% {
            opacity:0.275
          }
          88.3333% {
            opacity:0.3
          }
          88.7500% {
            opacity:0.325
          }
          89.1667% {
            opacity:0.35
          }
          89.5833% {
            opacity:0.375
          }
          90.0000% {
            opacity:0.4
          }
          90.4167% {
            opacity:0.425
          }
          90.8333% {
            opacity:0.45
          }
          91.2500% {
            opacity:0.475
          }
          91.6667% {
            opacity:0.5
          }
          92.0833% {
            opacity:0.525
          }
          92.5000% {
            opacity:0.55
          }
          92.9167% {
            opacity:0.575
          }
          93.3333% {
            opacity:0.6
          }
          93.7500% {
            opacity:0.625
          }
          94.1667% {
            opacity:0.65
          }
          94.5833% {
            opacity:0.675
          }
          95.0000% {
            opacity:0.7
          }
          95.4167% {
            opacity:0.725
          }
          95.8333% {
            opacity:0.75
          }
          96.2500% {
            opacity:0.775
          }
          96.6667% {
            opacity:0.8
          }
          97.0833% {
            opacity:0.825
          }
          97.5000% {
            opacity:0.85
          }
          97.9167% {
            opacity:0.875
          }
          98.3333% {
            opacity:0.9
          }
          98.7500% {
            opacity:0.925
          }
          99.1667% {
            opacity:0.95
          }
          99.5833% {
            opacity:0.975
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes salt-charge {
          0.0000% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.2500% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.7500% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.2500% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.7500% {
            opacity:0.049
          }
          9.1667% {
            opacity:0.098
          }
          9.5833% {
            opacity:0.144
          }
          10.0000% {
            opacity:0.19
          }
          10.4167% {
            opacity:0.234
          }
          10.8333% {
            opacity:0.278
          }
          11.2500% {
            opacity:0.319
          }
          11.6667% {
            opacity:0.36
          }
          12.0833% {
            opacity:0.399
          }
          12.5000% {
            opacity:0.4375
          }
          12.9167% {
            opacity:0.474
          }
          13.3333% {
            opacity:0.51
          }
          13.7500% {
            opacity:0.544
          }
          14.1667% {
            opacity:0.577
          }
          14.5833% {
            opacity:0.609
          }
          15.0000% {
            opacity:0.64
          }
          15.4167% {
            opacity:0.669
          }
          15.8333% {
            opacity:0.697
          }
          16.2500% {
            opacity:0.724
          }
          16.6667% {
            opacity:0.75
          }
          17.0833% {
            opacity:0.774
          }
          17.5000% {
            opacity:0.7975
          }
          17.9167% {
            opacity:0.819
          }
          18.3333% {
            opacity:0.84
          }
          18.7500% {
            opacity:0.859
          }
          19.1667% {
            opacity:0.8775
          }
          19.5833% {
            opacity:0.894
          }
          20.0000% {
            opacity:0.91
          }
          20.4167% {
            opacity:0.924
          }
          20.8333% {
            opacity:0.9375
          }
          21.2500% {
            opacity:0.949
          }
          21.6667% {
            opacity:0.96
          }
          22.0833% {
            opacity:0.969
          }
          22.5000% {
            opacity:0.9775
          }
          22.9167% {
            opacity:0.984
          }
          23.3333% {
            opacity:0.99
          }
          23.7500% {
            opacity:0.994
          }
          24.1667% {
            opacity:0.997
          }
          24.5833% {
            opacity:0.999
          }
          25.0000% {
            opacity:1
          }
          25.4167% {
            opacity:0.999
          }
          25.8333% {
            opacity:0.997
          }
          26.2500% {
            opacity:0.994
          }
          26.6667% {
            opacity:0.99
          }
          27.0833% {
            opacity:0.984
          }
          27.5000% {
            opacity:0.9775
          }
          27.9167% {
            opacity:0.969
          }
          28.3333% {
            opacity:0.96
          }
          28.7500% {
            opacity:0.949
          }
          29.1667% {
            opacity:0.9375
          }
          29.5833% {
            opacity:0.924
          }
          30.0000% {
            opacity:0.91
          }
          30.4167% {
            opacity:0.894
          }
          30.8333% {
            opacity:0.8775
          }
          31.2500% {
            opacity:0.859
          }
          31.6667% {
            opacity:0.84
          }
          32.0833% {
            opacity:0.819
          }
          32.5000% {
            opacity:0.7975
          }
          32.9167% {
            opacity:0.774
          }
          33.3333% {
            opacity:0.75
          }
          33.7500% {
            opacity:0.724
          }
          34.1667% {
            opacity:0.698
          }
          34.5833% {
            opacity:0.669
          }
          35.0000% {
            opacity:0.64
          }
          35.4167% {
            opacity:0.609
          }
          35.8333% {
            opacity:0.578
          }
          36.2500% {
            opacity:0.544
          }
          36.6667% {
            opacity:0.51
          }
          37.0833% {
            opacity:0.474
          }
          37.5000% {
            opacity:0.4375
          }
          37.9167% {
            opacity:0.399
          }
          38.3333% {
            opacity:0.36
          }
          38.7500% {
            opacity:0.319
          }
          39.1667% {
            opacity:0.277
          }
          39.5833% {
            opacity:0.234
          }
          40.0000% {
            opacity:0.19
          }
          40.4167% {
            opacity:0.144
          }
          40.8333% {
            opacity:0.097
          }
          41.2500% {
            opacity:0.049
          }
          41.6667% {
            opacity:0
          }
          42.0833% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          42.9167% {
            opacity:0
          }
          43.3333% {
            opacity:0
          }
          43.7500% {
            opacity:0
          }
          44.1667% {
            opacity:0
          }
          44.5833% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.4167% {
            opacity:0
          }
          45.8333% {
            opacity:0
          }
          46.2500% {
            opacity:0
          }
          46.6667% {
            opacity:0
          }
          47.0833% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          47.9167% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.7500% {
            opacity:0
          }
          49.1667% {
            opacity:0
          }
          49.5833% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.4167% {
            opacity:0
          }
          50.8333% {
            opacity:0
          }
          51.2500% {
            opacity:0
          }
          51.6667% {
            opacity:0
          }
          52.0833% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          52.9167% {
            opacity:0
          }
          53.3333% {
            opacity:0
          }
          53.7500% {
            opacity:0
          }
          54.1667% {
            opacity:0
          }
          54.5833% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.4167% {
            opacity:0
          }
          55.8333% {
            opacity:0
          }
          56.2500% {
            opacity:0
          }
          56.6667% {
            opacity:0
          }
          57.0833% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          57.9167% {
            opacity:0
          }
          58.3333% {
            opacity:0
          }
          58.7500% {
            opacity:0
          }
          59.1667% {
            opacity:0
          }
          59.5833% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.4167% {
            opacity:0
          }
          60.8333% {
            opacity:0
          }
          61.2500% {
            opacity:0
          }
          61.6667% {
            opacity:0
          }
          62.0833% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          62.9167% {
            opacity:0
          }
          63.3333% {
            opacity:0
          }
          63.7500% {
            opacity:0
          }
          64.1667% {
            opacity:0
          }
          64.5833% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.4167% {
            opacity:0
          }
          65.8333% {
            opacity:0
          }
          66.2500% {
            opacity:0
          }
          66.6667% {
            opacity:0
          }
          67.0833% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          67.9167% {
            opacity:0
          }
          68.3333% {
            opacity:0
          }
          68.7500% {
            opacity:0
          }
          69.1667% {
            opacity:0
          }
          69.5833% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.4167% {
            opacity:0
          }
          70.8333% {
            opacity:0
          }
          71.2500% {
            opacity:0
          }
          71.6667% {
            opacity:0
          }
          72.0833% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          72.9167% {
            opacity:0
          }
          73.3333% {
            opacity:0
          }
          73.7500% {
            opacity:0
          }
          74.1667% {
            opacity:0
          }
          74.5833% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.4167% {
            opacity:0
          }
          75.8333% {
            opacity:0
          }
          76.2500% {
            opacity:0
          }
          76.6667% {
            opacity:0
          }
          77.0833% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          77.9167% {
            opacity:0
          }
          78.3333% {
            opacity:0
          }
          78.7500% {
            opacity:0
          }
          79.1667% {
            opacity:0
          }
          79.5833% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.4167% {
            opacity:0
          }
          80.8333% {
            opacity:0
          }
          81.2500% {
            opacity:0
          }
          81.6667% {
            opacity:0
          }
          82.0833% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          82.9167% {
            opacity:0
          }
          83.3333% {
            opacity:0
          }
          83.7500% {
            opacity:0
          }
          84.1667% {
            opacity:0
          }
          84.5833% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.4167% {
            opacity:0
          }
          85.8333% {
            opacity:0
          }
          86.2500% {
            opacity:0
          }
          86.6667% {
            opacity:0
          }
          87.0833% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.7500% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.2500% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.7500% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.2500% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.7500% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes salt-discharge {
          0.0000% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.2500% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.7500% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.2500% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.7500% {
            opacity:0
          }
          9.1667% {
            opacity:0
          }
          9.5833% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.4167% {
            opacity:0
          }
          10.8333% {
            opacity:0
          }
          11.2500% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0833% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          12.9167% {
            opacity:0
          }
          13.3333% {
            opacity:0
          }
          13.7500% {
            opacity:0
          }
          14.1667% {
            opacity:0
          }
          14.5833% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.4167% {
            opacity:0
          }
          15.8333% {
            opacity:0
          }
          16.2500% {
            opacity:0
          }
          16.6667% {
            opacity:0
          }
          17.0833% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          17.9167% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.7500% {
            opacity:0
          }
          19.1667% {
            opacity:0
          }
          19.5833% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.4167% {
            opacity:0
          }
          20.8333% {
            opacity:0
          }
          21.2500% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0833% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          22.9167% {
            opacity:0
          }
          23.3333% {
            opacity:0
          }
          23.7500% {
            opacity:0
          }
          24.1667% {
            opacity:0
          }
          24.5833% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.4167% {
            opacity:0
          }
          25.8333% {
            opacity:0
          }
          26.2500% {
            opacity:0
          }
          26.6667% {
            opacity:0
          }
          27.0833% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          27.9167% {
            opacity:0
          }
          28.3333% {
            opacity:0
          }
          28.7500% {
            opacity:0
          }
          29.1667% {
            opacity:0
          }
          29.5833% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.4167% {
            opacity:0
          }
          30.8333% {
            opacity:0
          }
          31.2500% {
            opacity:0
          }
          31.6667% {
            opacity:0
          }
          32.0833% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          32.9167% {
            opacity:0
          }
          33.3333% {
            opacity:0
          }
          33.7500% {
            opacity:0
          }
          34.1667% {
            opacity:0
          }
          34.5833% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.4167% {
            opacity:0
          }
          35.8333% {
            opacity:0
          }
          36.2500% {
            opacity:0
          }
          36.6667% {
            opacity:0
          }
          37.0833% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          37.9167% {
            opacity:0
          }
          38.3333% {
            opacity:0
          }
          38.7500% {
            opacity:0
          }
          39.1667% {
            opacity:0
          }
          39.5833% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.4167% {
            opacity:0
          }
          40.8333% {
            opacity:0
          }
          41.2500% {
            opacity:0
          }
          41.6667% {
            opacity:0
          }
          42.0833% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          42.9167% {
            opacity:0
          }
          43.3333% {
            opacity:0
          }
          43.7500% {
            opacity:0
          }
          44.1667% {
            opacity:0
          }
          44.5833% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.4167% {
            opacity:0
          }
          45.8333% {
            opacity:0
          }
          46.2500% {
            opacity:0
          }
          46.6667% {
            opacity:0
          }
          47.0833% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          47.9167% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.7500% {
            opacity:0
          }
          49.1667% {
            opacity:0
          }
          49.5833% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.4167% {
            opacity:0.049
          }
          50.8333% {
            opacity:0.097
          }
          51.2500% {
            opacity:0.144
          }
          51.6667% {
            opacity:0.19
          }
          52.0833% {
            opacity:0.234
          }
          52.5000% {
            opacity:0.277
          }
          52.9167% {
            opacity:0.319
          }
          53.3333% {
            opacity:0.36
          }
          53.7500% {
            opacity:0.399
          }
          54.1667% {
            opacity:0.4375
          }
          54.5833% {
            opacity:0.474
          }
          55.0000% {
            opacity:0.51
          }
          55.4167% {
            opacity:0.544
          }
          55.8333% {
            opacity:0.578
          }
          56.2500% {
            opacity:0.609
          }
          56.6667% {
            opacity:0.64
          }
          57.0833% {
            opacity:0.669
          }
          57.5000% {
            opacity:0.698
          }
          57.9167% {
            opacity:0.724
          }
          58.3333% {
            opacity:0.75
          }
          58.7500% {
            opacity:0.774
          }
          59.1667% {
            opacity:0.797
          }
          59.5833% {
            opacity:0.819
          }
          60.0000% {
            opacity:0.84
          }
          60.4167% {
            opacity:0.859
          }
          60.8333% {
            opacity:0.8775
          }
          61.2500% {
            opacity:0.894
          }
          61.6667% {
            opacity:0.91
          }
          62.0833% {
            opacity:0.924
          }
          62.5000% {
            opacity:0.9375
          }
          62.9167% {
            opacity:0.949
          }
          63.3333% {
            opacity:0.96
          }
          63.7500% {
            opacity:0.969
          }
          64.1667% {
            opacity:0.9775
          }
          64.5833% {
            opacity:0.984
          }
          65.0000% {
            opacity:0.99
          }
          65.4167% {
            opacity:0.994
          }
          65.8333% {
            opacity:0.9975
          }
          66.2500% {
            opacity:0.999
          }
          66.6667% {
            opacity:1
          }
          67.0833% {
            opacity:0.999
          }
          67.5000% {
            opacity:0.9975
          }
          67.9167% {
            opacity:0.994
          }
          68.3333% {
            opacity:0.99
          }
          68.7500% {
            opacity:0.984
          }
          69.1667% {
            opacity:0.977
          }
          69.5833% {
            opacity:0.969
          }
          70.0000% {
            opacity:0.96
          }
          70.4167% {
            opacity:0.949
          }
          70.8333% {
            opacity:0.9375
          }
          71.2500% {
            opacity:0.924
          }
          71.6667% {
            opacity:0.91
          }
          72.0833% {
            opacity:0.894
          }
          72.5000% {
            opacity:0.878
          }
          72.9167% {
            opacity:0.859
          }
          73.3333% {
            opacity:0.84
          }
          73.7500% {
            opacity:0.819
          }
          74.1667% {
            opacity:0.797
          }
          74.5833% {
            opacity:0.774
          }
          75.0000% {
            opacity:0.75
          }
          75.4167% {
            opacity:0.724
          }
          75.8333% {
            opacity:0.698
          }
          76.2500% {
            opacity:0.669
          }
          76.6667% {
            opacity:0.64
          }
          77.0833% {
            opacity:0.609
          }
          77.5000% {
            opacity:0.577
          }
          77.9167% {
            opacity:0.544
          }
          78.3333% {
            opacity:0.51
          }
          78.7500% {
            opacity:0.474
          }
          79.1667% {
            opacity:0.4375
          }
          79.5833% {
            opacity:0.399
          }
          80.0000% {
            opacity:0.36
          }
          80.4167% {
            opacity:0.319
          }
          80.8333% {
            opacity:0.278
          }
          81.2500% {
            opacity:0.234
          }
          81.6667% {
            opacity:0.19
          }
          82.0833% {
            opacity:0.144
          }
          82.5000% {
            opacity:0.097
          }
          82.9167% {
            opacity:0.049
          }
          83.3333% {
            opacity:0
          }
          83.7500% {
            opacity:0
          }
          84.1667% {
            opacity:0
          }
          84.5833% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.4167% {
            opacity:0
          }
          85.8333% {
            opacity:0
          }
          86.2500% {
            opacity:0
          }
          86.6667% {
            opacity:0
          }
          87.0833% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.7500% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.2500% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.7500% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.2500% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.7500% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes salt-electricity {
          0.0000% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.2500% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.7500% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.2500% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.7500% {
            opacity:0
          }
          9.1667% {
            opacity:0
          }
          9.5833% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.4167% {
            opacity:0
          }
          10.8333% {
            opacity:0
          }
          11.2500% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0833% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          12.9167% {
            opacity:0
          }
          13.3333% {
            opacity:0
          }
          13.7500% {
            opacity:0
          }
          14.1667% {
            opacity:0
          }
          14.5833% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.4167% {
            opacity:0
          }
          15.8333% {
            opacity:0
          }
          16.2500% {
            opacity:0
          }
          16.6667% {
            opacity:0
          }
          17.0833% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          17.9167% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.7500% {
            opacity:0
          }
          19.1667% {
            opacity:0
          }
          19.5833% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.4167% {
            opacity:0
          }
          20.8333% {
            opacity:0
          }
          21.2500% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0833% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          22.9167% {
            opacity:0
          }
          23.3333% {
            opacity:0
          }
          23.7500% {
            opacity:0
          }
          24.1667% {
            opacity:0
          }
          24.5833% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.4167% {
            opacity:0
          }
          25.8333% {
            opacity:0
          }
          26.2500% {
            opacity:0
          }
          26.6667% {
            opacity:0
          }
          27.0833% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          27.9167% {
            opacity:0
          }
          28.3333% {
            opacity:0
          }
          28.7500% {
            opacity:0
          }
          29.1667% {
            opacity:0
          }
          29.5833% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.4167% {
            opacity:0
          }
          30.8333% {
            opacity:0
          }
          31.2500% {
            opacity:0
          }
          31.6667% {
            opacity:0
          }
          32.0833% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          32.9167% {
            opacity:0
          }
          33.3333% {
            opacity:0
          }
          33.7500% {
            opacity:0
          }
          34.1667% {
            opacity:0
          }
          34.5833% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.4167% {
            opacity:0
          }
          35.8333% {
            opacity:0
          }
          36.2500% {
            opacity:0
          }
          36.6667% {
            opacity:0
          }
          37.0833% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          37.9167% {
            opacity:0
          }
          38.3333% {
            opacity:0
          }
          38.7500% {
            opacity:0
          }
          39.1667% {
            opacity:0
          }
          39.5833% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.4167% {
            opacity:0
          }
          40.8333% {
            opacity:0
          }
          41.2500% {
            opacity:0
          }
          41.6667% {
            opacity:0
          }
          42.0833% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          42.9167% {
            opacity:0
          }
          43.3333% {
            opacity:0
          }
          43.7500% {
            opacity:0
          }
          44.1667% {
            opacity:0
          }
          44.5833% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.4167% {
            opacity:0
          }
          45.8333% {
            opacity:0
          }
          46.2500% {
            opacity:0
          }
          46.6667% {
            opacity:0
          }
          47.0833% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          47.9167% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.7500% {
            opacity:0
          }
          49.1667% {
            opacity:0
          }
          49.5833% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.4167% {
            opacity:0.017
          }
          50.8333% {
            opacity:0.034
          }
          51.2500% {
            opacity:0.051
          }
          51.6667% {
            opacity:0.067
          }
          52.0833% {
            opacity:0.082
          }
          52.5000% {
            opacity:0.097
          }
          52.9167% {
            opacity:0.112
          }
          53.3333% {
            opacity:0.126
          }
          53.7500% {
            opacity:0.14
          }
          54.1667% {
            opacity:0.153
          }
          54.5833% {
            opacity:0.166
          }
          55.0000% {
            opacity:0.178
          }
          55.4167% {
            opacity:0.191
          }
          55.8333% {
            opacity:0.202
          }
          56.2500% {
            opacity:0.213
          }
          56.6667% {
            opacity:0.224
          }
          57.0833% {
            opacity:0.234
          }
          57.5000% {
            opacity:0.244
          }
          57.9167% {
            opacity:0.254
          }
          58.3333% {
            opacity:0.262
          }
          58.7500% {
            opacity:0.271
          }
          59.1667% {
            opacity:0.279
          }
          59.5833% {
            opacity:0.287
          }
          60.0000% {
            opacity:0.294
          }
          60.4167% {
            opacity:0.301
          }
          60.8333% {
            opacity:0.307
          }
          61.2500% {
            opacity:0.313
          }
          61.6667% {
            opacity:0.3185
          }
          62.0833% {
            opacity:0.324
          }
          62.5000% {
            opacity:0.328
          }
          62.9167% {
            opacity:0.332
          }
          63.3333% {
            opacity:0.336
          }
          63.7500% {
            opacity:0.339
          }
          64.1667% {
            opacity:0.342
          }
          64.5833% {
            opacity:0.345
          }
          65.0000% {
            opacity:0.3465
          }
          65.4167% {
            opacity:0.348
          }
          65.8333% {
            opacity:0.349
          }
          66.2500% {
            opacity:0.35
          }
          66.6667% {
            opacity:0.35
          }
          67.0833% {
            opacity:0.35
          }
          67.5000% {
            opacity:0.349
          }
          67.9167% {
            opacity:0.348
          }
          68.3333% {
            opacity:0.347
          }
          68.7500% {
            opacity:0.345
          }
          69.1667% {
            opacity:0.342
          }
          69.5833% {
            opacity:0.339
          }
          70.0000% {
            opacity:0.336
          }
          70.4167% {
            opacity:0.332
          }
          70.8333% {
            opacity:0.328
          }
          71.2500% {
            opacity:0.324
          }
          71.6667% {
            opacity:0.3185
          }
          72.0833% {
            opacity:0.313
          }
          72.5000% {
            opacity:0.307
          }
          72.9167% {
            opacity:0.301
          }
          73.3333% {
            opacity:0.294
          }
          73.7500% {
            opacity:0.287
          }
          74.1667% {
            opacity:0.279
          }
          74.5833% {
            opacity:0.271
          }
          75.0000% {
            opacity:0.262
          }
          75.4167% {
            opacity:0.254
          }
          75.8333% {
            opacity:0.244
          }
          76.2500% {
            opacity:0.234
          }
          76.6667% {
            opacity:0.224
          }
          77.0833% {
            opacity:0.213
          }
          77.5000% {
            opacity:0.202
          }
          77.9167% {
            opacity:0.191
          }
          78.3333% {
            opacity:0.178
          }
          78.7500% {
            opacity:0.166
          }
          79.1667% {
            opacity:0.153
          }
          79.5833% {
            opacity:0.14
          }
          80.0000% {
            opacity:0.126
          }
          80.4167% {
            opacity:0.112
          }
          80.8333% {
            opacity:0.097
          }
          81.2500% {
            opacity:0.082
          }
          81.6667% {
            opacity:0.066
          }
          82.0833% {
            opacity:0.051
          }
          82.5000% {
            opacity:0.034
          }
          82.9167% {
            opacity:0.017
          }
          83.3333% {
            opacity:0
          }
          83.7500% {
            opacity:0
          }
          84.1667% {
            opacity:0
          }
          84.5833% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.4167% {
            opacity:0
          }
          85.8333% {
            opacity:0
          }
          86.2500% {
            opacity:0
          }
          86.6667% {
            opacity:0
          }
          87.0833% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.7500% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.2500% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.7500% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.2500% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.7500% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes salt-rejection {
          0.0000% {
            opacity:0
          }
          0.4167% {
            opacity:0
          }
          0.8333% {
            opacity:0
          }
          1.2500% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0833% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          2.9167% {
            opacity:0
          }
          3.3333% {
            opacity:0
          }
          3.7500% {
            opacity:0
          }
          4.1667% {
            opacity:0
          }
          4.5833% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.4167% {
            opacity:0
          }
          5.8333% {
            opacity:0
          }
          6.2500% {
            opacity:0
          }
          6.6667% {
            opacity:0
          }
          7.0833% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          7.9167% {
            opacity:0
          }
          8.3333% {
            opacity:0
          }
          8.7500% {
            opacity:0
          }
          9.1667% {
            opacity:0
          }
          9.5833% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.4167% {
            opacity:0
          }
          10.8333% {
            opacity:0
          }
          11.2500% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0833% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          12.9167% {
            opacity:0
          }
          13.3333% {
            opacity:0
          }
          13.7500% {
            opacity:0
          }
          14.1667% {
            opacity:0
          }
          14.5833% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.4167% {
            opacity:0
          }
          15.8333% {
            opacity:0
          }
          16.2500% {
            opacity:0
          }
          16.6667% {
            opacity:0
          }
          17.0833% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          17.9167% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.7500% {
            opacity:0
          }
          19.1667% {
            opacity:0
          }
          19.5833% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.4167% {
            opacity:0
          }
          20.8333% {
            opacity:0
          }
          21.2500% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0833% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          22.9167% {
            opacity:0
          }
          23.3333% {
            opacity:0
          }
          23.7500% {
            opacity:0
          }
          24.1667% {
            opacity:0
          }
          24.5833% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.4167% {
            opacity:0
          }
          25.8333% {
            opacity:0
          }
          26.2500% {
            opacity:0
          }
          26.6667% {
            opacity:0
          }
          27.0833% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          27.9167% {
            opacity:0
          }
          28.3333% {
            opacity:0
          }
          28.7500% {
            opacity:0
          }
          29.1667% {
            opacity:0
          }
          29.5833% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.4167% {
            opacity:0
          }
          30.8333% {
            opacity:0
          }
          31.2500% {
            opacity:0
          }
          31.6667% {
            opacity:0
          }
          32.0833% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          32.9167% {
            opacity:0
          }
          33.3333% {
            opacity:0
          }
          33.7500% {
            opacity:0
          }
          34.1667% {
            opacity:0
          }
          34.5833% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.4167% {
            opacity:0
          }
          35.8333% {
            opacity:0
          }
          36.2500% {
            opacity:0
          }
          36.6667% {
            opacity:0
          }
          37.0833% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          37.9167% {
            opacity:0
          }
          38.3333% {
            opacity:0
          }
          38.7500% {
            opacity:0
          }
          39.1667% {
            opacity:0
          }
          39.5833% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.4167% {
            opacity:0
          }
          40.8333% {
            opacity:0
          }
          41.2500% {
            opacity:0
          }
          41.6667% {
            opacity:0
          }
          42.0833% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          42.9167% {
            opacity:0
          }
          43.3333% {
            opacity:0
          }
          43.7500% {
            opacity:0
          }
          44.1667% {
            opacity:0
          }
          44.5833% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.4167% {
            opacity:0
          }
          45.8333% {
            opacity:0
          }
          46.2500% {
            opacity:0
          }
          46.6667% {
            opacity:0
          }
          47.0833% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          47.9167% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.7500% {
            opacity:0
          }
          49.1667% {
            opacity:0
          }
          49.5833% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.4167% {
            opacity:0.032
          }
          50.8333% {
            opacity:0.063
          }
          51.2500% {
            opacity:0.094
          }
          51.6667% {
            opacity:0.124
          }
          52.0833% {
            opacity:0.152
          }
          52.5000% {
            opacity:0.18
          }
          52.9167% {
            opacity:0.208
          }
          53.3333% {
            opacity:0.234
          }
          53.7500% {
            opacity:0.26
          }
          54.1667% {
            opacity:0.284
          }
          54.5833% {
            opacity:0.308
          }
          55.0000% {
            opacity:0.331
          }
          55.4167% {
            opacity:0.354
          }
          55.8333% {
            opacity:0.375
          }
          56.2500% {
            opacity:0.396
          }
          56.6667% {
            opacity:0.416
          }
          57.0833% {
            opacity:0.435
          }
          57.5000% {
            opacity:0.453
          }
          57.9167% {
            opacity:0.471
          }
          58.3333% {
            opacity:0.488
          }
          58.7500% {
            opacity:0.503
          }
          59.1667% {
            opacity:0.518
          }
          59.5833% {
            opacity:0.533
          }
          60.0000% {
            opacity:0.546
          }
          60.4167% {
            opacity:0.559
          }
          60.8333% {
            opacity:0.57
          }
          61.2500% {
            opacity:0.581
          }
          61.6667% {
            opacity:0.592
          }
          62.0833% {
            opacity:0.601
          }
          62.5000% {
            opacity:0.609
          }
          62.9167% {
            opacity:0.617
          }
          63.3333% {
            opacity:0.624
          }
          63.7500% {
            opacity:0.63
          }
          64.1667% {
            opacity:0.635
          }
          64.5833% {
            opacity:0.64
          }
          65.0000% {
            opacity:0.6435
          }
          65.4167% {
            opacity:0.646
          }
          65.8333% {
            opacity:0.648
          }
          66.2500% {
            opacity:0.65
          }
          66.6667% {
            opacity:0.65
          }
          67.0833% {
            opacity:0.65
          }
          67.5000% {
            opacity:0.648
          }
          67.9167% {
            opacity:0.646
          }
          68.3333% {
            opacity:0.644
          }
          68.7500% {
            opacity:0.64
          }
          69.1667% {
            opacity:0.635
          }
          69.5833% {
            opacity:0.63
          }
          70.0000% {
            opacity:0.624
          }
          70.4167% {
            opacity:0.617
          }
          70.8333% {
            opacity:0.609
          }
          71.2500% {
            opacity:0.601
          }
          71.6667% {
            opacity:0.592
          }
          72.0833% {
            opacity:0.581
          }
          72.5000% {
            opacity:0.57
          }
          72.9167% {
            opacity:0.559
          }
          73.3333% {
            opacity:0.546
          }
          73.7500% {
            opacity:0.533
          }
          74.1667% {
            opacity:0.518
          }
          74.5833% {
            opacity:0.503
          }
          75.0000% {
            opacity:0.488
          }
          75.4167% {
            opacity:0.471
          }
          75.8333% {
            opacity:0.453
          }
          76.2500% {
            opacity:0.435
          }
          76.6667% {
            opacity:0.416
          }
          77.0833% {
            opacity:0.396
          }
          77.5000% {
            opacity:0.375
          }
          77.9167% {
            opacity:0.354
          }
          78.3333% {
            opacity:0.331
          }
          78.7500% {
            opacity:0.308
          }
          79.1667% {
            opacity:0.284
          }
          79.5833% {
            opacity:0.26
          }
          80.0000% {
            opacity:0.234
          }
          80.4167% {
            opacity:0.208
          }
          80.8333% {
            opacity:0.18
          }
          81.2500% {
            opacity:0.152
          }
          81.6667% {
            opacity:0.123
          }
          82.0833% {
            opacity:0.094
          }
          82.5000% {
            opacity:0.063
          }
          82.9167% {
            opacity:0.032
          }
          83.3333% {
            opacity:0
          }
          83.7500% {
            opacity:0
          }
          84.1667% {
            opacity:0
          }
          84.5833% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.4167% {
            opacity:0
          }
          85.8333% {
            opacity:0
          }
          86.2500% {
            opacity:0
          }
          86.6667% {
            opacity:0
          }
          87.0833% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          87.9167% {
            opacity:0
          }
          88.3333% {
            opacity:0
          }
          88.7500% {
            opacity:0
          }
          89.1667% {
            opacity:0
          }
          89.5833% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.4167% {
            opacity:0
          }
          90.8333% {
            opacity:0
          }
          91.2500% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0833% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          92.9167% {
            opacity:0
          }
          93.3333% {
            opacity:0
          }
          93.7500% {
            opacity:0
          }
          94.1667% {
            opacity:0
          }
          94.5833% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.4167% {
            opacity:0
          }
          95.8333% {
            opacity:0
          }
          96.2500% {
            opacity:0
          }
          96.6667% {
            opacity:0
          }
          97.0833% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          97.9167% {
            opacity:0
          }
          98.3333% {
            opacity:0
          }
          98.7500% {
            opacity:0
          }
          99.1667% {
            opacity:0
          }
          99.5833% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes salt-flow {
          to {
            stroke-dashoffset:-12
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Molten-Salt Thermal Storage">
        <g class="sunlight">
          <circle class="sun" cx="24" cy="23" r="6"/>
          <path class="rays" d="M24 12V9M24 34V37M13 23H10M35 23H38M16 15L13 12M32 31L35 34M16 31L13 34M32 15L35 12M37 29L60 28M45 40L62 32"/>
        </g>
        <rect class="tank" x="12" y="73" width="32" height="40" rx="3"/>
        <rect class="tank" x="96" y="73" width="32" height="40" rx="3"/>
        <rect class="cold-salt" x="14" y="88" width="28" height="25"/>
        <rect class="hot-salt" x="98" y="88" width="28" height="25"/>
        <path class="insulation" d="M9 75V111M47 75V111M93 75V111M131 75V111"/>
        <path class="charge-cold" d="M28 107V59H60V28H61"/>
        <path class="charge-hot" d="M79 28H112V107"/>
        <circle class="receiver" cx="70" cy="28" r="9"/>
        <path class="receiver-coil" d="M61 28L65 24L69 32L73 24L77 32L79 28"/>
        <path class="discharge-hot" d="M112 107V124H80V101H70"/>
        <path class="discharge-cold" d="M70 101H60V120H28V107"/>
        <rect class="heat-exchanger" x="56" y="91" width="28" height="20" rx="2"/>
        <path class="salt-channel" d="M80 101H60"/>
        <path class="exchanger-wall" d="M58 95H82"/>
        <rect class="power-block" x="55" y="63" width="30" height="22" rx="3"/>
        <circle class="power-wheel" cx="70" cy="74" r="7"/>
        <path class="thermal-flow" d="M70 91V85M67 88L70 85L73 88"/>
        <path class="electrical-flow" d="M85 71H94M91 68L94 71L91 74"/>
        <path class="rejection-flow" d="M85 80L92 87M88 86L92 87L91 83"/>
        <path class="charge-flow" d="M28 65V59H60V28H61M79 28H112V66"/>
        <path class="discharge-flow" d="M112 114V124H80V101H60V120H28V114"/>
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

if (!customElements.get("concept-molten-salt-thermal-storage")) {
  customElements.define("concept-molten-salt-thermal-storage", ConceptMoltenSaltThermalStorage);
}
