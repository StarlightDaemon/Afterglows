// Wind-Turbine Pitch Regulation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptWindTurbinePitchRegulation extends HTMLElement {
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
        .tower {
          fill:#143426;
          stroke:#5c8d74;
          stroke-width:1.1
        }
        .section-leader {
          fill:none;
          stroke:#375b51;
          stroke-width:.8;
          stroke-dasharray:2 3
        }
        .section-frame {
          fill:#0c1c15;
          stroke:#375b51;
          stroke-width:1
        }
        .relative-wind {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
          animation:pitch-wind 12s linear infinite
        }
        .airfoil {
          fill:#f3c977;
          stroke:#f3c977;
          stroke-width:.8;
          transform:rotate(50.173deg);
          animation:pitch-section 12s linear infinite
        }
        .blade-root {
          stroke:#70edb1;
          stroke-width:1.7
        }
        .blade {
          fill:#70edb1;
          fill-opacity:.65;
          stroke:#a8e5c5;
          stroke-width:.9;
          transform:scaleX(0.768);
          animation:pitch-chord 12s linear infinite
        }
        .wind-rotor {
          transform:rotate(392.805deg);
          animation:pitch-rotor 12s linear infinite
        }
        .hub {
          fill:#10291d;
          stroke:#a9d6bd;
          stroke-width:1.3
        }
        @keyframes pitch-rotor {
          0% {
            transform:rotate(0deg)
          }
          0.417% {
            transform:rotate(7.092deg)
          }
          0.833% {
            transform:rotate(14.177deg)
          }
          1.25% {
            transform:rotate(21.254deg)
          }
          1.667% {
            transform:rotate(28.323deg)
          }
          2.083% {
            transform:rotate(35.382deg)
          }
          2.5% {
            transform:rotate(42.432deg)
          }
          2.917% {
            transform:rotate(49.471deg)
          }
          3.333% {
            transform:rotate(56.499deg)
          }
          3.75% {
            transform:rotate(63.515deg)
          }
          4.167% {
            transform:rotate(70.518deg)
          }
          4.583% {
            transform:rotate(77.508deg)
          }
          5% {
            transform:rotate(84.483deg)
          }
          5.417% {
            transform:rotate(91.444deg)
          }
          5.833% {
            transform:rotate(98.39deg)
          }
          6.25% {
            transform:rotate(105.319deg)
          }
          6.667% {
            transform:rotate(112.232deg)
          }
          7.083% {
            transform:rotate(119.128deg)
          }
          7.5% {
            transform:rotate(126.005deg)
          }
          7.917% {
            transform:rotate(132.864deg)
          }
          8.333% {
            transform:rotate(139.704deg)
          }
          8.75% {
            transform:rotate(146.524deg)
          }
          9.167% {
            transform:rotate(153.324deg)
          }
          9.583% {
            transform:rotate(160.104deg)
          }
          10% {
            transform:rotate(166.862deg)
          }
          10.417% {
            transform:rotate(173.598deg)
          }
          10.833% {
            transform:rotate(180.311deg)
          }
          11.25% {
            transform:rotate(187.002deg)
          }
          11.667% {
            transform:rotate(193.67deg)
          }
          12.083% {
            transform:rotate(200.313deg)
          }
          12.5% {
            transform:rotate(206.933deg)
          }
          12.917% {
            transform:rotate(213.528deg)
          }
          13.333% {
            transform:rotate(220.098deg)
          }
          13.75% {
            transform:rotate(226.642deg)
          }
          14.167% {
            transform:rotate(233.161deg)
          }
          14.583% {
            transform:rotate(239.653deg)
          }
          15% {
            transform:rotate(246.119deg)
          }
          15.417% {
            transform:rotate(252.558deg)
          }
          15.833% {
            transform:rotate(258.97deg)
          }
          16.25% {
            transform:rotate(265.355deg)
          }
          16.667% {
            transform:rotate(271.712deg)
          }
          17.083% {
            transform:rotate(278.041deg)
          }
          17.5% {
            transform:rotate(284.342deg)
          }
          17.917% {
            transform:rotate(290.614deg)
          }
          18.333% {
            transform:rotate(296.858deg)
          }
          18.75% {
            transform:rotate(303.073deg)
          }
          19.167% {
            transform:rotate(309.26deg)
          }
          19.583% {
            transform:rotate(315.417deg)
          }
          20% {
            transform:rotate(321.545deg)
          }
          20.417% {
            transform:rotate(327.645deg)
          }
          20.833% {
            transform:rotate(333.715deg)
          }
          21.25% {
            transform:rotate(339.755deg)
          }
          21.667% {
            transform:rotate(345.767deg)
          }
          22.083% {
            transform:rotate(351.749deg)
          }
          22.5% {
            transform:rotate(357.701deg)
          }
          22.917% {
            transform:rotate(363.625deg)
          }
          23.333% {
            transform:rotate(369.519deg)
          }
          23.75% {
            transform:rotate(375.384deg)
          }
          24.167% {
            transform:rotate(381.22deg)
          }
          24.583% {
            transform:rotate(387.027deg)
          }
          25% {
            transform:rotate(392.805deg)
          }
          25.417% {
            transform:rotate(398.555deg)
          }
          25.833% {
            transform:rotate(404.276deg)
          }
          26.25% {
            transform:rotate(409.968deg)
          }
          26.667% {
            transform:rotate(415.633deg)
          }
          27.083% {
            transform:rotate(421.27deg)
          }
          27.5% {
            transform:rotate(426.879deg)
          }
          27.917% {
            transform:rotate(432.461deg)
          }
          28.333% {
            transform:rotate(438.016deg)
          }
          28.75% {
            transform:rotate(443.544deg)
          }
          29.167% {
            transform:rotate(449.045deg)
          }
          29.583% {
            transform:rotate(454.521deg)
          }
          30% {
            transform:rotate(459.971deg)
          }
          30.417% {
            transform:rotate(465.395deg)
          }
          30.833% {
            transform:rotate(470.794deg)
          }
          31.25% {
            transform:rotate(476.169deg)
          }
          31.667% {
            transform:rotate(481.52deg)
          }
          32.083% {
            transform:rotate(486.847deg)
          }
          32.5% {
            transform:rotate(492.151deg)
          }
          32.917% {
            transform:rotate(497.432deg)
          }
          33.333% {
            transform:rotate(502.691deg)
          }
          33.75% {
            transform:rotate(507.929deg)
          }
          34.167% {
            transform:rotate(513.145deg)
          }
          34.583% {
            transform:rotate(518.34deg)
          }
          35% {
            transform:rotate(523.515deg)
          }
          35.417% {
            transform:rotate(528.671deg)
          }
          35.833% {
            transform:rotate(533.807deg)
          }
          36.25% {
            transform:rotate(538.926deg)
          }
          36.667% {
            transform:rotate(544.026deg)
          }
          37.083% {
            transform:rotate(549.11deg)
          }
          37.5% {
            transform:rotate(554.176deg)
          }
          37.917% {
            transform:rotate(559.227deg)
          }
          38.333% {
            transform:rotate(564.263deg)
          }
          38.75% {
            transform:rotate(569.284deg)
          }
          39.167% {
            transform:rotate(574.291deg)
          }
          39.583% {
            transform:rotate(579.285deg)
          }
          40% {
            transform:rotate(584.266deg)
          }
          40.417% {
            transform:rotate(589.236deg)
          }
          40.833% {
            transform:rotate(594.194deg)
          }
          41.25% {
            transform:rotate(599.142deg)
          }
          41.667% {
            transform:rotate(604.081deg)
          }
          42.083% {
            transform:rotate(609.01deg)
          }
          42.5% {
            transform:rotate(613.931deg)
          }
          42.917% {
            transform:rotate(618.844deg)
          }
          43.333% {
            transform:rotate(623.751deg)
          }
          43.75% {
            transform:rotate(628.652deg)
          }
          44.167% {
            transform:rotate(633.547deg)
          }
          44.583% {
            transform:rotate(638.438deg)
          }
          45% {
            transform:rotate(643.326deg)
          }
          45.417% {
            transform:rotate(648.21deg)
          }
          45.833% {
            transform:rotate(653.092deg)
          }
          46.25% {
            transform:rotate(657.973deg)
          }
          46.667% {
            transform:rotate(662.853deg)
          }
          47.083% {
            transform:rotate(667.733deg)
          }
          47.5% {
            transform:rotate(672.613deg)
          }
          47.917% {
            transform:rotate(677.496deg)
          }
          48.333% {
            transform:rotate(682.381deg)
          }
          48.75% {
            transform:rotate(687.269deg)
          }
          49.167% {
            transform:rotate(692.161deg)
          }
          49.583% {
            transform:rotate(697.057deg)
          }
          50% {
            transform:rotate(701.959deg)
          }
          50.417% {
            transform:rotate(706.868deg)
          }
          50.833% {
            transform:rotate(711.783deg)
          }
          51.25% {
            transform:rotate(716.706deg)
          }
          51.667% {
            transform:rotate(721.637deg)
          }
          52.083% {
            transform:rotate(726.577deg)
          }
          52.5% {
            transform:rotate(731.528deg)
          }
          52.917% {
            transform:rotate(736.488deg)
          }
          53.333% {
            transform:rotate(741.461deg)
          }
          53.75% {
            transform:rotate(746.445deg)
          }
          54.167% {
            transform:rotate(751.442deg)
          }
          54.583% {
            transform:rotate(756.452deg)
          }
          55.0% {
            transform:rotate(761.476deg)
          }
          55.417% {
            transform:rotate(766.515deg)
          }
          55.833% {
            transform:rotate(771.57deg)
          }
          56.25% {
            transform:rotate(776.64deg)
          }
          56.667% {
            transform:rotate(781.727deg)
          }
          57.083% {
            transform:rotate(786.832deg)
          }
          57.5% {
            transform:rotate(791.954deg)
          }
          57.917% {
            transform:rotate(797.095deg)
          }
          58.333% {
            transform:rotate(802.255deg)
          }
          58.75% {
            transform:rotate(807.435deg)
          }
          59.167% {
            transform:rotate(812.635deg)
          }
          59.583% {
            transform:rotate(817.856deg)
          }
          60% {
            transform:rotate(823.098deg)
          }
          60.417% {
            transform:rotate(828.362deg)
          }
          60.833% {
            transform:rotate(833.648deg)
          }
          61.25% {
            transform:rotate(838.957deg)
          }
          61.667% {
            transform:rotate(844.29deg)
          }
          62.083% {
            transform:rotate(849.646deg)
          }
          62.5% {
            transform:rotate(855.026deg)
          }
          62.917% {
            transform:rotate(860.431deg)
          }
          63.333% {
            transform:rotate(865.862deg)
          }
          63.75% {
            transform:rotate(871.317deg)
          }
          64.167% {
            transform:rotate(876.799deg)
          }
          64.583% {
            transform:rotate(882.306deg)
          }
          65% {
            transform:rotate(887.84deg)
          }
          65.417% {
            transform:rotate(893.401deg)
          }
          65.833% {
            transform:rotate(898.989deg)
          }
          66.25% {
            transform:rotate(904.605deg)
          }
          66.667% {
            transform:rotate(910.248deg)
          }
          67.083% {
            transform:rotate(915.919deg)
          }
          67.5% {
            transform:rotate(921.618deg)
          }
          67.917% {
            transform:rotate(927.345deg)
          }
          68.333% {
            transform:rotate(933.101deg)
          }
          68.75% {
            transform:rotate(938.886deg)
          }
          69.167% {
            transform:rotate(944.7deg)
          }
          69.583% {
            transform:rotate(950.542deg)
          }
          70% {
            transform:rotate(956.414deg)
          }
          70.417% {
            transform:rotate(962.315deg)
          }
          70.833% {
            transform:rotate(968.245deg)
          }
          71.25% {
            transform:rotate(974.204deg)
          }
          71.667% {
            transform:rotate(980.193deg)
          }
          72.083% {
            transform:rotate(986.211deg)
          }
          72.5% {
            transform:rotate(992.258deg)
          }
          72.917% {
            transform:rotate(998.335deg)
          }
          73.333% {
            transform:rotate(1004.441deg)
          }
          73.75% {
            transform:rotate(1010.576deg)
          }
          74.167% {
            transform:rotate(1016.74deg)
          }
          74.583% {
            transform:rotate(1022.933deg)
          }
          75% {
            transform:rotate(1029.154deg)
          }
          75.417% {
            transform:rotate(1035.405deg)
          }
          75.833% {
            transform:rotate(1041.684deg)
          }
          76.25% {
            transform:rotate(1047.991deg)
          }
          76.667% {
            transform:rotate(1054.326deg)
          }
          77.083% {
            transform:rotate(1060.69deg)
          }
          77.5% {
            transform:rotate(1067.08deg)
          }
          77.917% {
            transform:rotate(1073.499deg)
          }
          78.333% {
            transform:rotate(1079.944deg)
          }
          78.75% {
            transform:rotate(1086.416deg)
          }
          79.167% {
            transform:rotate(1092.914deg)
          }
          79.583% {
            transform:rotate(1099.439deg)
          }
          80% {
            transform:rotate(1105.989deg)
          }
          80.417% {
            transform:rotate(1112.564deg)
          }
          80.833% {
            transform:rotate(1119.165deg)
          }
          81.25% {
            transform:rotate(1125.79deg)
          }
          81.667% {
            transform:rotate(1132.439deg)
          }
          82.083% {
            transform:rotate(1139.112deg)
          }
          82.5% {
            transform:rotate(1145.808deg)
          }
          82.917% {
            transform:rotate(1152.527deg)
          }
          83.333% {
            transform:rotate(1159.268deg)
          }
          83.75% {
            transform:rotate(1166.031deg)
          }
          84.167% {
            transform:rotate(1172.815deg)
          }
          84.583% {
            transform:rotate(1179.619deg)
          }
          85% {
            transform:rotate(1186.444deg)
          }
          85.417% {
            transform:rotate(1193.289deg)
          }
          85.833% {
            transform:rotate(1200.152deg)
          }
          86.25% {
            transform:rotate(1207.034deg)
          }
          86.667% {
            transform:rotate(1213.933deg)
          }
          87.083% {
            transform:rotate(1220.85deg)
          }
          87.5% {
            transform:rotate(1227.783deg)
          }
          87.917% {
            transform:rotate(1234.732deg)
          }
          88.333% {
            transform:rotate(1241.696deg)
          }
          88.75% {
            transform:rotate(1248.675deg)
          }
          89.167% {
            transform:rotate(1255.668deg)
          }
          89.583% {
            transform:rotate(1262.674deg)
          }
          90% {
            transform:rotate(1269.693deg)
          }
          90.417% {
            transform:rotate(1276.723deg)
          }
          90.833% {
            transform:rotate(1283.765deg)
          }
          91.25% {
            transform:rotate(1290.817deg)
          }
          91.667% {
            transform:rotate(1297.879deg)
          }
          92.083% {
            transform:rotate(1304.95deg)
          }
          92.5% {
            transform:rotate(1312.029deg)
          }
          92.917% {
            transform:rotate(1319.115deg)
          }
          93.333% {
            transform:rotate(1326.208deg)
          }
          93.75% {
            transform:rotate(1333.307deg)
          }
          94.167% {
            transform:rotate(1340.412deg)
          }
          94.583% {
            transform:rotate(1347.521deg)
          }
          95% {
            transform:rotate(1354.634deg)
          }
          95.417% {
            transform:rotate(1361.749deg)
          }
          95.833% {
            transform:rotate(1368.867deg)
          }
          96.25% {
            transform:rotate(1375.987deg)
          }
          96.667% {
            transform:rotate(1383.107deg)
          }
          97.083% {
            transform:rotate(1390.227deg)
          }
          97.5% {
            transform:rotate(1397.346deg)
          }
          97.917% {
            transform:rotate(1404.464deg)
          }
          98.333% {
            transform:rotate(1411.579deg)
          }
          98.75% {
            transform:rotate(1418.691deg)
          }
          99.167% {
            transform:rotate(1425.799deg)
          }
          99.583% {
            transform:rotate(1432.902deg)
          }
          100% {
            transform:rotate(1440deg)
          }
        }
        @keyframes pitch-chord {
          0% {
            transform:scaleX(0.669)
          }
          0.417% {
            transform:scaleX(0.667)
          }
          0.833% {
            transform:scaleX(0.666)
          }
          1.25% {
            transform:scaleX(0.664)
          }
          1.667% {
            transform:scaleX(0.663)
          }
          2.083% {
            transform:scaleX(0.662)
          }
          2.5% {
            transform:scaleX(0.661)
          }
          2.917% {
            transform:scaleX(0.66)
          }
          3.333% {
            transform:scaleX(0.659)
          }
          3.75% {
            transform:scaleX(0.659)
          }
          4.167% {
            transform:scaleX(0.658)
          }
          4.583% {
            transform:scaleX(0.658)
          }
          5% {
            transform:scaleX(0.657)
          }
          5.417% {
            transform:scaleX(0.657)
          }
          5.833% {
            transform:scaleX(0.657)
          }
          6.25% {
            transform:scaleX(0.657)
          }
          6.667% {
            transform:scaleX(0.658)
          }
          7.083% {
            transform:scaleX(0.658)
          }
          7.5% {
            transform:scaleX(0.659)
          }
          7.917% {
            transform:scaleX(0.659)
          }
          8.333% {
            transform:scaleX(0.66)
          }
          8.75% {
            transform:scaleX(0.661)
          }
          9.167% {
            transform:scaleX(0.662)
          }
          9.583% {
            transform:scaleX(0.663)
          }
          10% {
            transform:scaleX(0.664)
          }
          10.417% {
            transform:scaleX(0.665)
          }
          10.833% {
            transform:scaleX(0.667)
          }
          11.25% {
            transform:scaleX(0.668)
          }
          11.667% {
            transform:scaleX(0.67)
          }
          12.083% {
            transform:scaleX(0.672)
          }
          12.5% {
            transform:scaleX(0.674)
          }
          12.917% {
            transform:scaleX(0.676)
          }
          13.333% {
            transform:scaleX(0.678)
          }
          13.75% {
            transform:scaleX(0.68)
          }
          14.167% {
            transform:scaleX(0.683)
          }
          14.583% {
            transform:scaleX(0.685)
          }
          15% {
            transform:scaleX(0.687)
          }
          15.417% {
            transform:scaleX(0.69)
          }
          15.833% {
            transform:scaleX(0.693)
          }
          16.25% {
            transform:scaleX(0.696)
          }
          16.667% {
            transform:scaleX(0.698)
          }
          17.083% {
            transform:scaleX(0.701)
          }
          17.5% {
            transform:scaleX(0.704)
          }
          17.917% {
            transform:scaleX(0.707)
          }
          18.333% {
            transform:scaleX(0.711)
          }
          18.75% {
            transform:scaleX(0.714)
          }
          19.167% {
            transform:scaleX(0.717)
          }
          19.583% {
            transform:scaleX(0.721)
          }
          20% {
            transform:scaleX(0.724)
          }
          20.417% {
            transform:scaleX(0.727)
          }
          20.833% {
            transform:scaleX(0.731)
          }
          21.25% {
            transform:scaleX(0.734)
          }
          21.667% {
            transform:scaleX(0.738)
          }
          22.083% {
            transform:scaleX(0.742)
          }
          22.5% {
            transform:scaleX(0.745)
          }
          22.917% {
            transform:scaleX(0.749)
          }
          23.333% {
            transform:scaleX(0.753)
          }
          23.75% {
            transform:scaleX(0.757)
          }
          24.167% {
            transform:scaleX(0.76)
          }
          24.583% {
            transform:scaleX(0.764)
          }
          25% {
            transform:scaleX(0.768)
          }
          25.417% {
            transform:scaleX(0.772)
          }
          25.833% {
            transform:scaleX(0.776)
          }
          26.25% {
            transform:scaleX(0.779)
          }
          26.667% {
            transform:scaleX(0.783)
          }
          27.083% {
            transform:scaleX(0.787)
          }
          27.5% {
            transform:scaleX(0.791)
          }
          27.917% {
            transform:scaleX(0.795)
          }
          28.333% {
            transform:scaleX(0.799)
          }
          28.75% {
            transform:scaleX(0.802)
          }
          29.167% {
            transform:scaleX(0.806)
          }
          29.583% {
            transform:scaleX(0.81)
          }
          30% {
            transform:scaleX(0.813)
          }
          30.417% {
            transform:scaleX(0.817)
          }
          30.833% {
            transform:scaleX(0.821)
          }
          31.25% {
            transform:scaleX(0.824)
          }
          31.667% {
            transform:scaleX(0.828)
          }
          32.083% {
            transform:scaleX(0.832)
          }
          32.5% {
            transform:scaleX(0.835)
          }
          32.917% {
            transform:scaleX(0.838)
          }
          33.333% {
            transform:scaleX(0.842)
          }
          33.75% {
            transform:scaleX(0.845)
          }
          34.167% {
            transform:scaleX(0.849)
          }
          34.583% {
            transform:scaleX(0.852)
          }
          35% {
            transform:scaleX(0.855)
          }
          35.417% {
            transform:scaleX(0.858)
          }
          35.833% {
            transform:scaleX(0.861)
          }
          36.25% {
            transform:scaleX(0.864)
          }
          36.667% {
            transform:scaleX(0.867)
          }
          37.083% {
            transform:scaleX(0.87)
          }
          37.5% {
            transform:scaleX(0.873)
          }
          37.917% {
            transform:scaleX(0.876)
          }
          38.333% {
            transform:scaleX(0.878)
          }
          38.75% {
            transform:scaleX(0.881)
          }
          39.167% {
            transform:scaleX(0.884)
          }
          39.583% {
            transform:scaleX(0.886)
          }
          40% {
            transform:scaleX(0.889)
          }
          40.417% {
            transform:scaleX(0.891)
          }
          40.833% {
            transform:scaleX(0.893)
          }
          41.25% {
            transform:scaleX(0.896)
          }
          41.667% {
            transform:scaleX(0.898)
          }
          42.083% {
            transform:scaleX(0.9)
          }
          42.5% {
            transform:scaleX(0.902)
          }
          42.917% {
            transform:scaleX(0.904)
          }
          43.333% {
            transform:scaleX(0.906)
          }
          43.75% {
            transform:scaleX(0.908)
          }
          44.167% {
            transform:scaleX(0.91)
          }
          44.583% {
            transform:scaleX(0.911)
          }
          45% {
            transform:scaleX(0.913)
          }
          45.417% {
            transform:scaleX(0.914)
          }
          45.833% {
            transform:scaleX(0.916)
          }
          46.25% {
            transform:scaleX(0.917)
          }
          46.667% {
            transform:scaleX(0.919)
          }
          47.083% {
            transform:scaleX(0.92)
          }
          47.5% {
            transform:scaleX(0.921)
          }
          47.917% {
            transform:scaleX(0.923)
          }
          48.333% {
            transform:scaleX(0.924)
          }
          48.75% {
            transform:scaleX(0.925)
          }
          49.167% {
            transform:scaleX(0.926)
          }
          49.583% {
            transform:scaleX(0.927)
          }
          50% {
            transform:scaleX(0.927)
          }
          50.417% {
            transform:scaleX(0.928)
          }
          50.833% {
            transform:scaleX(0.929)
          }
          51.25% {
            transform:scaleX(0.93)
          }
          51.667% {
            transform:scaleX(0.93)
          }
          52.083% {
            transform:scaleX(0.931)
          }
          52.5% {
            transform:scaleX(0.931)
          }
          52.917% {
            transform:scaleX(0.932)
          }
          53.333% {
            transform:scaleX(0.932)
          }
          53.75% {
            transform:scaleX(0.932)
          }
          54.167% {
            transform:scaleX(0.933)
          }
          54.583% {
            transform:scaleX(0.933)
          }
          55.0% {
            transform:scaleX(0.933)
          }
          55.417% {
            transform:scaleX(0.933)
          }
          55.833% {
            transform:scaleX(0.933)
          }
          56.25% {
            transform:scaleX(0.933)
          }
          56.667% {
            transform:scaleX(0.933)
          }
          57.083% {
            transform:scaleX(0.933)
          }
          57.5% {
            transform:scaleX(0.932)
          }
          57.917% {
            transform:scaleX(0.932)
          }
          58.333% {
            transform:scaleX(0.932)
          }
          58.75% {
            transform:scaleX(0.931)
          }
          59.167% {
            transform:scaleX(0.931)
          }
          59.583% {
            transform:scaleX(0.93)
          }
          60% {
            transform:scaleX(0.93)
          }
          60.417% {
            transform:scaleX(0.929)
          }
          60.833% {
            transform:scaleX(0.928)
          }
          61.25% {
            transform:scaleX(0.928)
          }
          61.667% {
            transform:scaleX(0.927)
          }
          62.083% {
            transform:scaleX(0.926)
          }
          62.5% {
            transform:scaleX(0.925)
          }
          62.917% {
            transform:scaleX(0.924)
          }
          63.333% {
            transform:scaleX(0.923)
          }
          63.75% {
            transform:scaleX(0.921)
          }
          64.167% {
            transform:scaleX(0.92)
          }
          64.583% {
            transform:scaleX(0.919)
          }
          65% {
            transform:scaleX(0.918)
          }
          65.417% {
            transform:scaleX(0.916)
          }
          65.833% {
            transform:scaleX(0.915)
          }
          66.25% {
            transform:scaleX(0.913)
          }
          66.667% {
            transform:scaleX(0.911)
          }
          67.083% {
            transform:scaleX(0.91)
          }
          67.5% {
            transform:scaleX(0.908)
          }
          67.917% {
            transform:scaleX(0.906)
          }
          68.333% {
            transform:scaleX(0.904)
          }
          68.75% {
            transform:scaleX(0.902)
          }
          69.167% {
            transform:scaleX(0.9)
          }
          69.583% {
            transform:scaleX(0.898)
          }
          70% {
            transform:scaleX(0.896)
          }
          70.417% {
            transform:scaleX(0.894)
          }
          70.833% {
            transform:scaleX(0.891)
          }
          71.25% {
            transform:scaleX(0.889)
          }
          71.667% {
            transform:scaleX(0.886)
          }
          72.083% {
            transform:scaleX(0.884)
          }
          72.5% {
            transform:scaleX(0.881)
          }
          72.917% {
            transform:scaleX(0.879)
          }
          73.333% {
            transform:scaleX(0.876)
          }
          73.75% {
            transform:scaleX(0.873)
          }
          74.167% {
            transform:scaleX(0.87)
          }
          74.583% {
            transform:scaleX(0.867)
          }
          75% {
            transform:scaleX(0.865)
          }
          75.417% {
            transform:scaleX(0.861)
          }
          75.833% {
            transform:scaleX(0.858)
          }
          76.25% {
            transform:scaleX(0.855)
          }
          76.667% {
            transform:scaleX(0.852)
          }
          77.083% {
            transform:scaleX(0.849)
          }
          77.5% {
            transform:scaleX(0.846)
          }
          77.917% {
            transform:scaleX(0.842)
          }
          78.333% {
            transform:scaleX(0.839)
          }
          78.75% {
            transform:scaleX(0.835)
          }
          79.167% {
            transform:scaleX(0.832)
          }
          79.583% {
            transform:scaleX(0.828)
          }
          80% {
            transform:scaleX(0.825)
          }
          80.417% {
            transform:scaleX(0.821)
          }
          80.833% {
            transform:scaleX(0.817)
          }
          81.25% {
            transform:scaleX(0.814)
          }
          81.667% {
            transform:scaleX(0.81)
          }
          82.083% {
            transform:scaleX(0.806)
          }
          82.5% {
            transform:scaleX(0.803)
          }
          82.917% {
            transform:scaleX(0.799)
          }
          83.333% {
            transform:scaleX(0.795)
          }
          83.75% {
            transform:scaleX(0.791)
          }
          84.167% {
            transform:scaleX(0.787)
          }
          84.583% {
            transform:scaleX(0.784)
          }
          85% {
            transform:scaleX(0.78)
          }
          85.417% {
            transform:scaleX(0.776)
          }
          85.833% {
            transform:scaleX(0.772)
          }
          86.25% {
            transform:scaleX(0.768)
          }
          86.667% {
            transform:scaleX(0.764)
          }
          87.083% {
            transform:scaleX(0.761)
          }
          87.5% {
            transform:scaleX(0.757)
          }
          87.917% {
            transform:scaleX(0.753)
          }
          88.333% {
            transform:scaleX(0.749)
          }
          88.75% {
            transform:scaleX(0.746)
          }
          89.167% {
            transform:scaleX(0.742)
          }
          89.583% {
            transform:scaleX(0.738)
          }
          90% {
            transform:scaleX(0.735)
          }
          90.417% {
            transform:scaleX(0.731)
          }
          90.833% {
            transform:scaleX(0.728)
          }
          91.25% {
            transform:scaleX(0.724)
          }
          91.667% {
            transform:scaleX(0.721)
          }
          92.083% {
            transform:scaleX(0.717)
          }
          92.5% {
            transform:scaleX(0.714)
          }
          92.917% {
            transform:scaleX(0.711)
          }
          93.333% {
            transform:scaleX(0.708)
          }
          93.75% {
            transform:scaleX(0.705)
          }
          94.167% {
            transform:scaleX(0.702)
          }
          94.583% {
            transform:scaleX(0.699)
          }
          95% {
            transform:scaleX(0.696)
          }
          95.417% {
            transform:scaleX(0.693)
          }
          95.833% {
            transform:scaleX(0.69)
          }
          96.25% {
            transform:scaleX(0.688)
          }
          96.667% {
            transform:scaleX(0.685)
          }
          97.083% {
            transform:scaleX(0.683)
          }
          97.5% {
            transform:scaleX(0.68)
          }
          97.917% {
            transform:scaleX(0.678)
          }
          98.333% {
            transform:scaleX(0.676)
          }
          98.75% {
            transform:scaleX(0.674)
          }
          99.167% {
            transform:scaleX(0.672)
          }
          99.583% {
            transform:scaleX(0.67)
          }
          100% {
            transform:scaleX(0.669)
          }
        }
        @keyframes pitch-section {
          0% {
            transform:rotate(41.959deg)
          }
          0.417% {
            transform:rotate(41.837deg)
          }
          0.833% {
            transform:rotate(41.724deg)
          }
          1.25% {
            transform:rotate(41.62deg)
          }
          1.667% {
            transform:rotate(41.526deg)
          }
          2.083% {
            transform:rotate(41.441deg)
          }
          2.5% {
            transform:rotate(41.364deg)
          }
          2.917% {
            transform:rotate(41.298deg)
          }
          3.333% {
            transform:rotate(41.24deg)
          }
          3.75% {
            transform:rotate(41.192deg)
          }
          4.167% {
            transform:rotate(41.154deg)
          }
          4.583% {
            transform:rotate(41.125deg)
          }
          5% {
            transform:rotate(41.106deg)
          }
          5.417% {
            transform:rotate(41.096deg)
          }
          5.833% {
            transform:rotate(41.095deg)
          }
          6.25% {
            transform:rotate(41.104deg)
          }
          6.667% {
            transform:rotate(41.123deg)
          }
          7.083% {
            transform:rotate(41.151deg)
          }
          7.5% {
            transform:rotate(41.189deg)
          }
          7.917% {
            transform:rotate(41.236deg)
          }
          8.333% {
            transform:rotate(41.293deg)
          }
          8.75% {
            transform:rotate(41.359deg)
          }
          9.167% {
            transform:rotate(41.434deg)
          }
          9.583% {
            transform:rotate(41.519deg)
          }
          10% {
            transform:rotate(41.612deg)
          }
          10.417% {
            transform:rotate(41.715deg)
          }
          10.833% {
            transform:rotate(41.828deg)
          }
          11.25% {
            transform:rotate(41.949deg)
          }
          11.667% {
            transform:rotate(42.079deg)
          }
          12.083% {
            transform:rotate(42.218deg)
          }
          12.5% {
            transform:rotate(42.365deg)
          }
          12.917% {
            transform:rotate(42.522deg)
          }
          13.333% {
            transform:rotate(42.687deg)
          }
          13.75% {
            transform:rotate(42.86deg)
          }
          14.167% {
            transform:rotate(43.042deg)
          }
          14.583% {
            transform:rotate(43.232deg)
          }
          15% {
            transform:rotate(43.43deg)
          }
          15.417% {
            transform:rotate(43.635deg)
          }
          15.833% {
            transform:rotate(43.849deg)
          }
          16.25% {
            transform:rotate(44.07deg)
          }
          16.667% {
            transform:rotate(44.299deg)
          }
          17.083% {
            transform:rotate(44.535deg)
          }
          17.5% {
            transform:rotate(44.779deg)
          }
          17.917% {
            transform:rotate(45.029deg)
          }
          18.333% {
            transform:rotate(45.286deg)
          }
          18.75% {
            transform:rotate(45.55deg)
          }
          19.167% {
            transform:rotate(45.82deg)
          }
          19.583% {
            transform:rotate(46.097deg)
          }
          20% {
            transform:rotate(46.379deg)
          }
          20.417% {
            transform:rotate(46.668deg)
          }
          20.833% {
            transform:rotate(46.962deg)
          }
          21.25% {
            transform:rotate(47.262deg)
          }
          21.667% {
            transform:rotate(47.567deg)
          }
          22.083% {
            transform:rotate(47.877deg)
          }
          22.5% {
            transform:rotate(48.192deg)
          }
          22.917% {
            transform:rotate(48.512deg)
          }
          23.333% {
            transform:rotate(48.836deg)
          }
          23.75% {
            transform:rotate(49.165deg)
          }
          24.167% {
            transform:rotate(49.497deg)
          }
          24.583% {
            transform:rotate(49.833deg)
          }
          25% {
            transform:rotate(50.173deg)
          }
          25.417% {
            transform:rotate(50.516deg)
          }
          25.833% {
            transform:rotate(50.862deg)
          }
          26.25% {
            transform:rotate(51.211deg)
          }
          26.667% {
            transform:rotate(51.563deg)
          }
          27.083% {
            transform:rotate(51.917deg)
          }
          27.5% {
            transform:rotate(52.273deg)
          }
          27.917% {
            transform:rotate(52.63deg)
          }
          28.333% {
            transform:rotate(52.99deg)
          }
          28.75% {
            transform:rotate(53.351deg)
          }
          29.167% {
            transform:rotate(53.713deg)
          }
          29.583% {
            transform:rotate(54.076deg)
          }
          30% {
            transform:rotate(54.439deg)
          }
          30.417% {
            transform:rotate(54.803deg)
          }
          30.833% {
            transform:rotate(55.167deg)
          }
          31.25% {
            transform:rotate(55.531deg)
          }
          31.667% {
            transform:rotate(55.895deg)
          }
          32.083% {
            transform:rotate(56.258deg)
          }
          32.5% {
            transform:rotate(56.62deg)
          }
          32.917% {
            transform:rotate(56.981deg)
          }
          33.333% {
            transform:rotate(57.34deg)
          }
          33.75% {
            transform:rotate(57.698deg)
          }
          34.167% {
            transform:rotate(58.054deg)
          }
          34.583% {
            transform:rotate(58.408deg)
          }
          35% {
            transform:rotate(58.76deg)
          }
          35.417% {
            transform:rotate(59.109deg)
          }
          35.833% {
            transform:rotate(59.456deg)
          }
          36.25% {
            transform:rotate(59.799deg)
          }
          36.667% {
            transform:rotate(60.139deg)
          }
          37.083% {
            transform:rotate(60.475deg)
          }
          37.5% {
            transform:rotate(60.808deg)
          }
          37.917% {
            transform:rotate(61.137deg)
          }
          38.333% {
            transform:rotate(61.461deg)
          }
          38.75% {
            transform:rotate(61.782deg)
          }
          39.167% {
            transform:rotate(62.097deg)
          }
          39.583% {
            transform:rotate(62.408deg)
          }
          40% {
            transform:rotate(62.713deg)
          }
          40.417% {
            transform:rotate(63.013deg)
          }
          40.833% {
            transform:rotate(63.308deg)
          }
          41.25% {
            transform:rotate(63.597deg)
          }
          41.667% {
            transform:rotate(63.88deg)
          }
          42.083% {
            transform:rotate(64.157deg)
          }
          42.5% {
            transform:rotate(64.428deg)
          }
          42.917% {
            transform:rotate(64.693deg)
          }
          43.333% {
            transform:rotate(64.95deg)
          }
          43.75% {
            transform:rotate(65.201deg)
          }
          44.167% {
            transform:rotate(65.445deg)
          }
          44.583% {
            transform:rotate(65.682deg)
          }
          45% {
            transform:rotate(65.911deg)
          }
          45.417% {
            transform:rotate(66.133deg)
          }
          45.833% {
            transform:rotate(66.347deg)
          }
          46.25% {
            transform:rotate(66.554deg)
          }
          46.667% {
            transform:rotate(66.752deg)
          }
          47.083% {
            transform:rotate(66.943deg)
          }
          47.5% {
            transform:rotate(67.125deg)
          }
          47.917% {
            transform:rotate(67.299deg)
          }
          48.333% {
            transform:rotate(67.465deg)
          }
          48.75% {
            transform:rotate(67.622deg)
          }
          49.167% {
            transform:rotate(67.771deg)
          }
          49.583% {
            transform:rotate(67.91deg)
          }
          50% {
            transform:rotate(68.041deg)
          }
          50.417% {
            transform:rotate(68.163deg)
          }
          50.833% {
            transform:rotate(68.276deg)
          }
          51.25% {
            transform:rotate(68.38deg)
          }
          51.667% {
            transform:rotate(68.474deg)
          }
          52.083% {
            transform:rotate(68.559deg)
          }
          52.5% {
            transform:rotate(68.636deg)
          }
          52.917% {
            transform:rotate(68.702deg)
          }
          53.333% {
            transform:rotate(68.76deg)
          }
          53.75% {
            transform:rotate(68.808deg)
          }
          54.167% {
            transform:rotate(68.846deg)
          }
          54.583% {
            transform:rotate(68.875deg)
          }
          55.0% {
            transform:rotate(68.894deg)
          }
          55.417% {
            transform:rotate(68.904deg)
          }
          55.833% {
            transform:rotate(68.905deg)
          }
          56.25% {
            transform:rotate(68.896deg)
          }
          56.667% {
            transform:rotate(68.877deg)
          }
          57.083% {
            transform:rotate(68.849deg)
          }
          57.5% {
            transform:rotate(68.811deg)
          }
          57.917% {
            transform:rotate(68.764deg)
          }
          58.333% {
            transform:rotate(68.707deg)
          }
          58.75% {
            transform:rotate(68.641deg)
          }
          59.167% {
            transform:rotate(68.566deg)
          }
          59.583% {
            transform:rotate(68.481deg)
          }
          60% {
            transform:rotate(68.388deg)
          }
          60.417% {
            transform:rotate(68.285deg)
          }
          60.833% {
            transform:rotate(68.172deg)
          }
          61.25% {
            transform:rotate(68.051deg)
          }
          61.667% {
            transform:rotate(67.921deg)
          }
          62.083% {
            transform:rotate(67.782deg)
          }
          62.5% {
            transform:rotate(67.635deg)
          }
          62.917% {
            transform:rotate(67.478deg)
          }
          63.333% {
            transform:rotate(67.313deg)
          }
          63.75% {
            transform:rotate(67.14deg)
          }
          64.167% {
            transform:rotate(66.958deg)
          }
          64.583% {
            transform:rotate(66.768deg)
          }
          65% {
            transform:rotate(66.57deg)
          }
          65.417% {
            transform:rotate(66.365deg)
          }
          65.833% {
            transform:rotate(66.151deg)
          }
          66.25% {
            transform:rotate(65.93deg)
          }
          66.667% {
            transform:rotate(65.701deg)
          }
          67.083% {
            transform:rotate(65.465deg)
          }
          67.5% {
            transform:rotate(65.221deg)
          }
          67.917% {
            transform:rotate(64.971deg)
          }
          68.333% {
            transform:rotate(64.714deg)
          }
          68.75% {
            transform:rotate(64.45deg)
          }
          69.167% {
            transform:rotate(64.18deg)
          }
          69.583% {
            transform:rotate(63.903deg)
          }
          70% {
            transform:rotate(63.621deg)
          }
          70.417% {
            transform:rotate(63.332deg)
          }
          70.833% {
            transform:rotate(63.038deg)
          }
          71.25% {
            transform:rotate(62.738deg)
          }
          71.667% {
            transform:rotate(62.433deg)
          }
          72.083% {
            transform:rotate(62.123deg)
          }
          72.5% {
            transform:rotate(61.808deg)
          }
          72.917% {
            transform:rotate(61.488deg)
          }
          73.333% {
            transform:rotate(61.164deg)
          }
          73.75% {
            transform:rotate(60.835deg)
          }
          74.167% {
            transform:rotate(60.503deg)
          }
          74.583% {
            transform:rotate(60.167deg)
          }
          75% {
            transform:rotate(59.827deg)
          }
          75.417% {
            transform:rotate(59.484deg)
          }
          75.833% {
            transform:rotate(59.138deg)
          }
          76.25% {
            transform:rotate(58.789deg)
          }
          76.667% {
            transform:rotate(58.437deg)
          }
          77.083% {
            transform:rotate(58.083deg)
          }
          77.5% {
            transform:rotate(57.727deg)
          }
          77.917% {
            transform:rotate(57.37deg)
          }
          78.333% {
            transform:rotate(57.01deg)
          }
          78.75% {
            transform:rotate(56.649deg)
          }
          79.167% {
            transform:rotate(56.287deg)
          }
          79.583% {
            transform:rotate(55.924deg)
          }
          80% {
            transform:rotate(55.561deg)
          }
          80.417% {
            transform:rotate(55.197deg)
          }
          80.833% {
            transform:rotate(54.833deg)
          }
          81.25% {
            transform:rotate(54.469deg)
          }
          81.667% {
            transform:rotate(54.105deg)
          }
          82.083% {
            transform:rotate(53.742deg)
          }
          82.5% {
            transform:rotate(53.38deg)
          }
          82.917% {
            transform:rotate(53.019deg)
          }
          83.333% {
            transform:rotate(52.66deg)
          }
          83.75% {
            transform:rotate(52.302deg)
          }
          84.167% {
            transform:rotate(51.946deg)
          }
          84.583% {
            transform:rotate(51.592deg)
          }
          85% {
            transform:rotate(51.24deg)
          }
          85.417% {
            transform:rotate(50.891deg)
          }
          85.833% {
            transform:rotate(50.544deg)
          }
          86.25% {
            transform:rotate(50.201deg)
          }
          86.667% {
            transform:rotate(49.861deg)
          }
          87.083% {
            transform:rotate(49.525deg)
          }
          87.5% {
            transform:rotate(49.192deg)
          }
          87.917% {
            transform:rotate(48.863deg)
          }
          88.333% {
            transform:rotate(48.539deg)
          }
          88.75% {
            transform:rotate(48.218deg)
          }
          89.167% {
            transform:rotate(47.903deg)
          }
          89.583% {
            transform:rotate(47.592deg)
          }
          90% {
            transform:rotate(47.287deg)
          }
          90.417% {
            transform:rotate(46.987deg)
          }
          90.833% {
            transform:rotate(46.692deg)
          }
          91.25% {
            transform:rotate(46.403deg)
          }
          91.667% {
            transform:rotate(46.12deg)
          }
          92.083% {
            transform:rotate(45.843deg)
          }
          92.5% {
            transform:rotate(45.572deg)
          }
          92.917% {
            transform:rotate(45.307deg)
          }
          93.333% {
            transform:rotate(45.05deg)
          }
          93.75% {
            transform:rotate(44.799deg)
          }
          94.167% {
            transform:rotate(44.555deg)
          }
          94.583% {
            transform:rotate(44.318deg)
          }
          95% {
            transform:rotate(44.089deg)
          }
          95.417% {
            transform:rotate(43.867deg)
          }
          95.833% {
            transform:rotate(43.653deg)
          }
          96.25% {
            transform:rotate(43.446deg)
          }
          96.667% {
            transform:rotate(43.248deg)
          }
          97.083% {
            transform:rotate(43.057deg)
          }
          97.5% {
            transform:rotate(42.875deg)
          }
          97.917% {
            transform:rotate(42.701deg)
          }
          98.333% {
            transform:rotate(42.535deg)
          }
          98.75% {
            transform:rotate(42.378deg)
          }
          99.167% {
            transform:rotate(42.229deg)
          }
          99.583% {
            transform:rotate(42.09deg)
          }
          100% {
            transform:rotate(41.959deg)
          }
        }
        @keyframes pitch-wind {
          0% {
            d:path("M98 94H113L110 92M113 94L110 96M98 118H113L110 116M113 118L110 120")
          }
          0.417% {
            d:path("M98 94H112.999L109.999 92M112.999 94L109.999 96M98 118H112.999L109.999 116M112.999 118L109.999 120")
          }
          0.833% {
            d:path("M98 94H112.996L109.996 92M112.996 94L109.996 96M98 118H112.996L109.996 116M112.996 118L109.996 120")
          }
          1.25% {
            d:path("M98 94H112.991L109.991 92M112.991 94L109.991 96M98 118H112.991L109.991 116M112.991 118L109.991 120")
          }
          1.667% {
            d:path("M98 94H112.984L109.984 92M112.984 94L109.984 96M98 118H112.984L109.984 116M112.984 118L109.984 120")
          }
          2.083% {
            d:path("M98 94H112.974L109.974 92M112.974 94L109.974 96M98 118H112.974L109.974 116M112.974 118L109.974 120")
          }
          2.5% {
            d:path("M98 94H112.963L109.963 92M112.963 94L109.963 96M98 118H112.963L109.963 116M112.963 118L109.963 120")
          }
          2.917% {
            d:path("M98 94H112.95L109.95 92M112.95 94L109.95 96M98 118H112.95L109.95 116M112.95 118L109.95 120")
          }
          3.333% {
            d:path("M98 94H112.934L109.934 92M112.934 94L109.934 96M98 118H112.934L109.934 116M112.934 118L109.934 120")
          }
          3.75% {
            d:path("M98 94H112.917L109.917 92M112.917 94L109.917 96M98 118H112.917L109.917 116M112.917 118L109.917 120")
          }
          4.167% {
            d:path("M98 94H112.898L109.898 92M112.898 94L109.898 96M98 118H112.898L109.898 116M112.898 118L109.898 120")
          }
          4.583% {
            d:path("M98 94H112.876L109.876 92M112.876 94L109.876 96M98 118H112.876L109.876 116M112.876 118L109.876 120")
          }
          5% {
            d:path("M98 94H112.853L109.853 92M112.853 94L109.853 96M98 118H112.853L109.853 116M112.853 118L109.853 120")
          }
          5.417% {
            d:path("M98 94H112.828L109.828 92M112.828 94L109.828 96M98 118H112.828L109.828 116M112.828 118L109.828 120")
          }
          5.833% {
            d:path("M98 94H112.801L109.801 92M112.801 94L109.801 96M98 118H112.801L109.801 116M112.801 118L109.801 120")
          }
          6.25% {
            d:path("M98 94H112.772L109.772 92M112.772 94L109.772 96M98 118H112.772L109.772 116M112.772 118L109.772 120")
          }
          6.667% {
            d:path("M98 94H112.741L109.741 92M112.741 94L109.741 96M98 118H112.741L109.741 116M112.741 118L109.741 120")
          }
          7.083% {
            d:path("M98 94H112.708L109.708 92M112.708 94L109.708 96M98 118H112.708L109.708 116M112.708 118L109.708 120")
          }
          7.5% {
            d:path("M98 94H112.673L109.673 92M112.673 94L109.673 96M98 118H112.673L109.673 116M112.673 118L109.673 120")
          }
          7.917% {
            d:path("M98 94H112.636L109.636 92M112.636 94L109.636 96M98 118H112.636L109.636 116M112.636 118L109.636 120")
          }
          8.333% {
            d:path("M98 94H112.598L109.598 92M112.598 94L109.598 96M98 118H112.598L109.598 116M112.598 118L109.598 120")
          }
          8.75% {
            d:path("M98 94H112.558L109.558 92M112.558 94L109.558 96M98 118H112.558L109.558 116M112.558 118L109.558 120")
          }
          9.167% {
            d:path("M98 94H112.516L109.516 92M112.516 94L109.516 96M98 118H112.516L109.516 116M112.516 118L109.516 120")
          }
          9.583% {
            d:path("M98 94H112.472L109.472 92M112.472 94L109.472 96M98 118H112.472L109.472 116M112.472 118L109.472 120")
          }
          10% {
            d:path("M98 94H112.427L109.427 92M112.427 94L109.427 96M98 118H112.427L109.427 116M112.427 118L109.427 120")
          }
          10.417% {
            d:path("M98 94H112.38L109.38 92M112.38 94L109.38 96M98 118H112.38L109.38 116M112.38 118L109.38 120")
          }
          10.833% {
            d:path("M98 94H112.331L109.331 92M112.331 94L109.331 96M98 118H112.331L109.331 116M112.331 118L109.331 120")
          }
          11.25% {
            d:path("M98 94H112.281L109.281 92M112.281 94L109.281 96M98 118H112.281L109.281 116M112.281 118L109.281 120")
          }
          11.667% {
            d:path("M98 94H112.229L109.229 92M112.229 94L109.229 96M98 118H112.229L109.229 116M112.229 118L109.229 120")
          }
          12.083% {
            d:path("M98 94H112.176L109.176 92M112.176 94L109.176 96M98 118H112.176L109.176 116M112.176 118L109.176 120")
          }
          12.5% {
            d:path("M98 94H112.121L109.121 92M112.121 94L109.121 96M98 118H112.121L109.121 116M112.121 118L109.121 120")
          }
          12.917% {
            d:path("M98 94H112.065L109.065 92M112.065 94L109.065 96M98 118H112.065L109.065 116M112.065 118L109.065 120")
          }
          13.333% {
            d:path("M98 94H112.007L109.007 92M112.007 94L109.007 96M98 118H112.007L109.007 116M112.007 118L109.007 120")
          }
          13.75% {
            d:path("M98 94H111.948L108.948 92M111.948 94L108.948 96M98 118H111.948L108.948 116M111.948 118L108.948 120")
          }
          14.167% {
            d:path("M98 94H111.888L108.888 92M111.888 94L108.888 96M98 118H111.888L108.888 116M111.888 118L108.888 120")
          }
          14.583% {
            d:path("M98 94H111.826L108.826 92M111.826 94L108.826 96M98 118H111.826L108.826 116M111.826 118L108.826 120")
          }
          15% {
            d:path("M98 94H111.763L108.763 92M111.763 94L108.763 96M98 118H111.763L108.763 116M111.763 118L108.763 120")
          }
          15.417% {
            d:path("M98 94H111.699L108.699 92M111.699 94L108.699 96M98 118H111.699L108.699 116M111.699 118L108.699 120")
          }
          15.833% {
            d:path("M98 94H111.634L108.634 92M111.634 94L108.634 96M98 118H111.634L108.634 116M111.634 118L108.634 120")
          }
          16.25% {
            d:path("M98 94H111.567L108.567 92M111.567 94L108.567 96M98 118H111.567L108.567 116M111.567 118L108.567 120")
          }
          16.667% {
            d:path("M98 94H111.5L108.5 92M111.5 94L108.5 96M98 118H111.5L108.5 116M111.5 118L108.5 120")
          }
          17.083% {
            d:path("M98 94H111.431L108.431 92M111.431 94L108.431 96M98 118H111.431L108.431 116M111.431 118L108.431 120")
          }
          17.5% {
            d:path("M98 94H111.362L108.362 92M111.362 94L108.362 96M98 118H111.362L108.362 116M111.362 118L108.362 120")
          }
          17.917% {
            d:path("M98 94H111.292L108.292 92M111.292 94L108.292 96M98 118H111.292L108.292 116M111.292 118L108.292 120")
          }
          18.333% {
            d:path("M98 94H111.22L108.22 92M111.22 94L108.22 96M98 118H111.22L108.22 116M111.22 118L108.22 120")
          }
          18.75% {
            d:path("M98 94H111.148L108.148 92M111.148 94L108.148 96M98 118H111.148L108.148 116M111.148 118L108.148 120")
          }
          19.167% {
            d:path("M98 94H111.075L108.075 92M111.075 94L108.075 96M98 118H111.075L108.075 116M111.075 118L108.075 120")
          }
          19.583% {
            d:path("M98 94H111.001L108.001 92M111.001 94L108.001 96M98 118H111.001L108.001 116M111.001 118L108.001 120")
          }
          20% {
            d:path("M98 94H110.927L107.927 92M110.927 94L107.927 96M98 118H110.927L107.927 116M110.927 118L107.927 120")
          }
          20.417% {
            d:path("M98 94H110.852L107.852 92M110.852 94L107.852 96M98 118H110.852L107.852 116M110.852 118L107.852 120")
          }
          20.833% {
            d:path("M98 94H110.776L107.776 92M110.776 94L107.776 96M98 118H110.776L107.776 116M110.776 118L107.776 120")
          }
          21.25% {
            d:path("M98 94H110.7L107.7 92M110.7 94L107.7 96M98 118H110.7L107.7 116M110.7 118L107.7 120")
          }
          21.667% {
            d:path("M98 94H110.624L107.624 92M110.624 94L107.624 96M98 118H110.624L107.624 116M110.624 118L107.624 120")
          }
          22.083% {
            d:path("M98 94H110.547L107.547 92M110.547 94L107.547 96M98 118H110.547L107.547 116M110.547 118L107.547 120")
          }
          22.5% {
            d:path("M98 94H110.469L107.469 92M110.469 94L107.469 96M98 118H110.469L107.469 116M110.469 118L107.469 120")
          }
          22.917% {
            d:path("M98 94H110.392L107.392 92M110.392 94L107.392 96M98 118H110.392L107.392 116M110.392 118L107.392 120")
          }
          23.333% {
            d:path("M98 94H110.314L107.314 92M110.314 94L107.314 96M98 118H110.314L107.314 116M110.314 118L107.314 120")
          }
          23.75% {
            d:path("M98 94H110.235L107.235 92M110.235 94L107.235 96M98 118H110.235L107.235 116M110.235 118L107.235 120")
          }
          24.167% {
            d:path("M98 94H110.157L107.157 92M110.157 94L107.157 96M98 118H110.157L107.157 116M110.157 118L107.157 120")
          }
          24.583% {
            d:path("M98 94H110.079L107.079 92M110.079 94L107.079 96M98 118H110.079L107.079 116M110.079 118L107.079 120")
          }
          25% {
            d:path("M98 94H110L107 92M110 94L107 96M98 118H110L107 116M110 118L107 120")
          }
          25.417% {
            d:path("M98 94H109.921L106.921 92M109.921 94L106.921 96M98 118H109.921L106.921 116M109.921 118L106.921 120")
          }
          25.833% {
            d:path("M98 94H109.843L106.843 92M109.843 94L106.843 96M98 118H109.843L106.843 116M109.843 118L106.843 120")
          }
          26.25% {
            d:path("M98 94H109.765L106.765 92M109.765 94L106.765 96M98 118H109.765L106.765 116M109.765 118L106.765 120")
          }
          26.667% {
            d:path("M98 94H109.686L106.686 92M109.686 94L106.686 96M98 118H109.686L106.686 116M109.686 118L106.686 120")
          }
          27.083% {
            d:path("M98 94H109.608L106.608 92M109.608 94L106.608 96M98 118H109.608L106.608 116M109.608 118L106.608 120")
          }
          27.5% {
            d:path("M98 94H109.531L106.531 92M109.531 94L106.531 96M98 118H109.531L106.531 116M109.531 118L106.531 120")
          }
          27.917% {
            d:path("M98 94H109.453L106.453 92M109.453 94L106.453 96M98 118H109.453L106.453 116M109.453 118L106.453 120")
          }
          28.333% {
            d:path("M98 94H109.376L106.376 92M109.376 94L106.376 96M98 118H109.376L106.376 116M109.376 118L106.376 120")
          }
          28.75% {
            d:path("M98 94H109.3L106.3 92M109.3 94L106.3 96M98 118H109.3L106.3 116M109.3 118L106.3 120")
          }
          29.167% {
            d:path("M98 94H109.224L106.224 92M109.224 94L106.224 96M98 118H109.224L106.224 116M109.224 118L106.224 120")
          }
          29.583% {
            d:path("M98 94H109.148L106.148 92M109.148 94L106.148 96M98 118H109.148L106.148 116M109.148 118L106.148 120")
          }
          30% {
            d:path("M98 94H109.073L106.073 92M109.073 94L106.073 96M98 118H109.073L106.073 116M109.073 118L106.073 120")
          }
          30.417% {
            d:path("M98 94H108.999L105.999 92M108.999 94L105.999 96M98 118H108.999L105.999 116M108.999 118L105.999 120")
          }
          30.833% {
            d:path("M98 94H108.925L105.925 92M108.925 94L105.925 96M98 118H108.925L105.925 116M108.925 118L105.925 120")
          }
          31.25% {
            d:path("M98 94H108.852L105.852 92M108.852 94L105.852 96M98 118H108.852L105.852 116M108.852 118L105.852 120")
          }
          31.667% {
            d:path("M98 94H108.78L105.78 92M108.78 94L105.78 96M98 118H108.78L105.78 116M108.78 118L105.78 120")
          }
          32.083% {
            d:path("M98 94H108.708L105.708 92M108.708 94L105.708 96M98 118H108.708L105.708 116M108.708 118L105.708 120")
          }
          32.5% {
            d:path("M98 94H108.638L105.638 92M108.638 94L105.638 96M98 118H108.638L105.638 116M108.638 118L105.638 120")
          }
          32.917% {
            d:path("M98 94H108.569L105.569 92M108.569 94L105.569 96M98 118H108.569L105.569 116M108.569 118L105.569 120")
          }
          33.333% {
            d:path("M98 94H108.5L105.5 92M108.5 94L105.5 96M98 118H108.5L105.5 116M108.5 118L105.5 120")
          }
          33.75% {
            d:path("M98 94H108.433L105.433 92M108.433 94L105.433 96M98 118H108.433L105.433 116M108.433 118L105.433 120")
          }
          34.167% {
            d:path("M98 94H108.366L105.366 92M108.366 94L105.366 96M98 118H108.366L105.366 116M108.366 118L105.366 120")
          }
          34.583% {
            d:path("M98 94H108.301L105.301 92M108.301 94L105.301 96M98 118H108.301L105.301 116M108.301 118L105.301 120")
          }
          35% {
            d:path("M98 94H108.237L105.237 92M108.237 94L105.237 96M98 118H108.237L105.237 116M108.237 118L105.237 120")
          }
          35.417% {
            d:path("M98 94H108.174L105.174 92M108.174 94L105.174 96M98 118H108.174L105.174 116M108.174 118L105.174 120")
          }
          35.833% {
            d:path("M98 94H108.112L105.112 92M108.112 94L105.112 96M98 118H108.112L105.112 116M108.112 118L105.112 120")
          }
          36.25% {
            d:path("M98 94H108.052L105.052 92M108.052 94L105.052 96M98 118H108.052L105.052 116M108.052 118L105.052 120")
          }
          36.667% {
            d:path("M98 94H107.993L104.993 92M107.993 94L104.993 96M98 118H107.993L104.993 116M107.993 118L104.993 120")
          }
          37.083% {
            d:path("M98 94H107.935L104.935 92M107.935 94L104.935 96M98 118H107.935L104.935 116M107.935 118L104.935 120")
          }
          37.5% {
            d:path("M98 94H107.879L104.879 92M107.879 94L104.879 96M98 118H107.879L104.879 116M107.879 118L104.879 120")
          }
          37.917% {
            d:path("M98 94H107.824L104.824 92M107.824 94L104.824 96M98 118H107.824L104.824 116M107.824 118L104.824 120")
          }
          38.333% {
            d:path("M98 94H107.771L104.771 92M107.771 94L104.771 96M98 118H107.771L104.771 116M107.771 118L104.771 120")
          }
          38.75% {
            d:path("M98 94H107.719L104.719 92M107.719 94L104.719 96M98 118H107.719L104.719 116M107.719 118L104.719 120")
          }
          39.167% {
            d:path("M98 94H107.669L104.669 92M107.669 94L104.669 96M98 118H107.669L104.669 116M107.669 118L104.669 120")
          }
          39.583% {
            d:path("M98 94H107.62L104.62 92M107.62 94L104.62 96M98 118H107.62L104.62 116M107.62 118L104.62 120")
          }
          40% {
            d:path("M98 94H107.573L104.573 92M107.573 94L104.573 96M98 118H107.573L104.573 116M107.573 118L104.573 120")
          }
          40.417% {
            d:path("M98 94H107.528L104.528 92M107.528 94L104.528 96M98 118H107.528L104.528 116M107.528 118L104.528 120")
          }
          40.833% {
            d:path("M98 94H107.484L104.484 92M107.484 94L104.484 96M98 118H107.484L104.484 116M107.484 118L104.484 120")
          }
          41.25% {
            d:path("M98 94H107.442L104.442 92M107.442 94L104.442 96M98 118H107.442L104.442 116M107.442 118L104.442 120")
          }
          41.667% {
            d:path("M98 94H107.402L104.402 92M107.402 94L104.402 96M98 118H107.402L104.402 116M107.402 118L104.402 120")
          }
          42.083% {
            d:path("M98 94H107.364L104.364 92M107.364 94L104.364 96M98 118H107.364L104.364 116M107.364 118L104.364 120")
          }
          42.5% {
            d:path("M98 94H107.327L104.327 92M107.327 94L104.327 96M98 118H107.327L104.327 116M107.327 118L104.327 120")
          }
          42.917% {
            d:path("M98 94H107.292L104.292 92M107.292 94L104.292 96M98 118H107.292L104.292 116M107.292 118L104.292 120")
          }
          43.333% {
            d:path("M98 94H107.259L104.259 92M107.259 94L104.259 96M98 118H107.259L104.259 116M107.259 118L104.259 120")
          }
          43.75% {
            d:path("M98 94H107.228L104.228 92M107.228 94L104.228 96M98 118H107.228L104.228 116M107.228 118L104.228 120")
          }
          44.167% {
            d:path("M98 94H107.199L104.199 92M107.199 94L104.199 96M98 118H107.199L104.199 116M107.199 118L104.199 120")
          }
          44.583% {
            d:path("M98 94H107.172L104.172 92M107.172 94L104.172 96M98 118H107.172L104.172 116M107.172 118L104.172 120")
          }
          45% {
            d:path("M98 94H107.147L104.147 92M107.147 94L104.147 96M98 118H107.147L104.147 116M107.147 118L104.147 120")
          }
          45.417% {
            d:path("M98 94H107.124L104.124 92M107.124 94L104.124 96M98 118H107.124L104.124 116M107.124 118L104.124 120")
          }
          45.833% {
            d:path("M98 94H107.102L104.102 92M107.102 94L104.102 96M98 118H107.102L104.102 116M107.102 118L104.102 120")
          }
          46.25% {
            d:path("M98 94H107.083L104.083 92M107.083 94L104.083 96M98 118H107.083L104.083 116M107.083 118L104.083 120")
          }
          46.667% {
            d:path("M98 94H107.066L104.066 92M107.066 94L104.066 96M98 118H107.066L104.066 116M107.066 118L104.066 120")
          }
          47.083% {
            d:path("M98 94H107.05L104.05 92M107.05 94L104.05 96M98 118H107.05L104.05 116M107.05 118L104.05 120")
          }
          47.5% {
            d:path("M98 94H107.037L104.037 92M107.037 94L104.037 96M98 118H107.037L104.037 116M107.037 118L104.037 120")
          }
          47.917% {
            d:path("M98 94H107.026L104.026 92M107.026 94L104.026 96M98 118H107.026L104.026 116M107.026 118L104.026 120")
          }
          48.333% {
            d:path("M98 94H107.016L104.016 92M107.016 94L104.016 96M98 118H107.016L104.016 116M107.016 118L104.016 120")
          }
          48.75% {
            d:path("M98 94H107.009L104.009 92M107.009 94L104.009 96M98 118H107.009L104.009 116M107.009 118L104.009 120")
          }
          49.167% {
            d:path("M98 94H107.004L104.004 92M107.004 94L104.004 96M98 118H107.004L104.004 116M107.004 118L104.004 120")
          }
          49.583% {
            d:path("M98 94H107.001L104.001 92M107.001 94L104.001 96M98 118H107.001L104.001 116M107.001 118L104.001 120")
          }
          50% {
            d:path("M98 94H107L104 92M107 94L104 96M98 118H107L104 116M107 118L104 120")
          }
          50.417% {
            d:path("M98 94H107.001L104.001 92M107.001 94L104.001 96M98 118H107.001L104.001 116M107.001 118L104.001 120")
          }
          50.833% {
            d:path("M98 94H107.004L104.004 92M107.004 94L104.004 96M98 118H107.004L104.004 116M107.004 118L104.004 120")
          }
          51.25% {
            d:path("M98 94H107.009L104.009 92M107.009 94L104.009 96M98 118H107.009L104.009 116M107.009 118L104.009 120")
          }
          51.667% {
            d:path("M98 94H107.016L104.016 92M107.016 94L104.016 96M98 118H107.016L104.016 116M107.016 118L104.016 120")
          }
          52.083% {
            d:path("M98 94H107.026L104.026 92M107.026 94L104.026 96M98 118H107.026L104.026 116M107.026 118L104.026 120")
          }
          52.5% {
            d:path("M98 94H107.037L104.037 92M107.037 94L104.037 96M98 118H107.037L104.037 116M107.037 118L104.037 120")
          }
          52.917% {
            d:path("M98 94H107.05L104.05 92M107.05 94L104.05 96M98 118H107.05L104.05 116M107.05 118L104.05 120")
          }
          53.333% {
            d:path("M98 94H107.066L104.066 92M107.066 94L104.066 96M98 118H107.066L104.066 116M107.066 118L104.066 120")
          }
          53.75% {
            d:path("M98 94H107.083L104.083 92M107.083 94L104.083 96M98 118H107.083L104.083 116M107.083 118L104.083 120")
          }
          54.167% {
            d:path("M98 94H107.102L104.102 92M107.102 94L104.102 96M98 118H107.102L104.102 116M107.102 118L104.102 120")
          }
          54.583% {
            d:path("M98 94H107.124L104.124 92M107.124 94L104.124 96M98 118H107.124L104.124 116M107.124 118L104.124 120")
          }
          55.0% {
            d:path("M98 94H107.147L104.147 92M107.147 94L104.147 96M98 118H107.147L104.147 116M107.147 118L104.147 120")
          }
          55.417% {
            d:path("M98 94H107.172L104.172 92M107.172 94L104.172 96M98 118H107.172L104.172 116M107.172 118L104.172 120")
          }
          55.833% {
            d:path("M98 94H107.199L104.199 92M107.199 94L104.199 96M98 118H107.199L104.199 116M107.199 118L104.199 120")
          }
          56.25% {
            d:path("M98 94H107.228L104.228 92M107.228 94L104.228 96M98 118H107.228L104.228 116M107.228 118L104.228 120")
          }
          56.667% {
            d:path("M98 94H107.259L104.259 92M107.259 94L104.259 96M98 118H107.259L104.259 116M107.259 118L104.259 120")
          }
          57.083% {
            d:path("M98 94H107.292L104.292 92M107.292 94L104.292 96M98 118H107.292L104.292 116M107.292 118L104.292 120")
          }
          57.5% {
            d:path("M98 94H107.327L104.327 92M107.327 94L104.327 96M98 118H107.327L104.327 116M107.327 118L104.327 120")
          }
          57.917% {
            d:path("M98 94H107.364L104.364 92M107.364 94L104.364 96M98 118H107.364L104.364 116M107.364 118L104.364 120")
          }
          58.333% {
            d:path("M98 94H107.402L104.402 92M107.402 94L104.402 96M98 118H107.402L104.402 116M107.402 118L104.402 120")
          }
          58.75% {
            d:path("M98 94H107.442L104.442 92M107.442 94L104.442 96M98 118H107.442L104.442 116M107.442 118L104.442 120")
          }
          59.167% {
            d:path("M98 94H107.484L104.484 92M107.484 94L104.484 96M98 118H107.484L104.484 116M107.484 118L104.484 120")
          }
          59.583% {
            d:path("M98 94H107.528L104.528 92M107.528 94L104.528 96M98 118H107.528L104.528 116M107.528 118L104.528 120")
          }
          60% {
            d:path("M98 94H107.573L104.573 92M107.573 94L104.573 96M98 118H107.573L104.573 116M107.573 118L104.573 120")
          }
          60.417% {
            d:path("M98 94H107.62L104.62 92M107.62 94L104.62 96M98 118H107.62L104.62 116M107.62 118L104.62 120")
          }
          60.833% {
            d:path("M98 94H107.669L104.669 92M107.669 94L104.669 96M98 118H107.669L104.669 116M107.669 118L104.669 120")
          }
          61.25% {
            d:path("M98 94H107.719L104.719 92M107.719 94L104.719 96M98 118H107.719L104.719 116M107.719 118L104.719 120")
          }
          61.667% {
            d:path("M98 94H107.771L104.771 92M107.771 94L104.771 96M98 118H107.771L104.771 116M107.771 118L104.771 120")
          }
          62.083% {
            d:path("M98 94H107.824L104.824 92M107.824 94L104.824 96M98 118H107.824L104.824 116M107.824 118L104.824 120")
          }
          62.5% {
            d:path("M98 94H107.879L104.879 92M107.879 94L104.879 96M98 118H107.879L104.879 116M107.879 118L104.879 120")
          }
          62.917% {
            d:path("M98 94H107.935L104.935 92M107.935 94L104.935 96M98 118H107.935L104.935 116M107.935 118L104.935 120")
          }
          63.333% {
            d:path("M98 94H107.993L104.993 92M107.993 94L104.993 96M98 118H107.993L104.993 116M107.993 118L104.993 120")
          }
          63.75% {
            d:path("M98 94H108.052L105.052 92M108.052 94L105.052 96M98 118H108.052L105.052 116M108.052 118L105.052 120")
          }
          64.167% {
            d:path("M98 94H108.112L105.112 92M108.112 94L105.112 96M98 118H108.112L105.112 116M108.112 118L105.112 120")
          }
          64.583% {
            d:path("M98 94H108.174L105.174 92M108.174 94L105.174 96M98 118H108.174L105.174 116M108.174 118L105.174 120")
          }
          65% {
            d:path("M98 94H108.237L105.237 92M108.237 94L105.237 96M98 118H108.237L105.237 116M108.237 118L105.237 120")
          }
          65.417% {
            d:path("M98 94H108.301L105.301 92M108.301 94L105.301 96M98 118H108.301L105.301 116M108.301 118L105.301 120")
          }
          65.833% {
            d:path("M98 94H108.366L105.366 92M108.366 94L105.366 96M98 118H108.366L105.366 116M108.366 118L105.366 120")
          }
          66.25% {
            d:path("M98 94H108.433L105.433 92M108.433 94L105.433 96M98 118H108.433L105.433 116M108.433 118L105.433 120")
          }
          66.667% {
            d:path("M98 94H108.5L105.5 92M108.5 94L105.5 96M98 118H108.5L105.5 116M108.5 118L105.5 120")
          }
          67.083% {
            d:path("M98 94H108.569L105.569 92M108.569 94L105.569 96M98 118H108.569L105.569 116M108.569 118L105.569 120")
          }
          67.5% {
            d:path("M98 94H108.638L105.638 92M108.638 94L105.638 96M98 118H108.638L105.638 116M108.638 118L105.638 120")
          }
          67.917% {
            d:path("M98 94H108.708L105.708 92M108.708 94L105.708 96M98 118H108.708L105.708 116M108.708 118L105.708 120")
          }
          68.333% {
            d:path("M98 94H108.78L105.78 92M108.78 94L105.78 96M98 118H108.78L105.78 116M108.78 118L105.78 120")
          }
          68.75% {
            d:path("M98 94H108.852L105.852 92M108.852 94L105.852 96M98 118H108.852L105.852 116M108.852 118L105.852 120")
          }
          69.167% {
            d:path("M98 94H108.925L105.925 92M108.925 94L105.925 96M98 118H108.925L105.925 116M108.925 118L105.925 120")
          }
          69.583% {
            d:path("M98 94H108.999L105.999 92M108.999 94L105.999 96M98 118H108.999L105.999 116M108.999 118L105.999 120")
          }
          70% {
            d:path("M98 94H109.073L106.073 92M109.073 94L106.073 96M98 118H109.073L106.073 116M109.073 118L106.073 120")
          }
          70.417% {
            d:path("M98 94H109.148L106.148 92M109.148 94L106.148 96M98 118H109.148L106.148 116M109.148 118L106.148 120")
          }
          70.833% {
            d:path("M98 94H109.224L106.224 92M109.224 94L106.224 96M98 118H109.224L106.224 116M109.224 118L106.224 120")
          }
          71.25% {
            d:path("M98 94H109.3L106.3 92M109.3 94L106.3 96M98 118H109.3L106.3 116M109.3 118L106.3 120")
          }
          71.667% {
            d:path("M98 94H109.376L106.376 92M109.376 94L106.376 96M98 118H109.376L106.376 116M109.376 118L106.376 120")
          }
          72.083% {
            d:path("M98 94H109.453L106.453 92M109.453 94L106.453 96M98 118H109.453L106.453 116M109.453 118L106.453 120")
          }
          72.5% {
            d:path("M98 94H109.531L106.531 92M109.531 94L106.531 96M98 118H109.531L106.531 116M109.531 118L106.531 120")
          }
          72.917% {
            d:path("M98 94H109.608L106.608 92M109.608 94L106.608 96M98 118H109.608L106.608 116M109.608 118L106.608 120")
          }
          73.333% {
            d:path("M98 94H109.686L106.686 92M109.686 94L106.686 96M98 118H109.686L106.686 116M109.686 118L106.686 120")
          }
          73.75% {
            d:path("M98 94H109.765L106.765 92M109.765 94L106.765 96M98 118H109.765L106.765 116M109.765 118L106.765 120")
          }
          74.167% {
            d:path("M98 94H109.843L106.843 92M109.843 94L106.843 96M98 118H109.843L106.843 116M109.843 118L106.843 120")
          }
          74.583% {
            d:path("M98 94H109.921L106.921 92M109.921 94L106.921 96M98 118H109.921L106.921 116M109.921 118L106.921 120")
          }
          75% {
            d:path("M98 94H110L107 92M110 94L107 96M98 118H110L107 116M110 118L107 120")
          }
          75.417% {
            d:path("M98 94H110.079L107.079 92M110.079 94L107.079 96M98 118H110.079L107.079 116M110.079 118L107.079 120")
          }
          75.833% {
            d:path("M98 94H110.157L107.157 92M110.157 94L107.157 96M98 118H110.157L107.157 116M110.157 118L107.157 120")
          }
          76.25% {
            d:path("M98 94H110.235L107.235 92M110.235 94L107.235 96M98 118H110.235L107.235 116M110.235 118L107.235 120")
          }
          76.667% {
            d:path("M98 94H110.314L107.314 92M110.314 94L107.314 96M98 118H110.314L107.314 116M110.314 118L107.314 120")
          }
          77.083% {
            d:path("M98 94H110.392L107.392 92M110.392 94L107.392 96M98 118H110.392L107.392 116M110.392 118L107.392 120")
          }
          77.5% {
            d:path("M98 94H110.469L107.469 92M110.469 94L107.469 96M98 118H110.469L107.469 116M110.469 118L107.469 120")
          }
          77.917% {
            d:path("M98 94H110.547L107.547 92M110.547 94L107.547 96M98 118H110.547L107.547 116M110.547 118L107.547 120")
          }
          78.333% {
            d:path("M98 94H110.624L107.624 92M110.624 94L107.624 96M98 118H110.624L107.624 116M110.624 118L107.624 120")
          }
          78.75% {
            d:path("M98 94H110.7L107.7 92M110.7 94L107.7 96M98 118H110.7L107.7 116M110.7 118L107.7 120")
          }
          79.167% {
            d:path("M98 94H110.776L107.776 92M110.776 94L107.776 96M98 118H110.776L107.776 116M110.776 118L107.776 120")
          }
          79.583% {
            d:path("M98 94H110.852L107.852 92M110.852 94L107.852 96M98 118H110.852L107.852 116M110.852 118L107.852 120")
          }
          80% {
            d:path("M98 94H110.927L107.927 92M110.927 94L107.927 96M98 118H110.927L107.927 116M110.927 118L107.927 120")
          }
          80.417% {
            d:path("M98 94H111.001L108.001 92M111.001 94L108.001 96M98 118H111.001L108.001 116M111.001 118L108.001 120")
          }
          80.833% {
            d:path("M98 94H111.075L108.075 92M111.075 94L108.075 96M98 118H111.075L108.075 116M111.075 118L108.075 120")
          }
          81.25% {
            d:path("M98 94H111.148L108.148 92M111.148 94L108.148 96M98 118H111.148L108.148 116M111.148 118L108.148 120")
          }
          81.667% {
            d:path("M98 94H111.22L108.22 92M111.22 94L108.22 96M98 118H111.22L108.22 116M111.22 118L108.22 120")
          }
          82.083% {
            d:path("M98 94H111.292L108.292 92M111.292 94L108.292 96M98 118H111.292L108.292 116M111.292 118L108.292 120")
          }
          82.5% {
            d:path("M98 94H111.362L108.362 92M111.362 94L108.362 96M98 118H111.362L108.362 116M111.362 118L108.362 120")
          }
          82.917% {
            d:path("M98 94H111.431L108.431 92M111.431 94L108.431 96M98 118H111.431L108.431 116M111.431 118L108.431 120")
          }
          83.333% {
            d:path("M98 94H111.5L108.5 92M111.5 94L108.5 96M98 118H111.5L108.5 116M111.5 118L108.5 120")
          }
          83.75% {
            d:path("M98 94H111.567L108.567 92M111.567 94L108.567 96M98 118H111.567L108.567 116M111.567 118L108.567 120")
          }
          84.167% {
            d:path("M98 94H111.634L108.634 92M111.634 94L108.634 96M98 118H111.634L108.634 116M111.634 118L108.634 120")
          }
          84.583% {
            d:path("M98 94H111.699L108.699 92M111.699 94L108.699 96M98 118H111.699L108.699 116M111.699 118L108.699 120")
          }
          85% {
            d:path("M98 94H111.763L108.763 92M111.763 94L108.763 96M98 118H111.763L108.763 116M111.763 118L108.763 120")
          }
          85.417% {
            d:path("M98 94H111.826L108.826 92M111.826 94L108.826 96M98 118H111.826L108.826 116M111.826 118L108.826 120")
          }
          85.833% {
            d:path("M98 94H111.888L108.888 92M111.888 94L108.888 96M98 118H111.888L108.888 116M111.888 118L108.888 120")
          }
          86.25% {
            d:path("M98 94H111.948L108.948 92M111.948 94L108.948 96M98 118H111.948L108.948 116M111.948 118L108.948 120")
          }
          86.667% {
            d:path("M98 94H112.007L109.007 92M112.007 94L109.007 96M98 118H112.007L109.007 116M112.007 118L109.007 120")
          }
          87.083% {
            d:path("M98 94H112.065L109.065 92M112.065 94L109.065 96M98 118H112.065L109.065 116M112.065 118L109.065 120")
          }
          87.5% {
            d:path("M98 94H112.121L109.121 92M112.121 94L109.121 96M98 118H112.121L109.121 116M112.121 118L109.121 120")
          }
          87.917% {
            d:path("M98 94H112.176L109.176 92M112.176 94L109.176 96M98 118H112.176L109.176 116M112.176 118L109.176 120")
          }
          88.333% {
            d:path("M98 94H112.229L109.229 92M112.229 94L109.229 96M98 118H112.229L109.229 116M112.229 118L109.229 120")
          }
          88.75% {
            d:path("M98 94H112.281L109.281 92M112.281 94L109.281 96M98 118H112.281L109.281 116M112.281 118L109.281 120")
          }
          89.167% {
            d:path("M98 94H112.331L109.331 92M112.331 94L109.331 96M98 118H112.331L109.331 116M112.331 118L109.331 120")
          }
          89.583% {
            d:path("M98 94H112.38L109.38 92M112.38 94L109.38 96M98 118H112.38L109.38 116M112.38 118L109.38 120")
          }
          90% {
            d:path("M98 94H112.427L109.427 92M112.427 94L109.427 96M98 118H112.427L109.427 116M112.427 118L109.427 120")
          }
          90.417% {
            d:path("M98 94H112.472L109.472 92M112.472 94L109.472 96M98 118H112.472L109.472 116M112.472 118L109.472 120")
          }
          90.833% {
            d:path("M98 94H112.516L109.516 92M112.516 94L109.516 96M98 118H112.516L109.516 116M112.516 118L109.516 120")
          }
          91.25% {
            d:path("M98 94H112.558L109.558 92M112.558 94L109.558 96M98 118H112.558L109.558 116M112.558 118L109.558 120")
          }
          91.667% {
            d:path("M98 94H112.598L109.598 92M112.598 94L109.598 96M98 118H112.598L109.598 116M112.598 118L109.598 120")
          }
          92.083% {
            d:path("M98 94H112.636L109.636 92M112.636 94L109.636 96M98 118H112.636L109.636 116M112.636 118L109.636 120")
          }
          92.5% {
            d:path("M98 94H112.673L109.673 92M112.673 94L109.673 96M98 118H112.673L109.673 116M112.673 118L109.673 120")
          }
          92.917% {
            d:path("M98 94H112.708L109.708 92M112.708 94L109.708 96M98 118H112.708L109.708 116M112.708 118L109.708 120")
          }
          93.333% {
            d:path("M98 94H112.741L109.741 92M112.741 94L109.741 96M98 118H112.741L109.741 116M112.741 118L109.741 120")
          }
          93.75% {
            d:path("M98 94H112.772L109.772 92M112.772 94L109.772 96M98 118H112.772L109.772 116M112.772 118L109.772 120")
          }
          94.167% {
            d:path("M98 94H112.801L109.801 92M112.801 94L109.801 96M98 118H112.801L109.801 116M112.801 118L109.801 120")
          }
          94.583% {
            d:path("M98 94H112.828L109.828 92M112.828 94L109.828 96M98 118H112.828L109.828 116M112.828 118L109.828 120")
          }
          95% {
            d:path("M98 94H112.853L109.853 92M112.853 94L109.853 96M98 118H112.853L109.853 116M112.853 118L109.853 120")
          }
          95.417% {
            d:path("M98 94H112.876L109.876 92M112.876 94L109.876 96M98 118H112.876L109.876 116M112.876 118L109.876 120")
          }
          95.833% {
            d:path("M98 94H112.898L109.898 92M112.898 94L109.898 96M98 118H112.898L109.898 116M112.898 118L109.898 120")
          }
          96.25% {
            d:path("M98 94H112.917L109.917 92M112.917 94L109.917 96M98 118H112.917L109.917 116M112.917 118L109.917 120")
          }
          96.667% {
            d:path("M98 94H112.934L109.934 92M112.934 94L109.934 96M98 118H112.934L109.934 116M112.934 118L109.934 120")
          }
          97.083% {
            d:path("M98 94H112.95L109.95 92M112.95 94L109.95 96M98 118H112.95L109.95 116M112.95 118L109.95 120")
          }
          97.5% {
            d:path("M98 94H112.963L109.963 92M112.963 94L109.963 96M98 118H112.963L109.963 116M112.963 118L109.963 120")
          }
          97.917% {
            d:path("M98 94H112.974L109.974 92M112.974 94L109.974 96M98 118H112.974L109.974 116M112.974 118L109.974 120")
          }
          98.333% {
            d:path("M98 94H112.984L109.984 92M112.984 94L109.984 96M98 118H112.984L109.984 116M112.984 118L109.984 120")
          }
          98.75% {
            d:path("M98 94H112.991L109.991 92M112.991 94L109.991 96M98 118H112.991L109.991 116M112.991 118L109.991 120")
          }
          99.167% {
            d:path("M98 94H112.996L109.996 92M112.996 94L109.996 96M98 118H112.996L109.996 116M112.996 118L109.996 120")
          }
          99.583% {
            d:path("M98 94H112.999L109.999 92M112.999 94L109.999 96M98 118H112.999L109.999 116M112.999 118L109.999 120")
          }
          100% {
            d:path("M98 94H113L110 92M113 94L110 96M98 118H113L110 116M113 118L110 120")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Wind-Turbine Pitch Regulation">
        <path class="tower" d="M63 61L60 128H72L69 61Z"/>
        <path class="section-leader" d="M70 59L96 94"/>
        <circle class="section-frame" cx="109" cy="106" r="18"/>
        <path class="relative-wind" d="M98 94H110L107 92M110 94L107 96M98 118H110L107 116M110 118L107 120"/>
        <g transform="translate(109 106)">
          <path class="airfoil" d="M-11 0Q-5-5 3-2L11 0Q0 3-11 0Z"/>
        </g>
        <g transform="translate(66 55)">
          <g class="wind-rotor">
            <g transform="rotate(0)">
              <path class="blade-root" d="M0-4V-9"/>
              <path class="blade" d="M-2 -6C-3 -12 -5 -25 -2 -33Q0 -35 2 -33L3 -8Q2 -6 -2 -6Z"/>
            </g>
            <g transform="rotate(120)">
              <path class="blade-root" d="M0-4V-9"/>
              <path class="blade" d="M-2 -6C-3 -12 -5 -25 -2 -33Q0 -35 2 -33L3 -8Q2 -6 -2 -6Z"/>
            </g>
            <g transform="rotate(240)">
              <path class="blade-root" d="M0-4V-9"/>
              <path class="blade" d="M-2 -6C-3 -12 -5 -25 -2 -33Q0 -35 2 -33L3 -8Q2 -6 -2 -6Z"/>
            </g>
          </g>
          <circle class="hub" r="5"/>
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

if (!customElements.get("concept-wind-turbine-pitch-regulation")) {
  customElements.define("concept-wind-turbine-pitch-regulation", ConceptWindTurbinePitchRegulation);
}
