// Grid Frequency Response. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGridFrequencyResponse extends HTMLElement {
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
        .machine {
          fill:#10291e;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .grid-rotor {
          animation:grid-rotation 12s linear infinite
        }
        .feedback {
          fill:none;
          stroke:#77c9ef;
          stroke-width:.8;
          stroke-dasharray:2 2
        }
        .valve-frame {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:1
        }
        .valve-opening {
          fill:#f3c977;
          animation:grid-valve 12s linear infinite
        }
        .breaker {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.6;
          animation:grid-breaker 12s steps(1,end) infinite
        }
        .contact {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:.8
        }
        .new-load {
          fill:#12352b;
          stroke:#77c9ef;
          stroke-width:1.2
        }
        .load-filament {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.4;
          animation:grid-load 12s steps(1,end) infinite
        }
        .axis {
          fill:none;
          stroke:#375b51;
          stroke-width:.8
        }
        .event {
          stroke:#ed8eab;
          stroke-width:.7;
          stroke-dasharray:2 2
        }
        .frequency-trace {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .frequency-point {
          fill:#f3c977;
          animation:grid-frequency 12s linear infinite
        }
        .nominal {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1
        }
        .grid-cycle {
          animation:grid-cycle 12s linear infinite
        }
        @keyframes grid-rotation {
          0.0000% {
            transform:rotate(0deg)
          }
          0.4167% {
            transform:rotate(6deg)
          }
          0.8333% {
            transform:rotate(12deg)
          }
          1.2500% {
            transform:rotate(18deg)
          }
          1.6667% {
            transform:rotate(24deg)
          }
          2.0833% {
            transform:rotate(30deg)
          }
          2.5000% {
            transform:rotate(36deg)
          }
          2.9167% {
            transform:rotate(42deg)
          }
          3.3333% {
            transform:rotate(48deg)
          }
          3.7500% {
            transform:rotate(54deg)
          }
          4.1667% {
            transform:rotate(60deg)
          }
          4.5833% {
            transform:rotate(66deg)
          }
          5.0000% {
            transform:rotate(72deg)
          }
          5.4167% {
            transform:rotate(78deg)
          }
          5.8333% {
            transform:rotate(84deg)
          }
          6.2500% {
            transform:rotate(90deg)
          }
          6.6667% {
            transform:rotate(96deg)
          }
          7.0833% {
            transform:rotate(102deg)
          }
          7.5000% {
            transform:rotate(108deg)
          }
          7.9167% {
            transform:rotate(114deg)
          }
          8.3333% {
            transform:rotate(120.0deg)
          }
          8.7500% {
            transform:rotate(125.979deg)
          }
          9.1667% {
            transform:rotate(131.915deg)
          }
          9.5833% {
            transform:rotate(137.809deg)
          }
          10.0000% {
            transform:rotate(143.663deg)
          }
          10.4167% {
            transform:rotate(149.476deg)
          }
          10.8333% {
            transform:rotate(155.251deg)
          }
          11.2500% {
            transform:rotate(160.987deg)
          }
          11.6667% {
            transform:rotate(166.686deg)
          }
          12.0833% {
            transform:rotate(172.349deg)
          }
          12.5000% {
            transform:rotate(177.977deg)
          }
          12.9167% {
            transform:rotate(183.571deg)
          }
          13.3333% {
            transform:rotate(189.132deg)
          }
          13.7500% {
            transform:rotate(194.662deg)
          }
          14.1667% {
            transform:rotate(200.162deg)
          }
          14.5833% {
            transform:rotate(205.633deg)
          }
          15.0000% {
            transform:rotate(211.076deg)
          }
          15.4167% {
            transform:rotate(216.494deg)
          }
          15.8333% {
            transform:rotate(221.886deg)
          }
          16.2500% {
            transform:rotate(227.254deg)
          }
          16.6667% {
            transform:rotate(232.6deg)
          }
          17.0833% {
            transform:rotate(237.924deg)
          }
          17.5000% {
            transform:rotate(243.228deg)
          }
          17.9167% {
            transform:rotate(248.514deg)
          }
          18.3333% {
            transform:rotate(253.782deg)
          }
          18.7500% {
            transform:rotate(259.034deg)
          }
          19.1667% {
            transform:rotate(264.271deg)
          }
          19.5833% {
            transform:rotate(269.493deg)
          }
          20.0000% {
            transform:rotate(274.703deg)
          }
          20.4167% {
            transform:rotate(279.901deg)
          }
          20.8333% {
            transform:rotate(285.088deg)
          }
          21.2500% {
            transform:rotate(290.266deg)
          }
          21.6667% {
            transform:rotate(295.434deg)
          }
          22.0833% {
            transform:rotate(300.595deg)
          }
          22.5000% {
            transform:rotate(305.75deg)
          }
          22.9167% {
            transform:rotate(310.898deg)
          }
          23.3333% {
            transform:rotate(316.041deg)
          }
          23.7500% {
            transform:rotate(321.18deg)
          }
          24.1667% {
            transform:rotate(326.315deg)
          }
          24.5833% {
            transform:rotate(331.448deg)
          }
          25.0000% {
            transform:rotate(336.579deg)
          }
          25.4167% {
            transform:rotate(341.708deg)
          }
          25.8333% {
            transform:rotate(346.836deg)
          }
          26.2500% {
            transform:rotate(351.965deg)
          }
          26.6667% {
            transform:rotate(357.094deg)
          }
          27.0833% {
            transform:rotate(362.224deg)
          }
          27.5000% {
            transform:rotate(367.355deg)
          }
          27.9167% {
            transform:rotate(372.489deg)
          }
          28.3333% {
            transform:rotate(377.624deg)
          }
          28.7500% {
            transform:rotate(382.763deg)
          }
          29.1667% {
            transform:rotate(387.904deg)
          }
          29.5833% {
            transform:rotate(393.049deg)
          }
          30.0000% {
            transform:rotate(398.198deg)
          }
          30.4167% {
            transform:rotate(403.351deg)
          }
          30.8333% {
            transform:rotate(408.508deg)
          }
          31.2500% {
            transform:rotate(413.669deg)
          }
          31.6667% {
            transform:rotate(418.836deg)
          }
          32.0833% {
            transform:rotate(424.007deg)
          }
          32.5000% {
            transform:rotate(429.182deg)
          }
          32.9167% {
            transform:rotate(434.363deg)
          }
          33.3333% {
            transform:rotate(439.549deg)
          }
          33.7500% {
            transform:rotate(444.741deg)
          }
          34.1667% {
            transform:rotate(449.937deg)
          }
          34.5833% {
            transform:rotate(455.139deg)
          }
          35.0000% {
            transform:rotate(460.347deg)
          }
          35.4167% {
            transform:rotate(465.559deg)
          }
          35.8333% {
            transform:rotate(470.777deg)
          }
          36.2500% {
            transform:rotate(476.0deg)
          }
          36.6667% {
            transform:rotate(481.228deg)
          }
          37.0833% {
            transform:rotate(486.462deg)
          }
          37.5000% {
            transform:rotate(491.7deg)
          }
          37.9167% {
            transform:rotate(496.944deg)
          }
          38.3333% {
            transform:rotate(502.192deg)
          }
          38.7500% {
            transform:rotate(507.446deg)
          }
          39.1667% {
            transform:rotate(512.704deg)
          }
          39.5833% {
            transform:rotate(517.966deg)
          }
          40.0000% {
            transform:rotate(523.233deg)
          }
          40.4167% {
            transform:rotate(528.504deg)
          }
          40.8333% {
            transform:rotate(533.78deg)
          }
          41.2500% {
            transform:rotate(539.059deg)
          }
          41.6667% {
            transform:rotate(544.343deg)
          }
          42.0833% {
            transform:rotate(549.63deg)
          }
          42.5000% {
            transform:rotate(554.92deg)
          }
          42.9167% {
            transform:rotate(560.214deg)
          }
          43.3333% {
            transform:rotate(565.512deg)
          }
          43.7500% {
            transform:rotate(570.812deg)
          }
          44.1667% {
            transform:rotate(576.116deg)
          }
          44.5833% {
            transform:rotate(581.422deg)
          }
          45.0000% {
            transform:rotate(586.731deg)
          }
          45.4167% {
            transform:rotate(592.043deg)
          }
          45.8333% {
            transform:rotate(597.357deg)
          }
          46.2500% {
            transform:rotate(602.673deg)
          }
          46.6667% {
            transform:rotate(607.991deg)
          }
          47.0833% {
            transform:rotate(613.311deg)
          }
          47.5000% {
            transform:rotate(618.633deg)
          }
          47.9167% {
            transform:rotate(623.957deg)
          }
          48.3333% {
            transform:rotate(629.282deg)
          }
          48.7500% {
            transform:rotate(634.609deg)
          }
          49.1667% {
            transform:rotate(639.936deg)
          }
          49.5833% {
            transform:rotate(645.265deg)
          }
          50.0000% {
            transform:rotate(650.595deg)
          }
          50.4167% {
            transform:rotate(655.926deg)
          }
          50.8333% {
            transform:rotate(661.258deg)
          }
          51.2500% {
            transform:rotate(666.59deg)
          }
          51.6667% {
            transform:rotate(671.923deg)
          }
          52.0833% {
            transform:rotate(677.256deg)
          }
          52.5000% {
            transform:rotate(682.59deg)
          }
          52.9167% {
            transform:rotate(687.924deg)
          }
          53.3333% {
            transform:rotate(693.259deg)
          }
          53.7500% {
            transform:rotate(698.593deg)
          }
          54.1667% {
            transform:rotate(703.928deg)
          }
          54.5833% {
            transform:rotate(709.262deg)
          }
          55.0000% {
            transform:rotate(714.597deg)
          }
          55.4167% {
            transform:rotate(719.931deg)
          }
          55.8333% {
            transform:rotate(725.265deg)
          }
          56.2500% {
            transform:rotate(730.599deg)
          }
          56.6667% {
            transform:rotate(735.933deg)
          }
          57.0833% {
            transform:rotate(741.266deg)
          }
          57.5000% {
            transform:rotate(746.599deg)
          }
          57.9167% {
            transform:rotate(751.932deg)
          }
          58.3333% {
            transform:rotate(757.264deg)
          }
          58.7500% {
            transform:rotate(762.595deg)
          }
          59.1667% {
            transform:rotate(767.926deg)
          }
          59.5833% {
            transform:rotate(773.257deg)
          }
          60.0000% {
            transform:rotate(778.587deg)
          }
          60.4167% {
            transform:rotate(783.916deg)
          }
          60.8333% {
            transform:rotate(789.245deg)
          }
          61.2500% {
            transform:rotate(794.573deg)
          }
          61.6667% {
            transform:rotate(799.9deg)
          }
          62.0833% {
            transform:rotate(805.227deg)
          }
          62.5000% {
            transform:rotate(810.554deg)
          }
          62.9167% {
            transform:rotate(815.879deg)
          }
          63.3333% {
            transform:rotate(821.204deg)
          }
          63.7500% {
            transform:rotate(826.528deg)
          }
          64.1667% {
            transform:rotate(831.852deg)
          }
          64.5833% {
            transform:rotate(837.175deg)
          }
          65.0000% {
            transform:rotate(842.498deg)
          }
          65.4167% {
            transform:rotate(847.819deg)
          }
          65.8333% {
            transform:rotate(853.141deg)
          }
          66.2500% {
            transform:rotate(858.461deg)
          }
          66.6667% {
            transform:rotate(863.781deg)
          }
          67.0833% {
            transform:rotate(869.101deg)
          }
          67.5000% {
            transform:rotate(874.42deg)
          }
          67.9167% {
            transform:rotate(879.738deg)
          }
          68.3333% {
            transform:rotate(885.056deg)
          }
          68.7500% {
            transform:rotate(890.373deg)
          }
          69.1667% {
            transform:rotate(895.69deg)
          }
          69.5833% {
            transform:rotate(901.006deg)
          }
          70.0000% {
            transform:rotate(906.322deg)
          }
          70.4167% {
            transform:rotate(911.637deg)
          }
          70.8333% {
            transform:rotate(916.952deg)
          }
          71.2500% {
            transform:rotate(922.267deg)
          }
          71.6667% {
            transform:rotate(927.581deg)
          }
          72.0833% {
            transform:rotate(932.895deg)
          }
          72.5000% {
            transform:rotate(938.208deg)
          }
          72.9167% {
            transform:rotate(943.521deg)
          }
          73.3333% {
            transform:rotate(948.834deg)
          }
          73.7500% {
            transform:rotate(954.147deg)
          }
          74.1667% {
            transform:rotate(959.459deg)
          }
          74.5833% {
            transform:rotate(964.771deg)
          }
          75.0000% {
            transform:rotate(970.083deg)
          }
          75.4167% {
            transform:rotate(975.394deg)
          }
          75.8333% {
            transform:rotate(980.705deg)
          }
          76.2500% {
            transform:rotate(986.016deg)
          }
          76.6667% {
            transform:rotate(991.327deg)
          }
          77.0833% {
            transform:rotate(996.638deg)
          }
          77.5000% {
            transform:rotate(1001.949deg)
          }
          77.9167% {
            transform:rotate(1007.259deg)
          }
          78.3333% {
            transform:rotate(1012.569deg)
          }
          78.7500% {
            transform:rotate(1017.88deg)
          }
          79.1667% {
            transform:rotate(1023.19deg)
          }
          79.5833% {
            transform:rotate(1028.5deg)
          }
          80.0000% {
            transform:rotate(1033.81deg)
          }
          80.4167% {
            transform:rotate(1039.12deg)
          }
          80.8333% {
            transform:rotate(1044.43deg)
          }
          81.2500% {
            transform:rotate(1049.739deg)
          }
          81.6667% {
            transform:rotate(1055.049deg)
          }
          82.0833% {
            transform:rotate(1060.359deg)
          }
          82.5000% {
            transform:rotate(1065.669deg)
          }
          82.9167% {
            transform:rotate(1070.979deg)
          }
          83.3333% {
            transform:rotate(1076.288deg)
          }
          83.7500% {
            transform:rotate(1081.598deg)
          }
          84.1667% {
            transform:rotate(1086.908deg)
          }
          84.5833% {
            transform:rotate(1092.218deg)
          }
          85.0000% {
            transform:rotate(1097.528deg)
          }
          85.4167% {
            transform:rotate(1102.838deg)
          }
          85.8333% {
            transform:rotate(1108.148deg)
          }
          86.2500% {
            transform:rotate(1113.458deg)
          }
          86.6667% {
            transform:rotate(1118.768deg)
          }
          87.0833% {
            transform:rotate(1124.078deg)
          }
          87.5000% {
            transform:rotate(1129.388deg)
          }
          87.9167% {
            transform:rotate(1134.699deg)
          }
          88.3333% {
            transform:rotate(1140.009deg)
          }
          88.7500% {
            transform:rotate(1145.319deg)
          }
          89.1667% {
            transform:rotate(1150.63deg)
          }
          89.5833% {
            transform:rotate(1155.94deg)
          }
          90.0000% {
            transform:rotate(1161.251deg)
          }
          90.4167% {
            transform:rotate(1166.562deg)
          }
          90.8333% {
            transform:rotate(1171.873deg)
          }
          91.2500% {
            transform:rotate(1177.184deg)
          }
          91.6667% {
            transform:rotate(1182.495deg)
          }
          92.0833% {
            transform:rotate(1187.806deg)
          }
          92.5000% {
            transform:rotate(1193.117deg)
          }
          92.9167% {
            transform:rotate(1198.428deg)
          }
          93.3333% {
            transform:rotate(1203.739deg)
          }
          93.7500% {
            transform:rotate(1209.05deg)
          }
          94.1667% {
            transform:rotate(1214.362deg)
          }
          94.5833% {
            transform:rotate(1219.673deg)
          }
          95.0000% {
            transform:rotate(1224.985deg)
          }
          95.4167% {
            transform:rotate(1230.297deg)
          }
          95.8333% {
            transform:rotate(1235.608deg)
          }
          96.2500% {
            transform:rotate(1240.92deg)
          }
          96.6667% {
            transform:rotate(1246.232deg)
          }
          97.0833% {
            transform:rotate(1251.544deg)
          }
          97.5000% {
            transform:rotate(1256.856deg)
          }
          97.9167% {
            transform:rotate(1262.168deg)
          }
          98.3333% {
            transform:rotate(1267.48deg)
          }
          98.7500% {
            transform:rotate(1272.792deg)
          }
          99.1667% {
            transform:rotate(1278.104deg)
          }
          99.5833% {
            transform:rotate(1283.416deg)
          }
          100.0000% {
            transform:rotate(1288.728deg)
          }
        }
        @keyframes grid-valve {
          0.0000% {
            width:3.5px
          }
          0.4167% {
            width:3.5px
          }
          0.8333% {
            width:3.5px
          }
          1.2500% {
            width:3.5px
          }
          1.6667% {
            width:3.5px
          }
          2.0833% {
            width:3.5px
          }
          2.5000% {
            width:3.5px
          }
          2.9167% {
            width:3.5px
          }
          3.3333% {
            width:3.5px
          }
          3.7500% {
            width:3.5px
          }
          4.1667% {
            width:3.5px
          }
          4.5833% {
            width:3.5px
          }
          5.0000% {
            width:3.5px
          }
          5.4167% {
            width:3.5px
          }
          5.8333% {
            width:3.5px
          }
          6.2500% {
            width:3.5px
          }
          6.6667% {
            width:3.5px
          }
          7.0833% {
            width:3.5px
          }
          7.5000% {
            width:3.5px
          }
          7.9167% {
            width:3.5px
          }
          8.3333% {
            width:3.5px
          }
          8.7500% {
            width:3.506px
          }
          9.1667% {
            width:3.524px
          }
          9.5833% {
            width:3.554px
          }
          10.0000% {
            width:3.594px
          }
          10.4167% {
            width:3.643px
          }
          10.8333% {
            width:3.701px
          }
          11.2500% {
            width:3.768px
          }
          11.6667% {
            width:3.842px
          }
          12.0833% {
            width:3.923px
          }
          12.5000% {
            width:4.01px
          }
          12.9167% {
            width:4.103px
          }
          13.3333% {
            width:4.2px
          }
          13.7500% {
            width:4.302px
          }
          14.1667% {
            width:4.408px
          }
          14.5833% {
            width:4.517px
          }
          15.0000% {
            width:4.628px
          }
          15.4167% {
            width:4.742px
          }
          15.8333% {
            width:4.857px
          }
          16.2500% {
            width:4.974px
          }
          16.6667% {
            width:5.092px
          }
          17.0833% {
            width:5.209px
          }
          17.5000% {
            width:5.327px
          }
          17.9167% {
            width:5.445px
          }
          18.3333% {
            width:5.562px
          }
          18.7500% {
            width:5.678px
          }
          19.1667% {
            width:5.793px
          }
          19.5833% {
            width:5.906px
          }
          20.0000% {
            width:6.017px
          }
          20.4167% {
            width:6.127px
          }
          20.8333% {
            width:6.234px
          }
          21.2500% {
            width:6.339px
          }
          21.6667% {
            width:6.441px
          }
          22.0833% {
            width:6.54px
          }
          22.5000% {
            width:6.637px
          }
          22.9167% {
            width:6.73px
          }
          23.3333% {
            width:6.821px
          }
          23.7500% {
            width:6.908px
          }
          24.1667% {
            width:6.992px
          }
          24.5833% {
            width:7.073px
          }
          25.0000% {
            width:7.15px
          }
          25.4167% {
            width:7.224px
          }
          25.8333% {
            width:7.295px
          }
          26.2500% {
            width:7.362px
          }
          26.6667% {
            width:7.425px
          }
          27.0833% {
            width:7.486px
          }
          27.5000% {
            width:7.543px
          }
          27.9167% {
            width:7.596px
          }
          28.3333% {
            width:7.647px
          }
          28.7500% {
            width:7.694px
          }
          29.1667% {
            width:7.738px
          }
          29.5833% {
            width:7.779px
          }
          30.0000% {
            width:7.816px
          }
          30.4167% {
            width:7.851px
          }
          30.8333% {
            width:7.883px
          }
          31.2500% {
            width:7.912px
          }
          31.6667% {
            width:7.938px
          }
          32.0833% {
            width:7.961px
          }
          32.5000% {
            width:7.982px
          }
          32.9167% {
            width:8.001px
          }
          33.3333% {
            width:8.017px
          }
          33.7500% {
            width:8.03px
          }
          34.1667% {
            width:8.042px
          }
          34.5833% {
            width:8.051px
          }
          35.0000% {
            width:8.059px
          }
          35.4167% {
            width:8.064px
          }
          35.8333% {
            width:8.068px
          }
          36.2500% {
            width:8.07px
          }
          36.6667% {
            width:8.071px
          }
          37.0833% {
            width:8.07px
          }
          37.5000% {
            width:8.067px
          }
          37.9167% {
            width:8.063px
          }
          38.3333% {
            width:8.058px
          }
          38.7500% {
            width:8.052px
          }
          39.1667% {
            width:8.045px
          }
          39.5833% {
            width:8.037px
          }
          40.0000% {
            width:8.027px
          }
          40.4167% {
            width:8.018px
          }
          40.8333% {
            width:8.007px
          }
          41.2500% {
            width:7.996px
          }
          41.6667% {
            width:7.984px
          }
          42.0833% {
            width:7.971px
          }
          42.5000% {
            width:7.959px
          }
          42.9167% {
            width:7.945px
          }
          43.3333% {
            width:7.932px
          }
          43.7500% {
            width:7.918px
          }
          44.1667% {
            width:7.904px
          }
          44.5833% {
            width:7.89px
          }
          45.0000% {
            width:7.876px
          }
          45.4167% {
            width:7.862px
          }
          45.8333% {
            width:7.848px
          }
          46.2500% {
            width:7.834px
          }
          46.6667% {
            width:7.82px
          }
          47.0833% {
            width:7.806px
          }
          47.5000% {
            width:7.792px
          }
          47.9167% {
            width:7.778px
          }
          48.3333% {
            width:7.765px
          }
          48.7500% {
            width:7.752px
          }
          49.1667% {
            width:7.739px
          }
          49.5833% {
            width:7.727px
          }
          50.0000% {
            width:7.714px
          }
          50.4167% {
            width:7.702px
          }
          50.8333% {
            width:7.691px
          }
          51.2500% {
            width:7.68px
          }
          51.6667% {
            width:7.669px
          }
          52.0833% {
            width:7.659px
          }
          52.5000% {
            width:7.649px
          }
          52.9167% {
            width:7.639px
          }
          53.3333% {
            width:7.63px
          }
          53.7500% {
            width:7.621px
          }
          54.1667% {
            width:7.613px
          }
          54.5833% {
            width:7.605px
          }
          55.0000% {
            width:7.597px
          }
          55.4167% {
            width:7.59px
          }
          55.8333% {
            width:7.583px
          }
          56.2500% {
            width:7.577px
          }
          56.6667% {
            width:7.571px
          }
          57.0833% {
            width:7.565px
          }
          57.5000% {
            width:7.56px
          }
          57.9167% {
            width:7.555px
          }
          58.3333% {
            width:7.551px
          }
          58.7500% {
            width:7.547px
          }
          59.1667% {
            width:7.543px
          }
          59.5833% {
            width:7.539px
          }
          60.0000% {
            width:7.536px
          }
          60.4167% {
            width:7.534px
          }
          60.8333% {
            width:7.531px
          }
          61.2500% {
            width:7.529px
          }
          61.6667% {
            width:7.527px
          }
          62.0833% {
            width:7.526px
          }
          62.5000% {
            width:7.524px
          }
          62.9167% {
            width:7.523px
          }
          63.3333% {
            width:7.522px
          }
          63.7500% {
            width:7.522px
          }
          64.1667% {
            width:7.521px
          }
          64.5833% {
            width:7.521px
          }
          65.0000% {
            width:7.521px
          }
          65.4167% {
            width:7.521px
          }
          65.8333% {
            width:7.522px
          }
          66.2500% {
            width:7.522px
          }
          66.6667% {
            width:7.523px
          }
          67.0833% {
            width:7.523px
          }
          67.5000% {
            width:7.524px
          }
          67.9167% {
            width:7.525px
          }
          68.3333% {
            width:7.526px
          }
          68.7500% {
            width:7.528px
          }
          69.1667% {
            width:7.529px
          }
          69.5833% {
            width:7.53px
          }
          70.0000% {
            width:7.532px
          }
          70.4167% {
            width:7.533px
          }
          70.8333% {
            width:7.535px
          }
          71.2500% {
            width:7.536px
          }
          71.6667% {
            width:7.538px
          }
          72.0833% {
            width:7.54px
          }
          72.5000% {
            width:7.541px
          }
          72.9167% {
            width:7.543px
          }
          73.3333% {
            width:7.545px
          }
          73.7500% {
            width:7.546px
          }
          74.1667% {
            width:7.548px
          }
          74.5833% {
            width:7.55px
          }
          75.0000% {
            width:7.552px
          }
          75.4167% {
            width:7.553px
          }
          75.8333% {
            width:7.555px
          }
          76.2500% {
            width:7.557px
          }
          76.6667% {
            width:7.558px
          }
          77.0833% {
            width:7.56px
          }
          77.5000% {
            width:7.561px
          }
          77.9167% {
            width:7.563px
          }
          78.3333% {
            width:7.564px
          }
          78.7500% {
            width:7.566px
          }
          79.1667% {
            width:7.567px
          }
          79.5833% {
            width:7.568px
          }
          80.0000% {
            width:7.57px
          }
          80.4167% {
            width:7.571px
          }
          80.8333% {
            width:7.572px
          }
          81.2500% {
            width:7.573px
          }
          81.6667% {
            width:7.574px
          }
          82.0833% {
            width:7.575px
          }
          82.5000% {
            width:7.576px
          }
          82.9167% {
            width:7.577px
          }
          83.3333% {
            width:7.578px
          }
          83.7500% {
            width:7.579px
          }
          84.1667% {
            width:7.58px
          }
          84.5833% {
            width:7.581px
          }
          85.0000% {
            width:7.581px
          }
          85.4167% {
            width:7.582px
          }
          85.8333% {
            width:7.583px
          }
          86.2500% {
            width:7.583px
          }
          86.6667% {
            width:7.584px
          }
          87.0833% {
            width:7.584px
          }
          87.5000% {
            width:7.585px
          }
          87.9167% {
            width:7.585px
          }
          88.3333% {
            width:7.585px
          }
          88.7500% {
            width:7.586px
          }
          89.1667% {
            width:7.586px
          }
          89.5833% {
            width:7.586px
          }
          90.0000% {
            width:7.586px
          }
          90.4167% {
            width:7.587px
          }
          90.8333% {
            width:7.587px
          }
          91.2500% {
            width:7.587px
          }
          91.6667% {
            width:7.587px
          }
          92.0833% {
            width:7.587px
          }
          92.5000% {
            width:7.587px
          }
          92.9167% {
            width:7.587px
          }
          93.3333% {
            width:7.587px
          }
          93.7500% {
            width:7.587px
          }
          94.1667% {
            width:7.587px
          }
          94.5833% {
            width:7.587px
          }
          95.0000% {
            width:7.587px
          }
          95.4167% {
            width:7.587px
          }
          95.8333% {
            width:7.587px
          }
          96.2500% {
            width:7.587px
          }
          96.6667% {
            width:7.586px
          }
          97.0833% {
            width:7.586px
          }
          97.5000% {
            width:7.586px
          }
          97.9167% {
            width:7.586px
          }
          98.3333% {
            width:7.586px
          }
          98.7500% {
            width:7.586px
          }
          99.1667% {
            width:7.585px
          }
          99.5833% {
            width:7.585px
          }
          100.0000% {
            width:7.585px
          }
        }
        @keyframes grid-frequency {
          0.0000% {
            transform:translate(18px,105px)
          }
          0.4167% {
            transform:translate(18.425px,105px)
          }
          0.8333% {
            transform:translate(18.85px,105px)
          }
          1.2500% {
            transform:translate(19.275px,105px)
          }
          1.6667% {
            transform:translate(19.7px,105px)
          }
          2.0833% {
            transform:translate(20.125px,105px)
          }
          2.5000% {
            transform:translate(20.55px,105px)
          }
          2.9167% {
            transform:translate(20.975px,105px)
          }
          3.3333% {
            transform:translate(21.4px,105px)
          }
          3.7500% {
            transform:translate(21.825px,105px)
          }
          4.1667% {
            transform:translate(22.25px,105px)
          }
          4.5833% {
            transform:translate(22.675px,105px)
          }
          5.0000% {
            transform:translate(23.1px,105px)
          }
          5.4167% {
            transform:translate(23.525px,105px)
          }
          5.8333% {
            transform:translate(23.95px,105px)
          }
          6.2500% {
            transform:translate(24.375px,105px)
          }
          6.6667% {
            transform:translate(24.8px,105px)
          }
          7.0833% {
            transform:translate(25.225px,105px)
          }
          7.5000% {
            transform:translate(25.65px,105px)
          }
          7.9167% {
            transform:translate(26.075px,105px)
          }
          8.3333% {
            transform:translate(26.5px,105px)
          }
          8.7500% {
            transform:translate(26.925px,105.82px)
          }
          9.1667% {
            transform:translate(27.35px,106.627px)
          }
          9.5833% {
            transform:translate(27.775px,107.42px)
          }
          10.0000% {
            transform:translate(28.2px,108.198px)
          }
          10.4167% {
            transform:translate(28.625px,108.96px)
          }
          10.8333% {
            transform:translate(29.05px,109.703px)
          }
          11.2500% {
            transform:translate(29.475px,110.427px)
          }
          11.6667% {
            transform:translate(29.9px,111.13px)
          }
          12.0833% {
            transform:translate(30.325px,111.812px)
          }
          12.5000% {
            transform:translate(30.75px,112.473px)
          }
          12.9167% {
            transform:translate(31.175px,113.11px)
          }
          13.3333% {
            transform:translate(31.6px,113.725px)
          }
          13.7500% {
            transform:translate(32.025px,114.315px)
          }
          14.1667% {
            transform:translate(32.45px,114.882px)
          }
          14.5833% {
            transform:translate(32.875px,115.425px)
          }
          15.0000% {
            transform:translate(33.3px,115.943px)
          }
          15.4167% {
            transform:translate(33.725px,116.436px)
          }
          15.8333% {
            transform:translate(34.15px,116.905px)
          }
          16.2500% {
            transform:translate(34.575px,117.349px)
          }
          16.6667% {
            transform:translate(35px,117.769px)
          }
          17.0833% {
            transform:translate(35.425px,118.165px)
          }
          17.5000% {
            transform:translate(35.85px,118.537px)
          }
          17.9167% {
            transform:translate(36.275px,118.886px)
          }
          18.3333% {
            transform:translate(36.7px,119.211px)
          }
          18.7500% {
            transform:translate(37.125px,119.513px)
          }
          19.1667% {
            transform:translate(37.55px,119.794px)
          }
          19.5833% {
            transform:translate(37.975px,120.052px)
          }
          20.0000% {
            transform:translate(38.4px,120.289px)
          }
          20.4167% {
            transform:translate(38.825px,120.506px)
          }
          20.8333% {
            transform:translate(39.25px,120.702px)
          }
          21.2500% {
            transform:translate(39.675px,120.879px)
          }
          21.6667% {
            transform:translate(40.1px,121.037px)
          }
          22.0833% {
            transform:translate(40.525px,121.177px)
          }
          22.5000% {
            transform:translate(40.95px,121.299px)
          }
          22.9167% {
            transform:translate(41.375px,121.405px)
          }
          23.3333% {
            transform:translate(41.8px,121.494px)
          }
          23.7500% {
            transform:translate(42.225px,121.568px)
          }
          24.1667% {
            transform:translate(42.65px,121.628px)
          }
          24.5833% {
            transform:translate(43.075px,121.673px)
          }
          25.0000% {
            transform:translate(43.5px,121.705px)
          }
          25.4167% {
            transform:translate(43.925px,121.725px)
          }
          25.8333% {
            transform:translate(44.35px,121.732px)
          }
          26.2500% {
            transform:translate(44.775px,121.729px)
          }
          26.6667% {
            transform:translate(45.2px,121.715px)
          }
          27.0833% {
            transform:translate(45.625px,121.691px)
          }
          27.5000% {
            transform:translate(46.05px,121.658px)
          }
          27.9167% {
            transform:translate(46.475px,121.617px)
          }
          28.3333% {
            transform:translate(46.9px,121.568px)
          }
          28.7500% {
            transform:translate(47.325px,121.511px)
          }
          29.1667% {
            transform:translate(47.75px,121.448px)
          }
          29.5833% {
            transform:translate(48.175px,121.379px)
          }
          30.0000% {
            transform:translate(48.6px,121.305px)
          }
          30.4167% {
            transform:translate(49.025px,121.226px)
          }
          30.8333% {
            transform:translate(49.45px,121.142px)
          }
          31.2500% {
            transform:translate(49.875px,121.054px)
          }
          31.6667% {
            transform:translate(50.3px,120.963px)
          }
          32.0833% {
            transform:translate(50.725px,120.87px)
          }
          32.5000% {
            transform:translate(51.15px,120.773px)
          }
          32.9167% {
            transform:translate(51.575px,120.675px)
          }
          33.3333% {
            transform:translate(52px,120.576px)
          }
          33.7500% {
            transform:translate(52.425px,120.475px)
          }
          34.1667% {
            transform:translate(52.85px,120.373px)
          }
          34.5833% {
            transform:translate(53.275px,120.271px)
          }
          35.0000% {
            transform:translate(53.7px,120.169px)
          }
          35.4167% {
            transform:translate(54.125px,120.067px)
          }
          35.8333% {
            transform:translate(54.55px,119.966px)
          }
          36.2500% {
            transform:translate(54.975px,119.865px)
          }
          36.6667% {
            transform:translate(55.4px,119.765px)
          }
          37.0833% {
            transform:translate(55.825px,119.667px)
          }
          37.5000% {
            transform:translate(56.25px,119.57px)
          }
          37.9167% {
            transform:translate(56.675px,119.475px)
          }
          38.3333% {
            transform:translate(57.1px,119.382px)
          }
          38.7500% {
            transform:translate(57.525px,119.291px)
          }
          39.1667% {
            transform:translate(57.95px,119.202px)
          }
          39.5833% {
            transform:translate(58.375px,119.116px)
          }
          40.0000% {
            transform:translate(58.8px,119.032px)
          }
          40.4167% {
            transform:translate(59.225px,118.95px)
          }
          40.8333% {
            transform:translate(59.65px,118.872px)
          }
          41.2500% {
            transform:translate(60.075px,118.795px)
          }
          41.6667% {
            transform:translate(60.5px,118.722px)
          }
          42.0833% {
            transform:translate(60.925px,118.652px)
          }
          42.5000% {
            transform:translate(61.35px,118.584px)
          }
          42.9167% {
            transform:translate(61.775px,118.52px)
          }
          43.3333% {
            transform:translate(62.2px,118.458px)
          }
          43.7500% {
            transform:translate(62.625px,118.399px)
          }
          44.1667% {
            transform:translate(63.05px,118.344px)
          }
          44.5833% {
            transform:translate(63.475px,118.291px)
          }
          45.0000% {
            transform:translate(63.9px,118.241px)
          }
          45.4167% {
            transform:translate(64.325px,118.194px)
          }
          45.8333% {
            transform:translate(64.75px,118.15px)
          }
          46.2500% {
            transform:translate(65.175px,118.109px)
          }
          46.6667% {
            transform:translate(65.6px,118.07px)
          }
          47.0833% {
            transform:translate(66.025px,118.034px)
          }
          47.5000% {
            transform:translate(66.45px,118.001px)
          }
          47.9167% {
            transform:translate(66.875px,117.971px)
          }
          48.3333% {
            transform:translate(67.3px,117.943px)
          }
          48.7500% {
            transform:translate(67.725px,117.917px)
          }
          49.1667% {
            transform:translate(68.15px,117.894px)
          }
          49.5833% {
            transform:translate(68.575px,117.873px)
          }
          50.0000% {
            transform:translate(69px,117.855px)
          }
          50.4167% {
            transform:translate(69.425px,117.839px)
          }
          50.8333% {
            transform:translate(69.85px,117.824px)
          }
          51.2500% {
            transform:translate(70.275px,117.812px)
          }
          51.6667% {
            transform:translate(70.7px,117.802px)
          }
          52.0833% {
            transform:translate(71.125px,117.793px)
          }
          52.5000% {
            transform:translate(71.55px,117.786px)
          }
          52.9167% {
            transform:translate(71.975px,117.781px)
          }
          53.3333% {
            transform:translate(72.4px,117.778px)
          }
          53.7500% {
            transform:translate(72.825px,117.776px)
          }
          54.1667% {
            transform:translate(73.25px,117.775px)
          }
          54.5833% {
            transform:translate(73.675px,117.776px)
          }
          55.0000% {
            transform:translate(74.1px,117.778px)
          }
          55.4167% {
            transform:translate(74.525px,117.781px)
          }
          55.8333% {
            transform:translate(74.95px,117.785px)
          }
          56.2500% {
            transform:translate(75.375px,117.79px)
          }
          56.6667% {
            transform:translate(75.8px,117.796px)
          }
          57.0833% {
            transform:translate(76.225px,117.803px)
          }
          57.5000% {
            transform:translate(76.65px,117.811px)
          }
          57.9167% {
            transform:translate(77.075px,117.82px)
          }
          58.3333% {
            transform:translate(77.5px,117.829px)
          }
          58.7500% {
            transform:translate(77.925px,117.838px)
          }
          59.1667% {
            transform:translate(78.35px,117.849px)
          }
          59.5833% {
            transform:translate(78.775px,117.859px)
          }
          60.0000% {
            transform:translate(79.2px,117.87px)
          }
          60.4167% {
            transform:translate(79.625px,117.881px)
          }
          60.8333% {
            transform:translate(80.05px,117.893px)
          }
          61.2500% {
            transform:translate(80.475px,117.905px)
          }
          61.6667% {
            transform:translate(80.9px,117.917px)
          }
          62.0833% {
            transform:translate(81.325px,117.929px)
          }
          62.5000% {
            transform:translate(81.75px,117.941px)
          }
          62.9167% {
            transform:translate(82.175px,117.954px)
          }
          63.3333% {
            transform:translate(82.6px,117.966px)
          }
          63.7500% {
            transform:translate(83.025px,117.978px)
          }
          64.1667% {
            transform:translate(83.45px,117.99px)
          }
          64.5833% {
            transform:translate(83.875px,118.002px)
          }
          65.0000% {
            transform:translate(84.3px,118.014px)
          }
          65.4167% {
            transform:translate(84.725px,118.026px)
          }
          65.8333% {
            transform:translate(85.15px,118.038px)
          }
          66.2500% {
            transform:translate(85.575px,118.049px)
          }
          66.6667% {
            transform:translate(86px,118.06px)
          }
          67.0833% {
            transform:translate(86.425px,118.071px)
          }
          67.5000% {
            transform:translate(86.85px,118.082px)
          }
          67.9167% {
            transform:translate(87.275px,118.092px)
          }
          68.3333% {
            transform:translate(87.7px,118.102px)
          }
          68.7500% {
            transform:translate(88.125px,118.112px)
          }
          69.1667% {
            transform:translate(88.55px,118.121px)
          }
          69.5833% {
            transform:translate(88.975px,118.13px)
          }
          70.0000% {
            transform:translate(89.4px,118.139px)
          }
          70.4167% {
            transform:translate(89.825px,118.147px)
          }
          70.8333% {
            transform:translate(90.25px,118.156px)
          }
          71.2500% {
            transform:translate(90.675px,118.163px)
          }
          71.6667% {
            transform:translate(91.1px,118.171px)
          }
          72.0833% {
            transform:translate(91.525px,118.178px)
          }
          72.5000% {
            transform:translate(91.95px,118.184px)
          }
          72.9167% {
            transform:translate(92.375px,118.19px)
          }
          73.3333% {
            transform:translate(92.8px,118.196px)
          }
          73.7500% {
            transform:translate(93.225px,118.202px)
          }
          74.1667% {
            transform:translate(93.65px,118.207px)
          }
          74.5833% {
            transform:translate(94.075px,118.212px)
          }
          75.0000% {
            transform:translate(94.5px,118.217px)
          }
          75.4167% {
            transform:translate(94.925px,118.221px)
          }
          75.8333% {
            transform:translate(95.35px,118.225px)
          }
          76.2500% {
            transform:translate(95.775px,118.228px)
          }
          76.6667% {
            transform:translate(96.2px,118.232px)
          }
          77.0833% {
            transform:translate(96.625px,118.235px)
          }
          77.5000% {
            transform:translate(97.05px,118.237px)
          }
          77.9167% {
            transform:translate(97.475px,118.24px)
          }
          78.3333% {
            transform:translate(97.9px,118.242px)
          }
          78.7500% {
            transform:translate(98.325px,118.244px)
          }
          79.1667% {
            transform:translate(98.75px,118.246px)
          }
          79.5833% {
            transform:translate(99.175px,118.247px)
          }
          80.0000% {
            transform:translate(99.6px,118.248px)
          }
          80.4167% {
            transform:translate(100.025px,118.249px)
          }
          80.8333% {
            transform:translate(100.45px,118.25px)
          }
          81.2500% {
            transform:translate(100.875px,118.25px)
          }
          81.6667% {
            transform:translate(101.3px,118.251px)
          }
          82.0833% {
            transform:translate(101.725px,118.251px)
          }
          82.5000% {
            transform:translate(102.15px,118.251px)
          }
          82.9167% {
            transform:translate(102.575px,118.251px)
          }
          83.3333% {
            transform:translate(103px,118.251px)
          }
          83.7500% {
            transform:translate(103.425px,118.25px)
          }
          84.1667% {
            transform:translate(103.85px,118.25px)
          }
          84.5833% {
            transform:translate(104.275px,118.249px)
          }
          85.0000% {
            transform:translate(104.7px,118.248px)
          }
          85.4167% {
            transform:translate(105.125px,118.248px)
          }
          85.8333% {
            transform:translate(105.55px,118.247px)
          }
          86.2500% {
            transform:translate(105.975px,118.246px)
          }
          86.6667% {
            transform:translate(106.4px,118.244px)
          }
          87.0833% {
            transform:translate(106.825px,118.243px)
          }
          87.5000% {
            transform:translate(107.25px,118.242px)
          }
          87.9167% {
            transform:translate(107.675px,118.241px)
          }
          88.3333% {
            transform:translate(108.1px,118.239px)
          }
          88.7500% {
            transform:translate(108.525px,118.238px)
          }
          89.1667% {
            transform:translate(108.95px,118.237px)
          }
          89.5833% {
            transform:translate(109.375px,118.235px)
          }
          90.0000% {
            transform:translate(109.8px,118.234px)
          }
          90.4167% {
            transform:translate(110.225px,118.232px)
          }
          90.8333% {
            transform:translate(110.65px,118.231px)
          }
          91.2500% {
            transform:translate(111.075px,118.229px)
          }
          91.6667% {
            transform:translate(111.5px,118.228px)
          }
          92.0833% {
            transform:translate(111.925px,118.226px)
          }
          92.5000% {
            transform:translate(112.35px,118.225px)
          }
          92.9167% {
            transform:translate(112.775px,118.223px)
          }
          93.3333% {
            transform:translate(113.2px,118.222px)
          }
          93.7500% {
            transform:translate(113.625px,118.221px)
          }
          94.1667% {
            transform:translate(114.05px,118.219px)
          }
          94.5833% {
            transform:translate(114.475px,118.218px)
          }
          95.0000% {
            transform:translate(114.9px,118.217px)
          }
          95.4167% {
            transform:translate(115.325px,118.215px)
          }
          95.8333% {
            transform:translate(115.75px,118.214px)
          }
          96.2500% {
            transform:translate(116.175px,118.213px)
          }
          96.6667% {
            transform:translate(116.6px,118.212px)
          }
          97.0833% {
            transform:translate(117.025px,118.21px)
          }
          97.5000% {
            transform:translate(117.45px,118.209px)
          }
          97.9167% {
            transform:translate(117.875px,118.208px)
          }
          98.3333% {
            transform:translate(118.3px,118.207px)
          }
          98.7500% {
            transform:translate(118.725px,118.206px)
          }
          99.1667% {
            transform:translate(119.15px,118.205px)
          }
          99.5833% {
            transform:translate(119.575px,118.204px)
          }
          100.0000% {
            transform:translate(120px,118.203px)
          }
        }
        @keyframes grid-breaker {
          0% {
            d:path("M113 55L118 62.4833")
          }
          8.3333% {
            d:path("M113 55L113 64")
          }
        }
        @keyframes grid-load {
          0% {
            opacity:.15
          }
          8.3333% {
            opacity:1
          }
        }
        @keyframes grid-cycle {
          0%,95.8333%,100% {
            opacity:0
          }
          4%,87.5% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Grid Frequency Response">
        <g class="grid-cycle">
          <path class="ink muted" d="M29 12V20M29 28V35M42 48H49M73 48H113V55M113 64V67"/>
          <path class="feedback" d="M61 35V17H37"/>
          <rect class="valve-frame" x="23" y="20" width="12" height="8" rx="1"/>
          <rect class="valve-opening" x="24" y="21" width="7.15" height="6"/>
          <circle class="machine" cx="29" cy="48" r="13"/>
          <circle class="machine" cx="61" cy="48" r="12"/>
          <g transform="translate(29,48)">
            <g class="grid-rotor" style="transform:rotate(336.579deg)">
              <path class="ink" transform="rotate(0)" d="M0 0Q10 -4 10 0L4 3Z"/>
              <path class="ink" transform="rotate(120)" d="M0 0Q10 -4 10 0L4 3Z"/>
              <path class="ink" transform="rotate(240)" d="M0 0Q10 -4 10 0L4 3Z"/>
            </g>
          </g>
          <g transform="translate(61,48)">
            <g class="grid-rotor" style="transform:rotate(336.579deg)">
              <path class="ink" transform="rotate(0)" d="M0 0Q9 -4 9 0L4 3Z"/>
              <path class="ink" transform="rotate(120)" d="M0 0Q9 -4 9 0L4 3Z"/>
              <path class="ink" transform="rotate(240)" d="M0 0Q9 -4 9 0L4 3Z"/>
            </g>
          </g>
          <path class="breaker" d="M113 55V64"/>
          <circle class="contact" cx="113" cy="55" r="1.4"/>
          <circle class="contact" cx="113" cy="64" r="1.4"/>
          <rect class="new-load" x="99" y="67" width="26" height="19" rx="2"/>
          <path class="load-filament" d="M105 82V72L109 78L113 72L117 78L121 72"/>
          <path class="axis" d="M18 96V131H122M18 105H122"/>
          <path class="event" d="M26.5 97V130"/>
          <path class="frequency-trace" d="M18,105L18.425,105L18.85,105L19.275,105L19.7,105L20.125,105L20.55,105L20.975,105L21.4,105L21.825,105L22.25,105L22.675,105L23.1,105L23.525,105L23.95,105L24.375,105L24.8,105L25.225,105L25.65,105L26.075,105L26.5,105L26.925,105.82L27.35,106.627L27.775,107.42L28.2,108.198L28.625,108.96L29.05,109.703L29.475,110.427L29.9,111.13L30.325,111.812L30.75,112.473L31.175,113.11L31.6,113.725L32.025,114.315L32.45,114.882L32.875,115.425L33.3,115.943L33.725,116.436L34.15,116.905L34.575,117.349L35,117.769L35.425,118.165L35.85,118.537L36.275,118.886L36.7,119.211L37.125,119.513L37.55,119.794L37.975,120.052L38.4,120.289L38.825,120.506L39.25,120.702L39.675,120.879L40.1,121.037L40.525,121.177L40.95,121.299L41.375,121.405L41.8,121.494L42.225,121.568L42.65,121.628L43.075,121.673L43.5,121.705L43.925,121.725L44.35,121.732L44.775,121.729L45.2,121.715L45.625,121.691L46.05,121.658L46.475,121.617L46.9,121.568L47.325,121.511L47.75,121.448L48.175,121.379L48.6,121.305L49.025,121.226L49.45,121.142L49.875,121.054L50.3,120.963L50.725,120.87L51.15,120.773L51.575,120.675L52,120.576L52.425,120.475L52.85,120.373L53.275,120.271L53.7,120.169L54.125,120.067L54.55,119.966L54.975,119.865L55.4,119.765L55.825,119.667L56.25,119.57L56.675,119.475L57.1,119.382L57.525,119.291L57.95,119.202L58.375,119.116L58.8,119.032L59.225,118.95L59.65,118.872L60.075,118.795L60.5,118.722L60.925,118.652L61.35,118.584L61.775,118.52L62.2,118.458L62.625,118.399L63.05,118.344L63.475,118.291L63.9,118.241L64.325,118.194L64.75,118.15L65.175,118.109L65.6,118.07L66.025,118.034L66.45,118.001L66.875,117.971L67.3,117.943L67.725,117.917L68.15,117.894L68.575,117.873L69,117.855L69.425,117.839L69.85,117.824L70.275,117.812L70.7,117.802L71.125,117.793L71.55,117.786L71.975,117.781L72.4,117.778L72.825,117.776L73.25,117.775L73.675,117.776L74.1,117.778L74.525,117.781L74.95,117.785L75.375,117.79L75.8,117.796L76.225,117.803L76.65,117.811L77.075,117.82L77.5,117.829L77.925,117.838L78.35,117.849L78.775,117.859L79.2,117.87L79.625,117.881L80.05,117.893L80.475,117.905L80.9,117.917L81.325,117.929L81.75,117.941L82.175,117.954L82.6,117.966L83.025,117.978L83.45,117.99L83.875,118.002L84.3,118.014L84.725,118.026L85.15,118.038L85.575,118.049L86,118.06L86.425,118.071L86.85,118.082L87.275,118.092L87.7,118.102L88.125,118.112L88.55,118.121L88.975,118.13L89.4,118.139L89.825,118.147L90.25,118.156L90.675,118.163L91.1,118.171L91.525,118.178L91.95,118.184L92.375,118.19L92.8,118.196L93.225,118.202L93.65,118.207L94.075,118.212L94.5,118.217L94.925,118.221L95.35,118.225L95.775,118.228L96.2,118.232L96.625,118.235L97.05,118.237L97.475,118.24L97.9,118.242L98.325,118.244L98.75,118.246L99.175,118.247L99.6,118.248L100.025,118.249L100.45,118.25L100.875,118.25L101.3,118.251L101.725,118.251L102.15,118.251L102.575,118.251L103,118.251L103.425,118.25L103.85,118.25L104.275,118.249L104.7,118.248L105.125,118.248L105.55,118.247L105.975,118.246L106.4,118.244L106.825,118.243L107.25,118.242L107.675,118.241L108.1,118.239L108.525,118.238L108.95,118.237L109.375,118.235L109.8,118.234L110.225,118.232L110.65,118.231L111.075,118.229L111.5,118.228L111.925,118.226L112.35,118.225L112.775,118.223L113.2,118.222L113.625,118.221L114.05,118.219L114.475,118.218L114.9,118.217L115.325,118.215L115.75,118.214L116.175,118.213L116.6,118.212L117.025,118.21L117.45,118.209L117.875,118.208L118.3,118.207L118.725,118.206L119.15,118.205L119.575,118.204L120,118.203"/>
          <circle class="frequency-point" r="2.8" transform="translate(43.5,121.705)"/>
          <path class="nominal" d="M9 107V98Q9 94 13 95M7 100H13"/>
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

if (!customElements.get("concept-grid-frequency-response")) {
  customElements.define("concept-grid-frequency-response", ConceptGridFrequencyResponse);
}
