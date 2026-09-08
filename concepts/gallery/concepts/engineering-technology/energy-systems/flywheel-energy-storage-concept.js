// Flywheel Energy Storage. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFlywheelEnergyStorage extends HTMLElement {
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
        .housing {
          fill:#0b1c15;
          stroke:#375b51;
          stroke-width:1.7
        }
        .shaft {
          stroke:#6a8a77;
          stroke-width:3
        }
        .energy-fill {
          fill:#70edb1;
          fill-opacity:.2312;
          animation:fly-energy 12s linear infinite
        }
        .flywheel {
          transform-origin:70px 64px;
          transform:rotate(2745.0deg);
          animation:fly-spin 12s linear infinite
        }
        .rim {
          fill:none;
          stroke:#70edb1;
          stroke-width:2.5
        }
        .spokes {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.6
        }
        .rim-mark {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5
        }
        .hub {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:1.5
        }
        .motor {
          fill:#102b1e;
          stroke:#70edb1;
          stroke-width:1.2
        }
        .fly-power {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.6;
          animation:fly-power 12s linear infinite
        }
        @keyframes fly-spin {
          0% {
            transform:rotate(0deg)
          }
          0.417% {
            transform:rotate(4.503deg)
          }
          0.833% {
            transform:rotate(9.022deg)
          }
          1.25% {
            transform:rotate(13.575deg)
          }
          1.667% {
            transform:rotate(18.1755deg)
          }
          2.083% {
            transform:rotate(22.841deg)
          }
          2.5% {
            transform:rotate(27.585deg)
          }
          2.917% {
            transform:rotate(32.422deg)
          }
          3.333% {
            transform:rotate(37.368deg)
          }
          3.75% {
            transform:rotate(42.435deg)
          }
          4.167% {
            transform:rotate(47.637deg)
          }
          4.583% {
            transform:rotate(52.986deg)
          }
          5% {
            transform:rotate(58.496deg)
          }
          5.417% {
            transform:rotate(64.177deg)
          }
          5.833% {
            transform:rotate(70.042deg)
          }
          6.25% {
            transform:rotate(76.102deg)
          }
          6.667% {
            transform:rotate(82.368deg)
          }
          7.083% {
            transform:rotate(88.85deg)
          }
          7.5% {
            transform:rotate(95.557deg)
          }
          7.917% {
            transform:rotate(102.5deg)
          }
          8.333% {
            transform:rotate(109.687deg)
          }
          8.75% {
            transform:rotate(117.128deg)
          }
          9.167% {
            transform:rotate(124.83deg)
          }
          9.583% {
            transform:rotate(132.801deg)
          }
          10% {
            transform:rotate(141.048deg)
          }
          10.417% {
            transform:rotate(149.579deg)
          }
          10.833% {
            transform:rotate(158.4deg)
          }
          11.25% {
            transform:rotate(167.517deg)
          }
          11.667% {
            transform:rotate(176.9355deg)
          }
          12.083% {
            transform:rotate(186.661deg)
          }
          12.5% {
            transform:rotate(196.699deg)
          }
          12.917% {
            transform:rotate(207.053deg)
          }
          13.333% {
            transform:rotate(217.728deg)
          }
          13.75% {
            transform:rotate(228.727deg)
          }
          14.167% {
            transform:rotate(240.052deg)
          }
          14.583% {
            transform:rotate(251.708deg)
          }
          15% {
            transform:rotate(263.696deg)
          }
          15.417% {
            transform:rotate(276.017deg)
          }
          15.833% {
            transform:rotate(288.675deg)
          }
          16.25% {
            transform:rotate(301.669deg)
          }
          16.667% {
            transform:rotate(315deg)
          }
          17.083% {
            transform:rotate(328.669deg)
          }
          17.5% {
            transform:rotate(342.675deg)
          }
          17.917% {
            transform:rotate(357.017deg)
          }
          18.333% {
            transform:rotate(371.696deg)
          }
          18.75% {
            transform:rotate(386.708deg)
          }
          19.167% {
            transform:rotate(402.052deg)
          }
          19.583% {
            transform:rotate(417.727deg)
          }
          20% {
            transform:rotate(433.728deg)
          }
          20.417% {
            transform:rotate(450.053deg)
          }
          20.833% {
            transform:rotate(466.699deg)
          }
          21.25% {
            transform:rotate(483.661deg)
          }
          21.667% {
            transform:rotate(500.936deg)
          }
          22.083% {
            transform:rotate(518.517deg)
          }
          22.5% {
            transform:rotate(536.4deg)
          }
          22.917% {
            transform:rotate(554.579deg)
          }
          23.333% {
            transform:rotate(573.048deg)
          }
          23.75% {
            transform:rotate(591.801deg)
          }
          24.167% {
            transform:rotate(610.83deg)
          }
          24.583% {
            transform:rotate(630.128deg)
          }
          25% {
            transform:rotate(649.6875deg)
          }
          25.417% {
            transform:rotate(669.5deg)
          }
          25.833% {
            transform:rotate(689.557deg)
          }
          26.25% {
            transform:rotate(709.85deg)
          }
          26.667% {
            transform:rotate(730.368deg)
          }
          27.083% {
            transform:rotate(751.102deg)
          }
          27.5% {
            transform:rotate(772.042deg)
          }
          27.917% {
            transform:rotate(793.177deg)
          }
          28.333% {
            transform:rotate(814.496deg)
          }
          28.75% {
            transform:rotate(835.986deg)
          }
          29.167% {
            transform:rotate(857.637deg)
          }
          29.583% {
            transform:rotate(879.435deg)
          }
          30% {
            transform:rotate(901.368deg)
          }
          30.417% {
            transform:rotate(923.422deg)
          }
          30.833% {
            transform:rotate(945.585deg)
          }
          31.25% {
            transform:rotate(967.841deg)
          }
          31.667% {
            transform:rotate(990.176deg)
          }
          32.083% {
            transform:rotate(1012.575deg)
          }
          32.5% {
            transform:rotate(1035.022deg)
          }
          32.917% {
            transform:rotate(1057.503deg)
          }
          33.333% {
            transform:rotate(1080deg)
          }
          33.75% {
            transform:rotate(1102.5deg)
          }
          34.167% {
            transform:rotate(1125.0deg)
          }
          34.583% {
            transform:rotate(1147.5deg)
          }
          35% {
            transform:rotate(1170.0deg)
          }
          35.417% {
            transform:rotate(1192.5deg)
          }
          35.833% {
            transform:rotate(1215deg)
          }
          36.25% {
            transform:rotate(1237.5deg)
          }
          36.667% {
            transform:rotate(1260.0deg)
          }
          37.083% {
            transform:rotate(1282.5deg)
          }
          37.5% {
            transform:rotate(1305deg)
          }
          37.917% {
            transform:rotate(1327.5deg)
          }
          38.333% {
            transform:rotate(1350.0deg)
          }
          38.75% {
            transform:rotate(1372.5deg)
          }
          39.167% {
            transform:rotate(1395.0deg)
          }
          39.583% {
            transform:rotate(1417.5deg)
          }
          40% {
            transform:rotate(1440.0deg)
          }
          40.417% {
            transform:rotate(1462.5deg)
          }
          40.833% {
            transform:rotate(1485.0deg)
          }
          41.25% {
            transform:rotate(1507.5deg)
          }
          41.667% {
            transform:rotate(1530.0deg)
          }
          42.083% {
            transform:rotate(1552.5deg)
          }
          42.5% {
            transform:rotate(1575.0deg)
          }
          42.917% {
            transform:rotate(1597.5deg)
          }
          43.333% {
            transform:rotate(1620.0deg)
          }
          43.75% {
            transform:rotate(1642.5deg)
          }
          44.167% {
            transform:rotate(1665.0deg)
          }
          44.583% {
            transform:rotate(1687.5deg)
          }
          45% {
            transform:rotate(1710.0deg)
          }
          45.417% {
            transform:rotate(1732.5deg)
          }
          45.833% {
            transform:rotate(1755.0deg)
          }
          46.25% {
            transform:rotate(1777.5deg)
          }
          46.667% {
            transform:rotate(1800.0deg)
          }
          47.083% {
            transform:rotate(1822.5deg)
          }
          47.5% {
            transform:rotate(1845.0deg)
          }
          47.917% {
            transform:rotate(1867.5deg)
          }
          48.333% {
            transform:rotate(1890.0deg)
          }
          48.75% {
            transform:rotate(1912.5deg)
          }
          49.167% {
            transform:rotate(1935deg)
          }
          49.583% {
            transform:rotate(1957.5deg)
          }
          50% {
            transform:rotate(1980.0deg)
          }
          50.417% {
            transform:rotate(2002.497deg)
          }
          50.833% {
            transform:rotate(2024.978deg)
          }
          51.25% {
            transform:rotate(2047.425deg)
          }
          51.667% {
            transform:rotate(2069.824deg)
          }
          52.083% {
            transform:rotate(2092.159deg)
          }
          52.5% {
            transform:rotate(2114.415deg)
          }
          52.917% {
            transform:rotate(2136.578deg)
          }
          53.333% {
            transform:rotate(2158.632deg)
          }
          53.75% {
            transform:rotate(2180.565deg)
          }
          54.167% {
            transform:rotate(2202.363deg)
          }
          54.583% {
            transform:rotate(2224.014deg)
          }
          55.0% {
            transform:rotate(2245.5045deg)
          }
          55.417% {
            transform:rotate(2266.823deg)
          }
          55.833% {
            transform:rotate(2287.958deg)
          }
          56.25% {
            transform:rotate(2308.898deg)
          }
          56.667% {
            transform:rotate(2329.632deg)
          }
          57.083% {
            transform:rotate(2350.15deg)
          }
          57.5% {
            transform:rotate(2370.443deg)
          }
          57.917% {
            transform:rotate(2390.5deg)
          }
          58.333% {
            transform:rotate(2410.3125deg)
          }
          58.75% {
            transform:rotate(2429.872deg)
          }
          59.167% {
            transform:rotate(2449.17deg)
          }
          59.583% {
            transform:rotate(2468.199deg)
          }
          60% {
            transform:rotate(2486.952deg)
          }
          60.417% {
            transform:rotate(2505.421deg)
          }
          60.833% {
            transform:rotate(2523.6deg)
          }
          61.25% {
            transform:rotate(2541.483deg)
          }
          61.667% {
            transform:rotate(2559.0645deg)
          }
          62.083% {
            transform:rotate(2576.339deg)
          }
          62.5% {
            transform:rotate(2593.301deg)
          }
          62.917% {
            transform:rotate(2609.947deg)
          }
          63.333% {
            transform:rotate(2626.272deg)
          }
          63.75% {
            transform:rotate(2642.273deg)
          }
          64.167% {
            transform:rotate(2657.948deg)
          }
          64.583% {
            transform:rotate(2673.292deg)
          }
          65% {
            transform:rotate(2688.305deg)
          }
          65.417% {
            transform:rotate(2702.983deg)
          }
          65.833% {
            transform:rotate(2717.325deg)
          }
          66.25% {
            transform:rotate(2731.331deg)
          }
          66.667% {
            transform:rotate(2745.0deg)
          }
          67.083% {
            transform:rotate(2758.331deg)
          }
          67.5% {
            transform:rotate(2771.325deg)
          }
          67.917% {
            transform:rotate(2783.983deg)
          }
          68.333% {
            transform:rotate(2796.3045deg)
          }
          68.75% {
            transform:rotate(2808.292deg)
          }
          69.167% {
            transform:rotate(2819.948deg)
          }
          69.583% {
            transform:rotate(2831.273deg)
          }
          70% {
            transform:rotate(2842.272deg)
          }
          70.417% {
            transform:rotate(2852.947deg)
          }
          70.833% {
            transform:rotate(2863.301deg)
          }
          71.25% {
            transform:rotate(2873.339deg)
          }
          71.667% {
            transform:rotate(2883.0645deg)
          }
          72.083% {
            transform:rotate(2892.483deg)
          }
          72.5% {
            transform:rotate(2901.6deg)
          }
          72.917% {
            transform:rotate(2910.421deg)
          }
          73.333% {
            transform:rotate(2918.952deg)
          }
          73.75% {
            transform:rotate(2927.199deg)
          }
          74.167% {
            transform:rotate(2935.17deg)
          }
          74.583% {
            transform:rotate(2942.872deg)
          }
          75% {
            transform:rotate(2950.312deg)
          }
          75.417% {
            transform:rotate(2957.5deg)
          }
          75.833% {
            transform:rotate(2964.443deg)
          }
          76.25% {
            transform:rotate(2971.15deg)
          }
          76.667% {
            transform:rotate(2977.632deg)
          }
          77.083% {
            transform:rotate(2983.898deg)
          }
          77.5% {
            transform:rotate(2989.958deg)
          }
          77.917% {
            transform:rotate(2995.823deg)
          }
          78.333% {
            transform:rotate(3001.5045deg)
          }
          78.75% {
            transform:rotate(3007.014deg)
          }
          79.167% {
            transform:rotate(3012.363deg)
          }
          79.583% {
            transform:rotate(3017.565deg)
          }
          80% {
            transform:rotate(3022.632deg)
          }
          80.417% {
            transform:rotate(3027.578deg)
          }
          80.833% {
            transform:rotate(3032.415deg)
          }
          81.25% {
            transform:rotate(3037.159deg)
          }
          81.667% {
            transform:rotate(3041.8245deg)
          }
          82.083% {
            transform:rotate(3046.425deg)
          }
          82.5% {
            transform:rotate(3050.978deg)
          }
          82.917% {
            transform:rotate(3055.497deg)
          }
          83.333% {
            transform:rotate(3060.0deg)
          }
          83.75% {
            transform:rotate(3064.5deg)
          }
          84.167% {
            transform:rotate(3069.0deg)
          }
          84.583% {
            transform:rotate(3073.5deg)
          }
          85% {
            transform:rotate(3078deg)
          }
          85.417% {
            transform:rotate(3082.5deg)
          }
          85.833% {
            transform:rotate(3087.0deg)
          }
          86.25% {
            transform:rotate(3091.5deg)
          }
          86.667% {
            transform:rotate(3096deg)
          }
          87.083% {
            transform:rotate(3100.5deg)
          }
          87.5% {
            transform:rotate(3105deg)
          }
          87.917% {
            transform:rotate(3109.5deg)
          }
          88.333% {
            transform:rotate(3114.0deg)
          }
          88.75% {
            transform:rotate(3118.5deg)
          }
          89.167% {
            transform:rotate(3123deg)
          }
          89.583% {
            transform:rotate(3127.5deg)
          }
          90% {
            transform:rotate(3132deg)
          }
          90.417% {
            transform:rotate(3136.5deg)
          }
          90.833% {
            transform:rotate(3141.0deg)
          }
          91.25% {
            transform:rotate(3145.5deg)
          }
          91.667% {
            transform:rotate(3150deg)
          }
          92.083% {
            transform:rotate(3154.5deg)
          }
          92.5% {
            transform:rotate(3159.0deg)
          }
          92.917% {
            transform:rotate(3163.5deg)
          }
          93.333% {
            transform:rotate(3168.0deg)
          }
          93.75% {
            transform:rotate(3172.5deg)
          }
          94.167% {
            transform:rotate(3177.0deg)
          }
          94.583% {
            transform:rotate(3181.5deg)
          }
          95% {
            transform:rotate(3186deg)
          }
          95.417% {
            transform:rotate(3190.5deg)
          }
          95.833% {
            transform:rotate(3195deg)
          }
          96.25% {
            transform:rotate(3199.5deg)
          }
          96.667% {
            transform:rotate(3204deg)
          }
          97.083% {
            transform:rotate(3208.5deg)
          }
          97.5% {
            transform:rotate(3213.0deg)
          }
          97.917% {
            transform:rotate(3217.5deg)
          }
          98.333% {
            transform:rotate(3222deg)
          }
          98.75% {
            transform:rotate(3226.5deg)
          }
          99.167% {
            transform:rotate(3231.0deg)
          }
          99.583% {
            transform:rotate(3235.5deg)
          }
          100% {
            transform:rotate(3240.0deg)
          }
        }
        @keyframes fly-energy {
          0% {
            fill-opacity:0.0968
          }
          0.417% {
            fill-opacity:0.097
          }
          0.833% {
            fill-opacity:0.097
          }
          1.25% {
            fill-opacity:0.097
          }
          1.667% {
            fill-opacity:0.098
          }
          2.083% {
            fill-opacity:0.098
          }
          2.5% {
            fill-opacity:0.099
          }
          2.917% {
            fill-opacity:0.1
          }
          3.333% {
            fill-opacity:0.101
          }
          3.75% {
            fill-opacity:0.102
          }
          4.167% {
            fill-opacity:0.103
          }
          4.583% {
            fill-opacity:0.104
          }
          5% {
            fill-opacity:0.106
          }
          5.417% {
            fill-opacity:0.108
          }
          5.833% {
            fill-opacity:0.109
          }
          6.25% {
            fill-opacity:0.111
          }
          6.667% {
            fill-opacity:0.114
          }
          7.083% {
            fill-opacity:0.116
          }
          7.5% {
            fill-opacity:0.119
          }
          7.917% {
            fill-opacity:0.121
          }
          8.333% {
            fill-opacity:0.124
          }
          8.75% {
            fill-opacity:0.128
          }
          9.167% {
            fill-opacity:0.131
          }
          9.583% {
            fill-opacity:0.135
          }
          10% {
            fill-opacity:0.138
          }
          10.417% {
            fill-opacity:0.142
          }
          10.833% {
            fill-opacity:0.147
          }
          11.25% {
            fill-opacity:0.151
          }
          11.667% {
            fill-opacity:0.156
          }
          12.083% {
            fill-opacity:0.161
          }
          12.5% {
            fill-opacity:0.166
          }
          12.917% {
            fill-opacity:0.172
          }
          13.333% {
            fill-opacity:0.177
          }
          13.75% {
            fill-opacity:0.183
          }
          14.167% {
            fill-opacity:0.19
          }
          14.583% {
            fill-opacity:0.196
          }
          15% {
            fill-opacity:0.203
          }
          15.417% {
            fill-opacity:0.209
          }
          15.833% {
            fill-opacity:0.216
          }
          16.25% {
            fill-opacity:0.224
          }
          16.667% {
            fill-opacity:0.231
          }
          17.083% {
            fill-opacity:0.239
          }
          17.5% {
            fill-opacity:0.247
          }
          17.917% {
            fill-opacity:0.255
          }
          18.333% {
            fill-opacity:0.263
          }
          18.75% {
            fill-opacity:0.271
          }
          19.167% {
            fill-opacity:0.28
          }
          19.583% {
            fill-opacity:0.288
          }
          20% {
            fill-opacity:0.297
          }
          20.417% {
            fill-opacity:0.305
          }
          20.833% {
            fill-opacity:0.314
          }
          21.25% {
            fill-opacity:0.323
          }
          21.667% {
            fill-opacity:0.332
          }
          22.083% {
            fill-opacity:0.341
          }
          22.5% {
            fill-opacity:0.35
          }
          22.917% {
            fill-opacity:0.359
          }
          23.333% {
            fill-opacity:0.367
          }
          23.75% {
            fill-opacity:0.376
          }
          24.167% {
            fill-opacity:0.385
          }
          24.583% {
            fill-opacity:0.393
          }
          25% {
            fill-opacity:0.402
          }
          25.417% {
            fill-opacity:0.41
          }
          25.833% {
            fill-opacity:0.418
          }
          26.25% {
            fill-opacity:0.425
          }
          26.667% {
            fill-opacity:0.433
          }
          27.083% {
            fill-opacity:0.44
          }
          27.5% {
            fill-opacity:0.447
          }
          27.917% {
            fill-opacity:0.454
          }
          28.333% {
            fill-opacity:0.46
          }
          28.75% {
            fill-opacity:0.466
          }
          29.167% {
            fill-opacity:0.472
          }
          29.583% {
            fill-opacity:0.477
          }
          30% {
            fill-opacity:0.481
          }
          30.417% {
            fill-opacity:0.486
          }
          30.833% {
            fill-opacity:0.489
          }
          31.25% {
            fill-opacity:0.492
          }
          31.667% {
            fill-opacity:0.495
          }
          32.083% {
            fill-opacity:0.497
          }
          32.5% {
            fill-opacity:0.499
          }
          32.917% {
            fill-opacity:0.5
          }
          33.333% {
            fill-opacity:0.5
          }
          33.75% {
            fill-opacity:0.5
          }
          34.167% {
            fill-opacity:0.5
          }
          34.583% {
            fill-opacity:0.5
          }
          35% {
            fill-opacity:0.5
          }
          35.417% {
            fill-opacity:0.5
          }
          35.833% {
            fill-opacity:0.5
          }
          36.25% {
            fill-opacity:0.5
          }
          36.667% {
            fill-opacity:0.5
          }
          37.083% {
            fill-opacity:0.5
          }
          37.5% {
            fill-opacity:0.5
          }
          37.917% {
            fill-opacity:0.5
          }
          38.333% {
            fill-opacity:0.5
          }
          38.75% {
            fill-opacity:0.5
          }
          39.167% {
            fill-opacity:0.5
          }
          39.583% {
            fill-opacity:0.5
          }
          40% {
            fill-opacity:0.5
          }
          40.417% {
            fill-opacity:0.5
          }
          40.833% {
            fill-opacity:0.5
          }
          41.25% {
            fill-opacity:0.5
          }
          41.667% {
            fill-opacity:0.5
          }
          42.083% {
            fill-opacity:0.5
          }
          42.5% {
            fill-opacity:0.5
          }
          42.917% {
            fill-opacity:0.5
          }
          43.333% {
            fill-opacity:0.5
          }
          43.75% {
            fill-opacity:0.5
          }
          44.167% {
            fill-opacity:0.5
          }
          44.583% {
            fill-opacity:0.5
          }
          45% {
            fill-opacity:0.5
          }
          45.417% {
            fill-opacity:0.5
          }
          45.833% {
            fill-opacity:0.5
          }
          46.25% {
            fill-opacity:0.5
          }
          46.667% {
            fill-opacity:0.5
          }
          47.083% {
            fill-opacity:0.5
          }
          47.5% {
            fill-opacity:0.5
          }
          47.917% {
            fill-opacity:0.5
          }
          48.333% {
            fill-opacity:0.5
          }
          48.75% {
            fill-opacity:0.5
          }
          49.167% {
            fill-opacity:0.5
          }
          49.583% {
            fill-opacity:0.5
          }
          50% {
            fill-opacity:0.5
          }
          50.417% {
            fill-opacity:0.5
          }
          50.833% {
            fill-opacity:0.499
          }
          51.25% {
            fill-opacity:0.497
          }
          51.667% {
            fill-opacity:0.495
          }
          52.083% {
            fill-opacity:0.492
          }
          52.5% {
            fill-opacity:0.489
          }
          52.917% {
            fill-opacity:0.486
          }
          53.333% {
            fill-opacity:0.481
          }
          53.75% {
            fill-opacity:0.477
          }
          54.167% {
            fill-opacity:0.472
          }
          54.583% {
            fill-opacity:0.466
          }
          55.0% {
            fill-opacity:0.46
          }
          55.417% {
            fill-opacity:0.454
          }
          55.833% {
            fill-opacity:0.447
          }
          56.25% {
            fill-opacity:0.44
          }
          56.667% {
            fill-opacity:0.433
          }
          57.083% {
            fill-opacity:0.425
          }
          57.5% {
            fill-opacity:0.418
          }
          57.917% {
            fill-opacity:0.41
          }
          58.333% {
            fill-opacity:0.402
          }
          58.75% {
            fill-opacity:0.393
          }
          59.167% {
            fill-opacity:0.385
          }
          59.583% {
            fill-opacity:0.376
          }
          60% {
            fill-opacity:0.367
          }
          60.417% {
            fill-opacity:0.359
          }
          60.833% {
            fill-opacity:0.35
          }
          61.25% {
            fill-opacity:0.341
          }
          61.667% {
            fill-opacity:0.332
          }
          62.083% {
            fill-opacity:0.323
          }
          62.5% {
            fill-opacity:0.314
          }
          62.917% {
            fill-opacity:0.305
          }
          63.333% {
            fill-opacity:0.297
          }
          63.75% {
            fill-opacity:0.288
          }
          64.167% {
            fill-opacity:0.28
          }
          64.583% {
            fill-opacity:0.271
          }
          65% {
            fill-opacity:0.263
          }
          65.417% {
            fill-opacity:0.255
          }
          65.833% {
            fill-opacity:0.247
          }
          66.25% {
            fill-opacity:0.239
          }
          66.667% {
            fill-opacity:0.231
          }
          67.083% {
            fill-opacity:0.224
          }
          67.5% {
            fill-opacity:0.216
          }
          67.917% {
            fill-opacity:0.209
          }
          68.333% {
            fill-opacity:0.203
          }
          68.75% {
            fill-opacity:0.196
          }
          69.167% {
            fill-opacity:0.19
          }
          69.583% {
            fill-opacity:0.183
          }
          70% {
            fill-opacity:0.177
          }
          70.417% {
            fill-opacity:0.172
          }
          70.833% {
            fill-opacity:0.166
          }
          71.25% {
            fill-opacity:0.161
          }
          71.667% {
            fill-opacity:0.156
          }
          72.083% {
            fill-opacity:0.151
          }
          72.5% {
            fill-opacity:0.147
          }
          72.917% {
            fill-opacity:0.142
          }
          73.333% {
            fill-opacity:0.138
          }
          73.75% {
            fill-opacity:0.135
          }
          74.167% {
            fill-opacity:0.131
          }
          74.583% {
            fill-opacity:0.128
          }
          75% {
            fill-opacity:0.124
          }
          75.417% {
            fill-opacity:0.121
          }
          75.833% {
            fill-opacity:0.119
          }
          76.25% {
            fill-opacity:0.116
          }
          76.667% {
            fill-opacity:0.114
          }
          77.083% {
            fill-opacity:0.111
          }
          77.5% {
            fill-opacity:0.109
          }
          77.917% {
            fill-opacity:0.108
          }
          78.333% {
            fill-opacity:0.106
          }
          78.75% {
            fill-opacity:0.104
          }
          79.167% {
            fill-opacity:0.103
          }
          79.583% {
            fill-opacity:0.102
          }
          80% {
            fill-opacity:0.101
          }
          80.417% {
            fill-opacity:0.1
          }
          80.833% {
            fill-opacity:0.099
          }
          81.25% {
            fill-opacity:0.098
          }
          81.667% {
            fill-opacity:0.098
          }
          82.083% {
            fill-opacity:0.097
          }
          82.5% {
            fill-opacity:0.097
          }
          82.917% {
            fill-opacity:0.097
          }
          83.333% {
            fill-opacity:0.0968
          }
          83.75% {
            fill-opacity:0.0968
          }
          84.167% {
            fill-opacity:0.0968
          }
          84.583% {
            fill-opacity:0.0968
          }
          85% {
            fill-opacity:0.0968
          }
          85.417% {
            fill-opacity:0.0968
          }
          85.833% {
            fill-opacity:0.0968
          }
          86.25% {
            fill-opacity:0.0968
          }
          86.667% {
            fill-opacity:0.0968
          }
          87.083% {
            fill-opacity:0.0968
          }
          87.5% {
            fill-opacity:0.0968
          }
          87.917% {
            fill-opacity:0.0968
          }
          88.333% {
            fill-opacity:0.0968
          }
          88.75% {
            fill-opacity:0.0968
          }
          89.167% {
            fill-opacity:0.0968
          }
          89.583% {
            fill-opacity:0.0968
          }
          90% {
            fill-opacity:0.0968
          }
          90.417% {
            fill-opacity:0.0968
          }
          90.833% {
            fill-opacity:0.0968
          }
          91.25% {
            fill-opacity:0.0968
          }
          91.667% {
            fill-opacity:0.0968
          }
          92.083% {
            fill-opacity:0.0968
          }
          92.5% {
            fill-opacity:0.0968
          }
          92.917% {
            fill-opacity:0.0968
          }
          93.333% {
            fill-opacity:0.0968
          }
          93.75% {
            fill-opacity:0.0968
          }
          94.167% {
            fill-opacity:0.0968
          }
          94.583% {
            fill-opacity:0.0968
          }
          95% {
            fill-opacity:0.0968
          }
          95.417% {
            fill-opacity:0.0968
          }
          95.833% {
            fill-opacity:0.0968
          }
          96.25% {
            fill-opacity:0.0968
          }
          96.667% {
            fill-opacity:0.0968
          }
          97.083% {
            fill-opacity:0.0968
          }
          97.5% {
            fill-opacity:0.0968
          }
          97.917% {
            fill-opacity:0.0968
          }
          98.333% {
            fill-opacity:0.0968
          }
          98.75% {
            fill-opacity:0.0968
          }
          99.167% {
            fill-opacity:0.0968
          }
          99.583% {
            fill-opacity:0.0968
          }
          100% {
            fill-opacity:0.0968
          }
        }
        @keyframes fly-power {
          0% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          0.417% {
            d:path("M38 116H38.239M38 115.761L38.239 116L38 116.239")
          }
          0.833% {
            d:path("M38 116H38.474M38 115.526L38.474 116L38 116.474")
          }
          1.25% {
            d:path("M38 116H38.708M38 115.292L38.708 116L38 116.708")
          }
          1.667% {
            d:path("M38 116H38.943M38 115.057L38.943 116L38 116.943")
          }
          2.083% {
            d:path("M38 116H39.181M38 114.819L39.181 116L38 117.181")
          }
          2.5% {
            d:path("M38 116H39.424M38 114.576L39.424 116L38 117.424")
          }
          2.917% {
            d:path("M38 116H39.673M38 114.327L39.673 116L38 117.673")
          }
          3.333% {
            d:path("M38 116H39.93M38 114.07L39.93 116L38 117.93")
          }
          3.75% {
            d:path("M38 116H40.196M38 113.804L40.196 116L38 118.196")
          }
          4.167% {
            d:path("M38 116H40.472M38 113.528L40.472 116L38 118.472")
          }
          4.583% {
            d:path("M38 116H40.759M38 113.241L40.759 116L38 118.759")
          }
          5% {
            d:path("M38 116H41.057M38.057 113L41.057 116L38.057 119")
          }
          5.417% {
            d:path("M38 116H41.367M38.367 113L41.367 116L38.367 119")
          }
          5.833% {
            d:path("M38 116H41.689M38.689 113L41.689 116L38.689 119")
          }
          6.25% {
            d:path("M38 116H42.023M39.023 113L42.023 116L39.023 119")
          }
          6.667% {
            d:path("M38 116H42.37M39.37 113L42.37 116L39.37 119")
          }
          7.083% {
            d:path("M38 116H42.729M39.729 113L42.729 116L39.729 119")
          }
          7.5% {
            d:path("M38 116H43.1M40.1 113L43.1 116L40.1 119")
          }
          7.917% {
            d:path("M38 116H43.483M40.483 113L43.483 116L40.483 119")
          }
          8.333% {
            d:path("M38 116H43.877M40.877 113L43.877 116L40.877 119")
          }
          8.75% {
            d:path("M38 116H44.281M41.281 113L44.281 116L41.281 119")
          }
          9.167% {
            d:path("M38 116H44.696M41.696 113L44.696 116L41.696 119")
          }
          9.583% {
            d:path("M38 116H45.119M42.119 113L45.119 116L42.119 119")
          }
          10% {
            d:path("M38 116H45.55M42.55 113L45.55 116L42.55 119")
          }
          10.417% {
            d:path("M38 116H45.989M42.989 113L45.989 116L42.989 119")
          }
          10.833% {
            d:path("M38 116H46.433M43.433 113L46.433 116L43.433 119")
          }
          11.25% {
            d:path("M38 116H46.881M43.881 113L46.881 116L43.881 119")
          }
          11.667% {
            d:path("M38 116H47.334M44.334 113L47.334 116L44.334 119")
          }
          12.083% {
            d:path("M38 116H47.788M44.788 113L47.788 116L44.788 119")
          }
          12.5% {
            d:path("M38 116H48.242M45.242 113L48.242 116L45.242 119")
          }
          12.917% {
            d:path("M38 116H48.696M45.696 113L48.696 116L45.696 119")
          }
          13.333% {
            d:path("M38 116H49.147M46.147 113L49.147 116L46.147 119")
          }
          13.75% {
            d:path("M38 116H49.594M46.594 113L49.594 116L46.594 119")
          }
          14.167% {
            d:path("M38 116H50.036M47.036 113L50.036 116L47.036 119")
          }
          14.583% {
            d:path("M38 116H50.47M47.47 113L50.47 116L47.47 119")
          }
          15% {
            d:path("M38 116H50.894M47.894 113L50.894 116L47.894 119")
          }
          15.417% {
            d:path("M38 116H51.308M48.308 113L51.308 116L48.308 119")
          }
          15.833% {
            d:path("M38 116H51.709M48.709 113L51.709 116L48.709 119")
          }
          16.25% {
            d:path("M38 116H52.096M49.096 113L52.096 116L49.096 119")
          }
          16.667% {
            d:path("M38 116H52.466M49.466 113L52.466 116L49.466 119")
          }
          17.083% {
            d:path("M38 116H52.819M49.819 113L52.819 116L49.819 119")
          }
          17.5% {
            d:path("M38 116H53.151M50.151 113L53.151 116L50.151 119")
          }
          17.917% {
            d:path("M38 116H53.462M50.462 113L53.462 116L50.462 119")
          }
          18.333% {
            d:path("M38 116H53.749M50.749 113L53.749 116L50.749 119")
          }
          18.75% {
            d:path("M38 116H54.011M51.011 113L54.011 116L51.011 119")
          }
          19.167% {
            d:path("M38 116H54.246M51.246 113L54.246 116L51.246 119")
          }
          19.583% {
            d:path("M38 116H54.452M51.452 113L54.452 116L51.452 119")
          }
          20% {
            d:path("M38 116H54.628M51.628 113L54.628 116L51.628 119")
          }
          20.417% {
            d:path("M38 116H54.772M51.772 113L54.772 116L51.772 119")
          }
          20.833% {
            d:path("M38 116H54.882M51.882 113L54.882 116L51.882 119")
          }
          21.25% {
            d:path("M38 116H54.957M51.957 113L54.957 116L51.957 119")
          }
          21.667% {
            d:path("M38 116H54.995M51.995 113L54.995 116L51.995 119")
          }
          22.083% {
            d:path("M38 116H54.995M51.995 113L54.995 116L51.995 119")
          }
          22.5% {
            d:path("M38 116H54.956M51.956 113L54.956 116L51.956 119")
          }
          22.917% {
            d:path("M38 116H54.876M51.876 113L54.876 116L51.876 119")
          }
          23.333% {
            d:path("M38 116H54.753M51.753 113L54.753 116L51.753 119")
          }
          23.75% {
            d:path("M38 116H54.588M51.588 113L54.588 116L51.588 119")
          }
          24.167% {
            d:path("M38 116H54.378M51.378 113L54.378 116L51.378 119")
          }
          24.583% {
            d:path("M38 116H54.123M51.123 113L54.123 116L51.123 119")
          }
          25% {
            d:path("M38 116H53.823M50.823 113L53.823 116L50.823 119")
          }
          25.417% {
            d:path("M38 116H53.475M50.475 113L53.475 116L50.475 119")
          }
          25.833% {
            d:path("M38 116H53.08M50.08 113L53.08 116L50.08 119")
          }
          26.25% {
            d:path("M38 116H52.638M49.638 113L52.638 116L49.638 119")
          }
          26.667% {
            d:path("M38 116H52.147M49.147 113L52.147 116L49.147 119")
          }
          27.083% {
            d:path("M38 116H51.608M48.608 113L51.608 116L48.608 119")
          }
          27.5% {
            d:path("M38 116H51.02M48.02 113L51.02 116L48.02 119")
          }
          27.917% {
            d:path("M38 116H50.384M47.384 113L50.384 116L47.384 119")
          }
          28.333% {
            d:path("M38 116H49.699M46.699 113L49.699 116L46.699 119")
          }
          28.75% {
            d:path("M38 116H48.966M45.966 113L48.966 116L45.966 119")
          }
          29.167% {
            d:path("M38 116H48.186M45.186 113L48.186 116L45.186 119")
          }
          29.583% {
            d:path("M38 116H47.359M44.359 113L47.359 116L44.359 119")
          }
          30% {
            d:path("M38 116H46.485M43.485 113L46.485 116L43.485 119")
          }
          30.417% {
            d:path("M38 116H45.567M42.567 113L45.567 116L42.567 119")
          }
          30.833% {
            d:path("M38 116H44.605M41.605 113L44.605 116L41.605 119")
          }
          31.25% {
            d:path("M38 116H43.6M40.6 113L43.6 116L40.6 119")
          }
          31.667% {
            d:path("M38 116H42.554M39.554 113L42.554 116L39.554 119")
          }
          32.083% {
            d:path("M38 116H41.47M38.47 113L41.47 116L38.47 119")
          }
          32.5% {
            d:path("M38 116H40.347M38 113.653L40.347 116L38 118.347")
          }
          32.917% {
            d:path("M38 116H39.19M38 114.81L39.19 116L38 117.19")
          }
          33.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          33.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          34.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          34.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          35% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          35.417% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          35.833% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          36.25% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          36.667% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          37.083% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          37.5% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          37.917% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          38.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          38.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          39.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          39.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          40% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          40.417% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          40.833% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          41.25% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          41.667% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          42.083% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          42.5% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          42.917% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          43.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          43.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          44.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          44.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          45% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          45.417% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          45.833% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          46.25% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          46.667% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          47.083% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          47.5% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          47.917% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          48.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          48.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          49.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          49.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          50% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          50.417% {
            d:path("M38 116H36.81M38 114.81L36.81 116L38 117.19")
          }
          50.833% {
            d:path("M38 116H35.653M38 113.653L35.653 116L38 118.347")
          }
          51.25% {
            d:path("M38 116H34.53M37.53 113L34.53 116L37.53 119")
          }
          51.667% {
            d:path("M38 116H33.446M36.446 113L33.446 116L36.446 119")
          }
          52.083% {
            d:path("M38 116H32.4M35.4 113L32.4 116L35.4 119")
          }
          52.5% {
            d:path("M38 116H31.395M34.395 113L31.395 116L34.395 119")
          }
          52.917% {
            d:path("M38 116H30.433M33.433 113L30.433 116L33.433 119")
          }
          53.333% {
            d:path("M38 116H29.515M32.515 113L29.515 116L32.515 119")
          }
          53.75% {
            d:path("M38 116H28.641M31.641 113L28.641 116L31.641 119")
          }
          54.167% {
            d:path("M38 116H27.814M30.814 113L27.814 116L30.814 119")
          }
          54.583% {
            d:path("M38 116H27.034M30.034 113L27.034 116L30.034 119")
          }
          55.0% {
            d:path("M38 116H26.301M29.301 113L26.301 116L29.301 119")
          }
          55.417% {
            d:path("M38 116H25.616M28.616 113L25.616 116L28.616 119")
          }
          55.833% {
            d:path("M38 116H24.98M27.98 113L24.98 116L27.98 119")
          }
          56.25% {
            d:path("M38 116H24.392M27.392 113L24.392 116L27.392 119")
          }
          56.667% {
            d:path("M38 116H23.853M26.853 113L23.853 116L26.853 119")
          }
          57.083% {
            d:path("M38 116H23.362M26.362 113L23.362 116L26.362 119")
          }
          57.5% {
            d:path("M38 116H22.92M25.92 113L22.92 116L25.92 119")
          }
          57.917% {
            d:path("M38 116H22.525M25.525 113L22.525 116L25.525 119")
          }
          58.333% {
            d:path("M38 116H22.177M25.177 113L22.177 116L25.177 119")
          }
          58.75% {
            d:path("M38 116H21.877M24.877 113L21.877 116L24.877 119")
          }
          59.167% {
            d:path("M38 116H21.622M24.622 113L21.622 116L24.622 119")
          }
          59.583% {
            d:path("M38 116H21.412M24.412 113L21.412 116L24.412 119")
          }
          60% {
            d:path("M38 116H21.247M24.247 113L21.247 116L24.247 119")
          }
          60.417% {
            d:path("M38 116H21.124M24.124 113L21.124 116L24.124 119")
          }
          60.833% {
            d:path("M38 116H21.044M24.044 113L21.044 116L24.044 119")
          }
          61.25% {
            d:path("M38 116H21.005M24.005 113L21.005 116L24.005 119")
          }
          61.667% {
            d:path("M38 116H21.005M24.005 113L21.005 116L24.005 119")
          }
          62.083% {
            d:path("M38 116H21.043M24.043 113L21.043 116L24.043 119")
          }
          62.5% {
            d:path("M38 116H21.118M24.118 113L21.118 116L24.118 119")
          }
          62.917% {
            d:path("M38 116H21.228M24.228 113L21.228 116L24.228 119")
          }
          63.333% {
            d:path("M38 116H21.372M24.372 113L21.372 116L24.372 119")
          }
          63.75% {
            d:path("M38 116H21.548M24.548 113L21.548 116L24.548 119")
          }
          64.167% {
            d:path("M38 116H21.754M24.754 113L21.754 116L24.754 119")
          }
          64.583% {
            d:path("M38 116H21.989M24.989 113L21.989 116L24.989 119")
          }
          65% {
            d:path("M38 116H22.251M25.251 113L22.251 116L25.251 119")
          }
          65.417% {
            d:path("M38 116H22.538M25.538 113L22.538 116L25.538 119")
          }
          65.833% {
            d:path("M38 116H22.849M25.849 113L22.849 116L25.849 119")
          }
          66.25% {
            d:path("M38 116H23.181M26.181 113L23.181 116L26.181 119")
          }
          66.667% {
            d:path("M38 116H23.534M26.534 113L23.534 116L26.534 119")
          }
          67.083% {
            d:path("M38 116H23.904M26.904 113L23.904 116L26.904 119")
          }
          67.5% {
            d:path("M38 116H24.291M27.291 113L24.291 116L27.291 119")
          }
          67.917% {
            d:path("M38 116H24.692M27.692 113L24.692 116L27.692 119")
          }
          68.333% {
            d:path("M38 116H25.106M28.106 113L25.106 116L28.106 119")
          }
          68.75% {
            d:path("M38 116H25.53M28.53 113L25.53 116L28.53 119")
          }
          69.167% {
            d:path("M38 116H25.964M28.964 113L25.964 116L28.964 119")
          }
          69.583% {
            d:path("M38 116H26.406M29.406 113L26.406 116L29.406 119")
          }
          70% {
            d:path("M38 116H26.853M29.853 113L26.853 116L29.853 119")
          }
          70.417% {
            d:path("M38 116H27.304M30.304 113L27.304 116L30.304 119")
          }
          70.833% {
            d:path("M38 116H27.758M30.758 113L27.758 116L30.758 119")
          }
          71.25% {
            d:path("M38 116H28.212M31.212 113L28.212 116L31.212 119")
          }
          71.667% {
            d:path("M38 116H28.666M31.666 113L28.666 116L31.666 119")
          }
          72.083% {
            d:path("M38 116H29.119M32.119 113L29.119 116L32.119 119")
          }
          72.5% {
            d:path("M38 116H29.567M32.567 113L29.567 116L32.567 119")
          }
          72.917% {
            d:path("M38 116H30.011M33.011 113L30.011 116L33.011 119")
          }
          73.333% {
            d:path("M38 116H30.45M33.45 113L30.45 116L33.45 119")
          }
          73.75% {
            d:path("M38 116H30.881M33.881 113L30.881 116L33.881 119")
          }
          74.167% {
            d:path("M38 116H31.304M34.304 113L31.304 116L34.304 119")
          }
          74.583% {
            d:path("M38 116H31.719M34.719 113L31.719 116L34.719 119")
          }
          75% {
            d:path("M38 116H32.123M35.123 113L32.123 116L35.123 119")
          }
          75.417% {
            d:path("M38 116H32.517M35.517 113L32.517 116L35.517 119")
          }
          75.833% {
            d:path("M38 116H32.9M35.9 113L32.9 116L35.9 119")
          }
          76.25% {
            d:path("M38 116H33.271M36.271 113L33.271 116L36.271 119")
          }
          76.667% {
            d:path("M38 116H33.63M36.63 113L33.63 116L36.63 119")
          }
          77.083% {
            d:path("M38 116H33.977M36.977 113L33.977 116L36.977 119")
          }
          77.5% {
            d:path("M38 116H34.311M37.311 113L34.311 116L37.311 119")
          }
          77.917% {
            d:path("M38 116H34.633M37.633 113L34.633 116L37.633 119")
          }
          78.333% {
            d:path("M38 116H34.943M37.943 113L34.943 116L37.943 119")
          }
          78.75% {
            d:path("M38 116H35.241M38 113.241L35.241 116L38 118.759")
          }
          79.167% {
            d:path("M38 116H35.528M38 113.528L35.528 116L38 118.472")
          }
          79.583% {
            d:path("M38 116H35.804M38 113.804L35.804 116L38 118.196")
          }
          80% {
            d:path("M38 116H36.07M38 114.07L36.07 116L38 117.93")
          }
          80.417% {
            d:path("M38 116H36.327M38 114.327L36.327 116L38 117.673")
          }
          80.833% {
            d:path("M38 116H36.576M38 114.576L36.576 116L38 117.424")
          }
          81.25% {
            d:path("M38 116H36.819M38 114.819L36.819 116L38 117.181")
          }
          81.667% {
            d:path("M38 116H37.057M38 115.057L37.057 116L38 116.943")
          }
          82.083% {
            d:path("M38 116H37.292M38 115.292L37.292 116L38 116.708")
          }
          82.5% {
            d:path("M38 116H37.526M38 115.526L37.526 116L38 116.474")
          }
          82.917% {
            d:path("M38 116H37.761M38 115.761L37.761 116L38 116.239")
          }
          83.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          83.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          84.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          84.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          85% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          85.417% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          85.833% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          86.25% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          86.667% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          87.083% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          87.5% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          87.917% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          88.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          88.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          89.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          89.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          90% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          90.417% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          90.833% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          91.25% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          91.667% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          92.083% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          92.5% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          92.917% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          93.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          93.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          94.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          94.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          95% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          95.417% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          95.833% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          96.25% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          96.667% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          97.083% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          97.5% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          97.917% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          98.333% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          98.75% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          99.167% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          99.583% {
            d:path("M38 116H38M38 116L38 116L38 116")
          }
          100% {
            d:path("M38 116H38M38 116L38 116L38 116")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Flywheel Energy Storage">
        <circle class="housing" cx="70" cy="64" r="35"/>
        <path class="shaft" d="M70 64V108"/>
        <circle class="energy-fill" cx="70" cy="64" r="26"/>
        <g class="flywheel">
          <circle class="rim" cx="70" cy="64" r="26"/>
          <path class="spokes" d="M70 38V90M44 64H96M51.615 45.615L88.385 82.385M51.615 82.385L88.385 45.615"/>
          <circle class="warm" cx="70" cy="42" r="3"/>
          <path class="rim-mark" d="M90 59L94 64L90 69"/>
        </g>
        <circle class="hub" cx="70" cy="64" r="4"/>
        <rect class="motor" x="59" y="108" width="22" height="16" rx="2"/>
        <path class="ink" d="M63 119V113L67 117L71 113V119"/>
        <path class="ink muted" d="M18 116H59"/>
        <path class="fly-power" d="M38 116H23.534M26.534 113L23.534 116L26.534 119"/>
        <path class="ink muted" d="M16 112V120"/>
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

if (!customElements.get("concept-flywheel-energy-storage")) {
  customElements.define("concept-flywheel-energy-storage", ConceptFlywheelEnergyStorage);
}
