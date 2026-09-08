// Compressed-Air Energy Storage. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCompressedAirEnergyStorage extends HTMLElement {
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
        .ambient,.delivery-pipe,.supply,.exhaust {
          fill:none;
          stroke:#375b51;
          stroke-width:1.4
        }
        .tank {
          fill:#09221c;
          stroke:#77c9ef;
          stroke-width:1.6
        }
        .tank-density {
          animation:caes-density 12s linear infinite
        }
        .expander {
          fill:#13281b;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .expander-rotor {
          fill:#70edb1;
          animation:caes-rotation 12s linear infinite
        }
        .electrical {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.6;
          animation:caes-power 12s linear infinite
        }
        .bus {
          stroke:#77c9ef;
          stroke-width:1
        }
        .compressor-wall {
          fill:#0b1c15;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .gas {
          fill:#77c9ef;
          opacity:.18;
          animation:caes-gas 12s linear infinite
        }
        .piston {
          animation:caes-piston 12s linear infinite
        }
        .rod {
          stroke:#70edb1;
          stroke-width:2
        }
        .piston-face {
          fill:#f3c977
        }
        .delivery-valve,.intake-valve,.release-valve {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.2
        }
        .delivery-valve {
          animation:caes-delivery 12s steps(1,end) infinite
        }
        .intake-valve {
          animation:caes-intake 12s steps(1,end) infinite
        }
        .release-valve {
          animation:caes-release 12s steps(1,end) infinite
        }
        .compression-heat,.expansion-heat {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.2
        }
        .compression-heat {
          opacity:0;
          animation:caes-compression-heat 12s linear infinite
        }
        .expansion-heat {
          animation:caes-power 12s linear infinite
        }
        .pressure-scale {
          fill:none;
          stroke:#375b51;
          stroke-width:.8
        }
        .gauge-cover {
          fill:#09221c
        }
        .pressure-needle {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.4;
          animation:caes-pressure 12s linear infinite
        }
        @keyframes caes-gas {
          0.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          0.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          0.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          1.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          1.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          2.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          2.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          2.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          3.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          3.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          4.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          4.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          5.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          5.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          5.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          6.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          6.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          7.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          7.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          7.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          8.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          8.7500% {
            x:18.013px;
            width:29.987px;
            opacity:0.18
          }
          9.1667% {
            x:18.05px;
            width:29.95px;
            opacity:0.18
          }
          9.5833% {
            x:18.111px;
            width:29.889px;
            opacity:0.181
          }
          10.0000% {
            x:18.196px;
            width:29.804px;
            opacity:0.181
          }
          10.4167% {
            x:18.303px;
            width:29.697px;
            opacity:0.182
          }
          10.8333% {
            x:18.433px;
            width:29.567px;
            opacity:0.182
          }
          11.2500% {
            x:18.584px;
            width:29.416px;
            opacity:0.183
          }
          11.6667% {
            x:18.756px;
            width:29.244px;
            opacity:0.184
          }
          12.0833% {
            x:18.948px;
            width:29.052px;
            opacity:0.185
          }
          12.5000% {
            x:19.16px;
            width:28.84px;
            opacity:0.186
          }
          12.9167% {
            x:19.391px;
            width:28.609px;
            opacity:0.188
          }
          13.3333% {
            x:19.64px;
            width:28.36px;
            opacity:0.189
          }
          13.7500% {
            x:19.907px;
            width:28.093px;
            opacity:0.191
          }
          14.1667% {
            x:20.191px;
            width:27.809px;
            opacity:0.193
          }
          14.5833% {
            x:20.492px;
            width:27.508px;
            opacity:0.194
          }
          15.0000% {
            x:20.808px;
            width:27.192px;
            opacity:0.197
          }
          15.4167% {
            x:21.139px;
            width:26.861px;
            opacity:0.199
          }
          15.8333% {
            x:21.486px;
            width:26.514px;
            opacity:0.201
          }
          16.2500% {
            x:21.845px;
            width:26.155px;
            opacity:0.204
          }
          16.6667% {
            x:22.219px;
            width:25.781px;
            opacity:0.206
          }
          17.0833% {
            x:22.605px;
            width:25.395px;
            opacity:0.209
          }
          17.5000% {
            x:23.003px;
            width:24.997px;
            opacity:0.212
          }
          17.9167% {
            x:23.412px;
            width:24.588px;
            opacity:0.215
          }
          18.3333% {
            x:23.832px;
            width:24.168px;
            opacity:0.219
          }
          18.7500% {
            x:24.262px;
            width:23.738px;
            opacity:0.222
          }
          19.1667% {
            x:24.702px;
            width:23.298px;
            opacity:0.226
          }
          19.5833% {
            x:25.15px;
            width:22.85px;
            opacity:0.23
          }
          20.0000% {
            x:25.607px;
            width:22.393px;
            opacity:0.234
          }
          20.4167% {
            x:26.072px;
            width:21.928px;
            opacity:0.239
          }
          20.8333% {
            x:26.543px;
            width:21.457px;
            opacity:0.244
          }
          21.2500% {
            x:27.021px;
            width:20.979px;
            opacity:0.249
          }
          21.6667% {
            x:27.504px;
            width:20.496px;
            opacity:0.254
          }
          22.0833% {
            x:27.992px;
            width:20.008px;
            opacity:0.26
          }
          22.5000% {
            x:28.485px;
            width:19.515px;
            opacity:0.266
          }
          22.9167% {
            x:28.982px;
            width:19.018px;
            opacity:0.272
          }
          23.3333% {
            x:29.482px;
            width:18.518px;
            opacity:0.279
          }
          23.7500% {
            x:29.984px;
            width:18.016px;
            opacity:0.286
          }
          24.1667% {
            x:30.488px;
            width:17.512px;
            opacity:0.294
          }
          24.5833% {
            x:30.994px;
            width:17.006px;
            opacity:0.302
          }
          25.0000% {
            x:31.5px;
            width:16.5px;
            opacity:0.311
          }
          25.4167% {
            x:32.006px;
            width:15.994px;
            opacity:0.32
          }
          25.8333% {
            x:32.512px;
            width:15.488px;
            opacity:0.33
          }
          26.2368% {
            x:33.0px;
            width:15.0px;
            opacity:0.34
          }
          26.2500% {
            x:33.016px;
            width:14.984px;
            opacity:0.34
          }
          26.6667% {
            x:33.518px;
            width:14.482px;
            opacity:0.345
          }
          27.0833% {
            x:34.018px;
            width:13.982px;
            opacity:0.35
          }
          27.5000% {
            x:34.515px;
            width:13.485px;
            opacity:0.355
          }
          27.9167% {
            x:35.008px;
            width:12.992px;
            opacity:0.361
          }
          28.3333% {
            x:35.496px;
            width:12.504px;
            opacity:0.366
          }
          28.7500% {
            x:35.979px;
            width:12.021px;
            opacity:0.372
          }
          29.1667% {
            x:36.457px;
            width:11.543px;
            opacity:0.377
          }
          29.5833% {
            x:36.928px;
            width:11.072px;
            opacity:0.383
          }
          30.0000% {
            x:37.393px;
            width:10.607px;
            opacity:0.389
          }
          30.4167% {
            x:37.85px;
            width:10.15px;
            opacity:0.395
          }
          30.8333% {
            x:38.298px;
            width:9.702px;
            opacity:0.401
          }
          31.2500% {
            x:38.738px;
            width:9.262px;
            opacity:0.407
          }
          31.6667% {
            x:39.168px;
            width:8.832px;
            opacity:0.414
          }
          32.0833% {
            x:39.588px;
            width:8.412px;
            opacity:0.42
          }
          32.5000% {
            x:39.997px;
            width:8.003px;
            opacity:0.426
          }
          32.9167% {
            x:40.395px;
            width:7.605px;
            opacity:0.432
          }
          33.3333% {
            x:40.781px;
            width:7.219px;
            opacity:0.439
          }
          33.7500% {
            x:41.155px;
            width:6.845px;
            opacity:0.445
          }
          34.1667% {
            x:41.514px;
            width:6.486px;
            opacity:0.451
          }
          34.5833% {
            x:41.861px;
            width:6.139px;
            opacity:0.457
          }
          35.0000% {
            x:42.192px;
            width:5.808px;
            opacity:0.464
          }
          35.4167% {
            x:42.508px;
            width:5.492px;
            opacity:0.47
          }
          35.8333% {
            x:42.809px;
            width:5.191px;
            opacity:0.475
          }
          36.2500% {
            x:43.093px;
            width:4.907px;
            opacity:0.481
          }
          36.6667% {
            x:43.36px;
            width:4.64px;
            opacity:0.486
          }
          37.0833% {
            x:43.609px;
            width:4.391px;
            opacity:0.492
          }
          37.5000% {
            x:43.84px;
            width:4.16px;
            opacity:0.497
          }
          37.9167% {
            x:44.052px;
            width:3.948px;
            opacity:0.501
          }
          38.3333% {
            x:44.244px;
            width:3.756px;
            opacity:0.505
          }
          38.7500% {
            x:44.416px;
            width:3.584px;
            opacity:0.509
          }
          39.1667% {
            x:44.567px;
            width:3.433px;
            opacity:0.513
          }
          39.5833% {
            x:44.697px;
            width:3.303px;
            opacity:0.516
          }
          40.0000% {
            x:44.804px;
            width:3.196px;
            opacity:0.518
          }
          40.4167% {
            x:44.889px;
            width:3.111px;
            opacity:0.52
          }
          40.8333% {
            x:44.95px;
            width:3.05px;
            opacity:0.522
          }
          41.2500% {
            x:44.987px;
            width:3.013px;
            opacity:0.523
          }
          41.6667% {
            x:45px;
            width:3px;
            opacity:0.523
          }
          42.0833% {
            x:44.95px;
            width:3.05px;
            opacity:0.515
          }
          42.5000% {
            x:44.804px;
            width:3.196px;
            opacity:0.492
          }
          42.9167% {
            x:44.567px;
            width:3.433px;
            opacity:0.459
          }
          43.3333% {
            x:44.244px;
            width:3.756px;
            opacity:0.422
          }
          43.7500% {
            x:43.84px;
            width:4.16px;
            opacity:0.383
          }
          44.1667% {
            x:43.36px;
            width:4.64px;
            opacity:0.345
          }
          44.5833% {
            x:42.809px;
            width:5.191px;
            opacity:0.311
          }
          45.0000% {
            x:42.192px;
            width:5.808px;
            opacity:0.28
          }
          45.4167% {
            x:41.514px;
            width:6.486px;
            opacity:0.253
          }
          45.8333% {
            x:40.781px;
            width:7.219px;
            opacity:0.229
          }
          46.2500% {
            x:39.997px;
            width:8.003px;
            opacity:0.209
          }
          46.6667% {
            x:39.168px;
            width:8.832px;
            opacity:0.191
          }
          46.9543% {
            x:38.571px;
            width:9.429px;
            opacity:0.18
          }
          47.0833% {
            x:38.298px;
            width:9.702px;
            opacity:0.18
          }
          47.5000% {
            x:37.393px;
            width:10.607px;
            opacity:0.18
          }
          47.9167% {
            x:36.457px;
            width:11.543px;
            opacity:0.18
          }
          48.3333% {
            x:35.496px;
            width:12.504px;
            opacity:0.18
          }
          48.7500% {
            x:34.515px;
            width:13.485px;
            opacity:0.18
          }
          49.1667% {
            x:33.518px;
            width:14.482px;
            opacity:0.18
          }
          49.5833% {
            x:32.512px;
            width:15.488px;
            opacity:0.18
          }
          50.0000% {
            x:31.5px;
            width:16.5px;
            opacity:0.18
          }
          50.4167% {
            x:30.488px;
            width:17.512px;
            opacity:0.18
          }
          50.8333% {
            x:29.482px;
            width:18.518px;
            opacity:0.18
          }
          51.2500% {
            x:28.485px;
            width:19.515px;
            opacity:0.18
          }
          51.6667% {
            x:27.504px;
            width:20.496px;
            opacity:0.18
          }
          52.0833% {
            x:26.543px;
            width:21.457px;
            opacity:0.18
          }
          52.5000% {
            x:25.607px;
            width:22.393px;
            opacity:0.18
          }
          52.9167% {
            x:24.702px;
            width:23.298px;
            opacity:0.18
          }
          53.3333% {
            x:23.832px;
            width:24.168px;
            opacity:0.18
          }
          53.7500% {
            x:23.003px;
            width:24.997px;
            opacity:0.18
          }
          54.1667% {
            x:22.219px;
            width:25.781px;
            opacity:0.18
          }
          54.5833% {
            x:21.486px;
            width:26.514px;
            opacity:0.18
          }
          55.0000% {
            x:20.808px;
            width:27.192px;
            opacity:0.18
          }
          55.4167% {
            x:20.191px;
            width:27.809px;
            opacity:0.18
          }
          55.8333% {
            x:19.64px;
            width:28.36px;
            opacity:0.18
          }
          56.2500% {
            x:19.16px;
            width:28.84px;
            opacity:0.18
          }
          56.6667% {
            x:18.756px;
            width:29.244px;
            opacity:0.18
          }
          57.0833% {
            x:18.433px;
            width:29.567px;
            opacity:0.18
          }
          57.5000% {
            x:18.196px;
            width:29.804px;
            opacity:0.18
          }
          57.9167% {
            x:18.05px;
            width:29.95px;
            opacity:0.18
          }
          58.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          58.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          59.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          59.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          60.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          60.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          60.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          61.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          61.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          62.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          62.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          62.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          63.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          63.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          64.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          64.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          65.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          65.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          65.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          66.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          66.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          67.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          67.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          67.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          68.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          68.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          69.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          69.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          70.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          70.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          70.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          71.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          71.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          72.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          72.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          72.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          73.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          73.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          74.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          74.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          75.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          75.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          75.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          76.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          76.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          77.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          77.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          77.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          78.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          78.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          79.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          79.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          80.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          80.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          80.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          81.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          81.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          82.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          82.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          82.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          83.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          83.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          84.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          84.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          85.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          85.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          85.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          86.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          86.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          87.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          87.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          87.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          88.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          88.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          89.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          89.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          90.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          90.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          90.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          91.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          91.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          92.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          92.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          92.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          93.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          93.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          94.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          94.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          95.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          95.4167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          95.8333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          96.2500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          96.6667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          97.0833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          97.5000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          97.9167% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          98.3333% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          98.7500% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          99.1667% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          99.5833% {
            x:18px;
            width:30px;
            opacity:0.18
          }
          100.0000% {
            x:18px;
            width:30px;
            opacity:0.18
          }
        }
        @keyframes caes-piston {
          0.0000% {
            transform:translateX(18px)
          }
          0.4167% {
            transform:translateX(18px)
          }
          0.8333% {
            transform:translateX(18px)
          }
          1.2500% {
            transform:translateX(18px)
          }
          1.6667% {
            transform:translateX(18px)
          }
          2.0833% {
            transform:translateX(18px)
          }
          2.5000% {
            transform:translateX(18px)
          }
          2.9167% {
            transform:translateX(18px)
          }
          3.3333% {
            transform:translateX(18px)
          }
          3.7500% {
            transform:translateX(18px)
          }
          4.1667% {
            transform:translateX(18px)
          }
          4.5833% {
            transform:translateX(18px)
          }
          5.0000% {
            transform:translateX(18px)
          }
          5.4167% {
            transform:translateX(18px)
          }
          5.8333% {
            transform:translateX(18px)
          }
          6.2500% {
            transform:translateX(18px)
          }
          6.6667% {
            transform:translateX(18px)
          }
          7.0833% {
            transform:translateX(18px)
          }
          7.5000% {
            transform:translateX(18px)
          }
          7.9167% {
            transform:translateX(18px)
          }
          8.3333% {
            transform:translateX(18px)
          }
          8.7500% {
            transform:translateX(18.013px)
          }
          9.1667% {
            transform:translateX(18.05px)
          }
          9.5833% {
            transform:translateX(18.111px)
          }
          10.0000% {
            transform:translateX(18.196px)
          }
          10.4167% {
            transform:translateX(18.303px)
          }
          10.8333% {
            transform:translateX(18.433px)
          }
          11.2500% {
            transform:translateX(18.584px)
          }
          11.6667% {
            transform:translateX(18.756px)
          }
          12.0833% {
            transform:translateX(18.948px)
          }
          12.5000% {
            transform:translateX(19.16px)
          }
          12.9167% {
            transform:translateX(19.391px)
          }
          13.3333% {
            transform:translateX(19.64px)
          }
          13.7500% {
            transform:translateX(19.907px)
          }
          14.1667% {
            transform:translateX(20.191px)
          }
          14.5833% {
            transform:translateX(20.492px)
          }
          15.0000% {
            transform:translateX(20.808px)
          }
          15.4167% {
            transform:translateX(21.139px)
          }
          15.8333% {
            transform:translateX(21.486px)
          }
          16.2500% {
            transform:translateX(21.845px)
          }
          16.6667% {
            transform:translateX(22.219px)
          }
          17.0833% {
            transform:translateX(22.605px)
          }
          17.5000% {
            transform:translateX(23.003px)
          }
          17.9167% {
            transform:translateX(23.412px)
          }
          18.3333% {
            transform:translateX(23.832px)
          }
          18.7500% {
            transform:translateX(24.262px)
          }
          19.1667% {
            transform:translateX(24.702px)
          }
          19.5833% {
            transform:translateX(25.15px)
          }
          20.0000% {
            transform:translateX(25.607px)
          }
          20.4167% {
            transform:translateX(26.072px)
          }
          20.8333% {
            transform:translateX(26.543px)
          }
          21.2500% {
            transform:translateX(27.021px)
          }
          21.6667% {
            transform:translateX(27.504px)
          }
          22.0833% {
            transform:translateX(27.992px)
          }
          22.5000% {
            transform:translateX(28.485px)
          }
          22.9167% {
            transform:translateX(28.982px)
          }
          23.3333% {
            transform:translateX(29.482px)
          }
          23.7500% {
            transform:translateX(29.984px)
          }
          24.1667% {
            transform:translateX(30.488px)
          }
          24.5833% {
            transform:translateX(30.994px)
          }
          25.0000% {
            transform:translateX(31.5px)
          }
          25.4167% {
            transform:translateX(32.006px)
          }
          25.8333% {
            transform:translateX(32.512px)
          }
          26.2368% {
            transform:translateX(33.0px)
          }
          26.2500% {
            transform:translateX(33.016px)
          }
          26.6667% {
            transform:translateX(33.518px)
          }
          27.0833% {
            transform:translateX(34.018px)
          }
          27.5000% {
            transform:translateX(34.515px)
          }
          27.9167% {
            transform:translateX(35.008px)
          }
          28.3333% {
            transform:translateX(35.496px)
          }
          28.7500% {
            transform:translateX(35.979px)
          }
          29.1667% {
            transform:translateX(36.457px)
          }
          29.5833% {
            transform:translateX(36.928px)
          }
          30.0000% {
            transform:translateX(37.393px)
          }
          30.4167% {
            transform:translateX(37.85px)
          }
          30.8333% {
            transform:translateX(38.298px)
          }
          31.2500% {
            transform:translateX(38.738px)
          }
          31.6667% {
            transform:translateX(39.168px)
          }
          32.0833% {
            transform:translateX(39.588px)
          }
          32.5000% {
            transform:translateX(39.997px)
          }
          32.9167% {
            transform:translateX(40.395px)
          }
          33.3333% {
            transform:translateX(40.781px)
          }
          33.7500% {
            transform:translateX(41.155px)
          }
          34.1667% {
            transform:translateX(41.514px)
          }
          34.5833% {
            transform:translateX(41.861px)
          }
          35.0000% {
            transform:translateX(42.192px)
          }
          35.4167% {
            transform:translateX(42.508px)
          }
          35.8333% {
            transform:translateX(42.809px)
          }
          36.2500% {
            transform:translateX(43.093px)
          }
          36.6667% {
            transform:translateX(43.36px)
          }
          37.0833% {
            transform:translateX(43.609px)
          }
          37.5000% {
            transform:translateX(43.84px)
          }
          37.9167% {
            transform:translateX(44.052px)
          }
          38.3333% {
            transform:translateX(44.244px)
          }
          38.7500% {
            transform:translateX(44.416px)
          }
          39.1667% {
            transform:translateX(44.567px)
          }
          39.5833% {
            transform:translateX(44.697px)
          }
          40.0000% {
            transform:translateX(44.804px)
          }
          40.4167% {
            transform:translateX(44.889px)
          }
          40.8333% {
            transform:translateX(44.95px)
          }
          41.2500% {
            transform:translateX(44.987px)
          }
          41.6667% {
            transform:translateX(45px)
          }
          42.0833% {
            transform:translateX(44.95px)
          }
          42.5000% {
            transform:translateX(44.804px)
          }
          42.9167% {
            transform:translateX(44.567px)
          }
          43.3333% {
            transform:translateX(44.244px)
          }
          43.7500% {
            transform:translateX(43.84px)
          }
          44.1667% {
            transform:translateX(43.36px)
          }
          44.5833% {
            transform:translateX(42.809px)
          }
          45.0000% {
            transform:translateX(42.192px)
          }
          45.4167% {
            transform:translateX(41.514px)
          }
          45.8333% {
            transform:translateX(40.781px)
          }
          46.2500% {
            transform:translateX(39.997px)
          }
          46.6667% {
            transform:translateX(39.168px)
          }
          46.9543% {
            transform:translateX(38.571px)
          }
          47.0833% {
            transform:translateX(38.298px)
          }
          47.5000% {
            transform:translateX(37.393px)
          }
          47.9167% {
            transform:translateX(36.457px)
          }
          48.3333% {
            transform:translateX(35.496px)
          }
          48.7500% {
            transform:translateX(34.515px)
          }
          49.1667% {
            transform:translateX(33.518px)
          }
          49.5833% {
            transform:translateX(32.512px)
          }
          50.0000% {
            transform:translateX(31.5px)
          }
          50.4167% {
            transform:translateX(30.488px)
          }
          50.8333% {
            transform:translateX(29.482px)
          }
          51.2500% {
            transform:translateX(28.485px)
          }
          51.6667% {
            transform:translateX(27.504px)
          }
          52.0833% {
            transform:translateX(26.543px)
          }
          52.5000% {
            transform:translateX(25.607px)
          }
          52.9167% {
            transform:translateX(24.702px)
          }
          53.3333% {
            transform:translateX(23.832px)
          }
          53.7500% {
            transform:translateX(23.003px)
          }
          54.1667% {
            transform:translateX(22.219px)
          }
          54.5833% {
            transform:translateX(21.486px)
          }
          55.0000% {
            transform:translateX(20.808px)
          }
          55.4167% {
            transform:translateX(20.191px)
          }
          55.8333% {
            transform:translateX(19.64px)
          }
          56.2500% {
            transform:translateX(19.16px)
          }
          56.6667% {
            transform:translateX(18.756px)
          }
          57.0833% {
            transform:translateX(18.433px)
          }
          57.5000% {
            transform:translateX(18.196px)
          }
          57.9167% {
            transform:translateX(18.05px)
          }
          58.3333% {
            transform:translateX(18px)
          }
          58.7500% {
            transform:translateX(18px)
          }
          59.1667% {
            transform:translateX(18px)
          }
          59.5833% {
            transform:translateX(18px)
          }
          60.0000% {
            transform:translateX(18px)
          }
          60.4167% {
            transform:translateX(18px)
          }
          60.8333% {
            transform:translateX(18px)
          }
          61.2500% {
            transform:translateX(18px)
          }
          61.6667% {
            transform:translateX(18px)
          }
          62.0833% {
            transform:translateX(18px)
          }
          62.5000% {
            transform:translateX(18px)
          }
          62.9167% {
            transform:translateX(18px)
          }
          63.3333% {
            transform:translateX(18px)
          }
          63.7500% {
            transform:translateX(18px)
          }
          64.1667% {
            transform:translateX(18px)
          }
          64.5833% {
            transform:translateX(18px)
          }
          65.0000% {
            transform:translateX(18px)
          }
          65.4167% {
            transform:translateX(18px)
          }
          65.8333% {
            transform:translateX(18px)
          }
          66.2500% {
            transform:translateX(18px)
          }
          66.6667% {
            transform:translateX(18px)
          }
          67.0833% {
            transform:translateX(18px)
          }
          67.5000% {
            transform:translateX(18px)
          }
          67.9167% {
            transform:translateX(18px)
          }
          68.3333% {
            transform:translateX(18px)
          }
          68.7500% {
            transform:translateX(18px)
          }
          69.1667% {
            transform:translateX(18px)
          }
          69.5833% {
            transform:translateX(18px)
          }
          70.0000% {
            transform:translateX(18px)
          }
          70.4167% {
            transform:translateX(18px)
          }
          70.8333% {
            transform:translateX(18px)
          }
          71.2500% {
            transform:translateX(18px)
          }
          71.6667% {
            transform:translateX(18px)
          }
          72.0833% {
            transform:translateX(18px)
          }
          72.5000% {
            transform:translateX(18px)
          }
          72.9167% {
            transform:translateX(18px)
          }
          73.3333% {
            transform:translateX(18px)
          }
          73.7500% {
            transform:translateX(18px)
          }
          74.1667% {
            transform:translateX(18px)
          }
          74.5833% {
            transform:translateX(18px)
          }
          75.0000% {
            transform:translateX(18px)
          }
          75.4167% {
            transform:translateX(18px)
          }
          75.8333% {
            transform:translateX(18px)
          }
          76.2500% {
            transform:translateX(18px)
          }
          76.6667% {
            transform:translateX(18px)
          }
          77.0833% {
            transform:translateX(18px)
          }
          77.5000% {
            transform:translateX(18px)
          }
          77.9167% {
            transform:translateX(18px)
          }
          78.3333% {
            transform:translateX(18px)
          }
          78.7500% {
            transform:translateX(18px)
          }
          79.1667% {
            transform:translateX(18px)
          }
          79.5833% {
            transform:translateX(18px)
          }
          80.0000% {
            transform:translateX(18px)
          }
          80.4167% {
            transform:translateX(18px)
          }
          80.8333% {
            transform:translateX(18px)
          }
          81.2500% {
            transform:translateX(18px)
          }
          81.6667% {
            transform:translateX(18px)
          }
          82.0833% {
            transform:translateX(18px)
          }
          82.5000% {
            transform:translateX(18px)
          }
          82.9167% {
            transform:translateX(18px)
          }
          83.3333% {
            transform:translateX(18px)
          }
          83.7500% {
            transform:translateX(18px)
          }
          84.1667% {
            transform:translateX(18px)
          }
          84.5833% {
            transform:translateX(18px)
          }
          85.0000% {
            transform:translateX(18px)
          }
          85.4167% {
            transform:translateX(18px)
          }
          85.8333% {
            transform:translateX(18px)
          }
          86.2500% {
            transform:translateX(18px)
          }
          86.6667% {
            transform:translateX(18px)
          }
          87.0833% {
            transform:translateX(18px)
          }
          87.5000% {
            transform:translateX(18px)
          }
          87.9167% {
            transform:translateX(18px)
          }
          88.3333% {
            transform:translateX(18px)
          }
          88.7500% {
            transform:translateX(18px)
          }
          89.1667% {
            transform:translateX(18px)
          }
          89.5833% {
            transform:translateX(18px)
          }
          90.0000% {
            transform:translateX(18px)
          }
          90.4167% {
            transform:translateX(18px)
          }
          90.8333% {
            transform:translateX(18px)
          }
          91.2500% {
            transform:translateX(18px)
          }
          91.6667% {
            transform:translateX(18px)
          }
          92.0833% {
            transform:translateX(18px)
          }
          92.5000% {
            transform:translateX(18px)
          }
          92.9167% {
            transform:translateX(18px)
          }
          93.3333% {
            transform:translateX(18px)
          }
          93.7500% {
            transform:translateX(18px)
          }
          94.1667% {
            transform:translateX(18px)
          }
          94.5833% {
            transform:translateX(18px)
          }
          95.0000% {
            transform:translateX(18px)
          }
          95.4167% {
            transform:translateX(18px)
          }
          95.8333% {
            transform:translateX(18px)
          }
          96.2500% {
            transform:translateX(18px)
          }
          96.6667% {
            transform:translateX(18px)
          }
          97.0833% {
            transform:translateX(18px)
          }
          97.5000% {
            transform:translateX(18px)
          }
          97.9167% {
            transform:translateX(18px)
          }
          98.3333% {
            transform:translateX(18px)
          }
          98.7500% {
            transform:translateX(18px)
          }
          99.1667% {
            transform:translateX(18px)
          }
          99.5833% {
            transform:translateX(18px)
          }
          100.0000% {
            transform:translateX(18px)
          }
        }
        @keyframes caes-density {
          0.0000% {
            opacity:0.25
          }
          0.4167% {
            opacity:0.25
          }
          0.8333% {
            opacity:0.25
          }
          1.2500% {
            opacity:0.25
          }
          1.6667% {
            opacity:0.25
          }
          2.0833% {
            opacity:0.25
          }
          2.5000% {
            opacity:0.25
          }
          2.9167% {
            opacity:0.25
          }
          3.3333% {
            opacity:0.25
          }
          3.7500% {
            opacity:0.25
          }
          4.1667% {
            opacity:0.25
          }
          4.5833% {
            opacity:0.25
          }
          5.0000% {
            opacity:0.25
          }
          5.4167% {
            opacity:0.25
          }
          5.8333% {
            opacity:0.25
          }
          6.2500% {
            opacity:0.25
          }
          6.6667% {
            opacity:0.25
          }
          7.0833% {
            opacity:0.25
          }
          7.5000% {
            opacity:0.25
          }
          7.9167% {
            opacity:0.25
          }
          8.3333% {
            opacity:0.25
          }
          8.7500% {
            opacity:0.25
          }
          9.1667% {
            opacity:0.25
          }
          9.5833% {
            opacity:0.25
          }
          10.0000% {
            opacity:0.25
          }
          10.4167% {
            opacity:0.25
          }
          10.8333% {
            opacity:0.25
          }
          11.2500% {
            opacity:0.25
          }
          11.6667% {
            opacity:0.25
          }
          12.0833% {
            opacity:0.25
          }
          12.5000% {
            opacity:0.25
          }
          12.9167% {
            opacity:0.25
          }
          13.3333% {
            opacity:0.25
          }
          13.7500% {
            opacity:0.25
          }
          14.1667% {
            opacity:0.25
          }
          14.5833% {
            opacity:0.25
          }
          15.0000% {
            opacity:0.25
          }
          15.4167% {
            opacity:0.25
          }
          15.8333% {
            opacity:0.25
          }
          16.2500% {
            opacity:0.25
          }
          16.6667% {
            opacity:0.25
          }
          17.0833% {
            opacity:0.25
          }
          17.5000% {
            opacity:0.25
          }
          17.9167% {
            opacity:0.25
          }
          18.3333% {
            opacity:0.25
          }
          18.7500% {
            opacity:0.25
          }
          19.1667% {
            opacity:0.25
          }
          19.5833% {
            opacity:0.25
          }
          20.0000% {
            opacity:0.25
          }
          20.4167% {
            opacity:0.25
          }
          20.8333% {
            opacity:0.25
          }
          21.2500% {
            opacity:0.25
          }
          21.6667% {
            opacity:0.25
          }
          22.0833% {
            opacity:0.25
          }
          22.5000% {
            opacity:0.25
          }
          22.9167% {
            opacity:0.25
          }
          23.3333% {
            opacity:0.25
          }
          23.7500% {
            opacity:0.25
          }
          24.1667% {
            opacity:0.25
          }
          24.5833% {
            opacity:0.25
          }
          25.0000% {
            opacity:0.25
          }
          25.4167% {
            opacity:0.25
          }
          25.8333% {
            opacity:0.25
          }
          26.2368% {
            opacity:0.25
          }
          26.2500% {
            opacity:0.25
          }
          26.6667% {
            opacity:0.258
          }
          27.0833% {
            opacity:0.267
          }
          27.5000% {
            opacity:0.275
          }
          27.9167% {
            opacity:0.284
          }
          28.3333% {
            opacity:0.293
          }
          28.7500% {
            opacity:0.302
          }
          29.1667% {
            opacity:0.311
          }
          29.5833% {
            opacity:0.321
          }
          30.0000% {
            opacity:0.331
          }
          30.4167% {
            opacity:0.34
          }
          30.8333% {
            opacity:0.35
          }
          31.2500% {
            opacity:0.36
          }
          31.6667% {
            opacity:0.371
          }
          32.0833% {
            opacity:0.381
          }
          32.5000% {
            opacity:0.391
          }
          32.9167% {
            opacity:0.402
          }
          33.3333% {
            opacity:0.412
          }
          33.7500% {
            opacity:0.422
          }
          34.1667% {
            opacity:0.433
          }
          34.5833% {
            opacity:0.443
          }
          35.0000% {
            opacity:0.453
          }
          35.4167% {
            opacity:0.462
          }
          35.8333% {
            opacity:0.472
          }
          36.2500% {
            opacity:0.481
          }
          36.6667% {
            opacity:0.49
          }
          37.0833% {
            opacity:0.499
          }
          37.5000% {
            opacity:0.507
          }
          37.9167% {
            opacity:0.514
          }
          38.3333% {
            opacity:0.521
          }
          38.7500% {
            opacity:0.528
          }
          39.1667% {
            opacity:0.533
          }
          39.5833% {
            opacity:0.538
          }
          40.0000% {
            opacity:0.542
          }
          40.4167% {
            opacity:0.546
          }
          40.8333% {
            opacity:0.548
          }
          41.2500% {
            opacity:0.55
          }
          41.6667% {
            opacity:0.55
          }
          42.0833% {
            opacity:0.55
          }
          42.5000% {
            opacity:0.55
          }
          42.9167% {
            opacity:0.55
          }
          43.3333% {
            opacity:0.55
          }
          43.7500% {
            opacity:0.55
          }
          44.1667% {
            opacity:0.55
          }
          44.5833% {
            opacity:0.55
          }
          45.0000% {
            opacity:0.55
          }
          45.4167% {
            opacity:0.55
          }
          45.8333% {
            opacity:0.55
          }
          46.2500% {
            opacity:0.55
          }
          46.6667% {
            opacity:0.55
          }
          46.9543% {
            opacity:0.55
          }
          47.0833% {
            opacity:0.55
          }
          47.5000% {
            opacity:0.55
          }
          47.9167% {
            opacity:0.55
          }
          48.3333% {
            opacity:0.55
          }
          48.7500% {
            opacity:0.55
          }
          49.1667% {
            opacity:0.55
          }
          49.5833% {
            opacity:0.55
          }
          50.0000% {
            opacity:0.55
          }
          50.4167% {
            opacity:0.55
          }
          50.8333% {
            opacity:0.55
          }
          51.2500% {
            opacity:0.55
          }
          51.6667% {
            opacity:0.55
          }
          52.0833% {
            opacity:0.55
          }
          52.5000% {
            opacity:0.55
          }
          52.9167% {
            opacity:0.55
          }
          53.3333% {
            opacity:0.55
          }
          53.7500% {
            opacity:0.55
          }
          54.1667% {
            opacity:0.55
          }
          54.5833% {
            opacity:0.55
          }
          55.0000% {
            opacity:0.55
          }
          55.4167% {
            opacity:0.55
          }
          55.8333% {
            opacity:0.55
          }
          56.2500% {
            opacity:0.55
          }
          56.6667% {
            opacity:0.55
          }
          57.0833% {
            opacity:0.55
          }
          57.5000% {
            opacity:0.55
          }
          57.9167% {
            opacity:0.55
          }
          58.3333% {
            opacity:0.55
          }
          58.7500% {
            opacity:0.55
          }
          59.1667% {
            opacity:0.55
          }
          59.5833% {
            opacity:0.55
          }
          60.0000% {
            opacity:0.55
          }
          60.4167% {
            opacity:0.55
          }
          60.8333% {
            opacity:0.55
          }
          61.2500% {
            opacity:0.55
          }
          61.6667% {
            opacity:0.55
          }
          62.0833% {
            opacity:0.55
          }
          62.5000% {
            opacity:0.55
          }
          62.9167% {
            opacity:0.55
          }
          63.3333% {
            opacity:0.55
          }
          63.7500% {
            opacity:0.55
          }
          64.1667% {
            opacity:0.55
          }
          64.5833% {
            opacity:0.55
          }
          65.0000% {
            opacity:0.55
          }
          65.4167% {
            opacity:0.55
          }
          65.8333% {
            opacity:0.55
          }
          66.2500% {
            opacity:0.55
          }
          66.6667% {
            opacity:0.55
          }
          67.0833% {
            opacity:0.55
          }
          67.5000% {
            opacity:0.549
          }
          67.9167% {
            opacity:0.548
          }
          68.3333% {
            opacity:0.546
          }
          68.7500% {
            opacity:0.544
          }
          69.1667% {
            opacity:0.5416
          }
          69.5833% {
            opacity:0.539
          }
          70.0000% {
            opacity:0.535
          }
          70.4167% {
            opacity:0.532
          }
          70.8333% {
            opacity:0.528
          }
          71.2500% {
            opacity:0.523
          }
          71.6667% {
            opacity:0.519
          }
          72.0833% {
            opacity:0.514
          }
          72.5000% {
            opacity:0.509
          }
          72.9167% {
            opacity:0.503
          }
          73.3333% {
            opacity:0.497
          }
          73.7500% {
            opacity:0.491
          }
          74.1667% {
            opacity:0.485
          }
          74.5833% {
            opacity:0.479
          }
          75.0000% {
            opacity:0.472
          }
          75.4167% {
            opacity:0.465
          }
          75.8333% {
            opacity:0.459
          }
          76.2500% {
            opacity:0.452
          }
          76.6667% {
            opacity:0.444
          }
          77.0833% {
            opacity:0.437
          }
          77.5000% {
            opacity:0.43
          }
          77.9167% {
            opacity:0.422
          }
          78.3333% {
            opacity:0.415
          }
          78.7500% {
            opacity:0.407
          }
          79.1667% {
            opacity:0.4
          }
          79.5833% {
            opacity:0.393
          }
          80.0000% {
            opacity:0.385
          }
          80.4167% {
            opacity:0.378
          }
          80.8333% {
            opacity:0.37
          }
          81.2500% {
            opacity:0.363
          }
          81.6667% {
            opacity:0.356
          }
          82.0833% {
            opacity:0.348
          }
          82.5000% {
            opacity:0.341
          }
          82.9167% {
            opacity:0.335
          }
          83.3333% {
            opacity:0.328
          }
          83.7500% {
            opacity:0.321
          }
          84.1667% {
            opacity:0.3148
          }
          84.5833% {
            opacity:0.309
          }
          85.0000% {
            opacity:0.303
          }
          85.4167% {
            opacity:0.297
          }
          85.8333% {
            opacity:0.291
          }
          86.2500% {
            opacity:0.286
          }
          86.6667% {
            opacity:0.2812
          }
          87.0833% {
            opacity:0.277
          }
          87.5000% {
            opacity:0.272
          }
          87.9167% {
            opacity:0.268
          }
          88.3333% {
            opacity:0.265
          }
          88.7500% {
            opacity:0.261
          }
          89.1667% {
            opacity:0.2584
          }
          89.5833% {
            opacity:0.256
          }
          90.0000% {
            opacity:0.254
          }
          90.4167% {
            opacity:0.252
          }
          90.8333% {
            opacity:0.251
          }
          91.2500% {
            opacity:0.25
          }
          91.6667% {
            opacity:0.25
          }
          92.0833% {
            opacity:0.25
          }
          92.5000% {
            opacity:0.25
          }
          92.9167% {
            opacity:0.25
          }
          93.3333% {
            opacity:0.25
          }
          93.7500% {
            opacity:0.25
          }
          94.1667% {
            opacity:0.25
          }
          94.5833% {
            opacity:0.25
          }
          95.0000% {
            opacity:0.25
          }
          95.4167% {
            opacity:0.25
          }
          95.8333% {
            opacity:0.25
          }
          96.2500% {
            opacity:0.25
          }
          96.6667% {
            opacity:0.25
          }
          97.0833% {
            opacity:0.25
          }
          97.5000% {
            opacity:0.25
          }
          97.9167% {
            opacity:0.25
          }
          98.3333% {
            opacity:0.25
          }
          98.7500% {
            opacity:0.25
          }
          99.1667% {
            opacity:0.25
          }
          99.5833% {
            opacity:0.25
          }
          100.0000% {
            opacity:0.25
          }
        }
        @keyframes caes-pressure {
          0.0000% {
            transform:rotate(-45deg)
          }
          0.4167% {
            transform:rotate(-45deg)
          }
          0.8333% {
            transform:rotate(-45deg)
          }
          1.2500% {
            transform:rotate(-45deg)
          }
          1.6667% {
            transform:rotate(-45deg)
          }
          2.0833% {
            transform:rotate(-45deg)
          }
          2.5000% {
            transform:rotate(-45deg)
          }
          2.9167% {
            transform:rotate(-45deg)
          }
          3.3333% {
            transform:rotate(-45deg)
          }
          3.7500% {
            transform:rotate(-45deg)
          }
          4.1667% {
            transform:rotate(-45deg)
          }
          4.5833% {
            transform:rotate(-45deg)
          }
          5.0000% {
            transform:rotate(-45deg)
          }
          5.4167% {
            transform:rotate(-45deg)
          }
          5.8333% {
            transform:rotate(-45deg)
          }
          6.2500% {
            transform:rotate(-45deg)
          }
          6.6667% {
            transform:rotate(-45deg)
          }
          7.0833% {
            transform:rotate(-45deg)
          }
          7.5000% {
            transform:rotate(-45deg)
          }
          7.9167% {
            transform:rotate(-45deg)
          }
          8.3333% {
            transform:rotate(-45deg)
          }
          8.7500% {
            transform:rotate(-45deg)
          }
          9.1667% {
            transform:rotate(-45deg)
          }
          9.5833% {
            transform:rotate(-45deg)
          }
          10.0000% {
            transform:rotate(-45deg)
          }
          10.4167% {
            transform:rotate(-45deg)
          }
          10.8333% {
            transform:rotate(-45deg)
          }
          11.2500% {
            transform:rotate(-45deg)
          }
          11.6667% {
            transform:rotate(-45deg)
          }
          12.0833% {
            transform:rotate(-45deg)
          }
          12.5000% {
            transform:rotate(-45deg)
          }
          12.9167% {
            transform:rotate(-45deg)
          }
          13.3333% {
            transform:rotate(-45deg)
          }
          13.7500% {
            transform:rotate(-45deg)
          }
          14.1667% {
            transform:rotate(-45deg)
          }
          14.5833% {
            transform:rotate(-45deg)
          }
          15.0000% {
            transform:rotate(-45deg)
          }
          15.4167% {
            transform:rotate(-45deg)
          }
          15.8333% {
            transform:rotate(-45deg)
          }
          16.2500% {
            transform:rotate(-45deg)
          }
          16.6667% {
            transform:rotate(-45deg)
          }
          17.0833% {
            transform:rotate(-45deg)
          }
          17.5000% {
            transform:rotate(-45deg)
          }
          17.9167% {
            transform:rotate(-45deg)
          }
          18.3333% {
            transform:rotate(-45deg)
          }
          18.7500% {
            transform:rotate(-45deg)
          }
          19.1667% {
            transform:rotate(-45deg)
          }
          19.5833% {
            transform:rotate(-45deg)
          }
          20.0000% {
            transform:rotate(-45deg)
          }
          20.4167% {
            transform:rotate(-45deg)
          }
          20.8333% {
            transform:rotate(-45deg)
          }
          21.2500% {
            transform:rotate(-45deg)
          }
          21.6667% {
            transform:rotate(-45deg)
          }
          22.0833% {
            transform:rotate(-45deg)
          }
          22.5000% {
            transform:rotate(-45deg)
          }
          22.9167% {
            transform:rotate(-45deg)
          }
          23.3333% {
            transform:rotate(-45deg)
          }
          23.7500% {
            transform:rotate(-45deg)
          }
          24.1667% {
            transform:rotate(-45deg)
          }
          24.5833% {
            transform:rotate(-45deg)
          }
          25.0000% {
            transform:rotate(-45deg)
          }
          25.4167% {
            transform:rotate(-45deg)
          }
          25.8333% {
            transform:rotate(-45deg)
          }
          26.2368% {
            transform:rotate(-45deg)
          }
          26.2500% {
            transform:rotate(-44.924deg)
          }
          26.6667% {
            transform:rotate(-42.487deg)
          }
          27.0833% {
            transform:rotate(-39.986deg)
          }
          27.5000% {
            transform:rotate(-37.423deg)
          }
          27.9167% {
            transform:rotate(-34.798deg)
          }
          28.3333% {
            transform:rotate(-32.113deg)
          }
          28.7500% {
            transform:rotate(-29.369deg)
          }
          29.1667% {
            transform:rotate(-26.57deg)
          }
          29.5833% {
            transform:rotate(-23.717deg)
          }
          30.0000% {
            transform:rotate(-20.815deg)
          }
          30.4167% {
            transform:rotate(-17.867deg)
          }
          30.8333% {
            transform:rotate(-14.878deg)
          }
          31.2500% {
            transform:rotate(-11.851deg)
          }
          31.6667% {
            transform:rotate(-8.795deg)
          }
          32.0833% {
            transform:rotate(-5.714deg)
          }
          32.5000% {
            transform:rotate(-2.616deg)
          }
          32.9167% {
            transform:rotate(0.49deg)
          }
          33.3333% {
            transform:rotate(3.597deg)
          }
          33.7500% {
            transform:rotate(6.693deg)
          }
          34.1667% {
            transform:rotate(9.768deg)
          }
          34.5833% {
            transform:rotate(12.811deg)
          }
          35.0000% {
            transform:rotate(15.809deg)
          }
          35.4167% {
            transform:rotate(18.748deg)
          }
          35.8333% {
            transform:rotate(21.615deg)
          }
          36.2500% {
            transform:rotate(24.394deg)
          }
          36.6667% {
            transform:rotate(27.069deg)
          }
          37.0833% {
            transform:rotate(29.624deg)
          }
          37.5000% {
            transform:rotate(32.043deg)
          }
          37.9167% {
            transform:rotate(34.307deg)
          }
          38.3333% {
            transform:rotate(36.4deg)
          }
          38.7500% {
            transform:rotate(38.304deg)
          }
          39.1667% {
            transform:rotate(40.002deg)
          }
          39.5833% {
            transform:rotate(41.477deg)
          }
          40.0000% {
            transform:rotate(42.714deg)
          }
          40.4167% {
            transform:rotate(43.698deg)
          }
          40.8333% {
            transform:rotate(44.415deg)
          }
          41.2500% {
            transform:rotate(44.852deg)
          }
          41.6667% {
            transform:rotate(45deg)
          }
          42.0833% {
            transform:rotate(45deg)
          }
          42.5000% {
            transform:rotate(45deg)
          }
          42.9167% {
            transform:rotate(45deg)
          }
          43.3333% {
            transform:rotate(45deg)
          }
          43.7500% {
            transform:rotate(45deg)
          }
          44.1667% {
            transform:rotate(45deg)
          }
          44.5833% {
            transform:rotate(45deg)
          }
          45.0000% {
            transform:rotate(45deg)
          }
          45.4167% {
            transform:rotate(45deg)
          }
          45.8333% {
            transform:rotate(45deg)
          }
          46.2500% {
            transform:rotate(45deg)
          }
          46.6667% {
            transform:rotate(45deg)
          }
          46.9543% {
            transform:rotate(45deg)
          }
          47.0833% {
            transform:rotate(45deg)
          }
          47.5000% {
            transform:rotate(45deg)
          }
          47.9167% {
            transform:rotate(45deg)
          }
          48.3333% {
            transform:rotate(45deg)
          }
          48.7500% {
            transform:rotate(45deg)
          }
          49.1667% {
            transform:rotate(45deg)
          }
          49.5833% {
            transform:rotate(45deg)
          }
          50.0000% {
            transform:rotate(45deg)
          }
          50.4167% {
            transform:rotate(45deg)
          }
          50.8333% {
            transform:rotate(45deg)
          }
          51.2500% {
            transform:rotate(45deg)
          }
          51.6667% {
            transform:rotate(45deg)
          }
          52.0833% {
            transform:rotate(45deg)
          }
          52.5000% {
            transform:rotate(45deg)
          }
          52.9167% {
            transform:rotate(45deg)
          }
          53.3333% {
            transform:rotate(45deg)
          }
          53.7500% {
            transform:rotate(45deg)
          }
          54.1667% {
            transform:rotate(45deg)
          }
          54.5833% {
            transform:rotate(45deg)
          }
          55.0000% {
            transform:rotate(45deg)
          }
          55.4167% {
            transform:rotate(45deg)
          }
          55.8333% {
            transform:rotate(45deg)
          }
          56.2500% {
            transform:rotate(45deg)
          }
          56.6667% {
            transform:rotate(45deg)
          }
          57.0833% {
            transform:rotate(45deg)
          }
          57.5000% {
            transform:rotate(45deg)
          }
          57.9167% {
            transform:rotate(45deg)
          }
          58.3333% {
            transform:rotate(45deg)
          }
          58.7500% {
            transform:rotate(45deg)
          }
          59.1667% {
            transform:rotate(45deg)
          }
          59.5833% {
            transform:rotate(45deg)
          }
          60.0000% {
            transform:rotate(45deg)
          }
          60.4167% {
            transform:rotate(45deg)
          }
          60.8333% {
            transform:rotate(45deg)
          }
          61.2500% {
            transform:rotate(45deg)
          }
          61.6667% {
            transform:rotate(45deg)
          }
          62.0833% {
            transform:rotate(45deg)
          }
          62.5000% {
            transform:rotate(45deg)
          }
          62.9167% {
            transform:rotate(45deg)
          }
          63.3333% {
            transform:rotate(45deg)
          }
          63.7500% {
            transform:rotate(45deg)
          }
          64.1667% {
            transform:rotate(45deg)
          }
          64.5833% {
            transform:rotate(45deg)
          }
          65.0000% {
            transform:rotate(45deg)
          }
          65.4167% {
            transform:rotate(45deg)
          }
          65.8333% {
            transform:rotate(45deg)
          }
          66.2500% {
            transform:rotate(45deg)
          }
          66.6667% {
            transform:rotate(45deg)
          }
          67.0833% {
            transform:rotate(44.926deg)
          }
          67.5000% {
            transform:rotate(44.707deg)
          }
          67.9167% {
            transform:rotate(44.347deg)
          }
          68.3333% {
            transform:rotate(43.853deg)
          }
          68.7500% {
            transform:rotate(43.229deg)
          }
          69.1667% {
            transform:rotate(42.48deg)
          }
          69.5833% {
            transform:rotate(41.611deg)
          }
          70.0000% {
            transform:rotate(40.627deg)
          }
          70.4167% {
            transform:rotate(39.5325deg)
          }
          70.8333% {
            transform:rotate(38.333deg)
          }
          71.2500% {
            transform:rotate(37.034deg)
          }
          71.6667% {
            transform:rotate(35.64deg)
          }
          72.0833% {
            transform:rotate(34.156deg)
          }
          72.5000% {
            transform:rotate(32.587deg)
          }
          72.9167% {
            transform:rotate(30.938deg)
          }
          73.3333% {
            transform:rotate(29.213deg)
          }
          73.7500% {
            transform:rotate(27.419deg)
          }
          74.1667% {
            transform:rotate(25.56deg)
          }
          74.5833% {
            transform:rotate(23.641deg)
          }
          75.0000% {
            transform:rotate(21.667deg)
          }
          75.4167% {
            transform:rotate(19.642deg)
          }
          75.8333% {
            transform:rotate(17.573deg)
          }
          76.2500% {
            transform:rotate(15.464deg)
          }
          76.6667% {
            transform:rotate(13.32deg)
          }
          77.0833% {
            transform:rotate(11.146deg)
          }
          77.5000% {
            transform:rotate(8.947deg)
          }
          77.9167% {
            transform:rotate(6.728deg)
          }
          78.3333% {
            transform:rotate(4.493deg)
          }
          78.7500% {
            transform:rotate(2.249deg)
          }
          79.1667% {
            transform:rotate(-2.132e-14deg)
          }
          79.5833% {
            transform:rotate(-2.249deg)
          }
          80.0000% {
            transform:rotate(-4.493deg)
          }
          80.4167% {
            transform:rotate(-6.728deg)
          }
          80.8333% {
            transform:rotate(-8.947deg)
          }
          81.2500% {
            transform:rotate(-11.146deg)
          }
          81.6667% {
            transform:rotate(-13.32deg)
          }
          82.0833% {
            transform:rotate(-15.464deg)
          }
          82.5000% {
            transform:rotate(-17.573deg)
          }
          82.9167% {
            transform:rotate(-19.642deg)
          }
          83.3333% {
            transform:rotate(-21.667deg)
          }
          83.7500% {
            transform:rotate(-23.641deg)
          }
          84.1667% {
            transform:rotate(-25.56deg)
          }
          84.5833% {
            transform:rotate(-27.419deg)
          }
          85.0000% {
            transform:rotate(-29.213deg)
          }
          85.4167% {
            transform:rotate(-30.937deg)
          }
          85.8333% {
            transform:rotate(-32.587deg)
          }
          86.2500% {
            transform:rotate(-34.156deg)
          }
          86.6667% {
            transform:rotate(-35.64deg)
          }
          87.0833% {
            transform:rotate(-37.034deg)
          }
          87.5000% {
            transform:rotate(-38.333deg)
          }
          87.9167% {
            transform:rotate(-39.533deg)
          }
          88.3333% {
            transform:rotate(-40.627deg)
          }
          88.7500% {
            transform:rotate(-41.611deg)
          }
          89.1667% {
            transform:rotate(-42.48deg)
          }
          89.5833% {
            transform:rotate(-43.229deg)
          }
          90.0000% {
            transform:rotate(-43.853deg)
          }
          90.4167% {
            transform:rotate(-44.347deg)
          }
          90.8333% {
            transform:rotate(-44.707deg)
          }
          91.2500% {
            transform:rotate(-44.926deg)
          }
          91.6667% {
            transform:rotate(-45deg)
          }
          92.0833% {
            transform:rotate(-45deg)
          }
          92.5000% {
            transform:rotate(-45deg)
          }
          92.9167% {
            transform:rotate(-45deg)
          }
          93.3333% {
            transform:rotate(-45deg)
          }
          93.7500% {
            transform:rotate(-45deg)
          }
          94.1667% {
            transform:rotate(-45deg)
          }
          94.5833% {
            transform:rotate(-45deg)
          }
          95.0000% {
            transform:rotate(-45deg)
          }
          95.4167% {
            transform:rotate(-45deg)
          }
          95.8333% {
            transform:rotate(-45deg)
          }
          96.2500% {
            transform:rotate(-45deg)
          }
          96.6667% {
            transform:rotate(-45deg)
          }
          97.0833% {
            transform:rotate(-45deg)
          }
          97.5000% {
            transform:rotate(-45deg)
          }
          97.9167% {
            transform:rotate(-45deg)
          }
          98.3333% {
            transform:rotate(-45deg)
          }
          98.7500% {
            transform:rotate(-45deg)
          }
          99.1667% {
            transform:rotate(-45deg)
          }
          99.5833% {
            transform:rotate(-45deg)
          }
          100.0000% {
            transform:rotate(-45deg)
          }
        }
        @keyframes caes-rotation {
          0.0000% {
            transform:rotate(0deg)
          }
          0.4167% {
            transform:rotate(0deg)
          }
          0.8333% {
            transform:rotate(0deg)
          }
          1.2500% {
            transform:rotate(0deg)
          }
          1.6667% {
            transform:rotate(0deg)
          }
          2.0833% {
            transform:rotate(0deg)
          }
          2.5000% {
            transform:rotate(0deg)
          }
          2.9167% {
            transform:rotate(0deg)
          }
          3.3333% {
            transform:rotate(0deg)
          }
          3.7500% {
            transform:rotate(0deg)
          }
          4.1667% {
            transform:rotate(0deg)
          }
          4.5833% {
            transform:rotate(0deg)
          }
          5.0000% {
            transform:rotate(0deg)
          }
          5.4167% {
            transform:rotate(0deg)
          }
          5.8333% {
            transform:rotate(0deg)
          }
          6.2500% {
            transform:rotate(0deg)
          }
          6.6667% {
            transform:rotate(0deg)
          }
          7.0833% {
            transform:rotate(0deg)
          }
          7.5000% {
            transform:rotate(0deg)
          }
          7.9167% {
            transform:rotate(0deg)
          }
          8.3333% {
            transform:rotate(0deg)
          }
          8.7500% {
            transform:rotate(0deg)
          }
          9.1667% {
            transform:rotate(0deg)
          }
          9.5833% {
            transform:rotate(0deg)
          }
          10.0000% {
            transform:rotate(0deg)
          }
          10.4167% {
            transform:rotate(0deg)
          }
          10.8333% {
            transform:rotate(0deg)
          }
          11.2500% {
            transform:rotate(0deg)
          }
          11.6667% {
            transform:rotate(0deg)
          }
          12.0833% {
            transform:rotate(0deg)
          }
          12.5000% {
            transform:rotate(0deg)
          }
          12.9167% {
            transform:rotate(0deg)
          }
          13.3333% {
            transform:rotate(0deg)
          }
          13.7500% {
            transform:rotate(0deg)
          }
          14.1667% {
            transform:rotate(0deg)
          }
          14.5833% {
            transform:rotate(0deg)
          }
          15.0000% {
            transform:rotate(0deg)
          }
          15.4167% {
            transform:rotate(0deg)
          }
          15.8333% {
            transform:rotate(0deg)
          }
          16.2500% {
            transform:rotate(0deg)
          }
          16.6667% {
            transform:rotate(0deg)
          }
          17.0833% {
            transform:rotate(0deg)
          }
          17.5000% {
            transform:rotate(0deg)
          }
          17.9167% {
            transform:rotate(0deg)
          }
          18.3333% {
            transform:rotate(0deg)
          }
          18.7500% {
            transform:rotate(0deg)
          }
          19.1667% {
            transform:rotate(0deg)
          }
          19.5833% {
            transform:rotate(0deg)
          }
          20.0000% {
            transform:rotate(0deg)
          }
          20.4167% {
            transform:rotate(0deg)
          }
          20.8333% {
            transform:rotate(0deg)
          }
          21.2500% {
            transform:rotate(0deg)
          }
          21.6667% {
            transform:rotate(0deg)
          }
          22.0833% {
            transform:rotate(0deg)
          }
          22.5000% {
            transform:rotate(0deg)
          }
          22.9167% {
            transform:rotate(0deg)
          }
          23.3333% {
            transform:rotate(0deg)
          }
          23.7500% {
            transform:rotate(0deg)
          }
          24.1667% {
            transform:rotate(0deg)
          }
          24.5833% {
            transform:rotate(0deg)
          }
          25.0000% {
            transform:rotate(0deg)
          }
          25.4167% {
            transform:rotate(0deg)
          }
          25.8333% {
            transform:rotate(0deg)
          }
          26.2368% {
            transform:rotate(0deg)
          }
          26.2500% {
            transform:rotate(0deg)
          }
          26.6667% {
            transform:rotate(0deg)
          }
          27.0833% {
            transform:rotate(0deg)
          }
          27.5000% {
            transform:rotate(0deg)
          }
          27.9167% {
            transform:rotate(0deg)
          }
          28.3333% {
            transform:rotate(0deg)
          }
          28.7500% {
            transform:rotate(0deg)
          }
          29.1667% {
            transform:rotate(0deg)
          }
          29.5833% {
            transform:rotate(0deg)
          }
          30.0000% {
            transform:rotate(0deg)
          }
          30.4167% {
            transform:rotate(0deg)
          }
          30.8333% {
            transform:rotate(0deg)
          }
          31.2500% {
            transform:rotate(0deg)
          }
          31.6667% {
            transform:rotate(0deg)
          }
          32.0833% {
            transform:rotate(0deg)
          }
          32.5000% {
            transform:rotate(0deg)
          }
          32.9167% {
            transform:rotate(0deg)
          }
          33.3333% {
            transform:rotate(0deg)
          }
          33.7500% {
            transform:rotate(0deg)
          }
          34.1667% {
            transform:rotate(0deg)
          }
          34.5833% {
            transform:rotate(0deg)
          }
          35.0000% {
            transform:rotate(0deg)
          }
          35.4167% {
            transform:rotate(0deg)
          }
          35.8333% {
            transform:rotate(0deg)
          }
          36.2500% {
            transform:rotate(0deg)
          }
          36.6667% {
            transform:rotate(0deg)
          }
          37.0833% {
            transform:rotate(0deg)
          }
          37.5000% {
            transform:rotate(0deg)
          }
          37.9167% {
            transform:rotate(0deg)
          }
          38.3333% {
            transform:rotate(0deg)
          }
          38.7500% {
            transform:rotate(0deg)
          }
          39.1667% {
            transform:rotate(0deg)
          }
          39.5833% {
            transform:rotate(0deg)
          }
          40.0000% {
            transform:rotate(0deg)
          }
          40.4167% {
            transform:rotate(0deg)
          }
          40.8333% {
            transform:rotate(0deg)
          }
          41.2500% {
            transform:rotate(0deg)
          }
          41.6667% {
            transform:rotate(0deg)
          }
          42.0833% {
            transform:rotate(0deg)
          }
          42.5000% {
            transform:rotate(0deg)
          }
          42.9167% {
            transform:rotate(0deg)
          }
          43.3333% {
            transform:rotate(0deg)
          }
          43.7500% {
            transform:rotate(0deg)
          }
          44.1667% {
            transform:rotate(0deg)
          }
          44.5833% {
            transform:rotate(0deg)
          }
          45.0000% {
            transform:rotate(0deg)
          }
          45.4167% {
            transform:rotate(0deg)
          }
          45.8333% {
            transform:rotate(0deg)
          }
          46.2500% {
            transform:rotate(0deg)
          }
          46.6667% {
            transform:rotate(0deg)
          }
          46.9543% {
            transform:rotate(0deg)
          }
          47.0833% {
            transform:rotate(0deg)
          }
          47.5000% {
            transform:rotate(0deg)
          }
          47.9167% {
            transform:rotate(0deg)
          }
          48.3333% {
            transform:rotate(0deg)
          }
          48.7500% {
            transform:rotate(0deg)
          }
          49.1667% {
            transform:rotate(0deg)
          }
          49.5833% {
            transform:rotate(0deg)
          }
          50.0000% {
            transform:rotate(0deg)
          }
          50.4167% {
            transform:rotate(0deg)
          }
          50.8333% {
            transform:rotate(0deg)
          }
          51.2500% {
            transform:rotate(0deg)
          }
          51.6667% {
            transform:rotate(0deg)
          }
          52.0833% {
            transform:rotate(0deg)
          }
          52.5000% {
            transform:rotate(0deg)
          }
          52.9167% {
            transform:rotate(0deg)
          }
          53.3333% {
            transform:rotate(0deg)
          }
          53.7500% {
            transform:rotate(0deg)
          }
          54.1667% {
            transform:rotate(0deg)
          }
          54.5833% {
            transform:rotate(0deg)
          }
          55.0000% {
            transform:rotate(0deg)
          }
          55.4167% {
            transform:rotate(0deg)
          }
          55.8333% {
            transform:rotate(0deg)
          }
          56.2500% {
            transform:rotate(0deg)
          }
          56.6667% {
            transform:rotate(0deg)
          }
          57.0833% {
            transform:rotate(0deg)
          }
          57.5000% {
            transform:rotate(0deg)
          }
          57.9167% {
            transform:rotate(0deg)
          }
          58.3333% {
            transform:rotate(0deg)
          }
          58.7500% {
            transform:rotate(0deg)
          }
          59.1667% {
            transform:rotate(0deg)
          }
          59.5833% {
            transform:rotate(0deg)
          }
          60.0000% {
            transform:rotate(0deg)
          }
          60.4167% {
            transform:rotate(0deg)
          }
          60.8333% {
            transform:rotate(0deg)
          }
          61.2500% {
            transform:rotate(0deg)
          }
          61.6667% {
            transform:rotate(0deg)
          }
          62.0833% {
            transform:rotate(0deg)
          }
          62.5000% {
            transform:rotate(0deg)
          }
          62.9167% {
            transform:rotate(0deg)
          }
          63.3333% {
            transform:rotate(0deg)
          }
          63.7500% {
            transform:rotate(0deg)
          }
          64.1667% {
            transform:rotate(0deg)
          }
          64.5833% {
            transform:rotate(0deg)
          }
          65.0000% {
            transform:rotate(0deg)
          }
          65.4167% {
            transform:rotate(0deg)
          }
          65.8333% {
            transform:rotate(0deg)
          }
          66.2500% {
            transform:rotate(0deg)
          }
          66.6667% {
            transform:rotate(0deg)
          }
          67.0833% {
            transform:rotate(0.726deg)
          }
          67.5000% {
            transform:rotate(2.869deg)
          }
          67.9167% {
            transform:rotate(6.378deg)
          }
          68.3333% {
            transform:rotate(11.198deg)
          }
          68.7500% {
            transform:rotate(17.275deg)
          }
          69.1667% {
            transform:rotate(24.551deg)
          }
          69.5833% {
            transform:rotate(32.967deg)
          }
          70.0000% {
            transform:rotate(42.466deg)
          }
          70.4167% {
            transform:rotate(52.986deg)
          }
          70.8333% {
            transform:rotate(64.467deg)
          }
          71.2500% {
            transform:rotate(76.848deg)
          }
          71.6667% {
            transform:rotate(90.067deg)
          }
          72.0833% {
            transform:rotate(104.063deg)
          }
          72.5000% {
            transform:rotate(118.774deg)
          }
          72.9167% {
            transform:rotate(134.138deg)
          }
          73.3333% {
            transform:rotate(150.095deg)
          }
          73.7500% {
            transform:rotate(166.583deg)
          }
          74.1667% {
            transform:rotate(183.543deg)
          }
          74.5833% {
            transform:rotate(200.913deg)
          }
          75.0000% {
            transform:rotate(218.637deg)
          }
          75.4167% {
            transform:rotate(236.655deg)
          }
          75.8333% {
            transform:rotate(254.91deg)
          }
          76.2500% {
            transform:rotate(273.348deg)
          }
          76.6667% {
            transform:rotate(291.912deg)
          }
          77.0833% {
            transform:rotate(310.55deg)
          }
          77.5000% {
            transform:rotate(329.211deg)
          }
          77.9167% {
            transform:rotate(347.843deg)
          }
          78.3333% {
            transform:rotate(366.397deg)
          }
          78.7500% {
            transform:rotate(384.827deg)
          }
          79.1667% {
            transform:rotate(403.088deg)
          }
          79.5833% {
            transform:rotate(421.135deg)
          }
          80.0000% {
            transform:rotate(438.926deg)
          }
          80.4167% {
            transform:rotate(456.423deg)
          }
          80.8333% {
            transform:rotate(473.586deg)
          }
          81.2500% {
            transform:rotate(490.38deg)
          }
          81.6667% {
            transform:rotate(506.771deg)
          }
          82.0833% {
            transform:rotate(522.726deg)
          }
          82.5000% {
            transform:rotate(538.216deg)
          }
          82.9167% {
            transform:rotate(553.213deg)
          }
          83.3333% {
            transform:rotate(567.69deg)
          }
          83.7500% {
            transform:rotate(581.622deg)
          }
          84.1667% {
            transform:rotate(594.988deg)
          }
          84.5833% {
            transform:rotate(607.767deg)
          }
          85.0000% {
            transform:rotate(619.939deg)
          }
          85.4167% {
            transform:rotate(631.486deg)
          }
          85.8333% {
            transform:rotate(642.393deg)
          }
          86.2500% {
            transform:rotate(652.643deg)
          }
          86.6667% {
            transform:rotate(662.223deg)
          }
          87.0833% {
            transform:rotate(671.12deg)
          }
          87.5000% {
            transform:rotate(679.32deg)
          }
          87.9167% {
            transform:rotate(686.811deg)
          }
          88.3333% {
            transform:rotate(693.58deg)
          }
          88.7500% {
            transform:rotate(699.615deg)
          }
          89.1667% {
            transform:rotate(704.901deg)
          }
          89.5833% {
            transform:rotate(709.426deg)
          }
          90.0000% {
            transform:rotate(713.172deg)
          }
          90.4167% {
            transform:rotate(716.123deg)
          }
          90.8333% {
            transform:rotate(718.26deg)
          }
          91.2500% {
            transform:rotate(719.561deg)
          }
          91.6667% {
            transform:rotate(720deg)
          }
          92.0833% {
            transform:rotate(720deg)
          }
          92.5000% {
            transform:rotate(720deg)
          }
          92.9167% {
            transform:rotate(720deg)
          }
          93.3333% {
            transform:rotate(720deg)
          }
          93.7500% {
            transform:rotate(720deg)
          }
          94.1667% {
            transform:rotate(720deg)
          }
          94.5833% {
            transform:rotate(720deg)
          }
          95.0000% {
            transform:rotate(720deg)
          }
          95.4167% {
            transform:rotate(720deg)
          }
          95.8333% {
            transform:rotate(720deg)
          }
          96.2500% {
            transform:rotate(720deg)
          }
          96.6667% {
            transform:rotate(720deg)
          }
          97.0833% {
            transform:rotate(720deg)
          }
          97.5000% {
            transform:rotate(720deg)
          }
          97.9167% {
            transform:rotate(720deg)
          }
          98.3333% {
            transform:rotate(720deg)
          }
          98.7500% {
            transform:rotate(720deg)
          }
          99.1667% {
            transform:rotate(720deg)
          }
          99.5833% {
            transform:rotate(720deg)
          }
          100.0000% {
            transform:rotate(720deg)
          }
        }
        @keyframes caes-power {
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
          26.2368% {
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
          46.9543% {
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
            opacity:0.074
          }
          67.5000% {
            opacity:0.144
          }
          67.9167% {
            opacity:0.213
          }
          68.3333% {
            opacity:0.278
          }
          68.7500% {
            opacity:0.341
          }
          69.1667% {
            opacity:0.4
          }
          69.5833% {
            opacity:0.457
          }
          70.0000% {
            opacity:0.51
          }
          70.4167% {
            opacity:0.561
          }
          70.8333% {
            opacity:0.608
          }
          71.2500% {
            opacity:0.653
          }
          71.6667% {
            opacity:0.694
          }
          72.0833% {
            opacity:0.732
          }
          72.5000% {
            opacity:0.767
          }
          72.9167% {
            opacity:0.798
          }
          73.3333% {
            opacity:0.827
          }
          73.7500% {
            opacity:0.852
          }
          74.1667% {
            opacity:0.875
          }
          74.5833% {
            opacity:0.894
          }
          75.0000% {
            opacity:0.911
          }
          75.4167% {
            opacity:0.924
          }
          75.8333% {
            opacity:0.935
          }
          76.2500% {
            opacity:0.943
          }
          76.6667% {
            opacity:0.948
          }
          77.0833% {
            opacity:0.951
          }
          77.5000% {
            opacity:0.95
          }
          77.9167% {
            opacity:0.948
          }
          78.3333% {
            opacity:0.942
          }
          78.7500% {
            opacity:0.935
          }
          79.1667% {
            opacity:0.925
          }
          79.5833% {
            opacity:0.913
          }
          80.0000% {
            opacity:0.899
          }
          80.4167% {
            opacity:0.883
          }
          80.8333% {
            opacity:0.865
          }
          81.2500% {
            opacity:0.846
          }
          81.6667% {
            opacity:0.824
          }
          82.0833% {
            opacity:0.801
          }
          82.5000% {
            opacity:0.777
          }
          82.9167% {
            opacity:0.751
          }
          83.3333% {
            opacity:0.724
          }
          83.7500% {
            opacity:0.696
          }
          84.1667% {
            opacity:0.666
          }
          84.5833% {
            opacity:0.636
          }
          85.0000% {
            opacity:0.604
          }
          85.4167% {
            opacity:0.572
          }
          85.8333% {
            opacity:0.539
          }
          86.2500% {
            opacity:0.505
          }
          86.6667% {
            opacity:0.471
          }
          87.0833% {
            opacity:0.436
          }
          87.5000% {
            opacity:0.4
          }
          87.9167% {
            opacity:0.363
          }
          88.3333% {
            opacity:0.326
          }
          88.7500% {
            opacity:0.288
          }
          89.1667% {
            opacity:0.25
          }
          89.5833% {
            opacity:0.211
          }
          90.0000% {
            opacity:0.171
          }
          90.4167% {
            opacity:0.13
          }
          90.8333% {
            opacity:0.088
          }
          91.2500% {
            opacity:0.045
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
        @keyframes caes-compression-heat {
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
          26.2368% {
            opacity:0.994
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
          46.9543% {
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
        @keyframes caes-delivery {
          0% {
            d:path("M59 61L65 67M65 61L59 67")
          }
          26.2368% {
            d:path("M59 61L62 67M65 61L62 67")
          }
          41.6667% {
            d:path("M59 61L65 67M65 61L59 67")
          }
        }
        @keyframes caes-intake {
          0% {
            d:path("M50 25L56 31M56 25L50 31")
          }
          46.9543% {
            d:path("M50 25L50 31M56 31L50 31")
          }
          58.3333% {
            d:path("M50 25L56 31M56 25L50 31")
          }
        }
        @keyframes caes-release {
          0% {
            d:path("M109 73L115 78M115 73L109 78")
          }
          66.6667% {
            d:path("M109 78L112 73M115 78L112 73")
          }
          91.6667% {
            d:path("M109 73L115 78M115 73L109 78")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Compressed-Air Energy Storage">
        <path class="ambient" d="M55 16H61M58 16V21L48 32"/>
        <path class="delivery-pipe" d="M48 46H62V83"/>
        <path class="tank" d="M42 88Q42 83 50 83H96Q104 83 104 91V117Q103 126 94 126H52Q42 126 42 117Z"/>
        <g class="tank-density" opacity="0.4">
          <circle fill="#77c9ef" cx="48" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="56" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="64" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="72" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="80" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="88" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="96" cy="89" r="1.5"/>
          <circle fill="#77c9ef" cx="48" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="56" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="64" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="72" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="80" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="88" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="96" cy="99" r="1.5"/>
          <circle fill="#77c9ef" cx="48" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="56" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="64" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="72" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="80" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="88" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="96" cy="109" r="1.5"/>
          <circle fill="#77c9ef" cx="48" cy="119" r="1.5"/>
          <circle fill="#77c9ef" cx="56" cy="119" r="1.5"/>
          <circle fill="#77c9ef" cx="64" cy="119" r="1.5"/>
          <circle fill="#77c9ef" cx="72" cy="119" r="1.5"/>
          <circle fill="#77c9ef" cx="80" cy="119" r="1.5"/>
          <circle fill="#77c9ef" cx="88" cy="119" r="1.5"/>
          <circle fill="#77c9ef" cx="96" cy="119" r="1.5"/>
        </g>
        <path class="supply" d="M96 88H112V62"/>
        <circle class="expander" cx="112" cy="52" r="10"/>
        <path class="exhaust" d="M112 42H129M125 39L129 42L125 45"/>
        <path class="electrical" d="M120 58L126 64M123 64H126V61"/>
        <path class="bus" d="M126 65V77M123 68H129M123 74H129"/>
        <g transform="translate(112,52)">
          <g class="expander-rotor" style="transform:rotate(403.088deg)">
            <path transform="rotate(0)" d="M0 0L7 -2L5 3Z"/>
            <path transform="rotate(120)" d="M0 0L7 -2L5 3Z"/>
            <path transform="rotate(240)" d="M0 0L7 -2L5 3Z"/>
          </g>
        </g>
        <path class="compressor-wall" d="M12 25H50V53H12"/>
        <rect class="gas" x="18" y="29" width="30" height="20"/>
        <g class="piston" style="transform:translateX(18px)">
          <path class="rod" d="M-12 39H0"/>
          <rect class="piston-face" x="-3" y="28" width="3" height="22"/>
        </g>
        <path class="delivery-valve" d="M59 61L65 67M65 61L59 67"/>
        <path class="intake-valve" d="M50 25L56 31M56 25L50 31"/>
        <path class="release-valve" d="M109 73V78L115 75.5Z"/>
        <path class="compression-heat" d="M31 24V12M28 16L31 12L34 16"/>
        <path class="expansion-heat" d="M87 52H99M95 49L99 52L95 55"/>
        <path class="pressure-scale" d="M58 111A15 15 0 0 1 88 111"/>
        <circle class="gauge-cover" cx="73" cy="111" r="11"/>
        <g transform="translate(73,111)">
          <path class="pressure-needle" style="transform:rotate(-2.132e-14deg)" d="M0 0V-12"/>
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

if (!customElements.get("concept-compressed-air-energy-storage")) {
  customElements.define("concept-compressed-air-energy-storage", ConceptCompressedAirEnergyStorage);
}
